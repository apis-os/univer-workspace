import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ve } from "./slides-slide-theme-presets.js";
const Ue = 960,
  We = 540,
  Ge = Ve[0].colorScheme,
  Ke = Ve[0].fmtScheme,
  O = {
    'id': Ve[0].id,
    'name': "Office Theme",
    'colorScheme': Ge,
    'fontScheme': {
      'heading': "Calibri Light",
      'body': "Calibri"
    },
    'fmtScheme': Ke
  },
  k = "master-default",
  qe = {
    'id': k,
    'pageType': "master",
    'name': "Office Theme",
    'pageSize': {
      'width': 960,
      'height': 540
    },
    'elementOrder': [],
    'elements': {},
    'background': {
      'type': "solid",
      'color': '#ffffff'
    }
  };
export { Ue as DEFAULT_SLIDE_PAGE_WIDTH, We as DEFAULT_SLIDE_PAGE_HEIGHT, O as DEFAULT_SLIDE_THEME, k as DEFAULT_MASTER_PAGE_ID, qe as DEFAULT_MASTER_PAGE };
