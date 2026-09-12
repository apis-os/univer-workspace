Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/engine-chart"),
  t = require("@univerjs/core"),
  n = require("@univerjs/sheets-drawing"),
  r = require("@univerjs/sheets"),
  i = require("rxjs"),
  a = require("@univerjs/engine-formula"),
  o = require("@univerjs/engine-render"),
  s = require("@univerjs-pro/license");
const c = new Set([
  e.ChartTypeBits["Line"],
  e.ChartTypeBits["Column"],
  e.ChartTypeBits["ColumnStacked"],
  e.ChartTypeBits["ColumnPercentStacked"],
  e.ChartTypeBits["Bar"],
  e.ChartTypeBits["BarStacked"],
  e.ChartTypeBits["BarPercentStacked"],
  e.ChartTypeBits["Area"],
  e.ChartTypeBits["AreaStacked"],
  e.ChartTypeBits["AreaPercentStacked"],
  e.ChartTypeBits["Combination"],
  e.ChartTypeBits["Waterfall"],
]);
function l(_0x2b0624) {
  if (_0x2b0624.length === 0) return [];
  let _0x219272 = [_0x2b0624[0]];
  for (
    let _0x4e7679 = 1;
    _0x4e7679 < _0x2b0624.length &&
    _0x2b0624[_0x4e7679] === _0x2b0624[_0x4e7679 - 1] + 1;
    _0x4e7679++
  )
    _0x219272.push(_0x2b0624[_0x4e7679]);
  return _0x219272;
}
function u(_0x4218a0) {
  return (
    _0x4218a0.length >= 2 &&
    _0x4218a0.every(
      (_0x7c86aa, _0x29dda6) =>
        _0x29dda6 === 0 || _0x7c86aa === _0x4218a0[_0x29dda6 - 1] + 1,
    )
  );
}
function d(_0x4bd42b, _0x4e8eba, _0x2d061f) {
  return _0x2d061f ? [_0x4e8eba[0]] : l(_0x4bd42b);
}
function f(_0x37d8f6, _0x23b3dd) {
  let _0x585484 = (0, e.generateChartContext)(_0x37d8f6),
    _0x351900 = (0, e.canonicalizeChartContext)(_0x23b3dd.context ?? {}),
    _0x38a80d = _0x585484.categoryResourceIndexes ?? [],
    _0x328170 = _0x585484.seriesResourceIndexes ?? [],
    _0x351e04 =
      _0x351900.categoryIndexes === undefined &&
      _0x351900.seriesIndexes === undefined &&
      e.chartBitsUtils["baseOn"](
        _0x23b3dd.chartType,
        e.ChartTypeBits["Scatter"],
      ) &&
      _0x38a80d.length === 0 &&
      _0x328170.length >= 2,
    _0x26d06f =
      _0x351900.categoryIndexes === undefined
        ? d(_0x38a80d, _0x328170, _0x351e04)
        : [..._0x351900.categoryIndexes],
    _0x17a02f = new Set(_0x26d06f),
    _0x52b9e1 =
      _0x351900.seriesIndexes === undefined
        ? _0x328170.filter((_0x1813d0) => !_0x17a02f.has(_0x1813d0))
        : [..._0x351900.seriesIndexes],
    _0x34f8b4 =
      _0x351900.multiLevelCategoryAxis ??
      (c.has(_0x23b3dd.chartType) && u(_0x26d06f));
  return {
    ..._0x351900,
    categoryIndexes: _0x26d06f,
    multiLevelCategoryAxis: _0x34f8b4,
    seriesIndexes: _0x52b9e1,
  };
}
function p(_0x2faee8, _0x38e09f) {
  return (0, e.generateChartContext)(_0x2faee8, _0x38e09f, false);
}
function m(_0x344625, _0x28aaa4, _0x11458f, _0x1bcc80) {
  let _0x10819e =
    _0x11458f === undefined
      ? undefined
      : {
          categoryIndexes: _0x11458f.categoryIndexes,
          seriesIndexes: _0x11458f.seriesIndexes,
        };
  return f(_0x344625, {
    chartType: _0x28aaa4,
    ...(_0x11458f === undefined && _0x1bcc80 === undefined
      ? {}
      : { context: { ..._0x10819e, ..._0x1bcc80 } }),
  });
}
function h(_0xe355c7, _0x1f413b, _0x5cbd88, _0x82f968) {
  let {
      headers: _0x126c00,
      categoryIndexes: _0x471a5a,
      categoryResourceIndexes: _0x2c092f,
      categoryType: _0x2488aa,
      seriesIndexes: _0x2bf23d,
      seriesResourceIndexes: _0x1ebad9,
      ..._0x377f95
    } = _0x5cbd88,
    _0x57fde5 = m(_0xe355c7, _0x1f413b, _0x82f968, _0x377f95),
    _0x5bd44d =
      _0x377f95.multiLevelCategoryAxis ??
      (_0x57fde5.multiLevelCategoryAxis ? true : undefined);
  return p(_0xe355c7, {
    ..._0x377f95,
    categoryIndexes: _0x57fde5.categoryIndexes,
    seriesIndexes: _0x57fde5.seriesIndexes,
    ...(_0x5bd44d === undefined ? {} : { multiLevelCategoryAxis: _0x5bd44d }),
  });
}
function g(_0x1b5f98, _0x1e993f, _0x223ff3) {
  return (0, e.reconcileChartContext)(_0x1b5f98, _0x223ff3, _0x1e993f);
}
function _(_0x17dfb7) {
  let {
      mergeRanges: _0x56df6c,
      worksheetRows: _0x4adbe2,
      worksheetColumns: _0x5b0134,
      transpose: _0x526b45,
      fieldIndexOffset: _0xb1be54 = 0,
    } = _0x17dfb7,
    _0x52bf5c = new Map(
      _0x4adbe2.map((_0x268bf4, _0x3486ad) => [_0x268bf4, _0x3486ad]),
    ),
    _0x2325e7 = new Map(
      _0x5b0134.map((_0x458dc9, _0x1f468b) => [_0x458dc9, _0x1f468b]),
    ),
    _0x376191 = [];
  for (let _0x2355d3 of _0x56df6c) {
    let _0x4c6ffa = _0x52bf5c.get(_0x2355d3.startRow),
      _0x3a3a4f = _0x2325e7.get(_0x2355d3.startColumn);
    if (_0x4c6ffa === undefined || _0x3a3a4f === undefined) continue;
    let _0x5a2231 = _0x4adbe2.filter(
        (_0x4a8f70) =>
          _0x4a8f70 >= _0x2355d3.startRow && _0x4a8f70 <= _0x2355d3.endRow,
      ).length,
      _0x919702 = _0x5b0134.filter(
        (_0x20fded) =>
          _0x20fded >= _0x2355d3.startColumn &&
          _0x20fded <= _0x2355d3.endColumn,
      ).length,
      _0x7d01cb = _0x526b45 ? _0x5a2231 : _0x919702,
      _0x53b244 = _0x526b45 ? _0x919702 : _0x5a2231;
    if (_0x7d01cb !== 1 || _0x53b244 < 2) continue;
    let _0x5b26fb = (_0x526b45 ? _0x4c6ffa : _0x3a3a4f) + _0xb1be54,
      _0x28a003 = _0x526b45 ? _0x3a3a4f : _0x4c6ffa;
    _0x376191.push({
      fieldIndex: _0x5b26fb,
      startIndex: _0x28a003,
      endIndex: _0x28a003 + _0x53b244 - 1,
    });
  }
  return _0x376191.sort(
    (_0x134fce, _0x387e1c) =>
      _0x134fce.fieldIndex - _0x387e1c.fieldIndex ||
      _0x134fce.startIndex - _0x387e1c.startIndex,
  );
}
const v = (_0x2d8586) => {
  var _0x4eba51;
  return (
    ((_0x4eba51 = _0x2d8586.body) == null
      ? undefined
      : _0x4eba51.dataStream["replace"](/\r\n$/, "")) || ""
  );
};
function y(
  _0x4db44b,
  _0x2d7aaa,
  _0x588fff,
  _0x208cd2,
  _0x53185a,
  _0x41cc17,
  _0x11e99b,
  _0x145e53,
) {
  let {
      startRow: _0x3c7453,
      startColumn: _0x1c5efc,
      endColumn: _0x57a2df,
      endRow: _0x439113,
    } = _0x4db44b,
    _0x5c7150 = {};
  if (_0x3c7453 === _0x439113)
    for (let _0x305fbe = _0x1c5efc; _0x305fbe <= _0x57a2df; _0x305fbe++) {
      let _0x3a8d29 = b(
          _0x2d7aaa,
          _0x3c7453,
          _0x305fbe,
          _0x11e99b,
          _0x5c7150,
          _0x145e53,
        ),
        _0x4ccb0a = _0x305fbe - _0x1c5efc;
      (_0x208cd2.setValue(_0x588fff, _0x4ccb0a, _0x3a8d29.value),
        _0x53185a.setValue(_0x588fff, _0x4ccb0a, _0x3a8d29.sourceType),
        _0x41cc17.setValue(_0x588fff, _0x4ccb0a, _0x3a8d29.label));
    }
  if (_0x1c5efc === _0x57a2df)
    for (let _0x56d74e = _0x3c7453; _0x56d74e <= _0x439113; _0x56d74e++) {
      let _0x55b227 = b(
          _0x2d7aaa,
          _0x56d74e,
          _0x1c5efc,
          _0x11e99b,
          _0x5c7150,
          _0x145e53,
        ),
        _0x4ad40e = _0x56d74e - _0x3c7453;
      (_0x208cd2.setValue(_0x588fff, _0x4ad40e, _0x55b227.value),
        _0x53185a.setValue(_0x588fff, _0x4ad40e, _0x55b227.sourceType),
        _0x41cc17.setValue(_0x588fff, _0x4ad40e, _0x55b227.label));
    }
}
function b(_0x486331, _0x171120, _0x2baf82, _0x2bffd2, _0x5a2a7a, _0x12f4c4) {
  var _0x3602fb;
  let _0x153995 = _0x486331.getCell(_0x171120, _0x2baf82),
    _0x48db78 =
      ((_0x3602fb = _0x486331.getCellRaw) == null
        ? undefined
        : _0x3602fb.call(_0x486331, _0x171120, _0x2baf82)) ?? _0x153995;
  return ee(
    _0x153995,
    _0x2bffd2,
    _0x5a2a7a,
    (_0x48db78 != null && _0x48db78.f) || (_0x48db78 != null && _0x48db78.si)
      ? _0x48db78
      : _0x486331.getCellWithFilteredInterceptors
        ? _0x486331.getCellWithFilteredInterceptors(
            _0x171120,
            _0x2baf82,
            "sheet-chart.source-value",
            (_0x4d7815) =>
              _0x4d7815.priority !== r.InterceptCellContentPriority["NUMFMT"],
          )
        : _0x48db78,
    _0x12f4c4,
  );
}
function ee(_0x542532, _0x5e816e, _0x205ec5, _0x55111f = _0x542532, _0x74b640) {
  if (
    !_0x542532 ||
    (_0x542532.v === undefined && !_0x542532.p) ||
    (_0x542532.v === null && !_0x542532.p)
  )
    return {
      value: null,
      label: "",
      sourceType: e.ChartSourceDataTypeEnum["Null"],
    };
  let { v: _0x1d12b5, p: _0x988a93 } = _0x542532;
  if (_0x988a93) {
    let _0x2f869f = v(_0x988a93);
    return {
      value: _0x2f869f,
      label: _0x2f869f,
      sourceType: e.ChartSourceDataTypeEnum["STRING"],
    };
  }
  let _0x1ef447 = (0, t.getCellValueType)(_0x542532),
    _0x51195f = String(_0x1d12b5);
  if (
    _0x1ef447 === t.CellValueType["STRING"] ||
    _0x1ef447 === t.CellValueType["FORCE_STRING"]
  )
    return {
      value: _0x51195f,
      label: _0x51195f,
      sourceType: e.ChartSourceDataTypeEnum["STRING"],
    };
  if (_0x1ef447 === t.CellValueType["BOOLEAN"]) {
    let _0x4fb752 = !!_0x1d12b5;
    return {
      value: +!!_0x4fb752,
      label: _0x4fb752 ? "TRUE" : "FALSE",
      sourceType: e.ChartSourceDataTypeEnum["BOOLEAN"],
    };
  }
  return _0x1ef447 === t.CellValueType["NUMBER"]
    ? te(_0x542532, _0x55111f, _0x51195f, _0x5e816e, _0x205ec5, _0x74b640)
    : {
        value: _0x51195f,
        label: _0x51195f,
        sourceType: e.ChartSourceDataTypeEnum["STRING"],
      };
}
function te(_0x1ca90f, _0x5caaae, _0x3c3159, _0x13bad3, _0x58f25d, _0x20418c) {
  var _0x2a3de9;
  let { v: _0x22fecf, s: _0x1a0c50 } = _0x1ca90f,
    _0x123ab3 =
      (_0x5caaae == null ? undefined : _0x5caaae.v) !== undefined &&
      _0x5caaae.v !== null
        ? _0x5caaae.v
        : _0x22fecf,
    _0x255829 =
      (_0x2a3de9 = _0x13bad3.get(
        (_0x5caaae == null ? undefined : _0x5caaae.s) ?? _0x1a0c50,
      )) == null || (_0x2a3de9 = _0x2a3de9.n) == null
        ? undefined
        : _0x2a3de9.pattern,
    _0x2acbc8 = typeof _0x123ab3 == "number" ? _0x123ab3 : Number(_0x123ab3),
    _0x3cd620 = Number.isFinite(_0x2acbc8),
    _0x19601d = typeof _0x123ab3 == "string" && _0x3cd620,
    _0x238a73 =
      (_0x5caaae == null ? undefined : _0x5caaae.v) !== undefined &&
      _0x5caaae.v !== null &&
      _0x5caaae.v !== _0x22fecf;
  _0x255829 &&
    !_0x58f25d[_0x255829] &&
    (_0x58f25d[_0x255829] = t.numfmt["getFormatInfo"](_0x255829));
  let _0x10d0e7 = _0x255829 ? _0x58f25d[_0x255829] : undefined;
  if (_0x10d0e7 != null && _0x10d0e7.isDate) {
    var _0x128074;
    let _0x334d8c = _0x3cd620
      ? _0x2acbc8
      : (_0x128074 = t.numfmt["parseDate"](String(_0x123ab3), _0x20418c)) ==
          null
        ? undefined
        : _0x128074.v;
    return {
      value:
        _0x334d8c == null
          ? Number(_0x123ab3)
          : (0, e.excelDateToUnixMilliseconds)(
              _0x334d8c,
              (_0x20418c == null ? undefined : _0x20418c.dateSystem) !==
                t.DateSystem["Date1904"],
            ),
      label:
        !_0x238a73 && _0x19601d && _0x255829
          ? t.numfmt["format"](_0x255829, _0x2acbc8, _0x20418c)
          : _0x3c3159,
      sourceType: e.ChartSourceDataTypeEnum["Date"],
    };
  }
  if (_0x255829 !== t.DEFAULT_NUMBER_FORMAT && _0x10d0e7) {
    var _0x5bf1e2;
    return {
      value: _0x3cd620
        ? _0x2acbc8
        : (((_0x5bf1e2 = t.numfmt["parseNumber"](String(_0x123ab3))) == null
            ? undefined
            : _0x5bf1e2.v) ?? Number(_0x123ab3)),
      label:
        !_0x238a73 && _0x19601d && _0x255829
          ? t.numfmt["format"](_0x255829, _0x2acbc8, _0x20418c)
          : _0x3c3159,
      sourceType: e.ChartSourceDataTypeEnum["NUMBER"],
    };
  }
  return {
    value: Number(_0x123ab3),
    label: _0x3c3159,
    sourceType: e.ChartSourceDataTypeEnum["NUMBER"],
  };
}
function x({
  numfmtOptions: _0x2cadaa,
  range: _0x18ae8c,
  styles: _0x23acbc,
  worksheet: _0x5bb85a,
}) {
  let _0x39c948 = [],
    _0x54426f = [];
  for (
    let _0x9db694 = _0x18ae8c.startRow;
    _0x9db694 <= _0x18ae8c.endRow;
    _0x9db694++
  )
    _0x5bb85a.getRowVisible(_0x9db694) && _0x39c948.push(_0x9db694);
  for (
    let _0x288553 = _0x18ae8c.startColumn;
    _0x288553 <= _0x18ae8c.endColumn;
    _0x288553++
  )
    _0x5bb85a.getColVisible(_0x288553) && _0x54426f.push(_0x288553);
  let _0x266c2f = {};
  return {
    data: _0x39c948.map((_0x1889c9) =>
      _0x54426f.map((_0x4596bb) => {
        let _0x594d77 = b(
          _0x5bb85a,
          _0x1889c9,
          _0x4596bb,
          _0x23acbc,
          _0x266c2f,
          _0x2cadaa,
        );
        return {
          value: _0x594d77.value,
          type: _0x594d77.sourceType,
          label: _0x594d77.label,
        };
      }),
    ),
    rowIndexes: _0x39c948.map((_0x5831e1) => _0x5831e1 - _0x18ae8c.startRow),
    columnIndexes: _0x54426f.map(
      (_0x47519e) => _0x47519e - _0x18ae8c.startColumn,
    ),
    mergeRanges: _0x5bb85a
      .getMergeData()
      .map((_0x1cf628) => ({
        startRow: _0x1cf628.startRow - _0x18ae8c.startRow,
        endRow: _0x1cf628.endRow - _0x18ae8c.startRow,
        startColumn: _0x1cf628.startColumn - _0x18ae8c.startColumn,
        endColumn: _0x1cf628.endColumn - _0x18ae8c.startColumn,
      })),
  };
}
function S(_0xf0d049) {
  "@babel/helpers - typeof";
  return (
    (S =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x17404a) {
            return typeof _0x17404a;
          }
        : function (_0x3d7721) {
            return _0x3d7721 &&
              typeof Symbol == "function" &&
              _0x3d7721.constructor === Symbol &&
              _0x3d7721 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3d7721;
          }),
    S(_0xf0d049)
  );
}
function ne(_0x187892, _0x15ea59) {
  if (S(_0x187892) != "object" || !_0x187892) return _0x187892;
  var _0x2b2a04 = _0x187892[Symbol.toPrimitive];
  if (_0x2b2a04 !== undefined) {
    var _0x4a7ee6 = _0x2b2a04.call(_0x187892, _0x15ea59 || "default");
    if (S(_0x4a7ee6) != "object") return _0x4a7ee6;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x15ea59 === "string" ? String : Number)(_0x187892);
}
function C(_0x2e06c5) {
  var _0x57d080 = ne(_0x2e06c5, "string");
  return S(_0x57d080) == "symbol" ? _0x57d080 : _0x57d080 + "";
}
function w(_0x2f1449, _0x41c028, _0x20a8e0) {
  return (
    (_0x41c028 = C(_0x41c028)) in _0x2f1449
      ? Object.defineProperty(_0x2f1449, _0x41c028, {
          value: _0x20a8e0,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x2f1449[_0x41c028] = _0x20a8e0),
    _0x2f1449
  );
}
var re = class extends e.ChartDataSource {
    constructor(_0x1a9609, _0x376efb) {
      (super(),
        (this._univerInstanceService = _0x1a9609),
        w(this, "_snapshot$", undefined),
        w(this, "_projector", undefined),
        w(this, "_projectorHeaderRow", undefined),
        w(this, "_projectorIsRowDirection", undefined),
        w(this, "snapshot$", undefined),
        w(this, "rangeInfo$", undefined),
        w(this, "data$", undefined),
        w(this, "isRowDirection$", undefined),
        w(this, "canSwitchOrient$", undefined));
      let _0x2a0aef = t.Tools["deepClone"](_0x376efb),
        _0x494eb7 =
          _0x2a0aef.isRowDirection === undefined || _0x2a0aef.isRowDirection,
        _0x339943 = { ..._0x2a0aef, isRowDirection: _0x494eb7 },
        _0x5207bd = this.convertDataSet(_0x339943);
      ((this._snapshot$ = new i.BehaviorSubject({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: _0x339943,
        dataSet: _0x5207bd,
        isRowDirection: _0x494eb7,
        canSwitchOrient: true,
      })),
        (this.snapshot$ = this._snapshot$["pipe"](
          (0, i.map)((_0x11e8a0) => ({
            ..._0x11e8a0,
            rangeInfo: t.Tools["deepClone"](_0x11e8a0.rangeInfo),
          })),
        )),
        (this.rangeInfo$ = this.snapshot$["pipe"](
          (0, i.map)((_0x24f325) => _0x24f325.rangeInfo),
        )),
        (this.data$ = this.snapshot$["pipe"](
          (0, i.map)((_0xbc6851) => _0xbc6851.dataSet),
        )),
        (this.isRowDirection$ = this.snapshot$["pipe"](
          (0, i.map)((_0x3b87d9) => _0x3b87d9.isRowDirection),
        )),
        (this.canSwitchOrient$ = this.snapshot$["pipe"](
          (0, i.map)((_0x1d2fee) => _0x1d2fee.canSwitchOrient),
        )));
    }
    getRangeInfo() {
      return t.Tools["deepClone"](this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    canSwitchOrient() {
      return true;
    }
    convertDataSet(_0xc60145 = this.getRangeInfo()) {
      let {
          headerRow: _0x5c7eb2,
          rangeInfo: _0x306fad,
          isRowDirection: _0x59aa3f,
        } = _0xc60145,
        {
          unitId: _0x1d7484,
          subUnitId: _0x4e7900,
          range: _0x4efd97,
        } = _0x306fad;
      if (_0x4efd97.startColumn === -1 || _0x4efd97.startRow === -1)
        return { dimensions: [], source: [] };
      let _0x1b50f7 = (0, r.getSheetCommandTarget)(
        this._univerInstanceService,
        { unitId: _0x1d7484, subUnitId: _0x4e7900 },
      );
      if (!_0x1b50f7) return { dimensions: [], source: [] };
      let { workbook: _0x3ca7c3, worksheet: _0x3b75f2 } = _0x1b50f7,
        _0x4c8fc4 = t.Range["transformRange"](_0x4efd97, _0x3b75f2),
        _0x5176dc = _0x3ca7c3.getStyles(),
        _0x5057c5 = x({
          numfmtOptions: {
            locale: (0, t.getNumfmtLocaleTag)(_0x3ca7c3.getSnapshot().locale),
            dateSystem: _0x3ca7c3.getDateSystem(),
          },
          range: _0x4c8fc4,
          styles: _0x5176dc,
          worksheet: _0x3b75f2,
        });
      return this._getProjector(
        _0x5c7eb2 ?? e.CHART_HEADER_ROW_NONE,
        !!_0x59aa3f,
      ).project(_0x5057c5);
    }
    _getProjector(_0x1fd6dc, _0x2e806b) {
      let _0x579fd0 = !_0x2e806b;
      return (
        (!this._projector ||
          this._projectorHeaderRow !== _0x1fd6dc ||
          this._projectorIsRowDirection !== _0x579fd0) &&
          ((this._projector = (0, e.createChartDataSetProjector)({
            headerRow: _0x1fd6dc,
            isRowDirection: _0x579fd0,
          })),
          (this._projectorHeaderRow = _0x1fd6dc),
          (this._projectorIsRowDirection = _0x579fd0)),
        this._projector
      );
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let _0x356dcd = this._snapshot$["getValue"]();
      this._emit(
        { ..._0x356dcd, dataSet: this.convertDataSet(_0x356dcd.rangeInfo) },
        false,
      );
    }
    _emit(_0x19ccd7, _0x2da836) {
      let _0x1153fc = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ..._0x19ccd7,
        revision: _0x1153fc.revision + 1,
        rangeRevision: _0x1153fc.rangeRevision + +!!_0x2da836,
      });
    }
    dispose() {
      let _0x6b760b = this._snapshot$["getValue"]();
      (this._snapshot$["next"]({
        ..._0x6b760b,
        dataSet: this.getEmptyDataSet(),
        revision: _0x6b760b.revision + 1,
      }),
        this._snapshot$["complete"](),
        (this._projector = undefined),
        super.dispose());
    }
  },
  T = class extends e.ChartDataSource {
    constructor(_0xc18278, _0x389f61) {
      (super(),
        (this._univerInstanceService = _0xc18278),
        w(this, "_snapshot$", undefined),
        w(this, "snapshot$", undefined),
        w(this, "rangeInfo$", undefined),
        w(this, "data$", undefined),
        w(this, "isRowDirection$", undefined),
        w(this, "canSwitchOrient$", undefined));
      let _0x309736 = this.convertDataSet(_0x389f61);
      ((this._snapshot$ = new i["BehaviorSubject"]({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: t.Tools["deepClone"](_0x389f61),
        dataSet: _0x309736,
        isRowDirection: false,
        canSwitchOrient: false,
      })),
        (this.snapshot$ = this._snapshot$["pipe"](
          (0, i.map)((_0x5c5fb0) => ({
            ..._0x5c5fb0,
            rangeInfo: t.Tools["deepClone"](_0x5c5fb0.rangeInfo),
          })),
        )),
        (this.rangeInfo$ = this.snapshot$["pipe"](
          (0, i.map)((_0x4f87a0) => _0x4f87a0.rangeInfo),
        )),
        (this.data$ = this.snapshot$["pipe"](
          (0, i.map)((_0xec8735) => _0xec8735.dataSet),
        )),
        (this.isRowDirection$ = this.snapshot$["pipe"](
          (0, i.map)((_0x4e07f3) => _0x4e07f3.isRowDirection),
        )),
        (this.canSwitchOrient$ = this.snapshot$["pipe"](
          (0, i.map)((_0x25d319) => _0x25d319.canSwitchOrient),
        )));
    }
    canSwitchOrient() {
      return false;
    }
    getRangeInfo() {
      return t.Tools["deepClone"](this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    convertDataSet(_0x4e1bfe = this.getRangeInfo()) {
      let _0x49a93a = this._univerInstanceService,
        _0x55a1d0 = [],
        _0x19d3af = {};
      for (let { header: _0x19ce18 } of _0x4e1bfe) {
        if (!_0x19ce18) {
          _0x55a1d0.push("");
          continue;
        }
        let {
            unitId: _0x325544,
            subUnitId: _0xb9bf1d,
            range: _0x3cef56,
          } = _0x19ce18,
          _0x7a62fe = _0x49a93a.getUnit(
            _0x325544,
            t.UniverInstanceType["UNIVER_SHEET"],
          );
        if (!_0x7a62fe) return { dimensions: [], source: [] };
        let _0xf6f026 = _0x7a62fe.getSheetBySheetId(_0xb9bf1d);
        if (!_0xf6f026) return { dimensions: [], source: [] };
        let _0x1fca60 = _0x7a62fe.getStyles(),
          { label: _0x527f65 } = b(
            _0xf6f026,
            _0x3cef56.startRow,
            _0x3cef56.startColumn,
            _0x1fca60,
            _0x19d3af,
            {
              locale: (0, t.getNumfmtLocaleTag)(_0x7a62fe.getSnapshot().locale),
              dateSystem: _0x7a62fe.getDateSystem(),
            },
          );
        _0x55a1d0.push(_0x527f65);
      }
      let _0x1d209e = 0,
        _0x4bd96f = new t.ObjectMatrix(),
        _0xe039fc = new t["ObjectMatrix"](),
        _0x4d5c0e = new t["ObjectMatrix"](),
        _0x270bd6 = [],
        _0x352722 = [];
      for (let { range: _0x4baa43 } of _0x4e1bfe) {
        let {
            unitId: _0x32603a,
            subUnitId: _0x5437ae,
            range: _0x2d5ec2,
          } = _0x4baa43,
          _0x12aff4 = _0x49a93a.getUnit(
            _0x32603a,
            t.UniverInstanceType["UNIVER_SHEET"],
          );
        if (!_0x12aff4) return { dimensions: [], source: [] };
        let _0x16c806 = _0x12aff4.getSheetBySheetId(_0x5437ae);
        if (!_0x16c806) return { dimensions: [], source: [] };
        y(
          _0x2d5ec2,
          _0x16c806,
          _0x1d209e,
          _0x4bd96f,
          _0xe039fc,
          _0x4d5c0e,
          _0x12aff4.getStyles(),
          {
            locale: (0, t.getNumfmtLocaleTag)(_0x12aff4.getSnapshot().locale),
            dateSystem: _0x12aff4.getDateSystem(),
          },
        );
        let _0x3acbaa = _0x2d5ec2.startRow === _0x2d5ec2.endRow,
          _0x29a3bc = _0x2d5ec2.startColumn === _0x2d5ec2.endColumn,
          _0x2e287a = true;
        if (
          (_0x3acbaa
            ? (_0x2e287a = _0x16c806.getRowVisible(_0x2d5ec2.startRow))
            : _0x29a3bc &&
              (_0x2e287a = _0x16c806.getColVisible(_0x2d5ec2.startColumn)),
          _0x2e287a || _0x352722.push(_0x1d209e),
          _0x3acbaa || _0x29a3bc)
        ) {
          let _0x3cecce = _0x16c806
              .getMergeData()
              .filter(
                (_0x155a5a) =>
                  _0x155a5a.startRow >= _0x2d5ec2.startRow &&
                  _0x155a5a.endRow <= _0x2d5ec2.endRow &&
                  _0x155a5a.startColumn >= _0x2d5ec2.startColumn &&
                  _0x155a5a.endColumn <= _0x2d5ec2.endColumn,
              ),
            _0x556a21 = Array.from(
              { length: _0x2d5ec2.endRow - _0x2d5ec2.startRow + 1 },
              (_0x5ea82c, _0x400b7a) => _0x2d5ec2.startRow + _0x400b7a,
            ),
            _0xc08e9e = Array.from(
              { length: _0x2d5ec2.endColumn - _0x2d5ec2.startColumn + 1 },
              (_0x5398f3, _0x253ab1) => _0x2d5ec2.startColumn + _0x253ab1,
            );
          _0x270bd6.push(
            ..._({
              mergeRanges: _0x3cecce,
              worksheetRows: _0x556a21,
              worksheetColumns: _0xc08e9e,
              transpose: _0x3acbaa,
              fieldIndexOffset: _0x1d209e,
            }),
          );
        }
        _0x1d209e++;
      }
      return {
        dimensions: _0x55a1d0,
        source: _0x4bd96f.toArray(),
        sourceType: _0xe039fc.toArray(),
        sourceLabels: _0x4d5c0e.toArray(),
        ...(_0x352722.length ? { hiddenFieldIndexes: _0x352722 } : {}),
        categorySpans: _0x270bd6,
      };
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let _0x564844 = this._snapshot$["getValue"]();
      this._emit(
        { ..._0x564844, dataSet: this.convertDataSet(_0x564844.rangeInfo) },
        false,
      );
    }
    _emit(_0xb4c382, _0x1271e0) {
      let _0x519c20 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ..._0xb4c382,
        revision: _0x519c20.revision + 1,
        rangeRevision: _0x519c20.rangeRevision + +!!_0x1271e0,
      });
    }
    dispose() {
      let _0x14d8a5 = this._snapshot$["getValue"]();
      (this._snapshot$["next"]({
        ..._0x14d8a5,
        dataSet: this.getEmptyDataSet(),
        revision: _0x14d8a5.revision + 1,
      }),
        this._snapshot$["complete"](),
        super.dispose());
    }
  };
function ie(_0x419788, _0x3b858c) {
  return Array.isArray(_0x3b858c)
    ? new T(_0x419788, _0x3b858c)
    : new re(_0x419788, _0x3b858c);
}
function E(_0x12fa5e) {
  return (
    _0x12fa5e !== undefined &&
    _0x12fa5e.type !== e.ChartSourceDataTypeEnum["Null"]
  );
}
function D(_0x493a09) {
  return (
    (_0x493a09 == null ? undefined : _0x493a09.type) ===
      e.ChartSourceDataTypeEnum["STRING"] ||
    (_0x493a09 == null ? undefined : _0x493a09.type) ===
      e.ChartSourceDataTypeEnum["Date"]
  );
}
function O(_0x43d608) {
  return _0x43d608.every(
    (_0x4e7683) =>
      _0x4e7683 === undefined ||
      _0x4e7683.type === e.ChartSourceDataTypeEnum["Null"] ||
      D(_0x4e7683),
  );
}
function k(_0x2d6f13) {
  return _0x2d6f13.some(D);
}
function A(_0x8a49c1, _0x25e49c) {
  let [_0x115726, ..._0x4999b9] = _0x8a49c1.data[_0x25e49c] ?? [];
  return _0x4999b9.length < 1 ||
    ((_0x115726 == null ? undefined : _0x115726.type) !==
      e.ChartSourceDataTypeEnum["Null"] &&
      !D(_0x115726)) ||
    !_0x4999b9.every(E)
    ? false
    : _0x4999b9.every((_0x2a5c9f, _0x5b8b89) =>
        _0x8a49c1.data["slice"](_0x25e49c + 1).some((_0x57d55b) => {
          var _0x3f615f;
          return (
            ((_0x3f615f = _0x57d55b[_0x5b8b89 + 1]) == null
              ? undefined
              : _0x3f615f.type) === e.ChartSourceDataTypeEnum["NUMBER"]
          );
        }),
      );
}
function j(_0x20ec48, _0x24f02f) {
  var _0x22b616;
  if (_0x20ec48.data["length"] === 0) return;
  if (_0x24f02f) {
    var _0xbb9c85;
    let _0x2cdaaa = _0x20ec48.data["findIndex"]((_0x42861d) =>
      _0x42861d.some(E),
    );
    if (_0x2cdaaa < 0) return;
    let _0x34124d = _0x20ec48.data["slice"](_0x2cdaaa).map(
      (_0x9d57fd) => _0x9d57fd[0],
    );
    return k(_0x34124d) && O(_0x34124d)
      ? (((_0xbb9c85 = _0x20ec48.rowIndexes) == null
          ? undefined
          : _0xbb9c85[_0x2cdaaa]) ?? _0x2cdaaa)
      : undefined;
  }
  let _0xd570cb = _0x20ec48.data["findIndex"]((_0x4480af) => _0x4480af.some(E));
  if (_0xd570cb < 0) return;
  let _0x336d2d = _0x20ec48.data[_0xd570cb];
  return (k(_0x336d2d) && O(_0x336d2d)) || A(_0x20ec48, _0xd570cb)
    ? (((_0x22b616 = _0x20ec48.rowIndexes) == null
        ? undefined
        : _0x22b616[_0xd570cb]) ?? _0xd570cb)
    : undefined;
}
function M(_0x4d0b9f, _0x1b25cc) {
  let _0x17b1de =
    _0x1b25cc.headerRow ??
    j(_0x4d0b9f, _0x1b25cc.isRowDirection) ??
    e.CHART_HEADER_ROW_NONE;
  return {
    dataSet: (0, e.createChartDataSetProjector)({
      headerRow: _0x17b1de,
      isRowDirection: !_0x1b25cc.isRowDirection,
    }).project(_0x4d0b9f),
    headerRow: _0x17b1de,
  };
}
function ae(_0x33e668, _0x464767) {
  if (_0x33e668 === undefined && _0x464767 === undefined) return;
  let _0x400753 = {};
  return (
    _0x33e668 !== undefined && (_0x400753.categoryIndexes = [..._0x33e668]),
    _0x464767 !== undefined && (_0x400753.seriesIndexes = [..._0x464767]),
    _0x400753
  );
}
function oe(_0x4f35ca, _0x40e74c) {
  let { dataSet: _0xf31ee8, headerRow: _0x53f895 } = M(_0x4f35ca, _0x40e74c),
    _0x24e497 = ae(_0x40e74c.categoryIndexes, _0x40e74c.seriesIndexes),
    _0x43bd74 = f(_0xf31ee8, {
      chartType: _0x40e74c.chartType,
      context: _0x24e497,
    });
  return {
    dataSet: _0xf31ee8,
    mapping: {
      headerRow: _0x53f895,
      isRowDirection: _0x40e74c.isRowDirection,
      categoryIndexes: _0x43bd74.categoryIndexes ?? [],
      seriesIndexes: _0x43bd74.seriesIndexes ?? [],
    },
  };
}
function N(_0x440600, _0x253abf) {
  return function (_0x2421a0, _0x17755a) {
    _0x253abf(_0x2421a0, _0x17755a, _0x440600);
  };
}
function P(_0x49fc8d, _0x2ce5f3, _0x4e3b84, _0x12e9c8) {
  var _0x4f8926 = arguments.length,
    _0x4d552a =
      _0x4f8926 < 3
        ? _0x2ce5f3
        : _0x12e9c8 === null
          ? (_0x12e9c8 = Object.getOwnPropertyDescriptor(_0x2ce5f3, _0x4e3b84))
          : _0x12e9c8,
    _0x1b5864;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4d552a = Reflect.decorate(_0x49fc8d, _0x2ce5f3, _0x4e3b84, _0x12e9c8);
  else {
    for (var _0x6f39a = _0x49fc8d.length - 1; _0x6f39a >= 0; _0x6f39a--)
      (_0x1b5864 = _0x49fc8d[_0x6f39a]) &&
        (_0x4d552a =
          (_0x4f8926 < 3
            ? _0x1b5864(_0x4d552a)
            : _0x4f8926 > 3
              ? _0x1b5864(_0x2ce5f3, _0x4e3b84, _0x4d552a)
              : _0x1b5864(_0x2ce5f3, _0x4e3b84)) || _0x4d552a);
  }
  return (
    _0x4f8926 > 3 &&
      _0x4d552a &&
      Object.defineProperty(_0x2ce5f3, _0x4e3b84, _0x4d552a),
    _0x4d552a
  );
}
let F = class extends t.Disposable {
  get activeChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  constructor(_0x53fb5b) {
    (super(),
      (this._injector = _0x53fb5b),
      w(this, "_activeChartModel$", new i.BehaviorSubject(null)),
      w(this, "_chartModels", new Map()),
      w(this, "_chartModelAdded$", new i["Subject"]()),
      w(this, "_chartModelRemoved$", new i.Subject()),
      w(this, "activeChartModel$", this._activeChartModel$["asObservable"]()),
      w(this, "chartModelAdded$", this._chartModelAdded$["asObservable"]()),
      w(
        this,
        "chartModelRemoved$",
        this._chartModelRemoved$["asObservable"](),
      ));
  }
  setActiveChartModel(_0x4ac7fa) {
    this._activeChartModel$["next"](_0x4ac7fa);
  }
  getActiveChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  getChartModel(_0x3682f4) {
    return this._chartModels["get"](_0x3682f4);
  }
  createChartModel(_0x4b771c, _0xfc677a, _0x2071f7 = false) {
    let _0x53db75 = new e["ChartModel"](_0x4b771c, _0xfc677a, this._injector);
    (_0x53db75.init(), this._chartModels["set"](_0x53db75.id, _0x53db75));
    let _0x296129 = _0xfc677a.dataSource["getDataSet"](),
      _0x5d9df7 = _0x53db75.context;
    return (
      _0x53db75.setChartContext(p(_0x296129, _0x5d9df7)),
      _0x2071f7 &&
        _0x53db75.assignStyle({ titles: { title: { content: "" } } }),
      this._chartModelAdded$["next"](_0x53db75),
      _0x53db75
    );
  }
  reconcileChartModelContext(_0x6fe91e) {
    let _0x45c6e0 = this._chartModels["get"](_0x6fe91e);
    return _0x45c6e0
      ? g(
          _0x45c6e0.dataSource["getDataSet"](),
          _0x45c6e0.chartType,
          _0x45c6e0.context,
        )
      : undefined;
  }
  rebuildChartModelContextForDataSource(_0x771dee, _0x4fb858, _0x4c1541) {
    let _0x247ab2 = this._chartModels["get"](_0x771dee);
    if (_0x247ab2)
      return h(
        _0x4fb858.getDataSet(),
        _0x247ab2.chartType,
        _0x247ab2.context,
        _0x4c1541,
      );
  }
  removeChartModel(_0x21c83a) {
    let _0x55d05f = this._chartModels["get"](_0x21c83a);
    return _0x55d05f
      ? (this._chartModels["delete"](_0x21c83a),
        this.activeChartModel === _0x55d05f &&
          this._activeChartModel$["next"](null),
        _0x55d05f.dispose(),
        this._chartModelRemoved$["next"](_0x21c83a),
        true)
      : false;
  }
  dispose() {
    (Array.from(this._chartModels["keys"]()).forEach((_0x3b0dcd) =>
      this.removeChartModel(_0x3b0dcd),
    ),
      this._activeChartModel$["complete"](),
      this._chartModelAdded$["complete"](),
      this._chartModelRemoved$["complete"](),
      super.dispose());
  }
};
F = P([N(0, (0, t.Inject)(t.Injector))], F);
const I = { Multi: "multi", Single: "single" };
function L(_0x2626d5) {
  let { unitId: _0xaa3c4, subUnitId: _0x2a506f, range: _0x48747d } = _0x2626d5;
  return [
    _0xaa3c4,
    _0x2a506f,
    _0x48747d.startRow,
    _0x48747d.endRow,
    _0x48747d.startColumn,
    _0x48747d.endColumn,
  ];
}
function R(_0x2358de) {
  return JSON.stringify(
    Array.isArray(_0x2358de)
      ? [
          I.Multi,
          _0x2358de.map((_0x5577f4) => [
            _0x5577f4.header ? L(_0x5577f4.header) : null,
            L(_0x5577f4.range),
          ]),
        ]
      : [I.Single, L(_0x2358de.rangeInfo), _0x2358de.headerRow ?? null],
  );
}
function z(_0x5cb1db) {
  return Array.isArray(_0x5cb1db)
    ? R(_0x5cb1db)
    : JSON.stringify([
        I.Single,
        L(_0x5cb1db.rangeInfo),
        _0x5cb1db.isRowDirection ?? true,
        _0x5cb1db.headerRow ?? null,
      ]);
}
const B = new Set([
    r.AddWorksheetMergeMutation["id"],
    r.SetRangeValuesMutation["id"],
    r.ReorderRangeMutation["id"],
    r.SetRowHiddenMutation["id"],
    r.SetRowVisibleMutation["id"],
    r.SetColHiddenMutation["id"],
    r.SetColVisibleMutation["id"],
    r.RemoveColMutation["id"],
    r.RemoveRowMutation["id"],
    r.MarkDirtyFilterChangeMutation["id"],
    r.SetNumfmtMutation["id"],
    r.RemoveNumfmtMutation["id"],
    r.RemoveWorksheetMergeMutation["id"],
  ]),
  se = new Set([
    r.AddWorksheetMergeMutation["id"],
    r.RemoveWorksheetMergeMutation["id"],
    r.SetColHiddenMutation["id"],
    r.SetColVisibleMutation["id"],
    r.SetRowHiddenMutation["id"],
    r.SetRowVisibleMutation["id"],
  ]),
  ce = Object.freeze({
    startRow: -1,
    startColumn: -1,
    endRow: 0,
    endColumn: 0,
  });
function le(_0x12a383) {
  let _0x2ee678 = false,
    _0x1c7a21 = false;
  return {
    dispose: () => {
      _0x2ee678 = true;
    },
    publish: () => {
      _0x2ee678 ||
        _0x1c7a21 ||
        ((_0x1c7a21 = true),
        queueMicrotask(() => {
          ((_0x1c7a21 = false), _0x2ee678 || _0x12a383());
        }));
    },
  };
}
let V = class extends t.Disposable {
  constructor(_0x4bcdd6, _0x55a214) {
    (super(),
      (this._commandService = _0x4bcdd6),
      (this._refRangeService = _0x55a214),
      w(this, "_entries", new Map()));
  }
  watch(_0x5c5614, _0x29a109) {
    let _0x404f9c = R(_0x5c5614),
      _0x156c53 = {
        rangeInfo: t.Tools["deepClone"](_0x5c5614),
        callbacks: _0x29a109,
      },
      _0x4df36f = this._entries["get"](_0x404f9c);
    (_0x4df36f ||
      ((_0x4df36f = {
        key: _0x404f9c,
        consumers: new Set(),
        watcher: { dispose: () => {} },
      }),
      (_0x4df36f.watcher = this._watchRange(
        t.Tools["deepClone"](_0x5c5614),
        () => this._publishDataChanged(_0x4df36f),
        (_0x545830) => this._publishRangeChanged(_0x4df36f, _0x545830),
      )),
      this._entries["set"](_0x404f9c, _0x4df36f)),
      _0x4df36f.consumers["add"](_0x156c53));
    let _0x58aab3 = false;
    return (0, t.toDisposable)(() => {
      _0x58aab3 ||
        ((_0x58aab3 = true),
        _0x4df36f.consumers["delete"](_0x156c53),
        !(
          _0x4df36f.consumers["size"] > 0 ||
          this._entries["get"](_0x404f9c) !== _0x4df36f
        ) &&
          (this._entries["delete"](_0x404f9c), _0x4df36f.watcher["dispose"]()));
    });
  }
  _publishDataChanged(_0x4f337f) {
    Array.from(_0x4f337f.consumers).forEach((_0x262cce) =>
      _0x262cce.callbacks["onDataChanged"](),
    );
  }
  _publishRangeChanged(_0x674629, _0x369ff7) {
    Array.from(_0x674629.consumers).forEach((_0x478e8f) => {
      let _0x20f718;
      if (Array.isArray(_0x369ff7)) _0x20f718 = t.Tools["deepClone"](_0x369ff7);
      else {
        let _0x282275 = t.Tools["deepClone"](_0x478e8f.rangeInfo);
        ((_0x282275.rangeInfo = t.Tools["deepClone"](_0x369ff7.rangeInfo)),
          _0x369ff7.headerRow === undefined
            ? delete _0x282275.headerRow
            : (_0x282275.headerRow = _0x369ff7.headerRow),
          (_0x20f718 = _0x282275));
      }
      _0x478e8f.callbacks["onRangeChanged"](_0x20f718);
    });
  }
  _watchRange(_0x4c480d, _0x4d74b1, _0x14dbc0) {
    let _0x112d6f = () => _0x14dbc0(t.Tools["deepClone"](_0x4c480d));
    return Array.isArray(_0x4c480d)
      ? this._watchMultiRange(_0x4c480d, _0x4d74b1, _0x112d6f)
      : this._watchSingleRange(_0x4c480d, _0x4d74b1, _0x112d6f);
  }
  _watchSingleRange(_0x232af9, _0x4e9424, _0x358248) {
    let {
      unitId: _0x209d42,
      subUnitId: _0x1c5504,
      range: _0x4c38b0,
    } = _0x232af9.rangeInfo;
    if (
      _0x232af9.headerRow === undefined ||
      _0x232af9.headerRow === e.CHART_HEADER_ROW_NONE
    ) {
      let _0xc842e1 = this._watchSourceCommands(
          [_0x232af9.rangeInfo],
          _0x4e9424,
          _0x358248,
        ),
        _0x3d9c4e = this._refRangeService["watchRange"](
          _0x209d42,
          _0x1c5504,
          _0x4c38b0,
          (_0x245aa0, _0x29bd34) => {
            ((_0x232af9.rangeInfo["range"] = _0x29bd34
              ? { ..._0x29bd34 }
              : this._emptyRange()),
              _0x358248());
          },
        );
      return (0, t.toDisposable)(() => {
        (_0xc842e1.dispose(), _0x3d9c4e.dispose());
      });
    }
    let _0x2ab9f9 = {
        ..._0x4c38b0,
        startRow: _0x4c38b0.startRow + _0x232af9.headerRow,
        endRow: _0x4c38b0.startRow + _0x232af9.headerRow,
      },
      _0x1f6a60 = le(() => {
        let _0x4ce513 = _0x232af9.rangeInfo["range"];
        (_0x2ab9f9 && _0x4ce513.startRow >= 0
          ? (_0x232af9.headerRow = _0x2ab9f9.startRow - _0x4ce513.startRow)
          : (_0x232af9.headerRow = e.CHART_HEADER_ROW_NONE),
          _0x358248());
      }),
      _0x4bfef1 = this._watchSourceCommands(
        [_0x232af9.rangeInfo],
        _0x4e9424,
        _0x1f6a60.publish,
      ),
      _0x2154ff = this._refRangeService["watchRange"](
        _0x209d42,
        _0x1c5504,
        _0x4c38b0,
        (_0x701c93, _0x2a03bc) => {
          ((_0x232af9.rangeInfo["range"] = _0x2a03bc
            ? { ..._0x2a03bc }
            : this._emptyRange()),
            _0x1f6a60.publish());
        },
      ),
      _0x903d1b = this._refRangeService["watchRange"](
        _0x209d42,
        _0x1c5504,
        _0x2ab9f9,
        (_0x51ec15, _0x3395a1) => {
          ((_0x2ab9f9 = _0x3395a1 ? { ..._0x3395a1 } : null),
            _0x1f6a60.publish());
        },
      );
    return (0, t.toDisposable)(() => {
      (_0x1f6a60.dispose(),
        _0x4bfef1.dispose(),
        _0x2154ff.dispose(),
        _0x903d1b.dispose());
    });
  }
  _watchMultiRange(_0x38c2d6, _0x493127, _0x11ba02) {
    let _0x271a06 = _0x38c2d6
        .flatMap((_0x2af569) => [_0x2af569.header, _0x2af569.range])
        .filter((_0x1c035a) => !!_0x1c035a),
      _0x1ce893 = le(_0x11ba02),
      _0x2ca662 = this._watchSourceCommands(
        _0x271a06,
        _0x493127,
        _0x1ce893.publish,
      ),
      _0x3ccc3a = _0x271a06.map((_0x5f4ce3) =>
        this._refRangeService["watchRange"](
          _0x5f4ce3.unitId,
          _0x5f4ce3.subUnitId,
          _0x5f4ce3.range,
          (_0xcee089, _0x575c91) => {
            ((_0x5f4ce3.range = _0x575c91
              ? { ..._0x575c91 }
              : this._emptyRange()),
              _0x1ce893.publish());
          },
        ),
      );
    return (0, t.toDisposable)(() => {
      (_0x1ce893.dispose(),
        _0x2ca662.dispose(),
        _0x3ccc3a.forEach((_0x22279c) => _0x22279c.dispose()));
    });
  }
  _watchSourceCommands(_0x4302b0, _0x553a88, _0x101cec) {
    let _0x31da1f = new Map();
    _0x4302b0.forEach((_0x1376ee) => {
      let _0x35d20e = _0x31da1f.get(_0x1376ee.unitId);
      _0x35d20e ||
        ((_0x35d20e = new Map()), _0x31da1f.set(_0x1376ee.unitId, _0x35d20e));
      let _0x2ccd9e = _0x35d20e.get(_0x1376ee.subUnitId) ?? [];
      (_0x2ccd9e.push(_0x1376ee),
        _0x35d20e.set(_0x1376ee.subUnitId, _0x2ccd9e));
    });
    let _0x252708 = (_0x482c49, _0x120840) => {
      let _0x4f32d6 = (_0x53c5ce) =>
        _0x120840.some((_0xa31b77) =>
          t.Rectangle["intersects"](_0xa31b77.range, _0x53c5ce),
        );
      if (_0x482c49.id === r.SetRangeValuesMutation["id"]) {
        let { cellValue: _0x1b3067 } = _0x482c49.params;
        _0x4f32d6(new t.ObjectMatrix(_0x1b3067).getStartEndScope()) &&
          _0x553a88();
      } else {
        if (_0x482c49.id === r.ReorderRangeMutation["id"]) {
          let { range: _0x10e4f1 } = _0x482c49.params;
          _0x4f32d6(_0x10e4f1) && _0x553a88();
        } else {
          if (se.has(_0x482c49.id)) {
            let { ranges: _0xa78b8b } = _0x482c49.params;
            _0xa78b8b.some(_0x4f32d6) && _0x553a88();
          } else {
            if (
              _0x482c49.id === r.RemoveColMutation["id"] ||
              _0x482c49.id === r.RemoveRowMutation["id"]
            ) {
              let { range: _0x40c745 } = _0x482c49.params,
                _0x42f3da = _0x120840.filter((_0x5d96c4) =>
                  t.Rectangle["contains"](_0x40c745, _0x5d96c4.range),
                );
              _0x42f3da.length &&
                (_0x42f3da.forEach(
                  (_0x473d82) => (_0x473d82.range = this._emptyRange()),
                ),
                _0x101cec());
            } else {
              if (_0x482c49.id === r.MarkDirtyFilterChangeMutation["id"]) {
                let { filterRange: _0x4603c7 } = _0x482c49.params;
                _0x4f32d6(_0x4603c7) && _0x553a88();
              } else {
                if (_0x482c49.id === r.SetNumfmtMutation["id"]) {
                  let { values: _0xbb3786 } = _0x482c49.params;
                  Object.keys(_0xbb3786).some((_0x18fd18) =>
                    _0xbb3786[_0x18fd18].ranges["some"](_0x4f32d6),
                  ) && _0x553a88();
                } else {
                  if (_0x482c49.id === r.RemoveNumfmtMutation["id"]) {
                    let { ranges: _0x25c941 } = _0x482c49.params;
                    _0x25c941.some(_0x4f32d6) && _0x553a88();
                  }
                }
              }
            }
          }
        }
      }
    };
    return this._commandService["onCommandExecuted"]((_0x270fb7) => {
      var _0x2c05b9;
      if (!B.has(_0x270fb7.id)) return;
      let { unitId: _0x5a8226, subUnitId: _0x576adf } = _0x270fb7.params,
        _0x66bf67 =
          (_0x2c05b9 = _0x31da1f.get(_0x5a8226)) == null
            ? undefined
            : _0x2c05b9.get(_0x576adf);
      _0x66bf67 && _0x252708(_0x270fb7, _0x66bf67);
    });
  }
  _emptyRange() {
    return { ...ce };
  }
  dispose() {
    (this._entries["forEach"]((_0x2dd43a) => _0x2dd43a.watcher["dispose"]()),
      this._entries["clear"](),
      super.dispose());
  }
};
V = P([N(0, t.ICommandService), N(1, (0, t.Inject)(r.RefRangeService))], V);
var ue = class {
  constructor(_0x2c4e54, _0x2e6d7d) {
    ((this._release = _0x2e6d7d),
      w(this, "_dataSource$", undefined),
      w(this, "_dataChanged$", new i["Subject"]()),
      w(this, "_entry", undefined),
      w(this, "_isDisposed", false),
      w(this, "dataSource$", undefined),
      w(this, "dataChanged$", undefined),
      (this._entry = _0x2c4e54),
      (this._dataSource$ = new i["BehaviorSubject"](_0x2c4e54.dataSource)),
      (this.dataSource$ = this._dataSource$["asObservable"]()),
      (this.dataChanged$ = this._dataChanged$["asObservable"]()));
  }
  get dataSource() {
    return this._dataSource$["getValue"]();
  }
  get entry() {
    return this._entry;
  }
  attach(_0x273482) {
    ((this._entry = _0x273482),
      this._dataSource$["next"](_0x273482.dataSource));
  }
  detach(_0x4756d2) {
    this._entry === _0x4756d2 && (this._entry = undefined);
  }
  publishDataChanged() {
    this._dataChanged$["next"]();
  }
  dispose() {
    this._isDisposed || this._release(this);
  }
  complete() {
    this._isDisposed ||
      ((this._isDisposed = true),
      (this._entry = undefined),
      this._dataSource$["complete"](),
      this._dataChanged$["complete"]());
  }
};
let H = class extends t.Disposable {
  constructor(_0x21dd9a, _0x215fbb) {
    (super(),
      (this._univerInstanceService = _0x21dd9a),
      (this._rangeWatcherManager = _0x215fbb),
      w(this, "_entries", new Map()),
      w(this, "_handles", new Set()),
      w(this, "_isDisposed", false));
  }
  acquire(_0x5c1f5d) {
    if (this._isDisposed)
      throw Error(
        "Cannot\x20acquire\x20a\x20Sheet\x20chart\x20datasource\x20after\x20manager\x20disposal.",
      );
    let _0x85cd74 = this._normalizeSourceSpec(_0x5c1f5d),
      _0xd6ce33 = this._getOrCreateEntry(_0x85cd74),
      _0x11e9b0 = new ue(_0xd6ce33, (_0x4ca24f) =>
        this._releaseHandle(_0x4ca24f),
      );
    return (
      _0xd6ce33.handles["add"](_0x11e9b0),
      this._handles["add"](_0x11e9b0),
      _0x11e9b0
    );
  }
  refreshAll() {
    this._entries["forEach"]((_0x391fa5) => this._refreshEntry(_0x391fa5));
  }
  _getOrCreateEntry(_0x3e51b6) {
    let _0x353878 = z(_0x3e51b6),
      _0xaf89a7 = this._entries["get"](_0x353878);
    if (_0xaf89a7) return _0xaf89a7;
    let _0x36f610 = ie(this._univerInstanceService, _0x3e51b6),
      _0x566234 = {
        key: _0x353878,
        sourceSpec: _0x3e51b6,
        dataSource: _0x36f610,
        handles: new Set(),
        rangeWatcherLease: { dispose: () => {} },
      };
    try {
      return (
        (_0x566234.rangeWatcherLease = this._rangeWatcherManager["watch"](
          _0x3e51b6,
          {
            onDataChanged: () => this._refreshEntry(_0x566234),
            onRangeChanged: (_0x420820) =>
              this._replaceEntryRange(_0x566234, _0x420820),
          },
        )),
        this._entries["set"](_0x353878, _0x566234),
        _0x566234
      );
    } catch (_0x2b23b7) {
      throw (_0x36f610.dispose(), _0x2b23b7);
    }
  }
  _refreshEntry(_0x239d94) {
    this._entries["get"](_0x239d94.key) === _0x239d94 &&
      (_0x239d94.dataSource["refreshDataSet"](),
      _0x239d94.handles["forEach"]((_0x54d492) =>
        _0x54d492.publishDataChanged(),
      ));
  }
  _replaceEntryRange(_0x21b6bd, _0x5af5be) {
    if (this._entries["get"](_0x21b6bd.key) !== _0x21b6bd) return;
    let _0x96ee2a = this._getOrCreateEntry(
      this._normalizeSourceSpec(_0x5af5be),
    );
    _0x96ee2a !== _0x21b6bd &&
      Array.from(_0x21b6bd.handles).forEach((_0x1a5a44) =>
        this._moveHandle(_0x1a5a44, _0x21b6bd, _0x96ee2a),
      );
  }
  _moveHandle(_0xaed0a7, _0x9b5fd5, _0x1129ca) {
    _0xaed0a7.entry === _0x9b5fd5 &&
      (_0x1129ca.handles["add"](_0xaed0a7),
      _0xaed0a7.attach(_0x1129ca),
      _0x9b5fd5.handles["delete"](_0xaed0a7),
      this._disposeEntryWithoutHandles(_0x9b5fd5));
  }
  _releaseHandle(_0xd3dded) {
    let _0x2ae2bd = _0xd3dded.entry;
    (_0x2ae2bd &&
      (_0x2ae2bd.handles["delete"](_0xd3dded),
      _0xd3dded.detach(_0x2ae2bd),
      this._disposeEntryWithoutHandles(_0x2ae2bd)),
      this._handles["delete"](_0xd3dded),
      _0xd3dded.complete());
  }
  _disposeEntryWithoutHandles(_0x1df3de) {
    _0x1df3de.handles["size"] > 0 ||
      this._entries["get"](_0x1df3de.key) !== _0x1df3de ||
      (this._entries["delete"](_0x1df3de.key),
      _0x1df3de.rangeWatcherLease["dispose"](),
      _0x1df3de.dataSource["dispose"]());
  }
  _normalizeSourceSpec(_0x4c56f8) {
    let _0x24cc5e = t.Tools["deepClone"](_0x4c56f8);
    return Array.isArray(_0x24cc5e)
      ? _0x24cc5e
      : { ..._0x24cc5e, isRowDirection: _0x24cc5e.isRowDirection ?? true };
  }
  dispose() {
    this._isDisposed ||
      ((this._isDisposed = true),
      this._handles["forEach"]((_0x53236c) => _0x53236c.complete()),
      this._handles["clear"](),
      this._entries["forEach"]((_0x500fe0) => {
        (_0x500fe0.rangeWatcherLease["dispose"](),
          _0x500fe0.dataSource["dispose"]());
      }),
      this._entries["clear"](),
      super.dispose());
  }
};
H = P(
  [N(0, (0, t.Inject)(t.IUniverInstanceService)), N(1, (0, t.Inject)(V))],
  H,
);
let U = class extends t.Disposable {
  constructor(_0x20ee41, _0x1a75e7, _0x21d063, _0x4f48c8) {
    (super(),
      (this._resourcesManagerService = _0x20ee41),
      (this._univerInstanceService = _0x1a75e7),
      (this._chartModelService = _0x21d063),
      (this._dataSourceManager = _0x4f48c8),
      w(this, "_chartModelIdMap", new Map()),
      w(this, "_dataSourceBindings", new Map()),
      this.disposeWithMe(this._dataSourceManager),
      this._initSnapshot());
  }
  getSubUnitId(_0x4a1d1a, _0x230265) {
    let _0x1e8a56 = this._chartModelIdMap["get"](_0x4a1d1a);
    if (!_0x1e8a56) return null;
    for (let [_0x2bab24, _0x3b0a70] of _0x1e8a56.entries())
      if (_0x3b0a70.has(_0x230265)) return _0x2bab24;
    return null;
  }
  getUnitChartModels(_0x3dc3e9, _0x5c0fce) {
    let _0x324195 = this._chartModelIdMap["get"](_0x3dc3e9);
    if (!_0x324195) return [];
    let _0x48d06b = _0x324195.get(_0x5c0fce);
    if (!_0x48d06b) return [];
    let { _chartModelService: _0xf3f5ba } = this;
    return Array.from(_0x48d06b).map((_0x47ade4) =>
      _0xf3f5ba.getChartModel(_0x47ade4),
    );
  }
  inferInitialChartMapping(_0x3eb702, _0x107a33, _0x21233d) {
    return this.inferInitialChartSource(_0x3eb702, _0x107a33, _0x21233d)
      .mapping;
  }
  inferInitialChartSource(_0x111b56, _0x23fd30, _0x2ce7d7) {
    let _0x3a6173 =
      this._getInitialDataOrientation(_0x111b56) === e.DataOrientation["Row"];
    if (Array.isArray(_0x111b56)) {
      let _0x1460d5 = ie(this._univerInstanceService, _0x111b56);
      try {
        let _0x36c7ad = _0x1460d5.getDataSet(),
          _0xf332f7 = m(_0x36c7ad, _0x23fd30, undefined, _0x2ce7d7);
        return {
          dataSet: _0x36c7ad,
          mapping: {
            headerRow: e.CHART_HEADER_ROW_NONE,
            isRowDirection: false,
            categoryIndexes: _0xf332f7.categoryIndexes ?? [],
            seriesIndexes: _0xf332f7.seriesIndexes ?? [],
          },
        };
      } finally {
        _0x1460d5.dispose();
      }
    }
    let {
        unitId: _0x5792e5,
        subUnitId: _0x44fd13,
        range: _0x4e976e,
      } = _0x111b56.rangeInfo,
      _0x4e7e7e = (0, r.getSheetCommandTarget)(this._univerInstanceService, {
        unitId: _0x5792e5,
        subUnitId: _0x44fd13,
      });
    if (!_0x4e7e7e) {
      let _0x44d149 = { dimensions: [], source: [] },
        _0x37e81e = m(_0x44d149, _0x23fd30, undefined, _0x2ce7d7);
      return {
        dataSet: _0x44d149,
        mapping: {
          headerRow: _0x111b56.headerRow ?? e.CHART_HEADER_ROW_NONE,
          isRowDirection: _0x3a6173,
          categoryIndexes: _0x37e81e.categoryIndexes ?? [],
          seriesIndexes: _0x37e81e.seriesIndexes ?? [],
        },
      };
    }
    let { workbook: _0x276aa3, worksheet: _0x56c3ec } = _0x4e7e7e,
      _0xade72b = x({
        numfmtOptions: {
          locale: (0, t.getNumfmtLocaleTag)(_0x276aa3.getSnapshot().locale),
          dateSystem: _0x276aa3.getDateSystem(),
        },
        range: t.Range["transformRange"](_0x4e976e, _0x56c3ec),
        styles: _0x276aa3.getStyles(),
        worksheet: _0x56c3ec,
      }),
      _0x2d36c6 = (_0x8bb60) =>
        oe(_0xade72b, {
          chartType: _0x23fd30,
          isRowDirection: _0x8bb60,
          ...(_0x111b56.headerRow === undefined
            ? {}
            : { headerRow: _0x111b56.headerRow }),
          ...((_0x2ce7d7 == null ? undefined : _0x2ce7d7.categoryIndexes) ===
          undefined
            ? {}
            : { categoryIndexes: _0x2ce7d7.categoryIndexes }),
          ...((_0x2ce7d7 == null ? undefined : _0x2ce7d7.seriesIndexes) ===
          undefined
            ? {}
            : { seriesIndexes: _0x2ce7d7.seriesIndexes }),
        }),
      _0x3108ce = _0x2d36c6(_0x3a6173);
    if (
      _0x111b56.isRowDirection !== undefined ||
      _0x3108ce.mapping["seriesIndexes"].length > 0
    )
      return _0x3108ce;
    let _0xc167a5 = _0x2d36c6(!_0x3a6173);
    return _0xc167a5.mapping["seriesIndexes"].length > 0
      ? _0xc167a5
      : _0x3108ce;
  }
  _inferPrimaryDataOrientation(_0x428a5d) {
    if (Array.isArray(_0x428a5d)) return e.DataOrientation["Column"];
    let { range: _0x360039 } = _0x428a5d.rangeInfo,
      {
        startRow: _0x2d0390,
        endRow: _0x4bf0e3,
        startColumn: _0x134eb1,
        endColumn: _0x21684b,
      } = _0x360039;
    return (_0x2d0390 === _0x4bf0e3 &&
      this._hasNonNumberCellInSingleRow(_0x428a5d)) ||
      _0x4bf0e3 - _0x2d0390 >= _0x21684b - _0x134eb1
      ? e.DataOrientation["Column"]
      : e.DataOrientation["Row"];
  }
  _getInitialDataOrientation(_0x5dcecc) {
    return !Array.isArray(_0x5dcecc) && _0x5dcecc.isRowDirection !== undefined
      ? _0x5dcecc.isRowDirection
        ? e.DataOrientation["Row"]
        : e.DataOrientation["Column"]
      : this._inferPrimaryDataOrientation(_0x5dcecc);
  }
  _hasNonNumberCellInSingleRow(_0x401172) {
    let {
        unitId: _0x2fe4be,
        subUnitId: _0x1d0856,
        range: _0x16f028,
      } = _0x401172.rangeInfo,
      _0x4b886c = (0, r.getSheetCommandTarget)(this._univerInstanceService, {
        unitId: _0x2fe4be,
        subUnitId: _0x1d0856,
      });
    if (!_0x4b886c) return false;
    let { workbook: _0x4939a2, worksheet: _0x1ab18b } = _0x4b886c,
      _0x69a4b = _0x4939a2.getStyles(),
      _0x13a5fa = {};
    for (
      let _0x495ba2 = _0x16f028.startColumn;
      _0x495ba2 <= _0x16f028.endColumn;
      _0x495ba2++
    )
      if (
        _0x1ab18b.getColVisible(_0x495ba2) &&
        b(_0x1ab18b, _0x16f028.startRow, _0x495ba2, _0x69a4b, _0x13a5fa, {
          locale: (0, t.getNumfmtLocaleTag)(_0x4939a2.getSnapshot().locale),
          dateSystem: _0x4939a2.getDateSystem(),
        }).sourceType !== e.ChartSourceDataTypeEnum["NUMBER"]
      )
        return true;
    return false;
  }
  ensureChartModelCollection(_0x2551b2, _0x321774) {
    let _0x288a65 = this._chartModelIdMap["get"](_0x2551b2);
    _0x288a65 ||
      ((_0x288a65 = new Map()),
      this._chartModelIdMap["set"](_0x2551b2, _0x288a65));
    let _0x434deb = _0x288a65.get(_0x321774);
    return (
      _0x434deb ||
        ((_0x434deb = new Set()), _0x288a65.set(_0x321774, _0x434deb)),
      _0x434deb
    );
  }
  getChartDataSource(_0x24bcac) {
    var _0x27433c;
    return (_0x27433c = this._chartModelService["getChartModel"](_0x24bcac)) ==
      null
      ? undefined
      : _0x27433c.dataSource;
  }
  getChartSourceSpec(_0x1c8950) {
    let _0x1833e1 = this.getChartDataSource(_0x1c8950);
    return _0x1833e1
      ? t.Tools["deepClone"](_0x1833e1.getRangeInfo())
      : undefined;
  }
  replaceChartDataSource(_0x495508, _0x5ba004) {
    let _0x3c51ea = this.getChartModel(_0x495508),
      _0x5df20f = this._dataSourceBindings["get"](_0x495508);
    if (!_0x3c51ea || !_0x5df20f) return false;
    let { mapping: _0x555f19 } = this.inferInitialChartSource(
        _0x5ba004,
        _0x3c51ea.chartType,
      ),
      _0x47ee02 = this._applyInitialMappingToRangeInfo(_0x5ba004, _0x555f19),
      _0x74a7d5 = this._dataSourceManager["acquire"](_0x47ee02),
      _0x317116 = this._chartModelService[
        "rebuildChartModelContextForDataSource"
      ](_0x495508, _0x74a7d5.dataSource, _0x555f19);
    if (!_0x317116) return (_0x74a7d5.dispose(), false);
    if (_0x74a7d5.dataSource === _0x5df20f.handle["dataSource"])
      return (_0x74a7d5.dispose(), _0x3c51ea.setChartContext(_0x317116), true);
    let _0x55faed = this._createDataSourceRuntimeBinding(_0x495508, _0x74a7d5);
    return (
      this._dataSourceBindings["set"](_0x495508, _0x55faed),
      _0x3c51ea.replaceDataSource(_0x74a7d5.dataSource),
      this._disposeDataSourceRuntimeBinding(_0x5df20f),
      _0x3c51ea.setChartContext(_0x317116),
      true
    );
  }
  refreshChartSource() {
    this._dataSourceManager["refreshAll"]();
  }
  createChartModel(_0x241e12, _0x373e3f, _0x3aa360, _0x137868 = false) {
    let {
        context: _0x2e8606,
        dataAggregation: _0x2d9863,
        id: _0x3d2e9f,
        style: _0x513b7c,
        rangeInfo: _0x583979,
      } = _0x3aa360,
      _0x58e49b = _0x3d2e9f ?? (0, t.generateRandomId)(),
      { chartType: _0x48c214 } = _0x3aa360,
      _0x3f5aff = _0x583979,
      _0x37163b = _0x2e8606,
      _0x4a8b66 =
        (_0x2e8606 == null ? undefined : _0x2e8606.categoryIndexes) !==
          undefined && _0x2e8606.seriesIndexes !== undefined,
      _0x27cd8b =
        Array.isArray(_0x583979) ||
        (_0x583979.headerRow !== undefined &&
          _0x583979.isRowDirection !== undefined);
    if (!_0x4a8b66 || !_0x27cd8b) {
      let _0x348e3c = this.inferInitialChartMapping(
        _0x583979,
        _0x48c214,
        _0x2e8606,
      );
      ((_0x3f5aff = this._applyInitialMappingToRangeInfo(_0x583979, _0x348e3c)),
        (_0x37163b = {
          ..._0x2e8606,
          categoryIndexes: _0x348e3c.categoryIndexes,
          seriesIndexes: _0x348e3c.seriesIndexes,
        }));
    }
    let _0x50eda3 = this._dataSourceManager["acquire"](_0x3f5aff),
      _0x57a210;
    try {
      _0x57a210 = this._chartModelService["createChartModel"](
        _0x58e49b,
        {
          dataSource: _0x50eda3.dataSource,
          chartType: _0x48c214,
          dataAggregation: _0x2d9863,
          style: _0x513b7c,
          context: _0x37163b,
        },
        _0x137868,
      );
    } catch (_0x19fd7a) {
      throw (_0x50eda3.dispose(), _0x19fd7a);
    }
    let _0x263009 = this.ensureChartModelCollection(_0x241e12, _0x373e3f);
    return (
      _0x263009.add(_0x57a210.id),
      this._dataSourceBindings["set"](
        _0x57a210.id,
        this._createDataSourceRuntimeBinding(_0x57a210.id, _0x50eda3),
      ),
      _0x57a210.onDispose(() => {
        _0x263009.delete(_0x57a210.id);
        let _0xec8989 = this._dataSourceBindings["get"](_0x57a210.id);
        (this._dataSourceBindings["delete"](_0x57a210.id),
          _0xec8989 && this._disposeDataSourceRuntimeBinding(_0xec8989));
      }),
      _0x57a210
    );
  }
  _applyInitialMappingToRangeInfo(_0x41c258, _0x3bf50e) {
    if (Array.isArray(_0x41c258)) return _0x41c258;
    let {
      headerRow: _0x1f0d3f,
      isRowDirection: _0x5558fd,
      ..._0x36f702
    } = _0x41c258;
    return {
      ..._0x36f702,
      isRowDirection: _0x3bf50e.isRowDirection,
      headerRow: _0x3bf50e.headerRow,
    };
  }
  removeChartModel(_0xe39ff5) {
    this._chartModelService["removeChartModel"](_0xe39ff5);
  }
  getChartModel(_0x188b7f) {
    return this._chartModelService["getChartModel"](_0x188b7f);
  }
  _serializeChartForUnit(_0x26d134) {
    let _0x16537a = this._chartModelIdMap["get"](_0x26d134);
    if (!_0x16537a) return "{}";
    let _0x348873 = {};
    for (let _0x1d7db2 of _0x16537a.keys()) {
      let _0x3e5369 = _0x16537a.get(_0x1d7db2);
      if (_0x3e5369)
        for (let _0x5daf21 of Array.from(_0x3e5369)) {
          let _0x3981ce = this._chartModelService["getChartModel"](_0x5daf21),
            _0x50bc44 = this.getChartDataSource(_0x5daf21);
          _0x3981ce &&
            _0x50bc44 &&
            (_0x348873[_0x1d7db2] || (_0x348873[_0x1d7db2] = []),
            _0x348873[_0x1d7db2].push({
              rangeInfo: _0x50bc44.getRangeInfo(),
              ..._0x3981ce.serialize(),
            }));
        }
    }
    return JSON.stringify(_0x348873);
  }
  _createDataSourceRuntimeBinding(_0x46aea0, _0x1bb123) {
    return {
      handle: _0x1bb123,
      sourceSubscription: _0x1bb123.dataSource$["pipe"](
        (0, i.skip)(1),
      ).subscribe((_0x1fa2bc) => {
        var _0x4de19f;
        if (
          ((_0x4de19f = this._dataSourceBindings["get"](_0x46aea0)) == null
            ? undefined
            : _0x4de19f.handle) !== _0x1bb123
        )
          return;
        let _0xb3d326 = this._chartModelService["getChartModel"](_0x46aea0);
        if (!_0xb3d326) return;
        let _0x3e3216 = this.inferInitialChartMapping(
            _0x1fa2bc.getRangeInfo(),
            _0xb3d326.chartType,
          ),
          _0x43d873 = this._chartModelService[
            "rebuildChartModelContextForDataSource"
          ](_0x46aea0, _0x1fa2bc, _0x3e3216);
        (_0xb3d326.replaceDataSource(_0x1fa2bc),
          _0x43d873 && _0xb3d326.setChartContext(_0x43d873));
      }),
      dataSubscription: _0x1bb123.dataChanged$["subscribe"](() => {
        var _0x2f76fc;
        ((_0x2f76fc = this._dataSourceBindings["get"](_0x46aea0)) == null
          ? undefined
          : _0x2f76fc.handle) === _0x1bb123 &&
          this._replaceReconciledContext(_0x46aea0);
      }),
    };
  }
  _disposeDataSourceRuntimeBinding(_0x45bb23) {
    (_0x45bb23.sourceSubscription["unsubscribe"](),
      _0x45bb23.dataSubscription["unsubscribe"](),
      _0x45bb23.handle["dispose"]());
  }
  _replaceReconciledContext(_0x1d0adc) {
    let _0x3dec14 = this._chartModelService["getChartModel"](_0x1d0adc),
      _0x22b3b9 =
        this._chartModelService["reconcileChartModelContext"](_0x1d0adc);
    _0x3dec14 && _0x22b3b9 && _0x3dec14.setChartContext(_0x22b3b9);
  }
  _deserializeChartForUnit(_0x340562, _0x23ae79) {
    this._univerInstanceService["getUnit"](
      _0x340562,
      t.UniverInstanceType["UNIVER_SHEET"],
    ) &&
      Object.keys(_0x23ae79).forEach((_0x51f09d) => {
        let _0x31f67f = _0x23ae79[_0x51f09d];
        !_0x31f67f ||
          _0x31f67f.length <= 0 ||
          _0x31f67f.forEach((_0x48688c) => {
            let { rangeInfo: _0x29d992 } = _0x48688c;
            this.createChartModel(_0x340562, _0x51f09d, {
              ..._0x48688c,
              rangeInfo: _0x29d992,
            });
          });
      });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_CHART_PLUGIN",
      businesses: [t.UniverInstanceType["UNIVER_SHEET"]],
      toJson: (_0xc9c4cf) => this._serializeChartForUnit(_0xc9c4cf),
      parseJson: (_0x49e162) => JSON.parse(_0x49e162),
      onLoad: (_0x3305cd, _0xb31b61) => {
        this._deserializeChartForUnit(_0x3305cd, _0xb31b61);
      },
      onUnLoad: (_0x25954d) => {
        var _0x1f550c;
        (_0x1f550c = this._chartModelIdMap["get"](_0x25954d)) == null ||
          _0x1f550c.forEach((_0x49cbc4) => {
            Array.from(_0x49cbc4.values()).forEach((_0x5c6319) => {
              this._chartModelService["removeChartModel"](_0x5c6319);
            });
          });
      },
    });
  }
  dispose() {
    (Array.from(this._dataSourceBindings["keys"]()).forEach((_0x42ecb1) =>
      this._chartModelService["removeChartModel"](_0x42ecb1),
    ),
      this._dataSourceBindings["forEach"]((_0x2eb872) =>
        this._disposeDataSourceRuntimeBinding(_0x2eb872),
      ),
      this._dataSourceBindings["clear"](),
      this._chartModelIdMap["clear"](),
      super.dispose());
  }
};
U = P(
  [
    N(0, t.IResourceManagerService),
    N(1, t.IUniverInstanceService),
    N(2, (0, t.Inject)(F)),
    N(3, (0, t.Inject)(H)),
  ],
  U,
);
function de(_0x408130, _0xa9b3cf) {
  let {
    categoryIndexes: _0xdfc515,
    multiLevelCategoryAxis: _0x27ba19,
    seriesIndexes: _0x1e9462,
    useDateAxis: _0x25982f,
    histogram: _0x81748a,
    ..._0x273876
  } = _0x408130;
  return { ..._0x273876, ...t.Tools["deepClone"](_0xa9b3cf) };
}
const fe = {
    id: "sheet.mutation.chart-update-config",
    type: t.CommandType["MUTATION"],
    handler: (_0xdc995, _0x475341) => {
      if (pe(_0x475341)) return false;
      let { chartModelId: _0x40dcff } = _0x475341,
        _0x4e7c1b = _0xdc995.get(U).getChartModel(_0x40dcff);
      return (
        _0x4e7c1b &&
          (_0x475341.style !== undefined &&
            _0x4e7c1b.assignStyle(_0x475341.style),
          _0x475341.context !== undefined &&
            _0x4e7c1b.assignChartContext(_0x475341.context),
          _0x475341.dataAggregation !== undefined &&
            _0x4e7c1b.assignDataAggregation(_0x475341.dataAggregation),
          _0x475341.chartType !== undefined &&
            _0x4e7c1b.setChartType(_0x475341.chartType)),
        true
      );
    },
  },
  W = {
    id: "sheet.mutation.chart-replace-config",
    type: t.CommandType["MUTATION"],
    handler: (_0x245284, _0x34484b) => {
      if (pe(_0x34484b)) return false;
      let _0x33e7d5 = _0x245284.get(U).getChartModel(_0x34484b.chartModelId);
      if (_0x33e7d5) {
        if (
          (_0x34484b.style !== undefined && _0x33e7d5.setStyle(_0x34484b.style),
          _0x34484b.context !== undefined)
        )
          try {
            let _0x5bf645 = (0, e.canonicalizeChartContext)(_0x34484b.context);
            _0x33e7d5.setChartContext(de(_0x33e7d5.context, _0x5bf645));
          } catch {
            return false;
          }
        (_0x34484b.dataAggregation !== undefined &&
          _0x33e7d5.setDataAggregation(_0x34484b.dataAggregation),
          _0x34484b.chartType !== undefined &&
            _0x33e7d5.setChartType(_0x34484b.chartType));
      }
      return true;
    },
  };
function pe(_0x556021) {
  return (
    !_0x556021 ||
    !me(_0x556021.style) ||
    !me(_0x556021.context) ||
    !me(_0x556021.dataAggregation)
  );
}
function me(_0x4dc917) {
  return (
    _0x4dc917 === undefined ||
    (typeof _0x4dc917 == "object" && !!_0x4dc917 && !Array.isArray(_0x4dc917))
  );
}
const G = Symbol("ReplaceSheetChartConfig"),
  K = {
    id: "sheet.command.chart-update-config",
    type: t.CommandType["COMMAND"],
    handler: (_0x53daf2, _0x28ab18) => {
      if (!_0x28ab18) return false;
      let _0x5bbf42 = _0x53daf2.get(U),
        {
          unitId: _0x2165d9,
          chartModelId: _0x366fb4,
          chartType: _0x33a69e,
          style: _0x56db7d,
          dataAggregation: _0x40575f,
          context: _0x128134,
        } = _0x28ab18,
        _0x3795a5 = _0x28ab18[G] === true,
        _0x59f865 = _0x5bbf42.getChartModel(_0x366fb4);
      if (!_0x59f865) return false;
      let _0x51e29b = _0x53daf2.get(t.ICommandService),
        _0x5c85b9 = _0x53daf2.get(t.IUndoRedoService),
        _0xc61d3f = { unitId: _0x2165d9, chartModelId: _0x366fb4 };
      if (
        (_0x33a69e !== undefined && (_0xc61d3f.chartType = _0x33a69e),
        _0x56db7d !== undefined &&
          (_0xc61d3f.style = _0x3795a5
            ? t.Tools["deepClone"](_0x56db7d)
            : he(_0x59f865.style, _0x56db7d)),
        _0x40575f !== undefined &&
          (_0xc61d3f.dataAggregation = _0x3795a5
            ? t.Tools["deepClone"](_0x40575f)
            : (0, e.mergeChartConfig)(_0x59f865.dataAggregation, _0x40575f)),
        _0x128134 !== undefined)
      )
        try {
          _0xc61d3f.context = _0x3795a5
            ? (0, e.canonicalizeChartContext)(_0x128134)
            : (0, e.canonicalizeChartContext)(
                (0, e.mergeChartConfig)(
                  (0, e.canonicalizeChartContext)(_0x59f865.context),
                  _0x128134,
                ),
              );
        } catch {
          return false;
        }
      let _0x5919a3 = { unitId: _0x2165d9, chartModelId: _0x366fb4 };
      (_0x33a69e !== undefined && (_0x5919a3.chartType = _0x59f865.chartType),
        _0xc61d3f.style !== undefined &&
          (_0x5919a3.style = t.Tools["deepClone"](_0x59f865.style)),
        _0xc61d3f.dataAggregation !== undefined &&
          (_0x5919a3.dataAggregation = t.Tools["deepClone"](
            _0x59f865.dataAggregation,
          )),
        _0xc61d3f.context !== undefined &&
          (_0x5919a3.context = (0, e.canonicalizeChartContext)(
            _0x59f865.context,
          )));
      let _0x1d4fa3 = [{ id: W.id, params: _0xc61d3f }],
        _0x4363b2 = [{ id: W.id, params: _0x5919a3 }];
      return (0, t.sequenceExecute)(_0x1d4fa3, _0x51e29b).result
        ? (_0x5c85b9.pushUndoRedo({
            unitID: _0x2165d9,
            redoMutations: _0x1d4fa3,
            undoMutations: _0x4363b2,
          }),
          true)
        : false;
    },
  };
function he(_0x86f8c1, _0x599e82) {
  let {
      candlestick: _0x1916aa,
      sunburst: _0x49d702,
      gauge: _0xb15821,
      chord: _0x171e47,
      ..._0xaf92b7
    } = _0x599e82,
    _0x2175fa = (0, e.mergeChartConfig)(_0x86f8c1, _0xaf92b7),
    _0x105989 = {};
  return (
    Object.prototype["hasOwnProperty"].call(_0x599e82, "candlestick") &&
      (_0x105989.candlestick = _0x1916aa),
    Object.prototype["hasOwnProperty"].call(_0x599e82, "sunburst") &&
      (_0x105989.sunburst = _0x49d702),
    Object.prototype["hasOwnProperty"].call(_0x599e82, "gauge") &&
      (_0x105989.gauge = _0xb15821),
    Object.prototype["hasOwnProperty"].call(_0x599e82, "chord") &&
      (_0x105989.chord = _0x171e47),
    Object.keys(_0x105989).length
      ? ((0, e.toChartModelUpdate)(_0x105989, { currentStyle: _0x2175fa })
          .style ?? {})
      : _0x2175fa
  );
}
const q = {
    id: "sheet.mutation.chart-update-source",
    type: t.CommandType["MUTATION"],
    handler: (_0x4ea7e1, _0x36e6e5) => {
      let { chartModelId: _0x10cded, rangeInfo: _0x4f44b3 } = _0x36e6e5;
      return _0x4ea7e1.get(U).replaceChartDataSource(_0x10cded, _0x4f44b3);
    },
  },
  ge = {
    id: "sheet.command.chart-update-source",
    type: t.CommandType["COMMAND"],
    handler: (_0x1c1e03, _0x281345) => {
      if (!_0x281345) return false;
      let _0x4da8cd = _0x1c1e03.get(U),
        {
          unitId: _0x4aba12,
          chartModelId: _0x46a988,
          range: _0x41de3e,
        } = _0x281345;
      if (!_0x4da8cd.getChartModel(_0x46a988)) return false;
      let _0x2d86de = _0x4da8cd.getChartDataSource(_0x46a988);
      if (!_0x2d86de) return false;
      let _0x281566 = _0x1c1e03.get(t.ICommandService),
        _0x4a2833 = _0x1c1e03.get(t.IUndoRedoService),
        _0x48eb5e = [],
        _0x36efb3 = [],
        _0x17e17d = _0x2d86de.getRangeInfo(),
        _0x25831b = {
          unitId: _0x4aba12,
          chartModelId: _0x46a988,
          rangeInfo: _0x41de3e,
        },
        _0x173eb7 = {
          unitId: _0x4aba12,
          chartModelId: _0x46a988,
          rangeInfo: _0x17e17d,
        };
      return (
        _0x48eb5e.push({ id: q.id, params: _0x25831b }),
        _0x36efb3.push({ id: q.id, params: _0x173eb7 }),
        (0, t.sequenceExecute)(_0x48eb5e, _0x281566).result
          ? (_0x4a2833.pushUndoRedo({
              unitID: _0x4aba12,
              redoMutations: _0x48eb5e,
              undoMutations: _0x36efb3,
            }),
            true)
          : false
      );
    },
  };
let _e = (function (_0x1f86de) {
    return (
      (_0x1f86de.Auto = "auto"),
      (_0x1f86de.Row = "row"),
      (_0x1f86de.Column = "column"),
      (_0x1f86de.Rows = "rows"),
      (_0x1f86de.Columns = "columns"),
      (_0x1f86de.RowsAsSeries = "rowsAsSeries"),
      (_0x1f86de.ColumnsAsSeries = "columnsAsSeries"),
      _0x1f86de
    );
  })({}),
  ve = (function (_0x49f4f0) {
    return (
      (_0x49f4f0.Range = "range"),
      (_0x49f4f0.Ranges = "ranges"),
      _0x49f4f0
    );
  })({}),
  ye = (function (_0x2c1c28) {
    return ((_0x2c1c28.Error = "error"), _0x2c1c28);
  })({});
function be(_0x539348, _0x2e48b4) {
  let _0x2eb806 = Y(_0x539348, t.IUniverInstanceService);
  return (
    (_0x2eb806 == null
      ? undefined
      : _0x2eb806.getUnit(_0x2e48b4, t.UniverInstanceType["UNIVER_SHEET"])) ??
    (_0x2eb806 == null
      ? undefined
      : _0x2eb806.getCurrentUnitOfType(t.UniverInstanceType["UNIVER_SHEET"])) ??
    null
  );
}
function xe(_0x29d379, _0x11269a, _0x3fba00) {
  var _0x43a045, _0xc983b8;
  let _0x2e085f = Y(_0x29d379.injector, n.ISheetDrawingService),
    _0xed6496 = Y(_0x29d379.injector, r.SheetSkeletonService);
  if (!_0x2e085f || !_0xed6496)
    return (
      _0x3fba00.push(
        J(
          "COMMAND_FAILED",
          "Chart layout services are not available.",
          "layout",
        ),
      ),
      null
    );
  let _0x107d07 = _0x2e085f.getDrawingByParam({
    unitId: _0x29d379.unitId,
    subUnitId: _0x29d379.subUnitId,
    drawingId: _0x29d379.chartId,
  });
  if (!_0x107d07)
    return (
      _0x3fba00.push(
        J(
          "COMMAND_FAILED",
          "Chart drawing not found: " + _0x29d379.chartId + ".",
          "layout",
        ),
      ),
      null
    );
  let _0x33ae0c = _0xed6496.ensureSkeleton(
    _0x29d379.unitId,
    _0x29d379.subUnitId,
  );
  if (!_0x33ae0c)
    return (
      _0x3fba00.push(
        J(
          "COMMAND_FAILED",
          "Worksheet skeleton is not available for chart layout update.",
          "layout",
        ),
      ),
      null
    );
  let _0x1a4e41 = { ..._0x107d07.transform };
  if (
    (((_0x43a045 = _0x11269a.size) == null ? undefined : _0x43a045.width) !==
      undefined && (_0x1a4e41.width = _0x11269a.size["width"]),
    ((_0xc983b8 = _0x11269a.size) == null ? undefined : _0xc983b8.height) !==
      undefined && (_0x1a4e41.height = _0x11269a.size["height"]),
    _0x11269a.anchor !== undefined)
  ) {
    let _0x4ed00f = we(
      _0x29d379.unitId,
      _0x29d379.subUnitId,
      _0x11269a.anchor,
      _0x33ae0c,
      _0x3fba00,
    );
    _0x4ed00f &&
      ((_0x1a4e41.left = _0x4ed00f.left), (_0x1a4e41.top = _0x4ed00f.top));
  }
  return (
    _0x11269a.position !== undefined &&
      ((_0x1a4e41.left = _0x11269a.position["x"]),
      (_0x1a4e41.top = _0x11269a.position["y"])),
    {
      ..._0x107d07,
      unitId: _0x29d379.unitId,
      subUnitId: _0x29d379.subUnitId,
      drawingId: _0x29d379.chartId,
      drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
      transform: _0x1a4e41,
      sheetTransform: (0, n.transformToDrawingPosition)(_0x1a4e41, _0x33ae0c),
      axisAlignSheetTransform: (0, n.transformToAxisAlignPosition)(
        _0x1a4e41,
        _0x33ae0c,
      ),
    }
  );
}
function Se(_0x17d28e, _0x21d888, _0x205409) {
  if (_0x21d888.position) return _0x21d888.position;
  if (!_0x21d888.anchor) return;
  let _0x2067f3 = Y(_0x17d28e.injector, r.SheetSkeletonService),
    _0x9737ee =
      _0x2067f3 == null
        ? undefined
        : _0x2067f3.ensureSkeleton(_0x17d28e.unitId, _0x17d28e.subUnitId);
  if (!_0x9737ee) {
    _0x205409.push(
      J(
        "COMMAND_FAILED",
        "Worksheet skeleton is not available for chart anchor.",
        "anchor",
      ),
    );
    return;
  }
  let _0x3db67c = we(
    _0x17d28e.unitId,
    _0x17d28e.subUnitId,
    _0x21d888.anchor,
    _0x9737ee,
    _0x205409,
  );
  return _0x3db67c
    ? { x: _0x3db67c.left ?? 0, y: _0x3db67c.top ?? 0 }
    : undefined;
}
function Ce(_0x2150f4) {
  var _0x2883a3;
  let _0x205642 = Y(_0x2150f4.injector, n.ISheetDrawingService),
    _0xcc80a6 =
      _0x205642 == null
        ? undefined
        : _0x205642.getDrawingByParam({
            unitId: _0x2150f4.unitId,
            subUnitId: _0x2150f4.subUnitId,
            drawingId: _0x2150f4.chartId,
          });
  if (_0xcc80a6)
    return {
      position: _0xcc80a6.transform
        ? {
            x: _0xcc80a6.transform["left"] ?? 0,
            y: _0xcc80a6.transform["top"] ?? 0,
          }
        : undefined,
      size: _0xcc80a6.transform
        ? {
            width: _0xcc80a6.transform["width"],
            height: _0xcc80a6.transform["height"],
          }
        : undefined,
      anchor:
        (_0x2883a3 = _0xcc80a6.sheetTransform) != null && _0x2883a3.from
          ? {
              row: _0xcc80a6.sheetTransform["from"].row,
              column: _0xcc80a6.sheetTransform["from"].column,
              rowOffset: _0xcc80a6.sheetTransform["from"].rowOffset,
              columnOffset: _0xcc80a6.sheetTransform["from"].columnOffset,
            }
          : undefined,
    };
}
function we(_0x494034, _0x23c0b9, _0x5f5016, _0x53d684, _0x5e4dc8) {
  let _0x30b254 = Te(_0x5f5016, _0x5e4dc8);
  return _0x30b254
    ? (0, r.convertPositionCellToSheetOverGrid)(
        _0x494034,
        _0x23c0b9,
        {
          row: _0x30b254.row,
          column: _0x30b254.column,
          rowOffset: _0x30b254.rowOffset ?? 0,
          columnOffset: _0x30b254.columnOffset ?? 0,
        },
        1,
        1,
        _0x53d684,
      ).transform
    : null;
}
function Te(_0x2946ad, _0x3da5f8) {
  if (typeof _0x2946ad == "string")
    try {
      let _0x53ba97 = (0, a.deserializeRangeWithSheet)(_0x2946ad);
      return {
        row: _0x53ba97.range["startRow"],
        column: _0x53ba97.range["startColumn"],
      };
    } catch (_0x490e67) {
      return (
        _0x3da5f8.push(
          J(
            "INVALID_RANGE",
            "Invalid chart source range: " + _0x2946ad + ".",
            "layout.anchor",
            _0x490e67,
          ),
        ),
        null
      );
    }
  return !Number.isInteger(_0x2946ad.row) ||
    !Number.isInteger(_0x2946ad.column) ||
    _0x2946ad.row < 0 ||
    _0x2946ad.column < 0
    ? (_0x3da5f8.push(
        J(
          "INVALID_RANGE",
          "Chart\x20anchor\x20row\x20and\x20column\x20must\x20be\x20non-negative\x20integers.",
          "layout.anchor",
        ),
      ),
      null)
    : _0x2946ad;
}
function J(_0xa4eae2, _0x58cfb8, _0x15d916, _0x2cf65c) {
  return {
    code: _0xa4eae2,
    severity: "error",
    message: _0x58cfb8,
    path: _0x15d916,
    details: _0x2cf65c,
  };
}
function Y(_0x344b4d, _0x5c2563) {
  try {
    return _0x344b4d.get(_0x5c2563);
  } catch {
    return null;
  }
}
function X(
  _0x2b664d,
  _0x250315,
  _0x110748,
  _0x2e82d1 = "error",
  _0x40a81d,
  _0x5a5813,
) {
  return {
    code: _0x2b664d,
    severity: _0x2e82d1,
    message: _0x250315,
    path: _0x110748,
    details: _0x40a81d,
    ..._0x5a5813,
  };
}
function Ee(_0x1e7c10) {
  return _0x1e7c10.some((_0x20b1d6) => _0x20b1d6.severity === "error");
}
function De(_0xf5ebc6, _0x3a7a50, _0x417301, _0x290870 = "source") {
  if (_0xf5ebc6 == null)
    return (
      _0x417301.push(
        X("INVALID_RANGE", "Chart source is required.", _0x290870),
      ),
      null
    );
  let _0xeb0233 = Ve(_0xf5ebc6) ? _0xf5ebc6 : undefined;
  if (_0xeb0233 && "ranges" in _0xeb0233)
    return "range" in _0xeb0233 && _0xeb0233.range !== undefined
      ? (_0x417301.push(
          X(
            "INVALID_RANGE",
            "Chart source must specify exactly one of range or ranges.",
            _0x290870,
          ),
        ),
        null)
      : Oe(_0xeb0233, _0x3a7a50, _0x417301, _0x290870);
  if (_0xeb0233 && (!("range" in _0xeb0233) || _0xeb0233.range === undefined))
    return (
      _0x417301.push(
        X(
          "INVALID_RANGE",
          "Chart source must specify exactly one of range or ranges.",
          _0x290870,
        ),
      ),
      null
    );
  let _0xc041a9 = ze(
    _0xeb0233 ? _0xeb0233.range : _0xf5ebc6,
    _0x417301,
    _0xeb0233 ? _0x290870 + ".range" : _0x290870,
  );
  if (!_0xc041a9) return null;
  let _0x5e3283 =
    (_0xeb0233 == null ? undefined : _0xeb0233.unitId) ?? _0x3a7a50.unitId;
  if (_0x5e3283 !== _0x3a7a50.unitId)
    return (
      _0x417301.push(
        X(
          "INVALID_RANGE",
          "Chart\x20facade\x20create/update\x20only\x20supports\x20sources\x20in\x20the\x20same\x20workbook.",
          _0x290870 + ".unitId",
        ),
      ),
      null
    );
  let _0x5d8c2e =
      (_0xeb0233 == null ? undefined : _0xeb0233.sheetName) ??
      _0xc041a9.sheetName,
    _0x12334e = _0x5d8c2e,
    _0x3c8b3c =
      (_0xeb0233 == null ? undefined : _0xeb0233.sheetId) ??
      _0x3a7a50.subUnitId;
  if (_0x5d8c2e) {
    let _0x4b1a5a = _0x3a7a50.workbook["getSheetBySheetName"](_0x5d8c2e);
    if (!_0x4b1a5a)
      return (
        _0x417301.push(
          X(
            "INVALID_RANGE",
            "Worksheet not found: " + _0x5d8c2e + ".",
            _0x290870 + ".sheetName",
          ),
        ),
        null
      );
    _0x3c8b3c = _0x4b1a5a.getSheetId();
  } else {
    if (_0xeb0233 != null && _0xeb0233.sheetId) {
      let _0x30188b = _0x3a7a50.workbook["getSheetBySheetId"](
        _0xeb0233.sheetId,
      );
      if (!_0x30188b)
        return (
          _0x417301.push(
            X(
              "INVALID_RANGE",
              "Worksheet not found: " + _0xeb0233.sheetId + ".",
              _0x290870 + ".sheetId",
            ),
          ),
          null
        );
      _0x12334e = _0x30188b.getName();
    }
  }
  Ie(_0xc041a9.range, _0x417301, _0xeb0233 ? _0x290870 + ".range" : _0x290870);
  let _0x317b55 = He(_0xeb0233 == null ? undefined : _0xeb0233.orientation),
    _0x1f187a = _0xeb0233 == null ? undefined : _0xeb0233.headerRow,
    _0x4aae66 = {
      rangeInfo: {
        unitId: _0x5e3283,
        subUnitId: _0x3c8b3c,
        range: _0xc041a9.range,
      },
      ...(_0x317b55 === undefined ? {} : { isRowDirection: _0x317b55 }),
      ...(_0x1f187a === undefined ? {} : { headerRow: _0x1f187a }),
    };
  return _0x1f187a !== undefined &&
    !Re(_0x1f187a, _0xc041a9.range, _0x417301, _0x290870 + ".headerRow")
    ? null
    : {
        kind: "range",
        range: _0xc041a9.range,
        sourceSheetName: _0x12334e,
        isRowDirection: _0x317b55,
        rangeInfo: _0x4aae66,
      };
}
function Oe(_0x3a5e95, _0x573aa7, _0x3ceb96, _0x4c49c6) {
  if (!Array.isArray(_0x3a5e95.ranges) || _0x3a5e95.ranges["length"] === 0)
    return (
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "Chart source ranges must contain at least one vector.",
          _0x4c49c6 + ".ranges",
        ),
      ),
      null
    );
  if (_0x3a5e95.unitId !== undefined && _0x3a5e95.unitId !== _0x573aa7.unitId)
    return (
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "Chart\x20facade\x20create/update\x20only\x20supports\x20sources\x20in\x20the\x20same\x20workbook.",
          _0x4c49c6 + ".unitId",
        ),
      ),
      null
    );
  let _0x42ef24 = [],
    _0x4d7b79,
    _0x49053d;
  _0x3a5e95.ranges["forEach"]((_0x398099, _0x1adea0) => {
    let _0x2fb776 = _0x4c49c6 + ".ranges." + _0x1adea0,
      _0x276489 = ke(
        _0x398099 == null ? undefined : _0x398099.range,
        _0x3a5e95,
        _0x573aa7,
        _0x3ceb96,
        _0x2fb776 + ".range",
      ),
      _0x5821e3 =
        (_0x398099 == null ? undefined : _0x398099.header) === undefined
          ? undefined
          : ke(
              _0x398099.header,
              _0x3a5e95,
              _0x573aa7,
              _0x3ceb96,
              _0x2fb776 + ".header",
            );
    if (
      !_0x276489 ||
      ((_0x398099 == null ? undefined : _0x398099.header) !== undefined &&
        !_0x5821e3)
    )
      return;
    let _0x938259 = _0x276489.range,
      _0x2b1816 = _0x938259.startRow === _0x938259.endRow;
    if (_0x2b1816 === (_0x938259.startColumn === _0x938259.endColumn)) {
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "Each\x20chart\x20source\x20vector\x20must\x20be\x20exactly\x20one\x20row\x20or\x20one\x20column.",
          _0x2fb776 + ".range",
        ),
      );
      return;
    }
    let _0x219f19 = _0x2b1816,
      _0x5129f1 = _0x2b1816
        ? _0x938259.endColumn - _0x938259.startColumn + 1
        : _0x938259.endRow - _0x938259.startRow + 1;
    if (_0x49053d !== undefined && _0x49053d !== _0x219f19) {
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "All chart source vectors must have the same orientation.",
          _0x2fb776 + ".range",
        ),
      );
      return;
    }
    if (_0x4d7b79 !== undefined && _0x4d7b79 !== _0x5129f1) {
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "All chart source vectors must have equal length.",
          _0x2fb776 + ".range",
        ),
      );
      return;
    }
    if (
      _0x5821e3 &&
      (_0x5821e3.range["startRow"] !== _0x5821e3.range["endRow"] ||
        _0x5821e3.range["startColumn"] !== _0x5821e3.range["endColumn"])
    ) {
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "A chart source vector header must be a single cell.",
          _0x2fb776 + ".header",
        ),
      );
      return;
    }
    ((_0x49053d = _0x219f19),
      (_0x4d7b79 = _0x5129f1),
      _0x42ef24.push({
        ...(_0x5821e3 ? { header: _0x5821e3 } : {}),
        range: _0x276489,
      }));
  });
  let _0x40928c = He(_0x3a5e95.orientation);
  return (
    _0x40928c !== undefined &&
      _0x49053d !== undefined &&
      _0x40928c !== _0x49053d &&
      _0x3ceb96.push(
        X(
          "INVALID_RANGE",
          "Chart source orientation must match the row or column vectors.",
          _0x4c49c6 + ".orientation",
        ),
      ),
    _0x42ef24.length === _0x3a5e95.ranges["length"] && !Ee(_0x3ceb96)
      ? { kind: "ranges", ranges: _0x42ef24, isRowDirection: _0x49053d }
      : null
  );
}
function ke(_0x3f6037, _0x2ddde7, _0x5f3d06, _0x32b20d, _0x25eea8) {
  let _0x203dd6 = ze(_0x3f6037, _0x32b20d, _0x25eea8);
  if (!_0x203dd6) return null;
  let _0x222bff = _0x2ddde7.unitId ?? _0x5f3d06.unitId,
    _0x2c938b = _0x203dd6.sheetName ?? _0x2ddde7.sheetName,
    _0x46b3d5 = _0x2ddde7.sheetId ?? _0x5f3d06.subUnitId;
  if (_0x2c938b) {
    let _0x5405dd = _0x5f3d06.workbook["getSheetBySheetName"](_0x2c938b);
    if (!_0x5405dd)
      return (
        _0x32b20d.push(
          X(
            "INVALID_RANGE",
            "Worksheet not found: " + _0x2c938b + ".",
            _0x25eea8,
          ),
        ),
        null
      );
    _0x46b3d5 = _0x5405dd.getSheetId();
  } else {
    if (
      _0x2ddde7.sheetId &&
      !_0x5f3d06.workbook["getSheetBySheetId"](_0x2ddde7.sheetId)
    )
      return (
        _0x32b20d.push(
          X(
            "INVALID_RANGE",
            "Worksheet\x20not\x20found:\x20" + _0x2ddde7.sheetId + ".",
            _0x25eea8,
          ),
        ),
        null
      );
  }
  return (
    Le(_0x203dd6.range, _0x32b20d, _0x25eea8),
    { unitId: _0x222bff, subUnitId: _0x46b3d5, range: _0x203dd6.range }
  );
}
function Ae(_0x4b1392, _0x5952dc, _0x5de868 = 0) {
  var _0x3c7472, _0x981e95;
  let _0x5b6db1 =
    (_0x3c7472 = _0x5952dc.inferInitialChartSource) == null
      ? undefined
      : _0x3c7472.call(
          _0x5952dc,
          _0x4b1392.kind === "ranges" ? _0x4b1392.ranges : _0x4b1392.rangeInfo,
        );
  if (_0x5b6db1) return je(_0x5b6db1.dataSet, _0x5de868);
  if (_0x4b1392.kind === "ranges")
    return _0x4b1392.ranges["map"]((_0x1a76a7, _0x4eba34) => {
      var _0xc3b80c;
      let _0xbb907d = _0x1a76a7.header,
        _0x2cae05 = _0xbb907d
          ? _0x5952dc.workbook["getSheetBySheetId"](_0xbb907d.subUnitId)
          : null,
        _0x4a201f = _0x5952dc.workbook["getSheetBySheetId"](
          _0x1a76a7.range["subUnitId"],
        );
      return {
        index: _0x4eba34,
        name: _0xbb907d
          ? String(
              (_0x2cae05 == null ||
              (_0xc3b80c = _0x2cae05.getCell(
                _0xbb907d.range["startRow"],
                _0xbb907d.range["startColumn"],
              )) == null
                ? undefined
                : _0xc3b80c.v) ?? "",
            )
          : "",
        items: _0x4a201f
          ? Ne(_0x4a201f, _0x1a76a7.range["range"], _0x4b1392.isRowDirection)
          : [],
      };
    }).filter((_0x16de54) => _0x16de54.index !== _0x5de868);
  let _0x56c8e3 = _0x4b1392.rangeInfo["rangeInfo"],
    _0x107ebd = _0x5952dc.workbook["getSheetBySheetId"](_0x56c8e3.subUnitId);
  if (!_0x107ebd) return [];
  let _0x2e5aa5 =
      _0x4b1392.isRowDirection ??
      ((_0x981e95 = _0x5952dc.resolveAutoIsRowDirection) == null
        ? undefined
        : _0x981e95.call(_0x5952dc, _0x4b1392.rangeInfo)) ??
      true,
    _0x1d2abd = t.Range["transformRange"](_0x56c8e3.range, _0x107ebd),
    { dataSet: _0x37cace } = M(
      x({
        numfmtOptions: {
          locale: (0, t.getNumfmtLocaleTag)(
            _0x5952dc.workbook["getSnapshot"]().locale,
          ),
          dateSystem: _0x5952dc.workbook["getDateSystem"](),
        },
        range: _0x1d2abd,
        styles: _0x5952dc.workbook["getStyles"](),
        worksheet: _0x107ebd,
      }),
      {
        isRowDirection: _0x2e5aa5,
        ...(_0x4b1392.rangeInfo["headerRow"] === undefined
          ? {}
          : { headerRow: _0x4b1392.rangeInfo["headerRow"] }),
      },
    );
  return je(_0x37cace, _0x5de868);
}
function je(_0x1f415c, _0x1441ef) {
  return _0x1f415c.source["map"]((_0x57375c, _0x73c813) => ({
    index: _0x73c813,
    name: Me(_0x1f415c.dimensions[_0x73c813]),
    items: _0x57375c.map((_0xf322db, _0x514a1a) => {
      var _0x5af8fd;
      let _0x5441dc = (0, e.toChartDataItem)(_0xf322db);
      return {
        ..._0x5441dc,
        label:
          ((_0x5af8fd = _0x1f415c.sourceLabels) == null ||
          (_0x5af8fd = _0x5af8fd[_0x73c813]) == null
            ? undefined
            : _0x5af8fd[_0x514a1a]) ?? _0x5441dc.label,
      };
    }),
  })).filter((_0x5427f3) => _0x5427f3.index !== _0x1441ef);
}
function Me(_0x15b114) {
  return typeof _0x15b114 == "string"
    ? _0x15b114
    : ((_0x15b114 == null ? undefined : _0x15b114.displayName) ??
        (_0x15b114 == null ? undefined : _0x15b114.name) ??
        "");
}
function Ne(_0x246a39, _0x550d7f, _0xd3a745) {
  let _0x2b4a6f = [];
  if (_0xd3a745)
    for (
      let _0xd09b82 = _0x550d7f.startColumn;
      _0xd09b82 <= _0x550d7f.endColumn;
      _0xd09b82++
    ) {
      var _0x25be62;
      _0x2b4a6f.push(
        (0, e.toChartDataItem)(
          (_0x25be62 = _0x246a39.getCell(_0x550d7f.startRow, _0xd09b82)) == null
            ? undefined
            : _0x25be62.v,
        ),
      );
    }
  else
    for (
      let _0x25648e = _0x550d7f.startRow;
      _0x25648e <= _0x550d7f.endRow;
      _0x25648e++
    ) {
      var _0x52e070;
      _0x2b4a6f.push(
        (0, e.toChartDataItem)(
          (_0x52e070 = _0x246a39.getCell(_0x25648e, _0x550d7f.startColumn)) ==
            null
            ? undefined
            : _0x52e070.v,
        ),
      );
    }
  return _0x2b4a6f;
}
function Pe(_0x3d58bf, _0xf4ae3c) {
  let {
      rangeInfo: _0x1dfc1b,
      isRowDirection: _0x560e56,
      headerRow: _0x39598f,
    } = _0x3d58bf,
    _0x246eb9 =
      _0xf4ae3c == null
        ? undefined
        : _0xf4ae3c.getSheetBySheetId(_0x1dfc1b.subUnitId),
    _0x53da37 = "auto";
  return (
    _0x560e56 !== undefined && (_0x53da37 = _0x560e56 ? "rows" : "columns"),
    {
      range: _0x1dfc1b.range,
      unitId: _0x1dfc1b.unitId,
      sheetId: _0x1dfc1b.subUnitId,
      sheetName: _0x246eb9 == null ? undefined : _0x246eb9.getName(),
      orientation: _0x53da37,
      ...(_0x39598f === undefined ? {} : { headerRow: _0x39598f }),
    }
  );
}
function Fe(_0x1a9eb9, _0x47f5bd) {
  var _0x291c1b;
  let _0x3da14b = (_0xe6f6c8) => {
      let _0x3f1d9e =
        _0x47f5bd == null
          ? undefined
          : _0x47f5bd.getSheetBySheetId(_0xe6f6c8.subUnitId);
      return {
        range: _0xe6f6c8.range,
        unitId: _0xe6f6c8.unitId,
        sheetId: _0xe6f6c8.subUnitId,
        sheetName: _0x3f1d9e == null ? undefined : _0x3f1d9e.getName(),
        orientation: "auto",
      };
    },
    _0x4281d5 =
      (_0x291c1b = _0x1a9eb9[0]) == null ? undefined : _0x291c1b.range["range"];
  return {
    ranges: _0x1a9eb9.map((_0x3f60aa) => ({
      range: _0x3da14b(_0x3f60aa.range),
      ...(_0x3f60aa.header ? { header: _0x3da14b(_0x3f60aa.header) } : {}),
    })),
    orientation:
      _0x4281d5 && _0x4281d5.startRow === _0x4281d5.endRow ? "rows" : "columns",
  };
}
function Ie(_0x2f6dbf, _0x5a6057, _0xcef85e) {
  (Le(_0x2f6dbf, _0x5a6057, _0xcef85e),
    _0x2f6dbf.startRow === _0x2f6dbf.endRow &&
      _0x2f6dbf.startColumn === _0x2f6dbf.endColumn &&
      _0x5a6057.push(
        X(
          "SINGLE_CELL_SOURCE",
          "Chart\x20source\x20must\x20contain\x20more\x20than\x20one\x20cell.",
          _0xcef85e,
        ),
      ));
}
function Le(_0x326201, _0x1fd0c1, _0x46b746) {
  if (
    !Number.isInteger(_0x326201.startRow) ||
    !Number.isInteger(_0x326201.endRow) ||
    !Number.isInteger(_0x326201.startColumn) ||
    !Number.isInteger(_0x326201.endColumn)
  ) {
    _0x1fd0c1.push(
      X(
        "INVALID_RANGE",
        "Chart source range must use integer row and column indexes.",
        _0x46b746,
      ),
    );
    return;
  }
  (_0x326201.startRow > _0x326201.endRow ||
    _0x326201.startColumn > _0x326201.endColumn ||
    _0x326201.startRow < 0 ||
    _0x326201.startColumn < 0) &&
    _0x1fd0c1.push(
      X(
        "INVALID_RANGE",
        "Chart\x20source\x20range\x20is\x20invalid.",
        _0x46b746,
      ),
    );
}
function Re(_0x1e0f21, _0x1195f2, _0x44cd83, _0x258365) {
  let _0x4ec99c =
    Number.isInteger(_0x1e0f21) &&
    (_0x1e0f21 === e.CHART_HEADER_ROW_NONE ||
      (_0x1e0f21 >= 0 && _0x1e0f21 <= _0x1195f2.endRow - _0x1195f2.startRow));
  return (
    _0x4ec99c ||
      _0x44cd83.push(
        X(
          "INVALID_RANGE",
          "Chart source headerRow must be a zero-based row offset inside the source range.",
          _0x258365,
        ),
      ),
    _0x4ec99c
  );
}
function ze(_0xe61cb7, _0x4aa6bd, _0xbebc32) {
  if (typeof _0xe61cb7 == "string")
    try {
      let _0x905ebd = (0, a.deserializeRangeWithSheet)(_0xe61cb7);
      return { range: _0x905ebd.range, sheetName: _0x905ebd.sheetName };
    } catch (_0x2757ab) {
      return (
        _0x4aa6bd.push(
          X(
            "INVALID_RANGE",
            "Invalid chart source range: " + _0xe61cb7 + ".",
            _0xbebc32,
            "error",
            _0x2757ab,
          ),
        ),
        null
      );
    }
  return Be(_0xe61cb7)
    ? { range: _0xe61cb7 }
    : (_0x4aa6bd.push(
        X(
          "INVALID_RANGE",
          "Chart source range must be a range string or IRange object.",
          _0xbebc32,
        ),
      ),
      null);
}
function Be(_0xd90281) {
  return !!(
    _0xd90281 &&
    typeof _0xd90281 == "object" &&
    "startRow" in _0xd90281 &&
    "endRow" in _0xd90281 &&
    "startColumn" in _0xd90281 &&
    "endColumn" in _0xd90281
  );
}
function Ve(_0x11b7b2) {
  return !!(_0x11b7b2 && typeof _0x11b7b2 == "object" && !Be(_0x11b7b2));
}
function He(_0x380297) {
  switch (_0x380297) {
    case "row":
    case "rows":
    case "rowsAsSeries":
      return true;
    case "column":
    case "columns":
    case "columnsAsSeries":
      return false;
    default:
      return;
  }
}
var Ue = class {
  constructor(_0x6f1d26) {
    ((this._context = _0x6f1d26),
      w(this, "_injector", undefined),
      (this._injector = _0x6f1d26.injector));
  }
  describe(_0x4d0c61 = {}, _0x366024) {
    let {
        chartId: _0x54ead7,
        subUnitId: _0x1c445e,
        unitId: _0x24a973,
      } = this._context,
      _0x427d10 = this._injector["get"](U),
      _0x1d4382 = this._getChartModel(),
      _0x175fb2 = _0x427d10.getChartSourceSpec(_0x54ead7);
    if (!_0x175fb2) throw Error("Chart source not found: " + _0x54ead7);
    let _0x2a49c5 = be(this._injector, _0x24a973) ?? undefined;
    return {
      ...(0, e.describeChartModel)(_0x1d4382, _0x4d0c61, _0x366024),
      id: _0x54ead7,
      source: Array.isArray(_0x175fb2)
        ? Fe(_0x175fb2, _0x2a49c5)
        : Pe(_0x175fb2, _0x2a49c5),
      layout: Ce({
        unitId: _0x24a973,
        subUnitId: _0x1c445e,
        chartId: _0x54ead7,
        injector: this._injector,
      }),
    };
  }
  getInfo() {
    var _0x333628, _0x380731, _0x58b463, _0xa7ff9d, _0x21c3e6;
    let _0x68351 = this.describe(),
      _0x21cfec = this._injector["get"](U).getChartSourceSpec(
        this._context["chartId"],
      );
    if (!_0x21cfec)
      throw Error(
        "Chart\x20source\x20not\x20found:\x20" + this._context["chartId"],
      );
    let _0x2d78d9 = Array.isArray(_0x21cfec)
        ? {
            ranges: _0x21cfec.map(
              ({ header: _0x27caec, range: _0x194beb }) => ({
                ...(_0x27caec ? { header: _0x27caec.range } : {}),
                range: _0x194beb.range,
              }),
            ),
            orientation:
              ((_0x333628 = _0x21cfec[0]) == null
                ? undefined
                : _0x333628.range["range"].startRow) ===
              ((_0x380731 = _0x21cfec[0]) == null
                ? undefined
                : _0x380731.range["range"].endRow)
                ? "rows"
                : "columns",
          }
        : Pe(_0x21cfec),
      _0x14df61 =
        (_0x58b463 = _0x68351.layout) == null ? undefined : _0x58b463.size;
    return {
      config: (0, e.toChartCreateConfigSnapshot)(_0x68351),
      dataSource: t.Tools["deepClone"](_0x2d78d9),
      position: t.Tools["deepClone"](
        (_0xa7ff9d = _0x68351.layout) == null ? undefined : _0xa7ff9d.position,
      ),
      size:
        (_0x14df61 == null ? undefined : _0x14df61.width) === undefined ||
        _0x14df61.height === undefined
          ? undefined
          : { width: _0x14df61.width, height: _0x14df61.height },
      anchor: t.Tools["deepClone"](
        (_0x21c3e6 = _0x68351.layout) == null ? undefined : _0x21c3e6.anchor,
      ),
    };
  }
  commit(_0x58f764) {
    var _0x20d600;
    let { chartId: _0x324b9b, unitId: _0x3da4ac } = this._context,
      _0x446701 = this._getChartModel(),
      _0x59d376 = (0, e.toChartModelUpdate)(_0x58f764, {
        series:
          (_0x20d600 = _0x446701.config) == null ? undefined : _0x20d600.series,
        currentChartType: _0x446701.chartType,
        currentStyle: _0x446701.style,
        currentContext: _0x446701.context,
        currentDataAggregation: _0x446701.dataAggregation,
      });
    if (
      !this._injector["get"](t.ICommandService).syncExecuteCommand(K.id, {
        unitId: _0x3da4ac,
        chartModelId: _0x324b9b,
        ..._0x59d376,
        [G]: true,
      })
    )
      throw Error("Failed to update Sheet chart configuration.");
  }
  async update(_0x1d34e4) {
    let _0x532dc1 = {};
    return (
      _0x1d34e4.anchor !== undefined && (_0x532dc1.anchor = _0x1d34e4.anchor),
      _0x1d34e4.position !== undefined &&
        (_0x532dc1.position = _0x1d34e4.position),
      _0x1d34e4.size !== undefined && (_0x532dc1.size = _0x1d34e4.size),
      this.commitChanges(_0x1d34e4.dataSource, _0x1d34e4.config, _0x532dc1)
    );
  }
  async commitChanges(_0x142a97, _0x38cb7c, _0x5ba2fd) {
    (this._resolveSourceRange(_0x142a97),
      this._replaceConfig(_0x38cb7c),
      this.commitHost({ source: _0x142a97 }),
      Object.keys(_0x5ba2fd).length > 0 &&
        this.commitHost({ layout: _0x5ba2fd }));
  }
  _replaceConfig(_0x1a3e80) {
    var _0x55f082;
    let { chartId: _0x9530bc, unitId: _0x57cc8f } = this._context,
      _0x17da73 = this._getChartModel(),
      _0x624c6d = (0, e.toChartModelConfigReplacement)(_0x1a3e80, {
        series:
          (_0x55f082 = _0x17da73.config) == null ? undefined : _0x55f082.series,
        currentStyle: _0x17da73.style,
      });
    if (
      !this._injector["get"](t.ICommandService).syncExecuteCommand(K.id, {
        unitId: _0x57cc8f,
        chartModelId: _0x9530bc,
        ..._0x624c6d,
        [G]: true,
      })
    )
      throw Error("Failed to update Sheet chart configuration.");
  }
  setDataSource(_0x41c9a9) {
    this.commitHost({ source: _0x41c9a9 });
  }
  setAbsolutePosition(_0x197d89, _0x22052c) {
    this.commitHost({ layout: { position: { x: _0x197d89, y: _0x22052c } } });
  }
  setSize(_0x23727d, _0x2393d1) {
    this.commitHost({
      layout: { size: { width: _0x23727d, height: _0x2393d1 } },
    });
  }
  arrange(_0x53648f) {
    let {
        chartId: _0x333167,
        subUnitId: _0x3c9ed0,
        unitId: _0xdd939a,
      } = this._context,
      _0x22a368 = this._injector["get"](n.ISheetDrawingService).getDrawingOrder(
        _0xdd939a,
        _0x3c9ed0,
      ),
      _0x18d98b = _0x22a368.indexOf(_0x333167);
    if (_0x18d98b < 0)
      throw Error("Sheet chart drawing not found: " + _0x333167);
    if (
      (0, t.getDrawingOrderIndex)(_0x18d98b, _0x22a368.length, _0x53648f) !==
        _0x18d98b &&
      !this._injector["get"](t.ICommandService).syncExecuteCommand(
        n.SetDrawingArrangeCommand["id"],
        {
          unitId: _0xdd939a,
          subUnitId: _0x3c9ed0,
          drawingIds: [_0x333167],
          arrangeType: _0x53648f,
        },
      )
    )
      throw Error("Failed to arrange Sheet chart.");
  }
  setZOrder(_0x1c6397) {
    let {
        chartId: _0x266fa5,
        subUnitId: _0x1147fb,
        unitId: _0x44a32d,
      } = this._context,
      _0x30a361 = this._injector["get"](n.ISheetDrawingService).getDrawingOrder(
        _0x44a32d,
        _0x1147fb,
      ),
      _0x51032d = _0x30a361.indexOf(_0x266fa5);
    if (_0x51032d < 0)
      throw Error("Sheet chart drawing not found: " + _0x266fa5);
    if (
      (0, t.normalizeDrawingOrderIndex)(_0x1c6397, _0x30a361.length) !==
        _0x51032d &&
      !this._injector["get"](t.ICommandService).syncExecuteCommand(
        n.SetDrawingArrangeCommand["id"],
        {
          unitId: _0x44a32d,
          subUnitId: _0x1147fb,
          drawingIds: [_0x266fa5],
          zOrder: _0x1c6397,
        },
      )
    )
      throw Error("Failed\x20to\x20update\x20Sheet\x20chart\x20z-order.");
  }
  resolveData(_0x4a7cd0, _0x530bf8) {
    let _0x22865d = this._getChartModel(),
      _0x5ed85b = _0x530bf8 ? this.resolveSource(_0x530bf8) : undefined;
    return (0, e.buildChartPreviewData)(
      _0x22865d,
      _0x4a7cd0,
      _0x5ed85b == null ? undefined : _0x5ed85b.dataSet,
    );
  }
  resolveSource(_0x348c1d) {
    let { rangeInfo: _0x48f4a8 } = this._resolveSourceRange(_0x348c1d),
      _0x3bde55 = this._injector["get"](U).inferInitialChartSource(
        _0x48f4a8,
        this._getChartModel().chartType,
      );
    return {
      dataSet: _0x3bde55.dataSet,
      isRowDirection: _0x3bde55.mapping["isRowDirection"],
    };
  }
  commitHost(_0x1dc6c0) {
    let _0x2953bb = this._injector["get"](t.ICommandService),
      {
        chartId: _0x10337c,
        subUnitId: _0x51e21a,
        unitId: _0x46c73b,
      } = this._context;
    if (_0x1dc6c0.source !== undefined) {
      let { rangeInfo: _0x2e64b8 } = this._resolveSourceRange(_0x1dc6c0.source);
      if (
        !_0x2953bb.syncExecuteCommand(ge.id, {
          unitId: _0x46c73b,
          chartModelId: _0x10337c,
          range: _0x2e64b8,
        })
      )
        throw Error("Failed\x20to\x20update\x20Sheet\x20chart\x20source.");
    }
    if (_0x1dc6c0.layout !== undefined) {
      let _0x588ef8 = [],
        _0xcc8876 = xe(
          {
            unitId: _0x46c73b,
            subUnitId: _0x51e21a,
            chartId: _0x10337c,
            injector: this._injector,
          },
          _0x1dc6c0.layout,
          _0x588ef8,
        );
      if (
        (_0xcc8876 || We(_0x588ef8, "Invalid Sheet chart layout."),
        !(
          _0xcc8876 &&
          _0x2953bb.syncExecuteCommand(n.SetSheetDrawingCommand["id"], {
            unitId: _0x46c73b,
            drawings: [_0xcc8876],
          })
        ))
      )
        throw Error("Failed\x20to\x20update\x20Sheet\x20chart\x20layout.");
    }
  }
  remove() {
    let {
      chartId: _0x154fc6,
      subUnitId: _0x616b93,
      unitId: _0x34f227,
    } = this._context;
    return this._injector["get"](t.ICommandService).executeCommand(
      n.RemoveSheetDrawingCommand["id"],
      {
        unitId: _0x34f227,
        drawings: [
          {
            unitId: _0x34f227,
            subUnitId: _0x616b93,
            drawingId: _0x154fc6,
            drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
          },
        ],
      },
    );
  }
  _resolveSourceRange(_0xbbca00) {
    let { subUnitId: _0x189bcf, unitId: _0x1f80eb } = this._context,
      _0x15bbc8 = this._injector["get"](U),
      _0x3629e8 = this._getChartModel(),
      _0x23d040 = be(this._injector, _0x1f80eb);
    if (!_0x23d040) throw Error("Workbook\x20not\x20found:\x20" + _0x1f80eb);
    let _0x3f3564 = [],
      _0x5e40a3 = De(
        _0xbbca00,
        {
          unitId: _0x1f80eb,
          subUnitId: _0x189bcf,
          workbook: _0x23d040,
          resolveAutoIsRowDirection: (_0x2475fe) =>
            _0x15bbc8.inferInitialChartMapping(_0x2475fe, _0x3629e8.chartType)
              .isRowDirection,
        },
        _0x3f3564,
      );
    return (
      _0x5e40a3 || We(_0x3f3564, "Invalid Sheet chart source."),
      {
        rangeInfo:
          _0x5e40a3.kind === "range" ? _0x5e40a3.rangeInfo : _0x5e40a3.ranges,
      }
    );
  }
  _getChartModel() {
    let { chartId: _0x44b07d } = this._context,
      _0x35ddc3 = this._injector["get"](U).getChartModel(_0x44b07d);
    if (!_0x35ddc3) throw Error("Chart\x20not\x20found:\x20" + _0x44b07d);
    return _0x35ddc3;
  }
};
function We(_0x5e147f, _0x548e8d) {
  throw Error(
    _0x5e147f.map(({ message: _0x2f5fa7 }) => _0x2f5fa7).join(";\x20") ||
      _0x548e8d,
  );
}
const Ge = Number.parseInt(1788764280),
  Ke = ["2", "4", "268435460"],
  qe = ["all"],
  Je = [];
function Ye(_0x1d2367) {
  let { ls: _0xc50568, pbk: _0x36c239 } =
    _0x1d2367.get(t.IConfigService).getConfig(s.LS_CONFIG_KEY) ?? {};
  if (!_0xc50568 || !_0x36c239) return Ke;
  let _0x24f634 = (0, s.getLicenseInfo)(_0xc50568, _0x36c239),
    _0x3005da = _0x24f634.message;
  return _0x24f634.valid &&
    (0, s.isFeatureAuthorizedWithinTime)(_0x3005da, "sf", Ge)
    ? (0, s.getSheetFeatureLimit)(_0x3005da, true, "c", qe, Ke, Je)
    : Ke;
}
const Xe = "sheets-chart.config",
  Ze = { chartRenderMode: e.ChartRenderMode["Image"] };
function Qe(_0x42e898) {
  if (Array.isArray(_0x42e898)) return { ranges: _0x42e898 };
  let {
    headerRow: _0x1b6bfb,
    rangeInfo: _0x441086,
    isRowDirection: _0x40bf9c,
  } = _0x42e898;
  return {
    range: _0x441086.range,
    rangeUnitId: _0x441086.unitId,
    rangeSubUnitId: _0x441086.subUnitId,
    ...(_0x40bf9c === undefined ? {} : { isRowDirection: _0x40bf9c }),
    ...(_0x1b6bfb === undefined ? {} : { headerRow: _0x1b6bfb }),
  };
}
function $e(_0x2b4fcb) {
  let _0x351a40 = _0x2b4fcb.unitId,
    _0x2ac3f0 = _0x2b4fcb.subUnitId;
  return "ranges" in _0x2b4fcb
    ? _0x2b4fcb.ranges
    : "range" in _0x2b4fcb
      ? {
          rangeInfo: {
            unitId: _0x2b4fcb.rangeUnitId ?? _0x351a40,
            subUnitId: _0x2b4fcb.rangeSubUnitId ?? _0x2ac3f0,
            range: _0x2b4fcb.range,
          },
          ...(_0x2b4fcb.isRowDirection === undefined
            ? {}
            : { isRowDirection: _0x2b4fcb.isRowDirection }),
          ...(_0x2b4fcb.headerRow === undefined
            ? {}
            : { headerRow: _0x2b4fcb.headerRow }),
        }
      : null;
}
const Z = {
    id: "sheet.mutation.insert-chart",
    type: t.CommandType["MUTATION"],
    handler: (_0x1db582, _0x368dd4) => {
      let {
          unitId: _0x5057fe,
          subUnitId: _0x58ed79,
          chartId: _0x30b042,
          context: _0x5b6f8e,
          style: _0x575fac,
          dataAggregation: _0x374c38,
        } = _0x368dd4,
        _0x3c91cb = $e(_0x368dd4);
      return _0x3c91cb
        ? (_0x1db582
            .get(U)
            .createChartModel(
              _0x5057fe,
              _0x58ed79,
              {
                rangeInfo: _0x3c91cb,
                id: _0x30b042,
                chartType: _0x368dd4.chartType,
                context: _0x5b6f8e,
                style: _0x575fac,
                dataAggregation: _0x374c38,
              },
              true,
            ),
          true)
        : false;
    },
  },
  Q = {
    id: "sheet.mutation.remove-chart",
    type: t.CommandType["MUTATION"],
    handler: (_0x5402e4, _0x1593c0) => {
      let { chartId: _0x4b1eec } = _0x1593c0;
      return (_0x5402e4.get(U).removeChartModel(_0x4b1eec), true);
    },
  };
function et(_0x55f99a) {
  var _0x2209c2;
  let _0x3eb509 =
    (_0x2209c2 = _0x55f99a.config) == null ||
    (_0x2209c2 = _0x2209c2.style) == null
      ? undefined
      : _0x2209c2.backgroundColor;
  return _0x3eb509 === undefined
    ? (0, e.resolveChartStyleBackgroundColor)({
        backgroundColor: _0x55f99a.backgroundColor ?? null,
      })
    : (0, e.resolveChartStyleBackgroundColor)({ backgroundColor: _0x3eb509 });
}
function tt(
  _0x55ff9a,
  _0x5cd88b,
  _0x5c3cb7,
  _0x16ebf5,
  _0x5c1ce7,
  _0x59688d,
  _0x114ffa,
) {
  var _0x5545e1;
  let _0x18749d = { x: 200, y: 200 },
    _0x4cd717 = _0x55ff9a
      .get(o.IRenderManagerService)
      .getRenderUnitById(_0x16ebf5),
    _0x290937 =
      _0x4cd717 == null ? undefined : _0x4cd717.scene["getMainViewport"]();
  if (!_0x290937) return _0x18749d;
  let _0x326a99 = _0x5cd88b.getCurrentUnitOfType(
    t.UniverInstanceType["UNIVER_SHEET"],
  );
  if (
    (_0x326a99 == null ? undefined : _0x326a99.getUnitId()) !== _0x16ebf5 ||
    ((_0x5545e1 = _0x5c3cb7.getActiveSheet()) == null
      ? undefined
      : _0x5545e1.getSheetId()) !== _0x5c1ce7
  )
    return _0x18749d;
  let {
    left: _0x438b42,
    top: _0x17fa9d,
    right: _0x2c7046,
    bottom: _0x4a7cb7,
  } = _0x290937.viewBound;
  return ![_0x438b42, _0x17fa9d, _0x2c7046, _0x4a7cb7].every(Number.isFinite) ||
    _0x2c7046 <= _0x438b42 ||
    _0x4a7cb7 <= _0x17fa9d
    ? _0x18749d
    : {
        x: Math.max(
          0,
          Math.round(_0x438b42 + (_0x2c7046 - _0x438b42 - _0x59688d) / 2),
        ),
        y: Math.max(
          0,
          Math.round(_0x17fa9d + (_0x4a7cb7 - _0x17fa9d - _0x114ffa) / 2),
        ),
      };
}
const nt = {
  type: t.CommandType["COMMAND"],
  id: "sheet.command.insert-chart",
  handler: async (_0xcea188, _0x2fa61a) => {
    var _0x3d6c62, _0x4643c0, _0x2ae3b0;
    let { chartType: _0x235f82, source: _0x41d8fb } = _0x2fa61a,
      _0x74fcf6 = Ye(_0xcea188);
    if (_0x74fcf6.length !== 1 && !_0x74fcf6.includes("" + _0x235f82))
      return false;
    let _0x5a2d05 = _0xcea188.get(t.IUniverInstanceService),
      _0x2f9a29 = (0, r.getSheetCommandTarget)(_0x5a2d05, _0x2fa61a);
    if (!_0x2f9a29) return false;
    let _0xee94bf = _0xcea188.get(r.SheetSkeletonService),
      {
        unitId: _0x508f5f,
        subUnitId: _0x1a4b09,
        workbook: _0x413b28,
      } = _0x2f9a29,
      _0xe51dc1 = _0xee94bf.ensureSkeleton(_0x508f5f, _0x1a4b09);
    if (!_0xe51dc1) return false;
    let _0x1cb3b4 = _0xcea188.get(t.ICommandService),
      _0x5da92a = _0xcea188.get(t.IUndoRedoService),
      _0x9ec514 = _0xcea188.get(r.SheetInterceptorService),
      _0x33ccb4 = _0xcea188.get(n.ISheetDrawingService),
      _0x14064c = _0xcea188.get(e.ChartThemeService),
      _0xada9f2 = _0xcea188.get(U),
      _0x2fa6b1 = _0x2fa61a.chartId || (0, t.generateRandomId)(),
      _0x5c40cf;
    try {
      var _0x47e15c;
      _0x5c40cf =
        ((_0x47e15c = _0x2fa61a.config) == null
          ? undefined
          : _0x47e15c.context) === undefined
          ? undefined
          : (0, e.canonicalizeChartContext)(_0x2fa61a.config["context"]);
    } catch {
      return false;
    }
    let _0x167965 = _0xada9f2.inferInitialChartSource(
        _0x41d8fb,
        ((_0x3d6c62 = _0x2fa61a.config) == null
          ? undefined
          : _0x3d6c62.chartType) ?? _0x235f82,
        _0x5c40cf,
      ),
      _0x1cb08e = m(
        _0x167965.dataSet,
        ((_0x4643c0 = _0x2fa61a.config) == null
          ? undefined
          : _0x4643c0.chartType) ?? _0x235f82,
        _0x167965.mapping,
        _0x5c40cf,
      ),
      _0x40d363 = _0x41d8fb;
    if (!Array.isArray(_0x41d8fb)) {
      let {
        headerRow: _0x5afdd8,
        isRowDirection: _0xfcc890,
        ..._0x2a5a8f
      } = _0x41d8fb;
      _0x40d363 = {
        ..._0x2a5a8f,
        isRowDirection: _0x167965.mapping["isRowDirection"],
        headerRow: _0x167965.mapping["headerRow"],
      };
    }
    let _0x22320f = {
        unitId: _0x508f5f,
        subUnitId: _0x1a4b09,
        chartId: _0x2fa6b1,
        chartType: _0x235f82,
        context: _0x1cb08e,
        ...Qe(_0x40d363),
      },
      _0x3bd1e8 =
        (_0x2ae3b0 = _0xcea188
          .get(t.IConfigService)
          .getConfig("sheets-chart.config")) == null
          ? undefined
          : _0x2ae3b0.defaultChartSize,
      _0x1dcb4e =
        _0x2fa61a.width ??
        (_0x3bd1e8 == null ? undefined : _0x3bd1e8.width) ??
        e.defaultChartWidth,
      _0x57b531 =
        _0x2fa61a.height ??
        (_0x3bd1e8 == null ? undefined : _0x3bd1e8.height) ??
        e.defaultChartHeight,
      { x: _0x49c25e, y: _0x56dc87 } =
        _0x2fa61a.position ??
        tt(
          _0xcea188,
          _0x5a2d05,
          _0x413b28,
          _0x508f5f,
          _0x1a4b09,
          _0x1dcb4e,
          _0x57b531,
        ),
      _0x37abdb = {
        from: _0xe51dc1.getCellIndexAndOffsetByPosition(_0x49c25e, _0x56dc87),
        to: _0xe51dc1.getCellIndexAndOffsetByPosition(
          _0x49c25e + _0x1dcb4e,
          _0x56dc87 + _0x57b531,
        ),
      },
      _0x5e3dc1 = _0x2fa61a.theme
        ? _0x14064c.getTheme(_0x2fa61a.theme)
        : _0x14064c.getDefaultTheme(),
      _0x1b08e9 = et(_0x2fa61a),
      _0x4e8f52 = _0x2fa61a.borderColor || _0x5e3dc1.theme["borderColor"],
      _0x84c2ec = {
        unitId: _0x508f5f,
        subUnitId: _0x1a4b09,
        drawingId: _0x2fa6b1,
        drawingType: t.DrawingTypeEnum["DRAWING_CHART"],
        componentKey: "SheetsChartComponent",
        sheetTransform: _0x37abdb,
        transform: {
          left: _0x49c25e,
          top: _0x56dc87,
          width: _0x1dcb4e,
          height: _0x57b531,
        },
        axisAlignSheetTransform: _0x37abdb,
        data: { border: _0x4e8f52, background: _0x1b08e9 },
        allowTransform: true,
      },
      {
        undo: _0x3f7221,
        redo: _0x176792,
        objects: _0x3c51d1,
      } = _0x33ccb4.getBatchAddOp([_0x84c2ec]),
      _0x535f97 = _0x9ec514.onCommandExecute({
        id: n.InsertSheetDrawingCommand["id"],
        params: { unitId: _0x508f5f, drawings: [_0x84c2ec] },
      }),
      _0x5d475f = [
        ...(_0x535f97.preRedos ?? []),
        {
          id: n.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x508f5f,
            subUnitId: _0x1a4b09,
            op: _0x176792,
            objects: _0x3c51d1,
            type: n.DrawingApplyType["INSERT"],
          },
        },
        {
          id: n.ClearSheetDrawingTransformerOperation["id"],
          params: [_0x508f5f],
        },
        ..._0x535f97.redos,
        { id: Z.id, params: _0x22320f },
      ],
      _0xbe8ba0 = [
        {
          id: Q.id,
          params: {
            unitId: _0x508f5f,
            subUnitId: _0x1a4b09,
            chartId: _0x2fa6b1,
          },
        },
        ...(_0x535f97.preUndos ?? []),
        {
          id: n.SetDrawingApplyMutation["id"],
          params: {
            unitId: _0x508f5f,
            subUnitId: _0x1a4b09,
            op: _0x3f7221,
            objects: _0x3c51d1,
            type: n.DrawingApplyType["REMOVE"],
          },
        },
        {
          id: n.ClearSheetDrawingTransformerOperation["id"],
          params: [_0x508f5f],
        },
        ..._0x535f97.undos,
      ];
    if (_0x2fa61a.config) {
      let {
          unitId: _0x48978d,
          chartModelId: _0x1ea35f,
          chartType: _0x3dfb89,
          style: _0x5065c4,
          dataAggregation: _0x2c4256,
        } = _0x2fa61a.config,
        _0x2115ed = { unitId: _0x48978d, chartModelId: _0x1ea35f };
      (_0x3dfb89 !== undefined && (_0x2115ed.chartType = _0x3dfb89),
        _0x5065c4 !== undefined && (_0x2115ed.style = _0x5065c4),
        _0x2c4256 !== undefined && (_0x2115ed.dataAggregation = _0x2c4256),
        (_0x3dfb89 !== undefined ||
          _0x5065c4 !== undefined ||
          _0x2c4256 !== undefined) &&
          _0x5d475f.push({ id: W.id, params: _0x2115ed }));
    }
    return (0, t.sequenceExecute)(_0x5d475f, _0x1cb3b4).result
      ? (_0x5da92a.pushUndoRedo({
          unitID: _0x508f5f,
          undoMutations: _0xbe8ba0,
          redoMutations: _0x5d475f,
        }),
        true)
      : false;
  },
};
var rt = "@univerjs-pro/sheets-chart",
  it = "1.0.0-insiders.20260907-70fc579";
let at = class extends t.Disposable {
  constructor(_0x25e985, _0x59488b, _0x1a1e0a, _0x44ceab) {
    (super(),
      (this._commandService = _0x25e985),
      (this._sheetInterceptorService = _0x59488b),
      (this._chartModelService = _0x1a1e0a),
      (this._sheetsChartService = _0x44ceab),
      this._initCommands(),
      this._initCommandInterceptor());
  }
  _initCommands() {
    [nt, K, ge, Z, Q, fe, W, q].forEach((_0x39deaa) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x39deaa)),
    );
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x6b3887) => {
          if (_0x6b3887.id === n.RemoveSheetDrawingCommand["id"]) {
            let { drawings: _0x263ef5 } = _0x6b3887.params,
              _0x58e2ae = _0x263ef5.filter(
                (_0x1211ed) =>
                  _0x1211ed.drawingType === t.DrawingTypeEnum["DRAWING_CHART"],
              );
            if (_0x58e2ae.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x165b06 = [],
              _0xab48d8 = [];
            return (
              _0x58e2ae.forEach((_0x4d0b9a) => {
                let {
                    unitId: _0xdb5d51,
                    subUnitId: _0x19273e,
                    drawingId: _0x38c3d7,
                  } = _0x4d0b9a,
                  _0x102d6f =
                    this._chartModelService["getChartModel"](_0x38c3d7);
                if (!_0x102d6f) return;
                let _0x20e043 =
                  this._sheetsChartService["getChartSourceSpec"](_0x38c3d7);
                if (!_0x20e043)
                  throw TypeError(
                    "Fail to get data source range info, get: " + _0x20e043,
                  );
                _0x165b06.push({
                  id: Q.id,
                  params: {
                    unitId: _0xdb5d51,
                    subUnitId: _0x19273e,
                    chartId: _0x38c3d7,
                  },
                });
                let {
                    chartType: _0x1b1d1d,
                    context: _0x229204,
                    style: _0x31d5df,
                    dataAggregation: _0x39dd3a,
                  } = _0x102d6f.serialize(),
                  _0x33f8a6 = {
                    unitId: _0xdb5d51,
                    subUnitId: _0x19273e,
                    chartId: _0x38c3d7,
                    chartType: _0x1b1d1d,
                    ...Qe(_0x20e043),
                    context: _0x229204,
                    style: _0x31d5df,
                    dataAggregation: _0x39dd3a,
                  };
                _0xab48d8.push({ id: Z.id, params: _0x33f8a6 });
              }),
              { preRedos: _0x165b06, redos: [], preUndos: [], undos: _0xab48d8 }
            );
          }
          return { preRedos: [], redos: [], preUndos: [], undos: [] };
        },
      }),
    );
  }
};
at = P(
  [
    N(0, t.ICommandService),
    N(1, (0, t.Inject)(r.SheetInterceptorService)),
    N(2, (0, t.Inject)(F)),
    N(3, (0, t.Inject)(U)),
  ],
  at,
);
const ot = "SHEET_CHART_PLUGIN";
let $ = class extends t.Plugin {
  constructor(_0x30bd26 = Ze, _0x1c47df, _0x5c3754) {
    (super(),
      (this._config = _0x30bd26),
      (this._injector = _0x1c47df),
      (this._configService = _0x5c3754));
    let { ..._0xde7688 } = (0, t.merge)({}, Ze, this._config);
    this._configService["setConfig"](Xe, _0xde7688);
  }
  onStarting() {
    let _0x204d50 = this._injector;
    ([[F], [V], [H], [U], [at]].forEach((_0x42dac6) =>
      _0x204d50.add(_0x42dac6),
    ),
      (0, t.touchDependencies)(_0x204d50, [[F], [U], [at]]));
  }
};
(w($, "type", t.UniverInstanceType["UNIVER_SHEET"]),
  w($, "pluginName", ot),
  w($, "packageName", rt),
  w($, "version", it),
  ($ = P(
    [
      (0, t.DependentOn)(
        e.UniverChartPlugin,
        s.UniverLicensePlugin,
        r.UniverSheetsPlugin,
      ),
      N(1, (0, t.Inject)(t.Injector)),
      N(2, t.IConfigService),
    ],
    $,
  )),
  (exports.ChartDiagnosticSeverity = ye),
  Object.defineProperty(exports, "ChartModelService", {
    enumerable: true,
    get: function () {
      return F;
    },
  }),
  (exports.ChartSourceKind = ve),
  (exports.ChartSourceOrientation = _e),
  (exports.ChartUpdateConfigCommand = K),
  (exports.ChartUpdateConfigMutation = fe),
  (exports.ChartUpdateSourceCommand = ge),
  (exports.ChartUpdateSourceConfigMutation = q),
  (exports.InsertChartCommand = nt),
  (exports.InsertSheetsChartMutation = Z),
  (exports.RemoveSheetsChartMutation = Q),
  (exports.ReplaceSheetChartConfig = G),
  (exports.SHEETS_CHART_PLUGIN_CONFIG_KEY = Xe),
  (exports.SHEETS_CHART_PLUGIN_NAME = ot),
  (exports.SheetChartConfigAdapter = Ue),
  Object.defineProperty(exports, "SheetsChartService", {
    enumerable: true,
    get: function () {
      return U;
    },
  }),
  Object.defineProperty(exports, "UniverSheetsChartPlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.getAllowedChartTypes = Ye),
  (exports.resolveInitialChartPosition = Se),
  (exports.resolveSourceSeries = Ae),
  (exports.resolveSourceSpec = De),
  (exports.toInsertChartMutationSource = Qe));
