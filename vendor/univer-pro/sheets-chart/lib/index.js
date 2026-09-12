import {
  CHART_HEADER_ROW_NONE as _0x57a659,
  ChartDataSource as _0x49f865,
  ChartModel as _0x327012,
  ChartRenderMode as _0x1ae32d,
  ChartSourceDataTypeEnum as _0x5c01f2,
  ChartThemeService as _0x4ef7ff,
  ChartTypeBits as _0xe4aa5,
  DataOrientation as _0x1e51ae,
  UniverChartPlugin as _0x21c8ca,
  buildChartPreviewData as _0x4b2586,
  canonicalizeChartContext as _0x1d5ac9,
  chartBitsUtils as _0x4be2c8,
  createChartDataSetProjector as _0x38c258,
  defaultChartHeight as _0x2d9573,
  defaultChartWidth as _0x2b7f2f,
  describeChartModel as _0x2e7e12,
  excelDateToUnixMilliseconds as _0x2b7c9c,
  generateChartContext as _0x4f7b35,
  mergeChartConfig as _0x563390,
  reconcileChartContext as _0x10dc46,
  resolveChartStyleBackgroundColor as _0x19fa93,
  toChartCreateConfigSnapshot as _0x12c332,
  toChartDataItem as _0x25c82c,
  toChartModelConfigReplacement as _0x1d1cf0,
  toChartModelUpdate as _0x589d43,
} from "@univerjs-pro/engine-chart";
import {
  CellValueType as _0x10bd17,
  CommandType as _0x36b277,
  DEFAULT_NUMBER_FORMAT as _0x5553f6,
  DateSystem as _0x3498c9,
  DependentOn as _0x3799b1,
  Disposable as _0x2a071e,
  DrawingTypeEnum as _0x126034,
  ICommandService as _0x4e8e02,
  IConfigService as _0xa7b782,
  IResourceManagerService as _0x1128f4,
  IUndoRedoService as _0xce1df9,
  IUniverInstanceService as _0x3435ff,
  Inject as _0x12f4ba,
  Injector as _0x2ae481,
  ObjectMatrix as _0x2bdeb4,
  Plugin as _0x236dfa,
  Range as _0x55d5a7,
  Rectangle as _0x5b5ac6,
  Tools as _0xd7863,
  UniverInstanceType as _0x567cd9,
  generateRandomId as _0x9028a6,
  getCellValueType as _0x3b38b1,
  getDrawingOrderIndex as _0x42303c,
  getNumfmtLocaleTag as _0x46f1b9,
  merge as _0x28ae3d,
  normalizeDrawingOrderIndex as _0x17bff2,
  numfmt as _0x4570b7,
  sequenceExecute as _0xa64447,
  toDisposable as _0xcb2d07,
  touchDependencies as _0x3d2fb3,
} from "@univerjs/core";
import {
  ClearSheetDrawingTransformerOperation as _0x43f269,
  DrawingApplyType as _0x227639,
  ISheetDrawingService as _0x1f50a7,
  InsertSheetDrawingCommand as _0x39f1d1,
  RemoveSheetDrawingCommand as _0x5b01e1,
  SetDrawingApplyMutation as _0xa5bc07,
  SetDrawingArrangeCommand as _0xd19d13,
  SetSheetDrawingCommand as _0x119875,
  transformToAxisAlignPosition as _0x3c3449,
  transformToDrawingPosition as _0x320071,
} from "@univerjs/sheets-drawing";
import {
  AddWorksheetMergeMutation as _0x54d50b,
  InterceptCellContentPriority as _0x4a7927,
  MarkDirtyFilterChangeMutation as _0x44b684,
  RefRangeService as _0x2af85a,
  RemoveColMutation as _0x318d0b,
  RemoveNumfmtMutation as _0x5854a4,
  RemoveRowMutation as _0x5827c8,
  RemoveWorksheetMergeMutation as _0x376188,
  ReorderRangeMutation as _0x5ef3b4,
  SetColHiddenMutation as _0x4b05e6,
  SetColVisibleMutation as _0x5bc9c3,
  SetNumfmtMutation as _0x3ff424,
  SetRangeValuesMutation as _0xa1a50a,
  SetRowHiddenMutation as _0x288aa9,
  SetRowVisibleMutation as _0x1362b3,
  SheetInterceptorService as _0x1f1452,
  SheetSkeletonService as _0x217999,
  UniverSheetsPlugin as _0x573e46,
  convertPositionCellToSheetOverGrid as _0x289a18,
  getSheetCommandTarget as _0xac4906,
} from "@univerjs/sheets";
import {
  BehaviorSubject as _0x11eb16,
  Subject as _0x4326d5,
  map as _0x480b6d,
  skip as _0x45c94c,
} from "rxjs";
import { deserializeRangeWithSheet as _0x859db1 } from "@univerjs/engine-formula";
import { IRenderManagerService as _0x4bfeb7 } from "@univerjs/engine-render";
import {
  LS_CONFIG_KEY as _0x4c3305,
  UniverLicensePlugin as _0x3332f4,
  getLicenseInfo as _0xc633f5,
  getSheetFeatureLimit as _0x617b49,
  isFeatureAuthorizedWithinTime as _0x35addb,
} from "@univerjs-pro/license";
const tt = new Set([
  _0xe4aa5.Line,
  _0xe4aa5.Column,
  _0xe4aa5.ColumnStacked,
  _0xe4aa5.ColumnPercentStacked,
  _0xe4aa5.Bar,
  _0xe4aa5.BarStacked,
  _0xe4aa5.BarPercentStacked,
  _0xe4aa5.Area,
  _0xe4aa5.AreaStacked,
  _0xe4aa5.AreaPercentStacked,
  _0xe4aa5.Combination,
  _0xe4aa5.Waterfall,
]);
function nt(_0x21559e) {
  if (_0x21559e.length === 0) return [];
  let _0x5b349f = [_0x21559e[0]];
  for (
    let _0x480597 = 1;
    _0x480597 < _0x21559e.length &&
    _0x21559e[_0x480597] === _0x21559e[_0x480597 - 1] + 1;
    _0x480597++
  )
    _0x5b349f.push(_0x21559e[_0x480597]);
  return _0x5b349f;
}
function rt(_0x17e9ab) {
  return (
    _0x17e9ab.length >= 2 &&
    _0x17e9ab.every(
      (_0x3dff79, _0x3bcbfb) =>
        _0x3bcbfb === 0 || _0x3dff79 === _0x17e9ab[_0x3bcbfb - 1] + 1,
    )
  );
}
function it(_0x588ccd, _0xabf082, _0x30775c) {
  return _0x30775c ? [_0xabf082[0]] : nt(_0x588ccd);
}
function at(_0x4a233e, _0x4dacd2) {
  let _0x69ecf5 = _0x4f7b35(_0x4a233e),
    _0x3a9108 = _0x1d5ac9(_0x4dacd2.context ?? {}),
    _0x13e93e = _0x69ecf5.categoryResourceIndexes ?? [],
    _0x4597e8 = _0x69ecf5.seriesResourceIndexes ?? [],
    _0x31cfc6 =
      _0x3a9108.categoryIndexes === undefined &&
      _0x3a9108.seriesIndexes === undefined &&
      _0x4be2c8.baseOn(_0x4dacd2.chartType, _0xe4aa5.Scatter) &&
      _0x13e93e.length === 0 &&
      _0x4597e8.length >= 2,
    _0x5c4902 =
      _0x3a9108.categoryIndexes === undefined
        ? it(_0x13e93e, _0x4597e8, _0x31cfc6)
        : [..._0x3a9108.categoryIndexes],
    _0x370fba = new Set(_0x5c4902),
    _0x4f4e21 =
      _0x3a9108.seriesIndexes === undefined
        ? _0x4597e8.filter((_0x50a8c5) => !_0x370fba.has(_0x50a8c5))
        : [..._0x3a9108.seriesIndexes],
    _0x220720 =
      _0x3a9108.multiLevelCategoryAxis ??
      (tt.has(_0x4dacd2.chartType) && rt(_0x5c4902));
  return {
    ..._0x3a9108,
    categoryIndexes: _0x5c4902,
    multiLevelCategoryAxis: _0x220720,
    seriesIndexes: _0x4f4e21,
  };
}
function ot(_0x276c1c, _0x44f19c) {
  return _0x4f7b35(_0x276c1c, _0x44f19c, false);
}
function V(_0x5ea16c, _0x243a54, _0x4688ec, _0xdcf95) {
  let _0x159551 =
    _0x4688ec === undefined
      ? undefined
      : {
          categoryIndexes: _0x4688ec.categoryIndexes,
          seriesIndexes: _0x4688ec.seriesIndexes,
        };
  return at(_0x5ea16c, {
    chartType: _0x243a54,
    ...(_0x4688ec === undefined && _0xdcf95 === undefined
      ? {}
      : { context: { ..._0x159551, ..._0xdcf95 } }),
  });
}
function st(_0x4abb9e, _0x1a2c26, _0x52c4a5, _0x1c36b2) {
  let {
      headers: _0x3c0836,
      categoryIndexes: _0x59f4df,
      categoryResourceIndexes: _0x518f01,
      categoryType: _0xb9ecc,
      seriesIndexes: _0x2aff3a,
      seriesResourceIndexes: _0x165fa0,
      ..._0x222d06
    } = _0x52c4a5,
    _0x82888 = V(_0x4abb9e, _0x1a2c26, _0x1c36b2, _0x222d06),
    _0x22aeb4 =
      _0x222d06.multiLevelCategoryAxis ??
      (_0x82888.multiLevelCategoryAxis ? true : undefined);
  return ot(_0x4abb9e, {
    ..._0x222d06,
    categoryIndexes: _0x82888.categoryIndexes,
    seriesIndexes: _0x82888.seriesIndexes,
    ...(_0x22aeb4 === undefined ? {} : { multiLevelCategoryAxis: _0x22aeb4 }),
  });
}
function ct(_0x2558d9, _0x49f727, _0x1b8263) {
  return _0x10dc46(_0x2558d9, _0x1b8263, _0x49f727);
}
function lt(_0x3494ea) {
  let {
      mergeRanges: _0x175d84,
      worksheetRows: _0x432161,
      worksheetColumns: _0x27d329,
      transpose: _0x2f3eea,
      fieldIndexOffset: _0xaf6f96 = 0,
    } = _0x3494ea,
    _0x24da04 = new Map(
      _0x432161.map((_0x51131b, _0xef2ead) => [_0x51131b, _0xef2ead]),
    ),
    _0x536feb = new Map(
      _0x27d329.map((_0x2c9cdf, _0x36b1cc) => [_0x2c9cdf, _0x36b1cc]),
    ),
    _0x2396b4 = [];
  for (let _0x1b5730 of _0x175d84) {
    let _0x3b2614 = _0x24da04.get(_0x1b5730.startRow),
      _0x2dab1b = _0x536feb.get(_0x1b5730.startColumn);
    if (_0x3b2614 === undefined || _0x2dab1b === undefined) continue;
    let _0x39c623 = _0x432161.filter(
        (_0x260835) =>
          _0x260835 >= _0x1b5730.startRow && _0x260835 <= _0x1b5730.endRow,
      ).length,
      _0x238724 = _0x27d329.filter(
        (_0x3c9c2d) =>
          _0x3c9c2d >= _0x1b5730.startColumn &&
          _0x3c9c2d <= _0x1b5730.endColumn,
      ).length,
      _0x4f0386 = _0x2f3eea ? _0x39c623 : _0x238724,
      _0x25f141 = _0x2f3eea ? _0x238724 : _0x39c623;
    if (_0x4f0386 !== 1 || _0x25f141 < 2) continue;
    let _0x3a38b2 = (_0x2f3eea ? _0x3b2614 : _0x2dab1b) + _0xaf6f96,
      _0xafc39d = _0x2f3eea ? _0x2dab1b : _0x3b2614;
    _0x2396b4.push({
      fieldIndex: _0x3a38b2,
      startIndex: _0xafc39d,
      endIndex: _0xafc39d + _0x25f141 - 1,
    });
  }
  return _0x2396b4.sort(
    (_0x41036a, _0x149c32) =>
      _0x41036a.fieldIndex - _0x149c32.fieldIndex ||
      _0x41036a.startIndex - _0x149c32.startIndex,
  );
}
const ut = (_0x4cd5d7) => {
  var _0x19fcdf;
  return (
    ((_0x19fcdf = _0x4cd5d7.body) == null
      ? undefined
      : _0x19fcdf.dataStream["replace"](/\r\n$/, "")) || ""
  );
};
function dt(
  _0x2709a2,
  _0x4e661a,
  _0xa5c07c,
  _0x141da4,
  _0x34c272,
  _0x33e02e,
  _0xd75d7,
  _0x5addc2,
) {
  let {
      startRow: _0x4aa464,
      startColumn: _0x361303,
      endColumn: _0x592216,
      endRow: _0x169556,
    } = _0x2709a2,
    _0x2d4c00 = {};
  if (_0x4aa464 === _0x169556)
    for (let _0x587ba4 = _0x361303; _0x587ba4 <= _0x592216; _0x587ba4++) {
      let _0x1850f4 = H(
          _0x4e661a,
          _0x4aa464,
          _0x587ba4,
          _0xd75d7,
          _0x2d4c00,
          _0x5addc2,
        ),
        _0x27383c = _0x587ba4 - _0x361303;
      (_0x141da4.setValue(_0xa5c07c, _0x27383c, _0x1850f4.value),
        _0x34c272.setValue(_0xa5c07c, _0x27383c, _0x1850f4.sourceType),
        _0x33e02e.setValue(_0xa5c07c, _0x27383c, _0x1850f4.label));
    }
  if (_0x361303 === _0x592216)
    for (let _0x1b1c28 = _0x4aa464; _0x1b1c28 <= _0x169556; _0x1b1c28++) {
      let _0x35e71b = H(
          _0x4e661a,
          _0x1b1c28,
          _0x361303,
          _0xd75d7,
          _0x2d4c00,
          _0x5addc2,
        ),
        _0x5c22d1 = _0x1b1c28 - _0x4aa464;
      (_0x141da4.setValue(_0xa5c07c, _0x5c22d1, _0x35e71b.value),
        _0x34c272.setValue(_0xa5c07c, _0x5c22d1, _0x35e71b.sourceType),
        _0x33e02e.setValue(_0xa5c07c, _0x5c22d1, _0x35e71b.label));
    }
}
function H(_0x5c9e0a, _0x14ce7d, _0x3887ce, _0x5391df, _0x564a8b, _0x40f829) {
  var _0x3f8029;
  let _0x1715c8 = _0x5c9e0a.getCell(_0x14ce7d, _0x3887ce),
    _0x2a1ef1 =
      ((_0x3f8029 = _0x5c9e0a.getCellRaw) == null
        ? undefined
        : _0x3f8029.call(_0x5c9e0a, _0x14ce7d, _0x3887ce)) ?? _0x1715c8;
  return ft(
    _0x1715c8,
    _0x5391df,
    _0x564a8b,
    (_0x2a1ef1 != null && _0x2a1ef1.f) || (_0x2a1ef1 != null && _0x2a1ef1.si)
      ? _0x2a1ef1
      : _0x5c9e0a.getCellWithFilteredInterceptors
        ? _0x5c9e0a.getCellWithFilteredInterceptors(
            _0x14ce7d,
            _0x3887ce,
            "sheet-chart.source-value",
            (_0x3d4a64) => _0x3d4a64.priority !== _0x4a7927.NUMFMT,
          )
        : _0x2a1ef1,
    _0x40f829,
  );
}
function ft(_0x26d7ea, _0x189079, _0x514b24, _0x24e045 = _0x26d7ea, _0x597da5) {
  if (
    !_0x26d7ea ||
    (_0x26d7ea.v === undefined && !_0x26d7ea.p) ||
    (_0x26d7ea.v === null && !_0x26d7ea.p)
  )
    return { value: null, label: "", sourceType: _0x5c01f2.Null };
  let { v: _0x18d593, p: _0x5e9a18 } = _0x26d7ea;
  if (_0x5e9a18) {
    let _0x3639a1 = ut(_0x5e9a18);
    return { value: _0x3639a1, label: _0x3639a1, sourceType: _0x5c01f2.STRING };
  }
  let _0x2952f3 = _0x3b38b1(_0x26d7ea),
    _0x1a29f2 = String(_0x18d593);
  if (_0x2952f3 === _0x10bd17.STRING || _0x2952f3 === _0x10bd17.FORCE_STRING)
    return { value: _0x1a29f2, label: _0x1a29f2, sourceType: _0x5c01f2.STRING };
  if (_0x2952f3 === _0x10bd17.BOOLEAN) {
    let _0x3a7d31 = !!_0x18d593;
    return {
      value: +!!_0x3a7d31,
      label: _0x3a7d31 ? "TRUE" : "FALSE",
      sourceType: _0x5c01f2.BOOLEAN,
    };
  }
  return _0x2952f3 === _0x10bd17.NUMBER
    ? pt(_0x26d7ea, _0x24e045, _0x1a29f2, _0x189079, _0x514b24, _0x597da5)
    : { value: _0x1a29f2, label: _0x1a29f2, sourceType: _0x5c01f2.STRING };
}
function pt(_0x25f8cd, _0x146cc9, _0x337688, _0x10ab44, _0x5ad145, _0x229653) {
  var _0x380966;
  let { v: _0x1ae83d, s: _0x1bd617 } = _0x25f8cd,
    _0x18617d =
      (_0x146cc9 == null ? undefined : _0x146cc9.v) !== undefined &&
      _0x146cc9.v !== null
        ? _0x146cc9.v
        : _0x1ae83d,
    _0x466d52 =
      (_0x380966 = _0x10ab44.get(
        (_0x146cc9 == null ? undefined : _0x146cc9.s) ?? _0x1bd617,
      )) == null || (_0x380966 = _0x380966.n) == null
        ? undefined
        : _0x380966.pattern,
    _0x3a2c66 = typeof _0x18617d == "number" ? _0x18617d : Number(_0x18617d),
    _0xff4d1a = Number.isFinite(_0x3a2c66),
    _0x5d4cde = typeof _0x18617d == "string" && _0xff4d1a,
    _0x4376be =
      (_0x146cc9 == null ? undefined : _0x146cc9.v) !== undefined &&
      _0x146cc9.v !== null &&
      _0x146cc9.v !== _0x1ae83d;
  _0x466d52 &&
    !_0x5ad145[_0x466d52] &&
    (_0x5ad145[_0x466d52] = _0x4570b7.getFormatInfo(_0x466d52));
  let _0xb886c9 = _0x466d52 ? _0x5ad145[_0x466d52] : undefined;
  if (_0xb886c9 != null && _0xb886c9.isDate) {
    var _0x5ebc6e;
    let _0x38fc66 = _0xff4d1a
      ? _0x3a2c66
      : (_0x5ebc6e = _0x4570b7.parseDate(String(_0x18617d), _0x229653)) == null
        ? undefined
        : _0x5ebc6e.v;
    return {
      value:
        _0x38fc66 == null
          ? Number(_0x18617d)
          : _0x2b7c9c(
              _0x38fc66,
              (_0x229653 == null ? undefined : _0x229653.dateSystem) !==
                _0x3498c9.Date1904,
            ),
      label:
        !_0x4376be && _0x5d4cde && _0x466d52
          ? _0x4570b7.format(_0x466d52, _0x3a2c66, _0x229653)
          : _0x337688,
      sourceType: _0x5c01f2.Date,
    };
  }
  if (_0x466d52 !== _0x5553f6 && _0xb886c9) {
    var _0x10fefb;
    return {
      value: _0xff4d1a
        ? _0x3a2c66
        : (((_0x10fefb = _0x4570b7.parseNumber(String(_0x18617d))) == null
            ? undefined
            : _0x10fefb.v) ?? Number(_0x18617d)),
      label:
        !_0x4376be && _0x5d4cde && _0x466d52
          ? _0x4570b7.format(_0x466d52, _0x3a2c66, _0x229653)
          : _0x337688,
      sourceType: _0x5c01f2.NUMBER,
    };
  }
  return {
    value: Number(_0x18617d),
    label: _0x337688,
    sourceType: _0x5c01f2.NUMBER,
  };
}
function mt({
  numfmtOptions: _0x311d22,
  range: _0x2de502,
  styles: _0x76232b,
  worksheet: _0x125cee,
}) {
  let _0x18310f = [],
    _0x139ece = [];
  for (
    let _0x386322 = _0x2de502.startRow;
    _0x386322 <= _0x2de502.endRow;
    _0x386322++
  )
    _0x125cee.getRowVisible(_0x386322) && _0x18310f.push(_0x386322);
  for (
    let _0x2a8ced = _0x2de502.startColumn;
    _0x2a8ced <= _0x2de502.endColumn;
    _0x2a8ced++
  )
    _0x125cee.getColVisible(_0x2a8ced) && _0x139ece.push(_0x2a8ced);
  let _0x1afff3 = {};
  return {
    data: _0x18310f.map((_0x448a0b) =>
      _0x139ece.map((_0x5b0654) => {
        let _0x56289b = H(
          _0x125cee,
          _0x448a0b,
          _0x5b0654,
          _0x76232b,
          _0x1afff3,
          _0x311d22,
        );
        return {
          value: _0x56289b.value,
          type: _0x56289b.sourceType,
          label: _0x56289b.label,
        };
      }),
    ),
    rowIndexes: _0x18310f.map((_0x1e9f2e) => _0x1e9f2e - _0x2de502.startRow),
    columnIndexes: _0x139ece.map(
      (_0x2e8eb4) => _0x2e8eb4 - _0x2de502.startColumn,
    ),
    mergeRanges: _0x125cee
      .getMergeData()
      .map((_0x3360eb) => ({
        startRow: _0x3360eb.startRow - _0x2de502.startRow,
        endRow: _0x3360eb.endRow - _0x2de502.startRow,
        startColumn: _0x3360eb.startColumn - _0x2de502.startColumn,
        endColumn: _0x3360eb.endColumn - _0x2de502.startColumn,
      })),
  };
}
function U(_0x3af610) {
  "@babel/helpers - typeof";
  return (
    (U =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x30d974) {
            return typeof _0x30d974;
          }
        : function (_0x39454a) {
            return _0x39454a &&
              typeof Symbol == "function" &&
              _0x39454a.constructor === Symbol &&
              _0x39454a !== Symbol.prototype
              ? "symbol"
              : typeof _0x39454a;
          }),
    U(_0x3af610)
  );
}
function ht(_0x1e9700, _0x49ddee) {
  if (U(_0x1e9700) != "object" || !_0x1e9700) return _0x1e9700;
  var _0x1bdc5f = _0x1e9700[Symbol.toPrimitive];
  if (_0x1bdc5f !== undefined) {
    var _0x21e81d = _0x1bdc5f.call(_0x1e9700, _0x49ddee || "default");
    if (U(_0x21e81d) != "object") return _0x21e81d;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x49ddee === "string" ? String : Number)(_0x1e9700);
}
function gt(_0x3649a0) {
  var _0x5ce1d0 = ht(_0x3649a0, "string");
  return U(_0x5ce1d0) == "symbol" ? _0x5ce1d0 : _0x5ce1d0 + "";
}
function W(_0x4798a8, _0x3489b1, _0x422625) {
  return (
    (_0x3489b1 = gt(_0x3489b1)) in _0x4798a8
      ? Object.defineProperty(_0x4798a8, _0x3489b1, {
          value: _0x422625,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x4798a8[_0x3489b1] = _0x422625),
    _0x4798a8
  );
}
var _t = class extends _0x49f865 {
    constructor(_0x551c5b, _0x33774f) {
      (super(),
        (this._univerInstanceService = _0x551c5b),
        W(this, "_snapshot$", undefined),
        W(this, "_projector", undefined),
        W(this, "_projectorHeaderRow", undefined),
        W(this, "_projectorIsRowDirection", undefined),
        W(this, "snapshot$", undefined),
        W(this, "rangeInfo$", undefined),
        W(this, "data$", undefined),
        W(this, "isRowDirection$", undefined),
        W(this, "canSwitchOrient$", undefined));
      let _0x4ea249 = _0xd7863.deepClone(_0x33774f),
        _0x3fc193 =
          _0x4ea249.isRowDirection === undefined || _0x4ea249.isRowDirection,
        _0x1fa8a8 = { ..._0x4ea249, isRowDirection: _0x3fc193 },
        _0x4dba97 = this.convertDataSet(_0x1fa8a8);
      ((this._snapshot$ = new _0x11eb16({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: _0x1fa8a8,
        dataSet: _0x4dba97,
        isRowDirection: _0x3fc193,
        canSwitchOrient: true,
      })),
        (this.snapshot$ = this._snapshot$["pipe"](
          _0x480b6d((_0x58fd95) => ({
            ..._0x58fd95,
            rangeInfo: _0xd7863.deepClone(_0x58fd95.rangeInfo),
          })),
        )),
        (this.rangeInfo$ = this.snapshot$["pipe"](
          _0x480b6d((_0x8110cd) => _0x8110cd.rangeInfo),
        )),
        (this.data$ = this.snapshot$["pipe"](
          _0x480b6d((_0x290dc3) => _0x290dc3.dataSet),
        )),
        (this.isRowDirection$ = this.snapshot$["pipe"](
          _0x480b6d((_0x3ee0e2) => _0x3ee0e2.isRowDirection),
        )),
        (this.canSwitchOrient$ = this.snapshot$["pipe"](
          _0x480b6d((_0x10dd8e) => _0x10dd8e.canSwitchOrient),
        )));
    }
    getRangeInfo() {
      return _0xd7863.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    canSwitchOrient() {
      return true;
    }
    convertDataSet(_0x219b7e = this.getRangeInfo()) {
      let {
          headerRow: _0x533c2a,
          rangeInfo: _0xfc96aa,
          isRowDirection: _0x139022,
        } = _0x219b7e,
        {
          unitId: _0x24b923,
          subUnitId: _0xf46e99,
          range: _0xe0414a,
        } = _0xfc96aa;
      if (_0xe0414a.startColumn === -1 || _0xe0414a.startRow === -1)
        return { dimensions: [], source: [] };
      let _0x4aab76 = _0xac4906(this._univerInstanceService, {
        unitId: _0x24b923,
        subUnitId: _0xf46e99,
      });
      if (!_0x4aab76) return { dimensions: [], source: [] };
      let { workbook: _0x5a30fd, worksheet: _0x3e2907 } = _0x4aab76,
        _0x4f64b7 = _0x55d5a7.transformRange(_0xe0414a, _0x3e2907),
        _0x2a5f82 = _0x5a30fd.getStyles(),
        _0x492a0f = mt({
          numfmtOptions: {
            locale: _0x46f1b9(_0x5a30fd.getSnapshot().locale),
            dateSystem: _0x5a30fd.getDateSystem(),
          },
          range: _0x4f64b7,
          styles: _0x2a5f82,
          worksheet: _0x3e2907,
        });
      return this._getProjector(_0x533c2a ?? _0x57a659, !!_0x139022).project(
        _0x492a0f,
      );
    }
    _getProjector(_0x5caa73, _0x4a3123) {
      let _0x2ae857 = !_0x4a3123;
      return (
        (!this._projector ||
          this._projectorHeaderRow !== _0x5caa73 ||
          this._projectorIsRowDirection !== _0x2ae857) &&
          ((this._projector = _0x38c258({
            headerRow: _0x5caa73,
            isRowDirection: _0x2ae857,
          })),
          (this._projectorHeaderRow = _0x5caa73),
          (this._projectorIsRowDirection = _0x2ae857)),
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
      let _0x2c8153 = this._snapshot$["getValue"]();
      this._emit(
        { ..._0x2c8153, dataSet: this.convertDataSet(_0x2c8153.rangeInfo) },
        false,
      );
    }
    _emit(_0x335705, _0x309bab) {
      let _0x28a948 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ..._0x335705,
        revision: _0x28a948.revision + 1,
        rangeRevision: _0x28a948.rangeRevision + +!!_0x309bab,
      });
    }
    dispose() {
      let _0x3ad045 = this._snapshot$["getValue"]();
      (this._snapshot$["next"]({
        ..._0x3ad045,
        dataSet: this.getEmptyDataSet(),
        revision: _0x3ad045.revision + 1,
      }),
        this._snapshot$["complete"](),
        (this._projector = undefined),
        super.dispose());
    }
  },
  vt = class extends _0x49f865 {
    constructor(_0x1217a3, _0x40a0fb) {
      (super(),
        (this._univerInstanceService = _0x1217a3),
        W(this, "_snapshot$", undefined),
        W(this, "snapshot$", undefined),
        W(this, "rangeInfo$", undefined),
        W(this, "data$", undefined),
        W(this, "isRowDirection$", undefined),
        W(this, "canSwitchOrient$", undefined));
      let _0x2c4d8 = this.convertDataSet(_0x40a0fb);
      ((this._snapshot$ = new _0x11eb16({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: _0xd7863.deepClone(_0x40a0fb),
        dataSet: _0x2c4d8,
        isRowDirection: false,
        canSwitchOrient: false,
      })),
        (this.snapshot$ = this._snapshot$["pipe"](
          _0x480b6d((_0xd95415) => ({
            ..._0xd95415,
            rangeInfo: _0xd7863.deepClone(_0xd95415.rangeInfo),
          })),
        )),
        (this.rangeInfo$ = this.snapshot$["pipe"](
          _0x480b6d((_0x3abe00) => _0x3abe00.rangeInfo),
        )),
        (this.data$ = this.snapshot$["pipe"](
          _0x480b6d((_0x26375b) => _0x26375b.dataSet),
        )),
        (this.isRowDirection$ = this.snapshot$["pipe"](
          _0x480b6d((_0x2478fc) => _0x2478fc.isRowDirection),
        )),
        (this.canSwitchOrient$ = this.snapshot$["pipe"](
          _0x480b6d((_0xdf6e91) => _0xdf6e91.canSwitchOrient),
        )));
    }
    canSwitchOrient() {
      return false;
    }
    getRangeInfo() {
      return _0xd7863.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    convertDataSet(_0x283b98 = this.getRangeInfo()) {
      let _0x569d5f = this._univerInstanceService,
        _0x456abb = [],
        _0x30e0ad = {};
      for (let { header: _0x2ddcd9 } of _0x283b98) {
        if (!_0x2ddcd9) {
          _0x456abb.push("");
          continue;
        }
        let {
            unitId: _0x4d09bf,
            subUnitId: _0x1b153e,
            range: _0x421ec4,
          } = _0x2ddcd9,
          _0x6f76ad = _0x569d5f.getUnit(_0x4d09bf, _0x567cd9.UNIVER_SHEET);
        if (!_0x6f76ad) return { dimensions: [], source: [] };
        let _0x40e2e2 = _0x6f76ad.getSheetBySheetId(_0x1b153e);
        if (!_0x40e2e2) return { dimensions: [], source: [] };
        let _0x1f88a9 = _0x6f76ad.getStyles(),
          { label: _0x173a70 } = H(
            _0x40e2e2,
            _0x421ec4.startRow,
            _0x421ec4.startColumn,
            _0x1f88a9,
            _0x30e0ad,
            {
              locale: _0x46f1b9(_0x6f76ad.getSnapshot().locale),
              dateSystem: _0x6f76ad.getDateSystem(),
            },
          );
        _0x456abb.push(_0x173a70);
      }
      let _0x4e7eb5 = 0,
        _0x54916e = new _0x2bdeb4(),
        _0x245900 = new _0x2bdeb4(),
        _0x494ca4 = new _0x2bdeb4(),
        _0x159bba = [],
        _0x489898 = [];
      for (let { range: _0x29951a } of _0x283b98) {
        let {
            unitId: _0x5661a2,
            subUnitId: _0x5d1d39,
            range: _0x40eee3,
          } = _0x29951a,
          _0x2707f6 = _0x569d5f.getUnit(_0x5661a2, _0x567cd9.UNIVER_SHEET);
        if (!_0x2707f6) return { dimensions: [], source: [] };
        let _0x7a55d = _0x2707f6.getSheetBySheetId(_0x5d1d39);
        if (!_0x7a55d) return { dimensions: [], source: [] };
        dt(
          _0x40eee3,
          _0x7a55d,
          _0x4e7eb5,
          _0x54916e,
          _0x245900,
          _0x494ca4,
          _0x2707f6.getStyles(),
          {
            locale: _0x46f1b9(_0x2707f6.getSnapshot().locale),
            dateSystem: _0x2707f6.getDateSystem(),
          },
        );
        let _0x19175b = _0x40eee3.startRow === _0x40eee3.endRow,
          _0x119493 = _0x40eee3.startColumn === _0x40eee3.endColumn,
          _0x4b55f8 = true;
        if (
          (_0x19175b
            ? (_0x4b55f8 = _0x7a55d.getRowVisible(_0x40eee3.startRow))
            : _0x119493 &&
              (_0x4b55f8 = _0x7a55d.getColVisible(_0x40eee3.startColumn)),
          _0x4b55f8 || _0x489898.push(_0x4e7eb5),
          _0x19175b || _0x119493)
        ) {
          let _0x29e6af = _0x7a55d
              .getMergeData()
              .filter(
                (_0x168459) =>
                  _0x168459.startRow >= _0x40eee3.startRow &&
                  _0x168459.endRow <= _0x40eee3.endRow &&
                  _0x168459.startColumn >= _0x40eee3.startColumn &&
                  _0x168459.endColumn <= _0x40eee3.endColumn,
              ),
            _0x36cc8a = Array.from(
              { length: _0x40eee3.endRow - _0x40eee3.startRow + 1 },
              (_0x432ddb, _0x37ce09) => _0x40eee3.startRow + _0x37ce09,
            ),
            _0x3aa06d = Array.from(
              { length: _0x40eee3.endColumn - _0x40eee3.startColumn + 1 },
              (_0x562ec0, _0x4a02c9) => _0x40eee3.startColumn + _0x4a02c9,
            );
          _0x159bba.push(
            ...lt({
              mergeRanges: _0x29e6af,
              worksheetRows: _0x36cc8a,
              worksheetColumns: _0x3aa06d,
              transpose: _0x19175b,
              fieldIndexOffset: _0x4e7eb5,
            }),
          );
        }
        _0x4e7eb5++;
      }
      return {
        dimensions: _0x456abb,
        source: _0x54916e.toArray(),
        sourceType: _0x245900.toArray(),
        sourceLabels: _0x494ca4.toArray(),
        ...(_0x489898.length ? { hiddenFieldIndexes: _0x489898 } : {}),
        categorySpans: _0x159bba,
      };
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let _0x474ced = this._snapshot$["getValue"]();
      this._emit(
        { ..._0x474ced, dataSet: this.convertDataSet(_0x474ced.rangeInfo) },
        false,
      );
    }
    _emit(_0xf42ae5, _0x252f6e) {
      let _0x40e230 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ..._0xf42ae5,
        revision: _0x40e230.revision + 1,
        rangeRevision: _0x40e230.rangeRevision + +!!_0x252f6e,
      });
    }
    dispose() {
      let _0x34d373 = this._snapshot$["getValue"]();
      (this._snapshot$["next"]({
        ..._0x34d373,
        dataSet: this.getEmptyDataSet(),
        revision: _0x34d373.revision + 1,
      }),
        this._snapshot$["complete"](),
        super.dispose());
    }
  };
function yt(_0x523e0d, _0x25ef9c) {
  return Array.isArray(_0x25ef9c)
    ? new vt(_0x523e0d, _0x25ef9c)
    : new _t(_0x523e0d, _0x25ef9c);
}
function bt(_0x8deecb) {
  return _0x8deecb !== undefined && _0x8deecb.type !== _0x5c01f2.Null;
}
function xt(_0xda7dd7) {
  return (
    (_0xda7dd7 == null ? undefined : _0xda7dd7.type) === _0x5c01f2.STRING ||
    (_0xda7dd7 == null ? undefined : _0xda7dd7.type) === _0x5c01f2.Date
  );
}
function St(_0x5a960f) {
  return _0x5a960f.every(
    (_0x5ce53b) =>
      _0x5ce53b === undefined ||
      _0x5ce53b.type === _0x5c01f2.Null ||
      xt(_0x5ce53b),
  );
}
function Ct(_0x752819) {
  return _0x752819.some(xt);
}
function wt(_0x14cd76, _0x1e7cc6) {
  let [_0x109adc, ..._0x2e139a] = _0x14cd76.data[_0x1e7cc6] ?? [];
  return _0x2e139a.length < 1 ||
    ((_0x109adc == null ? undefined : _0x109adc.type) !== _0x5c01f2.Null &&
      !xt(_0x109adc)) ||
    !_0x2e139a.every(bt)
    ? false
    : _0x2e139a.every((_0x2593c5, _0x38d91e) =>
        _0x14cd76.data["slice"](_0x1e7cc6 + 1).some((_0x456424) => {
          var _0x569f1d;
          return (
            ((_0x569f1d = _0x456424[_0x38d91e + 1]) == null
              ? undefined
              : _0x569f1d.type) === _0x5c01f2.NUMBER
          );
        }),
      );
}
function Tt(_0x4786ee, _0x5a9222) {
  var _0x5dd797;
  if (_0x4786ee.data["length"] === 0) return;
  if (_0x5a9222) {
    var _0x2d88df;
    let _0x1f34f6 = _0x4786ee.data["findIndex"]((_0x36cf9a) =>
      _0x36cf9a.some(bt),
    );
    if (_0x1f34f6 < 0) return;
    let _0x1a4cbc = _0x4786ee.data["slice"](_0x1f34f6).map(
      (_0x47625f) => _0x47625f[0],
    );
    return Ct(_0x1a4cbc) && St(_0x1a4cbc)
      ? (((_0x2d88df = _0x4786ee.rowIndexes) == null
          ? undefined
          : _0x2d88df[_0x1f34f6]) ?? _0x1f34f6)
      : undefined;
  }
  let _0x1c9a2e = _0x4786ee.data["findIndex"]((_0x4353be) =>
    _0x4353be.some(bt),
  );
  if (_0x1c9a2e < 0) return;
  let _0x122f1a = _0x4786ee.data[_0x1c9a2e];
  return (Ct(_0x122f1a) && St(_0x122f1a)) || wt(_0x4786ee, _0x1c9a2e)
    ? (((_0x5dd797 = _0x4786ee.rowIndexes) == null
        ? undefined
        : _0x5dd797[_0x1c9a2e]) ?? _0x1c9a2e)
    : undefined;
}
function Et(_0x3e76ae, _0x40d2d4) {
  let _0x4694a1 =
    _0x40d2d4.headerRow ?? Tt(_0x3e76ae, _0x40d2d4.isRowDirection) ?? _0x57a659;
  return {
    dataSet: _0x38c258({
      headerRow: _0x4694a1,
      isRowDirection: !_0x40d2d4.isRowDirection,
    }).project(_0x3e76ae),
    headerRow: _0x4694a1,
  };
}
function Dt(_0x1d1c69, _0x1a0ae1) {
  if (_0x1d1c69 === undefined && _0x1a0ae1 === undefined) return;
  let _0x417fd5 = {};
  return (
    _0x1d1c69 !== undefined && (_0x417fd5.categoryIndexes = [..._0x1d1c69]),
    _0x1a0ae1 !== undefined && (_0x417fd5.seriesIndexes = [..._0x1a0ae1]),
    _0x417fd5
  );
}
function Ot(_0x5bd0c1, _0x393614) {
  let { dataSet: _0x5d006d, headerRow: _0x3f4166 } = Et(_0x5bd0c1, _0x393614),
    _0x42aa11 = Dt(_0x393614.categoryIndexes, _0x393614.seriesIndexes),
    _0x5ea856 = at(_0x5d006d, {
      chartType: _0x393614.chartType,
      context: _0x42aa11,
    });
  return {
    dataSet: _0x5d006d,
    mapping: {
      headerRow: _0x3f4166,
      isRowDirection: _0x393614.isRowDirection,
      categoryIndexes: _0x5ea856.categoryIndexes ?? [],
      seriesIndexes: _0x5ea856.seriesIndexes ?? [],
    },
  };
}
function G(_0x46b618, _0x5cdd0d) {
  return function (_0x463f99, _0x49bdfd) {
    _0x5cdd0d(_0x463f99, _0x49bdfd, _0x46b618);
  };
}
function K(_0x1bccf0, _0x520a54, _0x890ec1, _0x443143) {
  var _0xb4e0a0 = arguments.length,
    _0x54240a =
      _0xb4e0a0 < 3
        ? _0x520a54
        : _0x443143 === null
          ? (_0x443143 = Object.getOwnPropertyDescriptor(_0x520a54, _0x890ec1))
          : _0x443143,
    _0x1a44be;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x54240a = Reflect.decorate(_0x1bccf0, _0x520a54, _0x890ec1, _0x443143);
  else {
    for (var _0x1b03cb = _0x1bccf0.length - 1; _0x1b03cb >= 0; _0x1b03cb--)
      (_0x1a44be = _0x1bccf0[_0x1b03cb]) &&
        (_0x54240a =
          (_0xb4e0a0 < 3
            ? _0x1a44be(_0x54240a)
            : _0xb4e0a0 > 3
              ? _0x1a44be(_0x520a54, _0x890ec1, _0x54240a)
              : _0x1a44be(_0x520a54, _0x890ec1)) || _0x54240a);
  }
  return (
    _0xb4e0a0 > 3 &&
      _0x54240a &&
      Object.defineProperty(_0x520a54, _0x890ec1, _0x54240a),
    _0x54240a
  );
}
let q = class extends _0x2a071e {
  get activeChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  constructor(_0x55bdd4) {
    (super(),
      (this._injector = _0x55bdd4),
      W(this, "_activeChartModel$", new _0x11eb16(null)),
      W(this, "_chartModels", new Map()),
      W(this, "_chartModelAdded$", new _0x4326d5()),
      W(this, "_chartModelRemoved$", new _0x4326d5()),
      W(this, "activeChartModel$", this._activeChartModel$["asObservable"]()),
      W(this, "chartModelAdded$", this._chartModelAdded$["asObservable"]()),
      W(
        this,
        "chartModelRemoved$",
        this._chartModelRemoved$["asObservable"](),
      ));
  }
  setActiveChartModel(_0x5dda9b) {
    this._activeChartModel$["next"](_0x5dda9b);
  }
  getActiveChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  getChartModel(_0x5a3380) {
    return this._chartModels["get"](_0x5a3380);
  }
  createChartModel(_0x2c2a51, _0x36d692, _0x573061 = false) {
    let _0x18d1e0 = new _0x327012(_0x2c2a51, _0x36d692, this._injector);
    (_0x18d1e0.init(), this._chartModels["set"](_0x18d1e0.id, _0x18d1e0));
    let _0x44436a = _0x36d692.dataSource["getDataSet"](),
      _0x8a8547 = _0x18d1e0.context;
    return (
      _0x18d1e0.setChartContext(ot(_0x44436a, _0x8a8547)),
      _0x573061 &&
        _0x18d1e0.assignStyle({ titles: { title: { content: "" } } }),
      this._chartModelAdded$["next"](_0x18d1e0),
      _0x18d1e0
    );
  }
  reconcileChartModelContext(_0x2830f4) {
    let _0x33aa71 = this._chartModels["get"](_0x2830f4);
    return _0x33aa71
      ? ct(
          _0x33aa71.dataSource["getDataSet"](),
          _0x33aa71.chartType,
          _0x33aa71.context,
        )
      : undefined;
  }
  rebuildChartModelContextForDataSource(_0x8c5867, _0x5964ce, _0x358374) {
    let _0x3f4e49 = this._chartModels["get"](_0x8c5867);
    if (_0x3f4e49)
      return st(
        _0x5964ce.getDataSet(),
        _0x3f4e49.chartType,
        _0x3f4e49.context,
        _0x358374,
      );
  }
  removeChartModel(_0x123d87) {
    let _0x542d1a = this._chartModels["get"](_0x123d87);
    return _0x542d1a
      ? (this._chartModels["delete"](_0x123d87),
        this.activeChartModel === _0x542d1a &&
          this._activeChartModel$["next"](null),
        _0x542d1a.dispose(),
        this._chartModelRemoved$["next"](_0x123d87),
        true)
      : false;
  }
  dispose() {
    (Array.from(this._chartModels["keys"]()).forEach((_0x1e5c4a) =>
      this.removeChartModel(_0x1e5c4a),
    ),
      this._activeChartModel$["complete"](),
      this._chartModelAdded$["complete"](),
      this._chartModelRemoved$["complete"](),
      super.dispose());
  }
};
q = K([G(0, _0x12f4ba(_0x2ae481))], q);
const kt = { Multi: "multi", Single: "single" };
function At(_0x334d63) {
  let { unitId: _0x4ea2a9, subUnitId: _0x5c7eaf, range: _0x2206d5 } = _0x334d63;
  return [
    _0x4ea2a9,
    _0x5c7eaf,
    _0x2206d5.startRow,
    _0x2206d5.endRow,
    _0x2206d5.startColumn,
    _0x2206d5.endColumn,
  ];
}
function jt(_0x31ea8c) {
  return JSON.stringify(
    Array.isArray(_0x31ea8c)
      ? [
          kt.Multi,
          _0x31ea8c.map((_0x179b30) => [
            _0x179b30.header ? At(_0x179b30.header) : null,
            At(_0x179b30.range),
          ]),
        ]
      : [kt.Single, At(_0x31ea8c.rangeInfo), _0x31ea8c.headerRow ?? null],
  );
}
function Mt(_0x897e41) {
  return Array.isArray(_0x897e41)
    ? jt(_0x897e41)
    : JSON.stringify([
        kt.Single,
        At(_0x897e41.rangeInfo),
        _0x897e41.isRowDirection ?? true,
        _0x897e41.headerRow ?? null,
      ]);
}
const Nt = new Set([
    _0x54d50b.id,
    _0xa1a50a.id,
    _0x5ef3b4.id,
    _0x288aa9.id,
    _0x1362b3.id,
    _0x4b05e6.id,
    _0x5bc9c3.id,
    _0x318d0b.id,
    _0x5827c8.id,
    _0x44b684.id,
    _0x3ff424.id,
    _0x5854a4.id,
    _0x376188.id,
  ]),
  Pt = new Set([
    _0x54d50b.id,
    _0x376188.id,
    _0x4b05e6.id,
    _0x5bc9c3.id,
    _0x288aa9.id,
    _0x1362b3.id,
  ]),
  Ft = Object.freeze({
    startRow: -1,
    startColumn: -1,
    endRow: 0,
    endColumn: 0,
  });
function It(_0x52c454) {
  let _0x5a1b69 = false,
    _0xe05b25 = false;
  return {
    dispose: () => {
      _0x5a1b69 = true;
    },
    publish: () => {
      _0x5a1b69 ||
        _0xe05b25 ||
        ((_0xe05b25 = true),
        queueMicrotask(() => {
          ((_0xe05b25 = false), _0x5a1b69 || _0x52c454());
        }));
    },
  };
}
let Lt = class extends _0x2a071e {
  constructor(_0x12c570, _0x29de14) {
    (super(),
      (this._commandService = _0x12c570),
      (this._refRangeService = _0x29de14),
      W(this, "_entries", new Map()));
  }
  watch(_0xe3b0ff, _0x364fa0) {
    let _0xb7bb18 = jt(_0xe3b0ff),
      _0x168a7f = {
        rangeInfo: _0xd7863.deepClone(_0xe3b0ff),
        callbacks: _0x364fa0,
      },
      _0x14d2c7 = this._entries["get"](_0xb7bb18);
    (_0x14d2c7 ||
      ((_0x14d2c7 = {
        key: _0xb7bb18,
        consumers: new Set(),
        watcher: { dispose: () => {} },
      }),
      (_0x14d2c7.watcher = this._watchRange(
        _0xd7863.deepClone(_0xe3b0ff),
        () => this._publishDataChanged(_0x14d2c7),
        (_0x1ceb39) => this._publishRangeChanged(_0x14d2c7, _0x1ceb39),
      )),
      this._entries["set"](_0xb7bb18, _0x14d2c7)),
      _0x14d2c7.consumers["add"](_0x168a7f));
    let _0x4699b0 = false;
    return _0xcb2d07(() => {
      _0x4699b0 ||
        ((_0x4699b0 = true),
        _0x14d2c7.consumers["delete"](_0x168a7f),
        !(
          _0x14d2c7.consumers["size"] > 0 ||
          this._entries["get"](_0xb7bb18) !== _0x14d2c7
        ) &&
          (this._entries["delete"](_0xb7bb18), _0x14d2c7.watcher["dispose"]()));
    });
  }
  _publishDataChanged(_0x54ecb0) {
    Array.from(_0x54ecb0.consumers).forEach((_0x3853e2) =>
      _0x3853e2.callbacks["onDataChanged"](),
    );
  }
  _publishRangeChanged(_0x3edba2, _0x3e9f0b) {
    Array.from(_0x3edba2.consumers).forEach((_0x2159a1) => {
      let _0x45abca;
      if (Array.isArray(_0x3e9f0b)) _0x45abca = _0xd7863.deepClone(_0x3e9f0b);
      else {
        let _0x4ad27f = _0xd7863.deepClone(_0x2159a1.rangeInfo);
        ((_0x4ad27f.rangeInfo = _0xd7863.deepClone(_0x3e9f0b.rangeInfo)),
          _0x3e9f0b.headerRow === undefined
            ? delete _0x4ad27f.headerRow
            : (_0x4ad27f.headerRow = _0x3e9f0b.headerRow),
          (_0x45abca = _0x4ad27f));
      }
      _0x2159a1.callbacks["onRangeChanged"](_0x45abca);
    });
  }
  _watchRange(_0x303d44, _0x423d8b, _0x5be050) {
    let _0x4757ba = () => _0x5be050(_0xd7863.deepClone(_0x303d44));
    return Array.isArray(_0x303d44)
      ? this._watchMultiRange(_0x303d44, _0x423d8b, _0x4757ba)
      : this._watchSingleRange(_0x303d44, _0x423d8b, _0x4757ba);
  }
  _watchSingleRange(_0x5e92cd, _0x2c0901, _0x4ca735) {
    let {
      unitId: _0x1261ab,
      subUnitId: _0x4e0e53,
      range: _0x581854,
    } = _0x5e92cd.rangeInfo;
    if (
      _0x5e92cd.headerRow === undefined ||
      _0x5e92cd.headerRow === _0x57a659
    ) {
      let _0x26da62 = this._watchSourceCommands(
          [_0x5e92cd.rangeInfo],
          _0x2c0901,
          _0x4ca735,
        ),
        _0x3eef67 = this._refRangeService["watchRange"](
          _0x1261ab,
          _0x4e0e53,
          _0x581854,
          (_0x1999ee, _0xe6a3df) => {
            ((_0x5e92cd.rangeInfo["range"] = _0xe6a3df
              ? { ..._0xe6a3df }
              : this._emptyRange()),
              _0x4ca735());
          },
        );
      return _0xcb2d07(() => {
        (_0x26da62.dispose(), _0x3eef67.dispose());
      });
    }
    let _0xb6caf0 = {
        ..._0x581854,
        startRow: _0x581854.startRow + _0x5e92cd.headerRow,
        endRow: _0x581854.startRow + _0x5e92cd.headerRow,
      },
      _0x2f01bb = It(() => {
        let _0x5971bb = _0x5e92cd.rangeInfo["range"];
        (_0xb6caf0 && _0x5971bb.startRow >= 0
          ? (_0x5e92cd.headerRow = _0xb6caf0.startRow - _0x5971bb.startRow)
          : (_0x5e92cd.headerRow = _0x57a659),
          _0x4ca735());
      }),
      _0x32b496 = this._watchSourceCommands(
        [_0x5e92cd.rangeInfo],
        _0x2c0901,
        _0x2f01bb.publish,
      ),
      _0x3cb013 = this._refRangeService["watchRange"](
        _0x1261ab,
        _0x4e0e53,
        _0x581854,
        (_0x5a15e4, _0x2e0326) => {
          ((_0x5e92cd.rangeInfo["range"] = _0x2e0326
            ? { ..._0x2e0326 }
            : this._emptyRange()),
            _0x2f01bb.publish());
        },
      ),
      _0x4d9441 = this._refRangeService["watchRange"](
        _0x1261ab,
        _0x4e0e53,
        _0xb6caf0,
        (_0x1d6ee2, _0x4629a1) => {
          ((_0xb6caf0 = _0x4629a1 ? { ..._0x4629a1 } : null),
            _0x2f01bb.publish());
        },
      );
    return _0xcb2d07(() => {
      (_0x2f01bb.dispose(),
        _0x32b496.dispose(),
        _0x3cb013.dispose(),
        _0x4d9441.dispose());
    });
  }
  _watchMultiRange(_0x216220, _0x175688, _0x2f5303) {
    let _0x3aa071 = _0x216220
        .flatMap((_0x35a661) => [_0x35a661.header, _0x35a661.range])
        .filter((_0x2a6965) => !!_0x2a6965),
      _0x17d914 = It(_0x2f5303),
      _0x3fce99 = this._watchSourceCommands(
        _0x3aa071,
        _0x175688,
        _0x17d914.publish,
      ),
      _0x49551c = _0x3aa071.map((_0x46951a) =>
        this._refRangeService["watchRange"](
          _0x46951a.unitId,
          _0x46951a.subUnitId,
          _0x46951a.range,
          (_0x2138e1, _0x258b6e) => {
            ((_0x46951a.range = _0x258b6e
              ? { ..._0x258b6e }
              : this._emptyRange()),
              _0x17d914.publish());
          },
        ),
      );
    return _0xcb2d07(() => {
      (_0x17d914.dispose(),
        _0x3fce99.dispose(),
        _0x49551c.forEach((_0x4ff521) => _0x4ff521.dispose()));
    });
  }
  _watchSourceCommands(_0x2cad32, _0x3dc5e8, _0x1d3147) {
    let _0x4dc741 = new Map();
    _0x2cad32.forEach((_0x1926ef) => {
      let _0x25d8e1 = _0x4dc741.get(_0x1926ef.unitId);
      _0x25d8e1 ||
        ((_0x25d8e1 = new Map()), _0x4dc741.set(_0x1926ef.unitId, _0x25d8e1));
      let _0x3e44f2 = _0x25d8e1.get(_0x1926ef.subUnitId) ?? [];
      (_0x3e44f2.push(_0x1926ef),
        _0x25d8e1.set(_0x1926ef.subUnitId, _0x3e44f2));
    });
    let _0x2ee12e = (_0x4452eb, _0x4929b5) => {
      let _0x29d159 = (_0x22bd25) =>
        _0x4929b5.some((_0x1e38bc) =>
          _0x5b5ac6.intersects(_0x1e38bc.range, _0x22bd25),
        );
      if (_0x4452eb.id === _0xa1a50a.id) {
        let { cellValue: _0x16865a } = _0x4452eb.params;
        _0x29d159(new _0x2bdeb4(_0x16865a).getStartEndScope()) && _0x3dc5e8();
      } else {
        if (_0x4452eb.id === _0x5ef3b4.id) {
          let { range: _0x2c015d } = _0x4452eb.params;
          _0x29d159(_0x2c015d) && _0x3dc5e8();
        } else {
          if (Pt.has(_0x4452eb.id)) {
            let { ranges: _0x2f4dbe } = _0x4452eb.params;
            _0x2f4dbe.some(_0x29d159) && _0x3dc5e8();
          } else {
            if (
              _0x4452eb.id === _0x318d0b.id ||
              _0x4452eb.id === _0x5827c8.id
            ) {
              let { range: _0x35e387 } = _0x4452eb.params,
                _0x3a9321 = _0x4929b5.filter((_0x5b8b0f) =>
                  _0x5b5ac6.contains(_0x35e387, _0x5b8b0f.range),
                );
              _0x3a9321.length &&
                (_0x3a9321.forEach(
                  (_0x2ea63f) => (_0x2ea63f.range = this._emptyRange()),
                ),
                _0x1d3147());
            } else {
              if (_0x4452eb.id === _0x44b684.id) {
                let { filterRange: _0xad1726 } = _0x4452eb.params;
                _0x29d159(_0xad1726) && _0x3dc5e8();
              } else {
                if (_0x4452eb.id === _0x3ff424.id) {
                  let { values: _0x1b3c3a } = _0x4452eb.params;
                  Object.keys(_0x1b3c3a).some((_0x26f392) =>
                    _0x1b3c3a[_0x26f392].ranges["some"](_0x29d159),
                  ) && _0x3dc5e8();
                } else {
                  if (_0x4452eb.id === _0x5854a4.id) {
                    let { ranges: _0x366775 } = _0x4452eb.params;
                    _0x366775.some(_0x29d159) && _0x3dc5e8();
                  }
                }
              }
            }
          }
        }
      }
    };
    return this._commandService["onCommandExecuted"]((_0x2bbfa5) => {
      var _0x52dbbe;
      if (!Nt.has(_0x2bbfa5.id)) return;
      let { unitId: _0x5ac81e, subUnitId: _0x3cff17 } = _0x2bbfa5.params,
        _0x5466aa =
          (_0x52dbbe = _0x4dc741.get(_0x5ac81e)) == null
            ? undefined
            : _0x52dbbe.get(_0x3cff17);
      _0x5466aa && _0x2ee12e(_0x2bbfa5, _0x5466aa);
    });
  }
  _emptyRange() {
    return { ...Ft };
  }
  dispose() {
    (this._entries["forEach"]((_0x1734d5) => _0x1734d5.watcher["dispose"]()),
      this._entries["clear"](),
      super.dispose());
  }
};
Lt = K([G(0, _0x4e8e02), G(1, _0x12f4ba(_0x2af85a))], Lt);
var Rt = class {
  constructor(_0x29e951, _0xc26b20) {
    ((this._release = _0xc26b20),
      W(this, "_dataSource$", undefined),
      W(this, "_dataChanged$", new _0x4326d5()),
      W(this, "_entry", undefined),
      W(this, "_isDisposed", false),
      W(this, "dataSource$", undefined),
      W(this, "dataChanged$", undefined),
      (this._entry = _0x29e951),
      (this._dataSource$ = new _0x11eb16(_0x29e951.dataSource)),
      (this.dataSource$ = this._dataSource$["asObservable"]()),
      (this.dataChanged$ = this._dataChanged$["asObservable"]()));
  }
  get dataSource() {
    return this._dataSource$["getValue"]();
  }
  get entry() {
    return this._entry;
  }
  attach(_0x206c5b) {
    ((this._entry = _0x206c5b),
      this._dataSource$["next"](_0x206c5b.dataSource));
  }
  detach(_0x216f8e) {
    this._entry === _0x216f8e && (this._entry = undefined);
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
let zt = class extends _0x2a071e {
  constructor(_0x297e03, _0x23d819) {
    (super(),
      (this._univerInstanceService = _0x297e03),
      (this._rangeWatcherManager = _0x23d819),
      W(this, "_entries", new Map()),
      W(this, "_handles", new Set()),
      W(this, "_isDisposed", false));
  }
  acquire(_0x36bcdc) {
    if (this._isDisposed)
      throw Error(
        "Cannot acquire a Sheet chart datasource after manager disposal.",
      );
    let _0x31536e = this._normalizeSourceSpec(_0x36bcdc),
      _0x236b88 = this._getOrCreateEntry(_0x31536e),
      _0x2f48cd = new Rt(_0x236b88, (_0x1b5dca) =>
        this._releaseHandle(_0x1b5dca),
      );
    return (
      _0x236b88.handles["add"](_0x2f48cd),
      this._handles["add"](_0x2f48cd),
      _0x2f48cd
    );
  }
  refreshAll() {
    this._entries["forEach"]((_0x280062) => this._refreshEntry(_0x280062));
  }
  _getOrCreateEntry(_0x16f455) {
    let _0x12e3cc = Mt(_0x16f455),
      _0x2e1341 = this._entries["get"](_0x12e3cc);
    if (_0x2e1341) return _0x2e1341;
    let _0x1c7102 = yt(this._univerInstanceService, _0x16f455),
      _0x3041c7 = {
        key: _0x12e3cc,
        sourceSpec: _0x16f455,
        dataSource: _0x1c7102,
        handles: new Set(),
        rangeWatcherLease: { dispose: () => {} },
      };
    try {
      return (
        (_0x3041c7.rangeWatcherLease = this._rangeWatcherManager["watch"](
          _0x16f455,
          {
            onDataChanged: () => this._refreshEntry(_0x3041c7),
            onRangeChanged: (_0x1bd458) =>
              this._replaceEntryRange(_0x3041c7, _0x1bd458),
          },
        )),
        this._entries["set"](_0x12e3cc, _0x3041c7),
        _0x3041c7
      );
    } catch (_0x46be54) {
      throw (_0x1c7102.dispose(), _0x46be54);
    }
  }
  _refreshEntry(_0xbd02ab) {
    this._entries["get"](_0xbd02ab.key) === _0xbd02ab &&
      (_0xbd02ab.dataSource["refreshDataSet"](),
      _0xbd02ab.handles["forEach"]((_0x1060d2) =>
        _0x1060d2.publishDataChanged(),
      ));
  }
  _replaceEntryRange(_0x345e1a, _0x3ec3e3) {
    if (this._entries["get"](_0x345e1a.key) !== _0x345e1a) return;
    let _0x27eb4e = this._getOrCreateEntry(
      this._normalizeSourceSpec(_0x3ec3e3),
    );
    _0x27eb4e !== _0x345e1a &&
      Array.from(_0x345e1a.handles).forEach((_0x48dc8b) =>
        this._moveHandle(_0x48dc8b, _0x345e1a, _0x27eb4e),
      );
  }
  _moveHandle(_0x5f5d87, _0x3f79fc, _0x3d1cc6) {
    _0x5f5d87.entry === _0x3f79fc &&
      (_0x3d1cc6.handles["add"](_0x5f5d87),
      _0x5f5d87.attach(_0x3d1cc6),
      _0x3f79fc.handles["delete"](_0x5f5d87),
      this._disposeEntryWithoutHandles(_0x3f79fc));
  }
  _releaseHandle(_0x40a621) {
    let _0x527e43 = _0x40a621.entry;
    (_0x527e43 &&
      (_0x527e43.handles["delete"](_0x40a621),
      _0x40a621.detach(_0x527e43),
      this._disposeEntryWithoutHandles(_0x527e43)),
      this._handles["delete"](_0x40a621),
      _0x40a621.complete());
  }
  _disposeEntryWithoutHandles(_0xafdc81) {
    _0xafdc81.handles["size"] > 0 ||
      this._entries["get"](_0xafdc81.key) !== _0xafdc81 ||
      (this._entries["delete"](_0xafdc81.key),
      _0xafdc81.rangeWatcherLease["dispose"](),
      _0xafdc81.dataSource["dispose"]());
  }
  _normalizeSourceSpec(_0x1c5ab0) {
    let _0x351ee4 = _0xd7863.deepClone(_0x1c5ab0);
    return Array.isArray(_0x351ee4)
      ? _0x351ee4
      : { ..._0x351ee4, isRowDirection: _0x351ee4.isRowDirection ?? true };
  }
  dispose() {
    this._isDisposed ||
      ((this._isDisposed = true),
      this._handles["forEach"]((_0x13765f) => _0x13765f.complete()),
      this._handles["clear"](),
      this._entries["forEach"]((_0xb9c79) => {
        (_0xb9c79.rangeWatcherLease["dispose"](),
          _0xb9c79.dataSource["dispose"]());
      }),
      this._entries["clear"](),
      super.dispose());
  }
};
zt = K([G(0, _0x12f4ba(_0x3435ff)), G(1, _0x12f4ba(Lt))], zt);
let J = class extends _0x2a071e {
  constructor(_0x5527ca, _0x8fc04b, _0x478b99, _0x2daf13) {
    (super(),
      (this._resourcesManagerService = _0x5527ca),
      (this._univerInstanceService = _0x8fc04b),
      (this._chartModelService = _0x478b99),
      (this._dataSourceManager = _0x2daf13),
      W(this, "_chartModelIdMap", new Map()),
      W(this, "_dataSourceBindings", new Map()),
      this.disposeWithMe(this._dataSourceManager),
      this._initSnapshot());
  }
  getSubUnitId(_0x12bfae, _0x5409dc) {
    let _0x2a1d7f = this._chartModelIdMap["get"](_0x12bfae);
    if (!_0x2a1d7f) return null;
    for (let [_0x414d2a, _0x44c54c] of _0x2a1d7f.entries())
      if (_0x44c54c.has(_0x5409dc)) return _0x414d2a;
    return null;
  }
  getUnitChartModels(_0x4c4086, _0x5f2fce) {
    let _0x5232ac = this._chartModelIdMap["get"](_0x4c4086);
    if (!_0x5232ac) return [];
    let _0x413035 = _0x5232ac.get(_0x5f2fce);
    if (!_0x413035) return [];
    let { _chartModelService: _0x5f0b7f } = this;
    return Array.from(_0x413035).map((_0x16bf3a) =>
      _0x5f0b7f.getChartModel(_0x16bf3a),
    );
  }
  inferInitialChartMapping(_0x2dc4ca, _0x5626ba, _0x28ddfe) {
    return this.inferInitialChartSource(_0x2dc4ca, _0x5626ba, _0x28ddfe)
      .mapping;
  }
  inferInitialChartSource(_0x5ca562, _0x31de82, _0x148e77) {
    let _0x5ee653 =
      this._getInitialDataOrientation(_0x5ca562) === _0x1e51ae.Row;
    if (Array.isArray(_0x5ca562)) {
      let _0x50c884 = yt(this._univerInstanceService, _0x5ca562);
      try {
        let _0x5a2812 = _0x50c884.getDataSet(),
          _0x22e0d5 = V(_0x5a2812, _0x31de82, undefined, _0x148e77);
        return {
          dataSet: _0x5a2812,
          mapping: {
            headerRow: _0x57a659,
            isRowDirection: false,
            categoryIndexes: _0x22e0d5.categoryIndexes ?? [],
            seriesIndexes: _0x22e0d5.seriesIndexes ?? [],
          },
        };
      } finally {
        _0x50c884.dispose();
      }
    }
    let {
        unitId: _0x177cb7,
        subUnitId: _0x13e839,
        range: _0x18d600,
      } = _0x5ca562.rangeInfo,
      _0x3f7413 = _0xac4906(this._univerInstanceService, {
        unitId: _0x177cb7,
        subUnitId: _0x13e839,
      });
    if (!_0x3f7413) {
      let _0x1183f5 = { dimensions: [], source: [] },
        _0x37ea93 = V(_0x1183f5, _0x31de82, undefined, _0x148e77);
      return {
        dataSet: _0x1183f5,
        mapping: {
          headerRow: _0x5ca562.headerRow ?? _0x57a659,
          isRowDirection: _0x5ee653,
          categoryIndexes: _0x37ea93.categoryIndexes ?? [],
          seriesIndexes: _0x37ea93.seriesIndexes ?? [],
        },
      };
    }
    let { workbook: _0x671562, worksheet: _0x57a5e4 } = _0x3f7413,
      _0x3cc9d8 = mt({
        numfmtOptions: {
          locale: _0x46f1b9(_0x671562.getSnapshot().locale),
          dateSystem: _0x671562.getDateSystem(),
        },
        range: _0x55d5a7.transformRange(_0x18d600, _0x57a5e4),
        styles: _0x671562.getStyles(),
        worksheet: _0x57a5e4,
      }),
      _0x1bb3e0 = (_0x4a492c) =>
        Ot(_0x3cc9d8, {
          chartType: _0x31de82,
          isRowDirection: _0x4a492c,
          ...(_0x5ca562.headerRow === undefined
            ? {}
            : { headerRow: _0x5ca562.headerRow }),
          ...((_0x148e77 == null ? undefined : _0x148e77.categoryIndexes) ===
          undefined
            ? {}
            : { categoryIndexes: _0x148e77.categoryIndexes }),
          ...((_0x148e77 == null ? undefined : _0x148e77.seriesIndexes) ===
          undefined
            ? {}
            : { seriesIndexes: _0x148e77.seriesIndexes }),
        }),
      _0x2d2895 = _0x1bb3e0(_0x5ee653);
    if (
      _0x5ca562.isRowDirection !== undefined ||
      _0x2d2895.mapping["seriesIndexes"].length > 0
    )
      return _0x2d2895;
    let _0x4a6445 = _0x1bb3e0(!_0x5ee653);
    return _0x4a6445.mapping["seriesIndexes"].length > 0
      ? _0x4a6445
      : _0x2d2895;
  }
  _inferPrimaryDataOrientation(_0x5a05f3) {
    if (Array.isArray(_0x5a05f3)) return _0x1e51ae.Column;
    let { range: _0x14534c } = _0x5a05f3.rangeInfo,
      {
        startRow: _0x5eb28e,
        endRow: _0x236de7,
        startColumn: _0x4515b5,
        endColumn: _0x4ddbe4,
      } = _0x14534c;
    return (_0x5eb28e === _0x236de7 &&
      this._hasNonNumberCellInSingleRow(_0x5a05f3)) ||
      _0x236de7 - _0x5eb28e >= _0x4ddbe4 - _0x4515b5
      ? _0x1e51ae.Column
      : _0x1e51ae.Row;
  }
  _getInitialDataOrientation(_0x39b14a) {
    return !Array.isArray(_0x39b14a) && _0x39b14a.isRowDirection !== undefined
      ? _0x39b14a.isRowDirection
        ? _0x1e51ae.Row
        : _0x1e51ae.Column
      : this._inferPrimaryDataOrientation(_0x39b14a);
  }
  _hasNonNumberCellInSingleRow(_0x50fdc3) {
    let {
        unitId: _0x3babfd,
        subUnitId: _0x5b8453,
        range: _0x2c372b,
      } = _0x50fdc3.rangeInfo,
      _0x1a8844 = _0xac4906(this._univerInstanceService, {
        unitId: _0x3babfd,
        subUnitId: _0x5b8453,
      });
    if (!_0x1a8844) return false;
    let { workbook: _0x205a40, worksheet: _0x5a9445 } = _0x1a8844,
      _0x529277 = _0x205a40.getStyles(),
      _0x23e0a4 = {};
    for (
      let _0x48fe31 = _0x2c372b.startColumn;
      _0x48fe31 <= _0x2c372b.endColumn;
      _0x48fe31++
    )
      if (
        _0x5a9445.getColVisible(_0x48fe31) &&
        H(_0x5a9445, _0x2c372b.startRow, _0x48fe31, _0x529277, _0x23e0a4, {
          locale: _0x46f1b9(_0x205a40.getSnapshot().locale),
          dateSystem: _0x205a40.getDateSystem(),
        }).sourceType !== _0x5c01f2.NUMBER
      )
        return true;
    return false;
  }
  ensureChartModelCollection(_0x102a6b, _0x12241c) {
    let _0x26386e = this._chartModelIdMap["get"](_0x102a6b);
    _0x26386e ||
      ((_0x26386e = new Map()),
      this._chartModelIdMap["set"](_0x102a6b, _0x26386e));
    let _0x4b47b8 = _0x26386e.get(_0x12241c);
    return (
      _0x4b47b8 ||
        ((_0x4b47b8 = new Set()), _0x26386e.set(_0x12241c, _0x4b47b8)),
      _0x4b47b8
    );
  }
  getChartDataSource(_0x5b8dd2) {
    var _0x4f5aa0;
    return (_0x4f5aa0 = this._chartModelService["getChartModel"](_0x5b8dd2)) ==
      null
      ? undefined
      : _0x4f5aa0.dataSource;
  }
  getChartSourceSpec(_0x130aa7) {
    let _0x47070e = this.getChartDataSource(_0x130aa7);
    return _0x47070e ? _0xd7863.deepClone(_0x47070e.getRangeInfo()) : undefined;
  }
  replaceChartDataSource(_0xe92cab, _0x2d04f2) {
    let _0x2c5a0d = this.getChartModel(_0xe92cab),
      _0x1355bd = this._dataSourceBindings["get"](_0xe92cab);
    if (!_0x2c5a0d || !_0x1355bd) return false;
    let { mapping: _0x1d9ae5 } = this.inferInitialChartSource(
        _0x2d04f2,
        _0x2c5a0d.chartType,
      ),
      _0x53d2ce = this._applyInitialMappingToRangeInfo(_0x2d04f2, _0x1d9ae5),
      _0xdcb136 = this._dataSourceManager["acquire"](_0x53d2ce),
      _0x98024e = this._chartModelService[
        "rebuildChartModelContextForDataSource"
      ](_0xe92cab, _0xdcb136.dataSource, _0x1d9ae5);
    if (!_0x98024e) return (_0xdcb136.dispose(), false);
    if (_0xdcb136.dataSource === _0x1355bd.handle["dataSource"])
      return (_0xdcb136.dispose(), _0x2c5a0d.setChartContext(_0x98024e), true);
    let _0xe40aeb = this._createDataSourceRuntimeBinding(_0xe92cab, _0xdcb136);
    return (
      this._dataSourceBindings["set"](_0xe92cab, _0xe40aeb),
      _0x2c5a0d.replaceDataSource(_0xdcb136.dataSource),
      this._disposeDataSourceRuntimeBinding(_0x1355bd),
      _0x2c5a0d.setChartContext(_0x98024e),
      true
    );
  }
  refreshChartSource() {
    this._dataSourceManager["refreshAll"]();
  }
  createChartModel(_0x33b305, _0xb03df3, _0x5285f5, _0x2551d8 = false) {
    let {
        context: _0x225c94,
        dataAggregation: _0x39e4f8,
        id: _0x18af8c,
        style: _0x1a5788,
        rangeInfo: _0x5b4c13,
      } = _0x5285f5,
      _0x8fa34 = _0x18af8c ?? _0x9028a6(),
      { chartType: _0xaf127c } = _0x5285f5,
      _0x234a89 = _0x5b4c13,
      _0x30b7f7 = _0x225c94,
      _0x4fb882 =
        (_0x225c94 == null ? undefined : _0x225c94.categoryIndexes) !==
          undefined && _0x225c94.seriesIndexes !== undefined,
      _0x29959c =
        Array.isArray(_0x5b4c13) ||
        (_0x5b4c13.headerRow !== undefined &&
          _0x5b4c13.isRowDirection !== undefined);
    if (!_0x4fb882 || !_0x29959c) {
      let _0x3c63d4 = this.inferInitialChartMapping(
        _0x5b4c13,
        _0xaf127c,
        _0x225c94,
      );
      ((_0x234a89 = this._applyInitialMappingToRangeInfo(_0x5b4c13, _0x3c63d4)),
        (_0x30b7f7 = {
          ..._0x225c94,
          categoryIndexes: _0x3c63d4.categoryIndexes,
          seriesIndexes: _0x3c63d4.seriesIndexes,
        }));
    }
    let _0x4afa32 = this._dataSourceManager["acquire"](_0x234a89),
      _0x2545f7;
    try {
      _0x2545f7 = this._chartModelService["createChartModel"](
        _0x8fa34,
        {
          dataSource: _0x4afa32.dataSource,
          chartType: _0xaf127c,
          dataAggregation: _0x39e4f8,
          style: _0x1a5788,
          context: _0x30b7f7,
        },
        _0x2551d8,
      );
    } catch (_0x222214) {
      throw (_0x4afa32.dispose(), _0x222214);
    }
    let _0x49ce7e = this.ensureChartModelCollection(_0x33b305, _0xb03df3);
    return (
      _0x49ce7e.add(_0x2545f7.id),
      this._dataSourceBindings["set"](
        _0x2545f7.id,
        this._createDataSourceRuntimeBinding(_0x2545f7.id, _0x4afa32),
      ),
      _0x2545f7.onDispose(() => {
        _0x49ce7e.delete(_0x2545f7.id);
        let _0xf91485 = this._dataSourceBindings["get"](_0x2545f7.id);
        (this._dataSourceBindings["delete"](_0x2545f7.id),
          _0xf91485 && this._disposeDataSourceRuntimeBinding(_0xf91485));
      }),
      _0x2545f7
    );
  }
  _applyInitialMappingToRangeInfo(_0x4469b7, _0x407c18) {
    if (Array.isArray(_0x4469b7)) return _0x4469b7;
    let {
      headerRow: _0x3d1d6e,
      isRowDirection: _0x4b8f76,
      ..._0x1ccc79
    } = _0x4469b7;
    return {
      ..._0x1ccc79,
      isRowDirection: _0x407c18.isRowDirection,
      headerRow: _0x407c18.headerRow,
    };
  }
  removeChartModel(_0x4e3bfa) {
    this._chartModelService["removeChartModel"](_0x4e3bfa);
  }
  getChartModel(_0x131592) {
    return this._chartModelService["getChartModel"](_0x131592);
  }
  _serializeChartForUnit(_0x32e72c) {
    let _0x3b7a48 = this._chartModelIdMap["get"](_0x32e72c);
    if (!_0x3b7a48) return "{}";
    let _0x3b2451 = {};
    for (let _0x510ecb of _0x3b7a48.keys()) {
      let _0x3966e3 = _0x3b7a48.get(_0x510ecb);
      if (_0x3966e3)
        for (let _0x15d8fb of Array.from(_0x3966e3)) {
          let _0x4673cb = this._chartModelService["getChartModel"](_0x15d8fb),
            _0x129c3e = this.getChartDataSource(_0x15d8fb);
          _0x4673cb &&
            _0x129c3e &&
            (_0x3b2451[_0x510ecb] || (_0x3b2451[_0x510ecb] = []),
            _0x3b2451[_0x510ecb].push({
              rangeInfo: _0x129c3e.getRangeInfo(),
              ..._0x4673cb.serialize(),
            }));
        }
    }
    return JSON.stringify(_0x3b2451);
  }
  _createDataSourceRuntimeBinding(_0x4b9429, _0x1ac418) {
    return {
      handle: _0x1ac418,
      sourceSubscription: _0x1ac418.dataSource$["pipe"](_0x45c94c(1)).subscribe(
        (_0x1e9082) => {
          var _0x2f9ae0;
          if (
            ((_0x2f9ae0 = this._dataSourceBindings["get"](_0x4b9429)) == null
              ? undefined
              : _0x2f9ae0.handle) !== _0x1ac418
          )
            return;
          let _0xba05ef = this._chartModelService["getChartModel"](_0x4b9429);
          if (!_0xba05ef) return;
          let _0x4ccfcb = this.inferInitialChartMapping(
              _0x1e9082.getRangeInfo(),
              _0xba05ef.chartType,
            ),
            _0x434b73 = this._chartModelService[
              "rebuildChartModelContextForDataSource"
            ](_0x4b9429, _0x1e9082, _0x4ccfcb);
          (_0xba05ef.replaceDataSource(_0x1e9082),
            _0x434b73 && _0xba05ef.setChartContext(_0x434b73));
        },
      ),
      dataSubscription: _0x1ac418.dataChanged$["subscribe"](() => {
        var _0x5d7fdb;
        ((_0x5d7fdb = this._dataSourceBindings["get"](_0x4b9429)) == null
          ? undefined
          : _0x5d7fdb.handle) === _0x1ac418 &&
          this._replaceReconciledContext(_0x4b9429);
      }),
    };
  }
  _disposeDataSourceRuntimeBinding(_0x15141c) {
    (_0x15141c.sourceSubscription["unsubscribe"](),
      _0x15141c.dataSubscription["unsubscribe"](),
      _0x15141c.handle["dispose"]());
  }
  _replaceReconciledContext(_0x2be363) {
    let _0xb1a495 = this._chartModelService["getChartModel"](_0x2be363),
      _0x136f63 =
        this._chartModelService["reconcileChartModelContext"](_0x2be363);
    _0xb1a495 && _0x136f63 && _0xb1a495.setChartContext(_0x136f63);
  }
  _deserializeChartForUnit(_0x4bf37c, _0x19c070) {
    this._univerInstanceService["getUnit"](_0x4bf37c, _0x567cd9.UNIVER_SHEET) &&
      Object.keys(_0x19c070).forEach((_0x5670f2) => {
        let _0x1021ed = _0x19c070[_0x5670f2];
        !_0x1021ed ||
          _0x1021ed.length <= 0 ||
          _0x1021ed.forEach((_0x4ed69b) => {
            let { rangeInfo: _0x3b3a1a } = _0x4ed69b;
            this.createChartModel(_0x4bf37c, _0x5670f2, {
              ..._0x4ed69b,
              rangeInfo: _0x3b3a1a,
            });
          });
      });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_CHART_PLUGIN",
      businesses: [_0x567cd9.UNIVER_SHEET],
      toJson: (_0x32fc8e) => this._serializeChartForUnit(_0x32fc8e),
      parseJson: (_0x111031) => JSON.parse(_0x111031),
      onLoad: (_0xbf9cfd, _0x8024cd) => {
        this._deserializeChartForUnit(_0xbf9cfd, _0x8024cd);
      },
      onUnLoad: (_0x58017a) => {
        var _0xa1787;
        (_0xa1787 = this._chartModelIdMap["get"](_0x58017a)) == null ||
          _0xa1787.forEach((_0x5dd2fb) => {
            Array.from(_0x5dd2fb.values()).forEach((_0x40c916) => {
              this._chartModelService["removeChartModel"](_0x40c916);
            });
          });
      },
    });
  }
  dispose() {
    (Array.from(this._dataSourceBindings["keys"]()).forEach((_0x518b28) =>
      this._chartModelService["removeChartModel"](_0x518b28),
    ),
      this._dataSourceBindings["forEach"]((_0x3170ea) =>
        this._disposeDataSourceRuntimeBinding(_0x3170ea),
      ),
      this._dataSourceBindings["clear"](),
      this._chartModelIdMap["clear"](),
      super.dispose());
  }
};
J = K(
  [G(0, _0x1128f4), G(1, _0x3435ff), G(2, _0x12f4ba(q)), G(3, _0x12f4ba(zt))],
  J,
);
function Bt(_0x62b789, _0x187637) {
  let {
    categoryIndexes: _0x5b5087,
    multiLevelCategoryAxis: _0x198616,
    seriesIndexes: _0x21ff12,
    useDateAxis: _0x3fb8bd,
    histogram: _0x4a2619,
    ..._0x1daadd
  } = _0x62b789;
  return { ..._0x1daadd, ..._0xd7863.deepClone(_0x187637) };
}
const Vt = {
    id: "sheet.mutation.chart-update-config",
    type: _0x36b277.MUTATION,
    handler: (_0x3dbd7e, _0x2de5a) => {
      if (Ut(_0x2de5a)) return false;
      let { chartModelId: _0x4dcfa8 } = _0x2de5a,
        _0x3f60a2 = _0x3dbd7e.get(J).getChartModel(_0x4dcfa8);
      return (
        _0x3f60a2 &&
          (_0x2de5a.style !== undefined &&
            _0x3f60a2.assignStyle(_0x2de5a.style),
          _0x2de5a.context !== undefined &&
            _0x3f60a2.assignChartContext(_0x2de5a.context),
          _0x2de5a.dataAggregation !== undefined &&
            _0x3f60a2.assignDataAggregation(_0x2de5a.dataAggregation),
          _0x2de5a.chartType !== undefined &&
            _0x3f60a2.setChartType(_0x2de5a.chartType)),
        true
      );
    },
  },
  Ht = {
    id: "sheet.mutation.chart-replace-config",
    type: _0x36b277.MUTATION,
    handler: (_0x45ed5d, _0x39f971) => {
      if (Ut(_0x39f971)) return false;
      let _0x48e53f = _0x45ed5d.get(J).getChartModel(_0x39f971.chartModelId);
      if (_0x48e53f) {
        if (
          (_0x39f971.style !== undefined && _0x48e53f.setStyle(_0x39f971.style),
          _0x39f971.context !== undefined)
        )
          try {
            let _0x357b5d = _0x1d5ac9(_0x39f971.context);
            _0x48e53f.setChartContext(Bt(_0x48e53f.context, _0x357b5d));
          } catch {
            return false;
          }
        (_0x39f971.dataAggregation !== undefined &&
          _0x48e53f.setDataAggregation(_0x39f971.dataAggregation),
          _0x39f971.chartType !== undefined &&
            _0x48e53f.setChartType(_0x39f971.chartType));
      }
      return true;
    },
  };
function Ut(_0x328817) {
  return (
    !_0x328817 ||
    !Wt(_0x328817.style) ||
    !Wt(_0x328817.context) ||
    !Wt(_0x328817.dataAggregation)
  );
}
function Wt(_0x26d6df) {
  return (
    _0x26d6df === undefined ||
    (typeof _0x26d6df == "object" && !!_0x26d6df && !Array.isArray(_0x26d6df))
  );
}
const Y = Symbol("ReplaceSheetChartConfig"),
  Gt = {
    id: "sheet.command.chart-update-config",
    type: _0x36b277.COMMAND,
    handler: (_0x3b0bd4, _0x1c4af6) => {
      if (!_0x1c4af6) return false;
      let _0x52a37d = _0x3b0bd4.get(J),
        {
          unitId: _0x4514d4,
          chartModelId: _0x34cb19,
          chartType: _0x919c1,
          style: _0x285056,
          dataAggregation: _0xf66347,
          context: _0x583159,
        } = _0x1c4af6,
        _0x572a20 = _0x1c4af6[Y] === true,
        _0x498e6f = _0x52a37d.getChartModel(_0x34cb19);
      if (!_0x498e6f) return false;
      let _0x14825b = _0x3b0bd4.get(_0x4e8e02),
        _0x3639c7 = _0x3b0bd4.get(_0xce1df9),
        _0x4529e1 = { unitId: _0x4514d4, chartModelId: _0x34cb19 };
      if (
        (_0x919c1 !== undefined && (_0x4529e1.chartType = _0x919c1),
        _0x285056 !== undefined &&
          (_0x4529e1.style = _0x572a20
            ? _0xd7863.deepClone(_0x285056)
            : Kt(_0x498e6f.style, _0x285056)),
        _0xf66347 !== undefined &&
          (_0x4529e1.dataAggregation = _0x572a20
            ? _0xd7863.deepClone(_0xf66347)
            : _0x563390(_0x498e6f.dataAggregation, _0xf66347)),
        _0x583159 !== undefined)
      )
        try {
          _0x4529e1.context = _0x1d5ac9(
            _0x572a20
              ? _0x583159
              : _0x563390(_0x1d5ac9(_0x498e6f.context), _0x583159),
          );
        } catch {
          return false;
        }
      let _0x5e2b29 = { unitId: _0x4514d4, chartModelId: _0x34cb19 };
      (_0x919c1 !== undefined && (_0x5e2b29.chartType = _0x498e6f.chartType),
        _0x4529e1.style !== undefined &&
          (_0x5e2b29.style = _0xd7863.deepClone(_0x498e6f.style)),
        _0x4529e1.dataAggregation !== undefined &&
          (_0x5e2b29.dataAggregation = _0xd7863.deepClone(
            _0x498e6f.dataAggregation,
          )),
        _0x4529e1.context !== undefined &&
          (_0x5e2b29.context = _0x1d5ac9(_0x498e6f.context)));
      let _0x3fc5b7 = [{ id: Ht.id, params: _0x4529e1 }],
        _0x29592a = [{ id: Ht.id, params: _0x5e2b29 }];
      return _0xa64447(_0x3fc5b7, _0x14825b).result
        ? (_0x3639c7.pushUndoRedo({
            unitID: _0x4514d4,
            redoMutations: _0x3fc5b7,
            undoMutations: _0x29592a,
          }),
          true)
        : false;
    },
  };
function Kt(_0x477556, _0xe67c8b) {
  let {
      candlestick: _0x46a5a4,
      sunburst: _0xadc260,
      gauge: _0x3c1632,
      chord: _0x43cbeb,
      ..._0x119ba5
    } = _0xe67c8b,
    _0xc2a594 = _0x563390(_0x477556, _0x119ba5),
    _0x15ed72 = {};
  return (
    Object.prototype["hasOwnProperty"].call(_0xe67c8b, "candlestick") &&
      (_0x15ed72.candlestick = _0x46a5a4),
    Object.prototype["hasOwnProperty"].call(_0xe67c8b, "sunburst") &&
      (_0x15ed72.sunburst = _0xadc260),
    Object.prototype["hasOwnProperty"].call(_0xe67c8b, "gauge") &&
      (_0x15ed72.gauge = _0x3c1632),
    Object.prototype["hasOwnProperty"].call(_0xe67c8b, "chord") &&
      (_0x15ed72.chord = _0x43cbeb),
    Object.keys(_0x15ed72).length
      ? (_0x589d43(_0x15ed72, { currentStyle: _0xc2a594 }).style ?? {})
      : _0xc2a594
  );
}
const qt = {
    id: "sheet.mutation.chart-update-source",
    type: _0x36b277.MUTATION,
    handler: (_0x2d9036, _0x11e71c) => {
      let { chartModelId: _0x6f4f06, rangeInfo: _0x5b1f7c } = _0x11e71c;
      return _0x2d9036.get(J).replaceChartDataSource(_0x6f4f06, _0x5b1f7c);
    },
  },
  Jt = {
    id: "sheet.command.chart-update-source",
    type: _0x36b277.COMMAND,
    handler: (_0x16b761, _0x113786) => {
      if (!_0x113786) return false;
      let _0xb372d = _0x16b761.get(J),
        {
          unitId: _0x507c15,
          chartModelId: _0x12a23f,
          range: _0x23e540,
        } = _0x113786;
      if (!_0xb372d.getChartModel(_0x12a23f)) return false;
      let _0x2d0291 = _0xb372d.getChartDataSource(_0x12a23f);
      if (!_0x2d0291) return false;
      let _0x23ed1 = _0x16b761.get(_0x4e8e02),
        _0x392201 = _0x16b761.get(_0xce1df9),
        _0x59f067 = [],
        _0x1942eb = [],
        _0x4c98c9 = _0x2d0291.getRangeInfo(),
        _0x428e4a = {
          unitId: _0x507c15,
          chartModelId: _0x12a23f,
          rangeInfo: _0x23e540,
        },
        _0x11a62d = {
          unitId: _0x507c15,
          chartModelId: _0x12a23f,
          rangeInfo: _0x4c98c9,
        };
      return (
        _0x59f067.push({ id: qt.id, params: _0x428e4a }),
        _0x1942eb.push({ id: qt.id, params: _0x11a62d }),
        _0xa64447(_0x59f067, _0x23ed1).result
          ? (_0x392201.pushUndoRedo({
              unitID: _0x507c15,
              redoMutations: _0x59f067,
              undoMutations: _0x1942eb,
            }),
            true)
          : false
      );
    },
  };
let Yt = (function (_0x50d90a) {
    return (
      (_0x50d90a.Auto = "auto"),
      (_0x50d90a.Row = "row"),
      (_0x50d90a.Column = "column"),
      (_0x50d90a.Rows = "rows"),
      (_0x50d90a.Columns = "columns"),
      (_0x50d90a.RowsAsSeries = "rowsAsSeries"),
      (_0x50d90a.ColumnsAsSeries = "columnsAsSeries"),
      _0x50d90a
    );
  })({}),
  Xt = (function (_0x40d737) {
    return (
      (_0x40d737.Range = "range"),
      (_0x40d737.Ranges = "ranges"),
      _0x40d737
    );
  })({}),
  Zt = (function (_0x284048) {
    return ((_0x284048.Error = "error"), _0x284048);
  })({});
function Qt(_0x395bd1, _0x12d9cc) {
  let _0xdd9708 = Z(_0x395bd1, _0x3435ff);
  return (
    (_0xdd9708 == null
      ? undefined
      : _0xdd9708.getUnit(_0x12d9cc, _0x567cd9.UNIVER_SHEET)) ??
    (_0xdd9708 == null
      ? undefined
      : _0xdd9708.getCurrentUnitOfType(_0x567cd9.UNIVER_SHEET)) ??
    null
  );
}
function $t(_0xb08620, _0x842364, _0x252c8c) {
  var _0x3312aa, _0x183b93;
  let _0x374d35 = Z(_0xb08620.injector, _0x1f50a7),
    _0x57f690 = Z(_0xb08620.injector, _0x217999);
  if (!_0x374d35 || !_0x57f690)
    return (
      _0x252c8c.push(
        X(
          "COMMAND_FAILED",
          "Chart layout services are not available.",
          "layout",
        ),
      ),
      null
    );
  let _0x1ab5f7 = _0x374d35.getDrawingByParam({
    unitId: _0xb08620.unitId,
    subUnitId: _0xb08620.subUnitId,
    drawingId: _0xb08620.chartId,
  });
  if (!_0x1ab5f7)
    return (
      _0x252c8c.push(
        X(
          "COMMAND_FAILED",
          "Chart drawing not found: " + _0xb08620.chartId + ".",
          "layout",
        ),
      ),
      null
    );
  let _0x1409de = _0x57f690.ensureSkeleton(
    _0xb08620.unitId,
    _0xb08620.subUnitId,
  );
  if (!_0x1409de)
    return (
      _0x252c8c.push(
        X(
          "COMMAND_FAILED",
          "Worksheet skeleton is not available for chart layout update.",
          "layout",
        ),
      ),
      null
    );
  let _0xe96b31 = { ..._0x1ab5f7.transform };
  if (
    (((_0x3312aa = _0x842364.size) == null ? undefined : _0x3312aa.width) !==
      undefined && (_0xe96b31.width = _0x842364.size["width"]),
    ((_0x183b93 = _0x842364.size) == null ? undefined : _0x183b93.height) !==
      undefined && (_0xe96b31.height = _0x842364.size["height"]),
    _0x842364.anchor !== undefined)
  ) {
    let _0x2cef22 = nn(
      _0xb08620.unitId,
      _0xb08620.subUnitId,
      _0x842364.anchor,
      _0x1409de,
      _0x252c8c,
    );
    _0x2cef22 &&
      ((_0xe96b31.left = _0x2cef22.left), (_0xe96b31.top = _0x2cef22.top));
  }
  return (
    _0x842364.position !== undefined &&
      ((_0xe96b31.left = _0x842364.position["x"]),
      (_0xe96b31.top = _0x842364.position["y"])),
    {
      ..._0x1ab5f7,
      unitId: _0xb08620.unitId,
      subUnitId: _0xb08620.subUnitId,
      drawingId: _0xb08620.chartId,
      drawingType: _0x126034.DRAWING_CHART,
      transform: _0xe96b31,
      sheetTransform: _0x320071(_0xe96b31, _0x1409de),
      axisAlignSheetTransform: _0x3c3449(_0xe96b31, _0x1409de),
    }
  );
}
function en(_0x5affba, _0x5a6087, _0x2faf2a) {
  if (_0x5a6087.position) return _0x5a6087.position;
  if (!_0x5a6087.anchor) return;
  let _0x5a6547 = Z(_0x5affba.injector, _0x217999),
    _0x496bf8 =
      _0x5a6547 == null
        ? undefined
        : _0x5a6547.ensureSkeleton(_0x5affba.unitId, _0x5affba.subUnitId);
  if (!_0x496bf8) {
    _0x2faf2a.push(
      X(
        "COMMAND_FAILED",
        "Worksheet skeleton is not available for chart anchor.",
        "anchor",
      ),
    );
    return;
  }
  let _0x5cf2fa = nn(
    _0x5affba.unitId,
    _0x5affba.subUnitId,
    _0x5a6087.anchor,
    _0x496bf8,
    _0x2faf2a,
  );
  return _0x5cf2fa
    ? { x: _0x5cf2fa.left ?? 0, y: _0x5cf2fa.top ?? 0 }
    : undefined;
}
function tn(_0x2729bd) {
  var _0x44cc4f;
  let _0x4933cd = Z(_0x2729bd.injector, _0x1f50a7),
    _0x5d4394 =
      _0x4933cd == null
        ? undefined
        : _0x4933cd.getDrawingByParam({
            unitId: _0x2729bd.unitId,
            subUnitId: _0x2729bd.subUnitId,
            drawingId: _0x2729bd.chartId,
          });
  if (_0x5d4394)
    return {
      position: _0x5d4394.transform
        ? {
            x: _0x5d4394.transform["left"] ?? 0,
            y: _0x5d4394.transform["top"] ?? 0,
          }
        : undefined,
      size: _0x5d4394.transform
        ? {
            width: _0x5d4394.transform["width"],
            height: _0x5d4394.transform["height"],
          }
        : undefined,
      anchor:
        (_0x44cc4f = _0x5d4394.sheetTransform) != null && _0x44cc4f.from
          ? {
              row: _0x5d4394.sheetTransform["from"].row,
              column: _0x5d4394.sheetTransform["from"].column,
              rowOffset: _0x5d4394.sheetTransform["from"].rowOffset,
              columnOffset: _0x5d4394.sheetTransform["from"].columnOffset,
            }
          : undefined,
    };
}
function nn(_0x21505c, _0x13b6f6, _0x2fe6e2, _0x492fb7, _0x44b239) {
  let _0xc22e5 = rn(_0x2fe6e2, _0x44b239);
  return _0xc22e5
    ? _0x289a18(
        _0x21505c,
        _0x13b6f6,
        {
          row: _0xc22e5.row,
          column: _0xc22e5.column,
          rowOffset: _0xc22e5.rowOffset ?? 0,
          columnOffset: _0xc22e5.columnOffset ?? 0,
        },
        1,
        1,
        _0x492fb7,
      ).transform
    : null;
}
function rn(_0x58076a, _0x4e13a8) {
  if (typeof _0x58076a == "string")
    try {
      let _0x38406c = _0x859db1(_0x58076a);
      return {
        row: _0x38406c.range["startRow"],
        column: _0x38406c.range["startColumn"],
      };
    } catch (_0x3cc907) {
      return (
        _0x4e13a8.push(
          X(
            "INVALID_RANGE",
            "Invalid chart source range: " + _0x58076a + ".",
            "layout.anchor",
            _0x3cc907,
          ),
        ),
        null
      );
    }
  return !Number.isInteger(_0x58076a.row) ||
    !Number.isInteger(_0x58076a.column) ||
    _0x58076a.row < 0 ||
    _0x58076a.column < 0
    ? (_0x4e13a8.push(
        X(
          "INVALID_RANGE",
          "Chart anchor row and column must be non-negative integers.",
          "layout.anchor",
        ),
      ),
      null)
    : _0x58076a;
}
function X(_0x580da8, _0x448d21, _0x5742af, _0x424341) {
  return {
    code: _0x580da8,
    severity: "error",
    message: _0x448d21,
    path: _0x5742af,
    details: _0x424341,
  };
}
function Z(_0x5bac60, _0x467146) {
  try {
    return _0x5bac60.get(_0x467146);
  } catch {
    return null;
  }
}
function Q(
  _0x3b545,
  _0x38a14d,
  _0x1c1b5a,
  _0x314250 = "error",
  _0x4c56b0,
  _0x1a55fd,
) {
  return {
    code: _0x3b545,
    severity: _0x314250,
    message: _0x38a14d,
    path: _0x1c1b5a,
    details: _0x4c56b0,
    ..._0x1a55fd,
  };
}
function an(_0x2da51d) {
  return _0x2da51d.some((_0x11805d) => _0x11805d.severity === "error");
}
function on(_0x358899, _0x28522f, _0x5c84f8, _0x5d381c = "source") {
  if (_0x358899 == null)
    return (
      _0x5c84f8.push(
        Q("INVALID_RANGE", "Chart source is required.", _0x5d381c),
      ),
      null
    );
  let _0x3d98e5 = bn(_0x358899) ? _0x358899 : undefined;
  if (_0x3d98e5 && "ranges" in _0x3d98e5)
    return "range" in _0x3d98e5 && _0x3d98e5.range !== undefined
      ? (_0x5c84f8.push(
          Q(
            "INVALID_RANGE",
            "Chart source must specify exactly one of range or ranges.",
            _0x5d381c,
          ),
        ),
        null)
      : sn(_0x3d98e5, _0x28522f, _0x5c84f8, _0x5d381c);
  if (_0x3d98e5 && (!("range" in _0x3d98e5) || _0x3d98e5.range === undefined))
    return (
      _0x5c84f8.push(
        Q(
          "INVALID_RANGE",
          "Chart\x20source\x20must\x20specify\x20exactly\x20one\x20of\x20range\x20or\x20ranges.",
          _0x5d381c,
        ),
      ),
      null
    );
  let _0x51a653 = vn(
    _0x3d98e5 ? _0x3d98e5.range : _0x358899,
    _0x5c84f8,
    _0x3d98e5 ? _0x5d381c + ".range" : _0x5d381c,
  );
  if (!_0x51a653) return null;
  let _0x2940f8 =
    (_0x3d98e5 == null ? undefined : _0x3d98e5.unitId) ?? _0x28522f.unitId;
  if (_0x2940f8 !== _0x28522f.unitId)
    return (
      _0x5c84f8.push(
        Q(
          "INVALID_RANGE",
          "Chart facade create/update only supports sources in the same workbook.",
          _0x5d381c + ".unitId",
        ),
      ),
      null
    );
  let _0x421927 =
      (_0x3d98e5 == null ? undefined : _0x3d98e5.sheetName) ??
      _0x51a653.sheetName,
    _0x424eb7 = _0x421927,
    _0x30ec11 =
      (_0x3d98e5 == null ? undefined : _0x3d98e5.sheetId) ??
      _0x28522f.subUnitId;
  if (_0x421927) {
    let _0x4a4ae9 = _0x28522f.workbook["getSheetBySheetName"](_0x421927);
    if (!_0x4a4ae9)
      return (
        _0x5c84f8.push(
          Q(
            "INVALID_RANGE",
            "Worksheet\x20not\x20found:\x20" + _0x421927 + ".",
            _0x5d381c + ".sheetName",
          ),
        ),
        null
      );
    _0x30ec11 = _0x4a4ae9.getSheetId();
  } else {
    if (_0x3d98e5 != null && _0x3d98e5.sheetId) {
      let _0xe698b2 = _0x28522f.workbook["getSheetBySheetId"](
        _0x3d98e5.sheetId,
      );
      if (!_0xe698b2)
        return (
          _0x5c84f8.push(
            Q(
              "INVALID_RANGE",
              "Worksheet not found: " + _0x3d98e5.sheetId + ".",
              _0x5d381c + ".sheetId",
            ),
          ),
          null
        );
      _0x424eb7 = _0xe698b2.getName();
    }
  }
  hn(_0x51a653.range, _0x5c84f8, _0x3d98e5 ? _0x5d381c + ".range" : _0x5d381c);
  let _0x54f78f = xn(_0x3d98e5 == null ? undefined : _0x3d98e5.orientation),
    _0x54ab67 = _0x3d98e5 == null ? undefined : _0x3d98e5.headerRow,
    _0x4aaea6 = {
      rangeInfo: {
        unitId: _0x2940f8,
        subUnitId: _0x30ec11,
        range: _0x51a653.range,
      },
      ...(_0x54f78f === undefined ? {} : { isRowDirection: _0x54f78f }),
      ...(_0x54ab67 === undefined ? {} : { headerRow: _0x54ab67 }),
    };
  return _0x54ab67 !== undefined &&
    !_n(_0x54ab67, _0x51a653.range, _0x5c84f8, _0x5d381c + ".headerRow")
    ? null
    : {
        kind: "range",
        range: _0x51a653.range,
        sourceSheetName: _0x424eb7,
        isRowDirection: _0x54f78f,
        rangeInfo: _0x4aaea6,
      };
}
function sn(_0x234c73, _0x5ecedd, _0x203cdc, _0x339618) {
  if (!Array.isArray(_0x234c73.ranges) || _0x234c73.ranges["length"] === 0)
    return (
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "Chart source ranges must contain at least one vector.",
          _0x339618 + ".ranges",
        ),
      ),
      null
    );
  if (_0x234c73.unitId !== undefined && _0x234c73.unitId !== _0x5ecedd.unitId)
    return (
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "Chart facade create/update only supports sources in the same workbook.",
          _0x339618 + ".unitId",
        ),
      ),
      null
    );
  let _0x26f4ac = [],
    _0x5758c6,
    _0x40f9d7;
  _0x234c73.ranges["forEach"]((_0x10a326, _0x2f9c6f) => {
    let _0x543c53 = _0x339618 + ".ranges." + _0x2f9c6f,
      _0x22cedb = cn(
        _0x10a326 == null ? undefined : _0x10a326.range,
        _0x234c73,
        _0x5ecedd,
        _0x203cdc,
        _0x543c53 + ".range",
      ),
      _0x28c734 =
        (_0x10a326 == null ? undefined : _0x10a326.header) === undefined
          ? undefined
          : cn(
              _0x10a326.header,
              _0x234c73,
              _0x5ecedd,
              _0x203cdc,
              _0x543c53 + ".header",
            );
    if (
      !_0x22cedb ||
      ((_0x10a326 == null ? undefined : _0x10a326.header) !== undefined &&
        !_0x28c734)
    )
      return;
    let _0x3c9ecd = _0x22cedb.range,
      _0x38fa4d = _0x3c9ecd.startRow === _0x3c9ecd.endRow;
    if (_0x38fa4d === (_0x3c9ecd.startColumn === _0x3c9ecd.endColumn)) {
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "Each chart source vector must be exactly one row or one column.",
          _0x543c53 + ".range",
        ),
      );
      return;
    }
    let _0x57dcfd = _0x38fa4d,
      _0x4a9564 = _0x38fa4d
        ? _0x3c9ecd.endColumn - _0x3c9ecd.startColumn + 1
        : _0x3c9ecd.endRow - _0x3c9ecd.startRow + 1;
    if (_0x40f9d7 !== undefined && _0x40f9d7 !== _0x57dcfd) {
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "All chart source vectors must have the same orientation.",
          _0x543c53 + ".range",
        ),
      );
      return;
    }
    if (_0x5758c6 !== undefined && _0x5758c6 !== _0x4a9564) {
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "All\x20chart\x20source\x20vectors\x20must\x20have\x20equal\x20length.",
          _0x543c53 + ".range",
        ),
      );
      return;
    }
    if (
      _0x28c734 &&
      (_0x28c734.range["startRow"] !== _0x28c734.range["endRow"] ||
        _0x28c734.range["startColumn"] !== _0x28c734.range["endColumn"])
    ) {
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "A chart source vector header must be a single cell.",
          _0x543c53 + ".header",
        ),
      );
      return;
    }
    ((_0x40f9d7 = _0x57dcfd),
      (_0x5758c6 = _0x4a9564),
      _0x26f4ac.push({
        ...(_0x28c734 ? { header: _0x28c734 } : {}),
        range: _0x22cedb,
      }));
  });
  let _0x55087c = xn(_0x234c73.orientation);
  return (
    _0x55087c !== undefined &&
      _0x40f9d7 !== undefined &&
      _0x55087c !== _0x40f9d7 &&
      _0x203cdc.push(
        Q(
          "INVALID_RANGE",
          "Chart source orientation must match the row or column vectors.",
          _0x339618 + ".orientation",
        ),
      ),
    _0x26f4ac.length === _0x234c73.ranges["length"] && !an(_0x203cdc)
      ? { kind: "ranges", ranges: _0x26f4ac, isRowDirection: _0x40f9d7 }
      : null
  );
}
function cn(_0x4127e0, _0x275494, _0x3b5955, _0x5e72db, _0x29f509) {
  let _0x11883a = vn(_0x4127e0, _0x5e72db, _0x29f509);
  if (!_0x11883a) return null;
  let _0x2ca684 = _0x275494.unitId ?? _0x3b5955.unitId,
    _0x9c8962 = _0x11883a.sheetName ?? _0x275494.sheetName,
    _0x3ed64f = _0x275494.sheetId ?? _0x3b5955.subUnitId;
  if (_0x9c8962) {
    let _0x33543d = _0x3b5955.workbook["getSheetBySheetName"](_0x9c8962);
    if (!_0x33543d)
      return (
        _0x5e72db.push(
          Q(
            "INVALID_RANGE",
            "Worksheet\x20not\x20found:\x20" + _0x9c8962 + ".",
            _0x29f509,
          ),
        ),
        null
      );
    _0x3ed64f = _0x33543d.getSheetId();
  } else {
    if (
      _0x275494.sheetId &&
      !_0x3b5955.workbook["getSheetBySheetId"](_0x275494.sheetId)
    )
      return (
        _0x5e72db.push(
          Q(
            "INVALID_RANGE",
            "Worksheet not found: " + _0x275494.sheetId + ".",
            _0x29f509,
          ),
        ),
        null
      );
  }
  return (
    gn(_0x11883a.range, _0x5e72db, _0x29f509),
    { unitId: _0x2ca684, subUnitId: _0x3ed64f, range: _0x11883a.range }
  );
}
function ln(_0x1e89d8, _0x4cedad, _0x22dd87 = 0) {
  var _0xbc58bd, _0x1027db;
  let _0x5b32b3 =
    (_0xbc58bd = _0x4cedad.inferInitialChartSource) == null
      ? undefined
      : _0xbc58bd.call(
          _0x4cedad,
          _0x1e89d8.kind === "ranges" ? _0x1e89d8.ranges : _0x1e89d8.rangeInfo,
        );
  if (_0x5b32b3) return un(_0x5b32b3.dataSet, _0x22dd87);
  if (_0x1e89d8.kind === "ranges")
    return _0x1e89d8.ranges["map"]((_0x4e5d9f, _0x591ae2) => {
      var _0x5129d6;
      let _0x1dc14b = _0x4e5d9f.header,
        _0x54af35 = _0x1dc14b
          ? _0x4cedad.workbook["getSheetBySheetId"](_0x1dc14b.subUnitId)
          : null,
        _0x289d91 = _0x4cedad.workbook["getSheetBySheetId"](
          _0x4e5d9f.range["subUnitId"],
        );
      return {
        index: _0x591ae2,
        name: _0x1dc14b
          ? String(
              (_0x54af35 == null ||
              (_0x5129d6 = _0x54af35.getCell(
                _0x1dc14b.range["startRow"],
                _0x1dc14b.range["startColumn"],
              )) == null
                ? undefined
                : _0x5129d6.v) ?? "",
            )
          : "",
        items: _0x289d91
          ? fn(_0x289d91, _0x4e5d9f.range["range"], _0x1e89d8.isRowDirection)
          : [],
      };
    }).filter((_0x39e047) => _0x39e047.index !== _0x22dd87);
  let _0xb2aa94 = _0x1e89d8.rangeInfo["rangeInfo"],
    _0x330349 = _0x4cedad.workbook["getSheetBySheetId"](_0xb2aa94.subUnitId);
  if (!_0x330349) return [];
  let _0x4376d5 =
      _0x1e89d8.isRowDirection ??
      ((_0x1027db = _0x4cedad.resolveAutoIsRowDirection) == null
        ? undefined
        : _0x1027db.call(_0x4cedad, _0x1e89d8.rangeInfo)) ??
      true,
    _0x1440cd = _0x55d5a7.transformRange(_0xb2aa94.range, _0x330349),
    { dataSet: _0x4757dc } = Et(
      mt({
        numfmtOptions: {
          locale: _0x46f1b9(_0x4cedad.workbook["getSnapshot"]().locale),
          dateSystem: _0x4cedad.workbook["getDateSystem"](),
        },
        range: _0x1440cd,
        styles: _0x4cedad.workbook["getStyles"](),
        worksheet: _0x330349,
      }),
      {
        isRowDirection: _0x4376d5,
        ...(_0x1e89d8.rangeInfo["headerRow"] === undefined
          ? {}
          : { headerRow: _0x1e89d8.rangeInfo["headerRow"] }),
      },
    );
  return un(_0x4757dc, _0x22dd87);
}
function un(_0x554a1e, _0x2dd245) {
  return _0x554a1e.source["map"]((_0x3a3a28, _0x3af528) => ({
    index: _0x3af528,
    name: dn(_0x554a1e.dimensions[_0x3af528]),
    items: _0x3a3a28.map((_0x6ca67c, _0x876c1a) => {
      var _0x226350;
      let _0x3cc3d7 = _0x25c82c(_0x6ca67c);
      return {
        ..._0x3cc3d7,
        label:
          ((_0x226350 = _0x554a1e.sourceLabels) == null ||
          (_0x226350 = _0x226350[_0x3af528]) == null
            ? undefined
            : _0x226350[_0x876c1a]) ?? _0x3cc3d7.label,
      };
    }),
  })).filter((_0x19b4cb) => _0x19b4cb.index !== _0x2dd245);
}
function dn(_0x434dc3) {
  return typeof _0x434dc3 == "string"
    ? _0x434dc3
    : ((_0x434dc3 == null ? undefined : _0x434dc3.displayName) ??
        (_0x434dc3 == null ? undefined : _0x434dc3.name) ??
        "");
}
function fn(_0x7cb2fd, _0xa6471a, _0x4d968e) {
  let _0x34450b = [];
  if (_0x4d968e)
    for (
      let _0xb40ff2 = _0xa6471a.startColumn;
      _0xb40ff2 <= _0xa6471a.endColumn;
      _0xb40ff2++
    ) {
      var _0x44d80c;
      _0x34450b.push(
        _0x25c82c(
          (_0x44d80c = _0x7cb2fd.getCell(_0xa6471a.startRow, _0xb40ff2)) == null
            ? undefined
            : _0x44d80c.v,
        ),
      );
    }
  else
    for (
      let _0x360bfb = _0xa6471a.startRow;
      _0x360bfb <= _0xa6471a.endRow;
      _0x360bfb++
    ) {
      var _0x3208f2;
      _0x34450b.push(
        _0x25c82c(
          (_0x3208f2 = _0x7cb2fd.getCell(_0x360bfb, _0xa6471a.startColumn)) ==
            null
            ? undefined
            : _0x3208f2.v,
        ),
      );
    }
  return _0x34450b;
}
function pn(_0x58f5c9, _0x5ecc12) {
  let {
      rangeInfo: _0x275a5c,
      isRowDirection: _0x34fe75,
      headerRow: _0x1b353a,
    } = _0x58f5c9,
    _0x30475f =
      _0x5ecc12 == null
        ? undefined
        : _0x5ecc12.getSheetBySheetId(_0x275a5c.subUnitId),
    _0x3a5667 = "auto";
  return (
    _0x34fe75 !== undefined && (_0x3a5667 = _0x34fe75 ? "rows" : "columns"),
    {
      range: _0x275a5c.range,
      unitId: _0x275a5c.unitId,
      sheetId: _0x275a5c.subUnitId,
      sheetName: _0x30475f == null ? undefined : _0x30475f.getName(),
      orientation: _0x3a5667,
      ...(_0x1b353a === undefined ? {} : { headerRow: _0x1b353a }),
    }
  );
}
function mn(_0x2b6124, _0x4fb53d) {
  var _0x534631;
  let _0x357e1c = (_0x5c3c3c) => {
      let _0x2e4bc6 =
        _0x4fb53d == null
          ? undefined
          : _0x4fb53d.getSheetBySheetId(_0x5c3c3c.subUnitId);
      return {
        range: _0x5c3c3c.range,
        unitId: _0x5c3c3c.unitId,
        sheetId: _0x5c3c3c.subUnitId,
        sheetName: _0x2e4bc6 == null ? undefined : _0x2e4bc6.getName(),
        orientation: "auto",
      };
    },
    _0x22a50b =
      (_0x534631 = _0x2b6124[0]) == null ? undefined : _0x534631.range["range"];
  return {
    ranges: _0x2b6124.map((_0x2ad943) => ({
      range: _0x357e1c(_0x2ad943.range),
      ...(_0x2ad943.header ? { header: _0x357e1c(_0x2ad943.header) } : {}),
    })),
    orientation:
      _0x22a50b && _0x22a50b.startRow === _0x22a50b.endRow ? "rows" : "columns",
  };
}
function hn(_0x2c8d10, _0x10d341, _0x5aa49f) {
  (gn(_0x2c8d10, _0x10d341, _0x5aa49f),
    _0x2c8d10.startRow === _0x2c8d10.endRow &&
      _0x2c8d10.startColumn === _0x2c8d10.endColumn &&
      _0x10d341.push(
        Q(
          "SINGLE_CELL_SOURCE",
          "Chart\x20source\x20must\x20contain\x20more\x20than\x20one\x20cell.",
          _0x5aa49f,
        ),
      ));
}
function gn(_0x2eb3ed, _0x34ac42, _0x1db81c) {
  if (
    !Number.isInteger(_0x2eb3ed.startRow) ||
    !Number.isInteger(_0x2eb3ed.endRow) ||
    !Number.isInteger(_0x2eb3ed.startColumn) ||
    !Number.isInteger(_0x2eb3ed.endColumn)
  ) {
    _0x34ac42.push(
      Q(
        "INVALID_RANGE",
        "Chart source range must use integer row and column indexes.",
        _0x1db81c,
      ),
    );
    return;
  }
  (_0x2eb3ed.startRow > _0x2eb3ed.endRow ||
    _0x2eb3ed.startColumn > _0x2eb3ed.endColumn ||
    _0x2eb3ed.startRow < 0 ||
    _0x2eb3ed.startColumn < 0) &&
    _0x34ac42.push(
      Q(
        "INVALID_RANGE",
        "Chart\x20source\x20range\x20is\x20invalid.",
        _0x1db81c,
      ),
    );
}
function _n(_0x5c9725, _0x1c21cb, _0x57ea4e, _0x1603d8) {
  let _0x438593 =
    Number.isInteger(_0x5c9725) &&
    (_0x5c9725 === _0x57a659 ||
      (_0x5c9725 >= 0 && _0x5c9725 <= _0x1c21cb.endRow - _0x1c21cb.startRow));
  return (
    _0x438593 ||
      _0x57ea4e.push(
        Q(
          "INVALID_RANGE",
          "Chart source headerRow must be a zero-based row offset inside the source range.",
          _0x1603d8,
        ),
      ),
    _0x438593
  );
}
function vn(_0x52350c, _0x371cb6, _0x3bca86) {
  if (typeof _0x52350c == "string")
    try {
      let _0x30f924 = _0x859db1(_0x52350c);
      return { range: _0x30f924.range, sheetName: _0x30f924.sheetName };
    } catch (_0x22f3c7) {
      return (
        _0x371cb6.push(
          Q(
            "INVALID_RANGE",
            "Invalid chart source range: " + _0x52350c + ".",
            _0x3bca86,
            "error",
            _0x22f3c7,
          ),
        ),
        null
      );
    }
  return yn(_0x52350c)
    ? { range: _0x52350c }
    : (_0x371cb6.push(
        Q(
          "INVALID_RANGE",
          "Chart\x20source\x20range\x20must\x20be\x20a\x20range\x20string\x20or\x20IRange\x20object.",
          _0x3bca86,
        ),
      ),
      null);
}
function yn(_0x5a51b7) {
  return !!(
    _0x5a51b7 &&
    typeof _0x5a51b7 == "object" &&
    "startRow" in _0x5a51b7 &&
    "endRow" in _0x5a51b7 &&
    "startColumn" in _0x5a51b7 &&
    "endColumn" in _0x5a51b7
  );
}
function bn(_0x10b1f0) {
  return !!(_0x10b1f0 && typeof _0x10b1f0 == "object" && !yn(_0x10b1f0));
}
function xn(_0x2d225f) {
  switch (_0x2d225f) {
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
var Sn = class {
  constructor(_0x4bbab3) {
    ((this._context = _0x4bbab3),
      W(this, "_injector", undefined),
      (this._injector = _0x4bbab3.injector));
  }
  describe(_0x8e6e7d = {}, _0x1b44de) {
    let {
        chartId: _0xacd968,
        subUnitId: _0x44ee3f,
        unitId: _0x5f2919,
      } = this._context,
      _0x1f6abf = this._injector["get"](J),
      _0x5bb612 = this._getChartModel(),
      _0x414e18 = _0x1f6abf.getChartSourceSpec(_0xacd968);
    if (!_0x414e18) throw Error("Chart source not found: " + _0xacd968);
    let _0x4396d2 = Qt(this._injector, _0x5f2919) ?? undefined;
    return {
      ..._0x2e7e12(_0x5bb612, _0x8e6e7d, _0x1b44de),
      id: _0xacd968,
      source: Array.isArray(_0x414e18)
        ? mn(_0x414e18, _0x4396d2)
        : pn(_0x414e18, _0x4396d2),
      layout: tn({
        unitId: _0x5f2919,
        subUnitId: _0x44ee3f,
        chartId: _0xacd968,
        injector: this._injector,
      }),
    };
  }
  getInfo() {
    var _0x21ca9a, _0x36bd49, _0x26bf4f, _0xf50e05, _0x8b4c9b;
    let _0x1cab6d = this.describe(),
      _0x308f70 = this._injector["get"](J).getChartSourceSpec(
        this._context["chartId"],
      );
    if (!_0x308f70)
      throw Error("Chart source not found: " + this._context["chartId"]);
    let _0x318a01 = Array.isArray(_0x308f70)
        ? {
            ranges: _0x308f70.map(
              ({ header: _0x35e5d8, range: _0x465921 }) => ({
                ...(_0x35e5d8 ? { header: _0x35e5d8.range } : {}),
                range: _0x465921.range,
              }),
            ),
            orientation:
              ((_0x21ca9a = _0x308f70[0]) == null
                ? undefined
                : _0x21ca9a.range["range"].startRow) ===
              ((_0x36bd49 = _0x308f70[0]) == null
                ? undefined
                : _0x36bd49.range["range"].endRow)
                ? "rows"
                : "columns",
          }
        : pn(_0x308f70),
      _0x345068 =
        (_0x26bf4f = _0x1cab6d.layout) == null ? undefined : _0x26bf4f.size;
    return {
      config: _0x12c332(_0x1cab6d),
      dataSource: _0xd7863.deepClone(_0x318a01),
      position: _0xd7863.deepClone(
        (_0xf50e05 = _0x1cab6d.layout) == null ? undefined : _0xf50e05.position,
      ),
      size:
        (_0x345068 == null ? undefined : _0x345068.width) === undefined ||
        _0x345068.height === undefined
          ? undefined
          : { width: _0x345068.width, height: _0x345068.height },
      anchor: _0xd7863.deepClone(
        (_0x8b4c9b = _0x1cab6d.layout) == null ? undefined : _0x8b4c9b.anchor,
      ),
    };
  }
  commit(_0x4c4bd2) {
    var _0x12bc33;
    let { chartId: _0x9c5f8b, unitId: _0x11a9cf } = this._context,
      _0x2b5f87 = this._getChartModel(),
      _0x45b8cd = _0x589d43(_0x4c4bd2, {
        series:
          (_0x12bc33 = _0x2b5f87.config) == null ? undefined : _0x12bc33.series,
        currentChartType: _0x2b5f87.chartType,
        currentStyle: _0x2b5f87.style,
        currentContext: _0x2b5f87.context,
        currentDataAggregation: _0x2b5f87.dataAggregation,
      });
    if (
      !this._injector["get"](_0x4e8e02).syncExecuteCommand(Gt.id, {
        unitId: _0x11a9cf,
        chartModelId: _0x9c5f8b,
        ..._0x45b8cd,
        [Y]: true,
      })
    )
      throw Error("Failed to update Sheet chart configuration.");
  }
  async update(_0x147658) {
    let _0x299cdc = {};
    return (
      _0x147658.anchor !== undefined && (_0x299cdc.anchor = _0x147658.anchor),
      _0x147658.position !== undefined &&
        (_0x299cdc.position = _0x147658.position),
      _0x147658.size !== undefined && (_0x299cdc.size = _0x147658.size),
      this.commitChanges(_0x147658.dataSource, _0x147658.config, _0x299cdc)
    );
  }
  async commitChanges(_0x525063, _0x160fdf, _0x54fa30) {
    (this._resolveSourceRange(_0x525063),
      this._replaceConfig(_0x160fdf),
      this.commitHost({ source: _0x525063 }),
      Object.keys(_0x54fa30).length > 0 &&
        this.commitHost({ layout: _0x54fa30 }));
  }
  _replaceConfig(_0x49295c) {
    var _0x38cbee;
    let { chartId: _0x539027, unitId: _0x3bf629 } = this._context,
      _0x3de7e6 = this._getChartModel(),
      _0x6f10dc = _0x1d1cf0(_0x49295c, {
        series:
          (_0x38cbee = _0x3de7e6.config) == null ? undefined : _0x38cbee.series,
        currentStyle: _0x3de7e6.style,
      });
    if (
      !this._injector["get"](_0x4e8e02).syncExecuteCommand(Gt.id, {
        unitId: _0x3bf629,
        chartModelId: _0x539027,
        ..._0x6f10dc,
        [Y]: true,
      })
    )
      throw Error("Failed to update Sheet chart configuration.");
  }
  setDataSource(_0x5fdbb5) {
    this.commitHost({ source: _0x5fdbb5 });
  }
  setAbsolutePosition(_0x2d8063, _0x1d947c) {
    this.commitHost({ layout: { position: { x: _0x2d8063, y: _0x1d947c } } });
  }
  setSize(_0x1b0c23, _0x3058dd) {
    this.commitHost({
      layout: { size: { width: _0x1b0c23, height: _0x3058dd } },
    });
  }
  arrange(_0xd624cd) {
    let {
        chartId: _0x1875b7,
        subUnitId: _0x5d20d9,
        unitId: _0x21ae13,
      } = this._context,
      _0x4f1865 = this._injector["get"](_0x1f50a7).getDrawingOrder(
        _0x21ae13,
        _0x5d20d9,
      ),
      _0x6f504a = _0x4f1865.indexOf(_0x1875b7);
    if (_0x6f504a < 0)
      throw Error("Sheet chart drawing not found: " + _0x1875b7);
    if (
      _0x42303c(_0x6f504a, _0x4f1865.length, _0xd624cd) !== _0x6f504a &&
      !this._injector["get"](_0x4e8e02).syncExecuteCommand(_0xd19d13.id, {
        unitId: _0x21ae13,
        subUnitId: _0x5d20d9,
        drawingIds: [_0x1875b7],
        arrangeType: _0xd624cd,
      })
    )
      throw Error("Failed to arrange Sheet chart.");
  }
  setZOrder(_0x503ad0) {
    let {
        chartId: _0x2e6e48,
        subUnitId: _0x5700d5,
        unitId: _0x5e779d,
      } = this._context,
      _0x26fb1a = this._injector["get"](_0x1f50a7).getDrawingOrder(
        _0x5e779d,
        _0x5700d5,
      ),
      _0x2ac53c = _0x26fb1a.indexOf(_0x2e6e48);
    if (_0x2ac53c < 0)
      throw Error("Sheet chart drawing not found: " + _0x2e6e48);
    if (
      _0x17bff2(_0x503ad0, _0x26fb1a.length) !== _0x2ac53c &&
      !this._injector["get"](_0x4e8e02).syncExecuteCommand(_0xd19d13.id, {
        unitId: _0x5e779d,
        subUnitId: _0x5700d5,
        drawingIds: [_0x2e6e48],
        zOrder: _0x503ad0,
      })
    )
      throw Error("Failed to update Sheet chart z-order.");
  }
  resolveData(_0x5caf59, _0x3bbb44) {
    let _0x1dba5a = this._getChartModel(),
      _0x3ace78 = _0x3bbb44 ? this.resolveSource(_0x3bbb44) : undefined;
    return _0x4b2586(
      _0x1dba5a,
      _0x5caf59,
      _0x3ace78 == null ? undefined : _0x3ace78.dataSet,
    );
  }
  resolveSource(_0x14e92a) {
    let { rangeInfo: _0x32bed0 } = this._resolveSourceRange(_0x14e92a),
      _0x15bd25 = this._injector["get"](J).inferInitialChartSource(
        _0x32bed0,
        this._getChartModel().chartType,
      );
    return {
      dataSet: _0x15bd25.dataSet,
      isRowDirection: _0x15bd25.mapping["isRowDirection"],
    };
  }
  commitHost(_0x3a83b4) {
    let _0x551cfd = this._injector["get"](_0x4e8e02),
      {
        chartId: _0x13a9fb,
        subUnitId: _0x438415,
        unitId: _0x19a630,
      } = this._context;
    if (_0x3a83b4.source !== undefined) {
      let { rangeInfo: _0x379271 } = this._resolveSourceRange(_0x3a83b4.source);
      if (
        !_0x551cfd.syncExecuteCommand(Jt.id, {
          unitId: _0x19a630,
          chartModelId: _0x13a9fb,
          range: _0x379271,
        })
      )
        throw Error("Failed to update Sheet chart source.");
    }
    if (_0x3a83b4.layout !== undefined) {
      let _0xb7001 = [],
        _0x1ef853 = $t(
          {
            unitId: _0x19a630,
            subUnitId: _0x438415,
            chartId: _0x13a9fb,
            injector: this._injector,
          },
          _0x3a83b4.layout,
          _0xb7001,
        );
      if (
        (_0x1ef853 || Cn(_0xb7001, "Invalid Sheet chart layout."),
        !(
          _0x1ef853 &&
          _0x551cfd.syncExecuteCommand(_0x119875.id, {
            unitId: _0x19a630,
            drawings: [_0x1ef853],
          })
        ))
      )
        throw Error("Failed to update Sheet chart layout.");
    }
  }
  remove() {
    let {
      chartId: _0x457415,
      subUnitId: _0xca8c06,
      unitId: _0x1dfc71,
    } = this._context;
    return this._injector["get"](_0x4e8e02).executeCommand(_0x5b01e1.id, {
      unitId: _0x1dfc71,
      drawings: [
        {
          unitId: _0x1dfc71,
          subUnitId: _0xca8c06,
          drawingId: _0x457415,
          drawingType: _0x126034.DRAWING_CHART,
        },
      ],
    });
  }
  _resolveSourceRange(_0xdf26cb) {
    let { subUnitId: _0x421599, unitId: _0x3e423b } = this._context,
      _0x1a7318 = this._injector["get"](J),
      _0x20e1e6 = this._getChartModel(),
      _0x14c7cf = Qt(this._injector, _0x3e423b);
    if (!_0x14c7cf) throw Error("Workbook not found: " + _0x3e423b);
    let _0x20464d = [],
      _0x288772 = on(
        _0xdf26cb,
        {
          unitId: _0x3e423b,
          subUnitId: _0x421599,
          workbook: _0x14c7cf,
          resolveAutoIsRowDirection: (_0x3806b9) =>
            _0x1a7318.inferInitialChartMapping(_0x3806b9, _0x20e1e6.chartType)
              .isRowDirection,
        },
        _0x20464d,
      );
    return (
      _0x288772 || Cn(_0x20464d, "Invalid Sheet chart source."),
      {
        rangeInfo:
          _0x288772.kind === "range" ? _0x288772.rangeInfo : _0x288772.ranges,
      }
    );
  }
  _getChartModel() {
    let { chartId: _0x4d5610 } = this._context,
      _0x4b7862 = this._injector["get"](J).getChartModel(_0x4d5610);
    if (!_0x4b7862) throw Error("Chart\x20not\x20found:\x20" + _0x4d5610);
    return _0x4b7862;
  }
};
function Cn(_0x14b93b, _0x3cc70c) {
  throw Error(
    _0x14b93b.map(({ message: _0x5bc96b }) => _0x5bc96b).join(";\x20") ||
      _0x3cc70c,
  );
}
const wn = Number.parseInt(1788764280),
  Tn = ["2", "4", "268435460"],
  En = ["all"],
  Dn = [];
function On(_0x1cf6dd) {
  let { ls: _0x1ae998, pbk: _0x42669e } =
    _0x1cf6dd.get(_0xa7b782).getConfig(_0x4c3305) ?? {};
  if (!_0x1ae998 || !_0x42669e) return Tn;
  let _0x37fd36 = _0xc633f5(_0x1ae998, _0x42669e),
    _0x2436d0 = _0x37fd36.message;
  return _0x37fd36.valid && _0x35addb(_0x2436d0, "sf", wn)
    ? _0x617b49(_0x2436d0, true, "c", En, Tn, Dn)
    : Tn;
}
const kn = "sheets-chart.config",
  An = { chartRenderMode: _0x1ae32d.Image };
function jn(_0x42abc1) {
  if (Array.isArray(_0x42abc1)) return { ranges: _0x42abc1 };
  let {
    headerRow: _0x44c832,
    rangeInfo: _0x1f2342,
    isRowDirection: _0x3b7881,
  } = _0x42abc1;
  return {
    range: _0x1f2342.range,
    rangeUnitId: _0x1f2342.unitId,
    rangeSubUnitId: _0x1f2342.subUnitId,
    ...(_0x3b7881 === undefined ? {} : { isRowDirection: _0x3b7881 }),
    ...(_0x44c832 === undefined ? {} : { headerRow: _0x44c832 }),
  };
}
function Mn(_0x1085a6) {
  let _0x3befae = _0x1085a6.unitId,
    _0x4351c3 = _0x1085a6.subUnitId;
  return "ranges" in _0x1085a6
    ? _0x1085a6.ranges
    : "range" in _0x1085a6
      ? {
          rangeInfo: {
            unitId: _0x1085a6.rangeUnitId ?? _0x3befae,
            subUnitId: _0x1085a6.rangeSubUnitId ?? _0x4351c3,
            range: _0x1085a6.range,
          },
          ...(_0x1085a6.isRowDirection === undefined
            ? {}
            : { isRowDirection: _0x1085a6.isRowDirection }),
          ...(_0x1085a6.headerRow === undefined
            ? {}
            : { headerRow: _0x1085a6.headerRow }),
        }
      : null;
}
const Nn = {
    id: "sheet.mutation.insert-chart",
    type: _0x36b277.MUTATION,
    handler: (_0x7afdcf, _0x567201) => {
      let {
          unitId: _0xfbf4b4,
          subUnitId: _0x4db15e,
          chartId: _0x756de3,
          context: _0x5043da,
          style: _0x14639e,
          dataAggregation: _0x1c5e62,
        } = _0x567201,
        _0x3c29c8 = Mn(_0x567201);
      return _0x3c29c8
        ? (_0x7afdcf
            .get(J)
            .createChartModel(
              _0xfbf4b4,
              _0x4db15e,
              {
                rangeInfo: _0x3c29c8,
                id: _0x756de3,
                chartType: _0x567201.chartType,
                context: _0x5043da,
                style: _0x14639e,
                dataAggregation: _0x1c5e62,
              },
              true,
            ),
          true)
        : false;
    },
  },
  Pn = {
    id: "sheet.mutation.remove-chart",
    type: _0x36b277.MUTATION,
    handler: (_0x2a7623, _0x9da5b4) => {
      let { chartId: _0x45db6f } = _0x9da5b4;
      return (_0x2a7623.get(J).removeChartModel(_0x45db6f), true);
    },
  };
function Fn(_0x13bb0e) {
  var _0x5038fd;
  let _0x59ab10 =
    (_0x5038fd = _0x13bb0e.config) == null ||
    (_0x5038fd = _0x5038fd.style) == null
      ? undefined
      : _0x5038fd.backgroundColor;
  return _0x19fa93(
    _0x59ab10 === undefined
      ? { backgroundColor: _0x13bb0e.backgroundColor ?? null }
      : { backgroundColor: _0x59ab10 },
  );
}
function In(
  _0x4fa36d,
  _0x2b2dad,
  _0x4fa8fc,
  _0x625fee,
  _0x27a47a,
  _0x5604c4,
  _0x194b51,
) {
  var _0x47680e;
  let _0x86c200 = { x: 200, y: 200 },
    _0x5ba60f = _0x4fa36d.get(_0x4bfeb7).getRenderUnitById(_0x625fee),
    _0x3f9753 =
      _0x5ba60f == null ? undefined : _0x5ba60f.scene["getMainViewport"]();
  if (!_0x3f9753) return _0x86c200;
  let _0x94a818 = _0x2b2dad.getCurrentUnitOfType(_0x567cd9.UNIVER_SHEET);
  if (
    (_0x94a818 == null ? undefined : _0x94a818.getUnitId()) !== _0x625fee ||
    ((_0x47680e = _0x4fa8fc.getActiveSheet()) == null
      ? undefined
      : _0x47680e.getSheetId()) !== _0x27a47a
  )
    return _0x86c200;
  let {
    left: _0x3a5282,
    top: _0x4e9779,
    right: _0x447502,
    bottom: _0xa14a0f,
  } = _0x3f9753.viewBound;
  return ![_0x3a5282, _0x4e9779, _0x447502, _0xa14a0f].every(Number.isFinite) ||
    _0x447502 <= _0x3a5282 ||
    _0xa14a0f <= _0x4e9779
    ? _0x86c200
    : {
        x: Math.max(
          0,
          Math.round(_0x3a5282 + (_0x447502 - _0x3a5282 - _0x5604c4) / 2),
        ),
        y: Math.max(
          0,
          Math.round(_0x4e9779 + (_0xa14a0f - _0x4e9779 - _0x194b51) / 2),
        ),
      };
}
const Ln = {
  type: _0x36b277.COMMAND,
  id: "sheet.command.insert-chart",
  handler: async (_0x4d1549, _0x3fd925) => {
    var _0x2ef50f, _0x35a17d, _0x4e9313;
    let { chartType: _0x5da836, source: _0x28d8d7 } = _0x3fd925,
      _0x27bdba = On(_0x4d1549);
    if (_0x27bdba.length !== 1 && !_0x27bdba.includes("" + _0x5da836))
      return false;
    let _0x1aef0e = _0x4d1549.get(_0x3435ff),
      _0xc9a37f = _0xac4906(_0x1aef0e, _0x3fd925);
    if (!_0xc9a37f) return false;
    let _0x15e733 = _0x4d1549.get(_0x217999),
      {
        unitId: _0x55ddd6,
        subUnitId: _0x2b6836,
        workbook: _0x15323c,
      } = _0xc9a37f,
      _0x28286c = _0x15e733.ensureSkeleton(_0x55ddd6, _0x2b6836);
    if (!_0x28286c) return false;
    let _0xaef6e1 = _0x4d1549.get(_0x4e8e02),
      _0x29bdc3 = _0x4d1549.get(_0xce1df9),
      _0x39adcb = _0x4d1549.get(_0x1f1452),
      _0x38127b = _0x4d1549.get(_0x1f50a7),
      _0x540132 = _0x4d1549.get(_0x4ef7ff),
      _0x217bb1 = _0x4d1549.get(J),
      _0x368b81 = _0x3fd925.chartId || _0x9028a6(),
      _0x3d031f;
    try {
      var _0x4d8efe;
      _0x3d031f =
        ((_0x4d8efe = _0x3fd925.config) == null
          ? undefined
          : _0x4d8efe.context) === undefined
          ? undefined
          : _0x1d5ac9(_0x3fd925.config["context"]);
    } catch {
      return false;
    }
    let _0x14ea7e = _0x217bb1.inferInitialChartSource(
        _0x28d8d7,
        ((_0x2ef50f = _0x3fd925.config) == null
          ? undefined
          : _0x2ef50f.chartType) ?? _0x5da836,
        _0x3d031f,
      ),
      _0x6b9a8c = V(
        _0x14ea7e.dataSet,
        ((_0x35a17d = _0x3fd925.config) == null
          ? undefined
          : _0x35a17d.chartType) ?? _0x5da836,
        _0x14ea7e.mapping,
        _0x3d031f,
      ),
      _0x599da1 = _0x28d8d7;
    if (!Array.isArray(_0x28d8d7)) {
      let {
        headerRow: _0x2b988e,
        isRowDirection: _0x134cb6,
        ..._0x12c4c7
      } = _0x28d8d7;
      _0x599da1 = {
        ..._0x12c4c7,
        isRowDirection: _0x14ea7e.mapping["isRowDirection"],
        headerRow: _0x14ea7e.mapping["headerRow"],
      };
    }
    let _0x36544d = {
        unitId: _0x55ddd6,
        subUnitId: _0x2b6836,
        chartId: _0x368b81,
        chartType: _0x5da836,
        context: _0x6b9a8c,
        ...jn(_0x599da1),
      },
      _0x110732 =
        (_0x4e9313 = _0x4d1549
          .get(_0xa7b782)
          .getConfig("sheets-chart.config")) == null
          ? undefined
          : _0x4e9313.defaultChartSize,
      _0x4bf382 =
        _0x3fd925.width ??
        (_0x110732 == null ? undefined : _0x110732.width) ??
        _0x2b7f2f,
      _0x2c4a31 =
        _0x3fd925.height ??
        (_0x110732 == null ? undefined : _0x110732.height) ??
        _0x2d9573,
      { x: _0x23fde3, y: _0x2860ca } =
        _0x3fd925.position ??
        In(
          _0x4d1549,
          _0x1aef0e,
          _0x15323c,
          _0x55ddd6,
          _0x2b6836,
          _0x4bf382,
          _0x2c4a31,
        ),
      _0x1fc311 = {
        from: _0x28286c.getCellIndexAndOffsetByPosition(_0x23fde3, _0x2860ca),
        to: _0x28286c.getCellIndexAndOffsetByPosition(
          _0x23fde3 + _0x4bf382,
          _0x2860ca + _0x2c4a31,
        ),
      },
      _0x24849d = _0x3fd925.theme
        ? _0x540132.getTheme(_0x3fd925.theme)
        : _0x540132.getDefaultTheme(),
      _0x19a89d = Fn(_0x3fd925),
      _0x1d4d6c = _0x3fd925.borderColor || _0x24849d.theme["borderColor"],
      _0x2bbe28 = {
        unitId: _0x55ddd6,
        subUnitId: _0x2b6836,
        drawingId: _0x368b81,
        drawingType: _0x126034.DRAWING_CHART,
        componentKey: "SheetsChartComponent",
        sheetTransform: _0x1fc311,
        transform: {
          left: _0x23fde3,
          top: _0x2860ca,
          width: _0x4bf382,
          height: _0x2c4a31,
        },
        axisAlignSheetTransform: _0x1fc311,
        data: { border: _0x1d4d6c, background: _0x19a89d },
        allowTransform: true,
      },
      {
        undo: _0x3f0038,
        redo: _0x504281,
        objects: _0x5c9259,
      } = _0x38127b.getBatchAddOp([_0x2bbe28]),
      _0x26789b = _0x39adcb.onCommandExecute({
        id: _0x39f1d1.id,
        params: { unitId: _0x55ddd6, drawings: [_0x2bbe28] },
      }),
      _0x14f7cb = [
        ...(_0x26789b.preRedos ?? []),
        {
          id: _0xa5bc07.id,
          params: {
            unitId: _0x55ddd6,
            subUnitId: _0x2b6836,
            op: _0x504281,
            objects: _0x5c9259,
            type: _0x227639.INSERT,
          },
        },
        { id: _0x43f269.id, params: [_0x55ddd6] },
        ..._0x26789b.redos,
        { id: Nn.id, params: _0x36544d },
      ],
      _0x94f9c8 = [
        {
          id: Pn.id,
          params: {
            unitId: _0x55ddd6,
            subUnitId: _0x2b6836,
            chartId: _0x368b81,
          },
        },
        ...(_0x26789b.preUndos ?? []),
        {
          id: _0xa5bc07.id,
          params: {
            unitId: _0x55ddd6,
            subUnitId: _0x2b6836,
            op: _0x3f0038,
            objects: _0x5c9259,
            type: _0x227639.REMOVE,
          },
        },
        { id: _0x43f269.id, params: [_0x55ddd6] },
        ..._0x26789b.undos,
      ];
    if (_0x3fd925.config) {
      let {
          unitId: _0x5c09a0,
          chartModelId: _0x322756,
          chartType: _0x51fe15,
          style: _0x51fc9c,
          dataAggregation: _0x5b549b,
        } = _0x3fd925.config,
        _0x25e67e = { unitId: _0x5c09a0, chartModelId: _0x322756 };
      (_0x51fe15 !== undefined && (_0x25e67e.chartType = _0x51fe15),
        _0x51fc9c !== undefined && (_0x25e67e.style = _0x51fc9c),
        _0x5b549b !== undefined && (_0x25e67e.dataAggregation = _0x5b549b),
        (_0x51fe15 !== undefined ||
          _0x51fc9c !== undefined ||
          _0x5b549b !== undefined) &&
          _0x14f7cb.push({ id: Ht.id, params: _0x25e67e }));
    }
    return _0xa64447(_0x14f7cb, _0xaef6e1).result
      ? (_0x29bdc3.pushUndoRedo({
          unitID: _0x55ddd6,
          undoMutations: _0x94f9c8,
          redoMutations: _0x14f7cb,
        }),
        true)
      : false;
  },
};
var Rn = "@univerjs-pro/sheets-chart",
  zn = "1.0.0-insiders.20260907-70fc579";
let Bn = class extends _0x2a071e {
  constructor(_0xfce91a, _0x4fedbf, _0xc37a1a, _0x5abc61) {
    (super(),
      (this._commandService = _0xfce91a),
      (this._sheetInterceptorService = _0x4fedbf),
      (this._chartModelService = _0xc37a1a),
      (this._sheetsChartService = _0x5abc61),
      this._initCommands(),
      this._initCommandInterceptor());
  }
  _initCommands() {
    [Ln, Gt, Jt, Nn, Pn, Vt, Ht, qt].forEach((_0x556efe) =>
      this.disposeWithMe(this._commandService["registerCommand"](_0x556efe)),
    );
  }
  _initCommandInterceptor() {
    this.disposeWithMe(
      this._sheetInterceptorService["interceptCommand"]({
        getMutations: (_0x2e1a4b) => {
          if (_0x2e1a4b.id === _0x5b01e1.id) {
            let { drawings: _0x13ab9b } = _0x2e1a4b.params,
              _0x54ac4d = _0x13ab9b.filter(
                (_0x2fbdfc) =>
                  _0x2fbdfc.drawingType === _0x126034.DRAWING_CHART,
              );
            if (_0x54ac4d.length === 0)
              return { preRedos: [], redos: [], preUndos: [], undos: [] };
            let _0x3f0d09 = [],
              _0x1c92e1 = [];
            return (
              _0x54ac4d.forEach((_0x2ef956) => {
                let {
                    unitId: _0x57c977,
                    subUnitId: _0x23b132,
                    drawingId: _0x48aac5,
                  } = _0x2ef956,
                  _0x71f569 =
                    this._chartModelService["getChartModel"](_0x48aac5);
                if (!_0x71f569) return;
                let _0x5b09ba =
                  this._sheetsChartService["getChartSourceSpec"](_0x48aac5);
                if (!_0x5b09ba)
                  throw TypeError(
                    "Fail to get data source range info, get: " + _0x5b09ba,
                  );
                _0x3f0d09.push({
                  id: Pn.id,
                  params: {
                    unitId: _0x57c977,
                    subUnitId: _0x23b132,
                    chartId: _0x48aac5,
                  },
                });
                let {
                    chartType: _0x2bf542,
                    context: _0x309cbf,
                    style: _0x5ad4c2,
                    dataAggregation: _0x579d2e,
                  } = _0x71f569.serialize(),
                  _0x29fb78 = {
                    unitId: _0x57c977,
                    subUnitId: _0x23b132,
                    chartId: _0x48aac5,
                    chartType: _0x2bf542,
                    ...jn(_0x5b09ba),
                    context: _0x309cbf,
                    style: _0x5ad4c2,
                    dataAggregation: _0x579d2e,
                  };
                _0x1c92e1.push({ id: Nn.id, params: _0x29fb78 });
              }),
              { preRedos: _0x3f0d09, redos: [], preUndos: [], undos: _0x1c92e1 }
            );
          }
          return { preRedos: [], redos: [], preUndos: [], undos: [] };
        },
      }),
    );
  }
};
Bn = K(
  [
    G(0, _0x4e8e02),
    G(1, _0x12f4ba(_0x1f1452)),
    G(2, _0x12f4ba(q)),
    G(3, _0x12f4ba(J)),
  ],
  Bn,
);
const Vn = "SHEET_CHART_PLUGIN";
let $ = class extends _0x236dfa {
  constructor(_0x39a06e = An, _0x3345a2, _0x4b8976) {
    (super(),
      (this._config = _0x39a06e),
      (this._injector = _0x3345a2),
      (this._configService = _0x4b8976));
    let { ..._0x37ad40 } = _0x28ae3d({}, An, this._config);
    this._configService["setConfig"](kn, _0x37ad40);
  }
  onStarting() {
    let _0x15fe02 = this._injector;
    ([[q], [Lt], [zt], [J], [Bn]].forEach((_0x81403b) =>
      _0x15fe02.add(_0x81403b),
    ),
      _0x3d2fb3(_0x15fe02, [[q], [J], [Bn]]));
  }
};
(W($, "type", _0x567cd9.UNIVER_SHEET),
  W($, "pluginName", Vn),
  W($, "packageName", Rn),
  W($, "version", zn),
  ($ = K(
    [
      _0x3799b1(_0x21c8ca, _0x3332f4, _0x573e46),
      G(1, _0x12f4ba(_0x2ae481)),
      G(2, _0xa7b782),
    ],
    $,
  )));
export {
  Zt as ChartDiagnosticSeverity,
  q as ChartModelService,
  Xt as ChartSourceKind,
  Yt as ChartSourceOrientation,
  Gt as ChartUpdateConfigCommand,
  Vt as ChartUpdateConfigMutation,
  Jt as ChartUpdateSourceCommand,
  qt as ChartUpdateSourceConfigMutation,
  Ln as InsertChartCommand,
  Nn as InsertSheetsChartMutation,
  Pn as RemoveSheetsChartMutation,
  Y as ReplaceSheetChartConfig,
  kn as SHEETS_CHART_PLUGIN_CONFIG_KEY,
  Vn as SHEETS_CHART_PLUGIN_NAME,
  Sn as SheetChartConfigAdapter,
  J as SheetsChartService,
  $ as UniverSheetsChartPlugin,
  On as getAllowedChartTypes,
  en as resolveInitialChartPosition,
  ln as resolveSourceSeries,
  on as resolveSourceSpec,
  jn as toInsertChartMutationSource,
};
