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
import { x, z } from "./internal-core-endo.js";
import { et } from "./embed-host-anchor-mutation-id.js";
import { S } from "./embed-error.js";
let qa = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963) {
    this._modelService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959, this._unitLeaseService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960, this._unitLeasePolicyService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961, this._referencedUnitManager = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46962, this._univerInstanceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963, x(this, "_materializingDescriptors", new Map());
  }
  async materializeDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970 = this._getLoadedDescriptorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.descriptor);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970.stored ? (this._leaseMaterializedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970.descriptor), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970.descriptor) : this._commitMaterializedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970.descriptor);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 = this._getMaterializeKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.descriptor),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = this._materializingDescriptors["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 = this._loadAndCommitDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969);
    this._materializingDescriptors["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974 = () => {
      this._materializingDescriptors["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 && this._materializingDescriptors["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971);
    };
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973.then(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46974), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973;
  }
  async _loadAndCommitDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981) {
    return this._commitMaterializedDescriptor(await this._loadDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981));
  }
  async _loadDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.descriptor,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 = await this._referencedUnitManager["ensure"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.source["ref"], {
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.childType,
        signal: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.signal,
        createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983.createOptions ?? et
      });
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984,
      source: {
        unitType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.childType,
        ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.ref,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.source["creationConfig"] === undefined ? undefined : {
          creationConfig: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984.source["creationConfig"]
        })
      },
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.unitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985.unitType
    };
  }
  _commitMaterializedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990;
    try {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990 = this._leaseMaterializedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989), this._modelService["addDescriptor"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989), this._modelService["getDescriptor"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989.embedId);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      throw var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990.dispose(), var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5;
    }
  }
  _leaseMaterializedDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993) {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.childType == null || this._unitLeasePolicyService["getPolicy"]() !== "exclusive") return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = this._getDescriptorOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993);
    if (!this._unitLeaseService["hasLease"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.childUnitId)) return this._unitLeaseService["acquire"]({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994,
      childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.childUnitId,
      childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993.childType
    });
  }
  _getLoadedDescriptorState(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 = this._modelService["getDescriptor"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997.embedId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997;
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childUnitId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childType == null)) {
      if (this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childUnitId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childType) throw new S("EMBED_MATERIALIZED_CHILD_UNIT_NOT_LOADED", {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.hostUnitId,
        embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.embedId,
        childUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childUnitId,
        childType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.childType
      });
      return {
        descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999,
        stored: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 != null
      };
    }
  }
  _getMaterializeKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003) {
    return JSON.stringify([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.embedId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.childType, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003.source["ref"])]);
  }
  _getDescriptorOwner(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005) {
    return {
      hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005.hostUnitId,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005.embedId
    };
  }
};
export { qa as EmbedReferencedUnitMaterializeService };
