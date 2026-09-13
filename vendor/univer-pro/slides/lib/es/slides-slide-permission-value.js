import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { rr } from "./internal-core-endo.js";
function ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461940.getPermissionPoint(rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461942, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461943).id)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461944.value) ?? true;
}
function ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955 = rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461953);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.getPermissionPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.id) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.addPermissionPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461950.updatePermissionPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461955.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461954);
}
export { ir as getSlidePermissionValue, ar as setSlidePermissionValue };
