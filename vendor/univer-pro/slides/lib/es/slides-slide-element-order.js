import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { P } from "./slides-islide-drawing.js";
import { Ct } from "./slides-resolved-slide-drawing-map.js";
import { B } from "./slides-slide-command-target.js";
function fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941 = new Set(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 of [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662]) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) && (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366));
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72;
}
const pn = {
    'id': 'slide.mutation.set-element-order',
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669,
          drawingIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, UniverInstanceType.UNIVER_SLIDE),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 = fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.getData().elementOrder, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.setElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676 = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.setDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.data), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.setDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.order), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.orderNotification({
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669,
        'drawingIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.order
      }), true;
    }
  },
  mn = {
    'id': "slide.command.reorder-elements",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689.drawingIds["length"] === 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690) return false;
      let {
          slide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461690,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 = fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.getData().elementOrder, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689.drawingIds),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461688.get(IUndoRedoService),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.getData().elementOrder],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693,
          'drawingIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693,
          'drawingIds': [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74]
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461695.syncExecuteCommand(pn.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461696.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692,
        'undoMutations': [{
          'id': pn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB93
        }],
        'redoMutations': [{
          'id': pn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB92
        }]
      }), true) : false;
    }
  },
  hn = {
    'id': "slide.mutation.set-active-slide",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707.unitId, UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461708.pageManager["setActiveSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707.subUnitId), true) : false;
    }
  },
  gn = {
    'id': "slide.command.set-active-slide",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715) return false;
      let {
          presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716.pageManager['getActiveSlide']()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714.getId();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB97 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720.syncExecuteCommand(hn.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717,
        'undoMutations': [{
          'id': hn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB97
        }],
        'redoMutations': [{
          'id': hn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96
        }]
      }), true) : false;
    }
  };
export { pn as SetSlideElementOrderMutation, mn as ReorderSlideElementsCommand, gn as SetActiveSlideCommand };
export { hn };
