import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
const mp = "urn:microsoft.com/office/officeart/2005/8/quickstyle",
  hp = [{
    'id': mp + "/simple1",
    'key': "simple1",
    'section': "bestMatch",
    'preview': "flat"
  }, {
    'id': mp + "/simple2",
    'key': "simple2",
    'section': "bestMatch",
    'preview': 'outline'
  }, {
    'id': mp + '/simple3',
    'key': "simple3",
    'section': 'bestMatch',
    'preview': "subtle"
  }, {
    'id': mp + "/simple4",
    'key': "simple4",
    'section': "bestMatch",
    'preview': "moderate"
  }, {
    'id': mp + '/simple5',
    'key': "simple5",
    'section': "bestMatch",
    'preview': "intense"
  }, {
    'id': mp + "/3d1",
    'key': '3d1',
    'section': 'threeDimensional',
    'preview': 'bevel'
  }, {
    'id': mp + '/3d2',
    'key': '3d2',
    'section': "threeDimensional",
    'preview': 'inset'
  }, {
    'id': mp + "/3d3",
    'key': '3d3',
    'section': "threeDimensional",
    'preview': "cartoon"
  }, {
    'id': mp + "/3d4",
    'key': "3d4",
    'section': "threeDimensional",
    'preview': "powder"
  }, {
    'id': mp + '/3d5',
    'key': "3d5",
    'section': "threeDimensional",
    'preview': "brick"
  }, {
    'id': mp + "/3d6",
    'key': "3d6",
    'section': "threeDimensional",
    'preview': "flatScene"
  }, {
    'id': mp + "/3d7",
    'key': '3d7',
    'section': "threeDimensional",
    'preview': "metal"
  }, {
    'id': "urn:microsoft.com/office/officeart/2009/2/quickstyle/3d8",
    'key': "3d8",
    'section': "threeDimensional",
    'preview': 'sunset'
  }, {
    'id': mp + "/3d9",
    'key': '3d9',
    'section': "threeDimensional",
    'preview': "birdEye"
  }],
  gp = {
    'camera': {
      'preset': 'orthographicFront'
    },
    'lightRig': {
      'preset': 'threePt',
      'direction': 't'
    }
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB241 = {
    'simple1': {
      'stroke': {
        'lineStrokeType': 2,
        'color': "#FFFFFF",
        'width': 1
      }
    },
    'simple2': {
      'stroke': {
        'lineStrokeType': 2,
        'color': "#FFFFFF",
        'width': 2
      },
      'shadow': {
        'color': "#000000",
        'opacity': 0.18,
        'blurRadius': 3,
        'direction': 90,
        'distance': 1
      }
    },
    'simple3': {
      'scene3d': {
        ...gp,
        'lightRig': {
          'preset': 'flat',
          'direction': 't'
        }
      },
      'shape3d': {
        'material': "dkEdge",
        'topBevel': {
          'width': 0.65,
          'height': 3
        }
      },
      'stroke': {
        'lineStrokeType': 1
      },
      'shadow': {
        'color': "#000000",
        'opacity': 0.2,
        'blurRadius': 4,
        'direction': 90,
        'distance': 2
      }
    },
    'simple4': {
      'stroke': {
        'lineStrokeType': 1
      },
      'shadow': {
        'color': "#000000",
        'opacity': 0.26,
        'blurRadius': 6,
        'direction': 90,
        'distance': 3
      }
    },
    'simple5': {
      'stroke': {
        'lineStrokeType': 1
      },
      'shadow': {
        'color': '#000000',
        'opacity': 0.36,
        'blurRadius': 8,
        'direction': 90,
        'distance': 4
      }
    },
    '3d1': {
      'scene3d': {
        ...gp,
        'lightRig': {
          'preset': 'flat',
          'direction': 't'
        }
      },
      'shape3d': {
        'material': "plastic",
        'topBevel': {
          'width': 9.52,
          'height': 7
        },
        'bottomBevel': {
          'width': 7,
          'height': 2.5,
          'preset': 'angle'
        }
      }
    },
    '3d2': {
      'scene3d': {
        ...gp,
        'lightRig': {
          'preset': "threePt",
          'direction': 't',
          'rotation': {
            'revolution': 125
          }
        }
      },
      'shape3d': {
        'material': 'plastic',
        'topBevel': {
          'width': 10,
          'height': 2,
          'preset': "relaxedInset"
        }
      }
    },
    '3d3': {
      'scene3d': {
        ...gp,
        'lightRig': {
          'preset': "contrasting",
          'direction': 't',
          'rotation': {
            'revolution': 20
          }
        }
      },
      'shape3d': {
        'contourWidth': 1.5,
        'material': "metal",
        'topBevel': {
          'width': 7,
          'height': 16
        },
        'bottomBevel': {
          'width': 13,
          'height': 20
        },
        'contourColor': "#FFFFFF"
      }
    },
    '3d4': {
      'scene3d': {
        ...gp,
        'lightRig': {
          'preset': "chilly",
          'direction': 't'
        }
      },
      'shape3d': {
        'material': "translucentPowder",
        'topBevel': {
          'width': 10,
          'height': 2,
          'preset': "softRound"
        }
      }
    },
    '3d5': {
      'scene3d': {
        'camera': {
          'preset': "isometricOffAxis2Left",
          'zoom': 0.95
        },
        'lightRig': {
          'preset': "flat",
          'direction': 't'
        }
      },
      'shape3d': {
        'extrusionHeight': 30,
        'contourWidth': 3,
        'material': "matte",
        'contourColor': "#FFFFFF"
      }
    },
    '3d6': {
      'scene3d': {
        'camera': {
          'preset': "perspectiveRelaxedModerately",
          'zoom': 0.92
        },
        'lightRig': {
          'preset': 'balanced',
          'direction': 't',
          'rotation': {
            'revolution': 200
          }
        }
      },
      'shape3d': {
        'material': "plastic",
        'topBevel': {
          'width': 4,
          'height': 4
        },
        'bottomBevel': {
          'width': 4,
          'height': 4
        }
      }
    },
    '3d7': {
      'scene3d': {
        'camera': {
          'preset': 'perspectiveLeft',
          'zoom': 0.91
        },
        'lightRig': {
          'preset': "threePt",
          'direction': 't',
          'rotation': {
            'revolution': 344
          }
        }
      },
      'shape3d': {
        'extrusionHeight': 4,
        'material': "plastic",
        'topBevel': {
          'width': 8,
          'height': 6.35,
          'preset': 'relaxedInset'
        },
        'bottomBevel': {
          'width': 6.35,
          'height': 6.35,
          'preset': "relaxedInset"
        }
      }
    },
    '3d8': {
      'scene3d': {
        'camera': {
          'preset': "perspectiveHeroicExtremeRightFacing",
          'zoom': 0.82,
          'rotation': {
            'latitude': 355,
            'longitude': 340,
            'revolution': 3
          }
        },
        'lightRig': {
          'preset': "morning",
          'direction': 't',
          'rotation': {
            'revolution': 340
          }
        }
      },
      'shape3d': {
        'extrusionHeight': 15,
        'material': "matte",
        'topBevel': {
          'width': 9.5,
          'height': 3,
          'preset': 'relaxedInset'
        },
        'bottomBevel': {
          'width': 9.5,
          'height': 4.5,
          'preset': "relaxedInset"
        },
        'contourColor': "#FFFFFF"
      }
    },
    '3d9': {
      'scene3d': {
        'camera': {
          'preset': 'perspectiveRelaxed',
          'projection': {
            'rotation': {
              'latitude': 12,
              'longitude': 18,
              'revolution': -11
            },
            'verticalOffsetRatio': 0.05,
            'verticalScale': 0.86
          },
          'rotation': {
            'latitude': 19149996 / 60000,
            'longitude': 20104178 / 60000,
            'revolution': 1577324 / 60000
          }
        },
        'lightRig': {
          'preset': "soft",
          'direction': 't'
        },
        'backdrop': {
          'anchor': {
            'x': 0,
            'y': 0,
            'z': -210000
          },
          'normal': {
            'x': 0,
            'y': 0,
            'z': 914400
          },
          'upVector': {
            'x': 0,
            'y': 914400,
            'z': 0
          }
        }
      },
      'shape3d': {
        'extrusionHeight': 12,
        'material': "matte",
        'topBevel': {
          'width': 13,
          'preset': "coolSlant"
        }
      }
    }
  };
export { hp as SMART_ART_QUICK_STYLE_CATALOG };
export { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB241 };
