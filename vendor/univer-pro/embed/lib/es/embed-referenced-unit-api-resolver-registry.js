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
var Q = class {
  constructor() {
    x(this, "_registrations", []);
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786) {
    if (this._registrations["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.registrationId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.registrationId)) throw Error("Referenced unit API resolver already registered: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786.registrationId);
    return this._registrations["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786), toDisposable(() => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = this._registrations["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 >= 0 && this._registrations["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, 1);
    });
  }
  registerMany(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => this.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697));
  }
  resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791 = this._registrations["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.unitType === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790.unitType);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791.length > 1) throw Error("REFERENCED_UNIT_API_RESOLVER_CONFLICT");
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791[0];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46792.resolve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790);
    if (!var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3) throw Error("REFERENCED_UNIT_API_UNAVAILABLE");
    return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3;
  }
  list() {
    return [...this._registrations];
  }
};
export { Q as EmbedReferencedUnitApiResolverRegistryService };
