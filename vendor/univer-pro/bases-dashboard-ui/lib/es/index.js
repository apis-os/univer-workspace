import {
  BASES_DASHBOARD_DEFAULT_ROW_HEIGHT as _0x204935,
  BASES_DASHBOARD_GRID_COLUMNS as _0x4b6c63,
  BaseChartRuntimeService as _0xa617fc,
  BaseDashboardResourceService as _0x32c22b,
  BaseDashboardWidgetType as _0x3bdcfa,
  CreateBaseDashboardCommand as _0xe6165b,
  DeleteBaseDashboardCommand as _0x478d1d,
  RemoveBaseDashboardWidgetCommand as _0x4f01f4,
  UniverBaseDashboardPlugin as _0x362999,
  UpdateBaseDashboardCommand as _0x43da3a,
  UpdateBasePivotViewCommand as _0x2c67a0,
  UpsertBaseDashboardWidgetCommand as _0x27038a,
  canEditBaseDashboard as _0x336c8b,
  canEditBasePivotView as _0x3f5abe,
  createBasePivotTable as _0x4ca04b,
  resolveBasePivotChartRowDirection as _0x56c275,
} from "@univerjs-pro/bases-dashboard";
import {
  ActivateBaseViewOperation as _0x217371,
  BaseUnitCollaborationStatus as _0x26355c,
  FormulaEditorPanel as _0x1b9f5b,
  IBaseDashboardUIExtensionRegistryService as _0x45ece3,
  IBaseViewUIRegistryService as _0x4ebba5,
  UniverBasesUIPlugin as _0x50fa10,
  formulaToEditorFormula as _0x2d64a1,
  normalizeEditorFormulaForConfig as _0x28bd6c,
  toFormulaMenuTables as _0x55a97b,
  toMenuFields as _0x10555f,
} from "@univerjs-pro/bases-ui";
import {
  CHART_TYPE_CATALOG as _0xc658b1,
  ChartAxisSection as _0xf07573,
  ChartColorField as _0x4167d8,
  ChartCommonDataMappingSection as _0x53e9e5,
  ChartEditBlockTitle as _0x15b4df,
  ChartEditPanel as _0x36b2e0,
  ChartEditPanelSection as _0x25420e,
  ChartEditPanelTab as _0x36e2af,
  ChartEditPanelTabs as _0x5055b1,
  ChartEditorCapability as _0x4ac154,
  ChartEditorProvider as _0xc5612c,
  ChartFunnelStyleSection as _0x48ea68,
  ChartGradientFillField as _0x1b5a04,
  ChartGridlinesAndTicksSection as _0x1f705c,
  ChartHeatmapStyleSection as _0x51bd39,
  ChartHostAdapter as _0xa6d092,
  ChartIndicatorLineSection as _0x15b182,
  ChartLegendSection as _0x3cfba2,
  ChartLineAndAreaSection as _0x306f14,
  ChartNumberFormatAtom as _0x59ba4c,
  ChartParetoSeriesSection as _0x26fcf4,
  ChartPieStyleSection as _0x2b4f12,
  ChartRadarStyleSection as _0x296644,
  ChartRelationStyleSection as _0x36c841,
  ChartSectionAccordion as _0x2a003b,
  ChartSectionAccordionContent as _0x995bb2,
  ChartSectionAccordionItem as _0x17d4a0,
  ChartSectionAccordionTrigger as _0x22a14c,
  ChartSeriesSection as _0x594563,
  ChartStackField as _0x131ef0,
  ChartStyleSection as _0xf5389a,
  ChartThemeField as _0x357490,
  ChartTitlesSection as _0x4e098f,
  ChartTrendlineSection as _0x48deb3,
  ChartTypeField as _0x2362a9,
  ChartTypeSpecificDataSection as _0x3bfd88,
  ChartTypeSpecificSetupSection as _0x458ed1,
  ChartTypeSpecificStyleSection as _0x279260,
  ChartUIService as _0xdcbe17,
  ChartViewStateRegistry as _0x1174bd,
  ChartWaterfallSetupFields as _0x26b53e,
  ChartWaterfallStyleSection as _0x53c71c,
  ChartWordCloudStyleSection as _0xf7765a,
  DEFAULT_CHART_AXIS_VALUES as _0x41c9cc,
  DEFAULT_CHART_FUNNEL_VALUES as _0x3aab08,
  DEFAULT_CHART_HEATMAP_VALUES as _0x3c4f7d,
  DEFAULT_CHART_INDICATOR_LINE_VALUES as _0x551dae,
  DEFAULT_CHART_LEGEND_VALUES as _0xff1c48,
  DEFAULT_CHART_LINE_AND_AREA_VALUES as _0x1f3d0f,
  DEFAULT_CHART_PARETO_VALUES as _0x2460ef,
  DEFAULT_CHART_PIE_VALUES as _0x14f3fd,
  DEFAULT_CHART_RADAR_VALUES as _0x227562,
  DEFAULT_CHART_RELATION_VALUES as _0x511396,
  DEFAULT_CHART_SERIES_VALUES as _0x536da1,
  DEFAULT_CHART_STYLE_VALUES as _0x375432,
  DEFAULT_CHART_TITLE_VALUES as _0x337032,
  DEFAULT_CHART_TRENDLINE_VALUES as _0x1d3c5a,
  DEFAULT_CHART_WATERFALL_SETUP_VALUES as _0x3982e8,
  DEFAULT_CHART_WATERFALL_STYLE_VALUES as _0x3eb69a,
  DEFAULT_CHART_WORD_CLOUD_VALUES as _0x2e6823,
  UniverChartUIPlugin as _0x23190a,
  buildChartTypeSelectOptions as _0x3568c3,
  chartTypeSupportsCapability as _0x3644e3,
  chartTypeSupportsLineAndAreaStyle as _0x426f80,
  useChartEditorChartType as _0x588af2,
  useChartEditorHasRightAxis as _0x3607ba,
} from "@univerjs-pro/chart-ui";
import { UniverLicensePlugin as _0x41d813 } from "@univerjs-pro/license";
import {
  ShapeFormulaService as _0x6454e8,
  UniverShapeEditorPlugin as _0x1a5cd8,
  createFormulaShapeData as _0x4400e0,
} from "@univerjs-pro/shape-editor";
import {
  BaseFieldType as _0x54c2c1,
  BaseFilterConjunction as _0x31ebd5,
  BaseFilterOperator as _0x576167,
  BaseViewType as _0x5c001e,
  DependentOn as _0x29bb40,
  Disposable as _0x2b365f,
  ICommandService as _0x534db2,
  IConfigService as _0x44696c,
  IImageIoService as _0x1a636d,
  ILogService as _0x1ea6d2,
  IPermissionService as _0x5ac54e,
  IUndoRedoService as _0x2b20fa,
  IUniverInstanceService as _0xbc7fc0,
  ImageSourceType as _0x2e62eb,
  Inject as _0x3dfd8c,
  Injector as _0x260e26,
  LocaleService as _0x523808,
  Plugin as _0x556966,
  RedoCommand as _0x3577d6,
  ThemeService as _0x59a199,
  UndoCommand as _0x234267,
  UniverInstanceType as _0x5a92c2,
  createParagraphId as _0x38a545,
  dateKit as _0x11acc9,
  generateRandomId as _0x50a363,
  merge as _0x1896d5,
  numfmt as _0x3f181c,
  touchDependencies as _0x518364,
} from "@univerjs/core";
import { UniverDocsUIPlugin as _0x310f33 } from "@univerjs/docs-ui";
import {
  AscendingIcon as _0x2e6653,
  CalendarIcon as _0x422962,
  ChartIcon as _0x43ce75,
  CloseIcon as _0x458fb3,
  DeleteIcon as _0x25347f,
  DescendingIcon as _0x15fed8,
  ExpandIcon as _0x30f3d9,
  FilterIcon as _0x4567ac,
  GripVerticalIcon as _0x3b9d17,
  IncreaseIcon as _0xeb23c,
  MoreDownIcon as _0x3a815c,
  MoreHorizontalIcon as _0x5e99bb,
  NumberIcon as _0x27548b,
  PenIcon as _0x5112a6,
  PivotTableIcon as _0x333ceb,
  RedoIcon as _0x2a1b26,
  SearchIcon as _0x20699b,
  TextIcon as _0x230e1c,
  UndoIcon as _0x5cfb91,
} from "@univerjs/icons";
import {
  combineLatest as _0x4da52b,
  map as _0x1bc37f,
  merge as _0x2441fd,
  skip as _0x8da1df,
} from "rxjs";
import { IAttachmentIoService as _0x4ec0f7 } from "@univerjs-pro/collaboration-client";
import {
  ShapeFillEnum as _0x2e9562,
  ShapeLineTypeEnum as _0x2df090,
  ShapeTypeEnum as _0x51336b,
} from "@univerjs-pro/engine-shape";
import {
  Button as _0x8e4a34,
  Checkbox as _0x4d10f1,
  DatePicker as _0x316522,
  Dialog as _0x1ee74b,
  DropdownMenu as _0x53364d,
  Input as _0x3bf9e2,
  InputNumber as _0xc03a68,
  MultipleSelect as _0x38172c,
  Segmented as _0x4ed202,
  Select as _0x1aee39,
  Textarea as _0x34f006,
  Tooltip as _0x2d416f,
  borderClassName as _0x2dc963,
  clsx as _0x54a8f6,
  scrollbarClassName as _0x5cefcd,
} from "@univerjs/design";
import {
  useDependency as _0x50ddfa,
  useObservable as _0x5c88ec,
} from "@univerjs/ui";
import {
  useCallback as _0x1f62e2,
  useEffect as _0x504fac,
  useMemo as _0x109938,
  useRef as _0x92bc33,
  useState as _0x457b1d,
} from "react";
import {
  Fragment as _0x29237f,
  jsx as _0x7cf1c3,
  jsxs as _0x191681,
} from "react/jsx-runtime";
import {
  CHART_DATA_UPDATE_ANIMATION_DURATION as _0x670fe2,
  ChartRenderMode as _0x330ba7,
  ChartThemeService as _0x25e755,
  ChartTypeBits as _0x3c86d5,
  ChartWaterfallStyleTarget as _0x2652e1,
  IChartRenderModelManagerService as _0x1bd4bd,
  RTLChartStyle as _0x39f544,
  chartBitsUtils as _0xb343f8,
  chartTypeCanUseTrendLine as _0x1ac72f,
  resolveChartRuntimeStyle as _0x497efb,
  resolveDefaultChartHostFrameStyle as _0x43ea8d,
  toChartModelUpdate as _0x588d71,
} from "@univerjs-pro/engine-chart";
import {
  PivotCellStyleTypeEnum as _0xcacff9,
  PivotDataFieldDataTypeEnum as _0x3d8c8e,
  PivotDataFieldSortOperatorEnum as _0x30b35f,
  PivotFilterTypeEnum as _0x20ef44,
  PivotLayoutTypeEnum as _0xb4eeaf,
  PivotSubtotalPositionEnum as _0x3dc3b4,
  PivotSubtotalTypeEnum as _0x39cc3f,
  PivotTableFiledAreaEnum as _0x1f286e,
  PivotTableValuePositionEnum as _0x323af2,
  isErrorValue as _0x35dee4,
  isPrefixValue as _0x2b780d,
} from "@univerjs-pro/engine-pivot";
var Un = "@univerjs-pro/bases-dashboard-ui",
  Wn = "1.0.0-insiders.20260907-70fc579";
const Gn = {};
function Kn(_0x4852d3, _0x165d29) {
  let _0x228eee = _0x50ddfa(_0x5ac54e);
  return _0x5c88ec(
    () =>
      _0x228eee.permissionPointUpdate$["pipe"](
        _0x1bc37f(() => _0x336c8b(_0x228eee, _0x4852d3, _0x165d29)),
      ),
    _0x336c8b(_0x228eee, _0x4852d3, _0x165d29),
    false,
    [_0x165d29, _0x228eee, _0x4852d3],
  );
}
function qn(_0x39c5db, _0xd23192, _0x2297d8) {
  let _0x1c73e2 = _0x50ddfa(_0x5ac54e);
  return _0x5c88ec(
    () =>
      _0x1c73e2.permissionPointUpdate$["pipe"](
        _0x1bc37f(() => _0x3f5abe(_0x1c73e2, _0x39c5db, _0xd23192, _0x2297d8)),
      ),
    _0x3f5abe(_0x1c73e2, _0x39c5db, _0xd23192, _0x2297d8),
    false,
    [_0x1c73e2, _0xd23192, _0x39c5db, _0x2297d8],
  );
}
function Jn(_0x3cd0c3, _0x42cfbf = "cover") {
  return {
    backgroundImage: "url(" + JSON.stringify(_0x3cd0c3) + ")",
    backgroundPosition: _0x42cfbf === "repeat" ? "0 0" : "center",
    backgroundRepeat: _0x42cfbf === "repeat" ? "repeat" : "no-repeat",
    backgroundSize: _0x42cfbf === "cover" ? "cover" : "auto",
  };
}
const Yn = {
    alignment: "left",
    currency: "USD",
    decimalPlaces: 0,
    fontSize: 40,
    fontSizeMode: "auto",
    numberFormat: "general",
  },
  Xn = { CNY: "¥", EUR: "€", USD: "$" };
function Zn(_0x5c52a1) {
  var _0x194fe5;
  let _0x160df8 = tr(
    ((_0x194fe5 = _0x5c52a1.shapeData["formulaBinding"]) == null ||
    (_0x194fe5 = _0x194fe5.numberFormat) == null
      ? undefined
      : _0x194fe5.pattern) ?? "",
  );
  return { ...Yn, ..._0x160df8, ..._0x5c52a1.appearance };
}
function Qn(_0x51d682, _0xd6d7fa) {
  let _0x25cf6c = { ..._0x51d682.appearance, ..._0xd6d7fa },
    _0x87d8c4 = Zn({ ..._0x51d682, appearance: _0x25cf6c }),
    _0x136d57 = _0x51d682.shapeData["formulaBinding"] ?? { formula: "" };
  return {
    ..._0x51d682,
    appearance: _0x25cf6c,
    shapeData: {
      ..._0x51d682.shapeData,
      formulaBinding: {
        ..._0x136d57,
        numberFormat: {
          pattern: $n(
            _0x87d8c4.numberFormat,
            _0x87d8c4.decimalPlaces,
            _0x87d8c4.currency,
          ),
        },
      },
    },
  };
}
function $n(_0x1beef5, _0x4adc20, _0x88626d) {
  let _0x1a6e4f = Math.max(0, Math.min(8, Math.round(_0x4adc20))),
    _0x2d40d3 = _0x1a6e4f ? "." + "0"["repeat"](_0x1a6e4f) : "";
  switch (_0x1beef5) {
    case "number":
      return "0" + _0x2d40d3;
    case "percent":
      return "0" + _0x2d40d3 + "%";
    case "currency":
      return (Xn[_0x88626d] ?? _0x88626d) + "#,##0" + _0x2d40d3;
    case "grouped":
      return "#,##0" + _0x2d40d3;
    case "compact":
    case "general":
      return "General";
  }
}
function er(_0x31d476, _0x313b68, _0x5b6202) {
  return _0x5b6202.numberFormat !== "compact" ||
    typeof _0x313b68 != "number" ||
    !Number.isFinite(_0x313b68)
    ? _0x31d476
    : new Intl["NumberFormat"](undefined, {
        notation: "compact",
        minimumFractionDigits: _0x5b6202.decimalPlaces ?? 0,
        maximumFractionDigits: _0x5b6202.decimalPlaces ?? 0,
      }).format(_0x313b68);
}
function tr(_0x1e1777) {
  var _0x3f5a49, _0x2e3abf;
  if (!_0x1e1777 || _0x1e1777 === "General") return {};
  let _0x18fbeb = _0x1e1777.match(/\.([0#]+)/),
    _0x4ea75c =
      (_0x18fbeb == null || (_0x3f5a49 = _0x18fbeb[1]) == null
        ? undefined
        : _0x3f5a49.length) ?? 0;
  if (_0x1e1777.includes("%"))
    return { decimalPlaces: _0x4ea75c, numberFormat: "percent" };
  let _0xf6c362 =
    (_0x2e3abf = Object.entries(Xn).find(([, _0x55ed1a]) =>
      _0x1e1777.includes(_0x55ed1a),
    )) == null
      ? undefined
      : _0x2e3abf[0];
  return _0xf6c362
    ? {
        currency: _0xf6c362,
        decimalPlaces: _0x4ea75c,
        numberFormat: "currency",
      }
    : {
        decimalPlaces: _0x4ea75c,
        numberFormat: _0x1e1777.includes(",") ? "grouped" : "number",
      };
}
const nr = { center: "center", left: "flex-start", right: "flex-end" };
function rr({ dashboardId: _0x3dc23d, unitId: _0x5330e0, widget: _0x2eafc8 }) {
  var _0x11dcde,
    _0x43b619,
    _0x449c19,
    _0x59598e,
    _0x137703,
    _0x50fdc5,
    _0xc868bc,
    _0x2d1817,
    _0x43bd8f;
  let _0x201c71 = _0x50ddfa(_0x6454e8),
    _0x3213d = _0x50ddfa(_0x1a636d),
    _0x1fa681 = _0x50ddfa(_0x523808),
    _0x2f100e = _0x109938(
      () => ({
        hostType: _0x5a92c2.UNIVER_BASE,
        unitId: _0x5330e0,
        subUnitId: _0x3dc23d,
        shapeId: _0x2eafc8.id,
      }),
      [_0x3dc23d, _0x5330e0, _0x2eafc8.id],
    ),
    [_0x544709, _0x2e46c9] = _0x457b1d(() =>
      _0x201c71.getPresentation(_0x2f100e),
    ),
    [_0x422281, _0x25dd0b] = _0x457b1d(() => {
      var _0x5170e2;
      return (_0x5170e2 = _0x201c71.getResult(_0x2f100e)) == null
        ? undefined
        : _0x5170e2.value;
    }),
    [_0xda7098, _0x12e9b8] = _0x457b1d(),
    _0x238178 = _0x92bc33(null),
    _0x5adc64 = _0x92bc33(null),
    _0x16ce9f = Zn(_0x2eafc8);
  (_0x504fac(() => {
    let _0x35240f = _0x201c71.presentationChanged$["subscribe"]((_0x46fbd3) => {
      _0x46fbd3.unitId === _0x5330e0 &&
        _0x46fbd3.subUnitId === _0x3dc23d &&
        _0x46fbd3.shapeId === _0x2eafc8.id &&
        (_0x2e46c9(_0x46fbd3.presentation),
        _0x25dd0b(_0x46fbd3.result["value"]));
    });
    return () => _0x35240f.unsubscribe();
  }, [_0x3dc23d, _0x201c71, _0x2f100e, _0x5330e0, _0x2eafc8.id]),
    _0x504fac(() => {
      let _0x9bb81a = _0x16ce9f.backgroundImage;
      if (!_0x9bb81a || _0x9bb81a.sourceType !== _0x2e62eb.UUID) return;
      let _0x514a51 = _0x3213d.getImageSourceCache(
        _0x9bb81a.source,
        _0x9bb81a.sourceType,
      );
      if (_0x514a51 != null && _0x514a51.src) return;
      let _0x4a3ae3 = true;
      return (
        _0x3213d
          .getImage(_0x9bb81a.source)
          .then((_0x3d1fbd) => {
            _0x4a3ae3 &&
              _0x12e9b8({ source: _0x9bb81a.source, value: _0x3d1fbd });
          })
          .catch(() => undefined),
        () => {
          _0x4a3ae3 = false;
        }
      );
    }, [_0x16ce9f.backgroundImage, _0x3213d]));
  let _0x266060 =
      ((_0x11dcde = _0x16ce9f.backgroundImage) == null
        ? undefined
        : _0x11dcde.sourceType) === _0x2e62eb.UUID
        ? (((_0x43b619 = _0x3213d.getImageSourceCache(
            _0x16ce9f.backgroundImage["source"],
            _0x16ce9f.backgroundImage["sourceType"],
          )) == null
            ? undefined
            : _0x43b619.src) ??
          ((_0xda7098 == null ? undefined : _0xda7098.source) ===
          _0x16ce9f.backgroundImage["source"]
            ? _0xda7098.value
            : ""))
        : (((_0x449c19 = _0x16ce9f.backgroundImage) == null
            ? undefined
            : _0x449c19.source) ?? ""),
    _0x14479e = _0x2eafc8.shapeData["shapeText"],
    _0x1252ac =
      _0x14479e && "dataModel" in _0x14479e
        ? (_0x59598e = _0x14479e.dataModel) == null
          ? undefined
          : _0x59598e.doc
        : undefined,
    _0x248b57 = er(
      (_0x544709 == null ? undefined : _0x544709.text) ?? "",
      _0x422281,
      _0x16ce9f,
    ),
    _0x330b5c = _0x2eafc8.shapeData["fill"],
    _0x4556d3 = _0x2eafc8.shapeData["stroke"],
    _0x4604c8 =
      _0x1252ac == null || (_0x137703 = _0x1252ac.documentStyle) == null
        ? undefined
        : _0x137703.textStyle,
    _0x51bb5e = _0x2eafc8.description ?? _0x2eafc8.title ?? "";
  return (
    _0x504fac(() => {
      let _0x1ec895 = _0x238178.current,
        _0x3763b3 = _0x5adc64.current;
      if (!_0x1ec895 || !_0x3763b3) return;
      let _0x255d5b = () => {
        if (
          _0x16ce9f.fontSizeMode === "custom" ||
          !_0x1ec895.clientWidth ||
          !_0x1ec895.clientHeight
        ) {
          _0x3763b3.style["fontSize"] = _0x16ce9f.fontSize + "px";
          return;
        }
        let _0x1cf05a = 1,
          _0x41fa71 = 72,
          _0x179835 = _0x1cf05a;
        for (; _0x1cf05a <= _0x41fa71;) {
          let _0x476acd = Math.floor((_0x1cf05a + _0x41fa71) / 2);
          ((_0x3763b3.style["fontSize"] = _0x476acd + "px"),
            _0x3763b3.scrollWidth <= _0x1ec895.clientWidth &&
            _0x3763b3.scrollHeight <= _0x1ec895.clientHeight
              ? ((_0x179835 = _0x476acd), (_0x1cf05a = _0x476acd + 1))
              : (_0x41fa71 = _0x476acd - 1));
        }
        _0x3763b3.style["fontSize"] = _0x179835 + "px";
      };
      if ((_0x255d5b(), typeof ResizeObserver > "u")) return;
      let _0x5ae198 = new ResizeObserver(_0x255d5b);
      return (_0x5ae198.observe(_0x1ec895), () => _0x5ae198.disconnect());
    }, [_0x16ce9f.fontSize, _0x16ce9f.fontSizeMode, _0x248b57]),
    _0x191681("div", {
      "data-dashboard-formula-shape": _0x2eafc8.id,
      className:
        "univer-relative\x20univer-box-border\x20univer-flex\x20univer-h-full\x20univer-w-full\x20univer-flex-col\x20univer-justify-center\x20univer-overflow-hidden\x20univer-bg-gray-0\x20univer-p-4\x20univer-text-gray-1000\x20dark:!univer-bg-gray-900\x20dark:!univer-text-gray-50",
      style: {
        backgroundColor:
          ((_0x50fdc5 = _0x2eafc8.appearance) == null
            ? undefined
            : _0x50fdc5.backgroundColor) ??
          ((_0x330b5c == null ? undefined : _0x330b5c.fillType) ===
          _0x2e9562.SolidFill
            ? (_0x330b5c.color ?? undefined)
            : undefined),
        border:
          (_0x4556d3 == null ? undefined : _0x4556d3.lineStrokeType) ===
          _0x2df090.SolidLine
            ? (_0x4556d3.width ?? 1) +
              "px solid " +
              (_0x4556d3.color ?? "currentColor")
            : undefined,
        borderRadius:
          _0x2eafc8.shapeType === _0x51336b.RoundRect ? 12 : undefined,
        color:
          ((_0xc868bc = _0x2eafc8.appearance) == null
            ? undefined
            : _0xc868bc.textColor) ??
          (_0x544709 == null ? undefined : _0x544709.color) ??
          (_0x4604c8 == null || (_0x2d1817 = _0x4604c8.cl) == null
            ? undefined
            : _0x2d1817.rgb) ??
          undefined,
        fontWeight: _0x4604c8 != null && _0x4604c8.bl ? 600 : undefined,
        textAlign: _0x16ce9f.alignment,
      },
      children: [
        _0x266060 &&
          _0x7cf1c3("img", {
            src: _0x266060,
            alt: "",
            "aria-hidden": "true",
            className:
              "univer-pointer-events-none univer-absolute univer-inset-0 univer-h-full univer-w-full",
            style: {
              objectFit:
                ((_0x43bd8f = _0x16ce9f.backgroundImage) == null
                  ? undefined
                  : _0x43bd8f.fit) ?? "cover",
            },
          }),
        _0x191681("div", {
          className:
            "univer-relative univer-z-10 univer-flex univer-min-h-0 univer-w-full univer-flex-1",
          children: [
            _0x51bb5e &&
              _0x7cf1c3("div", {
                "data-dashboard-formula-description": true,
                className:
                  "univer-absolute univer-inset-x-0 univer-top-0 univer-w-full univer-truncate univer-text-sm univer-font-medium univer-opacity-80",
                children: _0x51bb5e,
              }),
            _0x7cf1c3("div", {
              ref: _0x238178,
              "data-dashboard-formula-value": true,
              "aria-label":
                _0x51bb5e ||
                _0x1fa681.t("bases-dashboard-ui.dashboard.formulaShape"),
              className:
                "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-flex-1 univer-items-center univer-overflow-hidden",
              style: { justifyContent: nr[_0x16ce9f.alignment] },
              children: _0x7cf1c3("span", {
                ref: _0x5adc64,
                "data-dashboard-formula-value-text": true,
                "data-font-size-mode": _0x16ce9f.fontSizeMode,
                className:
                  "univer-inline-block univer-max-w-full univer-whitespace-nowrap univer-leading-none",
                children: _0x248b57,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function ir(_0x279c2a, _0x46ba49, _0x24011b, _0x583436) {
  let _0x3c595b = { ..._0x279c2a };
  if (_0x46ba49.includes("w")) {
    let _0x13cfed = _0x279c2a.column + _0x279c2a.columnSpan;
    ((_0x3c595b.column = Math.max(
      0,
      Math.min(_0x13cfed - 1, _0x279c2a.column + _0x24011b),
    )),
      (_0x3c595b.columnSpan = _0x13cfed - _0x3c595b.column));
  } else
    _0x46ba49.includes("e") &&
      (_0x3c595b.columnSpan = Math.max(
        1,
        Math.min(
          _0x4b6c63 - _0x279c2a.column,
          _0x279c2a.columnSpan + _0x24011b,
        ),
      ));
  if (_0x46ba49.includes("n")) {
    let _0x5427a9 = _0x279c2a.row + _0x279c2a.rowSpan;
    ((_0x3c595b.row = Math.max(
      0,
      Math.min(_0x5427a9 - 1, _0x279c2a.row + _0x583436),
    )),
      (_0x3c595b.rowSpan = _0x5427a9 - _0x3c595b.row));
  } else
    _0x46ba49.includes("s") &&
      (_0x3c595b.rowSpan = Math.max(1, _0x279c2a.rowSpan + _0x583436));
  return _0x3c595b;
}
function ar(_0x15fe59) {
  let _0x43906c = Math.max(
    1,
    Math.min(_0x4b6c63, Math.round(_0x15fe59.columnSpan)),
  );
  return {
    column: Math.max(
      0,
      Math.min(_0x4b6c63 - _0x43906c, Math.round(_0x15fe59.column)),
    ),
    row: Math.max(0, Math.round(_0x15fe59.row)),
    columnSpan: _0x43906c,
    rowSpan: Math.max(1, Math.round(_0x15fe59.rowSpan)),
  };
}
function or(_0x42508f, _0x2132de, _0x2d03d1) {
  let _0x1d6a03 = new Map(_0x42508f),
    _0x5e04f1 = ar(_0x2d03d1);
  _0x1d6a03.set(_0x2132de, _0x5e04f1);
  let _0x3570f7 = [[_0x2132de, _0x5e04f1]];
  for (let [_0x55a694, _0x277931] of _0x1d6a03) {
    if (_0x55a694 === _0x2132de) continue;
    let _0x1af48b = ar(_0x277931);
    for (; _0x3570f7.some(([, _0xebd449]) => cr(_0x1af48b, _0xebd449));)
      _0x1af48b = { ..._0x1af48b, row: _0x1af48b.row + 1 };
    for (; _0x1af48b.row > 0;) {
      let _0x4f83a4 = { ..._0x1af48b, row: _0x1af48b.row - 1 };
      if (_0x3570f7.some(([, _0x55c51d]) => cr(_0x4f83a4, _0x55c51d))) break;
      _0x1af48b = _0x4f83a4;
    }
    (_0x3570f7.push([_0x55a694, _0x1af48b]),
      _0x1d6a03.set(_0x55a694, _0x1af48b));
  }
  return _0x1d6a03;
}
function sr(_0x441a44, _0x424b9e, _0x30b521, _0x2d6653 = 56, _0x770140 = 22) {
  return _0x441a44 < _0x424b9e + _0x2d6653
    ? -Math.ceil(
        _0x770140 * (1 - Math.max(0, _0x441a44 - _0x424b9e) / _0x2d6653),
      )
    : _0x441a44 > _0x30b521 - _0x2d6653
      ? Math.ceil(
          _0x770140 * (1 - Math.max(0, _0x30b521 - _0x441a44) / _0x2d6653),
        )
      : 0;
}
function cr(_0x2bf349, _0x50ac0e) {
  return (
    _0x2bf349.column < _0x50ac0e.column + _0x50ac0e.columnSpan &&
    _0x2bf349.column + _0x2bf349.columnSpan > _0x50ac0e.column &&
    _0x2bf349.row < _0x50ac0e.row + _0x50ac0e.rowSpan &&
    _0x2bf349.row + _0x2bf349.rowSpan > _0x50ac0e.row
  );
}
const lr = [
  {
    direction: "nw",
    className:
      "univer-left-px\x20univer-top-px\x20-univer-translate-x-1/2\x20-univer-translate-y-1/2\x20univer-cursor-nwse-resize",
  },
  {
    direction: "n",
    className:
      "-univer-top-1\x20univer-left-2\x20univer-right-2\x20univer-h-2\x20univer-cursor-ns-resize",
  },
  {
    direction: "ne",
    className:
      "univer-right-px\x20univer-top-px\x20univer-translate-x-1/2\x20-univer-translate-y-1/2\x20univer-cursor-nesw-resize",
  },
  {
    direction: "e",
    className:
      "-univer-right-1 univer-bottom-2 univer-top-2 univer-w-2 univer-cursor-ew-resize",
  },
  {
    direction: "se",
    className:
      "univer-bottom-px univer-right-px univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nwse-resize",
  },
  {
    direction: "s",
    className:
      "-univer-bottom-1 univer-left-2 univer-right-2 univer-h-2 univer-cursor-ns-resize",
  },
  {
    direction: "sw",
    className:
      "univer-bottom-px univer-left-px -univer-translate-x-1/2 univer-translate-y-1/2 univer-cursor-nesw-resize",
  },
  {
    direction: "w",
    className:
      "-univer-left-1 univer-bottom-2 univer-top-2 univer-w-2 univer-cursor-ew-resize",
  },
];
function ur({
  dashboard: _0x4344fe,
  dragLabel: _0x4d2b53,
  editable: _0x3944dc = true,
  onLayoutsCommit: _0x27cb3b,
  onSelectWidget: _0x5096c8,
  renderWidget: _0x306183,
  renderWidgetActions: _0x252dac,
  resizeLabel: _0x2b7e54,
  selectedWidgetId: _0x220e3d,
  widgetLabel: _0x3cb853,
}) {
  let _0x2f9b45 = _0x92bc33(null),
    _0x1c005e = _0x92bc33(null),
    [_0x3ef01d, _0x512050] = _0x457b1d(false),
    _0x70bf93 = _0x109938(
      () =>
        new Map(
          _0x4344fe.widgetOrder["flatMap"]((_0x550ef7) => {
            let _0xa14880 = _0x4344fe.widgets[_0x550ef7];
            return _0xa14880 ? [[_0x550ef7, _0xa14880.layout]] : [];
          }),
        ),
      [_0x4344fe],
    ),
    [_0x3decb1, _0x25a52d] = _0x457b1d(_0x70bf93);
  (_0x504fac(() => {
    _0x1c005e.current || _0x25a52d(_0x70bf93);
  }, [_0x70bf93]),
    _0x504fac(() => {
      if (!_0x3ef01d) return;
      let _0x1c43a1 = (_0x207cc4) => {
          let _0x512703 = _0x2f9b45.current;
          if (!_0x512703) return null;
          let _0x213fe8 = _0x512703.getBoundingClientRect(),
            _0x168746 = Math.max(
              1,
              (_0x213fe8.width - 8 * (_0x4b6c63 - 1)) / _0x4b6c63,
            ),
            _0x433726 = Math.round(
              (_0x512703.scrollTop - _0x207cc4.startScrollTop) /
                (_0x204935 + 8),
            ),
            _0x25c30d = Math.round(
              (_0x207cc4.pointerX - _0x207cc4.startX) / (_0x168746 + 8),
            ),
            _0x1f2582 =
              Math.round(
                (_0x207cc4.pointerY - _0x207cc4.startY) / (_0x204935 + 8),
              ) + _0x433726,
            _0x38fb73 =
              _0x207cc4.mode === "move"
                ? {
                    ..._0x207cc4.initial,
                    column: _0x207cc4.initial["column"] + _0x25c30d,
                    row: _0x207cc4.initial["row"] + _0x1f2582,
                  }
                : ir(
                    _0x207cc4.initial,
                    _0x207cc4.resizeDirection ?? "se",
                    _0x25c30d,
                    _0x1f2582,
                  ),
            _0x4ef033 = or(_0x207cc4.initialLayouts, _0x207cc4.id, _0x38fb73);
          return (_0x25a52d(_0x4ef033), _0x4ef033);
        },
        _0x318517 = (_0x16ffaf) => {
          let _0x752d7 = _0x1c005e.current;
          if (!_0x752d7) return;
          let _0x2c9821 = {
            ..._0x752d7,
            pointerX: _0x16ffaf.clientX,
            pointerY: _0x16ffaf.clientY,
          };
          _0x1c005e.current = _0x2c9821;
        },
        _0x5364af = () => {
          let _0x26b7dc = _0x1c005e.current,
            _0x22712e = _0x26b7dc ? _0x1c43a1(_0x26b7dc) : null;
          ((_0x1c005e.current = null),
            _0x512050(false),
            _0x22712e && _0x27cb3b(_0x22712e));
        },
        _0x430198 = 0,
        _0x599af9 = () => {
          let _0x2e6c99 = _0x2f9b45.current,
            _0x265731 = _0x1c005e.current;
          if (_0x2e6c99 && _0x265731) {
            let _0x15012b = _0x2e6c99.getBoundingClientRect(),
              _0x54f162 = sr(
                _0x265731.pointerY,
                _0x15012b.top,
                _0x15012b.bottom,
              );
            (_0x54f162 !== 0 && (_0x2e6c99.scrollTop += _0x54f162),
              _0x1c43a1(_0x265731),
              (_0x430198 = requestAnimationFrame(_0x599af9)));
          }
        };
      return (
        (_0x430198 = requestAnimationFrame(_0x599af9)),
        window.addEventListener("pointermove", _0x318517),
        window.addEventListener("pointerup", _0x5364af),
        () => {
          (cancelAnimationFrame(_0x430198),
            window.removeEventListener("pointermove", _0x318517),
            window.removeEventListener("pointerup", _0x5364af));
        }
      );
    }, [_0x3ef01d, _0x27cb3b]));
  let _0x105f8b = Math.max(
      8,
      ...Array.from(_0x3decb1.values()).map(
        (_0x18eee3) => _0x18eee3.row + _0x18eee3.rowSpan,
      ),
    ),
    _0x5bea6d = (_0x476693, _0x8f19e4, _0x381a84, _0x1ffc8b) => {
      (_0x476693.preventDefault(), _0x476693.stopPropagation());
      let _0x87f378 = _0x2f9b45.current,
        _0x309084 = {
          id: _0x8f19e4.id,
          mode: _0x381a84,
          pointerX: _0x476693.clientX,
          pointerY: _0x476693.clientY,
          startX: _0x476693.clientX,
          startY: _0x476693.clientY,
          startScrollTop:
            (_0x87f378 == null ? undefined : _0x87f378.scrollTop) ?? 0,
          initial: _0x3decb1.get(_0x8f19e4.id) ?? _0x8f19e4.layout,
          initialLayouts: new Map(_0x3decb1),
          resizeDirection: _0x1ffc8b,
        };
      ((_0x1c005e.current = _0x309084), _0x512050(true));
    };
  return _0x7cf1c3("div", {
    ref: _0x2f9b45,
    "data-dashboard-scroll-container": true,
    className: _0x54a8f6(
      "univer-h-full univer-min-h-0 univer-overflow-auto univer-bg-gray-100 univer-p-3 dark:!univer-bg-gray-950",
      _0x5cefcd,
    ),
    onClick: _0x3944dc
      ? (_0x17a5c1) => {
          if (
            !(_0x17a5c1.target instanceof Node) ||
            !_0x17a5c1.currentTarget["contains"](_0x17a5c1.target)
          )
            return;
          let _0x91eda6 =
            _0x17a5c1.target instanceof Element
              ? _0x17a5c1.target
              : _0x17a5c1.target["parentElement"];
          (_0x91eda6 != null && _0x91eda6.closest("[data-dashboard-widget]")) ||
            _0x5096c8 == null ||
            _0x5096c8();
        }
      : undefined,
    children: _0x7cf1c3("div", {
      "data-dashboard-grid": true,
      className: "univer-grid univer-grid-cols-12 univer-pb-6",
      style: {
        gap: 8,
        gridAutoRows: _0x204935,
        minHeight: _0x105f8b * (_0x204935 + 8),
      },
      children: _0x4344fe.widgetOrder["map"]((_0x140f4c) => {
        var _0xbaa5a7;
        let _0x56c48f = _0x4344fe.widgets[_0x140f4c],
          _0x3e40de = _0x3decb1.get(_0x140f4c);
        return !_0x56c48f || !_0x3e40de
          ? null
          : _0x191681(
              "article",
              {
                "data-dashboard-widget": _0x56c48f.id,
                "aria-label": _0x56c48f.title ?? _0x3cb853(_0x56c48f),
                className: _0x54a8f6(
                  "univer-group univer-relative univer-flex univer-min-h-0 univer-flex-col univer-overflow-visible univer-rounded-lg univer-border univer-shadow-sm univer-transition-shadow",
                  _0x56c48f.type === _0x3bdcfa.Image ||
                    _0x56c48f.type === _0x3bdcfa.FormulaShape
                    ? "univer-bg-transparent dark:!univer-bg-transparent"
                    : "univer-bg-gray-0 dark:!univer-bg-gray-900",
                  _0x3944dc && _0x220e3d === _0x56c48f.id
                    ? "univer-z-10\x20univer-border-primary-500\x20univer-ring-1\x20univer-ring-primary-500"
                    : "univer-border-gray-200\x20dark:!univer-border-gray-700",
                ),
                style: {
                  gridColumn:
                    _0x3e40de.column + 1 + " / span " + _0x3e40de.columnSpan,
                  gridRow:
                    _0x3e40de.row + 1 + "\x20/\x20span\x20" + _0x3e40de.rowSpan,
                },
                tabIndex: _0x3944dc ? 0 : undefined,
                onClick: _0x3944dc
                  ? () =>
                      _0x5096c8 == null ? undefined : _0x5096c8(_0x56c48f.id)
                  : undefined,
                onFocus: _0x3944dc
                  ? () =>
                      _0x5096c8 == null ? undefined : _0x5096c8(_0x56c48f.id)
                  : undefined,
                children: [
                  _0x3944dc &&
                    _0x7cf1c3("button", {
                      type: "button",
                      "aria-label": _0x4d2b53,
                      "data-dashboard-drag-handle": _0x56c48f.id,
                      className: _0x54a8f6(
                        "univer-pointer-events-none univer-absolute univer-left-1/2 univer-top-1 univer-z-20 univer-flex univer-h-5 univer-w-8 -univer-translate-x-1/2 univer-appearance-none univer-items-center univer-justify-center univer-border-0 univer-bg-transparent univer-p-0 univer-text-gray-400 univer-opacity-0 univer-shadow-none univer-outline-none univer-transition-opacity group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 focus:univer-pointer-events-auto focus:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
                        _0x3ef01d &&
                          ((_0xbaa5a7 = _0x1c005e.current) == null
                            ? undefined
                            : _0xbaa5a7.id) === _0x56c48f.id &&
                          _0x1c005e.current["mode"] === "move"
                          ? "univer-cursor-grabbing"
                          : "univer-cursor-grab",
                      ),
                      onPointerDown: (_0x5e27a5) =>
                        _0x5bea6d(_0x5e27a5, _0x56c48f, "move"),
                      children: _0x7cf1c3(_0x3b9d17, {
                        className: "univer-size-5 univer-rotate-90",
                        "aria-hidden": "true",
                      }),
                    }),
                  _0x3944dc &&
                    _0x7cf1c3("div", {
                      className:
                        "univer-pointer-events-none univer-absolute univer-right-1 univer-top-1 univer-z-20 univer-flex univer-items-center univer-opacity-0 univer-transition-opacity focus-within:univer-pointer-events-auto focus-within:univer-opacity-100 group-hover:univer-pointer-events-auto group-hover:univer-opacity-100 [@media(hover:none)]:univer-pointer-events-auto [@media(hover:none)]:univer-opacity-100",
                      children:
                        _0x252dac == null ? undefined : _0x252dac(_0x56c48f),
                    }),
                  _0x7cf1c3("div", {
                    className:
                      "univer-relative\x20univer-min-h-0\x20univer-flex-1\x20univer-overflow-hidden\x20univer-rounded-lg",
                    children: _0x306183(_0x56c48f),
                  }),
                  _0x3944dc &&
                    lr.map(({ className: _0x3b5778, direction: _0x5a84c8 }) => {
                      let _0x4059d5 = _0x5a84c8.length === 2;
                      return _0x7cf1c3(
                        "button",
                        {
                          type: "button",
                          "aria-label": _0x2b7e54,
                          "data-dashboard-resize-handle": _0x5a84c8,
                          "data-dashboard-resize-control": _0x4059d5
                            ? _0x5a84c8
                            : undefined,
                          "data-dashboard-resize-edge": _0x4059d5
                            ? undefined
                            : _0x5a84c8,
                          className: _0x54a8f6(
                            "univer-pointer-events-none\x20univer-absolute\x20univer-z-30\x20univer-appearance-none\x20univer-p-0\x20univer-opacity-0\x20!univer-shadow-none\x20univer-outline-none\x20univer-transition-opacity\x20group-hover:univer-pointer-events-auto\x20group-hover:univer-opacity-100\x20focus:univer-pointer-events-auto\x20focus:univer-opacity-100\x20[@media(hover:none)]:univer-pointer-events-auto\x20[@media(hover:none)]:univer-opacity-100",
                            _0x4059d5
                              ? "univer-box-content\x20univer-size-1.5\x20univer-rounded-full\x20!univer-border-2\x20!univer-border-solid\x20!univer-border-white\x20!univer-bg-primary-600"
                              : "univer-border-0\x20univer-bg-transparent",
                            _0x3b5778,
                            _0x220e3d === _0x56c48f.id &&
                              "univer-pointer-events-auto univer-opacity-100",
                          ),
                          onPointerDown: (_0x1a025f) =>
                            _0x5bea6d(
                              _0x1a025f,
                              _0x56c48f,
                              "resize",
                              _0x5a84c8,
                            ),
                        },
                        _0x5a84c8,
                      );
                    }),
                ],
              },
              _0x56c48f.id,
            );
      }),
    }),
  });
}
const dr = { alignment: "left", fontSize: 18, fontSizeMode: "auto" };
function fr(_0x5624aa) {
  return { ...dr, ..._0x5624aa.appearance };
}
function pr(_0x49131e) {
  var _0x99ad65;
  return (
    ((_0x99ad65 = _0x49131e.body) == null
      ? undefined
      : _0x99ad65.dataStream["replace"](/\r\n$/, "").replace(/\r/g, "\x0a")) ??
    ""
  );
}
function mr(_0xbaebf5, _0x2306aa) {
  var _0x173093;
  let _0x3cfc31 = _0x2306aa.replace(/\r\n|\r/g, "\x0a").split("\x0a"),
    _0x3ddcb0 = _0x3cfc31.join("\x0d") + "\x0d\x0a",
    _0x20fb4a =
      ((_0x173093 = _0xbaebf5.body) == null
        ? undefined
        : _0x173093.paragraphs) ?? [],
    _0x46c302 = new Set(_0x20fb4a.map((_0x76336) => _0x76336.paragraphId)),
    _0x6f5eff = 0,
    _0x29097c = _0x3cfc31.map((_0x1cd03a, _0x48dabb) => {
      _0x6f5eff += _0x1cd03a.length;
      let _0x53d2e1 = {
        ...(_0x20fb4a[_0x48dabb] ?? {
          startIndex: _0x6f5eff,
          paragraphId: _0x38a545(_0x46c302),
        }),
        startIndex: _0x6f5eff,
      };
      return ((_0x6f5eff += 1), _0x53d2e1);
    });
  return {
    ..._0xbaebf5,
    body: {
      ..._0xbaebf5.body,
      dataStream: _0x3ddcb0,
      paragraphs: _0x29097c,
      textRuns: [],
    },
  };
}
function hr(_0x5cc94c) {
  "@babel/helpers - typeof";
  return (
    (hr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x53e73b) {
            return typeof _0x53e73b;
          }
        : function (_0x8ce54c) {
            return _0x8ce54c &&
              typeof Symbol == "function" &&
              _0x8ce54c.constructor === Symbol &&
              _0x8ce54c !== Symbol.prototype
              ? "symbol"
              : typeof _0x8ce54c;
          }),
    hr(_0x5cc94c)
  );
}
function gr(_0x538de2, _0x242186) {
  if (hr(_0x538de2) != "object" || !_0x538de2) return _0x538de2;
  var _0x3e43e7 = _0x538de2[Symbol.toPrimitive];
  if (_0x3e43e7 !== undefined) {
    var _0x5b2c9b = _0x3e43e7.call(_0x538de2, _0x242186 || "default");
    if (hr(_0x5b2c9b) != "object") return _0x5b2c9b;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x242186 === "string" ? String : Number)(_0x538de2);
}
function _r(_0x4d4484) {
  var _0x3977a0 = gr(_0x4d4484, "string");
  return hr(_0x3977a0) == "symbol" ? _0x3977a0 : _0x3977a0 + "";
}
function vr(_0x3e0017, _0xc0cd33, _0x4f5b59) {
  return (
    (_0xc0cd33 = _r(_0xc0cd33)) in _0x3e0017
      ? Object.defineProperty(_0x3e0017, _0xc0cd33, {
          value: _0x4f5b59,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3e0017[_0xc0cd33] = _0x4f5b59),
    _0x3e0017
  );
}
function X(_0x5163a7, _0x15d461) {
  return function (_0x329100, _0x2a8561) {
    _0x15d461(_0x329100, _0x2a8561, _0x5163a7);
  };
}
function yr(_0x36cdd2, _0x23e74f, _0x441b98, _0x559dc3) {
  var _0x2aa1d7 = arguments.length,
    _0x4344be =
      _0x2aa1d7 < 3
        ? _0x23e74f
        : _0x559dc3 === null
          ? (_0x559dc3 = Object.getOwnPropertyDescriptor(_0x23e74f, _0x441b98))
          : _0x559dc3,
    _0x4e6a86;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4344be = Reflect.decorate(_0x36cdd2, _0x23e74f, _0x441b98, _0x559dc3);
  else {
    for (var _0x10656a = _0x36cdd2.length - 1; _0x10656a >= 0; _0x10656a--)
      (_0x4e6a86 = _0x36cdd2[_0x10656a]) &&
        (_0x4344be =
          (_0x2aa1d7 < 3
            ? _0x4e6a86(_0x4344be)
            : _0x2aa1d7 > 3
              ? _0x4e6a86(_0x23e74f, _0x441b98, _0x4344be)
              : _0x4e6a86(_0x23e74f, _0x441b98)) || _0x4344be);
  }
  return (
    _0x2aa1d7 > 3 &&
      _0x4344be &&
      Object.defineProperty(_0x23e74f, _0x441b98, _0x4344be),
    _0x4344be
  );
}
let br = class extends _0xdcbe17 {
  constructor(_0x52e0f0) {
    (super(_0x52e0f0), vr(this, "activeRuntimeModel", null));
  }
  executeChartUpdateConfig(_0x193566) {}
};
br = yr([X(0, _0x3dfd8c(_0x1174bd))], br);
var xr;
const Z = {
    axis: {
      ..._0x41c9cc,
      primaryGridLineVisible: false,
      secondaryGridLineVisible: true,
    },
    funnel: _0x3aab08,
    heatmap: _0x3c4f7d,
    indicatorLine: _0x551dae,
    legend: _0xff1c48,
    lineAndArea: _0x1f3d0f,
    pareto: _0x2460ef,
    pie: _0x14f3fd,
    radar: _0x227562,
    relation: { ..._0x511396, useValueAsSymbolSize: true },
    series: {
      ..._0x536da1,
      radarFillOpacity: 0.2,
      rightAxis: {
        ltr: false,
        rtl:
          ((xr = _0x39f544.allSeriesStyle) == null
            ? undefined
            : xr.rightYAxis) ?? false,
      },
    },
    style: _0x375432,
    titles: _0x337032,
    trendline: _0x1d3c5a,
    waterfall: { ..._0x3982e8, useSubtotal: true },
    waterfallStyle: _0x3eb69a,
    wordCloud: _0x2e6823,
  },
  Sr = [
    _0x3c86d5.Line,
    _0x3c86d5.Radar,
    _0x3c86d5.WordCloud,
    _0x3c86d5.Scatter,
    _0x3c86d5.Funnel,
    _0x3c86d5.Relation,
    _0x3c86d5.Sankey,
    _0x3c86d5.Heatmap,
    _0x3c86d5.Boxplot,
    _0x3c86d5.Candlestick,
    _0x3c86d5.Histogram,
    _0x3c86d5.Treemap,
    _0x3c86d5.Sunburst,
    _0x3c86d5.Gauge,
    _0x3c86d5.Chord,
  ];
function Cr(_0x45c38f) {
  let {
      config: _0x11ebc0,
      onChange: _0x45c0ae,
      runtime: _0x18d560,
      tableName: _0x17ceb3,
    } = _0x45c38f,
    _0x4e6316 = _0x50ddfa(br),
    _0x1869a2 = _0x50ddfa(_0x523808),
    [_0x204e85, _0x96a540] = _0x457b1d(_0x36e2af.Data),
    _0x315b48 = _0x109938(
      () =>
        new _0xa6d092(_0x18d560.model, {
          commit: (_0x12766a) => {
            var _0x468786;
            let _0x57d59d = _0x18d560.model,
              _0x3cdec3 = _0x588d71(_0x12766a, {
                series:
                  (_0x468786 = _0x57d59d.config) == null
                    ? undefined
                    : _0x468786.series,
                currentChartType: _0x57d59d.chartType,
                currentStyle: _0x57d59d.style,
                currentContext: _0x57d59d.context,
                currentDataAggregation: _0x57d59d.dataAggregation,
              });
            _0x45c0ae({ chart: wr(_0x11ebc0.chart, _0x3cdec3) });
          },
        }),
      [_0x11ebc0.chart, _0x45c0ae, _0x18d560],
    ),
    _0x3aeb6b = _0x109938(
      () =>
        _0x3568c3(
          _0xc658b1.map((_0x3ee752) => ({
            ..._0x3ee752,
            label: _0x1869a2.t(Or(_0x3ee752.labelId)),
          })),
        ),
      [_0x1869a2],
    );
  return _0x7cf1c3(_0xc5612c, {
    chartUIService: _0x4e6316,
    hostAdapter: _0x315b48,
    children: _0x191681("div", {
      className:
        "univer-flex univer-min-h-full univer-flex-col univer-bg-gray-0 dark:!univer-bg-gray-900",
      children: [
        _0x7cf1c3(_0x5055b1, {
          ariaLabel: _0x1869a2.t("bases-dashboard-ui.chart.common.editChart"),
          className: "univer-shrink-0 univer-px-3",
          items: [
            {
              label: _0x1869a2.t("bases-dashboard-ui.chart.common.setup"),
              panelId: "base-pivot-chart-setup",
              value: _0x36e2af.Data,
            },
            {
              label: _0x1869a2.t("bases-dashboard-ui.chart.common.customize"),
              panelId: "base-pivot-chart-style",
              value: _0x36e2af.Style,
            },
          ],
          value: _0x204e85,
          onChange: _0x96a540,
        }),
        _0x204e85 === _0x36e2af.Data
          ? _0x7cf1c3(_0x36b2e0, {
              id: "base-pivot-chart-setup",
              label: _0x1869a2.t("bases-dashboard-ui.chart.common.setup"),
              children: _0x191681("div", {
                className:
                  "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                children: [
                  _0x7cf1c3(_0x2362a9, { options: _0x3aeb6b }),
                  _0x7cf1c3(_0x458ed1, {}),
                  _0x7cf1c3(_0x357490, {}),
                  _0x7cf1c3(Tr, {}),
                  _0x7cf1c3(_0x131ef0, {}),
                  _0x191681("div", {
                    children: [
                      _0x7cf1c3(_0x15b4df, {
                        title: _0x1869a2.t(
                          "bases-dashboard-ui.pivot.dataSource",
                        ),
                      }),
                      _0x7cf1c3(_0x3bf9e2, {
                        disabled: true,
                        value: _0x17ceb3,
                      }),
                    ],
                  }),
                  _0x7cf1c3(_0x53e9e5, {
                    orientationControl: _0x7cf1c3(_0x8e4a34, {
                      size: "small",
                      onClick: () =>
                        _0x45c0ae({
                          chart: {
                            ..._0x11ebc0.chart,
                            orient:
                              _0x11ebc0.chart["orient"] === "row"
                                ? "column"
                                : "row",
                          },
                        }),
                      children: _0x1869a2.t(
                        "bases-dashboard-ui.chart.common.switchRowColumn",
                      ),
                    }),
                  }),
                  _0x7cf1c3(_0x3bfd88, {}),
                  _0x7cf1c3(_0x26b53e, { defaultValues: Z.waterfall }),
                  _0x191681("div", {
                    children: [
                      _0x7cf1c3(_0x15b4df, {
                        title: _0x1869a2.t("bases-dashboard-ui.pivot.display"),
                      }),
                      _0x7cf1c3(_0x1aee39, {
                        value: _0x11ebc0.displayMode,
                        options: [
                          {
                            value: "chart-and-table",
                            label: _0x1869a2.t(
                              "bases-dashboard-ui.pivot.chartAndTable",
                            ),
                          },
                          {
                            value: "chart",
                            label: _0x1869a2.t(
                              "bases-dashboard-ui.pivot.chartOnly",
                            ),
                          },
                          {
                            value: "table",
                            label: _0x1869a2.t(
                              "bases-dashboard-ui.pivot.tableOnly",
                            ),
                          },
                        ],
                        onChange: (_0x246458) => {
                          (_0x246458 === "chart-and-table" ||
                            _0x246458 === "chart" ||
                            _0x246458 === "table") &&
                            _0x45c0ae({ displayMode: _0x246458 });
                        },
                      }),
                    ],
                  }),
                ],
              }),
            })
          : _0x7cf1c3(_0x36b2e0, {
              id: "base-pivot-chart-style",
              label: _0x1869a2.t("bases-dashboard-ui.chart.common.customize"),
              children: _0x7cf1c3(Er, {}),
            }),
      ],
    }),
  });
}
function wr(_0x28249e, _0xcc0202) {
  return {
    ..._0x28249e,
    type: _0xcc0202.chartType ?? _0x28249e.type,
    style: _0xcc0202.style ?? _0x28249e.style,
    context: _0xcc0202.context ?? _0x28249e.context,
    dataAggregation: _0xcc0202.dataAggregation ?? _0x28249e.dataAggregation,
  };
}
function Tr() {
  let _0x1a100a = _0x588af2();
  return _0x7cf1c3(_0x1b5a04, {
    visible: Sr.every((_0x162037) => !_0xb343f8.baseOn(_0x1a100a, _0x162037)),
  });
}
function Q(_0x17d899) {
  return _0x191681(_0x17d4a0, {
    id: _0x17d899.id,
    children: [
      _0x7cf1c3(_0x22a14c, { children: _0x17d899.label }),
      _0x7cf1c3(_0x995bb2, { children: _0x17d899.children }),
    ],
  });
}
function Er() {
  let _0x5d482e = _0x50ddfa(_0x523808),
    _0x1f7e22 = _0x588af2(),
    _0x5ec9b2 = _0x3607ba(),
    [_0x50fc94, _0x49f38f] = _0x457b1d(null),
    _0x186a4f = _0xb343f8.baseOn(_0x1f7e22, _0x3c86d5.Pie),
    _0x8d6cf4 = _0x1f7e22 === _0x3c86d5.Radar,
    _0x3ffa4b = _0x1f7e22 === _0x3c86d5.WordCloud,
    _0x57e39f = _0x1f7e22 === _0x3c86d5.Funnel,
    _0x517ae7 = _0xb343f8.baseOn(_0x1f7e22, _0x3c86d5.Bubble),
    _0x275c62 = _0x1f7e22 === _0x3c86d5.Relation,
    _0x1d6700 = _0x1f7e22 === _0x3c86d5.Waterfall,
    _0xa56222 = _0x1f7e22 === _0x3c86d5.Pareto,
    _0x48e22f = _0x1f7e22 === _0x3c86d5.Heatmap,
    _0x126867 =
      _0x3644e3(_0x1f7e22, _0x4ac154.GeneralSeries) && !_0x517ae7 && !_0xa56222,
    _0x5368f0 = Dr(_0x1f7e22, _0x5d482e),
    _0x513e84 = (_0xac71a1) =>
      _0x5d482e.t("bases-dashboard-ui.chart." + _0xac71a1);
  return _0x191681(_0x2a003b, {
    value: _0x50fc94,
    onChange: _0x49f38f,
    children: [
      _0x7cf1c3(Q, {
        id: _0x25420e.ChartStyle,
        label: _0x513e84("common.chartStyle"),
        children: _0x7cf1c3(_0xf5389a, { defaultValues: Z.style }),
      }),
      _0x7cf1c3(Q, {
        id: _0x25420e.ChartAndAxisTitles,
        label: _0x513e84("common.chartAndAxisTitles"),
        children: _0x7cf1c3(_0x4e098f, {
          commitMode: "blur",
          defaultValues: Z.titles,
        }),
      }),
      _0x126867 &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Series,
          label: _0x513e84("common.series"),
          children: _0x7cf1c3(_0x594563, {
            defaultValues: Z.series,
            NumberFormatField: _0x59ba4c,
          }),
        }),
      _0x1d6700 &&
        _0x7cf1c3(Q, {
          id: _0x25420e.WaterfallSeries,
          label: _0x513e84("section.waterfall"),
          children: _0x7cf1c3(_0x53c71c, {
            defaultValues: Z.waterfallStyle,
            getDefaultBucketName: ({
              seriesName: _0x21e3f0,
              target: _0x1919c2,
            }) =>
              _0x1919c2 === _0x2652e1.Subtotal
                ? _0x513e84("waterfall.subtotal")
                : _0x21e3f0
                  ? _0x21e3f0 +
                    "-(" +
                    _0x513e84(
                      _0x1919c2 === _0x2652e1.Positive
                        ? "waterfall.positive"
                        : "waterfall.negative",
                    ) +
                    ")"
                  : "",
            NumberFormatField: _0x59ba4c,
          }),
        }),
      _0xa56222 &&
        _0x191681(_0x29237f, {
          children: [
            _0x7cf1c3(Q, {
              id: _0x25420e.ParetoBarSeries,
              label: _0x513e84("section.paretoBar"),
              children: _0x7cf1c3(_0x26fcf4, {
                defaultValues: Z.pareto,
                NumberFormatField: _0x59ba4c,
                showDataPointEditor: true,
                target: "barStyle",
              }),
            }),
            _0x7cf1c3(Q, {
              id: _0x25420e.ParetoLineSeries,
              label: _0x513e84("section.paretoLine"),
              children: _0x7cf1c3(_0x26fcf4, {
                defaultValues: Z.pareto,
                NumberFormatField: _0x59ba4c,
                showDataPointEditor: false,
                target: "cumulativeLineStyle",
              }),
            }),
          ],
        }),
      _0x186a4f &&
        _0x7cf1c3(Q, {
          id: _0x25420e.PieStyle,
          label: _0x513e84("section.pie"),
          children: _0x7cf1c3(_0x2b4f12, {
            defaultValues: Z.pie,
            NumberFormatField: _0x59ba4c,
          }),
        }),
      _0x3ffa4b &&
        _0x7cf1c3(Q, {
          id: _0x25420e.WordCloud,
          label: _0x513e84("section.wordCloud"),
          children: _0x7cf1c3(_0xf7765a, { defaultValues: Z.wordCloud }),
        }),
      _0x8d6cf4 &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Radar,
          label: _0x513e84("section.radar"),
          children: _0x7cf1c3(_0x296644, { defaultValues: Z.radar }),
        }),
      _0x57e39f &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Funnel,
          label: _0x513e84("section.funnel"),
          children: _0x7cf1c3(_0x48ea68, {
            defaultValues: Z.funnel,
            gapControl: "select",
          }),
        }),
      _0x48e22f &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Heatmap,
          label: _0x513e84("common.heatmap"),
          children: _0x7cf1c3(_0x51bd39, { defaultValues: Z.heatmap }),
        }),
      _0x275c62 &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Relation,
          label: _0x513e84("section.relation"),
          children: _0x7cf1c3(_0x36c841, { defaultValues: Z.relation }),
        }),
      _0x426f80(_0x1f7e22) &&
        _0x7cf1c3(Q, {
          id: _0x25420e.LineAndArea,
          label: _0x513e84("section.lineAndArea"),
          children: _0x7cf1c3(_0x306f14, {
            defaultValues: Z.lineAndArea,
            lineStyleControl: "segmented",
          }),
        }),
      _0x3644e3(_0x1f7e22, _0x4ac154.Legend) &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Legend,
          label: _0x513e84("common.legend"),
          children: _0x7cf1c3(_0x3cfba2, { defaultValues: Z.legend }),
        }),
      _0x3644e3(_0x1f7e22, _0x4ac154.Axes) &&
        _0x191681(_0x29237f, {
          children: [
            _0x7cf1c3(Q, {
              id: _0x25420e.HorizontalAxis,
              label: _0x513e84("common.horizontalAxis"),
              children: _0x7cf1c3(_0xf07573, {
                axis: "x",
                defaultValues: Z.axis,
                NumberFormatField: _0x59ba4c,
              }),
            }),
            _0x7cf1c3(Q, {
              id: _0x25420e.VerticalAxis,
              label: _0x513e84("common.verticalAxis"),
              children: _0x7cf1c3(_0xf07573, {
                axis: "y",
                defaultValues: Z.axis,
                NumberFormatField: _0x59ba4c,
              }),
            }),
            _0x5ec9b2 &&
              _0x7cf1c3(Q, {
                id: _0x25420e.RightVerticalAxis,
                label: _0x513e84("common.rightVerticalAxis"),
                children: _0x7cf1c3(_0xf07573, {
                  axis: "rightY",
                  defaultValues: Z.axis,
                  NumberFormatField: _0x59ba4c,
                }),
              }),
            _0x7cf1c3(Q, {
              id: _0x25420e.GridlinesAndTicks,
              label: _0x513e84("section.gridlinesAndTicks"),
              children: _0x7cf1c3(_0x1f705c, { defaultValues: Z.axis }),
            }),
          ],
        }),
      _0x3644e3(_0x1f7e22, _0x4ac154.IndicatorLine) &&
        _0x7cf1c3(Q, {
          id: _0x25420e.IndicatorLine,
          label: _0x513e84("section.indicatorLine"),
          children: _0x7cf1c3(_0x15b182, { defaultValues: Z.indicatorLine }),
        }),
      _0x1ac72f(_0x1f7e22) &&
        _0x7cf1c3(Q, {
          id: _0x25420e.Trendline,
          label: _0x513e84("common.trendline"),
          children: _0x7cf1c3(_0x48deb3, { defaultValues: Z.trendline }),
        }),
      _0x5368f0 &&
        _0x7cf1c3(Q, {
          id: _0x5368f0.id,
          label: _0x5368f0.label,
          children: _0x7cf1c3(_0x279260, {}),
        }),
    ],
  });
}
function Dr(_0x144a4b, _0x1c6f66) {
  let _0xd3ccac = {
    [_0x3c86d5.Candlestick]: {
      id: _0x25420e.Candlestick,
      localeKey: "bases-dashboard-ui.chart.section.candlestick",
    },
    [_0x3c86d5.Histogram]: {
      id: _0x25420e.Histogram,
      localeKey: "bases-dashboard-ui.chart.section.histogram",
    },
    [_0x3c86d5.Treemap]: {
      id: _0x25420e.Treemap,
      localeKey: "bases-dashboard-ui.chart.section.treemap",
    },
    [_0x3c86d5.Sunburst]: {
      id: _0x25420e.Sunburst,
      localeKey: "bases-dashboard-ui.chart.section.sunburst",
    },
    [_0x3c86d5.Gauge]: {
      id: _0x25420e.Gauge,
      localeKey: "bases-dashboard-ui.chart.section.gauge",
    },
    [_0x3c86d5.Chord]: {
      id: _0x25420e.Chord,
      localeKey: "bases-dashboard-ui.chart.section.chord",
    },
  }[_0x144a4b];
  return _0xd3ccac
    ? { id: _0xd3ccac.id, label: _0x1c6f66.t(_0xd3ccac.localeKey) }
    : null;
}
function Or(_0x3661ef) {
  return "bases-dashboard-ui.chart.chartTypes." + _0x3661ef;
}
function kr({
  onChange: _0x431a51,
  onEditData: _0x16d6ef,
  runtime: _0xa38f68,
  sourceChart: _0x46ce09,
  sourceName: _0x5060fb,
  widget: _0x46284c,
}) {
  let _0x24b9ca = _0x50ddfa(br),
    _0x438403 = _0x50ddfa(_0x523808),
    [_0x4262f8, _0x84c6de] = _0x457b1d(_0x36e2af.Data),
    _0x55300c = _0x46284c.chart ?? _0x46ce09,
    _0x46f9b5 = _0x109938(
      () =>
        new _0xa6d092(_0xa38f68.model, {
          commit: (_0xb8cc86) => {
            var _0x57b75a;
            let _0x1dd35f = _0xa38f68.model,
              _0x210615 = _0x588d71(_0xb8cc86, {
                series:
                  (_0x57b75a = _0x1dd35f.config) == null
                    ? undefined
                    : _0x57b75a.series,
                currentChartType: _0x1dd35f.chartType,
                currentStyle: _0x1dd35f.style,
                currentContext: _0x1dd35f.context,
                currentDataAggregation: _0x1dd35f.dataAggregation,
              });
            _0x431a51({ ..._0x46284c, chart: wr(_0x55300c, _0x210615) }).catch(
              () => undefined,
            );
          },
        }),
      [_0x55300c, _0x431a51, _0xa38f68, _0x46284c],
    ),
    _0x30f712 = _0x109938(
      () =>
        _0x3568c3(
          _0xc658b1.map((_0x1f8686) => ({
            ..._0x1f8686,
            label: _0x438403.t(Ar(_0x1f8686.labelId)),
          })),
        ),
      [_0x438403],
    ),
    _0x461823 = (_0x45baf1) =>
      _0x438403.t("bases-dashboard-ui.dashboardInspector." + _0x45baf1);
  return _0x7cf1c3(_0xc5612c, {
    chartUIService: _0x24b9ca,
    hostAdapter: _0x46f9b5,
    children: _0x191681("div", {
      "data-dashboard-chart-inspector": true,
      className:
        "univer-flex\x20univer-min-h-0\x20univer-flex-1\x20univer-flex-col",
      children: [
        _0x7cf1c3(_0x5055b1, {
          ariaLabel: _0x438403.t("bases-dashboard-ui.chart.common.editChart"),
          className: "univer-shrink-0 univer-px-3",
          items: [
            {
              label: _0x438403.t("bases-dashboard-ui.chart.common.setup"),
              panelId: "dashboard-chart-setup",
              value: _0x36e2af.Data,
            },
            {
              label: _0x438403.t("bases-dashboard-ui.chart.common.customize"),
              panelId: "dashboard-chart-style",
              value: _0x36e2af.Style,
            },
          ],
          value: _0x4262f8,
          onChange: _0x84c6de,
        }),
        _0x4262f8 === _0x36e2af.Data
          ? _0x7cf1c3(_0x36b2e0, {
              id: "dashboard-chart-setup",
              label: _0x438403.t("bases-dashboard-ui.chart.common.setup"),
              children: _0x191681("div", {
                className:
                  "univer-flex univer-flex-col univer-gap-3 univer-px-4 univer-pb-5",
                children: [
                  _0x7cf1c3(_0x2362a9, { options: _0x30f712 }),
                  _0x7cf1c3(_0x458ed1, {}),
                  _0x7cf1c3(_0x357490, {}),
                  _0x7cf1c3(Tr, {}),
                  _0x7cf1c3(_0x131ef0, {}),
                  _0x191681("div", {
                    children: [
                      _0x7cf1c3(_0x15b4df, { title: _0x461823("dataSource") }),
                      _0x7cf1c3(_0x3bf9e2, {
                        disabled: true,
                        value: _0x5060fb,
                      }),
                      _0x7cf1c3(_0x8e4a34, {
                        className: "univer-mt-2 univer-w-full",
                        onClick: _0x16d6ef,
                        children: _0x461823("editData"),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : _0x7cf1c3(_0x36b2e0, {
              id: "dashboard-chart-style",
              label: _0x438403.t("bases-dashboard-ui.chart.common.customize"),
              children: _0x7cf1c3(Er, {}),
            }),
      ],
    }),
  });
}
function Ar(_0x389845) {
  return "bases-dashboard-ui.chart.chartTypes." + _0x389845;
}
const jr = ["general", "number", "percent", "currency", "grouped", "compact"];
function Mr({
  base: _0x48171e,
  onChange: _0x2386ca,
  onSelectBackgroundImage: _0x274326,
  widget: _0x210976,
}) {
  var _0x1d5607;
  let _0x4d50c7 = _0x50ddfa(_0x523808),
    _0x235914 = _0x50ddfa(_0x59a199),
    _0x48997e = _0x5c88ec(
      () => _0x235914.currentTheme$,
      _0x235914.getCurrentTheme(),
      false,
      [_0x235914],
    ),
    _0xe91b1b = _0x5c88ec(
      () => _0x235914.darkMode$,
      _0x235914.darkMode,
      false,
      [_0x235914],
    ),
    [_0x46994d, _0xff3f62] = _0x457b1d("data"),
    [_0x1b6a63, _0x148347] = _0x457b1d(false),
    _0x603c66 = Zn(_0x210976),
    _0x287995 = (_0x502b35) =>
      _0x4d50c7.t("bases-dashboard-ui.dashboardInspector." + _0x502b35),
    _0x3907f6 = _0x48171e.getSnapshot().tables[_0x210976.tableId],
    _0x5ac3a4 =
      _0x3907f6 == null
        ? undefined
        : _0x3907f6.viewOrder["find"]((_0xfee46) => _0x3907f6.views[_0xfee46]),
    _0x4123ee = _0x5ac3a4
      ? _0x3907f6 == null
        ? undefined
        : _0x3907f6.views[_0x5ac3a4]
      : undefined,
    _0x304a73 =
      _0x3907f6 && _0x4123ee
        ? _0x55a97b(_0x48171e.getSnapshot(), _0x3907f6, _0x4123ee).map(
            (_0x2731ee) => ({ ..._0x2731ee, current: false }),
          )
        : [],
    _0x3099a6 =
      ((_0x1d5607 = _0x210976.shapeData["formulaBinding"]) == null
        ? undefined
        : _0x1d5607.formula) ?? "",
    _0x251429 = (_0x27cd46) =>
      _0x2386ca(Qn(_0x210976, _0x27cd46)).catch(() => undefined),
    _0x35c5cf = (_0x3fa533) =>
      _0x2386ca({ ..._0x210976, description: _0x3fa533 }).catch(
        () => undefined,
      );
  return _0x191681("div", {
    "data-dashboard-formula-inspector": true,
    className: "univer-flex univer-min-h-0 univer-flex-1 univer-flex-col",
    children: [
      _0x7cf1c3(_0x4ed202, {
        className: "univer-m-3",
        items: [
          { value: "data", label: _0x287995("data") },
          { value: "style", label: _0x287995("style") },
        ],
        value: _0x46994d,
        onChange: _0xff3f62,
      }),
      _0x7cf1c3("div", {
        className:
          "univer-min-h-0 univer-flex-1 univer-overflow-y-auto univer-p-4",
        children:
          _0x46994d === "data"
            ? _0x191681("div", {
                className: "univer-grid univer-gap-4",
                children: [
                  _0x7cf1c3($, {
                    label: _0x287995("description"),
                    children: _0x7cf1c3(_0x3bf9e2, {
                      value: _0x210976.description ?? _0x210976.title ?? "",
                      onChange: _0x35c5cf,
                      onBlur: (_0x48c8a1) =>
                        _0x35c5cf(_0x48c8a1.target["value"]),
                    }),
                  }),
                  _0x7cf1c3($, {
                    label: _0x287995("dataSource"),
                    children: _0x7cf1c3(_0x3bf9e2, {
                      disabled: true,
                      value:
                        (_0x3907f6 == null ? undefined : _0x3907f6.name) ??
                        _0x287995("sourceUnavailable"),
                    }),
                  }),
                  _0x191681($, {
                    label: _0x287995("formula"),
                    children: [
                      _0x7cf1c3(_0x3bf9e2, {
                        disabled: true,
                        value: _0x2d64a1(_0x3099a6, _0x304a73),
                      }),
                      _0x7cf1c3(_0x8e4a34, {
                        className: "univer-mt-2\x20univer-w-full",
                        onClick: () => _0x148347(true),
                        children: _0x287995("editFormula"),
                      }),
                    ],
                  }),
                ],
              })
            : _0x191681("div", {
                className: "univer-grid univer-gap-4",
                children: [
                  _0x7cf1c3(_0x4167d8, {
                    emptyLabel: _0x287995("backgroundColor"),
                    label: _0x287995("backgroundColor"),
                    pickerFallbackValue: _0xe91b1b
                      ? _0x48997e.gray[900]
                      : _0x48997e.gray[0],
                    resetLabel: _0x287995("reset"),
                    value: _0x603c66.backgroundColor ?? null,
                    onChange: (_0x3e7b5a) =>
                      _0x251429({ backgroundColor: _0x3e7b5a ?? undefined }),
                  }),
                  _0x191681($, {
                    label: _0x287995("backgroundImage"),
                    children: [
                      _0x191681("div", {
                        className: "univer-flex\x20univer-gap-2",
                        children: [
                          _0x191681(_0x8e4a34, {
                            className: "univer-flex-1",
                            onClick: () => {
                              _0x274326()
                                .then((_0x3d1fbe) => {
                                  if (_0x3d1fbe) {
                                    var _0x32d62a;
                                    return _0x251429({
                                      backgroundImage: {
                                        ..._0x3d1fbe,
                                        fit:
                                          ((_0x32d62a =
                                            _0x603c66.backgroundImage) == null
                                            ? undefined
                                            : _0x32d62a.fit) ?? "cover",
                                      },
                                    });
                                  }
                                })
                                .catch(() => undefined);
                            },
                            children: [
                              _0x7cf1c3(_0xeb23c, {}),
                              _0x603c66.backgroundImage
                                ? _0x287995("replaceImage")
                                : _0x287995("uploadImage"),
                            ],
                          }),
                          _0x603c66.backgroundImage &&
                            _0x7cf1c3(_0x8e4a34, {
                              "aria-label": _0x287995("removeImage"),
                              title: _0x287995("removeImage"),
                              onClick: () =>
                                _0x251429({ backgroundImage: undefined }),
                              children: _0x7cf1c3(_0x25347f, {}),
                            }),
                        ],
                      }),
                      _0x603c66.backgroundImage &&
                        _0x7cf1c3(_0x4ed202, {
                          className: "univer-mt-2",
                          items: [
                            { value: "cover", label: _0x287995("cover") },
                            { value: "contain", label: _0x287995("contain") },
                          ],
                          value: _0x603c66.backgroundImage["fit"],
                          onChange: (_0x5c37ef) =>
                            _0x251429({
                              backgroundImage: _0x603c66.backgroundImage
                                ? {
                                    ..._0x603c66.backgroundImage,
                                    fit: _0x5c37ef,
                                  }
                                : undefined,
                            }),
                        }),
                    ],
                  }),
                  _0x7cf1c3(_0x4167d8, {
                    emptyLabel: _0x287995("textColor"),
                    label: _0x287995("textColor"),
                    pickerFallbackValue: _0xe91b1b
                      ? _0x48997e.gray[50]
                      : _0x48997e.gray[1000],
                    resetLabel: _0x287995("reset"),
                    value: _0x603c66.textColor ?? null,
                    onChange: (_0x315571) =>
                      _0x251429({ textColor: _0x315571 ?? undefined }),
                  }),
                  _0x7cf1c3($, {
                    label: _0x287995("alignment"),
                    children: _0x7cf1c3(_0x4ed202, {
                      items: [
                        { value: "left", label: _0x287995("left") },
                        { value: "center", label: _0x287995("center") },
                        { value: "right", label: _0x287995("right") },
                      ],
                      value: _0x603c66.alignment,
                      onChange: (_0x859065) =>
                        _0x251429({ alignment: _0x859065 }),
                    }),
                  }),
                  _0x191681($, {
                    label: _0x287995("textSize"),
                    children: [
                      _0x7cf1c3(_0x4ed202, {
                        items: [
                          { value: "auto", label: _0x287995("autoFit") },
                          { value: "custom", label: _0x287995("custom") },
                        ],
                        value: _0x603c66.fontSizeMode,
                        onChange: (_0x4cdff5) =>
                          _0x251429({ fontSizeMode: _0x4cdff5 }),
                      }),
                      _0x603c66.fontSizeMode === "custom" &&
                        _0x7cf1c3(_0xc03a68, {
                          className: "univer-mt-2",
                          min: 12,
                          max: 120,
                          value: _0x603c66.fontSize,
                          onChange: (_0x288854) =>
                            _0x251429({
                              fontSize: _0x288854 ?? 40,
                              fontSizeMode: "custom",
                            }),
                        }),
                    ],
                  }),
                  _0x7cf1c3($, {
                    label: _0x287995("numberFormat"),
                    children: _0x7cf1c3(_0x1aee39, {
                      value: _0x603c66.numberFormat,
                      options: [
                        { value: "general", label: _0x287995("general") },
                        { value: "number", label: _0x287995("number") },
                        { value: "percent", label: _0x287995("percent") },
                        { value: "currency", label: _0x287995("currency") },
                        { value: "grouped", label: _0x287995("grouped") },
                        { value: "compact", label: _0x287995("compact") },
                      ],
                      onChange: (_0x225ef4) => {
                        let _0x31bb96 = jr.find(
                          (_0x2eb492) => _0x2eb492 === _0x225ef4,
                        );
                        _0x31bb96 && _0x251429({ numberFormat: _0x31bb96 });
                      },
                    }),
                  }),
                  _0x603c66.numberFormat === "currency" &&
                    _0x7cf1c3($, {
                      label: _0x287995("currencyCode"),
                      children: _0x7cf1c3(_0x3bf9e2, {
                        value: _0x603c66.currency,
                        onChange: (_0x162059) =>
                          _0x251429({
                            currency: _0x162059.slice(0, 3).toUpperCase(),
                          }),
                      }),
                    }),
                  _0x603c66.numberFormat !== "general" &&
                    _0x7cf1c3($, {
                      label: _0x287995("decimalPlaces"),
                      children: _0x7cf1c3(_0xc03a68, {
                        min: 0,
                        max: 8,
                        value: _0x603c66.decimalPlaces,
                        onChange: (_0x1cb132) =>
                          _0x251429({ decimalPlaces: _0x1cb132 ?? 0 }),
                      }),
                    }),
                ],
              }),
      }),
      _0x1b6a63 &&
        _0x7cf1c3(_0x1ee74b, {
          open: true,
          width: 760,
          footer: null,
          closable: false,
          maskClosable: false,
          children: _0x7cf1c3(_0x1b9f5b, {
            tables: _0x304a73,
            formula: _0x2d64a1(_0x3099a6, _0x304a73),
            onCancel: () => _0x148347(false),
            onSave: (_0x524a75) => {
              let _0x1597a9 = _0x210976.shapeData["formulaBinding"] ?? {
                formula: "",
              };
              return _0x2386ca({
                ..._0x210976,
                shapeData: {
                  ..._0x210976.shapeData,
                  formulaBinding: {
                    ..._0x1597a9,
                    formula: _0x28bd6c(_0x524a75, _0x304a73),
                  },
                },
              })
                .then(() => _0x148347(false))
                .catch(() => undefined);
            },
          }),
        }),
    ],
  });
}
function $({ children: _0x335aa6, label: _0x11e3f6 }) {
  return _0x191681("div", {
    role: "group",
    "aria-label": _0x11e3f6,
    className:
      "univer-grid\x20univer-gap-2\x20univer-text-sm\x20univer-font-medium\x20univer-text-gray-700\x20dark:!univer-text-gray-200",
    children: [_0x7cf1c3("span", { children: _0x11e3f6 }), _0x335aa6],
  });
}
const Nr = {
  [_0x576167.IS]: "bases-dashboard-ui.operators.is",
  [_0x576167.IS_NOT]: "bases-dashboard-ui.operators.isNot",
  [_0x576167.CONTAINS]: "bases-dashboard-ui.operators.contains",
  [_0x576167.NOT_CONTAINS]: "bases-dashboard-ui.operators.notContains",
  [_0x576167.IS_EMPTY]: "bases-dashboard-ui.operators.isEmpty",
  [_0x576167.IS_NOT_EMPTY]: "bases-dashboard-ui.operators.isNotEmpty",
  [_0x576167.GREATER_THAN]: "bases-dashboard-ui.operators.greaterThan",
  [_0x576167.GREATER_THAN_OR_EQUAL]:
    "bases-dashboard-ui.operators.greaterThanOrEqual",
  [_0x576167.LESS_THAN]: "bases-dashboard-ui.operators.lessThan",
  [_0x576167.LESS_THAN_OR_EQUAL]:
    "bases-dashboard-ui.operators.lessThanOrEqual",
  [_0x576167.BEFORE]: "bases-dashboard-ui.operators.before",
  [_0x576167.AFTER]: "bases-dashboard-ui.operators.after",
};
function Pr({
  disabled: _0x1fb0a2,
  fields: _0x59dab2,
  filter: _0x2f4e4a,
  onChange: _0x1a9963,
}) {
  let _0x24c152 = _0x50ddfa(_0x523808),
    _0x384736 = (_0x2f4e4a == null ? undefined : _0x2f4e4a.conditions) ?? [];
  return _0x384736.length
    ? _0x7cf1c3("div", {
        className:
          "univer-grid univer-h-full univer-content-start univer-gap-2 univer-overflow-auto univer-p-3",
        children: _0x384736.map((_0xeef15d, _0x46d28a) => {
          let _0x22d074 = _0x59dab2.find(
            (_0xd9d5e9) => _0xd9d5e9.id === _0xeef15d.fieldId,
          );
          return _0x191681(
            "div",
            {
              className:
                "univer-bg-gray-50/80 dark:!univer-bg-gray-800/70 univer-grid univer-gap-2 univer-rounded-xl univer-border univer-border-gray-200 univer-p-3 dark:!univer-border-gray-700",
              children: [
                _0x191681("div", {
                  className:
                    "univer-flex\x20univer-min-w-0\x20univer-items-center\x20univer-gap-2",
                  children: [
                    _0x7cf1c3("span", {
                      className:
                        "univer-min-w-0 univer-flex-1 univer-truncate univer-text-sm univer-font-medium",
                      children:
                        (_0x22d074 == null ? undefined : _0x22d074.name) ??
                        _0xeef15d.fieldId,
                    }),
                    _0x7cf1c3("span", {
                      className:
                        "univer-shrink-0\x20univer-rounded-full\x20univer-bg-gray-200\x20univer-px-2\x20univer-py-0.5\x20univer-text-xs\x20univer-text-gray-600\x20dark:!univer-bg-gray-700\x20dark:!univer-text-gray-300",
                      children: _0x24c152.t(Nr[_0xeef15d.operator]),
                    }),
                  ],
                }),
                Hr(_0xeef15d.operator) &&
                  _0x7cf1c3(Ir, {
                    disabled: _0x1fb0a2,
                    field: _0x22d074,
                    value: _0xeef15d.operand,
                    onChange: (_0x12949e) =>
                      _0x1a9963(
                        zr(_0x2f4e4a, _0x46d28a, { operand: _0x12949e }),
                      ),
                  }),
              ],
            },
            Gr(_0x384736, _0xeef15d, _0x46d28a),
          );
        }),
      })
    : _0x191681("div", {
        className:
          "univer-grid univer-h-full univer-place-content-center univer-gap-2 univer-text-center univer-text-gray-400",
        children: [
          _0x7cf1c3(_0x4567ac, {
            className: "univer-mx-auto\x20univer-size-6",
          }),
          _0x7cf1c3("span", {
            className: "univer-text-sm",
            children: _0x24c152.t("bases-dashboard-ui.dashboard.tableFilter"),
          }),
        ],
      });
}
function Fr({
  fields: _0x10877e,
  filter: _0x43a17c,
  onChange: _0x5cbb98,
  onClear: _0x5e2934,
}) {
  let _0x1df9f3 = _0x50ddfa(_0x523808),
    _0x59e3ea = (_0x43a17c == null ? undefined : _0x43a17c.conditions) ?? [];
  return _0x191681("div", {
    "data-dashboard-filter-inspector": true,
    className:
      "univer-grid univer-min-h-0 univer-flex-1 univer-content-start univer-gap-3 univer-overflow-auto univer-p-4",
    children: [
      _0x59e3ea.map((_0x1d25a1, _0x31b066) => {
        let _0x465757 =
            _0x10877e.find((_0x1f293f) => _0x1f293f.id === _0x1d25a1.fieldId) ??
            _0x10877e[0],
          _0x37aa30 = Br(_0x465757);
        return _0x191681(
          "section",
          {
            className:
              "univer-grid\x20univer-gap-3\x20univer-rounded-xl\x20univer-border\x20univer-border-gray-200\x20univer-bg-gray-50\x20univer-p-3\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-800",
            children: [
              _0x191681("div", {
                className:
                  "univer-grid univer-grid-cols-[minmax(0,1fr)_32px] univer-gap-2",
                children: [
                  _0x7cf1c3(_0x1aee39, {
                    value: _0x1d25a1.fieldId,
                    options: _0x10877e.map((_0x16d147) => ({
                      value: _0x16d147.id,
                      label: _0x16d147.name,
                    })),
                    onChange: (_0x2d8dde) => {
                      let _0x410209 = _0x10877e.find(
                        (_0x9ca5e0) => _0x9ca5e0.id === _0x2d8dde,
                      );
                      if (!_0x410209) return;
                      let _0x103823 = Br(_0x410209)[0];
                      _0x5cbb98(
                        zr(_0x43a17c, _0x31b066, Rr(_0x410209, _0x103823)),
                      );
                    },
                  }),
                  _0x7cf1c3(_0x8e4a34, {
                    type: "button",
                    variant: "text",
                    "aria-label": _0x1df9f3.t(
                      "bases-dashboard-ui.dashboardInspector.delete",
                    ),
                    className:
                      "univer-size-8\x20univer-p-0\x20univer-text-red-500",
                    onClick: () =>
                      _0x5cbb98(
                        Lr(
                          _0x43a17c,
                          _0x59e3ea.filter(
                            (_0x21c2d2, _0x2cf0cb) => _0x2cf0cb !== _0x31b066,
                          ),
                        ),
                      ),
                    children: _0x7cf1c3(_0x458fb3, {}),
                  }),
                ],
              }),
              _0x7cf1c3(_0x1aee39, {
                value: _0x1d25a1.operator,
                options: _0x37aa30.map((_0x5dc34d) => ({
                  value: _0x5dc34d,
                  label: _0x1df9f3.t(Nr[_0x5dc34d]),
                })),
                onChange: (_0x5d6284) => {
                  let _0x23eb1e = _0x37aa30.find(
                    (_0x7f6cbd) => _0x7f6cbd === _0x5d6284,
                  );
                  _0x23eb1e &&
                    _0x5cbb98(
                      zr(_0x43a17c, _0x31b066, {
                        operator: _0x23eb1e,
                        operand: Vr(_0x465757),
                      }),
                    );
                },
              }),
              Hr(_0x1d25a1.operator) &&
                _0x7cf1c3(Ir, {
                  field: _0x465757,
                  value: _0x1d25a1.operand,
                  onChange: (_0x4fed5e) =>
                    _0x5cbb98(zr(_0x43a17c, _0x31b066, { operand: _0x4fed5e })),
                }),
            ],
          },
          Gr(_0x59e3ea, _0x1d25a1, _0x31b066),
        );
      }),
      _0x191681(_0x8e4a34, {
        type: "button",
        variant: "text",
        className:
          "univer-w-full\x20univer-justify-start\x20univer-text-primary-600",
        disabled: !_0x10877e.length,
        onClick: () => {
          let _0x1ba015 = _0x10877e[0];
          if (!_0x1ba015) return;
          let _0x1ce3b7 = Br(_0x1ba015)[0];
          _0x5cbb98(Lr(_0x43a17c, [..._0x59e3ea, Rr(_0x1ba015, _0x1ce3b7)]));
        },
        children: [
          _0x7cf1c3(_0xeb23c, {}),
          _0x1df9f3.t("bases-dashboard-ui.dashboardInspector.newCondition"),
        ],
      }),
      _0x59e3ea.length > 0 &&
        _0x7cf1c3(_0x8e4a34, {
          type: "button",
          variant: "text",
          className: "univer-w-full",
          onClick: _0x5e2934,
          children: _0x1df9f3.t("bases-dashboard-ui.dashboardInspector.clear"),
        }),
    ],
  });
}
function Ir({
  disabled: _0x3ff1fd,
  field: _0x4aec5f,
  onChange: _0x33cb55,
  value: _0x32b22e,
}) {
  let _0x2afdeb = _0x50ddfa(_0x523808),
    _0x15e7ec = _0x4aec5f == null ? undefined : _0x4aec5f.type;
  if (_0x15e7ec === _0x54c2c1.Checkbox) {
    let _0x154067 = _0x32b22e === true || _0x32b22e === "true";
    return _0x191681(_0x8e4a34, {
      type: "button",
      variant: "default",
      disabled: _0x3ff1fd,
      className: "univer-w-full univer-justify-start",
      onClick: () => _0x33cb55(!_0x154067),
      children: [
        _0x7cf1c3(_0x4d10f1, {
          checked: _0x154067,
          disabled: _0x3ff1fd,
          onChange: () => undefined,
        }),
        _0x154067
          ? _0x2afdeb.t("bases-dashboard-ui.dashboardInspector.checked")
          : _0x2afdeb.t("bases-dashboard-ui.dashboardInspector.unchecked"),
      ],
    });
  }
  return Kr(_0x15e7ec)
    ? _0x3ff1fd
      ? _0x7cf1c3(_0x8e4a34, {
          type: "button",
          variant: "default",
          className: "univer-w-full",
          disabled: true,
          children: _0x11acc9(
            _0x32b22e == null || _0x32b22e === ""
              ? undefined
              : String(_0x32b22e),
          ).format("YYYY-MM-DD"),
        })
      : _0x7cf1c3(_0x316522, {
          className: "univer-w-full",
          value: _0x11acc9(
            _0x32b22e == null || _0x32b22e === ""
              ? undefined
              : String(_0x32b22e),
          ).toDate(),
          onValueChange: (_0x220d03) =>
            _0x33cb55(_0x11acc9(_0x220d03).format("YYYY-MM-DD")),
        })
    : Jr(_0x4aec5f)
      ? _0x7cf1c3(_0x38172c, {
          className: "univer-w-full",
          disabled: _0x3ff1fd,
          value: Array.isArray(_0x32b22e) ? _0x32b22e.map(String) : [],
          options: Ur(_0x4aec5f),
          onChange: _0x33cb55,
        })
      : _0x15e7ec === _0x54c2c1.SingleSelect ||
          _0x15e7ec === _0x54c2c1.Group ||
          _0x15e7ec === _0x54c2c1.Person
        ? _0x7cf1c3(_0x1aee39, {
            className: "univer-w-full",
            disabled: _0x3ff1fd,
            value: String(_0x32b22e ?? ""),
            options: [
              {
                value: "",
                label: _0x2afdeb.t(
                  "bases-dashboard-ui.dashboardInspector.selectOption",
                ),
              },
              ...Ur(_0x4aec5f),
            ],
            onChange: _0x33cb55,
          })
        : qr(_0x15e7ec)
          ? _0x7cf1c3(_0xc03a68, {
              className: "univer-w-full",
              allowEmpty: true,
              disabled: _0x3ff1fd,
              value: Number.isFinite(Number(_0x32b22e))
                ? Number(_0x32b22e)
                : null,
              onChange: (_0x172463) => _0x33cb55(_0x172463 ?? ""),
            })
          : _0x7cf1c3(_0x3bf9e2, {
              disabled: _0x3ff1fd,
              value: String(_0x32b22e ?? ""),
              placeholder: _0x2afdeb.t(
                "bases-dashboard-ui.dashboardInspector.enterValue",
              ),
              onChange: _0x33cb55,
            });
}
function Lr(_0x379c63, _0x6958f9) {
  return {
    conjunction:
      (_0x379c63 == null ? undefined : _0x379c63.conjunction) ?? _0x31ebd5.AND,
    conditions: _0x6958f9,
  };
}
function Rr(_0x469a1a, _0xaa7b6) {
  return Hr(_0xaa7b6)
    ? { fieldId: _0x469a1a.id, operator: _0xaa7b6, operand: Vr(_0x469a1a) }
    : { fieldId: _0x469a1a.id, operator: _0xaa7b6 };
}
function zr(_0x4abfb8, _0x5591ad, _0x4744c7) {
  return Lr(
    _0x4abfb8,
    ((_0x4abfb8 == null ? undefined : _0x4abfb8.conditions) ?? []).map(
      (_0x4e0970, _0x4ffad5) =>
        _0x4ffad5 === _0x5591ad ? { ..._0x4e0970, ..._0x4744c7 } : _0x4e0970,
    ),
  );
}
function Br(_0x183565) {
  let _0x270083 = [_0x576167.IS_EMPTY, _0x576167.IS_NOT_EMPTY];
  switch (_0x183565 == null ? undefined : _0x183565.type) {
    case _0x54c2c1.Number:
    case _0x54c2c1.Currency:
    case _0x54c2c1.Progress:
    case _0x54c2c1.Rating:
      return [
        _0x576167.IS,
        _0x576167.IS_NOT,
        _0x576167.GREATER_THAN,
        _0x576167.LESS_THAN,
        ..._0x270083,
      ];
    case _0x54c2c1.Date:
    case _0x54c2c1.CreatedAt:
    case _0x54c2c1.UpdatedAt:
      return [
        _0x576167.IS,
        _0x576167.IS_NOT,
        _0x576167.BEFORE,
        _0x576167.AFTER,
        ..._0x270083,
      ];
    case _0x54c2c1.Checkbox:
      return [_0x576167.IS, _0x576167.IS_NOT];
    default:
      return [
        _0x576167.IS,
        _0x576167.IS_NOT,
        _0x576167.CONTAINS,
        _0x576167.NOT_CONTAINS,
        ..._0x270083,
      ];
  }
}
function Vr(_0x327402) {
  return _0x327402
    ? _0x327402.type === _0x54c2c1.Checkbox
      ? false
      : Kr(_0x327402.type)
        ? _0x11acc9().format("YYYY-MM-DD")
        : Jr(_0x327402)
          ? []
          : ""
    : "";
}
function Hr(_0x7dcac8) {
  return (
    _0x7dcac8 !== _0x576167.IS_EMPTY && _0x7dcac8 !== _0x576167.IS_NOT_EMPTY
  );
}
function Ur(_0x804220) {
  var _0x4aaf94;
  return (
    Array.isArray(
      _0x804220 == null || (_0x4aaf94 = _0x804220.config) == null
        ? undefined
        : _0x4aaf94.options,
    )
      ? _0x804220.config["options"]
      : []
  ).map((_0x273978, _0x1e1bf7) => {
    if (typeof _0x273978 == "string")
      return { label: _0x273978, value: _0x273978 };
    if (!Wr(_0x273978))
      return { label: String(_0x1e1bf7 + 1), value: String(_0x1e1bf7 + 1) };
    let _0x3e57ff = _0x273978,
      _0x2a4278 = String(_0x3e57ff.name ?? _0x3e57ff.id ?? _0x1e1bf7 + 1),
      _0x36fe83 = String(_0x3e57ff.id ?? _0x2a4278);
    return {
      label: _0x2a4278,
      value: /^opt-\d+$/["test"](_0x36fe83) ? _0x2a4278 : _0x36fe83,
    };
  });
}
function Wr(_0x1ff309) {
  return typeof _0x1ff309 == "object" && !!_0x1ff309;
}
function Gr(_0x400536, _0x4dd0d4, _0x824c55) {
  let _0x263b0b = JSON.stringify(_0x4dd0d4);
  return (
    _0x263b0b +
    "-" +
    _0x400536
      .slice(0, _0x824c55)
      .filter((_0x30f81d) => JSON.stringify(_0x30f81d) === _0x263b0b).length
  );
}
function Kr(_0x3f9a34) {
  return (
    _0x3f9a34 === _0x54c2c1.Date ||
    _0x3f9a34 === _0x54c2c1.CreatedAt ||
    _0x3f9a34 === _0x54c2c1.UpdatedAt
  );
}
function qr(_0x17ede6) {
  return (
    _0x17ede6 === _0x54c2c1.Number ||
    _0x17ede6 === _0x54c2c1.Currency ||
    _0x17ede6 === _0x54c2c1.Progress ||
    _0x17ede6 === _0x54c2c1.Rating
  );
}
function Jr(_0x3e2f86) {
  var _0x4841e8;
  return (
    (_0x3e2f86 == null ? undefined : _0x3e2f86.type) ===
      _0x54c2c1.MultiSelect ||
    (_0x3e2f86 == null ? undefined : _0x3e2f86.type) === _0x54c2c1.Group ||
    ((_0x3e2f86 == null ? undefined : _0x3e2f86.type) === _0x54c2c1.Person &&
      ((_0x4841e8 = _0x3e2f86.config) == null
        ? undefined
        : _0x4841e8.allowMultiple) === true)
  );
}
function Yr({
  base: _0x154b11,
  chartRuntime: _0x4f4ad6,
  onChange: _0x2c3275,
  onClose: _0x57b25b,
  onSelectBackgroundImage: _0x5d7579,
  onSelectImage: _0x3f73bf,
  unitId: _0x3955f6,
  widget: _0x3b5316,
}) {
  let _0x4485ab = _0x50ddfa(_0x534db2),
    _0x26c414 = _0x50ddfa(_0x523808),
    _0x6b3b12 = _0x154b11.getSnapshot(),
    _0x7b4089 =
      "tableId" in _0x3b5316 ? _0x6b3b12.tables[_0x3b5316.tableId] : undefined,
    _0x2457c2 =
      _0x3b5316.type === _0x3bdcfa.PivotChart
        ? _0x7b4089 == null
          ? undefined
          : _0x7b4089.views[_0x3b5316.pivotViewId]
        : undefined,
    _0x5d12ce = _0x26c414.t(ni(_0x3b5316)),
    _0x453f8e = (_0x5beb44) =>
      _0x26c414.t("bases-dashboard-ui.dashboardInspector." + _0x5beb44);
  return _0x191681("aside", {
    "data-dashboard-inspector": true,
    className:
      "univer-flex\x20univer-h-full\x20univer-w-[380px]\x20univer-shrink-0\x20univer-flex-col\x20univer-border-l\x20univer-border-gray-200\x20univer-bg-gray-0\x20dark:!univer-border-gray-700\x20dark:!univer-bg-gray-900",
    children: [
      _0x191681("header", {
        className:
          "univer-flex\x20univer-h-12\x20univer-shrink-0\x20univer-items-center\x20univer-border-b\x20univer-border-gray-200\x20univer-px-4\x20dark:!univer-border-gray-700",
        children: [
          _0x7cf1c3("h3", {
            className:
              "univer-m-0 univer-min-w-0 univer-flex-1 univer-truncate univer-text-base univer-font-semibold",
            children: _0x5d12ce,
          }),
          _0x7cf1c3(_0x8e4a34, {
            type: "button",
            size: "small",
            variant: "text",
            "aria-label": _0x453f8e("close"),
            onClick: _0x57b25b,
            children: _0x7cf1c3(_0x458fb3, {}),
          }),
        ],
      }),
      _0x3b5316.type === _0x3bdcfa.PivotChart &&
        (ti(_0x2457c2) && _0x4f4ad6
          ? _0x7cf1c3(kr, {
              runtime: _0x4f4ad6,
              sourceChart: _0x2457c2.config["chart"],
              sourceName:
                ((_0x7b4089 == null ? undefined : _0x7b4089.name) ?? "") +
                " / " +
                _0x2457c2.name,
              widget: _0x3b5316,
              onChange: _0x2c3275,
              onEditData: () => {
                _0x4485ab
                  .executeCommand(_0x217371.id, {
                    unitId: _0x3955f6,
                    tableId: _0x3b5316.tableId,
                    viewId: _0x3b5316.pivotViewId,
                  })
                  .catch(() => undefined);
              },
            })
          : _0x7cf1c3($r, {
              message: ti(_0x2457c2)
                ? _0x453f8e("loading")
                : _0x453f8e("sourceUnavailable"),
            })),
      _0x3b5316.type === _0x3bdcfa.FormulaShape &&
        _0x7cf1c3(Mr, {
          base: _0x154b11,
          widget: _0x3b5316,
          onChange: _0x2c3275,
          onSelectBackgroundImage: _0x5d7579,
        }),
      _0x3b5316.type === _0x3bdcfa.TableFilter &&
        _0x7cf1c3(Zr, {
          base: _0x154b11,
          onChange: _0x2c3275,
          widget: _0x3b5316,
        }),
      _0x3b5316.type === _0x3bdcfa.Text &&
        _0x7cf1c3(Qr, {
          label: _0x453f8e,
          onChange: _0x2c3275,
          widget: _0x3b5316,
        }),
      _0x3b5316.type === _0x3bdcfa.Image &&
        _0x7cf1c3(Xr, {
          label: _0x453f8e,
          onChange: _0x2c3275,
          onSelectImage: _0x3f73bf,
          widget: _0x3b5316,
        }),
    ],
  });
}
function Xr({
  label: _0x1b3bef,
  onChange: _0x3cd628,
  onSelectImage: _0x2c15fb,
  widget: _0x3c359d,
}) {
  return _0x191681("div", {
    className: "univer-grid univer-gap-4 univer-p-4",
    children: [
      _0x191681(_0x8e4a34, {
        className: "univer-w-full",
        onClick: () =>
          _0x2c15fb()
            .then(
              (_0x25288c) =>
                _0x25288c &&
                _0x3cd628({
                  ..._0x3c359d,
                  source: _0x25288c.source,
                  sourceType: _0x25288c.sourceType,
                  alt: _0x25288c.name,
                }),
            )
            .catch(() => undefined),
        children: [_0x7cf1c3(_0xeb23c, {}), _0x1b3bef("replaceImage")],
      }),
      _0x191681("label", {
        className:
          "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
        children: [
          _0x7cf1c3("span", { children: _0x1b3bef("backgroundImage") }),
          _0x7cf1c3(_0x4ed202, {
            items: [
              { value: "cover", label: _0x1b3bef("cover") },
              { value: "repeat", label: _0x1b3bef("repeat") },
              { value: "original", label: _0x1b3bef("originalSize") },
            ],
            value: _0x3c359d.displayMode ?? "cover",
            onChange: (_0x10a748) =>
              _0x3cd628({ ..._0x3c359d, displayMode: _0x10a748 }).catch(
                () => undefined,
              ),
          }),
        ],
      }),
    ],
  });
}
function Zr({ base: _0x3e255a, onChange: _0x33e7cd, widget: _0x2f84cc }) {
  let _0x30a3cf = _0x3e255a.getSnapshot().tables[_0x2f84cc.tableId],
    _0x1530f1 =
      _0x30a3cf == null
        ? undefined
        : _0x30a3cf.viewOrder["find"](
            (_0x435b0c) => _0x30a3cf.views[_0x435b0c],
          ),
    _0x30306c = _0x1530f1
      ? _0x30a3cf == null
        ? undefined
        : _0x30a3cf.views[_0x1530f1]
      : undefined;
  return _0x7cf1c3(Fr, {
    fields: _0x30a3cf && _0x30306c ? _0x10555f(_0x30a3cf, _0x30306c) : [],
    filter: _0x2f84cc.filter,
    onChange: (_0x4ea9c0) =>
      _0x33e7cd({ ..._0x2f84cc, filter: _0x4ea9c0 }).catch(() => undefined),
    onClear: () =>
      _0x33e7cd({ ..._0x2f84cc, filter: null }).catch(() => undefined),
  });
}
function Qr({ label: _0x3a6e9d, onChange: _0x3db2ab, widget: _0x23d0b4 }) {
  let _0x316e76 = _0x50ddfa(_0x59a199),
    _0x5f086e = _0x5c88ec(
      () => _0x316e76.currentTheme$,
      _0x316e76.getCurrentTheme(),
      false,
      [_0x316e76],
    ),
    _0x4619ba = fr(_0x23d0b4),
    _0x3f7709 = (_0x5b9ef5) =>
      _0x3db2ab({
        ..._0x23d0b4,
        appearance: { ..._0x4619ba, ..._0x5b9ef5 },
      }).catch(() => undefined);
  return _0x191681("div", {
    className: "univer-grid univer-gap-4 univer-overflow-y-auto univer-p-4",
    children: [
      _0x7cf1c3(_0x34f006, {
        defaultValue: pr(_0x23d0b4.document),
        rows: 8,
        onBlur: (_0x5e90eb) =>
          _0x3db2ab({
            ..._0x23d0b4,
            document: mr(_0x23d0b4.document, _0x5e90eb.target["value"]),
          }).catch(() => undefined),
      }),
      _0x7cf1c3(_0x4167d8, {
        emptyLabel: _0x3a6e9d("backgroundColor"),
        label: _0x3a6e9d("backgroundColor"),
        pickerFallbackValue: _0x5f086e.gray[0],
        resetLabel: _0x3a6e9d("reset"),
        value: _0x4619ba.backgroundColor ?? null,
        onChange: (_0xd825a6) =>
          _0x3f7709({ backgroundColor: _0xd825a6 ?? undefined }),
      }),
      _0x7cf1c3(_0x4167d8, {
        emptyLabel: _0x3a6e9d("textColor"),
        label: _0x3a6e9d("textColor"),
        pickerFallbackValue: _0x5f086e.gray[1000],
        resetLabel: _0x3a6e9d("reset"),
        value: _0x4619ba.textColor ?? null,
        onChange: (_0x44c074) =>
          _0x3f7709({ textColor: _0x44c074 ?? undefined }),
      }),
      _0x7cf1c3(ei, {
        label: _0x3a6e9d("alignment"),
        children: _0x7cf1c3(_0x4ed202, {
          items: [
            { value: "left", label: _0x3a6e9d("left") },
            { value: "center", label: _0x3a6e9d("center") },
            { value: "right", label: _0x3a6e9d("right") },
          ],
          value: _0x4619ba.alignment,
          onChange: (_0x5e404a) => _0x3f7709({ alignment: _0x5e404a }),
        }),
      }),
      _0x191681(ei, {
        label: _0x3a6e9d("textSize"),
        children: [
          _0x7cf1c3(_0x4ed202, {
            items: [
              { value: "auto", label: _0x3a6e9d("autoFit") },
              { value: "custom", label: _0x3a6e9d("custom") },
            ],
            value: _0x4619ba.fontSizeMode,
            onChange: (_0x1cc184) => _0x3f7709({ fontSizeMode: _0x1cc184 }),
          }),
          _0x4619ba.fontSizeMode === "custom" &&
            _0x7cf1c3(_0xc03a68, {
              className: "univer-mt-2",
              min: 10,
              max: 120,
              value: _0x4619ba.fontSize,
              onChange: (_0x2176c0) =>
                _0x3f7709({
                  fontSize: _0x2176c0 ?? 18,
                  fontSizeMode: "custom",
                }),
            }),
        ],
      }),
    ],
  });
}
function $r({ message: _0x1f687b }) {
  return _0x7cf1c3("div", {
    className:
      "univer-grid univer-min-h-40 univer-place-items-center univer-p-4 univer-text-sm univer-text-gray-500",
    children: _0x1f687b,
  });
}
function ei({ children: _0x3342fa, label: _0x13bbbc }) {
  return _0x191681("div", {
    role: "group",
    "aria-label": _0x13bbbc,
    className:
      "univer-grid univer-gap-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
    children: [_0x7cf1c3("span", { children: _0x13bbbc }), _0x3342fa],
  });
}
function ti(_0x149574) {
  return (
    (_0x149574 == null ? undefined : _0x149574.type) === _0x5c001e.Pivot &&
    typeof _0x149574.config == "object" &&
    _0x149574.config !== null &&
    "pivot" in _0x149574.config &&
    "chart" in _0x149574.config
  );
}
function ni(_0x38f473) {
  switch (_0x38f473.type) {
    case _0x3bdcfa.PivotChart:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case _0x3bdcfa.TableFilter:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case _0x3bdcfa.Text:
      return "bases-dashboard-ui.dashboard.text";
    case _0x3bdcfa.Image:
      return "bases-dashboard-ui.dashboard.image";
    case _0x3bdcfa.FormulaShape:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
let ri = class {
  constructor(_0x520cb1, _0x425ef4, _0x41773a) {
    ((this._localeService = _0x520cb1),
      (this._chartThemeService = _0x425ef4),
      (this._renderModelManager = _0x41773a));
  }
  createDomChartInstance() {
    return this._renderModelManager["createChartInstance"](
      _0x330ba7.Dom,
      this._createContext(),
    );
  }
  createRenderInput(_0x5d8e5f) {
    let _0xf37ca1 = _0x5d8e5f.model["config"];
    if (!_0xf37ca1)
      throw Error(
        "Base\x20dashboard\x20chart\x20" +
          _0x5d8e5f.chartId +
          " has no render config.",
      );
    let _0x37970e = this._localeService["getDirection"]();
    return {
      config: _0xf37ca1,
      style: _0x497efb(
        {
          ..._0x5d8e5f.model["style"],
          runtime: _0x5d8e5f.model["getRuntimeContext"](_0x37970e),
          direction: _0x37970e,
        },
        _0xf37ca1.type,
      ),
    };
  }
  _createContext() {
    return {
      resolveHostStyle: ({ style: _0x108f8a }) =>
        _0x43ea8d({
          style: _0x108f8a,
          getRenderColor: (_0x157375) =>
            this._chartThemeService["getRenderColor"](_0x157375),
        }),
      resolveRenderBackgroundColor: ({ hostStyle: _0x3e3467 }) =>
        _0x3e3467.fill,
    };
  }
};
ri = yr(
  [X(0, _0x3dfd8c(_0x523808)), X(1, _0x3dfd8c(_0x25e755)), X(2, _0x1bd4bd)],
  ri,
);
function ii(_0x39fea1, _0x54cd16) {
  var _0x489639;
  ((_0x39fea1.style["backgroundColor"] = _0x54cd16.fill ?? "transparent"),
    (_0x39fea1.style["border"] =
      (_0x489639 = _0x54cd16.border) != null &&
      _0x489639.color &&
      _0x54cd16.border["width"]
        ? _0x54cd16.border["width"] + "px solid " + _0x54cd16.border["color"]
        : ""),
    (_0x39fea1.style["borderRadius"] = _0x54cd16.radius
      ? _0x54cd16.radius + "px"
      : ""),
    (_0x39fea1.style["overflow"] = "hidden"),
    (_0x39fea1.style["boxSizing"] = "border-box"));
}
var ai = class extends _0x2b365f {
  constructor(_0x6b0c09, _0x254ae4) {
    (super(),
      (this.chartId = _0x6b0c09),
      (this._element = _0x254ae4),
      vr(this, "mode", _0x330ba7.Dom));
  }
  getRect() {
    return {
      width: Math.max(1, this._element["clientWidth"]),
      height: Math.max(1, this._element["clientHeight"]),
    };
  }
  setStyle(_0x38a9bd) {
    ii(this._element, _0x38a9bd);
  }
  async ensureMount() {
    return this._element;
  }
  checkMounted() {
    return this._element["isConnected"];
  }
  syncLayout() {}
  markReady() {}
  markNotReady() {}
};
function oi({ isRowDirection: _0x196bf3, runtime: _0x10a419 }) {
  let _0x2230cc = _0x92bc33(null),
    _0x5de52b = _0x50ddfa(_0x523808),
    _0x48e96b = _0x50ddfa(_0x1ea6d2),
    _0x22aa96 = _0x50ddfa(ri),
    _0x401c1d = _0x50ddfa(_0x59a199);
  return (
    _0x504fac(() => {
      let _0x2fd7b1 = _0x2230cc.current;
      if (!_0x2fd7b1) return;
      _0x2fd7b1.replaceChildren();
      let { chartId: _0x3de6b4, model: _0xdfe326 } = _0x10a419,
        _0x33f438 = _0xdfe326.dataSource,
        _0x7d101b = new ai(_0x3de6b4, _0x2fd7b1),
        _0x511eff = _0x22aa96.createDomChartInstance(),
        _0x4921c0 = false,
        _0x1d9e9 = null,
        _0x351746 = null,
        _0x5e5f7f = null,
        _0x9a815b = null,
        _0x510b8e = false,
        _0x1f0dc7 = false,
        _0x44a39d = Promise.resolve();
      _0x511eff.bind(_0x7d101b);
      let _0x3c81ef = () => {
          var _0x9ce2c7, _0x68caaf, _0x31599f, _0x1171cb;
          if (
            document.visibilityState === "hidden" ||
            ((_0x9ce2c7 = (_0x68caaf = window).matchMedia) != null &&
              (_0x9ce2c7 = _0x9ce2c7.call(
                _0x68caaf,
                "(prefers-reduced-motion:\x20reduce)",
              )) != null &&
              _0x9ce2c7.matches) ||
            ((_0x31599f = (_0x1171cb = window).matchMedia) != null &&
              (_0x31599f = _0x31599f.call(_0x1171cb, "print")) != null &&
              _0x31599f.matches) ||
            !_0x2fd7b1.isConnected
          )
            return false;
          let _0x3fa269 = _0x2fd7b1.getBoundingClientRect();
          return (
            _0x3fa269.width > 0 &&
            _0x3fa269.height > 0 &&
            _0x3fa269.right > 0 &&
            _0x3fa269.bottom > 0 &&
            _0x3fa269.left < window.innerWidth &&
            _0x3fa269.top < window.innerHeight
          );
        },
        _0x74f9df = () => {
          (_0x351746 !== null && clearTimeout(_0x351746),
            (_0x2fd7b1.dataset["baseChartDataAnimation"] = "true"),
            (_0x2fd7b1.dataset["baseChartDataAnimationDuration"] =
              String(_0x670fe2)),
            (_0x351746 = setTimeout(() => {
              ((_0x351746 = null),
                delete _0x2fd7b1.dataset["baseChartDataAnimation"],
                delete _0x2fd7b1.dataset["baseChartDataAnimationDuration"]);
            }, _0x670fe2)));
        },
        _0x55d688 = (_0x3343ea) => {
          if (
            (_0x1d9e9 !== null && (clearTimeout(_0x1d9e9), (_0x1d9e9 = null)),
            !_0xdfe326.config)
          ) {
            _0x1f0dc7 ||= _0x3343ea;
            return;
          }
          ((_0x2fd7b1.dataset["chartType"] = String(_0xdfe326.chartType)),
            (_0x2fd7b1.dataset["chartRowDirection"] = String(_0x196bf3)));
          let _0x2a992f = _0x22aa96.createRenderInput(_0x10a419),
            _0x338317 = {
              chartId: _0x3de6b4,
              config: _0x2a992f.config,
              style: _0x2a992f.style,
            };
          _0x44a39d = _0x44a39d
            .then(async () => {
              _0x4921c0 ||
                ((_0x2fd7b1.dataset["renderRevision"] = String(
                  Number(_0x2fd7b1.dataset["renderRevision"] ?? 0) + 1,
                )),
                _0x3343ea &&
                _0x5e5f7f &&
                _0x511eff.renderTransition &&
                _0x3c81ef()
                  ? (await _0x511eff.renderTransition(_0x5e5f7f, _0x338317, {
                      duration: _0x670fe2,
                    }),
                    _0x74f9df())
                  : await _0x511eff.render(_0x338317),
                (_0x5e5f7f = _0x338317));
            })
            .catch((_0x34d484) =>
              _0x48e96b.error(
                "[BasePivotChart] Failed to render chart.",
                _0x34d484,
              ),
            );
        },
        _0x5b680b = (_0x1de793 = false) => {
          ((_0x1f0dc7 ||= _0x1de793),
            !_0x510b8e &&
              ((_0x510b8e = true),
              queueMicrotask(() => {
                _0x510b8e = false;
                let _0x90d593 = _0x1f0dc7;
                ((_0x1f0dc7 = false), _0x55d688(_0x90d593));
              })));
        },
        _0x19e059 = [
          _0x33f438.data$["subscribe"]((_0x4200fe) => {
            let _0x304b5b = JSON.stringify(_0x4200fe);
            (_0x9a815b != null && _0x9a815b !== _0x304b5b && _0x5b680b(true),
              (_0x9a815b = _0x304b5b));
          }),
          _0xdfe326.config$["subscribe"]((_0x4b1345) => {
            _0x4b1345 && _0x5b680b();
          }),
          _0xdfe326.style$["subscribe"](() => _0x5b680b()),
          _0x5de52b.direction$["subscribe"](() => _0x5b680b()),
          _0x4da52b([_0x401c1d.currentTheme$, _0x401c1d.darkMode$])
            .pipe(_0x8da1df(1))
            .subscribe(() => _0x5b680b()),
        ],
        _0x308a63 =
          typeof ResizeObserver > "u"
            ? null
            : new ResizeObserver(() => {
                _0x4921c0 ||
                  (_0x7d101b.syncLayout(),
                  _0x1d9e9 !== null && clearTimeout(_0x1d9e9),
                  (_0x1d9e9 = setTimeout(() => _0x5b680b(), 100)));
              });
      return (
        _0x308a63 == null || _0x308a63.observe(_0x2fd7b1),
        () => {
          ((_0x4921c0 = true),
            _0x1d9e9 !== null && clearTimeout(_0x1d9e9),
            _0x351746 !== null && clearTimeout(_0x351746),
            delete _0x2fd7b1.dataset["baseChartDataAnimation"],
            delete _0x2fd7b1.dataset["baseChartDataAnimationDuration"],
            _0x308a63 == null || _0x308a63.disconnect(),
            _0x19e059.forEach((_0x1bd174) => _0x1bd174.unsubscribe()),
            _0x511eff.dispose(),
            _0x7d101b.dispose(),
            _0x2fd7b1.replaceChildren());
        }
      );
    }, [_0x196bf3, _0x5de52b, _0x48e96b, _0x22aa96, _0x10a419, _0x401c1d]),
    _0x7cf1c3("div", {
      ref: _0x2230cc,
      "data-u-comp": "base-pivot-chart",
      className: "univer-absolute univer-inset-0 univer-overflow-hidden",
    })
  );
}
function si({
  filters: _0xe900e4,
  onRuntimeChange: _0x451e3c,
  unitId: _0x1c21a7,
  widget: _0x12633d,
}) {
  let _0x32512e = _0x50ddfa(_0xbc7fc0),
    _0x83ca97 = _0x50ddfa(_0x523808),
    _0x24b512 = _0x50ddfa(_0x1ea6d2),
    _0xc80882 = _0x50ddfa(_0xa617fc),
    [_0x1c9a04, _0x548094] = _0x457b1d(null),
    [_0x1a9239, _0x56747d] = _0x457b1d(false),
    [_0xa0a575, _0x16ff38] = _0x457b1d(null),
    _0x450e9c = _0x92bc33("base-dashboard-pivot-chart-" + _0x50a363(8)),
    _0x19125c = _0x32512e.getUnit(_0x1c21a7, _0x5a92c2.UNIVER_BASE),
    _0xa65faf =
      _0x19125c == null
        ? undefined
        : _0x19125c.getSnapshot().tables[_0x12633d.tableId],
    _0x14426d =
      _0xa65faf == null ? undefined : _0xa65faf.views[_0x12633d.pivotViewId],
    _0x40f332 = ci(_0x14426d);
  if (
    (_0x504fac(() => {
      if (!_0x40f332) return;
      let _0x369500 = _0x450e9c.current;
      return (
        _0xc80882.acquireChartRuntime(_0x369500, {
          unitId: _0x1c21a7,
          tableId: _0x12633d.tableId,
          viewId: _0x12633d.pivotViewId,
          filters: [],
        }),
        () => {
          (_0xc80882.releaseChartRuntime(_0x1c21a7, _0x369500),
            _0x451e3c == null || _0x451e3c(_0x12633d.id, null));
        }
      );
    }, [
      _0x40f332,
      _0x451e3c,
      _0xc80882,
      _0x1c21a7,
      _0x12633d.id,
      _0x12633d.pivotViewId,
      _0x12633d.tableId,
    ]),
    _0x504fac(() => {
      if (!ci(_0x14426d)) return;
      let _0x1fcce2 = true,
        _0x3bd2f5 = _0x12633d.chart ?? _0x14426d.config["chart"],
        _0x5cb3b1 = {
          unitId: _0x1c21a7,
          tableId: _0x12633d.tableId,
          viewId: _0x12633d.pivotViewId,
          filters: [_0x14426d.filter ?? null, ..._0xe900e4],
        };
      return (
        _0xc80882
          .refreshChartRuntime(
            _0x1c21a7,
            _0x450e9c.current,
            _0x5cb3b1,
            _0x3bd2f5,
          )
          .then((_0x53035f) => {
            if (!_0x1fcce2 || !_0x53035f) return;
            let _0x29dc9d =
              _0xc80882.getChartRuntime(_0x1c21a7, _0x450e9c.current) ?? null;
            (_0x548094(_0x53035f),
              _0x16ff38(_0x29dc9d),
              _0x56747d(false),
              _0x451e3c == null || _0x451e3c(_0x12633d.id, _0x29dc9d));
          })
          .catch((_0x28072f) => {
            (_0x24b512.error(
              "[DashboardPivotChartWidget] Failed to calculate the pivot result.",
              _0x28072f,
            ),
              _0x1fcce2 && (_0x548094(null), _0x56747d(true)));
          }),
        () => {
          _0x1fcce2 = false;
        }
      );
    }, [
      _0xe900e4,
      _0x24b512,
      _0x451e3c,
      _0xc80882,
      _0x1c21a7,
      _0x14426d,
      _0x12633d.chart,
      _0x12633d.id,
      _0x12633d.pivotViewId,
      _0x12633d.tableId,
    ]),
    !ci(_0x14426d))
  )
    return _0x7cf1c3("div", {
      className:
        "univer-grid univer-h-full univer-place-items-center univer-text-xs univer-text-gray-500",
      children: _0x83ca97.t(
        "bases-dashboard-ui.dashboardInspector.sourceUnavailable",
      ),
    });
  let _0xa82aae =
    _0xc80882.getChartRuntime(_0x1c21a7, _0x450e9c.current) === _0xa0a575
      ? _0xa0a575
      : null;
  return _0x1c9a04 && _0xa82aae
    ? _0x7cf1c3(oi, {
        isRowDirection: _0x56c275(
          (_0x12633d.chart ?? _0x14426d.config["chart"]).orient,
        ),
        runtime: _0xa82aae,
      })
    : _0x7cf1c3("div", {
        className:
          "univer-grid\x20univer-h-full\x20univer-place-items-center\x20univer-text-xs\x20univer-text-gray-500",
        children: _0x83ca97.t(
          _0x1a9239
            ? "bases-dashboard-ui.pivot.calculationFailed"
            : "bases-dashboard-ui.pivot.calculating",
        ),
      });
}
function ci(_0x2e1c91) {
  return (
    (_0x2e1c91 == null ? undefined : _0x2e1c91.type) === _0x5c001e.Pivot &&
    typeof _0x2e1c91.config == "object" &&
    _0x2e1c91.config !== null &&
    "pivot" in _0x2e1c91.config &&
    "chart" in _0x2e1c91.config
  );
}
function li({ widget: _0x176e8c }) {
  let _0x4a8ffd = _0x50ddfa(_0x59a199),
    _0x34071d = _0x50ddfa(_0x523808),
    _0x4c3991 = _0x5c88ec(
      () => _0x4a8ffd.currentTheme$,
      _0x4a8ffd.getCurrentTheme(),
      false,
      [_0x4a8ffd],
    ),
    _0x5b49e8 = _0x92bc33(null),
    _0x1d37d7 = _0x92bc33(null),
    _0x49a66e = fr(_0x176e8c),
    _0x37137f = _0x49a66e.backgroundColor ?? _0x4c3991.gray[0],
    _0x448036 = _0x49a66e.textColor ?? _0x4c3991.gray[1000],
    _0x585035 = pr(_0x176e8c.document);
  return (
    _0x504fac(() => {
      let _0x24b8c3 = _0x5b49e8.current,
        _0x3ead40 = _0x1d37d7.current;
      if (!_0x24b8c3 || !_0x3ead40) return;
      let _0x3b37f2 = () => {
        if (
          _0x49a66e.fontSizeMode === "custom" ||
          !_0x24b8c3.clientWidth ||
          !_0x24b8c3.clientHeight
        ) {
          _0x3ead40.style["fontSize"] = _0x49a66e.fontSize + "px";
          return;
        }
        let _0x12baf6 = 8,
          _0x2a680c = 72,
          _0x4eedfc = _0x12baf6;
        for (; _0x12baf6 <= _0x2a680c;) {
          let _0x44c3c4 = Math.floor((_0x12baf6 + _0x2a680c) / 2);
          ((_0x3ead40.style["fontSize"] = _0x44c3c4 + "px"),
            _0x3ead40.scrollWidth <= _0x24b8c3.clientWidth &&
            _0x3ead40.scrollHeight <= _0x24b8c3.clientHeight
              ? ((_0x4eedfc = _0x44c3c4), (_0x12baf6 = _0x44c3c4 + 1))
              : (_0x2a680c = _0x44c3c4 - 1));
        }
        _0x3ead40.style["fontSize"] = _0x4eedfc + "px";
      };
      if ((_0x3b37f2(), typeof ResizeObserver > "u")) return;
      let _0x28831a = new ResizeObserver(_0x3b37f2);
      return (_0x28831a.observe(_0x24b8c3), () => _0x28831a.disconnect());
    }, [_0x49a66e.fontSize, _0x49a66e.fontSizeMode, _0x585035]),
    _0x7cf1c3("div", {
      "data-dashboard-text-widget": _0x176e8c.id,
      className:
        "univer-box-border\x20univer-flex\x20univer-h-full\x20univer-w-full\x20univer-items-center\x20univer-overflow-hidden\x20univer-p-4",
      style: { backgroundColor: _0x37137f, color: _0x448036 },
      children: _0x7cf1c3("div", {
        ref: _0x5b49e8,
        "data-dashboard-text-content": true,
        "aria-label": _0x34071d.t("bases-dashboard-ui.dashboard.text"),
        className:
          "univer-flex univer-h-full univer-min-h-0 univer-w-full univer-items-center univer-overflow-hidden",
        children: _0x7cf1c3("div", {
          ref: _0x1d37d7,
          "data-dashboard-text-value": true,
          "data-font-size-mode": _0x49a66e.fontSizeMode,
          className:
            "univer-w-full\x20univer-whitespace-pre-wrap\x20univer-break-words\x20univer-leading-normal",
          style: { textAlign: _0x49a66e.alignment },
          children: _0x585035,
        }),
      }),
    })
  );
}
function ui({ onDelete: _0x9530b1, onEdit: _0x30a867 }) {
  let _0x3b06aa = _0x50ddfa(_0x523808),
    _0x4ebc6a = _0x3b06aa.t("bases-dashboard-ui.dashboard.editWidget"),
    _0x2711ce = _0x3b06aa.t("bases-dashboard-ui.dashboard.deleteWidget"),
    _0x1df2e8 = _0x3b06aa.t("bases-dashboard-ui.dashboard.widgetActions");
  return _0x7cf1c3(_0x53364d, {
    items: [
      {
        type: "item",
        children: _0x191681("span", {
          className: "univer-flex\x20univer-items-center\x20univer-gap-2",
          children: [
            _0x7cf1c3(_0x5112a6, {
              className: "univer-size-4",
              "aria-hidden": "true",
            }),
            _0x7cf1c3("span", { children: _0x4ebc6a }),
          ],
        }),
        onSelect: _0x30a867,
      },
      { type: "separator" },
      {
        type: "item",
        variant: "destructive",
        children: _0x191681("span", {
          className: "univer-flex univer-items-center univer-gap-2",
          children: [
            _0x7cf1c3(_0x25347f, {
              className: "univer-size-4",
              "aria-hidden": "true",
            }),
            _0x7cf1c3("span", { children: _0x2711ce }),
          ],
        }),
        onSelect: _0x9530b1,
      },
    ],
    children: _0x7cf1c3(_0x8e4a34, {
      type: "button",
      size: "small",
      variant: "text",
      title: _0x1df2e8,
      "aria-label": _0x1df2e8,
      className:
        "univer-size-6 !univer-border !univer-border-solid !univer-border-gray-200 !univer-bg-gray-0 univer-p-0 !univer-shadow-none hover:!univer-bg-gray-100 dark:!univer-border-gray-700 dark:!univer-bg-gray-900 dark:hover:!univer-bg-gray-800",
      children: _0x7cf1c3(_0x5e99bb, {
        className: "univer-size-4",
        "aria-hidden": "true",
      }),
    }),
  });
}
function di({
  dashboardId: _0x2df18,
  presentation: _0x21e734 = false,
  unitId: _0x371cce,
}) {
  let _0x9732f1 = _0x50ddfa(_0x534db2),
    _0x30693a = _0x50ddfa(_0x4ec0f7),
    _0x58235e = _0x50ddfa(_0x1a636d),
    _0x3d117d = _0x50ddfa(_0xbc7fc0),
    _0x4d91e3 = _0x50ddfa(_0x523808),
    _0x4d3b8e = _0x50ddfa(_0x32c22b),
    _0x51c425 = _0x50ddfa(_0x2b20fa),
    _0x41a9e0 = _0x92bc33(null),
    [_0x4f3784, _0x26c982] = _0x457b1d(false),
    [_0x1720e3, _0x2a69b8] = _0x457b1d(),
    [_0x5205bc, _0x5cde93] = _0x457b1d(false),
    [_0x3c4d15, _0xdf297d] = _0x457b1d(() => new Map()),
    _0x4923a5 = _0x1f62e2((_0x373e16, _0x1d29e9) => {
      _0xdf297d((_0x33c733) => {
        let _0x547ba9 = new Map(_0x33c733);
        return (
          _0x1d29e9
            ? _0x547ba9.set(_0x373e16, _0x1d29e9)
            : _0x547ba9.delete(_0x373e16),
          _0x547ba9
        );
      });
    }, []),
    _0x4d05f8 = _0x5c88ec(
      () =>
        _0x4d3b8e.change$["pipe"](
          _0x1bc37f(() => _0x4d3b8e.getDashboard(_0x371cce, _0x2df18)),
        ),
      _0x4d3b8e.getDashboard(_0x371cce, _0x2df18),
      false,
      [_0x2df18, _0x4d3b8e, _0x371cce],
    ),
    _0x1da934 = _0x3d117d.getUnit(_0x371cce, _0x5a92c2.UNIVER_BASE),
    _0x5bcc8f = _0x5c88ec(
      () => _0x51c425.undoRedoStatus$,
      { undos: 0, redos: 0 },
      false,
      [_0x51c425],
    ),
    _0x57ff87 = Kn(_0x371cce, _0x2df18);
  if (
    (_0x504fac(() => {
      (_0x3d117d.setCurrentUnitForType(_0x371cce),
        _0x3d117d.focusUnit(_0x371cce));
    }, [_0x3d117d, _0x371cce]),
    _0x504fac(() => {
      let _0x3b5d6d = _0x41a9e0.current,
        _0x3ef156 = _0x3b5d6d == null ? undefined : _0x3b5d6d.ownerDocument;
      if (!_0x3b5d6d || !_0x3ef156) return;
      let _0x548cc9 = () =>
          _0x5cde93(_0x3ef156.fullscreenElement === _0x3ef156.documentElement),
        _0x3b6dfa = (_0x240f7c) => {
          _0x240f7c.key === "Escape" && _0x5cde93(false);
        };
      return (
        _0x3ef156.addEventListener("fullscreenchange", _0x548cc9),
        _0x3ef156.addEventListener("keydown", _0x3b6dfa),
        () => {
          (_0x3ef156.removeEventListener("fullscreenchange", _0x548cc9),
            _0x3ef156.removeEventListener("keydown", _0x3b6dfa));
        }
      );
    }, []),
    !_0x4d05f8 || !_0x1da934)
  )
    return null;
  let _0x316c24 = (_0x118f6b) =>
      _0x9732f1
        .executeCommand(_0x27038a.id, {
          unitId: _0x371cce,
          dashboardId: _0x2df18,
          widget: _0x118f6b,
        })
        .catch(() => undefined),
    _0x519ab0 = (_0x219dc4, _0x1ed919, _0x3c9ff9) => {
      let _0x215388 = Math.max(
          0,
          ..._0x4d05f8.widgetOrder["flatMap"]((_0x6b892b) => {
            var _0x34862d;
            let _0x3fd4eb =
              (_0x34862d = _0x4d05f8.widgets[_0x6b892b]) == null
                ? undefined
                : _0x34862d.layout;
            return _0x3fd4eb ? [_0x3fd4eb.row + _0x3fd4eb.rowSpan] : [];
          }),
        ),
        _0x16dc4e = "dashboard-widget-" + _0x50a363(8),
        _0x51583c = {
          column: 0,
          row: _0x215388,
          columnSpan: _0x1ed919,
          rowSpan: _0x3c9ff9,
        };
      switch (_0x219dc4.type) {
        case _0x3bdcfa.PivotChart:
          return _0x316c24({ ..._0x219dc4, id: _0x16dc4e, layout: _0x51583c });
        case _0x3bdcfa.TableFilter:
          return _0x316c24({ ..._0x219dc4, id: _0x16dc4e, layout: _0x51583c });
        case _0x3bdcfa.Text:
          return _0x316c24({ ..._0x219dc4, id: _0x16dc4e, layout: _0x51583c });
        case _0x3bdcfa.Image:
          return _0x316c24({ ..._0x219dc4, id: _0x16dc4e, layout: _0x51583c });
        case _0x3bdcfa.FormulaShape:
          return _0x316c24({ ..._0x219dc4, id: _0x16dc4e, layout: _0x51583c });
      }
    },
    _0x481244 = _0x1da934.getSnapshot(),
    _0x1a7ed = _0x481244.tableOrder["flatMap"]((_0x2dbca7) => {
      let _0x580d7b = _0x481244.tables[_0x2dbca7];
      if (!_0x580d7b) return [];
      let _0x52ffc1 = _0x580d7b.viewOrder["flatMap"]((_0x13b75c) => {
        let _0x381aa0 = _0x580d7b.views[_0x13b75c];
        return yi(_0x381aa0)
          ? [
              {
                type: "item",
                children: _0x381aa0.name,
                onSelect: () =>
                  _0x519ab0(
                    {
                      type: _0x3bdcfa.PivotChart,
                      tableId: _0x2dbca7,
                      pivotViewId: _0x13b75c,
                      chart: { ..._0x381aa0.config["chart"] },
                    },
                    6,
                    10,
                  ),
              },
            ]
          : [];
      });
      return [
        {
          type: "subItem",
          children: _0x580d7b.name,
          options: [
            ..._0x52ffc1,
            ...(_0x52ffc1.length ? [{ type: "separator" }] : []),
            {
              type: "item",
              children: _0x4d91e3.t("bases-dashboard-ui.dashboard.tableFilter"),
              onSelect: () =>
                _0x519ab0(
                  {
                    type: _0x3bdcfa.TableFilter,
                    tableId: _0x2dbca7,
                    filter: null,
                  },
                  6,
                  8,
                ),
            },
          ],
        },
      ];
    }),
    _0x25b043 = [
      ..._0x1a7ed,
      ...(_0x1a7ed.length ? [{ type: "separator" }] : []),
      {
        type: "item",
        children: _0x4d91e3.t("bases-dashboard-ui.dashboard.text"),
        onSelect: () =>
          _0x519ab0({ type: _0x3bdcfa.Text, document: hi() }, 4, 6),
      },
      {
        type: "item",
        children: _0x4d91e3.t("bases-dashboard-ui.dashboard.image"),
        onSelect: () =>
          gi(_0x30693a).then(
            (_0x163304) =>
              _0x163304 &&
              _0x519ab0(
                {
                  type: _0x3bdcfa.Image,
                  source: _0x163304.source,
                  sourceType: _0x163304.sourceType,
                  alt: _0x163304.name,
                  displayMode: "cover",
                },
                4,
                6,
              ),
          ),
      },
      {
        type: "item",
        children: _0x4d91e3.t("bases-dashboard-ui.dashboard.formulaShape"),
        onSelect: () => {
          let _0x1bc2b4 = _0x481244.tableOrder["find"](
            (_0xe97b17) => _0x481244.tables[_0xe97b17],
          );
          _0x1bc2b4 &&
            _0x519ab0(
              {
                type: _0x3bdcfa.FormulaShape,
                tableId: _0x1bc2b4,
                shapeType: _0x51336b.RoundRect,
                shapeData: _0x4400e0(),
                description: _0x4d91e3.t(
                  "bases-dashboard-ui.dashboard.formulaShape",
                ),
              },
              4,
              6,
            );
        },
      },
    ],
    _0x340568 = _0x1720e3 ? _0x4d05f8.widgets[_0x1720e3] : undefined,
    _0x2f4a12 = async () => {
      let _0x9952b4 = _0x41a9e0.current;
      if (!_0x9952b4) return;
      let _0x22a344 = _0x9952b4.ownerDocument;
      if (_0x22a344.fullscreenElement === _0x22a344.documentElement) {
        await _0x22a344.exitFullscreen();
        return;
      }
      await _0x22a344.documentElement["requestFullscreen"]();
    },
    _0xd63518 = _0x21e734 || _0x5205bc,
    _0x4626b8 = _0x57ff87 && !_0xd63518;
  return _0x191681("div", {
    ref: _0x41a9e0,
    className:
      "\n univer-flex univer-h-full univer-min-h-0 univer-flex-col univer-bg-gray-0\n dark:!univer-bg-gray-900\n " +
      (_0x5205bc
        ? "univer-fixed\x20univer-inset-0\x20univer-z-[1000]"
        : "univer-relative univer-z-10") +
      "\n ",
    children: [
      !_0xd63518 &&
        _0x191681("header", {
          className:
            "univer-flex univer-h-12 univer-shrink-0 univer-items-center univer-gap-3 univer-border-b univer-border-gray-200 univer-bg-gray-0 univer-px-4 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
          children: [
            _0x7cf1c3(_0x43ce75, {
              className: "univer-size-5 univer-text-primary-600",
            }),
            _0x7cf1c3("h2", {
              className:
                "univer-m-0\x20univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-base\x20univer-font-semibold",
              children: _0x4d05f8.name,
            }),
            _0x7cf1c3(_0x26355c, { unitId: _0x371cce }),
            _0x7cf1c3(_0x8e4a34, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x4d91e3.t("bases-dashboard-ui.dashboard.undo"),
              disabled: !_0x57ff87 || _0x5bcc8f.undos === 0,
              onClick: () =>
                _0x9732f1.executeCommand(_0x234267.id).catch(() => undefined),
              children: _0x7cf1c3(_0x5cfb91, {}),
            }),
            _0x7cf1c3(_0x8e4a34, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x4d91e3.t("bases-dashboard-ui.dashboard.redo"),
              disabled: !_0x57ff87 || _0x5bcc8f.redos === 0,
              onClick: () =>
                _0x9732f1.executeCommand(_0x3577d6.id).catch(() => undefined),
              children: _0x7cf1c3(_0x2a1b26, {}),
            }),
            _0x7cf1c3(_0x8e4a34, {
              type: "button",
              size: "small",
              variant: "text",
              "aria-label": _0x4d91e3.t(
                "bases-dashboard-ui.dashboard.fullScreen",
              ),
              onClick: () => _0x2f4a12().catch(() => undefined),
              children: _0x7cf1c3(_0x30f3d9, {}),
            }),
            _0x7cf1c3(_0x53364d, {
              items: _0x25b043,
              children: _0x191681(_0x8e4a34, {
                variant: "primary",
                disabled: !_0x57ff87,
                children: [
                  _0x7cf1c3(_0xeb23c, {}),
                  _0x4d91e3.t("bases-dashboard-ui.dashboard.addWidget"),
                ],
              }),
            }),
          ],
        }),
      _0x191681("div", {
        className: "univer-flex univer-min-h-0 univer-flex-1",
        children: [
          _0x7cf1c3("div", {
            className: "univer-min-w-0 univer-flex-1",
            children: _0x7cf1c3(ur, {
              dashboard: _0x4d05f8,
              dragLabel: _0x4d91e3.t(
                "bases-dashboard-ui.dashboardInspector.dragWidget",
              ),
              editable: _0x4626b8,
              resizeLabel: _0x4d91e3.t(
                "bases-dashboard-ui.dashboard.resizeWidget",
              ),
              widgetLabel: (_0x2951d5) => _0x4d91e3.t(vi(_0x2951d5.type)),
              selectedWidgetId: _0x4626b8 ? _0x1720e3 : undefined,
              onSelectWidget: _0x4626b8
                ? (_0xe08f10) => {
                    (_0x2a69b8(_0xe08f10), _0xe08f10 || _0x26c982(false));
                  }
                : undefined,
              onLayoutsCommit: (_0x5ce306) => {
                let _0xdf8d62 = { ..._0x4d05f8.widgets };
                (_0x5ce306.forEach((_0x3558e1, _0x2094dd) => {
                  let _0x5e1782 = _0xdf8d62[_0x2094dd];
                  _0x5e1782 &&
                    (_0xdf8d62[_0x2094dd] = {
                      ..._0x5e1782,
                      layout: _0x3558e1,
                    });
                }),
                  _0x9732f1
                    .executeCommand(_0x43da3a.id, {
                      unitId: _0x371cce,
                      dashboard: { ..._0x4d05f8, widgets: _0xdf8d62 },
                    })
                    .catch(() => undefined));
              },
              renderWidget: (_0x3f380b) =>
                _0x7cf1c3(fi, {
                  base: _0x1da934,
                  dashboard: _0x4d05f8,
                  unitId: _0x371cce,
                  widget: _0x3f380b,
                  editable: _0x57ff87,
                  onChange: _0x316c24,
                  onChartRuntimeChange: _0x4923a5,
                }),
              renderWidgetActions: (_0x397f63) =>
                _0x7cf1c3(ui, {
                  onEdit: () => {
                    (_0x2a69b8(_0x397f63.id), _0x26c982(true));
                  },
                  onDelete: () => {
                    (_0x1720e3 === _0x397f63.id &&
                      (_0x2a69b8(undefined), _0x26c982(false)),
                      _0x9732f1
                        .executeCommand(_0x4f01f4.id, {
                          unitId: _0x371cce,
                          dashboardId: _0x2df18,
                          widgetId: _0x397f63.id,
                        })
                        .catch(() => undefined));
                  },
                }),
            }),
          }),
          _0x4626b8 &&
            _0x4f3784 &&
            _0x340568 &&
            _0x7cf1c3(Yr, {
              base: _0x1da934,
              chartRuntime: _0x3c4d15.get(_0x340568.id),
              unitId: _0x371cce,
              widget: _0x340568,
              onChange: _0x316c24,
              onClose: () => _0x26c982(false),
              onSelectBackgroundImage: () => _i(_0x58235e),
              onSelectImage: () => gi(_0x30693a),
            }),
        ],
      }),
    ],
  });
}
function fi({
  base: _0x151f9e,
  dashboard: _0x58a4fd,
  editable: _0x16c7c3,
  onChange: _0x5310db,
  onChartRuntimeChange: _0x52316d,
  unitId: _0x221e9b,
  widget: _0xdf874e,
}) {
  let _0x1453af = _0x109938(
    () =>
      _0x58a4fd.widgetOrder["flatMap"]((_0xeabc49) => {
        let _0x504155 = _0x58a4fd.widgets[_0xeabc49];
        return (_0x504155 == null ? undefined : _0x504155.type) ===
          _0x3bdcfa.TableFilter &&
          _0x504155.tableId ===
            ("tableId" in _0xdf874e ? _0xdf874e.tableId : "") &&
          _0x504155.filter
          ? [_0x504155.filter]
          : [];
      }),
    [_0x58a4fd, _0xdf874e],
  );
  switch (_0xdf874e.type) {
    case _0x3bdcfa.PivotChart:
      return _0x7cf1c3(si, {
        filters: _0x1453af,
        unitId: _0x221e9b,
        widget: _0xdf874e,
        onRuntimeChange: _0x52316d,
      });
    case _0x3bdcfa.TableFilter:
      return _0x7cf1c3(Pr, {
        disabled: !_0x16c7c3,
        fields: pi(_0x151f9e, _0xdf874e.tableId),
        filter: _0xdf874e.filter,
        onChange: (_0x220400) =>
          _0x5310db({ ..._0xdf874e, filter: _0x220400 }).catch(() => undefined),
      });
    case _0x3bdcfa.Text:
      return _0x7cf1c3(li, { widget: _0xdf874e });
    case _0x3bdcfa.Image:
      return _0x7cf1c3(mi, { widget: _0xdf874e });
    case _0x3bdcfa.FormulaShape:
      return _0x7cf1c3(rr, {
        dashboardId: _0x58a4fd.id,
        unitId: _0x221e9b,
        widget: _0xdf874e,
      });
  }
}
function pi(_0x3e56da, _0x50a174) {
  let _0x592d2e = _0x3e56da.getSnapshot().tables[_0x50a174],
    _0x5f0b17 =
      _0x592d2e == null
        ? undefined
        : _0x592d2e.viewOrder["find"](
            (_0xab5f6f) => _0x592d2e.views[_0xab5f6f],
          ),
    _0x11e002 = _0x5f0b17
      ? _0x592d2e == null
        ? undefined
        : _0x592d2e.views[_0x5f0b17]
      : undefined;
  return _0x592d2e && _0x11e002 ? _0x10555f(_0x592d2e, _0x11e002) : [];
}
function mi({ widget: _0xe186c9 }) {
  let _0x38d44c = _0x50ddfa(_0x4ec0f7),
    [_0x50f4ec, _0x1420a5] = _0x457b1d(
      _0xe186c9.sourceType === _0x2e62eb.UUID ? "" : _0xe186c9.source,
    );
  return (
    _0x504fac(() => {
      let _0x12d342 = true;
      return (
        _0x38d44c
          .getAttachmentUrl(_0xe186c9.source, _0xe186c9.sourceType)
          .then((_0x5ceac9) => {
            _0x12d342 && _0x1420a5(_0x5ceac9);
          })
          .catch(() => undefined),
        () => {
          _0x12d342 = false;
        }
      );
    }, [_0x38d44c, _0xe186c9.source, _0xe186c9.sourceType]),
    _0x50f4ec
      ? _0x7cf1c3("div", {
          role: _0xe186c9.alt ? "img" : undefined,
          "aria-label": _0xe186c9.alt || undefined,
          "data-dashboard-image": _0xe186c9.id,
          className: "univer-h-full univer-w-full univer-bg-transparent",
          style: Jn(_0x50f4ec, _0xe186c9.displayMode),
        })
      : null
  );
}
function hi() {
  let _0x145469 = _0x38a545(new Set());
  return {
    id: "dashboard-text-" + _0x50a363(8),
    body: {
      dataStream: "\x0d\x0a",
      textRuns: [],
      paragraphs: [{ startIndex: 0, paragraphId: _0x145469 }],
    },
    documentStyle: {},
  };
}
function gi(_0x100ac2) {
  return new Promise((_0xeceba8) => {
    let _0x124a93 = document.createElement("input");
    ((_0x124a93.type = "file"),
      (_0x124a93.accept = "image/*"),
      _0x124a93.addEventListener(
        "change",
        () => {
          var _0x14b349;
          let _0xc88373 =
            (_0x14b349 = _0x124a93.files) == null ? undefined : _0x14b349[0];
          if (!_0xc88373) {
            _0xeceba8(null);
            return;
          }
          _0x100ac2
            .saveAttachment(_0xc88373)
            .then((_0x573e90) => {
              if (!_0x573e90.source || _0x573e90.sourceType === undefined) {
                _0xeceba8(null);
                return;
              }
              _0xeceba8({
                name: _0x573e90.name,
                source: _0x573e90.source,
                sourceType: _0x573e90.sourceType,
              });
            })
            .catch(() => _0xeceba8(null));
        },
        { once: true },
      ),
      _0x124a93.click());
  });
}
function _i(_0x496ff5) {
  return new Promise((_0x3f9336) => {
    let _0x364d5c = document.createElement("input");
    ((_0x364d5c.type = "file"),
      (_0x364d5c.accept = "image/*"),
      _0x364d5c.addEventListener(
        "change",
        () => {
          var _0x2bda9f;
          let _0x2842cc =
            (_0x2bda9f = _0x364d5c.files) == null ? undefined : _0x2bda9f[0];
          if (!_0x2842cc) {
            _0x3f9336(null);
            return;
          }
          _0x496ff5
            .saveImage(_0x2842cc)
            .then((_0x192204) => {
              if (!(_0x192204 != null && _0x192204.source)) {
                _0x3f9336(null);
                return;
              }
              if (_0x192204.base64Cache) {
                let _0x5a3d42 = new Image();
                ((_0x5a3d42.src = _0x192204.base64Cache),
                  _0x496ff5.addImageSourceCache(
                    _0x192204.source,
                    _0x192204.imageSourceType,
                    _0x5a3d42,
                  ));
              }
              _0x3f9336({
                source: _0x192204.source,
                sourceType: _0x192204.imageSourceType,
              });
            })
            .catch(() => _0x3f9336(null));
        },
        { once: true },
      ),
      _0x364d5c.click());
  });
}
function vi(_0x2b3c31) {
  switch (_0x2b3c31) {
    case _0x3bdcfa.PivotChart:
      return "bases-dashboard-ui.dashboard.pivotChart";
    case _0x3bdcfa.TableFilter:
      return "bases-dashboard-ui.dashboard.tableFilter";
    case _0x3bdcfa.Text:
      return "bases-dashboard-ui.dashboard.text";
    case _0x3bdcfa.Image:
      return "bases-dashboard-ui.dashboard.image";
    case _0x3bdcfa.FormulaShape:
      return "bases-dashboard-ui.dashboard.formulaShape";
  }
}
function yi(_0x375650) {
  return (
    (_0x375650 == null ? undefined : _0x375650.type) === _0x5c001e.Pivot &&
    typeof _0x375650.config == "object" &&
    _0x375650.config !== null &&
    "pivot" in _0x375650.config &&
    "chart" in _0x375650.config
  );
}
const bi = [
    {
      area: _0x1f286e.Filter,
      key: "filterFields",
      label: "bases-dashboard-ui.pivot.filters",
    },
    {
      area: _0x1f286e.Column,
      key: "columnFields",
      label: "bases-dashboard-ui.pivot.columns",
    },
    {
      area: _0x1f286e.Row,
      key: "rowFields",
      label: "bases-dashboard-ui.pivot.rows",
    },
    {
      area: _0x1f286e.Value,
      key: "valueFields",
      label: "bases-dashboard-ui.pivot.values",
    },
  ],
  xi = [
    { value: _0x39cc3f.sum, localeKey: "bases-dashboard-ui.pivot.sum" },
    { value: _0x39cc3f.count, localeKey: "bases-dashboard-ui.pivot.count" },
    {
      value: _0x39cc3f.countNums,
      localeKey: "bases-dashboard-ui.pivot.countNumbers",
    },
    { value: _0x39cc3f.average, localeKey: "bases-dashboard-ui.pivot.average" },
    { value: _0x39cc3f.max, localeKey: "bases-dashboard-ui.pivot.max" },
    { value: _0x39cc3f.min, localeKey: "bases-dashboard-ui.pivot.min" },
    { value: _0x39cc3f.product, localeKey: "bases-dashboard-ui.pivot.product" },
    { value: _0x39cc3f.stdDev, localeKey: "bases-dashboard-ui.pivot.stdDev" },
    {
      value: _0x39cc3f.stdDevp,
      localeKey: "bases-dashboard-ui.pivot.stdDevPopulation",
    },
    { value: _0x39cc3f.var, localeKey: "bases-dashboard-ui.pivot.variance" },
    {
      value: _0x39cc3f.varp,
      localeKey: "bases-dashboard-ui.pivot.variancePopulation",
    },
  ];
function Si(_0x15c348) {
  let { config: _0x41387f, onChange: _0x11d231, table: _0x360941 } = _0x15c348,
    _0x54eea0 = _0x50ddfa(_0x523808),
    [_0x17cdc8, _0x4550ec] = _0x457b1d("fields"),
    [_0x2b1440, _0x37ba77] = _0x457b1d(""),
    [_0x31b594, _0x3051fa] = _0x457b1d(null),
    [_0x50cd65, _0x1e049d] = _0x457b1d(null),
    [_0x49a2e7, _0x27b65a] = _0x457b1d(null),
    [_0x252b0c, _0x3f3f80] = _0x457b1d(null),
    _0x584598 = _0x92bc33(null),
    _0x1b8eeb = _0x109938(
      () =>
        _0x360941.fieldOrder["flatMap"]((_0x30c541) => {
          let _0x2ff22f = _0x360941.fields[_0x30c541];
          return _0x2ff22f &&
            _0x2ff22f.system !== true &&
            _0x2ff22f.type !== _0x54c2c1.RecordId
            ? [_0x2ff22f]
            : [];
        }).filter((_0x1a11a2) =>
          _0x1a11a2.name["toLocaleLowerCase"]().includes(
            _0x2b1440.trim().toLocaleLowerCase(),
          ),
        ),
      [_0x2b1440, _0x360941],
    ),
    _0x10554a = (_0x1d21a9) => {
      let _0x43b138 = _0x4ca04b(_0x360941, _0x41387f.pivot);
      try {
        (_0x1d21a9(_0x43b138), _0x11d231({ pivot: _0x43b138.toJSON() }));
      } finally {
        _0x43b138.dispose();
      }
    },
    _0x4c54d5 = (_0x2d8033, _0x534906) => {
      _0x31b594 &&
        (_0x10554a((_0x514130) => {
          if (_0x31b594.kind === "field") {
            let _0xc7905a = _0x514130.getFieldPositionInfoById(_0x31b594.id),
              _0x595b2a =
                _0xc7905a.area === _0x2d8033 && _0xc7905a.index < _0x534906
                  ? _0x534906 - 1
                  : _0x534906;
            _0x514130.updateFieldPosition(_0x31b594.id, _0x2d8033, _0x595b2a);
            return;
          }
          Ai(_0x514130, _0x31b594.id, _0x2d8033, _0x534906);
        }),
        _0x3051fa(null),
        _0x1e049d(null));
    };
  return _0x191681("div", {
    className: "univer-flex univer-min-h-full univer-flex-col",
    children: [
      _0x7cf1c3(_0x5055b1, {
        ariaLabel: _0x54eea0.t("bases-dashboard-ui.pivot.pivotConfiguration"),
        className: "univer-shrink-0 univer-px-3",
        items: [
          {
            label: _0x54eea0.t("bases-dashboard-ui.pivot.fields"),
            panelId: "base-pivot-fields",
            value: "fields",
          },
          {
            label: _0x54eea0.t("bases-dashboard-ui.pivot.options"),
            panelId: "base-pivot-options",
            value: "options",
          },
        ],
        value: _0x17cdc8,
        onChange: _0x4550ec,
      }),
      _0x7cf1c3("div", {
        ref: _0x584598,
        className: _0x54a8f6(
          "univer-min-h-0 univer-flex-1 univer-overflow-y-auto univer-p-3",
          _0x5cefcd,
        ),
        onDragOver: (_0x26538b) => {
          let _0x406548 = _0x584598.current;
          if (!_0x406548) return;
          let _0x1885f0 = _0x406548.getBoundingClientRect();
          _0x26538b.clientY < _0x1885f0.top + 48
            ? (_0x406548.scrollTop -= 16)
            : _0x26538b.clientY > _0x1885f0.bottom - 48 &&
              (_0x406548.scrollTop += 16);
        },
        children:
          _0x17cdc8 === "options"
            ? _0x7cf1c3(ki, { config: _0x41387f, commit: _0x10554a })
            : _0x191681("div", {
                className: "univer-flex univer-flex-col univer-gap-4",
                children: [
                  _0x191681("div", {
                    children: [
                      _0x7cf1c3("div", {
                        className:
                          "univer-mb-2 univer-text-sm univer-font-medium univer-text-gray-700 dark:!univer-text-gray-200",
                        children: _0x54eea0.t(
                          "bases-dashboard-ui.pivot.sourceFields",
                        ),
                      }),
                      _0x7cf1c3(_0x3bf9e2, {
                        allowClear: true,
                        slot: _0x7cf1c3(_0x20699b, {}),
                        value: _0x2b1440,
                        placeholder: _0x54eea0.t(
                          "bases-dashboard-ui.pivot.searchFields",
                        ),
                        onChange: _0x37ba77,
                      }),
                      _0x7cf1c3("div", {
                        className:
                          "univer-mt-2 univer-flex univer-max-h-60 univer-flex-col univer-overflow-y-auto",
                        children: _0x1b8eeb.map((_0x202ef0) =>
                          _0x7cf1c3(
                            Ci,
                            {
                              config: _0x41387f,
                              field: _0x202ef0,
                              onAdd: (_0x5bc417) =>
                                _0x10554a((_0x11bfea) =>
                                  Ai(
                                    _0x11bfea,
                                    _0x202ef0.id,
                                    _0x5bc417,
                                    _0x11bfea.getFieldCountByArea(_0x5bc417),
                                  ),
                                ),
                              onCheckedChange: (_0x24ef00) =>
                                _0x10554a((_0x3cdca2) => {
                                  let _0x4eafbe =
                                    _0x3cdca2.getTableFieldsByDataFieldId(
                                      _0x202ef0.id,
                                    );
                                  if (!_0x24ef00) {
                                    _0x4eafbe.forEach((_0x57c14f) =>
                                      _0x3cdca2.removeField(_0x57c14f.getId()),
                                    );
                                    return;
                                  }
                                  if (_0x4eafbe.length === 0) {
                                    let _0xc77211 = Mi(_0x202ef0)
                                      ? _0x1f286e.Value
                                      : _0x1f286e.Row;
                                    _0x3cdca2.addFieldWithSourceId(
                                      _0x202ef0.id,
                                      _0xc77211,
                                    );
                                  }
                                }),
                              onDragStart: () =>
                                _0x3051fa({ kind: "source", id: _0x202ef0.id }),
                            },
                            _0x202ef0.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  _0x7cf1c3("div", {
                    className: "univer-grid univer-grid-cols-2 univer-gap-3",
                    children: bi.map((_0x580ac5) =>
                      _0x7cf1c3(
                        Ti,
                        {
                          area: _0x580ac5.area,
                          dropTarget: _0x50cd65,
                          fields: _0x41387f.pivot[_0x580ac5.key],
                          label: _0x54eea0.t(_0x580ac5.label),
                          snapshot: _0x41387f.pivot,
                          onDragEnd: () => {
                            (_0x3051fa(null), _0x1e049d(null));
                          },
                          onDragStart: (_0x1b7af8) =>
                            _0x3051fa({
                              kind: "field",
                              id: _0x1b7af8,
                              area: _0x580ac5.area,
                            }),
                          onDragOver: (_0x48a06b) =>
                            _0x1e049d({
                              area: _0x580ac5.area,
                              index: _0x48a06b,
                            }),
                          onDrop: (_0x5ca63c) =>
                            _0x4c54d5(_0x580ac5.area, _0x5ca63c),
                          onFilter: _0x27b65a,
                          onRemove: (_0x1712f9) =>
                            _0x10554a((_0x307019) =>
                              _0x307019.removeField(_0x1712f9),
                            ),
                          onSettings: _0x3f3f80,
                        },
                        _0x580ac5.area,
                      ),
                    ),
                  }),
                  _0x49a2e7 &&
                    _0x7cf1c3(
                      Di,
                      {
                        fieldId: _0x49a2e7,
                        snapshot: _0x41387f.pivot,
                        table: _0x360941,
                        onCancel: () => _0x27b65a(null),
                        onCommit: (_0x41f9fd, _0x16e6f2) => {
                          (_0x10554a((_0x333386) => {
                            let _0x131c93 =
                                _0x333386.getDataFieldByTableId(_0x49a2e7),
                              _0x324cc3 =
                                (_0x131c93 == null
                                  ? undefined
                                  : _0x131c93.items) ?? [];
                            (_0x333386.setLabelFilterInfo(_0x49a2e7, {
                              type: _0x20ef44.ManualFilter,
                              list: _0x41f9fd,
                              isAll: _0x41f9fd.length === _0x324cc3.length,
                            }),
                              _0x333386.setSortInfo(
                                _0x49a2e7,
                                _0x16e6f2 === undefined
                                  ? undefined
                                  : { type: _0x16e6f2 },
                              ));
                          }),
                            _0x27b65a(null));
                        },
                      },
                      _0x49a2e7,
                    ),
                  _0x252b0c &&
                    _0x7cf1c3(
                      Oi,
                      {
                        field: _0x41387f.pivot["measure"][_0x252b0c],
                        onCancel: () => _0x3f3f80(null),
                        onCommit: (_0x5d3931, _0x3b4a49, _0x1ee236) => {
                          (_0x10554a((_0x242f34) => {
                            (_0x242f34.renameField(_0x252b0c, _0x5d3931),
                              _0x242f34.setSubtotalType(_0x252b0c, _0x3b4a49),
                              _0x242f34.setFieldFormat(
                                _0x252b0c,
                                _0x1ee236 || undefined,
                              ));
                          }),
                            _0x3f3f80(null));
                        },
                      },
                      _0x252b0c,
                    ),
                ],
              }),
      }),
    ],
  });
}
function Ci(_0x5015fc) {
  let {
      config: _0x1f8423,
      field: _0x522d8d,
      onAdd: _0x1fdcfa,
      onCheckedChange: _0x142713,
      onDragStart: _0xde14e4,
    } = _0x5015fc,
    _0x462506 = _0x50ddfa(_0x523808),
    _0x15aa1f = [
      ...Object.values(_0x1f8423.pivot["dimension"]),
      ...Object.values(_0x1f8423.pivot["measure"]),
    ].some((_0x54922a) => _0x54922a.dataFieldId === _0x522d8d.id),
    _0x231077 = bi.map((_0x4f0b04) => ({
      type: "item",
      children: _0x462506.t(Ni(_0x4f0b04.area)),
      onSelect: () => _0x1fdcfa(_0x4f0b04.area),
    }));
  return _0x191681("div", {
    draggable: true,
    className:
      "univer-group\x20univer-flex\x20univer-h-8\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-px-1\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
    onDragStart: _0xde14e4,
    children: [
      _0x7cf1c3(_0x3b9d17, { className: "univer-text-gray-400" }),
      _0x7cf1c3(_0x4d10f1, {
        checked: _0x15aa1f,
        onChange: (_0x5ce223) => _0x142713(!!_0x5ce223),
      }),
      _0x7cf1c3(wi, { field: _0x522d8d }),
      _0x7cf1c3("span", {
        className:
          "univer-min-w-0 univer-flex-1 univer-truncate univer-text-xs",
        children: _0x522d8d.name,
      }),
      _0x7cf1c3(_0x53364d, {
        align: "end",
        items: _0x231077,
        children: _0x7cf1c3("span", {
          className:
            "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
          children: _0x7cf1c3(_0x3a815c, {}),
        }),
      }),
    ],
  });
}
function wi({ field: _0x53c64b }) {
  return Mi(_0x53c64b)
    ? _0x7cf1c3(_0x27548b, { className: "univer-text-gray-400" })
    : _0x53c64b.type === _0x54c2c1.Date ||
        _0x53c64b.type === _0x54c2c1.CreatedAt ||
        _0x53c64b.type === _0x54c2c1.UpdatedAt
      ? _0x7cf1c3(_0x422962, { className: "univer-text-gray-400" })
      : _0x7cf1c3(_0x230e1c, { className: "univer-text-gray-400" });
}
function Ti(_0x3d8f76) {
  let {
      area: _0x19a38e,
      dropTarget: _0x170597,
      fields: _0x338741,
      label: _0x494ecd,
      snapshot: _0x52b6e2,
    } = _0x3d8f76,
    _0x1d293f = _0x50ddfa(_0x523808);
  return _0x191681("section", {
    className: _0x54a8f6(
      "univer-min-h-32\x20univer-rounded-lg\x20univer-border\x20univer-bg-gray-50\x20univer-p-2\x20dark:!univer-bg-gray-800",
      _0x2dc963,
    ),
    onDragOver: (_0x42ca56) => {
      (_0x42ca56.preventDefault(), _0x3d8f76.onDragOver(_0x338741.length));
    },
    onDrop: (_0x1b8f93) => {
      (_0x1b8f93.preventDefault(),
        _0x3d8f76.onDrop(
          (_0x170597 == null ? undefined : _0x170597.area) === _0x19a38e
            ? _0x170597.index
            : _0x338741.length,
        ));
    },
    children: [
      _0x7cf1c3("div", {
        className:
          "univer-mb-2 univer-text-xs univer-font-medium univer-text-gray-600 dark:!univer-text-gray-300",
        children: _0x494ecd,
      }),
      _0x191681("div", {
        className: "univer-flex univer-flex-col",
        children: [
          _0x338741.map((_0x46e624, _0x23c168) => {
            let _0x4e83d0 =
              _0x52b6e2.dimension[_0x46e624] ?? _0x52b6e2.measure[_0x46e624];
            return _0x4e83d0
              ? _0x191681(
                  "div",
                  {
                    onDragOver: (_0x575ebc) => {
                      (_0x575ebc.preventDefault(), _0x575ebc.stopPropagation());
                      let _0x2158a9 =
                        _0x575ebc.currentTarget["getBoundingClientRect"]();
                      _0x3d8f76.onDragOver(
                        _0x23c168 +
                          +(
                            _0x575ebc.clientY >
                            _0x2158a9.top + _0x2158a9.height / 2
                          ),
                      );
                    },
                    onDrop: (_0x2416c3) => {
                      (_0x2416c3.preventDefault(),
                        _0x2416c3.stopPropagation(),
                        _0x3d8f76.onDrop(
                          (_0x170597 == null ? undefined : _0x170597.area) ===
                            _0x19a38e
                            ? _0x170597.index
                            : _0x23c168,
                        ));
                    },
                    children: [
                      (_0x170597 == null ? undefined : _0x170597.area) ===
                        _0x19a38e &&
                        _0x170597.index === _0x23c168 &&
                        _0x7cf1c3("div", {
                          className:
                            "univer-h-0.5 univer-rounded univer-bg-primary-600",
                        }),
                      _0x7cf1c3(Ei, {
                        area: _0x19a38e,
                        field: _0x4e83d0,
                        onDragEnd: _0x3d8f76.onDragEnd,
                        onDragStart: () => _0x3d8f76.onDragStart(_0x46e624),
                        onFilter: () => _0x3d8f76.onFilter(_0x46e624),
                        onRemove: () => _0x3d8f76.onRemove(_0x46e624),
                        onSettings: () => _0x3d8f76.onSettings(_0x46e624),
                      }),
                    ],
                  },
                  _0x46e624,
                )
              : null;
          }),
          (_0x170597 == null ? undefined : _0x170597.area) === _0x19a38e &&
            _0x170597.index === _0x338741.length &&
            _0x7cf1c3("div", {
              className: "univer-h-0.5 univer-rounded univer-bg-primary-600",
            }),
          _0x338741.length === 0 &&
            _0x7cf1c3("div", {
              className:
                "univer-grid univer-h-20 univer-place-items-center univer-text-center univer-text-xs univer-text-gray-400",
              children: _0x1d293f.t("bases-dashboard-ui.pivot.dropFieldsHere"),
            }),
        ],
      }),
    ],
  });
}
function Ei(_0x4af29e) {
  let _0x581216 = _0x50ddfa(_0x523808),
    _0x4a1f5a = _0x4af29e.area === _0x1f286e.Value,
    _0x19d82f = [
      {
        type: "item",
        children: _0x581216.t("bases-dashboard-ui.pivot.removeField"),
        onSelect: _0x4af29e.onRemove,
      },
      {
        type: "item",
        children: _0x581216.t(
          _0x4a1f5a
            ? "bases-dashboard-ui.pivot.fieldSettings"
            : "bases-dashboard-ui.pivot.filterField",
        ),
        onSelect: _0x4a1f5a ? _0x4af29e.onSettings : _0x4af29e.onFilter,
      },
    ];
  return _0x191681("div", {
    draggable: true,
    className:
      "univer-my-1 univer-flex univer-h-8 univer-items-center univer-gap-2 univer-rounded-md univer-border univer-border-gray-200 univer-bg-gray-0 univer-px-2 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    onDragEnd: _0x4af29e.onDragEnd,
    onDragStart: _0x4af29e.onDragStart,
    children: [
      _0x7cf1c3(_0x3b9d17, { className: "univer-text-gray-400" }),
      _0x7cf1c3(_0x2d416f, {
        title: _0x4af29e.field["displayName"],
        children: _0x7cf1c3("span", {
          className:
            "univer-min-w-0\x20univer-flex-1\x20univer-truncate\x20univer-text-xs",
          children: _0x4af29e.field["displayName"],
        }),
      }),
      _0x7cf1c3(_0x53364d, {
        align: "end",
        items: _0x19d82f,
        children: _0x7cf1c3("span", {
          className:
            "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
          children: _0x7cf1c3(_0x3a815c, {}),
        }),
      }),
    ],
  });
}
function Di(_0x31f237) {
  var _0x199970, _0x2aa7f1;
  let _0x44da6c = _0x50ddfa(_0x523808),
    {
      format: _0x333b88,
      items: _0x1e9df9,
      itemTypes: _0xfb0c3b,
    } = _0x109938(() => {
      let _0x3273bd = _0x4ca04b(_0x31f237.table, _0x31f237.snapshot);
      try {
        let _0x2bce51 = _0x3273bd.getDataFieldByTableId(_0x31f237.fieldId);
        return {
          format: _0x2bce51 == null ? undefined : _0x2bce51.format,
          items: [...((_0x2bce51 == null ? undefined : _0x2bce51.items) ?? [])],
          itemTypes: [
            ...((_0x2bce51 == null ? undefined : _0x2bce51.itemTypes) ?? []),
          ],
        };
      } finally {
        _0x3273bd.dispose();
      }
    }, [_0x31f237.fieldId, _0x31f237.snapshot, _0x31f237.table]),
    _0x3aea82 =
      (_0x199970 = _0x31f237.snapshot["dimension"][_0x31f237.fieldId]) == null
        ? undefined
        : _0x199970.filterInfo,
    [_0xe33a96, _0x414c1a] = _0x457b1d(
      (_0x3aea82 == null ? undefined : _0x3aea82.type) ===
        _0x20ef44.ManualFilter
        ? _0x3aea82.list
        : _0x1e9df9,
    ),
    [_0x5f1076, _0x399e7d] = _0x457b1d(
      (_0x2aa7f1 = _0x31f237.snapshot["dimension"][_0x31f237.fieldId]) ==
        null || (_0x2aa7f1 = _0x2aa7f1.sortInfo) == null
        ? undefined
        : _0x2aa7f1.type,
    ),
    _0x14e07f = _0xe33a96.length === _0x1e9df9.length;
  return _0x191681("section", {
    className: _0x54a8f6(
      "univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900",
      _0x2dc963,
    ),
    children: [
      _0x7cf1c3("div", {
        className: "univer-mb-3 univer-text-sm univer-font-medium",
        children: _0x44da6c.t("bases-dashboard-ui.pivot.filterField"),
      }),
      _0x191681("div", {
        className: "univer-flex",
        children: [
          _0x191681(_0x8e4a34, {
            className: "univer-flex-1",
            variant: _0x5f1076 === _0x30b35f.ascending ? "primary" : "default",
            onClick: () => _0x399e7d(_0x30b35f.ascending),
            children: [
              _0x7cf1c3(_0x2e6653, {}),
              _0x44da6c.t("bases-dashboard-ui.pivot.ascending"),
            ],
          }),
          _0x191681(_0x8e4a34, {
            className: "univer-flex-1",
            variant: _0x5f1076 === _0x30b35f.descending ? "primary" : "default",
            onClick: () => _0x399e7d(_0x30b35f.descending),
            children: [
              _0x7cf1c3(_0x15fed8, {}),
              _0x44da6c.t("bases-dashboard-ui.pivot.descending"),
            ],
          }),
        ],
      }),
      _0x191681("div", {
        className: "univer-my-3\x20univer-max-h-64\x20univer-overflow-y-auto",
        children: [
          _0x191681("label", {
            className:
              "univer-flex\x20univer-h-7\x20univer-items-center\x20univer-gap-2\x20univer-text-sm",
            children: [
              _0x7cf1c3(_0x4d10f1, {
                checked: _0x14e07f,
                indeterminate: _0xe33a96.length > 0 && !_0x14e07f,
                onChange: () => _0x414c1a(_0x14e07f ? [] : _0x1e9df9),
              }),
              _0x44da6c.t("bases-dashboard-ui.pivot.selectAll"),
            ],
          }),
          _0x1e9df9.map((_0x4edcae, _0x3b2f64) =>
            _0x191681(
              "label",
              {
                className:
                  "univer-flex\x20univer-h-7\x20univer-items-center\x20univer-gap-2\x20univer-text-sm",
                children: [
                  _0x7cf1c3(_0x4d10f1, {
                    checked: _0xe33a96.includes(_0x4edcae),
                    onChange: () =>
                      _0x414c1a((_0x5c44a9) =>
                        _0x5c44a9.includes(_0x4edcae)
                          ? _0x5c44a9.filter(
                              (_0x58657e) => _0x58657e !== _0x4edcae,
                            )
                          : [..._0x5c44a9, _0x4edcae],
                      ),
                  }),
                  _0x7cf1c3("span", {
                    className: "univer-truncate",
                    children: ji(
                      _0x4edcae,
                      _0xfb0c3b[_0x3b2f64],
                      _0x333b88,
                      _0x44da6c.t("bases-dashboard-ui.pivot.blank"),
                    ),
                  }),
                ],
              },
              _0x4edcae,
            ),
          ),
        ],
      }),
      _0x191681("div", {
        className:
          "univer-flex\x20univer-items-center\x20univer-justify-between\x20univer-gap-2",
        children: [
          _0x7cf1c3(_0x8e4a34, {
            variant: "link",
            onClick: () => _0x31f237.onCommit(_0x1e9df9, _0x5f1076),
            children: _0x44da6c.t("bases-dashboard-ui.pivot.clearFilter"),
          }),
          _0x191681("div", {
            className: "univer-flex\x20univer-gap-2",
            children: [
              _0x7cf1c3(_0x8e4a34, {
                onClick: _0x31f237.onCancel,
                children: _0x44da6c.t("bases-dashboard-ui.pivot.cancel"),
              }),
              _0x7cf1c3(_0x8e4a34, {
                variant: "primary",
                disabled: _0xe33a96.length === 0,
                onClick: () => _0x31f237.onCommit(_0xe33a96, _0x5f1076),
                children: _0x44da6c.t("bases-dashboard-ui.pivot.confirm"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Oi(_0x91fac1) {
  var _0x28eac6, _0x5af19f, _0x17242b;
  let _0x5aaba0 = _0x50ddfa(_0x523808),
    [_0x4f6f68, _0x2bc793] = _0x457b1d(
      ((_0x28eac6 = _0x91fac1.field) == null
        ? undefined
        : _0x28eac6.displayName) ?? "",
    ),
    [_0x5b69af, _0x4faf14] = _0x457b1d(
      ((_0x5af19f = _0x91fac1.field) == null
        ? undefined
        : _0x5af19f.subtotal) ?? _0x39cc3f.sum,
    ),
    [_0x250129, _0x5f128c] = _0x457b1d(
      ((_0x17242b = _0x91fac1.field) == null ? undefined : _0x17242b.format) ??
        "",
    );
  return _0x91fac1.field
    ? _0x191681("section", {
        className: _0x54a8f6(
          "univer-flex univer-flex-col univer-gap-3 univer-rounded-lg univer-border univer-bg-gray-0 univer-p-3 dark:!univer-bg-gray-900",
          _0x2dc963,
        ),
        children: [
          _0x7cf1c3("div", {
            className: "univer-text-sm univer-font-medium",
            children: _0x5aaba0.t("bases-dashboard-ui.pivot.fieldSettings"),
          }),
          _0x191681("label", {
            className:
              "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
            children: [
              _0x5aaba0.t("bases-dashboard-ui.pivot.displayName"),
              _0x7cf1c3(_0x3bf9e2, { value: _0x4f6f68, onChange: _0x2bc793 }),
            ],
          }),
          _0x191681("label", {
            className:
              "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
            children: [
              _0x5aaba0.t("bases-dashboard-ui.pivot.summarizeBy"),
              _0x7cf1c3(_0x1aee39, {
                value: String(_0x5b69af),
                options: xi.map((_0x1ebc18) => ({
                  value: String(_0x1ebc18.value),
                  label: _0x5aaba0.t(_0x1ebc18.localeKey),
                })),
                onChange: (_0x4a6c55) => {
                  let _0x362360 = xi.find(
                    (_0x187d48) => String(_0x187d48.value) === _0x4a6c55,
                  );
                  _0x362360 && _0x4faf14(_0x362360.value);
                },
              }),
            ],
          }),
          _0x191681("label", {
            className:
              "univer-flex univer-flex-col univer-gap-1 univer-text-xs",
            children: [
              _0x5aaba0.t("bases-dashboard-ui.pivot.numberFormat"),
              _0x7cf1c3(_0x3bf9e2, { value: _0x250129, onChange: _0x5f128c }),
            ],
          }),
          _0x191681("div", {
            className: "univer-flex univer-justify-end univer-gap-2",
            children: [
              _0x7cf1c3(_0x8e4a34, {
                onClick: _0x91fac1.onCancel,
                children: _0x5aaba0.t("bases-dashboard-ui.pivot.cancel"),
              }),
              _0x7cf1c3(_0x8e4a34, {
                variant: "primary",
                disabled: !_0x4f6f68.trim(),
                onClick: () =>
                  _0x91fac1.onCommit(_0x4f6f68.trim(), _0x5b69af, _0x250129),
                children: _0x5aaba0.t("bases-dashboard-ui.pivot.confirm"),
              }),
            ],
          }),
        ],
      })
    : null;
}
function ki(_0x30fba1) {
  let { config: _0x5c81d1, commit: _0x4138f0 } = _0x30fba1,
    _0x19dd27 = _0x50ddfa(_0x523808),
    _0x26c5f8 = _0x5c81d1.pivot["options"],
    _0x804c2 = (_0xbfaadc) =>
      _0x4138f0((_0x4ba977) =>
        _0x4ba977.setOptions({ ..._0x4ba977.getOptions(), ..._0xbfaadc }),
      );
  return _0x191681("div", {
    className: "univer-flex univer-flex-col univer-gap-4",
    children: [
      _0x191681("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x19dd27.t("bases-dashboard-ui.pivot.layout"),
          _0x7cf1c3(_0x1aee39, {
            className: "univer-w-36",
            value: String(_0x5c81d1.pivot["layout"]),
            options: [
              {
                value: String(_0xb4eeaf.tabular),
                label: _0x19dd27.t("bases-dashboard-ui.pivot.layoutTabular"),
              },
              {
                value: String(_0xb4eeaf.compact),
                label: _0x19dd27.t("bases-dashboard-ui.pivot.layoutCompact"),
              },
              {
                value: String(_0xb4eeaf.outline),
                label: _0x19dd27.t("bases-dashboard-ui.pivot.layoutOutline"),
              },
            ],
            onChange: (_0x53021a) => {
              let _0x1ec64a = [
                _0xb4eeaf.tabular,
                _0xb4eeaf.compact,
                _0xb4eeaf.outline,
              ].find((_0x53f26c) => String(_0x53f26c) === _0x53021a);
              _0x1ec64a !== undefined &&
                _0x4138f0((_0x4693de) => _0x4693de.setLayout(_0x1ec64a));
            },
          }),
        ],
      }),
      [
        {
          key: "repeatRowLabels",
          label: "bases-dashboard-ui.pivot.repeatRowLabels",
          defaultValue: false,
        },
        {
          key: "repeatColLabels",
          label: "bases-dashboard-ui.pivot.repeatColumnLabels",
          defaultValue: false,
        },
        {
          key: "showRowSubtotal",
          label: "bases-dashboard-ui.pivot.showRowSubtotal",
          defaultValue: true,
        },
        {
          key: "showRowGrandTotal",
          label: "bases-dashboard-ui.pivot.showRowGrandTotal",
          defaultValue: true,
        },
        {
          key: "showColSubtotal",
          label: "bases-dashboard-ui.pivot.showColumnSubtotal",
          defaultValue: true,
        },
        {
          key: "showColGrandTotal",
          label: "bases-dashboard-ui.pivot.showColumnGrandTotal",
          defaultValue: true,
        },
      ].map((_0xb80b8b) =>
        _0x191681(
          "label",
          {
            className:
              "univer-flex univer-items-center univer-gap-2 univer-text-sm",
            children: [
              _0x7cf1c3(_0x4d10f1, {
                checked: !!(_0x26c5f8[_0xb80b8b.key] ?? _0xb80b8b.defaultValue),
                disabled:
                  _0xb80b8b.key === "repeatRowLabels" &&
                  _0x5c81d1.pivot["layout"] === _0xb4eeaf.compact,
                onChange: (_0x3afed5) =>
                  _0x804c2({ [_0xb80b8b.key]: !!_0x3afed5 }),
              }),
              _0x19dd27.t(_0xb80b8b.label),
            ],
          },
          _0xb80b8b.key,
        ),
      ),
      _0x5c81d1.pivot["layout"] === _0xb4eeaf.outline &&
        _0x191681("label", {
          className:
            "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
          children: [
            _0x19dd27.t("bases-dashboard-ui.pivot.rowSubtotalPosition"),
            _0x7cf1c3(_0x1aee39, {
              className: "univer-w-36",
              value: String(_0x26c5f8.rowSubtotalPosition ?? _0x3dc3b4.top),
              options: [
                {
                  value: String(_0x3dc3b4.top),
                  label: _0x19dd27.t("bases-dashboard-ui.pivot.top"),
                },
                {
                  value: String(_0x3dc3b4.bottom),
                  label: _0x19dd27.t("bases-dashboard-ui.pivot.bottom"),
                },
              ],
              onChange: (_0x464598) => {
                let _0x345343 = [_0x3dc3b4.top, _0x3dc3b4.bottom].find(
                  (_0x4afccc) => String(_0x4afccc) === _0x464598,
                );
                _0x345343 !== undefined &&
                  _0x804c2({ rowSubtotalPosition: _0x345343 });
              },
            }),
          ],
        }),
      _0x191681("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x19dd27.t("bases-dashboard-ui.pivot.valuePosition"),
          _0x7cf1c3(_0x1aee39, {
            className: "univer-w-36",
            value: String(
              _0x5c81d1.pivot["valuePosition"] === _0x323af2.None
                ? _0x323af2.Column
                : _0x5c81d1.pivot["valuePosition"],
            ),
            options: [
              {
                value: String(_0x323af2.Column),
                label: _0x19dd27.t("bases-dashboard-ui.pivot.columns"),
              },
              {
                value: String(_0x323af2.Row),
                label: _0x19dd27.t("bases-dashboard-ui.pivot.rows"),
              },
            ],
            onChange: (_0x236381) => {
              let _0x33631e = [_0x323af2.Column, _0x323af2.Row].find(
                (_0x1f9574) => String(_0x1f9574) === _0x236381,
              );
              _0x33631e !== undefined &&
                _0x4138f0((_0x15e03f) =>
                  _0x15e03f.updateValuePosition(
                    _0x33631e,
                    _0x15e03f.getValueIndex() < 0
                      ? 0
                      : _0x15e03f.getValueIndex(),
                  ),
                );
            },
          }),
        ],
      }),
      _0x191681("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x19dd27.t("bases-dashboard-ui.pivot.pageWrap"),
          _0x7cf1c3(_0xc03a68, {
            className: "univer-w-24",
            min: 1,
            max: 20,
            value: _0x26c5f8.pageWrap ?? 1,
            onChange: (_0x3d91bb) => {
              let _0x2fb751 = Number(_0x3d91bb);
              Number.isFinite(_0x2fb751) &&
                _0x2fb751 >= 1 &&
                _0x804c2({ pageWrap: _0x2fb751 });
            },
          }),
        ],
      }),
      _0x191681("label", {
        className:
          "univer-flex univer-items-center univer-justify-between univer-gap-2 univer-text-sm",
        children: [
          _0x19dd27.t("bases-dashboard-ui.pivot.pageDirection"),
          _0x7cf1c3(_0x1aee39, {
            className: "univer-w-36",
            value: String(_0x26c5f8.pageOverThenDown ?? false),
            options: [
              {
                value: "false",
                label: _0x19dd27.t("bases-dashboard-ui.pivot.downThenAcross"),
              },
              {
                value: "true",
                label: _0x19dd27.t("bases-dashboard-ui.pivot.acrossThenDown"),
              },
            ],
            onChange: (_0x3598cd) =>
              _0x804c2({ pageOverThenDown: _0x3598cd === "true" }),
          }),
        ],
      }),
    ],
  });
}
function Ai(_0x4280d4, _0x219abf, _0x136e19, _0x12d61f) {
  let _0x2936d6 = _0x4280d4
    .getTableFieldsByDataFieldId(_0x219abf)
    .find(
      (_0x4a62f9) =>
        _0x4280d4.getFieldPositionInfoById(_0x4a62f9.getId()).area !==
        _0x1f286e.Value,
    );
  if (_0x136e19 !== _0x1f286e.Value && _0x2936d6) {
    _0x4280d4.updateFieldPosition(_0x2936d6.getId(), _0x136e19, _0x12d61f);
    return;
  }
  _0x4280d4.addFieldWithSourceId(_0x219abf, _0x136e19, _0x12d61f);
}
function ji(_0x4a4831, _0x4cb7b5, _0x448c62, _0x3c351a) {
  return _0x4cb7b5 === _0x3d8c8e.blank
    ? _0x3c351a
    : _0x4cb7b5 === _0x3d8c8e.date && _0x448c62
      ? _0x3f181c.format(_0x448c62, Number(_0x4a4831))
      : _0x4a4831;
}
function Mi(_0x433479) {
  return (
    _0x433479.type === _0x54c2c1.Number ||
    _0x433479.type === _0x54c2c1.Currency ||
    _0x433479.type === _0x54c2c1.Progress ||
    _0x433479.type === _0x54c2c1.Rating
  );
}
function Ni(_0x394e45) {
  switch (_0x394e45) {
    case _0x1f286e.Row:
      return "bases-dashboard-ui.pivot.addToRow";
    case _0x1f286e.Column:
      return "bases-dashboard-ui.pivot.addToColumn";
    case _0x1f286e.Value:
      return "bases-dashboard-ui.pivot.addToValue";
    default:
      return "bases-dashboard-ui.pivot.addToFilter";
  }
}
function Pi({
  config: _0x42888b,
  onChange: _0x5db31c,
  runtime: _0x22dc7e,
  table: _0x1fc61b,
}) {
  let _0x509c55 = _0x50ddfa(_0x523808),
    [_0x3bb0ff, _0x13a17f] = _0x457b1d("chart");
  return _0x191681("aside", {
    className:
      "univer-flex univer-h-full univer-min-h-0 univer-w-96 univer-shrink-0 univer-flex-col univer-border-l univer-border-gray-200 univer-bg-gray-0 dark:!univer-border-gray-700 dark:!univer-bg-gray-900",
    children: [
      _0x7cf1c3(_0x5055b1, {
        ariaLabel: _0x509c55.t("bases-dashboard-ui.pivot.name"),
        className: "univer-mx-auto univer-mt-4 univer-shrink-0",
        items: [
          {
            label: _0x509c55.t("bases-dashboard-ui.pivot.chartConfiguration"),
            panelId: "base-pivot-chart-configuration",
            value: "chart",
          },
          {
            label: _0x509c55.t("bases-dashboard-ui.pivot.pivotConfiguration"),
            panelId: "base-pivot-table-configuration",
            value: "pivot",
          },
        ],
        value: _0x3bb0ff,
        variant: "segmented",
        onChange: _0x13a17f,
      }),
      _0x7cf1c3("div", {
        className: "univer-min-h-0\x20univer-flex-1\x20univer-overflow-auto",
        children:
          _0x3bb0ff === "chart"
            ? _0x22dc7e &&
              _0x7cf1c3(Cr, {
                config: _0x42888b,
                runtime: _0x22dc7e,
                tableName: _0x1fc61b.name,
                onChange: _0x5db31c,
              })
            : _0x7cf1c3(Si, {
                config: _0x42888b,
                table: _0x1fc61b,
                onChange: _0x5db31c,
              }),
      }),
    ],
  });
}
function Fi({ pivot: _0x23a2ee, view: _0x2b7c9d }) {
  let _0x22121f = _0x50ddfa(_0x523808),
    _0x38e0ad = _0x109938(
      () =>
        Ii(
          _0x2b7c9d,
          _0x23a2ee,
          _0x22121f.t("bases-dashboard-ui.pivot.grandTotal"),
        ),
      [_0x22121f, _0x23a2ee, _0x2b7c9d],
    );
  return _0x191681("div", {
    className:
      "univer-h-full univer-overflow-auto univer-bg-gray-0 univer-p-2 dark:!univer-bg-gray-900",
    children: [
      _0x38e0ad.pageRows["length"] > 0 &&
        _0x7cf1c3("table", {
          className: "univer-mb-2\x20univer-border-collapse\x20univer-text-sm",
          children: _0x7cf1c3("tbody", { children: Li(_0x38e0ad.pageRows) }),
        }),
      _0x191681("table", {
        className: "univer-min-w-full univer-border-collapse univer-text-sm",
        children: [
          _0x38e0ad.headerRowCount > 0 &&
            _0x7cf1c3("thead", {
              className:
                "univer-sticky\x20univer-top-0\x20univer-z-10\x20univer-bg-gray-50\x20dark:!univer-bg-gray-800",
              children: Li(
                _0x38e0ad.rows["slice"](0, _0x38e0ad.headerRowCount),
              ),
            }),
          _0x7cf1c3("tbody", {
            children: Li(_0x38e0ad.rows["slice"](_0x38e0ad.headerRowCount)),
          }),
        ],
      }),
    ],
  });
}
function Ii(_0x385c06, _0x45ac08, _0x593352) {
  let _0x40e8e4 = _0x385c06.colView["rowCount"],
    _0x3ae83c = _0x385c06.rowView["colCount"],
    _0x5c2896 = _0x385c06.dataView["rowCount"],
    _0x2ab996 = _0x385c06.dataView["colCount"],
    _0x5a8f5e = Array.from(
      { length: _0x40e8e4 + _0x5c2896 },
      (_0x367032, _0x42c2f9) =>
        Array.from(
          { length: _0x3ae83c + _0x2ab996 },
          (_0xc054dc, _0x3f1069) => {
            var _0x38f962, _0x24a5d7;
            if (_0x42c2f9 < _0x40e8e4 && _0x3f1069 < _0x3ae83c)
              return Ri(
                _0x385c06.cornerView,
                _0x42c2f9,
                _0x3f1069,
                undefined,
                _0x593352,
                true,
                false,
                "corner:" + _0x42c2f9 + ":" + _0x3f1069,
              );
            if (_0x42c2f9 < _0x40e8e4) {
              var _0x5e96ab;
              let _0x131e64 = _0x3f1069 - _0x3ae83c,
                _0x44246c =
                  (_0x5e96ab = _0x385c06.colView["headerMap"][_0x42c2f9]) ==
                  null
                    ? undefined
                    : _0x5e96ab.tableFieldId;
              return Ri(
                _0x385c06.colView,
                _0x42c2f9,
                _0x131e64,
                _0x44246c ? _0x385c06.formatMap[_0x44246c] : undefined,
                _0x593352,
                true,
                Vi(_0x385c06.colView["info"][_0x131e64]),
                "column:" + _0x42c2f9 + ":" + _0x131e64,
              );
            }
            if (_0x3f1069 < _0x3ae83c) {
              var _0x57f974;
              let _0x4d5459 = _0x42c2f9 - _0x40e8e4,
                _0x3522e5 =
                  (_0x57f974 = _0x385c06.rowView["headerMap"][_0x3f1069]) ==
                  null
                    ? undefined
                    : _0x57f974.tableFieldId;
              return Ri(
                _0x385c06.rowView,
                _0x4d5459,
                _0x3f1069,
                _0x3522e5 ? _0x385c06.formatMap[_0x3522e5] : undefined,
                _0x593352,
                true,
                Vi(_0x385c06.rowView["info"][_0x4d5459]),
                "row:" + _0x4d5459 + ":" + _0x3f1069,
              );
            }
            let _0x2477d5 = _0x42c2f9 - _0x40e8e4,
              _0x214a17 = _0x3f1069 - _0x3ae83c,
              _0x25b8e4 = Math.max(
                ((_0x38f962 = _0x385c06.rowView["info"][_0x2477d5]) == null
                  ? undefined
                  : _0x38f962.valueIndex) ?? -1,
                ((_0x24a5d7 = _0x385c06.colView["info"][_0x214a17]) == null
                  ? undefined
                  : _0x24a5d7.valueIndex) ?? -1,
              ),
              _0x533706 = _0x45ac08.valueFields[_0x25b8e4 < 0 ? 0 : _0x25b8e4];
            return Ri(
              _0x385c06.dataView,
              _0x2477d5,
              _0x214a17,
              _0x533706 ? _0x385c06.formatMap[_0x533706] : undefined,
              _0x593352,
              false,
              Vi(_0x385c06.rowView["info"][_0x2477d5]) ||
                Vi(_0x385c06.colView["info"][_0x214a17]),
              "data:" + _0x2477d5 + ":" + _0x214a17,
            );
          },
        ),
    );
  return {
    headerColumnCount: _0x3ae83c,
    headerRowCount: _0x40e8e4,
    pageRows:
      _0x385c06.pageView["lastRow"] < 0 || _0x385c06.pageView["lastCol"] < 0
        ? []
        : Array.from(
            { length: _0x385c06.pageView["lastRow"] + 1 },
            (_0x53cd89, _0x20153a) =>
              Array.from(
                { length: _0x385c06.pageView["lastCol"] + 1 },
                (_0x1441f8, _0x5c588c) =>
                  Ri(
                    _0x385c06.pageView,
                    _0x20153a,
                    _0x5c588c,
                    undefined,
                    _0x593352,
                    true,
                    false,
                    "page:" + _0x20153a + ":" + _0x5c588c,
                  ),
              ),
          ),
    rows: _0x5a8f5e,
  };
}
function Li(_0x191fa3) {
  return _0x191fa3.map((_0x2318e6) => {
    var _0x21d3e1;
    return _0x7cf1c3(
      "tr",
      {
        children: _0x2318e6.map((_0x1cabc6) =>
          _0x7cf1c3(
            _0x1cabc6.isHeader ? "th" : "td",
            {
              className:
                "\n univer-whitespace-nowrap univer-border univer-border-gray-200 univer-px-3 univer-py-2\n univer-text-left\n dark:!univer-border-gray-700\n " +
                (_0x1cabc6.isTotal
                  ? "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20univer-bg-gray-50\x20univer-font-semibold\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20dark:!univer-bg-gray-800\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                  : "") +
                "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                (_0x1cabc6.isHeader ? "" : "univer-text-right") +
                "\n ",
              children: _0x1cabc6.value,
            },
            _0x1cabc6.key,
          ),
        ),
      },
      (_0x21d3e1 = _0x2318e6[0]) == null ? undefined : _0x21d3e1.key,
    );
  });
}
function Ri(
  _0xa9800f,
  _0x59e11e,
  _0x26c4d0,
  _0x5e214b,
  _0x2558b3,
  _0xea3909,
  _0x2e27aa,
  _0x5bdcc0,
) {
  var _0x3c18b8;
  let _0x23ee6e =
      (_0x3c18b8 = _0xa9800f.data[_0x59e11e]) == null
        ? undefined
        : _0x3c18b8[_0x26c4d0],
    _0x5d051f = _0x23ee6e == null ? undefined : _0x23ee6e.s,
    _0x554a2a =
      _0x2e27aa ||
      _0x5d051f === _0xcacff9.GrandTotal ||
      _0x5d051f === _0xcacff9.MultipleGrandTotal;
  return {
    isHeader: _0xea3909,
    isTotal: _0x554a2a || _0x5d051f === _0xcacff9.Subtotal,
    key: _0x5bdcc0,
    style: _0x5d051f,
    value:
      _0x554a2a && Bi(_0x23ee6e == null ? undefined : _0x23ee6e.v)
        ? _0x2558b3
        : zi(_0x23ee6e, _0x5e214b),
  };
}
function zi(_0x35b007, _0x4d26d0) {
  let _0x43ebee = _0x35b007 == null ? undefined : _0x35b007.v;
  return _0x2b780d(_0x43ebee)
    ? String(_0x43ebee.value ?? _0x43ebee.prefix ?? "")
    : _0x35dee4(_0x43ebee)
      ? "#" + _0x43ebee.errorType
      : _0x4d26d0 && typeof _0x43ebee == "number"
        ? _0x3f181c.format(_0x4d26d0, _0x43ebee)
        : String(_0x43ebee ?? "");
}
function Bi(_0x55fe6b) {
  return _0x55fe6b === undefined || _0x55fe6b === "";
}
function Vi(_0x4361b4) {
  return !!(
    (_0x4361b4 != null && _0x4361b4.isBottomTotal) ||
    (_0x4361b4 != null && _0x4361b4.isTopTotal) ||
    (_0x4361b4 != null && _0x4361b4.isSubtotal) ||
    (_0x4361b4 == null ? undefined : _0x4361b4.rowType) === "grandTotal"
  );
}
function Hi({ tableId: _0x22b312, unitId: _0x1dc858, viewId: _0x38c31d }) {
  let _0x1348db = _0x50ddfa(_0x534db2),
    _0x1894f2 = _0x50ddfa(_0xbc7fc0),
    _0x25a764 = _0x50ddfa(_0x1ea6d2),
    _0x3ce34b = _0x50ddfa(_0x523808),
    _0x46bb58 = _0x50ddfa(_0xa617fc),
    [_0x1c5734, _0x4f9769] = _0x457b1d(null),
    [_0x45bd9f, _0x1c70bf] = _0x457b1d(null),
    _0x36454d = _0x92bc33("base-pivot-chart-" + _0x50a363(8)),
    [_0x4f33e0, _0x313129] = _0x457b1d(false),
    _0x9235b8 = _0x1894f2.getUnit(_0x1dc858, _0x5a92c2.UNIVER_BASE),
    _0x53ac3f =
      _0x9235b8 == null ? undefined : _0x9235b8.getSnapshot().tables[_0x22b312],
    _0x563da4 = _0x53ac3f == null ? undefined : _0x53ac3f.views[_0x38c31d],
    _0x1f80eb = Ui(_0x563da4),
    _0x3ceb00 = qn(_0x1dc858, _0x22b312, _0x38c31d);
  if (
    (_0x504fac(() => {
      if (!_0x1f80eb) return;
      let _0x258749 = _0x36454d.current;
      return (
        _0x46bb58.acquireChartRuntime(_0x258749, {
          unitId: _0x1dc858,
          tableId: _0x22b312,
          viewId: _0x38c31d,
          filters: [],
        }),
        () => {
          _0x46bb58.releaseChartRuntime(_0x1dc858, _0x258749);
        }
      );
    }, [_0x1f80eb, _0x46bb58, _0x22b312, _0x1dc858, _0x38c31d]),
    _0x504fac(() => {
      if (!Ui(_0x563da4)) return;
      let _0x494a70 = true,
        _0x1ad4b5 = {
          unitId: _0x1dc858,
          tableId: _0x22b312,
          viewId: _0x38c31d,
          filters: [_0x563da4.filter ?? null],
        };
      return (
        _0x46bb58
          .refreshChartRuntime(_0x1dc858, _0x36454d.current, _0x1ad4b5)
          .then((_0x4b14bb) => {
            !_0x494a70 ||
              !_0x4b14bb ||
              (_0x4f9769(_0x4b14bb),
              _0x1c70bf(
                _0x46bb58.getChartRuntime(_0x1dc858, _0x36454d.current) ?? null,
              ),
              _0x313129(false));
          })
          .catch((_0x27860c) => {
            (_0x25a764.error(
              "[BasePivotView] Failed to calculate the pivot result.",
              _0x27860c,
            ),
              _0x494a70 && (_0x4f9769(null), _0x313129(true)));
          }),
        () => {
          _0x494a70 = false;
        }
      );
    }, [_0x25a764, _0x46bb58, _0x22b312, _0x1dc858, _0x563da4, _0x38c31d]),
    !_0x53ac3f || !Ui(_0x563da4))
  )
    return null;
  let _0x18d609 =
    _0x46bb58.getChartRuntime(_0x1dc858, _0x36454d.current) === _0x45bd9f
      ? _0x45bd9f
      : null;
  return _0x191681("div", {
    className:
      "univer-flex\x20univer-h-full\x20univer-min-h-0\x20univer-w-full\x20univer-bg-gray-50\x20dark:!univer-bg-gray-950",
    children: [
      _0x7cf1c3("div", {
        className: "univer-min-h-0 univer-min-w-0 univer-flex-1",
        children: _0x1c5734
          ? _0x191681("div", {
              className:
                "univer-grid\x20univer-h-full\x20univer-min-h-0\x20univer-gap-2\x20univer-p-2",
              style: {
                gridTemplateRows:
                  _0x563da4.config["displayMode"] === "chart-and-table"
                    ? "minmax(240px, 3fr) minmax(180px, 2fr)"
                    : "minmax(0,\x201fr)",
              },
              children: [
                _0x563da4.config["displayMode"] !== "table" &&
                  _0x18d609 &&
                  _0x7cf1c3("div", {
                    className:
                      "univer-relative univer-min-h-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-gray-200 dark:!univer-border-gray-700",
                    children: _0x7cf1c3(oi, {
                      isRowDirection: _0x56c275(
                        _0x563da4.config["chart"].orient,
                      ),
                      runtime: _0x18d609,
                    }),
                  }),
                _0x563da4.config["displayMode"] !== "chart" &&
                  _0x7cf1c3("div", {
                    className:
                      "univer-min-h-0 univer-overflow-hidden univer-rounded-lg univer-border univer-border-gray-200 dark:!univer-border-gray-700",
                    children: _0x7cf1c3(Fi, {
                      pivot: _0x563da4.config["pivot"],
                      view: _0x1c5734.view,
                    }),
                  }),
              ],
            })
          : _0x7cf1c3("div", {
              className:
                "univer-grid univer-h-full univer-place-items-center univer-text-sm univer-text-gray-500",
              children: _0x4f33e0
                ? _0x3ce34b.t("bases-dashboard-ui.pivot.calculationFailed")
                : _0x3ce34b.t("bases-dashboard-ui.pivot.calculating"),
            }),
      }),
      _0x3ceb00 &&
        _0x7cf1c3(Pi, {
          config: _0x563da4.config,
          runtime: _0x18d609,
          table: _0x53ac3f,
          onChange: (_0x4639bf) => {
            _0x1348db
              .executeCommand(_0x2c67a0.id, {
                unitId: _0x1dc858,
                tableId: _0x22b312,
                viewId: _0x38c31d,
                patch: _0x4639bf,
              })
              .catch((_0x518a0c) =>
                _0x25a764.error(
                  "[BasePivotView]\x20Failed\x20to\x20update\x20the\x20pivot\x20view.",
                  _0x518a0c,
                ),
              );
          },
        }),
    ],
  });
}
function Ui(_0x228bc6) {
  return (
    (_0x228bc6 == null ? undefined : _0x228bc6.type) === _0x5c001e.Pivot &&
    typeof _0x228bc6.config == "object" &&
    _0x228bc6.config !== null &&
    "pivot" in _0x228bc6.config &&
    "chart" in _0x228bc6.config &&
    "displayMode" in _0x228bc6.config
  );
}
let Wi = class extends _0x2b365f {
  constructor(
    _0x298aa8,
    _0x3570c3,
    _0x47fd8b,
    _0x3ab469,
    _0x35c1d0,
    _0x26f99d,
  ) {
    (super(),
      this.disposeWithMe(
        _0x3570c3.register({
          type: _0x5c001e.Pivot,
          renderMode: "dom",
          icon: _0x333ceb,
          component: Hi,
          menu: {
            get label() {
              return _0x26f99d.t("bases-dashboard-ui.pivot.name");
            },
            get description() {
              return _0x26f99d.t("bases-dashboard-ui.pivot.description");
            },
            get defaultName() {
              return _0x26f99d.t("bases-dashboard-ui.pivot.defaultName");
            },
          },
        }),
      ),
      this.disposeWithMe(
        _0x298aa8.register(Gi(_0x47fd8b, _0x3ab469, _0x35c1d0, _0x26f99d)),
      ));
  }
};
Wi = yr(
  [
    X(0, _0x45ece3),
    X(1, _0x4ebba5),
    X(2, _0x3dfd8c(_0x32c22b)),
    X(3, _0x534db2),
    X(4, _0x5ac54e),
    X(5, _0x3dfd8c(_0x523808)),
  ],
  Wi,
);
function Gi(_0x3f3af1, _0x4d1b1b, _0x5207f8, _0x2f7874) {
  return {
    change$: _0x2441fd(_0x3f3af1.change$, _0x5207f8.permissionPointUpdate$),
    component: di,
    get labels() {
      return {
        add: _0x2f7874.t("bases-dashboard-ui.dashboard.add"),
        configure: (_0x2f9ed5) =>
          _0x2f7874.t("bases-dashboard-ui.dashboard.configure", _0x2f9ed5),
        delete: _0x2f7874.t("bases-dashboard-ui.dashboard.delete"),
        new: _0x2f7874.t("bases-dashboard-ui.dashboard.new"),
        rename: _0x2f7874.t("bases-dashboard-ui.dashboard.rename"),
        search: _0x2f7874.t("bases-dashboard-ui.dashboard.search"),
        section: _0x2f7874.t("bases-dashboard-ui.dashboard.section"),
      };
    },
    getItems: (_0x18180e) => {
      let _0x415c64 = _0x3f3af1.getResource(_0x18180e);
      return _0x415c64.dashboardOrder["flatMap"]((_0x315efc) => {
        let _0x3896b2 = _0x415c64.dashboards[_0x315efc];
        return _0x3896b2
          ? [
              {
                id: _0x3896b2.id,
                name: _0x3896b2.name,
                readonly: !_0x336c8b(_0x5207f8, _0x18180e, _0x3896b2.id),
              },
            ]
          : [];
      });
    },
    create: async (_0x4e1935) => {
      let _0x39b3a2 = _0x3f3af1.getResource(_0x4e1935),
        _0x59068c = "dashboard-" + _0x50a363(8),
        _0xcd29fa = Ki(
          _0x39b3a2.dashboardOrder["flatMap"]((_0xd78119) => {
            let _0x56b8be = _0x39b3a2.dashboards[_0xd78119];
            return _0x56b8be ? [_0x56b8be.name] : [];
          }),
          (_0x57803d) =>
            _0x2f7874.t(
              "bases-dashboard-ui.dashboard.defaultName",
              String(_0x57803d),
            ),
        );
      return (await _0x4d1b1b.executeCommand(_0xe6165b.id, {
        unitId: _0x4e1935,
        dashboard: {
          id: _0x59068c,
          name: _0xcd29fa,
          widgetOrder: [],
          widgets: {},
        },
      }))
        ? _0x59068c
        : null;
    },
    rename: async (_0x46e693, _0xf7b14, _0x5bb220) => {
      let _0xd08236 = _0x3f3af1.getDashboard(_0x46e693, _0xf7b14);
      return !!(
        _0xd08236 &&
        (await _0x4d1b1b.executeCommand(_0x43da3a.id, {
          unitId: _0x46e693,
          dashboard: { ..._0xd08236, name: _0x5bb220 },
        }))
      );
    },
    remove: (_0x5c9bf3, _0x10b08d) =>
      _0x4d1b1b.executeCommand(_0x478d1d.id, {
        unitId: _0x5c9bf3,
        dashboardId: _0x10b08d,
      }),
  };
}
function Ki(_0x2376bf, _0x2c5357) {
  let _0x12f9e3 = new Set(_0x2376bf),
    _0x4a3777 = _0x12f9e3.size + 1,
    _0x5b4490 = _0x2c5357(_0x4a3777);
  for (; _0x12f9e3.has(_0x5b4490);)
    ((_0x4a3777 += 1), (_0x5b4490 = _0x2c5357(_0x4a3777)));
  return _0x5b4490;
}
let qi = class extends _0x556966 {
  constructor(_0x16fb78 = Gn, _0x30f090, _0x49603a) {
    (super(),
      (this._config = _0x16fb78),
      (this._injector = _0x30f090),
      (this._configService = _0x49603a));
    let { ..._0x225c7e } = _0x1896d5({}, Gn, this._config);
    this._configService["setConfig"]("bases-dashboard-ui.config", _0x225c7e);
  }
  onStarting() {
    (this._injector["add"]([ri]),
      this._injector["add"]([br]),
      this._injector["add"]([Wi]));
  }
  onReady() {
    _0x518364(this._injector, [[ri], [br], [Wi]]);
  }
};
(vr(qi, "type", _0x5a92c2.UNIVER_BASE),
  vr(qi, "pluginName", "BASE_DASHBOARD_UI_PLUGIN"),
  vr(qi, "packageName", Un),
  vr(qi, "version", Wn),
  (qi = yr(
    [
      _0x29bb40(
        _0x41d813,
        _0x362999,
        _0x50fa10,
        _0x23190a,
        _0x1a5cd8,
        _0x310f33,
      ),
      X(1, _0x3dfd8c(_0x260e26)),
      X(2, _0x44696c),
    ],
    qi,
  )));
export { qi as UniverBaseDashboardUIPlugin };
