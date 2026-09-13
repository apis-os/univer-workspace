import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k } from "./slides-default-slide-page-width.js";
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912,
    'pageType': 'layout',
    'layoutType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913,
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914,
    'masterPageId': k,
    'pageSize': {
      'width': 960,
      'height': 540
    },
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915
  };
}
const j = {
    'title': 'layout-title',
    'titleAndBody': "layout-title-body",
    'sectionHeader': "layout-section-header",
    'twoColumns': 'layout-two-columns',
    'comparison': 'layout-comparison',
    'blank': 'layout-blank',
    'titleOnly': "layout-title-only",
    'pictureWithCaption': "layout-picture-caption",
    'custom': "layout-custom"
  },
  Je = {
    'title': A(j.title, "title", 'Title\x20Slide', {
      'elementOrder': ['ph-center-title', "ph-subtitle"],
      'elements': {
        'ph-center-title': {
          'id': "ph-center-title",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 540 * 0.28,
            'width': 864,
            'height': 100
          },
          'placeholder': {
            'id': "ph-center-title",
            'type': "centerTitle"
          }
        },
        'ph-subtitle': {
          'id': "ph-subtitle",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 267.20000000000005,
            'width': 864,
            'height': 56
          },
          'placeholder': {
            'id': 'ph-subtitle',
            'type': "subtitle"
          }
        }
      }
    }),
    'titleAndBody': A(j.titleAndBody, "titleAndBody", "Title and Content", {
      'elementOrder': ['ph-title', "ph-body"],
      'elements': {
        'ph-title': {
          'id': "ph-title",
          'type': 'placeholder',
          'transform': {
            'left': 48,
            'top': 32,
            'width': 864,
            'height': 76
          },
          'placeholder': {
            'id': "ph-title",
            'type': 'title'
          }
        },
        'ph-body': {
          'id': "ph-body",
          'type': 'placeholder',
          'transform': {
            'left': 48,
            'top': 128,
            'width': 864,
            'height': 380
          },
          'placeholder': {
            'id': "ph-body",
            'type': "body"
          }
        }
      }
    }),
    'sectionHeader': A(j.sectionHeader, "sectionHeader", "Section Header", {
      'elementOrder': ["ph-center-title", "ph-text"],
      'elements': {
        'ph-center-title': {
          'id': "ph-center-title",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 540 * 0.25,
            'width': 864,
            'height': 100
          },
          'placeholder': {
            'id': "ph-center-title",
            'type': "centerTitle"
          }
        },
        'ph-text': {
          'id': "ph-text",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 251,
            'width': 864,
            'height': 56
          },
          'placeholder': {
            'id': "ph-text",
            'type': "text"
          }
        }
      }
    }),
    'twoColumns': A(j.twoColumns, 'twoColumns', "Two Content", {
      'elementOrder': ['ph-title', "ph-body-left", "ph-body-right"],
      'elements': {
        'ph-title': {
          'id': 'ph-title',
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 32,
            'width': 864,
            'height': 76
          },
          'placeholder': {
            'id': "ph-title",
            'type': "title"
          }
        },
        'ph-body-left': {
          'id': "ph-body-left",
          'type': 'placeholder',
          'transform': {
            'left': 48,
            'top': 128,
            'width': 422,
            'height': 380
          },
          'placeholder': {
            'id': "ph-body-left",
            'type': 'body',
            'index': 1
          }
        },
        'ph-body-right': {
          'id': "ph-body-right",
          'type': "placeholder",
          'transform': {
            'left': 490,
            'top': 128,
            'width': 422,
            'height': 380
          },
          'placeholder': {
            'id': "ph-body-right",
            'type': "body",
            'index': 2
          }
        }
      }
    }),
    'comparison': A(j.comparison, "comparison", 'Comparison', {
      'elementOrder': ["ph-title", 'ph-text-left', "ph-text-right", "ph-body-left", "ph-body-right"],
      'elements': {
        'ph-title': {
          'id': "ph-title",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 32,
            'width': 864,
            'height': 76
          },
          'placeholder': {
            'id': "ph-title",
            'type': "title"
          }
        },
        'ph-text-left': {
          'id': "ph-text-left",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 128,
            'width': 422,
            'height': 40
          },
          'placeholder': {
            'id': "ph-text-left",
            'type': "text",
            'index': 1
          }
        },
        'ph-text-right': {
          'id': "ph-text-right",
          'type': "placeholder",
          'transform': {
            'left': 490,
            'top': 128,
            'width': 422,
            'height': 40
          },
          'placeholder': {
            'id': "ph-text-right",
            'type': 'text',
            'index': 2
          }
        },
        'ph-body-left': {
          'id': "ph-body-left",
          'type': 'placeholder',
          'transform': {
            'left': 48,
            'top': 176,
            'width': 422,
            'height': 332
          },
          'placeholder': {
            'id': "ph-body-left",
            'type': 'body',
            'index': 1
          }
        },
        'ph-body-right': {
          'id': "ph-body-right",
          'type': "placeholder",
          'transform': {
            'left': 490,
            'top': 176,
            'width': 422,
            'height': 332
          },
          'placeholder': {
            'id': "ph-body-right",
            'type': "body",
            'index': 2
          }
        }
      }
    }),
    'blank': A(j.blank, "blank", "Blank", {
      'elementOrder': [],
      'elements': {}
    }),
    'titleOnly': A(j.titleOnly, "titleOnly", "Title Only", {
      'elementOrder': ["ph-title"],
      'elements': {
        'ph-title': {
          'id': "ph-title",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 32,
            'width': 864,
            'height': 76
          },
          'placeholder': {
            'id': "ph-title",
            'type': "title"
          }
        }
      }
    }),
    'pictureWithCaption': A(j.pictureWithCaption, "pictureWithCaption", "Picture with Caption", {
      'elementOrder': ["ph-picture", "ph-caption"],
      'elements': {
        'ph-picture': {
          'id': "ph-picture",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 32,
            'width': 864,
            'height': 388
          },
          'placeholder': {
            'id': "ph-picture",
            'type': 'picture'
          }
        },
        'ph-caption': {
          'id': "ph-caption",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 436,
            'width': 864,
            'height': 56
          },
          'placeholder': {
            'id': "ph-caption",
            'type': "text"
          }
        }
      }
    })
  },
  Ye = ['title', 'titleAndBody', "sectionHeader", "twoColumns", 'comparison', 'blank', 'titleOnly', "pictureWithCaption"];
export { j as LAYOUT_PAGE_IDS, Ye as DEFAULT_LAYOUT_ORDER };
export { Je };
