Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs-pro/collaboration"),
  n = require("@univerjs-pro/license"),
  r = require("@univerjs/network"),
  i = require("@univerjs/protocol"),
  a = require("rxjs"),
  o = function (var_core_value_sig62B7) {
    return var_core_value_sig62B7.HISTORY = "history", var_core_value_sig62B7.SNAPSHOT = "snapshot", var_core_value_sig62B7;
  }({}),
  s = function (var_core_value_sig37A8) {
    return var_core_value_sig37A8.DELETE = "delete", var_core_value_sig37A8.INSERT = "insert", var_core_value_sig37A8.UPDATE = "update", var_core_value_sig37A8;
  }({}),
  c = function (var_core_value_sigA90D) {
    return var_core_value_sigA90D.SUMMARY = "summary", var_core_value_sigA90D.CHANGES = "changes", var_core_value_sigA90D.FULL = "full", var_core_value_sigA90D;
  }({}),
  l = function (var_core_value_sig7A3C) {
    return var_core_value_sig7A3C.DELETE = "delete", var_core_value_sig7A3C.EQUAL = "equal", var_core_value_sig7A3C.INSERT = "insert", var_core_value_sig7A3C;
  }({}),
  u = function (var_core_value_sig0511) {
    return var_core_value_sig0511.ARRAY = "array", var_core_value_sig0511.BOOLEAN = "boolean", var_core_value_sig0511.COLOR = "color", var_core_value_sig0511.FORMULA = "formula", var_core_value_sig0511.GEOMETRY = "geometry", var_core_value_sig0511.NULL = "null", var_core_value_sig0511.NUMBER = "number", var_core_value_sig0511.OBJECT = "object", var_core_value_sig0511.POSITION = "position", var_core_value_sig0511.REFERENCE = "reference", var_core_value_sig0511.STYLE = "style", var_core_value_sig0511.TEXT = "text", var_core_value_sig0511.UNKNOWN = "unknown", var_core_value_sig0511;
  }({}),
  d = function (var_core_value_sig1F44) {
    return var_core_value_sig1F44.UNIT = "unit", var_core_value_sig1F44.WORKBOOK = "workbook", var_core_value_sig1F44.WORKSHEET = "worksheet", var_core_value_sig1F44.CELL = "cell", var_core_value_sig1F44.ROW_COLUMN = "row-column", var_core_value_sig1F44.MOVE = "move", var_core_value_sig1F44.CONDITION_FORMAT = "condition-format", var_core_value_sig1F44.DATA_VALIDATION = "data-validation", var_core_value_sig1F44.SPARKLINE = "sparkline", var_core_value_sig1F44.TABLE = "table", var_core_value_sig1F44.SHAPE = "shape", var_core_value_sig1F44.CHART = "chart", var_core_value_sig1F44.PIVOT = "pivot", var_core_value_sig1F44.PARAGRAPH = "paragraph", var_core_value_sig1F44.TEXT_STYLE = "text-style", var_core_value_sig1F44.SECTION = "section", var_core_value_sig1F44.BLOCK_RANGE = "block-range", var_core_value_sig1F44.CUSTOM_RANGE = "custom-range", var_core_value_sig1F44.TABLE_RANGE = "table-range", var_core_value_sig1F44.CUSTOM_BLOCK = "custom-block", var_core_value_sig1F44.COLUMN_GROUP = "column-group", var_core_value_sig1F44.DRAWING = "drawing", var_core_value_sig1F44.HEADER = "header", var_core_value_sig1F44.FOOTER = "footer", var_core_value_sig1F44.DOCUMENT_STYLE = "document-style", var_core_value_sig1F44.DOCUMENT_SETTING = "document-setting", var_core_value_sig1F44.CUSTOM_DECORATION = "custom-decoration", var_core_value_sig1F44.DOC_HYPERLINK = "doc-hyperlink", var_core_value_sig1F44.DOC_CALLOUT = "doc-callout", var_core_value_sig1F44.DOC_QUOTE = "doc-quote", var_core_value_sig1F44.DOC_CHART = "doc-chart", var_core_value_sig1F44.DOC_CHART_DATA = "doc-chart-data", var_core_value_sig1F44.DOC_CODE = "doc-code", var_core_value_sig1F44.DOC_LATEX = "doc-latex", var_core_value_sig1F44.DOC_SHAPE_RESOURCE = "doc-shape-resource", var_core_value_sig1F44.DOC_TABLE_RESOURCE = "doc-table-resource", var_core_value_sig1F44.SLIDE = "slide", var_core_value_sig1F44.SLIDE_ELEMENT = "slide-element", var_core_value_sig1F44.SLIDE_TRANSITION = "slide-transition", var_core_value_sig1F44.SLIDE_TRANSITION_REFERENCE = "slide-transition-ref", var_core_value_sig1F44.SLIDE_MASTER = "slide-master", var_core_value_sig1F44.SLIDE_LAYOUT = "slide-layout", var_core_value_sig1F44.SLIDE_THEME = "slide-theme", var_core_value_sig1F44.SLIDE_CHART = "slide-chart", var_core_value_sig1F44.SLIDE_CHART_DATA = "slide-chart-data", var_core_value_sig1F44.SLIDE_TABLE = "slide-table", var_core_value_sig1F44.BASE = "base", var_core_value_sig1F44.FIELD = "field", var_core_value_sig1F44.RECORD = "record", var_core_value_sig1F44.VIEW = "view", var_core_value_sig1F44.BOARD_PAGE = "board-page", var_core_value_sig1F44.BOARD_ELEMENT = "board-element", var_core_value_sig1F44.BOARD_THEME = "board-theme", var_core_value_sig1F44.BOARD_CHART = "board-chart", var_core_value_sig1F44.BOARD_CHART_DATA = "board-chart-data", var_core_value_sig1F44.BOARD_TABLE = "board-table", var_core_value_sig1F44;
  }({}),
  f = function (var_core_value_sigCB04) {
    return var_core_value_sigCB04.DEGRADED = "degraded", var_core_value_sigCB04.READY = "ready", var_core_value_sigCB04;
  }({}),
  p = function (var_core_value_sig947E) {
    return var_core_value_sig947E.SHEET_SNAPSHOT_AXIS_IDENTITY_AMBIGUOUS = "sheet-snapshot-axis-identity-ambiguous", var_core_value_sig947E.SHEET_STRUCTURAL_HISTORY_FALLBACK = "sheet-structural-history-partially-falls-back-to-snapshot-coordinates", var_core_value_sig947E;
  }({});
function ee(var_core_value_sig4545, var_core_value_sigF39A) {
  if (JSON.stringify(var_core_value_sig4545) > JSON.stringify(var_core_value_sigF39A)) return ee(var_core_value_sigF39A, var_core_value_sig4545).map(var_core_value_sigC259 => ({
    leftIndex: var_core_value_sigC259.rightIndex,
    rightIndex: var_core_value_sigC259.leftIndex
  }));
  let var_core_value_sigF79C = new Map(var_core_value_sigF39A.map((var_core_value_sig9C9F, var_core_value_sigFDEA) => [var_core_value_sig9C9F, var_core_value_sigFDEA])),
    var_core_value_sig2E54 = var_core_value_sig4545.flatMap((var_core_value_sig86D0, var_core_value_sig4CD2) => {
      let var_core_value_sig48CA = var_core_value_sigF79C.get(var_core_value_sig86D0);
      return var_core_value_sig48CA === undefined ? [] : [{
        leftIndex: var_core_value_sig4CD2,
        rightIndex: var_core_value_sig48CA
      }];
    }),
    var_core_value_sig7658 = [],
    var_core_value_sigDCF5 = new Int32Array(var_core_value_sig2E54.length).fill(-1);
  var_core_value_sig2E54.forEach((var_core_value_sig50AF, var_core_value_sigA942) => {
    let var_core_value_sigA621 = 0,
      var_core_value_sigBBFF = var_core_value_sig7658.length;
    for (; var_core_value_sigA621 < var_core_value_sigBBFF;) {
      let var_core_value_sig2AD0 = var_core_value_sigA621 + var_core_value_sigBBFF >>> 1;
      var_core_value_sig2E54[var_core_value_sig7658[var_core_value_sig2AD0]].rightIndex < var_core_value_sig50AF.rightIndex ? var_core_value_sigA621 = var_core_value_sig2AD0 + 1 : var_core_value_sigBBFF = var_core_value_sig2AD0;
    }
    var_core_value_sigA621 > 0 && (var_core_value_sigDCF5[var_core_value_sigA942] = var_core_value_sig7658[var_core_value_sigA621 - 1]), var_core_value_sig7658[var_core_value_sigA621] = var_core_value_sigA942;
  });
  let var_core_value_sigC786 = [];
  for (let var_core_value_sig8889 = var_core_value_sig7658[var_core_value_sig7658.length - 1] ?? -1; var_core_value_sig8889 >= 0; var_core_value_sig8889 = var_core_value_sigDCF5[var_core_value_sig8889]) var_core_value_sigC786.push(var_core_value_sig2E54[var_core_value_sig8889]);
  var_core_value_sigC786.reverse(), var_core_value_sigC786.push({
    leftIndex: var_core_value_sig4545.length,
    rightIndex: var_core_value_sigF39A.length
  });
  let var_core_value_sigC0D9 = [],
    var_core_value_sigF051 = 0,
    var_core_value_sig5825 = 0;
  for (let var_core_value_sig32F8 of var_core_value_sigC786) {
    for (; var_core_value_sigF051 < var_core_value_sig32F8.leftIndex;) var_core_value_sigC0D9.push({
      leftIndex: var_core_value_sigF051++,
      rightIndex: null
    });
    for (; var_core_value_sig5825 < var_core_value_sig32F8.rightIndex;) var_core_value_sigC0D9.push({
      leftIndex: null,
      rightIndex: var_core_value_sig5825++
    });
    var_core_value_sigF051 < var_core_value_sig4545.length && var_core_value_sig5825 < var_core_value_sigF39A.length && var_core_value_sigC0D9.push({
      leftIndex: var_core_value_sigF051++,
      rightIndex: var_core_value_sig5825++
    });
  }
  return var_core_value_sigC0D9;
}
const te = new Set(["angle", "height", "left", "rotation", "top", "transform", "width", "x", "y"]),
  ne = new Set(["index", "order", "orderKey", "position", "zIndex"]),
  m = new Set(["background", "backgroundColor", "bold", "border", "fill", "fontFamily", "fontSize", "fontWeight", "italic", "lineHeight", "numberFormat", "opacity", "shadow", "stroke", "style", "textColor", "underline"]),
  re = new Set(["dataSourceId", "endId", "layoutId", "masterId", "parentId", "refId", "sourceId", "startId", "targetId"]);
function ie(var_core_value_sig4EB7) {
  let var_core_value_sig73AF = new Map(),
    var_core_value_sig548A = new Map();
  for (let var_core_value_sig5B67 of var_core_value_sig4EB7.left) var_core_value_sig73AF.set(var_core_value_sig5B67.stableId, var_core_value_sig5B67);
  for (let var_core_value_sig1758 of var_core_value_sig4EB7.right) var_core_value_sig548A.set(var_core_value_sig1758.stableId, var_core_value_sig1758);
  let var_core_value_sigE026 = h(var_core_value_sig4EB7.left, var_core_value_sig548A),
    var_core_value_sig339E = h(var_core_value_sig4EB7.right, var_core_value_sig73AF),
    var_core_value_sig7550 = [];
  for (let [var_core_value_sig4805, var_core_value_sigE67E] of var_core_value_sig73AF) {
    let var_core_value_sig480E = g(var_core_value_sig4EB7, var_core_value_sig4805, var_core_value_sigE67E, var_core_value_sig548A.get(var_core_value_sig4805), var_core_value_sigE026, var_core_value_sig339E);
    var_core_value_sig480E !== undefined && var_core_value_sig7550.push(var_core_value_sig480E);
  }
  for (let [var_core_value_sig2902, var_core_value_sig9989] of var_core_value_sig548A) if (!var_core_value_sig73AF.has(var_core_value_sig2902)) {
    let var_core_value_sig26DB = g(var_core_value_sig4EB7, var_core_value_sig2902, undefined, var_core_value_sig9989, var_core_value_sigE026, var_core_value_sig339E);
    var_core_value_sig26DB !== undefined && var_core_value_sig7550.push(var_core_value_sig26DB);
  }
  return var_core_value_sig7550;
}
function h(var_core_value_sig2983, var_core_value_sigE1B0) {
  let var_core_value_sigD4FF = new Map(),
    var_core_value_sig1E5B = 0;
  for (let var_core_value_sig698E of var_core_value_sig2983) var_core_value_sigE1B0.has(var_core_value_sig698E.stableId) && var_core_value_sigD4FF.set(var_core_value_sig698E.stableId, var_core_value_sig1E5B++);
  return var_core_value_sigD4FF;
}
function g(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  let var_core_value_sig85B1 = ae(var_core_value_sigDD1C, var_core_value_sig2C39),
    var_core_value_sig3141 = oe(var_core_value_sig1F64, var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0);
  if (se(var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sig3141)) return;
  let var_core_value_sig2162 = var_core_value_sigB680.parentStableId === undefined ? [var_core_value_sigB680.entityType, var_core_value_sig1F64] : [var_core_value_sigB680.entityType, var_core_value_sigB680.parentStableId, var_core_value_sig1F64],
    var_core_value_sig2EAD = y(var_core_value_sigDD1C == null ? undefined : var_core_value_sigDD1C.value, var_core_value_sig2C39 == null ? undefined : var_core_value_sig2C39.value, var_core_value_sig85B1);
  ce(var_core_value_sig2EAD, var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sig3141);
  let var_core_value_sig6774 = (var_core_value_sig2C39 == null ? undefined : var_core_value_sig2C39.displayName) ?? (var_core_value_sigDD1C == null ? undefined : var_core_value_sigDD1C.displayName);
  return {
    id: [var_core_value_sigB680.entityType, var_core_value_sigB680.parentStableId, var_core_value_sig85B1, var_core_value_sig1F64].filter(Boolean).join(":"),
    stableId: var_core_value_sig1F64,
    ...(var_core_value_sigB680.parentStableId === undefined ? {} : {
      parentStableId: var_core_value_sigB680.parentStableId
    }),
    kind: var_core_value_sig85B1,
    entityType: var_core_value_sigB680.entityType,
    path: var_core_value_sig2162,
    ...(var_core_value_sig6774 === undefined ? {} : {
      displayName: var_core_value_sig6774
    }),
    moved: var_core_value_sig3141,
    changes: var_core_value_sig2EAD,
    locations: {
      left: v(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sig2162, var_core_value_sigDD1C),
      right: v(var_core_value_sigB680, var_core_value_sig1F64, var_core_value_sig2162, var_core_value_sig2C39)
    },
    values: {
      ...(var_core_value_sigDD1C === undefined ? {} : {
        left: var_core_value_sigDD1C.value
      }),
      ...(var_core_value_sig2C39 === undefined ? {} : {
        right: var_core_value_sig2C39.value
      })
    }
  };
}
function ae(var_core_value_sig340D, var_core_value_sig82D4) {
  return var_core_value_sig340D === undefined ? "insert" : var_core_value_sig82D4 === undefined ? "delete" : "update";
}
function oe(var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E) {
  return var_core_value_sig7DF1 !== undefined && var_core_value_sigDC86 !== undefined && var_core_value_sig0B0C.get(var_core_value_sigBDE4) !== var_core_value_sigA39E.get(var_core_value_sigBDE4);
}
function se(var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167) {
  return var_core_value_sigBBEE !== undefined && var_core_value_sig011D !== undefined && !var_core_value_sig6167 && _(var_core_value_sigBBEE.value, var_core_value_sig011D.value);
}
function _(var_core_value_sig65A1, var_core_value_sig7F19) {
  if (var_core_value_sig65A1 === var_core_value_sig7F19) return true;
  let var_core_value_sig7827 = w(var_core_value_sig65A1),
    var_core_value_sig652C = w(var_core_value_sig7F19);
  if (var_core_value_sig7827 !== undefined && var_core_value_sig652C !== undefined) {
    let var_core_value_sig2809 = Object.keys(var_core_value_sig7827);
    return var_core_value_sig2809.length === Object.keys(var_core_value_sig652C).length && var_core_value_sig2809.every(var_core_value_sigF0F9 => Object.prototype["hasOwnProperty"].call(var_core_value_sig652C, var_core_value_sigF0F9) && _(var_core_value_sig7827[var_core_value_sigF0F9], var_core_value_sig652C[var_core_value_sigF0F9]));
  }
  return T(var_core_value_sig65A1) === T(var_core_value_sig7F19);
}
function ce(var_core_value_sig7E32, var_core_value_sig4C07, var_core_value_sig79AB, var_core_value_sig8E74) {
  !var_core_value_sig8E74 || var_core_value_sig7E32.some(var_core_value_sig2DAB => var_core_value_sig2DAB.valueType === "position") || var_core_value_sig7E32.push({
    path: ["position"],
    kind: "update",
    valueType: "position",
    before: (var_core_value_sig4C07 == null ? undefined : var_core_value_sig4C07.position) ?? null,
    after: (var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.position) ?? null
  });
}
function v(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB, var_core_value_sigBDF5) {
  if (var_core_value_sigBDF5 === undefined) return null;
  let var_core_value_sigACC6 = var_core_value_sigBDF5.nativeStableId ?? var_core_value_sig841D;
  return {
    path: var_core_value_sig90CB,
    stableId: var_core_value_sigACC6,
    ...(var_core_value_sig104C.parentStableId === undefined ? {} : {
      parentStableId: var_core_value_sig104C.parentStableId
    }),
    position: var_core_value_sigBDF5.position,
    target: {
      kind: "entity",
      entityType: var_core_value_sig104C.entityType,
      stableId: var_core_value_sigACC6,
      comparisonStableId: var_core_value_sig841D,
      ...(var_core_value_sig104C.parentStableId === undefined ? {} : {
        parentStableId: var_core_value_sig104C.parentStableId
      })
    }
  };
}
function y(var_core_value_sig1614, var_core_value_sig85C3, var_core_value_sigB996 = "update") {
  if (var_core_value_sigB996 !== "update") {
    let var_core_value_sig877E = var_core_value_sigB996 === "delete" ? var_core_value_sig1614 : var_core_value_sig85C3,
      var_core_value_sig20C8 = [];
    return b(var_core_value_sig877E, [], var_core_value_sigB996, var_core_value_sig20C8), var_core_value_sig20C8;
  }
  let var_core_value_sig4BBA = [];
  E(var_core_value_sig1614, var_core_value_sig85C3, [], var_core_value_sig4BBA);
  let var_core_value_sig6201 = new Set();
  return var_core_value_sig4BBA.filter(var_core_value_sigE9A7 => {
    let var_core_value_sigBECE = T([var_core_value_sigE9A7.sourcePath ?? var_core_value_sigE9A7.path, var_core_value_sigE9A7.kind, var_core_value_sigE9A7.before, var_core_value_sigE9A7.after]);
    return var_core_value_sig6201.has(var_core_value_sigBECE) ? false : (var_core_value_sig6201.add(var_core_value_sigBECE), true);
  }).sort((var_core_value_sig1B22, var_core_value_sig7F72) => T(var_core_value_sig1B22.path).localeCompare(T(var_core_value_sig7F72.path)));
}
function b(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
  let var_core_value_sigB8C7 = w(var_core_value_sig5151);
  if (var_core_value_sigB8C7 !== undefined && Object.keys(var_core_value_sigB8C7).length > 0) {
    for (let var_core_value_sig1A0F of Object.keys(var_core_value_sigB8C7).sort()) b(var_core_value_sigB8C7[var_core_value_sig1A0F], [...var_core_value_sigB542, var_core_value_sig1A0F], var_core_value_sigBB6C, var_core_value_sigE2BF);
    return;
  }
  let var_core_value_sigA56E = D(var_core_value_sigB542);
  var_core_value_sigE2BF.push({
    path: var_core_value_sigA56E,
    ...(T(var_core_value_sigA56E) === T(var_core_value_sigB542) ? {} : {
      sourcePath: var_core_value_sigB542
    }),
    kind: var_core_value_sigBB6C,
    valueType: O(var_core_value_sigA56E, var_core_value_sig5151),
    ...(var_core_value_sigBB6C === "delete" ? {
      before: var_core_value_sig5151
    } : {
      after: var_core_value_sig5151
    })
  });
}
function x(var_core_value_sig1998, var_core_value_sigFF19, var_core_value_sig43B8 = var_core_value_sigFBA4 => var_core_value_sigFBA4) {
  let var_core_value_sigD98F = w(var_core_value_sig1998) ?? {},
    var_core_value_sig66C0 = Array.isArray(var_core_value_sigFF19) ? var_core_value_sigFF19.filter(var_core_value_sig7B2A => typeof var_core_value_sig7B2A == "string" && var_core_value_sig7B2A in var_core_value_sigD98F) : [],
    var_core_value_sig9D15 = new Set(var_core_value_sig66C0);
  return [...var_core_value_sig66C0, ...Object.keys(var_core_value_sigD98F).filter(var_core_value_sig06CD => !var_core_value_sig9D15.has(var_core_value_sig06CD)).sort()].map((var_core_value_sigA5F1, var_core_value_sig97A2) => {
    let var_core_value_sig07E9 = M(var_core_value_sigD98F[var_core_value_sigA5F1]);
    return {
      stableId: var_core_value_sigA5F1,
      position: var_core_value_sig97A2,
      ...(var_core_value_sig07E9 === undefined ? {} : {
        displayName: var_core_value_sig07E9
      }),
      value: var_core_value_sig43B8(var_core_value_sigD98F[var_core_value_sigA5F1])
    };
  });
}
function le(var_core_value_sigB785) {
  return S(var_core_value_sigB785).scopes;
}
function S(var_core_value_sig130F) {
  let var_core_value_sigC0E3 = new Map(var_core_value_sig130F.left["map"](var_core_value_sig4F59 => [var_core_value_sig4F59.stableId, var_core_value_sig4F59])),
    var_core_value_sig52F7 = new Map(var_core_value_sig130F.right["map"](var_core_value_sigF564 => [var_core_value_sigF564.stableId, var_core_value_sigF564])),
    var_core_value_sig866F = new Set([...var_core_value_sigC0E3.keys(), ...var_core_value_sig52F7.keys()]),
    var_core_value_sigDE3D = ue(var_core_value_sig130F.items, var_core_value_sig866F, var_core_value_sig130F.references),
    var_core_value_sigF175 = var_core_value_sig130F.items["map"]((var_core_value_sig8CFA, var_core_value_sig2E11) => {
      let var_core_value_sig5B69 = var_core_value_sigDE3D[var_core_value_sig2E11];
      return var_core_value_sig5B69 === undefined ? var_core_value_sig8CFA : {
        ...var_core_value_sig8CFA,
        scope: {
          entityType: var_core_value_sig130F.entityType,
          stableId: var_core_value_sig5B69
        }
      };
    });
  return {
    items: var_core_value_sigF175,
    scopes: de(var_core_value_sig130F.entityType, var_core_value_sigF175, var_core_value_sig130F.left, var_core_value_sig130F.right, var_core_value_sigC0E3, var_core_value_sig52F7)
  };
}
function ue(var_core_value_sig6A18, var_core_value_sig4E3D, var_core_value_sig49B0) {
  let var_core_value_sig2547 = new Map();
  var_core_value_sig6A18.forEach((var_core_value_sigB098, var_core_value_sigCE71) => {
    let var_core_value_sig21D8 = var_core_value_sig2547.get(var_core_value_sigB098.stableId) ?? [];
    var_core_value_sig21D8.push(var_core_value_sigCE71), var_core_value_sig2547.set(var_core_value_sigB098.stableId, var_core_value_sig21D8);
  });
  let var_core_value_sigBCA9 = new Set(var_core_value_sig2547.keys()),
    var_core_value_sig4CDF = var_core_value_sig6A18.map(var_core_value_sig2B65 => var_core_value_sig2B65.scope !== undefined && var_core_value_sig4E3D.has(var_core_value_sig2B65.scope["stableId"]) ? var_core_value_sig2B65.scope["stableId"] : var_core_value_sig4E3D.has(var_core_value_sig2B65.stableId) ? var_core_value_sig2B65.stableId : var_core_value_sig2B65.parentStableId !== undefined && var_core_value_sig4E3D.has(var_core_value_sig2B65.parentStableId) ? var_core_value_sig2B65.parentStableId : undefined),
    var_core_value_sig3F79 = var_core_value_sig4CDF.flatMap((var_core_value_sigD7EA, var_core_value_sigB33B) => var_core_value_sigD7EA === undefined ? [] : [var_core_value_sigB33B]);
  for (let var_core_value_sig24B9 of [...((var_core_value_sig49B0 == null ? undefined : var_core_value_sig49B0.left) ?? []), ...((var_core_value_sig49B0 == null ? undefined : var_core_value_sig49B0.right) ?? [])]) var_core_value_sig4E3D.has(var_core_value_sig24B9.stableId) && C(var_core_value_sig24B9.value, var_core_value_sig24B9.stableId, var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79);
  for (let var_core_value_sigE627 = 0; var_core_value_sigE627 < var_core_value_sig3F79.length; var_core_value_sigE627 += 1) {
    let var_core_value_sig4383 = var_core_value_sig3F79[var_core_value_sigE627],
      var_core_value_sig186C = var_core_value_sig4CDF[var_core_value_sig4383],
      var_core_value_sigD955 = var_core_value_sig6A18[var_core_value_sig4383];
    var_core_value_sig186C !== undefined && var_core_value_sigD955 !== undefined && C(var_core_value_sigD955.values, var_core_value_sig186C, var_core_value_sig2547, var_core_value_sigBCA9, var_core_value_sig4CDF, var_core_value_sig3F79);
  }
  return var_core_value_sig4CDF;
}
function de(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0) {
  let var_core_value_sig7D40 = new Map(),
    var_core_value_sig6C7E = new Map();
  for (let var_core_value_sigEF3E of var_core_value_sigC9ED) {
    var var_core_value_sig68BE;
    let var_core_value_sig48BD = (var_core_value_sig68BE = var_core_value_sigEF3E.scope) == null ? undefined : var_core_value_sig68BE.stableId;
    var_core_value_sig48BD !== undefined && (var_core_value_sig7D40.set(var_core_value_sig48BD, (var_core_value_sig7D40.get(var_core_value_sig48BD) ?? 0) + 1), var_core_value_sigEF3E.entityType === var_core_value_sig880E && var_core_value_sig6C7E.set(var_core_value_sig48BD, var_core_value_sigEF3E));
  }
  return pe(var_core_value_sigB57B, var_core_value_sig780B).flatMap(var_core_value_sig273D => {
    let var_core_value_sig9A0D = var_core_value_sig7D40.get(var_core_value_sig273D);
    if (var_core_value_sig9A0D === undefined) return [];
    let var_core_value_sigA319 = var_core_value_sig7D1B.get(var_core_value_sig273D),
      var_core_value_sig2D58 = var_core_value_sig7BE0.get(var_core_value_sig273D),
      var_core_value_sig223F = var_core_value_sig6C7E.get(var_core_value_sig273D);
    return [{
      entityType: var_core_value_sig880E,
      stableId: var_core_value_sig273D,
      displayName: (var_core_value_sig2D58 == null ? undefined : var_core_value_sig2D58.displayName) ?? (var_core_value_sigA319 == null ? undefined : var_core_value_sigA319.displayName) ?? var_core_value_sig273D,
      kind: var_core_value_sigA319 === undefined ? "insert" : var_core_value_sig2D58 === undefined ? "delete" : "update",
      changeCount: var_core_value_sig9A0D,
      moved: (var_core_value_sig223F == null ? undefined : var_core_value_sig223F.moved) ?? false,
      locations: {
        left: me(var_core_value_sig880E, var_core_value_sig273D, var_core_value_sigA319),
        right: me(var_core_value_sig880E, var_core_value_sig273D, var_core_value_sig2D58)
      }
    }];
  });
}
function C(var_core_value_sig04C6, var_core_value_sigCA05, var_core_value_sig2F2B, var_core_value_sig70AF, var_core_value_sigD04E, var_core_value_sigB99B) {
  for (let var_core_value_sigD749 of fe(var_core_value_sig04C6, var_core_value_sig70AF)) for (let var_core_value_sig429F of var_core_value_sig2F2B.get(var_core_value_sigD749) ?? []) var_core_value_sigD04E[var_core_value_sig429F] === undefined && (var_core_value_sigD04E[var_core_value_sig429F] = var_core_value_sigCA05, var_core_value_sigB99B.push(var_core_value_sig429F));
}
function fe(var_core_value_sig5A75, var_core_value_sig7BAF) {
  let var_core_value_sig8F69 = new Set(),
    var_core_value_sig6884 = [var_core_value_sig5A75],
    var_core_value_sig066E = new Set();
  for (; var_core_value_sig6884.length > 0;) {
    let var_core_value_sigF62A = var_core_value_sig6884.pop();
    if (typeof var_core_value_sigF62A == "string") {
      var_core_value_sig7BAF.has(var_core_value_sigF62A) && var_core_value_sig8F69.add(var_core_value_sigF62A);
      continue;
    }
    typeof var_core_value_sigF62A != "object" || !var_core_value_sigF62A || var_core_value_sig066E.has(var_core_value_sigF62A) || (var_core_value_sig066E.add(var_core_value_sigF62A), var_core_value_sig6884.push(...(Array.isArray(var_core_value_sigF62A) ? var_core_value_sigF62A : Object.values(var_core_value_sigF62A))));
  }
  return var_core_value_sig8F69;
}
function pe(var_core_value_sig9B0D, var_core_value_sig3D2C) {
  let var_core_value_sigC56D = var_core_value_sig3D2C.map(var_core_value_sigCFFA => var_core_value_sigCFFA.stableId),
    var_core_value_sig3A17 = new Set(var_core_value_sigC56D),
    var_core_value_sig938F = new Map(),
    var_core_value_sigD948 = [];
  for (let var_core_value_sig58C1 of var_core_value_sig9B0D) {
    if (!var_core_value_sig3A17.has(var_core_value_sig58C1.stableId)) {
      var_core_value_sigD948.push(var_core_value_sig58C1.stableId);
      continue;
    }
    var_core_value_sigD948.length > 0 && (var_core_value_sig938F.set(var_core_value_sig58C1.stableId, var_core_value_sigD948), var_core_value_sigD948 = []);
  }
  return var_core_value_sigC56D.flatMap(var_core_value_sig5090 => [...(var_core_value_sig938F.get(var_core_value_sig5090) ?? []), var_core_value_sig5090]).concat(var_core_value_sigD948);
}
function me(var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigED71) {
  return var_core_value_sigED71 === undefined ? null : {
    path: [var_core_value_sigBE5E, var_core_value_sig0281],
    stableId: var_core_value_sigED71.nativeStableId ?? var_core_value_sig0281,
    position: var_core_value_sigED71.position,
    target: {
      kind: "entity",
      entityType: var_core_value_sigBE5E,
      stableId: var_core_value_sigED71.nativeStableId ?? var_core_value_sig0281,
      comparisonStableId: var_core_value_sig0281
    }
  };
}
function he(var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B = var_core_value_sig8178 => var_core_value_sig8178) {
  return (Array.isArray(var_core_value_sig281C) ? var_core_value_sig281C : []).flatMap((var_core_value_sigC368, var_core_value_sigAD56) => {
    let var_core_value_sigDB4A = w(var_core_value_sigC368),
      var_core_value_sig6418 = var_core_value_sigDB4A == null ? undefined : var_core_value_sigDB4A[var_core_value_sig3C92];
    if (typeof var_core_value_sig6418 != "string") return [];
    let var_core_value_sig1896 = M(var_core_value_sigC368);
    return [{
      stableId: var_core_value_sig6418,
      position: var_core_value_sigAD56,
      ...(var_core_value_sig1896 === undefined ? {} : {
        displayName: var_core_value_sig1896
      }),
      value: var_core_value_sigB16B(var_core_value_sigC368)
    }];
  });
}
function ge(var_core_value_sig585D, var_core_value_sigE722, var_core_value_sig062A) {
  var var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F;
  let var_core_value_sigB683 = (Array.isArray((var_core_value_sig050A = w(var_core_value_sig585D)) == null ? undefined : var_core_value_sig050A.resources) ? (var_core_value_sig8B32 = w(var_core_value_sig585D)) == null ? undefined : var_core_value_sig8B32.resources : []).map(w).find(var_core_value_sig0285 => (var_core_value_sig0285 == null ? undefined : var_core_value_sig0285.name) === var_core_value_sigE722);
  if (var_core_value_sigB683 === undefined) return [];
  let var_core_value_sig26EC = var_core_value_sigB683.data;
  if (typeof var_core_value_sig26EC == "string") try {
    var_core_value_sig26EC = JSON.parse(var_core_value_sig26EC);
  } catch {
    return [{
      stableId: "resource",
      position: 0,
      value: var_core_value_sig26EC
    }];
  }
  let var_core_value_sigEEDB = var_core_value_sig062A === undefined ? var_core_value_sig26EC : (var_core_value_sig870F = w(var_core_value_sig26EC)) == null ? undefined : var_core_value_sig870F[var_core_value_sig062A];
  return Array.isArray(var_core_value_sigEEDB) ? var_core_value_sigEEDB.map((var_core_value_sig777D, var_core_value_sig3F4C) => {
    let var_core_value_sigD65A = M(var_core_value_sig777D);
    return {
      stableId: xe(var_core_value_sig777D, var_core_value_sig3F4C),
      position: var_core_value_sig3F4C,
      ...(var_core_value_sigD65A === undefined ? {} : {
        displayName: var_core_value_sigD65A
      }),
      value: var_core_value_sig777D
    };
  }) : x(var_core_value_sigEEDB, undefined);
}
function w(var_core_value_sig36E7) {
  return typeof var_core_value_sig36E7 == "object" && var_core_value_sig36E7 && !Array.isArray(var_core_value_sig36E7) ? var_core_value_sig36E7 : undefined;
}
function _e(...var_core_value_sig6A78) {
  return var_core_value_sig5A13 => {
    let var_core_value_sigF593 = w(var_core_value_sig5A13);
    return var_core_value_sigF593 === undefined ? var_core_value_sig5A13 : Object.fromEntries(Object.entries(var_core_value_sigF593).filter(([var_core_value_sigE9ED]) => !var_core_value_sig6A78.includes(var_core_value_sigE9ED)));
  };
}
function T(var_core_value_sigF7EF) {
  if (Array.isArray(var_core_value_sigF7EF)) return "[" + var_core_value_sigF7EF.map(T).join(",") + "]";
  let var_core_value_sig27F9 = w(var_core_value_sigF7EF);
  return var_core_value_sig27F9 === undefined ? JSON.stringify(var_core_value_sigF7EF) ?? "undefined" : "{" + Object.keys(var_core_value_sig27F9).sort().map(var_core_value_sig3607 => JSON.stringify(var_core_value_sig3607) + ":" + T(var_core_value_sig27F9[var_core_value_sig3607])).join(",") + "}";
}
function E(var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig390D, var_core_value_sigC928) {
  if (_(var_core_value_sig393E, var_core_value_sigB609)) return;
  if (Array.isArray(var_core_value_sig393E) && Array.isArray(var_core_value_sigB609) && !ve(var_core_value_sig393E) && !ve(var_core_value_sigB609)) {
    for (let var_core_value_sigB577 = 0; var_core_value_sigB577 < Math.max(var_core_value_sig393E.length, var_core_value_sigB609.length); var_core_value_sigB577 += 1) {
      let var_core_value_sig3EEE = [...var_core_value_sig390D, String(var_core_value_sigB577)];
      if (var_core_value_sigB577 < var_core_value_sig393E.length && var_core_value_sigB577 < var_core_value_sigB609.length) E(var_core_value_sig393E[var_core_value_sigB577], var_core_value_sigB609[var_core_value_sigB577], var_core_value_sig3EEE, var_core_value_sigC928);else {
        let var_core_value_sig7524 = var_core_value_sigB577 < var_core_value_sig393E.length ? "delete" : "insert";
        b(var_core_value_sigB577 < var_core_value_sig393E.length ? var_core_value_sig393E[var_core_value_sigB577] : var_core_value_sigB609[var_core_value_sigB577], var_core_value_sig3EEE, var_core_value_sig7524, var_core_value_sigC928);
      }
    }
    return;
  }
  let var_core_value_sig39B7 = w(var_core_value_sig393E),
    var_core_value_sig18E0 = w(var_core_value_sigB609);
  if (var_core_value_sig39B7 !== undefined && var_core_value_sig18E0 !== undefined) {
    let var_core_value_sigB512 = [...new Set([...Object.keys(var_core_value_sig39B7), ...Object.keys(var_core_value_sig18E0)])].sort();
    for (let var_core_value_sig9572 of var_core_value_sigB512) {
      let var_core_value_sigBC46 = Object.prototype["hasOwnProperty"].call(var_core_value_sig39B7, var_core_value_sig9572),
        var_core_value_sig3D7D = Object.prototype["hasOwnProperty"].call(var_core_value_sig18E0, var_core_value_sig9572);
      if (var_core_value_sigBC46 && var_core_value_sig3D7D) {
        E(var_core_value_sig39B7[var_core_value_sig9572], var_core_value_sig18E0[var_core_value_sig9572], [...var_core_value_sig390D, var_core_value_sig9572], var_core_value_sigC928);
        continue;
      }
      let var_core_value_sig27E5 = D([...var_core_value_sig390D, var_core_value_sig9572]),
        var_core_value_sig8061 = var_core_value_sigBC46 ? "delete" : "insert",
        var_core_value_sig4D4C = var_core_value_sigBC46 ? var_core_value_sig39B7[var_core_value_sig9572] : var_core_value_sig18E0[var_core_value_sig9572];
      var_core_value_sigC928.push({
        path: var_core_value_sig27E5,
        ...(T(var_core_value_sig27E5) === T([...var_core_value_sig390D, var_core_value_sig9572]) ? {} : {
          sourcePath: [...var_core_value_sig390D, var_core_value_sig9572]
        }),
        kind: var_core_value_sig8061,
        valueType: O(var_core_value_sig27E5, var_core_value_sig4D4C),
        ...(var_core_value_sigBC46 ? {
          before: var_core_value_sig4D4C
        } : {
          after: var_core_value_sig4D4C
        })
      });
    }
    return;
  }
  let var_core_value_sigE161 = D(var_core_value_sig390D),
    var_core_value_sigBDEE = O(var_core_value_sigE161, var_core_value_sigB609 === undefined ? var_core_value_sig393E : var_core_value_sigB609);
  var_core_value_sigC928.push({
    path: var_core_value_sigE161,
    ...(T(var_core_value_sigE161) === T(var_core_value_sig390D) ? {} : {
      sourcePath: var_core_value_sig390D
    }),
    kind: "update",
    valueType: var_core_value_sigBDEE,
    before: var_core_value_sig393E,
    after: var_core_value_sigB609,
    ...ye(var_core_value_sig393E, var_core_value_sigB609, var_core_value_sigBDEE)
  });
}
function ve(var_core_value_sig1F40) {
  for (let var_core_value_sigF2E6 = 0; var_core_value_sigF2E6 < var_core_value_sig1F40.length; var_core_value_sigF2E6 += 1) if (!Object.prototype["hasOwnProperty"].call(var_core_value_sig1F40, var_core_value_sigF2E6)) return true;
  return false;
}
function D(var_core_value_sig3FC7) {
  if (var_core_value_sig3FC7[var_core_value_sig3FC7.length - 1] === "dataStream" && var_core_value_sig3FC7.includes("body")) return ["text"];
  if (var_core_value_sig3FC7[0] === "values" && var_core_value_sig3FC7.length === 2) return ["field", var_core_value_sig3FC7[1]];
  let var_core_value_sig1E1B = var_core_value_sig3FC7.findIndex(var_core_value_sig34C8 => te.has(var_core_value_sig34C8));
  if (var_core_value_sig1E1B >= 0) return ["geometry", ...var_core_value_sig3FC7.slice(var_core_value_sig1E1B)];
  let var_core_value_sig3B10 = var_core_value_sig3FC7.findIndex(var_core_value_sigB744 => m.has(var_core_value_sigB744));
  return var_core_value_sig3B10 >= 0 ? ["style", ...var_core_value_sig3FC7.slice(var_core_value_sig3B10 + +(var_core_value_sig3FC7[var_core_value_sig3B10] === "style"))] : var_core_value_sig3FC7;
}
function O(var_core_value_sig89E6, var_core_value_sig4743) {
  var var_core_value_sigEB6A;
  let var_core_value_sig3D46 = ((var_core_value_sigEB6A = var_core_value_sig89E6[var_core_value_sig89E6.length - 1]) == null ? undefined : var_core_value_sigEB6A.toLocaleLowerCase()) ?? "";
  return var_core_value_sig3D46.includes("formula") || var_core_value_sig3D46 === "f" ? "formula" : var_core_value_sig89E6.some(var_core_value_sigEAE2 => var_core_value_sigEAE2 === "geometry" || te.has(var_core_value_sigEAE2)) ? "geometry" : var_core_value_sig89E6.some(var_core_value_sigE68A => var_core_value_sigE68A === "position" || ne.has(var_core_value_sigE68A)) ? "position" : var_core_value_sig89E6.some(var_core_value_sig3E68 => var_core_value_sig3E68.toLocaleLowerCase().includes("color")) ? "color" : var_core_value_sig89E6.some(var_core_value_sigF4C5 => var_core_value_sigF4C5 === "style" || m.has(var_core_value_sigF4C5)) ? "style" : var_core_value_sig89E6.some(var_core_value_sig5410 => re.has(var_core_value_sig5410) || /(?:Id|Ref)$/u.test(var_core_value_sig5410)) ? "reference" : var_core_value_sig4743 === null ? "null" : Array.isArray(var_core_value_sig4743) ? "array" : typeof var_core_value_sig4743 == "boolean" ? "boolean" : typeof var_core_value_sig4743 == "number" ? "number" : typeof var_core_value_sig4743 == "string" ? "text" : w(var_core_value_sig4743) === undefined ? "unknown" : "object";
}
function ye(var_core_value_sigCC93, var_core_value_sig5964, var_core_value_sig808B) {
  if (typeof var_core_value_sigCC93 != "string" || typeof var_core_value_sig5964 != "string" || var_core_value_sig808B !== "text" && var_core_value_sig808B !== "formula") return {};
  let var_core_value_sig2A26 = var_core_value_sigCC93 > var_core_value_sig5964,
    var_core_value_sig1179 = var_core_value_sig2A26 ? var_core_value_sig5964 : var_core_value_sigCC93,
    var_core_value_sigEA92 = var_core_value_sig2A26 ? var_core_value_sigCC93 : var_core_value_sig5964,
    var_core_value_sig8FD9 = var_core_value_sig808B === "text" ? Array.from(var_core_value_sig1179) : A(var_core_value_sig1179),
    var_core_value_sig1AE5 = var_core_value_sig808B === "text" ? Array.from(var_core_value_sigEA92) : A(var_core_value_sigEA92),
    var_core_value_sig7100 = 0;
  for (; var_core_value_sig7100 < var_core_value_sig8FD9.length && var_core_value_sig7100 < var_core_value_sig1AE5.length && var_core_value_sig8FD9[var_core_value_sig7100] === var_core_value_sig1AE5[var_core_value_sig7100];) var_core_value_sig7100 += 1;
  let var_core_value_sigA19A = 0;
  for (; var_core_value_sigA19A < var_core_value_sig8FD9.length - var_core_value_sig7100 && var_core_value_sigA19A < var_core_value_sig1AE5.length - var_core_value_sig7100 && var_core_value_sig8FD9[var_core_value_sig8FD9.length - 1 - var_core_value_sigA19A] === var_core_value_sig1AE5[var_core_value_sig1AE5.length - 1 - var_core_value_sigA19A];) var_core_value_sigA19A += 1;
  let var_core_value_sigD3F5 = var_core_value_sig8FD9.slice(var_core_value_sig7100, var_core_value_sig8FD9.length - var_core_value_sigA19A),
    var_core_value_sig3082 = var_core_value_sig1AE5.slice(var_core_value_sig7100, var_core_value_sig1AE5.length - var_core_value_sigA19A),
    var_core_value_sigF5D1 = var_core_value_sigD3F5.length + var_core_value_sig3082.length > 800 ? {
      left: var_core_value_sigD3F5.length ? [{
        kind: "delete",
        text: var_core_value_sigD3F5.join("")
      }] : [],
      right: var_core_value_sig3082.length ? [{
        kind: "insert",
        text: var_core_value_sig3082.join("")
      }] : []
    } : be(var_core_value_sigD3F5, var_core_value_sig3082),
    var_core_value_sig8775 = {
      left: k(var_core_value_sigF5D1.left, var_core_value_sig8FD9.slice(0, var_core_value_sig7100).join(""), var_core_value_sig8FD9.slice(var_core_value_sig8FD9.length - var_core_value_sigA19A).join("")),
      right: k(var_core_value_sigF5D1.right, var_core_value_sig1AE5.slice(0, var_core_value_sig7100).join(""), var_core_value_sig1AE5.slice(var_core_value_sig1AE5.length - var_core_value_sigA19A).join(""))
    };
  return {
    segments: var_core_value_sig2A26 ? {
      left: var_core_value_sig8775.right["map"](var_core_value_sig492F => ({
        ...var_core_value_sig492F,
        kind: var_core_value_sig492F.kind === "equal" ? var_core_value_sig492F.kind : "delete"
      })),
      right: var_core_value_sig8775.left["map"](var_core_value_sig8EA0 => ({
        ...var_core_value_sig8EA0,
        kind: var_core_value_sig8EA0.kind === "equal" ? var_core_value_sig8EA0.kind : "insert"
      }))
    } : var_core_value_sig8775
  };
}
function k(var_core_value_sig481B, var_core_value_sig13D7, var_core_value_sig90C0) {
  let var_core_value_sigF1B2 = [];
  var_core_value_sig13D7 && j(var_core_value_sigF1B2, {
    kind: "equal",
    text: var_core_value_sig13D7
  });
  for (let var_core_value_sigA6F6 of var_core_value_sig481B) j(var_core_value_sigF1B2, var_core_value_sigA6F6);
  return var_core_value_sig90C0 && j(var_core_value_sigF1B2, {
    kind: "equal",
    text: var_core_value_sig90C0
  }), var_core_value_sigF1B2;
}
function A(var_core_value_sigC2BB) {
  return var_core_value_sigC2BB.match(/(\r?\n|\s+|\$?[A-Za-z]+\$?\d+|[A-Za-z_]+[A-Za-z0-9_]*|[0-9]+(?:\.\d+)?|[\u3400-\u9FFF]|.)/gu) ?? [];
}
function be(var_core_value_sigD9DB, var_core_value_sigA363) {
  let var_core_value_sigFBA5 = Array.from({
    length: var_core_value_sigD9DB.length + 1
  }, () => new Uint16Array(var_core_value_sigA363.length + 1));
  for (let var_core_value_sigCDDA = 1; var_core_value_sigCDDA <= var_core_value_sigD9DB.length; var_core_value_sigCDDA += 1) for (let var_core_value_sigD873 = 1; var_core_value_sigD873 <= var_core_value_sigA363.length; var_core_value_sigD873 += 1) var_core_value_sigFBA5[var_core_value_sigCDDA][var_core_value_sigD873] = var_core_value_sigD9DB[var_core_value_sigCDDA - 1] === var_core_value_sigA363[var_core_value_sigD873 - 1] ? var_core_value_sigFBA5[var_core_value_sigCDDA - 1][var_core_value_sigD873 - 1] + 1 : Math.max(var_core_value_sigFBA5[var_core_value_sigCDDA - 1][var_core_value_sigD873], var_core_value_sigFBA5[var_core_value_sigCDDA][var_core_value_sigD873 - 1]);
  let var_core_value_sigAC47 = [],
    var_core_value_sigA06F = var_core_value_sigD9DB.length,
    var_core_value_sig770E = var_core_value_sigA363.length;
  for (; var_core_value_sigA06F > 0 || var_core_value_sig770E > 0;) var_core_value_sigA06F > 0 && var_core_value_sig770E > 0 && var_core_value_sigD9DB[var_core_value_sigA06F - 1] === var_core_value_sigA363[var_core_value_sig770E - 1] ? (var_core_value_sigAC47.push({
    kind: "equal",
    text: var_core_value_sigD9DB[var_core_value_sigA06F - 1]
  }), --var_core_value_sigA06F, --var_core_value_sig770E) : var_core_value_sigA06F > 0 && (var_core_value_sig770E === 0 || var_core_value_sigFBA5[var_core_value_sigA06F - 1][var_core_value_sig770E] >= var_core_value_sigFBA5[var_core_value_sigA06F][var_core_value_sig770E - 1]) ? (var_core_value_sigAC47.push({
    kind: "delete",
    text: var_core_value_sigD9DB[var_core_value_sigA06F - 1]
  }), --var_core_value_sigA06F) : (var_core_value_sigAC47.push({
    kind: "insert",
    text: var_core_value_sigA363[var_core_value_sig770E - 1]
  }), --var_core_value_sig770E);
  let var_core_value_sig4654 = [],
    var_core_value_sigB26B = [];
  for (let var_core_value_sigE243 of var_core_value_sigAC47.reverse()) var_core_value_sigE243.kind !== "insert" && j(var_core_value_sig4654, var_core_value_sigE243), var_core_value_sigE243.kind !== "delete" && j(var_core_value_sigB26B, var_core_value_sigE243);
  return {
    left: var_core_value_sig4654,
    right: var_core_value_sigB26B
  };
}
function j(var_core_value_sig019B, var_core_value_sigC6BC) {
  let var_core_value_sig8EC2 = var_core_value_sig019B[var_core_value_sig019B.length - 1];
  (var_core_value_sig8EC2 == null ? undefined : var_core_value_sig8EC2.kind) === var_core_value_sigC6BC.kind ? var_core_value_sig8EC2.text += var_core_value_sigC6BC.text : var_core_value_sig019B.push({
    ...var_core_value_sigC6BC
  });
}
function xe(var_core_value_sigA8C3, var_core_value_sig5276) {
  if (typeof var_core_value_sigA8C3 == "string") return var_core_value_sigA8C3;
  let var_core_value_sig031B = w(var_core_value_sigA8C3);
  return [var_core_value_sig031B == null ? undefined : var_core_value_sig031B.id, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.chartId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.tableId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.formulaId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.rangeId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.blockId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.linkId, var_core_value_sig031B == null ? undefined : var_core_value_sig031B.drawingId].find(var_core_value_sig74A8 => typeof var_core_value_sig74A8 == "string") ?? "entry-" + var_core_value_sig5276;
}
function M(var_core_value_sig9DC0, var_core_value_sig95F0 = 0) {
  if (var_core_value_sig95F0 > 6) return;
  if (typeof var_core_value_sig9DC0 == "string") return N(var_core_value_sig9DC0);
  if (typeof var_core_value_sig9DC0 == "number" || typeof var_core_value_sig9DC0 == "boolean") return String(var_core_value_sig9DC0);
  if (Array.isArray(var_core_value_sig9DC0)) {
    for (let var_core_value_sigA12B = 0; var_core_value_sigA12B < Math.min(8, var_core_value_sig9DC0.length); var_core_value_sigA12B++) {
      let var_core_value_sigC9E0 = M(var_core_value_sig9DC0[var_core_value_sigA12B], var_core_value_sig95F0 + 1);
      if (var_core_value_sigC9E0 !== undefined) return var_core_value_sigC9E0;
    }
    return;
  }
  let var_core_value_sig9CCB = w(var_core_value_sig9DC0);
  if (var_core_value_sig9CCB !== undefined) {
    for (let var_core_value_sigF230 of ["title", "label", "text", "caption", "description", "dataStream", "formula", "code"]) {
      let var_core_value_sig76BA = var_core_value_sig9CCB[var_core_value_sigF230];
      if (typeof var_core_value_sig76BA == "string") {
        let var_core_value_sig2AD8 = N(var_core_value_sig76BA);
        if (var_core_value_sig2AD8 !== undefined) return var_core_value_sig2AD8;
      }
    }
    for (let var_core_value_sig09B8 of ["textData", "body", "shapeData", "dataModel", "content", "props", "value", "values"]) {
      let var_core_value_sigFBFA = M(var_core_value_sig9CCB[var_core_value_sig09B8], var_core_value_sig95F0 + 1);
      if (var_core_value_sigFBFA !== undefined) return var_core_value_sigFBFA;
    }
    return typeof var_core_value_sig9CCB.name == "string" ? N(var_core_value_sig9CCB.name) : undefined;
  }
}
function N(var_core_value_sigE718) {
  let var_core_value_sigAEC8 = "",
    var_core_value_sigB977 = false;
  for (let var_core_value_sig21B2 of var_core_value_sigE718) {
    let var_core_value_sig6F91 = var_core_value_sig21B2.charCodeAt(0);
    if (var_core_value_sig6F91 <= 32 || var_core_value_sig6F91 >= 127 && var_core_value_sig6F91 <= 159 || /\s/u.test(var_core_value_sig21B2)) {
      var_core_value_sigB977 = var_core_value_sigAEC8.length > 0;
      continue;
    }
    if (var_core_value_sigAEC8 += var_core_value_sigB977 ? "\x20" + var_core_value_sig21B2 : var_core_value_sig21B2, var_core_value_sigB977 = false, var_core_value_sigAEC8.length > 72) return var_core_value_sigAEC8.slice(0, 69).trimEnd() + "…";
  }
  return var_core_value_sigAEC8 || undefined;
}
function P(var_core_value_sig2949) {
  "@babel/helpers - typeof";

  return P = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigDE08) {
    return typeof var_core_value_sigDE08;
  } : function (var_core_value_sigACCB) {
    return var_core_value_sigACCB && typeof Symbol == "function" && var_core_value_sigACCB.constructor === Symbol && var_core_value_sigACCB !== Symbol.prototype ? "symbol" : typeof var_core_value_sigACCB;
  }, P(var_core_value_sig2949);
}
function Se(var_core_value_sig308A, var_core_value_sig528D) {
  if (P(var_core_value_sig308A) != "object" || !var_core_value_sig308A) return var_core_value_sig308A;
  var var_core_value_sigA309 = var_core_value_sig308A[Symbol.toPrimitive];
  if (var_core_value_sigA309 !== undefined) {
    var var_core_value_sig9E20 = var_core_value_sigA309.call(var_core_value_sig308A, var_core_value_sig528D || "default");
    if (P(var_core_value_sig9E20) != "object") return var_core_value_sig9E20;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_core_value_sig528D === "string" ? String : Number)(var_core_value_sig308A);
}
function Ce(var_core_value_sig26BB) {
  var var_core_value_sig19B4 = Se(var_core_value_sig26BB, "string");
  return P(var_core_value_sig19B4) == "symbol" ? var_core_value_sig19B4 : var_core_value_sig19B4 + "";
}
function F(var_core_value_sig218A, var_core_value_sig14CB, var_core_value_sigFDEE) {
  return (var_core_value_sig14CB = Ce(var_core_value_sig14CB)) in var_core_value_sig218A ? Object.defineProperty(var_core_value_sig218A, var_core_value_sig14CB, {
    value: var_core_value_sigFDEE,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig218A[var_core_value_sig14CB] = var_core_value_sigFDEE, var_core_value_sig218A;
}
var I = class extends e.Disposable {
  constructor(...var_core_value_sig7F33) {
    super(...var_core_value_sig7F33), F(this, "_adapters", new Map());
  }
  register(var_core_value_sig0C53) {
    if (this._adapters["has"](var_core_value_sig0C53.type)) throw Error("[UnitComparisonAdapterRegistryService]: Adapter for unit type " + var_core_value_sig0C53.type + " is registered.");
    return this._adapters["set"](var_core_value_sig0C53.type, var_core_value_sig0C53), (0, e.toDisposable)(() => {
      this._adapters["get"](var_core_value_sig0C53.type) === var_core_value_sig0C53 && this._adapters["delete"](var_core_value_sig0C53.type);
    });
  }
  get(var_core_value_sigEA04) {
    return this._adapters["get"](var_core_value_sigEA04);
  }
  dispose() {
    this._adapters["clear"](), super.dispose();
  }
};
const L = 1000;
function we(var_core_value_sigA676) {
  let var_core_value_sigC27E = new Map();
  for (let var_core_value_sig7A62 of var_core_value_sigA676) {
    if (var_core_value_sigC27E.has(var_core_value_sig7A62.type)) throw Error("[createUnitComparisonEngine]: Adapter for unit type " + var_core_value_sig7A62.type + " is already registered.");
    var_core_value_sigC27E.set(var_core_value_sig7A62.type, var_core_value_sig7A62);
  }
  let var_core_value_sigA70D = var_core_value_sig8109 => {
    let var_core_value_sig7565 = var_core_value_sigC27E.get(var_core_value_sig8109);
    if (!var_core_value_sig7565) throw Error("[createUnitComparisonEngine]:\x20No\x20comparison\x20adapter\x20for\x20unit\x20type\x20" + var_core_value_sig8109 + ".");
    return var_core_value_sig7565;
  };
  return {
    compare(var_core_value_sigD4FB) {
      let {
        query: var_core_value_sig3E71,
        ...var_core_value_sig01B3
      } = var_core_value_sigD4FB;
      return z(R(var_core_value_sig01B3, var_core_value_sigA70D(var_core_value_sigD4FB.type)), var_core_value_sig3E71);
    },
    prepare: var_core_value_sig7442 => R(var_core_value_sig7442, var_core_value_sigA70D(var_core_value_sig7442.type)),
    query: z
  };
}
function R(var_core_value_sigCE10, var_core_value_sigA386) {
  let var_core_value_sigCD82 = B(var_core_value_sigCE10),
    var_core_value_sig44DD = var_core_value_sigA386.compare({
      unitId: var_core_value_sigCD82.unitId,
      leftData: var_core_value_sigCD82.leftData,
      rightData: var_core_value_sigCD82.rightData,
      leftChangesets: var_core_value_sigCD82.leftChangesets ?? [],
      rightChangesets: var_core_value_sigCD82.rightChangesets ?? []
    }),
    var_core_value_sig96FA = var_core_value_sig44DD.scopes ?? [],
    var_core_value_sigAB68 = new Map(var_core_value_sig96FA.map(var_core_value_sigDF87 => [var_core_value_sigDF87.stableId, var_core_value_sigDF87]));
  return {
    metadata: {
      comparisonId: var_core_value_sigCD82.comparisonId,
      unitId: var_core_value_sigCD82.unitId,
      ...(var_core_value_sigCD82.unitName === undefined ? {} : {
        unitName: var_core_value_sigCD82.unitName
      }),
      type: var_core_value_sigCD82.type,
      fidelity: var_core_value_sigCD82.fidelity,
      ...(var_core_value_sigCD82.commonBaseRevision === undefined ? {} : {
        commonBaseRevision: var_core_value_sigCD82.commonBaseRevision
      }),
      stale: var_core_value_sigCD82.stale ?? false
    },
    adapterResult: {
      ...var_core_value_sig44DD,
      items: var_core_value_sig44DD.items["map"](var_core_value_sig9EE0 => {
        let var_core_value_sigF0511 = var_core_value_sigAB68.get(var_core_value_sig9EE0.stableId),
          var_core_value_sig0B45 = (var_core_value_sigF0511 == null ? undefined : var_core_value_sigF0511.entityType) === var_core_value_sig9EE0.entityType ? var_core_value_sigF0511 : var_core_value_sig9EE0.parentStableId === undefined ? undefined : var_core_value_sigAB68.get(var_core_value_sig9EE0.parentStableId);
        return var_core_value_sig0B45 === undefined ? var_core_value_sig9EE0 : {
          ...var_core_value_sig9EE0,
          scope: {
            entityType: var_core_value_sig0B45.entityType,
            stableId: var_core_value_sig0B45.stableId
          }
        };
      })
    }
  };
}
function z(var_core_value_sig040A, var_core_value_sig2AE0 = {}) {
  let {
      adapterResult: var_core_value_sigC349,
      metadata: var_core_value_sig9D96
    } = var_core_value_sig040A,
    var_core_value_sig2776 = Ee(var_core_value_sigC349.items, var_core_value_sig2AE0),
    var_core_value_sig6FB2 = V(var_core_value_sig2AE0.offset, 0, 0, 2 ** 53 - 1),
    var_core_value_sigEB43 = V(var_core_value_sig2AE0.limit, 100, 1, L),
    var_core_value_sig4186 = var_core_value_sig2776.slice(var_core_value_sig6FB2, var_core_value_sig6FB2 + var_core_value_sigEB43).map(var_core_value_sig36F8 => De(var_core_value_sig36F8, var_core_value_sig2AE0.detail)),
    var_core_value_sigF963 = var_core_value_sigC349.unsupportedMutationIds ?? [],
    var_core_value_sigB608 = Te(var_core_value_sigC349.productContext, var_core_value_sig2AE0);
  return B({
    schemaVersion: 1,
    comparisonId: var_core_value_sig9D96.comparisonId,
    unit: {
      unitId: var_core_value_sig9D96.unitId,
      type: var_core_value_sig9D96.type,
      ...(var_core_value_sig9D96.unitName === undefined ? {} : {
        name: var_core_value_sig9D96.unitName
      })
    },
    fidelity: var_core_value_sig9D96.fidelity,
    ...(var_core_value_sig9D96.commonBaseRevision === undefined ? {} : {
      commonBaseRevision: var_core_value_sig9D96.commonBaseRevision
    }),
    stale: var_core_value_sig9D96.stale,
    detail: var_core_value_sig2AE0.detail ?? "changes",
    summary: Oe(var_core_value_sigC349.items),
    coverage: {
      supportedEntityTypes: var_core_value_sigC349.supportedEntityTypes
    },
    scopes: var_core_value_sigC349.scopes ?? [],
    page: {
      offset: var_core_value_sig6FB2,
      limit: var_core_value_sigEB43,
      matched: var_core_value_sig2776.length,
      hasMore: var_core_value_sig6FB2 + var_core_value_sig4186.length < var_core_value_sig2776.length
    },
    items: var_core_value_sig4186,
    diagnostics: {
      readiness: var_core_value_sigF963.length || var_core_value_sigC349.readiness === "degraded" ? "degraded" : "ready",
      unsupportedMutationIds: var_core_value_sigF963,
      codes: var_core_value_sigC349.diagnosticCodes ?? []
    },
    ...(var_core_value_sigB608 === undefined ? {} : {
      productContext: var_core_value_sigB608
    })
  });
}
function B(var_core_value_sigF866) {
  if (Array.isArray(var_core_value_sigF866)) return var_core_value_sigF866.map(var_core_value_sig03E1 => B(var_core_value_sig03E1));
  if (typeof var_core_value_sigF866 == "object" && var_core_value_sigF866) {
    let var_core_value_sigBB57 = Object.getPrototypeOf(var_core_value_sigF866);
    if (var_core_value_sigBB57 === Object.prototype || var_core_value_sigBB57 === null) {
      let var_core_value_sigF9C7 = Object.fromEntries(Object.entries(var_core_value_sigF866).map(([var_core_value_sigF602, var_core_value_sig1BBD]) => [var_core_value_sigF602, B(var_core_value_sig1BBD)]));
      return Object.setPrototypeOf(var_core_value_sigF9C7, var_core_value_sigBB57);
    }
  }
  return e.Tools["deepClone"](var_core_value_sigF866);
}
function V(var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682, var_core_value_sig4BB5) {
  return var_core_value_sig5EFB === undefined || !Number.isFinite(var_core_value_sig5EFB) ? var_core_value_sig3A85 : Math.min(var_core_value_sig4BB5, Math.max(var_core_value_sig2682, Math.trunc(var_core_value_sig5EFB)));
}
function Te(var_core_value_sig6709, var_core_value_sig52CA) {
  if ((var_core_value_sig6709 == null ? undefined : var_core_value_sig6709.type) !== e.UniverInstanceType["UNIVER_DOC"]) return var_core_value_sig6709;
  let var_core_value_sigC030 = V(var_core_value_sig52CA.contextOffset, 0, 0, 2 ** 53 - 1),
    var_core_value_sig88F6 = V(var_core_value_sig52CA.contextLimit, L, 1, L),
    var_core_value_sig37DB = var_core_value_sig6709.paragraphAlignment["slice"](var_core_value_sigC030, var_core_value_sigC030 + var_core_value_sig88F6);
  return {
    ...var_core_value_sig6709,
    paragraphAlignment: var_core_value_sig37DB,
    paragraphAlignmentPage: {
      offset: var_core_value_sigC030,
      limit: var_core_value_sig88F6,
      matched: var_core_value_sig6709.paragraphAlignment["length"],
      hasMore: var_core_value_sigC030 + var_core_value_sig37DB.length < var_core_value_sig6709.paragraphAlignment["length"]
    }
  };
}
function Ee(var_core_value_sig5542, var_core_value_sigE0A9) {
  var var_core_value_sigA73E;
  let var_core_value_sig7620 = (var_core_value_sigA73E = var_core_value_sigE0A9.search) == null ? undefined : var_core_value_sigA73E.trim().toLocaleLowerCase();
  return var_core_value_sig5542.filter(var_core_value_sig7C4A => {
    var var_core_value_sigE799, var_core_value_sigB601, var_core_value_sig8B71, var_core_value_sigAEFB, var_core_value_sig826B;
    return (var_core_value_sigE799 = var_core_value_sigE0A9.kinds) != null && var_core_value_sigE799.length && !var_core_value_sigE0A9.kinds["includes"](var_core_value_sig7C4A.kind) || (var_core_value_sigB601 = var_core_value_sigE0A9.entityTypes) != null && var_core_value_sigB601.length && !var_core_value_sigE0A9.entityTypes["includes"](var_core_value_sig7C4A.entityType) || var_core_value_sigE0A9.parentStableId !== undefined && var_core_value_sig7C4A.parentStableId !== var_core_value_sigE0A9.parentStableId && ((var_core_value_sig8B71 = var_core_value_sig7C4A.locations["left"]) == null ? undefined : var_core_value_sig8B71.parentStableId) !== var_core_value_sigE0A9.parentStableId && ((var_core_value_sigAEFB = var_core_value_sig7C4A.locations["right"]) == null ? undefined : var_core_value_sigAEFB.parentStableId) !== var_core_value_sigE0A9.parentStableId || var_core_value_sigE0A9.scope !== undefined && (((var_core_value_sig826B = var_core_value_sig7C4A.scope) == null ? undefined : var_core_value_sig826B.entityType) !== var_core_value_sigE0A9.scope["entityType"] || var_core_value_sig7C4A.scope["stableId"] !== var_core_value_sigE0A9.scope["stableId"]) ? false : !var_core_value_sig7620 || [var_core_value_sig7C4A.displayName, var_core_value_sig7C4A.stableId, var_core_value_sig7C4A.parentStableId, ...var_core_value_sig7C4A.path, ...var_core_value_sig7C4A.changes["flatMap"](var_core_value_sig8895 => [...var_core_value_sig8895.path, T(var_core_value_sig8895.before), T(var_core_value_sig8895.after)])].some(var_core_value_sigC80B => var_core_value_sigC80B == null ? undefined : var_core_value_sigC80B.toLocaleLowerCase().includes(var_core_value_sig7620));
  });
}
function De(var_core_value_sigB9FC, var_core_value_sig5055 = "changes") {
  if (var_core_value_sig5055 === "full") return var_core_value_sigB9FC;
  if (var_core_value_sig5055 === "summary") {
    let {
      values: var_core_value_sigCF89,
      ...var_core_value_sig00CB
    } = var_core_value_sigB9FC;
    return {
      ...var_core_value_sig00CB,
      changes: []
    };
  }
  let {
    values: var_core_value_sig3801,
    ...var_core_value_sig45F0
  } = var_core_value_sigB9FC;
  return var_core_value_sig45F0;
}
function Oe(var_core_value_sigBC91) {
  let var_core_value_sigCB88 = {},
    var_core_value_sig8D65 = 0,
    var_core_value_sig8122 = 0,
    var_core_value_sigEDC6 = 0,
    var_core_value_sig611A = 0;
  for (let var_core_value_sig77EE of var_core_value_sigBC91) var_core_value_sig77EE.kind === "insert" ? var_core_value_sig8D65 += 1 : var_core_value_sig77EE.kind === "delete" ? var_core_value_sig8122 += 1 : var_core_value_sigEDC6 += 1, var_core_value_sig77EE.moved && (var_core_value_sig611A += 1), var_core_value_sigCB88[var_core_value_sig77EE.entityType] = (var_core_value_sigCB88[var_core_value_sig77EE.entityType] ?? 0) + 1;
  return {
    total: var_core_value_sigBC91.length,
    insert: var_core_value_sig8D65,
    delete: var_core_value_sig8122,
    update: var_core_value_sigEDC6,
    moved: var_core_value_sig611A,
    byEntityType: var_core_value_sigCB88
  };
}
function H(var_core_value_sig6BD9, var_core_value_sig7E56) {
  return function (var_core_value_sig9F76, var_core_value_sigB008) {
    var_core_value_sig7E56(var_core_value_sig9F76, var_core_value_sigB008, var_core_value_sig6BD9);
  };
}
function U(var_core_value_sig4161, var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigD5A0) {
  var var_core_value_sig81B2 = arguments.length,
    var_core_value_sigA0A5 = var_core_value_sig81B2 < 3 ? var_core_value_sig7580 : var_core_value_sigD5A0 === null ? var_core_value_sigD5A0 = Object.getOwnPropertyDescriptor(var_core_value_sig7580, var_core_value_sig1F18) : var_core_value_sigD5A0,
    var_core_value_sig10AA;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigA0A5 = Reflect.decorate(var_core_value_sig4161, var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigD5A0);else {
    for (var var_core_value_sigE6D0 = var_core_value_sig4161.length - 1; var_core_value_sigE6D0 >= 0; var_core_value_sigE6D0--) (var_core_value_sig10AA = var_core_value_sig4161[var_core_value_sigE6D0]) && (var_core_value_sigA0A5 = (var_core_value_sig81B2 < 3 ? var_core_value_sig10AA(var_core_value_sigA0A5) : var_core_value_sig81B2 > 3 ? var_core_value_sig10AA(var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigA0A5) : var_core_value_sig10AA(var_core_value_sig7580, var_core_value_sig1F18)) || var_core_value_sigA0A5);
  }
  return var_core_value_sig81B2 > 3 && var_core_value_sigA0A5 && Object.defineProperty(var_core_value_sig7580, var_core_value_sig1F18, var_core_value_sigA0A5), var_core_value_sigA0A5;
}
let W = class {
  constructor(var_core_value_sig8721) {
    this._adapterRegistry = var_core_value_sig8721;
  }
  compare(var_core_value_sig08BA) {
    let {
      query: var_core_value_sigDBB5,
      ...var_core_value_sigCFAC
    } = var_core_value_sig08BA;
    return this.query(this.prepare(var_core_value_sigCFAC), var_core_value_sigDBB5);
  }
  prepare(var_core_value_sig237B) {
    let var_core_value_sigFEAB = this._adapterRegistry["get"](var_core_value_sig237B.type);
    if (!var_core_value_sigFEAB) throw Error("[UnitComparisonService]:\x20No\x20comparison\x20adapter\x20for\x20unit\x20type\x20" + var_core_value_sig237B.type + ".");
    return R(var_core_value_sig237B, var_core_value_sigFEAB);
  }
  query(var_core_value_sigE347, var_core_value_sig3C5B = {}) {
    return z(var_core_value_sigE347, var_core_value_sig3C5B);
  }
};
W = U([H(0, (0, e.Inject)(I))], W);
const G = "edit-history.config",
  K = {
    historyServerUrl: "/universer-api/history",
    pageSize: 20
  };
var ke = "@univerjs-pro/edit-history",
  Ae = "1.0.0-insiders.20260907-70fc579",
  q = class extends e.Disposable {
    constructor(...var_core_value_sig200B) {
      super(...var_core_value_sig200B), F(this, "_adapters", new Map());
    }
    register(var_core_value_sig3863) {
      if (this._adapters["has"](var_core_value_sig3863.type)) throw Error("[HistoryUnitAdapterRegistryService]: Adapter for unit type " + var_core_value_sig3863.type + "\x20is\x20already\x20registered.");
      return this._adapters["set"](var_core_value_sig3863.type, var_core_value_sig3863), (0, e.toDisposable)(() => {
        this._adapters["get"](var_core_value_sig3863.type) === var_core_value_sig3863 && this._adapters["delete"](var_core_value_sig3863.type);
      });
    }
    get(var_core_value_sigC97C) {
      return this._adapters["get"](var_core_value_sigC97C);
    }
    dispose() {
      this._adapters["clear"](), super.dispose();
    }
  };
const J = {
  id: "edit-history.command.restore-history",
  type: e.CommandType["COMMAND"],
  handler: async (var_core_value_sig8E91, var_core_value_sig00BE) => {
    if (!var_core_value_sig00BE) return false;
    let var_core_value_sig7BB5 = var_core_value_sig8E91.get(q).get(var_core_value_sig00BE.type);
    if (!var_core_value_sig7BB5) throw Error("[RestoreHistoryCommand]: No history adapter is registered for unit type " + var_core_value_sig00BE.type + ".");
    if (!(await var_core_value_sig7BB5.canRevert(var_core_value_sig00BE.unitId))) throw Error("[RestoreHistoryCommand]: The current user cannot restore history for this unit.");
    let var_core_value_sig6AAD = var_core_value_sig8E91.get(e.IUniverInstanceService).getUnit(var_core_value_sig00BE.unitId, var_core_value_sig00BE.type);
    if (!var_core_value_sig6AAD) throw Error("[RestoreHistoryCommand]: Unit " + var_core_value_sig00BE.unitId + " is not available.");
    let var_core_value_sig1157 = var_core_value_sig6AAD.getRev();
    return (await var_core_value_sig8E91.get(e.ICommandService).executeCommand(t.RevertRevisionMutation["id"], {
      unitId: var_core_value_sig00BE.unitId,
      revision: var_core_value_sig00BE.revision
    })) ? (var_core_value_sig8E91.get(e.IUndoRedoService).pushUndoRedo({
      unitID: var_core_value_sig00BE.unitId,
      undoMutations: [{
        id: t.RevertRevisionMutation["id"],
        params: {
          unitId: var_core_value_sig00BE.unitId,
          revision: var_core_value_sig1157
        }
      }],
      redoMutations: [{
        id: t.RevertRevisionMutation["id"],
        params: {
          unitId: var_core_value_sig00BE.unitId,
          revision: var_core_value_sig00BE.revision
        }
      }]
    }), true) : false;
  }
};
let Y = class {
  constructor(var_core_value_sigC4B1, var_core_value_sig1BD9) {
    this._configService = var_core_value_sigC4B1, this._httpService = var_core_value_sig1BD9;
  }
  async fetchVersions(var_core_value_sigE43E, var_core_value_sigA937 = {}) {
    var var_core_value_sigCAD5;
    let var_core_value_sigE503 = new URL();
    SearchParams();
    var_core_value_sigE503.set("length", String(this._getPageSize())), var_core_value_sigA937.lastLabel && var_core_value_sigE503.set("lastLabel", var_core_value_sigA937.lastLabel), (var_core_value_sigCAD5 = var_core_value_sigA937.userIds) == null || var_core_value_sigCAD5.forEach(var_core_value_sig284F => var_core_value_sigE503.append("userIds", var_core_value_sig284F)), var_core_value_sigA937.origin && var_core_value_sigE503.set("origin", String(var_core_value_sigA937.origin));
    let var_core_value_sig48DD = (await this._httpService["get"](this._getApiPrefix() + "/" + var_core_value_sigE43E + "/list?" + var_core_value_sigE503.toString())).body;
    return this._assertOk(var_core_value_sig48DD.error, "list versions"), {
      hasMore: var_core_value_sig48DD.hasMore,
      lastLabel: var_core_value_sig48DD.lastLabel,
      versions: Pe(var_core_value_sig48DD),
      members: Ne(var_core_value_sig48DD.entities["users"])
    };
  }
  async fetchCreators(var_core_value_sig5E6A) {
    let var_core_value_sigB7FC = await this._httpService["get"](this._getApiPrefix() + "/" + var_core_value_sig5E6A + "/creators");
    return this._assertOk(var_core_value_sigB7FC.body["error"], "list creators"), var_core_value_sigB7FC.body["creators"] ?? [];
  }
  async fetchVersionDetails(var_core_value_sig9CD9, var_core_value_sigFD0C) {
    if (var_core_value_sigFD0C.startRevision === var_core_value_sigFD0C.endRevision) return [];
    let var_core_value_sig849B = await this.fetchChangesets(var_core_value_sig9CD9, {
      baseRevision: Math.max(0, var_core_value_sigFD0C.startRevision - 1),
      targetRevision: var_core_value_sigFD0C.endRevision
    });
    return [...var_core_value_sig849B.changesets].reverse().map(var_core_value_sigE154 => {
      let var_core_value_sig4632 = (0, t.parseProtocolChangeset)(var_core_value_sigE154),
        var_core_value_sig12F2 = var_core_value_sig849B.members[var_core_value_sig4632.userID] ?? var_core_value_sig849B.members[var_core_value_sig4632.memberID],
        var_core_value_sig2259 = var_core_value_sig12F2 != null && var_core_value_sig12F2.anonymous ? "" : (var_core_value_sig12F2 == null ? undefined : var_core_value_sig12F2.name) ?? "";
      return {
        unitId: var_core_value_sig9CD9,
        id: var_core_value_sigFD0C.id + ":revision:" + var_core_value_sig4632.revision,
        startRevision: var_core_value_sig4632.revision,
        endRevision: var_core_value_sig4632.revision,
        createTime: var_core_value_sigE154.createTime ? Number(var_core_value_sigE154.createTime) * 1000 : undefined,
        creatorName: var_core_value_sig2259,
        creatorNames: var_core_value_sig2259 ? [var_core_value_sig2259] : [],
        isAnonymous: !!(var_core_value_sig12F2 != null && var_core_value_sig12F2.anonymous),
        commands: je(var_core_value_sig4632.mutations),
        mutations: var_core_value_sig4632.mutations,
        additionalFields: var_core_value_sig4632.additionalFields,
        isDetail: true,
        parentId: var_core_value_sigFD0C.id
      };
    });
  }
  async fetchChangesets(var_core_value_sig5F1A, var_core_value_sigB455) {
    if (var_core_value_sigB455.targetRevision < var_core_value_sigB455.baseRevision) throw Error("[HistoryGatewayService]:\x20targetRevision\x20must\x20be\x20greater\x20than\x20or\x20equal\x20to\x20baseRevision.");
    if (var_core_value_sigB455.targetRevision === var_core_value_sigB455.baseRevision) return {
      comparison: var_core_value_sigB455,
      changesets: [],
      members: {}
    };
    let var_core_value_sig5241 = var_core_value_sigB455.baseRevision + 1,
      var_core_value_sigC6E5 = await this._httpService["get"](this._getApiPrefix() + "/" + var_core_value_sig5F1A + "/cs?startRevision=" + var_core_value_sig5241 + "&endRevision=" + var_core_value_sigB455.targetRevision);
    return this._assertOk(var_core_value_sigC6E5.body["error"], "load changesets"), {
      comparison: var_core_value_sigB455,
      changesets: var_core_value_sigC6E5.body["changesets"] ?? [],
      members: Ne(var_core_value_sigC6E5.body["users"] ?? {})
    };
  }
  _getApiPrefix() {
    var var_core_value_sigCEFB;
    return ((var_core_value_sigCEFB = this._configService["getConfig"]("edit-history.config")) == null ? undefined : var_core_value_sigCEFB.historyServerUrl) ?? "/universer-api/history";
  }
  _getPageSize() {
    var var_core_value_sig1537;
    return ((var_core_value_sig1537 = this._configService["getConfig"]("edit-history.config")) == null ? undefined : var_core_value_sig1537.pageSize) ?? 20;
  }
  _assertOk(var_core_value_sigE4C6, var_core_value_sig4313) {
    if (!var_core_value_sigE4C6 || var_core_value_sigE4C6.code !== i.ErrorCode["OK"]) throw Error("[HistoryGatewayService]:\x20Failed\x20to\x20" + var_core_value_sig4313 + (var_core_value_sigE4C6 != null && var_core_value_sigE4C6.message ? ":\x20" + var_core_value_sigE4C6.message : "."));
  }
};
Y = U([H(0, e.IConfigService), H(1, (0, e.Inject)(r.HTTPService))], Y);
function je(var_core_value_sigA694) {
  if (!var_core_value_sigA694) return [];
  let var_core_value_sig18E01 = var_core_value_sigA694.flatMap(var_core_value_sigFC87 => {
    let var_core_value_sig156F = Me(var_core_value_sigFC87.params);
    return var_core_value_sig156F ? [var_core_value_sig156F, var_core_value_sigFC87.id] : [var_core_value_sigFC87.id];
  });
  return [...new Set(var_core_value_sig18E01)];
}
function Me(var_core_value_sig0428) {
  if (!(typeof var_core_value_sig0428 != "object" || !var_core_value_sig0428 || !("trigger" in var_core_value_sig0428))) return typeof var_core_value_sig0428.trigger == "string" ? var_core_value_sig0428.trigger : undefined;
}
function Ne(var_core_value_sigBE07) {
  return Object.fromEntries(Object.entries(var_core_value_sigBE07).map(([var_core_value_sigDD51, var_core_value_sigF057]) => [var_core_value_sigDD51, {
    userId: var_core_value_sigF057.userID || var_core_value_sigDD51,
    name: var_core_value_sigF057.name,
    avatar: var_core_value_sigF057.avatar,
    anonymous: !!var_core_value_sigF057.anonymous
  }]));
}
function Pe(var_core_value_sig555F) {
  return var_core_value_sig555F.historyIds["flatMap"](var_core_value_sig72F6 => {
    let var_core_value_sig9FBA = var_core_value_sig555F.entities["datas"][var_core_value_sig72F6];
    if (!var_core_value_sig9FBA) return [];
    let var_core_value_sigFE01 = var_core_value_sig555F.entities["users"][var_core_value_sig9FBA.userId],
      var_core_value_sigA2CE = !!(var_core_value_sigFE01 != null && var_core_value_sigFE01.anonymous);
    return [{
      unitId: var_core_value_sig9FBA.unitId,
      id: var_core_value_sig72F6,
      startRevision: Number(var_core_value_sig9FBA.startRevision),
      endRevision: Number(var_core_value_sig9FBA.endRevision),
      createTime: var_core_value_sig9FBA.createTime ? Number(var_core_value_sig9FBA.createTime) : undefined,
      creatorName: var_core_value_sigA2CE ? "" : (var_core_value_sigFE01 == null ? undefined : var_core_value_sigFE01.name) ?? "",
      creatorNames: var_core_value_sig9FBA.userIds["map"](var_core_value_sig9E2F => {
        var var_core_value_sigD082;
        return ((var_core_value_sigD082 = var_core_value_sig555F.entities["users"][var_core_value_sig9E2F]) == null ? undefined : var_core_value_sigD082.name) ?? "";
      }).filter(Boolean),
      isAnonymous: var_core_value_sigA2CE,
      commands: var_core_value_sig9FBA.command,
      recoverTime: var_core_value_sig9FBA.recoverTime ? Number(var_core_value_sig9FBA.recoverTime) : undefined,
      additionalFields: var_core_value_sig9FBA.additionalFields,
      startRevisionCreateTime: var_core_value_sig9FBA.startRevCreateTime ? Number(var_core_value_sig9FBA.startRevCreateTime) : undefined,
      endRevisionCreateTime: var_core_value_sig9FBA.endRevCreateTime ? Number(var_core_value_sig9FBA.endRevCreateTime) : undefined
    }];
  });
}
let X = class {
  constructor(var_core_value_sig1975) {
    this._gateway = var_core_value_sig1975;
  }
  async load(var_core_value_sig6EA1, var_core_value_sig029F) {
    return (await this._gateway["fetchChangesets"](var_core_value_sig6EA1, var_core_value_sig029F)).changesets["flatMap"](var_core_value_sigDBB7 => {
      let var_core_value_sigD0A8 = (0, t.parseProtocolChangeset)(var_core_value_sigDBB7),
        var_core_value_sigF4B9 = var_core_value_sigD0A8.memberID || var_core_value_sigD0A8.userID || "unknownUser";
      return var_core_value_sigD0A8.mutations["map"](var_core_value_sigF704 => ({
        mutation: var_core_value_sigF704,
        memberId: var_core_value_sigF4B9,
        revision: var_core_value_sigD0A8.revision
      }));
    });
  }
};
X = U([H(0, (0, e.Inject)(Y))], X);
let Z = class {
  constructor(var_core_value_sig3767) {
    this._commandService = var_core_value_sig3767;
  }
  async restore(var_core_value_sig670B, var_core_value_sig6912, var_core_value_sigE235) {
    return !!(await this._commandService["executeCommand"](J.id, {
      unitId: var_core_value_sig670B,
      type: var_core_value_sig6912,
      revision: var_core_value_sigE235
    }));
  }
};
Z = U([H(0, e.ICommandService)], Z);
let Fe = function (var_core_value_sig3D6F) {
    return var_core_value_sig3D6F.Idle = "idle", var_core_value_sig3D6F.Opening = "opening", var_core_value_sig3D6F.Ready = "ready", var_core_value_sig3D6F.LoadingMore = "loading-more", var_core_value_sig3D6F.Error = "error", var_core_value_sig3D6F.Closing = "closing", var_core_value_sig3D6F;
  }({}),
  Q = class extends e.Disposable {
    constructor(var_core_value_sig7664) {
      super(), this._gateway = var_core_value_sig7664, F(this, "_status$", new a["BehaviorSubject"]("idle")), F(this, "status$", this._status$["asObservable"]()), F(this, "_versions$", new a["BehaviorSubject"]([])), F(this, "versions$", this._versions$["asObservable"]()), F(this, "_currentVersion$", new a["BehaviorSubject"](null)), F(this, "currentVersion$", this._currentVersion$["asObservable"]()), F(this, "_creators$", new a["BehaviorSubject"]([])), F(this, "creators$", this._creators$["asObservable"]()), F(this, "_members$", new a["BehaviorSubject"]({})), F(this, "members$", this._members$["asObservable"]()), F(this, "_error$", new a["BehaviorSubject"](null)), F(this, "error$", this._error$["asObservable"]()), F(this, "_descriptor", null), F(this, "_query", {}), F(this, "_hasMore", false), F(this, "_lastLabel", ""), F(this, "_sessionGeneration", 0), F(this, "_listRequestGeneration", 0), F(this, "_versionDetails", new Map()), F(this, "_versionDetailRequests", new Map());
    }
    get descriptor() {
      return this._descriptor;
    }
    get currentVersion() {
      return this._currentVersion$["value"];
    }
    get hasMore() {
      return this._hasMore;
    }
    async open(var_core_value_sig2281, var_core_value_sig5E86 = {}) {
      let var_core_value_sig6998 = ++this._sessionGeneration,
        var_core_value_sigF639 = ++this._listRequestGeneration;
      this._versionDetails["clear"](), this._versionDetailRequests["clear"](), this._descriptor = var_core_value_sig2281, this._query = var_core_value_sig5E86, this._status$["next"]("opening"), this._error$["next"](null);
      try {
        let var_core_value_sig5CEE = await this._gateway["fetchVersions"](var_core_value_sig2281.unitId, var_core_value_sig5E86);
        if (var_core_value_sig6998 !== this._sessionGeneration || var_core_value_sigF639 !== this._listRequestGeneration) return;
        let var_core_value_sigE92A = [Ie(var_core_value_sig2281.unitId)];
        var_core_value_sig5CEE.versions["length"] > 0 && (var_core_value_sigE92A = var_core_value_sig5CEE.versions["map"]((var_core_value_sig2BCF, var_core_value_sig0D69) => var_core_value_sig0D69 === 0 ? {
          ...var_core_value_sig2BCF,
          isCurrent: true
        } : var_core_value_sig2BCF)), this._versions$["next"](var_core_value_sigE92A), this._members$["next"](var_core_value_sig5CEE.members), this._currentVersion$["next"](var_core_value_sigE92A[0]), this._hasMore = var_core_value_sig5CEE.hasMore, this._lastLabel = var_core_value_sig5CEE.lastLabel, this._status$["next"]("ready"), this._loadCreators(var_core_value_sig2281.unitId, var_core_value_sig6998);
      } catch (var_core_value_sig362B) {
        if (var_core_value_sig6998 !== this._sessionGeneration || var_core_value_sigF639 !== this._listRequestGeneration) return;
        let var_core_value_sig5CA5 = var_core_value_sig362B instanceof Error ? var_core_value_sig362B : Error(String(var_core_value_sig362B));
        throw this._error$["next"](var_core_value_sig5CA5), this._status$["next"]("error"), var_core_value_sig5CA5;
      }
    }
    _loadCreators(var_core_value_sigEAE5, var_core_value_sigE94C) {
      this._gateway["fetchCreators"](var_core_value_sigEAE5).then(var_core_value_sigE90F => {
        var_core_value_sigE94C === this._sessionGeneration && this._creators$["next"](var_core_value_sigE90F);
      }).catch(() => {
        var_core_value_sigE94C === this._sessionGeneration && this._creators$["next"]([]);
      });
    }
    async loadMore() {
      if (!this._descriptor || !this._hasMore || !this._lastLabel || this._status$["value"] === "loading-more") return;
      let var_core_value_sig6D47 = this._sessionGeneration,
        var_core_value_sigCB82 = ++this._listRequestGeneration;
      this._status$["next"]("loading-more"), this._error$["next"](null);
      try {
        let var_core_value_sigEFD4 = await this._gateway["fetchVersions"](this._descriptor["unitId"], {
          ...this._query,
          lastLabel: this._lastLabel
        });
        if (var_core_value_sig6D47 !== this._sessionGeneration || var_core_value_sigCB82 !== this._listRequestGeneration) return;
        this._versions$["next"]([...this._versions$["value"], ...var_core_value_sigEFD4.versions]), this._members$["next"]({
          ...this._members$["value"],
          ...var_core_value_sigEFD4.members
        }), this._hasMore = var_core_value_sigEFD4.hasMore, this._lastLabel = var_core_value_sigEFD4.lastLabel, this._status$["next"]("ready");
      } catch (var_core_value_sig861B) {
        if (var_core_value_sig6D47 !== this._sessionGeneration || var_core_value_sigCB82 !== this._listRequestGeneration) return;
        let var_core_value_sig5237 = var_core_value_sig861B instanceof Error ? var_core_value_sig861B : Error(String(var_core_value_sig861B));
        throw this._error$["next"](var_core_value_sig5237), this._status$["next"]("error"), var_core_value_sig5237;
      }
    }
    async loadVersionDetails(var_core_value_sigCF4E) {
      let var_core_value_sig6CAD = this._versionDetails["get"](var_core_value_sigCF4E);
      if (var_core_value_sig6CAD) return var_core_value_sig6CAD;
      let var_core_value_sig8CF5 = this._versionDetailRequests["get"](var_core_value_sigCF4E);
      if (var_core_value_sig8CF5) return var_core_value_sig8CF5;
      let var_core_value_sigDDD7 = this._versions$["value"].find(var_core_value_sigBB00 => var_core_value_sigBB00.id === var_core_value_sigCF4E);
      if (!var_core_value_sigDDD7) throw Error("[HistorySessionService]: Unknown history version " + var_core_value_sigCF4E + ".");
      let var_core_value_sigB2CE = this._sessionGeneration,
        var_core_value_sig443C = this._gateway["fetchVersionDetails"](var_core_value_sigDDD7.unitId, var_core_value_sigDDD7).then(var_core_value_sig7E54 => var_core_value_sigB2CE === this._sessionGeneration ? (this._versionDetails["set"](var_core_value_sigCF4E, var_core_value_sig7E54), var_core_value_sig7E54) : []).finally(() => {
          this._versionDetailRequests["get"](var_core_value_sigCF4E) === var_core_value_sig443C && this._versionDetailRequests["delete"](var_core_value_sigCF4E);
        });
      return this._versionDetailRequests["set"](var_core_value_sigCF4E, var_core_value_sig443C), var_core_value_sig443C;
    }
    selectVersion(var_core_value_sig39B1) {
      let var_core_value_sig210D = typeof var_core_value_sig39B1 == "string" ? this._versions$["value"].find(var_core_value_sig9A8D => var_core_value_sig9A8D.id === var_core_value_sig39B1) : var_core_value_sig39B1;
      if (!var_core_value_sig210D) throw Error("[HistorySessionService]: Unknown history version " + String(var_core_value_sig39B1) + ".");
      return this._currentVersion$["next"](var_core_value_sig210D), var_core_value_sig210D;
    }
    close() {
      ++this._sessionGeneration, ++this._listRequestGeneration, this._status$["next"]("closing"), this._descriptor = null, this._query = {}, this._hasMore = false, this._lastLabel = "", this._versionDetails["clear"](), this._versionDetailRequests["clear"](), this._versions$["next"]([]), this._currentVersion$["next"](null), this._creators$["next"]([]), this._members$["next"]({}), this._error$["next"](null), this._status$["next"]("idle");
    }
    dispose() {
      this.close(), this._status$["complete"](), this._versions$["complete"](), this._currentVersion$["complete"](), this._creators$["complete"](), this._members$["complete"](), this._error$["complete"](), super.dispose();
    }
  };
Q = U([H(0, (0, e.Inject)(Y))], Q);
function Ie(var_core_value_sig336C) {
  return {
    unitId: var_core_value_sig336C,
    id: var_core_value_sig336C + ":current",
    startRevision: 1,
    endRevision: 0,
    creatorName: "",
    creatorNames: [],
    isAnonymous: false,
    commands: [],
    isCurrent: true
  };
}
let $ = class extends e.Plugin {
  constructor(var_core_value_sigB4B4 = K, var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71) {
    super(), this._config = var_core_value_sigB4B4, this._injector = var_core_value_sigD407, this._configService = var_core_value_sig63F3, this._commandService = var_core_value_sig6A71;
    let {
      ...var_core_value_sig3BF6
    } = (0, e.merge)({}, K, this._config);
    this._configService["setConfig"](G, var_core_value_sig3BF6);
  }
  onStarting() {
    this.disposeWithMe(this._commandService["registerCommand"](J)), (0, e.registerDependencies)(this._injector, [[Y], [X], [Z], [q], [Q], [I], [W]]);
  }
};
F($, "pluginName", "UNIVER_EDIT_HISTORY_PLUGIN"), F($, "packageName", ke), F($, "version", Ae), F($, "type", e.UniverInstanceType["UNIVER_UNKNOWN"]), $ = U([(0, e.DependentOn)(n.UniverLicensePlugin, t.UniverCollaborationPlugin), H(1, (0, e.Inject)(e.Injector)), H(2, e.IConfigService), H(3, e.ICommandService)], $);
let Le = function (var_core_value_sig6E68) {
  return var_core_value_sig6E68[var_core_value_sig6E68.Unspecified = 0] = "Unspecified", var_core_value_sig6E68[var_core_value_sig6E68.User = 1] = "User", var_core_value_sig6E68[var_core_value_sig6E68.Character = 2] = "Character", var_core_value_sig6E68;
}({});
function Re(var_core_value_sig8DFE) {
  return {
    baseRevision: Math.max(0, var_core_value_sig8DFE.startRevision - 1),
    targetRevision: var_core_value_sig8DFE.endRevision
  };
}
function ze(var_core_value_sig48EA, var_core_value_sig5E16) {
  return (0, t.parseProtocolChangeset)(var_core_value_sig48EA.data).mutations["some"](var_core_value_sig38CE => var_core_value_sig38CE.id === t.RevertRevisionMutation["id"] && Reflect.get(var_core_value_sig38CE.params, "revision") === var_core_value_sig5E16);
}
exports.EDIT_HISTORY_PLUGIN_CONFIG_KEY = G, Object.defineProperty(exports, "HistoryGatewayService", {
  enumerable: true,
  get: function () {
    return Y;
  }
}), Object.defineProperty(exports, "HistoryMutationService", {
  enumerable: true,
  get: function () {
    return X;
  }
}), exports.HistoryOrigin = Le, Object.defineProperty(exports, "HistoryRestoreService", {
  enumerable: true,
  get: function () {
    return Z;
  }
}), Object.defineProperty(exports, "HistorySessionService", {
  enumerable: true,
  get: function () {
    return Q;
  }
}), exports.HistorySessionStatus = Fe, exports.HistoryUnitAdapterRegistryService = q, exports.UnitComparisonAdapterRegistryService = I, exports.UnitComparisonChangeKind = s, exports.UnitComparisonDetailLevel = c, exports.UnitComparisonDiagnosticCode = p, exports.UnitComparisonEntityType = d, exports.UnitComparisonFidelity = o, exports.UnitComparisonReadiness = f, exports.UnitComparisonSegmentKind = l, Object.defineProperty(exports, "UnitComparisonService", {
  enumerable: true,
  get: function () {
    return W;
  }
}), exports.UnitComparisonValueType = u, Object.defineProperty(exports, "UniverEditHistoryPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.alignComparisonIdentities = ee, exports.arrayComparisonEntries = he, exports.asRecord = w, exports.buildScopedUnitComparison = S, exports.buildSemanticComparisonItems = ie, exports.buildSemanticLeafChanges = y, exports.buildUnitComparisonScopes = le, exports.createUnitComparisonEngine = we, exports.getVersionComparison = Re, exports.isHistoryRestoreAcknowledgement = ze, exports.recordComparisonEntries = x, exports.resourceComparisonEntries = ge, exports.stableJson = T, exports.withoutComparisonKeys = _e;
