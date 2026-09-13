import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const Ki = "slide-text-document",
  qi = {
    'width': 1 / 0,
    'height': 1 / 0
  };
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562 = ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560).split('\x0a'),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562.join('\x0d') + '\x0d\x0a',
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27.length - 2),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.bullet,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563.listId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.id ?? Ki) + '-list',
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929958 = new Set(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = {
        'startIndex': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.length,
        'paragraphId': createParagraphId(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929958),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563 ? {
          'bullet': {
            'listId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB28,
            'listType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563.listType,
            'nestingLevel': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563.nestingLevel ?? 0
          }
        } : {}),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.horizontalAlign === undefined ? {} : {
          'paragraphStyle': {
            'horizontalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.horizontalAlign,
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle ? {
              'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle
            } : {})
          }
        })
      };
      return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.length + 1, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54;
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.horizontalAlign === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.verticalAlign === undefined ? undefined : {
      'horizontalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.horizontalAlign,
      'verticalAlign': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.verticalAlign
    };
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.id ?? Ki,
    'body': {
      'dataStream': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB27,
      'textRuns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle ? [{
        'st': 0,
        'ed': Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55),
        'ts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle
      }] : [],
      'paragraphs': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A110
    },
    'documentStyle': {
      'marginBottom': 0,
      'marginLeft': 0,
      'marginRight': 0,
      'marginTop': 0,
      'pageSize': {
        ...qi
      },
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle ? {
        'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561.textStyle
      } : {}),
      ...(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB150 ? {
        'renderConfig': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB150
      } : {})
    }
  };
}
function ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462596) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462596.replace(/\r\n/g, '\x0a').replace(/\r/g, '\x0a');
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11 as plainTextToSlideDocumentData };
