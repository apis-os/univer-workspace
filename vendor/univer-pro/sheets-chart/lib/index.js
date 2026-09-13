import { CHART_HEADER_ROW_NONE as var_core_value_sig64D8, ChartDataSource as var_core_value_sigD755, ChartModel as var_core_value_sigF897, ChartRenderMode as var_core_value_sigA578, ChartSourceDataTypeEnum as var_core_value_sig0260, ChartThemeService as var_core_value_sig034D, ChartTypeBits as var_core_value_sig89EC, DataOrientation as var_core_value_sig9975, UniverChartPlugin as var_core_value_sigD6D9, buildChartPreviewData as var_core_value_sig2637, canonicalizeChartContext as var_core_value_sigAF1D, chartBitsUtils as var_core_value_sigC92D, createChartDataSetProjector as var_core_value_sigEA3D, defaultChartHeight as var_core_value_sig2841, defaultChartWidth as var_core_value_sig9FE1, describeChartModel as var_core_value_sig9DAA, excelDateToUnixMilliseconds as var_core_value_sig1F8A, generateChartContext as var_core_value_sigEBB4, mergeChartConfig as var_core_value_sig2B74, reconcileChartContext as var_core_value_sig0483, resolveChartStyleBackgroundColor as var_core_value_sig4A48, toChartCreateConfigSnapshot as var_core_value_sigD170, toChartDataItem as var_core_value_sig90E5, toChartModelConfigReplacement as var_core_value_sig7000, toChartModelUpdate as var_core_value_sigD7C5 } from "@univerjs-pro/engine-chart";
import { CellValueType as var_core_value_sig3633, CommandType as var_core_value_sig1DF5, DEFAULT_NUMBER_FORMAT as var_core_value_sig90A3, DateSystem as var_core_value_sig28BE, DependentOn as var_core_value_sig0224, Disposable as var_core_value_sig854B, DrawingTypeEnum as var_core_value_sig1FF6, ICommandService as var_core_value_sig4B27, IConfigService as var_core_value_sig3A41, IResourceManagerService as var_core_value_sig269A, IUndoRedoService as var_core_value_sigBF53, IUniverInstanceService as var_core_value_sigD9BB, Inject as var_core_value_sigF549, Injector as var_core_value_sigC125, ObjectMatrix as var_core_value_sigB63D, Plugin as var_core_value_sig8255, Range as var_core_value_sigBFC7, Rectangle as var_core_value_sig933F, Tools as var_core_value_sig29DE, UniverInstanceType as var_core_value_sig4AFB, generateRandomId as var_core_value_sigC7EA, getCellValueType as var_core_value_sigDAB9, getDrawingOrderIndex as var_core_value_sig9CF7, getNumfmtLocaleTag as var_core_value_sigCCE5, merge as var_core_value_sig5933, normalizeDrawingOrderIndex as var_core_value_sig884B, numfmt as var_core_value_sig4E30, sequenceExecute as var_core_value_sig9730, toDisposable as var_core_value_sig8E4A, touchDependencies as var_core_value_sig300B } from "@univerjs/core";
import { ClearSheetDrawingTransformerOperation as var_core_value_sig8457, DrawingApplyType as var_core_value_sigB30D, ISheetDrawingService as var_core_value_sigDB33, InsertSheetDrawingCommand as var_core_value_sig6C8C, RemoveSheetDrawingCommand as var_core_value_sig7A5E, SetDrawingApplyMutation as var_core_value_sig838E, SetDrawingArrangeCommand as var_core_value_sig9A5B, SetSheetDrawingCommand as var_core_value_sigC860, transformToAxisAlignPosition as var_core_value_sigE64C, transformToDrawingPosition as var_core_value_sigF39B } from "@univerjs/sheets-drawing";
import { AddWorksheetMergeMutation as var_core_value_sig9B88, InterceptCellContentPriority as var_core_value_sig992A, MarkDirtyFilterChangeMutation as var_core_value_sig6281, RefRangeService as var_core_value_sig9B01, RemoveColMutation as var_core_value_sigA724, RemoveNumfmtMutation as var_core_value_sig385E, RemoveRowMutation as var_core_value_sig10D3, RemoveWorksheetMergeMutation as var_core_value_sig41F2, ReorderRangeMutation as var_core_value_sig32DD, SetColHiddenMutation as var_core_value_sig7A88, SetColVisibleMutation as var_core_value_sig6CFC, SetNumfmtMutation as var_core_value_sig3EC0, SetRangeValuesMutation as var_core_value_sigEA69, SetRowHiddenMutation as var_core_value_sigF42A, SetRowVisibleMutation as var_core_value_sig898E, SheetInterceptorService as var_core_value_sigC481, SheetSkeletonService as var_core_value_sig27B7, UniverSheetsPlugin as var_core_value_sig2DAD, convertPositionCellToSheetOverGrid as var_core_value_sig00DE, getSheetCommandTarget as var_core_value_sigEF7C } from "@univerjs/sheets";
import { BehaviorSubject as var_core_value_sig07E7, Subject as var_core_value_sig6005, map as var_core_value_sig25A4, skip as var_core_value_sigB591 } from "rxjs";
import { deserializeRangeWithSheet as var_core_value_sigB272 } from "@univerjs/engine-formula";
import { IRenderManagerService as var_core_value_sig6F52 } from "@univerjs/engine-render";
import { LS_CONFIG_KEY as var_core_value_sig09C4, UniverLicensePlugin as var_core_value_sig8E3E, getLicenseInfo as var_core_value_sigC3D3, getSheetFeatureLimit as var_core_value_sig1451, isFeatureAuthorizedWithinTime as var_core_value_sigAD57 } from "@univerjs-pro/license";
const tt = new Set([var_core_value_sig89EC.Line, var_core_value_sig89EC.Column, var_core_value_sig89EC.ColumnStacked, var_core_value_sig89EC.ColumnPercentStacked, var_core_value_sig89EC.Bar, var_core_value_sig89EC.BarStacked, var_core_value_sig89EC.BarPercentStacked, var_core_value_sig89EC.Area, var_core_value_sig89EC.AreaStacked, var_core_value_sig89EC.AreaPercentStacked, var_core_value_sig89EC.Combination, var_core_value_sig89EC.Waterfall]);
function nt(var_core_value_sigADEC) {
  if (var_core_value_sigADEC.length === 0) return [];
  let var_core_value_sig3D8E = [var_core_value_sigADEC[0]];
  for (let var_core_value_sig237B = 1; var_core_value_sig237B < var_core_value_sigADEC.length && var_core_value_sigADEC[var_core_value_sig237B] === var_core_value_sigADEC[var_core_value_sig237B - 1] + 1; var_core_value_sig237B++) var_core_value_sig3D8E.push(var_core_value_sigADEC[var_core_value_sig237B]);
  return var_core_value_sig3D8E;
}
function rt(var_core_value_sig37E5) {
  return var_core_value_sig37E5.length >= 2 && var_core_value_sig37E5.every((var_core_value_sigFEAB, var_core_value_sigE347) => var_core_value_sigE347 === 0 || var_core_value_sigFEAB === var_core_value_sig37E5[var_core_value_sigE347 - 1] + 1);
}
function it(var_core_value_sigF079, var_core_value_sigFCA0, var_core_value_sigC84D) {
  return var_core_value_sigC84D ? [var_core_value_sigFCA0[0]] : nt(var_core_value_sigF079);
}
function at(var_core_value_sigF2BC, var_core_value_sigD37B) {
  let var_core_value_sigFA28 = var_core_value_sigEBB4(var_core_value_sigF2BC),
    var_core_value_sig93BE = var_core_value_sigAF1D(var_core_value_sigD37B.context ?? {}),
    var_core_value_sigABEC = var_core_value_sigFA28.categoryResourceIndexes ?? [],
    var_core_value_sig2712 = var_core_value_sigFA28.seriesResourceIndexes ?? [],
    var_core_value_sig0B9E = var_core_value_sig93BE.categoryIndexes === undefined && var_core_value_sig93BE.seriesIndexes === undefined && var_core_value_sigC92D.baseOn(var_core_value_sigD37B.chartType, var_core_value_sig89EC.Scatter) && var_core_value_sigABEC.length === 0 && var_core_value_sig2712.length >= 2,
    var_core_value_sigC545 = var_core_value_sig93BE.categoryIndexes === undefined ? it(var_core_value_sigABEC, var_core_value_sig2712, var_core_value_sig0B9E) : [...var_core_value_sig93BE.categoryIndexes],
    var_core_value_sig12A7 = new Set(var_core_value_sigC545),
    var_core_value_sig6F4E = var_core_value_sig93BE.seriesIndexes === undefined ? var_core_value_sig2712.filter(var_core_value_sig3C5B => !var_core_value_sig12A7.has(var_core_value_sig3C5B)) : [...var_core_value_sig93BE.seriesIndexes],
    var_core_value_sigA021 = var_core_value_sig93BE.multiLevelCategoryAxis ?? (tt.has(var_core_value_sigD37B.chartType) && rt(var_core_value_sigC545));
  return {
    ...var_core_value_sig93BE,
    categoryIndexes: var_core_value_sigC545,
    multiLevelCategoryAxis: var_core_value_sigA021,
    seriesIndexes: var_core_value_sig6F4E
  };
}
function ot(var_core_value_sig49D9, var_core_value_sig320C) {
  return var_core_value_sigEBB4(var_core_value_sig49D9, var_core_value_sig320C, false);
}
function V(var_core_value_sigE7F0, var_core_value_sigE837, var_core_value_sig34F4, var_core_value_sigA45D) {
  let var_core_value_sig1BC7 = var_core_value_sig34F4 === undefined ? undefined : {
    categoryIndexes: var_core_value_sig34F4.categoryIndexes,
    seriesIndexes: var_core_value_sig34F4.seriesIndexes
  };
  return at(var_core_value_sigE7F0, {
    chartType: var_core_value_sigE837,
    ...(var_core_value_sig34F4 === undefined && var_core_value_sigA45D === undefined ? {} : {
      context: {
        ...var_core_value_sig1BC7,
        ...var_core_value_sigA45D
      }
    })
  });
}
function st(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sig444C, var_core_value_sigE42E) {
  let {
      headers: var_core_value_sigF039,
      categoryIndexes: var_core_value_sigA321,
      categoryResourceIndexes: var_core_value_sigBF4C,
      categoryType: var_core_value_sig3457,
      seriesIndexes: var_core_value_sig4A08,
      seriesResourceIndexes: var_core_value_sig1BC4,
      ...var_core_value_sig9EAB
    } = var_core_value_sig444C,
    var_core_value_sigA5C3 = V(var_core_value_sig4956, var_core_value_sigCC9E, var_core_value_sigE42E, var_core_value_sig9EAB),
    var_core_value_sig3A1E = var_core_value_sig9EAB.multiLevelCategoryAxis ?? (var_core_value_sigA5C3.multiLevelCategoryAxis ? true : undefined);
  return ot(var_core_value_sig4956, {
    ...var_core_value_sig9EAB,
    categoryIndexes: var_core_value_sigA5C3.categoryIndexes,
    seriesIndexes: var_core_value_sigA5C3.seriesIndexes,
    ...(var_core_value_sig3A1E === undefined ? {} : {
      multiLevelCategoryAxis: var_core_value_sig3A1E
    })
  });
}
function ct(var_core_value_sigDC92, var_core_value_sig3515, var_core_value_sigC2A0) {
  return var_core_value_sig0483(var_core_value_sigDC92, var_core_value_sigC2A0, var_core_value_sig3515);
}
function lt(var_core_value_sig7C65) {
  let {
      mergeRanges: var_core_value_sig7F05,
      worksheetRows: var_core_value_sig41F3,
      worksheetColumns: var_core_value_sigF455,
      transpose: var_core_value_sig6E78,
      fieldIndexOffset: var_core_value_sigB3EE = 0
    } = var_core_value_sig7C65,
    var_core_value_sigC50A = new Map(var_core_value_sig41F3.map((var_core_value_sig200B, var_core_value_sig3863) => [var_core_value_sig200B, var_core_value_sig3863])),
    var_core_value_sig11D0 = new Map(var_core_value_sigF455.map((var_core_value_sigC97C, var_core_value_sigC4B1) => [var_core_value_sigC97C, var_core_value_sigC4B1])),
    var_core_value_sigB8ED = [];
  for (let var_core_value_sig1BD9 of var_core_value_sig7F05) {
    let var_core_value_sig8889 = var_core_value_sigC50A.get(var_core_value_sig1BD9.startRow),
      var_core_value_sig32F8 = var_core_value_sig11D0.get(var_core_value_sig1BD9.startColumn);
    if (var_core_value_sig8889 === undefined || var_core_value_sig32F8 === undefined) continue;
    let var_core_value_sig5B67 = var_core_value_sig41F3.filter(var_core_value_sig09B8 => var_core_value_sig09B8 >= var_core_value_sig1BD9.startRow && var_core_value_sig09B8 <= var_core_value_sig1BD9.endRow).length,
      var_core_value_sig1758 = var_core_value_sigF455.filter(var_core_value_sig6F91 => var_core_value_sig6F91 >= var_core_value_sig1BD9.startColumn && var_core_value_sig6F91 <= var_core_value_sig1BD9.endColumn).length,
      var_core_value_sig4805 = var_core_value_sig6E78 ? var_core_value_sig5B67 : var_core_value_sig1758,
      var_core_value_sigE67E = var_core_value_sig6E78 ? var_core_value_sig1758 : var_core_value_sig5B67;
    if (var_core_value_sig4805 !== 1 || var_core_value_sigE67E < 2) continue;
    let var_core_value_sig2902 = (var_core_value_sig6E78 ? var_core_value_sig8889 : var_core_value_sig32F8) + var_core_value_sigB3EE,
      var_core_value_sig9989 = var_core_value_sig6E78 ? var_core_value_sig32F8 : var_core_value_sig8889;
    var_core_value_sigB8ED.push({
      fieldIndex: var_core_value_sig2902,
      startIndex: var_core_value_sig9989,
      endIndex: var_core_value_sig9989 + var_core_value_sigE67E - 1
    });
  }
  return var_core_value_sigB8ED.sort((var_core_value_sigE43E, var_core_value_sigA937) => var_core_value_sigE43E.fieldIndex - var_core_value_sigA937.fieldIndex || var_core_value_sigE43E.startIndex - var_core_value_sigA937.startIndex);
}
const ut = var_core_value_sig8EAE => {
  var var_core_value_sig1CDD;
  return ((var_core_value_sig1CDD = var_core_value_sig8EAE.body) == null ? undefined : var_core_value_sig1CDD.dataStream["replace"](/\r\n$/, "")) || "";
};
function dt(var_core_value_sig0DB1, var_core_value_sig68A2, var_core_value_sigCC17, var_core_value_sig32AE, var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE, var_core_value_sigF79F) {
  let {
      startRow: var_core_value_sig0E54,
      startColumn: var_core_value_sig3B17,
      endColumn: var_core_value_sig6C4A,
      endRow: var_core_value_sig73D9
    } = var_core_value_sig0DB1,
    var_core_value_sigEAF8 = {};
  if (var_core_value_sig0E54 === var_core_value_sig73D9) for (let var_core_value_sigCAD5 = var_core_value_sig3B17; var_core_value_sigCAD5 <= var_core_value_sig6C4A; var_core_value_sigCAD5++) {
    let var_core_value_sig698E = H(var_core_value_sig68A2, var_core_value_sig0E54, var_core_value_sigCAD5, var_core_value_sig81AE, var_core_value_sigEAF8, var_core_value_sigF79F),
      var_core_value_sig2809 = var_core_value_sigCAD5 - var_core_value_sig3B17;
    var_core_value_sig32AE.setValue(var_core_value_sigCC17, var_core_value_sig2809, var_core_value_sig698E.value), var_core_value_sigC753.setValue(var_core_value_sigCC17, var_core_value_sig2809, var_core_value_sig698E.sourceType), var_core_value_sigFFD1.setValue(var_core_value_sigCC17, var_core_value_sig2809, var_core_value_sig698E.label);
  }
  if (var_core_value_sig3B17 === var_core_value_sig6C4A) for (let var_core_value_sigE503 = var_core_value_sig0E54; var_core_value_sigE503 <= var_core_value_sig73D9; var_core_value_sigE503++) {
    let var_core_value_sig2DAB = H(var_core_value_sig68A2, var_core_value_sigE503, var_core_value_sig3B17, var_core_value_sig81AE, var_core_value_sigEAF8, var_core_value_sigF79F),
      var_core_value_sig877E = var_core_value_sigE503 - var_core_value_sig0E54;
    var_core_value_sig32AE.setValue(var_core_value_sigCC17, var_core_value_sig877E, var_core_value_sig2DAB.value), var_core_value_sigC753.setValue(var_core_value_sigCC17, var_core_value_sig877E, var_core_value_sig2DAB.sourceType), var_core_value_sigFFD1.setValue(var_core_value_sigCC17, var_core_value_sig877E, var_core_value_sig2DAB.label);
  }
}
function H(var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7) {
  var var_core_value_sigA4DF;
  let var_core_value_sigCC9D = var_core_value_sig0455.getCell(var_core_value_sig737C, var_core_value_sig5AF5),
    var_core_value_sig90F5 = ((var_core_value_sigA4DF = var_core_value_sig0455.getCellRaw) == null ? undefined : var_core_value_sigA4DF.call(var_core_value_sig0455, var_core_value_sig737C, var_core_value_sig5AF5)) ?? var_core_value_sigCC9D;
  return ft(var_core_value_sigCC9D, var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sig90F5 != null && var_core_value_sig90F5.f || var_core_value_sig90F5 != null && var_core_value_sig90F5.si ? var_core_value_sig90F5 : var_core_value_sig0455.getCellWithFilteredInterceptors ? var_core_value_sig0455.getCellWithFilteredInterceptors(var_core_value_sig737C, var_core_value_sig5AF5, "sheet-chart.source-value", var_core_value_sig48DD => var_core_value_sig48DD.priority !== var_core_value_sig992A.NUMFMT) : var_core_value_sig90F5, var_core_value_sigA4A7);
}
function ft(var_core_value_sigD2BA, var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sigC7E7 = var_core_value_sigD2BA, var_core_value_sig6E1C) {
  if (!var_core_value_sigD2BA || var_core_value_sigD2BA.v === undefined && !var_core_value_sigD2BA.p || var_core_value_sigD2BA.v === null && !var_core_value_sigD2BA.p) return {
    value: null,
    label: "",
    sourceType: var_core_value_sig0260.Null
  };
  let {
    v: var_core_value_sigFABC,
    p: var_core_value_sig413D
  } = var_core_value_sigD2BA;
  if (var_core_value_sig413D) {
    let var_core_value_sig5E6A = ut(var_core_value_sig413D);
    return {
      value: var_core_value_sig5E6A,
      label: var_core_value_sig5E6A,
      sourceType: var_core_value_sig0260.STRING
    };
  }
  let var_core_value_sig5BCE = var_core_value_sigDAB9(var_core_value_sigD2BA),
    var_core_value_sig8EF0 = String(var_core_value_sigFABC);
  if (var_core_value_sig5BCE === var_core_value_sig3633.STRING || var_core_value_sig5BCE === var_core_value_sig3633.FORCE_STRING) return {
    value: var_core_value_sig8EF0,
    label: var_core_value_sig8EF0,
    sourceType: var_core_value_sig0260.STRING
  };
  if (var_core_value_sig5BCE === var_core_value_sig3633.BOOLEAN) {
    let var_core_value_sigB7FC = !!var_core_value_sigFABC;
    return {
      value: +!!var_core_value_sigB7FC,
      label: var_core_value_sigB7FC ? "TRUE" : "FALSE",
      sourceType: var_core_value_sig0260.BOOLEAN
    };
  }
  return var_core_value_sig5BCE === var_core_value_sig3633.NUMBER ? pt(var_core_value_sigD2BA, var_core_value_sigC7E7, var_core_value_sig8EF0, var_core_value_sigCD3A, var_core_value_sig519D, var_core_value_sig6E1C) : {
    value: var_core_value_sig8EF0,
    label: var_core_value_sig8EF0,
    sourceType: var_core_value_sig0260.STRING
  };
}
function pt(var_core_value_sig78AC, var_core_value_sig4CEF, var_core_value_sigD57D, var_core_value_sig2CC7, var_core_value_sig4784, var_core_value_sigC39E) {
  var var_core_value_sig16C7;
  let {
      v: var_core_value_sig7481,
      s: var_core_value_sig08A3
    } = var_core_value_sig78AC,
    var_core_value_sig77D8 = (var_core_value_sig4CEF == null ? undefined : var_core_value_sig4CEF.v) !== undefined && var_core_value_sig4CEF.v !== null ? var_core_value_sig4CEF.v : var_core_value_sig7481,
    var_core_value_sig78A3 = (var_core_value_sig16C7 = var_core_value_sig2CC7.get((var_core_value_sig4CEF == null ? undefined : var_core_value_sig4CEF.s) ?? var_core_value_sig08A3)) == null || (var_core_value_sig16C7 = var_core_value_sig16C7.n) == null ? undefined : var_core_value_sig16C7.pattern,
    var_core_value_sig649B = typeof var_core_value_sig77D8 == "number" ? var_core_value_sig77D8 : Number(var_core_value_sig77D8),
    var_core_value_sig6256 = Number.isFinite(var_core_value_sig649B),
    var_core_value_sigE7A6 = typeof var_core_value_sig77D8 == "string" && var_core_value_sig6256,
    var_core_value_sigB505 = (var_core_value_sig4CEF == null ? undefined : var_core_value_sig4CEF.v) !== undefined && var_core_value_sig4CEF.v !== null && var_core_value_sig4CEF.v !== var_core_value_sig7481;
  var_core_value_sig78A3 && !var_core_value_sig4784[var_core_value_sig78A3] && (var_core_value_sig4784[var_core_value_sig78A3] = var_core_value_sig4E30.getFormatInfo(var_core_value_sig78A3));
  let var_core_value_sig7428 = var_core_value_sig78A3 ? var_core_value_sig4784[var_core_value_sig78A3] : undefined;
  if (var_core_value_sig7428 != null && var_core_value_sig7428.isDate) {
    var var_core_value_sig1DCE;
    let var_core_value_sig9CD9 = var_core_value_sig6256 ? var_core_value_sig649B : (var_core_value_sig1DCE = var_core_value_sig4E30.parseDate(String(var_core_value_sig77D8), var_core_value_sigC39E)) == null ? undefined : var_core_value_sig1DCE.v;
    return {
      value: var_core_value_sig9CD9 == null ? Number(var_core_value_sig77D8) : var_core_value_sig1F8A(var_core_value_sig9CD9, (var_core_value_sigC39E == null ? undefined : var_core_value_sigC39E.dateSystem) !== var_core_value_sig28BE.Date1904),
      label: !var_core_value_sigB505 && var_core_value_sigE7A6 && var_core_value_sig78A3 ? var_core_value_sig4E30.format(var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sigC39E) : var_core_value_sigD57D,
      sourceType: var_core_value_sig0260.Date
    };
  }
  if (var_core_value_sig78A3 !== var_core_value_sig90A3 && var_core_value_sig7428) {
    var var_core_value_sig0567;
    return {
      value: var_core_value_sig6256 ? var_core_value_sig649B : ((var_core_value_sig0567 = var_core_value_sig4E30.parseNumber(String(var_core_value_sig77D8))) == null ? undefined : var_core_value_sig0567.v) ?? Number(var_core_value_sig77D8),
      label: !var_core_value_sigB505 && var_core_value_sigE7A6 && var_core_value_sig78A3 ? var_core_value_sig4E30.format(var_core_value_sig78A3, var_core_value_sig649B, var_core_value_sigC39E) : var_core_value_sigD57D,
      sourceType: var_core_value_sig0260.NUMBER
    };
  }
  return {
    value: Number(var_core_value_sig77D8),
    label: var_core_value_sigD57D,
    sourceType: var_core_value_sig0260.NUMBER
  };
}
function mt({
  numfmtOptions: var_core_value_sigA7F3,
  range: var_core_value_sigEACD,
  styles: var_core_value_sig901E,
  worksheet: var_core_value_sigF7BB
}) {
  let var_core_value_sigFA38 = [],
    var_core_value_sig102B = [];
  for (let var_core_value_sigFD0C = var_core_value_sigEACD.startRow; var_core_value_sigFD0C <= var_core_value_sigEACD.endRow; var_core_value_sigFD0C++) var_core_value_sigF7BB.getRowVisible(var_core_value_sigFD0C) && var_core_value_sigFA38.push(var_core_value_sigFD0C);
  for (let var_core_value_sig849B = var_core_value_sigEACD.startColumn; var_core_value_sig849B <= var_core_value_sigEACD.endColumn; var_core_value_sig849B++) var_core_value_sigF7BB.getColVisible(var_core_value_sig849B) && var_core_value_sig102B.push(var_core_value_sig849B);
  let var_core_value_sigA7DB = {};
  return {
    data: var_core_value_sigFA38.map(var_core_value_sig5F1A => var_core_value_sig102B.map(var_core_value_sig20C8 => {
      let var_core_value_sigE9A7 = H(var_core_value_sigF7BB, var_core_value_sig5F1A, var_core_value_sig20C8, var_core_value_sig901E, var_core_value_sigA7DB, var_core_value_sigA7F3);
      return {
        value: var_core_value_sigE9A7.value,
        type: var_core_value_sigE9A7.sourceType,
        label: var_core_value_sigE9A7.label
      };
    })),
    rowIndexes: var_core_value_sigFA38.map(var_core_value_sigB455 => var_core_value_sigB455 - var_core_value_sigEACD.startRow),
    columnIndexes: var_core_value_sig102B.map(var_core_value_sig5241 => var_core_value_sig5241 - var_core_value_sigEACD.startColumn),
    mergeRanges: var_core_value_sigF7BB.getMergeData().map(var_core_value_sigC6E5 => ({
      startRow: var_core_value_sigC6E5.startRow - var_core_value_sigEACD.startRow,
      endRow: var_core_value_sigC6E5.endRow - var_core_value_sigEACD.startRow,
      startColumn: var_core_value_sigC6E5.startColumn - var_core_value_sigEACD.startColumn,
      endColumn: var_core_value_sigC6E5.endColumn - var_core_value_sigEACD.startColumn
    }))
  };
}
function U(var_core_value_sig5EEE) {
  "@babel/helpers - typeof";

  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigCEFB) {
    return typeof var_core_value_sigCEFB;
  } : function (var_core_value_sig1537) {
    return var_core_value_sig1537 && typeof Symbol == "function" && var_core_value_sig1537.constructor === Symbol && var_core_value_sig1537 !== Symbol.prototype ? "symbol" : typeof var_core_value_sig1537;
  }, U(var_core_value_sig5EEE);
}
function ht(var_core_value_sig65B4, var_core_value_sigF98E) {
  if (U(var_core_value_sig65B4) != "object" || !var_core_value_sig65B4) return var_core_value_sig65B4;
  var var_core_value_sigA470 = var_core_value_sig65B4[Symbol.toPrimitive];
  if (var_core_value_sigA470 !== undefined) {
    var var_core_value_sig19A1 = var_core_value_sigA470.call(var_core_value_sig65B4, var_core_value_sigF98E || "default");
    if (U(var_core_value_sig19A1) != "object") return var_core_value_sig19A1;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigF98E === "string" ? String : Number)(var_core_value_sig65B4);
}
function gt(var_core_value_sig81F7) {
  var var_core_value_sigBE51 = ht(var_core_value_sig81F7, "string");
  return U(var_core_value_sigBE51) == "symbol" ? var_core_value_sigBE51 : var_core_value_sigBE51 + "";
}
function W(var_core_value_sigAAD1, var_core_value_sigBC1A, var_core_value_sig3F3A) {
  return (var_core_value_sigBC1A = gt(var_core_value_sigBC1A)) in var_core_value_sigAAD1 ? Object.defineProperty(var_core_value_sigAAD1, var_core_value_sigBC1A, {
    value: var_core_value_sig3F3A,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigAAD1[var_core_value_sigBC1A] = var_core_value_sig3F3A, var_core_value_sigAAD1;
}
var _t = class extends var_core_value_sigD755 {
    constructor(var_core_value_sigE4C6, var_core_value_sig4313) {
      super(), this._univerInstanceService = var_core_value_sigE4C6, W(this, "_snapshot$", undefined), W(this, "_projector", undefined), W(this, "_projectorHeaderRow", undefined), W(this, "_projectorIsRowDirection", undefined), W(this, "snapshot$", undefined), W(this, "rangeInfo$", undefined), W(this, "data$", undefined), W(this, "isRowDirection$", undefined), W(this, "canSwitchOrient$", undefined);
      let var_core_value_sigFC87 = var_core_value_sig29DE.deepClone(var_core_value_sig4313),
        var_core_value_sig156F = var_core_value_sigFC87.isRowDirection === undefined || var_core_value_sigFC87.isRowDirection,
        var_core_value_sigDD51 = {
          ...var_core_value_sigFC87,
          isRowDirection: var_core_value_sig156F
        },
        var_core_value_sigF057 = this.convertDataSet(var_core_value_sigDD51);
      this._snapshot$ = new var_core_value_sig07E7({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: var_core_value_sigDD51,
        dataSet: var_core_value_sigF057,
        isRowDirection: var_core_value_sig156F,
        canSwitchOrient: true
      }), this.snapshot$ = this._snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sigBECE => ({
        ...var_core_value_sigBECE,
        rangeInfo: var_core_value_sig29DE.deepClone(var_core_value_sigBECE.rangeInfo)
      }))), this.rangeInfo$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig1B22 => var_core_value_sig1B22.rangeInfo)), this.data$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig7F72 => var_core_value_sig7F72.dataSet)), this.isRowDirection$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig7B2A => var_core_value_sig7B2A.isRowDirection)), this.canSwitchOrient$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig06CD => var_core_value_sig06CD.canSwitchOrient));
    }
    getRangeInfo() {
      return var_core_value_sig29DE.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    canSwitchOrient() {
      return true;
    }
    convertDataSet(var_core_value_sig72F6 = this.getRangeInfo()) {
      let {
          headerRow: var_core_value_sig9FBA,
          rangeInfo: var_core_value_sigFE01,
          isRowDirection: var_core_value_sigA2CE
        } = var_core_value_sig72F6,
        {
          unitId: var_core_value_sig1975,
          subUnitId: var_core_value_sig6EA1,
          range: var_core_value_sig029F
        } = var_core_value_sigFE01;
      if (var_core_value_sig029F.startColumn === -1 || var_core_value_sig029F.startRow === -1) return {
        dimensions: [],
        source: []
      };
      let var_core_value_sig3767 = var_core_value_sigEF7C(this._univerInstanceService, {
        unitId: var_core_value_sig1975,
        subUnitId: var_core_value_sig6EA1
      });
      if (!var_core_value_sig3767) return {
        dimensions: [],
        source: []
      };
      let {
          workbook: var_core_value_sig670B,
          worksheet: var_core_value_sig6912
        } = var_core_value_sig3767,
        var_core_value_sigE235 = var_core_value_sigBFC7.transformRange(var_core_value_sig029F, var_core_value_sig6912),
        var_core_value_sig7664 = var_core_value_sig670B.getStyles(),
        var_core_value_sig2281 = mt({
          numfmtOptions: {
            locale: var_core_value_sigCCE5(var_core_value_sig670B.getSnapshot().locale),
            dateSystem: var_core_value_sig670B.getDateSystem()
          },
          range: var_core_value_sigE235,
          styles: var_core_value_sig7664,
          worksheet: var_core_value_sig6912
        });
      return this._getProjector(var_core_value_sig9FBA ?? var_core_value_sig64D8, !!var_core_value_sigA2CE).project(var_core_value_sig2281);
    }
    _getProjector(var_core_value_sig5E86, var_core_value_sig6998) {
      let var_core_value_sigF639 = !var_core_value_sig6998;
      return (!this._projector || this._projectorHeaderRow !== var_core_value_sig5E86 || this._projectorIsRowDirection !== var_core_value_sigF639) && (this._projector = var_core_value_sigEA3D({
        headerRow: var_core_value_sig5E86,
        isRowDirection: var_core_value_sigF639
      }), this._projectorHeaderRow = var_core_value_sig5E86, this._projectorIsRowDirection = var_core_value_sigF639), this._projector;
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let var_core_value_sigEAE5 = this._snapshot$["getValue"]();
      this._emit({
        ...var_core_value_sigEAE5,
        dataSet: this.convertDataSet(var_core_value_sigEAE5.rangeInfo)
      }, false);
    }
    _emit(var_core_value_sigE94C, var_core_value_sig6D47) {
      let var_core_value_sigCB82 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_core_value_sigE94C,
        revision: var_core_value_sigCB82.revision + 1,
        rangeRevision: var_core_value_sigCB82.rangeRevision + +!!var_core_value_sig6D47
      });
    }
    dispose() {
      let var_core_value_sigCF4E = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_core_value_sigCF4E,
        dataSet: this.getEmptyDataSet(),
        revision: var_core_value_sigCF4E.revision + 1
      }), this._snapshot$["complete"](), this._projector = undefined, super.dispose();
    }
  },
  vt = class extends var_core_value_sigD755 {
    constructor(var_core_value_sig6CAD, var_core_value_sig8CF5) {
      super(), this._univerInstanceService = var_core_value_sig6CAD, W(this, "_snapshot$", undefined), W(this, "snapshot$", undefined), W(this, "rangeInfo$", undefined), W(this, "data$", undefined), W(this, "isRowDirection$", undefined), W(this, "canSwitchOrient$", undefined);
      let var_core_value_sigDDD7 = this.convertDataSet(var_core_value_sig8CF5);
      this._snapshot$ = new var_core_value_sig07E7({
        revision: 0,
        rangeRevision: 0,
        rangeInfo: var_core_value_sig29DE.deepClone(var_core_value_sig8CF5),
        dataSet: var_core_value_sigDDD7,
        isRowDirection: false,
        canSwitchOrient: false
      }), this.snapshot$ = this._snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sigA5F1 => ({
        ...var_core_value_sigA5F1,
        rangeInfo: var_core_value_sig29DE.deepClone(var_core_value_sigA5F1.rangeInfo)
      }))), this.rangeInfo$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig97A2 => var_core_value_sig97A2.rangeInfo)), this.data$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig07E9 => var_core_value_sig07E9.dataSet)), this.isRowDirection$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sig4F59 => var_core_value_sig4F59.isRowDirection)), this.canSwitchOrient$ = this.snapshot$["pipe"](var_core_value_sig25A4(var_core_value_sigF564 => var_core_value_sigF564.canSwitchOrient));
    }
    canSwitchOrient() {
      return false;
    }
    getRangeInfo() {
      return var_core_value_sig29DE.deepClone(this._snapshot$["getValue"]().rangeInfo);
    }
    get isRowDirection() {
      return this._snapshot$["getValue"]().isRowDirection;
    }
    convertDataSet(var_core_value_sigB2CE = this.getRangeInfo()) {
      let var_core_value_sig443C = this._univerInstanceService,
        var_core_value_sig39B1 = [],
        var_core_value_sig210D = {};
      for (let {
        header: var_core_value_sig8CFA
      } of var_core_value_sigB2CE) {
        if (!var_core_value_sig8CFA) {
          var_core_value_sig39B1.push("");
          continue;
        }
        let {
            unitId: var_core_value_sigF9C7,
            subUnitId: var_core_value_sig8895,
            range: var_core_value_sigC80B
          } = var_core_value_sig8CFA,
          var_core_value_sig284F = var_core_value_sig443C.getUnit(var_core_value_sigF9C7, var_core_value_sig4AFB.UNIVER_SHEET);
        if (!var_core_value_sig284F) return {
          dimensions: [],
          source: []
        };
        let var_core_value_sigE154 = var_core_value_sig284F.getSheetBySheetId(var_core_value_sig8895);
        if (!var_core_value_sigE154) return {
          dimensions: [],
          source: []
        };
        let var_core_value_sig4632 = var_core_value_sig284F.getStyles(),
          {
            label: var_core_value_sig12F2
          } = H(var_core_value_sigE154, var_core_value_sigC80B.startRow, var_core_value_sigC80B.startColumn, var_core_value_sig4632, var_core_value_sig210D, {
            locale: var_core_value_sigCCE5(var_core_value_sig284F.getSnapshot().locale),
            dateSystem: var_core_value_sig284F.getDateSystem()
          });
        var_core_value_sig39B1.push(var_core_value_sig12F2);
      }
      let var_core_value_sigB4B4 = 0,
        var_core_value_sigD407 = new var_core_value_sigB63D(),
        var_core_value_sig63F3 = new var_core_value_sigB63D(),
        var_core_value_sig6A71 = new var_core_value_sigB63D(),
        var_core_value_sig3BF6 = [],
        var_core_value_sig38CE = [];
      for (let {
        range: var_core_value_sig2E11
      } of var_core_value_sigB2CE) {
        let {
            unitId: var_core_value_sig2259,
            subUnitId: var_core_value_sig9E2F,
            range: var_core_value_sigD082
          } = var_core_value_sig2E11,
          var_core_value_sigDBB7 = var_core_value_sig443C.getUnit(var_core_value_sig2259, var_core_value_sig4AFB.UNIVER_SHEET);
        if (!var_core_value_sigDBB7) return {
          dimensions: [],
          source: []
        };
        let var_core_value_sigD0A8 = var_core_value_sigDBB7.getSheetBySheetId(var_core_value_sig9E2F);
        if (!var_core_value_sigD0A8) return {
          dimensions: [],
          source: []
        };
        dt(var_core_value_sigD082, var_core_value_sigD0A8, var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3, var_core_value_sig6A71, var_core_value_sigDBB7.getStyles(), {
          locale: var_core_value_sigCCE5(var_core_value_sigDBB7.getSnapshot().locale),
          dateSystem: var_core_value_sigDBB7.getDateSystem()
        });
        let var_core_value_sigF4B9 = var_core_value_sigD082.startRow === var_core_value_sigD082.endRow,
          var_core_value_sig5CEE = var_core_value_sigD082.startColumn === var_core_value_sigD082.endColumn,
          var_core_value_sigE92A = true;
        if (var_core_value_sigF4B9 ? var_core_value_sigE92A = var_core_value_sigD0A8.getRowVisible(var_core_value_sigD082.startRow) : var_core_value_sig5CEE && (var_core_value_sigE92A = var_core_value_sigD0A8.getColVisible(var_core_value_sigD082.startColumn)), var_core_value_sigE92A || var_core_value_sig38CE.push(var_core_value_sigB4B4), var_core_value_sigF4B9 || var_core_value_sig5CEE) {
          let var_core_value_sig0D69 = var_core_value_sigD0A8.getMergeData().filter(var_core_value_sig4D4C => var_core_value_sig4D4C.startRow >= var_core_value_sigD082.startRow && var_core_value_sig4D4C.endRow <= var_core_value_sigD082.endRow && var_core_value_sig4D4C.startColumn >= var_core_value_sigD082.startColumn && var_core_value_sig4D4C.endColumn <= var_core_value_sigD082.endColumn),
            var_core_value_sig480E = Array.from({
              length: var_core_value_sigD082.endRow - var_core_value_sigD082.startRow + 1
            }, (var_core_value_sigC9E0, var_core_value_sig76BA) => var_core_value_sigD082.startRow + var_core_value_sig76BA),
            var_core_value_sig26DB = Array.from({
              length: var_core_value_sigD082.endColumn - var_core_value_sigD082.startColumn + 1
            }, (var_core_value_sigFBFA, var_core_value_sigF602) => var_core_value_sigD082.startColumn + var_core_value_sigF602);
          var_core_value_sig3BF6.push(...lt({
            mergeRanges: var_core_value_sig0D69,
            worksheetRows: var_core_value_sig480E,
            worksheetColumns: var_core_value_sig26DB,
            transpose: var_core_value_sigF4B9,
            fieldIndexOffset: var_core_value_sigB4B4
          }));
        }
        var_core_value_sigB4B4++;
      }
      return {
        dimensions: var_core_value_sig39B1,
        source: var_core_value_sigD407.toArray(),
        sourceType: var_core_value_sig63F3.toArray(),
        sourceLabels: var_core_value_sig6A71.toArray(),
        ...(var_core_value_sig38CE.length ? {
          hiddenFieldIndexes: var_core_value_sig38CE
        } : {}),
        categorySpans: var_core_value_sig3BF6
      };
    }
    getDataSet() {
      return this._snapshot$["getValue"]().dataSet;
    }
    getDimensionCount() {
      return this._snapshot$["getValue"]().dataSet["dimensions"].length;
    }
    refreshDataSet() {
      let var_core_value_sig62B7 = this._snapshot$["getValue"]();
      this._emit({
        ...var_core_value_sig62B7,
        dataSet: this.convertDataSet(var_core_value_sig62B7.rangeInfo)
      }, false);
    }
    _emit(var_core_value_sig37A8, var_core_value_sigA90D) {
      let var_core_value_sig7A3C = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_core_value_sig37A8,
        revision: var_core_value_sig7A3C.revision + 1,
        rangeRevision: var_core_value_sig7A3C.rangeRevision + +!!var_core_value_sigA90D
      });
    }
    dispose() {
      let var_core_value_sig0511 = this._snapshot$["getValue"]();
      this._snapshot$["next"]({
        ...var_core_value_sig0511,
        dataSet: this.getEmptyDataSet(),
        revision: var_core_value_sig0511.revision + 1
      }), this._snapshot$["complete"](), super.dispose();
    }
  };
function yt(var_core_value_sigA984, var_core_value_sigA504) {
  return Array.isArray(var_core_value_sigA504) ? new vt(var_core_value_sigA984, var_core_value_sigA504) : new _t(var_core_value_sigA984, var_core_value_sigA504);
}
function bt(var_core_value_sig05FF) {
  return var_core_value_sig05FF !== undefined && var_core_value_sig05FF.type !== var_core_value_sig0260.Null;
}
function xt(var_core_value_sigFBF0) {
  return (var_core_value_sigFBF0 == null ? undefined : var_core_value_sigFBF0.type) === var_core_value_sig0260.STRING || (var_core_value_sigFBF0 == null ? undefined : var_core_value_sigFBF0.type) === var_core_value_sig0260.Date;
}
function St(var_core_value_sig2F95) {
  return var_core_value_sig2F95.every(var_core_value_sig1F44 => var_core_value_sig1F44 === undefined || var_core_value_sig1F44.type === var_core_value_sig0260.Null || xt(var_core_value_sig1F44));
}
function Ct(var_core_value_sigF0E1) {
  return var_core_value_sigF0E1.some(xt);
}
function wt(var_core_value_sig2D8D, var_core_value_sigE5A6) {
  let [var_core_value_sigF449, ...var_core_value_sig38C5] = var_core_value_sig2D8D.data[var_core_value_sigE5A6] ?? [];
  return var_core_value_sig38C5.length < 1 || (var_core_value_sigF449 == null ? undefined : var_core_value_sigF449.type) !== var_core_value_sig0260.Null && !xt(var_core_value_sigF449) || !var_core_value_sig38C5.every(bt) ? false : var_core_value_sig38C5.every((var_core_value_sigCB04, var_core_value_sig947E) => var_core_value_sig2D8D.data["slice"](var_core_value_sigE5A6 + 1).some(var_core_value_sig5B69 => {
    var var_core_value_sigB098;
    return ((var_core_value_sigB098 = var_core_value_sig5B69[var_core_value_sig947E + 1]) == null ? undefined : var_core_value_sigB098.type) === var_core_value_sig0260.NUMBER;
  }));
}
function Tt(var_core_value_sigC87D, var_core_value_sigCCDC) {
  var var_core_value_sigC310;
  if (var_core_value_sigC87D.data["length"] === 0) return;
  if (var_core_value_sigCCDC) {
    var var_core_value_sigA4E8;
    let var_core_value_sig4545 = var_core_value_sigC87D.data["findIndex"](var_core_value_sigCE71 => var_core_value_sigCE71.some(bt));
    if (var_core_value_sig4545 < 0) return;
    let var_core_value_sigF39A = var_core_value_sigC87D.data["slice"](var_core_value_sig4545).map(var_core_value_sig21D8 => var_core_value_sig21D8[0]);
    return Ct(var_core_value_sigF39A) && St(var_core_value_sigF39A) ? ((var_core_value_sigA4E8 = var_core_value_sigC87D.rowIndexes) == null ? undefined : var_core_value_sigA4E8[var_core_value_sig4545]) ?? var_core_value_sig4545 : undefined;
  }
  let var_core_value_sigDC07 = var_core_value_sigC87D.data["findIndex"](var_core_value_sigF79C => var_core_value_sigF79C.some(bt));
  if (var_core_value_sigDC07 < 0) return;
  let var_core_value_sig3474 = var_core_value_sigC87D.data[var_core_value_sigDC07];
  return Ct(var_core_value_sig3474) && St(var_core_value_sig3474) || wt(var_core_value_sigC87D, var_core_value_sigDC07) ? ((var_core_value_sigC310 = var_core_value_sigC87D.rowIndexes) == null ? undefined : var_core_value_sigC310[var_core_value_sigDC07]) ?? var_core_value_sigDC07 : undefined;
}
function Et(var_core_value_sig4E80, var_core_value_sigD23B) {
  let var_core_value_sig2B2A = var_core_value_sigD23B.headerRow ?? Tt(var_core_value_sig4E80, var_core_value_sigD23B.isRowDirection) ?? var_core_value_sig64D8;
  return {
    dataSet: var_core_value_sigEA3D({
      headerRow: var_core_value_sig2B2A,
      isRowDirection: !var_core_value_sigD23B.isRowDirection
    }).project(var_core_value_sig4E80),
    headerRow: var_core_value_sig2B2A
  };
}
function Dt(var_core_value_sig0B5C, var_core_value_sig7D42) {
  if (var_core_value_sig0B5C === undefined && var_core_value_sig7D42 === undefined) return;
  let var_core_value_sig8FDE = {};
  return var_core_value_sig0B5C !== undefined && (var_core_value_sig8FDE.categoryIndexes = [...var_core_value_sig0B5C]), var_core_value_sig7D42 !== undefined && (var_core_value_sig8FDE.seriesIndexes = [...var_core_value_sig7D42]), var_core_value_sig8FDE;
}
function Ot(var_core_value_sig78E6, var_core_value_sig541F) {
  let {
      dataSet: var_core_value_sig417B,
      headerRow: var_core_value_sigAA90
    } = Et(var_core_value_sig78E6, var_core_value_sig541F),
    var_core_value_sigE92D = Dt(var_core_value_sig541F.categoryIndexes, var_core_value_sig541F.seriesIndexes),
    var_core_value_sig9940 = at(var_core_value_sig417B, {
      chartType: var_core_value_sig541F.chartType,
      context: var_core_value_sigE92D
    });
  return {
    dataSet: var_core_value_sig417B,
    mapping: {
      headerRow: var_core_value_sigAA90,
      isRowDirection: var_core_value_sig541F.isRowDirection,
      categoryIndexes: var_core_value_sig9940.categoryIndexes ?? [],
      seriesIndexes: var_core_value_sig9940.seriesIndexes ?? []
    }
  };
}
function G(var_core_value_sig682D, var_core_value_sig1435) {
  return function (var_core_value_sig2E54, var_core_value_sig7658) {
    var_core_value_sig1435(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sig682D);
  };
}
function K(var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sigCCAA) {
  var var_core_value_sigF32D = arguments.length,
    var_core_value_sig9427 = var_core_value_sigF32D < 3 ? var_core_value_sigC049 : var_core_value_sigCCAA === null ? var_core_value_sigCCAA = Object.getOwnPropertyDescriptor(var_core_value_sigC049, var_core_value_sigE5C3) : var_core_value_sigCCAA,
    var_core_value_sig21F4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig9427 = Reflect.decorate(var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sigCCAA);else {
    for (var var_core_value_sigA345 = var_core_value_sig4082.length - 1; var_core_value_sigA345 >= 0; var_core_value_sigA345--) (var_core_value_sig21F4 = var_core_value_sig4082[var_core_value_sigA345]) && (var_core_value_sig9427 = (var_core_value_sigF32D < 3 ? var_core_value_sig21F4(var_core_value_sig9427) : var_core_value_sigF32D > 3 ? var_core_value_sig21F4(var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sig9427) : var_core_value_sig21F4(var_core_value_sigC049, var_core_value_sigE5C3)) || var_core_value_sig9427);
  }
  return var_core_value_sigF32D > 3 && var_core_value_sig9427 && Object.defineProperty(var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sig9427), var_core_value_sig9427;
}
let q = class extends var_core_value_sig854B {
  get activeChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  constructor(var_core_value_sigDCF5) {
    super(), this._injector = var_core_value_sigDCF5, W(this, "_activeChartModel$", new var_core_value_sig07E7(null)), W(this, "_chartModels", new Map()), W(this, "_chartModelAdded$", new var_core_value_sig6005()), W(this, "_chartModelRemoved$", new var_core_value_sig6005()), W(this, "activeChartModel$", this._activeChartModel$["asObservable"]()), W(this, "chartModelAdded$", this._chartModelAdded$["asObservable"]()), W(this, "chartModelRemoved$", this._chartModelRemoved$["asObservable"]());
  }
  setActiveChartModel(var_core_value_sigC786) {
    this._activeChartModel$["next"](var_core_value_sigC786);
  }
  getActiveChartModel() {
    return this._activeChartModel$["getValue"]();
  }
  getChartModel(var_core_value_sigC0D9) {
    return this._chartModels["get"](var_core_value_sigC0D9);
  }
  createChartModel(var_core_value_sigF051, var_core_value_sig5825, var_core_value_sig4EB7 = false) {
    let var_core_value_sig73AF = new var_core_value_sigF897(var_core_value_sigF051, var_core_value_sig5825, this._injector);
    var_core_value_sig73AF.init(), this._chartModels["set"](var_core_value_sig73AF.id, var_core_value_sig73AF);
    let var_core_value_sig548A = var_core_value_sig5825.dataSource["getDataSet"](),
      var_core_value_sigE026 = var_core_value_sig73AF.context;
    return var_core_value_sig73AF.setChartContext(ot(var_core_value_sig548A, var_core_value_sigE026)), var_core_value_sig4EB7 && var_core_value_sig73AF.assignStyle({
      titles: {
        title: {
          content: ""
        }
      }
    }), this._chartModelAdded$["next"](var_core_value_sig73AF), var_core_value_sig73AF;
  }
  reconcileChartModelContext(var_core_value_sig339E) {
    let var_core_value_sig7550 = this._chartModels["get"](var_core_value_sig339E);
    return var_core_value_sig7550 ? ct(var_core_value_sig7550.dataSource["getDataSet"](), var_core_value_sig7550.chartType, var_core_value_sig7550.context) : undefined;
  }
  rebuildChartModelContextForDataSource(var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF) {
    let var_core_value_sig1E5B = this._chartModels["get"](var_core_value_sig2983);
    if (var_core_value_sig1E5B) return st(var_core_value_sigE1B0.getDataSet(), var_core_value_sig1E5B.chartType, var_core_value_sig1E5B.context, var_core_value_sigD4FF);
  }
  removeChartModel(var_core_value_sigB680) {
    let var_core_value_sig1F64 = this._chartModels["get"](var_core_value_sigB680);
    return var_core_value_sig1F64 ? (this._chartModels["delete"](var_core_value_sigB680), this.activeChartModel === var_core_value_sig1F64 && this._activeChartModel$["next"](null), var_core_value_sig1F64.dispose(), this._chartModelRemoved$["next"](var_core_value_sigB680), true) : false;
  }
  dispose() {
    Array.from(this._chartModels["keys"]()).forEach(var_core_value_sig2B65 => this.removeChartModel(var_core_value_sig2B65)), this._activeChartModel$["complete"](), this._chartModelAdded$["complete"](), this._chartModelRemoved$["complete"](), super.dispose();
  }
};
q = K([G(0, var_core_value_sigF549(var_core_value_sigC125))], q);
const kt = {
  Multi: "multi",
  Single: "single"
};
function At(var_core_value_sigA468) {
  let {
    unitId: var_core_value_sig1561,
    subUnitId: var_core_value_sigDF14,
    range: var_core_value_sig842F
  } = var_core_value_sigA468;
  return [var_core_value_sig1561, var_core_value_sigDF14, var_core_value_sig842F.startRow, var_core_value_sig842F.endRow, var_core_value_sig842F.startColumn, var_core_value_sig842F.endColumn];
}
function jt(var_core_value_sigC4C0) {
  return JSON.stringify(Array.isArray(var_core_value_sigC4C0) ? [kt.Multi, var_core_value_sigC4C0.map(var_core_value_sigDD1C => [var_core_value_sigDD1C.header ? At(var_core_value_sigDD1C.header) : null, At(var_core_value_sigDD1C.range)])] : [kt.Single, At(var_core_value_sigC4C0.rangeInfo), var_core_value_sigC4C0.headerRow ?? null]);
}
function Mt(var_core_value_sig214A) {
  return Array.isArray(var_core_value_sig214A) ? jt(var_core_value_sig214A) : JSON.stringify([kt.Single, At(var_core_value_sig214A.rangeInfo), var_core_value_sig214A.isRowDirection ?? true, var_core_value_sig214A.headerRow ?? null]);
}
const Nt = new Set([var_core_value_sig9B88.id, var_core_value_sigEA69.id, var_core_value_sig32DD.id, var_core_value_sigF42A.id, var_core_value_sig898E.id, var_core_value_sig7A88.id, var_core_value_sig6CFC.id, var_core_value_sigA724.id, var_core_value_sig10D3.id, var_core_value_sig6281.id, var_core_value_sig3EC0.id, var_core_value_sig385E.id, var_core_value_sig41F2.id]),
  Pt = new Set([var_core_value_sig9B88.id, var_core_value_sig41F2.id, var_core_value_sig7A88.id, var_core_value_sig6CFC.id, var_core_value_sigF42A.id, var_core_value_sig898E.id]),
  Ft = Object.freeze({
    startRow: -1,
    startColumn: -1,
    endRow: 0,
    endColumn: 0
  });
function It(var_core_value_sigCCC3) {
  let var_core_value_sig986E = false,
    var_core_value_sig537C = false;
  return {
    dispose: () => {
      var_core_value_sig986E = true;
    },
    publish: () => {
      var_core_value_sig986E || var_core_value_sig537C || (var_core_value_sig537C = true, queueMicrotask(() => {
        var_core_value_sig537C = false, var_core_value_sig986E || var_core_value_sigCCC3();
      }));
    }
  };
}
let Lt = class extends var_core_value_sig854B {
  constructor(var_core_value_sig2C39, var_core_value_sigB7D1) {
    super(), this._commandService = var_core_value_sig2C39, this._refRangeService = var_core_value_sigB7D1, W(this, "_entries", new Map());
  }
  watch(var_core_value_sig64F0, var_core_value_sig85B1) {
    let var_core_value_sig3141 = jt(var_core_value_sig64F0),
      var_core_value_sig2162 = {
        rangeInfo: var_core_value_sig29DE.deepClone(var_core_value_sig64F0),
        callbacks: var_core_value_sig85B1
      },
      var_core_value_sig2EAD = this._entries["get"](var_core_value_sig3141);
    var_core_value_sig2EAD || (var_core_value_sig2EAD = {
      key: var_core_value_sig3141,
      consumers: new Set(),
      watcher: {
        dispose: () => {}
      }
    }, var_core_value_sig2EAD.watcher = this._watchRange(var_core_value_sig29DE.deepClone(var_core_value_sig64F0), () => this._publishDataChanged(var_core_value_sig2EAD), var_core_value_sigD7EA => this._publishRangeChanged(var_core_value_sig2EAD, var_core_value_sigD7EA)), this._entries["set"](var_core_value_sig3141, var_core_value_sig2EAD)), var_core_value_sig2EAD.consumers["add"](var_core_value_sig2162);
    let var_core_value_sig6774 = false;
    return var_core_value_sig8E4A(() => {
      var_core_value_sig6774 || (var_core_value_sig6774 = true, var_core_value_sig2EAD.consumers["delete"](var_core_value_sig2162), !(var_core_value_sig2EAD.consumers["size"] > 0 || this._entries["get"](var_core_value_sig3141) !== var_core_value_sig2EAD) && (this._entries["delete"](var_core_value_sig3141), var_core_value_sig2EAD.watcher["dispose"]()));
    });
  }
  _publishDataChanged(var_core_value_sig340D) {
    Array.from(var_core_value_sig340D.consumers).forEach(var_core_value_sigB33B => var_core_value_sigB33B.callbacks["onDataChanged"]());
  }
  _publishRangeChanged(var_core_value_sig82D4, var_core_value_sigBDE4) {
    Array.from(var_core_value_sig82D4.consumers).forEach(var_core_value_sig24B9 => {
      let var_core_value_sigE627;
      if (Array.isArray(var_core_value_sigBDE4)) var_core_value_sigE627 = var_core_value_sig29DE.deepClone(var_core_value_sigBDE4);else {
        let var_core_value_sig362B = var_core_value_sig29DE.deepClone(var_core_value_sig24B9.rangeInfo);
        var_core_value_sig362B.rangeInfo = var_core_value_sig29DE.deepClone(var_core_value_sigBDE4.rangeInfo), var_core_value_sigBDE4.headerRow === undefined ? delete var_core_value_sig362B.headerRow : var_core_value_sig362B.headerRow = var_core_value_sigBDE4.headerRow, var_core_value_sigE627 = var_core_value_sig362B;
      }
      var_core_value_sig24B9.callbacks["onRangeChanged"](var_core_value_sigE627);
    });
  }
  _watchRange(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sig0B0C) {
    let var_core_value_sigA39E = () => var_core_value_sig0B0C(var_core_value_sig29DE.deepClone(var_core_value_sig7DF1));
    return Array.isArray(var_core_value_sig7DF1) ? this._watchMultiRange(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sigA39E) : this._watchSingleRange(var_core_value_sig7DF1, var_core_value_sigDC86, var_core_value_sigA39E);
  }
  _watchSingleRange(var_core_value_sigBBEE, var_core_value_sig011D, var_core_value_sig6167) {
    let {
      unitId: var_core_value_sig65A1,
      subUnitId: var_core_value_sig7F19,
      range: var_core_value_sig7827
    } = var_core_value_sigBBEE.rangeInfo;
    if (var_core_value_sigBBEE.headerRow === undefined || var_core_value_sigBBEE.headerRow === var_core_value_sig64D8) {
      let var_core_value_sigEF3E = this._watchSourceCommands([var_core_value_sigBBEE.rangeInfo], var_core_value_sig011D, var_core_value_sig6167),
        var_core_value_sig273D = this._refRangeService["watchRange"](var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, (var_core_value_sig5CA5, var_core_value_sigE90F) => {
          var_core_value_sigBBEE.rangeInfo["range"] = var_core_value_sigE90F ? {
            ...var_core_value_sigE90F
          } : this._emptyRange(), var_core_value_sig6167();
        });
      return var_core_value_sig8E4A(() => {
        var_core_value_sigEF3E.dispose(), var_core_value_sig273D.dispose();
      });
    }
    let var_core_value_sig652C = {
        ...var_core_value_sig7827,
        startRow: var_core_value_sig7827.startRow + var_core_value_sigBBEE.headerRow,
        endRow: var_core_value_sig7827.startRow + var_core_value_sigBBEE.headerRow
      },
      var_core_value_sig7E32 = It(() => {
        let var_core_value_sig9A0D = var_core_value_sigBBEE.rangeInfo["range"];
        var_core_value_sig652C && var_core_value_sig9A0D.startRow >= 0 ? var_core_value_sigBBEE.headerRow = var_core_value_sig652C.startRow - var_core_value_sig9A0D.startRow : var_core_value_sigBBEE.headerRow = var_core_value_sig64D8, var_core_value_sig6167();
      }),
      var_core_value_sig4C07 = this._watchSourceCommands([var_core_value_sigBBEE.rangeInfo], var_core_value_sig011D, var_core_value_sig7E32.publish),
      var_core_value_sig79AB = this._refRangeService["watchRange"](var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig7827, (var_core_value_sigA319, var_core_value_sig2D58) => {
        var_core_value_sigBBEE.rangeInfo["range"] = var_core_value_sig2D58 ? {
          ...var_core_value_sig2D58
        } : this._emptyRange(), var_core_value_sig7E32.publish();
      }),
      var_core_value_sig8E74 = this._refRangeService["watchRange"](var_core_value_sig65A1, var_core_value_sig7F19, var_core_value_sig652C, (var_core_value_sig223F, var_core_value_sigD749) => {
        var_core_value_sig652C = var_core_value_sigD749 ? {
          ...var_core_value_sigD749
        } : null, var_core_value_sig7E32.publish();
      });
    return var_core_value_sig8E4A(() => {
      var_core_value_sig7E32.dispose(), var_core_value_sig4C07.dispose(), var_core_value_sig79AB.dispose(), var_core_value_sig8E74.dispose();
    });
  }
  _watchMultiRange(var_core_value_sig104C, var_core_value_sig841D, var_core_value_sig90CB) {
    let var_core_value_sigBDF5 = var_core_value_sig104C.flatMap(var_core_value_sigCFFA => [var_core_value_sigCFFA.header, var_core_value_sigCFFA.range]).filter(var_core_value_sig58C1 => !!var_core_value_sig58C1),
      var_core_value_sigACC6 = It(var_core_value_sig90CB),
      var_core_value_sig1614 = this._watchSourceCommands(var_core_value_sigBDF5, var_core_value_sig841D, var_core_value_sigACC6.publish),
      var_core_value_sig85C3 = var_core_value_sigBDF5.map(var_core_value_sig5090 => this._refRangeService["watchRange"](var_core_value_sig5090.unitId, var_core_value_sig5090.subUnitId, var_core_value_sig5090.range, (var_core_value_sigEFD4, var_core_value_sig861B) => {
        var_core_value_sig5090.range = var_core_value_sig861B ? {
          ...var_core_value_sig861B
        } : this._emptyRange(), var_core_value_sigACC6.publish();
      }));
    return var_core_value_sig8E4A(() => {
      var_core_value_sigACC6.dispose(), var_core_value_sig1614.dispose(), var_core_value_sig85C3.forEach(var_core_value_sig5237 => var_core_value_sig5237.dispose());
    });
  }
  _watchSourceCommands(var_core_value_sigB996, var_core_value_sig4BBA, var_core_value_sig6201) {
    let var_core_value_sig5151 = new Map();
    var_core_value_sigB996.forEach(var_core_value_sigC368 => {
      let var_core_value_sigAD56 = var_core_value_sig5151.get(var_core_value_sigC368.unitId);
      var_core_value_sigAD56 || (var_core_value_sigAD56 = new Map(), var_core_value_sig5151.set(var_core_value_sigC368.unitId, var_core_value_sigAD56));
      let var_core_value_sigDB4A = var_core_value_sigAD56.get(var_core_value_sigC368.subUnitId) ?? [];
      var_core_value_sigDB4A.push(var_core_value_sigC368), var_core_value_sigAD56.set(var_core_value_sigC368.subUnitId, var_core_value_sigDB4A);
    });
    let var_core_value_sigB542 = (var_core_value_sig6418, var_core_value_sig1896) => {
      let var_core_value_sig0285 = var_core_value_sigBB00 => var_core_value_sig1896.some(var_core_value_sigF0F9 => var_core_value_sig933F.intersects(var_core_value_sigF0F9.range, var_core_value_sigBB00));
      if (var_core_value_sig6418.id === var_core_value_sigEA69.id) {
        let {
          cellValue: var_core_value_sig7E54
        } = var_core_value_sig6418.params;
        var_core_value_sig0285(new var_core_value_sigB63D(var_core_value_sig7E54).getStartEndScope()) && var_core_value_sig4BBA();
      } else {
        if (var_core_value_sig6418.id === var_core_value_sig32DD.id) {
          let {
            range: var_core_value_sig1A0F
          } = var_core_value_sig6418.params;
          var_core_value_sig0285(var_core_value_sig1A0F) && var_core_value_sig4BBA();
        } else {
          if (Pt.has(var_core_value_sig6418.id)) {
            let {
              ranges: var_core_value_sig1BBD
            } = var_core_value_sig6418.params;
            var_core_value_sig1BBD.some(var_core_value_sig0285) && var_core_value_sig4BBA();
          } else {
            if (var_core_value_sig6418.id === var_core_value_sigA724.id || var_core_value_sig6418.id === var_core_value_sig10D3.id) {
              let {
                  range: var_core_value_sig27E5
                } = var_core_value_sig6418.params,
                var_core_value_sig8061 = var_core_value_sig1896.filter(var_core_value_sig3EEE => var_core_value_sig933F.contains(var_core_value_sig27E5, var_core_value_sig3EEE.range));
              var_core_value_sig8061.length && (var_core_value_sig8061.forEach(var_core_value_sigBC46 => var_core_value_sigBC46.range = this._emptyRange()), var_core_value_sig6201());
            } else {
              if (var_core_value_sig6418.id === var_core_value_sig6281.id) {
                let {
                  filterRange: var_core_value_sig3D7D
                } = var_core_value_sig6418.params;
                var_core_value_sig0285(var_core_value_sig3D7D) && var_core_value_sig4BBA();
              } else {
                if (var_core_value_sig6418.id === var_core_value_sig3EC0.id) {
                  let {
                    values: var_core_value_sig2AD0
                  } = var_core_value_sig6418.params;
                  Object.keys(var_core_value_sig2AD0).some(var_core_value_sig7524 => var_core_value_sig2AD0[var_core_value_sig7524].ranges["some"](var_core_value_sig0285)) && var_core_value_sig4BBA();
                } else {
                  if (var_core_value_sig6418.id === var_core_value_sig385E.id) {
                    let {
                      ranges: var_core_value_sig2AD8
                    } = var_core_value_sig6418.params;
                    var_core_value_sig2AD8.some(var_core_value_sig0285) && var_core_value_sig4BBA();
                  }
                }
              }
            }
          }
        }
      }
    };
    return this._commandService["onCommandExecuted"](var_core_value_sig777D => {
      var var_core_value_sig3F4C;
      if (!Nt.has(var_core_value_sig777D.id)) return;
      let {
          unitId: var_core_value_sigD65A,
          subUnitId: var_core_value_sig5A13
        } = var_core_value_sig777D.params,
        var_core_value_sigF593 = (var_core_value_sig3F4C = var_core_value_sig5151.get(var_core_value_sigD65A)) == null ? undefined : var_core_value_sig3F4C.get(var_core_value_sig5A13);
      var_core_value_sigF593 && var_core_value_sigB542(var_core_value_sig777D, var_core_value_sigF593);
    });
  }
  _emptyRange() {
    return {
      ...Ft
    };
  }
  dispose() {
    this._entries["forEach"](var_core_value_sig3607 => var_core_value_sig3607.watcher["dispose"]()), this._entries["clear"](), super.dispose();
  }
};
Lt = K([G(0, var_core_value_sig4B27), G(1, var_core_value_sigF549(var_core_value_sig9B01))], Lt);
var Rt = class {
  constructor(var_core_value_sigBB6C, var_core_value_sigE2BF) {
    this._release = var_core_value_sigE2BF, W(this, "_dataSource$", undefined), W(this, "_dataChanged$", new var_core_value_sig6005()), W(this, "_entry", undefined), W(this, "_isDisposed", false), W(this, "dataSource$", undefined), W(this, "dataChanged$", undefined), this._entry = var_core_value_sigBB6C, this._dataSource$ = new var_core_value_sig07E7(var_core_value_sigBB6C.dataSource), this.dataSource$ = this._dataSource$["asObservable"](), this.dataChanged$ = this._dataChanged$["asObservable"]();
  }
  get dataSource() {
    return this._dataSource$["getValue"]();
  }
  get entry() {
    return this._entry;
  }
  attach(var_core_value_sigB8C7) {
    this._entry = var_core_value_sigB8C7, this._dataSource$["next"](var_core_value_sigB8C7.dataSource);
  }
  detach(var_core_value_sigA56E) {
    this._entry === var_core_value_sigA56E && (this._entry = undefined);
  }
  publishDataChanged() {
    this._dataChanged$["next"]();
  }
  dispose() {
    this._isDisposed || this._release(this);
  }
  complete() {
    this._isDisposed || (this._isDisposed = true, this._entry = undefined, this._dataSource$["complete"](), this._dataChanged$["complete"]());
  }
};
let zt = class extends var_core_value_sig854B {
  constructor(var_core_value_sig1998, var_core_value_sigFF19) {
    super(), this._univerInstanceService = var_core_value_sig1998, this._rangeWatcherManager = var_core_value_sigFF19, W(this, "_entries", new Map()), W(this, "_handles", new Set()), W(this, "_isDisposed", false);
  }
  acquire(var_core_value_sig43B8) {
    if (this._isDisposed) throw Error("Cannot acquire a Sheet chart datasource after manager disposal.");
    let var_core_value_sigD98F = this._normalizeSourceSpec(var_core_value_sig43B8),
      var_core_value_sig66C0 = this._getOrCreateEntry(var_core_value_sigD98F),
      var_core_value_sig9D15 = new Rt(var_core_value_sig66C0, var_core_value_sigB512 => this._releaseHandle(var_core_value_sigB512));
    return var_core_value_sig66C0.handles["add"](var_core_value_sig9D15), this._handles["add"](var_core_value_sig9D15), var_core_value_sig9D15;
  }
  refreshAll() {
    this._entries["forEach"](var_core_value_sigF2E6 => this._refreshEntry(var_core_value_sigF2E6));
  }
  _getOrCreateEntry(var_core_value_sigB785) {
    let var_core_value_sig130F = Mt(var_core_value_sigB785),
      var_core_value_sigC0E3 = this._entries["get"](var_core_value_sig130F);
    if (var_core_value_sigC0E3) return var_core_value_sigC0E3;
    let var_core_value_sig52F7 = yt(this._univerInstanceService, var_core_value_sigB785),
      var_core_value_sig866F = {
        key: var_core_value_sig130F,
        sourceSpec: var_core_value_sigB785,
        dataSource: var_core_value_sig52F7,
        handles: new Set(),
        rangeWatcherLease: {
          dispose: () => {}
        }
      };
    try {
      return var_core_value_sig866F.rangeWatcherLease = this._rangeWatcherManager["watch"](var_core_value_sigB785, {
        onDataChanged: () => this._refreshEntry(var_core_value_sig866F),
        onRangeChanged: var_core_value_sig9A8D => this._replaceEntryRange(var_core_value_sig866F, var_core_value_sig9A8D)
      }), this._entries["set"](var_core_value_sig130F, var_core_value_sig866F), var_core_value_sig866F;
    } catch (var_core_value_sig34C8) {
      throw var_core_value_sig52F7.dispose(), var_core_value_sig34C8;
    }
  }
  _refreshEntry(var_core_value_sigDE3D) {
    this._entries["get"](var_core_value_sigDE3D.key) === var_core_value_sigDE3D && (var_core_value_sigDE3D.dataSource["refreshDataSet"](), var_core_value_sigDE3D.handles["forEach"](var_core_value_sigB744 => var_core_value_sigB744.publishDataChanged()));
  }
  _replaceEntryRange(var_core_value_sigF175, var_core_value_sig6A18) {
    if (this._entries["get"](var_core_value_sigF175.key) !== var_core_value_sigF175) return;
    let var_core_value_sig4E3D = this._getOrCreateEntry(this._normalizeSourceSpec(var_core_value_sig6A18));
    var_core_value_sig4E3D !== var_core_value_sigF175 && Array.from(var_core_value_sigF175.handles).forEach(var_core_value_sigEAE2 => this._moveHandle(var_core_value_sigEAE2, var_core_value_sigF175, var_core_value_sig4E3D));
  }
  _moveHandle(var_core_value_sig49B0, var_core_value_sig2547, var_core_value_sigBCA9) {
    var_core_value_sig49B0.entry === var_core_value_sig2547 && (var_core_value_sigBCA9.handles["add"](var_core_value_sig49B0), var_core_value_sig49B0.attach(var_core_value_sigBCA9), var_core_value_sig2547.handles["delete"](var_core_value_sig49B0), this._disposeEntryWithoutHandles(var_core_value_sig2547));
  }
  _releaseHandle(var_core_value_sig4CDF) {
    let var_core_value_sig3F79 = var_core_value_sig4CDF.entry;
    var_core_value_sig3F79 && (var_core_value_sig3F79.handles["delete"](var_core_value_sig4CDF), var_core_value_sig4CDF.detach(var_core_value_sig3F79), this._disposeEntryWithoutHandles(var_core_value_sig3F79)), this._handles["delete"](var_core_value_sig4CDF), var_core_value_sig4CDF.complete();
  }
  _disposeEntryWithoutHandles(var_core_value_sig880E) {
    var_core_value_sig880E.handles["size"] > 0 || this._entries["get"](var_core_value_sig880E.key) !== var_core_value_sig880E || (this._entries["delete"](var_core_value_sig880E.key), var_core_value_sig880E.rangeWatcherLease["dispose"](), var_core_value_sig880E.dataSource["dispose"]());
  }
  _normalizeSourceSpec(var_core_value_sigC9ED) {
    let var_core_value_sigB57B = var_core_value_sig29DE.deepClone(var_core_value_sigC9ED);
    return Array.isArray(var_core_value_sigB57B) ? var_core_value_sigB57B : {
      ...var_core_value_sigB57B,
      isRowDirection: var_core_value_sigB57B.isRowDirection ?? true
    };
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._handles["forEach"](var_core_value_sigE68A => var_core_value_sigE68A.complete()), this._handles["clear"](), this._entries["forEach"](var_core_value_sig3E68 => {
      var_core_value_sig3E68.rangeWatcherLease["dispose"](), var_core_value_sig3E68.dataSource["dispose"]();
    }), this._entries["clear"](), super.dispose());
  }
};
zt = K([G(0, var_core_value_sigF549(var_core_value_sigD9BB)), G(1, var_core_value_sigF549(Lt))], zt);
let J = class extends var_core_value_sig854B {
  constructor(var_core_value_sig780B, var_core_value_sig7D1B, var_core_value_sig7BE0, var_core_value_sig7D40) {
    super(), this._resourcesManagerService = var_core_value_sig780B, this._univerInstanceService = var_core_value_sig7D1B, this._chartModelService = var_core_value_sig7BE0, this._dataSourceManager = var_core_value_sig7D40, W(this, "_chartModelIdMap", new Map()), W(this, "_dataSourceBindings", new Map()), this.disposeWithMe(this._dataSourceManager), this._initSnapshot();
  }
  getSubUnitId(var_core_value_sig6C7E, var_core_value_sig68BE) {
    let var_core_value_sig04C6 = this._chartModelIdMap["get"](var_core_value_sig6C7E);
    if (!var_core_value_sig04C6) return null;
    for (let [var_core_value_sigF4C5, var_core_value_sig5410] of var_core_value_sig04C6.entries()) if (var_core_value_sig5410.has(var_core_value_sig68BE)) return var_core_value_sigF4C5;
    return null;
  }
  getUnitChartModels(var_core_value_sigCA05, var_core_value_sig2F2B) {
    let var_core_value_sig70AF = this._chartModelIdMap["get"](var_core_value_sigCA05);
    if (!var_core_value_sig70AF) return [];
    let var_core_value_sigD04E = var_core_value_sig70AF.get(var_core_value_sig2F2B);
    if (!var_core_value_sigD04E) return [];
    let {
      _chartModelService: var_core_value_sigB99B
    } = this;
    return Array.from(var_core_value_sigD04E).map(var_core_value_sig492F => var_core_value_sigB99B.getChartModel(var_core_value_sig492F));
  }
  inferInitialChartMapping(var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69) {
    return this.inferInitialChartSource(var_core_value_sig5A75, var_core_value_sig7BAF, var_core_value_sig8F69).mapping;
  }
  inferInitialChartSource(var_core_value_sig6884, var_core_value_sig066E, var_core_value_sig9B0D) {
    let var_core_value_sig3D2C = this._getInitialDataOrientation(var_core_value_sig6884) === var_core_value_sig9975.Row;
    if (Array.isArray(var_core_value_sig6884)) {
      let var_core_value_sig8EA0 = yt(this._univerInstanceService, var_core_value_sig6884);
      try {
        let var_core_value_sigC259 = var_core_value_sig8EA0.getDataSet(),
          var_core_value_sig9C9F = V(var_core_value_sigC259, var_core_value_sig066E, undefined, var_core_value_sig9B0D);
        return {
          dataSet: var_core_value_sigC259,
          mapping: {
            headerRow: var_core_value_sig64D8,
            isRowDirection: false,
            categoryIndexes: var_core_value_sig9C9F.categoryIndexes ?? [],
            seriesIndexes: var_core_value_sig9C9F.seriesIndexes ?? []
          }
        };
      } finally {
        var_core_value_sig8EA0.dispose();
      }
    }
    let {
        unitId: var_core_value_sigC56D,
        subUnitId: var_core_value_sig3A17,
        range: var_core_value_sig938F
      } = var_core_value_sig6884.rangeInfo,
      var_core_value_sigD948 = var_core_value_sigEF7C(this._univerInstanceService, {
        unitId: var_core_value_sigC56D,
        subUnitId: var_core_value_sig3A17
      });
    if (!var_core_value_sigD948) {
      let var_core_value_sigA6F6 = {
          dimensions: [],
          source: []
        },
        var_core_value_sigCDDA = V(var_core_value_sigA6F6, var_core_value_sig066E, undefined, var_core_value_sig9B0D);
      return {
        dataSet: var_core_value_sigA6F6,
        mapping: {
          headerRow: var_core_value_sig6884.headerRow ?? var_core_value_sig64D8,
          isRowDirection: var_core_value_sig3D2C,
          categoryIndexes: var_core_value_sigCDDA.categoryIndexes ?? [],
          seriesIndexes: var_core_value_sigCDDA.seriesIndexes ?? []
        }
      };
    }
    let {
        workbook: var_core_value_sigBE5E,
        worksheet: var_core_value_sig0281
      } = var_core_value_sigD948,
      var_core_value_sigED71 = mt({
        numfmtOptions: {
          locale: var_core_value_sigCCE5(var_core_value_sigBE5E.getSnapshot().locale),
          dateSystem: var_core_value_sigBE5E.getDateSystem()
        },
        range: var_core_value_sigBFC7.transformRange(var_core_value_sig938F, var_core_value_sig0281),
        styles: var_core_value_sigBE5E.getStyles(),
        worksheet: var_core_value_sig0281
      }),
      var_core_value_sig281C = var_core_value_sigE243 => Ot(var_core_value_sigED71, {
        chartType: var_core_value_sig066E,
        isRowDirection: var_core_value_sigE243,
        ...(var_core_value_sig6884.headerRow === undefined ? {} : {
          headerRow: var_core_value_sig6884.headerRow
        }),
        ...((var_core_value_sig9B0D == null ? undefined : var_core_value_sig9B0D.categoryIndexes) === undefined ? {} : {
          categoryIndexes: var_core_value_sig9B0D.categoryIndexes
        }),
        ...((var_core_value_sig9B0D == null ? undefined : var_core_value_sig9B0D.seriesIndexes) === undefined ? {} : {
          seriesIndexes: var_core_value_sig9B0D.seriesIndexes
        })
      }),
      var_core_value_sig3C92 = var_core_value_sig281C(var_core_value_sig3D2C);
    if (var_core_value_sig6884.isRowDirection !== undefined || var_core_value_sig3C92.mapping["seriesIndexes"].length > 0) return var_core_value_sig3C92;
    let var_core_value_sigB16B = var_core_value_sig281C(!var_core_value_sig3D2C);
    return var_core_value_sigB16B.mapping["seriesIndexes"].length > 0 ? var_core_value_sigB16B : var_core_value_sig3C92;
  }
  _inferPrimaryDataOrientation(var_core_value_sig585D) {
    if (Array.isArray(var_core_value_sig585D)) return var_core_value_sig9975.Column;
    let {
        range: var_core_value_sigE722
      } = var_core_value_sig585D.rangeInfo,
      {
        startRow: var_core_value_sig062A,
        endRow: var_core_value_sig050A,
        startColumn: var_core_value_sig8B32,
        endColumn: var_core_value_sig870F
      } = var_core_value_sigE722;
    return var_core_value_sig062A === var_core_value_sig050A && this._hasNonNumberCellInSingleRow(var_core_value_sig585D) || var_core_value_sig050A - var_core_value_sig062A >= var_core_value_sig870F - var_core_value_sig8B32 ? var_core_value_sig9975.Column : var_core_value_sig9975.Row;
  }
  _getInitialDataOrientation(var_core_value_sigB683) {
    return !Array.isArray(var_core_value_sigB683) && var_core_value_sigB683.isRowDirection !== undefined ? var_core_value_sigB683.isRowDirection ? var_core_value_sig9975.Row : var_core_value_sig9975.Column : this._inferPrimaryDataOrientation(var_core_value_sigB683);
  }
  _hasNonNumberCellInSingleRow(var_core_value_sig26EC) {
    let {
        unitId: var_core_value_sigEEDB,
        subUnitId: var_core_value_sig36E7,
        range: var_core_value_sig6A78
      } = var_core_value_sig26EC.rangeInfo,
      var_core_value_sigF7EF = var_core_value_sigEF7C(this._univerInstanceService, {
        unitId: var_core_value_sigEEDB,
        subUnitId: var_core_value_sig36E7
      });
    if (!var_core_value_sigF7EF) return false;
    let {
        workbook: var_core_value_sig27F9,
        worksheet: var_core_value_sig393E
      } = var_core_value_sigF7EF,
      var_core_value_sigB609 = var_core_value_sig27F9.getStyles(),
      var_core_value_sig390D = {};
    for (let var_core_value_sig74A8 = var_core_value_sig6A78.startColumn; var_core_value_sig74A8 <= var_core_value_sig6A78.endColumn; var_core_value_sig74A8++) if (var_core_value_sig393E.getColVisible(var_core_value_sig74A8) && H(var_core_value_sig393E, var_core_value_sig6A78.startRow, var_core_value_sig74A8, var_core_value_sigB609, var_core_value_sig390D, {
      locale: var_core_value_sigCCE5(var_core_value_sig27F9.getSnapshot().locale),
      dateSystem: var_core_value_sig27F9.getDateSystem()
    }).sourceType !== var_core_value_sig0260.NUMBER) return true;
    return false;
  }
  ensureChartModelCollection(var_core_value_sigC928, var_core_value_sig39B7) {
    let var_core_value_sig18E0 = this._chartModelIdMap["get"](var_core_value_sigC928);
    var_core_value_sig18E0 || (var_core_value_sig18E0 = new Map(), this._chartModelIdMap["set"](var_core_value_sigC928, var_core_value_sig18E0));
    let var_core_value_sigE161 = var_core_value_sig18E0.get(var_core_value_sig39B7);
    return var_core_value_sigE161 || (var_core_value_sigE161 = new Set(), var_core_value_sig18E0.set(var_core_value_sig39B7, var_core_value_sigE161)), var_core_value_sigE161;
  }
  getChartDataSource(var_core_value_sigBDEE) {
    var var_core_value_sig1F40;
    return (var_core_value_sig1F40 = this._chartModelService["getChartModel"](var_core_value_sigBDEE)) == null ? undefined : var_core_value_sig1F40.dataSource;
  }
  getChartSourceSpec(var_core_value_sig3FC7) {
    let var_core_value_sig1E1B = this.getChartDataSource(var_core_value_sig3FC7);
    return var_core_value_sig1E1B ? var_core_value_sig29DE.deepClone(var_core_value_sig1E1B.getRangeInfo()) : undefined;
  }
  replaceChartDataSource(var_core_value_sig3B10, var_core_value_sig89E6) {
    let var_core_value_sig4743 = this.getChartModel(var_core_value_sig3B10),
      var_core_value_sigEB6A = this._dataSourceBindings["get"](var_core_value_sig3B10);
    if (!var_core_value_sig4743 || !var_core_value_sigEB6A) return false;
    let {
        mapping: var_core_value_sig3D46
      } = this.inferInitialChartSource(var_core_value_sig89E6, var_core_value_sig4743.chartType),
      var_core_value_sigCC93 = this._applyInitialMappingToRangeInfo(var_core_value_sig89E6, var_core_value_sig3D46),
      var_core_value_sig5964 = this._dataSourceManager["acquire"](var_core_value_sigCC93),
      var_core_value_sig808B = this._chartModelService["rebuildChartModelContextForDataSource"](var_core_value_sig3B10, var_core_value_sig5964.dataSource, var_core_value_sig3D46);
    if (!var_core_value_sig808B) return var_core_value_sig5964.dispose(), false;
    if (var_core_value_sig5964.dataSource === var_core_value_sigEB6A.handle["dataSource"]) return var_core_value_sig5964.dispose(), var_core_value_sig4743.setChartContext(var_core_value_sig808B), true;
    let var_core_value_sig2A26 = this._createDataSourceRuntimeBinding(var_core_value_sig3B10, var_core_value_sig5964);
    return this._dataSourceBindings["set"](var_core_value_sig3B10, var_core_value_sig2A26), var_core_value_sig4743.replaceDataSource(var_core_value_sig5964.dataSource), this._disposeDataSourceRuntimeBinding(var_core_value_sigEB6A), var_core_value_sig4743.setChartContext(var_core_value_sig808B), true;
  }
  refreshChartSource() {
    this._dataSourceManager["refreshAll"]();
  }
  createChartModel(var_core_value_sig1179, var_core_value_sigEA92, var_core_value_sig8FD9, var_core_value_sig1AE5 = false) {
    let {
        context: var_core_value_sig7100,
        dataAggregation: var_core_value_sigA19A,
        id: var_core_value_sigD3F5,
        style: var_core_value_sig3082,
        rangeInfo: var_core_value_sigF5D1
      } = var_core_value_sig8FD9,
      var_core_value_sig8775 = var_core_value_sigD3F5 ?? var_core_value_sigC7EA(),
      {
        chartType: var_core_value_sig481B
      } = var_core_value_sig8FD9,
      var_core_value_sig13D7 = var_core_value_sigF5D1,
      var_core_value_sig90C0 = var_core_value_sig7100,
      var_core_value_sigF1B2 = (var_core_value_sig7100 == null ? undefined : var_core_value_sig7100.categoryIndexes) !== undefined && var_core_value_sig7100.seriesIndexes !== undefined,
      var_core_value_sigC2BB = Array.isArray(var_core_value_sigF5D1) || var_core_value_sigF5D1.headerRow !== undefined && var_core_value_sigF5D1.isRowDirection !== undefined;
    if (!var_core_value_sigF1B2 || !var_core_value_sigC2BB) {
      let var_core_value_sig21B2 = this.inferInitialChartMapping(var_core_value_sigF5D1, var_core_value_sig481B, var_core_value_sig7100);
      var_core_value_sig13D7 = this._applyInitialMappingToRangeInfo(var_core_value_sigF5D1, var_core_value_sig21B2), var_core_value_sig90C0 = {
        ...var_core_value_sig7100,
        categoryIndexes: var_core_value_sig21B2.categoryIndexes,
        seriesIndexes: var_core_value_sig21B2.seriesIndexes
      };
    }
    let var_core_value_sigD9DB = this._dataSourceManager["acquire"](var_core_value_sig13D7),
      var_core_value_sigA363;
    try {
      var_core_value_sigA363 = this._chartModelService["createChartModel"](var_core_value_sig8775, {
        dataSource: var_core_value_sigD9DB.dataSource,
        chartType: var_core_value_sig481B,
        dataAggregation: var_core_value_sigA19A,
        style: var_core_value_sig3082,
        context: var_core_value_sig90C0
      }, var_core_value_sig1AE5);
    } catch (var_core_value_sigDE08) {
      throw var_core_value_sigD9DB.dispose(), var_core_value_sigDE08;
    }
    let var_core_value_sigFBA5 = this.ensureChartModelCollection(var_core_value_sig1179, var_core_value_sigEA92);
    return var_core_value_sigFBA5.add(var_core_value_sigA363.id), this._dataSourceBindings["set"](var_core_value_sigA363.id, this._createDataSourceRuntimeBinding(var_core_value_sigA363.id, var_core_value_sigD9DB)), var_core_value_sigA363.onDispose(() => {
      var_core_value_sigFBA5.delete(var_core_value_sigA363.id);
      let var_core_value_sigACCB = this._dataSourceBindings["get"](var_core_value_sigA363.id);
      this._dataSourceBindings["delete"](var_core_value_sigA363.id), var_core_value_sigACCB && this._disposeDataSourceRuntimeBinding(var_core_value_sigACCB);
    }), var_core_value_sigA363;
  }
  _applyInitialMappingToRangeInfo(var_core_value_sigAC47, var_core_value_sigA06F) {
    if (Array.isArray(var_core_value_sigAC47)) return var_core_value_sigAC47;
    let {
      headerRow: var_core_value_sig770E,
      isRowDirection: var_core_value_sig4654,
      ...var_core_value_sigB26B
    } = var_core_value_sigAC47;
    return {
      ...var_core_value_sigB26B,
      isRowDirection: var_core_value_sigA06F.isRowDirection,
      headerRow: var_core_value_sigA06F.headerRow
    };
  }
  removeChartModel(var_core_value_sig019B) {
    this._chartModelService["removeChartModel"](var_core_value_sig019B);
  }
  getChartModel(var_core_value_sigC6BC) {
    return this._chartModelService["getChartModel"](var_core_value_sigC6BC);
  }
  _serializeChartForUnit(var_core_value_sig8EC2) {
    let var_core_value_sigA8C3 = this._chartModelIdMap["get"](var_core_value_sig8EC2);
    if (!var_core_value_sigA8C3) return "{}";
    let var_core_value_sig5276 = {};
    for (let var_core_value_sig7F33 of var_core_value_sigA8C3.keys()) {
      let var_core_value_sigFDEA = var_core_value_sigA8C3.get(var_core_value_sig7F33);
      if (var_core_value_sigFDEA) for (let var_core_value_sigFBA4 of Array.from(var_core_value_sigFDEA)) {
        let var_core_value_sigF704 = this._chartModelService["getChartModel"](var_core_value_sigFBA4),
          var_core_value_sig2BCF = this.getChartDataSource(var_core_value_sigFBA4);
        var_core_value_sigF704 && var_core_value_sig2BCF && (var_core_value_sig5276[var_core_value_sig7F33] || (var_core_value_sig5276[var_core_value_sig7F33] = []), var_core_value_sig5276[var_core_value_sig7F33].push({
          rangeInfo: var_core_value_sig2BCF.getRangeInfo(),
          ...var_core_value_sigF704.serialize()
        }));
      }
    }
    return JSON.stringify(var_core_value_sig5276);
  }
  _createDataSourceRuntimeBinding(var_core_value_sig031B, var_core_value_sig9DC0) {
    return {
      handle: var_core_value_sig9DC0,
      sourceSubscription: var_core_value_sig9DC0.dataSource$["pipe"](var_core_value_sigB591(1)).subscribe(var_core_value_sig0C53 => {
        var var_core_value_sigEA04;
        if (((var_core_value_sigEA04 = this._dataSourceBindings["get"](var_core_value_sig031B)) == null ? undefined : var_core_value_sigEA04.handle) !== var_core_value_sig9DC0) return;
        let var_core_value_sig7A62 = this._chartModelService["getChartModel"](var_core_value_sig031B);
        if (!var_core_value_sig7A62) return;
        let var_core_value_sig8109 = this.inferInitialChartMapping(var_core_value_sig0C53.getRangeInfo(), var_core_value_sig7A62.chartType),
          var_core_value_sig7565 = this._chartModelService["rebuildChartModelContextForDataSource"](var_core_value_sig031B, var_core_value_sig0C53, var_core_value_sig8109);
        var_core_value_sig7A62.replaceDataSource(var_core_value_sig0C53), var_core_value_sig7565 && var_core_value_sig7A62.setChartContext(var_core_value_sig7565);
      }),
      dataSubscription: var_core_value_sig9DC0.dataChanged$["subscribe"](() => {
        var var_core_value_sigD4FB;
        ((var_core_value_sigD4FB = this._dataSourceBindings["get"](var_core_value_sig031B)) == null ? undefined : var_core_value_sigD4FB.handle) === var_core_value_sig9DC0 && this._replaceReconciledContext(var_core_value_sig031B);
      })
    };
  }
  _disposeDataSourceRuntimeBinding(var_core_value_sig95F0) {
    var_core_value_sig95F0.sourceSubscription["unsubscribe"](), var_core_value_sig95F0.dataSubscription["unsubscribe"](), var_core_value_sig95F0.handle["dispose"]();
  }
  _replaceReconciledContext(var_core_value_sig9CCB) {
    let var_core_value_sigE718 = this._chartModelService["getChartModel"](var_core_value_sig9CCB),
      var_core_value_sigAEC8 = this._chartModelService["reconcileChartModelContext"](var_core_value_sig9CCB);
    var_core_value_sigE718 && var_core_value_sigAEC8 && var_core_value_sigE718.setChartContext(var_core_value_sigAEC8);
  }
  _deserializeChartForUnit(var_core_value_sigB977, var_core_value_sig2949) {
    this._univerInstanceService["getUnit"](var_core_value_sigB977, var_core_value_sig4AFB.UNIVER_SHEET) && Object.keys(var_core_value_sig2949).forEach(var_core_value_sig3E71 => {
      let var_core_value_sig01B3 = var_core_value_sig2949[var_core_value_sig3E71];
      !var_core_value_sig01B3 || var_core_value_sig01B3.length <= 0 || var_core_value_sig01B3.forEach(var_core_value_sig86D0 => {
        let {
          rangeInfo: var_core_value_sig4CD2
        } = var_core_value_sig86D0;
        this.createChartModel(var_core_value_sigB977, var_core_value_sig3E71, {
          ...var_core_value_sig86D0,
          rangeInfo: var_core_value_sig4CD2
        });
      });
    });
  }
  _initSnapshot() {
    this._resourcesManagerService["registerPluginResource"]({
      pluginName: "SHEET_CHART_PLUGIN",
      businesses: [var_core_value_sig4AFB.UNIVER_SHEET],
      toJson: var_core_value_sig7442 => this._serializeChartForUnit(var_core_value_sig7442),
      parseJson: var_core_value_sigDF87 => JSON.parse(var_core_value_sigDF87),
      onLoad: (var_core_value_sig9EE0, var_core_value_sigF0511) => {
        this._deserializeChartForUnit(var_core_value_sig9EE0, var_core_value_sigF0511);
      },
      onUnLoad: var_core_value_sig0B45 => {
        var var_core_value_sig36F8;
        (var_core_value_sig36F8 = this._chartModelIdMap["get"](var_core_value_sig0B45)) == null || var_core_value_sig36F8.forEach(var_core_value_sig48CA => {
          Array.from(var_core_value_sig48CA.values()).forEach(var_core_value_sig4383 => {
            this._chartModelService["removeChartModel"](var_core_value_sig4383);
          });
        });
      }
    });
  }
  dispose() {
    Array.from(this._dataSourceBindings["keys"]()).forEach(var_core_value_sig03E1 => this._chartModelService["removeChartModel"](var_core_value_sig03E1)), this._dataSourceBindings["forEach"](var_core_value_sigBB57 => this._disposeDataSourceRuntimeBinding(var_core_value_sigBB57)), this._dataSourceBindings["clear"](), this._chartModelIdMap["clear"](), super.dispose();
  }
};
J = K([G(0, var_core_value_sig269A), G(1, var_core_value_sigD9BB), G(2, var_core_value_sigF549(q)), G(3, var_core_value_sigF549(zt))], J);
function Bt(var_core_value_sigBBBC, var_core_value_sig5440) {
  let {
    categoryIndexes: var_core_value_sigE28B,
    multiLevelCategoryAxis: var_core_value_sig0FD9,
    seriesIndexes: var_core_value_sig5649,
    useDateAxis: var_core_value_sigAF82,
    histogram: var_core_value_sig21A2,
    ...var_core_value_sig5C1D
  } = var_core_value_sigBBBC;
  return {
    ...var_core_value_sig5C1D,
    ...var_core_value_sig29DE.deepClone(var_core_value_sig5440)
  };
}
const Vt = {
    id: "sheet.mutation.chart-update-config",
    type: var_core_value_sig1DF5.MUTATION,
    handler: (var_core_value_sig4CBA, var_core_value_sig8E65) => {
      if (Ut(var_core_value_sig8E65)) return false;
      let {
          chartModelId: var_core_value_sig772C
        } = var_core_value_sig8E65,
        var_core_value_sigF309 = var_core_value_sig4CBA.get(J).getChartModel(var_core_value_sig772C);
      return var_core_value_sigF309 && (var_core_value_sig8E65.style !== undefined && var_core_value_sigF309.assignStyle(var_core_value_sig8E65.style), var_core_value_sig8E65.context !== undefined && var_core_value_sigF309.assignChartContext(var_core_value_sig8E65.context), var_core_value_sig8E65.dataAggregation !== undefined && var_core_value_sigF309.assignDataAggregation(var_core_value_sig8E65.dataAggregation), var_core_value_sig8E65.chartType !== undefined && var_core_value_sigF309.setChartType(var_core_value_sig8E65.chartType)), true;
    }
  },
  Ht = {
    id: "sheet.mutation.chart-replace-config",
    type: var_core_value_sig1DF5.MUTATION,
    handler: (var_core_value_sig44F9, var_core_value_sigE532) => {
      if (Ut(var_core_value_sigE532)) return false;
      let var_core_value_sigF381 = var_core_value_sig44F9.get(J).getChartModel(var_core_value_sigE532.chartModelId);
      if (var_core_value_sigF381) {
        if (var_core_value_sigE532.style !== undefined && var_core_value_sigF381.setStyle(var_core_value_sigE532.style), var_core_value_sigE532.context !== undefined) try {
          let var_core_value_sig7C4A = var_core_value_sigAF1D(var_core_value_sigE532.context);
          var_core_value_sigF381.setChartContext(Bt(var_core_value_sigF381.context, var_core_value_sig7C4A));
        } catch {
          return false;
        }
        var_core_value_sigE532.dataAggregation !== undefined && var_core_value_sigF381.setDataAggregation(var_core_value_sigE532.dataAggregation), var_core_value_sigE532.chartType !== undefined && var_core_value_sigF381.setChartType(var_core_value_sigE532.chartType);
      }
      return true;
    }
  };
function Ut(var_core_value_sigCB92) {
  return !var_core_value_sigCB92 || !Wt(var_core_value_sigCB92.style) || !Wt(var_core_value_sigCB92.context) || !Wt(var_core_value_sigCB92.dataAggregation);
}
function Wt(var_core_value_sigC844) {
  return var_core_value_sigC844 === undefined || typeof var_core_value_sigC844 == "object" && !!var_core_value_sigC844 && !Array.isArray(var_core_value_sigC844);
}
const Y = Symbol("ReplaceSheetChartConfig"),
  Gt = {
    id: "sheet.command.chart-update-config",
    type: var_core_value_sig1DF5.COMMAND,
    handler: (var_core_value_sig2ED4, var_core_value_sig0477) => {
      if (!var_core_value_sig0477) return false;
      let var_core_value_sig6FDF = var_core_value_sig2ED4.get(J),
        {
          unitId: var_core_value_sig27C4,
          chartModelId: var_core_value_sig3E1A,
          chartType: var_core_value_sig7FB0,
          style: var_core_value_sig5215,
          dataAggregation: var_core_value_sig5204,
          context: var_core_value_sig5E11
        } = var_core_value_sig0477,
        var_core_value_sig4D58 = var_core_value_sig0477[Y] === true,
        var_core_value_sig2DBD = var_core_value_sig6FDF.getChartModel(var_core_value_sig3E1A);
      if (!var_core_value_sig2DBD) return false;
      let var_core_value_sig424E = var_core_value_sig2ED4.get(var_core_value_sig4B27),
        var_core_value_sigF481 = var_core_value_sig2ED4.get(var_core_value_sigBF53),
        var_core_value_sigD7F2 = {
          unitId: var_core_value_sig27C4,
          chartModelId: var_core_value_sig3E1A
        };
      if (var_core_value_sig7FB0 !== undefined && (var_core_value_sigD7F2.chartType = var_core_value_sig7FB0), var_core_value_sig5215 !== undefined && (var_core_value_sigD7F2.style = var_core_value_sig4D58 ? var_core_value_sig29DE.deepClone(var_core_value_sig5215) : Kt(var_core_value_sig2DBD.style, var_core_value_sig5215)), var_core_value_sig5204 !== undefined && (var_core_value_sigD7F2.dataAggregation = var_core_value_sig4D58 ? var_core_value_sig29DE.deepClone(var_core_value_sig5204) : var_core_value_sig2B74(var_core_value_sig2DBD.dataAggregation, var_core_value_sig5204)), var_core_value_sig5E11 !== undefined) try {
        var_core_value_sigD7F2.context = var_core_value_sigAF1D(var_core_value_sig4D58 ? var_core_value_sig5E11 : var_core_value_sig2B74(var_core_value_sigAF1D(var_core_value_sig2DBD.context), var_core_value_sig5E11));
      } catch {
        return false;
      }
      let var_core_value_sig7CF3 = {
        unitId: var_core_value_sig27C4,
        chartModelId: var_core_value_sig3E1A
      };
      var_core_value_sig7FB0 !== undefined && (var_core_value_sig7CF3.chartType = var_core_value_sig2DBD.chartType), var_core_value_sigD7F2.style !== undefined && (var_core_value_sig7CF3.style = var_core_value_sig29DE.deepClone(var_core_value_sig2DBD.style)), var_core_value_sigD7F2.dataAggregation !== undefined && (var_core_value_sig7CF3.dataAggregation = var_core_value_sig29DE.deepClone(var_core_value_sig2DBD.dataAggregation)), var_core_value_sigD7F2.context !== undefined && (var_core_value_sig7CF3.context = var_core_value_sigAF1D(var_core_value_sig2DBD.context));
      let var_core_value_sig9DC6 = [{
          id: Ht.id,
          params: var_core_value_sigD7F2
        }],
        var_core_value_sig6643 = [{
          id: Ht.id,
          params: var_core_value_sig7CF3
        }];
      return var_core_value_sig9730(var_core_value_sig9DC6, var_core_value_sig424E).result ? (var_core_value_sigF481.pushUndoRedo({
        unitID: var_core_value_sig27C4,
        redoMutations: var_core_value_sig9DC6,
        undoMutations: var_core_value_sig6643
      }), true) : false;
    }
  };
function Kt(var_core_value_sig4124, var_core_value_sigBF1C) {
  let {
      candlestick: var_core_value_sigEEEF,
      sunburst: var_core_value_sig9A01,
      gauge: var_core_value_sig674F,
      chord: var_core_value_sigC8F6,
      ...var_core_value_sig8A26
    } = var_core_value_sigBF1C,
    var_core_value_sigD073 = var_core_value_sig2B74(var_core_value_sig4124, var_core_value_sig8A26),
    var_core_value_sigF631 = {};
  return Object.prototype["hasOwnProperty"].call(var_core_value_sigBF1C, "candlestick") && (var_core_value_sigF631.candlestick = var_core_value_sigEEEF), Object.prototype["hasOwnProperty"].call(var_core_value_sigBF1C, "sunburst") && (var_core_value_sigF631.sunburst = var_core_value_sig9A01), Object.prototype["hasOwnProperty"].call(var_core_value_sigBF1C, "gauge") && (var_core_value_sigF631.gauge = var_core_value_sig674F), Object.prototype["hasOwnProperty"].call(var_core_value_sigBF1C, "chord") && (var_core_value_sigF631.chord = var_core_value_sigC8F6), Object.keys(var_core_value_sigF631).length ? var_core_value_sigD7C5(var_core_value_sigF631, {
    currentStyle: var_core_value_sigD073
  }).style ?? {} : var_core_value_sigD073;
}
const qt = {
    id: "sheet.mutation.chart-update-source",
    type: var_core_value_sig1DF5.MUTATION,
    handler: (var_core_value_sig2278, var_core_value_sig7053) => {
      let {
        chartModelId: var_core_value_sig52F1,
        rangeInfo: var_core_value_sig1E74
      } = var_core_value_sig7053;
      return var_core_value_sig2278.get(J).replaceChartDataSource(var_core_value_sig52F1, var_core_value_sig1E74);
    }
  },
  Jt = {
    id: "sheet.command.chart-update-source",
    type: var_core_value_sig1DF5.COMMAND,
    handler: (var_core_value_sig1E84, var_core_value_sig133B) => {
      if (!var_core_value_sig133B) return false;
      let var_core_value_sig69B8 = var_core_value_sig1E84.get(J),
        {
          unitId: var_core_value_sig983D,
          chartModelId: var_core_value_sig9A03,
          range: var_core_value_sig3363
        } = var_core_value_sig133B;
      if (!var_core_value_sig69B8.getChartModel(var_core_value_sig9A03)) return false;
      let var_core_value_sigF64A = var_core_value_sig69B8.getChartDataSource(var_core_value_sig9A03);
      if (!var_core_value_sigF64A) return false;
      let var_core_value_sig25EC = var_core_value_sig1E84.get(var_core_value_sig4B27),
        var_core_value_sigA790 = var_core_value_sig1E84.get(var_core_value_sigBF53),
        var_core_value_sig9A5E = [],
        var_core_value_sig01B9 = [],
        var_core_value_sigD6A9 = var_core_value_sigF64A.getRangeInfo(),
        var_core_value_sig0FCF = {
          unitId: var_core_value_sig983D,
          chartModelId: var_core_value_sig9A03,
          rangeInfo: var_core_value_sig3363
        },
        var_core_value_sigCF96 = {
          unitId: var_core_value_sig983D,
          chartModelId: var_core_value_sig9A03,
          rangeInfo: var_core_value_sigD6A9
        };
      return var_core_value_sig9A5E.push({
        id: qt.id,
        params: var_core_value_sig0FCF
      }), var_core_value_sig01B9.push({
        id: qt.id,
        params: var_core_value_sigCF96
      }), var_core_value_sig9730(var_core_value_sig9A5E, var_core_value_sig25EC).result ? (var_core_value_sigA790.pushUndoRedo({
        unitID: var_core_value_sig983D,
        redoMutations: var_core_value_sig9A5E,
        undoMutations: var_core_value_sig01B9
      }), true) : false;
    }
  };
let Yt = function (var_core_value_sigC4E9) {
    return var_core_value_sigC4E9.Auto = "auto", var_core_value_sigC4E9.Row = "row", var_core_value_sigC4E9.Column = "column", var_core_value_sigC4E9.Rows = "rows", var_core_value_sigC4E9.Columns = "columns", var_core_value_sigC4E9.RowsAsSeries = "rowsAsSeries", var_core_value_sigC4E9.ColumnsAsSeries = "columnsAsSeries", var_core_value_sigC4E9;
  }({}),
  Xt = function (var_core_value_sigF612) {
    return var_core_value_sigF612.Range = "range", var_core_value_sigF612.Ranges = "ranges", var_core_value_sigF612;
  }({}),
  Zt = function (var_core_value_sigAA6C) {
    return var_core_value_sigAA6C.Error = "error", var_core_value_sigAA6C;
  }({});
function Qt(var_core_value_sig8BFA, var_core_value_sig236B) {
  let var_core_value_sig1951 = Z(var_core_value_sig8BFA, var_core_value_sigD9BB);
  return (var_core_value_sig1951 == null ? undefined : var_core_value_sig1951.getUnit(var_core_value_sig236B, var_core_value_sig4AFB.UNIVER_SHEET)) ?? (var_core_value_sig1951 == null ? undefined : var_core_value_sig1951.getCurrentUnitOfType(var_core_value_sig4AFB.UNIVER_SHEET)) ?? null;
}
function $t(var_core_value_sigFEA0, var_core_value_sig931A, var_core_value_sigEE7D) {
  var var_core_value_sig3585, var_core_value_sig31A8;
  let var_core_value_sigA4DA = Z(var_core_value_sigFEA0.injector, var_core_value_sigDB33),
    var_core_value_sig6FC0 = Z(var_core_value_sigFEA0.injector, var_core_value_sig27B7);
  if (!var_core_value_sigA4DA || !var_core_value_sig6FC0) return var_core_value_sigEE7D.push(X("COMMAND_FAILED", "Chart layout services are not available.", "layout")), null;
  let var_core_value_sig6217 = var_core_value_sigA4DA.getDrawingByParam({
    unitId: var_core_value_sigFEA0.unitId,
    subUnitId: var_core_value_sigFEA0.subUnitId,
    drawingId: var_core_value_sigFEA0.chartId
  });
  if (!var_core_value_sig6217) return var_core_value_sigEE7D.push(X("COMMAND_FAILED", "Chart drawing not found: " + var_core_value_sigFEA0.chartId + ".", "layout")), null;
  let var_core_value_sigB805 = var_core_value_sig6FC0.ensureSkeleton(var_core_value_sigFEA0.unitId, var_core_value_sigFEA0.subUnitId);
  if (!var_core_value_sigB805) return var_core_value_sigEE7D.push(X("COMMAND_FAILED", "Worksheet skeleton is not available for chart layout update.", "layout")), null;
  let var_core_value_sig4FAE = {
    ...var_core_value_sig6217.transform
  };
  if (((var_core_value_sig3585 = var_core_value_sig931A.size) == null ? undefined : var_core_value_sig3585.width) !== undefined && (var_core_value_sig4FAE.width = var_core_value_sig931A.size["width"]), ((var_core_value_sig31A8 = var_core_value_sig931A.size) == null ? undefined : var_core_value_sig31A8.height) !== undefined && (var_core_value_sig4FAE.height = var_core_value_sig931A.size["height"]), var_core_value_sig931A.anchor !== undefined) {
    let var_core_value_sig308A = nn(var_core_value_sigFEA0.unitId, var_core_value_sigFEA0.subUnitId, var_core_value_sig931A.anchor, var_core_value_sigB805, var_core_value_sigEE7D);
    var_core_value_sig308A && (var_core_value_sig4FAE.left = var_core_value_sig308A.left, var_core_value_sig4FAE.top = var_core_value_sig308A.top);
  }
  return var_core_value_sig931A.position !== undefined && (var_core_value_sig4FAE.left = var_core_value_sig931A.position["x"], var_core_value_sig4FAE.top = var_core_value_sig931A.position["y"]), {
    ...var_core_value_sig6217,
    unitId: var_core_value_sigFEA0.unitId,
    subUnitId: var_core_value_sigFEA0.subUnitId,
    drawingId: var_core_value_sigFEA0.chartId,
    drawingType: var_core_value_sig1FF6.DRAWING_CHART,
    transform: var_core_value_sig4FAE,
    sheetTransform: var_core_value_sigF39B(var_core_value_sig4FAE, var_core_value_sigB805),
    axisAlignSheetTransform: var_core_value_sigE64C(var_core_value_sig4FAE, var_core_value_sigB805)
  };
}
function en(var_core_value_sig1FCC, var_core_value_sigB7F9, var_core_value_sigB1A2) {
  if (var_core_value_sigB7F9.position) return var_core_value_sigB7F9.position;
  if (!var_core_value_sigB7F9.anchor) return;
  let var_core_value_sig526D = Z(var_core_value_sig1FCC.injector, var_core_value_sig27B7),
    var_core_value_sigBDB5 = var_core_value_sig526D == null ? undefined : var_core_value_sig526D.ensureSkeleton(var_core_value_sig1FCC.unitId, var_core_value_sig1FCC.subUnitId);
  if (!var_core_value_sigBDB5) {
    var_core_value_sigB1A2.push(X("COMMAND_FAILED", "Worksheet skeleton is not available for chart anchor.", "anchor"));
    return;
  }
  let var_core_value_sig59CE = nn(var_core_value_sig1FCC.unitId, var_core_value_sig1FCC.subUnitId, var_core_value_sigB7F9.anchor, var_core_value_sigBDB5, var_core_value_sigB1A2);
  return var_core_value_sig59CE ? {
    x: var_core_value_sig59CE.left ?? 0,
    y: var_core_value_sig59CE.top ?? 0
  } : undefined;
}
function tn(var_core_value_sig3AD7) {
  var var_core_value_sig04E4;
  let var_core_value_sigD8F0 = Z(var_core_value_sig3AD7.injector, var_core_value_sigDB33),
    var_core_value_sig1475 = var_core_value_sigD8F0 == null ? undefined : var_core_value_sigD8F0.getDrawingByParam({
      unitId: var_core_value_sig3AD7.unitId,
      subUnitId: var_core_value_sig3AD7.subUnitId,
      drawingId: var_core_value_sig3AD7.chartId
    });
  if (var_core_value_sig1475) return {
    position: var_core_value_sig1475.transform ? {
      x: var_core_value_sig1475.transform["left"] ?? 0,
      y: var_core_value_sig1475.transform["top"] ?? 0
    } : undefined,
    size: var_core_value_sig1475.transform ? {
      width: var_core_value_sig1475.transform["width"],
      height: var_core_value_sig1475.transform["height"]
    } : undefined,
    anchor: (var_core_value_sig04E4 = var_core_value_sig1475.sheetTransform) != null && var_core_value_sig04E4.from ? {
      row: var_core_value_sig1475.sheetTransform["from"].row,
      column: var_core_value_sig1475.sheetTransform["from"].column,
      rowOffset: var_core_value_sig1475.sheetTransform["from"].rowOffset,
      columnOffset: var_core_value_sig1475.sheetTransform["from"].columnOffset
    } : undefined
  };
}
function nn(var_core_value_sig08B7, var_core_value_sig2008, var_core_value_sig496B, var_core_value_sig7161, var_core_value_sig2AB8) {
  let var_core_value_sig3FCF = rn(var_core_value_sig496B, var_core_value_sig2AB8);
  return var_core_value_sig3FCF ? var_core_value_sig00DE(var_core_value_sig08B7, var_core_value_sig2008, {
    row: var_core_value_sig3FCF.row,
    column: var_core_value_sig3FCF.column,
    rowOffset: var_core_value_sig3FCF.rowOffset ?? 0,
    columnOffset: var_core_value_sig3FCF.columnOffset ?? 0
  }, 1, 1, var_core_value_sig7161).transform : null;
}
function rn(var_core_value_sig675A, var_core_value_sig837F) {
  if (typeof var_core_value_sig675A == "string") try {
    let var_core_value_sig528D = var_core_value_sigB272(var_core_value_sig675A);
    return {
      row: var_core_value_sig528D.range["startRow"],
      column: var_core_value_sig528D.range["startColumn"]
    };
  } catch (var_core_value_sigA309) {
    return var_core_value_sig837F.push(X("INVALID_RANGE", "Invalid chart source range: " + var_core_value_sig675A + ".", "layout.anchor", var_core_value_sigA309)), null;
  }
  return !Number.isInteger(var_core_value_sig675A.row) || !Number.isInteger(var_core_value_sig675A.column) || var_core_value_sig675A.row < 0 || var_core_value_sig675A.column < 0 ? (var_core_value_sig837F.push(X("INVALID_RANGE", "Chart anchor row and column must be non-negative integers.", "layout.anchor")), null) : var_core_value_sig675A;
}
function X(var_core_value_sig9D6E, var_core_value_sigB205, var_core_value_sigBF78, var_core_value_sig8AF3) {
  return {
    code: var_core_value_sig9D6E,
    severity: "error",
    message: var_core_value_sigB205,
    path: var_core_value_sigBF78,
    details: var_core_value_sig8AF3
  };
}
function Z(var_core_value_sigA0CC, var_core_value_sigB3A1) {
  try {
    return var_core_value_sigA0CC.get(var_core_value_sigB3A1);
  } catch {
    return null;
  }
}
function Q(var_core_value_sig1FB9, var_core_value_sig53A9, var_core_value_sigDACD, var_core_value_sig691E = "error", var_core_value_sigD6D6, var_core_value_sig0347) {
  return {
    code: var_core_value_sig1FB9,
    severity: var_core_value_sig691E,
    message: var_core_value_sig53A9,
    path: var_core_value_sigDACD,
    details: var_core_value_sigD6D6,
    ...var_core_value_sig0347
  };
}
function an(var_core_value_sig52A3) {
  return var_core_value_sig52A3.some(var_core_value_sig9E20 => var_core_value_sig9E20.severity === "error");
}
function on(var_core_value_sigAD91, var_core_value_sigF64E, var_core_value_sig9B3D, var_core_value_sigB217 = "source") {
  if (var_core_value_sigAD91 == null) return var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Chart source is required.", var_core_value_sigB217)), null;
  let var_core_value_sig1FE6 = bn(var_core_value_sigAD91) ? var_core_value_sigAD91 : undefined;
  if (var_core_value_sig1FE6 && "ranges" in var_core_value_sig1FE6) return "range" in var_core_value_sig1FE6 && var_core_value_sig1FE6.range !== undefined ? (var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Chart source must specify exactly one of range or ranges.", var_core_value_sigB217)), null) : sn(var_core_value_sig1FE6, var_core_value_sigF64E, var_core_value_sig9B3D, var_core_value_sigB217);
  if (var_core_value_sig1FE6 && (!("range" in var_core_value_sig1FE6) || var_core_value_sig1FE6.range === undefined)) return var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Chart\x20source\x20must\x20specify\x20exactly\x20one\x20of\x20range\x20or\x20ranges.", var_core_value_sigB217)), null;
  let var_core_value_sig2471 = vn(var_core_value_sig1FE6 ? var_core_value_sig1FE6.range : var_core_value_sigAD91, var_core_value_sig9B3D, var_core_value_sig1FE6 ? var_core_value_sigB217 + ".range" : var_core_value_sigB217);
  if (!var_core_value_sig2471) return null;
  let var_core_value_sigD1FC = (var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.unitId) ?? var_core_value_sigF64E.unitId;
  if (var_core_value_sigD1FC !== var_core_value_sigF64E.unitId) return var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Chart facade create/update only supports sources in the same workbook.", var_core_value_sigB217 + ".unitId")), null;
  let var_core_value_sigE2F9 = (var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.sheetName) ?? var_core_value_sig2471.sheetName,
    var_core_value_sigD689 = var_core_value_sigE2F9,
    var_core_value_sig7AE3 = (var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.sheetId) ?? var_core_value_sigF64E.subUnitId;
  if (var_core_value_sigE2F9) {
    let var_core_value_sig26BB = var_core_value_sigF64E.workbook["getSheetBySheetName"](var_core_value_sigE2F9);
    if (!var_core_value_sig26BB) return var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Worksheet\x20not\x20found:\x20" + var_core_value_sigE2F9 + ".", var_core_value_sigB217 + ".sheetName")), null;
    var_core_value_sig7AE3 = var_core_value_sig26BB.getSheetId();
  } else {
    if (var_core_value_sig1FE6 != null && var_core_value_sig1FE6.sheetId) {
      let var_core_value_sigE799 = var_core_value_sigF64E.workbook["getSheetBySheetId"](var_core_value_sig1FE6.sheetId);
      if (!var_core_value_sigE799) return var_core_value_sig9B3D.push(Q("INVALID_RANGE", "Worksheet not found: " + var_core_value_sig1FE6.sheetId + ".", var_core_value_sigB217 + ".sheetId")), null;
      var_core_value_sigD689 = var_core_value_sigE799.getName();
    }
  }
  hn(var_core_value_sig2471.range, var_core_value_sig9B3D, var_core_value_sig1FE6 ? var_core_value_sigB217 + ".range" : var_core_value_sigB217);
  let var_core_value_sig1EB3 = xn(var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.orientation),
    var_core_value_sigE120 = var_core_value_sig1FE6 == null ? undefined : var_core_value_sig1FE6.headerRow,
    var_core_value_sigD6E7 = {
      rangeInfo: {
        unitId: var_core_value_sigD1FC,
        subUnitId: var_core_value_sig7AE3,
        range: var_core_value_sig2471.range
      },
      ...(var_core_value_sig1EB3 === undefined ? {} : {
        isRowDirection: var_core_value_sig1EB3
      }),
      ...(var_core_value_sigE120 === undefined ? {} : {
        headerRow: var_core_value_sigE120
      })
    };
  return var_core_value_sigE120 !== undefined && !_n(var_core_value_sigE120, var_core_value_sig2471.range, var_core_value_sig9B3D, var_core_value_sigB217 + ".headerRow") ? null : {
    kind: "range",
    range: var_core_value_sig2471.range,
    sourceSheetName: var_core_value_sigD689,
    isRowDirection: var_core_value_sig1EB3,
    rangeInfo: var_core_value_sigD6E7
  };
}
function sn(var_core_value_sig3669, var_core_value_sig5CBC, var_core_value_sig20BE, var_core_value_sig6BD0) {
  if (!Array.isArray(var_core_value_sig3669.ranges) || var_core_value_sig3669.ranges["length"] === 0) return var_core_value_sig20BE.push(Q("INVALID_RANGE", "Chart source ranges must contain at least one vector.", var_core_value_sig6BD0 + ".ranges")), null;
  if (var_core_value_sig3669.unitId !== undefined && var_core_value_sig3669.unitId !== var_core_value_sig5CBC.unitId) return var_core_value_sig20BE.push(Q("INVALID_RANGE", "Chart facade create/update only supports sources in the same workbook.", var_core_value_sig6BD0 + ".unitId")), null;
  let var_core_value_sig8C15 = [],
    var_core_value_sig6DF7,
    var_core_value_sigB411;
  var_core_value_sig3669.ranges["forEach"]((var_core_value_sig19B4, var_core_value_sig218A) => {
    let var_core_value_sig14CB = var_core_value_sig6BD0 + ".ranges." + var_core_value_sig218A,
      var_core_value_sigFDEE = cn(var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.range, var_core_value_sig3669, var_core_value_sig5CBC, var_core_value_sig20BE, var_core_value_sig14CB + ".range"),
      var_core_value_sigA676 = (var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.header) === undefined ? undefined : cn(var_core_value_sig19B4.header, var_core_value_sig3669, var_core_value_sig5CBC, var_core_value_sig20BE, var_core_value_sig14CB + ".header");
    if (!var_core_value_sigFDEE || (var_core_value_sig19B4 == null ? undefined : var_core_value_sig19B4.header) !== undefined && !var_core_value_sigA676) return;
    let var_core_value_sigC27E = var_core_value_sigFDEE.range,
      var_core_value_sigA70D = var_core_value_sigC27E.startRow === var_core_value_sigC27E.endRow;
    if (var_core_value_sigA70D === (var_core_value_sigC27E.startColumn === var_core_value_sigC27E.endColumn)) {
      var_core_value_sig20BE.push(Q("INVALID_RANGE", "Each chart source vector must be exactly one row or one column.", var_core_value_sig14CB + ".range"));
      return;
    }
    let var_core_value_sigCE10 = var_core_value_sigA70D,
      var_core_value_sigA386 = var_core_value_sigA70D ? var_core_value_sigC27E.endColumn - var_core_value_sigC27E.startColumn + 1 : var_core_value_sigC27E.endRow - var_core_value_sigC27E.startRow + 1;
    if (var_core_value_sigB411 !== undefined && var_core_value_sigB411 !== var_core_value_sigCE10) {
      var_core_value_sig20BE.push(Q("INVALID_RANGE", "All chart source vectors must have the same orientation.", var_core_value_sig14CB + ".range"));
      return;
    }
    if (var_core_value_sig6DF7 !== undefined && var_core_value_sig6DF7 !== var_core_value_sigA386) {
      var_core_value_sig20BE.push(Q("INVALID_RANGE", "All\x20chart\x20source\x20vectors\x20must\x20have\x20equal\x20length.", var_core_value_sig14CB + ".range"));
      return;
    }
    if (var_core_value_sigA676 && (var_core_value_sigA676.range["startRow"] !== var_core_value_sigA676.range["endRow"] || var_core_value_sigA676.range["startColumn"] !== var_core_value_sigA676.range["endColumn"])) {
      var_core_value_sig20BE.push(Q("INVALID_RANGE", "A chart source vector header must be a single cell.", var_core_value_sig14CB + ".header"));
      return;
    }
    var_core_value_sigB411 = var_core_value_sigCE10, var_core_value_sig6DF7 = var_core_value_sigA386, var_core_value_sig8C15.push({
      ...(var_core_value_sigA676 ? {
        header: var_core_value_sigA676
      } : {}),
      range: var_core_value_sigFDEE
    });
  });
  let var_core_value_sigA81B = xn(var_core_value_sig3669.orientation);
  return var_core_value_sigA81B !== undefined && var_core_value_sigB411 !== undefined && var_core_value_sigA81B !== var_core_value_sigB411 && var_core_value_sig20BE.push(Q("INVALID_RANGE", "Chart source orientation must match the row or column vectors.", var_core_value_sig6BD0 + ".orientation")), var_core_value_sig8C15.length === var_core_value_sig3669.ranges["length"] && !an(var_core_value_sig20BE) ? {
    kind: "ranges",
    ranges: var_core_value_sig8C15,
    isRowDirection: var_core_value_sigB411
  } : null;
}
function cn(var_core_value_sigFE8D, var_core_value_sig8595, var_core_value_sigF8DE, var_core_value_sigFE76, var_core_value_sig84C8) {
  let var_core_value_sig80C0 = vn(var_core_value_sigFE8D, var_core_value_sigFE76, var_core_value_sig84C8);
  if (!var_core_value_sig80C0) return null;
  let var_core_value_sig22B4 = var_core_value_sig8595.unitId ?? var_core_value_sigF8DE.unitId,
    var_core_value_sigBB37 = var_core_value_sig80C0.sheetName ?? var_core_value_sig8595.sheetName,
    var_core_value_sig0C51 = var_core_value_sig8595.sheetId ?? var_core_value_sigF8DE.subUnitId;
  if (var_core_value_sigBB37) {
    let var_core_value_sigCD82 = var_core_value_sigF8DE.workbook["getSheetBySheetName"](var_core_value_sigBB37);
    if (!var_core_value_sigCD82) return var_core_value_sigFE76.push(Q("INVALID_RANGE", "Worksheet\x20not\x20found:\x20" + var_core_value_sigBB37 + ".", var_core_value_sig84C8)), null;
    var_core_value_sig0C51 = var_core_value_sigCD82.getSheetId();
  } else {
    if (var_core_value_sig8595.sheetId && !var_core_value_sigF8DE.workbook["getSheetBySheetId"](var_core_value_sig8595.sheetId)) return var_core_value_sigFE76.push(Q("INVALID_RANGE", "Worksheet not found: " + var_core_value_sig8595.sheetId + ".", var_core_value_sig84C8)), null;
  }
  return gn(var_core_value_sig80C0.range, var_core_value_sigFE76, var_core_value_sig84C8), {
    unitId: var_core_value_sig22B4,
    subUnitId: var_core_value_sig0C51,
    range: var_core_value_sig80C0.range
  };
}
function ln(var_core_value_sigADA4, var_core_value_sig0E48, var_core_value_sig495B = 0) {
  var var_core_value_sig310C, var_core_value_sig759E;
  let var_core_value_sig6C80 = (var_core_value_sig310C = var_core_value_sig0E48.inferInitialChartSource) == null ? undefined : var_core_value_sig310C.call(var_core_value_sig0E48, var_core_value_sigADA4.kind === "ranges" ? var_core_value_sigADA4.ranges : var_core_value_sigADA4.rangeInfo);
  if (var_core_value_sig6C80) return un(var_core_value_sig6C80.dataSet, var_core_value_sig495B);
  if (var_core_value_sigADA4.kind === "ranges") return var_core_value_sigADA4.ranges["map"]((var_core_value_sig44DD, var_core_value_sig96FA) => {
    var var_core_value_sigAB68;
    let var_core_value_sig040A = var_core_value_sig44DD.header,
      var_core_value_sig2AE0 = var_core_value_sig040A ? var_core_value_sig0E48.workbook["getSheetBySheetId"](var_core_value_sig040A.subUnitId) : null,
      var_core_value_sigC349 = var_core_value_sig0E48.workbook["getSheetBySheetId"](var_core_value_sig44DD.range["subUnitId"]);
    return {
      index: var_core_value_sig96FA,
      name: var_core_value_sig040A ? String((var_core_value_sig2AE0 == null || (var_core_value_sigAB68 = var_core_value_sig2AE0.getCell(var_core_value_sig040A.range["startRow"], var_core_value_sig040A.range["startColumn"])) == null ? undefined : var_core_value_sigAB68.v) ?? "") : "",
      items: var_core_value_sigC349 ? fn(var_core_value_sigC349, var_core_value_sig44DD.range["range"], var_core_value_sigADA4.isRowDirection) : []
    };
  }).filter(var_core_value_sig9D96 => var_core_value_sig9D96.index !== var_core_value_sig495B);
  let var_core_value_sig6B99 = var_core_value_sigADA4.rangeInfo["rangeInfo"],
    var_core_value_sig6ADC = var_core_value_sig0E48.workbook["getSheetBySheetId"](var_core_value_sig6B99.subUnitId);
  if (!var_core_value_sig6ADC) return [];
  let var_core_value_sig41AD = var_core_value_sigADA4.isRowDirection ?? ((var_core_value_sig759E = var_core_value_sig0E48.resolveAutoIsRowDirection) == null ? undefined : var_core_value_sig759E.call(var_core_value_sig0E48, var_core_value_sigADA4.rangeInfo)) ?? true,
    var_core_value_sigDBC2 = var_core_value_sigBFC7.transformRange(var_core_value_sig6B99.range, var_core_value_sig6ADC),
    {
      dataSet: var_core_value_sig7739
    } = Et(mt({
      numfmtOptions: {
        locale: var_core_value_sigCCE5(var_core_value_sig0E48.workbook["getSnapshot"]().locale),
        dateSystem: var_core_value_sig0E48.workbook["getDateSystem"]()
      },
      range: var_core_value_sigDBC2,
      styles: var_core_value_sig0E48.workbook["getStyles"](),
      worksheet: var_core_value_sig6ADC
    }), {
      isRowDirection: var_core_value_sig41AD,
      ...(var_core_value_sigADA4.rangeInfo["headerRow"] === undefined ? {} : {
        headerRow: var_core_value_sigADA4.rangeInfo["headerRow"]
      })
    });
  return un(var_core_value_sig7739, var_core_value_sig495B);
}
function un(var_core_value_sig4040, var_core_value_sig1AAA) {
  return var_core_value_sig4040.source["map"]((var_core_value_sig2776, var_core_value_sig6FB2) => ({
    index: var_core_value_sig6FB2,
    name: dn(var_core_value_sig4040.dimensions[var_core_value_sig6FB2]),
    items: var_core_value_sig2776.map((var_core_value_sigB601, var_core_value_sig8B71) => {
      var var_core_value_sigAEFB;
      let var_core_value_sig826B = var_core_value_sig90E5(var_core_value_sigB601);
      return {
        ...var_core_value_sig826B,
        label: ((var_core_value_sigAEFB = var_core_value_sig4040.sourceLabels) == null || (var_core_value_sigAEFB = var_core_value_sigAEFB[var_core_value_sig6FB2]) == null ? undefined : var_core_value_sigAEFB[var_core_value_sig8B71]) ?? var_core_value_sig826B.label
      };
    })
  })).filter(var_core_value_sigEB43 => var_core_value_sigEB43.index !== var_core_value_sig1AAA);
}
function dn(var_core_value_sig58DB) {
  return typeof var_core_value_sig58DB == "string" ? var_core_value_sig58DB : (var_core_value_sig58DB == null ? undefined : var_core_value_sig58DB.displayName) ?? (var_core_value_sig58DB == null ? undefined : var_core_value_sig58DB.name) ?? "";
}
function fn(var_core_value_sig4840, var_core_value_sigB76D, var_core_value_sig1015) {
  let var_core_value_sig6223 = [];
  if (var_core_value_sig1015) for (let var_core_value_sig4186 = var_core_value_sigB76D.startColumn; var_core_value_sig4186 <= var_core_value_sigB76D.endColumn; var_core_value_sig4186++) {
    var var_core_value_sigC6B6;
    var_core_value_sig6223.push(var_core_value_sig90E5((var_core_value_sigC6B6 = var_core_value_sig4840.getCell(var_core_value_sigB76D.startRow, var_core_value_sig4186)) == null ? undefined : var_core_value_sigC6B6.v));
  } else for (let var_core_value_sigF963 = var_core_value_sigB76D.startRow; var_core_value_sigF963 <= var_core_value_sigB76D.endRow; var_core_value_sigF963++) {
    var var_core_value_sig498A;
    var_core_value_sig6223.push(var_core_value_sig90E5((var_core_value_sig498A = var_core_value_sig4840.getCell(var_core_value_sigF963, var_core_value_sigB76D.startColumn)) == null ? undefined : var_core_value_sig498A.v));
  }
  return var_core_value_sig6223;
}
function pn(var_core_value_sigEF45, var_core_value_sig36FE) {
  let {
      rangeInfo: var_core_value_sig3AF5,
      isRowDirection: var_core_value_sig14E6,
      headerRow: var_core_value_sig8690
    } = var_core_value_sigEF45,
    var_core_value_sigDF29 = var_core_value_sig36FE == null ? undefined : var_core_value_sig36FE.getSheetBySheetId(var_core_value_sig3AF5.subUnitId),
    var_core_value_sigC0F8 = "auto";
  return var_core_value_sig14E6 !== undefined && (var_core_value_sigC0F8 = var_core_value_sig14E6 ? "rows" : "columns"), {
    range: var_core_value_sig3AF5.range,
    unitId: var_core_value_sig3AF5.unitId,
    sheetId: var_core_value_sig3AF5.subUnitId,
    sheetName: var_core_value_sigDF29 == null ? undefined : var_core_value_sigDF29.getName(),
    orientation: var_core_value_sigC0F8,
    ...(var_core_value_sig8690 === undefined ? {} : {
      headerRow: var_core_value_sig8690
    })
  };
}
function mn(var_core_value_sig3C75, var_core_value_sig992D) {
  var var_core_value_sigE4E4;
  let var_core_value_sigA4B0 = var_core_value_sigB608 => {
      let var_core_value_sigF866 = var_core_value_sig992D == null ? undefined : var_core_value_sig992D.getSheetBySheetId(var_core_value_sigB608.subUnitId);
      return {
        range: var_core_value_sigB608.range,
        unitId: var_core_value_sigB608.unitId,
        sheetId: var_core_value_sigB608.subUnitId,
        sheetName: var_core_value_sigF866 == null ? undefined : var_core_value_sigF866.getName(),
        orientation: "auto"
      };
    },
    var_core_value_sig5F50 = (var_core_value_sigE4E4 = var_core_value_sig3C75[0]) == null ? undefined : var_core_value_sigE4E4.range["range"];
  return {
    ranges: var_core_value_sig3C75.map(var_core_value_sig5EFB => ({
      range: var_core_value_sigA4B0(var_core_value_sig5EFB.range),
      ...(var_core_value_sig5EFB.header ? {
        header: var_core_value_sigA4B0(var_core_value_sig5EFB.header)
      } : {})
    })),
    orientation: var_core_value_sig5F50 && var_core_value_sig5F50.startRow === var_core_value_sig5F50.endRow ? "rows" : "columns"
  };
}
function hn(var_core_value_sig4494, var_core_value_sigFFAF, var_core_value_sig478B) {
  gn(var_core_value_sig4494, var_core_value_sigFFAF, var_core_value_sig478B), var_core_value_sig4494.startRow === var_core_value_sig4494.endRow && var_core_value_sig4494.startColumn === var_core_value_sig4494.endColumn && var_core_value_sigFFAF.push(Q("SINGLE_CELL_SOURCE", "Chart\x20source\x20must\x20contain\x20more\x20than\x20one\x20cell.", var_core_value_sig478B));
}
function gn(var_core_value_sig1E21, var_core_value_sig9DBF, var_core_value_sig36CC) {
  if (!Number.isInteger(var_core_value_sig1E21.startRow) || !Number.isInteger(var_core_value_sig1E21.endRow) || !Number.isInteger(var_core_value_sig1E21.startColumn) || !Number.isInteger(var_core_value_sig1E21.endColumn)) {
    var_core_value_sig9DBF.push(Q("INVALID_RANGE", "Chart source range must use integer row and column indexes.", var_core_value_sig36CC));
    return;
  }
  (var_core_value_sig1E21.startRow > var_core_value_sig1E21.endRow || var_core_value_sig1E21.startColumn > var_core_value_sig1E21.endColumn || var_core_value_sig1E21.startRow < 0 || var_core_value_sig1E21.startColumn < 0) && var_core_value_sig9DBF.push(Q("INVALID_RANGE", "Chart\x20source\x20range\x20is\x20invalid.", var_core_value_sig36CC));
}
function _n(var_core_value_sigA568, var_core_value_sigD22D, var_core_value_sig85D5, var_core_value_sig5D2E) {
  let var_core_value_sig7221 = Number.isInteger(var_core_value_sigA568) && (var_core_value_sigA568 === var_core_value_sig64D8 || var_core_value_sigA568 >= 0 && var_core_value_sigA568 <= var_core_value_sigD22D.endRow - var_core_value_sigD22D.startRow);
  return var_core_value_sig7221 || var_core_value_sig85D5.push(Q("INVALID_RANGE", "Chart source headerRow must be a zero-based row offset inside the source range.", var_core_value_sig5D2E)), var_core_value_sig7221;
}
function vn(var_core_value_sig0A5A, var_core_value_sigE6D6, var_core_value_sig8507) {
  if (typeof var_core_value_sig0A5A == "string") try {
    let var_core_value_sig3A85 = var_core_value_sigB272(var_core_value_sig0A5A);
    return {
      range: var_core_value_sig3A85.range,
      sheetName: var_core_value_sig3A85.sheetName
    };
  } catch (var_core_value_sig2682) {
    return var_core_value_sigE6D6.push(Q("INVALID_RANGE", "Invalid chart source range: " + var_core_value_sig0A5A + ".", var_core_value_sig8507, "error", var_core_value_sig2682)), null;
  }
  return yn(var_core_value_sig0A5A) ? {
    range: var_core_value_sig0A5A
  } : (var_core_value_sigE6D6.push(Q("INVALID_RANGE", "Chart\x20source\x20range\x20must\x20be\x20a\x20range\x20string\x20or\x20IRange\x20object.", var_core_value_sig8507)), null);
}
function yn(var_core_value_sig8A7F) {
  return !!(var_core_value_sig8A7F && typeof var_core_value_sig8A7F == "object" && "startRow" in var_core_value_sig8A7F && "endRow" in var_core_value_sig8A7F && "startColumn" in var_core_value_sig8A7F && "endColumn" in var_core_value_sig8A7F);
}
function bn(var_core_value_sig9E81) {
  return !!(var_core_value_sig9E81 && typeof var_core_value_sig9E81 == "object" && !yn(var_core_value_sig9E81));
}
function xn(var_core_value_sig8295) {
  switch (var_core_value_sig8295) {
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
  constructor(var_core_value_sig4BB5) {
    this._context = var_core_value_sig4BB5, W(this, "_injector", undefined), this._injector = var_core_value_sig4BB5.injector;
  }
  describe(var_core_value_sig6709 = {}, var_core_value_sig52CA) {
    let {
        chartId: var_core_value_sigC030,
        subUnitId: var_core_value_sig88F6,
        unitId: var_core_value_sig37DB
      } = this._context,
      var_core_value_sig5542 = this._injector["get"](J),
      var_core_value_sigE0A9 = this._getChartModel(),
      var_core_value_sigA73E = var_core_value_sig5542.getChartSourceSpec(var_core_value_sigC030);
    if (!var_core_value_sigA73E) throw Error("Chart source not found: " + var_core_value_sigC030);
    let var_core_value_sig7620 = Qt(this._injector, var_core_value_sig37DB) ?? undefined;
    return {
      ...var_core_value_sig9DAA(var_core_value_sigE0A9, var_core_value_sig6709, var_core_value_sig52CA),
      id: var_core_value_sigC030,
      source: Array.isArray(var_core_value_sigA73E) ? mn(var_core_value_sigA73E, var_core_value_sig7620) : pn(var_core_value_sigA73E, var_core_value_sig7620),
      layout: tn({
        unitId: var_core_value_sig37DB,
        subUnitId: var_core_value_sig88F6,
        chartId: var_core_value_sigC030,
        injector: this._injector
      })
    };
  }
  getInfo() {
    var var_core_value_sigB9FC, var_core_value_sig5055, var_core_value_sig3801, var_core_value_sig45F0, var_core_value_sigBC91;
    let var_core_value_sigCB88 = this.describe(),
      var_core_value_sig8D65 = this._injector["get"](J).getChartSourceSpec(this._context["chartId"]);
    if (!var_core_value_sig8D65) throw Error("Chart source not found: " + this._context["chartId"]);
    let var_core_value_sig8122 = Array.isArray(var_core_value_sig8D65) ? {
        ranges: var_core_value_sig8D65.map(({
          header: var_core_value_sigCF89,
          range: var_core_value_sig00CB
        }) => ({
          ...(var_core_value_sigCF89 ? {
            header: var_core_value_sigCF89.range
          } : {}),
          range: var_core_value_sig00CB.range
        })),
        orientation: ((var_core_value_sigB9FC = var_core_value_sig8D65[0]) == null ? undefined : var_core_value_sigB9FC.range["range"].startRow) === ((var_core_value_sig5055 = var_core_value_sig8D65[0]) == null ? undefined : var_core_value_sig5055.range["range"].endRow) ? "rows" : "columns"
      } : pn(var_core_value_sig8D65),
      var_core_value_sigEDC6 = (var_core_value_sig3801 = var_core_value_sigCB88.layout) == null ? undefined : var_core_value_sig3801.size;
    return {
      config: var_core_value_sigD170(var_core_value_sigCB88),
      dataSource: var_core_value_sig29DE.deepClone(var_core_value_sig8122),
      position: var_core_value_sig29DE.deepClone((var_core_value_sig45F0 = var_core_value_sigCB88.layout) == null ? undefined : var_core_value_sig45F0.position),
      size: (var_core_value_sigEDC6 == null ? undefined : var_core_value_sigEDC6.width) === undefined || var_core_value_sigEDC6.height === undefined ? undefined : {
        width: var_core_value_sigEDC6.width,
        height: var_core_value_sigEDC6.height
      },
      anchor: var_core_value_sig29DE.deepClone((var_core_value_sigBC91 = var_core_value_sigCB88.layout) == null ? undefined : var_core_value_sigBC91.anchor)
    };
  }
  commit(var_core_value_sig611A) {
    var var_core_value_sig6BD9;
    let {
        chartId: var_core_value_sig7E56,
        unitId: var_core_value_sig4161
      } = this._context,
      var_core_value_sig7580 = this._getChartModel(),
      var_core_value_sig1F18 = var_core_value_sigD7C5(var_core_value_sig611A, {
        series: (var_core_value_sig6BD9 = var_core_value_sig7580.config) == null ? undefined : var_core_value_sig6BD9.series,
        currentChartType: var_core_value_sig7580.chartType,
        currentStyle: var_core_value_sig7580.style,
        currentContext: var_core_value_sig7580.context,
        currentDataAggregation: var_core_value_sig7580.dataAggregation
      });
    if (!this._injector["get"](var_core_value_sig4B27).syncExecuteCommand(Gt.id, {
      unitId: var_core_value_sig4161,
      chartModelId: var_core_value_sig7E56,
      ...var_core_value_sig1F18,
      [Y]: true
    })) throw Error("Failed to update Sheet chart configuration.");
  }
  async update(var_core_value_sigD5A0) {
    let var_core_value_sig81B2 = {};
    return var_core_value_sigD5A0.anchor !== undefined && (var_core_value_sig81B2.anchor = var_core_value_sigD5A0.anchor), var_core_value_sigD5A0.position !== undefined && (var_core_value_sig81B2.position = var_core_value_sigD5A0.position), var_core_value_sigD5A0.size !== undefined && (var_core_value_sig81B2.size = var_core_value_sigD5A0.size), this.commitChanges(var_core_value_sigD5A0.dataSource, var_core_value_sigD5A0.config, var_core_value_sig81B2);
  }
  async commitChanges(var_core_value_sigA0A5, var_core_value_sig10AA, var_core_value_sigE6D0) {
    this._resolveSourceRange(var_core_value_sigA0A5), this._replaceConfig(var_core_value_sig10AA), this.commitHost({
      source: var_core_value_sigA0A5
    }), Object.keys(var_core_value_sigE6D0).length > 0 && this.commitHost({
      layout: var_core_value_sigE6D0
    });
  }
  _replaceConfig(var_core_value_sig8E91) {
    var var_core_value_sig00BE;
    let {
        chartId: var_core_value_sig7BB5,
        unitId: var_core_value_sig6AAD
      } = this._context,
      var_core_value_sig1157 = this._getChartModel(),
      var_core_value_sigA694 = var_core_value_sig7000(var_core_value_sig8E91, {
        series: (var_core_value_sig00BE = var_core_value_sig1157.config) == null ? undefined : var_core_value_sig00BE.series,
        currentStyle: var_core_value_sig1157.style
      });
    if (!this._injector["get"](var_core_value_sig4B27).syncExecuteCommand(Gt.id, {
      unitId: var_core_value_sig6AAD,
      chartModelId: var_core_value_sig7BB5,
      ...var_core_value_sigA694,
      [Y]: true
    })) throw Error("Failed to update Sheet chart configuration.");
  }
  setDataSource(var_core_value_sig18E01) {
    this.commitHost({
      source: var_core_value_sig18E01
    });
  }
  setAbsolutePosition(var_core_value_sig0428, var_core_value_sigBE07) {
    this.commitHost({
      layout: {
        position: {
          x: var_core_value_sig0428,
          y: var_core_value_sigBE07
        }
      }
    });
  }
  setSize(var_core_value_sig555F, var_core_value_sig3D6F) {
    this.commitHost({
      layout: {
        size: {
          width: var_core_value_sig555F,
          height: var_core_value_sig3D6F
        }
      }
    });
  }
  arrange(var_core_value_sig336C) {
    let {
        chartId: var_core_value_sig6E68,
        subUnitId: var_core_value_sig8DFE,
        unitId: var_core_value_sig48EA
      } = this._context,
      var_core_value_sig5E16 = this._injector["get"](var_core_value_sigDB33).getDrawingOrder(var_core_value_sig48EA, var_core_value_sig8DFE),
      var_core_value_sig09F3 = var_core_value_sig5E16.indexOf(var_core_value_sig6E68);
    if (var_core_value_sig09F3 < 0) throw Error("Sheet chart drawing not found: " + var_core_value_sig6E68);
    if (var_core_value_sig9CF7(var_core_value_sig09F3, var_core_value_sig5E16.length, var_core_value_sig336C) !== var_core_value_sig09F3 && !this._injector["get"](var_core_value_sig4B27).syncExecuteCommand(var_core_value_sig9A5B.id, {
      unitId: var_core_value_sig48EA,
      subUnitId: var_core_value_sig8DFE,
      drawingIds: [var_core_value_sig6E68],
      arrangeType: var_core_value_sig336C
    })) throw Error("Failed to arrange Sheet chart.");
  }
  setZOrder(var_core_value_sig4592) {
    let {
        chartId: var_core_value_sigC5C4,
        subUnitId: var_core_value_sig1617,
        unitId: var_core_value_sig4169
      } = this._context,
      var_core_value_sig6D19 = this._injector["get"](var_core_value_sigDB33).getDrawingOrder(var_core_value_sig4169, var_core_value_sig1617),
      var_core_value_sig279C = var_core_value_sig6D19.indexOf(var_core_value_sigC5C4);
    if (var_core_value_sig279C < 0) throw Error("Sheet chart drawing not found: " + var_core_value_sigC5C4);
    if (var_core_value_sig884B(var_core_value_sig4592, var_core_value_sig6D19.length) !== var_core_value_sig279C && !this._injector["get"](var_core_value_sig4B27).syncExecuteCommand(var_core_value_sig9A5B.id, {
      unitId: var_core_value_sig4169,
      subUnitId: var_core_value_sig1617,
      drawingIds: [var_core_value_sigC5C4],
      zOrder: var_core_value_sig4592
    })) throw Error("Failed to update Sheet chart z-order.");
  }
  resolveData(var_core_value_sigAC51, var_core_value_sig8986) {
    let var_core_value_sigCAF7 = this._getChartModel(),
      var_core_value_sigED1C = var_core_value_sig8986 ? this.resolveSource(var_core_value_sig8986) : undefined;
    return var_core_value_sig2637(var_core_value_sigCAF7, var_core_value_sigAC51, var_core_value_sigED1C == null ? undefined : var_core_value_sigED1C.dataSet);
  }
  resolveSource(var_core_value_sig726E) {
    let {
        rangeInfo: var_core_value_sig2CD3
      } = this._resolveSourceRange(var_core_value_sig726E),
      var_core_value_sig038E = this._injector["get"](J).inferInitialChartSource(var_core_value_sig2CD3, this._getChartModel().chartType);
    return {
      dataSet: var_core_value_sig038E.dataSet,
      isRowDirection: var_core_value_sig038E.mapping["isRowDirection"]
    };
  }
  commitHost(var_core_value_sigAA1E) {
    let var_core_value_sigC9F5 = this._injector["get"](var_core_value_sig4B27),
      {
        chartId: var_core_value_sig7EEA,
        subUnitId: var_core_value_sig59CE1,
        unitId: var_core_value_sig33C8
      } = this._context;
    if (var_core_value_sigAA1E.source !== undefined) {
      let {
        rangeInfo: var_core_value_sig77EE
      } = this._resolveSourceRange(var_core_value_sigAA1E.source);
      if (!var_core_value_sigC9F5.syncExecuteCommand(Jt.id, {
        unitId: var_core_value_sig33C8,
        chartModelId: var_core_value_sig7EEA,
        range: var_core_value_sig77EE
      })) throw Error("Failed to update Sheet chart source.");
    }
    if (var_core_value_sigAA1E.layout !== undefined) {
      let var_core_value_sig9F76 = [],
        var_core_value_sigB008 = $t({
          unitId: var_core_value_sig33C8,
          subUnitId: var_core_value_sig59CE1,
          chartId: var_core_value_sig7EEA,
          injector: this._injector
        }, var_core_value_sigAA1E.layout, var_core_value_sig9F76);
      if (var_core_value_sigB008 || Cn(var_core_value_sig9F76, "Invalid Sheet chart layout."), !(var_core_value_sigB008 && var_core_value_sigC9F5.syncExecuteCommand(var_core_value_sigC860.id, {
        unitId: var_core_value_sig33C8,
        drawings: [var_core_value_sigB008]
      }))) throw Error("Failed to update Sheet chart layout.");
    }
  }
  remove() {
    let {
      chartId: var_core_value_sig957F,
      subUnitId: var_core_value_sig803B,
      unitId: var_core_value_sig5830
    } = this._context;
    return this._injector["get"](var_core_value_sig4B27).executeCommand(var_core_value_sig7A5E.id, {
      unitId: var_core_value_sig5830,
      drawings: [{
        unitId: var_core_value_sig5830,
        subUnitId: var_core_value_sig803B,
        drawingId: var_core_value_sig957F,
        drawingType: var_core_value_sig1FF6.DRAWING_CHART
      }]
    });
  }
  _resolveSourceRange(var_core_value_sig4A7C) {
    let {
        subUnitId: var_core_value_sigF975,
        unitId: var_core_value_sigCDAF
      } = this._context,
      var_core_value_sigA298 = this._injector["get"](J),
      var_core_value_sig0B40 = this._getChartModel(),
      var_core_value_sig330B = Qt(this._injector, var_core_value_sigCDAF);
    if (!var_core_value_sig330B) throw Error("Workbook not found: " + var_core_value_sigCDAF);
    let var_core_value_sig3625 = [],
      var_core_value_sig0B4E = on(var_core_value_sig4A7C, {
        unitId: var_core_value_sigCDAF,
        subUnitId: var_core_value_sigF975,
        workbook: var_core_value_sig330B,
        resolveAutoIsRowDirection: var_core_value_sig8721 => var_core_value_sigA298.inferInitialChartMapping(var_core_value_sig8721, var_core_value_sig0B40.chartType).isRowDirection
      }, var_core_value_sig3625);
    return var_core_value_sig0B4E || Cn(var_core_value_sig3625, "Invalid Sheet chart source."), {
      rangeInfo: var_core_value_sig0B4E.kind === "range" ? var_core_value_sig0B4E.rangeInfo : var_core_value_sig0B4E.ranges
    };
  }
  _getChartModel() {
    let {
        chartId: var_core_value_sig0E9F
      } = this._context,
      var_core_value_sigE5BA = this._injector["get"](J).getChartModel(var_core_value_sig0E9F);
    if (!var_core_value_sigE5BA) throw Error("Chart\x20not\x20found:\x20" + var_core_value_sig0E9F);
    return var_core_value_sigE5BA;
  }
};
function Cn(var_core_value_sigA975, var_core_value_sig1263) {
  throw Error(var_core_value_sigA975.map(({
    message: var_core_value_sig4A83
  }) => var_core_value_sig4A83).join(";\x20") || var_core_value_sig1263);
}
const wn = Number.parseInt(1788764280),
  Tn = ["2", "4", "268435460"],
  En = ["all"],
  Dn = [];
function On(var_core_value_sig457C) {
  let {
    ls: var_core_value_sigA4E6,
    pbk: var_core_value_sig934F
  } = var_core_value_sig457C.get(var_core_value_sig3A41).getConfig(var_core_value_sig09C4) ?? {};
  if (!var_core_value_sigA4E6 || !var_core_value_sig934F) return Tn;
  let var_core_value_sig74A7 = var_core_value_sigC3D3(var_core_value_sigA4E6, var_core_value_sig934F),
    var_core_value_sig3685 = var_core_value_sig74A7.message;
  return var_core_value_sig74A7.valid && var_core_value_sigAD57(var_core_value_sig3685, "sf", wn) ? var_core_value_sig1451(var_core_value_sig3685, true, "c", En, Tn, Dn) : Tn;
}
const kn = "sheets-chart.config",
  An = {
    chartRenderMode: var_core_value_sigA578.Image
  };
function jn(var_core_value_sigC621) {
  if (Array.isArray(var_core_value_sigC621)) return {
    ranges: var_core_value_sigC621
  };
  let {
    headerRow: var_core_value_sig86D7,
    rangeInfo: var_core_value_sig431B,
    isRowDirection: var_core_value_sig5C7C
  } = var_core_value_sigC621;
  return {
    range: var_core_value_sig431B.range,
    rangeUnitId: var_core_value_sig431B.unitId,
    rangeSubUnitId: var_core_value_sig431B.subUnitId,
    ...(var_core_value_sig5C7C === undefined ? {} : {
      isRowDirection: var_core_value_sig5C7C
    }),
    ...(var_core_value_sig86D7 === undefined ? {} : {
      headerRow: var_core_value_sig86D7
    })
  };
}
function Mn(var_core_value_sig87E2) {
  let var_core_value_sig2E04 = var_core_value_sig87E2.unitId,
    var_core_value_sig2EDD = var_core_value_sig87E2.subUnitId;
  return "ranges" in var_core_value_sig87E2 ? var_core_value_sig87E2.ranges : "range" in var_core_value_sig87E2 ? {
    rangeInfo: {
      unitId: var_core_value_sig87E2.rangeUnitId ?? var_core_value_sig2E04,
      subUnitId: var_core_value_sig87E2.rangeSubUnitId ?? var_core_value_sig2EDD,
      range: var_core_value_sig87E2.range
    },
    ...(var_core_value_sig87E2.isRowDirection === undefined ? {} : {
      isRowDirection: var_core_value_sig87E2.isRowDirection
    }),
    ...(var_core_value_sig87E2.headerRow === undefined ? {} : {
      headerRow: var_core_value_sig87E2.headerRow
    })
  } : null;
}
const Nn = {
    id: "sheet.mutation.insert-chart",
    type: var_core_value_sig1DF5.MUTATION,
    handler: (var_core_value_sig27D2, var_core_value_sig355D) => {
      let {
          unitId: var_core_value_sig8B21,
          subUnitId: var_core_value_sigEB36,
          chartId: var_core_value_sig5C27,
          context: var_core_value_sigD494,
          style: var_core_value_sigBF6D,
          dataAggregation: var_core_value_sigD051
        } = var_core_value_sig355D,
        var_core_value_sig16D9 = Mn(var_core_value_sig355D);
      return var_core_value_sig16D9 ? (var_core_value_sig27D2.get(J).createChartModel(var_core_value_sig8B21, var_core_value_sigEB36, {
        rangeInfo: var_core_value_sig16D9,
        id: var_core_value_sig5C27,
        chartType: var_core_value_sig355D.chartType,
        context: var_core_value_sigD494,
        style: var_core_value_sigBF6D,
        dataAggregation: var_core_value_sigD051
      }, true), true) : false;
    }
  },
  Pn = {
    id: "sheet.mutation.remove-chart",
    type: var_core_value_sig1DF5.MUTATION,
    handler: (var_core_value_sigF378, var_core_value_sig5F6C) => {
      let {
        chartId: var_core_value_sig7E85
      } = var_core_value_sig5F6C;
      return var_core_value_sigF378.get(J).removeChartModel(var_core_value_sig7E85), true;
    }
  };
function Fn(var_core_value_sigF204) {
  var var_core_value_sig7A15;
  let var_core_value_sigEEA6 = (var_core_value_sig7A15 = var_core_value_sigF204.config) == null || (var_core_value_sig7A15 = var_core_value_sig7A15.style) == null ? undefined : var_core_value_sig7A15.backgroundColor;
  return var_core_value_sig4A48(var_core_value_sigEEA6 === undefined ? {
    backgroundColor: var_core_value_sigF204.backgroundColor ?? null
  } : {
    backgroundColor: var_core_value_sigEEA6
  });
}
function In(var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig0442, var_core_value_sig697A, var_core_value_sigDB65, var_core_value_sig045E, var_core_value_sig4524) {
  var var_core_value_sig64D5;
  let var_core_value_sig9678 = {
      x: 200,
      y: 200
    },
    var_core_value_sig5E74 = var_core_value_sigEAE1.get(var_core_value_sig6F52).getRenderUnitById(var_core_value_sig697A),
    var_core_value_sig75FC = var_core_value_sig5E74 == null ? undefined : var_core_value_sig5E74.scene["getMainViewport"]();
  if (!var_core_value_sig75FC) return var_core_value_sig9678;
  let var_core_value_sig639A = var_core_value_sigC69F.getCurrentUnitOfType(var_core_value_sig4AFB.UNIVER_SHEET);
  if ((var_core_value_sig639A == null ? undefined : var_core_value_sig639A.getUnitId()) !== var_core_value_sig697A || ((var_core_value_sig64D5 = var_core_value_sig0442.getActiveSheet()) == null ? undefined : var_core_value_sig64D5.getSheetId()) !== var_core_value_sigDB65) return var_core_value_sig9678;
  let {
    left: var_core_value_sig567C,
    top: var_core_value_sig825F,
    right: var_core_value_sig546D,
    bottom: var_core_value_sig8078
  } = var_core_value_sig75FC.viewBound;
  return ![var_core_value_sig567C, var_core_value_sig825F, var_core_value_sig546D, var_core_value_sig8078].every(Number.isFinite) || var_core_value_sig546D <= var_core_value_sig567C || var_core_value_sig8078 <= var_core_value_sig825F ? var_core_value_sig9678 : {
    x: Math.max(0, Math.round(var_core_value_sig567C + (var_core_value_sig546D - var_core_value_sig567C - var_core_value_sig045E) / 2)),
    y: Math.max(0, Math.round(var_core_value_sig825F + (var_core_value_sig8078 - var_core_value_sig825F - var_core_value_sig4524) / 2))
  };
}
const Ln = {
  type: var_core_value_sig1DF5.COMMAND,
  id: "sheet.command.insert-chart",
  handler: async (var_core_value_sigDCED, var_core_value_sig2829) => {
    var var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47;
    let {
        chartType: var_core_value_sigB64D,
        source: var_core_value_sig2407
      } = var_core_value_sig2829,
      var_core_value_sigE4D0 = On(var_core_value_sigDCED);
    if (var_core_value_sigE4D0.length !== 1 && !var_core_value_sigE4D0.includes("" + var_core_value_sigB64D)) return false;
    let var_core_value_sigD5F1 = var_core_value_sigDCED.get(var_core_value_sigD9BB),
      var_core_value_sigBC19 = var_core_value_sigEF7C(var_core_value_sigD5F1, var_core_value_sig2829);
    if (!var_core_value_sigBC19) return false;
    let var_core_value_sig4F3C = var_core_value_sigDCED.get(var_core_value_sig27B7),
      {
        unitId: var_core_value_sig8D44,
        subUnitId: var_core_value_sig1660,
        workbook: var_core_value_sigEE7B
      } = var_core_value_sigBC19,
      var_core_value_sig44DF = var_core_value_sig4F3C.ensureSkeleton(var_core_value_sig8D44, var_core_value_sig1660);
    if (!var_core_value_sig44DF) return false;
    let var_core_value_sig7E48 = var_core_value_sigDCED.get(var_core_value_sig4B27),
      var_core_value_sig7B9E = var_core_value_sigDCED.get(var_core_value_sigBF53),
      var_core_value_sig5C3B = var_core_value_sigDCED.get(var_core_value_sigC481),
      var_core_value_sig4002 = var_core_value_sigDCED.get(var_core_value_sigDB33),
      var_core_value_sig4153 = var_core_value_sigDCED.get(var_core_value_sig034D),
      var_core_value_sig2825 = var_core_value_sigDCED.get(J),
      var_core_value_sig5FD0 = var_core_value_sig2829.chartId || var_core_value_sigC7EA(),
      var_core_value_sigA7E3;
    try {
      var var_core_value_sigA784;
      var_core_value_sigA7E3 = ((var_core_value_sigA784 = var_core_value_sig2829.config) == null ? undefined : var_core_value_sigA784.context) === undefined ? undefined : var_core_value_sigAF1D(var_core_value_sig2829.config["context"]);
    } catch {
      return false;
    }
    let var_core_value_sig4406 = var_core_value_sig2825.inferInitialChartSource(var_core_value_sig2407, ((var_core_value_sig6EE2 = var_core_value_sig2829.config) == null ? undefined : var_core_value_sig6EE2.chartType) ?? var_core_value_sigB64D, var_core_value_sigA7E3),
      var_core_value_sig6806 = V(var_core_value_sig4406.dataSet, ((var_core_value_sig4CCC = var_core_value_sig2829.config) == null ? undefined : var_core_value_sig4CCC.chartType) ?? var_core_value_sigB64D, var_core_value_sig4406.mapping, var_core_value_sigA7E3),
      var_core_value_sigD4AA = var_core_value_sig2407;
    if (!Array.isArray(var_core_value_sig2407)) {
      let {
        headerRow: var_core_value_sig58AA,
        isRowDirection: var_core_value_sig84C4,
        ...var_core_value_sigB6F7
      } = var_core_value_sig2407;
      var_core_value_sigD4AA = {
        ...var_core_value_sigB6F7,
        isRowDirection: var_core_value_sig4406.mapping["isRowDirection"],
        headerRow: var_core_value_sig4406.mapping["headerRow"]
      };
    }
    let var_core_value_sigDC41 = {
        unitId: var_core_value_sig8D44,
        subUnitId: var_core_value_sig1660,
        chartId: var_core_value_sig5FD0,
        chartType: var_core_value_sigB64D,
        context: var_core_value_sig6806,
        ...jn(var_core_value_sigD4AA)
      },
      var_core_value_sigFB47 = (var_core_value_sig6E47 = var_core_value_sigDCED.get(var_core_value_sig3A41).getConfig("sheets-chart.config")) == null ? undefined : var_core_value_sig6E47.defaultChartSize,
      var_core_value_sig9B3D1 = var_core_value_sig2829.width ?? (var_core_value_sigFB47 == null ? undefined : var_core_value_sigFB47.width) ?? var_core_value_sig9FE1,
      var_core_value_sigC1CF = var_core_value_sig2829.height ?? (var_core_value_sigFB47 == null ? undefined : var_core_value_sigFB47.height) ?? var_core_value_sig2841,
      {
        x: var_core_value_sigEE12,
        y: var_core_value_sigD70C
      } = var_core_value_sig2829.position ?? In(var_core_value_sigDCED, var_core_value_sigD5F1, var_core_value_sigEE7B, var_core_value_sig8D44, var_core_value_sig1660, var_core_value_sig9B3D1, var_core_value_sigC1CF),
      var_core_value_sigF047 = {
        from: var_core_value_sig44DF.getCellIndexAndOffsetByPosition(var_core_value_sigEE12, var_core_value_sigD70C),
        to: var_core_value_sig44DF.getCellIndexAndOffsetByPosition(var_core_value_sigEE12 + var_core_value_sig9B3D1, var_core_value_sigD70C + var_core_value_sigC1CF)
      },
      var_core_value_sigC2F9 = var_core_value_sig2829.theme ? var_core_value_sig4153.getTheme(var_core_value_sig2829.theme) : var_core_value_sig4153.getDefaultTheme(),
      var_core_value_sig1F51 = Fn(var_core_value_sig2829),
      var_core_value_sig29F5 = var_core_value_sig2829.borderColor || var_core_value_sigC2F9.theme["borderColor"],
      var_core_value_sig5A51 = {
        unitId: var_core_value_sig8D44,
        subUnitId: var_core_value_sig1660,
        drawingId: var_core_value_sig5FD0,
        drawingType: var_core_value_sig1FF6.DRAWING_CHART,
        componentKey: "SheetsChartComponent",
        sheetTransform: var_core_value_sigF047,
        transform: {
          left: var_core_value_sigEE12,
          top: var_core_value_sigD70C,
          width: var_core_value_sig9B3D1,
          height: var_core_value_sigC1CF
        },
        axisAlignSheetTransform: var_core_value_sigF047,
        data: {
          border: var_core_value_sig29F5,
          background: var_core_value_sig1F51
        },
        allowTransform: true
      },
      {
        undo: var_core_value_sigF1D1,
        redo: var_core_value_sig370E,
        objects: var_core_value_sigDE14
      } = var_core_value_sig4002.getBatchAddOp([var_core_value_sig5A51]),
      var_core_value_sig02CB = var_core_value_sig5C3B.onCommandExecute({
        id: var_core_value_sig6C8C.id,
        params: {
          unitId: var_core_value_sig8D44,
          drawings: [var_core_value_sig5A51]
        }
      }),
      var_core_value_sig6CBB = [...(var_core_value_sig02CB.preRedos ?? []), {
        id: var_core_value_sig838E.id,
        params: {
          unitId: var_core_value_sig8D44,
          subUnitId: var_core_value_sig1660,
          op: var_core_value_sig370E,
          objects: var_core_value_sigDE14,
          type: var_core_value_sigB30D.INSERT
        }
      }, {
        id: var_core_value_sig8457.id,
        params: [var_core_value_sig8D44]
      }, ...var_core_value_sig02CB.redos, {
        id: Nn.id,
        params: var_core_value_sigDC41
      }],
      var_core_value_sig68DA = [{
        id: Pn.id,
        params: {
          unitId: var_core_value_sig8D44,
          subUnitId: var_core_value_sig1660,
          chartId: var_core_value_sig5FD0
        }
      }, ...(var_core_value_sig02CB.preUndos ?? []), {
        id: var_core_value_sig838E.id,
        params: {
          unitId: var_core_value_sig8D44,
          subUnitId: var_core_value_sig1660,
          op: var_core_value_sigF1D1,
          objects: var_core_value_sigDE14,
          type: var_core_value_sigB30D.REMOVE
        }
      }, {
        id: var_core_value_sig8457.id,
        params: [var_core_value_sig8D44]
      }, ...var_core_value_sig02CB.undos];
    if (var_core_value_sig2829.config) {
      let {
          unitId: var_core_value_sigB495,
          chartModelId: var_core_value_sig70D0,
          chartType: var_core_value_sig2A8A,
          style: var_core_value_sig3782,
          dataAggregation: var_core_value_sigD22E
        } = var_core_value_sig2829.config,
        var_core_value_sig3455 = {
          unitId: var_core_value_sigB495,
          chartModelId: var_core_value_sig70D0
        };
      var_core_value_sig2A8A !== undefined && (var_core_value_sig3455.chartType = var_core_value_sig2A8A), var_core_value_sig3782 !== undefined && (var_core_value_sig3455.style = var_core_value_sig3782), var_core_value_sigD22E !== undefined && (var_core_value_sig3455.dataAggregation = var_core_value_sigD22E), (var_core_value_sig2A8A !== undefined || var_core_value_sig3782 !== undefined || var_core_value_sigD22E !== undefined) && var_core_value_sig6CBB.push({
        id: Ht.id,
        params: var_core_value_sig3455
      });
    }
    return var_core_value_sig9730(var_core_value_sig6CBB, var_core_value_sig7E48).result ? (var_core_value_sig7B9E.pushUndoRedo({
      unitID: var_core_value_sig8D44,
      undoMutations: var_core_value_sig68DA,
      redoMutations: var_core_value_sig6CBB
    }), true) : false;
  }
};
var Rn = "@univerjs-pro/sheets-chart",
  zn = "1.0.0-insiders.20260907-70fc579";
let Bn = class extends var_core_value_sig854B {
  constructor(var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395, var_core_value_sig9FA0) {
    super(), this._commandService = var_core_value_sig5CEF, this._sheetInterceptorService = var_core_value_sig43D5, this._chartModelService = var_core_value_sig1395, this._sheetsChartService = var_core_value_sig9FA0, this._initCommands(), this._initCommandInterceptor();
  }
  _initCommands() {
    [Ln, Gt, Jt, Nn, Pn, Vt, Ht, qt].forEach(var_core_value_sig08BA => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig08BA)));
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_core_value_sigDBB5 => {
        if (var_core_value_sigDBB5.id === var_core_value_sig7A5E.id) {
          let {
              drawings: var_core_value_sig50AF
            } = var_core_value_sigDBB5.params,
            var_core_value_sigA942 = var_core_value_sig50AF.filter(var_core_value_sig186C => var_core_value_sig186C.drawingType === var_core_value_sig1FF6.DRAWING_CHART);
          if (var_core_value_sigA942.length === 0) return {
            preRedos: [],
            redos: [],
            preUndos: [],
            undos: []
          };
          let var_core_value_sigA621 = [],
            var_core_value_sigBBFF = [];
          return var_core_value_sigA942.forEach(var_core_value_sigD955 => {
            let {
                unitId: var_core_value_sig48BD,
                subUnitId: var_core_value_sig429F,
                drawingId: var_core_value_sigF62A
              } = var_core_value_sigD955,
              var_core_value_sig8178 = this._chartModelService["getChartModel"](var_core_value_sigF62A);
            if (!var_core_value_sig8178) return;
            let var_core_value_sigE9ED = this._sheetsChartService["getChartSourceSpec"](var_core_value_sigF62A);
            if (!var_core_value_sigE9ED) throw TypeError("Fail to get data source range info, get: " + var_core_value_sigE9ED);
            var_core_value_sigA621.push({
              id: Pn.id,
              params: {
                unitId: var_core_value_sig48BD,
                subUnitId: var_core_value_sig429F,
                chartId: var_core_value_sigF62A
              }
            });
            let {
                chartType: var_core_value_sigB577,
                context: var_core_value_sig9572,
                style: var_core_value_sigD873,
                dataAggregation: var_core_value_sigA12B
              } = var_core_value_sig8178.serialize(),
              var_core_value_sigF230 = {
                unitId: var_core_value_sig48BD,
                subUnitId: var_core_value_sig429F,
                chartId: var_core_value_sigF62A,
                chartType: var_core_value_sigB577,
                ...jn(var_core_value_sigE9ED),
                context: var_core_value_sig9572,
                style: var_core_value_sigD873,
                dataAggregation: var_core_value_sigA12B
              };
            var_core_value_sigBBFF.push({
              id: Nn.id,
              params: var_core_value_sigF230
            });
          }), {
            preRedos: var_core_value_sigA621,
            redos: [],
            preUndos: [],
            undos: var_core_value_sigBBFF
          };
        }
        return {
          preRedos: [],
          redos: [],
          preUndos: [],
          undos: []
        };
      }
    }));
  }
};
Bn = K([G(0, var_core_value_sig4B27), G(1, var_core_value_sigF549(var_core_value_sigC481)), G(2, var_core_value_sigF549(q)), G(3, var_core_value_sigF549(J))], Bn);
const Vn = "SHEET_CHART_PLUGIN";
let $ = class extends var_core_value_sig8255 {
  constructor(var_core_value_sig055E = An, var_core_value_sig7C77, var_core_value_sig9578) {
    super(), this._config = var_core_value_sig055E, this._injector = var_core_value_sig7C77, this._configService = var_core_value_sig9578;
    let {
      ...var_core_value_sigA2D3
    } = var_core_value_sig5933({}, An, this._config);
    this._configService["setConfig"](kn, var_core_value_sigA2D3);
  }
  onStarting() {
    let var_core_value_sigC218 = this._injector;
    [[q], [Lt], [zt], [J], [Bn]].forEach(var_core_value_sigCFAC => var_core_value_sigC218.add(var_core_value_sigCFAC)), var_core_value_sig300B(var_core_value_sigC218, [[q], [J], [Bn]]);
  }
};
W($, "type", var_core_value_sig4AFB.UNIVER_SHEET), W($, "pluginName", Vn), W($, "packageName", Rn), W($, "version", zn), $ = K([var_core_value_sig0224(var_core_value_sigD6D9, var_core_value_sig8E3E, var_core_value_sig2DAD), G(1, var_core_value_sigF549(var_core_value_sigC125)), G(2, var_core_value_sig3A41)], $);
export { Zt as ChartDiagnosticSeverity, q as ChartModelService, Xt as ChartSourceKind, Yt as ChartSourceOrientation, Gt as ChartUpdateConfigCommand, Vt as ChartUpdateConfigMutation, Jt as ChartUpdateSourceCommand, qt as ChartUpdateSourceConfigMutation, Ln as InsertChartCommand, Nn as InsertSheetsChartMutation, Pn as RemoveSheetsChartMutation, Y as ReplaceSheetChartConfig, kn as SHEETS_CHART_PLUGIN_CONFIG_KEY, Vn as SHEETS_CHART_PLUGIN_NAME, Sn as SheetChartConfigAdapter, J as SheetsChartService, $ as UniverSheetsChartPlugin, On as getAllowedChartTypes, en as resolveInitialChartPosition, ln as resolveSourceSeries, on as resolveSourceSpec, jn as toInsertChartMutationSource };
