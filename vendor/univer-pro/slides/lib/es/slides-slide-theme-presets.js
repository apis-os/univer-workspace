import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.subtleFill ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.moderateFill ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.gradientFrom ?? "acc5"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.gradientTo ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.subtleLine ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.moderateLine ?? "dk2"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.intenseLine ?? "dk1"];
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888,
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889,
    'colorScheme': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890,
    'fontScheme': {
      'heading': "Calibri Light",
      'body': 'Calibri'
    },
    'fmtScheme': {
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889,
      'fillStyleLst': [{
        'fillType': ShapeFillEnum.SolidFill,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46892,
        'opacity': 0.2
      }, {
        'fillType': ShapeFillEnum.SolidFill,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46893,
        'opacity': 1
      }, {
        'fillType': ShapeFillEnum.GradientFill,
        'gradientAngle': 90,
        'gradientStops': [{
          'position': 0,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894
        }, {
          'position': 1,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895
        }]
      }],
      'lnStyleLst': [{
        'lineStrokeType': ShapeLineTypeEnum.SolidLine,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896,
        'width': 1,
        'opacity': 1
      }, {
        'lineStrokeType': ShapeLineTypeEnum.SolidLine,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897,
        'width': 1.5,
        'opacity': 1
      }, {
        'lineStrokeType': ShapeLineTypeEnum.SolidLine,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898,
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
        'fillType': ShapeFillEnum.SolidFill,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.lt1,
        'opacity': 1
      }, {
        'fillType': ShapeFillEnum.SolidFill,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.lt2,
        'opacity': 1
      }, {
        'fillType': ShapeFillEnum.GradientFill,
        'gradientAngle': 90,
        'gradientStops': [{
          'position': 0,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.lt1
        }, {
          'position': 1,
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890.lt2
        }]
      }]
    }
  };
}
const Ve = [D("office", "Office", {
  'dk1': "#000000",
  'lt1': "#ffffff",
  'dk2': '#44546a',
  'lt2': '#e7e6e6',
  'acc1': "#4472c4",
  'acc2': "#ed7d31",
  'acc3': '#a5a5a5',
  'acc4': "#ffc000",
  'acc5': "#5b9bd5",
  'acc6': "#70ad47",
  'hlink': "#0563c1",
  'folHlink': "#954f72"
}), D("gallery", "Gallery", {
  'dk1': '#1f2937',
  'lt1': "#ffffff",
  'dk2': "#374151",
  'lt2': "#f3f4f6",
  'acc1': "#2563eb",
  'acc2': '#db2777',
  'acc3': "#7c3aed",
  'acc4': "#f59e0b",
  'acc5': "#06b6d4",
  'acc6': "#16a34a",
  'hlink': '#1d4ed8',
  'folHlink': '#9333ea'
}), D('apex', 'Apex', {
  'dk1': "#111827",
  'lt1': '#ffffff',
  'dk2': "#334155",
  'lt2': '#e2e8f0',
  'acc1': "#0f766e",
  'acc2': '#ea580c',
  'acc3': "#64748b",
  'acc4': "#ca8a04",
  'acc5': "#0284c7",
  'acc6': '#65a30d',
  'hlink': "#0369a1",
  'folHlink': "#7e22ce"
}), D('paper', "Paper", {
  'dk1': "#172554",
  'lt1': "#fffdf7",
  'dk2': "#334155",
  'lt2': "#f1efe7",
  'acc1': "#2563eb",
  'acc2': "#dc2626",
  'acc3': "#0891b2",
  'acc4': "#d97706",
  'acc5': '#7c3aed',
  'acc6': '#059669',
  'hlink': "#1d4ed8",
  'folHlink': "#be185d"
}), D("civic", "Civic", {
  'dk1': "#020617",
  'lt1': "#ffffff",
  'dk2': '#475569',
  'lt2': "#e5e7eb",
  'acc1': "#be123c",
  'acc2': '#1d4ed8',
  'acc3': "#047857",
  'acc4': "#b45309",
  'acc5': "#6d28d9",
  'acc6': '#0f766e',
  'hlink': "#1d4ed8",
  'folHlink': "#9d174d"
}), D('ion', "Ion", {
  'dk1': '#0f172a',
  'lt1': "#ffffff",
  'dk2': "#334155",
  'lt2': '#e0f2fe',
  'acc1': "#0284c7",
  'acc2': "#f97316",
  'acc3': "#14b8a6",
  'acc4': "#a855f7",
  'acc5': '#64748b',
  'acc6': "#84cc16",
  'hlink': "#0369a1",
  'folHlink': "#7e22ce"
}, {
  'moderateFill': "acc3",
  'gradientFrom': "acc2",
  'gradientTo': 'acc1',
  'subtleLine': "acc5",
  'moderateLine': "acc1"
}), D("facet", 'Facet', {
  'dk1': "#1e1b4b",
  'lt1': '#ffffff',
  'dk2': "#3730a3",
  'lt2': "#eef2ff",
  'acc1': "#6366f1",
  'acc2': '#ec4899',
  'acc3': '#f59e0b',
  'acc4': "#10b981",
  'acc5': "#0ea5e9",
  'acc6': "#8b5cf6",
  'hlink': '#4f46e5',
  'folHlink': "#be185d"
}), D("integral", "Integral", {
  'dk1': "#1c1917",
  'lt1': "#fffaf0",
  'dk2': '#57534e',
  'lt2': "#f5f0e8",
  'acc1': "#b45309",
  'acc2': '#2563eb',
  'acc3': "#78716c",
  'acc4': "#dc2626",
  'acc5': "#059669",
  'acc6': "#7c3aed",
  'hlink': "#1d4ed8",
  'folHlink': "#9333ea"
}, {
  'subtleFill': "acc4",
  'moderateFill': "acc1",
  'gradientFrom': 'acc4',
  'gradientTo': "acc6",
  'moderateLine': "acc3"
}), D("retrospect", "Retrospect", {
  'dk1': "#2f1b45",
  'lt1': "#fff7ed",
  'dk2': "#6b3f69",
  'lt2': "#fdebd7",
  'acc1': '#c2410c',
  'acc2': '#be185d',
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
  'moderateLine': 'acc2'
}), D('organic', "Organic", {
  'dk1': '#1f2933',
  'lt1': "#fbfaf2",
  'dk2': "#41513a",
  'lt2': '#e8eadf',
  'acc1': "#3f6212",
  'acc2': '#a16207',
  'acc3': "#0f766e",
  'acc4': "#92400e",
  'acc5': "#64748b",
  'acc6': "#7c2d12",
  'hlink': "#166534",
  'folHlink': "#854d0e"
}, {
  'moderateFill': "acc3",
  'gradientFrom': 'acc2',
  'gradientTo': 'acc1',
  'subtleLine': "acc6",
  'moderateLine': "acc1"
}), D("wisp", "Wisp", {
  'dk1': "#111827",
  'lt1': "#f8fafc",
  'dk2': '#374151',
  'lt2': '#e2e8f0',
  'acc1': '#7c3aed',
  'acc2': "#06b6d4",
  'acc3': "#f97316",
  'acc4': '#22c55e',
  'acc5': "#64748b",
  'acc6': "#e11d48",
  'hlink': "#6d28d9",
  'folHlink': "#be123c"
}, {
  'subtleFill': "acc2",
  'moderateFill': 'acc6',
  'gradientFrom': "acc2",
  'gradientTo': "acc1",
  'moderateLine': "acc6"
}), D("parcel", "Parcel", {
  'dk1': "#27272a",
  'lt1': "#ffffff",
  'dk2': "#52525b",
  'lt2': "#f4f4f5",
  'acc1': "#2563eb",
  'acc2': "#ea580c",
  'acc3': '#16a34a',
  'acc4': "#9333ea",
  'acc5': "#0891b2",
  'acc6': "#ca8a04",
  'hlink': "#1d4ed8",
  'folHlink': "#7e22ce"
})];
export { Ve as SLIDE_THEME_PRESETS };
