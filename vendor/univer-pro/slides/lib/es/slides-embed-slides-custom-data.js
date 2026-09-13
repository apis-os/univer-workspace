import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318) {
  return {
    'version': 1,
    'embedId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318.embedId,
    'hostAnchorId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318.hostAnchorId,
    'childUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318.childUnitId,
    'childType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462318.childType
  };
}
export { Qr as createEmbedSlidesCustomData };
