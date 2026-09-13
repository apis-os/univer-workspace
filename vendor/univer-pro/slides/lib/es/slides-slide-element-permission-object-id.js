import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Qn } from "./slides-slide-unit-permission-actions.js";
function tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924) {
  return '' + Qn + encodeURIComponent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461922) + '/' + encodeURIComponent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461923) + '/' + encodeURIComponent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461924);
}
export { tr as getSlideElementPermissionObjectId };
