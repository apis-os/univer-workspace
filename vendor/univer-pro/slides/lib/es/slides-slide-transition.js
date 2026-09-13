import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438 => dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438)) : !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 != "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010 : Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010).sort().reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462010[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440] = dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439;
  }, {});
}
function fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012) {
  return JSON.stringify(dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462012));
}
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "push" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "wipe" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "cover" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "uncover" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "reveal" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462014 === "split";
}
function mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.type === 'none') return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016,
    'duration': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462016.duration ?? 700
  };
  return pr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114.type) || delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114.direction, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114;
}
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462019);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.transitionRecords ?? {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021 = fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022 = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 => fr(mr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445])) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462021);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462022;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = "transition_" + generateRandomId(6);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462018.transitionRecords = {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116,
    [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13]: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462020
  }, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13;
}
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028.slideTransitionRefs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462030[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462029];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032) return mr((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462028.transitionRecords) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462031[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462032]);
}
function fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.transitionRecords;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039) return;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929944 = new Set(Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.slideTransitionRefs ?? {})),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) => (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929944.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462039[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46447]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46446), {});
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462038.transitionRecords = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040).length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462040 : undefined;
}
function vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.transitionRecords = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.transitionRecords && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.transitionRecords).length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.transitionRecords : undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462044.slideTransitionRefs = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.slideTransitionRefs && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.slideTransitionRefs).length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462045.slideTransitionRefs : undefined;
}
const yr = {
    'id': "slide.mutation.set-slide-transition",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462048.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049.unitId, UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050 ? (vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050.getSnapshot(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462049), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050.timingSystem['loadFromDocument'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462050.getSnapshot()), true) : false;
    }
  },
  br = {
    'id': "slide.command.set-slide-transition",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056,
          subUnitIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057,
          applyToAll: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058,
          transition: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462055,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061 = xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060.getSnapshot(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462059);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462054.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064 = Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462060.getSnapshot()),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462061
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB119 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056,
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462064
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462062.syncExecuteCommand(yr.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462063.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462056,
        'redoMutations': [{
          'id': yr.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118
        }],
        'undoMutations': [{
          'id': yr.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB119
        }]
      }), true) : false;
    }
  };
function xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.slideOrder['filter'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.slides[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46448]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462077) ?? [];
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84.length) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076,
      'transitionRecords': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.transitionRecords ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.transitionRecords
      } : undefined,
      'slideTransitionRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.slideTransitionRefs ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462076.slideTransitionRefs
      } : undefined
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080 = mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462079);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs = undefined, fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122), Sr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122);
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = {
      ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs ?? {})
    };
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 => delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 : undefined, fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122), Sr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122);
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081 = hr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462080);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081) return null;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462078) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46449), {}), fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122), Sr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB123 = {
    ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs ?? {})
  };
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB123[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462081;
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.slideTransitionRefs = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB123, fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122), Sr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122);
}
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088) {
  return {
    'transitionRecords': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.transitionRecords ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.transitionRecords
    } : undefined,
    'slideTransitionRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.slideTransitionRefs ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462088.slideTransitionRefs
    } : undefined
  };
}
export { gr as resolveSlideTransition, br as SetSlideTransitionCommand };
export { yr };
