import {
  CreateEmbedCommand as _0x41068f,
  EMBED_CHILD_CREATE_OPTIONS as _0x427b61,
  EmbedError as _0x560538,
  EmbedErrorCode as _0x55dfcd,
  EmbedHostAdapterRegistryService as _0x37d495,
  EmbedHostEntryEnum as _0x20ee0c,
  EmbedModelService as _0x202bd7,
  EmbedReferencedUnitApiResolverRegistryService as _0x554244,
  EmbedReferencedUnitMaterializeService as _0x3a7bba,
  IReferencedUnitManagerService as _0x5a7817,
  RemoveEmbedCommand as _0x5c3162,
  SetEmbedBoundsCommand as _0x199b5a,
  SetEmbedDisplayTargetCommand as _0x41dc93,
  SetEmbedSheetPlacementCommand as _0x5b3a48,
  normalizeResourceRefLocator as _0x4e1efb,
} from "@univerjs-pro/embed";
import {
  FBase as _0x2cfd7f,
  FEnum as _0x228206,
  FUniver as _0x42f676,
} from "@univerjs/core/facade";
import {
  ICommandService as _0x4584af,
  Inject as _0x401adc,
  Injector as _0x1ff760,
  UniverInstanceType as _0x561f01,
  generateRandomId as _0x523346,
} from "@univerjs/core";
const C = {
  DocBlock: _0x20ee0c.DocsCustomBlock,
  SheetTab: _0x20ee0c.SheetsSheetTab,
  SheetFloating: _0x20ee0c.SheetsFloatingObject,
  BaseTable: _0x20ee0c.BasesTableListBlock,
  SlidePage: _0x20ee0c.SlidesPageListBlock,
  SlideFloating: _0x20ee0c.SlidesFloatingObject,
  BoardFloating: _0x20ee0c.BoardsFloatingObject,
};
var w = class extends _0x228206 {
  get FEmbedHostSurface() {
    return C;
  }
};
_0x228206.extend(w);
function T(_0xf2ece5, _0x43f869) {
  return function (_0x1fc52e, _0x3606bd) {
    _0x43f869(_0x1fc52e, _0x3606bd, _0xf2ece5);
  };
}
function E(_0x7f5544, _0x43604a, _0xdd308, _0x13d07a) {
  var _0x3136f7 = arguments.length,
    _0x16a7a4 =
      _0x3136f7 < 3
        ? _0x43604a
        : _0x13d07a === null
          ? (_0x13d07a = Object.getOwnPropertyDescriptor(_0x43604a, _0xdd308))
          : _0x13d07a,
    _0x5ebaa4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x16a7a4 = Reflect.decorate(_0x7f5544, _0x43604a, _0xdd308, _0x13d07a);
  else {
    for (var _0x246259 = _0x7f5544.length - 1; _0x246259 >= 0; _0x246259--)
      (_0x5ebaa4 = _0x7f5544[_0x246259]) &&
        (_0x16a7a4 =
          (_0x3136f7 < 3
            ? _0x5ebaa4(_0x16a7a4)
            : _0x3136f7 > 3
              ? _0x5ebaa4(_0x43604a, _0xdd308, _0x16a7a4)
              : _0x5ebaa4(_0x43604a, _0xdd308)) || _0x16a7a4);
  }
  return (
    _0x3136f7 > 3 &&
      _0x16a7a4 &&
      Object.defineProperty(_0x43604a, _0xdd308, _0x16a7a4),
    _0x16a7a4
  );
}
let D = class extends _0x2cfd7f {
  constructor(
    _0x5c065e,
    _0x3e5331,
    _0x43e6eb,
    _0x4694d8,
    _0x23ca8c,
    _0x35faae,
    _0x35f420,
    _0x475e78,
  ) {
    (super(),
      (this._descriptor = _0x5c065e),
      (this._univerAPI = _0x3e5331),
      (this._injector = _0x43e6eb),
      (this._commandService = _0x4694d8),
      (this._materializeService = _0x23ca8c),
      (this._apiResolverRegistry = _0x35faae),
      (this._modelService = _0x35f420),
      (this._hostAdapterRegistry = _0x475e78));
  }
  getId() {
    return this._descriptor["embedId"];
  }
  getHostUnitId() {
    return this._descriptor["hostUnitId"];
  }
  getHostAnchorId() {
    return this._descriptor["hostAnchorId"];
  }
  getChildUnitId() {
    return this._descriptor["childUnitId"];
  }
  getHostType() {
    return this._descriptor["hostType"];
  }
  getChildType() {
    return this._descriptor["childType"];
  }
  getEntry() {
    return this._descriptor["entry"];
  }
  getDescriptor() {
    let _0x978ebf =
      this._modelService["getDescriptor"](
        this._descriptor["hostUnitId"],
        this._descriptor["embedId"],
      ) ?? this._descriptor;
    return (
      (this._descriptor = _0x978ebf),
      {
        ..._0x978ebf,
        source: { ..._0x978ebf.source },
        displayTarget: _0x978ebf.displayTarget
          ? { ..._0x978ebf.displayTarget }
          : undefined,
        context: this._hostAdapterRegistry["readContext"](_0x978ebf),
      }
    );
  }
  getBounds() {
    let _0x58b9cc = this.getDescriptor().context;
    return _0x58b9cc.resolved && "bounds" in _0x58b9cc
      ? { ..._0x58b9cc.bounds }
      : null;
  }
  setBounds(_0x57f1ed) {
    if (!O(this._descriptor["entry"]))
      throw new _0x560538(_0x55dfcd.CapabilityNotSupported, {
        entry: this._descriptor["entry"],
        capability: "bounds",
      });
    return this._commandService["syncExecuteCommand"](_0x199b5a.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      bounds: _0x57f1ed,
    });
  }
  getPlacement() {
    let _0x2a6254 = this.getDescriptor().context;
    return _0x2a6254.resolved &&
      _0x2a6254.entry === _0x20ee0c.SheetsFloatingObject
      ? _0x2a6254.placement
      : null;
  }
  setPlacement(_0x4ed754) {
    if (this._descriptor["entry"] !== _0x20ee0c.SheetsFloatingObject)
      throw new _0x560538(_0x55dfcd.CapabilityNotSupported, {
        entry: this._descriptor["entry"],
        capability: "sheet-placement",
      });
    return this._commandService["syncExecuteCommand"](_0x5b3a48.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      placement: _0x4ed754,
    });
  }
  getDisplayTarget() {
    return this._descriptor["displayTarget"]
      ? { ...this._descriptor["displayTarget"] }
      : undefined;
  }
  setDisplayTarget(_0xf4d49b) {
    let _0x4fe289 = this._commandService["syncExecuteCommand"](_0x41dc93.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      displayTarget: _0xf4d49b,
    });
    return (
      _0x4fe289 &&
        (this._descriptor = {
          ...this._descriptor,
          displayTarget: _0xf4d49b ? { ..._0xf4d49b } : undefined,
        }),
      _0x4fe289
    );
  }
  async loadAsync(_0x3096db = {}) {
    let { signal: _0x3d3df6, ..._0x562eab } = _0x3096db,
      _0xdffaf5 = await this._materializeService["materializeDescriptor"]({
        descriptor: this._descriptor,
        signal: _0x3d3df6,
        createOptions: { ..._0x427b61, ..._0x562eab },
      });
    if (
      ((this._descriptor = _0xdffaf5),
      !_0xdffaf5.childUnitId || _0xdffaf5.childType == null)
    )
      throw new _0x560538(_0x55dfcd.MaterializedChildUnitRequired, {
        hostUnitId: _0xdffaf5.hostUnitId,
        embedId: _0xdffaf5.embedId,
      });
    return this._apiResolverRegistry["resolve"]({
      unitId: _0xdffaf5.childUnitId,
      unitType: _0xdffaf5.childType,
      injector: this._injector,
      api: this._univerAPI,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](_0x5c3162.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
    });
  }
};
D = E(
  [
    T(2, _0x401adc(_0x1ff760)),
    T(3, _0x4584af),
    T(4, _0x401adc(_0x3a7bba)),
    T(5, _0x401adc(_0x554244)),
    T(6, _0x401adc(_0x202bd7)),
    T(7, _0x401adc(_0x37d495)),
  ],
  D,
);
function O(_0xfdd322) {
  return (
    _0xfdd322 === _0x20ee0c.SheetsFloatingObject ||
    _0xfdd322 === _0x20ee0c.SlidesFloatingObject ||
    _0xfdd322 === _0x20ee0c.BoardsFloatingObject
  );
}
var k = class extends _0x42f676 {
  createEmbed(_0x339961) {
    if (
      _0x339961.host["surface"] === C.SheetFloating &&
      A(_0x339961.host["context"])
    )
      throw new _0x560538(_0x55dfcd.SheetFloatingPlacementRequired, {
        hostUnitId: _0x339961.host["unitId"],
      });
    let _0x598db9 = this._univerInstanceService["getUnitType"](
      _0x339961.host["unitId"],
    );
    if (_0x598db9 === _0x561f01.UNRECOGNIZED)
      throw new _0x560538(_0x55dfcd.HostUnitNotFound, {
        hostUnitId: _0x339961.host["unitId"],
      });
    let _0x1c3e2b = this._commandService["syncExecuteCommand"](_0x41068f.id, {
      embedId: _0x339961.embedId ?? "embed_" + _0x523346(10),
      hostUnitId: _0x339961.host["unitId"],
      hostType: _0x598db9,
      requestedHostAnchorId: _0x339961.host["anchorId"],
      entry: _0x339961.host["surface"],
      source: _0x339961.content,
      mode: _0x339961.interaction,
      sourceMeta: _0x339961.sourceMeta,
      displayTarget: _0x339961.displayTarget,
      hostContext: j(_0x339961.host["context"]),
    });
    if (!_0x1c3e2b)
      throw new _0x560538(_0x55dfcd.CreateFailed, {
        hostUnitId: _0x339961.host["unitId"],
        embedId: _0x339961.embedId,
      });
    return this._toFEmbed(_0x1c3e2b);
  }
  removeEmbed(_0x25c7ff) {
    return this._commandService["syncExecuteCommand"](_0x5c3162.id, _0x25c7ff);
  }
  getEmbed(_0x22b48f) {
    let _0x32cbe0 = this._injector["get"](_0x202bd7).getDescriptor(
      _0x22b48f.hostUnitId,
      _0x22b48f.embedId,
    );
    return _0x32cbe0 && _0x32cbe0.lifecycle !== "soft-delete d"
      ? this._toFEmbed(_0x32cbe0)
      : null;
  }
  listEmbeds(_0x593652 = {}) {
    let _0x4e7d22 = this._injector["get"](_0x202bd7);
    return (
      _0x593652.hostUnitId
        ? _0x4e7d22.getActiveDescriptors(_0x593652.hostUnitId)
        : _0x4e7d22.getAllActiveDescriptors()
    ).map((_0x3d1edd) => this._toFEmbed(_0x3d1edd));
  }
  async loadUnitAsync(_0x25b7b5, _0x1a24d5 = {}) {
    let { signal: _0x396479, unitType: _0x2cd702, ..._0x432ffc } = _0x1a24d5,
      _0x37e719 = this._normalizeLoadUnitRef(_0x25b7b5),
      _0x9351e2 = await this._injector["get"](_0x5a7817).ensure(_0x37e719, {
        unitType: _0x2cd702,
        signal: _0x396479,
        createOptions: _0x432ffc,
      });
    return this._injector["get"](_0x554244).resolve({
      unitId: _0x9351e2.unitId,
      unitType: _0x9351e2.unitType,
      injector: this._injector,
      api: this,
    });
  }
  _normalizeLoadUnitRef(_0x570a7b) {
    return typeof _0x570a7b == "string" ? _0x4e1efb(_0x570a7b) : _0x570a7b;
  }
  _toFEmbed(_0x33a56b) {
    return this._injector["createInstance"](D, _0x33a56b, this);
  }
};
function A(_0x3eb5f7) {
  return !_0x3eb5f7 || typeof _0x3eb5f7 != "object"
    ? false
    : "placement" in _0x3eb5f7
      ? _0x3eb5f7.placement == null || typeof _0x3eb5f7.placement != "object"
      : "left" in _0x3eb5f7 ||
        "top" in _0x3eb5f7 ||
        "width" in _0x3eb5f7 ||
        "height" in _0x3eb5f7 ||
        "sheetTransform" in _0x3eb5f7;
}
function j(_0x300e2d) {
  if (_0x300e2d !== undefined)
    return !_0x300e2d ||
      typeof _0x300e2d != "object" ||
      Array.isArray(_0x300e2d)
      ? _0x300e2d
      : { ..._0x300e2d };
}
_0x42f676.extend(k);
export { D as FEmbed, C as FEmbedHostSurface, k as FUniverEmbedMixin };
