import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const Yn = [UnitAction.Edit, UnitAction.Copy, UnitAction.Print, UnitAction.Export, UnitAction.Comment],
  Xn = new Set([UnitObject.Slide, UnitObject.SlidePage, UnitObject.SlideElement, UnitObject.SlideMaster]),
  Zn = "page/",
  Qn = 'element/',
  var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 = 'master-view';
export { Yn as SLIDE_UNIT_PERMISSION_ACTIONS, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 as SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID };
export { Zn, Qn, Xn };
