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
import { C, Z, oa, sa, ta } from "./internal-core-endo.js";
function Ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173) {
  return {
    hostType: UniverInstanceType.UNIVER_SLIDE,
    entry: b.SlidesPageListBlock,
    activateAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649;
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649 = sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.hostUnitId)) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.pageManager["setActiveSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46648.hostAnchorId);
    },
    createAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 => Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173),
    restoreAnchor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 => oa(Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173), "EMBED_SLIDES_PAGE_LIST_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 => Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172.getAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654.hostAnchorId)) ?? ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654)),
    readContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 => zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173)
  };
}
function zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178 = sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.hostUnitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.getSnapshot(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179.slides[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.hostAnchorId],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179.slideOrder["indexOf"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.hostAnchorId)) ?? -1;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 < 0 ? {
    resolved: false,
    entry: b.SlidesPageListBlock
  } : {
    resolved: true,
    entry: b.SlidesPageListBlock,
    pageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.hostAnchorId,
    index: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180.name ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.hostAnchorId
  };
}
function Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278 = sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.hostUnitId);
  C({
    hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.hostUnitId,
    entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.entry,
    hostContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.hostContext,
    maxIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462278.getSnapshot().slideOrder["length"]
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279 = ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280 = ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostContext, "pageName") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.embedId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281 = createEmbedSlidesPage({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.embedId,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostAnchorId,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280,
      childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462276.childUnitId,
      childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462274.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.childType
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostContext = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostContext,
    pageName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462280
  }, {
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostAnchorId,
    redoMutations: [{
      id: AddSlidePageMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostUnitId,
        slide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281,
        insertIndex: Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostContext, "pageIndex")
      }
    }, {
      id: v,
      params: {
        record: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostAnchorId
      }
    }, {
      id: RemoveSlidePageMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279.hostAnchorId
      }
    }]
  };
}
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292 = sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.hostUnitId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293 = ea({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290,
      requestedAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.hostAnchorId
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294 = ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.hostContext, "pageName") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.embedId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.hostContext, "pageIndex");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.hostAnchorId)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462292.pageManager["createSlide"](createEmbedSlidesPage({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.embedId,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.hostAnchorId,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294,
      childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462296.childUnitId,
      childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462290.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462297.childType
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462295);
  }
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293,
    hostContext: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462293.hostContext,
      pageName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462294
    }
  };
}
function Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 = ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.hostContext, "pageName") ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.embedId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 = createEmbedSlidesPage({
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.embedId,
      hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.hostAnchorId,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310,
      childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.childUnitId,
      childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.childType
    });
  return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.hostAnchorId
      }
    }, {
      id: RemoveSlidePageMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.hostUnitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.hostAnchorId
      }
    }],
    undoMutations: [{
      id: AddSlidePageMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306.hostUnitId,
        slide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311,
        insertIndex: Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.hostContext, "pageIndex")
      }
    }, {
      id: v,
      params: {
        record: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307,
          lifecycle: "active",
          hostContext: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462307.hostContext,
            pageName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310
          }
        }
      }
    }]
  };
}
function ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344) {
  return ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462344, b.SlidesPageListBlock, "slides-page-list");
}
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363) {
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363]) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363] : undefined;
}
export { Ri as createSlidesPageListBlockHostAdapterContribution };
