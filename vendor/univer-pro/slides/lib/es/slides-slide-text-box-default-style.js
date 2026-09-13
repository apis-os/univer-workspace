import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const Hr = {
    'isTextBox': true,
    'fill': {
      'fillType': ShapeFillEnum.SolidFill,
      'color': "#FFFFFF"
    },
    'stroke': {
      'lineStrokeType': ShapeLineTypeEnum.SolidLine,
      'width': 1,
      'color': '#bcbcbc'
    },
    'shapeText': {
      'isHorizontal': true,
      'text': '',
      'autoFitType': ShapeTextAutoFitType.SpAutoFit,
      'textWrap': ShapeTextWrapType.None,
      'dataModel': {
        'doc': {
          'id': "slide-text-box-default-document",
          'body': {
            'dataStream': '\x0d\x0a',
            'textRuns': [{
              'st': 0,
              'ed': 1,
              'ts': {
                'fs': 16,
                'cl': {
                  'rgb': "#111827"
                }
              }
            }],
            'paragraphs': [{
              'startIndex': 0,
              'paragraphStyle': {
                'horizontalAlign': HorizontalAlign.LEFT
              }
            }]
          },
          'documentStyle': {
            'marginBottom': 0,
            'marginLeft': 0,
            'marginRight': 0,
            'marginTop': 0,
            'textStyle': {
              'fs': 16,
              'cl': {
                'rgb': "#111827"
              }
            },
            'renderConfig': {
              'horizontalAlign': HorizontalAlign.LEFT,
              'verticalAlign': VerticalAlign.TOP
            }
          }
        },
        'ha': HorizontalAlign.LEFT,
        'va': VerticalAlign.TOP
      }
    }
  },
  Ur = {
    'picture': ["image"],
    'chart': ["chart"]
  },
  Wr = {
    'picture': "image",
    'chart': "chart"
  },
  Gr = {
    'image': 'AddImageIcon',
    'chart': "ChartIcon",
    'table': "TableIcon",
    'diagram': 'RelationshipIcon',
    'media': 'RecordIcon'
  };
export { Hr as SLIDE_TEXT_BOX_DEFAULT_STYLE, Gr as SLIDE_PLACEHOLDER_ICON_COMPONENT_NAME_BY_KEY };
export { Ur, Wr };
