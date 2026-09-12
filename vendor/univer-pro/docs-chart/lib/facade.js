import {
  DocChartInsertAnchorKind as _0x527f85,
  DocChartParagraphPosition as _0x429254,
  DocumentChartConfigAdapter as _0x4eced3,
  InsertDocChartCommand as _0x59dc37,
  assertValidOptionalDocChartSize as _0x26d111,
  normalizeDocumentChartValues as _0x206f03,
} from "@univerjs-pro/docs-chart";
import {
  ChartDataSourceRuntimeStatus as _0x115feb,
  ChartResourceRepository as _0x4dcbe3,
  ChartTypeBits as _0x2eed3b,
  IChartDataSourceRuntimeService as _0x251d85,
  ResourceRefChartDataSourceAdapter as _0x38f86e,
  toChartDataItem as _0x36edad,
  toChartModelConfig as _0x566e16,
} from "@univerjs-pro/engine-chart";
import {
  FChart as _0x568076,
  createChartBuilder as _0x2a9c9e,
} from "@univerjs-pro/engine-chart/facade";
import {
  DrawingTypeEnum as _0x18710a,
  ICommandService as _0x15b011,
  PositionedObjectLayoutType as _0x1ce6ea,
  Tools as _0x45dea5,
  getParagraphContentStartOffset as _0x5e583b,
} from "@univerjs/core";
import {
  DocSelectionManagerService as _0x1c0f0b,
  normalizeTextRange as _0x7c3fe7,
} from "@univerjs/docs";
import { FDocument as _0x1c268e } from "@univerjs/docs/facade";
import { filter as _0x315574, firstValueFrom as _0x4b1ec2 } from "rxjs";
import { FEnum as _0x151d86 } from "@univerjs/core/facade";
function E(_0x1faf7f) {
  "@babel/helpers - typeof";
  return (
    (E =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x2f9694) {
            return typeof _0x2f9694;
          }
        : function (_0x35517b) {
            return _0x35517b &&
              typeof Symbol == "function" &&
              _0x35517b.constructor === Symbol &&
              _0x35517b !== Symbol.prototype
              ? "symbol"
              : typeof _0x35517b;
          }),
    E(_0x1faf7f)
  );
}
function D(_0x546d0c, _0x20c387) {
  if (E(_0x546d0c) != "object" || !_0x546d0c) return _0x546d0c;
  var _0x142bda = _0x546d0c[Symbol.toPrimitive];
  if (_0x142bda !== undefined) {
    var _0x26eb9c = _0x142bda.call(_0x546d0c, _0x20c387 || "default");
    if (E(_0x26eb9c) != "object") return _0x26eb9c;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x20c387 === "string" ? String : Number)(_0x546d0c);
}
function O(_0x508d84) {
  var _0x5a62c9 = D(_0x508d84, "string");
  return E(_0x5a62c9) == "symbol" ? _0x5a62c9 : _0x5a62c9 + "";
}
function k(_0x428f26, _0x58a3e0, _0x31e411) {
  return (
    (_0x58a3e0 = O(_0x58a3e0)) in _0x428f26
      ? Object.defineProperty(_0x428f26, _0x58a3e0, {
          value: _0x31e411,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x428f26[_0x58a3e0] = _0x31e411),
    _0x428f26
  );
}
var A = class extends _0x568076 {
    constructor(_0x51303d, _0x54f803, _0x4f0eb4, _0x4e84fd) {
      (super(
        _0x4f0eb4,
        () =>
          new _0x4eced3({
            unitId: _0x51303d.getUnitId(),
            chartId: _0x4f0eb4,
            drawingId: _0x54f803,
            documentDataModel: _0x51303d,
            injector: _0x4e84fd,
          }),
        (_0x9efcf0, _0x35a22a, _0x3e9b50) =>
          _0x2a9c9e({
            info: _0x9efcf0,
            description: _0x35a22a,
            type: _0x3e9b50,
            normalizeSource: (_0x174dd5) =>
              Array.isArray(_0x174dd5)
                ? { values: _0x45dea5.deepClone(_0x174dd5) }
                : { source: _0x38f86e.toReference(_0x174dd5) },
            extension: ({
              getInfo: _0x187d67,
              setInfo: _0x3f5c01,
              setAbsolutePosition: _0x154a00,
              setSize: _0x500e9d,
            }) => ({
              setPosition(_0x541c43) {
                return (_0x3f5c01("anchor", _0x541c43), this);
              },
              setLayout(_0x3c1863) {
                _0x3c1863.position &&
                  _0x154a00(_0x3c1863.position["x"], _0x3c1863.position["y"]);
                let _0x245e0a = _0x187d67("size"),
                  _0x59f6b3 =
                    _0x3c1863.width ??
                    (_0x245e0a == null ? undefined : _0x245e0a.width),
                  _0xf0f818 =
                    _0x3c1863.height ??
                    (_0x245e0a == null ? undefined : _0x245e0a.height);
                return (
                  _0x59f6b3 !== undefined &&
                    _0xf0f818 !== undefined &&
                    _0x500e9d(_0x59f6b3, _0xf0f818),
                  _0x3f5c01("layoutType", _0x3c1863.layoutType),
                  this
                );
              },
              setInline() {
                return (_0x3f5c01("layoutType", _0x1ce6ea.INLINE), this);
              },
              setFloating() {
                return (_0x3f5c01("layoutType", _0x1ce6ea.WRAP_SQUARE), this);
              },
            }),
          }),
        _0x4e84fd,
      ),
        (this._documentDataModel = _0x51303d),
        (this._drawingId = _0x54f803),
        (this._chartId = _0x4f0eb4),
        k(this, "unitId", undefined),
        (this.unitId = _0x51303d.getUnitId()));
    }
    getDrawingId() {
      return this._drawingId;
    }
  },
  j = class extends _0x1c268e {
    newChart(_0x3adf30) {
      return _0x2a9c9e({
        type: _0x3adf30,
        injector: this._injector,
        commitError: "Insert the document chart before updating it.",
        normalizeSource: (_0x110c33) =>
          Array.isArray(_0x110c33)
            ? { values: _0x45dea5.deepClone(_0x110c33) }
            : { source: _0x38f86e.toReference(_0x110c33) },
        createInfo: () => ({ anchor: undefined, layoutType: undefined }),
        extension: ({
          getInfo: _0xf2d3a8,
          setInfo: _0x4dda72,
          setAbsolutePosition: _0x4e1a80,
          setSize: _0x41be67,
        }) => ({
          setPosition(_0x2ec023) {
            return (_0x4dda72("anchor", _0x2ec023), this);
          },
          setLayout(_0x53836f) {
            _0x53836f.position &&
              _0x4e1a80(_0x53836f.position["x"], _0x53836f.position["y"]);
            let _0x350d6a = _0xf2d3a8("size"),
              _0x2533c7 =
                _0x53836f.width ??
                (_0x350d6a == null ? undefined : _0x350d6a.width),
              _0x493d9c =
                _0x53836f.height ??
                (_0x350d6a == null ? undefined : _0x350d6a.height);
            return (
              _0x2533c7 !== undefined &&
                _0x493d9c !== undefined &&
                _0x41be67(_0x2533c7, _0x493d9c),
              _0x4dda72("layoutType", _0x53836f.layoutType),
              this
            );
          },
          setInline() {
            return (_0x4dda72("layoutType", _0x1ce6ea.INLINE), this);
          },
          setFloating() {
            return (_0x4dda72("layoutType", _0x1ce6ea.WRAP_SQUARE), this);
          },
        }),
      });
    }
    async insertChart(_0x2b3d52) {
      let _0x327921 = null;
      try {
        _0x327921 = _0x2b3d52.dataSource["values"]
          ? null
          : await this._resolveReferencedValues(_0x2b3d52.dataSource["source"]);
        let _0x1ab4e9 = M(
            _0x2b3d52,
            _0x2b3d52.dataSource["values"] ?? _0x327921.values,
          ),
          _0x5e7f06 = _0x206f03(_0x1ab4e9.values);
        if (_0x5e7f06.length === 0)
          throw Error("Document chart values are required.");
        let _0x1d779d = this.getDocumentDataModel(),
          _0x7b3a69 = P(_0x1d779d, this._injector, _0x1ab4e9.insert),
          _0x2bfafe = this._injector["get"](_0x15b011).syncExecuteCommand(
            _0x59dc37.id,
            {
              unitId: _0x1d779d.getUnitId(),
              chart: {
                chartType: _0x1ab4e9.chartType ?? _0x2eed3b.Column,
                style: _0x1ab4e9.style,
                context: _0x1ab4e9.context,
                dataAggregation: _0x1ab4e9.dataAggregation,
              },
              dataSource: {
                ...(_0x1ab4e9.dataSource ?? { values: _0x5e7f06 }),
              },
              textRange: _0x7b3a69.textRange,
              drawing: { layoutType: _0x7b3a69.layout["layoutType"] },
              width: _0x7b3a69.layout["width"],
              height: _0x7b3a69.layout["height"],
              position: _0x7b3a69.layout["position"],
            },
          );
        if (!_0x2bfafe) throw Error("Failed to insert document chart.");
        let _0xf2ad9a = this.getChart(_0x2bfafe.chartId);
        if (!_0xf2ad9a)
          throw Error(
            'Inserted document chart "' +
              _0x2bfafe.chartId +
              '" was not found.',
          );
        return _0xf2ad9a;
      } finally {
        _0x327921 == null || _0x327921.handle["dispose"]();
      }
    }
    getChart(_0x4d5799) {
      let _0x5106e5 = this.getDocumentDataModel(),
        _0xafc7fd = B(_0x5106e5, _0x4d5799);
      return !_0xafc7fd || !this._getChartResource(_0xafc7fd.chartId)
        ? null
        : this._injector["createInstance"](
            A,
            _0x5106e5,
            _0xafc7fd.drawingId,
            _0xafc7fd.chartId,
            this._injector,
          );
    }
    getCharts() {
      let _0x2030e1 = this.getDocumentDataModel(),
        _0x63d368 = _0x2030e1.getDrawings() ?? {};
      return (_0x2030e1.getDrawingsOrder() ?? Object.keys(_0x63d368))
        .map((_0x57e0d6) => _0x63d368[_0x57e0d6])
        .filter(V)
        .filter(
          (_0x1b3703) => this._getChartResource(_0x1b3703.chartId) != null,
        )
        .map((_0x289660) =>
          this._injector["createInstance"](
            A,
            _0x2030e1,
            _0x289660.drawingId,
            _0x289660.chartId,
            this._injector,
          ),
        );
    }
    _getChartResource(_0x23e27c) {
      return this._injector["get"](_0x4dcbe3).getChart(
        this.getDocumentDataModel().getUnitId(),
        _0x23e27c,
      );
    }
    async _resolveReferencedValues(_0x466501) {
      let _0x599211 = this._injector["get"](_0x251d85).acquire(_0x466501);
      try {
        let _0x289027 = await _0x4b1ec2(
          _0x599211.state$["pipe"](
            _0x315574(
              ({ status: _0x5809de }) => _0x5809de !== _0x115feb.LOADING,
            ),
          ),
        );
        if (_0x289027.status !== _0x115feb.READY || !_0x289027.values)
          throw _0x289027.error instanceof Error
            ? _0x289027.error
            : Error(_0x466501.kind);
        return {
          values: _0x289027.values["map"]((_0x1922a7) => [..._0x1922a7]),
          handle: _0x599211,
        };
      } catch (_0x1fef65) {
        throw (_0x599211.dispose(), _0x1fef65);
      }
    }
  };
function M(_0x5d1193, _0x1a8889) {
  var _0x14afc5, _0x4fa3fc;
  return N(
    _0x5d1193.config,
    {
      anchor: _0x5d1193.anchor,
      layout: {
        width:
          (_0x14afc5 = _0x5d1193.size) == null ? undefined : _0x14afc5.width,
        height:
          (_0x4fa3fc = _0x5d1193.size) == null ? undefined : _0x4fa3fc.height,
        layoutType: _0x5d1193.layoutType,
        position: _0x5d1193.position,
      },
    },
    _0x1a8889,
    _0x5d1193.dataSource,
  );
}
function N(_0x3a1f90, _0x8775c0, _0x35cb9e, _0x2d0bb7) {
  let _0x6066e0 = _0x35cb9e,
    _0x5dab57 = (_0x6066e0[0] ?? []).slice(1).map((_0x219531, _0xec168a) => {
      let _0x5e21a7 = 1 + _0xec168a;
      return {
        index: _0x5e21a7,
        name: String(_0x219531 ?? ""),
        items: _0x6066e0
          .slice(1)
          .map((_0x584be5) => _0x36edad(_0x584be5[_0x5e21a7])),
      };
    }),
    _0x37cee3 = _0x566e16(
      { ..._0x3a1f90, series: _0x45dea5.deepClone(_0x3a1f90.series) },
      { series: _0x5dab57 },
    );
  return {
    values: _0x6066e0,
    dataSource: _0x2d0bb7,
    chartType: _0x37cee3.chartType,
    style: _0x37cee3.style,
    context: { chartContext: _0x37cee3.context },
    dataAggregation: _0x37cee3.dataAggregation,
    insert: { at: _0x8775c0.anchor, layout: _0x8775c0.layout },
  };
}
function P(_0x3d9dde, _0x5d68b8, _0x96fa52) {
  var _0x37a1a2, _0x3ef56e, _0x5a1a24, _0x598cf1;
  let _0xcb178e = _0x96fa52 == null ? undefined : _0x96fa52.at;
  return {
    textRange: _0xcb178e ? I(_0x3d9dde, _0x5d68b8, _0xcb178e) : F(_0x5d68b8),
    layout: z({
      width:
        _0x96fa52 == null || (_0x37a1a2 = _0x96fa52.layout) == null
          ? undefined
          : _0x37a1a2.width,
      height:
        _0x96fa52 == null || (_0x3ef56e = _0x96fa52.layout) == null
          ? undefined
          : _0x3ef56e.height,
      layoutType:
        _0x96fa52 == null || (_0x5a1a24 = _0x96fa52.layout) == null
          ? undefined
          : _0x5a1a24.layoutType,
      position:
        _0x96fa52 == null || (_0x598cf1 = _0x96fa52.layout) == null
          ? undefined
          : _0x598cf1.position,
    }),
  };
}
function F(_0x32ed0f) {
  let _0x2e2015 = _0x32ed0f.get(_0x1c0f0b).getActiveTextRange();
  return _0x2e2015 &&
    (_0x2e2015.segmentId == null || _0x2e2015.segmentId === "")
    ? _0x7c3fe7(_0x2e2015)
    : L(0);
}
function I(_0x603e94, _0x193419, _0x447082) {
  if (_0x447082.kind === _0x527f85.Selection) {
    let _0x3a3add = _0x193419.get(_0x1c0f0b).getActiveTextRange();
    if (!_0x3a3add)
      throw Error(
        "Cannot insert document chart at selection because there is no active text range.",
      );
    if (_0x3a3add.segmentId != null && _0x3a3add.segmentId !== "")
      throw Error(
        "Document chart insertion currently supports the body segment only.",
      );
    return _0x7c3fe7(_0x3a3add);
  }
  if (_0x447082.kind === _0x527f85.Paragraph) {
    var _0x1d5610;
    let _0x1f4f14 = _0x603e94.getBody(),
      _0x34b1a6 =
        _0x1f4f14 == null || (_0x1d5610 = _0x1f4f14.paragraphs) == null
          ? undefined
          : _0x1d5610[_0x447082.index];
    if (!_0x34b1a6)
      throw Error(
        "Document paragraph at index " + _0x447082.index + " was not found.",
      );
    let _0xc045c8 = _0x1f4f14 ? _0x5e583b(_0x1f4f14, _0x34b1a6) : 0;
    return L(
      _0x447082.where === _0x429254.Before ? _0xc045c8 : _0x34b1a6.startIndex,
    );
  }
  if (_0x447082.kind === _0x527f85.TextRange) {
    let _0x43c4ed = _0x447082.endOffset ?? _0x447082.startOffset;
    return (
      R(_0x447082.startOffset),
      R(_0x43c4ed),
      {
        startOffset: _0x447082.startOffset,
        endOffset: _0x43c4ed,
        collapsed: _0x447082.collapsed ?? _0x447082.startOffset === _0x43c4ed,
        segmentId: "",
      }
    );
  }
  return (R(_0x447082.offset), L(_0x447082.offset));
}
function L(_0x462bdd) {
  return (
    R(_0x462bdd),
    {
      startOffset: _0x462bdd,
      endOffset: _0x462bdd,
      collapsed: true,
      segmentId: "",
    }
  );
}
function R(_0x7b28bf) {
  if (!Number.isFinite(_0x7b28bf) || _0x7b28bf < 0)
    throw Error(
      'Document chart insertion offset must be a non-negative finite number, got "' +
        _0x7b28bf +
        "\x22.",
    );
}
function z(_0x24af91) {
  if (
    (_0x26d111(_0x24af91.width),
    _0x26d111(_0x24af91.height),
    _0x24af91.position &&
      (!Number.isFinite(_0x24af91.position["x"]) ||
        !Number.isFinite(_0x24af91.position["y"])))
  )
    throw Error("Document chart position must contain finite x and y values.");
  return _0x24af91;
}
function B(_0x42de8d, _0x5cc6b3) {
  let _0x3a2684 = _0x42de8d.getDrawings() ?? {},
    _0x2ee7f2 = _0x3a2684[_0x5cc6b3];
  return V(_0x2ee7f2)
    ? _0x2ee7f2
    : (Object.values(_0x3a2684)
        .map((_0x3f4506) => _0x3f4506)
        .find((_0x2170d5) => V(_0x2170d5) && _0x2170d5.chartId === _0x5cc6b3) ??
        null);
}
function V(_0x1c6837) {
  return (
    (_0x1c6837 == null ? undefined : _0x1c6837.drawingType) ===
      _0x18710a.DRAWING_CHART && typeof _0x1c6837.chartId == "string"
  );
}
_0x1c268e.extend(j);
var H = class extends _0x151d86 {
  get DocsChartInsertAnchorKind() {
    return _0x527f85;
  }
  get DocsChartLayoutType() {
    return _0x1ce6ea;
  }
};
_0x151d86.extend(H);
export { A as FDocumentChart };
