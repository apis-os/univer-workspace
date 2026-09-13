import { BooleanNumber, CommandType, DependentOn, Disposable, DrawingTypeEnum, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, ObjectMatrix, Plugin, Rectangle, Tools, UniverInstanceType, createBaseFormulaTableNameMap, createIdentifier, getOriginCellValue, merge, sequenceExecute, toDisposable, touchDependencies } from "@univerjs/core";
import { InsertColMutation, InsertRowMutation, InsertSheetMutation, RemoveColMutation, RemoveRowMutation, RemoveSheetMutation, ReorderRangeMutation, SetRangeValuesMutation, SheetSkeletonService } from "@univerjs/sheets";
import { DrawingApplyType, ISheetDrawingService, SetDrawingApplyMutation, SheetDrawingAnchorType, applySheetDrawingPlacement, getSheetDrawingPlacement } from "@univerjs/sheets-drawing";
import { IFormulaReferenceDataProviderRegistry, createUnavailableReferenceDataResponse } from "@univerjs-pro/engine-formula";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { AddBoardElementMutation, IBoardElementService, RemoveBoardElementMutation, UpdateBoardElementMutation, collectBoardElementIdsForRemoveWithBoundConnectors, createEmbedBoardsFloatingElement, isEmbedBoardsFloatingElement } from "@univerjs-pro/boards";
import { AddSlideElementMutation, AddSlidePageMutation, ISlideDrawingService, RemoveSlideElementMutation, RemoveSlidePageMutation, UpdateSlideElementMutation, createEmbedSlidesFloatingElement, createEmbedSlidesPage, getEmbedSlidesFloatingCustomData, resolvedSlideLayersToDrawingMap } from "@univerjs-pro/slides";
import { IDrawingManagerService } from "@univerjs/drawing";
import { ApplyBaseJson1Mutation, BaseJson1OpApplier, createEmbedBasesTable, createEmbedBasesTableAddMutation, createEmbedBasesTableRemoveMutation, ensureBaseTableCellLayout, getBaseCellFormulaValue } from "@univerjs-pro/bases";
import { createDocsCustomBlockInsertMutation, createDocsCustomBlockRemoveMutation } from "@univerjs/docs";
import { BehaviorSubject } from "rxjs";
import { Fn, dn, x, z } from "./internal-core-endo.js";
import { b } from "./embed-host-anchor-mutation-id.js";
import { S } from "./embed-error.js";
import { R } from "./embed-resource-ref.js";
import { B } from "./embed-from-resource-ref-unit-type.js";
function hn() {
  return {
    version: 1,
    embeds: {}
  };
}
function gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531 ?? hn()));
}
let U = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257) {
    this._unitLeaseService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257, x(this, "_resources", new Map());
  }
  addDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260) {
    let var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422 = Date.now(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = this._normalizeDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = this._ensureResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.hostType === UniverInstanceType.UNIVER_BOARD && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.entry === b.BoardsFloatingObject && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.lifecycle !== "soft-delete d" && Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.embeds).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.embedId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.lifecycle !== "soft-delete d" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.hostType === UniverInstanceType.UNIVER_BOARD && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.entry === b.BoardsFloatingObject && z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.source["ref"]) === z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.source["ref"])) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.lifecycle = "soft-delete d"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.embeds[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.embedId] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
      createdAt: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261.createdAt ?? var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422,
      updatedAt: var_L0_core_endo_timestampMs_pure_O1_zalloc_nothrow_sig22422
    };
  }
  applyDescriptorMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = this.getDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268.embedId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = this._getRuntimeChildUnitIdForMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268);
    this.addDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268);
  }
  getDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.embeds[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276];
  }
  getActiveDescriptors(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282;
    return Object.values(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.embeds) ?? {}).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.lifecycle !== "soft-delete d");
  }
  getAllActiveDescriptors() {
    return [...this._resources["values"]()].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.embeds)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.lifecycle !== "soft-delete d");
  }
  getActiveDescriptorsByChildUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) {
    return [...this._resources["values"]()].flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 => Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.embeds)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.lifecycle !== "soft-delete d" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.childUnitId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285);
  }
  getDescriptors(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
    return Object.values(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.embeds) ?? {});
  }
  getDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292);
    return Object.values(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.embeds) ?? {}).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => z(this._getDescriptorResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644)) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294);
  }
  getActiveDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300) {
    return this.getDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.lifecycle !== "soft-delete d");
  }
  countReferencesByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304) {
    return this.getDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46304).length;
  }
  countActiveReferencesByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308) {
    return this.getActiveDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308).length;
  }
  softDeleteDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = this.getDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 && (this._unitLeaseService["release"]({
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.lifecycle = "soft-delete d", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.updatedAt = Date.now());
  }
  restoreDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = this.getDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.hostType === UniverInstanceType.UNIVER_BOARD && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.entry === b.BoardsFloatingObject && this.getActiveDescriptorsByResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.source["ref"]).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.embedId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.lifecycle = "active", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.updatedAt = Date.now()));
  }
  serializeUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) {
    return this._cloneResource(this._toPersistedResource(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) ?? this._createResource()));
  }
  loadUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = this._createResource();
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.embeds ?? {})) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327.embeds[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647] = this._normalizeDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, {
      ...this._toPersistedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648),
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
    });
    this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, this._cloneResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327));
  }
  unloadUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) {
    this._resources["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331);
  }
  parseJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333) return this._createResource();
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333);
    return {
      ...hn(),
      embeds: Object.fromEntries(Object.entries(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10.embeds ?? {}).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, this._normalizeDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650.hostUnitId, {
        ...this._toPersistedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650),
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649
      })]))
    };
  }
  toJson(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335) {
    return JSON.stringify(this.serializeUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335));
  }
  _normalizeDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338
    };
    delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12.hostContext;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.childType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.source["unitType"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 == null) throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_REQUIRED", {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.embedId
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.source["ref"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 !== B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.unit["type"])) throw new S("EMBED_DESCRIPTOR_CHILD_TYPE_MISMATCH", {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.embedId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
      refUnitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341.unit["type"]
    });
    return {
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB12,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337,
      source: {
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340,
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.source["creationConfig"] === undefined ? undefined : {
          creationConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.source["creationConfig"]
        })
      },
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.displayTarget === undefined ? {} : {
        displayTarget: dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.displayTarget)
      }),
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339,
      lifecycle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.lifecycle ?? "active"
    };
  }
  _getDescriptorResourceRef(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.source["ref"];
  }
  _getRuntimeChildUnitIdForMutation(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.childUnitId || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.childUnitId) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.lifecycle === "soft-delete d" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.lifecycle === "soft-delete d") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.childUnitId;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.childType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.source["unitType"];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.childType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 && z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.source["ref"]) === z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.source["ref"])) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.childUnitId;
  }
  _ensureResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = this._createResource(), this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356;
  }
  _createResource() {
    return hn();
  }
  _cloneResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359) {
    return gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359);
  }
  _toPersistedResource(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361) {
    return {
      version: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.version,
      embeds: Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361.embeds).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, this._toPersistedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652)]))
    };
  }
  _toPersistedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363
    };
    return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.childUnitId, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14;
  }
};
export { U as EmbedModelService };
