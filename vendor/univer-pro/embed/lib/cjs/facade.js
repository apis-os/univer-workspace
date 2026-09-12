Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/embed"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core");
const r = {
  DocBlock: e.EmbedHostEntryEnum["DocsCustomBlock"],
  SheetTab: e.EmbedHostEntryEnum["SheetsSheetTab"],
  SheetFloating: e.EmbedHostEntryEnum["SheetsFloatingObject"],
  BaseTable: e.EmbedHostEntryEnum["BasesTableListBlock"],
  SlidePage: e.EmbedHostEntryEnum["SlidesPageListBlock"],
  SlideFloating: e.EmbedHostEntryEnum["SlidesFloatingObject"],
  BoardFloating: e.EmbedHostEntryEnum["BoardsFloatingObject"],
};
var i = class extends t.FEnum {
  get FEmbedHostSurface() {
    return r;
  }
};
t.FEnum["extend"](i);
function a(_0x461cb8, _0x548e64) {
  return function (_0x137fab, _0x545cb9) {
    _0x548e64(_0x137fab, _0x545cb9, _0x461cb8);
  };
}
function o(_0x4d2d02, _0x52e48c, _0x4a0682, _0x484eae) {
  var _0x5d8934 = arguments.length,
    _0x11bbcb =
      _0x5d8934 < 3
        ? _0x52e48c
        : _0x484eae === null
          ? (_0x484eae = Object.getOwnPropertyDescriptor(_0x52e48c, _0x4a0682))
          : _0x484eae,
    _0x26a2e4;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x11bbcb = Reflect.decorate(_0x4d2d02, _0x52e48c, _0x4a0682, _0x484eae);
  else {
    for (var _0x24b68c = _0x4d2d02.length - 1; _0x24b68c >= 0; _0x24b68c--)
      (_0x26a2e4 = _0x4d2d02[_0x24b68c]) &&
        (_0x11bbcb =
          (_0x5d8934 < 3
            ? _0x26a2e4(_0x11bbcb)
            : _0x5d8934 > 3
              ? _0x26a2e4(_0x52e48c, _0x4a0682, _0x11bbcb)
              : _0x26a2e4(_0x52e48c, _0x4a0682)) || _0x11bbcb);
  }
  return (
    _0x5d8934 > 3 &&
      _0x11bbcb &&
      Object.defineProperty(_0x52e48c, _0x4a0682, _0x11bbcb),
    _0x11bbcb
  );
}
let s = class extends t.FBase {
  constructor(
    _0x373b6f,
    _0x18c7e9,
    _0xfd98cd,
    _0x13ae82,
    _0x4927c9,
    _0x29357b,
    _0xeb5fa0,
    _0x2f9963,
  ) {
    (super(),
      (this._descriptor = _0x373b6f),
      (this._univerAPI = _0x18c7e9),
      (this._injector = _0xfd98cd),
      (this._commandService = _0x13ae82),
      (this._materializeService = _0x4927c9),
      (this._apiResolverRegistry = _0x29357b),
      (this._modelService = _0xeb5fa0),
      (this._hostAdapterRegistry = _0x2f9963));
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
    let _0x21b319 =
      this._modelService["getDescriptor"](
        this._descriptor["hostUnitId"],
        this._descriptor["embedId"],
      ) ?? this._descriptor;
    return (
      (this._descriptor = _0x21b319),
      {
        ..._0x21b319,
        source: { ..._0x21b319.source },
        displayTarget: _0x21b319.displayTarget
          ? { ..._0x21b319.displayTarget }
          : undefined,
        context: this._hostAdapterRegistry["readContext"](_0x21b319),
      }
    );
  }
  getBounds() {
    let _0x902227 = this.getDescriptor().context;
    return _0x902227.resolved && "bounds" in _0x902227
      ? { ..._0x902227.bounds }
      : null;
  }
  setBounds(_0x4e6749) {
    if (!c(this._descriptor["entry"]))
      throw new e["EmbedError"](e.EmbedErrorCode["CapabilityNotSupported"], {
        entry: this._descriptor["entry"],
        capability: "bounds",
      });
    return this._commandService["syncExecuteCommand"](
      e.SetEmbedBoundsCommand["id"],
      {
        hostUnitId: this._descriptor["hostUnitId"],
        embedId: this._descriptor["embedId"],
        bounds: _0x4e6749,
      },
    );
  }
  getPlacement() {
    let _0x189309 = this.getDescriptor().context;
    return _0x189309.resolved &&
      _0x189309.entry === e.EmbedHostEntryEnum["SheetsFloatingObject"]
      ? _0x189309.placement
      : null;
  }
  setPlacement(_0x128546) {
    if (
      this._descriptor["entry"] !== e.EmbedHostEntryEnum["SheetsFloatingObject"]
    )
      throw new e["EmbedError"](e.EmbedErrorCode["CapabilityNotSupported"], {
        entry: this._descriptor["entry"],
        capability: "sheet-placement",
      });
    return this._commandService["syncExecuteCommand"](
      e.SetEmbedSheetPlacementCommand["id"],
      {
        hostUnitId: this._descriptor["hostUnitId"],
        embedId: this._descriptor["embedId"],
        placement: _0x128546,
      },
    );
  }
  getDisplayTarget() {
    return this._descriptor["displayTarget"]
      ? { ...this._descriptor["displayTarget"] }
      : undefined;
  }
  setDisplayTarget(_0x1c7b15) {
    let _0x3f81d3 = this._commandService["syncExecuteCommand"](
      e.SetEmbedDisplayTargetCommand["id"],
      {
        hostUnitId: this._descriptor["hostUnitId"],
        embedId: this._descriptor["embedId"],
        displayTarget: _0x1c7b15,
      },
    );
    return (
      _0x3f81d3 &&
        (this._descriptor = {
          ...this._descriptor,
          displayTarget: _0x1c7b15 ? { ..._0x1c7b15 } : undefined,
        }),
      _0x3f81d3
    );
  }
  async loadAsync(_0x37d866 = {}) {
    let { signal: _0x3064f4, ..._0x3df2d0 } = _0x37d866,
      _0x164bac = await this._materializeService["materializeDescriptor"]({
        descriptor: this._descriptor,
        signal: _0x3064f4,
        createOptions: { ...e.EMBED_CHILD_CREATE_OPTIONS, ..._0x3df2d0 },
      });
    if (
      ((this._descriptor = _0x164bac),
      !_0x164bac.childUnitId || _0x164bac.childType == null)
    )
      throw new e["EmbedError"](
        e.EmbedErrorCode["MaterializedChildUnitRequired"],
        { hostUnitId: _0x164bac.hostUnitId, embedId: _0x164bac.embedId },
      );
    return this._apiResolverRegistry["resolve"]({
      unitId: _0x164bac.childUnitId,
      unitType: _0x164bac.childType,
      injector: this._injector,
      api: this._univerAPI,
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](
      e.RemoveEmbedCommand["id"],
      {
        hostUnitId: this._descriptor["hostUnitId"],
        embedId: this._descriptor["embedId"],
      },
    );
  }
};
s = o(
  [
    a(2, (0, n.Inject)(n.Injector)),
    a(3, n.ICommandService),
    a(4, (0, n.Inject)(e.EmbedReferencedUnitMaterializeService)),
    a(5, (0, n.Inject)(e.EmbedReferencedUnitApiResolverRegistryService)),
    a(6, (0, n.Inject)(e.EmbedModelService)),
    a(7, (0, n.Inject)(e.EmbedHostAdapterRegistryService)),
  ],
  s,
);
function c(_0x574607) {
  return (
    _0x574607 === e.EmbedHostEntryEnum["SheetsFloatingObject"] ||
    _0x574607 === e.EmbedHostEntryEnum["SlidesFloatingObject"] ||
    _0x574607 === e.EmbedHostEntryEnum["BoardsFloatingObject"]
  );
}
var l = class extends t.FUniver {
  createEmbed(_0x28fc21) {
    if (
      _0x28fc21.host["surface"] === r.SheetFloating &&
      u(_0x28fc21.host["context"])
    )
      throw new e.EmbedError(
        e.EmbedErrorCode["SheetFloatingPlacementRequired"],
        { hostUnitId: _0x28fc21.host["unitId"] },
      );
    let _0x3919db = this._univerInstanceService["getUnitType"](
      _0x28fc21.host["unitId"],
    );
    if (_0x3919db === n.UniverInstanceType["UNRECOGNIZED"])
      throw new e["EmbedError"](e.EmbedErrorCode["HostUnitNotFound"], {
        hostUnitId: _0x28fc21.host["unitId"],
      });
    let _0x418f17 = this._commandService["syncExecuteCommand"](
      e.CreateEmbedCommand["id"],
      {
        embedId: _0x28fc21.embedId ?? "embed_" + (0, n.generateRandomId)(10),
        hostUnitId: _0x28fc21.host["unitId"],
        hostType: _0x3919db,
        requestedHostAnchorId: _0x28fc21.host["anchorId"],
        entry: _0x28fc21.host["surface"],
        source: _0x28fc21.content,
        mode: _0x28fc21.interaction,
        sourceMeta: _0x28fc21.sourceMeta,
        displayTarget: _0x28fc21.displayTarget,
        hostContext: d(_0x28fc21.host["context"]),
      },
    );
    if (!_0x418f17)
      throw new e.EmbedError(e.EmbedErrorCode["CreateFailed"], {
        hostUnitId: _0x28fc21.host["unitId"],
        embedId: _0x28fc21.embedId,
      });
    return this._toFEmbed(_0x418f17);
  }
  removeEmbed(_0x57831d) {
    return this._commandService["syncExecuteCommand"](
      e.RemoveEmbedCommand["id"],
      _0x57831d,
    );
  }
  getEmbed(_0x5b9319) {
    let _0x3ec661 = this._injector["get"](e.EmbedModelService).getDescriptor(
      _0x5b9319.hostUnitId,
      _0x5b9319.embedId,
    );
    return _0x3ec661 && _0x3ec661.lifecycle !== "soft-delete d"
      ? this._toFEmbed(_0x3ec661)
      : null;
  }
  listEmbeds(_0x2b2a21 = {}) {
    let _0x46f0da = this._injector["get"](e.EmbedModelService);
    return (
      _0x2b2a21.hostUnitId
        ? _0x46f0da.getActiveDescriptors(_0x2b2a21.hostUnitId)
        : _0x46f0da.getAllActiveDescriptors()
    ).map((_0x390175) => this._toFEmbed(_0x390175));
  }
  async loadUnitAsync(_0x1ec0d6, _0x522bea = {}) {
    let { signal: _0x4c9977, unitType: _0x4d6e11, ..._0x405c58 } = _0x522bea,
      _0x4b1d28 = this._normalizeLoadUnitRef(_0x1ec0d6),
      _0x3403e3 = await this._injector["get"](
        e.IReferencedUnitManagerService,
      ).ensure(_0x4b1d28, {
        unitType: _0x4d6e11,
        signal: _0x4c9977,
        createOptions: _0x405c58,
      });
    return this._injector["get"](
      e.EmbedReferencedUnitApiResolverRegistryService,
    ).resolve({
      unitId: _0x3403e3.unitId,
      unitType: _0x3403e3.unitType,
      injector: this._injector,
      api: this,
    });
  }
  _normalizeLoadUnitRef(_0x59a83f) {
    return typeof _0x59a83f == "string"
      ? (0, e.normalizeResourceRefLocator)(_0x59a83f)
      : _0x59a83f;
  }
  _toFEmbed(_0x5282ef) {
    return this._injector["createInstance"](s, _0x5282ef, this);
  }
};
function u(_0x260734) {
  return !_0x260734 || typeof _0x260734 != "object"
    ? false
    : "placement" in _0x260734
      ? _0x260734.placement == null || typeof _0x260734.placement != "object"
      : "left" in _0x260734 ||
        "top" in _0x260734 ||
        "width" in _0x260734 ||
        "height" in _0x260734 ||
        "sheetTransform" in _0x260734;
}
function d(_0x51dfa8) {
  if (_0x51dfa8 !== undefined)
    return !_0x51dfa8 ||
      typeof _0x51dfa8 != "object" ||
      Array.isArray(_0x51dfa8)
      ? _0x51dfa8
      : { ..._0x51dfa8 };
}
(t.FUniver["extend"](l),
  Object.defineProperty(exports, "FEmbed", {
    enumerable: true,
    get: function () {
      return s;
    },
  }),
  (exports.FEmbedHostSurface = r),
  (exports.FUniverEmbedMixin = l));
