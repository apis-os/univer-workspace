import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ur, Wr } from "./slides-slide-text-box-default-style.js";
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306) {
  return (Ur[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462306] ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471 => ({
    'key': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471,
    'labelKey': "slides.placeholder.icon." + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471
  }));
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310 = Wr[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.type];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.icons) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462309.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.icons : Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462308.type)).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.enabled !== false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.key === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462310);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311] : [];
}
export { qr as resolvePlaceholderActionIcons };
