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
import { Ot, q } from "./internal-core-endo.js";
import { U } from "./embed-model.js";
import { b } from "./embed-host-anchor-mutation-id.js";
import { M } from "./embed-host-anchor-model.js";
const lr = {
    id: "embed.command.create",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.get(q).createEmbed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712) : false
  },
  ur = {
    id: "embed.command.copy",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713.get(q).copyEmbed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714) : false
  },
  dr = {
    id: "embed.command.remove",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715.get(q).removeEmbed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716) : false
  },
  fr = {
    id: "embed.command.set-display-target",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717.get(q).setDisplayTarget(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718) : false
  },
  pr = {
    id: "embed.command.set-bounds",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.get(q).setBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) : false
  },
  mr = {
    id: "embed.command.set-sheet-placement",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(U).getDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.hostUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.embedId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.lifecycle === "soft-delete d" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.entry !== b.SheetsFloatingObject) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724 = Ot({
          embedId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.embedId,
          hostUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.hostUnitId,
          hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.hostType,
          entry: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.entry,
          hostAnchorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.hostAnchorId,
          descriptor: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.placement, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(M), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(ISheetDrawingService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(SheetSkeletonService)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(ICommandService);
      return sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.redoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.hostUnitId,
        undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.undoMutations,
        redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.redoMutations
      }), true) : false;
    }
  };
export { lr as CreateEmbedCommand, dr as RemoveEmbedCommand, fr as SetEmbedDisplayTargetCommand, pr as SetEmbedBoundsCommand, mr as SetEmbedSheetPlacementCommand };
export { ur };
