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
import { x } from "./internal-core-endo.js";
import { Qe, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 } from "./embed-host-anchor-mutation-id.js";
var K = class {
  constructor() {
    x(this, "_contributions", new Map());
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = this._key(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422.entry);
    if (this._contributions["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423)) throw Error("Embed\x20host\x20adapter\x20contribution\x20already\x20registered:\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423);
    this._contributions["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422);
  }
  get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427) {
    return this._contributions["get"](this._key(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46427));
  }
  list() {
    return [...this._contributions["values"]()];
  }
  readContext(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.entry)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431.readContext) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431, {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.hostUnitId,
      hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.hostType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.entry,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.hostAnchorId,
      descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430
    })) ?? {
      resolved: false,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.entry
    };
  }
  createBoundsUpdatePlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.entry);
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.createBoundsUpdatePlan)) throw Error("EMBED_HOST_BOUNDS_NOT_SUPPORTED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.entry);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.createBoundsUpdatePlan({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hostUnitId,
      hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hostType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.entry,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436.hostAnchorId,
      descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46436,
      bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437
    });
  }
  createAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.createAnchor) throw Error("EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.entry);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.createAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442);
  }
  createAnchorPlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.entry);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.createAnchorPlan) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.createAnchorPlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447.createAnchor) throw Error("EMBED_HOST_ADAPTER_CREATE_ANCHOR_NOT_IMPLEMENTED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.entry);
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.requestedAnchorId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.embedId + "-anchor",
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.embedId,
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.hostUnitId,
        hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.hostType,
        entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446.entry,
        hostAnchorId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1
      };
    return {
      hostAnchorId: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1,
      redoMutations: [{
        id: Qe,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16
      }],
      undoMutations: [{
        id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16
      }]
    };
  }
  removeAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.entry)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.removeAnchor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450);
  }
  afterCreateAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456.entry)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.afterCreateAnchor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456);
  }
  afterRemoveAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.entry)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463.afterRemoveAnchor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46464.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462);
  }
  activateAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470;
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.entry)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.activateAnchor) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468);
  }
  restoreAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475) throw Error("EMBED_HOST_ADAPTER_NOT_REGISTERED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.entry);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.restoreAnchor) throw Error("EMBED_HOST_ADAPTER_RESTORE_ANCHOR_NOT_IMPLEMENTED:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.hostType + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474.entry);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46475.restoreAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
  }
  removeAnchorPlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 = this.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.entry);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.removeAnchorPlan) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.removeAnchorPlan(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.embedId,
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.hostUnitId,
      hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.hostType,
      entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.entry,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46478.hostAnchorId
    };
    return {
      redoMutations: [{
        id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
      }],
      undoMutations: [{
        id: Qe,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
      }]
    };
  }
  _key(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46482 + ":" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46483;
  }
};
export { K as EmbedHostAdapterRegistryService };
