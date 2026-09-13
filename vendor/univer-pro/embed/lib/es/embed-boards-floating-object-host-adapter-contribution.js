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
import { b, v, y } from "./embed-host-anchor-mutation-id.js";
import { C } from "./internal-core-endo.js";
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846) {
  return {
    hostType: UniverInstanceType.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    createAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601 => ai(Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    restoreAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 => ai(Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846)), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.getAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.hostAnchorId)) ?? ti({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603,
        requestedAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.hostAnchorId
      });
      return qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846)) ?? ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46604);
    },
    readContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607 => Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846)),
    createBoundsUpdatePlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 => Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, ai(Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846), "EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE"))
  };
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 == "function" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850() : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850;
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852) {
  C({
    hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.hostUnitId,
    entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.entry,
    hostContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.hostContext
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854 = ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostContext, "subUnitId");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855 = ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853);
  return {
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostAnchorId,
    redoMutations: [{
      id: AddBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855,
        allowEmbedAnchor: true
      }
    }, {
      id: v,
      params: {
        record: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostAnchorId
      }
    }, {
      id: RemoveBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.hostAnchorId
      }
    }]
  };
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865 = Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.hostAnchorId, ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostContext, "subUnitId"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostAnchorId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864.element;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866 || !isEmbedBoardsFloatingElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(collectBoardElementIdsForRemoveWithBoundConnectors(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.id])),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610) => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609) ? [{
      id: AddBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609].element),
        insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610,
        allowEmbedAnchor: true
      }
    }] : []);
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostAnchorId
      }
    }, {
      id: RemoveBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostAnchorId
      }
    }],
    undoMutations: [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36, {
      id: v,
      params: {
        record: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861,
          hostContext: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.hostContext,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865
          },
          lifecycle: "active"
        }
      }
    }]
  };
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879.getAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.hostAnchorId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878.hostAnchorId, ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882.hostContext, "subUnitId"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883.element) : undefined;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 ? {
    resolved: false,
    entry: b.BoardsFloatingObject
  } : {
    resolved: true,
    entry: b.BoardsFloatingObject,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883.subUnitId,
    bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884
  };
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895) {
  ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.bounds);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461893.getAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897 = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId, ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896.hostContext, "subUnitId"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461894, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461895);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897) throw Error("EMBED_BOARDS_FLOATING_ANCHOR_UNAVAILABLE");
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.element,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.element["transform"],
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.bounds
      }
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 ?? ti({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892,
        requestedAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId,
        hostContext: {
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.subUnitId
        }
      })),
      hostContext: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896.hostContext),
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.subUnitId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.bounds
      },
      lifecycle: "active"
    };
  return {
    redoMutations: [{
      id: UpdateBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId,
        element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB44
      }
    }, {
      id: v,
      params: {
        record: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45
      }
    }],
    undoMutations: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896 ? {
      id: v,
      params: {
        record: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461896
      }
    } : {
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId
      }
    }, {
      id: UpdateBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461892.hostAnchorId,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461897.element
      }
    }]
  };
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907 = Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.hostAnchorId, ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.hostContext, "subUnitId"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461906);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907) return ti({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904,
    requestedAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.hostAnchorId,
    hostContext: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461904.hostContext,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461907
    }
  });
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612;
    return isEmbedBoardsFloatingElement((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461916.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461913)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46612.element);
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461914;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461918 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461915.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461912, UniverInstanceType.UNIVER_BOARD);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461918 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461918.getSnapshot().pageOrder["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461917);
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461930.getElementById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461927)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46616.element;
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619 && isEmbedBoardsFloatingElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619)) return {
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461928,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46619
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461929.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461926, UniverInstanceType.UNIVER_BOARD);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620 of (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461932.getSnapshot().pageOrder) ?? []) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461931(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 && isEmbedBoardsFloatingElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668)) return {
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46620,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668
    };
  }
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940) {
  let {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.transform;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 == null) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48 = {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944
  };
  try {
    return ei(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB48;
  } catch {
    return;
  }
}
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950) {
  if (![var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.width, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.height].every(Number.isFinite) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.height <= 0) throw Error("EMBED_BOUNDS_INVALID");
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952) {
  return {
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.requestedAnchorId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.embedId + "-anchor",
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.embedId,
    hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostUnitId,
    hostType: UniverInstanceType.UNIVER_BOARD,
    entry: b.BoardsFloatingObject,
    kind: b.BoardsFloatingObject,
    hostContext: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostContext,
      left: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostContext, "left") ?? 80,
      top: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostContext, "top") ?? 80,
      width: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostContext, "width") ?? 560,
      height: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952.hostContext, "height") ?? 360
    },
    lifecycle: "active"
  };
}
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957;
  return createEmbedBoardsFloatingElement({
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.embedId,
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.hostAnchorId,
    childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461956.childUnitId,
    childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461957.childType,
    left: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.hostContext, "left"),
    top: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.hostContext, "top"),
    width: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.hostContext, "width"),
    height: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.hostContext, "height")
  });
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963) {
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461962.hostAnchorId
      }
    }],
    undoMutations: [{
      id: v,
      params: {
        record: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461963,
          lifecycle: "active"
        }
      }
    }]
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967) {
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967]) == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967] : undefined;
}
function ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971) {
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971]) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971] : undefined;
}
function ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974) throw Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974;
}
export { Wr as createBoardsFloatingObjectHostAdapterContribution };
