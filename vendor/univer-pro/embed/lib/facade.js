import { CreateEmbedCommand as var_core_value_sig362B, EMBED_CHILD_CREATE_OPTIONS as var_core_value_sig5CA5, EmbedError as var_core_value_sigE90F, EmbedErrorCode as var_core_value_sigEFD4, EmbedHostAdapterRegistryService as var_core_value_sig861B, EmbedHostEntryEnum as var_core_value_sig5237, EmbedModelService as var_core_value_sigBB00, EmbedReferencedUnitApiResolverRegistryService as var_core_value_sig7E54, EmbedReferencedUnitMaterializeService as var_core_value_sig9A8D, IReferencedUnitManagerService as var_core_value_sigC259, RemoveEmbedCommand as var_core_value_sig9C9F, SetEmbedBoundsCommand as var_core_value_sigFDEA, SetEmbedDisplayTargetCommand as var_core_value_sig86D0, SetEmbedSheetPlacementCommand as var_core_value_sig4CD2, normalizeResourceRefLocator as var_core_value_sig48CA } from "@univerjs-pro/embed";
import { FBase as var_core_value_sig50AF, FEnum as var_core_value_sigA942, FUniver as var_core_value_sigA621 } from "@univerjs/core/facade";
import { ICommandService as var_core_value_sigBBFF, Inject as var_core_value_sig8889, Injector as var_core_value_sig32F8, UniverInstanceType as var_core_value_sig5B67, generateRandomId as var_core_value_sig1758 } from "@univerjs/core";
const C = {
  DocBlock: var_core_value_sig5237.DocsCustomBlock,
  SheetTab: var_core_value_sig5237.SheetsSheetTab,
  SheetFloating: var_core_value_sig5237.SheetsFloatingObject,
  BaseTable: var_core_value_sig5237.BasesTableListBlock,
  SlidePage: var_core_value_sig5237.SlidesPageListBlock,
  SlideFloating: var_core_value_sig5237.SlidesFloatingObject,
  BoardFloating: var_core_value_sig5237.BoardsFloatingObject
};
var w = class extends var_core_value_sigA942 {
  get FEmbedHostSurface() {
    return C;
  }
};
var_core_value_sigA942.extend(w);
function T(var_core_value_sigC80B, var_core_value_sig284F) {
  return function (var_core_value_sig2AD8, var_core_value_sig2AD0) {
    var_core_value_sig284F(var_core_value_sig2AD8, var_core_value_sig2AD0, var_core_value_sigC80B);
  };
}
function E(var_core_value_sigE154, var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259) {
  var var_core_value_sig9E2F = arguments.length,
    var_core_value_sigD082 = var_core_value_sig9E2F < 3 ? var_core_value_sig4632 : var_core_value_sig2259 === null ? var_core_value_sig2259 = Object.getOwnPropertyDescriptor(var_core_value_sig4632, var_core_value_sig12F2) : var_core_value_sig2259,
    var_core_value_sigDBB7;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigD082 = Reflect.decorate(var_core_value_sigE154, var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259);else {
    for (var var_core_value_sigD0A8 = var_core_value_sigE154.length - 1; var_core_value_sigD0A8 >= 0; var_core_value_sigD0A8--) (var_core_value_sigDBB7 = var_core_value_sigE154[var_core_value_sigD0A8]) && (var_core_value_sigD082 = (var_core_value_sig9E2F < 3 ? var_core_value_sigDBB7(var_core_value_sigD082) : var_core_value_sig9E2F > 3 ? var_core_value_sigDBB7(var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sigD082) : var_core_value_sigDBB7(var_core_value_sig4632, var_core_value_sig12F2)) || var_core_value_sigD082);
  }
  return var_core_value_sig9E2F > 3 && var_core_value_sigD082 && Object.defineProperty(var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sigD082), var_core_value_sigD082;
}
let D = class extends var_core_value_sig50AF {
  constructor(var_core_value_sig3EEE, var_core_value_sigBC46, var_core_value_sig3D7D, var_core_value_sig27E5, var_core_value_sig8061, var_core_value_sig4D4C, var_core_value_sigC9E0, var_core_value_sig76BA) {
    super(), this._descriptor = var_core_value_sig3EEE, this._univerAPI = var_core_value_sigBC46, this._injector = var_core_value_sig3D7D, this._commandService = var_core_value_sig27E5, this._materializeService = var_core_value_sig8061, this._apiResolverRegistry = var_core_value_sig4D4C, this._modelService = var_core_value_sigC9E0, this._hostAdapterRegistry = var_core_value_sig76BA;
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
    let var_core_value_sigFBFA = this._modelService["getDescriptor"](this._descriptor["hostUnitId"], this._descriptor["embedId"]) ?? this._descriptor;
    return this._descriptor = var_core_value_sigFBFA, {
      ...var_core_value_sigFBFA,
      source: {
        ...var_core_value_sigFBFA.source
      },
      displayTarget: var_core_value_sigFBFA.displayTarget ? {
        ...var_core_value_sigFBFA.displayTarget
      } : undefined,
      context: this._hostAdapterRegistry["readContext"](var_core_value_sigFBFA)
    };
  }
  getBounds() {
    let var_core_value_sigF602 = this.getDescriptor().context;
    return var_core_value_sigF602.resolved && "bounds" in var_core_value_sigF602 ? {
      ...var_core_value_sigF602.bounds
    } : null;
  }
  setBounds(var_core_value_sig1BBD) {
    if (!O(this._descriptor["entry"])) throw new var_core_value_sigE90F(var_core_value_sigEFD4.CapabilityNotSupported, {
      entry: this._descriptor["entry"],
      capability: "bounds"
    });
    return this._commandService["syncExecuteCommand"](var_core_value_sigFDEA.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      bounds: var_core_value_sig1BBD
    });
  }
  getPlacement() {
    let var_core_value_sigF704 = this.getDescriptor().context;
    return var_core_value_sigF704.resolved && var_core_value_sigF704.entry === var_core_value_sig5237.SheetsFloatingObject ? var_core_value_sigF704.placement : null;
  }
  setPlacement(var_core_value_sig2BCF) {
    if (this._descriptor["entry"] !== var_core_value_sig5237.SheetsFloatingObject) throw new var_core_value_sigE90F(var_core_value_sigEFD4.CapabilityNotSupported, {
      entry: this._descriptor["entry"],
      capability: "sheet-placement"
    });
    return this._commandService["syncExecuteCommand"](var_core_value_sig4CD2.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      placement: var_core_value_sig2BCF
    });
  }
  getDisplayTarget() {
    return this._descriptor["displayTarget"] ? {
      ...this._descriptor["displayTarget"]
    } : undefined;
  }
  setDisplayTarget(var_core_value_sig0D69) {
    let var_core_value_sig480E = this._commandService["syncExecuteCommand"](var_core_value_sig86D0.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"],
      displayTarget: var_core_value_sig0D69
    });
    return var_core_value_sig480E && (this._descriptor = {
      ...this._descriptor,
      displayTarget: var_core_value_sig0D69 ? {
        ...var_core_value_sig0D69
      } : undefined
    }), var_core_value_sig480E;
  }
  async loadAsync(var_core_value_sig26DB = {}) {
    let {
        signal: var_core_value_sigF0F9,
        ...var_core_value_sig1A0F
      } = var_core_value_sig26DB,
      var_core_value_sigFBA4 = await this._materializeService["materializeDescriptor"]({
        descriptor: this._descriptor,
        signal: var_core_value_sigF0F9,
        createOptions: {
          ...var_core_value_sig5CA5,
          ...var_core_value_sig1A0F
        }
      });
    if (this._descriptor = var_core_value_sigFBA4, !var_core_value_sigFBA4.childUnitId || var_core_value_sigFBA4.childType == null) throw new var_core_value_sigE90F(var_core_value_sigEFD4.MaterializedChildUnitRequired, {
      hostUnitId: var_core_value_sigFBA4.hostUnitId,
      embedId: var_core_value_sigFBA4.embedId
    });
    return this._apiResolverRegistry["resolve"]({
      unitId: var_core_value_sigFBA4.childUnitId,
      unitType: var_core_value_sigFBA4.childType,
      injector: this._injector,
      api: this._univerAPI
    });
  }
  remove() {
    return this._commandService["syncExecuteCommand"](var_core_value_sig9C9F.id, {
      hostUnitId: this._descriptor["hostUnitId"],
      embedId: this._descriptor["embedId"]
    });
  }
};
D = E([T(2, var_core_value_sig8889(var_core_value_sig32F8)), T(3, var_core_value_sigBBFF), T(4, var_core_value_sig8889(var_core_value_sig9A8D)), T(5, var_core_value_sig8889(var_core_value_sig7E54)), T(6, var_core_value_sig8889(var_core_value_sigBB00)), T(7, var_core_value_sig8889(var_core_value_sig861B))], D);
function O(var_core_value_sigF4B9) {
  return var_core_value_sigF4B9 === var_core_value_sig5237.SheetsFloatingObject || var_core_value_sigF4B9 === var_core_value_sig5237.SlidesFloatingObject || var_core_value_sigF4B9 === var_core_value_sig5237.BoardsFloatingObject;
}
var k = class extends var_core_value_sigA621 {
  createEmbed(var_core_value_sig4383) {
    if (var_core_value_sig4383.host["surface"] === C.SheetFloating && A(var_core_value_sig4383.host["context"])) throw new var_core_value_sigE90F(var_core_value_sigEFD4.SheetFloatingPlacementRequired, {
      hostUnitId: var_core_value_sig4383.host["unitId"]
    });
    let var_core_value_sig186C = this._univerInstanceService["getUnitType"](var_core_value_sig4383.host["unitId"]);
    if (var_core_value_sig186C === var_core_value_sig5B67.UNRECOGNIZED) throw new var_core_value_sigE90F(var_core_value_sigEFD4.HostUnitNotFound, {
      hostUnitId: var_core_value_sig4383.host["unitId"]
    });
    let var_core_value_sigD955 = this._commandService["syncExecuteCommand"](var_core_value_sig362B.id, {
      embedId: var_core_value_sig4383.embedId ?? "embed_" + var_core_value_sig1758(10),
      hostUnitId: var_core_value_sig4383.host["unitId"],
      hostType: var_core_value_sig186C,
      requestedHostAnchorId: var_core_value_sig4383.host["anchorId"],
      entry: var_core_value_sig4383.host["surface"],
      source: var_core_value_sig4383.content,
      mode: var_core_value_sig4383.interaction,
      sourceMeta: var_core_value_sig4383.sourceMeta,
      displayTarget: var_core_value_sig4383.displayTarget,
      hostContext: j(var_core_value_sig4383.host["context"])
    });
    if (!var_core_value_sigD955) throw new var_core_value_sigE90F(var_core_value_sigEFD4.CreateFailed, {
      hostUnitId: var_core_value_sig4383.host["unitId"],
      embedId: var_core_value_sig4383.embedId
    });
    return this._toFEmbed(var_core_value_sigD955);
  }
  removeEmbed(var_core_value_sig48BD) {
    return this._commandService["syncExecuteCommand"](var_core_value_sig9C9F.id, var_core_value_sig48BD);
  }
  getEmbed(var_core_value_sig429F) {
    let var_core_value_sigF62A = this._injector["get"](var_core_value_sigBB00).getDescriptor(var_core_value_sig429F.hostUnitId, var_core_value_sig429F.embedId);
    return var_core_value_sigF62A && var_core_value_sigF62A.lifecycle !== "soft-delete d" ? this._toFEmbed(var_core_value_sigF62A) : null;
  }
  listEmbeds(var_core_value_sig8178 = {}) {
    let var_core_value_sigE9ED = this._injector["get"](var_core_value_sigBB00);
    return (var_core_value_sig8178.hostUnitId ? var_core_value_sigE9ED.getActiveDescriptors(var_core_value_sig8178.hostUnitId) : var_core_value_sigE9ED.getAllActiveDescriptors()).map(var_core_value_sig7524 => this._toFEmbed(var_core_value_sig7524));
  }
  async loadUnitAsync(var_core_value_sigB577, var_core_value_sig9572 = {}) {
    let {
        signal: var_core_value_sigD873,
        unitType: var_core_value_sigA12B,
        ...var_core_value_sigF230
      } = var_core_value_sig9572,
      var_core_value_sig09B8 = this._normalizeLoadUnitRef(var_core_value_sigB577),
      var_core_value_sig6F91 = await this._injector["get"](var_core_value_sigC259).ensure(var_core_value_sig09B8, {
        unitType: var_core_value_sigA12B,
        signal: var_core_value_sigD873,
        createOptions: var_core_value_sigF230
      });
    return this._injector["get"](var_core_value_sig7E54).resolve({
      unitId: var_core_value_sig6F91.unitId,
      unitType: var_core_value_sig6F91.unitType,
      injector: this._injector,
      api: this
    });
  }
  _normalizeLoadUnitRef(var_core_value_sigF9C7) {
    return typeof var_core_value_sigF9C7 == "string" ? var_core_value_sig48CA(var_core_value_sigF9C7) : var_core_value_sigF9C7;
  }
  _toFEmbed(var_core_value_sig8895) {
    return this._injector["createInstance"](D, var_core_value_sig8895, this);
  }
};
function A(var_core_value_sig5CEE) {
  return !var_core_value_sig5CEE || typeof var_core_value_sig5CEE != "object" ? false : "placement" in var_core_value_sig5CEE ? var_core_value_sig5CEE.placement == null || typeof var_core_value_sig5CEE.placement != "object" : "left" in var_core_value_sig5CEE || "top" in var_core_value_sig5CEE || "width" in var_core_value_sig5CEE || "height" in var_core_value_sig5CEE || "sheetTransform" in var_core_value_sig5CEE;
}
function j(var_core_value_sigE92A) {
  if (var_core_value_sigE92A !== undefined) return !var_core_value_sigE92A || typeof var_core_value_sigE92A != "object" || Array.isArray(var_core_value_sigE92A) ? var_core_value_sigE92A : {
    ...var_core_value_sigE92A
  };
}
var_core_value_sigA621.extend(k);
export { D as FEmbed, C as FEmbedHostSurface, k as FUniverEmbedMixin };
