import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { ir } from "./slides-slide-permission-value.js";
function sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968) {
  return ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, UnitAction.Edit) && Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461968).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437 => ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461966, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46437, UnitAction.Edit));
}
export { sr as canEditSlideTargets };
