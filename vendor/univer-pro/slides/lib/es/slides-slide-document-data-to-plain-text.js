import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462568) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462569;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462569 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462568.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462569.dataStream) ?? '';
  return (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31.endsWith('\x0d\x0a') ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31.slice(0, -2) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31).replace(/\r/g, '\x0a');
}
export { Yi as slideDocumentDataToPlainText };
