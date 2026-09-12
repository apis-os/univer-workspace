import {
  ChartDataSourceRuntimeStatus as _0x3c5afb,
  ChartResourceRepository as _0x41543e,
  ChartResourceRuntimeService as _0x4a2741,
  DEFAULT_CHART_RESOURCE_HEADER_ROW as _0x4d629f,
  IChartDataSourceRuntimeService as _0x2f0a1f,
  ResourceRefChartDataSourceAdapter as _0x5b6ade,
  UniverChartPlugin as _0x4e995b,
  buildChartDataSetFromValues as _0x33882d,
  buildChartPreviewData as _0x3482d3,
  buildOrientedChartDataSet as _0x64c98,
  chartConfigInterpreter as _0x24c707,
  describeChartModel as _0x3ee269,
  isInlineChartDataSource as _0x423340,
  isReferencedChartDataSource as _0x5e081b,
  toChartCreateConfigSnapshot as _0x188b4b,
  toChartModelConfigReplacement as _0x29d3e8,
  toChartModelUpdate as _0x2d63c4,
} from "@univerjs-pro/engine-chart";
import {
  BooleanNumber as _0x82b5b3,
  CommandType as _0x34eacb,
  DependentOn as _0x1cb198,
  Disposable as _0x16cd9e,
  DrawingTypeEnum as _0x313c1b,
  ICommandService as _0x5080e0,
  IConfigService as _0x544676,
  IResourceManagerService as _0x1e31a3,
  IUndoRedoService as _0x4807ad,
  IUniverInstanceService as _0x121538,
  Inject as _0x45fd2a,
  Injector as _0x4f5e9c,
  JSONX as _0x5e05d9,
  ObjectRelativeFromH as _0x345254,
  ObjectRelativeFromV as _0xc80030,
  Plugin as _0x44a36c,
  PositionedObjectLayoutType as _0x59d7aa,
  Tools as _0x2ffcfa,
  UniverInstanceType as _0x2b254a,
  WrapTextType as _0x1189fd,
  generateRandomId as _0xf9be5f,
  getDrawingOrderIndex as _0x1d461d,
  merge as _0x111afd,
  normalizeDrawingOrderIndex as _0x3d4c99,
  sequenceExecute as _0x2b231e,
  touchDependencies as _0x3efa53,
} from "@univerjs/core";
import {
  IDocDrawingAdapterService as _0x5f3624,
  IDocDrawingService as _0x3ae58d,
  InsertDocDrawingCommand as _0xaffb9c,
  SetDocDrawingArrangeCommand as _0x56e274,
  UniverDocsDrawingPlugin as _0x17fabd,
} from "@univerjs/docs-drawing";
import { filter as _0x1801d2, firstValueFrom as _0x20e5b1 } from "rxjs";
import {
  RichTextEditingMutation as _0x3463c9,
  buildDocTransform as _0x52d221,
  normalizeTextRange as _0x412f20,
} from "@univerjs/docs";
import { UniverLicensePlugin as _0x8064fc } from "@univerjs-pro/license";
const M = {
    id: "doc.mutation.remove-doc-chart-data-source",
    type: _0x34eacb.MUTATION,
    handler: (_0x54b259, _0x412a2a) =>
      _0x54b259
        .get(_0x41543e)
        .removeDataSource(_0x412a2a.unitId, _0x412a2a.dataSourceId),
  },
  N = {
    id: "doc.mutation.set-doc-chart-data-source",
    type: _0x34eacb.MUTATION,
    handler: (_0x435060, _0x4cc590) => (
      _0x435060
        .get(_0x41543e)
        .setDataSource(_0x4cc590.unitId, _0x4cc590.dataSource),
      true
    ),
  },
  P = {
    id: "doc.mutation.set-doc-chart-snapshot",
    type: _0x34eacb.MUTATION,
    handler: (_0x3bb87a, _0x27433d) => (
      _0x3bb87a.get(_0x41543e).setChart(_0x27433d.unitId, _0x27433d.chart),
      true
    ),
  },
  F = {
    id: "doc.command.change-chart-data-source",
    type: _0x34eacb.COMMAND,
    handler: (_0x14ffa2, _0x37f480) => {
      if (!_0x37f480) return false;
      let _0x1ffbb3 = _0x14ffa2.get(_0x41543e),
        _0x89c63e = _0x1ffbb3.getChart(_0x37f480.unitId, _0x37f480.chartId),
        _0x249da1 = _0x89c63e
          ? _0x1ffbb3.getDataSource(_0x37f480.unitId, _0x89c63e.dataSourceId)
          : undefined;
      if (!_0x89c63e || !_0x249da1) return false;
      let _0x12600f = _0x1ffbb3.isDataSourceShared(
          _0x37f480.unitId,
          _0x249da1.id,
        ),
        _0x1331f6 = _0x12600f
          ? (_0x37f480.duplicateDataSourceId ?? _0xf9be5f())
          : _0x249da1.id,
        _0xad98e0 = Se(
          _0x1331f6,
          _0x37f480.dataSource,
          _0x37f480.name ?? _0x249da1.name,
        ),
        _0x9e15f6 = _0x14ffa2.get(_0x5080e0),
        _0x168614 = {
          id: N.id,
          params: { unitId: _0x37f480.unitId, dataSource: _0xad98e0 },
        },
        _0x53024d = [_0x168614],
        _0x18f3fe = [
          {
            id: N.id,
            params: { unitId: _0x37f480.unitId, dataSource: _0x249da1 },
          },
        ];
      if (!_0x9e15f6.syncExecuteCommand(_0x168614.id, _0x168614.params))
        return false;
      if (_0x12600f) {
        let _0x2d8878 = {
            id: P.id,
            params: {
              unitId: _0x37f480.unitId,
              chart: { ..._0x89c63e, dataSourceId: _0x1331f6 },
            },
          },
          _0x102430 = {
            id: M.id,
            params: { unitId: _0x37f480.unitId, dataSourceId: _0x1331f6 },
          };
        if (!_0x9e15f6.syncExecuteCommand(_0x2d8878.id, _0x2d8878.params))
          return (
            _0x9e15f6.syncExecuteCommand(_0x102430.id, _0x102430.params),
            false
          );
        (_0x53024d.push(_0x2d8878),
          _0x18f3fe.splice(
            0,
            1,
            {
              id: P.id,
              params: { unitId: _0x37f480.unitId, chart: _0x89c63e },
            },
            _0x102430,
          ));
      }
      let _0x1f31a2 = _0x14ffa2.get(_0x4807ad),
        _0x21cf93 = _0x1f31a2.__tempBatchingUndoRedo(_0x37f480.unitId);
      return (
        _0x1f31a2.pushUndoRedo({
          unitID: _0x37f480.unitId,
          undoMutations: _0x18f3fe,
          redoMutations: _0x53024d,
        }),
        _0x21cf93.dispose(),
        true
      );
    },
  };
function Se(_0x1538a1, _0x3f84ec, _0x4b788a) {
  let _0x1a0bc0 = _0x423340(_0x3f84ec)
    ? { id: _0x1538a1, name: _0x4b788a, values: _0x3f84ec.values }
    : { id: _0x1538a1, name: _0x4b788a, source: _0x3f84ec.source };
  return (_0x1a0bc0.name ?? delete _0x1a0bc0.name, _0x1a0bc0);
}
const I = {
    id: "doc.mutation.remove-doc-chart-snapshot",
    type: _0x34eacb.MUTATION,
    handler: (_0x3a1404, _0x5637cc) =>
      _0x3a1404
        .get(_0x41543e)
        .removeChart(_0x5637cc.unitId, _0x5637cc.chartId, {
          cleanupDataSource: _0x5637cc.cleanupDataSource,
        }) != null,
  },
  L = {
    id: "doc.command.remove-doc-chart",
    type: _0x34eacb.COMMAND,
    handler: (_0x335bb0, _0x478544) => {
      var _0x3e4d38;
      if (!_0x478544) return false;
      let { unitId: _0x2798b7, drawingId: _0x5cb0b2 } = _0x478544,
        _0x1c7638 = _0x2798b7,
        _0x4350b0 = _0x335bb0
          .get(_0x121538)
          .getUnit(_0x2798b7, _0x2b254a.UNIVER_DOC),
        _0x207722 =
          _0x4350b0 == null || (_0x3e4d38 = _0x4350b0.getDrawings()) == null
            ? undefined
            : _0x3e4d38[_0x5cb0b2];
      if (
        !Ce(_0x207722) ||
        (_0x478544.chartId && _0x207722.chartId !== _0x478544.chartId)
      )
        return false;
      let _0x265c28 = _0x335bb0.get(_0x41543e),
        _0x362877 = _0x265c28.getChart(_0x2798b7, _0x207722.chartId);
      if (!_0x362877) return false;
      let _0x7a07db = _0x335bb0.get(_0x5080e0);
      return _0x7a07db.syncExecuteCommand("doc.command.remove-doc-image", {
        unitId: _0x2798b7,
        drawings: [
          {
            unitId: _0x2798b7,
            subUnitId: _0x1c7638,
            drawingId: _0x5cb0b2,
            drawingType: _0x313c1b.DRAWING_CHART,
          },
        ],
      })
        ? !_0x265c28.getChart(_0x2798b7, _0x362877.id) ||
            _0x2b231e(
              [
                {
                  id: I.id,
                  params: {
                    unitId: _0x2798b7,
                    chartId: _0x362877.id,
                    cleanupDataSource:
                      _0x265c28.getDataSourceSharingCount(
                        _0x2798b7,
                        _0x362877.dataSourceId,
                      ) <= 1,
                  },
                },
              ],
              _0x7a07db,
            ).result
        : false;
    },
  };
function Ce(_0x2cc85d) {
  return (
    (_0x2cc85d == null ? undefined : _0x2cc85d.drawingType) ===
      _0x313c1b.DRAWING_CHART &&
    "chartId" in _0x2cc85d &&
    typeof _0x2cc85d.chartId == "string"
  );
}
const R = Symbol("ReplaceDocChartConfig"),
  z = {
    id: "doc.command.update-doc-chart-config",
    type: _0x34eacb.COMMAND,
    handler: (_0x29c0ac, _0x1bd738) => {
      if (!_0x1bd738) return false;
      let { unitId: _0xf46664, chartId: _0x5d2b1c } = _0x1bd738,
        _0x19ff09 = _0x1bd738[R] === true,
        _0x4358e4 = _0x29c0ac.get(_0x41543e).getChart(_0xf46664, _0x5d2b1c);
      if (!_0x4358e4) return false;
      let _0x5ae616 = _0x29c0ac.get(_0x5080e0),
        _0x530a00 = _0x29c0ac.get(_0x4807ad),
        _0x5669aa = _0x24c707.apply(_0x4358e4, _0x1bd738, _0x19ff09);
      if (!_0x5669aa) return false;
      let _0x43f6bb = { unitId: _0xf46664, chart: _0x5669aa },
        _0x4fb366 = { unitId: _0xf46664, chart: _0x4358e4 },
        _0x1a0a4e = [{ id: P.id, params: _0x43f6bb }],
        _0x376795 = [{ id: P.id, params: _0x4fb366 }];
      return _0x2b231e(_0x1a0a4e, _0x5ae616).result
        ? (_0x530a00.pushUndoRedo({
            unitID: _0xf46664,
            undoMutations: _0x376795,
            redoMutations: _0x1a0a4e,
          }),
          true)
        : false;
    },
  };
function B(_0x39b159, _0x3467c8) {
  return function (_0x4c448a, _0x597c51) {
    _0x3467c8(_0x4c448a, _0x597c51, _0x39b159);
  };
}
function V(_0x2cbca5, _0x499e68, _0x2a9ead, _0x2154dc) {
  var _0x23045a = arguments.length,
    _0x24ae74 =
      _0x23045a < 3
        ? _0x499e68
        : _0x2154dc === null
          ? (_0x2154dc = Object.getOwnPropertyDescriptor(_0x499e68, _0x2a9ead))
          : _0x2154dc,
    _0xe44bc5;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x24ae74 = Reflect.decorate(_0x2cbca5, _0x499e68, _0x2a9ead, _0x2154dc);
  else {
    for (var _0x38a549 = _0x2cbca5.length - 1; _0x38a549 >= 0; _0x38a549--)
      (_0xe44bc5 = _0x2cbca5[_0x38a549]) &&
        (_0x24ae74 =
          (_0x23045a < 3
            ? _0xe44bc5(_0x24ae74)
            : _0x23045a > 3
              ? _0xe44bc5(_0x499e68, _0x2a9ead, _0x24ae74)
              : _0xe44bc5(_0x499e68, _0x2a9ead)) || _0x24ae74);
  }
  return (
    _0x23045a > 3 &&
      _0x24ae74 &&
      Object.defineProperty(_0x499e68, _0x2a9ead, _0x24ae74),
    _0x24ae74
  );
}
let H = class extends _0x4a2741 {
  constructor(_0x7b8f9c, _0x5a2fb5, _0x56177c) {
    super(_0x7b8f9c, _0x5a2fb5, _0x33882d, _0x56177c);
  }
};
H = V(
  [
    B(0, _0x45fd2a(_0x41543e)),
    B(1, _0x45fd2a(_0x4f5e9c)),
    B(2, _0x45fd2a(_0x2f0a1f)),
  ],
  H,
);
const U = {
    id: "doc.command.duplicate-doc-chart-data-source",
    type: _0x34eacb.COMMAND,
    handler: (_0xa23058, _0x38e2ba) => {
      if (!_0x38e2ba) return false;
      let {
          unitId: _0x471149,
          chartId: _0x816fdf,
          duplicateDataSourceId: _0x164ca1,
        } = _0x38e2ba,
        _0x5145f8 = _0xa23058.get(_0x41543e),
        _0x4696db = _0x5145f8.getChart(_0x471149, _0x816fdf),
        _0x153ee7 = _0x4696db
          ? _0x5145f8.getDataSource(_0x471149, _0x4696db.dataSourceId)
          : undefined;
      if (!_0x4696db || !_0x153ee7) return false;
      let _0x3b0e9e = { ..._0x153ee7, id: _0x164ca1 ?? _0xf9be5f() },
        _0x2c87c6 = _0xa23058.get(_0x5080e0),
        _0x5e847e = _0xa23058.get(_0x4807ad),
        _0x6ec179 = { unitId: _0x471149, dataSource: _0x3b0e9e },
        _0x31d216 = { unitId: _0x471149, dataSourceId: _0x3b0e9e.id },
        _0x50119a = {
          unitId: _0x471149,
          chart: { ..._0x4696db, dataSourceId: _0x3b0e9e.id },
        },
        _0x29ab7b = { unitId: _0x471149, chart: _0x4696db },
        _0x5d0c87 = [
          { id: N.id, params: _0x6ec179 },
          { id: P.id, params: _0x50119a },
        ],
        _0x479e7b = [
          { id: P.id, params: _0x29ab7b },
          { id: M.id, params: _0x31d216 },
        ];
      return _0x2b231e(_0x5d0c87, _0x2c87c6).result
        ? (_0x5e847e.pushUndoRedo({
            unitID: _0x471149,
            undoMutations: _0x479e7b,
            redoMutations: _0x5d0c87,
          }),
          true)
        : false;
    },
  },
  W = {
    id: "doc.command.update-doc-chart-data-source",
    type: _0x34eacb.COMMAND,
    handler: (_0x39b4d0, _0xac1f78) => {
      if (!_0xac1f78) return false;
      let {
        unitId: _0x194a3d,
        dataSourceId: _0x5e7a1c,
        values: _0xd587cc,
        name: _0xfe5868,
      } = _0xac1f78;
      if (_0xd587cc.length === 0) return false;
      let _0x449624 = _0x39b4d0
        .get(_0x41543e)
        .getDataSource(_0x194a3d, _0x5e7a1c);
      if (!_0x449624) return false;
      let _0x4117b9 = _0x39b4d0.get(_0x5080e0),
        _0x1186a9 = _0x39b4d0.get(_0x4807ad),
        _0x32de55 = {
          unitId: _0x194a3d,
          dataSource: {
            id: _0x5e7a1c,
            values: _0xd587cc,
            name: _0xfe5868 ?? _0x449624.name,
          },
        },
        _0x144ea1 = { unitId: _0x194a3d, dataSource: _0x449624 },
        _0xfb93a1 = [{ id: N.id, params: _0x32de55 }],
        _0x3bc0d1 = [{ id: N.id, params: _0x144ea1 }];
      return _0x2b231e(_0xfb93a1, _0x4117b9).result
        ? (_0x1186a9.pushUndoRedo({
            unitID: _0x194a3d,
            undoMutations: _0x3bc0d1,
            redoMutations: _0xfb93a1,
          }),
          true)
        : false;
    },
  },
  we = 480,
  Te = 320,
  Ee = [
    ["Category", "Value"],
    ["Series 1", 1],
  ];
function G(_0x5cf2e3) {
  return Number.isFinite(_0x5cf2e3) && _0x5cf2e3 > 0;
}
function K(_0x56b447) {
  return _0x56b447 === undefined || G(_0x56b447);
}
function q(_0x5683aa) {
  if (!K(_0x5683aa))
    throw Error(
      "Document chart width and height must be positive finite numbers.",
    );
}
const J = {
  id: "doc.command.update-doc-chart-drawing",
  type: _0x34eacb.COMMAND,
  handler: (_0x48a1d2, _0x452c03) => {
    var _0x37198b;
    if (
      !_0x452c03 ||
      !_0x452c03.unitId ||
      !_0x452c03.drawingId ||
      !Ae(_0x452c03.layout)
    )
      return false;
    let _0xf70da9 = _0x48a1d2
        .get(_0x121538)
        .getUnit(_0x452c03.unitId, _0x2b254a.UNIVER_DOC),
      _0xff1759 =
        _0xf70da9 == null || (_0x37198b = _0xf70da9.getDrawings()) == null
          ? undefined
          : _0x37198b[_0x452c03.drawingId];
    if (
      !ke(_0xff1759) ||
      (_0x452c03.chartId && _0xff1759.chartId !== _0x452c03.chartId)
    )
      return false;
    let _0x4f3086 = De(_0xff1759, _0x452c03.layout),
      _0x2a3eeb = _0x5e05d9
        .getInstance()
        .replaceOp(["drawings", _0x452c03.drawingId], _0xff1759, _0x4f3086);
    return _0x2a3eeb
      ? !!_0x48a1d2
          .get(_0x5080e0)
          .syncExecuteCommand(_0x3463c9.id, {
            unitId: _0x452c03.unitId,
            actions: _0x2a3eeb,
            textRanges: null,
            noNeedSetTextRange: true,
          })
      : false;
  },
};
function De(_0x282cf1, _0x3ffd4e) {
  let _0x32561f =
    _0x3ffd4e.width !== undefined ||
    _0x3ffd4e.height !== undefined ||
    _0x3ffd4e.position !== undefined;
  return {
    ..._0x282cf1,
    ...(_0x3ffd4e.layoutType === undefined
      ? {}
      : { layoutType: _0x3ffd4e.layoutType }),
    ...(_0x32561f
      ? { docTransform: Oe(_0x282cf1.docTransform, _0x3ffd4e) }
      : {}),
  };
}
function Oe(_0x3500e5, _0x45016b) {
  if (
    _0x45016b.width === undefined &&
    _0x45016b.height === undefined &&
    _0x45016b.position === undefined
  )
    return _0x3500e5 ?? _0x52d221(480, 320);
  let _0x596fe7 =
      _0x45016b.width ??
      (_0x3500e5 == null ? undefined : _0x3500e5.size["width"]) ??
      480,
    _0x3601c1 =
      _0x45016b.height ??
      (_0x3500e5 == null ? undefined : _0x3500e5.size["height"]) ??
      320,
    _0x3a7b60 = _0x45016b.position;
  return {
    ...(_0x3500e5 ?? _0x52d221(_0x596fe7, _0x3601c1)),
    size: { width: _0x596fe7, height: _0x3601c1 },
    ...(_0x3a7b60 === undefined
      ? {}
      : {
          positionH: { relativeFrom: _0x345254.PAGE, posOffset: _0x3a7b60.x },
          positionV: {
            relativeFrom: _0xc80030.PARAGRAPH,
            posOffset: _0x3a7b60.y,
          },
        }),
  };
}
function ke(_0x919c21) {
  return (
    (_0x919c21 == null ? undefined : _0x919c21.drawingType) ===
      _0x313c1b.DRAWING_CHART &&
    "chartId" in _0x919c21 &&
    typeof _0x919c21.chartId == "string"
  );
}
function Ae(_0x4a04be) {
  return (
    !!_0x4a04be &&
    K(_0x4a04be.width) &&
    K(_0x4a04be.height) &&
    (_0x4a04be.position === undefined ||
      (Number.isFinite(_0x4a04be.position["x"]) &&
        Number.isFinite(_0x4a04be.position["y"])))
  );
}
let je = (function (_0x37552c) {
  return (
    (_0x37552c.DuplicateIfShared = "duplicateIfShared"),
    (_0x37552c.UpdateShared = "updateShared"),
    (_0x37552c.RejectIfShared = "rejectIfShared"),
    _0x37552c
  );
})({});
function Me(_0x5cf3eb) {
  let _0x3d7a4e = _0x5cf3eb.map((_0x2d3a3b) => [..._0x2d3a3b]),
    _0xd24548 = _0x3d7a4e.length;
  for (
    ;
    _0xd24548 > 0 &&
    _0x3d7a4e[_0xd24548 - 1].every(
      (_0x8cbb8d) => _0x8cbb8d == null || _0x8cbb8d === "",
    );
  )
    _0xd24548--;
  let _0x2970c0 = _0x3d7a4e.slice(0, _0xd24548),
    _0x3c7f92 = Math.max(0, ..._0x2970c0.map((_0x4f1e6d) => _0x4f1e6d.length));
  for (
    ;
    _0x3c7f92 > 0 &&
    _0x2970c0.every(
      (_0x5355f5) =>
        _0x5355f5[_0x3c7f92 - 1] == null || _0x5355f5[_0x3c7f92 - 1] === "",
    );
  )
    _0x3c7f92--;
  return _0x2970c0
    .map((_0x358093) => _0x358093.slice(0, _0x3c7f92))
    .filter((_0x20adba) => _0x20adba.length > 0);
}
function Ne(_0x3671fe, _0x316bed, _0x3b5a35) {
  let _0x460d23 = Me(_0x316bed);
  if (_0x460d23.length === 0)
    throw Error("Document\x20chart\x20values\x20are\x20required.");
  let {
      chartId: _0x552013,
      injector: _0x27679c,
      unitId: _0x40a05e,
    } = _0x3671fe,
    _0x20a70b = _0x27679c.get(_0x5080e0),
    _0x509f5c = _0x27679c.get(_0x41543e),
    _0x4b6986 = _0x509f5c.getChart(_0x40a05e, _0x552013);
  if (!_0x4b6986)
    throw Error('Document chart "' + _0x552013 + '" was not found.');
  let _0x2d4b42 =
    (_0x3b5a35 == null ? undefined : _0x3b5a35.mode) ?? "duplicateIfShared";
  if (
    _0x509f5c.getChartIdsByDataSource(_0x40a05e, _0x4b6986.dataSourceId)
      .length > 1
  ) {
    if (_0x2d4b42 === "rejectIfShared")
      throw Error(
        "Document\x20chart\x20data\x20source\x20\x22" +
          _0x4b6986.dataSourceId +
          "\x22\x20is\x20shared.",
      );
    if (_0x2d4b42 === "duplicateIfShared") {
      if (
        !_0x20a70b.syncExecuteCommand(U.id, {
          unitId: _0x40a05e,
          chartId: _0x552013,
        })
      )
        throw Error(
          "Failed\x20to\x20duplicate\x20data\x20source\x20for\x20document\x20chart\x20\x22" +
            _0x552013 +
            "\x22.",
        );
      _0x4b6986 = _0x509f5c.getChart(_0x40a05e, _0x552013);
    }
  }
  if (
    !_0x4b6986 ||
    !_0x20a70b.syncExecuteCommand(W.id, {
      unitId: _0x40a05e,
      dataSourceId: _0x4b6986.dataSourceId,
      values: _0x460d23,
    })
  )
    throw Error(
      'Failed to update document chart data source for "' + _0x552013 + "\x22.",
    );
}
function Pe(_0x58c7fb, _0x13906d) {
  (q(_0x13906d.width), q(_0x13906d.height));
  let {
    chartId: _0x246b87,
    drawingId: _0x57ed95,
    injector: _0x506790,
    unitId: _0x1dbf8e,
  } = _0x58c7fb;
  if (
    !_0x506790
      .get(_0x5080e0)
      .syncExecuteCommand(J.id, {
        unitId: _0x1dbf8e,
        drawingId: _0x57ed95,
        chartId: _0x246b87,
        layout: _0x13906d,
      })
  )
    throw Error(
      'Failed to update document chart layout "' + _0x246b87 + "\x22.",
    );
}
var Fe = class {
  constructor(_0x5e53b4) {
    this._context = _0x5e53b4;
  }
  describe(_0x2085f8 = {}, _0x3974ed) {
    var _0x595cf9, _0x5e32bf, _0x5ea1a6;
    let {
        chartId: _0x2eeee6,
        documentDataModel: _0x59f815,
        drawingId: _0x204a64,
        injector: _0x1bb343,
        unitId: _0xc720f0,
      } = this._context,
      _0x492a13 = _0x1bb343.get(H).ensureChartModel(_0xc720f0, _0x2eeee6);
    if (!_0x492a13) throw Error("Document chart not found: " + _0x2eeee6);
    let _0x13fd70 =
        (_0x595cf9 = _0x59f815.getDrawings()) == null
          ? undefined
          : _0x595cf9[_0x204a64],
      _0x1a15c5 =
        _0x13fd70 != null && _0x13fd70.docTransform
          ? {
              width:
                (_0x5e32bf = _0x13fd70.docTransform["size"]) == null
                  ? undefined
                  : _0x5e32bf.width,
              height:
                (_0x5ea1a6 = _0x13fd70.docTransform["size"]) == null
                  ? undefined
                  : _0x5ea1a6.height,
              layoutType: _0x13fd70.layoutType,
            }
          : undefined;
    return {
      ..._0x3ee269(_0x492a13.model, _0x2085f8, _0x3974ed),
      layout: _0x1a15c5,
    };
  }
  getInfo() {
    var _0x5905ce, _0x12c8a6;
    let _0x254386 = this.describe(),
      _0x47e5bf = this.getDataSource();
    if (!_0x47e5bf)
      throw Error(
        "Document chart data source not found: " + this._context["chartId"],
      );
    return {
      config: _0x188b4b(_0x254386),
      dataSource: _0x423340(_0x47e5bf)
        ? { values: _0x2ffcfa.deepClone(_0x47e5bf.values) }
        : _0x5e081b(_0x47e5bf)
          ? { source: _0x2ffcfa.deepClone(_0x47e5bf.source) }
          : (() => {
              throw Error(
                "Invalid\x20Document\x20chart\x20data\x20source:\x20" +
                  this._context["chartId"],
              );
            })(),
      position: _0x2ffcfa.deepClone(
        (_0x5905ce = _0x254386.layout) == null ? undefined : _0x5905ce.position,
      ),
      size: _0x254386.layout
        ? {
            width: _0x254386.layout["width"] ?? 0,
            height: _0x254386.layout["height"] ?? 0,
          }
        : undefined,
      layoutType:
        (_0x12c8a6 = _0x254386.layout) == null
          ? undefined
          : _0x12c8a6.layoutType,
    };
  }
  getData() {
    let {
        chartId: _0xe512,
        injector: _0x1ee326,
        unitId: _0x4d853b,
      } = this._context,
      _0x27b3e7 = _0x1ee326.get(_0x41543e).getChart(_0x4d853b, _0xe512),
      _0x5c0314 = _0x27b3e7
        ? _0x1ee326
            .get(_0x41543e)
            .getDataSource(_0x4d853b, _0x27b3e7.dataSourceId)
        : null;
    return _0x423340(_0x5c0314) ? _0x5c0314.values : null;
  }
  getDataSource() {
    let {
        chartId: _0x25367d,
        injector: _0x1cbb2c,
        unitId: _0x21f022,
      } = this._context,
      _0xd42eba = _0x1cbb2c.get(_0x41543e).getChart(_0x21f022, _0x25367d);
    return (
      (_0xd42eba
        ? _0x1cbb2c
            .get(_0x41543e)
            .getDataSource(_0x21f022, _0xd42eba.dataSourceId)
        : null) ?? null
    );
  }
  async commitDataSource(_0x68c07c) {
    let { injector: _0x5d69a4 } = this._context,
      _0x44f4c1 = _0x5e081b(_0x68c07c) ? _0x68c07c.source : undefined,
      _0x5badd5 = _0x44f4c1
        ? _0x5d69a4.get(_0x2f0a1f).acquire(_0x44f4c1)
        : null;
    try {
      if (_0x5badd5) {
        let _0x2f8baa = await _0x20e5b1(
          _0x5badd5.state$["pipe"](
            _0x1801d2(
              ({ status: _0x392767 }) => _0x392767 !== _0x3c5afb.LOADING,
            ),
          ),
        );
        if (_0x2f8baa.status !== _0x3c5afb.READY)
          throw _0x2f8baa.error instanceof Error
            ? _0x2f8baa.error
            : Error(_0x44f4c1 == null ? undefined : _0x44f4c1.kind);
      }
      this._commitDataSource(_0x68c07c);
    } finally {
      _0x5badd5 == null || _0x5badd5.dispose();
    }
  }
  async commitChanges(_0x40372c, _0x196f9e, _0x5a317f, _0x1682ad = false) {
    let { injector: _0x4d380e } = this._context,
      _0x1bdc3f = _0x5e081b(_0x40372c) ? _0x40372c.source : undefined,
      _0x5bb3c6 = _0x1bdc3f
        ? _0x4d380e.get(_0x2f0a1f).acquire(_0x1bdc3f)
        : null;
    try {
      if (_0x5bb3c6) {
        let _0x1d3e28 = await _0x20e5b1(
          _0x5bb3c6.state$["pipe"](
            _0x1801d2(
              ({ status: _0x2a1801 }) => _0x2a1801 !== _0x3c5afb.LOADING,
            ),
          ),
        );
        if (_0x1d3e28.status !== _0x3c5afb.READY)
          throw _0x1d3e28.error instanceof Error
            ? _0x1d3e28.error
            : Error(_0x1bdc3f == null ? undefined : _0x1bdc3f.kind);
      }
      (Object.keys(_0x196f9e).length > 0 &&
        (_0x1682ad ? this._replaceConfig(_0x196f9e) : this.commit(_0x196f9e)),
        Object.keys(_0x5a317f).length > 0 && this.commitHost(_0x5a317f),
        _0x40372c && this._commitDataSource(_0x40372c));
    } finally {
      _0x5bb3c6 == null || _0x5bb3c6.dispose();
    }
  }
  refreshDataSource() {
    let {
      chartId: _0x99c415,
      injector: _0x274777,
      unitId: _0x650b15,
    } = this._context;
    return _0x274777.get(H).refreshChartDataSource(_0x650b15, _0x99c415);
  }
  commit(_0x44b15d) {
    var _0x3df335;
    let {
        chartId: _0x537ab5,
        injector: _0x2aaf6f,
        unitId: _0x211d3e,
      } = this._context,
      _0xb28e66 = _0x2aaf6f.get(H).ensureChartModel(_0x211d3e, _0x537ab5);
    if (!_0xb28e66)
      throw Error("Document\x20chart\x20not\x20found:\x20" + _0x537ab5);
    let _0x3eb6fb = _0x2d63c4(_0x44b15d, {
      series:
        (_0x3df335 = _0xb28e66.model["config"]) == null
          ? undefined
          : _0x3df335.series,
      currentChartType: _0xb28e66.model["chartType"],
      currentStyle: _0xb28e66.model["style"],
      currentContext: _0xb28e66.model["context"],
      currentDataAggregation: _0xb28e66.model["dataAggregation"],
    });
    if (
      !_0x2aaf6f
        .get(_0x5080e0)
        .syncExecuteCommand(z.id, {
          unitId: _0x211d3e,
          chartId: _0x537ab5,
          ..._0x3eb6fb,
          [R]: true,
        })
    )
      throw Error(
        "Failed\x20to\x20update\x20Document\x20chart\x20configuration.",
      );
  }
  update(_0x329776) {
    let _0x54e0cf = {};
    (_0x329776.position !== undefined &&
      (_0x54e0cf.position = _0x329776.position),
      _0x329776.size !== undefined &&
        ((_0x54e0cf.width = _0x329776.size["width"]),
        (_0x54e0cf.height = _0x329776.size["height"])),
      Object.prototype["hasOwnProperty"].call(_0x329776, "layoutType") &&
        (_0x54e0cf.layoutType = _0x329776.layoutType));
    let _0x5e92e4 = {};
    return (
      _0x329776.anchor !== undefined && (_0x5e92e4.anchor = _0x329776.anchor),
      Object.keys(_0x54e0cf).length > 0 && (_0x5e92e4.layout = _0x54e0cf),
      this.commitChanges(
        _0x329776.dataSource,
        _0x329776.config,
        _0x5e92e4,
        true,
      )
    );
  }
  _replaceConfig(_0x4dfbf8) {
    var _0x4d6c81;
    let {
        chartId: _0x2762cb,
        injector: _0xd6514a,
        unitId: _0xfe629,
      } = this._context,
      _0x240edd = _0xd6514a.get(H).ensureChartModel(_0xfe629, _0x2762cb);
    if (!_0x240edd) throw Error("Document chart not found: " + _0x2762cb);
    let _0x4fd3da = _0x29d3e8(_0x4dfbf8, {
      series:
        (_0x4d6c81 = _0x240edd.model["config"]) == null
          ? undefined
          : _0x4d6c81.series,
      currentStyle: _0x240edd.model["style"],
    });
    if (
      !_0xd6514a
        .get(_0x5080e0)
        .syncExecuteCommand(z.id, {
          unitId: _0xfe629,
          chartId: _0x2762cb,
          ..._0x4fd3da,
          [R]: true,
        })
    )
      throw Error("Failed to update Document chart configuration.");
  }
  setDataSource(_0x4c858e) {
    return this.commitDataSource(
      Array.isArray(_0x4c858e)
        ? { values: _0x4c858e }
        : { source: _0x5b6ade.toReference(_0x4c858e) },
    );
  }
  setAbsolutePosition(_0x5a068e, _0x3b074d) {
    this.commitHost({ layout: { position: { x: _0x5a068e, y: _0x3b074d } } });
  }
  setSize(_0x1ec4d, _0xe137b) {
    this.commitHost({ layout: { width: _0x1ec4d, height: _0xe137b } });
  }
  arrange(_0x5077bd) {
    let {
        documentDataModel: _0x6886c4,
        drawingId: _0xde8cab,
        injector: _0x2df5fd,
        unitId: _0x5a8e59,
      } = this._context,
      _0x544a27 = _0x6886c4.getDrawingsOrder() ?? [],
      _0x2fcd91 = _0x544a27.indexOf(_0xde8cab);
    if (_0x2fcd91 < 0)
      throw Error(
        "Document\x20chart\x20drawing\x20not\x20found:\x20" + _0xde8cab,
      );
    if (
      _0x1d461d(_0x2fcd91, _0x544a27.length, _0x5077bd) !== _0x2fcd91 &&
      !_0x2df5fd
        .get(_0x5080e0)
        .syncExecuteCommand(_0x56e274.id, {
          unitId: _0x5a8e59,
          subUnitId: _0x5a8e59,
          drawingIds: [_0xde8cab],
          arrangeType: _0x5077bd,
        })
    )
      throw Error("Failed to arrange Document chart.");
  }
  setZOrder(_0x238dc3) {
    let {
        documentDataModel: _0xfb09cd,
        drawingId: _0x1018d8,
        injector: _0x53c682,
        unitId: _0x3e8e2c,
      } = this._context,
      _0x487e39 = _0xfb09cd.getDrawingsOrder() ?? [],
      _0x52621d = _0x487e39.indexOf(_0x1018d8);
    if (_0x52621d < 0)
      throw Error("Document chart drawing not found: " + _0x1018d8);
    if (
      _0x3d4c99(_0x238dc3, _0x487e39.length) !== _0x52621d &&
      !_0x53c682
        .get(_0x5080e0)
        .syncExecuteCommand(_0x56e274.id, {
          unitId: _0x3e8e2c,
          subUnitId: _0x3e8e2c,
          drawingIds: [_0x1018d8],
          zOrder: _0x238dc3,
        })
    )
      throw Error("Failed to update Document chart z-order.");
  }
  resolveData(_0x224438, _0x2a0c1d) {
    let {
        chartId: _0x2c9a04,
        injector: _0x255502,
        unitId: _0x20eea8,
      } = this._context,
      _0x3f1bf4 = _0x255502.get(H).ensureChartModel(_0x20eea8, _0x2c9a04);
    if (!_0x3f1bf4) throw Error("Document chart not found: " + _0x2c9a04);
    return _0x3482d3(_0x3f1bf4.model, _0x224438, _0x2a0c1d);
  }
  resolveDataSet(_0x15f088) {
    var _0x4bbd72, _0xaec5d4;
    let {
        chartId: _0xbe8b5b,
        injector: _0x2b1e20,
        unitId: _0xa8f6d7,
      } = this._context,
      _0x24907f = _0x2b1e20.get(H).ensureChartModel(_0xa8f6d7, _0xbe8b5b),
      _0x2850ac = _0x2b1e20.get(_0x41543e).getChart(_0xa8f6d7, _0xbe8b5b);
    if (!_0x24907f || !_0x2850ac)
      throw Error("Document chart not found: " + _0xbe8b5b);
    return _0x64c98(_0x15f088, {
      headerRow:
        ((_0x4bbd72 = _0x2850ac.context) == null
          ? undefined
          : _0x4bbd72.headerRow) ?? _0x4d629f,
      isRowDirection:
        ((_0xaec5d4 = _0x2850ac.context) == null
          ? undefined
          : _0xaec5d4.orient) !== "column",
    });
  }
  commitHost(_0xe753c1) {
    let {
      chartId: _0x1f3b96,
      drawingId: _0x1c7df5,
      injector: _0x4d7e9b,
      unitId: _0x3d8a5b,
    } = this._context;
    if (_0xe753c1.anchor !== undefined)
      throw Error("Document chart anchor can only be set before insert().");
    (_0xe753c1.data !== undefined &&
      Ne(
        { unitId: _0x3d8a5b, chartId: _0x1f3b96, injector: _0x4d7e9b },
        _0xe753c1.data,
      ),
      _0xe753c1.layout !== undefined &&
        Pe(
          {
            unitId: _0x3d8a5b,
            chartId: _0x1f3b96,
            drawingId: _0x1c7df5,
            injector: _0x4d7e9b,
          },
          _0xe753c1.layout,
        ));
  }
  remove() {
    let {
      chartId: _0xfb34ae,
      drawingId: _0x4ccd27,
      injector: _0x1cdbcd,
      unitId: _0x3d6403,
    } = this._context;
    return !!_0x1cdbcd
      .get(_0x5080e0)
      .syncExecuteCommand(L.id, {
        unitId: _0x3d6403,
        drawingId: _0x4ccd27,
        chartId: _0xfb34ae,
      });
  }
  _commitDataSource(_0x43eaed) {
    let {
      chartId: _0x30cb80,
      injector: _0x25b4a8,
      unitId: _0x1a4d27,
    } = this._context;
    if (
      !_0x25b4a8
        .get(_0x5080e0)
        .syncExecuteCommand(F.id, {
          unitId: _0x1a4d27,
          chartId: _0x30cb80,
          dataSource: _0x43eaed,
        })
    )
      throw Error(F.id);
  }
};
let Ie = (function (_0x660ca3) {
    return (
      (_0x660ca3.Selection = "selection"),
      (_0x660ca3.BodyOffset = "bodyOffset"),
      (_0x660ca3.Paragraph = "paragraph"),
      (_0x660ca3.TextRange = "textRange"),
      _0x660ca3
    );
  })({}),
  Le = (function (_0x1fb97e) {
    return (
      (_0x1fb97e.Before = "before"),
      (_0x1fb97e.After = "after"),
      _0x1fb97e
    );
  })({});
const Re = {},
  ze = {
    id: "doc.command.insert-doc-chart",
    type: _0x34eacb.COMMAND,
    handler: (_0x5a6228, _0x2430c8) => {
      var _0x975f1, _0x247d13, _0x37ceed, _0x41d1a1, _0x406c30, _0x441bde;
      if (!_0x2430c8 || !_0x2430c8.unitId) return false;
      let _0x3e5b28 = _0x2ffcfa.deepClone(_0x2430c8.chart);
      if (
        !_0x3e5b28.chartType ||
        (((_0x975f1 = _0x2430c8.textRange) == null
          ? undefined
          : _0x975f1.segmentId) != null &&
          _0x2430c8.textRange["segmentId"] !== "") ||
        !K(_0x2430c8.width) ||
        !K(_0x2430c8.height) ||
        (_0x2430c8.position &&
          (!Number.isFinite(_0x2430c8.position["x"]) ||
            !Number.isFinite(_0x2430c8.position["y"])))
      )
        return false;
      ((_0x3e5b28.id = _0x3e5b28.id ?? _0xf9be5f(6)),
        (_0x3e5b28.context = {
          ..._0x3e5b28.context,
          headerRow:
            ((_0x247d13 = _0x3e5b28.context) == null
              ? undefined
              : _0x247d13.headerRow) ?? _0x4d629f,
        }));
      let _0x1c69b6 = Be(_0x2430c8.dataSource);
      _0x3e5b28.dataSourceId = _0x1c69b6.id;
      let _0x4f6bae =
          (_0x37ceed = _0x5a6228
            .get(_0x544676)
            .getConfig("docs-chart.config")) == null
            ? undefined
            : _0x37ceed.defaultChartSize,
        _0x10cf87 =
          (_0x41d1a1 = _0x2430c8.drawing) == null
            ? undefined
            : _0x41d1a1.docTransform,
        _0x3992c8 =
          _0x2430c8.width ??
          (_0x10cf87 == null ? undefined : _0x10cf87.size["width"]) ??
          (_0x4f6bae == null ? undefined : _0x4f6bae.width) ??
          480,
        _0x6ad951 =
          _0x2430c8.height ??
          (_0x10cf87 == null ? undefined : _0x10cf87.size["height"]) ??
          (_0x4f6bae == null ? undefined : _0x4f6bae.height) ??
          320,
        _0x8d0bbe = {
          ...(_0x10cf87 ?? _0x52d221(_0x3992c8, _0x6ad951)),
          size: { width: _0x3992c8, height: _0x6ad951 },
          ...(_0x2430c8.position === undefined
            ? {}
            : {
                positionH: {
                  relativeFrom: _0x345254.PAGE,
                  posOffset: _0x2430c8.position["x"],
                },
                positionV: {
                  relativeFrom: _0xc80030.PARAGRAPH,
                  posOffset: _0x2430c8.position["y"],
                },
              }),
        },
        _0x29cb30 = Ve({
          unitId: _0x2430c8.unitId,
          chartId: _0x3e5b28.id,
          drawing: _0x2430c8.drawing,
          docTransform: _0x8d0bbe,
        });
      if (
        !G(
          ((_0x406c30 = _0x29cb30.docTransform) == null
            ? undefined
            : _0x406c30.size["width"]) ?? NaN,
        ) ||
        !G(
          ((_0x441bde = _0x29cb30.docTransform) == null
            ? undefined
            : _0x441bde.size["height"]) ?? NaN,
        )
      )
        return false;
      let _0x2175da = { unitId: _0x2430c8.unitId, dataSource: _0x1c69b6 },
        _0x7f85b1 = { unitId: _0x2430c8.unitId, chart: _0x3e5b28 },
        _0xae6200 = { unitId: _0x2430c8.unitId, chartId: _0x3e5b28.id },
        _0x4d9657 = { unitId: _0x2430c8.unitId, dataSourceId: _0x1c69b6.id },
        _0x4e5f5a = [
          { id: N.id, params: _0x2175da },
          { id: P.id, params: _0x7f85b1 },
        ],
        _0x53edfc = [
          { id: I.id, params: _0xae6200 },
          { id: M.id, params: _0x4d9657 },
        ],
        _0x220789 = _0x5a6228.get(_0x5080e0),
        _0x26e916 = _0x5a6228.get(_0x4807ad),
        _0x44d5f6 = _0x2b231e(_0x4e5f5a, _0x220789);
      if (!_0x44d5f6.result)
        return (
          _0x2b231e(
            _0x53edfc.slice(_0x53edfc.length - _0x44d5f6.index),
            _0x220789,
          ),
          false
        );
      let _0x6c49f8 =
          "doc-chart-insert-resource:" + _0x2430c8.unitId + ":" + _0x3e5b28.id,
        _0x38b9fd = _0x26e916.__tempBatchingUndoRedo(_0x2430c8.unitId);
      _0x26e916.pushUndoRedo({
        unitID: _0x2430c8.unitId,
        redoMutations: _0x4e5f5a,
        undoMutations: _0x53edfc,
        id: _0x6c49f8,
      });
      let _0x3cd627 = { unitId: _0x2430c8.unitId, drawings: [_0x29cb30] };
      if (
        (_0x2430c8.textRange != null &&
          (_0x3cd627.textRange = _0x412f20(_0x2430c8.textRange)),
        !_0x220789.syncExecuteCommand(_0xaffb9c.id, _0x3cd627))
      )
        return (
          _0x38b9fd.dispose(),
          _0x26e916.rollback(_0x6c49f8, _0x2430c8.unitId),
          false
        );
      if (_0x2430c8.focus !== false)
        try {
          _0x5a6228
            .get(_0x3ae58d)
            .focusDrawing([
              {
                unitId: _0x2430c8.unitId,
                subUnitId: _0x2430c8.unitId,
                drawingId: _0x29cb30.drawingId,
              },
            ]);
        } catch {}
      return (
        _0x38b9fd.dispose(),
        {
          chartId: _0x3e5b28.id,
          dataSourceId: _0x1c69b6.id,
          drawingId: _0x29cb30.drawingId,
        }
      );
    },
  };
function Be(_0x44981b) {
  let _0x2d2240 =
      (_0x44981b == null ? undefined : _0x44981b.id) ?? _0xf9be5f(6),
    _0x460433 = _0x44981b == null ? undefined : _0x44981b.name,
    _0x2d0575 =
      _0x44981b != null && _0x44981b.source
        ? { id: _0x2d2240, name: _0x460433, source: _0x44981b.source }
        : {
            id: _0x2d2240,
            name: _0x460433,
            values: He(
              (_0x44981b == null ? undefined : _0x44981b.values) ?? Ee,
            ),
          };
  return (_0x2d0575.name ?? delete _0x2d0575.name, _0x2d0575);
}
function Ve(_0x1328e8) {
  let {
    unitId: _0x599bf7,
    chartId: _0x422eb3,
    drawing: _0x84b05a,
    docTransform: _0xff846f,
  } = _0x1328e8;
  return {
    ..._0x84b05a,
    unitId: _0x599bf7,
    subUnitId: _0x599bf7,
    drawingId:
      (_0x84b05a == null ? undefined : _0x84b05a.drawingId) ?? _0xf9be5f(6),
    drawingType: _0x313c1b.DRAWING_CHART,
    chartId: _0x422eb3,
    docTransform: _0xff846f,
    behindDoc:
      (_0x84b05a == null ? undefined : _0x84b05a.behindDoc) ?? _0x82b5b3.FALSE,
    title: (_0x84b05a == null ? undefined : _0x84b05a.title) ?? "",
    description: (_0x84b05a == null ? undefined : _0x84b05a.description) ?? "",
    layoutType:
      (_0x84b05a == null ? undefined : _0x84b05a.layoutType) ??
      _0x59d7aa.INLINE,
    wrapText:
      (_0x84b05a == null ? undefined : _0x84b05a.wrapText) ??
      _0x1189fd.BOTH_SIDES,
    distB: (_0x84b05a == null ? undefined : _0x84b05a.distB) ?? 0,
    distL: (_0x84b05a == null ? undefined : _0x84b05a.distL) ?? 0,
    distR: (_0x84b05a == null ? undefined : _0x84b05a.distR) ?? 0,
    distT: (_0x84b05a == null ? undefined : _0x84b05a.distT) ?? 0,
    allowTransform:
      (_0x84b05a == null ? undefined : _0x84b05a.allowTransform) ?? true,
  };
}
function He(_0x5a2efd) {
  return _0x5a2efd.map((_0x554539) => [..._0x554539]);
}
const Ue = {
  id: "doc.command.update-doc-chart-snapshot",
  type: _0x34eacb.COMMAND,
  handler: (_0x214c79, _0x363167) => {
    if (!_0x363167) return false;
    let { unitId: _0x165ddf, chartId: _0x4f0f43, patch: _0x3b3789 } = _0x363167,
      _0x2f01d5 = _0x214c79.get(_0x41543e).getChart(_0x165ddf, _0x4f0f43);
    if (!_0x2f01d5) return false;
    let _0x4dd71e = _0x214c79.get(_0x5080e0),
      _0x1c9a9f = _0x214c79.get(_0x4807ad),
      _0x486fa2 = { unitId: _0x165ddf, chart: { ..._0x2f01d5, ..._0x3b3789 } },
      _0x280677 = { unitId: _0x165ddf, chart: _0x2f01d5 },
      _0x345a1e = [{ id: P.id, params: _0x486fa2 }],
      _0x3b9a3a = [{ id: P.id, params: _0x280677 }];
    return _0x2b231e(_0x345a1e, _0x4dd71e).result
      ? (_0x1c9a9f.pushUndoRedo({
          unitID: _0x165ddf,
          undoMutations: _0x3b9a3a,
          redoMutations: _0x345a1e,
        }),
        true)
      : false;
  },
};
var We = "@univerjs-pro/docs-chart",
  Ge = "1.0.0-insiders.20260907-70fc579";
function Y(_0x3b6884) {
  "@babel/helpers - typeof";
  return (
    (Y =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x28a2f7) {
            return typeof _0x28a2f7;
          }
        : function (_0x5726b7) {
            return _0x5726b7 &&
              typeof Symbol == "function" &&
              _0x5726b7.constructor === Symbol &&
              _0x5726b7 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5726b7;
          }),
    Y(_0x3b6884)
  );
}
function Ke(_0x5ca0d8, _0x4e5745) {
  if (Y(_0x5ca0d8) != "object" || !_0x5ca0d8) return _0x5ca0d8;
  var _0x5902d3 = _0x5ca0d8[Symbol.toPrimitive];
  if (_0x5902d3 !== undefined) {
    var _0x131a93 = _0x5902d3.call(_0x5ca0d8, _0x4e5745 || "default");
    if (Y(_0x131a93) != "object") return _0x131a93;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4e5745 === "string" ? String : Number)(_0x5ca0d8);
}
function qe(_0x1870d8) {
  var _0x519377 = Ke(_0x1870d8, "string");
  return Y(_0x519377) == "symbol" ? _0x519377 : _0x519377 + "";
}
function X(_0x5d1595, _0x5934c7, _0x4ff747) {
  return (
    (_0x5934c7 = qe(_0x5934c7)) in _0x5d1595
      ? Object.defineProperty(_0x5d1595, _0x5934c7, {
          value: _0x4ff747,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x5d1595[_0x5934c7] = _0x4ff747),
    _0x5d1595
  );
}
let Z = class extends _0x16cd9e {
  constructor(_0x2b4039, _0x2cf808, _0x17b11f) {
    (super(),
      (this._resourceManagerService = _0x2b4039),
      (this._resourceService = _0x2cf808),
      (this._modelService = _0x17b11f),
      X(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ]({
      pluginName: "DOC_CHART_PLUGIN",
      businesses: [_0x2b254a.UNIVER_DOC],
      toJson: (_0x22c666) => this._resourceService["serializeUnit"](_0x22c666),
      parseJson: (_0x5abbe3) => JSON.parse(_0x5abbe3),
      onLoad: (_0xd9319f, _0x2ea240) => {
        this._resourceService["loadUnit"](_0xd9319f, _0x2ea240);
      },
      onUnLoad: (_0x11d39b) => {
        (this._modelService["removeUnit"](_0x11d39b),
          this._resourceService["unloadUnit"](_0x11d39b));
      },
    })),
      this.disposeWithMe(this._resourceDisposable));
  }
};
Z = V([B(0, _0x1e31a3), B(1, _0x45fd2a(_0x41543e)), B(2, _0x45fd2a(H))], Z);
let Q = class {
  constructor(_0x41396a) {
    this._resourceService = _0x41396a;
  }
  getRemoveDrawingMutationInfos(_0x15794e) {
    let _0x47ff67 = Je(_0x15794e.drawing);
    if (!_0x47ff67) return null;
    let _0x34b681 = this._resourceService["getChart"](
      _0x15794e.unitId,
      _0x47ff67.chartId,
    );
    if (!_0x34b681) return null;
    let _0x1ca1b0 = this._resourceService["getDataSource"](
        _0x15794e.unitId,
        _0x34b681.dataSourceId,
      ),
      _0x11c190 = this._shouldCleanupDataSource(
        _0x15794e,
        _0x34b681.dataSourceId,
      );
    return {
      redoMutations: [
        {
          id: I.id,
          params: {
            unitId: _0x15794e.unitId,
            chartId: _0x34b681.id,
            cleanupDataSource: _0x11c190,
          },
        },
      ],
      undoMutations: [
        ...(_0x11c190 && _0x1ca1b0
          ? [
              {
                id: N.id,
                params: { unitId: _0x15794e.unitId, dataSource: _0x1ca1b0 },
              },
            ]
          : []),
        { id: P.id, params: { unitId: _0x15794e.unitId, chart: _0x34b681 } },
      ],
    };
  }
  _shouldCleanupDataSource(_0xc838f, _0x2b13e7) {
    let _0x15ad95 = new Set(
      _0xc838f.removeDrawings["map"]((_0x540e79) => {
        var _0xb809db;
        return (_0xb809db = Je(_0x540e79)) == null
          ? undefined
          : _0xb809db.chartId;
      }).filter((_0xd708ff) => _0xd708ff != null),
    );
    return (
      this._resourceService["getChartIdsByDataSource"](
        _0xc838f.unitId,
        _0x2b13e7,
      ).filter((_0xedd006) => !_0x15ad95.has(_0xedd006)).length === 0
    );
  }
};
Q = V([B(0, _0x45fd2a(_0x41543e))], Q);
function Je(_0x58639e) {
  let _0x4e8258 = _0x58639e;
  return _0x4e8258.drawingType === _0x313c1b.DRAWING_CHART &&
    typeof _0x4e8258.chartId == "string"
    ? _0x4e8258
    : null;
}
let $ = class extends _0x44a36c {
  constructor(_0x9a408c = Re, _0x189fa4, _0x406a7c, _0x440e9f) {
    (super(),
      (this._config = _0x9a408c),
      (this._injector = _0x189fa4),
      (this._configService = _0x406a7c),
      (this._commandService = _0x440e9f));
    let { ..._0xbd8f54 } = _0x111afd({}, Re, this._config);
    (this._configService["setConfig"]("docs-chart.config", _0xbd8f54),
      this._initCommands());
  }
  onStarting() {
    let _0x2cabd2 = this._injector;
    ([[_0x41543e], [H], [Q], [Z]].forEach((_0xa9a046) =>
      _0x2cabd2.add(_0xa9a046),
    ),
      this.disposeWithMe(
        _0x2cabd2.get(_0x5f3624).registerAdapter(_0x2cabd2.get(Q)),
      ),
      _0x3efa53(_0x2cabd2, [[_0x41543e], [H], [Q], [Z]]));
  }
  _initCommands() {
    [ze, F, Ue, W, z, J, U, L, N, M, P, I].forEach((_0x1a8788) => {
      this.disposeWithMe(this._commandService["registerCommand"](_0x1a8788));
    });
  }
};
(X($, "type", _0x2b254a.UNIVER_DOC),
  X($, "pluginName", "UniverDocsChartPlugin"),
  X($, "packageName", We),
  X($, "version", Ge),
  ($ = V(
    [
      _0x1cb198(_0x4e995b, _0x8064fc, _0x17fabd),
      B(1, _0x45fd2a(_0x4f5e9c)),
      B(2, _0x544676),
      B(3, _0x5080e0),
    ],
    $,
  )));
export {
  F as ChangeDocChartDataSourceCommand,
  Te as DEFAULT_DOC_CHART_ELEMENT_HEIGHT,
  we as DEFAULT_DOC_CHART_ELEMENT_WIDTH,
  Ee as DEFAULT_DOC_CHART_VALUES,
  je as DocChartDataEditMode,
  Q as DocChartDrawingAdapter,
  Ie as DocChartInsertAnchorKind,
  H as DocChartModelService,
  Le as DocChartParagraphPosition,
  Fe as DocumentChartConfigAdapter,
  U as DuplicateDocChartDataSourceCommand,
  ze as InsertDocChartCommand,
  L as RemoveDocChartCommand,
  M as RemoveDocChartDataSourceMutation,
  I as RemoveDocChartSnapshotMutation,
  N as SetDocChartDataSourceMutation,
  P as SetDocChartSnapshotMutation,
  $ as UniverDocsChartPlugin,
  z as UpdateDocChartConfigCommand,
  W as UpdateDocChartDataSourceCommand,
  J as UpdateDocChartDrawingCommand,
  Ue as UpdateDocChartSnapshotCommand,
  q as assertValidOptionalDocChartSize,
  Me as normalizeDocumentChartValues,
  Ne as updateDocumentChartData,
  Pe as updateDocumentChartLayout,
};
