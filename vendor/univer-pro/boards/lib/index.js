import { BooleanNumber as var_core_value_sigF9F1, ColorKit as var_core_value_sigC137, CommandType as var_core_value_sigE0AC, CustomCommandExecutionError as var_core_value_sig768A, DependentOn as var_core_value_sig6D9D, Disposable as var_core_value_sig73E5, DrawingTypeEnum as var_core_value_sigDCEA, GridType as var_core_value_sig8936, HorizontalAlign as var_core_value_sigB6AF, ICommandService as var_core_value_sig88BA, IConfigService as var_core_value_sig1B7C, IPermissionService as var_core_value_sig7EBF, IUndoRedoService as var_core_value_sig1F7B, IUniverInstanceService as var_core_value_sig7F3C, Inject as var_core_value_sig47F8, Injector as var_core_value_sigB2F9, PermissionStatus as var_core_value_sig0873, Plugin as var_core_value_sig5B8B, Tools as var_core_value_sig7D37, UnitModel as var_core_value_sigA77D, UniverInstanceType as var_core_value_sigC8D0, VerticalAlign as var_core_value_sig5D02, WrapStrategy as var_core_value_sigC936, createIdentifier as var_core_value_sig72C0, createParagraphId as var_core_value_sigBEAE, createSectionId as var_core_value_sigC1DE, generateRandomId as var_core_value_sig90E7, merge as var_core_value_sig76C1, normalizeDrawingOrderIndex as var_core_value_sigCF5A, sequenceExecute as var_core_value_sig77FC, toDisposable as var_core_value_sig4D7C } from "@univerjs/core";
import { BehaviorSubject as var_core_value_sigAE54, Subject as var_core_value_sig44B7, map as var_core_value_sigD285, merge as var_core_value_sig0C83, mergeMap as var_core_value_sig5003 } from "rxjs";
import { UnitDrawingService as var_core_value_sigB8D1 } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry as var_core_value_sig1EB0, ShapeArrowSizeEnum as var_core_value_sig2607, ShapeArrowTypeEnum as var_core_value_sig2808, ShapeFillEnum as var_core_value_sig5B96, ShapeLineCapEnum as var_core_value_sigF2DD, ShapeLineDashEnum as var_core_value_sig8B71, ShapeLineJoinEnum as var_core_value_sigE74F, ShapeLineTypeEnum as var_core_value_sig8FBA, ShapeOperatorEnum as var_core_value_sigE304, ShapeTextAutoFitType as var_core_value_sig96A6, ShapeTextDirection as var_core_value_sig3653, ShapeTextWrapType as var_core_value_sigC01A, ShapeTypeEnum as var_core_value_sig597C, UniverShapePlugin as var_core_value_sigB870, canApplyShapeFormulaLastValue as var_core_value_sigF8CA, computeConnectorRouteLayout as var_core_value_sig76BA, createUniqueShapeName as var_core_value_sig1070, isConnectorShape as var_core_value_sigAE97, isCurvedConnectorShape as var_core_value_sig578F, resolveConnectorRoutePoints as var_core_value_sigF7CF, resolveShapeConnectionPoint as var_core_value_sig544C, resolveShapeDefaultInsertSize as var_core_value_sig866C } from "@univerjs-pro/engine-shape";
import { UnitAction as var_core_value_sigA82B, UnitObject as var_core_value_sigC806 } from "@univerjs/protocol";
import { UniverLicensePlugin as var_core_value_sig9A39 } from "@univerjs-pro/license";
let Ae = function (var_core_value_sig9414) {
  return var_core_value_sig9414.Select = "select", var_core_value_sig9414.Drag = "drag", var_core_value_sig9414.Shape = "shape", var_core_value_sig9414.Text = "text", var_core_value_sig9414.Sticky = "sticky", var_core_value_sig9414.Line = "line", var_core_value_sig9414.Container = "container", var_core_value_sig9414.Swimlane = "swimlane", var_core_value_sig9414.Table = "table", var_core_value_sig9414.Chart = "chart", var_core_value_sig9414.Pen = "pen", var_core_value_sig9414.MindMap = "mind-map", var_core_value_sig9414.Resources = "resources", var_core_value_sig9414.Image = "image", var_core_value_sig9414.Import = "import", var_core_value_sig9414;
}({});
const M = {
    Placeholder: "placeholder",
    Text: "text",
    Shape: "shape",
    Image: "image",
    Chart: "chart",
    Table: "table",
    Diagram: "diagram",
    Media: "media",
    Group: "group",
    Connector: "connector",
    Container: "container"
  },
  je = {
    Title: "title",
    CenterTitle: "centerTitle",
    Subtitle: "subtitle",
    Body: "body",
    Text: "text",
    Object: "object",
    Picture: "picture",
    Chart: "chart",
    Table: "table",
    Diagram: "diagram",
    Media: "media",
    SlideNumber: "slideNumber",
    Date: "date",
    Footer: "footer",
    Header: "header"
  },
  Me = {
    Audio: "audio",
    Video: "video"
  };
let Ne = function (var_core_value_sig32E7) {
    return var_core_value_sig32E7.Page = "page", var_core_value_sig32E7.Master = "master", var_core_value_sig32E7.Layout = "layout", var_core_value_sig32E7.HandoutMaster = "handoutMaster", var_core_value_sig32E7.NotesMaster = "notesMaster", var_core_value_sig32E7;
  }({}),
  Pe = function (var_core_value_sigD8C3) {
    return var_core_value_sigD8C3.Standard4By3 = "standard4By3", var_core_value_sigD8C3.WideScreen16By9 = "wideScreen16By9", var_core_value_sigD8C3.WideScreen16By10 = "wideScreen16By10", var_core_value_sigD8C3.Custom = "custom", var_core_value_sigD8C3;
  }({}),
  Fe = function (var_core_value_sig3A44) {
    return var_core_value_sig3A44.None = "none", var_core_value_sig3A44.Solid = "solid", var_core_value_sig3A44.Gradient = "gradient", var_core_value_sig3A44.Image = "image", var_core_value_sig3A44.Pattern = "pattern", var_core_value_sig3A44;
  }({}),
  Ie = function (var_core_value_sig0642) {
    return var_core_value_sig0642.None = "none", var_core_value_sig0642.Fade = "fade", var_core_value_sig0642.Push = "push", var_core_value_sig0642.Wipe = "wipe", var_core_value_sig0642.Cut = "cut", var_core_value_sig0642.Cover = "cover", var_core_value_sig0642.Uncover = "uncover", var_core_value_sig0642.Reveal = "reveal", var_core_value_sig0642.Split = "split", var_core_value_sig0642.Zoom = "zoom", var_core_value_sig0642;
  }({}),
  Le = function (var_core_value_sig786E) {
    return var_core_value_sig786E.Left = "left", var_core_value_sig786E.Right = "right", var_core_value_sig786E.Up = "up", var_core_value_sig786E.Down = "down", var_core_value_sig786E;
  }({}),
  Re = function (var_core_value_sigFC47) {
    return var_core_value_sigFC47.Slow = "slow", var_core_value_sigFC47.Medium = "medium", var_core_value_sigFC47.Fast = "fast", var_core_value_sigFC47;
  }({});
const ze = {
    Top: 0,
    Right: 1,
    Bottom: 2,
    Left: 3
  },
  Be = {
    top: ze.Top,
    right: ze.Right,
    bottom: ze.Bottom,
    left: ze.Left
  },
  Ve = 12,
  He = {
    Start: "start",
    Center: "center",
    End: "end",
    Path: "path",
    Auto: "auto"
  },
  Ue = {
    Left: "left",
    OnPath: "onPath",
    Right: "right"
  },
  We = {
    Horizontal: "horizontal",
    FollowPath: "followPath",
    Auto: "auto"
  },
  Ge = {
    AutoSize: "autoSize",
    FixedWidth: "fixedWidth",
    FixedSize: "fixedSize"
  },
  Ke = {
    Path: "path",
    Canvas: "canvas"
  },
  qe = "default",
  Je = {
    default: "Default",
    classic: "Classic",
    vintage: "Vintage",
    gray: "Gray",
    vibrant: "Vibrant",
    blue: "Blue"
  },
  Ye = "#ffffff",
  Xe = "#1f2329",
  Ze = "#1f2329",
  Qe = {
    primary: "boardFillPrimary",
    decision: "boardFillDecision",
    data: "boardFillData",
    accent: "boardFillAccent",
    warning: "boardFillWarning",
    danger: "boardFillDanger",
    neutral: "boardFillNeutral",
    purple: "boardFillPurple"
  },
  $e = {
    primary: "boardStrokePrimary",
    decision: "boardStrokeDecision",
    data: "boardStrokeData",
    accent: "boardStrokeAccent",
    warning: "boardStrokeWarning",
    danger: "boardStrokeDanger",
    neutral: "boardStrokeNeutral",
    purple: "boardStrokePurple"
  },
  et = {
    primary: "boardTextPrimary",
    decision: "boardTextDecision",
    data: "boardTextData",
    accent: "boardTextAccent",
    warning: "boardTextWarning",
    danger: "boardTextDanger",
    neutral: "boardTextNeutral",
    purple: "boardTextPurple"
  },
  N = {
    boardStroke: Xe,
    boardText: Ze,
    boardFillPrimary: "#eef3fb",
    boardFillDecision: "#fff1cc",
    boardFillData: "#ddf3e4",
    boardFillAccent: "#e6ecff",
    boardFillWarning: "#ffe7d6",
    boardFillDanger: "#ffe0df",
    boardFillNeutral: "#f3f4f6",
    boardFillPurple: "#eee8ff",
    boardStrokePrimary: "#5b8cff",
    boardStrokeDecision: "#ff9d3d",
    boardStrokeData: "#52d053",
    boardStrokeAccent: "#5b8cff",
    boardStrokeWarning: "#ff9d3d",
    boardStrokeDanger: "#ff6666",
    boardStrokeNeutral: "#c2c7cc",
    boardStrokePurple: "#925cff",
    boardTextPrimary: Ze,
    boardTextDecision: Ze,
    boardTextData: Ze,
    boardTextAccent: Ze,
    boardTextWarning: Ze,
    boardTextDanger: Ze,
    boardTextNeutral: Ze,
    boardTextPurple: Ze,
    boardFillHeader: "#1f2329",
    boardTextOnHeader: Ye,
    boardStrokeHeader: "#1f2329",
    boardFillStrong: "#1f2329",
    boardTextOnStrong: Ye,
    boardStrokeStrong: "#1f2329"
  },
  tt = {
    blueStroke: "#5b8cff",
    blueFill: "#dfe8ff",
    grayStroke: "#c2c7cc",
    grayFill: "#f1f3f5",
    orangeStroke: "#ff9d3d",
    orangeFill: "#ffe9cc",
    greenStroke: "#52d053",
    greenFill: "#dcf7da",
    redStroke: "#ff6666",
    redFill: "#ffe1e1",
    purpleStroke: "#925cff",
    purpleFill: "#eadfff"
  },
  nt = {
    darkPurple: "#403a60",
    darkPurpleStroke: "#342f50",
    teal: "#70b7a5",
    tealStroke: "#5aa894",
    mustard: "#efbf57",
    mustardStroke: "#dda947",
    rust: "#bf5d42",
    rustStroke: "#a94d35",
    periwinkle: "#7784c6",
    periwinkleStroke: "#6875b7",
    cream: "#efe3cc",
    creamStroke: "#e2d3b8",
    lightText: "#f6f0e8",
    darkText: "#2f3340"
  },
  rt = {
    black: "#000000",
    white: "#ffffff",
    ink: "#2f333a",
    dark: "#252a32",
    line: "#343941",
    muted: "#f5f6f7",
    lightText: "#f3f4f6",
    darkText: "#40444c"
  },
  it = {
    blue: "#2d73d9",
    blueStroke: "#2563c9",
    orange: "#f26b4a",
    orangeStroke: "#df5b3d",
    paleOrange: "#fde7df",
    yellow: "#ffd45a",
    yellowStroke: "#efc14a",
    green: "#59b87d",
    greenStroke: "#4aa66e",
    black: "#1a1a1a",
    blackStroke: "#111111",
    lightText: "#f7f8fb",
    darkText: "#2f3340"
  },
  at = {
    blue: "#4b55e7",
    blueStroke: "#6874ff",
    blueDark: "#3f49d7",
    lightFill: "#f1f3ff",
    lightText: "#f7f8fb",
    darkText: "#40444c"
  };
function ot(var_core_value_sig48E2, var_core_value_sig2FCA) {
  if (!var_core_value_sig48E2) return var_core_value_sig2FCA;
  let var_core_value_sig04F2 = new var_core_value_sigC137(var_core_value_sig48E2);
  return var_core_value_sig04F2.isValid ? var_core_value_sig04F2.toHexString() : var_core_value_sig2FCA;
}
function P(var_core_value_sig2CFC, var_core_value_sig5CEB, var_core_value_sig4935, var_core_value_sig1832) {
  let var_core_value_sig79D7 = ot(var_core_value_sig2CFC, var_core_value_sig1832),
    var_core_value_sig5E01 = var_core_value_sigC137.mix(var_core_value_sig79D7, var_core_value_sig5CEB, var_core_value_sig4935);
  return var_core_value_sig5E01.isValid ? var_core_value_sig5E01.toHexString() : var_core_value_sig1832;
}
function F(var_core_value_sigBBE4, var_core_value_sig96B3, var_core_value_sig9CF2) {
  for (let var_core_value_sigD04E of var_core_value_sig96B3) {
    let var_core_value_sig5A13 = ot(var_core_value_sigBBE4 == null ? undefined : var_core_value_sigBBE4(var_core_value_sigD04E), "");
    if (var_core_value_sig5A13) return var_core_value_sig5A13;
  }
  return var_core_value_sig9CF2;
}
function st(var_core_value_sig666D) {
  return {
    ...var_core_value_sig666D,
    primary: var_core_value_sig666D.primary ?? var_core_value_sig666D.acc1,
    boardStroke: var_core_value_sig666D.boardStroke ?? var_core_value_sig666D.dk1 ?? Xe,
    boardText: var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? Ze,
    boardFillPrimary: var_core_value_sig666D.boardFillPrimary ?? P(var_core_value_sig666D.acc1, var_core_value_sig666D.lt1, 0.88, N.boardFillPrimary),
    boardFillDecision: var_core_value_sig666D.boardFillDecision ?? P(var_core_value_sig666D.acc4, var_core_value_sig666D.lt1, 0.76, N.boardFillDecision),
    boardFillData: var_core_value_sig666D.boardFillData ?? P(var_core_value_sig666D.acc6, var_core_value_sig666D.lt1, 0.84, N.boardFillData),
    boardFillAccent: var_core_value_sig666D.boardFillAccent ?? P(var_core_value_sig666D.acc5, var_core_value_sig666D.lt1, 0.86, N.boardFillAccent),
    boardFillWarning: var_core_value_sig666D.boardFillWarning ?? P(var_core_value_sig666D.acc2, var_core_value_sig666D.lt1, 0.8, N.boardFillWarning),
    boardFillDanger: var_core_value_sig666D.boardFillDanger ?? P(var_core_value_sig666D.acc2, var_core_value_sig666D.lt1, 0.86, N.boardFillDanger),
    boardFillNeutral: var_core_value_sig666D.boardFillNeutral ?? P(var_core_value_sig666D.dk2, var_core_value_sig666D.lt1, 0.92, N.boardFillNeutral),
    boardFillPurple: var_core_value_sig666D.boardFillPurple ?? P(var_core_value_sig666D.acc3, var_core_value_sig666D.lt1, 0.86, N.boardFillPurple),
    boardStrokePrimary: var_core_value_sig666D.boardStrokePrimary ?? var_core_value_sig666D.acc1 ?? N.boardStrokePrimary,
    boardStrokeDecision: var_core_value_sig666D.boardStrokeDecision ?? var_core_value_sig666D.acc4 ?? N.boardStrokeDecision,
    boardStrokeData: var_core_value_sig666D.boardStrokeData ?? var_core_value_sig666D.acc6 ?? N.boardStrokeData,
    boardStrokeAccent: var_core_value_sig666D.boardStrokeAccent ?? var_core_value_sig666D.acc5 ?? var_core_value_sig666D.acc1 ?? N.boardStrokeAccent,
    boardStrokeWarning: var_core_value_sig666D.boardStrokeWarning ?? var_core_value_sig666D.acc2 ?? N.boardStrokeWarning,
    boardStrokeDanger: var_core_value_sig666D.boardStrokeDanger ?? var_core_value_sig666D.acc2 ?? N.boardStrokeDanger,
    boardStrokeNeutral: var_core_value_sig666D.boardStrokeNeutral ?? var_core_value_sig666D.dk2 ?? N.boardStrokeNeutral,
    boardStrokePurple: var_core_value_sig666D.boardStrokePurple ?? var_core_value_sig666D.acc3 ?? N.boardStrokePurple,
    boardTextPrimary: var_core_value_sig666D.boardTextPrimary ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextPrimary,
    boardTextDecision: var_core_value_sig666D.boardTextDecision ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextDecision,
    boardTextData: var_core_value_sig666D.boardTextData ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextData,
    boardTextAccent: var_core_value_sig666D.boardTextAccent ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextAccent,
    boardTextWarning: var_core_value_sig666D.boardTextWarning ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextWarning,
    boardTextDanger: var_core_value_sig666D.boardTextDanger ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextDanger,
    boardTextNeutral: var_core_value_sig666D.boardTextNeutral ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextNeutral,
    boardTextPurple: var_core_value_sig666D.boardTextPurple ?? var_core_value_sig666D.boardText ?? var_core_value_sig666D.dk1 ?? N.boardTextPurple,
    boardFillHeader: var_core_value_sig666D.boardFillHeader ?? P(var_core_value_sig666D.acc1, var_core_value_sig666D.lt1, 0.28, N.boardFillHeader),
    boardTextOnHeader: var_core_value_sig666D.boardTextOnHeader ?? Ye,
    boardStrokeHeader: var_core_value_sig666D.boardStrokeHeader ?? P(var_core_value_sig666D.acc1, var_core_value_sig666D.dk1, 0.35, N.boardStrokeHeader),
    boardFillStrong: var_core_value_sig666D.boardFillStrong ?? P(var_core_value_sig666D.dk1, var_core_value_sig666D.acc1, 0.25, N.boardFillStrong),
    boardTextOnStrong: var_core_value_sig666D.boardTextOnStrong ?? Ye,
    boardStrokeStrong: var_core_value_sig666D.boardStrokeStrong ?? var_core_value_sig666D.dk1 ?? N.boardStrokeStrong
  };
}
function ct(var_core_value_sigBD53, var_core_value_sigD11F = {}) {
  let var_core_value_sig6223 = var_core_value_sigBD53[var_core_value_sigD11F.subtleFill ?? "acc1"],
    var_core_value_sig7653 = var_core_value_sigBD53[var_core_value_sigD11F.moderateFill ?? "acc1"],
    var_core_value_sigF65B = var_core_value_sigBD53[var_core_value_sigD11F.gradientFrom ?? "acc5"],
    var_core_value_sig4A94 = var_core_value_sigBD53[var_core_value_sigD11F.gradientTo ?? "acc1"];
  return [{
    fillType: var_core_value_sig5B96.SolidFill,
    color: var_core_value_sig6223,
    opacity: 1
  }, {
    fillType: var_core_value_sig5B96.SolidFill,
    color: var_core_value_sig7653,
    opacity: 1
  }, {
    fillType: var_core_value_sig5B96.GradientFill,
    gradientAngle: 90,
    gradientStops: [{
      position: 0,
      color: var_core_value_sigF65B
    }, {
      position: 1,
      color: var_core_value_sig4A94
    }]
  }];
}
function lt(var_core_value_sigEB59, var_core_value_sigD9B0 = {}) {
  let var_core_value_sigB7D6 = var_core_value_sigEB59[var_core_value_sigD9B0.subtleLine ?? "acc1"],
    var_core_value_sigCF1F = var_core_value_sigEB59[var_core_value_sigD9B0.moderateLine ?? "dk2"],
    var_core_value_sig4DD1 = var_core_value_sigEB59[var_core_value_sigD9B0.intenseLine ?? "dk1"];
  return [{
    lineStrokeType: var_core_value_sig8FBA.SolidLine,
    color: var_core_value_sigB7D6,
    width: 1,
    opacity: 1
  }, {
    lineStrokeType: var_core_value_sig8FBA.SolidLine,
    color: var_core_value_sigCF1F,
    width: 1.5,
    opacity: 1
  }, {
    lineStrokeType: var_core_value_sig8FBA.SolidLine,
    color: var_core_value_sig4DD1,
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
function dt(var_core_value_sig1293) {
  return [{
    fillType: var_core_value_sig5B96.SolidFill,
    color: var_core_value_sig1293.lt1,
    opacity: 1
  }, {
    fillType: var_core_value_sig5B96.SolidFill,
    color: var_core_value_sig1293.lt2,
    opacity: 1
  }, {
    fillType: var_core_value_sig5B96.GradientFill,
    gradientAngle: 90,
    gradientStops: [{
      position: 0,
      color: var_core_value_sig1293.lt1
    }, {
      position: 1,
      color: var_core_value_sig1293.lt2
    }]
  }];
}
function ft(var_core_value_sigC999, var_core_value_sig9D8F, var_core_value_sig8270, var_core_value_sig95D9 = {}) {
  let var_core_value_sig0E92 = st(var_core_value_sig8270);
  return {
    id: var_core_value_sigC999,
    name: var_core_value_sig9D8F,
    colorScheme: var_core_value_sig0E92,
    fontScheme: {
      heading: "Calibri Light",
      body: "Calibri"
    },
    fmtScheme: {
      name: var_core_value_sig9D8F,
      fillStyleLst: ct(var_core_value_sig0E92, {
        subtleFill: "boardFillNeutral",
        moderateFill: "boardFillPrimary",
        gradientFrom: "boardFillAccent",
        gradientTo: "boardFillPrimary",
        ...var_core_value_sig95D9
      }),
      lnStyleLst: lt(var_core_value_sig0E92, {
        subtleLine: "boardStroke",
        moderateLine: "boardStroke",
        intenseLine: "boardStroke",
        ...var_core_value_sig95D9
      }),
      effectStyleLst: ut(),
      bgFillStyleLst: dt(var_core_value_sig0E92)
    }
  };
}
function pt(var_core_value_sig45CD) {
  return !var_core_value_sig45CD || var_core_value_sig45CD === "follow-univer" || var_core_value_sig45CD === "board-default-theme" ? qe : var_core_value_sig45CD in Je ? var_core_value_sig45CD : undefined;
}
function mt(var_core_value_sigAD84, var_core_value_sigD513) {
  let var_core_value_sig36BD = pt(var_core_value_sigAD84);
  if (!var_core_value_sig36BD) return;
  let var_core_value_sig0413 = F(var_core_value_sigD513, ["gray.900", "gray.1000"], Ze),
    var_core_value_sig15B6 = F(var_core_value_sigD513, ["gray.100"], "#f3f5f9"),
    var_core_value_sigFEBF = F(var_core_value_sigD513, ["gray.300"], "#c6ccd6"),
    var_core_value_sigBBA2 = F(var_core_value_sigD513, ["primary.600", "blue.600"], "#2c53f1"),
    var_core_value_sigC9A1 = F(var_core_value_sigD513, ["blue.600", "primary.600"], "#1c64f2"),
    var_core_value_sigE469 = F(var_core_value_sigD513, ["purple.600", "primary.600"], "#7e3af2"),
    var_core_value_sigA499 = F(var_core_value_sigD513, ["green.600"], "#057a55"),
    var_core_value_sig4CC3 = F(var_core_value_sigD513, ["orange.500", "orange.600"], "#ff5a1f"),
    var_core_value_sig70B3 = F(var_core_value_sigD513, ["yellow.400", "yellow.500"], "#f1b312"),
    var_core_value_sig422B = F(var_core_value_sigD513, ["red.500", "red.600"], "#f05252"),
    var_core_value_sig1038 = F(var_core_value_sigD513, ["gray.1000", "gray.950", "gray.900"], "#111111"),
    var_core_value_sigC3E6 = F(var_core_value_sigD513, ["gray.0", "bg.white"], Ye),
    var_core_value_sig3710 = {
      blueStroke: F(var_core_value_sigD513, ["blue.600", "primary.600"], tt.blueStroke),
      blueFill: P(var_core_value_sigC9A1, var_core_value_sigC3E6, 0.86, tt.blueFill),
      grayStroke: F(var_core_value_sigD513, ["gray.300"], tt.grayStroke),
      grayFill: P(var_core_value_sigFEBF, var_core_value_sigC3E6, 0.72, tt.grayFill),
      orangeStroke: F(var_core_value_sigD513, ["orange.500", "orange.600"], tt.orangeStroke),
      orangeFill: P(var_core_value_sig4CC3, var_core_value_sigC3E6, 0.84, tt.orangeFill),
      greenStroke: F(var_core_value_sigD513, ["green.600"], tt.greenStroke),
      greenFill: P(var_core_value_sigA499, var_core_value_sigC3E6, 0.86, tt.greenFill),
      redStroke: F(var_core_value_sigD513, ["red.500", "red.600"], tt.redStroke),
      redFill: P(var_core_value_sig422B, var_core_value_sigC3E6, 0.86, tt.redFill),
      purpleStroke: F(var_core_value_sigD513, ["purple.600", "primary.600"], tt.purpleStroke),
      purpleFill: P(var_core_value_sigE469, var_core_value_sigC3E6, 0.88, tt.purpleFill)
    },
    var_core_value_sig9726 = {
      darkPurple: P(var_core_value_sigE469, var_core_value_sig0413, 0.36, nt.darkPurple),
      darkPurpleStroke: P(var_core_value_sigE469, var_core_value_sig0413, 0.24, nt.darkPurpleStroke),
      teal: P(var_core_value_sigA499, var_core_value_sigC3E6, 0.22, nt.teal),
      tealStroke: P(var_core_value_sigA499, var_core_value_sig0413, 0.28, nt.tealStroke),
      mustard: P(var_core_value_sig70B3, var_core_value_sigC3E6, 0.16, nt.mustard),
      mustardStroke: P(var_core_value_sig70B3, var_core_value_sig0413, 0.18, nt.mustardStroke),
      rust: P(var_core_value_sig4CC3, var_core_value_sig0413, 0.26, nt.rust),
      rustStroke: P(var_core_value_sig4CC3, var_core_value_sig0413, 0.16, nt.rustStroke),
      periwinkle: P(var_core_value_sigC9A1, var_core_value_sigC3E6, 0.3, nt.periwinkle),
      periwinkleStroke: P(var_core_value_sigC9A1, var_core_value_sig0413, 0.26, nt.periwinkleStroke),
      cream: P(var_core_value_sig70B3, var_core_value_sigC3E6, 0.86, nt.cream),
      creamStroke: P(var_core_value_sig70B3, var_core_value_sigFEBF, 0.66, nt.creamStroke),
      lightText: P(var_core_value_sigC3E6, var_core_value_sig70B3, 0.05, nt.lightText),
      darkText: P(var_core_value_sig0413, var_core_value_sig4CC3, 0.08, nt.darkText)
    },
    var_core_value_sigFC9B = {
      black: var_core_value_sig1038,
      white: var_core_value_sigC3E6,
      ink: var_core_value_sig0413,
      dark: P(var_core_value_sig0413, var_core_value_sig1038, 0.22, rt.dark),
      line: P(var_core_value_sig0413, var_core_value_sigFEBF, 0.18, rt.line),
      muted: var_core_value_sig15B6,
      lightText: P(var_core_value_sigC3E6, var_core_value_sig15B6, 0.16, rt.lightText),
      darkText: P(var_core_value_sig0413, var_core_value_sigFEBF, 0.08, rt.darkText)
    },
    var_core_value_sig943E = {
      blue: var_core_value_sigC9A1,
      blueStroke: P(var_core_value_sigC9A1, var_core_value_sig0413, 0.14, it.blueStroke),
      orange: var_core_value_sig4CC3,
      orangeStroke: P(var_core_value_sig4CC3, var_core_value_sig0413, 0.13, it.orangeStroke),
      paleOrange: P(var_core_value_sig4CC3, var_core_value_sigC3E6, 0.86, it.paleOrange),
      yellow: var_core_value_sig70B3,
      yellowStroke: P(var_core_value_sig70B3, var_core_value_sig0413, 0.13, it.yellowStroke),
      green: P(var_core_value_sigA499, var_core_value_sigC3E6, 0.08, it.green),
      greenStroke: P(var_core_value_sigA499, var_core_value_sig0413, 0.14, it.greenStroke),
      black: P(var_core_value_sig1038, var_core_value_sig0413, 0.08, it.black),
      blackStroke: var_core_value_sig1038,
      lightText: P(var_core_value_sigC3E6, var_core_value_sigC9A1, 0.03, it.lightText),
      darkText: var_core_value_sig0413
    },
    var_core_value_sigEF36 = {
      blue: var_core_value_sigBBA2,
      blueStroke: P(var_core_value_sigBBA2, var_core_value_sigC3E6, 0.18, at.blueStroke),
      blueDark: P(var_core_value_sigBBA2, var_core_value_sig0413, 0.22, at.blueDark),
      lightFill: P(var_core_value_sigBBA2, var_core_value_sigC3E6, 0.9, at.lightFill),
      lightText: P(var_core_value_sigC3E6, var_core_value_sigBBA2, 0.03, at.lightText),
      darkText: var_core_value_sig0413
    },
    var_core_value_sigD4B1 = {
      dk1: var_core_value_sig0413,
      lt1: var_core_value_sigC3E6,
      dk2: var_core_value_sigFEBF,
      lt2: var_core_value_sig15B6,
      acc1: var_core_value_sigBBA2,
      acc2: var_core_value_sig4CC3,
      acc3: var_core_value_sigE469,
      acc4: var_core_value_sig70B3,
      acc5: var_core_value_sigC9A1,
      acc6: var_core_value_sigA499,
      hlink: var_core_value_sigBBA2,
      folHlink: var_core_value_sigE469,
      boardStroke: var_core_value_sig0413,
      boardText: var_core_value_sig0413,
      boardFillPrimary: P(var_core_value_sigBBA2, var_core_value_sigC3E6, 0.88, N.boardFillPrimary),
      boardFillDecision: P(var_core_value_sig70B3, var_core_value_sigC3E6, 0.76, N.boardFillDecision),
      boardFillData: P(var_core_value_sigA499, var_core_value_sigC3E6, 0.84, N.boardFillData),
      boardFillAccent: P(var_core_value_sigC9A1, var_core_value_sigC3E6, 0.86, N.boardFillAccent),
      boardFillWarning: P(var_core_value_sig4CC3, var_core_value_sigC3E6, 0.82, N.boardFillWarning),
      boardFillDanger: P(var_core_value_sig422B, var_core_value_sigC3E6, 0.84, N.boardFillDanger),
      boardFillNeutral: P(var_core_value_sigFEBF, var_core_value_sigC3E6, 0.7, N.boardFillNeutral),
      boardFillPurple: P(var_core_value_sigE469, var_core_value_sigC3E6, 0.88, N.boardFillPurple),
      boardStrokePrimary: var_core_value_sig0413,
      boardStrokeDecision: var_core_value_sig0413,
      boardStrokeData: var_core_value_sig0413,
      boardStrokeAccent: var_core_value_sig0413,
      boardStrokeWarning: var_core_value_sig0413,
      boardStrokeDanger: var_core_value_sig0413,
      boardStrokeNeutral: var_core_value_sig0413,
      boardStrokePurple: var_core_value_sig0413,
      boardTextPrimary: var_core_value_sig0413,
      boardTextDecision: var_core_value_sig0413,
      boardTextData: var_core_value_sig0413,
      boardTextAccent: var_core_value_sig0413,
      boardTextWarning: var_core_value_sig0413,
      boardTextDanger: var_core_value_sig0413,
      boardTextNeutral: var_core_value_sig0413,
      boardTextPurple: var_core_value_sig0413,
      boardFillHeader: var_core_value_sigBBA2,
      boardTextOnHeader: var_core_value_sigC3E6,
      boardStrokeHeader: P(var_core_value_sigBBA2, var_core_value_sig0413, 0.28, var_core_value_sigBBA2),
      boardFillStrong: var_core_value_sig0413,
      boardTextOnStrong: var_core_value_sigC3E6,
      boardStrokeStrong: var_core_value_sig0413
    },
    var_core_value_sigE5D8 = {
      default: var_core_value_sigD4B1,
      classic: {
        ...var_core_value_sigD4B1,
        dk2: var_core_value_sig3710.grayStroke,
        lt2: "#f7f8fa",
        acc1: var_core_value_sig3710.blueStroke,
        acc2: var_core_value_sig3710.orangeStroke,
        acc3: var_core_value_sig3710.purpleStroke,
        acc4: var_core_value_sig3710.orangeStroke,
        acc5: var_core_value_sig3710.blueStroke,
        acc6: var_core_value_sig3710.greenStroke,
        boardStroke: var_core_value_sig0413,
        boardFillPrimary: var_core_value_sig3710.blueFill,
        boardFillDecision: var_core_value_sig3710.orangeFill,
        boardFillData: var_core_value_sig3710.greenFill,
        boardFillAccent: var_core_value_sig3710.blueFill,
        boardFillWarning: var_core_value_sig3710.orangeFill,
        boardFillDanger: var_core_value_sig3710.redFill,
        boardFillNeutral: var_core_value_sig3710.grayFill,
        boardFillPurple: var_core_value_sig3710.purpleFill,
        boardStrokePrimary: var_core_value_sig3710.blueStroke,
        boardStrokeDecision: var_core_value_sig3710.orangeStroke,
        boardStrokeData: var_core_value_sig3710.greenStroke,
        boardStrokeAccent: var_core_value_sig3710.blueStroke,
        boardStrokeWarning: var_core_value_sig3710.orangeStroke,
        boardStrokeDanger: var_core_value_sig3710.redStroke,
        boardStrokeNeutral: var_core_value_sig3710.grayStroke,
        boardStrokePurple: var_core_value_sig3710.purpleStroke,
        boardTextPrimary: var_core_value_sig0413,
        boardTextDecision: var_core_value_sig0413,
        boardTextData: var_core_value_sig0413,
        boardTextAccent: var_core_value_sig0413,
        boardTextWarning: var_core_value_sig0413,
        boardTextDanger: var_core_value_sig0413,
        boardTextNeutral: var_core_value_sig0413,
        boardTextPurple: var_core_value_sig0413,
        boardFillHeader: P(var_core_value_sig0413, var_core_value_sigFEBF, 0.18, var_core_value_sig0413),
        boardTextOnHeader: var_core_value_sigC3E6,
        boardStrokeHeader: P(var_core_value_sig0413, var_core_value_sigFEBF, 0.1, var_core_value_sig0413),
        boardFillStrong: P(var_core_value_sig0413, var_core_value_sigFEBF, 0.12, var_core_value_sig0413),
        boardTextOnStrong: var_core_value_sigC3E6,
        boardStrokeStrong: var_core_value_sig0413
      },
      vintage: {
        ...var_core_value_sigD4B1,
        dk1: var_core_value_sig9726.darkText,
        dk2: var_core_value_sig9726.darkPurple,
        lt2: "#f8f5ef",
        acc1: var_core_value_sig9726.darkPurple,
        acc2: var_core_value_sig9726.rust,
        acc3: var_core_value_sig9726.cream,
        acc4: var_core_value_sig9726.mustard,
        acc5: var_core_value_sig9726.periwinkle,
        acc6: var_core_value_sig9726.teal,
        hlink: var_core_value_sig9726.teal,
        folHlink: var_core_value_sig9726.darkPurple,
        boardStroke: var_core_value_sig0413,
        boardText: var_core_value_sig9726.darkText,
        boardFillPrimary: var_core_value_sig9726.darkPurple,
        boardFillDecision: var_core_value_sig9726.mustard,
        boardFillData: var_core_value_sig9726.rust,
        boardFillAccent: var_core_value_sig9726.darkPurple,
        boardFillWarning: var_core_value_sig9726.cream,
        boardFillDanger: var_core_value_sig9726.periwinkle,
        boardFillNeutral: var_core_value_sig9726.teal,
        boardFillPurple: var_core_value_sig9726.cream,
        boardStrokePrimary: var_core_value_sig9726.darkPurpleStroke,
        boardStrokeDecision: var_core_value_sig9726.mustardStroke,
        boardStrokeData: var_core_value_sig9726.rustStroke,
        boardStrokeAccent: var_core_value_sig9726.darkPurpleStroke,
        boardStrokeWarning: var_core_value_sig9726.creamStroke,
        boardStrokeDanger: var_core_value_sig9726.periwinkleStroke,
        boardStrokeNeutral: var_core_value_sig9726.tealStroke,
        boardStrokePurple: var_core_value_sig9726.creamStroke,
        boardTextPrimary: var_core_value_sig9726.lightText,
        boardTextDecision: var_core_value_sig9726.darkText,
        boardTextData: var_core_value_sig9726.lightText,
        boardTextAccent: var_core_value_sig9726.lightText,
        boardTextWarning: var_core_value_sig9726.darkText,
        boardTextDanger: var_core_value_sig9726.lightText,
        boardTextNeutral: var_core_value_sig9726.darkText,
        boardTextPurple: var_core_value_sig9726.darkText,
        boardFillHeader: var_core_value_sig9726.darkPurple,
        boardTextOnHeader: var_core_value_sig9726.lightText,
        boardStrokeHeader: var_core_value_sig9726.darkPurpleStroke,
        boardFillStrong: var_core_value_sig9726.darkPurple,
        boardTextOnStrong: var_core_value_sig9726.lightText,
        boardStrokeStrong: var_core_value_sig9726.darkPurpleStroke
      },
      gray: {
        ...var_core_value_sigD4B1,
        dk1: var_core_value_sigFC9B.ink,
        dk2: var_core_value_sigFC9B.line,
        lt1: var_core_value_sigFC9B.white,
        lt2: var_core_value_sigFC9B.muted,
        acc1: var_core_value_sigFC9B.line,
        acc2: var_core_value_sigFC9B.black,
        acc3: var_core_value_sigFC9B.white,
        acc4: var_core_value_sigFC9B.dark,
        acc5: var_core_value_sigFC9B.black,
        acc6: var_core_value_sigFC9B.ink,
        hlink: var_core_value_sigFC9B.ink,
        folHlink: var_core_value_sigFC9B.black,
        boardStroke: var_core_value_sig0413,
        boardText: var_core_value_sigFC9B.darkText,
        boardFillPrimary: var_core_value_sigFC9B.white,
        boardFillDecision: var_core_value_sigFC9B.dark,
        boardFillData: var_core_value_sigFC9B.white,
        boardFillAccent: var_core_value_sigFC9B.black,
        boardFillWarning: var_core_value_sigFC9B.white,
        boardFillDanger: var_core_value_sigFC9B.white,
        boardFillNeutral: var_core_value_sigFC9B.black,
        boardFillPurple: var_core_value_sigFC9B.white,
        boardStrokePrimary: var_core_value_sigFC9B.line,
        boardStrokeDecision: var_core_value_sigFC9B.dark,
        boardStrokeData: var_core_value_sigFC9B.line,
        boardStrokeAccent: var_core_value_sigFC9B.black,
        boardStrokeWarning: var_core_value_sigFC9B.line,
        boardStrokeDanger: var_core_value_sigFC9B.line,
        boardStrokeNeutral: var_core_value_sigFC9B.black,
        boardStrokePurple: var_core_value_sigFC9B.line,
        boardTextPrimary: var_core_value_sigFC9B.darkText,
        boardTextDecision: var_core_value_sigFC9B.lightText,
        boardTextData: var_core_value_sigFC9B.darkText,
        boardTextAccent: var_core_value_sigFC9B.lightText,
        boardTextWarning: var_core_value_sigFC9B.darkText,
        boardTextDanger: var_core_value_sigFC9B.darkText,
        boardTextNeutral: var_core_value_sigFC9B.lightText,
        boardTextPurple: var_core_value_sigFC9B.darkText,
        boardFillHeader: var_core_value_sigFC9B.black,
        boardTextOnHeader: var_core_value_sigFC9B.lightText,
        boardStrokeHeader: var_core_value_sigFC9B.black,
        boardFillStrong: var_core_value_sigFC9B.black,
        boardTextOnStrong: var_core_value_sigFC9B.lightText,
        boardStrokeStrong: var_core_value_sigFC9B.black
      },
      vibrant: {
        ...var_core_value_sigD4B1,
        dk1: var_core_value_sig943E.darkText,
        dk2: var_core_value_sig943E.black,
        lt2: "#f7f9fc",
        acc1: var_core_value_sig943E.blue,
        acc2: var_core_value_sig943E.orange,
        acc3: var_core_value_sig943E.black,
        acc4: var_core_value_sig943E.yellow,
        acc5: var_core_value_sig943E.blue,
        acc6: var_core_value_sig943E.green,
        hlink: var_core_value_sig943E.blue,
        folHlink: var_core_value_sig943E.orange,
        boardStroke: var_core_value_sig0413,
        boardText: var_core_value_sig943E.darkText,
        boardFillPrimary: var_core_value_sig943E.blue,
        boardFillDecision: var_core_value_sig943E.yellow,
        boardFillData: var_core_value_sig943E.paleOrange,
        boardFillAccent: var_core_value_sig943E.blue,
        boardFillWarning: var_core_value_sig943E.orange,
        boardFillDanger: var_core_value_sig943E.green,
        boardFillNeutral: var_core_value_sig943E.orange,
        boardFillPurple: var_core_value_sig943E.black,
        boardStrokePrimary: var_core_value_sig943E.blueStroke,
        boardStrokeDecision: var_core_value_sig943E.yellowStroke,
        boardStrokeData: var_core_value_sig943E.orangeStroke,
        boardStrokeAccent: var_core_value_sig943E.blueStroke,
        boardStrokeWarning: var_core_value_sig943E.orangeStroke,
        boardStrokeDanger: var_core_value_sig943E.greenStroke,
        boardStrokeNeutral: var_core_value_sig943E.orangeStroke,
        boardStrokePurple: var_core_value_sig943E.blackStroke,
        boardTextPrimary: var_core_value_sig943E.lightText,
        boardTextDecision: var_core_value_sig943E.darkText,
        boardTextData: var_core_value_sig943E.darkText,
        boardTextAccent: var_core_value_sig943E.lightText,
        boardTextWarning: var_core_value_sig943E.lightText,
        boardTextDanger: var_core_value_sig943E.lightText,
        boardTextNeutral: var_core_value_sig943E.lightText,
        boardTextPurple: var_core_value_sig943E.lightText,
        boardFillHeader: var_core_value_sig943E.orange,
        boardTextOnHeader: var_core_value_sig943E.lightText,
        boardStrokeHeader: var_core_value_sig943E.orangeStroke,
        boardFillStrong: var_core_value_sig943E.black,
        boardTextOnStrong: var_core_value_sig943E.lightText,
        boardStrokeStrong: var_core_value_sig943E.blackStroke
      },
      blue: {
        ...var_core_value_sigD4B1,
        dk1: var_core_value_sigEF36.darkText,
        dk2: var_core_value_sigEF36.blueStroke,
        lt2: "#f7f8ff",
        acc1: var_core_value_sigEF36.blue,
        acc2: var_core_value_sigEF36.blue,
        acc3: var_core_value_sigEF36.blue,
        acc4: var_core_value_sigEF36.blueStroke,
        acc5: var_core_value_sigEF36.blue,
        acc6: var_core_value_sigEF36.blue,
        hlink: var_core_value_sigEF36.blue,
        folHlink: var_core_value_sigEF36.blueDark,
        boardStroke: var_core_value_sig0413,
        boardText: var_core_value_sigEF36.darkText,
        boardFillPrimary: var_core_value_sigEF36.lightFill,
        boardFillDecision: var_core_value_sigEF36.lightFill,
        boardFillData: var_core_value_sigEF36.lightFill,
        boardFillAccent: var_core_value_sigEF36.lightFill,
        boardFillWarning: var_core_value_sigEF36.blue,
        boardFillDanger: var_core_value_sigEF36.lightFill,
        boardFillNeutral: var_core_value_sigEF36.blue,
        boardFillPurple: var_core_value_sigEF36.lightFill,
        boardStrokePrimary: var_core_value_sigEF36.blueStroke,
        boardStrokeDecision: var_core_value_sigEF36.blueStroke,
        boardStrokeData: var_core_value_sigEF36.blueStroke,
        boardStrokeAccent: var_core_value_sigEF36.blueStroke,
        boardStrokeWarning: var_core_value_sigEF36.blueDark,
        boardStrokeDanger: var_core_value_sigEF36.blueStroke,
        boardStrokeNeutral: var_core_value_sigEF36.blueDark,
        boardStrokePurple: var_core_value_sigEF36.blueStroke,
        boardTextPrimary: var_core_value_sigEF36.darkText,
        boardTextDecision: var_core_value_sigEF36.darkText,
        boardTextData: var_core_value_sigEF36.darkText,
        boardTextAccent: var_core_value_sigEF36.darkText,
        boardTextWarning: var_core_value_sigEF36.lightText,
        boardTextDanger: var_core_value_sigEF36.darkText,
        boardTextNeutral: var_core_value_sigEF36.lightText,
        boardTextPurple: var_core_value_sigEF36.darkText,
        boardFillHeader: var_core_value_sigEF36.blue,
        boardTextOnHeader: var_core_value_sigEF36.lightText,
        boardStrokeHeader: var_core_value_sigEF36.blueDark,
        boardFillStrong: var_core_value_sigEF36.blue,
        boardTextOnStrong: var_core_value_sigEF36.lightText,
        boardStrokeStrong: var_core_value_sigEF36.blueDark
      }
    };
  return ft(var_core_value_sig36BD, Je[var_core_value_sig36BD], var_core_value_sigE5D8[var_core_value_sig36BD]);
}
const ht = Object.keys(Je).map(var_core_value_sig74AF => mt(var_core_value_sig74AF)),
  gt = {
    dk1: "#000000",
    dk2: "#44546a",
    lt1: "#ffffff",
    lt2: "#e7e6e6",
    acc1: "#4472c4",
    acc2: "#ed7d31",
    acc3: "#a5a5a5",
    acc4: "#ffc000",
    acc5: "#5b9bd5",
    acc6: "#70ad47"
  };
function _t(var_core_value_sigBABA) {
  let var_core_value_sigA723 = pt(var_core_value_sigBABA);
  return ht.find(var_core_value_sigB99B => var_core_value_sigB99B.id === var_core_value_sigA723);
}
function vt(var_core_value_sig991C) {
  switch (var_core_value_sig991C) {
    case var_core_value_sig597C.Diamond:
    case var_core_value_sig597C.FlowchartDecision:
      return "decision";
    case var_core_value_sig597C.Can:
    case var_core_value_sig597C.FlowchartMagneticDisk:
    case var_core_value_sig597C.FlowchartMagneticDrum:
    case var_core_value_sig597C.FlowchartMagneticTape:
    case var_core_value_sig597C.FlowchartOnlineStorage:
    case var_core_value_sig597C.FlowChartOfflineStorage:
    case var_core_value_sig597C.FlowChartInputOutput:
    case var_core_value_sig597C.Parallelogram:
      return "data";
    case var_core_value_sig597C.RightArrow:
    case var_core_value_sig597C.LeftArrow:
    case var_core_value_sig597C.UpArrow:
    case var_core_value_sig597C.DownArrow:
    case var_core_value_sig597C.LeftRightArrow:
    case var_core_value_sig597C.UpDownArrow:
    case var_core_value_sig597C.QuadArrow:
    case var_core_value_sig597C.Chevron:
    case var_core_value_sig597C.Pentagon:
    case var_core_value_sig597C.RightArrowCallout:
    case var_core_value_sig597C.LeftArrowCallout:
    case var_core_value_sig597C.UpArrowCallout:
    case var_core_value_sig597C.DownArrowCallout:
    case var_core_value_sig597C.LeftRightArrowCallout:
    case var_core_value_sig597C.QuadArrowCallout:
    case var_core_value_sig597C.UpDownArrowCallout:
      return "accent";
    case var_core_value_sig597C.Triangle:
    case var_core_value_sig597C.RightTriangle:
    case var_core_value_sig597C.Trapezoid:
    case var_core_value_sig597C.FlowchartManualOperation:
      return "danger";
    case var_core_value_sig597C.Star5:
    case var_core_value_sig597C.Star6:
    case var_core_value_sig597C.Star7:
    case var_core_value_sig597C.Star8:
    case var_core_value_sig597C.Star10:
    case var_core_value_sig597C.Star12:
    case var_core_value_sig597C.Star16:
    case var_core_value_sig597C.Star24:
    case var_core_value_sig597C.Star32:
    case var_core_value_sig597C.WedgeRectCallout:
    case var_core_value_sig597C.WedgeRoundRectCallout:
    case var_core_value_sig597C.WedgeEllipseCallout:
    case var_core_value_sig597C.CloudCallout:
    case var_core_value_sig597C.Cloud:
    case var_core_value_sig597C.LeftBrace:
    case var_core_value_sig597C.RightBrace:
    case var_core_value_sig597C.BracePair:
    case var_core_value_sig597C.LeftBracket:
    case var_core_value_sig597C.RightBracket:
    case var_core_value_sig597C.BracketPair:
      return "purple";
    case var_core_value_sig597C.FoldedCorner:
    case var_core_value_sig597C.FlowchartDocument:
    case var_core_value_sig597C.FlowchartMultiDocument:
      return "warning";
    case var_core_value_sig597C.MathPlus:
    case var_core_value_sig597C.MathMinus:
    case var_core_value_sig597C.MathMultiply:
    case var_core_value_sig597C.MathDivide:
    case var_core_value_sig597C.MathEqual:
    case var_core_value_sig597C.MathNotEqual:
      return "neutral";
    default:
      break;
  }
  if (typeof var_core_value_sig991C == "string") {
    if (var_core_value_sig991C.includes("data_storage") || var_core_value_sig991C.includes("database") || var_core_value_sig991C.includes("data-flow")) return "data";
    if (var_core_value_sig991C.includes("actor") || var_core_value_sig991C.includes("boundary") || var_core_value_sig991C.includes("control")) return "purple";
    if (var_core_value_sig991C.includes("activation")) return "neutral";
  }
  return "primary";
}
function yt(var_core_value_sigF909) {
  switch (var_core_value_sigF909) {
    case var_core_value_sig597C.Ellipse:
    case var_core_value_sig597C.Cloud:
    case var_core_value_sig597C.CloudCallout:
    case var_core_value_sig597C.Hexagon:
      return "neutral";
    case var_core_value_sig597C.Diamond:
    case var_core_value_sig597C.FlowchartDecision:
      return "decision";
    case var_core_value_sig597C.Can:
    case var_core_value_sig597C.FlowchartMagneticDisk:
    case var_core_value_sig597C.FlowchartMagneticDrum:
    case var_core_value_sig597C.FlowchartMagneticTape:
    case var_core_value_sig597C.FlowchartOnlineStorage:
    case var_core_value_sig597C.FlowChartOfflineStorage:
    case var_core_value_sig597C.FlowChartInputOutput:
    case var_core_value_sig597C.Parallelogram:
      return "data";
    case var_core_value_sig597C.LeftArrow:
    case var_core_value_sig597C.UpArrow:
    case var_core_value_sig597C.DownArrow:
    case var_core_value_sig597C.LeftRightArrow:
    case var_core_value_sig597C.UpDownArrow:
    case var_core_value_sig597C.QuadArrow:
    case var_core_value_sig597C.RightArrowCallout:
    case var_core_value_sig597C.LeftArrowCallout:
    case var_core_value_sig597C.UpArrowCallout:
    case var_core_value_sig597C.DownArrowCallout:
    case var_core_value_sig597C.LeftRightArrowCallout:
    case var_core_value_sig597C.QuadArrowCallout:
    case var_core_value_sig597C.UpDownArrowCallout:
      return "warning";
    case var_core_value_sig597C.RightArrow:
    case var_core_value_sig597C.Chevron:
    case var_core_value_sig597C.Pentagon:
      return "accent";
    case var_core_value_sig597C.Triangle:
    case var_core_value_sig597C.RightTriangle:
    case var_core_value_sig597C.Trapezoid:
    case var_core_value_sig597C.FlowchartManualOperation:
      return "danger";
    case var_core_value_sig597C.Octagon:
    case var_core_value_sig597C.Star5:
    case var_core_value_sig597C.Star6:
    case var_core_value_sig597C.Star7:
    case var_core_value_sig597C.Star8:
    case var_core_value_sig597C.Star10:
    case var_core_value_sig597C.Star12:
    case var_core_value_sig597C.Star16:
    case var_core_value_sig597C.Star24:
    case var_core_value_sig597C.Star32:
    case var_core_value_sig597C.WedgeRectCallout:
    case var_core_value_sig597C.WedgeRoundRectCallout:
    case var_core_value_sig597C.WedgeEllipseCallout:
    case var_core_value_sig597C.LeftBrace:
    case var_core_value_sig597C.RightBrace:
    case var_core_value_sig597C.BracePair:
    case var_core_value_sig597C.LeftBracket:
    case var_core_value_sig597C.RightBracket:
    case var_core_value_sig597C.BracketPair:
      return "purple";
    case var_core_value_sig597C.FoldedCorner:
    case var_core_value_sig597C.FlowchartDocument:
    case var_core_value_sig597C.FlowchartMultiDocument:
      return "warning";
    case var_core_value_sig597C.MathPlus:
    case var_core_value_sig597C.MathMinus:
    case var_core_value_sig597C.MathMultiply:
    case var_core_value_sig597C.MathDivide:
    case var_core_value_sig597C.MathEqual:
    case var_core_value_sig597C.MathNotEqual:
      return "neutral";
    default:
      break;
  }
  if (typeof var_core_value_sigF909 == "string") {
    if (var_core_value_sigF909.includes("data_storage") || var_core_value_sigF909.includes("database") || var_core_value_sigF909.includes("data-flow")) return "data";
    if (var_core_value_sigF909.includes("actor") || var_core_value_sigF909.includes("boundary") || var_core_value_sigF909.includes("control")) return "purple";
    if (var_core_value_sigF909.includes("activation")) return "neutral";
  }
  return "primary";
}
function bt(var_core_value_sigDD0E, var_core_value_sigF2A0) {
  return pt(var_core_value_sigF2A0 == null ? undefined : var_core_value_sigF2A0.id) === qe ? vt(var_core_value_sigDD0E) : yt(var_core_value_sigDD0E);
}
function xt(var_core_value_sig116F, var_core_value_sigA64C, var_core_value_sigAF94) {
  var var_core_value_sig1E9F, var_core_value_sig3CC6;
  return ((var_core_value_sig1E9F = var_core_value_sig116F.colorScheme) == null ? undefined : var_core_value_sig1E9F[var_core_value_sigA64C]) ?? (var_core_value_sigAF94 ? (var_core_value_sig3CC6 = var_core_value_sig116F.colorScheme) == null ? undefined : var_core_value_sig3CC6[var_core_value_sigAF94] : undefined) ?? N[var_core_value_sigA64C] ?? (var_core_value_sigAF94 ? N[var_core_value_sigAF94] : undefined) ?? var_core_value_sigA64C;
}
function St(var_core_value_sig041B, var_core_value_sig3610) {
  var var_core_value_sig62F3;
  let var_core_value_sig8063 = var_core_value_sig3610 ?? ht[0],
    var_core_value_sig555A = bt(var_core_value_sig041B, var_core_value_sig8063),
    var_core_value_sigF562 = Qe[var_core_value_sig555A],
    var_core_value_sig5913 = $e[var_core_value_sig555A],
    var_core_value_sigA1AF = et[var_core_value_sig555A],
    var_core_value_sig6324 = xt(var_core_value_sig8063, var_core_value_sigF562),
    var_core_value_sig7EE4 = xt(var_core_value_sig8063, var_core_value_sig5913, "boardStroke");
  return {
    slot: var_core_value_sig555A,
    textColor: xt(var_core_value_sig8063, var_core_value_sigA1AF, "boardText"),
    fill: {
      fillType: var_core_value_sig5B96.SolidFill,
      color: var_core_value_sig6324,
      opacity: 1
    },
    stroke: {
      lineStrokeType: var_core_value_sig8FBA.SolidLine,
      color: var_core_value_sig7EE4,
      width: ((var_core_value_sig62F3 = var_core_value_sig8063.fmtScheme) == null || (var_core_value_sig62F3 = var_core_value_sig62F3.lnStyleLst[1]) == null ? undefined : var_core_value_sig62F3.width) ?? 2,
      opacity: 1
    }
  };
}
function Ct(var_core_value_sigE3D7, var_core_value_sig54C6) {
  var var_core_value_sigE843;
  let var_core_value_sig2EB2 = var_core_value_sigE3D7 ?? ht[0],
    var_core_value_sig683A = var_core_value_sig54C6 === "header" ? "Header" : "Strong",
    var_core_value_sig109B = xt(var_core_value_sig2EB2, "boardFill" + var_core_value_sig683A),
    var_core_value_sig6DD0 = xt(var_core_value_sig2EB2, "boardStroke" + var_core_value_sig683A);
  return {
    slot: var_core_value_sig54C6,
    textColor: xt(var_core_value_sig2EB2, "boardTextOn" + var_core_value_sig683A),
    fill: {
      fillType: var_core_value_sig5B96.SolidFill,
      color: var_core_value_sig109B,
      opacity: 1
    },
    stroke: {
      lineStrokeType: var_core_value_sig8FBA.SolidLine,
      color: var_core_value_sig6DD0,
      width: ((var_core_value_sigE843 = var_core_value_sig2EB2.fmtScheme) == null || (var_core_value_sigE843 = var_core_value_sigE843.lnStyleLst[1]) == null ? undefined : var_core_value_sigE843.width) ?? 2,
      opacity: 1
    }
  };
}
function wt(var_core_value_sigB5D3, var_core_value_sig6085) {
  var var_core_value_sig2507;
  return (var_core_value_sigB5D3 == null || (var_core_value_sig2507 = var_core_value_sigB5D3.colorScheme) == null ? undefined : var_core_value_sig2507[var_core_value_sig6085]) ?? gt[var_core_value_sig6085];
}
function Tt(var_core_value_sig5870) {
  if (!(!var_core_value_sig5870 || typeof var_core_value_sig5870 != "object")) {
    if ("color" in var_core_value_sig5870 && typeof var_core_value_sig5870.color == "string") return var_core_value_sig5870.color;
    if ("gradientStops" in var_core_value_sig5870 && Array.isArray(var_core_value_sig5870.gradientStops)) {
      let var_core_value_sigF593 = var_core_value_sig5870.gradientStops["find"](var_core_value_sig362B => !!(var_core_value_sig362B && typeof var_core_value_sig362B == "object" && "color" in var_core_value_sig362B && typeof var_core_value_sig362B.color == "string"));
      return var_core_value_sigF593 == null ? undefined : var_core_value_sigF593.color;
    }
  }
}
function Et(var_core_value_sig827F) {
  if (!(!var_core_value_sig827F || typeof var_core_value_sig827F != "object")) return "color" in var_core_value_sig827F && typeof var_core_value_sig827F.color == "string" ? var_core_value_sig827F.color : undefined;
}
function Dt(var_core_value_sig2452) {
  var var_core_value_sig50D0, var_core_value_sig5EBB;
  let var_core_value_sig5E99 = wt(var_core_value_sig2452, "acc1"),
    var_core_value_sig3FB3 = wt(var_core_value_sig2452, "acc2"),
    var_core_value_sig0214 = wt(var_core_value_sig2452, "acc3"),
    var_core_value_sig5153 = wt(var_core_value_sig2452, "acc4"),
    var_core_value_sigF323 = wt(var_core_value_sig2452, "acc5"),
    var_core_value_sig0C32 = wt(var_core_value_sig2452, "acc6"),
    var_core_value_sig1D89 = wt(var_core_value_sig2452, "dk1"),
    var_core_value_sig2616 = Tt((var_core_value_sig50D0 = var_core_value_sig2452.fmtScheme) == null ? undefined : var_core_value_sig50D0.fillStyleLst[1]) ?? var_core_value_sig5E99,
    var_core_value_sig97EF = Et((var_core_value_sig5EBB = var_core_value_sig2452.fmtScheme) == null ? undefined : var_core_value_sig5EBB.lnStyleLst[1]) ?? wt(var_core_value_sig2452, "dk2");
  return {
    background: wt(var_core_value_sig2452, "lt1"),
    text: var_core_value_sig1D89,
    muted: wt(var_core_value_sig2452, "lt2"),
    accent1: var_core_value_sig5E99,
    accent2: var_core_value_sig3FB3,
    accent3: var_core_value_sig0214,
    accent4: var_core_value_sig5153,
    accent5: var_core_value_sigF323,
    accent6: var_core_value_sig0C32,
    accents: [var_core_value_sig5E99, var_core_value_sig3FB3, var_core_value_sig0214, var_core_value_sig5153, var_core_value_sigF323, var_core_value_sig0C32],
    defaultStyleColors: [var_core_value_sig2616, var_core_value_sig97EF, var_core_value_sig1D89]
  };
}
const Ot = {
  ...ht[0]
};
function kt(var_core_value_sigA0C0) {
  return typeof var_core_value_sigA0C0 == "object" && !!var_core_value_sigA0C0;
}
function At(var_core_value_sigAD4B) {
  var var_core_value_sig06EA;
  return typeof (var_core_value_sigAD4B == null || (var_core_value_sig06EA = var_core_value_sigAD4B.cl) == null ? undefined : var_core_value_sig06EA.rgb) == "string" || (var_core_value_sigAD4B == null ? undefined : var_core_value_sigAD4B.textFill) !== undefined;
}
function jt(var_core_value_sigF3C7) {
  let var_core_value_sig5633 = var_core_value_sigF3C7 == null ? undefined : var_core_value_sigF3C7.dataModel;
  return kt(var_core_value_sig5633) && "doc" in var_core_value_sig5633 ? var_core_value_sig5633.doc : undefined;
}
function Mt(var_core_value_sig2492) {
  return JSON.parse(JSON.stringify(var_core_value_sig2492));
}
function Nt(var_core_value_sig39F2, var_core_value_sigAD47) {
  return At(var_core_value_sig39F2) ? var_core_value_sig39F2 : {
    ...var_core_value_sig39F2,
    cl: {
      ...(var_core_value_sig39F2 == null ? undefined : var_core_value_sig39F2.cl),
      rgb: var_core_value_sigAD47
    }
  };
}
function Pt(var_core_value_sig1722) {
  var var_core_value_sig7F86, var_core_value_sigF69D;
  if (!kt(var_core_value_sig1722)) return false;
  let var_core_value_sig7CB9 = var_core_value_sig1722;
  if (typeof var_core_value_sig7CB9.color == "string" || var_core_value_sig7CB9.textFill !== undefined) return true;
  let var_core_value_sigC1D8 = jt(var_core_value_sig7CB9);
  return At(var_core_value_sigC1D8 == null || (var_core_value_sig7F86 = var_core_value_sigC1D8.documentStyle) == null ? undefined : var_core_value_sig7F86.textStyle) ? true : (var_core_value_sigC1D8 == null || (var_core_value_sigF69D = var_core_value_sigC1D8.body) == null || (var_core_value_sigF69D = var_core_value_sigF69D.textRuns) == null ? undefined : var_core_value_sigF69D.some(var_core_value_sig5A75 => At(var_core_value_sig5A75.ts))) ?? false;
}
function Ft(var_core_value_sigCF8B, var_core_value_sigCD15) {
  var var_core_value_sig524D, var_core_value_sigD7F4;
  let var_core_value_sig7B87 = Mt(var_core_value_sigCF8B);
  return var_core_value_sig7B87.documentStyle = {
    ...var_core_value_sig7B87.documentStyle,
    textStyle: Nt((var_core_value_sig524D = var_core_value_sig7B87.documentStyle) == null ? undefined : var_core_value_sig524D.textStyle, var_core_value_sigCD15)
  }, (var_core_value_sigD7F4 = var_core_value_sig7B87.body) != null && (var_core_value_sigD7F4 = var_core_value_sigD7F4.textRuns) != null && var_core_value_sigD7F4.length && (var_core_value_sig7B87.body = {
    ...var_core_value_sig7B87.body,
    textRuns: var_core_value_sig7B87.body["textRuns"].map(var_core_value_sig7BAF => ({
      ...var_core_value_sig7BAF,
      ts: Nt(var_core_value_sig7BAF.ts, var_core_value_sigCD15)
    }))
  }), var_core_value_sig7B87;
}
function It(var_core_value_sig933D, var_core_value_sig6ACE, var_core_value_sig7675 = {}) {
  if (!kt(var_core_value_sig933D) || Pt(var_core_value_sig933D)) return var_core_value_sig933D;
  let var_core_value_sig21B8 = {
    ...var_core_value_sig933D
  };
  var_core_value_sig21B8.color === undefined && (var_core_value_sig7675.defineInheritedValue ? var_core_value_sig7675.defineInheritedValue(var_core_value_sig21B8, "color", var_core_value_sig6ACE) : var_core_value_sig21B8.color = var_core_value_sig6ACE);
  let var_core_value_sigD545 = jt(var_core_value_sig21B8),
    var_core_value_sig91C9 = var_core_value_sig21B8.dataModel;
  return var_core_value_sigD545 && kt(var_core_value_sig91C9) && (var_core_value_sig21B8.dataModel = {
    ...var_core_value_sig91C9,
    doc: Ft(var_core_value_sigD545, var_core_value_sig6ACE)
  }), var_core_value_sig21B8;
}
function Lt(var_core_value_sig64BA) {
  return {
    unitId: var_core_value_sig64BA.unitId,
    subUnitId: var_core_value_sig64BA.subUnitId,
    drawingId: var_core_value_sig64BA.elementId
  };
}
function Rt(var_core_value_sig3FD5) {
  return {
    unitId: var_core_value_sig3FD5.unitId,
    subUnitId: var_core_value_sig3FD5.subUnitId,
    elementId: var_core_value_sig3FD5.drawingId
  };
}
function zt(var_core_value_sig1008) {
  return {
    unitId: var_core_value_sig1008.unitId,
    subUnitId: var_core_value_sig1008.subUnitId,
    drawingIds: var_core_value_sig1008.elementIds
  };
}
function Bt(var_core_value_sigB9F4) {
  switch (var_core_value_sigB9F4) {
    case M.Image:
      return var_core_value_sigDCEA.DRAWING_IMAGE;
    case M.Shape:
      return var_core_value_sigDCEA.DRAWING_SHAPE;
    case M.Chart:
      return var_core_value_sigDCEA.DRAWING_CHART;
    case M.Table:
      return var_core_value_sigDCEA.DRAWING_TABLE;
    case M.Group:
      return var_core_value_sigDCEA.DRAWING_GROUP;
    case M.Media:
      return var_core_value_sigDCEA.DRAWING_VIDEO;
    default:
      return var_core_value_sigDCEA.DRAWING_SHAPE;
  }
}
function Vt(var_core_value_sig2D23) {
  return typeof var_core_value_sig2D23 != "object" || !var_core_value_sig2D23 ? var_core_value_sig2D23 : JSON.parse(JSON.stringify(var_core_value_sig2D23));
}
function Ht(var_core_value_sigF2E0, var_core_value_sig9214, var_core_value_sigC8B1) {
  return Object.defineProperty(var_core_value_sigF2E0, var_core_value_sig9214, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: var_core_value_sigC8B1
  }), var_core_value_sigF2E0;
}
function Ut(var_core_value_sig35E2) {
  return {
    ...Ot,
    ...var_core_value_sig35E2,
    colorScheme: {
      ...Ot.colorScheme,
      ...(var_core_value_sig35E2 == null ? undefined : var_core_value_sig35E2.colorScheme)
    },
    fontScheme: {
      ...Ot.fontScheme,
      ...(var_core_value_sig35E2 == null ? undefined : var_core_value_sig35E2.fontScheme)
    },
    fmtScheme: {
      ...Ot.fmtScheme,
      ...(var_core_value_sig35E2 == null ? undefined : var_core_value_sig35E2.fmtScheme)
    }
  };
}
function Wt(var_core_value_sig9B13, var_core_value_sig60E6) {
  var var_core_value_sig1F6E;
  return {
    isHorizontal: true,
    isRichText: false,
    text: "",
    fontFamily: (var_core_value_sig1F6E = var_core_value_sig9B13.fontScheme) == null ? undefined : var_core_value_sig1F6E.body,
    fontSize: 18,
    color: var_core_value_sig60E6,
    horizontalAlign: "center",
    verticalAlign: "middle"
  };
}
function Gt(var_core_value_sig7A6B) {
  return typeof var_core_value_sig7A6B == "object" && !!var_core_value_sig7A6B && var_core_value_sig7A6B.isRichText !== true;
}
function Kt(var_core_value_sig20F6, var_core_value_sigAEE0) {
  if (var_core_value_sig20F6.type !== M.Shape) return var_core_value_sig20F6;
  let var_core_value_sig72B6 = Ut(var_core_value_sigAEE0),
    var_core_value_sig43E8 = {
      ...var_core_value_sig20F6.shapeData
    },
    var_core_value_sigB1FB = St(var_core_value_sig43E8.shapeType, var_core_value_sig72B6);
  if (var_core_value_sig43E8.fill || Ht(var_core_value_sig43E8, "fill", Vt(var_core_value_sigB1FB.fill)), var_core_value_sig43E8.stroke || Ht(var_core_value_sig43E8, "stroke", Vt(var_core_value_sigB1FB.stroke)), Gt(var_core_value_sig43E8.shapeText)) {
    let var_core_value_sig8F69 = Wt(var_core_value_sig72B6, var_core_value_sigB1FB.textColor),
      var_core_value_sig6884 = It(var_core_value_sig43E8.shapeText, var_core_value_sigB1FB.textColor, {
        defineInheritedValue: Ht
      });
    Object.keys(var_core_value_sig8F69).forEach(var_core_value_sig3607 => {
      var_core_value_sig6884[var_core_value_sig3607] === undefined && Ht(var_core_value_sig6884, var_core_value_sig3607, var_core_value_sig8F69[var_core_value_sig3607]);
    }), var_core_value_sig43E8.shapeText = var_core_value_sig6884;
  }
  return {
    ...var_core_value_sig20F6,
    shapeData: var_core_value_sig43E8
  };
}
function qt(var_core_value_sig6876, var_core_value_sig55FB, var_core_value_sig2870, var_core_value_sigC865) {
  let var_core_value_sig6788 = Kt(var_core_value_sig2870, var_core_value_sigC865),
    var_core_value_sig7B1F = var_core_value_sig6788.transform;
  return {
    unitId: var_core_value_sig6876,
    subUnitId: var_core_value_sig55FB,
    elementId: var_core_value_sig6788.id,
    drawingId: var_core_value_sig6788.id,
    drawingType: Bt(var_core_value_sig6788.type),
    transform: {
      left: var_core_value_sig7B1F.left ?? 0,
      top: var_core_value_sig7B1F.top ?? 0,
      width: var_core_value_sig7B1F.width ?? 0,
      height: var_core_value_sig7B1F.height ?? 0,
      angle: var_core_value_sig7B1F.rotation ?? 0,
      flipX: var_core_value_sig7B1F.flipX,
      flipY: var_core_value_sig7B1F.flipY
    },
    hidden: var_core_value_sig6788.visible === false,
    element: var_core_value_sig6788
  };
}
function Jt(var_core_value_sig7E51, var_core_value_sigAE87, var_core_value_sigFD51, var_core_value_sigF6D6, var_core_value_sigCF95) {
  let var_core_value_sig8793 = {},
    var_core_value_sig1BE7 = [];
  return var_core_value_sigF6D6.forEach(var_core_value_sig066E => {
    let var_core_value_sig9B0D = var_core_value_sigFD51[var_core_value_sig066E];
    var_core_value_sig9B0D && (var_core_value_sig8793[var_core_value_sig066E] = qt(var_core_value_sig7E51, var_core_value_sigAE87, var_core_value_sig9B0D, var_core_value_sigCF95), var_core_value_sig1BE7.push(var_core_value_sig066E));
  }), {
    data: var_core_value_sig8793,
    order: var_core_value_sig1BE7
  };
}
function Yt(var_core_value_sig34F8) {
  return (var_core_value_sig34F8 == null ? undefined : var_core_value_sig34F8.element["type"]) === M.Group;
}
function Xt(var_core_value_sig9F3D) {
  return (var_core_value_sig9F3D == null ? undefined : var_core_value_sig9F3D.element["type"]) === M.Group || (var_core_value_sig9F3D == null ? undefined : var_core_value_sig9F3D.element["type"]) === M.Container;
}
function Zt(var_core_value_sig785C) {
  return (var_core_value_sig785C == null ? undefined : var_core_value_sig785C.drawingId) ?? (var_core_value_sig785C == null ? undefined : var_core_value_sig785C.elementId);
}
function Qt(var_core_value_sig6537, var_core_value_sig72BB) {
  let var_core_value_sigC0DF = [],
    var_core_value_sig94B7 = new Set();
  return var_core_value_sig72BB == null || var_core_value_sig72BB.forEach(var_core_value_sig3D2C => {
    let var_core_value_sigC56D = var_core_value_sig6537[var_core_value_sig3D2C];
    !var_core_value_sigC56D || var_core_value_sig94B7.has(var_core_value_sig3D2C) || (var_core_value_sig94B7.add(var_core_value_sig3D2C), var_core_value_sigC0DF.push(var_core_value_sigC56D));
  }), Object.values(var_core_value_sig6537).forEach(var_core_value_sig3A17 => {
    let var_core_value_sig938F = Zt(var_core_value_sig3A17);
    !var_core_value_sig938F || var_core_value_sig94B7.has(var_core_value_sig938F) || (var_core_value_sig94B7.add(var_core_value_sig938F), var_core_value_sigC0DF.push(var_core_value_sig3A17));
  }), var_core_value_sigC0DF;
}
function $t(var_core_value_sig9865, var_core_value_sigA09D, var_core_value_sig1429) {
  let var_core_value_sigA339 = var_core_value_sig9865[var_core_value_sigA09D];
  if (!Xt(var_core_value_sigA339)) return [];
  let var_core_value_sig832A = [],
    var_core_value_sig7945 = new Set(),
    var_core_value_sig1166 = var_core_value_sigD948 => {
      !var_core_value_sigD948 || var_core_value_sigD948 === var_core_value_sigA09D || var_core_value_sig7945.has(var_core_value_sigD948) || (var_core_value_sig7945.add(var_core_value_sigD948), var_core_value_sig832A.push(var_core_value_sigD948));
    };
  return Yt(var_core_value_sigA339) && (var_core_value_sigA339.element["children"] ?? []).forEach(var_core_value_sig1166), Qt(var_core_value_sig9865, var_core_value_sig1429).forEach(var_core_value_sigBE5E => {
    (var_core_value_sigBE5E.groupId === var_core_value_sigA09D || var_core_value_sigBE5E.element["parentId"] === var_core_value_sigA09D) && var_core_value_sig1166(Zt(var_core_value_sigBE5E));
  }), var_core_value_sig832A;
}
function en(var_core_value_sig7ABC, var_core_value_sigF686, var_core_value_sigDFF0) {
  let var_core_value_sig0130 = [],
    var_core_value_sigFD90 = new Set(),
    var_core_value_sig702C = var_core_value_sig0281 => {
      $t(var_core_value_sig7ABC, var_core_value_sig0281, var_core_value_sigDFF0).forEach(var_core_value_sigB512 => {
        var_core_value_sigFD90.has(var_core_value_sigB512) || (var_core_value_sigFD90.add(var_core_value_sigB512), var_core_value_sig0130.push(var_core_value_sigB512), Xt(var_core_value_sig7ABC[var_core_value_sigB512]) && var_core_value_sig702C(var_core_value_sigB512));
      });
    };
  return var_core_value_sig702C(var_core_value_sigF686), var_core_value_sig0130;
}
function tn(var_core_value_sig03A4, var_core_value_sigB6F5, var_core_value_sig8293) {
  let var_core_value_sig43AE = new Set();
  var_core_value_sig8293.forEach(var_core_value_sigED71 => {
    let var_core_value_sig281C = var_core_value_sig03A4[var_core_value_sigED71];
    var_core_value_sig281C && (var_core_value_sig43AE.add(var_core_value_sigED71), Xt(var_core_value_sig281C) && en(var_core_value_sig03A4, var_core_value_sigED71, var_core_value_sigB6F5).forEach(var_core_value_sigF2E6 => {
      var_core_value_sig03A4[var_core_value_sigF2E6] && var_core_value_sig43AE.add(var_core_value_sigF2E6);
    }));
  });
  let var_core_value_sigEF2E = new Map();
  return var_core_value_sigB6F5.forEach((var_core_value_sig3C92, var_core_value_sigB16B) => var_core_value_sigEF2E.set(var_core_value_sig3C92, var_core_value_sigB16B)), Array.from(var_core_value_sig43AE).sort((var_core_value_sig585D, var_core_value_sigE722) => (var_core_value_sigEF2E.get(var_core_value_sig585D) ?? 2 ** 53 - 1) - (var_core_value_sigEF2E.get(var_core_value_sigE722) ?? 2 ** 53 - 1));
}
var nn = class extends var_core_value_sigB8D1 {
  get elementAdd$() {
    return this.add$["pipe"](var_core_value_sigD285(var_core_value_sig34C8 => var_core_value_sig34C8.map(Rt)));
  }
  get elementUpdate$() {
    return this.update$["pipe"](var_core_value_sigD285(var_core_value_sigB744 => var_core_value_sigB744.map(Rt)));
  }
  get elementRemove$() {
    return this.remove$["pipe"](var_core_value_sigD285(var_core_value_sigEAE2 => var_core_value_sigEAE2.map(Rt)));
  }
  getElementDataForUnit(var_core_value_sig062A) {
    return this.getDrawingDataForUnit(var_core_value_sig062A);
  }
  removeElementDataForUnit(var_core_value_sig050A) {
    this.removeDrawingDataForUnit(var_core_value_sig050A);
  }
  registerElementData(var_core_value_sig8B32, var_core_value_sig870F) {
    this.registerDrawingData(var_core_value_sig8B32, var_core_value_sig870F);
  }
  getElementData(var_core_value_sigB683, var_core_value_sig26EC) {
    return this.getDrawingData(var_core_value_sigB683, var_core_value_sig26EC);
  }
  getElementOrder(var_core_value_sigEEDB, var_core_value_sig36E7) {
    return this.getDrawingOrder(var_core_value_sigEEDB, var_core_value_sig36E7);
  }
  setElementOrder(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9) {
    this.setDrawingOrder(var_core_value_sig6A78, var_core_value_sigF7EF, var_core_value_sig27F9);
  }
  getElementById(var_core_value_sig393E, var_core_value_sigB609, var_core_value_sig390D) {
    return this.getElementData(var_core_value_sig393E, var_core_value_sigB609)[var_core_value_sig390D];
  }
  getElementByParam(var_core_value_sigC928) {
    return this.getElementById(var_core_value_sigC928.unitId, var_core_value_sigC928.subUnitId, var_core_value_sigC928.elementId);
  }
  focusElements(var_core_value_sig39B7) {
    this.focusDrawing((var_core_value_sig39B7 == null ? undefined : var_core_value_sig39B7.map(Lt)) ?? null);
  }
  getFocusElements() {
    return this.getFocusDrawings();
  }
  initializeElementNotification(var_core_value_sig18E0) {
    this.initializeNotification(var_core_value_sig18E0);
  }
  addElementNotification(var_core_value_sigE161) {
    this.addNotification(var_core_value_sigE161.map(Lt));
  }
  updateElementNotification(var_core_value_sigBDEE) {
    this.updateNotification(var_core_value_sigBDEE.map(Lt));
  }
  removeElementNotification(var_core_value_sig1F40) {
    this.removeNotification(var_core_value_sig1F40.map(Lt));
  }
  getBatchAddElementOp(var_core_value_sig3FC7) {
    return this.getBatchAddOp(var_core_value_sig3FC7);
  }
  getBatchUpdateElementOp(var_core_value_sig1E1B) {
    return this.getBatchUpdateOp(var_core_value_sig1E1B);
  }
  getBatchRemoveElementOp(var_core_value_sig3B10) {
    return this.getBatchRemoveOp(var_core_value_sig3B10.map(Lt));
  }
  getFrontElementsOp(var_core_value_sig89E6) {
    return this.getFrontDrawingsOp(zt(var_core_value_sig89E6));
  }
  getBackElementsOp(var_core_value_sig4743) {
    return this.getBackDrawingsOp(zt(var_core_value_sig4743));
  }
  orderElementUpdateNotification(var_core_value_sigEB6A) {
    super.orderUpdateNotification(zt(var_core_value_sigEB6A));
  }
  applyElementJson1(var_core_value_sig3D46, var_core_value_sigCC93, var_core_value_sig5964) {
    this.applyJson1(var_core_value_sig3D46, var_core_value_sigCC93, var_core_value_sig5964);
  }
  removeDrawingsWithoutGroupExpansion(var_core_value_sig808B) {
    var var_core_value_sig2A26;
    if (var_core_value_sig808B.length === 0) return [];
    let {
        unitId: var_core_value_sig1179,
        subUnitId: var_core_value_sigEA92
      } = var_core_value_sig808B[0],
      var_core_value_sig8FD9 = new Set(),
      var_core_value_sig1AE5 = this.getDrawingOrder(var_core_value_sig1179, var_core_value_sigEA92),
      var_core_value_sig7100 = new Map();
    var_core_value_sig1AE5.forEach((var_core_value_sigE68A, var_core_value_sig3E68) => var_core_value_sig7100.set(var_core_value_sigE68A, var_core_value_sig3E68));
    let var_core_value_sigA19A = (var_core_value_sig2A26 = this.drawingManagerData[var_core_value_sig1179]) == null ? undefined : var_core_value_sig2A26[var_core_value_sigEA92];
    if (!var_core_value_sigA19A) return [];
    let var_core_value_sigD3F5 = var_core_value_sig808B.filter(var_core_value_sigF4C5 => var_core_value_sig8FD9.has(var_core_value_sigF4C5.drawingId) || !this.getDrawingByParam(var_core_value_sigF4C5) ? false : (var_core_value_sig8FD9.add(var_core_value_sigF4C5.drawingId), true)).sort((var_core_value_sig5410, var_core_value_sig492F) => (var_core_value_sig7100.get(var_core_value_sig5410.drawingId) ?? -1 / 0) - (var_core_value_sig7100.get(var_core_value_sig492F.drawingId) ?? -1 / 0));
    return [...var_core_value_sigD3F5].sort((var_core_value_sig8EA0, var_core_value_sigA6F6) => {
      let var_core_value_sigCDDA = var_core_value_sig7100.get(var_core_value_sig8EA0.drawingId) ?? -1 / 0;
      return (var_core_value_sig7100.get(var_core_value_sigA6F6.drawingId) ?? -1 / 0) - var_core_value_sigCDDA;
    }).forEach(var_core_value_sigE243 => {
      delete var_core_value_sigA19A.data[var_core_value_sigE243.drawingId];
      let var_core_value_sig74A8 = var_core_value_sigA19A.order["indexOf"](var_core_value_sigE243.drawingId);
      var_core_value_sig74A8 >= 0 && var_core_value_sigA19A.order["splice"](var_core_value_sig74A8, 1);
    }), var_core_value_sigD3F5;
  }
  getDrawingsByGroup(var_core_value_sig3082) {
    let {
        unitId: var_core_value_sigF5D1,
        subUnitId: var_core_value_sig8775,
        drawingId: var_core_value_sig481B
      } = var_core_value_sig3082,
      var_core_value_sig13D7 = this.getDrawingData(var_core_value_sigF5D1, var_core_value_sig8775);
    return $t(var_core_value_sig13D7, var_core_value_sig481B, this.getDrawingOrder(var_core_value_sigF5D1, var_core_value_sig8775)).map(var_core_value_sig21B2 => var_core_value_sig13D7[var_core_value_sig21B2]).filter(var_core_value_sigDE08 => !!var_core_value_sigDE08);
  }
  getDrawingsByGroupNested(var_core_value_sig90C0) {
    let {
        unitId: var_core_value_sigF1B2,
        subUnitId: var_core_value_sigC2BB
      } = var_core_value_sig90C0,
      var_core_value_sigD9DB = this.getDrawingByParam(var_core_value_sig90C0);
    if (!Xt(var_core_value_sigD9DB)) return null;
    let var_core_value_sigA363 = this.getDrawingData(var_core_value_sigF1B2, var_core_value_sigC2BB),
      var_core_value_sigFBA5 = [],
      var_core_value_sigAC47 = [],
      var_core_value_sigA06F = {},
      var_core_value_sig770E = new Set(),
      var_core_value_sig4654 = var_core_value_sigACCB => {
        let var_core_value_sig7F33 = var_core_value_sigACCB.drawingId;
        if (var_core_value_sig770E.has(var_core_value_sig7F33)) return;
        var_core_value_sig770E.add(var_core_value_sig7F33);
        let var_core_value_sig0C53 = $t(var_core_value_sigA363, var_core_value_sig7F33);
        var_core_value_sigA06F[var_core_value_sig7F33] = {
          drawingId: var_core_value_sig7F33,
          children: var_core_value_sig0C53
        }, var_core_value_sig0C53.forEach(var_core_value_sig5CA5 => {
          let var_core_value_sigE90F = var_core_value_sigA363[var_core_value_sig5CA5];
          if (var_core_value_sigE90F) {
            if (Xt(var_core_value_sigE90F)) {
              var_core_value_sig4654(var_core_value_sigE90F), var_core_value_sigAC47.push(var_core_value_sigE90F);
              return;
            }
            var_core_value_sigFBA5.push(var_core_value_sigE90F);
          }
        });
      };
    return var_core_value_sig4654(var_core_value_sigD9DB), var_core_value_sigAC47.push(var_core_value_sigD9DB), {
      nestedIdRecord: var_core_value_sigA06F,
      flatChildren: var_core_value_sigFBA5,
      groups: var_core_value_sigAC47
    };
  }
};
function rn(var_core_value_sigD83C) {
  "@babel/helpers - typeof";

  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigB26B) {
    return typeof var_core_value_sigB26B;
  } : function (var_core_value_sig019B) {
    return var_core_value_sig019B && typeof Symbol == "function" && var_core_value_sig019B.constructor === Symbol && var_core_value_sig019B !== Symbol.prototype ? "symbol" : typeof var_core_value_sig019B;
  }, rn(var_core_value_sigD83C);
}
function an(var_core_value_sigAC2B, var_core_value_sigFBBE) {
  if (rn(var_core_value_sigAC2B) != "object" || !var_core_value_sigAC2B) return var_core_value_sigAC2B;
  var var_core_value_sigC982 = var_core_value_sigAC2B[Symbol.toPrimitive];
  if (var_core_value_sigC982 !== undefined) {
    var var_core_value_sig59DA = var_core_value_sigC982.call(var_core_value_sigAC2B, var_core_value_sigFBBE || "default");
    if (rn(var_core_value_sig59DA) != "object") return var_core_value_sig59DA;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sigFBBE === "string" ? String : Number)(var_core_value_sigAC2B);
}
function on(var_core_value_sig3002) {
  var var_core_value_sig33D2 = an(var_core_value_sig3002, "string");
  return rn(var_core_value_sig33D2) == "symbol" ? var_core_value_sig33D2 : var_core_value_sig33D2 + "";
}
function I(var_core_value_sig8D4A, var_core_value_sigB5D7, var_core_value_sig797B) {
  return (var_core_value_sigB5D7 = on(var_core_value_sigB5D7)) in var_core_value_sig8D4A ? Object.defineProperty(var_core_value_sig8D4A, var_core_value_sigB5D7, {
    value: var_core_value_sig797B,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig8D4A[var_core_value_sigB5D7] = var_core_value_sig797B, var_core_value_sig8D4A;
}
const L = var_core_value_sig72C0("board.element.service");
var sn = class {
  constructor() {
    I(this, "_bridgeService", new nn());
  }
  get elementAdd$() {
    return this._bridgeService["elementAdd$"];
  }
  get elementUpdate$() {
    return this._bridgeService["elementUpdate$"];
  }
  get elementRemove$() {
    return this._bridgeService["elementRemove$"];
  }
  get elementOrder$() {
    return this._bridgeService["order$"].pipe(var_core_value_sigD285(var_core_value_sigEA04 => ({
      unitId: var_core_value_sigEA04.unitId,
      subUnitId: var_core_value_sigEA04.subUnitId,
      elementIds: var_core_value_sigEA04.drawingIds
    })));
  }
  getElementDataForUnit(var_core_value_sigC6BC) {
    return this._bridgeService["getElementDataForUnit"](var_core_value_sigC6BC);
  }
  removeElementDataForUnit(var_core_value_sig8EC2) {
    this._bridgeService["removeElementDataForUnit"](var_core_value_sig8EC2);
  }
  registerElementData(var_core_value_sigA8C3, var_core_value_sig5276) {
    this._bridgeService["registerElementData"](var_core_value_sigA8C3, var_core_value_sig5276);
  }
  getElementData(var_core_value_sig031B, var_core_value_sig9DC0) {
    return this._bridgeService["getElementData"](var_core_value_sig031B, var_core_value_sig9DC0);
  }
  getElementOrder(var_core_value_sig95F0, var_core_value_sig9CCB) {
    return this._bridgeService["getElementOrder"](var_core_value_sig95F0, var_core_value_sig9CCB);
  }
  setElementOrder(var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977) {
    this._bridgeService["setElementOrder"](var_core_value_sigE718, var_core_value_sigAEC8, var_core_value_sigB977);
  }
  getElementById(var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D) {
    return this._bridgeService["getElementById"](var_core_value_sig2949, var_core_value_sig308A, var_core_value_sig528D);
  }
  getElementByParam(var_core_value_sigA309) {
    return this._bridgeService["getElementByParam"](var_core_value_sigA309);
  }
  focusElements(var_core_value_sig9E20) {
    this._bridgeService["focusElements"](var_core_value_sig9E20);
  }
  getFocusElements() {
    return this._bridgeService["getFocusElements"]();
  }
  initializeElementNotification(var_core_value_sig26BB) {
    this._bridgeService["initializeElementNotification"](var_core_value_sig26BB);
  }
  addElementNotification(var_core_value_sig19B4) {
    this._bridgeService["addElementNotification"](var_core_value_sig19B4);
  }
  updateElementNotification(var_core_value_sig218A) {
    this._bridgeService["updateElementNotification"](var_core_value_sig218A);
  }
  removeElementNotification(var_core_value_sig14CB) {
    this._bridgeService["removeElementNotification"](var_core_value_sig14CB);
  }
  getBatchAddElementOp(var_core_value_sigFDEE) {
    return this._bridgeService["getBatchAddElementOp"](var_core_value_sigFDEE);
  }
  getBatchUpdateElementOp(var_core_value_sigA676) {
    return this._bridgeService["getBatchUpdateElementOp"](var_core_value_sigA676);
  }
  getBatchRemoveElementOp(var_core_value_sigC27E) {
    return this._bridgeService["getBatchRemoveElementOp"](var_core_value_sigC27E);
  }
  getFrontElementsOp(var_core_value_sigA70D) {
    return this._bridgeService["getFrontElementsOp"](var_core_value_sigA70D);
  }
  getBackElementsOp(var_core_value_sigCE10) {
    return this._bridgeService["getBackElementsOp"](var_core_value_sigCE10);
  }
  orderUpdateNotification(var_core_value_sigA386) {
    this._bridgeService["orderElementUpdateNotification"](var_core_value_sigA386);
  }
  applyElementJson1(var_core_value_sigCD82, var_core_value_sig44DD, var_core_value_sig96FA) {
    this._bridgeService["applyElementJson1"](var_core_value_sigCD82, var_core_value_sig44DD, var_core_value_sig96FA);
  }
};
const R = {
    Actor: "actor",
    Boundary: "boundary",
    Control: "control",
    Entity: "entity",
    Collection: "collection",
    DataStorage1: "data_storage_1",
    DataStorage2: "data_storage_2",
    DataStorage3: "data_storage_3",
    Component: "component",
    ComponentBox: "component_box",
    ProvidedInterface: "provided_interface",
    AssemblyConnector: "assembly_connector",
    RequiredInterface: "required_interface",
    InitialState: "initial_state",
    FinalState: "final_state",
    StateBar: "state_bar"
  },
  cn = "#f3f6fc",
  ln = "#eee7ff",
  un = "#000000",
  dn = "#ffffff",
  z = {
    color: un,
    width: 4,
    capType: var_core_value_sigF2DD.Round,
    lineJoinType: var_core_value_sigE74F.Round
  };
function fn(var_core_value_sig5094, var_core_value_sig8883, var_core_value_sig488F) {
  return var_core_value_sig488F.map(var_core_value_sigAB68 => ({
    w: var_core_value_sig5094,
    h: var_core_value_sig8883,
    ...var_core_value_sigAB68
  }));
}
function pn(var_core_value_sigB440, var_core_value_sigF5CC, var_core_value_sigA1B6, var_core_value_sig66A0, var_core_value_sig7876, var_core_value_sig2C69 = var_core_value_sig7876) {
  return {
    w: var_core_value_sigB440,
    h: var_core_value_sigF5CC,
    stroke: true,
    dataArray: [{
      command: "M",
      points: [var_core_value_sigA1B6 + var_core_value_sig7876, var_core_value_sig66A0]
    }, {
      command: "A",
      points: [var_core_value_sig7876, var_core_value_sig2C69, 0, 21600000]
    }, {
      command: "z",
      points: []
    }]
  };
}
function mn(var_core_value_sigAF19, var_core_value_sigCE75, var_core_value_sigF27A, var_core_value_sig47B3, var_core_value_sig5E75, var_core_value_sigC266, var_core_value_sig77A3) {
  return {
    w: var_core_value_sigAF19,
    h: var_core_value_sigCE75,
    stroke: true,
    dataArray: [{
      command: "M",
      points: [var_core_value_sigF27A + var_core_value_sig77A3, var_core_value_sig47B3]
    }, {
      command: "L",
      points: [var_core_value_sig5E75 - var_core_value_sig77A3, var_core_value_sig47B3]
    }, {
      command: "Q",
      points: [var_core_value_sig5E75, var_core_value_sig47B3, var_core_value_sig5E75, var_core_value_sig47B3 + var_core_value_sig77A3]
    }, {
      command: "L",
      points: [var_core_value_sig5E75, var_core_value_sigC266 - var_core_value_sig77A3]
    }, {
      command: "Q",
      points: [var_core_value_sig5E75, var_core_value_sigC266, var_core_value_sig5E75 - var_core_value_sig77A3, var_core_value_sigC266]
    }, {
      command: "L",
      points: [var_core_value_sigF27A + var_core_value_sig77A3, var_core_value_sigC266]
    }, {
      command: "Q",
      points: [var_core_value_sigF27A, var_core_value_sigC266, var_core_value_sigF27A, var_core_value_sigC266 - var_core_value_sig77A3]
    }, {
      command: "L",
      points: [var_core_value_sigF27A, var_core_value_sig47B3 + var_core_value_sig77A3]
    }, {
      command: "Q",
      points: [var_core_value_sigF27A, var_core_value_sig47B3, var_core_value_sigF27A + var_core_value_sig77A3, var_core_value_sig47B3]
    }, {
      command: "z",
      points: []
    }]
  };
}
function hn(var_core_value_sigD85C, var_core_value_sig3957, var_core_value_sigA101) {
  return {
    w: var_core_value_sigD85C,
    h: var_core_value_sig3957,
    fill: "none",
    dataArray: [{
      command: "M",
      points: [var_core_value_sigA101[0], var_core_value_sigA101[1]]
    }, {
      command: "L",
      points: [var_core_value_sigA101[2], var_core_value_sigA101[3]]
    }]
  };
}
function gn(var_core_value_sig2ADC, var_core_value_sig1386, var_core_value_sig96F5, var_core_value_sig7F54, var_core_value_sigEB45, var_core_value_sig0623 = {}) {
  return {
    w: var_core_value_sig2ADC,
    h: var_core_value_sig1386,
    stroke: var_core_value_sig0623.stroke,
    fill: var_core_value_sig0623.fill,
    dataArray: [{
      command: "M",
      points: [var_core_value_sig96F5 + var_core_value_sigEB45, var_core_value_sig7F54]
    }, {
      command: "A",
      points: [var_core_value_sigEB45, var_core_value_sigEB45, 0, 21600000]
    }, {
      command: "z",
      points: []
    }]
  };
}
function _n(var_core_value_sigBF43, var_core_value_sigBC08, var_core_value_sig3F28, var_core_value_sig0A16, var_core_value_sig0A96, var_core_value_sig72FE, var_core_value_sigE8ED) {
  return {
    ...mn(var_core_value_sigBF43, var_core_value_sigBC08, var_core_value_sig3F28, var_core_value_sig0A16, var_core_value_sig0A96, var_core_value_sig72FE, var_core_value_sigE8ED),
    stroke: false
  };
}
function vn(var_core_value_sig6DD3, var_core_value_sig8E87, var_core_value_sigCDF2) {
  return {
    w: var_core_value_sig6DD3,
    h: var_core_value_sig8E87,
    fill: "none",
    dataArray: var_core_value_sigCDF2
  };
}
function yn(var_core_value_sig1043, var_core_value_sig4289, var_core_value_sig2729, var_core_value_sig5BB6, var_core_value_sig5C75, var_core_value_sigCB46, var_core_value_sig0177) {
  return fn(var_core_value_sig1043, var_core_value_sig4289, [{
    stroke: false,
    dataArray: [{
      command: "M",
      points: [var_core_value_sig5C75, var_core_value_sig5BB6]
    }, {
      command: "L",
      points: [var_core_value_sig2729 + var_core_value_sig0177, var_core_value_sig5BB6]
    }, {
      command: "Q",
      points: [var_core_value_sig2729, var_core_value_sig5BB6, var_core_value_sig2729, var_core_value_sig5BB6 + var_core_value_sig0177]
    }, {
      command: "L",
      points: [var_core_value_sig2729, var_core_value_sigCB46 - var_core_value_sig0177]
    }, {
      command: "Q",
      points: [var_core_value_sig2729, var_core_value_sigCB46, var_core_value_sig2729 + var_core_value_sig0177, var_core_value_sigCB46]
    }, {
      command: "L",
      points: [var_core_value_sig5C75, var_core_value_sigCB46]
    }, {
      command: "L",
      points: [var_core_value_sig5C75, var_core_value_sig5BB6]
    }, {
      command: "z",
      points: []
    }]
  }, {
    fill: "none",
    dataArray: [{
      command: "M",
      points: [var_core_value_sig5C75, var_core_value_sig5BB6]
    }, {
      command: "L",
      points: [var_core_value_sig2729 + var_core_value_sig0177, var_core_value_sig5BB6]
    }, {
      command: "Q",
      points: [var_core_value_sig2729, var_core_value_sig5BB6, var_core_value_sig2729, var_core_value_sig5BB6 + var_core_value_sig0177]
    }, {
      command: "L",
      points: [var_core_value_sig2729, var_core_value_sigCB46 - var_core_value_sig0177]
    }, {
      command: "Q",
      points: [var_core_value_sig2729, var_core_value_sigCB46, var_core_value_sig2729 + var_core_value_sig0177, var_core_value_sigCB46]
    }, {
      command: "L",
      points: [var_core_value_sig5C75, var_core_value_sigCB46]
    }]
  }]);
}
const bn = {
  [R.Actor]: {
    shapeType: R.Actor,
    defaultShapeData: {
      fill: {
        color: cn
      },
      stroke: z
    },
    geometry: {
      pathLst: [pn(172, 244, 86, 55, 36), ...fn(172, 244, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [86, 91]
        }, {
          command: "L",
          points: [86, 165]
        }, {
          command: "M",
          points: [21, 109]
        }, {
          command: "L",
          points: [151, 109]
        }, {
          command: "M",
          points: [86, 165]
        }, {
          command: "L",
          points: [33, 214]
        }, {
          command: "M",
          points: [86, 165]
        }, {
          command: "L",
          points: [137, 214]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.Boundary]: {
    shapeType: R.Boundary,
    defaultShapeData: {
      fill: {
        color: cn
      },
      stroke: z
    },
    geometry: {
      pathLst: [pn(172, 124, 94, 65, 43), ...fn(172, 124, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [24, 25]
        }, {
          command: "L",
          points: [24, 105]
        }, {
          command: "M",
          points: [24, 65]
        }, {
          command: "L",
          points: [51, 65]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.Control]: {
    shapeType: R.Control,
    defaultShapeData: {
      fill: {
        color: cn
      },
      stroke: z
    },
    geometry: {
      pathLst: [pn(152, 140, 72, 77, 43), ...fn(152, 140, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [80, 21]
        }, {
          command: "L",
          points: [65, 36]
        }, {
          command: "L",
          points: [82, 47]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.Entity]: {
    shapeType: R.Entity,
    defaultShapeData: {
      fill: {
        color: cn
      },
      stroke: z
    },
    geometry: {
      pathLst: [pn(154, 158, 72, 76, 43), ...fn(154, 158, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [26, 123]
        }, {
          command: "L",
          points: [118, 123]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.Collection]: {
    shapeType: R.Collection,
    defaultShapeData: {
      fill: {
        color: cn
      },
      stroke: z
    },
    geometry: {
      pathLst: [mn(332, 194, 54, 26, 296, 156, 10), mn(332, 194, 35, 44, 277, 175, 10)],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.DataStorage1]: {
    shapeType: R.DataStorage1,
    defaultShapeData: {
      fill: {
        color: ln
      },
      stroke: z
    },
    geometry: {
      pathLst: yn(402, 162, 26, 33, 402, 140, 13),
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.DataStorage2]: {
    shapeType: R.DataStorage2,
    defaultShapeData: {
      fill: {
        color: ln
      },
      stroke: z
    },
    geometry: {
      pathLst: [...yn(412, 152, 36, 27, 412, 134, 13), ...fn(412, 152, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [113, 27]
        }, {
          command: "L",
          points: [113, 134]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.DataStorage3]: {
    shapeType: R.DataStorage3,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.NoFill
      },
      stroke: z
    },
    geometry: {
      pathLst: fn(318, 234, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [27, 39]
        }, {
          command: "L",
          points: [294, 39]
        }, {
          command: "M",
          points: [27, 213]
        }, {
          command: "L",
          points: [294, 213]
        }]
      }]),
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.Component]: {
    shapeType: R.Component,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: dn
      },
      stroke: z
    },
    geometry: {
      pathLst: [mn(432, 304, 44, 42, 412, 284, 12), mn(432, 304, 20, 110, 64, 148, 8), mn(432, 304, 20, 180, 64, 218, 8), ...fn(432, 304, [{
        fill: "none",
        dataArray: [{
          command: "M",
          points: [44, 148]
        }, {
          command: "L",
          points: [44, 180]
        }]
      }])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.ComponentBox]: {
    shapeType: R.ComponentBox,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: dn
      },
      stroke: z
    },
    geometry: {
      pathLst: [mn(416, 284, 23, 21, 414, 263, 13), mn(416, 284, 350, 38, 397, 84, 4), mn(416, 284, 341, 47, 364, 56, 3), mn(416, 284, 341, 60, 364, 69, 3), mn(416, 284, 341, 73, 364, 82, 3)],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.ProvidedInterface]: {
    shapeType: R.ProvidedInterface,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: dn
      },
      stroke: z
    },
    geometry: {
      pathLst: [hn(160, 110, [35, 57, 58, 57]), gn(160, 110, 94, 57, 36, {
        fill: "none"
      })],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.AssemblyConnector]: {
    shapeType: R.AssemblyConnector,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: dn
      },
      stroke: z
    },
    geometry: {
      pathLst: [gn(176, 144, 78, 72, 43, {
        fill: "none"
      }), vn(176, 144, [{
        command: "M",
        points: [87, 21]
      }, {
        command: "C",
        points: [142, 27, 153, 115, 87, 123]
      }]), hn(176, 144, [18, 70, 35, 70]), hn(176, 144, [122, 70, 158, 70])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.RequiredInterface]: {
    shapeType: R.RequiredInterface,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.NoFill
      },
      stroke: z
    },
    geometry: {
      pathLst: [vn(112, 144, [{
        command: "M",
        points: [42, 16]
      }, {
        command: "C",
        points: [93, 21, 97, 119, 42, 128]
      }]), hn(112, 144, [86, 72, 111, 72])],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.InitialState]: {
    shapeType: R.InitialState,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: un
      },
      stroke: z
    },
    geometry: {
      pathLst: [gn(96, 96, 48, 48, 38, {
        stroke: false
      })],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.FinalState]: {
    shapeType: R.FinalState,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: un
      },
      stroke: z
    },
    geometry: {
      pathLst: [gn(120, 120, 60, 60, 46, {
        fill: "none"
      }), gn(120, 120, 60, 60, 30, {
        stroke: false
      })],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  },
  [R.StateBar]: {
    shapeType: R.StateBar,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: un
      },
      stroke: z
    },
    geometry: {
      pathLst: [_n(112, 28, 5, 5, 107, 23, 7)],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    }
  }
};
function xn(var_core_value_sigC674) {
  let var_core_value_sigC11B = {},
    var_core_value_sig5461 = var_core_value_sigC674.pathLst["map"]((var_core_value_sig040A, var_core_value_sig2AE0) => {
      var var_core_value_sigC349;
      let var_core_value_sig9D96 = var_core_value_sig040A.dataArray;
      if (((var_core_value_sigC349 = var_core_value_sig9D96[2]) == null ? undefined : var_core_value_sigC349.command) !== "Q") return var_core_value_sig040A;
      let [var_core_value_sig2776, var_core_value_sig6FB2,, var_core_value_sigEB43] = var_core_value_sig9D96[2].points,
        [var_core_value_sig4186, var_core_value_sigF963] = var_core_value_sig9D96[6].points,
        var_core_value_sigB608 = var_core_value_sigEB43 - var_core_value_sig6FB2,
        var_core_value_sigF866 = "corner" + var_core_value_sig2AE0,
        var_core_value_sig5EFB = var_core_value_sig7A62 => "" + var_core_value_sigF866 + var_core_value_sig7A62;
      return var_core_value_sigC11B[var_core_value_sig5EFB("l")] = [var_core_value_sigE304.MulDiv, "w", var_core_value_sig4186, Number(var_core_value_sig040A.w)], var_core_value_sigC11B[var_core_value_sig5EFB("r")] = [var_core_value_sigE304.MulDiv, "w", var_core_value_sig2776, Number(var_core_value_sig040A.w)], var_core_value_sigC11B[var_core_value_sig5EFB("t")] = [var_core_value_sigE304.MulDiv, "h", var_core_value_sig6FB2, Number(var_core_value_sig040A.h)], var_core_value_sigC11B[var_core_value_sig5EFB("b")] = [var_core_value_sigE304.MulDiv, "h", var_core_value_sigF963, Number(var_core_value_sig040A.h)], var_core_value_sigC11B[var_core_value_sig5EFB("hw")] = [var_core_value_sigE304.MulDiv, "w", (var_core_value_sig2776 - var_core_value_sig4186) / 2, Number(var_core_value_sig040A.w)], var_core_value_sigC11B[var_core_value_sig5EFB("hh")] = [var_core_value_sigE304.MulDiv, "h", (var_core_value_sigF963 - var_core_value_sig6FB2) / 2, Number(var_core_value_sig040A.h)], var_core_value_sigC11B[var_core_value_sig5EFB("half")] = [var_core_value_sigE304.Min, var_core_value_sig5EFB("hw"), var_core_value_sig5EFB("hh")], var_core_value_sigC11B[var_core_value_sig5EFB("radius")] = [var_core_value_sigE304.Min, var_core_value_sigB608, var_core_value_sig5EFB("half")], var_core_value_sigC11B[var_core_value_sig5EFB("x1")] = [var_core_value_sigE304.AddSub, var_core_value_sig5EFB("l"), var_core_value_sig5EFB("radius"), 0], var_core_value_sigC11B[var_core_value_sig5EFB("x2")] = [var_core_value_sigE304.AddSub, var_core_value_sig5EFB("r"), 0, var_core_value_sig5EFB("radius")], var_core_value_sigC11B[var_core_value_sig5EFB("y1")] = [var_core_value_sigE304.AddSub, var_core_value_sig5EFB("t"), var_core_value_sig5EFB("radius"), 0], var_core_value_sigC11B[var_core_value_sig5EFB("y2")] = [var_core_value_sigE304.AddSub, var_core_value_sig5EFB("b"), 0, var_core_value_sig5EFB("radius")], {
        stroke: var_core_value_sig040A.stroke,
        dataArray: [{
          command: "M",
          points: [var_core_value_sig5EFB("x1"), var_core_value_sig5EFB("t")]
        }, {
          command: "L",
          points: [var_core_value_sig5EFB("x2"), var_core_value_sig5EFB("t")]
        }, {
          command: "Q",
          points: [var_core_value_sig5EFB("r"), var_core_value_sig5EFB("t"), var_core_value_sig5EFB("r"), var_core_value_sig5EFB("y1")]
        }, {
          command: "L",
          points: [var_core_value_sig5EFB("r"), var_core_value_sig5EFB("y2")]
        }, {
          command: "Q",
          points: [var_core_value_sig5EFB("r"), var_core_value_sig5EFB("b"), var_core_value_sig5EFB("x2"), var_core_value_sig5EFB("b")]
        }, {
          command: "L",
          points: [var_core_value_sig5EFB("x1"), var_core_value_sig5EFB("b")]
        }, {
          command: "Q",
          points: [var_core_value_sig5EFB("l"), var_core_value_sig5EFB("b"), var_core_value_sig5EFB("l"), var_core_value_sig5EFB("y2")]
        }, {
          command: "L",
          points: [var_core_value_sig5EFB("l"), var_core_value_sig5EFB("y1")]
        }, {
          command: "Q",
          points: [var_core_value_sig5EFB("l"), var_core_value_sig5EFB("t"), var_core_value_sig5EFB("x1"), var_core_value_sig5EFB("t")]
        }, {
          command: "z",
          points: []
        }]
      };
    });
  return {
    ...var_core_value_sigC674,
    gd: var_core_value_sigC11B,
    pathLst: var_core_value_sig5461
  };
}
const Sn = {
  ...bn
};
for (let e of [R.Collection, R.Component, R.ComponentBox]) {
  let t = bn[e];
  Sn[e] = {
    ...t,
    geometry: xn(t.geometry)
  };
}
Sn[R.StateBar] = {
  ...bn[R.StateBar],
  geometry: {
    pathLst: [{
      w: 112,
      h: 28,
      stroke: false,
      dataArray: [{
        command: "M",
        points: [5, 5]
      }, {
        command: "L",
        points: [107, 5]
      }, {
        command: "L",
        points: [107, 23]
      }, {
        command: "L",
        points: [5, 23]
      }, {
        command: "z",
        points: []
      }]
    }],
    rect: {
      l: "l",
      t: "t",
      r: "r",
      b: "b"
    }
  }
};
function Cn(var_core_value_sigBA12) {
  if (var_core_value_sigBA12.type !== M.Shape || var_core_value_sigBA12.shapeData["isCustom"] !== true) return var_core_value_sigBA12;
  let var_core_value_sig65CB = String(var_core_value_sigBA12.shapeData["shapeType"] ?? "");
  if (!wn(var_core_value_sig65CB)) return var_core_value_sigBA12;
  let var_core_value_sig8AF4 = bn[var_core_value_sig65CB],
    var_core_value_sig7C2D = Sn[var_core_value_sig65CB];
  return !var_core_value_sig8AF4 || var_core_value_sig8AF4 === var_core_value_sig7C2D || !var_core_value_sig7D37.diffValue(var_core_value_sigBA12.shapeData["customGeometry"], var_core_value_sig8AF4.geometry) ? var_core_value_sigBA12 : {
    ...var_core_value_sigBA12,
    shapeData: {
      ...var_core_value_sigBA12.shapeData,
      customGeometry: var_core_value_sig7D37.deepClone(var_core_value_sig7C2D.geometry)
    }
  };
}
Object.values(R);
function wn(var_core_value_sig5F54) {
  return var_core_value_sig5F54 in Sn;
}
function Tn(var_core_value_sig668D) {
  return wn(var_core_value_sig668D) ? Sn[var_core_value_sig668D] : undefined;
}
const B = {
    ActorLifeline: "sequence_actor_lifeline",
    BoundaryLifeline: "sequence_boundary_lifeline",
    ControlLifeline: "sequence_control_lifeline",
    EntityLifeline: "sequence_entity_lifeline",
    CollectionLifeline: "sequence_collection_lifeline",
    ObjectLifeline: "sequence_object_lifeline",
    MagneticDiskLifeline: "sequence_magnetic_disk_lifeline",
    DirectAccessStorageLifeline: "sequence_direct_access_storage_lifeline",
    ActivationBar: "sequence_activation_bar"
  },
  En = {
    Object: "object",
    MagneticDisk: "magnetic_disk",
    DirectAccessStorage: "direct_access_storage"
  },
  Dn = {
    color: "#000000",
    width: 4,
    capType: var_core_value_sigF2DD.Round,
    lineJoinType: var_core_value_sigE74F.Round
  };
B.ActorLifeline, B.BoundaryLifeline, B.ControlLifeline, B.EntityLifeline, B.CollectionLifeline, B.ObjectLifeline, B.MagneticDiskLifeline, B.DirectAccessStorageLifeline;
function On(var_core_value_sig6883) {
  return var_core_value_sig6883 in Mn;
}
function kn(var_core_value_sig2A05) {
  let var_core_value_sig9CA8 = (var_core_value_sig2A05 == null ? undefined : var_core_value_sig2A05.pathLst) ?? [],
    var_core_value_sig3C9C = Math.max(...var_core_value_sig9CA8.map(var_core_value_sig3A85 => var_core_value_sig3A85.w ?? 0)),
    var_core_value_sig7651 = Math.max(...var_core_value_sig9CA8.map(var_core_value_sig2682 => var_core_value_sig2682.h ?? 0));
  if (var_core_value_sig3C9C <= 0 || var_core_value_sig7651 <= 0) return {
    width: 96,
    height: 96
  };
  let var_core_value_sig6E4E = 96 / Math.max(var_core_value_sig3C9C, var_core_value_sig7651);
  return {
    width: Math.round(var_core_value_sig3C9C * var_core_value_sig6E4E),
    height: Math.round(var_core_value_sig7651 * var_core_value_sig6E4E)
  };
}
function An(var_core_value_sigC2E8, var_core_value_sig3A04, var_core_value_sig935E) {
  var var_core_value_sigDC45, var_core_value_sig7C31;
  let var_core_value_sig8B54 = Tn(var_core_value_sig3A04);
  return {
    shapeType: var_core_value_sigC2E8,
    participantShapeType: var_core_value_sig3A04,
    geometry: (var_core_value_sig8B54 == null ? undefined : var_core_value_sig8B54.geometry) ?? {
      pathLst: []
    },
    defaultSize: var_core_value_sig935E ?? kn(var_core_value_sig8B54 == null ? undefined : var_core_value_sig8B54.geometry),
    defaultShapeData: {
      fill: var_core_value_sig8B54 == null || (var_core_value_sigDC45 = var_core_value_sig8B54.defaultShapeData) == null ? undefined : var_core_value_sigDC45.fill,
      stroke: (var_core_value_sig8B54 == null || (var_core_value_sig7C31 = var_core_value_sig8B54.defaultShapeData) == null ? undefined : var_core_value_sig7C31.stroke) ?? Dn,
      sequenceLifeline: {
        participantShapeType: var_core_value_sig3A04,
        lifelineHeight: 320,
        minLifelineHeight: 80
      }
    }
  };
}
function jn(var_core_value_sigC19B, var_core_value_sigFB87, var_core_value_sigA318, var_core_value_sig51A4) {
  return {
    shapeType: var_core_value_sigC19B,
    participantShapeType: var_core_value_sigFB87,
    defaultSize: var_core_value_sig51A4,
    defaultShapeData: {
      fill: {
        fillType: var_core_value_sig5B96.SolidFill,
        color: "#f3f6fc"
      },
      stroke: Dn,
      sequenceLifeline: {
        participantShapeType: var_core_value_sigFB87,
        participantEngineShapeType: var_core_value_sigA318,
        lifelineHeight: 320,
        minLifelineHeight: 80
      }
    }
  };
}
const Mn = {
  [B.ActorLifeline]: An(B.ActorLifeline, R.Actor),
  [B.BoundaryLifeline]: An(B.BoundaryLifeline, R.Boundary),
  [B.ControlLifeline]: An(B.ControlLifeline, R.Control),
  [B.EntityLifeline]: An(B.EntityLifeline, R.Entity),
  [B.CollectionLifeline]: An(B.CollectionLifeline, R.Collection, {
    width: 96,
    height: 56
  }),
  [B.ObjectLifeline]: jn(B.ObjectLifeline, En.Object, var_core_value_sig597C.RoundRect, {
    width: 96,
    height: 46
  }),
  [B.MagneticDiskLifeline]: jn(B.MagneticDiskLifeline, En.MagneticDisk, var_core_value_sig597C.FlowchartMagneticDisk, {
    width: 85,
    height: 96
  }),
  [B.DirectAccessStorageLifeline]: jn(B.DirectAccessStorageLifeline, En.DirectAccessStorage, var_core_value_sig597C.FlowchartMagneticDrum, {
    width: 96,
    height: 59
  }),
  [B.ActivationBar]: {
    shapeType: B.ActivationBar,
    geometry: {
      gd: {
        halfMin: [var_core_value_sigE304.MulDiv, "ss", 1, 2],
        radius: [var_core_value_sigE304.Min, "halfMin", 4],
        x2: [var_core_value_sigE304.AddSub, "w", 0, "radius"],
        y2: [var_core_value_sigE304.AddSub, "h", 0, "radius"]
      },
      pathLst: [{
        stroke: true,
        dataArray: [{
          command: "M",
          points: ["radius", 0]
        }, {
          command: "L",
          points: ["x2", 0]
        }, {
          command: "Q",
          points: ["w", 0, "w", "radius"]
        }, {
          command: "L",
          points: ["w", "y2"]
        }, {
          command: "Q",
          points: ["w", "h", "x2", "h"]
        }, {
          command: "L",
          points: ["radius", "h"]
        }, {
          command: "Q",
          points: [0, "h", 0, "y2"]
        }, {
          command: "L",
          points: [0, "radius"]
        }, {
          command: "Q",
          points: [0, 0, "radius", 0]
        }, {
          command: "z",
          points: []
        }]
      }],
      rect: {
        l: "l",
        t: "t",
        r: "r",
        b: "b"
      }
    },
    defaultSize: {
      width: 16,
      height: 96
    },
    defaultShapeData: {
      fill: {
        color: "#ffffff",
        fillType: var_core_value_sig5B96.SolidFill
      },
      stroke: Dn,
      sequenceActivation: {
        attachableToLifeline: true
      }
    }
  }
};
Object.values(B);
const Nn = {
  pathLst: [{
    w: 16,
    h: 96,
    stroke: true,
    dataArray: [{
      command: "M",
      points: [4, 0]
    }, {
      command: "L",
      points: [12, 0]
    }, {
      command: "Q",
      points: [16, 0, 16, 4]
    }, {
      command: "L",
      points: [16, 92]
    }, {
      command: "Q",
      points: [16, 96, 12, 96]
    }, {
      command: "L",
      points: [4, 96]
    }, {
      command: "Q",
      points: [0, 96, 0, 92]
    }, {
      command: "L",
      points: [0, 4]
    }, {
      command: "Q",
      points: [0, 0, 4, 0]
    }, {
      command: "z",
      points: []
    }]
  }],
  rect: {
    l: "l",
    t: "t",
    r: "r",
    b: "b"
  }
};
function Pn(var_core_value_sig2966) {
  var var_core_value_sigF4C4;
  return var_core_value_sig2966.type !== M.Shape || ((var_core_value_sigF4C4 = var_core_value_sig2966.shapeData) == null ? undefined : var_core_value_sigF4C4.shapeType) !== B.ActivationBar || var_core_value_sig2966.shapeData["isCustom"] !== true || !var_core_value_sig7D37.diffValue(var_core_value_sig2966.shapeData["customGeometry"], Nn) ? var_core_value_sig2966 : {
    ...var_core_value_sig2966,
    shapeData: {
      ...var_core_value_sig2966.shapeData,
      customGeometry: var_core_value_sig7D37.deepClone(Mn[B.ActivationBar].geometry)
    }
  };
}
function Fn(var_core_value_sig5617) {
  return On(var_core_value_sig5617) ? Mn[var_core_value_sig5617] : undefined;
}
function In(var_core_value_sig450E) {
  return var_core_value_sig450E == null ? undefined : var_core_value_sig450E.sequenceLifeline;
}
function Ln(var_core_value_sig92A3) {
  return var_core_value_sig92A3 == null ? undefined : var_core_value_sig92A3.sequenceActivation;
}
function Rn(var_core_value_sig61E5) {
  let var_core_value_sig9E17 = var_core_value_sig61E5 == null ? undefined : var_core_value_sig61E5.shapeData;
  return !!var_core_value_sig9E17 && !!In(var_core_value_sig9E17);
}
function zn(var_core_value_sigB97D) {
  var var_core_value_sigFE1E;
  let var_core_value_sig5F541 = var_core_value_sigB97D == null ? undefined : var_core_value_sigB97D.shapeData;
  return !!var_core_value_sig5F541 && ((var_core_value_sigFE1E = Ln(var_core_value_sig5F541)) == null ? undefined : var_core_value_sigFE1E.attachableToLifeline) === true;
}
function Bn(var_core_value_sig84B9) {
  return var_core_value_sig84B9 == null ? undefined : var_core_value_sig84B9.element["parentId"];
}
function Vn(var_core_value_sig09DF) {
  return (var_core_value_sig09DF == null ? undefined : var_core_value_sig09DF.element["type"]) === M.Container;
}
function V(var_core_value_sig3A25, var_core_value_sig5B2B) {
  let var_core_value_sigE5FE = [],
    var_core_value_sig78A5 = new Set([var_core_value_sig5B2B]),
    var_core_value_sig9A4C = Bn(var_core_value_sig3A25[var_core_value_sig5B2B]);
  for (; var_core_value_sig9A4C && !var_core_value_sig78A5.has(var_core_value_sig9A4C);) {
    let var_core_value_sig8109 = var_core_value_sig3A25[var_core_value_sig9A4C];
    if (!Vn(var_core_value_sig8109)) break;
    var_core_value_sigE5FE.push(var_core_value_sig9A4C), var_core_value_sig78A5.add(var_core_value_sig9A4C), var_core_value_sig9A4C = Bn(var_core_value_sig8109);
  }
  return var_core_value_sigE5FE;
}
function Hn(var_core_value_sigC723, var_core_value_sig1E32) {
  return Vn(var_core_value_sigC723[var_core_value_sig1E32]) ? Object.values(var_core_value_sigC723).filter(var_core_value_sig4BB5 => var_core_value_sig4BB5.element["parentId"] === var_core_value_sig1E32).map(var_core_value_sig6709 => var_core_value_sig6709.elementId) : [];
}
function Un(var_core_value_sig22AF, var_core_value_sig0F31) {
  let var_core_value_sig8F25 = [],
    var_core_value_sigCBED = new Set(),
    var_core_value_sig6224 = var_core_value_sig52CA => {
      Hn(var_core_value_sig22AF, var_core_value_sig52CA).forEach(var_core_value_sig7565 => {
        var_core_value_sigCBED.has(var_core_value_sig7565) || (var_core_value_sigCBED.add(var_core_value_sig7565), var_core_value_sig8F25.push(var_core_value_sig7565), Vn(var_core_value_sig22AF[var_core_value_sig7565]) && var_core_value_sig6224(var_core_value_sig7565));
      });
    };
  return var_core_value_sig6224(var_core_value_sig0F31), var_core_value_sig8F25;
}
function Wn(var_core_value_sigFC3E, var_core_value_sig4D33, var_core_value_sig08BF) {
  return !var_core_value_sig08BF || !Vn(var_core_value_sigFC3E[var_core_value_sig4D33]) ? false : var_core_value_sig4D33 === var_core_value_sig08BF || V(var_core_value_sigFC3E, var_core_value_sig08BF).includes(var_core_value_sig4D33);
}
function Gn(var_core_value_sig1814, var_core_value_sig2B5D) {
  if (var_core_value_sig2B5D.length === 0) return;
  let var_core_value_sig9B0B = var_core_value_sig2B5D.map(var_core_value_sigC030 => V(var_core_value_sig1814, var_core_value_sigC030)),
    var_core_value_sigF21D = var_core_value_sig9B0B[0];
  if (!(!var_core_value_sigF21D || var_core_value_sigF21D.length === 0)) return var_core_value_sigF21D.find(var_core_value_sig88F6 => var_core_value_sig9B0B.every(var_core_value_sigD4FB => var_core_value_sigD4FB.includes(var_core_value_sig88F6)));
}
function Kn(var_core_value_sig9B55) {
  return {
    left: var_core_value_sig9B55.width >= 0 ? var_core_value_sig9B55.left : var_core_value_sig9B55.left + var_core_value_sig9B55.width,
    top: var_core_value_sig9B55.height >= 0 ? var_core_value_sig9B55.top : var_core_value_sig9B55.top + var_core_value_sig9B55.height,
    width: Math.abs(var_core_value_sig9B55.width),
    height: Math.abs(var_core_value_sig9B55.height)
  };
}
function qn(var_core_value_sigB8F4) {
  return {
    left: (var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.left) ?? 0,
    top: (var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.top) ?? 0,
    width: (var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.width) ?? 0,
    height: (var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.height) ?? 0,
    rotation: (var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.rotation) ?? 0,
    scaleX: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.scaleX,
    scaleY: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.scaleY,
    skewX: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.skewX,
    skewY: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.skewY,
    flipX: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.flipX,
    flipY: var_core_value_sigB8F4 == null ? undefined : var_core_value_sigB8F4.flipY
  };
}
function Jn(var_core_value_sig5E41) {
  return qn({
    ...var_core_value_sig5E41.element["transform"],
    ...(var_core_value_sig5E41.transform ?? {})
  });
}
function Yn(var_core_value_sig310E, var_core_value_sig2E97) {
  return var_core_value_sig310E.element["type"] === M.Container ? {
    ...var_core_value_sig2E97,
    rotation: 0
  } : var_core_value_sig2E97;
}
function H(var_core_value_sig4B00, var_core_value_sig9896) {
  let var_core_value_sigA725 = var_core_value_sig4B00[var_core_value_sig9896];
  if (!var_core_value_sigA725) return null;
  let var_core_value_sig9FB3 = V(var_core_value_sig4B00, var_core_value_sig9896),
    var_core_value_sig0E44 = Jn(var_core_value_sigA725),
    var_core_value_sig243C = var_core_value_sig9FB3.reduce((var_core_value_sig37DB, var_core_value_sig5542) => {
      let var_core_value_sigE0A9 = var_core_value_sig4B00[var_core_value_sig5542];
      if (!var_core_value_sigE0A9) return var_core_value_sig37DB;
      let var_core_value_sigA73E = Jn(var_core_value_sigE0A9);
      return {
        left: var_core_value_sig37DB.left + (var_core_value_sigA73E.left ?? 0),
        top: var_core_value_sig37DB.top + (var_core_value_sigA73E.top ?? 0)
      };
    }, {
      left: 0,
      top: 0
    });
  return {
    elementId: var_core_value_sig9896,
    parentChain: var_core_value_sig9FB3,
    localTransform: var_core_value_sig0E44,
    worldTransform: Yn(var_core_value_sigA725, {
      ...var_core_value_sig0E44,
      left: (var_core_value_sig0E44.left ?? 0) + var_core_value_sig243C.left,
      top: (var_core_value_sig0E44.top ?? 0) + var_core_value_sig243C.top
    })
  };
}
function U(var_core_value_sigB3A4, var_core_value_sigAF1B) {
  let var_core_value_sig906D = H(var_core_value_sigB3A4, var_core_value_sigAF1B);
  return var_core_value_sig906D ? Kn({
    left: var_core_value_sig906D.worldTransform["left"] ?? 0,
    top: var_core_value_sig906D.worldTransform["top"] ?? 0,
    width: var_core_value_sig906D.worldTransform["width"] ?? 0,
    height: var_core_value_sig906D.worldTransform["height"] ?? 0
  }) : null;
}
function W(var_core_value_sig6AFB, var_core_value_sig2830) {
  var var_core_value_sig9C3A;
  let var_core_value_sig0321 = var_core_value_sig2830.parentId ? var_core_value_sig6AFB[var_core_value_sig2830.parentId] : undefined,
    var_core_value_sig51CF = var_core_value_sig2830.parentId && (var_core_value_sig0321 == null ? undefined : var_core_value_sig0321.element["type"]) === M.Container ? (var_core_value_sig9C3A = H(var_core_value_sig6AFB, var_core_value_sig2830.parentId)) == null ? undefined : var_core_value_sig9C3A.worldTransform : null;
  return qn({
    ...var_core_value_sig2830.worldTransform,
    left: (var_core_value_sig2830.worldTransform["left"] ?? 0) - ((var_core_value_sig51CF == null ? undefined : var_core_value_sig51CF.left) ?? 0),
    top: (var_core_value_sig2830.worldTransform["top"] ?? 0) - ((var_core_value_sig51CF == null ? undefined : var_core_value_sig51CF.top) ?? 0)
  });
}
function G(var_core_value_sig3C61) {
  return {
    left: var_core_value_sig3C61.left ?? 0,
    top: var_core_value_sig3C61.top ?? 0,
    width: var_core_value_sig3C61.width ?? 0,
    height: var_core_value_sig3C61.height ?? 0,
    angle: var_core_value_sig3C61.rotation ?? var_core_value_sig3C61.angle ?? 0,
    flipX: var_core_value_sig3C61.flipX,
    flipY: var_core_value_sig3C61.flipY
  };
}
function Xn(var_core_value_sigDC70) {
  return {
    left: var_core_value_sigDC70.left,
    top: var_core_value_sigDC70.top,
    width: var_core_value_sigDC70.width,
    height: var_core_value_sigDC70.height,
    rotation: var_core_value_sigDC70.angle,
    flipX: var_core_value_sigDC70.flipX,
    flipY: var_core_value_sigDC70.flipY
  };
}
const K = 0.001;
function Zn(var_core_value_sigD10E, var_core_value_sigBB93, var_core_value_sig4F88 = {}) {
  let var_core_value_sig486C = var_core_value_sig4F88.source ?? "model",
    var_core_value_sig717C = Qn(var_core_value_sig4F88.focusPadding),
    var_core_value_sig23AE = $n(var_core_value_sig4F88.endpointSnapThreshold),
    var_core_value_sigCB54 = var_core_value_sigBB93.map(var_core_value_sig7620 => var_core_value_sigD10E[var_core_value_sig7620]).filter(var_core_value_sigB9FC => var_core_value_sigB9FC !== undefined && var_core_value_sigB9FC.element["visible"] !== false),
    var_core_value_sigC7E1 = new Map();
  for (let var_core_value_sig5055 of var_core_value_sigCB54) {
    let var_core_value_sig3E71 = U(var_core_value_sigD10E, var_core_value_sig5055.elementId);
    var_core_value_sig3E71 && var_core_value_sigC7E1.set(var_core_value_sig5055.elementId, var_core_value_sig3E71);
  }
  let var_core_value_sig6575 = var_core_value_sigCB54.filter(var_core_value_sig3801 => var_core_value_sig3801.element["type"] === M.Connector).map(var_core_value_sig45F0 => {
      var var_core_value_sigBC91;
      return er(var_core_value_sig45F0.element, (var_core_value_sigBC91 = var_core_value_sig4F88.resolvedRoutes) == null ? undefined : var_core_value_sigBC91[var_core_value_sig45F0.elementId]);
    }),
    var_core_value_sigE901 = Hr([...rr(var_core_value_sigCB54, var_core_value_sigC7E1, var_core_value_sigD10E, var_core_value_sig717C), ...or(var_core_value_sig6575, var_core_value_sigCB54, var_core_value_sigC7E1, var_core_value_sig717C), ..._r(var_core_value_sig6575, var_core_value_sig717C), ...lr(var_core_value_sig6575, var_core_value_sigCB54, var_core_value_sigC7E1, var_core_value_sigD10E, var_core_value_sig717C, var_core_value_sig23AE), ...ur(var_core_value_sig6575, var_core_value_sig717C, var_core_value_sig23AE)]).sort(Br),
    var_core_value_sigB7EC = var_core_value_sig6575.map(({
      connector: var_core_value_sigCB88,
      points: var_core_value_sig8D65,
      resolved: var_core_value_sig8122
    }) => ({
      connectorId: var_core_value_sigCB88.id,
      points: var_core_value_sig8D65.map(var_core_value_sig01B3 => ({
        ...var_core_value_sig01B3
      })),
      resolved: var_core_value_sig8122
    }));
  return {
    source: var_core_value_sig486C,
    contentBounds: Or(Array.from(var_core_value_sigC7E1.values())),
    routes: var_core_value_sigB7EC,
    issues: var_core_value_sigE901,
    summary: {
      errorCount: var_core_value_sigE901.filter(var_core_value_sigEDC6 => var_core_value_sigEDC6.severity === "error").length,
      warningCount: var_core_value_sigE901.filter(var_core_value_sig611A => var_core_value_sig611A.severity === "warning").length,
      unresolvedConnectorCount: var_core_value_sigB7EC.filter(var_core_value_sig6BD9 => !var_core_value_sig6BD9.resolved).length
    }
  };
}
function Qn(var_core_value_sigB018) {
  return var_core_value_sigB018 === undefined || !Number.isFinite(var_core_value_sigB018) || var_core_value_sigB018 < 0 ? 24 : var_core_value_sigB018;
}
function $n(var_core_value_sigE7BE) {
  return var_core_value_sigE7BE === undefined || !Number.isFinite(var_core_value_sigE7BE) || var_core_value_sigE7BE < 0 ? 12 : var_core_value_sigE7BE;
}
function er(var_core_value_sigC88E, var_core_value_sigC4A6) {
  var var_core_value_sig1FE3;
  if (var_core_value_sigC4A6 && var_core_value_sigC4A6.length >= 2) return {
    connector: var_core_value_sigC88E,
    points: var_core_value_sigC4A6.map(var_core_value_sig7E56 => ({
      ...var_core_value_sig7E56
    })),
    resolved: true
  };
  let var_core_value_sigF003 = tr(var_core_value_sigC88E.connectorData["start"]),
    var_core_value_sigE146 = tr(var_core_value_sigC88E.connectorData["end"]),
    var_core_value_sigF6D5 = ((var_core_value_sig1FE3 = var_core_value_sigC88E.connectorData["orthogonalData"]) == null ? undefined : var_core_value_sig1FE3.routePoints) ?? var_core_value_sigC88E.connectorData["waypoints"] ?? [],
    var_core_value_sig3B2F = [var_core_value_sigF003, ...var_core_value_sigF6D5.map(var_core_value_sig4161 => ({
      x: var_core_value_sig4161.x,
      y: var_core_value_sig4161.y
    })), var_core_value_sigE146].filter(var_core_value_sig7580 => var_core_value_sig7580 !== null),
    var_core_value_sigE558 = var_core_value_sigC88E.connectorData["routing"] === "straight" || var_core_value_sigC88E.connectorData["routing"] === "freePolyline" || var_core_value_sigC88E.connectorData["routing"] === "orthogonal" && (var_core_value_sigC88E.connectorData["routingMode"] !== "auto" || var_core_value_sigF6D5.length > 0);
  return {
    connector: var_core_value_sigC88E,
    points: nr(var_core_value_sig3B2F),
    resolved: var_core_value_sigE558 && var_core_value_sig3B2F.length >= 2
  };
}
function tr(var_core_value_sigA99D) {
  return var_core_value_sigA99D.kind === "free" ? {
    x: var_core_value_sigA99D.x,
    y: var_core_value_sigA99D.y
  } : var_core_value_sigA99D.fallbackPoint ? {
    ...var_core_value_sigA99D.fallbackPoint
  } : null;
}
function nr(var_core_value_sigB23E) {
  let var_core_value_sigDA56 = [];
  for (let var_core_value_sig1F18 of var_core_value_sigB23E) {
    let var_core_value_sig7442 = var_core_value_sigDA56[var_core_value_sigDA56.length - 1];
    (!var_core_value_sig7442 || !Er(var_core_value_sig7442, var_core_value_sig1F18)) && var_core_value_sigDA56.push({
      ...var_core_value_sig1F18
    });
  }
  return var_core_value_sigDA56;
}
function rr(var_core_value_sig8D74, var_core_value_sigC3E8, var_core_value_sig3FAF, var_core_value_sigC00C) {
  let var_core_value_sig080D = var_core_value_sig8D74.filter(var_core_value_sigD5A0 => var_core_value_sigD5A0.element["type"] !== M.Connector).flatMap(var_core_value_sig81B2 => {
      let var_core_value_sigA0A5 = var_core_value_sigC3E8.get(var_core_value_sig81B2.elementId);
      return var_core_value_sigA0A5 ? [{
        bounds: var_core_value_sigA0A5,
        value: var_core_value_sig81B2
      }] : [];
    }),
    var_core_value_sigCDBC = [];
  return Nr(var_core_value_sig080D, (var_core_value_sig10AA, var_core_value_sigE6D0) => {
    let var_core_value_sig8E91 = var_core_value_sig10AA.value,
      var_core_value_sig00BE = var_core_value_sigE6D0.value;
    if (ir(var_core_value_sig8E91.elementId, var_core_value_sig00BE.elementId, var_core_value_sig3FAF)) return;
    let var_core_value_sig7BB5 = Dr(var_core_value_sig10AA.bounds, var_core_value_sigE6D0.bounds);
    if (!var_core_value_sig7BB5) return;
    let var_core_value_sig6AAD = [var_core_value_sig8E91.elementId, var_core_value_sig00BE.elementId].sort();
    var_core_value_sigCDBC.push(Lr({
      rule: "element-overlap",
      severity: "error",
      elementIds: var_core_value_sig6AAD,
      connectorIds: [],
      bounds: var_core_value_sig7BB5,
      focusPadding: var_core_value_sigC00C
    }));
  }), var_core_value_sigCDBC;
}
function ir(var_core_value_sig0F75, var_core_value_sig4B7F, var_core_value_sig17D6) {
  return ar(var_core_value_sig0F75, var_core_value_sig4B7F, var_core_value_sig17D6) || ar(var_core_value_sig4B7F, var_core_value_sig0F75, var_core_value_sig17D6);
}
function ar(var_core_value_sig8915, var_core_value_sigC88F, var_core_value_sig1AFA) {
  var var_core_value_sigBCF5;
  let var_core_value_sig988A = (var_core_value_sigBCF5 = var_core_value_sig1AFA[var_core_value_sigC88F]) == null ? undefined : var_core_value_sigBCF5.element["parentId"],
    var_core_value_sigFC02 = new Set();
  for (; var_core_value_sig988A && !var_core_value_sigFC02.has(var_core_value_sig988A);) {
    var var_core_value_sigF71C;
    if (var_core_value_sig988A === var_core_value_sig8915) return true;
    var_core_value_sigFC02.add(var_core_value_sig988A), var_core_value_sig988A = (var_core_value_sigF71C = var_core_value_sig1AFA[var_core_value_sig988A]) == null ? undefined : var_core_value_sigF71C.element["parentId"];
  }
  return false;
}
function or(var_core_value_sigE634, var_core_value_sigF74F, var_core_value_sig89D7, var_core_value_sigF2B0) {
  let var_core_value_sigD77A = var_core_value_sigF74F.filter(var_core_value_sig1157 => var_core_value_sig1157.element["type"] !== M.Connector && var_core_value_sig1157.element["type"] !== M.Container).flatMap(var_core_value_sigA694 => {
      let var_core_value_sig18E01 = var_core_value_sig89D7.get(var_core_value_sigA694.elementId);
      return var_core_value_sig18E01 ? [{
        bounds: var_core_value_sig18E01,
        value: var_core_value_sigA694
      }] : [];
    }),
    var_core_value_sigF2C2 = var_core_value_sigE634.filter(var_core_value_sig0428 => var_core_value_sig0428.resolved).flatMap(var_core_value_sigBE07 => vr(var_core_value_sigBE07.points).map(var_core_value_sigDF87 => ({
      bounds: kr(var_core_value_sigDF87.start, var_core_value_sigDF87.end),
      value: {
        route: var_core_value_sigBE07,
        segment: var_core_value_sigDF87
      }
    }))),
    var_core_value_sig2990 = new Map();
  return Mr(var_core_value_sigF2C2, var_core_value_sigD77A, (var_core_value_sig555F, var_core_value_sig3D6F) => {
    let {
        route: var_core_value_sig336C,
        segment: var_core_value_sig6E68
      } = var_core_value_sig555F.value,
      var_core_value_sig8DFE = var_core_value_sig3D6F.value;
    if (sr(var_core_value_sig336C.connector).has(var_core_value_sig8DFE.elementId)) return;
    let var_core_value_sig48EA = yr(var_core_value_sig6E68, var_core_value_sig3D6F.bounds);
    if (!var_core_value_sig48EA) return;
    let var_core_value_sig5E16 = var_core_value_sig336C.connector["id"] + ":" + var_core_value_sig8DFE.elementId,
      var_core_value_sig09F3 = var_core_value_sig2990.get(var_core_value_sig5E16) ?? {
        route: var_core_value_sig336C,
        obstacle: var_core_value_sig8DFE,
        intersections: []
      };
    var_core_value_sig09F3.intersections["push"](var_core_value_sig48EA), var_core_value_sig2990.set(var_core_value_sig5E16, var_core_value_sig09F3);
  }), Array.from(var_core_value_sig2990.values()).flatMap(({
    route: var_core_value_sig4592,
    obstacle: var_core_value_sigC5C4,
    intersections: var_core_value_sig1617
  }) => {
    let var_core_value_sig4169 = Or(var_core_value_sig1617);
    return var_core_value_sig4169 ? [Lr({
      rule: "connector-through-element",
      severity: "error",
      elementIds: [var_core_value_sigC5C4.elementId],
      connectorIds: [var_core_value_sig4592.connector["id"]],
      bounds: var_core_value_sig4169,
      focusPadding: var_core_value_sigF2B0,
      routePoints: var_core_value_sig4592.points
    })] : [];
  });
}
function sr(var_core_value_sigD300) {
  let var_core_value_sig6F77 = new Set(),
    var_core_value_sigFA4B = cr(var_core_value_sigD300.connectorData["start"]),
    var_core_value_sig2AB0 = cr(var_core_value_sigD300.connectorData["end"]);
  return var_core_value_sigFA4B && var_core_value_sig6F77.add(var_core_value_sigFA4B), var_core_value_sig2AB0 && var_core_value_sig6F77.add(var_core_value_sig2AB0), var_core_value_sig6F77;
}
function cr(var_core_value_sig853D) {
  return var_core_value_sig853D.kind === "free" ? null : var_core_value_sig853D.shapeId;
}
function lr(var_core_value_sigD1F0, var_core_value_sig3D4E, var_core_value_sig79C0, var_core_value_sig173D, var_core_value_sig6F1A, var_core_value_sig1802) {
  let var_core_value_sigCFA7 = var_core_value_sigD1F0.flatMap(var_core_value_sig6D19 => dr(var_core_value_sig6D19)).map(var_core_value_sig279C => ({
      bounds: jr(Ar(var_core_value_sig279C.point), var_core_value_sig1802),
      value: var_core_value_sig279C
    })),
    var_core_value_sig31C2 = var_core_value_sig3D4E.filter(var_core_value_sigAC51 => fr(var_core_value_sigAC51)).flatMap(var_core_value_sig8986 => {
      let var_core_value_sigCAF7 = var_core_value_sig79C0.get(var_core_value_sig8986.elementId);
      if (!var_core_value_sigCAF7) return [];
      let var_core_value_sigED1C = pr(var_core_value_sig8986, var_core_value_sig173D);
      return [{
        bounds: var_core_value_sigED1C ? Or([var_core_value_sigCAF7, kr(var_core_value_sigED1C.start, var_core_value_sigED1C.end)]) ?? var_core_value_sigCAF7 : var_core_value_sigCAF7,
        value: {
          item: var_core_value_sig8986,
          bounds: var_core_value_sigCAF7,
          lifelineSegment: var_core_value_sigED1C
        }
      }];
    }),
    var_core_value_sigA677 = new Map();
  return Mr(var_core_value_sigCFA7, var_core_value_sig31C2, (var_core_value_sig726E, var_core_value_sig2CD3) => {
    let var_core_value_sig038E = var_core_value_sig726E.value,
      {
        item: var_core_value_sigAA1E,
        bounds: var_core_value_sigC9F5,
        lifelineSegment: var_core_value_sig7EEA
      } = var_core_value_sig2CD3.value,
      var_core_value_sig59CE = wr(var_core_value_sig038E.point, var_core_value_sigC9F5),
      var_core_value_sig33C8 = var_core_value_sig7EEA ? Cr(var_core_value_sig038E.point, var_core_value_sig7EEA) : 1 / 0,
      var_core_value_sig957F = Math.min(var_core_value_sig59CE, var_core_value_sig33C8);
    if (var_core_value_sig957F > var_core_value_sig1802) return;
    let var_core_value_sig803B = var_core_value_sig038E.route["connector"].id + ":" + var_core_value_sig038E.endpoint,
      var_core_value_sig5830 = var_core_value_sigA677.get(var_core_value_sig803B);
    (!var_core_value_sig5830 || var_core_value_sig957F < var_core_value_sig5830.distance || var_core_value_sig957F === var_core_value_sig5830.distance && var_core_value_sigAA1E.elementId < var_core_value_sig5830.target["item"].elementId) && var_core_value_sigA677.set(var_core_value_sig803B, {
      distance: var_core_value_sig957F,
      endpoint: var_core_value_sig038E,
      target: var_core_value_sig2CD3.value
    });
  }), Array.from(var_core_value_sigA677.values()).map(({
    endpoint: var_core_value_sig4A7C,
    target: var_core_value_sigF975
  }) => Lr({
    rule: "connector-free-endpoint-near-element",
    severity: "warning",
    elementIds: [var_core_value_sigF975.item["elementId"]],
    connectorIds: [var_core_value_sig4A7C.route["connector"].id],
    bounds: Ar(var_core_value_sig4A7C.point),
    focusPadding: var_core_value_sig6F1A,
    routePoints: var_core_value_sig4A7C.route["points"],
    endpoint: var_core_value_sig4A7C.endpoint,
    suggestedAction: "bind-connector-endpoint"
  }));
}
function ur(var_core_value_sigC015, var_core_value_sigAEBC, var_core_value_sig366A) {
  let var_core_value_sigA89C = var_core_value_sigC015.flatMap(var_core_value_sigCDAF => dr(var_core_value_sigCDAF)).filter(({
      route: var_core_value_sigA298,
      endpoint: var_core_value_sig0B40
    }) => mr(var_core_value_sigA298.points, var_core_value_sig0B40)).map(var_core_value_sig330B => ({
      bounds: jr(Ar(var_core_value_sig330B.point), var_core_value_sig366A),
      value: var_core_value_sig330B
    })),
    var_core_value_sigDD3E = var_core_value_sigC015.filter(var_core_value_sig3625 => hr(var_core_value_sig3625)).flatMap(var_core_value_sig0B4E => vr(var_core_value_sig0B4E.points).map(var_core_value_sig9EE0 => ({
      bounds: jr(kr(var_core_value_sig9EE0.start, var_core_value_sig9EE0.end), var_core_value_sig366A),
      value: {
        route: var_core_value_sig0B4E,
        segment: var_core_value_sig9EE0
      }
    }))),
    var_core_value_sig182B = new Map();
  return Mr(var_core_value_sigA89C, var_core_value_sigDD3E, (var_core_value_sig0E9F, var_core_value_sigE5BA) => {
    let var_core_value_sig4A83 = var_core_value_sig0E9F.value,
      {
        route: var_core_value_sig58AA,
        segment: var_core_value_sig84C4
      } = var_core_value_sigE5BA.value;
    if (var_core_value_sig4A83.route["connector"].id === var_core_value_sig58AA.connector["id"]) return;
    let var_core_value_sigB6F7 = Cr(var_core_value_sig4A83.point, var_core_value_sig84C4);
    if (var_core_value_sigB6F7 > var_core_value_sig366A) return;
    let var_core_value_sigB495 = var_core_value_sig4A83.route["connector"].id + ":" + var_core_value_sig4A83.endpoint,
      var_core_value_sig70D0 = var_core_value_sig182B.get(var_core_value_sigB495);
    (!var_core_value_sig70D0 || var_core_value_sigB6F7 < var_core_value_sig70D0.distance || var_core_value_sigB6F7 === var_core_value_sig70D0.distance && var_core_value_sig58AA.connector["id"] < var_core_value_sig70D0.dashedRoute["connector"].id) && var_core_value_sig182B.set(var_core_value_sigB495, {
      distance: var_core_value_sigB6F7,
      endpoint: var_core_value_sig4A83,
      dashedRoute: var_core_value_sig58AA
    });
  }), Array.from(var_core_value_sig182B.values()).map(({
    endpoint: var_core_value_sig2A8A,
    dashedRoute: var_core_value_sig3782
  }) => Lr({
    rule: "connector-free-endpoint-near-dashed-connector",
    severity: "warning",
    elementIds: [],
    connectorIds: [var_core_value_sig2A8A.route["connector"].id, var_core_value_sig3782.connector["id"]],
    bounds: Ar(var_core_value_sig2A8A.point),
    focusPadding: var_core_value_sigAEBC,
    routePoints: var_core_value_sig2A8A.route["points"],
    endpoint: var_core_value_sig2A8A.endpoint,
    suggestedAction: "replace-dashed-connector-with-sequence-lifeline"
  }));
}
function dr(var_core_value_sig2A99) {
  let var_core_value_sig18A6 = [];
  return var_core_value_sig2A99.connector["connectorData"].start["kind"] === "free" && var_core_value_sig18A6.push({
    route: var_core_value_sig2A99,
    endpoint: "start",
    point: {
      ...var_core_value_sig2A99.connector["connectorData"].start
    }
  }), var_core_value_sig2A99.connector["connectorData"].end["kind"] === "free" && var_core_value_sig18A6.push({
    route: var_core_value_sig2A99,
    endpoint: "end",
    point: {
      ...var_core_value_sig2A99.connector["connectorData"].end
    }
  }), var_core_value_sig18A6;
}
function fr(var_core_value_sigA98B) {
  return var_core_value_sigA98B.element["locked"] !== true && var_core_value_sigA98B.element["type"] !== M.Connector && var_core_value_sigA98B.element["type"] !== M.Group;
}
function pr(var_core_value_sig458C, var_core_value_sig8DEC) {
  if (var_core_value_sig458C.element["type"] !== M.Shape) return null;
  let var_core_value_sig522F = In(var_core_value_sig458C.element["shapeData"]),
    var_core_value_sigD718 = H(var_core_value_sig8DEC, var_core_value_sig458C.elementId);
  if (!var_core_value_sig522F || !var_core_value_sigD718 || Math.abs(var_core_value_sigD718.worldTransform["rotation"] ?? 0) > K) return null;
  let var_core_value_sig41CF = var_core_value_sigD718.worldTransform["left"] ?? 0,
    var_core_value_sig1EFD = var_core_value_sigD718.worldTransform["top"] ?? 0,
    var_core_value_sig38BB = var_core_value_sigD718.worldTransform["width"] ?? 0,
    var_core_value_sig017C = var_core_value_sigD718.worldTransform["height"] ?? 0,
    var_core_value_sig44BC = var_core_value_sig41CF + var_core_value_sig38BB / 2,
    var_core_value_sigAB7B = var_core_value_sig1EFD + var_core_value_sig017C;
  return {
    start: {
      x: var_core_value_sig44BC,
      y: var_core_value_sigAB7B
    },
    end: {
      x: var_core_value_sig44BC,
      y: var_core_value_sigAB7B + Math.max(var_core_value_sig522F.minLifelineHeight, var_core_value_sig522F.lifelineHeight)
    }
  };
}
function mr(var_core_value_sig55EE, var_core_value_sigE9F6) {
  let var_core_value_sig3BA9 = var_core_value_sigE9F6 === "start",
    var_core_value_sigE230 = var_core_value_sig3BA9 ? 0 : var_core_value_sig55EE.length - 1,
    var_core_value_sig5AC8 = var_core_value_sig55EE[var_core_value_sigE230];
  if (!var_core_value_sig5AC8) return false;
  for (let var_core_value_sigD22E = var_core_value_sigE230 + (var_core_value_sig3BA9 ? 1 : -1); var_core_value_sigD22E >= 0 && var_core_value_sigD22E < var_core_value_sig55EE.length; var_core_value_sigD22E += var_core_value_sig3BA9 ? 1 : -1) {
    let var_core_value_sigF051 = var_core_value_sig55EE[var_core_value_sigD22E],
      var_core_value_sig0B45 = Math.abs(var_core_value_sigF051.x - var_core_value_sig5AC8.x),
      var_core_value_sig36F8 = Math.abs(var_core_value_sigF051.y - var_core_value_sig5AC8.y);
    if (!(var_core_value_sig0B45 <= K && var_core_value_sig36F8 <= K)) return var_core_value_sig0B45 >= var_core_value_sig36F8 * 2;
  }
  return false;
}
function hr(var_core_value_sigE492) {
  var var_core_value_sig3465;
  let {
    connectorData: var_core_value_sig38DD
  } = var_core_value_sigE492.connector;
  if (!((var_core_value_sig3465 = var_core_value_sig38DD.style) != null && (var_core_value_sig3465 = var_core_value_sig3465.dash) != null && var_core_value_sig3465.some(var_core_value_sig3455 => var_core_value_sig3455 > 0)) || gr(var_core_value_sig38DD.style["startMarker"]) || gr(var_core_value_sig38DD.style["endMarker"]) || var_core_value_sig38DD.start["kind"] !== "free" || var_core_value_sig38DD.end["kind"] !== "free") return false;
  let var_core_value_sig89AE = var_core_value_sigE492.points[0],
    var_core_value_sig3A69 = var_core_value_sigE492.points[var_core_value_sigE492.points["length"] - 1],
    var_core_value_sigD64C = vr(var_core_value_sigE492.points);
  return !var_core_value_sig89AE || !var_core_value_sig3A69 || var_core_value_sigD64C.length === 0 || Math.abs(var_core_value_sig3A69.y - var_core_value_sig89AE.y) < 48 ? false : var_core_value_sigD64C.every(var_core_value_sig5CEF => {
    let var_core_value_sig43D5 = Math.abs(var_core_value_sig5CEF.end["x"] - var_core_value_sig5CEF.start["x"]);
    return Math.abs(var_core_value_sig5CEF.end["y"] - var_core_value_sig5CEF.start["y"]) >= var_core_value_sig43D5 * 2;
  });
}
function gr(var_core_value_sig3B0B) {
  return var_core_value_sig3B0B !== undefined && var_core_value_sig3B0B.type !== "none";
}
function _r(var_core_value_sig1E7C, var_core_value_sigD3C4) {
  let var_core_value_sigBC8B = var_core_value_sig1E7C.filter(var_core_value_sig1395 => var_core_value_sig1395.resolved).flatMap(var_core_value_sig9FA0 => vr(var_core_value_sig9FA0.points).map(var_core_value_sig03E1 => ({
      bounds: kr(var_core_value_sig03E1.start, var_core_value_sig03E1.end),
      value: {
        route: var_core_value_sig9FA0,
        segment: var_core_value_sig03E1
      }
    }))),
    var_core_value_sigEE2E = [];
  return Nr(var_core_value_sigBC8B, (var_core_value_sig055E, var_core_value_sig7C77) => {
    let var_core_value_sig9578 = var_core_value_sig055E.value["route"],
      var_core_value_sigA2D3 = var_core_value_sig7C77.value["route"];
    if (var_core_value_sig9578.connector["id"] === var_core_value_sigA2D3.connector["id"]) return;
    let var_core_value_sigC218 = [var_core_value_sig9578.connector["id"], var_core_value_sigA2D3.connector["id"]].sort(),
      var_core_value_sigADEC = br(var_core_value_sig055E.value["segment"], var_core_value_sig7C77.value["segment"]);
    if (var_core_value_sigADEC) {
      var_core_value_sigEE2E.push(Lr({
        rule: "connector-collinear-overlap",
        severity: "error",
        elementIds: [],
        connectorIds: var_core_value_sigC218,
        bounds: var_core_value_sigADEC,
        focusPadding: var_core_value_sigD3C4,
        routePoints: var_core_value_sig9578.points
      }));
      return;
    }
    let var_core_value_sig3D8E = xr(var_core_value_sig055E.value["segment"], var_core_value_sig7C77.value["segment"]);
    !var_core_value_sig3D8E || Tr(var_core_value_sig3D8E, var_core_value_sig9578.points, var_core_value_sigA2D3.points) || var_core_value_sigEE2E.push(Lr({
      rule: "connector-crossing",
      severity: "warning",
      elementIds: [],
      connectorIds: var_core_value_sigC218,
      bounds: Ar(var_core_value_sig3D8E),
      focusPadding: var_core_value_sigD3C4,
      routePoints: var_core_value_sig9578.points
    }));
  }), Vr(var_core_value_sigEE2E);
}
function vr(var_core_value_sigCF06) {
  let var_core_value_sig6BCD = [];
  for (let var_core_value_sig37E5 = 0; var_core_value_sig37E5 < var_core_value_sigCF06.length - 1; var_core_value_sig37E5 += 1) Er(var_core_value_sigCF06[var_core_value_sig37E5], var_core_value_sigCF06[var_core_value_sig37E5 + 1]) || var_core_value_sig6BCD.push({
    start: var_core_value_sigCF06[var_core_value_sig37E5],
    end: var_core_value_sigCF06[var_core_value_sig37E5 + 1]
  });
  return var_core_value_sig6BCD;
}
function yr(var_core_value_sigC664, var_core_value_sig1B7B) {
  let var_core_value_sig1F31 = var_core_value_sigC664.end["x"] - var_core_value_sigC664.start["x"],
    var_core_value_sigEA82 = var_core_value_sigC664.end["y"] - var_core_value_sigC664.start["y"],
    var_core_value_sig65BB = 0,
    var_core_value_sig69B1 = 1,
    var_core_value_sigAEDE = [[-var_core_value_sig1F31, var_core_value_sigC664.start["x"] - var_core_value_sig1B7B.left], [var_core_value_sig1F31, var_core_value_sig1B7B.left + var_core_value_sig1B7B.width - var_core_value_sigC664.start["x"]], [-var_core_value_sigEA82, var_core_value_sigC664.start["y"] - var_core_value_sig1B7B.top], [var_core_value_sigEA82, var_core_value_sig1B7B.top + var_core_value_sig1B7B.height - var_core_value_sigC664.start["y"]]];
  for (let [var_core_value_sigF079, var_core_value_sigFCA0] of var_core_value_sigAEDE) {
    if (Math.abs(var_core_value_sigF079) <= K) {
      if (var_core_value_sigFCA0 < 0) return null;
      continue;
    }
    let var_core_value_sigBB57 = var_core_value_sigFCA0 / var_core_value_sigF079;
    if (var_core_value_sigF079 < 0 ? var_core_value_sig65BB = Math.max(var_core_value_sig65BB, var_core_value_sigBB57) : var_core_value_sig69B1 = Math.min(var_core_value_sig69B1, var_core_value_sigBB57), var_core_value_sig65BB > var_core_value_sig69B1) return null;
  }
  let var_core_value_sig139C = {
      x: var_core_value_sigC664.start["x"] + var_core_value_sig65BB * var_core_value_sig1F31,
      y: var_core_value_sigC664.start["y"] + var_core_value_sig65BB * var_core_value_sigEA82
    },
    var_core_value_sigF2D6 = {
      x: var_core_value_sigC664.start["x"] + var_core_value_sig69B1 * var_core_value_sig1F31,
      y: var_core_value_sigC664.start["y"] + var_core_value_sig69B1 * var_core_value_sigEA82
    };
  return Er(var_core_value_sig139C, var_core_value_sigF2D6) ? null : kr(var_core_value_sig139C, var_core_value_sigF2D6);
}
function br(var_core_value_sig810E, var_core_value_sigABB1) {
  let var_core_value_sig3F70 = var_core_value_sig810E.end["x"] - var_core_value_sig810E.start["x"],
    var_core_value_sig9F91 = var_core_value_sig810E.end["y"] - var_core_value_sig810E.start["y"],
    var_core_value_sigC9C8 = var_core_value_sigABB1.end["x"] - var_core_value_sigABB1.start["x"],
    var_core_value_sigC444 = var_core_value_sigABB1.end["y"] - var_core_value_sigABB1.start["y"];
  if (Math.abs(Sr(var_core_value_sig3F70, var_core_value_sig9F91, var_core_value_sigC9C8, var_core_value_sigC444)) > K || Math.abs(Sr(var_core_value_sig3F70, var_core_value_sig9F91, var_core_value_sigABB1.start["x"] - var_core_value_sig810E.start["x"], var_core_value_sigABB1.start["y"] - var_core_value_sig810E.start["y"])) > K) return null;
  let var_core_value_sig4B40 = Math.abs(var_core_value_sig3F70) >= Math.abs(var_core_value_sig9F91),
    var_core_value_sig9F6D = var_core_value_sig4B40 ? [var_core_value_sig810E.start["x"], var_core_value_sig810E.end["x"]] : [var_core_value_sig810E.start["y"], var_core_value_sig810E.end["y"]],
    var_core_value_sigE1A2 = var_core_value_sig4B40 ? [var_core_value_sigABB1.start["x"], var_core_value_sigABB1.end["x"]] : [var_core_value_sigABB1.start["y"], var_core_value_sigABB1.end["y"]],
    var_core_value_sig4767 = Math.max(Math.min(...var_core_value_sig9F6D), Math.min(...var_core_value_sigE1A2)),
    var_core_value_sig2591 = Math.min(Math.max(...var_core_value_sig9F6D), Math.max(...var_core_value_sigE1A2));
  if (var_core_value_sig2591 - var_core_value_sig4767 <= K) return null;
  let var_core_value_sig7C12 = var_core_value_sigC84D => {
    let var_core_value_sigF2BC = var_core_value_sig4B40 ? var_core_value_sig3F70 : var_core_value_sig9F91,
      var_core_value_sigD37B = (var_core_value_sigC84D - (var_core_value_sig4B40 ? var_core_value_sig810E.start["x"] : var_core_value_sig810E.start["y"])) / var_core_value_sigF2BC;
    return {
      x: var_core_value_sig810E.start["x"] + var_core_value_sigD37B * var_core_value_sig3F70,
      y: var_core_value_sig810E.start["y"] + var_core_value_sigD37B * var_core_value_sig9F91
    };
  };
  return kr(var_core_value_sig7C12(var_core_value_sig4767), var_core_value_sig7C12(var_core_value_sig2591));
}
function xr(var_core_value_sig8EC5, var_core_value_sig4B1B) {
  let var_core_value_sig14C3 = var_core_value_sig8EC5.end["x"] - var_core_value_sig8EC5.start["x"],
    var_core_value_sig95A8 = var_core_value_sig8EC5.end["y"] - var_core_value_sig8EC5.start["y"],
    var_core_value_sig3F90 = var_core_value_sig4B1B.end["x"] - var_core_value_sig4B1B.start["x"],
    var_core_value_sigB489 = var_core_value_sig4B1B.end["y"] - var_core_value_sig4B1B.start["y"],
    var_core_value_sig76E7 = Sr(var_core_value_sig14C3, var_core_value_sig95A8, var_core_value_sig3F90, var_core_value_sigB489);
  if (Math.abs(var_core_value_sig76E7) <= K) return null;
  let var_core_value_sig7E7F = var_core_value_sig4B1B.start["x"] - var_core_value_sig8EC5.start["x"],
    var_core_value_sig7947 = var_core_value_sig4B1B.start["y"] - var_core_value_sig8EC5.start["y"],
    var_core_value_sig7FEC = Sr(var_core_value_sig7E7F, var_core_value_sig7947, var_core_value_sig3F90, var_core_value_sigB489) / var_core_value_sig76E7,
    var_core_value_sig73D2 = Sr(var_core_value_sig7E7F, var_core_value_sig7947, var_core_value_sig14C3, var_core_value_sig95A8) / var_core_value_sig76E7;
  return var_core_value_sig7FEC < 0 || var_core_value_sig7FEC > 1 || var_core_value_sig73D2 < 0 || var_core_value_sig73D2 > 1 ? null : {
    x: var_core_value_sig8EC5.start["x"] + var_core_value_sig7FEC * var_core_value_sig14C3,
    y: var_core_value_sig8EC5.start["y"] + var_core_value_sig7FEC * var_core_value_sig95A8
  };
}
function Sr(var_core_value_sig6BDA, var_core_value_sig3A251, var_core_value_sigCBAA, var_core_value_sigC096) {
  return var_core_value_sig6BDA * var_core_value_sigC096 - var_core_value_sig3A251 * var_core_value_sigCBAA;
}
function Cr(var_core_value_sig6140, var_core_value_sigDD84) {
  let var_core_value_sig7BA5 = var_core_value_sigDD84.end["x"] - var_core_value_sigDD84.start["x"],
    var_core_value_sig543F = var_core_value_sigDD84.end["y"] - var_core_value_sigDD84.start["y"],
    var_core_value_sigBF30 = var_core_value_sig7BA5 * var_core_value_sig7BA5 + var_core_value_sig543F * var_core_value_sig543F;
  if (var_core_value_sigBF30 <= K) return Math.hypot(var_core_value_sig6140.x - var_core_value_sigDD84.start["x"], var_core_value_sig6140.y - var_core_value_sigDD84.start["y"]);
  let var_core_value_sigAA0E = Math.max(0, Math.min(1, ((var_core_value_sig6140.x - var_core_value_sigDD84.start["x"]) * var_core_value_sig7BA5 + (var_core_value_sig6140.y - var_core_value_sigDD84.start["y"]) * var_core_value_sig543F) / var_core_value_sigBF30)),
    var_core_value_sig3747 = {
      x: var_core_value_sigDD84.start["x"] + var_core_value_sigAA0E * var_core_value_sig7BA5,
      y: var_core_value_sigDD84.start["y"] + var_core_value_sigAA0E * var_core_value_sig543F
    };
  return Math.hypot(var_core_value_sig6140.x - var_core_value_sig3747.x, var_core_value_sig6140.y - var_core_value_sig3747.y);
}
function wr(var_core_value_sig9B6A, var_core_value_sig7BFA) {
  let var_core_value_sig09FA = var_core_value_sig7BFA.left + var_core_value_sig7BFA.width,
    var_core_value_sig6881 = var_core_value_sig7BFA.top + var_core_value_sig7BFA.height,
    var_core_value_sigAB94 = var_core_value_sig9B6A.x < var_core_value_sig7BFA.left ? var_core_value_sig7BFA.left - var_core_value_sig9B6A.x : var_core_value_sig9B6A.x > var_core_value_sig09FA ? var_core_value_sig9B6A.x - var_core_value_sig09FA : 0,
    var_core_value_sigEE05 = var_core_value_sig9B6A.y < var_core_value_sig7BFA.top ? var_core_value_sig7BFA.top - var_core_value_sig9B6A.y : var_core_value_sig9B6A.y > var_core_value_sig6881 ? var_core_value_sig9B6A.y - var_core_value_sig6881 : 0;
  return var_core_value_sigAB94 > 0 || var_core_value_sigEE05 > 0 ? Math.hypot(var_core_value_sigAB94, var_core_value_sigEE05) : Math.min(Math.abs(var_core_value_sig9B6A.x - var_core_value_sig7BFA.left), Math.abs(var_core_value_sig9B6A.x - var_core_value_sig09FA), Math.abs(var_core_value_sig9B6A.y - var_core_value_sig7BFA.top), Math.abs(var_core_value_sig9B6A.y - var_core_value_sig6881));
}
function Tr(var_core_value_sig0F0E, var_core_value_sig3A40, var_core_value_sig2377) {
  let var_core_value_sig4EEF = [var_core_value_sig3A40[0], var_core_value_sig3A40[var_core_value_sig3A40.length - 1]],
    var_core_value_sigC58E = [var_core_value_sig2377[0], var_core_value_sig2377[var_core_value_sig2377.length - 1]];
  return var_core_value_sig4EEF.some(var_core_value_sigFA28 => Er(var_core_value_sigFA28, var_core_value_sig0F0E)) && var_core_value_sigC58E.some(var_core_value_sig93BE => Er(var_core_value_sig93BE, var_core_value_sig0F0E));
}
function Er(var_core_value_sig9063, var_core_value_sig99CE) {
  return Math.abs(var_core_value_sig9063.x - var_core_value_sig99CE.x) <= K && Math.abs(var_core_value_sig9063.y - var_core_value_sig99CE.y) <= K;
}
function Dr(var_core_value_sigFB15, var_core_value_sig9AF5) {
  let var_core_value_sigCD2E = Math.max(var_core_value_sigFB15.left, var_core_value_sig9AF5.left),
    var_core_value_sig60CE = Math.max(var_core_value_sigFB15.top, var_core_value_sig9AF5.top),
    var_core_value_sigFA1B = Math.min(var_core_value_sigFB15.left + var_core_value_sigFB15.width, var_core_value_sig9AF5.left + var_core_value_sig9AF5.width),
    var_core_value_sig5FEF = Math.min(var_core_value_sigFB15.top + var_core_value_sigFB15.height, var_core_value_sig9AF5.top + var_core_value_sig9AF5.height);
  return var_core_value_sigFA1B - var_core_value_sigCD2E <= K || var_core_value_sig5FEF - var_core_value_sig60CE <= K ? null : {
    left: var_core_value_sigCD2E,
    top: var_core_value_sig60CE,
    width: var_core_value_sigFA1B - var_core_value_sigCD2E,
    height: var_core_value_sig5FEF - var_core_value_sig60CE
  };
}
function Or(var_core_value_sigD48C) {
  if (var_core_value_sigD48C.length === 0) return null;
  let var_core_value_sig41E9 = Math.min(...var_core_value_sigD48C.map(var_core_value_sigABEC => var_core_value_sigABEC.left)),
    var_core_value_sig3807 = Math.min(...var_core_value_sigD48C.map(var_core_value_sig2712 => var_core_value_sig2712.top)),
    var_core_value_sig5409 = Math.max(...var_core_value_sigD48C.map(var_core_value_sig0B9E => var_core_value_sig0B9E.left + var_core_value_sig0B9E.width)),
    var_core_value_sig680F = Math.max(...var_core_value_sigD48C.map(var_core_value_sigC545 => var_core_value_sigC545.top + var_core_value_sigC545.height));
  return {
    left: var_core_value_sig41E9,
    top: var_core_value_sig3807,
    width: var_core_value_sig5409 - var_core_value_sig41E9,
    height: var_core_value_sig680F - var_core_value_sig3807
  };
}
function kr(var_core_value_sig2E36, var_core_value_sigBA94) {
  return {
    left: Math.min(var_core_value_sig2E36.x, var_core_value_sigBA94.x),
    top: Math.min(var_core_value_sig2E36.y, var_core_value_sigBA94.y),
    width: Math.abs(var_core_value_sigBA94.x - var_core_value_sig2E36.x),
    height: Math.abs(var_core_value_sigBA94.y - var_core_value_sig2E36.y)
  };
}
function Ar(var_core_value_sigA847) {
  return {
    left: var_core_value_sigA847.x,
    top: var_core_value_sigA847.y,
    width: 0,
    height: 0
  };
}
function jr(var_core_value_sig1AB4, var_core_value_sig7272) {
  return {
    left: var_core_value_sig1AB4.left - var_core_value_sig7272,
    top: var_core_value_sig1AB4.top - var_core_value_sig7272,
    width: var_core_value_sig1AB4.width + var_core_value_sig7272 * 2,
    height: var_core_value_sig1AB4.height + var_core_value_sig7272 * 2
  };
}
function Mr(var_core_value_sig885F, var_core_value_sigB7C7, var_core_value_sig6934) {
  let var_core_value_sig2842 = [...var_core_value_sig885F.flatMap((var_core_value_sig12A7, var_core_value_sig6F4E) => Pr(var_core_value_sig12A7.bounds, "left", var_core_value_sig6F4E)), ...var_core_value_sigB7C7.flatMap((var_core_value_sigA021, var_core_value_sig49D9) => Pr(var_core_value_sigA021.bounds, "right", var_core_value_sig49D9))].sort(Fr),
    var_core_value_sigA5A3 = new Map(),
    var_core_value_sig590F = new Map();
  for (let var_core_value_sig320C of var_core_value_sig2842) {
    if (var_core_value_sig320C.kind === "end") {
      var_core_value_sig320C.side === "left" ? var_core_value_sigA5A3.delete(var_core_value_sig320C.index) : var_core_value_sig590F.delete(var_core_value_sig320C.index);
      continue;
    }
    if (var_core_value_sig320C.side === "left") {
      let var_core_value_sigEFD4 = var_core_value_sig885F[var_core_value_sig320C.index];
      for (let var_core_value_sig7524 of var_core_value_sig590F.values()) Ir(var_core_value_sigEFD4.bounds, var_core_value_sig7524.bounds) && var_core_value_sig6934(var_core_value_sigEFD4, var_core_value_sig7524);
      var_core_value_sigA5A3.set(var_core_value_sig320C.index, var_core_value_sigEFD4);
    } else {
      let var_core_value_sig861B = var_core_value_sigB7C7[var_core_value_sig320C.index];
      for (let var_core_value_sig2AD8 of var_core_value_sigA5A3.values()) Ir(var_core_value_sig2AD8.bounds, var_core_value_sig861B.bounds) && var_core_value_sig6934(var_core_value_sig2AD8, var_core_value_sig861B);
      var_core_value_sig590F.set(var_core_value_sig320C.index, var_core_value_sig861B);
    }
  }
}
function Nr(var_core_value_sigECA2, var_core_value_sigCAC4) {
  let var_core_value_sig2017 = var_core_value_sigECA2.flatMap((var_core_value_sigE7F0, var_core_value_sigE837) => Pr(var_core_value_sigE7F0.bounds, "left", var_core_value_sigE837)).sort(Fr),
    var_core_value_sig49A4 = new Map();
  for (let var_core_value_sig34F4 of var_core_value_sig2017) {
    if (var_core_value_sig34F4.kind === "end") {
      var_core_value_sig49A4.delete(var_core_value_sig34F4.index);
      continue;
    }
    let var_core_value_sig7C4A = var_core_value_sigECA2[var_core_value_sig34F4.index];
    for (let var_core_value_sig5237 of var_core_value_sig49A4.values()) Ir(var_core_value_sig7C4A.bounds, var_core_value_sig5237.bounds) && var_core_value_sigCAC4(var_core_value_sig5237, var_core_value_sig7C4A);
    var_core_value_sig49A4.set(var_core_value_sig34F4.index, var_core_value_sig7C4A);
  }
}
function Pr(var_core_value_sigA166, var_core_value_sigEB84, var_core_value_sig3B17) {
  return [{
    x: var_core_value_sigA166.left,
    kind: "start",
    side: var_core_value_sigEB84,
    index: var_core_value_sig3B17
  }, {
    x: var_core_value_sigA166.left + var_core_value_sigA166.width,
    kind: "end",
    side: var_core_value_sigEB84,
    index: var_core_value_sig3B17
  }];
}
function Fr(var_core_value_sig7868, var_core_value_sig9AFE) {
  return var_core_value_sig7868.x === var_core_value_sig9AFE.x ? var_core_value_sig7868.kind === var_core_value_sig9AFE.kind ? var_core_value_sig7868.side === var_core_value_sig9AFE.side ? var_core_value_sig7868.index - var_core_value_sig9AFE.index : var_core_value_sig7868.side === "left" ? -1 : 1 : var_core_value_sig7868.kind === "start" ? -1 : 1 : var_core_value_sig7868.x - var_core_value_sig9AFE.x;
}
function Ir(var_core_value_sig244E, var_core_value_sigD4E9) {
  return var_core_value_sig244E.top <= var_core_value_sigD4E9.top + var_core_value_sigD4E9.height + K && var_core_value_sigD4E9.top <= var_core_value_sig244E.top + var_core_value_sig244E.height + K;
}
function Lr(var_core_value_sig969F) {
  let var_core_value_sig6C52 = [...var_core_value_sig969F.connectorIds, ...var_core_value_sig969F.elementIds].join(":"),
    var_core_value_sig3A441 = var_core_value_sig969F.endpoint ? ":" + var_core_value_sig969F.endpoint : "";
  return {
    id: var_core_value_sig969F.rule + ":" + var_core_value_sig6C52 + var_core_value_sig3A441 + ":" + zr(var_core_value_sig969F.bounds["left"]) + ":" + zr(var_core_value_sig969F.bounds["top"]),
    rule: var_core_value_sig969F.rule,
    severity: var_core_value_sig969F.severity,
    elementIds: [...var_core_value_sig969F.elementIds],
    connectorIds: [...var_core_value_sig969F.connectorIds],
    bounds: {
      ...var_core_value_sig969F.bounds
    },
    focusBounds: Rr(var_core_value_sig969F.bounds, var_core_value_sig969F.focusPadding),
    ...(var_core_value_sig969F.routePoints ? {
      routePoints: var_core_value_sig969F.routePoints["map"](var_core_value_sigA45D => ({
        ...var_core_value_sigA45D
      }))
    } : {}),
    ...(var_core_value_sig969F.endpoint ? {
      endpoint: var_core_value_sig969F.endpoint
    } : {}),
    ...(var_core_value_sig969F.suggestedAction ? {
      suggestedAction: var_core_value_sig969F.suggestedAction
    } : {})
  };
}
function Rr(var_core_value_sig9631, var_core_value_sig8407) {
  let var_core_value_sig635F = Math.max(var_core_value_sig9631.width + var_core_value_sig8407 * 2, 96),
    var_core_value_sig79E0 = Math.max(var_core_value_sig9631.height + var_core_value_sig8407 * 2, 96),
    var_core_value_sig1E28 = var_core_value_sig9631.left + var_core_value_sig9631.width / 2,
    var_core_value_sigEEC3 = var_core_value_sig9631.top + var_core_value_sig9631.height / 2;
  return {
    left: var_core_value_sig1E28 - var_core_value_sig635F / 2,
    top: var_core_value_sigEEC3 - var_core_value_sig79E0 / 2,
    width: var_core_value_sig635F,
    height: var_core_value_sig79E0
  };
}
function zr(var_core_value_sigFAEC) {
  return Number(var_core_value_sigFAEC.toFixed(3)).toString();
}
function Br(var_core_value_sig1282, var_core_value_sig80D0) {
  let var_core_value_sig6CEE = var_core_value_sig1282.severity["localeCompare"](var_core_value_sig80D0.severity);
  if (var_core_value_sig6CEE !== 0) return var_core_value_sig6CEE;
  let var_core_value_sig4B27 = var_core_value_sig1282.rule["localeCompare"](var_core_value_sig80D0.rule);
  return var_core_value_sig4B27 === 0 ? var_core_value_sig1282.id["localeCompare"](var_core_value_sig80D0.id) : var_core_value_sig4B27;
}
function Vr(var_core_value_sig153F) {
  let var_core_value_sigC847 = new Map();
  for (let var_core_value_sig1BC7 of var_core_value_sig153F) var_core_value_sigC847.has(var_core_value_sig1BC7.id) || var_core_value_sigC847.set(var_core_value_sig1BC7.id, var_core_value_sig1BC7);
  return Array.from(var_core_value_sigC847.values());
}
function Hr(var_core_value_sig114E) {
  let var_core_value_sig88EA = new Set(var_core_value_sig114E.filter(var_core_value_sig4956 => var_core_value_sig4956.rule === "connector-free-endpoint-near-dashed-connector").map(var_core_value_sigCC9E => Ur(var_core_value_sigCC9E)));
  return var_core_value_sig114E.filter(var_core_value_sig444C => var_core_value_sig444C.rule !== "connector-crossing" || !var_core_value_sig88EA.has(Ur(var_core_value_sig444C)));
}
function Ur(var_core_value_sig4E97) {
  return [...var_core_value_sig4E97.connectorIds].sort().join(":") + ":" + zr(var_core_value_sig4E97.bounds["left"]) + ":" + zr(var_core_value_sig4E97.bounds["top"]);
}
const Wr = {
    id: "board.command.analyze-model-layout",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sigBE44, var_core_value_sigE675) => {
      if (!(var_core_value_sigE675 != null && var_core_value_sigE675.unitId) || !var_core_value_sigE675.subUnitId) return false;
      let var_core_value_sig4346 = var_core_value_sigBE44.get(L);
      return Zn(var_core_value_sig4346.getElementData(var_core_value_sigE675.unitId, var_core_value_sigE675.subUnitId), var_core_value_sig4346.getElementOrder(var_core_value_sigE675.unitId, var_core_value_sigE675.subUnitId), {
        source: "model",
        focusPadding: var_core_value_sigE675.focusPadding
      });
    }
  },
  Gr = var_core_value_sig72C0("board.chart-adapter.service");
var Kr = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sigE42E) {
    return this._adapters["push"](var_core_value_sigE42E), var_core_value_sig4D7C(() => {
      let var_core_value_sigE799 = this._adapters["indexOf"](var_core_value_sigE42E);
      var_core_value_sigE799 >= 0 && this._adapters["splice"](var_core_value_sigE799, 1);
    });
  }
  getInsertChartMutationInfos(var_core_value_sigF039) {
    for (let var_core_value_sigB601 of this._adapters) {
      let var_core_value_sigBB00 = var_core_value_sigB601.getInsertChartMutationInfos(var_core_value_sigF039);
      if (var_core_value_sigBB00) return var_core_value_sigBB00;
    }
    return null;
  }
  getRemoveChartMutationInfos(var_core_value_sigA321) {
    let var_core_value_sigBF4C = {
      redoMutations: [],
      undoMutations: []
    };
    for (let var_core_value_sig8B711 of this._adapters) {
      var var_core_value_sig3457;
      let var_core_value_sig7E54 = (var_core_value_sig3457 = var_core_value_sig8B711.getRemoveChartMutationInfos) == null ? undefined : var_core_value_sig3457.call(var_core_value_sig8B711, var_core_value_sigA321);
      var_core_value_sig7E54 && (var_core_value_sigBF4C.redoMutations["push"](...var_core_value_sig7E54.redoMutations), var_core_value_sigBF4C.undoMutations["push"](...var_core_value_sig7E54.undoMutations));
    }
    return var_core_value_sigBF4C;
  }
};
const qr = {
  id: "board.command.insert-chart",
  type: var_core_value_sigE0AC.COMMAND,
  handler: (var_core_value_sigB49C, var_core_value_sigA044) => {
    if (!var_core_value_sigA044) return false;
    let var_core_value_sigD2F3 = var_core_value_sigB49C.get(Gr).getInsertChartMutationInfos(var_core_value_sigA044);
    if (!var_core_value_sigD2F3 || var_core_value_sigD2F3.redoMutations["length"] === 0) return false;
    let var_core_value_sig27CD = var_core_value_sig77FC(var_core_value_sigD2F3.redoMutations, var_core_value_sigB49C.get(var_core_value_sig88BA));
    return var_core_value_sig27CD.result ? (var_core_value_sigB49C.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sigA044.unitId,
      redoMutations: var_core_value_sigD2F3.redoMutations,
      undoMutations: var_core_value_sigD2F3.undoMutations
    }), true) : (Jr(var_core_value_sigD2F3.rollbackMutationGroups["slice"](0, var_core_value_sig27CD.index).reverse(), var_core_value_sigB49C.get(var_core_value_sig88BA)), false);
  }
};
function Jr(var_core_value_sig8977, var_core_value_sigE931) {
  var_core_value_sig8977.forEach(var_core_value_sig4A08 => {
    var_core_value_sig77FC(var_core_value_sig4A08, var_core_value_sigE931);
  });
}
function Yr(var_core_value_sig9F9C, var_core_value_sig0728) {
  return var_core_value_sig9F9C.kind === "free" ? {
    ...var_core_value_sig9F9C,
    x: var_core_value_sig9F9C.x + var_core_value_sig0728.x,
    y: var_core_value_sig9F9C.y + var_core_value_sig0728.y
  } : var_core_value_sig9F9C.fallbackPoint ? {
    ...var_core_value_sig9F9C,
    fallbackPoint: {
      x: var_core_value_sig9F9C.fallbackPoint["x"] + var_core_value_sig0728.x,
      y: var_core_value_sig9F9C.fallbackPoint["y"] + var_core_value_sig0728.y
    }
  } : var_core_value_sig9F9C;
}
function Xr(var_core_value_sigDC83, var_core_value_sig56A8) {
  return var_core_value_sigDC83.kind === "free" ? {
    ...var_core_value_sigDC83,
    x: var_core_value_sigDC83.x + var_core_value_sig56A8.x,
    y: var_core_value_sigDC83.y + var_core_value_sig56A8.y
  } : var_core_value_sigDC83;
}
function Zr(var_core_value_sigF487, var_core_value_sigC62E) {
  return var_core_value_sigF487.kind === "manual" ? {
    ...var_core_value_sigF487,
    x: var_core_value_sigF487.x + var_core_value_sigC62E.x,
    y: var_core_value_sigF487.y + var_core_value_sigC62E.y
  } : var_core_value_sigF487;
}
function Qr(var_core_value_sigCD50, var_core_value_sig51C4, var_core_value_sigEECD) {
  return var_core_value_sigCD50.kind === "manual" ? {
    ...var_core_value_sigCD50,
    x: var_core_value_sigCD50.x + var_core_value_sig51C4.x,
    y: var_core_value_sigCD50.y + var_core_value_sig51C4.y,
    ...(var_core_value_sigCD50.endpoint ? {
      endpoint: var_core_value_sigEECD(var_core_value_sigCD50.endpoint, var_core_value_sig51C4)
    } : null)
  } : var_core_value_sigCD50;
}
function $r(var_core_value_sigB655, var_core_value_sigF30A) {
  return var_core_value_sigB655.kind === "manual" ? {
    ...var_core_value_sigB655,
    x: var_core_value_sigB655.x + var_core_value_sigF30A.x,
    y: var_core_value_sigB655.y + var_core_value_sigF30A.y
  } : var_core_value_sigB655;
}
function ei(var_core_value_sigD81A, var_core_value_sigBE17, var_core_value_sigBB5E) {
  var var_core_value_sigB4401, var_core_value_sig9D0F;
  let var_core_value_sig0354 = var_core_value_sigD81A.connectorData["curveData"];
  return var_core_value_sig0354 && {
    ...var_core_value_sig0354,
    anchors: (var_core_value_sigB4401 = var_core_value_sig0354.anchors) == null ? undefined : var_core_value_sigB4401.map(var_core_value_sig1BC4 => Qr(var_core_value_sig1BC4, var_core_value_sigBE17, var_core_value_sigBB5E)),
    controls: (var_core_value_sig9D0F = var_core_value_sig0354.controls) == null ? undefined : var_core_value_sig9D0F.map(var_core_value_sig9EAB => $r(var_core_value_sig9EAB, var_core_value_sigBE17))
  };
}
function ti(var_core_value_sig12F4, var_core_value_sigDCEC) {
  let var_core_value_sigB5C8 = var_core_value_sig12F4.connectorData["orthogonalData"];
  return var_core_value_sigB5C8 != null && var_core_value_sigB5C8.routePoints ? {
    ...var_core_value_sigB5C8,
    routePoints: var_core_value_sigB5C8.routePoints["map"](var_core_value_sigA5C3 => Zr(var_core_value_sigA5C3, var_core_value_sigDCEC))
  } : var_core_value_sigB5C8;
}
function ni(var_core_value_sig8320, var_core_value_sig1C1B) {
  var var_core_value_sig70FD;
  let var_core_value_sig988F = ti(var_core_value_sig8320, var_core_value_sig1C1B),
    var_core_value_sig50A1 = ei(var_core_value_sig8320, var_core_value_sig1C1B, Yr),
    var_core_value_sig71D2 = {
      ...var_core_value_sig8320.connectorData,
      start: Yr(var_core_value_sig8320.connectorData["start"], var_core_value_sig1C1B),
      end: Yr(var_core_value_sig8320.connectorData["end"], var_core_value_sig1C1B),
      waypoints: (var_core_value_sig70FD = var_core_value_sig8320.connectorData["waypoints"]) == null ? undefined : var_core_value_sig70FD.map(var_core_value_sig3A1E => Zr(var_core_value_sig3A1E, var_core_value_sig1C1B))
    };
  return var_core_value_sig988F ? var_core_value_sig71D2.orthogonalData = var_core_value_sig988F : delete var_core_value_sig71D2.orthogonalData, var_core_value_sig50A1 ? var_core_value_sig71D2.curveData = var_core_value_sig50A1 : delete var_core_value_sig71D2.curveData, {
    ...var_core_value_sig8320,
    connectorData: var_core_value_sig71D2
  };
}
function ri(var_core_value_sigC113, var_core_value_sig2326) {
  var var_core_value_sig9007;
  let var_core_value_sig8726 = ti(var_core_value_sigC113, var_core_value_sig2326),
    var_core_value_sig4358 = ei(var_core_value_sigC113, var_core_value_sig2326, Xr),
    var_core_value_sig9574 = {
      ...var_core_value_sigC113.connectorData,
      start: Xr(var_core_value_sigC113.connectorData["start"], var_core_value_sig2326),
      end: Xr(var_core_value_sigC113.connectorData["end"], var_core_value_sig2326),
      waypoints: (var_core_value_sig9007 = var_core_value_sigC113.connectorData["waypoints"]) == null ? undefined : var_core_value_sig9007.map(var_core_value_sigDC92 => Zr(var_core_value_sigDC92, var_core_value_sig2326))
    };
  return var_core_value_sig8726 ? var_core_value_sig9574.orthogonalData = var_core_value_sig8726 : delete var_core_value_sig9574.orthogonalData, var_core_value_sig4358 ? var_core_value_sig9574.curveData = var_core_value_sig4358 : delete var_core_value_sig9574.curveData, {
    ...var_core_value_sigC113,
    connectorData: var_core_value_sig9574
  };
}
function ii(var_core_value_sigD610, var_core_value_sigAF55, var_core_value_sig7409) {
  return var_core_value_sigD610.kind === "free" || !var_core_value_sigAF55.has(var_core_value_sigD610.shapeId) || !var_core_value_sigD610.fallbackPoint ? var_core_value_sigD610 : {
    ...var_core_value_sigD610,
    fallbackPoint: {
      x: var_core_value_sigD610.fallbackPoint["x"] + var_core_value_sig7409.x,
      y: var_core_value_sigD610.fallbackPoint["y"] + var_core_value_sig7409.y
    }
  };
}
function ai(var_core_value_sigD106, var_core_value_sig7552) {
  var var_core_value_sig56D1;
  let var_core_value_sig3D12 = (var_core_value_sig56D1 = H(var_core_value_sig7552, var_core_value_sigD106.shapeId)) == null ? undefined : var_core_value_sig56D1.worldTransform;
  if (!var_core_value_sig3D12) return var_core_value_sigD106.fallbackPoint ? {
    ...var_core_value_sigD106.fallbackPoint
  } : null;
  let var_core_value_sig8952 = var_core_value_sig3D12.left ?? 0,
    var_core_value_sigB409 = var_core_value_sig3D12.top ?? 0,
    var_core_value_sig3D2F = var_core_value_sig3D12.width ?? 0,
    var_core_value_sigDBDA = var_core_value_sig3D12.height ?? 0,
    var_core_value_sig1EFA = Math.max(0, Math.min(1, var_core_value_sigD106.segmentT));
  switch ((var_core_value_sigD106.segmentIndex % 4 + 4) % 4) {
    case 0:
      return {
        x: var_core_value_sig8952 + var_core_value_sig3D2F * var_core_value_sig1EFA,
        y: var_core_value_sigB409
      };
    case 1:
      return {
        x: var_core_value_sig8952 + var_core_value_sig3D2F,
        y: var_core_value_sigB409 + var_core_value_sigDBDA * var_core_value_sig1EFA
      };
    case 2:
      return {
        x: var_core_value_sig8952 + var_core_value_sig3D2F * (1 - var_core_value_sig1EFA),
        y: var_core_value_sigB409 + var_core_value_sigDBDA
      };
    default:
      return {
        x: var_core_value_sig8952,
        y: var_core_value_sigB409 + var_core_value_sigDBDA * (1 - var_core_value_sig1EFA)
      };
  }
}
function oi(var_core_value_sig7CF4, var_core_value_sigE956) {
  var var_core_value_sig189D;
  let var_core_value_sigE26F = (var_core_value_sig189D = H(var_core_value_sigE956, var_core_value_sig7CF4.shapeId)) == null ? undefined : var_core_value_sig189D.worldTransform;
  if (!var_core_value_sigE26F) return var_core_value_sig7CF4.fallbackPoint ? {
    ...var_core_value_sig7CF4.fallbackPoint
  } : null;
  let var_core_value_sig8212 = var_core_value_sigE26F.left ?? 0,
    var_core_value_sig9A60 = var_core_value_sigE26F.top ?? 0,
    var_core_value_sig5EF5 = var_core_value_sigE26F.width ?? 0,
    var_core_value_sig5324 = var_core_value_sigE26F.height ?? 0,
    var_core_value_sig01301 = var_core_value_sig7CF4.connectionPosition ?? 0.5;
  switch ((var_core_value_sig7CF4.connectionSiteId % 4 + 4) % 4) {
    case 0:
      return {
        x: var_core_value_sig8212 + var_core_value_sig5EF5 * var_core_value_sig01301,
        y: var_core_value_sig9A60
      };
    case 1:
      return {
        x: var_core_value_sig8212 + var_core_value_sig5EF5,
        y: var_core_value_sig9A60 + var_core_value_sig5324 * var_core_value_sig01301
      };
    case 2:
      return {
        x: var_core_value_sig8212 + var_core_value_sig5EF5 * var_core_value_sig01301,
        y: var_core_value_sig9A60 + var_core_value_sig5324
      };
    default:
      return {
        x: var_core_value_sig8212,
        y: var_core_value_sig9A60 + var_core_value_sig5324 * var_core_value_sig01301
      };
  }
}
function si(var_core_value_sig5838, var_core_value_sigB9FE, var_core_value_sig41A5) {
  var var_core_value_sig6D3D;
  if (var_core_value_sig5838.kind !== "shapeBoundary" && var_core_value_sig5838.kind !== "shapeSite" || !var_core_value_sigB9FE.has(var_core_value_sig5838.shapeId)) return var_core_value_sig5838;
  let var_core_value_sigB191 = var_core_value_sig5838.kind === "shapeBoundary" ? ai(var_core_value_sig5838, var_core_value_sig41A5) : oi(var_core_value_sig5838, var_core_value_sig41A5);
  return !var_core_value_sigB191 || ((var_core_value_sig6D3D = var_core_value_sig5838.fallbackPoint) == null ? undefined : var_core_value_sig6D3D.x) === var_core_value_sigB191.x && var_core_value_sig5838.fallbackPoint["y"] === var_core_value_sigB191.y ? var_core_value_sig5838 : {
    ...var_core_value_sig5838,
    fallbackPoint: var_core_value_sigB191
  };
}
function ci(var_core_value_sig949D) {
  return var_core_value_sig949D.kind === "free" ? {
    x: var_core_value_sig949D.x,
    y: var_core_value_sig949D.y
  } : var_core_value_sig949D.fallbackPoint ? {
    ...var_core_value_sig949D.fallbackPoint
  } : null;
}
function li(var_core_value_sig4113) {
  var var_core_value_sigEC12, var_core_value_sigC932, var_core_value_sigDE39;
  let var_core_value_sig1529 = [ci(var_core_value_sig4113.connectorData["start"]), ...(var_core_value_sig4113.connectorData["waypoints"] ?? []).filter(var_core_value_sig3515 => var_core_value_sig3515.kind === "manual").map(var_core_value_sigC2A0 => ({
    x: var_core_value_sigC2A0.x,
    y: var_core_value_sigC2A0.y
  })), ...(((var_core_value_sigEC12 = var_core_value_sig4113.connectorData["orthogonalData"]) == null ? undefined : var_core_value_sigEC12.routePoints) ?? []).filter(var_core_value_sig7C65 => var_core_value_sig7C65.kind === "manual").map(var_core_value_sig7F05 => ({
    x: var_core_value_sig7F05.x,
    y: var_core_value_sig7F05.y
  })), ...(((var_core_value_sigC932 = var_core_value_sig4113.connectorData["curveData"]) == null ? undefined : var_core_value_sigC932.anchors) ?? []).filter(var_core_value_sig41F3 => var_core_value_sig41F3.kind === "manual").map(var_core_value_sigF455 => ({
    x: var_core_value_sigF455.x,
    y: var_core_value_sigF455.y
  })), ...(((var_core_value_sigDE39 = var_core_value_sig4113.connectorData["curveData"]) == null ? undefined : var_core_value_sigDE39.controls) ?? []).filter(var_core_value_sig6E78 => var_core_value_sig6E78.kind === "manual").map(var_core_value_sigB3EE => ({
    x: var_core_value_sigB3EE.x,
    y: var_core_value_sigB3EE.y
  })), ci(var_core_value_sig4113.connectorData["end"])].filter(var_core_value_sigC50A => !!var_core_value_sigC50A);
  if (var_core_value_sig1529.length === 0) return var_core_value_sig4113.transform;
  let var_core_value_sigAFD8 = Math.min(...var_core_value_sig1529.map(var_core_value_sig11D0 => var_core_value_sig11D0.x)),
    var_core_value_sig6017 = Math.min(...var_core_value_sig1529.map(var_core_value_sigB8ED => var_core_value_sigB8ED.y)),
    var_core_value_sigC66C = Math.max(...var_core_value_sig1529.map(var_core_value_sig8EAE => var_core_value_sig8EAE.x)),
    var_core_value_sigC5AC = Math.max(...var_core_value_sig1529.map(var_core_value_sig1CDD => var_core_value_sig1CDD.y));
  return {
    ...var_core_value_sig4113.transform,
    left: var_core_value_sigAFD8,
    top: var_core_value_sig6017,
    width: Math.max(1, var_core_value_sigC66C - var_core_value_sigAFD8),
    height: Math.max(1, var_core_value_sigC5AC - var_core_value_sig6017),
    rotation: 0
  };
}
function ui(var_core_value_sig5880, var_core_value_sigF7E2, var_core_value_sigDEEA) {
  let var_core_value_sig49D1 = {
    ...var_core_value_sig5880,
    connectorData: {
      ...var_core_value_sig5880.connectorData,
      start: ii(var_core_value_sig5880.connectorData["start"], var_core_value_sigF7E2, var_core_value_sigDEEA),
      end: ii(var_core_value_sig5880.connectorData["end"], var_core_value_sigF7E2, var_core_value_sigDEEA)
    }
  };
  return var_core_value_sig49D1.connectorData["start"] === var_core_value_sig5880.connectorData["start"] && var_core_value_sig49D1.connectorData["end"] === var_core_value_sig5880.connectorData["end"] ? var_core_value_sig5880 : {
    ...var_core_value_sig49D1,
    transform: li(var_core_value_sig49D1)
  };
}
function di(var_core_value_sigEDEC, var_core_value_sig4F7B, var_core_value_sig8269) {
  let var_core_value_sigB092 = {
    ...var_core_value_sigEDEC,
    connectorData: {
      ...var_core_value_sigEDEC.connectorData,
      start: si(var_core_value_sigEDEC.connectorData["start"], var_core_value_sig4F7B, var_core_value_sig8269),
      end: si(var_core_value_sigEDEC.connectorData["end"], var_core_value_sig4F7B, var_core_value_sig8269)
    }
  };
  return var_core_value_sigB092.connectorData["start"] === var_core_value_sigEDEC.connectorData["start"] && var_core_value_sigB092.connectorData["end"] === var_core_value_sigEDEC.connectorData["end"] ? var_core_value_sigEDEC : {
    ...var_core_value_sigB092,
    transform: li(var_core_value_sigB092)
  };
}
function fi(var_core_value_sigC04F) {
  return {
    left: var_core_value_sigC04F.left ?? 0,
    top: var_core_value_sigC04F.top ?? 0,
    width: var_core_value_sigC04F.width ?? 0,
    height: var_core_value_sigC04F.height ?? 0,
    angle: var_core_value_sigC04F.rotation ?? 0,
    flipX: var_core_value_sigC04F.flipX,
    flipY: var_core_value_sigC04F.flipY
  };
}
function pi(var_core_value_sig8B16) {
  return var_core_value_sig8B16.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
}
function mi(var_core_value_sig9640) {
  let var_core_value_sig34AB = pi(var_core_value_sig9640.text).split("\x0a"),
    var_core_value_sig0BE5 = var_core_value_sig34AB.join("\x0d") + "\x0d\x0a",
    var_core_value_sig2F9D = Math.max(0, var_core_value_sig0BE5.length - 2),
    var_core_value_sig9511 = new Set(),
    var_core_value_sigAFDD = 0,
    var_core_value_sig431B = var_core_value_sig34AB.map(var_core_value_sig0DB1 => {
      let var_core_value_sig68A2 = var_core_value_sigAFDD + var_core_value_sig0DB1.length;
      return var_core_value_sigAFDD += var_core_value_sig0DB1.length + 1, {
        startIndex: var_core_value_sig68A2,
        paragraphId: var_core_value_sigBEAE(var_core_value_sig9511),
        paragraphStyle: {
          horizontalAlign: var_core_value_sig9640.horizontalAlign,
          lineSpacing: 1,
          snapToGrid: var_core_value_sigF9F1.FALSE,
          spaceAbove: {
            v: 0
          },
          spaceBelow: {
            v: 0
          }
        }
      };
    });
  return {
    id: var_core_value_sig9640.id ?? "board-shape-text",
    body: {
      dataStream: var_core_value_sig0BE5,
      paragraphs: var_core_value_sig431B,
      sectionBreaks: [{
        sectionId: var_core_value_sigC1DE(new Set()),
        startIndex: Math.max(0, var_core_value_sig0BE5.length - 1),
        gridType: var_core_value_sig8936.DEFAULT,
        renderConfig: {
          shapeTextOpticalVerticalAlign: var_core_value_sigF9F1.FALSE,
          verticalAlign: var_core_value_sig9640.verticalAlign,
          wrapStrategy: var_core_value_sig9640.wrapStrategy,
          zeroWidthParagraphBreak: var_core_value_sigF9F1.TRUE
        }
      }],
      textRuns: var_core_value_sig9640.textStyle ? [{
        st: 0,
        ed: Math.max(1, var_core_value_sig2F9D),
        ts: {
          ...var_core_value_sig9640.textStyle
        }
      }] : []
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: {
        height: 1 / 0,
        width: 1 / 0
      },
      renderConfig: {
        horizontalAlign: var_core_value_sig9640.horizontalAlign,
        verticalAlign: var_core_value_sig9640.verticalAlign,
        wrapStrategy: var_core_value_sig9640.wrapStrategy,
        zeroWidthParagraphBreak: var_core_value_sigF9F1.TRUE
      },
      ...(var_core_value_sig9640.textStyle ? {
        textStyle: {
          ...var_core_value_sig9640.textStyle
        }
      } : null)
    }
  };
}
function q(var_core_value_sig3073) {
  return var_core_value_sig3073.left + var_core_value_sig3073.width;
}
function J(var_core_value_sig4C99) {
  return var_core_value_sig4C99.top + var_core_value_sig4C99.height;
}
function hi(var_core_value_sigDDD2, var_core_value_sig6D5F) {
  return {
    left: var_core_value_sigDDD2.left - var_core_value_sig6D5F,
    top: var_core_value_sigDDD2.top - var_core_value_sig6D5F,
    width: var_core_value_sigDDD2.width + var_core_value_sig6D5F * 2,
    height: var_core_value_sigDDD2.height + var_core_value_sig6D5F * 2
  };
}
function gi(var_core_value_sigB80D, var_core_value_sigE0A2) {
  return var_core_value_sigE0A2.left >= var_core_value_sigB80D.left && var_core_value_sigE0A2.top >= var_core_value_sigB80D.top && q(var_core_value_sigE0A2) <= q(var_core_value_sigB80D) && J(var_core_value_sigE0A2) <= J(var_core_value_sigB80D);
}
function _i(var_core_value_sig8F71) {
  return var_core_value_sig8F71.containerData["kind"] === "swimlane" && !!var_core_value_sig8F71.containerData["swimlane"];
}
function vi(var_core_value_sig9016, var_core_value_sigB043) {
  return var_core_value_sig9016.left < q(var_core_value_sigB043) && q(var_core_value_sig9016) > var_core_value_sigB043.left && var_core_value_sig9016.top < J(var_core_value_sigB043) && J(var_core_value_sig9016) > var_core_value_sigB043.top;
}
function yi(var_core_value_sig554B) {
  if (var_core_value_sig554B.length === 0) return null;
  let var_core_value_sig33F0 = Math.min(...var_core_value_sig554B.map(var_core_value_sigCC17 => var_core_value_sigCC17.left)),
    var_core_value_sigC9BF = Math.min(...var_core_value_sig554B.map(var_core_value_sig32AE => var_core_value_sig32AE.top)),
    var_core_value_sigE1AD = Math.max(...var_core_value_sig554B.map(q)),
    var_core_value_sig90FF = Math.max(...var_core_value_sig554B.map(J));
  return {
    left: var_core_value_sig33F0,
    top: var_core_value_sigC9BF,
    width: var_core_value_sigE1AD - var_core_value_sig33F0,
    height: var_core_value_sig90FF - var_core_value_sigC9BF
  };
}
function bi(var_core_value_sigA7F6, var_core_value_sig5A0F) {
  let {
      containerData: var_core_value_sigCDF5
    } = var_core_value_sigA7F6,
    var_core_value_sig3802 = var_core_value_sigCDF5.titleVisible === false ? 0 : var_core_value_sigCDF5.headerSize ?? 0,
    var_core_value_sigB642 = _i(var_core_value_sigA7F6) ? {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    } : var_core_value_sigCDF5.padding,
    var_core_value_sig9026 = {
      left: var_core_value_sig5A0F.left + var_core_value_sigB642.left,
      top: var_core_value_sig5A0F.top + var_core_value_sig3802 + var_core_value_sigB642.top,
      width: Math.max(0, var_core_value_sig5A0F.width - var_core_value_sigB642.left - var_core_value_sigB642.right),
      height: Math.max(0, var_core_value_sig5A0F.height - var_core_value_sig3802 - var_core_value_sigB642.top - var_core_value_sigB642.bottom)
    },
    var_core_value_sigDCD6 = var_core_value_sigCDF5.capturePolicy["expelHysteresis"] ?? 0;
  return {
    outerBounds: var_core_value_sig5A0F,
    headerBounds: var_core_value_sig3802 > 0 ? {
      left: var_core_value_sig5A0F.left,
      top: var_core_value_sig5A0F.top,
      width: var_core_value_sig5A0F.width,
      height: var_core_value_sig3802
    } : null,
    contentBounds: var_core_value_sig9026,
    expandedContentBounds: hi(var_core_value_sig9026, var_core_value_sigDCD6)
  };
}
function xi(var_core_value_sig048B, var_core_value_sig1334, var_core_value_sig2605) {
  let var_core_value_sig5F20 = _i(var_core_value_sig048B) ? {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    } : var_core_value_sig048B.containerData["padding"],
    var_core_value_sig019C = var_core_value_sig048B.containerData["titleVisible"] === false ? 0 : var_core_value_sig048B.containerData["headerSize"] ?? 0,
    var_core_value_sigB296 = Math.min(var_core_value_sig1334.left, var_core_value_sig2605.left - var_core_value_sig5F20.left),
    var_core_value_sig7949 = Math.min(var_core_value_sig1334.top, var_core_value_sig2605.top - var_core_value_sig019C - var_core_value_sig5F20.top),
    var_core_value_sig2DD9 = Math.max(q(var_core_value_sig1334), q(var_core_value_sig2605) + var_core_value_sig5F20.right),
    var_core_value_sigCD501 = Math.max(J(var_core_value_sig1334), J(var_core_value_sig2605) + var_core_value_sig5F20.bottom);
  return {
    left: var_core_value_sigB296,
    top: var_core_value_sig7949,
    width: var_core_value_sig2DD9 - var_core_value_sigB296,
    height: var_core_value_sigCD501 - var_core_value_sig7949
  };
}
function Si(var_core_value_sigD362) {
  return var_core_value_sigD362 === "horizontal" ? "horizontal" : "vertical";
}
function Ci(var_core_value_sigC433, var_core_value_sigF543, var_core_value_sig0806) {
  return Object.values(var_core_value_sigC433).some(var_core_value_sigC753 => var_core_value_sigC753.element["parentId"] === var_core_value_sigF543 && var_core_value_sigC753.element["laneId"] === var_core_value_sig0806);
}
function wi(var_core_value_sigE224) {
  if (!var_core_value_sigE224 || var_core_value_sigE224.orientation !== "horizontal" && var_core_value_sigE224.orientation !== "vertical" || var_core_value_sigE224.collapsedLaneSize !== undefined && var_core_value_sigE224.collapsedLaneSize < 0) return false;
  let var_core_value_sig773E = new Set();
  return var_core_value_sigE224.lanes["every"](var_core_value_sigFFD1 => !var_core_value_sigFFD1.id || var_core_value_sig773E.has(var_core_value_sigFFD1.id) || var_core_value_sigFFD1.size < 0 || var_core_value_sigFFD1.minSize !== undefined && var_core_value_sigFFD1.minSize < 0 ? false : (var_core_value_sig773E.add(var_core_value_sigFFD1.id), true));
}
function Ti(var_core_value_sig83A7) {
  return {
    ...var_core_value_sig83A7,
    orientation: Si(var_core_value_sig83A7.orientation),
    laneGap: 0,
    lanes: var_core_value_sig83A7.lanes["map"](var_core_value_sig81AE => ({
      ...var_core_value_sig81AE
    }))
  };
}
function Ei(var_core_value_sigFE18) {
  return [...var_core_value_sigFE18.lanes].sort((var_core_value_sigF79F, var_core_value_sig0E54) => var_core_value_sigF79F.order - var_core_value_sig0E54.order);
}
function Di(var_core_value_sig816B, var_core_value_sigA89B) {
  let var_core_value_sig5020 = 0;
  for (let var_core_value_sig3B171 of Ei(var_core_value_sig816B)) {
    if (var_core_value_sig3B171.id === var_core_value_sigA89B) return var_core_value_sig5020;
    var_core_value_sig5020 += var_core_value_sig3B171.size;
  }
}
function Oi(var_core_value_sig8FB1, var_core_value_sig3D4B) {
  return Math.max(0, var_core_value_sig3D4B.collapsed === true ? var_core_value_sig8FB1.collapsedLaneSize ?? 32 : var_core_value_sig3D4B.size);
}
function ki(var_core_value_sigCD77, var_core_value_sig9F28) {
  let var_core_value_sig8A50 = new Map(var_core_value_sig9F28.lanes["map"](var_core_value_sig6C4A => [var_core_value_sig6C4A.id, var_core_value_sig6C4A]));
  return var_core_value_sigCD77.lanes["some"](var_core_value_sig73D9 => {
    if (var_core_value_sig73D9.locked !== true) return false;
    if (var_core_value_sig9F28.orientation !== var_core_value_sigCD77.orientation || var_core_value_sig9F28.headerSize !== var_core_value_sigCD77.headerSize || var_core_value_sig9F28.collapsedLaneSize !== var_core_value_sigCD77.collapsedLaneSize) return true;
    let var_core_value_sigEAF8 = var_core_value_sig8A50.get(var_core_value_sig73D9.id),
      var_core_value_sig0455 = Di(var_core_value_sigCD77, var_core_value_sig73D9.id),
      var_core_value_sig737C = Di(var_core_value_sig9F28, var_core_value_sig73D9.id);
    return !var_core_value_sigEAF8 || var_core_value_sig737C !== var_core_value_sig0455 || var_core_value_sigEAF8.title !== var_core_value_sig73D9.title || var_core_value_sigEAF8.order !== var_core_value_sig73D9.order || var_core_value_sigEAF8.size !== var_core_value_sig73D9.size || var_core_value_sigEAF8.minSize !== var_core_value_sig73D9.minSize || var_core_value_sigEAF8.locked !== var_core_value_sig73D9.locked || var_core_value_sigEAF8.collapsed !== var_core_value_sig73D9.collapsed;
  });
}
function Ai(var_core_value_sig8AF9, var_core_value_sigCF44) {
  return var_core_value_sigCF44.x >= var_core_value_sig8AF9.left && var_core_value_sigCF44.x <= q(var_core_value_sig8AF9) && var_core_value_sigCF44.y >= var_core_value_sig8AF9.top && var_core_value_sigCF44.y <= J(var_core_value_sig8AF9);
}
function ji(var_core_value_sig020B, var_core_value_sig091A) {
  return Math.max(0, Math.min(q(var_core_value_sig020B), q(var_core_value_sig091A)) - Math.max(var_core_value_sig020B.left, var_core_value_sig091A.left)) * Math.max(0, Math.min(J(var_core_value_sig020B), J(var_core_value_sig091A)) - Math.max(var_core_value_sig020B.top, var_core_value_sig091A.top));
}
function Mi(var_core_value_sigC45A, var_core_value_sig8A05) {
  let var_core_value_sig431F = var_core_value_sigC45A.containerData["titleVisible"] === false ? 0 : var_core_value_sigC45A.containerData["headerSize"] ?? 0;
  return {
    left: var_core_value_sig8A05.left,
    top: var_core_value_sig8A05.top + var_core_value_sig431F,
    width: var_core_value_sig8A05.width,
    height: Math.max(0, var_core_value_sig8A05.height - var_core_value_sig431F)
  };
}
function Ni(var_core_value_sig855C, var_core_value_sig222E) {
  let var_core_value_sig3A07 = var_core_value_sig855C.containerData["kind"] === "swimlane" ? var_core_value_sig855C.containerData["swimlane"] : undefined;
  if (!var_core_value_sig3A07) return null;
  let var_core_value_sigE7EB = Ti(var_core_value_sig3A07),
    var_core_value_sig6125 = Ei(var_core_value_sigE7EB);
  if (var_core_value_sig6125.length === 0) return var_core_value_sigE7EB;
  let var_core_value_sig5781 = Mi(var_core_value_sig855C, var_core_value_sig222E),
    var_core_value_sig13AB = (var_core_value_sigE7EB.orientation === "horizontal" ? var_core_value_sig5781.height : var_core_value_sig5781.width) - var_core_value_sig6125.reduce((var_core_value_sig5AF5, var_core_value_sig9DE4) => var_core_value_sig5AF5 + Oi(var_core_value_sigE7EB, var_core_value_sig9DE4), 0);
  if (Math.abs(var_core_value_sig13AB) < 0.01) return var_core_value_sigE7EB;
  let var_core_value_sig7A4A = [...var_core_value_sig6125].reverse().find(var_core_value_sig77FA => {
    if (var_core_value_sig77FA.locked === true || var_core_value_sig77FA.collapsed === true) return false;
    let var_core_value_sigA4A7 = var_core_value_sig6125.findIndex(var_core_value_sigAEFB => var_core_value_sigAEFB.id === var_core_value_sig77FA.id);
    return !var_core_value_sig6125.slice(var_core_value_sigA4A7 + 1).some(var_core_value_sig826B => var_core_value_sig826B.locked === true || var_core_value_sig826B.collapsed === true);
  });
  if (!var_core_value_sig7A4A) return var_core_value_sigE7EB;
  let var_core_value_sigB7E2 = Math.max(var_core_value_sig7A4A.minSize ?? 0, var_core_value_sig7A4A.size + var_core_value_sig13AB);
  return var_core_value_sigB7E2 === var_core_value_sig7A4A.size ? var_core_value_sigE7EB : {
    ...var_core_value_sigE7EB,
    lanes: var_core_value_sigE7EB.lanes["map"](var_core_value_sigA4DF => var_core_value_sigA4DF.id === var_core_value_sig7A4A.id ? {
      ...var_core_value_sigA4DF,
      size: var_core_value_sigB7E2
    } : {
      ...var_core_value_sigA4DF
    })
  };
}
function Pi(var_core_value_sigD477, var_core_value_sig6149) {
  return Li(var_core_value_sigD477, var_core_value_sig6149).map(({
    lane: var_core_value_sigCC9D,
    bounds: var_core_value_sig90F5
  }) => ({
    lane: var_core_value_sigCC9D,
    bounds: var_core_value_sig90F5
  }));
}
function Fi(var_core_value_sigEB82, var_core_value_sig843F) {
  let var_core_value_sig9FB7 = Ni(var_core_value_sigEB82, var_core_value_sig843F);
  return Pi(var_core_value_sig9FB7 ? {
    ...var_core_value_sigEB82,
    containerData: {
      ...var_core_value_sigEB82.containerData,
      swimlane: var_core_value_sig9FB7
    }
  } : var_core_value_sigEB82, var_core_value_sig843F);
}
function Ii(var_core_value_sigB7A4, var_core_value_sig295F) {
  let var_core_value_sigE36B = Ni(var_core_value_sigB7A4, var_core_value_sig295F);
  return Li(var_core_value_sigE36B ? {
    ...var_core_value_sigB7A4,
    containerData: {
      ...var_core_value_sigB7A4.containerData,
      swimlane: var_core_value_sigE36B
    }
  } : var_core_value_sigB7A4, var_core_value_sig295F);
}
function Li(var_core_value_sigDA3B, var_core_value_sig9E32) {
  let var_core_value_sig26EC1 = var_core_value_sigDA3B.containerData["kind"] === "swimlane" ? var_core_value_sigDA3B.containerData["swimlane"] : undefined;
  if (!var_core_value_sig26EC1) return [];
  let var_core_value_sigF226 = Mi(var_core_value_sigDA3B, var_core_value_sig9E32),
    var_core_value_sig4773 = var_core_value_sig26EC1.orientation === "horizontal" ? var_core_value_sigF226.top : var_core_value_sigF226.left;
  return Ei(var_core_value_sig26EC1).flatMap(var_core_value_sigD2BA => {
    let var_core_value_sigCD3A = var_core_value_sigD2BA.collapsed === true ? var_core_value_sig26EC1.collapsedLaneSize ?? 32 : var_core_value_sigD2BA.size,
      var_core_value_sig519D = Math.max(0, var_core_value_sigCD3A),
      var_core_value_sigC7E7 = var_core_value_sig26EC1.orientation === "horizontal" ? Math.max(0, J(var_core_value_sigF226) - var_core_value_sig4773) : Math.max(0, q(var_core_value_sigF226) - var_core_value_sig4773),
      var_core_value_sig6E1C = Math.min(var_core_value_sig519D, var_core_value_sigC7E7),
      var_core_value_sigFABC = var_core_value_sig26EC1.orientation === "horizontal" ? {
        left: var_core_value_sigF226.left,
        top: var_core_value_sig4773,
        width: var_core_value_sigF226.width,
        height: var_core_value_sig6E1C
      } : {
        left: var_core_value_sig4773,
        top: var_core_value_sigF226.top,
        width: var_core_value_sig6E1C,
        height: var_core_value_sigF226.height
      };
    if (var_core_value_sig4773 += var_core_value_sig6E1C + 0, var_core_value_sig6E1C <= 0) return [];
    let var_core_value_sig413D = Math.max(0, var_core_value_sig26EC1.headerSize ?? 0),
      var_core_value_sig5BCE = var_core_value_sig413D > 0 ? var_core_value_sig26EC1.orientation === "horizontal" ? {
        left: var_core_value_sigFABC.left,
        top: var_core_value_sigFABC.top,
        width: Math.min(var_core_value_sig413D, var_core_value_sigFABC.width),
        height: var_core_value_sigFABC.height
      } : {
        left: var_core_value_sigFABC.left,
        top: var_core_value_sigFABC.top,
        width: var_core_value_sigFABC.width,
        height: Math.min(var_core_value_sig413D, var_core_value_sigFABC.height)
      } : null;
    return [{
      lane: var_core_value_sigD2BA,
      bounds: var_core_value_sigFABC,
      headerBounds: var_core_value_sig5BCE,
      contentBounds: var_core_value_sig5BCE ? var_core_value_sig26EC1.orientation === "horizontal" ? {
        left: var_core_value_sig5BCE.left + var_core_value_sig5BCE.width,
        top: var_core_value_sigFABC.top,
        width: Math.max(0, var_core_value_sigFABC.width - var_core_value_sig5BCE.width),
        height: var_core_value_sigFABC.height
      } : {
        left: var_core_value_sigFABC.left,
        top: var_core_value_sig5BCE.top + var_core_value_sig5BCE.height,
        width: var_core_value_sigFABC.width,
        height: Math.max(0, var_core_value_sigFABC.height - var_core_value_sig5BCE.height)
      } : var_core_value_sigFABC
    }];
  });
}
function Ri(var_core_value_sigB643, var_core_value_sigF92F, var_core_value_sig2346) {
  return Pi(var_core_value_sigB643, var_core_value_sigF92F).find(({
    bounds: var_core_value_sig8EF0
  }) => Ai(var_core_value_sig8EF0, var_core_value_sig2346)) ?? null;
}
function zi(var_core_value_sig579A, var_core_value_sig7E16, var_core_value_sigA691) {
  let var_core_value_sig3C23 = Ni(var_core_value_sig579A, var_core_value_sig7E16);
  return Ri(var_core_value_sig3C23 ? {
    ...var_core_value_sig579A,
    containerData: {
      ...var_core_value_sig579A.containerData,
      swimlane: var_core_value_sig3C23
    }
  } : var_core_value_sig579A, var_core_value_sig7E16, var_core_value_sigA691);
}
function Bi(var_core_value_sigDAE6, var_core_value_sigDD81, var_core_value_sig3870) {
  let var_core_value_sig13D1 = Li(var_core_value_sigDAE6, var_core_value_sigDD81).find(({
    contentBounds: var_core_value_sig78AC
  }) => Ai(var_core_value_sig78AC, var_core_value_sig3870));
  return var_core_value_sig13D1 ? {
    lane: var_core_value_sig13D1.lane,
    bounds: var_core_value_sig13D1.bounds
  } : null;
}
function Vi(var_core_value_sigECFC, var_core_value_sig5E62, var_core_value_sig3B89) {
  let var_core_value_sig4B55 = Ni(var_core_value_sigECFC, var_core_value_sig5E62);
  return Bi(var_core_value_sig4B55 ? {
    ...var_core_value_sigECFC,
    containerData: {
      ...var_core_value_sigECFC.containerData,
      swimlane: var_core_value_sig4B55
    }
  } : var_core_value_sigECFC, var_core_value_sig5E62, var_core_value_sig3B89);
}
function Hi(var_core_value_sig9E69, var_core_value_sig432A, var_core_value_sig3B51) {
  let var_core_value_sig542D = Li(var_core_value_sig9E69, var_core_value_sig432A).find(({
    contentBounds: var_core_value_sig4CEF
  }) => gi(var_core_value_sig4CEF, var_core_value_sig3B51));
  return var_core_value_sig542D ? {
    lane: var_core_value_sig542D.lane,
    bounds: var_core_value_sig542D.bounds
  } : null;
}
function Ui(var_core_value_sigB225, var_core_value_sig8AAB, var_core_value_sigE82A) {
  let var_core_value_sigB2CF = Ni(var_core_value_sigB225, var_core_value_sig8AAB);
  return Hi(var_core_value_sigB2CF ? {
    ...var_core_value_sigB225,
    containerData: {
      ...var_core_value_sigB225.containerData,
      swimlane: var_core_value_sigB2CF
    }
  } : var_core_value_sigB225, var_core_value_sig8AAB, var_core_value_sigE82A);
}
function Wi(var_core_value_sig5955, var_core_value_sigF829, var_core_value_sig2900) {
  var var_core_value_sig51D8;
  let var_core_value_sig8693 = var_core_value_sig5955.containerData["kind"] === "swimlane" ? var_core_value_sig5955.containerData["swimlane"] : undefined;
  if (!var_core_value_sig8693) return null;
  let var_core_value_sigAACD = Ti(var_core_value_sig8693),
    var_core_value_sig895A = Ii({
      ...var_core_value_sig5955,
      containerData: {
        ...var_core_value_sig5955.containerData,
        swimlane: var_core_value_sigAACD
      }
    }, var_core_value_sigF829),
    var_core_value_sigA764 = var_core_value_sig895A.find(({
      contentBounds: var_core_value_sigD57D
    }) => gi(var_core_value_sigD57D, var_core_value_sig2900));
  if (var_core_value_sigA764) return {
    laneId: var_core_value_sigA764.lane["id"],
    swimlane: var_core_value_sigAACD
  };
  let var_core_value_sigC3D9 = (var_core_value_sig51D8 = var_core_value_sig895A.map(var_core_value_sig2CC7 => ({
    region: var_core_value_sig2CC7,
    area: ji(var_core_value_sig2CC7.contentBounds, var_core_value_sig2900)
  })).filter(({
    area: var_core_value_sig4784
  }) => var_core_value_sig4784 > 0).sort((var_core_value_sigC39E, var_core_value_sig16C7) => var_core_value_sig16C7.area - var_core_value_sigC39E.area)[0]) == null ? undefined : var_core_value_sig51D8.region;
  if (!var_core_value_sigC3D9 || var_core_value_sigC3D9.lane["locked"] === true || var_core_value_sigC3D9.lane["collapsed"] === true) return null;
  let var_core_value_sigA6C0 = var_core_value_sigAACD.orientation === "vertical" ? Math.max(var_core_value_sigC3D9.lane["size"], q(var_core_value_sig2900) - var_core_value_sigC3D9.bounds["left"]) : Math.max(var_core_value_sigC3D9.lane["size"], J(var_core_value_sig2900) - var_core_value_sigC3D9.bounds["top"]);
  return var_core_value_sigA6C0 === var_core_value_sigC3D9.lane["size"] ? null : {
    laneId: var_core_value_sigC3D9.lane["id"],
    swimlane: Ti({
      ...var_core_value_sigAACD,
      lanes: var_core_value_sigAACD.lanes["map"](var_core_value_sig7481 => var_core_value_sig7481.id === var_core_value_sigC3D9.lane["id"] ? {
        ...var_core_value_sig7481,
        size: var_core_value_sigA6C0
      } : {
        ...var_core_value_sig7481
      })
    })
  };
}
const Gi = var_core_value_sigC01A.None,
  Ki = var_core_value_sig96A6.SpAutoFit;
function qi(var_core_value_sigFF70 = Gi) {
  return {
    autoFitType: Ki,
    textWrap: var_core_value_sigFF70
  };
}
function Ji(var_core_value_sigB469) {
  let var_core_value_sig0276 = var_core_value_sigB469,
    var_core_value_sigFA20 = {},
    var_core_value_sig2752 = var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.fontSize;
  return var_core_value_sig0276 != null && var_core_value_sig0276.fontFamily && (var_core_value_sigFA20.ff = var_core_value_sig0276.fontFamily), typeof var_core_value_sig2752 == "number" && (var_core_value_sigFA20.fs = var_core_value_sig2752), var_core_value_sig0276 != null && var_core_value_sig0276.color && (var_core_value_sigFA20.cl = {
    rgb: var_core_value_sig0276.color
  }), (var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.bold) !== undefined && (var_core_value_sigFA20.bl = var_core_value_sig0276.bold ? var_core_value_sigF9F1.TRUE : var_core_value_sigF9F1.FALSE), (var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.italic) !== undefined && (var_core_value_sigFA20.it = var_core_value_sig0276.italic ? var_core_value_sigF9F1.TRUE : var_core_value_sigF9F1.FALSE), (var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.underline) !== undefined && (var_core_value_sigFA20.ul = {
    s: var_core_value_sig0276.underline ? var_core_value_sigF9F1.TRUE : var_core_value_sigF9F1.FALSE
  }), (var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.strikethrough) !== undefined && (var_core_value_sigFA20.st = {
    s: var_core_value_sig0276.strikethrough ? var_core_value_sigF9F1.TRUE : var_core_value_sigF9F1.FALSE
  }), (var_core_value_sig0276 == null ? undefined : var_core_value_sig0276.textFill) !== undefined && (var_core_value_sigFA20.textFill = var_core_value_sig0276.textFill), var_core_value_sigFA20;
}
function Yi(var_core_value_sig0E1A) {
  var var_core_value_sig6A48, var_core_value_sig2D2A, var_core_value_sig1D22;
  return var_core_value_sig0E1A ? {
    ...(typeof var_core_value_sig0E1A.ff == "string" ? {
      fontFamily: var_core_value_sig0E1A.ff
    } : null),
    ...(var_core_value_sig0E1A.fs === undefined ? null : {
      fontSize: var_core_value_sig0E1A.fs
    }),
    ...(typeof ((var_core_value_sig6A48 = var_core_value_sig0E1A.cl) == null ? undefined : var_core_value_sig6A48.rgb) == "string" ? {
      color: var_core_value_sig0E1A.cl["rgb"]
    } : null),
    ...(var_core_value_sig0E1A.bl === undefined ? null : {
      bold: var_core_value_sig0E1A.bl === var_core_value_sigF9F1.TRUE
    }),
    ...(var_core_value_sig0E1A.it === undefined ? null : {
      italic: var_core_value_sig0E1A.it === var_core_value_sigF9F1.TRUE
    }),
    ...(((var_core_value_sig2D2A = var_core_value_sig0E1A.ul) == null ? undefined : var_core_value_sig2D2A.s) === undefined ? null : {
      underline: var_core_value_sig0E1A.ul["s"] === var_core_value_sigF9F1.TRUE
    }),
    ...(((var_core_value_sig1D22 = var_core_value_sig0E1A.st) == null ? undefined : var_core_value_sig1D22.s) === undefined ? null : {
      strikethrough: var_core_value_sig0E1A.st["s"] === var_core_value_sigF9F1.TRUE
    }),
    ...(var_core_value_sig0E1A.textFill === undefined ? null : {
      textFill: var_core_value_sig0E1A.textFill
    })
  } : {};
}
function Xi(var_core_value_sig91FE) {
  let var_core_value_sig528C = var_core_value_sig91FE.horizontal !== false,
    var_core_value_sig749D = var_core_value_sig91FE.horizontalAlign ?? var_core_value_sigB6AF.LEFT,
    var_core_value_sig1FB8 = var_core_value_sig91FE.verticalAlign ?? var_core_value_sig5D02.TOP,
    var_core_value_sig032D = var_core_value_sig91FE.wrapStrategy ?? var_core_value_sigC936.CLIP;
  return {
    ...qi(var_core_value_sig91FE.textWrap),
    ...(var_core_value_sig91FE.bold === undefined ? null : {
      bold: var_core_value_sig91FE.bold
    }),
    ...(var_core_value_sig91FE.color === undefined ? null : {
      color: var_core_value_sig91FE.color
    }),
    ...(var_core_value_sig91FE.fontFamily === undefined ? null : {
      fontFamily: var_core_value_sig91FE.fontFamily
    }),
    ...(var_core_value_sig91FE.fontSize === undefined ? null : {
      fontSize: var_core_value_sig91FE.fontSize
    }),
    ...(var_core_value_sig91FE.italic === undefined ? null : {
      italic: var_core_value_sig91FE.italic
    }),
    ...(var_core_value_sig91FE.strikethrough === undefined ? null : {
      strikethrough: var_core_value_sig91FE.strikethrough
    }),
    ...(var_core_value_sig91FE.textFill === undefined ? null : {
      textFill: var_core_value_sig91FE.textFill
    }),
    ...(var_core_value_sig91FE.underline === undefined ? null : {
      underline: var_core_value_sig91FE.underline
    }),
    horizontalAlign: var_core_value_sig749D,
    isHorizontal: var_core_value_sig528C,
    text: var_core_value_sig91FE.text,
    textDirection: var_core_value_sig528C ? var_core_value_sig3653.Horz : var_core_value_sig3653.Vert,
    verticalAlign: var_core_value_sig1FB8,
    dataModel: {
      ha: var_core_value_sig749D,
      va: var_core_value_sig1FB8,
      doc: mi({
        horizontalAlign: var_core_value_sig749D,
        id: var_core_value_sig91FE.id,
        text: var_core_value_sig91FE.text,
        textStyle: var_core_value_sig91FE.textStyle,
        verticalAlign: var_core_value_sig1FB8,
        wrapStrategy: var_core_value_sig032D
      })
    }
  };
}
const Zi = {
  shapeWidth: 180,
  shapeHeight: 100,
  stickyWidth: 180,
  stickyHeight: 132,
  textBoxWidth: 200,
  textBoxHeight: 64,
  containerWidth: 810,
  containerHeight: 495
};
function Qi(var_core_value_sig27FA) {
  return {
    ...var_core_value_sig27FA,
    fs: (var_core_value_sig27FA == null ? undefined : var_core_value_sig27FA.fs) ?? 14
  };
}
const $i = {
    headerSize: 32,
    padding: {
      top: 12,
      right: 12,
      bottom: 12,
      left: 12
    },
    expelHysteresis: 12
  },
  ea = 2500,
  ta = {
    shapeType: var_core_value_sig597C.RoundRect,
    adjustValues: {
      adj: ea
    },
    fill: {
      color: "rgba(255, 255, 255, 0.72)"
    },
    stroke: {
      color: "#94a3b8",
      width: 1
    }
  },
  na = {
    acceptsChildren: true,
    acceptsContainer: true,
    allowNested: true,
    autoCapture: true,
    autoResize: true,
    membershipLocked: false,
    membershipAwareness: "interactive",
    clipChildren: false
  },
  ra = {
    enabled: true,
    captureMode: "strict",
    expelMode: "hysteresis",
    expelHysteresis: $i.expelHysteresis,
    allowCaptureFromSiblingContainer: false,
    allowCaptureFromAncestorContainer: true,
    allowCaptureContainer: true,
    allowCaptureLockedObjects: false,
    modifierToDisable: "Alt",
    modifierToForce: "Shift"
  },
  Y = {
    title: "Swimlane",
    collapsedLaneSize: 32,
    laneGap: 0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    laneCount: 3,
    horizontalHeaderSize: 270,
    horizontalLaneSize: 270,
    horizontalWidth: 1440,
    verticalHeaderSize: 108,
    verticalLaneSize: 405,
    verticalHeight: 810
  };
function ia(var_core_value_sig533B = true) {
  return var_core_value_sig533B ? {
    width: Zi.textBoxWidth,
    height: Zi.textBoxHeight
  } : {
    width: Zi.textBoxHeight,
    height: Zi.textBoxWidth
  };
}
function aa(var_core_value_sig6434) {
  return var_core_value_sig6434.kind === "free";
}
function oa(var_core_value_sig398A) {
  return aa(var_core_value_sig398A) ? {
    x: var_core_value_sig398A.x,
    y: var_core_value_sig398A.y
  } : var_core_value_sig398A.fallbackPoint ? {
    ...var_core_value_sig398A.fallbackPoint
  } : null;
}
function sa(var_core_value_sig1760, var_core_value_sig7C7A, var_core_value_sig78E8 = [], var_core_value_sigF002, var_core_value_sig715D) {
  var var_core_value_sigEB90, var_core_value_sig9506;
  let var_core_value_sigC460 = [],
    var_core_value_sig00D0 = oa(var_core_value_sig1760);
  var_core_value_sig00D0 && var_core_value_sigC460.push(var_core_value_sig00D0), var_core_value_sig78E8.forEach(var_core_value_sig08A3 => var_core_value_sigC460.push({
    x: var_core_value_sig08A3.x,
    y: var_core_value_sig08A3.y
  }));
  let var_core_value_sig2880 = var_core_value_sigF002 == null ? undefined : var_core_value_sigF002.routePoints;
  var_core_value_sig2880 == null || var_core_value_sig2880.forEach(var_core_value_sig77D8 => var_core_value_sigC460.push({
    x: var_core_value_sig77D8.x,
    y: var_core_value_sig77D8.y
  })), var_core_value_sig715D == null || (var_core_value_sigEB90 = var_core_value_sig715D.anchors) == null || var_core_value_sigEB90.filter(var_core_value_sig78A3 => var_core_value_sig78A3.kind === "manual").forEach(var_core_value_sig649B => var_core_value_sigC460.push({
    x: var_core_value_sig649B.x,
    y: var_core_value_sig649B.y
  })), var_core_value_sig715D == null || (var_core_value_sig9506 = var_core_value_sig715D.controls) == null || var_core_value_sig9506.filter(var_core_value_sig6256 => var_core_value_sig6256.kind === "manual").forEach(var_core_value_sigE7A6 => var_core_value_sigC460.push({
    x: var_core_value_sigE7A6.x,
    y: var_core_value_sigE7A6.y
  }));
  let var_core_value_sig76AC = oa(var_core_value_sig7C7A);
  if (var_core_value_sig76AC && var_core_value_sigC460.push(var_core_value_sig76AC), var_core_value_sigC460.length === 0) return null;
  let var_core_value_sigEA39 = Math.min(...var_core_value_sigC460.map(var_core_value_sigB505 => var_core_value_sigB505.x)),
    var_core_value_sig252C = Math.min(...var_core_value_sigC460.map(var_core_value_sig7428 => var_core_value_sig7428.y)),
    var_core_value_sig87EA = Math.max(...var_core_value_sigC460.map(var_core_value_sig1DCE => var_core_value_sig1DCE.x)),
    var_core_value_sig4325 = Math.max(...var_core_value_sigC460.map(var_core_value_sig0567 => var_core_value_sig0567.y));
  return {
    left: var_core_value_sigEA39,
    top: var_core_value_sig252C,
    width: Math.max(1, var_core_value_sig87EA - var_core_value_sigEA39),
    height: Math.max(1, var_core_value_sig4325 - var_core_value_sig252C),
    rotation: 0
  };
}
function ca() {
  let {
    autoFitType: var_core_value_sigAB8D,
    textWrap: var_core_value_sig4B86,
    ...var_core_value_sig240E
  } = Xi({
    fontSize: 16,
    horizontalAlign: var_core_value_sigB6AF.CENTER,
    text: "",
    textStyle: {
      fs: 16
    },
    verticalAlign: var_core_value_sig5D02.MIDDLE,
    wrapStrategy: var_core_value_sigC936.WRAP
  });
  return var_core_value_sig240E;
}
function la(var_core_value_sigDE46) {
  var var_core_value_sigF30E, var_core_value_sigA6B6, var_core_value_sig1FDB, var_core_value_sig6B7D, var_core_value_sig0D1B, var_core_value_sigA5A1, var_core_value_sig0C3A, var_core_value_sig5A20, var_core_value_sig4037, var_core_value_sig5F5F, var_core_value_sig801E;
  let var_core_value_sigD8A7 = (var_core_value_sigF30E = var_core_value_sigDE46.orthogonalData) == null ? undefined : var_core_value_sigF30E.routePoints,
    var_core_value_sig7D2D = var_core_value_sigD8A7 == null ? undefined : var_core_value_sigD8A7.filter(var_core_value_sigA7F3 => var_core_value_sigA7F3.kind === "manual"),
    var_core_value_sig5BC4 = ((var_core_value_sigA6B6 = var_core_value_sigDE46.waypoints) == null ? undefined : var_core_value_sigA6B6.filter(var_core_value_sigEACD => var_core_value_sigEACD.kind === "manual")) ?? var_core_value_sig7D2D,
    var_core_value_sigE445 = var_core_value_sigDE46.labels ?? (var_core_value_sigDE46.label ? [var_core_value_sigDE46.label] : undefined),
    var_core_value_sig5C54 = {
      start: var_core_value_sigDE46.start,
      end: var_core_value_sigDE46.end,
      routing: var_core_value_sigDE46.routing ?? "orthogonal",
      routingMode: var_core_value_sigDE46.routingMode ?? (var_core_value_sig5BC4 != null && var_core_value_sig5BC4.length ? "manual" : "auto"),
      waypoints: var_core_value_sig5BC4,
      style: {
        stroke: ((var_core_value_sig1FDB = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig1FDB.stroke) ?? "#1f2937",
        strokeWidth: ((var_core_value_sig6B7D = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig6B7D.strokeWidth) ?? 2,
        opacity: (var_core_value_sig0D1B = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig0D1B.opacity,
        dash: (var_core_value_sigA5A1 = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sigA5A1.dash,
        startMarker: (var_core_value_sig0C3A = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig0C3A.startMarker,
        endMarker: (var_core_value_sig5A20 = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig5A20.endMarker,
        cornerStyle: ((var_core_value_sig4037 = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig4037.cornerStyle) ?? "rounded",
        lineJump: (var_core_value_sig5F5F = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig5F5F.lineJump,
        animation: (var_core_value_sig801E = var_core_value_sigDE46.style) == null ? undefined : var_core_value_sig801E.animation
      },
      labels: var_core_value_sigE445
    };
  var_core_value_sigDE46.orthogonalData && (var_core_value_sig5C54.orthogonalData = {
    ...var_core_value_sigDE46.orthogonalData,
    routePoints: var_core_value_sigD8A7
  }), var_core_value_sigDE46.curveData && (var_core_value_sig5C54.curveData = var_core_value_sigDE46.curveData);
  let var_core_value_sigD167 = var_core_value_sigDE46.transform ?? sa(var_core_value_sigDE46.start, var_core_value_sigDE46.end, var_core_value_sig5BC4, var_core_value_sig5C54.orthogonalData, var_core_value_sigDE46.curveData) ?? {
    left: 0,
    top: 0,
    width: 1,
    height: 1,
    rotation: 0
  };
  return {
    id: var_core_value_sigDE46.id ?? var_core_value_sig90E7(6),
    type: M.Connector,
    transform: var_core_value_sigD167,
    connectorData: var_core_value_sig5C54
  };
}
function ua(var_core_value_sig2DA0) {
  var var_core_value_sig51DC, var_core_value_sigEE01;
  let var_core_value_sig80BD = Tn(var_core_value_sig2DA0.shapeType),
    var_core_value_sigF6A6 = Fn(var_core_value_sig2DA0.shapeType),
    var_core_value_sigE59D = var_core_value_sig866C(var_core_value_sig2DA0.shapeType),
    var_core_value_sig3D65 = {
      shapeType: var_core_value_sig2DA0.shapeType
    };
  if (var_core_value_sigF6A6) {
    var var_core_value_sig4D17, var_core_value_sigE1B9, var_core_value_sig21BB, var_core_value_sig64BA1;
    var_core_value_sigF6A6.geometry ? (var_core_value_sig3D65.isCustom = true, var_core_value_sig3D65.customGeometry = var_core_value_sigF6A6.geometry) : var_core_value_sig3D65.isCustom = false, var_core_value_sig3D65.fill = (var_core_value_sig4D17 = var_core_value_sigF6A6.defaultShapeData) == null ? undefined : var_core_value_sig4D17.fill, var_core_value_sig3D65.stroke = (var_core_value_sigE1B9 = var_core_value_sigF6A6.defaultShapeData) == null ? undefined : var_core_value_sigE1B9.stroke, (var_core_value_sig21BB = var_core_value_sigF6A6.defaultShapeData) != null && var_core_value_sig21BB.sequenceLifeline && (var_core_value_sig3D65.sequenceLifeline = {
      ...var_core_value_sigF6A6.defaultShapeData["sequenceLifeline"]
    }), (var_core_value_sig64BA1 = var_core_value_sigF6A6.defaultShapeData) != null && var_core_value_sig64BA1.sequenceActivation && (var_core_value_sig3D65.sequenceActivation = {
      ...var_core_value_sigF6A6.defaultShapeData["sequenceActivation"]
    });
  }
  if (var_core_value_sig80BD) {
    var var_core_value_sig975D, var_core_value_sig3C3D;
    var_core_value_sig3D65.isCustom = true, var_core_value_sig3D65.customGeometry = var_core_value_sig80BD.geometry, var_core_value_sig3D65.fill = (var_core_value_sig975D = var_core_value_sig80BD.defaultShapeData) == null ? undefined : var_core_value_sig975D.fill, var_core_value_sig3D65.stroke = (var_core_value_sig3C3D = var_core_value_sig80BD.defaultShapeData) == null ? undefined : var_core_value_sig3C3D.stroke;
  }
  if (var_core_value_sig2DA0.fillColor && (var_core_value_sig3D65.fill = {
    color: var_core_value_sig2DA0.fillColor
  }), var_core_value_sig2DA0.strokeColor || var_core_value_sig2DA0.strokeWidth !== undefined) {
    var var_core_value_sigD33D, var_core_value_sig71B9;
    var_core_value_sig3D65.stroke = {
      ...var_core_value_sig3D65.stroke,
      color: var_core_value_sig2DA0.strokeColor ?? ((var_core_value_sigD33D = var_core_value_sig3D65.stroke) == null ? undefined : var_core_value_sigD33D.color),
      width: var_core_value_sig2DA0.strokeWidth ?? ((var_core_value_sig71B9 = var_core_value_sig3D65.stroke) == null ? undefined : var_core_value_sig71B9.width)
    };
  }
  return !(var_core_value_sigF6A6 != null && (var_core_value_sig51DC = var_core_value_sigF6A6.defaultShapeData) != null && var_core_value_sig51DC.sequenceLifeline) && !(var_core_value_sigF6A6 != null && (var_core_value_sigEE01 = var_core_value_sigF6A6.defaultShapeData) != null && var_core_value_sigEE01.sequenceActivation) && (var_core_value_sig3D65.shapeText = ca()), {
    id: var_core_value_sig2DA0.id ?? var_core_value_sig90E7(6),
    type: M.Shape,
    parentId: var_core_value_sig2DA0.parentId,
    laneId: var_core_value_sig2DA0.laneId,
    transform: {
      left: var_core_value_sig2DA0.left,
      top: var_core_value_sig2DA0.top,
      width: var_core_value_sig2DA0.width ?? (var_core_value_sigF6A6 == null ? undefined : var_core_value_sigF6A6.defaultSize["width"]) ?? (var_core_value_sigE59D == null ? undefined : var_core_value_sigE59D.width) ?? Zi.shapeWidth,
      height: var_core_value_sig2DA0.height ?? (var_core_value_sigF6A6 == null ? undefined : var_core_value_sigF6A6.defaultSize["height"]) ?? (var_core_value_sigE59D == null ? undefined : var_core_value_sigE59D.height) ?? Zi.shapeHeight,
      rotation: 0
    },
    shapeData: var_core_value_sig3D65
  };
}
function da(var_core_value_sig248C) {
  let var_core_value_sig8DE6 = var_core_value_sig248C.horizontal ?? true,
    var_core_value_sig55C6 = ia(var_core_value_sig8DE6),
    var_core_value_sig2C60 = var_core_value_sig248C.text ?? "",
    var_core_value_sig2914 = Qi(var_core_value_sig248C.textStyle);
  return {
    id: var_core_value_sig248C.id ?? var_core_value_sig90E7(6),
    type: M.Shape,
    parentId: var_core_value_sig248C.parentId,
    laneId: var_core_value_sig248C.laneId,
    transform: {
      left: var_core_value_sig248C.left,
      top: var_core_value_sig248C.top,
      width: var_core_value_sig248C.width ?? var_core_value_sig55C6.width,
      height: var_core_value_sig248C.height ?? var_core_value_sig55C6.height,
      rotation: 0
    },
    shapeData: {
      shapeType: var_core_value_sig597C.Rect,
      isTextBox: true,
      fill: {
        fillType: var_core_value_sig5B96.NoFill
      },
      stroke: {
        lineStrokeType: var_core_value_sig8FBA.NoLine
      },
      shapeText: Xi({
        fontSize: var_core_value_sig2914.fs,
        horizontal: var_core_value_sig8DE6,
        horizontalAlign: var_core_value_sig248C.horizontalAlign ?? var_core_value_sigB6AF.LEFT,
        text: var_core_value_sig2C60,
        textStyle: var_core_value_sig2914,
        textWrap: var_core_value_sig248C.textWrap,
        verticalAlign: var_core_value_sig248C.verticalAlign ?? var_core_value_sig5D02.TOP,
        wrapStrategy: var_core_value_sigC936.CLIP
      })
    }
  };
}
function fa(var_core_value_sig7FD9) {
  var var_core_value_sig7A3D, var_core_value_sig7325, var_core_value_sig4C4B;
  let var_core_value_sigB11B = {
    ...ta,
    adjustValues: ta.adjustValues ? {
      ...ta.adjustValues
    } : undefined,
    fill: {
      color: var_core_value_sig7FD9.fillColor ?? ((var_core_value_sig7A3D = ta.fill) == null ? undefined : var_core_value_sig7A3D.color)
    },
    stroke: {
      ...ta.stroke,
      color: var_core_value_sig7FD9.strokeColor ?? ((var_core_value_sig7325 = ta.stroke) == null ? undefined : var_core_value_sig7325.color),
      width: var_core_value_sig7FD9.strokeWidth ?? ((var_core_value_sig4C4B = ta.stroke) == null ? undefined : var_core_value_sig4C4B.width)
    }
  };
  return {
    id: var_core_value_sig7FD9.id ?? var_core_value_sig90E7(6),
    type: M.Container,
    parentId: var_core_value_sig7FD9.parentId,
    laneId: var_core_value_sig7FD9.laneId,
    transform: {
      left: var_core_value_sig7FD9.left,
      top: var_core_value_sig7FD9.top,
      width: var_core_value_sig7FD9.width ?? Zi.containerWidth,
      height: var_core_value_sig7FD9.height ?? Zi.containerHeight,
      rotation: 0
    },
    containerData: {
      kind: var_core_value_sig7FD9.kind === "uml-package" || var_core_value_sig7FD9.kind === "system-boundary" ? var_core_value_sig7FD9.kind : "generic",
      title: var_core_value_sig7FD9.title,
      titleVisible: true,
      titlePosition: "top",
      headerSize: $i.headerSize,
      padding: {
        ...$i.padding
      },
      shapeData: var_core_value_sigB11B,
      behavior: {
        ...na,
        membershipLocked: var_core_value_sig7FD9.membershipLocked ?? false
      },
      capturePolicy: {
        ...ra
      }
    }
  };
}
function pa(var_core_value_sig826D, var_core_value_sig949F, var_core_value_sig77E0) {
  return (var_core_value_sig949F != null && var_core_value_sig949F.length ? var_core_value_sig949F : Array.from({
    length: Y.laneCount
  }, (var_core_value_sig901E, var_core_value_sigF7BB) => ({
    id: "lane-" + (var_core_value_sigF7BB + 1),
    title: "Lane " + (var_core_value_sigF7BB + 1),
    size: var_core_value_sig77E0
  }))).map((var_core_value_sigFA38, var_core_value_sig102B) => ({
    id: var_core_value_sigFA38.id ?? var_core_value_sig90E7(6),
    title: var_core_value_sigFA38.title ?? "Lane " + (var_core_value_sig102B + 1),
    order: var_core_value_sig102B,
    size: var_core_value_sigFA38.size ?? var_core_value_sig77E0,
    ...(var_core_value_sigFA38.minSize === undefined ? {} : {
      minSize: var_core_value_sigFA38.minSize
    }),
    ...(var_core_value_sigFA38.locked === undefined ? {} : {
      locked: var_core_value_sigFA38.locked
    }),
    ...(var_core_value_sigFA38.collapsed === undefined ? {} : {
      collapsed: var_core_value_sigFA38.collapsed
    })
  }));
}
function ma(var_core_value_sigD177, var_core_value_sig26E6) {
  var var_core_value_sig43D51;
  let var_core_value_sig132C = var_core_value_sigD177 === "horizontal" ? Y.horizontalLaneSize : Y.verticalLaneSize;
  if ((var_core_value_sig43D51 = var_core_value_sig26E6.lanes) != null && var_core_value_sig43D51.length) return var_core_value_sig132C;
  let var_core_value_sig469E = var_core_value_sigD177 === "horizontal" ? var_core_value_sig26E6.height === undefined ? undefined : Math.max(0, var_core_value_sig26E6.height - $i.headerSize) : var_core_value_sig26E6.width === undefined ? undefined : Math.max(0, var_core_value_sig26E6.width);
  return var_core_value_sig469E === undefined ? var_core_value_sig132C : var_core_value_sig469E / Y.laneCount;
}
function ha(var_core_value_sig3C91, var_core_value_sig5A6B) {
  var var_core_value_sigD8F0;
  let var_core_value_sig534A = var_core_value_sig3C91 === "horizontal" ? Y.horizontalHeaderSize : Y.verticalHeaderSize;
  if ((var_core_value_sigD8F0 = var_core_value_sig5A6B.lanes) != null && var_core_value_sigD8F0.length) return var_core_value_sig534A;
  let var_core_value_sigB1E6 = var_core_value_sig3C91 === "horizontal" ? var_core_value_sig5A6B.width : var_core_value_sig5A6B.height === undefined ? undefined : Math.max(0, var_core_value_sig5A6B.height - $i.headerSize);
  if (var_core_value_sigB1E6 === undefined) return var_core_value_sig534A;
  let var_core_value_sig02FE = var_core_value_sig3C91 === "horizontal" ? Y.horizontalWidth : Y.verticalHeight;
  return Math.min(var_core_value_sig534A, Math.max(0, var_core_value_sigB1E6) * var_core_value_sig534A / var_core_value_sig02FE);
}
function ga(var_core_value_sigD80D) {
  let var_core_value_sig572B = Si(var_core_value_sigD80D.orientation),
    var_core_value_sigB8EA = pa(var_core_value_sig572B, var_core_value_sigD80D.lanes, ma(var_core_value_sig572B, var_core_value_sigD80D)),
    var_core_value_sig1494 = $i.headerSize,
    var_core_value_sigB5E9 = var_core_value_sig572B === "vertical" ? var_core_value_sigB8EA.reduce((var_core_value_sigA7DB, var_core_value_sig5EEE) => var_core_value_sigA7DB + var_core_value_sig5EEE.size, 0) : Y.horizontalWidth,
    var_core_value_sig0862 = var_core_value_sig572B === "horizontal" ? var_core_value_sig1494 + var_core_value_sigB8EA.reduce((var_core_value_sig65B4, var_core_value_sigF98E) => var_core_value_sig65B4 + var_core_value_sigF98E.size, 0) : var_core_value_sig1494 + Y.verticalHeight,
    var_core_value_sig9099 = fa({
      ...var_core_value_sigD80D,
      title: var_core_value_sigD80D.title ?? Y.title,
      width: var_core_value_sigD80D.width ?? var_core_value_sigB5E9,
      height: var_core_value_sigD80D.height ?? var_core_value_sig0862
    }),
    {
      adjustValues: var_core_value_sigC317,
      ...var_core_value_sig2746
    } = var_core_value_sig9099.containerData["shapeData"];
  return var_core_value_sig9099.containerData = {
    ...var_core_value_sig9099.containerData,
    kind: "swimlane",
    padding: {
      ...Y.padding
    },
    shapeData: {
      ...var_core_value_sig2746,
      shapeType: var_core_value_sig597C.Rect
    },
    swimlane: Ti({
      orientation: var_core_value_sig572B,
      headerSize: var_core_value_sigD80D.headerSize ?? ha(var_core_value_sig572B, var_core_value_sigD80D),
      laneGap: var_core_value_sigD80D.laneGap ?? Y.laneGap,
      collapsedLaneSize: var_core_value_sigD80D.collapsedLaneSize ?? Y.collapsedLaneSize,
      lanes: var_core_value_sigB8EA
    })
  }, var_core_value_sig9099;
}
function _a(var_core_value_sig71B8) {
  let var_core_value_sigFD40 = var_core_value_sig71B8.horizontal ?? true,
    var_core_value_sig152B = ia(var_core_value_sigFD40),
    var_core_value_sig0334 = var_core_value_sig71B8.text ?? "",
    var_core_value_sigE424 = Qi(var_core_value_sig71B8.textStyle),
    var_core_value_sigCDE2 = {
      id: var_core_value_sig71B8.id ?? var_core_value_sig90E7(6),
      type: M.Text,
      parentId: var_core_value_sig71B8.parentId,
      laneId: var_core_value_sig71B8.laneId,
      text: var_core_value_sig0334,
      textData: mi({
        text: var_core_value_sig0334,
        horizontalAlign: var_core_value_sig71B8.horizontalAlign ?? var_core_value_sigB6AF.LEFT,
        textStyle: var_core_value_sigE424,
        verticalAlign: var_core_value_sig71B8.verticalAlign ?? var_core_value_sig5D02.TOP,
        wrapStrategy: var_core_value_sigC936.CLIP
      }),
      transform: {
        left: var_core_value_sig71B8.left,
        top: var_core_value_sig71B8.top,
        width: var_core_value_sig71B8.width ?? var_core_value_sig152B.width,
        height: var_core_value_sig71B8.height ?? var_core_value_sig152B.height,
        rotation: 0
      }
    };
  return var_core_value_sigFD40 || (var_core_value_sigCDE2.custom = {
    horizontal: var_core_value_sigFD40
  }), var_core_value_sigCDE2;
}
function va(var_core_value_sigD2B0) {
  return ua({
    id: var_core_value_sigD2B0.id,
    shapeType: var_core_value_sig597C.FoldedCorner,
    left: var_core_value_sigD2B0.left,
    top: var_core_value_sigD2B0.top,
    width: var_core_value_sigD2B0.width ?? Zi.stickyWidth,
    height: var_core_value_sigD2B0.height ?? Zi.stickyHeight,
    fillColor: var_core_value_sigD2B0.fillColor,
    parentId: var_core_value_sigD2B0.parentId,
    laneId: var_core_value_sigD2B0.laneId
  });
}
function ya(var_core_value_sig4E8D) {
  return {
    id: var_core_value_sig4E8D.id ?? var_core_value_sig90E7(6),
    type: M.Image,
    parentId: var_core_value_sig4E8D.parentId,
    laneId: var_core_value_sig4E8D.laneId,
    source: var_core_value_sig4E8D.source,
    imageSourceType: var_core_value_sig4E8D.imageSourceType,
    transform: {
      left: var_core_value_sig4E8D.left,
      top: var_core_value_sig4E8D.top,
      width: var_core_value_sig4E8D.width,
      height: var_core_value_sig4E8D.height,
      rotation: 0
    }
  };
}
const ba = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  xa = Object.keys(na),
  Sa = Object.keys(ra),
  Ca = Object.keys($i.padding);
function wa(var_core_value_sig9675, var_core_value_sig24B6) {
  let {
    radius: var_core_value_sig283C,
    rx: var_core_value_sig062F,
    ry: var_core_value_sig96C7,
    adjustValues: var_core_value_sig8D50,
    ...var_core_value_sigB5EA
  } = var_core_value_sig9675 ?? {};
  if (var_core_value_sig24B6 === "swimlane") {
    let {
      adjustValues: var_core_value_sigA470,
      ...var_core_value_sig19A1
    } = ta;
    return {
      ...var_core_value_sig19A1,
      ...var_core_value_sigB5EA,
      shapeType: var_core_value_sig597C.Rect
    };
  }
  return {
    ...ta,
    ...var_core_value_sigB5EA,
    shapeType: var_core_value_sig597C.RoundRect,
    adjustValues: typeof var_core_value_sig8D50 == "object" && var_core_value_sig8D50 ? {
      ...var_core_value_sig8D50,
      adj: ea
    } : {
      adj: ea
    }
  };
}
function Ta(var_core_value_sigE952) {
  var var_core_value_sigE241;
  if (var_core_value_sigE952.type !== M.Container) return var_core_value_sigE952;
  let var_core_value_sig9C99 = var_core_value_sigE952.containerData["behavior"],
    var_core_value_sigD135 = var_core_value_sigE952.containerData["capturePolicy"],
    var_core_value_sig0891 = var_core_value_sigE952.containerData["padding"],
    var_core_value_sigF788 = var_core_value_sigE952.containerData["shapeData"],
    var_core_value_sigE094 = !!var_core_value_sig9C99 && xa.every(var_core_value_sig81F7 => var_core_value_sig9C99[var_core_value_sig81F7] !== undefined),
    var_core_value_sig0BC4 = !!var_core_value_sigD135 && Sa.every(var_core_value_sigBE51 => var_core_value_sigD135[var_core_value_sigBE51] !== undefined),
    var_core_value_sig8F20 = !!var_core_value_sig0891 && Ca.every(var_core_value_sigAAD1 => var_core_value_sig0891[var_core_value_sigAAD1] !== undefined),
    var_core_value_sigB8CA = !!(var_core_value_sigF788 != null && var_core_value_sigF788.shapeType),
    var_core_value_sig4663 = var_core_value_sigE952.containerData["kind"] === "swimlane" ? (var_core_value_sigF788 == null ? undefined : var_core_value_sigF788.shapeType) === var_core_value_sig597C.Rect : (var_core_value_sigF788 == null ? undefined : var_core_value_sigF788.shapeType) === var_core_value_sig597C.RoundRect && ((var_core_value_sigE241 = var_core_value_sigF788.adjustValues) == null ? undefined : var_core_value_sigE241.adj) === 2500,
    var_core_value_sig5970 = var_core_value_sigE952.containerData["headerSize"] !== undefined && var_core_value_sigE952.containerData["titleVisible"] !== undefined && var_core_value_sigE952.containerData["titlePosition"] !== undefined;
  return var_core_value_sigE094 && var_core_value_sig0BC4 && var_core_value_sig8F20 && var_core_value_sigB8CA && var_core_value_sig4663 && var_core_value_sig5970 ? var_core_value_sigE952 : {
    ...var_core_value_sigE952,
    containerData: {
      ...var_core_value_sigE952.containerData,
      titleVisible: var_core_value_sigE952.containerData["titleVisible"] ?? true,
      titlePosition: var_core_value_sigE952.containerData["titlePosition"] ?? "top",
      headerSize: var_core_value_sigE952.containerData["headerSize"] ?? $i.headerSize,
      shapeData: wa(var_core_value_sigE952.containerData["shapeData"], var_core_value_sigE952.containerData["kind"]),
      padding: {
        ...$i.padding,
        ...var_core_value_sigE952.containerData["padding"]
      },
      behavior: {
        ...na,
        ...var_core_value_sigE952.containerData["behavior"]
      },
      capturePolicy: {
        ...ra,
        ...var_core_value_sigE952.containerData["capturePolicy"]
      }
    }
  };
}
function X(var_core_value_sig7D63) {
  if (var_core_value_sig7D63.type !== M.Container || var_core_value_sig7D63.containerData["kind"] !== "swimlane" || !var_core_value_sig7D63.containerData["swimlane"]) return var_core_value_sig7D63;
  let var_core_value_sig7713 = Ta(var_core_value_sig7D63);
  return var_core_value_sig7713.type === M.Container ? {
    ...var_core_value_sig7713,
    containerData: {
      ...var_core_value_sig7713.containerData,
      padding: {
        ...ba
      },
      swimlane: Ti(var_core_value_sig7D63.containerData["swimlane"])
    }
  } : var_core_value_sig7713;
}
function Ea(var_core_value_sigD598) {
  let var_core_value_sig61E6 = var_core_value_sigD598;
  return {
    redo: var_core_value_sig61E6.redo,
    undo: var_core_value_sig61E6.undo,
    objects: (var_core_value_sig61E6.objects ?? []).map(var_core_value_sigBC1A => ({
      unitId: var_core_value_sigBC1A.unitId,
      subUnitId: var_core_value_sigBC1A.subUnitId,
      elementId: var_core_value_sigBC1A.drawingId
    }))
  };
}
const Da = "UNIVER_EMBED_BOARDS_FLOATING";
function Oa(var_core_value_sig054F) {
  return {
    id: var_core_value_sig054F.hostAnchorId,
    type: M.Shape,
    name: var_core_value_sig054F.embedId,
    transform: {
      left: var_core_value_sig054F.left ?? 80,
      top: var_core_value_sig054F.top ?? 80,
      width: var_core_value_sig054F.width ?? 560,
      height: var_core_value_sig054F.height ?? 360,
      rotation: 0
    },
    shapeData: {
      shapeType: var_core_value_sig597C.Rect,
      fill: {
        fillType: var_core_value_sig5B96.NoFill
      },
      stroke: {
        lineStrokeType: var_core_value_sig8FBA.NoLine
      }
    },
    custom: {
      [Da]: {
        version: 1,
        embedId: var_core_value_sig054F.embedId,
        hostAnchorId: var_core_value_sig054F.hostAnchorId,
        childUnitId: var_core_value_sig054F.childUnitId,
        childType: var_core_value_sig054F.childType
      }
    }
  };
}
function ka(var_core_value_sig9047) {
  var var_core_value_sigB9FA;
  let var_core_value_sigF8DB = (var_core_value_sigB9FA = var_core_value_sig9047.custom) == null ? undefined : var_core_value_sigB9FA[Da];
  if (!var_core_value_sigF8DB || typeof var_core_value_sigF8DB != "object") return;
  let var_core_value_sig6E53 = var_core_value_sigF8DB;
  return var_core_value_sig6E53.version === 1 && typeof var_core_value_sig6E53.embedId == "string" && typeof var_core_value_sig6E53.hostAnchorId == "string" ? var_core_value_sig6E53 : undefined;
}
function Aa(var_core_value_sig5812) {
  return (var_core_value_sig5812 == null ? undefined : var_core_value_sig5812.type) === M.Shape && ka(var_core_value_sig5812) != null;
}
function ja(var_core_value_sig343C, var_core_value_sigD924) {
  if (!Aa(var_core_value_sig343C) || !Aa(var_core_value_sigD924)) return false;
  let var_core_value_sig02D4 = ka(var_core_value_sig343C),
    var_core_value_sigEFE7 = ka(var_core_value_sigD924);
  return (var_core_value_sig02D4 == null ? undefined : var_core_value_sig02D4.childUnitId) != null && var_core_value_sig02D4.childUnitId === (var_core_value_sigEFE7 == null ? undefined : var_core_value_sigEFE7.childUnitId) && var_core_value_sig02D4.childType === var_core_value_sigEFE7.childType;
}
const Ma = Object.values(He),
  Na = Object.values(Ue),
  Pa = Object.values(We);
function Fa(var_core_value_sig9277) {
  if (!Z(var_core_value_sig9277)) return false;
  let var_core_value_sig2AE5 = var_core_value_sig9277,
    var_core_value_sigE274 = typeof var_core_value_sig2AE5.width == "number" && Number.isFinite(var_core_value_sig2AE5.width) && var_core_value_sig2AE5.width > 0,
    var_core_value_sig305B = typeof var_core_value_sig2AE5.height == "number" && Number.isFinite(var_core_value_sig2AE5.height) && var_core_value_sig2AE5.height > 0;
  switch (var_core_value_sig2AE5.mode) {
    case Ge.AutoSize:
      return var_core_value_sig2AE5.width === undefined && var_core_value_sig2AE5.height === undefined;
    case Ge.FixedWidth:
      return var_core_value_sigE274 && var_core_value_sig2AE5.height === undefined;
    case Ge.FixedSize:
      return var_core_value_sigE274 && var_core_value_sig305B;
    default:
      return false;
  }
}
function Z(var_core_value_sigAE39) {
  return typeof var_core_value_sigAE39 == "object" && !!var_core_value_sigAE39 && !Array.isArray(var_core_value_sigAE39);
}
function Ia(var_core_value_sigF21C, var_core_value_sig66D1 = -1 / 0, var_core_value_sig83A6 = 1 / 0) {
  return var_core_value_sigF21C === undefined || typeof var_core_value_sigF21C == "number" && Number.isFinite(var_core_value_sigF21C) && var_core_value_sigF21C >= var_core_value_sig66D1 && var_core_value_sigF21C <= var_core_value_sig83A6;
}
function La(var_core_value_sig7D8E, var_core_value_sigADFE) {
  return var_core_value_sig7D8E === undefined || typeof var_core_value_sig7D8E == "string" && var_core_value_sigADFE.includes(var_core_value_sig7D8E);
}
function Ra(var_core_value_sigF11A) {
  return var_core_value_sigF11A === undefined || Z(var_core_value_sigF11A) && (var_core_value_sigF11A.color === undefined || typeof var_core_value_sigF11A.color == "string") && Ia(var_core_value_sigF11A.opacity, 0, 1);
}
function za(var_core_value_sigF020) {
  return var_core_value_sigF020 === undefined ? true : Z(var_core_value_sigF020) ? var_core_value_sigF020.space === Ke.Path ? typeof var_core_value_sigF020.along == "number" && Number.isFinite(var_core_value_sigF020.along) && typeof var_core_value_sigF020.normal == "number" && Number.isFinite(var_core_value_sigF020.normal) && var_core_value_sigF020.x === undefined && var_core_value_sigF020.y === undefined : var_core_value_sigF020.space === Ke.Canvas && typeof var_core_value_sigF020.x == "number" && Number.isFinite(var_core_value_sigF020.x) && typeof var_core_value_sigF020.y == "number" && Number.isFinite(var_core_value_sigF020.y) && var_core_value_sigF020.along === undefined && var_core_value_sigF020.normal === undefined : false;
}
function Ba(var_core_value_sigAECB) {
  if (!Z(var_core_value_sigAECB) || typeof var_core_value_sigAECB.id != "string" || var_core_value_sigAECB.id["trim"]().length === 0 || var_core_value_sigAECB.layout !== undefined && !Fa(var_core_value_sigAECB.layout) || "text" in var_core_value_sigAECB || "documentData" in var_core_value_sigAECB || "width" in var_core_value_sigAECB || "height" in var_core_value_sigAECB || "pathRatio" in var_core_value_sigAECB || "offset" in var_core_value_sigAECB || var_core_value_sigAECB.content !== undefined && typeof var_core_value_sigAECB.content != "string" && (!Z(var_core_value_sigAECB.content) || typeof var_core_value_sigAECB.content["id"] != "string" || var_core_value_sigAECB.content["id"].trim().length === 0 || var_core_value_sigAECB.content["body"] !== undefined && (!Z(var_core_value_sigAECB.content["body"]) || typeof var_core_value_sigAECB.content["body"].dataStream != "string"))) return false;
  let var_core_value_sigF759 = var_core_value_sigAECB.placement;
  if (var_core_value_sigF759 !== undefined && (!Z(var_core_value_sigF759) || !La(var_core_value_sigF759.anchor, Ma) || !La(var_core_value_sigF759.side, Na) || !La(var_core_value_sigF759.orientation, Pa) || !Ia(var_core_value_sigF759.pathRatio, 0, 1) || !Ia(var_core_value_sigF759.distance, 0) || !Ia(var_core_value_sigF759.alongOffset, 0) || !za(var_core_value_sigF759.offset))) return false;
  let var_core_value_sig52AE = var_core_value_sigAECB.style;
  return var_core_value_sig52AE === undefined || Z(var_core_value_sig52AE) && !("lineBreak" in var_core_value_sig52AE) && (var_core_value_sig52AE.interruptLine === undefined || typeof var_core_value_sig52AE.interruptLine == "boolean") && Ia(var_core_value_sig52AE.lineGap, 0) && Ra(var_core_value_sig52AE.fill) && Ra(var_core_value_sig52AE.stroke) && (var_core_value_sig52AE.stroke === undefined || Z(var_core_value_sig52AE.stroke) && Ia(var_core_value_sig52AE.stroke["width"], 0));
}
function Va(var_core_value_sig35A1) {
  return typeof (var_core_value_sig35A1 == null ? undefined : var_core_value_sig35A1.content) == "object" ? var_core_value_sig35A1.content : undefined;
}
function Ha(var_core_value_sig5F74) {
  var var_core_value_sig72A2;
  if (typeof (var_core_value_sig5F74 == null ? undefined : var_core_value_sig5F74.content) == "string") return var_core_value_sig5F74.content;
  let var_core_value_sig956E = ((var_core_value_sig72A2 = Va(var_core_value_sig5F74)) == null || (var_core_value_sig72A2 = var_core_value_sig72A2.body) == null ? undefined : var_core_value_sig72A2.dataStream) ?? "";
  return (var_core_value_sig956E.endsWith("\x0d\x0a") ? var_core_value_sig956E.slice(0, -2) : var_core_value_sig956E).replace(/\r/g, "\x0a");
}
function Ua(var_core_value_sig7B0C, var_core_value_sig0616 = false) {
  if (!Z(var_core_value_sig7B0C)) return var_core_value_sig7B0C;
  let var_core_value_sigDA4C = var_core_value_sig7B0C,
    var_core_value_sig5EDC = var_core_value_sig7B0C,
    var_core_value_sig3956 = "text" in var_core_value_sigDA4C || "documentData" in var_core_value_sigDA4C,
    var_core_value_sig182F = var_core_value_sig0616 || var_core_value_sig3956 || "width" in var_core_value_sigDA4C || "height" in var_core_value_sigDA4C || "pathRatio" in var_core_value_sigDA4C || "offset" in var_core_value_sigDA4C || Z(var_core_value_sig7B0C.style) && "lineBreak" in var_core_value_sig7B0C.style;
  if (var_core_value_sig3956) {
    let {
      text: var_core_value_sig3F3A,
      documentData: var_core_value_sigA984,
      ...var_core_value_sigA504
    } = var_core_value_sigDA4C;
    var_core_value_sig5EDC = {
      ...var_core_value_sigA504,
      content: var_core_value_sig7D37.deepClone(var_core_value_sigA504.content === undefined ? var_core_value_sigA984 ?? var_core_value_sig3F3A ?? "" : var_core_value_sigA504.content)
    };
  }
  if ("width" in var_core_value_sigDA4C || "height" in var_core_value_sigDA4C || var_core_value_sig3956 && var_core_value_sigDA4C.content === undefined) {
    let {
      width: var_core_value_sig05FF,
      height: var_core_value_sigFBF0,
      ...var_core_value_sig2F95
    } = var_core_value_sig5EDC;
    var_core_value_sig5EDC = {
      ...var_core_value_sig2F95,
      layout: var_core_value_sig2F95.layout === undefined ? {
        mode: Ge.FixedSize,
        width: var_core_value_sig05FF === undefined ? 96 : var_core_value_sig05FF,
        height: var_core_value_sigFBF0 === undefined ? 28 : var_core_value_sigFBF0
      } : var_core_value_sig2F95.layout
    };
  }
  if ("pathRatio" in var_core_value_sig5EDC) {
    let {
      pathRatio: var_core_value_sigF0E1,
      ...var_core_value_sig2D8D
    } = var_core_value_sig5EDC;
    var_core_value_sig5EDC = var_core_value_sig2D8D, var_core_value_sigF0E1 !== undefined && (var_core_value_sig2D8D.placement === undefined ? var_core_value_sig5EDC = {
      ...var_core_value_sig2D8D,
      placement: {
        anchor: He.Path,
        pathRatio: var_core_value_sigF0E1
      }
    } : Z(var_core_value_sig2D8D.placement) && var_core_value_sig2D8D.placement["anchor"] === He.Path && var_core_value_sig2D8D.placement["pathRatio"] === undefined && (var_core_value_sig5EDC = {
      ...var_core_value_sig2D8D,
      placement: {
        ...var_core_value_sig2D8D.placement,
        pathRatio: var_core_value_sigF0E1
      }
    }));
  }
  if (Z(var_core_value_sig7B0C.style) && "lineBreak" in var_core_value_sig7B0C.style) {
    let {
      lineBreak: var_core_value_sigE5A6,
      ...var_core_value_sigF449
    } = var_core_value_sig7B0C.style;
    var_core_value_sig5EDC = {
      ...var_core_value_sig5EDC,
      style: {
        ...var_core_value_sigF449,
        interruptLine: var_core_value_sigF449.interruptLine === undefined ? var_core_value_sigE5A6 : var_core_value_sigF449.interruptLine
      }
    };
  }
  if (var_core_value_sig182F && var_core_value_sig5EDC.placement === undefined && (var_core_value_sig5EDC = {
    ...var_core_value_sig5EDC,
    placement: {
      anchor: He.Auto
    }
  }), "offset" in var_core_value_sig5EDC) {
    let {
      offset: var_core_value_sig38C5,
      ...var_core_value_sigC87D
    } = var_core_value_sig5EDC;
    if (var_core_value_sig5EDC = var_core_value_sigC87D, var_core_value_sig38C5 !== undefined && Z(var_core_value_sigC87D.placement) && var_core_value_sigC87D.placement["offset"] === undefined) {
      let var_core_value_sigCF89 = Z(var_core_value_sig38C5) ? {
        x: var_core_value_sig38C5.x,
        y: var_core_value_sig38C5.y,
        space: Ke.Canvas
      } : var_core_value_sig38C5;
      var_core_value_sig5EDC = {
        ...var_core_value_sigC87D,
        placement: {
          ...var_core_value_sigC87D.placement,
          offset: var_core_value_sigCF89
        }
      };
    }
  }
  return var_core_value_sig5EDC;
}
function Wa(var_core_value_sig76FA) {
  if (var_core_value_sig76FA.type !== M.Connector || !Z(var_core_value_sig76FA.connectorData) || var_core_value_sig76FA.connectorData["labels"] !== undefined && !Array.isArray(var_core_value_sig76FA.connectorData["labels"])) return var_core_value_sig76FA;
  let var_core_value_sig960A = var_core_value_sig76FA.connectorData["label"];
  if (var_core_value_sig76FA.connectorData["labels"] === undefined && var_core_value_sig960A !== undefined && !Z(var_core_value_sig960A)) return var_core_value_sig76FA;
  let var_core_value_sigBE8E = var_core_value_sig76FA.connectorData["labels"] ?? (Z(var_core_value_sig960A) ? [var_core_value_sig960A] : []),
    var_core_value_sig294A = var_core_value_sigBE8E.map(var_core_value_sigCCDC => Ua(var_core_value_sigCCDC, var_core_value_sig76FA.connectorData["labels"] === undefined && Z(var_core_value_sig960A)));
  return !("label" in var_core_value_sig76FA.connectorData) && var_core_value_sig294A.every((var_core_value_sigC310, var_core_value_sigA4E8) => var_core_value_sigC310 === var_core_value_sigBE8E[var_core_value_sigA4E8]) ? var_core_value_sig76FA : {
    ...var_core_value_sig76FA,
    connectorData: qa(var_core_value_sig76FA.connectorData, var_core_value_sig294A)
  };
}
function Ga(var_core_value_sig31A6) {
  return Array.isArray(var_core_value_sig31A6) && var_core_value_sig31A6.every(Ba) && new Set(var_core_value_sig31A6.map(var_core_value_sigDC07 => var_core_value_sigDC07.id)).size === var_core_value_sig31A6.length;
}
function Ka(var_core_value_sigAA4F) {
  return var_core_value_sigAA4F.labels ?? [];
}
function qa(var_core_value_sig672C, var_core_value_sig7D0D) {
  let {
    label: var_core_value_sigE30C,
    ...var_core_value_sigC06A
  } = var_core_value_sig672C;
  return {
    ...var_core_value_sigC06A,
    labels: [...var_core_value_sig7D0D]
  };
}
function Ja(var_core_value_sig3CF8, var_core_value_sig3EC3, var_core_value_sigBD61) {
  let var_core_value_sig445D = Ka(var_core_value_sig3CF8),
    var_core_value_sigC15F = var_core_value_sig445D.findIndex(var_core_value_sig3474 => var_core_value_sig3474.id === var_core_value_sig3EC3);
  if (var_core_value_sigC15F < 0) return null;
  let var_core_value_sig73A8 = [...var_core_value_sig445D];
  return var_core_value_sig73A8[var_core_value_sigC15F] = var_core_value_sigBD61(var_core_value_sig445D[var_core_value_sigC15F]), qa(var_core_value_sig3CF8, var_core_value_sig73A8);
}
function Ya(var_core_value_sigE227) {
  if (var_core_value_sigE227.kind === "shapeBoundary" || var_core_value_sigE227.kind === "shapeSite") return var_core_value_sigE227.shapeId;
}
function Xa(var_core_value_sig6909) {
  return Array.from(new Set(var_core_value_sig6909.filter(var_core_value_sig4E80 => !!var_core_value_sig4E80)));
}
function Za(var_core_value_sigCFCC) {
  let var_core_value_sig0503 = [var_core_value_sigCFCC.connectorData["start"], var_core_value_sigCFCC.connectorData["end"]].map(Ya);
  return var_core_value_sig0503.some(var_core_value_sigD23B => !var_core_value_sigD23B) ? [] : Xa(var_core_value_sig0503);
}
function Qa(var_core_value_sigAA49) {
  return Xa([Ya(var_core_value_sigAA49.connectorData["start"]), Ya(var_core_value_sigAA49.connectorData["end"])]);
}
function $a(var_core_value_sigAB24) {
  return [var_core_value_sigAB24.connectorData["start"], var_core_value_sigAB24.connectorData["end"]].filter(var_core_value_sig2B2A => var_core_value_sig2B2A.kind === "free").map(var_core_value_sig0B5C => ({
    x: var_core_value_sig0B5C.x,
    y: var_core_value_sig0B5C.y
  }));
}
function eo(var_core_value_sig2F15, var_core_value_sig316C, var_core_value_sig75A2, var_core_value_sig95CE = "content") {
  let var_core_value_sig41FA = var_core_value_sig2F15[var_core_value_sig316C];
  if (!var_core_value_sig41FA || var_core_value_sig41FA.element["type"] !== M.Container) return false;
  let var_core_value_sig73C4 = U(var_core_value_sig2F15, var_core_value_sig316C);
  if (!var_core_value_sig73C4) return false;
  let var_core_value_sig3216 = var_core_value_sig41FA.element;
  if (var_core_value_sig95CE === "content" && var_core_value_sig3216.containerData["kind"] === "swimlane" && var_core_value_sig3216.containerData["swimlane"]) return var_core_value_sig75A2.every(var_core_value_sig7D42 => !!Vi(var_core_value_sig3216, var_core_value_sig73C4, var_core_value_sig7D42));
  let var_core_value_sigF636 = bi(var_core_value_sig3216, var_core_value_sig73C4),
    var_core_value_sig2EE8 = var_core_value_sig95CE === "outer" ? var_core_value_sigF636.outerBounds : var_core_value_sigF636.contentBounds;
  return var_core_value_sig75A2.every(var_core_value_sig8FDE => gi(var_core_value_sig2EE8, {
    left: var_core_value_sig8FDE.x,
    top: var_core_value_sig8FDE.y,
    width: 0,
    height: 0
  }));
}
function to(var_core_value_sig6177, var_core_value_sig723F, var_core_value_sigADA0) {
  let var_core_value_sig2F52 = $a(var_core_value_sig723F);
  if (var_core_value_sig2F52.length === 0) return var_core_value_sig723F.parentId;
  let var_core_value_sig8FC3 = [...(Vn(var_core_value_sig6177[var_core_value_sigADA0]) ? [var_core_value_sigADA0] : []), ...V(var_core_value_sig6177, var_core_value_sigADA0)];
  return var_core_value_sig723F.parentId && var_core_value_sig8FC3.includes(var_core_value_sig723F.parentId) && eo(var_core_value_sig6177, var_core_value_sig723F.parentId, var_core_value_sig2F52) ? var_core_value_sig723F.parentId : var_core_value_sig8FC3.find(var_core_value_sig78E6 => eo(var_core_value_sig6177, var_core_value_sig78E6, var_core_value_sig2F52));
}
function no(var_core_value_sigF5B3, var_core_value_sig074A) {
  let var_core_value_sig5FBE = $a(var_core_value_sig074A);
  if (!(!var_core_value_sig074A.parentId || var_core_value_sig5FBE.length !== 2)) return eo(var_core_value_sigF5B3, var_core_value_sig074A.parentId, var_core_value_sig5FBE, "outer") ? var_core_value_sig074A.parentId : undefined;
}
function ro(var_core_value_sig9D61, var_core_value_sigF126) {
  let var_core_value_sig9AF8 = var_core_value_sigF126.map(var_core_value_sig541F => [...(Vn(var_core_value_sig9D61[var_core_value_sig541F]) ? [var_core_value_sig541F] : []), ...V(var_core_value_sig9D61, var_core_value_sig541F)]),
    var_core_value_sig7537 = var_core_value_sig9AF8[0];
  return var_core_value_sig7537 == null ? undefined : var_core_value_sig7537.find(var_core_value_sig417B => var_core_value_sig9AF8.every(var_core_value_sig00CB => var_core_value_sig00CB.includes(var_core_value_sig417B)));
}
function io(var_core_value_sig50C7, var_core_value_sig9B62, var_core_value_sig470B) {
  let var_core_value_sig7525 = var_core_value_sig50C7[var_core_value_sig470B];
  if (!var_core_value_sig7525 || var_core_value_sig7525.element["type"] !== M.Container || var_core_value_sig7525.element["containerData"].kind !== "swimlane") return;
  if (var_core_value_sig9B62.kind === "free") {
    var var_core_value_sig95B5;
    let var_core_value_sigAA90 = U(var_core_value_sig50C7, var_core_value_sig470B);
    return var_core_value_sigAA90 ? (var_core_value_sig95B5 = Vi(var_core_value_sig7525.element, var_core_value_sigAA90, var_core_value_sig9B62)) == null ? undefined : var_core_value_sig95B5.lane["id"] : undefined;
  }
  if (var_core_value_sig9B62.kind !== "shapeBoundary" && var_core_value_sig9B62.kind !== "shapeSite") return;
  let var_core_value_sig2347 = var_core_value_sig9B62.shapeId,
    var_core_value_sigB20E = new Set();
  for (; var_core_value_sig2347 && !var_core_value_sigB20E.has(var_core_value_sig2347);) {
    var_core_value_sigB20E.add(var_core_value_sig2347);
    let var_core_value_sig77EE = var_core_value_sig50C7[var_core_value_sig2347];
    if (!var_core_value_sig77EE) return;
    if (var_core_value_sig77EE.element["parentId"] === var_core_value_sig470B) return var_core_value_sig77EE.element["laneId"];
    var_core_value_sig2347 = var_core_value_sig77EE.element["parentId"];
  }
}
function ao(var_core_value_sig8ADE, var_core_value_sig7F51, var_core_value_sig622A) {
  if (!var_core_value_sig622A) return;
  let var_core_value_sig40EC = var_core_value_sig8ADE[var_core_value_sig622A];
  if (!var_core_value_sig40EC || var_core_value_sig40EC.element["type"] !== M.Container || var_core_value_sig40EC.element["containerData"].kind !== "swimlane") return;
  let var_core_value_sig27C9 = [var_core_value_sig7F51.connectorData["start"], var_core_value_sig7F51.connectorData["end"]].map(var_core_value_sigE92D => io(var_core_value_sig8ADE, var_core_value_sigE92D, var_core_value_sig622A)),
    var_core_value_sigF296 = var_core_value_sig27C9[0];
  return var_core_value_sigF296 && var_core_value_sig27C9.every(var_core_value_sig9940 => var_core_value_sig9940 === var_core_value_sigF296) ? var_core_value_sigF296 : undefined;
}
function oo(var_core_value_sigD001, var_core_value_sig4940) {
  let var_core_value_sig7E0F = Za(var_core_value_sig4940),
    var_core_value_sig9785;
  if (var_core_value_sig7E0F.length === 0 || var_core_value_sig7E0F.some(var_core_value_sig682D => !var_core_value_sigD001[var_core_value_sig682D])) {
    let var_core_value_sig1435 = Qa(var_core_value_sig4940);
    return var_core_value_sig1435.length === 1 && var_core_value_sigD001[var_core_value_sig1435[0]] ? (var_core_value_sig9785 = to(var_core_value_sigD001, var_core_value_sig4940, var_core_value_sig1435[0]), {
      parentId: var_core_value_sig9785,
      laneId: ao(var_core_value_sigD001, var_core_value_sig4940, var_core_value_sig9785)
    }) : var_core_value_sig1435.length === 0 ? (var_core_value_sig9785 = no(var_core_value_sigD001, var_core_value_sig4940), {
      parentId: var_core_value_sig9785,
      laneId: ao(var_core_value_sigD001, var_core_value_sig4940, var_core_value_sig9785)
    }) : {};
  }
  return var_core_value_sig9785 = ro(var_core_value_sigD001, var_core_value_sig7E0F), {
    parentId: var_core_value_sig9785,
    laneId: ao(var_core_value_sigD001, var_core_value_sig4940, var_core_value_sig9785)
  };
}
function Q(var_core_value_sig235B) {
  return (var_core_value_sig235B == null ? undefined : var_core_value_sig235B.element["type"]) === M.Connector;
}
function so(var_core_value_sigBCA8) {
  return (var_core_value_sigBCA8 == null ? undefined : var_core_value_sigBCA8.type) === M.Container && var_core_value_sigBCA8.containerData["behavior"].membershipAwareness === "structural";
}
function co(var_core_value_sig0C8C) {
  return (var_core_value_sig0C8C == null ? undefined : var_core_value_sig0C8C.type) === M.Container && var_core_value_sig0C8C.containerData["behavior"].membershipAwareness !== "structural";
}
function lo(var_core_value_sig56FC) {
  var var_core_value_sig7EC8;
  let var_core_value_sig0454 = var_core_value_sig56FC == null ? undefined : var_core_value_sig56FC.custom;
  return typeof (var_core_value_sig0454 == null || (var_core_value_sig7EC8 = var_core_value_sig0454.structured) == null ? undefined : var_core_value_sig7EC8.modeId) == "string" && typeof var_core_value_sig0454.structured["structureScopeId"] == "string" && typeof var_core_value_sig0454.structured["semanticRole"] == "string";
}
function uo(var_core_value_sig71F7) {
  var var_core_value_sig8D12;
  let var_core_value_sigEEC4 = var_core_value_sig71F7 == null ? undefined : var_core_value_sig71F7.custom;
  return lo(var_core_value_sig71F7) && typeof (var_core_value_sigEEC4 == null || (var_core_value_sig8D12 = var_core_value_sigEEC4.structured) == null ? undefined : var_core_value_sig8D12.structureScopeId) == "string" ? var_core_value_sigEEC4.structured["structureScopeId"] : null;
}
function fo(var_core_value_sig0EDB) {
  return var_core_value_sig0EDB && "element" in var_core_value_sig0EDB ? var_core_value_sig0EDB.element : var_core_value_sig0EDB;
}
function po(var_core_value_sig1C1B1, var_core_value_sig083D) {
  let var_core_value_sig70CE = new Set(var_core_value_sig083D),
    var_core_value_sig4B4A = new Map(),
    var_core_value_sig6585 = new Map();
  Object.entries(var_core_value_sig1C1B1).forEach(([var_core_value_sig4082, var_core_value_sigC049]) => {
    let var_core_value_sigE5C3 = fo(var_core_value_sigC049),
      var_core_value_sigCCAA = uo(var_core_value_sigE5C3);
    if (!(!var_core_value_sigE5C3 || !var_core_value_sigCCAA)) {
      if (so(var_core_value_sigE5C3)) {
        var_core_value_sig4B4A.set(var_core_value_sigCCAA, var_core_value_sig4082);
        return;
      }
      if (var_core_value_sigE5C3.type !== M.Connector) {
        let var_core_value_sig9A8D = var_core_value_sig6585.get(var_core_value_sigCCAA) ?? [];
        var_core_value_sig9A8D.push(var_core_value_sig4082), var_core_value_sig6585.set(var_core_value_sigCCAA, var_core_value_sig9A8D);
      }
    }
  });
  let var_core_value_sig743E = new Set();
  if (var_core_value_sig6585.forEach((var_core_value_sigF32D, var_core_value_sig9427) => {
    var_core_value_sig4B4A.has(var_core_value_sig9427) && var_core_value_sigF32D.length > 0 && var_core_value_sigF32D.every(var_core_value_sig9F76 => var_core_value_sig70CE.has(var_core_value_sig9F76)) && var_core_value_sig743E.add(var_core_value_sig9427);
  }), var_core_value_sig743E.size === 0) return [...var_core_value_sig083D];
  let var_core_value_sig9872 = [],
    var_core_value_sig049A = new Set();
  return var_core_value_sig083D.forEach(var_core_value_sig21F4 => {
    let var_core_value_sigA345 = uo(fo(var_core_value_sig1C1B1[var_core_value_sig21F4])),
      var_core_value_sigA468 = var_core_value_sigA345 && var_core_value_sig743E.has(var_core_value_sigA345) ? var_core_value_sig4B4A.get(var_core_value_sigA345) ?? var_core_value_sig21F4 : var_core_value_sig21F4;
    var_core_value_sig049A.has(var_core_value_sigA468) || (var_core_value_sig049A.add(var_core_value_sigA468), var_core_value_sig9872.push(var_core_value_sigA468));
  }), var_core_value_sig9872;
}
const mo = "board.mutation.update-element";
function ho(var_core_value_sig58301) {
  return var_core_value_sig58301.type !== M.Connector || !("label" in var_core_value_sig58301.connectorData) && (var_core_value_sig58301.connectorData["labels"] === undefined || Ga(var_core_value_sig58301.connectorData["labels"]));
}
function go(var_core_value_sig69CB, var_core_value_sigB5CC) {
  let var_core_value_sig823B = tn(var_core_value_sig69CB, Object.keys(var_core_value_sig69CB), var_core_value_sigB5CC);
  return Object.values(var_core_value_sig69CB).forEach(var_core_value_sig1561 => {
    !Q(var_core_value_sig1561) || var_core_value_sig823B.includes(var_core_value_sig1561.elementId) || Qa(var_core_value_sig1561.element).some(var_core_value_sigB008 => var_core_value_sig823B.includes(var_core_value_sigB008)) && var_core_value_sig823B.push(var_core_value_sig1561.elementId);
  }), var_core_value_sig823B;
}
function _o(var_core_value_sigC9B0, var_core_value_sigAA99, var_core_value_sig1D86 = {}) {
  if (!ho(var_core_value_sigAA99) || Aa(var_core_value_sigAA99) && !var_core_value_sig1D86.allowEmbedAnchor || Aa(var_core_value_sigAA99) && (var_core_value_sigAA99.parentId || var_core_value_sigAA99.laneId) || Aa(var_core_value_sigAA99) && ((var_core_value_sigAA99.transform["rotation"] ?? 0) !== 0 || var_core_value_sigAA99.transform["flipX"] === true || var_core_value_sigAA99.transform["flipY"] === true) || Aa(var_core_value_sigAA99) && Object.values(var_core_value_sigC9B0).some(var_core_value_sigDF14 => ja(var_core_value_sigDF14.element, var_core_value_sigAA99)) || !Ao(var_core_value_sigAA99) || !xo(var_core_value_sigC9B0, var_core_value_sigAA99) || var_core_value_sigC9B0[var_core_value_sigAA99.id]) return false;
  if (!var_core_value_sigAA99.parentId) return true;
  let var_core_value_sig1F4D = var_core_value_sigC9B0[var_core_value_sigAA99.parentId],
    var_core_value_sig91D2 = var_core_value_sig1F4D == null ? undefined : var_core_value_sig1F4D.element;
  if ((var_core_value_sig91D2 == null ? undefined : var_core_value_sig91D2.type) !== M.Container) return false;
  let var_core_value_sigBF6A = var_core_value_sig91D2.containerData["behavior"];
  return !var_core_value_sig1D86.allowLockedParent && (var_core_value_sig1F4D.hidden === true || var_core_value_sig91D2.visible === false || var_core_value_sig91D2.locked === true || var_core_value_sig91D2.selectable === false || var_core_value_sigBF6A.membershipLocked) || !var_core_value_sig1D86.allowLockedParent && ko(var_core_value_sigC9B0, var_core_value_sigAA99) || !var_core_value_sigBF6A.acceptsChildren ? false : var_core_value_sigAA99.type !== M.Container || var_core_value_sigBF6A.acceptsContainer && var_core_value_sigBF6A.allowNested;
}
function vo(var_core_value_sigC8CD, var_core_value_sig1D8D, var_core_value_sigFCDA = {}) {
  var var_core_value_sig4A8B;
  let var_core_value_sigE2301 = var_core_value_sigC8CD[var_core_value_sig1D8D];
  if (!var_core_value_sigE2301 || var_core_value_sigE2301.element["locked"] === true || var_core_value_sigE2301.element["type"] === M.Container && Object.values(var_core_value_sigC8CD).some(var_core_value_sig842F => var_core_value_sig842F.element["parentId"] === var_core_value_sig1D8D) || Object.values(var_core_value_sigC8CD).some(var_core_value_sigC4C0 => Q(var_core_value_sigC4C0) && Qa(var_core_value_sigC4C0.element).includes(var_core_value_sig1D8D))) return false;
  let var_core_value_sigB8AF = var_core_value_sigE2301.element["parentId"] ? (var_core_value_sig4A8B = var_core_value_sigC8CD[var_core_value_sigE2301.element["parentId"]]) == null ? undefined : var_core_value_sig4A8B.element : undefined;
  return !var_core_value_sigFCDA.allowLockedParent && ko(var_core_value_sigC8CD, var_core_value_sigE2301.element) ? false : !!var_core_value_sigFCDA.allowLockedParent || (var_core_value_sigB8AF == null ? undefined : var_core_value_sigB8AF.type) !== M.Container || !var_core_value_sigB8AF.containerData["behavior"].membershipLocked;
}
function yo(var_core_value_sigD4B6, var_core_value_sigB90E, var_core_value_sigAEF2 = {}) {
  var var_core_value_sig4453;
  let var_core_value_sigFA8E = var_core_value_sigD4B6[var_core_value_sigB90E];
  if (!var_core_value_sigFA8E) return false;
  let var_core_value_sig9D66 = var_core_value_sigFA8E.element["parentId"] ? (var_core_value_sig4453 = var_core_value_sigD4B6[var_core_value_sigFA8E.element["parentId"]]) == null ? undefined : var_core_value_sig4453.element : undefined,
    var_core_value_sig399F = go(var_core_value_sigD4B6, [var_core_value_sigB90E]);
  return !var_core_value_sigAEF2.allowLockedParent && ko(var_core_value_sigD4B6, var_core_value_sigFA8E.element) || var_core_value_sig399F.some(var_core_value_sig214A => {
    var var_core_value_sigCCC3;
    return var_core_value_sigAEF2.allowLockedTarget && var_core_value_sig214A === var_core_value_sigB90E ? false : ((var_core_value_sigCCC3 = var_core_value_sigD4B6[var_core_value_sig214A]) == null ? undefined : var_core_value_sigCCC3.element["locked"]) === true;
  }) ? false : !!var_core_value_sigAEF2.allowLockedParent || (var_core_value_sig9D66 == null ? undefined : var_core_value_sig9D66.type) !== M.Container || !var_core_value_sig9D66.containerData["behavior"].membershipLocked;
}
function bo(var_core_value_sig57C2) {
  return (var_core_value_sig57C2 == null ? undefined : var_core_value_sig57C2.angle) ?? (var_core_value_sig57C2 == null ? undefined : var_core_value_sig57C2.rotation) ?? 0;
}
function xo(var_core_value_sigA85E, var_core_value_sig65AA) {
  var var_core_value_sigC6DD, var_core_value_sig1300;
  if (!var_core_value_sig65AA.laneId) return true;
  if (!var_core_value_sig65AA.parentId) return false;
  let var_core_value_sig05BB = (var_core_value_sigC6DD = var_core_value_sigA85E[var_core_value_sig65AA.parentId]) == null ? undefined : var_core_value_sigC6DD.element;
  return (var_core_value_sig05BB == null ? undefined : var_core_value_sig05BB.type) === M.Container && var_core_value_sig05BB.containerData["kind"] === "swimlane" && ((var_core_value_sig1300 = var_core_value_sig05BB.containerData["swimlane"]) == null ? undefined : var_core_value_sig1300.lanes["some"](var_core_value_sig986E => var_core_value_sig986E.id === var_core_value_sig65AA.laneId)) === true;
}
function So(var_core_value_sig91CD, var_core_value_sig2AF0) {
  var var_core_value_sig796D;
  if (var_core_value_sig2AF0.type !== M.Container) return true;
  let var_core_value_sig7D2B = new Set(var_core_value_sig2AF0.containerData["kind"] === "swimlane" ? ((var_core_value_sig796D = var_core_value_sig2AF0.containerData["swimlane"]) == null ? undefined : var_core_value_sig796D.lanes["map"](var_core_value_sig537C => var_core_value_sig537C.id)) ?? [] : []);
  return Object.values(var_core_value_sig91CD).every(var_core_value_sigBBBC => {
    let var_core_value_sig5440 = var_core_value_sigBBBC.element;
    return var_core_value_sig5440.id === var_core_value_sig2AF0.id || var_core_value_sig5440.parentId !== var_core_value_sig2AF0.id || !var_core_value_sig5440.laneId || var_core_value_sig2AF0.containerData["kind"] === "swimlane" && var_core_value_sig7D2B.has(var_core_value_sig5440.laneId);
  });
}
function Co(var_core_value_sigEA89, var_core_value_sig97B1) {
  return (var_core_value_sigEA89 == null ? undefined : var_core_value_sigEA89.type) !== M.Container || var_core_value_sig97B1.type !== M.Container || var_core_value_sigEA89.containerData["kind"] !== "swimlane" || var_core_value_sig97B1.containerData["kind"] !== "swimlane" || !var_core_value_sigEA89.containerData["swimlane"] || !var_core_value_sig97B1.containerData["swimlane"] || !ki(var_core_value_sigEA89.containerData["swimlane"], var_core_value_sig97B1.containerData["swimlane"]);
}
function wo(var_core_value_sigD238) {
  return var_core_value_sigD238.type !== M.Container || var_core_value_sigD238.containerData["kind"] !== "swimlane" || !!var_core_value_sigD238.containerData["swimlane"] && wi(var_core_value_sigD238.containerData["swimlane"]);
}
function To(var_core_value_sigA1F8) {
  let var_core_value_sig71F3 = var_core_value_sigA1F8 == null ? undefined : var_core_value_sigA1F8.element;
  return (var_core_value_sig71F3 == null ? undefined : var_core_value_sig71F3.type) === M.Container && (var_core_value_sigA1F8 == null ? undefined : var_core_value_sigA1F8.hidden) !== true && var_core_value_sig71F3.visible !== false && var_core_value_sig71F3.locked !== true && var_core_value_sig71F3.selectable !== false;
}
function Eo(var_core_value_sigD652) {
  return Object.values(var_core_value_sigD652).every(var_core_value_sigE28B => {
    let var_core_value_sig0FD9 = var_core_value_sigE28B.element;
    if (var_core_value_sig0FD9.type !== M.Container || !var_core_value_sig0FD9.containerData["behavior"].membershipLocked || so(var_core_value_sig0FD9)) return true;
    let var_core_value_sig5649 = U(var_core_value_sigD652, var_core_value_sigE28B.elementId);
    return var_core_value_sig5649 ? Object.values(var_core_value_sigD652).every(var_core_value_sig8721 => {
      let var_core_value_sig08BA = var_core_value_sig8721.element;
      if (var_core_value_sig08BA.parentId !== var_core_value_sigE28B.elementId || var_core_value_sig08BA.type === M.Connector) return true;
      let var_core_value_sigDBB5 = U(var_core_value_sigD652, var_core_value_sig8721.elementId);
      return !!var_core_value_sigDBB5 && gi(var_core_value_sig5649, var_core_value_sigDBB5);
    }) : false;
  });
}
function Do(var_core_value_sig6289, var_core_value_sigB20A, var_core_value_sig0591, var_core_value_sigDBF1) {
  return Eo({
    ...var_core_value_sig6289,
    [var_core_value_sigB20A.elementId]: {
      ...var_core_value_sigB20A,
      element: var_core_value_sig0591,
      transform: var_core_value_sigDBF1 ?? var_core_value_sigB20A.transform
    }
  });
}
function Oo(var_core_value_sig0358) {
  var_core_value_sig0358.forEach(var_core_value_sigAF82 => {
    if (var_core_value_sigAF82.id !== mo) return;
    let var_core_value_sig21A2 = var_core_value_sigAF82.params;
    var_core_value_sig21A2 && Object.defineProperty(var_core_value_sig21A2, "allowPendingMembershipLockedCoverage", {
      value: true,
      enumerable: false,
      configurable: true
    });
  });
}
function ko(var_core_value_sigC4C9, var_core_value_sig56ED) {
  let var_core_value_sigFD401 = var_core_value_sig56ED.parentId,
    var_core_value_sigD649 = new Set([var_core_value_sig56ED.id]);
  for (; var_core_value_sigFD401;) {
    if (var_core_value_sigD649.has(var_core_value_sigFD401)) return true;
    let var_core_value_sigCFAC = var_core_value_sigC4C9[var_core_value_sigFD401];
    if (!var_core_value_sigCFAC || var_core_value_sigCFAC.element["type"] !== M.Container || !To(var_core_value_sigCFAC)) return true;
    var_core_value_sigD649.add(var_core_value_sigFD401), var_core_value_sigFD401 = var_core_value_sigCFAC.element["parentId"];
  }
  return false;
}
function Ao(var_core_value_sig0E88, var_core_value_sig13C8) {
  let var_core_value_sigE521 = var_core_value_sig0E88.transform["rotation"] ?? 0,
    var_core_value_sig0571 = var_core_value_sig13C8 ? bo(var_core_value_sig13C8) : 0;
  return var_core_value_sig0E88.type !== M.Container || var_core_value_sigE521 === 0 && var_core_value_sig0571 === 0 && (!var_core_value_sig0E88.containerData["behavior"].membershipLocked || so(var_core_value_sig0E88) || var_core_value_sig0E88.containerData["behavior"].autoResize);
}
function jo(var_core_value_sig43F4, var_core_value_sig37F8, var_core_value_sig45D3, var_core_value_sigE2F3, var_core_value_sig9CB1 = {}) {
  var var_core_value_sigFB76;
  if (!var_core_value_sig37F8 || var_core_value_sig45D3.type !== var_core_value_sig37F8.type || !ho(var_core_value_sig45D3)) return false;
  let var_core_value_sig58A5 = Aa(var_core_value_sig37F8),
    var_core_value_sigA486 = Aa(var_core_value_sig45D3);
  if (var_core_value_sig58A5 !== var_core_value_sigA486) return false;
  if (var_core_value_sig58A5 && var_core_value_sigA486) {
    let var_core_value_sig5C1D = ka(var_core_value_sig37F8),
      var_core_value_sig4CBA = ka(var_core_value_sig45D3);
    if ((var_core_value_sig5C1D == null ? undefined : var_core_value_sig5C1D.embedId) !== (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.embedId) || (var_core_value_sig5C1D == null ? undefined : var_core_value_sig5C1D.hostAnchorId) !== (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.hostAnchorId) || (var_core_value_sig5C1D == null ? undefined : var_core_value_sig5C1D.childUnitId) !== (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.childUnitId) || (var_core_value_sig5C1D == null ? undefined : var_core_value_sig5C1D.childType) !== (var_core_value_sig4CBA == null ? undefined : var_core_value_sig4CBA.childType)) return false;
  }
  if (var_core_value_sigA486 && (var_core_value_sig45D3.parentId || var_core_value_sig45D3.laneId || (var_core_value_sig45D3.transform["rotation"] ?? 0) !== 0 || var_core_value_sig45D3.transform["flipX"] === true || var_core_value_sig45D3.transform["flipY"] === true || var_core_value_sigE2F3 != null && bo(var_core_value_sigE2F3) !== 0 || (var_core_value_sigE2F3 == null ? undefined : var_core_value_sigE2F3.flipX) === true || (var_core_value_sigE2F3 == null ? undefined : var_core_value_sigE2F3.flipY) === true) || !Ao(var_core_value_sig45D3, var_core_value_sigE2F3) || !wo(var_core_value_sig45D3) || !xo(var_core_value_sig43F4, var_core_value_sig45D3) || !So(var_core_value_sig43F4, var_core_value_sig45D3) || !Co(var_core_value_sig37F8, var_core_value_sig45D3) || Wn(var_core_value_sig43F4, var_core_value_sig45D3.id, var_core_value_sig45D3.parentId)) return false;
  let var_core_value_sigB0DE = var_core_value_sig43F4[var_core_value_sig37F8.id];
  if (!var_core_value_sigB0DE || !var_core_value_sig9CB1.allowInactiveTarget && var_core_value_sigB0DE.hidden === true || !var_core_value_sig9CB1.allowInactiveTarget && var_core_value_sig37F8.visible === false || !var_core_value_sig9CB1.allowLockedTarget && var_core_value_sig37F8.locked === true || !var_core_value_sig9CB1.allowInactiveTarget && var_core_value_sig37F8.selectable === false || !var_core_value_sig9CB1.allowPendingMembershipLockedCoverage && !Do(var_core_value_sig43F4, var_core_value_sigB0DE, var_core_value_sig45D3, var_core_value_sigE2F3)) return false;
  if (var_core_value_sig45D3.parentId === var_core_value_sig37F8.parentId) return !var_core_value_sig45D3.parentId || To(var_core_value_sig43F4[var_core_value_sig45D3.parentId]) && !ko(var_core_value_sig43F4, var_core_value_sig37F8);
  let var_core_value_sig6793 = var_core_value_sig37F8.parentId ? (var_core_value_sigFB76 = var_core_value_sig43F4[var_core_value_sig37F8.parentId]) == null ? undefined : var_core_value_sigFB76.element : undefined;
  if ((var_core_value_sig6793 == null ? undefined : var_core_value_sig6793.type) === M.Container && var_core_value_sig6793.containerData["behavior"].membershipLocked) return false;
  if (!var_core_value_sig45D3.parentId) return true;
  let var_core_value_sigECD2 = var_core_value_sig43F4[var_core_value_sig45D3.parentId],
    var_core_value_sigD28E = var_core_value_sigECD2 == null ? undefined : var_core_value_sigECD2.element;
  if ((var_core_value_sigD28E == null ? undefined : var_core_value_sigD28E.type) !== M.Container) return false;
  let var_core_value_sigB896 = var_core_value_sigD28E.containerData["behavior"];
  return var_core_value_sigECD2.hidden === true || var_core_value_sigD28E.visible === false || var_core_value_sigD28E.locked === true || var_core_value_sigD28E.selectable === false || var_core_value_sigB896.membershipLocked || !var_core_value_sigB896.acceptsChildren ? false : var_core_value_sig45D3.type !== M.Container || var_core_value_sigB896.acceptsContainer && var_core_value_sigB896.allowNested;
}
function Mo(var_core_value_sig22D9, var_core_value_sig7E70) {
  let var_core_value_sig9CCC = {
    ...var_core_value_sig22D9
  };
  var_core_value_sig7E70.forEach(var_core_value_sig8E65 => {
    let var_core_value_sig772C = var_core_value_sig8E65.params;
    !var_core_value_sig772C.elementId || !var_core_value_sig772C.element || !var_core_value_sig9CCC[var_core_value_sig772C.elementId] || (var_core_value_sig9CCC[var_core_value_sig772C.elementId] = {
      ...var_core_value_sig9CCC[var_core_value_sig772C.elementId],
      element: var_core_value_sig772C.element,
      transform: var_core_value_sig772C.transform ?? var_core_value_sig9CCC[var_core_value_sig772C.elementId].transform
    });
  });
  let var_core_value_sigEB93 = var_core_value_sig7E70.every(var_core_value_sigF309 => {
    var var_core_value_sig44F9;
    let var_core_value_sigE532 = var_core_value_sigF309.params;
    return !var_core_value_sigE532.elementId || !var_core_value_sigE532.element ? false : jo(var_core_value_sig9CCC, (var_core_value_sig44F9 = var_core_value_sig22D9[var_core_value_sigE532.elementId]) == null ? undefined : var_core_value_sig44F9.element, var_core_value_sigE532.element, var_core_value_sigE532.transform, var_core_value_sigE532);
  });
  return var_core_value_sigEB93 && Oo(var_core_value_sig7E70), var_core_value_sigEB93;
}
function No(var_core_value_sig8F13, var_core_value_sigAC84) {
  let var_core_value_sig1312 = {
    ...var_core_value_sig8F13
  };
  for (let var_core_value_sigF381 of var_core_value_sigAC84) {
    if (var_core_value_sigF381.id === "board.mutation.add-element") {
      let var_core_value_sigC259 = var_core_value_sigF381.params;
      if (!var_core_value_sigC259.element || !_o(var_core_value_sig1312, var_core_value_sigC259.element, var_core_value_sigC259)) return false;
      var_core_value_sig1312[var_core_value_sigC259.element["id"]] = {
        unitId: "",
        subUnitId: "",
        elementId: var_core_value_sigC259.element["id"],
        element: var_core_value_sigC259.element,
        transform: {
          left: var_core_value_sigC259.element["transform"].left,
          top: var_core_value_sigC259.element["transform"].top,
          width: var_core_value_sigC259.element["transform"].width,
          height: var_core_value_sigC259.element["transform"].height,
          angle: var_core_value_sigC259.element["transform"].rotation ?? 0,
          flipX: var_core_value_sigC259.element["transform"].flipX,
          flipY: var_core_value_sigC259.element["transform"].flipY
        }
      };
      continue;
    }
    if (var_core_value_sigF381.id === mo) {
      var var_core_value_sig18A9;
      let var_core_value_sig9C9F = var_core_value_sigF381.params;
      if (!var_core_value_sig9C9F.elementId || !var_core_value_sig9C9F.element || var_core_value_sig9C9F.element["id"] !== var_core_value_sig9C9F.elementId || !jo(var_core_value_sig1312, (var_core_value_sig18A9 = var_core_value_sig1312[var_core_value_sig9C9F.elementId]) == null ? undefined : var_core_value_sig18A9.element, var_core_value_sig9C9F.element, var_core_value_sig9C9F.transform, {
        ...var_core_value_sig9C9F,
        allowPendingMembershipLockedCoverage: true
      })) return false;
      var_core_value_sig1312[var_core_value_sig9C9F.elementId] = {
        ...var_core_value_sig1312[var_core_value_sig9C9F.elementId],
        element: var_core_value_sig9C9F.element,
        transform: var_core_value_sig9C9F.transform ?? var_core_value_sig1312[var_core_value_sig9C9F.elementId].transform
      };
      continue;
    }
    if (var_core_value_sigF381.id === "board.mutation.remove-element-only") {
      let var_core_value_sigFDEA = var_core_value_sigF381.params;
      if (!var_core_value_sigFDEA.elementId || !vo(var_core_value_sig1312, var_core_value_sigFDEA.elementId, var_core_value_sigFDEA)) return false;
      delete var_core_value_sig1312[var_core_value_sigFDEA.elementId];
      continue;
    }
    if (var_core_value_sigF381.id === "board.mutation.remove-element") {
      let var_core_value_sig86D0 = var_core_value_sigF381.params;
      if (!var_core_value_sig86D0.elementId || !yo(var_core_value_sig1312, var_core_value_sig86D0.elementId, var_core_value_sig86D0)) return false;
      go(var_core_value_sig1312, [var_core_value_sig86D0.elementId]).forEach(var_core_value_sig2AD0 => {
        delete var_core_value_sig1312[var_core_value_sig2AD0];
      });
      continue;
    }
    return false;
  }
  return Eo(var_core_value_sig1312) ? (Oo(var_core_value_sigAC84), true) : false;
}
function Po(var_core_value_sigE028) {
  return !!var_core_value_sigE028 && Object.keys(var_core_value_sigE028).length > 0;
}
function Fo(var_core_value_sig8FC31) {
  return !!(var_core_value_sig8FC31 != null && var_core_value_sig8FC31.length);
}
function Io(var_core_value_sig76A1) {
  return Fo(var_core_value_sig76A1.slideOrder) || Po(var_core_value_sig76A1.slides);
}
function Lo(var_core_value_sig642F, var_core_value_sigF190 = []) {
  return Io(var_core_value_sig642F) ? Fo(var_core_value_sig642F.slideOrder) ? var_core_value_sig642F.slideOrder : var_core_value_sigF190 : Fo(var_core_value_sig642F.pageOrder) ? var_core_value_sig642F.pageOrder : var_core_value_sigF190;
}
function Ro(var_core_value_sig5BF0, var_core_value_sig4144 = {}) {
  return Io(var_core_value_sig5BF0) ? Po(var_core_value_sig5BF0.slides) ? var_core_value_sig5BF0.slides : var_core_value_sig4144 : Po(var_core_value_sig5BF0.pages) ? var_core_value_sig5BF0.pages : var_core_value_sig4144;
}
function zo(var_core_value_sig81CB, var_core_value_sig7C8C) {
  return Io(var_core_value_sig81CB) ? var_core_value_sig81CB.activeSlideId ?? var_core_value_sig81CB.activePageId ?? var_core_value_sig7C8C[0] : var_core_value_sig81CB.activePageId ?? var_core_value_sig7C8C[0];
}
function Bo(var_core_value_sigF533, var_core_value_sig018A) {
  var var_core_value_sigECD9;
  return var_core_value_sigF533.pages[var_core_value_sig018A] ?? ((var_core_value_sigECD9 = var_core_value_sigF533.slides) == null ? undefined : var_core_value_sigECD9[var_core_value_sig018A]);
}
function Vo(var_core_value_sig900B) {
  var var_core_value_sig82F5;
  return var_core_value_sig900B.activePageId ?? var_core_value_sig900B.activeSlideId ?? var_core_value_sig900B.pageOrder[0] ?? ((var_core_value_sig82F5 = var_core_value_sig900B.slideOrder) == null ? undefined : var_core_value_sig82F5[0]);
}
function Ho(var_core_value_sigB2AC, var_core_value_sigECB5, var_core_value_sigA422) {
  var var_core_value_sigDA36, var_core_value_sig2A70;
  var_core_value_sigB2AC.pages[var_core_value_sigECB5] || (var_core_value_sigB2AC.pages = {
    ...var_core_value_sigB2AC.pages,
    [var_core_value_sigECB5]: var_core_value_sigA422
  }), ((var_core_value_sigDA36 = var_core_value_sigB2AC.slides) == null ? undefined : var_core_value_sigDA36[var_core_value_sigECB5]) !== var_core_value_sigB2AC.pages[var_core_value_sigECB5] && (var_core_value_sigB2AC.slides = {
    ...var_core_value_sigB2AC.slides,
    [var_core_value_sigECB5]: var_core_value_sigB2AC.pages[var_core_value_sigECB5]
  }), var_core_value_sigB2AC.pageOrder["length"] > 0 && var_core_value_sigB2AC.slideOrder !== var_core_value_sigB2AC.pageOrder ? var_core_value_sigB2AC.slideOrder = var_core_value_sigB2AC.pageOrder : (((var_core_value_sig2A70 = var_core_value_sigB2AC.slideOrder) == null ? undefined : var_core_value_sig2A70.length) ?? 0) > 0 && var_core_value_sigB2AC.pageOrder["length"] === 0 && (var_core_value_sigB2AC.pageOrder = var_core_value_sigB2AC.slideOrder ?? []), var_core_value_sigB2AC.activePageId ??= var_core_value_sigB2AC.activeSlideId ?? var_core_value_sigECB5, var_core_value_sigB2AC.activeSlideId = var_core_value_sigB2AC.activePageId;
}
function Uo(var_core_value_sigA9DF) {
  return var_core_value_sigA9DF.slideOrder = var_core_value_sigA9DF.pageOrder, var_core_value_sigA9DF.slides = var_core_value_sigA9DF.pages, var_core_value_sigA9DF.activeSlideId = var_core_value_sigA9DF.activePageId, var_core_value_sigA9DF;
}
function Wo(var_core_value_sigBC94, var_core_value_sig018B) {
  return var_core_value_sig018B ? {
    ...var_core_value_sigBC94,
    transform: {
      ...var_core_value_sigBC94.transform,
      left: var_core_value_sig018B.left,
      top: var_core_value_sig018B.top,
      width: var_core_value_sig018B.width,
      height: var_core_value_sig018B.height,
      rotation: var_core_value_sig018B.angle,
      flipX: var_core_value_sig018B.flipX,
      flipY: var_core_value_sig018B.flipY
    }
  } : var_core_value_sigBC94;
}
function Go(var_core_value_sig6F36, var_core_value_sigF1B5) {
  let var_core_value_sig51CE = var_core_value_sig6F36.getSnapshot(),
    var_core_value_sigB5C9 = Bo(var_core_value_sig51CE, var_core_value_sigF1B5);
  return var_core_value_sigB5C9 ? (Ho(var_core_value_sig51CE, var_core_value_sigF1B5, var_core_value_sigB5C9), var_core_value_sigB5C9) : null;
}
function Ko(var_core_value_sigFEE6, var_core_value_sig8700, var_core_value_sig723F1) {
  let var_core_value_sig70D4 = Go(var_core_value_sigFEE6, var_core_value_sig8700.subUnitId);
  if (!var_core_value_sig70D4) return false;
  let var_core_value_sig838B = Wo(var_core_value_sig8700.element, var_core_value_sig8700.transform);
  if (var_core_value_sig70D4.elements[var_core_value_sig838B.id]) return false;
  if (var_core_value_sig70D4.elements = {
    ...var_core_value_sig70D4.elements,
    [var_core_value_sig838B.id]: var_core_value_sig838B
  }, !var_core_value_sig70D4.elementOrder["includes"](var_core_value_sig838B.id)) {
    let var_core_value_sigCB92 = [...var_core_value_sig70D4.elementOrder],
      var_core_value_sigC844 = var_core_value_sig723F1 === undefined ? var_core_value_sigCB92.length : Math.max(0, Math.min(var_core_value_sig723F1, var_core_value_sigCB92.length));
    var_core_value_sigCB92.splice(var_core_value_sigC844, 0, var_core_value_sig838B.id), var_core_value_sig70D4.elementOrder = var_core_value_sigCB92;
  }
  return true;
}
function qo(var_core_value_sigE6AD, var_core_value_sigC4E9, var_core_value_sigE39E, var_core_value_sig6818) {
  let var_core_value_sig504F = Go(var_core_value_sigE6AD, var_core_value_sigC4E9.subUnitId);
  return !var_core_value_sig504F || !var_core_value_sig504F.elements[var_core_value_sigC4E9.element["id"]] || var_core_value_sigE39E.id !== var_core_value_sigC4E9.element["id"] ? false : (var_core_value_sig504F.elements = {
    ...var_core_value_sig504F.elements,
    [var_core_value_sigC4E9.element["id"]]: Wo(var_core_value_sigE39E, var_core_value_sig6818)
  }, true);
}
function Jo(var_core_value_sigA21D, var_core_value_sigB754) {
  let var_core_value_sig2B87 = Go(var_core_value_sigA21D, var_core_value_sigB754.subUnitId);
  if (!var_core_value_sig2B87 || !var_core_value_sig2B87.elements[var_core_value_sigB754.element["id"]]) return false;
  let var_core_value_sig2FFF = {
    ...var_core_value_sig2B87.elements
  };
  return delete var_core_value_sig2FFF[var_core_value_sigB754.element["id"]], var_core_value_sig2B87.elements = var_core_value_sig2FFF, var_core_value_sig2B87.elementOrder = var_core_value_sig2B87.elementOrder["filter"](var_core_value_sig2ED4 => var_core_value_sig2ED4 !== var_core_value_sigB754.element["id"]), true;
}
function Yo(var_core_value_sig82FF, var_core_value_sig6C72) {
  if (var_core_value_sig6C72.length === 0) return false;
  let var_core_value_sig50E5 = Go(var_core_value_sig82FF, var_core_value_sig6C72[0].subUnitId);
  if (!var_core_value_sig50E5) return false;
  let var_core_value_sig6E14 = new Set();
  if (var_core_value_sig6C72.forEach(var_core_value_sig0477 => {
    var_core_value_sig50E5.elements[var_core_value_sig0477.element["id"]] && var_core_value_sig6E14.add(var_core_value_sig0477.element["id"]);
  }), var_core_value_sig6E14.size === 0) return false;
  let var_core_value_sig4D3F = {
    ...var_core_value_sig50E5.elements
  };
  return var_core_value_sig6E14.forEach(var_core_value_sig6FDF => delete var_core_value_sig4D3F[var_core_value_sig6FDF]), var_core_value_sig50E5.elements = var_core_value_sig4D3F, var_core_value_sig50E5.elementOrder = var_core_value_sig50E5.elementOrder["filter"](var_core_value_sig27C4 => !var_core_value_sig6E14.has(var_core_value_sig27C4)), true;
}
function Xo(var_core_value_sigBE4F, var_core_value_sig8DF2, var_core_value_sig666F) {
  let var_core_value_sig2BE5 = Go(var_core_value_sigBE4F, var_core_value_sig8DF2);
  if (!var_core_value_sig2BE5) return false;
  let var_core_value_sig79D6 = new Set(var_core_value_sig2BE5.elementOrder);
  return var_core_value_sig79D6.size !== var_core_value_sig666F.length || var_core_value_sig666F.some(var_core_value_sig3E1A => !var_core_value_sig79D6.has(var_core_value_sig3E1A)) ? false : (var_core_value_sig2BE5.elementOrder = [...var_core_value_sig666F], true);
}
function Zo(var_core_value_sig6476, var_core_value_sigAFF3) {
  return var_core_value_sigAFF3 ? {
    ...var_core_value_sig6476,
    transform: {
      ...var_core_value_sig6476.transform,
      left: var_core_value_sigAFF3.left ?? var_core_value_sig6476.transform["left"],
      top: var_core_value_sigAFF3.top ?? var_core_value_sig6476.transform["top"],
      width: var_core_value_sigAFF3.width ?? var_core_value_sig6476.transform["width"],
      height: var_core_value_sigAFF3.height ?? var_core_value_sig6476.transform["height"],
      ...(var_core_value_sigAFF3.angle === undefined ? null : {
        rotation: var_core_value_sigAFF3.angle
      }),
      ...(var_core_value_sigAFF3.flipX === undefined ? null : {
        flipX: var_core_value_sigAFF3.flipX
      }),
      ...(var_core_value_sigAFF3.flipY === undefined ? null : {
        flipY: var_core_value_sigAFF3.flipY
      })
    }
  } : var_core_value_sig6476;
}
const $ = {
    id: "board.mutation.update-element",
    type: var_core_value_sigE0AC.MUTATION,
    handler: (var_core_value_sig866B, var_core_value_sig40A0) => {
      var var_core_value_sig86F0;
      let {
          unitId: var_core_value_sigE4B4,
          subUnitId: var_core_value_sig1D8C,
          elementId: var_core_value_sigED34,
          element: var_core_value_sig74CE,
          transform: var_core_value_sig7FB9,
          isRealtimePreview: var_core_value_sigAE9F,
          allowInactiveTarget: var_core_value_sigFF68,
          allowLockedTarget: var_core_value_sigC604,
          formulaLastValueGuard: var_core_value_sigE56F
        } = var_core_value_sig40A0,
        var_core_value_sig6D7D = var_core_value_sig40A0.allowPendingMembershipLockedCoverage;
      if (!var_core_value_sig40A0.elementId || var_core_value_sig74CE.id !== var_core_value_sigED34) return false;
      let var_core_value_sig335B = X(var_core_value_sig74CE),
        var_core_value_sig61E2 = var_core_value_sig866B.get(var_core_value_sig7F3C).getUnit(var_core_value_sigE4B4, var_core_value_sigC8D0.UNIVER_BOARD);
      if (!var_core_value_sig61E2) return false;
      let var_core_value_sig974B = var_core_value_sig866B.get(L),
        var_core_value_sigB89A = var_core_value_sig974B.getElementByParam({
          unitId: var_core_value_sigE4B4,
          subUnitId: var_core_value_sig1D8C,
          elementId: var_core_value_sigED34
        });
      if (!var_core_value_sigB89A) return false;
      let var_core_value_sig3B83 = var_core_value_sigB89A,
        var_core_value_sig3092 = var_core_value_sig3B83.element,
        var_core_value_sigBFDA = var_core_value_sig3092.type === M.Shape ? (var_core_value_sig86F0 = var_core_value_sig3092.shapeData["formulaBinding"]) == null ? undefined : var_core_value_sig86F0.formula : undefined;
      if (!var_core_value_sigF8CA(var_core_value_sig866B, {
        hostType: var_core_value_sigC8D0.UNIVER_BOARD,
        unitId: var_core_value_sigE4B4,
        subUnitId: var_core_value_sig1D8C,
        shapeId: var_core_value_sigED34
      }, var_core_value_sigBFDA, var_core_value_sigE56F)) return true;
      let var_core_value_sig995C = Zo(var_core_value_sig335B, var_core_value_sig7FB9);
      if (!jo(var_core_value_sig974B.getElementData(var_core_value_sigE4B4, var_core_value_sig1D8C), var_core_value_sig3B83.element, var_core_value_sig995C, var_core_value_sig7FB9, {
        allowInactiveTarget: var_core_value_sigFF68,
        allowLockedTarget: var_core_value_sigC604,
        allowPendingMembershipLockedCoverage: var_core_value_sig6D7D
      })) return false;
      let var_core_value_sig364B = {
        ...var_core_value_sig3B83,
        element: var_core_value_sig995C,
        transform: var_core_value_sig7FB9 ?? var_core_value_sig3B83.transform
      };
      if (var_core_value_sigAE9F) return true;
      if (!qo(var_core_value_sig61E2, var_core_value_sig3B83, var_core_value_sig995C, var_core_value_sig7FB9)) return false;
      let var_core_value_sig2C9F = Ea(var_core_value_sig974B.getBatchUpdateElementOp([var_core_value_sig364B]));
      return var_core_value_sig974B.applyElementJson1(var_core_value_sigE4B4, var_core_value_sig1D8C, var_core_value_sig2C9F.redo), var_core_value_sig974B.updateElementNotification(var_core_value_sig2C9F.objects), true;
    }
  },
  Qo = {
    id: "board.command.normalize-connector-routing",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sig4133, var_core_value_sig8333) => {
      if (!(var_core_value_sig8333 != null && var_core_value_sig8333.unitId) || !var_core_value_sig8333.subUnitId || var_core_value_sig8333.connectorIds["length"] === 0) return false;
      let var_core_value_sigB171 = var_core_value_sig4133.get(L).getElementData(var_core_value_sig8333.unitId, var_core_value_sig8333.subUnitId),
        var_core_value_sigA6AB = [],
        var_core_value_sigDC81 = [],
        var_core_value_sig6378 = [],
        var_core_value_sig3C58 = [],
        var_core_value_sig1D57 = [];
      for (let var_core_value_sig7FB0 of Array.from(new Set(var_core_value_sig8333.connectorIds)).sort()) {
        var var_core_value_sig45F01, var_core_value_sig7AFB;
        let var_core_value_sig237B = var_core_value_sigB171[var_core_value_sig7FB0];
        if (!var_core_value_sig237B || var_core_value_sig237B.element["type"] !== M.Connector || var_core_value_sig237B.element["locked"] === true) {
          var_core_value_sig3C58.push(var_core_value_sig7FB0);
          continue;
        }
        let var_core_value_sigFEAB = var_core_value_sig237B.element;
        if (var_core_value_sigFEAB.connectorData["routing"] === "orthogonal" && var_core_value_sigFEAB.connectorData["routingMode"] === "auto" && !((var_core_value_sig45F01 = var_core_value_sigFEAB.connectorData["waypoints"]) != null && var_core_value_sig45F01.length) && !((var_core_value_sig7AFB = var_core_value_sigFEAB.connectorData["orthogonalData"]) != null && (var_core_value_sig7AFB = var_core_value_sig7AFB.routePoints) != null && var_core_value_sig7AFB.length) && var_core_value_sigFEAB.connectorData["curveData"] === undefined) continue;
        let var_core_value_sigE347 = var_core_value_sig7D37.deepClone(var_core_value_sigFEAB);
        var_core_value_sigE347.connectorData["routing"] = "orthogonal", var_core_value_sigE347.connectorData["routingMode"] = "auto", delete var_core_value_sigE347.connectorData["waypoints"], delete var_core_value_sigE347.connectorData["orthogonalData"], delete var_core_value_sigE347.connectorData["curveData"], var_core_value_sigA6AB.push({
          id: $.id,
          params: {
            unitId: var_core_value_sig8333.unitId,
            subUnitId: var_core_value_sig8333.subUnitId,
            elementId: var_core_value_sig7FB0,
            element: var_core_value_sigE347,
            transform: fi(var_core_value_sigE347.transform)
          }
        }), var_core_value_sigDC81.unshift({
          id: $.id,
          params: {
            unitId: var_core_value_sig8333.unitId,
            subUnitId: var_core_value_sig8333.subUnitId,
            elementId: var_core_value_sig7FB0,
            element: var_core_value_sig7D37.deepClone(var_core_value_sigFEAB),
            transform: var_core_value_sig237B.transform ? {
              ...var_core_value_sig237B.transform
            } : var_core_value_sig237B.transform
          }
        }), var_core_value_sig6378.push(var_core_value_sig7FB0), var_core_value_sig1D57.push(...$o(var_core_value_sigB171, var_core_value_sigFEAB));
      }
      return var_core_value_sigA6AB.length === 0 ? {
        changedConnectorIds: var_core_value_sig6378,
        skippedElementIds: var_core_value_sig3C58,
        affectedBounds: ts(var_core_value_sig1D57)
      } : var_core_value_sig77FC(var_core_value_sigA6AB, var_core_value_sig4133.get(var_core_value_sig88BA)).result ? (var_core_value_sig4133.get(var_core_value_sig1F7B).pushUndoRedo({
        unitID: var_core_value_sig8333.unitId,
        redoMutations: var_core_value_sigA6AB,
        undoMutations: var_core_value_sigDC81
      }), {
        changedConnectorIds: var_core_value_sig6378,
        skippedElementIds: var_core_value_sig3C58,
        affectedBounds: ts(var_core_value_sig1D57)
      }) : false;
    }
  };
function $o(var_core_value_sig54CD, var_core_value_sigF4AD) {
  let var_core_value_sigF802 = [],
    var_core_value_sig90E4 = U(var_core_value_sig54CD, var_core_value_sigF4AD.id);
  var_core_value_sig90E4 && (var_core_value_sig90E4.width > 1 || var_core_value_sig90E4.height > 1) && var_core_value_sigF802.push(var_core_value_sig90E4);
  for (let var_core_value_sig5215 of [var_core_value_sigF4AD.connectorData["start"], var_core_value_sigF4AD.connectorData["end"]]) {
    let var_core_value_sig3C5B = es(var_core_value_sig54CD, var_core_value_sig5215);
    var_core_value_sig3C5B && var_core_value_sigF802.push(var_core_value_sig3C5B);
  }
  return var_core_value_sigF802;
}
function es(var_core_value_sig23B5, var_core_value_sigB560) {
  return var_core_value_sigB560.kind === "free" ? {
    left: var_core_value_sigB560.x,
    top: var_core_value_sigB560.y,
    width: 1,
    height: 1
  } : U(var_core_value_sig23B5, var_core_value_sigB560.shapeId);
}
function ts(var_core_value_sigB46F) {
  if (var_core_value_sigB46F.length === 0) return null;
  let var_core_value_sig440F = Math.min(...var_core_value_sigB46F.map(var_core_value_sig5204 => var_core_value_sig5204.left)),
    var_core_value_sigB857 = Math.min(...var_core_value_sigB46F.map(var_core_value_sig5E11 => var_core_value_sig5E11.top)),
    var_core_value_sig0743 = Math.max(...var_core_value_sigB46F.map(var_core_value_sig4D58 => var_core_value_sig4D58.left + var_core_value_sig4D58.width)),
    var_core_value_sigFDAF = Math.max(...var_core_value_sigB46F.map(var_core_value_sig2DBD => var_core_value_sig2DBD.top + var_core_value_sig2DBD.height));
  return {
    left: var_core_value_sig440F,
    top: var_core_value_sigB857,
    width: var_core_value_sig0743 - var_core_value_sig440F,
    height: var_core_value_sigFDAF - var_core_value_sigB857
  };
}
function ns(var_core_value_sigFC34, var_core_value_sig162E, var_core_value_sigB564) {
  var var_core_value_sig5989, var_core_value_sigC36D;
  let var_core_value_sig580E = (var_core_value_sig5989 = H(var_core_value_sigFC34, var_core_value_sigB564)) == null ? undefined : var_core_value_sig5989.worldTransform,
    var_core_value_sigF338 = (var_core_value_sigC36D = H(var_core_value_sig162E, var_core_value_sigB564)) == null ? undefined : var_core_value_sigC36D.worldTransform;
  return !var_core_value_sig580E || !var_core_value_sigF338 ? false : var_core_value_sig580E.left !== var_core_value_sigF338.left || var_core_value_sig580E.top !== var_core_value_sigF338.top || var_core_value_sig580E.width !== var_core_value_sigF338.width || var_core_value_sig580E.height !== var_core_value_sigF338.height || (var_core_value_sig580E.rotation ?? 0) !== (var_core_value_sigF338.rotation ?? 0);
}
function rs(var_core_value_sig6EEE, var_core_value_sigC0CF, var_core_value_sig10D4) {
  let var_core_value_sigE597 = new Set();
  return var_core_value_sig10D4.forEach(var_core_value_sig424E => {
    ns(var_core_value_sig6EEE, var_core_value_sigC0CF, var_core_value_sig424E) && var_core_value_sigE597.add(var_core_value_sig424E);
  }), var_core_value_sigE597.size === 0 || Object.values(var_core_value_sigC0CF).forEach(var_core_value_sigF481 => {
    var_core_value_sigE597.has(var_core_value_sigF481.elementId) || V(var_core_value_sigC0CF, var_core_value_sigF481.elementId).some(var_core_value_sig200B => var_core_value_sigE597.has(var_core_value_sig200B)) && ns(var_core_value_sig6EEE, var_core_value_sigC0CF, var_core_value_sigF481.elementId) && var_core_value_sigE597.add(var_core_value_sigF481.elementId);
  }), var_core_value_sigE597;
}
function is(var_core_value_sig4C3E, var_core_value_sig616D, var_core_value_sig0F8A) {
  let var_core_value_sig2FD4 = new Set();
  return var_core_value_sig0F8A.forEach(var_core_value_sigD7F2 => {
    var var_core_value_sig7CF3, var_core_value_sig9DC6;
    let var_core_value_sig6643 = (var_core_value_sig7CF3 = var_core_value_sig4C3E[var_core_value_sigD7F2]) == null ? undefined : var_core_value_sig7CF3.element,
      var_core_value_sig4124 = (var_core_value_sig9DC6 = var_core_value_sig616D[var_core_value_sigD7F2]) == null ? undefined : var_core_value_sig9DC6.element;
    var_core_value_sig6643 && var_core_value_sig4124 && (var_core_value_sig6643.parentId !== var_core_value_sig4124.parentId || var_core_value_sig6643.laneId !== var_core_value_sig4124.laneId) && var_core_value_sig2FD4.add(var_core_value_sigD7F2);
  }), var_core_value_sig2FD4.size === 0 || Object.values(var_core_value_sig616D).forEach(var_core_value_sigBF1C => {
    var_core_value_sig2FD4.has(var_core_value_sigBF1C.elementId) || V(var_core_value_sig616D, var_core_value_sigBF1C.elementId).some(var_core_value_sig3863 => var_core_value_sig2FD4.has(var_core_value_sig3863)) && var_core_value_sig2FD4.add(var_core_value_sigBF1C.elementId);
  }), var_core_value_sig2FD4;
}
function as(var_core_value_sig9AF9, var_core_value_sig662D, var_core_value_sig1452) {
  return var_core_value_sig1452.has(var_core_value_sig662D) || Qa(var_core_value_sig9AF9).some(var_core_value_sigEEEF => var_core_value_sig1452.has(var_core_value_sigEEEF));
}
function os(var_core_value_sig6050, var_core_value_sig896E, var_core_value_sig6D9B) {
  let var_core_value_sig9425 = new Set();
  return var_core_value_sig6D9B.forEach(var_core_value_sig9A01 => {
    let var_core_value_sig674F = var_core_value_sig6050[var_core_value_sig9A01],
      var_core_value_sigC8F6 = var_core_value_sig896E[var_core_value_sig9A01];
    !Q(var_core_value_sig674F) || !Q(var_core_value_sigC8F6) || (JSON.stringify(var_core_value_sig674F.element["connectorData"].start) !== JSON.stringify(var_core_value_sigC8F6.element["connectorData"].start) || JSON.stringify(var_core_value_sig674F.element["connectorData"].end) !== JSON.stringify(var_core_value_sigC8F6.element["connectorData"].end) || JSON.stringify(var_core_value_sig674F.element["connectorData"].waypoints) !== JSON.stringify(var_core_value_sigC8F6.element["connectorData"].waypoints) || JSON.stringify(var_core_value_sig674F.element["connectorData"].orthogonalData) !== JSON.stringify(var_core_value_sigC8F6.element["connectorData"].orthogonalData) || JSON.stringify(var_core_value_sig674F.element["connectorData"].curveData) !== JSON.stringify(var_core_value_sigC8F6.element["connectorData"].curveData)) && var_core_value_sig9425.add(var_core_value_sig9A01);
  }), var_core_value_sig9425;
}
function ss(var_core_value_sigCE16) {
  var var_core_value_sig0207, var_core_value_sig5FE7, var_core_value_sig5BA5, var_core_value_sig4F79;
  return var_core_value_sigCE16.connectorData["start"].kind === "free" || var_core_value_sigCE16.connectorData["end"].kind === "free" || ((var_core_value_sig0207 = var_core_value_sigCE16.connectorData["waypoints"]) == null ? undefined : var_core_value_sig0207.some(var_core_value_sig8A26 => var_core_value_sig8A26.kind === "manual")) === true || ((var_core_value_sig5FE7 = var_core_value_sigCE16.connectorData["orthogonalData"]) == null || (var_core_value_sig5FE7 = var_core_value_sig5FE7.routePoints) == null ? undefined : var_core_value_sig5FE7.some(var_core_value_sigD073 => var_core_value_sigD073.kind === "manual")) === true || ((var_core_value_sig5BA5 = var_core_value_sigCE16.connectorData["curveData"]) == null || (var_core_value_sig5BA5 = var_core_value_sig5BA5.anchors) == null ? undefined : var_core_value_sig5BA5.some(var_core_value_sigF631 => var_core_value_sigF631.kind === "manual")) === true || ((var_core_value_sig4F79 = var_core_value_sigCE16.connectorData["curveData"]) == null || (var_core_value_sig4F79 = var_core_value_sig4F79.controls) == null ? undefined : var_core_value_sig4F79.some(var_core_value_sig2278 => var_core_value_sig2278.kind === "manual")) === true;
}
function cs(var_core_value_sig2BD8, var_core_value_sigC182) {
  let var_core_value_sig1373 = typeof var_core_value_sigC182.rotation == "number" ? var_core_value_sigC182.rotation : var_core_value_sigC182.angle,
    var_core_value_sig2D20 = {
      ...var_core_value_sig2BD8.transform,
      left: var_core_value_sigC182.left,
      top: var_core_value_sigC182.top,
      width: var_core_value_sigC182.width,
      height: var_core_value_sigC182.height,
      ...(var_core_value_sig1373 === undefined ? null : {
        rotation: var_core_value_sig1373
      }),
      ...(var_core_value_sigC182.flipX === undefined ? null : {
        flipX: var_core_value_sigC182.flipX
      }),
      ...(var_core_value_sigC182.flipY === undefined ? null : {
        flipY: var_core_value_sigC182.flipY
      })
    };
  return {
    ...var_core_value_sig2BD8,
    transform: var_core_value_sig2D20
  };
}
function ls(var_core_value_sigB4E5) {
  let var_core_value_sigA9C9 = new Map(var_core_value_sigB4E5.map(var_core_value_sig7053 => [var_core_value_sig7053.redoMutation["params"].elementId, var_core_value_sig7053])),
    var_core_value_sigDA64 = (var_core_value_sig52F1, var_core_value_sig1E74) => {
      let var_core_value_sig1E84 = new Set(),
        var_core_value_sig133B = [var_core_value_sig1E74];
      for (; var_core_value_sig133B.length > 0;) {
        var var_core_value_sig69B8, var_core_value_sig983D;
        let var_core_value_sig4CD2 = var_core_value_sig133B.shift();
        if (!var_core_value_sig4CD2 || var_core_value_sig1E84.has(var_core_value_sig4CD2)) continue;
        var_core_value_sig1E84.add(var_core_value_sig4CD2);
        let var_core_value_sig48CA = var_core_value_sigA9C9.get(var_core_value_sig4CD2),
          var_core_value_sig50AF = var_core_value_sig48CA == null || (var_core_value_sig69B8 = var_core_value_sig48CA.redoMutation["params"]) == null ? undefined : var_core_value_sig69B8.element,
          var_core_value_sigA942 = var_core_value_sig48CA == null || (var_core_value_sig983D = var_core_value_sig48CA.undoMutation["params"]) == null ? undefined : var_core_value_sig983D.element,
          var_core_value_sigA621 = [var_core_value_sig50AF == null ? undefined : var_core_value_sig50AF.parentId, var_core_value_sigA942 == null ? undefined : var_core_value_sigA942.parentId].filter(var_core_value_sig3EEE => !!var_core_value_sig3EEE);
        if (var_core_value_sigA621.includes(var_core_value_sig52F1)) return true;
        var_core_value_sig133B.push(...var_core_value_sigA621);
      }
      return false;
    };
  return (var_core_value_sig9A03, var_core_value_sig3363, var_core_value_sigF64A) => {
    let var_core_value_sig25EC = var_core_value_sig9A03.redoMutation["params"].elementId,
      var_core_value_sigA790 = var_core_value_sig3363.redoMutation["params"].elementId;
    return var_core_value_sigDA64(var_core_value_sig25EC, var_core_value_sigA790) ? var_core_value_sigF64A ? 1 : -1 : var_core_value_sigDA64(var_core_value_sigA790, var_core_value_sig25EC) ? var_core_value_sigF64A ? -1 : 1 : 0;
  };
}
function us(var_core_value_sigBE3F) {
  let var_core_value_sig072F = ls(var_core_value_sigBE3F);
  return [...var_core_value_sigBE3F].sort((var_core_value_sig9A5E, var_core_value_sig01B9) => var_core_value_sig072F(var_core_value_sig9A5E, var_core_value_sig01B9, true));
}
function ds(var_core_value_sigD794) {
  let var_core_value_sigCB82 = ls(var_core_value_sigD794);
  return [...var_core_value_sigD794].sort((var_core_value_sigD6A9, var_core_value_sig0FCF) => var_core_value_sigCB82(var_core_value_sigD6A9, var_core_value_sig0FCF, false));
}
function fs(var_core_value_sigB67E, var_core_value_sig7504) {
  if (!var_core_value_sig7504 || var_core_value_sig7504.updates["length"] === 0) return false;
  let {
      historyId: var_core_value_sigC2EA,
      unitId: var_core_value_sigC733,
      subUnitId: var_core_value_sig9E26,
      updates: var_core_value_sig6B84
    } = var_core_value_sig7504,
    var_core_value_sig2D04 = var_core_value_sigB67E.get(L),
    var_core_value_sigD3D6 = [],
    var_core_value_sig5BE7 = new Map(),
    var_core_value_sigFD72 = new Set(),
    var_core_value_sig3FA8 = var_core_value_sig2D04.getElementData(var_core_value_sigC733, var_core_value_sig9E26),
    var_core_value_sig4749 = {
      ...var_core_value_sig3FA8
    };
  for (let var_core_value_sigCF96 of var_core_value_sig6B84) {
    if (!var_core_value_sigCF96.elementId || var_core_value_sigFD72.has(var_core_value_sigCF96.elementId) || (var_core_value_sigFD72.add(var_core_value_sigCF96.elementId), var_core_value_sigCF96.element["id"] !== var_core_value_sigCF96.elementId)) return false;
    let var_core_value_sigC97C = var_core_value_sig2D04.getElementByParam({
      unitId: var_core_value_sigC733,
      subUnitId: var_core_value_sig9E26,
      elementId: var_core_value_sigCF96.elementId
    });
    if (!var_core_value_sigC97C || var_core_value_sigCF96.element["type"] !== var_core_value_sigC97C.element["type"] || var_core_value_sigC97C.element["locked"] === true) return false;
    let var_core_value_sigC4B1 = X(var_core_value_sig7D37.deepClone(var_core_value_sigCF96.element)),
      var_core_value_sig1BD9 = var_core_value_sigCF96.transform ? cs(var_core_value_sigC4B1, var_core_value_sigCF96.transform) : var_core_value_sigC4B1,
      var_core_value_sigE43E = {
        unitId: var_core_value_sigC733,
        subUnitId: var_core_value_sig9E26,
        ...var_core_value_sigCF96,
        element: var_core_value_sig1BD9
      };
    var_core_value_sigCF96.transform && (var_core_value_sigE43E.transform = {
      ...var_core_value_sigCF96.transform
    });
    let var_core_value_sigA937 = {
        id: $.id,
        params: var_core_value_sigE43E
      },
      var_core_value_sigCAD5 = {
        id: $.id,
        params: {
          unitId: var_core_value_sigC733,
          subUnitId: var_core_value_sig9E26,
          elementId: var_core_value_sigCF96.elementId,
          element: X(var_core_value_sig7D37.deepClone(var_core_value_sigC97C.element)),
          transform: var_core_value_sigC97C.transform ? {
            ...var_core_value_sigC97C.transform
          } : var_core_value_sigC97C.transform,
          ...(var_core_value_sig1BD9.locked === true ? {
            allowLockedTarget: true
          } : null),
          ...(var_core_value_sig1BD9.visible === false || var_core_value_sig1BD9.selectable === false ? {
            allowInactiveTarget: true
          } : null)
        }
      };
    var_core_value_sigD3D6.push({
      redoMutation: var_core_value_sigA937,
      undoMutation: var_core_value_sigCAD5
    }), var_core_value_sig5BE7.set(var_core_value_sigCF96.elementId, {
      redoMutation: var_core_value_sigA937,
      undoMutation: var_core_value_sigCAD5
    }), var_core_value_sig4749[var_core_value_sigCF96.elementId] = {
      ...var_core_value_sigC97C,
      element: var_core_value_sigE43E.element,
      transform: var_core_value_sigE43E.transform ?? var_core_value_sigC97C.transform
    };
  }
  let var_core_value_sig5D76 = rs(var_core_value_sig3FA8, var_core_value_sig4749, var_core_value_sigFD72),
    var_core_value_sigB8B6 = is(var_core_value_sig3FA8, var_core_value_sig4749, var_core_value_sigFD72),
    var_core_value_sig93DE = os(var_core_value_sig3FA8, var_core_value_sig4749, var_core_value_sigFD72),
    var_core_value_sigA278 = false;
  if (Object.values(var_core_value_sig4749).forEach(var_core_value_sigC4E91 => {
    var var_core_value_sigF612;
    if (var_core_value_sig5D76.size === 0 && var_core_value_sigB8B6.size === 0 && var_core_value_sig93DE.size === 0 || !Q(var_core_value_sigC4E91) || var_core_value_sigFD72.has(var_core_value_sigC4E91.elementId) && !var_core_value_sig93DE.has(var_core_value_sigC4E91.elementId)) return;
    let var_core_value_sigAA6C = as(var_core_value_sigC4E91.element, var_core_value_sigC4E91.elementId, var_core_value_sig5D76),
      var_core_value_sig8BFA = as(var_core_value_sigC4E91.element, var_core_value_sigC4E91.elementId, var_core_value_sigB8B6),
      var_core_value_sig236B = var_core_value_sig93DE.has(var_core_value_sigC4E91.elementId);
    if (!var_core_value_sigAA6C && !var_core_value_sig8BFA && !var_core_value_sig236B) return;
    let var_core_value_sig1951 = var_core_value_sigC4E91.element,
      var_core_value_sigFEA0 = var_core_value_sig5BE7.get(var_core_value_sigC4E91.elementId),
      var_core_value_sig931A = var_core_value_sigFEA0 == null ? undefined : var_core_value_sigFEA0.redoMutation["params"],
      var_core_value_sigEE7D = Qa(var_core_value_sig1951).some(var_core_value_sigE503 => var_core_value_sig5D76.has(var_core_value_sigE503)),
      var_core_value_sig3585 = (var_core_value_sigF612 = H(var_core_value_sig4749, var_core_value_sigC4E91.elementId)) == null ? undefined : var_core_value_sigF612.worldTransform;
    if (var_core_value_sig236B && (var_core_value_sig1951 = di(var_core_value_sig1951, new Set(Qa(var_core_value_sig1951)), var_core_value_sig4749), var_core_value_sig931A != null && var_core_value_sig931A.transform && var_core_value_sigEE7D ? (var_core_value_sig1951 = cs(var_core_value_sig1951, var_core_value_sig931A.transform), var_core_value_sig3585 = var_core_value_sig1951.transform) : (var_core_value_sig3585 = li(var_core_value_sig1951), var_core_value_sig1951 = {
      ...var_core_value_sig1951,
      transform: var_core_value_sig3585
    })), var_core_value_sigAA6C && var_core_value_sig5D76.has(var_core_value_sigC4E91.elementId) && ss(var_core_value_sig1951) && !var_core_value_sig236B && !(var_core_value_sigFEA0 && var_core_value_sigEE7D)) {
      var var_core_value_sig31A8;
      let var_core_value_sig48DD = (var_core_value_sig31A8 = H(var_core_value_sig3FA8, var_core_value_sigC4E91.elementId)) == null ? undefined : var_core_value_sig31A8.worldTransform;
      if (var_core_value_sig48DD && var_core_value_sig3585) {
        let var_core_value_sigBBFF = {
          x: (var_core_value_sig3585.left ?? 0) - (var_core_value_sig48DD.left ?? 0),
          y: (var_core_value_sig3585.top ?? 0) - (var_core_value_sig48DD.top ?? 0)
        };
        (var_core_value_sigBBFF.x !== 0 || var_core_value_sigBBFF.y !== 0) && (var_core_value_sig1951 = ri(var_core_value_sig1951, var_core_value_sigBBFF));
      }
    }
    let var_core_value_sigA4DA = var_core_value_sig1951;
    var_core_value_sigAA6C && (var_core_value_sig1951 = di(var_core_value_sig1951, var_core_value_sig5D76, var_core_value_sig4749), var_core_value_sig1951 !== var_core_value_sigA4DA && (var_core_value_sig3585 = var_core_value_sig1951.transform));
    let var_core_value_sig6FC0 = oo(var_core_value_sig4749, var_core_value_sig1951);
    if (var_core_value_sig236B || var_core_value_sig1951.parentId !== var_core_value_sig6FC0.parentId || var_core_value_sig1951.laneId !== var_core_value_sig6FC0.laneId) {
      if (!var_core_value_sig3585) return;
      let var_core_value_sig5E6A = W(var_core_value_sig4749, {
        parentId: var_core_value_sig6FC0.parentId,
        worldTransform: var_core_value_sig3585
      });
      var_core_value_sig1951 = cs({
        ...var_core_value_sig1951,
        parentId: var_core_value_sig6FC0.parentId,
        laneId: var_core_value_sig6FC0.laneId
      }, var_core_value_sig5E6A);
    }
    if (var_core_value_sig1951 === var_core_value_sigC4E91.element) return;
    if (var_core_value_sigC4E91.element["locked"] === true) {
      var_core_value_sigA278 = true;
      return;
    }
    if (var_core_value_sigFEA0) {
      let var_core_value_sigB7FC = var_core_value_sigFEA0.redoMutation["params"];
      var_core_value_sigB7FC.element = var_core_value_sig7D37.deepClone(var_core_value_sig1951), var_core_value_sigB7FC.transform = fi(var_core_value_sig1951.transform), var_core_value_sig4749[var_core_value_sigC4E91.elementId] = {
        ...var_core_value_sigC4E91,
        element: var_core_value_sig1951,
        transform: var_core_value_sigB7FC.transform
      };
      return;
    }
    let var_core_value_sig6217 = {
        id: $.id,
        params: {
          unitId: var_core_value_sigC733,
          subUnitId: var_core_value_sig9E26,
          elementId: var_core_value_sigC4E91.elementId,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig1951),
          transform: fi(var_core_value_sig1951.transform)
        }
      },
      var_core_value_sigB805 = {
        id: $.id,
        params: {
          unitId: var_core_value_sigC733,
          subUnitId: var_core_value_sig9E26,
          elementId: var_core_value_sigC4E91.elementId,
          element: var_core_value_sig7D37.deepClone(var_core_value_sigC4E91.element),
          transform: var_core_value_sigC4E91.transform ? {
            ...var_core_value_sigC4E91.transform
          } : var_core_value_sigC4E91.transform
        }
      };
    var_core_value_sigD3D6.push({
      redoMutation: var_core_value_sig6217,
      undoMutation: var_core_value_sigB805
    }), var_core_value_sig4749[var_core_value_sigC4E91.elementId] = {
      ...var_core_value_sigC4E91,
      element: var_core_value_sig1951,
      transform: fi(var_core_value_sig1951.transform)
    };
  }), var_core_value_sigA278) return false;
  let var_core_value_sig4263 = us(var_core_value_sigD3D6).map(var_core_value_sig4FAE => var_core_value_sig4FAE.redoMutation),
    var_core_value_sig5B46 = ds(var_core_value_sigD3D6).map(var_core_value_sig1FCC => var_core_value_sig1FCC.undoMutation);
  if (!Mo(var_core_value_sig3FA8, var_core_value_sig4263) || !var_core_value_sig77FC(var_core_value_sig4263, var_core_value_sigB67E.get(var_core_value_sig88BA)).result) return false;
  let var_core_value_sig1533 = var_core_value_sigB67E.get(var_core_value_sig1F7B),
    var_core_value_sig8C06 = var_core_value_sigC2EA ? var_core_value_sig1533.pitchTopUndoElement() : null,
    var_core_value_sig04F0 = var_core_value_sig8C06 && var_core_value_sig8C06.id === var_core_value_sigC2EA && var_core_value_sig8C06.unitID === var_core_value_sigC733 ? var_core_value_sig8C06 : null;
  return var_core_value_sig04F0 && var_core_value_sig1533.popUndoToRedo(), var_core_value_sig1533.pushUndoRedo({
    ...(var_core_value_sigC2EA ? {
      id: var_core_value_sigC2EA
    } : null),
    unitID: var_core_value_sigC733,
    redoMutations: var_core_value_sig04F0 ? [...var_core_value_sig04F0.redoMutations, ...var_core_value_sig4263] : var_core_value_sig4263,
    undoMutations: var_core_value_sig04F0 ? [...var_core_value_sig5B46, ...var_core_value_sig04F0.undoMutations] : var_core_value_sig5B46
  }), true;
}
const ps = {
    id: "board.command.update-elements",
    type: var_core_value_sigE0AC.COMMAND,
    handler: fs
  },
  ms = {
    id: "board.command.remove-connector-label",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sigCDD1, var_core_value_sig6C50) => {
      var var_core_value_sig7926;
      if (!var_core_value_sig6C50) return false;
      let var_core_value_sig88B3 = var_core_value_sigCDD1.get(L).getElementByParam(var_core_value_sig6C50),
        var_core_value_sig6044 = var_core_value_sig88B3 == null ? undefined : var_core_value_sig88B3.element;
      if (!var_core_value_sig6044 || var_core_value_sig6044.type !== M.Connector) return false;
      let var_core_value_sigEE54 = Ka(var_core_value_sig6044.connectorData),
        var_core_value_sigBC8E = var_core_value_sig6C50.labelId ?? ((var_core_value_sig7926 = var_core_value_sigEE54[0]) == null ? undefined : var_core_value_sig7926.id);
      return !var_core_value_sigBC8E || !var_core_value_sigEE54.some(var_core_value_sigB7F9 => var_core_value_sigB7F9.id === var_core_value_sigBC8E) ? false : fs(var_core_value_sigCDD1, {
        unitId: var_core_value_sig6C50.unitId,
        subUnitId: var_core_value_sig6C50.subUnitId,
        updates: [{
          elementId: var_core_value_sig6C50.elementId,
          element: {
            ...var_core_value_sig6044,
            connectorData: qa(var_core_value_sig6044.connectorData, var_core_value_sigEE54.filter(var_core_value_sigB1A2 => var_core_value_sigB1A2.id !== var_core_value_sigBC8E))
          }
        }]
      });
    }
  },
  hs = var_core_value_sig72C0("board.table-adapter.service");
var gs = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig526D) {
    return this._adapters["push"](var_core_value_sig526D), var_core_value_sig4D7C(() => {
      let var_core_value_sig9CD9 = this._adapters["indexOf"](var_core_value_sig526D);
      var_core_value_sig9CD9 >= 0 && this._adapters["splice"](var_core_value_sig9CD9, 1);
    });
  }
  insertTable(var_core_value_sigBDB5) {
    for (let var_core_value_sigFD0C of this._adapters) if (var_core_value_sigFD0C.insertTable(var_core_value_sigBDB5)) return true;
    return false;
  }
  getRemoveTableMutationInfos(var_core_value_sig59CE1) {
    let var_core_value_sig3AD7 = {
      redoMutations: [],
      undoMutations: []
    };
    for (let var_core_value_sig849B of this._adapters) {
      var var_core_value_sig04E4;
      let var_core_value_sig8889 = (var_core_value_sig04E4 = var_core_value_sig849B.getRemoveTableMutationInfos) == null ? undefined : var_core_value_sig04E4.call(var_core_value_sig849B, var_core_value_sig59CE1);
      var_core_value_sig8889 && (var_core_value_sig3AD7.redoMutations["push"](...var_core_value_sig8889.redoMutations), var_core_value_sig3AD7.undoMutations["push"](...var_core_value_sig8889.undoMutations));
    }
    return var_core_value_sig3AD7;
  }
  getSearchEntries(var_core_value_sigD8F01) {
    let var_core_value_sig1475 = [];
    for (let var_core_value_sig5F1A of this._adapters) {
      var var_core_value_sig08B7;
      let var_core_value_sig32F8 = (var_core_value_sig08B7 = var_core_value_sig5F1A.getSearchEntries) == null ? undefined : var_core_value_sig08B7.call(var_core_value_sig5F1A, var_core_value_sigD8F01);
      var_core_value_sig32F8 && var_core_value_sig1475.push(...var_core_value_sig32F8);
    }
    return var_core_value_sig1475;
  }
};
function _s(var_core_value_sig65B41) {
  switch (var_core_value_sig65B41.type) {
    case M.Shape:
      return String(var_core_value_sig65B41.shapeData["shapeType"] ?? var_core_value_sig65B41.type);
    default:
      return var_core_value_sig65B41.type;
  }
}
function vs(var_core_value_sig38F9) {
  return var_core_value_sig38F9.name || var_core_value_sig38F9.id;
}
function ys(var_core_value_sig4EFC, var_core_value_sigB70F) {
  var var_core_value_sig50E51;
  return (var_core_value_sig50E51 = var_core_value_sig4EFC.name) != null && var_core_value_sig50E51.trim() || (var_core_value_sig4EFC.name = var_core_value_sig1070(_s(var_core_value_sig4EFC), Array.from(var_core_value_sigB70F).map(vs))), var_core_value_sig4EFC;
}
function bs(var_core_value_sig8AD2, var_core_value_sigEF27) {
  let var_core_value_sigD45F = Array.from(var_core_value_sigEF27).map(vs);
  return var_core_value_sig8AD2.map(var_core_value_sig2008 => {
    var var_core_value_sig496B;
    let var_core_value_sig7161 = (var_core_value_sig496B = var_core_value_sig2008.name) == null ? undefined : var_core_value_sig496B.trim();
    return var_core_value_sig7161 ? (var_core_value_sigD45F.push(var_core_value_sig7161), var_core_value_sig2008) : (var_core_value_sig2008.name = var_core_value_sig1070(_s(var_core_value_sig2008), var_core_value_sigD45F), var_core_value_sigD45F.push(var_core_value_sig2008.name ?? var_core_value_sig2008.id), var_core_value_sig2008);
  });
}
function xs(var_core_value_sig9764, var_core_value_sig397B, var_core_value_sigC2FF = {}) {
  if (!ho(var_core_value_sig9764) || Aa(var_core_value_sig9764) && !var_core_value_sigC2FF.allowEmbedAnchor || Aa(var_core_value_sig9764) && (var_core_value_sig9764.parentId || var_core_value_sig9764.laneId) || Aa(var_core_value_sig9764) && ((var_core_value_sig9764.transform["rotation"] ?? 0) !== 0 || var_core_value_sig9764.transform["flipX"] === true || var_core_value_sig9764.transform["flipY"] === true) || Aa(var_core_value_sig9764) && Object.values(var_core_value_sig397B).some(var_core_value_sig2AB8 => ja(var_core_value_sig2AB8.element, var_core_value_sig9764)) || !Ao(var_core_value_sig9764) || !xo(var_core_value_sig397B, var_core_value_sig9764)) return false;
  if (!var_core_value_sig9764.parentId) return true;
  let var_core_value_sig8A75 = var_core_value_sig397B[var_core_value_sig9764.parentId],
    var_core_value_sigCA67 = var_core_value_sig8A75 == null ? undefined : var_core_value_sig8A75.element;
  if ((var_core_value_sigCA67 == null ? undefined : var_core_value_sigCA67.type) !== M.Container) return false;
  let var_core_value_sigDFDA = var_core_value_sigCA67.containerData["behavior"];
  return !var_core_value_sigC2FF.allowLockedParent && (var_core_value_sig8A75.hidden === true || var_core_value_sigCA67.visible === false || var_core_value_sigCA67.locked === true || var_core_value_sigCA67.selectable === false || var_core_value_sigDFDA.membershipLocked) || !var_core_value_sigC2FF.allowLockedParent && ko(var_core_value_sig397B, var_core_value_sig9764) || !var_core_value_sigDFDA.acceptsChildren ? false : var_core_value_sig9764.type !== M.Container || var_core_value_sigDFDA.acceptsContainer && var_core_value_sigDFDA.allowNested;
}
const Ss = {
  id: "board.mutation.add-element",
  type: var_core_value_sigE0AC.MUTATION,
  handler: (var_core_value_sigEAA1, var_core_value_sig77BA) => {
    let {
        unitId: var_core_value_sig9ED0,
        subUnitId: var_core_value_sigB650,
        insertIndex: var_core_value_sig74A81,
        allowLockedParent: var_core_value_sigC129,
        allowEmbedAnchor: var_core_value_sig59D5
      } = var_core_value_sig77BA,
      var_core_value_sig7A96 = X(var_core_value_sig77BA.element),
      var_core_value_sigD72E = var_core_value_sigEAA1.get(var_core_value_sig7F3C).getUnit(var_core_value_sig9ED0, var_core_value_sigC8D0.UNIVER_BOARD);
    if (!var_core_value_sigD72E) return false;
    let var_core_value_sig3E1F = var_core_value_sigEAA1.get(L),
      var_core_value_sig7D3E = var_core_value_sig3E1F.getElementData(var_core_value_sig9ED0, var_core_value_sigB650);
    if (Aa(var_core_value_sig7A96) && Object.values(var_core_value_sig3E1F.getElementDataForUnit(var_core_value_sig9ED0)).some(var_core_value_sig3FCF => Object.values(var_core_value_sig3FCF.data).some(var_core_value_sigB455 => ja(var_core_value_sigB455.element, var_core_value_sig7A96))) || !xs(var_core_value_sig7A96, var_core_value_sig7D3E, {
      allowLockedParent: var_core_value_sigC129,
      allowEmbedAnchor: var_core_value_sig59D5
    })) return false;
    let var_core_value_sig9D1B = qt(var_core_value_sig9ED0, var_core_value_sigB650, ys(var_core_value_sig7A96, Object.values(var_core_value_sig7D3E).map(var_core_value_sig675A => var_core_value_sig675A.element)), var_core_value_sigD72E.getThemeData());
    if (!Ko(var_core_value_sigD72E, var_core_value_sig9D1B, var_core_value_sig74A81)) return false;
    let var_core_value_sigC043 = Ea(var_core_value_sig3E1F.getBatchAddElementOp([var_core_value_sig9D1B]));
    return var_core_value_sig3E1F.applyElementJson1(var_core_value_sig9ED0, var_core_value_sigB650, var_core_value_sigC043.redo), var_core_value_sigC043.objects["length"] > 0 && var_core_value_sig3E1F.addElementNotification(var_core_value_sigC043.objects), true;
  }
};
function Cs(var_core_value_sig12F2, var_core_value_sig3B28, var_core_value_sig9789, var_core_value_sig8475) {
  return var_core_value_sig3B28.some(var_core_value_sig837F => {
    var var_core_value_sig9D6E;
    return var_core_value_sig8475 && var_core_value_sig837F === var_core_value_sig9789 ? false : ((var_core_value_sig9D6E = var_core_value_sig12F2[var_core_value_sig837F]) == null ? undefined : var_core_value_sig9D6E.element["locked"]) === true;
  });
}
const ws = {
  id: "board.mutation.remove-element",
  type: var_core_value_sigE0AC.MUTATION,
  handler: (var_core_value_sig88B7, var_core_value_sigB177) => {
    var var_core_value_sig9946;
    let {
      unitId: var_core_value_sig731A,
      subUnitId: var_core_value_sig8E75,
      elementId: var_core_value_sigF462,
      allowLockedParent: var_core_value_sigF519,
      allowLockedTarget: var_core_value_sig80A1
    } = var_core_value_sigB177;
    if (!var_core_value_sigB177.elementId) return false;
    let var_core_value_sigA8D7 = var_core_value_sig88B7.get(var_core_value_sig7F3C).getUnit(var_core_value_sig731A, var_core_value_sigC8D0.UNIVER_BOARD);
    if (!var_core_value_sigA8D7) return false;
    let var_core_value_sig5BB8 = var_core_value_sig88B7.get(L),
      var_core_value_sig784F = var_core_value_sig5BB8.getElementByParam({
        unitId: var_core_value_sig731A,
        subUnitId: var_core_value_sig8E75,
        elementId: var_core_value_sigF462
      });
    if (!var_core_value_sig784F) return false;
    let var_core_value_sig29001 = var_core_value_sig784F,
      var_core_value_sigF735 = var_core_value_sig5BB8.getElementData(var_core_value_sig731A, var_core_value_sig8E75),
      var_core_value_sig893C = var_core_value_sig29001.element["parentId"] ? (var_core_value_sig9946 = var_core_value_sigF735[var_core_value_sig29001.element["parentId"]]) == null ? undefined : var_core_value_sig9946.element : undefined;
    if (!var_core_value_sigF519 && ko(var_core_value_sigF735, var_core_value_sig29001.element) || !var_core_value_sigF519 && (var_core_value_sig893C == null ? undefined : var_core_value_sig893C.type) === M.Container && var_core_value_sig893C.containerData["behavior"].membershipLocked) return false;
    let var_core_value_sigE82D = tn(var_core_value_sigF735, var_core_value_sig5BB8.getElementOrder(var_core_value_sig731A, var_core_value_sig8E75), [var_core_value_sigF462]);
    if (Object.values(var_core_value_sigF735).forEach(var_core_value_sigB205 => {
      !Q(var_core_value_sigB205) || var_core_value_sigE82D.includes(var_core_value_sigB205.elementId) || Qa(var_core_value_sigB205.element).some(var_core_value_sig5241 => var_core_value_sigE82D.includes(var_core_value_sig5241)) && var_core_value_sigE82D.push(var_core_value_sigB205.elementId);
    }), Cs(var_core_value_sigF735, var_core_value_sigE82D, var_core_value_sigF462, var_core_value_sig80A1)) return false;
    let var_core_value_sig014E = (var_core_value_sigE82D.length > 0 ? var_core_value_sigE82D : [var_core_value_sigF462]).map(var_core_value_sigBF78 => ({
        unitId: var_core_value_sig731A,
        subUnitId: var_core_value_sig8E75,
        elementId: var_core_value_sigBF78
      })),
      var_core_value_sig57A3 = Ea(var_core_value_sig5BB8.getBatchRemoveElementOp(var_core_value_sig014E)),
      var_core_value_sig4003 = var_core_value_sig014E.map(var_core_value_sig8AF3 => var_core_value_sig5BB8.getElementByParam(var_core_value_sig8AF3)).filter(var_core_value_sigA0CC => !!var_core_value_sigA0CC).map(var_core_value_sigB3A1 => var_core_value_sigB3A1);
    return Yo(var_core_value_sigA8D7, var_core_value_sig4003.length > 0 ? var_core_value_sig4003 : [var_core_value_sig29001]) ? (var_core_value_sig5BB8.applyElementJson1(var_core_value_sig731A, var_core_value_sig8E75, var_core_value_sig57A3.redo), var_core_value_sig5BB8.removeElementNotification(var_core_value_sig014E), true) : false;
  }
};
function Ts(var_core_value_sig9454, var_core_value_sig9B63, var_core_value_sigA86B) {
  let var_core_value_sig8CE0 = tn(var_core_value_sig9454, [...var_core_value_sig9B63], [...var_core_value_sigA86B]),
    var_core_value_sig2D89 = new Set(var_core_value_sig8CE0);
  return Object.values(var_core_value_sig9454).forEach(var_core_value_sig1FB9 => {
    !Q(var_core_value_sig1FB9) || var_core_value_sig2D89.has(var_core_value_sig1FB9.elementId) || Qa(var_core_value_sig1FB9.element).some(var_core_value_sigC6E5 => var_core_value_sig2D89.has(var_core_value_sigC6E5)) && (var_core_value_sig8CE0.push(var_core_value_sig1FB9.elementId), var_core_value_sig2D89.add(var_core_value_sig1FB9.elementId));
  }), var_core_value_sig8CE0;
}
function Es(var_core_value_sig08CE, var_core_value_sig5C06, var_core_value_sigA267) {
  var var_core_value_sig9E58, var_core_value_sigD105;
  let var_core_value_sig6F7E = (var_core_value_sig9E58 = var_core_value_sig08CE[var_core_value_sigA267]) == null ? undefined : var_core_value_sig9E58.element,
    var_core_value_sig3F21 = var_core_value_sig6F7E != null && var_core_value_sig6F7E.parentId ? (var_core_value_sigD105 = var_core_value_sig08CE[var_core_value_sig6F7E.parentId]) == null ? undefined : var_core_value_sigD105.element : undefined;
  return !var_core_value_sig3F21 || var_core_value_sig3F21.type !== M.Container || !var_core_value_sig3F21.containerData["behavior"].membershipLocked || var_core_value_sig5C06.has(var_core_value_sig3F21.id);
}
function Ds(var_core_value_sig22FF, var_core_value_sig3189) {
  let var_core_value_sigA5F8 = new Set(var_core_value_sig3189),
    var_core_value_sigA71A = new Map(var_core_value_sig3189.map((var_core_value_sig53A9, var_core_value_sigDACD) => [var_core_value_sig53A9, var_core_value_sigDACD])),
    var_core_value_sig11F1 = new Map(),
    var_core_value_sigA71D = (var_core_value_sig691E, var_core_value_sigD6D6 = new Set()) => {
      var var_core_value_sig0347;
      let var_core_value_sig52A3 = var_core_value_sig11F1.get(var_core_value_sig691E);
      if (var_core_value_sig52A3 !== undefined) return var_core_value_sig52A3;
      if (var_core_value_sigD6D6.has(var_core_value_sig691E)) return var_core_value_sig11F1.set(var_core_value_sig691E, 0), 0;
      var_core_value_sigD6D6.add(var_core_value_sig691E);
      let var_core_value_sigAD91 = (var_core_value_sig0347 = var_core_value_sig22FF[var_core_value_sig691E]) == null ? undefined : var_core_value_sig0347.element["parentId"],
        var_core_value_sigF64E = var_core_value_sigAD91 && var_core_value_sigA5F8.has(var_core_value_sigAD91) ? var_core_value_sigA71D(var_core_value_sigAD91, var_core_value_sigD6D6) + 1 : 0;
      return var_core_value_sigD6D6.delete(var_core_value_sig691E), var_core_value_sig11F1.set(var_core_value_sig691E, var_core_value_sigF64E), var_core_value_sigF64E;
    };
  return [...var_core_value_sig3189].sort((var_core_value_sig9B3D, var_core_value_sigB217) => {
    let var_core_value_sig1FE6 = var_core_value_sigA71D(var_core_value_sig9B3D) - var_core_value_sigA71D(var_core_value_sigB217);
    return var_core_value_sig1FE6 === 0 ? (var_core_value_sigA71A.get(var_core_value_sig9B3D) ?? 0) - (var_core_value_sigA71A.get(var_core_value_sigB217) ?? 0) : var_core_value_sig1FE6;
  });
}
function Os(var_core_value_sig669B, var_core_value_sig0461, var_core_value_sig4A6A) {
  let var_core_value_sig52B7 = new Set(var_core_value_sig4A6A),
    var_core_value_sig5BA8 = new Map(),
    var_core_value_sig6CA3 = (var_core_value_sig2471, var_core_value_sigD1FC = new Set()) => {
      var var_core_value_sigE2F9;
      let var_core_value_sigD689 = var_core_value_sig5BA8.get(var_core_value_sig2471);
      if (var_core_value_sigD689 !== undefined) return var_core_value_sigD689;
      if (var_core_value_sigD1FC.has(var_core_value_sig2471)) return var_core_value_sig5BA8.set(var_core_value_sig2471, 0), 0;
      var_core_value_sigD1FC.add(var_core_value_sig2471);
      let var_core_value_sig7AE3 = (var_core_value_sigE2F9 = var_core_value_sig669B[var_core_value_sig2471]) == null ? undefined : var_core_value_sigE2F9.element["parentId"],
        var_core_value_sig1EB3 = var_core_value_sig7AE3 && var_core_value_sig52B7.has(var_core_value_sig7AE3) ? var_core_value_sig6CA3(var_core_value_sig7AE3, var_core_value_sigD1FC) + 1 : 0;
      return var_core_value_sigD1FC.delete(var_core_value_sig2471), var_core_value_sig5BA8.set(var_core_value_sig2471, var_core_value_sig1EB3), var_core_value_sig1EB3;
    };
  return [...var_core_value_sig4A6A].sort((var_core_value_sigE120, var_core_value_sigD6E7) => {
    let var_core_value_sig3669 = var_core_value_sig6CA3(var_core_value_sigE120) - var_core_value_sig6CA3(var_core_value_sigD6E7);
    return var_core_value_sig3669 === 0 ? (var_core_value_sig0461.get(var_core_value_sigE120) ?? 2 ** 53 - 1) - (var_core_value_sig0461.get(var_core_value_sigD6E7) ?? 2 ** 53 - 1) : var_core_value_sig3669;
  });
}
const ks = {
  id: "board.operation.remove-elements",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig489C, var_core_value_sig9BF2) => {
    if (!var_core_value_sig9BF2 || var_core_value_sig9BF2.elementIds["length"] === 0) return false;
    let {
        unitId: var_core_value_sigAD59,
        subUnitId: var_core_value_sigD8D7,
        elementIds: var_core_value_sigDD66
      } = var_core_value_sig9BF2,
      var_core_value_sigDCB6 = var_core_value_sig489C.get(L),
      var_core_value_sigA346 = var_core_value_sigDCB6.getElementData(var_core_value_sigAD59, var_core_value_sigD8D7),
      var_core_value_sigDB37 = var_core_value_sigDCB6.getElementOrder(var_core_value_sigAD59, var_core_value_sigD8D7),
      var_core_value_sig2400 = new Map();
    var_core_value_sigDB37.forEach((var_core_value_sig5CBC, var_core_value_sig20BE) => var_core_value_sig2400.set(var_core_value_sig5CBC, var_core_value_sig20BE));
    let var_core_value_sig33E7 = new Set(var_core_value_sigDD66);
    if (var_core_value_sig33E7.size !== var_core_value_sigDD66.length || var_core_value_sigDD66.some(var_core_value_sig6BD0 => !var_core_value_sigA346[var_core_value_sig6BD0])) return false;
    let var_core_value_sigCBAB = Os(var_core_value_sigA346, var_core_value_sig2400, Array.from(var_core_value_sig33E7));
    if (var_core_value_sigCBAB.some(var_core_value_sig8C15 => {
      var var_core_value_sig6DF7;
      let var_core_value_sigB411 = (var_core_value_sig6DF7 = var_core_value_sigA346[var_core_value_sig8C15]) == null ? undefined : var_core_value_sig6DF7.element;
      return (var_core_value_sigB411 == null ? undefined : var_core_value_sigB411.locked) || Aa(var_core_value_sigB411);
    })) return false;
    let var_core_value_sigE3A5 = new Set(),
      var_core_value_sig500F = [];
    if (var_core_value_sigCBAB.forEach(var_core_value_sigA81B => {
      if (var_core_value_sigE3A5.has(var_core_value_sigA81B)) return;
      let var_core_value_sigFE8D = Ts(var_core_value_sigA346, var_core_value_sigDB37, [var_core_value_sigA81B]);
      var_core_value_sigFE8D.length !== 0 && (var_core_value_sig500F.push(var_core_value_sigA81B), var_core_value_sigFE8D.forEach(var_core_value_sigCEFB => var_core_value_sigE3A5.add(var_core_value_sigCEFB)));
    }), var_core_value_sig500F.length === 0 || Array.from(var_core_value_sigE3A5).some(var_core_value_sig8595 => {
      var var_core_value_sigF8DE;
      return (var_core_value_sigF8DE = var_core_value_sigA346[var_core_value_sig8595]) == null ? undefined : var_core_value_sigF8DE.element["locked"];
    }) || !var_core_value_sig500F.every(var_core_value_sigFE76 => Es(var_core_value_sigA346, var_core_value_sigE3A5, var_core_value_sigFE76))) return false;
    let var_core_value_sig2D30 = var_core_value_sigDB37.filter(var_core_value_sig84C8 => var_core_value_sigE3A5.has(var_core_value_sig84C8)),
      var_core_value_sig94E7 = Ds(var_core_value_sigA346, var_core_value_sig2D30),
      var_core_value_sig7A7B = var_core_value_sig500F.map(var_core_value_sig80C0 => ({
        id: ws.id,
        params: {
          unitId: var_core_value_sigAD59,
          subUnitId: var_core_value_sigD8D7,
          elementId: var_core_value_sig80C0,
          elementType: var_core_value_sigA346[var_core_value_sig80C0].element["type"],
          ...(var_core_value_sigA346[var_core_value_sig80C0].element["type"] === M.Container ? {
            containerKind: var_core_value_sigA346[var_core_value_sig80C0].element["containerData"].kind
          } : {})
        }
      })),
      var_core_value_sigA2D7 = var_core_value_sig94E7.map(var_core_value_sig22B4 => ({
        id: Ss.id,
        params: {
          unitId: var_core_value_sigAD59,
          subUnitId: var_core_value_sigD8D7,
          element: X(var_core_value_sig7D37.deepClone(var_core_value_sigA346[var_core_value_sig22B4].element)),
          insertIndex: var_core_value_sigDB37.indexOf(var_core_value_sig22B4),
          ...(var_core_value_sigA346[var_core_value_sig22B4].element["parentId"] && var_core_value_sigE3A5.has(var_core_value_sigA346[var_core_value_sig22B4].element["parentId"]) ? {
            allowLockedParent: true
          } : {})
        }
      })),
      var_core_value_sig0A36 = var_core_value_sig500F.map((var_core_value_sigBB37, var_core_value_sig0C51) => {
        let var_core_value_sigADA4 = Ts(var_core_value_sigA346, var_core_value_sigDB37, [var_core_value_sigBB37]),
          var_core_value_sig0E48 = Ds(var_core_value_sigA346, var_core_value_sigADA4);
        return {
          redoMutation: var_core_value_sig7A7B[var_core_value_sig0C51],
          undoMutations: var_core_value_sig0E48.map(var_core_value_sig1537 => ({
            id: Ss.id,
            params: {
              unitId: var_core_value_sigAD59,
              subUnitId: var_core_value_sigD8D7,
              element: X(var_core_value_sig7D37.deepClone(var_core_value_sigA346[var_core_value_sig1537].element)),
              insertIndex: var_core_value_sigDB37.indexOf(var_core_value_sig1537),
              ...(var_core_value_sigA346[var_core_value_sig1537].element["parentId"] && var_core_value_sigADA4.includes(var_core_value_sigA346[var_core_value_sig1537].element["parentId"]) ? {
                allowLockedParent: true
              } : {})
            }
          }))
        };
      });
    if (!No(var_core_value_sigA346, var_core_value_sig7A7B)) return false;
    let var_core_value_sig87E7 = var_core_value_sig489C.get(hs),
      var_core_value_sig52761 = [],
      var_core_value_sig0B66 = [],
      var_core_value_sig8E9E = [];
    var_core_value_sig2D30.forEach(var_core_value_sig495B => {
      let var_core_value_sig310C = var_core_value_sigA346[var_core_value_sig495B].element;
      if (var_core_value_sig310C.type !== M.Table) return;
      let var_core_value_sig759E = var_core_value_sig87E7.getRemoveTableMutationInfos({
        unitId: var_core_value_sigAD59,
        subUnitId: var_core_value_sigD8D7,
        element: var_core_value_sig310C
      });
      var_core_value_sig52761.push(...var_core_value_sig759E.redoMutations), var_core_value_sig0B66.unshift(...var_core_value_sig759E.undoMutations), var_core_value_sig759E.redoMutations["forEach"]((var_core_value_sigE4C6, var_core_value_sig4313) => {
        var_core_value_sig8E9E.push({
          redoMutation: var_core_value_sigE4C6,
          undoMutation: var_core_value_sig759E.undoMutations[var_core_value_sig4313]
        });
      });
    });
    let var_core_value_sig9A69 = var_core_value_sig489C.get(Gr),
      var_core_value_sig2A04 = [],
      var_core_value_sigA30D = [],
      var_core_value_sig4F28 = [];
    var_core_value_sig2D30.forEach(var_core_value_sig6C80 => {
      let var_core_value_sig6B99 = var_core_value_sigA346[var_core_value_sig6C80].element;
      if (var_core_value_sig6B99.type !== M.Chart) return;
      let var_core_value_sig6ADC = var_core_value_sig9A69.getRemoveChartMutationInfos({
        unitId: var_core_value_sigAD59,
        subUnitId: var_core_value_sigD8D7,
        element: var_core_value_sig6B99
      });
      var_core_value_sig2A04.push(...var_core_value_sig6ADC.redoMutations), var_core_value_sigA30D.unshift(...var_core_value_sig6ADC.undoMutations), var_core_value_sig6ADC.redoMutations["forEach"]((var_core_value_sigFC87, var_core_value_sig156F) => {
        var_core_value_sig4F28.push({
          redoMutation: var_core_value_sigFC87,
          undoMutation: var_core_value_sig6ADC.undoMutations[var_core_value_sig156F]
        });
      });
    });
    let var_core_value_sigE7DA = var_core_value_sig489C.get(var_core_value_sig88BA),
      var_core_value_sig56D11 = [];
    for (let {
      redoMutation: var_core_value_sig41AD,
      undoMutations: var_core_value_sigDBC2
    } of var_core_value_sig0A36) {
      if (!var_core_value_sigE7DA.syncExecuteCommand(var_core_value_sig41AD.id, var_core_value_sig41AD.params)) return js([...var_core_value_sig56D11].reverse(), var_core_value_sigE7DA), false;
      var_core_value_sig56D11.push(var_core_value_sigDBC2);
    }
    let var_core_value_sig2EDE = [];
    for (let {
      redoMutation: var_core_value_sig7739,
      undoMutation: var_core_value_sig4040
    } of var_core_value_sig8E9E) {
      if (!var_core_value_sigE7DA.syncExecuteCommand(var_core_value_sig7739.id, var_core_value_sig7739.params)) return As([...var_core_value_sig2EDE].reverse(), var_core_value_sigE7DA), js([...var_core_value_sig56D11].reverse(), var_core_value_sigE7DA), false;
      var_core_value_sig4040 && var_core_value_sig2EDE.push(var_core_value_sig4040);
    }
    let var_core_value_sig70CD = [];
    for (let {
      redoMutation: var_core_value_sig1AAA,
      undoMutation: var_core_value_sig58DB
    } of var_core_value_sig4F28) {
      if (!var_core_value_sigE7DA.syncExecuteCommand(var_core_value_sig1AAA.id, var_core_value_sig1AAA.params)) return As([...var_core_value_sig70CD].reverse(), var_core_value_sigE7DA), As([...var_core_value_sig2EDE].reverse(), var_core_value_sigE7DA), js([...var_core_value_sig56D11].reverse(), var_core_value_sigE7DA), false;
      var_core_value_sig58DB && var_core_value_sig70CD.push(var_core_value_sig58DB);
    }
    let var_core_value_sig60A5 = [...var_core_value_sig7A7B, ...var_core_value_sig52761, ...var_core_value_sig2A04],
      var_core_value_sig89B2 = [...var_core_value_sigA30D, ...var_core_value_sig0B66, ...var_core_value_sigA2D7];
    return var_core_value_sig60A5.length === 0 ? false : (var_core_value_sig489C.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sigAD59,
      redoMutations: var_core_value_sig60A5,
      undoMutations: var_core_value_sig89B2
    }), true);
  }
};
function As(var_core_value_sigE594, var_core_value_sig63D7) {
  for (let [var_core_value_sig4840, var_core_value_sigB76D] of var_core_value_sigE594.entries()) if (!var_core_value_sig63D7.syncExecuteCommand(var_core_value_sigB76D.id, var_core_value_sigB76D.params)) return {
    result: false,
    index: var_core_value_sig4840
  };
  return {
    result: true,
    index: -1
  };
}
function js(var_core_value_sig2E44, var_core_value_sig6814) {
  var_core_value_sig2E44.forEach(var_core_value_sig1015 => {
    As(var_core_value_sig1015, var_core_value_sig6814);
  });
}
const Ms = {
    id: "board.command.remove-element",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sig0A10, var_core_value_sig9E19) => var_core_value_sig9E19 != null && var_core_value_sig9E19.elementId ? ks.handler(var_core_value_sig0A10, {
      unitId: var_core_value_sig9E19.unitId,
      subUnitId: var_core_value_sig9E19.subUnitId,
      elementIds: [var_core_value_sig9E19.elementId]
    }) : false
  },
  Ns = {
    id: "board.command.resolve-capture-bounds",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sigC832, var_core_value_sig9DD2) => {
      if (!(var_core_value_sig9DD2 != null && var_core_value_sig9DD2.unitId) || !var_core_value_sig9DD2.subUnitId) return false;
      let var_core_value_sigDB97 = var_core_value_sigC832.get(L),
        var_core_value_sigD1A5 = Ps(var_core_value_sigDB97.getElementData(var_core_value_sig9DD2.unitId, var_core_value_sig9DD2.subUnitId), var_core_value_sigDB97.getElementOrder(var_core_value_sig9DD2.unitId, var_core_value_sig9DD2.subUnitId), var_core_value_sig9DD2);
      return var_core_value_sigD1A5.ok ? {
        ...var_core_value_sigD1A5,
        unitId: var_core_value_sig9DD2.unitId,
        subUnitId: var_core_value_sig9DD2.subUnitId
      } : var_core_value_sigD1A5;
    }
  };
function Ps(var_core_value_sigA91A, var_core_value_sig2DE0, var_core_value_sig0513) {
  let var_core_value_sig35D1 = var_core_value_sig0513.padding ?? 0;
  if (!Number.isFinite(var_core_value_sig35D1) || var_core_value_sig35D1 < 0) return {
    code: "padding-invalid",
    ok: false
  };
  if (var_core_value_sig0513.region && var_core_value_sig0513.elementIds) return {
    code: "selector-conflict",
    ok: false
  };
  if (var_core_value_sig0513.region) return Ls(var_core_value_sig0513.region) ? {
    bounds: Rs(var_core_value_sig0513.region, var_core_value_sig35D1),
    ok: true,
    padding: var_core_value_sig35D1,
    region: {
      ...var_core_value_sig0513.region
    },
    selector: "region"
  } : {
    code: "region-invalid",
    ok: false
  };
  if (var_core_value_sig0513.elementIds) {
    if (var_core_value_sig0513.elementIds["length"] === 0) return {
      code: "elements-empty",
      ok: false
    };
    let var_core_value_sig62231 = [];
    for (let var_core_value_sigDD51 of var_core_value_sig0513.elementIds) {
      if (!var_core_value_sigA91A[var_core_value_sigDD51]) return {
        code: "element-missing",
        elementId: var_core_value_sigDD51,
        ok: false
      };
      if (!Is(var_core_value_sigA91A, var_core_value_sigDD51)) return {
        code: "element-hidden",
        elementId: var_core_value_sigDD51,
        ok: false
      };
      let var_core_value_sig5B67 = Fs(var_core_value_sigA91A, var_core_value_sigDD51);
      if (!var_core_value_sig5B67 || !Ls(var_core_value_sig5B67)) return {
        code: "element-unbounded",
        elementId: var_core_value_sigDD51,
        ok: false
      };
      var_core_value_sig62231.push(var_core_value_sig5B67);
    }
    let var_core_value_sigC6B6 = zs(var_core_value_sig62231);
    return var_core_value_sigC6B6 ? {
      bounds: Rs(var_core_value_sigC6B6, var_core_value_sig35D1),
      elementIds: [...var_core_value_sig0513.elementIds],
      ok: true,
      padding: var_core_value_sig35D1,
      selector: "elements"
    } : {
      code: "elements-empty",
      ok: false
    };
  }
  let var_core_value_sig5CE7 = zs(var_core_value_sig2DE0.flatMap(var_core_value_sig498A => {
    if (!Is(var_core_value_sigA91A, var_core_value_sig498A)) return [];
    let var_core_value_sigEF45 = Fs(var_core_value_sigA91A, var_core_value_sig498A);
    return var_core_value_sigEF45 && Ls(var_core_value_sigEF45) ? [var_core_value_sigEF45] : [];
  }));
  return var_core_value_sig5CE7 ? {
    bounds: Rs(var_core_value_sig5CE7, var_core_value_sig35D1),
    ok: true,
    padding: var_core_value_sig35D1,
    selector: "content"
  } : {
    code: "content-empty",
    ok: false
  };
}
function Fs(var_core_value_sig3662, var_core_value_sigABC5) {
  var var_core_value_sig033B;
  let var_core_value_sig2BCC = U(var_core_value_sig3662, var_core_value_sigABC5),
    var_core_value_sigC260 = (var_core_value_sig033B = var_core_value_sig3662[var_core_value_sigABC5]) == null ? undefined : var_core_value_sig033B.element;
  if (!var_core_value_sig2BCC || (var_core_value_sigC260 == null ? undefined : var_core_value_sigC260.type) !== M.Shape) return var_core_value_sig2BCC;
  let var_core_value_sig15611 = In(var_core_value_sigC260.shapeData);
  return var_core_value_sig15611 ? {
    ...var_core_value_sig2BCC,
    height: var_core_value_sig2BCC.height + Math.max(var_core_value_sig15611.minLifelineHeight, var_core_value_sig15611.lifelineHeight)
  } : var_core_value_sig2BCC;
}
function Is(var_core_value_sigAAA8, var_core_value_sigA0B9) {
  let var_core_value_sigB40F = var_core_value_sigAAA8[var_core_value_sigA0B9];
  return (var_core_value_sigB40F == null ? undefined : var_core_value_sigB40F.element["visible"]) !== false && V(var_core_value_sigAAA8, var_core_value_sigA0B9).every(var_core_value_sig36FE => {
    var var_core_value_sig3AF5;
    return ((var_core_value_sig3AF5 = var_core_value_sigAAA8[var_core_value_sig36FE]) == null ? undefined : var_core_value_sig3AF5.element["visible"]) !== false;
  });
}
function Ls(var_core_value_sig86F1) {
  return Number.isFinite(var_core_value_sig86F1.left) && Number.isFinite(var_core_value_sig86F1.top) && Number.isFinite(var_core_value_sig86F1.width) && Number.isFinite(var_core_value_sig86F1.height) && var_core_value_sig86F1.width > 0 && var_core_value_sig86F1.height > 0;
}
function Rs(var_core_value_sig078D, var_core_value_sig60D5) {
  return {
    left: var_core_value_sig078D.left - var_core_value_sig60D5,
    top: var_core_value_sig078D.top - var_core_value_sig60D5,
    width: var_core_value_sig078D.width + var_core_value_sig60D5 * 2,
    height: var_core_value_sig078D.height + var_core_value_sig60D5 * 2
  };
}
function zs(var_core_value_sigD888) {
  if (var_core_value_sigD888.length === 0) return null;
  let var_core_value_sig5337 = Math.min(...var_core_value_sigD888.map(var_core_value_sig14E6 => var_core_value_sig14E6.left)),
    var_core_value_sig2381 = Math.min(...var_core_value_sigD888.map(var_core_value_sig8690 => var_core_value_sig8690.top)),
    var_core_value_sig573D = Math.max(...var_core_value_sigD888.map(var_core_value_sigDF29 => var_core_value_sigDF29.left + var_core_value_sigDF29.width)),
    var_core_value_sigC09F = Math.max(...var_core_value_sigD888.map(var_core_value_sigC0F8 => var_core_value_sigC0F8.top + var_core_value_sigC0F8.height));
  return {
    left: var_core_value_sig5337,
    top: var_core_value_sig2381,
    width: var_core_value_sig573D - var_core_value_sig5337,
    height: var_core_value_sigC09F - var_core_value_sig2381
  };
}
function Bs(var_core_value_sig205A, var_core_value_sig16E2) {
  let var_core_value_sig8904 = var_core_value_sig7D37.deepClone(var_core_value_sig205A ?? {});
  return var_core_value_sig16E2.fill === null ? delete var_core_value_sig8904.fill : var_core_value_sig16E2.fill !== undefined && (var_core_value_sig8904.fill = var_core_value_sig7D37.deepClone(var_core_value_sig16E2.fill)), var_core_value_sig16E2.stroke === null ? delete var_core_value_sig8904.stroke : var_core_value_sig16E2.stroke !== undefined && (var_core_value_sig8904.stroke = var_core_value_sig7D37.deepClone(var_core_value_sig16E2.stroke)), var_core_value_sig16E2.interruptLine !== undefined && (var_core_value_sig8904.interruptLine = var_core_value_sig16E2.interruptLine), var_core_value_sig16E2.lineGap !== undefined && (var_core_value_sig8904.lineGap = var_core_value_sig16E2.lineGap), var_core_value_sig8904;
}
const Vs = {
    id: "board.command.set-connector-label-style",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sigBA69, var_core_value_sig4AC2) => {
      if (!var_core_value_sig4AC2 || !var_core_value_sig4AC2.style || typeof var_core_value_sig4AC2.style != "object" || Array.isArray(var_core_value_sig4AC2.style) || "lineBreak" in var_core_value_sig4AC2.style) return false;
      let var_core_value_sig08B2 = var_core_value_sigBA69.get(L).getElementByParam(var_core_value_sig4AC2),
        var_core_value_sigDE7F = var_core_value_sig08B2 == null ? undefined : var_core_value_sig08B2.element;
      if (!var_core_value_sigDE7F || var_core_value_sigDE7F.type !== M.Connector) return false;
      let var_core_value_sigD898 = var_core_value_sig4AC2.labelId === undefined ? Ka(var_core_value_sigDE7F.connectorData)[0] : Ka(var_core_value_sigDE7F.connectorData).find(var_core_value_sig3C75 => var_core_value_sig3C75.id === var_core_value_sig4AC2.labelId);
      if (!var_core_value_sigD898) return false;
      let var_core_value_sig0386 = Ja(var_core_value_sigDE7F.connectorData, var_core_value_sigD898.id, var_core_value_sig992D => ({
        ...var_core_value_sig992D,
        style: Bs(var_core_value_sig992D.style, var_core_value_sig4AC2.style)
      }));
      return var_core_value_sig0386 ? fs(var_core_value_sigBA69, {
        unitId: var_core_value_sig4AC2.unitId,
        subUnitId: var_core_value_sig4AC2.subUnitId,
        updates: [{
          elementId: var_core_value_sig4AC2.elementId,
          element: {
            ...var_core_value_sigDE7F,
            connectorData: var_core_value_sig0386
          }
        }]
      }) : false;
    }
  },
  Hs = {
    id: "board.command.set-connector-label-text",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sig577B, var_core_value_sigF342) => {
      if (!var_core_value_sigF342 || var_core_value_sigF342.content === undefined) return false;
      let var_core_value_sig7871 = var_core_value_sig577B.get(L).getElementByParam(var_core_value_sigF342),
        var_core_value_sig7CBA = var_core_value_sig7871 == null ? undefined : var_core_value_sig7871.element;
      if (!var_core_value_sig7CBA || var_core_value_sig7CBA.type !== M.Connector) return false;
      let var_core_value_sigC924 = [...Ka(var_core_value_sig7CBA.connectorData)],
        var_core_value_sig718D = var_core_value_sigF342.labelId === undefined ? 0 : var_core_value_sigC924.findIndex(var_core_value_sigE4E4 => var_core_value_sigE4E4.id === var_core_value_sigF342.labelId);
      if (var_core_value_sigF342.labelId !== undefined && var_core_value_sig718D < 0) return false;
      let var_core_value_sigCC47 = var_core_value_sigC924[var_core_value_sig718D],
        var_core_value_sig12EE = {
          ...var_core_value_sigCC47,
          id: (var_core_value_sigCC47 == null ? undefined : var_core_value_sigCC47.id) ?? var_core_value_sigF342.labelId ?? var_core_value_sig90E7(6),
          content: var_core_value_sig7D37.deepClone(var_core_value_sigF342.content)
        };
      return var_core_value_sig718D < var_core_value_sigC924.length ? var_core_value_sigC924[var_core_value_sig718D] = var_core_value_sig12EE : var_core_value_sigC924.push(var_core_value_sig12EE), fs(var_core_value_sig577B, {
        unitId: var_core_value_sigF342.unitId,
        subUnitId: var_core_value_sigF342.subUnitId,
        updates: [{
          elementId: var_core_value_sigF342.elementId,
          element: {
            ...var_core_value_sig7CBA,
            connectorData: qa(var_core_value_sig7CBA.connectorData, var_core_value_sigC924)
          }
        }]
      });
    }
  },
  Us = {
    id: "board.mutation.set-name",
    type: var_core_value_sigE0AC.MUTATION,
    handler: (var_core_value_sigEB89, var_core_value_sig405C) => {
      let var_core_value_sig820E = var_core_value_sigEB89.get(var_core_value_sig7F3C).getUnit(var_core_value_sig405C.unitId, var_core_value_sigC8D0.UNIVER_BOARD);
      return var_core_value_sig820E ? (var_core_value_sig820E.setName(var_core_value_sig405C.name), true) : false;
    }
  },
  Ws = {
    id: "board.command.set-name",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sigA753, var_core_value_sigEF41) => {
      if (!var_core_value_sigEF41) return false;
      let var_core_value_sig9793 = var_core_value_sigA753.get(var_core_value_sig7F3C).getUnit(var_core_value_sigEF41.unitId, var_core_value_sigC8D0.UNIVER_BOARD);
      if (!var_core_value_sig9793) return false;
      let var_core_value_sigDB87 = var_core_value_sigA753.get(var_core_value_sig88BA),
        var_core_value_sig2858 = {
          unitId: var_core_value_sigEF41.unitId,
          name: var_core_value_sigEF41.name
        },
        var_core_value_sig2683 = {
          unitId: var_core_value_sigEF41.unitId,
          name: var_core_value_sig9793.getSnapshot().name
        };
      return var_core_value_sigDB87.syncExecuteCommand(Us.id, var_core_value_sig2858) ? (var_core_value_sigA753.get(var_core_value_sig1F7B).pushUndoRedo({
        unitID: var_core_value_sigEF41.unitId,
        redoMutations: [{
          id: Us.id,
          params: var_core_value_sig2858
        }],
        undoMutations: [{
          id: Us.id,
          params: var_core_value_sig2683
        }]
      }), true) : false;
    }
  },
  Gs = {
    id: "board.mutation.set-page-background",
    type: var_core_value_sigE0AC.MUTATION,
    handler: (var_core_value_sigEA13, var_core_value_sig1699) => {
      let var_core_value_sig42E9 = var_core_value_sigEA13.get(var_core_value_sig7F3C).getUnit(var_core_value_sig1699.unitId, var_core_value_sigC8D0.UNIVER_BOARD);
      return var_core_value_sig42E9 ? var_core_value_sig42E9.setPageBackground(var_core_value_sig1699.subUnitId, var_core_value_sig1699.background) : false;
    }
  };
function Ks(var_core_value_sig0B64) {
  return var_core_value_sig0B64 ? var_core_value_sig7D37.deepClone(var_core_value_sig0B64) : undefined;
}
const qs = {
  id: "board.command.set-page-background",
  type: var_core_value_sigE0AC.COMMAND,
  handler: (var_core_value_sig3BFC, var_core_value_sig9CF5) => {
    if (!var_core_value_sig9CF5 || var_core_value_sig9CF5.background && var_core_value_sig9CF5.background["source"].trim().length === 0) return false;
    let var_core_value_sig5BFB = var_core_value_sig3BFC.get(var_core_value_sig7F3C).getUnit(var_core_value_sig9CF5.unitId, var_core_value_sigC8D0.UNIVER_BOARD),
      var_core_value_sig47A3 = var_core_value_sig5BFB == null ? undefined : var_core_value_sig5BFB.getPage(var_core_value_sig9CF5.subUnitId);
    if (!var_core_value_sig5BFB || !var_core_value_sig47A3) return false;
    let var_core_value_sig7CA8 = {
        unitId: var_core_value_sig9CF5.unitId,
        subUnitId: var_core_value_sig9CF5.subUnitId,
        background: Ks(var_core_value_sig9CF5.background)
      },
      var_core_value_sig1B33 = {
        unitId: var_core_value_sig9CF5.unitId,
        subUnitId: var_core_value_sig9CF5.subUnitId,
        background: Ks(var_core_value_sig47A3.background)
      };
    return var_core_value_sig3BFC.get(var_core_value_sig88BA).syncExecuteCommand(Gs.id, var_core_value_sig7CA8) ? (var_core_value_sig3BFC.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig9CF5.unitId,
      redoMutations: [{
        id: Gs.id,
        params: var_core_value_sig7CA8
      }],
      undoMutations: [{
        id: Gs.id,
        params: var_core_value_sig1B33
      }]
    }), true) : false;
  }
};
var Js = class {
    constructor(var_core_value_sigA4B0) {
      this.unitId = var_core_value_sigA4B0, I(this, "type", var_core_value_sigC806.Board), I(this, "subType", var_core_value_sigA82B.Comment), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sigA4B0;
    }
  },
  Ys = class {
    constructor(var_core_value_sig5F50) {
      this.unitId = var_core_value_sig5F50, I(this, "type", var_core_value_sigC806.Board), I(this, "subType", var_core_value_sigA82B.Copy), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sig5F50;
    }
  },
  Xs = class {
    constructor(var_core_value_sig4494) {
      this.unitId = var_core_value_sig4494, I(this, "type", var_core_value_sigC806.Board), I(this, "subType", var_core_value_sigA82B.Edit), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sig4494;
    }
  },
  Zs = class {
    constructor(var_core_value_sigFFAF) {
      this.unitId = var_core_value_sigFFAF, I(this, "type", var_core_value_sigC806.Board), I(this, "subType", var_core_value_sigA82B.Export), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sigFFAF;
    }
  },
  Qs = class {
    constructor(var_core_value_sig478B) {
      this.unitId = var_core_value_sig478B, I(this, "type", var_core_value_sigC806.Board), I(this, "subType", var_core_value_sigA82B.Print), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sig478B;
    }
  },
  $s = class {
    constructor(var_core_value_sig1E21, var_core_value_sig9DBF) {
      this.unitId = var_core_value_sig1E21, this.objectId = var_core_value_sig9DBF, I(this, "type", var_core_value_sigC806.BoardElement), I(this, "subType", var_core_value_sigA82B.Edit), I(this, "status", var_core_value_sig0873.INIT), I(this, "id", undefined), I(this, "value", true), this.id = this.type + "." + this.subType + "_" + var_core_value_sig1E21 + "_" + var_core_value_sig9DBF;
    }
  };
const ec = [var_core_value_sigA82B.Edit, var_core_value_sigA82B.Copy, var_core_value_sigA82B.Print, var_core_value_sigA82B.Export, var_core_value_sigA82B.Comment],
  tc = new Set([var_core_value_sigC806.Board, var_core_value_sigC806.BoardElement]),
  nc = "element/";
function rc(var_core_value_sig041A, var_core_value_sig7E4F) {
  return "" + nc + encodeURIComponent(var_core_value_sig041A) + "/" + encodeURIComponent(var_core_value_sig7E4F);
}
function ic(var_core_value_sig5A6A, var_core_value_sig7E71, var_core_value_sig14B7) {
  if (var_core_value_sig7E71 === var_core_value_sig5A6A) switch (var_core_value_sig14B7) {
    case var_core_value_sigA82B.Edit:
      return new Xs(var_core_value_sig5A6A);
    case var_core_value_sigA82B.Copy:
      return new Ys(var_core_value_sig5A6A);
    case var_core_value_sigA82B.Print:
      return new Qs(var_core_value_sig5A6A);
    case var_core_value_sigA82B.Export:
      return new Zs(var_core_value_sig5A6A);
    case var_core_value_sigA82B.Comment:
      return new Js(var_core_value_sig5A6A);
    default:
      throw Error("Unsupported Board permission action: " + var_core_value_sig14B7);
  }
  if (var_core_value_sig14B7 !== var_core_value_sigA82B.Edit) throw Error("Board object permissions only support Edit: " + var_core_value_sig7E71);
  if (var_core_value_sig7E71.startsWith(nc)) return new $s(var_core_value_sig5A6A, var_core_value_sig7E71);
  throw Error("Unsupported Board permission object: " + var_core_value_sig7E71);
}
function ac(var_core_value_sig7D2C, var_core_value_sigE10A, var_core_value_sig0AE5, var_core_value_sig57CC) {
  var var_core_value_sig2932;
  return ((var_core_value_sig2932 = var_core_value_sig7D2C.getPermissionPoint(ic(var_core_value_sigE10A, var_core_value_sig0AE5, var_core_value_sig57CC).id)) == null ? undefined : var_core_value_sig2932.value) ?? true;
}
function oc(var_core_value_sigA067, var_core_value_sig0CB3, var_core_value_sigE0F3, var_core_value_sig7330, var_core_value_sig2766) {
  let var_core_value_sig1BD2 = ic(var_core_value_sig0CB3, var_core_value_sigE0F3, var_core_value_sig7330);
  var_core_value_sigA067.getPermissionPoint(var_core_value_sig1BD2.id) || var_core_value_sigA067.addPermissionPoint(var_core_value_sig1BD2), var_core_value_sigA067.updatePermissionPoint(var_core_value_sig1BD2.id, var_core_value_sig2766);
}
function sc(var_core_value_sig2CA0, var_core_value_sigDD2D) {
  var_core_value_sig2CA0.getAllPermissionPoint().forEach((var_core_value_sig36CC, var_core_value_sigA568) => {
    var_core_value_sig36CC.subscribe(var_core_value_sigF057 => {
      tc.has(var_core_value_sigF057.type) && "unitId" in var_core_value_sigF057 && var_core_value_sigF057.unitId === var_core_value_sigDD2D && var_core_value_sig2CA0.deletePermissionPoint(var_core_value_sigA568);
    }).unsubscribe();
  });
}
function cc(var_core_value_sig8880, var_core_value_sig005B, var_core_value_sig6383) {
  return ac(var_core_value_sig8880, var_core_value_sig005B, var_core_value_sig005B, var_core_value_sigA82B.Edit) && Array.from(var_core_value_sig6383).every(var_core_value_sigD22D => ac(var_core_value_sig8880, var_core_value_sig005B, var_core_value_sigD22D, var_core_value_sigA82B.Edit));
}
const lc = {
    type: var_core_value_sigE0AC.COMMAND,
    id: "board.command.set-permission",
    handler(var_core_value_sigCDBE, var_core_value_sig8589) {
      return !var_core_value_sig8589 || !ec.includes(var_core_value_sig8589.action) || var_core_value_sig8589.objectId !== var_core_value_sig8589.unitId && var_core_value_sig8589.action !== var_core_value_sigA82B.Edit ? false : (oc(var_core_value_sigCDBE.get(var_core_value_sig7EBF), var_core_value_sig8589.unitId, var_core_value_sig8589.objectId, var_core_value_sig8589.action, var_core_value_sig8589.value), true);
    }
  },
  uc = {
    id: "board.command.update-element",
    type: var_core_value_sigE0AC.COMMAND,
    handler: (var_core_value_sig2F83, var_core_value_sig4AD6) => {
      if (!var_core_value_sig4AD6) return false;
      let {
        historyId: var_core_value_sig83CC,
        unitId: var_core_value_sigECB51,
        subUnitId: var_core_value_sigEC7A,
        ...var_core_value_sig3C20
      } = var_core_value_sig4AD6;
      return fs(var_core_value_sig2F83, {
        historyId: var_core_value_sig83CC,
        unitId: var_core_value_sigECB51,
        subUnitId: var_core_value_sigEC7A,
        updates: [var_core_value_sig3C20]
      });
    }
  },
  dc = {
    id: "board.mutation.remove-element-only",
    type: var_core_value_sigE0AC.MUTATION,
    handler: (var_core_value_sig55A0, var_core_value_sig6F0A) => {
      var var_core_value_sig193F;
      let {
        unitId: var_core_value_sig5227,
        subUnitId: var_core_value_sig8CB8,
        elementId: var_core_value_sigBE77,
        allowLockedParent: var_core_value_sig9700
      } = var_core_value_sig6F0A;
      if (!var_core_value_sigBE77) return false;
      let var_core_value_sigB461 = var_core_value_sig55A0.get(var_core_value_sig7F3C).getUnit(var_core_value_sig5227, var_core_value_sigC8D0.UNIVER_BOARD);
      if (!var_core_value_sigB461) return false;
      let var_core_value_sigDDFF = var_core_value_sig55A0.get(L),
        var_core_value_sig52C1 = var_core_value_sigDDFF.getElementByParam({
          unitId: var_core_value_sig5227,
          subUnitId: var_core_value_sig8CB8,
          elementId: var_core_value_sigBE77
        });
      if (!var_core_value_sig52C1 || var_core_value_sig52C1.element["locked"] === true) return false;
      let var_core_value_sigFA8C = var_core_value_sigDDFF.getElementData(var_core_value_sig5227, var_core_value_sig8CB8),
        var_core_value_sig19C6 = var_core_value_sig52C1.element["parentId"] ? (var_core_value_sig193F = var_core_value_sigFA8C[var_core_value_sig52C1.element["parentId"]]) == null ? undefined : var_core_value_sig193F.element : undefined;
      if (!var_core_value_sig9700 && ko(var_core_value_sigFA8C, var_core_value_sig52C1.element) || !var_core_value_sig9700 && (var_core_value_sig19C6 == null ? undefined : var_core_value_sig19C6.type) === M.Container && var_core_value_sig19C6.containerData["behavior"].membershipLocked || var_core_value_sig52C1.element["type"] === M.Container && Object.values(var_core_value_sigFA8C).some(var_core_value_sig85D5 => var_core_value_sig85D5.element["parentId"] === var_core_value_sigBE77) || Object.values(var_core_value_sigFA8C).some(var_core_value_sig5D2E => Q(var_core_value_sig5D2E) && Qa(var_core_value_sig5D2E.element).includes(var_core_value_sigBE77))) return false;
      let var_core_value_sigDB89 = Ea(var_core_value_sigDDFF.getBatchRemoveElementOp([{
        unitId: var_core_value_sig5227,
        subUnitId: var_core_value_sig8CB8,
        elementId: var_core_value_sigBE77
      }]));
      return Jo(var_core_value_sigB461, var_core_value_sig52C1) ? (var_core_value_sigDDFF.applyElementJson1(var_core_value_sig5227, var_core_value_sig8CB8, var_core_value_sigDB89.redo), var_core_value_sigDDFF.removeElementNotification([{
        unitId: var_core_value_sig5227,
        subUnitId: var_core_value_sig8CB8,
        elementId: var_core_value_sigBE77
      }]), true) : false;
    }
  },
  fc = {
    id: "board.mutation.set-element-order",
    type: var_core_value_sigE0AC.MUTATION,
    handler: (var_core_value_sigCBF6, var_core_value_sigE0DD) => {
      if (!var_core_value_sigE0DD || var_core_value_sigE0DD.elementIds["length"] === 0) return false;
      let {
          unitId: var_core_value_sig9874,
          subUnitId: var_core_value_sig61DE,
          elementIds: var_core_value_sig9717
        } = var_core_value_sigE0DD,
        var_core_value_sig7C72 = var_core_value_sigCBF6.get(var_core_value_sig7F3C).getUnit(var_core_value_sig9874, var_core_value_sigC8D0.UNIVER_BOARD);
      if (!var_core_value_sig7C72) return false;
      let var_core_value_sigECAB = var_core_value_sigCBF6.get(L);
      return Xo(var_core_value_sig7C72, var_core_value_sig61DE, var_core_value_sig9717) ? (var_core_value_sigECAB.setElementOrder(var_core_value_sig9874, var_core_value_sig61DE, var_core_value_sig9717), var_core_value_sigECAB.orderUpdateNotification({
        unitId: var_core_value_sig9874,
        subUnitId: var_core_value_sig61DE,
        elementIds: var_core_value_sig9717
      }), true) : false;
    }
  };
function pc() {
  return {
    retained: [],
    captured: [],
    expelled: [],
    autosized: [],
    blocked: []
  };
}
function mc(var_core_value_sigEB4B) {
  let var_core_value_sigF741 = pc(),
    var_core_value_sigB227 = new Set(var_core_value_sigEB4B.preview["forcedCaptureChildIds"]);
  return var_core_value_sigEB4B.preview["retainedChildIds"].forEach(var_core_value_sig7221 => {
    var_core_value_sigF741.retained["push"]({
      elementId: var_core_value_sig7221,
      containerId: var_core_value_sigEB4B.containerId
    });
  }), var_core_value_sigEB4B.preview["captureChildIds"].forEach(var_core_value_sig0A5A => {
    var var_core_value_sigE6D6;
    var_core_value_sigF741.captured["push"]({
      elementId: var_core_value_sig0A5A,
      fromParentId: (var_core_value_sigE6D6 = var_core_value_sigEB4B.elementData[var_core_value_sig0A5A]) == null ? undefined : var_core_value_sigE6D6.element["parentId"],
      toParentId: var_core_value_sigEB4B.containerId,
      forced: var_core_value_sigB227.has(var_core_value_sig0A5A)
    });
  }), var_core_value_sigEB4B.preview["forcedCaptureChildIds"].forEach(var_core_value_sig8507 => {
    var var_core_value_sig8A7F;
    var_core_value_sigEB4B.preview["captureChildIds"].includes(var_core_value_sig8507) || var_core_value_sigF741.captured["push"]({
      elementId: var_core_value_sig8507,
      fromParentId: (var_core_value_sig8A7F = var_core_value_sigEB4B.elementData[var_core_value_sig8507]) == null ? undefined : var_core_value_sig8A7F.element["parentId"],
      toParentId: var_core_value_sigEB4B.containerId,
      forced: true
    });
  }), var_core_value_sigEB4B.preview["expelChildIds"].forEach(var_core_value_sig9E81 => {
    var var_core_value_sig8295;
    var_core_value_sigF741.expelled["push"]({
      elementId: var_core_value_sig9E81,
      fromParentId: ((var_core_value_sig8295 = var_core_value_sigEB4B.elementData[var_core_value_sig9E81]) == null ? undefined : var_core_value_sig8295.element["parentId"]) ?? var_core_value_sigEB4B.containerId,
      toParentId: undefined
    });
  }), var_core_value_sigEB4B.preview["blockedChildIds"].forEach(var_core_value_sigA975 => {
    var_core_value_sigB227.has(var_core_value_sigA975) || var_core_value_sigF741.blocked["push"]({
      elementId: var_core_value_sigA975,
      targetContainerId: var_core_value_sigEB4B.containerId,
      reason: "previewBlocked"
    });
  }), var_core_value_sigEB4B.preview["expandedOuterBounds"] && var_core_value_sigF741.autosized["push"]({
    containerId: var_core_value_sigEB4B.containerId,
    nextBounds: var_core_value_sigEB4B.preview["expandedOuterBounds"],
    reason: "autoResize"
  }), var_core_value_sigF741;
}
function hc(var_core_value_sigCFC5, var_core_value_sigEC54) {
  return Object.values(var_core_value_sigCFC5).filter(var_core_value_sig1263 => var_core_value_sig1263.element["parentId"] === var_core_value_sigEC54).map(var_core_value_sig457C => var_core_value_sig457C.elementId);
}
function gc(var_core_value_sig9B6A1, var_core_value_sigEA29, var_core_value_sig3851) {
  let var_core_value_sigE1D0 = var_core_value_sigEA29.element["parentId"],
    var_core_value_sig8AFC = new Set([var_core_value_sigEA29.elementId]);
  for (; var_core_value_sigE1D0;) {
    if (var_core_value_sigE1D0 === var_core_value_sig3851 || var_core_value_sig8AFC.has(var_core_value_sigE1D0)) return false;
    let var_core_value_sig72F6 = var_core_value_sig9B6A1[var_core_value_sigE1D0];
    if (!var_core_value_sig72F6) return false;
    if (var_core_value_sig72F6.hidden === true || var_core_value_sig72F6.element["visible"] === false) return true;
    var_core_value_sig8AFC.add(var_core_value_sigE1D0), var_core_value_sigE1D0 = var_core_value_sig72F6.element["parentId"];
  }
  return false;
}
function _c(var_core_value_sigA761, var_core_value_sig0996, var_core_value_sig09E0, var_core_value_sigB201 = false) {
  return !var_core_value_sigA761 || var_core_value_sigA761.hidden === true || var_core_value_sigA761.element["visible"] === false || gc(var_core_value_sig0996, var_core_value_sigA761, var_core_value_sig09E0) || !var_core_value_sigB201 && var_core_value_sigA761.element["locked"] === true || var_core_value_sigA761.element["selectable"] === false || var_core_value_sigA761.element["type"] === M.Connector;
}
function vc(var_core_value_sigFB17, var_core_value_sigCA91, var_core_value_sig372C, var_core_value_sig98F9, var_core_value_sig3F40, var_core_value_sig7A2F) {
  if (!var_core_value_sigFB17.containerData["capturePolicy"].enabled || !var_core_value_sigFB17.containerData["behavior"].autoCapture || !var_core_value_sigFB17.containerData["behavior"].acceptsChildren) return true;
  let var_core_value_sig3047 = var_core_value_sigCA91 == null ? undefined : var_core_value_sigCA91.element["parentId"],
    var_core_value_sig19A5 = Vn(var_core_value_sig3047 ? var_core_value_sig372C[var_core_value_sig3047] : undefined);
  return var_core_value_sig3047 && var_core_value_sig19A5 && var_core_value_sig3047 !== var_core_value_sig3F40 && !var_core_value_sig7A2F.has(var_core_value_sig98F9) && !(V(var_core_value_sig372C, var_core_value_sig3F40).includes(var_core_value_sig3047) ? var_core_value_sigFB17.containerData["capturePolicy"].allowCaptureFromAncestorContainer === true : var_core_value_sigFB17.containerData["capturePolicy"].allowCaptureFromSiblingContainer) ? true : (var_core_value_sigCA91 == null ? undefined : var_core_value_sigCA91.element["type"]) === M.Container ? !var_core_value_sigFB17.containerData["behavior"].acceptsContainer || !var_core_value_sigFB17.containerData["behavior"].allowNested || !var_core_value_sigFB17.containerData["capturePolicy"].allowCaptureContainer || Wn(var_core_value_sig372C, var_core_value_sig98F9, var_core_value_sig3F40) : false;
}
function yc(var_core_value_sigC5EA, var_core_value_sigC9A11) {
  return var_core_value_sigC5EA || var_core_value_sigC9A11 === true;
}
function bc(var_core_value_sigF92E, var_core_value_sig70AE, var_core_value_sig57BC, var_core_value_sig41AB) {
  return !!var_core_value_sigF92E && (var_core_value_sig57BC !== true || var_core_value_sig41AB) && (var_core_value_sigF92E.width > var_core_value_sig70AE.width || var_core_value_sigF92E.height > var_core_value_sig70AE.height);
}
function xc(var_core_value_sigCDAC) {
  return var_core_value_sigCDAC.type === M.Container && var_core_value_sigCDAC.containerData["kind"] === "swimlane" && !!var_core_value_sigCDAC.containerData["swimlane"];
}
function Sc(var_core_value_sigDC24, var_core_value_sig3875) {
  return xc(var_core_value_sigDC24) ? yi(Ii(var_core_value_sigDC24, var_core_value_sig3875).map(var_core_value_sigA4E6 => var_core_value_sigA4E6.contentBounds)) ?? {
    left: var_core_value_sig3875.left,
    top: var_core_value_sig3875.top + (var_core_value_sigDC24.containerData["titleVisible"] === false ? 0 : var_core_value_sigDC24.containerData["headerSize"] ?? 0),
    width: var_core_value_sig3875.width,
    height: Math.max(0, var_core_value_sig3875.height - (var_core_value_sigDC24.containerData["titleVisible"] === false ? 0 : var_core_value_sigDC24.containerData["headerSize"] ?? 0))
  } : bi(var_core_value_sigDC24, var_core_value_sig3875).contentBounds;
}
function Cc(var_core_value_sig5513, var_core_value_sig6048, var_core_value_sigE6C3, var_core_value_sig6469) {
  return xc(var_core_value_sig5513) ? !!Ui(var_core_value_sig5513, var_core_value_sig6048, var_core_value_sig6469) : gi(var_core_value_sigE6C3, var_core_value_sig6469);
}
function wc(var_core_value_sig8BC7, var_core_value_sig5939, var_core_value_sig7432, var_core_value_sig19F0) {
  if (!xc(var_core_value_sig8BC7)) return gi(var_core_value_sig7432, var_core_value_sig19F0);
  let var_core_value_sig619B = var_core_value_sig8BC7.containerData["capturePolicy"].expelHysteresis ?? 0;
  return Ii(var_core_value_sig8BC7, var_core_value_sig5939).some(var_core_value_sig934F => gi(hi(var_core_value_sig934F.contentBounds, var_core_value_sig619B), var_core_value_sig19F0));
}
function Tc(var_core_value_sig3F16, var_core_value_sig6C48, var_core_value_sig9140, var_core_value_sig1CF9) {
  return xc(var_core_value_sig3F16) ? Ii(var_core_value_sig3F16, var_core_value_sig6C48).some(var_core_value_sig74A7 => vi(var_core_value_sig74A7.contentBounds, var_core_value_sig1CF9)) : vi(var_core_value_sig9140, var_core_value_sig1CF9);
}
function Ec(var_core_value_sigC63A, var_core_value_sig1D3B, var_core_value_sig453A) {
  var var_core_value_sigEE97, var_core_value_sig1DE5;
  if (!xc(var_core_value_sigC63A)) return xi(var_core_value_sigC63A, var_core_value_sig1D3B, var_core_value_sig453A);
  let var_core_value_sigB51C = var_core_value_sigC63A.containerData["titleVisible"] === false ? 0 : var_core_value_sigC63A.containerData["headerSize"] ?? 0,
    var_core_value_sig1426 = Math.max(0, ((var_core_value_sigEE97 = var_core_value_sigC63A.containerData["swimlane"]) == null ? undefined : var_core_value_sigEE97.headerSize) ?? 0),
    var_core_value_sigEA3C = ((var_core_value_sig1DE5 = var_core_value_sigC63A.containerData["swimlane"]) == null ? undefined : var_core_value_sig1DE5.orientation) === "horizontal",
    var_core_value_sigD0B7 = Math.min(var_core_value_sig1D3B.left, var_core_value_sig453A.left - (var_core_value_sigEA3C ? var_core_value_sig1426 : 0)),
    var_core_value_sig073B = Math.min(var_core_value_sig1D3B.top, var_core_value_sig453A.top - var_core_value_sigB51C - (var_core_value_sigEA3C ? 0 : var_core_value_sig1426)),
    var_core_value_sig4B16 = Math.max(q(var_core_value_sig1D3B), q(var_core_value_sig453A)),
    var_core_value_sig3649 = Math.max(J(var_core_value_sig1D3B), J(var_core_value_sig453A));
  return {
    left: var_core_value_sigD0B7,
    top: var_core_value_sig073B,
    width: var_core_value_sig4B16 - var_core_value_sigD0B7,
    height: var_core_value_sig3649 - var_core_value_sig073B
  };
}
function Dc(var_core_value_sigD0F3) {
  let var_core_value_sig415D = var_core_value_sigD0F3.elementData[var_core_value_sigD0F3.containerId];
  if (!var_core_value_sig415D || var_core_value_sig415D.element["type"] !== M.Container) return {
    activeContainerId: var_core_value_sigD0F3.containerId,
    previewOuterBounds: var_core_value_sigD0F3.previewOuterBounds ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    previewContentBounds: {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    retainedChildIds: [],
    expelChildIds: [],
    captureChildIds: [],
    forcedCaptureChildIds: [],
    blockedChildIds: []
  };
  let var_core_value_sig0A15 = var_core_value_sig415D.element,
    var_core_value_sig7113 = var_core_value_sig415D.hidden !== true && var_core_value_sig0A15.visible !== false && !gc(var_core_value_sigD0F3.elementData, var_core_value_sig415D) && var_core_value_sig0A15.locked !== true && var_core_value_sig0A15.selectable !== false && !var_core_value_sig0A15.containerData["behavior"].membershipLocked,
    var_core_value_sig1555 = var_core_value_sigD0F3.previewOuterBounds ?? U(var_core_value_sigD0F3.elementData, var_core_value_sigD0F3.containerId) ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    var_core_value_sigC06C = bi(var_core_value_sig0A15, var_core_value_sig1555),
    var_core_value_sigF8D0 = Sc(var_core_value_sig0A15, var_core_value_sig1555),
    var_core_value_sig0107 = xc(var_core_value_sig0A15) ? hi(var_core_value_sigF8D0, var_core_value_sig0A15.containerData["capturePolicy"].expelHysteresis ?? 0) : var_core_value_sigC06C.expandedContentBounds,
    var_core_value_sig05B7 = [],
    var_core_value_sig19F01 = [],
    var_core_value_sigF035 = [],
    var_core_value_sig0804 = [],
    var_core_value_sig417D = [],
    var_core_value_sig73B7 = [var_core_value_sigF8D0],
    var_core_value_sig4DEF = hc(var_core_value_sigD0F3.elementData, var_core_value_sigD0F3.containerId),
    var_core_value_sigF576 = var_core_value_sig0A15.containerData["behavior"].membershipLocked,
    var_core_value_sig3087 = new Set(var_core_value_sigD0F3.allowCaptureFromParentedCandidateIds ?? []),
    var_core_value_sigC30C = new Set(var_core_value_sigD0F3.forceCaptureCandidateIds ?? []),
    var_core_value_sigAE4D = new Set(var_core_value_sigD0F3.autosizeCaptureCandidateIds ?? []),
    var_core_value_sigA2D5 = var_core_value_sig3685 => {
      var_core_value_sigF035.push(var_core_value_sig3685), var_core_value_sigC30C.has(var_core_value_sig3685) && var_core_value_sig417D.push(var_core_value_sig3685);
    };
  var_core_value_sig4DEF.forEach(var_core_value_sigC621 => {
    let var_core_value_sig86D7 = var_core_value_sigD0F3.elementData[var_core_value_sigC621];
    if (_c(var_core_value_sig86D7, var_core_value_sigD0F3.elementData, var_core_value_sigD0F3.containerId)) {
      var_core_value_sig05B7.push(var_core_value_sigC621);
      return;
    }
    let var_core_value_sig431B1 = U(var_core_value_sigD0F3.elementData, var_core_value_sigC621);
    if (var_core_value_sig431B1) {
      if (yc(var_core_value_sigF576, var_core_value_sigD0F3.preserveDirectChildren)) {
        var_core_value_sig05B7.push(var_core_value_sigC621), var_core_value_sig73B7.push(var_core_value_sig431B1);
        return;
      }
      (xc(var_core_value_sig0A15) && !var_core_value_sig86D7.element["laneId"] ? gi(var_core_value_sig0107, var_core_value_sig431B1) : wc(var_core_value_sig0A15, var_core_value_sig1555, var_core_value_sig0107, var_core_value_sig431B1)) ? var_core_value_sig05B7.push(var_core_value_sigC621) : var_core_value_sig19F01.push(var_core_value_sigC621);
    }
  }), (var_core_value_sigD0F3.candidateElementIds ?? []).forEach(var_core_value_sig5C7C => {
    if (var_core_value_sig5C7C === var_core_value_sigD0F3.containerId || var_core_value_sig4DEF.includes(var_core_value_sig5C7C)) return;
    if (!var_core_value_sig7113) {
      var_core_value_sig0804.push(var_core_value_sig5C7C);
      return;
    }
    let var_core_value_sig87E2 = var_core_value_sigD0F3.elementData[var_core_value_sig5C7C];
    if (_c(var_core_value_sig87E2, var_core_value_sigD0F3.elementData, undefined, var_core_value_sig0A15.containerData["capturePolicy"].allowCaptureLockedObjects === true)) {
      var_core_value_sig0804.push(var_core_value_sig5C7C);
      return;
    }
    if (vc(var_core_value_sig0A15, var_core_value_sig87E2, var_core_value_sigD0F3.elementData, var_core_value_sig5C7C, var_core_value_sigD0F3.containerId, var_core_value_sig3087)) {
      var_core_value_sig0804.push(var_core_value_sig5C7C);
      return;
    }
    let var_core_value_sig2E04 = U(var_core_value_sigD0F3.elementData, var_core_value_sig5C7C);
    if (!var_core_value_sig2E04) {
      var_core_value_sig0804.push(var_core_value_sig5C7C);
      return;
    }
    if (Cc(var_core_value_sig0A15, var_core_value_sig1555, var_core_value_sigF8D0, var_core_value_sig2E04)) {
      var_core_value_sigA2D5(var_core_value_sig5C7C);
      return;
    }
    let var_core_value_sig2EDD = var_core_value_sig0A15.containerData["kind"] !== "swimlane" || !var_core_value_sig0A15.containerData["swimlane"];
    if (var_core_value_sigAE4D.has(var_core_value_sig5C7C) && var_core_value_sig2EDD && var_core_value_sig0A15.containerData["behavior"].autoResize && gi(var_core_value_sigC06C.outerBounds, var_core_value_sig2E04)) {
      let var_core_value_sig9FBA = yi([var_core_value_sigF8D0, var_core_value_sig2E04]);
      if (var_core_value_sig9FBA) {
        var_core_value_sigA2D5(var_core_value_sig5C7C), var_core_value_sig73B7.push(var_core_value_sig9FBA);
        return;
      }
    }
    let var_core_value_sig27D2 = var_core_value_sigAE4D.has(var_core_value_sig5C7C) || var_core_value_sig2E04.width > var_core_value_sigF8D0.width || var_core_value_sig2E04.height > var_core_value_sigF8D0.height;
    if (var_core_value_sig0A15.containerData["behavior"].autoResize && Tc(var_core_value_sig0A15, var_core_value_sig1555, var_core_value_sigF8D0, var_core_value_sig2E04) && var_core_value_sig27D2) {
      let var_core_value_sigFE01 = yi([var_core_value_sigF8D0, var_core_value_sig2E04]);
      if (var_core_value_sigFE01) {
        var_core_value_sigA2D5(var_core_value_sig5C7C), var_core_value_sig73B7.push(var_core_value_sigFE01);
        return;
      }
    }
    var_core_value_sig0804.push(var_core_value_sig5C7C);
  });
  let var_core_value_sig7B4C = yi(var_core_value_sig73B7),
    var_core_value_sig9D16 = var_core_value_sig7B4C ? Ec(var_core_value_sig0A15, var_core_value_sig1555, var_core_value_sig7B4C) : undefined,
    var_core_value_sig540B = bc(var_core_value_sig9D16, var_core_value_sig1555, var_core_value_sigD0F3.preserveDirectChildren, var_core_value_sig0A15.containerData["behavior"].autoResize);
  return {
    activeContainerId: var_core_value_sigD0F3.containerId,
    previewOuterBounds: var_core_value_sig1555,
    previewContentBounds: var_core_value_sigF8D0,
    retainedChildIds: var_core_value_sig05B7,
    expelChildIds: var_core_value_sig19F01,
    captureChildIds: var_core_value_sigF035,
    forcedCaptureChildIds: var_core_value_sig417D,
    blockedChildIds: var_core_value_sig0804,
    ...(var_core_value_sig540B ? {
      expandedOuterBounds: var_core_value_sig9D16
    } : {})
  };
}
function Oc(var_core_value_sig70CA) {
  if (var_core_value_sig70CA.activeContainerIds["length"] === 0) return null;
  let var_core_value_sig19C7 = new Set(var_core_value_sig70CA.activeContainerIds),
    var_core_value_sigEC6A = new Set(var_core_value_sig70CA.lockedCurrentParentIds ?? []);
  if (var_core_value_sig70CA.activeContainerIds["some"](var_core_value_sig355D => {
    var var_core_value_sig8B21, var_core_value_sigEB36;
    let var_core_value_sig5C27 = (var_core_value_sig8B21 = var_core_value_sig70CA.elementData[var_core_value_sig355D]) == null ? undefined : var_core_value_sig8B21.element["parentId"],
      var_core_value_sigD494 = var_core_value_sig5C27 ? (var_core_value_sigEB36 = var_core_value_sig70CA.elementData[var_core_value_sig5C27]) == null ? undefined : var_core_value_sigEB36.element : undefined;
    return !!var_core_value_sig5C27 && (var_core_value_sigEC6A.has(var_core_value_sig5C27) || (var_core_value_sigD494 == null ? undefined : var_core_value_sigD494.type) === M.Container && var_core_value_sigD494.containerData["behavior"].membershipLocked);
  })) return null;
  let var_core_value_sig3DA8 = var_core_value_sig70CA.elementOrder ?? Object.keys(var_core_value_sig70CA.elementData),
    var_core_value_sig2F57 = new Map(var_core_value_sig3DA8.map((var_core_value_sigBF6D, var_core_value_sigD051) => [var_core_value_sigBF6D, var_core_value_sigD051])),
    var_core_value_sig115C = var_core_value_sig70CA.candidateContainerIds ? new Set(var_core_value_sig70CA.candidateContainerIds) : null,
    var_core_value_sig79B6 = Object.values(var_core_value_sig70CA.elementData).filter(var_core_value_sig16D9 => var_core_value_sig16D9.element["type"] === M.Container && !var_core_value_sig19C7.has(var_core_value_sig16D9.elementId)).filter(var_core_value_sigF378 => !_c(var_core_value_sigF378, var_core_value_sig70CA.elementData)).filter(var_core_value_sig5F6C => !var_core_value_sig115C || var_core_value_sig115C.has(var_core_value_sig5F6C.elementId)).map(var_core_value_sig7E85 => ({
      item: var_core_value_sig7E85,
      preview: Dc({
        containerId: var_core_value_sig7E85.elementId,
        elementData: var_core_value_sig70CA.elementData,
        candidateElementIds: var_core_value_sig70CA.activeContainerIds,
        allowCaptureFromParentedCandidateIds: var_core_value_sig70CA.activeContainerIds
      })
    })).filter(({
      preview: var_core_value_sigF204
    }) => var_core_value_sigF204.captureChildIds["some"](var_core_value_sigA2CE => var_core_value_sig19C7.has(var_core_value_sigA2CE))).sort((var_core_value_sig7A15, var_core_value_sigEEA6) => V(var_core_value_sig70CA.elementData, var_core_value_sigEEA6.item["elementId"]).length - V(var_core_value_sig70CA.elementData, var_core_value_sig7A15.item["elementId"]).length || (var_core_value_sig2F57.get(var_core_value_sigEEA6.item["elementId"]) ?? -1) - (var_core_value_sig2F57.get(var_core_value_sig7A15.item["elementId"]) ?? -1))[0];
  return var_core_value_sig79B6 ? {
    containerId: var_core_value_sig79B6.item["elementId"],
    expandedOuterBounds: var_core_value_sig79B6.preview["expandedOuterBounds"]
  } : null;
}
function kc(var_core_value_sigA36D, var_core_value_sig1DE9) {
  return {
    ...var_core_value_sigA36D,
    transform: {
      ...var_core_value_sigA36D.transform,
      left: var_core_value_sig1DE9.left,
      top: var_core_value_sig1DE9.top,
      width: var_core_value_sig1DE9.width,
      height: var_core_value_sig1DE9.height,
      rotation: var_core_value_sig1DE9.angle,
      flipX: var_core_value_sig1DE9.flipX,
      flipY: var_core_value_sig1DE9.flipY
    }
  };
}
function Ac(var_core_value_sig1DE4, var_core_value_sig67091) {
  return var_core_value_sig67091.some(var_core_value_sigEAE1 => {
    var var_core_value_sigC69F;
    let var_core_value_sig0442 = var_core_value_sigEAE1.params;
    return !!var_core_value_sig0442.elementId && ((var_core_value_sigC69F = var_core_value_sig1DE4[var_core_value_sig0442.elementId]) == null ? undefined : var_core_value_sigC69F.element["locked"]) === true;
  });
}
function jc(var_core_value_sigA9B7, var_core_value_sigD810, var_core_value_sig0CBE) {
  var var_core_value_sig8085, var_core_value_sigC59C;
  if (!var_core_value_sigD810) return;
  let var_core_value_sigB778 = (var_core_value_sig8085 = var_core_value_sigA9B7[var_core_value_sigD810]) == null ? undefined : var_core_value_sig8085.element,
    var_core_value_sig54E6 = U(var_core_value_sigA9B7, var_core_value_sigD810);
  if (!(!var_core_value_sigB778 || var_core_value_sigB778.type !== M.Container || var_core_value_sigB778.containerData["kind"] !== "swimlane" || !var_core_value_sig54E6)) return (var_core_value_sigC59C = Ui(var_core_value_sigB778, var_core_value_sig54E6, var_core_value_sig0CBE)) == null ? undefined : var_core_value_sigC59C.lane["id"];
}
function Mc(var_core_value_sigE9DB, var_core_value_sigE26F1) {
  let var_core_value_sig8C20 = var_core_value_sigE9DB.containerData["titleVisible"] === false ? 0 : var_core_value_sigE9DB.containerData["headerSize"] ?? $i.headerSize;
  if (var_core_value_sigE9DB.containerData["kind"] === "swimlane" && var_core_value_sigE9DB.containerData["swimlane"]) {
    let var_core_value_sig697A = Math.max(0, var_core_value_sigE9DB.containerData["swimlane"].headerSize ?? 0),
      var_core_value_sigDB65 = var_core_value_sigE9DB.containerData["swimlane"].orientation === "horizontal";
    return {
      left: var_core_value_sigE26F1.left - (var_core_value_sigDB65 ? var_core_value_sig697A : 0),
      top: var_core_value_sigE26F1.top - var_core_value_sig8C20 - (var_core_value_sigDB65 ? 0 : var_core_value_sig697A),
      width: var_core_value_sigE26F1.width + (var_core_value_sigDB65 ? var_core_value_sig697A : 0),
      height: var_core_value_sigE26F1.height + var_core_value_sig8C20 + (var_core_value_sigDB65 ? 0 : var_core_value_sig697A),
      angle: G(var_core_value_sigE9DB.transform).angle,
      flipX: var_core_value_sigE9DB.transform["flipX"],
      flipY: var_core_value_sigE9DB.transform["flipY"]
    };
  }
  let var_core_value_sigBB73 = var_core_value_sigE9DB.containerData["padding"] ?? $i.padding;
  return {
    left: var_core_value_sigE26F1.left - var_core_value_sigBB73.left,
    top: var_core_value_sigE26F1.top - var_core_value_sig8C20 - var_core_value_sigBB73.top,
    width: var_core_value_sigE26F1.width + var_core_value_sigBB73.left + var_core_value_sigBB73.right,
    height: var_core_value_sigE26F1.height + var_core_value_sig8C20 + var_core_value_sigBB73.top + var_core_value_sigBB73.bottom,
    angle: G(var_core_value_sigE9DB.transform).angle,
    flipX: var_core_value_sigE9DB.transform["flipX"],
    flipY: var_core_value_sigE9DB.transform["flipY"]
  };
}
const Nc = {
  id: "board.operation.fit-container-to-content",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig2E4E, var_core_value_sig5E36) => {
    if (!(var_core_value_sig5E36 != null && var_core_value_sig5E36.containerId)) return false;
    let {
        unitId: var_core_value_sig9385,
        subUnitId: var_core_value_sigE5B5,
        containerId: var_core_value_sig8483
      } = var_core_value_sig5E36,
      var_core_value_sig7DCC = var_core_value_sig2E4E.get(L),
      var_core_value_sig5C37 = var_core_value_sig7DCC.getElementData(var_core_value_sig9385, var_core_value_sigE5B5),
      var_core_value_sigB657 = Pc({
        unitId: var_core_value_sig9385,
        subUnitId: var_core_value_sigE5B5,
        containerId: var_core_value_sig8483,
        elementData: var_core_value_sig5C37,
        elementOrder: var_core_value_sig7DCC.getElementOrder(var_core_value_sig9385, var_core_value_sigE5B5)
      });
    if (!var_core_value_sigB657 || Ac(var_core_value_sig5C37, var_core_value_sigB657.redoMutations) || !Mo(var_core_value_sig5C37, var_core_value_sigB657.redoMutations)) return false;
    let var_core_value_sig6620 = var_core_value_sig2E4E.get(var_core_value_sig88BA);
    return var_core_value_sig77FC(var_core_value_sigB657.redoMutations, var_core_value_sig6620).result ? (var_core_value_sig2E4E.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig9385,
      redoMutations: var_core_value_sigB657.redoMutations,
      undoMutations: var_core_value_sigB657.undoMutations
    }), true) : false;
  }
};
function Pc(var_core_value_sigFA86) {
  let {
      unitId: var_core_value_sigC7E11,
      subUnitId: var_core_value_sigEDC3,
      containerId: var_core_value_sigA965,
      elementData: var_core_value_sigE2431,
      elementOrder: var_core_value_sig2AA5
    } = var_core_value_sigFA86,
    var_core_value_sig65F4 = var_core_value_sigE2431[var_core_value_sigA965];
  if (!var_core_value_sig65F4 || var_core_value_sig65F4.element["type"] !== M.Container || var_core_value_sig65F4.element["locked"]) return null;
  let var_core_value_sig74FC = X(var_core_value_sig65F4.element),
    var_core_value_sig107B = var_core_value_sig2AA5.filter(var_core_value_sig045E => {
      var var_core_value_sig4524;
      return ((var_core_value_sig4524 = var_core_value_sigE2431[var_core_value_sig045E]) == null ? undefined : var_core_value_sig4524.element["parentId"]) === var_core_value_sigA965;
    }),
    var_core_value_sig9C8C = var_core_value_sig107B.filter(var_core_value_sig64D5 => {
      var var_core_value_sig9678;
      return ((var_core_value_sig9678 = var_core_value_sigE2431[var_core_value_sig64D5]) == null ? undefined : var_core_value_sig9678.element["type"]) !== M.Connector;
    });
  if (var_core_value_sig9C8C.length === 0) return null;
  let var_core_value_sig0141 = var_core_value_sig9C8C.map(var_core_value_sig5E74 => {
    var var_core_value_sig75FC;
    return (var_core_value_sig75FC = H(var_core_value_sigE2431, var_core_value_sig5E74)) == null ? undefined : var_core_value_sig75FC.worldTransform;
  }).filter(var_core_value_sig639A => !!var_core_value_sig639A);
  if (var_core_value_sig0141.length !== var_core_value_sig9C8C.length) return null;
  let var_core_value_sig687E = var_core_value_sig0141.map(var_core_value_sig567C => ({
      left: var_core_value_sig567C.left ?? 0,
      top: var_core_value_sig567C.top ?? 0,
      width: var_core_value_sig567C.width ?? 0,
      height: var_core_value_sig567C.height ?? 0
    })),
    var_core_value_sigCDBE1 = Math.min(...var_core_value_sig687E.map(var_core_value_sig825F => var_core_value_sig825F.left)),
    var_core_value_sig07AB = Math.min(...var_core_value_sig687E.map(var_core_value_sig546D => var_core_value_sig546D.top)),
    var_core_value_sigD6F3 = Math.max(...var_core_value_sig687E.map(q)),
    var_core_value_sig5CA6 = Math.max(...var_core_value_sig687E.map(J)),
    var_core_value_sigFA26 = Mc(var_core_value_sig74FC, {
      left: var_core_value_sigCDBE1,
      top: var_core_value_sig07AB,
      width: var_core_value_sigD6F3 - var_core_value_sigCDBE1,
      height: var_core_value_sig5CA6 - var_core_value_sig07AB
    }),
    var_core_value_sig3D8F = G(W(var_core_value_sigE2431, {
      parentId: var_core_value_sig65F4.element["parentId"],
      worldTransform: Xn(var_core_value_sigFA26)
    })),
    var_core_value_sig9BED = kc({
      ...var_core_value_sig74FC,
      laneId: jc(var_core_value_sigE2431, var_core_value_sig65F4.element["parentId"], {
        left: var_core_value_sigFA26.left,
        top: var_core_value_sigFA26.top,
        width: var_core_value_sigFA26.width,
        height: var_core_value_sigFA26.height
      })
    }, var_core_value_sig3D8F),
    var_core_value_sig5349 = {
      ...var_core_value_sigE2431,
      [var_core_value_sigA965]: {
        ...var_core_value_sig65F4,
        element: var_core_value_sig9BED,
        transform: var_core_value_sig3D8F
      }
    },
    var_core_value_sig8232 = [{
      id: $.id,
      params: {
        unitId: var_core_value_sigC7E11,
        subUnitId: var_core_value_sigEDC3,
        elementId: var_core_value_sigA965,
        element: var_core_value_sig9BED,
        transform: var_core_value_sig3D8F
      }
    }],
    var_core_value_sig38F6 = var_core_value_sig107B.map(var_core_value_sig8078 => {
      var var_core_value_sigDCED;
      return (var_core_value_sigDCED = H(var_core_value_sigE2431, var_core_value_sig8078)) == null ? undefined : var_core_value_sigDCED.worldTransform;
    });
  return var_core_value_sig38F6.some(var_core_value_sig2829 => !var_core_value_sig2829) ? null : (var_core_value_sig107B.forEach((var_core_value_sig6EE2, var_core_value_sig4CCC) => {
    let var_core_value_sig6E47 = var_core_value_sigE2431[var_core_value_sig6EE2],
      var_core_value_sigB64D = G(W(var_core_value_sig5349, {
        parentId: var_core_value_sigA965,
        worldTransform: var_core_value_sig38F6[var_core_value_sig4CCC]
      }));
    var_core_value_sig8232.push({
      id: $.id,
      params: {
        unitId: var_core_value_sigC7E11,
        subUnitId: var_core_value_sigEDC3,
        elementId: var_core_value_sig6EE2,
        element: kc(var_core_value_sig6E47.element, var_core_value_sigB64D),
        transform: var_core_value_sigB64D
      }
    });
  }), {
    redoMutations: var_core_value_sig8232,
    undoMutations: [var_core_value_sigA965, ...var_core_value_sig107B].map(var_core_value_sig2407 => {
      let var_core_value_sigE4D0 = var_core_value_sigE2431[var_core_value_sig2407];
      return {
        id: $.id,
        params: {
          unitId: var_core_value_sigC7E11,
          subUnitId: var_core_value_sigEDC3,
          elementId: var_core_value_sig2407,
          element: X(var_core_value_sig7D37.deepClone(var_core_value_sigE4D0.element)),
          transform: var_core_value_sigE4D0.transform ? {
            ...var_core_value_sigE4D0.transform
          } : var_core_value_sigE4D0.transform
        }
      };
    })
  });
}
function Fc(var_core_value_sigBE37, var_core_value_sigA2BF) {
  let var_core_value_sig32BA = new Set(Object.keys(var_core_value_sigA2BF)),
    var_core_value_sig5CFD = new Set();
  for (let var_core_value_sigD5F1 of var_core_value_sigBE37) {
    if (var_core_value_sig32BA.has(var_core_value_sigD5F1.id) || var_core_value_sig5CFD.has(var_core_value_sigD5F1.id)) return false;
    var_core_value_sig5CFD.add(var_core_value_sigD5F1.id);
  }
  let var_core_value_sig3EB3 = new Map(var_core_value_sigBE37.map(var_core_value_sigBC19 => [var_core_value_sigBC19.id, var_core_value_sigBC19])),
    var_core_value_sig5C7C1 = var_core_value_sig4F3C => {
      var var_core_value_sig8D44, var_core_value_sig1660;
      return ((var_core_value_sig8D44 = var_core_value_sig3EB3.get(var_core_value_sig4F3C)) == null ? undefined : var_core_value_sig8D44.parentId) ?? ((var_core_value_sig1660 = var_core_value_sigA2BF[var_core_value_sig4F3C]) == null ? undefined : var_core_value_sig1660.element["parentId"]);
    },
    var_core_value_sig89EE = var_core_value_sigEE7B => {
      let var_core_value_sig44DF = new Set([var_core_value_sigEE7B.id]),
        var_core_value_sig7E48 = var_core_value_sigEE7B.parentId;
      for (; var_core_value_sig7E48;) {
        if (var_core_value_sig44DF.has(var_core_value_sig7E48)) return true;
        var_core_value_sig44DF.add(var_core_value_sig7E48), var_core_value_sig7E48 = var_core_value_sig5C7C1(var_core_value_sig7E48);
      }
      return false;
    };
  return var_core_value_sigBE37.every(var_core_value_sig7B9E => {
    var var_core_value_sig5C3B;
    if (!var_core_value_sig7B9E.parentId) return true;
    if (var_core_value_sig89EE(var_core_value_sig7B9E)) return false;
    let var_core_value_sig4002 = var_core_value_sig3EB3.get(var_core_value_sig7B9E.parentId) ?? ((var_core_value_sig5C3B = var_core_value_sigA2BF[var_core_value_sig7B9E.parentId]) == null ? undefined : var_core_value_sig5C3B.element);
    if (!var_core_value_sig4002 || var_core_value_sig4002.type !== M.Container) return false;
    let var_core_value_sig4153 = var_core_value_sig4002.containerData["behavior"],
      var_core_value_sig2825 = !var_core_value_sig3EB3.has(var_core_value_sig7B9E.parentId),
      var_core_value_sig5FD0 = var_core_value_sig2825 ? var_core_value_sigA2BF[var_core_value_sig7B9E.parentId] : undefined;
    return var_core_value_sig2825 && ((var_core_value_sig5FD0 == null ? undefined : var_core_value_sig5FD0.hidden) === true || var_core_value_sig4002.visible === false || var_core_value_sig4002.locked === true || var_core_value_sig4002.selectable === false || var_core_value_sig4153.membershipLocked) || !var_core_value_sig4153.acceptsChildren ? false : var_core_value_sig7B9E.type !== M.Container || var_core_value_sig4153.acceptsContainer && var_core_value_sig4153.allowNested;
  });
}
function Ic(var_core_value_sigCE7B, var_core_value_sigBFA9, var_core_value_sig6DF71) {
  if (!var_core_value_sigCE7B) return true;
  let var_core_value_sig00CB1 = var_core_value_sig6DF71[var_core_value_sigCE7B],
    var_core_value_sig6F31 = var_core_value_sigBFA9.find(var_core_value_sigA7E3 => var_core_value_sigA7E3.id === var_core_value_sigCE7B) ?? (var_core_value_sig00CB1 == null ? undefined : var_core_value_sig00CB1.element);
  return (var_core_value_sig6F31 == null ? undefined : var_core_value_sig6F31.type) === M.Container && (var_core_value_sig00CB1 == null ? undefined : var_core_value_sig00CB1.hidden) !== true && var_core_value_sig6F31.visible !== false && var_core_value_sig6F31.locked !== true && var_core_value_sig6F31.selectable !== false;
}
function Lc(var_core_value_sigFBED) {
  return var_core_value_sigFBED.map(var_core_value_sigA784 => {
    let var_core_value_sig4406 = X(var_core_value_sigA784);
    return var_core_value_sig4406.type !== M.Container || !var_core_value_sig4406.containerData["behavior"].membershipLocked || so(var_core_value_sig4406) || var_core_value_sig4406.containerData["behavior"].autoResize ? var_core_value_sig4406 : {
      ...var_core_value_sig4406,
      containerData: {
        ...var_core_value_sig4406.containerData,
        behavior: {
          ...var_core_value_sig4406.containerData["behavior"],
          autoResize: true
        }
      }
    };
  });
}
function Rc(var_core_value_sigF447) {
  let var_core_value_sigF37C = new Map(var_core_value_sigF447.map(var_core_value_sig6806 => [var_core_value_sig6806.id, var_core_value_sig6806])),
    var_core_value_sigE2E6 = [],
    var_core_value_sig8FAB = new Set(),
    var_core_value_sig3524 = var_core_value_sigD4AA => {
      if (var_core_value_sig8FAB.has(var_core_value_sigD4AA.id)) return;
      let var_core_value_sigDC41 = var_core_value_sigD4AA.parentId ? var_core_value_sigF37C.get(var_core_value_sigD4AA.parentId) : undefined;
      var_core_value_sigDC41 && var_core_value_sig3524(var_core_value_sigDC41), var_core_value_sig8FAB.add(var_core_value_sigD4AA.id), var_core_value_sigE2E6.push(var_core_value_sigD4AA);
    };
  return var_core_value_sigF447.forEach(var_core_value_sig3524), var_core_value_sigE2E6;
}
function zc(var_core_value_sigEFDB, var_core_value_sigEFD1) {
  var var_core_value_sigD10D;
  if (var_core_value_sigEFD1.laneId !== undefined) return var_core_value_sigEFD1.laneId;
  if (!var_core_value_sigEFD1.parentId) return;
  let var_core_value_sigB8F41 = (var_core_value_sigD10D = var_core_value_sigEFDB[var_core_value_sigEFD1.parentId]) == null ? undefined : var_core_value_sigD10D.element;
  if ((var_core_value_sigB8F41 == null ? undefined : var_core_value_sigB8F41.type) !== M.Container || var_core_value_sigB8F41.containerData["kind"] !== "swimlane") return var_core_value_sigEFD1.laneId;
  let var_core_value_sig79CD = U(var_core_value_sigEFDB, var_core_value_sigEFD1.id),
    var_core_value_sig629F = var_core_value_sig79CD ? tl(var_core_value_sigEFDB, var_core_value_sigEFD1.parentId, var_core_value_sig79CD) : undefined;
  if (var_core_value_sig629F) return var_core_value_sig629F;
}
function Bc(var_core_value_sig7591, var_core_value_sig76A8) {
  return var_core_value_sig76A8.map(var_core_value_sigFB47 => {
    let var_core_value_sig9B3D1 = zc(var_core_value_sig7591, var_core_value_sigFB47);
    return var_core_value_sigFB47.laneId === var_core_value_sig9B3D1 ? var_core_value_sigFB47 : {
      ...var_core_value_sigFB47,
      laneId: var_core_value_sig9B3D1
    };
  });
}
function Vc(var_core_value_sigB33E, var_core_value_sig7290, var_core_value_sig607E) {
  return {
    unitId: var_core_value_sigB33E,
    subUnitId: var_core_value_sig7290,
    elementId: var_core_value_sig607E.id,
    element: var_core_value_sig607E,
    transform: {
      left: var_core_value_sig607E.transform["left"],
      top: var_core_value_sig607E.transform["top"],
      width: var_core_value_sig607E.transform["width"],
      height: var_core_value_sig607E.transform["height"],
      angle: var_core_value_sig607E.transform["rotation"] ?? 0,
      flipX: var_core_value_sig607E.transform["flipX"],
      flipY: var_core_value_sig607E.transform["flipY"]
    }
  };
}
function Hc(var_core_value_sig5B4A, var_core_value_sigEF9A, var_core_value_sigB040) {
  if (var_core_value_sigB040 === undefined || var_core_value_sigB040 < 0 || var_core_value_sigB040 >= var_core_value_sig5B4A.length) {
    var_core_value_sig5B4A.push(var_core_value_sigEF9A);
    return;
  }
  var_core_value_sig5B4A.splice(var_core_value_sigB040, 0, var_core_value_sigEF9A);
}
function Uc(var_core_value_sig1344) {
  let var_core_value_sig01B7 = {
      ...var_core_value_sig1344.elementData
    },
    var_core_value_sig5392 = [...var_core_value_sig1344.elementOrder];
  return var_core_value_sig1344.orderedElements["forEach"]((var_core_value_sigC1CF, var_core_value_sigEE12) => {
    var_core_value_sig01B7[var_core_value_sigC1CF.id] = Vc(var_core_value_sig1344.unitId, var_core_value_sig1344.subUnitId, var_core_value_sigC1CF), Hc(var_core_value_sig5392, var_core_value_sigC1CF.id, var_core_value_sig1344.insertIndex === undefined ? undefined : var_core_value_sig1344.insertIndex + var_core_value_sigEE12);
  }), {
    elementData: var_core_value_sig01B7,
    elementOrder: var_core_value_sig5392
  };
}
function Wc(var_core_value_sig2473, var_core_value_sig4FB1) {
  return {
    ...var_core_value_sig2473,
    transform: {
      ...var_core_value_sig2473.transform,
      left: var_core_value_sig4FB1.left,
      top: var_core_value_sig4FB1.top,
      width: var_core_value_sig4FB1.width,
      height: var_core_value_sig4FB1.height,
      rotation: var_core_value_sig4FB1.angle,
      flipX: var_core_value_sig4FB1.flipX,
      flipY: var_core_value_sig4FB1.flipY
    }
  };
}
function Gc(var_core_value_sig3A0E) {
  return var_core_value_sig3A0E.left === undefined || var_core_value_sig3A0E.top === undefined || var_core_value_sig3A0E.width === undefined || var_core_value_sig3A0E.height === undefined ? null : {
    left: var_core_value_sig3A0E.left,
    top: var_core_value_sig3A0E.top,
    width: var_core_value_sig3A0E.width,
    height: var_core_value_sig3A0E.height
  };
}
function Kc(var_core_value_sig7ED7, var_core_value_sigDF9C) {
  return var_core_value_sig7ED7.left !== var_core_value_sigDF9C.left || var_core_value_sig7ED7.top !== var_core_value_sigDF9C.top || var_core_value_sig7ED7.width !== var_core_value_sigDF9C.width || var_core_value_sig7ED7.height !== var_core_value_sigDF9C.height;
}
function qc(var_core_value_sigCEE6, var_core_value_sig3CB8) {
  return (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.left) !== var_core_value_sig3CB8.left || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.top) !== var_core_value_sig3CB8.top || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.width) !== var_core_value_sig3CB8.width || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.height) !== var_core_value_sig3CB8.height || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.angle) !== var_core_value_sig3CB8.angle || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.flipX) !== var_core_value_sig3CB8.flipX || (var_core_value_sigCEE6 == null ? undefined : var_core_value_sigCEE6.flipY) !== var_core_value_sig3CB8.flipY;
}
function Jc(var_core_value_sig3EF5) {
  let var_core_value_sigD0FA = Math.max(1, var_core_value_sig3EF5.containerIds["length"]);
  for (let var_core_value_sigD70C = 0; var_core_value_sigD70C < var_core_value_sigD0FA; var_core_value_sigD70C++) {
    let var_core_value_sig1975 = false;
    if (var_core_value_sig3EF5.containerIds["forEach"](var_core_value_sig1758 => {
      let var_core_value_sig4805 = var_core_value_sig3EF5.elementData[var_core_value_sig1758],
        var_core_value_sigE67E = var_core_value_sig4805 == null ? undefined : var_core_value_sig4805.element;
      if (!var_core_value_sigE67E || var_core_value_sigE67E.type !== M.Container || !var_core_value_sigE67E.containerData["behavior"].membershipLocked || !var_core_value_sigE67E.containerData["behavior"].autoResize) return;
      let var_core_value_sig2902 = U(var_core_value_sig3EF5.elementData, var_core_value_sig1758);
      if (!var_core_value_sig2902) return;
      let var_core_value_sig9989 = var_core_value_sig3EF5.elementOrder["filter"](var_core_value_sigBC46 => {
          var var_core_value_sig3D7D;
          return ((var_core_value_sig3D7D = var_core_value_sig3EF5.elementData[var_core_value_sigBC46]) == null ? undefined : var_core_value_sig3D7D.element["parentId"]) === var_core_value_sig1758;
        }),
        var_core_value_sig698E = yi([Sc(var_core_value_sigE67E, var_core_value_sig2902), ...var_core_value_sig9989.filter(var_core_value_sig27E5 => {
          var var_core_value_sig8061;
          return ((var_core_value_sig8061 = var_core_value_sig3EF5.elementData[var_core_value_sig27E5]) == null ? undefined : var_core_value_sig8061.element["type"]) !== M.Connector;
        }).map(var_core_value_sig4D4C => U(var_core_value_sig3EF5.elementData, var_core_value_sig4D4C)).filter(var_core_value_sigC9E0 => !!var_core_value_sigC9E0)]);
      if (!var_core_value_sig698E) return;
      let var_core_value_sig2809 = Ec(var_core_value_sigE67E, var_core_value_sig2902, var_core_value_sig698E);
      if (var_core_value_sig2809.left === var_core_value_sig2902.left && var_core_value_sig2809.top === var_core_value_sig2902.top && var_core_value_sig2809.width === var_core_value_sig2902.width && var_core_value_sig2809.height === var_core_value_sig2902.height) return;
      let var_core_value_sig2DAB = new Map(var_core_value_sig9989.map(var_core_value_sig76BA1 => {
          var var_core_value_sigFBFA;
          return [var_core_value_sig76BA1, (var_core_value_sigFBFA = H(var_core_value_sig3EF5.elementData, var_core_value_sig76BA1)) == null ? undefined : var_core_value_sigFBFA.worldTransform];
        })),
        var_core_value_sig877E = G(W(var_core_value_sig3EF5.elementData, {
          parentId: var_core_value_sigE67E.parentId,
          worldTransform: {
            ...var_core_value_sigE67E.transform,
            ...var_core_value_sig2809,
            rotation: 0
          }
        })),
        var_core_value_sig20C8 = Wc(var_core_value_sigE67E, var_core_value_sig877E);
      var_core_value_sig3EF5.elementData[var_core_value_sig1758] = {
        ...var_core_value_sig4805,
        element: var_core_value_sig20C8,
        transform: var_core_value_sig877E
      }, var_core_value_sig3EF5.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig3EF5.unitId,
          subUnitId: var_core_value_sig3EF5.subUnitId,
          elementId: var_core_value_sig1758,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig20C8),
          transform: var_core_value_sig877E,
          ...(var_core_value_sigE67E.locked === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_core_value_sig1975 = true, var_core_value_sig2DAB.forEach((var_core_value_sigF602, var_core_value_sig1BBD) => {
        let var_core_value_sigF704 = var_core_value_sig3EF5.elementData[var_core_value_sig1BBD];
        if (!var_core_value_sigF704 || !var_core_value_sigF602) return;
        let var_core_value_sig2BCF = G(W(var_core_value_sig3EF5.elementData, {
            parentId: var_core_value_sig1758,
            worldTransform: var_core_value_sigF602
          })),
          var_core_value_sig0D69 = Gc(var_core_value_sigF602),
          var_core_value_sig480E = Wc({
            ...var_core_value_sigF704.element,
            laneId: var_core_value_sig0D69 ? tl(var_core_value_sig3EF5.elementData, var_core_value_sig1758, var_core_value_sig0D69) : var_core_value_sigF704.element["laneId"]
          }, var_core_value_sig2BCF);
        var_core_value_sig3EF5.elementData[var_core_value_sig1BBD] = {
          ...var_core_value_sigF704,
          element: var_core_value_sig480E,
          transform: var_core_value_sig2BCF
        }, var_core_value_sig3EF5.redoMutations["push"]({
          id: $.id,
          params: {
            unitId: var_core_value_sig3EF5.unitId,
            subUnitId: var_core_value_sig3EF5.subUnitId,
            elementId: var_core_value_sig1BBD,
            element: var_core_value_sig7D37.deepClone(var_core_value_sig480E),
            transform: var_core_value_sig2BCF,
            ...(var_core_value_sigF704.element["locked"] === true ? {
              allowLockedTarget: true
            } : {})
          }
        });
      });
    }), !var_core_value_sig1975) break;
  }
}
function Yc(var_core_value_sig7701) {
  let var_core_value_sig548B = new Set(var_core_value_sig7701.addedElements["map"](var_core_value_sigF047 => var_core_value_sigF047.id)),
    var_core_value_sig7D371 = new Set();
  var_core_value_sig7701.addedElements["forEach"](var_core_value_sigC2F9 => {
    let var_core_value_sig1F51 = var_core_value_sigC2F9.parentId;
    for (; var_core_value_sig1F51 && !var_core_value_sig548B.has(var_core_value_sig1F51);) {
      let var_core_value_sigE9A7 = var_core_value_sig7701.elementData[var_core_value_sig1F51];
      if (!var_core_value_sigE9A7 || var_core_value_sigE9A7.element["type"] !== M.Container) break;
      var_core_value_sig7D371.add(var_core_value_sig1F51), var_core_value_sig1F51 = var_core_value_sigE9A7.element["parentId"];
    }
  });
  let var_core_value_sig781D = Array.from(var_core_value_sig7D371).sort((var_core_value_sig29F5, var_core_value_sig5A51) => V(var_core_value_sig7701.elementData, var_core_value_sig5A51).length - V(var_core_value_sig7701.elementData, var_core_value_sig29F5).length),
    var_core_value_sig6DD6 = Math.max(1, var_core_value_sig781D.length);
  for (let var_core_value_sigF1D1 = 0; var_core_value_sigF1D1 < var_core_value_sig6DD6; var_core_value_sigF1D1++) {
    let var_core_value_sig6EA1 = false;
    if (var_core_value_sig781D.forEach(var_core_value_sigBECE => {
      let var_core_value_sig1B22 = var_core_value_sig7701.elementData[var_core_value_sigBECE],
        var_core_value_sig7F72 = var_core_value_sig7701.originalElementData[var_core_value_sigBECE],
        var_core_value_sig7B2A = var_core_value_sig1B22 == null ? undefined : var_core_value_sig1B22.element;
      if (!var_core_value_sig7F72 || !var_core_value_sig7B2A || var_core_value_sig7B2A.type !== M.Container || !var_core_value_sig7B2A.containerData["behavior"].autoResize) return;
      let var_core_value_sig06CD = U(var_core_value_sig7701.elementData, var_core_value_sigBECE);
      if (!var_core_value_sig06CD) return;
      let var_core_value_sigA5F1 = var_core_value_sig7701.elementOrder["filter"](var_core_value_sig26DB => {
          var var_core_value_sigF0F9;
          return ((var_core_value_sigF0F9 = var_core_value_sig7701.elementData[var_core_value_sig26DB]) == null ? undefined : var_core_value_sigF0F9.element["parentId"]) === var_core_value_sigBECE;
        }),
        var_core_value_sig97A2 = yi([Sc(var_core_value_sig7B2A, var_core_value_sig06CD), ...var_core_value_sigA5F1.filter(var_core_value_sig1A0F => {
          var var_core_value_sigFBA4;
          return ((var_core_value_sigFBA4 = var_core_value_sig7701.elementData[var_core_value_sig1A0F]) == null ? undefined : var_core_value_sigFBA4.element["type"]) !== M.Connector;
        }).map(var_core_value_sig4383 => U(var_core_value_sig7701.elementData, var_core_value_sig4383)).filter(var_core_value_sig186C => !!var_core_value_sig186C)]);
      if (!var_core_value_sig97A2) return;
      let var_core_value_sig07E9 = Ec(var_core_value_sig7B2A, var_core_value_sig06CD, var_core_value_sig97A2);
      if (!Kc(var_core_value_sig06CD, var_core_value_sig07E9)) return;
      let var_core_value_sig4F59 = new Map(var_core_value_sigA5F1.map(var_core_value_sigD955 => {
          var var_core_value_sig48BD;
          return [var_core_value_sigD955, (var_core_value_sig48BD = H(var_core_value_sig7701.elementData, var_core_value_sigD955)) == null ? undefined : var_core_value_sig48BD.worldTransform];
        })),
        var_core_value_sigF564 = G(W(var_core_value_sig7701.elementData, {
          parentId: var_core_value_sig7B2A.parentId,
          worldTransform: {
            ...var_core_value_sig7B2A.transform,
            ...var_core_value_sig07E9,
            rotation: 0
          }
        })),
        var_core_value_sig8CFA = Wc(var_core_value_sig7B2A, var_core_value_sigF564);
      var_core_value_sig7701.elementData[var_core_value_sigBECE] = {
        ...var_core_value_sig1B22,
        element: var_core_value_sig8CFA,
        transform: var_core_value_sigF564
      }, var_core_value_sig7701.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig7701.unitId,
          subUnitId: var_core_value_sig7701.subUnitId,
          elementId: var_core_value_sigBECE,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig8CFA),
          transform: var_core_value_sigF564
        }
      }), var_core_value_sig7701.undoMutations["unshift"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig7701.unitId,
          subUnitId: var_core_value_sig7701.subUnitId,
          elementId: var_core_value_sigBECE,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig7F72.element),
          transform: var_core_value_sig7D37.deepClone(var_core_value_sig7F72.transform)
        }
      }), var_core_value_sig6EA1 = true, var_core_value_sig4F59.forEach((var_core_value_sig429F, var_core_value_sigF62A) => {
        let var_core_value_sig8178 = var_core_value_sig7701.elementData[var_core_value_sigF62A];
        if (!var_core_value_sig8178 || !var_core_value_sig429F) return;
        let var_core_value_sigE9ED = G(W(var_core_value_sig7701.elementData, {
          parentId: var_core_value_sigBECE,
          worldTransform: var_core_value_sig429F
        }));
        if (!qc(var_core_value_sig8178.transform, var_core_value_sigE9ED)) return;
        let var_core_value_sigB577 = Wc(var_core_value_sig8178.element, var_core_value_sigE9ED);
        var_core_value_sig7701.elementData[var_core_value_sigF62A] = {
          ...var_core_value_sig8178,
          element: var_core_value_sigB577,
          transform: var_core_value_sigE9ED
        }, var_core_value_sig7701.redoMutations["push"]({
          id: $.id,
          params: {
            unitId: var_core_value_sig7701.unitId,
            subUnitId: var_core_value_sig7701.subUnitId,
            elementId: var_core_value_sigF62A,
            element: var_core_value_sig7D37.deepClone(var_core_value_sigB577),
            transform: var_core_value_sigE9ED
          }
        }), var_core_value_sig7701.undoMutations["unshift"]({
          id: $.id,
          params: {
            unitId: var_core_value_sig7701.unitId,
            subUnitId: var_core_value_sig7701.subUnitId,
            elementId: var_core_value_sigF62A,
            element: var_core_value_sig7D37.deepClone(var_core_value_sig8178.element),
            transform: var_core_value_sig7D37.deepClone(var_core_value_sig8178.transform)
          }
        });
      });
    }), !var_core_value_sig6EA1) break;
  }
}
function Xc(var_core_value_sig824C) {
  let var_core_value_sig8C7D = new Set(var_core_value_sig824C.orderedElements["map"](var_core_value_sig370E => var_core_value_sig370E.id)),
    var_core_value_sig46B1 = var_core_value_sig824C.orderedElements["filter"](var_core_value_sigDE14 => var_core_value_sigDE14.type === M.Container).map(var_core_value_sig02CB => var_core_value_sig02CB.id),
    var_core_value_sigC5AE = [];
  var_core_value_sig46B1.forEach(var_core_value_sig6CBB => {
    let var_core_value_sig68DA = var_core_value_sig824C.elementData[var_core_value_sig6CBB];
    if (!var_core_value_sig68DA || var_core_value_sig68DA.element["type"] !== M.Container || var_core_value_sig68DA.element["containerData"].behavior["membershipLocked"] || !var_core_value_sig68DA.element["containerData"].behavior["autoCapture"]) return;
    let var_core_value_sig64D8 = Object.keys(var_core_value_sig824C.elementData).filter(var_core_value_sig029F => !var_core_value_sig8C7D.has(var_core_value_sig029F)),
      var_core_value_sigD755 = U(var_core_value_sig824C.elementData, var_core_value_sig6CBB),
      var_core_value_sigF897 = var_core_value_sigD755 && var_core_value_sig68DA.element["containerData"].kind !== "swimlane" && var_core_value_sig68DA.element["containerData"].behavior["autoResize"] ? var_core_value_sig64D8.filter(var_core_value_sig3767 => {
        var var_core_value_sig670B;
        if ((var_core_value_sig670B = var_core_value_sig824C.elementData[var_core_value_sig3767]) != null && var_core_value_sig670B.element["parentId"]) return false;
        let var_core_value_sig6912 = U(var_core_value_sig824C.elementData, var_core_value_sig3767);
        return !!var_core_value_sig6912 && gi(var_core_value_sigD755, var_core_value_sig6912);
      }) : [],
      var_core_value_sigA578 = Dc({
        containerId: var_core_value_sig6CBB,
        elementData: var_core_value_sig824C.elementData,
        candidateElementIds: var_core_value_sig64D8,
        autosizeCaptureCandidateIds: var_core_value_sigF897
      }),
      var_core_value_sig0260 = mc({
        containerId: var_core_value_sig6CBB,
        elementData: var_core_value_sig824C.elementData,
        preview: var_core_value_sigA578
      });
    if (var_core_value_sig0260.captured["length"] > 0 && var_core_value_sig0260.autosized["length"] > 0) {
      let var_core_value_sigE235 = var_core_value_sig68DA.element,
        var_core_value_sig7664 = var_core_value_sig0260.autosized[0].nextBounds,
        var_core_value_sig2281 = G(W(var_core_value_sig824C.elementData, {
          parentId: var_core_value_sigE235.parentId,
          worldTransform: {
            ...var_core_value_sigE235.transform,
            ...var_core_value_sig7664,
            rotation: 0
          }
        })),
        var_core_value_sig5E86 = Wc(var_core_value_sigE235, var_core_value_sig2281);
      var_core_value_sig824C.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig824C.unitId,
          subUnitId: var_core_value_sig824C.subUnitId,
          elementId: var_core_value_sig6CBB,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig5E86),
          transform: var_core_value_sig2281
        }
      }), var_core_value_sig68DA = {
        ...var_core_value_sig68DA,
        element: var_core_value_sig5E86,
        transform: var_core_value_sig2281
      }, var_core_value_sig824C.elementData[var_core_value_sig6CBB] = var_core_value_sig68DA;
    }
    var_core_value_sig0260.captured["forEach"](({
      elementId: var_core_value_sig6998
    }) => {
      var var_core_value_sigF639;
      let var_core_value_sigEAE5 = var_core_value_sig824C.elementData[var_core_value_sig6998],
        var_core_value_sigE94C = (var_core_value_sigF639 = H(var_core_value_sig824C.elementData, var_core_value_sig6998)) == null ? undefined : var_core_value_sigF639.worldTransform,
        var_core_value_sig6D47 = U(var_core_value_sig824C.elementData, var_core_value_sig6998);
      if (!var_core_value_sigEAE5 || !var_core_value_sigE94C || !var_core_value_sig6D47) return;
      let var_core_value_sigCB821 = G(W(var_core_value_sig824C.elementData, {
          parentId: var_core_value_sig6CBB,
          worldTransform: var_core_value_sigE94C
        })),
        var_core_value_sigCF4E = Wc({
          ...var_core_value_sigEAE5.element,
          parentId: var_core_value_sig6CBB,
          laneId: tl(var_core_value_sig824C.elementData, var_core_value_sig6CBB, var_core_value_sig6D47)
        }, var_core_value_sigCB821);
      var_core_value_sig824C.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: var_core_value_sig824C.unitId,
          subUnitId: var_core_value_sig824C.subUnitId,
          elementId: var_core_value_sig6998,
          element: var_core_value_sig7D37.deepClone(var_core_value_sigCF4E),
          transform: var_core_value_sigCB821,
          ...(var_core_value_sigEAE5.element["locked"] === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_core_value_sigC5AE.push({
        id: $.id,
        params: {
          unitId: var_core_value_sig824C.unitId,
          subUnitId: var_core_value_sig824C.subUnitId,
          elementId: var_core_value_sig6998,
          element: var_core_value_sig7D37.deepClone(var_core_value_sigEAE5.element),
          transform: var_core_value_sigEAE5.transform ? {
            ...var_core_value_sigEAE5.transform
          } : var_core_value_sigEAE5.transform,
          ...(var_core_value_sigEAE5.element["locked"] === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_core_value_sig824C.elementData[var_core_value_sig6998] = {
        ...var_core_value_sigEAE5,
        element: var_core_value_sigCF4E,
        transform: var_core_value_sigCB821
      };
    });
  }), var_core_value_sigC5AE.length > 0 && var_core_value_sig824C.undoMutations["unshift"](...var_core_value_sigC5AE), Object.values(var_core_value_sig824C.elementData).forEach(var_core_value_sig034D => {
    var var_core_value_sig89EC;
    if (!Q(var_core_value_sig034D)) return;
    let var_core_value_sig9975 = oo(var_core_value_sig824C.elementData, var_core_value_sig034D.element);
    if (var_core_value_sig034D.element["parentId"] === var_core_value_sig9975.parentId && var_core_value_sig034D.element["laneId"] === var_core_value_sig9975.laneId) return;
    let var_core_value_sigD6D9 = (var_core_value_sig89EC = H(var_core_value_sig824C.elementData, var_core_value_sig034D.elementId)) == null ? undefined : var_core_value_sig89EC.worldTransform;
    if (!var_core_value_sigD6D9) return;
    let var_core_value_sig2637 = G(W(var_core_value_sig824C.elementData, {
        parentId: var_core_value_sig9975.parentId,
        worldTransform: var_core_value_sigD6D9
      })),
      var_core_value_sigAF1D = Wc({
        ...var_core_value_sig034D.element,
        parentId: var_core_value_sig9975.parentId,
        laneId: var_core_value_sig9975.laneId
      }, var_core_value_sig2637);
    var_core_value_sig824C.redoMutations["push"]({
      id: $.id,
      params: {
        unitId: var_core_value_sig824C.unitId,
        subUnitId: var_core_value_sig824C.subUnitId,
        elementId: var_core_value_sig034D.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sigAF1D),
        transform: var_core_value_sig2637
      }
    }), var_core_value_sig824C.undoMutations["unshift"]({
      id: $.id,
      params: {
        unitId: var_core_value_sig824C.unitId,
        subUnitId: var_core_value_sig824C.subUnitId,
        elementId: var_core_value_sig034D.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sig034D.element),
        transform: var_core_value_sig034D.transform ? {
          ...var_core_value_sig034D.transform
        } : var_core_value_sig034D.transform
      }
    }), var_core_value_sig824C.elementData[var_core_value_sig034D.elementId] = {
      ...var_core_value_sig034D,
      element: var_core_value_sigAF1D,
      transform: var_core_value_sig2637
    };
  });
}
function Zc(var_core_value_sigA2DD, var_core_value_sigB95A) {
  var var_core_value_sig7092;
  let var_core_value_sig537D = (var_core_value_sig7092 = var_core_value_sigA2DD[var_core_value_sigB95A]) == null ? undefined : var_core_value_sig7092.element["parentId"],
    var_core_value_sig300A = new Set([var_core_value_sigB95A]);
  for (; var_core_value_sig537D;) {
    if (var_core_value_sig300A.has(var_core_value_sig537D)) return false;
    let var_core_value_sig6CAD = var_core_value_sigA2DD[var_core_value_sig537D];
    if (!var_core_value_sig6CAD) return false;
    if (var_core_value_sig6CAD.hidden === true || var_core_value_sig6CAD.element["visible"] === false) return true;
    var_core_value_sig300A.add(var_core_value_sig537D), var_core_value_sig537D = var_core_value_sig6CAD.element["parentId"];
  }
  return false;
}
function Qc(var_core_value_sig014D, var_core_value_sig2768) {
  var var_core_value_sigA179;
  let var_core_value_sig93D0 = (var_core_value_sigA179 = var_core_value_sig014D[var_core_value_sig2768]) == null ? undefined : var_core_value_sigA179.element["parentId"],
    var_core_value_sig68061 = new Set([var_core_value_sig2768]);
  for (; var_core_value_sig93D0;) {
    if (var_core_value_sig68061.has(var_core_value_sig93D0)) return false;
    let var_core_value_sig8CF5 = var_core_value_sig014D[var_core_value_sig93D0];
    if (!var_core_value_sig8CF5) return false;
    if (var_core_value_sig8CF5.element["type"] === M.Container && var_core_value_sig8CF5.element["containerData"].behavior["membershipLocked"]) return true;
    var_core_value_sig68061.add(var_core_value_sig93D0), var_core_value_sig93D0 = var_core_value_sig8CF5.element["parentId"];
  }
  return false;
}
function $c(var_core_value_sig6D2F, var_core_value_sig7367, var_core_value_sigE7CE) {
  var var_core_value_sigA430, var_core_value_sigA07B;
  let var_core_value_sigE9BA = (var_core_value_sigA430 = var_core_value_sig6D2F[var_core_value_sig7367]) == null ? undefined : var_core_value_sigA430.element,
    var_core_value_sig6083 = (var_core_value_sigA07B = var_core_value_sig6D2F[var_core_value_sigE7CE]) == null ? undefined : var_core_value_sigA07B.element["parentId"];
  return !var_core_value_sig6083 || var_core_value_sig6083 === var_core_value_sig7367 || !Vn(var_core_value_sig6D2F[var_core_value_sig6083]) || (var_core_value_sigE9BA == null ? undefined : var_core_value_sigE9BA.type) !== M.Container ? true : V(var_core_value_sig6D2F, var_core_value_sig7367).includes(var_core_value_sig6083) ? var_core_value_sigE9BA.containerData["capturePolicy"].allowCaptureFromAncestorContainer === true : var_core_value_sigE9BA.containerData["capturePolicy"].allowCaptureFromSiblingContainer;
}
function el(var_core_value_sig28DE, var_core_value_sigE1B1, var_core_value_sig5E8D) {
  var var_core_value_sig7694, var_core_value_sigB4EC;
  let var_core_value_sig39E4 = (var_core_value_sig7694 = var_core_value_sig28DE[var_core_value_sigE1B1]) == null ? undefined : var_core_value_sig7694.element,
    var_core_value_sig1199 = (var_core_value_sigB4EC = var_core_value_sig28DE[var_core_value_sig5E8D]) == null ? undefined : var_core_value_sigB4EC.element;
  return (var_core_value_sig39E4 == null ? undefined : var_core_value_sig39E4.type) === M.Container ? $c(var_core_value_sig28DE, var_core_value_sigE1B1, var_core_value_sig5E8D) ? (var_core_value_sig1199 == null ? undefined : var_core_value_sig1199.type) !== M.Container || var_core_value_sig39E4.containerData["behavior"].acceptsContainer && var_core_value_sig39E4.containerData["behavior"].allowNested && var_core_value_sig39E4.containerData["capturePolicy"].allowCaptureContainer && !Wn(var_core_value_sig28DE, var_core_value_sig5E8D, var_core_value_sigE1B1) : false : true;
}
function tl(var_core_value_sigC2D2, var_core_value_sig976B, var_core_value_sig7EC2) {
  var var_core_value_sig3D7B, var_core_value_sig5D5E;
  let var_core_value_sigAF62 = (var_core_value_sig3D7B = var_core_value_sigC2D2[var_core_value_sig976B]) == null ? undefined : var_core_value_sig3D7B.element,
    var_core_value_sigA394 = U(var_core_value_sigC2D2, var_core_value_sig976B);
  if (!(!var_core_value_sigAF62 || var_core_value_sigAF62.type !== M.Container || var_core_value_sigAF62.containerData["kind"] !== "swimlane" || !var_core_value_sigA394)) return (var_core_value_sig5D5E = Ui(var_core_value_sigAF62, var_core_value_sigA394, var_core_value_sig7EC2)) == null ? undefined : var_core_value_sig5D5E.lane["id"];
}
function nl(var_core_value_sig94AF, var_core_value_sigFEB4, var_core_value_sigFA83, var_core_value_sigA3B2) {
  return var_core_value_sig94AF.containerData["kind"] === "swimlane" && var_core_value_sig94AF.containerData["swimlane"] ? Ui(var_core_value_sig94AF, var_core_value_sigFEB4, var_core_value_sigA3B2) ? true : var_core_value_sig94AF.containerData["behavior"].autoResize && Ii(var_core_value_sig94AF, var_core_value_sigFEB4).some(({
    contentBounds: var_core_value_sigC92D
  }) => vi(var_core_value_sigC92D, var_core_value_sigA3B2) && (var_core_value_sigA3B2.width > var_core_value_sigC92D.width || var_core_value_sigA3B2.height > var_core_value_sigC92D.height)) : gi(var_core_value_sigFA83, var_core_value_sigA3B2) ? true : var_core_value_sig94AF.containerData["behavior"].autoResize && vi(var_core_value_sigFA83, var_core_value_sigA3B2) && (var_core_value_sigA3B2.width > var_core_value_sigFA83.width || var_core_value_sigA3B2.height > var_core_value_sigFA83.height);
}
function rl(var_core_value_sig63A2) {
  let var_core_value_sig1F1F = new Set(var_core_value_sig63A2.orderedElements["map"](var_core_value_sigEA3D => var_core_value_sigEA3D.id));
  return var_core_value_sig63A2.orderedElements["some"](var_core_value_sig2841 => {
    if (var_core_value_sig2841.type !== M.Container || var_core_value_sig2841.containerData["behavior"].membershipLocked || !var_core_value_sig2841.containerData["behavior"].autoCapture || !var_core_value_sig2841.containerData["behavior"].acceptsChildren || !var_core_value_sig2841.containerData["capturePolicy"].enabled || var_core_value_sig2841.visible === false || var_core_value_sig2841.locked !== true && var_core_value_sig2841.selectable !== false) return false;
    let var_core_value_sig9FE1 = U(var_core_value_sig63A2.elementData, var_core_value_sig2841.id);
    if (!var_core_value_sig9FE1) return false;
    let var_core_value_sig9DAA = Sc(var_core_value_sig2841, var_core_value_sig9FE1);
    return Object.keys(var_core_value_sig63A2.elementData).filter(var_core_value_sigDDD7 => !var_core_value_sig1F1F.has(var_core_value_sigDDD7)).some(var_core_value_sigB2CE => {
      let var_core_value_sig443C = var_core_value_sig63A2.elementData[var_core_value_sigB2CE],
        var_core_value_sig39B1 = U(var_core_value_sig63A2.elementData, var_core_value_sigB2CE);
      return !!var_core_value_sig39B1 && (var_core_value_sig443C == null ? undefined : var_core_value_sig443C.element["visible"]) !== false && (var_core_value_sig443C == null ? undefined : var_core_value_sig443C.hidden) !== true && (var_core_value_sig443C == null ? undefined : var_core_value_sig443C.element["locked"]) !== true && (var_core_value_sig443C == null ? undefined : var_core_value_sig443C.element["selectable"]) !== false && (var_core_value_sig443C == null ? undefined : var_core_value_sig443C.element["type"]) !== M.Connector && ((var_core_value_sig443C == null ? undefined : var_core_value_sig443C.element["type"]) !== M.Container || !var_core_value_sig443C.element["containerData"].behavior["membershipLocked"]) && !Zc(var_core_value_sig63A2.elementData, var_core_value_sigB2CE) && !Qc(var_core_value_sig63A2.elementData, var_core_value_sigB2CE) && el(var_core_value_sig63A2.elementData, var_core_value_sig2841.id, var_core_value_sigB2CE) && nl(var_core_value_sig2841, var_core_value_sig9FE1, var_core_value_sig9DAA, var_core_value_sig39B1);
    });
  });
}
function il(var_core_value_sig32EC, var_core_value_sig37FF) {
  return var_core_value_sig37FF.some(var_core_value_sig1F8A => {
    var var_core_value_sigEBB4;
    if (var_core_value_sig1F8A.id !== $.id) return false;
    let var_core_value_sig2B74 = var_core_value_sig1F8A.params;
    return !!var_core_value_sig2B74.elementId && var_core_value_sig2B74.allowLockedTarget !== true && ((var_core_value_sigEBB4 = var_core_value_sig32EC[var_core_value_sig2B74.elementId]) == null ? undefined : var_core_value_sigEBB4.element["locked"]) === true;
  });
}
const al = {
  id: "board.operation.add-elements",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sigF340, var_core_value_sig6001) => {
    if (!var_core_value_sig6001) return false;
    let {
        unitId: var_core_value_sig27FF,
        subUnitId: var_core_value_sigAF69
      } = var_core_value_sig6001,
      var_core_value_sig2FA9 = var_core_value_sigF340.get(L),
      var_core_value_sigE580 = var_core_value_sig2FA9.getElementData(var_core_value_sig27FF, var_core_value_sigAF69),
      var_core_value_sig6B3D = var_core_value_sig2FA9.getElementOrder(var_core_value_sig27FF, var_core_value_sigAF69),
      var_core_value_sig6642 = ol({
        ...var_core_value_sig6001,
        elementData: var_core_value_sigE580,
        elementOrder: var_core_value_sig6B3D
      });
    if (!var_core_value_sig6642) return false;
    let var_core_value_sig93C3 = var_core_value_sigF340.get(var_core_value_sig88BA);
    return var_core_value_sig77FC(var_core_value_sig6642.redoMutations, var_core_value_sig93C3).result ? (var_core_value_sigF340.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig27FF,
      redoMutations: var_core_value_sig6642.redoMutations,
      undoMutations: var_core_value_sig6642.undoMutations
    }), true) : false;
  }
};
function ol(var_core_value_sigB034) {
  if (var_core_value_sigB034.elements["length"] === 0) return null;
  let {
      unitId: var_core_value_sig0F42,
      subUnitId: var_core_value_sig147A,
      insertIndex: var_core_value_sig6C47,
      fitContainerId: var_core_value_sig8090,
      elementData: var_core_value_sigFBF01,
      elementOrder: var_core_value_sigE8F0
    } = var_core_value_sigB034,
    var_core_value_sig7A47 = Lc(var_core_value_sigB034.elements);
  if (!Fc(var_core_value_sig7A47, var_core_value_sigFBF01) || !Ic(var_core_value_sig8090, var_core_value_sig7A47, var_core_value_sigFBF01)) return null;
  let var_core_value_sigE6A1 = Rc(bs(var_core_value_sig7A47, Object.values(var_core_value_sigFBF01).map(var_core_value_sig0483 => var_core_value_sig0483.element))),
    var_core_value_sig35B7 = Bc(Uc({
      unitId: var_core_value_sig0F42,
      subUnitId: var_core_value_sig147A,
      elementData: var_core_value_sigFBF01,
      elementOrder: var_core_value_sigE8F0,
      orderedElements: var_core_value_sigE6A1,
      insertIndex: var_core_value_sig6C47
    }).elementData, var_core_value_sigE6A1),
    var_core_value_sig9D64 = new Set(var_core_value_sig35B7.map(var_core_value_sig4A48 => var_core_value_sig4A48.id)),
    var_core_value_sig29E6 = var_core_value_sig35B7.map((var_core_value_sigD170, var_core_value_sig90E5) => ({
      id: Ss.id,
      params: {
        unitId: var_core_value_sig0F42,
        subUnitId: var_core_value_sig147A,
        element: var_core_value_sig7D37.deepClone(var_core_value_sigD170),
        insertIndex: var_core_value_sig6C47 === undefined ? undefined : var_core_value_sig6C47 + var_core_value_sig90E5,
        ...(var_core_value_sigD170.parentId && var_core_value_sig9D64.has(var_core_value_sigD170.parentId) ? {
          allowLockedParent: true
        } : {})
      }
    })),
    var_core_value_sig7E15 = [...var_core_value_sig35B7].reverse().map(var_core_value_sig7000 => ({
      id: ws.id,
      params: {
        unitId: var_core_value_sig0F42,
        subUnitId: var_core_value_sig147A,
        elementId: var_core_value_sig7000.id,
        elementType: var_core_value_sig7000.type,
        ...(var_core_value_sig7000.type === M.Container ? {
          containerKind: var_core_value_sig7000.containerData["kind"]
        } : {}),
        ...(var_core_value_sig7000.parentId && var_core_value_sig9D64.has(var_core_value_sig7000.parentId) ? {
          allowLockedParent: true
        } : {}),
        ...(var_core_value_sig7000.locked === true ? {
          allowLockedTarget: true
        } : {})
      }
    })),
    var_core_value_sig2493 = Uc({
      unitId: var_core_value_sig0F42,
      subUnitId: var_core_value_sig147A,
      elementData: var_core_value_sigFBF01,
      elementOrder: var_core_value_sigE8F0,
      orderedElements: var_core_value_sig35B7,
      insertIndex: var_core_value_sig6C47
    });
  if (Jc({
    unitId: var_core_value_sig0F42,
    subUnitId: var_core_value_sig147A,
    elementData: var_core_value_sig2493.elementData,
    elementOrder: var_core_value_sig2493.elementOrder,
    containerIds: var_core_value_sig35B7.filter(var_core_value_sigD7C5 => var_core_value_sigD7C5.type === M.Container && var_core_value_sigD7C5.containerData["behavior"].membershipLocked && var_core_value_sigD7C5.containerData["behavior"].autoResize).map(var_core_value_sig3633 => var_core_value_sig3633.id),
    redoMutations: var_core_value_sig29E6
  }), var_core_value_sig8090 || Yc({
    unitId: var_core_value_sig0F42,
    subUnitId: var_core_value_sig147A,
    originalElementData: var_core_value_sigFBF01,
    elementData: var_core_value_sig2493.elementData,
    elementOrder: var_core_value_sig2493.elementOrder,
    addedElements: var_core_value_sig35B7,
    redoMutations: var_core_value_sig29E6,
    undoMutations: var_core_value_sig7E15
  }), rl({
    elementData: var_core_value_sig2493.elementData,
    orderedElements: var_core_value_sig35B7
  })) return null;
  if (var_core_value_sigB034.captureExistingElements !== false && Xc({
    unitId: var_core_value_sig0F42,
    subUnitId: var_core_value_sig147A,
    elementData: var_core_value_sig2493.elementData,
    orderedElements: var_core_value_sig35B7,
    redoMutations: var_core_value_sig29E6,
    undoMutations: var_core_value_sig7E15
  }), var_core_value_sig8090) {
    let var_core_value_sig1DF5 = Pc({
      unitId: var_core_value_sig0F42,
      subUnitId: var_core_value_sig147A,
      containerId: var_core_value_sig8090,
      elementData: var_core_value_sig2493.elementData,
      elementOrder: var_core_value_sig2493.elementOrder
    });
    var_core_value_sig1DF5 && (var_core_value_sig29E6.push(...var_core_value_sig1DF5.redoMutations), var_core_value_sig7E15.unshift(...var_core_value_sig1DF5.undoMutations));
  }
  return il(var_core_value_sigFBF01, var_core_value_sig29E6) || !No(var_core_value_sigFBF01, var_core_value_sig29E6) ? null : {
    redoMutations: var_core_value_sig29E6,
    undoMutations: var_core_value_sig7E15
  };
}
const sl = {
    id: "board.operation.add-element",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig731D, var_core_value_sig2F24) => var_core_value_sig2F24 ? al.handler(var_core_value_sig731D, {
      unitId: var_core_value_sig2F24.unitId,
      subUnitId: var_core_value_sig2F24.subUnitId,
      elements: [var_core_value_sig2F24.element],
      insertIndex: var_core_value_sig2F24.insertIndex,
      fitContainerId: var_core_value_sig2F24.fitContainerId
    }) : false
  },
  cl = var_core_value_sig72C0("board.container-adapter.service");
var ll = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig90A3) {
    return this._adapters["push"](var_core_value_sig90A3), var_core_value_sig4D7C(() => {
      let var_core_value_sig210D = this._adapters["indexOf"](var_core_value_sig90A3);
      var_core_value_sig210D >= 0 && this._adapters["splice"](var_core_value_sig210D, 1);
    });
  }
  beginContainerMode(var_core_value_sig28BE) {
    for (let var_core_value_sigB4B4 of this._adapters) if (var_core_value_sigB4B4.beginContainerMode(var_core_value_sig28BE)) return true;
    return false;
  }
  beginSwimlaneMode(var_core_value_sig0224) {
    for (let var_core_value_sigD407 of this._adapters) {
      var var_core_value_sig854B;
      if ((var_core_value_sig854B = var_core_value_sigD407.beginSwimlaneMode) != null && var_core_value_sig854B.call(var_core_value_sigD407, var_core_value_sig0224)) return true;
    }
    return false;
  }
};
const ul = {
    id: "board.operation.begin-container",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigDA3A, var_core_value_sig4CAF) => var_core_value_sig4CAF ? var_core_value_sigDA3A.get(cl).beginContainerMode(var_core_value_sig4CAF) : false
  },
  dl = var_core_value_sig72C0("board.export-adapter.service");
var fl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig1FF6) {
    return this._adapters["push"](var_core_value_sig1FF6), var_core_value_sig4D7C(() => {
      let var_core_value_sig63F3 = this._adapters["indexOf"](var_core_value_sig1FF6);
      var_core_value_sig63F3 >= 0 && this._adapters["splice"](var_core_value_sig63F3, 1);
    });
  }
  beginExport(var_core_value_sig4B271) {
    for (let var_core_value_sig6A71 of this._adapters) if (var_core_value_sig6A71.beginExport(var_core_value_sig4B271)) return true;
    return false;
  }
};
const pl = {
    id: "board.operation.begin-export",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigBCDC, var_core_value_sig3FB8) => var_core_value_sig3FB8 ? var_core_value_sigBCDC.get(dl).beginExport(var_core_value_sig3FB8) : false
  },
  ml = var_core_value_sig72C0("board.import-adapter.service");
var hl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig3A41) {
    return this._adapters["push"](var_core_value_sig3A41), var_core_value_sig4D7C(() => {
      let var_core_value_sig3BF6 = this._adapters["indexOf"](var_core_value_sig3A41);
      var_core_value_sig3BF6 >= 0 && this._adapters["splice"](var_core_value_sig3BF6, 1);
    });
  }
  beginImport(var_core_value_sig269A) {
    for (let var_core_value_sig38CE of this._adapters) if (var_core_value_sig38CE.beginImport(var_core_value_sig269A)) return true;
    return false;
  }
};
const gl = {
    id: "board.operation.begin-import",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig2CB0, var_core_value_sig5762) => var_core_value_sig5762 ? var_core_value_sig2CB0.get(ml).beginImport(var_core_value_sig5762) : false
  },
  _l = var_core_value_sig72C0("board.mind-map-adapter.service");
var vl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sigBF53) {
    return this._adapters["push"](var_core_value_sigBF53), var_core_value_sig4D7C(() => {
      let var_core_value_sig62B7 = this._adapters["indexOf"](var_core_value_sigBF53);
      var_core_value_sig62B7 >= 0 && this._adapters["splice"](var_core_value_sig62B7, 1);
    });
  }
  beginMindMapMode(var_core_value_sigD9BB) {
    for (let var_core_value_sig37A8 of this._adapters) if (var_core_value_sig37A8.beginMindMapMode(var_core_value_sigD9BB)) return true;
    return false;
  }
};
const yl = {
    id: "board.operation.begin-mind-map",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigFE00, var_core_value_sigB03D) => var_core_value_sigB03D ? var_core_value_sigFE00.get(_l).beginMindMapMode(var_core_value_sigB03D) : false
  },
  bl = var_core_value_sig72C0("board.pen-adapter.service");
var xl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sigF549) {
    return this._adapters["push"](var_core_value_sigF549), var_core_value_sig4D7C(() => {
      let var_core_value_sigA90D = this._adapters["indexOf"](var_core_value_sigF549);
      var_core_value_sigA90D >= 0 && this._adapters["splice"](var_core_value_sigA90D, 1);
    });
  }
  beginPenMode(var_core_value_sigC125) {
    for (let var_core_value_sig7A3C of this._adapters) if (var_core_value_sig7A3C.beginPenMode(var_core_value_sigC125)) return true;
    return false;
  }
};
const Sl = {
    id: "board.operation.begin-pen",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig10B9, var_core_value_sigB25D) => var_core_value_sigB25D ? var_core_value_sig10B9.get(bl).beginPenMode(var_core_value_sigB25D) : false
  },
  Cl = var_core_value_sig72C0("board.resources-adapter.service");
var wl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sigB63D) {
    return this._adapters["push"](var_core_value_sigB63D), var_core_value_sig4D7C(() => {
      let var_core_value_sig0511 = this._adapters["indexOf"](var_core_value_sigB63D);
      var_core_value_sig0511 >= 0 && this._adapters["splice"](var_core_value_sig0511, 1);
    });
  }
  beginResourcesPanel(var_core_value_sig8255) {
    for (let var_core_value_sig1F44 of this._adapters) if (var_core_value_sig1F44.beginResourcesPanel(var_core_value_sig8255)) return true;
    return false;
  }
};
const Tl = {
    id: "board.operation.begin-resources",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig7890, var_core_value_sig06EC) => var_core_value_sig06EC ? var_core_value_sig7890.get(Cl).beginResourcesPanel(var_core_value_sig06EC) : false
  },
  El = {
    id: "board.operation.begin-swimlane",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig2A4A, var_core_value_sig35B2) => var_core_value_sig35B2 ? var_core_value_sig2A4A.get(cl).beginSwimlaneMode(var_core_value_sig35B2) : false
  },
  Dl = var_core_value_sig72C0("board.translate-adapter.service");
var Ol = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sigBFC7) {
    return this._adapters["push"](var_core_value_sigBFC7), var_core_value_sig4D7C(() => {
      let var_core_value_sigCB04 = this._adapters["indexOf"](var_core_value_sigBFC7);
      var_core_value_sigCB04 >= 0 && this._adapters["splice"](var_core_value_sigCB04, 1);
    });
  }
  beginTranslate(var_core_value_sig933F) {
    for (let var_core_value_sig947E of this._adapters) if (var_core_value_sig947E.beginTranslate(var_core_value_sig933F)) return true;
    return false;
  }
};
const kl = {
  id: "board.operation.begin-translate",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig4B92, var_core_value_sig8A40) => var_core_value_sig8A40 ? var_core_value_sig4B92.get(Dl).beginTranslate(var_core_value_sig8A40) : false
};
function Al(var_core_value_sig436D, var_core_value_sig591B, var_core_value_sig4FBC) {
  return W(var_core_value_sig436D, {
    parentId: var_core_value_sig591B,
    worldTransform: var_core_value_sig4FBC
  });
}
function jl(var_core_value_sig71F0, var_core_value_sig0812) {
  return {
    ...var_core_value_sig71F0,
    transform: {
      ...var_core_value_sig71F0.transform,
      left: var_core_value_sig0812.left,
      top: var_core_value_sig0812.top,
      width: var_core_value_sig0812.width,
      height: var_core_value_sig0812.height,
      rotation: var_core_value_sig0812.rotation ?? 0,
      flipX: var_core_value_sig0812.flipX,
      flipY: var_core_value_sig0812.flipY
    }
  };
}
function Ml(var_core_value_sigCF891, var_core_value_sigA14D) {
  if (var_core_value_sigCF891.containerData["kind"] !== "swimlane") return var_core_value_sigCF891;
  let var_core_value_sigF428 = Ni(var_core_value_sigCF891, {
    left: var_core_value_sigA14D.left ?? 0,
    top: var_core_value_sigA14D.top ?? 0,
    width: var_core_value_sigA14D.width ?? 0,
    height: var_core_value_sigA14D.height ?? 0
  });
  return var_core_value_sigF428 ? {
    ...var_core_value_sigCF891,
    containerData: {
      ...var_core_value_sigCF891.containerData,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      swimlane: var_core_value_sigF428
    }
  } : var_core_value_sigCF891;
}
function Nl(var_core_value_sig4AA7, var_core_value_sigC0CB = false) {
  return !var_core_value_sig4AA7 || var_core_value_sig4AA7.hidden === true || var_core_value_sig4AA7.element["visible"] === false || !var_core_value_sigC0CB && var_core_value_sig4AA7.element["locked"] === true || var_core_value_sig4AA7.element["selectable"] === false || var_core_value_sig4AA7.element["type"] === M.Connector;
}
function Pl(var_core_value_sig7644, var_core_value_sig6497, var_core_value_sig742A) {
  var var_core_value_sig2130;
  let var_core_value_sig5BC41 = var_core_value_sig7644[var_core_value_sig6497],
    var_core_value_sigD642 = var_core_value_sig5BC41 == null ? undefined : var_core_value_sig5BC41.element,
    var_core_value_sig187F = (var_core_value_sig2130 = var_core_value_sig7644[var_core_value_sig742A]) == null ? undefined : var_core_value_sig2130.element;
  if (!var_core_value_sig5BC41 || !var_core_value_sigD642 || !var_core_value_sig187F || var_core_value_sigD642.type !== M.Container) return false;
  let var_core_value_sig1D39 = var_core_value_sigD642.containerData["behavior"];
  return var_core_value_sig5BC41.hidden === true || var_core_value_sigD642.visible === false || var_core_value_sigD642.locked === true || var_core_value_sigD642.selectable === false || var_core_value_sig1D39.membershipLocked || !var_core_value_sig1D39.acceptsChildren ? false : var_core_value_sig187F.type !== M.Container || var_core_value_sig1D39.acceptsContainer && var_core_value_sig1D39.allowNested;
}
function Fl(var_core_value_sig0BE3, var_core_value_sigF681, var_core_value_sigABEA) {
  var var_core_value_sig4200, var_core_value_sig09ED;
  if (!var_core_value_sigF681) return;
  let var_core_value_sig912B = (var_core_value_sig4200 = var_core_value_sig0BE3[var_core_value_sigF681]) == null ? undefined : var_core_value_sig4200.element,
    var_core_value_sig60E8 = U(var_core_value_sig0BE3, var_core_value_sigF681);
  if (!(!var_core_value_sig912B || var_core_value_sig912B.type !== M.Container || var_core_value_sig912B.containerData["kind"] !== "swimlane" || !var_core_value_sig60E8)) return (var_core_value_sig09ED = Ui(var_core_value_sig912B, var_core_value_sig60E8, var_core_value_sigABEA)) == null ? undefined : var_core_value_sig09ED.lane["id"];
}
function Il(var_core_value_sigC01F, var_core_value_sig3ACA, var_core_value_sig25D9) {
  return var_core_value_sigC01F.containerData["kind"] === "swimlane" && var_core_value_sigC01F.containerData["swimlane"] ? !!Ui(var_core_value_sigC01F, var_core_value_sig3ACA, var_core_value_sig25D9) : gi(bi(var_core_value_sigC01F, var_core_value_sig3ACA).contentBounds, var_core_value_sig25D9);
}
function Ll(var_core_value_sig171B, var_core_value_sigF2EF, var_core_value_sig9366, var_core_value_sigE863) {
  var var_core_value_sigB2CE1;
  let var_core_value_sig18E9 = var_core_value_sigF2EF ? (var_core_value_sigB2CE1 = var_core_value_sig171B[var_core_value_sigF2EF]) == null ? undefined : var_core_value_sigB2CE1.element["parentId"] : undefined,
    var_core_value_sigC0B9 = new Set([var_core_value_sig9366, var_core_value_sigF2EF ?? ""]);
  for (; var_core_value_sig18E9;) {
    if (var_core_value_sigC0B9.has(var_core_value_sig18E9)) return;
    let var_core_value_sig4545 = var_core_value_sig171B[var_core_value_sig18E9],
      var_core_value_sigF39A = U(var_core_value_sig171B, var_core_value_sig18E9);
    if ((var_core_value_sig4545 == null ? undefined : var_core_value_sig4545.element["type"]) === M.Container && var_core_value_sigF39A && Pl(var_core_value_sig171B, var_core_value_sig18E9, var_core_value_sig9366) && Il(var_core_value_sig4545.element, var_core_value_sigF39A, var_core_value_sigE863)) return var_core_value_sig18E9;
    var_core_value_sigC0B9.add(var_core_value_sig18E9), var_core_value_sig18E9 = var_core_value_sig4545 == null ? undefined : var_core_value_sig4545.element["parentId"];
  }
}
function Rl(var_core_value_sig2F10, var_core_value_sigC1F2, var_core_value_sigDA6F) {
  let var_core_value_sig8583 = var_core_value_sig2F10[var_core_value_sigDA6F],
    var_core_value_sig802A = var_core_value_sig8583 == null ? undefined : var_core_value_sig8583.element["parentId"],
    var_core_value_sig368A = var_core_value_sig802A ? var_core_value_sig2F10[var_core_value_sig802A] : undefined;
  if ((var_core_value_sig368A == null ? undefined : var_core_value_sig368A.element["type"]) === M.Container && var_core_value_sig368A.element["containerData"].behavior["membershipLocked"]) return null;
  let var_core_value_sig89F9 = Oc({
    elementData: var_core_value_sig2F10,
    elementOrder: var_core_value_sigC1F2,
    activeContainerIds: [var_core_value_sigDA6F]
  });
  return var_core_value_sig89F9 ? {
    parentId: var_core_value_sig89F9.containerId,
    expandedOuterBounds: var_core_value_sig89F9.expandedOuterBounds
  } : null;
}
function zl(var_core_value_sig015F, var_core_value_sigC32D, var_core_value_sigEB9F, var_core_value_sig08A4, var_core_value_sigE286, var_core_value_sig91C3 = {}) {
  return {
    id: $.id,
    params: {
      unitId: var_core_value_sig015F,
      subUnitId: var_core_value_sigC32D,
      elementId: var_core_value_sigEB9F.elementId,
      element: var_core_value_sig08A4,
      transform: fi(var_core_value_sigE286),
      ...(var_core_value_sig91C3.allowLockedTarget ? {
        allowLockedTarget: true
      } : {})
    }
  };
}
function Bl(var_core_value_sig63B3, var_core_value_sig150A, var_core_value_sig2074, var_core_value_sig038C, var_core_value_sigE79F, var_core_value_sigC725, var_core_value_sigD836 = {}) {
  var_core_value_sig63B3.set(var_core_value_sig038C.elementId, zl(var_core_value_sig150A, var_core_value_sig2074, var_core_value_sig038C, var_core_value_sigE79F, var_core_value_sigC725, var_core_value_sigD836));
}
function Vl(var_core_value_sigE06D, var_core_value_sig8DC3) {
  let var_core_value_sig194D = var_core_value_sig8DC3.params,
    var_core_value_sigE5C1 = var_core_value_sigE06D[var_core_value_sig194D.elementId];
  var_core_value_sigE5C1 && (var_core_value_sigE06D[var_core_value_sig194D.elementId] = {
    ...var_core_value_sigE5C1,
    element: var_core_value_sig194D.element,
    transform: var_core_value_sig194D.transform
  });
}
function Hl(var_core_value_sig81B0, var_core_value_sig6DF72, var_core_value_sig8E2B, var_core_value_sigC9E01 = {}) {
  return {
    id: $.id,
    params: {
      unitId: var_core_value_sig81B0,
      subUnitId: var_core_value_sig6DF72,
      elementId: var_core_value_sig8E2B.elementId,
      element: X(var_core_value_sig7D37.deepClone(var_core_value_sig8E2B.element)),
      transform: var_core_value_sig8E2B.transform ? {
        ...var_core_value_sig8E2B.transform
      } : var_core_value_sig8E2B.transform,
      ...(var_core_value_sigC9E01.allowLockedTarget ? {
        allowLockedTarget: true
      } : {})
    }
  };
}
function Ul(var_core_value_sigDC37, var_core_value_sig6133) {
  return var_core_value_sig6133.some(var_core_value_sig29DE => {
    var var_core_value_sig4AFB;
    let var_core_value_sigC7EA = var_core_value_sig29DE.params;
    return !!var_core_value_sigC7EA.elementId && var_core_value_sigC7EA.allowLockedTarget !== true && ((var_core_value_sig4AFB = var_core_value_sigDC37[var_core_value_sigC7EA.elementId]) == null ? undefined : var_core_value_sig4AFB.element["locked"]) === true;
  });
}
function Wl(var_core_value_sigDCBA, var_core_value_sigEE95) {
  let var_core_value_sig98C4 = new Map();
  return Object.values(var_core_value_sigDCBA).forEach(var_core_value_sigDAB9 => {
    var var_core_value_sig9CF7;
    if (var_core_value_sigDAB9.element["parentId"] !== var_core_value_sigEE95) return;
    let var_core_value_sigCCE5 = (var_core_value_sig9CF7 = H(var_core_value_sigDCBA, var_core_value_sigDAB9.elementId)) == null ? undefined : var_core_value_sig9CF7.worldTransform;
    var_core_value_sigCCE5 && var_core_value_sig98C4.set(var_core_value_sigDAB9.elementId, var_core_value_sigCCE5);
  }), var_core_value_sig98C4;
}
function Gl(var_core_value_sig2F14) {
  let {
    unitId: var_core_value_sigB9DF,
    subUnitId: var_core_value_sig81A9,
    containerId: var_core_value_sigF301,
    elementData: var_core_value_sig1679,
    originalElementData: var_core_value_sigF73D,
    childWorldTransforms: var_core_value_sigDB18,
    updateById: var_core_value_sig4E47,
    undoById: var_core_value_sigACB0
  } = var_core_value_sig2F14;
  var_core_value_sigDB18.forEach((var_core_value_sig5933, var_core_value_sig884B) => {
    let var_core_value_sig4E30 = var_core_value_sig1679[var_core_value_sig884B];
    if (!var_core_value_sig4E30 || var_core_value_sig4E30.element["parentId"] !== var_core_value_sigF301) return;
    let var_core_value_sig9730 = Al(var_core_value_sig1679, var_core_value_sigF301, var_core_value_sig5933),
      var_core_value_sig8E4A = jl(var_core_value_sig4E30.element, var_core_value_sig9730);
    var_core_value_sigACB0.set(var_core_value_sig884B, var_core_value_sigACB0.get(var_core_value_sig884B) ?? Hl(var_core_value_sigB9DF, var_core_value_sig81A9, var_core_value_sigF73D[var_core_value_sig884B])), Bl(var_core_value_sig4E47, var_core_value_sigB9DF, var_core_value_sig81A9, var_core_value_sig4E30, var_core_value_sig8E4A, var_core_value_sig9730), Vl(var_core_value_sig1679, var_core_value_sig4E47.get(var_core_value_sig884B));
  });
}
function Kl(var_core_value_sigDEB1) {
  var var_core_value_sigF3BE;
  let {
    unitId: var_core_value_sig31FA,
    subUnitId: var_core_value_sigC23B,
    parentId: var_core_value_sigB0B1,
    elementData: var_core_value_sigCB10,
    originalElementData: var_core_value_sig97AF,
    updateById: var_core_value_sig8A6D,
    undoById: var_core_value_sigB74E
  } = var_core_value_sigDEB1;
  if (!var_core_value_sigB0B1) return;
  let var_core_value_sigBD4F = var_core_value_sigCB10[var_core_value_sigB0B1];
  if ((var_core_value_sigBD4F == null ? undefined : var_core_value_sigBD4F.element["type"]) !== M.Container || !var_core_value_sigBD4F.element["containerData"].behavior["membershipLocked"] || so(var_core_value_sigBD4F.element)) return;
  let var_core_value_sig9C8D = U(var_core_value_sigCB10, var_core_value_sigB0B1);
  if (!var_core_value_sig9C8D) return;
  let var_core_value_sig1DE2 = (var_core_value_sigF3BE = mc({
    containerId: var_core_value_sigB0B1,
    elementData: var_core_value_sigCB10,
    preview: Dc({
      containerId: var_core_value_sigB0B1,
      elementData: var_core_value_sigCB10,
      candidateElementIds: []
    })
  }).autosized[0]) == null ? undefined : var_core_value_sigF3BE.nextBounds;
  if (!var_core_value_sig1DE2 || var_core_value_sig1DE2.left === var_core_value_sig9C8D.left && var_core_value_sig1DE2.top === var_core_value_sig9C8D.top && var_core_value_sig1DE2.width === var_core_value_sig9C8D.width && var_core_value_sig1DE2.height === var_core_value_sig9C8D.height) return;
  let var_core_value_sig8E68 = Wl(var_core_value_sigCB10, var_core_value_sigB0B1),
    var_core_value_sigA81A = Al(var_core_value_sigCB10, var_core_value_sigBD4F.element["parentId"], {
      ...var_core_value_sigBD4F.element["transform"],
      ...var_core_value_sig1DE2,
      rotation: 0
    }),
    var_core_value_sig15C3 = jl(var_core_value_sigBD4F.element, var_core_value_sigA81A);
  var_core_value_sigB74E.set(var_core_value_sigB0B1, var_core_value_sigB74E.get(var_core_value_sigB0B1) ?? Hl(var_core_value_sig31FA, var_core_value_sigC23B, var_core_value_sig97AF[var_core_value_sigB0B1])), Bl(var_core_value_sig8A6D, var_core_value_sig31FA, var_core_value_sigC23B, var_core_value_sigBD4F, var_core_value_sig15C3, var_core_value_sigA81A), Vl(var_core_value_sigCB10, var_core_value_sig8A6D.get(var_core_value_sigB0B1)), Gl({
    unitId: var_core_value_sig31FA,
    subUnitId: var_core_value_sigC23B,
    containerId: var_core_value_sigB0B1,
    elementData: var_core_value_sigCB10,
    originalElementData: var_core_value_sig97AF,
    childWorldTransforms: var_core_value_sig8E68,
    updateById: var_core_value_sig8A6D,
    undoById: var_core_value_sigB74E
  });
}
const ql = {
  id: "board.operation.commit-container-transform",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig5CFD1, var_core_value_sigCA24) => {
    if (!(var_core_value_sigCA24 != null && var_core_value_sigCA24.containerId)) return false;
    let {
        unitId: var_core_value_sig0B5D,
        subUnitId: var_core_value_sigFC84,
        containerId: var_core_value_sigCA9B,
        interaction: var_core_value_sig341C
      } = var_core_value_sigCA24,
      var_core_value_sig2AA1 = var_core_value_sig5CFD1.get(L),
      var_core_value_sigA506 = var_core_value_sig2AA1.getElementData(var_core_value_sig0B5D, var_core_value_sigFC84),
      var_core_value_sig6FC9 = var_core_value_sig2AA1.getElementOrder(var_core_value_sig0B5D, var_core_value_sigFC84),
      var_core_value_sig05BE = var_core_value_sigA506[var_core_value_sigCA9B];
    if (!var_core_value_sig05BE || var_core_value_sig05BE.element["type"] !== M.Container || var_core_value_sig05BE.element["locked"]) return false;
    let var_core_value_sig097E = var_core_value_sigA506,
      var_core_value_sig0240 = {
        ...var_core_value_sigA506
      },
      var_core_value_sig90E0 = var_core_value_sig05BE.element,
      var_core_value_sigA81B1 = jl(var_core_value_sig90E0, {
        ...var_core_value_sig90E0.transform,
        ...var_core_value_sigCA24.transform,
        rotation: 0
      });
    var_core_value_sig341C === "resize" && (var_core_value_sigA81B1 = Ml(var_core_value_sigA81B1, var_core_value_sigA81B1.transform));
    let var_core_value_sig1D0B = new Map(),
      var_core_value_sigA5CC = new Map();
    var_core_value_sigA5CC.set(var_core_value_sigCA9B, Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig05BE)), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig05BE, var_core_value_sigA81B1, var_core_value_sigA81B1.transform), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigCA9B));
    let var_core_value_sigA22E = U(var_core_value_sig097E, var_core_value_sigCA9B),
      var_core_value_sigAFB6 = U(var_core_value_sig0240, var_core_value_sigCA9B);
    if (!var_core_value_sigAFB6) return false;
    let var_core_value_sigFC4C = Object.values(var_core_value_sig097E).filter(var_core_value_sig300B => var_core_value_sig300B.element["parentId"] === var_core_value_sigCA9B).map(var_core_value_sig8457 => var_core_value_sig8457.elementId);
    if (var_core_value_sig341C === "move" && var_core_value_sig90E0.parentId) {
      let var_core_value_sigB30D = var_core_value_sig0240[var_core_value_sig90E0.parentId];
      if ((var_core_value_sigB30D == null ? undefined : var_core_value_sigB30D.element["type"]) === M.Container && !var_core_value_sigB30D.element["containerData"].behavior["membershipLocked"]) {
        let var_core_value_sigF79C = Dc({
          containerId: var_core_value_sig90E0.parentId,
          elementData: var_core_value_sig0240,
          candidateElementIds: []
        });
        if (mc({
          containerId: var_core_value_sig90E0.parentId,
          elementData: var_core_value_sig0240,
          preview: var_core_value_sigF79C
        }).expelled["some"](({
          elementId: var_core_value_sig2E11
        }) => var_core_value_sig2E11 === var_core_value_sigCA9B)) {
          var var_core_value_sigAE5C;
          let var_core_value_sig5B69 = var_core_value_sig0240[var_core_value_sigCA9B],
            var_core_value_sigB098 = (var_core_value_sigAE5C = H(var_core_value_sig0240, var_core_value_sigCA9B)) == null ? undefined : var_core_value_sigAE5C.worldTransform;
          if (var_core_value_sig5B69 && var_core_value_sigB098) {
            let var_core_value_sig9572 = Ll(var_core_value_sig0240, var_core_value_sig90E0.parentId, var_core_value_sigCA9B, var_core_value_sigAFB6),
              var_core_value_sigD873 = Al(var_core_value_sig0240, var_core_value_sig9572, var_core_value_sigB098);
            Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig5B69, jl({
              ...var_core_value_sig5B69.element,
              parentId: var_core_value_sig9572,
              laneId: Fl(var_core_value_sig0240, var_core_value_sig9572, var_core_value_sigAFB6)
            }, var_core_value_sigD873), var_core_value_sigD873), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigCA9B));
          }
        }
      }
    }
    if (Kl({
      unitId: var_core_value_sig0B5D,
      subUnitId: var_core_value_sigFC84,
      parentId: var_core_value_sig90E0.parentId,
      elementData: var_core_value_sig0240,
      originalElementData: var_core_value_sig097E,
      updateById: var_core_value_sig1D0B,
      undoById: var_core_value_sigA5CC
    }), var_core_value_sig341C === "move") {
      var var_core_value_sig9A4B;
      let var_core_value_sigDB33 = var_core_value_sig0240[var_core_value_sigCA9B],
        var_core_value_sig6C8C = (var_core_value_sig9A4B = H(var_core_value_sig0240, var_core_value_sigCA9B)) == null ? undefined : var_core_value_sig9A4B.worldTransform;
      if (var_core_value_sigDB33 && var_core_value_sig6C8C) {
        let var_core_value_sig2E54 = Rl(var_core_value_sig0240, var_core_value_sig6FC9, var_core_value_sigCA9B);
        if (var_core_value_sig2E54 && var_core_value_sigDB33.element["parentId"] !== var_core_value_sig2E54.parentId) {
          let var_core_value_sigCE71 = var_core_value_sig0240[var_core_value_sig2E54.parentId],
            var_core_value_sig21D8 = U(var_core_value_sig0240, var_core_value_sig2E54.parentId);
          if ((var_core_value_sigCE71 == null ? undefined : var_core_value_sigCE71.element["type"]) === M.Container && var_core_value_sig21D8 && var_core_value_sig2E54.expandedOuterBounds && (var_core_value_sig2E54.expandedOuterBounds["left"] !== var_core_value_sig21D8.left || var_core_value_sig2E54.expandedOuterBounds["top"] !== var_core_value_sig21D8.top || var_core_value_sig2E54.expandedOuterBounds["width"] !== var_core_value_sig21D8.width || var_core_value_sig2E54.expandedOuterBounds["height"] !== var_core_value_sig21D8.height)) {
            let var_core_value_sigA12B = Wl(var_core_value_sig0240, var_core_value_sig2E54.parentId),
              var_core_value_sigF230 = Al(var_core_value_sig0240, var_core_value_sigCE71.element["parentId"], {
                ...var_core_value_sigCE71.element["transform"],
                ...var_core_value_sig2E54.expandedOuterBounds,
                rotation: 0
              }),
              var_core_value_sig09B8 = jl(var_core_value_sigCE71.element, var_core_value_sigF230);
            var_core_value_sigA5CC.set(var_core_value_sig2E54.parentId, var_core_value_sigA5CC.get(var_core_value_sig2E54.parentId) ?? Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig2E54.parentId])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigCE71, var_core_value_sig09B8, var_core_value_sigF230), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig2E54.parentId)), Gl({
              unitId: var_core_value_sig0B5D,
              subUnitId: var_core_value_sigFC84,
              containerId: var_core_value_sig2E54.parentId,
              elementData: var_core_value_sig0240,
              originalElementData: var_core_value_sig097E,
              childWorldTransforms: var_core_value_sigA12B,
              updateById: var_core_value_sig1D0B,
              undoById: var_core_value_sigA5CC
            });
          }
          let var_core_value_sig2B65 = Al(var_core_value_sig0240, var_core_value_sig2E54.parentId, var_core_value_sig6C8C);
          Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigDB33, jl({
            ...var_core_value_sigDB33.element,
            parentId: var_core_value_sig2E54.parentId
          }, var_core_value_sig2B65), var_core_value_sig2B65), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigCA9B));
        }
      }
    }
    if (var_core_value_sig341C === "move" && var_core_value_sigA22E) {
      let var_core_value_sig7A5E = {
        x: var_core_value_sigAFB6.left - var_core_value_sigA22E.left,
        y: var_core_value_sigAFB6.top - var_core_value_sigA22E.top
      };
      if (var_core_value_sig7A5E.x !== 0 || var_core_value_sig7A5E.y !== 0) {
        let var_core_value_sig7658 = Un(var_core_value_sig0240, var_core_value_sigCA9B),
          var_core_value_sigDCF5 = new Set(var_core_value_sig7658),
          var_core_value_sigC786 = new Set([var_core_value_sigCA9B, ...var_core_value_sig7658.filter(var_core_value_sigD7EA => {
            var var_core_value_sigB33B;
            return ((var_core_value_sigB33B = var_core_value_sig0240[var_core_value_sigD7EA]) == null ? undefined : var_core_value_sigB33B.element["type"]) !== M.Connector;
          })]);
        var_core_value_sig7658.forEach(var_core_value_sig24B9 => {
          let var_core_value_sigE627 = var_core_value_sig0240[var_core_value_sig24B9];
          if (!Q(var_core_value_sigE627)) return;
          let var_core_value_sigEF3E = ni(var_core_value_sigE627.element, var_core_value_sig7A5E);
          var_core_value_sigA5CC.set(var_core_value_sig24B9, Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig24B9])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigE627, var_core_value_sigEF3E, var_core_value_sigEF3E.transform), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig24B9));
        }), Object.values(var_core_value_sig0240).forEach(var_core_value_sig273D => {
          if (!Q(var_core_value_sig273D) || var_core_value_sigDCF5.has(var_core_value_sig273D.elementId)) return;
          let var_core_value_sig9A0D = ui(var_core_value_sig273D.element, var_core_value_sigC786, var_core_value_sig7A5E);
          var_core_value_sig9A0D !== var_core_value_sig273D.element && (var_core_value_sigA5CC.set(var_core_value_sig273D.elementId, var_core_value_sigA5CC.get(var_core_value_sig273D.elementId) ?? Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig273D.elementId])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig273D, var_core_value_sig9A0D, var_core_value_sig9A0D.transform), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig273D.elementId)));
        });
      }
    }
    var_core_value_sig341C === "resize" && var_core_value_sigA22E && var_core_value_sigFC4C.forEach(var_core_value_sig838E => {
      var var_core_value_sig9A5B;
      let var_core_value_sigC860 = var_core_value_sig097E[var_core_value_sig838E],
        var_core_value_sigE64C = (var_core_value_sig9A5B = H(var_core_value_sig097E, var_core_value_sig838E)) == null ? undefined : var_core_value_sig9A5B.worldTransform;
      if (!var_core_value_sigC860 || !var_core_value_sigE64C) return;
      let var_core_value_sigF39B = Al(var_core_value_sig0240, var_core_value_sigCA9B, var_core_value_sigE64C),
        var_core_value_sig9B88 = jl(var_core_value_sigC860.element, var_core_value_sigF39B);
      var_core_value_sigA5CC.set(var_core_value_sig838E, Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigC860)), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigC860, var_core_value_sig9B88, var_core_value_sigF39B), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig838E));
    });
    let var_core_value_sigB1771 = var_core_value_sig0240[var_core_value_sigCA9B];
    if (!var_core_value_sigB1771 || var_core_value_sigB1771.element["type"] !== M.Container) return false;
    let var_core_value_sig5FE4 = var_core_value_sigB1771.element,
      var_core_value_sig0601 = bi(var_core_value_sig5FE4, var_core_value_sigAFB6),
      var_core_value_sig2AAC = new Set([var_core_value_sigCA9B, ...Un(var_core_value_sig0240, var_core_value_sigCA9B)]),
      var_core_value_sig6D82 = mc({
        containerId: var_core_value_sigCA9B,
        elementData: var_core_value_sig0240,
        preview: Dc({
          containerId: var_core_value_sigCA9B,
          elementData: var_core_value_sig0240,
          candidateElementIds: Object.values(var_core_value_sig0240).map(var_core_value_sig992A => var_core_value_sig992A.elementId).filter(var_core_value_sig6281 => !var_core_value_sig2AAC.has(var_core_value_sig6281))
        })
      });
    if (var_core_value_sig5FE4.containerData["behavior"].membershipLocked && !so(var_core_value_sig5FE4) && var_core_value_sig6D82.autosized["length"] > 0) {
      let var_core_value_sig9B01 = var_core_value_sig6D82.autosized[0].nextBounds;
      if (var_core_value_sig9B01.left !== var_core_value_sigAFB6.left || var_core_value_sig9B01.top !== var_core_value_sigAFB6.top || var_core_value_sig9B01.width !== var_core_value_sigAFB6.width || var_core_value_sig9B01.height !== var_core_value_sigAFB6.height) {
        let var_core_value_sigC0D9 = Wl(var_core_value_sig0240, var_core_value_sigCA9B),
          var_core_value_sigF0511 = Al(var_core_value_sig0240, var_core_value_sig5FE4.parentId, {
            ...var_core_value_sig5FE4.transform,
            ...var_core_value_sig9B01,
            rotation: 0
          });
        var_core_value_sig5FE4 = jl(var_core_value_sig5FE4, var_core_value_sigF0511), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigB1771, var_core_value_sig5FE4, var_core_value_sigF0511), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigCA9B)), Gl({
          unitId: var_core_value_sig0B5D,
          subUnitId: var_core_value_sigFC84,
          containerId: var_core_value_sigCA9B,
          elementData: var_core_value_sig0240,
          originalElementData: var_core_value_sig097E,
          childWorldTransforms: var_core_value_sigC0D9,
          updateById: var_core_value_sig1D0B,
          undoById: var_core_value_sigA5CC
        }), var_core_value_sig0601 = bi(var_core_value_sig5FE4, var_core_value_sig9B01);
      }
    }
    if (!var_core_value_sig5FE4.containerData["behavior"].membershipLocked) {
      var var_core_value_sig8E0C;
      let var_core_value_sigA724 = var_core_value_sig5FE4.parentId ? (var_core_value_sig8E0C = var_core_value_sig0240[var_core_value_sig5FE4.parentId]) == null ? undefined : var_core_value_sig8E0C.element : undefined,
        var_core_value_sig385E = (var_core_value_sigA724 == null ? undefined : var_core_value_sigA724.type) === M.Container && var_core_value_sigA724.containerData["behavior"].membershipLocked,
        var_core_value_sig10D3 = mc({
          containerId: var_core_value_sigCA9B,
          elementData: var_core_value_sig0240,
          preview: Dc({
            containerId: var_core_value_sigCA9B,
            elementData: var_core_value_sig0240,
            candidateElementIds: Object.values(var_core_value_sig0240).map(var_core_value_sig5825 => var_core_value_sig5825.elementId).filter(var_core_value_sig4EB7 => !var_core_value_sig2AAC.has(var_core_value_sig4EB7)),
            previewOuterBounds: var_core_value_sig0601.outerBounds
          })
        });
      if (var_core_value_sig10D3.autosized["length"] > 0) {
        let var_core_value_sig73AF = var_core_value_sig10D3.autosized[0].nextBounds;
        if (var_core_value_sig73AF.left !== var_core_value_sig0601.outerBounds["left"] || var_core_value_sig73AF.top !== var_core_value_sig0601.outerBounds["top"] || var_core_value_sig73AF.width !== var_core_value_sig0601.outerBounds["width"] || var_core_value_sig73AF.height !== var_core_value_sig0601.outerBounds["height"]) {
          let var_core_value_sigA319 = Wl(var_core_value_sig0240, var_core_value_sigCA9B),
            var_core_value_sig2D58 = Al(var_core_value_sig0240, var_core_value_sig5FE4.parentId, {
              ...var_core_value_sig5FE4.transform,
              ...var_core_value_sig73AF,
              rotation: 0
            });
          var_core_value_sig5FE4 = jl(var_core_value_sig5FE4, var_core_value_sig2D58), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigB1771, var_core_value_sig5FE4, var_core_value_sig2D58), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigCA9B)), Gl({
            unitId: var_core_value_sig0B5D,
            subUnitId: var_core_value_sigFC84,
            containerId: var_core_value_sigCA9B,
            elementData: var_core_value_sig0240,
            originalElementData: var_core_value_sig097E,
            childWorldTransforms: var_core_value_sigA319,
            updateById: var_core_value_sig1D0B,
            undoById: var_core_value_sigA5CC
          }), var_core_value_sig0601 = bi(var_core_value_sig5FE4, var_core_value_sig73AF);
        }
      }
      var_core_value_sig341C === "resize" && !var_core_value_sig385E && var_core_value_sig10D3.expelled["forEach"](({
        elementId: var_core_value_sig548A
      }) => {
        var var_core_value_sigE026;
        let var_core_value_sig339E = var_core_value_sig0240[var_core_value_sig548A];
        if (!var_core_value_sig339E || Nl(var_core_value_sig339E)) return;
        let var_core_value_sig7550 = (var_core_value_sigE026 = H(var_core_value_sig0240, var_core_value_sig548A)) == null ? undefined : var_core_value_sigE026.worldTransform,
          var_core_value_sig2983 = U(var_core_value_sig0240, var_core_value_sig548A);
        if (!var_core_value_sig7550 || !var_core_value_sig2983) return;
        let var_core_value_sigE1B0 = var_core_value_sig5FE4.parentId && Pl(var_core_value_sig0240, var_core_value_sig5FE4.parentId, var_core_value_sig548A) ? var_core_value_sig5FE4.parentId : undefined,
          var_core_value_sigD4FF = Al(var_core_value_sig0240, var_core_value_sigE1B0, var_core_value_sig7550),
          var_core_value_sig1E5B = jl({
            ...var_core_value_sig339E.element,
            parentId: var_core_value_sigE1B0,
            laneId: Fl(var_core_value_sig0240, var_core_value_sigE1B0, var_core_value_sig2983)
          }, var_core_value_sigD4FF);
        var_core_value_sigA5CC.set(var_core_value_sig548A, var_core_value_sigA5CC.get(var_core_value_sig548A) ?? Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig548A])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig339E, var_core_value_sig1E5B, var_core_value_sigD4FF), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig548A));
      }), var_core_value_sig10D3.captured["forEach"](({
        elementId: var_core_value_sigB680
      }) => {
        var var_core_value_sig1F64;
        let var_core_value_sigDD1C = var_core_value_sig0240[var_core_value_sigB680],
          var_core_value_sig2C39 = (var_core_value_sigDD1C == null ? undefined : var_core_value_sigDD1C.element["locked"]) === true && var_core_value_sig5FE4.containerData["capturePolicy"].allowCaptureLockedObjects === true;
        if (Nl(var_core_value_sigDD1C, var_core_value_sig5FE4.containerData["capturePolicy"].allowCaptureLockedObjects === true)) return;
        let var_core_value_sigB7D1 = (var_core_value_sig1F64 = H(var_core_value_sig0240, var_core_value_sigB680)) == null ? undefined : var_core_value_sig1F64.worldTransform,
          var_core_value_sig64F0 = U(var_core_value_sig0240, var_core_value_sigB680);
        if (!var_core_value_sigB7D1 || !var_core_value_sig64F0) return;
        let var_core_value_sig85B1 = Al(var_core_value_sig0240, var_core_value_sigCA9B, var_core_value_sigB7D1),
          var_core_value_sig3141 = jl({
            ...var_core_value_sigDD1C.element,
            parentId: var_core_value_sigCA9B,
            laneId: Fl(var_core_value_sig0240, var_core_value_sigCA9B, var_core_value_sig64F0)
          }, var_core_value_sig85B1);
        var_core_value_sigA5CC.set(var_core_value_sigB680, Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sigB680], {
          allowLockedTarget: var_core_value_sig2C39
        })), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sigDD1C, var_core_value_sig3141, var_core_value_sig85B1, {
          allowLockedTarget: var_core_value_sig2C39
        }), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sigB680));
      });
    }
    Object.values(var_core_value_sig0240).forEach(var_core_value_sig41F2 => {
      var var_core_value_sig32DD;
      if (!Q(var_core_value_sig41F2)) return;
      let var_core_value_sig7A88 = di(var_core_value_sig41F2.element, new Set([var_core_value_sigCA9B]), var_core_value_sig0240);
      var_core_value_sig7A88 !== var_core_value_sig41F2.element && (var_core_value_sigA5CC.set(var_core_value_sig41F2.elementId, var_core_value_sigA5CC.get(var_core_value_sig41F2.elementId) ?? Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig41F2.elementId])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig41F2, var_core_value_sig7A88, var_core_value_sig7A88.transform), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig41F2.elementId)));
      let var_core_value_sig6CFC = var_core_value_sig0240[var_core_value_sig41F2.elementId];
      if (!Q(var_core_value_sig6CFC)) return;
      var_core_value_sig7A88 = var_core_value_sig6CFC.element;
      let var_core_value_sig3EC0 = oo(var_core_value_sig0240, var_core_value_sig7A88);
      if (var_core_value_sig7A88.parentId === var_core_value_sig3EC0.parentId && var_core_value_sig7A88.laneId === var_core_value_sig3EC0.laneId) return;
      let var_core_value_sigEA69 = (var_core_value_sig32DD = H(var_core_value_sig0240, var_core_value_sig6CFC.elementId)) == null ? undefined : var_core_value_sig32DD.worldTransform;
      if (!var_core_value_sigEA69) return;
      let var_core_value_sigF42A = Al(var_core_value_sig0240, var_core_value_sig3EC0.parentId, var_core_value_sigEA69),
        var_core_value_sig898E = jl({
          ...var_core_value_sig7A88,
          parentId: var_core_value_sig3EC0.parentId,
          laneId: var_core_value_sig3EC0.laneId
        }, var_core_value_sigF42A);
      var_core_value_sigA5CC.set(var_core_value_sig6CFC.elementId, var_core_value_sigA5CC.get(var_core_value_sig6CFC.elementId) ?? Hl(var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig097E[var_core_value_sig6CFC.elementId])), Bl(var_core_value_sig1D0B, var_core_value_sig0B5D, var_core_value_sigFC84, var_core_value_sig6CFC, var_core_value_sig898E, var_core_value_sigF42A), Vl(var_core_value_sig0240, var_core_value_sig1D0B.get(var_core_value_sig6CFC.elementId));
    });
    let var_core_value_sigA440 = Array.from(var_core_value_sig1D0B.values());
    return var_core_value_sigA440.length === 0 || Ul(var_core_value_sig097E, var_core_value_sigA440) || !Mo(var_core_value_sig097E, var_core_value_sigA440) || !var_core_value_sig77FC(var_core_value_sigA440, var_core_value_sig5CFD1.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig5CFD1.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig0B5D,
      redoMutations: var_core_value_sigA440,
      undoMutations: Array.from(var_core_value_sigA5CC.values()).reverse()
    }), true);
  }
};
function Jl(var_core_value_sigB2E6, var_core_value_sigA35D) {
  return {
    ...var_core_value_sigB2E6,
    transform: {
      ...var_core_value_sigB2E6.transform,
      left: var_core_value_sigA35D.left,
      top: var_core_value_sigA35D.top,
      width: var_core_value_sigA35D.width,
      height: var_core_value_sigA35D.height,
      rotation: var_core_value_sigA35D.angle,
      flipX: var_core_value_sigA35D.flipX,
      flipY: var_core_value_sigA35D.flipY
    }
  };
}
function Yl(var_core_value_sig5C6B, var_core_value_sigFA1E, var_core_value_sig713B) {
  var var_core_value_sigDEC9;
  if (!var_core_value_sigFA1E) return true;
  let var_core_value_sig1BE8 = (var_core_value_sigDEC9 = var_core_value_sig5C6B[var_core_value_sigFA1E]) == null ? undefined : var_core_value_sigDEC9.element;
  if (!var_core_value_sig1BE8 || var_core_value_sig1BE8.type !== M.Container) return false;
  let var_core_value_sig955E = var_core_value_sig1BE8.containerData["behavior"];
  return var_core_value_sig955E.membershipLocked || !var_core_value_sig955E.acceptsChildren ? false : var_core_value_sig713B.every(var_core_value_sigC481 => {
    var var_core_value_sig27B7;
    let var_core_value_sig2DAD = (var_core_value_sig27B7 = var_core_value_sig5C6B[var_core_value_sigC481]) == null ? undefined : var_core_value_sig27B7.element;
    return (var_core_value_sig2DAD == null ? undefined : var_core_value_sig2DAD.type) !== M.Container || var_core_value_sig955E.acceptsContainer && var_core_value_sig955E.allowNested;
  });
}
function Xl(var_core_value_sig6248, var_core_value_sigEE43, var_core_value_sig96E6) {
  var var_core_value_sig5045, var_core_value_sig826A;
  if (!var_core_value_sigEE43 || !var_core_value_sig96E6) return;
  let var_core_value_sig16C71 = (var_core_value_sig5045 = var_core_value_sig6248[var_core_value_sigEE43]) == null ? undefined : var_core_value_sig5045.element,
    var_core_value_sig3040 = U(var_core_value_sig6248, var_core_value_sigEE43);
  if (!(!var_core_value_sig16C71 || var_core_value_sig16C71.type !== M.Container || var_core_value_sig16C71.containerData["kind"] !== "swimlane" || !var_core_value_sig3040)) return (var_core_value_sig826A = Ui(var_core_value_sig16C71, var_core_value_sig3040, var_core_value_sig96E6)) == null ? undefined : var_core_value_sig826A.lane["id"];
}
const Zl = {
    id: "board.operation.disband-container",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig1A10, var_core_value_sig271B) => {
      if (!(var_core_value_sig271B != null && var_core_value_sig271B.containerId)) return false;
      let {
          unitId: var_core_value_sigC24D,
          subUnitId: var_core_value_sig793B,
          containerId: var_core_value_sigCAD2
        } = var_core_value_sig271B,
        var_core_value_sigCF20 = var_core_value_sig1A10.get(L),
        var_core_value_sigF733 = var_core_value_sigCF20.getElementData(var_core_value_sigC24D, var_core_value_sig793B),
        var_core_value_sigEABC = var_core_value_sigCF20.getElementOrder(var_core_value_sigC24D, var_core_value_sig793B),
        var_core_value_sig416F = var_core_value_sigF733[var_core_value_sigCAD2];
      if (!var_core_value_sig416F || var_core_value_sig416F.element["type"] !== M.Container || var_core_value_sig416F.element["locked"]) return false;
      let var_core_value_sigF4B7 = var_core_value_sig416F.element["parentId"],
        var_core_value_sig78BE = var_core_value_sigEABC.filter(var_core_value_sig00DE => {
          var var_core_value_sigEF7C;
          return ((var_core_value_sigEF7C = var_core_value_sigF733[var_core_value_sig00DE]) == null ? undefined : var_core_value_sigEF7C.element["parentId"]) === var_core_value_sigCAD2;
        });
      if (!Yl(var_core_value_sigF733, var_core_value_sigF4B7, var_core_value_sig78BE)) return false;
      let var_core_value_sig8BF7 = [],
        var_core_value_sigAD29 = {
          ...var_core_value_sigF733
        },
        var_core_value_sig6588 = (var_core_value_sig07E7, var_core_value_sig6005, var_core_value_sig25A4) => {
          var_core_value_sigAD29[var_core_value_sig07E7.elementId] = {
            ...var_core_value_sig07E7,
            element: var_core_value_sig6005,
            transform: var_core_value_sig25A4
          }, var_core_value_sig8BF7.push({
            id: $.id,
            params: {
              unitId: var_core_value_sigC24D,
              subUnitId: var_core_value_sig793B,
              elementId: var_core_value_sig07E7.elementId,
              element: var_core_value_sig6005,
              transform: var_core_value_sig25A4
            }
          });
        };
      var_core_value_sig78BE.forEach(var_core_value_sigB591 => {
        var var_core_value_sigB272;
        let var_core_value_sig6F52 = var_core_value_sigF733[var_core_value_sigB591];
        if ((var_core_value_sig6F52 == null ? undefined : var_core_value_sig6F52.element["type"]) === M.Connector) return;
        let var_core_value_sig09C4 = (var_core_value_sigB272 = H(var_core_value_sigF733, var_core_value_sigB591)) == null ? undefined : var_core_value_sigB272.worldTransform,
          var_core_value_sig8E3E = U(var_core_value_sigF733, var_core_value_sigB591);
        if (!var_core_value_sig6F52 || !var_core_value_sig09C4) return;
        let var_core_value_sigC3D3 = G(W(var_core_value_sigF733, {
            parentId: var_core_value_sigF4B7,
            worldTransform: Xn(G(var_core_value_sig09C4))
          })),
          var_core_value_sig1451 = Jl({
            ...var_core_value_sig6F52.element,
            parentId: var_core_value_sigF4B7,
            laneId: Xl(var_core_value_sigF733, var_core_value_sigF4B7, var_core_value_sig8E3E)
          }, var_core_value_sigC3D3);
        var_core_value_sig6588(var_core_value_sig6F52, var_core_value_sig1451, var_core_value_sigC3D3);
      }), var_core_value_sig78BE.forEach(var_core_value_sigAD57 => {
        var var_core_value_sig58A8;
        let var_core_value_sigEC1A = var_core_value_sigF733[var_core_value_sigAD57];
        if (!var_core_value_sigEC1A || var_core_value_sigEC1A.element["type"] !== M.Connector) return;
        let var_core_value_sigBDED = (var_core_value_sig58A8 = H(var_core_value_sigF733, var_core_value_sigAD57)) == null ? undefined : var_core_value_sig58A8.worldTransform;
        if (!var_core_value_sigBDED) return;
        let var_core_value_sig4BFF = {
            ...var_core_value_sigEC1A.element,
            parentId: var_core_value_sigF4B7
          },
          var_core_value_sig40E7 = oo(var_core_value_sigAD29, var_core_value_sig4BFF),
          var_core_value_sigEDBA = G(W(var_core_value_sigAD29, {
            parentId: var_core_value_sig40E7.parentId,
            worldTransform: Xn(G(var_core_value_sigBDED))
          })),
          var_core_value_sigE8631 = Jl({
            ...var_core_value_sigEC1A.element,
            parentId: var_core_value_sig40E7.parentId,
            laneId: var_core_value_sig40E7.laneId
          }, var_core_value_sigEDBA);
        var_core_value_sig6588(var_core_value_sigEC1A, var_core_value_sigE8631, var_core_value_sigEDBA);
      });
      let var_core_value_sigE223 = [...var_core_value_sig8BF7, {
          id: dc.id,
          params: {
            unitId: var_core_value_sigC24D,
            subUnitId: var_core_value_sig793B,
            elementId: var_core_value_sigCAD2
          }
        }],
        var_core_value_sigEFBD = [{
          id: Ss.id,
          params: {
            unitId: var_core_value_sigC24D,
            subUnitId: var_core_value_sig793B,
            element: X(var_core_value_sig7D37.deepClone(var_core_value_sig416F.element)),
            insertIndex: var_core_value_sigEABC.indexOf(var_core_value_sigCAD2)
          }
        }, ...var_core_value_sig78BE.map(var_core_value_sig04B4 => {
          let var_core_value_sig1C07 = var_core_value_sigF733[var_core_value_sig04B4];
          return {
            id: $.id,
            params: {
              unitId: var_core_value_sigC24D,
              subUnitId: var_core_value_sig793B,
              elementId: var_core_value_sig04B4,
              element: X(var_core_value_sig7D37.deepClone(var_core_value_sig1C07.element)),
              transform: var_core_value_sig1C07.transform ? {
                ...var_core_value_sig1C07.transform
              } : var_core_value_sig1C07.transform
            }
          };
        })];
      return !No(var_core_value_sigF733, var_core_value_sigE223) || !var_core_value_sig77FC(var_core_value_sigE223, var_core_value_sig1A10.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig1A10.get(var_core_value_sig1F7B).pushUndoRedo({
        unitID: var_core_value_sigC24D,
        redoMutations: var_core_value_sigE223,
        undoMutations: var_core_value_sigEFBD
      }), true);
    }
  },
  Ql = "mindmap",
  $l = "mindmap-container",
  eu = "mindmap-node",
  tu = "mindmap-tree-edge",
  nu = "mindmap-node-decoration";
function ru(var_core_value_sig20EC) {
  return (var_core_value_sig20EC == null ? undefined : var_core_value_sig20EC.custom) ?? null;
}
function iu(var_core_value_sig549B) {
  var var_core_value_sig0FA5;
  return ((var_core_value_sig0FA5 = ru(var_core_value_sig549B)) == null || (var_core_value_sig0FA5 = var_core_value_sig0FA5.structured) == null ? undefined : var_core_value_sig0FA5.modeId) === Ql;
}
function au(var_core_value_sig1B16) {
  var var_core_value_sig86C4;
  let var_core_value_sig2634 = (var_core_value_sig86C4 = ru(var_core_value_sig1B16)) == null ? undefined : var_core_value_sig86C4.structured;
  return (var_core_value_sig2634 == null ? undefined : var_core_value_sig2634.modeId) === "mindmap" && var_core_value_sig2634.semanticRole === "mindmap-node";
}
function ou(var_core_value_sig77A5) {
  var var_core_value_sig258A, var_core_value_sigCE81;
  let var_core_value_sigD09E = ru(var_core_value_sig77A5);
  return (var_core_value_sigD09E == null || (var_core_value_sig258A = var_core_value_sigD09E.structured) == null ? undefined : var_core_value_sig258A.modeId) === "mindmap" && ((var_core_value_sigCE81 = var_core_value_sigD09E.mindmap) == null ? undefined : var_core_value_sigCE81.managed) === true;
}
function su(var_core_value_sigE729, var_core_value_sig1658) {
  let var_core_value_sigFDC0 = ru(var_core_value_sigE729),
    var_core_value_sig0CF8 = var_core_value_sigFDC0 == null ? undefined : var_core_value_sigFDC0.structured,
    var_core_value_sigE365 = var_core_value_sigFDC0 == null ? undefined : var_core_value_sigFDC0.mindmap;
  if ((var_core_value_sig0CF8 == null ? undefined : var_core_value_sig0CF8.modeId) !== "mindmap" || !var_core_value_sigE365) return var_core_value_sigE729;
  let var_core_value_sig411D = var_core_value_sig93D6 => typeof var_core_value_sig93D6 == "string" ? var_core_value_sig1658.get(var_core_value_sig93D6) ?? var_core_value_sig93D6 : var_core_value_sig93D6,
    var_core_value_sigF3E2 = {
      ...var_core_value_sigE365,
      ...(var_core_value_sig0CF8.semanticRole === "mindmap-container" ? {
        rootNodeId: var_core_value_sig411D(var_core_value_sigE365.rootNodeId)
      } : null),
      ...(var_core_value_sig0CF8.semanticRole === "mindmap-node" ? {
        parentNodeId: var_core_value_sig411D(var_core_value_sigE365.parentNodeId)
      } : null),
      ...(var_core_value_sig0CF8.semanticRole === "mindmap-tree-edge" ? {
        parentNodeId: var_core_value_sig411D(var_core_value_sigE365.parentNodeId),
        childNodeId: var_core_value_sig411D(var_core_value_sigE365.childNodeId)
      } : null),
      ...(var_core_value_sig0CF8.semanticRole === "mindmap-node-decoration" ? {
        ownerNodeId: var_core_value_sig411D(var_core_value_sigE365.ownerNodeId)
      } : null)
    };
  return {
    ...var_core_value_sigE729,
    custom: {
      ...(var_core_value_sigE729.custom ?? {}),
      structured: {
        ...var_core_value_sig0CF8,
        structureScopeId: var_core_value_sig411D(var_core_value_sig0CF8.structureScopeId)
      },
      mindmap: var_core_value_sigF3E2
    }
  };
}
const cu = {
  left: 0,
  top: 0,
  width: 640,
  height: 420
};
function lu(var_core_value_sig8429) {
  return var_core_value_sig8429 + "-" + var_core_value_sig90E7(6);
}
function uu(var_core_value_sigDAB4) {
  return {
    left: Number.isFinite(var_core_value_sigDAB4 == null ? undefined : var_core_value_sigDAB4.left) ? var_core_value_sigDAB4.left : cu.left,
    top: Number.isFinite(var_core_value_sigDAB4 == null ? undefined : var_core_value_sigDAB4.top) ? var_core_value_sigDAB4.top : cu.top,
    width: Number.isFinite(var_core_value_sigDAB4 == null ? undefined : var_core_value_sigDAB4.width) && var_core_value_sigDAB4.width > 0 ? var_core_value_sigDAB4.width : cu.width,
    height: Number.isFinite(var_core_value_sigDAB4 == null ? undefined : var_core_value_sigDAB4.height) && var_core_value_sigDAB4.height > 0 ? var_core_value_sigDAB4.height : cu.height
  };
}
function du(var_core_value_sigBE2D) {
  let var_core_value_sig29F9 = var_core_value_sigBE2D.reduce((var_core_value_sigDD05, var_core_value_sig3932) => (var_core_value_sigDD05[var_core_value_sig3932.id] = {
    unitId: "",
    subUnitId: "",
    elementId: var_core_value_sig3932.id,
    element: var_core_value_sig3932
  }, var_core_value_sigDD05), {});
  return var_core_value_sigBE2D.flatMap(var_core_value_sig48B2 => U(var_core_value_sig29F9, var_core_value_sig48B2.id) ?? []);
}
function fu(var_core_value_sigA738) {
  let var_core_value_sigA249 = yi(du(var_core_value_sigA738.elements)),
    var_core_value_sigAE70 = var_core_value_sigA738.bounds ? uu(var_core_value_sigA738.bounds) : null;
  return var_core_value_sigAE70 && var_core_value_sigA249 ? uu(yi([var_core_value_sigAE70, var_core_value_sigA249])) : var_core_value_sigAE70 || uu(var_core_value_sigA249);
}
function pu(var_core_value_sigE3B2) {
  if (!var_core_value_sigE3B2.bounds) return false;
  let var_core_value_sigE76A = uu(var_core_value_sigE3B2.bounds),
    var_core_value_sig540E = fu(var_core_value_sigE3B2);
  return var_core_value_sig540E.left < var_core_value_sigE76A.left || var_core_value_sig540E.top < var_core_value_sigE76A.top || q(var_core_value_sig540E) > q(var_core_value_sigE76A) || J(var_core_value_sig540E) > J(var_core_value_sigE76A);
}
function mu(var_core_value_sig8FE2) {
  return (var_core_value_sig8FE2 == null ? undefined : var_core_value_sig8FE2.type) === M.Container;
}
function hu(var_core_value_sig5B59, var_core_value_sigA74E) {
  return {
    x: var_core_value_sig5B59.x + var_core_value_sigA74E.x,
    y: var_core_value_sig5B59.y + var_core_value_sigA74E.y
  };
}
function gu(var_core_value_sig438B, var_core_value_sigCD4B, var_core_value_sig3102) {
  return var_core_value_sig438B.kind === "free" ? {
    ...var_core_value_sig438B,
    x: var_core_value_sig438B.x + var_core_value_sig3102.x,
    y: var_core_value_sig438B.y + var_core_value_sig3102.y
  } : {
    ...var_core_value_sig438B,
    shapeId: var_core_value_sigCD4B.get(var_core_value_sig438B.shapeId) ?? var_core_value_sig438B.shapeId,
    ...(var_core_value_sig438B.fallbackPoint ? {
      fallbackPoint: hu(var_core_value_sig438B.fallbackPoint, var_core_value_sig3102)
    } : {})
  };
}
function _u(var_core_value_sig46AF, var_core_value_sig4A74) {
  return {
    ...var_core_value_sig46AF,
    x: var_core_value_sig46AF.x + var_core_value_sig4A74.x,
    y: var_core_value_sig46AF.y + var_core_value_sig4A74.y
  };
}
function vu(var_core_value_sig63FB, var_core_value_sigADD7, var_core_value_sig49E0) {
  return {
    ...var_core_value_sig63FB,
    x: var_core_value_sig63FB.x + var_core_value_sig49E0.x,
    y: var_core_value_sig63FB.y + var_core_value_sig49E0.y,
    ...(var_core_value_sig63FB.endpoint ? {
      endpoint: gu(var_core_value_sig63FB.endpoint, var_core_value_sigADD7, var_core_value_sig49E0)
    } : {})
  };
}
function yu(var_core_value_sigAFAA, var_core_value_sig0D2F) {
  return {
    ...var_core_value_sigAFAA,
    x: var_core_value_sigAFAA.x + var_core_value_sig0D2F.x,
    y: var_core_value_sigAFAA.y + var_core_value_sig0D2F.y
  };
}
function bu(var_core_value_sig43F41, var_core_value_sigEA921, var_core_value_sig125D) {
  var var_core_value_sig1FF9, var_core_value_sig85CF, var_core_value_sig4F23, var_core_value_sigC116;
  return {
    ...var_core_value_sig43F41,
    connectorData: {
      ...var_core_value_sig43F41.connectorData,
      start: gu(var_core_value_sig43F41.connectorData["start"], var_core_value_sigEA921, var_core_value_sig125D),
      end: gu(var_core_value_sig43F41.connectorData["end"], var_core_value_sigEA921, var_core_value_sig125D),
      waypoints: (var_core_value_sig1FF9 = var_core_value_sig43F41.connectorData["waypoints"]) == null ? undefined : var_core_value_sig1FF9.map(var_core_value_sig57DF => _u(var_core_value_sig57DF, var_core_value_sig125D)),
      orthogonalData: var_core_value_sig43F41.connectorData["orthogonalData"] ? {
        ...var_core_value_sig43F41.connectorData["orthogonalData"],
        routePoints: (var_core_value_sig85CF = var_core_value_sig43F41.connectorData["orthogonalData"].routePoints) == null ? undefined : var_core_value_sig85CF.map(var_core_value_sigC985 => _u(var_core_value_sigC985, var_core_value_sig125D))
      } : var_core_value_sig43F41.connectorData["orthogonalData"],
      curveData: var_core_value_sig43F41.connectorData["curveData"] ? {
        ...var_core_value_sig43F41.connectorData["curveData"],
        anchors: (var_core_value_sig4F23 = var_core_value_sig43F41.connectorData["curveData"].anchors) == null ? undefined : var_core_value_sig4F23.map(var_core_value_sig8DA6 => vu(var_core_value_sig8DA6, var_core_value_sigEA921, var_core_value_sig125D)),
        controls: (var_core_value_sigC116 = var_core_value_sig43F41.connectorData["curveData"].controls) == null ? undefined : var_core_value_sigC116.map(var_core_value_sigCA69 => yu(var_core_value_sigCA69, var_core_value_sig125D))
      } : var_core_value_sig43F41.connectorData["curveData"]
    }
  };
}
function xu(var_core_value_sig3408, var_core_value_sig4B4D) {
  return su(var_core_value_sig3408.type === M.Group ? {
    ...var_core_value_sig3408,
    children: var_core_value_sig3408.children["map"](var_core_value_sigB77C => var_core_value_sig4B4D.get(var_core_value_sigB77C) ?? var_core_value_sigB77C)
  } : var_core_value_sig3408, var_core_value_sig4B4D);
}
function Su(var_core_value_sig93D7) {
  let var_core_value_sigFED2 = fu(var_core_value_sig93D7.draft),
    var_core_value_sig7392 = var_core_value_sig93D7.createId ?? lu,
    var_core_value_sig878B = var_core_value_sig7392("container"),
    var_core_value_sig52D0 = new Map(),
    var_core_value_sig3B18 = new Map(var_core_value_sig93D7.draft["elements"].map(var_core_value_sig9AFF => [var_core_value_sig9AFF.id, var_core_value_sig9AFF]));
  var_core_value_sig93D7.draft["elements"].forEach(var_core_value_sig3545 => {
    var_core_value_sig52D0.set(var_core_value_sig3545.id, var_core_value_sig7392(var_core_value_sig3545.id));
  });
  let var_core_value_sigCA31 = fa({
      id: var_core_value_sig878B,
      title: var_core_value_sig93D7.containerName ?? var_core_value_sig93D7.draft["title"],
      left: var_core_value_sig93D7.position["left"],
      top: var_core_value_sig93D7.position["top"],
      width: var_core_value_sigFED2.width,
      height: var_core_value_sigFED2.height
    }),
    var_core_value_sig9C20 = var_core_value_sigCA31.containerData["padding"],
    var_core_value_sig7435 = var_core_value_sigCA31.containerData["titleVisible"] === false ? 0 : var_core_value_sigCA31.containerData["headerSize"] ?? 0;
  var_core_value_sigCA31.transform["width"] = var_core_value_sigFED2.width + var_core_value_sig9C20.left + var_core_value_sig9C20.right, var_core_value_sigCA31.transform["height"] = var_core_value_sigFED2.height + var_core_value_sig7435 + var_core_value_sig9C20.top + var_core_value_sig9C20.bottom;
  let var_core_value_sig9C58 = {
      x: var_core_value_sig93D7.position["left"] + var_core_value_sig9C20.left - var_core_value_sigFED2.left,
      y: var_core_value_sig93D7.position["top"] + var_core_value_sig7435 + var_core_value_sig9C20.top - var_core_value_sigFED2.top
    },
    var_core_value_sig676C = var_core_value_sig93D7.draft["elements"].map(var_core_value_sig5EE4 => {
      let var_core_value_sig7EAB = var_core_value_sig7D37.deepClone(var_core_value_sig5EE4),
        var_core_value_sig56B9 = var_core_value_sig5EE4.parentId ? var_core_value_sig3B18.get(var_core_value_sig5EE4.parentId) : undefined,
        var_core_value_sig90CF = !!var_core_value_sig5EE4.parentId && mu(var_core_value_sig56B9) && var_core_value_sig52D0.has(var_core_value_sig5EE4.parentId);
      return var_core_value_sig7EAB.id = var_core_value_sig52D0.get(var_core_value_sig5EE4.id), var_core_value_sig7EAB.parentId = var_core_value_sig90CF ? var_core_value_sig52D0.get(var_core_value_sig5EE4.parentId) : var_core_value_sig878B, var_core_value_sig90CF || (var_core_value_sig7EAB.transform = {
        ...var_core_value_sig7EAB.transform,
        left: (var_core_value_sig7EAB.transform["left"] ?? 0) + var_core_value_sig9C58.x - var_core_value_sig93D7.position["left"],
        top: (var_core_value_sig7EAB.transform["top"] ?? 0) + var_core_value_sig9C58.y - var_core_value_sig93D7.position["top"]
      }), var_core_value_sig7EAB.type === M.Connector && (var_core_value_sig7EAB = bu(var_core_value_sig7EAB, var_core_value_sig52D0, var_core_value_sig9C58)), xu(var_core_value_sig7EAB, var_core_value_sig52D0);
    }),
    var_core_value_sig9D47 = {
      left: var_core_value_sig93D7.position["left"],
      top: var_core_value_sig93D7.position["top"],
      width: q({
        left: var_core_value_sig93D7.position["left"],
        top: var_core_value_sig93D7.position["top"],
        width: var_core_value_sigCA31.transform["width"] ?? 0,
        height: var_core_value_sigCA31.transform["height"] ?? 0
      }) - var_core_value_sig93D7.position["left"],
      height: J({
        left: var_core_value_sig93D7.position["left"],
        top: var_core_value_sig93D7.position["top"],
        width: var_core_value_sigCA31.transform["width"] ?? 0,
        height: var_core_value_sigCA31.transform["height"] ?? 0
      }) - var_core_value_sig93D7.position["top"]
    };
  return {
    containerId: var_core_value_sig878B,
    elements: [var_core_value_sigCA31, ...var_core_value_sig676C],
    elementIdMap: Object.fromEntries(var_core_value_sig52D0),
    bounds: var_core_value_sig9D47
  };
}
const Cu = {
    id: "board.operation.insert-draft",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigA6E3, var_core_value_sig34CC) => {
      if (!var_core_value_sig34CC || var_core_value_sig34CC.draft["elements"].length === 0) return false;
      let var_core_value_sig67F5 = Su({
        draft: var_core_value_sig34CC.draft,
        containerName: var_core_value_sig34CC.containerName,
        position: var_core_value_sig34CC.position
      });
      return var_core_value_sigA6E3.get(var_core_value_sig88BA).syncExecuteCommand(al.id, {
        unitId: var_core_value_sig34CC.unitId,
        subUnitId: var_core_value_sig34CC.subUnitId,
        elements: var_core_value_sig67F5.elements,
        insertIndex: var_core_value_sig34CC.insertIndex
      }) ? var_core_value_sig67F5 : false;
    }
  },
  wu = {
    id: "board.operation.insert-table",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigED1D, var_core_value_sig5A38) => !var_core_value_sig5A38 || !var_core_value_sig5A38.unitId || !var_core_value_sig5A38.subUnitId || !Number.isFinite(var_core_value_sig5A38.left) || !Number.isFinite(var_core_value_sig5A38.top) ? false : var_core_value_sigED1D.get(hs).insertTable(var_core_value_sig5A38)
  },
  Tu = {
    id: "board.operation.remove-element",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig4E8A, var_core_value_sigE618) => !var_core_value_sigE618 || !var_core_value_sigE618.elementId ? false : ks.handler(var_core_value_sig4E8A, {
      unitId: var_core_value_sigE618.unitId,
      subUnitId: var_core_value_sigE618.subUnitId,
      elementIds: [var_core_value_sigE618.elementId]
    })
  };
function Eu(var_core_value_sig2700) {
  return [...var_core_value_sig2700].sort((var_core_value_sigA3861, var_core_value_sigCD6E) => var_core_value_sigA3861.order - var_core_value_sigCD6E.order).map((var_core_value_sigFD9D, var_core_value_sigA2A4) => ({
    ...var_core_value_sigFD9D,
    order: var_core_value_sigA2A4
  }));
}
function Du(var_core_value_sigD319, var_core_value_sig5E9A) {
  let var_core_value_sig52E2 = new Map(var_core_value_sig5E9A.map(var_core_value_sigA1AC => [var_core_value_sigA1AC.id, var_core_value_sigA1AC]));
  return var_core_value_sigD319.lanes["some"](var_core_value_sig6180 => {
    if (var_core_value_sig6180.locked !== true) return false;
    let var_core_value_sigB93D = var_core_value_sig52E2.get(var_core_value_sig6180.id);
    return !var_core_value_sigB93D || var_core_value_sigB93D.title !== var_core_value_sig6180.title || var_core_value_sigB93D.order !== var_core_value_sig6180.order || var_core_value_sigB93D.size !== var_core_value_sig6180.size || var_core_value_sigB93D.minSize !== var_core_value_sig6180.minSize || var_core_value_sigB93D.locked !== var_core_value_sig6180.locked || var_core_value_sigB93D.collapsed !== var_core_value_sig6180.collapsed;
  });
}
function Ou(var_core_value_sig00DD, var_core_value_sigA864, var_core_value_sig0E68, var_core_value_sig2889, var_core_value_sigB3EE1 = var_core_value_sig0E68.transform) {
  return {
    id: $.id,
    params: {
      unitId: var_core_value_sig00DD,
      subUnitId: var_core_value_sigA864,
      elementId: var_core_value_sig0E68.elementId,
      element: X(var_core_value_sig7D37.deepClone(var_core_value_sig2889)),
      transform: var_core_value_sigB3EE1 && {
        ...var_core_value_sigB3EE1
      }
    }
  };
}
function ku(var_core_value_sig0E3B) {
  return {
    left: var_core_value_sig0E3B.left ?? 0,
    top: var_core_value_sig0E3B.top ?? 0,
    width: var_core_value_sig0E3B.width ?? 0,
    height: var_core_value_sig0E3B.height ?? 0,
    angle: var_core_value_sig0E3B.rotation ?? 0,
    flipX: var_core_value_sig0E3B.flipX,
    flipY: var_core_value_sig0E3B.flipY
  };
}
function Au(var_core_value_sigDCD1, var_core_value_sigA77C, var_core_value_sigEF78, var_core_value_sigA7F8, var_core_value_sig007E, var_core_value_sigD261) {
  var var_core_value_sigE75A, var_core_value_sigEC28;
  if (!var_core_value_sigD261) return {
    x: 0,
    y: 0
  };
  let var_core_value_sig7870 = U(var_core_value_sigDCD1, var_core_value_sigA77C);
  if (!var_core_value_sig7870) return {
    x: 0,
    y: 0
  };
  let var_core_value_sig7C02 = (var_core_value_sigE75A = Fi(var_core_value_sigEF78, var_core_value_sig7870).find(var_core_value_sigB17C => var_core_value_sigB17C.lane["id"] === var_core_value_sig007E)) == null ? undefined : var_core_value_sigE75A.bounds,
    var_core_value_sig5489 = (var_core_value_sigEC28 = Fi(var_core_value_sigA7F8, var_core_value_sig7870).find(var_core_value_sig69B6 => var_core_value_sig69B6.lane["id"] === var_core_value_sigD261)) == null ? undefined : var_core_value_sigEC28.bounds;
  return !var_core_value_sig7C02 || !var_core_value_sig5489 ? {
    x: 0,
    y: 0
  } : {
    x: var_core_value_sig5489.left - var_core_value_sig7C02.left,
    y: var_core_value_sig5489.top - var_core_value_sig7C02.top
  };
}
function ju(var_core_value_sig632D, var_core_value_sigE6D3, var_core_value_sig2C1F) {
  let var_core_value_sigF27F = var_core_value_sig2C1F.x !== 0 || var_core_value_sig2C1F.y !== 0;
  if (var_core_value_sig632D.element["type"] === M.Connector) {
    let var_core_value_sig708D = var_core_value_sigF27F ? ni({
      ...var_core_value_sig632D.element,
      laneId: var_core_value_sigE6D3,
      transform: {
        ...var_core_value_sig632D.element["transform"],
        left: (var_core_value_sig632D.element["transform"].left ?? 0) + var_core_value_sig2C1F.x,
        top: (var_core_value_sig632D.element["transform"].top ?? 0) + var_core_value_sig2C1F.y
      }
    }, var_core_value_sig2C1F) : {
      ...var_core_value_sig632D.element,
      laneId: var_core_value_sigE6D3
    };
    return {
      element: var_core_value_sig708D,
      transform: fi(var_core_value_sig708D.transform)
    };
  }
  let var_core_value_sig56FA = {
    ...var_core_value_sig632D.element,
    laneId: var_core_value_sigE6D3,
    transform: var_core_value_sigF27F ? {
      ...var_core_value_sig632D.element["transform"],
      left: (var_core_value_sig632D.element["transform"].left ?? 0) + var_core_value_sig2C1F.x,
      top: (var_core_value_sig632D.element["transform"].top ?? 0) + var_core_value_sig2C1F.y
    } : var_core_value_sig632D.element["transform"]
  };
  return {
    element: var_core_value_sig56FA,
    transform: var_core_value_sigF27F ? ku(var_core_value_sig56FA.transform) : var_core_value_sig632D.transform
  };
}
function Mu(var_core_value_sig6442, var_core_value_sig3CA3, var_core_value_sigC1AB) {
  let var_core_value_sig5E6D = new Set(),
    var_core_value_sigA1F4 = var_core_value_sigC1AB.map(var_core_value_sig1ED2 => var_core_value_sig1ED2.elementId);
  return tn(var_core_value_sig6442, [...var_core_value_sig3CA3], var_core_value_sigA1F4).forEach(var_core_value_sig94C1 => var_core_value_sig5E6D.add(var_core_value_sig94C1)), Object.values(var_core_value_sig6442).forEach(var_core_value_sigABAC => {
    !Q(var_core_value_sigABAC) || var_core_value_sig5E6D.has(var_core_value_sigABAC.elementId) || Qa(var_core_value_sigABAC.element).some(var_core_value_sig2162 => var_core_value_sig5E6D.has(var_core_value_sig2162)) && var_core_value_sig5E6D.add(var_core_value_sigABAC.elementId);
  }), var_core_value_sig3CA3.filter(var_core_value_sigFAE6 => var_core_value_sig5E6D.has(var_core_value_sigFAE6));
}
const Nu = {
  id: "board.operation.remove-swimlane-lane",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig0CE9, var_core_value_sig3281) => {
    if (!var_core_value_sig3281 || !var_core_value_sig3281.containerId || !var_core_value_sig3281.laneId) return false;
    let {
        unitId: var_core_value_sig486A,
        subUnitId: var_core_value_sig7061,
        containerId: var_core_value_sig795D,
        laneId: var_core_value_sigD358
      } = var_core_value_sig3281,
      var_core_value_sig42D2 = var_core_value_sig3281.contentPolicy ?? "reject",
      var_core_value_sigB02D = var_core_value_sig0CE9.get(L),
      var_core_value_sig5235 = var_core_value_sigB02D.getElementData(var_core_value_sig486A, var_core_value_sig7061),
      var_core_value_sig36851 = var_core_value_sig5235[var_core_value_sig795D],
      var_core_value_sig06F2 = var_core_value_sig36851 == null ? undefined : var_core_value_sig36851.element;
    if (!var_core_value_sig36851 || (var_core_value_sig06F2 == null ? undefined : var_core_value_sig06F2.type) !== M.Container || var_core_value_sig06F2.locked === true || var_core_value_sig06F2.containerData["behavior"].membershipLocked || var_core_value_sig06F2.containerData["kind"] !== "swimlane" || !var_core_value_sig06F2.containerData["swimlane"]) return false;
    let var_core_value_sigA50E = var_core_value_sig06F2.containerData["swimlane"],
      var_core_value_sigCE3D = var_core_value_sigA50E.lanes["find"](var_core_value_sig06AC => var_core_value_sig06AC.id === var_core_value_sigD358);
    if (!var_core_value_sigCE3D || var_core_value_sigCE3D.locked === true || var_core_value_sig42D2 === "move-to-lane" && (!var_core_value_sig3281.targetLaneId || var_core_value_sig3281.targetLaneId === var_core_value_sigD358 || !var_core_value_sigA50E.lanes["some"](var_core_value_sig57E2 => var_core_value_sig57E2.id === var_core_value_sig3281.targetLaneId && var_core_value_sig57E2.locked !== true))) return false;
    let var_core_value_sigF82C = Object.values(var_core_value_sig5235).filter(var_core_value_sig01FC => var_core_value_sig01FC.element["parentId"] === var_core_value_sig795D && var_core_value_sig01FC.element["laneId"] === var_core_value_sigD358);
    if (var_core_value_sigF82C.some(var_core_value_sig10FC => var_core_value_sig10FC.element["locked"] === true) || var_core_value_sigF82C.length > 0 && var_core_value_sig42D2 !== "promote-to-pool" && var_core_value_sig42D2 !== "move-to-lane" && var_core_value_sig42D2 !== "delete-content") return false;
    let var_core_value_sig0809 = var_core_value_sigB02D.getElementOrder(var_core_value_sig486A, var_core_value_sig7061),
      var_core_value_sig0FDC = Eu(var_core_value_sigA50E.lanes["filter"](var_core_value_sig5374 => var_core_value_sig5374.id !== var_core_value_sigD358));
    if (Du(var_core_value_sigA50E, var_core_value_sig0FDC)) return false;
    let var_core_value_sig28AB = X({
        ...var_core_value_sig06F2,
        containerData: {
          ...var_core_value_sig06F2.containerData,
          swimlane: {
            ...var_core_value_sigA50E,
            lanes: var_core_value_sig0FDC
          }
        }
      }),
      var_core_value_sigCEEB = var_core_value_sig42D2 === "move-to-lane" ? Au(var_core_value_sig5235, var_core_value_sig795D, var_core_value_sig06F2, var_core_value_sig28AB, var_core_value_sigD358, var_core_value_sig3281.targetLaneId) : {
        x: 0,
        y: 0
      },
      var_core_value_sigF064 = var_core_value_sig42D2 === "delete-content" ? var_core_value_sigF82C.map(var_core_value_sigB66D => ({
        id: ws.id,
        params: {
          unitId: var_core_value_sig486A,
          subUnitId: var_core_value_sig7061,
          elementId: var_core_value_sigB66D.elementId,
          elementType: var_core_value_sigB66D.element["type"],
          ...(var_core_value_sigB66D.element["type"] === M.Container ? {
            containerKind: var_core_value_sigB66D.element["containerData"].kind
          } : {})
        }
      })) : var_core_value_sigF82C.map(var_core_value_sigD0F0 => {
        let var_core_value_sig8E31 = ju(var_core_value_sigD0F0, var_core_value_sig42D2 === "move-to-lane" ? var_core_value_sig3281.targetLaneId : undefined, var_core_value_sigCEEB);
        return Ou(var_core_value_sig486A, var_core_value_sig7061, var_core_value_sigD0F0, var_core_value_sig8E31.element, var_core_value_sig8E31.transform);
      }),
      var_core_value_sig2D5A = var_core_value_sig42D2 === "delete-content" ? Mu(var_core_value_sig5235, var_core_value_sig0809, var_core_value_sigF82C).map(var_core_value_sig8339 => var_core_value_sig5235[var_core_value_sig8339]).filter(var_core_value_sigA01E => !!var_core_value_sigA01E).map(var_core_value_sigA41E => ({
        id: Ss.id,
        params: {
          unitId: var_core_value_sig486A,
          subUnitId: var_core_value_sig7061,
          element: var_core_value_sig7D37.deepClone(var_core_value_sigA41E.element)
        }
      })) : var_core_value_sigF82C.map(var_core_value_sig939C => Ou(var_core_value_sig486A, var_core_value_sig7061, var_core_value_sig939C, var_core_value_sig939C.element)).reverse();
    return var_core_value_sigF064.push(Ou(var_core_value_sig486A, var_core_value_sig7061, var_core_value_sig36851, var_core_value_sig28AB)), var_core_value_sig2D5A.unshift(Ou(var_core_value_sig486A, var_core_value_sig7061, var_core_value_sig36851, var_core_value_sig06F2)), !No(var_core_value_sig5235, var_core_value_sigF064) || !var_core_value_sig77FC(var_core_value_sigF064, var_core_value_sig0CE9.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig0CE9.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig486A,
      redoMutations: var_core_value_sigF064,
      undoMutations: var_core_value_sig2D5A
    }), true);
  }
};
function Pu(var_core_value_sig0D17, var_core_value_sigF02B, var_core_value_sigCC5B) {
  let var_core_value_sig6C53 = new Set(var_core_value_sigF02B),
    var_core_value_sigFCAC = var_core_value_sig0D17.filter(var_core_value_sigA49E => var_core_value_sig6C53.has(var_core_value_sigA49E));
  if (var_core_value_sigFCAC.length === 0) return var_core_value_sig0D17;
  if (var_core_value_sigCC5B === "front" || var_core_value_sigCC5B === "back") {
    let var_core_value_sig6DEB = var_core_value_sig0D17.filter(var_core_value_sig2EAD => !var_core_value_sig6C53.has(var_core_value_sig2EAD));
    return var_core_value_sigCC5B === "front" ? [...var_core_value_sig6DEB, ...var_core_value_sigFCAC] : [...var_core_value_sigFCAC, ...var_core_value_sig6DEB];
  }
  let var_core_value_sig6740 = [...var_core_value_sig0D17];
  if (var_core_value_sigCC5B === "forward") {
    for (let var_core_value_sig6774 = var_core_value_sig6740.length - 2; var_core_value_sig6774 >= 0; var_core_value_sig6774--) var_core_value_sig6C53.has(var_core_value_sig6740[var_core_value_sig6774]) && !var_core_value_sig6C53.has(var_core_value_sig6740[var_core_value_sig6774 + 1]) && ([var_core_value_sig6740[var_core_value_sig6774], var_core_value_sig6740[var_core_value_sig6774 + 1]] = [var_core_value_sig6740[var_core_value_sig6774 + 1], var_core_value_sig6740[var_core_value_sig6774]]);
    return var_core_value_sig6740;
  }
  for (let var_core_value_sig2F0D = 1; var_core_value_sig2F0D < var_core_value_sig6740.length; var_core_value_sig2F0D++) var_core_value_sig6C53.has(var_core_value_sig6740[var_core_value_sig2F0D]) && !var_core_value_sig6C53.has(var_core_value_sig6740[var_core_value_sig2F0D - 1]) && ([var_core_value_sig6740[var_core_value_sig2F0D - 1], var_core_value_sig6740[var_core_value_sig2F0D]] = [var_core_value_sig6740[var_core_value_sig2F0D], var_core_value_sig6740[var_core_value_sig2F0D - 1]]);
  return var_core_value_sig6740;
}
function Fu(var_core_value_sig89A9, var_core_value_sig3BD1, var_core_value_sig1B07) {
  let var_core_value_sigA093 = new Set(var_core_value_sig3BD1),
    var_core_value_sig4B13 = var_core_value_sig89A9.filter(var_core_value_sig5141 => var_core_value_sigA093.has(var_core_value_sig5141));
  if (var_core_value_sig4B13.length === 0) return var_core_value_sig89A9;
  let var_core_value_sigAF5A = var_core_value_sig89A9.filter(var_core_value_sigA9E0 => !var_core_value_sigA093.has(var_core_value_sigA9E0));
  return var_core_value_sigAF5A.splice(var_core_value_sigCF5A(var_core_value_sig1B07, var_core_value_sig89A9.length), 0, ...var_core_value_sig4B13), var_core_value_sigAF5A;
}
const Iu = {
  id: "board.operation.reorder-elements",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sigE64B, var_core_value_sigDC7E) => {
    if (!var_core_value_sigDC7E || var_core_value_sigDC7E.elementIds["length"] === 0) return false;
    let {
        unitId: var_core_value_sig1384,
        subUnitId: var_core_value_sig3397,
        elementIds: var_core_value_sig3918
      } = var_core_value_sigDC7E,
      var_core_value_sigA952 = var_core_value_sigE64B.get(L).getElementOrder(var_core_value_sig1384, var_core_value_sig3397),
      var_core_value_sigC0961 = var_core_value_sigDC7E.zOrder === undefined ? Pu(var_core_value_sigA952, var_core_value_sig3918, var_core_value_sigDC7E.placement) : Fu(var_core_value_sigA952, var_core_value_sig3918, var_core_value_sigDC7E.zOrder);
    if (var_core_value_sigC0961.length !== var_core_value_sigA952.length || var_core_value_sigC0961.every((var_core_value_sig751D, var_core_value_sig2E9A) => var_core_value_sig751D === var_core_value_sigA952[var_core_value_sig2E9A])) return false;
    let var_core_value_sig2A1C = {
        unitId: var_core_value_sig1384,
        subUnitId: var_core_value_sig3397,
        elementIds: var_core_value_sigC0961
      },
      var_core_value_sig2D1C = {
        unitId: var_core_value_sig1384,
        subUnitId: var_core_value_sig3397,
        elementIds: var_core_value_sigA952
      };
    return var_core_value_sigE64B.get(var_core_value_sig88BA).syncExecuteCommand(fc.id, var_core_value_sig2A1C) ? (var_core_value_sigE64B.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig1384,
      redoMutations: [{
        id: fc.id,
        params: var_core_value_sig2A1C
      }],
      undoMutations: [{
        id: fc.id,
        params: var_core_value_sig2D1C
      }]
    }), true) : false;
  }
};
function Lu(var_core_value_sig0EDB1, var_core_value_sig2C5D, var_core_value_sigCC49) {
  let var_core_value_sigFA56 = var_core_value_sig0EDB1.indexOf(var_core_value_sig2C5D),
    var_core_value_sig764E = var_core_value_sig0EDB1.indexOf(var_core_value_sigCC49);
  if (var_core_value_sigFA56 < 0 || var_core_value_sig764E < 0 || var_core_value_sigFA56 === var_core_value_sig764E) return var_core_value_sig0EDB1;
  let var_core_value_sigBB1B = [...var_core_value_sig0EDB1],
    [var_core_value_sigB3C1] = var_core_value_sigBB1B.splice(var_core_value_sigFA56, 1),
    var_core_value_sigB6FA = var_core_value_sigBB1B.indexOf(var_core_value_sigCC49);
  return var_core_value_sigBB1B.splice(var_core_value_sigB6FA + +(var_core_value_sigFA56 < var_core_value_sig764E), 0, var_core_value_sigB3C1), var_core_value_sigBB1B;
}
function Ru(var_core_value_sig6C1F, var_core_value_sig0707) {
  return var_core_value_sig6C1F.length === var_core_value_sig0707.length && var_core_value_sig6C1F.every((var_core_value_sigE105, var_core_value_sig0BD6) => var_core_value_sigE105 === var_core_value_sig0707[var_core_value_sig0BD6]);
}
function zu(var_core_value_sig0E4C, var_core_value_sig8CE7) {
  return Object.values(var_core_value_sig0E4C).map(var_core_value_sig3070 => var_core_value_sig3070.element).find(var_core_value_sigC66D => var_core_value_sigC66D.type === M.Group && var_core_value_sigC66D.children["includes"](var_core_value_sig8CE7));
}
function Bu(var_core_value_sig7BBA, var_core_value_sig1B72, var_core_value_sigBB0A) {
  var var_core_value_sig15C5;
  let var_core_value_sig81A0 = (var_core_value_sig15C5 = var_core_value_sig7BBA[var_core_value_sigBB0A]) == null ? undefined : var_core_value_sig15C5.element;
  if (!var_core_value_sig81A0) return null;
  let var_core_value_sig1E36 = zu(var_core_value_sig7BBA, var_core_value_sigBB0A);
  if (var_core_value_sig1E36) return {
    type: "group",
    parentId: var_core_value_sig1E36.id,
    order: var_core_value_sig1E36.children,
    parentElement: var_core_value_sig1E36
  };
  let var_core_value_sigFFDE = var_core_value_sig81A0.parentId;
  return {
    type: "order",
    parentId: var_core_value_sigFFDE,
    order: var_core_value_sigFFDE ? var_core_value_sig1B72.filter(var_core_value_sig8EC51 => {
      var var_core_value_sig1056;
      return ((var_core_value_sig1056 = var_core_value_sig7BBA[var_core_value_sig8EC51]) == null ? undefined : var_core_value_sig1056.element["parentId"]) === var_core_value_sigFFDE;
    }) : var_core_value_sig1B72.filter(var_core_value_sig6EE5 => {
      var var_core_value_sig9DD9;
      let var_core_value_sig09AC = (var_core_value_sig9DD9 = var_core_value_sig7BBA[var_core_value_sig6EE5]) == null ? undefined : var_core_value_sig9DD9.element;
      return !!var_core_value_sig09AC && !var_core_value_sig09AC.parentId && !zu(var_core_value_sig7BBA, var_core_value_sig6EE5);
    })
  };
}
function Vu(var_core_value_sigD7E9, var_core_value_sigA79E, var_core_value_sig9630, var_core_value_sigFA2E) {
  return {
    unitId: var_core_value_sigD7E9,
    subUnitId: var_core_value_sigA79E,
    elementId: var_core_value_sig9630,
    element: var_core_value_sigFA2E,
    allowInactiveTarget: true,
    allowLockedTarget: true
  };
}
function Hu(var_core_value_sigF20F, var_core_value_sigF12E, var_core_value_sigF63F) {
  let var_core_value_sigA250 = new Map(var_core_value_sigF63F.map((var_core_value_sig1613, var_core_value_sigADC6) => [var_core_value_sig1613, var_core_value_sigADC6])),
    var_core_value_sig8647 = new Set(var_core_value_sigF12E),
    var_core_value_sig77DC = var_core_value_sigF12E.filter(var_core_value_sig4620 => var_core_value_sigA250.has(var_core_value_sig4620)).sort((var_core_value_sig07FB, var_core_value_sig617E) => var_core_value_sigA250.get(var_core_value_sig07FB) - var_core_value_sigA250.get(var_core_value_sig617E)),
    var_core_value_sigEA821 = 0;
  return var_core_value_sigF20F.map(var_core_value_sigC85E => var_core_value_sig8647.has(var_core_value_sigC85E) ? var_core_value_sig77DC[var_core_value_sigEA821++] : var_core_value_sigC85E);
}
const Uu = {
  id: "board.operation.reorder-object-list-element",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sigC979, var_core_value_sig8E10) => {
    if (!var_core_value_sig8E10 || var_core_value_sig8E10.sourceElementId === var_core_value_sig8E10.targetElementId) return false;
    let {
        unitId: var_core_value_sigD1E7,
        subUnitId: var_core_value_sig240A,
        sourceElementId: var_core_value_sig756B,
        targetElementId: var_core_value_sig41FB
      } = var_core_value_sig8E10,
      var_core_value_sigE071 = var_core_value_sigC979.get(L),
      var_core_value_sigEF01 = var_core_value_sigE071.getElementData(var_core_value_sigD1E7, var_core_value_sig240A),
      var_core_value_sig6AB2 = var_core_value_sigE071.getElementOrder(var_core_value_sigD1E7, var_core_value_sig240A),
      var_core_value_sig4971 = Bu(var_core_value_sigEF01, var_core_value_sig6AB2, var_core_value_sig756B),
      var_core_value_sigA887 = Bu(var_core_value_sigEF01, var_core_value_sig6AB2, var_core_value_sig41FB);
    if (!var_core_value_sig4971 || !var_core_value_sigA887 || var_core_value_sig4971.type !== var_core_value_sigA887.type || var_core_value_sig4971.parentId !== var_core_value_sigA887.parentId) return false;
    let var_core_value_sigC142 = Lu(var_core_value_sig4971.order, var_core_value_sig756B, var_core_value_sig41FB);
    if (Ru(var_core_value_sig4971.order, var_core_value_sigC142)) return false;
    let var_core_value_sigEA08 = var_core_value_sigC979.get(var_core_value_sig88BA),
      var_core_value_sig1163,
      var_core_value_sig7BFB;
    if (var_core_value_sig4971.type === "group" && var_core_value_sig4971.parentElement) {
      let var_core_value_sig82931 = {
          ...var_core_value_sig7D37.deepClone(var_core_value_sig4971.parentElement),
          children: var_core_value_sigC142
        },
        var_core_value_sig050D = Vu(var_core_value_sigD1E7, var_core_value_sig240A, var_core_value_sig4971.parentElement["id"], var_core_value_sig82931),
        var_core_value_sig37AE = Vu(var_core_value_sigD1E7, var_core_value_sig240A, var_core_value_sig4971.parentElement["id"], var_core_value_sig7D37.deepClone(var_core_value_sig4971.parentElement)),
        var_core_value_sig5B51 = Hu(var_core_value_sig6AB2, var_core_value_sig4971.order, var_core_value_sigC142);
      var_core_value_sig1163 = [{
        id: $.id,
        params: var_core_value_sig050D
      }, {
        id: fc.id,
        params: {
          unitId: var_core_value_sigD1E7,
          subUnitId: var_core_value_sig240A,
          elementIds: var_core_value_sig5B51
        }
      }], var_core_value_sig7BFB = [{
        id: fc.id,
        params: {
          unitId: var_core_value_sigD1E7,
          subUnitId: var_core_value_sig240A,
          elementIds: var_core_value_sig6AB2
        }
      }, {
        id: $.id,
        params: var_core_value_sig37AE
      }];
    } else {
      let var_core_value_sig64FF = {
          unitId: var_core_value_sigD1E7,
          subUnitId: var_core_value_sig240A,
          elementIds: Hu(var_core_value_sig6AB2, var_core_value_sig4971.order, var_core_value_sigC142)
        },
        var_core_value_sig86F4 = {
          unitId: var_core_value_sigD1E7,
          subUnitId: var_core_value_sig240A,
          elementIds: var_core_value_sig6AB2
        };
      var_core_value_sig1163 = [{
        id: fc.id,
        params: var_core_value_sig64FF
      }], var_core_value_sig7BFB = [{
        id: fc.id,
        params: var_core_value_sig86F4
      }];
    }
    return var_core_value_sig77FC(var_core_value_sig1163, var_core_value_sigEA08).result ? (var_core_value_sigC979.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sigD1E7,
      redoMutations: var_core_value_sig1163,
      undoMutations: var_core_value_sig7BFB
    }), true) : false;
  }
};
function Wu(var_core_value_sigE065, var_core_value_sig1B83) {
  return {
    ...var_core_value_sigE065,
    transform: {
      ...var_core_value_sigE065.transform,
      left: var_core_value_sig1B83.left,
      top: var_core_value_sig1B83.top,
      width: var_core_value_sig1B83.width,
      height: var_core_value_sig1B83.height,
      rotation: var_core_value_sig1B83.angle,
      flipX: var_core_value_sig1B83.flipX,
      flipY: var_core_value_sig1B83.flipY
    }
  };
}
function Gu(var_core_value_sig1F85, var_core_value_sig0149) {
  return var_core_value_sig1F85.left !== var_core_value_sig0149.left || var_core_value_sig1F85.top !== var_core_value_sig0149.top || var_core_value_sig1F85.width !== var_core_value_sig0149.width || var_core_value_sig1F85.height !== var_core_value_sig0149.height;
}
function Ku(var_core_value_sig9F77) {
  return var_core_value_sig9F77.left === undefined || var_core_value_sig9F77.top === undefined || var_core_value_sig9F77.width === undefined || var_core_value_sig9F77.height === undefined ? null : {
    left: var_core_value_sig9F77.left,
    top: var_core_value_sig9F77.top,
    width: var_core_value_sig9F77.width,
    height: var_core_value_sig9F77.height
  };
}
function qu(var_core_value_sig83CF) {
  return !var_core_value_sig83CF || var_core_value_sig83CF.element["type"] !== M.Container || var_core_value_sig83CF.hidden === true || var_core_value_sig83CF.element["visible"] === false || var_core_value_sig83CF.element["locked"] === true || var_core_value_sig83CF.element["selectable"] === false || var_core_value_sig83CF.element["containerData"].behavior["membershipLocked"];
}
function Ju(var_core_value_sigF518, var_core_value_sigBDCA, var_core_value_sigCCF1) {
  if (!var_core_value_sigF518 || var_core_value_sigF518.element["type"] !== M.Container) return false;
  let var_core_value_sig74C0 = var_core_value_sigF518.element["containerData"].behavior;
  return var_core_value_sig74C0.acceptsChildren ? var_core_value_sigBDCA.every(var_core_value_sig9E0F => {
    var var_core_value_sig3A42;
    let var_core_value_sig8802 = (var_core_value_sig3A42 = var_core_value_sigCCF1[var_core_value_sig9E0F]) == null ? undefined : var_core_value_sig3A42.element;
    return var_core_value_sig8802 ? var_core_value_sig8802.type !== M.Container || var_core_value_sig74C0.acceptsContainer && var_core_value_sig74C0.allowNested : false;
  }) : false;
}
function Yu(var_core_value_sig291B) {
  return (var_core_value_sig291B == null ? undefined : var_core_value_sig291B.element["type"]) === M.Container && var_core_value_sig291B.element["containerData"].behavior["membershipLocked"];
}
function Xu(var_core_value_sig78A6, var_core_value_sigAA991) {
  var var_core_value_sigBE21;
  let var_core_value_sig8708 = (var_core_value_sigBE21 = var_core_value_sig78A6[var_core_value_sigAA991]) == null ? undefined : var_core_value_sigBE21.element["parentId"],
    var_core_value_sig42B4 = new Set([var_core_value_sigAA991]);
  for (; var_core_value_sig8708;) {
    if (var_core_value_sig42B4.has(var_core_value_sig8708)) return false;
    let var_core_value_sig340D = var_core_value_sig78A6[var_core_value_sig8708];
    if (!var_core_value_sig340D || var_core_value_sig340D.element["type"] !== M.Container) return false;
    if (var_core_value_sig340D.hidden === true || var_core_value_sig340D.element["visible"] === false || var_core_value_sig340D.element["locked"] === true || var_core_value_sig340D.element["selectable"] === false) return true;
    var_core_value_sig42B4.add(var_core_value_sig8708), var_core_value_sig8708 = var_core_value_sig340D.element["parentId"];
  }
  return false;
}
function Zu(var_core_value_sig15BB, var_core_value_sigFDCB) {
  let var_core_value_sig788A = [];
  return var_core_value_sigFDCB.forEach(var_core_value_sig95D5 => {
    var_core_value_sig15BB[var_core_value_sig95D5] && !var_core_value_sig788A.includes(var_core_value_sig95D5) && var_core_value_sig788A.push(var_core_value_sig95D5);
  }), var_core_value_sig788A;
}
function Qu(var_core_value_sig8676, var_core_value_sigDEEE, var_core_value_sig990D) {
  var var_core_value_sig2E7E;
  let var_core_value_sig5C96 = (var_core_value_sig2E7E = var_core_value_sig8676[var_core_value_sigDEEE]) == null ? undefined : var_core_value_sig2E7E.element["parentId"],
    var_core_value_sig2755 = new Set([var_core_value_sigDEEE]);
  for (; var_core_value_sig5C96;) {
    if (var_core_value_sig2755.has(var_core_value_sig5C96)) return false;
    let var_core_value_sig82D4 = var_core_value_sig8676[var_core_value_sig5C96];
    if (!var_core_value_sig82D4 || var_core_value_sig82D4.element["type"] !== M.Container) return false;
    if (var_core_value_sig990D.has(var_core_value_sig5C96)) return true;
    var_core_value_sig2755.add(var_core_value_sig5C96), var_core_value_sig5C96 = var_core_value_sig82D4.element["parentId"];
  }
  return false;
}
function $u(var_core_value_sigC7AF, var_core_value_sigC669) {
  let var_core_value_sigDDD1 = new Set(var_core_value_sigC669);
  return var_core_value_sigC669.filter(var_core_value_sigE027 => !Qu(var_core_value_sigC7AF, var_core_value_sigE027, var_core_value_sigDDD1));
}
function ed(var_core_value_sigDA7F, var_core_value_sigC174, var_core_value_sig93EA, var_core_value_sigA2DF) {
  var_core_value_sigDA7F[var_core_value_sigC174.elementId] = {
    ...var_core_value_sigC174,
    element: var_core_value_sig93EA,
    transform: var_core_value_sigA2DF
  };
}
function td(var_core_value_sigE813, var_core_value_sig03AA) {
  return var_core_value_sig03AA.some(var_core_value_sigE537 => {
    var var_core_value_sig5D84;
    let var_core_value_sigD120 = var_core_value_sigE537.params;
    return !!var_core_value_sigD120.elementId && ((var_core_value_sig5D84 = var_core_value_sigE813[var_core_value_sigD120.elementId]) == null ? undefined : var_core_value_sig5D84.element["locked"]) === true;
  });
}
function nd(var_core_value_sig1055, var_core_value_sigC30C1, var_core_value_sig1AD5, var_core_value_sigAF2C) {
  var var_core_value_sigD893, var_core_value_sig9C29, var_core_value_sigBE39;
  if (!var_core_value_sig1AD5) return;
  let var_core_value_sig6945 = (var_core_value_sigD893 = var_core_value_sig1055[var_core_value_sig1AD5]) == null ? undefined : var_core_value_sigD893.element;
  if (var_core_value_sigC30C1.laneId && (var_core_value_sig6945 == null ? undefined : var_core_value_sig6945.type) === M.Container && var_core_value_sig6945.containerData["kind"] === "swimlane" && ((var_core_value_sig9C29 = var_core_value_sig6945.containerData["swimlane"]) == null ? undefined : var_core_value_sig9C29.lanes["some"](var_core_value_sigAA05 => var_core_value_sigAA05.id === var_core_value_sigC30C1.laneId)) === true) return var_core_value_sigC30C1.laneId;
  let var_core_value_sigDED6 = U(var_core_value_sig1055, var_core_value_sig1AD5);
  if (!((var_core_value_sig6945 == null ? undefined : var_core_value_sig6945.type) !== M.Container || var_core_value_sig6945.containerData["kind"] !== "swimlane" || !var_core_value_sigAF2C || !var_core_value_sigDED6)) return (var_core_value_sigBE39 = Ui(var_core_value_sig6945, var_core_value_sigDED6, var_core_value_sigAF2C)) == null ? undefined : var_core_value_sigBE39.lane["id"];
}
function rd(var_core_value_sig0A6B, var_core_value_sig2C8D, var_core_value_sig1CC1, var_core_value_sigB460, var_core_value_sigBA9E) {
  var var_core_value_sigB69E, var_core_value_sig291C, var_core_value_sigB11D;
  let var_core_value_sig2B33 = (var_core_value_sigB69E = var_core_value_sig0A6B[var_core_value_sig1CC1]) == null ? undefined : var_core_value_sigB69E.element,
    var_core_value_sig705C = U(var_core_value_sig0A6B, var_core_value_sig1CC1);
  if ((var_core_value_sig2B33 == null ? undefined : var_core_value_sig2B33.type) !== M.Container || var_core_value_sig2B33.containerData["kind"] !== "swimlane" || !var_core_value_sig2B33.containerData["swimlane"] || !var_core_value_sig705C) return null;
  let var_core_value_sigD209 = (var_core_value_sig291C = Fi(var_core_value_sig2B33, var_core_value_sig705C).find(var_core_value_sigC04C => var_core_value_sigC04C.lane["id"] === var_core_value_sigB460)) == null ? undefined : var_core_value_sig291C.bounds;
  if (!var_core_value_sigD209) return null;
  let var_core_value_sigD13E = var_core_value_sig2C8D.parentId === var_core_value_sig1CC1 ? var_core_value_sig2B33 : undefined,
    var_core_value_sig5AF8 = var_core_value_sigD13E ? var_core_value_sig705C : null,
    var_core_value_sig22EF = (var_core_value_sigD13E == null ? undefined : var_core_value_sigD13E.type) === M.Container && var_core_value_sigD13E.containerData["kind"] === "swimlane" && var_core_value_sig2C8D.laneId && var_core_value_sig5AF8 ? (var_core_value_sigB11D = Fi(var_core_value_sigD13E, var_core_value_sig5AF8).find(var_core_value_sig2069 => var_core_value_sig2069.lane["id"] === var_core_value_sig2C8D.laneId)) == null ? undefined : var_core_value_sigB11D.bounds : undefined;
  return var_core_value_sig22EF ? {
    x: var_core_value_sigD209.left - var_core_value_sig22EF.left,
    y: var_core_value_sigD209.top - var_core_value_sig22EF.top
  } : var_core_value_sig2B33.containerData["swimlane"].orientation === "horizontal" ? {
    x: 0,
    y: var_core_value_sigBA9E.top >= var_core_value_sigD209.top && var_core_value_sigBA9E.top + var_core_value_sigBA9E.height <= var_core_value_sigD209.top + var_core_value_sigD209.height ? 0 : var_core_value_sigD209.top + var_core_value_sigD209.height / 2 - (var_core_value_sigBA9E.top + var_core_value_sigBA9E.height / 2)
  } : {
    x: var_core_value_sigBA9E.left >= var_core_value_sigD209.left && var_core_value_sigBA9E.left + var_core_value_sigBA9E.width <= var_core_value_sigD209.left + var_core_value_sigD209.width ? 0 : var_core_value_sigD209.left + var_core_value_sigD209.width / 2 - (var_core_value_sigBA9E.left + var_core_value_sigBA9E.width / 2),
    y: 0
  };
}
function id(var_core_value_sig23DF, var_core_value_sig1EB4, var_core_value_sigF12B, var_core_value_sig170E) {
  var var_core_value_sig72DB;
  let var_core_value_sigA272 = var_core_value_sigF12B ? (var_core_value_sig72DB = var_core_value_sig23DF[var_core_value_sigF12B]) == null ? undefined : var_core_value_sig72DB.element : undefined;
  if ((var_core_value_sigA272 == null ? undefined : var_core_value_sigA272.type) !== M.Container || var_core_value_sigA272.containerData["kind"] !== "swimlane") return true;
  let var_core_value_sig60C4 = var_core_value_sigA272.containerData["swimlane"];
  return var_core_value_sig60C4 != null && var_core_value_sig60C4.lanes["some"](var_core_value_sig5176 => var_core_value_sig5176.id === var_core_value_sig170E && var_core_value_sig5176.locked !== true) ? var_core_value_sig1EB4.some(var_core_value_sig71A1 => {
    var var_core_value_sig72AD, var_core_value_sig9ABE;
    let var_core_value_sig8EF01 = (var_core_value_sig72AD = var_core_value_sig23DF[var_core_value_sig71A1]) == null ? undefined : var_core_value_sig72AD.element;
    if (!var_core_value_sig8EF01 || var_core_value_sig8EF01.type === M.Connector) return true;
    let var_core_value_sig234B = var_core_value_sig8EF01.parentId ? (var_core_value_sig9ABE = var_core_value_sig23DF[var_core_value_sig8EF01.parentId]) == null ? undefined : var_core_value_sig9ABE.element : undefined,
      var_core_value_sig8169 = (var_core_value_sig234B == null ? undefined : var_core_value_sig234B.type) === M.Container && var_core_value_sig234B.containerData["kind"] === "swimlane" ? var_core_value_sig234B.containerData["swimlane"] : undefined,
      var_core_value_sigC5FB = var_core_value_sig8EF01.laneId ? var_core_value_sig8169 == null ? undefined : var_core_value_sig8169.lanes["find"](var_core_value_sigBDE4 => var_core_value_sigBDE4.id === var_core_value_sig8EF01.laneId) : undefined;
    return (var_core_value_sigC5FB == null ? undefined : var_core_value_sigC5FB.locked) === true;
  }) : true;
}
const ad = {
  id: "board.operation.reparent-elements",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig4340, var_core_value_sig1F11) => {
    if (!var_core_value_sig1F11 || var_core_value_sig1F11.elementIds["length"] === 0) return false;
    let {
        unitId: var_core_value_sig3A1B,
        subUnitId: var_core_value_sig6543,
        parentId: var_core_value_sigA0E6,
        laneId: var_core_value_sig9F46
      } = var_core_value_sig1F11,
      var_core_value_sigF155 = var_core_value_sig4340.get(L).getElementData(var_core_value_sig3A1B, var_core_value_sig6543);
    if (new Set(var_core_value_sig1F11.elementIds).size !== var_core_value_sig1F11.elementIds["length"] || var_core_value_sig1F11.elementIds["some"](var_core_value_sig5453 => !var_core_value_sigF155[var_core_value_sig5453])) return false;
    let var_core_value_sig3165 = Zu(var_core_value_sigF155, var_core_value_sig1F11.elementIds);
    if (var_core_value_sig3165.length === 0) return false;
    let var_core_value_sigEF93 = $u(var_core_value_sigF155, var_core_value_sig3165);
    if (var_core_value_sig9F46 !== undefined && id(var_core_value_sigF155, var_core_value_sigEF93, var_core_value_sigA0E6, var_core_value_sig9F46) || var_core_value_sigEF93.length === 0 || var_core_value_sigEF93.some(var_core_value_sig8725 => Xu(var_core_value_sigF155, var_core_value_sig8725)) || var_core_value_sigEF93.includes(var_core_value_sigA0E6 ?? "")) return false;
    if (var_core_value_sigA0E6) {
      let var_core_value_sig513B = var_core_value_sigF155[var_core_value_sigA0E6];
      if (qu(var_core_value_sig513B) || !Ju(var_core_value_sig513B, var_core_value_sigEF93, var_core_value_sigF155)) return false;
    }
    if (var_core_value_sigEF93.some(var_core_value_sig5501 => Wn(var_core_value_sigF155, var_core_value_sig5501, var_core_value_sigA0E6)) || var_core_value_sigEF93.some(var_core_value_sig7784 => {
      let var_core_value_sigB706 = var_core_value_sigF155[var_core_value_sig7784],
        var_core_value_sig5FD01 = var_core_value_sigB706 == null ? undefined : var_core_value_sigB706.element["parentId"];
      return var_core_value_sig5FD01 !== var_core_value_sigA0E6 && Yu(var_core_value_sig5FD01 ? var_core_value_sigF155[var_core_value_sig5FD01] : undefined);
    })) return false;
    let var_core_value_sig6711 = new Map(),
      var_core_value_sigE204 = new Map(),
      var_core_value_sig58C8 = {
        ...var_core_value_sigF155
      },
      var_core_value_sig19E9 = (var_core_value_sig77E3, var_core_value_sigB071, var_core_value_sig15FE) => {
        if (var_core_value_sig6711.set(var_core_value_sig77E3.elementId, {
          id: $.id,
          params: {
            unitId: var_core_value_sig3A1B,
            subUnitId: var_core_value_sig6543,
            elementId: var_core_value_sig77E3.elementId,
            element: var_core_value_sigB071,
            transform: var_core_value_sig15FE
          }
        }), !var_core_value_sigE204.has(var_core_value_sig77E3.elementId)) {
          let var_core_value_sig7DF1 = var_core_value_sigF155[var_core_value_sig77E3.elementId] ?? var_core_value_sig77E3;
          var_core_value_sigE204.set(var_core_value_sig77E3.elementId, {
            id: $.id,
            params: {
              unitId: var_core_value_sig3A1B,
              subUnitId: var_core_value_sig6543,
              elementId: var_core_value_sig77E3.elementId,
              element: X(var_core_value_sig7D37.deepClone(var_core_value_sig7DF1.element)),
              transform: var_core_value_sig7DF1.transform ? {
                ...var_core_value_sig7DF1.transform
              } : undefined
            }
          });
        }
        ed(var_core_value_sig58C8, var_core_value_sig77E3, var_core_value_sigB071, var_core_value_sig15FE);
      };
    var_core_value_sigEF93.forEach(var_core_value_sigCF47 => {
      var var_core_value_sigB0F9;
      let var_core_value_sigAF12 = var_core_value_sigF155[var_core_value_sigCF47];
      if (!var_core_value_sigAF12 || var_core_value_sigAF12.element["parentId"] === var_core_value_sigA0E6 && (var_core_value_sig9F46 === undefined || var_core_value_sigAF12.element["laneId"] === var_core_value_sig9F46)) return;
      let var_core_value_sigC60C = (var_core_value_sigB0F9 = H(var_core_value_sigF155, var_core_value_sigCF47)) == null ? undefined : var_core_value_sigB0F9.worldTransform;
      if (!var_core_value_sigC60C) return;
      let var_core_value_sig1C3C = U(var_core_value_sigF155, var_core_value_sigCF47),
        var_core_value_sig71CF = var_core_value_sig9F46 !== undefined && var_core_value_sigA0E6 && var_core_value_sig1C3C ? rd(var_core_value_sigF155, var_core_value_sigAF12.element, var_core_value_sigA0E6, var_core_value_sig9F46, var_core_value_sig1C3C) : {
          x: 0,
          y: 0
        };
      if (!var_core_value_sig71CF) return;
      let var_core_value_sigC341 = {
          ...var_core_value_sigC60C,
          left: (var_core_value_sigC60C.left ?? 0) + var_core_value_sig71CF.x,
          top: (var_core_value_sigC60C.top ?? 0) + var_core_value_sig71CF.y
        },
        var_core_value_sigBA47 = G(W(var_core_value_sigF155, {
          parentId: var_core_value_sigA0E6,
          worldTransform: var_core_value_sigC341
        })),
        var_core_value_sig3DF7 = Wu({
          ...var_core_value_sigAF12.element,
          parentId: var_core_value_sigA0E6,
          laneId: var_core_value_sig9F46 ?? nd(var_core_value_sigF155, var_core_value_sigAF12.element, var_core_value_sigA0E6, var_core_value_sig1C3C)
        }, var_core_value_sigBA47);
      var_core_value_sig19E9(var_core_value_sigAF12, var_core_value_sig3DF7, var_core_value_sigBA47);
    });
    let var_core_value_sigBB40 = var_core_value_sigA0E6 ? var_core_value_sig58C8[var_core_value_sigA0E6] : undefined;
    if ((var_core_value_sigBB40 == null ? undefined : var_core_value_sigBB40.element["type"]) === M.Container && var_core_value_sigBB40.element["containerData"].behavior["autoResize"]) {
      let var_core_value_sigD49F = U(var_core_value_sig58C8, var_core_value_sigA0E6);
      if (var_core_value_sigD49F) {
        let var_core_value_sigDC86 = yi([Sc(var_core_value_sigBB40.element, var_core_value_sigD49F), ...Object.values(var_core_value_sig58C8).filter(var_core_value_sig223F => var_core_value_sig223F.element["parentId"] === var_core_value_sigA0E6 && var_core_value_sig223F.element["type"] !== M.Connector).map(var_core_value_sigD749 => U(var_core_value_sig58C8, var_core_value_sigD749.elementId)).filter(var_core_value_sigCFFA => !!var_core_value_sigCFFA)]),
          var_core_value_sig0B0C = var_core_value_sigDC86 ? Ec(var_core_value_sigBB40.element, var_core_value_sigD49F, var_core_value_sigDC86) : null;
        if (var_core_value_sig0B0C && Gu(var_core_value_sigD49F, var_core_value_sig0B0C)) {
          let var_core_value_sig58C1 = new Map();
          Object.values(var_core_value_sig58C8).forEach(var_core_value_sig6F91 => {
            var var_core_value_sigF9C7;
            if (var_core_value_sig6F91.element["parentId"] !== var_core_value_sigA0E6) return;
            let var_core_value_sig8895 = (var_core_value_sigF9C7 = H(var_core_value_sig58C8, var_core_value_sig6F91.elementId)) == null ? undefined : var_core_value_sigF9C7.worldTransform;
            var_core_value_sig8895 && var_core_value_sig58C1.set(var_core_value_sig6F91.elementId, var_core_value_sig8895);
          });
          let var_core_value_sig5090 = G(W(var_core_value_sig58C8, {
            parentId: var_core_value_sigBB40.element["parentId"],
            worldTransform: Xn({
              left: var_core_value_sig0B0C.left,
              top: var_core_value_sig0B0C.top,
              width: var_core_value_sig0B0C.width,
              height: var_core_value_sig0B0C.height,
              angle: G(var_core_value_sigBB40.element["transform"]).angle,
              flipX: var_core_value_sigBB40.element["transform"].flipX,
              flipY: var_core_value_sigBB40.element["transform"].flipY
            })
          }));
          var_core_value_sig19E9(var_core_value_sigBB40, Wu(var_core_value_sigBB40.element, var_core_value_sig5090), var_core_value_sig5090), var_core_value_sig58C1.forEach((var_core_value_sigC80B, var_core_value_sig284F) => {
            let var_core_value_sigE154 = var_core_value_sig58C8[var_core_value_sig284F];
            if (!var_core_value_sigE154) return;
            let var_core_value_sig4632 = G(W(var_core_value_sig58C8, {
              parentId: var_core_value_sigA0E6,
              worldTransform: var_core_value_sigC80B
            }));
            if (var_core_value_sigE154.element["transform"].left === var_core_value_sig4632.left && var_core_value_sigE154.element["transform"].top === var_core_value_sig4632.top && var_core_value_sigE154.element["transform"].width === var_core_value_sig4632.width && var_core_value_sigE154.element["transform"].height === var_core_value_sig4632.height && G(var_core_value_sigE154.element["transform"]).angle === var_core_value_sig4632.angle) return;
            let var_core_value_sig12F21 = Ku(var_core_value_sigC80B),
              var_core_value_sig2259 = Wu({
                ...var_core_value_sigE154.element,
                laneId: nd(var_core_value_sig58C8, var_core_value_sigE154.element, var_core_value_sigA0E6, var_core_value_sig12F21)
              }, var_core_value_sig4632);
            var_core_value_sig19E9(var_core_value_sigE154, var_core_value_sig2259, var_core_value_sig4632);
          });
        }
      }
    }
    Object.values(var_core_value_sig58C8).forEach(var_core_value_sigCECC => {
      var var_core_value_sig0F47;
      if (!Q(var_core_value_sigCECC)) return;
      let var_core_value_sig6B29 = oo(var_core_value_sig58C8, var_core_value_sigCECC.element);
      if (var_core_value_sigCECC.element["parentId"] === var_core_value_sig6B29.parentId && var_core_value_sigCECC.element["laneId"] === var_core_value_sig6B29.laneId) return;
      let var_core_value_sig28E2 = (var_core_value_sig0F47 = H(var_core_value_sig58C8, var_core_value_sigCECC.elementId)) == null ? undefined : var_core_value_sig0F47.worldTransform;
      if (!var_core_value_sig28E2) return;
      let var_core_value_sig1578 = G(W(var_core_value_sig58C8, {
          parentId: var_core_value_sig6B29.parentId,
          worldTransform: var_core_value_sig28E2
        })),
        var_core_value_sig52ED = Wu({
          ...var_core_value_sigCECC.element,
          parentId: var_core_value_sig6B29.parentId,
          laneId: var_core_value_sig6B29.laneId
        }, var_core_value_sig1578);
      var_core_value_sig19E9(var_core_value_sigCECC, var_core_value_sig52ED, var_core_value_sig1578);
    });
    let var_core_value_sigA2E7 = Array.from(var_core_value_sig6711.values()),
      var_core_value_sigB05D = Array.from(var_core_value_sigE204.values()).reverse();
    return var_core_value_sigA2E7.length === 0 || td(var_core_value_sigF155, var_core_value_sigA2E7) || !Mo(var_core_value_sigF155, var_core_value_sigA2E7) || !var_core_value_sig77FC(var_core_value_sigA2E7, var_core_value_sig4340.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig4340.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig3A1B,
      redoMutations: var_core_value_sigA2E7,
      undoMutations: var_core_value_sigB05D
    }), true);
  }
};
function od(var_core_value_sigD96B, var_core_value_sig5F92) {
  return {
    ...var_core_value_sigD96B,
    containerData: {
      ...var_core_value_sigD96B.containerData,
      behavior: {
        ...var_core_value_sigD96B.containerData["behavior"],
        autoResize: var_core_value_sig5F92
      }
    }
  };
}
const sd = {
  id: "board.operation.set-container-auto-resize",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig501D, var_core_value_sigDA2B) => {
    if (!(var_core_value_sigDA2B != null && var_core_value_sigDA2B.containerId)) return false;
    let {
        unitId: var_core_value_sigF322,
        subUnitId: var_core_value_sigE133,
        containerId: var_core_value_sigE50A,
        autoResize: var_core_value_sig8383
      } = var_core_value_sigDA2B,
      var_core_value_sigA30F = var_core_value_sig501D.get(L),
      var_core_value_sig93DB = var_core_value_sigA30F.getElementByParam({
        unitId: var_core_value_sigF322,
        subUnitId: var_core_value_sigE133,
        elementId: var_core_value_sigE50A
      });
    if (!var_core_value_sig93DB || var_core_value_sig93DB.element["type"] !== M.Container || var_core_value_sig93DB.element["locked"] || var_core_value_sig93DB.element["containerData"].behavior["autoResize"] === var_core_value_sig8383 || var_core_value_sig93DB.element["containerData"].behavior["membershipLocked"] && !var_core_value_sig8383) return false;
    let var_core_value_sigFBEC = od(var_core_value_sig93DB.element, var_core_value_sig8383),
      var_core_value_sig4E78 = [{
        id: $.id,
        params: {
          unitId: var_core_value_sigF322,
          subUnitId: var_core_value_sigE133,
          elementId: var_core_value_sigE50A,
          element: var_core_value_sigFBEC,
          transform: var_core_value_sig93DB.transform
        }
      }],
      var_core_value_sigA1E7 = [{
        id: $.id,
        params: {
          unitId: var_core_value_sigF322,
          subUnitId: var_core_value_sigE133,
          elementId: var_core_value_sigE50A,
          element: var_core_value_sig7D37.deepClone(var_core_value_sig93DB.element),
          transform: var_core_value_sig93DB.transform ? {
            ...var_core_value_sig93DB.transform
          } : undefined
        }
      }];
    return !Mo(var_core_value_sigA30F.getElementData(var_core_value_sigF322, var_core_value_sigE133), var_core_value_sig4E78) || !var_core_value_sig77FC(var_core_value_sig4E78, var_core_value_sig501D.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig501D.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sigF322,
      redoMutations: var_core_value_sig4E78,
      undoMutations: var_core_value_sigA1E7
    }), true);
  }
};
function cd(var_core_value_sig1B4F, var_core_value_sigA6E0) {
  return {
    ...var_core_value_sig1B4F,
    containerData: {
      ...var_core_value_sig1B4F.containerData,
      behavior: {
        ...var_core_value_sig1B4F.containerData["behavior"],
        membershipLocked: var_core_value_sigA6E0,
        autoResize: var_core_value_sigA6E0 ? true : var_core_value_sig1B4F.containerData["behavior"].autoResize
      }
    }
  };
}
function ld(var_core_value_sig5B1A) {
  return (var_core_value_sig5B1A == null ? undefined : var_core_value_sig5B1A.rotation) ?? (var_core_value_sig5B1A == null ? undefined : var_core_value_sig5B1A.angle) ?? 0;
}
function ud(var_core_value_sig1004) {
  return {
    left: var_core_value_sig1004.left ?? 0,
    top: var_core_value_sig1004.top ?? 0,
    width: var_core_value_sig1004.width ?? 0,
    height: var_core_value_sig1004.height ?? 0,
    angle: ld(var_core_value_sig1004),
    flipX: var_core_value_sig1004.flipX,
    flipY: var_core_value_sig1004.flipY
  };
}
function dd(var_core_value_sigAE05, var_core_value_sigE5C6) {
  var var_core_value_sig6FB9;
  let var_core_value_sig0C7F = (var_core_value_sig6FB9 = H(var_core_value_sigAE05, var_core_value_sigE5C6)) == null ? undefined : var_core_value_sig6FB9.worldTransform;
  return var_core_value_sig0C7F ? ud(var_core_value_sig0C7F) : null;
}
function fd(var_core_value_sig41F0, var_core_value_sigA696, var_core_value_sig91AE) {
  return ud(W(var_core_value_sig41F0, {
    parentId: var_core_value_sigA696,
    worldTransform: {
      left: var_core_value_sig91AE.left,
      top: var_core_value_sig91AE.top,
      width: var_core_value_sig91AE.width,
      height: var_core_value_sig91AE.height,
      rotation: var_core_value_sig91AE.angle,
      flipX: var_core_value_sig91AE.flipX,
      flipY: var_core_value_sig91AE.flipY
    }
  }));
}
function pd(var_core_value_sigBC03, var_core_value_sig5CD8) {
  return {
    ...var_core_value_sigBC03,
    transform: {
      ...var_core_value_sigBC03.transform,
      left: var_core_value_sig5CD8.left,
      top: var_core_value_sig5CD8.top,
      width: var_core_value_sig5CD8.width,
      height: var_core_value_sig5CD8.height,
      rotation: var_core_value_sig5CD8.angle,
      flipX: var_core_value_sig5CD8.flipX,
      flipY: var_core_value_sig5CD8.flipY
    }
  };
}
function md(var_core_value_sigC707, var_core_value_sig37BD) {
  return var_core_value_sig37BD.some(var_core_value_sig135F => {
    var var_core_value_sig416D;
    let var_core_value_sigAD5D = var_core_value_sig135F.params;
    return !!var_core_value_sigAD5D.elementId && ((var_core_value_sig416D = var_core_value_sigC707[var_core_value_sigAD5D.elementId]) == null ? undefined : var_core_value_sig416D.element["locked"]) === true;
  });
}
function hd(var_core_value_sig03EA, var_core_value_sig6457) {
  return var_core_value_sig03EA.left !== var_core_value_sig6457.left || var_core_value_sig03EA.top !== var_core_value_sig6457.top || var_core_value_sig03EA.width !== var_core_value_sig6457.width || var_core_value_sig03EA.height !== var_core_value_sig6457.height;
}
function gd(var_core_value_sig112F, var_core_value_sig04D3, var_core_value_sig876A) {
  var var_core_value_sigB1F9, var_core_value_sig635D;
  if (!var_core_value_sig04D3 || !var_core_value_sig876A) return;
  let var_core_value_sig6923 = (var_core_value_sigB1F9 = var_core_value_sig112F[var_core_value_sig04D3]) == null ? undefined : var_core_value_sigB1F9.element,
    var_core_value_sig338F = U(var_core_value_sig112F, var_core_value_sig04D3);
  if (!(!var_core_value_sig6923 || var_core_value_sig6923.type !== M.Container || var_core_value_sig6923.containerData["kind"] !== "swimlane" || !var_core_value_sig338F)) return (var_core_value_sig635D = Ui(var_core_value_sig6923, var_core_value_sig338F, var_core_value_sig876A)) == null ? undefined : var_core_value_sig635D.lane["id"];
}
const _d = {
    id: "board.operation.set-container-membership-lock",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sig7B0E, var_core_value_sigDD4B) => {
      if (!(var_core_value_sigDD4B != null && var_core_value_sigDD4B.containerId)) return false;
      let {
          unitId: var_core_value_sig5E4F,
          subUnitId: var_core_value_sig3736,
          containerId: var_core_value_sig7D19,
          membershipLocked: var_core_value_sig9E9F
        } = var_core_value_sigDD4B,
        var_core_value_sig4A92 = var_core_value_sig7B0E.get(L),
        var_core_value_sig652F = var_core_value_sig4A92.getElementByParam({
          unitId: var_core_value_sig5E4F,
          subUnitId: var_core_value_sig3736,
          elementId: var_core_value_sig7D19
        });
      if (!var_core_value_sig652F || var_core_value_sig652F.element["type"] !== M.Container || var_core_value_sig652F.element["locked"] || var_core_value_sig652F.element["containerData"].behavior["membershipLocked"] === var_core_value_sig9E9F) return false;
      let var_core_value_sigA8CE = var_core_value_sig4A92.getElementData(var_core_value_sig5E4F, var_core_value_sig3736),
        var_core_value_sig1941 = U(var_core_value_sigA8CE, var_core_value_sig7D19),
        var_core_value_sigF945 = {
          ...cd(var_core_value_sig652F.element, var_core_value_sig9E9F),
          laneId: gd(var_core_value_sigA8CE, var_core_value_sig652F.element["parentId"], var_core_value_sig1941)
        },
        var_core_value_sig6178 = new Map(),
        var_core_value_sig483F = new Map(),
        var_core_value_sig2FD9 = {
          ...var_core_value_sigA8CE
        },
        var_core_value_sig3DB9 = (var_core_value_sig1B8A, var_core_value_sigFB18, var_core_value_sig703C) => {
          var_core_value_sig6178.set(var_core_value_sig1B8A.elementId, {
            id: $.id,
            params: {
              unitId: var_core_value_sig5E4F,
              subUnitId: var_core_value_sig3736,
              elementId: var_core_value_sig1B8A.elementId,
              element: var_core_value_sigFB18,
              transform: var_core_value_sig703C
            }
          }), var_core_value_sig483F.has(var_core_value_sig1B8A.elementId) || var_core_value_sig483F.set(var_core_value_sig1B8A.elementId, {
            id: $.id,
            params: {
              unitId: var_core_value_sig5E4F,
              subUnitId: var_core_value_sig3736,
              elementId: var_core_value_sig1B8A.elementId,
              element: X(var_core_value_sig7D37.deepClone(var_core_value_sig1B8A.element)),
              transform: var_core_value_sig1B8A.transform ? {
                ...var_core_value_sig1B8A.transform
              } : undefined
            }
          }), var_core_value_sig2FD9[var_core_value_sig1B8A.elementId] = {
            ...var_core_value_sig1B8A,
            element: var_core_value_sigFB18,
            transform: var_core_value_sig703C
          };
        };
      if (var_core_value_sig3DB9(var_core_value_sig652F, var_core_value_sigF945, undefined), var_core_value_sig9E9F && var_core_value_sigF945.containerData["behavior"].autoResize) {
        let var_core_value_sig96CF = U(var_core_value_sig2FD9, var_core_value_sig7D19);
        if (var_core_value_sig96CF) {
          let var_core_value_sigA39E = Sc(var_core_value_sigF945, var_core_value_sig96CF),
            var_core_value_sigBBEE = Object.values(var_core_value_sig2FD9).filter(var_core_value_sigC368 => var_core_value_sigC368.element["parentId"] === var_core_value_sig7D19),
            var_core_value_sig011D = yi([var_core_value_sigA39E, ...var_core_value_sigBBEE.filter(var_core_value_sigAD56 => var_core_value_sigAD56.element["type"] !== M.Connector).map(var_core_value_sigDB4A => U(var_core_value_sig2FD9, var_core_value_sigDB4A.elementId)).filter(var_core_value_sig6418 => !!var_core_value_sig6418)]),
            var_core_value_sig6167 = var_core_value_sig011D ? Ec(var_core_value_sigF945, var_core_value_sig96CF, var_core_value_sig011D) : null;
          if (var_core_value_sig6167 && hd(var_core_value_sig96CF, var_core_value_sig6167)) {
            let var_core_value_sig1896 = new Map();
            var_core_value_sigBBEE.forEach(var_core_value_sig9E2F => {
              let var_core_value_sigD082 = dd(var_core_value_sig2FD9, var_core_value_sig9E2F.elementId);
              var_core_value_sigD082 && var_core_value_sig1896.set(var_core_value_sig9E2F.elementId, var_core_value_sigD082);
            });
            let var_core_value_sig0285 = fd(var_core_value_sig2FD9, var_core_value_sigF945.parentId, {
                left: var_core_value_sig6167.left,
                top: var_core_value_sig6167.top,
                width: var_core_value_sig6167.width,
                height: var_core_value_sig6167.height,
                angle: ld(var_core_value_sigF945.transform),
                flipX: var_core_value_sigF945.transform["flipX"],
                flipY: var_core_value_sigF945.transform["flipY"]
              }),
              var_core_value_sig777D = pd({
                ...var_core_value_sigF945,
                laneId: gd(var_core_value_sig2FD9, var_core_value_sigF945.parentId, var_core_value_sig6167)
              }, var_core_value_sig0285);
            var_core_value_sig3DB9(var_core_value_sig2FD9[var_core_value_sig7D19], var_core_value_sig777D, var_core_value_sig0285), var_core_value_sig1896.forEach((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
              let var_core_value_sigF4B9 = var_core_value_sig2FD9[var_core_value_sigD0A8];
              if (!var_core_value_sigF4B9) return;
              let var_core_value_sig5CEE = fd(var_core_value_sig2FD9, var_core_value_sig7D19, var_core_value_sigDBB7),
                var_core_value_sigE92A = pd(var_core_value_sigF4B9.element, var_core_value_sig5CEE);
              var_core_value_sig3DB9(var_core_value_sigF4B9, var_core_value_sigE92A, var_core_value_sig5CEE);
            });
          }
        }
      }
      let var_core_value_sig5948 = Array.from(var_core_value_sig6178.values()),
        var_core_value_sigFA04 = Array.from(var_core_value_sig483F.values()).reverse();
      return md(var_core_value_sigA8CE, var_core_value_sig5948) || !Mo(var_core_value_sigA8CE, var_core_value_sig5948) || !var_core_value_sig77FC(var_core_value_sig5948, var_core_value_sig7B0E.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig7B0E.get(var_core_value_sig1F7B).pushUndoRedo({
        unitID: var_core_value_sig5E4F,
        redoMutations: var_core_value_sig5948,
        undoMutations: var_core_value_sigFA04
      }), true);
    }
  },
  vd = ["description", "locked", "name", "selectable", "visible"];
function yd(var_core_value_sig3986, var_core_value_sig1950) {
  return Object.prototype["hasOwnProperty"].call(var_core_value_sig3986, var_core_value_sig1950);
}
function bd(var_core_value_sigE263, var_core_value_sig86D3) {
  let var_core_value_sigE5A5 = var_core_value_sig7D37.deepClone(var_core_value_sigE263);
  return vd.forEach(var_core_value_sig49F1 => {
    if (!yd(var_core_value_sig86D3, var_core_value_sig49F1)) return;
    let var_core_value_sig2F7B = var_core_value_sig86D3[var_core_value_sig49F1];
    if (var_core_value_sig2F7B === undefined) {
      delete var_core_value_sigE5A5[var_core_value_sig49F1];
      return;
    }
    var_core_value_sigE5A5[var_core_value_sig49F1] = var_core_value_sig2F7B;
  }), var_core_value_sigE5A5;
}
function xd(var_core_value_sig1ABB, var_core_value_sig8781) {
  return vd.some(var_core_value_sigB0DF => var_core_value_sig1ABB[var_core_value_sigB0DF] !== var_core_value_sig8781[var_core_value_sigB0DF]);
}
function Sd(var_core_value_sig360F, var_core_value_sig79D71, var_core_value_sigE9A1, var_core_value_sigCAD1) {
  return {
    unitId: var_core_value_sig360F,
    subUnitId: var_core_value_sig79D71,
    elementId: var_core_value_sigE9A1,
    element: var_core_value_sigCAD1,
    allowInactiveTarget: true,
    allowLockedTarget: true
  };
}
const Cd = {
  id: "board.operation.set-elements-metadata",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig3105, var_core_value_sig4D9D) => {
    if (!var_core_value_sig4D9D || var_core_value_sig4D9D.updates["length"] === 0) return false;
    let {
        unitId: var_core_value_sig6D0D,
        subUnitId: var_core_value_sig5BA6,
        updates: var_core_value_sig33C81
      } = var_core_value_sig4D9D,
      var_core_value_sig851E = var_core_value_sig3105.get(L).getElementData(var_core_value_sig6D0D, var_core_value_sig5BA6),
      var_core_value_sigD0FB = [];
    if (var_core_value_sig33C81.forEach(var_core_value_sig2E441 => {
      let var_core_value_sig8560 = var_core_value_sig851E[var_core_value_sig2E441.elementId];
      if (!var_core_value_sig8560) return;
      let var_core_value_sig138D = bd(var_core_value_sig8560.element, var_core_value_sig2E441.metadata);
      xd(var_core_value_sig8560.element, var_core_value_sig138D) && var_core_value_sigD0FB.push({
        redoMutation: {
          id: $.id,
          params: Sd(var_core_value_sig6D0D, var_core_value_sig5BA6, var_core_value_sig8560.elementId, var_core_value_sig138D)
        },
        undoMutation: {
          id: $.id,
          params: Sd(var_core_value_sig6D0D, var_core_value_sig5BA6, var_core_value_sig8560.elementId, var_core_value_sig7D37.deepClone(var_core_value_sig8560.element))
        }
      });
    }), var_core_value_sigD0FB.length === 0) return false;
    let var_core_value_sig0A5F = var_core_value_sigD0FB.map(var_core_value_sig1E26 => var_core_value_sig1E26.redoMutation);
    return !Mo(var_core_value_sig851E, var_core_value_sig0A5F) || !var_core_value_sig77FC(var_core_value_sig0A5F, var_core_value_sig3105.get(var_core_value_sig88BA)).result ? false : (var_core_value_sig3105.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig6D0D,
      redoMutations: var_core_value_sig0A5F,
      undoMutations: var_core_value_sigD0FB.map(var_core_value_sig5C6C => var_core_value_sig5C6C.undoMutation)
    }), true);
  }
};
function wd(var_core_value_sig53D2, var_core_value_sigEDB2, var_core_value_sig71CD, var_core_value_sig6687, var_core_value_sigCFDD) {
  let var_core_value_sigDC0A = U(var_core_value_sig71CD, var_core_value_sig6687.elementId);
  if (!var_core_value_sigDC0A) return {
    redoMutations: [],
    undoMutations: []
  };
  let var_core_value_sig644F = U({
      ...var_core_value_sig71CD,
      [var_core_value_sig6687.elementId]: {
        ...var_core_value_sig6687,
        element: var_core_value_sigCFDD,
        transform: var_core_value_sigCFDD.transform
      }
    }, var_core_value_sig6687.elementId) ?? var_core_value_sigDC0A,
    var_core_value_sigDB71 = new Map(Fi(var_core_value_sig6687.element, var_core_value_sigDC0A).map(var_core_value_sigBE85 => [var_core_value_sigBE85.lane["id"], var_core_value_sigBE85.bounds])),
    var_core_value_sig46F8 = new Map(Fi(var_core_value_sigCFDD, var_core_value_sig644F).map(var_core_value_sig56DE => [var_core_value_sig56DE.lane["id"], var_core_value_sig56DE.bounds])),
    var_core_value_sig1F6D = {
      ...var_core_value_sig71CD
    },
    var_core_value_sig077A = new Set(),
    var_core_value_sig968D = [],
    var_core_value_sig1441 = [];
  return Object.values(var_core_value_sig71CD).forEach(var_core_value_sig0278 => {
    let var_core_value_sig08A6 = var_core_value_sig0278.element;
    if (var_core_value_sig08A6.parentId !== var_core_value_sig6687.elementId || !var_core_value_sig08A6.laneId) return;
    let var_core_value_sig04E1 = var_core_value_sigDB71.get(var_core_value_sig08A6.laneId),
      var_core_value_sigC504 = var_core_value_sig46F8.get(var_core_value_sig08A6.laneId);
    if (!var_core_value_sig04E1 || !var_core_value_sigC504) return;
    let var_core_value_sig0515 = var_core_value_sigC504.left - var_core_value_sig04E1.left,
      var_core_value_sig9F34 = var_core_value_sigC504.top - var_core_value_sig04E1.top;
    if (var_core_value_sig0515 === 0 && var_core_value_sig9F34 === 0) return;
    let var_core_value_sig0247 = var_core_value_sig0278.transform ?? {
        left: var_core_value_sig08A6.transform["left"] ?? 0,
        top: var_core_value_sig08A6.transform["top"] ?? 0,
        width: var_core_value_sig08A6.transform["width"] ?? 0,
        height: var_core_value_sig08A6.transform["height"] ?? 0,
        angle: var_core_value_sig08A6.transform["rotation"] ?? 0,
        flipX: var_core_value_sig08A6.transform["flipX"],
        flipY: var_core_value_sig08A6.transform["flipY"]
      },
      var_core_value_sig6030 = {
        ...var_core_value_sig0247,
        left: (var_core_value_sig0247.left ?? var_core_value_sig08A6.transform["left"] ?? 0) + var_core_value_sig0515,
        top: (var_core_value_sig0247.top ?? var_core_value_sig08A6.transform["top"] ?? 0) + var_core_value_sig9F34
      },
      var_core_value_sig0137 = var_core_value_sig08A6.type === M.Connector ? ni({
        ...var_core_value_sig08A6,
        transform: {
          ...var_core_value_sig08A6.transform,
          left: (var_core_value_sig08A6.transform["left"] ?? 0) + var_core_value_sig0515,
          top: (var_core_value_sig08A6.transform["top"] ?? 0) + var_core_value_sig9F34
        }
      }, {
        x: var_core_value_sig0515,
        y: var_core_value_sig9F34
      }) : {
        ...var_core_value_sig08A6,
        transform: {
          ...var_core_value_sig08A6.transform,
          left: (var_core_value_sig08A6.transform["left"] ?? 0) + var_core_value_sig0515,
          top: (var_core_value_sig08A6.transform["top"] ?? 0) + var_core_value_sig9F34
        }
      };
    var_core_value_sig968D.push({
      id: $.id,
      params: {
        unitId: var_core_value_sig53D2,
        subUnitId: var_core_value_sigEDB2,
        elementId: var_core_value_sig0278.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sig0137),
        transform: var_core_value_sig6030
      }
    }), var_core_value_sig1F6D[var_core_value_sig0278.elementId] = {
      ...var_core_value_sig0278,
      element: var_core_value_sig0137,
      transform: var_core_value_sig6030
    }, var_core_value_sig077A.add(var_core_value_sig0278.elementId), var_core_value_sig1441.unshift({
      id: $.id,
      params: {
        unitId: var_core_value_sig53D2,
        subUnitId: var_core_value_sigEDB2,
        elementId: var_core_value_sig0278.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sig08A6),
        transform: var_core_value_sig0278.transform ? {
          ...var_core_value_sig0278.transform
        } : var_core_value_sig0278.transform
      }
    });
  }), var_core_value_sig077A.size > 0 && Object.values(var_core_value_sig1F6D).forEach(var_core_value_sig14F3 => {
    if (!Q(var_core_value_sig14F3) || var_core_value_sig077A.has(var_core_value_sig14F3.elementId)) return;
    let var_core_value_sig34E8 = di(var_core_value_sig14F3.element, var_core_value_sig077A, var_core_value_sig1F6D);
    if (var_core_value_sig34E8 === var_core_value_sig14F3.element) return;
    let var_core_value_sigCFE7 = fi(var_core_value_sig34E8.transform);
    var_core_value_sig968D.push({
      id: $.id,
      params: {
        unitId: var_core_value_sig53D2,
        subUnitId: var_core_value_sigEDB2,
        elementId: var_core_value_sig14F3.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sig34E8),
        transform: var_core_value_sigCFE7
      }
    }), var_core_value_sig1441.unshift({
      id: $.id,
      params: {
        unitId: var_core_value_sig53D2,
        subUnitId: var_core_value_sigEDB2,
        elementId: var_core_value_sig14F3.elementId,
        element: var_core_value_sig7D37.deepClone(var_core_value_sig14F3.element),
        transform: var_core_value_sig14F3.transform ? {
          ...var_core_value_sig14F3.transform
        } : var_core_value_sig14F3.transform
      }
    }), var_core_value_sig1F6D[var_core_value_sig14F3.elementId] = {
      ...var_core_value_sig14F3,
      element: var_core_value_sig34E8,
      transform: var_core_value_sigCFE7
    };
  }), {
    redoMutations: var_core_value_sig968D,
    undoMutations: var_core_value_sig1441
  };
}
const Td = {
  id: "board.operation.set-swimlane-lanes",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sigEF7F, var_core_value_sig1142) => {
    if (!var_core_value_sig1142 || !var_core_value_sig1142.containerId || !wi(var_core_value_sig1142.swimlane)) return false;
    let {
        unitId: var_core_value_sig0CA2,
        subUnitId: var_core_value_sig8FF7,
        containerId: var_core_value_sig02FD
      } = var_core_value_sig1142,
      var_core_value_sig1A37 = Ti(var_core_value_sig1142.swimlane),
      var_core_value_sigF87C = var_core_value_sigEF7F.get(L).getElementData(var_core_value_sig0CA2, var_core_value_sig8FF7),
      var_core_value_sig563A = var_core_value_sigF87C[var_core_value_sig02FD],
      var_core_value_sig8341 = var_core_value_sig563A == null ? undefined : var_core_value_sig563A.element;
    if (!var_core_value_sig563A || (var_core_value_sig8341 == null ? undefined : var_core_value_sig8341.type) !== M.Container || var_core_value_sig8341.locked === true || var_core_value_sig8341.containerData["kind"] !== "swimlane" || !var_core_value_sig8341.containerData["swimlane"] || ki(var_core_value_sig8341.containerData["swimlane"], var_core_value_sig1A37)) return false;
    let var_core_value_sig1BAA = var_core_value_sig1142.transform ? {
        ...var_core_value_sig8341.transform,
        ...var_core_value_sig1142.transform
      } : var_core_value_sig8341.transform,
      var_core_value_sigF583 = X({
        ...var_core_value_sig8341,
        transform: var_core_value_sig1BAA,
        containerData: {
          ...var_core_value_sig8341.containerData,
          swimlane: var_core_value_sig7D37.deepClone(var_core_value_sig1A37)
        }
      }),
      var_core_value_sig0BFC = {
        id: $.id,
        params: {
          unitId: var_core_value_sig0CA2,
          subUnitId: var_core_value_sig8FF7,
          elementId: var_core_value_sig02FD,
          element: var_core_value_sigF583,
          transform: var_core_value_sig1BAA && {
            ...var_core_value_sig1BAA
          }
        }
      },
      var_core_value_sigBA64 = wd(var_core_value_sig0CA2, var_core_value_sig8FF7, var_core_value_sigF87C, var_core_value_sig563A, var_core_value_sigF583),
      var_core_value_sig9C5D = [var_core_value_sig0BFC, ...var_core_value_sigBA64.redoMutations];
    if (!Mo(var_core_value_sigF87C, var_core_value_sig9C5D)) return false;
    let var_core_value_sig5B04 = {
        id: $.id,
        params: {
          unitId: var_core_value_sig0CA2,
          subUnitId: var_core_value_sig8FF7,
          elementId: var_core_value_sig02FD,
          element: X(var_core_value_sig7D37.deepClone(var_core_value_sig8341)),
          transform: var_core_value_sig563A.transform ? {
            ...var_core_value_sig563A.transform
          } : var_core_value_sig563A.transform
        }
      },
      var_core_value_sig3D58 = [...var_core_value_sigBA64.undoMutations, var_core_value_sig5B04];
    return var_core_value_sig77FC(var_core_value_sig9C5D, var_core_value_sigEF7F.get(var_core_value_sig88BA)).result ? (var_core_value_sigEF7F.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig0CA2,
      redoMutations: var_core_value_sig9C5D,
      undoMutations: var_core_value_sig3D58
    }), true) : false;
  }
};
function Ed(var_core_value_sigED20) {
  return Number.isFinite(var_core_value_sigED20) && var_core_value_sigED20 >= 0;
}
function Dd(var_core_value_sigF90F) {
  var var_core_value_sigEBEE;
  return [...(((var_core_value_sigEBEE = var_core_value_sigF90F.containerData["swimlane"]) == null ? undefined : var_core_value_sigEBEE.lanes) ?? [])].sort((var_core_value_sigECBC, var_core_value_sig65D2) => var_core_value_sigECBC.order - var_core_value_sig65D2.order);
}
function Od(var_core_value_sigA547, var_core_value_sigE6341, var_core_value_sig06E6) {
  var var_core_value_sig5270;
  let var_core_value_sigC76A = Dd(var_core_value_sigA547),
    var_core_value_sig9D84 = var_core_value_sigC76A[var_core_value_sigC76A.length - 1];
  if (!var_core_value_sig9D84 || var_core_value_sig9D84.id !== var_core_value_sigE6341.id || var_core_value_sigE6341.collapsed === true) return var_core_value_sigA547.transform;
  let var_core_value_sigDBEF = var_core_value_sig06E6 - var_core_value_sigE6341.size;
  return var_core_value_sigDBEF === 0 ? var_core_value_sigA547.transform : ((var_core_value_sig5270 = var_core_value_sigA547.containerData["swimlane"]) == null ? undefined : var_core_value_sig5270.orientation) === "horizontal" ? {
    ...var_core_value_sigA547.transform,
    height: Math.max(0, (var_core_value_sigA547.transform["height"] ?? 0) + var_core_value_sigDBEF)
  } : {
    ...var_core_value_sigA547.transform,
    width: Math.max(0, (var_core_value_sigA547.transform["width"] ?? 0) + var_core_value_sigDBEF)
  };
}
function kd(var_core_value_sig29F7, var_core_value_sig590D, var_core_value_sig31F0) {
  let var_core_value_sig0A86 = Dd(var_core_value_sig29F7),
    var_core_value_sig87E9 = var_core_value_sig0A86.findIndex(var_core_value_sig4306 => var_core_value_sig4306.id === var_core_value_sig590D),
    var_core_value_sigEB10 = var_core_value_sig0A86[var_core_value_sig87E9];
  if (!var_core_value_sigEB10 || var_core_value_sigEB10.locked === true || var_core_value_sig31F0 < (var_core_value_sigEB10.minSize ?? 0)) return null;
  let var_core_value_sig50B5 = Od(var_core_value_sig29F7, var_core_value_sigEB10, var_core_value_sig31F0),
    var_core_value_sig8A28 = var_core_value_sig0A86[var_core_value_sig87E9 + 1],
    var_core_value_sig4AEF = var_core_value_sig31F0 - var_core_value_sigEB10.size,
    var_core_value_sigD64C1 = var_core_value_sig29F7.containerData["swimlane"].lanes["map"](var_core_value_sigFCD3 => var_core_value_sigFCD3.id === var_core_value_sig590D ? {
      ...var_core_value_sigFCD3,
      size: var_core_value_sig31F0
    } : var_core_value_sigFCD3);
  if (var_core_value_sig8A28) {
    if (var_core_value_sig8A28.locked === true || var_core_value_sig8A28.collapsed === true) return null;
    let var_core_value_sig147A1 = var_core_value_sig8A28.size - var_core_value_sig4AEF;
    return var_core_value_sig147A1 < (var_core_value_sig8A28.minSize ?? 0) ? null : {
      transform: var_core_value_sig50B5,
      lanes: var_core_value_sigD64C1.map(var_core_value_sig65A1 => var_core_value_sig65A1.id === var_core_value_sig8A28.id ? {
        ...var_core_value_sig65A1,
        size: var_core_value_sig147A1
      } : var_core_value_sig65A1)
    };
  }
  return {
    transform: var_core_value_sig50B5,
    lanes: var_core_value_sigD64C1
  };
}
const Ad = {
  id: "board.operation.set-swimlane-lane-size",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig8E15, var_core_value_sig5EB1) => {
    if (!var_core_value_sig5EB1 || !var_core_value_sig5EB1.containerId || !var_core_value_sig5EB1.laneId || !Ed(var_core_value_sig5EB1.size)) return false;
    let {
        unitId: var_core_value_sig5B68,
        subUnitId: var_core_value_sig6EF5,
        containerId: var_core_value_sig5FE3,
        laneId: var_core_value_sig71B3,
        size: var_core_value_sig9860
      } = var_core_value_sig5EB1,
      var_core_value_sigAEF6 = var_core_value_sig8E15.get(L).getElementData(var_core_value_sig5B68, var_core_value_sig6EF5),
      var_core_value_sig8954 = var_core_value_sigAEF6[var_core_value_sig5FE3],
      var_core_value_sig44DA = var_core_value_sig8954 == null ? undefined : var_core_value_sig8954.element;
    if (!var_core_value_sig8954 || (var_core_value_sig44DA == null ? undefined : var_core_value_sig44DA.type) !== M.Container || var_core_value_sig44DA.locked === true || var_core_value_sig44DA.containerData["kind"] !== "swimlane" || !var_core_value_sig44DA.containerData["swimlane"]) return false;
    let var_core_value_sig2956 = kd(var_core_value_sig44DA, var_core_value_sig71B3, var_core_value_sig9860);
    if (!var_core_value_sig2956) return false;
    let var_core_value_sig744C = Ti({
      ...var_core_value_sig44DA.containerData["swimlane"],
      lanes: var_core_value_sig2956.lanes
    });
    if (ki(var_core_value_sig44DA.containerData["swimlane"], var_core_value_sig744C)) return false;
    let var_core_value_sigE2E8 = X({
        ...var_core_value_sig44DA,
        transform: var_core_value_sig2956.transform,
        containerData: {
          ...var_core_value_sig44DA.containerData,
          swimlane: var_core_value_sig744C
        }
      }),
      var_core_value_sig63A1 = {
        id: $.id,
        params: {
          unitId: var_core_value_sig5B68,
          subUnitId: var_core_value_sig6EF5,
          elementId: var_core_value_sig5FE3,
          element: var_core_value_sigE2E8,
          transform: var_core_value_sig2956.transform ? {
            ...var_core_value_sig2956.transform
          } : var_core_value_sig2956.transform
        }
      },
      var_core_value_sigDE3F = wd(var_core_value_sig5B68, var_core_value_sig6EF5, var_core_value_sigAEF6, var_core_value_sig8954, var_core_value_sigE2E8),
      var_core_value_sigBD2F = [var_core_value_sig63A1, ...var_core_value_sigDE3F.redoMutations];
    if (!Mo(var_core_value_sigAEF6, var_core_value_sigBD2F)) return false;
    let var_core_value_sig810B = {
        id: $.id,
        params: {
          unitId: var_core_value_sig5B68,
          subUnitId: var_core_value_sig6EF5,
          elementId: var_core_value_sig5FE3,
          element: X(var_core_value_sig7D37.deepClone(var_core_value_sig44DA)),
          transform: var_core_value_sig8954.transform ? {
            ...var_core_value_sig8954.transform
          } : var_core_value_sig8954.transform
        }
      },
      var_core_value_sig60D0 = [...var_core_value_sigDE3F.undoMutations, var_core_value_sig810B];
    return var_core_value_sig77FC(var_core_value_sigBD2F, var_core_value_sig8E15.get(var_core_value_sig88BA)).result ? (var_core_value_sig8E15.get(var_core_value_sig1F7B).pushUndoRedo({
      unitID: var_core_value_sig5B68,
      redoMutations: var_core_value_sigBD2F,
      undoMutations: var_core_value_sig60D0
    }), true) : false;
  }
};
function jd(var_core_value_sig8A14) {
  return JSON.parse(JSON.stringify(var_core_value_sig8A14));
}
function Md(var_core_value_sigDA561, var_core_value_sigD25D, var_core_value_sigAF2B) {
  return var_core_value_sigAF2B.map(var_core_value_sig829F => ({
    unitId: var_core_value_sigDA561,
    subUnitId: var_core_value_sigD25D,
    elementId: var_core_value_sig829F
  }));
}
function Nd(var_core_value_sig9A2B, var_core_value_sigEFBE, var_core_value_sigBBED) {
  let var_core_value_sigA6D5 = var_core_value_sigEFBE.getUnitId(),
    var_core_value_sigFE1A = var_core_value_sigEFBE.getSnapshot();
  Lo(var_core_value_sigFE1A).forEach(var_core_value_sig534C => {
    let var_core_value_sigABB7 = Bo(var_core_value_sigFE1A, var_core_value_sig534C);
    if (!var_core_value_sigABB7) return;
    let var_core_value_sig9071 = var_core_value_sig9A2B.getElementOrder(var_core_value_sigA6D5, var_core_value_sig534C),
      var_core_value_sig01A9 = new Set(var_core_value_sig9071),
      {
        data: var_core_value_sig9477,
        order: var_core_value_sig917C
      } = Jt(var_core_value_sigA6D5, var_core_value_sig534C, var_core_value_sigABB7.elements, var_core_value_sigABB7.elementOrder, var_core_value_sigBBED),
      var_core_value_sig27E2 = new Set(var_core_value_sig917C),
      var_core_value_sig10D7 = {
        ...var_core_value_sig9A2B.getElementDataForUnit(var_core_value_sigA6D5),
        [var_core_value_sig534C]: {
          data: var_core_value_sig9477,
          order: var_core_value_sig917C
        }
      };
    var_core_value_sig9A2B.registerElementData(var_core_value_sigA6D5, var_core_value_sig10D7);
    let var_core_value_sig5A1A = var_core_value_sig9071.filter(var_core_value_sig7F19 => !var_core_value_sig27E2.has(var_core_value_sig7F19)),
      var_core_value_sig77D2 = var_core_value_sig917C.filter(var_core_value_sig7827 => !var_core_value_sig01A9.has(var_core_value_sig7827)),
      var_core_value_sig625E = var_core_value_sig917C.filter(var_core_value_sig652C => var_core_value_sig01A9.has(var_core_value_sig652C));
    var_core_value_sig5A1A.length > 0 && var_core_value_sig9A2B.removeElementNotification(Md(var_core_value_sigA6D5, var_core_value_sig534C, var_core_value_sig5A1A)), var_core_value_sig77D2.length > 0 && var_core_value_sig9A2B.addElementNotification(Md(var_core_value_sigA6D5, var_core_value_sig534C, var_core_value_sig77D2)), var_core_value_sig625E.length > 0 && var_core_value_sig9A2B.updateElementNotification(Md(var_core_value_sigA6D5, var_core_value_sig534C, var_core_value_sig625E));
  });
}
const Pd = {
  id: "board.operation.set-theme",
  type: var_core_value_sigE0AC.OPERATION,
  handler: (var_core_value_sig29A2, var_core_value_sigF50E) => {
    if (!(var_core_value_sigF50E != null && var_core_value_sigF50E.themeId) && !(var_core_value_sigF50E != null && var_core_value_sigF50E.themeData)) return false;
    let var_core_value_sigE9E0 = var_core_value_sigF50E.themeData ?? (var_core_value_sigF50E.themeId ? _t(var_core_value_sigF50E.themeId) : undefined);
    if (!var_core_value_sigE9E0) return false;
    let var_core_value_sig8DAA = var_core_value_sig29A2.get(var_core_value_sig7F3C).getUnit(var_core_value_sigF50E.unitId, var_core_value_sigC8D0.UNIVER_BOARD);
    if (!var_core_value_sig8DAA) return false;
    let var_core_value_sig4960 = jd(var_core_value_sigE9E0);
    return var_core_value_sig8DAA.setThemeData(var_core_value_sig4960), Nd(var_core_value_sig29A2.get(L), var_core_value_sig8DAA, var_core_value_sig4960), true;
  }
};
function Fd(var_core_value_sig0F6B, var_core_value_sig341C1) {
  return {
    ...var_core_value_sig0F6B,
    transform: {
      ...var_core_value_sig0F6B.transform,
      left: var_core_value_sig341C1.left,
      top: var_core_value_sig341C1.top,
      width: var_core_value_sig341C1.width,
      height: var_core_value_sig341C1.height,
      rotation: var_core_value_sig341C1.angle,
      flipX: var_core_value_sig341C1.flipX,
      flipY: var_core_value_sig341C1.flipY
    }
  };
}
function Id(var_core_value_sig289C, var_core_value_sig30A2, var_core_value_sig829D) {
  let var_core_value_sigAAB6 = new Set(var_core_value_sig30A2),
    var_core_value_sig3DA9 = var_core_value_sig829D.filter(var_core_value_sig6F04 => var_core_value_sigAAB6.has(var_core_value_sig6F04) && var_core_value_sig289C[var_core_value_sig6F04]);
  return var_core_value_sig30A2.forEach(var_core_value_sig48DA => {
    var_core_value_sig289C[var_core_value_sig48DA] && !var_core_value_sig3DA9.includes(var_core_value_sig48DA) && var_core_value_sig3DA9.push(var_core_value_sig48DA);
  }), var_core_value_sig3DA9;
}
function Ld(var_core_value_sigB62E, var_core_value_sigF383, var_core_value_sig40A4) {
  let var_core_value_sig8481 = new Set(var_core_value_sigF383),
    var_core_value_sigC6E3 = new Set(var_core_value_sigF383),
    var_core_value_sigB4C8 = var_core_value_sig40A4.filter(var_core_value_sigD327 => {
      let var_core_value_sig6694 = var_core_value_sigB62E[var_core_value_sigD327];
      if (!Q(var_core_value_sig6694) || var_core_value_sig8481.has(var_core_value_sigD327)) return false;
      let var_core_value_sig2A21 = Za(var_core_value_sig6694.element);
      return var_core_value_sig2A21.length > 0 && var_core_value_sig2A21.every(var_core_value_sig7E32 => var_core_value_sig8481.has(var_core_value_sig7E32));
    });
  return [...var_core_value_sigF383, ...var_core_value_sigB4C8.filter(var_core_value_sig0836 => var_core_value_sigC6E3.has(var_core_value_sig0836) ? false : (var_core_value_sigC6E3.add(var_core_value_sig0836), true))].sort((var_core_value_sigD95C, var_core_value_sig692E) => {
    let var_core_value_sig3FAF1 = var_core_value_sig40A4.indexOf(var_core_value_sigD95C),
      var_core_value_sig378B = var_core_value_sig40A4.indexOf(var_core_value_sig692E);
    return (var_core_value_sig3FAF1 >= 0 ? var_core_value_sig3FAF1 : 2 ** 53 - 1) - (var_core_value_sig378B >= 0 ? var_core_value_sig378B : 2 ** 53 - 1);
  });
}
function Rd(var_core_value_sig04611, var_core_value_sig6623) {
  let var_core_value_sigF875 = new Set(var_core_value_sig6623);
  return var_core_value_sig6623.filter(var_core_value_sigDE50 => {
    let var_core_value_sig3094 = var_core_value_sig04611[var_core_value_sigDE50];
    if (!Q(var_core_value_sig3094)) return true;
    let var_core_value_sig86CC = Za(var_core_value_sig3094.element);
    return var_core_value_sig86CC.length > 0 && var_core_value_sig86CC.every(var_core_value_sig4C07 => var_core_value_sigF875.has(var_core_value_sig4C07));
  });
}
function zd(var_core_value_sig1686, var_core_value_sig33AE, var_core_value_sig2556) {
  var var_core_value_sigD2A7;
  let var_core_value_sig9C84 = (var_core_value_sigD2A7 = var_core_value_sig1686[var_core_value_sig33AE]) == null ? undefined : var_core_value_sigD2A7.element["parentId"],
    var_core_value_sigCBF8 = new Set([var_core_value_sig33AE]);
  for (; var_core_value_sig9C84;) {
    if (var_core_value_sigCBF8.has(var_core_value_sig9C84)) return false;
    let var_core_value_sig79AB = var_core_value_sig1686[var_core_value_sig9C84];
    if (!var_core_value_sig79AB || var_core_value_sig79AB.element["type"] !== M.Container) return false;
    if (var_core_value_sig2556.has(var_core_value_sig9C84)) return true;
    var_core_value_sigCBF8.add(var_core_value_sig9C84), var_core_value_sig9C84 = var_core_value_sig79AB.element["parentId"];
  }
  return false;
}
function Bd(var_core_value_sigF20C, var_core_value_sig9DBC) {
  let var_core_value_sig0598 = new Set(var_core_value_sig9DBC);
  return var_core_value_sig9DBC.filter(var_core_value_sig78681 => {
    let var_core_value_sig9921 = var_core_value_sigF20C[var_core_value_sig78681];
    return var_core_value_sig9921 ? Q(var_core_value_sig9921) ? true : !zd(var_core_value_sigF20C, var_core_value_sig78681, var_core_value_sig0598) : false;
  });
}
function Vd(var_core_value_sigBC6B, var_core_value_sigFB55) {
  let var_core_value_sigE9FC = Array.from(new Set(var_core_value_sigFB55.map(var_core_value_sig59BF => {
    var var_core_value_sigF001;
    return (var_core_value_sigF001 = var_core_value_sigBC6B[var_core_value_sig59BF]) == null ? undefined : var_core_value_sigF001.element["parentId"];
  })));
  return var_core_value_sigE9FC.length === 1 ? var_core_value_sigE9FC[0] : Gn(var_core_value_sigBC6B, var_core_value_sigFB55);
}
function Hd(var_core_value_sigDC35, var_core_value_sigD83C1) {
  var var_core_value_sigF1CF;
  let var_core_value_sig8B63 = var_core_value_sigD83C1 ? (var_core_value_sigF1CF = var_core_value_sigDC35[var_core_value_sigD83C1]) == null ? undefined : var_core_value_sigF1CF.element : undefined;
  return (var_core_value_sig8B63 == null ? undefined : var_core_value_sig8B63.type) === M.Container && var_core_value_sig8B63.containerData["behavior"].membershipLocked;
}
function Ud(var_core_value_sig65C4, var_core_value_sig47D2) {
  var var_core_value_sig3AE6;
  if (!var_core_value_sig47D2) return true;
  let var_core_value_sigEFE1 = (var_core_value_sig3AE6 = var_core_value_sig65C4[var_core_value_sig47D2]) == null ? undefined : var_core_value_sig3AE6.element;
  if (!var_core_value_sigEFE1 || var_core_value_sigEFE1.type !== M.Container) return false;
  let var_core_value_sigCA12 = var_core_value_sigEFE1.containerData["behavior"];
  return !var_core_value_sigCA12.membershipLocked && var_core_value_sigCA12.acceptsChildren && var_core_value_sigCA12.acceptsContainer && var_core_value_sigCA12.allowNested;
}
function Wd(var_core_value_sig3F5E, var_core_value_sig001D, var_core_value_sigED13) {
  var var_core_value_sigCD11, var_core_value_sigEDD6;
  if (!var_core_value_sig001D) return;
  let var_core_value_sig69451 = (var_core_value_sigCD11 = var_core_value_sig3F5E[var_core_value_sig001D]) == null ? undefined : var_core_value_sigCD11.element,
    var_core_value_sig7FD1 = U(var_core_value_sig3F5E, var_core_value_sig001D);
  if (!(!var_core_value_sig69451 || var_core_value_sig69451.type !== M.Container || var_core_value_sig69451.containerData["kind"] !== "swimlane" || !var_core_value_sig7FD1)) return (var_core_value_sigEDD6 = Ui(var_core_value_sig69451, var_core_value_sig7FD1, var_core_value_sigED13)) == null ? undefined : var_core_value_sigEDD6.lane["id"];
}
const Gd = {
    id: "board.operation.wrap-elements-in-container",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigB194, var_core_value_sigBD19) => {
      if (!var_core_value_sigBD19 || var_core_value_sigBD19.elementIds["length"] === 0) return false;
      let {
          unitId: var_core_value_sig8F33,
          subUnitId: var_core_value_sigBEA6
        } = var_core_value_sigBD19,
        var_core_value_sig6EB1 = var_core_value_sigB194.get(L),
        var_core_value_sig8C0A = var_core_value_sig6EB1.getElementData(var_core_value_sig8F33, var_core_value_sigBEA6),
        var_core_value_sigAE7D = var_core_value_sig6EB1.getElementOrder(var_core_value_sig8F33, var_core_value_sigBEA6);
      if (new Set(var_core_value_sigBD19.elementIds).size !== var_core_value_sigBD19.elementIds["length"] || var_core_value_sigBD19.elementIds["some"](var_core_value_sigE511 => !var_core_value_sig8C0A[var_core_value_sigE511])) return false;
      let var_core_value_sig6560 = Ld(var_core_value_sig8C0A, Rd(var_core_value_sig8C0A, po(var_core_value_sig8C0A, Id(var_core_value_sig8C0A, var_core_value_sigBD19.elementIds, var_core_value_sigAE7D))), var_core_value_sigAE7D);
      if (var_core_value_sig6560.length === 0) return false;
      let var_core_value_sigFF5B = Bd(var_core_value_sig8C0A, var_core_value_sig6560);
      if (var_core_value_sigFF5B.length === 0) return false;
      let var_core_value_sig4B861 = var_core_value_sigFF5B.filter(var_core_value_sig1C81 => {
        var var_core_value_sig2C6A;
        return ((var_core_value_sig2C6A = var_core_value_sig8C0A[var_core_value_sig1C81]) == null ? undefined : var_core_value_sig2C6A.element["type"]) !== M.Connector;
      });
      if (var_core_value_sig4B861.length === 0) return false;
      let var_core_value_sig2BFF = var_core_value_sig4B861.map(var_core_value_sig7207 => {
        var var_core_value_sig297F;
        return (var_core_value_sig297F = H(var_core_value_sig8C0A, var_core_value_sig7207)) == null ? undefined : var_core_value_sig297F.worldTransform;
      }).filter(var_core_value_sigA95A => !!var_core_value_sigA95A);
      if (var_core_value_sig2BFF.length !== var_core_value_sig4B861.length) return false;
      let var_core_value_sig1A22 = var_core_value_sig2BFF.map(var_core_value_sig94D6 => ({
          left: var_core_value_sig94D6.left ?? 0,
          top: var_core_value_sig94D6.top ?? 0,
          width: var_core_value_sig94D6.width ?? 0,
          height: var_core_value_sig94D6.height ?? 0
        })),
        var_core_value_sig28FE = Math.min(...var_core_value_sig1A22.map(var_core_value_sigC22E => var_core_value_sigC22E.left)),
        var_core_value_sig67BE = Math.min(...var_core_value_sig1A22.map(var_core_value_sig2321 => var_core_value_sig2321.top)),
        var_core_value_sigCB03 = Math.max(...var_core_value_sig1A22.map(q)),
        var_core_value_sig0258 = Math.max(...var_core_value_sig1A22.map(J)),
        var_core_value_sig3398 = {
          left: var_core_value_sig28FE,
          top: var_core_value_sig67BE,
          width: var_core_value_sigCB03 - var_core_value_sig28FE,
          height: var_core_value_sig0258 - var_core_value_sig67BE
        },
        var_core_value_sig8653 = Vd(var_core_value_sig8C0A, var_core_value_sigFF5B);
      if (!Ud(var_core_value_sig8C0A, var_core_value_sig8653) || var_core_value_sigFF5B.some(var_core_value_sigFF33 => {
        var var_core_value_sig16E0;
        return Hd(var_core_value_sig8C0A, (var_core_value_sig16E0 = var_core_value_sig8C0A[var_core_value_sigFF33]) == null ? undefined : var_core_value_sig16E0.element["parentId"]);
      })) return false;
      let var_core_value_sig2BF2 = $i.padding,
        var_core_value_sig87CD = $i.headerSize,
        var_core_value_sig8BCB = {
          left: var_core_value_sig28FE - var_core_value_sig2BF2.left,
          top: var_core_value_sig67BE - var_core_value_sig87CD - var_core_value_sig2BF2.top,
          width: var_core_value_sigCB03 - var_core_value_sig28FE + var_core_value_sig2BF2.left + var_core_value_sig2BF2.right,
          height: var_core_value_sig0258 - var_core_value_sig67BE + var_core_value_sig87CD + var_core_value_sig2BF2.top + var_core_value_sig2BF2.bottom,
          angle: 0
        },
        var_core_value_sig86E9 = Wd(var_core_value_sig8C0A, var_core_value_sig8653, var_core_value_sig3398),
        var_core_value_sig41D0 = G(W(var_core_value_sig8C0A, {
          parentId: var_core_value_sig8653,
          worldTransform: Xn(var_core_value_sig8BCB)
        })),
        var_core_value_sigBA2B = fa({
          id: var_core_value_sigBD19.containerId,
          title: var_core_value_sigBD19.title,
          parentId: var_core_value_sig8653,
          laneId: var_core_value_sig86E9,
          left: var_core_value_sig41D0.left,
          top: var_core_value_sig41D0.top,
          width: var_core_value_sig41D0.width,
          height: var_core_value_sig41D0.height
        }),
        var_core_value_sig0140 = Math.min(...var_core_value_sig6560.map(var_core_value_sig213C => {
          let var_core_value_sig31F8 = var_core_value_sigAE7D.indexOf(var_core_value_sig213C);
          return var_core_value_sig31F8 >= 0 ? var_core_value_sig31F8 : var_core_value_sigAE7D.length;
        })),
        var_core_value_sig4A78 = {
          ...var_core_value_sig8C0A,
          [var_core_value_sigBA2B.id]: {
            unitId: var_core_value_sig8F33,
            subUnitId: var_core_value_sigBEA6,
            elementId: var_core_value_sigBA2B.id,
            transform: {
              left: var_core_value_sigBA2B.transform["left"],
              top: var_core_value_sigBA2B.transform["top"],
              width: var_core_value_sigBA2B.transform["width"],
              height: var_core_value_sigBA2B.transform["height"],
              angle: var_core_value_sigBA2B.transform["rotation"] ?? 0,
              flipX: var_core_value_sigBA2B.transform["flipX"],
              flipY: var_core_value_sigBA2B.transform["flipY"]
            },
            element: var_core_value_sigBA2B
          }
        },
        var_core_value_sig2BE6 = [];
      if (var_core_value_sigFF5B.forEach(var_core_value_sig6905 => {
        var var_core_value_sigC3C0;
        let var_core_value_sig1F39 = var_core_value_sig8C0A[var_core_value_sig6905],
          var_core_value_sig9256 = (var_core_value_sigC3C0 = H(var_core_value_sig8C0A, var_core_value_sig6905)) == null ? undefined : var_core_value_sigC3C0.worldTransform;
        if (!var_core_value_sig9256) return;
        let var_core_value_sig98A0 = G(W(var_core_value_sig4A78, {
            parentId: var_core_value_sigBA2B.id,
            worldTransform: var_core_value_sig9256
          })),
          var_core_value_sig3EBD = Fd({
            ...var_core_value_sig1F39.element,
            parentId: var_core_value_sigBA2B.id,
            laneId: undefined
          }, var_core_value_sig98A0);
        var_core_value_sig2BE6.push({
          id: $.id,
          params: {
            unitId: var_core_value_sig8F33,
            subUnitId: var_core_value_sigBEA6,
            elementId: var_core_value_sig6905,
            element: var_core_value_sig3EBD,
            transform: var_core_value_sig98A0
          }
        });
      }), var_core_value_sig2BE6.length !== var_core_value_sigFF5B.length) return false;
      let var_core_value_sig55AD = [{
          id: Ss.id,
          params: {
            unitId: var_core_value_sig8F33,
            subUnitId: var_core_value_sigBEA6,
            element: var_core_value_sigBA2B,
            insertIndex: var_core_value_sig0140
          }
        }, ...var_core_value_sig2BE6],
        var_core_value_sig4373 = [...var_core_value_sigFF5B.map(var_core_value_sig1AC3 => {
          let var_core_value_sig66B8 = var_core_value_sig8C0A[var_core_value_sig1AC3];
          return {
            id: $.id,
            params: {
              unitId: var_core_value_sig8F33,
              subUnitId: var_core_value_sigBEA6,
              elementId: var_core_value_sig1AC3,
              element: var_core_value_sig7D37.deepClone(var_core_value_sig66B8.element),
              transform: var_core_value_sig66B8.transform ? {
                ...var_core_value_sig66B8.transform
              } : var_core_value_sig66B8.transform
            }
          };
        }), {
          id: dc.id,
          params: {
            unitId: var_core_value_sig8F33,
            subUnitId: var_core_value_sigBEA6,
            elementId: var_core_value_sigBA2B.id
          }
        }];
      return !No(var_core_value_sig8C0A, var_core_value_sig55AD) || !var_core_value_sig77FC(var_core_value_sig55AD, var_core_value_sigB194.get(var_core_value_sig88BA)).result ? false : (var_core_value_sigB194.get(var_core_value_sig1F7B).pushUndoRedo({
        unitID: var_core_value_sig8F33,
        redoMutations: var_core_value_sig55AD,
        undoMutations: var_core_value_sig4373
      }), true);
    }
  },
  Kd = {
    width: 1920,
    height: 1080
  };
function qd(var_core_value_sig5FAB = var_core_value_sig90E7(6), var_core_value_sig3F6D = "Untitled Board", var_core_value_sig569B) {
  let var_core_value_sigF850 = var_core_value_sig90E7(6),
    var_core_value_sig5D78 = {
      id: var_core_value_sigF850,
      pageType: "page",
      name: "Board",
      elementOrder: [],
      elements: {},
      background: {
        type: "none"
      }
    },
    var_core_value_sig42FA = [var_core_value_sigF850],
    var_core_value_sig0E18 = {
      [var_core_value_sigF850]: var_core_value_sig5D78
    },
    var_core_value_sig6BCD1 = {
      id: var_core_value_sig5FAB,
      name: var_core_value_sig3F6D,
      appVersion: "0.0.1",
      defaultPageSize: {
        ...Kd
      },
      pageOrder: var_core_value_sig42FA,
      pages: var_core_value_sig0E18,
      activePageId: var_core_value_sigF850,
      slideOrder: var_core_value_sig42FA,
      slides: var_core_value_sig0E18,
      activeSlideId: var_core_value_sigF850,
      theme: Ot
    };
  return var_core_value_sig569B != null && (var_core_value_sig6BCD1.locale = var_core_value_sig569B), var_core_value_sig6BCD1;
}
function Jd(var_core_value_sig883B, var_core_value_sigA9FC) {
  return Object.fromEntries(Object.values(var_core_value_sigA9FC.elements).map(var_core_value_sig4C7F => [var_core_value_sig4C7F.id, {
    unitId: var_core_value_sig883B,
    subUnitId: var_core_value_sigA9FC.id,
    elementId: var_core_value_sig4C7F.id,
    element: var_core_value_sig4C7F,
    transform: {
      left: var_core_value_sig4C7F.transform["left"] ?? 0,
      top: var_core_value_sig4C7F.transform["top"] ?? 0,
      width: var_core_value_sig4C7F.transform["width"] ?? 0,
      height: var_core_value_sig4C7F.transform["height"] ?? 0,
      angle: var_core_value_sig4C7F.transform["rotation"] ?? 0,
      flipX: var_core_value_sig4C7F.transform["flipX"],
      flipY: var_core_value_sig4C7F.transform["flipY"]
    }
  }]));
}
function Yd(var_core_value_sigE15C) {
  return var_core_value_sigE15C.left === undefined || var_core_value_sigE15C.top === undefined || var_core_value_sigE15C.width === undefined || var_core_value_sigE15C.height === undefined ? null : {
    left: var_core_value_sigE15C.left,
    top: var_core_value_sigE15C.top,
    width: var_core_value_sigE15C.width,
    height: var_core_value_sigE15C.height
  };
}
function Xd(var_core_value_sig36B1, var_core_value_sigD03D) {
  var_core_value_sig36B1.elements[var_core_value_sigD03D.id] = var_core_value_sigD03D;
}
function Zd(var_core_value_sig2952) {
  let {
    padding: var_core_value_sig53FF
  } = var_core_value_sig2952.containerData;
  return !!var_core_value_sig53FF && var_core_value_sig53FF.top === 0 && var_core_value_sig53FF.right === 0 && var_core_value_sig53FF.bottom === 0 && var_core_value_sig53FF.left === 0;
}
function Qd(var_core_value_sigF73F) {
  let var_core_value_sigE4F5 = false;
  return Object.values(var_core_value_sigF73F.elements).forEach(var_core_value_sig2543 => {
    var var_core_value_sigB230;
    let var_core_value_sig407E = var_core_value_sig2543.type === M.Container && var_core_value_sig2543.containerData["kind"] === "swimlane" ? var_core_value_sig2543.containerData["swimlane"] : undefined;
    if (var_core_value_sig2543.type !== M.Container || var_core_value_sig2543.containerData["kind"] !== "swimlane" || !var_core_value_sig407E || var_core_value_sig407E.laneGap === 0 && var_core_value_sig407E.headerSize !== undefined && var_core_value_sig407E.collapsedLaneSize !== undefined && Zd(var_core_value_sig2543)) return;
    let var_core_value_sig88CB = X(var_core_value_sig2543);
    if (var_core_value_sig88CB.type !== M.Container) {
      Xd(var_core_value_sigF73F, var_core_value_sig88CB), var_core_value_sigE4F5 = true;
      return;
    }
    let var_core_value_sigD615 = (var_core_value_sigB230 = var_core_value_sig88CB.containerData["swimlane"]) == null ? undefined : var_core_value_sigB230.orientation;
    Xd(var_core_value_sigF73F, {
      ...var_core_value_sig88CB,
      containerData: {
        ...var_core_value_sig88CB.containerData,
        swimlane: var_core_value_sig88CB.containerData["swimlane"] ? {
          ...var_core_value_sig88CB.containerData["swimlane"],
          headerSize: var_core_value_sig88CB.containerData["swimlane"].headerSize ?? (var_core_value_sigD615 === "horizontal" ? Y.horizontalHeaderSize : Y.verticalHeaderSize),
          collapsedLaneSize: var_core_value_sig88CB.containerData["swimlane"].collapsedLaneSize ?? Y.collapsedLaneSize
        } : var_core_value_sig88CB.containerData["swimlane"]
      }
    }), var_core_value_sigE4F5 = true;
  }), var_core_value_sigE4F5;
}
function $d(var_core_value_sig0059) {
  let var_core_value_sig39B6 = false;
  return Object.values(var_core_value_sig0059.elements).forEach(var_core_value_sigB708 => {
    if (var_core_value_sigB708.type !== M.Container) return;
    let var_core_value_sig60EF = Ta(var_core_value_sigB708);
    var_core_value_sig60EF !== var_core_value_sigB708 && (Xd(var_core_value_sig0059, var_core_value_sig60EF), var_core_value_sig39B6 = true);
  }), var_core_value_sig39B6;
}
function ef(var_core_value_sig119D) {
  let var_core_value_sigB0F8 = false;
  return Object.values(var_core_value_sig119D.elements).forEach(var_core_value_sigA6FB => {
    var_core_value_sigA6FB.type === M.Container && (var_core_value_sigA6FB.transform["rotation"] ?? 0) !== 0 && (Xd(var_core_value_sig119D, {
      ...var_core_value_sigA6FB,
      transform: {
        ...var_core_value_sigA6FB.transform,
        rotation: 0
      }
    }), var_core_value_sigB0F8 = true);
  }), var_core_value_sigB0F8;
}
function tf(var_core_value_sigD7E0, var_core_value_sigA8CD) {
  let var_core_value_sig246C = var_core_value_sigD7E0.elements[var_core_value_sigA8CD];
  return !var_core_value_sig246C || var_core_value_sig246C.type !== M.Container || !var_core_value_sig246C.containerData["behavior"].membershipLocked || var_core_value_sig246C.containerData["behavior"].autoResize ? false : (Xd(var_core_value_sigD7E0, {
    ...var_core_value_sig246C,
    containerData: {
      ...var_core_value_sig246C.containerData,
      behavior: {
        ...var_core_value_sig246C.containerData["behavior"],
        autoResize: true
      }
    }
  }), true);
}
function nf(var_core_value_sig3282, var_core_value_sig47FC, var_core_value_sigF54B) {
  return {
    ...var_core_value_sig3282,
    parentId: var_core_value_sig47FC,
    laneId: var_core_value_sigF54B
  };
}
function rf(var_core_value_sigC23B1, var_core_value_sigD35A, var_core_value_sigD958) {
  var var_core_value_sig1CD1;
  if (!var_core_value_sigD35A) return false;
  let var_core_value_sig4B51 = var_core_value_sigC23B1.elements[var_core_value_sigD35A];
  return (var_core_value_sig4B51 == null ? undefined : var_core_value_sig4B51.type) === M.Container && var_core_value_sig4B51.containerData["kind"] === "swimlane" && ((var_core_value_sig1CD1 = var_core_value_sig4B51.containerData["swimlane"]) == null ? undefined : var_core_value_sig1CD1.lanes["some"](var_core_value_sigD6EA => var_core_value_sigD6EA.id === var_core_value_sigD958)) === true;
}
function af(var_core_value_sigB58E, var_core_value_sig0094, var_core_value_sig63A21, var_core_value_sig5703) {
  var var_core_value_sigCE23, var_core_value_sig853E, var_core_value_sigE8A4;
  if (!var_core_value_sig0094) return;
  let var_core_value_sig33CB = (var_core_value_sigCE23 = var_core_value_sigB58E[var_core_value_sig0094]) == null ? undefined : var_core_value_sigCE23.element;
  if (var_core_value_sig63A21 && (var_core_value_sig33CB == null ? undefined : var_core_value_sig33CB.type) === M.Container && var_core_value_sig33CB.containerData["kind"] === "swimlane" && ((var_core_value_sig853E = var_core_value_sig33CB.containerData["swimlane"]) == null ? undefined : var_core_value_sig853E.lanes["some"](var_core_value_sigA2D31 => var_core_value_sigA2D31.id === var_core_value_sig63A21)) === true) return var_core_value_sig63A21;
  let var_core_value_sigFF80 = U(var_core_value_sigB58E, var_core_value_sig0094);
  if (!((var_core_value_sig33CB == null ? undefined : var_core_value_sig33CB.type) !== M.Container || var_core_value_sig33CB.containerData["kind"] !== "swimlane" || !var_core_value_sigFF80 || !var_core_value_sig5703)) return (var_core_value_sigE8A4 = Ui(var_core_value_sig33CB, var_core_value_sigFF80, var_core_value_sig5703)) == null ? undefined : var_core_value_sigE8A4.lane["id"];
}
function of(var_core_value_sig0145, var_core_value_sig23B3, var_core_value_sig5075, var_core_value_sigDCD9) {
  let var_core_value_sig7478 = var_core_value_sig5075,
    var_core_value_sig358D = new Set([var_core_value_sigDCD9]);
  for (; var_core_value_sig7478;) {
    var var_core_value_sig81FD, var_core_value_sigB6F0;
    if (var_core_value_sig358D.has(var_core_value_sig7478)) return;
    let var_core_value_sig8E74 = (var_core_value_sig81FD = var_core_value_sig23B3[var_core_value_sig7478]) == null ? undefined : var_core_value_sig81FD.element;
    if (!var_core_value_sig8E74 || var_core_value_sig8E74.type !== M.Container) return;
    if (var_core_value_sig8E74.visible !== false) return var_core_value_sig7478;
    var_core_value_sig358D.add(var_core_value_sig7478), var_core_value_sig7478 = (var_core_value_sigB6F0 = var_core_value_sig0145.elements[var_core_value_sig7478]) == null ? undefined : var_core_value_sigB6F0.parentId;
  }
}
function sf(var_core_value_sig1BCE) {
  return [...var_core_value_sig1BCE.elementOrder, ...Object.keys(var_core_value_sig1BCE.elements).filter(var_core_value_sig727A => !var_core_value_sig1BCE.elementOrder["includes"](var_core_value_sig727A))];
}
function cf(var_core_value_sig1C8D, var_core_value_sigFE6A) {
  let var_core_value_sigD935 = false;
  return sf(var_core_value_sigFE6A).forEach(var_core_value_sig6AF1 => {
    var var_core_value_sig3F6A, var_core_value_sig23B4;
    let var_core_value_sig350C = var_core_value_sigFE6A.elements[var_core_value_sig6AF1];
    if (!var_core_value_sig350C) return;
    let var_core_value_sig2335 = var_core_value_sig350C.parentId,
      var_core_value_sig6233 = var_core_value_sig350C.laneId,
      var_core_value_sig4230 = Jd(var_core_value_sig1C8D, var_core_value_sigFE6A),
      var_core_value_sig6136 = var_core_value_sig2335 ? (var_core_value_sig3F6A = var_core_value_sig4230[var_core_value_sig2335]) == null ? undefined : var_core_value_sig3F6A.element : undefined,
      var_core_value_sigD25E = (var_core_value_sig23B4 = H(var_core_value_sig4230, var_core_value_sig6AF1)) == null ? undefined : var_core_value_sig23B4.worldTransform,
      var_core_value_sigE1BC = U(var_core_value_sig4230, var_core_value_sig6AF1);
    var_core_value_sig2335 && (!var_core_value_sig6136 || var_core_value_sig6136.type !== M.Container) ? var_core_value_sig2335 = undefined : var_core_value_sig2335 && (var_core_value_sig6136 == null ? undefined : var_core_value_sig6136.visible) === false ? var_core_value_sig2335 = of(var_core_value_sigFE6A, var_core_value_sig4230, var_core_value_sig6136.parentId, var_core_value_sig6AF1) : var_core_value_sig2335 && Wn(var_core_value_sig4230, var_core_value_sig6AF1, var_core_value_sig2335) && (var_core_value_sig2335 = undefined);
    let var_core_value_sigCF441 = var_core_value_sig2335 !== var_core_value_sig350C.parentId;
    if (var_core_value_sig6233 && !rf(var_core_value_sigFE6A, var_core_value_sig2335, var_core_value_sig6233) && (var_core_value_sig6233 = undefined), var_core_value_sigCF441 && (var_core_value_sig6233 = af(var_core_value_sig4230, var_core_value_sig2335, var_core_value_sig6233, var_core_value_sigE1BC)), var_core_value_sigCF441 || var_core_value_sig6233 !== var_core_value_sig350C.laneId) {
      let var_core_value_sig104C = var_core_value_sigD25E ? W(var_core_value_sig4230, {
        parentId: var_core_value_sig2335,
        worldTransform: var_core_value_sigD25E
      }) : var_core_value_sig350C.transform;
      Xd(var_core_value_sigFE6A, {
        ...nf(var_core_value_sig350C, var_core_value_sig2335, var_core_value_sig6233),
        transform: {
          ...var_core_value_sig350C.transform,
          ...var_core_value_sig104C
        }
      }), var_core_value_sigD935 = true;
    }
  }), var_core_value_sigD935;
}
function lf(var_core_value_sig0C98, var_core_value_sig48BC) {
  let var_core_value_sig5A73 = false;
  return sf(var_core_value_sig48BC).forEach(var_core_value_sig3C97 => {
    var var_core_value_sigA920;
    let var_core_value_sigAD561 = var_core_value_sig48BC.elements[var_core_value_sig3C97];
    if (!var_core_value_sigAD561 || var_core_value_sigAD561.type !== M.Connector) return;
    let var_core_value_sig04541 = Jd(var_core_value_sig0C98, var_core_value_sig48BC),
      var_core_value_sigEE1A = oo(var_core_value_sig04541, var_core_value_sigAD561);
    if (var_core_value_sigEE1A.parentId === var_core_value_sigAD561.parentId && var_core_value_sigEE1A.laneId === var_core_value_sigAD561.laneId) return;
    let var_core_value_sig4107 = (var_core_value_sigA920 = H(var_core_value_sig04541, var_core_value_sig3C97)) == null ? undefined : var_core_value_sigA920.worldTransform;
    var_core_value_sig4107 && (Xd(var_core_value_sig48BC, {
      ...var_core_value_sigAD561,
      parentId: var_core_value_sigEE1A.parentId,
      laneId: var_core_value_sigEE1A.laneId,
      transform: {
        ...var_core_value_sigAD561.transform,
        ...W(var_core_value_sig04541, {
          parentId: var_core_value_sigEE1A.parentId,
          worldTransform: var_core_value_sig4107
        })
      }
    }), var_core_value_sig5A73 = true);
  }), var_core_value_sig5A73;
}
function uf(var_core_value_sig3E85, var_core_value_sig3AED) {
  let var_core_value_sig9CD5 = false,
    var_core_value_sigF319 = sf(var_core_value_sig3AED);
  return var_core_value_sigF319.forEach(var_core_value_sigF35C => {
    let var_core_value_sigEF8D = var_core_value_sig3AED.elements[var_core_value_sigF35C];
    if (!var_core_value_sigEF8D || var_core_value_sigEF8D.type !== M.Container || !var_core_value_sigEF8D.containerData["behavior"].membershipLocked) return;
    tf(var_core_value_sig3AED, var_core_value_sigF35C) && (var_core_value_sig9CD5 = true);
    let var_core_value_sigE025 = Jd(var_core_value_sig3E85, var_core_value_sig3AED),
      var_core_value_sigD549 = U(var_core_value_sigE025, var_core_value_sigF35C);
    if (!var_core_value_sigD549) return;
    let var_core_value_sigC79E = var_core_value_sigF319.filter(var_core_value_sig841D => {
        var var_core_value_sig90CB;
        return ((var_core_value_sig90CB = var_core_value_sig3AED.elements[var_core_value_sig841D]) == null ? undefined : var_core_value_sig90CB.parentId) === var_core_value_sigF35C;
      }),
      var_core_value_sig9221 = new Map(var_core_value_sigC79E.map(var_core_value_sigBDF5 => {
        var var_core_value_sigACC6;
        return [var_core_value_sigBDF5, (var_core_value_sigACC6 = H(var_core_value_sigE025, var_core_value_sigBDF5)) == null ? undefined : var_core_value_sigACC6.worldTransform];
      })),
      var_core_value_sig0351 = yi([Sc(var_core_value_sigEF8D, var_core_value_sigD549), ...var_core_value_sigC79E.filter(var_core_value_sig1614 => {
        var var_core_value_sig85C3;
        return ((var_core_value_sig85C3 = var_core_value_sig3AED.elements[var_core_value_sig1614]) == null ? undefined : var_core_value_sig85C3.type) !== M.Connector;
      }).map(var_core_value_sigB996 => U(var_core_value_sigE025, var_core_value_sigB996)).filter(var_core_value_sig4BBA => !!var_core_value_sig4BBA)]);
    if (!var_core_value_sig0351) return;
    let var_core_value_sig4686 = Ec(var_core_value_sigEF8D, var_core_value_sigD549, var_core_value_sig0351);
    if (var_core_value_sig4686.left === var_core_value_sigD549.left && var_core_value_sig4686.top === var_core_value_sigD549.top && var_core_value_sig4686.width === var_core_value_sigD549.width && var_core_value_sig4686.height === var_core_value_sigD549.height) return;
    let var_core_value_sig8E1C = W(Jd(var_core_value_sig3E85, var_core_value_sig3AED), {
      parentId: var_core_value_sigEF8D.parentId,
      worldTransform: {
        ...var_core_value_sigEF8D.transform,
        ...var_core_value_sig4686,
        rotation: 0
      }
    });
    Xd(var_core_value_sig3AED, {
      ...var_core_value_sigEF8D,
      transform: {
        ...var_core_value_sigEF8D.transform,
        ...var_core_value_sig8E1C
      }
    }), var_core_value_sig9CD5 = true;
    let var_core_value_sigD719 = Jd(var_core_value_sig3E85, var_core_value_sig3AED);
    var_core_value_sig9221.forEach((var_core_value_sig6201, var_core_value_sig5151) => {
      let var_core_value_sigB542 = var_core_value_sig3AED.elements[var_core_value_sig5151];
      !var_core_value_sigB542 || !var_core_value_sig6201 || Xd(var_core_value_sig3AED, {
        ...var_core_value_sigB542,
        laneId: af(var_core_value_sigD719, var_core_value_sigF35C, var_core_value_sigB542.laneId, Yd(var_core_value_sig6201)),
        transform: {
          ...var_core_value_sigB542.transform,
          ...W(var_core_value_sigD719, {
            parentId: var_core_value_sigF35C,
            worldTransform: var_core_value_sig6201
          })
        }
      });
    });
  }), var_core_value_sig9CD5;
}
function df(var_core_value_sig1E6B, var_core_value_sigC103) {
  return Object.fromEntries(Object.entries(var_core_value_sigC103).map(([var_core_value_sig323C, var_core_value_sig015D]) => {
    let var_core_value_sigBF8B = {
        ...var_core_value_sig015D,
        elements: {
          ...var_core_value_sig015D.elements
        },
        elementOrder: [...var_core_value_sig015D.elementOrder]
      },
      var_core_value_sigF7CE = $d(var_core_value_sigBF8B),
      var_core_value_sig7CF1 = false;
    Object.values(var_core_value_sigBF8B.elements).forEach(var_core_value_sigBB6C => {
      let var_core_value_sigE2BF = Cn(Pn(Wa(var_core_value_sigBB6C)));
      var_core_value_sigE2BF !== var_core_value_sigBB6C && (Xd(var_core_value_sigBF8B, var_core_value_sigE2BF), var_core_value_sig7CF1 = true);
    });
    let var_core_value_sigA552 = Qd(var_core_value_sigBF8B),
      var_core_value_sigAE32 = ef(var_core_value_sigBF8B),
      var_core_value_sig9B4D = cf(var_core_value_sig1E6B, var_core_value_sigBF8B),
      var_core_value_sig2704 = lf(var_core_value_sig1E6B, var_core_value_sigBF8B),
      var_core_value_sigD0CC = false,
      var_core_value_sigF347 = Math.max(1, Object.keys(var_core_value_sigBF8B.elements).length);
    for (let var_core_value_sigB8C7 = 0; var_core_value_sigB8C7 < var_core_value_sigF347 && uf(var_core_value_sig1E6B, var_core_value_sigBF8B); var_core_value_sigB8C7++) var_core_value_sigD0CC = true;
    let var_core_value_sig80C6 = lf(var_core_value_sig1E6B, var_core_value_sigBF8B);
    return [var_core_value_sig323C, var_core_value_sigF7CE || var_core_value_sig7CF1 || var_core_value_sigA552 || var_core_value_sigAE32 || var_core_value_sig9B4D || var_core_value_sig2704 || var_core_value_sigD0CC || var_core_value_sig80C6 ? var_core_value_sigBF8B : var_core_value_sig015D];
  }));
}
var ff = class extends var_core_value_sigA77D {
    constructor(var_core_value_sigEBFB) {
      super(), I(this, "type", var_core_value_sigC8D0.UNIVER_BOARD), I(this, "_snapshot", undefined), I(this, "_name$", undefined), I(this, "_theme$", undefined), I(this, "_pageBackgroundChanged$", new var_core_value_sig44B7()), I(this, "name$", undefined), I(this, "theme$", undefined), I(this, "pageBackgroundChanged$", this._pageBackgroundChanged$["asObservable"]()), this._snapshot = var_core_value_sig7D37.isEmptyObject(var_core_value_sigEBFB) ? qd() : this._normalizeSnapshot(var_core_value_sigEBFB), this._name$ = new var_core_value_sigAE54(this._snapshot["name"]), this.name$ = this._name$["asObservable"](), this._theme$ = new var_core_value_sigAE54(this.getThemeData()), this.theme$ = this._theme$["asObservable"]();
    }
    getUnitId() {
      return this._snapshot["id"];
    }
    setName(var_core_value_sigF3BF) {
      this._snapshot["name"] = var_core_value_sigF3BF, this._name$["next"](var_core_value_sigF3BF);
    }
    getSnapshot() {
      return this._snapshot;
    }
    getRev() {
      return this._snapshot["rev"] ?? 1;
    }
    incrementRev() {
      this._snapshot["rev"] = this.getRev() + 1;
    }
    setRev(var_core_value_sigAE58) {
      this._snapshot["rev"] = var_core_value_sigAE58;
    }
    dispose() {
      super.dispose(), this._pageBackgroundChanged$["complete"]();
    }
    getActivePageId() {
      let var_core_value_sig8E13 = Vo(this._snapshot);
      if (!var_core_value_sig8E13) throw Error("Board snapshot must contain at least one page.");
      return var_core_value_sig8E13;
    }
    getActivePage() {
      let var_core_value_sig3AAF = this.getActivePageId(),
        var_core_value_sig134E = this.getPage(var_core_value_sig3AAF);
      if (!var_core_value_sig134E) throw Error('Board page "' + var_core_value_sig3AAF + '" is missing from snapshot.');
      return var_core_value_sig134E;
    }
    getPage(var_core_value_sigA3C0) {
      return Bo(this._snapshot, var_core_value_sigA3C0);
    }
    setPageBackground(var_core_value_sig723F2, var_core_value_sigD044) {
      let var_core_value_sig9797 = this.getPage(var_core_value_sig723F2);
      return var_core_value_sig9797 ? (var_core_value_sigD044 ? var_core_value_sig9797.background = var_core_value_sig7D37.deepClone(var_core_value_sigD044) : Reflect.deleteProperty(var_core_value_sig9797, "background"), this._pageBackgroundChanged$["next"]({
        pageId: var_core_value_sig723F2,
        background: var_core_value_sig9797.background ? var_core_value_sig7D37.deepClone(var_core_value_sig9797.background) : undefined
      }), true) : false;
    }
    getThemeData() {
      return this._snapshot["theme"] ?? Ot;
    }
    setThemeData(var_core_value_sig8533) {
      this._snapshot["theme"] = var_core_value_sig8533, this._theme$["next"](var_core_value_sig8533);
    }
    _normalizeSnapshot(var_core_value_sig57C5) {
      let var_core_value_sig0DE9 = qd(),
        var_core_value_sigB00D = {
          ...var_core_value_sig57C5
        };
      Reflect.deleteProperty(var_core_value_sigB00D, "boardSettings");
      let var_core_value_sig57C8 = Lo(var_core_value_sig57C5, var_core_value_sig0DE9.pageOrder),
        var_core_value_sigC27D = df(var_core_value_sig57C5.id ?? var_core_value_sig0DE9.id, Ro(var_core_value_sig57C5, var_core_value_sig0DE9.pages)),
        var_core_value_sig7B95 = zo(var_core_value_sig57C5, var_core_value_sig57C8) ?? var_core_value_sig0DE9.activePageId;
      return Uo({
        ...var_core_value_sig0DE9,
        ...var_core_value_sigB00D,
        id: var_core_value_sig57C5.id ?? var_core_value_sig90E7(6),
        name: var_core_value_sig57C5.name ?? "Untitled Board",
        appVersion: var_core_value_sig57C5.appVersion ?? "0.0.1",
        defaultPageSize: var_core_value_sig57C5.defaultPageSize ?? var_core_value_sig0DE9.defaultPageSize,
        pageOrder: var_core_value_sig57C8,
        pages: var_core_value_sigC27D,
        activePageId: var_core_value_sig7B95,
        theme: var_core_value_sig57C5.theme ?? Ot
      });
    }
  },
  pf = "@univerjs-pro/boards",
  mf = "1.0.0-insiders.20260907-70fc579";
function hf(var_core_value_sigCEEA, var_core_value_sig3D91) {
  return function (var_core_value_sig7D59, var_core_value_sig5863) {
    var_core_value_sig3D91(var_core_value_sig7D59, var_core_value_sig5863, var_core_value_sigCEEA);
  };
}
function gf(var_core_value_sigD605, var_core_value_sig7D57, var_core_value_sigCDB5, var_core_value_sig7450) {
  var var_core_value_sigA3451 = arguments.length,
    var_core_value_sigB243 = var_core_value_sigA3451 < 3 ? var_core_value_sig7D57 : var_core_value_sig7450 === null ? var_core_value_sig7450 = Object.getOwnPropertyDescriptor(var_core_value_sig7D57, var_core_value_sigCDB5) : var_core_value_sig7450,
    var_core_value_sigCCEE;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigB243 = Reflect.decorate(var_core_value_sigD605, var_core_value_sig7D57, var_core_value_sigCDB5, var_core_value_sig7450);else {
    for (var var_core_value_sig1713 = var_core_value_sigD605.length - 1; var_core_value_sig1713 >= 0; var_core_value_sig1713--) (var_core_value_sigCCEE = var_core_value_sigD605[var_core_value_sig1713]) && (var_core_value_sigB243 = (var_core_value_sigA3451 < 3 ? var_core_value_sigCCEE(var_core_value_sigB243) : var_core_value_sigA3451 > 3 ? var_core_value_sigCCEE(var_core_value_sig7D57, var_core_value_sigCDB5, var_core_value_sigB243) : var_core_value_sigCCEE(var_core_value_sig7D57, var_core_value_sigCDB5)) || var_core_value_sigB243);
  }
  return var_core_value_sigA3451 > 3 && var_core_value_sigB243 && Object.defineProperty(var_core_value_sig7D57, var_core_value_sigCDB5, var_core_value_sigB243), var_core_value_sigB243;
}
let _f = class {
  constructor(var_core_value_sig5BE71, var_core_value_sigC74A, var_core_value_sig8F6A) {
    this._commandService = var_core_value_sig5BE71, this._boardElementService = var_core_value_sigC74A, this._instanceService = var_core_value_sig8F6A, I(this, "hostType", var_core_value_sigC8D0.UNIVER_BOARD);
  }
  get shapeChanged$() {
    return var_core_value_sig0C83(this._boardElementService["elementAdd$"], this._boardElementService["elementUpdate$"], this._boardElementService["elementRemove$"]).pipe(var_core_value_sig5003(var_core_value_sigA56E => [...new Set(var_core_value_sigA56E.map(({
      unitId: var_core_value_sig3F4C
    }) => var_core_value_sig3F4C))]), var_core_value_sigD285(var_core_value_sig1998 => ({
      unitId: var_core_value_sig1998
    })));
  }
  getShape(var_core_value_sig46EA) {
    let var_core_value_sig626C = this._getElement(var_core_value_sig46EA);
    return var_core_value_sig626C ? this._toSnapshot(var_core_value_sig46EA, var_core_value_sig626C) : null;
  }
  listShapes(var_core_value_sig9077) {
    return this._boardElementService["getElementOrder"](var_core_value_sig9077.unitId, var_core_value_sig9077.subUnitId).map(var_core_value_sigFF19 => this.getShape({
      ...var_core_value_sig9077,
      shapeId: var_core_value_sigFF19
    })).filter(var_core_value_sig43B8 => !!var_core_value_sig43B8);
  }
  listShapesInUnit(var_core_value_sigC76C) {
    let var_core_value_sigB23A = this._instanceService["getUnit"](var_core_value_sigC76C, var_core_value_sigC8D0.UNIVER_BOARD);
    return (var_core_value_sigB23A == null ? undefined : var_core_value_sigB23A.getSnapshot().pageOrder["flatMap"](var_core_value_sigD98F => this.listShapes({
      hostType: this.hostType,
      unitId: var_core_value_sigC76C,
      subUnitId: var_core_value_sigD98F
    }))) ?? [];
  }
  createShape(var_core_value_sigBA66, var_core_value_sig3DF0) {
    let var_core_value_sig0512 = this._createShapeElement(var_core_value_sig3DF0);
    return this._commandService["syncExecuteCommand"](sl.id, {
      unitId: var_core_value_sigBA66.unitId,
      subUnitId: var_core_value_sigBA66.subUnitId,
      element: var_core_value_sig0512
    }) ? this._toSnapshot({
      ...var_core_value_sigBA66,
      shapeId: var_core_value_sig0512.id
    }, var_core_value_sig0512) : null;
  }
  createShapes(var_core_value_sig4B2B, var_core_value_sigDF88) {
    if (var_core_value_sigDF88.length === 0) return null;
    let var_core_value_sigDB93 = var_core_value_sigDF88.map(var_core_value_sig66C0 => this._createShapeElement(var_core_value_sig66C0));
    return this._commandService["syncExecuteCommand"](al.id, {
      unitId: var_core_value_sig4B2B.unitId,
      subUnitId: var_core_value_sig4B2B.subUnitId,
      elements: var_core_value_sigDB93
    }) ? var_core_value_sigDB93.map(var_core_value_sig9D15 => this._toSnapshot({
      ...var_core_value_sig4B2B,
      shapeId: var_core_value_sig9D15.id
    }, var_core_value_sig9D15)) : null;
  }
  updateShape(var_core_value_sig67CF, var_core_value_sigCA96) {
    let var_core_value_sig6C5E = this._getElement(var_core_value_sig67CF);
    if (!var_core_value_sig6C5E) return false;
    let var_core_value_sig4997 = var_core_value_sig6C5E.type === M.Connector ? this._updateConnector(var_core_value_sig67CF, var_core_value_sig6C5E, var_core_value_sigCA96) : this._updateBasicShape(var_core_value_sig6C5E, var_core_value_sigCA96);
    return this._commandService["syncExecuteCommand"](uc.id, {
      unitId: var_core_value_sig67CF.unitId,
      subUnitId: var_core_value_sig67CF.subUnitId,
      elementId: var_core_value_sig67CF.shapeId,
      allowInactiveTarget: true,
      element: var_core_value_sig4997
    });
  }
  createFormulaLastValueMutation(var_core_value_sig72901, var_core_value_sigE835, var_core_value_sig4644) {
    let var_core_value_sig9DED = this._getElement(var_core_value_sig72901);
    if (!var_core_value_sig9DED || var_core_value_sig9DED.type !== M.Shape) return null;
    let var_core_value_sig7DE6 = var_core_value_sig9DED.shapeData["formulaBinding"];
    if (!var_core_value_sig7DE6) return null;
    let var_core_value_sig120E = {
        ...var_core_value_sig9DED.shapeData,
        formulaBinding: {
          ...var_core_value_sig7DE6,
          lastValue: var_core_value_sig7D37.deepClone(var_core_value_sig4644)
        }
      },
      var_core_value_sigD79B = {
        ...var_core_value_sig9DED,
        shapeData: var_core_value_sig120E
      };
    return {
      id: $.id,
      params: {
        unitId: var_core_value_sig72901.unitId,
        subUnitId: var_core_value_sig72901.subUnitId,
        elementId: var_core_value_sig72901.shapeId,
        allowInactiveTarget: true,
        element: var_core_value_sigD79B,
        formulaLastValueGuard: var_core_value_sigE835
      }
    };
  }
  removeShape(var_core_value_sig92A31) {
    return this._commandService["syncExecuteCommand"](Tu.id, {
      unitId: var_core_value_sig92A31.unitId,
      subUnitId: var_core_value_sig92A31.subUnitId,
      elementId: var_core_value_sig92A31.shapeId
    });
  }
  bringToFront(var_core_value_sig8911) {
    return this._arrange(var_core_value_sig8911, "front");
  }
  bringForward(var_core_value_sig8D1B) {
    return this._arrange(var_core_value_sig8D1B, "forward");
  }
  sendBackward(var_core_value_sigA915) {
    return this._arrange(var_core_value_sigA915, "backward");
  }
  sendToBack(var_core_value_sigE1F7) {
    return this._arrange(var_core_value_sigE1F7, "back");
  }
  setZOrder(var_core_value_sig4BE7, var_core_value_sigF9FF) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: var_core_value_sig4BE7.unitId,
      subUnitId: var_core_value_sig4BE7.subUnitId,
      elementIds: [var_core_value_sig4BE7.shapeId],
      zOrder: var_core_value_sigF9FF
    });
  }
  _getElement(var_core_value_sigE0E3) {
    var var_core_value_sig3AB3;
    let var_core_value_sig816E = (var_core_value_sig3AB3 = this._boardElementService["getElementById"](var_core_value_sigE0E3.unitId, var_core_value_sigE0E3.subUnitId, var_core_value_sigE0E3.shapeId)) == null ? undefined : var_core_value_sig3AB3.element;
    return (var_core_value_sig816E == null ? undefined : var_core_value_sig816E.type) === M.Shape || (var_core_value_sig816E == null ? undefined : var_core_value_sig816E.type) === M.Connector ? var_core_value_sig816E : null;
  }
  _toSnapshot(var_core_value_sigE6F3, var_core_value_sig3EE1) {
    if (var_core_value_sig3EE1.type === M.Connector) return this._connectorToSnapshot(var_core_value_sigE6F3, var_core_value_sig3EE1);
    let var_core_value_sig9673 = var_core_value_sig3EE1.shapeData["shapeType"] ?? var_core_value_sig597C.Rect;
    return {
      ...var_core_value_sigE6F3,
      shapeType: var_core_value_sig9673,
      shapeData: var_core_value_sig7D37.deepClone(var_core_value_sig3EE1.shapeData),
      name: var_core_value_sig3EE1.name,
      description: var_core_value_sig3EE1.description,
      visible: var_core_value_sig3EE1.visible !== false,
      selectable: var_core_value_sig3EE1.selectable !== false,
      transform: vf(var_core_value_sig3EE1.transform)
    };
  }
  _connectorToSnapshot(var_core_value_sig4917, var_core_value_sig3BE6) {
    var var_core_value_sigA1C9, var_core_value_sig77D6;
    let var_core_value_sigE3CE = var_core_value_sig76BA(this._getConnectorRoute(var_core_value_sig4917, var_core_value_sig3BE6), yf(var_core_value_sig3BE6.connectorData["routing"])),
      var_core_value_sig219B = xf(var_core_value_sig3BE6.connectorData["start"], var_core_value_sig3BE6.connectorData["end"]),
      var_core_value_sig4493 = Sf(var_core_value_sig3BE6.connectorData["style"]),
      var_core_value_sig8B9C = {
        shapeType: var_core_value_sigE3CE.lineType,
        adjustValues: var_core_value_sigE3CE.adjustValues,
        stroke: var_core_value_sig4493,
        relation: var_core_value_sig219B.from || var_core_value_sig219B.to ? var_core_value_sig219B : undefined,
        ln: {
          ...var_core_value_sig4493,
          startArrow: Cf((var_core_value_sigA1C9 = var_core_value_sig3BE6.connectorData["style"]) == null ? undefined : var_core_value_sigA1C9.startMarker),
          endArrow: Cf((var_core_value_sig77D6 = var_core_value_sig3BE6.connectorData["style"]) == null ? undefined : var_core_value_sig77D6.endMarker)
        }
      };
    return {
      ...var_core_value_sig4917,
      shapeType: var_core_value_sigE3CE.lineType,
      shapeData: var_core_value_sig8B9C,
      name: var_core_value_sig3BE6.name,
      description: var_core_value_sig3BE6.description,
      visible: var_core_value_sig3BE6.visible !== false,
      selectable: var_core_value_sig3BE6.selectable !== false,
      transform: {
        left: var_core_value_sigE3CE.worldRect["left"],
        top: var_core_value_sigE3CE.worldRect["top"],
        width: var_core_value_sigE3CE.worldRect["width"],
        height: var_core_value_sigE3CE.worldRect["height"],
        rotation: var_core_value_sigE3CE.rotation,
        flipX: var_core_value_sigE3CE.worldRect["flipX"] ?? false,
        flipY: var_core_value_sigE3CE.worldRect["flipY"] ?? false
      }
    };
  }
  _getConnectorRoute(var_core_value_sigA35B, var_core_value_sig82DD) {
    var var_core_value_sigAAC7, var_core_value_sig1999;
    let var_core_value_sigFB45 = this._getEndpointPoint(var_core_value_sigA35B, var_core_value_sig82DD.connectorData["start"], true, var_core_value_sig82DD.transform),
      var_core_value_sigB86C = this._getEndpointPoint(var_core_value_sigA35B, var_core_value_sig82DD.connectorData["end"], false, var_core_value_sig82DD.transform),
      var_core_value_sigD892 = var_core_value_sig82DD.connectorData["routing"] === "curve" ? (var_core_value_sigAAC7 = var_core_value_sig82DD.connectorData["curveData"]) == null ? undefined : var_core_value_sigAAC7.anchors : var_core_value_sig82DD.connectorData["routing"] === "orthogonal" ? ((var_core_value_sig1999 = var_core_value_sig82DD.connectorData["orthogonalData"]) == null ? undefined : var_core_value_sig1999.routePoints) ?? var_core_value_sig82DD.connectorData["waypoints"] : var_core_value_sig82DD.connectorData["waypoints"],
      var_core_value_sig6086 = (var_core_value_sigD892 == null ? undefined : var_core_value_sigD892.map(({
        x: var_core_value_sigB785,
        y: var_core_value_sig130F
      }) => ({
        x: var_core_value_sigB785,
        y: var_core_value_sig130F
      }))) ?? [];
    if (var_core_value_sig6086.length > 0 || var_core_value_sig82DD.connectorData["routing"] === "straight") return [var_core_value_sigFB45, ...var_core_value_sig6086, var_core_value_sigB86C];
    let var_core_value_sigAED2 = (var_core_value_sigFB45.x + var_core_value_sigB86C.x) / 2;
    return [var_core_value_sigFB45, {
      x: var_core_value_sigAED2,
      y: var_core_value_sigFB45.y
    }, {
      x: var_core_value_sigAED2,
      y: var_core_value_sigB86C.y
    }, var_core_value_sigB86C];
  }
  _getEndpointPoint(var_core_value_sig3516, var_core_value_sigCDCD, var_core_value_sig206A, var_core_value_sig1EFE) {
    if (var_core_value_sigCDCD.kind === "free") return {
      x: var_core_value_sigCDCD.x,
      y: var_core_value_sigCDCD.y
    };
    if (var_core_value_sigCDCD.kind === "shapeSite") {
      var var_core_value_sig9904, var_core_value_sig39C7;
      if (var_core_value_sigCDCD.connectionPosition !== undefined && var_core_value_sigCDCD.fallbackPoint) return {
        ...var_core_value_sigCDCD.fallbackPoint
      };
      let var_core_value_sigC0E3 = this.getShape({
          ...var_core_value_sig3516,
          shapeId: var_core_value_sigCDCD.shapeId
        }),
        var_core_value_sig52F7 = (var_core_value_sig9904 = In(var_core_value_sigC0E3 == null ? undefined : var_core_value_sigC0E3.shapeData)) == null ? undefined : var_core_value_sig9904.participantEngineShapeType,
        var_core_value_sig866F = var_core_value_sigC0E3 && var_core_value_sig52F7 ? {
          ...var_core_value_sigC0E3,
          shapeType: var_core_value_sig52F7,
          shapeData: {
            ...var_core_value_sigC0E3.shapeData,
            shapeType: var_core_value_sig52F7,
            isCustom: false,
            customGeometry: undefined
          }
        } : var_core_value_sigC0E3,
        var_core_value_sigDE3D = var_core_value_sig866F && ((var_core_value_sig39C7 = var_core_value_sig544C(var_core_value_sig866F, var_core_value_sigCDCD.connectionSiteId)) == null ? undefined : var_core_value_sig39C7.point);
      if (var_core_value_sigDE3D) return var_core_value_sigDE3D;
    }
    if (var_core_value_sigCDCD.fallbackPoint) return {
      ...var_core_value_sigCDCD.fallbackPoint
    };
    let var_core_value_sigA022 = var_core_value_sig1EFE.left ?? 0,
      var_core_value_sig913A = var_core_value_sig1EFE.top ?? 0,
      var_core_value_sig991D = var_core_value_sig1EFE.width ?? 1,
      var_core_value_sig3E9C = var_core_value_sig1EFE.height ?? 1;
    return var_core_value_sig206A ? {
      x: var_core_value_sigA022,
      y: var_core_value_sig913A + var_core_value_sig3E9C / 2
    } : {
      x: var_core_value_sigA022 + var_core_value_sig991D,
      y: var_core_value_sig913A + var_core_value_sig3E9C / 2
    };
  }
  _createShapeElement(var_core_value_sig7835) {
    let var_core_value_sig1257 = var_core_value_sig7835.shapeType;
    return var_core_value_sigAE97(var_core_value_sig1257) ? this._createConnector({
      ...var_core_value_sig7835,
      shapeType: var_core_value_sig1257
    }) : this._createBasicShape(var_core_value_sig7835);
  }
  _createBasicShape(var_core_value_sig97E2) {
    var var_core_value_sigBFA3, var_core_value_sig6663, var_core_value_sigB250, var_core_value_sig4EAB;
    let var_core_value_sig2FD0 = ua({
        shapeType: var_core_value_sig97E2.shapeType,
        left: ((var_core_value_sigBFA3 = var_core_value_sig97E2.transform) == null ? undefined : var_core_value_sigBFA3.left) ?? 0,
        top: ((var_core_value_sig6663 = var_core_value_sig97E2.transform) == null ? undefined : var_core_value_sig6663.top) ?? 0,
        width: (var_core_value_sigB250 = var_core_value_sig97E2.transform) == null ? undefined : var_core_value_sigB250.width,
        height: (var_core_value_sig4EAB = var_core_value_sig97E2.transform) == null ? undefined : var_core_value_sig4EAB.height
      }),
      var_core_value_sig035C = {
        ...var_core_value_sig2FD0.shapeData,
        ...var_core_value_sig7D37.deepClone(var_core_value_sig97E2.shapeData ?? {}),
        shapeType: var_core_value_sig2FD0.shapeData["shapeType"]
      },
      var_core_value_sigA7F0 = In(var_core_value_sig2FD0.shapeData),
      var_core_value_sig6AE2 = Ln(var_core_value_sig2FD0.shapeData);
    if (var_core_value_sigA7F0) {
      var var_core_value_sigFD17;
      Object.assign(var_core_value_sig035C, {
        sequenceLifeline: {
          ...var_core_value_sigA7F0,
          ...((var_core_value_sigFD17 = var_core_value_sig97E2.shapeData) == null ? undefined : var_core_value_sigFD17.sequenceLifeline)
        }
      });
    }
    if (var_core_value_sig6AE2) {
      var var_core_value_sigA5E0;
      Object.assign(var_core_value_sig035C, {
        sequenceActivation: {
          ...var_core_value_sig6AE2,
          ...((var_core_value_sigA5E0 = var_core_value_sig97E2.shapeData) == null ? undefined : var_core_value_sigA5E0.sequenceActivation)
        }
      });
    }
    return {
      ...var_core_value_sig2FD0,
      name: var_core_value_sig97E2.name,
      description: var_core_value_sig97E2.description,
      visible: var_core_value_sig97E2.visible ?? true,
      selectable: var_core_value_sig97E2.selectable ?? true,
      transform: {
        ...var_core_value_sig2FD0.transform,
        ...var_core_value_sig97E2.transform
      },
      shapeData: var_core_value_sig035C
    };
  }
  _createConnector(var_core_value_sigC38F) {
    var var_core_value_sigFAFE, var_core_value_sig2B86, var_core_value_sig8873, var_core_value_sigB9C5, var_core_value_sig511D, var_core_value_sig1610, var_core_value_sig23AB, var_core_value_sigA15D, var_core_value_sig7E90;
    let var_core_value_sig03F7 = {
        left: ((var_core_value_sigFAFE = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sigFAFE.left) ?? 0,
        top: ((var_core_value_sig2B86 = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sig2B86.top) ?? 0,
        width: ((var_core_value_sig8873 = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sig8873.width) ?? Zi.shapeWidth,
        height: ((var_core_value_sigB9C5 = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sigB9C5.height) ?? Zi.shapeHeight,
        rotation: ((var_core_value_sig511D = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sig511D.rotation) ?? 0,
        flipX: ((var_core_value_sig1610 = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sig1610.flipX) ?? false,
        flipY: ((var_core_value_sig23AB = var_core_value_sigC38F.transform) == null ? undefined : var_core_value_sig23AB.flipY) ?? false
      },
      var_core_value_sig756F = {
        ...var_core_value_sig7D37.deepClone(var_core_value_sigC38F.shapeData ?? {}),
        shapeType: var_core_value_sigC38F.shapeType
      },
      var_core_value_sig0DB11 = {
        hostType: this.hostType,
        unitId: "",
        subUnitId: "",
        shapeId: var_core_value_sig90E7(6),
        shapeType: var_core_value_sigC38F.shapeType,
        shapeData: var_core_value_sig756F,
        name: var_core_value_sigC38F.name,
        description: var_core_value_sigC38F.description,
        visible: var_core_value_sigC38F.visible ?? true,
        selectable: var_core_value_sigC38F.selectable ?? true,
        transform: var_core_value_sig03F7
      },
      var_core_value_sig4950 = var_core_value_sigF7CF(var_core_value_sig0DB11),
      var_core_value_sig4424 = var_core_value_sig4950[0] ?? {
        x: var_core_value_sig03F7.left,
        y: var_core_value_sig03F7.top
      },
      var_core_value_sig57E8 = var_core_value_sig4950[var_core_value_sig4950.length - 1] ?? {
        x: var_core_value_sig03F7.left + var_core_value_sig03F7.width,
        y: var_core_value_sig03F7.top + var_core_value_sig03F7.height
      },
      var_core_value_sig76B6 = Of((var_core_value_sigA15D = var_core_value_sig756F.relation) == null ? undefined : var_core_value_sigA15D.from, var_core_value_sig4424),
      var_core_value_sig89BC = Of((var_core_value_sig7E90 = var_core_value_sig756F.relation) == null ? undefined : var_core_value_sig7E90.to, var_core_value_sig57E8),
      var_core_value_sig2191 = var_core_value_sig4950.slice(1, -1).map(Af),
      var_core_value_sig3B2E = bf(var_core_value_sigC38F.shapeType);
    return {
      ...la({
        id: var_core_value_sig0DB11.shapeId,
        start: var_core_value_sig76B6,
        end: var_core_value_sig89BC,
        routing: var_core_value_sig3B2E,
        routingMode: var_core_value_sig2191.length > 0 ? "manual" : "auto",
        waypoints: var_core_value_sig2191,
        orthogonalData: var_core_value_sig3B2E === "orthogonal" ? {
          routePoints: var_core_value_sig2191
        } : undefined,
        style: Tf(var_core_value_sig756F, undefined)
      }),
      name: var_core_value_sigC38F.name,
      description: var_core_value_sigC38F.description,
      visible: var_core_value_sigC38F.visible ?? true,
      selectable: var_core_value_sigC38F.selectable ?? true
    };
  }
  _updateBasicShape(var_core_value_sig5A9A, var_core_value_sigB524) {
    let var_core_value_sig8CFB = var_core_value_sig7D37.deepClone(var_core_value_sigB524.shapeData ?? var_core_value_sig5A9A.shapeData);
    return {
      ...var_core_value_sig5A9A,
      name: "name" in var_core_value_sigB524 ? var_core_value_sigB524.name : var_core_value_sig5A9A.name,
      description: "description" in var_core_value_sigB524 ? var_core_value_sigB524.description : var_core_value_sig5A9A.description,
      visible: var_core_value_sigB524.visible ?? var_core_value_sig5A9A.visible,
      selectable: var_core_value_sigB524.selectable ?? var_core_value_sig5A9A.selectable,
      transform: {
        ...var_core_value_sig5A9A.transform,
        ...var_core_value_sigB524.transform
      },
      shapeData: {
        ...var_core_value_sig8CFB,
        shapeType: var_core_value_sigB524.shapeType ?? var_core_value_sig8CFB.shapeType ?? var_core_value_sig5A9A.shapeData["shapeType"]
      }
    };
  }
  _updateConnector(var_core_value_sigB52C, var_core_value_sigA4B8, var_core_value_sigFF9C) {
    var var_core_value_sig278D, var_core_value_sigC0FE;
    let var_core_value_sigDD22 = this._connectorToSnapshot(var_core_value_sigB52C, var_core_value_sigA4B8),
      var_core_value_sig2D35 = var_core_value_sig7D37.deepClone(var_core_value_sigFF9C.shapeData ?? var_core_value_sigDD22.shapeData),
      var_core_value_sig7A4B = var_core_value_sigFF9C.shapeType ?? var_core_value_sig2D35.shapeType ?? var_core_value_sigDD22.shapeType,
      var_core_value_sigE50A1 = {
        ...var_core_value_sigDD22,
        shapeType: var_core_value_sig7A4B,
        shapeData: {
          ...var_core_value_sig2D35,
          shapeType: var_core_value_sig7A4B
        },
        transform: {
          ...var_core_value_sigDD22.transform,
          ...var_core_value_sigFF9C.transform
        }
      },
      var_core_value_sigC8AC = var_core_value_sigF7CF(var_core_value_sigE50A1),
      var_core_value_sig8E63 = var_core_value_sigC8AC[0] ?? this._getEndpointPoint(var_core_value_sigB52C, var_core_value_sigA4B8.connectorData["start"], true, var_core_value_sigA4B8.transform),
      var_core_value_sig300D = var_core_value_sigC8AC[var_core_value_sigC8AC.length - 1] ?? this._getEndpointPoint(var_core_value_sigB52C, var_core_value_sigA4B8.connectorData["end"], false, var_core_value_sigA4B8.transform),
      var_core_value_sig520B = var_core_value_sigDD22.shapeData["relation"],
      var_core_value_sigFE26 = kf(var_core_value_sigA4B8.connectorData["start"], var_core_value_sig520B == null ? undefined : var_core_value_sig520B.from, (var_core_value_sig278D = var_core_value_sig2D35.relation) == null ? undefined : var_core_value_sig278D.from, var_core_value_sig8E63),
      var_core_value_sig1019 = kf(var_core_value_sigA4B8.connectorData["end"], var_core_value_sig520B == null ? undefined : var_core_value_sig520B.to, (var_core_value_sigC0FE = var_core_value_sig2D35.relation) == null ? undefined : var_core_value_sigC0FE.to, var_core_value_sig300D),
      var_core_value_sig32AB = bf(var_core_value_sig7A4B),
      var_core_value_sig72BE = var_core_value_sigC8AC.slice(1, -1).map(Af),
      var_core_value_sig3E4A = {
        ...var_core_value_sigA4B8.connectorData,
        start: var_core_value_sigFE26,
        end: var_core_value_sig1019,
        routing: var_core_value_sig32AB,
        routingMode: var_core_value_sig72BE.length > 0 ? "manual" : "auto",
        waypoints: var_core_value_sig72BE,
        style: Tf(var_core_value_sig2D35, var_core_value_sigA4B8.connectorData["style"])
      };
    return var_core_value_sig32AB === "orthogonal" ? var_core_value_sig3E4A.orthogonalData = {
      routePoints: var_core_value_sig72BE
    } : delete var_core_value_sig3E4A.orthogonalData, var_core_value_sig32AB !== "curve" && delete var_core_value_sig3E4A.curveData, {
      ...var_core_value_sigA4B8,
      name: "name" in var_core_value_sigFF9C ? var_core_value_sigFF9C.name : var_core_value_sigA4B8.name,
      description: "description" in var_core_value_sigFF9C ? var_core_value_sigFF9C.description : var_core_value_sigA4B8.description,
      visible: var_core_value_sigFF9C.visible ?? var_core_value_sigA4B8.visible,
      selectable: var_core_value_sigFF9C.selectable ?? var_core_value_sigA4B8.selectable,
      transform: {
        ...var_core_value_sigA4B8.transform,
        ...var_core_value_sigE50A1.transform
      },
      connectorData: var_core_value_sig3E4A
    };
  }
  _arrange(var_core_value_sig3171, var_core_value_sigEBC4) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: var_core_value_sig3171.unitId,
      subUnitId: var_core_value_sig3171.subUnitId,
      elementIds: [var_core_value_sig3171.shapeId],
      placement: var_core_value_sigEBC4
    });
  }
};
_f = gf([hf(0, var_core_value_sig88BA), hf(1, L), hf(2, var_core_value_sig7F3C)], _f);
function vf(var_core_value_sig231B) {
  return {
    left: var_core_value_sig231B.left ?? 0,
    top: var_core_value_sig231B.top ?? 0,
    width: var_core_value_sig231B.width ?? Zi.shapeWidth,
    height: var_core_value_sig231B.height ?? Zi.shapeHeight,
    rotation: var_core_value_sig231B.rotation ?? 0,
    flipX: var_core_value_sig231B.flipX ?? false,
    flipY: var_core_value_sig231B.flipY ?? false
  };
}
function yf(var_core_value_sig6E74) {
  return var_core_value_sig6E74 === "straight" ? var_core_value_sig597C.StraightConnector1 : var_core_value_sig6E74 === "curve" ? var_core_value_sig597C.CurvedConnector3 : var_core_value_sig597C.BentConnector3;
}
function bf(var_core_value_sig61771) {
  return var_core_value_sig61771 === var_core_value_sig597C.Line || var_core_value_sig61771 === var_core_value_sig597C.StraightConnector1 ? "straight" : var_core_value_sig578F(var_core_value_sig61771) ? "curve" : "orthogonal";
}
function xf(var_core_value_sigD946, var_core_value_sig3CFD) {
  return {
    from: var_core_value_sigD946.kind === "shapeSite" ? {
      shapeId: var_core_value_sigD946.shapeId,
      cxnIndex: var_core_value_sigD946.connectionSiteId
    } : undefined,
    to: var_core_value_sig3CFD.kind === "shapeSite" ? {
      shapeId: var_core_value_sig3CFD.shapeId,
      cxnIndex: var_core_value_sig3CFD.connectionSiteId
    } : undefined
  };
}
function Sf(var_core_value_sig2807) {
  return {
    color: var_core_value_sig2807 == null ? undefined : var_core_value_sig2807.stroke,
    width: var_core_value_sig2807 == null ? undefined : var_core_value_sig2807.strokeWidth,
    opacity: var_core_value_sig2807 == null ? undefined : var_core_value_sig2807.opacity,
    dashType: !(var_core_value_sig2807 != null && var_core_value_sig2807.dash) || var_core_value_sig2807.dash["length"] === 0 ? var_core_value_sig8B71.Solid : var_core_value_sig8B71.Dash
  };
}
function Cf(var_core_value_sigB45A) {
  if (!(!var_core_value_sigB45A || var_core_value_sigB45A.type === "none")) return {
    type: var_core_value_sigB45A.type === "openArrow" ? var_core_value_sig2808.OpenArrow : var_core_value_sigB45A.type === "openDiamond" || var_core_value_sigB45A.type === "filledDiamond" ? var_core_value_sig2808.DiamondArrow : var_core_value_sigB45A.type === "openCircle" || var_core_value_sigB45A.type === "filledCircle" ? var_core_value_sig2808.OvalArrow : var_core_value_sig2808.Arrow,
    size: wf(var_core_value_sigB45A.size)
  };
}
function wf(var_core_value_sig261A) {
  if (var_core_value_sig261A === "sm") return var_core_value_sig2607.Small;
  if (var_core_value_sig261A === "lg") return var_core_value_sig2607.Large;
  if (var_core_value_sig261A === "md") return var_core_value_sig2607.Medium;
}
function Tf(var_core_value_sig21DD, var_core_value_sig7E2E) {
  var var_core_value_sig713C, var_core_value_sig0983;
  let var_core_value_sig6D58 = var_core_value_sig21DD.stroke ?? var_core_value_sig21DD.ln ?? {};
  return {
    ...var_core_value_sig7E2E,
    stroke: var_core_value_sig6D58.color,
    strokeWidth: var_core_value_sig6D58.width,
    opacity: var_core_value_sig6D58.opacity,
    dash: var_core_value_sig6D58.dashType === var_core_value_sig8B71.Solid ? [] : var_core_value_sig6D58.dashType === undefined ? var_core_value_sig7E2E == null ? undefined : var_core_value_sig7E2E.dash : [8, 4],
    startMarker: Ef((var_core_value_sig713C = var_core_value_sig21DD.ln) == null ? undefined : var_core_value_sig713C.startArrow, var_core_value_sig7E2E == null ? undefined : var_core_value_sig7E2E.startMarker),
    endMarker: Ef((var_core_value_sig0983 = var_core_value_sig21DD.ln) == null ? undefined : var_core_value_sig0983.endArrow, var_core_value_sig7E2E == null ? undefined : var_core_value_sig7E2E.endMarker)
  };
}
function Ef(var_core_value_sig280D, var_core_value_sig964B) {
  let var_core_value_sigB26E = Cf(var_core_value_sig964B);
  if ((var_core_value_sig280D == null ? undefined : var_core_value_sig280D.type) === (var_core_value_sigB26E == null ? undefined : var_core_value_sigB26E.type) && (var_core_value_sig280D == null ? undefined : var_core_value_sig280D.size) === (var_core_value_sigB26E == null ? undefined : var_core_value_sigB26E.size)) return var_core_value_sig964B;
  if ((var_core_value_sig280D == null ? undefined : var_core_value_sig280D.type) !== undefined) return {
    type: var_core_value_sig280D.type === var_core_value_sig2808.None ? "none" : var_core_value_sig280D.type === var_core_value_sig2808.OpenArrow ? "openArrow" : var_core_value_sig280D.type === var_core_value_sig2808.DiamondArrow ? "filledDiamond" : var_core_value_sig280D.type === var_core_value_sig2808.OvalArrow ? "filledCircle" : "filledArrow",
    size: Df(var_core_value_sig280D.size)
  };
}
function Df(var_core_value_sig81691) {
  if (var_core_value_sig81691 === var_core_value_sig2607.Small) return "sm";
  if (var_core_value_sig81691 === var_core_value_sig2607.Large) return "lg";
  if (var_core_value_sig81691 === var_core_value_sig2607.Medium) return "md";
}
function Of(var_core_value_sigFD9A, var_core_value_sigE0B5) {
  return var_core_value_sigFD9A ? {
    kind: "shapeSite",
    shapeId: var_core_value_sigFD9A.shapeId,
    connectionSiteId: var_core_value_sigFD9A.cxnIndex,
    fallbackPoint: {
      ...var_core_value_sigE0B5
    }
  } : {
    kind: "free",
    ...var_core_value_sigE0B5
  };
}
function kf(var_core_value_sigD847, var_core_value_sig5CF8, var_core_value_sig5743, var_core_value_sig5161) {
  let var_core_value_sig9583 = (var_core_value_sig5CF8 == null ? undefined : var_core_value_sig5CF8.shapeId) === (var_core_value_sig5743 == null ? undefined : var_core_value_sig5743.shapeId) && (var_core_value_sig5CF8 == null ? undefined : var_core_value_sig5CF8.cxnIndex) === (var_core_value_sig5743 == null ? undefined : var_core_value_sig5743.cxnIndex),
    var_core_value_sig713A = var_core_value_sigD847.kind === "free" ? var_core_value_sigD847 : var_core_value_sigD847.fallbackPoint;
  return var_core_value_sig9583 && (var_core_value_sig713A == null ? undefined : var_core_value_sig713A.x) === var_core_value_sig5161.x && var_core_value_sig713A.y === var_core_value_sig5161.y ? var_core_value_sigD847 : Of(var_core_value_sig5743, var_core_value_sig5161);
}
function Af(var_core_value_sigE7DD, var_core_value_sigC248) {
  return {
    id: "shape-api-" + var_core_value_sigC248,
    kind: "manual",
    x: var_core_value_sigE7DD.x,
    y: var_core_value_sigE7DD.y
  };
}
const jf = var_core_value_sig72C0("board.line-adapter.service");
var Mf = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig788B) {
    return this._adapters["push"](var_core_value_sig788B), var_core_value_sig4D7C(() => {
      let var_core_value_sigF175 = this._adapters["indexOf"](var_core_value_sig788B);
      var_core_value_sigF175 >= 0 && this._adapters["splice"](var_core_value_sigF175, 1);
    });
  }
  beginLineMode(var_core_value_sig9A80) {
    for (let var_core_value_sig6A18 of this._adapters) if (var_core_value_sig6A18.beginLineMode(var_core_value_sig9A80)) return true;
    return false;
  }
};
const Nf = {
    id: "board.operation.begin-line",
    type: var_core_value_sigE0AC.OPERATION,
    handler: (var_core_value_sigA8641, var_core_value_sig70CD1) => var_core_value_sig70CD1 ? var_core_value_sigA8641.get(jf).beginLineMode(var_core_value_sig70CD1) : false
  },
  Pf = {};
let Ff = class extends var_core_value_sig73E5 {
  constructor(var_core_value_sig7C69, var_core_value_sig01EF) {
    super(), this._instanceSrv = var_core_value_sig7C69, this._boardElementService = var_core_value_sig01EF, this._initUnitListener();
  }
  _initUnitListener() {
    this._instanceSrv["getAllUnitsForType"](var_core_value_sigC8D0.UNIVER_BOARD).forEach(var_core_value_sig4E3D => this._loadUnit(var_core_value_sig4E3D)), this.disposeWithMe(this._instanceSrv["getTypeOfUnitAdded$"](var_core_value_sigC8D0.UNIVER_BOARD).subscribe(var_core_value_sig49B0 => this._loadUnit(var_core_value_sig49B0.unit))), this.disposeWithMe(this._instanceSrv["getTypeOfUnitDisposed$"](var_core_value_sigC8D0.UNIVER_BOARD).subscribe(var_core_value_sig2547 => {
      this._boardElementService["removeElementDataForUnit"](var_core_value_sig2547.getUnitId());
    }));
  }
  _loadUnit(var_core_value_sig3603) {
    let var_core_value_sigC163 = var_core_value_sig3603.getUnitId(),
      var_core_value_sigF5F3 = var_core_value_sig3603.getActivePage(),
      var_core_value_sig5E69 = {},
      var_core_value_sig7B39 = var_core_value_sigF5F3.id;
    var_core_value_sig5E69[var_core_value_sig7B39] = Jt(var_core_value_sigC163, var_core_value_sig7B39, var_core_value_sigF5F3.elements, var_core_value_sigF5F3.elementOrder, var_core_value_sig3603.getThemeData()), this._boardElementService["registerElementData"](var_core_value_sigC163, var_core_value_sig5E69), this._boardElementService["initializeElementNotification"](var_core_value_sigC163);
  }
};
Ff = gf([hf(0, var_core_value_sig7F3C), hf(1, L)], Ff);
const If = new Set([lc.id, Wr.id, Ns.id]);
let Lf = class extends var_core_value_sig73E5 {
  constructor(var_core_value_sigDCAB, var_core_value_sigF569, var_core_value_sig2A9F) {
    super(), this._commandService = var_core_value_sigDCAB, this._permissionService = var_core_value_sigF569, this._univerInstanceService = var_core_value_sig2A9F, this._univerInstanceService["getAllUnitsForType"](var_core_value_sigC8D0.UNIVER_BOARD).forEach(var_core_value_sigBCA9 => this._registerUnitPermissionPoints(var_core_value_sigBCA9.getUnitId())), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitAdded$"](var_core_value_sigC8D0.UNIVER_BOARD).subscribe(({
      unit: var_core_value_sig4CDF
    }) => this._registerUnitPermissionPoints(var_core_value_sig4CDF.getUnitId()))), this.disposeWithMe(this._commandService["beforeCommandExecuted"]((var_core_value_sig3F79, var_core_value_sig880E) => this._check(var_core_value_sig3F79, var_core_value_sig880E))), this.disposeWithMe(this._univerInstanceService["getTypeOfUnitDisposed$"](var_core_value_sigC8D0.UNIVER_BOARD).subscribe(var_core_value_sigC9ED => sc(this._permissionService, var_core_value_sigC9ED.getUnitId())));
  }
  _registerUnitPermissionPoints(var_core_value_sigB14A) {
    ec.forEach(var_core_value_sigB57B => {
      let var_core_value_sig780B = ic(var_core_value_sigB14A, var_core_value_sigB14A, var_core_value_sigB57B);
      this._permissionService["getPermissionPoint"](var_core_value_sig780B.id) || this._permissionService["addPermissionPoint"](var_core_value_sig780B);
    });
  }
  _check(var_core_value_sig4401, var_core_value_sig4D6A) {
    var var_core_value_sigEF80, var_core_value_sig526D1;
    if (var_core_value_sig4D6A != null && var_core_value_sig4D6A.fromCollab || var_core_value_sig4D6A != null && var_core_value_sig4D6A.fromChangeset) return;
    let var_core_value_sigD78B = qf(var_core_value_sig4401.params) ? var_core_value_sig4401.params : undefined;
    if (var_core_value_sig4401.id === "board.mutation.update-element" && var_core_value_sigD78B != null && var_core_value_sigD78B.formulaLastValueGuard) return;
    let var_core_value_sigCB8C = zf(var_core_value_sig4401.id, var_core_value_sigD78B),
      var_core_value_sigD217 = Rf(var_core_value_sigD78B == null ? undefined : var_core_value_sigD78B.unitId, var_core_value_sig4D6A) ?? (var_core_value_sigCB8C ? (var_core_value_sigEF80 = this._univerInstanceService["getCurrentUnitOfType"](var_core_value_sigC8D0.UNIVER_BOARD)) == null ? undefined : var_core_value_sigEF80.getUnitId() : undefined);
    if (!var_core_value_sigD217 || this._univerInstanceService["getUnitType"](var_core_value_sigD217) !== var_core_value_sigC8D0.UNIVER_BOARD) return;
    if (var_core_value_sigCB8C) {
      if (!ac(this._permissionService, var_core_value_sigD217, var_core_value_sigD217, var_core_value_sigCB8C)) throw new var_core_value_sig768A("Board " + var_core_value_sigA82B[var_core_value_sigCB8C] + " permission denied.");
      if (Bf(var_core_value_sig4401.id, var_core_value_sigD78B) && !ac(this._permissionService, var_core_value_sigD217, var_core_value_sigD217, var_core_value_sigA82B.Edit)) throw new var_core_value_sig768A("Board Edit permission denied.");
      return;
    }
    if (!Vf(var_core_value_sig4401.id)) return;
    let var_core_value_sigEB0F = this._univerInstanceService["getUnit"](var_core_value_sigD217, var_core_value_sigC8D0.UNIVER_BOARD);
    if (!var_core_value_sigEB0F) return;
    let var_core_value_sigDC44 = typeof (var_core_value_sigD78B == null ? undefined : var_core_value_sigD78B.subUnitId) == "string" ? var_core_value_sigD78B.subUnitId : var_core_value_sigEB0F.getActivePageId(),
      var_core_value_sigDEFC = ((var_core_value_sig526D1 = var_core_value_sigEB0F.getSnapshot().pages[var_core_value_sigDC44]) == null ? undefined : var_core_value_sig526D1.elements) ?? {},
      var_core_value_sigE842 = new Set(Hf(var_core_value_sigD78B)),
      var_core_value_sigA77A = Uf(var_core_value_sigD78B);
    var_core_value_sigA77A.size && Object.values(var_core_value_sigDEFC).forEach(var_core_value_sig7D1B => {
      if (!qf(var_core_value_sig7D1B) || typeof var_core_value_sig7D1B.id != "string") return;
      let var_core_value_sig7BE0 = var_core_value_sig7D1B;
      (var_core_value_sigA77A.has(String(var_core_value_sig7BE0.chartId ?? "")) || var_core_value_sigA77A.has(String(var_core_value_sig7BE0.tableId ?? ""))) && var_core_value_sigE842.add(var_core_value_sig7BE0.id);
    });
    let var_core_value_sig0701 = [...Wf(var_core_value_sigDEFC, var_core_value_sigE842)].map(var_core_value_sig7D40 => rc(var_core_value_sigDC44, var_core_value_sig7D40));
    if (!cc(this._permissionService, var_core_value_sigD217, var_core_value_sig0701)) throw new var_core_value_sig768A("Board edit permission denied.");
  }
};
Lf = gf([hf(0, var_core_value_sig88BA), hf(1, var_core_value_sig7EBF), hf(2, var_core_value_sig7F3C)], Lf);
function Rf(var_core_value_sigA25D, var_core_value_sigD49E) {
  return typeof var_core_value_sigA25D == "string" ? var_core_value_sigA25D : typeof (var_core_value_sigD49E == null ? undefined : var_core_value_sigD49E.unitId) == "string" ? var_core_value_sigD49E.unitId : undefined;
}
function zf(var_core_value_sig2C20, var_core_value_sigB994) {
  if (var_core_value_sig2C20 === "board.operation.copy-selection" || var_core_value_sig2C20 === "board.operation.cut-selection" || var_core_value_sig2C20 === "board.operation.mind-map.copy-node" || var_core_value_sig2C20 === "board.operation.clipboard-shortcut" && typeof (var_core_value_sigB994 == null ? undefined : var_core_value_sigB994.action) == "string" && ["copy", "copyAsImage", "copyStyle", "cut", "makeCopy"].includes(var_core_value_sigB994.action)) return var_core_value_sigA82B.Copy;
  if (var_core_value_sig2C20 === "boards-print.operation.print") return var_core_value_sigA82B.Print;
  if (var_core_value_sig2C20 === "boards-print.operation.export-image" || var_core_value_sig2C20 === "boards-exchange-client.operation.export-board" || var_core_value_sig2C20 === "board.operation.mind-map.export-opml") return var_core_value_sigA82B.Export;
  if (var_core_value_sig2C20.startsWith("thread-comment.command.") || var_core_value_sig2C20.startsWith("thread-comment.mutation.") || var_core_value_sig2C20 === "board.operation.start-comment-placement" || var_core_value_sig2C20 === "board.operation.add-element-comment") return var_core_value_sigA82B.Comment;
}
function Bf(var_core_value_sigA02B, var_core_value_sig01FE) {
  return var_core_value_sigA02B === "board.operation.cut-selection" || var_core_value_sigA02B === "board.operation.clipboard-shortcut" && ((var_core_value_sig01FE == null ? undefined : var_core_value_sig01FE.action) === "cut" || (var_core_value_sig01FE == null ? undefined : var_core_value_sig01FE.action) === "makeCopy");
}
function Vf(var_core_value_sig9818) {
  return If.has(var_core_value_sig9818) || var_core_value_sig9818.startsWith("board.operation.begin-") ? false : var_core_value_sig9818.startsWith("board.command.") || var_core_value_sig9818.startsWith("board.mutation.") || var_core_value_sig9818.startsWith("board.operation.");
}
function Hf(var_core_value_sig5382, var_core_value_sigF177 = "") {
  let var_core_value_sig3E46 = new Set();
  return Kf(var_core_value_sig5382, var_core_value_sigF177, var_core_value_sig3E46), [...var_core_value_sig3E46];
}
function Uf(var_core_value_sigF094, var_core_value_sigE914 = "", var_core_value_sigBBB6 = new Set()) {
  return qf(var_core_value_sigF094) ? Array.isArray(var_core_value_sigF094) ? (var_core_value_sigF094.forEach(var_core_value_sig5DCA => Uf(var_core_value_sig5DCA, var_core_value_sigE914, var_core_value_sigBBB6)), var_core_value_sigBBB6) : (Object.entries(var_core_value_sigF094).forEach(([var_core_value_sigF1AB, var_core_value_sig902F]) => {
    (var_core_value_sigF1AB === "chartId" || var_core_value_sigF1AB === "tableId") && typeof var_core_value_sig902F == "string" && var_core_value_sigBBB6.add(var_core_value_sig902F), var_core_value_sigF1AB === "id" && (var_core_value_sigE914 === "chart" || var_core_value_sigE914 === "table") && typeof var_core_value_sig902F == "string" && var_core_value_sigBBB6.add(var_core_value_sig902F), Uf(var_core_value_sig902F, var_core_value_sigF1AB, var_core_value_sigBBB6);
  }), var_core_value_sigBBB6) : var_core_value_sigBBB6;
}
function Wf(var_core_value_sig0F58, var_core_value_sigF2F8) {
  let var_core_value_sig6407 = new Set(var_core_value_sigF2F8),
    var_core_value_sigB2D8 = Object.values(var_core_value_sig0F58).filter(qf).filter(var_core_value_sig6BD7 => typeof var_core_value_sig6BD7.id == "string"),
    var_core_value_sig3903 = var_core_value_sig63E0 => {
      let var_core_value_sig1B87 = var_core_value_sig0F58[var_core_value_sig63E0];
      !var_core_value_sig1B87 || typeof var_core_value_sig1B87 != "object" || Gf(var_core_value_sig1B87, /^(parentId|groupId|parentNodeId|structureScopeId)$/i).forEach(var_core_value_sig6C7E => {
        var_core_value_sig6407.has(var_core_value_sig6C7E) || !var_core_value_sig0F58[var_core_value_sig6C7E] || (var_core_value_sig6407.add(var_core_value_sig6C7E), var_core_value_sig3903(var_core_value_sig6C7E));
      });
    };
  var_core_value_sigF2F8.forEach(var_core_value_sig3903);
  let var_core_value_sig9193 = new Set(var_core_value_sigF2F8),
    var_core_value_sig788E = true;
  for (; var_core_value_sig788E;) var_core_value_sig788E = false, var_core_value_sigB2D8.forEach(var_core_value_sig68BE => {
    var_core_value_sig9193.has(var_core_value_sig68BE.id) || Gf(var_core_value_sig68BE, /(?:parent|group|child|owner|root|start|end|from|to|bound|structureScope).*(?:Id|Ids)$/i).some(var_core_value_sigD65A => var_core_value_sig9193.has(var_core_value_sigD65A)) && (var_core_value_sig9193.add(var_core_value_sig68BE.id), var_core_value_sig6407.add(var_core_value_sig68BE.id), var_core_value_sig788E = true);
  });
  return var_core_value_sig6407;
}
function Gf(var_core_value_sigC5D3, var_core_value_sig8DC1, var_core_value_sig4013 = "", var_core_value_sig73F7 = new Set()) {
  return typeof var_core_value_sigC5D3 == "string" ? (var_core_value_sig8DC1.test(var_core_value_sig4013) && var_core_value_sig73F7.add(var_core_value_sigC5D3), [...var_core_value_sig73F7]) : Array.isArray(var_core_value_sigC5D3) ? (var_core_value_sig8DC1.test(var_core_value_sig4013) ? var_core_value_sigC5D3.forEach(var_core_value_sig580B => {
    typeof var_core_value_sig580B == "string" && var_core_value_sig73F7.add(var_core_value_sig580B);
  }) : var_core_value_sigC5D3.forEach(var_core_value_sig4836 => Gf(var_core_value_sig4836, var_core_value_sig8DC1, var_core_value_sig4013, var_core_value_sig73F7)), [...var_core_value_sig73F7]) : (qf(var_core_value_sigC5D3) && Object.entries(var_core_value_sigC5D3).forEach(([var_core_value_sig4C06, var_core_value_sig4D56]) => Gf(var_core_value_sig4D56, var_core_value_sig8DC1, var_core_value_sig4C06, var_core_value_sig73F7)), [...var_core_value_sig73F7]);
}
function Kf(var_core_value_sig6087, var_core_value_sig24A4, var_core_value_sigC40D) {
  if (typeof var_core_value_sig6087 == "string") {
    /^(elementId|drawingId|connectorId|containerId|swimlaneId|[a-z]*nodeId)$/i.test(var_core_value_sig24A4) && var_core_value_sigC40D.add(var_core_value_sig6087);
    return;
  }
  if (Array.isArray(var_core_value_sig6087)) {
    /^(element|drawing|connector|container|swimlane|[a-z]*node)Ids$/i.test(var_core_value_sig24A4) ? var_core_value_sig6087.forEach(var_core_value_sig04C6 => {
      typeof var_core_value_sig04C6 == "string" && var_core_value_sigC40D.add(var_core_value_sig04C6);
    }) : var_core_value_sig6087.forEach(var_core_value_sigCA05 => Kf(var_core_value_sigCA05, var_core_value_sig24A4, var_core_value_sigC40D));
    return;
  }
  qf(var_core_value_sig6087) && Object.entries(var_core_value_sig6087).forEach(([var_core_value_sig7C26, var_core_value_sigBC59]) => {
    var_core_value_sig7C26 === "id" && (var_core_value_sig24A4 === "element" || var_core_value_sig24A4 === "elements") ? typeof var_core_value_sigBC59 == "string" && var_core_value_sigC40D.add(var_core_value_sigBC59) : Kf(var_core_value_sigBC59, var_core_value_sig7C26, var_core_value_sigC40D);
  });
}
function qf(var_core_value_sig2EC7) {
  return typeof var_core_value_sig2EC7 == "object" && !!var_core_value_sig2EC7 && !Array.isArray(var_core_value_sig2EC7);
}
let Jf = class extends var_core_value_sig73E5 {
  constructor(var_core_value_sig544E, var_core_value_sigCE8A) {
    super(), this.disposeWithMe(var_core_value_sig544E.register(var_core_value_sigCE8A));
  }
};
Jf = gf([hf(0, var_core_value_sig47F8(var_core_value_sig1EB0)), hf(1, var_core_value_sig47F8(_f))], Jf);
const Yf = var_core_value_sig72C0("board.resource.service");
let Xf = class {
  constructor(var_core_value_sig0718) {
    this._univerInstanceService = var_core_value_sig0718;
  }
  getBoard(var_core_value_sig1B221) {
    return this._univerInstanceService["getUnit"](var_core_value_sig1B221, var_core_value_sigC8D0.UNIVER_BOARD) ?? null;
  }
  getAllBoards() {
    return this._univerInstanceService["getAllUnitsForType"](var_core_value_sigC8D0.UNIVER_BOARD);
  }
  createBoard(var_core_value_sig8854) {
    return this._univerInstanceService["createUnit"](var_core_value_sigC8D0.UNIVER_BOARD, var_core_value_sig8854);
  }
};
Xf = gf([hf(0, var_core_value_sig7F3C)], Xf);
let Zf = class extends var_core_value_sig5B8B {
  constructor(var_core_value_sig5275 = Pf, var_core_value_sig4F9D, var_core_value_sig278E, var_core_value_sig2921, var_core_value_sig3959) {
    super(), this._config = var_core_value_sig5275, this._injector = var_core_value_sig4F9D, this._commandService = var_core_value_sig278E, this._configService = var_core_value_sig2921, this._univerInstanceService = var_core_value_sig3959;
    let {
      ...var_core_value_sig926F
    } = var_core_value_sig76C1({}, Pf, this._config);
    this._configService["setConfig"]("boards.config", var_core_value_sig926F);
  }
  onStarting() {
    this._univerInstanceService["registerCtorForType"](var_core_value_sigC8D0.UNIVER_BOARD, ff), [[Yf, {
      useClass: Xf
    }], [L, {
      useClass: sn
    }], [cl, {
      useClass: ll
    }], [hs, {
      useClass: gs
    }], [Gr, {
      useClass: Kr
    }], [jf, {
      useClass: Mf
    }], [_l, {
      useClass: vl
    }], [bl, {
      useClass: xl
    }], [Cl, {
      useClass: wl
    }], [ml, {
      useClass: hl
    }], [dl, {
      useClass: fl
    }], [Dl, {
      useClass: Ol
    }], [Ff], [_f], [Jf], [Lf]].forEach(var_core_value_sig2F2B => this._injector["add"](var_core_value_sig2F2B)), [Ss, $, ws, dc, fc, Us, Gs, sl, al, ul, pl, gl, Nf, yl, Sl, Tl, El, kl, ql, wu, Cu, Zl, Nc, Wr, qr, Qo, Ns, ms, Ms, Vs, Hs, Ws, lc, qs, uc, ps, Gd, sd, _d, Cd, Ad, Td, ad, Uu, Iu, Tu, ks, Nu, Pd].forEach(var_core_value_sig70AF => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig70AF))), this._injector["get"](Ff), this._injector["get"](Jf), this._injector["get"](Lf);
  }
};
I(Zf, "pluginName", "UNIVER_BOARDS_PLUGIN"), I(Zf, "packageName", pf), I(Zf, "version", mf), I(Zf, "type", var_core_value_sigC8D0.UNIVER_BOARD), Zf = gf([var_core_value_sig6D9D(var_core_value_sig9A39, var_core_value_sigB870), hf(1, var_core_value_sig47F8(var_core_value_sigB2F9)), hf(2, var_core_value_sig88BA), hf(3, var_core_value_sig1B7C), hf(4, var_core_value_sig7F3C)], Zf);
function Qf(var_core_value_sig4C6E, var_core_value_sig00FB) {
  var var_core_value_sig49C2, var_core_value_sigFEF1, var_core_value_sigF93A, var_core_value_sig1575, var_core_value_sig3A97, var_core_value_sigD765;
  let var_core_value_sig024C = var_core_value_sig7D37.deepClone(var_core_value_sig00FB),
    var_core_value_sig83B2 = var_core_value_sig4C6E != null && (var_core_value_sig49C2 = var_core_value_sig4C6E.documentStyle) != null && var_core_value_sig49C2.textStyle ? var_core_value_sig7D37.deepClone(var_core_value_sig4C6E.documentStyle["textStyle"]) : undefined,
    var_core_value_sig3FE7 = (var_core_value_sigFEF1 = var_core_value_sig024C.documentStyle) == null ? undefined : var_core_value_sigFEF1.textStyle;
  return var_core_value_sig024C.documentStyle = {
    ...(var_core_value_sig4C6E == null ? undefined : var_core_value_sig4C6E.documentStyle),
    ...var_core_value_sig024C.documentStyle,
    ...(var_core_value_sig83B2 || var_core_value_sig3FE7 ? {
      textStyle: {
        ...var_core_value_sig83B2,
        ...var_core_value_sig3FE7
      }
    } : null),
    pageSize: {
      ...(var_core_value_sig4C6E == null || (var_core_value_sigF93A = var_core_value_sig4C6E.documentStyle) == null ? undefined : var_core_value_sigF93A.pageSize),
      ...((var_core_value_sig1575 = var_core_value_sig024C.documentStyle) == null ? undefined : var_core_value_sig1575.pageSize)
    },
    renderConfig: {
      ...(var_core_value_sig4C6E == null || (var_core_value_sig3A97 = var_core_value_sig4C6E.documentStyle) == null ? undefined : var_core_value_sig3A97.renderConfig),
      ...((var_core_value_sigD765 = var_core_value_sig024C.documentStyle) == null ? undefined : var_core_value_sigD765.renderConfig)
    }
  }, var_core_value_sig024C;
}
export { Ss as AddBoardElementMutation, sl as AddBoardElementOperation, al as AddBoardElementsOperation, Wr as AnalyzeBoardModelLayoutCommand, Ve as BOARD_CONNECTOR_ENDPOINT_SNAP_THRESHOLD, ea as BOARD_CONTAINER_CORNER_ADJUST, Zi as BOARD_INSERT_DEFAULT_SIZE, tu as BOARD_MIND_MAP_CONNECTOR_ROLE, $l as BOARD_MIND_MAP_CONTAINER_ROLE, nu as BOARD_MIND_MAP_DECORATION_ROLE, Ql as BOARD_MIND_MAP_MODE_ID, eu as BOARD_MIND_MAP_NODE_ROLE, ht as BOARD_THEME_PRESETS, ec as BOARD_UNIT_PERMISSION_ACTIONS, ul as BeginBoardContainerOperation, pl as BeginBoardExportOperation, gl as BeginBoardImportOperation, yl as BeginBoardMindMapOperation, Sl as BeginBoardPenOperation, Tl as BeginBoardResourcesOperation, El as BeginBoardSwimlaneOperation, kl as BeginBoardTranslateOperation, Fe as BoardBackgroundType, He as BoardConnectorLabelAnchor, Ke as BoardConnectorLabelOffsetSpace, We as BoardConnectorLabelOrientation, Ue as BoardConnectorLabelSide, Ge as BoardConnectorLabelSizing, ze as BoardConnectorSite, Be as BoardConnectorSiteBySide, R as BoardCustomShapeType, sn as BoardElementService, M as BoardElementType, Me as BoardMediaType, ff as BoardModel, Pe as BoardPageSizePreset, Ne as BoardPageType, je as BoardPlaceholderType, wl as BoardResourcesAdapterService, B as BoardSequenceShapeType, Ae as BoardToolType, Le as BoardTransitionDirection, Re as BoardTransitionSpeed, Ie as BoardTransitionType, ql as CommitBoardContainerTransformOperation, Kd as DEFAULT_BOARD_PAGE_SIZE, Ot as DEFAULT_BOARD_THEME, Zl as DisbandBoardContainerOperation, Da as EMBED_BOARDS_FLOATING_CUSTOM_KEY, Nc as FitBoardContainerToContentOperation, Gr as IBoardChartAdapterService, cl as IBoardContainerAdapterService, L as IBoardElementService, ml as IBoardImportAdapterService, jf as IBoardLineAdapterService, _l as IBoardMindMapAdapterService, bl as IBoardPenAdapterService, Cl as IBoardResourcesAdapterService, hs as IBoardTableAdapterService, qr as InsertBoardChartCommand, Cu as InsertBoardDraftOperation, wu as InsertBoardTableOperation, Qo as NormalizeBoardConnectorRoutingCommand, ms as RemoveBoardConnectorLabelCommand, Ms as RemoveBoardElementCommand, ws as RemoveBoardElementMutation, dc as RemoveBoardElementOnlyMutation, Tu as RemoveBoardElementOperation, ks as RemoveBoardElementsOperation, Nu as RemoveBoardSwimlaneLaneOperation, Iu as ReorderBoardElementsOperation, Uu as ReorderBoardObjectListElementOperation, ad as ReparentBoardElementsOperation, Ns as ResolveBoardCaptureBoundsCommand, Vs as SetBoardConnectorLabelStyleCommand, Hs as SetBoardConnectorLabelTextCommand, sd as SetBoardContainerAutoResizeOperation, _d as SetBoardContainerMembershipLockOperation, fc as SetBoardElementOrderMutation, Cd as SetBoardElementsMetadataOperation, Ws as SetBoardNameCommand, Us as SetBoardNameMutation, qs as SetBoardPageBackgroundCommand, Gs as SetBoardPageBackgroundMutation, lc as SetBoardPermissionCommand, Ad as SetBoardSwimlaneLaneSizeOperation, Td as SetBoardSwimlaneLanesOperation, Pd as SetBoardThemeOperation, Zf as UniverBoardsPlugin, uc as UpdateBoardElementCommand, $ as UpdateBoardElementMutation, ps as UpdateBoardElementsCommand, Gd as WrapBoardElementsInContainerOperation, Zn as analyzeBoardLayout, cc as canEditBoardTargets, Un as collectBoardContainerDescendantIds, Ts as collectBoardElementIdsForRemoveWithBoundConnectors, gi as containsBoardRect, ol as createAddBoardElementsMutationInfos, la as createBoardConnectorElement, fa as createBoardContainerElement, ya as createBoardImageElement, ua as createBoardShapeElement, mi as createBoardShapeTextDocument, va as createBoardStickyElement, ga as createBoardSwimlaneElement, da as createBoardTextBoxShapeElement, Xi as createBoardTextBoxShapeTextData, _a as createBoardTextElement, mt as createBoardThemePreset, Oa as createEmbedBoardsFloatingElement, Yi as documentTextStyleToBoardShapeTextStyle, Va as getBoardConnectorLabelDocumentData, Ha as getBoardConnectorLabelText, Ka as getBoardConnectorLabels, rc as getBoardElementPermissionObjectId, ac as getBoardPermissionValue, J as getBoardRectBottom, q as getBoardRectRight, Ln as getBoardShapeSequenceActivationData, In as getBoardShapeSequenceLifelineData, _t as getBoardThemePreset, qd as getBoardsEmptySnapshot, ka as getEmbedBoardsFloatingCustomData, Ci as hasBoardSwimlaneLaneChildren, Q as isBoardConnectorElementData, Vn as isBoardContainerElementData, pu as isBoardImportDraftBoundsExpanded, co as isBoardInteractiveContainer, ou as isBoardManagedMindMapConnectorElement, au as isBoardMindMapNodeElement, iu as isBoardMindMapStructuredElement, zn as isBoardSequenceActivationElement, Rn as isBoardSequenceLifelineElement, so as isBoardStructuralContainer, lo as isBoardStructuredDiagramElement, Aa as isEmbedBoardsFloatingElement, Ga as isValidBoardConnectorLabels, Su as materializeBoardImportDraft, Qf as mergeBoardRichTextDocument, Wa as normalizeBoardConnectorElementContent, Pn as normalizeBoardSequenceActivationElement, Ti as normalizeBoardSwimlaneData, ni as offsetBoardConnectorGeometry, oo as resolveBoardConnectorParentScope, bi as resolveBoardContainerBounds, Oc as resolveBoardContainerCaptureTarget, mc as resolveBoardContainerMembershipIntentFromPreview, Dc as resolveBoardContainerMembershipPreview, W as resolveBoardElementLocalTransformForParent, V as resolveBoardElementParentChain, U as resolveBoardElementWorldBounds, H as resolveBoardElementWorldTransform, fu as resolveBoardImportDraftBounds, Ct as resolveBoardSemanticThemeStyle, St as resolveBoardShapeThemeStyle, It as resolveBoardShapeThemeTextColor, po as resolveBoardStructuredSelectionRootIds, Vi as resolveBoardSwimlaneContentLaneAtPointInFilledBounds, Wi as resolveBoardSwimlaneDataToFitRect, zi as resolveBoardSwimlaneLaneAtPointInFilledBounds, Fi as resolveBoardSwimlaneLaneBoundsInFilledBounds, Ui as resolveBoardSwimlaneLaneForRectInFilledBounds, Ii as resolveBoardSwimlaneLaneRegionsInFilledBounds, Si as resolveBoardSwimlaneOrientation, ia as resolveBoardTextElementDefaultSize, Dt as resolveBoardThemePreviewColors, Gn as resolveNearestCommonBoardContainerParent, qa as setBoardConnectorLabels, oc as setBoardPermissionValue, Ji as shapeTextToBoardDocumentTextStyle, Ja as updateBoardConnectorLabel, Wn as wouldCreateBoardContainerCycle };
