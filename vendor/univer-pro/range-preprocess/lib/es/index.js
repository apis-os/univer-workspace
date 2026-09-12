import {
  BuildTextUtils as _0xe885ef,
  CellValueType as _0x7dc68,
  DependentOn as _0x8a5c5a,
  Disposable as _0x403237,
  IConfigService as _0x268bfe,
  Inject as _0x2f0362,
  Injector as _0x159849,
  Plugin as _0x2f3893,
  RTree as _0x2c6559,
  generateRandomId as _0x4cb65f,
  merge as _0x568b4f,
  registerDependencies as _0x7b9f6,
} from "@univerjs/core";
import "@univerjs/sheets-filter";
import { TableManager as _0x5ec3ae } from "@univerjs/sheets-table";
import { UniverLicensePlugin as _0x5baeb8 } from "@univerjs-pro/license";
function m(_0x196b51) {
  "@babel/helpers - typeof";
  return (
    (m =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x28de27) {
            return typeof _0x28de27;
          }
        : function (_0xebba3c) {
            return _0xebba3c &&
              typeof Symbol == "function" &&
              _0xebba3c.constructor === Symbol &&
              _0xebba3c !== Symbol.prototype
              ? "symbol"
              : typeof _0xebba3c;
          }),
    m(_0x196b51)
  );
}
function h(_0x32f2f1, _0x58e1f8) {
  if (m(_0x32f2f1) != "object" || !_0x32f2f1) return _0x32f2f1;
  var _0x28b695 = _0x32f2f1[Symbol.toPrimitive];
  if (_0x28b695 !== undefined) {
    var _0x4ea8df = _0x28b695.call(_0x32f2f1, _0x58e1f8 || "default");
    if (m(_0x4ea8df) != "object") return _0x4ea8df;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x58e1f8 === "string" ? String : Number)(_0x32f2f1);
}
function g(_0x1adc03) {
  var _0x731041 = h(_0x1adc03, "string");
  return m(_0x731041) == "symbol" ? _0x731041 : _0x731041 + "";
}
function _(_0x22bd37, _0x479fc9, _0x42f0f3) {
  return (
    (_0x479fc9 = g(_0x479fc9)) in _0x22bd37
      ? Object.defineProperty(_0x22bd37, _0x479fc9, {
          value: _0x42f0f3,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x22bd37[_0x479fc9] = _0x42f0f3),
    _0x22bd37
  );
}
function v(_0x5770ec) {
  return _0x5770ec.v == null ? "" : String(_0x5770ec.v).trim();
}
function y(_0x2b8dd4) {
  return /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(_0x2b8dd4);
}
function b(_0x28c184, _0x5b15cc) {
  let _0xe4555d = {
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
  }[_0x5b15cc];
  if (!_0xe4555d || !_0xe4555d.test(_0x28c184)) return false;
  let _0x3264cd = _0x28c184
      .replace(/\D+/g, "\x20")
      .trim()
      .split(/\s+/)
      .map(Number),
    _0x219330 = 0,
    _0x375146 = 1,
    _0x178ea6 = 1,
    _0x4e4b1b = 0,
    _0x106f77 = 0,
    _0x5e0d49 = 0;
  switch (_0x5b15cc) {
    case "2006-01-02":
    case "2006-1-2":
    case "2006/01/02":
    case "2006/1/2":
      [_0x219330, _0x375146, _0x178ea6] = _0x3264cd;
      break;
    case "2006年1月2日":
      [_0x219330, _0x375146, _0x178ea6] = _0x3264cd;
      break;
    case "02-01-2006":
    case "02/01/2006":
    case "02.01.2006":
      [_0x178ea6, _0x375146, _0x219330] = _0x3264cd;
      break;
    case "01-02-2006":
    case "01/02/2006":
      [_0x375146, _0x178ea6, _0x219330] = _0x3264cd;
      break;
    case "20060102": {
      let _0x764cf8 = _0x28c184;
      ((_0x219330 = +_0x764cf8.slice(0, 4)),
        (_0x375146 = +_0x764cf8.slice(4, 6)),
        (_0x178ea6 = +_0x764cf8.slice(6, 8)));
      break;
    }
    case "2006-01-02T15:04:05":
    case "2006-01-02 15:04:05":
      [_0x219330, _0x375146, _0x178ea6, _0x4e4b1b, _0x106f77, _0x5e0d49] =
        _0x3264cd;
      break;
    default:
      return true;
  }
  if (
    _0x375146 < 1 ||
    _0x375146 > 12 ||
    _0x178ea6 < 1 ||
    _0x178ea6 > 31 ||
    _0x4e4b1b < 0 ||
    _0x4e4b1b > 23 ||
    _0x106f77 < 0 ||
    _0x106f77 > 59 ||
    _0x5e0d49 < 0 ||
    _0x5e0d49 > 59
  )
    return false;
  let _0x3e1ff9 = new Date(
    _0x219330,
    _0x375146 - 1,
    _0x178ea6,
    _0x4e4b1b,
    _0x106f77,
    _0x5e0d49,
  );
  return (
    _0x3e1ff9.getFullYear() === _0x219330 &&
    _0x3e1ff9.getMonth() === _0x375146 - 1 &&
    _0x3e1ff9.getDate() === _0x178ea6
  );
}
function x(_0x3bc4dd) {
  return Number.isFinite(_0x3bc4dd) && _0x3bc4dd >= 1 && _0x3bc4dd <= 80000;
}
function ee(_0x1927b5) {
  switch (_0x1927b5) {
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
var S = class {
    constructor() {
      (_(this, "valid", 0), _(this, "invalid", 0), _(this, "confidence", 0));
    }
  },
  C = class extends S {
    constructor(_0x3ea659) {
      (super(),
        _(this, "timeStampStyles", undefined),
        _(this, "dt", undefined),
        _(this, "layout", undefined),
        _(this, "needConvert", undefined),
        (this.dt = _0x3ea659.dt),
        (this.layout = _0x3ea659.layout),
        (this.needConvert = !!_0x3ea659.needConvert));
    }
    Match(_0x2b0908) {
      if (_0x2b0908.t === _0x7dc68.STRING) {
        let _0x3ecf0b = v(_0x2b0908);
        if (!_0x3ecf0b) return;
        b(_0x3ecf0b, this.layout) ? (this.valid += 2) : this.invalid++;
      }
    }
    Calc() {
      let _0x2c1006 =
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        _0xfb0904 = {
          Charset: this.dt,
          Confidence: _0x2c1006,
          debugInfo: this.layout,
        };
      return (this.needConvert && (_0xfb0904.Layout = this.layout), _0xfb0904);
    }
  },
  w = class extends S {
    constructor(_0x4bf8b8) {
      (super(),
        _(this, "dateStyles", undefined),
        _(this, "timeStampStyles", undefined),
        _(this, "dt", undefined),
        _(this, "layout", undefined),
        _(this, "needConvert", undefined),
        (this.dateStyles = _0x4bf8b8.dateStyles || {}),
        (this.dt = _0x4bf8b8.dt),
        (this.layout = _0x4bf8b8.layout),
        (this.needConvert = !!_0x4bf8b8.needConvert));
    }
    Match(_0x214c27) {
      if (_0x214c27.t === _0x7dc68.NUMBER) {
        if (_0x214c27.s && this.dateStyles[_0x214c27.s]) {
          this.valid += 2;
          return;
        }
        let _0x54eac8 = v(_0x214c27);
        if (!_0x54eac8) return;
        if (this.layout === "excel" && x(Number(_0x54eac8))) {
          this.valid += 2;
          return;
        }
        b(_0x54eac8, this.layout) ? (this.valid += 2) : this.invalid++;
      }
    }
    Calc() {
      let _0x5d0f3a =
          100 -
          Math.trunc(
            ((this.invalid * 10 + 1) * 100) / (this.invalid + this.valid + 1),
          ),
        _0x386fc7 = {
          Charset: this.dt,
          Confidence: _0x5d0f3a,
          debugInfo: this.layout,
        };
      return (this.needConvert && (_0x386fc7.Layout = this.layout), _0x386fc7);
    }
  },
  T = class extends S {
    Match(_0x28b010) {
      if (_0x28b010.t === _0x7dc68.NUMBER) this.valid += 1;
      else {
        let _0x5e5c3e = v(_0x28b010);
        if (!_0x5e5c3e) return;
        y(_0x5e5c3e) ? (this.valid += 1) : this.invalid++;
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
  E = class extends S {
    Match(_0x502d66) {
      _0x502d66.t === _0x7dc68.BOOLEAN ? (this.valid += 1) : this.invalid++;
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
  te = class {
    constructor(_0x41ca13) {
      (_(this, "recognizers", undefined),
        _(this, "dateStyles", undefined),
        (this.dateStyles = _0x41ca13 || {}),
        (this.recognizers = [
          new C({ dt: 2, layout: "2006-01-02" }),
          new C({ dt: 2, layout: "2006-1-2" }),
          new C({ dt: 2, layout: "2006/01/02" }),
          new C({ dt: 2, layout: "2006/1/2" }),
          new C({ dt: 2, layout: "2006年1月2日", needConvert: true }),
          new C({ dt: 2, layout: "02-01-2006", needConvert: true }),
          new C({ dt: 2, layout: "02/01/2006", needConvert: true }),
          new C({ dt: 2, layout: "02.01.2006", needConvert: true }),
          new C({ dt: 2, layout: "01-02-2006", needConvert: true }),
          new C({ dt: 2, layout: "01/02/2006", needConvert: true }),
          new C({ dt: 2, layout: "2 January, 2006", needConvert: true }),
          new C({ dt: 2, layout: "2 January,2006", needConvert: true }),
          new C({ dt: 2, layout: "2 Jan., 2006", needConvert: true }),
          new C({ dt: 2, layout: "January\x202,\x202006", needConvert: true }),
          new C({ dt: 2, layout: "January\x202,2006", needConvert: true }),
          new C({ dt: 2, layout: "Jan.\x202,\x202006", needConvert: true }),
          new C({ dt: 2, layout: "20060102", needConvert: true }),
          new w({
            dateStyles: this.dateStyles,
            dt: 2,
            layout: "20060102",
            needConvert: true,
          }),
          new C({ dt: 4, layout: "2006-01-02T15:04:05" }),
          new C({ dt: 4, layout: "2006-01-02\x2015:04:05" }),
          new w({
            dateStyles: this.dateStyles,
            dt: 3,
            layout: "excel",
            needConvert: true,
          }),
          new T(),
          new E(),
        ]));
    }
    Match(_0x328321) {
      for (let _0x3f5327 of this.recognizers) _0x3f5327.Match(_0x328321);
    }
    Best() {
      let _0x6b2964 = this.recognizers["map"]((_0x46f257) => _0x46f257.Calc());
      if (
        (_0x6b2964.sort(
          (_0x5a4cd5, _0x1cd6b8) => _0x1cd6b8.Confidence - _0x5a4cd5.Confidence,
        ),
        _0x6b2964.length === 0 || _0x6b2964[0].Confidence < 50)
      )
        return ["string", null];
      let _0xc4a8ca = _0x6b2964[0];
      return [ee(_0xc4a8ca.Charset), _0xc4a8ca];
    }
  };
function D(_0x25ae53, _0x491873) {
  let _0x316ddd = _0x25ae53,
    _0x2426f8 = _0x491873;
  (_0x316ddd <= 0 && (_0x316ddd = 6),
    _0x2426f8 <= 0 && (_0x2426f8 = 10),
    (_0x2426f8 *= 2));
  let _0x2ecaa4 = [];
  for (let _0xb2e94f = 0; _0xb2e94f < _0x2426f8; _0xb2e94f++)
    _0x2ecaa4.push(_0x4cb65f(_0x316ddd));
  let _0xadcfc2 = new Map();
  for (let _0x549247 of _0x2ecaa4) {
    let _0x4a5c3b = _0x549247.toLowerCase();
    _0xadcfc2.has(_0x4a5c3b) || _0xadcfc2.set(_0x4a5c3b, _0x549247);
  }
  return Array.from(_0xadcfc2.values());
}
var O = class e {
  constructor(_0x2112fe) {
    (_(this, "id", undefined),
      _(this, "sheetId", undefined),
      _(this, "range", undefined),
      _(this, "name", undefined),
      _(this, "description", undefined),
      _(this, "rowTitleCount", undefined),
      _(this, "mergeRowTitleCount", undefined),
      _(this, "startStatisticRowCount", undefined),
      _(this, "endStatisticRowCount", undefined),
      _(this, "rowMergeTitleCountMap", undefined),
      _(this, "rowMergeTitleState", undefined),
      _(this, "columnMergeTitleState", undefined),
      _(this, "columnMergeTitleCountMap", undefined),
      _(this, "isMatchEnd", undefined),
      _(this, "isMatchContinue", undefined),
      _(this, "isTimeSeries", undefined),
      _(this, "isTestTable", undefined),
      _(this, "isUpdateTable", undefined),
      _(this, "columns", undefined),
      (this.id = (_0x2112fe == null ? undefined : _0x2112fe.id) ?? ""),
      (this.sheetId =
        (_0x2112fe == null ? undefined : _0x2112fe.sheetId) ?? _0x4cb65f()),
      (this.range = (_0x2112fe == null ? undefined : _0x2112fe.range) ?? {
        startRow: -1,
        endRow: -1,
        startColumn: -1,
        endColumn: -1,
      }),
      (this.name = (_0x2112fe == null ? undefined : _0x2112fe.name) ?? ""),
      (this.description =
        (_0x2112fe == null ? undefined : _0x2112fe.description) ?? ""),
      (this.rowTitleCount =
        (_0x2112fe == null ? undefined : _0x2112fe.rowTitleCount) ?? 0),
      (this.mergeRowTitleCount =
        (_0x2112fe == null ? undefined : _0x2112fe.mergeRowTitleCount) ?? 0),
      (this.startStatisticRowCount =
        (_0x2112fe == null ? undefined : _0x2112fe.startStatisticRowCount) ??
        0),
      (this.endStatisticRowCount =
        (_0x2112fe == null ? undefined : _0x2112fe.endStatisticRowCount) ?? 0),
      (this.rowMergeTitleCountMap =
        (_0x2112fe == null ? undefined : _0x2112fe.rowMergeTitleCountMap) ??
        new Map()),
      (this.rowMergeTitleState =
        (_0x2112fe == null ? undefined : _0x2112fe.rowMergeTitleState) ??
        false),
      (this.columnMergeTitleState =
        (_0x2112fe == null ? undefined : _0x2112fe.columnMergeTitleState) ??
        false),
      (this.columnMergeTitleCountMap =
        (_0x2112fe == null ? undefined : _0x2112fe.columnMergeTitleCountMap) ??
        new Map()),
      (this.isMatchEnd =
        (_0x2112fe == null ? undefined : _0x2112fe.isMatchEnd) ?? false),
      (this.isMatchContinue =
        (_0x2112fe == null ? undefined : _0x2112fe.isMatchContinue) ?? false),
      (this.isTimeSeries =
        (_0x2112fe == null ? undefined : _0x2112fe.isTimeSeries) ?? false),
      (this.isTestTable =
        (_0x2112fe == null ? undefined : _0x2112fe.isTestTable) ?? false),
      (this.isUpdateTable =
        (_0x2112fe == null ? undefined : _0x2112fe.isUpdateTable) ?? false),
      (this.columns =
        (_0x2112fe == null ? undefined : _0x2112fe.columns) ?? []));
  }
  _isRowContinuous(_0x18ea87, _0x2b1380) {
    return _0x2b1380 - _0x18ea87 === 1 || _0x2b1380 === _0x18ea87;
  }
  intersectWithPreTables(_0x54fd89) {
    let _0x2c6fb6 = [];
    for (let _0x2edf14 of _0x54fd89)
      this.range["endColumn"] < _0x2edf14.range["startColumn"] ||
        this.range["startColumn"] > _0x2edf14.range["endColumn"] ||
        (this._isRowContinuous(
          _0x2edf14.range["endRow"],
          this.range["startRow"],
        ) &&
          _0x2c6fb6.push(_0x2edf14));
    return _0x2c6fb6;
  }
  intersectWithColumns(_0x581909) {
    return (
      _0x581909.range["endRow"] === this.range["startRow"] &&
      this.range["endColumn"] + 1 === _0x581909.range["startColumn"]
    );
  }
  saveTableToCache(_0x29d778) {
    return this.range["startColumn"] === -1
      ? this
      : (_0x29d778.push(this),
        new e({
          sheetId: this.sheetId,
          range: {
            startRow: this.range["startRow"],
            endRow: this.range["endRow"],
            startColumn: -1,
            endColumn: -1,
          },
        }));
  }
  insertCellData(_0x2c1421, _0x299586, _0x297c92, _0x206cec) {
    (this.range["startColumn"] === -1 &&
      (this.range["startColumn"] = _0x299586),
      (this.range["endColumn"] = _0x299586),
      _0x206cec != null &&
        (this.range["endColumn"] = Math.max(
          _0x206cec,
          this.range["endColumn"],
        )));
  }
  dispose() {
    (this.rowMergeTitleCountMap["clear"](),
      this.columnMergeTitleCountMap["clear"](),
      (this.columns = []));
  }
};
function k(_0x336193, _0x5a5c06) {
  let {
    startRow: _0x246b1b,
    startColumn: _0x418b7d,
    endRow: _0x5465b7,
    endColumn: _0x1d02cc,
  } = _0x5a5c06;
  return (
    _0x336193 +
    ":" +
    _0x246b1b +
    "," +
    _0x418b7d +
    "-" +
    _0x5465b7 +
    "," +
    _0x1d02cc
  );
}
const A = new Map();
function ne(_0x2f3774, _0x1f9f7d) {
  let _0x4f4df2 = new _0x2c6559(false),
    _0x5d020f = _0x1f9f7d.getSheetId(),
    _0x13106c = new Map(),
    _0x318adf = _0x1f9f7d.getMergeData() ?? [];
  A.clear();
  for (let _0x115f8e of _0x318adf) {
    let _0x37c85b = k("merge", _0x115f8e),
      _0x1920fc = {
        unitId: _0x2f3774,
        sheetId: _0x5d020f,
        range: _0x115f8e,
        id: _0x37c85b,
      };
    (_0x4f4df2.insert(_0x1920fc), _0x13106c.set(_0x37c85b, _0x1920fc));
  }
  return (
    A.set(_0x1f9f7d, { mergeRTree: _0x4f4df2, mergeRangeMap: _0x13106c }),
    { mergeRTree: _0x4f4df2, mergeRangeMap: _0x13106c }
  );
}
function re(_0x1a36f9, _0x46e394, _0x2fdd22) {
  let _0x23cd49 = new _0x2c6559(false),
    _0x174f02 = _0x2fdd22.get(_0x5ec3ae).getTableList(_0x1a36f9);
  if (_0x174f02 && Array.isArray(_0x174f02))
    for (let _0x56a69a of _0x174f02) {
      if (!(_0x56a69a != null && _0x56a69a.range)) continue;
      let _0x3773e0 = _0x56a69a.range,
        _0x4bda26 = {
          unitId: _0x1a36f9,
          sheetId: _0x46e394,
          range: _0x3773e0,
          id: k("table", _0x3773e0),
        };
      _0x23cd49.insert(_0x4bda26);
    }
  return _0x23cd49;
}
function j(_0xc10420, _0x55c3f6, _0x730a21) {
  let _0x23a09c = _0xc10420.get(_0x55c3f6);
  _0x23a09c ? _0x23a09c.push(_0x730a21) : _0xc10420.set(_0x55c3f6, [_0x730a21]);
}
function ie(_0x2de855, _0x395b50) {
  let _0x750d70 = _0x2de855.getSheets(),
    _0x566b66 = {},
    _0x532394 = _0x2de855.getUnitId();
  for (let _0x5dd9f3 of _0x750d70) {
    let _0x5c6b6d = _0x5dd9f3.getSheetId(),
      _0x41e2ee = _0x5dd9f3.getRowCount(),
      _0x385986 = _0x5dd9f3.getColumnCount(),
      { mergeRTree: _0x3519cb, mergeRangeMap: _0x5ae9d1 } = ne(
        _0x532394,
        _0x5dd9f3,
      ),
      _0x3ff064 = re(_0x532394, _0x5c6b6d, _0x395b50),
      _0x5508d8 = [],
      _0x479c72 = [],
      _0x57a016 = _0x5dd9f3.getCellMatrix();
    for (let _0x425323 = 0; _0x425323 < _0x41e2ee; _0x425323++) {
      let _0x71accc = [],
        _0x570eb0 = new O({
          sheetId: _0x5c6b6d,
          range: {
            startRow: _0x425323,
            endRow: _0x425323,
            startColumn: -1,
            endColumn: -1,
          },
        }),
        _0x15df62 = new Map();
      if (_0x57a016.getRow(_0x425323) == null) {
        (_0x5508d8.push(..._0x479c72), (_0x479c72 = []));
        continue;
      }
      for (let _0x5ec819 = 0; _0x5ec819 <= _0x385986; _0x5ec819++) {
        let _0x418b00 = _0x5dd9f3.getCell(_0x425323, _0x5ec819),
          _0x147592 = {
            range: {
              startRow: _0x425323,
              startColumn: _0x5ec819,
              endRow: _0x425323,
              endColumn: _0x5ec819,
            },
            unitId: _0x532394,
            sheetId: _0x5c6b6d,
          };
        if (_0x3ff064.bulkSearch([_0x147592]).size > 0) {
          _0x570eb0 = _0x570eb0.saveTableToCache(_0x71accc);
          continue;
        }
        let _0x473c29 = _0x3519cb.bulkSearch([_0x147592]);
        if (_0x473c29.size > 0) {
          let _0x2dff55 = _0x570eb0.intersectWithPreTables(_0x479c72),
            _0x94c5a6 = _0x473c29.keys().next().value,
            _0x2196d1 = _0x5ae9d1.get(_0x94c5a6);
          if (!_0x2196d1) continue;
          let _0xe61b59 = {
              startRow: _0x2196d1.range["startRow"],
              endRow: _0x2196d1.range["endRow"],
              startColumn: _0x2196d1.range["startColumn"],
              endColumn: _0x2196d1.range["endColumn"],
            },
            _0x493216 = _0x5dd9f3.getCell(
              _0xe61b59.startRow,
              _0xe61b59.startColumn,
            );
          if (
            _0x493216 &&
            (_0x493216.p != null ||
              (_0x493216.v != null && String(_0x493216.v).length > 0))
          ) {
            _0x570eb0.insertCellData(
              _0x425323,
              _0x5ec819,
              _0x418b00,
              _0xe61b59.endColumn,
            );
            for (
              let _0x2e76b2 = _0xe61b59.startColumn;
              _0x2e76b2 <= _0xe61b59.endColumn;
              _0x2e76b2++
            )
              _0x15df62.set(_0x2e76b2, true);
          } else _0x570eb0 = _0x570eb0.saveTableToCache(_0x71accc);
          let _0x4c372f = _0xe61b59.endRow - _0xe61b59.startRow,
            _0x3e5038 = _0xe61b59.endColumn - _0xe61b59.startColumn;
          if (_0x2dff55.length === 1) {
            if (
              (_0x4c372f > 0 &&
                j(_0x570eb0.columnMergeTitleCountMap, _0x5ec819, _0x2196d1),
              _0x3e5038 > 0)
            ) {
              let _0x4944de =
                _0x570eb0.rowMergeTitleCountMap["get"](_0x425323) ?? [];
              (_0x4944de.push(_0x2196d1),
                _0x570eb0.rowMergeTitleCountMap["set"](_0x425323, _0x4944de));
            }
          } else {
            if (
              (_0x4c372f > 0 &&
                ((_0x570eb0.columnMergeTitleState = true),
                j(_0x570eb0.columnMergeTitleCountMap, _0x5ec819, _0x2196d1)),
              _0x3e5038 > 0)
            ) {
              _0x570eb0.rowMergeTitleState = true;
              let _0x4bcb61 =
                _0x570eb0.rowMergeTitleCountMap["get"](_0x425323) ?? [];
              (_0x4bcb61.push(_0x2196d1),
                _0x570eb0.rowMergeTitleCountMap["set"](_0x425323, _0x4bcb61));
            }
          }
          continue;
        }
        if ((!_0x418b00 || N(_0x418b00) == null) && !_0x15df62.get(_0x5ec819)) {
          _0x570eb0 = _0x570eb0.saveTableToCache(_0x71accc);
          continue;
        }
        _0x418b00 && N(_0x418b00) != null
          ? _0x570eb0.insertCellData(_0x425323, _0x5ec819, _0x418b00)
          : ((_0x570eb0.rowMergeTitleState = false),
            (_0x570eb0.columnMergeTitleState = false),
            (_0x570eb0 = _0x570eb0.saveTableToCache(_0x71accc)));
      }
      if (_0x71accc.length === 0) {
        (_0x5508d8.push(..._0x479c72), (_0x479c72 = []));
        continue;
      }
      if (_0x479c72.length === 0) {
        _0x479c72.push(..._0x71accc);
        continue;
      }
      let _0x4cc07a = (_0x584037, _0x528a00) => {
        ((_0x584037.range["startRow"] = Math.min(
          _0x584037.range["startRow"],
          _0x528a00.range["startRow"],
        )),
          (_0x584037.range["endRow"] = Math.max(
            _0x584037.range["endRow"],
            _0x528a00.range["endRow"],
          )),
          (_0x584037.range["startColumn"] = Math.min(
            _0x584037.range["startColumn"],
            _0x528a00.range["startColumn"],
          )),
          (_0x584037.range["endColumn"] = Math.max(
            _0x584037.range["endColumn"],
            _0x528a00.range["endColumn"],
          )),
          _0x528a00.rowMergeTitleCountMap["forEach"]((_0x29f5c5, _0x1a203a) => {
            let _0xf75992 =
              _0x584037.rowMergeTitleCountMap["get"](_0x1a203a) ?? [];
            (_0xf75992.push(..._0x29f5c5),
              _0x584037.rowMergeTitleCountMap["set"](_0x1a203a, _0xf75992));
          }),
          _0x528a00.columnMergeTitleCountMap["forEach"](
            (_0x51acee, _0x5bdcdf) => {
              let _0x3f9998 =
                _0x584037.columnMergeTitleCountMap["get"](_0x5bdcdf) ?? [];
              (_0x3f9998.push(..._0x51acee),
                _0x584037.columnMergeTitleCountMap["set"](
                  _0x5bdcdf,
                  _0x3f9998,
                ));
            },
          ));
      };
      for (let _0x3d0f72 = 0; _0x3d0f72 + 1 < _0x71accc.length; _0x3d0f72++) {
        let _0x5c836 = _0x71accc[_0x3d0f72],
          _0x3f409f = _0x71accc[_0x3d0f72 + 1];
        _0x5c836.intersectWithColumns(_0x3f409f) &&
          (_0x4cc07a(_0x5c836, _0x3f409f),
          _0x71accc.splice(_0x3d0f72 + 1, 1),
          _0x3d0f72--);
      }
      let _0x346c19 = [];
      for (let _0x2db746 of _0x71accc) {
        let _0x3e87d7 = _0x2db746.intersectWithPreTables(_0x479c72);
        if (_0x3e87d7.length === 0) {
          _0x346c19.push(_0x2db746);
          continue;
        }
        let _0x178304 = _0x2db746.rowMergeTitleCountMap["get"](_0x425323) ?? [],
          _0x506747 = 2 ** 53 - 1,
          _0xe8c76d = -1,
          _0xb034eb = -1;
        for (let _0x482b29 of _0x178304) {
          let _0x513c20 = _0x482b29.range,
            _0x33f9fa = _0x513c20.startColumn,
            _0x5860e8 = _0x513c20.endColumn;
          ((_0x506747 = Math.min(_0x506747, _0x33f9fa)),
            (_0xe8c76d = Math.max(_0xe8c76d, _0x5860e8)));
        }
        _0xe8c76d === -1 && (_0xb034eb = _0xe8c76d - _0x506747 + 1);
        let _0x4c640c = _0x3e87d7[0].range,
          _0x4615a0 = _0x4c640c.endColumn - _0x4c640c.startColumn + 1;
        if (_0xb034eb >= 0 && _0xb034eb <= (_0x4615a0 * 3) / 4) {
          _0x346c19.push(_0x2db746);
          continue;
        }
        let _0x487631 = _0x3e87d7[0];
        for (let _0x4f3074 of _0x3e87d7.slice(1))
          ((_0x487631.range["startRow"] = Math.min(
            _0x487631.range["startRow"],
            _0x4f3074.range["startRow"],
          )),
            (_0x487631.range["endRow"] = Math.max(
              _0x487631.range["endRow"],
              _0x4f3074.range["endRow"],
            )),
            (_0x487631.range["startColumn"] = Math.min(
              _0x487631.range["startColumn"],
              _0x4f3074.range["startColumn"],
            )),
            (_0x487631.range["endColumn"] = Math.max(
              _0x487631.range["endColumn"],
              _0x4f3074.range["endColumn"],
            )));
        ((_0x487631.range["startRow"] = Math.min(
          _0x487631.range["startRow"],
          _0x2db746.range["startRow"],
        )),
          (_0x487631.range["endRow"] = Math.max(
            _0x487631.range["endRow"],
            _0x2db746.range["endRow"],
          )),
          (_0x487631.range["startColumn"] = Math.min(
            _0x487631.range["startColumn"],
            _0x2db746.range["startColumn"],
          )),
          (_0x487631.range["endColumn"] = Math.max(
            _0x487631.range["endColumn"],
            _0x2db746.range["endColumn"],
          )),
          _0x2db746.rowMergeTitleCountMap["forEach"]((_0x5695b3, _0x181f00) => {
            let _0x2924ce =
              _0x487631.rowMergeTitleCountMap["get"](_0x181f00) ?? [];
            (_0x2924ce.push(..._0x5695b3),
              _0x487631.rowMergeTitleCountMap["set"](_0x181f00, _0x2924ce));
          }),
          _0x2db746.columnMergeTitleCountMap["forEach"](
            (_0x59a1dc, _0x7e4a9d) => {
              let _0x3ba9b9 =
                _0x487631.columnMergeTitleCountMap["get"](_0x7e4a9d) ?? [];
              (_0x3ba9b9.push(..._0x59a1dc),
                _0x487631.columnMergeTitleCountMap["set"](
                  _0x7e4a9d,
                  _0x3ba9b9,
                ));
            },
          ),
          (_0x487631.isMatchContinue = true));
      }
      let _0x112368 = [];
      for (let _0x2b3418 of _0x479c72)
        (!_0x2b3418.isMatchContinue && _0x2b3418.isMatchEnd) ||
          (_0x112368.push(_0x2b3418),
          (_0x2b3418.isMatchContinue = false),
          (_0x2b3418.isMatchEnd = false));
      (_0x112368.push(..._0x346c19), (_0x479c72 = _0x112368));
    }
    _0x5508d8.push(..._0x479c72);
    let _0x354b8d = 0;
    for (let _0x3c157c of _0x5508d8) {
      let _0x959246 =
        _0x3c157c.range["endRow"] - _0x3c157c.range["startRow"] + 1;
      _0x3c157c.range["endColumn"] - _0x3c157c.range["startColumn"] + 1 > 0 &&
        _0x959246 > 1 &&
        _0x354b8d++;
    }
    if (_0x354b8d === 0) continue;
    let _0x44851a = [],
      _0x158097 = D(6, _0x5508d8.length),
      _0x2072d7 = 0;
    for (let _0x95fb61 of _0x5508d8) {
      let _0xd9a8f7 =
          _0x95fb61.range["endRow"] - _0x95fb61.range["startRow"] + 1,
        _0xd967be =
          _0x95fb61.range["endColumn"] - _0x95fb61.range["startColumn"] + 1,
        _0x1a703f = false;
      for (let _0x1313fc of _0x5dd9f3.getMergeData())
        if (oe(_0x95fb61.range, _0x1313fc)) {
          _0x1a703f = true;
          break;
        }
      if (_0x1a703f) continue;
      let _0x21a3ef = true;
      for (let _0x4a301d of _0x5508d8)
        if (_0x4a301d !== _0x95fb61 && se(_0x95fb61, _0x4a301d)) {
          _0x21a3ef = false;
          break;
        }
      _0x21a3ef &&
        (_0xd967be <= 0 ||
          _0xd9a8f7 <= 1 ||
          ((_0x95fb61.id = _0x158097[_0x2072d7++]), _0x44851a.push(_0x95fb61)));
    }
    _0x566b66[_0x5c6b6d] = _0x44851a;
  }
  return _0x566b66;
}
function ae(_0x3cd85e, _0x33b115, _0x2ad097) {
  let _0x153e75 = ie(_0x3cd85e, _0x33b115);
  return (
    F(_0x153e75, _0x3cd85e, _0x33b115),
    U(I(_0x153e75, _0x3cd85e), _0x3cd85e, _0x33b115, _0x2ad097)
  );
}
function oe(_0x2e6dd2, _0x404aff) {
  return (
    _0x2e6dd2.startRow === _0x404aff.startRow &&
    _0x2e6dd2.endRow === _0x404aff.endRow &&
    _0x2e6dd2.startColumn === _0x404aff.startColumn &&
    _0x2e6dd2.endColumn === _0x404aff.endColumn
  );
}
function se(_0x4550d2, _0x15fdf7) {
  return (
    _0x4550d2.range["startRow"] >= _0x15fdf7.range["startRow"] &&
    _0x4550d2.range["endRow"] <= _0x15fdf7.range["endRow"] &&
    _0x4550d2.range["startColumn"] >= _0x15fdf7.range["startColumn"] &&
    _0x4550d2.range["endColumn"] <= _0x15fdf7.range["endColumn"]
  );
}
function ce(_0x15611e) {
  return (
    "" +
    q(_0x15611e.startColumn) +
    (_0x15611e.startRow + 1) +
    ":" +
    q(_0x15611e.endColumn) +
    (_0x15611e.endRow + 1)
  );
}
function M(_0x477136) {
  if (_0x477136 !== null) {
    if (_0x477136 != null && _0x477136.p) {
      let _0x1b22f1 = _0x477136 == null ? undefined : _0x477136.p["body"];
      if (_0x1b22f1 == null) return;
      let _0x56d14f = _0x1b22f1.dataStream,
        _0x5d862a = _0xe885ef.transform["getPlainText"](_0x56d14f),
        _0x3ab168 = _0x1b22f1.customRanges;
      if (_0x3ab168 && _0x3ab168.length > 0) {
        var _0x2be81e;
        let _0x5c0512 = _0x3ab168[0],
          _0x49bf38 =
            (_0x2be81e = _0x5c0512.properties) == null
              ? undefined
              : _0x2be81e.url;
        if (!_0x49bf38) return _0x5d862a;
        let _0x10ab50 =
            typeof _0x5c0512.startIndex == "number" ? _0x5c0512.startIndex : 0,
          _0x22fcbe =
            typeof _0x5c0512.endIndex == "number"
              ? _0x5c0512.endIndex + 1
              : _0x10ab50 + 1;
        return (
          _0x10ab50 === 0 && _0x22fcbe === 0
            ? (_0x22fcbe = 1)
            : _0x22fcbe <= _0x10ab50 && (_0x22fcbe = _0x10ab50 + 1),
          "[" + _0x56d14f.slice(_0x10ab50, _0x22fcbe) + "](" + _0x49bf38 + ")"
        );
      }
      return _0x5d862a;
    }
    if ((_0x477136 == null ? undefined : _0x477136.v) != null)
      return _0x477136.v;
  }
}
function N(_0x4da9d6) {
  let _0x4c99ee = M(_0x4da9d6);
  if (_0x4c99ee != null) return String(_0x4c99ee);
}
function P(_0x5dc174, _0x16c33b, _0x3440c0) {
  let _0x66a247 = _0x3440c0.getCell(_0x5dc174, _0x16c33b);
  if (_0x66a247 != null) {
    let _0x45e0e5 = N(_0x66a247);
    if (_0x45e0e5 != null && _0x45e0e5.length > 0) return _0x45e0e5;
  }
  let _0x16dc59 = A.get(_0x3440c0),
    _0x3c22c9 = _0x16dc59 == null ? undefined : _0x16dc59.mergeRTree,
    _0x4eba08 = _0x16dc59 == null ? undefined : _0x16dc59.mergeRangeMap,
    _0x4fcde4 = _0x3440c0.getUnitId(),
    _0x39d9f9 = _0x3440c0.getSheetId(),
    _0x3f6b38 = {
      range: {
        startRow: _0x5dc174,
        endRow: _0x5dc174,
        startColumn: _0x16c33b,
        endColumn: _0x16c33b,
      },
      unitId: _0x4fcde4,
      sheetId: _0x39d9f9,
    },
    _0xbf1186 =
      (_0x3c22c9 == null ? undefined : _0x3c22c9.bulkSearch([_0x3f6b38])) ||
      new Map();
  if (_0xbf1186.size === 0 || !_0x4eba08) return null;
  let _0x2acf54 = _0xbf1186.keys().next().value,
    _0x5bc206 = _0x4eba08.get(_0x2acf54);
  if (!_0x5bc206) return null;
  let _0x3da042 = _0x3440c0.getCell(
    _0x5bc206.range["startRow"],
    _0x5bc206.range["startColumn"],
  );
  return _0x3da042 == null ? null : N(_0x3da042);
}
function F(_0x3ad76d, _0x444693, _0xd8b9b2) {
  let _0x1fb675 = _0x444693.getSheets(),
    _0x5b2c32 = _0xd8b9b2.get(_0x5ec3ae),
    _0x2191f2 = _0x444693.getUnitId();
  for (let _0x3cdce6 of _0x1fb675) {
    let _0x22341b = _0x3cdce6.getSheetId(),
      _0x45ab73 = _0x5b2c32.getTablesBySubunitId(_0x2191f2, _0x22341b);
    if (!_0x45ab73) continue;
    let _0x2f8ea4 = _0x45ab73.map((_0x5e2bed) => _0x5e2bed.toJSON());
    for (let _0x3021f7 of _0x2f8ea4) {
      let {
          startRow: _0x3d8d60,
          endRow: _0x41cda5,
          startColumn: _0x1825a8,
          endColumn: _0xa20cce,
        } = _0x3021f7.range,
        _0x4d6952 = new O({
          id: _0x3021f7.id,
          sheetId: _0x22341b,
          range: {
            startRow: _0x3d8d60,
            endRow: _0x41cda5,
            startColumn: _0x1825a8,
            endColumn: _0xa20cce,
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
      (_0x3ad76d[_0x22341b] || (_0x3ad76d[_0x22341b] = []),
        _0x3ad76d[_0x22341b].push(_0x4d6952));
    }
  }
}
function I(_0x385062, _0xc79e5c) {
  let _0x4093f3 = {};
  for (let [_0xcea9cb, _0x283b6b] of Object.entries(_0x385062)) {
    var _0x10d9e8;
    let _0x49774f = _0x283b6b,
      _0x174246 = false,
      _0x4338e8 = _0xc79e5c.getSheetBySheetId(_0xcea9cb);
    if (_0x4338e8) {
      for (let _0x18b64c = 0; _0x18b64c < _0x49774f.length; _0x18b64c++) {
        let _0x1ad8f9 = _0x49774f[_0x18b64c],
          {
            startRow: _0x540032,
            endRow: _0x2329a4,
            startColumn: _0xb3af65,
            endColumn: _0x4208ef,
          } = _0x1ad8f9.range,
          _0x24987a = R(_0x1ad8f9, _0x4338e8, _0xc79e5c),
          _0x233e24 = L(_0x540032, _0x2329a4, _0x1ad8f9),
          _0x532cd9 = 1,
          _0x138d9a = _0x540032 + _0x233e24,
          _0x2495e8 = 0,
          _0x535fc1 = 0;
        for (let _0x1e930f = _0xb3af65; _0x1e930f <= _0x4208ef; _0x1e930f++) {
          let _0x280520 = _0x4338e8.getCell(_0x138d9a, _0x1e930f);
          if (!_0x280520) continue;
          let _0x183641 = N(_0x280520);
          _0x183641 != null &&
            (_0x183641 !== "" && _0x535fc1++, K(_0x183641) && _0x2495e8++);
        }
        if (
          (_0x535fc1 > 0 &&
            _0x2495e8 / Math.max(_0x535fc1, 1) > 0.03 &&
            (_0x532cd9 = 0),
          (_0x1ad8f9.mergeRowTitleCount = _0x233e24),
          (_0x1ad8f9.rowTitleCount = _0x532cd9 + _0x233e24),
          _0x1ad8f9.range["endRow"] -
            _0x1ad8f9.range["startRow"] +
            1 -
            _0x1ad8f9.rowTitleCount <=
            1)
        ) {
          (console.warn(
            "skip small table, idx:" +
              _0x18b64c +
              ", rangeName:" +
              ce(_0x1ad8f9.range),
          ),
            _0x49774f.splice(_0x18b64c, 1),
            _0x18b64c--,
            (_0x174246 = true));
          continue;
        }
        let _0x31a830 = new Map(),
          _0x1e20e2 = 0,
          _0x20d26b = D(4, _0x4208ef - _0xb3af65 + 1);
        for (let _0x2eb2d8 = _0xb3af65; _0x2eb2d8 <= _0x4208ef; _0x2eb2d8++) {
          let _0x5f2e20 = "",
            _0x3bdce1 = new Set(),
            _0xcf4b36 = false,
            _0x32a51e = _0x540032 + _0x1ad8f9.rowTitleCount - 1,
            _0x3ff2e2 = _0x540032;
          _0x24987a !== "" && (_0x3ff2e2 = _0x540032 + 1);
          for (let _0x196fc9 = _0x3ff2e2; _0x196fc9 <= _0x32a51e; _0x196fc9++) {
            let _0x6343aa = P(_0x196fc9, _0x2eb2d8, _0x4338e8);
            _0x6343aa != null &&
              (_0x196fc9 === _0x32a51e && (_0x5f2e20 = _0x6343aa),
              _0x3bdce1.add(_0x6343aa));
          }
          let _0x24206e = [..._0x3bdce1].join(","),
            _0x4c5429 = _0x24206e;
          _0x31a830.has(_0x4c5429)
            ? (_0xcf4b36 = true)
            : _0x31a830.set(_0x4c5429, true);
          let _0x49f7bd = _0x32a51e + 1,
            _0x210aee = _0x32a51e + 20,
            _0x74b63e = 0,
            _0x2d52e2 = false,
            _0x2fdb30 = false;
          if (
            (_0x210aee > _0x2329a4 && (_0x210aee = _0x2329a4),
            _0x49f7bd < _0x2329a4)
          ) {
            let _0x415a73 = "";
            for (
              let _0x4480f8 = _0x49f7bd;
              _0x4480f8 <= _0x210aee;
              _0x4480f8++
            ) {
              let _0x339c1d = _0x4338e8.getCell(_0x4480f8, _0x2eb2d8);
              if (!_0x339c1d) continue;
              let _0x203450 = N(_0x339c1d);
              _0x203450 != null &&
                (K(_0x203450) || (_0x415a73 += _0x203450),
                ue(_0x203450) && _0x74b63e++);
            }
            (_0x74b63e > Math.floor((_0x210aee - _0x49f7bd + 1) / 2) &&
              (_0x2fdb30 = true),
              de(_0x415a73) / Math.max(_0x210aee - _0x49f7bd + 1, 1) > 15 &&
                !_0x2fdb30 &&
                (_0x2d52e2 = true));
          }
          _0x1ad8f9.columns["push"]({
            id: _0x20d26b[_0x1e20e2++],
            Name: _0x5f2e20,
            Type: "",
            Description: _0x24206e,
            isCoded: false,
            isMeasure: true,
            isOpinionText: false,
            isBigText: _0x2d52e2,
            isLink: _0x2fdb30,
            isTitleRepeat: _0xcf4b36,
            isUnique: false,
            links: [],
          });
        }
        z(_0x1ad8f9, _0xc79e5c);
      }
      (_0x174246 && (_0x385062[_0xcea9cb] = _0x49774f),
        _0x49774f.length === 0 && delete _0x385062[_0xcea9cb],
        (_0x4093f3[_0xcea9cb] =
          ((_0x10d9e8 = _0x385062[_0xcea9cb]) == null
            ? undefined
            : _0x10d9e8.length) ?? 0));
    }
  }
  return _0x385062;
}
function L(_0x205923, _0x2ca2e6, _0x39567d) {
  function _0x59d0d1(_0x5c0bae) {
    if (_0x5c0bae.length === 0) return 0;
    _0x5c0bae.sort((_0x2e27b4, _0xb3cc1f) => _0x2e27b4[0] - _0xb3cc1f[0]);
    let _0x38b7d5 = 0,
      _0x4a75b6 = _0x5c0bae[0][0],
      _0x4a4519 = _0x5c0bae[0][1];
    for (let _0x726907 = 1; _0x726907 < _0x5c0bae.length; _0x726907++) {
      let [_0x52c376, _0x1156d6] = _0x5c0bae[_0x726907];
      _0x52c376 <= _0x4a4519 + 1
        ? (_0x4a4519 = Math.max(_0x4a4519, _0x1156d6))
        : ((_0x38b7d5 += _0x4a4519 - _0x4a75b6 + 1),
          (_0x4a75b6 = _0x52c376),
          (_0x4a4519 = _0x1156d6));
    }
    return ((_0x38b7d5 += _0x4a4519 - _0x4a75b6 + 1), _0x38b7d5);
  }
  let _0x2eb5ef = _0x39567d.range["startColumn"],
    _0xa939b2 = _0x39567d.range["endColumn"],
    _0x455a2e = _0xa939b2 - _0x2eb5ef + 1,
    _0x28194e = _0x205923 - 1,
    _0x4ee11a = _0x205923 - 1,
    _0x3ed090 = false;
  for (
    let _0x457f9a = _0x205923;
    _0x457f9a <= _0x2ca2e6 && _0x457f9a - _0x205923 < 100;
    _0x457f9a++
  ) {
    let _0x3dc62c = [],
      _0x3a0686 = _0x39567d.rowMergeTitleCountMap["get"](_0x457f9a) ?? [];
    for (let _0x2cbd0e of _0x3a0686) {
      let _0x530f4d = _0x2cbd0e.range["startColumn"],
        _0x1efa72 = _0x2cbd0e.range["endColumn"],
        _0x17eda6 = Math.max(_0x530f4d, _0x2eb5ef),
        _0x27b9fe = Math.min(_0x1efa72, _0xa939b2);
      _0x17eda6 <= _0x27b9fe && _0x3dc62c.push([_0x17eda6, _0x27b9fe]);
    }
    _0x39567d.columnMergeTitleCountMap["forEach"]((_0x1fa4c7) => {
      for (let _0x3c1948 of _0x1fa4c7) {
        let _0xcc9051 = _0x3c1948.range["startRow"],
          _0x357390 = _0x3c1948.range["endRow"];
        if (_0xcc9051 <= _0x457f9a && _0x457f9a <= _0x357390) {
          let _0x5e22a3 = _0x3c1948.range["startColumn"],
            _0x1214c7 = _0x3c1948.range["endColumn"],
            _0x2ca1a5 = Math.max(_0x5e22a3, _0x2eb5ef),
            _0x235002 = Math.min(_0x1214c7, _0xa939b2);
          _0x2ca1a5 <= _0x235002 && _0x3dc62c.push([_0x2ca1a5, _0x235002]);
        }
      }
    });
    let _0x575caa = _0x59d0d1(_0x3dc62c),
      _0x4c3810 = _0x575caa / Math.max(_0x455a2e, 1);
    (_0x3dc62c.length > 0 && (_0x28194e = _0x457f9a),
      _0x575caa > 0 && _0x4c3810 >= 0.75 && !_0x3ed090
        ? (_0x4ee11a = _0x457f9a)
        : _0x3dc62c.length > 0 && (_0x3ed090 = true));
  }
  return _0x28194e === _0x2ca2e6 || _0x28194e - _0x205923 === 100
    ? _0x4ee11a - _0x205923 + 1
    : _0x28194e - _0x205923 + 1;
}
function R(_0x236bde, _0x28c327, _0x50f640) {
  if (
    ((_0x236bde.description += _0x28c327.getName() + ",\x20" + _0x50f640.name),
    _0x236bde.name && _0x236bde.name !== "")
  )
    return _0x236bde.name;
  let _0x55e4a6 = _0x236bde.range["startRow"],
    _0x2c66e2 = _0x236bde.range["startColumn"],
    _0x5634b4 = _0x236bde.range["endColumn"],
    _0x3dd27f = _0x236bde.rowMergeTitleCountMap["get"](_0x55e4a6);
  if (_0x3dd27f && _0x3dd27f.length > 0)
    for (let _0xb5d74c of _0x3dd27f) {
      let _0x5c8e28 = _0xb5d74c.range,
        _0x25b8ce = _0x5c8e28.startColumn,
        _0x205dd3 = _0x5c8e28.endColumn;
      if (_0x25b8ce <= _0x2c66e2 + 3 && _0x205dd3 >= _0x5634b4 - 3) {
        let _0x51969f = _0x28c327.getCell(_0x55e4a6, _0x25b8ce);
        if (!_0x51969f) return "";
        let _0x22142e = N(_0x51969f);
        return _0x22142e == null || _0x22142e === ""
          ? ""
          : ((_0x236bde.name = _0x22142e), _0x22142e);
      }
    }
  return "";
}
function z(_0x49185e, _0x30e503) {
  let _0x3154b9 = {};
  _0x30e503.getStyles().each((_0xc9039f) => {
    let [_0x164153, _0x5c0cc9] = _0xc9039f;
    return (
      !_0x164153 ||
        !_0x5c0cc9 ||
        (_0x5c0cc9.n &&
          typeof _0x5c0cc9.n["pattern"] == "string" &&
          /[YyMDd]/["test"](_0x5c0cc9.n["pattern"]) &&
          (_0x3154b9[_0x164153] = true)),
      true
    );
  });
  let _0x3aa836 = _0x49185e.range["startRow"],
    _0x2c4644 = _0x49185e.range["endRow"],
    _0x2b4916 = _0x49185e.rowTitleCount,
    _0x13fa68 = _0x49185e.sheetId,
    _0x177391 = _0x30e503.getSheetBySheetId(_0x13fa68);
  if (!_0x177391) return;
  let _0x455500 = _0x2c4644 - _0x3aa836 + 1 - _0x2b4916;
  if (_0x455500 <= 1) {
    console.warn("skip small table");
    return;
  }
  let _0x5034bc = [];
  for (
    let _0x1b396c = 0;
    _0x1b396c <
    _0x49185e.range["endColumn"] - _0x49185e.range["startColumn"] + 1;
    _0x1b396c++
  )
    _0x5034bc.push(new te(_0x3154b9));
  let _0x35a286 = Math.log10(Math.max(_0x455500, 1));
  for (let _0x467975 = 0; ; _0x467975++) {
    let _0x267f91 = _0x467975,
      _0xf4f75 =
        Math.floor(
          _0x267f91 + 0.00001 * _0x267f91 ** 2.7 * _0x35a286 * _0x35a286,
        ) +
        _0x3aa836 +
        _0x2b4916;
    if (_0xf4f75 > _0x2c4644) break;
    for (
      let _0x519d37 = _0x49185e.range["startColumn"];
      _0x519d37 <= _0x49185e.range["endColumn"];
      _0x519d37++
    ) {
      let _0x4f77ac = _0x177391.getCell(_0xf4f75, _0x519d37);
      _0x4f77ac &&
        _0x5034bc[_0x519d37 - _0x49185e.range["startColumn"]].Match(_0x4f77ac);
    }
  }
  let _0x14bcf9 = [];
  for (
    let _0x495694 = 0;
    _0x495694 < _0x49185e.columns["length"];
    _0x495694++
  ) {
    let [_0x247ebe, _0x511c48] = _0x5034bc[_0x495694].Best();
    ((_0x49185e.columns[_0x495694].Type = _0x247ebe),
      _0x14bcf9.push(_0x247ebe));
  }
}
function B(_0xa6c649) {
  let _0x3e8577 = [];
  for (let _0x1773a9 of _0xa6c649.links)
    _0x3e8577.push({
      tableId: _0x1773a9.tableId,
      columnId: _0x1773a9.columnId,
      linkType: _0x1773a9.linkType,
    });
  return _0x3e8577;
}
function V(_0x3e09b0) {
  return _0x3e09b0.rowTitleCount === 1;
}
function H(_0x42c0d4, _0x1963a9, _0x3244ce, _0x40c3a6, _0x1c335d) {
  let _0x55154a = _0x40c3a6.get(_0x5ec3ae),
    _0x19dfd3 = _0x1963a9.getUnitId(),
    _0x572c13 = _0x42c0d4.sheetId;
  if (_0x55154a.getTablesBySubunitId(_0x19dfd3, _0x572c13)) {
    for (let _0x185e5d of _0x3244ce)
      if (_0x185e5d.id === _0x42c0d4.id) {
        ((_0x185e5d.name = _0x42c0d4.name),
          (_0x185e5d.meta = {}),
          (_0x185e5d.meta["description"] = _0x42c0d4.description),
          (_0x185e5d.meta["rowTitleCount"] = _0x42c0d4.rowTitleCount),
          (_0x185e5d.meta["mergeRowTitleCount"] = _0x42c0d4.mergeRowTitleCount),
          (_0x185e5d.meta["isTimeSeries"] = _0x42c0d4.isTimeSeries));
        for (
          let _0x44ee9c = 0;
          _0x44ee9c < _0x42c0d4.columns["length"];
          _0x44ee9c++
        ) {
          let _0x541e2d = _0x42c0d4.columns[_0x44ee9c],
            _0x701b52 = _0x185e5d.columns[_0x44ee9c];
          ((_0x701b52.displayName = _0x541e2d.Name),
            (_0x701b52.dataType = _0x541e2d.Type),
            (_0x701b52.meta = {}),
            (_0x701b52.meta["description"] = _0x541e2d.Description),
            (_0x701b52.meta["isCoded"] = _0x541e2d.isCoded),
            (_0x701b52.meta["isMeasure"] = _0x541e2d.isMeasure),
            (_0x701b52.meta["isOpinionText"] = _0x541e2d.isOpinionText),
            (_0x701b52.meta["isBigText"] = _0x541e2d.isBigText),
            (_0x701b52.meta["isLink"] = _0x541e2d.isLink),
            (_0x701b52.meta["isTitleRepeat"] = _0x541e2d.isTitleRepeat),
            (_0x701b52.meta["isUnique"] = _0x541e2d.isUnique),
            (_0x701b52.meta["links"] = B(_0x541e2d)));
        }
        G(_0x185e5d, _0x572c13, _0x1963a9, _0x1c335d);
      }
    A.clear();
  }
}
function U(_0x2cd572, _0x5ea6ae, _0x4e14b3, _0x10ac8d) {
  let _0x5a6401 = _0x4e14b3.get(_0x5ec3ae),
    _0x32c819 = _0x5ea6ae.getUnitId(),
    _0x2fdc0a = {};
  for (let [_0x3fe2f, _0x375fe6] of Object.entries(_0x2cd572)) {
    let _0x2275a7 = _0x5a6401.getTablesBySubunitId(_0x32c819, _0x3fe2f),
      _0x1091c2 =
        (_0x2275a7 == null
          ? undefined
          : _0x2275a7.map((_0x58343e) => _0x58343e.toJSON())) || [];
    for (let _0x1f9307 of _0x375fe6) {
      if (_0x1f9307.isUpdateTable) {
        H(_0x1f9307, _0x5ea6ae, _0x1091c2, _0x4e14b3, _0x10ac8d);
        continue;
      }
      let _0xa2d1ac = {
        id: _0x1f9307.id,
        range: {
          startRow: _0x1f9307.range["startRow"] + _0x1f9307.mergeRowTitleCount,
          endRow: _0x1f9307.range["endRow"],
          startColumn: _0x1f9307.range["startColumn"],
          endColumn: _0x1f9307.range["endColumn"],
        },
        name: _0x1f9307.name,
        meta: {},
        options: { showHeader: V(_0x1f9307), showFooter: false },
        columns: [],
        filters: {},
      };
      ((_0xa2d1ac.meta["description"] = _0x1f9307.description),
        (_0xa2d1ac.meta["rowTitleCount"] = _0x1f9307.rowTitleCount),
        (_0xa2d1ac.meta["mergeRowTitleCount"] = _0x1f9307.mergeRowTitleCount),
        (_0xa2d1ac.meta["isTimeSeries"] = _0x1f9307.isTimeSeries));
      let _0x409721 = _0x1f9307.range["startColumn"];
      for (
        let _0xf2e06f = 0;
        _0xf2e06f < _0x1f9307.columns["length"];
        _0xf2e06f++
      ) {
        let _0x126c0c = _0x1f9307.columns[_0xf2e06f],
          _0x5c693e = {
            id: _0x126c0c.id,
            displayName: _0x126c0c.Name || "column_" + q(_0x409721 + _0xf2e06f),
            dataType: _0x126c0c.Type,
            meta: {},
            formula: "",
            style: {},
          };
        ((_0x5c693e.meta["description"] = _0x126c0c.Description),
          (_0x5c693e.meta["isCoded"] = _0x126c0c.isCoded),
          (_0x5c693e.meta["isMeasure"] = _0x126c0c.isMeasure),
          (_0x5c693e.meta["isOpinionText"] = _0x126c0c.isOpinionText),
          (_0x5c693e.meta["isBigText"] = _0x126c0c.isBigText),
          (_0x5c693e.meta["isLink"] = _0x126c0c.isLink),
          (_0x5c693e.meta["isTitleRepeat"] = _0x126c0c.isTitleRepeat),
          (_0x5c693e.meta["isUnique"] = _0x126c0c.isUnique),
          (_0x5c693e.meta["links"] = B(_0x126c0c)),
          _0xa2d1ac.columns["push"](_0x5c693e));
      }
      (G(_0xa2d1ac, _0x3fe2f, _0x5ea6ae, _0x10ac8d), _0x1091c2.push(_0xa2d1ac));
    }
    _0x2fdc0a[_0x3fe2f] = _0x1091c2;
  }
  for (let _0x436be1 of Object.keys(_0x2cd572))
    _0x2cd572[_0x436be1].forEach((_0x11ddb4) => {
      _0x11ddb4.dispose();
    });
  return _0x2fdc0a;
}
function W(_0x3289df, _0x46a8c9, _0x36913a = 5) {
  if (!Array.isArray(_0x3289df) || _0x3289df.length === 0) return [];
  let _0x2bdabe = Math.min(_0x46a8c9, _0x3289df.length),
    _0x262684 = Math.min(_0x2bdabe + _0x36913a, _0x3289df.length);
  return _0x3289df.slice(_0x2bdabe, _0x262684);
}
function G(_0x45aadf, _0x34cccf, _0x185332, _0x41d262) {
  let _0x2671f9 = _0x185332.getSheetBySheetId(_0x34cccf);
  if (!_0x2671f9) return;
  let _0x183137 = _0x45aadf.range,
    _0x428415 = le(_0x2671f9, _0x183137);
  _0x41d262 === "sample"
    ? (_0x45aadf.data = JSON.stringify(W(_0x428415, 1, 5)))
    : _0x41d262 === "all" &&
      (_0x45aadf.data = JSON.stringify(W(_0x428415, 1, _0x428415.length)));
}
function le(_0x50d4a5, _0x344c03) {
  let {
      startRow: _0x15c41b,
      endRow: _0x36c8aa,
      startColumn: _0x55a40d,
      endColumn: _0x3417e9,
    } = _0x344c03,
    _0x7279c2 = [],
    _0x1603ea = A.get(_0x50d4a5),
    _0x48ab95 = _0x1603ea == null ? undefined : _0x1603ea.mergeRTree,
    _0x2c040b = _0x1603ea == null ? undefined : _0x1603ea.mergeRangeMap,
    _0x3e7379 = _0x50d4a5.getUnitId(),
    _0x13a52 = _0x50d4a5.getSheetId();
  for (let _0x3a15bd = _0x15c41b; _0x3a15bd <= _0x36c8aa; _0x3a15bd++) {
    let _0x29d63a = [];
    for (let _0x178572 = _0x55a40d; _0x178572 <= _0x3417e9; _0x178572++) {
      let _0x38a5ec = _0x50d4a5.getCell(_0x3a15bd, _0x178572),
        _0x268df0 = _0x38a5ec ? M(_0x38a5ec) : undefined;
      if (_0x268df0 == null || _0x268df0 === "") {
        let _0x34f2bd = {
            range: {
              startRow: _0x3a15bd,
              endRow: _0x3a15bd,
              startColumn: _0x178572,
              endColumn: _0x178572,
            },
            unitId: _0x3e7379,
            sheetId: _0x13a52,
          },
          _0x2ed917 =
            (_0x48ab95 == null
              ? undefined
              : _0x48ab95.bulkSearch([_0x34f2bd])) || new Map();
        if (_0x2ed917.size > 0 && _0x2c040b) {
          let _0x132c21 = _0x2ed917.keys().next().value,
            _0x47b208 = _0x2c040b.get(_0x132c21);
          if (!_0x47b208) continue;
          let _0x1dfe64 = _0x50d4a5.getCell(
            _0x47b208.range["startRow"],
            _0x47b208.range["startColumn"],
          );
          _0x1dfe64 && (_0x268df0 = M(_0x1dfe64));
        }
      }
      _0x29d63a.push(_0x268df0 ?? "");
    }
    _0x7279c2.push(_0x29d63a);
  }
  return _0x7279c2;
}
function ue(_0x403ac1) {
  return /https?:\/\/|www\./i.test(_0x403ac1);
}
function de(_0x21786a) {
  return Array.from(_0x21786a).length;
}
function K(_0x2d4c92) {
  return _0x2d4c92
    ? /^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d+)?$/i.test(_0x2d4c92.trim())
    : false;
}
function q(_0x13122b) {
  let _0x1a3643 = "",
    _0x2f8174 = _0x13122b + 1;
  for (; _0x2f8174 > 0;) {
    let _0x1dec87 = (_0x2f8174 - 1) % 26;
    ((_0x1a3643 = String.fromCharCode(65 + _0x1dec87) + _0x1a3643),
      (_0x2f8174 = Math.floor((_0x2f8174 - 1) / 26)));
  }
  return _0x1a3643;
}
function J(_0x27a488, _0x2640db) {
  return function (_0x2cef94, _0x12fcff) {
    _0x2640db(_0x2cef94, _0x12fcff, _0x27a488);
  };
}
function Y(_0x4ba014, _0x426c71, _0x24e0c9, _0x182f16) {
  var _0x4472b2 = arguments.length,
    _0x33cab6 =
      _0x4472b2 < 3
        ? _0x426c71
        : _0x182f16 === null
          ? (_0x182f16 = Object.getOwnPropertyDescriptor(_0x426c71, _0x24e0c9))
          : _0x182f16,
    _0x44f945;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x33cab6 = Reflect.decorate(_0x4ba014, _0x426c71, _0x24e0c9, _0x182f16);
  else {
    for (var _0x29e6b2 = _0x4ba014.length - 1; _0x29e6b2 >= 0; _0x29e6b2--)
      (_0x44f945 = _0x4ba014[_0x29e6b2]) &&
        (_0x33cab6 =
          (_0x4472b2 < 3
            ? _0x44f945(_0x33cab6)
            : _0x4472b2 > 3
              ? _0x44f945(_0x426c71, _0x24e0c9, _0x33cab6)
              : _0x44f945(_0x426c71, _0x24e0c9)) || _0x33cab6);
  }
  return (
    _0x4472b2 > 3 &&
      _0x33cab6 &&
      Object.defineProperty(_0x426c71, _0x24e0c9, _0x33cab6),
    _0x33cab6
  );
}
let X = class extends _0x403237 {
  constructor(_0x3d9071) {
    (super(), (this._injector = _0x3d9071));
  }
  getAllTableJson(_0x4ce777, _0x1abf70) {
    return ae(_0x4ce777, this._injector, _0x1abf70);
  }
};
X = Y([J(0, _0x2f0362(_0x159849))], X);
var Z = "@univerjs-pro/range-preprocess",
  fe = "1.0.0-insiders.20260907-70fc579";
const Q = {};
let $ = class extends _0x2f3893 {
  constructor(_0x5a4d4e = Q, _0xd9397, _0x4c040d) {
    (super(),
      (this._config = _0x5a4d4e),
      (this._injector = _0xd9397),
      (this._configService = _0x4c040d));
    let { ..._0x1b33c4 } = _0x568b4f({}, Q, this._config);
    this._configService["setConfig"]("range-preprocess.config", _0x1b33c4);
  }
  onStarting() {
    let _0x338c99 = [[X]];
    _0x7b9f6(this._injector, _0x338c99);
  }
  onReady() {}
};
(_($, "pluginName", "UNIVER_RANGE_PREPROCESS_PLUGIN"),
  _($, "packageName", Z),
  _($, "version", fe),
  ($ = Y(
    [_0x8a5c5a(_0x5baeb8), J(1, _0x2f0362(_0x159849)), J(2, _0x268bfe)],
    $,
  )));
export { X as RangePreprocessController, $ as UniverRangePreprocessPlugin };
