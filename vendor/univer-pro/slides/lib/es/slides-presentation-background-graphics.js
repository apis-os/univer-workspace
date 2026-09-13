import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { U } from "./slides-presentation-background-graphic.js";
function Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.elementOrder['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.type === "image" && U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 => ({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.id,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.source,
    'imageSourceType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.imageSourceType,
    'fit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.custom && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.custom == "object" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.custom['fit'] == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.custom["fit"] : 'stretch',
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.transform,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.crop,
    'custom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378.custom
  }));
}
export { Sn as getPresentationBackgroundGraphics };
