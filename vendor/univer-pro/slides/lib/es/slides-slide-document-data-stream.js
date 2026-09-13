import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554.body,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555.dataStream;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556.replace(/\n/g, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 - 1] === '\x0d' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 : '\x0d'),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23.endsWith('\x0d\x0a') ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23.endsWith('\x0d') ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 + '\x0a' : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 + '\x0d\x0a';
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462556 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462554,
    'body': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462555,
      'dataStream': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24
    }
  };
}
export { Ji as normalizeSlideDocumentDataStream };
