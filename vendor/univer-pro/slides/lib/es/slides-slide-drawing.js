import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { P } from "./slides-islide-drawing.js";
import { F, I, Mt, Nt, Pt } from "./internal-core-endo.js";
const wr = {
    'id': "slide.mutation.set-drawing-apply",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462092.get(IUniverInstanceService),
        {
          op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098,
          type: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099,
          objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462093,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095.getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100 ?? [],
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map();
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099 === 1 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.getDrawingByParam({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.drawingId
        });
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693);
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462099) {
        case 0:
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.getDrawingByParam({
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098,
              'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.drawingId
            });
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 && Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.addNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100);
          break;
        case 1:
          var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => {
            Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.removeNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100);
          break;
        case 2:
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.getDrawingByParam({
              'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462097,
              'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462098,
              'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102.drawingId
            });
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 && Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103.transform);
          }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462094.updateNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462100);
          break;
      }
      return true;
    }
  },
  G = {
    'id': "slide.mutation.update-slide-element",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120,
          isRealtimePreview: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121,
          formulaLastValueGuard: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.getDrawingByParam({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.element,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.type === "connector" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.connectorData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114.formulaBinding) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114.formula : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.type === "shape" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462126.shapeData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115.formulaBinding) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462115.formula : undefined;
      if (!canApplyShapeFormulaLastValue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112, {
        'hostType': UniverInstanceType.UNIVER_SLIDE,
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117,
        'shapeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462118
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122)) return true;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125,
          'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 = Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121 || (Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.sourcePageType === 'slide' && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462128 && F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117))) return true;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.sourcePageType === "master" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462125.sourcePageType === "layout") return I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117), true;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.getBatchUpdateOp([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126]);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.redo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462124.updateNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.objects ?? []), true;
    }
  };
function Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149) {
  let {
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462150,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462148,
    {
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462152,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462149;
  return shallowEqual(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462153);
}
const Er = {
  'id': "slide.command.update-drawing",
  'type': CommandType.COMMAND,
  'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161.patches['length'] === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.get(IUndoRedoService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.get(P),
      {
        patches: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161,
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910 = new Map(),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165) {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
          drawingId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164.getDrawingByParam({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) continue;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.element,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110);
      if (kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112) && jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113)) continue;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111,
          'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113
        },
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 + '\x00' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB) ?? {
          'drawings': [],
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
        };
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.drawings["push"](var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88.push({
        'id': G.id,
        'params': {
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
          'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89.push({
        'id': G.id,
        'params': {
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
          'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.element,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
          'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.transform,
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
        }
      });
    }
    let {
      redoMutations: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128,
      undoMutations: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162.hasCommand(wr.id) ? Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462164, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910) : {
      'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A88,
      'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A89
    };
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.length && sequenceExecute(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163.pushUndoRedo({
      'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462165[0].unitId,
      'undoMutations': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB129,
      'redoMutations': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128
    }), true) : false;
  }
};
function Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A92 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.values()) {
    let {
      objects: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
      redo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115,
      undo: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172.getBatchUpdateOp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.drawings);
    !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.length === 0 || (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A92.push({
      'id': wr.id,
      'params': {
        'objects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
        'op': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.subUnitId,
        'type': 2,
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.unitId
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93.push({
      'id': wr.id,
      'params': {
        'objects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114,
        'op': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.subUnitId,
        'type': 2,
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.unitId
      }
    }));
  }
  return {
    'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A92,
    'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93
  };
}
function Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177.transform) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177.transform,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.transform ?? {
        'left': 0,
        'top': 0,
        'width': 0,
        'height': 0,
        'angle': 0,
        'flipX': false,
        'flipY': false
      };
    return {
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.left ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23.left ?? 0,
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.top ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23.top ?? 0,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.width ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23.width ?? 0,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.height ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23.height ?? 0,
      'angle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.rotation ?? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB23.angle ?? 0,
      'flipX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.flipX,
      'flipY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455.flipY
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.transform;
}
function kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183) {
  return JSON.stringify(Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182)) === JSON.stringify(Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183));
}
function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132 = JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132.transform;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.left ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.top ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.width = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.width ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.height = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.height ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.rotation = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.rotation ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.flipX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.flipX ?? false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.flipY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.flipY ?? false), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132;
}
function jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462191) {
  return JSON.stringify(Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462190)) === JSON.stringify(Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462191));
}
function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194) {
  return {
    'left': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.left) ?? 0,
    'top': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.top) ?? 0,
    'width': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.width) ?? 0,
    'height': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.height) ?? 0,
    'angle': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.angle) ?? 0,
    'flipX': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.flipX) ?? false,
    'flipY': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462194.flipY) ?? false
  };
}
export { wr as SetSlideDrawingApplyMutation, G as UpdateSlideElementMutation, Er as UpdateSlideDrawingCommand };
