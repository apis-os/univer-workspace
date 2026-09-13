import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const Jr = {
  'title': "slides.slide.placeholder.text.title",
  'centerTitle': "slides.slide.placeholder.text.title",
  'subtitle': "slides.slide.placeholder.text.subtitle",
  'body': 'slides.slide.placeholder.text.body',
  'text': "slides.slide.placeholder.text.text",
  'header': "slides.slide.placeholder.text.header",
  'footer': 'slides.slide.placeholder.text.footer',
  'date': "slides.slide.placeholder.text.date",
  'slideNumber': "slides.slide.placeholder.text.slideNumber"
};
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316) {
  return Jr[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316];
}
export { Yr as resolveDefaultPlaceholderTextKey };
