Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core");
require("@univerjs/sheets-filter");
let t = require("@univerjs/sheets-table"),
  n = require("@univerjs-pro/license");
function r(var_core_value_sig2983) {
  "@babel/helpers - typeof";

  return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig4313) {
    return typeof var_core_value_sig4313;
  } : function (var_core_value_sigFC87) {
    return var_core_value_sigFC87 && typeof Symbol == "function" && var_core_value_sigFC87.constructor === Symbol && var_core_value_sigFC87 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFC87;
  }, r(var_core_value_sig2983);
}
function i(var_core_value_sigE1B0, var_core_value_sigD4FF) {
  if (r(var_core_value_sigE1B0) != "object" || !var_core_value_sigE1B0) return var_core_value_sigE1B0;
  var var_core_value_sig1E5B = var_core_value_sigE1B0[Symbol.toPrimitive];
  if (var_core_value_sig1E5B !== undefined) {
    var var_core_value_sigB680 = var_core_value_sig1E5B.call(var_core_value_sigE1B0, var_core_value_sigD4FF || "default");
    if (r(var_core_value_sigB680) != "object") return var_core_value_sigB680;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigD4FF === "string" ? String : Number)(var_core_value_sigE1B0);
}
function a(var_core_value_sig1F64) {
  var var_core_value_sigDD1C = i(var_core_value_sig1F64, "string");
  return r(var_core_value_sigDD1C) == "symbol" ? var_core_value_sigDD1C : var_core_value_sigDD1C + "";
}
function o(var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  return (var_core_value_sigB7D1 = a(var_core_value_sigB7D1)) in var_core_value_sig2C39 ? Object.defineProperty(var_core_value_sig2C39, var_core_value_sigB7D1, {
    value: var_core_value_sig64F0,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig2C39[var_core_value_sigB7D1] = var_core_value_sig64F0, var_core_value_sig2C39;
}
function s(var_core_value_sig85B1) {
  return var_core_value_sig85B1.v == null ? "" : String(var_core_value_sig85B1.v).trim();
}
function c(var_core_value_sig3141) {
  return /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(var_core_value_sig3141);
}
function l(var_core_value_sig2162, var_core_value_sig2EAD) {
  let var_core_value_sig6774 = {
    "2006-01-02": /^\d{4}-\d{2}-\d{2}$/,
    "2006-1-2": /^\d{4}-\d{1,2}-\d{1,2}$/,
    "2006/01/02": /^\d{4}\/\d{2}\/\d{2}$/,
    "2006/1/2": /^\d{4}\/\d{1,2}\/\d{1,2}$/,
    "2006年1月2日": /^\d{4}年\d{1,2}月\d{1,2}日$/,
    "02-01-2006": /^\d{1,2}-\d{1,2}-\d{4}$/,
    "02/01/2006": /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    "02.01.2006": /^\d{1,2}\.\d{1,2}\.\d{4}$/,
    "01-02-2006": /^\d{1,2}-\d{1,2}-\d{4}$/,
    "01/02/2006": /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    "2\x20January,\x202006": /^\d{1,2}\s+[A-Z]+,\s*\d{4}$/i,
    "2\x20January,2006": /^\d{1,2}\s+[A-Z]+,\d{4}$/i,
    "2\x20Jan.,\x202006": /^\d{1,2}\s+[A-Z]{3}\.,\s*\d{4}$/i,
    "January\x202,\x202006": /^[A-Z]+\s+\d{1,2},\s*\d{4}$/i,
    "January\x202,2006": /^[A-Z]+\s+\d{1,2},\d{4}$/i,
    "Jan.\x202,\x202006": /^[A-Z]{3}\.\s+\d{1,2},\s*\d{4}$/i,
    20060102: /^\d{8}$/,
    "2006-01-02T15:04:05": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,
    "2006-01-02\x2015:04:05": /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/
  }[var_core_value_sig2EAD];
  if (!var_core_value_sig6774 || !var_core_value_sig6774.test(var_core_value_sig2162)) return false;
  let var_core_value_sig340D = var_core_value_sig2162.replace(/\D+/g, "\x20").trim().split(/\s+/).map(Number),
    var_core_value_sig82D4 = 0,
    var_core_value_sigBDE4 = 1,
    var_core_value_sig7DF1 = 1,
    var_core_value_sigDC86 = 0,
    var_core_value_sig0B0C = 0,
    var_core_value_sigA39E = 0;
  switch (var_core_value_sig2EAD) {
    case "2006-01-02":
    case "2006-1-2":
    case "2006/01/02":
    case "2006/1/2":
      [var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1] = var_core_value_sig340D;
      break;
    case "2006年1月2日":
      [var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1] = var_core_value_sig340D;
      break;
    case "02-01-2006":
    case "02/01/2006":
    case "02.01.2006":
      [var_core_value_sig7DF1, var_core_value_sigBDE4, var_core_value_sig82D4] = var_core_value_sig340D;
      break;
    case "01-02-2006":
    case "01/02/2006":
      [var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sig82D4] = var_core_value_sig340D;
      break;
    case "20060102":
      {
        let var_core_value_sig0C53 = var_core_value_sig2162;
        var_core_value_sig82D4 = +var_core_value_sig0C53.slice(0, 4), var_core_value_sigBDE4 = +var_core_value_sig0C53.slice(4, 6), var_core_value_sig7DF1 = +var_core_value_sig0C53.slice(6, 8);
        break;
      }
    case "2006-01-02T15:04:05":
    case "2006-01-02 15:04:05":
      [var_core_value_sig82D4, var_core_value_sigBDE4, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E] = var_core_value_sig340D;
      break;
    default:
      return true;
  }
  if (var_core_value_sigBDE4 < 1 || var_core_value_sigBDE4 > 12 || var_core_value_sig7DF1 < 1 || var_core_value_sig7DF1 > 31 || var_core_value_sigDC86 < 0 || var_core_value_sigDC86 > 23 || var_core_value_sig0B0C < 0 || var_core_value_sig0B0C > 59 || var_core_value_sigA39E < 0 || var_core_value_sigA39E > 59) return false;
  let var_core_value_sigBBEE = new Date(var_core_value_sig82D4, var_core_value_sigBDE4 - 1, var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C, var_core_value_sigA39E);
  return var_core_value_sigBBEE.getFullYear() === var_core_value_sig82D4 && var_core_value_sigBBEE.getMonth() === var_core_value_sigBDE4 - 1 && var_core_value_sigBBEE.getDate() === var_core_value_sig7DF1;
}
function u(var_core_value_sig011D) {
  return Number.isFinite(var_core_value_sig011D) && var_core_value_sig011D >= 1 && var_core_value_sig011D <= 80000;
}
function d(var_core_value_sig6167) {
  switch (var_core_value_sig6167) {
    case 0:
      return "string";
    case 1:
      return "number";
    case 2:
    case 3:
    case 4:
      return "date";
    case 5:
      return "boolean";
    default:
      return "unknown";
  }
}
var f = class {
    constructor() {
      o(this, "valid", 0), o(this, "invalid", 0), o(this, "confidence", 0);
    }
  },
  p = class extends f {
    constructor(var_core_value_sig156F) {
      super(), o(this, "timeStampStyles", undefined), o(this, "dt", undefined), o(this, "layout", undefined), o(this, "needConvert", undefined), this.dt = var_core_value_sig156F.dt, this.layout = var_core_value_sig156F.layout, this.needConvert = !!var_core_value_sig156F.needConvert;
    }
    Match(var_core_value_sigDD51) {
      if (var_core_value_sigDD51.t === e.CellValueType["STRING"]) {
        let var_core_value_sigEA04 = s(var_core_value_sigDD51);
        if (!var_core_value_sigEA04) return;
        l(var_core_value_sigEA04, this.layout) ? this.valid += 2 : this.invalid++;
      }
    }
    Calc() {
      let var_core_value_sigF057 = 100 - Math.trunc((this.invalid * 10 + 1) * 100 / (this.invalid + this.valid + 1)),
        var_core_value_sig72F6 = {
          Charset: this.dt,
          Confidence: var_core_value_sigF057,
          debugInfo: this.layout
        };
      return this.needConvert && (var_core_value_sig72F6.Layout = this.layout), var_core_value_sig72F6;
    }
  },
  m = class extends f {
    constructor(var_core_value_sig9FBA) {
      super(), o(this, "dateStyles", undefined), o(this, "timeStampStyles", undefined), o(this, "dt", undefined), o(this, "layout", undefined), o(this, "needConvert", undefined), this.dateStyles = var_core_value_sig9FBA.dateStyles || {}, this.dt = var_core_value_sig9FBA.dt, this.layout = var_core_value_sig9FBA.layout, this.needConvert = !!var_core_value_sig9FBA.needConvert;
    }
    Match(var_core_value_sigFE01) {
      if (var_core_value_sigFE01.t === e.CellValueType["NUMBER"]) {
        if (var_core_value_sigFE01.s && this.dateStyles[var_core_value_sigFE01.s]) {
          this.valid += 2;
          return;
        }
        let var_core_value_sig7A62 = s(var_core_value_sigFE01);
        if (!var_core_value_sig7A62) return;
        if (this.layout === "excel" && u(Number(var_core_value_sig7A62))) {
          this.valid += 2;
          return;
        }
        l(var_core_value_sig7A62, this.layout) ? this.valid += 2 : this.invalid++;
      }
    }
    Calc() {
      let var_core_value_sigA2CE = 100 - Math.trunc((this.invalid * 10 + 1) * 100 / (this.invalid + this.valid + 1)),
        var_core_value_sig1975 = {
          Charset: this.dt,
          Confidence: var_core_value_sigA2CE,
          debugInfo: this.layout
        };
      return this.needConvert && (var_core_value_sig1975.Layout = this.layout), var_core_value_sig1975;
    }
  },
  h = class extends f {
    Match(var_core_value_sig6EA1) {
      if (var_core_value_sig6EA1.t === e.CellValueType["NUMBER"]) this.valid += 1;else {
        let var_core_value_sig8109 = s(var_core_value_sig6EA1);
        if (!var_core_value_sig8109) return;
        c(var_core_value_sig8109) ? this.valid += 1 : this.invalid++;
      }
    }
    Calc() {
      return {
        Charset: 1,
        Confidence: 100 - Math.trunc((this.invalid * 10 + 1) * 100 / (this.invalid + this.valid + 1)),
        debugInfo: "number"
      };
    }
  },
  g = class extends f {
    Match(var_core_value_sig029F) {
      var_core_value_sig029F.t === e.CellValueType["BOOLEAN"] ? this.valid += 1 : this.invalid++;
    }
    Calc() {
      return {
        Charset: 5,
        Confidence: 100 - Math.trunc((this.invalid * 10 + 1) * 100 / (this.invalid + this.valid + 1)),
        debugInfo: "number"
      };
    }
  },
  _ = class {
    constructor(var_core_value_sig3767) {
      o(this, "recognizers", undefined), o(this, "dateStyles", undefined), this.dateStyles = var_core_value_sig3767 || {}, this.recognizers = [new p({
        dt: 2,
        layout: "2006-01-02"
      }), new p({
        dt: 2,
        layout: "2006-1-2"
      }), new p({
        dt: 2,
        layout: "2006/01/02"
      }), new p({
        dt: 2,
        layout: "2006/1/2"
      }), new p({
        dt: 2,
        layout: "2006年1月2日",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "02-01-2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "02/01/2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "02.01.2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "01-02-2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "01/02/2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "2 January, 2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "2 January,2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "2 Jan., 2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "January\x202,\x202006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "January 2,2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "Jan. 2, 2006",
        needConvert: true
      }), new p({
        dt: 2,
        layout: "20060102",
        needConvert: true
      }), new m({
        dateStyles: this.dateStyles,
        dt: 2,
        layout: "20060102",
        needConvert: true
      }), new p({
        dt: 4,
        layout: "2006-01-02T15:04:05"
      }), new p({
        dt: 4,
        layout: "2006-01-02 15:04:05"
      }), new m({
        dateStyles: this.dateStyles,
        dt: 3,
        layout: "excel",
        needConvert: true
      }), new h(), new g()];
    }
    Match(var_core_value_sig670B) {
      for (let var_core_value_sig7565 of this.recognizers) var_core_value_sig7565.Match(var_core_value_sig670B);
    }
    Best() {
      let var_core_value_sig6912 = this.recognizers["map"](var_core_value_sigD4FB => var_core_value_sigD4FB.Calc());
      if (var_core_value_sig6912.sort((var_core_value_sig3E71, var_core_value_sig01B3) => var_core_value_sig01B3.Confidence - var_core_value_sig3E71.Confidence), var_core_value_sig6912.length === 0 || var_core_value_sig6912[0].Confidence < 50) return ["string", null];
      let var_core_value_sigE235 = var_core_value_sig6912[0];
      return [d(var_core_value_sigE235.Charset), var_core_value_sigE235];
    }
  };
function v(var_core_value_sig65A1, var_core_value_sig7F19) {
  let var_core_value_sig7827 = var_core_value_sig65A1,
    var_core_value_sig652C = var_core_value_sig7F19;
  var_core_value_sig7827 <= 0 && (var_core_value_sig7827 = 6), var_core_value_sig652C <= 0 && (var_core_value_sig652C = 10), var_core_value_sig652C *= 2;
  let var_core_value_sig7E32 = [];
  for (let var_core_value_sig7664 = 0; var_core_value_sig7664 < var_core_value_sig652C; var_core_value_sig7664++) var_core_value_sig7E32.push((0, e.generateRandomId)(var_core_value_sig7827));
  let var_core_value_sig4C07 = new Map();
  for (let var_core_value_sig2281 of var_core_value_sig7E32) {
    let var_core_value_sig7442 = var_core_value_sig2281.toLowerCase();
    var_core_value_sig4C07.has(var_core_value_sig7442) || var_core_value_sig4C07.set(var_core_value_sig7442, var_core_value_sig2281);
  }
  return Array.from(var_core_value_sig4C07.values());
}
var y = class t {
  constructor(var_core_value_sig5E86) {
    o(this, "id", undefined), o(this, "sheetId", undefined), o(this, "range", undefined), o(this, "name", undefined), o(this, "description", undefined), o(this, "rowTitleCount", undefined), o(this, "mergeRowTitleCount", undefined), o(this, "startStatisticRowCount", undefined), o(this, "endStatisticRowCount", undefined), o(this, "rowMergeTitleCountMap", undefined), o(this, "rowMergeTitleState", undefined), o(this, "columnMergeTitleState", undefined), o(this, "columnMergeTitleCountMap", undefined), o(this, "isMatchEnd", undefined), o(this, "isMatchContinue", undefined), o(this, "isTimeSeries", undefined), o(this, "isTestTable", undefined), o(this, "isUpdateTable", undefined), o(this, "columns", undefined), this.id = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.id) ?? "", this.sheetId = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.sheetId) ?? (0, e.generateRandomId)(), this.range = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.range) ?? {
      startRow: -1,
      endRow: -1,
      startColumn: -1,
      endColumn: -1
    }, this.name = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.name) ?? "", this.description = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.description) ?? "", this.rowTitleCount = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.rowTitleCount) ?? 0, this.mergeRowTitleCount = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.mergeRowTitleCount) ?? 0, this.startStatisticRowCount = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.startStatisticRowCount) ?? 0, this.endStatisticRowCount = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.endStatisticRowCount) ?? 0, this.rowMergeTitleCountMap = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.rowMergeTitleCountMap) ?? new Map(), this.rowMergeTitleState = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.rowMergeTitleState) ?? false, this.columnMergeTitleState = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.columnMergeTitleState) ?? false, this.columnMergeTitleCountMap = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.columnMergeTitleCountMap) ?? new Map(), this.isMatchEnd = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.isMatchEnd) ?? false, this.isMatchContinue = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.isMatchContinue) ?? false, this.isTimeSeries = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.isTimeSeries) ?? false, this.isTestTable = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.isTestTable) ?? false, this.isUpdateTable = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.isUpdateTable) ?? false, this.columns = (var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.columns) ?? [];
  }
  _isRowContinuous(var_core_value_sig6998, var_core_value_sigF639) {
    return var_core_value_sigF639 - var_core_value_sig6998 === 1 || var_core_value_sigF639 === var_core_value_sig6998;
  }
  intersectWithPreTables(var_core_value_sigEAE5) {
    let var_core_value_sigE94C = [];
    for (let var_core_value_sigDF87 of var_core_value_sigEAE5) this.range["endColumn"] < var_core_value_sigDF87.range["startColumn"] || this.range["startColumn"] > var_core_value_sigDF87.range["endColumn"] || this._isRowContinuous(var_core_value_sigDF87.range["endRow"], this.range["startRow"]) && var_core_value_sigE94C.push(var_core_value_sigDF87);
    return var_core_value_sigE94C;
  }
  intersectWithColumns(var_core_value_sig6D47) {
    return var_core_value_sig6D47.range["endRow"] === this.range["startRow"] && this.range["endColumn"] + 1 === var_core_value_sig6D47.range["startColumn"];
  }
  saveTableToCache(var_core_value_sigCB82) {
    return this.range["startColumn"] === -1 ? this : (var_core_value_sigCB82.push(this), new t({
      sheetId: this.sheetId,
      range: {
        startRow: this.range["startRow"],
        endRow: this.range["endRow"],
        startColumn: -1,
        endColumn: -1
      }
    }));
  }
  insertCellData(var_core_value_sigCF4E, var_core_value_sig6CAD, var_core_value_sig8CF5, var_core_value_sigDDD7) {
    this.range["startColumn"] === -1 && (this.range["startColumn"] = var_core_value_sig6CAD), this.range["endColumn"] = var_core_value_sig6CAD, var_core_value_sigDDD7 != null && (this.range["endColumn"] = Math.max(var_core_value_sigDDD7, this.range["endColumn"]));
  }
  dispose() {
    this.rowMergeTitleCountMap["clear"](), this.columnMergeTitleCountMap["clear"](), this.columns = [];
  }
};
function b(var_core_value_sig79AB, var_core_value_sig8E74) {
  let {
    startRow: var_core_value_sig104C,
    startColumn: var_core_value_sig841D,
    endRow: var_core_value_sig90CB,
    endColumn: var_core_value_sigBDF5
  } = var_core_value_sig8E74;
  return var_core_value_sig79AB + ":" + var_core_value_sig104C + "," + var_core_value_sig841D + "-" + var_core_value_sig90CB + "," + var_core_value_sigBDF5;
}
const x = new Map();
function S(var_core_value_sigACC6, var_core_value_sig1614) {
  let var_core_value_sig85C3 = new e["RTree"](false),
    var_core_value_sigB996 = var_core_value_sig1614.getSheetId(),
    var_core_value_sig4BBA = new Map(),
    var_core_value_sig6201 = var_core_value_sig1614.getMergeData() ?? [];
  x.clear();
  for (let var_core_value_sigB2CE of var_core_value_sig6201) {
    let var_core_value_sig9EE0 = b("merge", var_core_value_sigB2CE),
      var_core_value_sigF051 = {
        unitId: var_core_value_sigACC6,
        sheetId: var_core_value_sigB996,
        range: var_core_value_sigB2CE,
        id: var_core_value_sig9EE0
      };
    var_core_value_sig85C3.insert(var_core_value_sigF051), var_core_value_sig4BBA.set(var_core_value_sig9EE0, var_core_value_sigF051);
  }
  return x.set(var_core_value_sig1614, {
    mergeRTree: var_core_value_sig85C3,
    mergeRangeMap: var_core_value_sig4BBA
  }), {
    mergeRTree: var_core_value_sig85C3,
    mergeRangeMap: var_core_value_sig4BBA
  };
}
function ee(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
  let var_core_value_sigE2BF = new e["RTree"](false),
    var_core_value_sigB8C7 = var_core_value_sigBB6C.get(t.TableManager).getTableList(var_core_value_sig5151);
  if (var_core_value_sigB8C7 && Array.isArray(var_core_value_sigB8C7)) for (let var_core_value_sig443C of var_core_value_sigB8C7) {
    if (!(var_core_value_sig443C != null && var_core_value_sig443C.range)) continue;
    let var_core_value_sig0B45 = var_core_value_sig443C.range,
      var_core_value_sig36F8 = {
        unitId: var_core_value_sig5151,
        sheetId: var_core_value_sigB542,
        range: var_core_value_sig0B45,
        id: b("table", var_core_value_sig0B45)
      };
    var_core_value_sigE2BF.insert(var_core_value_sig36F8);
  }
  return var_core_value_sigE2BF;
}
function C(var_core_value_sigA56E, var_core_value_sig1998, var_core_value_sigFF19) {
  let var_core_value_sig43B8 = var_core_value_sigA56E.get(var_core_value_sig1998);
  var_core_value_sig43B8 ? var_core_value_sig43B8.push(var_core_value_sigFF19) : var_core_value_sigA56E.set(var_core_value_sig1998, [var_core_value_sigFF19]);
}
function w(var_core_value_sigD98F, var_core_value_sig66C0) {
  let var_core_value_sig9D15 = var_core_value_sigD98F.getSheets(),
    var_core_value_sigB785 = {},
    var_core_value_sig130F = var_core_value_sigD98F.getUnitId();
  for (let var_core_value_sig39B1 of var_core_value_sig9D15) {
    let var_core_value_sig03E1 = var_core_value_sig39B1.getSheetId(),
      var_core_value_sigBB57 = var_core_value_sig39B1.getRowCount(),
      var_core_value_sig7C4A = var_core_value_sig39B1.getColumnCount(),
      {
        mergeRTree: var_core_value_sigE799,
        mergeRangeMap: var_core_value_sigB601
      } = S(var_core_value_sig130F, var_core_value_sig39B1),
      var_core_value_sig8B71 = ee(var_core_value_sig130F, var_core_value_sig03E1, var_core_value_sig66C0),
      var_core_value_sigAEFB = [],
      var_core_value_sig826B = [],
      var_core_value_sigCF89 = var_core_value_sig39B1.getCellMatrix();
    for (let var_core_value_sigB512 = 0; var_core_value_sigB512 < var_core_value_sigBB57; var_core_value_sigB512++) {
      let var_core_value_sig21D8 = [],
        var_core_value_sig2B65 = new y({
          sheetId: var_core_value_sig03E1,
          range: {
            startRow: var_core_value_sigB512,
            endRow: var_core_value_sigB512,
            startColumn: -1,
            endColumn: -1
          }
        }),
        var_core_value_sigD7EA = new Map();
      if (var_core_value_sigCF89.getRow(var_core_value_sigB512) == null) {
        var_core_value_sigAEFB.push(...var_core_value_sig826B), var_core_value_sig826B = [];
        continue;
      }
      for (let var_core_value_sig8889 = 0; var_core_value_sig8889 <= var_core_value_sig7C4A; var_core_value_sig8889++) {
        let var_core_value_sigE154 = var_core_value_sig39B1.getCell(var_core_value_sigB512, var_core_value_sig8889),
          var_core_value_sig4632 = {
            range: {
              startRow: var_core_value_sigB512,
              startColumn: var_core_value_sig8889,
              endRow: var_core_value_sigB512,
              endColumn: var_core_value_sig8889
            },
            unitId: var_core_value_sig130F,
            sheetId: var_core_value_sig03E1
          };
        if (var_core_value_sig8B71.bulkSearch([var_core_value_sig4632]).size > 0) {
          var_core_value_sig2B65 = var_core_value_sig2B65.saveTableToCache(var_core_value_sig21D8);
          continue;
        }
        let var_core_value_sig12F2 = var_core_value_sigE799.bulkSearch([var_core_value_sig4632]);
        if (var_core_value_sig12F2.size > 0) {
          let var_core_value_sigF602 = var_core_value_sig2B65.intersectWithPreTables(var_core_value_sig826B),
            var_core_value_sig1BBD = var_core_value_sig12F2.keys().next().value,
            var_core_value_sigF704 = var_core_value_sigB601.get(var_core_value_sig1BBD);
          if (!var_core_value_sigF704) continue;
          let var_core_value_sig2BCF = {
              startRow: var_core_value_sigF704.range["startRow"],
              endRow: var_core_value_sigF704.range["endRow"],
              startColumn: var_core_value_sigF704.range["startColumn"],
              endColumn: var_core_value_sigF704.range["endColumn"]
            },
            var_core_value_sig0D69 = var_core_value_sig39B1.getCell(var_core_value_sig2BCF.startRow, var_core_value_sig2BCF.startColumn);
          if (var_core_value_sig0D69 && (var_core_value_sig0D69.p != null || var_core_value_sig0D69.v != null && String(var_core_value_sig0D69.v).length > 0)) {
            var_core_value_sig2B65.insertCellData(var_core_value_sigB512, var_core_value_sig8889, var_core_value_sigE154, var_core_value_sig2BCF.endColumn);
            for (let var_core_value_sig2AD0 = var_core_value_sig2BCF.startColumn; var_core_value_sig2AD0 <= var_core_value_sig2BCF.endColumn; var_core_value_sig2AD0++) var_core_value_sigD7EA.set(var_core_value_sig2AD0, true);
          } else var_core_value_sig2B65 = var_core_value_sig2B65.saveTableToCache(var_core_value_sig21D8);
          let var_core_value_sig480E = var_core_value_sig2BCF.endRow - var_core_value_sig2BCF.startRow,
            var_core_value_sig26DB = var_core_value_sig2BCF.endColumn - var_core_value_sig2BCF.startColumn;
          if (var_core_value_sigF602.length === 1) {
            if (var_core_value_sig480E > 0 && C(var_core_value_sig2B65.columnMergeTitleCountMap, var_core_value_sig8889, var_core_value_sigF704), var_core_value_sig26DB > 0) {
              let var_core_value_sig3EEE = var_core_value_sig2B65.rowMergeTitleCountMap["get"](var_core_value_sigB512) ?? [];
              var_core_value_sig3EEE.push(var_core_value_sigF704), var_core_value_sig2B65.rowMergeTitleCountMap["set"](var_core_value_sigB512, var_core_value_sig3EEE);
            }
          } else {
            if (var_core_value_sig480E > 0 && (var_core_value_sig2B65.columnMergeTitleState = true, C(var_core_value_sig2B65.columnMergeTitleCountMap, var_core_value_sig8889, var_core_value_sigF704)), var_core_value_sig26DB > 0) {
              var_core_value_sig2B65.rowMergeTitleState = true;
              let var_core_value_sigBC46 = var_core_value_sig2B65.rowMergeTitleCountMap["get"](var_core_value_sigB512) ?? [];
              var_core_value_sigBC46.push(var_core_value_sigF704), var_core_value_sig2B65.rowMergeTitleCountMap["set"](var_core_value_sigB512, var_core_value_sigBC46);
            }
          }
          continue;
        }
        if ((!var_core_value_sigE154 || A(var_core_value_sigE154) == null) && !var_core_value_sigD7EA.get(var_core_value_sig8889)) {
          var_core_value_sig2B65 = var_core_value_sig2B65.saveTableToCache(var_core_value_sig21D8);
          continue;
        }
        var_core_value_sigE154 && A(var_core_value_sigE154) != null ? var_core_value_sig2B65.insertCellData(var_core_value_sigB512, var_core_value_sig8889, var_core_value_sigE154) : (var_core_value_sig2B65.rowMergeTitleState = false, var_core_value_sig2B65.columnMergeTitleState = false, var_core_value_sig2B65 = var_core_value_sig2B65.saveTableToCache(var_core_value_sig21D8));
      }
      if (var_core_value_sig21D8.length === 0) {
        var_core_value_sigAEFB.push(...var_core_value_sig826B), var_core_value_sig826B = [];
        continue;
      }
      if (var_core_value_sig826B.length === 0) {
        var_core_value_sig826B.push(...var_core_value_sig21D8);
        continue;
      }
      let var_core_value_sigB33B = (var_core_value_sig32F8, var_core_value_sig5B67) => {
        var_core_value_sig32F8.range["startRow"] = Math.min(var_core_value_sig32F8.range["startRow"], var_core_value_sig5B67.range["startRow"]), var_core_value_sig32F8.range["endRow"] = Math.max(var_core_value_sig32F8.range["endRow"], var_core_value_sig5B67.range["endRow"]), var_core_value_sig32F8.range["startColumn"] = Math.min(var_core_value_sig32F8.range["startColumn"], var_core_value_sig5B67.range["startColumn"]), var_core_value_sig32F8.range["endColumn"] = Math.max(var_core_value_sig32F8.range["endColumn"], var_core_value_sig5B67.range["endColumn"]), var_core_value_sig5B67.rowMergeTitleCountMap["forEach"]((var_core_value_sig2259, var_core_value_sig9E2F) => {
          let var_core_value_sigD082 = var_core_value_sig32F8.rowMergeTitleCountMap["get"](var_core_value_sig9E2F) ?? [];
          var_core_value_sigD082.push(...var_core_value_sig2259), var_core_value_sig32F8.rowMergeTitleCountMap["set"](var_core_value_sig9E2F, var_core_value_sigD082);
        }), var_core_value_sig5B67.columnMergeTitleCountMap["forEach"]((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
          let var_core_value_sigF4B9 = var_core_value_sig32F8.columnMergeTitleCountMap["get"](var_core_value_sigD0A8) ?? [];
          var_core_value_sigF4B9.push(...var_core_value_sigDBB7), var_core_value_sig32F8.columnMergeTitleCountMap["set"](var_core_value_sigD0A8, var_core_value_sigF4B9);
        });
      };
      for (let var_core_value_sig1758 = 0; var_core_value_sig1758 + 1 < var_core_value_sig21D8.length; var_core_value_sig1758++) {
        let var_core_value_sig5CEE = var_core_value_sig21D8[var_core_value_sig1758],
          var_core_value_sigE92A = var_core_value_sig21D8[var_core_value_sig1758 + 1];
        var_core_value_sig5CEE.intersectWithColumns(var_core_value_sigE92A) && (var_core_value_sigB33B(var_core_value_sig5CEE, var_core_value_sigE92A), var_core_value_sig21D8.splice(var_core_value_sig1758 + 1, 1), var_core_value_sig1758--);
      }
      let var_core_value_sig24B9 = [];
      for (let var_core_value_sig4805 of var_core_value_sig21D8) {
        let var_core_value_sig362B = var_core_value_sig4805.intersectWithPreTables(var_core_value_sig826B);
        if (var_core_value_sig362B.length === 0) {
          var_core_value_sig24B9.push(var_core_value_sig4805);
          continue;
        }
        let var_core_value_sig5CA5 = var_core_value_sig4805.rowMergeTitleCountMap["get"](var_core_value_sigB512) ?? [],
          var_core_value_sigE90F = 2 ** 53 - 1,
          var_core_value_sigEFD4 = -1,
          var_core_value_sig861B = -1;
        for (let var_core_value_sigF0F9 of var_core_value_sig5CA5) {
          let var_core_value_sig8061 = var_core_value_sigF0F9.range,
            var_core_value_sig4D4C = var_core_value_sig8061.startColumn,
            var_core_value_sigC9E0 = var_core_value_sig8061.endColumn;
          var_core_value_sigE90F = Math.min(var_core_value_sigE90F, var_core_value_sig4D4C), var_core_value_sigEFD4 = Math.max(var_core_value_sigEFD4, var_core_value_sigC9E0);
        }
        var_core_value_sigEFD4 === -1 && (var_core_value_sig861B = var_core_value_sigEFD4 - var_core_value_sigE90F + 1);
        let var_core_value_sig5237 = var_core_value_sig362B[0].range,
          var_core_value_sigBB00 = var_core_value_sig5237.endColumn - var_core_value_sig5237.startColumn + 1;
        if (var_core_value_sig861B >= 0 && var_core_value_sig861B <= var_core_value_sigBB00 * 3 / 4) {
          var_core_value_sig24B9.push(var_core_value_sig4805);
          continue;
        }
        let var_core_value_sig7E54 = var_core_value_sig362B[0];
        for (let var_core_value_sig1A0F of var_core_value_sig362B.slice(1)) var_core_value_sig7E54.range["startRow"] = Math.min(var_core_value_sig7E54.range["startRow"], var_core_value_sig1A0F.range["startRow"]), var_core_value_sig7E54.range["endRow"] = Math.max(var_core_value_sig7E54.range["endRow"], var_core_value_sig1A0F.range["endRow"]), var_core_value_sig7E54.range["startColumn"] = Math.min(var_core_value_sig7E54.range["startColumn"], var_core_value_sig1A0F.range["startColumn"]), var_core_value_sig7E54.range["endColumn"] = Math.max(var_core_value_sig7E54.range["endColumn"], var_core_value_sig1A0F.range["endColumn"]);
        var_core_value_sig7E54.range["startRow"] = Math.min(var_core_value_sig7E54.range["startRow"], var_core_value_sig4805.range["startRow"]), var_core_value_sig7E54.range["endRow"] = Math.max(var_core_value_sig7E54.range["endRow"], var_core_value_sig4805.range["endRow"]), var_core_value_sig7E54.range["startColumn"] = Math.min(var_core_value_sig7E54.range["startColumn"], var_core_value_sig4805.range["startColumn"]), var_core_value_sig7E54.range["endColumn"] = Math.max(var_core_value_sig7E54.range["endColumn"], var_core_value_sig4805.range["endColumn"]), var_core_value_sig4805.rowMergeTitleCountMap["forEach"]((var_core_value_sigFBA4, var_core_value_sig4383) => {
          let var_core_value_sig186C = var_core_value_sig7E54.rowMergeTitleCountMap["get"](var_core_value_sig4383) ?? [];
          var_core_value_sig186C.push(...var_core_value_sigFBA4), var_core_value_sig7E54.rowMergeTitleCountMap["set"](var_core_value_sig4383, var_core_value_sig186C);
        }), var_core_value_sig4805.columnMergeTitleCountMap["forEach"]((var_core_value_sigD955, var_core_value_sig48BD) => {
          let var_core_value_sig429F = var_core_value_sig7E54.columnMergeTitleCountMap["get"](var_core_value_sig48BD) ?? [];
          var_core_value_sig429F.push(...var_core_value_sigD955), var_core_value_sig7E54.columnMergeTitleCountMap["set"](var_core_value_sig48BD, var_core_value_sig429F);
        }), var_core_value_sig7E54.isMatchContinue = true;
      }
      let var_core_value_sigE627 = [];
      for (let var_core_value_sigE67E of var_core_value_sig826B) !var_core_value_sigE67E.isMatchContinue && var_core_value_sigE67E.isMatchEnd || (var_core_value_sigE627.push(var_core_value_sigE67E), var_core_value_sigE67E.isMatchContinue = false, var_core_value_sigE67E.isMatchEnd = false);
      var_core_value_sigE627.push(...var_core_value_sig24B9), var_core_value_sig826B = var_core_value_sigE627;
    }
    var_core_value_sigAEFB.push(...var_core_value_sig826B);
    let var_core_value_sig00CB = 0;
    for (let var_core_value_sigF2E6 of var_core_value_sigAEFB) {
      let var_core_value_sigEF3E = var_core_value_sigF2E6.range["endRow"] - var_core_value_sigF2E6.range["startRow"] + 1;
      var_core_value_sigF2E6.range["endColumn"] - var_core_value_sigF2E6.range["startColumn"] + 1 > 0 && var_core_value_sigEF3E > 1 && var_core_value_sig00CB++;
    }
    if (var_core_value_sig00CB === 0) continue;
    let var_core_value_sig77EE = [],
      var_core_value_sig9F76 = v(6, var_core_value_sigAEFB.length),
      var_core_value_sigB008 = 0;
    for (let var_core_value_sig34C8 of var_core_value_sigAEFB) {
      let var_core_value_sig273D = var_core_value_sig34C8.range["endRow"] - var_core_value_sig34C8.range["startRow"] + 1,
        var_core_value_sig9A0D = var_core_value_sig34C8.range["endColumn"] - var_core_value_sig34C8.range["startColumn"] + 1,
        var_core_value_sigA319 = false;
      for (let var_core_value_sig2902 of var_core_value_sig39B1.getMergeData()) if (E(var_core_value_sig34C8.range, var_core_value_sig2902)) {
        var_core_value_sigA319 = true;
        break;
      }
      if (var_core_value_sigA319) continue;
      let var_core_value_sig2D58 = true;
      for (let var_core_value_sig9989 of var_core_value_sigAEFB) if (var_core_value_sig9989 !== var_core_value_sig34C8 && D(var_core_value_sig34C8, var_core_value_sig9989)) {
        var_core_value_sig2D58 = false;
        break;
      }
      var_core_value_sig2D58 && (var_core_value_sig9A0D <= 0 || var_core_value_sig273D <= 1 || (var_core_value_sig34C8.id = var_core_value_sig9F76[var_core_value_sigB008++], var_core_value_sig77EE.push(var_core_value_sig34C8)));
    }
    var_core_value_sigB785[var_core_value_sig03E1] = var_core_value_sig77EE;
  }
  return var_core_value_sigB785;
}
function T(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F) {
  let var_core_value_sigDE3D = w(var_core_value_sigC0E3, var_core_value_sig52F7);
  return M(var_core_value_sigDE3D, var_core_value_sigC0E3, var_core_value_sig52F7), B(N(var_core_value_sigDE3D, var_core_value_sigC0E3), var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F);
}
function E(var_core_value_sigF175, var_core_value_sig6A18) {
  return var_core_value_sigF175.startRow === var_core_value_sig6A18.startRow && var_core_value_sigF175.endRow === var_core_value_sig6A18.endRow && var_core_value_sigF175.startColumn === var_core_value_sig6A18.startColumn && var_core_value_sigF175.endColumn === var_core_value_sig6A18.endColumn;
}
function D(var_core_value_sig4E3D, var_core_value_sig49B0) {
  return var_core_value_sig4E3D.range["startRow"] >= var_core_value_sig49B0.range["startRow"] && var_core_value_sig4E3D.range["endRow"] <= var_core_value_sig49B0.range["endRow"] && var_core_value_sig4E3D.range["startColumn"] >= var_core_value_sig49B0.range["startColumn"] && var_core_value_sig4E3D.range["endColumn"] <= var_core_value_sig49B0.range["endColumn"];
}
function O(var_core_value_sig2547) {
  return "" + q(var_core_value_sig2547.startColumn) + (var_core_value_sig2547.startRow + 1) + ":" + q(var_core_value_sig2547.endColumn) + (var_core_value_sig2547.endRow + 1);
}
function k(var_core_value_sigBCA9) {
  if (var_core_value_sigBCA9 !== null) {
    if (var_core_value_sigBCA9 != null && var_core_value_sigBCA9.p) {
      let var_core_value_sig8721 = var_core_value_sigBCA9 == null ? undefined : var_core_value_sigBCA9.p["body"];
      if (var_core_value_sig8721 == null) return;
      let var_core_value_sig08BA = var_core_value_sig8721.dataStream,
        var_core_value_sigDBB5 = e.BuildTextUtils["transform"].getPlainText(var_core_value_sig08BA),
        var_core_value_sigCFAC = var_core_value_sig8721.customRanges;
      if (var_core_value_sigCFAC && var_core_value_sigCFAC.length > 0) {
        var var_core_value_sig4CDF;
        let var_core_value_sigB744 = var_core_value_sigCFAC[0],
          var_core_value_sigEAE2 = (var_core_value_sig4CDF = var_core_value_sigB744.properties) == null ? undefined : var_core_value_sig4CDF.url;
        if (!var_core_value_sigEAE2) return var_core_value_sigDBB5;
        let var_core_value_sigE68A = typeof var_core_value_sigB744.startIndex == "number" ? var_core_value_sigB744.startIndex : 0,
          var_core_value_sig3E68 = typeof var_core_value_sigB744.endIndex == "number" ? var_core_value_sigB744.endIndex + 1 : var_core_value_sigE68A + 1;
        return var_core_value_sigE68A === 0 && var_core_value_sig3E68 === 0 ? var_core_value_sig3E68 = 1 : var_core_value_sig3E68 <= var_core_value_sigE68A && (var_core_value_sig3E68 = var_core_value_sigE68A + 1), "[" + var_core_value_sig08BA.slice(var_core_value_sigE68A, var_core_value_sig3E68) + "](" + var_core_value_sigEAE2 + ")";
      }
      return var_core_value_sigDBB5;
    }
    if ((var_core_value_sigBCA9 == null ? undefined : var_core_value_sigBCA9.v) != null) return var_core_value_sigBCA9.v;
  }
}
function A(var_core_value_sig3F79) {
  let var_core_value_sig880E = k(var_core_value_sig3F79);
  if (var_core_value_sig880E != null) return String(var_core_value_sig880E);
}
function j(var_core_value_sigC9ED, var_core_value_sigB57B, var_core_value_sig780B) {
  let var_core_value_sig7D1B = var_core_value_sig780B.getCell(var_core_value_sigC9ED, var_core_value_sigB57B);
  if (var_core_value_sig7D1B != null) {
    let var_core_value_sig210D = A(var_core_value_sig7D1B);
    if (var_core_value_sig210D != null && var_core_value_sig210D.length > 0) return var_core_value_sig210D;
  }
  let var_core_value_sig7BE0 = x.get(var_core_value_sig780B),
    var_core_value_sig7D40 = var_core_value_sig7BE0 == null ? undefined : var_core_value_sig7BE0.mergeRTree,
    var_core_value_sig6C7E = var_core_value_sig7BE0 == null ? undefined : var_core_value_sig7BE0.mergeRangeMap,
    var_core_value_sig68BE = var_core_value_sig780B.getUnitId(),
    var_core_value_sig04C6 = var_core_value_sig780B.getSheetId(),
    var_core_value_sigCA05 = {
      range: {
        startRow: var_core_value_sigC9ED,
        endRow: var_core_value_sigC9ED,
        startColumn: var_core_value_sigB57B,
        endColumn: var_core_value_sigB57B
      },
      unitId: var_core_value_sig68BE,
      sheetId: var_core_value_sig04C6
    },
    var_core_value_sig2F2B = (var_core_value_sig7D40 == null ? undefined : var_core_value_sig7D40.bulkSearch([var_core_value_sigCA05])) || new Map();
  if (var_core_value_sig2F2B.size === 0 || !var_core_value_sig6C7E) return null;
  let var_core_value_sig70AF = var_core_value_sig2F2B.keys().next().value,
    var_core_value_sigD04E = var_core_value_sig6C7E.get(var_core_value_sig70AF);
  if (!var_core_value_sigD04E) return null;
  let var_core_value_sigB99B = var_core_value_sig780B.getCell(var_core_value_sigD04E.range["startRow"], var_core_value_sigD04E.range["startColumn"]);
  return var_core_value_sigB99B == null ? null : A(var_core_value_sigB99B);
}
function M(var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69) {
  let var_core_value_sig6884 = var_core_value_sig7BAF.getSheets(),
    var_core_value_sig066E = var_core_value_sig8F69.get(t.TableManager),
    var_core_value_sig9B0D = var_core_value_sig7BAF.getUnitId();
  for (let var_core_value_sigB4B4 of var_core_value_sig6884) {
    let var_core_value_sig237B = var_core_value_sigB4B4.getSheetId(),
      var_core_value_sigFEAB = var_core_value_sig066E.getTablesBySubunitId(var_core_value_sig9B0D, var_core_value_sig237B);
    if (!var_core_value_sigFEAB) continue;
    let var_core_value_sigE347 = var_core_value_sigFEAB.map(var_core_value_sigF4C5 => var_core_value_sigF4C5.toJSON());
    for (let var_core_value_sig5410 of var_core_value_sigE347) {
      let {
          startRow: var_core_value_sig223F,
          endRow: var_core_value_sigD749,
          startColumn: var_core_value_sigCFFA,
          endColumn: var_core_value_sig58C1
        } = var_core_value_sig5410.range,
        var_core_value_sig5090 = new y({
          id: var_core_value_sig5410.id,
          sheetId: var_core_value_sig237B,
          range: {
            startRow: var_core_value_sig223F,
            endRow: var_core_value_sigD749,
            startColumn: var_core_value_sigCFFA,
            endColumn: var_core_value_sig58C1
          },
          name: "",
          description: "",
          rowTitleCount: 0,
          mergeRowTitleCount: 0,
          startStatisticRowCount: 0,
          endStatisticRowCount: 0,
          rowMergeTitleCountMap: new Map(),
          rowMergeTitleState: false,
          columnMergeTitleState: false,
          columnMergeTitleCountMap: new Map(),
          isMatchEnd: false,
          isMatchContinue: false,
          isTimeSeries: false,
          isTestTable: false,
          isUpdateTable: true,
          columns: []
        });
      var_core_value_sig5A75[var_core_value_sig237B] || (var_core_value_sig5A75[var_core_value_sig237B] = []), var_core_value_sig5A75[var_core_value_sig237B].push(var_core_value_sig5090);
    }
  }
}
function N(var_core_value_sig3D2C, var_core_value_sigC56D) {
  let var_core_value_sig3A17 = {};
  for (let [var_core_value_sigD407, var_core_value_sig63F3] of Object.entries(var_core_value_sig3D2C)) {
    var var_core_value_sig938F;
    let var_core_value_sig3C5B = var_core_value_sig63F3,
      var_core_value_sig200B = false,
      var_core_value_sig3863 = var_core_value_sigC56D.getSheetBySheetId(var_core_value_sigD407);
    if (var_core_value_sig3863) {
      for (let var_core_value_sigC368 = 0; var_core_value_sigC368 < var_core_value_sig3C5B.length; var_core_value_sigC368++) {
        let var_core_value_sig698E = var_core_value_sig3C5B[var_core_value_sigC368],
          {
            startRow: var_core_value_sig2809,
            endRow: var_core_value_sig2DAB,
            startColumn: var_core_value_sig877E,
            endColumn: var_core_value_sig20C8
          } = var_core_value_sig698E.range,
          var_core_value_sigE9A7 = F(var_core_value_sig698E, var_core_value_sig3863, var_core_value_sigC56D),
          var_core_value_sigBECE = P(var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig698E),
          var_core_value_sig1B22 = 1,
          var_core_value_sig7F72 = var_core_value_sig2809 + var_core_value_sigBECE,
          var_core_value_sig7B2A = 0,
          var_core_value_sig06CD = 0;
        for (let var_core_value_sig9A8D = var_core_value_sig877E; var_core_value_sig9A8D <= var_core_value_sig20C8; var_core_value_sig9A8D++) {
          let var_core_value_sigF62A = var_core_value_sig3863.getCell(var_core_value_sig7F72, var_core_value_sig9A8D);
          if (!var_core_value_sigF62A) continue;
          let var_core_value_sig8178 = A(var_core_value_sigF62A);
          var_core_value_sig8178 != null && (var_core_value_sig8178 !== "" && var_core_value_sig06CD++, K(var_core_value_sig8178) && var_core_value_sig7B2A++);
        }
        if (var_core_value_sig06CD > 0 && var_core_value_sig7B2A / Math.max(var_core_value_sig06CD, 1) > 0.03 && (var_core_value_sig1B22 = 0), var_core_value_sig698E.mergeRowTitleCount = var_core_value_sigBECE, var_core_value_sig698E.rowTitleCount = var_core_value_sig1B22 + var_core_value_sigBECE, var_core_value_sig698E.range["endRow"] - var_core_value_sig698E.range["startRow"] + 1 - var_core_value_sig698E.rowTitleCount <= 1) {
          console.warn("skip small table, idx:" + var_core_value_sigC368 + ",\x20rangeName:" + O(var_core_value_sig698E.range)), var_core_value_sig3C5B.splice(var_core_value_sigC368, 1), var_core_value_sigC368--, var_core_value_sig200B = true;
          continue;
        }
        let var_core_value_sigA5F1 = new Map(),
          var_core_value_sig97A2 = 0,
          var_core_value_sig07E9 = v(4, var_core_value_sig20C8 - var_core_value_sig877E + 1);
        for (let var_core_value_sigC259 = var_core_value_sig877E; var_core_value_sigC259 <= var_core_value_sig20C8; var_core_value_sigC259++) {
          let var_core_value_sigE9ED = "",
            var_core_value_sigB577 = new Set(),
            var_core_value_sig9572 = false,
            var_core_value_sigD873 = var_core_value_sig2809 + var_core_value_sig698E.rowTitleCount - 1,
            var_core_value_sigA12B = var_core_value_sig2809;
          var_core_value_sigE9A7 !== "" && (var_core_value_sigA12B = var_core_value_sig2809 + 1);
          for (let var_core_value_sig76BA = var_core_value_sigA12B; var_core_value_sig76BA <= var_core_value_sigD873; var_core_value_sig76BA++) {
            let var_core_value_sig3D7D = j(var_core_value_sig76BA, var_core_value_sigC259, var_core_value_sig3863);
            var_core_value_sig3D7D != null && (var_core_value_sig76BA === var_core_value_sigD873 && (var_core_value_sigE9ED = var_core_value_sig3D7D), var_core_value_sigB577.add(var_core_value_sig3D7D));
          }
          let var_core_value_sigF230 = [...var_core_value_sigB577].join(","),
            var_core_value_sig09B8 = var_core_value_sigF230;
          var_core_value_sigA5F1.has(var_core_value_sig09B8) ? var_core_value_sig9572 = true : var_core_value_sigA5F1.set(var_core_value_sig09B8, true);
          let var_core_value_sig6F91 = var_core_value_sigD873 + 1,
            var_core_value_sigF9C7 = var_core_value_sigD873 + 20,
            var_core_value_sig8895 = 0,
            var_core_value_sigC80B = false,
            var_core_value_sig284F = false;
          if (var_core_value_sigF9C7 > var_core_value_sig2DAB && (var_core_value_sigF9C7 = var_core_value_sig2DAB), var_core_value_sig6F91 < var_core_value_sig2DAB) {
            let var_core_value_sigFBFA = "";
            for (let var_core_value_sig27E5 = var_core_value_sig6F91; var_core_value_sig27E5 <= var_core_value_sigF9C7; var_core_value_sig27E5++) {
              let var_core_value_sig7524 = var_core_value_sig3863.getCell(var_core_value_sig27E5, var_core_value_sigC259);
              if (!var_core_value_sig7524) continue;
              let var_core_value_sig2AD8 = A(var_core_value_sig7524);
              var_core_value_sig2AD8 != null && (K(var_core_value_sig2AD8) || (var_core_value_sigFBFA += var_core_value_sig2AD8), W(var_core_value_sig2AD8) && var_core_value_sig8895++);
            }
            var_core_value_sig8895 > Math.floor((var_core_value_sigF9C7 - var_core_value_sig6F91 + 1) / 2) && (var_core_value_sig284F = true), G(var_core_value_sigFBFA) / Math.max(var_core_value_sigF9C7 - var_core_value_sig6F91 + 1, 1) > 15 && !var_core_value_sig284F && (var_core_value_sigC80B = true);
          }
          var_core_value_sig698E.columns["push"]({
            id: var_core_value_sig07E9[var_core_value_sig97A2++],
            Name: var_core_value_sigE9ED,
            Type: "",
            Description: var_core_value_sigF230,
            isCoded: false,
            isMeasure: true,
            isOpinionText: false,
            isBigText: var_core_value_sigC80B,
            isLink: var_core_value_sig284F,
            isTitleRepeat: var_core_value_sig9572,
            isUnique: false,
            links: []
          });
        }
        I(var_core_value_sig698E, var_core_value_sigC56D);
      }
      var_core_value_sig200B && (var_core_value_sig3D2C[var_core_value_sigD407] = var_core_value_sig3C5B), var_core_value_sig3C5B.length === 0 && delete var_core_value_sig3D2C[var_core_value_sigD407], var_core_value_sig3A17[var_core_value_sigD407] = ((var_core_value_sig938F = var_core_value_sig3D2C[var_core_value_sigD407]) == null ? undefined : var_core_value_sig938F.length) ?? 0;
    }
  }
  return var_core_value_sig3D2C;
}
function P(var_core_value_sigD948, var_core_value_sigBE5E, var_core_value_sig0281) {
  function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig09CF(var_core_value_sig6A71) {
    if (var_core_value_sig6A71.length === 0) return 0;
    var_core_value_sig6A71.sort((var_core_value_sigC97C, var_core_value_sigC4B1) => var_core_value_sigC97C[0] - var_core_value_sigC4B1[0]);
    let var_core_value_sig3BF6 = 0,
      var_core_value_sig38CE = var_core_value_sig6A71[0][0],
      var_core_value_sig62B7 = var_core_value_sig6A71[0][1];
    for (let var_core_value_sig1BD9 = 1; var_core_value_sig1BD9 < var_core_value_sig6A71.length; var_core_value_sig1BD9++) {
      let [var_core_value_sig492F, var_core_value_sig8EA0] = var_core_value_sig6A71[var_core_value_sig1BD9];
      var_core_value_sig492F <= var_core_value_sig62B7 + 1 ? var_core_value_sig62B7 = Math.max(var_core_value_sig62B7, var_core_value_sig8EA0) : (var_core_value_sig3BF6 += var_core_value_sig62B7 - var_core_value_sig38CE + 1, var_core_value_sig38CE = var_core_value_sig492F, var_core_value_sig62B7 = var_core_value_sig8EA0);
    }
    return var_core_value_sig3BF6 += var_core_value_sig62B7 - var_core_value_sig38CE + 1, var_core_value_sig3BF6;
  }
  let var_core_value_sig281C = var_core_value_sig0281.range["startColumn"],
    var_core_value_sig3C92 = var_core_value_sig0281.range["endColumn"],
    var_core_value_sigB16B = var_core_value_sig3C92 - var_core_value_sig281C + 1,
    var_core_value_sig585D = var_core_value_sigD948 - 1,
    var_core_value_sigE722 = var_core_value_sigD948 - 1,
    var_core_value_sig062A = false;
  for (let var_core_value_sig37A8 = var_core_value_sigD948; var_core_value_sig37A8 <= var_core_value_sigBE5E && var_core_value_sig37A8 - var_core_value_sigD948 < 100; var_core_value_sig37A8++) {
    let var_core_value_sigE43E = [],
      var_core_value_sigA937 = var_core_value_sig0281.rowMergeTitleCountMap["get"](var_core_value_sig37A8) ?? [];
    for (let var_core_value_sigA6F6 of var_core_value_sigA937) {
      let var_core_value_sigAD56 = var_core_value_sigA6F6.range["startColumn"],
        var_core_value_sigDB4A = var_core_value_sigA6F6.range["endColumn"],
        var_core_value_sig6418 = Math.max(var_core_value_sigAD56, var_core_value_sig281C),
        var_core_value_sig1896 = Math.min(var_core_value_sigDB4A, var_core_value_sig3C92);
      var_core_value_sig6418 <= var_core_value_sig1896 && var_core_value_sigE43E.push([var_core_value_sig6418, var_core_value_sig1896]);
    }
    var_core_value_sig0281.columnMergeTitleCountMap["forEach"](var_core_value_sigCDDA => {
      for (let var_core_value_sig0285 of var_core_value_sigCDDA) {
        let var_core_value_sig4F59 = var_core_value_sig0285.range["startRow"],
          var_core_value_sigF564 = var_core_value_sig0285.range["endRow"];
        if (var_core_value_sig4F59 <= var_core_value_sig37A8 && var_core_value_sig37A8 <= var_core_value_sigF564) {
          let var_core_value_sig9C9F = var_core_value_sig0285.range["startColumn"],
            var_core_value_sigFDEA = var_core_value_sig0285.range["endColumn"],
            var_core_value_sig86D0 = Math.max(var_core_value_sig9C9F, var_core_value_sig281C),
            var_core_value_sig4CD2 = Math.min(var_core_value_sigFDEA, var_core_value_sig3C92);
          var_core_value_sig86D0 <= var_core_value_sig4CD2 && var_core_value_sigE43E.push([var_core_value_sig86D0, var_core_value_sig4CD2]);
        }
      }
    });
    let var_core_value_sigCAD5 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig09CF(var_core_value_sigE43E),
      var_core_value_sigE503 = var_core_value_sigCAD5 / Math.max(var_core_value_sigB16B, 1);
    var_core_value_sigE43E.length > 0 && (var_core_value_sig585D = var_core_value_sig37A8), var_core_value_sigCAD5 > 0 && var_core_value_sigE503 >= 0.75 && !var_core_value_sig062A ? var_core_value_sigE722 = var_core_value_sig37A8 : var_core_value_sigE43E.length > 0 && (var_core_value_sig062A = true);
  }
  return var_core_value_sig585D === var_core_value_sigBE5E || var_core_value_sig585D - var_core_value_sigD948 === 100 ? var_core_value_sigE722 - var_core_value_sigD948 + 1 : var_core_value_sig585D - var_core_value_sigD948 + 1;
}
function F(var_core_value_sig050A, var_core_value_sig8B32, var_core_value_sig870F) {
  if (var_core_value_sig050A.description += var_core_value_sig8B32.getName() + ",\x20" + var_core_value_sig870F.name, var_core_value_sig050A.name && var_core_value_sig050A.name !== "") return var_core_value_sig050A.name;
  let var_core_value_sigB683 = var_core_value_sig050A.range["startRow"],
    var_core_value_sig26EC = var_core_value_sig050A.range["startColumn"],
    var_core_value_sigEEDB = var_core_value_sig050A.range["endColumn"],
    var_core_value_sig36E7 = var_core_value_sig050A.rowMergeTitleCountMap["get"](var_core_value_sigB683);
  if (var_core_value_sig36E7 && var_core_value_sig36E7.length > 0) for (let var_core_value_sigA90D of var_core_value_sig36E7) {
    let var_core_value_sig48DD = var_core_value_sigA90D.range,
      var_core_value_sig5E6A = var_core_value_sig48DD.startColumn,
      var_core_value_sigB7FC = var_core_value_sig48DD.endColumn;
    if (var_core_value_sig5E6A <= var_core_value_sig26EC + 3 && var_core_value_sigB7FC >= var_core_value_sigEEDB - 3) {
      let var_core_value_sigE243 = var_core_value_sig8B32.getCell(var_core_value_sigB683, var_core_value_sig5E6A);
      if (!var_core_value_sigE243) return "";
      let var_core_value_sig74A8 = A(var_core_value_sigE243);
      return var_core_value_sig74A8 == null || var_core_value_sig74A8 === "" ? "" : (var_core_value_sig050A.name = var_core_value_sig74A8, var_core_value_sig74A8);
    }
  }
  return "";
}
function I(var_core_value_sig6A78, var_core_value_sigF7EF) {
  let var_core_value_sig27F9 = {};
  var_core_value_sigF7EF.getStyles().each(var_core_value_sig7A3C => {
    let [var_core_value_sig0511, var_core_value_sig1F44] = var_core_value_sig7A3C;
    return !var_core_value_sig0511 || !var_core_value_sig1F44 || var_core_value_sig1F44.n && typeof var_core_value_sig1F44.n["pattern"] == "string" && /[YyMDd]/["test"](var_core_value_sig1F44.n["pattern"]) && (var_core_value_sig27F9[var_core_value_sig0511] = true), true;
  });
  let var_core_value_sig393E = var_core_value_sig6A78.range["startRow"],
    var_core_value_sigB609 = var_core_value_sig6A78.range["endRow"],
    var_core_value_sig390D = var_core_value_sig6A78.rowTitleCount,
    var_core_value_sigC928 = var_core_value_sig6A78.sheetId,
    var_core_value_sig39B7 = var_core_value_sigF7EF.getSheetBySheetId(var_core_value_sigC928);
  if (!var_core_value_sig39B7) return;
  let var_core_value_sig18E0 = var_core_value_sigB609 - var_core_value_sig393E + 1 - var_core_value_sig390D;
  if (var_core_value_sig18E0 <= 1) {
    console.warn("skip small table");
    return;
  }
  let var_core_value_sigE161 = [];
  for (let var_core_value_sigCB04 = 0; var_core_value_sigCB04 < var_core_value_sig6A78.range["endColumn"] - var_core_value_sig6A78.range["startColumn"] + 1; var_core_value_sigCB04++) var_core_value_sigE161.push(new _(var_core_value_sig27F9));
  let var_core_value_sigBDEE = Math.log10(Math.max(var_core_value_sig18E0, 1));
  for (let var_core_value_sig947E = 0;; var_core_value_sig947E++) {
    let var_core_value_sig9CD9 = var_core_value_sig947E,
      var_core_value_sigFD0C = Math.floor(var_core_value_sig9CD9 + 0.00001 * var_core_value_sig9CD9 ** 2.7 * var_core_value_sigBDEE * var_core_value_sigBDEE) + var_core_value_sig393E + var_core_value_sig390D;
    if (var_core_value_sigFD0C > var_core_value_sigB609) break;
    for (let var_core_value_sig21B2 = var_core_value_sig6A78.range["startColumn"]; var_core_value_sig21B2 <= var_core_value_sig6A78.range["endColumn"]; var_core_value_sig21B2++) {
      let var_core_value_sig777D = var_core_value_sig39B7.getCell(var_core_value_sigFD0C, var_core_value_sig21B2);
      var_core_value_sig777D && var_core_value_sigE161[var_core_value_sig21B2 - var_core_value_sig6A78.range["startColumn"]].Match(var_core_value_sig777D);
    }
  }
  let var_core_value_sig1F40 = [];
  for (let var_core_value_sig4545 = 0; var_core_value_sig4545 < var_core_value_sig6A78.columns["length"]; var_core_value_sig4545++) {
    let [var_core_value_sig849B, var_core_value_sig5F1A] = var_core_value_sigE161[var_core_value_sig4545].Best();
    var_core_value_sig6A78.columns[var_core_value_sig4545].Type = var_core_value_sig849B, var_core_value_sig1F40.push(var_core_value_sig849B);
  }
}
function L(var_core_value_sig3FC7) {
  let var_core_value_sig1E1B = [];
  for (let var_core_value_sigF39A of var_core_value_sig3FC7.links) var_core_value_sig1E1B.push({
    tableId: var_core_value_sigF39A.tableId,
    columnId: var_core_value_sigF39A.columnId,
    linkType: var_core_value_sigF39A.linkType
  });
  return var_core_value_sig1E1B;
}
function R(var_core_value_sig3B10) {
  return var_core_value_sig3B10.rowTitleCount === 1;
}
function z(var_core_value_sig89E6, var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46, var_core_value_sigCC93) {
  let var_core_value_sig5964 = var_core_value_sig3D46.get(t.TableManager),
    var_core_value_sig808B = var_core_value_sig4743.getUnitId(),
    var_core_value_sig2A26 = var_core_value_sig89E6.sheetId;
  if (var_core_value_sig5964.getTablesBySubunitId(var_core_value_sig808B, var_core_value_sig2A26)) {
    for (let var_core_value_sigB455 of var_core_value_sigEB6A) if (var_core_value_sigB455.id === var_core_value_sig89E6.id) {
      var_core_value_sigB455.name = var_core_value_sig89E6.name, var_core_value_sigB455.meta = {}, var_core_value_sigB455.meta["description"] = var_core_value_sig89E6.description, var_core_value_sigB455.meta["rowTitleCount"] = var_core_value_sig89E6.rowTitleCount, var_core_value_sigB455.meta["mergeRowTitleCount"] = var_core_value_sig89E6.mergeRowTitleCount, var_core_value_sigB455.meta["isTimeSeries"] = var_core_value_sig89E6.isTimeSeries;
      for (let var_core_value_sig3F4C = 0; var_core_value_sig3F4C < var_core_value_sig89E6.columns["length"]; var_core_value_sig3F4C++) {
        let var_core_value_sig8CFA = var_core_value_sig89E6.columns[var_core_value_sig3F4C],
          var_core_value_sig2E11 = var_core_value_sigB455.columns[var_core_value_sig3F4C];
        var_core_value_sig2E11.displayName = var_core_value_sig8CFA.Name, var_core_value_sig2E11.dataType = var_core_value_sig8CFA.Type, var_core_value_sig2E11.meta = {}, var_core_value_sig2E11.meta["description"] = var_core_value_sig8CFA.Description, var_core_value_sig2E11.meta["isCoded"] = var_core_value_sig8CFA.isCoded, var_core_value_sig2E11.meta["isMeasure"] = var_core_value_sig8CFA.isMeasure, var_core_value_sig2E11.meta["isOpinionText"] = var_core_value_sig8CFA.isOpinionText, var_core_value_sig2E11.meta["isBigText"] = var_core_value_sig8CFA.isBigText, var_core_value_sig2E11.meta["isLink"] = var_core_value_sig8CFA.isLink, var_core_value_sig2E11.meta["isTitleRepeat"] = var_core_value_sig8CFA.isTitleRepeat, var_core_value_sig2E11.meta["isUnique"] = var_core_value_sig8CFA.isUnique, var_core_value_sig2E11.meta["links"] = L(var_core_value_sig8CFA);
      }
      H(var_core_value_sigB455, var_core_value_sig2A26, var_core_value_sig4743, var_core_value_sigCC93);
    }
    x.clear();
  }
}
function B(var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5) {
  let var_core_value_sig7100 = var_core_value_sig8FD9.get(t.TableManager),
    var_core_value_sigA19A = var_core_value_sigEA92.getUnitId(),
    var_core_value_sigD3F5 = {};
  for (let [var_core_value_sigF79C, var_core_value_sig2E54] of Object.entries(var_core_value_sig1179)) {
    let var_core_value_sig5241 = var_core_value_sig7100.getTablesBySubunitId(var_core_value_sigA19A, var_core_value_sigF79C),
      var_core_value_sigC6E5 = (var_core_value_sig5241 == null ? undefined : var_core_value_sig5241.map(var_core_value_sigDE08 => var_core_value_sigDE08.toJSON())) || [];
    for (let var_core_value_sigACCB of var_core_value_sig2E54) {
      if (var_core_value_sigACCB.isUpdateTable) {
        z(var_core_value_sigACCB, var_core_value_sigEA92, var_core_value_sigC6E5, var_core_value_sig8FD9, var_core_value_sig1AE5);
        continue;
      }
      let var_core_value_sigD65A = {
        id: var_core_value_sigACCB.id,
        range: {
          startRow: var_core_value_sigACCB.range["startRow"] + var_core_value_sigACCB.mergeRowTitleCount,
          endRow: var_core_value_sigACCB.range["endRow"],
          startColumn: var_core_value_sigACCB.range["startColumn"],
          endColumn: var_core_value_sigACCB.range["endColumn"]
        },
        name: var_core_value_sigACCB.name,
        meta: {},
        options: {
          showHeader: R(var_core_value_sigACCB),
          showFooter: false
        },
        columns: [],
        filters: {}
      };
      var_core_value_sigD65A.meta["description"] = var_core_value_sigACCB.description, var_core_value_sigD65A.meta["rowTitleCount"] = var_core_value_sigACCB.rowTitleCount, var_core_value_sigD65A.meta["mergeRowTitleCount"] = var_core_value_sigACCB.mergeRowTitleCount, var_core_value_sigD65A.meta["isTimeSeries"] = var_core_value_sigACCB.isTimeSeries;
      let var_core_value_sig5A13 = var_core_value_sigACCB.range["startColumn"];
      for (let var_core_value_sig5B69 = 0; var_core_value_sig5B69 < var_core_value_sigACCB.columns["length"]; var_core_value_sig5B69++) {
        let var_core_value_sig48CA = var_core_value_sigACCB.columns[var_core_value_sig5B69],
          var_core_value_sig50AF = {
            id: var_core_value_sig48CA.id,
            displayName: var_core_value_sig48CA.Name || "column_" + q(var_core_value_sig5A13 + var_core_value_sig5B69),
            dataType: var_core_value_sig48CA.Type,
            meta: {},
            formula: "",
            style: {}
          };
        var_core_value_sig50AF.meta["description"] = var_core_value_sig48CA.Description, var_core_value_sig50AF.meta["isCoded"] = var_core_value_sig48CA.isCoded, var_core_value_sig50AF.meta["isMeasure"] = var_core_value_sig48CA.isMeasure, var_core_value_sig50AF.meta["isOpinionText"] = var_core_value_sig48CA.isOpinionText, var_core_value_sig50AF.meta["isBigText"] = var_core_value_sig48CA.isBigText, var_core_value_sig50AF.meta["isLink"] = var_core_value_sig48CA.isLink, var_core_value_sig50AF.meta["isTitleRepeat"] = var_core_value_sig48CA.isTitleRepeat, var_core_value_sig50AF.meta["isUnique"] = var_core_value_sig48CA.isUnique, var_core_value_sig50AF.meta["links"] = L(var_core_value_sig48CA), var_core_value_sigD65A.columns["push"](var_core_value_sig50AF);
      }
      H(var_core_value_sigD65A, var_core_value_sigF79C, var_core_value_sigEA92, var_core_value_sig1AE5), var_core_value_sigC6E5.push(var_core_value_sigD65A);
    }
    var_core_value_sigD3F5[var_core_value_sigF79C] = var_core_value_sigC6E5;
  }
  for (let var_core_value_sig7658 of Object.keys(var_core_value_sig1179)) var_core_value_sig1179[var_core_value_sig7658].forEach(var_core_value_sigCEFB => {
    var_core_value_sigCEFB.dispose();
  });
  return var_core_value_sigD3F5;
}
function V(var_core_value_sig3082, var_core_value_sigF5D1, var_core_value_sig8775 = 5) {
  if (!Array.isArray(var_core_value_sig3082) || var_core_value_sig3082.length === 0) return [];
  let var_core_value_sig481B = Math.min(var_core_value_sigF5D1, var_core_value_sig3082.length),
    var_core_value_sig13D7 = Math.min(var_core_value_sig481B + var_core_value_sig8775, var_core_value_sig3082.length);
  return var_core_value_sig3082.slice(var_core_value_sig481B, var_core_value_sig13D7);
}
function H(var_core_value_sig90C0, var_core_value_sigF1B2, var_core_value_sigC2BB, var_core_value_sigD9DB) {
  let var_core_value_sigA363 = var_core_value_sigC2BB.getSheetBySheetId(var_core_value_sigF1B2);
  if (!var_core_value_sigA363) return;
  let var_core_value_sigFBA5 = var_core_value_sig90C0.range,
    var_core_value_sigAC47 = U(var_core_value_sigA363, var_core_value_sigFBA5);
  var_core_value_sigD9DB === "sample" ? var_core_value_sig90C0.data = JSON.stringify(V(var_core_value_sigAC47, 1, 5)) : var_core_value_sigD9DB === "all" && (var_core_value_sig90C0.data = JSON.stringify(V(var_core_value_sigAC47, 1, var_core_value_sigAC47.length)));
}
function U(var_core_value_sigA06F, var_core_value_sig770E) {
  let {
      startRow: var_core_value_sig4654,
      endRow: var_core_value_sigB26B,
      startColumn: var_core_value_sig019B,
      endColumn: var_core_value_sigC6BC
    } = var_core_value_sig770E,
    var_core_value_sig8EC2 = [],
    var_core_value_sigA8C3 = x.get(var_core_value_sigA06F),
    var_core_value_sig5276 = var_core_value_sigA8C3 == null ? undefined : var_core_value_sigA8C3.mergeRTree,
    var_core_value_sig031B = var_core_value_sigA8C3 == null ? undefined : var_core_value_sigA8C3.mergeRangeMap,
    var_core_value_sig9DC0 = var_core_value_sigA06F.getUnitId(),
    var_core_value_sig95F0 = var_core_value_sigA06F.getSheetId();
  for (let var_core_value_sigDCF5 = var_core_value_sig4654; var_core_value_sigDCF5 <= var_core_value_sigB26B; var_core_value_sigDCF5++) {
    let var_core_value_sig1537 = [];
    for (let var_core_value_sig7F33 = var_core_value_sig019B; var_core_value_sig7F33 <= var_core_value_sigC6BC; var_core_value_sig7F33++) {
      let var_core_value_sigF593 = var_core_value_sigA06F.getCell(var_core_value_sigDCF5, var_core_value_sig7F33),
        var_core_value_sig3607 = var_core_value_sigF593 ? k(var_core_value_sigF593) : undefined;
      if (var_core_value_sig3607 == null || var_core_value_sig3607 === "") {
        let var_core_value_sigB098 = {
            range: {
              startRow: var_core_value_sigDCF5,
              endRow: var_core_value_sigDCF5,
              startColumn: var_core_value_sig7F33,
              endColumn: var_core_value_sig7F33
            },
            unitId: var_core_value_sig9DC0,
            sheetId: var_core_value_sig95F0
          },
          var_core_value_sigCE71 = (var_core_value_sig5276 == null ? undefined : var_core_value_sig5276.bulkSearch([var_core_value_sigB098])) || new Map();
        if (var_core_value_sigCE71.size > 0 && var_core_value_sig031B) {
          let var_core_value_sigA942 = var_core_value_sigCE71.keys().next().value,
            var_core_value_sigA621 = var_core_value_sig031B.get(var_core_value_sigA942);
          if (!var_core_value_sigA621) continue;
          let var_core_value_sigBBFF = var_core_value_sigA06F.getCell(var_core_value_sigA621.range["startRow"], var_core_value_sigA621.range["startColumn"]);
          var_core_value_sigBBFF && (var_core_value_sig3607 = k(var_core_value_sigBBFF));
        }
      }
      var_core_value_sig1537.push(var_core_value_sig3607 ?? "");
    }
    var_core_value_sig8EC2.push(var_core_value_sig1537);
  }
  return var_core_value_sig8EC2;
}
function W(var_core_value_sig9CCB) {
  return /https?:\/\/|www\./i.test(var_core_value_sig9CCB);
}
function G(var_core_value_sigE718) {
  return Array.from(var_core_value_sigE718).length;
}
function K(var_core_value_sigAEC8) {
  return var_core_value_sigAEC8 ? /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(var_core_value_sigAEC8.trim()) : false;
}
function q(var_core_value_sigB977) {
  let var_core_value_sig2949 = "",
    var_core_value_sig308A = var_core_value_sigB977 + 1;
  for (; var_core_value_sig308A > 0;) {
    let var_core_value_sigE4C6 = (var_core_value_sig308A - 1) % 26;
    var_core_value_sig2949 = String.fromCharCode(65 + var_core_value_sigE4C6) + var_core_value_sig2949, var_core_value_sig308A = Math.floor((var_core_value_sig308A - 1) / 26);
  }
  return var_core_value_sig2949;
}
function J(var_core_value_sig528D, var_core_value_sigA309) {
  return function (var_core_value_sigC786, var_core_value_sigC0D9) {
    var_core_value_sigA309(var_core_value_sigC786, var_core_value_sigC0D9, var_core_value_sig528D);
  };
}
function Y(var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A) {
  var var_core_value_sig14CB = arguments.length,
    var_core_value_sigFDEE = var_core_value_sig14CB < 3 ? var_core_value_sig26BB : var_core_value_sig218A === null ? var_core_value_sig218A = Object.getOwnPropertyDescriptor(var_core_value_sig26BB, var_core_value_sig19B4) : var_core_value_sig218A,
    var_core_value_sigA676;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigFDEE = Reflect.decorate(var_core_value_sig9E20, var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sig218A);else {
    for (var var_core_value_sigC27E = var_core_value_sig9E20.length - 1; var_core_value_sigC27E >= 0; var_core_value_sigC27E--) (var_core_value_sigA676 = var_core_value_sig9E20[var_core_value_sigC27E]) && (var_core_value_sigFDEE = (var_core_value_sig14CB < 3 ? var_core_value_sigA676(var_core_value_sigFDEE) : var_core_value_sig14CB > 3 ? var_core_value_sigA676(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sigFDEE) : var_core_value_sigA676(var_core_value_sig26BB, var_core_value_sig19B4)) || var_core_value_sigFDEE);
  }
  return var_core_value_sig14CB > 3 && var_core_value_sigFDEE && Object.defineProperty(var_core_value_sig26BB, var_core_value_sig19B4, var_core_value_sigFDEE), var_core_value_sigFDEE;
}
let X = class extends e.Disposable {
  constructor(var_core_value_sigF0511) {
    super(), this._injector = var_core_value_sigF0511;
  }
  getAllTableJson(var_core_value_sig5825, var_core_value_sig4EB7) {
    return T(var_core_value_sig5825, this._injector, var_core_value_sig4EB7);
  }
};
X = Y([J(0, (0, e.Inject)(e.Injector))], X);
var Z = "@univerjs-pro/range-preprocess",
  te = "1.0.0-insiders.20260907-70fc579";
const Q = {};
let $ = class extends e.Plugin {
  constructor(var_core_value_sig73AF = Q, var_core_value_sig548A, var_core_value_sigE026) {
    super(), this._config = var_core_value_sig73AF, this._injector = var_core_value_sig548A, this._configService = var_core_value_sigE026;
    let {
      ...var_core_value_sig339E
    } = (0, e.merge)({}, Q, this._config);
    this._configService["setConfig"]("range-preprocess.config", var_core_value_sig339E);
  }
  onStarting() {
    let var_core_value_sig7550 = [[X]];
    (0, e.registerDependencies)(this._injector, var_core_value_sig7550);
  }
  onReady() {}
};
o($, "pluginName", "UNIVER_RANGE_PREPROCESS_PLUGIN"), o($, "packageName", Z), o($, "version", te), $ = Y([(0, e.DependentOn)(n.UniverLicensePlugin), J(1, (0, e.Inject)(e.Injector)), J(2, e.IConfigService)], $), Object.defineProperty(exports, "RangePreprocessController", {
  enumerable: true,
  get: function () {
    return X;
  }
}), Object.defineProperty(exports, "UniverRangePreprocessPlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
});
