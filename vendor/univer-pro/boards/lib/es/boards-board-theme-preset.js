import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { P, id, ot, pt, st } from "./internal-core-endo.js";
import { Je, N, Ye, Ze, at, it, nt, rt, tt } from "./boards-board-connector-site.js";
import { ht } from "./boards-board-theme-presets.js";
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462304) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 = ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462303(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468), "");
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462305;
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462313 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312.subtleFill ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312.moderateFill ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462315 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312.gradientFrom ?? "acc5"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462311[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462312.gradientTo ?? "acc1"];
  return [{
    fillType: ShapeFillEnum.SolidFill,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462313,
    opacity: 1
  }, {
    fillType: ShapeFillEnum.SolidFill,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462314,
    opacity: 1
  }, {
    fillType: ShapeFillEnum.GradientFill,
    gradientAngle: 90,
    gradientStops: [{
      position: 0,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462315
    }, {
      position: 1,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462316
    }]
  }];
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.subtleLine ?? "acc1"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.moderateLine ?? "dk2"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462323[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462324.intenseLine ?? "dk1"];
  return [{
    lineStrokeType: ShapeLineTypeEnum.SolidLine,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462325,
    width: 1,
    opacity: 1
  }, {
    lineStrokeType: ShapeLineTypeEnum.SolidLine,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462326,
    width: 1.5,
    opacity: 1
  }, {
    lineStrokeType: ShapeLineTypeEnum.SolidLine,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327,
    width: 2.25,
    opacity: 1
  }];
}
function ut() {
  return [{}, {
    outerShadow: {
      color: "rgba(0, 0, 0, 0.18)",
      blurRadius: 4,
      direction: 45,
      distance: 2,
      rotateWithShape: false
    }
  }, {
    outerShadow: {
      color: "rgba(0, 0, 0, 0.28)",
      blurRadius: 8,
      direction: 45,
      distance: 4,
      rotateWithShape: false
    }
  }];
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333) {
  return [{
    fillType: ShapeFillEnum.SolidFill,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.lt1,
    opacity: 1
  }, {
    fillType: ShapeFillEnum.SolidFill,
    color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.lt2,
    opacity: 1
  }, {
    fillType: ShapeFillEnum.GradientFill,
    gradientAngle: 90,
    gradientStops: [{
      position: 0,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.lt1
    }, {
      position: 1,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333.lt2
    }]
  }];
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338 = {}) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339 = st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337);
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462335,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336,
    colorScheme: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339,
    fontScheme: {
      heading: "Calibri Light",
      body: "Calibri"
    },
    fmtScheme: {
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462336,
      fillStyleLst: ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339, {
        subtleFill: "boardFillNeutral",
        moderateFill: "boardFillPrimary",
        gradientFrom: "boardFillAccent",
        gradientTo: "boardFillPrimary",
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338
      }),
      lnStyleLst: lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339, {
        subtleLine: "boardStroke",
        moderateLine: "boardStroke",
        intenseLine: "boardStroke",
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338
      }),
      effectStyleLst: ut(),
      bgFillStyleLst: dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339)
    }
  };
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.900", "gray.1000"], Ze),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.100"], "#f3f5f9"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.300"], "#c6ccd6"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["primary.600", "blue.600"], "#2c53f1"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["blue.600", "primary.600"], "#1c64f2"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["purple.600", "primary.600"], "#7e3af2"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["green.600"], "#057a55"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["orange.500", "orange.600"], "#ff5a1f"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["yellow.400", "yellow.500"], "#f1b312"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["red.500", "red.600"], "#f05252"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.1000", "gray.950", "gray.900"], "#111111"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.0", "bg.white"], Ye),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71 = {
      blueStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["blue.600", "primary.600"], tt.blueStroke),
      blueFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, tt.blueFill),
      grayStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["gray.300"], tt.grayStroke),
      grayFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.72, tt.grayFill),
      orangeStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["orange.500", "orange.600"], tt.orangeStroke),
      orangeFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.84, tt.orangeFill),
      greenStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["green.600"], tt.greenStroke),
      greenFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, tt.greenFill),
      redStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["red.500", "red.600"], tt.redStroke),
      redFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, tt.redFill),
      purpleStroke: F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348, ["purple.600", "primary.600"], tt.purpleStroke),
      purpleFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.88, tt.purpleFill)
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72 = {
      darkPurple: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.36, nt.darkPurple),
      darkPurpleStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.24, nt.darkPurpleStroke),
      teal: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.22, nt.teal),
      tealStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.28, nt.tealStroke),
      mustard: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.16, nt.mustard),
      mustardStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.18, nt.mustardStroke),
      rust: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.26, nt.rust),
      rustStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.16, nt.rustStroke),
      periwinkle: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.3, nt.periwinkle),
      periwinkleStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.26, nt.periwinkleStroke),
      cream: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, nt.cream),
      creamStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.66, nt.creamStroke),
      lightText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, 0.05, nt.lightText),
      darkText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, 0.08, nt.darkText)
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73 = {
      black: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360,
      white: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
      ink: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      dark: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360, 0.22, rt.dark),
      line: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.18, rt.line),
      muted: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351,
      lightText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351, 0.16, rt.lightText),
      darkText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.08, rt.darkText)
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74 = {
      blue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354,
      blueStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.14, it.blueStroke),
      orange: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357,
      orangeStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.13, it.orangeStroke),
      paleOrange: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, it.paleOrange),
      yellow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358,
      yellowStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.13, it.yellowStroke),
      green: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.08, it.green),
      greenStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.14, it.greenStroke),
      black: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.08, it.black),
      blackStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360,
      lightText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, 0.03, it.lightText),
      darkText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75 = {
      blue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353,
      blueStroke: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.18, at.blueStroke),
      blueDark: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.22, at.blueDark),
      lightFill: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.9, at.lightFill),
      lightText: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, 0.03, at.lightText),
      darkText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76 = {
      dk1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      lt1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
      dk2: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352,
      lt2: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462351,
      acc1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353,
      acc2: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357,
      acc3: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355,
      acc4: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358,
      acc5: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354,
      acc6: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356,
      hlink: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353,
      folHlink: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355,
      boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardText: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardFillPrimary: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.88, N.boardFillPrimary),
      boardFillDecision: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.76, N.boardFillDecision),
      boardFillData: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.84, N.boardFillData),
      boardFillAccent: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.86, N.boardFillAccent),
      boardFillWarning: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.82, N.boardFillWarning),
      boardFillDanger: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.84, N.boardFillDanger),
      boardFillNeutral: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.7, N.boardFillNeutral),
      boardFillPurple: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361, 0.88, N.boardFillPurple),
      boardStrokePrimary: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeDecision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeAccent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeWarning: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeDanger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokeNeutral: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardStrokePurple: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextPrimary: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextDecision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextAccent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextWarning: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextDanger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextNeutral: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextPurple: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardFillHeader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353,
      boardTextOnHeader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
      boardStrokeHeader: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, 0.28, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353),
      boardFillStrong: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
      boardTextOnStrong: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
      boardStrokeStrong: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB77 = {
      default: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
      classic: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
        dk2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.grayStroke,
        lt2: "#f7f8fa",
        acc1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueStroke,
        acc2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeStroke,
        acc3: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.purpleStroke,
        acc4: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeStroke,
        acc5: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueStroke,
        acc6: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.greenStroke,
        boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardFillPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueFill,
        boardFillDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeFill,
        boardFillData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.greenFill,
        boardFillAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueFill,
        boardFillWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeFill,
        boardFillDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.redFill,
        boardFillNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.grayFill,
        boardFillPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.purpleFill,
        boardStrokePrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueStroke,
        boardStrokeDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeStroke,
        boardStrokeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.greenStroke,
        boardStrokeAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.blueStroke,
        boardStrokeWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.orangeStroke,
        boardStrokeDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.redStroke,
        boardStrokeNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.grayStroke,
        boardStrokePurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB71.purpleStroke,
        boardTextPrimary: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextDecision: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextAccent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextWarning: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextDanger: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextNeutral: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardTextPurple: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardFillHeader: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.18, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350),
        boardTextOnHeader: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
        boardStrokeHeader: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350),
        boardFillStrong: P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462352, 0.12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350),
        boardTextOnStrong: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361,
        boardStrokeStrong: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350
      },
      vintage: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
        dk1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        dk2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        lt2: "#f8f5ef",
        acc1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        acc2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.rust,
        acc3: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.cream,
        acc4: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.mustard,
        acc5: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.periwinkle,
        acc6: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.teal,
        hlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.teal,
        folHlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        boardFillPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        boardFillDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.mustard,
        boardFillData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.rust,
        boardFillAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        boardFillWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.cream,
        boardFillDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.periwinkle,
        boardFillNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.teal,
        boardFillPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.cream,
        boardStrokePrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurpleStroke,
        boardStrokeDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.mustardStroke,
        boardStrokeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.rustStroke,
        boardStrokeAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurpleStroke,
        boardStrokeWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.creamStroke,
        boardStrokeDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.periwinkleStroke,
        boardStrokeNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.tealStroke,
        boardStrokePurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.creamStroke,
        boardTextPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardTextDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        boardTextData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardTextAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardTextWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        boardTextDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardTextNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        boardTextPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkText,
        boardFillHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        boardTextOnHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardStrokeHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurpleStroke,
        boardFillStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurple,
        boardTextOnStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.lightText,
        boardStrokeStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72.darkPurpleStroke
      },
      gray: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
        dk1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.ink,
        dk2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        lt1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        lt2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.muted,
        acc1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        acc2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        acc3: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        acc4: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.dark,
        acc5: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        acc6: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.ink,
        hlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.ink,
        folHlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardFillPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        boardFillDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.dark,
        boardFillData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        boardFillAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardFillWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        boardFillDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        boardFillNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardFillPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.white,
        boardStrokePrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        boardStrokeDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.dark,
        boardStrokeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        boardStrokeAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardStrokeWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        boardStrokeDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        boardStrokeNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardStrokePurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.line,
        boardTextPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardTextDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.lightText,
        boardTextData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardTextAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.lightText,
        boardTextWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardTextDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardTextNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.lightText,
        boardTextPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.darkText,
        boardFillHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardTextOnHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.lightText,
        boardStrokeHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardFillStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black,
        boardTextOnStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.lightText,
        boardStrokeStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73.black
      },
      vibrant: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
        dk1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.darkText,
        dk2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.black,
        lt2: "#f7f9fc",
        acc1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blue,
        acc2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orange,
        acc3: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.black,
        acc4: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.yellow,
        acc5: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blue,
        acc6: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.green,
        hlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blue,
        folHlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orange,
        boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.darkText,
        boardFillPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blue,
        boardFillDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.yellow,
        boardFillData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.paleOrange,
        boardFillAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blue,
        boardFillWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orange,
        boardFillDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.green,
        boardFillNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orange,
        boardFillPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.black,
        boardStrokePrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blueStroke,
        boardStrokeDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.yellowStroke,
        boardStrokeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orangeStroke,
        boardStrokeAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blueStroke,
        boardStrokeWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orangeStroke,
        boardStrokeDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.greenStroke,
        boardStrokeNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orangeStroke,
        boardStrokePurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blackStroke,
        boardTextPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardTextDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.darkText,
        boardTextData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.darkText,
        boardTextAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardTextWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardTextDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardTextNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardTextPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardFillHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orange,
        boardTextOnHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardStrokeHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.orangeStroke,
        boardFillStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.black,
        boardTextOnStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.lightText,
        boardStrokeStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74.blackStroke
      },
      blue: {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
        dk1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        dk2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        lt2: "#f7f8ff",
        acc1: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        acc2: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        acc3: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        acc4: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        acc5: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        acc6: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        hlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        folHlink: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueDark,
        boardStroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462350,
        boardText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardFillPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardFillDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardFillData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardFillAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardFillWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        boardFillDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardFillNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        boardFillPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightFill,
        boardStrokePrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardStrokeDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardStrokeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardStrokeAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardStrokeWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueDark,
        boardStrokeDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardStrokeNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueDark,
        boardStrokePurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueStroke,
        boardTextPrimary: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardTextDecision: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardTextData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardTextAccent: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardTextWarning: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightText,
        boardTextDanger: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardTextNeutral: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightText,
        boardTextPurple: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.darkText,
        boardFillHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        boardTextOnHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightText,
        boardStrokeHeader: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueDark,
        boardFillStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blue,
        boardTextOnStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.lightText,
        boardStrokeStrong: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75.blueDark
      }
    };
  return ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349, Je[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB77[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462349]);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462378);
  return ht.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379);
}
export { mt as createBoardThemePreset, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F as getBoardThemePreset };
