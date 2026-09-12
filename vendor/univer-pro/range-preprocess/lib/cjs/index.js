Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core");
require("@univerjs/sheets-filter");
let t = require("@univerjs/sheets-table"),
  n = require("@univerjs-pro/license");
function r(_0x155eb9) {
  "@babel/helpers - typeof";
  return (
    (r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2e93ae) {
            return typeof _0x2e93ae;
          }
        : function (_0x249090) {
            return _0x249090 &&
              typeof Symbol == "function" &&
              _0x249090.constructor === Symbol &&
              _0x249090 !== Symbol.prototype
              ? "symbol"
              : typeof _0x249090;
          }),
    r(_0x155eb9)
  );
}
function i(_0x2cca10, _0x17512f) {
  if (r(_0x2cca10) != "object" || !_0x2cca10) return _0x2cca10;
  var _0x144aa7 = _0x2cca10[Symbol.toPrimitive];
  if (_0x144aa7 !== undefined) {
    var _0x174ab5 = _0x144aa7.call(_0x2cca10, _0x17512f || "default");
    if (r(_0x174ab5) != "object") return _0x174ab5;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x17512f === "string" ? String : Number)(_0x2cca10);
}
function a(_0x5e2a94) {
  var _0x5469c8 = i(_0x5e2a94, "string");
  return r(_0x5469c8) == "symbol" ? _0x5469c8 : _0x5469c8 + "";
}
function o(_0x2011df, _0x5c8c87, _0x1469ac) {
  return (
    (_0x5c8c87 = a(_0x5c8c87)) in _0x2011df
      ? Object.defineProperty(_0x2011df, _0x5c8c87, {
          value: _0x1469ac,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2011df[_0x5c8c87] = _0x1469ac),
    _0x2011df
  );
}
function s(_0x44cc32) {
  return _0x44cc32.v == null ? "" : String(_0x44cc32.v).trim();
}
function c(_0x18cbfe) {
  return /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(_0x18cbfe);
}
function l(_0x323f71, _0x539fef) {
  let _0x44247f = {
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
    "2006-01-02\x2015:04:05": /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2}$/,
  }[_0x539fef];
  if (!_0x44247f || !_0x44247f.test(_0x323f71)) return false;
  let _0x530726 = _0x323f71
      .replace(/\D+/g, "\x20")
      .trim()
      .split(/\s+/)
      .map(Number),
    _0x74285f = 0,
    _0x21c46a = 1,
    _0x2bfa79 = 1,
    _0x88b172 = 0,
    _0x10494a = 0,
    _0x158e69 = 0;
  switch (_0x539fef) {
    case "2006-01-02":
    case "2006-1-2":
    case "2006/01/02":
    case "2006/1/2":
      [_0x74285f, _0x21c46a, _0x2bfa79] = _0x530726;
      break;
    case "2006年1月2日":
      [_0x74285f, _0x21c46a, _0x2bfa79] = _0x530726;
      break;
    case "02-01-2006":
    case "02/01/2006":
    case "02.01.2006":
      [_0x2bfa79, _0x21c46a, _0x74285f] = _0x530726;
      break;
    case "01-02-2006":
    case "01/02/2006":
      [_0x21c46a, _0x2bfa79, _0x74285f] = _0x530726;
      break;
    case "20060102": {
      let _0x2d7260 = _0x323f71;
      ((_0x74285f = +_0x2d7260.slice(0, 4)),
        (_0x21c46a = +_0x2d7260.slice(4, 6)),
        (_0x2bfa79 = +_0x2d7260.slice(6, 8)));
      break;
    }
    case "2006-01-02T15:04:05":
    case "2006-01-02 15:04:05":
      [_0x74285f, _0x21c46a, _0x2bfa79, _0x88b172, _0x10494a, _0x158e69] =
        _0x530726;
      break;
    default:
      return true;
  }
  if (
    _0x21c46a < 1 ||
    _0x21c46a > 12 ||
    _0x2bfa79 < 1 ||
    _0x2bfa79 > 31 ||
    _0x88b172 < 0 ||
    _0x88b172 > 23 ||
    _0x10494a < 0 ||
    _0x10494a > 59 ||
    _0x158e69 < 0 ||
    _0x158e69 > 59
  )
    return false;
  let _0x18c3ec = new Date(
    _0x74285f,
    _0x21c46a - 1,
    _0x2bfa79,
    _0x88b172,
    _0x10494a,
    _0x158e69,
  );
  return (
    _0x18c3ec.getFullYear() === _0x74285f &&
    _0x18c3ec.getMonth() === _0x21c46a - 1 &&
    _0x18c3ec.getDate() === _0x2bfa79
  );
}
function u(_0x40fb10) {
  return Number.isFinite(_0x40fb10) && _0x40fb10 >= 1 && _0x40fb10 <= 80000;
}
function d(_0x2de7d9) {
  switch (_0x2de7d9) {
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
      (o(this, "valid", 0), o(this, "invalid", 0), o(this, "confidence", 0));
    }
  },
  p = class extends f {
    constructor(_0x235d39) {
      (super(),
        o(this, "timeStampStyles", undefined),
        o(this, "dt", undefined),
        o(this, "layout", undefined),
        o(this, "needConvert", undefined),
        (this.dt = _0x235d39.dt),
        (this.layout = _0x235d39.layout),
        (this.needConvert = !!_0x235d39.needConvert));
    }
    Match(_0x56e3a2) {
      if (_0x56e3a2.t === e.CellValueType["STRING"]) {
        let _0x3036ab = s(_0x56e3a2);
        if (!_0x3036ab) return;
        l(_0x3036ab, this.layout) ? (this.valid += 2) : this.invalid++;
      }
    }
    Calc() {
      let _0x412870 =
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        _0x4ab3b5 = {
          Charset: this.dt,
          Confidence: _0x412870,
          debugInfo: this.layout,
        };
      return (this.needConvert && (_0x4ab3b5.Layout = this.layout), _0x4ab3b5);
    }
  },
  m = class extends f {
    constructor(_0x146900) {
      (super(),
        o(this, "dateStyles", undefined),
        o(this, "timeStampStyles", undefined),
        o(this, "dt", undefined),
        o(this, "layout", undefined),
        o(this, "needConvert", undefined),
        (this.dateStyles = _0x146900.dateStyles || {}),
        (this.dt = _0x146900.dt),
        (this.layout = _0x146900.layout),
        (this.needConvert = !!_0x146900.needConvert));
    }
    Match(_0x4a444b) {
      if (_0x4a444b.t === e.CellValueType["NUMBER"]) {
        if (_0x4a444b.s && this.dateStyles[_0x4a444b.s]) {
          this.valid += 2;
          return;
        }
        let _0x539693 = s(_0x4a444b);
        if (!_0x539693) return;
        if (this.layout === "excel" && u(Number(_0x539693))) {
          this.valid += 2;
          return;
        }
        l(_0x539693, this.layout) ? (this.valid += 2) : this.invalid++;
      }
    }
    Calc() {
      let _0x467f73 =
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        _0x33abe3 = {
          Charset: this.dt,
          Confidence: _0x467f73,
          debugInfo: this.layout,
        };
      return (this.needConvert && (_0x33abe3.Layout = this.layout), _0x33abe3);
    }
  },
  h = class extends f {
    Match(_0x257718) {
      if (_0x257718.t === e.CellValueType["NUMBER"]) this.valid += 1;
      else {
        let _0x3cd098 = s(_0x257718);
        if (!_0x3cd098) return;
        c(_0x3cd098) ? (this.valid += 1) : this.invalid++;
      }
    }
    Calc() {
      return {
        Charset: 1,
        Confidence:
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        debugInfo: "number",
      };
    }
  },
  g = class extends f {
    Match(_0x40314e) {
      _0x40314e.t === e.CellValueType["BOOLEAN"]
        ? (this.valid += 1)
        : this.invalid++;
    }
    Calc() {
      return {
        Charset: 5,
        Confidence:
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        debugInfo: "number",
      };
    }
  },
  _ = class {
    constructor(_0x9b9476) {
      (o(this, "recognizers", undefined),
        o(this, "dateStyles", undefined),
        (this.dateStyles = _0x9b9476 || {}),
        (this.recognizers = [
          new p({ dt: 2, layout: "2006-01-02" }),
          new p({ dt: 2, layout: "2006-1-2" }),
          new p({ dt: 2, layout: "2006/01/02" }),
          new p({ dt: 2, layout: "2006/1/2" }),
          new p({ dt: 2, layout: "2006年1月2日", needConvert: true }),
          new p({ dt: 2, layout: "02-01-2006", needConvert: true }),
          new p({ dt: 2, layout: "02/01/2006", needConvert: true }),
          new p({ dt: 2, layout: "02.01.2006", needConvert: true }),
          new p({ dt: 2, layout: "01-02-2006", needConvert: true }),
          new p({ dt: 2, layout: "01/02/2006", needConvert: true }),
          new p({ dt: 2, layout: "2 January, 2006", needConvert: true }),
          new p({ dt: 2, layout: "2 January,2006", needConvert: true }),
          new p({ dt: 2, layout: "2 Jan., 2006", needConvert: true }),
          new p({ dt: 2, layout: "January\x202,\x202006", needConvert: true }),
          new p({ dt: 2, layout: "January 2,2006", needConvert: true }),
          new p({ dt: 2, layout: "Jan. 2, 2006", needConvert: true }),
          new p({ dt: 2, layout: "20060102", needConvert: true }),
          new m({
            dateStyles: this.dateStyles,
            dt: 2,
            layout: "20060102",
            needConvert: true,
          }),
          new p({ dt: 4, layout: "2006-01-02T15:04:05" }),
          new p({ dt: 4, layout: "2006-01-02 15:04:05" }),
          new m({
            dateStyles: this.dateStyles,
            dt: 3,
            layout: "excel",
            needConvert: true,
          }),
          new h(),
          new g(),
        ]));
    }
    Match(_0x47e3fd) {
      for (let _0x22045e of this.recognizers) _0x22045e.Match(_0x47e3fd);
    }
    Best() {
      let _0x311e1c = this.recognizers["map"]((_0x50a306) => _0x50a306.Calc());
      if (
        (_0x311e1c.sort(
          (_0x4f710d, _0x1edd0e) => _0x1edd0e.Confidence - _0x4f710d.Confidence,
        ),
        _0x311e1c.length === 0 || _0x311e1c[0].Confidence < 50)
      )
        return ["string", null];
      let _0x192042 = _0x311e1c[0];
      return [d(_0x192042.Charset), _0x192042];
    }
  };
function v(_0x46a1b2, _0x216812) {
  let _0x3cc1fa = _0x46a1b2,
    _0x1b8761 = _0x216812;
  (_0x3cc1fa <= 0 && (_0x3cc1fa = 6),
    _0x1b8761 <= 0 && (_0x1b8761 = 10),
    (_0x1b8761 *= 2));
  let _0x5d5668 = [];
  for (let _0x407eb9 = 0; _0x407eb9 < _0x1b8761; _0x407eb9++)
    _0x5d5668.push((0, e.generateRandomId)(_0x3cc1fa));
  let _0x3c546c = new Map();
  for (let _0x365398 of _0x5d5668) {
    let _0x2610c8 = _0x365398.toLowerCase();
    _0x3c546c.has(_0x2610c8) || _0x3c546c.set(_0x2610c8, _0x365398);
  }
  return Array.from(_0x3c546c.values());
}
var y = class t {
  constructor(_0x3d52d4) {
    (o(this, "id", undefined),
      o(this, "sheetId", undefined),
      o(this, "range", undefined),
      o(this, "name", undefined),
      o(this, "description", undefined),
      o(this, "rowTitleCount", undefined),
      o(this, "mergeRowTitleCount", undefined),
      o(this, "startStatisticRowCount", undefined),
      o(this, "endStatisticRowCount", undefined),
      o(this, "rowMergeTitleCountMap", undefined),
      o(this, "rowMergeTitleState", undefined),
      o(this, "columnMergeTitleState", undefined),
      o(this, "columnMergeTitleCountMap", undefined),
      o(this, "isMatchEnd", undefined),
      o(this, "isMatchContinue", undefined),
      o(this, "isTimeSeries", undefined),
      o(this, "isTestTable", undefined),
      o(this, "isUpdateTable", undefined),
      o(this, "columns", undefined),
      (this.id = (_0x3d52d4 == null ? undefined : _0x3d52d4.id) ?? ""),
      (this.sheetId =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.sheetId) ??
        (0, e.generateRandomId)()),
      (this.range = (_0x3d52d4 == null ? undefined : _0x3d52d4.range) ?? {
        startRow: -1,
        endRow: -1,
        startColumn: -1,
        endColumn: -1,
      }),
      (this.name = (_0x3d52d4 == null ? undefined : _0x3d52d4.name) ?? ""),
      (this.description =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.description) ?? ""),
      (this.rowTitleCount =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.rowTitleCount) ?? 0),
      (this.mergeRowTitleCount =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.mergeRowTitleCount) ?? 0),
      (this.startStatisticRowCount =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.startStatisticRowCount) ??
        0),
      (this.endStatisticRowCount =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.endStatisticRowCount) ?? 0),
      (this.rowMergeTitleCountMap =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.rowMergeTitleCountMap) ??
        new Map()),
      (this.rowMergeTitleState =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.rowMergeTitleState) ??
        false),
      (this.columnMergeTitleState =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.columnMergeTitleState) ??
        false),
      (this.columnMergeTitleCountMap =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.columnMergeTitleCountMap) ??
        new Map()),
      (this.isMatchEnd =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.isMatchEnd) ?? false),
      (this.isMatchContinue =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.isMatchContinue) ?? false),
      (this.isTimeSeries =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.isTimeSeries) ?? false),
      (this.isTestTable =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.isTestTable) ?? false),
      (this.isUpdateTable =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.isUpdateTable) ?? false),
      (this.columns =
        (_0x3d52d4 == null ? undefined : _0x3d52d4.columns) ?? []));
  }
  _isRowContinuous(_0x22e80b, _0x280bf4) {
    return _0x280bf4 - _0x22e80b === 1 || _0x280bf4 === _0x22e80b;
  }
  intersectWithPreTables(_0x3bdcc8) {
    let _0x1f3a53 = [];
    for (let _0x2d380b of _0x3bdcc8)
      this.range["endColumn"] < _0x2d380b.range["startColumn"] ||
        this.range["startColumn"] > _0x2d380b.range["endColumn"] ||
        (this._isRowContinuous(
          _0x2d380b.range["endRow"],
          this.range["startRow"],
        ) &&
          _0x1f3a53.push(_0x2d380b));
    return _0x1f3a53;
  }
  intersectWithColumns(_0x83db72) {
    return (
      _0x83db72.range["endRow"] === this.range["startRow"] &&
      this.range["endColumn"] + 1 === _0x83db72.range["startColumn"]
    );
  }
  saveTableToCache(_0x1bcc08) {
    return this.range["startColumn"] === -1
      ? this
      : (_0x1bcc08.push(this),
        new t({
          sheetId: this.sheetId,
          range: {
            startRow: this.range["startRow"],
            endRow: this.range["endRow"],
            startColumn: -1,
            endColumn: -1,
          },
        }));
  }
  insertCellData(_0x79a0af, _0x4ed0ef, _0x107186, _0x53881c) {
    (this.range["startColumn"] === -1 &&
      (this.range["startColumn"] = _0x4ed0ef),
      (this.range["endColumn"] = _0x4ed0ef),
      _0x53881c != null &&
        (this.range["endColumn"] = Math.max(
          _0x53881c,
          this.range["endColumn"],
        )));
  }
  dispose() {
    (this.rowMergeTitleCountMap["clear"](),
      this.columnMergeTitleCountMap["clear"](),
      (this.columns = []));
  }
};
function b(_0x1d5725, _0x3dd55a) {
  let {
    startRow: _0xaf3edb,
    startColumn: _0x2a8bfe,
    endRow: _0x5e1b49,
    endColumn: _0x5623a2,
  } = _0x3dd55a;
  return (
    _0x1d5725 +
    ":" +
    _0xaf3edb +
    "," +
    _0x2a8bfe +
    "-" +
    _0x5e1b49 +
    "," +
    _0x5623a2
  );
}
const x = new Map();
function S(_0x5e2a0c, _0x253a71) {
  let _0xf30515 = new e["RTree"](false),
    _0x4f1a2b = _0x253a71.getSheetId(),
    _0x12828c = new Map(),
    _0x764c3c = _0x253a71.getMergeData() ?? [];
  x.clear();
  for (let _0x156471 of _0x764c3c) {
    let _0x199c6a = b("merge", _0x156471),
      _0xf3a134 = {
        unitId: _0x5e2a0c,
        sheetId: _0x4f1a2b,
        range: _0x156471,
        id: _0x199c6a,
      };
    (_0xf30515.insert(_0xf3a134), _0x12828c.set(_0x199c6a, _0xf3a134));
  }
  return (
    x.set(_0x253a71, { mergeRTree: _0xf30515, mergeRangeMap: _0x12828c }),
    { mergeRTree: _0xf30515, mergeRangeMap: _0x12828c }
  );
}
function ee(_0x3abff1, _0x2e45a8, _0x270cdf) {
  let _0x596778 = new e["RTree"](false),
    _0x17ac01 = _0x270cdf.get(t.TableManager).getTableList(_0x3abff1);
  if (_0x17ac01 && Array.isArray(_0x17ac01))
    for (let _0x2f9672 of _0x17ac01) {
      if (!(_0x2f9672 != null && _0x2f9672.range)) continue;
      let _0x24600f = _0x2f9672.range,
        _0x25f742 = {
          unitId: _0x3abff1,
          sheetId: _0x2e45a8,
          range: _0x24600f,
          id: b("table", _0x24600f),
        };
      _0x596778.insert(_0x25f742);
    }
  return _0x596778;
}
function C(_0x59cf66, _0x14001f, _0x5ef08c) {
  let _0x8ff19d = _0x59cf66.get(_0x14001f);
  _0x8ff19d ? _0x8ff19d.push(_0x5ef08c) : _0x59cf66.set(_0x14001f, [_0x5ef08c]);
}
function w(_0x220652, _0x52bb71) {
  let _0x520625 = _0x220652.getSheets(),
    _0x26501d = {},
    _0x5e08a4 = _0x220652.getUnitId();
  for (let _0x45a458 of _0x520625) {
    let _0x291a6a = _0x45a458.getSheetId(),
      _0x859227 = _0x45a458.getRowCount(),
      _0x2d7c8a = _0x45a458.getColumnCount(),
      { mergeRTree: _0x12ab01, mergeRangeMap: _0x2b19e2 } = S(
        _0x5e08a4,
        _0x45a458,
      ),
      _0x3bd99c = ee(_0x5e08a4, _0x291a6a, _0x52bb71),
      _0x2c2b64 = [],
      _0x1b3f9d = [],
      _0x3e783e = _0x45a458.getCellMatrix();
    for (let _0x4e3691 = 0; _0x4e3691 < _0x859227; _0x4e3691++) {
      let _0x213f75 = [],
        _0xadaf1c = new y({
          sheetId: _0x291a6a,
          range: {
            startRow: _0x4e3691,
            endRow: _0x4e3691,
            startColumn: -1,
            endColumn: -1,
          },
        }),
        _0x10f9d4 = new Map();
      if (_0x3e783e.getRow(_0x4e3691) == null) {
        (_0x2c2b64.push(..._0x1b3f9d), (_0x1b3f9d = []));
        continue;
      }
      for (let _0x5f071c = 0; _0x5f071c <= _0x2d7c8a; _0x5f071c++) {
        let _0x110d8b = _0x45a458.getCell(_0x4e3691, _0x5f071c),
          _0x8d42a8 = {
            range: {
              startRow: _0x4e3691,
              startColumn: _0x5f071c,
              endRow: _0x4e3691,
              endColumn: _0x5f071c,
            },
            unitId: _0x5e08a4,
            sheetId: _0x291a6a,
          };
        if (_0x3bd99c.bulkSearch([_0x8d42a8]).size > 0) {
          _0xadaf1c = _0xadaf1c.saveTableToCache(_0x213f75);
          continue;
        }
        let _0x5d85a3 = _0x12ab01.bulkSearch([_0x8d42a8]);
        if (_0x5d85a3.size > 0) {
          let _0x4db473 = _0xadaf1c.intersectWithPreTables(_0x1b3f9d),
            _0xe08173 = _0x5d85a3.keys().next().value,
            _0x5acbef = _0x2b19e2.get(_0xe08173);
          if (!_0x5acbef) continue;
          let _0x1fc15f = {
              startRow: _0x5acbef.range["startRow"],
              endRow: _0x5acbef.range["endRow"],
              startColumn: _0x5acbef.range["startColumn"],
              endColumn: _0x5acbef.range["endColumn"],
            },
            _0x207238 = _0x45a458.getCell(
              _0x1fc15f.startRow,
              _0x1fc15f.startColumn,
            );
          if (
            _0x207238 &&
            (_0x207238.p != null ||
              (_0x207238.v != null && String(_0x207238.v).length > 0))
          ) {
            _0xadaf1c.insertCellData(
              _0x4e3691,
              _0x5f071c,
              _0x110d8b,
              _0x1fc15f.endColumn,
            );
            for (
              let _0x7d5dbb = _0x1fc15f.startColumn;
              _0x7d5dbb <= _0x1fc15f.endColumn;
              _0x7d5dbb++
            )
              _0x10f9d4.set(_0x7d5dbb, true);
          } else _0xadaf1c = _0xadaf1c.saveTableToCache(_0x213f75);
          let _0x330ab2 = _0x1fc15f.endRow - _0x1fc15f.startRow,
            _0xe0cc0f = _0x1fc15f.endColumn - _0x1fc15f.startColumn;
          if (_0x4db473.length === 1) {
            if (
              (_0x330ab2 > 0 &&
                C(_0xadaf1c.columnMergeTitleCountMap, _0x5f071c, _0x5acbef),
              _0xe0cc0f > 0)
            ) {
              let _0xd44fda =
                _0xadaf1c.rowMergeTitleCountMap["get"](_0x4e3691) ?? [];
              (_0xd44fda.push(_0x5acbef),
                _0xadaf1c.rowMergeTitleCountMap["set"](_0x4e3691, _0xd44fda));
            }
          } else {
            if (
              (_0x330ab2 > 0 &&
                ((_0xadaf1c.columnMergeTitleState = true),
                C(_0xadaf1c.columnMergeTitleCountMap, _0x5f071c, _0x5acbef)),
              _0xe0cc0f > 0)
            ) {
              _0xadaf1c.rowMergeTitleState = true;
              let _0x2b1b00 =
                _0xadaf1c.rowMergeTitleCountMap["get"](_0x4e3691) ?? [];
              (_0x2b1b00.push(_0x5acbef),
                _0xadaf1c.rowMergeTitleCountMap["set"](_0x4e3691, _0x2b1b00));
            }
          }
          continue;
        }
        if ((!_0x110d8b || A(_0x110d8b) == null) && !_0x10f9d4.get(_0x5f071c)) {
          _0xadaf1c = _0xadaf1c.saveTableToCache(_0x213f75);
          continue;
        }
        _0x110d8b && A(_0x110d8b) != null
          ? _0xadaf1c.insertCellData(_0x4e3691, _0x5f071c, _0x110d8b)
          : ((_0xadaf1c.rowMergeTitleState = false),
            (_0xadaf1c.columnMergeTitleState = false),
            (_0xadaf1c = _0xadaf1c.saveTableToCache(_0x213f75)));
      }
      if (_0x213f75.length === 0) {
        (_0x2c2b64.push(..._0x1b3f9d), (_0x1b3f9d = []));
        continue;
      }
      if (_0x1b3f9d.length === 0) {
        _0x1b3f9d.push(..._0x213f75);
        continue;
      }
      let _0x2d99b0 = (_0x5a6667, _0x185050) => {
        ((_0x5a6667.range["startRow"] = Math.min(
          _0x5a6667.range["startRow"],
          _0x185050.range["startRow"],
        )),
          (_0x5a6667.range["endRow"] = Math.max(
            _0x5a6667.range["endRow"],
            _0x185050.range["endRow"],
          )),
          (_0x5a6667.range["startColumn"] = Math.min(
            _0x5a6667.range["startColumn"],
            _0x185050.range["startColumn"],
          )),
          (_0x5a6667.range["endColumn"] = Math.max(
            _0x5a6667.range["endColumn"],
            _0x185050.range["endColumn"],
          )),
          _0x185050.rowMergeTitleCountMap["forEach"]((_0x1e411a, _0x81fe90) => {
            let _0x3bda06 =
              _0x5a6667.rowMergeTitleCountMap["get"](_0x81fe90) ?? [];
            (_0x3bda06.push(..._0x1e411a),
              _0x5a6667.rowMergeTitleCountMap["set"](_0x81fe90, _0x3bda06));
          }),
          _0x185050.columnMergeTitleCountMap["forEach"](
            (_0x232c99, _0x5359de) => {
              let _0x15c69c =
                _0x5a6667.columnMergeTitleCountMap["get"](_0x5359de) ?? [];
              (_0x15c69c.push(..._0x232c99),
                _0x5a6667.columnMergeTitleCountMap["set"](
                  _0x5359de,
                  _0x15c69c,
                ));
            },
          ));
      };
      for (let _0x35df75 = 0; _0x35df75 + 1 < _0x213f75.length; _0x35df75++) {
        let _0x501035 = _0x213f75[_0x35df75],
          _0x5cc63a = _0x213f75[_0x35df75 + 1];
        _0x501035.intersectWithColumns(_0x5cc63a) &&
          (_0x2d99b0(_0x501035, _0x5cc63a),
          _0x213f75.splice(_0x35df75 + 1, 1),
          _0x35df75--);
      }
      let _0x2cf5bb = [];
      for (let _0x11b6c4 of _0x213f75) {
        let _0x3ca99e = _0x11b6c4.intersectWithPreTables(_0x1b3f9d);
        if (_0x3ca99e.length === 0) {
          _0x2cf5bb.push(_0x11b6c4);
          continue;
        }
        let _0x365d30 = _0x11b6c4.rowMergeTitleCountMap["get"](_0x4e3691) ?? [],
          _0x201152 = 2 ** 53 - 1,
          _0x286f0a = -1,
          _0x5479a7 = -1;
        for (let _0x123da6 of _0x365d30) {
          let _0x291d6a = _0x123da6.range,
            _0x1219f7 = _0x291d6a.startColumn,
            _0x24bbde = _0x291d6a.endColumn;
          ((_0x201152 = Math.min(_0x201152, _0x1219f7)),
            (_0x286f0a = Math.max(_0x286f0a, _0x24bbde)));
        }
        _0x286f0a === -1 && (_0x5479a7 = _0x286f0a - _0x201152 + 1);
        let _0xf44088 = _0x3ca99e[0].range,
          _0x138a5d = _0xf44088.endColumn - _0xf44088.startColumn + 1;
        if (_0x5479a7 >= 0 && _0x5479a7 <= (_0x138a5d * 3) / 4) {
          _0x2cf5bb.push(_0x11b6c4);
          continue;
        }
        let _0xf6c8d4 = _0x3ca99e[0];
        for (let _0x4618f5 of _0x3ca99e.slice(1))
          ((_0xf6c8d4.range["startRow"] = Math.min(
            _0xf6c8d4.range["startRow"],
            _0x4618f5.range["startRow"],
          )),
            (_0xf6c8d4.range["endRow"] = Math.max(
              _0xf6c8d4.range["endRow"],
              _0x4618f5.range["endRow"],
            )),
            (_0xf6c8d4.range["startColumn"] = Math.min(
              _0xf6c8d4.range["startColumn"],
              _0x4618f5.range["startColumn"],
            )),
            (_0xf6c8d4.range["endColumn"] = Math.max(
              _0xf6c8d4.range["endColumn"],
              _0x4618f5.range["endColumn"],
            )));
        ((_0xf6c8d4.range["startRow"] = Math.min(
          _0xf6c8d4.range["startRow"],
          _0x11b6c4.range["startRow"],
        )),
          (_0xf6c8d4.range["endRow"] = Math.max(
            _0xf6c8d4.range["endRow"],
            _0x11b6c4.range["endRow"],
          )),
          (_0xf6c8d4.range["startColumn"] = Math.min(
            _0xf6c8d4.range["startColumn"],
            _0x11b6c4.range["startColumn"],
          )),
          (_0xf6c8d4.range["endColumn"] = Math.max(
            _0xf6c8d4.range["endColumn"],
            _0x11b6c4.range["endColumn"],
          )),
          _0x11b6c4.rowMergeTitleCountMap["forEach"]((_0x4d2b8c, _0x3eb789) => {
            let _0x187557 =
              _0xf6c8d4.rowMergeTitleCountMap["get"](_0x3eb789) ?? [];
            (_0x187557.push(..._0x4d2b8c),
              _0xf6c8d4.rowMergeTitleCountMap["set"](_0x3eb789, _0x187557));
          }),
          _0x11b6c4.columnMergeTitleCountMap["forEach"](
            (_0x565137, _0x5240d4) => {
              let _0x12a89c =
                _0xf6c8d4.columnMergeTitleCountMap["get"](_0x5240d4) ?? [];
              (_0x12a89c.push(..._0x565137),
                _0xf6c8d4.columnMergeTitleCountMap["set"](
                  _0x5240d4,
                  _0x12a89c,
                ));
            },
          ),
          (_0xf6c8d4.isMatchContinue = true));
      }
      let _0x168643 = [];
      for (let _0x3116bb of _0x1b3f9d)
        (!_0x3116bb.isMatchContinue && _0x3116bb.isMatchEnd) ||
          (_0x168643.push(_0x3116bb),
          (_0x3116bb.isMatchContinue = false),
          (_0x3116bb.isMatchEnd = false));
      (_0x168643.push(..._0x2cf5bb), (_0x1b3f9d = _0x168643));
    }
    _0x2c2b64.push(..._0x1b3f9d);
    let _0x488863 = 0;
    for (let _0x2fd1f1 of _0x2c2b64) {
      let _0x43bcd5 =
        _0x2fd1f1.range["endRow"] - _0x2fd1f1.range["startRow"] + 1;
      _0x2fd1f1.range["endColumn"] - _0x2fd1f1.range["startColumn"] + 1 > 0 &&
        _0x43bcd5 > 1 &&
        _0x488863++;
    }
    if (_0x488863 === 0) continue;
    let _0x17297a = [],
      _0x3e25fc = v(6, _0x2c2b64.length),
      _0x35b01f = 0;
    for (let _0x9b3c20 of _0x2c2b64) {
      let _0x45b7d9 =
          _0x9b3c20.range["endRow"] - _0x9b3c20.range["startRow"] + 1,
        _0x2ec10a =
          _0x9b3c20.range["endColumn"] - _0x9b3c20.range["startColumn"] + 1,
        _0xb17a81 = false;
      for (let _0x3329b1 of _0x45a458.getMergeData())
        if (E(_0x9b3c20.range, _0x3329b1)) {
          _0xb17a81 = true;
          break;
        }
      if (_0xb17a81) continue;
      let _0x23deee = true;
      for (let _0x44bd36 of _0x2c2b64)
        if (_0x44bd36 !== _0x9b3c20 && D(_0x9b3c20, _0x44bd36)) {
          _0x23deee = false;
          break;
        }
      _0x23deee &&
        (_0x2ec10a <= 0 ||
          _0x45b7d9 <= 1 ||
          ((_0x9b3c20.id = _0x3e25fc[_0x35b01f++]), _0x17297a.push(_0x9b3c20)));
    }
    _0x26501d[_0x291a6a] = _0x17297a;
  }
  return _0x26501d;
}
function T(_0x4a1a14, _0x4662fa, _0x557b21) {
  let _0x37a457 = w(_0x4a1a14, _0x4662fa);
  return (
    M(_0x37a457, _0x4a1a14, _0x4662fa),
    B(N(_0x37a457, _0x4a1a14), _0x4a1a14, _0x4662fa, _0x557b21)
  );
}
function E(_0x193865, _0x438106) {
  return (
    _0x193865.startRow === _0x438106.startRow &&
    _0x193865.endRow === _0x438106.endRow &&
    _0x193865.startColumn === _0x438106.startColumn &&
    _0x193865.endColumn === _0x438106.endColumn
  );
}
function D(_0x164609, _0x133376) {
  return (
    _0x164609.range["startRow"] >= _0x133376.range["startRow"] &&
    _0x164609.range["endRow"] <= _0x133376.range["endRow"] &&
    _0x164609.range["startColumn"] >= _0x133376.range["startColumn"] &&
    _0x164609.range["endColumn"] <= _0x133376.range["endColumn"]
  );
}
function O(_0xba4ca6) {
  return (
    "" +
    q(_0xba4ca6.startColumn) +
    (_0xba4ca6.startRow + 1) +
    ":" +
    q(_0xba4ca6.endColumn) +
    (_0xba4ca6.endRow + 1)
  );
}
function k(_0x476ebb) {
  if (_0x476ebb !== null) {
    if (_0x476ebb != null && _0x476ebb.p) {
      let _0x591651 = _0x476ebb == null ? undefined : _0x476ebb.p["body"];
      if (_0x591651 == null) return;
      let _0x156cc8 = _0x591651.dataStream,
        _0x5ea8e8 = e.BuildTextUtils["transform"].getPlainText(_0x156cc8),
        _0x2c31c7 = _0x591651.customRanges;
      if (_0x2c31c7 && _0x2c31c7.length > 0) {
        var _0x11a0d3;
        let _0x544622 = _0x2c31c7[0],
          _0x105cdb =
            (_0x11a0d3 = _0x544622.properties) == null
              ? undefined
              : _0x11a0d3.url;
        if (!_0x105cdb) return _0x5ea8e8;
        let _0x22117f =
            typeof _0x544622.startIndex == "number" ? _0x544622.startIndex : 0,
          _0x381565 =
            typeof _0x544622.endIndex == "number"
              ? _0x544622.endIndex + 1
              : _0x22117f + 1;
        return (
          _0x22117f === 0 && _0x381565 === 0
            ? (_0x381565 = 1)
            : _0x381565 <= _0x22117f && (_0x381565 = _0x22117f + 1),
          "[" + _0x156cc8.slice(_0x22117f, _0x381565) + "](" + _0x105cdb + ")"
        );
      }
      return _0x5ea8e8;
    }
    if ((_0x476ebb == null ? undefined : _0x476ebb.v) != null)
      return _0x476ebb.v;
  }
}
function A(_0xb61c09) {
  let _0x56deaf = k(_0xb61c09);
  if (_0x56deaf != null) return String(_0x56deaf);
}
function j(_0x29aa06, _0x2041d4, _0x335da4) {
  let _0x95998f = _0x335da4.getCell(_0x29aa06, _0x2041d4);
  if (_0x95998f != null) {
    let _0x377f7b = A(_0x95998f);
    if (_0x377f7b != null && _0x377f7b.length > 0) return _0x377f7b;
  }
  let _0x7de7c8 = x.get(_0x335da4),
    _0x4178b1 = _0x7de7c8 == null ? undefined : _0x7de7c8.mergeRTree,
    _0x5b1262 = _0x7de7c8 == null ? undefined : _0x7de7c8.mergeRangeMap,
    _0x2f4f95 = _0x335da4.getUnitId(),
    _0x17d9ab = _0x335da4.getSheetId(),
    _0x27604b = {
      range: {
        startRow: _0x29aa06,
        endRow: _0x29aa06,
        startColumn: _0x2041d4,
        endColumn: _0x2041d4,
      },
      unitId: _0x2f4f95,
      sheetId: _0x17d9ab,
    },
    _0x38fa0b =
      (_0x4178b1 == null ? undefined : _0x4178b1.bulkSearch([_0x27604b])) ||
      new Map();
  if (_0x38fa0b.size === 0 || !_0x5b1262) return null;
  let _0x436343 = _0x38fa0b.keys().next().value,
    _0x201d1a = _0x5b1262.get(_0x436343);
  if (!_0x201d1a) return null;
  let _0x2d3362 = _0x335da4.getCell(
    _0x201d1a.range["startRow"],
    _0x201d1a.range["startColumn"],
  );
  return _0x2d3362 == null ? null : A(_0x2d3362);
}
function M(_0x1a9b33, _0x3fb2f6, _0x216284) {
  let _0x43c186 = _0x3fb2f6.getSheets(),
    _0x2ce4d8 = _0x216284.get(t.TableManager),
    _0x40f991 = _0x3fb2f6.getUnitId();
  for (let _0x3223cb of _0x43c186) {
    let _0x4540f4 = _0x3223cb.getSheetId(),
      _0x17a09c = _0x2ce4d8.getTablesBySubunitId(_0x40f991, _0x4540f4);
    if (!_0x17a09c) continue;
    let _0x1c67d9 = _0x17a09c.map((_0x597aa3) => _0x597aa3.toJSON());
    for (let _0x48ae94 of _0x1c67d9) {
      let {
          startRow: _0x39ecb9,
          endRow: _0x13f8a5,
          startColumn: _0x506112,
          endColumn: _0x253880,
        } = _0x48ae94.range,
        _0x202ecc = new y({
          id: _0x48ae94.id,
          sheetId: _0x4540f4,
          range: {
            startRow: _0x39ecb9,
            endRow: _0x13f8a5,
            startColumn: _0x506112,
            endColumn: _0x253880,
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
          columns: [],
        });
      (_0x1a9b33[_0x4540f4] || (_0x1a9b33[_0x4540f4] = []),
        _0x1a9b33[_0x4540f4].push(_0x202ecc));
    }
  }
}
function N(_0x368109, _0x412c99) {
  let _0x3bb449 = {};
  for (let [_0x349560, _0x30b9e3] of Object.entries(_0x368109)) {
    var _0x5e65c5;
    let _0x3d2915 = _0x30b9e3,
      _0x4143e2 = false,
      _0xe77546 = _0x412c99.getSheetBySheetId(_0x349560);
    if (_0xe77546) {
      for (let _0x574e8c = 0; _0x574e8c < _0x3d2915.length; _0x574e8c++) {
        let _0x6e5f0d = _0x3d2915[_0x574e8c],
          {
            startRow: _0x191960,
            endRow: _0x2ebc82,
            startColumn: _0x4f47ff,
            endColumn: _0x1dffd4,
          } = _0x6e5f0d.range,
          _0x654ac2 = F(_0x6e5f0d, _0xe77546, _0x412c99),
          _0x326747 = P(_0x191960, _0x2ebc82, _0x6e5f0d),
          _0x485fac = 1,
          _0x3f624d = _0x191960 + _0x326747,
          _0x43d235 = 0,
          _0x2cc4dd = 0;
        for (let _0x578059 = _0x4f47ff; _0x578059 <= _0x1dffd4; _0x578059++) {
          let _0x1b3037 = _0xe77546.getCell(_0x3f624d, _0x578059);
          if (!_0x1b3037) continue;
          let _0x2778c4 = A(_0x1b3037);
          _0x2778c4 != null &&
            (_0x2778c4 !== "" && _0x2cc4dd++, K(_0x2778c4) && _0x43d235++);
        }
        if (
          (_0x2cc4dd > 0 &&
            _0x43d235 / Math.max(_0x2cc4dd, 1) > 0.03 &&
            (_0x485fac = 0),
          (_0x6e5f0d.mergeRowTitleCount = _0x326747),
          (_0x6e5f0d.rowTitleCount = _0x485fac + _0x326747),
          _0x6e5f0d.range["endRow"] -
            _0x6e5f0d.range["startRow"] +
            1 -
            _0x6e5f0d.rowTitleCount <=
            1)
        ) {
          (console.warn(
            "skip small table, idx:" +
              _0x574e8c +
              ",\x20rangeName:" +
              O(_0x6e5f0d.range),
          ),
            _0x3d2915.splice(_0x574e8c, 1),
            _0x574e8c--,
            (_0x4143e2 = true));
          continue;
        }
        let _0xf35fce = new Map(),
          _0x5652d7 = 0,
          _0x2a7681 = v(4, _0x1dffd4 - _0x4f47ff + 1);
        for (let _0x51dadc = _0x4f47ff; _0x51dadc <= _0x1dffd4; _0x51dadc++) {
          let _0x4552a8 = "",
            _0x508fe3 = new Set(),
            _0x1e680a = false,
            _0x4df81b = _0x191960 + _0x6e5f0d.rowTitleCount - 1,
            _0x5b87fe = _0x191960;
          _0x654ac2 !== "" && (_0x5b87fe = _0x191960 + 1);
          for (let _0x71e94f = _0x5b87fe; _0x71e94f <= _0x4df81b; _0x71e94f++) {
            let _0x52004c = j(_0x71e94f, _0x51dadc, _0xe77546);
            _0x52004c != null &&
              (_0x71e94f === _0x4df81b && (_0x4552a8 = _0x52004c),
              _0x508fe3.add(_0x52004c));
          }
          let _0x404894 = [..._0x508fe3].join(","),
            _0x37943f = _0x404894;
          _0xf35fce.has(_0x37943f)
            ? (_0x1e680a = true)
            : _0xf35fce.set(_0x37943f, true);
          let _0x4031cd = _0x4df81b + 1,
            _0x3be81a = _0x4df81b + 20,
            _0x20b115 = 0,
            _0x1dfe44 = false,
            _0x1bf91b = false;
          if (
            (_0x3be81a > _0x2ebc82 && (_0x3be81a = _0x2ebc82),
            _0x4031cd < _0x2ebc82)
          ) {
            let _0x407ba2 = "";
            for (
              let _0x286114 = _0x4031cd;
              _0x286114 <= _0x3be81a;
              _0x286114++
            ) {
              let _0x1315f9 = _0xe77546.getCell(_0x286114, _0x51dadc);
              if (!_0x1315f9) continue;
              let _0x13a514 = A(_0x1315f9);
              _0x13a514 != null &&
                (K(_0x13a514) || (_0x407ba2 += _0x13a514),
                W(_0x13a514) && _0x20b115++);
            }
            (_0x20b115 > Math.floor((_0x3be81a - _0x4031cd + 1) / 2) &&
              (_0x1bf91b = true),
              G(_0x407ba2) / Math.max(_0x3be81a - _0x4031cd + 1, 1) > 15 &&
                !_0x1bf91b &&
                (_0x1dfe44 = true));
          }
          _0x6e5f0d.columns["push"]({
            id: _0x2a7681[_0x5652d7++],
            Name: _0x4552a8,
            Type: "",
            Description: _0x404894,
            isCoded: false,
            isMeasure: true,
            isOpinionText: false,
            isBigText: _0x1dfe44,
            isLink: _0x1bf91b,
            isTitleRepeat: _0x1e680a,
            isUnique: false,
            links: [],
          });
        }
        I(_0x6e5f0d, _0x412c99);
      }
      (_0x4143e2 && (_0x368109[_0x349560] = _0x3d2915),
        _0x3d2915.length === 0 && delete _0x368109[_0x349560],
        (_0x3bb449[_0x349560] =
          ((_0x5e65c5 = _0x368109[_0x349560]) == null
            ? undefined
            : _0x5e65c5.length) ?? 0));
    }
  }
  return _0x368109;
}
function P(_0x22ada1, _0x4380c0, _0xdbf835) {
  function _0x908af6(_0x2bbb69) {
    if (_0x2bbb69.length === 0) return 0;
    _0x2bbb69.sort((_0x26ce44, _0x2ba4d1) => _0x26ce44[0] - _0x2ba4d1[0]);
    let _0x147cd8 = 0,
      _0x3319de = _0x2bbb69[0][0],
      _0x5932c9 = _0x2bbb69[0][1];
    for (let _0x2b49dd = 1; _0x2b49dd < _0x2bbb69.length; _0x2b49dd++) {
      let [_0x13edd4, _0x1b396a] = _0x2bbb69[_0x2b49dd];
      _0x13edd4 <= _0x5932c9 + 1
        ? (_0x5932c9 = Math.max(_0x5932c9, _0x1b396a))
        : ((_0x147cd8 += _0x5932c9 - _0x3319de + 1),
          (_0x3319de = _0x13edd4),
          (_0x5932c9 = _0x1b396a));
    }
    return ((_0x147cd8 += _0x5932c9 - _0x3319de + 1), _0x147cd8);
  }
  let _0x3dd751 = _0xdbf835.range["startColumn"],
    _0x1aec7e = _0xdbf835.range["endColumn"],
    _0x257bed = _0x1aec7e - _0x3dd751 + 1,
    _0x173907 = _0x22ada1 - 1,
    _0x30e897 = _0x22ada1 - 1,
    _0x4634aa = false;
  for (
    let _0x546787 = _0x22ada1;
    _0x546787 <= _0x4380c0 && _0x546787 - _0x22ada1 < 100;
    _0x546787++
  ) {
    let _0x2ff248 = [],
      _0x38475e = _0xdbf835.rowMergeTitleCountMap["get"](_0x546787) ?? [];
    for (let _0x152211 of _0x38475e) {
      let _0x4ef493 = _0x152211.range["startColumn"],
        _0x1f1b10 = _0x152211.range["endColumn"],
        _0x5ce481 = Math.max(_0x4ef493, _0x3dd751),
        _0xf3c563 = Math.min(_0x1f1b10, _0x1aec7e);
      _0x5ce481 <= _0xf3c563 && _0x2ff248.push([_0x5ce481, _0xf3c563]);
    }
    _0xdbf835.columnMergeTitleCountMap["forEach"]((_0x44fcff) => {
      for (let _0x1a3bb3 of _0x44fcff) {
        let _0x5df775 = _0x1a3bb3.range["startRow"],
          _0x48b7c4 = _0x1a3bb3.range["endRow"];
        if (_0x5df775 <= _0x546787 && _0x546787 <= _0x48b7c4) {
          let _0x407a78 = _0x1a3bb3.range["startColumn"],
            _0xc62684 = _0x1a3bb3.range["endColumn"],
            _0xb86b = Math.max(_0x407a78, _0x3dd751),
            _0x4d9ad4 = Math.min(_0xc62684, _0x1aec7e);
          _0xb86b <= _0x4d9ad4 && _0x2ff248.push([_0xb86b, _0x4d9ad4]);
        }
      }
    });
    let _0x4f4064 = _0x908af6(_0x2ff248),
      _0x58cd6d = _0x4f4064 / Math.max(_0x257bed, 1);
    (_0x2ff248.length > 0 && (_0x173907 = _0x546787),
      _0x4f4064 > 0 && _0x58cd6d >= 0.75 && !_0x4634aa
        ? (_0x30e897 = _0x546787)
        : _0x2ff248.length > 0 && (_0x4634aa = true));
  }
  return _0x173907 === _0x4380c0 || _0x173907 - _0x22ada1 === 100
    ? _0x30e897 - _0x22ada1 + 1
    : _0x173907 - _0x22ada1 + 1;
}
function F(_0x52ad53, _0x53c59c, _0x35519f) {
  if (
    ((_0x52ad53.description += _0x53c59c.getName() + ",\x20" + _0x35519f.name),
    _0x52ad53.name && _0x52ad53.name !== "")
  )
    return _0x52ad53.name;
  let _0x44d93d = _0x52ad53.range["startRow"],
    _0x2a57ee = _0x52ad53.range["startColumn"],
    _0x4a0bf2 = _0x52ad53.range["endColumn"],
    _0x526317 = _0x52ad53.rowMergeTitleCountMap["get"](_0x44d93d);
  if (_0x526317 && _0x526317.length > 0)
    for (let _0x1c6240 of _0x526317) {
      let _0x233399 = _0x1c6240.range,
        _0xc8c2e8 = _0x233399.startColumn,
        _0x3ea777 = _0x233399.endColumn;
      if (_0xc8c2e8 <= _0x2a57ee + 3 && _0x3ea777 >= _0x4a0bf2 - 3) {
        let _0x5a0089 = _0x53c59c.getCell(_0x44d93d, _0xc8c2e8);
        if (!_0x5a0089) return "";
        let _0x2da840 = A(_0x5a0089);
        return _0x2da840 == null || _0x2da840 === ""
          ? ""
          : ((_0x52ad53.name = _0x2da840), _0x2da840);
      }
    }
  return "";
}
function I(_0x1535c6, _0x53a9b1) {
  let _0x52e292 = {};
  _0x53a9b1.getStyles().each((_0x795165) => {
    let [_0x5b07ea, _0x57dff3] = _0x795165;
    return (
      !_0x5b07ea ||
        !_0x57dff3 ||
        (_0x57dff3.n &&
          typeof _0x57dff3.n["pattern"] == "string" &&
          /[YyMDd]/["test"](_0x57dff3.n["pattern"]) &&
          (_0x52e292[_0x5b07ea] = true)),
      true
    );
  });
  let _0x30a14d = _0x1535c6.range["startRow"],
    _0x19d4c9 = _0x1535c6.range["endRow"],
    _0x25b046 = _0x1535c6.rowTitleCount,
    _0x3a0026 = _0x1535c6.sheetId,
    _0x54ed76 = _0x53a9b1.getSheetBySheetId(_0x3a0026);
  if (!_0x54ed76) return;
  let _0x26fa57 = _0x19d4c9 - _0x30a14d + 1 - _0x25b046;
  if (_0x26fa57 <= 1) {
    console.warn("skip small table");
    return;
  }
  let _0x329d33 = [];
  for (
    let _0x3bf35c = 0;
    _0x3bf35c <
    _0x1535c6.range["endColumn"] - _0x1535c6.range["startColumn"] + 1;
    _0x3bf35c++
  )
    _0x329d33.push(new _(_0x52e292));
  let _0x5e95bb = Math.log10(Math.max(_0x26fa57, 1));
  for (let _0x4ce769 = 0; ; _0x4ce769++) {
    let _0x3cb38d = _0x4ce769,
      _0x2a5990 =
        Math.floor(
          _0x3cb38d + 0.00001 * _0x3cb38d ** 2.7 * _0x5e95bb * _0x5e95bb,
        ) +
        _0x30a14d +
        _0x25b046;
    if (_0x2a5990 > _0x19d4c9) break;
    for (
      let _0x3fe547 = _0x1535c6.range["startColumn"];
      _0x3fe547 <= _0x1535c6.range["endColumn"];
      _0x3fe547++
    ) {
      let _0x12d6f8 = _0x54ed76.getCell(_0x2a5990, _0x3fe547);
      _0x12d6f8 &&
        _0x329d33[_0x3fe547 - _0x1535c6.range["startColumn"]].Match(_0x12d6f8);
    }
  }
  let _0xd04337 = [];
  for (
    let _0xa05818 = 0;
    _0xa05818 < _0x1535c6.columns["length"];
    _0xa05818++
  ) {
    let [_0x29cf1, _0x12f699] = _0x329d33[_0xa05818].Best();
    ((_0x1535c6.columns[_0xa05818].Type = _0x29cf1), _0xd04337.push(_0x29cf1));
  }
}
function L(_0x4a1f01) {
  let _0x4b4ce1 = [];
  for (let _0x35caf0 of _0x4a1f01.links)
    _0x4b4ce1.push({
      tableId: _0x35caf0.tableId,
      columnId: _0x35caf0.columnId,
      linkType: _0x35caf0.linkType,
    });
  return _0x4b4ce1;
}
function R(_0x18ef7f) {
  return _0x18ef7f.rowTitleCount === 1;
}
function z(_0x31136b, _0x54169e, _0xc585b5, _0x1ec575, _0x2c1c09) {
  let _0x435b4d = _0x1ec575.get(t.TableManager),
    _0x4a5322 = _0x54169e.getUnitId(),
    _0xb3a94a = _0x31136b.sheetId;
  if (_0x435b4d.getTablesBySubunitId(_0x4a5322, _0xb3a94a)) {
    for (let _0x173a5c of _0xc585b5)
      if (_0x173a5c.id === _0x31136b.id) {
        ((_0x173a5c.name = _0x31136b.name),
          (_0x173a5c.meta = {}),
          (_0x173a5c.meta["description"] = _0x31136b.description),
          (_0x173a5c.meta["rowTitleCount"] = _0x31136b.rowTitleCount),
          (_0x173a5c.meta["mergeRowTitleCount"] = _0x31136b.mergeRowTitleCount),
          (_0x173a5c.meta["isTimeSeries"] = _0x31136b.isTimeSeries));
        for (
          let _0xfdad5e = 0;
          _0xfdad5e < _0x31136b.columns["length"];
          _0xfdad5e++
        ) {
          let _0xa94a4d = _0x31136b.columns[_0xfdad5e],
            _0x4e92bf = _0x173a5c.columns[_0xfdad5e];
          ((_0x4e92bf.displayName = _0xa94a4d.Name),
            (_0x4e92bf.dataType = _0xa94a4d.Type),
            (_0x4e92bf.meta = {}),
            (_0x4e92bf.meta["description"] = _0xa94a4d.Description),
            (_0x4e92bf.meta["isCoded"] = _0xa94a4d.isCoded),
            (_0x4e92bf.meta["isMeasure"] = _0xa94a4d.isMeasure),
            (_0x4e92bf.meta["isOpinionText"] = _0xa94a4d.isOpinionText),
            (_0x4e92bf.meta["isBigText"] = _0xa94a4d.isBigText),
            (_0x4e92bf.meta["isLink"] = _0xa94a4d.isLink),
            (_0x4e92bf.meta["isTitleRepeat"] = _0xa94a4d.isTitleRepeat),
            (_0x4e92bf.meta["isUnique"] = _0xa94a4d.isUnique),
            (_0x4e92bf.meta["links"] = L(_0xa94a4d)));
        }
        H(_0x173a5c, _0xb3a94a, _0x54169e, _0x2c1c09);
      }
    x.clear();
  }
}
function B(_0x28ddd8, _0x170ed6, _0x3bb40d, _0x105e27) {
  let _0x40bca1 = _0x3bb40d.get(t.TableManager),
    _0x5714eb = _0x170ed6.getUnitId(),
    _0x2fb58f = {};
  for (let [_0x52a9ff, _0x319e23] of Object.entries(_0x28ddd8)) {
    let _0x393b08 = _0x40bca1.getTablesBySubunitId(_0x5714eb, _0x52a9ff),
      _0x5de37e =
        (_0x393b08 == null
          ? undefined
          : _0x393b08.map((_0x519acd) => _0x519acd.toJSON())) || [];
    for (let _0x2e0a5c of _0x319e23) {
      if (_0x2e0a5c.isUpdateTable) {
        z(_0x2e0a5c, _0x170ed6, _0x5de37e, _0x3bb40d, _0x105e27);
        continue;
      }
      let _0x6911fe = {
        id: _0x2e0a5c.id,
        range: {
          startRow: _0x2e0a5c.range["startRow"] + _0x2e0a5c.mergeRowTitleCount,
          endRow: _0x2e0a5c.range["endRow"],
          startColumn: _0x2e0a5c.range["startColumn"],
          endColumn: _0x2e0a5c.range["endColumn"],
        },
        name: _0x2e0a5c.name,
        meta: {},
        options: { showHeader: R(_0x2e0a5c), showFooter: false },
        columns: [],
        filters: {},
      };
      ((_0x6911fe.meta["description"] = _0x2e0a5c.description),
        (_0x6911fe.meta["rowTitleCount"] = _0x2e0a5c.rowTitleCount),
        (_0x6911fe.meta["mergeRowTitleCount"] = _0x2e0a5c.mergeRowTitleCount),
        (_0x6911fe.meta["isTimeSeries"] = _0x2e0a5c.isTimeSeries));
      let _0x2843a6 = _0x2e0a5c.range["startColumn"];
      for (
        let _0x376096 = 0;
        _0x376096 < _0x2e0a5c.columns["length"];
        _0x376096++
      ) {
        let _0x53168d = _0x2e0a5c.columns[_0x376096],
          _0x2888fc = {
            id: _0x53168d.id,
            displayName: _0x53168d.Name || "column_" + q(_0x2843a6 + _0x376096),
            dataType: _0x53168d.Type,
            meta: {},
            formula: "",
            style: {},
          };
        ((_0x2888fc.meta["description"] = _0x53168d.Description),
          (_0x2888fc.meta["isCoded"] = _0x53168d.isCoded),
          (_0x2888fc.meta["isMeasure"] = _0x53168d.isMeasure),
          (_0x2888fc.meta["isOpinionText"] = _0x53168d.isOpinionText),
          (_0x2888fc.meta["isBigText"] = _0x53168d.isBigText),
          (_0x2888fc.meta["isLink"] = _0x53168d.isLink),
          (_0x2888fc.meta["isTitleRepeat"] = _0x53168d.isTitleRepeat),
          (_0x2888fc.meta["isUnique"] = _0x53168d.isUnique),
          (_0x2888fc.meta["links"] = L(_0x53168d)),
          _0x6911fe.columns["push"](_0x2888fc));
      }
      (H(_0x6911fe, _0x52a9ff, _0x170ed6, _0x105e27),
        _0x5de37e.push(_0x6911fe));
    }
    _0x2fb58f[_0x52a9ff] = _0x5de37e;
  }
  for (let _0x343b77 of Object.keys(_0x28ddd8))
    _0x28ddd8[_0x343b77].forEach((_0x4e24f3) => {
      _0x4e24f3.dispose();
    });
  return _0x2fb58f;
}
function V(_0x5bb609, _0x317b64, _0x54d66b = 5) {
  if (!Array.isArray(_0x5bb609) || _0x5bb609.length === 0) return [];
  let _0x345260 = Math.min(_0x317b64, _0x5bb609.length),
    _0x26f68f = Math.min(_0x345260 + _0x54d66b, _0x5bb609.length);
  return _0x5bb609.slice(_0x345260, _0x26f68f);
}
function H(_0x5eb45c, _0xc85b83, _0x4ba4f7, _0x4ba597) {
  let _0x5e7471 = _0x4ba4f7.getSheetBySheetId(_0xc85b83);
  if (!_0x5e7471) return;
  let _0x37cea7 = _0x5eb45c.range,
    _0x20f201 = U(_0x5e7471, _0x37cea7);
  _0x4ba597 === "sample"
    ? (_0x5eb45c.data = JSON.stringify(V(_0x20f201, 1, 5)))
    : _0x4ba597 === "all" &&
      (_0x5eb45c.data = JSON.stringify(V(_0x20f201, 1, _0x20f201.length)));
}
function U(_0x1d9ae1, _0x31e4fe) {
  let {
      startRow: _0x1eb68b,
      endRow: _0x2aa8d3,
      startColumn: _0x5bffe3,
      endColumn: _0x79b3e6,
    } = _0x31e4fe,
    _0xccac03 = [],
    _0x54c721 = x.get(_0x1d9ae1),
    _0x47a744 = _0x54c721 == null ? undefined : _0x54c721.mergeRTree,
    _0x2e9497 = _0x54c721 == null ? undefined : _0x54c721.mergeRangeMap,
    _0x2ce30d = _0x1d9ae1.getUnitId(),
    _0x59c624 = _0x1d9ae1.getSheetId();
  for (let _0x1e0817 = _0x1eb68b; _0x1e0817 <= _0x2aa8d3; _0x1e0817++) {
    let _0x244650 = [];
    for (let _0x6741ff = _0x5bffe3; _0x6741ff <= _0x79b3e6; _0x6741ff++) {
      let _0xe02a11 = _0x1d9ae1.getCell(_0x1e0817, _0x6741ff),
        _0xd9431a = _0xe02a11 ? k(_0xe02a11) : undefined;
      if (_0xd9431a == null || _0xd9431a === "") {
        let _0xe4ea07 = {
            range: {
              startRow: _0x1e0817,
              endRow: _0x1e0817,
              startColumn: _0x6741ff,
              endColumn: _0x6741ff,
            },
            unitId: _0x2ce30d,
            sheetId: _0x59c624,
          },
          _0x348305 =
            (_0x47a744 == null
              ? undefined
              : _0x47a744.bulkSearch([_0xe4ea07])) || new Map();
        if (_0x348305.size > 0 && _0x2e9497) {
          let _0x2cddd9 = _0x348305.keys().next().value,
            _0x1980f5 = _0x2e9497.get(_0x2cddd9);
          if (!_0x1980f5) continue;
          let _0x18569b = _0x1d9ae1.getCell(
            _0x1980f5.range["startRow"],
            _0x1980f5.range["startColumn"],
          );
          _0x18569b && (_0xd9431a = k(_0x18569b));
        }
      }
      _0x244650.push(_0xd9431a ?? "");
    }
    _0xccac03.push(_0x244650);
  }
  return _0xccac03;
}
function W(_0x73dca5) {
  return /https?:\/\/|www\./i.test(_0x73dca5);
}
function G(_0xb5f726) {
  return Array.from(_0xb5f726).length;
}
function K(_0x432cbd) {
  return _0x432cbd
    ? /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(_0x432cbd.trim())
    : false;
}
function q(_0x2c7a0b) {
  let _0x27045a = "",
    _0x4cba4f = _0x2c7a0b + 1;
  for (; _0x4cba4f > 0;) {
    let _0x4df903 = (_0x4cba4f - 1) % 26;
    ((_0x27045a = String.fromCharCode(65 + _0x4df903) + _0x27045a),
      (_0x4cba4f = Math.floor((_0x4cba4f - 1) / 26)));
  }
  return _0x27045a;
}
function J(_0x35478c, _0x146378) {
  return function (_0x4af13b, _0x182bc9) {
    _0x146378(_0x4af13b, _0x182bc9, _0x35478c);
  };
}
function Y(_0x3c53bc, _0x5dc9c9, _0x1036df, _0xce625b) {
  var _0x5c00db = arguments.length,
    _0x13d61b =
      _0x5c00db < 3
        ? _0x5dc9c9
        : _0xce625b === null
          ? (_0xce625b = Object.getOwnPropertyDescriptor(_0x5dc9c9, _0x1036df))
          : _0xce625b,
    _0x3a3d73;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x13d61b = Reflect.decorate(_0x3c53bc, _0x5dc9c9, _0x1036df, _0xce625b);
  else {
    for (var _0x4cf920 = _0x3c53bc.length - 1; _0x4cf920 >= 0; _0x4cf920--)
      (_0x3a3d73 = _0x3c53bc[_0x4cf920]) &&
        (_0x13d61b =
          (_0x5c00db < 3
            ? _0x3a3d73(_0x13d61b)
            : _0x5c00db > 3
              ? _0x3a3d73(_0x5dc9c9, _0x1036df, _0x13d61b)
              : _0x3a3d73(_0x5dc9c9, _0x1036df)) || _0x13d61b);
  }
  return (
    _0x5c00db > 3 &&
      _0x13d61b &&
      Object.defineProperty(_0x5dc9c9, _0x1036df, _0x13d61b),
    _0x13d61b
  );
}
let X = class extends e.Disposable {
  constructor(_0x68b797) {
    (super(), (this._injector = _0x68b797));
  }
  getAllTableJson(_0x2ad16, _0x295ee3) {
    return T(_0x2ad16, this._injector, _0x295ee3);
  }
};
X = Y([J(0, (0, e.Inject)(e.Injector))], X);
var Z = "@univerjs-pro/range-preprocess",
  te = "1.0.0-insiders.20260907-70fc579";
const Q = {};
let $ = class extends e.Plugin {
  constructor(_0x5cdb52 = Q, _0x213012, _0x1b0317) {
    (super(),
      (this._config = _0x5cdb52),
      (this._injector = _0x213012),
      (this._configService = _0x1b0317));
    let { ..._0x1a0ca5 } = (0, e.merge)({}, Q, this._config);
    this._configService["setConfig"]("range-preprocess.config", _0x1a0ca5);
  }
  onStarting() {
    let _0x29008e = [[X]];
    (0, e.registerDependencies)(this._injector, _0x29008e);
  }
  onReady() {}
};
(o($, "pluginName", "UNIVER_RANGE_PREPROCESS_PLUGIN"),
  o($, "packageName", Z),
  o($, "version", te),
  ($ = Y(
    [
      (0, e.DependentOn)(n.UniverLicensePlugin),
      J(1, (0, e.Inject)(e.Injector)),
      J(2, e.IConfigService),
    ],
    $,
  )),
  Object.defineProperty(exports, "RangePreprocessController", {
    enumerable: true,
    get: function () {
      return X;
    },
  }),
  Object.defineProperty(exports, "UniverRangePreprocessPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }));
