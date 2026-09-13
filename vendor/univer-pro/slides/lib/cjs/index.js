Object.defineProperty(exports, Symbol.toStringTag, {
  'value': "Module"
});
let e = require('@univerjs/core'),
  t = require('@univerjs/drawing'),
  n = require('@univerjs-pro/engine-shape'),
  r = require('@univerjs/engine-render'),
  i = require('@univerjs/protocol'),
  a = require('rxjs'),
  o = require('@univerjs-pro/license'),
  s = function (var_core_value_sigF455) {
    return var_core_value_sigF455.Title = "title", var_core_value_sigF455.CenterTitle = "centerTitle", var_core_value_sigF455.Subtitle = "subtitle", var_core_value_sigF455.Body = "body", var_core_value_sigF455.Text = "text", var_core_value_sigF455.Object = "object", var_core_value_sigF455.Picture = "picture", var_core_value_sigF455.Chart = "chart", var_core_value_sigF455.Table = "table", var_core_value_sigF455.Diagram = "diagram", var_core_value_sigF455.Media = "media", var_core_value_sigF455.SlideNumber = "slideNumber", var_core_value_sigF455.Date = 'date', var_core_value_sigF455.Footer = 'footer', var_core_value_sigF455.Header = "header", var_core_value_sigF455;
  }({}),
  c = function (var_core_value_sig6E78) {
    return var_core_value_sig6E78.Placeholder = 'placeholder', var_core_value_sig6E78.Text = "text", var_core_value_sig6E78.Shape = "shape", var_core_value_sig6E78.Image = "image", var_core_value_sig6E78.Chart = "chart", var_core_value_sig6E78.Table = 'table', var_core_value_sig6E78.Diagram = 'diagram', var_core_value_sig6E78.Media = "media", var_core_value_sig6E78.Group = 'group', var_core_value_sig6E78.Connector = "connector", var_core_value_sig6E78;
  }({}),
  l = function (var_core_value_sigB3EE) {
    return var_core_value_sigB3EE.None = 'none', var_core_value_sigB3EE.Solid = "solid", var_core_value_sigB3EE.Gradient = "gradient", var_core_value_sigB3EE.Image = 'image', var_core_value_sigB3EE.Pattern = 'pattern', var_core_value_sigB3EE;
  }({}),
  u = function (var_core_value_sigC50A) {
    return var_core_value_sigC50A.Slide = 'slide', var_core_value_sigC50A.Master = "master", var_core_value_sigC50A.Layout = "layout", var_core_value_sigC50A.HandoutMaster = "handoutMaster", var_core_value_sigC50A.NotesMaster = "notesMaster", var_core_value_sigC50A;
  }({}),
  d = function (var_core_value_sig11D0) {
    return var_core_value_sig11D0.Blank = "blank", var_core_value_sig11D0.Title = "title", var_core_value_sig11D0.TitleAndBody = 'titleAndBody', var_core_value_sig11D0.TitleOnly = "titleOnly", var_core_value_sig11D0.SectionHeader = 'sectionHeader', var_core_value_sig11D0.TwoColumns = "twoColumns", var_core_value_sig11D0.Comparison = "comparison", var_core_value_sig11D0.PictureWithCaption = "pictureWithCaption", var_core_value_sig11D0.Custom = 'custom', var_core_value_sig11D0;
  }({}),
  f = function (var_core_value_sigB8ED) {
    return var_core_value_sigB8ED.Standard4By3 = "standard4By3", var_core_value_sigB8ED.WideScreen16By9 = 'wideScreen16By9', var_core_value_sigB8ED.WideScreen16By10 = "wideScreen16By10", var_core_value_sigB8ED.Custom = 'custom', var_core_value_sigB8ED;
  }({}),
  p = function (var_core_value_sig8EAE) {
    return var_core_value_sig8EAE.None = "none", var_core_value_sig8EAE.Fade = "fade", var_core_value_sig8EAE.Push = "push", var_core_value_sig8EAE.Wipe = 'wipe', var_core_value_sig8EAE.Cut = "cut", var_core_value_sig8EAE.Cover = "cover", var_core_value_sig8EAE.Uncover = "uncover", var_core_value_sig8EAE.Reveal = 'reveal', var_core_value_sig8EAE.Split = 'split', var_core_value_sig8EAE.Zoom = 'zoom', var_core_value_sig8EAE;
  }({}),
  m = function (var_core_value_sig1CDD) {
    return var_core_value_sig1CDD.Left = "left", var_core_value_sig1CDD.Right = 'right', var_core_value_sig1CDD.Up = 'up', var_core_value_sig1CDD.Down = 'down', var_core_value_sig1CDD;
  }({}),
  h = function (var_core_value_sig0DB1) {
    return var_core_value_sig0DB1.Slow = 'slow', var_core_value_sig0DB1.Medium = "medium", var_core_value_sig0DB1.Fast = "fast", var_core_value_sig0DB1;
  }({}),
  g = function (var_core_value_sig68A2) {
    return var_core_value_sig68A2.EDIT = 'edit', var_core_value_sig68A2.THUMBNAIL = 'thumbnail', var_core_value_sig68A2.NOTES = 'notes', var_core_value_sig68A2.PRESENTATION = "presentation", var_core_value_sig68A2.PRESENTER = "presenter", var_core_value_sig68A2.MASTER = 'master', var_core_value_sig68A2.HANDOUT = "handout", var_core_value_sig68A2.READING = 'reading', var_core_value_sig68A2;
  }({});
function _(var_core_value_sigCC17, var_core_value_sig32AE, var_core_value_sigC753, var_core_value_sigFFD1 = {}) {
  let var_core_value_sig81AE = var_core_value_sigC753[var_core_value_sigFFD1.subtleFill ?? 'acc1'],
    var_core_value_sigF79F = var_core_value_sigC753[var_core_value_sigFFD1.moderateFill ?? "acc1"],
    var_core_value_sig0E54 = var_core_value_sigC753[var_core_value_sigFFD1.gradientFrom ?? "acc5"],
    var_core_value_sig3B17 = var_core_value_sigC753[var_core_value_sigFFD1.gradientTo ?? "acc1"],
    var_core_value_sig6C4A = var_core_value_sigC753[var_core_value_sigFFD1.subtleLine ?? "acc1"],
    var_core_value_sig73D9 = var_core_value_sigC753[var_core_value_sigFFD1.moderateLine ?? "dk2"],
    var_core_value_sigEAF8 = var_core_value_sigC753[var_core_value_sigFFD1.intenseLine ?? "dk1"];
  return {
    'id': var_core_value_sigCC17,
    'name': var_core_value_sig32AE,
    'colorScheme': var_core_value_sigC753,
    'fontScheme': {
      'heading': "Calibri Light",
      'body': "Calibri"
    },
    'fmtScheme': {
      'name': var_core_value_sig32AE,
      'fillStyleLst': [{
        'fillType': n.ShapeFillEnum["SolidFill"],
        'color': var_core_value_sig81AE,
        'opacity': 0.2
      }, {
        'fillType': n.ShapeFillEnum["SolidFill"],
        'color': var_core_value_sigF79F,
        'opacity': 1
      }, {
        'fillType': n.ShapeFillEnum['GradientFill'],
        'gradientAngle': 90,
        'gradientStops': [{
          'position': 0,
          'color': var_core_value_sig0E54
        }, {
          'position': 1,
          'color': var_core_value_sig3B17
        }]
      }],
      'lnStyleLst': [{
        'lineStrokeType': n.ShapeLineTypeEnum["SolidLine"],
        'color': var_core_value_sig6C4A,
        'width': 1,
        'opacity': 1
      }, {
        'lineStrokeType': n.ShapeLineTypeEnum["SolidLine"],
        'color': var_core_value_sig73D9,
        'width': 1.5,
        'opacity': 1
      }, {
        'lineStrokeType': n.ShapeLineTypeEnum["SolidLine"],
        'color': var_core_value_sigEAF8,
        'width': 2.25,
        'opacity': 1
      }],
      'effectStyleLst': [{}, {
        'outerShadow': {
          'color': "rgba(0, 0, 0, 0.18)",
          'blurRadius': 4,
          'direction': 45,
          'distance': 2,
          'rotateWithShape': false
        }
      }, {
        'outerShadow': {
          'color': "rgba(0, 0, 0, 0.28)",
          'blurRadius': 8,
          'direction': 45,
          'distance': 4,
          'rotateWithShape': false
        }
      }],
      'bgFillStyleLst': [{
        'fillType': n.ShapeFillEnum["SolidFill"],
        'color': var_core_value_sigC753.lt1,
        'opacity': 1
      }, {
        'fillType': n.ShapeFillEnum['SolidFill'],
        'color': var_core_value_sigC753.lt2,
        'opacity': 1
      }, {
        'fillType': n.ShapeFillEnum["GradientFill"],
        'gradientAngle': 90,
        'gradientStops': [{
          'position': 0,
          'color': var_core_value_sigC753.lt1
        }, {
          'position': 1,
          'color': var_core_value_sigC753.lt2
        }]
      }]
    }
  };
}
const v = [_("office", "Office", {
  'dk1': "#000000",
  'lt1': "#ffffff",
  'dk2': "#44546a",
  'lt2': '#e7e6e6',
  'acc1': "#4472c4",
  'acc2': "#ed7d31",
  'acc3': "#a5a5a5",
  'acc4': '#ffc000',
  'acc5': "#5b9bd5",
  'acc6': "#70ad47",
  'hlink': "#0563c1",
  'folHlink': "#954f72"
}), _("gallery", 'Gallery', {
  'dk1': "#1f2937",
  'lt1': "#ffffff",
  'dk2': '#374151',
  'lt2': "#f3f4f6",
  'acc1': "#2563eb",
  'acc2': '#db2777',
  'acc3': "#7c3aed",
  'acc4': "#f59e0b",
  'acc5': "#06b6d4",
  'acc6': "#16a34a",
  'hlink': "#1d4ed8",
  'folHlink': '#9333ea'
}), _("apex", "Apex", {
  'dk1': "#111827",
  'lt1': "#ffffff",
  'dk2': "#334155",
  'lt2': "#e2e8f0",
  'acc1': '#0f766e',
  'acc2': "#ea580c",
  'acc3': "#64748b",
  'acc4': "#ca8a04",
  'acc5': "#0284c7",
  'acc6': "#65a30d",
  'hlink': "#0369a1",
  'folHlink': "#7e22ce"
}), _("paper", 'Paper', {
  'dk1': '#172554',
  'lt1': "#fffdf7",
  'dk2': "#334155",
  'lt2': '#f1efe7',
  'acc1': "#2563eb",
  'acc2': "#dc2626",
  'acc3': "#0891b2",
  'acc4': "#d97706",
  'acc5': "#7c3aed",
  'acc6': "#059669",
  'hlink': "#1d4ed8",
  'folHlink': "#be185d"
}), _("civic", "Civic", {
  'dk1': "#020617",
  'lt1': "#ffffff",
  'dk2': '#475569',
  'lt2': "#e5e7eb",
  'acc1': '#be123c',
  'acc2': "#1d4ed8",
  'acc3': "#047857",
  'acc4': "#b45309",
  'acc5': "#6d28d9",
  'acc6': "#0f766e",
  'hlink': '#1d4ed8',
  'folHlink': "#9d174d"
}), _("ion", "Ion", {
  'dk1': "#0f172a",
  'lt1': "#ffffff",
  'dk2': "#334155",
  'lt2': "#e0f2fe",
  'acc1': "#0284c7",
  'acc2': '#f97316',
  'acc3': "#14b8a6",
  'acc4': "#a855f7",
  'acc5': '#64748b',
  'acc6': '#84cc16',
  'hlink': "#0369a1",
  'folHlink': '#7e22ce'
}, {
  'moderateFill': "acc3",
  'gradientFrom': 'acc2',
  'gradientTo': "acc1",
  'subtleLine': 'acc5',
  'moderateLine': "acc1"
}), _("facet", "Facet", {
  'dk1': "#1e1b4b",
  'lt1': "#ffffff",
  'dk2': "#3730a3",
  'lt2': "#eef2ff",
  'acc1': '#6366f1',
  'acc2': "#ec4899",
  'acc3': "#f59e0b",
  'acc4': '#10b981',
  'acc5': "#0ea5e9",
  'acc6': "#8b5cf6",
  'hlink': "#4f46e5",
  'folHlink': "#be185d"
}), _("integral", "Integral", {
  'dk1': "#1c1917",
  'lt1': '#fffaf0',
  'dk2': "#57534e",
  'lt2': '#f5f0e8',
  'acc1': "#b45309",
  'acc2': '#2563eb',
  'acc3': '#78716c',
  'acc4': "#dc2626",
  'acc5': "#059669",
  'acc6': "#7c3aed",
  'hlink': "#1d4ed8",
  'folHlink': "#9333ea"
}, {
  'subtleFill': "acc4",
  'moderateFill': "acc1",
  'gradientFrom': "acc4",
  'gradientTo': "acc6",
  'moderateLine': 'acc3'
}), _("retrospect", "Retrospect", {
  'dk1': '#2f1b45',
  'lt1': "#fff7ed",
  'dk2': "#6b3f69",
  'lt2': "#fdebd7",
  'acc1': "#c2410c",
  'acc2': "#be185d",
  'acc3': "#7c3aed",
  'acc4': "#0891b2",
  'acc5': "#ca8a04",
  'acc6': "#4d7c0f",
  'hlink': "#9a3412",
  'folHlink': "#86198f"
}, {
  'subtleFill': "acc2",
  'moderateFill': "acc2",
  'gradientFrom': "acc5",
  'gradientTo': "acc3",
  'subtleLine': "acc1",
  'moderateLine': "acc2"
}), _("organic", "Organic", {
  'dk1': "#1f2933",
  'lt1': '#fbfaf2',
  'dk2': "#41513a",
  'lt2': "#e8eadf",
  'acc1': "#3f6212",
  'acc2': '#a16207',
  'acc3': "#0f766e",
  'acc4': "#92400e",
  'acc5': "#64748b",
  'acc6': "#7c2d12",
  'hlink': '#166534',
  'folHlink': "#854d0e"
}, {
  'moderateFill': "acc3",
  'gradientFrom': "acc2",
  'gradientTo': "acc1",
  'subtleLine': "acc6",
  'moderateLine': "acc1"
}), _('wisp', "Wisp", {
  'dk1': '#111827',
  'lt1': "#f8fafc",
  'dk2': "#374151",
  'lt2': "#e2e8f0",
  'acc1': "#7c3aed",
  'acc2': "#06b6d4",
  'acc3': '#f97316',
  'acc4': "#22c55e",
  'acc5': '#64748b',
  'acc6': "#e11d48",
  'hlink': "#6d28d9",
  'folHlink': "#be123c"
}, {
  'subtleFill': "acc2",
  'moderateFill': "acc6",
  'gradientFrom': "acc2",
  'gradientTo': "acc1",
  'moderateLine': 'acc6'
}), _("parcel", "Parcel", {
  'dk1': "#27272a",
  'lt1': "#ffffff",
  'dk2': '#52525b',
  'lt2': "#f4f4f5",
  'acc1': "#2563eb",
  'acc2': "#ea580c",
  'acc3': "#16a34a",
  'acc4': "#9333ea",
  'acc5': "#0891b2",
  'acc6': "#ca8a04",
  'hlink': "#1d4ed8",
  'folHlink': "#7e22ce"
})];
function ee(var_core_value_sig0455) {
  return v.find(var_core_value_sig0B45 => var_core_value_sig0B45.id === var_core_value_sig0455);
}
const y = v[0].colorScheme,
  te = v[0].fmtScheme,
  b = {
    'id': v[0].id,
    'name': "Office Theme",
    'colorScheme': y,
    'fontScheme': {
      'heading': "Calibri Light",
      'body': 'Calibri'
    },
    'fmtScheme': te
  },
  x = 'master-default',
  ne = {
    'id': x,
    'pageType': 'master',
    'name': "Office Theme",
    'pageSize': {
      'width': 960,
      'height': 540
    },
    'elementOrder': [],
    'elements': {},
    'background': {
      'type': "solid",
      'color': "#ffffff"
    }
  };
function S(var_core_value_sig737C, var_core_value_sig5AF5, var_core_value_sig9DE4, var_core_value_sig77FA) {
  return {
    'id': var_core_value_sig737C,
    'pageType': "layout",
    'layoutType': var_core_value_sig5AF5,
    'name': var_core_value_sig9DE4,
    'masterPageId': x,
    'pageSize': {
      'width': 960,
      'height': 540
    },
    ...var_core_value_sig77FA
  };
}
const C = {
    'title': "layout-title",
    'titleAndBody': 'layout-title-body',
    'sectionHeader': "layout-section-header",
    'twoColumns': "layout-two-columns",
    'comparison': "layout-comparison",
    'blank': "layout-blank",
    'titleOnly': "layout-title-only",
    'pictureWithCaption': 'layout-picture-caption',
    'custom': "layout-custom"
  },
  re = {
    'title': S(C.title, "title", "Title Slide", {
      'elementOrder': ["ph-center-title", "ph-subtitle"],
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
            'id': "ph-subtitle",
            'type': "subtitle"
          }
        }
      }
    }),
    'titleAndBody': S(C.titleAndBody, "titleAndBody", "Title and Content", {
      'elementOrder': ['ph-title', 'ph-body'],
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
            'id': 'ph-title',
            'type': "title"
          }
        },
        'ph-body': {
          'id': "ph-body",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 128,
            'width': 864,
            'height': 380
          },
          'placeholder': {
            'id': "ph-body",
            'type': 'body'
          }
        }
      }
    }),
    'sectionHeader': S(C.sectionHeader, "sectionHeader", "Section Header", {
      'elementOrder': ["ph-center-title", "ph-text"],
      'elements': {
        'ph-center-title': {
          'id': 'ph-center-title',
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
          'id': 'ph-text',
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
    'twoColumns': S(C.twoColumns, "twoColumns", 'Two\x20Content', {
      'elementOrder': ["ph-title", "ph-body-left", "ph-body-right"],
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
            'id': 'ph-title',
            'type': 'title'
          }
        },
        'ph-body-left': {
          'id': "ph-body-left",
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 128,
            'width': 422,
            'height': 380
          },
          'placeholder': {
            'id': "ph-body-left",
            'type': "body",
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
    'comparison': S(C.comparison, "comparison", "Comparison", {
      'elementOrder': ['ph-title', "ph-text-left", "ph-text-right", "ph-body-left", "ph-body-right"],
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
            'id': 'ph-title',
            'type': "title"
          }
        },
        'ph-text-left': {
          'id': 'ph-text-left',
          'type': "placeholder",
          'transform': {
            'left': 48,
            'top': 128,
            'width': 422,
            'height': 40
          },
          'placeholder': {
            'id': 'ph-text-left',
            'type': "text",
            'index': 1
          }
        },
        'ph-text-right': {
          'id': 'ph-text-right',
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
          'type': "placeholder",
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
          'type': 'placeholder',
          'transform': {
            'left': 490,
            'top': 176,
            'width': 422,
            'height': 332
          },
          'placeholder': {
            'id': "ph-body-right",
            'type': 'body',
            'index': 2
          }
        }
      }
    }),
    'blank': S(C.blank, "blank", "Blank", {
      'elementOrder': [],
      'elements': {}
    }),
    'titleOnly': S(C.titleOnly, 'titleOnly', "Title Only", {
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
            'type': 'title'
          }
        }
      }
    }),
    'pictureWithCaption': S(C.pictureWithCaption, "pictureWithCaption", "Picture with Caption", {
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
            'type': "picture"
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
            'type': 'text'
          }
        }
      }
    })
  },
  ie = ["title", "titleAndBody", "sectionHeader", "twoColumns", "comparison", "blank", "titleOnly", "pictureWithCaption"];
function ae(var_core_value_sigA4A7 = {}) {
  let {
      layoutType: var_core_value_sig90F5 = "titleAndBody",
      id: var_core_value_sigD2BA = (0, e.generateRandomId)(6),
      name: var_core_value_sigA4DF,
      masterPageId: var_core_value_sigCD3A = x,
      layoutPageId: var_core_value_sigCC9D
    } = var_core_value_sigA4A7,
    var_core_value_sig519D = var_core_value_sigCC9D ?? C[var_core_value_sig90F5],
    var_core_value_sigC7E7 = re[var_core_value_sig90F5];
  return {
    'id': var_core_value_sigD2BA,
    'pageType': 'slide',
    'name': var_core_value_sigA4DF ?? (var_core_value_sigC7E7 == null ? undefined : var_core_value_sigC7E7.name) ?? "Slide",
    'masterPageId': var_core_value_sigCD3A,
    'layoutPageId': var_core_value_sig519D,
    'elementOrder': [],
    'elements': {},
    'showMasterSp': true
  };
}
;
function oe() {
  return {
    'theme': b,
    'masterPageOrder': [x],
    'masterPages': {
      [x]: ne
    },
    'layoutPageOrder': ie.map(var_core_value_sig36F8 => C[var_core_value_sig36F8]),
    'layoutPages': Object.fromEntries(ie.map(var_core_value_sig03E1 => [C[var_core_value_sig03E1], re[var_core_value_sig03E1]]))
  };
}
;
function se(var_core_value_sig6E1C) {
  return typeof var_core_value_sig6E1C != "object" || !var_core_value_sig6E1C ? var_core_value_sig6E1C : JSON.parse(JSON.stringify(var_core_value_sig6E1C));
}
;
function ce(var_core_value_sigFABC, var_core_value_sig413D, var_core_value_sig5BCE) {
  return Object.defineProperty(var_core_value_sigFABC, var_core_value_sig413D, {
    'configurable': true,
    'enumerable': false,
    'writable': true,
    'value': var_core_value_sig5BCE
  }), var_core_value_sigFABC;
}
;
function le(var_core_value_sig8EF0) {
  return {
    ...b,
    ...var_core_value_sig8EF0,
    'colorScheme': {
      ...b.colorScheme,
      ...(var_core_value_sig8EF0 == null ? undefined : var_core_value_sig8EF0.colorScheme)
    },
    'fontScheme': {
      ...b.fontScheme,
      ...(var_core_value_sig8EF0 == null ? undefined : var_core_value_sig8EF0.fontScheme)
    },
    'fmtScheme': {
      ...b.fmtScheme,
      ...(var_core_value_sig8EF0 == null ? undefined : var_core_value_sig8EF0.fmtScheme)
    }
  };
}
;
function ue(var_core_value_sig78AC, var_core_value_sig4CEF) {
  var var_core_value_sigD57D;
  return ((var_core_value_sigD57D = var_core_value_sig78AC.colorScheme) == null ? undefined : var_core_value_sigD57D[var_core_value_sig4CEF]) ?? var_core_value_sig4CEF;
}
;
function de(var_core_value_sig2CC7) {
  var var_core_value_sig4784;
  return {
    'isHorizontal': true,
    'isRichText': false,
    'text': '',
    'fontFamily': (var_core_value_sig4784 = var_core_value_sig2CC7.fontScheme) == null ? undefined : var_core_value_sig4784.body,
    'fontSize': 18,
    'color': ue(var_core_value_sig2CC7, "lt1")
  };
}
;
function fe(var_core_value_sigC39E, var_core_value_sig16C7) {
  let var_core_value_sig7481 = le(var_core_value_sig16C7),
    var_core_value_sig08A3 = {
      ...var_core_value_sigC39E.shapeData
    };
  if (!var_core_value_sig08A3.fill) {
    var var_core_value_sig77D8;
    ce(var_core_value_sig08A3, "fill", se(((var_core_value_sig77D8 = var_core_value_sig7481.fmtScheme) == null ? undefined : var_core_value_sig77D8.fillStyleLst[1]) ?? {
      'fillType': n.ShapeFillEnum["SolidFill"],
      'color': ue(var_core_value_sig7481, "acc1")
    }));
  }
  if (!var_core_value_sig08A3.stroke) {
    var var_core_value_sig78A3;
    ce(var_core_value_sig08A3, "stroke", se(((var_core_value_sig78A3 = var_core_value_sig7481.fmtScheme) == null ? undefined : var_core_value_sig78A3.lnStyleLst[1]) ?? {
      'lineStrokeType': n.ShapeLineTypeEnum["SolidLine"],
      'color': ue(var_core_value_sig7481, "acc1"),
      'width': 1.5
    }));
  }
  if (var_core_value_sig08A3.shapeText && "isRichText" in var_core_value_sig08A3.shapeText && var_core_value_sig08A3.shapeText["isRichText"] === false) {
    let var_core_value_sigBB57 = de(var_core_value_sig7481),
      var_core_value_sig7C4A = {
        ...var_core_value_sig08A3.shapeText
      };
    Object.keys(var_core_value_sigBB57).forEach(var_core_value_sigD955 => {
      var_core_value_sig7C4A[var_core_value_sigD955] === undefined && ce(var_core_value_sig7C4A, var_core_value_sigD955, var_core_value_sigBB57[var_core_value_sigD955]);
    }), var_core_value_sig08A3.shapeText = var_core_value_sig7C4A;
  }
  return {
    ...var_core_value_sigC39E,
    'shapeData': var_core_value_sig08A3
  };
}
;
function pe(var_core_value_sig649B) {
  return de(le(var_core_value_sig649B));
}
;
function w(var_core_value_sig6256) {
  return (var_core_value_sig6256 == null ? undefined : var_core_value_sig6256.element["type"]) === "group";
}
;
function me(var_core_value_sigE7A6, var_core_value_sigB505) {
  let var_core_value_sig7428 = [],
    var_core_value_sig1DCE = new Set();
  return var_core_value_sigB505 == null || var_core_value_sigB505.forEach(var_core_value_sigE799 => {
    let var_core_value_sigB601 = var_core_value_sigE7A6[var_core_value_sigE799];
    !var_core_value_sigB601 || var_core_value_sig1DCE.has(var_core_value_sigE799) || (var_core_value_sig1DCE.add(var_core_value_sigE799), var_core_value_sig7428.push(var_core_value_sigB601));
  }), Object.values(var_core_value_sigE7A6).forEach(var_core_value_sig8B71 => {
    var_core_value_sig1DCE.has(var_core_value_sig8B71.drawingId) || (var_core_value_sig1DCE.add(var_core_value_sig8B71.drawingId), var_core_value_sig7428.push(var_core_value_sig8B71));
  }), var_core_value_sig7428;
}
;
function he(var_core_value_sig0567, var_core_value_sigA7F3, var_core_value_sigEACD) {
  let var_core_value_sig901E = [],
    var_core_value_sigF7BB = new Set(),
    var_core_value_sigFA38 = var_core_value_sigAEFB => {
      !var_core_value_sigAEFB || var_core_value_sigAEFB === var_core_value_sigA7F3 || var_core_value_sigF7BB.has(var_core_value_sigAEFB) || (var_core_value_sigF7BB.add(var_core_value_sigAEFB), var_core_value_sig901E.push(var_core_value_sigAEFB));
    },
    var_core_value_sig102B = var_core_value_sig0567[var_core_value_sigA7F3];
  return w(var_core_value_sig102B) && (var_core_value_sig102B.element["children"] ?? []).forEach(var_core_value_sigFA38), me(var_core_value_sig0567, var_core_value_sigEACD).forEach(var_core_value_sig826B => {
    var_core_value_sig826B.groupId === var_core_value_sigA7F3 && var_core_value_sigFA38(var_core_value_sig826B.drawingId);
  }), var_core_value_sig901E;
}
;
function ge(var_core_value_sigA7DB, var_core_value_sig5EEE, var_core_value_sig65B4) {
  let var_core_value_sigF98E = [],
    var_core_value_sigA470 = new Set(),
    var_core_value_sig19A1 = var_core_value_sigCF89 => {
      he(var_core_value_sigA7DB, var_core_value_sigCF89, var_core_value_sig65B4).forEach(var_core_value_sig48BD => {
        var_core_value_sigA470.has(var_core_value_sig48BD) || (var_core_value_sigA470.add(var_core_value_sig48BD), var_core_value_sigF98E.push(var_core_value_sig48BD), w(var_core_value_sigA7DB[var_core_value_sig48BD]) && var_core_value_sig19A1(var_core_value_sig48BD));
      });
    };
  return var_core_value_sig19A1(var_core_value_sig5EEE), var_core_value_sigF98E;
}
;
function _e(var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1) {
  let var_core_value_sigBC1A = new Set();
  var_core_value_sigAAD1.forEach(var_core_value_sig00CB => {
    let var_core_value_sig77EE = var_core_value_sig81F7[var_core_value_sig00CB];
    var_core_value_sig77EE && (var_core_value_sigBC1A.add(var_core_value_sig00CB), w(var_core_value_sig77EE) && ge(var_core_value_sig81F7, var_core_value_sig00CB, var_core_value_sigBE51).forEach(var_core_value_sig429F => {
      var_core_value_sig81F7[var_core_value_sig429F] && var_core_value_sigBC1A.add(var_core_value_sig429F);
    }));
  });
  let var_core_value_sig3F3A = new Map();
  return var_core_value_sigBE51.forEach((var_core_value_sig9F76, var_core_value_sigB008) => var_core_value_sig3F3A.set(var_core_value_sig9F76, var_core_value_sigB008)), Array.from(var_core_value_sigBC1A).sort((var_core_value_sig8721, var_core_value_sig08BA) => (var_core_value_sig3F3A.get(var_core_value_sig8721) ?? 2 ** 53 - 1) - (var_core_value_sig3F3A.get(var_core_value_sig08BA) ?? 2 ** 53 - 1));
}
;
function ve(var_core_value_sigA984) {
  switch (var_core_value_sigA984) {
    case "image":
      return e.DrawingTypeEnum['DRAWING_IMAGE'];
    case "shape":
      return e.DrawingTypeEnum['DRAWING_SHAPE'];
    case "chart":
      return e.DrawingTypeEnum["DRAWING_CHART"];
    case "table":
      return e.DrawingTypeEnum["DRAWING_TABLE"];
    case 'group':
      return e.DrawingTypeEnum["DRAWING_GROUP"];
    case "media":
      return e.DrawingTypeEnum['DRAWING_VIDEO'];
    default:
      return e.DrawingTypeEnum["DRAWING_SHAPE"];
  }
}
;
function T(var_core_value_sigA504, var_core_value_sig05FF, var_core_value_sigFBF0, var_core_value_sig2F95, var_core_value_sigF0E1) {
  let var_core_value_sig2D8D = var_core_value_sigFBF0.type === "shape" ? fe(var_core_value_sigFBF0, var_core_value_sigF0E1) : var_core_value_sigFBF0,
    var_core_value_sigE5A6 = var_core_value_sigFBF0.transform;
  return {
    'unitId': var_core_value_sigA504,
    'subUnitId': var_core_value_sig05FF,
    'drawingId': var_core_value_sig2D8D.id,
    'drawingType': ve(var_core_value_sig2D8D.type),
    'transform': {
      'left': var_core_value_sigE5A6.left ?? 0,
      'top': var_core_value_sigE5A6.top ?? 0,
      'width': var_core_value_sigE5A6.width ?? 0,
      'height': var_core_value_sigE5A6.height ?? 0,
      'angle': var_core_value_sigE5A6.rotation ?? 0,
      'flipX': var_core_value_sigE5A6.flipX,
      'flipY': var_core_value_sigE5A6.flipY
    },
    'hidden': var_core_value_sig2D8D.visible === false,
    'element': var_core_value_sig2D8D,
    'sourcePageType': var_core_value_sig2F95
  };
}
;
function ye(var_core_value_sigF449, var_core_value_sig38C5) {
  return typeof var_core_value_sigF449 == "number" ? var_core_value_sigF449 * var_core_value_sig38C5 : var_core_value_sigF449;
}
;
function be(var_core_value_sigC87D, var_core_value_sigCCDC, var_core_value_sigC310) {
  if (!var_core_value_sigCCDC || !var_core_value_sigC310 || var_core_value_sigCCDC.width <= 0 || var_core_value_sigCCDC.height <= 0) return var_core_value_sigC87D;
  let var_core_value_sigA4E8 = var_core_value_sigC310.width / var_core_value_sigCCDC.width,
    var_core_value_sigDC07 = var_core_value_sigC310.height / var_core_value_sigCCDC.height;
  if (var_core_value_sigA4E8 === 1 && var_core_value_sigDC07 === 1) return var_core_value_sigC87D;
  let var_core_value_sig3474 = var_core_value_sigC87D.transform;
  return {
    ...var_core_value_sigC87D,
    'transform': {
      ...var_core_value_sig3474,
      'left': ye(var_core_value_sig3474.left, var_core_value_sigA4E8),
      'top': ye(var_core_value_sig3474.top, var_core_value_sigDC07),
      'width': ye(var_core_value_sig3474.width, var_core_value_sigA4E8),
      'height': ye(var_core_value_sig3474.height, var_core_value_sigDC07)
    }
  };
}
;
function xe(var_core_value_sig4E80, var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
  return var_core_value_sig4E80 === "slide" ? var_core_value_sig0B5C.id : var_core_value_sig4E80 + ':' + var_core_value_sigD23B + ':' + var_core_value_sig2B2A + ':' + var_core_value_sig0B5C.id;
}
;
function Se(var_core_value_sig7D42, var_core_value_sig8FDE, var_core_value_sig78E6) {
  var var_core_value_sig541F;
  if (var_core_value_sig7D42 === "slide" || var_core_value_sig8FDE.type !== "group") return var_core_value_sig8FDE;
  let var_core_value_sig417B = (var_core_value_sig541F = var_core_value_sig8FDE.children) == null ? undefined : var_core_value_sig541F.map(var_core_value_sigDBB5 => var_core_value_sig78E6.get(var_core_value_sigDBB5) ?? var_core_value_sigDBB5);
  return var_core_value_sig417B ? {
    ...var_core_value_sig8FDE,
    'children': var_core_value_sig417B
  } : var_core_value_sig8FDE;
}
;
function Ce(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig682D, var_core_value_sig1435 = {}) {
  var var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3;
  let var_core_value_sigCCAA = {},
    var_core_value_sigF32D = [],
    var_core_value_sig9427 = (var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB) => {
      let var_core_value_sigE347 = new Map();
      var_core_value_sig237B.forEach((var_core_value_sigF62A, var_core_value_sig8178) => {
        var_core_value_sigE347.set(var_core_value_sigF62A.id, xe(var_core_value_sigCFAC, var_core_value_sigE92D, var_core_value_sig8178, var_core_value_sigF62A));
      }), var_core_value_sig237B.forEach((var_core_value_sigE9ED, var_core_value_sigB577) => {
        var var_core_value_sig9572;
        let var_core_value_sigD873 = xe(var_core_value_sigCFAC, var_core_value_sigE92D, var_core_value_sigB577, var_core_value_sigE9ED),
          var_core_value_sigA12B = Se(var_core_value_sigCFAC, var_core_value_sigCFAC === "slide" ? var_core_value_sigE9ED : be(var_core_value_sigE9ED, var_core_value_sigFEAB, (var_core_value_sig9572 = var_core_value_sig1435.pageSize) == null ? undefined : var_core_value_sig9572.target), var_core_value_sigE347);
        var_core_value_sigCCAA[var_core_value_sigD873] = {
          ...T(var_core_value_sigAA90, var_core_value_sigE92D, var_core_value_sigA12B, var_core_value_sigCFAC, var_core_value_sig682D),
          'drawingId': var_core_value_sigD873,
          'subUnitId': var_core_value_sigE92D
        }, var_core_value_sigF32D.push(var_core_value_sigD873);
      });
    };
  return var_core_value_sig9427("master", var_core_value_sig9940.masterLayer, (var_core_value_sig4082 = var_core_value_sig1435.pageSize) == null ? undefined : var_core_value_sig4082.master), var_core_value_sig9427("layout", var_core_value_sig9940.layoutLayer, (var_core_value_sigC049 = var_core_value_sig1435.pageSize) == null ? undefined : var_core_value_sigC049.layout), var_core_value_sig9427("slide", var_core_value_sig9940.slideLayer, (var_core_value_sigE5C3 = var_core_value_sig1435.pageSize) == null ? undefined : var_core_value_sigE5C3.target), {
    'data': we(var_core_value_sigCCAA, var_core_value_sigF32D),
    'order': var_core_value_sigF32D
  };
}
;
function we(var_core_value_sig21F4, var_core_value_sigA345 = []) {
  let var_core_value_sigA468 = {
      ...var_core_value_sig21F4
    },
    var_core_value_sig1561 = new Set();
  Object.values(var_core_value_sigA468).forEach(var_core_value_sig3C5B => {
    w(var_core_value_sig3C5B) && he(var_core_value_sigA468, var_core_value_sig3C5B.drawingId, var_core_value_sigA345).forEach(var_core_value_sigF230 => {
      var_core_value_sig1561.add(var_core_value_sigF230);
    });
  });
  let var_core_value_sigDF14 = [...var_core_value_sigA345, ...Object.keys(var_core_value_sigA468).filter(var_core_value_sig200B => !var_core_value_sigA345.includes(var_core_value_sig200B))],
    var_core_value_sig842F = (var_core_value_sig3863, var_core_value_sigC97C, var_core_value_sigC4B1) => {
      if (var_core_value_sigC4B1.has(var_core_value_sig3863)) return;
      let var_core_value_sig1BD9 = var_core_value_sigA468[var_core_value_sig3863];
      if (!var_core_value_sig1BD9) return;
      let var_core_value_sigE43E = var_core_value_sigC97C || var_core_value_sig1BD9.hidden === true || var_core_value_sig1BD9.element["visible"] === false;
      var_core_value_sig1BD9.hidden !== var_core_value_sigE43E && (var_core_value_sigA468[var_core_value_sig3863] = {
        ...var_core_value_sig1BD9,
        'hidden': var_core_value_sigE43E
      });
      let var_core_value_sigA937 = var_core_value_sigA468[var_core_value_sig3863];
      if (!w(var_core_value_sigA937)) return;
      let var_core_value_sigCAD5 = new Set(var_core_value_sigC4B1);
      var_core_value_sigCAD5.add(var_core_value_sig3863), he(var_core_value_sigA468, var_core_value_sig3863, var_core_value_sigA345).forEach(var_core_value_sig09B8 => {
        var_core_value_sig842F(var_core_value_sig09B8, var_core_value_sigE43E, var_core_value_sigCAD5);
      });
    };
  return var_core_value_sigDF14.forEach(var_core_value_sigE503 => {
    var_core_value_sig1561.has(var_core_value_sigE503) || var_core_value_sig842F(var_core_value_sigE503, false, new Set());
  }), var_core_value_sigA468;
}
var Te = class extends t.UnitDrawingService {
  removeDrawingsWithoutGroupExpansion(var_core_value_sig48DD) {
    var var_core_value_sig5E6A;
    if (var_core_value_sig48DD.length === 0) return [];
    let {
        unitId: var_core_value_sigB7FC,
        subUnitId: var_core_value_sig9CD9
      } = var_core_value_sig48DD[0],
      var_core_value_sigFD0C = new Set(),
      var_core_value_sig849B = this.getDrawingOrder(var_core_value_sigB7FC, var_core_value_sig9CD9),
      var_core_value_sig5F1A = new Map();
    var_core_value_sig849B.forEach((var_core_value_sig6F91, var_core_value_sigF9C7) => var_core_value_sig5F1A.set(var_core_value_sig6F91, var_core_value_sigF9C7));
    let var_core_value_sigB455 = (var_core_value_sig5E6A = this.drawingManagerData[var_core_value_sigB7FC]) == null ? undefined : var_core_value_sig5E6A[var_core_value_sig9CD9];
    if (!var_core_value_sigB455) return [];
    let var_core_value_sig5241 = var_core_value_sig48DD.filter(var_core_value_sig8895 => var_core_value_sigFD0C.has(var_core_value_sig8895.drawingId) || !this.getDrawingByParam(var_core_value_sig8895) ? false : (var_core_value_sigFD0C.add(var_core_value_sig8895.drawingId), true)).sort((var_core_value_sigC80B, var_core_value_sig284F) => (var_core_value_sig5F1A.get(var_core_value_sigC80B.drawingId) ?? -1 / 0) - (var_core_value_sig5F1A.get(var_core_value_sig284F.drawingId) ?? -1 / 0));
    return [...var_core_value_sig5241].sort((var_core_value_sigE154, var_core_value_sig4632) => {
      let var_core_value_sig12F2 = var_core_value_sig5F1A.get(var_core_value_sigE154.drawingId) ?? -1 / 0;
      return (var_core_value_sig5F1A.get(var_core_value_sig4632.drawingId) ?? -1 / 0) - var_core_value_sig12F2;
    }).forEach(var_core_value_sig2259 => {
      delete var_core_value_sigB455.data[var_core_value_sig2259.drawingId];
      let var_core_value_sig9E2F = var_core_value_sigB455.order['indexOf'](var_core_value_sig2259.drawingId);
      var_core_value_sig9E2F >= 0 && var_core_value_sigB455.order["splice"](var_core_value_sig9E2F, 1);
    }), var_core_value_sig5241;
  }
  getDrawingsByGroup(var_core_value_sigC6E5) {
    let {
        unitId: var_core_value_sigCEFB,
        subUnitId: var_core_value_sig1537,
        drawingId: var_core_value_sigE4C6
      } = var_core_value_sigC6E5,
      var_core_value_sig4313 = this.getDrawingData(var_core_value_sigCEFB, var_core_value_sig1537);
    return he(var_core_value_sig4313, var_core_value_sigE4C6).map(var_core_value_sigD082 => var_core_value_sig4313[var_core_value_sigD082]).filter(var_core_value_sigDBB7 => !!var_core_value_sigDBB7);
  }
  getDrawingsByGroupNested(var_core_value_sigFC87) {
    let {
        unitId: var_core_value_sig156F,
        subUnitId: var_core_value_sigDD51
      } = var_core_value_sigFC87,
      var_core_value_sigF057 = this.getDrawingByParam(var_core_value_sigFC87);
    if (!var_core_value_sigF057) return null;
    let var_core_value_sig72F6 = this.getDrawingData(var_core_value_sig156F, var_core_value_sigDD51),
      var_core_value_sig9FBA = [],
      var_core_value_sigFE01 = [],
      var_core_value_sigA2CE = {},
      var_core_value_sig1975 = new Set(),
      var_core_value_sig6EA1 = var_core_value_sigD0A8 => {
        let var_core_value_sigF4B9 = var_core_value_sigD0A8.drawingId;
        if (var_core_value_sig1975.has(var_core_value_sigF4B9)) return;
        var_core_value_sig1975.add(var_core_value_sigF4B9);
        let var_core_value_sig5CEE = he(var_core_value_sig72F6, var_core_value_sigF4B9);
        var_core_value_sigA2CE[var_core_value_sigF4B9] = {
          'drawingId': var_core_value_sigF4B9,
          'children': var_core_value_sig5CEE
        }, var_core_value_sig5CEE.forEach(var_core_value_sig7524 => {
          let var_core_value_sig2AD8 = var_core_value_sig72F6[var_core_value_sig7524];
          if (var_core_value_sig2AD8) {
            if (w(var_core_value_sig2AD8)) {
              var_core_value_sig6EA1(var_core_value_sig2AD8), var_core_value_sigFE01.push(var_core_value_sig2AD8);
              return;
            }
            var_core_value_sig9FBA.push(var_core_value_sig2AD8);
          }
        });
      };
    return var_core_value_sig6EA1(var_core_value_sigF057), var_core_value_sigFE01.push(var_core_value_sigF057), {
      'nestedIdRecord': var_core_value_sigA2CE,
      'flatChildren': var_core_value_sig9FBA,
      'groups': var_core_value_sigFE01
    };
  }
};
const E = (0, e.createIdentifier)("slide.slide-drawing.service");
function Ee(var_core_value_sigC4C0) {
  switch (var_core_value_sigC4C0.type) {
    case "shape":
      return String(var_core_value_sigC4C0.shapeData["shapeType"] ?? var_core_value_sigC4C0.type);
    case "connector":
      return String(var_core_value_sigC4C0.connectorData["shapeType"] ?? var_core_value_sigC4C0.type);
    default:
      return var_core_value_sigC4C0.type;
  }
}
;
function De(var_core_value_sig214A) {
  return var_core_value_sig214A.name || var_core_value_sig214A.id;
}
;
function Oe(var_core_value_sigCCC3, var_core_value_sig986E, var_core_value_sig537C = {}) {
  var var_core_value_sigBBBC, var_core_value_sig5440;
  if ((var_core_value_sigBBBC = var_core_value_sigCCC3.name) != null && var_core_value_sigBBBC.trim()) return var_core_value_sigCCC3;
  let var_core_value_sigE28B = ((var_core_value_sig5440 = var_core_value_sig537C.nameBase) == null ? undefined : var_core_value_sig5440.trim()) || Ee(var_core_value_sigCCC3);
  return {
    ...var_core_value_sigCCC3,
    'name': (0, n.createUniqueShapeName)(var_core_value_sigE28B, Array.from(var_core_value_sig986E).map(De))
  };
}
const ke = new Set(Object.values(C)),
  Ae = {
    'width': 960,
    'height': 540
  };
function je(var_core_value_sig0FD9, var_core_value_sig5649) {
  var var_core_value_sigAF82, var_core_value_sig21A2;
  let var_core_value_sig5C1D = var_core_value_sig0FD9.getSnapshot(),
    var_core_value_sig4CBA = var_core_value_sig5C1D.slides[var_core_value_sig5649],
    var_core_value_sig8E65 = var_core_value_sig4CBA != null && var_core_value_sig4CBA.layoutPageId ? (var_core_value_sigAF82 = var_core_value_sig5C1D.layoutPages) == null ? undefined : var_core_value_sigAF82[var_core_value_sig4CBA.layoutPageId] : undefined,
    var_core_value_sig772C = (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.masterPageId) ?? (var_core_value_sig8E65 == null ? undefined : var_core_value_sig8E65.masterPageId),
    var_core_value_sigF309 = var_core_value_sig772C ? (var_core_value_sig21A2 = var_core_value_sig5C1D.masterPages) == null ? undefined : var_core_value_sig21A2[var_core_value_sig772C] : undefined,
    var_core_value_sig44F9 = var_core_value_sig5C1D.defaultPageSize;
  return {
    'pageSize': {
      'target': (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.pageSize) ?? var_core_value_sig44F9,
      'layout': (var_core_value_sig8E65 == null ? undefined : var_core_value_sig8E65.pageSize) ?? (var_core_value_sig8E65 && ke.has(var_core_value_sig8E65.id) ? Ae : var_core_value_sig44F9),
      'master': (var_core_value_sigF309 == null ? undefined : var_core_value_sigF309.pageSize) ?? ((var_core_value_sigF309 == null ? undefined : var_core_value_sigF309.id) === "master-default" ? Ae : var_core_value_sig44F9)
    }
  };
}
;
function D(var_core_value_sigE532, var_core_value_sigF381) {
  let var_core_value_sigCB92 = var_core_value_sigF381.getId();
  return Ce(var_core_value_sigE532.getUnitId(), var_core_value_sigCB92, var_core_value_sigF381.resolveElements(), var_core_value_sigE532.getThemeDataForPage(var_core_value_sigCB92), je(var_core_value_sigE532, var_core_value_sigCB92));
}
;
function Me(var_core_value_sigC844, var_core_value_sig2ED4, var_core_value_sig0477) {
  return var_core_value_sig0477.map(var_core_value_sig029F => ({
    'unitId': var_core_value_sigC844,
    'subUnitId': var_core_value_sig2ED4,
    'drawingId': var_core_value_sig029F
  }));
}
;
function O(var_core_value_sig6FDF, var_core_value_sig27C4, var_core_value_sig3E1A, var_core_value_sig7FB0) {
  let var_core_value_sig5215 = var_core_value_sig27C4.pageManager["getSlide"](var_core_value_sig7FB0);
  if (!var_core_value_sig5215) return false;
  let var_core_value_sig5204 = var_core_value_sig6FDF.getDrawingData(var_core_value_sig3E1A, var_core_value_sig7FB0),
    var_core_value_sig5E11 = var_core_value_sig6FDF.getDrawingOrder(var_core_value_sig3E1A, var_core_value_sig7FB0),
    var_core_value_sig4D58 = new Set(var_core_value_sig5E11),
    {
      data: var_core_value_sig2DBD,
      order: var_core_value_sig424E
    } = D(var_core_value_sig27C4, var_core_value_sig5215),
    var_core_value_sigF481 = new Set(var_core_value_sig424E);
  var_core_value_sig6FDF.drawingManagerData[var_core_value_sig3E1A] || (var_core_value_sig6FDF.drawingManagerData[var_core_value_sig3E1A] = {}), var_core_value_sig6FDF.drawingManagerData[var_core_value_sig3E1A][var_core_value_sig7FB0] = {
    'data': var_core_value_sig2DBD,
    'order': var_core_value_sig424E
  };
  let var_core_value_sigD7F2 = var_core_value_sig5E11.filter(var_core_value_sig3767 => !var_core_value_sigF481.has(var_core_value_sig3767)),
    var_core_value_sig7CF3 = var_core_value_sig424E.filter(var_core_value_sig670B => !var_core_value_sig4D58.has(var_core_value_sig670B)),
    var_core_value_sig9DC6 = var_core_value_sig424E.filter(var_core_value_sig6912 => var_core_value_sig4D58.has(var_core_value_sig6912) && var_core_value_sig5204[var_core_value_sig6912] !== var_core_value_sig2DBD[var_core_value_sig6912]);
  return var_core_value_sigD7F2.length > 0 && var_core_value_sig6FDF.removeNotification(Me(var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sigD7F2)), var_core_value_sig7CF3.length > 0 && var_core_value_sig6FDF.addNotification(Me(var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sig7CF3)), var_core_value_sig9DC6.length > 0 && var_core_value_sig6FDF.updateNotification(Me(var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sig9DC6)), var_core_value_sigD7F2.length === 0 && var_core_value_sig7CF3.length === 0 && var_core_value_sig9DC6.length === 0 && var_core_value_sig424E.length > 0 && var_core_value_sig6FDF.updateNotification(Me(var_core_value_sig3E1A, var_core_value_sig7FB0, var_core_value_sig424E)), true;
}
;
function Ne(var_core_value_sig6643, var_core_value_sig4124) {
  let var_core_value_sigBF1C = var_core_value_sig6643.getSnapshot(),
    var_core_value_sigEEEF = new Set();
  return var_core_value_sigBF1C.slides[var_core_value_sig4124] && var_core_value_sigEEEF.add(var_core_value_sig4124), Object.values(var_core_value_sigBF1C.slides).forEach(var_core_value_sigE235 => {
    var var_core_value_sig7664;
    if (var_core_value_sigE235.masterPageId === var_core_value_sig4124 || var_core_value_sigE235.layoutPageId === var_core_value_sig4124) {
      var_core_value_sigEEEF.add(var_core_value_sigE235.id);
      return;
    }
    let var_core_value_sig2281 = var_core_value_sigE235.layoutPageId ? (var_core_value_sig7664 = var_core_value_sigBF1C.layoutPages) == null ? undefined : var_core_value_sig7664[var_core_value_sigE235.layoutPageId] : undefined;
    (var_core_value_sig2281 == null ? undefined : var_core_value_sig2281.masterPageId) === var_core_value_sig4124 && var_core_value_sigEEEF.add(var_core_value_sigE235.id);
  }), Array.from(var_core_value_sigEEEF);
}
;
function k(var_core_value_sig9A01, var_core_value_sig674F, var_core_value_sigC8F6, var_core_value_sig8A26) {
  Ne(var_core_value_sig674F, var_core_value_sig8A26).forEach(var_core_value_sig5E86 => {
    O(var_core_value_sig9A01, var_core_value_sig674F, var_core_value_sigC8F6, var_core_value_sig5E86);
  });
}
;
function Pe(var_core_value_sigD073) {
  let var_core_value_sigF631 = var_core_value_sigD073.shapeData["shapeType"];
  if (!var_core_value_sigF631) return var_core_value_sigD073;
  try {
    let var_core_value_sig6998 = new n["ShapeModel"](var_core_value_sigF631, var_core_value_sigD073.id, var_core_value_sigD073.shapeData, var_core_value_sigD073.name).toJSON().shapeData,
      var_core_value_sigF639 = {
        ...var_core_value_sigD073.shapeData
      };
    return delete var_core_value_sigF639.adjustValues, var_core_value_sig6998.adjustValues && (var_core_value_sigF639.adjustValues = var_core_value_sig6998.adjustValues), {
      ...var_core_value_sigD073,
      'shapeData': var_core_value_sigF639
    };
  } catch {
    return var_core_value_sigD073;
  }
}
;
function A(var_core_value_sig2278) {
  var_core_value_sig2278 && Object.entries(var_core_value_sig2278.elements).forEach(([var_core_value_sigEAE5, var_core_value_sigE94C]) => {
    var_core_value_sig2278.elements[var_core_value_sigEAE5] = Fe(var_core_value_sigE94C);
  });
}
;
function Fe(var_core_value_sig7053) {
  return var_core_value_sig7053.type === "shape" ? Pe(var_core_value_sig7053) : var_core_value_sig7053;
}
;
function Ie(var_core_value_sig52F1) {
  return Object.values(var_core_value_sig52F1.slides).forEach(A), Object.values(var_core_value_sig52F1.masterPages ?? {}).forEach(A), Object.values(var_core_value_sig52F1.layoutPages ?? {}).forEach(A), Object.values(var_core_value_sig52F1.handoutMasterPages ?? {}).forEach(A), Object.values(var_core_value_sig52F1.notesMasterPages ?? {}).forEach(A), var_core_value_sig52F1;
}
;
function Le(var_core_value_sig1E74, var_core_value_sig1E84, var_core_value_sig133B) {
  if (var_core_value_sig1E84 === "slide") return var_core_value_sig1E74.slides[var_core_value_sig133B] ?? null;
  if (var_core_value_sig1E84 === 'master') {
    var var_core_value_sig69B8;
    return ((var_core_value_sig69B8 = var_core_value_sig1E74.masterPages) == null ? undefined : var_core_value_sig69B8[var_core_value_sig133B]) ?? null;
  }
  if (var_core_value_sig1E84 === "layout") {
    var var_core_value_sig983D;
    return ((var_core_value_sig983D = var_core_value_sig1E74.layoutPages) == null ? undefined : var_core_value_sig983D[var_core_value_sig133B]) ?? null;
  }
  return null;
}
;
function Re(var_core_value_sig9A03, var_core_value_sig3363) {
  return var_core_value_sig3363 ? {
    ...var_core_value_sig9A03,
    'transform': {
      ...var_core_value_sig9A03.transform,
      'left': var_core_value_sig3363.left,
      'top': var_core_value_sig3363.top,
      'width': var_core_value_sig3363.width,
      'height': var_core_value_sig3363.height,
      'rotation': var_core_value_sig3363.angle,
      'flipX': var_core_value_sig3363.flipX,
      'flipY': var_core_value_sig3363.flipY
    }
  } : var_core_value_sig9A03;
}
;
function ze(var_core_value_sigF64A, var_core_value_sig25EC, var_core_value_sigA790) {
  let var_core_value_sig9A5E = var_core_value_sigF64A.getSnapshot();
  if (var_core_value_sig25EC.sourcePageType === "slide") {
    let var_core_value_sig6D47 = var_core_value_sigF64A.pageManager['getSlide'](var_core_value_sig25EC.subUnitId);
    if (!var_core_value_sig6D47) return false;
    let var_core_value_sigCB82 = Re(var_core_value_sig25EC.element, var_core_value_sig25EC.transform);
    return var_core_value_sig6D47.getData().elements[var_core_value_sig25EC.element['id']] ? (var_core_value_sig6D47.updateElement(var_core_value_sig25EC.element['id'], var_core_value_sigCB82), true) : (var_core_value_sig6D47.addElement(var_core_value_sigCB82, var_core_value_sigA790), true);
  }
  let var_core_value_sig01B9 = Le(var_core_value_sig9A5E, var_core_value_sig25EC.sourcePageType, var_core_value_sig25EC.subUnitId);
  if (!var_core_value_sig01B9) return false;
  let var_core_value_sigD6A9 = Fe(Re(var_core_value_sig25EC.element, var_core_value_sig25EC.transform)),
    var_core_value_sig0FCF = var_core_value_sig01B9.elements[var_core_value_sigD6A9.id];
  if (var_core_value_sig01B9.elements = {
    ...var_core_value_sig01B9.elements,
    [var_core_value_sigD6A9.id]: var_core_value_sigD6A9
  }, !var_core_value_sig0FCF) {
    let var_core_value_sigCF4E = [...var_core_value_sig01B9.elementOrder],
      var_core_value_sig6CAD = var_core_value_sigA790 === undefined ? var_core_value_sigCF4E.length : Math.max(0, Math.min(var_core_value_sigA790, var_core_value_sigCF4E.length));
    var_core_value_sigCF4E.splice(var_core_value_sig6CAD, 0, var_core_value_sigD6A9.id), var_core_value_sig01B9.elementOrder = var_core_value_sigCF4E;
  }
  return true;
}
;
function Be(var_core_value_sigCF96, var_core_value_sigC4E9, var_core_value_sigF612, var_core_value_sigAA6C) {
  let var_core_value_sig8BFA = Fe(Re(var_core_value_sigF612, var_core_value_sigAA6C));
  if (var_core_value_sigC4E9.sourcePageType === 'slide') {
    let var_core_value_sig8CF5 = var_core_value_sigCF96.pageManager["getSlide"](var_core_value_sigC4E9.subUnitId);
    return var_core_value_sig8CF5 ? (var_core_value_sig8CF5.updateElement(var_core_value_sigC4E9.element['id'], var_core_value_sig8BFA), true) : false;
  }
  let var_core_value_sig236B = Le(var_core_value_sigCF96.getSnapshot(), var_core_value_sigC4E9.sourcePageType, var_core_value_sigC4E9.subUnitId);
  return !var_core_value_sig236B || !var_core_value_sig236B.elements[var_core_value_sigC4E9.element['id']] ? false : (var_core_value_sig236B.elements = {
    ...var_core_value_sig236B.elements,
    [var_core_value_sigC4E9.element['id']]: var_core_value_sig8BFA
  }, true);
}
;
function Ve(var_core_value_sig1951, var_core_value_sigFEA0) {
  if (var_core_value_sigFEA0.sourcePageType === "slide") {
    let var_core_value_sigDDD7 = var_core_value_sig1951.pageManager['getSlide'](var_core_value_sigFEA0.subUnitId);
    return var_core_value_sigDDD7 ? (var_core_value_sigDDD7.removeElement(var_core_value_sigFEA0.element['id']), true) : false;
  }
  let var_core_value_sig931A = Le(var_core_value_sig1951.getSnapshot(), var_core_value_sigFEA0.sourcePageType, var_core_value_sigFEA0.subUnitId);
  if (!var_core_value_sig931A || !var_core_value_sig931A.elements[var_core_value_sigFEA0.element['id']]) return false;
  let var_core_value_sigEE7D = {
    ...var_core_value_sig931A.elements
  };
  return delete var_core_value_sigEE7D[var_core_value_sigFEA0.element['id']], var_core_value_sig931A.elements = var_core_value_sigEE7D, var_core_value_sig931A.elementOrder = var_core_value_sig931A.elementOrder["filter"](var_core_value_sigB2CE => var_core_value_sigB2CE !== var_core_value_sigFEA0.element['id']), true;
}
const j = {
    'id': 'slide.mutation.add-slide-element',
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig3585, var_core_value_sig31A8) => {
      let {
          unitId: var_core_value_sigA4DA,
          subUnitId: var_core_value_sig6FC0,
          sourcePageType: var_core_value_sig4FAE = 'slide',
          insertIndex: var_core_value_sig6217,
          nameBase: var_core_value_sigB805
        } = var_core_value_sig31A8,
        var_core_value_sig1FCC = var_core_value_sig3585.get(e.IUniverInstanceService).getUnit(var_core_value_sigA4DA, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig1FCC) return false;
      let var_core_value_sigB7F9 = var_core_value_sig3585.get(E),
        var_core_value_sigB1A2 = var_core_value_sig1FCC.pageManager["getSlide"](var_core_value_sig6FC0),
        var_core_value_sig526D = T(var_core_value_sigA4DA, var_core_value_sig6FC0, Oe(var_core_value_sig31A8.element, Object.values((var_core_value_sigB1A2 == null ? undefined : var_core_value_sigB1A2.getData().elements) ?? {}), {
          'nameBase': var_core_value_sigB805
        }), var_core_value_sig4FAE);
      if (ze(var_core_value_sig1FCC, var_core_value_sig526D, var_core_value_sig6217), var_core_value_sig4FAE === 'slide' && O(var_core_value_sigB7F9, var_core_value_sig1FCC, var_core_value_sigA4DA, var_core_value_sig6FC0)) return true;
      if (var_core_value_sig4FAE === "master" || var_core_value_sig4FAE === "layout") return k(var_core_value_sigB7F9, var_core_value_sig1FCC, var_core_value_sigA4DA, var_core_value_sig6FC0), true;
      let var_core_value_sigBDB5 = var_core_value_sigB7F9.getBatchAddOp([var_core_value_sig526D]);
      var_core_value_sigB7F9.applyJson1(var_core_value_sigA4DA, var_core_value_sig6FC0, var_core_value_sigBDB5.redo);
      let var_core_value_sig59CE = (var_core_value_sigBDB5 == null ? undefined : var_core_value_sigBDB5.objects) ?? [];
      return var_core_value_sig59CE.length > 0 ? (var_core_value_sigB7F9.addNotification(var_core_value_sig59CE), true) : false;
    }
  },
  He = "suppressedPlaceholderKeys";
function Ue(var_core_value_sig3AD7) {
  return Array.isArray(var_core_value_sig3AD7) ? var_core_value_sig3AD7.filter(var_core_value_sig443C => typeof var_core_value_sig443C == 'string') : [];
}
;
function We(var_core_value_sig04E4) {
  switch (var_core_value_sig04E4) {
    case "centerTitle":
      return "title";
    case "subtitle":
      return "body";
    default:
      return var_core_value_sig04E4;
  }
}
;
function Ge(var_core_value_sigD8F0) {
  return var_core_value_sigD8F0.type, var_core_value_sigD8F0.placeholder;
}
;
function Ke(var_core_value_sig1475) {
  let var_core_value_sig08B7 = Ge(var_core_value_sig1475);
  if (!var_core_value_sig08B7) return false;
  switch (var_core_value_sig08B7.type) {
    case "header":
    case "footer":
    case 'date':
    case "slideNumber":
      return false;
    default:
      return true;
  }
}
;
function M(var_core_value_sig2008) {
  let var_core_value_sig496B = Ge(var_core_value_sig2008);
  if (var_core_value_sig496B != null && var_core_value_sig496B.type) return We(var_core_value_sig496B.type) + '::' + (var_core_value_sig496B.index ?? "__default__");
}
;
function qe(var_core_value_sig7161) {
  let var_core_value_sig2AB8 = var_core_value_sig7161.custom,
    var_core_value_sig3FCF = [...Ue(var_core_value_sig2AB8 == null ? undefined : var_core_value_sig2AB8.pptxAbsentPlaceholderKeys), ...Ue(var_core_value_sig2AB8 == null ? undefined : var_core_value_sig2AB8[He])];
  return new Set(var_core_value_sig3FCF);
}
;
function Je(var_core_value_sig675A, var_core_value_sig837F) {
  if (!Ke(var_core_value_sig675A)) return false;
  let var_core_value_sig9D6E = M(var_core_value_sig675A);
  return !!var_core_value_sig9D6E && var_core_value_sig837F.has(var_core_value_sig9D6E);
}
;
function Ye(var_core_value_sigB205, var_core_value_sigBF78, var_core_value_sig8AF3) {
  let var_core_value_sigA0CC = {
      ...(var_core_value_sigB205 ?? {})
    },
    var_core_value_sigB3A1 = new Set(Ue(var_core_value_sigA0CC[He]));
  return var_core_value_sig8AF3 ? var_core_value_sigB3A1.add(var_core_value_sigBF78) : var_core_value_sigB3A1.delete(var_core_value_sigBF78), var_core_value_sigB3A1.size > 0 ? var_core_value_sigA0CC[He] = Array.from(var_core_value_sigB3A1) : delete var_core_value_sigA0CC[He], Object.keys(var_core_value_sigA0CC).length > 0 ? var_core_value_sigA0CC : undefined;
}
const N = {
  'id': "slide.mutation.remove-slide-element",
  'type': e.CommandType["MUTATION"],
  'handler': (var_core_value_sig1FB9, var_core_value_sig53A9) => {
    let {
        unitId: var_core_value_sigDACD,
        subUnitId: var_core_value_sig691E,
        drawingId: var_core_value_sigD6D6
      } = var_core_value_sig53A9,
      var_core_value_sig0347 = var_core_value_sig1FB9.get(E),
      var_core_value_sig52A3 = var_core_value_sig1FB9.get(e.IUniverInstanceService).getUnit(var_core_value_sigDACD, e.UniverInstanceType['UNIVER_SLIDE']);
    if (!var_core_value_sig52A3) return false;
    let var_core_value_sigAD91 = var_core_value_sig52A3.pageManager["getSlide"](var_core_value_sig691E),
      var_core_value_sigF64E = var_core_value_sigAD91 == null ? undefined : var_core_value_sigAD91.getData().elements[var_core_value_sigD6D6],
      var_core_value_sig9B3D = var_core_value_sig0347.getDrawingByParam({
        'unitId': var_core_value_sigDACD,
        'subUnitId': var_core_value_sig691E,
        'drawingId': var_core_value_sigD6D6
      }) ?? (var_core_value_sigF64E ? T(var_core_value_sigDACD, var_core_value_sig691E, var_core_value_sigF64E, "slide") : null);
    if (!var_core_value_sig9B3D) return false;
    let var_core_value_sigB217 = M(var_core_value_sig9B3D.element);
    if (var_core_value_sig9B3D.sourcePageType !== 'slide' && var_core_value_sigB217 && Ke(var_core_value_sig9B3D.element)) return var_core_value_sigAD91 ? (var_core_value_sigAD91.updatePageData({
      'custom': Ye(var_core_value_sigAD91.getData().custom, var_core_value_sigB217, true)
    }), O(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigDACD, var_core_value_sig691E)) : false;
    let var_core_value_sig1FE6 = var_core_value_sig0347.getDrawingData(var_core_value_sigDACD, var_core_value_sig691E),
      var_core_value_sig2471 = _e(var_core_value_sig1FE6, var_core_value_sig0347.getDrawingOrder(var_core_value_sigDACD, var_core_value_sig691E), [var_core_value_sigD6D6]).map(var_core_value_sig39B1 => var_core_value_sig1FE6[var_core_value_sig39B1]).filter(var_core_value_sig210D => !!var_core_value_sig210D);
    if (var_core_value_sig2471.length === 0 && var_core_value_sig2471.push(var_core_value_sig9B3D), var_core_value_sig2471.forEach(var_core_value_sigB4B4 => {
      Ve(var_core_value_sig52A3, var_core_value_sigB4B4);
    }), var_core_value_sig9B3D.sourcePageType === "slide" && O(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigDACD, var_core_value_sig691E)) return true;
    if (var_core_value_sig9B3D.sourcePageType === "master" || var_core_value_sig9B3D.sourcePageType === "layout") return k(var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigDACD, var_core_value_sig691E), true;
    let var_core_value_sigD1FC = var_core_value_sig0347.getBatchRemoveOp([{
      'unitId': var_core_value_sigDACD,
      'subUnitId': var_core_value_sig691E,
      'drawingId': var_core_value_sigD6D6
    }]);
    return var_core_value_sig0347.applyJson1(var_core_value_sigDACD, var_core_value_sig691E, var_core_value_sigD1FC.redo), var_core_value_sig0347.removeNotification(var_core_value_sigD1FC.objects ?? []), true;
  }
};
function P(var_core_value_sigE2F9, var_core_value_sigD689 = {}) {
  let {
      unitId: var_core_value_sig7AE3,
      subUnitId: var_core_value_sig1EB3
    } = var_core_value_sigD689,
    var_core_value_sigE120 = var_core_value_sig7AE3 ? var_core_value_sigE2F9.getUnit(var_core_value_sig7AE3, e.UniverInstanceType['UNIVER_SLIDE']) : var_core_value_sigE2F9.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_SLIDE"]);
  if (!var_core_value_sigE120) return null;
  let var_core_value_sigD6E7 = var_core_value_sigE120.pageManager,
    var_core_value_sig3669 = var_core_value_sig1EB3 ? var_core_value_sigD6E7.getSlide(var_core_value_sig1EB3) : var_core_value_sigD6E7.getActiveSlide();
  return var_core_value_sig3669 ? {
    'presentation': var_core_value_sigE120,
    'slide': var_core_value_sig3669,
    'unitId': var_core_value_sigE120.getUnitId(),
    'subUnitId': var_core_value_sig3669.getId()
  } : null;
}
const Xe = {
    'id': "slide.command.add-element",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig5CBC, var_core_value_sig20BE) => {
      if (!var_core_value_sig20BE) return false;
      let var_core_value_sig6BD0 = P(var_core_value_sig5CBC.get(e.IUniverInstanceService), var_core_value_sig20BE);
      if (!var_core_value_sig6BD0) return false;
      let var_core_value_sig8C15 = var_core_value_sig5CBC.get(e.ICommandService),
        var_core_value_sig6DF7 = var_core_value_sig5CBC.get(e.IUndoRedoService),
        var_core_value_sigB411 = var_core_value_sig5CBC.get(E),
        {
          unitId: var_core_value_sigA81B,
          subUnitId: var_core_value_sigFE8D
        } = var_core_value_sig6BD0,
        {
          sourcePageType: var_core_value_sig84C8 = "slide",
          insertIndex: var_core_value_sig8595,
          focus: var_core_value_sigF8DE,
          nameBase: var_core_value_sigFE76
        } = var_core_value_sig20BE,
        var_core_value_sig80C0 = var_core_value_sig6BD0.presentation["pageManager"].getSlide(var_core_value_sigFE8D),
        var_core_value_sig22B4 = Oe(var_core_value_sig20BE.element, Object.values((var_core_value_sig80C0 == null ? undefined : var_core_value_sig80C0.getData().elements) ?? {}), {
          'nameBase': var_core_value_sigFE76
        }),
        var_core_value_sigBB37 = {
          'unitId': var_core_value_sigA81B,
          'subUnitId': var_core_value_sigFE8D,
          'element': var_core_value_sig22B4,
          'nameBase': var_core_value_sigFE76,
          'sourcePageType': var_core_value_sig84C8,
          'insertIndex': var_core_value_sig8595
        },
        var_core_value_sig0C51 = {
          'unitId': var_core_value_sigA81B,
          'subUnitId': var_core_value_sigFE8D,
          'drawingId': var_core_value_sig22B4.id,
          'elementType': var_core_value_sig22B4.type
        };
      return var_core_value_sig8C15.syncExecuteCommand(j.id, var_core_value_sigBB37) ? (var_core_value_sigF8DE && var_core_value_sigB411.focusDrawing([{
        'unitId': var_core_value_sigA81B,
        'subUnitId': var_core_value_sigFE8D,
        'drawingId': var_core_value_sig22B4.id
      }]), var_core_value_sig6DF7.pushUndoRedo({
        'unitID': var_core_value_sigA81B,
        'undoMutations': [{
          'id': N.id,
          'params': var_core_value_sig0C51
        }],
        'redoMutations': [{
          'id': j.id,
          'params': var_core_value_sigBB37
        }]
      }), true) : false;
    }
  },
  F = {
    'id': "slide.mutation.add-slide-page",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sigADA4, var_core_value_sig0E48) => {
      let {
          unitId: var_core_value_sig495B,
          slide: var_core_value_sig310C,
          insertIndex: var_core_value_sig759E,
          setActive: var_core_value_sig6C80
        } = var_core_value_sig0E48,
        var_core_value_sig6B99 = var_core_value_sigADA4.get(e.IUniverInstanceService),
        var_core_value_sig6ADC = var_core_value_sigADA4.get(E),
        var_core_value_sig41AD = var_core_value_sig6B99.getUnit(var_core_value_sig495B, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig41AD) return false;
      let {
        data: var_core_value_sigDBC2,
        order: var_core_value_sig7739
      } = D(var_core_value_sig41AD, var_core_value_sig41AD.pageManager["createSlide"](var_core_value_sig310C, var_core_value_sig759E));
      if (var_core_value_sig6ADC.drawingManagerData[var_core_value_sig495B] || (var_core_value_sig6ADC.drawingManagerData[var_core_value_sig495B] = {}), var_core_value_sig6ADC.drawingManagerData[var_core_value_sig495B][var_core_value_sig310C.id] = {
        'data': var_core_value_sigDBC2,
        'order': var_core_value_sig7739
      }, var_core_value_sig7739.length > 0) {
        let var_core_value_sigD407 = var_core_value_sig7739.map(var_core_value_sigE92A => ({
          'unitId': var_core_value_sig495B,
          'subUnitId': var_core_value_sig310C.id,
          'drawingId': var_core_value_sigE92A
        }));
        var_core_value_sig6ADC.addNotification(var_core_value_sigD407);
      }
      return var_core_value_sig6C80 && var_core_value_sig41AD.pageManager['setActiveSlide'](var_core_value_sig310C.id), true;
    }
  },
  I = {
    'id': 'slide.mutation.remove-slide-page',
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sig4040, var_core_value_sig1AAA) => {
      var var_core_value_sig58DB;
      let {
          unitId: var_core_value_sig4840,
          subUnitId: var_core_value_sigB76D,
          nextActiveSlideId: var_core_value_sig1015
        } = var_core_value_sig1AAA,
        var_core_value_sig6223 = var_core_value_sig4040.get(e.IUniverInstanceService),
        var_core_value_sigC6B6 = var_core_value_sig4040.get(E),
        var_core_value_sig498A = var_core_value_sig6223.getUnit(var_core_value_sig4840, e.UniverInstanceType["UNIVER_SLIDE"]);
      return var_core_value_sig498A ? (var_core_value_sig498A.pageManager["deleteSlide"](var_core_value_sigB76D), (var_core_value_sig58DB = var_core_value_sigC6B6.drawingManagerData[var_core_value_sig4840]) != null && var_core_value_sig58DB[var_core_value_sigB76D] && (var_core_value_sigC6B6.setDrawingData(var_core_value_sig4840, var_core_value_sigB76D, {}), var_core_value_sigC6B6.setDrawingOrder(var_core_value_sig4840, var_core_value_sigB76D, [])), var_core_value_sig1015 && var_core_value_sig498A.pageManager['setActiveSlide'](var_core_value_sig1015), true) : false;
    }
  },
  Ze = {
    'id': "slide.command.add-page",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sigEF45, var_core_value_sig36FE) => {
      if (!var_core_value_sig36FE) return false;
      let {
          unitId: var_core_value_sig3AF5,
          slide: var_core_value_sig14E6,
          insertIndex: var_core_value_sig8690,
          setActive: var_core_value_sigDF29 = true
        } = var_core_value_sig36FE,
        var_core_value_sigC0F8 = var_core_value_sigEF45.get(e.IUniverInstanceService).getUnit(var_core_value_sig3AF5, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sigC0F8) return false;
      let var_core_value_sig3C75 = var_core_value_sigC0F8.pageManager["resolveSlidePageReferences"](var_core_value_sig14E6, var_core_value_sig8690);
      if (!var_core_value_sig3C75) return false;
      let var_core_value_sig992D = var_core_value_sigEF45.get(e.ICommandService),
        var_core_value_sigE4E4 = var_core_value_sigEF45.get(e.IUndoRedoService),
        var_core_value_sigA4B0 = {
          'unitId': var_core_value_sig3AF5,
          'slide': var_core_value_sig3C75,
          'insertIndex': var_core_value_sig8690,
          'setActive': var_core_value_sigDF29
        },
        var_core_value_sig5F50 = {
          'unitId': var_core_value_sig3AF5,
          'subUnitId': var_core_value_sig3C75.id
        };
      return var_core_value_sig992D.syncExecuteCommand(F.id, var_core_value_sigA4B0) ? (var_core_value_sigE4E4.pushUndoRedo({
        'unitID': var_core_value_sig3AF5,
        'undoMutations': [{
          'id': I.id,
          'params': var_core_value_sig5F50
        }],
        'redoMutations': [{
          'id': F.id,
          'params': var_core_value_sigA4B0
        }]
      }), true) : false;
    }
  };
function Qe(var_core_value_sig4494, var_core_value_sigFFAF) {
  let var_core_value_sig478B = (var_core_value_sigFFAF % 360 + 360) % 360;
  if (var_core_value_sig478B >= 315 || var_core_value_sig478B < 45 || var_core_value_sig478B >= 135 && var_core_value_sig478B < 225) return var_core_value_sig4494;
  let var_core_value_sig1E21 = var_core_value_sig4494.left + var_core_value_sig4494.width / 2,
    var_core_value_sig9DBF = var_core_value_sig4494.top + var_core_value_sig4494.height / 2;
  return {
    'left': var_core_value_sig1E21 - var_core_value_sig4494.height / 2,
    'top': var_core_value_sig9DBF - var_core_value_sig4494.width / 2,
    'width': var_core_value_sig4494.height,
    'height': var_core_value_sig4494.width
  };
}
;
function $e(var_core_value_sig36CC) {
  let var_core_value_sigA568 = var_core_value_sig36CC.transform,
    var_core_value_sigD22D = var_core_value_sig36CC.element['transform'],
    var_core_value_sig85D5 = {
      'left': (var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.left) ?? var_core_value_sigD22D.left ?? 0,
      'top': (var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.top) ?? var_core_value_sigD22D.top ?? 0,
      'width': (var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.width) ?? var_core_value_sigD22D.width ?? 0,
      'height': (var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.height) ?? var_core_value_sigD22D.height ?? 0
    },
    var_core_value_sig5D2E = var_core_value_sig36CC.element["type"];
  return var_core_value_sig5D2E !== "shape" && var_core_value_sig5D2E !== "group" ? var_core_value_sig85D5 : Qe(var_core_value_sig85D5, (var_core_value_sigA568 == null ? undefined : var_core_value_sigA568.angle) ?? var_core_value_sigD22D.rotation ?? 0);
}
;
function et(var_core_value_sig7221) {
  var var_core_value_sig0A5A;
  return ((var_core_value_sig0A5A = var_core_value_sig7221[0]) == null ? undefined : var_core_value_sig0A5A.sourcePageType) ?? 'slide';
}
;
function tt(var_core_value_sigE6D6) {
  let var_core_value_sig8507 = var_core_value_sigE6D6.groupBaseBound;
  if (var_core_value_sig8507) return var_core_value_sig8507;
  let var_core_value_sig8A7F = var_core_value_sigE6D6.element["custom"];
  return var_core_value_sig8A7F == null ? undefined : var_core_value_sig8A7F.groupBaseBound;
}
;
function nt(var_core_value_sig9E81, var_core_value_sig8295, var_core_value_sigA975, var_core_value_sig1263, var_core_value_sig457C, var_core_value_sigA4E6) {
  let var_core_value_sig934F = var_core_value_sigA4E6.flatMap(var_core_value_sig63F3 => {
    let var_core_value_sig6A71 = var_core_value_sig457C[var_core_value_sig63F3];
    if (!var_core_value_sig6A71 || var_core_value_sig6A71.element["type"] !== "group") return [];
    let var_core_value_sig3BF6 = var_core_value_sig6A71.transform || {
        'width': 0,
        'height': 0
      },
      var_core_value_sig38CE = tt(var_core_value_sig6A71),
      var_core_value_sig62B7 = var_core_value_sig3BF6.width && var_core_value_sig3BF6.width > 0 ? var_core_value_sig3BF6.width : (var_core_value_sig38CE == null ? undefined : var_core_value_sig38CE.width) ?? 0,
      var_core_value_sig37A8 = var_core_value_sig3BF6.height && var_core_value_sig3BF6.height > 0 ? var_core_value_sig3BF6.height : (var_core_value_sig38CE == null ? undefined : var_core_value_sig38CE.height) ?? 0;
    return var_core_value_sig6A71.element["children"].map(var_core_value_sig362B => var_core_value_sig457C[var_core_value_sig362B]).filter(var_core_value_sig5CA5 => !!var_core_value_sig5CA5).map(var_core_value_sigE90F => {
      let var_core_value_sigEFD4 = (0, r.transformObjectOutOfGroup)(var_core_value_sigE90F.transform || {
          'left': 0,
          'top': 0
        }, var_core_value_sig3BF6, var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sig38CE),
        var_core_value_sig861B = var_core_value_sigE90F.element["transform"],
        var_core_value_sig5237 = {
          ...var_core_value_sigE90F.element,
          'transform': {
            ...var_core_value_sig861B,
            'left': var_core_value_sigEFD4.left,
            'top': var_core_value_sigEFD4.top,
            'width': var_core_value_sigEFD4.width,
            'height': var_core_value_sigEFD4.height,
            'rotation': var_core_value_sigEFD4.angle,
            'flipX': var_core_value_sigEFD4.flipX,
            'flipY': var_core_value_sigEFD4.flipY
          }
        };
      return {
        ...var_core_value_sigE90F,
        'element': var_core_value_sig5237,
        'transform': {
          ...(var_core_value_sigE90F.transform || {
            'left': 0,
            'top': 0
          }),
          ...var_core_value_sigEFD4
        },
        'groupId': undefined
      };
    });
  });
  if (!var_core_value_sig934F.length) return true;
  for (let var_core_value_sigA90D of var_core_value_sig934F) if (!Be(var_core_value_sig9E81, var_core_value_sigA90D, var_core_value_sigA90D.element, var_core_value_sigA90D.transform)) return false;
  let var_core_value_sig74A7 = var_core_value_sig8295.getBatchUpdateOp(var_core_value_sig934F);
  return var_core_value_sig8295.applyJson1(var_core_value_sigA975, var_core_value_sig1263, var_core_value_sig74A7.redo), var_core_value_sig8295.updateNotification(var_core_value_sig74A7.objects), true;
}
const rt = {
    'id': 'slide.mutation.set-group',
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig3685, var_core_value_sigC621) => {
      var var_core_value_sig86D7;
      let {
          unitId: var_core_value_sig431B,
          subUnitId: var_core_value_sig5C7C
        } = var_core_value_sigC621,
        var_core_value_sig87E2 = Array.from(new Set(var_core_value_sigC621.drawingIds));
      if (var_core_value_sig87E2.length < 2) return false;
      let var_core_value_sig2E04 = var_core_value_sig3685.get(E),
        var_core_value_sig2EDD = var_core_value_sig3685.get(e.IUniverInstanceService).getUnit(var_core_value_sig431B, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sig2EDD) return false;
      let var_core_value_sig27D2 = var_core_value_sig2E04.getDrawingData(var_core_value_sig431B, var_core_value_sig5C7C),
        var_core_value_sig355D = var_core_value_sig87E2.map(var_core_value_sig7A3C => var_core_value_sig27D2[var_core_value_sig7A3C]).filter(var_core_value_sig0511 => !!var_core_value_sig0511);
      if (var_core_value_sig355D.length < 2) return false;
      let var_core_value_sig8B21 = new Set(["shape", "image", 'group']);
      if (!var_core_value_sig355D.every(var_core_value_sig1F44 => var_core_value_sig8B21.has(var_core_value_sig1F44.element["type"]))) return false;
      let var_core_value_sigEB36 = et(var_core_value_sig355D),
        var_core_value_sig5C27 = var_core_value_sigC621.groupId ?? (0, e.generateRandomId)(6),
        var_core_value_sigD494 = var_core_value_sig355D.reduce((var_core_value_sigCB04, var_core_value_sig947E) => {
          let var_core_value_sig4545 = $e(var_core_value_sig947E);
          return var_core_value_sigCB04.left = Math.min(var_core_value_sigCB04.left, var_core_value_sig4545.left), var_core_value_sigCB04.top = Math.min(var_core_value_sigCB04.top, var_core_value_sig4545.top), var_core_value_sigCB04.right = Math.max(var_core_value_sigCB04.right, var_core_value_sig4545.left + var_core_value_sig4545.width), var_core_value_sigCB04.bottom = Math.max(var_core_value_sigCB04.bottom, var_core_value_sig4545.top + var_core_value_sig4545.height), var_core_value_sigCB04;
        }, {
          'left': 1 / 0,
          'top': 1 / 0,
          'right': -1 / 0,
          'bottom': -1 / 0
        });
      if (!Number.isFinite(var_core_value_sigD494.left) || !Number.isFinite(var_core_value_sigD494.top) || !Number.isFinite(var_core_value_sigD494.right) || !Number.isFinite(var_core_value_sigD494.bottom)) return false;
      let var_core_value_sigBF6D = {
          'left': var_core_value_sigD494.left,
          'top': var_core_value_sigD494.top,
          'width': Math.max(1, var_core_value_sigD494.right - var_core_value_sigD494.left),
          'height': Math.max(1, var_core_value_sigD494.bottom - var_core_value_sigD494.top)
        },
        var_core_value_sigD051 = T(var_core_value_sig431B, var_core_value_sig5C7C, Oe({
          'id': var_core_value_sig5C27,
          'type': 'group',
          'transform': {
            'left': var_core_value_sigBF6D.left,
            'top': var_core_value_sigBF6D.top,
            'width': var_core_value_sigBF6D.width,
            'height': var_core_value_sigBF6D.height,
            'rotation': 0,
            'flipX': false,
            'flipY': false
          },
          'children': var_core_value_sig87E2,
          'custom': {
            'groupBaseBound': var_core_value_sigBF6D,
            'groupBaseBoundIsLocal': true
          }
        }, Object.values(((var_core_value_sig86D7 = var_core_value_sig2EDD.pageManager["getSlide"](var_core_value_sig5C7C)) == null ? undefined : var_core_value_sig86D7.getData().elements) ?? {})), var_core_value_sigEB36);
      if (!ze(var_core_value_sig2EDD, var_core_value_sigD051)) return false;
      let var_core_value_sig16D9 = var_core_value_sig2E04.getBatchAddOp([var_core_value_sigD051]);
      var_core_value_sig2E04.applyJson1(var_core_value_sig431B, var_core_value_sig5C7C, var_core_value_sig16D9.redo), var_core_value_sig2E04.addNotification(var_core_value_sig16D9.objects ?? []);
      let var_core_value_sigF378 = var_core_value_sig2E04.getDrawingOrder(var_core_value_sig431B, var_core_value_sig5C7C),
        var_core_value_sig5F6C = new Set(var_core_value_sig87E2),
        var_core_value_sig7E85 = [],
        var_core_value_sigF204 = false;
      var_core_value_sigF378.forEach(var_core_value_sigF39A => {
        if (var_core_value_sigF39A !== var_core_value_sig5C27) {
          if (var_core_value_sig5F6C.has(var_core_value_sigF39A)) {
            var_core_value_sigF204 ||= (var_core_value_sig7E85.push(var_core_value_sig5C27), true);
            return;
          }
          var_core_value_sig7E85.push(var_core_value_sigF39A);
        }
      }), var_core_value_sigF204 || var_core_value_sig7E85.push(var_core_value_sig5C27), var_core_value_sig7E85.includes(var_core_value_sig5C27) || var_core_value_sig7E85.push(var_core_value_sig5C27);
      let var_core_value_sig7A15 = var_core_value_sig2EDD.pageManager["getSlide"](var_core_value_sig5C7C);
      return var_core_value_sig7A15 && var_core_value_sig7A15.setElementOrder(var_core_value_sig7E85), var_core_value_sig2E04.setDrawingOrder(var_core_value_sig431B, var_core_value_sig5C7C, var_core_value_sig7E85), var_core_value_sig2E04.orderNotification({
        'unitId': var_core_value_sig431B,
        'subUnitId': var_core_value_sig5C7C,
        'drawingIds': var_core_value_sig7E85
      }), var_core_value_sig2E04.focusDrawing([{
        'unitId': var_core_value_sig431B,
        'subUnitId': var_core_value_sig5C7C,
        'drawingId': var_core_value_sig5C27
      }]), true;
    }
  },
  it = {
    'id': "slide.mutation.cancel-group",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sigEEA6, var_core_value_sigEAE1) => {
      var var_core_value_sigC69F;
      let {
        unitId: var_core_value_sig0442,
        subUnitId: var_core_value_sig697A,
        drawingIds: var_core_value_sigDB65
      } = var_core_value_sigEAE1;
      if (!var_core_value_sigDB65.length) return false;
      let var_core_value_sig045E = var_core_value_sigEEA6.get(E),
        var_core_value_sig4524 = var_core_value_sigEEA6.get(e.IUniverInstanceService).getUnit(var_core_value_sig0442, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sig4524) return false;
      let var_core_value_sig64D5 = var_core_value_sig045E.getDrawingData(var_core_value_sig0442, var_core_value_sig697A),
        var_core_value_sig9678 = var_core_value_sigDB65.filter(var_core_value_sigF79C => {
          var var_core_value_sig2E54;
          return ((var_core_value_sig2E54 = var_core_value_sig64D5[var_core_value_sigF79C]) == null ? undefined : var_core_value_sig2E54.element["type"]) === "group";
        });
      if (!var_core_value_sig9678.length) return false;
      let var_core_value_sig5E74 = var_core_value_sig045E.getDrawingOrder(var_core_value_sig0442, var_core_value_sig697A),
        var_core_value_sig75FC = new Set(var_core_value_sig9678),
        var_core_value_sig639A = [],
        var_core_value_sig567C = new Set(),
        var_core_value_sig825F = var_core_value_sig7658 => {
          var_core_value_sig567C.has(var_core_value_sig7658) || (var_core_value_sig567C.add(var_core_value_sig7658), var_core_value_sig639A.push(var_core_value_sig7658));
        };
      if (!nt(var_core_value_sig4524, var_core_value_sig045E, var_core_value_sig0442, var_core_value_sig697A, var_core_value_sig64D5, var_core_value_sig9678)) return false;
      var_core_value_sig5E74.forEach(var_core_value_sigDCF5 => {
        let var_core_value_sigC786 = var_core_value_sig64D5[var_core_value_sigDCF5];
        if (!var_core_value_sigC786 || var_core_value_sigC786.element["type"] !== "group" || !var_core_value_sig75FC.has(var_core_value_sigDCF5)) {
          var_core_value_sig825F(var_core_value_sigDCF5);
          return;
        }
        var_core_value_sigC786.element["children"].forEach(var_core_value_sigBB00 => {
          var_core_value_sig64D5[var_core_value_sigBB00] && var_core_value_sig825F(var_core_value_sigBB00);
        });
      }), var_core_value_sig9678.map(var_core_value_sigC0D9 => var_core_value_sig64D5[var_core_value_sigC0D9]).filter(var_core_value_sigF051 => !!var_core_value_sigF051).forEach(var_core_value_sig5825 => {
        Ve(var_core_value_sig4524, var_core_value_sig5825);
      });
      let var_core_value_sig546D = var_core_value_sig9678.map(var_core_value_sig4EB7 => ({
          'unitId': var_core_value_sig0442,
          'subUnitId': var_core_value_sig697A,
          'drawingId': var_core_value_sig4EB7
        })),
        var_core_value_sig8078 = (var_core_value_sigC69F = var_core_value_sig045E.removeDrawingsWithoutGroupExpansion) == null ? undefined : var_core_value_sigC69F.bind(var_core_value_sig045E);
      if (var_core_value_sig8078) var_core_value_sig8078(var_core_value_sig546D);else {
        let var_core_value_sig73AF = var_core_value_sig045E.getBatchRemoveOp(var_core_value_sig546D);
        var_core_value_sig045E.applyJson1(var_core_value_sig0442, var_core_value_sig697A, var_core_value_sig73AF.redo);
      }
      var_core_value_sig045E.removeNotification(var_core_value_sig546D);
      let var_core_value_sigDCED = var_core_value_sig4524.pageManager["getSlide"](var_core_value_sig697A);
      return var_core_value_sigDCED && var_core_value_sigDCED.setElementOrder(var_core_value_sig639A), var_core_value_sig045E.setDrawingOrder(var_core_value_sig0442, var_core_value_sig697A, var_core_value_sig639A), var_core_value_sig045E.orderNotification({
        'unitId': var_core_value_sig0442,
        'subUnitId': var_core_value_sig697A,
        'drawingIds': var_core_value_sig639A
      }), var_core_value_sig045E.focusDrawing([]), true;
    }
  },
  at = {
    'id': "slide.command.convert-smart-art-to-shapes",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sig2829, var_core_value_sig6EE2) => {
      if (!var_core_value_sig6EE2) return false;
      let var_core_value_sig4CCC = P(var_core_value_sig2829.get(e.IUniverInstanceService), var_core_value_sig6EE2);
      if (!var_core_value_sig4CCC) return false;
      let var_core_value_sig6E47 = var_core_value_sig2829.get(E),
        var_core_value_sigB64D = var_core_value_sig6E47.getDrawingByParam({
          'unitId': var_core_value_sig4CCC.unitId,
          'subUnitId': var_core_value_sig4CCC.subUnitId,
          'drawingId': var_core_value_sig6EE2.drawingId
        });
      if (!var_core_value_sigB64D || var_core_value_sigB64D.sourcePageType !== "slide" || var_core_value_sigB64D.element["type"] !== "shape") return false;
      let var_core_value_sig2407 = var_core_value_sigB64D.element,
        var_core_value_sigE4D0 = var_core_value_sig2407.shapeData;
      if (!(0, n.isSmartArtShapeData)(var_core_value_sigE4D0)) return false;
      let var_core_value_sigD5F1 = (0, n.convertSmartArtToShapes)(var_core_value_sigE4D0.smartArt),
        var_core_value_sigBC19 = var_core_value_sig6EE2.childIds ?? var_core_value_sigD5F1.map(() => (0, e.generateRandomId)(6)),
        var_core_value_sig4F3C = var_core_value_sig6EE2.groupId ?? (var_core_value_sigD5F1.length > 1 ? (0, e.generateRandomId)(6) : undefined);
      if (var_core_value_sigBC19.length === 0 || var_core_value_sigD5F1.length !== var_core_value_sigBC19.length || new Set(var_core_value_sigBC19).size !== var_core_value_sigBC19.length) return false;
      let var_core_value_sig8D44 = var_core_value_sig2407.transform,
        var_core_value_sig1660 = var_core_value_sigD5F1.map((var_core_value_sig548A, var_core_value_sigE026) => {
          var var_core_value_sig339E;
          return {
            'id': var_core_value_sigBC19[var_core_value_sigE026],
            'type': 'shape',
            'name': (var_core_value_sig339E = var_core_value_sigE4D0.smartArt["presentationShapes"][var_core_value_sig548A.id]) == null ? undefined : var_core_value_sig339E.name,
            'transform': st(var_core_value_sig8D44, var_core_value_sig548A.transform),
            'shapeData': var_core_value_sig548A.shapeData
          };
        }),
        var_core_value_sigEE7B = var_core_value_sig6E47.getDrawingOrder(var_core_value_sig4CCC.unitId, var_core_value_sig4CCC.subUnitId),
        var_core_value_sig44DF = Math.max(0, var_core_value_sigEE7B.indexOf(var_core_value_sig6EE2.drawingId)),
        {
          redoMutations: var_core_value_sig7E48,
          undoMutations: var_core_value_sig7B9E
        } = ot({
          'unitId': var_core_value_sig4CCC.unitId,
          'subUnitId': var_core_value_sig4CCC.subUnitId,
          'sourceDrawingId': var_core_value_sig6EE2.drawingId,
          'sourceElement': var_core_value_sigB64D.element,
          'childElements': var_core_value_sig1660,
          'childIds': var_core_value_sigBC19,
          'groupId': var_core_value_sig4F3C,
          'insertIndex': var_core_value_sig44DF
        });
      return (0, e.sequenceExecute)(var_core_value_sig7E48, var_core_value_sig2829.get(e.ICommandService)).result ? (var_core_value_sig2829.get(e.IUndoRedoService).pushUndoRedo({
        'unitID': var_core_value_sig4CCC.unitId,
        'undoMutations': var_core_value_sig7B9E,
        'redoMutations': var_core_value_sig7E48
      }), true) : false;
    }
  };
function ot(var_core_value_sig5C3B) {
  let var_core_value_sig4002 = var_core_value_sig5C3B.childElements["map"]((var_core_value_sig7550, var_core_value_sig2983) => ({
    'id': j.id,
    'params': {
      'unitId': var_core_value_sig5C3B.unitId,
      'subUnitId': var_core_value_sig5C3B.subUnitId,
      'element': var_core_value_sig7550,
      'sourcePageType': "slide",
      'insertIndex': var_core_value_sig5C3B.insertIndex + var_core_value_sig2983
    }
  }));
  return var_core_value_sig5C3B.groupId && var_core_value_sig5C3B.childElements["length"] > 1 && var_core_value_sig4002.push({
    'id': rt.id,
    'params': {
      'unitId': var_core_value_sig5C3B.unitId,
      'subUnitId': var_core_value_sig5C3B.subUnitId,
      'drawingIds': var_core_value_sig5C3B.childIds,
      'groupId': var_core_value_sig5C3B.groupId
    }
  }), var_core_value_sig4002.push({
    'id': N.id,
    'params': {
      'unitId': var_core_value_sig5C3B.unitId,
      'subUnitId': var_core_value_sig5C3B.subUnitId,
      'drawingId': var_core_value_sig5C3B.sourceDrawingId,
      'elementType': var_core_value_sig5C3B.sourceElement["type"]
    }
  }), {
    'redoMutations': var_core_value_sig4002,
    'undoMutations': [{
      'id': N.id,
      'params': {
        'unitId': var_core_value_sig5C3B.unitId,
        'subUnitId': var_core_value_sig5C3B.subUnitId,
        'drawingId': var_core_value_sig5C3B.groupId ?? var_core_value_sig5C3B.childIds[0],
        'elementType': var_core_value_sig5C3B.groupId ? "group" : var_core_value_sig5C3B.childElements[0].type
      }
    }, {
      'id': j.id,
      'params': {
        'unitId': var_core_value_sig5C3B.unitId,
        'subUnitId': var_core_value_sig5C3B.subUnitId,
        'element': var_core_value_sig5C3B.sourceElement,
        'sourcePageType': "slide",
        'insertIndex': var_core_value_sig5C3B.insertIndex
      }
    }]
  };
}
;
function st(var_core_value_sig4153, var_core_value_sig2825) {
  let var_core_value_sig5FD0 = var_core_value_sig4153.width ?? 0,
    var_core_value_sigA7E3 = var_core_value_sig4153.height ?? 0,
    var_core_value_sigA784 = var_core_value_sig2825.width,
    var_core_value_sig4406 = var_core_value_sig2825.height,
    var_core_value_sig6806 = var_core_value_sig2825.left + var_core_value_sigA784 / 2,
    var_core_value_sigD4AA = var_core_value_sig2825.top + var_core_value_sig4406 / 2;
  var_core_value_sig4153.flipX && (var_core_value_sig6806 = var_core_value_sig5FD0 - var_core_value_sig6806), var_core_value_sig4153.flipY && (var_core_value_sigD4AA = var_core_value_sigA7E3 - var_core_value_sigD4AA);
  let var_core_value_sigDC41 = var_core_value_sig4153.rotation ?? 0,
    var_core_value_sigFB47 = var_core_value_sigDC41 * Math.PI / 180,
    var_core_value_sig9B3D1 = var_core_value_sig6806 - var_core_value_sig5FD0 / 2,
    var_core_value_sigC1CF = var_core_value_sigD4AA - var_core_value_sigA7E3 / 2,
    var_core_value_sigEE12 = var_core_value_sig9B3D1 * Math.cos(var_core_value_sigFB47) - var_core_value_sigC1CF * Math.sin(var_core_value_sigFB47),
    var_core_value_sigD70C = var_core_value_sig9B3D1 * Math.sin(var_core_value_sigFB47) + var_core_value_sigC1CF * Math.cos(var_core_value_sigFB47),
    var_core_value_sigF047 = (var_core_value_sig4153.flipX === var_core_value_sig4153.flipY ? 1 : -1) * (var_core_value_sig2825.rotation ?? 0);
  return {
    'left': (var_core_value_sig4153.left ?? 0) + var_core_value_sig5FD0 / 2 + var_core_value_sigEE12 - var_core_value_sigA784 / 2,
    'top': (var_core_value_sig4153.top ?? 0) + var_core_value_sigA7E3 / 2 + var_core_value_sigD70C - var_core_value_sig4406 / 2,
    'width': var_core_value_sigA784,
    'height': var_core_value_sig4406,
    'rotation': var_core_value_sigDC41 + var_core_value_sigF047,
    'flipX': !!var_core_value_sig4153.flipX != !!var_core_value_sig2825.flipX,
    'flipY': !!var_core_value_sig4153.flipY != !!var_core_value_sig2825.flipY
  };
}
const ct = {
    'id': "slide.command.create-slide-by-layout",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sigC2F9, var_core_value_sig1F51) => {
      if (!var_core_value_sig1F51) return false;
      let {
          unitId: var_core_value_sig29F5,
          layoutType: var_core_value_sig5A51,
          insertIndex: var_core_value_sigF1D1
        } = var_core_value_sig1F51,
        var_core_value_sig370E = var_core_value_sigC2F9.get(e.IUniverInstanceService),
        var_core_value_sigDE14 = var_core_value_sigC2F9.get(e.ICommandService),
        var_core_value_sig02CB = var_core_value_sigC2F9.get(e.IUndoRedoService),
        var_core_value_sig6CBB = var_core_value_sig370E.getUnit(var_core_value_sig29F5, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig6CBB) return false;
      var_core_value_sig6CBB.pageManager['ensureDefaultLayers']();
      let var_core_value_sig68DA = var_core_value_sigF1D1;
      if (var_core_value_sig68DA === undefined) {
        var var_core_value_sig64D8;
        let var_core_value_sigE1B0 = (var_core_value_sig64D8 = var_core_value_sig6CBB.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig64D8.getId();
        if (var_core_value_sigE1B0) {
          let var_core_value_sig7E54 = var_core_value_sig6CBB.pageManager['getSlides']().map(var_core_value_sig2AD0 => var_core_value_sig2AD0.getId()).indexOf(var_core_value_sigE1B0);
          var_core_value_sig7E54 !== -1 && (var_core_value_sig68DA = var_core_value_sig7E54 + 1);
        }
      }
      let var_core_value_sigD755 = ae({
          'layoutType': var_core_value_sig5A51
        }),
        var_core_value_sigF897 = {
          'unitId': var_core_value_sig29F5,
          'slide': var_core_value_sigD755,
          'insertIndex': var_core_value_sig68DA,
          'setActive': true
        },
        var_core_value_sigA578 = {
          'unitId': var_core_value_sig29F5,
          'subUnitId': var_core_value_sigD755.id
        };
      return var_core_value_sigDE14.syncExecuteCommand(F.id, var_core_value_sigF897) ? (var_core_value_sig02CB.pushUndoRedo({
        'unitID': var_core_value_sig29F5,
        'undoMutations': [{
          'id': I.id,
          'params': var_core_value_sigA578
        }],
        'redoMutations': [{
          'id': F.id,
          'params': var_core_value_sigF897
        }]
      }), true) : false;
    }
  },
  L = {
    'id': "slide.mutation.move-slide-page",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sig0260, var_core_value_sig034D) => {
      let {
          unitId: var_core_value_sig89EC,
          subUnitId: var_core_value_sig9975,
          toIndex: var_core_value_sigD6D9
        } = var_core_value_sig034D,
        var_core_value_sig2637 = var_core_value_sig0260.get(e.IUniverInstanceService).getUnit(var_core_value_sig89EC, e.UniverInstanceType["UNIVER_SLIDE"]);
      return var_core_value_sig2637 ? (var_core_value_sig2637.pageManager['moveSlide'](var_core_value_sig9975, var_core_value_sigD6D9), true) : false;
    }
  },
  lt = {
    'id': "slide.command.move-page",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sigAF1D, var_core_value_sigC92D) => {
      if (!var_core_value_sigC92D) return false;
      let var_core_value_sigEA3D = P(var_core_value_sigAF1D.get(e.IUniverInstanceService), var_core_value_sigC92D);
      if (!var_core_value_sigEA3D) return false;
      let var_core_value_sig2841 = var_core_value_sigAF1D.get(e.ICommandService),
        var_core_value_sig9FE1 = var_core_value_sigAF1D.get(e.IUndoRedoService),
        {
          presentation: var_core_value_sig9DAA,
          unitId: var_core_value_sig1F8A,
          subUnitId: var_core_value_sigEBB4
        } = var_core_value_sigEA3D,
        {
          toIndex: var_core_value_sig2B74
        } = var_core_value_sigC92D,
        var_core_value_sig0483 = var_core_value_sig9DAA.getSnapshot().slideOrder['indexOf'](var_core_value_sigEBB4);
      if (var_core_value_sig0483 === -1 || var_core_value_sig0483 === var_core_value_sig2B74) return false;
      let var_core_value_sig4A48 = {
          'unitId': var_core_value_sig1F8A,
          'subUnitId': var_core_value_sigEBB4,
          'toIndex': var_core_value_sig2B74
        },
        var_core_value_sigD170 = {
          'unitId': var_core_value_sig1F8A,
          'subUnitId': var_core_value_sigEBB4,
          'toIndex': var_core_value_sig0483
        };
      return var_core_value_sig2841.syncExecuteCommand(L.id, var_core_value_sig4A48) ? (var_core_value_sig9FE1.pushUndoRedo({
        'unitID': var_core_value_sig1F8A,
        'undoMutations': [{
          'id': L.id,
          'params': var_core_value_sigD170
        }],
        'redoMutations': [{
          'id': L.id,
          'params': var_core_value_sig4A48
        }]
      }), true) : false;
    }
  },
  ut = {
    'id': 'slide.mutation.set-slide-placeholder-suppression',
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig90E5, var_core_value_sig7000) => {
      let {
          unitId: var_core_value_sigD7C5,
          subUnitId: var_core_value_sig3633,
          placeholderKey: var_core_value_sig1DF5,
          suppressed: var_core_value_sig90A3
        } = var_core_value_sig7000,
        var_core_value_sig28BE = var_core_value_sig90E5.get(E),
        var_core_value_sig0224 = var_core_value_sig90E5.get(e.IUniverInstanceService).getUnit(var_core_value_sigD7C5, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig0224) return false;
      let var_core_value_sig854B = var_core_value_sig0224.pageManager["getSlide"](var_core_value_sig3633);
      return var_core_value_sig854B ? (var_core_value_sig854B.updatePageData({
        'custom': Ye(var_core_value_sig854B.getData().custom, var_core_value_sig1DF5, var_core_value_sig90A3)
      }), O(var_core_value_sig28BE, var_core_value_sig0224, var_core_value_sigD7C5, var_core_value_sig3633)) : false;
    }
  };
function dt(var_core_value_sig1FF6) {
  if (!(var_core_value_sig1FF6.sourcePageType === "slide" || !Ke(var_core_value_sig1FF6.element))) return M(var_core_value_sig1FF6.element);
}
;
function ft(var_core_value_sig4B27, var_core_value_sig3A41, var_core_value_sig269A, var_core_value_sigBF53) {
  return var_core_value_sig4B27.getDrawingByParam({
    'unitId': var_core_value_sig3A41,
    'subUnitId': var_core_value_sig269A,
    'drawingId': var_core_value_sigBF53
  });
}
;
function pt(var_core_value_sigD9BB, var_core_value_sigF549) {
  let var_core_value_sigC125 = var_core_value_sigD9BB.getDrawingData(var_core_value_sigF549.unitId, var_core_value_sigF549.subUnitId),
    var_core_value_sigB63D = var_core_value_sigD9BB.getDrawingOrder(var_core_value_sigF549.unitId, var_core_value_sigF549.subUnitId),
    var_core_value_sig8255 = new Set();
  return var_core_value_sigF549.drawingIds['forEach'](var_core_value_sigD4FF => {
    ge(var_core_value_sigC125, var_core_value_sigD4FF, var_core_value_sigB63D).forEach(var_core_value_sig9A8D => var_core_value_sig8255.add(var_core_value_sig9A8D));
  }), var_core_value_sigF549.drawingIds["filter"](var_core_value_sig1E5B => !var_core_value_sig8255.has(var_core_value_sig1E5B)).map(var_core_value_sigB680 => ft(var_core_value_sigD9BB, var_core_value_sigF549.unitId, var_core_value_sigF549.subUnitId, var_core_value_sigB680)).filter(var_core_value_sig1F64 => !!var_core_value_sig1F64);
}
;
function mt(var_core_value_sigBFC7, var_core_value_sig933F) {
  let var_core_value_sig29DE = var_core_value_sigBFC7.getDrawingData(var_core_value_sig933F.unitId, var_core_value_sig933F.subUnitId),
    var_core_value_sig4AFB = var_core_value_sigBFC7.getDrawingOrder(var_core_value_sig933F.unitId, var_core_value_sig933F.subUnitId),
    var_core_value_sigC7EA = _e(var_core_value_sig29DE, var_core_value_sig4AFB, var_core_value_sig933F.drawingIds),
    var_core_value_sigDAB9 = var_core_value_sigC7EA.length > 0 ? var_core_value_sigC7EA : var_core_value_sig933F.drawingIds,
    var_core_value_sig9CF7 = var_core_value_sigC7EA.length > var_core_value_sig933F.drawingIds["length"],
    var_core_value_sigCCE5 = new Map();
  return var_core_value_sig4AFB.forEach((var_core_value_sigDD1C, var_core_value_sig2C39) => var_core_value_sigCCE5.set(var_core_value_sigDD1C, var_core_value_sig2C39)), var_core_value_sigDAB9.map(var_core_value_sigB7D1 => {
    let var_core_value_sig64F0 = var_core_value_sig29DE[var_core_value_sigB7D1] ?? ft(var_core_value_sigBFC7, var_core_value_sig933F.unitId, var_core_value_sig933F.subUnitId, var_core_value_sigB7D1);
    return var_core_value_sig64F0 ? {
      'drawing': var_core_value_sig64F0,
      'insertIndex': var_core_value_sig9CF7 ? var_core_value_sigCCE5.get(var_core_value_sigB7D1) : undefined
    } : null;
  }).filter(var_core_value_sig85B1 => !!var_core_value_sig85B1);
}
const ht = {
    'id': 'slide.command.remove-element',
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig5933, var_core_value_sig884B) => {
      if (!var_core_value_sig884B || var_core_value_sig884B.drawingIds["length"] === 0) return false;
      let var_core_value_sig4E30 = P(var_core_value_sig5933.get(e.IUniverInstanceService), var_core_value_sig884B);
      if (!var_core_value_sig4E30) return false;
      let var_core_value_sig9730 = var_core_value_sig5933.get(e.ICommandService),
        var_core_value_sig8E4A = var_core_value_sig5933.get(e.IUndoRedoService),
        var_core_value_sig300B = var_core_value_sig5933.get(E),
        {
          unitId: var_core_value_sig8457,
          subUnitId: var_core_value_sigB30D
        } = var_core_value_sig4E30,
        var_core_value_sigDB33 = {
          ...var_core_value_sig884B,
          'unitId': var_core_value_sig8457,
          'subUnitId': var_core_value_sigB30D
        },
        var_core_value_sig6C8C = pt(var_core_value_sig300B, var_core_value_sigDB33),
        var_core_value_sig7A5E = mt(var_core_value_sig300B, var_core_value_sigDB33);
      if (!var_core_value_sig6C8C.length || !var_core_value_sig7A5E.length) return false;
      let var_core_value_sig838E = [],
        var_core_value_sig9A5B = [];
      return var_core_value_sig6C8C.forEach(var_core_value_sig3141 => {
        let var_core_value_sig2162 = dt(var_core_value_sig3141);
        if (var_core_value_sig2162) {
          let var_core_value_sigC259 = {
            'unitId': var_core_value_sig8457,
            'subUnitId': var_core_value_sigB30D,
            'placeholderKey': var_core_value_sig2162,
            'suppressed': true
          };
          var_core_value_sig838E.push({
            'id': ut.id,
            'params': var_core_value_sigC259
          });
        } else {
          let var_core_value_sig9C9F = {
            'unitId': var_core_value_sig8457,
            'subUnitId': var_core_value_sigB30D,
            'drawingId': var_core_value_sig3141.drawingId,
            'elementType': var_core_value_sig3141.element['type']
          };
          var_core_value_sig838E.push({
            'id': N.id,
            'params': var_core_value_sig9C9F
          });
        }
      }), var_core_value_sig7A5E.forEach(({
        drawing: var_core_value_sig2EAD,
        insertIndex: var_core_value_sig6774
      }) => {
        let var_core_value_sig340D = dt(var_core_value_sig2EAD);
        if (var_core_value_sig340D) {
          let var_core_value_sigFDEA = {
            'unitId': var_core_value_sig8457,
            'subUnitId': var_core_value_sigB30D,
            'placeholderKey': var_core_value_sig340D,
            'suppressed': false
          };
          var_core_value_sig9A5B.push({
            'id': ut.id,
            'params': var_core_value_sigFDEA
          });
        } else {
          let var_core_value_sig86D0 = {
            'unitId': var_core_value_sig8457,
            'subUnitId': var_core_value_sigB30D,
            'element': var_core_value_sig2EAD.element,
            'sourcePageType': var_core_value_sig2EAD.sourcePageType,
            ...(var_core_value_sig6774 === undefined ? {} : {
              'insertIndex': var_core_value_sig6774
            })
          };
          var_core_value_sig9A5B.push({
            'id': j.id,
            'params': var_core_value_sig86D0
          });
        }
      }), (0, e.sequenceExecute)(var_core_value_sig838E, var_core_value_sig9730).result ? (var_core_value_sig8E4A.pushUndoRedo({
        'unitID': var_core_value_sig8457,
        'undoMutations': var_core_value_sig9A5B,
        'redoMutations': var_core_value_sig838E
      }), true) : false;
    }
  },
  gt = {
    'id': 'slide.command.remove-page',
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sigC860, var_core_value_sigE64C) => {
      if (!var_core_value_sigE64C) return false;
      let var_core_value_sigF39B = P(var_core_value_sigC860.get(e.IUniverInstanceService), var_core_value_sigE64C);
      if (!var_core_value_sigF39B) return false;
      let var_core_value_sig9B88 = var_core_value_sigC860.get(e.ICommandService),
        var_core_value_sig992A = var_core_value_sigC860.get(e.IUndoRedoService),
        {
          presentation: var_core_value_sig6281,
          slide: var_core_value_sig9B01,
          unitId: var_core_value_sigA724,
          subUnitId: var_core_value_sig385E
        } = var_core_value_sigF39B,
        var_core_value_sig10D3 = var_core_value_sig6281.getSnapshot().slideOrder,
        var_core_value_sig41F2 = var_core_value_sig10D3.indexOf(var_core_value_sig385E),
        var_core_value_sig32DD = var_core_value_sig6281.pageManager['getActiveSlide'](),
        var_core_value_sig7A88 = var_core_value_sig32DD == null ? undefined : var_core_value_sig32DD.getId(),
        var_core_value_sig6CFC = var_core_value_sig7A88 === var_core_value_sig385E,
        var_core_value_sig3EC0 = {
          'unitId': var_core_value_sigA724,
          'subUnitId': var_core_value_sig385E,
          'nextActiveSlideId': var_core_value_sig6CFC ? var_core_value_sig10D3[var_core_value_sig41F2 + 1] ?? var_core_value_sig10D3[var_core_value_sig41F2 - 1] : var_core_value_sig7A88
        },
        var_core_value_sigEA69 = {
          'unitId': var_core_value_sigA724,
          'slide': var_core_value_sig9B01.getData(),
          'insertIndex': var_core_value_sig41F2,
          'setActive': var_core_value_sig6CFC
        };
      return var_core_value_sig9B88.syncExecuteCommand(I.id, var_core_value_sig3EC0) ? (var_core_value_sig992A.pushUndoRedo({
        'unitID': var_core_value_sigA724,
        'undoMutations': [{
          'id': F.id,
          'params': var_core_value_sigEA69
        }],
        'redoMutations': [{
          'id': I.id,
          'params': var_core_value_sig3EC0
        }]
      }), true) : false;
    }
  };
function _t(var_core_value_sigF42A, var_core_value_sig898E) {
  let var_core_value_sigC481 = new Set(var_core_value_sigF42A),
    var_core_value_sig27B7 = new Set(),
    var_core_value_sig2DAD = [];
  for (let var_core_value_sig82D4 of [...var_core_value_sig898E, ...var_core_value_sigF42A]) var_core_value_sigC481.has(var_core_value_sig82D4) && !var_core_value_sig27B7.has(var_core_value_sig82D4) && (var_core_value_sig27B7.add(var_core_value_sig82D4), var_core_value_sig2DAD.push(var_core_value_sig82D4));
  return var_core_value_sig2DAD;
}
const R = {
    'id': "slide.mutation.set-element-order",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig00DE, var_core_value_sigEF7C) => {
      let {
          unitId: var_core_value_sig07E7,
          subUnitId: var_core_value_sig6005,
          drawingIds: var_core_value_sig25A4
        } = var_core_value_sigEF7C,
        var_core_value_sigB591 = var_core_value_sig00DE.get(e.IUniverInstanceService),
        var_core_value_sigB272 = var_core_value_sig00DE.get(E),
        var_core_value_sig6F52 = var_core_value_sigB591.getUnit(var_core_value_sig07E7, e.UniverInstanceType['UNIVER_SLIDE']),
        var_core_value_sig09C4 = var_core_value_sig6F52 == null ? undefined : var_core_value_sig6F52.pageManager['getSlide'](var_core_value_sig6005);
      if (!var_core_value_sig09C4 || !var_core_value_sig6F52) return false;
      let var_core_value_sig8E3E = _t(var_core_value_sig09C4.getData().elementOrder, var_core_value_sig25A4);
      var_core_value_sig09C4.setElementOrder(var_core_value_sig8E3E);
      let var_core_value_sigC3D3 = D(var_core_value_sig6F52, var_core_value_sig09C4);
      return var_core_value_sigB272.setDrawingData(var_core_value_sig07E7, var_core_value_sig6005, var_core_value_sigC3D3.data), var_core_value_sigB272.setDrawingOrder(var_core_value_sig07E7, var_core_value_sig6005, var_core_value_sigC3D3.order), var_core_value_sigB272.orderNotification({
        'unitId': var_core_value_sig07E7,
        'subUnitId': var_core_value_sig6005,
        'drawingIds': var_core_value_sigC3D3.order
      }), true;
    }
  },
  vt = {
    'id': "slide.command.reorder-elements",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sig1451, var_core_value_sigAD57) => {
      if (!var_core_value_sigAD57 || var_core_value_sigAD57.drawingIds['length'] === 0) return false;
      let var_core_value_sig58A8 = P(var_core_value_sig1451.get(e.IUniverInstanceService), var_core_value_sigAD57);
      if (!var_core_value_sig58A8) return false;
      let {
          slide: var_core_value_sigEC1A,
          unitId: var_core_value_sigBDED,
          subUnitId: var_core_value_sig4BFF
        } = var_core_value_sig58A8,
        var_core_value_sig40E7 = _t(var_core_value_sigEC1A.getData().elementOrder, var_core_value_sigAD57.drawingIds),
        var_core_value_sigEDBA = var_core_value_sig1451.get(e.ICommandService),
        var_core_value_sigE863 = var_core_value_sig1451.get(e.IUndoRedoService),
        var_core_value_sig04B4 = [...var_core_value_sigEC1A.getData().elementOrder],
        var_core_value_sig1C07 = {
          'unitId': var_core_value_sigBDED,
          'subUnitId': var_core_value_sig4BFF,
          'drawingIds': var_core_value_sig40E7
        },
        var_core_value_sig93D6 = {
          'unitId': var_core_value_sigBDED,
          'subUnitId': var_core_value_sig4BFF,
          'drawingIds': [...var_core_value_sig04B4]
        };
      return var_core_value_sigEDBA.syncExecuteCommand(R.id, var_core_value_sig1C07) ? (var_core_value_sigE863.pushUndoRedo({
        'unitID': var_core_value_sigBDED,
        'undoMutations': [{
          'id': R.id,
          'params': var_core_value_sig93D6
        }],
        'redoMutations': [{
          'id': R.id,
          'params': var_core_value_sig1C07
        }]
      }), true) : false;
    }
  },
  z = {
    'id': "slide.mutation.set-active-slide",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sigDD05, var_core_value_sig3932) => {
      if (!var_core_value_sig3932) return false;
      let var_core_value_sig48B2 = var_core_value_sigDD05.get(e.IUniverInstanceService).getUnit(var_core_value_sig3932.unitId, e.UniverInstanceType["UNIVER_SLIDE"]);
      return var_core_value_sig48B2 ? (var_core_value_sig48B2.pageManager["setActiveSlide"](var_core_value_sig3932.subUnitId), true) : false;
    }
  },
  yt = {
    'id': "slide.command.set-active-slide",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig57DF, var_core_value_sigC985) => {
      var var_core_value_sig8DA6;
      if (!var_core_value_sigC985) return false;
      let var_core_value_sigCA69 = P(var_core_value_sig57DF.get(e.IUniverInstanceService), var_core_value_sigC985);
      if (!var_core_value_sigCA69) return false;
      let {
          presentation: var_core_value_sigB77C,
          unitId: var_core_value_sig9AFF,
          subUnitId: var_core_value_sig3545
        } = var_core_value_sigCA69,
        var_core_value_sig5EE4 = (var_core_value_sig8DA6 = var_core_value_sigB77C.pageManager["getActiveSlide"]()) == null ? undefined : var_core_value_sig8DA6.getId();
      if (!var_core_value_sig5EE4) return false;
      let var_core_value_sig7EAB = var_core_value_sig57DF.get(e.ICommandService),
        var_core_value_sig56B9 = var_core_value_sig57DF.get(e.IUndoRedoService),
        var_core_value_sig90CF = {
          'unitId': var_core_value_sig9AFF,
          'subUnitId': var_core_value_sig3545
        },
        var_core_value_sigA386 = {
          'unitId': var_core_value_sig9AFF,
          'subUnitId': var_core_value_sig5EE4
        };
      return var_core_value_sig7EAB.syncExecuteCommand(z.id, var_core_value_sig90CF) ? (var_core_value_sig56B9.pushUndoRedo({
        'unitID': var_core_value_sig9AFF,
        'undoMutations': [{
          'id': z.id,
          'params': var_core_value_sigA386
        }],
        'redoMutations': [{
          'id': z.id,
          'params': var_core_value_sig90CF
        }]
      }), true) : false;
    }
  };
let bt = function (var_core_value_sigCD6E) {
    return var_core_value_sigCD6E.Cover = 'cover', var_core_value_sigCD6E.Contain = "contain", var_core_value_sigCD6E.Stretch = "stretch", var_core_value_sigCD6E.Repeat = "repeat", var_core_value_sigCD6E;
  }({}),
  xt = function (var_core_value_sigFD9D) {
    return var_core_value_sigFD9D.AllMasters = 'allMasters', var_core_value_sigFD9D.ActiveMaster = 'activeMaster', var_core_value_sigFD9D;
  }({});
function St(var_core_value_sigA2A4) {
  return {
    ...(var_core_value_sigA2A4.custom && typeof var_core_value_sigA2A4.custom == "object" ? var_core_value_sigA2A4.custom : {}),
    'fit': var_core_value_sigA2A4.fit ?? 'stretch'
  };
}
;
function B(var_core_value_sigA1AC) {
  let var_core_value_sig6180 = var_core_value_sigA1AC.custom && typeof var_core_value_sigA1AC.custom == "object" ? var_core_value_sigA1AC.custom : undefined;
  return var_core_value_sigA1AC.role === "backgroundGraphic" && var_core_value_sigA1AC.managedBy === "presentationBackground" || (var_core_value_sig6180 == null ? undefined : var_core_value_sig6180.role) === "backgroundGraphic" && (var_core_value_sig6180 == null ? undefined : var_core_value_sig6180.managedBy) === "presentationBackground";
}
;
function Ct(var_core_value_sigB93D, var_core_value_sigB17C, var_core_value_sig69B6) {
  return {
    'id': var_core_value_sigB93D.id ?? "presentation-bg-" + (var_core_value_sig69B6 + 1),
    'type': "image",
    'role': 'backgroundGraphic',
    'managedBy': "presentationBackground",
    'transform': var_core_value_sigB93D.transform ?? {
      'left': 0,
      'top': 0,
      'width': var_core_value_sigB17C.width,
      'height': var_core_value_sigB17C.height
    },
    'source': var_core_value_sigB93D.source,
    'imageSourceType': var_core_value_sigB93D.imageSourceType,
    'crop': var_core_value_sigB93D.crop,
    'custom': St(var_core_value_sigB93D)
  };
}
;
function wt(var_core_value_sig708D, var_core_value_sig1ED2, var_core_value_sig94C1) {
  let var_core_value_sigABAC = var_core_value_sig94C1.map((var_core_value_sigBDE4, var_core_value_sig7DF1) => Ct(var_core_value_sigBDE4, var_core_value_sig1ED2, var_core_value_sig7DF1)),
    var_core_value_sigFAE6 = {};
  for (let var_core_value_sigDC86 of var_core_value_sig708D.elementOrder) {
    let var_core_value_sig4CD2 = var_core_value_sig708D.elements[var_core_value_sigDC86];
    !var_core_value_sig4CD2 || B(var_core_value_sig4CD2) || (var_core_value_sigFAE6[var_core_value_sigDC86] = var_core_value_sig4CD2);
  }
  for (let var_core_value_sig0B0C of var_core_value_sigABAC) var_core_value_sigFAE6[var_core_value_sig0B0C.id] = var_core_value_sig0B0C;
  return {
    ...var_core_value_sig708D,
    'elementOrder': [...var_core_value_sigABAC.map(var_core_value_sigA39E => var_core_value_sigA39E.id), ...var_core_value_sig708D.elementOrder["filter"](var_core_value_sigBBEE => {
      let var_core_value_sig011D = var_core_value_sig708D.elements[var_core_value_sigBBEE];
      return var_core_value_sig011D && !B(var_core_value_sig011D);
    })],
    'elements': var_core_value_sigFAE6
  };
}
;
function Tt(var_core_value_sig06AC) {
  return var_core_value_sig06AC.elementOrder['map'](var_core_value_sig6167 => var_core_value_sig06AC.elements[var_core_value_sig6167]).filter(var_core_value_sig65A1 => !!var_core_value_sig65A1 && var_core_value_sig65A1.type === "image" && B(var_core_value_sig65A1)).map(var_core_value_sig7F19 => ({
    'id': var_core_value_sig7F19.id,
    'source': var_core_value_sig7F19.source,
    'imageSourceType': var_core_value_sig7F19.imageSourceType,
    'fit': var_core_value_sig7F19.custom && typeof var_core_value_sig7F19.custom == "object" && typeof var_core_value_sig7F19.custom["fit"] == "string" ? var_core_value_sig7F19.custom["fit"] : "stretch",
    'transform': var_core_value_sig7F19.transform,
    'crop': var_core_value_sig7F19.crop,
    'custom': var_core_value_sig7F19.custom
  }));
}
;
function Et(var_core_value_sig57E2, var_core_value_sig01FC = "allMasters", var_core_value_sig10FC) {
  var var_core_value_sig5374;
  if (var_core_value_sig10FC != null && var_core_value_sig10FC.length) return var_core_value_sig10FC.filter(var_core_value_sig7827 => {
    var var_core_value_sig652C;
    return !!((var_core_value_sig652C = var_core_value_sig57E2.masterPages) != null && var_core_value_sig652C[var_core_value_sig7827]);
  });
  if (var_core_value_sig01FC === 'activeMaster') {
    var var_core_value_sigB66D, var_core_value_sigD0F0;
    let var_core_value_sig7E32 = var_core_value_sig57E2.activeSlideId ?? var_core_value_sig57E2.slideOrder[0],
      var_core_value_sig4C07 = var_core_value_sig7E32 ? var_core_value_sig57E2.slides[var_core_value_sig7E32] : undefined,
      var_core_value_sig79AB = var_core_value_sig4C07 != null && var_core_value_sig4C07.layoutPageId ? (var_core_value_sigB66D = var_core_value_sig57E2.layoutPages) == null ? undefined : var_core_value_sigB66D[var_core_value_sig4C07.layoutPageId] : undefined,
      var_core_value_sig8E74 = (var_core_value_sig79AB == null ? undefined : var_core_value_sig79AB.masterPageId) ?? (var_core_value_sig4C07 == null ? undefined : var_core_value_sig4C07.masterPageId);
    return var_core_value_sig8E74 && (var_core_value_sigD0F0 = var_core_value_sig57E2.masterPages) != null && var_core_value_sigD0F0[var_core_value_sig8E74] ? [var_core_value_sig8E74] : [];
  }
  let var_core_value_sig8E31 = ((var_core_value_sig5374 = var_core_value_sig57E2.masterPageOrder) == null ? undefined : var_core_value_sig5374.filter(var_core_value_sig104C => {
    var var_core_value_sig841D;
    return !!((var_core_value_sig841D = var_core_value_sig57E2.masterPages) != null && var_core_value_sig841D[var_core_value_sig104C]);
  })) ?? [];
  return var_core_value_sig8E31.length > 0 ? var_core_value_sig8E31 : Object.keys(var_core_value_sig57E2.masterPages ?? {});
}
const Dt = {
    'id': "slide.mutation.ensure-slide-master-page",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sig8339, var_core_value_sigA01E) => {
      if (!var_core_value_sigA01E) return false;
      let var_core_value_sigA41E = var_core_value_sig8339.get(e.IUniverInstanceService).getUnit(var_core_value_sigA01E.unitId, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sigA41E) return false;
      let var_core_value_sig939C = var_core_value_sigA41E.getSnapshot();
      var_core_value_sig939C.masterPages ||= {}, var_core_value_sig939C.masterPageOrder ||= [];
      let var_core_value_sigA49E = var_core_value_sigA01E.masterPage['id'];
      return var_core_value_sig939C.masterPages[var_core_value_sigA49E] || (var_core_value_sig939C.masterPages[var_core_value_sigA49E] = var_core_value_sigA01E.masterPage), var_core_value_sig939C.masterPageOrder["includes"](var_core_value_sigA49E) || var_core_value_sig939C.masterPageOrder['push'](var_core_value_sigA49E), Object.values(var_core_value_sig939C.layoutPages ?? {}).forEach(var_core_value_sig90CB => {
        var var_core_value_sigBDF5;
        (!var_core_value_sig90CB.masterPageId || !((var_core_value_sigBDF5 = var_core_value_sig939C.masterPages) != null && var_core_value_sigBDF5[var_core_value_sig90CB.masterPageId])) && (var_core_value_sig90CB.masterPageId = var_core_value_sigA49E);
      }), Object.values(var_core_value_sig939C.slides).forEach(var_core_value_sigACC6 => {
        var var_core_value_sig1614;
        (!var_core_value_sigACC6.masterPageId || !((var_core_value_sig1614 = var_core_value_sig939C.masterPages) != null && var_core_value_sig1614[var_core_value_sigACC6.masterPageId])) && (var_core_value_sigACC6.masterPageId = var_core_value_sigA49E);
      }), true;
    }
  },
  Ot = {
    'id': "slide.mutation.set-presentation-background-graphics",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig6DEB, var_core_value_sig2F0D) => {
      let {
          unitId: var_core_value_sig5141,
          masterPageId: var_core_value_sigA9E0,
          graphics: var_core_value_sig751D
        } = var_core_value_sig2F0D,
        var_core_value_sig2E9A = var_core_value_sig6DEB.get(e.IUniverInstanceService).getUnit(var_core_value_sig5141, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sig2E9A) return false;
      let var_core_value_sigE105 = var_core_value_sig2E9A.getSnapshot(),
        var_core_value_sig0BD6 = var_core_value_sigE105.masterPages;
      return !var_core_value_sig0BD6 || !var_core_value_sig0BD6[var_core_value_sigA9E0] ? false : (var_core_value_sig0BD6[var_core_value_sigA9E0] = wt(var_core_value_sig0BD6[var_core_value_sigA9E0], var_core_value_sig0BD6[var_core_value_sigA9E0].pageSize ?? var_core_value_sigE105.defaultPageSize, var_core_value_sig751D), k(var_core_value_sig6DEB.get(E), var_core_value_sig2E9A, var_core_value_sig5141, var_core_value_sigA9E0), true);
    }
  },
  kt = {
    'id': "slide.command.set-presentation-background-graphics",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sig3070, var_core_value_sigC66D) => {
      var var_core_value_sig8EC5;
      if (!var_core_value_sigC66D) return false;
      let {
          unitId: var_core_value_sig1056,
          target: var_core_value_sig6EE5,
          masterPageIds: var_core_value_sig9DD9,
          graphics: var_core_value_sig09AC
        } = var_core_value_sigC66D,
        var_core_value_sig1613 = var_core_value_sig3070.get(e.IUniverInstanceService).getUnit(var_core_value_sig1056, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig1613) return false;
      let var_core_value_sigADC6 = var_core_value_sig3070.get(e.ICommandService),
        var_core_value_sig4620 = var_core_value_sig3070.get(e.IUndoRedoService),
        var_core_value_sig07FB = var_core_value_sig1613.getSnapshot(),
        var_core_value_sig617E = [],
        var_core_value_sigC85E = [],
        var_core_value_sig8293 = Et(var_core_value_sig07FB, var_core_value_sig6EE5, var_core_value_sig9DD9);
      if (var_core_value_sig8293.length === 0 && !((var_core_value_sig8EC5 = var_core_value_sig07FB.masterPages) != null && var_core_value_sig8EC5["master-default"])) {
        let var_core_value_sig85C3 = {
          'unitId': var_core_value_sig1056,
          'masterPage': ne
        };
        var_core_value_sig617E.push({
          'id': Dt.id,
          'params': var_core_value_sig85C3
        }), var_core_value_sig8293 = [x];
      }
      return var_core_value_sig8293.length === 0 ? false : (var_core_value_sig8293.forEach(var_core_value_sigB996 => {
        var var_core_value_sig4BBA;
        let var_core_value_sig6201 = (var_core_value_sig4BBA = var_core_value_sig07FB.masterPages) == null ? undefined : var_core_value_sig4BBA[var_core_value_sigB996],
          var_core_value_sig5151 = var_core_value_sig6201 ? Tt(var_core_value_sig6201) : [],
          var_core_value_sigB542 = {
            'unitId': var_core_value_sig1056,
            'masterPageId': var_core_value_sigB996,
            'graphics': var_core_value_sig09AC
          },
          var_core_value_sigBB6C = {
            'unitId': var_core_value_sig1056,
            'masterPageId': var_core_value_sigB996,
            'graphics': var_core_value_sig5151
          };
        var_core_value_sig617E.push({
          'id': Ot.id,
          'params': var_core_value_sigB542
        }), var_core_value_sigC85E.push({
          'id': Ot.id,
          'params': var_core_value_sigBB6C
        });
      }), (0, e.sequenceExecute)(var_core_value_sig617E, var_core_value_sigADC6).result ? (var_core_value_sig4620.pushUndoRedo({
        'unitID': var_core_value_sig1056,
        'undoMutations': var_core_value_sigC85E,
        'redoMutations': var_core_value_sig617E
      }), true) : false);
    }
  },
  At = {
    'id': 'slide.mutation.set-name',
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sig050D, var_core_value_sig37AE) => {
      let var_core_value_sig5B51 = var_core_value_sig050D.get(e.IUniverInstanceService).getUnit(var_core_value_sig37AE.unitId, e.UniverInstanceType["UNIVER_SLIDE"]);
      return var_core_value_sig5B51 ? (var_core_value_sig5B51.setName(var_core_value_sig37AE.name), true) : false;
    }
  },
  jt = {
    'id': 'slide.command.set-name',
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sig64FF, var_core_value_sig86F4) => {
      if (!var_core_value_sig86F4) return false;
      let var_core_value_sig9E0F = P(var_core_value_sig64FF.get(e.IUniverInstanceService), var_core_value_sig86F4);
      if (!var_core_value_sig9E0F) return false;
      let var_core_value_sig3A42 = var_core_value_sig64FF.get(e.ICommandService),
        var_core_value_sig8802 = var_core_value_sig64FF.get(e.IUndoRedoService),
        {
          presentation: var_core_value_sig95D5,
          unitId: var_core_value_sigE027
        } = var_core_value_sig9E0F,
        {
          name: var_core_value_sigE537
        } = var_core_value_sig86F4,
        var_core_value_sig5D84 = var_core_value_sig95D5.getSnapshot().name,
        var_core_value_sigD120 = {
          'unitId': var_core_value_sigE027,
          'name': var_core_value_sigE537
        },
        var_core_value_sigAA05 = {
          'unitId': var_core_value_sigE027,
          'name': var_core_value_sig5D84
        };
      return var_core_value_sig3A42.syncExecuteCommand(At.id, var_core_value_sigD120) ? (var_core_value_sig8802.pushUndoRedo({
        'unitID': var_core_value_sigE027,
        'redoMutations': [{
          'id': At.id,
          'params': var_core_value_sigD120
        }],
        'undoMutations': [{
          'id': At.id,
          'params': var_core_value_sigAA05
        }]
      }), true) : false;
    }
  },
  Mt = {
    'standard4By3': {
      'width': 720,
      'height': 540
    },
    'wideScreen16By9': {
      'width': 960,
      'height': 540
    },
    'wideScreen16By10': {
      'width': 864,
      'height': 540
    }
  };
function Nt(var_core_value_sigC04C) {
  return typeof var_core_value_sigC04C == "number" && Number.isFinite(var_core_value_sigC04C) && var_core_value_sigC04C > 0;
}
;
function Pt(var_core_value_sig2069) {
  if (var_core_value_sig2069 !== "custom") return Mt[var_core_value_sig2069];
}
;
function Ft(var_core_value_sig5176) {
  let var_core_value_sig71A1 = Pt(var_core_value_sig5176);
  return var_core_value_sig71A1 ? var_core_value_sig71A1.width / var_core_value_sig71A1.height : undefined;
}
;
function It(var_core_value_sig72AD) {
  let var_core_value_sig9ABE = var_core_value_sig72AD.width / var_core_value_sig72AD.height;
  for (let var_core_value_sigE2BF of ["standard4By3", 'wideScreen16By9', "wideScreen16By10"]) {
    let var_core_value_sig48CA = Ft(var_core_value_sigE2BF);
    if (var_core_value_sig48CA !== undefined && Math.abs(var_core_value_sig9ABE - var_core_value_sig48CA) < 0.000001) return var_core_value_sigE2BF;
  }
  return 'custom';
}
;
function Lt(var_core_value_sig8EF01, var_core_value_sig234B) {
  if (!var_core_value_sig234B || var_core_value_sig234B === "custom") return;
  let var_core_value_sig8169 = Ft(var_core_value_sig234B);
  if (var_core_value_sig8169 !== undefined) {
    if (Nt(var_core_value_sig8EF01.width) && var_core_value_sig8EF01.height === undefined) return {
      'width': var_core_value_sig8EF01.width,
      'height': Math.round(var_core_value_sig8EF01.width / var_core_value_sig8169)
    };
    if (Nt(var_core_value_sig8EF01.height) && var_core_value_sig8EF01.width === undefined) return {
      'width': Math.round(var_core_value_sig8EF01.height * var_core_value_sig8169),
      'height': var_core_value_sig8EF01.height
    };
  }
}
;
function Rt(var_core_value_sigC5FB) {
  let var_core_value_sig5453 = var_core_value_sigC5FB == null ? undefined : var_core_value_sigC5FB.preset;
  if (var_core_value_sigC5FB !== undefined && (var_core_value_sigC5FB.width !== undefined || var_core_value_sigC5FB.height !== undefined)) {
    if (!Nt(var_core_value_sigC5FB == null ? undefined : var_core_value_sigC5FB.width) || !Nt(var_core_value_sigC5FB == null ? undefined : var_core_value_sigC5FB.height)) {
      let var_core_value_sig50AF = var_core_value_sigC5FB ? Lt(var_core_value_sigC5FB, var_core_value_sig5453) : undefined;
      return var_core_value_sig50AF ? {
        ...var_core_value_sig50AF,
        'preset': var_core_value_sig5453
      } : undefined;
    }
    let var_core_value_sigB8C7 = {
      'width': var_core_value_sigC5FB.width,
      'height': var_core_value_sigC5FB.height
    };
    return {
      ...var_core_value_sigB8C7,
      'preset': It(var_core_value_sigB8C7)
    };
  }
  if (!var_core_value_sig5453) return;
  let var_core_value_sig8725 = Pt(var_core_value_sig5453);
  if (var_core_value_sig8725) return {
    ...var_core_value_sig8725,
    'preset': var_core_value_sig5453
  };
}
const V = {
    'id': "slide.mutation.set-slide-page-size",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig513B, var_core_value_sig5501) => {
      let {
          unitId: var_core_value_sig7784,
          pageId: var_core_value_sigB706,
          pageSize: var_core_value_sig5FD01
        } = var_core_value_sig5501,
        var_core_value_sig77E3 = var_core_value_sig513B.get(e.IUniverInstanceService).getUnit(var_core_value_sig7784, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sig77E3) return false;
      if (var_core_value_sigB706 === undefined) {
        if (var_core_value_sig5FD01 === undefined) return false;
        var_core_value_sig77E3.getSnapshot().defaultPageSize = {
          ...var_core_value_sig5FD01
        };
        let var_core_value_sigA56E = var_core_value_sig513B.get(E);
        return var_core_value_sig77E3.getSnapshot().slideOrder["forEach"](var_core_value_sigA942 => {
          O(var_core_value_sigA56E, var_core_value_sig77E3, var_core_value_sig7784, var_core_value_sigA942);
        }), true;
      }
      let var_core_value_sigB071 = var_core_value_sig77E3.pageManager["getPage"](var_core_value_sigB706);
      return var_core_value_sigB071 ? (var_core_value_sig5FD01 === undefined ? delete var_core_value_sigB071.pageSize : var_core_value_sigB071.pageSize = {
        ...var_core_value_sig5FD01
      }, k(var_core_value_sig513B.get(E), var_core_value_sig77E3, var_core_value_sig7784, var_core_value_sigB706), true) : false;
    }
  },
  zt = {
    'id': "slide.command.set-slide-page-size",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig15FE, var_core_value_sigCF47) => {
      var var_core_value_sigB0F9;
      if (!var_core_value_sigCF47) return false;
      let {
          unitId: var_core_value_sigAF12,
          pageId: var_core_value_sigC60C,
          pageSize: var_core_value_sig1C3C
        } = var_core_value_sigCF47,
        var_core_value_sig71CF = var_core_value_sig1C3C !== undefined;
      if (!var_core_value_sig71CF && var_core_value_sigC60C === undefined) return false;
      let var_core_value_sigC341 = var_core_value_sig71CF ? Rt(var_core_value_sig1C3C) : undefined;
      if (var_core_value_sig71CF && !var_core_value_sigC341) return false;
      let var_core_value_sigBA47 = var_core_value_sig15FE.get(e.IUniverInstanceService).getUnit(var_core_value_sigAF12, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sigBA47) return false;
      let var_core_value_sig3DF7 = var_core_value_sig15FE.get(e.ICommandService),
        var_core_value_sigD49F = var_core_value_sig15FE.get(e.IUndoRedoService),
        var_core_value_sigCECC = var_core_value_sigC60C ? (var_core_value_sigB0F9 = var_core_value_sigBA47.pageManager['getPage'](var_core_value_sigC60C)) == null ? undefined : var_core_value_sigB0F9.pageSize : var_core_value_sigBA47.getSnapshot().defaultPageSize,
        var_core_value_sig0F47 = {
          'unitId': var_core_value_sigAF12,
          'pageId': var_core_value_sigC60C,
          'pageSize': var_core_value_sigC341
        },
        var_core_value_sig6B29 = {
          'unitId': var_core_value_sigAF12,
          'pageId': var_core_value_sigC60C,
          'pageSize': var_core_value_sigCECC
        };
      return var_core_value_sig3DF7.syncExecuteCommand(V.id, var_core_value_sig0F47) ? (var_core_value_sigD49F.pushUndoRedo({
        'unitID': var_core_value_sigAF12,
        'undoMutations': [{
          'id': V.id,
          'params': var_core_value_sig6B29
        }],
        'redoMutations': [{
          'id': V.id,
          'params': var_core_value_sig0F47
        }]
      }), true) : false;
    }
  };
function H(var_core_value_sig28E2) {
  '@babel/helpers - typeof';

  return H = typeof Symbol == "function" && typeof Symbol.iterator == 'symbol' ? function (var_core_value_sig1998) {
    return typeof var_core_value_sig1998;
  } : function (var_core_value_sigFF19) {
    return var_core_value_sigFF19 && typeof Symbol == 'function' && var_core_value_sigFF19.constructor === Symbol && var_core_value_sigFF19 !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFF19;
  }, H(var_core_value_sig28E2);
}
;
function Bt(var_core_value_sig1578, var_core_value_sig52ED) {
  if (H(var_core_value_sig1578) != 'object' || !var_core_value_sig1578) return var_core_value_sig1578;
  var var_core_value_sig135F = var_core_value_sig1578[Symbol.toPrimitive];
  if (var_core_value_sig135F !== undefined) {
    var var_core_value_sig416D = var_core_value_sig135F.call(var_core_value_sig1578, var_core_value_sig52ED || 'default');
    if (H(var_core_value_sig416D) != "object") return var_core_value_sig416D;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig52ED === "string" ? String : Number)(var_core_value_sig1578);
}
;
function Vt(var_core_value_sigAD5D) {
  var var_core_value_sig1B8A = Bt(var_core_value_sigAD5D, 'string');
  return H(var_core_value_sig1B8A) == 'symbol' ? var_core_value_sig1B8A : var_core_value_sig1B8A + '';
}
;
function U(var_core_value_sigFB18, var_core_value_sig703C, var_core_value_sig96CF) {
  return (var_core_value_sig703C = Vt(var_core_value_sig703C)) in var_core_value_sigFB18 ? Object.defineProperty(var_core_value_sigFB18, var_core_value_sig703C, {
    'value': var_core_value_sig96CF,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sigFB18[var_core_value_sig703C] = var_core_value_sig96CF, var_core_value_sigFB18;
}
var Ht = class {
    constructor(var_core_value_sig43B8, var_core_value_sigD98F) {
      this.unitId = var_core_value_sig43B8, this.objectId = var_core_value_sigD98F, U(this, "type", i.UnitObject["SlideElement"]), U(this, "subType", i.UnitAction['Edit']), U(this, "status", e.PermissionStatus['INIT']), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig43B8 + '_' + var_core_value_sigD98F;
    }
  },
  Ut = class {
    constructor(var_core_value_sig66C0, var_core_value_sig9D15) {
      this.unitId = var_core_value_sig66C0, this.objectId = var_core_value_sig9D15, U(this, 'type', i.UnitObject['SlideMaster']), U(this, "subType", i.UnitAction["Edit"]), U(this, "status", e.PermissionStatus['INIT']), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig66C0 + '_' + var_core_value_sig9D15;
    }
  },
  Wt = class {
    constructor(var_core_value_sigB785, var_core_value_sig130F) {
      this.unitId = var_core_value_sigB785, this.objectId = var_core_value_sig130F, U(this, 'type', i.UnitObject['SlidePage']), U(this, "subType", i.UnitAction["Edit"]), U(this, "status", e.PermissionStatus["INIT"]), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigB785 + '_' + var_core_value_sig130F;
    }
  },
  Gt = class {
    constructor(var_core_value_sigC0E3) {
      this.unitId = var_core_value_sigC0E3, U(this, "type", i.UnitObject['Slide']), U(this, 'subType', i.UnitAction["Comment"]), U(this, "status", e.PermissionStatus["INIT"]), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigC0E3;
    }
  },
  Kt = class {
    constructor(var_core_value_sig52F7) {
      this.unitId = var_core_value_sig52F7, U(this, "type", i.UnitObject['Slide']), U(this, "subType", i.UnitAction["Copy"]), U(this, "status", e.PermissionStatus["INIT"]), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig52F7;
    }
  },
  qt = class {
    constructor(var_core_value_sig866F) {
      this.unitId = var_core_value_sig866F, U(this, 'type', i.UnitObject["Slide"]), U(this, "subType", i.UnitAction["Edit"]), U(this, "status", e.PermissionStatus['INIT']), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sig866F;
    }
  },
  Jt = class {
    constructor(var_core_value_sigDE3D) {
      this.unitId = var_core_value_sigDE3D, U(this, "type", i.UnitObject["Slide"]), U(this, "subType", i.UnitAction["Export"]), U(this, 'status', e.PermissionStatus["INIT"]), U(this, 'id', undefined), U(this, "value", true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigDE3D;
    }
  },
  Yt = class {
    constructor(var_core_value_sigF175) {
      this.unitId = var_core_value_sigF175, U(this, "type", i.UnitObject["Slide"]), U(this, 'subType', i.UnitAction["Print"]), U(this, "status", e.PermissionStatus["INIT"]), U(this, 'id', undefined), U(this, 'value', true), this.id = this.type + '.' + this.subType + '_' + var_core_value_sigF175;
    }
  };
const Xt = [i.UnitAction["Edit"], i.UnitAction['Copy'], i.UnitAction["Print"], i.UnitAction["Export"], i.UnitAction["Comment"]],
  Zt = new Set([i.UnitObject["Slide"], i.UnitObject["SlidePage"], i.UnitObject["SlideElement"], i.UnitObject["SlideMaster"]]),
  Qt = "page/",
  $t = "element/",
  W = "master-view";
function en(var_core_value_sig49F1) {
  return '' + Qt + encodeURIComponent(var_core_value_sig49F1);
}
;
function tn(var_core_value_sig2F7B, var_core_value_sigB0DF, var_core_value_sig2E44) {
  return '' + $t + encodeURIComponent(var_core_value_sig2F7B) + '/' + encodeURIComponent(var_core_value_sigB0DF) + '/' + encodeURIComponent(var_core_value_sig2E44);
}
;
function nn(var_core_value_sig8560, var_core_value_sig138D, var_core_value_sig1E26) {
  return [var_core_value_sig8560 === "slide" ? en(var_core_value_sig138D) : W, tn(var_core_value_sig8560, var_core_value_sig138D, var_core_value_sig1E26)];
}
;
function rn(var_core_value_sig5C6C, var_core_value_sigBE85, var_core_value_sig56DE) {
  if (var_core_value_sigBE85 === var_core_value_sig5C6C) switch (var_core_value_sig56DE) {
    case i.UnitAction['Edit']:
      return new qt(var_core_value_sig5C6C);
    case i.UnitAction['Copy']:
      return new Kt(var_core_value_sig5C6C);
    case i.UnitAction["Print"]:
      return new Yt(var_core_value_sig5C6C);
    case i.UnitAction["Export"]:
      return new Jt(var_core_value_sig5C6C);
    case i.UnitAction["Comment"]:
      return new Gt(var_core_value_sig5C6C);
    default:
      throw Error("Unsupported Slide permission action: " + var_core_value_sig56DE);
  }
  if (var_core_value_sig56DE !== i.UnitAction["Edit"]) throw Error("Slide object permissions only support Edit: " + var_core_value_sigBE85);
  if (var_core_value_sigBE85.startsWith(Qt)) return new Wt(var_core_value_sig5C6C, var_core_value_sigBE85);
  if (var_core_value_sigBE85.startsWith($t)) return new Ht(var_core_value_sig5C6C, var_core_value_sigBE85);
  if (var_core_value_sigBE85 === "master-view") return new Ut(var_core_value_sig5C6C, var_core_value_sigBE85);
  throw Error("Unsupported Slide permission object: " + var_core_value_sigBE85);
}
;
function an(var_core_value_sig0278, var_core_value_sig08A6, var_core_value_sig04E1, var_core_value_sigC504) {
  var var_core_value_sig0515;
  return ((var_core_value_sig0515 = var_core_value_sig0278.getPermissionPoint(rn(var_core_value_sig08A6, var_core_value_sig04E1, var_core_value_sigC504).id)) == null ? undefined : var_core_value_sig0515.value) ?? true;
}
;
function on(var_core_value_sig9F34, var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137, var_core_value_sig14F3) {
  let var_core_value_sig34E8 = rn(var_core_value_sig0247, var_core_value_sig6030, var_core_value_sig0137);
  var_core_value_sig9F34.getPermissionPoint(var_core_value_sig34E8.id) || var_core_value_sig9F34.addPermissionPoint(var_core_value_sig34E8), var_core_value_sig9F34.updatePermissionPoint(var_core_value_sig34E8.id, var_core_value_sig14F3);
}
;
function sn(var_core_value_sigCFE7, var_core_value_sigECBC) {
  var_core_value_sigCFE7.getAllPermissionPoint().forEach((var_core_value_sig6A18, var_core_value_sig4E3D) => {
    var_core_value_sig6A18.subscribe(var_core_value_sigA621 => {
      Zt.has(var_core_value_sigA621.type) && "unitId" in var_core_value_sigA621 && var_core_value_sigA621.unitId === var_core_value_sigECBC && var_core_value_sigCFE7.deletePermissionPoint(var_core_value_sig4E3D);
    }).unsubscribe();
  });
}
;
function cn(var_core_value_sig65D2, var_core_value_sig4306, var_core_value_sigFCD3) {
  return an(var_core_value_sig65D2, var_core_value_sig4306, var_core_value_sig4306, i.UnitAction['Edit']) && Array.from(var_core_value_sigFCD3).every(var_core_value_sig49B0 => an(var_core_value_sig65D2, var_core_value_sig4306, var_core_value_sig49B0, i.UnitAction["Edit"]));
}
const ln = {
    'type': e.CommandType["COMMAND"],
    'id': "slide.command.set-permission",
    'handler'(var_core_value_sig147A, var_core_value_sig829F) {
      return !var_core_value_sig829F || !Xt.includes(var_core_value_sig829F.action) || var_core_value_sig829F.objectId !== var_core_value_sig829F.unitId && var_core_value_sig829F.action !== i.UnitAction['Edit'] ? false : (on(var_core_value_sig147A.get(e.IPermissionService), var_core_value_sig829F.unitId, var_core_value_sig829F.objectId, var_core_value_sig829F.action, var_core_value_sig829F.value), true);
    }
  },
  un = {
    'id': "slide.mutation.set-slide-speaker-notes",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sig534C, var_core_value_sigABB7) => {
      let {
          unitId: var_core_value_sig9071,
          subUnitId: var_core_value_sig01A9,
          speakerNotes: var_core_value_sig9477
        } = var_core_value_sigABB7,
        var_core_value_sig917C = var_core_value_sig534C.get(e.IUniverInstanceService).getUnit(var_core_value_sig9071, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig917C) return false;
      let var_core_value_sig27E2 = var_core_value_sig917C.pageManager['getSlide'](var_core_value_sig01A9);
      return var_core_value_sig27E2 ? (var_core_value_sig27E2.updatePageData({
        ...var_core_value_sig27E2.getData(),
        'speakerNotes': var_core_value_sig9477
      }), true) : false;
    }
  },
  dn = {
    'id': "slide.command.set-slide-speaker-notes",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig10D7, var_core_value_sig5A1A) => {
      if (!var_core_value_sig5A1A) return false;
      let var_core_value_sig77D2 = P(var_core_value_sig10D7.get(e.IUniverInstanceService), var_core_value_sig5A1A);
      if (!var_core_value_sig77D2) return false;
      let {
          slide: var_core_value_sig625E,
          unitId: var_core_value_sig6F04,
          subUnitId: var_core_value_sig48DA
        } = var_core_value_sig77D2,
        {
          speakerNotes: var_core_value_sigD327
        } = var_core_value_sig5A1A,
        var_core_value_sig6694 = var_core_value_sig625E.getData().speakerNotes;
      if (var_core_value_sig6694 === var_core_value_sigD327) return true;
      let var_core_value_sig2A21 = var_core_value_sig10D7.get(e.ICommandService),
        var_core_value_sig0836 = var_core_value_sig10D7.get(e.IUndoRedoService),
        var_core_value_sigD95C = {
          'unitId': var_core_value_sig6F04,
          'subUnitId': var_core_value_sig48DA,
          'speakerNotes': var_core_value_sigD327
        },
        var_core_value_sig692E = {
          'unitId': var_core_value_sig6F04,
          'subUnitId': var_core_value_sig48DA,
          'speakerNotes': var_core_value_sig6694
        };
      return var_core_value_sig2A21.syncExecuteCommand(un.id, var_core_value_sigD95C) ? (var_core_value_sig0836.pushUndoRedo({
        'unitID': var_core_value_sig6F04,
        'undoMutations': [{
          'id': un.id,
          'params': var_core_value_sig692E
        }],
        'redoMutations': [{
          'id': un.id,
          'params': var_core_value_sigD95C
        }]
      }), true) : false;
    }
  };
function fn(var_core_value_sig3FAF) {
  return Array.isArray(var_core_value_sig3FAF) ? var_core_value_sig3FAF.map(var_core_value_sig2547 => fn(var_core_value_sig2547)) : !var_core_value_sig3FAF || typeof var_core_value_sig3FAF != "object" ? var_core_value_sig3FAF : Object.keys(var_core_value_sig3FAF).sort().reduce((var_core_value_sigBCA9, var_core_value_sig4CDF) => {
    let var_core_value_sig3F79 = var_core_value_sig3FAF[var_core_value_sig4CDF];
    return var_core_value_sig3F79 !== undefined && (var_core_value_sigBCA9[var_core_value_sig4CDF] = fn(var_core_value_sig3F79)), var_core_value_sigBCA9;
  }, {});
}
;
function pn(var_core_value_sig378B) {
  return JSON.stringify(fn(var_core_value_sig378B));
}
;
function mn(var_core_value_sigDE50) {
  return var_core_value_sigDE50 === 'push' || var_core_value_sigDE50 === 'wipe' || var_core_value_sigDE50 === "cover" || var_core_value_sigDE50 === "uncover" || var_core_value_sigDE50 === 'reveal' || var_core_value_sigDE50 === "split";
}
;
function hn(var_core_value_sig3094) {
  if (!var_core_value_sig3094 || var_core_value_sig3094.type === "none") return;
  let var_core_value_sig86CC = {
    ...var_core_value_sig3094,
    'duration': var_core_value_sig3094.duration ?? 700
  };
  return mn(var_core_value_sig86CC.type) || delete var_core_value_sig86CC.direction, var_core_value_sig86CC;
}
;
function gn(var_core_value_sig7868, var_core_value_sig9921) {
  let var_core_value_sig59BF = hn(var_core_value_sig9921);
  if (!var_core_value_sig59BF) return;
  let var_core_value_sigF001 = var_core_value_sig7868.transitionRecords ?? {},
    var_core_value_sigE511 = pn(var_core_value_sig59BF),
    var_core_value_sig1C81 = Object.keys(var_core_value_sigF001).find(var_core_value_sig880E => pn(hn(var_core_value_sigF001[var_core_value_sig880E])) === var_core_value_sigE511);
  if (var_core_value_sig1C81) return var_core_value_sig1C81;
  let var_core_value_sig2C6A = "transition_" + (0, e.generateRandomId)(6);
  return var_core_value_sig7868.transitionRecords = {
    ...var_core_value_sigF001,
    [var_core_value_sig2C6A]: var_core_value_sig59BF
  }, var_core_value_sig2C6A;
}
;
function _n(var_core_value_sig7207, var_core_value_sig297F) {
  var var_core_value_sigA95A, var_core_value_sig94D6;
  let var_core_value_sigC22E = (var_core_value_sigA95A = var_core_value_sig7207.slideTransitionRefs) == null ? undefined : var_core_value_sigA95A[var_core_value_sig297F];
  if (var_core_value_sigC22E) return hn((var_core_value_sig94D6 = var_core_value_sig7207.transitionRecords) == null ? undefined : var_core_value_sig94D6[var_core_value_sigC22E]);
}
;
function vn(var_core_value_sig2321) {
  let var_core_value_sigFF33 = var_core_value_sig2321.transitionRecords;
  if (!var_core_value_sigFF33) return;
  let var_core_value_sig16E0 = new Set(Object.values(var_core_value_sig2321.slideTransitionRefs ?? {})),
    var_core_value_sig213C = Object.keys(var_core_value_sigFF33).reduce((var_core_value_sigC9ED, var_core_value_sigB57B) => (var_core_value_sig16E0.has(var_core_value_sigB57B) && (var_core_value_sigC9ED[var_core_value_sigB57B] = var_core_value_sigFF33[var_core_value_sigB57B]), var_core_value_sigC9ED), {});
  var_core_value_sig2321.transitionRecords = Object.keys(var_core_value_sig213C).length ? var_core_value_sig213C : undefined;
}
;
function yn(var_core_value_sig31F8, var_core_value_sig6905) {
  var_core_value_sig31F8.transitionRecords = var_core_value_sig6905.transitionRecords && Object.keys(var_core_value_sig6905.transitionRecords).length ? var_core_value_sig6905.transitionRecords : undefined, var_core_value_sig31F8.slideTransitionRefs = var_core_value_sig6905.slideTransitionRefs && Object.keys(var_core_value_sig6905.slideTransitionRefs).length ? var_core_value_sig6905.slideTransitionRefs : undefined;
}
const bn = {
    'id': "slide.mutation.set-slide-transition",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sigC3C0, var_core_value_sig1F39) => {
      if (!var_core_value_sig1F39) return false;
      let var_core_value_sig9256 = var_core_value_sigC3C0.get(e.IUniverInstanceService).getUnit(var_core_value_sig1F39.unitId, e.UniverInstanceType["UNIVER_SLIDE"]);
      return var_core_value_sig9256 ? (yn(var_core_value_sig9256.getSnapshot(), var_core_value_sig1F39), var_core_value_sig9256.timingSystem["loadFromDocument"](var_core_value_sig9256.getSnapshot()), true) : false;
    }
  },
  xn = {
    'id': "slide.command.set-slide-transition",
    'type': e.CommandType['COMMAND'],
    'handler': (var_core_value_sig98A0, var_core_value_sig3EBD) => {
      if (!var_core_value_sig3EBD) return false;
      let {
          unitId: var_core_value_sig1AC3,
          subUnitIds: var_core_value_sig66B8,
          applyToAll: var_core_value_sig4C7F,
          transition: var_core_value_sig2543
        } = var_core_value_sig3EBD,
        var_core_value_sigB230 = var_core_value_sig98A0.get(e.IUniverInstanceService).getUnit(var_core_value_sig1AC3, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sigB230) return false;
      let var_core_value_sig407E = Sn(var_core_value_sigB230.getSnapshot(), var_core_value_sig66B8, var_core_value_sig4C7F, var_core_value_sig2543);
      if (!var_core_value_sig407E) return false;
      let var_core_value_sig88CB = var_core_value_sig98A0.get(e.ICommandService),
        var_core_value_sigD615 = var_core_value_sig98A0.get(e.IUndoRedoService),
        var_core_value_sigB708 = Cn(var_core_value_sigB230.getSnapshot()),
        var_core_value_sig60EF = {
          'unitId': var_core_value_sig1AC3,
          ...var_core_value_sig407E
        },
        var_core_value_sigA6FB = {
          'unitId': var_core_value_sig1AC3,
          ...var_core_value_sigB708
        };
      return var_core_value_sig88CB.syncExecuteCommand(bn.id, var_core_value_sig60EF) ? (var_core_value_sigD615.pushUndoRedo({
        'unitID': var_core_value_sig1AC3,
        'redoMutations': [{
          'id': bn.id,
          'params': var_core_value_sig60EF
        }],
        'undoMutations': [{
          'id': bn.id,
          'params': var_core_value_sigA6FB
        }]
      }), true) : false;
    }
  };
function Sn(var_core_value_sigD6EA, var_core_value_sigA2D3, var_core_value_sig727A, var_core_value_sig6AF1) {
  let var_core_value_sig3F6A = (var_core_value_sig727A ? var_core_value_sigD6EA.slideOrder["filter"](var_core_value_sig780B => !!var_core_value_sigD6EA.slides[var_core_value_sig780B]) : var_core_value_sigA2D3) ?? [];
  if (!var_core_value_sig3F6A.length) return null;
  let var_core_value_sig23B4 = {
      ...var_core_value_sigD6EA,
      'transitionRecords': var_core_value_sigD6EA.transitionRecords ? {
        ...var_core_value_sigD6EA.transitionRecords
      } : undefined,
      'slideTransitionRefs': var_core_value_sigD6EA.slideTransitionRefs ? {
        ...var_core_value_sigD6EA.slideTransitionRefs
      } : undefined
    },
    var_core_value_sig350C = hn(var_core_value_sig6AF1);
  if (!var_core_value_sig350C) {
    if (var_core_value_sig727A) return var_core_value_sig23B4.slideTransitionRefs = undefined, vn(var_core_value_sig23B4), Cn(var_core_value_sig23B4);
    let var_core_value_sig7D1B = {
      ...(var_core_value_sig23B4.slideTransitionRefs ?? {})
    };
    return var_core_value_sig3F6A.forEach(var_core_value_sigBBFF => delete var_core_value_sig7D1B[var_core_value_sigBBFF]), var_core_value_sig23B4.slideTransitionRefs = Object.keys(var_core_value_sig7D1B).length ? var_core_value_sig7D1B : undefined, vn(var_core_value_sig23B4), Cn(var_core_value_sig23B4);
  }
  let var_core_value_sig2335 = gn(var_core_value_sig23B4, var_core_value_sig350C);
  if (!var_core_value_sig2335) return null;
  if (var_core_value_sig727A) return var_core_value_sig23B4.slideTransitionRefs = var_core_value_sig3F6A.reduce((var_core_value_sig7BE0, var_core_value_sig7D40) => (var_core_value_sig7BE0[var_core_value_sig7D40] = var_core_value_sig2335, var_core_value_sig7BE0), {}), vn(var_core_value_sig23B4), Cn(var_core_value_sig23B4);
  let var_core_value_sig6233 = {
    ...(var_core_value_sig23B4.slideTransitionRefs ?? {})
  };
  return var_core_value_sig3F6A.forEach(var_core_value_sig6C7E => {
    var_core_value_sig6233[var_core_value_sig6C7E] = var_core_value_sig2335;
  }), var_core_value_sig23B4.slideTransitionRefs = var_core_value_sig6233, vn(var_core_value_sig23B4), Cn(var_core_value_sig23B4);
}
;
function Cn(var_core_value_sig4230) {
  return {
    'transitionRecords': var_core_value_sig4230.transitionRecords ? {
      ...var_core_value_sig4230.transitionRecords
    } : undefined,
    'slideTransitionRefs': var_core_value_sig4230.slideTransitionRefs ? {
      ...var_core_value_sig4230.slideTransitionRefs
    } : undefined
  };
}
let wn = function (var_core_value_sig6136) {
  return var_core_value_sig6136[var_core_value_sig6136.INSERT = 0] = "INSERT", var_core_value_sig6136[var_core_value_sig6136.REMOVE = 1] = "REMOVE", var_core_value_sig6136[var_core_value_sig6136.UPDATE = 2] = "UPDATE", var_core_value_sig6136;
}({});
const Tn = {
    'id': "slide.mutation.set-drawing-apply",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sigD25E, var_core_value_sigE1BC) => {
      let var_core_value_sigCF44 = var_core_value_sigD25E.get(E),
        var_core_value_sig3C97 = var_core_value_sigD25E.get(e.IUniverInstanceService),
        {
          op: var_core_value_sigA920,
          unitId: var_core_value_sigAD56,
          subUnitId: var_core_value_sig0454,
          type: var_core_value_sigEE1A,
          objects: var_core_value_sig4107
        } = var_core_value_sigE1BC,
        var_core_value_sigF35C = var_core_value_sig3C97.getUnit(var_core_value_sigAD56, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sigF35C) return false;
      let var_core_value_sigEF8D = var_core_value_sig4107 ?? [],
        var_core_value_sigE025 = new Map();
      switch (var_core_value_sigEE1A === 1 && var_core_value_sigEF8D.forEach(var_core_value_sig8889 => {
        let var_core_value_sig32F8 = var_core_value_sigCF44.getDrawingByParam({
          'unitId': var_core_value_sigAD56,
          'subUnitId': var_core_value_sig0454,
          'drawingId': var_core_value_sig8889.drawingId
        });
        var_core_value_sig32F8 && var_core_value_sigE025.set(var_core_value_sig8889.drawingId, var_core_value_sig32F8);
      }), var_core_value_sigCF44.applyJson1(var_core_value_sigAD56, var_core_value_sig0454, var_core_value_sigA920), var_core_value_sigEE1A) {
        case 0:
          var_core_value_sigEF8D.forEach(var_core_value_sig5B67 => {
            let var_core_value_sig1758 = var_core_value_sigCF44.getDrawingByParam({
              'unitId': var_core_value_sigAD56,
              'subUnitId': var_core_value_sig0454,
              'drawingId': var_core_value_sig5B67.drawingId
            });
            var_core_value_sig1758 && ze(var_core_value_sigF35C, var_core_value_sig1758);
          }), var_core_value_sigCF44.addNotification(var_core_value_sig4107);
          break;
        case 1:
          var_core_value_sigE025.forEach(var_core_value_sig4805 => {
            Ve(var_core_value_sigF35C, var_core_value_sig4805);
          }), var_core_value_sigCF44.removeNotification(var_core_value_sig4107);
          break;
        case 2:
          var_core_value_sigEF8D.forEach(var_core_value_sigE67E => {
            let var_core_value_sig2902 = var_core_value_sigCF44.getDrawingByParam({
              'unitId': var_core_value_sigAD56,
              'subUnitId': var_core_value_sig0454,
              'drawingId': var_core_value_sigE67E.drawingId
            });
            var_core_value_sig2902 && Be(var_core_value_sigF35C, var_core_value_sig2902, var_core_value_sig2902.element, var_core_value_sig2902.transform);
          }), var_core_value_sigCF44.updateNotification(var_core_value_sig4107);
          break;
      }
      return true;
    }
  },
  G = {
    'id': "slide.mutation.update-slide-element",
    'type': e.CommandType['MUTATION'],
    'handler': (var_core_value_sigD549, var_core_value_sigC79E) => {
      var var_core_value_sig9221, var_core_value_sig0351;
      let {
          unitId: var_core_value_sig4686,
          subUnitId: var_core_value_sig8E1C,
          drawingId: var_core_value_sigD719,
          element: var_core_value_sig323C,
          transform: var_core_value_sig015D,
          isRealtimePreview: var_core_value_sigBF8B,
          formulaLastValueGuard: var_core_value_sigF7CE
        } = var_core_value_sigC79E,
        var_core_value_sig7CF1 = var_core_value_sigD549.get(e.IUniverInstanceService).getUnit(var_core_value_sig4686, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig7CF1) return false;
      let var_core_value_sigA552 = var_core_value_sigD549.get(E),
        var_core_value_sigAE32 = var_core_value_sigA552.getDrawingByParam({
          'unitId': var_core_value_sig4686,
          'subUnitId': var_core_value_sig8E1C,
          'drawingId': var_core_value_sigD719
        });
      if (!var_core_value_sigAE32) return false;
      let var_core_value_sig9B4D = var_core_value_sigAE32.element,
        var_core_value_sig2704 = var_core_value_sig9B4D.type === "connector" ? (var_core_value_sig9221 = var_core_value_sig9B4D.connectorData) == null || (var_core_value_sig9221 = var_core_value_sig9221.formulaBinding) == null ? undefined : var_core_value_sig9221.formula : var_core_value_sig9B4D.type === "shape" ? (var_core_value_sig0351 = var_core_value_sig9B4D.shapeData) == null || (var_core_value_sig0351 = var_core_value_sig0351.formulaBinding) == null ? undefined : var_core_value_sig0351.formula : undefined;
      if (!(0, n.canApplyShapeFormulaLastValue)(var_core_value_sigD549, {
        'hostType': e.UniverInstanceType["UNIVER_SLIDE"],
        'unitId': var_core_value_sig4686,
        'subUnitId': var_core_value_sig8E1C,
        'shapeId': var_core_value_sigD719
      }, var_core_value_sig2704, var_core_value_sigF7CE)) return true;
      let var_core_value_sigD0CC = {
          ...var_core_value_sigAE32,
          'element': var_core_value_sig323C,
          'transform': var_core_value_sig015D
        },
        var_core_value_sigF347 = En(var_core_value_sigAE32.element, var_core_value_sig323C);
      if (var_core_value_sigBF8B || (Be(var_core_value_sig7CF1, var_core_value_sigAE32, var_core_value_sig323C, var_core_value_sig015D), var_core_value_sigAE32.sourcePageType === 'slide' && !var_core_value_sigF347 && O(var_core_value_sigA552, var_core_value_sig7CF1, var_core_value_sig4686, var_core_value_sig8E1C))) return true;
      if (var_core_value_sigAE32.sourcePageType === "master" || var_core_value_sigAE32.sourcePageType === "layout") return k(var_core_value_sigA552, var_core_value_sig7CF1, var_core_value_sig4686, var_core_value_sig8E1C), true;
      let var_core_value_sig80C6 = var_core_value_sigA552.getBatchUpdateOp([var_core_value_sigD0CC]);
      return var_core_value_sigA552.applyJson1(var_core_value_sig4686, var_core_value_sig8E1C, var_core_value_sig80C6.redo), var_core_value_sigA552.updateNotification(var_core_value_sig80C6.objects ?? []), true;
    }
  };
function En(var_core_value_sigEBFB, var_core_value_sigF3BF) {
  let {
      transform: var_core_value_sigAE58,
      ...var_core_value_sig8E13
    } = var_core_value_sigEBFB,
    {
      transform: var_core_value_sig3AAF,
      ...var_core_value_sig134E
    } = var_core_value_sigF3BF;
  return (0, e.shallowEqual)(var_core_value_sig8E13, var_core_value_sig134E);
}
const Dn = {
  'id': "slide.command.update-drawing",
  'type': e.CommandType["COMMAND"],
  'handler': (var_core_value_sigA3C0, var_core_value_sig723F) => {
    if (!var_core_value_sig723F || var_core_value_sig723F.patches["length"] === 0) return false;
    let var_core_value_sigD044 = var_core_value_sigA3C0.get(e.ICommandService),
      var_core_value_sig9797 = var_core_value_sigA3C0.get(e.IUndoRedoService),
      var_core_value_sig8533 = var_core_value_sigA3C0.get(E),
      {
        patches: var_core_value_sig57C5
      } = var_core_value_sig723F,
      var_core_value_sig0DE9 = new Map(),
      var_core_value_sigB00D = [],
      var_core_value_sig57C8 = [];
    for (let var_core_value_sig68BE of var_core_value_sig57C5) {
      let {
          unitId: var_core_value_sig9989,
          subUnitId: var_core_value_sig698E,
          drawingId: var_core_value_sig2809,
          element: var_core_value_sig2DAB,
          transform: var_core_value_sig877E
        } = var_core_value_sig68BE,
        var_core_value_sig20C8 = var_core_value_sig8533.getDrawingByParam({
          'unitId': var_core_value_sig9989,
          'subUnitId': var_core_value_sig698E,
          'drawingId': var_core_value_sig2809
        });
      if (!var_core_value_sig20C8) continue;
      let var_core_value_sigE9A7 = var_core_value_sig2DAB ?? var_core_value_sig20C8.element,
        var_core_value_sigBECE = kn(var_core_value_sig20C8, var_core_value_sig2DAB, var_core_value_sig877E);
      if (An(var_core_value_sig20C8.element, var_core_value_sigE9A7) && Mn(var_core_value_sig20C8.transform, var_core_value_sigBECE)) continue;
      let var_core_value_sig1B22 = {
          ...var_core_value_sig20C8,
          'element': var_core_value_sigE9A7,
          'transform': var_core_value_sigBECE
        },
        var_core_value_sig7F72 = var_core_value_sig9989 + '\x00' + var_core_value_sig698E,
        var_core_value_sig7B2A = var_core_value_sig0DE9.get(var_core_value_sig7F72) ?? {
          'drawings': [],
          'subUnitId': var_core_value_sig698E,
          'unitId': var_core_value_sig9989
        };
      var_core_value_sig7B2A.drawings["push"](var_core_value_sig1B22), var_core_value_sig0DE9.set(var_core_value_sig7F72, var_core_value_sig7B2A), var_core_value_sigB00D.push({
        'id': G.id,
        'params': {
          'drawingId': var_core_value_sig2809,
          'element': var_core_value_sigE9A7,
          'subUnitId': var_core_value_sig698E,
          'transform': var_core_value_sigBECE,
          'unitId': var_core_value_sig9989
        }
      }), var_core_value_sig57C8.push({
        'id': G.id,
        'params': {
          'drawingId': var_core_value_sig2809,
          'element': var_core_value_sig20C8.element,
          'subUnitId': var_core_value_sig698E,
          'transform': var_core_value_sig20C8.transform,
          'unitId': var_core_value_sig9989
        }
      });
    }
    let {
      redoMutations: var_core_value_sigC27D,
      undoMutations: var_core_value_sig7B95
    } = var_core_value_sigD044.hasCommand(Tn.id) ? On(var_core_value_sig8533, var_core_value_sig0DE9) : {
      'redoMutations': var_core_value_sigB00D,
      'undoMutations': var_core_value_sig57C8
    };
    return var_core_value_sigC27D.length && (0, e.sequenceExecute)(var_core_value_sigC27D, var_core_value_sigD044).result ? (var_core_value_sig9797.pushUndoRedo({
      'unitID': var_core_value_sig57C5[0].unitId,
      'undoMutations': var_core_value_sig7B95,
      'redoMutations': var_core_value_sigC27D
    }), true) : false;
  }
};
function On(var_core_value_sig7D59, var_core_value_sig5863) {
  let var_core_value_sig5BE7 = [],
    var_core_value_sigC74A = [];
  for (let var_core_value_sig04C6 of var_core_value_sig5863.values()) {
    let {
      objects: var_core_value_sig06CD,
      redo: var_core_value_sigA5F1,
      undo: var_core_value_sig97A2
    } = var_core_value_sig7D59.getBatchUpdateOp(var_core_value_sig04C6.drawings);
    !Array.isArray(var_core_value_sig06CD) || var_core_value_sig06CD.length === 0 || (var_core_value_sig5BE7.push({
      'id': Tn.id,
      'params': {
        'objects': var_core_value_sig06CD,
        'op': var_core_value_sigA5F1,
        'subUnitId': var_core_value_sig04C6.subUnitId,
        'type': 2,
        'unitId': var_core_value_sig04C6.unitId
      }
    }), var_core_value_sigC74A.push({
      'id': Tn.id,
      'params': {
        'objects': var_core_value_sig06CD,
        'op': var_core_value_sig97A2,
        'subUnitId': var_core_value_sig04C6.subUnitId,
        'type': 2,
        'unitId': var_core_value_sig04C6.unitId
      }
    }));
  }
  return {
    'redoMutations': var_core_value_sig5BE7,
    'undoMutations': var_core_value_sigC74A
  };
}
;
function kn(var_core_value_sig8F6A, var_core_value_sig46EA, var_core_value_sig626C) {
  if (var_core_value_sig626C) return var_core_value_sig626C;
  if (var_core_value_sig46EA != null && var_core_value_sig46EA.transform) {
    let var_core_value_sigCA05 = var_core_value_sig46EA.transform,
      var_core_value_sig2F2B = var_core_value_sig8F6A.transform ?? {
        'left': 0,
        'top': 0,
        'width': 0,
        'height': 0,
        'angle': 0,
        'flipX': false,
        'flipY': false
      };
    return {
      'left': var_core_value_sigCA05.left ?? var_core_value_sig2F2B.left ?? 0,
      'top': var_core_value_sigCA05.top ?? var_core_value_sig2F2B.top ?? 0,
      'width': var_core_value_sigCA05.width ?? var_core_value_sig2F2B.width ?? 0,
      'height': var_core_value_sigCA05.height ?? var_core_value_sig2F2B.height ?? 0,
      'angle': var_core_value_sigCA05.rotation ?? var_core_value_sig2F2B.angle ?? 0,
      'flipX': var_core_value_sigCA05.flipX,
      'flipY': var_core_value_sigCA05.flipY
    };
  }
  return var_core_value_sig8F6A.transform;
}
;
function An(var_core_value_sig9077, var_core_value_sigC76C) {
  return JSON.stringify(jn(var_core_value_sig9077)) === JSON.stringify(jn(var_core_value_sigC76C));
}
;
function jn(var_core_value_sigB23A) {
  let var_core_value_sigBA66 = JSON.parse(JSON.stringify(var_core_value_sigB23A)),
    var_core_value_sig3DF0 = var_core_value_sigBA66.transform;
  return var_core_value_sig3DF0 && (var_core_value_sig3DF0.left = var_core_value_sig3DF0.left ?? 0, var_core_value_sig3DF0.top = var_core_value_sig3DF0.top ?? 0, var_core_value_sig3DF0.width = var_core_value_sig3DF0.width ?? 0, var_core_value_sig3DF0.height = var_core_value_sig3DF0.height ?? 0, var_core_value_sig3DF0.rotation = var_core_value_sig3DF0.rotation ?? 0, var_core_value_sig3DF0.flipX = var_core_value_sig3DF0.flipX ?? false, var_core_value_sig3DF0.flipY = var_core_value_sig3DF0.flipY ?? false), var_core_value_sigBA66;
}
;
function Mn(var_core_value_sig0512, var_core_value_sig4B2B) {
  return JSON.stringify(Nn(var_core_value_sig0512)) === JSON.stringify(Nn(var_core_value_sig4B2B));
}
;
function Nn(var_core_value_sigDF88) {
  return {
    'left': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.left) ?? 0,
    'top': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.top) ?? 0,
    'width': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.width) ?? 0,
    'height': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.height) ?? 0,
    'angle': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.angle) ?? 0,
    'flipX': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.flipX) ?? false,
    'flipY': (var_core_value_sigDF88 == null ? undefined : var_core_value_sigDF88.flipY) ?? false
  };
}
;
function Pn(var_core_value_sigDB93, var_core_value_sig67CF, var_core_value_sigCA96, var_core_value_sig6C5E) {
  let var_core_value_sig4997 = Ne(var_core_value_sig67CF, var_core_value_sig6C5E);
  var_core_value_sig4997.length !== 0 && var_core_value_sigDB93.updateNotification(var_core_value_sig4997.map(var_core_value_sig70AF => ({
    'unitId': var_core_value_sigCA96,
    'subUnitId': var_core_value_sig70AF,
    'drawingId': '__slide_page_background__'
  })));
}
const Fn = {
    'id': "slide.mutation.update-slide-page-background",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig7290, var_core_value_sigE835) => {
      var var_core_value_sig4644, var_core_value_sig9DED, var_core_value_sig7DE6, var_core_value_sig120E;
      let {
          unitId: var_core_value_sigD79B,
          pageId: var_core_value_sig92A3,
          background: var_core_value_sig8911,
          showMasterSp: var_core_value_sig8D1B
        } = var_core_value_sigE835,
        var_core_value_sigA915 = var_core_value_sig7290.get(e.IUniverInstanceService).getUnit(var_core_value_sigD79B, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sigA915) return false;
      let var_core_value_sigE1F7 = var_core_value_sigA915.pageManager["getPage"](var_core_value_sig92A3);
      if (!var_core_value_sigE1F7) return false;
      let var_core_value_sig4BE7 = var_core_value_sig7290.get(E),
        var_core_value_sigF9FF = var_core_value_sigA915.getSnapshot(),
        var_core_value_sigE0E3 = var_core_value_sig8D1B === undefined ? {
          ...var_core_value_sigE1F7,
          'background': var_core_value_sig8911
        } : {
          ...var_core_value_sigE1F7,
          'background': var_core_value_sig8911,
          'showMasterSp': var_core_value_sig8D1B
        },
        var_core_value_sig3AB3 = var_core_value_sigA915.pageManager["getSlide"](var_core_value_sig92A3);
      return var_core_value_sig3AB3 ? (var_core_value_sig3AB3.updatePageData(var_core_value_sigE0E3), k(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), Pn(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), true) : (var_core_value_sig4644 = var_core_value_sigF9FF.masterPages) != null && var_core_value_sig4644[var_core_value_sig92A3] ? (var_core_value_sigF9FF.masterPages[var_core_value_sig92A3] = var_core_value_sigE0E3, k(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), Pn(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), true) : (var_core_value_sig9DED = var_core_value_sigF9FF.layoutPages) != null && var_core_value_sig9DED[var_core_value_sig92A3] ? (var_core_value_sigF9FF.layoutPages[var_core_value_sig92A3] = var_core_value_sigE0E3, k(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), Pn(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), true) : (var_core_value_sig7DE6 = var_core_value_sigF9FF.handoutMasterPages) != null && var_core_value_sig7DE6[var_core_value_sig92A3] ? (var_core_value_sigF9FF.handoutMasterPages[var_core_value_sig92A3] = var_core_value_sigE0E3, Pn(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), true) : (var_core_value_sig120E = var_core_value_sigF9FF.notesMasterPages) != null && var_core_value_sig120E[var_core_value_sig92A3] ? (var_core_value_sigF9FF.notesMasterPages[var_core_value_sig92A3] = var_core_value_sigE0E3, Pn(var_core_value_sig4BE7, var_core_value_sigA915, var_core_value_sigD79B, var_core_value_sig92A3), true) : false;
    }
  },
  In = {
    'id': 'slide.command.update-slide-page-background',
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig816E, var_core_value_sigE6F3) => {
      if (!var_core_value_sigE6F3 || var_core_value_sigE6F3.patches["length"] === 0) return false;
      let {
          patches: var_core_value_sig3EE1,
          ensureMasterPage: var_core_value_sig9673
        } = var_core_value_sigE6F3,
        var_core_value_sig4917 = var_core_value_sig3EE1[0].unitId,
        var_core_value_sig3BE6 = var_core_value_sig816E.get(e.IUniverInstanceService).getUnit(var_core_value_sig4917, e.UniverInstanceType["UNIVER_SLIDE"]);
      if (!var_core_value_sig3BE6) return false;
      let var_core_value_sigA1C9 = var_core_value_sig816E.get(e.ICommandService),
        var_core_value_sig77D6 = var_core_value_sig816E.get(e.IUndoRedoService),
        var_core_value_sigE3CE = [],
        var_core_value_sig219B = [];
      if (var_core_value_sig9673 && !var_core_value_sig3BE6.pageManager["getMasterPage"](var_core_value_sig9673.id)) {
        let var_core_value_sigD04E = {
          'unitId': var_core_value_sig4917,
          'masterPage': var_core_value_sig9673
        };
        var_core_value_sigE3CE.push({
          'id': Dt.id,
          'params': var_core_value_sigD04E
        });
      }
      for (let var_core_value_sigB99B of var_core_value_sig3EE1) {
        let {
            pageId: var_core_value_sig07E9,
            background: var_core_value_sig4F59,
            showMasterSp: var_core_value_sigF564
          } = var_core_value_sigB99B,
          var_core_value_sig8CFA = var_core_value_sig3BE6.pageManager["getPage"](var_core_value_sig07E9),
          var_core_value_sig2E11 = var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.background,
          var_core_value_sig5B69 = var_core_value_sig8CFA == null ? undefined : var_core_value_sig8CFA.showMasterSp,
          var_core_value_sigB098 = {
            'unitId': var_core_value_sig4917,
            'pageId': var_core_value_sig07E9,
            'background': var_core_value_sig4F59,
            'showMasterSp': var_core_value_sigF564
          },
          var_core_value_sigCE71 = {
            'unitId': var_core_value_sig4917,
            'pageId': var_core_value_sig07E9,
            'background': var_core_value_sig2E11,
            'showMasterSp': var_core_value_sig5B69
          };
        var_core_value_sigE3CE.push({
          'id': Fn.id,
          'params': var_core_value_sigB098
        }), var_core_value_sig219B.push({
          'id': Fn.id,
          'params': var_core_value_sigCE71
        });
      }
      return (0, e.sequenceExecute)(var_core_value_sigE3CE, var_core_value_sigA1C9).result ? (var_core_value_sig77D6.pushUndoRedo({
        'unitID': var_core_value_sig4917,
        'undoMutations': var_core_value_sig219B,
        'redoMutations': var_core_value_sigE3CE
      }), true) : false;
    }
  },
  Ln = {
    'id': "slide.command.update-smart-art",
    'type': e.CommandType["COMMAND"],
    'handler': (var_core_value_sig4493, var_core_value_sig8B9C) => {
      if (!(var_core_value_sig8B9C != null && var_core_value_sig8B9C.operations["length"])) return false;
      let var_core_value_sigA35B = var_core_value_sig4493.get(E).getDrawingByParam(var_core_value_sig8B9C);
      if (!var_core_value_sigA35B || var_core_value_sigA35B.sourcePageType !== "slide" || var_core_value_sigA35B.element['type'] !== "shape" || !(0, n.isSmartArtShapeData)(var_core_value_sigA35B.element['shapeData'])) return false;
      let var_core_value_sig82DD = var_core_value_sigA35B.element['shapeData'].smartArt;
      try {
        for (let var_core_value_sig21D8 of var_core_value_sig8B9C.operations) var_core_value_sig82DD = (0, n.applySmartArtOperation)(var_core_value_sig82DD, var_core_value_sig21D8);
      } catch {
        return false;
      }
      let var_core_value_sigAAC7 = {
          ...var_core_value_sigA35B.element,
          'shapeData': {
            ...var_core_value_sigA35B.element["shapeData"],
            'smartArt': var_core_value_sig82DD
          }
        },
        var_core_value_sig1999 = {
          'unitId': var_core_value_sig8B9C.unitId,
          'subUnitId': var_core_value_sig8B9C.subUnitId,
          'drawingId': var_core_value_sig8B9C.drawingId,
          'element': var_core_value_sigAAC7,
          'transform': var_core_value_sigA35B.transform
        },
        var_core_value_sigFB45 = {
          'unitId': var_core_value_sig8B9C.unitId,
          'subUnitId': var_core_value_sig8B9C.subUnitId,
          'drawingId': var_core_value_sig8B9C.drawingId,
          'element': var_core_value_sigA35B.element,
          'transform': var_core_value_sigA35B.transform
        },
        var_core_value_sigB86C = [{
          'id': G.id,
          'params': var_core_value_sig1999
        }],
        var_core_value_sigD892 = [{
          'id': G.id,
          'params': var_core_value_sigFB45
        }];
      return (0, e.sequenceExecute)(var_core_value_sigB86C, var_core_value_sig4493.get(e.ICommandService)).result ? (var_core_value_sig4493.get(e.IUndoRedoService).pushUndoRedo({
        'unitID': var_core_value_sig8B9C.unitId,
        'undoMutations': var_core_value_sigD892,
        'redoMutations': var_core_value_sigB86C
      }), true) : false;
    }
  },
  Rn = {
    'id': "slide.mutation.insert-drawing-object",
    'type': e.CommandType["MUTATION"],
    'handler': (var_core_value_sig6086, var_core_value_sigAED2) => {
      var var_core_value_sig3516;
      let {
        unitId: var_core_value_sigCDCD,
        subUnitId: var_core_value_sig206A,
        drawings: var_core_value_sig1EFE,
        insertIndex: var_core_value_sig9904
      } = var_core_value_sigAED2;
      if (!(var_core_value_sig1EFE != null && var_core_value_sig1EFE.length)) return false;
      let var_core_value_sig39C7 = var_core_value_sig6086.get(E),
        var_core_value_sigA022 = var_core_value_sig6086.get(e.IUniverInstanceService).getUnit(var_core_value_sigCDCD, e.UniverInstanceType['UNIVER_SLIDE']);
      if (!var_core_value_sigA022) return false;
      let var_core_value_sig913A = Object.values(((var_core_value_sig3516 = var_core_value_sigA022.pageManager["getSlide"](var_core_value_sig206A)) == null ? undefined : var_core_value_sig3516.getData().elements) ?? {}),
        var_core_value_sig991D = [];
      if (var_core_value_sig1EFE.forEach((var_core_value_sig5A75, var_core_value_sig7BAF) => {
        let var_core_value_sig8F69 = Oe(var_core_value_sig5A75.element, var_core_value_sig913A),
          var_core_value_sig6884 = {
            ...var_core_value_sig5A75,
            'element': var_core_value_sig8F69
          };
        var_core_value_sig913A = [...var_core_value_sig913A, var_core_value_sig8F69], var_core_value_sig991D.push(var_core_value_sig6884), ze(var_core_value_sigA022, var_core_value_sig6884, var_core_value_sig9904 === undefined ? undefined : var_core_value_sig9904 + var_core_value_sig7BAF);
      }), var_core_value_sig991D.every(var_core_value_sig066E => var_core_value_sig066E.sourcePageType === "slide" && var_core_value_sig066E.unitId === var_core_value_sigCDCD && var_core_value_sig066E.subUnitId === var_core_value_sig206A) && O(var_core_value_sig39C7, var_core_value_sigA022, var_core_value_sigCDCD, var_core_value_sig206A)) return true;
      let var_core_value_sig3E9C = var_core_value_sig39C7.getBatchAddOp(var_core_value_sig991D);
      var_core_value_sig39C7.applyJson1(var_core_value_sigCDCD, var_core_value_sig206A, var_core_value_sig3E9C.redo);
      let var_core_value_sig7835 = (var_core_value_sig3E9C == null ? undefined : var_core_value_sig3E9C.objects) ?? [];
      return var_core_value_sig7835.length > 0 && var_core_value_sig39C7.addNotification(var_core_value_sig7835), true;
    }
  },
  zn = {
    'id': "slide.operation.set-zoom-ratio",
    'type': e.CommandType["OPERATION"],
    'handler': (var_core_value_sig1257, var_core_value_sig97E2) => {
      if (!var_core_value_sig97E2) return false;
      let var_core_value_sigBFA3 = var_core_value_sig1257.get(e.IUniverInstanceService).getUnit(var_core_value_sig97E2.unitId, e.UniverInstanceType['UNIVER_SLIDE']);
      return var_core_value_sigBFA3 ? (var_core_value_sigBFA3.setZoomRatio(var_core_value_sig97E2.zoomRatio), true) : false;
    }
  };
function K(var_core_value_sig6663, var_core_value_sigB250) {
  return function (var_core_value_sig9B0D, var_core_value_sig3D2C) {
    var_core_value_sigB250(var_core_value_sig9B0D, var_core_value_sig3D2C, var_core_value_sig6663);
  };
}
;
function q(var_core_value_sig4EAB, var_core_value_sig2FD0, var_core_value_sig035C, var_core_value_sigA7F0) {
  var var_core_value_sig6AE2 = arguments.length,
    var_core_value_sigFD17 = var_core_value_sig6AE2 < 3 ? var_core_value_sig2FD0 : var_core_value_sigA7F0 === null ? var_core_value_sigA7F0 = Object.getOwnPropertyDescriptor(var_core_value_sig2FD0, var_core_value_sig035C) : var_core_value_sigA7F0,
    var_core_value_sigA5E0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigFD17 = Reflect.decorate(var_core_value_sig4EAB, var_core_value_sig2FD0, var_core_value_sig035C, var_core_value_sigA7F0);else {
    for (var var_core_value_sigC38F = var_core_value_sig4EAB.length - 1; var_core_value_sigC38F >= 0; var_core_value_sigC38F--) (var_core_value_sigA5E0 = var_core_value_sig4EAB[var_core_value_sigC38F]) && (var_core_value_sigFD17 = (var_core_value_sig6AE2 < 3 ? var_core_value_sigA5E0(var_core_value_sigFD17) : var_core_value_sig6AE2 > 3 ? var_core_value_sigA5E0(var_core_value_sig2FD0, var_core_value_sig035C, var_core_value_sigFD17) : var_core_value_sigA5E0(var_core_value_sig2FD0, var_core_value_sig035C)) || var_core_value_sigFD17);
  }
  return var_core_value_sig6AE2 > 3 && var_core_value_sigFD17 && Object.defineProperty(var_core_value_sig2FD0, var_core_value_sig035C, var_core_value_sigFD17), var_core_value_sigFD17;
}
const Bn = "SLIDE_FONT_PLUGIN";
let Vn = class extends e.Disposable {
  constructor(var_core_value_sigC56D) {
    super(), U(this, "_resources", new Map()), this.disposeWithMe(var_core_value_sigC56D.registerPluginResource({
      'pluginName': Bn,
      'businesses': [e.UniverInstanceType["UNIVER_SLIDE"]],
      'toJson': var_core_value_sig2B65 => JSON.stringify(this._resources['get'](var_core_value_sig2B65) ?? {
        'fonts': [],
        'version': 1
      }),
      'parseJson': var_core_value_sigD7EA => JSON.parse(var_core_value_sigD7EA),
      'onLoad': (var_core_value_sigB33B, var_core_value_sig24B9) => this._resources["set"](var_core_value_sigB33B, var_core_value_sig24B9),
      'onUnLoad': var_core_value_sigE627 => this._resources["delete"](var_core_value_sigE627)
    }));
  }
};
Vn = q([K(0, e.IResourceManagerService)], Vn);
const J = {
  'shapeWidth': 220,
  'shapeHeight': 120,
  'textBoxWidth': 260,
  'textBoxHeight': 88,
  'minPositionOffset': 24,
  'fallbackImageWidth': 320,
  'fallbackImageHeight': 180,
  'minImageEdge': 80,
  'imageFitRatio': 0.56
};
function Hn(var_core_value_sigFAFE = true) {
  return var_core_value_sigFAFE ? {
    'width': J.textBoxWidth,
    'height': J.textBoxHeight
  } : {
    'width': J.textBoxHeight,
    'height': J.textBoxWidth
  };
}
const Un = {
    'isTextBox': true,
    'fill': {
      'fillType': n.ShapeFillEnum["SolidFill"],
      'color': '#FFFFFF'
    },
    'stroke': {
      'lineStrokeType': n.ShapeLineTypeEnum['SolidLine'],
      'width': 1,
      'color': "#bcbcbc"
    },
    'shapeText': {
      'isHorizontal': true,
      'text': '',
      'autoFitType': n.ShapeTextAutoFitType['SpAutoFit'],
      'textWrap': n.ShapeTextWrapType["None"],
      'dataModel': {
        'doc': {
          'id': 'slide-text-box-default-document',
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
                'horizontalAlign': e.HorizontalAlign['LEFT']
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
              'horizontalAlign': e.HorizontalAlign["LEFT"],
              'verticalAlign': e.VerticalAlign["TOP"]
            }
          }
        },
        'ha': e.HorizontalAlign['LEFT'],
        'va': e.VerticalAlign['TOP']
      }
    }
  },
  Wn = {
    'picture': ["image"],
    'chart': ["chart"]
  },
  Gn = {
    'picture': "image",
    'chart': "chart"
  },
  Kn = {
    'image': "AddImageIcon",
    'chart': 'ChartIcon',
    'table': "TableIcon",
    'diagram': "RelationshipIcon",
    'media': "RecordIcon"
  };
function qn(var_core_value_sig2B86) {
  return (Wn[var_core_value_sig2B86] ?? []).map(var_core_value_sig3A17 => ({
    'key': var_core_value_sig3A17,
    'labelKey': 'slides.placeholder.icon.' + var_core_value_sig3A17
  }));
}
;
function Jn(var_core_value_sig8873) {
  var var_core_value_sigB9C5;
  let var_core_value_sig511D = Gn[var_core_value_sig8873.type];
  if (!var_core_value_sig511D) return [];
  let var_core_value_sig1610 = ((var_core_value_sigB9C5 = var_core_value_sig8873.icons) != null && var_core_value_sigB9C5.length ? var_core_value_sig8873.icons : qn(var_core_value_sig8873.type)).find(var_core_value_sig938F => var_core_value_sig938F.enabled !== false && var_core_value_sig938F.key === var_core_value_sig511D);
  return var_core_value_sig1610 ? [var_core_value_sig1610] : [];
}
const Yn = {
  'title': "slides.slide.placeholder.text.title",
  'centerTitle': "slides.slide.placeholder.text.title",
  'subtitle': "slides.slide.placeholder.text.subtitle",
  'body': 'slides.slide.placeholder.text.body',
  'text': "slides.slide.placeholder.text.text",
  'header': "slides.slide.placeholder.text.header",
  'footer': "slides.slide.placeholder.text.footer",
  'date': "slides.slide.placeholder.text.date",
  'slideNumber': "slides.slide.placeholder.text.slideNumber"
};
function Xn(var_core_value_sig23AB) {
  return Yn[var_core_value_sig23AB];
}
const Zn = 'UNIVER_EMBED_SLIDES_FLOATING',
  Qn = "UNIVER_EMBED_SLIDES_PAGE";
function $n(var_core_value_sigA15D) {
  return {
    'version': 1,
    'embedId': var_core_value_sigA15D.embedId,
    'hostAnchorId': var_core_value_sigA15D.hostAnchorId,
    'childUnitId': var_core_value_sigA15D.childUnitId,
    'childType': var_core_value_sigA15D.childType
  };
}
;
function er(var_core_value_sig7E90) {
  return {
    'id': var_core_value_sig7E90.hostAnchorId,
    'pageType': "slide",
    'name': var_core_value_sig7E90.name ?? var_core_value_sig7E90.embedId,
    'showMasterSp': false,
    'elementOrder': [],
    'elements': {},
    'custom': {
      [Qn]: $n(var_core_value_sig7E90)
    }
  };
}
;
function tr(var_core_value_sig03F7) {
  return {
    'id': var_core_value_sig03F7.hostAnchorId,
    'type': "text",
    'name': var_core_value_sig03F7.embedId,
    'text': '',
    'transform': {
      'left': var_core_value_sig03F7.left ?? 96,
      'top': var_core_value_sig03F7.top ?? 72,
      'width': var_core_value_sig03F7.width ?? 560,
      'height': var_core_value_sig03F7.height ?? 315
    },
    'custom': {
      [Zn]: $n(var_core_value_sig03F7)
    }
  };
}
;
function nr(var_core_value_sig756F) {
  var var_core_value_sig0DB11;
  let var_core_value_sig4950 = (var_core_value_sig0DB11 = var_core_value_sig756F.custom) == null ? undefined : var_core_value_sig0DB11[Qn];
  return ir(var_core_value_sig4950) ? var_core_value_sig4950 : undefined;
}
;
function rr(var_core_value_sig4424) {
  var var_core_value_sig57E8;
  let var_core_value_sig76B6 = (var_core_value_sig57E8 = var_core_value_sig4424.custom) == null ? undefined : var_core_value_sig57E8[Zn];
  return ir(var_core_value_sig76B6) ? var_core_value_sig76B6 : undefined;
}
;
function ir(var_core_value_sig89BC) {
  if (!var_core_value_sig89BC || typeof var_core_value_sig89BC != "object") return false;
  let var_core_value_sig2191 = var_core_value_sig89BC;
  return var_core_value_sig2191.version === 1 && typeof var_core_value_sig2191.embedId == "string" && typeof var_core_value_sig2191.hostAnchorId == "string";
}
var ar = "@univerjs-pro/slides",
  or = '1.0.0-insiders.20260907-70fc579';
function sr(var_core_value_sig3B2E = (0, e.generateRandomId)(6), var_core_value_sig5A9A = e.LocaleType['EN_US'], var_core_value_sigB524 = "Untitled Presentation") {
  let var_core_value_sig8CFB = ae({
    'layoutType': "titleAndBody",
    'name': 'Slide\x201'
  });
  return {
    'id': var_core_value_sig3B2E,
    'name': var_core_value_sigB524,
    'appVersion': or,
    'locale': var_core_value_sig5A9A,
    'defaultPageSize': {
      'width': 960,
      'height': 540
    },
    'slideOrder': [var_core_value_sig8CFB.id],
    'slides': {
      [var_core_value_sig8CFB.id]: var_core_value_sig8CFB
    },
    'activeSlideId': var_core_value_sig8CFB.id,
    ...oe()
  };
}
var cr = class extends e.Disposable {
    constructor(var_core_value_sigD948 = {}) {
      super(), U(this, "_data$", undefined), U(this, "data$", undefined), this._data$ = new a["BehaviorSubject"](var_core_value_sigD948), this.data$ = this._data$["asObservable"]();
    }
    getData() {
      return this._data$["getValue"]();
    }
    update(var_core_value_sigBE5E) {
      this._data$['next']({
        ...this._data$["getValue"](),
        ...var_core_value_sigBE5E
      });
    }
    resolveColor(var_core_value_sig0281) {
      var var_core_value_sigED71;
      return ((var_core_value_sigED71 = this._data$['getValue']().colorScheme) == null ? undefined : var_core_value_sigED71[var_core_value_sig0281]) ?? var_core_value_sig0281;
    }
    getHeadingFont() {
      var var_core_value_sig281C;
      return (var_core_value_sig281C = this._data$["getValue"]().fontScheme) == null ? undefined : var_core_value_sig281C.heading;
    }
    getBodyFont() {
      var var_core_value_sig3C92;
      return (var_core_value_sig3C92 = this._data$["getValue"]().fontScheme) == null ? undefined : var_core_value_sig3C92.body;
    }
    getFillStyle(var_core_value_sigB16B) {
      var var_core_value_sig585D;
      return (var_core_value_sig585D = this._data$["getValue"]().fmtScheme) == null ? undefined : var_core_value_sig585D.fillStyleLst[var_core_value_sigB16B - 1];
    }
    getLineStyle(var_core_value_sigE722) {
      var var_core_value_sig062A;
      return (var_core_value_sig062A = this._data$["getValue"]().fmtScheme) == null ? undefined : var_core_value_sig062A.lnStyleLst[var_core_value_sigE722 - 1];
    }
    getEffectStyle(var_core_value_sig050A) {
      var var_core_value_sig8B32;
      return (var_core_value_sig8B32 = this._data$["getValue"]().fmtScheme) == null ? undefined : var_core_value_sig8B32.effectStyleLst[var_core_value_sig050A - 1];
    }
    getBgFillStyle(var_core_value_sig870F) {
      var var_core_value_sigB683;
      return (var_core_value_sigB683 = this._data$["getValue"]().fmtScheme) == null ? undefined : var_core_value_sigB683.bgFillStyleLst[var_core_value_sig870F - 1];
    }
  },
  lr = class extends e.Disposable {
    constructor(...var_core_value_sig26EC) {
      super(...var_core_value_sig26EC), U(this, "_transitions", new Map()), U(this, '_sequences', new Map()), U(this, "_changed$", new a["Subject"]()), U(this, "changed$", this._changed$["asObservable"]());
    }
    getTransition(var_core_value_sigEEDB) {
      return this._transitions["get"](var_core_value_sigEEDB);
    }
    setTransition(var_core_value_sig36E7, var_core_value_sig6A78) {
      this._transitions['set'](var_core_value_sig36E7, var_core_value_sig6A78), this._changed$['next'](var_core_value_sig36E7);
    }
    removeTransition(var_core_value_sigF7EF) {
      this._transitions['delete'](var_core_value_sigF7EF), this._changed$["next"](var_core_value_sigF7EF);
    }
    getSequences(var_core_value_sig27F9) {
      return this._sequences['get'](var_core_value_sig27F9) ?? [];
    }
    setSequences(var_core_value_sig393E, var_core_value_sigB609) {
      this._sequences["set"](var_core_value_sig393E, var_core_value_sigB609), this._changed$["next"](var_core_value_sig393E);
    }
    loadFromSlide(var_core_value_sig390D, var_core_value_sigC928, var_core_value_sig39B7) {
      var_core_value_sigC928 ? this._transitions["set"](var_core_value_sig390D, var_core_value_sigC928) : this._transitions['delete'](var_core_value_sig390D), this._sequences["set"](var_core_value_sig390D, var_core_value_sig39B7 ?? []);
    }
    loadFromDocument(var_core_value_sig18E0) {
      this._transitions['clear'](), this._sequences["clear"]();
      for (let var_core_value_sigEF3E of var_core_value_sig18E0.slideOrder) {
        let var_core_value_sig3EEE = var_core_value_sig18E0.slides[var_core_value_sigEF3E];
        if (!var_core_value_sig3EEE) continue;
        let var_core_value_sigBC46 = _n(var_core_value_sig18E0, var_core_value_sigEF3E);
        var_core_value_sigBC46 && this._transitions['set'](var_core_value_sigEF3E, var_core_value_sigBC46), this._sequences["set"](var_core_value_sigEF3E, var_core_value_sig3EEE.animations ?? []);
      }
    }
    unloadSlide(var_core_value_sigE161) {
      this._transitions["delete"](var_core_value_sigE161), this._sequences["delete"](var_core_value_sigE161);
    }
    dispose() {
      this._changed$["complete"](), super.dispose();
    }
  };
function ur(var_core_value_sigB52C) {
  switch (var_core_value_sigB52C) {
    case "header":
      return 'header';
    case "footer":
      return "footer";
    case 'date':
      return "dateTime";
    case "slideNumber":
      return "slideNumber";
    default:
      return;
  }
}
;
function dr(var_core_value_sigA4B8, var_core_value_sigFF9C) {
  return var_core_value_sigFF9C ? {
    ...var_core_value_sigA4B8,
    ...Object.fromEntries(Object.entries(var_core_value_sigFF9C).filter(([, var_core_value_sigBDEE]) => var_core_value_sigBDEE !== undefined))
  } : var_core_value_sigA4B8;
}
;
function fr(var_core_value_sig278D, var_core_value_sigC0FE, var_core_value_sigDD22) {
  let var_core_value_sig2D35 = {};
  for (let var_core_value_sig1F40 of ["header", "footer", "dateTime", "slideNumber"]) {
    var var_core_value_sig7A4B, var_core_value_sigE50A, var_core_value_sigC8AC;
    let var_core_value_sig273D = [var_core_value_sigDD22 == null || (var_core_value_sig7A4B = var_core_value_sigDD22.headerFooter) == null ? undefined : var_core_value_sig7A4B[var_core_value_sig1F40], var_core_value_sigC0FE == null || (var_core_value_sigE50A = var_core_value_sigC0FE.headerFooter) == null ? undefined : var_core_value_sigE50A[var_core_value_sig1F40], (var_core_value_sigC8AC = var_core_value_sig278D.headerFooter) == null ? undefined : var_core_value_sigC8AC[var_core_value_sig1F40]].reduce((var_core_value_sig3D7D, var_core_value_sig27E5) => dr(var_core_value_sig3D7D, var_core_value_sig27E5), undefined);
    var_core_value_sig273D && (var_core_value_sig2D35[var_core_value_sig1F40] = var_core_value_sig273D);
  }
  return var_core_value_sig2D35;
}
;
function pr(var_core_value_sig8E63, var_core_value_sig300D) {
  var var_core_value_sig520B;
  let var_core_value_sigFE26 = (var_core_value_sig520B = var_core_value_sig300D.getSlideIndex) == null ? undefined : var_core_value_sig520B.call(var_core_value_sig300D, var_core_value_sig8E63.id);
  return var_core_value_sigFE26 !== undefined && var_core_value_sigFE26 >= 0 ? String(var_core_value_sigFE26 + 1) : undefined;
}
;
function mr(var_core_value_sig1019, var_core_value_sig32AB, var_core_value_sig72BE, var_core_value_sig3E4A) {
  return var_core_value_sig1019 === undefined || var_core_value_sig1019 <= var_core_value_sig32AB ? var_core_value_sig1019 : var_core_value_sig1019 >= var_core_value_sig72BE ? var_core_value_sig1019 + var_core_value_sig3E4A - (var_core_value_sig72BE - var_core_value_sig32AB) : var_core_value_sig32AB + var_core_value_sig3E4A;
}
;
function hr(var_core_value_sig3171, var_core_value_sigEBC4) {
  var var_core_value_sig788B, var_core_value_sig9A80, var_core_value_sig7C69;
  if (var_core_value_sig3171.type !== "shape") return var_core_value_sig3171;
  let var_core_value_sig01EF = var_core_value_sig3171.shapeData['shapeText'];
  if (!var_core_value_sig01EF) return var_core_value_sig3171;
  let var_core_value_sig3603 = (var_core_value_sig788B = var_core_value_sig01EF.dataModel) == null || (var_core_value_sig788B = var_core_value_sig788B.doc) == null ? undefined : var_core_value_sig788B.body,
    var_core_value_sigC163 = (var_core_value_sig3603 == null ? undefined : var_core_value_sig3603.dataStream) ?? '',
    var_core_value_sigF5F3 = var_core_value_sig01EF.text ?? '',
    var_core_value_sig5E69 = ["‹#›", "<#>", '#'].find(var_core_value_sig3FC7 => var_core_value_sigC163.includes(var_core_value_sig3FC7) || var_core_value_sigF5F3.includes(var_core_value_sig3FC7));
  if (!var_core_value_sig5E69) return var_core_value_sig3171;
  let var_core_value_sig7B39 = var_core_value_sigC163.indexOf(var_core_value_sig5E69),
    var_core_value_sigDCAB = var_core_value_sig7B39 + var_core_value_sig5E69.length;
  return {
    ...var_core_value_sig3171,
    'shapeData': {
      ...var_core_value_sig3171.shapeData,
      'shapeText': {
        ...var_core_value_sig01EF,
        'text': var_core_value_sigF5F3.replace(var_core_value_sig5E69, var_core_value_sigEBC4),
        'dataModel': var_core_value_sig01EF.dataModel && {
          ...var_core_value_sig01EF.dataModel,
          'doc': var_core_value_sig01EF.dataModel["doc"] && {
            ...var_core_value_sig01EF.dataModel["doc"],
            'body': var_core_value_sig3603 && var_core_value_sig7B39 >= 0 ? {
              ...var_core_value_sig3603,
              'dataStream': var_core_value_sigC163.replace(var_core_value_sig5E69, var_core_value_sigEBC4),
              'textRuns': (var_core_value_sig9A80 = var_core_value_sig3603.textRuns) == null ? undefined : var_core_value_sig9A80.map(var_core_value_sig1E1B => ({
                ...var_core_value_sig1E1B,
                'st': mr(var_core_value_sig1E1B.st, var_core_value_sig7B39, var_core_value_sigDCAB, var_core_value_sigEBC4.length),
                'ed': mr(var_core_value_sig1E1B.ed, var_core_value_sig7B39, var_core_value_sigDCAB, var_core_value_sigEBC4.length)
              })),
              'paragraphs': (var_core_value_sig7C69 = var_core_value_sig3603.paragraphs) == null ? undefined : var_core_value_sig7C69.map(var_core_value_sig3B10 => ({
                ...var_core_value_sig3B10,
                'startIndex': mr(var_core_value_sig3B10.startIndex, var_core_value_sig7B39, var_core_value_sigDCAB, var_core_value_sigEBC4.length)
              }))
            } : var_core_value_sig3603
          }
        }
      }
    }
  };
}
;
function gr(var_core_value_sigF569, var_core_value_sig2A9F, var_core_value_sigB14A) {
  let var_core_value_sig4401 = Ge(var_core_value_sigF569);
  if (!var_core_value_sig4401) return var_core_value_sigF569;
  let var_core_value_sig4D6A = ur(var_core_value_sig4401.type);
  if (!var_core_value_sig4D6A) return var_core_value_sigF569;
  let var_core_value_sigEF80 = var_core_value_sig2A9F[var_core_value_sig4D6A];
  if ((var_core_value_sigEF80 == null ? undefined : var_core_value_sigEF80.enabled) !== true) return null;
  let var_core_value_sig526D1 = var_core_value_sigF569.type === "placeholder" ? var_core_value_sigF569.text : undefined,
    var_core_value_sigD78B = var_core_value_sig4401.type === "slideNumber" ? var_core_value_sigB14A ?? var_core_value_sigEF80.text ?? var_core_value_sig526D1 ?? '' : var_core_value_sigEF80.text ?? var_core_value_sig526D1 ?? '';
  return var_core_value_sigD78B.trim() ? var_core_value_sigF569.type === "placeholder" ? {
    ...var_core_value_sigF569,
    'text': var_core_value_sigD78B
  } : var_core_value_sig4401.type === "slideNumber" && var_core_value_sigB14A ? hr(var_core_value_sigF569, var_core_value_sigB14A) : var_core_value_sigF569 : null;
}
;
function _r(var_core_value_sigCB8C) {
  let var_core_value_sigD217 = new Set();
  for (let var_core_value_sig89E6 of Object.values(var_core_value_sigCB8C)) {
    let var_core_value_sig9A0D = M(var_core_value_sig89E6);
    var_core_value_sig9A0D && var_core_value_sigD217.add(var_core_value_sig9A0D);
  }
  return var_core_value_sigD217;
}
;
function vr(var_core_value_sigEB0F, var_core_value_sigDC44) {
  if (var_core_value_sigEB0F) {
    if (var_core_value_sigEB0F.background) return var_core_value_sigEB0F.background;
    if (var_core_value_sigEB0F.pageType === "slide" && "layoutPageId" in var_core_value_sigEB0F && var_core_value_sigEB0F.layoutPageId) {
      let var_core_value_sigA319 = vr(var_core_value_sigDC44.getLayoutPage(var_core_value_sigEB0F.layoutPageId), var_core_value_sigDC44);
      if (var_core_value_sigA319) return var_core_value_sigA319;
    }
    if ((var_core_value_sigEB0F.pageType === "slide" || var_core_value_sigEB0F.pageType === "layout") && "masterPageId" in var_core_value_sigEB0F && var_core_value_sigEB0F.masterPageId) return vr(var_core_value_sigDC44.getMasterPage(var_core_value_sigEB0F.masterPageId), var_core_value_sigDC44);
  }
}
;
function yr(var_core_value_sigDEFC) {
  return var_core_value_sigDEFC.showMasterSp ?? true;
}
;
function br(var_core_value_sigE842) {
  return B(var_core_value_sigE842) || !Ge(var_core_value_sigE842);
}
var xr = class extends e.Disposable {
    constructor(var_core_value_sig4743, var_core_value_sigEB6A, var_core_value_sig3D46) {
      super(), this._data = var_core_value_sig4743, this._ctx = var_core_value_sigEB6A, this._syncFn = var_core_value_sig3D46;
    }
    getId() {
      return this._data['id'];
    }
    getData() {
      return this._data;
    }
    updatePageData(var_core_value_sigCC93) {
      this._applyDataUpdate({
        ...this._data,
        ...var_core_value_sigCC93
      });
    }
    resolveBackground() {
      return vr(this._data, this._ctx);
    }
    addElement(var_core_value_sig5964, var_core_value_sig808B) {
      let var_core_value_sig2A26 = [...this._data["elementOrder"]],
        var_core_value_sig1179 = var_core_value_sig808B === undefined ? var_core_value_sig2A26.length : Math.max(0, Math.min(var_core_value_sig808B, var_core_value_sig2A26.length));
      var_core_value_sig2A26.splice(var_core_value_sig1179, 0, var_core_value_sig5964.id);
      let var_core_value_sigEA92 = {
        ...this._data,
        'elementOrder': var_core_value_sig2A26,
        'elements': {
          ...this._data["elements"],
          [var_core_value_sig5964.id]: var_core_value_sig5964
        }
      };
      this._applyDataUpdate(var_core_value_sigEA92);
    }
    removeElement(var_core_value_sig8FD9) {
      if (!(var_core_value_sig8FD9 in this._data["elements"])) return;
      let var_core_value_sig1AE5 = {
        ...this._data["elements"]
      };
      delete var_core_value_sig1AE5[var_core_value_sig8FD9], this._applyDataUpdate({
        ...this._data,
        'elementOrder': this._data["elementOrder"].filter(var_core_value_sig2D58 => var_core_value_sig2D58 !== var_core_value_sig8FD9),
        'elements': var_core_value_sig1AE5
      });
    }
    updateElement(var_core_value_sig7100, var_core_value_sigA19A) {
      let var_core_value_sigD3F5 = this._data["elements"][var_core_value_sig7100];
      if (!var_core_value_sigD3F5) return;
      let var_core_value_sig3082 = {
        ...var_core_value_sigD3F5,
        ...var_core_value_sigA19A
      };
      this._applyDataUpdate({
        ...this._data,
        'elements': {
          ...this._data['elements'],
          [var_core_value_sig7100]: var_core_value_sig3082
        }
      });
    }
    setElementOrder(var_core_value_sigF5D1) {
      if (!var_core_value_sigF5D1.length) return;
      let var_core_value_sig8775 = new Set(this._data["elementOrder"]),
        var_core_value_sig481B = var_core_value_sigF5D1.filter(var_core_value_sig223F => var_core_value_sig8775.has(var_core_value_sig223F)),
        var_core_value_sig13D7 = this._data["elementOrder"].filter(var_core_value_sigD749 => !var_core_value_sig481B.includes(var_core_value_sigD749));
      this._applyDataUpdate({
        ...this._data,
        'elementOrder': [...var_core_value_sig481B, ...var_core_value_sig13D7]
      });
    }
    resolveElements() {
      let var_core_value_sig90C0 = this._data["masterPageId"] ? this._ctx["getMasterPage"](this._data["masterPageId"]) : undefined,
        var_core_value_sigF1B2 = this._data["layoutPageId"] ? this._ctx['getLayoutPage'](this._data['layoutPageId']) : undefined,
        var_core_value_sigC2BB = var_core_value_sigF1B2 ? _r(var_core_value_sigF1B2.elements) : new Set(),
        var_core_value_sigD9DB = _r(this._data["elements"]),
        var_core_value_sigA363 = qe(this._data),
        var_core_value_sigFBA5 = yr(this._data),
        var_core_value_sigAC47 = !var_core_value_sigF1B2 || yr(var_core_value_sigF1B2),
        var_core_value_sigA06F = var_core_value_sigFBA5 && var_core_value_sigAC47,
        var_core_value_sig770E = var_core_value_sigFBA5,
        var_core_value_sig4654 = fr(this._data, var_core_value_sigF1B2, var_core_value_sig90C0),
        var_core_value_sigB26B = pr(this._data, this._ctx),
        var_core_value_sig019B = [],
        var_core_value_sigC6BC = [],
        var_core_value_sig8EC2 = [];
      if (var_core_value_sig90C0) for (let var_core_value_sigCFFA of var_core_value_sig90C0.elementOrder) {
        let var_core_value_sig8061 = var_core_value_sig90C0.elements[var_core_value_sigCFFA];
        if (!var_core_value_sig8061 || Je(var_core_value_sig8061, var_core_value_sigA363)) continue;
        let var_core_value_sig4D4C = gr(var_core_value_sig8061, var_core_value_sig4654, var_core_value_sigB26B);
        if (!var_core_value_sig4D4C || !var_core_value_sigFBA5 && br(var_core_value_sig8061) || !var_core_value_sigA06F && B(var_core_value_sig8061)) continue;
        let var_core_value_sigC9E0 = M(var_core_value_sig8061);
        var_core_value_sigC9E0 && (var_core_value_sigC2BB.has(var_core_value_sigC9E0) || var_core_value_sigD9DB.has(var_core_value_sigC9E0)) || var_core_value_sig019B.push(var_core_value_sig4D4C);
      }
      if (var_core_value_sigF1B2) for (let var_core_value_sig58C1 of var_core_value_sigF1B2.elementOrder) {
        let var_core_value_sig76BA = var_core_value_sigF1B2.elements[var_core_value_sig58C1];
        if (!var_core_value_sig76BA || Je(var_core_value_sig76BA, var_core_value_sigA363)) continue;
        let var_core_value_sigFBFA = gr(var_core_value_sig76BA, var_core_value_sig4654, var_core_value_sigB26B);
        if (!var_core_value_sigFBFA || !var_core_value_sigFBA5 && br(var_core_value_sig76BA) || !var_core_value_sig770E && B(var_core_value_sig76BA)) continue;
        let var_core_value_sigF602 = M(var_core_value_sig76BA);
        var_core_value_sigF602 && var_core_value_sigD9DB.has(var_core_value_sigF602) || var_core_value_sigC6BC.push(var_core_value_sigFBFA);
      }
      for (let var_core_value_sig5090 of this._data["elementOrder"]) {
        let var_core_value_sig1BBD = this._data['elements'][var_core_value_sig5090];
        var_core_value_sig1BBD && var_core_value_sig8EC2.push(var_core_value_sig1BBD);
      }
      return {
        'masterLayer': var_core_value_sig019B,
        'layoutLayer': var_core_value_sigC6BC,
        'slideLayer': var_core_value_sig8EC2,
        'all': [...var_core_value_sig019B, ...var_core_value_sigC6BC, ...var_core_value_sig8EC2]
      };
    }
    _applyDataUpdate(var_core_value_sigA8C3) {
      this._data = var_core_value_sigA8C3, this._syncFn(var_core_value_sigA8C3);
    }
  },
  Sr = class extends e.Disposable {
    constructor(var_core_value_sig5276) {
      super(), this._snapshot = var_core_value_sig5276, U(this, '_pages', new Map()), U(this, "_activeSlideId$", undefined), U(this, "_slideOrder$", undefined), U(this, "activeSlideId$", undefined), U(this, "slideOrder$", undefined);
      for (let var_core_value_sigC368 of var_core_value_sig5276.slideOrder) this._initPage(var_core_value_sigC368);
      this._activeSlideId$ = new a["BehaviorSubject"](var_core_value_sig5276.activeSlideId ?? var_core_value_sig5276.slideOrder[0]), this._slideOrder$ = new a.BehaviorSubject([...var_core_value_sig5276.slideOrder]), this.activeSlideId$ = this._activeSlideId$["asObservable"](), this.slideOrder$ = this._slideOrder$["asObservable"]();
    }
    getPage(var_core_value_sig031B) {
      var var_core_value_sig9DC0, var_core_value_sig95F0, var_core_value_sig9CCB, var_core_value_sigE718;
      return this._snapshot["slides"][var_core_value_sig031B] ?? ((var_core_value_sig9DC0 = this._snapshot["masterPages"]) == null ? undefined : var_core_value_sig9DC0[var_core_value_sig031B]) ?? ((var_core_value_sig95F0 = this._snapshot["layoutPages"]) == null ? undefined : var_core_value_sig95F0[var_core_value_sig031B]) ?? ((var_core_value_sig9CCB = this._snapshot["handoutMasterPages"]) == null ? undefined : var_core_value_sig9CCB[var_core_value_sig031B]) ?? ((var_core_value_sigE718 = this._snapshot['notesMasterPages']) == null ? undefined : var_core_value_sigE718[var_core_value_sig031B]);
    }
    getMasterPage(var_core_value_sigAEC8) {
      var var_core_value_sigB977;
      return (var_core_value_sigB977 = this._snapshot["masterPages"]) == null ? undefined : var_core_value_sigB977[var_core_value_sigAEC8];
    }
    getLayoutPage(var_core_value_sig2949) {
      var var_core_value_sig308A;
      return (var_core_value_sig308A = this._snapshot['layoutPages']) == null ? undefined : var_core_value_sig308A[var_core_value_sig2949];
    }
    getSlideIndex(var_core_value_sig528D) {
      let var_core_value_sigA309 = this._slideOrder$['getValue']().indexOf(var_core_value_sig528D);
      return var_core_value_sigA309 >= 0 ? var_core_value_sigA309 : undefined;
    }
    getSlide(var_core_value_sig9E20) {
      return this._pages["get"](var_core_value_sig9E20);
    }
    getSlides() {
      return this._slideOrder$["getValue"]().map(var_core_value_sigAD561 => this._pages["get"](var_core_value_sigAD561)).filter(var_core_value_sigDB4A => var_core_value_sigDB4A !== undefined);
    }
    getActiveSlide() {
      let var_core_value_sig26BB = this._activeSlideId$["getValue"]();
      return var_core_value_sig26BB ? this._pages["get"](var_core_value_sig26BB) : undefined;
    }
    resolveSlidePageReferences(var_core_value_sig19B4, var_core_value_sig218A) {
      let var_core_value_sig14CB = this._slideOrder$["getValue"](),
        var_core_value_sigFDEE = var_core_value_sig218A ?? var_core_value_sig14CB.length,
        var_core_value_sigA676 = var_core_value_sig14CB[Math.min(Math.max(var_core_value_sigFDEE - 1, 0), var_core_value_sig14CB.length - 1)],
        var_core_value_sigC27E = var_core_value_sigA676 ? this._snapshot['slides'][var_core_value_sigA676] : undefined,
        var_core_value_sigA70D = var_core_value_sig19B4.layoutPageId ? [var_core_value_sig19B4.layoutPageId] : [var_core_value_sigC27E == null ? undefined : var_core_value_sigC27E.layoutPageId, ...(this._snapshot["layoutPageOrder"] ?? [])];
      for (let var_core_value_sig6418 of var_core_value_sigA70D) {
        var var_core_value_sigCE10, var_core_value_sigA3861;
        if (!var_core_value_sig6418) continue;
        let var_core_value_sigF704 = (var_core_value_sigCE10 = this._snapshot["layoutPages"]) == null ? undefined : var_core_value_sigCE10[var_core_value_sig6418],
          var_core_value_sig2BCF = var_core_value_sigF704 == null ? undefined : var_core_value_sigF704.masterPageId;
        if (!(!var_core_value_sig2BCF || !((var_core_value_sigA3861 = this._snapshot["masterPages"]) != null && var_core_value_sigA3861[var_core_value_sig2BCF]) || var_core_value_sig19B4.masterPageId && var_core_value_sig19B4.masterPageId !== var_core_value_sig2BCF)) return {
          ...var_core_value_sig19B4,
          'layoutPageId': var_core_value_sig6418,
          'masterPageId': var_core_value_sig2BCF
        };
      }
      return null;
    }
    setActiveSlide(var_core_value_sigCD82) {
      this._pages["has"](var_core_value_sigCD82) && this._activeSlideId$['getValue']() !== var_core_value_sigCD82 && (this._snapshot['activeSlideId'] = var_core_value_sigCD82, this._activeSlideId$['next'](var_core_value_sigCD82));
    }
    createSlide(var_core_value_sig44DD = {}, var_core_value_sig96FA) {
      let var_core_value_sigAB68 = var_core_value_sig44DD.id ?? (0, e.generateRandomId)(6),
        var_core_value_sig040A = this._slideOrder$["getValue"](),
        var_core_value_sig2AE0 = {
          'id': var_core_value_sigAB68,
          'pageType': "slide",
          'name': var_core_value_sig44DD.name ?? "Slide " + (var_core_value_sig040A.length + 1),
          'elementOrder': var_core_value_sig44DD.elementOrder ?? [],
          'elements': var_core_value_sig44DD.elements ?? {},
          'showMasterSp': var_core_value_sig44DD.showMasterSp ?? true,
          ...var_core_value_sig44DD
        };
      this._snapshot["slides"][var_core_value_sigAB68] = var_core_value_sig2AE0;
      let var_core_value_sigC349 = [...var_core_value_sig040A],
        var_core_value_sig9D96 = var_core_value_sig96FA === undefined ? var_core_value_sigC349.length : var_core_value_sig96FA;
      var_core_value_sigC349.splice(var_core_value_sig9D96, 0, var_core_value_sigAB68), this._snapshot["slideOrder"] = var_core_value_sigC349;
      let var_core_value_sig2776 = this._initPage(var_core_value_sigAB68);
      return this._slideOrder$['next'](var_core_value_sigC349), this._activeSlideId$["getValue"]() || this._activeSlideId$['next'](var_core_value_sigAB68), var_core_value_sig2776;
    }
    deleteSlide(var_core_value_sig6FB2) {
      var var_core_value_sigEB43;
      if (!this._pages["has"](var_core_value_sig6FB2)) return;
      (var_core_value_sigEB43 = this._pages['get'](var_core_value_sig6FB2)) == null || var_core_value_sigEB43.dispose(), this._pages["delete"](var_core_value_sig6FB2), delete this._snapshot["slides"][var_core_value_sig6FB2];
      let var_core_value_sig4186 = this._slideOrder$['getValue']().filter(var_core_value_sig1896 => var_core_value_sig1896 !== var_core_value_sig6FB2);
      if (this._snapshot["slideOrder"] = var_core_value_sig4186, this._slideOrder$["next"](var_core_value_sig4186), this._activeSlideId$["getValue"]() === var_core_value_sig6FB2) {
        let var_core_value_sig0285 = Math.max(0, var_core_value_sig4186.indexOf(var_core_value_sig6FB2) - 1);
        this._activeSlideId$['next'](var_core_value_sig4186[var_core_value_sig0285]);
      }
    }
    moveSlide(var_core_value_sigF963, var_core_value_sigB608) {
      let var_core_value_sigF866 = [...this._slideOrder$['getValue']()],
        var_core_value_sig5EFB = var_core_value_sigF866.indexOf(var_core_value_sigF963);
      var_core_value_sig5EFB !== -1 && var_core_value_sig5EFB !== var_core_value_sigB608 && (var_core_value_sigF866.splice(var_core_value_sig5EFB, 1), var_core_value_sigF866.splice(var_core_value_sigB608, 0, var_core_value_sigF963), this._snapshot["slideOrder"] = var_core_value_sigF866, this._slideOrder$["next"](var_core_value_sigF866));
    }
    duplicateSlide(var_core_value_sig3A85) {
      let var_core_value_sig2682 = this._snapshot['slides'][var_core_value_sig3A85];
      if (!var_core_value_sig2682) return;
      let var_core_value_sig4BB5 = this._slideOrder$['getValue']().indexOf(var_core_value_sig3A85) + 1;
      return this.createSlide({
        ...var_core_value_sig2682,
        'id': (0, e.generateRandomId)(6),
        'name': var_core_value_sig2682.name + " (copy)",
        'elements': {
          ...var_core_value_sig2682.elements
        },
        'elementOrder': [...var_core_value_sig2682.elementOrder]
      }, var_core_value_sig4BB5);
    }
    ensureDefaultLayers() {
      let var_core_value_sig6709 = oe();
      this._snapshot["masterPages"] || (this._snapshot["masterPages"] = {}), this._snapshot["masterPageOrder"] || (this._snapshot["masterPageOrder"] = []);
      for (let var_core_value_sig777D of var_core_value_sig6709.masterPageOrder ?? []) this._snapshot["masterPages"][var_core_value_sig777D] || (this._snapshot['masterPages'][var_core_value_sig777D] = var_core_value_sig6709.masterPages[var_core_value_sig777D], this._snapshot["masterPageOrder"].push(var_core_value_sig777D));
      this._snapshot['layoutPages'] || (this._snapshot['layoutPages'] = {}), this._snapshot["layoutPageOrder"] || (this._snapshot["layoutPageOrder"] = []);
      for (let var_core_value_sig3F4C of var_core_value_sig6709.layoutPageOrder ?? []) this._snapshot["layoutPages"][var_core_value_sig3F4C] || (this._snapshot["layoutPages"][var_core_value_sig3F4C] = var_core_value_sig6709.layoutPages[var_core_value_sig3F4C], this._snapshot["layoutPageOrder"].push(var_core_value_sig3F4C));
      this._snapshot["theme"] || (this._snapshot['theme'] = var_core_value_sig6709.theme);
    }
    _initPage(var_core_value_sig52CA) {
      let var_core_value_sigC030 = this._snapshot['slides'][var_core_value_sig52CA];
      if (!var_core_value_sigC030) throw Error("[SlidePageManager] No slide data found for id \"" + var_core_value_sig52CA + '\x22');
      let var_core_value_sig88F6 = new xr(var_core_value_sigC030, this, var_core_value_sigD65A => {
        this._snapshot["slides"][var_core_value_sig52CA] = var_core_value_sigD65A;
      });
      return this._pages['set'](var_core_value_sig52CA, var_core_value_sig88F6), var_core_value_sig88F6;
    }
    dispose() {
      this._pages["forEach"](var_core_value_sig5A13 => var_core_value_sig5A13.dispose()), this._pages["clear"](), super.dispose();
    }
  },
  Cr = class extends e.UnitModel {
    constructor(var_core_value_sig37DB) {
      super(), U(this, "type", e.UniverInstanceType["UNIVER_SLIDE"]), U(this, '_snapshot', undefined), U(this, '_name$', undefined), U(this, "name$", undefined), U(this, "_zoomRatio$", undefined), U(this, "zoomRatio$", undefined), U(this, 'pageManager', undefined), U(this, 'theme', undefined), U(this, "timingSystem", undefined);
      let var_core_value_sig5542 = sr();
      this._snapshot = e.Tools['isEmptyObject'](var_core_value_sig37DB) ? var_core_value_sig5542 : e.Tools["commonExtend"](var_core_value_sig5542, var_core_value_sig37DB), (this._snapshot['id'] === undefined || this._snapshot['id'] === null || this._snapshot['id'] === '') && (this._snapshot['id'] = (0, e.generateRandomId)(6)), this._snapshot["activeSlideId"] && !this._snapshot["slides"][this._snapshot['activeSlideId']] && (this._snapshot["activeSlideId"] = this._snapshot["slideOrder"][0]), Ie(this._snapshot), this._name$ = new a["BehaviorSubject"](this._snapshot['name']), this.name$ = this._name$["asObservable"](), this._zoomRatio$ = new a.BehaviorSubject(this._snapshot['zoomRatio'] ?? 1), this.zoomRatio$ = this._zoomRatio$["asObservable"](), this.pageManager = new Sr(this._snapshot), this.disposeWithMe(this.pageManager), this.theme = new cr(this._snapshot['theme'] ?? b), this.disposeWithMe(this.theme), this.timingSystem = new lr(), this.disposeWithMe(this.timingSystem), this.timingSystem["loadFromDocument"](this._snapshot);
    }
    getUnitId() {
      return this._snapshot['id'];
    }
    setName(var_core_value_sigE0A9) {
      this._snapshot['name'] = var_core_value_sigE0A9, this._name$["next"](var_core_value_sigE0A9);
    }
    getZoomRatio() {
      return this._zoomRatio$["getValue"]();
    }
    setZoomRatio(var_core_value_sigA73E) {
      this._snapshot["zoomRatio"] = var_core_value_sigA73E, this._zoomRatio$["next"](var_core_value_sigA73E);
    }
    getSnapshot() {
      return this._snapshot;
    }
    getThemeData(var_core_value_sig7620) {
      var var_core_value_sigB9FC;
      return (var_core_value_sig7620 ? (var_core_value_sigB9FC = this._snapshot['themes']) == null ? undefined : var_core_value_sigB9FC[var_core_value_sig7620] : undefined) ?? this.theme['getData']();
    }
    getThemeDataForPage(var_core_value_sig5055) {
      return this.getThemeData(this._resolveThemeIdForPage(var_core_value_sig5055));
    }
    getRev() {
      return this._snapshot["rev"] ?? 1;
    }
    incrementRev() {
      this._snapshot['rev'] = (this._snapshot["rev"] ?? 1) + 1;
    }
    setRev(var_core_value_sig3801) {
      this._snapshot["rev"] = var_core_value_sig3801;
    }
    _resolveThemeIdForPage(var_core_value_sig45F0) {
      if (var_core_value_sig45F0) return this._resolveThemeIdFromPage(this.pageManager['getPage'](var_core_value_sig45F0));
    }
    _resolveThemeIdFromPage(var_core_value_sigBC91) {
      if (var_core_value_sigBC91) {
        if (var_core_value_sigBC91.themeId) return var_core_value_sigBC91.themeId;
        if (var_core_value_sigBC91.pageType === "layout") {
          var var_core_value_sigCB88;
          return (var_core_value_sigCB88 = this._snapshot["masterPages"]) == null || (var_core_value_sigCB88 = var_core_value_sigCB88[var_core_value_sigBC91.masterPageId ?? '']) == null ? undefined : var_core_value_sigCB88.themeId;
        }
        if (var_core_value_sigBC91.pageType === "slide") {
          var var_core_value_sig8D65, var_core_value_sig8122;
          let var_core_value_sig0D69 = var_core_value_sigBC91.layoutPageId ? (var_core_value_sig8D65 = this._snapshot["layoutPages"]) == null ? undefined : var_core_value_sig8D65[var_core_value_sigBC91.layoutPageId] : undefined;
          return this._resolveThemeIdFromPage(var_core_value_sig0D69) ?? ((var_core_value_sig8122 = this._snapshot["masterPages"]) == null || (var_core_value_sig8122 = var_core_value_sig8122[var_core_value_sigBC91.masterPageId ?? (var_core_value_sig0D69 == null ? undefined : var_core_value_sig0D69.masterPageId) ?? '']) == null ? undefined : var_core_value_sig8122.themeId);
        }
      }
    }
  };
let wr = class {
  constructor(var_core_value_sigEDC6, var_core_value_sig611A, var_core_value_sig6BD9) {
    this._commandService = var_core_value_sigEDC6, this._drawingService = var_core_value_sig611A, this._instanceService = var_core_value_sig6BD9, U(this, "hostType", e.UniverInstanceType["UNIVER_SLIDE"]);
  }
  get shapeChanged$() {
    return (0, a.merge)(this._drawingService["add$"], this._drawingService['update$'], this._drawingService["remove$"]).pipe((0, a.mergeMap)(var_core_value_sigF593 => [...new Set(var_core_value_sigF593.map(({
      unitId: var_core_value_sig480E
    }) => var_core_value_sig480E))]), (0, a.map)(var_core_value_sig3607 => ({
      'unitId': var_core_value_sig3607
    })));
  }
  getShape(var_core_value_sig7E56) {
    let var_core_value_sig4161 = this._getDrawing(var_core_value_sig7E56);
    if (!var_core_value_sig4161) return null;
    let var_core_value_sig7580 = var_core_value_sig4161.element,
      var_core_value_sig1F18 = var_core_value_sig7580.type === "connector" ? var_core_value_sig7580.connectorData : var_core_value_sig7580.shapeData,
      var_core_value_sigD5A0 = var_core_value_sig7580.transform;
    return {
      ...var_core_value_sig7E56,
      'shapeType': var_core_value_sig1F18.shapeType ?? n.ShapeTypeEnum["Rect"],
      'shapeData': e.Tools["deepClone"](var_core_value_sig1F18),
      'name': var_core_value_sig7580.name,
      'description': var_core_value_sig7580.description,
      'visible': var_core_value_sig7580.visible !== false,
      'selectable': var_core_value_sig7580.selectable !== false,
      'transform': {
        'left': var_core_value_sigD5A0.left ?? 0,
        'top': var_core_value_sigD5A0.top ?? 0,
        'width': var_core_value_sigD5A0.width ?? J.shapeWidth,
        'height': var_core_value_sigD5A0.height ?? J.shapeHeight,
        'rotation': var_core_value_sigD5A0.rotation ?? 0,
        'flipX': var_core_value_sigD5A0.flipX ?? false,
        'flipY': var_core_value_sigD5A0.flipY ?? false
      }
    };
  }
  listShapes(var_core_value_sig81B2) {
    let var_core_value_sigA0A5 = this._drawingService["getDrawingData"](var_core_value_sig81B2.unitId, var_core_value_sig81B2.subUnitId) ?? {};
    return Object.values(var_core_value_sigA0A5).map(var_core_value_sigB512 => this.getShape({
      ...var_core_value_sig81B2,
      'shapeId': var_core_value_sigB512.drawingId
    })).filter(var_core_value_sigF2E6 => !!var_core_value_sigF2E6);
  }
  listShapesInUnit(var_core_value_sig10AA) {
    let var_core_value_sigE6D0 = this._instanceService["getUnit"](var_core_value_sig10AA, e.UniverInstanceType['UNIVER_SLIDE']);
    return (var_core_value_sigE6D0 == null ? undefined : var_core_value_sigE6D0.getSnapshot().slideOrder["flatMap"](var_core_value_sig34C8 => this.listShapes({
      'hostType': this.hostType,
      'unitId': var_core_value_sig10AA,
      'subUnitId': var_core_value_sig34C8
    }))) ?? [];
  }
  createShape(var_core_value_sig8E91, var_core_value_sig00BE) {
    let var_core_value_sig7BB5 = (0, e.generateRandomId)(6),
      var_core_value_sig6AAD = Tr(var_core_value_sig00BE.transform),
      var_core_value_sig1157 = {
        ...e.Tools["deepClone"](var_core_value_sig00BE.shapeData ?? (0, n.createDefaultInsertedShapeData)(var_core_value_sig00BE.shapeType)),
        'shapeType': var_core_value_sig00BE.shapeType
      },
      var_core_value_sigA694 = (0, n.isConnectorShape)(var_core_value_sig00BE.shapeType) ? {
        'id': var_core_value_sig7BB5,
        'type': "connector",
        'transform': var_core_value_sig6AAD,
        'connectorData': var_core_value_sig1157,
        'name': var_core_value_sig00BE.name,
        'description': var_core_value_sig00BE.description,
        'visible': var_core_value_sig00BE.visible ?? true,
        'selectable': var_core_value_sig00BE.selectable ?? true
      } : {
        'id': var_core_value_sig7BB5,
        'type': "shape",
        'transform': var_core_value_sig6AAD,
        'shapeData': var_core_value_sig1157,
        'name': var_core_value_sig00BE.name,
        'description': var_core_value_sig00BE.description,
        'visible': var_core_value_sig00BE.visible ?? true,
        'selectable': var_core_value_sig00BE.selectable ?? true
      };
    return this._commandService['syncExecuteCommand'](Xe.id, {
      'unitId': var_core_value_sig8E91.unitId,
      'subUnitId': var_core_value_sig8E91.subUnitId,
      'element': var_core_value_sigA694
    }) ? {
      ...var_core_value_sig8E91,
      'shapeId': var_core_value_sig7BB5,
      'shapeType': var_core_value_sig00BE.shapeType,
      'shapeData': var_core_value_sig1157,
      'name': var_core_value_sig00BE.name,
      'description': var_core_value_sig00BE.description,
      'visible': var_core_value_sig00BE.visible ?? true,
      'selectable': var_core_value_sig00BE.selectable ?? true,
      'transform': var_core_value_sig6AAD
    } : null;
  }
  updateShape(var_core_value_sig18E01, var_core_value_sig0428) {
    var var_core_value_sigBE07;
    if (var_core_value_sig0428.smartArtOperations) return this._commandService["syncExecuteCommand"](Ln.id, {
      'unitId': var_core_value_sig18E01.unitId,
      'subUnitId': var_core_value_sig18E01.subUnitId,
      'drawingId': var_core_value_sig18E01.shapeId,
      'operations': var_core_value_sig0428.smartArtOperations
    });
    let var_core_value_sig555F = this._getDrawing(var_core_value_sig18E01);
    if (!var_core_value_sig555F) return false;
    let var_core_value_sig3D6F = var_core_value_sig555F.element,
      var_core_value_sig336C = var_core_value_sig3D6F.type === "connector" ? var_core_value_sig3D6F.connectorData : var_core_value_sig3D6F.shapeData,
      var_core_value_sig6E68 = {
        ...(var_core_value_sig0428.shapeData ?? var_core_value_sig336C),
        'shapeType': var_core_value_sig0428.shapeType ?? ((var_core_value_sigBE07 = var_core_value_sig0428.shapeData) == null ? undefined : var_core_value_sigBE07.shapeType) ?? var_core_value_sig336C.shapeType
      },
      var_core_value_sig8DFE = var_core_value_sig3D6F.type === "connector" ? {
        ...var_core_value_sig3D6F,
        'transform': {
          ...var_core_value_sig3D6F.transform,
          ...var_core_value_sig0428.transform
        },
        'connectorData': var_core_value_sig6E68,
        'name': "name" in var_core_value_sig0428 ? var_core_value_sig0428.name : var_core_value_sig3D6F.name,
        'description': "description" in var_core_value_sig0428 ? var_core_value_sig0428.description : var_core_value_sig3D6F.description,
        'visible': var_core_value_sig0428.visible ?? var_core_value_sig3D6F.visible,
        'selectable': var_core_value_sig0428.selectable ?? var_core_value_sig3D6F.selectable
      } : {
        ...var_core_value_sig3D6F,
        'transform': {
          ...var_core_value_sig3D6F.transform,
          ...var_core_value_sig0428.transform
        },
        'shapeData': var_core_value_sig6E68,
        'name': "name" in var_core_value_sig0428 ? var_core_value_sig0428.name : var_core_value_sig3D6F.name,
        'description': "description" in var_core_value_sig0428 ? var_core_value_sig0428.description : var_core_value_sig3D6F.description,
        'visible': var_core_value_sig0428.visible ?? var_core_value_sig3D6F.visible,
        'selectable': var_core_value_sig0428.selectable ?? var_core_value_sig3D6F.selectable
      };
    return this._commandService['syncExecuteCommand'](Dn.id, {
      'patches': [{
        'unitId': var_core_value_sig18E01.unitId,
        'subUnitId': var_core_value_sig18E01.subUnitId,
        'drawingId': var_core_value_sig18E01.shapeId,
        'element': var_core_value_sig8DFE
      }]
    });
  }
  convertSmartArtToShapes(var_core_value_sig48EA) {
    let var_core_value_sig5E16 = this.getShape(var_core_value_sig48EA);
    if (!var_core_value_sig5E16 || var_core_value_sig5E16.shapeType !== n.ShapeTypeEnum["SmartArt"] || !("smartArt" in var_core_value_sig5E16.shapeData)) return null;
    let var_core_value_sig09F3 = var_core_value_sig5E16.shapeData["smartArt"].presentationShapeOrder["map"](() => (0, e.generateRandomId)(6));
    if (var_core_value_sig09F3.length === 0) return null;
    let var_core_value_sig4592 = var_core_value_sig09F3.length > 1 ? (0, e.generateRandomId)(6) : undefined;
    return this._commandService["syncExecuteCommand"](at.id, {
      'unitId': var_core_value_sig48EA.unitId,
      'subUnitId': var_core_value_sig48EA.subUnitId,
      'drawingId': var_core_value_sig48EA.shapeId,
      'childIds': var_core_value_sig09F3,
      'groupId': var_core_value_sig4592
    }) ? var_core_value_sig09F3.map(var_core_value_sigB744 => this.getShape({
      ...var_core_value_sig48EA,
      'shapeId': var_core_value_sigB744
    })).filter(var_core_value_sigEAE2 => !!var_core_value_sigEAE2) : null;
  }
  createFormulaLastValueMutation(var_core_value_sigC5C4, var_core_value_sig1617, var_core_value_sig4169) {
    let var_core_value_sig6D19 = this._getDrawing(var_core_value_sigC5C4);
    if (!var_core_value_sig6D19) return null;
    let var_core_value_sig279C = var_core_value_sig6D19.element;
    if (var_core_value_sig279C.type !== 'connector' && var_core_value_sig279C.type !== "shape") return null;
    let var_core_value_sigAC51 = var_core_value_sig279C.type === 'connector' ? var_core_value_sig279C.connectorData : var_core_value_sig279C.shapeData,
      var_core_value_sig8986 = var_core_value_sigAC51.formulaBinding;
    if (!var_core_value_sig8986) return null;
    let var_core_value_sigCAF7 = {
        ...var_core_value_sigAC51,
        'formulaBinding': {
          ...var_core_value_sig8986,
          'lastValue': e.Tools["deepClone"](var_core_value_sig4169)
        }
      },
      var_core_value_sigED1C = var_core_value_sig279C.type === "connector" ? {
        ...var_core_value_sig279C,
        'connectorData': var_core_value_sigCAF7
      } : {
        ...var_core_value_sig279C,
        'shapeData': var_core_value_sigCAF7
      };
    return {
      'id': G.id,
      'params': {
        'unitId': var_core_value_sigC5C4.unitId,
        'subUnitId': var_core_value_sigC5C4.subUnitId,
        'drawingId': var_core_value_sigC5C4.shapeId,
        'element': var_core_value_sigED1C,
        'transform': var_core_value_sig6D19.transform,
        'formulaLastValueGuard': var_core_value_sig1617
      }
    };
  }
  removeShape(var_core_value_sig726E) {
    return this._commandService["syncExecuteCommand"](ht.id, {
      'unitId': var_core_value_sig726E.unitId,
      'subUnitId': var_core_value_sig726E.subUnitId,
      'drawingIds': [var_core_value_sig726E.shapeId]
    });
  }
  bringToFront(var_core_value_sig2CD3) {
    return this._arrange(var_core_value_sig2CD3, e.ArrangeTypeEnum["front"]);
  }
  bringForward(var_core_value_sig038E) {
    return this._arrange(var_core_value_sig038E, e.ArrangeTypeEnum["forward"]);
  }
  sendBackward(var_core_value_sigAA1E) {
    return this._arrange(var_core_value_sigAA1E, e.ArrangeTypeEnum["backward"]);
  }
  sendToBack(var_core_value_sigC9F5) {
    return this._arrange(var_core_value_sigC9F5, e.ArrangeTypeEnum["back"]);
  }
  setZOrder(var_core_value_sig7EEA, var_core_value_sig59CE1) {
    return this._reorder(var_core_value_sig7EEA, this._getDrawingOrder(var_core_value_sig7EEA), var_core_value_sig59CE1);
  }
  _getDrawing(var_core_value_sig33C8) {
    let var_core_value_sig957F = this._drawingService["getDrawingByParam"]({
      'unitId': var_core_value_sig33C8.unitId,
      'subUnitId': var_core_value_sig33C8.subUnitId,
      'drawingId': var_core_value_sig33C8.shapeId
    });
    return (var_core_value_sig957F == null ? undefined : var_core_value_sig957F.sourcePageType) === 'slide' && (var_core_value_sig957F.element['type'] === "shape" || var_core_value_sig957F.element["type"] === "connector") ? var_core_value_sig957F : null;
  }
  _getDrawingOrder(var_core_value_sig803B) {
    let var_core_value_sig5830 = this._drawingService["getDrawingData"](var_core_value_sig803B.unitId, var_core_value_sig803B.subUnitId) ?? {};
    return this._drawingService['getDrawingOrder'](var_core_value_sig803B.unitId, var_core_value_sig803B.subUnitId).filter(var_core_value_sigE68A => {
      var var_core_value_sig3E68;
      return ((var_core_value_sig3E68 = var_core_value_sig5830[var_core_value_sigE68A]) == null ? undefined : var_core_value_sig3E68.sourcePageType) === "slide";
    });
  }
  _arrange(var_core_value_sig4A7C, var_core_value_sigF975) {
    let var_core_value_sigCDAF = this._getDrawingOrder(var_core_value_sig4A7C),
      var_core_value_sigA298 = var_core_value_sigCDAF.indexOf(var_core_value_sig4A7C.shapeId);
    return var_core_value_sigA298 < 0 ? false : this._reorder(var_core_value_sig4A7C, var_core_value_sigCDAF, (0, e.getDrawingOrderIndex)(var_core_value_sigA298, var_core_value_sigCDAF.length, var_core_value_sigF975));
  }
  _reorder(var_core_value_sig0B40, var_core_value_sig330B, var_core_value_sig3625) {
    let var_core_value_sig0B4E = var_core_value_sig330B.indexOf(var_core_value_sig0B40.shapeId);
    return var_core_value_sig0B4E < 0 ? false : (var_core_value_sig330B.splice(var_core_value_sig0B4E, 1), var_core_value_sig330B.splice((0, e.normalizeDrawingOrderIndex)(var_core_value_sig3625, var_core_value_sig330B.length + 1), 0, var_core_value_sig0B40.shapeId), this._commandService["syncExecuteCommand"](vt.id, {
      'unitId': var_core_value_sig0B40.unitId,
      'subUnitId': var_core_value_sig0B40.subUnitId,
      'drawingIds': var_core_value_sig330B
    }));
  }
};
wr = q([K(0, e.ICommandService), K(1, E), K(2, e.IUniverInstanceService)], wr);
function Tr(var_core_value_sigA77A) {
  return {
    'left': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.left) ?? 0,
    'top': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.top) ?? 0,
    'width': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.width) ?? J.shapeWidth,
    'height': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.height) ?? J.shapeHeight,
    'rotation': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.rotation) ?? 0,
    'flipX': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.flipX) ?? false,
    'flipY': (var_core_value_sigA77A == null ? undefined : var_core_value_sigA77A.flipY) ?? false
  };
}
const Er = {};
let Dr = class extends e.Disposable {
  constructor(var_core_value_sig0E9F, var_core_value_sigE5BA) {
    super(), this._instanceSrv = var_core_value_sig0E9F, this._slideDrawingService = var_core_value_sigE5BA, this._initUnitListener();
  }
  _initUnitListener() {
    this._instanceSrv["getAllUnitsForType"](e.UniverInstanceType['UNIVER_SLIDE']).forEach(var_core_value_sigF4C5 => this._loadUnit(var_core_value_sigF4C5)), this.disposeWithMe(this._instanceSrv['getTypeOfUnitAdded$'](e.UniverInstanceType["UNIVER_SLIDE"]).subscribe(var_core_value_sig5410 => this._loadUnit(var_core_value_sig5410.unit))), this.disposeWithMe(this._instanceSrv["getTypeOfUnitDisposed$"](e.UniverInstanceType["UNIVER_SLIDE"]).subscribe(var_core_value_sig492F => {
      this._slideDrawingService["removeDrawingDataForUnit"](var_core_value_sig492F.getUnitId());
    }));
  }
  _loadUnit(var_core_value_sig4A83) {
    let var_core_value_sig58AA = var_core_value_sig4A83.getUnitId(),
      var_core_value_sig84C4 = {},
      var_core_value_sigB6F7 = var_core_value_sig4A83.pageManager["getSlides"]();
    for (let var_core_value_sig8EA0 of var_core_value_sigB6F7) {
      let var_core_value_sig26DB = var_core_value_sig8EA0.getId(),
        {
          data: var_core_value_sigF0F9,
          order: var_core_value_sig1A0F
        } = D(var_core_value_sig4A83, var_core_value_sig8EA0);
      var_core_value_sig1A0F.length > 0 && (var_core_value_sig84C4[var_core_value_sig26DB] = {
        'data': var_core_value_sigF0F9,
        'order': var_core_value_sig1A0F
      });
    }
    this._slideDrawingService["registerDrawingData"](var_core_value_sig58AA, var_core_value_sig84C4), this._slideDrawingService['initializeNotification'](var_core_value_sig58AA);
  }
};
Dr = q([K(0, e.IUniverInstanceService), K(1, E)], Dr);
const Or = new Set([ln.id, yt.id, z.id]);
let kr = class extends e.Disposable {
  constructor(var_core_value_sigB495, var_core_value_sig70D0, var_core_value_sig2A8A) {
    super(), this._commandService = var_core_value_sigB495, this._permissionService = var_core_value_sig70D0, this._univerInstanceService = var_core_value_sig2A8A, this._univerInstanceService['getAllUnitsForType'](e.UniverInstanceType['UNIVER_SLIDE']).forEach(var_core_value_sigA6F6 => this._registerUnitPermissionPoints(var_core_value_sigA6F6.getUnitId())), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitAdded$"](e.UniverInstanceType["UNIVER_SLIDE"]).subscribe(({
      unit: var_core_value_sigCDDA
    }) => this._registerUnitPermissionPoints(var_core_value_sigCDDA.getUnitId()))), this.disposeWithMe(this._commandService["beforeCommandExecuted"]((var_core_value_sigE243, var_core_value_sig74A8) => this._check(var_core_value_sigE243, var_core_value_sig74A8))), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](e.UniverInstanceType["UNIVER_SLIDE"]).subscribe(var_core_value_sig21B2 => sn(this._permissionService, var_core_value_sig21B2.getUnitId())));
  }
  _registerUnitPermissionPoints(var_core_value_sig3782) {
    Xt.forEach(var_core_value_sigDE08 => {
      let var_core_value_sigACCB = rn(var_core_value_sig3782, var_core_value_sig3782, var_core_value_sigDE08);
      this._permissionService["getPermissionPoint"](var_core_value_sigACCB.id) || this._permissionService["addPermissionPoint"](var_core_value_sigACCB);
    });
  }
  _check(var_core_value_sigD22E, var_core_value_sig3455) {
    var var_core_value_sig5CEF;
    if (var_core_value_sig3455 != null && var_core_value_sig3455.fromCollab || var_core_value_sig3455 != null && var_core_value_sig3455.fromChangeset) return;
    let var_core_value_sig43D5 = Y(var_core_value_sigD22E.params) ? var_core_value_sigD22E.params : undefined;
    if (var_core_value_sigD22E.id === 'slide.mutation.update-slide-element' && var_core_value_sig43D5 != null && var_core_value_sig43D5.formulaLastValueGuard) return;
    let var_core_value_sig1395 = jr(var_core_value_sigD22E.id, var_core_value_sig43D5),
      var_core_value_sig9FA0 = Ar(var_core_value_sig3455),
      var_core_value_sig055E = (var_core_value_sig43D5 ? X(var_core_value_sig43D5, "unitId") : undefined) ?? var_core_value_sig9FA0 ?? (var_core_value_sig1395 ? (var_core_value_sig5CEF = this._univerInstanceService['getCurrentUnitOfType'](e.UniverInstanceType["UNIVER_SLIDE"])) == null ? undefined : var_core_value_sig5CEF.getUnitId() : undefined);
    if (!var_core_value_sig055E || this._univerInstanceService["getUnitType"](var_core_value_sig055E) !== e.UniverInstanceType['UNIVER_SLIDE']) return;
    if (var_core_value_sig1395) {
      if (!an(this._permissionService, var_core_value_sig055E, var_core_value_sig055E, var_core_value_sig1395)) throw new e.CustomCommandExecutionError("Presentation " + i.UnitAction[var_core_value_sig1395] + '\x20permission\x20denied.');
      if (var_core_value_sigD22E.id === "slide.operation.cut-selection" && !an(this._permissionService, var_core_value_sig055E, var_core_value_sig055E, i.UnitAction["Edit"])) throw new e.CustomCommandExecutionError("Presentation Edit permission denied.");
      return;
    }
    if (Or.has(var_core_value_sigD22E.id) || !var_core_value_sigD22E.id["startsWith"]('slide.command.') && !var_core_value_sigD22E.id["startsWith"]("slide.mutation.")) return;
    let var_core_value_sig7C77 = this._univerInstanceService["getUnit"](var_core_value_sig055E, e.UniverInstanceType["UNIVER_SLIDE"]);
    if (!var_core_value_sig7C77 || !cn(this._permissionService, var_core_value_sig055E, Mr(var_core_value_sig7C77, var_core_value_sig43D5 ?? {}, var_core_value_sigD22E.id))) throw new e.CustomCommandExecutionError("Presentation edit permission denied.");
  }
};
kr = q([K(0, e.ICommandService), K(1, e.IPermissionService), K(2, e.IUniverInstanceService)], kr);
function Ar(var_core_value_sig0701) {
  return typeof (var_core_value_sig0701 == null ? undefined : var_core_value_sig0701.unitId) == "string" ? var_core_value_sig0701.unitId : undefined;
}
;
function jr(var_core_value_sig5DCA, var_core_value_sigF1AB) {
  if (var_core_value_sig5DCA === 'slide.operation.copy-selection' || var_core_value_sig5DCA === "slide.operation.cut-selection" || var_core_value_sig5DCA === "slide.operation.slide-table-copy-table") return i.UnitAction["Copy"];
  if (var_core_value_sig5DCA === "slide-table.operation.keyboard") {
    if ((var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.action) === "copy-cells") return i.UnitAction["Copy"];
    if ((var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.action) === "edit-cell" || (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.action) === "clear-cells" || (var_core_value_sigF1AB == null ? undefined : var_core_value_sigF1AB.action) === "paste-cells") return i.UnitAction['Edit'];
  }
  if (var_core_value_sig5DCA === "slide.operation.print") return i.UnitAction["Print"];
  if (var_core_value_sig5DCA === "slides-exchange-client.operation.export-slide") return i.UnitAction["Export"];
  if (var_core_value_sig5DCA.startsWith("thread-comment.command.") || var_core_value_sig5DCA.startsWith("thread-comment.mutation.") || var_core_value_sig5DCA === "slide.operation.start-comment-placement" || var_core_value_sig5DCA === "slide.operation.add-element-comment") return i.UnitAction["Comment"];
}
;
function Mr(var_core_value_sig902F, var_core_value_sig6BD7, var_core_value_sig63E0) {
  let var_core_value_sig1B87 = new Set(),
    var_core_value_sig580B = var_core_value_sig902F.getSnapshot(),
    var_core_value_sig4836 = new Set([X(var_core_value_sig6BD7, 'subUnitId'), X(var_core_value_sig6BD7, 'pageId')].filter(var_core_value_sig9578 => !!var_core_value_sig9578));
  Lr(var_core_value_sig6BD7, 'masterPageIds').forEach(var_core_value_sigA2D31 => var_core_value_sig4836.add(var_core_value_sigA2D31));
  let var_core_value_sig4C06 = X(var_core_value_sig6BD7, "masterPageId");
  var_core_value_sig4C06 && var_core_value_sig4836.add(var_core_value_sig4C06), var_core_value_sig6BD7.applyToAll === true && var_core_value_sig580B.slideOrder['forEach'](var_core_value_sigC218 => var_core_value_sig4836.add(var_core_value_sigC218));
  let var_core_value_sig4D56 = Y(var_core_value_sig6BD7.slideTransitionRefs) ? var_core_value_sig6BD7.slideTransitionRefs : {};
  Object.keys(var_core_value_sig4D56).forEach(var_core_value_sigADEC => var_core_value_sig4836.add(var_core_value_sigADEC));
  let var_core_value_sig7C26 = Rr(var_core_value_sig6BD7.sourcePageType) ? var_core_value_sig6BD7.sourcePageType : undefined;
  for (let var_core_value_sig3D8E of var_core_value_sig4836) {
    let var_core_value_sig7F33 = var_core_value_sig7C26 ?? Fr(var_core_value_sig902F, var_core_value_sig3D8E);
    var_core_value_sig7F33 === "master" || var_core_value_sig7F33 === "layout" ? var_core_value_sig1B87.add(W) : var_core_value_sig7F33 === "slide" && var_core_value_sig1B87.add(en(var_core_value_sig3D8E));
  }
  let var_core_value_sigBC59 = new Set();
  ["drawingId", "elementId", "replaceElementId"].forEach(var_core_value_sig37E5 => {
    let var_core_value_sigF079 = X(var_core_value_sig6BD7, var_core_value_sig37E5);
    var_core_value_sigF079 && var_core_value_sigBC59.add(var_core_value_sigF079);
  }), Lr(var_core_value_sig6BD7, "drawingIds").forEach(var_core_value_sigFCA0 => var_core_value_sigBC59.add(var_core_value_sigFCA0)), Y(var_core_value_sig6BD7.element) && typeof var_core_value_sig6BD7.element['id'] == "string" && var_core_value_sigBC59.add(var_core_value_sig6BD7.element['id']), (Array.isArray(var_core_value_sig6BD7.objects) ? var_core_value_sig6BD7.objects : []).forEach(var_core_value_sigC84D => {
    let var_core_value_sigF2BC = Y(var_core_value_sigC84D) ? X(var_core_value_sigC84D, "drawingId") : undefined;
    var_core_value_sigF2BC && var_core_value_sigBC59.add(var_core_value_sigF2BC);
  });
  let var_core_value_sig544E = X(var_core_value_sig6BD7, "subUnitId") ?? X(var_core_value_sig6BD7, "pageId");
  if (var_core_value_sig544E) {
    let var_core_value_sigD37B = var_core_value_sig7C26 ?? Fr(var_core_value_sig902F, var_core_value_sig544E) ?? "slide";
    if (var_core_value_sig63E0 === "slide.command.remove-page" || var_core_value_sig63E0 === "slide.mutation.remove-slide-page") {
      let var_core_value_sig0C53 = var_core_value_sig902F.getSnapshot().slides[var_core_value_sig544E];
      Object.keys((var_core_value_sig0C53 == null ? undefined : var_core_value_sig0C53.elements) ?? {}).forEach(var_core_value_sigFBA4 => var_core_value_sigBC59.add(var_core_value_sigFBA4));
    }
    Pr(var_core_value_sig902F, var_core_value_sig544E, var_core_value_sigD37B, var_core_value_sigBC59, var_core_value_sig1B87);
  } else var_core_value_sigBC59.size && Nr(var_core_value_sig902F, var_core_value_sigFA28 => var_core_value_sigBC59.has(var_core_value_sigFA28.id), var_core_value_sig1B87);
  let var_core_value_sigCE8A = new Set(["chartId", 'tableId', "smartArtId"].map(var_core_value_sig93BE => X(var_core_value_sig6BD7, var_core_value_sig93BE)).filter(var_core_value_sigABEC => !!var_core_value_sigABEC));
  var_core_value_sigCE8A.size && Nr(var_core_value_sig902F, var_core_value_sig2712 => var_core_value_sigCE8A.has(String(var_core_value_sig2712.chartId ?? '')) || var_core_value_sigCE8A.has(String(var_core_value_sig2712.tableId ?? '')) || var_core_value_sigCE8A.has(String(var_core_value_sig2712.smartArtId ?? '')), var_core_value_sig1B87);
  let var_core_value_sig0718 = Y(var_core_value_sig6BD7.slide) ? var_core_value_sig6BD7.slide : undefined,
    var_core_value_sig1B221 = var_core_value_sig0718 ? X(var_core_value_sig0718, 'id') : undefined;
  if (var_core_value_sig0718 && var_core_value_sig1B221) {
    let var_core_value_sig0B9E = Rr(var_core_value_sig0718.pageType) ? var_core_value_sig0718.pageType : "slide";
    var_core_value_sig1B87.add(var_core_value_sig0B9E === "slide" ? en(var_core_value_sig1B221) : W);
    let var_core_value_sigC545 = Y(var_core_value_sig0718.elements) ? var_core_value_sig0718.elements : {};
    Object.keys(var_core_value_sigC545).forEach(var_core_value_sigEA04 => {
      var_core_value_sig1B87.add(tn(var_core_value_sig0B9E, var_core_value_sig1B221, var_core_value_sigEA04));
    });
  }
  return [...var_core_value_sig1B87];
}
;
function Nr(var_core_value_sig8854, var_core_value_sig5275, var_core_value_sig4F9D) {
  let var_core_value_sig278E = var_core_value_sig8854.getSnapshot(),
    var_core_value_sig2921 = (var_core_value_sig12A7, var_core_value_sig6F4E) => {
      Object.entries(var_core_value_sig12A7 ?? {}).forEach(([var_core_value_sig7A62, var_core_value_sig8109]) => {
        let var_core_value_sig7565 = new Set();
        Object.values(var_core_value_sig8109.elements ?? {}).forEach(var_core_value_sig4383 => {
          !Ir(var_core_value_sig4383) || !var_core_value_sig5275(var_core_value_sig4383) || var_core_value_sig7565.add(var_core_value_sig4383.id);
        }), Pr(var_core_value_sig8854, var_core_value_sig7A62, var_core_value_sig6F4E, var_core_value_sig7565, var_core_value_sig4F9D);
      });
    };
  var_core_value_sig2921(var_core_value_sig278E.slides, 'slide'), var_core_value_sig2921(var_core_value_sig278E.masterPages, 'master'), var_core_value_sig2921(var_core_value_sig278E.layoutPages, "layout");
}
;
function Pr(var_core_value_sig3959, var_core_value_sig926F, var_core_value_sig9414, var_core_value_sig32E7, var_core_value_sigD8C3) {
  var var_core_value_sig3A44, var_core_value_sig0642;
  if (!var_core_value_sig32E7.size) return;
  let var_core_value_sig786E = var_core_value_sig3959.getSnapshot(),
    var_core_value_sigFC47 = var_core_value_sig9414 === "slide" ? var_core_value_sig786E.slides[var_core_value_sig926F] : var_core_value_sig9414 === "master" ? (var_core_value_sig3A44 = var_core_value_sig786E.masterPages) == null ? undefined : var_core_value_sig3A44[var_core_value_sig926F] : (var_core_value_sig0642 = var_core_value_sig786E.layoutPages) == null ? undefined : var_core_value_sig0642[var_core_value_sig926F],
    var_core_value_sig48E2 = (var_core_value_sigFC47 == null ? undefined : var_core_value_sigFC47.elements) ?? {},
    var_core_value_sig2FCA = new Map();
  Object.values(var_core_value_sig48E2).forEach(var_core_value_sigA021 => {
    Y(var_core_value_sigA021) && typeof var_core_value_sigA021.id == "string" && Array.isArray(var_core_value_sigA021.children) && var_core_value_sig2FCA.set(var_core_value_sigA021.id, var_core_value_sigA021.children['filter'](var_core_value_sigD4FB => typeof var_core_value_sigD4FB == "string"));
  });
  let var_core_value_sig04F2 = new Set(var_core_value_sig32E7),
    var_core_value_sig2CFC = var_core_value_sig49D9 => {
      var_core_value_sig2FCA.forEach((var_core_value_sig3E71, var_core_value_sig01B3) => {
        !var_core_value_sig3E71.includes(var_core_value_sig49D9) || var_core_value_sig04F2.has(var_core_value_sig01B3) || (var_core_value_sig04F2.add(var_core_value_sig01B3), var_core_value_sig2CFC(var_core_value_sig01B3));
      });
    },
    var_core_value_sig5CEB = var_core_value_sig320C => {
      (var_core_value_sig2FCA.get(var_core_value_sig320C) ?? []).forEach(var_core_value_sig7442 => {
        var_core_value_sig04F2.has(var_core_value_sig7442) || (var_core_value_sig04F2.add(var_core_value_sig7442), var_core_value_sig5CEB(var_core_value_sig7442));
      });
    };
  var_core_value_sig32E7.forEach(var_core_value_sigE7F0 => {
    var_core_value_sig2CFC(var_core_value_sigE7F0), var_core_value_sig5CEB(var_core_value_sigE7F0);
  }), var_core_value_sigD8C3.add(var_core_value_sig9414 === "slide" ? en(var_core_value_sig926F) : W), var_core_value_sig04F2.forEach(var_core_value_sigE837 => var_core_value_sigD8C3.add(tn(var_core_value_sig9414, var_core_value_sig926F, var_core_value_sigE837)));
}
;
function Fr(var_core_value_sig4935, var_core_value_sig1832) {
  var var_core_value_sig79D7, var_core_value_sig5E01;
  let var_core_value_sigBBE4 = var_core_value_sig4935.getSnapshot();
  if (var_core_value_sigBBE4.slides[var_core_value_sig1832]) return "slide";
  if ((var_core_value_sig79D7 = var_core_value_sigBBE4.masterPages) != null && var_core_value_sig79D7[var_core_value_sig1832]) return "master";
  if ((var_core_value_sig5E01 = var_core_value_sigBBE4.layoutPages) != null && var_core_value_sig5E01[var_core_value_sig1832]) return 'layout';
}
;
function Y(var_core_value_sig96B3) {
  return typeof var_core_value_sig96B3 == "object" && !!var_core_value_sig96B3 && !Array.isArray(var_core_value_sig96B3);
}
;
function Ir(var_core_value_sig9CF2) {
  return Y(var_core_value_sig9CF2) && typeof var_core_value_sig9CF2.id == "string";
}
;
function X(var_core_value_sig666D, var_core_value_sigBD53) {
  let var_core_value_sigD11F = var_core_value_sig666D[var_core_value_sigBD53];
  return typeof var_core_value_sigD11F == "string" ? var_core_value_sigD11F : undefined;
}
;
function Lr(var_core_value_sig62231, var_core_value_sig7653) {
  let var_core_value_sigF65B = var_core_value_sig62231[var_core_value_sig7653];
  return Array.isArray(var_core_value_sigF65B) ? var_core_value_sigF65B.filter(var_core_value_sig34F4 => typeof var_core_value_sig34F4 == "string") : [];
}
;
function Rr(var_core_value_sig4A94) {
  return Object.values(u).some(var_core_value_sigA45D => var_core_value_sigA45D === var_core_value_sig4A94);
}
let zr = class extends e.Disposable {
  constructor(var_core_value_sig1BC7, var_core_value_sig4956) {
    super(), this._shapeHostAdapterRegistry = var_core_value_sig1BC7, this.disposeWithMe(this._shapeHostAdapterRegistry["register"](var_core_value_sig4956));
  }
};
zr = q([K(0, (0, e.Inject)(n.IShapeHostAdapterRegistry)), K(1, (0, e.Inject)(wr))], zr);
let Z = class extends e.Plugin {
  constructor(var_core_value_sigCC9E = Er, var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039, var_core_value_sigA321) {
    super(), this._config = var_core_value_sigCC9E, this._injector = var_core_value_sig444C, this._commandService = var_core_value_sigE42E, this._configService = var_core_value_sigF039, this._univerInstanceService = var_core_value_sigA321;
    let {
      ...var_core_value_sigBF4C
    } = (0, e.merge)({}, Er, this._config);
    this._configService["setConfig"]("slides.config", var_core_value_sigBF4C);
  }
  onStarting() {
    this._univerInstanceService["registerCtorForType"](e.UniverInstanceType['UNIVER_SLIDE'], Cr), [[E, {
      'useClass': Te
    }], [Dr], [Vn], [wr], [zr], [kr]].forEach(var_core_value_sigDF87 => this._injector['add'](var_core_value_sigDF87)), [j, Rn, N, z, G, Tn, rt, it, R, At, V, ut, un, bn, Ot, F, Dt, I, L, Fn, Xe, ht, yt, kt, jt, ln, zt, dn, xn, Dn, Ln, In, vt, Ze, gt, lt, ct, at, zn].forEach(var_core_value_sig9EE0 => this.disposeWithMe(this._commandService['registerCommand'](var_core_value_sig9EE0))), this._injector['get'](zr), this._injector["get"](Dr), this._injector["get"](Vn), this._injector['get'](kr);
  }
};
U(Z, "pluginName", "UNIVER_SLIDES_PLUGIN"), U(Z, 'packageName', ar), U(Z, "version", or), U(Z, "type", e.UniverInstanceType["UNIVER_SLIDE"]), Z = q([(0, e.DependentOn)(o.UniverLicensePlugin, n.UniverShapePlugin), K(1, (0, e.Inject)(e.Injector)), K(2, e.ICommandService), K(3, e.IConfigService), K(4, e.IUniverInstanceService)], Z);
const Br = {
  'dk1': "#000000",
  'dk2': "#44546a",
  'lt1': "#ffffff",
  'lt2': "#e7e6e6",
  'acc1': '#4472c4',
  'acc2': "#ed7d31",
  'acc3': "#a5a5a5",
  'acc4': "#ffc000",
  'acc5': "#5b9bd5",
  'acc6': "#70ad47"
};
function Q(var_core_value_sigEB59, var_core_value_sigD9B0) {
  var var_core_value_sigB7D6;
  return (var_core_value_sigEB59 == null || (var_core_value_sigB7D6 = var_core_value_sigEB59.colorScheme) == null ? undefined : var_core_value_sigB7D6[var_core_value_sigD9B0]) ?? Br[var_core_value_sigD9B0];
}
;
function Vr(var_core_value_sigCF1F) {
  if (!(!var_core_value_sigCF1F || typeof var_core_value_sigCF1F != "object")) {
    if ("color" in var_core_value_sigCF1F && typeof var_core_value_sigCF1F.color == 'string') return var_core_value_sigCF1F.color;
    if ("gradientStops" in var_core_value_sigCF1F && Array.isArray(var_core_value_sigCF1F.gradientStops)) {
      let var_core_value_sigF0511 = var_core_value_sigCF1F.gradientStops["find"](var_core_value_sig186C => !!(var_core_value_sig186C && typeof var_core_value_sig186C == "object" && "color" in var_core_value_sig186C && typeof var_core_value_sig186C.color == "string"));
      return var_core_value_sigF0511 == null ? undefined : var_core_value_sigF0511.color;
    }
  }
}
;
function Hr(var_core_value_sig4DD1) {
  if (!(!var_core_value_sig4DD1 || typeof var_core_value_sig4DD1 != "object")) return "color" in var_core_value_sig4DD1 && typeof var_core_value_sig4DD1.color == "string" ? var_core_value_sig4DD1.color : undefined;
}
;
function Ur(var_core_value_sig1293) {
  var var_core_value_sigC999, var_core_value_sig9D8F;
  let var_core_value_sig8270 = Q(var_core_value_sig1293, 'acc1'),
    var_core_value_sig95D9 = Q(var_core_value_sig1293, "acc2"),
    var_core_value_sig0E92 = Q(var_core_value_sig1293, "acc3"),
    var_core_value_sig45CD = Q(var_core_value_sig1293, "acc4"),
    var_core_value_sigAD84 = Q(var_core_value_sig1293, "acc5"),
    var_core_value_sigD513 = Q(var_core_value_sig1293, "acc6"),
    var_core_value_sig36BD = Q(var_core_value_sig1293, 'dk1'),
    var_core_value_sig0413 = Vr(var_core_value_sig1293 == null || (var_core_value_sigC999 = var_core_value_sig1293.fmtScheme) == null ? undefined : var_core_value_sigC999.fillStyleLst[1]) ?? var_core_value_sig8270,
    var_core_value_sig15B6 = Hr(var_core_value_sig1293 == null || (var_core_value_sig9D8F = var_core_value_sig1293.fmtScheme) == null ? undefined : var_core_value_sig9D8F.lnStyleLst[1]) ?? Q(var_core_value_sig1293, "dk2");
  return {
    'background': Q(var_core_value_sig1293, "lt1"),
    'text': var_core_value_sig36BD,
    'muted': Q(var_core_value_sig1293, "lt2"),
    'accent1': var_core_value_sig8270,
    'accent2': var_core_value_sig95D9,
    'accent3': var_core_value_sig0E92,
    'accent4': var_core_value_sig45CD,
    'accent5': var_core_value_sigAD84,
    'accent6': var_core_value_sigD513,
    'accents': [var_core_value_sig8270, var_core_value_sig95D9, var_core_value_sig0E92, var_core_value_sig45CD, var_core_value_sigAD84, var_core_value_sigD513],
    'defaultStyleColors': [var_core_value_sig0413, var_core_value_sig15B6, var_core_value_sig36BD]
  };
}
const Wr = "slidePlaceholderContent";
function Gr(var_core_value_sigFEBF) {
  let var_core_value_sigBBA2 = var_core_value_sigFEBF.custom;
  if (!var_core_value_sigBBA2 || typeof var_core_value_sigBBA2 != "object") return null;
  let var_core_value_sigC9A1 = var_core_value_sigBBA2[Wr];
  if (!var_core_value_sigC9A1 || typeof var_core_value_sigC9A1 != 'object') return null;
  let var_core_value_sigE469 = var_core_value_sigC9A1;
  return var_core_value_sigE469.kind !== "image" || typeof var_core_value_sigE469.source != "string" || var_core_value_sigE469.source["length"] === 0 ? null : {
    'kind': "image",
    'source': var_core_value_sigE469.source,
    'imageSourceType': var_core_value_sigE469.imageSourceType
  };
}
;
function Kr(var_core_value_sigA499, var_core_value_sig4CC3) {
  let var_core_value_sig70B3 = var_core_value_sigA499.custom && typeof var_core_value_sigA499.custom == "object" ? {
    ...var_core_value_sigA499.custom
  } : {};
  return var_core_value_sig70B3[Wr] = var_core_value_sig4CC3, {
    ...var_core_value_sigA499,
    'custom': var_core_value_sig70B3
  };
}
const qr = "slide-text-document",
  Jr = {
    'width': 1 / 0,
    'height': 1 / 0
  };
function Yr(var_core_value_sig422B) {
  let var_core_value_sig1038 = var_core_value_sig422B.body,
    var_core_value_sigC3E6 = var_core_value_sig1038 == null ? undefined : var_core_value_sig1038.dataStream;
  if (!var_core_value_sig1038 || var_core_value_sigC3E6 === undefined) return var_core_value_sig422B;
  let var_core_value_sig3710 = var_core_value_sigC3E6.replace(/\n/g, (var_core_value_sig3457, var_core_value_sig4A08) => var_core_value_sigC3E6[var_core_value_sig4A08 - 1] === '\x0d' ? var_core_value_sig3457 : '\x0d'),
    var_core_value_sig9726 = var_core_value_sig3710.endsWith('\x0d\x0a') ? var_core_value_sig3710 : var_core_value_sig3710.endsWith('\x0d') ? var_core_value_sig3710 + '\x0a' : var_core_value_sig3710 + '\x0d\x0a';
  return var_core_value_sig9726 === var_core_value_sigC3E6 ? var_core_value_sig422B : {
    ...var_core_value_sig422B,
    'body': {
      ...var_core_value_sig1038,
      'dataStream': var_core_value_sig9726
    }
  };
}
;
function $(var_core_value_sigFC9B, var_core_value_sig943E = {}) {
  let var_core_value_sigEF36 = ti(var_core_value_sigFC9B).split('\x0a'),
    var_core_value_sigD4B1 = var_core_value_sigEF36.join('\x0d') + '\x0d\x0a',
    var_core_value_sigE5D8 = Math.max(0, var_core_value_sigD4B1.length - 2),
    var_core_value_sig74AF = 0,
    var_core_value_sigBABA = var_core_value_sig943E.bullet,
    var_core_value_sigA723 = (var_core_value_sigBABA == null ? undefined : var_core_value_sigBABA.listId) ?? (var_core_value_sig943E.id ?? qr) + "-list",
    var_core_value_sig991C = new Set(),
    var_core_value_sigF909 = var_core_value_sigEF36.map(var_core_value_sig1BC4 => {
      let var_core_value_sig9EAB = {
        'startIndex': var_core_value_sig74AF + var_core_value_sig1BC4.length,
        'paragraphId': (0, e.createParagraphId)(var_core_value_sig991C),
        ...(var_core_value_sigBABA ? {
          'bullet': {
            'listId': var_core_value_sigA723,
            'listType': var_core_value_sigBABA.listType,
            'nestingLevel': var_core_value_sigBABA.nestingLevel ?? 0
          }
        } : {}),
        ...(var_core_value_sig943E.horizontalAlign === undefined ? {} : {
          'paragraphStyle': {
            'horizontalAlign': var_core_value_sig943E.horizontalAlign,
            ...(var_core_value_sig943E.textStyle ? {
              'textStyle': var_core_value_sig943E.textStyle
            } : {})
          }
        })
      };
      return var_core_value_sig74AF += var_core_value_sig1BC4.length + 1, var_core_value_sig9EAB;
    }),
    var_core_value_sigDD0E = var_core_value_sig943E.horizontalAlign === undefined && var_core_value_sig943E.verticalAlign === undefined ? undefined : {
      'horizontalAlign': var_core_value_sig943E.horizontalAlign,
      'verticalAlign': var_core_value_sig943E.verticalAlign
    };
  return {
    'id': var_core_value_sig943E.id ?? qr,
    'body': {
      'dataStream': var_core_value_sigD4B1,
      'textRuns': var_core_value_sig943E.textStyle ? [{
        'st': 0,
        'ed': Math.max(1, var_core_value_sigE5D8),
        'ts': var_core_value_sig943E.textStyle
      }] : [],
      'paragraphs': var_core_value_sigF909
    },
    'documentStyle': {
      'marginBottom': 0,
      'marginLeft': 0,
      'marginRight': 0,
      'marginTop': 0,
      'pageSize': {
        ...Jr
      },
      ...(var_core_value_sig943E.textStyle ? {
        'textStyle': var_core_value_sig943E.textStyle
      } : {}),
      ...(var_core_value_sigDD0E ? {
        'renderConfig': var_core_value_sigDD0E
      } : {})
    }
  };
}
;
function Xr(var_core_value_sigF2A0) {
  var var_core_value_sig116F;
  let var_core_value_sigA64C = ((var_core_value_sig116F = var_core_value_sigF2A0.body) == null ? undefined : var_core_value_sig116F.dataStream) ?? '';
  return (var_core_value_sigA64C.endsWith('\x0d\x0a') ? var_core_value_sigA64C.slice(0, -2) : var_core_value_sigA64C).replace(/\r/g, '\x0a');
}
;
function Zr(var_core_value_sigAF94, var_core_value_sig1E9F = {}) {
  if (var_core_value_sigAF94.type === 'text') return ei(var_core_value_sigAF94.textData) ?? $(var_core_value_sigAF94.text ?? '', {
    'id': var_core_value_sigAF94.id,
    'textStyle': ri(var_core_value_sigAF94.textStyle)
  });
  if (var_core_value_sigAF94.type === "shape") {
    var var_core_value_sig3CC6;
    let var_core_value_sigA5C3 = (0, n.normalizeShapeTextData)(var_core_value_sigAF94.shapeData["shapeText"]);
    if (var_core_value_sigA5C3 != null && (var_core_value_sig3CC6 = var_core_value_sigA5C3.dataModel) != null && var_core_value_sig3CC6.doc) return e.Tools["deepClone"](var_core_value_sigA5C3.dataModel["doc"]);
    let var_core_value_sig3A1E = pe(var_core_value_sig1E9F.themeData);
    return $(var_core_value_sig3A1E.text ?? '', {
      'id': var_core_value_sigAF94.id,
      'textStyle': ri(var_core_value_sig3A1E),
      'horizontalAlign': e.HorizontalAlign["CENTER"],
      'verticalAlign': e.VerticalAlign["MIDDLE"]
    });
  }
  if (var_core_value_sigAF94.type === "placeholder") {
    var var_core_value_sig041B;
    let var_core_value_sigDC92 = var_core_value_sigAF94.placeholder["textConfig"];
    return ei((var_core_value_sig1E9F.placeholderLevel ? var_core_value_sigDC92 == null || (var_core_value_sig041B = var_core_value_sigDC92.textDataByLevel) == null ? undefined : var_core_value_sig041B[var_core_value_sig1E9F.placeholderLevel] : undefined) ?? (var_core_value_sigDC92 == null ? undefined : var_core_value_sigDC92.textData)) ?? $(var_core_value_sigAF94.text ?? '', {
      'id': var_core_value_sigAF94.id
    });
  }
  return null;
}
;
function Qr(var_core_value_sig3610, var_core_value_sig62F3) {
  let var_core_value_sig8063 = e.Tools["deepClone"](var_core_value_sig62F3),
    var_core_value_sig555A = Xr(var_core_value_sig8063);
  if (var_core_value_sig3610.type === "text") return {
    ...var_core_value_sig3610,
    'text': var_core_value_sig555A,
    'textData': var_core_value_sig8063
  };
  if (var_core_value_sig3610.type === "shape") {
    let var_core_value_sig3515 = (0, n.applyDocumentToShapeText)((0, n.normalizeShapeTextData)(var_core_value_sig3610.shapeData['shapeText']) ?? undefined, var_core_value_sig8063);
    return {
      ...var_core_value_sig3610,
      'shapeData': {
        ...var_core_value_sig3610.shapeData,
        'shapeText': var_core_value_sig3515
      }
    };
  }
  if (var_core_value_sig3610.type === "placeholder") {
    let var_core_value_sigC2A0 = var_core_value_sig3610;
    return {
      ...var_core_value_sigC2A0,
      'text': var_core_value_sig555A,
      'placeholder': {
        ...var_core_value_sigC2A0.placeholder,
        'textConfig': {
          ...var_core_value_sigC2A0.placeholder["textConfig"],
          'textData': var_core_value_sig8063
        }
      }
    };
  }
  return null;
}
;
function $r(var_core_value_sigF562, var_core_value_sig5913, var_core_value_sigA1AF) {
  return Qr(var_core_value_sigF562, $(var_core_value_sig5913, ni(var_core_value_sigF562, var_core_value_sigA1AF)));
}
;
function ei(var_core_value_sig6324) {
  return var_core_value_sig6324 ? e.Tools["deepClone"](var_core_value_sig6324) : null;
}
;
function ti(var_core_value_sig7EE4) {
  return var_core_value_sig7EE4.replace(/\r\n/g, '\x0a').replace(/\r/g, '\x0a');
}
;
function ni(var_core_value_sigE3D7, var_core_value_sig54C6 = {}) {
  if (var_core_value_sigE3D7.type === 'text') {
    var var_core_value_sigE843, var_core_value_sig2EB2;
    return {
      'id': var_core_value_sig54C6.id ?? ((var_core_value_sigE843 = var_core_value_sigE3D7.textData) == null ? undefined : var_core_value_sigE843.id) ?? var_core_value_sigE3D7.id,
      'textStyle': var_core_value_sig54C6.textStyle ?? ((var_core_value_sig2EB2 = var_core_value_sigE3D7.textData) == null || (var_core_value_sig2EB2 = var_core_value_sig2EB2.documentStyle) == null ? undefined : var_core_value_sig2EB2.textStyle) ?? ri(var_core_value_sigE3D7.textStyle),
      'horizontalAlign': var_core_value_sig54C6.horizontalAlign,
      'verticalAlign': var_core_value_sig54C6.verticalAlign,
      ...(var_core_value_sig54C6.bullet ? {
        'bullet': var_core_value_sig54C6.bullet
      } : {})
    };
  }
  if (var_core_value_sigE3D7.type === "shape") {
    var var_core_value_sig683A, var_core_value_sig109B, var_core_value_sig6DD0, var_core_value_sigB5D3, var_core_value_sig6085;
    let var_core_value_sig7C65 = (0, n.normalizeShapeTextData)(var_core_value_sigE3D7.shapeData["shapeText"]),
      var_core_value_sig7F05 = var_core_value_sig7C65 == null || (var_core_value_sig683A = var_core_value_sig7C65.dataModel) == null ? undefined : var_core_value_sig683A.doc;
    return {
      'id': var_core_value_sig54C6.id ?? (var_core_value_sig7F05 == null ? undefined : var_core_value_sig7F05.id) ?? var_core_value_sigE3D7.id,
      'textStyle': var_core_value_sig54C6.textStyle ?? (var_core_value_sig7F05 == null || (var_core_value_sig109B = var_core_value_sig7F05.documentStyle) == null ? undefined : var_core_value_sig109B.textStyle) ?? (var_core_value_sig7F05 == null || (var_core_value_sig6DD0 = var_core_value_sig7F05.body) == null || (var_core_value_sig6DD0 = var_core_value_sig6DD0.textRuns) == null || (var_core_value_sig6DD0 = var_core_value_sig6DD0[0]) == null ? undefined : var_core_value_sig6DD0.ts),
      'horizontalAlign': var_core_value_sig54C6.horizontalAlign ?? (var_core_value_sig7C65 == null || (var_core_value_sigB5D3 = var_core_value_sig7C65.dataModel) == null ? undefined : var_core_value_sigB5D3.ha),
      'verticalAlign': var_core_value_sig54C6.verticalAlign ?? (var_core_value_sig7C65 == null || (var_core_value_sig6085 = var_core_value_sig7C65.dataModel) == null ? undefined : var_core_value_sig6085.va),
      ...(var_core_value_sig54C6.bullet ? {
        'bullet': var_core_value_sig54C6.bullet
      } : {})
    };
  }
  if (var_core_value_sigE3D7.type === "placeholder") {
    var var_core_value_sig2507, var_core_value_sig5870, var_core_value_sig827F, var_core_value_sig2452;
    let var_core_value_sig41F3 = (var_core_value_sig2507 = var_core_value_sigE3D7.placeholder["textConfig"]) == null ? undefined : var_core_value_sig2507.textData;
    return {
      'id': var_core_value_sig54C6.id ?? (var_core_value_sig41F3 == null ? undefined : var_core_value_sig41F3.id) ?? var_core_value_sigE3D7.id,
      'textStyle': var_core_value_sig54C6.textStyle ?? (var_core_value_sig41F3 == null || (var_core_value_sig5870 = var_core_value_sig41F3.documentStyle) == null ? undefined : var_core_value_sig5870.textStyle),
      'horizontalAlign': var_core_value_sig54C6.horizontalAlign ?? (var_core_value_sig41F3 == null || (var_core_value_sig827F = var_core_value_sig41F3.documentStyle) == null || (var_core_value_sig827F = var_core_value_sig827F.renderConfig) == null ? undefined : var_core_value_sig827F.horizontalAlign),
      'verticalAlign': var_core_value_sig54C6.verticalAlign ?? (var_core_value_sig41F3 == null || (var_core_value_sig2452 = var_core_value_sig41F3.documentStyle) == null || (var_core_value_sig2452 = var_core_value_sig2452.renderConfig) == null ? undefined : var_core_value_sig2452.verticalAlign),
      ...(var_core_value_sig54C6.bullet ? {
        'bullet': var_core_value_sig54C6.bullet
      } : {})
    };
  }
  return var_core_value_sig54C6;
}
;
function ri(var_core_value_sig50D0) {
  if (var_core_value_sig50D0) return {
    ...(var_core_value_sig50D0.fontFamily ? {
      'ff': var_core_value_sig50D0.fontFamily
    } : {}),
    ...(var_core_value_sig50D0.fontSize === undefined ? {} : {
      'fs': var_core_value_sig50D0.fontSize
    }),
    ...(var_core_value_sig50D0.color ? {
      'cl': {
        'rgb': var_core_value_sig50D0.color
      }
    } : {}),
    ...(var_core_value_sig50D0.bold === undefined ? {} : {
      'bl': var_core_value_sig50D0.bold ? e.BooleanNumber['TRUE'] : e.BooleanNumber["FALSE"]
    }),
    ...(var_core_value_sig50D0.italic === undefined ? {} : {
      'it': var_core_value_sig50D0.italic ? e.BooleanNumber['TRUE'] : e.BooleanNumber["FALSE"]
    }),
    ...(var_core_value_sig50D0.underline === undefined ? {} : {
      'ul': {
        's': var_core_value_sig50D0.underline ? e.BooleanNumber["TRUE"] : e.BooleanNumber["FALSE"]
      }
    })
  };
}
exports.AddSlideElementCommand = Xe, exports.AddSlideElementMutation = j, exports.AddSlidePageCommand = Ze, exports.AddSlidePageMutation = F, exports.CancelSlideGroupMutation = it, exports.ConvertSlideSmartArtToShapesCommand = at, exports.CreateSlideByLayoutCommand = ct, exports.DEFAULT_LAYOUT_ORDER = ie, exports.DEFAULT_MASTER_PAGE = ne, exports.DEFAULT_MASTER_PAGE_ID = x, exports.DEFAULT_SLIDE_PAGE_HEIGHT = 540, exports.DEFAULT_SLIDE_PAGE_WIDTH = 960, exports.DEFAULT_SLIDE_THEME = b, exports.EMBED_SLIDES_FLOATING_CUSTOM_KEY = Zn, exports.EnsureSlideMasterPageMutation = Dt, exports.ISlideDrawingService = E, exports.InsertDrawingObjectMutation = Rn, exports.LAYOUT_PAGE_IDS = C, exports.MoveSlidePageCommand = lt, exports.MoveSlidePageMutation = L, exports.PageElementTypeEnum = c, exports.PageTypeEnum = u, exports.PlaceholderTypeEnum = s, exports.RemoveSlideElementCommand = ht, exports.RemoveSlideElementMutation = N, exports.RemoveSlidePageCommand = gt, exports.RemoveSlidePageMutation = I, exports.ReorderSlideElementsCommand = vt, exports.SLIDE_FONT_PLUGIN_NAME = Bn, exports.SLIDE_INSERT_DEFAULT_SIZE = J, exports.SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID = W, exports.SLIDE_PLACEHOLDER_ICON_COMPONENT_NAME_BY_KEY = Kn, exports.SLIDE_TEXT_BOX_DEFAULT_STYLE = Un, exports.SLIDE_THEME_PRESETS = v, exports.SLIDE_UNIT_PERMISSION_ACTIONS = Xt, exports.SetActiveSlideCommand = yt, exports.SetPresentationBackgroundGraphicsCommand = kt, exports.SetSlideDrawingApplyMutation = Tn, exports.SetSlideElementOrderMutation = R, exports.SetSlideGroupMutation = rt, exports.SetSlideNameCommand = jt, exports.SetSlidePageSizeCommand = zt, exports.SetSlidePageSizeMutation = V, exports.SetSlidePermissionCommand = ln, exports.SetSlideSpeakerNotesCommand = dn, exports.SetSlideSpeakerNotesMutation = un, exports.SetSlideTransitionCommand = xn, exports.SetSlideZoomRatioOperation = zn, exports.SlideBackgroundTypeEnum = l, exports.SlideDrawingApplyType = wn, Object.defineProperty(exports, "SlideFontResourceController", {
  'enumerable': true,
  'get': function () {
    return Vn;
  }
}), exports.SlideModel = Cr, exports.SlidePage = xr, exports.SlidePageLayoutTypeEnum = d, exports.SlidePageSizePresetEnum = f, exports.SlidePresentationBackgroundGraphicFitEnum = bt, exports.SlidePresentationBackgroundGraphicsTargetEnum = xt, exports.SlideSceneTypeEnum = g, exports.SlideTransitionDirectionEnum = m, exports.SlideTransitionSpeedEnum = h, exports.SlideTransitionTypeEnum = p, Object.defineProperty(exports, "UniverSlidesPlugin", {
  'enumerable': true,
  'get': function () {
    return Z;
  }
}), exports.UpdateSlideDrawingCommand = Dn, exports.UpdateSlideElementMutation = G, exports.UpdateSlidePageBackgroundCommand = In, exports.UpdateSlidePageBackgroundMutation = Fn, exports.UpdateSlideSmartArtCommand = Ln, exports.applySlideElementPlainText = $r, exports.applySlideElementTextDocument = Qr, exports.buildDefaultSlideDocumentLayers = oe, exports.buildResolvedSlideDrawingMap = D, exports.canEditSlideTargets = cn, exports.createEmbedSlidesCustomData = $n, exports.createEmbedSlidesFloatingElement = tr, exports.createEmbedSlidesPage = er, exports.createSlideByLayout = ae, exports.getEmbedSlidesFloatingCustomData = rr, exports.getEmbedSlidesPageCustomData = nr, exports.getEmptySnapshot = sr, exports.getSlidesEmptySnapshot = sr, exports.getPlaceholderImageContent = Gr, exports.getPresentationBackgroundGraphics = Tt, exports.getSlideCommandTarget = P, exports.getSlideElementDisplayName = De, exports.getSlideElementEditPermissionObjectIds = nn, exports.getSlideElementPermissionObjectId = tn, exports.getSlidePagePermissionObjectId = en, exports.getSlidePermissionValue = an, exports.getSlideThemePreset = ee, exports.isPresentationBackgroundGraphic = B, exports.normalizeSlideDocumentDataStream = Yr, exports.plainTextToSlideDocumentData = $, exports.resolveDefaultPlaceholderTextKey = Xn, exports.resolvePlaceholderActionIcons = Jn, exports.resolvePresentationBackgroundTargetMasterIds = Et, exports.resolveSlideElementTextDocument = Zr, exports.resolveSlideLayerPageSizeOptions = je, exports.resolveSlideTextBoxDefaultSize = Hn, exports.resolveSlideThemePreviewColors = Ur, exports.resolveSlideTransition = _n, exports.resolveThemeDefaultShapeText = pe, exports.resolvedSlideLayersToDrawingMap = Ce, exports.setPlaceholderImageContent = Kr, exports.setSlidePermissionValue = on, exports.slideDocumentDataToPlainText = Xr, exports.slideElementToDrawing = T;
