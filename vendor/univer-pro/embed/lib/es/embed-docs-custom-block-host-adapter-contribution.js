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
import { lt } from "./internal-core-endo.js";
function oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979) {
  return {
    hostType: UniverInstanceType.UNIVER_DOC,
    entry: b.DocsCustomBlock,
    createAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621 => yi(ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979), "EMBED_DOCS_CUSTOM_BLOCK_ANCHOR_UNAVAILABLE"),
    removeAnchorPlan: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461978.getAnchor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.hostAnchorId)) ?? ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622);
      return li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979) || {
        redoMutations: [{
          id: y,
          params: {
            hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.hostUnitId,
            hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46622.hostAnchorId
          }
        }],
        undoMutations: [{
          id: v,
          params: {
            record: {
              ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46623,
              lifecycle: "active"
            }
          }
        }]
      };
    },
    readContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626 => si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461979)
  };
}
function si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.hostUnitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461984.customBlocks) ?? [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.hostAnchorId);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 < 0 ? {
    resolved: false,
    entry: b.DocsCustomBlock
  } : {
    resolved: true,
    entry: b.DocsCustomBlock,
    blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461982.hostAnchorId,
    startIndex: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23].startIndex,
    index: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23
  };
}
function ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993 = ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 = di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994 == null) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990 = mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.hostUnitId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461990.length) ?? 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostContext = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostContext,
    startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994,
    drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25
  }, {
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostAnchorId,
    redoMutations: [createDocsCustomBlockInsertMutation({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostUnitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostAnchorId,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994,
      drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.embedId,
      childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461991.childUnitId,
      childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461988.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461992.childType,
      componentKey: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostContext, "componentKey") ?? undefined,
      interactionMode: vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostContext)
    }), {
      id: v,
      params: {
        record: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993
      }
    }],
    undoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostAnchorId
      }
    }, createDocsCustomBlockRemoveMutation({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostUnitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461993.hostAnchorId,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461994,
      drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25
    })]
  };
}
function li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostAnchorId) ?? gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.hostContext, "startIndex"),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462004, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostAnchorId) ?? gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.hostContext, "drawingOrderIndex") ?? 0;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007 != null) return {
    redoMutations: [{
      id: y,
      params: {
        hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostUnitId,
        hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostAnchorId
      }
    }, createDocsCustomBlockRemoveMutation({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostUnitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostAnchorId,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007,
      drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27
    })],
    undoMutations: [createDocsCustomBlockInsertMutation({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostUnitId,
      blockId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.hostAnchorId,
      startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007,
      drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27,
      embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.embedId,
      childUnitId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462005.childUnitId,
      childType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462002.descriptor) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462006.childType,
      componentKey: fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.hostContext, "componentKey") ?? undefined,
      interactionMode: vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.hostContext)
    }), {
      id: v,
      params: {
        record: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003,
          lifecycle: "active",
          hostContext: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462003.hostContext,
            startIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462007,
            drawingOrderIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27
          }
        }
      }
    }]
  };
}
function ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014) {
  return {
    hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.requestedAnchorId ?? "docs-custom-block:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.embedId,
    embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.embedId,
    hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.hostUnitId,
    hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.hostType,
    entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.entry,
    kind: "docs-custom-block",
    hostContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014.hostContext,
    lifecycle: "active"
  };
}
function di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462017, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.hostUnitId);
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.dataStream)) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.dataStream["length"] - 2);
  return lt({
    hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.hostUnitId,
    entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.entry,
    hostContext: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.hostContext,
    maxStartIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29
  }), gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.hostContext, "startIndex") ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29;
}
function fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462023)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025.customBlocks) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628.blockId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462024)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462025.startIndex;
}
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031, UniverInstanceType.UNIVER_DOC)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032.getBody();
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462036.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462037, UniverInstanceType.UNIVER_DOC)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.getSnapshot) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038).drawingsOrder;
}
function hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047 = mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462047.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462046);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 == null || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 < 0 ? undefined : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31;
}
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053) {
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053]) == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462052[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462053] : undefined;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057) {
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057]) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057] : undefined;
}
function vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060, "interactionMode");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 === "inline" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 === "block" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 : undefined;
}
function yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064) throw Error(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462065);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064;
}
export { oi as createDocsCustomBlockHostAdapterContribution };
