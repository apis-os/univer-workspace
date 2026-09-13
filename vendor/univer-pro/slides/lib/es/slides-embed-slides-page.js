import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Zr } from "./slides-embed-slides-floating-custom-key.js";
import { Qr } from "./slides-embed-slides-custom-data.js";
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.hostAnchorId,
    'pageType': "slide",
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.name ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320.embedId,
    'showMasterSp': false,
    'elementOrder': [],
    'elements': {},
    'custom': {
      [Zr]: Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462320)
    }
  };
}
export { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1 as createEmbedSlidesPage };
