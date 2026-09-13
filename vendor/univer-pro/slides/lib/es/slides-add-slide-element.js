import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { P } from "./slides-islide-drawing.js";
import { N } from "./slides-slide-element-to-drawing.js";
import { F, I, Mt, yt } from "./internal-core-endo.js";
import { B } from "./slides-slide-command-target.js";
import { z } from "./slides-remove-slide-element.js";
import { Ct } from "./slides-resolved-slide-drawing-map.js";
const L = {
    'id': "slide.mutation.add-slide-element",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203,
          sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 = "slide",
          insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204,
          nameBase: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461200.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207.pageManager['getSlide'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203, yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461201.element, Object.values((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461209.getData().elements) ?? {}), {
          'nameBase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461205
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206);
      if (Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461204), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 === 'slide' && F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203)) return true;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 === "master" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461206 === "layout") return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203), true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.getBatchAddOp([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461210]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211.redo);
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461211.objects) ?? [];
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46.length > 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461208.addNotification(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46), true) : false;
    }
  },
  Ft = "suppressedPlaceholderKeys";
const Ut = {
    'id': "slide.command.add-element",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294.get(P),
        {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296,
        {
          sourcePageType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305 = "slide",
          insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302,
          focus: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303,
          nameBase: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461296.presentation["pageManager"].getSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 = yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.element, Object.values((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306.getData().elements) ?? {}), {
          'nameBase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304
        }),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
          'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307,
          'nameBase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461304,
          'sourcePageType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305,
          'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461302
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.id,
          'elementType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.type
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.syncExecuteCommand(L.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461303 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299.focusDrawing([{
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461301,
        'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307.id
      }]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300,
        'undoMutations': [{
          'id': z.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB67
        }],
        'redoMutations': [{
          'id': L.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66
        }]
      }), true) : false;
    }
  },
  V = {
    'id': "slide.mutation.add-slide-page",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324,
          slide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325,
          insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326,
          setActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330) return false;
      let {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331,
        order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332
      } = Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.pageManager["createSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324] = {}), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325.id] = {
        'data': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331,
        'order': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332.length > 0) {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461332.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 => ({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325.id,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672
        }));
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.addNotification(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5);
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.pageManager["setActiveSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325.id), true;
    }
  },
  H = {
    'id': 'slide.mutation.remove-slide-page',
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348,
          nextActiveSlideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461345,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.get(IUniverInstanceService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461344.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461350.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347, UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.pageManager["deleteSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.drawingManagerData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461346[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.setDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348, {}), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351.setDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461348, [])), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352.pageManager["setActiveSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349), true) : false;
    }
  },
  Wt = {
    'id': "slide.command.add-page",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364,
          slide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365,
          insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366,
          setActive: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367 = true
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461363,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461368.pageManager["resolveSlidePageReferences"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461362.get(IUndoRedoService),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364,
          'slide': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369,
          'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366,
          'setActive': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461367
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.id
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370.syncExecuteCommand(V.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461364,
        'undoMutations': [{
          'id': H.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71
        }],
        'redoMutations': [{
          'id': V.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70
        }]
      }), true) : false;
    }
  };
export { L as AddSlideElementMutation, Ut as AddSlideElementCommand, V as AddSlidePageMutation, H as RemoveSlidePageMutation, Wt as AddSlidePageCommand };
export { Ft };
