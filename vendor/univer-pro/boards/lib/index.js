import {
  BooleanNumber as _0x2a6303,
  ColorKit as _0xe400bb,
  CommandType as _0x3c65b3,
  CustomCommandExecutionError as _0x1e22e9,
  DependentOn as _0x2ded08,
  Disposable as _0x111741,
  DrawingTypeEnum as _0x7bceff,
  GridType as _0x5c3f69,
  HorizontalAlign as _0x26718e,
  ICommandService as _0x3243d1,
  IConfigService as _0x168962,
  IPermissionService as _0x515515,
  IUndoRedoService as _0x3cfbb3,
  IUniverInstanceService as _0x5c9e00,
  Inject as _0x19d180,
  Injector as _0x249853,
  PermissionStatus as _0x390cba,
  Plugin as _0xd8040,
  Tools as _0x381a86,
  UnitModel as _0x298904,
  UniverInstanceType as _0x9aeb0c,
  VerticalAlign as _0x172bf5,
  WrapStrategy as _0x7eae52,
  createIdentifier as _0x127a62,
  createParagraphId as _0x189ee7,
  createSectionId as _0x4850f5,
  generateRandomId as _0x2928b2,
  merge as _0x2e90a9,
  normalizeDrawingOrderIndex as _0x404d81,
  sequenceExecute as _0x1c1693,
  toDisposable as _0x4c56f0,
} from "@univerjs/core";
import {
  BehaviorSubject as _0x1fdde9,
  Subject as _0x1dfed5,
  map as _0x2306c8,
  merge as _0x42ba1a,
  mergeMap as _0x4e7db2,
} from "rxjs";
import { UnitDrawingService as _0xfc18b2 } from "@univerjs/drawing";
import {
  IShapeHostAdapterRegistry as _0x2dfcd0,
  ShapeArrowSizeEnum as _0x33b335,
  ShapeArrowTypeEnum as _0x542383,
  ShapeFillEnum as _0x7fd5ed,
  ShapeLineCapEnum as _0x5b432a,
  ShapeLineDashEnum as _0x428527,
  ShapeLineJoinEnum as _0x2c0d5c,
  ShapeLineTypeEnum as _0x2ac9da,
  ShapeOperatorEnum as _0x367e13,
  ShapeTextAutoFitType as _0x46895e,
  ShapeTextDirection as _0x2a37b4,
  ShapeTextWrapType as _0x8642e1,
  ShapeTypeEnum as _0x3fc086,
  UniverShapePlugin as _0x2ab03d,
  canApplyShapeFormulaLastValue as _0x54b7ce,
  computeConnectorRouteLayout as _0x468c44,
  createUniqueShapeName as _0x5ac35f,
  isConnectorShape as _0x58ca56,
  isCurvedConnectorShape as _0x59b554,
  resolveConnectorRoutePoints as _0x31d55f,
  resolveShapeConnectionPoint as _0x19c957,
  resolveShapeDefaultInsertSize as _0x14baa6,
} from "@univerjs-pro/engine-shape";
import {
  UnitAction as _0xd04b56,
  UnitObject as _0xc198bb,
} from "@univerjs/protocol";
import { UniverLicensePlugin as _0x5892ae } from "@univerjs-pro/license";
let Ae = (function (_0x13ea1d) {
  return (
    (_0x13ea1d.Select = "select"),
    (_0x13ea1d.Drag = "drag"),
    (_0x13ea1d.Shape = "shape"),
    (_0x13ea1d.Text = "text"),
    (_0x13ea1d.Sticky = "sticky"),
    (_0x13ea1d.Line = "line"),
    (_0x13ea1d.Container = "container"),
    (_0x13ea1d.Swimlane = "swimlane"),
    (_0x13ea1d.Table = "table"),
    (_0x13ea1d.Chart = "chart"),
    (_0x13ea1d.Pen = "pen"),
    (_0x13ea1d.MindMap = "mind-map"),
    (_0x13ea1d.Resources = "resources"),
    (_0x13ea1d.Image = "image"),
    (_0x13ea1d.Import = "import"),
    _0x13ea1d
  );
})({});
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
    Container: "container",
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
    Header: "header",
  },
  Me = { Audio: "audio", Video: "video" };
let Ne = (function (_0x4aaf7e) {
    return (
      (_0x4aaf7e.Page = "page"),
      (_0x4aaf7e.Master = "master"),
      (_0x4aaf7e.Layout = "layout"),
      (_0x4aaf7e.HandoutMaster = "handoutMaster"),
      (_0x4aaf7e.NotesMaster = "notesMaster"),
      _0x4aaf7e
    );
  })({}),
  Pe = (function (_0x2d0d6b) {
    return (
      (_0x2d0d6b.Standard4By3 = "standard4By3"),
      (_0x2d0d6b.WideScreen16By9 = "wideScreen16By9"),
      (_0x2d0d6b.WideScreen16By10 = "wideScreen16By10"),
      (_0x2d0d6b.Custom = "custom"),
      _0x2d0d6b
    );
  })({}),
  Fe = (function (_0x2b59d5) {
    return (
      (_0x2b59d5.None = "none"),
      (_0x2b59d5.Solid = "solid"),
      (_0x2b59d5.Gradient = "gradient"),
      (_0x2b59d5.Image = "image"),
      (_0x2b59d5.Pattern = "pattern"),
      _0x2b59d5
    );
  })({}),
  Ie = (function (_0x2c18aa) {
    return (
      (_0x2c18aa.None = "none"),
      (_0x2c18aa.Fade = "fade"),
      (_0x2c18aa.Push = "push"),
      (_0x2c18aa.Wipe = "wipe"),
      (_0x2c18aa.Cut = "cut"),
      (_0x2c18aa.Cover = "cover"),
      (_0x2c18aa.Uncover = "uncover"),
      (_0x2c18aa.Reveal = "reveal"),
      (_0x2c18aa.Split = "split"),
      (_0x2c18aa.Zoom = "zoom"),
      _0x2c18aa
    );
  })({}),
  Le = (function (_0xfce5ee) {
    return (
      (_0xfce5ee.Left = "left"),
      (_0xfce5ee.Right = "right"),
      (_0xfce5ee.Up = "up"),
      (_0xfce5ee.Down = "down"),
      _0xfce5ee
    );
  })({}),
  Re = (function (_0x40b31e) {
    return (
      (_0x40b31e.Slow = "slow"),
      (_0x40b31e.Medium = "medium"),
      (_0x40b31e.Fast = "fast"),
      _0x40b31e
    );
  })({});
const ze = { Top: 0, Right: 1, Bottom: 2, Left: 3 },
  Be = { top: ze.Top, right: ze.Right, bottom: ze.Bottom, left: ze.Left },
  Ve = 12,
  He = {
    Start: "start",
    Center: "center",
    End: "end",
    Path: "path",
    Auto: "auto",
  },
  Ue = { Left: "left", OnPath: "onPath", Right: "right" },
  We = { Horizontal: "horizontal", FollowPath: "followPath", Auto: "auto" },
  Ge = {
    AutoSize: "autoSize",
    FixedWidth: "fixedWidth",
    FixedSize: "fixedSize",
  },
  Ke = { Path: "path", Canvas: "canvas" },
  qe = "default",
  Je = {
    default: "Default",
    classic: "Classic",
    vintage: "Vintage",
    gray: "Gray",
    vibrant: "Vibrant",
    blue: "Blue",
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
    purple: "boardFillPurple",
  },
  $e = {
    primary: "boardStrokePrimary",
    decision: "boardStrokeDecision",
    data: "boardStrokeData",
    accent: "boardStrokeAccent",
    warning: "boardStrokeWarning",
    danger: "boardStrokeDanger",
    neutral: "boardStrokeNeutral",
    purple: "boardStrokePurple",
  },
  et = {
    primary: "boardTextPrimary",
    decision: "boardTextDecision",
    data: "boardTextData",
    accent: "boardTextAccent",
    warning: "boardTextWarning",
    danger: "boardTextDanger",
    neutral: "boardTextNeutral",
    purple: "boardTextPurple",
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
    boardStrokeStrong: "#1f2329",
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
    purpleFill: "#eadfff",
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
    darkText: "#2f3340",
  },
  rt = {
    black: "#000000",
    white: "#ffffff",
    ink: "#2f333a",
    dark: "#252a32",
    line: "#343941",
    muted: "#f5f6f7",
    lightText: "#f3f4f6",
    darkText: "#40444c",
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
    darkText: "#2f3340",
  },
  at = {
    blue: "#4b55e7",
    blueStroke: "#6874ff",
    blueDark: "#3f49d7",
    lightFill: "#f1f3ff",
    lightText: "#f7f8fb",
    darkText: "#40444c",
  };
function ot(_0x55fca8, _0x10e8cd) {
  if (!_0x55fca8) return _0x10e8cd;
  let _0x2549f4 = new _0xe400bb(_0x55fca8);
  return _0x2549f4.isValid ? _0x2549f4.toHexString() : _0x10e8cd;
}
function P(_0x11e098, _0x2a2a6e, _0x674ff7, _0x46172a) {
  let _0x531bb7 = ot(_0x11e098, _0x46172a),
    _0x257d4a = _0xe400bb.mix(_0x531bb7, _0x2a2a6e, _0x674ff7);
  return _0x257d4a.isValid ? _0x257d4a.toHexString() : _0x46172a;
}
function F(_0x46389a, _0x1135fe, _0x63264b) {
  for (let _0x3fb89d of _0x1135fe) {
    let _0x2fe069 = ot(
      _0x46389a == null ? undefined : _0x46389a(_0x3fb89d),
      "",
    );
    if (_0x2fe069) return _0x2fe069;
  }
  return _0x63264b;
}
function st(_0x4e74ff) {
  return {
    ..._0x4e74ff,
    primary: _0x4e74ff.primary ?? _0x4e74ff.acc1,
    boardStroke: _0x4e74ff.boardStroke ?? _0x4e74ff.dk1 ?? Xe,
    boardText: _0x4e74ff.boardText ?? _0x4e74ff.dk1 ?? Ze,
    boardFillPrimary:
      _0x4e74ff.boardFillPrimary ??
      P(_0x4e74ff.acc1, _0x4e74ff.lt1, 0.88, N.boardFillPrimary),
    boardFillDecision:
      _0x4e74ff.boardFillDecision ??
      P(_0x4e74ff.acc4, _0x4e74ff.lt1, 0.76, N.boardFillDecision),
    boardFillData:
      _0x4e74ff.boardFillData ??
      P(_0x4e74ff.acc6, _0x4e74ff.lt1, 0.84, N.boardFillData),
    boardFillAccent:
      _0x4e74ff.boardFillAccent ??
      P(_0x4e74ff.acc5, _0x4e74ff.lt1, 0.86, N.boardFillAccent),
    boardFillWarning:
      _0x4e74ff.boardFillWarning ??
      P(_0x4e74ff.acc2, _0x4e74ff.lt1, 0.8, N.boardFillWarning),
    boardFillDanger:
      _0x4e74ff.boardFillDanger ??
      P(_0x4e74ff.acc2, _0x4e74ff.lt1, 0.86, N.boardFillDanger),
    boardFillNeutral:
      _0x4e74ff.boardFillNeutral ??
      P(_0x4e74ff.dk2, _0x4e74ff.lt1, 0.92, N.boardFillNeutral),
    boardFillPurple:
      _0x4e74ff.boardFillPurple ??
      P(_0x4e74ff.acc3, _0x4e74ff.lt1, 0.86, N.boardFillPurple),
    boardStrokePrimary:
      _0x4e74ff.boardStrokePrimary ?? _0x4e74ff.acc1 ?? N.boardStrokePrimary,
    boardStrokeDecision:
      _0x4e74ff.boardStrokeDecision ?? _0x4e74ff.acc4 ?? N.boardStrokeDecision,
    boardStrokeData:
      _0x4e74ff.boardStrokeData ?? _0x4e74ff.acc6 ?? N.boardStrokeData,
    boardStrokeAccent:
      _0x4e74ff.boardStrokeAccent ??
      _0x4e74ff.acc5 ??
      _0x4e74ff.acc1 ??
      N.boardStrokeAccent,
    boardStrokeWarning:
      _0x4e74ff.boardStrokeWarning ?? _0x4e74ff.acc2 ?? N.boardStrokeWarning,
    boardStrokeDanger:
      _0x4e74ff.boardStrokeDanger ?? _0x4e74ff.acc2 ?? N.boardStrokeDanger,
    boardStrokeNeutral:
      _0x4e74ff.boardStrokeNeutral ?? _0x4e74ff.dk2 ?? N.boardStrokeNeutral,
    boardStrokePurple:
      _0x4e74ff.boardStrokePurple ?? _0x4e74ff.acc3 ?? N.boardStrokePurple,
    boardTextPrimary:
      _0x4e74ff.boardTextPrimary ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextPrimary,
    boardTextDecision:
      _0x4e74ff.boardTextDecision ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextDecision,
    boardTextData:
      _0x4e74ff.boardTextData ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextData,
    boardTextAccent:
      _0x4e74ff.boardTextAccent ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextAccent,
    boardTextWarning:
      _0x4e74ff.boardTextWarning ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextWarning,
    boardTextDanger:
      _0x4e74ff.boardTextDanger ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextDanger,
    boardTextNeutral:
      _0x4e74ff.boardTextNeutral ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextNeutral,
    boardTextPurple:
      _0x4e74ff.boardTextPurple ??
      _0x4e74ff.boardText ??
      _0x4e74ff.dk1 ??
      N.boardTextPurple,
    boardFillHeader:
      _0x4e74ff.boardFillHeader ??
      P(_0x4e74ff.acc1, _0x4e74ff.lt1, 0.28, N.boardFillHeader),
    boardTextOnHeader: _0x4e74ff.boardTextOnHeader ?? Ye,
    boardStrokeHeader:
      _0x4e74ff.boardStrokeHeader ??
      P(_0x4e74ff.acc1, _0x4e74ff.dk1, 0.35, N.boardStrokeHeader),
    boardFillStrong:
      _0x4e74ff.boardFillStrong ??
      P(_0x4e74ff.dk1, _0x4e74ff.acc1, 0.25, N.boardFillStrong),
    boardTextOnStrong: _0x4e74ff.boardTextOnStrong ?? Ye,
    boardStrokeStrong:
      _0x4e74ff.boardStrokeStrong ?? _0x4e74ff.dk1 ?? N.boardStrokeStrong,
  };
}
function ct(_0x76e965, _0x4780f8 = {}) {
  let _0x351453 = _0x76e965[_0x4780f8.subtleFill ?? "acc1"],
    _0x4522f6 = _0x76e965[_0x4780f8.moderateFill ?? "acc1"],
    _0xb02b22 = _0x76e965[_0x4780f8.gradientFrom ?? "acc5"],
    _0x550b88 = _0x76e965[_0x4780f8.gradientTo ?? "acc1"];
  return [
    { fillType: _0x7fd5ed.SolidFill, color: _0x351453, opacity: 1 },
    { fillType: _0x7fd5ed.SolidFill, color: _0x4522f6, opacity: 1 },
    {
      fillType: _0x7fd5ed.GradientFill,
      gradientAngle: 90,
      gradientStops: [
        { position: 0, color: _0xb02b22 },
        { position: 1, color: _0x550b88 },
      ],
    },
  ];
}
function lt(_0x379eb2, _0x53e9ab = {}) {
  let _0x1d6a23 = _0x379eb2[_0x53e9ab.subtleLine ?? "acc1"],
    _0x1d41e3 = _0x379eb2[_0x53e9ab.moderateLine ?? "dk2"],
    _0x464b74 = _0x379eb2[_0x53e9ab.intenseLine ?? "dk1"];
  return [
    {
      lineStrokeType: _0x2ac9da.SolidLine,
      color: _0x1d6a23,
      width: 1,
      opacity: 1,
    },
    {
      lineStrokeType: _0x2ac9da.SolidLine,
      color: _0x1d41e3,
      width: 1.5,
      opacity: 1,
    },
    {
      lineStrokeType: _0x2ac9da.SolidLine,
      color: _0x464b74,
      width: 2.25,
      opacity: 1,
    },
  ];
}
function ut() {
  return [
    {},
    {
      outerShadow: {
        color: "rgba(0, 0, 0, 0.18)",
        blurRadius: 4,
        direction: 45,
        distance: 2,
        rotateWithShape: false,
      },
    },
    {
      outerShadow: {
        color: "rgba(0, 0, 0, 0.28)",
        blurRadius: 8,
        direction: 45,
        distance: 4,
        rotateWithShape: false,
      },
    },
  ];
}
function dt(_0x3fea4b) {
  return [
    { fillType: _0x7fd5ed.SolidFill, color: _0x3fea4b.lt1, opacity: 1 },
    { fillType: _0x7fd5ed.SolidFill, color: _0x3fea4b.lt2, opacity: 1 },
    {
      fillType: _0x7fd5ed.GradientFill,
      gradientAngle: 90,
      gradientStops: [
        { position: 0, color: _0x3fea4b.lt1 },
        { position: 1, color: _0x3fea4b.lt2 },
      ],
    },
  ];
}
function ft(_0x2e5bb0, _0x34f54f, _0x5e43f2, _0x158ced = {}) {
  let _0x4b0086 = st(_0x5e43f2);
  return {
    id: _0x2e5bb0,
    name: _0x34f54f,
    colorScheme: _0x4b0086,
    fontScheme: { heading: "Calibri Light", body: "Calibri" },
    fmtScheme: {
      name: _0x34f54f,
      fillStyleLst: ct(_0x4b0086, {
        subtleFill: "boardFillNeutral",
        moderateFill: "boardFillPrimary",
        gradientFrom: "boardFillAccent",
        gradientTo: "boardFillPrimary",
        ..._0x158ced,
      }),
      lnStyleLst: lt(_0x4b0086, {
        subtleLine: "boardStroke",
        moderateLine: "boardStroke",
        intenseLine: "boardStroke",
        ..._0x158ced,
      }),
      effectStyleLst: ut(),
      bgFillStyleLst: dt(_0x4b0086),
    },
  };
}
function pt(_0x3f66be) {
  return !_0x3f66be ||
    _0x3f66be === "follow-univer" ||
    _0x3f66be === "board-default-theme"
    ? qe
    : _0x3f66be in Je
      ? _0x3f66be
      : undefined;
}
function mt(_0x57e72d, _0x1d093d) {
  let _0x5f4f06 = pt(_0x57e72d);
  if (!_0x5f4f06) return;
  let _0x468cb7 = F(_0x1d093d, ["gray.900", "gray.1000"], Ze),
    _0xcacc69 = F(_0x1d093d, ["gray.100"], "#f3f5f9"),
    _0x5ece9c = F(_0x1d093d, ["gray.300"], "#c6ccd6"),
    _0x16930b = F(_0x1d093d, ["primary.600", "blue.600"], "#2c53f1"),
    _0x1bbe66 = F(_0x1d093d, ["blue.600", "primary.600"], "#1c64f2"),
    _0x2b4b61 = F(_0x1d093d, ["purple.600", "primary.600"], "#7e3af2"),
    _0x300ec3 = F(_0x1d093d, ["green.600"], "#057a55"),
    _0x2c291a = F(_0x1d093d, ["orange.500", "orange.600"], "#ff5a1f"),
    _0x21d12a = F(_0x1d093d, ["yellow.400", "yellow.500"], "#f1b312"),
    _0x2906a3 = F(_0x1d093d, ["red.500", "red.600"], "#f05252"),
    _0x2ced71 = F(_0x1d093d, ["gray.1000", "gray.950", "gray.900"], "#111111"),
    _0x59cab6 = F(_0x1d093d, ["gray.0", "bg.white"], Ye),
    _0x417465 = {
      blueStroke: F(_0x1d093d, ["blue.600", "primary.600"], tt.blueStroke),
      blueFill: P(_0x1bbe66, _0x59cab6, 0.86, tt.blueFill),
      grayStroke: F(_0x1d093d, ["gray.300"], tt.grayStroke),
      grayFill: P(_0x5ece9c, _0x59cab6, 0.72, tt.grayFill),
      orangeStroke: F(_0x1d093d, ["orange.500", "orange.600"], tt.orangeStroke),
      orangeFill: P(_0x2c291a, _0x59cab6, 0.84, tt.orangeFill),
      greenStroke: F(_0x1d093d, ["green.600"], tt.greenStroke),
      greenFill: P(_0x300ec3, _0x59cab6, 0.86, tt.greenFill),
      redStroke: F(_0x1d093d, ["red.500", "red.600"], tt.redStroke),
      redFill: P(_0x2906a3, _0x59cab6, 0.86, tt.redFill),
      purpleStroke: F(
        _0x1d093d,
        ["purple.600", "primary.600"],
        tt.purpleStroke,
      ),
      purpleFill: P(_0x2b4b61, _0x59cab6, 0.88, tt.purpleFill),
    },
    _0x338381 = {
      darkPurple: P(_0x2b4b61, _0x468cb7, 0.36, nt.darkPurple),
      darkPurpleStroke: P(_0x2b4b61, _0x468cb7, 0.24, nt.darkPurpleStroke),
      teal: P(_0x300ec3, _0x59cab6, 0.22, nt.teal),
      tealStroke: P(_0x300ec3, _0x468cb7, 0.28, nt.tealStroke),
      mustard: P(_0x21d12a, _0x59cab6, 0.16, nt.mustard),
      mustardStroke: P(_0x21d12a, _0x468cb7, 0.18, nt.mustardStroke),
      rust: P(_0x2c291a, _0x468cb7, 0.26, nt.rust),
      rustStroke: P(_0x2c291a, _0x468cb7, 0.16, nt.rustStroke),
      periwinkle: P(_0x1bbe66, _0x59cab6, 0.3, nt.periwinkle),
      periwinkleStroke: P(_0x1bbe66, _0x468cb7, 0.26, nt.periwinkleStroke),
      cream: P(_0x21d12a, _0x59cab6, 0.86, nt.cream),
      creamStroke: P(_0x21d12a, _0x5ece9c, 0.66, nt.creamStroke),
      lightText: P(_0x59cab6, _0x21d12a, 0.05, nt.lightText),
      darkText: P(_0x468cb7, _0x2c291a, 0.08, nt.darkText),
    },
    _0xeb9bb = {
      black: _0x2ced71,
      white: _0x59cab6,
      ink: _0x468cb7,
      dark: P(_0x468cb7, _0x2ced71, 0.22, rt.dark),
      line: P(_0x468cb7, _0x5ece9c, 0.18, rt.line),
      muted: _0xcacc69,
      lightText: P(_0x59cab6, _0xcacc69, 0.16, rt.lightText),
      darkText: P(_0x468cb7, _0x5ece9c, 0.08, rt.darkText),
    },
    _0x596ee7 = {
      blue: _0x1bbe66,
      blueStroke: P(_0x1bbe66, _0x468cb7, 0.14, it.blueStroke),
      orange: _0x2c291a,
      orangeStroke: P(_0x2c291a, _0x468cb7, 0.13, it.orangeStroke),
      paleOrange: P(_0x2c291a, _0x59cab6, 0.86, it.paleOrange),
      yellow: _0x21d12a,
      yellowStroke: P(_0x21d12a, _0x468cb7, 0.13, it.yellowStroke),
      green: P(_0x300ec3, _0x59cab6, 0.08, it.green),
      greenStroke: P(_0x300ec3, _0x468cb7, 0.14, it.greenStroke),
      black: P(_0x2ced71, _0x468cb7, 0.08, it.black),
      blackStroke: _0x2ced71,
      lightText: P(_0x59cab6, _0x1bbe66, 0.03, it.lightText),
      darkText: _0x468cb7,
    },
    _0x357afa = {
      blue: _0x16930b,
      blueStroke: P(_0x16930b, _0x59cab6, 0.18, at.blueStroke),
      blueDark: P(_0x16930b, _0x468cb7, 0.22, at.blueDark),
      lightFill: P(_0x16930b, _0x59cab6, 0.9, at.lightFill),
      lightText: P(_0x59cab6, _0x16930b, 0.03, at.lightText),
      darkText: _0x468cb7,
    },
    _0x4a9ef2 = {
      dk1: _0x468cb7,
      lt1: _0x59cab6,
      dk2: _0x5ece9c,
      lt2: _0xcacc69,
      acc1: _0x16930b,
      acc2: _0x2c291a,
      acc3: _0x2b4b61,
      acc4: _0x21d12a,
      acc5: _0x1bbe66,
      acc6: _0x300ec3,
      hlink: _0x16930b,
      folHlink: _0x2b4b61,
      boardStroke: _0x468cb7,
      boardText: _0x468cb7,
      boardFillPrimary: P(_0x16930b, _0x59cab6, 0.88, N.boardFillPrimary),
      boardFillDecision: P(_0x21d12a, _0x59cab6, 0.76, N.boardFillDecision),
      boardFillData: P(_0x300ec3, _0x59cab6, 0.84, N.boardFillData),
      boardFillAccent: P(_0x1bbe66, _0x59cab6, 0.86, N.boardFillAccent),
      boardFillWarning: P(_0x2c291a, _0x59cab6, 0.82, N.boardFillWarning),
      boardFillDanger: P(_0x2906a3, _0x59cab6, 0.84, N.boardFillDanger),
      boardFillNeutral: P(_0x5ece9c, _0x59cab6, 0.7, N.boardFillNeutral),
      boardFillPurple: P(_0x2b4b61, _0x59cab6, 0.88, N.boardFillPurple),
      boardStrokePrimary: _0x468cb7,
      boardStrokeDecision: _0x468cb7,
      boardStrokeData: _0x468cb7,
      boardStrokeAccent: _0x468cb7,
      boardStrokeWarning: _0x468cb7,
      boardStrokeDanger: _0x468cb7,
      boardStrokeNeutral: _0x468cb7,
      boardStrokePurple: _0x468cb7,
      boardTextPrimary: _0x468cb7,
      boardTextDecision: _0x468cb7,
      boardTextData: _0x468cb7,
      boardTextAccent: _0x468cb7,
      boardTextWarning: _0x468cb7,
      boardTextDanger: _0x468cb7,
      boardTextNeutral: _0x468cb7,
      boardTextPurple: _0x468cb7,
      boardFillHeader: _0x16930b,
      boardTextOnHeader: _0x59cab6,
      boardStrokeHeader: P(_0x16930b, _0x468cb7, 0.28, _0x16930b),
      boardFillStrong: _0x468cb7,
      boardTextOnStrong: _0x59cab6,
      boardStrokeStrong: _0x468cb7,
    },
    _0x3ef776 = {
      default: _0x4a9ef2,
      classic: {
        ..._0x4a9ef2,
        dk2: _0x417465.grayStroke,
        lt2: "#f7f8fa",
        acc1: _0x417465.blueStroke,
        acc2: _0x417465.orangeStroke,
        acc3: _0x417465.purpleStroke,
        acc4: _0x417465.orangeStroke,
        acc5: _0x417465.blueStroke,
        acc6: _0x417465.greenStroke,
        boardStroke: _0x468cb7,
        boardFillPrimary: _0x417465.blueFill,
        boardFillDecision: _0x417465.orangeFill,
        boardFillData: _0x417465.greenFill,
        boardFillAccent: _0x417465.blueFill,
        boardFillWarning: _0x417465.orangeFill,
        boardFillDanger: _0x417465.redFill,
        boardFillNeutral: _0x417465.grayFill,
        boardFillPurple: _0x417465.purpleFill,
        boardStrokePrimary: _0x417465.blueStroke,
        boardStrokeDecision: _0x417465.orangeStroke,
        boardStrokeData: _0x417465.greenStroke,
        boardStrokeAccent: _0x417465.blueStroke,
        boardStrokeWarning: _0x417465.orangeStroke,
        boardStrokeDanger: _0x417465.redStroke,
        boardStrokeNeutral: _0x417465.grayStroke,
        boardStrokePurple: _0x417465.purpleStroke,
        boardTextPrimary: _0x468cb7,
        boardTextDecision: _0x468cb7,
        boardTextData: _0x468cb7,
        boardTextAccent: _0x468cb7,
        boardTextWarning: _0x468cb7,
        boardTextDanger: _0x468cb7,
        boardTextNeutral: _0x468cb7,
        boardTextPurple: _0x468cb7,
        boardFillHeader: P(_0x468cb7, _0x5ece9c, 0.18, _0x468cb7),
        boardTextOnHeader: _0x59cab6,
        boardStrokeHeader: P(_0x468cb7, _0x5ece9c, 0.1, _0x468cb7),
        boardFillStrong: P(_0x468cb7, _0x5ece9c, 0.12, _0x468cb7),
        boardTextOnStrong: _0x59cab6,
        boardStrokeStrong: _0x468cb7,
      },
      vintage: {
        ..._0x4a9ef2,
        dk1: _0x338381.darkText,
        dk2: _0x338381.darkPurple,
        lt2: "#f8f5ef",
        acc1: _0x338381.darkPurple,
        acc2: _0x338381.rust,
        acc3: _0x338381.cream,
        acc4: _0x338381.mustard,
        acc5: _0x338381.periwinkle,
        acc6: _0x338381.teal,
        hlink: _0x338381.teal,
        folHlink: _0x338381.darkPurple,
        boardStroke: _0x468cb7,
        boardText: _0x338381.darkText,
        boardFillPrimary: _0x338381.darkPurple,
        boardFillDecision: _0x338381.mustard,
        boardFillData: _0x338381.rust,
        boardFillAccent: _0x338381.darkPurple,
        boardFillWarning: _0x338381.cream,
        boardFillDanger: _0x338381.periwinkle,
        boardFillNeutral: _0x338381.teal,
        boardFillPurple: _0x338381.cream,
        boardStrokePrimary: _0x338381.darkPurpleStroke,
        boardStrokeDecision: _0x338381.mustardStroke,
        boardStrokeData: _0x338381.rustStroke,
        boardStrokeAccent: _0x338381.darkPurpleStroke,
        boardStrokeWarning: _0x338381.creamStroke,
        boardStrokeDanger: _0x338381.periwinkleStroke,
        boardStrokeNeutral: _0x338381.tealStroke,
        boardStrokePurple: _0x338381.creamStroke,
        boardTextPrimary: _0x338381.lightText,
        boardTextDecision: _0x338381.darkText,
        boardTextData: _0x338381.lightText,
        boardTextAccent: _0x338381.lightText,
        boardTextWarning: _0x338381.darkText,
        boardTextDanger: _0x338381.lightText,
        boardTextNeutral: _0x338381.darkText,
        boardTextPurple: _0x338381.darkText,
        boardFillHeader: _0x338381.darkPurple,
        boardTextOnHeader: _0x338381.lightText,
        boardStrokeHeader: _0x338381.darkPurpleStroke,
        boardFillStrong: _0x338381.darkPurple,
        boardTextOnStrong: _0x338381.lightText,
        boardStrokeStrong: _0x338381.darkPurpleStroke,
      },
      gray: {
        ..._0x4a9ef2,
        dk1: _0xeb9bb.ink,
        dk2: _0xeb9bb.line,
        lt1: _0xeb9bb.white,
        lt2: _0xeb9bb.muted,
        acc1: _0xeb9bb.line,
        acc2: _0xeb9bb.black,
        acc3: _0xeb9bb.white,
        acc4: _0xeb9bb.dark,
        acc5: _0xeb9bb.black,
        acc6: _0xeb9bb.ink,
        hlink: _0xeb9bb.ink,
        folHlink: _0xeb9bb.black,
        boardStroke: _0x468cb7,
        boardText: _0xeb9bb.darkText,
        boardFillPrimary: _0xeb9bb.white,
        boardFillDecision: _0xeb9bb.dark,
        boardFillData: _0xeb9bb.white,
        boardFillAccent: _0xeb9bb.black,
        boardFillWarning: _0xeb9bb.white,
        boardFillDanger: _0xeb9bb.white,
        boardFillNeutral: _0xeb9bb.black,
        boardFillPurple: _0xeb9bb.white,
        boardStrokePrimary: _0xeb9bb.line,
        boardStrokeDecision: _0xeb9bb.dark,
        boardStrokeData: _0xeb9bb.line,
        boardStrokeAccent: _0xeb9bb.black,
        boardStrokeWarning: _0xeb9bb.line,
        boardStrokeDanger: _0xeb9bb.line,
        boardStrokeNeutral: _0xeb9bb.black,
        boardStrokePurple: _0xeb9bb.line,
        boardTextPrimary: _0xeb9bb.darkText,
        boardTextDecision: _0xeb9bb.lightText,
        boardTextData: _0xeb9bb.darkText,
        boardTextAccent: _0xeb9bb.lightText,
        boardTextWarning: _0xeb9bb.darkText,
        boardTextDanger: _0xeb9bb.darkText,
        boardTextNeutral: _0xeb9bb.lightText,
        boardTextPurple: _0xeb9bb.darkText,
        boardFillHeader: _0xeb9bb.black,
        boardTextOnHeader: _0xeb9bb.lightText,
        boardStrokeHeader: _0xeb9bb.black,
        boardFillStrong: _0xeb9bb.black,
        boardTextOnStrong: _0xeb9bb.lightText,
        boardStrokeStrong: _0xeb9bb.black,
      },
      vibrant: {
        ..._0x4a9ef2,
        dk1: _0x596ee7.darkText,
        dk2: _0x596ee7.black,
        lt2: "#f7f9fc",
        acc1: _0x596ee7.blue,
        acc2: _0x596ee7.orange,
        acc3: _0x596ee7.black,
        acc4: _0x596ee7.yellow,
        acc5: _0x596ee7.blue,
        acc6: _0x596ee7.green,
        hlink: _0x596ee7.blue,
        folHlink: _0x596ee7.orange,
        boardStroke: _0x468cb7,
        boardText: _0x596ee7.darkText,
        boardFillPrimary: _0x596ee7.blue,
        boardFillDecision: _0x596ee7.yellow,
        boardFillData: _0x596ee7.paleOrange,
        boardFillAccent: _0x596ee7.blue,
        boardFillWarning: _0x596ee7.orange,
        boardFillDanger: _0x596ee7.green,
        boardFillNeutral: _0x596ee7.orange,
        boardFillPurple: _0x596ee7.black,
        boardStrokePrimary: _0x596ee7.blueStroke,
        boardStrokeDecision: _0x596ee7.yellowStroke,
        boardStrokeData: _0x596ee7.orangeStroke,
        boardStrokeAccent: _0x596ee7.blueStroke,
        boardStrokeWarning: _0x596ee7.orangeStroke,
        boardStrokeDanger: _0x596ee7.greenStroke,
        boardStrokeNeutral: _0x596ee7.orangeStroke,
        boardStrokePurple: _0x596ee7.blackStroke,
        boardTextPrimary: _0x596ee7.lightText,
        boardTextDecision: _0x596ee7.darkText,
        boardTextData: _0x596ee7.darkText,
        boardTextAccent: _0x596ee7.lightText,
        boardTextWarning: _0x596ee7.lightText,
        boardTextDanger: _0x596ee7.lightText,
        boardTextNeutral: _0x596ee7.lightText,
        boardTextPurple: _0x596ee7.lightText,
        boardFillHeader: _0x596ee7.orange,
        boardTextOnHeader: _0x596ee7.lightText,
        boardStrokeHeader: _0x596ee7.orangeStroke,
        boardFillStrong: _0x596ee7.black,
        boardTextOnStrong: _0x596ee7.lightText,
        boardStrokeStrong: _0x596ee7.blackStroke,
      },
      blue: {
        ..._0x4a9ef2,
        dk1: _0x357afa.darkText,
        dk2: _0x357afa.blueStroke,
        lt2: "#f7f8ff",
        acc1: _0x357afa.blue,
        acc2: _0x357afa.blue,
        acc3: _0x357afa.blue,
        acc4: _0x357afa.blueStroke,
        acc5: _0x357afa.blue,
        acc6: _0x357afa.blue,
        hlink: _0x357afa.blue,
        folHlink: _0x357afa.blueDark,
        boardStroke: _0x468cb7,
        boardText: _0x357afa.darkText,
        boardFillPrimary: _0x357afa.lightFill,
        boardFillDecision: _0x357afa.lightFill,
        boardFillData: _0x357afa.lightFill,
        boardFillAccent: _0x357afa.lightFill,
        boardFillWarning: _0x357afa.blue,
        boardFillDanger: _0x357afa.lightFill,
        boardFillNeutral: _0x357afa.blue,
        boardFillPurple: _0x357afa.lightFill,
        boardStrokePrimary: _0x357afa.blueStroke,
        boardStrokeDecision: _0x357afa.blueStroke,
        boardStrokeData: _0x357afa.blueStroke,
        boardStrokeAccent: _0x357afa.blueStroke,
        boardStrokeWarning: _0x357afa.blueDark,
        boardStrokeDanger: _0x357afa.blueStroke,
        boardStrokeNeutral: _0x357afa.blueDark,
        boardStrokePurple: _0x357afa.blueStroke,
        boardTextPrimary: _0x357afa.darkText,
        boardTextDecision: _0x357afa.darkText,
        boardTextData: _0x357afa.darkText,
        boardTextAccent: _0x357afa.darkText,
        boardTextWarning: _0x357afa.lightText,
        boardTextDanger: _0x357afa.darkText,
        boardTextNeutral: _0x357afa.lightText,
        boardTextPurple: _0x357afa.darkText,
        boardFillHeader: _0x357afa.blue,
        boardTextOnHeader: _0x357afa.lightText,
        boardStrokeHeader: _0x357afa.blueDark,
        boardFillStrong: _0x357afa.blue,
        boardTextOnStrong: _0x357afa.lightText,
        boardStrokeStrong: _0x357afa.blueDark,
      },
    };
  return ft(_0x5f4f06, Je[_0x5f4f06], _0x3ef776[_0x5f4f06]);
}
const ht = Object.keys(Je).map((_0x13d49f) => mt(_0x13d49f)),
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
    acc6: "#70ad47",
  };
function _t(_0x4c66f6) {
  let _0x5c6691 = pt(_0x4c66f6);
  return ht.find((_0x3a7c46) => _0x3a7c46.id === _0x5c6691);
}
function vt(_0x21a1ae) {
  switch (_0x21a1ae) {
    case _0x3fc086.Diamond:
    case _0x3fc086.FlowchartDecision:
      return "decision";
    case _0x3fc086.Can:
    case _0x3fc086.FlowchartMagneticDisk:
    case _0x3fc086.FlowchartMagneticDrum:
    case _0x3fc086.FlowchartMagneticTape:
    case _0x3fc086.FlowchartOnlineStorage:
    case _0x3fc086.FlowChartOfflineStorage:
    case _0x3fc086.FlowChartInputOutput:
    case _0x3fc086.Parallelogram:
      return "data";
    case _0x3fc086.RightArrow:
    case _0x3fc086.LeftArrow:
    case _0x3fc086.UpArrow:
    case _0x3fc086.DownArrow:
    case _0x3fc086.LeftRightArrow:
    case _0x3fc086.UpDownArrow:
    case _0x3fc086.QuadArrow:
    case _0x3fc086.Chevron:
    case _0x3fc086.Pentagon:
    case _0x3fc086.RightArrowCallout:
    case _0x3fc086.LeftArrowCallout:
    case _0x3fc086.UpArrowCallout:
    case _0x3fc086.DownArrowCallout:
    case _0x3fc086.LeftRightArrowCallout:
    case _0x3fc086.QuadArrowCallout:
    case _0x3fc086.UpDownArrowCallout:
      return "accent";
    case _0x3fc086.Triangle:
    case _0x3fc086.RightTriangle:
    case _0x3fc086.Trapezoid:
    case _0x3fc086.FlowchartManualOperation:
      return "danger";
    case _0x3fc086.Star5:
    case _0x3fc086.Star6:
    case _0x3fc086.Star7:
    case _0x3fc086.Star8:
    case _0x3fc086.Star10:
    case _0x3fc086.Star12:
    case _0x3fc086.Star16:
    case _0x3fc086.Star24:
    case _0x3fc086.Star32:
    case _0x3fc086.WedgeRectCallout:
    case _0x3fc086.WedgeRoundRectCallout:
    case _0x3fc086.WedgeEllipseCallout:
    case _0x3fc086.CloudCallout:
    case _0x3fc086.Cloud:
    case _0x3fc086.LeftBrace:
    case _0x3fc086.RightBrace:
    case _0x3fc086.BracePair:
    case _0x3fc086.LeftBracket:
    case _0x3fc086.RightBracket:
    case _0x3fc086.BracketPair:
      return "purple";
    case _0x3fc086.FoldedCorner:
    case _0x3fc086.FlowchartDocument:
    case _0x3fc086.FlowchartMultiDocument:
      return "warning";
    case _0x3fc086.MathPlus:
    case _0x3fc086.MathMinus:
    case _0x3fc086.MathMultiply:
    case _0x3fc086.MathDivide:
    case _0x3fc086.MathEqual:
    case _0x3fc086.MathNotEqual:
      return "neutral";
    default:
      break;
  }
  if (typeof _0x21a1ae == "string") {
    if (
      _0x21a1ae.includes("data_storage") ||
      _0x21a1ae.includes("database") ||
      _0x21a1ae.includes("data-flow")
    )
      return "data";
    if (
      _0x21a1ae.includes("actor") ||
      _0x21a1ae.includes("boundary") ||
      _0x21a1ae.includes("control")
    )
      return "purple";
    if (_0x21a1ae.includes("activation")) return "neutral";
  }
  return "primary";
}
function yt(_0x130fe9) {
  switch (_0x130fe9) {
    case _0x3fc086.Ellipse:
    case _0x3fc086.Cloud:
    case _0x3fc086.CloudCallout:
    case _0x3fc086.Hexagon:
      return "neutral";
    case _0x3fc086.Diamond:
    case _0x3fc086.FlowchartDecision:
      return "decision";
    case _0x3fc086.Can:
    case _0x3fc086.FlowchartMagneticDisk:
    case _0x3fc086.FlowchartMagneticDrum:
    case _0x3fc086.FlowchartMagneticTape:
    case _0x3fc086.FlowchartOnlineStorage:
    case _0x3fc086.FlowChartOfflineStorage:
    case _0x3fc086.FlowChartInputOutput:
    case _0x3fc086.Parallelogram:
      return "data";
    case _0x3fc086.LeftArrow:
    case _0x3fc086.UpArrow:
    case _0x3fc086.DownArrow:
    case _0x3fc086.LeftRightArrow:
    case _0x3fc086.UpDownArrow:
    case _0x3fc086.QuadArrow:
    case _0x3fc086.RightArrowCallout:
    case _0x3fc086.LeftArrowCallout:
    case _0x3fc086.UpArrowCallout:
    case _0x3fc086.DownArrowCallout:
    case _0x3fc086.LeftRightArrowCallout:
    case _0x3fc086.QuadArrowCallout:
    case _0x3fc086.UpDownArrowCallout:
      return "warning";
    case _0x3fc086.RightArrow:
    case _0x3fc086.Chevron:
    case _0x3fc086.Pentagon:
      return "accent";
    case _0x3fc086.Triangle:
    case _0x3fc086.RightTriangle:
    case _0x3fc086.Trapezoid:
    case _0x3fc086.FlowchartManualOperation:
      return "danger";
    case _0x3fc086.Octagon:
    case _0x3fc086.Star5:
    case _0x3fc086.Star6:
    case _0x3fc086.Star7:
    case _0x3fc086.Star8:
    case _0x3fc086.Star10:
    case _0x3fc086.Star12:
    case _0x3fc086.Star16:
    case _0x3fc086.Star24:
    case _0x3fc086.Star32:
    case _0x3fc086.WedgeRectCallout:
    case _0x3fc086.WedgeRoundRectCallout:
    case _0x3fc086.WedgeEllipseCallout:
    case _0x3fc086.LeftBrace:
    case _0x3fc086.RightBrace:
    case _0x3fc086.BracePair:
    case _0x3fc086.LeftBracket:
    case _0x3fc086.RightBracket:
    case _0x3fc086.BracketPair:
      return "purple";
    case _0x3fc086.FoldedCorner:
    case _0x3fc086.FlowchartDocument:
    case _0x3fc086.FlowchartMultiDocument:
      return "warning";
    case _0x3fc086.MathPlus:
    case _0x3fc086.MathMinus:
    case _0x3fc086.MathMultiply:
    case _0x3fc086.MathDivide:
    case _0x3fc086.MathEqual:
    case _0x3fc086.MathNotEqual:
      return "neutral";
    default:
      break;
  }
  if (typeof _0x130fe9 == "string") {
    if (
      _0x130fe9.includes("data_storage") ||
      _0x130fe9.includes("database") ||
      _0x130fe9.includes("data-flow")
    )
      return "data";
    if (
      _0x130fe9.includes("actor") ||
      _0x130fe9.includes("boundary") ||
      _0x130fe9.includes("control")
    )
      return "purple";
    if (_0x130fe9.includes("activation")) return "neutral";
  }
  return "primary";
}
function bt(_0x5032bc, _0x59d783) {
  return pt(_0x59d783 == null ? undefined : _0x59d783.id) === qe
    ? vt(_0x5032bc)
    : yt(_0x5032bc);
}
function xt(_0x24a857, _0x435a76, _0x1d5d63) {
  var _0x402db0, _0x2bfa33;
  return (
    ((_0x402db0 = _0x24a857.colorScheme) == null
      ? undefined
      : _0x402db0[_0x435a76]) ??
    (_0x1d5d63
      ? (_0x2bfa33 = _0x24a857.colorScheme) == null
        ? undefined
        : _0x2bfa33[_0x1d5d63]
      : undefined) ??
    N[_0x435a76] ??
    (_0x1d5d63 ? N[_0x1d5d63] : undefined) ??
    _0x435a76
  );
}
function St(_0x4718bb, _0x249799) {
  var _0x4fb5f5;
  let _0x18da3c = _0x249799 ?? ht[0],
    _0xda9566 = bt(_0x4718bb, _0x18da3c),
    _0x3c71aa = Qe[_0xda9566],
    _0x130b03 = $e[_0xda9566],
    _0x1b3e0c = et[_0xda9566],
    _0x433370 = xt(_0x18da3c, _0x3c71aa),
    _0x2a2c63 = xt(_0x18da3c, _0x130b03, "boardStroke");
  return {
    slot: _0xda9566,
    textColor: xt(_0x18da3c, _0x1b3e0c, "boardText"),
    fill: { fillType: _0x7fd5ed.SolidFill, color: _0x433370, opacity: 1 },
    stroke: {
      lineStrokeType: _0x2ac9da.SolidLine,
      color: _0x2a2c63,
      width:
        ((_0x4fb5f5 = _0x18da3c.fmtScheme) == null ||
        (_0x4fb5f5 = _0x4fb5f5.lnStyleLst[1]) == null
          ? undefined
          : _0x4fb5f5.width) ?? 2,
      opacity: 1,
    },
  };
}
function Ct(_0x303d20, _0x9a858) {
  var _0x1c0760;
  let _0xc28b52 = _0x303d20 ?? ht[0],
    _0x4ba3da = _0x9a858 === "header" ? "Header" : "Strong",
    _0x467404 = xt(_0xc28b52, "boardFill" + _0x4ba3da),
    _0x31d295 = xt(_0xc28b52, "boardStroke" + _0x4ba3da);
  return {
    slot: _0x9a858,
    textColor: xt(_0xc28b52, "boardTextOn" + _0x4ba3da),
    fill: { fillType: _0x7fd5ed.SolidFill, color: _0x467404, opacity: 1 },
    stroke: {
      lineStrokeType: _0x2ac9da.SolidLine,
      color: _0x31d295,
      width:
        ((_0x1c0760 = _0xc28b52.fmtScheme) == null ||
        (_0x1c0760 = _0x1c0760.lnStyleLst[1]) == null
          ? undefined
          : _0x1c0760.width) ?? 2,
      opacity: 1,
    },
  };
}
function wt(_0x4b91ce, _0x2f767f) {
  var _0x1ee729;
  return (
    (_0x4b91ce == null || (_0x1ee729 = _0x4b91ce.colorScheme) == null
      ? undefined
      : _0x1ee729[_0x2f767f]) ?? gt[_0x2f767f]
  );
}
function Tt(_0x400389) {
  if (!(!_0x400389 || typeof _0x400389 != "object")) {
    if ("color" in _0x400389 && typeof _0x400389.color == "string")
      return _0x400389.color;
    if (
      "gradientStops" in _0x400389 &&
      Array.isArray(_0x400389.gradientStops)
    ) {
      let _0x569e7a = _0x400389.gradientStops["find"](
        (_0x1c378e) =>
          !!(
            _0x1c378e &&
            typeof _0x1c378e == "object" &&
            "color" in _0x1c378e &&
            typeof _0x1c378e.color == "string"
          ),
      );
      return _0x569e7a == null ? undefined : _0x569e7a.color;
    }
  }
}
function Et(_0x55431f) {
  if (!(!_0x55431f || typeof _0x55431f != "object"))
    return "color" in _0x55431f && typeof _0x55431f.color == "string"
      ? _0x55431f.color
      : undefined;
}
function Dt(_0x3fc605) {
  var _0x425d2b, _0x452938;
  let _0x3f2e9a = wt(_0x3fc605, "acc1"),
    _0x26673c = wt(_0x3fc605, "acc2"),
    _0x4d5c63 = wt(_0x3fc605, "acc3"),
    _0x2102ff = wt(_0x3fc605, "acc4"),
    _0x134e35 = wt(_0x3fc605, "acc5"),
    _0x34f211 = wt(_0x3fc605, "acc6"),
    _0x83fd91 = wt(_0x3fc605, "dk1"),
    _0x5d6156 =
      Tt(
        (_0x425d2b = _0x3fc605.fmtScheme) == null
          ? undefined
          : _0x425d2b.fillStyleLst[1],
      ) ?? _0x3f2e9a,
    _0x3f10e0 =
      Et(
        (_0x452938 = _0x3fc605.fmtScheme) == null
          ? undefined
          : _0x452938.lnStyleLst[1],
      ) ?? wt(_0x3fc605, "dk2");
  return {
    background: wt(_0x3fc605, "lt1"),
    text: _0x83fd91,
    muted: wt(_0x3fc605, "lt2"),
    accent1: _0x3f2e9a,
    accent2: _0x26673c,
    accent3: _0x4d5c63,
    accent4: _0x2102ff,
    accent5: _0x134e35,
    accent6: _0x34f211,
    accents: [_0x3f2e9a, _0x26673c, _0x4d5c63, _0x2102ff, _0x134e35, _0x34f211],
    defaultStyleColors: [_0x5d6156, _0x3f10e0, _0x83fd91],
  };
}
const Ot = { ...ht[0] };
function kt(_0x3161a1) {
  return typeof _0x3161a1 == "object" && !!_0x3161a1;
}
function At(_0x56aacd) {
  var _0x26ce26;
  return (
    typeof (_0x56aacd == null || (_0x26ce26 = _0x56aacd.cl) == null
      ? undefined
      : _0x26ce26.rgb) == "string" ||
    (_0x56aacd == null ? undefined : _0x56aacd.textFill) !== undefined
  );
}
function jt(_0x46c421) {
  let _0x14cd37 = _0x46c421 == null ? undefined : _0x46c421.dataModel;
  return kt(_0x14cd37) && "doc" in _0x14cd37 ? _0x14cd37.doc : undefined;
}
function Mt(_0x45e05e) {
  return JSON.parse(JSON.stringify(_0x45e05e));
}
function Nt(_0x2a4b63, _0x2f8c35) {
  return At(_0x2a4b63)
    ? _0x2a4b63
    : {
        ..._0x2a4b63,
        cl: {
          ...(_0x2a4b63 == null ? undefined : _0x2a4b63.cl),
          rgb: _0x2f8c35,
        },
      };
}
function Pt(_0x161308) {
  var _0xf60f81, _0x224fa6;
  if (!kt(_0x161308)) return false;
  let _0x1bfd26 = _0x161308;
  if (typeof _0x1bfd26.color == "string" || _0x1bfd26.textFill !== undefined)
    return true;
  let _0x43c2ce = jt(_0x1bfd26);
  return At(
    _0x43c2ce == null || (_0xf60f81 = _0x43c2ce.documentStyle) == null
      ? undefined
      : _0xf60f81.textStyle,
  )
    ? true
    : ((_0x43c2ce == null ||
      (_0x224fa6 = _0x43c2ce.body) == null ||
      (_0x224fa6 = _0x224fa6.textRuns) == null
        ? undefined
        : _0x224fa6.some((_0xd42e0a) => At(_0xd42e0a.ts))) ?? false);
}
function Ft(_0x4f6295, _0x478371) {
  var _0xbb193, _0x51d864;
  let _0xcd0bb8 = Mt(_0x4f6295);
  return (
    (_0xcd0bb8.documentStyle = {
      ..._0xcd0bb8.documentStyle,
      textStyle: Nt(
        (_0xbb193 = _0xcd0bb8.documentStyle) == null
          ? undefined
          : _0xbb193.textStyle,
        _0x478371,
      ),
    }),
    (_0x51d864 = _0xcd0bb8.body) != null &&
      (_0x51d864 = _0x51d864.textRuns) != null &&
      _0x51d864.length &&
      (_0xcd0bb8.body = {
        ..._0xcd0bb8.body,
        textRuns: _0xcd0bb8.body["textRuns"].map((_0x30ecad) => ({
          ..._0x30ecad,
          ts: Nt(_0x30ecad.ts, _0x478371),
        })),
      }),
    _0xcd0bb8
  );
}
function It(_0x55a6d9, _0x4142f8, _0x1efd7e = {}) {
  if (!kt(_0x55a6d9) || Pt(_0x55a6d9)) return _0x55a6d9;
  let _0x55355a = { ..._0x55a6d9 };
  _0x55355a.color === undefined &&
    (_0x1efd7e.defineInheritedValue
      ? _0x1efd7e.defineInheritedValue(_0x55355a, "color", _0x4142f8)
      : (_0x55355a.color = _0x4142f8));
  let _0x20dd75 = jt(_0x55355a),
    _0x53cd94 = _0x55355a.dataModel;
  return (
    _0x20dd75 &&
      kt(_0x53cd94) &&
      (_0x55355a.dataModel = { ..._0x53cd94, doc: Ft(_0x20dd75, _0x4142f8) }),
    _0x55355a
  );
}
function Lt(_0x5a1c99) {
  return {
    unitId: _0x5a1c99.unitId,
    subUnitId: _0x5a1c99.subUnitId,
    drawingId: _0x5a1c99.elementId,
  };
}
function Rt(_0x379727) {
  return {
    unitId: _0x379727.unitId,
    subUnitId: _0x379727.subUnitId,
    elementId: _0x379727.drawingId,
  };
}
function zt(_0x2a739d) {
  return {
    unitId: _0x2a739d.unitId,
    subUnitId: _0x2a739d.subUnitId,
    drawingIds: _0x2a739d.elementIds,
  };
}
function Bt(_0x2e25ee) {
  switch (_0x2e25ee) {
    case M.Image:
      return _0x7bceff.DRAWING_IMAGE;
    case M.Shape:
      return _0x7bceff.DRAWING_SHAPE;
    case M.Chart:
      return _0x7bceff.DRAWING_CHART;
    case M.Table:
      return _0x7bceff.DRAWING_TABLE;
    case M.Group:
      return _0x7bceff.DRAWING_GROUP;
    case M.Media:
      return _0x7bceff.DRAWING_VIDEO;
    default:
      return _0x7bceff.DRAWING_SHAPE;
  }
}
function Vt(_0x1b353c) {
  return typeof _0x1b353c != "object" || !_0x1b353c
    ? _0x1b353c
    : JSON.parse(JSON.stringify(_0x1b353c));
}
function Ht(_0x3bcd91, _0xda517c, _0x3b8b64) {
  return (
    Object.defineProperty(_0x3bcd91, _0xda517c, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: _0x3b8b64,
    }),
    _0x3bcd91
  );
}
function Ut(_0x20d9f5) {
  return {
    ...Ot,
    ..._0x20d9f5,
    colorScheme: {
      ...Ot.colorScheme,
      ...(_0x20d9f5 == null ? undefined : _0x20d9f5.colorScheme),
    },
    fontScheme: {
      ...Ot.fontScheme,
      ...(_0x20d9f5 == null ? undefined : _0x20d9f5.fontScheme),
    },
    fmtScheme: {
      ...Ot.fmtScheme,
      ...(_0x20d9f5 == null ? undefined : _0x20d9f5.fmtScheme),
    },
  };
}
function Wt(_0x4f6436, _0x53a17e) {
  var _0x38d722;
  return {
    isHorizontal: true,
    isRichText: false,
    text: "",
    fontFamily:
      (_0x38d722 = _0x4f6436.fontScheme) == null ? undefined : _0x38d722.body,
    fontSize: 18,
    color: _0x53a17e,
    horizontalAlign: "center",
    verticalAlign: "middle",
  };
}
function Gt(_0x4226d8) {
  return (
    typeof _0x4226d8 == "object" && !!_0x4226d8 && _0x4226d8.isRichText !== true
  );
}
function Kt(_0x2f55bd, _0x22bfdb) {
  if (_0x2f55bd.type !== M.Shape) return _0x2f55bd;
  let _0x318d68 = Ut(_0x22bfdb),
    _0xdbeda7 = { ..._0x2f55bd.shapeData },
    _0x5ba1bc = St(_0xdbeda7.shapeType, _0x318d68);
  if (
    (_0xdbeda7.fill || Ht(_0xdbeda7, "fill", Vt(_0x5ba1bc.fill)),
    _0xdbeda7.stroke || Ht(_0xdbeda7, "stroke", Vt(_0x5ba1bc.stroke)),
    Gt(_0xdbeda7.shapeText))
  ) {
    let _0x5646a0 = Wt(_0x318d68, _0x5ba1bc.textColor),
      _0x42e926 = It(_0xdbeda7.shapeText, _0x5ba1bc.textColor, {
        defineInheritedValue: Ht,
      });
    (Object.keys(_0x5646a0).forEach((_0x3d3eb7) => {
      _0x42e926[_0x3d3eb7] === undefined &&
        Ht(_0x42e926, _0x3d3eb7, _0x5646a0[_0x3d3eb7]);
    }),
      (_0xdbeda7.shapeText = _0x42e926));
  }
  return { ..._0x2f55bd, shapeData: _0xdbeda7 };
}
function qt(_0x5a3b86, _0x513ebb, _0x20c8ed, _0x27b077) {
  let _0x4f7327 = Kt(_0x20c8ed, _0x27b077),
    _0x199280 = _0x4f7327.transform;
  return {
    unitId: _0x5a3b86,
    subUnitId: _0x513ebb,
    elementId: _0x4f7327.id,
    drawingId: _0x4f7327.id,
    drawingType: Bt(_0x4f7327.type),
    transform: {
      left: _0x199280.left ?? 0,
      top: _0x199280.top ?? 0,
      width: _0x199280.width ?? 0,
      height: _0x199280.height ?? 0,
      angle: _0x199280.rotation ?? 0,
      flipX: _0x199280.flipX,
      flipY: _0x199280.flipY,
    },
    hidden: _0x4f7327.visible === false,
    element: _0x4f7327,
  };
}
function Jt(_0xa34e5c, _0x26fd93, _0x4279da, _0x507afa, _0x215927) {
  let _0x522e93 = {},
    _0x8b8b68 = [];
  return (
    _0x507afa.forEach((_0x276976) => {
      let _0x530ab9 = _0x4279da[_0x276976];
      _0x530ab9 &&
        ((_0x522e93[_0x276976] = qt(
          _0xa34e5c,
          _0x26fd93,
          _0x530ab9,
          _0x215927,
        )),
        _0x8b8b68.push(_0x276976));
    }),
    { data: _0x522e93, order: _0x8b8b68 }
  );
}
function Yt(_0x202f73) {
  return (
    (_0x202f73 == null ? undefined : _0x202f73.element["type"]) === M.Group
  );
}
function Xt(_0x13db81) {
  return (
    (_0x13db81 == null ? undefined : _0x13db81.element["type"]) === M.Group ||
    (_0x13db81 == null ? undefined : _0x13db81.element["type"]) === M.Container
  );
}
function Zt(_0x4fcb69) {
  return (
    (_0x4fcb69 == null ? undefined : _0x4fcb69.drawingId) ??
    (_0x4fcb69 == null ? undefined : _0x4fcb69.elementId)
  );
}
function Qt(_0x201d42, _0x2cc3a6) {
  let _0x285465 = [],
    _0x37fa68 = new Set();
  return (
    _0x2cc3a6 == null ||
      _0x2cc3a6.forEach((_0x426e1a) => {
        let _0x1cbafd = _0x201d42[_0x426e1a];
        !_0x1cbafd ||
          _0x37fa68.has(_0x426e1a) ||
          (_0x37fa68.add(_0x426e1a), _0x285465.push(_0x1cbafd));
      }),
    Object.values(_0x201d42).forEach((_0x4bb478) => {
      let _0x39476a = Zt(_0x4bb478);
      !_0x39476a ||
        _0x37fa68.has(_0x39476a) ||
        (_0x37fa68.add(_0x39476a), _0x285465.push(_0x4bb478));
    }),
    _0x285465
  );
}
function $t(_0x39836d, _0x5d2a0e, _0x3b05ce) {
  let _0x7aa0d4 = _0x39836d[_0x5d2a0e];
  if (!Xt(_0x7aa0d4)) return [];
  let _0x12bf3b = [],
    _0x6605ce = new Set(),
    _0x323386 = (_0x4e4eea) => {
      !_0x4e4eea ||
        _0x4e4eea === _0x5d2a0e ||
        _0x6605ce.has(_0x4e4eea) ||
        (_0x6605ce.add(_0x4e4eea), _0x12bf3b.push(_0x4e4eea));
    };
  return (
    Yt(_0x7aa0d4) && (_0x7aa0d4.element["children"] ?? []).forEach(_0x323386),
    Qt(_0x39836d, _0x3b05ce).forEach((_0x590d4a) => {
      (_0x590d4a.groupId === _0x5d2a0e ||
        _0x590d4a.element["parentId"] === _0x5d2a0e) &&
        _0x323386(Zt(_0x590d4a));
    }),
    _0x12bf3b
  );
}
function en(_0xc46a47, _0x502a21, _0x48d6e6) {
  let _0x143cd0 = [],
    _0x285b19 = new Set(),
    _0xf0e47a = (_0x282bed) => {
      $t(_0xc46a47, _0x282bed, _0x48d6e6).forEach((_0x52dad6) => {
        _0x285b19.has(_0x52dad6) ||
          (_0x285b19.add(_0x52dad6),
          _0x143cd0.push(_0x52dad6),
          Xt(_0xc46a47[_0x52dad6]) && _0xf0e47a(_0x52dad6));
      });
    };
  return (_0xf0e47a(_0x502a21), _0x143cd0);
}
function tn(_0x429fa4, _0x51e0ae, _0x44a356) {
  let _0x26ebcb = new Set();
  _0x44a356.forEach((_0x521d80) => {
    let _0x18819e = _0x429fa4[_0x521d80];
    _0x18819e &&
      (_0x26ebcb.add(_0x521d80),
      Xt(_0x18819e) &&
        en(_0x429fa4, _0x521d80, _0x51e0ae).forEach((_0x24fc42) => {
          _0x429fa4[_0x24fc42] && _0x26ebcb.add(_0x24fc42);
        }));
  });
  let _0xd35ecd = new Map();
  return (
    _0x51e0ae.forEach((_0x135a27, _0x38a420) =>
      _0xd35ecd.set(_0x135a27, _0x38a420),
    ),
    Array.from(_0x26ebcb).sort(
      (_0x5169e6, _0x536fb0) =>
        (_0xd35ecd.get(_0x5169e6) ?? 2 ** 53 - 1) -
        (_0xd35ecd.get(_0x536fb0) ?? 2 ** 53 - 1),
    )
  );
}
var nn = class extends _0xfc18b2 {
  get elementAdd$() {
    return this.add$["pipe"](_0x2306c8((_0x36bea4) => _0x36bea4.map(Rt)));
  }
  get elementUpdate$() {
    return this.update$["pipe"](_0x2306c8((_0x41117c) => _0x41117c.map(Rt)));
  }
  get elementRemove$() {
    return this.remove$["pipe"](_0x2306c8((_0x4e9ecd) => _0x4e9ecd.map(Rt)));
  }
  getElementDataForUnit(_0x4ecb0b) {
    return this.getDrawingDataForUnit(_0x4ecb0b);
  }
  removeElementDataForUnit(_0xa88e79) {
    this.removeDrawingDataForUnit(_0xa88e79);
  }
  registerElementData(_0x2be141, _0x45f1b2) {
    this.registerDrawingData(_0x2be141, _0x45f1b2);
  }
  getElementData(_0x257cea, _0x2811c6) {
    return this.getDrawingData(_0x257cea, _0x2811c6);
  }
  getElementOrder(_0x3e438e, _0x527d32) {
    return this.getDrawingOrder(_0x3e438e, _0x527d32);
  }
  setElementOrder(_0x4fbfb7, _0x162780, _0x2af1d9) {
    this.setDrawingOrder(_0x4fbfb7, _0x162780, _0x2af1d9);
  }
  getElementById(_0x298bc4, _0x106886, _0x37c7a2) {
    return this.getElementData(_0x298bc4, _0x106886)[_0x37c7a2];
  }
  getElementByParam(_0x39ba55) {
    return this.getElementById(
      _0x39ba55.unitId,
      _0x39ba55.subUnitId,
      _0x39ba55.elementId,
    );
  }
  focusElements(_0x49edbc) {
    this.focusDrawing(
      (_0x49edbc == null ? undefined : _0x49edbc.map(Lt)) ?? null,
    );
  }
  getFocusElements() {
    return this.getFocusDrawings();
  }
  initializeElementNotification(_0x5c8315) {
    this.initializeNotification(_0x5c8315);
  }
  addElementNotification(_0x275289) {
    this.addNotification(_0x275289.map(Lt));
  }
  updateElementNotification(_0x52687e) {
    this.updateNotification(_0x52687e.map(Lt));
  }
  removeElementNotification(_0x52f518) {
    this.removeNotification(_0x52f518.map(Lt));
  }
  getBatchAddElementOp(_0x35cbd8) {
    return this.getBatchAddOp(_0x35cbd8);
  }
  getBatchUpdateElementOp(_0x23c476) {
    return this.getBatchUpdateOp(_0x23c476);
  }
  getBatchRemoveElementOp(_0x18ff05) {
    return this.getBatchRemoveOp(_0x18ff05.map(Lt));
  }
  getFrontElementsOp(_0x2530b8) {
    return this.getFrontDrawingsOp(zt(_0x2530b8));
  }
  getBackElementsOp(_0x211fc0) {
    return this.getBackDrawingsOp(zt(_0x211fc0));
  }
  orderElementUpdateNotification(_0x50d3df) {
    super.orderUpdateNotification(zt(_0x50d3df));
  }
  applyElementJson1(_0x1c5f6b, _0x54bc48, _0x3bdf7e) {
    this.applyJson1(_0x1c5f6b, _0x54bc48, _0x3bdf7e);
  }
  removeDrawingsWithoutGroupExpansion(_0x4547e7) {
    var _0x153c06;
    if (_0x4547e7.length === 0) return [];
    let { unitId: _0x4cdfaa, subUnitId: _0x3c0c36 } = _0x4547e7[0],
      _0x342b58 = new Set(),
      _0x15aa05 = this.getDrawingOrder(_0x4cdfaa, _0x3c0c36),
      _0x477065 = new Map();
    _0x15aa05.forEach((_0x31fc97, _0x938536) =>
      _0x477065.set(_0x31fc97, _0x938536),
    );
    let _0x38585d =
      (_0x153c06 = this.drawingManagerData[_0x4cdfaa]) == null
        ? undefined
        : _0x153c06[_0x3c0c36];
    if (!_0x38585d) return [];
    let _0x4e8d98 = _0x4547e7
      .filter((_0x29a04f) =>
        _0x342b58.has(_0x29a04f.drawingId) || !this.getDrawingByParam(_0x29a04f)
          ? false
          : (_0x342b58.add(_0x29a04f.drawingId), true),
      )
      .sort(
        (_0x597fc4, _0x5d498a) =>
          (_0x477065.get(_0x597fc4.drawingId) ?? -1 / 0) -
          (_0x477065.get(_0x5d498a.drawingId) ?? -1 / 0),
      );
    return (
      [..._0x4e8d98]
        .sort((_0x2b0250, _0x2754af) => {
          let _0x49d656 = _0x477065.get(_0x2b0250.drawingId) ?? -1 / 0;
          return (_0x477065.get(_0x2754af.drawingId) ?? -1 / 0) - _0x49d656;
        })
        .forEach((_0x1c16af) => {
          delete _0x38585d.data[_0x1c16af.drawingId];
          let _0xda0a54 = _0x38585d.order["indexOf"](_0x1c16af.drawingId);
          _0xda0a54 >= 0 && _0x38585d.order["splice"](_0xda0a54, 1);
        }),
      _0x4e8d98
    );
  }
  getDrawingsByGroup(_0x1495e7) {
    let {
        unitId: _0x26291d,
        subUnitId: _0x2967f6,
        drawingId: _0x5c2132,
      } = _0x1495e7,
      _0x1b0e47 = this.getDrawingData(_0x26291d, _0x2967f6);
    return $t(_0x1b0e47, _0x5c2132, this.getDrawingOrder(_0x26291d, _0x2967f6))
      .map((_0x1c5145) => _0x1b0e47[_0x1c5145])
      .filter((_0x4895ee) => !!_0x4895ee);
  }
  getDrawingsByGroupNested(_0x1f4595) {
    let { unitId: _0x2b31cf, subUnitId: _0x15b534 } = _0x1f4595,
      _0x1cc785 = this.getDrawingByParam(_0x1f4595);
    if (!Xt(_0x1cc785)) return null;
    let _0x3520e4 = this.getDrawingData(_0x2b31cf, _0x15b534),
      _0x4ca1da = [],
      _0x118864 = [],
      _0x34f7f1 = {},
      _0x4f2652 = new Set(),
      _0x5677ee = (_0x386c37) => {
        let _0x422803 = _0x386c37.drawingId;
        if (_0x4f2652.has(_0x422803)) return;
        _0x4f2652.add(_0x422803);
        let _0x10cb92 = $t(_0x3520e4, _0x422803);
        ((_0x34f7f1[_0x422803] = { drawingId: _0x422803, children: _0x10cb92 }),
          _0x10cb92.forEach((_0x3b8c67) => {
            let _0x5c4bd1 = _0x3520e4[_0x3b8c67];
            if (_0x5c4bd1) {
              if (Xt(_0x5c4bd1)) {
                (_0x5677ee(_0x5c4bd1), _0x118864.push(_0x5c4bd1));
                return;
              }
              _0x4ca1da.push(_0x5c4bd1);
            }
          }));
      };
    return (
      _0x5677ee(_0x1cc785),
      _0x118864.push(_0x1cc785),
      { nestedIdRecord: _0x34f7f1, flatChildren: _0x4ca1da, groups: _0x118864 }
    );
  }
};
function rn(_0x48ea73) {
  "@babel/helpers - typeof";
  return (
    (rn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5575dd) {
            return typeof _0x5575dd;
          }
        : function (_0x3dd471) {
            return _0x3dd471 &&
              typeof Symbol == "function" &&
              _0x3dd471.constructor === Symbol &&
              _0x3dd471 !== Symbol.prototype
              ? "symbol"
              : typeof _0x3dd471;
          }),
    rn(_0x48ea73)
  );
}
function an(_0x37dbf8, _0x50cd60) {
  if (rn(_0x37dbf8) != "object" || !_0x37dbf8) return _0x37dbf8;
  var _0x3ba848 = _0x37dbf8[Symbol.toPrimitive];
  if (_0x3ba848 !== undefined) {
    var _0x50c99f = _0x3ba848.call(_0x37dbf8, _0x50cd60 || "default");
    if (rn(_0x50c99f) != "object") return _0x50c99f;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x50cd60 === "string" ? String : Number)(_0x37dbf8);
}
function on(_0x38a9aa) {
  var _0x537095 = an(_0x38a9aa, "string");
  return rn(_0x537095) == "symbol" ? _0x537095 : _0x537095 + "";
}
function I(_0x45e0bb, _0x4e56ee, _0x27fcff) {
  return (
    (_0x4e56ee = on(_0x4e56ee)) in _0x45e0bb
      ? Object.defineProperty(_0x45e0bb, _0x4e56ee, {
          value: _0x27fcff,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x45e0bb[_0x4e56ee] = _0x27fcff),
    _0x45e0bb
  );
}
const L = _0x127a62("board.element.service");
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
    return this._bridgeService["order$"].pipe(
      _0x2306c8((_0x5bde10) => ({
        unitId: _0x5bde10.unitId,
        subUnitId: _0x5bde10.subUnitId,
        elementIds: _0x5bde10.drawingIds,
      })),
    );
  }
  getElementDataForUnit(_0x2b70cd) {
    return this._bridgeService["getElementDataForUnit"](_0x2b70cd);
  }
  removeElementDataForUnit(_0x3a4ef6) {
    this._bridgeService["removeElementDataForUnit"](_0x3a4ef6);
  }
  registerElementData(_0x18103e, _0x2256fb) {
    this._bridgeService["registerElementData"](_0x18103e, _0x2256fb);
  }
  getElementData(_0x4f4ab9, _0x3c17b6) {
    return this._bridgeService["getElementData"](_0x4f4ab9, _0x3c17b6);
  }
  getElementOrder(_0x1c5c2e, _0x4e6872) {
    return this._bridgeService["getElementOrder"](_0x1c5c2e, _0x4e6872);
  }
  setElementOrder(_0x80a112, _0x52eb73, _0x5cb4bf) {
    this._bridgeService["setElementOrder"](_0x80a112, _0x52eb73, _0x5cb4bf);
  }
  getElementById(_0x5efe20, _0x449be8, _0x2094ae) {
    return this._bridgeService["getElementById"](
      _0x5efe20,
      _0x449be8,
      _0x2094ae,
    );
  }
  getElementByParam(_0x286bb6) {
    return this._bridgeService["getElementByParam"](_0x286bb6);
  }
  focusElements(_0xec3979) {
    this._bridgeService["focusElements"](_0xec3979);
  }
  getFocusElements() {
    return this._bridgeService["getFocusElements"]();
  }
  initializeElementNotification(_0x1bc290) {
    this._bridgeService["initializeElementNotification"](_0x1bc290);
  }
  addElementNotification(_0x26855e) {
    this._bridgeService["addElementNotification"](_0x26855e);
  }
  updateElementNotification(_0x4d597b) {
    this._bridgeService["updateElementNotification"](_0x4d597b);
  }
  removeElementNotification(_0x1f018d) {
    this._bridgeService["removeElementNotification"](_0x1f018d);
  }
  getBatchAddElementOp(_0x4dcb39) {
    return this._bridgeService["getBatchAddElementOp"](_0x4dcb39);
  }
  getBatchUpdateElementOp(_0x37a609) {
    return this._bridgeService["getBatchUpdateElementOp"](_0x37a609);
  }
  getBatchRemoveElementOp(_0xca8cd0) {
    return this._bridgeService["getBatchRemoveElementOp"](_0xca8cd0);
  }
  getFrontElementsOp(_0x329178) {
    return this._bridgeService["getFrontElementsOp"](_0x329178);
  }
  getBackElementsOp(_0x592cf6) {
    return this._bridgeService["getBackElementsOp"](_0x592cf6);
  }
  orderUpdateNotification(_0x1815e3) {
    this._bridgeService["orderElementUpdateNotification"](_0x1815e3);
  }
  applyElementJson1(_0x4d388e, _0x617274, _0x50ecbd) {
    this._bridgeService["applyElementJson1"](_0x4d388e, _0x617274, _0x50ecbd);
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
    StateBar: "state_bar",
  },
  cn = "#f3f6fc",
  ln = "#eee7ff",
  un = "#000000",
  dn = "#ffffff",
  z = {
    color: un,
    width: 4,
    capType: _0x5b432a.Round,
    lineJoinType: _0x2c0d5c.Round,
  };
function fn(_0x75dcc0, _0x517903, _0xc2b5e5) {
  return _0xc2b5e5.map((_0x2f664e) => ({
    w: _0x75dcc0,
    h: _0x517903,
    ..._0x2f664e,
  }));
}
function pn(
  _0x1e63cc,
  _0x11199e,
  _0x56e5e4,
  _0xf1372,
  _0x33e050,
  _0x169777 = _0x33e050,
) {
  return {
    w: _0x1e63cc,
    h: _0x11199e,
    stroke: true,
    dataArray: [
      { command: "M", points: [_0x56e5e4 + _0x33e050, _0xf1372] },
      { command: "A", points: [_0x33e050, _0x169777, 0, 21600000] },
      { command: "z", points: [] },
    ],
  };
}
function mn(
  _0x5df279,
  _0x2b6359,
  _0x314072,
  _0x303abc,
  _0x4d98e5,
  _0x6583a4,
  _0x2516d7,
) {
  return {
    w: _0x5df279,
    h: _0x2b6359,
    stroke: true,
    dataArray: [
      { command: "M", points: [_0x314072 + _0x2516d7, _0x303abc] },
      { command: "L", points: [_0x4d98e5 - _0x2516d7, _0x303abc] },
      {
        command: "Q",
        points: [_0x4d98e5, _0x303abc, _0x4d98e5, _0x303abc + _0x2516d7],
      },
      { command: "L", points: [_0x4d98e5, _0x6583a4 - _0x2516d7] },
      {
        command: "Q",
        points: [_0x4d98e5, _0x6583a4, _0x4d98e5 - _0x2516d7, _0x6583a4],
      },
      { command: "L", points: [_0x314072 + _0x2516d7, _0x6583a4] },
      {
        command: "Q",
        points: [_0x314072, _0x6583a4, _0x314072, _0x6583a4 - _0x2516d7],
      },
      { command: "L", points: [_0x314072, _0x303abc + _0x2516d7] },
      {
        command: "Q",
        points: [_0x314072, _0x303abc, _0x314072 + _0x2516d7, _0x303abc],
      },
      { command: "z", points: [] },
    ],
  };
}
function hn(_0x43bbda, _0x2bbb44, _0x1174a4) {
  return {
    w: _0x43bbda,
    h: _0x2bbb44,
    fill: "none",
    dataArray: [
      { command: "M", points: [_0x1174a4[0], _0x1174a4[1]] },
      { command: "L", points: [_0x1174a4[2], _0x1174a4[3]] },
    ],
  };
}
function gn(
  _0x2a1887,
  _0x20dd9b,
  _0x586e8b,
  _0x132466,
  _0x2d93d5,
  _0x1883dc = {},
) {
  return {
    w: _0x2a1887,
    h: _0x20dd9b,
    stroke: _0x1883dc.stroke,
    fill: _0x1883dc.fill,
    dataArray: [
      { command: "M", points: [_0x586e8b + _0x2d93d5, _0x132466] },
      { command: "A", points: [_0x2d93d5, _0x2d93d5, 0, 21600000] },
      { command: "z", points: [] },
    ],
  };
}
function _n(
  _0x55218c,
  _0x497b5a,
  _0x4da5bb,
  _0x2919ad,
  _0x4ee96,
  _0x5bfef1,
  _0x824343,
) {
  return {
    ...mn(
      _0x55218c,
      _0x497b5a,
      _0x4da5bb,
      _0x2919ad,
      _0x4ee96,
      _0x5bfef1,
      _0x824343,
    ),
    stroke: false,
  };
}
function vn(_0x46b8ab, _0x542a70, _0x59cd68) {
  return { w: _0x46b8ab, h: _0x542a70, fill: "none", dataArray: _0x59cd68 };
}
function yn(
  _0x45e93a,
  _0x7d9421,
  _0x4bac76,
  _0x47c0ad,
  _0x3d0f0c,
  _0x1dfa7b,
  _0x549e05,
) {
  return fn(_0x45e93a, _0x7d9421, [
    {
      stroke: false,
      dataArray: [
        { command: "M", points: [_0x3d0f0c, _0x47c0ad] },
        { command: "L", points: [_0x4bac76 + _0x549e05, _0x47c0ad] },
        {
          command: "Q",
          points: [_0x4bac76, _0x47c0ad, _0x4bac76, _0x47c0ad + _0x549e05],
        },
        { command: "L", points: [_0x4bac76, _0x1dfa7b - _0x549e05] },
        {
          command: "Q",
          points: [_0x4bac76, _0x1dfa7b, _0x4bac76 + _0x549e05, _0x1dfa7b],
        },
        { command: "L", points: [_0x3d0f0c, _0x1dfa7b] },
        { command: "L", points: [_0x3d0f0c, _0x47c0ad] },
        { command: "z", points: [] },
      ],
    },
    {
      fill: "none",
      dataArray: [
        { command: "M", points: [_0x3d0f0c, _0x47c0ad] },
        { command: "L", points: [_0x4bac76 + _0x549e05, _0x47c0ad] },
        {
          command: "Q",
          points: [_0x4bac76, _0x47c0ad, _0x4bac76, _0x47c0ad + _0x549e05],
        },
        { command: "L", points: [_0x4bac76, _0x1dfa7b - _0x549e05] },
        {
          command: "Q",
          points: [_0x4bac76, _0x1dfa7b, _0x4bac76 + _0x549e05, _0x1dfa7b],
        },
        { command: "L", points: [_0x3d0f0c, _0x1dfa7b] },
      ],
    },
  ]);
}
const bn = {
  [R.Actor]: {
    shapeType: R.Actor,
    defaultShapeData: { fill: { color: cn }, stroke: z },
    geometry: {
      pathLst: [
        pn(172, 244, 86, 55, 36),
        ...fn(172, 244, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [86, 91] },
              { command: "L", points: [86, 165] },
              { command: "M", points: [21, 109] },
              { command: "L", points: [151, 109] },
              { command: "M", points: [86, 165] },
              { command: "L", points: [33, 214] },
              { command: "M", points: [86, 165] },
              { command: "L", points: [137, 214] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.Boundary]: {
    shapeType: R.Boundary,
    defaultShapeData: { fill: { color: cn }, stroke: z },
    geometry: {
      pathLst: [
        pn(172, 124, 94, 65, 43),
        ...fn(172, 124, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [24, 25] },
              { command: "L", points: [24, 105] },
              { command: "M", points: [24, 65] },
              { command: "L", points: [51, 65] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.Control]: {
    shapeType: R.Control,
    defaultShapeData: { fill: { color: cn }, stroke: z },
    geometry: {
      pathLst: [
        pn(152, 140, 72, 77, 43),
        ...fn(152, 140, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [80, 21] },
              { command: "L", points: [65, 36] },
              { command: "L", points: [82, 47] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.Entity]: {
    shapeType: R.Entity,
    defaultShapeData: { fill: { color: cn }, stroke: z },
    geometry: {
      pathLst: [
        pn(154, 158, 72, 76, 43),
        ...fn(154, 158, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [26, 123] },
              { command: "L", points: [118, 123] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.Collection]: {
    shapeType: R.Collection,
    defaultShapeData: { fill: { color: cn }, stroke: z },
    geometry: {
      pathLst: [
        mn(332, 194, 54, 26, 296, 156, 10),
        mn(332, 194, 35, 44, 277, 175, 10),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.DataStorage1]: {
    shapeType: R.DataStorage1,
    defaultShapeData: { fill: { color: ln }, stroke: z },
    geometry: {
      pathLst: yn(402, 162, 26, 33, 402, 140, 13),
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.DataStorage2]: {
    shapeType: R.DataStorage2,
    defaultShapeData: { fill: { color: ln }, stroke: z },
    geometry: {
      pathLst: [
        ...yn(412, 152, 36, 27, 412, 134, 13),
        ...fn(412, 152, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [113, 27] },
              { command: "L", points: [113, 134] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.DataStorage3]: {
    shapeType: R.DataStorage3,
    defaultShapeData: { fill: { fillType: _0x7fd5ed.NoFill }, stroke: z },
    geometry: {
      pathLst: fn(318, 234, [
        {
          fill: "none",
          dataArray: [
            { command: "M", points: [27, 39] },
            { command: "L", points: [294, 39] },
            { command: "M", points: [27, 213] },
            { command: "L", points: [294, 213] },
          ],
        },
      ]),
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.Component]: {
    shapeType: R.Component,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: dn },
      stroke: z,
    },
    geometry: {
      pathLst: [
        mn(432, 304, 44, 42, 412, 284, 12),
        mn(432, 304, 20, 110, 64, 148, 8),
        mn(432, 304, 20, 180, 64, 218, 8),
        ...fn(432, 304, [
          {
            fill: "none",
            dataArray: [
              { command: "M", points: [44, 148] },
              { command: "L", points: [44, 180] },
            ],
          },
        ]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.ComponentBox]: {
    shapeType: R.ComponentBox,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: dn },
      stroke: z,
    },
    geometry: {
      pathLst: [
        mn(416, 284, 23, 21, 414, 263, 13),
        mn(416, 284, 350, 38, 397, 84, 4),
        mn(416, 284, 341, 47, 364, 56, 3),
        mn(416, 284, 341, 60, 364, 69, 3),
        mn(416, 284, 341, 73, 364, 82, 3),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.ProvidedInterface]: {
    shapeType: R.ProvidedInterface,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: dn },
      stroke: z,
    },
    geometry: {
      pathLst: [
        hn(160, 110, [35, 57, 58, 57]),
        gn(160, 110, 94, 57, 36, { fill: "none" }),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.AssemblyConnector]: {
    shapeType: R.AssemblyConnector,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: dn },
      stroke: z,
    },
    geometry: {
      pathLst: [
        gn(176, 144, 78, 72, 43, { fill: "none" }),
        vn(176, 144, [
          { command: "M", points: [87, 21] },
          { command: "C", points: [142, 27, 153, 115, 87, 123] },
        ]),
        hn(176, 144, [18, 70, 35, 70]),
        hn(176, 144, [122, 70, 158, 70]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.RequiredInterface]: {
    shapeType: R.RequiredInterface,
    defaultShapeData: { fill: { fillType: _0x7fd5ed.NoFill }, stroke: z },
    geometry: {
      pathLst: [
        vn(112, 144, [
          { command: "M", points: [42, 16] },
          { command: "C", points: [93, 21, 97, 119, 42, 128] },
        ]),
        hn(112, 144, [86, 72, 111, 72]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.InitialState]: {
    shapeType: R.InitialState,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: un },
      stroke: z,
    },
    geometry: {
      pathLst: [gn(96, 96, 48, 48, 38, { stroke: false })],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.FinalState]: {
    shapeType: R.FinalState,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: un },
      stroke: z,
    },
    geometry: {
      pathLst: [
        gn(120, 120, 60, 60, 46, { fill: "none" }),
        gn(120, 120, 60, 60, 30, { stroke: false }),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [R.StateBar]: {
    shapeType: R.StateBar,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: un },
      stroke: z,
    },
    geometry: {
      pathLst: [_n(112, 28, 5, 5, 107, 23, 7)],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
};
function xn(_0x4c37e3) {
  let _0x5b2e2e = {},
    _0x38bfde = _0x4c37e3.pathLst["map"]((_0x921ac6, _0x1f920e) => {
      var _0x546347;
      let _0x1e2a04 = _0x921ac6.dataArray;
      if (
        ((_0x546347 = _0x1e2a04[2]) == null ? undefined : _0x546347.command) !==
        "Q"
      )
        return _0x921ac6;
      let [_0x1aba86, _0x19d58d, , _0x3a971b] = _0x1e2a04[2].points,
        [_0x3eeeca, _0x49baf1] = _0x1e2a04[6].points,
        _0xac45f8 = _0x3a971b - _0x19d58d,
        _0x413cca = "corner" + _0x1f920e,
        _0x5dcdb0 = (_0x1b5312) => "" + _0x413cca + _0x1b5312;
      return (
        (_0x5b2e2e[_0x5dcdb0("l")] = [
          _0x367e13.MulDiv,
          "w",
          _0x3eeeca,
          Number(_0x921ac6.w),
        ]),
        (_0x5b2e2e[_0x5dcdb0("r")] = [
          _0x367e13.MulDiv,
          "w",
          _0x1aba86,
          Number(_0x921ac6.w),
        ]),
        (_0x5b2e2e[_0x5dcdb0("t")] = [
          _0x367e13.MulDiv,
          "h",
          _0x19d58d,
          Number(_0x921ac6.h),
        ]),
        (_0x5b2e2e[_0x5dcdb0("b")] = [
          _0x367e13.MulDiv,
          "h",
          _0x49baf1,
          Number(_0x921ac6.h),
        ]),
        (_0x5b2e2e[_0x5dcdb0("hw")] = [
          _0x367e13.MulDiv,
          "w",
          (_0x1aba86 - _0x3eeeca) / 2,
          Number(_0x921ac6.w),
        ]),
        (_0x5b2e2e[_0x5dcdb0("hh")] = [
          _0x367e13.MulDiv,
          "h",
          (_0x49baf1 - _0x19d58d) / 2,
          Number(_0x921ac6.h),
        ]),
        (_0x5b2e2e[_0x5dcdb0("half")] = [
          _0x367e13.Min,
          _0x5dcdb0("hw"),
          _0x5dcdb0("hh"),
        ]),
        (_0x5b2e2e[_0x5dcdb0("radius")] = [
          _0x367e13.Min,
          _0xac45f8,
          _0x5dcdb0("half"),
        ]),
        (_0x5b2e2e[_0x5dcdb0("x1")] = [
          _0x367e13.AddSub,
          _0x5dcdb0("l"),
          _0x5dcdb0("radius"),
          0,
        ]),
        (_0x5b2e2e[_0x5dcdb0("x2")] = [
          _0x367e13.AddSub,
          _0x5dcdb0("r"),
          0,
          _0x5dcdb0("radius"),
        ]),
        (_0x5b2e2e[_0x5dcdb0("y1")] = [
          _0x367e13.AddSub,
          _0x5dcdb0("t"),
          _0x5dcdb0("radius"),
          0,
        ]),
        (_0x5b2e2e[_0x5dcdb0("y2")] = [
          _0x367e13.AddSub,
          _0x5dcdb0("b"),
          0,
          _0x5dcdb0("radius"),
        ]),
        {
          stroke: _0x921ac6.stroke,
          dataArray: [
            { command: "M", points: [_0x5dcdb0("x1"), _0x5dcdb0("t")] },
            { command: "L", points: [_0x5dcdb0("x2"), _0x5dcdb0("t")] },
            {
              command: "Q",
              points: [
                _0x5dcdb0("r"),
                _0x5dcdb0("t"),
                _0x5dcdb0("r"),
                _0x5dcdb0("y1"),
              ],
            },
            { command: "L", points: [_0x5dcdb0("r"), _0x5dcdb0("y2")] },
            {
              command: "Q",
              points: [
                _0x5dcdb0("r"),
                _0x5dcdb0("b"),
                _0x5dcdb0("x2"),
                _0x5dcdb0("b"),
              ],
            },
            { command: "L", points: [_0x5dcdb0("x1"), _0x5dcdb0("b")] },
            {
              command: "Q",
              points: [
                _0x5dcdb0("l"),
                _0x5dcdb0("b"),
                _0x5dcdb0("l"),
                _0x5dcdb0("y2"),
              ],
            },
            { command: "L", points: [_0x5dcdb0("l"), _0x5dcdb0("y1")] },
            {
              command: "Q",
              points: [
                _0x5dcdb0("l"),
                _0x5dcdb0("t"),
                _0x5dcdb0("x1"),
                _0x5dcdb0("t"),
              ],
            },
            { command: "z", points: [] },
          ],
        }
      );
    });
  return { ..._0x4c37e3, gd: _0x5b2e2e, pathLst: _0x38bfde };
}
const Sn = { ...bn };
for (let e of [R.Collection, R.Component, R.ComponentBox]) {
  let t = bn[e];
  Sn[e] = { ...t, geometry: xn(t.geometry) };
}
Sn[R.StateBar] = {
  ...bn[R.StateBar],
  geometry: {
    pathLst: [
      {
        w: 112,
        h: 28,
        stroke: false,
        dataArray: [
          { command: "M", points: [5, 5] },
          { command: "L", points: [107, 5] },
          { command: "L", points: [107, 23] },
          { command: "L", points: [5, 23] },
          { command: "z", points: [] },
        ],
      },
    ],
    rect: { l: "l", t: "t", r: "r", b: "b" },
  },
};
function Cn(_0xd469ce) {
  if (_0xd469ce.type !== M.Shape || _0xd469ce.shapeData["isCustom"] !== true)
    return _0xd469ce;
  let _0x431de5 = String(_0xd469ce.shapeData["shapeType"] ?? "");
  if (!wn(_0x431de5)) return _0xd469ce;
  let _0x4d6cc2 = bn[_0x431de5],
    _0x456026 = Sn[_0x431de5];
  return !_0x4d6cc2 ||
    _0x4d6cc2 === _0x456026 ||
    !_0x381a86.diffValue(
      _0xd469ce.shapeData["customGeometry"],
      _0x4d6cc2.geometry,
    )
    ? _0xd469ce
    : {
        ..._0xd469ce,
        shapeData: {
          ..._0xd469ce.shapeData,
          customGeometry: _0x381a86.deepClone(_0x456026.geometry),
        },
      };
}
Object.values(R);
function wn(_0x58b014) {
  return _0x58b014 in Sn;
}
function Tn(_0x329c12) {
  return wn(_0x329c12) ? Sn[_0x329c12] : undefined;
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
    ActivationBar: "sequence_activation_bar",
  },
  En = {
    Object: "object",
    MagneticDisk: "magnetic_disk",
    DirectAccessStorage: "direct_access_storage",
  },
  Dn = {
    color: "#000000",
    width: 4,
    capType: _0x5b432a.Round,
    lineJoinType: _0x2c0d5c.Round,
  };
(B.ActorLifeline,
  B.BoundaryLifeline,
  B.ControlLifeline,
  B.EntityLifeline,
  B.CollectionLifeline,
  B.ObjectLifeline,
  B.MagneticDiskLifeline,
  B.DirectAccessStorageLifeline);
function On(_0x138790) {
  return _0x138790 in Mn;
}
function kn(_0x2aa0fd) {
  let _0x248a48 = (_0x2aa0fd == null ? undefined : _0x2aa0fd.pathLst) ?? [],
    _0x5a9300 = Math.max(..._0x248a48.map((_0x47b62a) => _0x47b62a.w ?? 0)),
    _0x147f41 = Math.max(..._0x248a48.map((_0x4994d1) => _0x4994d1.h ?? 0));
  if (_0x5a9300 <= 0 || _0x147f41 <= 0) return { width: 96, height: 96 };
  let _0x395ba6 = 96 / Math.max(_0x5a9300, _0x147f41);
  return {
    width: Math.round(_0x5a9300 * _0x395ba6),
    height: Math.round(_0x147f41 * _0x395ba6),
  };
}
function An(_0xb5fdaa, _0x4e2663, _0x5ae8fd) {
  var _0x5d2ddb, _0x449dc1;
  let _0x2a6f71 = Tn(_0x4e2663);
  return {
    shapeType: _0xb5fdaa,
    participantShapeType: _0x4e2663,
    geometry: (_0x2a6f71 == null ? undefined : _0x2a6f71.geometry) ?? {
      pathLst: [],
    },
    defaultSize:
      _0x5ae8fd ?? kn(_0x2a6f71 == null ? undefined : _0x2a6f71.geometry),
    defaultShapeData: {
      fill:
        _0x2a6f71 == null || (_0x5d2ddb = _0x2a6f71.defaultShapeData) == null
          ? undefined
          : _0x5d2ddb.fill,
      stroke:
        (_0x2a6f71 == null || (_0x449dc1 = _0x2a6f71.defaultShapeData) == null
          ? undefined
          : _0x449dc1.stroke) ?? Dn,
      sequenceLifeline: {
        participantShapeType: _0x4e2663,
        lifelineHeight: 320,
        minLifelineHeight: 80,
      },
    },
  };
}
function jn(_0x2987fd, _0x535b80, _0x3c0fda, _0x2fe9ff) {
  return {
    shapeType: _0x2987fd,
    participantShapeType: _0x535b80,
    defaultSize: _0x2fe9ff,
    defaultShapeData: {
      fill: { fillType: _0x7fd5ed.SolidFill, color: "#f3f6fc" },
      stroke: Dn,
      sequenceLifeline: {
        participantShapeType: _0x535b80,
        participantEngineShapeType: _0x3c0fda,
        lifelineHeight: 320,
        minLifelineHeight: 80,
      },
    },
  };
}
const Mn = {
  [B.ActorLifeline]: An(B.ActorLifeline, R.Actor),
  [B.BoundaryLifeline]: An(B.BoundaryLifeline, R.Boundary),
  [B.ControlLifeline]: An(B.ControlLifeline, R.Control),
  [B.EntityLifeline]: An(B.EntityLifeline, R.Entity),
  [B.CollectionLifeline]: An(B.CollectionLifeline, R.Collection, {
    width: 96,
    height: 56,
  }),
  [B.ObjectLifeline]: jn(B.ObjectLifeline, En.Object, _0x3fc086.RoundRect, {
    width: 96,
    height: 46,
  }),
  [B.MagneticDiskLifeline]: jn(
    B.MagneticDiskLifeline,
    En.MagneticDisk,
    _0x3fc086.FlowchartMagneticDisk,
    { width: 85, height: 96 },
  ),
  [B.DirectAccessStorageLifeline]: jn(
    B.DirectAccessStorageLifeline,
    En.DirectAccessStorage,
    _0x3fc086.FlowchartMagneticDrum,
    { width: 96, height: 59 },
  ),
  [B.ActivationBar]: {
    shapeType: B.ActivationBar,
    geometry: {
      gd: {
        halfMin: [_0x367e13.MulDiv, "ss", 1, 2],
        radius: [_0x367e13.Min, "halfMin", 4],
        x2: [_0x367e13.AddSub, "w", 0, "radius"],
        y2: [_0x367e13.AddSub, "h", 0, "radius"],
      },
      pathLst: [
        {
          stroke: true,
          dataArray: [
            { command: "M", points: ["radius", 0] },
            { command: "L", points: ["x2", 0] },
            { command: "Q", points: ["w", 0, "w", "radius"] },
            { command: "L", points: ["w", "y2"] },
            { command: "Q", points: ["w", "h", "x2", "h"] },
            { command: "L", points: ["radius", "h"] },
            { command: "Q", points: [0, "h", 0, "y2"] },
            { command: "L", points: [0, "radius"] },
            { command: "Q", points: [0, 0, "radius", 0] },
            { command: "z", points: [] },
          ],
        },
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
    defaultSize: { width: 16, height: 96 },
    defaultShapeData: {
      fill: { color: "#ffffff", fillType: _0x7fd5ed.SolidFill },
      stroke: Dn,
      sequenceActivation: { attachableToLifeline: true },
    },
  },
};
Object.values(B);
const Nn = {
  pathLst: [
    {
      w: 16,
      h: 96,
      stroke: true,
      dataArray: [
        { command: "M", points: [4, 0] },
        { command: "L", points: [12, 0] },
        { command: "Q", points: [16, 0, 16, 4] },
        { command: "L", points: [16, 92] },
        { command: "Q", points: [16, 96, 12, 96] },
        { command: "L", points: [4, 96] },
        { command: "Q", points: [0, 96, 0, 92] },
        { command: "L", points: [0, 4] },
        { command: "Q", points: [0, 0, 4, 0] },
        { command: "z", points: [] },
      ],
    },
  ],
  rect: { l: "l", t: "t", r: "r", b: "b" },
};
function Pn(_0x46c930) {
  var _0x1fb8ce;
  return _0x46c930.type !== M.Shape ||
    ((_0x1fb8ce = _0x46c930.shapeData) == null
      ? undefined
      : _0x1fb8ce.shapeType) !== B.ActivationBar ||
    _0x46c930.shapeData["isCustom"] !== true ||
    !_0x381a86.diffValue(_0x46c930.shapeData["customGeometry"], Nn)
    ? _0x46c930
    : {
        ..._0x46c930,
        shapeData: {
          ..._0x46c930.shapeData,
          customGeometry: _0x381a86.deepClone(Mn[B.ActivationBar].geometry),
        },
      };
}
function Fn(_0x15554f) {
  return On(_0x15554f) ? Mn[_0x15554f] : undefined;
}
function In(_0x370c98) {
  return _0x370c98 == null ? undefined : _0x370c98.sequenceLifeline;
}
function Ln(_0x2f2d83) {
  return _0x2f2d83 == null ? undefined : _0x2f2d83.sequenceActivation;
}
function Rn(_0x1ba4b8) {
  let _0x2823f5 = _0x1ba4b8 == null ? undefined : _0x1ba4b8.shapeData;
  return !!_0x2823f5 && !!In(_0x2823f5);
}
function zn(_0x790a22) {
  var _0x1af5b0;
  let _0x1c32d4 = _0x790a22 == null ? undefined : _0x790a22.shapeData;
  return (
    !!_0x1c32d4 &&
    ((_0x1af5b0 = Ln(_0x1c32d4)) == null
      ? undefined
      : _0x1af5b0.attachableToLifeline) === true
  );
}
function Bn(_0x26d82c) {
  return _0x26d82c == null ? undefined : _0x26d82c.element["parentId"];
}
function Vn(_0x513354) {
  return (
    (_0x513354 == null ? undefined : _0x513354.element["type"]) === M.Container
  );
}
function V(_0x590b0b, _0x20857c) {
  let _0x4b22fd = [],
    _0x16ea60 = new Set([_0x20857c]),
    _0x2e36d0 = Bn(_0x590b0b[_0x20857c]);
  for (; _0x2e36d0 && !_0x16ea60.has(_0x2e36d0);) {
    let _0x302e75 = _0x590b0b[_0x2e36d0];
    if (!Vn(_0x302e75)) break;
    (_0x4b22fd.push(_0x2e36d0),
      _0x16ea60.add(_0x2e36d0),
      (_0x2e36d0 = Bn(_0x302e75)));
  }
  return _0x4b22fd;
}
function Hn(_0x4bcf17, _0x2f2d5b) {
  return Vn(_0x4bcf17[_0x2f2d5b])
    ? Object.values(_0x4bcf17)
        .filter((_0x31ae71) => _0x31ae71.element["parentId"] === _0x2f2d5b)
        .map((_0x2f8f1f) => _0x2f8f1f.elementId)
    : [];
}
function Un(_0x5169ce, _0x3846c3) {
  let _0x3d1341 = [],
    _0xc1c637 = new Set(),
    _0x2257e6 = (_0x5e877f) => {
      Hn(_0x5169ce, _0x5e877f).forEach((_0x305e0e) => {
        _0xc1c637.has(_0x305e0e) ||
          (_0xc1c637.add(_0x305e0e),
          _0x3d1341.push(_0x305e0e),
          Vn(_0x5169ce[_0x305e0e]) && _0x2257e6(_0x305e0e));
      });
    };
  return (_0x2257e6(_0x3846c3), _0x3d1341);
}
function Wn(_0xc3d9c2, _0xe7acfe, _0x40ad9f) {
  return !_0x40ad9f || !Vn(_0xc3d9c2[_0xe7acfe])
    ? false
    : _0xe7acfe === _0x40ad9f || V(_0xc3d9c2, _0x40ad9f).includes(_0xe7acfe);
}
function Gn(_0x5c59c1, _0x1993c2) {
  if (_0x1993c2.length === 0) return;
  let _0x5d8830 = _0x1993c2.map((_0xca14d5) => V(_0x5c59c1, _0xca14d5)),
    _0x400a50 = _0x5d8830[0];
  if (!(!_0x400a50 || _0x400a50.length === 0))
    return _0x400a50.find((_0x3c84fc) =>
      _0x5d8830.every((_0x18f2a1) => _0x18f2a1.includes(_0x3c84fc)),
    );
}
function Kn(_0x7e53e9) {
  return {
    left:
      _0x7e53e9.width >= 0 ? _0x7e53e9.left : _0x7e53e9.left + _0x7e53e9.width,
    top:
      _0x7e53e9.height >= 0 ? _0x7e53e9.top : _0x7e53e9.top + _0x7e53e9.height,
    width: Math.abs(_0x7e53e9.width),
    height: Math.abs(_0x7e53e9.height),
  };
}
function qn(_0x1e9391) {
  return {
    left: (_0x1e9391 == null ? undefined : _0x1e9391.left) ?? 0,
    top: (_0x1e9391 == null ? undefined : _0x1e9391.top) ?? 0,
    width: (_0x1e9391 == null ? undefined : _0x1e9391.width) ?? 0,
    height: (_0x1e9391 == null ? undefined : _0x1e9391.height) ?? 0,
    rotation: (_0x1e9391 == null ? undefined : _0x1e9391.rotation) ?? 0,
    scaleX: _0x1e9391 == null ? undefined : _0x1e9391.scaleX,
    scaleY: _0x1e9391 == null ? undefined : _0x1e9391.scaleY,
    skewX: _0x1e9391 == null ? undefined : _0x1e9391.skewX,
    skewY: _0x1e9391 == null ? undefined : _0x1e9391.skewY,
    flipX: _0x1e9391 == null ? undefined : _0x1e9391.flipX,
    flipY: _0x1e9391 == null ? undefined : _0x1e9391.flipY,
  };
}
function Jn(_0x4a2883) {
  return qn({
    ..._0x4a2883.element["transform"],
    ...(_0x4a2883.transform ?? {}),
  });
}
function Yn(_0xee9397, _0x70335f) {
  return _0xee9397.element["type"] === M.Container
    ? { ..._0x70335f, rotation: 0 }
    : _0x70335f;
}
function H(_0x1f2311, _0x22e968) {
  let _0x114b43 = _0x1f2311[_0x22e968];
  if (!_0x114b43) return null;
  let _0x4e3a05 = V(_0x1f2311, _0x22e968),
    _0x5e46a2 = Jn(_0x114b43),
    _0x3af0c0 = _0x4e3a05.reduce(
      (_0x519d0e, _0x2dc59e) => {
        let _0x7515a3 = _0x1f2311[_0x2dc59e];
        if (!_0x7515a3) return _0x519d0e;
        let _0x11a85c = Jn(_0x7515a3);
        return {
          left: _0x519d0e.left + (_0x11a85c.left ?? 0),
          top: _0x519d0e.top + (_0x11a85c.top ?? 0),
        };
      },
      { left: 0, top: 0 },
    );
  return {
    elementId: _0x22e968,
    parentChain: _0x4e3a05,
    localTransform: _0x5e46a2,
    worldTransform: Yn(_0x114b43, {
      ..._0x5e46a2,
      left: (_0x5e46a2.left ?? 0) + _0x3af0c0.left,
      top: (_0x5e46a2.top ?? 0) + _0x3af0c0.top,
    }),
  };
}
function U(_0x5c8b7e, _0x2e8def) {
  let _0x4393f9 = H(_0x5c8b7e, _0x2e8def);
  return _0x4393f9
    ? Kn({
        left: _0x4393f9.worldTransform["left"] ?? 0,
        top: _0x4393f9.worldTransform["top"] ?? 0,
        width: _0x4393f9.worldTransform["width"] ?? 0,
        height: _0x4393f9.worldTransform["height"] ?? 0,
      })
    : null;
}
function W(_0x29a711, _0x5f0805) {
  var _0x3855cf;
  let _0xfc4f35 = _0x5f0805.parentId
      ? _0x29a711[_0x5f0805.parentId]
      : undefined,
    _0x4c500a =
      _0x5f0805.parentId &&
      (_0xfc4f35 == null ? undefined : _0xfc4f35.element["type"]) ===
        M.Container
        ? (_0x3855cf = H(_0x29a711, _0x5f0805.parentId)) == null
          ? undefined
          : _0x3855cf.worldTransform
        : null;
  return qn({
    ..._0x5f0805.worldTransform,
    left:
      (_0x5f0805.worldTransform["left"] ?? 0) -
      ((_0x4c500a == null ? undefined : _0x4c500a.left) ?? 0),
    top:
      (_0x5f0805.worldTransform["top"] ?? 0) -
      ((_0x4c500a == null ? undefined : _0x4c500a.top) ?? 0),
  });
}
function G(_0x17f88a) {
  return {
    left: _0x17f88a.left ?? 0,
    top: _0x17f88a.top ?? 0,
    width: _0x17f88a.width ?? 0,
    height: _0x17f88a.height ?? 0,
    angle: _0x17f88a.rotation ?? _0x17f88a.angle ?? 0,
    flipX: _0x17f88a.flipX,
    flipY: _0x17f88a.flipY,
  };
}
function Xn(_0x26b6a4) {
  return {
    left: _0x26b6a4.left,
    top: _0x26b6a4.top,
    width: _0x26b6a4.width,
    height: _0x26b6a4.height,
    rotation: _0x26b6a4.angle,
    flipX: _0x26b6a4.flipX,
    flipY: _0x26b6a4.flipY,
  };
}
const K = 0.001;
function Zn(_0x33c649, _0x274711, _0x3f4dee = {}) {
  let _0x455702 = _0x3f4dee.source ?? "model",
    _0x269d52 = Qn(_0x3f4dee.focusPadding),
    _0xa2307f = $n(_0x3f4dee.endpointSnapThreshold),
    _0x1b0a2b = _0x274711
      .map((_0x1f5bc5) => _0x33c649[_0x1f5bc5])
      .filter(
        (_0x35b7d2) =>
          _0x35b7d2 !== undefined && _0x35b7d2.element["visible"] !== false,
      ),
    _0x48396a = new Map();
  for (let _0x1b5f7c of _0x1b0a2b) {
    let _0x4a6145 = U(_0x33c649, _0x1b5f7c.elementId);
    _0x4a6145 && _0x48396a.set(_0x1b5f7c.elementId, _0x4a6145);
  }
  let _0x1e3ea7 = _0x1b0a2b
      .filter((_0x39b6a3) => _0x39b6a3.element["type"] === M.Connector)
      .map((_0x58fbf9) => {
        var _0xeee5e6;
        return er(
          _0x58fbf9.element,
          (_0xeee5e6 = _0x3f4dee.resolvedRoutes) == null
            ? undefined
            : _0xeee5e6[_0x58fbf9.elementId],
        );
      }),
    _0x3c7c93 = Hr([
      ...rr(_0x1b0a2b, _0x48396a, _0x33c649, _0x269d52),
      ...or(_0x1e3ea7, _0x1b0a2b, _0x48396a, _0x269d52),
      ..._r(_0x1e3ea7, _0x269d52),
      ...lr(_0x1e3ea7, _0x1b0a2b, _0x48396a, _0x33c649, _0x269d52, _0xa2307f),
      ...ur(_0x1e3ea7, _0x269d52, _0xa2307f),
    ]).sort(Br),
    _0x43ff92 = _0x1e3ea7.map(
      ({ connector: _0x4a821f, points: _0x150ab4, resolved: _0x9346fe }) => ({
        connectorId: _0x4a821f.id,
        points: _0x150ab4.map((_0x2b3307) => ({ ..._0x2b3307 })),
        resolved: _0x9346fe,
      }),
    );
  return {
    source: _0x455702,
    contentBounds: Or(Array.from(_0x48396a.values())),
    routes: _0x43ff92,
    issues: _0x3c7c93,
    summary: {
      errorCount: _0x3c7c93.filter(
        (_0x50e309) => _0x50e309.severity === "error",
      ).length,
      warningCount: _0x3c7c93.filter(
        (_0x2fb80e) => _0x2fb80e.severity === "warning",
      ).length,
      unresolvedConnectorCount: _0x43ff92.filter(
        (_0x46d12d) => !_0x46d12d.resolved,
      ).length,
    },
  };
}
function Qn(_0x41cdda) {
  return _0x41cdda === undefined || !Number.isFinite(_0x41cdda) || _0x41cdda < 0
    ? 24
    : _0x41cdda;
}
function $n(_0x217e56) {
  return _0x217e56 === undefined || !Number.isFinite(_0x217e56) || _0x217e56 < 0
    ? 12
    : _0x217e56;
}
function er(_0x4f7146, _0x339f97) {
  var _0x20f6d4;
  if (_0x339f97 && _0x339f97.length >= 2)
    return {
      connector: _0x4f7146,
      points: _0x339f97.map((_0x328d02) => ({ ..._0x328d02 })),
      resolved: true,
    };
  let _0x36d2ba = tr(_0x4f7146.connectorData["start"]),
    _0x4ebbbc = tr(_0x4f7146.connectorData["end"]),
    _0x2f2752 =
      ((_0x20f6d4 = _0x4f7146.connectorData["orthogonalData"]) == null
        ? undefined
        : _0x20f6d4.routePoints) ??
      _0x4f7146.connectorData["waypoints"] ??
      [],
    _0x3de0bb = [
      _0x36d2ba,
      ..._0x2f2752.map((_0x1ac5ed) => ({ x: _0x1ac5ed.x, y: _0x1ac5ed.y })),
      _0x4ebbbc,
    ].filter((_0x2544d1) => _0x2544d1 !== null),
    _0x55a1f3 =
      _0x4f7146.connectorData["routing"] === "straight" ||
      _0x4f7146.connectorData["routing"] === "freePolyline" ||
      (_0x4f7146.connectorData["routing"] === "orthogonal" &&
        (_0x4f7146.connectorData["routingMode"] !== "auto" ||
          _0x2f2752.length > 0));
  return {
    connector: _0x4f7146,
    points: nr(_0x3de0bb),
    resolved: _0x55a1f3 && _0x3de0bb.length >= 2,
  };
}
function tr(_0x4452d8) {
  return _0x4452d8.kind === "free"
    ? { x: _0x4452d8.x, y: _0x4452d8.y }
    : _0x4452d8.fallbackPoint
      ? { ..._0x4452d8.fallbackPoint }
      : null;
}
function nr(_0x1e0e4a) {
  let _0x8902b2 = [];
  for (let _0x2d51fa of _0x1e0e4a) {
    let _0x5c30a1 = _0x8902b2[_0x8902b2.length - 1];
    (!_0x5c30a1 || !Er(_0x5c30a1, _0x2d51fa)) &&
      _0x8902b2.push({ ..._0x2d51fa });
  }
  return _0x8902b2;
}
function rr(_0x4110df, _0x41fec7, _0x30432e, _0x5b9547) {
  let _0x14e88f = _0x4110df
      .filter((_0x1eae61) => _0x1eae61.element["type"] !== M.Connector)
      .flatMap((_0x21dc2a) => {
        let _0x3d2439 = _0x41fec7.get(_0x21dc2a.elementId);
        return _0x3d2439 ? [{ bounds: _0x3d2439, value: _0x21dc2a }] : [];
      }),
    _0x57b709 = [];
  return (
    Nr(_0x14e88f, (_0x549537, _0xb13d7f) => {
      let _0x336876 = _0x549537.value,
        _0x549e4b = _0xb13d7f.value;
      if (ir(_0x336876.elementId, _0x549e4b.elementId, _0x30432e)) return;
      let _0x37ec4e = Dr(_0x549537.bounds, _0xb13d7f.bounds);
      if (!_0x37ec4e) return;
      let _0x1efdff = [_0x336876.elementId, _0x549e4b.elementId].sort();
      _0x57b709.push(
        Lr({
          rule: "element-overlap",
          severity: "error",
          elementIds: _0x1efdff,
          connectorIds: [],
          bounds: _0x37ec4e,
          focusPadding: _0x5b9547,
        }),
      );
    }),
    _0x57b709
  );
}
function ir(_0x42b35c, _0x5dde83, _0x3ab3d3) {
  return (
    ar(_0x42b35c, _0x5dde83, _0x3ab3d3) || ar(_0x5dde83, _0x42b35c, _0x3ab3d3)
  );
}
function ar(_0x4cf44b, _0x436731, _0x461b7) {
  var _0x243a96;
  let _0x2de764 =
      (_0x243a96 = _0x461b7[_0x436731]) == null
        ? undefined
        : _0x243a96.element["parentId"],
    _0x34609d = new Set();
  for (; _0x2de764 && !_0x34609d.has(_0x2de764);) {
    var _0xab00fa;
    if (_0x2de764 === _0x4cf44b) return true;
    (_0x34609d.add(_0x2de764),
      (_0x2de764 =
        (_0xab00fa = _0x461b7[_0x2de764]) == null
          ? undefined
          : _0xab00fa.element["parentId"]));
  }
  return false;
}
function or(_0x4eb482, _0x59fe68, _0x3af2ff, _0x1bdf98) {
  let _0x50e721 = _0x59fe68
      .filter(
        (_0x4ff316) =>
          _0x4ff316.element["type"] !== M.Connector &&
          _0x4ff316.element["type"] !== M.Container,
      )
      .flatMap((_0x33256c) => {
        let _0x5e6304 = _0x3af2ff.get(_0x33256c.elementId);
        return _0x5e6304 ? [{ bounds: _0x5e6304, value: _0x33256c }] : [];
      }),
    _0x3b41b7 = _0x4eb482
      .filter((_0x2af593) => _0x2af593.resolved)
      .flatMap((_0x336a4a) =>
        vr(_0x336a4a.points).map((_0x3a75d6) => ({
          bounds: kr(_0x3a75d6.start, _0x3a75d6.end),
          value: { route: _0x336a4a, segment: _0x3a75d6 },
        })),
      ),
    _0x14ce6f = new Map();
  return (
    Mr(_0x3b41b7, _0x50e721, (_0x5f7af4, _0x3f2826) => {
      let { route: _0x1e2d6a, segment: _0x5b1772 } = _0x5f7af4.value,
        _0x2305ed = _0x3f2826.value;
      if (sr(_0x1e2d6a.connector).has(_0x2305ed.elementId)) return;
      let _0x5af063 = yr(_0x5b1772, _0x3f2826.bounds);
      if (!_0x5af063) return;
      let _0x5aea2e = _0x1e2d6a.connector["id"] + ":" + _0x2305ed.elementId,
        _0xa40d20 = _0x14ce6f.get(_0x5aea2e) ?? {
          route: _0x1e2d6a,
          obstacle: _0x2305ed,
          intersections: [],
        };
      (_0xa40d20.intersections["push"](_0x5af063),
        _0x14ce6f.set(_0x5aea2e, _0xa40d20));
    }),
    Array.from(_0x14ce6f.values()).flatMap(
      ({ route: _0x3f51f1, obstacle: _0x46857d, intersections: _0x22ba57 }) => {
        let _0x20c145 = Or(_0x22ba57);
        return _0x20c145
          ? [
              Lr({
                rule: "connector-through-element",
                severity: "error",
                elementIds: [_0x46857d.elementId],
                connectorIds: [_0x3f51f1.connector["id"]],
                bounds: _0x20c145,
                focusPadding: _0x1bdf98,
                routePoints: _0x3f51f1.points,
              }),
            ]
          : [];
      },
    )
  );
}
function sr(_0x39f17f) {
  let _0x245bee = new Set(),
    _0xf80b9d = cr(_0x39f17f.connectorData["start"]),
    _0x12277b = cr(_0x39f17f.connectorData["end"]);
  return (
    _0xf80b9d && _0x245bee.add(_0xf80b9d),
    _0x12277b && _0x245bee.add(_0x12277b),
    _0x245bee
  );
}
function cr(_0x1183c) {
  return _0x1183c.kind === "free" ? null : _0x1183c.shapeId;
}
function lr(_0x37f357, _0x4d59cd, _0x22febf, _0x46dc75, _0xb2b609, _0x12ec7b) {
  let _0x2795e1 = _0x37f357
      .flatMap((_0xf8db08) => dr(_0xf8db08))
      .map((_0x348d0d) => ({
        bounds: jr(Ar(_0x348d0d.point), _0x12ec7b),
        value: _0x348d0d,
      })),
    _0x300ef1 = _0x4d59cd
      .filter((_0xb1951) => fr(_0xb1951))
      .flatMap((_0x22a55d) => {
        let _0x25c7f4 = _0x22febf.get(_0x22a55d.elementId);
        if (!_0x25c7f4) return [];
        let _0x3125b5 = pr(_0x22a55d, _0x46dc75);
        return [
          {
            bounds: _0x3125b5
              ? (Or([_0x25c7f4, kr(_0x3125b5.start, _0x3125b5.end)]) ??
                _0x25c7f4)
              : _0x25c7f4,
            value: {
              item: _0x22a55d,
              bounds: _0x25c7f4,
              lifelineSegment: _0x3125b5,
            },
          },
        ];
      }),
    _0xf10790 = new Map();
  return (
    Mr(_0x2795e1, _0x300ef1, (_0x4ba519, _0x565a87) => {
      let _0x1cc0c8 = _0x4ba519.value,
        {
          item: _0x255b1a,
          bounds: _0x5a33f5,
          lifelineSegment: _0x20d5a1,
        } = _0x565a87.value,
        _0x56f51d = wr(_0x1cc0c8.point, _0x5a33f5),
        _0x2a1a2e = _0x20d5a1 ? Cr(_0x1cc0c8.point, _0x20d5a1) : 1 / 0,
        _0x14e488 = Math.min(_0x56f51d, _0x2a1a2e);
      if (_0x14e488 > _0x12ec7b) return;
      let _0x44d825 =
          _0x1cc0c8.route["connector"].id + ":" + _0x1cc0c8.endpoint,
        _0x53b36f = _0xf10790.get(_0x44d825);
      (!_0x53b36f ||
        _0x14e488 < _0x53b36f.distance ||
        (_0x14e488 === _0x53b36f.distance &&
          _0x255b1a.elementId < _0x53b36f.target["item"].elementId)) &&
        _0xf10790.set(_0x44d825, {
          distance: _0x14e488,
          endpoint: _0x1cc0c8,
          target: _0x565a87.value,
        });
    }),
    Array.from(_0xf10790.values()).map(
      ({ endpoint: _0x46df08, target: _0x5a54e2 }) =>
        Lr({
          rule: "connector-free-endpoint-near-element",
          severity: "warning",
          elementIds: [_0x5a54e2.item["elementId"]],
          connectorIds: [_0x46df08.route["connector"].id],
          bounds: Ar(_0x46df08.point),
          focusPadding: _0xb2b609,
          routePoints: _0x46df08.route["points"],
          endpoint: _0x46df08.endpoint,
          suggestedAction: "bind-connector-endpoint",
        }),
    )
  );
}
function ur(_0x26a551, _0x17b145, _0x346e7d) {
  let _0x30716f = _0x26a551
      .flatMap((_0x6b5f91) => dr(_0x6b5f91))
      .filter(({ route: _0x4eb025, endpoint: _0xe366d4 }) =>
        mr(_0x4eb025.points, _0xe366d4),
      )
      .map((_0x4d5c60) => ({
        bounds: jr(Ar(_0x4d5c60.point), _0x346e7d),
        value: _0x4d5c60,
      })),
    _0x584816 = _0x26a551
      .filter((_0x33ef08) => hr(_0x33ef08))
      .flatMap((_0x207eeb) =>
        vr(_0x207eeb.points).map((_0x2892dd) => ({
          bounds: jr(kr(_0x2892dd.start, _0x2892dd.end), _0x346e7d),
          value: { route: _0x207eeb, segment: _0x2892dd },
        })),
      ),
    _0x4eaab4 = new Map();
  return (
    Mr(_0x30716f, _0x584816, (_0x3035a7, _0x213f5a) => {
      let _0x7a3fda = _0x3035a7.value,
        { route: _0x2b8884, segment: _0x3ae6ea } = _0x213f5a.value;
      if (_0x7a3fda.route["connector"].id === _0x2b8884.connector["id"]) return;
      let _0x2fec81 = Cr(_0x7a3fda.point, _0x3ae6ea);
      if (_0x2fec81 > _0x346e7d) return;
      let _0x15d30d =
          _0x7a3fda.route["connector"].id + ":" + _0x7a3fda.endpoint,
        _0x46aa73 = _0x4eaab4.get(_0x15d30d);
      (!_0x46aa73 ||
        _0x2fec81 < _0x46aa73.distance ||
        (_0x2fec81 === _0x46aa73.distance &&
          _0x2b8884.connector["id"] < _0x46aa73.dashedRoute["connector"].id)) &&
        _0x4eaab4.set(_0x15d30d, {
          distance: _0x2fec81,
          endpoint: _0x7a3fda,
          dashedRoute: _0x2b8884,
        });
    }),
    Array.from(_0x4eaab4.values()).map(
      ({ endpoint: _0x18ffaa, dashedRoute: _0x3dfc08 }) =>
        Lr({
          rule: "connector-free-endpoint-near-dashed-connector",
          severity: "warning",
          elementIds: [],
          connectorIds: [
            _0x18ffaa.route["connector"].id,
            _0x3dfc08.connector["id"],
          ],
          bounds: Ar(_0x18ffaa.point),
          focusPadding: _0x17b145,
          routePoints: _0x18ffaa.route["points"],
          endpoint: _0x18ffaa.endpoint,
          suggestedAction: "replace-dashed-connector-with-sequence-lifeline",
        }),
    )
  );
}
function dr(_0x2da43e) {
  let _0x107942 = [];
  return (
    _0x2da43e.connector["connectorData"].start["kind"] === "free" &&
      _0x107942.push({
        route: _0x2da43e,
        endpoint: "start",
        point: { ..._0x2da43e.connector["connectorData"].start },
      }),
    _0x2da43e.connector["connectorData"].end["kind"] === "free" &&
      _0x107942.push({
        route: _0x2da43e,
        endpoint: "end",
        point: { ..._0x2da43e.connector["connectorData"].end },
      }),
    _0x107942
  );
}
function fr(_0x5e6e03) {
  return (
    _0x5e6e03.element["locked"] !== true &&
    _0x5e6e03.element["type"] !== M.Connector &&
    _0x5e6e03.element["type"] !== M.Group
  );
}
function pr(_0x445741, _0x304c55) {
  if (_0x445741.element["type"] !== M.Shape) return null;
  let _0x416a3c = In(_0x445741.element["shapeData"]),
    _0x4b39e2 = H(_0x304c55, _0x445741.elementId);
  if (
    !_0x416a3c ||
    !_0x4b39e2 ||
    Math.abs(_0x4b39e2.worldTransform["rotation"] ?? 0) > K
  )
    return null;
  let _0x4e877e = _0x4b39e2.worldTransform["left"] ?? 0,
    _0x2ec431 = _0x4b39e2.worldTransform["top"] ?? 0,
    _0x49bd27 = _0x4b39e2.worldTransform["width"] ?? 0,
    _0x4361ee = _0x4b39e2.worldTransform["height"] ?? 0,
    _0x5cb233 = _0x4e877e + _0x49bd27 / 2,
    _0xdd70f7 = _0x2ec431 + _0x4361ee;
  return {
    start: { x: _0x5cb233, y: _0xdd70f7 },
    end: {
      x: _0x5cb233,
      y:
        _0xdd70f7 +
        Math.max(_0x416a3c.minLifelineHeight, _0x416a3c.lifelineHeight),
    },
  };
}
function mr(_0x5e68e8, _0x31a957) {
  let _0x21a9fb = _0x31a957 === "start",
    _0x2bb4aa = _0x21a9fb ? 0 : _0x5e68e8.length - 1,
    _0x19a485 = _0x5e68e8[_0x2bb4aa];
  if (!_0x19a485) return false;
  for (
    let _0x3d0e9f = _0x2bb4aa + (_0x21a9fb ? 1 : -1);
    _0x3d0e9f >= 0 && _0x3d0e9f < _0x5e68e8.length;
    _0x3d0e9f += _0x21a9fb ? 1 : -1
  ) {
    let _0x28f142 = _0x5e68e8[_0x3d0e9f],
      _0x3f5cf2 = Math.abs(_0x28f142.x - _0x19a485.x),
      _0x47570e = Math.abs(_0x28f142.y - _0x19a485.y);
    if (!(_0x3f5cf2 <= K && _0x47570e <= K)) return _0x3f5cf2 >= _0x47570e * 2;
  }
  return false;
}
function hr(_0x3233dd) {
  var _0x2c02e6;
  let { connectorData: _0x503640 } = _0x3233dd.connector;
  if (
    !(
      (_0x2c02e6 = _0x503640.style) != null &&
      (_0x2c02e6 = _0x2c02e6.dash) != null &&
      _0x2c02e6.some((_0x246ae9) => _0x246ae9 > 0)
    ) ||
    gr(_0x503640.style["startMarker"]) ||
    gr(_0x503640.style["endMarker"]) ||
    _0x503640.start["kind"] !== "free" ||
    _0x503640.end["kind"] !== "free"
  )
    return false;
  let _0x94e0cf = _0x3233dd.points[0],
    _0x31b262 = _0x3233dd.points[_0x3233dd.points["length"] - 1],
    _0x3a416d = vr(_0x3233dd.points);
  return !_0x94e0cf ||
    !_0x31b262 ||
    _0x3a416d.length === 0 ||
    Math.abs(_0x31b262.y - _0x94e0cf.y) < 48
    ? false
    : _0x3a416d.every((_0x21638d) => {
        let _0x1289d7 = Math.abs(_0x21638d.end["x"] - _0x21638d.start["x"]);
        return (
          Math.abs(_0x21638d.end["y"] - _0x21638d.start["y"]) >= _0x1289d7 * 2
        );
      });
}
function gr(_0x2aa09f) {
  return _0x2aa09f !== undefined && _0x2aa09f.type !== "none";
}
function _r(_0x1bbce1, _0x1b44a1) {
  let _0x567d8d = _0x1bbce1
      .filter((_0x19c8b6) => _0x19c8b6.resolved)
      .flatMap((_0xa4495a) =>
        vr(_0xa4495a.points).map((_0x1b8afe) => ({
          bounds: kr(_0x1b8afe.start, _0x1b8afe.end),
          value: { route: _0xa4495a, segment: _0x1b8afe },
        })),
      ),
    _0x40e1d4 = [];
  return (
    Nr(_0x567d8d, (_0x18c087, _0x38051a) => {
      let _0x1e8a1b = _0x18c087.value["route"],
        _0x244d63 = _0x38051a.value["route"];
      if (_0x1e8a1b.connector["id"] === _0x244d63.connector["id"]) return;
      let _0x44f70a = [
          _0x1e8a1b.connector["id"],
          _0x244d63.connector["id"],
        ].sort(),
        _0x26d35f = br(_0x18c087.value["segment"], _0x38051a.value["segment"]);
      if (_0x26d35f) {
        _0x40e1d4.push(
          Lr({
            rule: "connector-collinear-overlap",
            severity: "error",
            elementIds: [],
            connectorIds: _0x44f70a,
            bounds: _0x26d35f,
            focusPadding: _0x1b44a1,
            routePoints: _0x1e8a1b.points,
          }),
        );
        return;
      }
      let _0x588a4e = xr(
        _0x18c087.value["segment"],
        _0x38051a.value["segment"],
      );
      !_0x588a4e ||
        Tr(_0x588a4e, _0x1e8a1b.points, _0x244d63.points) ||
        _0x40e1d4.push(
          Lr({
            rule: "connector-crossing",
            severity: "warning",
            elementIds: [],
            connectorIds: _0x44f70a,
            bounds: Ar(_0x588a4e),
            focusPadding: _0x1b44a1,
            routePoints: _0x1e8a1b.points,
          }),
        );
    }),
    Vr(_0x40e1d4)
  );
}
function vr(_0x414485) {
  let _0x2049b8 = [];
  for (let _0x2b81a0 = 0; _0x2b81a0 < _0x414485.length - 1; _0x2b81a0 += 1)
    Er(_0x414485[_0x2b81a0], _0x414485[_0x2b81a0 + 1]) ||
      _0x2049b8.push({
        start: _0x414485[_0x2b81a0],
        end: _0x414485[_0x2b81a0 + 1],
      });
  return _0x2049b8;
}
function yr(_0x13c4ec, _0x532334) {
  let _0x355fee = _0x13c4ec.end["x"] - _0x13c4ec.start["x"],
    _0xf7a4c2 = _0x13c4ec.end["y"] - _0x13c4ec.start["y"],
    _0x822053 = 0,
    _0x299d46 = 1,
    _0x53f418 = [
      [-_0x355fee, _0x13c4ec.start["x"] - _0x532334.left],
      [_0x355fee, _0x532334.left + _0x532334.width - _0x13c4ec.start["x"]],
      [-_0xf7a4c2, _0x13c4ec.start["y"] - _0x532334.top],
      [_0xf7a4c2, _0x532334.top + _0x532334.height - _0x13c4ec.start["y"]],
    ];
  for (let [_0xa01239, _0x150d35] of _0x53f418) {
    if (Math.abs(_0xa01239) <= K) {
      if (_0x150d35 < 0) return null;
      continue;
    }
    let _0x3e8622 = _0x150d35 / _0xa01239;
    if (
      (_0xa01239 < 0
        ? (_0x822053 = Math.max(_0x822053, _0x3e8622))
        : (_0x299d46 = Math.min(_0x299d46, _0x3e8622)),
      _0x822053 > _0x299d46)
    )
      return null;
  }
  let _0x4eb1a5 = {
      x: _0x13c4ec.start["x"] + _0x822053 * _0x355fee,
      y: _0x13c4ec.start["y"] + _0x822053 * _0xf7a4c2,
    },
    _0x343124 = {
      x: _0x13c4ec.start["x"] + _0x299d46 * _0x355fee,
      y: _0x13c4ec.start["y"] + _0x299d46 * _0xf7a4c2,
    };
  return Er(_0x4eb1a5, _0x343124) ? null : kr(_0x4eb1a5, _0x343124);
}
function br(_0x3605de, _0x5148dc) {
  let _0x285230 = _0x3605de.end["x"] - _0x3605de.start["x"],
    _0x387fe2 = _0x3605de.end["y"] - _0x3605de.start["y"],
    _0x3be552 = _0x5148dc.end["x"] - _0x5148dc.start["x"],
    _0x43d1d3 = _0x5148dc.end["y"] - _0x5148dc.start["y"];
  if (
    Math.abs(Sr(_0x285230, _0x387fe2, _0x3be552, _0x43d1d3)) > K ||
    Math.abs(
      Sr(
        _0x285230,
        _0x387fe2,
        _0x5148dc.start["x"] - _0x3605de.start["x"],
        _0x5148dc.start["y"] - _0x3605de.start["y"],
      ),
    ) > K
  )
    return null;
  let _0x308762 = Math.abs(_0x285230) >= Math.abs(_0x387fe2),
    _0x58aa20 = _0x308762
      ? [_0x3605de.start["x"], _0x3605de.end["x"]]
      : [_0x3605de.start["y"], _0x3605de.end["y"]],
    _0x440ec5 = _0x308762
      ? [_0x5148dc.start["x"], _0x5148dc.end["x"]]
      : [_0x5148dc.start["y"], _0x5148dc.end["y"]],
    _0x16e544 = Math.max(Math.min(..._0x58aa20), Math.min(..._0x440ec5)),
    _0x530467 = Math.min(Math.max(..._0x58aa20), Math.max(..._0x440ec5));
  if (_0x530467 - _0x16e544 <= K) return null;
  let _0x48e646 = (_0x38a703) => {
    let _0x3d53f1 = _0x308762 ? _0x285230 : _0x387fe2,
      _0xa267cc =
        (_0x38a703 -
          (_0x308762 ? _0x3605de.start["x"] : _0x3605de.start["y"])) /
        _0x3d53f1;
    return {
      x: _0x3605de.start["x"] + _0xa267cc * _0x285230,
      y: _0x3605de.start["y"] + _0xa267cc * _0x387fe2,
    };
  };
  return kr(_0x48e646(_0x16e544), _0x48e646(_0x530467));
}
function xr(_0x46572b, _0x88edeb) {
  let _0x427346 = _0x46572b.end["x"] - _0x46572b.start["x"],
    _0x5ecc0f = _0x46572b.end["y"] - _0x46572b.start["y"],
    _0xe27987 = _0x88edeb.end["x"] - _0x88edeb.start["x"],
    _0x5ca12f = _0x88edeb.end["y"] - _0x88edeb.start["y"],
    _0x4ee998 = Sr(_0x427346, _0x5ecc0f, _0xe27987, _0x5ca12f);
  if (Math.abs(_0x4ee998) <= K) return null;
  let _0x29696b = _0x88edeb.start["x"] - _0x46572b.start["x"],
    _0x42ad20 = _0x88edeb.start["y"] - _0x46572b.start["y"],
    _0x167948 = Sr(_0x29696b, _0x42ad20, _0xe27987, _0x5ca12f) / _0x4ee998,
    _0x392a4e = Sr(_0x29696b, _0x42ad20, _0x427346, _0x5ecc0f) / _0x4ee998;
  return _0x167948 < 0 || _0x167948 > 1 || _0x392a4e < 0 || _0x392a4e > 1
    ? null
    : {
        x: _0x46572b.start["x"] + _0x167948 * _0x427346,
        y: _0x46572b.start["y"] + _0x167948 * _0x5ecc0f,
      };
}
function Sr(_0x456b32, _0x11c292, _0x44aec2, _0x20d254) {
  return _0x456b32 * _0x20d254 - _0x11c292 * _0x44aec2;
}
function Cr(_0x364f60, _0x45ccd7) {
  let _0x1a6be8 = _0x45ccd7.end["x"] - _0x45ccd7.start["x"],
    _0x501a37 = _0x45ccd7.end["y"] - _0x45ccd7.start["y"],
    _0x56997b = _0x1a6be8 * _0x1a6be8 + _0x501a37 * _0x501a37;
  if (_0x56997b <= K)
    return Math.hypot(
      _0x364f60.x - _0x45ccd7.start["x"],
      _0x364f60.y - _0x45ccd7.start["y"],
    );
  let _0x2bf1ba = Math.max(
      0,
      Math.min(
        1,
        ((_0x364f60.x - _0x45ccd7.start["x"]) * _0x1a6be8 +
          (_0x364f60.y - _0x45ccd7.start["y"]) * _0x501a37) /
          _0x56997b,
      ),
    ),
    _0x5c2906 = {
      x: _0x45ccd7.start["x"] + _0x2bf1ba * _0x1a6be8,
      y: _0x45ccd7.start["y"] + _0x2bf1ba * _0x501a37,
    };
  return Math.hypot(_0x364f60.x - _0x5c2906.x, _0x364f60.y - _0x5c2906.y);
}
function wr(_0x1cfec6, _0x446c42) {
  let _0xd1a12 = _0x446c42.left + _0x446c42.width,
    _0x1834e3 = _0x446c42.top + _0x446c42.height,
    _0x11f897 =
      _0x1cfec6.x < _0x446c42.left
        ? _0x446c42.left - _0x1cfec6.x
        : _0x1cfec6.x > _0xd1a12
          ? _0x1cfec6.x - _0xd1a12
          : 0,
    _0x5bcdda =
      _0x1cfec6.y < _0x446c42.top
        ? _0x446c42.top - _0x1cfec6.y
        : _0x1cfec6.y > _0x1834e3
          ? _0x1cfec6.y - _0x1834e3
          : 0;
  return _0x11f897 > 0 || _0x5bcdda > 0
    ? Math.hypot(_0x11f897, _0x5bcdda)
    : Math.min(
        Math.abs(_0x1cfec6.x - _0x446c42.left),
        Math.abs(_0x1cfec6.x - _0xd1a12),
        Math.abs(_0x1cfec6.y - _0x446c42.top),
        Math.abs(_0x1cfec6.y - _0x1834e3),
      );
}
function Tr(_0x24b55b, _0x2dcf43, _0x17388e) {
  let _0x5d7652 = [_0x2dcf43[0], _0x2dcf43[_0x2dcf43.length - 1]],
    _0x1c87ae = [_0x17388e[0], _0x17388e[_0x17388e.length - 1]];
  return (
    _0x5d7652.some((_0x43d140) => Er(_0x43d140, _0x24b55b)) &&
    _0x1c87ae.some((_0x5f0f6e) => Er(_0x5f0f6e, _0x24b55b))
  );
}
function Er(_0x42c6f4, _0xa13564) {
  return (
    Math.abs(_0x42c6f4.x - _0xa13564.x) <= K &&
    Math.abs(_0x42c6f4.y - _0xa13564.y) <= K
  );
}
function Dr(_0x5579a5, _0x346ad4) {
  let _0x126c59 = Math.max(_0x5579a5.left, _0x346ad4.left),
    _0x538bb5 = Math.max(_0x5579a5.top, _0x346ad4.top),
    _0x1c46a2 = Math.min(
      _0x5579a5.left + _0x5579a5.width,
      _0x346ad4.left + _0x346ad4.width,
    ),
    _0x30d0cb = Math.min(
      _0x5579a5.top + _0x5579a5.height,
      _0x346ad4.top + _0x346ad4.height,
    );
  return _0x1c46a2 - _0x126c59 <= K || _0x30d0cb - _0x538bb5 <= K
    ? null
    : {
        left: _0x126c59,
        top: _0x538bb5,
        width: _0x1c46a2 - _0x126c59,
        height: _0x30d0cb - _0x538bb5,
      };
}
function Or(_0x268e02) {
  if (_0x268e02.length === 0) return null;
  let _0x3f4089 = Math.min(..._0x268e02.map((_0x587a8b) => _0x587a8b.left)),
    _0x1663b6 = Math.min(..._0x268e02.map((_0x35d7e2) => _0x35d7e2.top)),
    _0x1da8a6 = Math.max(
      ..._0x268e02.map((_0x4558d3) => _0x4558d3.left + _0x4558d3.width),
    ),
    _0x3d5495 = Math.max(
      ..._0x268e02.map((_0x379db9) => _0x379db9.top + _0x379db9.height),
    );
  return {
    left: _0x3f4089,
    top: _0x1663b6,
    width: _0x1da8a6 - _0x3f4089,
    height: _0x3d5495 - _0x1663b6,
  };
}
function kr(_0x1f19c4, _0x582c3b) {
  return {
    left: Math.min(_0x1f19c4.x, _0x582c3b.x),
    top: Math.min(_0x1f19c4.y, _0x582c3b.y),
    width: Math.abs(_0x582c3b.x - _0x1f19c4.x),
    height: Math.abs(_0x582c3b.y - _0x1f19c4.y),
  };
}
function Ar(_0x4998cb) {
  return { left: _0x4998cb.x, top: _0x4998cb.y, width: 0, height: 0 };
}
function jr(_0x16aa73, _0x24ea03) {
  return {
    left: _0x16aa73.left - _0x24ea03,
    top: _0x16aa73.top - _0x24ea03,
    width: _0x16aa73.width + _0x24ea03 * 2,
    height: _0x16aa73.height + _0x24ea03 * 2,
  };
}
function Mr(_0x109745, _0x195c71, _0x2bde50) {
  let _0x45db4d = [
      ..._0x109745.flatMap((_0x5dc9a8, _0x42cc59) =>
        Pr(_0x5dc9a8.bounds, "left", _0x42cc59),
      ),
      ..._0x195c71.flatMap((_0x6ad500, _0x479334) =>
        Pr(_0x6ad500.bounds, "right", _0x479334),
      ),
    ].sort(Fr),
    _0x574c0c = new Map(),
    _0x296669 = new Map();
  for (let _0x204c5d of _0x45db4d) {
    if (_0x204c5d.kind === "end") {
      _0x204c5d.side === "left"
        ? _0x574c0c.delete(_0x204c5d.index)
        : _0x296669.delete(_0x204c5d.index);
      continue;
    }
    if (_0x204c5d.side === "left") {
      let _0x5ccf39 = _0x109745[_0x204c5d.index];
      for (let _0x2691dd of _0x296669.values())
        Ir(_0x5ccf39.bounds, _0x2691dd.bounds) &&
          _0x2bde50(_0x5ccf39, _0x2691dd);
      _0x574c0c.set(_0x204c5d.index, _0x5ccf39);
    } else {
      let _0x59934b = _0x195c71[_0x204c5d.index];
      for (let _0x2dda07 of _0x574c0c.values())
        Ir(_0x2dda07.bounds, _0x59934b.bounds) &&
          _0x2bde50(_0x2dda07, _0x59934b);
      _0x296669.set(_0x204c5d.index, _0x59934b);
    }
  }
}
function Nr(_0x5e56e3, _0x3e27e5) {
  let _0x5afd39 = _0x5e56e3
      .flatMap((_0x1eb143, _0x17d18a) =>
        Pr(_0x1eb143.bounds, "left", _0x17d18a),
      )
      .sort(Fr),
    _0x1b0fd6 = new Map();
  for (let _0x596320 of _0x5afd39) {
    if (_0x596320.kind === "end") {
      _0x1b0fd6.delete(_0x596320.index);
      continue;
    }
    let _0x3fbf2c = _0x5e56e3[_0x596320.index];
    for (let _0x572295 of _0x1b0fd6.values())
      Ir(_0x3fbf2c.bounds, _0x572295.bounds) && _0x3e27e5(_0x572295, _0x3fbf2c);
    _0x1b0fd6.set(_0x596320.index, _0x3fbf2c);
  }
}
function Pr(_0x3f987d, _0x37b867, _0x5cd721) {
  return [
    { x: _0x3f987d.left, kind: "start", side: _0x37b867, index: _0x5cd721 },
    {
      x: _0x3f987d.left + _0x3f987d.width,
      kind: "end",
      side: _0x37b867,
      index: _0x5cd721,
    },
  ];
}
function Fr(_0x5d7204, _0x42b7dc) {
  return _0x5d7204.x === _0x42b7dc.x
    ? _0x5d7204.kind === _0x42b7dc.kind
      ? _0x5d7204.side === _0x42b7dc.side
        ? _0x5d7204.index - _0x42b7dc.index
        : _0x5d7204.side === "left"
          ? -1
          : 1
      : _0x5d7204.kind === "start"
        ? -1
        : 1
    : _0x5d7204.x - _0x42b7dc.x;
}
function Ir(_0x4e1afc, _0x462183) {
  return (
    _0x4e1afc.top <= _0x462183.top + _0x462183.height + K &&
    _0x462183.top <= _0x4e1afc.top + _0x4e1afc.height + K
  );
}
function Lr(_0x44888f) {
  let _0x2f4dfd = [..._0x44888f.connectorIds, ..._0x44888f.elementIds].join(
      ":",
    ),
    _0x55fef3 = _0x44888f.endpoint ? ":" + _0x44888f.endpoint : "";
  return {
    id:
      _0x44888f.rule +
      ":" +
      _0x2f4dfd +
      _0x55fef3 +
      ":" +
      zr(_0x44888f.bounds["left"]) +
      ":" +
      zr(_0x44888f.bounds["top"]),
    rule: _0x44888f.rule,
    severity: _0x44888f.severity,
    elementIds: [..._0x44888f.elementIds],
    connectorIds: [..._0x44888f.connectorIds],
    bounds: { ..._0x44888f.bounds },
    focusBounds: Rr(_0x44888f.bounds, _0x44888f.focusPadding),
    ...(_0x44888f.routePoints
      ? {
          routePoints: _0x44888f.routePoints["map"]((_0x18a295) => ({
            ..._0x18a295,
          })),
        }
      : {}),
    ...(_0x44888f.endpoint ? { endpoint: _0x44888f.endpoint } : {}),
    ...(_0x44888f.suggestedAction
      ? { suggestedAction: _0x44888f.suggestedAction }
      : {}),
  };
}
function Rr(_0x609f67, _0x399e02) {
  let _0x806ee4 = Math.max(_0x609f67.width + _0x399e02 * 2, 96),
    _0x55d223 = Math.max(_0x609f67.height + _0x399e02 * 2, 96),
    _0x3fb911 = _0x609f67.left + _0x609f67.width / 2,
    _0x1beb60 = _0x609f67.top + _0x609f67.height / 2;
  return {
    left: _0x3fb911 - _0x806ee4 / 2,
    top: _0x1beb60 - _0x55d223 / 2,
    width: _0x806ee4,
    height: _0x55d223,
  };
}
function zr(_0x2f2b2f) {
  return Number(_0x2f2b2f.toFixed(3)).toString();
}
function Br(_0x435e2c, _0x5137e9) {
  let _0xf5b5e1 = _0x435e2c.severity["localeCompare"](_0x5137e9.severity);
  if (_0xf5b5e1 !== 0) return _0xf5b5e1;
  let _0x3f0148 = _0x435e2c.rule["localeCompare"](_0x5137e9.rule);
  return _0x3f0148 === 0
    ? _0x435e2c.id["localeCompare"](_0x5137e9.id)
    : _0x3f0148;
}
function Vr(_0x5d7089) {
  let _0x736c6 = new Map();
  for (let _0x1a5017 of _0x5d7089)
    _0x736c6.has(_0x1a5017.id) || _0x736c6.set(_0x1a5017.id, _0x1a5017);
  return Array.from(_0x736c6.values());
}
function Hr(_0x481446) {
  let _0x4124c7 = new Set(
    _0x481446
      .filter(
        (_0x37981f) =>
          _0x37981f.rule === "connector-free-endpoint-near-dashed-connector",
      )
      .map((_0x458cfb) => Ur(_0x458cfb)),
  );
  return _0x481446.filter(
    (_0x28bbb0) =>
      _0x28bbb0.rule !== "connector-crossing" || !_0x4124c7.has(Ur(_0x28bbb0)),
  );
}
function Ur(_0x9bc502) {
  return (
    [..._0x9bc502.connectorIds].sort().join(":") +
    ":" +
    zr(_0x9bc502.bounds["left"]) +
    ":" +
    zr(_0x9bc502.bounds["top"])
  );
}
const Wr = {
    id: "board.command.analyze-model-layout",
    type: _0x3c65b3.COMMAND,
    handler: (_0x458111, _0x5bef3e) => {
      if (!(_0x5bef3e != null && _0x5bef3e.unitId) || !_0x5bef3e.subUnitId)
        return false;
      let _0x20d4ca = _0x458111.get(L);
      return Zn(
        _0x20d4ca.getElementData(_0x5bef3e.unitId, _0x5bef3e.subUnitId),
        _0x20d4ca.getElementOrder(_0x5bef3e.unitId, _0x5bef3e.subUnitId),
        { source: "model", focusPadding: _0x5bef3e.focusPadding },
      );
    },
  },
  Gr = _0x127a62("board.chart-adapter.service");
var Kr = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x43e065) {
    return (
      this._adapters["push"](_0x43e065),
      _0x4c56f0(() => {
        let _0x520494 = this._adapters["indexOf"](_0x43e065);
        _0x520494 >= 0 && this._adapters["splice"](_0x520494, 1);
      })
    );
  }
  getInsertChartMutationInfos(_0x3cdb28) {
    for (let _0x41c778 of this._adapters) {
      let _0x1e90cb = _0x41c778.getInsertChartMutationInfos(_0x3cdb28);
      if (_0x1e90cb) return _0x1e90cb;
    }
    return null;
  }
  getRemoveChartMutationInfos(_0x14fb92) {
    let _0x3b94e2 = { redoMutations: [], undoMutations: [] };
    for (let _0x336da6 of this._adapters) {
      var _0x39dc29;
      let _0x498247 =
        (_0x39dc29 = _0x336da6.getRemoveChartMutationInfos) == null
          ? undefined
          : _0x39dc29.call(_0x336da6, _0x14fb92);
      _0x498247 &&
        (_0x3b94e2.redoMutations["push"](..._0x498247.redoMutations),
        _0x3b94e2.undoMutations["push"](..._0x498247.undoMutations));
    }
    return _0x3b94e2;
  }
};
const qr = {
  id: "board.command.insert-chart",
  type: _0x3c65b3.COMMAND,
  handler: (_0x433133, _0x456b2a) => {
    if (!_0x456b2a) return false;
    let _0x3450a7 = _0x433133.get(Gr).getInsertChartMutationInfos(_0x456b2a);
    if (!_0x3450a7 || _0x3450a7.redoMutations["length"] === 0) return false;
    let _0x1b41dc = _0x1c1693(
      _0x3450a7.redoMutations,
      _0x433133.get(_0x3243d1),
    );
    return _0x1b41dc.result
      ? (_0x433133
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x456b2a.unitId,
            redoMutations: _0x3450a7.redoMutations,
            undoMutations: _0x3450a7.undoMutations,
          }),
        true)
      : (Jr(
          _0x3450a7.rollbackMutationGroups["slice"](
            0,
            _0x1b41dc.index,
          ).reverse(),
          _0x433133.get(_0x3243d1),
        ),
        false);
  },
};
function Jr(_0x4a0d30, _0x66e329) {
  _0x4a0d30.forEach((_0x44679f) => {
    _0x1c1693(_0x44679f, _0x66e329);
  });
}
function Yr(_0x2db561, _0x43fa0d) {
  return _0x2db561.kind === "free"
    ? {
        ..._0x2db561,
        x: _0x2db561.x + _0x43fa0d.x,
        y: _0x2db561.y + _0x43fa0d.y,
      }
    : _0x2db561.fallbackPoint
      ? {
          ..._0x2db561,
          fallbackPoint: {
            x: _0x2db561.fallbackPoint["x"] + _0x43fa0d.x,
            y: _0x2db561.fallbackPoint["y"] + _0x43fa0d.y,
          },
        }
      : _0x2db561;
}
function Xr(_0x300dde, _0xb4a74f) {
  return _0x300dde.kind === "free"
    ? {
        ..._0x300dde,
        x: _0x300dde.x + _0xb4a74f.x,
        y: _0x300dde.y + _0xb4a74f.y,
      }
    : _0x300dde;
}
function Zr(_0x275c99, _0x41351c) {
  return _0x275c99.kind === "manual"
    ? {
        ..._0x275c99,
        x: _0x275c99.x + _0x41351c.x,
        y: _0x275c99.y + _0x41351c.y,
      }
    : _0x275c99;
}
function Qr(_0xc34c1b, _0x5b233e, _0x255073) {
  return _0xc34c1b.kind === "manual"
    ? {
        ..._0xc34c1b,
        x: _0xc34c1b.x + _0x5b233e.x,
        y: _0xc34c1b.y + _0x5b233e.y,
        ...(_0xc34c1b.endpoint
          ? { endpoint: _0x255073(_0xc34c1b.endpoint, _0x5b233e) }
          : null),
      }
    : _0xc34c1b;
}
function $r(_0x3b56d8, _0x58ede3) {
  return _0x3b56d8.kind === "manual"
    ? {
        ..._0x3b56d8,
        x: _0x3b56d8.x + _0x58ede3.x,
        y: _0x3b56d8.y + _0x58ede3.y,
      }
    : _0x3b56d8;
}
function ei(_0x377176, _0x465425, _0x277182) {
  var _0x65db62, _0xbc3b58;
  let _0xdfbe0f = _0x377176.connectorData["curveData"];
  return (
    _0xdfbe0f && {
      ..._0xdfbe0f,
      anchors:
        (_0x65db62 = _0xdfbe0f.anchors) == null
          ? undefined
          : _0x65db62.map((_0x20c403) => Qr(_0x20c403, _0x465425, _0x277182)),
      controls:
        (_0xbc3b58 = _0xdfbe0f.controls) == null
          ? undefined
          : _0xbc3b58.map((_0x3022fd) => $r(_0x3022fd, _0x465425)),
    }
  );
}
function ti(_0x29f9b7, _0x768f7f) {
  let _0x520aa0 = _0x29f9b7.connectorData["orthogonalData"];
  return _0x520aa0 != null && _0x520aa0.routePoints
    ? {
        ..._0x520aa0,
        routePoints: _0x520aa0.routePoints["map"]((_0x217780) =>
          Zr(_0x217780, _0x768f7f),
        ),
      }
    : _0x520aa0;
}
function ni(_0x134e2b, _0x4d0a23) {
  var _0x5f4e61;
  let _0x470624 = ti(_0x134e2b, _0x4d0a23),
    _0x15a810 = ei(_0x134e2b, _0x4d0a23, Yr),
    _0x318b73 = {
      ..._0x134e2b.connectorData,
      start: Yr(_0x134e2b.connectorData["start"], _0x4d0a23),
      end: Yr(_0x134e2b.connectorData["end"], _0x4d0a23),
      waypoints:
        (_0x5f4e61 = _0x134e2b.connectorData["waypoints"]) == null
          ? undefined
          : _0x5f4e61.map((_0x158d7e) => Zr(_0x158d7e, _0x4d0a23)),
    };
  return (
    _0x470624
      ? (_0x318b73.orthogonalData = _0x470624)
      : delete _0x318b73.orthogonalData,
    _0x15a810 ? (_0x318b73.curveData = _0x15a810) : delete _0x318b73.curveData,
    { ..._0x134e2b, connectorData: _0x318b73 }
  );
}
function ri(_0x4526bf, _0x77bc05) {
  var _0x2608fc;
  let _0x5f0ef1 = ti(_0x4526bf, _0x77bc05),
    _0x3083df = ei(_0x4526bf, _0x77bc05, Xr),
    _0x4eab73 = {
      ..._0x4526bf.connectorData,
      start: Xr(_0x4526bf.connectorData["start"], _0x77bc05),
      end: Xr(_0x4526bf.connectorData["end"], _0x77bc05),
      waypoints:
        (_0x2608fc = _0x4526bf.connectorData["waypoints"]) == null
          ? undefined
          : _0x2608fc.map((_0x26d230) => Zr(_0x26d230, _0x77bc05)),
    };
  return (
    _0x5f0ef1
      ? (_0x4eab73.orthogonalData = _0x5f0ef1)
      : delete _0x4eab73.orthogonalData,
    _0x3083df ? (_0x4eab73.curveData = _0x3083df) : delete _0x4eab73.curveData,
    { ..._0x4526bf, connectorData: _0x4eab73 }
  );
}
function ii(_0x53a359, _0x389215, _0x207c49) {
  return _0x53a359.kind === "free" ||
    !_0x389215.has(_0x53a359.shapeId) ||
    !_0x53a359.fallbackPoint
    ? _0x53a359
    : {
        ..._0x53a359,
        fallbackPoint: {
          x: _0x53a359.fallbackPoint["x"] + _0x207c49.x,
          y: _0x53a359.fallbackPoint["y"] + _0x207c49.y,
        },
      };
}
function ai(_0x54f881, _0x54bec5) {
  var _0x117440;
  let _0x11b443 =
    (_0x117440 = H(_0x54bec5, _0x54f881.shapeId)) == null
      ? undefined
      : _0x117440.worldTransform;
  if (!_0x11b443)
    return _0x54f881.fallbackPoint ? { ..._0x54f881.fallbackPoint } : null;
  let _0xe4e1d3 = _0x11b443.left ?? 0,
    _0x38614a = _0x11b443.top ?? 0,
    _0x117c7b = _0x11b443.width ?? 0,
    _0x5bc68e = _0x11b443.height ?? 0,
    _0x91b694 = Math.max(0, Math.min(1, _0x54f881.segmentT));
  switch (((_0x54f881.segmentIndex % 4) + 4) % 4) {
    case 0:
      return { x: _0xe4e1d3 + _0x117c7b * _0x91b694, y: _0x38614a };
    case 1:
      return { x: _0xe4e1d3 + _0x117c7b, y: _0x38614a + _0x5bc68e * _0x91b694 };
    case 2:
      return {
        x: _0xe4e1d3 + _0x117c7b * (1 - _0x91b694),
        y: _0x38614a + _0x5bc68e,
      };
    default:
      return { x: _0xe4e1d3, y: _0x38614a + _0x5bc68e * (1 - _0x91b694) };
  }
}
function oi(_0x742f23, _0x2875ed) {
  var _0x4d463c;
  let _0x2f3cef =
    (_0x4d463c = H(_0x2875ed, _0x742f23.shapeId)) == null
      ? undefined
      : _0x4d463c.worldTransform;
  if (!_0x2f3cef)
    return _0x742f23.fallbackPoint ? { ..._0x742f23.fallbackPoint } : null;
  let _0x24145a = _0x2f3cef.left ?? 0,
    _0x3f1c8e = _0x2f3cef.top ?? 0,
    _0x1c2b15 = _0x2f3cef.width ?? 0,
    _0x4da2c6 = _0x2f3cef.height ?? 0,
    _0xdc4940 = _0x742f23.connectionPosition ?? 0.5;
  switch (((_0x742f23.connectionSiteId % 4) + 4) % 4) {
    case 0:
      return { x: _0x24145a + _0x1c2b15 * _0xdc4940, y: _0x3f1c8e };
    case 1:
      return { x: _0x24145a + _0x1c2b15, y: _0x3f1c8e + _0x4da2c6 * _0xdc4940 };
    case 2:
      return { x: _0x24145a + _0x1c2b15 * _0xdc4940, y: _0x3f1c8e + _0x4da2c6 };
    default:
      return { x: _0x24145a, y: _0x3f1c8e + _0x4da2c6 * _0xdc4940 };
  }
}
function si(_0x50c24f, _0x30ebb6, _0x5334ef) {
  var _0x172e14;
  if (
    (_0x50c24f.kind !== "shapeBoundary" && _0x50c24f.kind !== "shapeSite") ||
    !_0x30ebb6.has(_0x50c24f.shapeId)
  )
    return _0x50c24f;
  let _0x3860fc =
    _0x50c24f.kind === "shapeBoundary"
      ? ai(_0x50c24f, _0x5334ef)
      : oi(_0x50c24f, _0x5334ef);
  return !_0x3860fc ||
    (((_0x172e14 = _0x50c24f.fallbackPoint) == null
      ? undefined
      : _0x172e14.x) === _0x3860fc.x &&
      _0x50c24f.fallbackPoint["y"] === _0x3860fc.y)
    ? _0x50c24f
    : { ..._0x50c24f, fallbackPoint: _0x3860fc };
}
function ci(_0x791b79) {
  return _0x791b79.kind === "free"
    ? { x: _0x791b79.x, y: _0x791b79.y }
    : _0x791b79.fallbackPoint
      ? { ..._0x791b79.fallbackPoint }
      : null;
}
function li(_0x48ff33) {
  var _0x1772df, _0x252c67, _0x50a211;
  let _0x120e5a = [
    ci(_0x48ff33.connectorData["start"]),
    ...(_0x48ff33.connectorData["waypoints"] ?? [])
      .filter((_0x58c070) => _0x58c070.kind === "manual")
      .map((_0x15ec10) => ({ x: _0x15ec10.x, y: _0x15ec10.y })),
    ...(
      ((_0x1772df = _0x48ff33.connectorData["orthogonalData"]) == null
        ? undefined
        : _0x1772df.routePoints) ?? []
    )
      .filter((_0x521b02) => _0x521b02.kind === "manual")
      .map((_0x6b1535) => ({ x: _0x6b1535.x, y: _0x6b1535.y })),
    ...(
      ((_0x252c67 = _0x48ff33.connectorData["curveData"]) == null
        ? undefined
        : _0x252c67.anchors) ?? []
    )
      .filter((_0x50bb95) => _0x50bb95.kind === "manual")
      .map((_0x30d49f) => ({ x: _0x30d49f.x, y: _0x30d49f.y })),
    ...(
      ((_0x50a211 = _0x48ff33.connectorData["curveData"]) == null
        ? undefined
        : _0x50a211.controls) ?? []
    )
      .filter((_0x19d131) => _0x19d131.kind === "manual")
      .map((_0x100085) => ({ x: _0x100085.x, y: _0x100085.y })),
    ci(_0x48ff33.connectorData["end"]),
  ].filter((_0x4b41d5) => !!_0x4b41d5);
  if (_0x120e5a.length === 0) return _0x48ff33.transform;
  let _0x3ff116 = Math.min(..._0x120e5a.map((_0x452b54) => _0x452b54.x)),
    _0x4e1c7c = Math.min(..._0x120e5a.map((_0x5f35c3) => _0x5f35c3.y)),
    _0x2548bb = Math.max(..._0x120e5a.map((_0x298d14) => _0x298d14.x)),
    _0x50dfc3 = Math.max(..._0x120e5a.map((_0x4cbda3) => _0x4cbda3.y));
  return {
    ..._0x48ff33.transform,
    left: _0x3ff116,
    top: _0x4e1c7c,
    width: Math.max(1, _0x2548bb - _0x3ff116),
    height: Math.max(1, _0x50dfc3 - _0x4e1c7c),
    rotation: 0,
  };
}
function ui(_0xf02477, _0x254e6a, _0x1e7a04) {
  let _0x185ff8 = {
    ..._0xf02477,
    connectorData: {
      ..._0xf02477.connectorData,
      start: ii(_0xf02477.connectorData["start"], _0x254e6a, _0x1e7a04),
      end: ii(_0xf02477.connectorData["end"], _0x254e6a, _0x1e7a04),
    },
  };
  return _0x185ff8.connectorData["start"] ===
    _0xf02477.connectorData["start"] &&
    _0x185ff8.connectorData["end"] === _0xf02477.connectorData["end"]
    ? _0xf02477
    : { ..._0x185ff8, transform: li(_0x185ff8) };
}
function di(_0x2504ba, _0x490720, _0x4d7dee) {
  let _0x4f5b5b = {
    ..._0x2504ba,
    connectorData: {
      ..._0x2504ba.connectorData,
      start: si(_0x2504ba.connectorData["start"], _0x490720, _0x4d7dee),
      end: si(_0x2504ba.connectorData["end"], _0x490720, _0x4d7dee),
    },
  };
  return _0x4f5b5b.connectorData["start"] ===
    _0x2504ba.connectorData["start"] &&
    _0x4f5b5b.connectorData["end"] === _0x2504ba.connectorData["end"]
    ? _0x2504ba
    : { ..._0x4f5b5b, transform: li(_0x4f5b5b) };
}
function fi(_0x1966f7) {
  return {
    left: _0x1966f7.left ?? 0,
    top: _0x1966f7.top ?? 0,
    width: _0x1966f7.width ?? 0,
    height: _0x1966f7.height ?? 0,
    angle: _0x1966f7.rotation ?? 0,
    flipX: _0x1966f7.flipX,
    flipY: _0x1966f7.flipY,
  };
}
function pi(_0x4a9c17) {
  return _0x4a9c17.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
}
function mi(_0x284352) {
  let _0x57a903 = pi(_0x284352.text).split("\x0a"),
    _0x1f6ff3 = _0x57a903.join("\x0d") + "\x0d\x0a",
    _0x19dcf3 = Math.max(0, _0x1f6ff3.length - 2),
    _0x476045 = new Set(),
    _0x2d1ff5 = 0,
    _0x5a123e = _0x57a903.map((_0x186358) => {
      let _0x1a14be = _0x2d1ff5 + _0x186358.length;
      return (
        (_0x2d1ff5 += _0x186358.length + 1),
        {
          startIndex: _0x1a14be,
          paragraphId: _0x189ee7(_0x476045),
          paragraphStyle: {
            horizontalAlign: _0x284352.horizontalAlign,
            lineSpacing: 1,
            snapToGrid: _0x2a6303.FALSE,
            spaceAbove: { v: 0 },
            spaceBelow: { v: 0 },
          },
        }
      );
    });
  return {
    id: _0x284352.id ?? "board-shape-text",
    body: {
      dataStream: _0x1f6ff3,
      paragraphs: _0x5a123e,
      sectionBreaks: [
        {
          sectionId: _0x4850f5(new Set()),
          startIndex: Math.max(0, _0x1f6ff3.length - 1),
          gridType: _0x5c3f69.DEFAULT,
          renderConfig: {
            shapeTextOpticalVerticalAlign: _0x2a6303.FALSE,
            verticalAlign: _0x284352.verticalAlign,
            wrapStrategy: _0x284352.wrapStrategy,
            zeroWidthParagraphBreak: _0x2a6303.TRUE,
          },
        },
      ],
      textRuns: _0x284352.textStyle
        ? [
            {
              st: 0,
              ed: Math.max(1, _0x19dcf3),
              ts: { ..._0x284352.textStyle },
            },
          ]
        : [],
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: { height: 1 / 0, width: 1 / 0 },
      renderConfig: {
        horizontalAlign: _0x284352.horizontalAlign,
        verticalAlign: _0x284352.verticalAlign,
        wrapStrategy: _0x284352.wrapStrategy,
        zeroWidthParagraphBreak: _0x2a6303.TRUE,
      },
      ...(_0x284352.textStyle
        ? { textStyle: { ..._0x284352.textStyle } }
        : null),
    },
  };
}
function q(_0x17a758) {
  return _0x17a758.left + _0x17a758.width;
}
function J(_0x5d0acf) {
  return _0x5d0acf.top + _0x5d0acf.height;
}
function hi(_0x258a2, _0x112f07) {
  return {
    left: _0x258a2.left - _0x112f07,
    top: _0x258a2.top - _0x112f07,
    width: _0x258a2.width + _0x112f07 * 2,
    height: _0x258a2.height + _0x112f07 * 2,
  };
}
function gi(_0x1d9f7c, _0x2c8e6b) {
  return (
    _0x2c8e6b.left >= _0x1d9f7c.left &&
    _0x2c8e6b.top >= _0x1d9f7c.top &&
    q(_0x2c8e6b) <= q(_0x1d9f7c) &&
    J(_0x2c8e6b) <= J(_0x1d9f7c)
  );
}
function _i(_0x58d1e6) {
  return (
    _0x58d1e6.containerData["kind"] === "swimlane" &&
    !!_0x58d1e6.containerData["swimlane"]
  );
}
function vi(_0x52c577, _0x692a53) {
  return (
    _0x52c577.left < q(_0x692a53) &&
    q(_0x52c577) > _0x692a53.left &&
    _0x52c577.top < J(_0x692a53) &&
    J(_0x52c577) > _0x692a53.top
  );
}
function yi(_0x24ed86) {
  if (_0x24ed86.length === 0) return null;
  let _0x5115d3 = Math.min(..._0x24ed86.map((_0x128b64) => _0x128b64.left)),
    _0x391693 = Math.min(..._0x24ed86.map((_0x5bdbaf) => _0x5bdbaf.top)),
    _0x13eae6 = Math.max(..._0x24ed86.map(q)),
    _0x3f5d16 = Math.max(..._0x24ed86.map(J));
  return {
    left: _0x5115d3,
    top: _0x391693,
    width: _0x13eae6 - _0x5115d3,
    height: _0x3f5d16 - _0x391693,
  };
}
function bi(_0x498d91, _0x49d0c2) {
  let { containerData: _0x442267 } = _0x498d91,
    _0x199295 =
      _0x442267.titleVisible === false ? 0 : (_0x442267.headerSize ?? 0),
    _0x27efe7 = _i(_0x498d91)
      ? { top: 0, right: 0, bottom: 0, left: 0 }
      : _0x442267.padding,
    _0x1a5cca = {
      left: _0x49d0c2.left + _0x27efe7.left,
      top: _0x49d0c2.top + _0x199295 + _0x27efe7.top,
      width: Math.max(0, _0x49d0c2.width - _0x27efe7.left - _0x27efe7.right),
      height: Math.max(
        0,
        _0x49d0c2.height - _0x199295 - _0x27efe7.top - _0x27efe7.bottom,
      ),
    },
    _0x7b2584 = _0x442267.capturePolicy["expelHysteresis"] ?? 0;
  return {
    outerBounds: _0x49d0c2,
    headerBounds:
      _0x199295 > 0
        ? {
            left: _0x49d0c2.left,
            top: _0x49d0c2.top,
            width: _0x49d0c2.width,
            height: _0x199295,
          }
        : null,
    contentBounds: _0x1a5cca,
    expandedContentBounds: hi(_0x1a5cca, _0x7b2584),
  };
}
function xi(_0xfe25db, _0x348679, _0x512272) {
  let _0x296e8e = _i(_0xfe25db)
      ? { top: 0, right: 0, bottom: 0, left: 0 }
      : _0xfe25db.containerData["padding"],
    _0xae851b =
      _0xfe25db.containerData["titleVisible"] === false
        ? 0
        : (_0xfe25db.containerData["headerSize"] ?? 0),
    _0x3cede9 = Math.min(_0x348679.left, _0x512272.left - _0x296e8e.left),
    _0x1a86c5 = Math.min(
      _0x348679.top,
      _0x512272.top - _0xae851b - _0x296e8e.top,
    ),
    _0x56ee49 = Math.max(q(_0x348679), q(_0x512272) + _0x296e8e.right),
    _0xa075c2 = Math.max(J(_0x348679), J(_0x512272) + _0x296e8e.bottom);
  return {
    left: _0x3cede9,
    top: _0x1a86c5,
    width: _0x56ee49 - _0x3cede9,
    height: _0xa075c2 - _0x1a86c5,
  };
}
function Si(_0x1f3241) {
  return _0x1f3241 === "horizontal" ? "horizontal" : "vertical";
}
function Ci(_0x90754, _0x22a387, _0xb87de9) {
  return Object.values(_0x90754).some(
    (_0x237164) =>
      _0x237164.element["parentId"] === _0x22a387 &&
      _0x237164.element["laneId"] === _0xb87de9,
  );
}
function wi(_0x333fae) {
  if (
    !_0x333fae ||
    (_0x333fae.orientation !== "horizontal" &&
      _0x333fae.orientation !== "vertical") ||
    (_0x333fae.collapsedLaneSize !== undefined &&
      _0x333fae.collapsedLaneSize < 0)
  )
    return false;
  let _0x3bf8fc = new Set();
  return _0x333fae.lanes["every"]((_0x2ab5d2) =>
    !_0x2ab5d2.id ||
    _0x3bf8fc.has(_0x2ab5d2.id) ||
    _0x2ab5d2.size < 0 ||
    (_0x2ab5d2.minSize !== undefined && _0x2ab5d2.minSize < 0)
      ? false
      : (_0x3bf8fc.add(_0x2ab5d2.id), true),
  );
}
function Ti(_0x128160) {
  return {
    ..._0x128160,
    orientation: Si(_0x128160.orientation),
    laneGap: 0,
    lanes: _0x128160.lanes["map"]((_0x3b84e9) => ({ ..._0x3b84e9 })),
  };
}
function Ei(_0x4e6e41) {
  return [..._0x4e6e41.lanes].sort(
    (_0x426e90, _0x37991b) => _0x426e90.order - _0x37991b.order,
  );
}
function Di(_0x336143, _0x5b97ef) {
  let _0x120cf8 = 0;
  for (let _0x161c56 of Ei(_0x336143)) {
    if (_0x161c56.id === _0x5b97ef) return _0x120cf8;
    _0x120cf8 += _0x161c56.size;
  }
}
function Oi(_0x390835, _0x478c88) {
  return Math.max(
    0,
    _0x478c88.collapsed === true
      ? (_0x390835.collapsedLaneSize ?? 32)
      : _0x478c88.size,
  );
}
function ki(_0x5aeb20, _0x486cab) {
  let _0x74a55a = new Map(
    _0x486cab.lanes["map"]((_0x4183ba) => [_0x4183ba.id, _0x4183ba]),
  );
  return _0x5aeb20.lanes["some"]((_0x2da171) => {
    if (_0x2da171.locked !== true) return false;
    if (
      _0x486cab.orientation !== _0x5aeb20.orientation ||
      _0x486cab.headerSize !== _0x5aeb20.headerSize ||
      _0x486cab.collapsedLaneSize !== _0x5aeb20.collapsedLaneSize
    )
      return true;
    let _0x2b6750 = _0x74a55a.get(_0x2da171.id),
      _0x10b19e = Di(_0x5aeb20, _0x2da171.id),
      _0x585d34 = Di(_0x486cab, _0x2da171.id);
    return (
      !_0x2b6750 ||
      _0x585d34 !== _0x10b19e ||
      _0x2b6750.title !== _0x2da171.title ||
      _0x2b6750.order !== _0x2da171.order ||
      _0x2b6750.size !== _0x2da171.size ||
      _0x2b6750.minSize !== _0x2da171.minSize ||
      _0x2b6750.locked !== _0x2da171.locked ||
      _0x2b6750.collapsed !== _0x2da171.collapsed
    );
  });
}
function Ai(_0x5b4f08, _0x6ca7aa) {
  return (
    _0x6ca7aa.x >= _0x5b4f08.left &&
    _0x6ca7aa.x <= q(_0x5b4f08) &&
    _0x6ca7aa.y >= _0x5b4f08.top &&
    _0x6ca7aa.y <= J(_0x5b4f08)
  );
}
function ji(_0x517ed5, _0x5676ff) {
  return (
    Math.max(
      0,
      Math.min(q(_0x517ed5), q(_0x5676ff)) -
        Math.max(_0x517ed5.left, _0x5676ff.left),
    ) *
    Math.max(
      0,
      Math.min(J(_0x517ed5), J(_0x5676ff)) -
        Math.max(_0x517ed5.top, _0x5676ff.top),
    )
  );
}
function Mi(_0x202bbb, _0x4cbc2a) {
  let _0x42d593 =
    _0x202bbb.containerData["titleVisible"] === false
      ? 0
      : (_0x202bbb.containerData["headerSize"] ?? 0);
  return {
    left: _0x4cbc2a.left,
    top: _0x4cbc2a.top + _0x42d593,
    width: _0x4cbc2a.width,
    height: Math.max(0, _0x4cbc2a.height - _0x42d593),
  };
}
function Ni(_0x241449, _0xde9f35) {
  let _0x4b593d =
    _0x241449.containerData["kind"] === "swimlane"
      ? _0x241449.containerData["swimlane"]
      : undefined;
  if (!_0x4b593d) return null;
  let _0x232004 = Ti(_0x4b593d),
    _0x1c3001 = Ei(_0x232004);
  if (_0x1c3001.length === 0) return _0x232004;
  let _0x3c627e = Mi(_0x241449, _0xde9f35),
    _0x21b732 =
      (_0x232004.orientation === "horizontal"
        ? _0x3c627e.height
        : _0x3c627e.width) -
      _0x1c3001.reduce(
        (_0x20f58d, _0x2a2f74) => _0x20f58d + Oi(_0x232004, _0x2a2f74),
        0,
      );
  if (Math.abs(_0x21b732) < 0.01) return _0x232004;
  let _0x464f40 = [..._0x1c3001].reverse().find((_0x1a581d) => {
    if (_0x1a581d.locked === true || _0x1a581d.collapsed === true) return false;
    let _0x24a1fd = _0x1c3001.findIndex(
      (_0x1b5323) => _0x1b5323.id === _0x1a581d.id,
    );
    return !_0x1c3001
      .slice(_0x24a1fd + 1)
      .some(
        (_0x5f30f6) =>
          _0x5f30f6.locked === true || _0x5f30f6.collapsed === true,
      );
  });
  if (!_0x464f40) return _0x232004;
  let _0x123360 = Math.max(_0x464f40.minSize ?? 0, _0x464f40.size + _0x21b732);
  return _0x123360 === _0x464f40.size
    ? _0x232004
    : {
        ..._0x232004,
        lanes: _0x232004.lanes["map"]((_0x35bc4c) =>
          _0x35bc4c.id === _0x464f40.id
            ? { ..._0x35bc4c, size: _0x123360 }
            : { ..._0x35bc4c },
        ),
      };
}
function Pi(_0x492e03, _0x5cfa32) {
  return Li(_0x492e03, _0x5cfa32).map(
    ({ lane: _0x576525, bounds: _0x48940c }) => ({
      lane: _0x576525,
      bounds: _0x48940c,
    }),
  );
}
function Fi(_0x363556, _0x565359) {
  let _0x3a08fb = Ni(_0x363556, _0x565359);
  return Pi(
    _0x3a08fb
      ? {
          ..._0x363556,
          containerData: { ..._0x363556.containerData, swimlane: _0x3a08fb },
        }
      : _0x363556,
    _0x565359,
  );
}
function Ii(_0x543177, _0x591482) {
  let _0x2677f4 = Ni(_0x543177, _0x591482);
  return Li(
    _0x2677f4
      ? {
          ..._0x543177,
          containerData: { ..._0x543177.containerData, swimlane: _0x2677f4 },
        }
      : _0x543177,
    _0x591482,
  );
}
function Li(_0x15d497, _0x117673) {
  let _0x56c375 =
    _0x15d497.containerData["kind"] === "swimlane"
      ? _0x15d497.containerData["swimlane"]
      : undefined;
  if (!_0x56c375) return [];
  let _0x1569df = Mi(_0x15d497, _0x117673),
    _0x3dbb2e =
      _0x56c375.orientation === "horizontal" ? _0x1569df.top : _0x1569df.left;
  return Ei(_0x56c375).flatMap((_0x3ede61) => {
    let _0x5a3133 =
        _0x3ede61.collapsed === true
          ? (_0x56c375.collapsedLaneSize ?? 32)
          : _0x3ede61.size,
      _0xa3f0ff = Math.max(0, _0x5a3133),
      _0x3bd3f3 =
        _0x56c375.orientation === "horizontal"
          ? Math.max(0, J(_0x1569df) - _0x3dbb2e)
          : Math.max(0, q(_0x1569df) - _0x3dbb2e),
      _0x452d64 = Math.min(_0xa3f0ff, _0x3bd3f3),
      _0x4b1fad =
        _0x56c375.orientation === "horizontal"
          ? {
              left: _0x1569df.left,
              top: _0x3dbb2e,
              width: _0x1569df.width,
              height: _0x452d64,
            }
          : {
              left: _0x3dbb2e,
              top: _0x1569df.top,
              width: _0x452d64,
              height: _0x1569df.height,
            };
    if (((_0x3dbb2e += _0x452d64 + 0), _0x452d64 <= 0)) return [];
    let _0x2af40c = Math.max(0, _0x56c375.headerSize ?? 0),
      _0x5780f5 =
        _0x2af40c > 0
          ? _0x56c375.orientation === "horizontal"
            ? {
                left: _0x4b1fad.left,
                top: _0x4b1fad.top,
                width: Math.min(_0x2af40c, _0x4b1fad.width),
                height: _0x4b1fad.height,
              }
            : {
                left: _0x4b1fad.left,
                top: _0x4b1fad.top,
                width: _0x4b1fad.width,
                height: Math.min(_0x2af40c, _0x4b1fad.height),
              }
          : null;
    return [
      {
        lane: _0x3ede61,
        bounds: _0x4b1fad,
        headerBounds: _0x5780f5,
        contentBounds: _0x5780f5
          ? _0x56c375.orientation === "horizontal"
            ? {
                left: _0x5780f5.left + _0x5780f5.width,
                top: _0x4b1fad.top,
                width: Math.max(0, _0x4b1fad.width - _0x5780f5.width),
                height: _0x4b1fad.height,
              }
            : {
                left: _0x4b1fad.left,
                top: _0x5780f5.top + _0x5780f5.height,
                width: _0x4b1fad.width,
                height: Math.max(0, _0x4b1fad.height - _0x5780f5.height),
              }
          : _0x4b1fad,
      },
    ];
  });
}
function Ri(_0x3dd224, _0x317274, _0x360377) {
  return (
    Pi(_0x3dd224, _0x317274).find(({ bounds: _0x10f252 }) =>
      Ai(_0x10f252, _0x360377),
    ) ?? null
  );
}
function zi(_0x1f71f9, _0x41b938, _0x368ec1) {
  let _0x517212 = Ni(_0x1f71f9, _0x41b938);
  return Ri(
    _0x517212
      ? {
          ..._0x1f71f9,
          containerData: { ..._0x1f71f9.containerData, swimlane: _0x517212 },
        }
      : _0x1f71f9,
    _0x41b938,
    _0x368ec1,
  );
}
function Bi(_0x223c59, _0x2c1b8a, _0x3785ce) {
  let _0x583067 = Li(_0x223c59, _0x2c1b8a).find(
    ({ contentBounds: _0x34d2ec }) => Ai(_0x34d2ec, _0x3785ce),
  );
  return _0x583067 ? { lane: _0x583067.lane, bounds: _0x583067.bounds } : null;
}
function Vi(_0x2e641a, _0x29259c, _0x56ce85) {
  let _0x31a943 = Ni(_0x2e641a, _0x29259c);
  return Bi(
    _0x31a943
      ? {
          ..._0x2e641a,
          containerData: { ..._0x2e641a.containerData, swimlane: _0x31a943 },
        }
      : _0x2e641a,
    _0x29259c,
    _0x56ce85,
  );
}
function Hi(_0x6a32a2, _0x2a790f, _0x61a379) {
  let _0x3cb294 = Li(_0x6a32a2, _0x2a790f).find(
    ({ contentBounds: _0x275f14 }) => gi(_0x275f14, _0x61a379),
  );
  return _0x3cb294 ? { lane: _0x3cb294.lane, bounds: _0x3cb294.bounds } : null;
}
function Ui(_0x3e28a9, _0x21adbf, _0x464e4c) {
  let _0x525aaa = Ni(_0x3e28a9, _0x21adbf);
  return Hi(
    _0x525aaa
      ? {
          ..._0x3e28a9,
          containerData: { ..._0x3e28a9.containerData, swimlane: _0x525aaa },
        }
      : _0x3e28a9,
    _0x21adbf,
    _0x464e4c,
  );
}
function Wi(_0xd42a44, _0x1d7306, _0x45a32d) {
  var _0xc75cc7;
  let _0x17e2f2 =
    _0xd42a44.containerData["kind"] === "swimlane"
      ? _0xd42a44.containerData["swimlane"]
      : undefined;
  if (!_0x17e2f2) return null;
  let _0x2ab0f8 = Ti(_0x17e2f2),
    _0x40cb38 = Ii(
      {
        ..._0xd42a44,
        containerData: { ..._0xd42a44.containerData, swimlane: _0x2ab0f8 },
      },
      _0x1d7306,
    ),
    _0x3d345a = _0x40cb38.find(({ contentBounds: _0xe320f4 }) =>
      gi(_0xe320f4, _0x45a32d),
    );
  if (_0x3d345a) return { laneId: _0x3d345a.lane["id"], swimlane: _0x2ab0f8 };
  let _0x5be903 =
    (_0xc75cc7 = _0x40cb38
      .map((_0xfe40b9) => ({
        region: _0xfe40b9,
        area: ji(_0xfe40b9.contentBounds, _0x45a32d),
      }))
      .filter(({ area: _0x364dec }) => _0x364dec > 0)
      .sort((_0x2bb483, _0x47a2ac) => _0x47a2ac.area - _0x2bb483.area)[0]) ==
    null
      ? undefined
      : _0xc75cc7.region;
  if (
    !_0x5be903 ||
    _0x5be903.lane["locked"] === true ||
    _0x5be903.lane["collapsed"] === true
  )
    return null;
  let _0x446c7c =
    _0x2ab0f8.orientation === "vertical"
      ? Math.max(
          _0x5be903.lane["size"],
          q(_0x45a32d) - _0x5be903.bounds["left"],
        )
      : Math.max(
          _0x5be903.lane["size"],
          J(_0x45a32d) - _0x5be903.bounds["top"],
        );
  return _0x446c7c === _0x5be903.lane["size"]
    ? null
    : {
        laneId: _0x5be903.lane["id"],
        swimlane: Ti({
          ..._0x2ab0f8,
          lanes: _0x2ab0f8.lanes["map"]((_0x4acbe2) =>
            _0x4acbe2.id === _0x5be903.lane["id"]
              ? { ..._0x4acbe2, size: _0x446c7c }
              : { ..._0x4acbe2 },
          ),
        }),
      };
}
const Gi = _0x8642e1.None,
  Ki = _0x46895e.SpAutoFit;
function qi(_0x4d861f = Gi) {
  return { autoFitType: Ki, textWrap: _0x4d861f };
}
function Ji(_0x5c457c) {
  let _0x5c75ed = _0x5c457c,
    _0x5ab798 = {},
    _0x2452ba = _0x5c75ed == null ? undefined : _0x5c75ed.fontSize;
  return (
    _0x5c75ed != null &&
      _0x5c75ed.fontFamily &&
      (_0x5ab798.ff = _0x5c75ed.fontFamily),
    typeof _0x2452ba == "number" && (_0x5ab798.fs = _0x2452ba),
    _0x5c75ed != null &&
      _0x5c75ed.color &&
      (_0x5ab798.cl = { rgb: _0x5c75ed.color }),
    (_0x5c75ed == null ? undefined : _0x5c75ed.bold) !== undefined &&
      (_0x5ab798.bl = _0x5c75ed.bold ? _0x2a6303.TRUE : _0x2a6303.FALSE),
    (_0x5c75ed == null ? undefined : _0x5c75ed.italic) !== undefined &&
      (_0x5ab798.it = _0x5c75ed.italic ? _0x2a6303.TRUE : _0x2a6303.FALSE),
    (_0x5c75ed == null ? undefined : _0x5c75ed.underline) !== undefined &&
      (_0x5ab798.ul = {
        s: _0x5c75ed.underline ? _0x2a6303.TRUE : _0x2a6303.FALSE,
      }),
    (_0x5c75ed == null ? undefined : _0x5c75ed.strikethrough) !== undefined &&
      (_0x5ab798.st = {
        s: _0x5c75ed.strikethrough ? _0x2a6303.TRUE : _0x2a6303.FALSE,
      }),
    (_0x5c75ed == null ? undefined : _0x5c75ed.textFill) !== undefined &&
      (_0x5ab798.textFill = _0x5c75ed.textFill),
    _0x5ab798
  );
}
function Yi(_0x582ca8) {
  var _0x341eed, _0x425265, _0x9a45c6;
  return _0x582ca8
    ? {
        ...(typeof _0x582ca8.ff == "string"
          ? { fontFamily: _0x582ca8.ff }
          : null),
        ...(_0x582ca8.fs === undefined ? null : { fontSize: _0x582ca8.fs }),
        ...(typeof ((_0x341eed = _0x582ca8.cl) == null
          ? undefined
          : _0x341eed.rgb) == "string"
          ? { color: _0x582ca8.cl["rgb"] }
          : null),
        ...(_0x582ca8.bl === undefined
          ? null
          : { bold: _0x582ca8.bl === _0x2a6303.TRUE }),
        ...(_0x582ca8.it === undefined
          ? null
          : { italic: _0x582ca8.it === _0x2a6303.TRUE }),
        ...(((_0x425265 = _0x582ca8.ul) == null ? undefined : _0x425265.s) ===
        undefined
          ? null
          : { underline: _0x582ca8.ul["s"] === _0x2a6303.TRUE }),
        ...(((_0x9a45c6 = _0x582ca8.st) == null ? undefined : _0x9a45c6.s) ===
        undefined
          ? null
          : { strikethrough: _0x582ca8.st["s"] === _0x2a6303.TRUE }),
        ...(_0x582ca8.textFill === undefined
          ? null
          : { textFill: _0x582ca8.textFill }),
      }
    : {};
}
function Xi(_0x43e5f5) {
  let _0x4ecfc5 = _0x43e5f5.horizontal !== false,
    _0x52dd24 = _0x43e5f5.horizontalAlign ?? _0x26718e.LEFT,
    _0x285ab0 = _0x43e5f5.verticalAlign ?? _0x172bf5.TOP,
    _0x165d7b = _0x43e5f5.wrapStrategy ?? _0x7eae52.CLIP;
  return {
    ...qi(_0x43e5f5.textWrap),
    ...(_0x43e5f5.bold === undefined ? null : { bold: _0x43e5f5.bold }),
    ...(_0x43e5f5.color === undefined ? null : { color: _0x43e5f5.color }),
    ...(_0x43e5f5.fontFamily === undefined
      ? null
      : { fontFamily: _0x43e5f5.fontFamily }),
    ...(_0x43e5f5.fontSize === undefined
      ? null
      : { fontSize: _0x43e5f5.fontSize }),
    ...(_0x43e5f5.italic === undefined ? null : { italic: _0x43e5f5.italic }),
    ...(_0x43e5f5.strikethrough === undefined
      ? null
      : { strikethrough: _0x43e5f5.strikethrough }),
    ...(_0x43e5f5.textFill === undefined
      ? null
      : { textFill: _0x43e5f5.textFill }),
    ...(_0x43e5f5.underline === undefined
      ? null
      : { underline: _0x43e5f5.underline }),
    horizontalAlign: _0x52dd24,
    isHorizontal: _0x4ecfc5,
    text: _0x43e5f5.text,
    textDirection: _0x4ecfc5 ? _0x2a37b4.Horz : _0x2a37b4.Vert,
    verticalAlign: _0x285ab0,
    dataModel: {
      ha: _0x52dd24,
      va: _0x285ab0,
      doc: mi({
        horizontalAlign: _0x52dd24,
        id: _0x43e5f5.id,
        text: _0x43e5f5.text,
        textStyle: _0x43e5f5.textStyle,
        verticalAlign: _0x285ab0,
        wrapStrategy: _0x165d7b,
      }),
    },
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
  containerHeight: 495,
};
function Qi(_0x100cbf) {
  return {
    ..._0x100cbf,
    fs: (_0x100cbf == null ? undefined : _0x100cbf.fs) ?? 14,
  };
}
const $i = {
    headerSize: 32,
    padding: { top: 12, right: 12, bottom: 12, left: 12 },
    expelHysteresis: 12,
  },
  ea = 2500,
  ta = {
    shapeType: _0x3fc086.RoundRect,
    adjustValues: { adj: ea },
    fill: { color: "rgba(255, 255, 255, 0.72)" },
    stroke: { color: "#94a3b8", width: 1 },
  },
  na = {
    acceptsChildren: true,
    acceptsContainer: true,
    allowNested: true,
    autoCapture: true,
    autoResize: true,
    membershipLocked: false,
    membershipAwareness: "interactive",
    clipChildren: false,
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
    modifierToForce: "Shift",
  },
  Y = {
    title: "Swimlane",
    collapsedLaneSize: 32,
    laneGap: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    laneCount: 3,
    horizontalHeaderSize: 270,
    horizontalLaneSize: 270,
    horizontalWidth: 1440,
    verticalHeaderSize: 108,
    verticalLaneSize: 405,
    verticalHeight: 810,
  };
function ia(_0x2bdfd5 = true) {
  return _0x2bdfd5
    ? { width: Zi.textBoxWidth, height: Zi.textBoxHeight }
    : { width: Zi.textBoxHeight, height: Zi.textBoxWidth };
}
function aa(_0x35d336) {
  return _0x35d336.kind === "free";
}
function oa(_0xb9bee9) {
  return aa(_0xb9bee9)
    ? { x: _0xb9bee9.x, y: _0xb9bee9.y }
    : _0xb9bee9.fallbackPoint
      ? { ..._0xb9bee9.fallbackPoint }
      : null;
}
function sa(_0x3a692b, _0x1af749, _0x55dacd = [], _0x3ad72a, _0x1fbf79) {
  var _0x5b23e6, _0x306790;
  let _0x4edb05 = [],
    _0xcb140d = oa(_0x3a692b);
  (_0xcb140d && _0x4edb05.push(_0xcb140d),
    _0x55dacd.forEach((_0x2dd44c) =>
      _0x4edb05.push({ x: _0x2dd44c.x, y: _0x2dd44c.y }),
    ));
  let _0x273495 = _0x3ad72a == null ? undefined : _0x3ad72a.routePoints;
  (_0x273495 == null ||
    _0x273495.forEach((_0x52215c) =>
      _0x4edb05.push({ x: _0x52215c.x, y: _0x52215c.y }),
    ),
    _0x1fbf79 == null ||
      (_0x5b23e6 = _0x1fbf79.anchors) == null ||
      _0x5b23e6
        .filter((_0x231b1f) => _0x231b1f.kind === "manual")
        .forEach((_0x508e76) =>
          _0x4edb05.push({ x: _0x508e76.x, y: _0x508e76.y }),
        ),
    _0x1fbf79 == null ||
      (_0x306790 = _0x1fbf79.controls) == null ||
      _0x306790
        .filter((_0x525603) => _0x525603.kind === "manual")
        .forEach((_0x2edc2d) =>
          _0x4edb05.push({ x: _0x2edc2d.x, y: _0x2edc2d.y }),
        ));
  let _0x376364 = oa(_0x1af749);
  if ((_0x376364 && _0x4edb05.push(_0x376364), _0x4edb05.length === 0))
    return null;
  let _0x31b311 = Math.min(..._0x4edb05.map((_0x34ce57) => _0x34ce57.x)),
    _0x35e73c = Math.min(..._0x4edb05.map((_0x3e0ba4) => _0x3e0ba4.y)),
    _0x580d24 = Math.max(..._0x4edb05.map((_0x3e3dfb) => _0x3e3dfb.x)),
    _0x19a83b = Math.max(..._0x4edb05.map((_0x2e8c06) => _0x2e8c06.y));
  return {
    left: _0x31b311,
    top: _0x35e73c,
    width: Math.max(1, _0x580d24 - _0x31b311),
    height: Math.max(1, _0x19a83b - _0x35e73c),
    rotation: 0,
  };
}
function ca() {
  let {
    autoFitType: _0x5191d2,
    textWrap: _0x3ab9dc,
    ..._0x3bbb1d
  } = Xi({
    fontSize: 16,
    horizontalAlign: _0x26718e.CENTER,
    text: "",
    textStyle: { fs: 16 },
    verticalAlign: _0x172bf5.MIDDLE,
    wrapStrategy: _0x7eae52.WRAP,
  });
  return _0x3bbb1d;
}
function la(_0x24a39d) {
  var _0x4c9408,
    _0x5e077c,
    _0x118c5a,
    _0x3ff9ba,
    _0x53a0f3,
    _0x43cafa,
    _0x37846c,
    _0xa5a7d6,
    _0x3baedc,
    _0x386a23,
    _0x1b976a;
  let _0x343970 =
      (_0x4c9408 = _0x24a39d.orthogonalData) == null
        ? undefined
        : _0x4c9408.routePoints,
    _0x2e0cc1 =
      _0x343970 == null
        ? undefined
        : _0x343970.filter((_0x16bfdf) => _0x16bfdf.kind === "manual"),
    _0x2f31fd =
      ((_0x5e077c = _0x24a39d.waypoints) == null
        ? undefined
        : _0x5e077c.filter((_0x4b9013) => _0x4b9013.kind === "manual")) ??
      _0x2e0cc1,
    _0x57df69 =
      _0x24a39d.labels ?? (_0x24a39d.label ? [_0x24a39d.label] : undefined),
    _0x39557a = {
      start: _0x24a39d.start,
      end: _0x24a39d.end,
      routing: _0x24a39d.routing ?? "orthogonal",
      routingMode:
        _0x24a39d.routingMode ??
        (_0x2f31fd != null && _0x2f31fd.length ? "manual" : "auto"),
      waypoints: _0x2f31fd,
      style: {
        stroke:
          ((_0x118c5a = _0x24a39d.style) == null
            ? undefined
            : _0x118c5a.stroke) ?? "#1f2937",
        strokeWidth:
          ((_0x3ff9ba = _0x24a39d.style) == null
            ? undefined
            : _0x3ff9ba.strokeWidth) ?? 2,
        opacity:
          (_0x53a0f3 = _0x24a39d.style) == null ? undefined : _0x53a0f3.opacity,
        dash:
          (_0x43cafa = _0x24a39d.style) == null ? undefined : _0x43cafa.dash,
        startMarker:
          (_0x37846c = _0x24a39d.style) == null
            ? undefined
            : _0x37846c.startMarker,
        endMarker:
          (_0xa5a7d6 = _0x24a39d.style) == null
            ? undefined
            : _0xa5a7d6.endMarker,
        cornerStyle:
          ((_0x3baedc = _0x24a39d.style) == null
            ? undefined
            : _0x3baedc.cornerStyle) ?? "rounded",
        lineJump:
          (_0x386a23 = _0x24a39d.style) == null
            ? undefined
            : _0x386a23.lineJump,
        animation:
          (_0x1b976a = _0x24a39d.style) == null
            ? undefined
            : _0x1b976a.animation,
      },
      labels: _0x57df69,
    };
  (_0x24a39d.orthogonalData &&
    (_0x39557a.orthogonalData = {
      ..._0x24a39d.orthogonalData,
      routePoints: _0x343970,
    }),
    _0x24a39d.curveData && (_0x39557a.curveData = _0x24a39d.curveData));
  let _0x39b03b = _0x24a39d.transform ??
    sa(
      _0x24a39d.start,
      _0x24a39d.end,
      _0x2f31fd,
      _0x39557a.orthogonalData,
      _0x24a39d.curveData,
    ) ?? { left: 0, top: 0, width: 1, height: 1, rotation: 0 };
  return {
    id: _0x24a39d.id ?? _0x2928b2(6),
    type: M.Connector,
    transform: _0x39b03b,
    connectorData: _0x39557a,
  };
}
function ua(_0x46fbc1) {
  var _0x439e06, _0x4c7125;
  let _0x471651 = Tn(_0x46fbc1.shapeType),
    _0x1e7f11 = Fn(_0x46fbc1.shapeType),
    _0x5b63f9 = _0x14baa6(_0x46fbc1.shapeType),
    _0x289837 = { shapeType: _0x46fbc1.shapeType };
  if (_0x1e7f11) {
    var _0x43d398, _0x4842e4, _0x2327ce, _0x1f960f;
    (_0x1e7f11.geometry
      ? ((_0x289837.isCustom = true),
        (_0x289837.customGeometry = _0x1e7f11.geometry))
      : (_0x289837.isCustom = false),
      (_0x289837.fill =
        (_0x43d398 = _0x1e7f11.defaultShapeData) == null
          ? undefined
          : _0x43d398.fill),
      (_0x289837.stroke =
        (_0x4842e4 = _0x1e7f11.defaultShapeData) == null
          ? undefined
          : _0x4842e4.stroke),
      (_0x2327ce = _0x1e7f11.defaultShapeData) != null &&
        _0x2327ce.sequenceLifeline &&
        (_0x289837.sequenceLifeline = {
          ..._0x1e7f11.defaultShapeData["sequenceLifeline"],
        }),
      (_0x1f960f = _0x1e7f11.defaultShapeData) != null &&
        _0x1f960f.sequenceActivation &&
        (_0x289837.sequenceActivation = {
          ..._0x1e7f11.defaultShapeData["sequenceActivation"],
        }));
  }
  if (_0x471651) {
    var _0x3e3e34, _0x2da4e7;
    ((_0x289837.isCustom = true),
      (_0x289837.customGeometry = _0x471651.geometry),
      (_0x289837.fill =
        (_0x3e3e34 = _0x471651.defaultShapeData) == null
          ? undefined
          : _0x3e3e34.fill),
      (_0x289837.stroke =
        (_0x2da4e7 = _0x471651.defaultShapeData) == null
          ? undefined
          : _0x2da4e7.stroke));
  }
  if (
    (_0x46fbc1.fillColor && (_0x289837.fill = { color: _0x46fbc1.fillColor }),
    _0x46fbc1.strokeColor || _0x46fbc1.strokeWidth !== undefined)
  ) {
    var _0x357ec6, _0x22f545;
    _0x289837.stroke = {
      ..._0x289837.stroke,
      color:
        _0x46fbc1.strokeColor ??
        ((_0x357ec6 = _0x289837.stroke) == null ? undefined : _0x357ec6.color),
      width:
        _0x46fbc1.strokeWidth ??
        ((_0x22f545 = _0x289837.stroke) == null ? undefined : _0x22f545.width),
    };
  }
  return (
    !(
      _0x1e7f11 != null &&
      (_0x439e06 = _0x1e7f11.defaultShapeData) != null &&
      _0x439e06.sequenceLifeline
    ) &&
      !(
        _0x1e7f11 != null &&
        (_0x4c7125 = _0x1e7f11.defaultShapeData) != null &&
        _0x4c7125.sequenceActivation
      ) &&
      (_0x289837.shapeText = ca()),
    {
      id: _0x46fbc1.id ?? _0x2928b2(6),
      type: M.Shape,
      parentId: _0x46fbc1.parentId,
      laneId: _0x46fbc1.laneId,
      transform: {
        left: _0x46fbc1.left,
        top: _0x46fbc1.top,
        width:
          _0x46fbc1.width ??
          (_0x1e7f11 == null ? undefined : _0x1e7f11.defaultSize["width"]) ??
          (_0x5b63f9 == null ? undefined : _0x5b63f9.width) ??
          Zi.shapeWidth,
        height:
          _0x46fbc1.height ??
          (_0x1e7f11 == null ? undefined : _0x1e7f11.defaultSize["height"]) ??
          (_0x5b63f9 == null ? undefined : _0x5b63f9.height) ??
          Zi.shapeHeight,
        rotation: 0,
      },
      shapeData: _0x289837,
    }
  );
}
function da(_0x5eac95) {
  let _0x4bfa9f = _0x5eac95.horizontal ?? true,
    _0x323fcf = ia(_0x4bfa9f),
    _0x289936 = _0x5eac95.text ?? "",
    _0x765db0 = Qi(_0x5eac95.textStyle);
  return {
    id: _0x5eac95.id ?? _0x2928b2(6),
    type: M.Shape,
    parentId: _0x5eac95.parentId,
    laneId: _0x5eac95.laneId,
    transform: {
      left: _0x5eac95.left,
      top: _0x5eac95.top,
      width: _0x5eac95.width ?? _0x323fcf.width,
      height: _0x5eac95.height ?? _0x323fcf.height,
      rotation: 0,
    },
    shapeData: {
      shapeType: _0x3fc086.Rect,
      isTextBox: true,
      fill: { fillType: _0x7fd5ed.NoFill },
      stroke: { lineStrokeType: _0x2ac9da.NoLine },
      shapeText: Xi({
        fontSize: _0x765db0.fs,
        horizontal: _0x4bfa9f,
        horizontalAlign: _0x5eac95.horizontalAlign ?? _0x26718e.LEFT,
        text: _0x289936,
        textStyle: _0x765db0,
        textWrap: _0x5eac95.textWrap,
        verticalAlign: _0x5eac95.verticalAlign ?? _0x172bf5.TOP,
        wrapStrategy: _0x7eae52.CLIP,
      }),
    },
  };
}
function fa(_0x1dbe62) {
  var _0x1359f8, _0x13ea87, _0x11afb9;
  let _0x48b977 = {
    ...ta,
    adjustValues: ta.adjustValues ? { ...ta.adjustValues } : undefined,
    fill: {
      color:
        _0x1dbe62.fillColor ??
        ((_0x1359f8 = ta.fill) == null ? undefined : _0x1359f8.color),
    },
    stroke: {
      ...ta.stroke,
      color:
        _0x1dbe62.strokeColor ??
        ((_0x13ea87 = ta.stroke) == null ? undefined : _0x13ea87.color),
      width:
        _0x1dbe62.strokeWidth ??
        ((_0x11afb9 = ta.stroke) == null ? undefined : _0x11afb9.width),
    },
  };
  return {
    id: _0x1dbe62.id ?? _0x2928b2(6),
    type: M.Container,
    parentId: _0x1dbe62.parentId,
    laneId: _0x1dbe62.laneId,
    transform: {
      left: _0x1dbe62.left,
      top: _0x1dbe62.top,
      width: _0x1dbe62.width ?? Zi.containerWidth,
      height: _0x1dbe62.height ?? Zi.containerHeight,
      rotation: 0,
    },
    containerData: {
      kind:
        _0x1dbe62.kind === "uml-package" || _0x1dbe62.kind === "system-boundary"
          ? _0x1dbe62.kind
          : "generic",
      title: _0x1dbe62.title,
      titleVisible: true,
      titlePosition: "top",
      headerSize: $i.headerSize,
      padding: { ...$i.padding },
      shapeData: _0x48b977,
      behavior: {
        ...na,
        membershipLocked: _0x1dbe62.membershipLocked ?? false,
      },
      capturePolicy: { ...ra },
    },
  };
}
function pa(_0x292bc1, _0x68d778, _0x1d1ef4) {
  return (
    _0x68d778 != null && _0x68d778.length
      ? _0x68d778
      : Array.from({ length: Y.laneCount }, (_0x5a42f1, _0xfd1e05) => ({
          id: "lane-" + (_0xfd1e05 + 1),
          title: "Lane " + (_0xfd1e05 + 1),
          size: _0x1d1ef4,
        }))
  ).map((_0x50e895, _0x32f148) => ({
    id: _0x50e895.id ?? _0x2928b2(6),
    title: _0x50e895.title ?? "Lane " + (_0x32f148 + 1),
    order: _0x32f148,
    size: _0x50e895.size ?? _0x1d1ef4,
    ...(_0x50e895.minSize === undefined ? {} : { minSize: _0x50e895.minSize }),
    ...(_0x50e895.locked === undefined ? {} : { locked: _0x50e895.locked }),
    ...(_0x50e895.collapsed === undefined
      ? {}
      : { collapsed: _0x50e895.collapsed }),
  }));
}
function ma(_0x285479, _0x235ec8) {
  var _0x41aced;
  let _0x2dcf0d =
    _0x285479 === "horizontal" ? Y.horizontalLaneSize : Y.verticalLaneSize;
  if ((_0x41aced = _0x235ec8.lanes) != null && _0x41aced.length)
    return _0x2dcf0d;
  let _0x7ae0dd =
    _0x285479 === "horizontal"
      ? _0x235ec8.height === undefined
        ? undefined
        : Math.max(0, _0x235ec8.height - $i.headerSize)
      : _0x235ec8.width === undefined
        ? undefined
        : Math.max(0, _0x235ec8.width);
  return _0x7ae0dd === undefined ? _0x2dcf0d : _0x7ae0dd / Y.laneCount;
}
function ha(_0x3ff6c4, _0x4371ab) {
  var _0xc65dd1;
  let _0x1c27af =
    _0x3ff6c4 === "horizontal" ? Y.horizontalHeaderSize : Y.verticalHeaderSize;
  if ((_0xc65dd1 = _0x4371ab.lanes) != null && _0xc65dd1.length)
    return _0x1c27af;
  let _0x315fcc =
    _0x3ff6c4 === "horizontal"
      ? _0x4371ab.width
      : _0x4371ab.height === undefined
        ? undefined
        : Math.max(0, _0x4371ab.height - $i.headerSize);
  if (_0x315fcc === undefined) return _0x1c27af;
  let _0xbb2af6 =
    _0x3ff6c4 === "horizontal" ? Y.horizontalWidth : Y.verticalHeight;
  return Math.min(_0x1c27af, (Math.max(0, _0x315fcc) * _0x1c27af) / _0xbb2af6);
}
function ga(_0x368cda) {
  let _0x27e0d2 = Si(_0x368cda.orientation),
    _0x58a140 = pa(_0x27e0d2, _0x368cda.lanes, ma(_0x27e0d2, _0x368cda)),
    _0x25559 = $i.headerSize,
    _0x51aa74 =
      _0x27e0d2 === "vertical"
        ? _0x58a140.reduce(
            (_0xe3457d, _0x4ba075) => _0xe3457d + _0x4ba075.size,
            0,
          )
        : Y.horizontalWidth,
    _0x1f324c =
      _0x27e0d2 === "horizontal"
        ? _0x25559 +
          _0x58a140.reduce(
            (_0x11dc4d, _0x377ad4) => _0x11dc4d + _0x377ad4.size,
            0,
          )
        : _0x25559 + Y.verticalHeight,
    _0x1fa80e = fa({
      ..._0x368cda,
      title: _0x368cda.title ?? Y.title,
      width: _0x368cda.width ?? _0x51aa74,
      height: _0x368cda.height ?? _0x1f324c,
    }),
    { adjustValues: _0x3179f7, ..._0x14c332 } =
      _0x1fa80e.containerData["shapeData"];
  return (
    (_0x1fa80e.containerData = {
      ..._0x1fa80e.containerData,
      kind: "swimlane",
      padding: { ...Y.padding },
      shapeData: { ..._0x14c332, shapeType: _0x3fc086.Rect },
      swimlane: Ti({
        orientation: _0x27e0d2,
        headerSize: _0x368cda.headerSize ?? ha(_0x27e0d2, _0x368cda),
        laneGap: _0x368cda.laneGap ?? Y.laneGap,
        collapsedLaneSize: _0x368cda.collapsedLaneSize ?? Y.collapsedLaneSize,
        lanes: _0x58a140,
      }),
    }),
    _0x1fa80e
  );
}
function _a(_0x187d81) {
  let _0x3c249b = _0x187d81.horizontal ?? true,
    _0x201a53 = ia(_0x3c249b),
    _0x3ee7de = _0x187d81.text ?? "",
    _0x470c53 = Qi(_0x187d81.textStyle),
    _0x484a5f = {
      id: _0x187d81.id ?? _0x2928b2(6),
      type: M.Text,
      parentId: _0x187d81.parentId,
      laneId: _0x187d81.laneId,
      text: _0x3ee7de,
      textData: mi({
        text: _0x3ee7de,
        horizontalAlign: _0x187d81.horizontalAlign ?? _0x26718e.LEFT,
        textStyle: _0x470c53,
        verticalAlign: _0x187d81.verticalAlign ?? _0x172bf5.TOP,
        wrapStrategy: _0x7eae52.CLIP,
      }),
      transform: {
        left: _0x187d81.left,
        top: _0x187d81.top,
        width: _0x187d81.width ?? _0x201a53.width,
        height: _0x187d81.height ?? _0x201a53.height,
        rotation: 0,
      },
    };
  return (
    _0x3c249b || (_0x484a5f.custom = { horizontal: _0x3c249b }),
    _0x484a5f
  );
}
function va(_0x255967) {
  return ua({
    id: _0x255967.id,
    shapeType: _0x3fc086.FoldedCorner,
    left: _0x255967.left,
    top: _0x255967.top,
    width: _0x255967.width ?? Zi.stickyWidth,
    height: _0x255967.height ?? Zi.stickyHeight,
    fillColor: _0x255967.fillColor,
    parentId: _0x255967.parentId,
    laneId: _0x255967.laneId,
  });
}
function ya(_0x2fb9ec) {
  return {
    id: _0x2fb9ec.id ?? _0x2928b2(6),
    type: M.Image,
    parentId: _0x2fb9ec.parentId,
    laneId: _0x2fb9ec.laneId,
    source: _0x2fb9ec.source,
    imageSourceType: _0x2fb9ec.imageSourceType,
    transform: {
      left: _0x2fb9ec.left,
      top: _0x2fb9ec.top,
      width: _0x2fb9ec.width,
      height: _0x2fb9ec.height,
      rotation: 0,
    },
  };
}
const ba = { top: 0, right: 0, bottom: 0, left: 0 },
  xa = Object.keys(na),
  Sa = Object.keys(ra),
  Ca = Object.keys($i.padding);
function wa(_0x5cf48c, _0x2f1743) {
  let {
    radius: _0x32e647,
    rx: _0x14a9e5,
    ry: _0x4163dd,
    adjustValues: _0xb8cd00,
    ..._0x4cf086
  } = _0x5cf48c ?? {};
  if (_0x2f1743 === "swimlane") {
    let { adjustValues: _0x558abc, ..._0x372c4e } = ta;
    return { ..._0x372c4e, ..._0x4cf086, shapeType: _0x3fc086.Rect };
  }
  return {
    ...ta,
    ..._0x4cf086,
    shapeType: _0x3fc086.RoundRect,
    adjustValues:
      typeof _0xb8cd00 == "object" && _0xb8cd00
        ? { ..._0xb8cd00, adj: ea }
        : { adj: ea },
  };
}
function Ta(_0x55dd3f) {
  var _0x3b4179;
  if (_0x55dd3f.type !== M.Container) return _0x55dd3f;
  let _0x2bfe80 = _0x55dd3f.containerData["behavior"],
    _0x389c73 = _0x55dd3f.containerData["capturePolicy"],
    _0x26ea7a = _0x55dd3f.containerData["padding"],
    _0x52a74 = _0x55dd3f.containerData["shapeData"],
    _0x16387b =
      !!_0x2bfe80 &&
      xa.every((_0x499a7d) => _0x2bfe80[_0x499a7d] !== undefined),
    _0x188471 =
      !!_0x389c73 &&
      Sa.every((_0x3663d5) => _0x389c73[_0x3663d5] !== undefined),
    _0x9f4a22 =
      !!_0x26ea7a &&
      Ca.every((_0x2a5c0e) => _0x26ea7a[_0x2a5c0e] !== undefined),
    _0x2f1c6d = !!(_0x52a74 != null && _0x52a74.shapeType),
    _0xb6d3c3 =
      _0x55dd3f.containerData["kind"] === "swimlane"
        ? (_0x52a74 == null ? undefined : _0x52a74.shapeType) === _0x3fc086.Rect
        : (_0x52a74 == null ? undefined : _0x52a74.shapeType) ===
            _0x3fc086.RoundRect &&
          ((_0x3b4179 = _0x52a74.adjustValues) == null
            ? undefined
            : _0x3b4179.adj) === 2500,
    _0x5266ea =
      _0x55dd3f.containerData["headerSize"] !== undefined &&
      _0x55dd3f.containerData["titleVisible"] !== undefined &&
      _0x55dd3f.containerData["titlePosition"] !== undefined;
  return _0x16387b &&
    _0x188471 &&
    _0x9f4a22 &&
    _0x2f1c6d &&
    _0xb6d3c3 &&
    _0x5266ea
    ? _0x55dd3f
    : {
        ..._0x55dd3f,
        containerData: {
          ..._0x55dd3f.containerData,
          titleVisible: _0x55dd3f.containerData["titleVisible"] ?? true,
          titlePosition: _0x55dd3f.containerData["titlePosition"] ?? "top",
          headerSize: _0x55dd3f.containerData["headerSize"] ?? $i.headerSize,
          shapeData: wa(
            _0x55dd3f.containerData["shapeData"],
            _0x55dd3f.containerData["kind"],
          ),
          padding: { ...$i.padding, ..._0x55dd3f.containerData["padding"] },
          behavior: { ...na, ..._0x55dd3f.containerData["behavior"] },
          capturePolicy: { ...ra, ..._0x55dd3f.containerData["capturePolicy"] },
        },
      };
}
function X(_0x7ec6f1) {
  if (
    _0x7ec6f1.type !== M.Container ||
    _0x7ec6f1.containerData["kind"] !== "swimlane" ||
    !_0x7ec6f1.containerData["swimlane"]
  )
    return _0x7ec6f1;
  let _0x517110 = Ta(_0x7ec6f1);
  return _0x517110.type === M.Container
    ? {
        ..._0x517110,
        containerData: {
          ..._0x517110.containerData,
          padding: { ...ba },
          swimlane: Ti(_0x7ec6f1.containerData["swimlane"]),
        },
      }
    : _0x517110;
}
function Ea(_0x3209cb) {
  let _0x4c6a3f = _0x3209cb;
  return {
    redo: _0x4c6a3f.redo,
    undo: _0x4c6a3f.undo,
    objects: (_0x4c6a3f.objects ?? []).map((_0x2fbc66) => ({
      unitId: _0x2fbc66.unitId,
      subUnitId: _0x2fbc66.subUnitId,
      elementId: _0x2fbc66.drawingId,
    })),
  };
}
const Da = "UNIVER_EMBED_BOARDS_FLOATING";
function Oa(_0x3a52d8) {
  return {
    id: _0x3a52d8.hostAnchorId,
    type: M.Shape,
    name: _0x3a52d8.embedId,
    transform: {
      left: _0x3a52d8.left ?? 80,
      top: _0x3a52d8.top ?? 80,
      width: _0x3a52d8.width ?? 560,
      height: _0x3a52d8.height ?? 360,
      rotation: 0,
    },
    shapeData: {
      shapeType: _0x3fc086.Rect,
      fill: { fillType: _0x7fd5ed.NoFill },
      stroke: { lineStrokeType: _0x2ac9da.NoLine },
    },
    custom: {
      [Da]: {
        version: 1,
        embedId: _0x3a52d8.embedId,
        hostAnchorId: _0x3a52d8.hostAnchorId,
        childUnitId: _0x3a52d8.childUnitId,
        childType: _0x3a52d8.childType,
      },
    },
  };
}
function ka(_0x31d5c8) {
  var _0x10c0df;
  let _0x3beae3 =
    (_0x10c0df = _0x31d5c8.custom) == null ? undefined : _0x10c0df[Da];
  if (!_0x3beae3 || typeof _0x3beae3 != "object") return;
  let _0xc9e4f3 = _0x3beae3;
  return _0xc9e4f3.version === 1 &&
    typeof _0xc9e4f3.embedId == "string" &&
    typeof _0xc9e4f3.hostAnchorId == "string"
    ? _0xc9e4f3
    : undefined;
}
function Aa(_0x34089c) {
  return (
    (_0x34089c == null ? undefined : _0x34089c.type) === M.Shape &&
    ka(_0x34089c) != null
  );
}
function ja(_0x444f10, _0x1906ba) {
  if (!Aa(_0x444f10) || !Aa(_0x1906ba)) return false;
  let _0x5b0c43 = ka(_0x444f10),
    _0x1e1460 = ka(_0x1906ba);
  return (
    (_0x5b0c43 == null ? undefined : _0x5b0c43.childUnitId) != null &&
    _0x5b0c43.childUnitId ===
      (_0x1e1460 == null ? undefined : _0x1e1460.childUnitId) &&
    _0x5b0c43.childType === _0x1e1460.childType
  );
}
const Ma = Object.values(He),
  Na = Object.values(Ue),
  Pa = Object.values(We);
function Fa(_0x38d837) {
  if (!Z(_0x38d837)) return false;
  let _0x3a35f3 = _0x38d837,
    _0x18d157 =
      typeof _0x3a35f3.width == "number" &&
      Number.isFinite(_0x3a35f3.width) &&
      _0x3a35f3.width > 0,
    _0x134835 =
      typeof _0x3a35f3.height == "number" &&
      Number.isFinite(_0x3a35f3.height) &&
      _0x3a35f3.height > 0;
  switch (_0x3a35f3.mode) {
    case Ge.AutoSize:
      return _0x3a35f3.width === undefined && _0x3a35f3.height === undefined;
    case Ge.FixedWidth:
      return _0x18d157 && _0x3a35f3.height === undefined;
    case Ge.FixedSize:
      return _0x18d157 && _0x134835;
    default:
      return false;
  }
}
function Z(_0x1984ac) {
  return (
    typeof _0x1984ac == "object" && !!_0x1984ac && !Array.isArray(_0x1984ac)
  );
}
function Ia(_0xcbd624, _0x2b43e6 = -1 / 0, _0x3ff586 = 1 / 0) {
  return (
    _0xcbd624 === undefined ||
    (typeof _0xcbd624 == "number" &&
      Number.isFinite(_0xcbd624) &&
      _0xcbd624 >= _0x2b43e6 &&
      _0xcbd624 <= _0x3ff586)
  );
}
function La(_0x2c395d, _0x5c5116) {
  return (
    _0x2c395d === undefined ||
    (typeof _0x2c395d == "string" && _0x5c5116.includes(_0x2c395d))
  );
}
function Ra(_0x19a9cb) {
  return (
    _0x19a9cb === undefined ||
    (Z(_0x19a9cb) &&
      (_0x19a9cb.color === undefined || typeof _0x19a9cb.color == "string") &&
      Ia(_0x19a9cb.opacity, 0, 1))
  );
}
function za(_0xdc1633) {
  return _0xdc1633 === undefined
    ? true
    : Z(_0xdc1633)
      ? _0xdc1633.space === Ke.Path
        ? typeof _0xdc1633.along == "number" &&
          Number.isFinite(_0xdc1633.along) &&
          typeof _0xdc1633.normal == "number" &&
          Number.isFinite(_0xdc1633.normal) &&
          _0xdc1633.x === undefined &&
          _0xdc1633.y === undefined
        : _0xdc1633.space === Ke.Canvas &&
          typeof _0xdc1633.x == "number" &&
          Number.isFinite(_0xdc1633.x) &&
          typeof _0xdc1633.y == "number" &&
          Number.isFinite(_0xdc1633.y) &&
          _0xdc1633.along === undefined &&
          _0xdc1633.normal === undefined
      : false;
}
function Ba(_0x4a801b) {
  if (
    !Z(_0x4a801b) ||
    typeof _0x4a801b.id != "string" ||
    _0x4a801b.id["trim"]().length === 0 ||
    (_0x4a801b.layout !== undefined && !Fa(_0x4a801b.layout)) ||
    "text" in _0x4a801b ||
    "documentData" in _0x4a801b ||
    "width" in _0x4a801b ||
    "height" in _0x4a801b ||
    "pathRatio" in _0x4a801b ||
    "offset" in _0x4a801b ||
    (_0x4a801b.content !== undefined &&
      typeof _0x4a801b.content != "string" &&
      (!Z(_0x4a801b.content) ||
        typeof _0x4a801b.content["id"] != "string" ||
        _0x4a801b.content["id"].trim().length === 0 ||
        (_0x4a801b.content["body"] !== undefined &&
          (!Z(_0x4a801b.content["body"]) ||
            typeof _0x4a801b.content["body"].dataStream != "string"))))
  )
    return false;
  let _0x5ad68f = _0x4a801b.placement;
  if (
    _0x5ad68f !== undefined &&
    (!Z(_0x5ad68f) ||
      !La(_0x5ad68f.anchor, Ma) ||
      !La(_0x5ad68f.side, Na) ||
      !La(_0x5ad68f.orientation, Pa) ||
      !Ia(_0x5ad68f.pathRatio, 0, 1) ||
      !Ia(_0x5ad68f.distance, 0) ||
      !Ia(_0x5ad68f.alongOffset, 0) ||
      !za(_0x5ad68f.offset))
  )
    return false;
  let _0x37ef23 = _0x4a801b.style;
  return (
    _0x37ef23 === undefined ||
    (Z(_0x37ef23) &&
      !("lineBreak" in _0x37ef23) &&
      (_0x37ef23.interruptLine === undefined ||
        typeof _0x37ef23.interruptLine == "boolean") &&
      Ia(_0x37ef23.lineGap, 0) &&
      Ra(_0x37ef23.fill) &&
      Ra(_0x37ef23.stroke) &&
      (_0x37ef23.stroke === undefined ||
        (Z(_0x37ef23.stroke) && Ia(_0x37ef23.stroke["width"], 0))))
  );
}
function Va(_0x2dd133) {
  return typeof (_0x2dd133 == null ? undefined : _0x2dd133.content) == "object"
    ? _0x2dd133.content
    : undefined;
}
function Ha(_0x4faf91) {
  var _0xbab3ed;
  if (typeof (_0x4faf91 == null ? undefined : _0x4faf91.content) == "string")
    return _0x4faf91.content;
  let _0xa5fcaf =
    ((_0xbab3ed = Va(_0x4faf91)) == null || (_0xbab3ed = _0xbab3ed.body) == null
      ? undefined
      : _0xbab3ed.dataStream) ?? "";
  return (
    _0xa5fcaf.endsWith("\x0d\x0a") ? _0xa5fcaf.slice(0, -2) : _0xa5fcaf
  ).replace(/\r/g, "\x0a");
}
function Ua(_0x5afc2c, _0x3d73c0 = false) {
  if (!Z(_0x5afc2c)) return _0x5afc2c;
  let _0x2e0674 = _0x5afc2c,
    _0x30e8af = _0x5afc2c,
    _0x3ca999 = "text" in _0x2e0674 || "documentData" in _0x2e0674,
    _0x247181 =
      _0x3d73c0 ||
      _0x3ca999 ||
      "width" in _0x2e0674 ||
      "height" in _0x2e0674 ||
      "pathRatio" in _0x2e0674 ||
      "offset" in _0x2e0674 ||
      (Z(_0x5afc2c.style) && "lineBreak" in _0x5afc2c.style);
  if (_0x3ca999) {
    let { text: _0x1f200b, documentData: _0x269ff3, ..._0x4ead46 } = _0x2e0674;
    _0x30e8af = {
      ..._0x4ead46,
      content: _0x381a86.deepClone(
        _0x4ead46.content === undefined
          ? (_0x269ff3 ?? _0x1f200b ?? "")
          : _0x4ead46.content,
      ),
    };
  }
  if (
    "width" in _0x2e0674 ||
    "height" in _0x2e0674 ||
    (_0x3ca999 && _0x2e0674.content === undefined)
  ) {
    let { width: _0x833a7e, height: _0x4f2cbc, ..._0x4ac327 } = _0x30e8af;
    _0x30e8af = {
      ..._0x4ac327,
      layout:
        _0x4ac327.layout === undefined
          ? {
              mode: Ge.FixedSize,
              width: _0x833a7e === undefined ? 96 : _0x833a7e,
              height: _0x4f2cbc === undefined ? 28 : _0x4f2cbc,
            }
          : _0x4ac327.layout,
    };
  }
  if ("pathRatio" in _0x30e8af) {
    let { pathRatio: _0x463108, ..._0x17eb2b } = _0x30e8af;
    ((_0x30e8af = _0x17eb2b),
      _0x463108 !== undefined &&
        (_0x17eb2b.placement === undefined
          ? (_0x30e8af = {
              ..._0x17eb2b,
              placement: { anchor: He.Path, pathRatio: _0x463108 },
            })
          : Z(_0x17eb2b.placement) &&
            _0x17eb2b.placement["anchor"] === He.Path &&
            _0x17eb2b.placement["pathRatio"] === undefined &&
            (_0x30e8af = {
              ..._0x17eb2b,
              placement: { ..._0x17eb2b.placement, pathRatio: _0x463108 },
            })));
  }
  if (Z(_0x5afc2c.style) && "lineBreak" in _0x5afc2c.style) {
    let { lineBreak: _0x23ee0f, ..._0xd96203 } = _0x5afc2c.style;
    _0x30e8af = {
      ..._0x30e8af,
      style: {
        ..._0xd96203,
        interruptLine:
          _0xd96203.interruptLine === undefined
            ? _0x23ee0f
            : _0xd96203.interruptLine,
      },
    };
  }
  if (
    (_0x247181 &&
      _0x30e8af.placement === undefined &&
      (_0x30e8af = { ..._0x30e8af, placement: { anchor: He.Auto } }),
    "offset" in _0x30e8af)
  ) {
    let { offset: _0x424614, ..._0x22e001 } = _0x30e8af;
    if (
      ((_0x30e8af = _0x22e001),
      _0x424614 !== undefined &&
        Z(_0x22e001.placement) &&
        _0x22e001.placement["offset"] === undefined)
    ) {
      let _0x4d6386 = Z(_0x424614)
        ? { x: _0x424614.x, y: _0x424614.y, space: Ke.Canvas }
        : _0x424614;
      _0x30e8af = {
        ..._0x22e001,
        placement: { ..._0x22e001.placement, offset: _0x4d6386 },
      };
    }
  }
  return _0x30e8af;
}
function Wa(_0x32f097) {
  if (
    _0x32f097.type !== M.Connector ||
    !Z(_0x32f097.connectorData) ||
    (_0x32f097.connectorData["labels"] !== undefined &&
      !Array.isArray(_0x32f097.connectorData["labels"]))
  )
    return _0x32f097;
  let _0x3d88a6 = _0x32f097.connectorData["label"];
  if (
    _0x32f097.connectorData["labels"] === undefined &&
    _0x3d88a6 !== undefined &&
    !Z(_0x3d88a6)
  )
    return _0x32f097;
  let _0x2958b7 =
      _0x32f097.connectorData["labels"] ?? (Z(_0x3d88a6) ? [_0x3d88a6] : []),
    _0x3f578b = _0x2958b7.map((_0x163197) =>
      Ua(
        _0x163197,
        _0x32f097.connectorData["labels"] === undefined && Z(_0x3d88a6),
      ),
    );
  return !("label" in _0x32f097.connectorData) &&
    _0x3f578b.every(
      (_0x22351a, _0x290a00) => _0x22351a === _0x2958b7[_0x290a00],
    )
    ? _0x32f097
    : { ..._0x32f097, connectorData: qa(_0x32f097.connectorData, _0x3f578b) };
}
function Ga(_0x12e071) {
  return (
    Array.isArray(_0x12e071) &&
    _0x12e071.every(Ba) &&
    new Set(_0x12e071.map((_0x55f365) => _0x55f365.id)).size ===
      _0x12e071.length
  );
}
function Ka(_0x4be602) {
  return _0x4be602.labels ?? [];
}
function qa(_0x5b5f34, _0x1bda3f) {
  let { label: _0x4cfea4, ..._0x236089 } = _0x5b5f34;
  return { ..._0x236089, labels: [..._0x1bda3f] };
}
function Ja(_0x2a4d1b, _0x4cb321, _0x3d8bd1) {
  let _0x1d1472 = Ka(_0x2a4d1b),
    _0x20e9ac = _0x1d1472.findIndex((_0x2a03c7) => _0x2a03c7.id === _0x4cb321);
  if (_0x20e9ac < 0) return null;
  let _0x13a003 = [..._0x1d1472];
  return (
    (_0x13a003[_0x20e9ac] = _0x3d8bd1(_0x1d1472[_0x20e9ac])),
    qa(_0x2a4d1b, _0x13a003)
  );
}
function Ya(_0x135cdf) {
  if (_0x135cdf.kind === "shapeBoundary" || _0x135cdf.kind === "shapeSite")
    return _0x135cdf.shapeId;
}
function Xa(_0x8d8790) {
  return Array.from(new Set(_0x8d8790.filter((_0x51ea3a) => !!_0x51ea3a)));
}
function Za(_0x5e97b1) {
  let _0x56467c = [
    _0x5e97b1.connectorData["start"],
    _0x5e97b1.connectorData["end"],
  ].map(Ya);
  return _0x56467c.some((_0x185f41) => !_0x185f41) ? [] : Xa(_0x56467c);
}
function Qa(_0x147ce1) {
  return Xa([
    Ya(_0x147ce1.connectorData["start"]),
    Ya(_0x147ce1.connectorData["end"]),
  ]);
}
function $a(_0x474716) {
  return [_0x474716.connectorData["start"], _0x474716.connectorData["end"]]
    .filter((_0x32a1b8) => _0x32a1b8.kind === "free")
    .map((_0x107620) => ({ x: _0x107620.x, y: _0x107620.y }));
}
function eo(_0x50a094, _0x17f7b3, _0x42a36d, _0x10d3d6 = "content") {
  let _0x24712e = _0x50a094[_0x17f7b3];
  if (!_0x24712e || _0x24712e.element["type"] !== M.Container) return false;
  let _0x32939e = U(_0x50a094, _0x17f7b3);
  if (!_0x32939e) return false;
  let _0x122401 = _0x24712e.element;
  if (
    _0x10d3d6 === "content" &&
    _0x122401.containerData["kind"] === "swimlane" &&
    _0x122401.containerData["swimlane"]
  )
    return _0x42a36d.every(
      (_0x20661e) => !!Vi(_0x122401, _0x32939e, _0x20661e),
    );
  let _0x4f0adb = bi(_0x122401, _0x32939e),
    _0x413457 =
      _0x10d3d6 === "outer" ? _0x4f0adb.outerBounds : _0x4f0adb.contentBounds;
  return _0x42a36d.every((_0x4ee199) =>
    gi(_0x413457, { left: _0x4ee199.x, top: _0x4ee199.y, width: 0, height: 0 }),
  );
}
function to(_0x2e1056, _0x199389, _0xcd01d8) {
  let _0x5897ba = $a(_0x199389);
  if (_0x5897ba.length === 0) return _0x199389.parentId;
  let _0x38937f = [
    ...(Vn(_0x2e1056[_0xcd01d8]) ? [_0xcd01d8] : []),
    ...V(_0x2e1056, _0xcd01d8),
  ];
  return _0x199389.parentId &&
    _0x38937f.includes(_0x199389.parentId) &&
    eo(_0x2e1056, _0x199389.parentId, _0x5897ba)
    ? _0x199389.parentId
    : _0x38937f.find((_0x1e7373) => eo(_0x2e1056, _0x1e7373, _0x5897ba));
}
function no(_0x38fa8e, _0x5bb201) {
  let _0x4dc5db = $a(_0x5bb201);
  if (!(!_0x5bb201.parentId || _0x4dc5db.length !== 2))
    return eo(_0x38fa8e, _0x5bb201.parentId, _0x4dc5db, "outer")
      ? _0x5bb201.parentId
      : undefined;
}
function ro(_0x4b43d3, _0x3fc99f) {
  let _0x8a2ddf = _0x3fc99f.map((_0x31dcaa) => [
      ...(Vn(_0x4b43d3[_0x31dcaa]) ? [_0x31dcaa] : []),
      ...V(_0x4b43d3, _0x31dcaa),
    ]),
    _0x3a9ab0 = _0x8a2ddf[0];
  return _0x3a9ab0 == null
    ? undefined
    : _0x3a9ab0.find((_0x2a742d) =>
        _0x8a2ddf.every((_0x5252fc) => _0x5252fc.includes(_0x2a742d)),
      );
}
function io(_0x130f2f, _0x144ad6, _0x5c19dc) {
  let _0x5b0f7d = _0x130f2f[_0x5c19dc];
  if (
    !_0x5b0f7d ||
    _0x5b0f7d.element["type"] !== M.Container ||
    _0x5b0f7d.element["containerData"].kind !== "swimlane"
  )
    return;
  if (_0x144ad6.kind === "free") {
    var _0xd53937;
    let _0x321559 = U(_0x130f2f, _0x5c19dc);
    return _0x321559
      ? (_0xd53937 = Vi(_0x5b0f7d.element, _0x321559, _0x144ad6)) == null
        ? undefined
        : _0xd53937.lane["id"]
      : undefined;
  }
  if (_0x144ad6.kind !== "shapeBoundary" && _0x144ad6.kind !== "shapeSite")
    return;
  let _0x19762e = _0x144ad6.shapeId,
    _0x267099 = new Set();
  for (; _0x19762e && !_0x267099.has(_0x19762e);) {
    _0x267099.add(_0x19762e);
    let _0x3933bd = _0x130f2f[_0x19762e];
    if (!_0x3933bd) return;
    if (_0x3933bd.element["parentId"] === _0x5c19dc)
      return _0x3933bd.element["laneId"];
    _0x19762e = _0x3933bd.element["parentId"];
  }
}
function ao(_0x28b7c8, _0x4a8f3b, _0x4ab62b) {
  if (!_0x4ab62b) return;
  let _0x450035 = _0x28b7c8[_0x4ab62b];
  if (
    !_0x450035 ||
    _0x450035.element["type"] !== M.Container ||
    _0x450035.element["containerData"].kind !== "swimlane"
  )
    return;
  let _0x5c5112 = [
      _0x4a8f3b.connectorData["start"],
      _0x4a8f3b.connectorData["end"],
    ].map((_0x473e4a) => io(_0x28b7c8, _0x473e4a, _0x4ab62b)),
    _0x5daaf3 = _0x5c5112[0];
  return _0x5daaf3 && _0x5c5112.every((_0x5f00ca) => _0x5f00ca === _0x5daaf3)
    ? _0x5daaf3
    : undefined;
}
function oo(_0x1f2d1a, _0x2169bf) {
  let _0x317edd = Za(_0x2169bf),
    _0x358790;
  if (
    _0x317edd.length === 0 ||
    _0x317edd.some((_0x54ff52) => !_0x1f2d1a[_0x54ff52])
  ) {
    let _0x41c6b5 = Qa(_0x2169bf);
    return _0x41c6b5.length === 1 && _0x1f2d1a[_0x41c6b5[0]]
      ? ((_0x358790 = to(_0x1f2d1a, _0x2169bf, _0x41c6b5[0])),
        { parentId: _0x358790, laneId: ao(_0x1f2d1a, _0x2169bf, _0x358790) })
      : _0x41c6b5.length === 0
        ? ((_0x358790 = no(_0x1f2d1a, _0x2169bf)),
          { parentId: _0x358790, laneId: ao(_0x1f2d1a, _0x2169bf, _0x358790) })
        : {};
  }
  return (
    (_0x358790 = ro(_0x1f2d1a, _0x317edd)),
    { parentId: _0x358790, laneId: ao(_0x1f2d1a, _0x2169bf, _0x358790) }
  );
}
function Q(_0x10a56f) {
  return (
    (_0x10a56f == null ? undefined : _0x10a56f.element["type"]) === M.Connector
  );
}
function so(_0x2c65e0) {
  return (
    (_0x2c65e0 == null ? undefined : _0x2c65e0.type) === M.Container &&
    _0x2c65e0.containerData["behavior"].membershipAwareness === "structural"
  );
}
function co(_0x46870c) {
  return (
    (_0x46870c == null ? undefined : _0x46870c.type) === M.Container &&
    _0x46870c.containerData["behavior"].membershipAwareness !== "structural"
  );
}
function lo(_0x5174c2) {
  var _0x5188e3;
  let _0x2fc650 = _0x5174c2 == null ? undefined : _0x5174c2.custom;
  return (
    typeof (_0x2fc650 == null || (_0x5188e3 = _0x2fc650.structured) == null
      ? undefined
      : _0x5188e3.modeId) == "string" &&
    typeof _0x2fc650.structured["structureScopeId"] == "string" &&
    typeof _0x2fc650.structured["semanticRole"] == "string"
  );
}
function uo(_0x135149) {
  var _0x473a4d;
  let _0x50478c = _0x135149 == null ? undefined : _0x135149.custom;
  return lo(_0x135149) &&
    typeof (_0x50478c == null || (_0x473a4d = _0x50478c.structured) == null
      ? undefined
      : _0x473a4d.structureScopeId) == "string"
    ? _0x50478c.structured["structureScopeId"]
    : null;
}
function fo(_0x448af5) {
  return _0x448af5 && "element" in _0x448af5 ? _0x448af5.element : _0x448af5;
}
function po(_0x1afb34, _0x237a3d) {
  let _0x2c198a = new Set(_0x237a3d),
    _0x37186e = new Map(),
    _0x448e5c = new Map();
  Object.entries(_0x1afb34).forEach(([_0x19b177, _0x2f7166]) => {
    let _0x2855fa = fo(_0x2f7166),
      _0xfbe658 = uo(_0x2855fa);
    if (!(!_0x2855fa || !_0xfbe658)) {
      if (so(_0x2855fa)) {
        _0x37186e.set(_0xfbe658, _0x19b177);
        return;
      }
      if (_0x2855fa.type !== M.Connector) {
        let _0x44af1b = _0x448e5c.get(_0xfbe658) ?? [];
        (_0x44af1b.push(_0x19b177), _0x448e5c.set(_0xfbe658, _0x44af1b));
      }
    }
  });
  let _0x430363 = new Set();
  if (
    (_0x448e5c.forEach((_0x3f7f91, _0x310f43) => {
      _0x37186e.has(_0x310f43) &&
        _0x3f7f91.length > 0 &&
        _0x3f7f91.every((_0x338ffe) => _0x2c198a.has(_0x338ffe)) &&
        _0x430363.add(_0x310f43);
    }),
    _0x430363.size === 0)
  )
    return [..._0x237a3d];
  let _0x4ba3d2 = [],
    _0x184656 = new Set();
  return (
    _0x237a3d.forEach((_0x656c73) => {
      let _0x1c9f32 = uo(fo(_0x1afb34[_0x656c73])),
        _0x3bba03 =
          _0x1c9f32 && _0x430363.has(_0x1c9f32)
            ? (_0x37186e.get(_0x1c9f32) ?? _0x656c73)
            : _0x656c73;
      _0x184656.has(_0x3bba03) ||
        (_0x184656.add(_0x3bba03), _0x4ba3d2.push(_0x3bba03));
    }),
    _0x4ba3d2
  );
}
const mo = "board.mutation.update-element";
function ho(_0x43f2eb) {
  return (
    _0x43f2eb.type !== M.Connector ||
    (!("label" in _0x43f2eb.connectorData) &&
      (_0x43f2eb.connectorData["labels"] === undefined ||
        Ga(_0x43f2eb.connectorData["labels"])))
  );
}
function go(_0x5ee80e, _0x5e2811) {
  let _0x2380ac = tn(_0x5ee80e, Object.keys(_0x5ee80e), _0x5e2811);
  return (
    Object.values(_0x5ee80e).forEach((_0x5a7ab6) => {
      !Q(_0x5a7ab6) ||
        _0x2380ac.includes(_0x5a7ab6.elementId) ||
        (Qa(_0x5a7ab6.element).some((_0xfa8396) =>
          _0x2380ac.includes(_0xfa8396),
        ) &&
          _0x2380ac.push(_0x5a7ab6.elementId));
    }),
    _0x2380ac
  );
}
function _o(_0x2baf11, _0xa148f, _0x52be7d = {}) {
  if (
    !ho(_0xa148f) ||
    (Aa(_0xa148f) && !_0x52be7d.allowEmbedAnchor) ||
    (Aa(_0xa148f) && (_0xa148f.parentId || _0xa148f.laneId)) ||
    (Aa(_0xa148f) &&
      ((_0xa148f.transform["rotation"] ?? 0) !== 0 ||
        _0xa148f.transform["flipX"] === true ||
        _0xa148f.transform["flipY"] === true)) ||
    (Aa(_0xa148f) &&
      Object.values(_0x2baf11).some((_0x2dce7e) =>
        ja(_0x2dce7e.element, _0xa148f),
      )) ||
    !Ao(_0xa148f) ||
    !xo(_0x2baf11, _0xa148f) ||
    _0x2baf11[_0xa148f.id]
  )
    return false;
  if (!_0xa148f.parentId) return true;
  let _0x2a95bf = _0x2baf11[_0xa148f.parentId],
    _0x251149 = _0x2a95bf == null ? undefined : _0x2a95bf.element;
  if ((_0x251149 == null ? undefined : _0x251149.type) !== M.Container)
    return false;
  let _0x510c05 = _0x251149.containerData["behavior"];
  return (!_0x52be7d.allowLockedParent &&
    (_0x2a95bf.hidden === true ||
      _0x251149.visible === false ||
      _0x251149.locked === true ||
      _0x251149.selectable === false ||
      _0x510c05.membershipLocked)) ||
    (!_0x52be7d.allowLockedParent && ko(_0x2baf11, _0xa148f)) ||
    !_0x510c05.acceptsChildren
    ? false
    : _0xa148f.type !== M.Container ||
        (_0x510c05.acceptsContainer && _0x510c05.allowNested);
}
function vo(_0x47c7de, _0x1f8035, _0x584439 = {}) {
  var _0x53ca6;
  let _0x593c88 = _0x47c7de[_0x1f8035];
  if (
    !_0x593c88 ||
    _0x593c88.element["locked"] === true ||
    (_0x593c88.element["type"] === M.Container &&
      Object.values(_0x47c7de).some(
        (_0x161d80) => _0x161d80.element["parentId"] === _0x1f8035,
      )) ||
    Object.values(_0x47c7de).some(
      (_0x203c0a) => Q(_0x203c0a) && Qa(_0x203c0a.element).includes(_0x1f8035),
    )
  )
    return false;
  let _0x4ea0e0 = _0x593c88.element["parentId"]
    ? (_0x53ca6 = _0x47c7de[_0x593c88.element["parentId"]]) == null
      ? undefined
      : _0x53ca6.element
    : undefined;
  return !_0x584439.allowLockedParent && ko(_0x47c7de, _0x593c88.element)
    ? false
    : !!_0x584439.allowLockedParent ||
        (_0x4ea0e0 == null ? undefined : _0x4ea0e0.type) !== M.Container ||
        !_0x4ea0e0.containerData["behavior"].membershipLocked;
}
function yo(_0x338da4, _0x18255a, _0x1a0d01 = {}) {
  var _0x41c270;
  let _0x3337fe = _0x338da4[_0x18255a];
  if (!_0x3337fe) return false;
  let _0x5866c4 = _0x3337fe.element["parentId"]
      ? (_0x41c270 = _0x338da4[_0x3337fe.element["parentId"]]) == null
        ? undefined
        : _0x41c270.element
      : undefined,
    _0x3a0af6 = go(_0x338da4, [_0x18255a]);
  return (!_0x1a0d01.allowLockedParent && ko(_0x338da4, _0x3337fe.element)) ||
    _0x3a0af6.some((_0x2560a2) => {
      var _0x567882;
      return _0x1a0d01.allowLockedTarget && _0x2560a2 === _0x18255a
        ? false
        : ((_0x567882 = _0x338da4[_0x2560a2]) == null
            ? undefined
            : _0x567882.element["locked"]) === true;
    })
    ? false
    : !!_0x1a0d01.allowLockedParent ||
        (_0x5866c4 == null ? undefined : _0x5866c4.type) !== M.Container ||
        !_0x5866c4.containerData["behavior"].membershipLocked;
}
function bo(_0x414a34) {
  return (
    (_0x414a34 == null ? undefined : _0x414a34.angle) ??
    (_0x414a34 == null ? undefined : _0x414a34.rotation) ??
    0
  );
}
function xo(_0x5594de, _0x122552) {
  var _0x3867cc, _0x31b7e3;
  if (!_0x122552.laneId) return true;
  if (!_0x122552.parentId) return false;
  let _0x5b04af =
    (_0x3867cc = _0x5594de[_0x122552.parentId]) == null
      ? undefined
      : _0x3867cc.element;
  return (
    (_0x5b04af == null ? undefined : _0x5b04af.type) === M.Container &&
    _0x5b04af.containerData["kind"] === "swimlane" &&
    ((_0x31b7e3 = _0x5b04af.containerData["swimlane"]) == null
      ? undefined
      : _0x31b7e3.lanes["some"](
          (_0xe617de) => _0xe617de.id === _0x122552.laneId,
        )) === true
  );
}
function So(_0x532ec0, _0x3a0bb5) {
  var _0x30e018;
  if (_0x3a0bb5.type !== M.Container) return true;
  let _0x5f20a7 = new Set(
    _0x3a0bb5.containerData["kind"] === "swimlane"
      ? (((_0x30e018 = _0x3a0bb5.containerData["swimlane"]) == null
          ? undefined
          : _0x30e018.lanes["map"]((_0x5e13b5) => _0x5e13b5.id)) ?? [])
      : [],
  );
  return Object.values(_0x532ec0).every((_0x3ccf9b) => {
    let _0x25fb0e = _0x3ccf9b.element;
    return (
      _0x25fb0e.id === _0x3a0bb5.id ||
      _0x25fb0e.parentId !== _0x3a0bb5.id ||
      !_0x25fb0e.laneId ||
      (_0x3a0bb5.containerData["kind"] === "swimlane" &&
        _0x5f20a7.has(_0x25fb0e.laneId))
    );
  });
}
function Co(_0x6304a3, _0x7cc4c1) {
  return (
    (_0x6304a3 == null ? undefined : _0x6304a3.type) !== M.Container ||
    _0x7cc4c1.type !== M.Container ||
    _0x6304a3.containerData["kind"] !== "swimlane" ||
    _0x7cc4c1.containerData["kind"] !== "swimlane" ||
    !_0x6304a3.containerData["swimlane"] ||
    !_0x7cc4c1.containerData["swimlane"] ||
    !ki(
      _0x6304a3.containerData["swimlane"],
      _0x7cc4c1.containerData["swimlane"],
    )
  );
}
function wo(_0x5085b1) {
  return (
    _0x5085b1.type !== M.Container ||
    _0x5085b1.containerData["kind"] !== "swimlane" ||
    (!!_0x5085b1.containerData["swimlane"] &&
      wi(_0x5085b1.containerData["swimlane"]))
  );
}
function To(_0x590a60) {
  let _0x336ed3 = _0x590a60 == null ? undefined : _0x590a60.element;
  return (
    (_0x336ed3 == null ? undefined : _0x336ed3.type) === M.Container &&
    (_0x590a60 == null ? undefined : _0x590a60.hidden) !== true &&
    _0x336ed3.visible !== false &&
    _0x336ed3.locked !== true &&
    _0x336ed3.selectable !== false
  );
}
function Eo(_0xeb9e7c) {
  return Object.values(_0xeb9e7c).every((_0x5910be) => {
    let _0x4accea = _0x5910be.element;
    if (
      _0x4accea.type !== M.Container ||
      !_0x4accea.containerData["behavior"].membershipLocked ||
      so(_0x4accea)
    )
      return true;
    let _0x125243 = U(_0xeb9e7c, _0x5910be.elementId);
    return _0x125243
      ? Object.values(_0xeb9e7c).every((_0x291f65) => {
          let _0x15b55a = _0x291f65.element;
          if (
            _0x15b55a.parentId !== _0x5910be.elementId ||
            _0x15b55a.type === M.Connector
          )
            return true;
          let _0x549542 = U(_0xeb9e7c, _0x291f65.elementId);
          return !!_0x549542 && gi(_0x125243, _0x549542);
        })
      : false;
  });
}
function Do(_0x48937d, _0x2af959, _0x335473, _0x78ebf6) {
  return Eo({
    ..._0x48937d,
    [_0x2af959.elementId]: {
      ..._0x2af959,
      element: _0x335473,
      transform: _0x78ebf6 ?? _0x2af959.transform,
    },
  });
}
function Oo(_0x58ea78) {
  _0x58ea78.forEach((_0x2ce9d4) => {
    if (_0x2ce9d4.id !== mo) return;
    let _0x1fc994 = _0x2ce9d4.params;
    _0x1fc994 &&
      Object.defineProperty(_0x1fc994, "allowPendingMembershipLockedCoverage", {
        value: true,
        enumerable: false,
        configurable: true,
      });
  });
}
function ko(_0x1bfeea, _0x5a66a3) {
  let _0x2570ed = _0x5a66a3.parentId,
    _0x2b085f = new Set([_0x5a66a3.id]);
  for (; _0x2570ed;) {
    if (_0x2b085f.has(_0x2570ed)) return true;
    let _0x23d444 = _0x1bfeea[_0x2570ed];
    if (
      !_0x23d444 ||
      _0x23d444.element["type"] !== M.Container ||
      !To(_0x23d444)
    )
      return true;
    (_0x2b085f.add(_0x2570ed), (_0x2570ed = _0x23d444.element["parentId"]));
  }
  return false;
}
function Ao(_0x1dd6b0, _0x52f88c) {
  let _0x16de53 = _0x1dd6b0.transform["rotation"] ?? 0,
    _0x54b8ed = _0x52f88c ? bo(_0x52f88c) : 0;
  return (
    _0x1dd6b0.type !== M.Container ||
    (_0x16de53 === 0 &&
      _0x54b8ed === 0 &&
      (!_0x1dd6b0.containerData["behavior"].membershipLocked ||
        so(_0x1dd6b0) ||
        _0x1dd6b0.containerData["behavior"].autoResize))
  );
}
function jo(_0xe81fe6, _0x32c1d4, _0x54d42f, _0x2953ea, _0x4a00a2 = {}) {
  var _0x2af1a9;
  if (!_0x32c1d4 || _0x54d42f.type !== _0x32c1d4.type || !ho(_0x54d42f))
    return false;
  let _0x3e41a0 = Aa(_0x32c1d4),
    _0x4ec39a = Aa(_0x54d42f);
  if (_0x3e41a0 !== _0x4ec39a) return false;
  if (_0x3e41a0 && _0x4ec39a) {
    let _0xeba2dc = ka(_0x32c1d4),
      _0x446507 = ka(_0x54d42f);
    if (
      (_0xeba2dc == null ? undefined : _0xeba2dc.embedId) !==
        (_0x446507 == null ? undefined : _0x446507.embedId) ||
      (_0xeba2dc == null ? undefined : _0xeba2dc.hostAnchorId) !==
        (_0x446507 == null ? undefined : _0x446507.hostAnchorId) ||
      (_0xeba2dc == null ? undefined : _0xeba2dc.childUnitId) !==
        (_0x446507 == null ? undefined : _0x446507.childUnitId) ||
      (_0xeba2dc == null ? undefined : _0xeba2dc.childType) !==
        (_0x446507 == null ? undefined : _0x446507.childType)
    )
      return false;
  }
  if (
    (_0x4ec39a &&
      (_0x54d42f.parentId ||
        _0x54d42f.laneId ||
        (_0x54d42f.transform["rotation"] ?? 0) !== 0 ||
        _0x54d42f.transform["flipX"] === true ||
        _0x54d42f.transform["flipY"] === true ||
        (_0x2953ea != null && bo(_0x2953ea) !== 0) ||
        (_0x2953ea == null ? undefined : _0x2953ea.flipX) === true ||
        (_0x2953ea == null ? undefined : _0x2953ea.flipY) === true)) ||
    !Ao(_0x54d42f, _0x2953ea) ||
    !wo(_0x54d42f) ||
    !xo(_0xe81fe6, _0x54d42f) ||
    !So(_0xe81fe6, _0x54d42f) ||
    !Co(_0x32c1d4, _0x54d42f) ||
    Wn(_0xe81fe6, _0x54d42f.id, _0x54d42f.parentId)
  )
    return false;
  let _0x4cc868 = _0xe81fe6[_0x32c1d4.id];
  if (
    !_0x4cc868 ||
    (!_0x4a00a2.allowInactiveTarget && _0x4cc868.hidden === true) ||
    (!_0x4a00a2.allowInactiveTarget && _0x32c1d4.visible === false) ||
    (!_0x4a00a2.allowLockedTarget && _0x32c1d4.locked === true) ||
    (!_0x4a00a2.allowInactiveTarget && _0x32c1d4.selectable === false) ||
    (!_0x4a00a2.allowPendingMembershipLockedCoverage &&
      !Do(_0xe81fe6, _0x4cc868, _0x54d42f, _0x2953ea))
  )
    return false;
  if (_0x54d42f.parentId === _0x32c1d4.parentId)
    return (
      !_0x54d42f.parentId ||
      (To(_0xe81fe6[_0x54d42f.parentId]) && !ko(_0xe81fe6, _0x32c1d4))
    );
  let _0x3656b3 = _0x32c1d4.parentId
    ? (_0x2af1a9 = _0xe81fe6[_0x32c1d4.parentId]) == null
      ? undefined
      : _0x2af1a9.element
    : undefined;
  if (
    (_0x3656b3 == null ? undefined : _0x3656b3.type) === M.Container &&
    _0x3656b3.containerData["behavior"].membershipLocked
  )
    return false;
  if (!_0x54d42f.parentId) return true;
  let _0x141444 = _0xe81fe6[_0x54d42f.parentId],
    _0x49d3cb = _0x141444 == null ? undefined : _0x141444.element;
  if ((_0x49d3cb == null ? undefined : _0x49d3cb.type) !== M.Container)
    return false;
  let _0x15e323 = _0x49d3cb.containerData["behavior"];
  return _0x141444.hidden === true ||
    _0x49d3cb.visible === false ||
    _0x49d3cb.locked === true ||
    _0x49d3cb.selectable === false ||
    _0x15e323.membershipLocked ||
    !_0x15e323.acceptsChildren
    ? false
    : _0x54d42f.type !== M.Container ||
        (_0x15e323.acceptsContainer && _0x15e323.allowNested);
}
function Mo(_0x24d140, _0x3d1c1d) {
  let _0x1619e7 = { ..._0x24d140 };
  _0x3d1c1d.forEach((_0x44a644) => {
    let _0x2868e9 = _0x44a644.params;
    !_0x2868e9.elementId ||
      !_0x2868e9.element ||
      !_0x1619e7[_0x2868e9.elementId] ||
      (_0x1619e7[_0x2868e9.elementId] = {
        ..._0x1619e7[_0x2868e9.elementId],
        element: _0x2868e9.element,
        transform:
          _0x2868e9.transform ?? _0x1619e7[_0x2868e9.elementId].transform,
      });
  });
  let _0x288411 = _0x3d1c1d.every((_0x39010f) => {
    var _0x5068ef;
    let _0x317661 = _0x39010f.params;
    return !_0x317661.elementId || !_0x317661.element
      ? false
      : jo(
          _0x1619e7,
          (_0x5068ef = _0x24d140[_0x317661.elementId]) == null
            ? undefined
            : _0x5068ef.element,
          _0x317661.element,
          _0x317661.transform,
          _0x317661,
        );
  });
  return (_0x288411 && Oo(_0x3d1c1d), _0x288411);
}
function No(_0x184e7f, _0x3a2e19) {
  let _0x45cd7e = { ..._0x184e7f };
  for (let _0x4a04b6 of _0x3a2e19) {
    if (_0x4a04b6.id === "board.mutation.add-element") {
      let _0x186e05 = _0x4a04b6.params;
      if (!_0x186e05.element || !_o(_0x45cd7e, _0x186e05.element, _0x186e05))
        return false;
      _0x45cd7e[_0x186e05.element["id"]] = {
        unitId: "",
        subUnitId: "",
        elementId: _0x186e05.element["id"],
        element: _0x186e05.element,
        transform: {
          left: _0x186e05.element["transform"].left,
          top: _0x186e05.element["transform"].top,
          width: _0x186e05.element["transform"].width,
          height: _0x186e05.element["transform"].height,
          angle: _0x186e05.element["transform"].rotation ?? 0,
          flipX: _0x186e05.element["transform"].flipX,
          flipY: _0x186e05.element["transform"].flipY,
        },
      };
      continue;
    }
    if (_0x4a04b6.id === mo) {
      var _0x3913c7;
      let _0x25a679 = _0x4a04b6.params;
      if (
        !_0x25a679.elementId ||
        !_0x25a679.element ||
        _0x25a679.element["id"] !== _0x25a679.elementId ||
        !jo(
          _0x45cd7e,
          (_0x3913c7 = _0x45cd7e[_0x25a679.elementId]) == null
            ? undefined
            : _0x3913c7.element,
          _0x25a679.element,
          _0x25a679.transform,
          { ..._0x25a679, allowPendingMembershipLockedCoverage: true },
        )
      )
        return false;
      _0x45cd7e[_0x25a679.elementId] = {
        ..._0x45cd7e[_0x25a679.elementId],
        element: _0x25a679.element,
        transform:
          _0x25a679.transform ?? _0x45cd7e[_0x25a679.elementId].transform,
      };
      continue;
    }
    if (_0x4a04b6.id === "board.mutation.remove-element-only") {
      let _0x1659f0 = _0x4a04b6.params;
      if (
        !_0x1659f0.elementId ||
        !vo(_0x45cd7e, _0x1659f0.elementId, _0x1659f0)
      )
        return false;
      delete _0x45cd7e[_0x1659f0.elementId];
      continue;
    }
    if (_0x4a04b6.id === "board.mutation.remove-element") {
      let _0x542fcd = _0x4a04b6.params;
      if (
        !_0x542fcd.elementId ||
        !yo(_0x45cd7e, _0x542fcd.elementId, _0x542fcd)
      )
        return false;
      go(_0x45cd7e, [_0x542fcd.elementId]).forEach((_0x44bc3e) => {
        delete _0x45cd7e[_0x44bc3e];
      });
      continue;
    }
    return false;
  }
  return Eo(_0x45cd7e) ? (Oo(_0x3a2e19), true) : false;
}
function Po(_0x37657f) {
  return !!_0x37657f && Object.keys(_0x37657f).length > 0;
}
function Fo(_0x493d09) {
  return !!(_0x493d09 != null && _0x493d09.length);
}
function Io(_0x210dd7) {
  return Fo(_0x210dd7.slideOrder) || Po(_0x210dd7.slides);
}
function Lo(_0x108332, _0x1d6237 = []) {
  return Io(_0x108332)
    ? Fo(_0x108332.slideOrder)
      ? _0x108332.slideOrder
      : _0x1d6237
    : Fo(_0x108332.pageOrder)
      ? _0x108332.pageOrder
      : _0x1d6237;
}
function Ro(_0x23ad63, _0x38e0a9 = {}) {
  return Io(_0x23ad63)
    ? Po(_0x23ad63.slides)
      ? _0x23ad63.slides
      : _0x38e0a9
    : Po(_0x23ad63.pages)
      ? _0x23ad63.pages
      : _0x38e0a9;
}
function zo(_0x142773, _0xcf3a26) {
  return Io(_0x142773)
    ? (_0x142773.activeSlideId ?? _0x142773.activePageId ?? _0xcf3a26[0])
    : (_0x142773.activePageId ?? _0xcf3a26[0]);
}
function Bo(_0x30945b, _0x3a470f) {
  var _0xcc7e88;
  return (
    _0x30945b.pages[_0x3a470f] ??
    ((_0xcc7e88 = _0x30945b.slides) == null ? undefined : _0xcc7e88[_0x3a470f])
  );
}
function Vo(_0x1739a5) {
  var _0x5ccb56;
  return (
    _0x1739a5.activePageId ??
    _0x1739a5.activeSlideId ??
    _0x1739a5.pageOrder[0] ??
    ((_0x5ccb56 = _0x1739a5.slideOrder) == null ? undefined : _0x5ccb56[0])
  );
}
function Ho(_0x151ee4, _0x565c4a, _0x20609a) {
  var _0x1cff55, _0x3416c1;
  (_0x151ee4.pages[_0x565c4a] ||
    (_0x151ee4.pages = { ..._0x151ee4.pages, [_0x565c4a]: _0x20609a }),
    ((_0x1cff55 = _0x151ee4.slides) == null
      ? undefined
      : _0x1cff55[_0x565c4a]) !== _0x151ee4.pages[_0x565c4a] &&
      (_0x151ee4.slides = {
        ..._0x151ee4.slides,
        [_0x565c4a]: _0x151ee4.pages[_0x565c4a],
      }),
    _0x151ee4.pageOrder["length"] > 0 &&
    _0x151ee4.slideOrder !== _0x151ee4.pageOrder
      ? (_0x151ee4.slideOrder = _0x151ee4.pageOrder)
      : (((_0x3416c1 = _0x151ee4.slideOrder) == null
          ? undefined
          : _0x3416c1.length) ?? 0) > 0 &&
        _0x151ee4.pageOrder["length"] === 0 &&
        (_0x151ee4.pageOrder = _0x151ee4.slideOrder ?? []),
    (_0x151ee4.activePageId ??= _0x151ee4.activeSlideId ?? _0x565c4a),
    (_0x151ee4.activeSlideId = _0x151ee4.activePageId));
}
function Uo(_0x463859) {
  return (
    (_0x463859.slideOrder = _0x463859.pageOrder),
    (_0x463859.slides = _0x463859.pages),
    (_0x463859.activeSlideId = _0x463859.activePageId),
    _0x463859
  );
}
function Wo(_0x510801, _0x404ba9) {
  return _0x404ba9
    ? {
        ..._0x510801,
        transform: {
          ..._0x510801.transform,
          left: _0x404ba9.left,
          top: _0x404ba9.top,
          width: _0x404ba9.width,
          height: _0x404ba9.height,
          rotation: _0x404ba9.angle,
          flipX: _0x404ba9.flipX,
          flipY: _0x404ba9.flipY,
        },
      }
    : _0x510801;
}
function Go(_0x3f2a35, _0x25d914) {
  let _0x459922 = _0x3f2a35.getSnapshot(),
    _0x4badb4 = Bo(_0x459922, _0x25d914);
  return _0x4badb4 ? (Ho(_0x459922, _0x25d914, _0x4badb4), _0x4badb4) : null;
}
function Ko(_0x9ba551, _0x503b76, _0x3bdc38) {
  let _0x504cfa = Go(_0x9ba551, _0x503b76.subUnitId);
  if (!_0x504cfa) return false;
  let _0x1fe53e = Wo(_0x503b76.element, _0x503b76.transform);
  if (_0x504cfa.elements[_0x1fe53e.id]) return false;
  if (
    ((_0x504cfa.elements = {
      ..._0x504cfa.elements,
      [_0x1fe53e.id]: _0x1fe53e,
    }),
    !_0x504cfa.elementOrder["includes"](_0x1fe53e.id))
  ) {
    let _0x27b068 = [..._0x504cfa.elementOrder],
      _0xb9258d =
        _0x3bdc38 === undefined
          ? _0x27b068.length
          : Math.max(0, Math.min(_0x3bdc38, _0x27b068.length));
    (_0x27b068.splice(_0xb9258d, 0, _0x1fe53e.id),
      (_0x504cfa.elementOrder = _0x27b068));
  }
  return true;
}
function qo(_0x22ddb3, _0x4024d0, _0x4a9072, _0x17cf62) {
  let _0x1ef156 = Go(_0x22ddb3, _0x4024d0.subUnitId);
  return !_0x1ef156 ||
    !_0x1ef156.elements[_0x4024d0.element["id"]] ||
    _0x4a9072.id !== _0x4024d0.element["id"]
    ? false
    : ((_0x1ef156.elements = {
        ..._0x1ef156.elements,
        [_0x4024d0.element["id"]]: Wo(_0x4a9072, _0x17cf62),
      }),
      true);
}
function Jo(_0x41143b, _0x2d9fd8) {
  let _0x58d4b7 = Go(_0x41143b, _0x2d9fd8.subUnitId);
  if (!_0x58d4b7 || !_0x58d4b7.elements[_0x2d9fd8.element["id"]]) return false;
  let _0x1359e1 = { ..._0x58d4b7.elements };
  return (
    delete _0x1359e1[_0x2d9fd8.element["id"]],
    (_0x58d4b7.elements = _0x1359e1),
    (_0x58d4b7.elementOrder = _0x58d4b7.elementOrder["filter"](
      (_0x2f98d5) => _0x2f98d5 !== _0x2d9fd8.element["id"],
    )),
    true
  );
}
function Yo(_0x2c63a7, _0x3f6f60) {
  if (_0x3f6f60.length === 0) return false;
  let _0x2039c7 = Go(_0x2c63a7, _0x3f6f60[0].subUnitId);
  if (!_0x2039c7) return false;
  let _0x3bb456 = new Set();
  if (
    (_0x3f6f60.forEach((_0x932da0) => {
      _0x2039c7.elements[_0x932da0.element["id"]] &&
        _0x3bb456.add(_0x932da0.element["id"]);
    }),
    _0x3bb456.size === 0)
  )
    return false;
  let _0x36d96f = { ..._0x2039c7.elements };
  return (
    _0x3bb456.forEach((_0x1e6a4a) => delete _0x36d96f[_0x1e6a4a]),
    (_0x2039c7.elements = _0x36d96f),
    (_0x2039c7.elementOrder = _0x2039c7.elementOrder["filter"](
      (_0x44b2a1) => !_0x3bb456.has(_0x44b2a1),
    )),
    true
  );
}
function Xo(_0x2518d0, _0xe945e6, _0x5a1f3f) {
  let _0x4276de = Go(_0x2518d0, _0xe945e6);
  if (!_0x4276de) return false;
  let _0x323ab2 = new Set(_0x4276de.elementOrder);
  return _0x323ab2.size !== _0x5a1f3f.length ||
    _0x5a1f3f.some((_0x1340a3) => !_0x323ab2.has(_0x1340a3))
    ? false
    : ((_0x4276de.elementOrder = [..._0x5a1f3f]), true);
}
function Zo(_0x448517, _0x5f1d59) {
  return _0x5f1d59
    ? {
        ..._0x448517,
        transform: {
          ..._0x448517.transform,
          left: _0x5f1d59.left ?? _0x448517.transform["left"],
          top: _0x5f1d59.top ?? _0x448517.transform["top"],
          width: _0x5f1d59.width ?? _0x448517.transform["width"],
          height: _0x5f1d59.height ?? _0x448517.transform["height"],
          ...(_0x5f1d59.angle === undefined
            ? null
            : { rotation: _0x5f1d59.angle }),
          ...(_0x5f1d59.flipX === undefined
            ? null
            : { flipX: _0x5f1d59.flipX }),
          ...(_0x5f1d59.flipY === undefined
            ? null
            : { flipY: _0x5f1d59.flipY }),
        },
      }
    : _0x448517;
}
const $ = {
    id: "board.mutation.update-element",
    type: _0x3c65b3.MUTATION,
    handler: (_0x58a2d3, _0x3abb73) => {
      var _0x55dfbe;
      let {
          unitId: _0x3e4e80,
          subUnitId: _0x2c548d,
          elementId: _0x53ac37,
          element: _0x522240,
          transform: _0xec59fb,
          isRealtimePreview: _0x2fc1f7,
          allowInactiveTarget: _0x4512e1,
          allowLockedTarget: _0x34faed,
          formulaLastValueGuard: _0x19bef2,
        } = _0x3abb73,
        _0x1174eb = _0x3abb73.allowPendingMembershipLockedCoverage;
      if (!_0x3abb73.elementId || _0x522240.id !== _0x53ac37) return false;
      let _0x23c3a9 = X(_0x522240),
        _0xb9562f = _0x58a2d3
          .get(_0x5c9e00)
          .getUnit(_0x3e4e80, _0x9aeb0c.UNIVER_BOARD);
      if (!_0xb9562f) return false;
      let _0x1275cf = _0x58a2d3.get(L),
        _0x5b1138 = _0x1275cf.getElementByParam({
          unitId: _0x3e4e80,
          subUnitId: _0x2c548d,
          elementId: _0x53ac37,
        });
      if (!_0x5b1138) return false;
      let _0x558017 = _0x5b1138,
        _0x398e19 = _0x558017.element,
        _0x3534b5 =
          _0x398e19.type === M.Shape
            ? (_0x55dfbe = _0x398e19.shapeData["formulaBinding"]) == null
              ? undefined
              : _0x55dfbe.formula
            : undefined;
      if (
        !_0x54b7ce(
          _0x58a2d3,
          {
            hostType: _0x9aeb0c.UNIVER_BOARD,
            unitId: _0x3e4e80,
            subUnitId: _0x2c548d,
            shapeId: _0x53ac37,
          },
          _0x3534b5,
          _0x19bef2,
        )
      )
        return true;
      let _0x5c0e31 = Zo(_0x23c3a9, _0xec59fb);
      if (
        !jo(
          _0x1275cf.getElementData(_0x3e4e80, _0x2c548d),
          _0x558017.element,
          _0x5c0e31,
          _0xec59fb,
          {
            allowInactiveTarget: _0x4512e1,
            allowLockedTarget: _0x34faed,
            allowPendingMembershipLockedCoverage: _0x1174eb,
          },
        )
      )
        return false;
      let _0x42f7d7 = {
        ..._0x558017,
        element: _0x5c0e31,
        transform: _0xec59fb ?? _0x558017.transform,
      };
      if (_0x2fc1f7) return true;
      if (!qo(_0xb9562f, _0x558017, _0x5c0e31, _0xec59fb)) return false;
      let _0x2cc01a = Ea(_0x1275cf.getBatchUpdateElementOp([_0x42f7d7]));
      return (
        _0x1275cf.applyElementJson1(_0x3e4e80, _0x2c548d, _0x2cc01a.redo),
        _0x1275cf.updateElementNotification(_0x2cc01a.objects),
        true
      );
    },
  },
  Qo = {
    id: "board.command.normalize-connector-routing",
    type: _0x3c65b3.COMMAND,
    handler: (_0x22fb9d, _0x112d67) => {
      if (
        !(_0x112d67 != null && _0x112d67.unitId) ||
        !_0x112d67.subUnitId ||
        _0x112d67.connectorIds["length"] === 0
      )
        return false;
      let _0x2de1cf = _0x22fb9d
          .get(L)
          .getElementData(_0x112d67.unitId, _0x112d67.subUnitId),
        _0x5e9966 = [],
        _0x2d1031 = [],
        _0x57bf6a = [],
        _0x52e4ca = [],
        _0x57b97c = [];
      for (let _0x33ef65 of Array.from(
        new Set(_0x112d67.connectorIds),
      ).sort()) {
        var _0x58df3d, _0x21e435;
        let _0x6e04a7 = _0x2de1cf[_0x33ef65];
        if (
          !_0x6e04a7 ||
          _0x6e04a7.element["type"] !== M.Connector ||
          _0x6e04a7.element["locked"] === true
        ) {
          _0x52e4ca.push(_0x33ef65);
          continue;
        }
        let _0x4e1b87 = _0x6e04a7.element;
        if (
          _0x4e1b87.connectorData["routing"] === "orthogonal" &&
          _0x4e1b87.connectorData["routingMode"] === "auto" &&
          !(
            (_0x58df3d = _0x4e1b87.connectorData["waypoints"]) != null &&
            _0x58df3d.length
          ) &&
          !(
            (_0x21e435 = _0x4e1b87.connectorData["orthogonalData"]) != null &&
            (_0x21e435 = _0x21e435.routePoints) != null &&
            _0x21e435.length
          ) &&
          _0x4e1b87.connectorData["curveData"] === undefined
        )
          continue;
        let _0x201033 = _0x381a86.deepClone(_0x4e1b87);
        ((_0x201033.connectorData["routing"] = "orthogonal"),
          (_0x201033.connectorData["routingMode"] = "auto"),
          delete _0x201033.connectorData["waypoints"],
          delete _0x201033.connectorData["orthogonalData"],
          delete _0x201033.connectorData["curveData"],
          _0x5e9966.push({
            id: $.id,
            params: {
              unitId: _0x112d67.unitId,
              subUnitId: _0x112d67.subUnitId,
              elementId: _0x33ef65,
              element: _0x201033,
              transform: fi(_0x201033.transform),
            },
          }),
          _0x2d1031.unshift({
            id: $.id,
            params: {
              unitId: _0x112d67.unitId,
              subUnitId: _0x112d67.subUnitId,
              elementId: _0x33ef65,
              element: _0x381a86.deepClone(_0x4e1b87),
              transform: _0x6e04a7.transform
                ? { ..._0x6e04a7.transform }
                : _0x6e04a7.transform,
            },
          }),
          _0x57bf6a.push(_0x33ef65),
          _0x57b97c.push(...$o(_0x2de1cf, _0x4e1b87)));
      }
      return _0x5e9966.length === 0
        ? {
            changedConnectorIds: _0x57bf6a,
            skippedElementIds: _0x52e4ca,
            affectedBounds: ts(_0x57b97c),
          }
        : _0x1c1693(_0x5e9966, _0x22fb9d.get(_0x3243d1)).result
          ? (_0x22fb9d
              .get(_0x3cfbb3)
              .pushUndoRedo({
                unitID: _0x112d67.unitId,
                redoMutations: _0x5e9966,
                undoMutations: _0x2d1031,
              }),
            {
              changedConnectorIds: _0x57bf6a,
              skippedElementIds: _0x52e4ca,
              affectedBounds: ts(_0x57b97c),
            })
          : false;
    },
  };
function $o(_0x5e8fc, _0x4abb2f) {
  let _0x551b53 = [],
    _0x18fc87 = U(_0x5e8fc, _0x4abb2f.id);
  _0x18fc87 &&
    (_0x18fc87.width > 1 || _0x18fc87.height > 1) &&
    _0x551b53.push(_0x18fc87);
  for (let _0x1c51dd of [
    _0x4abb2f.connectorData["start"],
    _0x4abb2f.connectorData["end"],
  ]) {
    let _0x4f2c4c = es(_0x5e8fc, _0x1c51dd);
    _0x4f2c4c && _0x551b53.push(_0x4f2c4c);
  }
  return _0x551b53;
}
function es(_0x1e2846, _0x253c5d) {
  return _0x253c5d.kind === "free"
    ? { left: _0x253c5d.x, top: _0x253c5d.y, width: 1, height: 1 }
    : U(_0x1e2846, _0x253c5d.shapeId);
}
function ts(_0x597e69) {
  if (_0x597e69.length === 0) return null;
  let _0x4b747a = Math.min(..._0x597e69.map((_0xaa87fe) => _0xaa87fe.left)),
    _0x14bc80 = Math.min(..._0x597e69.map((_0x453d84) => _0x453d84.top)),
    _0x594771 = Math.max(
      ..._0x597e69.map((_0x7c69ee) => _0x7c69ee.left + _0x7c69ee.width),
    ),
    _0x4f6c21 = Math.max(
      ..._0x597e69.map((_0x223474) => _0x223474.top + _0x223474.height),
    );
  return {
    left: _0x4b747a,
    top: _0x14bc80,
    width: _0x594771 - _0x4b747a,
    height: _0x4f6c21 - _0x14bc80,
  };
}
function ns(_0xa2815d, _0x27c6b6, _0x501ad8) {
  var _0x31ce9e, _0x2349c7;
  let _0x558b98 =
      (_0x31ce9e = H(_0xa2815d, _0x501ad8)) == null
        ? undefined
        : _0x31ce9e.worldTransform,
    _0x1ba024 =
      (_0x2349c7 = H(_0x27c6b6, _0x501ad8)) == null
        ? undefined
        : _0x2349c7.worldTransform;
  return !_0x558b98 || !_0x1ba024
    ? false
    : _0x558b98.left !== _0x1ba024.left ||
        _0x558b98.top !== _0x1ba024.top ||
        _0x558b98.width !== _0x1ba024.width ||
        _0x558b98.height !== _0x1ba024.height ||
        (_0x558b98.rotation ?? 0) !== (_0x1ba024.rotation ?? 0);
}
function rs(_0x2947e8, _0x34c454, _0x2cb429) {
  let _0x496fe7 = new Set();
  return (
    _0x2cb429.forEach((_0xd40933) => {
      ns(_0x2947e8, _0x34c454, _0xd40933) && _0x496fe7.add(_0xd40933);
    }),
    _0x496fe7.size === 0 ||
      Object.values(_0x34c454).forEach((_0x22a4dc) => {
        _0x496fe7.has(_0x22a4dc.elementId) ||
          (V(_0x34c454, _0x22a4dc.elementId).some((_0x3e0bdd) =>
            _0x496fe7.has(_0x3e0bdd),
          ) &&
            ns(_0x2947e8, _0x34c454, _0x22a4dc.elementId) &&
            _0x496fe7.add(_0x22a4dc.elementId));
      }),
    _0x496fe7
  );
}
function is(_0x3629e3, _0x35223e, _0x54dec0) {
  let _0xeef266 = new Set();
  return (
    _0x54dec0.forEach((_0x1d0af9) => {
      var _0x55f237, _0x4f82c3;
      let _0x4a7544 =
          (_0x55f237 = _0x3629e3[_0x1d0af9]) == null
            ? undefined
            : _0x55f237.element,
        _0x49cd0e =
          (_0x4f82c3 = _0x35223e[_0x1d0af9]) == null
            ? undefined
            : _0x4f82c3.element;
      _0x4a7544 &&
        _0x49cd0e &&
        (_0x4a7544.parentId !== _0x49cd0e.parentId ||
          _0x4a7544.laneId !== _0x49cd0e.laneId) &&
        _0xeef266.add(_0x1d0af9);
    }),
    _0xeef266.size === 0 ||
      Object.values(_0x35223e).forEach((_0x470745) => {
        _0xeef266.has(_0x470745.elementId) ||
          (V(_0x35223e, _0x470745.elementId).some((_0x230b44) =>
            _0xeef266.has(_0x230b44),
          ) &&
            _0xeef266.add(_0x470745.elementId));
      }),
    _0xeef266
  );
}
function as(_0x288b47, _0x1d657a, _0x22a0f8) {
  return (
    _0x22a0f8.has(_0x1d657a) ||
    Qa(_0x288b47).some((_0x28d3ac) => _0x22a0f8.has(_0x28d3ac))
  );
}
function os(_0x43eb15, _0x183e29, _0x50e796) {
  let _0x344abc = new Set();
  return (
    _0x50e796.forEach((_0x270fc4) => {
      let _0x253b01 = _0x43eb15[_0x270fc4],
        _0x3c86a8 = _0x183e29[_0x270fc4];
      !Q(_0x253b01) ||
        !Q(_0x3c86a8) ||
        ((JSON.stringify(_0x253b01.element["connectorData"].start) !==
          JSON.stringify(_0x3c86a8.element["connectorData"].start) ||
          JSON.stringify(_0x253b01.element["connectorData"].end) !==
            JSON.stringify(_0x3c86a8.element["connectorData"].end) ||
          JSON.stringify(_0x253b01.element["connectorData"].waypoints) !==
            JSON.stringify(_0x3c86a8.element["connectorData"].waypoints) ||
          JSON.stringify(_0x253b01.element["connectorData"].orthogonalData) !==
            JSON.stringify(_0x3c86a8.element["connectorData"].orthogonalData) ||
          JSON.stringify(_0x253b01.element["connectorData"].curveData) !==
            JSON.stringify(_0x3c86a8.element["connectorData"].curveData)) &&
          _0x344abc.add(_0x270fc4));
    }),
    _0x344abc
  );
}
function ss(_0x31b977) {
  var _0x416a77, _0x4b8148, _0x393e47, _0x44a4dd;
  return (
    _0x31b977.connectorData["start"].kind === "free" ||
    _0x31b977.connectorData["end"].kind === "free" ||
    ((_0x416a77 = _0x31b977.connectorData["waypoints"]) == null
      ? undefined
      : _0x416a77.some((_0x540721) => _0x540721.kind === "manual")) === true ||
    ((_0x4b8148 = _0x31b977.connectorData["orthogonalData"]) == null ||
    (_0x4b8148 = _0x4b8148.routePoints) == null
      ? undefined
      : _0x4b8148.some((_0x56909a) => _0x56909a.kind === "manual")) === true ||
    ((_0x393e47 = _0x31b977.connectorData["curveData"]) == null ||
    (_0x393e47 = _0x393e47.anchors) == null
      ? undefined
      : _0x393e47.some((_0x1f3dff) => _0x1f3dff.kind === "manual")) === true ||
    ((_0x44a4dd = _0x31b977.connectorData["curveData"]) == null ||
    (_0x44a4dd = _0x44a4dd.controls) == null
      ? undefined
      : _0x44a4dd.some((_0x2bc8d2) => _0x2bc8d2.kind === "manual")) === true
  );
}
function cs(_0x2bc7a9, _0x10f9c0) {
  let _0x3d713d =
      typeof _0x10f9c0.rotation == "number"
        ? _0x10f9c0.rotation
        : _0x10f9c0.angle,
    _0x58571e = {
      ..._0x2bc7a9.transform,
      left: _0x10f9c0.left,
      top: _0x10f9c0.top,
      width: _0x10f9c0.width,
      height: _0x10f9c0.height,
      ...(_0x3d713d === undefined ? null : { rotation: _0x3d713d }),
      ...(_0x10f9c0.flipX === undefined ? null : { flipX: _0x10f9c0.flipX }),
      ...(_0x10f9c0.flipY === undefined ? null : { flipY: _0x10f9c0.flipY }),
    };
  return { ..._0x2bc7a9, transform: _0x58571e };
}
function ls(_0x196c1e) {
  let _0x3fdf9b = new Map(
      _0x196c1e.map((_0x538d7d) => [
        _0x538d7d.redoMutation["params"].elementId,
        _0x538d7d,
      ]),
    ),
    _0xd08bb9 = (_0x3b274d, _0x14a9d4) => {
      let _0x2bb7e0 = new Set(),
        _0x10f4cf = [_0x14a9d4];
      for (; _0x10f4cf.length > 0;) {
        var _0x58dadf, _0x2c4022;
        let _0x4cc3b5 = _0x10f4cf.shift();
        if (!_0x4cc3b5 || _0x2bb7e0.has(_0x4cc3b5)) continue;
        _0x2bb7e0.add(_0x4cc3b5);
        let _0x1da514 = _0x3fdf9b.get(_0x4cc3b5),
          _0x193e18 =
            _0x1da514 == null ||
            (_0x58dadf = _0x1da514.redoMutation["params"]) == null
              ? undefined
              : _0x58dadf.element,
          _0x3f8217 =
            _0x1da514 == null ||
            (_0x2c4022 = _0x1da514.undoMutation["params"]) == null
              ? undefined
              : _0x2c4022.element,
          _0x5053b1 = [
            _0x193e18 == null ? undefined : _0x193e18.parentId,
            _0x3f8217 == null ? undefined : _0x3f8217.parentId,
          ].filter((_0x9929ea) => !!_0x9929ea);
        if (_0x5053b1.includes(_0x3b274d)) return true;
        _0x10f4cf.push(..._0x5053b1);
      }
      return false;
    };
  return (_0x4530f4, _0x297832, _0x567879) => {
    let _0x197426 = _0x4530f4.redoMutation["params"].elementId,
      _0x5f09ff = _0x297832.redoMutation["params"].elementId;
    return _0xd08bb9(_0x197426, _0x5f09ff)
      ? _0x567879
        ? 1
        : -1
      : _0xd08bb9(_0x5f09ff, _0x197426)
        ? _0x567879
          ? -1
          : 1
        : 0;
  };
}
function us(_0x831327) {
  let _0x199741 = ls(_0x831327);
  return [..._0x831327].sort((_0x3f5f92, _0x1b4179) =>
    _0x199741(_0x3f5f92, _0x1b4179, true),
  );
}
function ds(_0xd750c2) {
  let _0x27b678 = ls(_0xd750c2);
  return [..._0xd750c2].sort((_0x5d072d, _0x4e66d8) =>
    _0x27b678(_0x5d072d, _0x4e66d8, false),
  );
}
function fs(_0x31fe4f, _0x1cc06e) {
  if (!_0x1cc06e || _0x1cc06e.updates["length"] === 0) return false;
  let {
      historyId: _0x205a9a,
      unitId: _0x165df6,
      subUnitId: _0x2d6ac2,
      updates: _0x4a89ee,
    } = _0x1cc06e,
    _0x560ffa = _0x31fe4f.get(L),
    _0x1a6d9a = [],
    _0x58c30a = new Map(),
    _0x15c554 = new Set(),
    _0x347cd2 = _0x560ffa.getElementData(_0x165df6, _0x2d6ac2),
    _0x2554fe = { ..._0x347cd2 };
  for (let _0x260aef of _0x4a89ee) {
    if (
      !_0x260aef.elementId ||
      _0x15c554.has(_0x260aef.elementId) ||
      (_0x15c554.add(_0x260aef.elementId),
      _0x260aef.element["id"] !== _0x260aef.elementId)
    )
      return false;
    let _0x57dfc5 = _0x560ffa.getElementByParam({
      unitId: _0x165df6,
      subUnitId: _0x2d6ac2,
      elementId: _0x260aef.elementId,
    });
    if (
      !_0x57dfc5 ||
      _0x260aef.element["type"] !== _0x57dfc5.element["type"] ||
      _0x57dfc5.element["locked"] === true
    )
      return false;
    let _0xe0666c = X(_0x381a86.deepClone(_0x260aef.element)),
      _0x2826b7 = _0x260aef.transform
        ? cs(_0xe0666c, _0x260aef.transform)
        : _0xe0666c,
      _0x1160d7 = {
        unitId: _0x165df6,
        subUnitId: _0x2d6ac2,
        ..._0x260aef,
        element: _0x2826b7,
      };
    _0x260aef.transform && (_0x1160d7.transform = { ..._0x260aef.transform });
    let _0x30c6e0 = { id: $.id, params: _0x1160d7 },
      _0x1e1e27 = {
        id: $.id,
        params: {
          unitId: _0x165df6,
          subUnitId: _0x2d6ac2,
          elementId: _0x260aef.elementId,
          element: X(_0x381a86.deepClone(_0x57dfc5.element)),
          transform: _0x57dfc5.transform
            ? { ..._0x57dfc5.transform }
            : _0x57dfc5.transform,
          ...(_0x2826b7.locked === true ? { allowLockedTarget: true } : null),
          ...(_0x2826b7.visible === false || _0x2826b7.selectable === false
            ? { allowInactiveTarget: true }
            : null),
        },
      };
    (_0x1a6d9a.push({ redoMutation: _0x30c6e0, undoMutation: _0x1e1e27 }),
      _0x58c30a.set(_0x260aef.elementId, {
        redoMutation: _0x30c6e0,
        undoMutation: _0x1e1e27,
      }),
      (_0x2554fe[_0x260aef.elementId] = {
        ..._0x57dfc5,
        element: _0x1160d7.element,
        transform: _0x1160d7.transform ?? _0x57dfc5.transform,
      }));
  }
  let _0x1302fd = rs(_0x347cd2, _0x2554fe, _0x15c554),
    _0x571f76 = is(_0x347cd2, _0x2554fe, _0x15c554),
    _0x376a06 = os(_0x347cd2, _0x2554fe, _0x15c554),
    _0x4f1b86 = false;
  if (
    (Object.values(_0x2554fe).forEach((_0x1407bd) => {
      var _0x35dfb5;
      if (
        (_0x1302fd.size === 0 &&
          _0x571f76.size === 0 &&
          _0x376a06.size === 0) ||
        !Q(_0x1407bd) ||
        (_0x15c554.has(_0x1407bd.elementId) &&
          !_0x376a06.has(_0x1407bd.elementId))
      )
        return;
      let _0x219941 = as(_0x1407bd.element, _0x1407bd.elementId, _0x1302fd),
        _0x395d94 = as(_0x1407bd.element, _0x1407bd.elementId, _0x571f76),
        _0xc672bf = _0x376a06.has(_0x1407bd.elementId);
      if (!_0x219941 && !_0x395d94 && !_0xc672bf) return;
      let _0x552bba = _0x1407bd.element,
        _0x1349af = _0x58c30a.get(_0x1407bd.elementId),
        _0x4274a7 =
          _0x1349af == null ? undefined : _0x1349af.redoMutation["params"],
        _0xb0d744 = Qa(_0x552bba).some((_0x4c86d7) => _0x1302fd.has(_0x4c86d7)),
        _0x5e314a =
          (_0x35dfb5 = H(_0x2554fe, _0x1407bd.elementId)) == null
            ? undefined
            : _0x35dfb5.worldTransform;
      if (
        (_0xc672bf &&
          ((_0x552bba = di(_0x552bba, new Set(Qa(_0x552bba)), _0x2554fe)),
          _0x4274a7 != null && _0x4274a7.transform && _0xb0d744
            ? ((_0x552bba = cs(_0x552bba, _0x4274a7.transform)),
              (_0x5e314a = _0x552bba.transform))
            : ((_0x5e314a = li(_0x552bba)),
              (_0x552bba = { ..._0x552bba, transform: _0x5e314a }))),
        _0x219941 &&
          _0x1302fd.has(_0x1407bd.elementId) &&
          ss(_0x552bba) &&
          !_0xc672bf &&
          !(_0x1349af && _0xb0d744))
      ) {
        var _0x14e8c1;
        let _0x2223df =
          (_0x14e8c1 = H(_0x347cd2, _0x1407bd.elementId)) == null
            ? undefined
            : _0x14e8c1.worldTransform;
        if (_0x2223df && _0x5e314a) {
          let _0xb971b2 = {
            x: (_0x5e314a.left ?? 0) - (_0x2223df.left ?? 0),
            y: (_0x5e314a.top ?? 0) - (_0x2223df.top ?? 0),
          };
          (_0xb971b2.x !== 0 || _0xb971b2.y !== 0) &&
            (_0x552bba = ri(_0x552bba, _0xb971b2));
        }
      }
      let _0xd99ccd = _0x552bba;
      _0x219941 &&
        ((_0x552bba = di(_0x552bba, _0x1302fd, _0x2554fe)),
        _0x552bba !== _0xd99ccd && (_0x5e314a = _0x552bba.transform));
      let _0x5d7d00 = oo(_0x2554fe, _0x552bba);
      if (
        _0xc672bf ||
        _0x552bba.parentId !== _0x5d7d00.parentId ||
        _0x552bba.laneId !== _0x5d7d00.laneId
      ) {
        if (!_0x5e314a) return;
        let _0x117f65 = W(_0x2554fe, {
          parentId: _0x5d7d00.parentId,
          worldTransform: _0x5e314a,
        });
        _0x552bba = cs(
          {
            ..._0x552bba,
            parentId: _0x5d7d00.parentId,
            laneId: _0x5d7d00.laneId,
          },
          _0x117f65,
        );
      }
      if (_0x552bba === _0x1407bd.element) return;
      if (_0x1407bd.element["locked"] === true) {
        _0x4f1b86 = true;
        return;
      }
      if (_0x1349af) {
        let _0x1000d7 = _0x1349af.redoMutation["params"];
        ((_0x1000d7.element = _0x381a86.deepClone(_0x552bba)),
          (_0x1000d7.transform = fi(_0x552bba.transform)),
          (_0x2554fe[_0x1407bd.elementId] = {
            ..._0x1407bd,
            element: _0x552bba,
            transform: _0x1000d7.transform,
          }));
        return;
      }
      let _0xe1e6ad = {
          id: $.id,
          params: {
            unitId: _0x165df6,
            subUnitId: _0x2d6ac2,
            elementId: _0x1407bd.elementId,
            element: _0x381a86.deepClone(_0x552bba),
            transform: fi(_0x552bba.transform),
          },
        },
        _0x3b26bf = {
          id: $.id,
          params: {
            unitId: _0x165df6,
            subUnitId: _0x2d6ac2,
            elementId: _0x1407bd.elementId,
            element: _0x381a86.deepClone(_0x1407bd.element),
            transform: _0x1407bd.transform
              ? { ..._0x1407bd.transform }
              : _0x1407bd.transform,
          },
        };
      (_0x1a6d9a.push({ redoMutation: _0xe1e6ad, undoMutation: _0x3b26bf }),
        (_0x2554fe[_0x1407bd.elementId] = {
          ..._0x1407bd,
          element: _0x552bba,
          transform: fi(_0x552bba.transform),
        }));
    }),
    _0x4f1b86)
  )
    return false;
  let _0x272a11 = us(_0x1a6d9a).map((_0x2c2f3f) => _0x2c2f3f.redoMutation),
    _0x3e3838 = ds(_0x1a6d9a).map((_0x165b99) => _0x165b99.undoMutation);
  if (
    !Mo(_0x347cd2, _0x272a11) ||
    !_0x1c1693(_0x272a11, _0x31fe4f.get(_0x3243d1)).result
  )
    return false;
  let _0x46584f = _0x31fe4f.get(_0x3cfbb3),
    _0x4a60f1 = _0x205a9a ? _0x46584f.pitchTopUndoElement() : null,
    _0x2426f4 =
      _0x4a60f1 && _0x4a60f1.id === _0x205a9a && _0x4a60f1.unitID === _0x165df6
        ? _0x4a60f1
        : null;
  return (
    _0x2426f4 && _0x46584f.popUndoToRedo(),
    _0x46584f.pushUndoRedo({
      ...(_0x205a9a ? { id: _0x205a9a } : null),
      unitID: _0x165df6,
      redoMutations: _0x2426f4
        ? [..._0x2426f4.redoMutations, ..._0x272a11]
        : _0x272a11,
      undoMutations: _0x2426f4
        ? [..._0x3e3838, ..._0x2426f4.undoMutations]
        : _0x3e3838,
    }),
    true
  );
}
const ps = {
    id: "board.command.update-elements",
    type: _0x3c65b3.COMMAND,
    handler: fs,
  },
  ms = {
    id: "board.command.remove-connector-label",
    type: _0x3c65b3.COMMAND,
    handler: (_0x3aaf66, _0x572cf6) => {
      var _0x24ec31;
      if (!_0x572cf6) return false;
      let _0x234240 = _0x3aaf66.get(L).getElementByParam(_0x572cf6),
        _0x2caa04 = _0x234240 == null ? undefined : _0x234240.element;
      if (!_0x2caa04 || _0x2caa04.type !== M.Connector) return false;
      let _0x18320e = Ka(_0x2caa04.connectorData),
        _0x25346e =
          _0x572cf6.labelId ??
          ((_0x24ec31 = _0x18320e[0]) == null ? undefined : _0x24ec31.id);
      return !_0x25346e ||
        !_0x18320e.some((_0x229c68) => _0x229c68.id === _0x25346e)
        ? false
        : fs(_0x3aaf66, {
            unitId: _0x572cf6.unitId,
            subUnitId: _0x572cf6.subUnitId,
            updates: [
              {
                elementId: _0x572cf6.elementId,
                element: {
                  ..._0x2caa04,
                  connectorData: qa(
                    _0x2caa04.connectorData,
                    _0x18320e.filter((_0x4e0466) => _0x4e0466.id !== _0x25346e),
                  ),
                },
              },
            ],
          });
    },
  },
  hs = _0x127a62("board.table-adapter.service");
var gs = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x7ff11a) {
    return (
      this._adapters["push"](_0x7ff11a),
      _0x4c56f0(() => {
        let _0x4558ea = this._adapters["indexOf"](_0x7ff11a);
        _0x4558ea >= 0 && this._adapters["splice"](_0x4558ea, 1);
      })
    );
  }
  insertTable(_0x3c330e) {
    for (let _0x532df1 of this._adapters)
      if (_0x532df1.insertTable(_0x3c330e)) return true;
    return false;
  }
  getRemoveTableMutationInfos(_0x1baedd) {
    let _0x5b5d2a = { redoMutations: [], undoMutations: [] };
    for (let _0x3793e1 of this._adapters) {
      var _0x356e53;
      let _0x13b113 =
        (_0x356e53 = _0x3793e1.getRemoveTableMutationInfos) == null
          ? undefined
          : _0x356e53.call(_0x3793e1, _0x1baedd);
      _0x13b113 &&
        (_0x5b5d2a.redoMutations["push"](..._0x13b113.redoMutations),
        _0x5b5d2a.undoMutations["push"](..._0x13b113.undoMutations));
    }
    return _0x5b5d2a;
  }
  getSearchEntries(_0x52573b) {
    let _0x3de7b4 = [];
    for (let _0x5c7635 of this._adapters) {
      var _0x3b42b2;
      let _0x1fe1ad =
        (_0x3b42b2 = _0x5c7635.getSearchEntries) == null
          ? undefined
          : _0x3b42b2.call(_0x5c7635, _0x52573b);
      _0x1fe1ad && _0x3de7b4.push(..._0x1fe1ad);
    }
    return _0x3de7b4;
  }
};
function _s(_0x2902e2) {
  switch (_0x2902e2.type) {
    case M.Shape:
      return String(_0x2902e2.shapeData["shapeType"] ?? _0x2902e2.type);
    default:
      return _0x2902e2.type;
  }
}
function vs(_0x23922b) {
  return _0x23922b.name || _0x23922b.id;
}
function ys(_0x311ef4, _0xfedb72) {
  var _0x21bd16;
  return (
    ((_0x21bd16 = _0x311ef4.name) != null && _0x21bd16.trim()) ||
      (_0x311ef4.name = _0x5ac35f(
        _s(_0x311ef4),
        Array.from(_0xfedb72).map(vs),
      )),
    _0x311ef4
  );
}
function bs(_0x35e5a0, _0xd4f013) {
  let _0xd44156 = Array.from(_0xd4f013).map(vs);
  return _0x35e5a0.map((_0x2641cd) => {
    var _0x7752a3;
    let _0x2e238f =
      (_0x7752a3 = _0x2641cd.name) == null ? undefined : _0x7752a3.trim();
    return _0x2e238f
      ? (_0xd44156.push(_0x2e238f), _0x2641cd)
      : ((_0x2641cd.name = _0x5ac35f(_s(_0x2641cd), _0xd44156)),
        _0xd44156.push(_0x2641cd.name ?? _0x2641cd.id),
        _0x2641cd);
  });
}
function xs(_0xa0e67f, _0x12f335, _0x409773 = {}) {
  if (
    !ho(_0xa0e67f) ||
    (Aa(_0xa0e67f) && !_0x409773.allowEmbedAnchor) ||
    (Aa(_0xa0e67f) && (_0xa0e67f.parentId || _0xa0e67f.laneId)) ||
    (Aa(_0xa0e67f) &&
      ((_0xa0e67f.transform["rotation"] ?? 0) !== 0 ||
        _0xa0e67f.transform["flipX"] === true ||
        _0xa0e67f.transform["flipY"] === true)) ||
    (Aa(_0xa0e67f) &&
      Object.values(_0x12f335).some((_0x4495eb) =>
        ja(_0x4495eb.element, _0xa0e67f),
      )) ||
    !Ao(_0xa0e67f) ||
    !xo(_0x12f335, _0xa0e67f)
  )
    return false;
  if (!_0xa0e67f.parentId) return true;
  let _0x4ed8c7 = _0x12f335[_0xa0e67f.parentId],
    _0x187622 = _0x4ed8c7 == null ? undefined : _0x4ed8c7.element;
  if ((_0x187622 == null ? undefined : _0x187622.type) !== M.Container)
    return false;
  let _0x13bd6e = _0x187622.containerData["behavior"];
  return (!_0x409773.allowLockedParent &&
    (_0x4ed8c7.hidden === true ||
      _0x187622.visible === false ||
      _0x187622.locked === true ||
      _0x187622.selectable === false ||
      _0x13bd6e.membershipLocked)) ||
    (!_0x409773.allowLockedParent && ko(_0x12f335, _0xa0e67f)) ||
    !_0x13bd6e.acceptsChildren
    ? false
    : _0xa0e67f.type !== M.Container ||
        (_0x13bd6e.acceptsContainer && _0x13bd6e.allowNested);
}
const Ss = {
  id: "board.mutation.add-element",
  type: _0x3c65b3.MUTATION,
  handler: (_0x503379, _0x27c56c) => {
    let {
        unitId: _0x254c08,
        subUnitId: _0x59acb2,
        insertIndex: _0x49d011,
        allowLockedParent: _0x3f8f7e,
        allowEmbedAnchor: _0x4bff1b,
      } = _0x27c56c,
      _0x285314 = X(_0x27c56c.element),
      _0x57271b = _0x503379
        .get(_0x5c9e00)
        .getUnit(_0x254c08, _0x9aeb0c.UNIVER_BOARD);
    if (!_0x57271b) return false;
    let _0x26e78c = _0x503379.get(L),
      _0x3cfad5 = _0x26e78c.getElementData(_0x254c08, _0x59acb2);
    if (
      (Aa(_0x285314) &&
        Object.values(_0x26e78c.getElementDataForUnit(_0x254c08)).some(
          (_0x2c6ed7) =>
            Object.values(_0x2c6ed7.data).some((_0x1da517) =>
              ja(_0x1da517.element, _0x285314),
            ),
        )) ||
      !xs(_0x285314, _0x3cfad5, {
        allowLockedParent: _0x3f8f7e,
        allowEmbedAnchor: _0x4bff1b,
      })
    )
      return false;
    let _0x23f0eb = qt(
      _0x254c08,
      _0x59acb2,
      ys(
        _0x285314,
        Object.values(_0x3cfad5).map((_0x421368) => _0x421368.element),
      ),
      _0x57271b.getThemeData(),
    );
    if (!Ko(_0x57271b, _0x23f0eb, _0x49d011)) return false;
    let _0x3e622a = Ea(_0x26e78c.getBatchAddElementOp([_0x23f0eb]));
    return (
      _0x26e78c.applyElementJson1(_0x254c08, _0x59acb2, _0x3e622a.redo),
      _0x3e622a.objects["length"] > 0 &&
        _0x26e78c.addElementNotification(_0x3e622a.objects),
      true
    );
  },
};
function Cs(_0x3dc202, _0x48ae12, _0x2d2153, _0xd78fc5) {
  return _0x48ae12.some((_0x4419aa) => {
    var _0x14e3d5;
    return _0xd78fc5 && _0x4419aa === _0x2d2153
      ? false
      : ((_0x14e3d5 = _0x3dc202[_0x4419aa]) == null
          ? undefined
          : _0x14e3d5.element["locked"]) === true;
  });
}
const ws = {
  id: "board.mutation.remove-element",
  type: _0x3c65b3.MUTATION,
  handler: (_0x5741a4, _0x9e1b6c) => {
    var _0x49cef5;
    let {
      unitId: _0x74f73d,
      subUnitId: _0xaf84a0,
      elementId: _0x5865a1,
      allowLockedParent: _0x36057f,
      allowLockedTarget: _0x65ac8f,
    } = _0x9e1b6c;
    if (!_0x9e1b6c.elementId) return false;
    let _0x5a61db = _0x5741a4
      .get(_0x5c9e00)
      .getUnit(_0x74f73d, _0x9aeb0c.UNIVER_BOARD);
    if (!_0x5a61db) return false;
    let _0x4c2036 = _0x5741a4.get(L),
      _0x551f40 = _0x4c2036.getElementByParam({
        unitId: _0x74f73d,
        subUnitId: _0xaf84a0,
        elementId: _0x5865a1,
      });
    if (!_0x551f40) return false;
    let _0x437d27 = _0x551f40,
      _0x3fdb0e = _0x4c2036.getElementData(_0x74f73d, _0xaf84a0),
      _0x29c4aa = _0x437d27.element["parentId"]
        ? (_0x49cef5 = _0x3fdb0e[_0x437d27.element["parentId"]]) == null
          ? undefined
          : _0x49cef5.element
        : undefined;
    if (
      (!_0x36057f && ko(_0x3fdb0e, _0x437d27.element)) ||
      (!_0x36057f &&
        (_0x29c4aa == null ? undefined : _0x29c4aa.type) === M.Container &&
        _0x29c4aa.containerData["behavior"].membershipLocked)
    )
      return false;
    let _0x1c0fc2 = tn(
      _0x3fdb0e,
      _0x4c2036.getElementOrder(_0x74f73d, _0xaf84a0),
      [_0x5865a1],
    );
    if (
      (Object.values(_0x3fdb0e).forEach((_0x459510) => {
        !Q(_0x459510) ||
          _0x1c0fc2.includes(_0x459510.elementId) ||
          (Qa(_0x459510.element).some((_0x429f6a) =>
            _0x1c0fc2.includes(_0x429f6a),
          ) &&
            _0x1c0fc2.push(_0x459510.elementId));
      }),
      Cs(_0x3fdb0e, _0x1c0fc2, _0x5865a1, _0x65ac8f))
    )
      return false;
    let _0x5ccfc0 = (_0x1c0fc2.length > 0 ? _0x1c0fc2 : [_0x5865a1]).map(
        (_0x520584) => ({
          unitId: _0x74f73d,
          subUnitId: _0xaf84a0,
          elementId: _0x520584,
        }),
      ),
      _0x436a38 = Ea(_0x4c2036.getBatchRemoveElementOp(_0x5ccfc0)),
      _0x34f4e5 = _0x5ccfc0
        .map((_0x255c26) => _0x4c2036.getElementByParam(_0x255c26))
        .filter((_0x39b2d3) => !!_0x39b2d3)
        .map((_0xabc993) => _0xabc993);
    return Yo(_0x5a61db, _0x34f4e5.length > 0 ? _0x34f4e5 : [_0x437d27])
      ? (_0x4c2036.applyElementJson1(_0x74f73d, _0xaf84a0, _0x436a38.redo),
        _0x4c2036.removeElementNotification(_0x5ccfc0),
        true)
      : false;
  },
};
function Ts(_0x370dcc, _0x2ba1eb, _0xb2667c) {
  let _0x246ece = tn(_0x370dcc, [..._0x2ba1eb], [..._0xb2667c]),
    _0x16281e = new Set(_0x246ece);
  return (
    Object.values(_0x370dcc).forEach((_0x13f417) => {
      !Q(_0x13f417) ||
        _0x16281e.has(_0x13f417.elementId) ||
        (Qa(_0x13f417.element).some((_0x1b0544) => _0x16281e.has(_0x1b0544)) &&
          (_0x246ece.push(_0x13f417.elementId),
          _0x16281e.add(_0x13f417.elementId)));
    }),
    _0x246ece
  );
}
function Es(_0x5cd4bd, _0x135fee, _0x4ff93c) {
  var _0x30a216, _0x2f1480;
  let _0x345c1c =
      (_0x30a216 = _0x5cd4bd[_0x4ff93c]) == null
        ? undefined
        : _0x30a216.element,
    _0x37735d =
      _0x345c1c != null && _0x345c1c.parentId
        ? (_0x2f1480 = _0x5cd4bd[_0x345c1c.parentId]) == null
          ? undefined
          : _0x2f1480.element
        : undefined;
  return (
    !_0x37735d ||
    _0x37735d.type !== M.Container ||
    !_0x37735d.containerData["behavior"].membershipLocked ||
    _0x135fee.has(_0x37735d.id)
  );
}
function Ds(_0xc530a9, _0x108834) {
  let _0x163fe5 = new Set(_0x108834),
    _0x457e83 = new Map(
      _0x108834.map((_0x3e94bc, _0x489777) => [_0x3e94bc, _0x489777]),
    ),
    _0x3e139e = new Map(),
    _0x2794f5 = (_0x48ed17, _0x535beb = new Set()) => {
      var _0x42f21a;
      let _0x573221 = _0x3e139e.get(_0x48ed17);
      if (_0x573221 !== undefined) return _0x573221;
      if (_0x535beb.has(_0x48ed17)) return (_0x3e139e.set(_0x48ed17, 0), 0);
      _0x535beb.add(_0x48ed17);
      let _0x54391b =
          (_0x42f21a = _0xc530a9[_0x48ed17]) == null
            ? undefined
            : _0x42f21a.element["parentId"],
        _0xdabb31 =
          _0x54391b && _0x163fe5.has(_0x54391b)
            ? _0x2794f5(_0x54391b, _0x535beb) + 1
            : 0;
      return (
        _0x535beb.delete(_0x48ed17),
        _0x3e139e.set(_0x48ed17, _0xdabb31),
        _0xdabb31
      );
    };
  return [..._0x108834].sort((_0x1566c4, _0x9746ff) => {
    let _0x4957f7 = _0x2794f5(_0x1566c4) - _0x2794f5(_0x9746ff);
    return _0x4957f7 === 0
      ? (_0x457e83.get(_0x1566c4) ?? 0) - (_0x457e83.get(_0x9746ff) ?? 0)
      : _0x4957f7;
  });
}
function Os(_0x14d2a8, _0x2cadf2, _0x2271f7) {
  let _0x49cf00 = new Set(_0x2271f7),
    _0x1ccf42 = new Map(),
    _0xd48c0b = (_0x498c15, _0x57fc0c = new Set()) => {
      var _0x1f97b5;
      let _0x863067 = _0x1ccf42.get(_0x498c15);
      if (_0x863067 !== undefined) return _0x863067;
      if (_0x57fc0c.has(_0x498c15)) return (_0x1ccf42.set(_0x498c15, 0), 0);
      _0x57fc0c.add(_0x498c15);
      let _0x432491 =
          (_0x1f97b5 = _0x14d2a8[_0x498c15]) == null
            ? undefined
            : _0x1f97b5.element["parentId"],
        _0x5dbb67 =
          _0x432491 && _0x49cf00.has(_0x432491)
            ? _0xd48c0b(_0x432491, _0x57fc0c) + 1
            : 0;
      return (
        _0x57fc0c.delete(_0x498c15),
        _0x1ccf42.set(_0x498c15, _0x5dbb67),
        _0x5dbb67
      );
    };
  return [..._0x2271f7].sort((_0x8cc13b, _0x107838) => {
    let _0x43a8d9 = _0xd48c0b(_0x8cc13b) - _0xd48c0b(_0x107838);
    return _0x43a8d9 === 0
      ? (_0x2cadf2.get(_0x8cc13b) ?? 2 ** 53 - 1) -
          (_0x2cadf2.get(_0x107838) ?? 2 ** 53 - 1)
      : _0x43a8d9;
  });
}
const ks = {
  id: "board.operation.remove-elements",
  type: _0x3c65b3.OPERATION,
  handler: (_0x519f0e, _0x46800a) => {
    if (!_0x46800a || _0x46800a.elementIds["length"] === 0) return false;
    let {
        unitId: _0x24face,
        subUnitId: _0x3c68d3,
        elementIds: _0x18574d,
      } = _0x46800a,
      _0x284426 = _0x519f0e.get(L),
      _0x34976f = _0x284426.getElementData(_0x24face, _0x3c68d3),
      _0x525866 = _0x284426.getElementOrder(_0x24face, _0x3c68d3),
      _0x31783c = new Map();
    _0x525866.forEach((_0xf2c210, _0x38ebf1) =>
      _0x31783c.set(_0xf2c210, _0x38ebf1),
    );
    let _0x585bd4 = new Set(_0x18574d);
    if (
      _0x585bd4.size !== _0x18574d.length ||
      _0x18574d.some((_0x30c2bb) => !_0x34976f[_0x30c2bb])
    )
      return false;
    let _0x34778e = Os(_0x34976f, _0x31783c, Array.from(_0x585bd4));
    if (
      _0x34778e.some((_0x48b292) => {
        var _0x48f022;
        let _0x4f8de3 =
          (_0x48f022 = _0x34976f[_0x48b292]) == null
            ? undefined
            : _0x48f022.element;
        return (
          (_0x4f8de3 == null ? undefined : _0x4f8de3.locked) || Aa(_0x4f8de3)
        );
      })
    )
      return false;
    let _0x40f6a7 = new Set(),
      _0x28e28a = [];
    if (
      (_0x34778e.forEach((_0xcaac58) => {
        if (_0x40f6a7.has(_0xcaac58)) return;
        let _0x11e9f3 = Ts(_0x34976f, _0x525866, [_0xcaac58]);
        _0x11e9f3.length !== 0 &&
          (_0x28e28a.push(_0xcaac58),
          _0x11e9f3.forEach((_0x486f10) => _0x40f6a7.add(_0x486f10)));
      }),
      _0x28e28a.length === 0 ||
        Array.from(_0x40f6a7).some((_0x1b9fac) => {
          var _0x2e1fab;
          return (_0x2e1fab = _0x34976f[_0x1b9fac]) == null
            ? undefined
            : _0x2e1fab.element["locked"];
        }) ||
        !_0x28e28a.every((_0x2b3dfb) => Es(_0x34976f, _0x40f6a7, _0x2b3dfb)))
    )
      return false;
    let _0x55af5f = _0x525866.filter((_0x5e4fee) => _0x40f6a7.has(_0x5e4fee)),
      _0x596982 = Ds(_0x34976f, _0x55af5f),
      _0xa5f47 = _0x28e28a.map((_0x44d27c) => ({
        id: ws.id,
        params: {
          unitId: _0x24face,
          subUnitId: _0x3c68d3,
          elementId: _0x44d27c,
          elementType: _0x34976f[_0x44d27c].element["type"],
          ...(_0x34976f[_0x44d27c].element["type"] === M.Container
            ? {
                containerKind:
                  _0x34976f[_0x44d27c].element["containerData"].kind,
              }
            : {}),
        },
      })),
      _0x5a0dd3 = _0x596982.map((_0x1f07fb) => ({
        id: Ss.id,
        params: {
          unitId: _0x24face,
          subUnitId: _0x3c68d3,
          element: X(_0x381a86.deepClone(_0x34976f[_0x1f07fb].element)),
          insertIndex: _0x525866.indexOf(_0x1f07fb),
          ...(_0x34976f[_0x1f07fb].element["parentId"] &&
          _0x40f6a7.has(_0x34976f[_0x1f07fb].element["parentId"])
            ? { allowLockedParent: true }
            : {}),
        },
      })),
      _0x51d01c = _0x28e28a.map((_0x28df71, _0x1815a1) => {
        let _0x220b04 = Ts(_0x34976f, _0x525866, [_0x28df71]),
          _0x385caa = Ds(_0x34976f, _0x220b04);
        return {
          redoMutation: _0xa5f47[_0x1815a1],
          undoMutations: _0x385caa.map((_0x1bfa07) => ({
            id: Ss.id,
            params: {
              unitId: _0x24face,
              subUnitId: _0x3c68d3,
              element: X(_0x381a86.deepClone(_0x34976f[_0x1bfa07].element)),
              insertIndex: _0x525866.indexOf(_0x1bfa07),
              ...(_0x34976f[_0x1bfa07].element["parentId"] &&
              _0x220b04.includes(_0x34976f[_0x1bfa07].element["parentId"])
                ? { allowLockedParent: true }
                : {}),
            },
          })),
        };
      });
    if (!No(_0x34976f, _0xa5f47)) return false;
    let _0x58443b = _0x519f0e.get(hs),
      _0x1e9704 = [],
      _0x2e0bfc = [],
      _0x47eec5 = [];
    _0x55af5f.forEach((_0x59859c) => {
      let _0x21bca5 = _0x34976f[_0x59859c].element;
      if (_0x21bca5.type !== M.Table) return;
      let _0x590e99 = _0x58443b.getRemoveTableMutationInfos({
        unitId: _0x24face,
        subUnitId: _0x3c68d3,
        element: _0x21bca5,
      });
      (_0x1e9704.push(..._0x590e99.redoMutations),
        _0x2e0bfc.unshift(..._0x590e99.undoMutations),
        _0x590e99.redoMutations["forEach"]((_0x4eb684, _0x1d6b10) => {
          _0x47eec5.push({
            redoMutation: _0x4eb684,
            undoMutation: _0x590e99.undoMutations[_0x1d6b10],
          });
        }));
    });
    let _0xe3643 = _0x519f0e.get(Gr),
      _0x5b673b = [],
      _0x28f29f = [],
      _0x2495c7 = [];
    _0x55af5f.forEach((_0x3ded49) => {
      let _0xb1480c = _0x34976f[_0x3ded49].element;
      if (_0xb1480c.type !== M.Chart) return;
      let _0x369cbd = _0xe3643.getRemoveChartMutationInfos({
        unitId: _0x24face,
        subUnitId: _0x3c68d3,
        element: _0xb1480c,
      });
      (_0x5b673b.push(..._0x369cbd.redoMutations),
        _0x28f29f.unshift(..._0x369cbd.undoMutations),
        _0x369cbd.redoMutations["forEach"]((_0x514fd1, _0x1bb8ee) => {
          _0x2495c7.push({
            redoMutation: _0x514fd1,
            undoMutation: _0x369cbd.undoMutations[_0x1bb8ee],
          });
        }));
    });
    let _0x281886 = _0x519f0e.get(_0x3243d1),
      _0x1421c5 = [];
    for (let {
      redoMutation: _0x681051,
      undoMutations: _0x136dc3,
    } of _0x51d01c) {
      if (!_0x281886.syncExecuteCommand(_0x681051.id, _0x681051.params))
        return (js([..._0x1421c5].reverse(), _0x281886), false);
      _0x1421c5.push(_0x136dc3);
    }
    let _0x11ef28 = [];
    for (let {
      redoMutation: _0x3e6cbb,
      undoMutation: _0xdf355d,
    } of _0x47eec5) {
      if (!_0x281886.syncExecuteCommand(_0x3e6cbb.id, _0x3e6cbb.params))
        return (
          As([..._0x11ef28].reverse(), _0x281886),
          js([..._0x1421c5].reverse(), _0x281886),
          false
        );
      _0xdf355d && _0x11ef28.push(_0xdf355d);
    }
    let _0x1b2f05 = [];
    for (let {
      redoMutation: _0xc5a9e7,
      undoMutation: _0x7bfcfd,
    } of _0x2495c7) {
      if (!_0x281886.syncExecuteCommand(_0xc5a9e7.id, _0xc5a9e7.params))
        return (
          As([..._0x1b2f05].reverse(), _0x281886),
          As([..._0x11ef28].reverse(), _0x281886),
          js([..._0x1421c5].reverse(), _0x281886),
          false
        );
      _0x7bfcfd && _0x1b2f05.push(_0x7bfcfd);
    }
    let _0xeb5e1f = [..._0xa5f47, ..._0x1e9704, ..._0x5b673b],
      _0xde3d69 = [..._0x28f29f, ..._0x2e0bfc, ..._0x5a0dd3];
    return _0xeb5e1f.length === 0
      ? false
      : (_0x519f0e
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x24face,
            redoMutations: _0xeb5e1f,
            undoMutations: _0xde3d69,
          }),
        true);
  },
};
function As(_0x55189d, _0x1eb117) {
  for (let [_0x57b1b3, _0x38fbc4] of _0x55189d.entries())
    if (!_0x1eb117.syncExecuteCommand(_0x38fbc4.id, _0x38fbc4.params))
      return { result: false, index: _0x57b1b3 };
  return { result: true, index: -1 };
}
function js(_0x15a0ce, _0x491038) {
  _0x15a0ce.forEach((_0x49be2a) => {
    As(_0x49be2a, _0x491038);
  });
}
const Ms = {
    id: "board.command.remove-element",
    type: _0x3c65b3.COMMAND,
    handler: (_0xfe0e44, _0x32d27a) =>
      _0x32d27a != null && _0x32d27a.elementId
        ? ks.handler(_0xfe0e44, {
            unitId: _0x32d27a.unitId,
            subUnitId: _0x32d27a.subUnitId,
            elementIds: [_0x32d27a.elementId],
          })
        : false,
  },
  Ns = {
    id: "board.command.resolve-capture-bounds",
    type: _0x3c65b3.COMMAND,
    handler: (_0x1eb06a, _0x34d5fa) => {
      if (!(_0x34d5fa != null && _0x34d5fa.unitId) || !_0x34d5fa.subUnitId)
        return false;
      let _0x1bc384 = _0x1eb06a.get(L),
        _0x545def = Ps(
          _0x1bc384.getElementData(_0x34d5fa.unitId, _0x34d5fa.subUnitId),
          _0x1bc384.getElementOrder(_0x34d5fa.unitId, _0x34d5fa.subUnitId),
          _0x34d5fa,
        );
      return _0x545def.ok
        ? {
            ..._0x545def,
            unitId: _0x34d5fa.unitId,
            subUnitId: _0x34d5fa.subUnitId,
          }
        : _0x545def;
    },
  };
function Ps(_0x4acb77, _0x296d67, _0x3ad245) {
  let _0x3dddf4 = _0x3ad245.padding ?? 0;
  if (!Number.isFinite(_0x3dddf4) || _0x3dddf4 < 0)
    return { code: "padding-invalid", ok: false };
  if (_0x3ad245.region && _0x3ad245.elementIds)
    return { code: "selector-conflict", ok: false };
  if (_0x3ad245.region)
    return Ls(_0x3ad245.region)
      ? {
          bounds: Rs(_0x3ad245.region, _0x3dddf4),
          ok: true,
          padding: _0x3dddf4,
          region: { ..._0x3ad245.region },
          selector: "region",
        }
      : { code: "region-invalid", ok: false };
  if (_0x3ad245.elementIds) {
    if (_0x3ad245.elementIds["length"] === 0)
      return { code: "elements-empty", ok: false };
    let _0x46ec3a = [];
    for (let _0x325178 of _0x3ad245.elementIds) {
      if (!_0x4acb77[_0x325178])
        return { code: "element-missing", elementId: _0x325178, ok: false };
      if (!Is(_0x4acb77, _0x325178))
        return { code: "element-hidden", elementId: _0x325178, ok: false };
      let _0xf12c9 = Fs(_0x4acb77, _0x325178);
      if (!_0xf12c9 || !Ls(_0xf12c9))
        return { code: "element-unbounded", elementId: _0x325178, ok: false };
      _0x46ec3a.push(_0xf12c9);
    }
    let _0x329a4f = zs(_0x46ec3a);
    return _0x329a4f
      ? {
          bounds: Rs(_0x329a4f, _0x3dddf4),
          elementIds: [..._0x3ad245.elementIds],
          ok: true,
          padding: _0x3dddf4,
          selector: "elements",
        }
      : { code: "elements-empty", ok: false };
  }
  let _0x291039 = zs(
    _0x296d67.flatMap((_0x4b8d5e) => {
      if (!Is(_0x4acb77, _0x4b8d5e)) return [];
      let _0x4e2f06 = Fs(_0x4acb77, _0x4b8d5e);
      return _0x4e2f06 && Ls(_0x4e2f06) ? [_0x4e2f06] : [];
    }),
  );
  return _0x291039
    ? {
        bounds: Rs(_0x291039, _0x3dddf4),
        ok: true,
        padding: _0x3dddf4,
        selector: "content",
      }
    : { code: "content-empty", ok: false };
}
function Fs(_0x54bd1a, _0x3b4a33) {
  var _0x124ad6;
  let _0xbdf16 = U(_0x54bd1a, _0x3b4a33),
    _0x169b86 =
      (_0x124ad6 = _0x54bd1a[_0x3b4a33]) == null
        ? undefined
        : _0x124ad6.element;
  if (!_0xbdf16 || (_0x169b86 == null ? undefined : _0x169b86.type) !== M.Shape)
    return _0xbdf16;
  let _0x7f41c5 = In(_0x169b86.shapeData);
  return _0x7f41c5
    ? {
        ..._0xbdf16,
        height:
          _0xbdf16.height +
          Math.max(_0x7f41c5.minLifelineHeight, _0x7f41c5.lifelineHeight),
      }
    : _0xbdf16;
}
function Is(_0x50dc6a, _0x39faea) {
  let _0x4d8dd0 = _0x50dc6a[_0x39faea];
  return (
    (_0x4d8dd0 == null ? undefined : _0x4d8dd0.element["visible"]) !== false &&
    V(_0x50dc6a, _0x39faea).every((_0x6bbf77) => {
      var _0x43dea2;
      return (
        ((_0x43dea2 = _0x50dc6a[_0x6bbf77]) == null
          ? undefined
          : _0x43dea2.element["visible"]) !== false
      );
    })
  );
}
function Ls(_0xd46f16) {
  return (
    Number.isFinite(_0xd46f16.left) &&
    Number.isFinite(_0xd46f16.top) &&
    Number.isFinite(_0xd46f16.width) &&
    Number.isFinite(_0xd46f16.height) &&
    _0xd46f16.width > 0 &&
    _0xd46f16.height > 0
  );
}
function Rs(_0x4f853a, _0x5c7a06) {
  return {
    left: _0x4f853a.left - _0x5c7a06,
    top: _0x4f853a.top - _0x5c7a06,
    width: _0x4f853a.width + _0x5c7a06 * 2,
    height: _0x4f853a.height + _0x5c7a06 * 2,
  };
}
function zs(_0x578a0d) {
  if (_0x578a0d.length === 0) return null;
  let _0x591a40 = Math.min(..._0x578a0d.map((_0x8f6714) => _0x8f6714.left)),
    _0x4e686f = Math.min(..._0x578a0d.map((_0x68cea0) => _0x68cea0.top)),
    _0x40689e = Math.max(
      ..._0x578a0d.map((_0x3a73ab) => _0x3a73ab.left + _0x3a73ab.width),
    ),
    _0x37d01a = Math.max(
      ..._0x578a0d.map((_0x258494) => _0x258494.top + _0x258494.height),
    );
  return {
    left: _0x591a40,
    top: _0x4e686f,
    width: _0x40689e - _0x591a40,
    height: _0x37d01a - _0x4e686f,
  };
}
function Bs(_0x252322, _0x2e386e) {
  let _0x17bfb0 = _0x381a86.deepClone(_0x252322 ?? {});
  return (
    _0x2e386e.fill === null
      ? delete _0x17bfb0.fill
      : _0x2e386e.fill !== undefined &&
        (_0x17bfb0.fill = _0x381a86.deepClone(_0x2e386e.fill)),
    _0x2e386e.stroke === null
      ? delete _0x17bfb0.stroke
      : _0x2e386e.stroke !== undefined &&
        (_0x17bfb0.stroke = _0x381a86.deepClone(_0x2e386e.stroke)),
    _0x2e386e.interruptLine !== undefined &&
      (_0x17bfb0.interruptLine = _0x2e386e.interruptLine),
    _0x2e386e.lineGap !== undefined && (_0x17bfb0.lineGap = _0x2e386e.lineGap),
    _0x17bfb0
  );
}
const Vs = {
    id: "board.command.set-connector-label-style",
    type: _0x3c65b3.COMMAND,
    handler: (_0xf3a5a9, _0x1169d6) => {
      if (
        !_0x1169d6 ||
        !_0x1169d6.style ||
        typeof _0x1169d6.style != "object" ||
        Array.isArray(_0x1169d6.style) ||
        "lineBreak" in _0x1169d6.style
      )
        return false;
      let _0x454bdd = _0xf3a5a9.get(L).getElementByParam(_0x1169d6),
        _0x384783 = _0x454bdd == null ? undefined : _0x454bdd.element;
      if (!_0x384783 || _0x384783.type !== M.Connector) return false;
      let _0x21fa60 =
        _0x1169d6.labelId === undefined
          ? Ka(_0x384783.connectorData)[0]
          : Ka(_0x384783.connectorData).find(
              (_0x57c107) => _0x57c107.id === _0x1169d6.labelId,
            );
      if (!_0x21fa60) return false;
      let _0x315fa8 = Ja(
        _0x384783.connectorData,
        _0x21fa60.id,
        (_0x48621d) => ({
          ..._0x48621d,
          style: Bs(_0x48621d.style, _0x1169d6.style),
        }),
      );
      return _0x315fa8
        ? fs(_0xf3a5a9, {
            unitId: _0x1169d6.unitId,
            subUnitId: _0x1169d6.subUnitId,
            updates: [
              {
                elementId: _0x1169d6.elementId,
                element: { ..._0x384783, connectorData: _0x315fa8 },
              },
            ],
          })
        : false;
    },
  },
  Hs = {
    id: "board.command.set-connector-label-text",
    type: _0x3c65b3.COMMAND,
    handler: (_0x33f8fd, _0x2310be) => {
      if (!_0x2310be || _0x2310be.content === undefined) return false;
      let _0x34c1ba = _0x33f8fd.get(L).getElementByParam(_0x2310be),
        _0x400998 = _0x34c1ba == null ? undefined : _0x34c1ba.element;
      if (!_0x400998 || _0x400998.type !== M.Connector) return false;
      let _0x231e3b = [...Ka(_0x400998.connectorData)],
        _0x117031 =
          _0x2310be.labelId === undefined
            ? 0
            : _0x231e3b.findIndex(
                (_0x8b5922) => _0x8b5922.id === _0x2310be.labelId,
              );
      if (_0x2310be.labelId !== undefined && _0x117031 < 0) return false;
      let _0x4c1b78 = _0x231e3b[_0x117031],
        _0x5ef792 = {
          ..._0x4c1b78,
          id:
            (_0x4c1b78 == null ? undefined : _0x4c1b78.id) ??
            _0x2310be.labelId ??
            _0x2928b2(6),
          content: _0x381a86.deepClone(_0x2310be.content),
        };
      return (
        _0x117031 < _0x231e3b.length
          ? (_0x231e3b[_0x117031] = _0x5ef792)
          : _0x231e3b.push(_0x5ef792),
        fs(_0x33f8fd, {
          unitId: _0x2310be.unitId,
          subUnitId: _0x2310be.subUnitId,
          updates: [
            {
              elementId: _0x2310be.elementId,
              element: {
                ..._0x400998,
                connectorData: qa(_0x400998.connectorData, _0x231e3b),
              },
            },
          ],
        })
      );
    },
  },
  Us = {
    id: "board.mutation.set-name",
    type: _0x3c65b3.MUTATION,
    handler: (_0x2d6f61, _0x54269c) => {
      let _0x231543 = _0x2d6f61
        .get(_0x5c9e00)
        .getUnit(_0x54269c.unitId, _0x9aeb0c.UNIVER_BOARD);
      return _0x231543 ? (_0x231543.setName(_0x54269c.name), true) : false;
    },
  },
  Ws = {
    id: "board.command.set-name",
    type: _0x3c65b3.COMMAND,
    handler: (_0xdad1be, _0x8b5d9d) => {
      if (!_0x8b5d9d) return false;
      let _0x25f128 = _0xdad1be
        .get(_0x5c9e00)
        .getUnit(_0x8b5d9d.unitId, _0x9aeb0c.UNIVER_BOARD);
      if (!_0x25f128) return false;
      let _0x19b854 = _0xdad1be.get(_0x3243d1),
        _0x267a16 = { unitId: _0x8b5d9d.unitId, name: _0x8b5d9d.name },
        _0x3b7749 = {
          unitId: _0x8b5d9d.unitId,
          name: _0x25f128.getSnapshot().name,
        };
      return _0x19b854.syncExecuteCommand(Us.id, _0x267a16)
        ? (_0xdad1be
            .get(_0x3cfbb3)
            .pushUndoRedo({
              unitID: _0x8b5d9d.unitId,
              redoMutations: [{ id: Us.id, params: _0x267a16 }],
              undoMutations: [{ id: Us.id, params: _0x3b7749 }],
            }),
          true)
        : false;
    },
  },
  Gs = {
    id: "board.mutation.set-page-background",
    type: _0x3c65b3.MUTATION,
    handler: (_0x192c28, _0xe1dcf5) => {
      let _0x381b6b = _0x192c28
        .get(_0x5c9e00)
        .getUnit(_0xe1dcf5.unitId, _0x9aeb0c.UNIVER_BOARD);
      return _0x381b6b
        ? _0x381b6b.setPageBackground(_0xe1dcf5.subUnitId, _0xe1dcf5.background)
        : false;
    },
  };
function Ks(_0x575ba7) {
  return _0x575ba7 ? _0x381a86.deepClone(_0x575ba7) : undefined;
}
const qs = {
  id: "board.command.set-page-background",
  type: _0x3c65b3.COMMAND,
  handler: (_0x45489c, _0x4fe2dd) => {
    if (
      !_0x4fe2dd ||
      (_0x4fe2dd.background &&
        _0x4fe2dd.background["source"].trim().length === 0)
    )
      return false;
    let _0x2a06a8 = _0x45489c
        .get(_0x5c9e00)
        .getUnit(_0x4fe2dd.unitId, _0x9aeb0c.UNIVER_BOARD),
      _0x1cf7e0 =
        _0x2a06a8 == null ? undefined : _0x2a06a8.getPage(_0x4fe2dd.subUnitId);
    if (!_0x2a06a8 || !_0x1cf7e0) return false;
    let _0x36f343 = {
        unitId: _0x4fe2dd.unitId,
        subUnitId: _0x4fe2dd.subUnitId,
        background: Ks(_0x4fe2dd.background),
      },
      _0xb930d3 = {
        unitId: _0x4fe2dd.unitId,
        subUnitId: _0x4fe2dd.subUnitId,
        background: Ks(_0x1cf7e0.background),
      };
    return _0x45489c.get(_0x3243d1).syncExecuteCommand(Gs.id, _0x36f343)
      ? (_0x45489c
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x4fe2dd.unitId,
            redoMutations: [{ id: Gs.id, params: _0x36f343 }],
            undoMutations: [{ id: Gs.id, params: _0xb930d3 }],
          }),
        true)
      : false;
  },
};
var Js = class {
    constructor(_0x101731) {
      ((this.unitId = _0x101731),
        I(this, "type", _0xc198bb.Board),
        I(this, "subType", _0xd04b56.Comment),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x101731));
    }
  },
  Ys = class {
    constructor(_0x3c67ff) {
      ((this.unitId = _0x3c67ff),
        I(this, "type", _0xc198bb.Board),
        I(this, "subType", _0xd04b56.Copy),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x3c67ff));
    }
  },
  Xs = class {
    constructor(_0x4a1a2d) {
      ((this.unitId = _0x4a1a2d),
        I(this, "type", _0xc198bb.Board),
        I(this, "subType", _0xd04b56.Edit),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x4a1a2d));
    }
  },
  Zs = class {
    constructor(_0x39f514) {
      ((this.unitId = _0x39f514),
        I(this, "type", _0xc198bb.Board),
        I(this, "subType", _0xd04b56.Export),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x39f514));
    }
  },
  Qs = class {
    constructor(_0x8c9ac7) {
      ((this.unitId = _0x8c9ac7),
        I(this, "type", _0xc198bb.Board),
        I(this, "subType", _0xd04b56.Print),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x8c9ac7));
    }
  },
  $s = class {
    constructor(_0x3292ab, _0x234f73) {
      ((this.unitId = _0x3292ab),
        (this.objectId = _0x234f73),
        I(this, "type", _0xc198bb.BoardElement),
        I(this, "subType", _0xd04b56.Edit),
        I(this, "status", _0x390cba.INIT),
        I(this, "id", undefined),
        I(this, "value", true),
        (this.id =
          this.type + "." + this.subType + "_" + _0x3292ab + "_" + _0x234f73));
    }
  };
const ec = [
    _0xd04b56.Edit,
    _0xd04b56.Copy,
    _0xd04b56.Print,
    _0xd04b56.Export,
    _0xd04b56.Comment,
  ],
  tc = new Set([_0xc198bb.Board, _0xc198bb.BoardElement]),
  nc = "element/";
function rc(_0xe85a35, _0x4295e7) {
  return (
    "" +
    nc +
    encodeURIComponent(_0xe85a35) +
    "/" +
    encodeURIComponent(_0x4295e7)
  );
}
function ic(_0x3d7573, _0x24a968, _0x3915f8) {
  if (_0x24a968 === _0x3d7573)
    switch (_0x3915f8) {
      case _0xd04b56.Edit:
        return new Xs(_0x3d7573);
      case _0xd04b56.Copy:
        return new Ys(_0x3d7573);
      case _0xd04b56.Print:
        return new Qs(_0x3d7573);
      case _0xd04b56.Export:
        return new Zs(_0x3d7573);
      case _0xd04b56.Comment:
        return new Js(_0x3d7573);
      default:
        throw Error("Unsupported Board permission action: " + _0x3915f8);
    }
  if (_0x3915f8 !== _0xd04b56.Edit)
    throw Error("Board object permissions only support Edit: " + _0x24a968);
  if (_0x24a968.startsWith(nc)) return new $s(_0x3d7573, _0x24a968);
  throw Error("Unsupported Board permission object: " + _0x24a968);
}
function ac(_0xd45e01, _0x10a1ef, _0x54e868, _0x372fa1) {
  var _0x3ba369;
  return (
    ((_0x3ba369 = _0xd45e01.getPermissionPoint(
      ic(_0x10a1ef, _0x54e868, _0x372fa1).id,
    )) == null
      ? undefined
      : _0x3ba369.value) ?? true
  );
}
function oc(_0x16355a, _0x49ffb0, _0x1545c1, _0x5cc4a7, _0x2d8b4f) {
  let _0x1fe1cd = ic(_0x49ffb0, _0x1545c1, _0x5cc4a7);
  (_0x16355a.getPermissionPoint(_0x1fe1cd.id) ||
    _0x16355a.addPermissionPoint(_0x1fe1cd),
    _0x16355a.updatePermissionPoint(_0x1fe1cd.id, _0x2d8b4f));
}
function sc(_0x2a02ac, _0x598e57) {
  _0x2a02ac.getAllPermissionPoint().forEach((_0x29bccf, _0x29d717) => {
    _0x29bccf
      .subscribe((_0x552c47) => {
        tc.has(_0x552c47.type) &&
          "unitId" in _0x552c47 &&
          _0x552c47.unitId === _0x598e57 &&
          _0x2a02ac.deletePermissionPoint(_0x29d717);
      })
      .unsubscribe();
  });
}
function cc(_0x9e1909, _0x36752c, _0x4b357d) {
  return (
    ac(_0x9e1909, _0x36752c, _0x36752c, _0xd04b56.Edit) &&
    Array.from(_0x4b357d).every((_0x30ae71) =>
      ac(_0x9e1909, _0x36752c, _0x30ae71, _0xd04b56.Edit),
    )
  );
}
const lc = {
    type: _0x3c65b3.COMMAND,
    id: "board.command.set-permission",
    handler(_0x451901, _0x3d4f29) {
      return !_0x3d4f29 ||
        !ec.includes(_0x3d4f29.action) ||
        (_0x3d4f29.objectId !== _0x3d4f29.unitId &&
          _0x3d4f29.action !== _0xd04b56.Edit)
        ? false
        : (oc(
            _0x451901.get(_0x515515),
            _0x3d4f29.unitId,
            _0x3d4f29.objectId,
            _0x3d4f29.action,
            _0x3d4f29.value,
          ),
          true);
    },
  },
  uc = {
    id: "board.command.update-element",
    type: _0x3c65b3.COMMAND,
    handler: (_0x226b7c, _0x1d1a2c) => {
      if (!_0x1d1a2c) return false;
      let {
        historyId: _0x4b4143,
        unitId: _0x3829ce,
        subUnitId: _0x4e6a69,
        ..._0x56df20
      } = _0x1d1a2c;
      return fs(_0x226b7c, {
        historyId: _0x4b4143,
        unitId: _0x3829ce,
        subUnitId: _0x4e6a69,
        updates: [_0x56df20],
      });
    },
  },
  dc = {
    id: "board.mutation.remove-element-only",
    type: _0x3c65b3.MUTATION,
    handler: (_0x29506d, _0x2500eb) => {
      var _0x2fbed6;
      let {
        unitId: _0x1dfb33,
        subUnitId: _0x251df9,
        elementId: _0x4ef831,
        allowLockedParent: _0x80cfb,
      } = _0x2500eb;
      if (!_0x4ef831) return false;
      let _0x3f67dc = _0x29506d
        .get(_0x5c9e00)
        .getUnit(_0x1dfb33, _0x9aeb0c.UNIVER_BOARD);
      if (!_0x3f67dc) return false;
      let _0x13b7e5 = _0x29506d.get(L),
        _0x2bf558 = _0x13b7e5.getElementByParam({
          unitId: _0x1dfb33,
          subUnitId: _0x251df9,
          elementId: _0x4ef831,
        });
      if (!_0x2bf558 || _0x2bf558.element["locked"] === true) return false;
      let _0x44d621 = _0x13b7e5.getElementData(_0x1dfb33, _0x251df9),
        _0x214164 = _0x2bf558.element["parentId"]
          ? (_0x2fbed6 = _0x44d621[_0x2bf558.element["parentId"]]) == null
            ? undefined
            : _0x2fbed6.element
          : undefined;
      if (
        (!_0x80cfb && ko(_0x44d621, _0x2bf558.element)) ||
        (!_0x80cfb &&
          (_0x214164 == null ? undefined : _0x214164.type) === M.Container &&
          _0x214164.containerData["behavior"].membershipLocked) ||
        (_0x2bf558.element["type"] === M.Container &&
          Object.values(_0x44d621).some(
            (_0x562207) => _0x562207.element["parentId"] === _0x4ef831,
          )) ||
        Object.values(_0x44d621).some(
          (_0x110cb5) =>
            Q(_0x110cb5) && Qa(_0x110cb5.element).includes(_0x4ef831),
        )
      )
        return false;
      let _0x1f3097 = Ea(
        _0x13b7e5.getBatchRemoveElementOp([
          { unitId: _0x1dfb33, subUnitId: _0x251df9, elementId: _0x4ef831 },
        ]),
      );
      return Jo(_0x3f67dc, _0x2bf558)
        ? (_0x13b7e5.applyElementJson1(_0x1dfb33, _0x251df9, _0x1f3097.redo),
          _0x13b7e5.removeElementNotification([
            { unitId: _0x1dfb33, subUnitId: _0x251df9, elementId: _0x4ef831 },
          ]),
          true)
        : false;
    },
  },
  fc = {
    id: "board.mutation.set-element-order",
    type: _0x3c65b3.MUTATION,
    handler: (_0x43c724, _0xce3156) => {
      if (!_0xce3156 || _0xce3156.elementIds["length"] === 0) return false;
      let {
          unitId: _0x29cc30,
          subUnitId: _0x20bc3f,
          elementIds: _0x254071,
        } = _0xce3156,
        _0x129280 = _0x43c724
          .get(_0x5c9e00)
          .getUnit(_0x29cc30, _0x9aeb0c.UNIVER_BOARD);
      if (!_0x129280) return false;
      let _0x28e9e0 = _0x43c724.get(L);
      return Xo(_0x129280, _0x20bc3f, _0x254071)
        ? (_0x28e9e0.setElementOrder(_0x29cc30, _0x20bc3f, _0x254071),
          _0x28e9e0.orderUpdateNotification({
            unitId: _0x29cc30,
            subUnitId: _0x20bc3f,
            elementIds: _0x254071,
          }),
          true)
        : false;
    },
  };
function pc() {
  return {
    retained: [],
    captured: [],
    expelled: [],
    autosized: [],
    blocked: [],
  };
}
function mc(_0x6ddc92) {
  let _0x5224e0 = pc(),
    _0x5a8b1e = new Set(_0x6ddc92.preview["forcedCaptureChildIds"]);
  return (
    _0x6ddc92.preview["retainedChildIds"].forEach((_0x191a3f) => {
      _0x5224e0.retained["push"]({
        elementId: _0x191a3f,
        containerId: _0x6ddc92.containerId,
      });
    }),
    _0x6ddc92.preview["captureChildIds"].forEach((_0x2cc2b9) => {
      var _0x602789;
      _0x5224e0.captured["push"]({
        elementId: _0x2cc2b9,
        fromParentId:
          (_0x602789 = _0x6ddc92.elementData[_0x2cc2b9]) == null
            ? undefined
            : _0x602789.element["parentId"],
        toParentId: _0x6ddc92.containerId,
        forced: _0x5a8b1e.has(_0x2cc2b9),
      });
    }),
    _0x6ddc92.preview["forcedCaptureChildIds"].forEach((_0x5dda82) => {
      var _0x363c85;
      _0x6ddc92.preview["captureChildIds"].includes(_0x5dda82) ||
        _0x5224e0.captured["push"]({
          elementId: _0x5dda82,
          fromParentId:
            (_0x363c85 = _0x6ddc92.elementData[_0x5dda82]) == null
              ? undefined
              : _0x363c85.element["parentId"],
          toParentId: _0x6ddc92.containerId,
          forced: true,
        });
    }),
    _0x6ddc92.preview["expelChildIds"].forEach((_0x35c1db) => {
      var _0x37009a;
      _0x5224e0.expelled["push"]({
        elementId: _0x35c1db,
        fromParentId:
          ((_0x37009a = _0x6ddc92.elementData[_0x35c1db]) == null
            ? undefined
            : _0x37009a.element["parentId"]) ?? _0x6ddc92.containerId,
        toParentId: undefined,
      });
    }),
    _0x6ddc92.preview["blockedChildIds"].forEach((_0x329eee) => {
      _0x5a8b1e.has(_0x329eee) ||
        _0x5224e0.blocked["push"]({
          elementId: _0x329eee,
          targetContainerId: _0x6ddc92.containerId,
          reason: "previewBlocked",
        });
    }),
    _0x6ddc92.preview["expandedOuterBounds"] &&
      _0x5224e0.autosized["push"]({
        containerId: _0x6ddc92.containerId,
        nextBounds: _0x6ddc92.preview["expandedOuterBounds"],
        reason: "autoResize",
      }),
    _0x5224e0
  );
}
function hc(_0x4c90c4, _0x1867d4) {
  return Object.values(_0x4c90c4)
    .filter((_0x5164b9) => _0x5164b9.element["parentId"] === _0x1867d4)
    .map((_0x33fe93) => _0x33fe93.elementId);
}
function gc(_0x526154, _0x36bf59, _0x4c0a42) {
  let _0x165b49 = _0x36bf59.element["parentId"],
    _0x2311b0 = new Set([_0x36bf59.elementId]);
  for (; _0x165b49;) {
    if (_0x165b49 === _0x4c0a42 || _0x2311b0.has(_0x165b49)) return false;
    let _0x2ec5d8 = _0x526154[_0x165b49];
    if (!_0x2ec5d8) return false;
    if (_0x2ec5d8.hidden === true || _0x2ec5d8.element["visible"] === false)
      return true;
    (_0x2311b0.add(_0x165b49), (_0x165b49 = _0x2ec5d8.element["parentId"]));
  }
  return false;
}
function _c(_0x59b7ed, _0x27dfc1, _0x576634, _0x365741 = false) {
  return (
    !_0x59b7ed ||
    _0x59b7ed.hidden === true ||
    _0x59b7ed.element["visible"] === false ||
    gc(_0x27dfc1, _0x59b7ed, _0x576634) ||
    (!_0x365741 && _0x59b7ed.element["locked"] === true) ||
    _0x59b7ed.element["selectable"] === false ||
    _0x59b7ed.element["type"] === M.Connector
  );
}
function vc(_0x400f80, _0x426675, _0x3e11b4, _0x3edc2d, _0x42e033, _0x9ed6c4) {
  if (
    !_0x400f80.containerData["capturePolicy"].enabled ||
    !_0x400f80.containerData["behavior"].autoCapture ||
    !_0x400f80.containerData["behavior"].acceptsChildren
  )
    return true;
  let _0x12450d = _0x426675 == null ? undefined : _0x426675.element["parentId"],
    _0x37bc09 = Vn(_0x12450d ? _0x3e11b4[_0x12450d] : undefined);
  return _0x12450d &&
    _0x37bc09 &&
    _0x12450d !== _0x42e033 &&
    !_0x9ed6c4.has(_0x3edc2d) &&
    !(V(_0x3e11b4, _0x42e033).includes(_0x12450d)
      ? _0x400f80.containerData["capturePolicy"]
          .allowCaptureFromAncestorContainer === true
      : _0x400f80.containerData["capturePolicy"]
          .allowCaptureFromSiblingContainer)
    ? true
    : (_0x426675 == null ? undefined : _0x426675.element["type"]) ===
        M.Container
      ? !_0x400f80.containerData["behavior"].acceptsContainer ||
        !_0x400f80.containerData["behavior"].allowNested ||
        !_0x400f80.containerData["capturePolicy"].allowCaptureContainer ||
        Wn(_0x3e11b4, _0x3edc2d, _0x42e033)
      : false;
}
function yc(_0x34ad9e, _0x3d3d77) {
  return _0x34ad9e || _0x3d3d77 === true;
}
function bc(_0x352924, _0x5263a7, _0x223ac9, _0x57e48e) {
  return (
    !!_0x352924 &&
    (_0x223ac9 !== true || _0x57e48e) &&
    (_0x352924.width > _0x5263a7.width || _0x352924.height > _0x5263a7.height)
  );
}
function xc(_0x51feb0) {
  return (
    _0x51feb0.type === M.Container &&
    _0x51feb0.containerData["kind"] === "swimlane" &&
    !!_0x51feb0.containerData["swimlane"]
  );
}
function Sc(_0x22ef9e, _0x46b519) {
  return xc(_0x22ef9e)
    ? (yi(
        Ii(_0x22ef9e, _0x46b519).map((_0x1b5a45) => _0x1b5a45.contentBounds),
      ) ?? {
        left: _0x46b519.left,
        top:
          _0x46b519.top +
          (_0x22ef9e.containerData["titleVisible"] === false
            ? 0
            : (_0x22ef9e.containerData["headerSize"] ?? 0)),
        width: _0x46b519.width,
        height: Math.max(
          0,
          _0x46b519.height -
            (_0x22ef9e.containerData["titleVisible"] === false
              ? 0
              : (_0x22ef9e.containerData["headerSize"] ?? 0)),
        ),
      })
    : bi(_0x22ef9e, _0x46b519).contentBounds;
}
function Cc(_0x124b05, _0x122ea2, _0x48f01c, _0xc055e1) {
  return xc(_0x124b05)
    ? !!Ui(_0x124b05, _0x122ea2, _0xc055e1)
    : gi(_0x48f01c, _0xc055e1);
}
function wc(_0x22ecba, _0x54e4fa, _0x5391b3, _0x55a492) {
  if (!xc(_0x22ecba)) return gi(_0x5391b3, _0x55a492);
  let _0x5e09c0 = _0x22ecba.containerData["capturePolicy"].expelHysteresis ?? 0;
  return Ii(_0x22ecba, _0x54e4fa).some((_0x3503d7) =>
    gi(hi(_0x3503d7.contentBounds, _0x5e09c0), _0x55a492),
  );
}
function Tc(_0x365996, _0x4dbb91, _0xd7ff4d, _0x577706) {
  return xc(_0x365996)
    ? Ii(_0x365996, _0x4dbb91).some((_0x2c55b4) =>
        vi(_0x2c55b4.contentBounds, _0x577706),
      )
    : vi(_0xd7ff4d, _0x577706);
}
function Ec(_0x363066, _0x5b4089, _0x22428b) {
  var _0x179e2c, _0x10c1e0;
  if (!xc(_0x363066)) return xi(_0x363066, _0x5b4089, _0x22428b);
  let _0x595bcf =
      _0x363066.containerData["titleVisible"] === false
        ? 0
        : (_0x363066.containerData["headerSize"] ?? 0),
    _0x5248be = Math.max(
      0,
      ((_0x179e2c = _0x363066.containerData["swimlane"]) == null
        ? undefined
        : _0x179e2c.headerSize) ?? 0,
    ),
    _0x342f00 =
      ((_0x10c1e0 = _0x363066.containerData["swimlane"]) == null
        ? undefined
        : _0x10c1e0.orientation) === "horizontal",
    _0x52c354 = Math.min(
      _0x5b4089.left,
      _0x22428b.left - (_0x342f00 ? _0x5248be : 0),
    ),
    _0x47b303 = Math.min(
      _0x5b4089.top,
      _0x22428b.top - _0x595bcf - (_0x342f00 ? 0 : _0x5248be),
    ),
    _0x2d859e = Math.max(q(_0x5b4089), q(_0x22428b)),
    _0x59f20d = Math.max(J(_0x5b4089), J(_0x22428b));
  return {
    left: _0x52c354,
    top: _0x47b303,
    width: _0x2d859e - _0x52c354,
    height: _0x59f20d - _0x47b303,
  };
}
function Dc(_0x26c086) {
  let _0x498ef0 = _0x26c086.elementData[_0x26c086.containerId];
  if (!_0x498ef0 || _0x498ef0.element["type"] !== M.Container)
    return {
      activeContainerId: _0x26c086.containerId,
      previewOuterBounds: _0x26c086.previewOuterBounds ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
      previewContentBounds: { left: 0, top: 0, width: 0, height: 0 },
      retainedChildIds: [],
      expelChildIds: [],
      captureChildIds: [],
      forcedCaptureChildIds: [],
      blockedChildIds: [],
    };
  let _0x2ed4ec = _0x498ef0.element,
    _0x299405 =
      _0x498ef0.hidden !== true &&
      _0x2ed4ec.visible !== false &&
      !gc(_0x26c086.elementData, _0x498ef0) &&
      _0x2ed4ec.locked !== true &&
      _0x2ed4ec.selectable !== false &&
      !_0x2ed4ec.containerData["behavior"].membershipLocked,
    _0x30280d = _0x26c086.previewOuterBounds ??
      U(_0x26c086.elementData, _0x26c086.containerId) ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
    _0x3c69df = bi(_0x2ed4ec, _0x30280d),
    _0x5daa76 = Sc(_0x2ed4ec, _0x30280d),
    _0x351d87 = xc(_0x2ed4ec)
      ? hi(
          _0x5daa76,
          _0x2ed4ec.containerData["capturePolicy"].expelHysteresis ?? 0,
        )
      : _0x3c69df.expandedContentBounds,
    _0x235155 = [],
    _0x5dbdfc = [],
    _0x2bf364 = [],
    _0x1b1d1c = [],
    _0x1c650a = [],
    _0x1664fa = [_0x5daa76],
    _0x58aa54 = hc(_0x26c086.elementData, _0x26c086.containerId),
    _0x36bff9 = _0x2ed4ec.containerData["behavior"].membershipLocked,
    _0x48ab9a = new Set(_0x26c086.allowCaptureFromParentedCandidateIds ?? []),
    _0x345b55 = new Set(_0x26c086.forceCaptureCandidateIds ?? []),
    _0x12eb8a = new Set(_0x26c086.autosizeCaptureCandidateIds ?? []),
    _0x49d762 = (_0x5905ad) => {
      (_0x2bf364.push(_0x5905ad),
        _0x345b55.has(_0x5905ad) && _0x1c650a.push(_0x5905ad));
    };
  (_0x58aa54.forEach((_0x626f95) => {
    let _0x2199e7 = _0x26c086.elementData[_0x626f95];
    if (_c(_0x2199e7, _0x26c086.elementData, _0x26c086.containerId)) {
      _0x235155.push(_0x626f95);
      return;
    }
    let _0x3a08d2 = U(_0x26c086.elementData, _0x626f95);
    if (_0x3a08d2) {
      if (yc(_0x36bff9, _0x26c086.preserveDirectChildren)) {
        (_0x235155.push(_0x626f95), _0x1664fa.push(_0x3a08d2));
        return;
      }
      (
        xc(_0x2ed4ec) && !_0x2199e7.element["laneId"]
          ? gi(_0x351d87, _0x3a08d2)
          : wc(_0x2ed4ec, _0x30280d, _0x351d87, _0x3a08d2)
      )
        ? _0x235155.push(_0x626f95)
        : _0x5dbdfc.push(_0x626f95);
    }
  }),
    (_0x26c086.candidateElementIds ?? []).forEach((_0x2e4808) => {
      if (_0x2e4808 === _0x26c086.containerId || _0x58aa54.includes(_0x2e4808))
        return;
      if (!_0x299405) {
        _0x1b1d1c.push(_0x2e4808);
        return;
      }
      let _0x103256 = _0x26c086.elementData[_0x2e4808];
      if (
        _c(
          _0x103256,
          _0x26c086.elementData,
          undefined,
          _0x2ed4ec.containerData["capturePolicy"].allowCaptureLockedObjects ===
            true,
        )
      ) {
        _0x1b1d1c.push(_0x2e4808);
        return;
      }
      if (
        vc(
          _0x2ed4ec,
          _0x103256,
          _0x26c086.elementData,
          _0x2e4808,
          _0x26c086.containerId,
          _0x48ab9a,
        )
      ) {
        _0x1b1d1c.push(_0x2e4808);
        return;
      }
      let _0x269707 = U(_0x26c086.elementData, _0x2e4808);
      if (!_0x269707) {
        _0x1b1d1c.push(_0x2e4808);
        return;
      }
      if (Cc(_0x2ed4ec, _0x30280d, _0x5daa76, _0x269707)) {
        _0x49d762(_0x2e4808);
        return;
      }
      let _0x5de3c4 =
        _0x2ed4ec.containerData["kind"] !== "swimlane" ||
        !_0x2ed4ec.containerData["swimlane"];
      if (
        _0x12eb8a.has(_0x2e4808) &&
        _0x5de3c4 &&
        _0x2ed4ec.containerData["behavior"].autoResize &&
        gi(_0x3c69df.outerBounds, _0x269707)
      ) {
        let _0x1513ca = yi([_0x5daa76, _0x269707]);
        if (_0x1513ca) {
          (_0x49d762(_0x2e4808), _0x1664fa.push(_0x1513ca));
          return;
        }
      }
      let _0x33e4c9 =
        _0x12eb8a.has(_0x2e4808) ||
        _0x269707.width > _0x5daa76.width ||
        _0x269707.height > _0x5daa76.height;
      if (
        _0x2ed4ec.containerData["behavior"].autoResize &&
        Tc(_0x2ed4ec, _0x30280d, _0x5daa76, _0x269707) &&
        _0x33e4c9
      ) {
        let _0x57307d = yi([_0x5daa76, _0x269707]);
        if (_0x57307d) {
          (_0x49d762(_0x2e4808), _0x1664fa.push(_0x57307d));
          return;
        }
      }
      _0x1b1d1c.push(_0x2e4808);
    }));
  let _0x387577 = yi(_0x1664fa),
    _0x4f39c4 = _0x387577 ? Ec(_0x2ed4ec, _0x30280d, _0x387577) : undefined,
    _0x35a807 = bc(
      _0x4f39c4,
      _0x30280d,
      _0x26c086.preserveDirectChildren,
      _0x2ed4ec.containerData["behavior"].autoResize,
    );
  return {
    activeContainerId: _0x26c086.containerId,
    previewOuterBounds: _0x30280d,
    previewContentBounds: _0x5daa76,
    retainedChildIds: _0x235155,
    expelChildIds: _0x5dbdfc,
    captureChildIds: _0x2bf364,
    forcedCaptureChildIds: _0x1c650a,
    blockedChildIds: _0x1b1d1c,
    ...(_0x35a807 ? { expandedOuterBounds: _0x4f39c4 } : {}),
  };
}
function Oc(_0xf847c0) {
  if (_0xf847c0.activeContainerIds["length"] === 0) return null;
  let _0x4be10c = new Set(_0xf847c0.activeContainerIds),
    _0x1de73c = new Set(_0xf847c0.lockedCurrentParentIds ?? []);
  if (
    _0xf847c0.activeContainerIds["some"]((_0x43b18d) => {
      var _0x1551b0, _0x2bd481;
      let _0x9205f8 =
          (_0x1551b0 = _0xf847c0.elementData[_0x43b18d]) == null
            ? undefined
            : _0x1551b0.element["parentId"],
        _0x5900fc = _0x9205f8
          ? (_0x2bd481 = _0xf847c0.elementData[_0x9205f8]) == null
            ? undefined
            : _0x2bd481.element
          : undefined;
      return (
        !!_0x9205f8 &&
        (_0x1de73c.has(_0x9205f8) ||
          ((_0x5900fc == null ? undefined : _0x5900fc.type) === M.Container &&
            _0x5900fc.containerData["behavior"].membershipLocked))
      );
    })
  )
    return null;
  let _0x51c69f = _0xf847c0.elementOrder ?? Object.keys(_0xf847c0.elementData),
    _0x235b6b = new Map(
      _0x51c69f.map((_0x32b52a, _0x141076) => [_0x32b52a, _0x141076]),
    ),
    _0x4ee0ee = _0xf847c0.candidateContainerIds
      ? new Set(_0xf847c0.candidateContainerIds)
      : null,
    _0x1b81fa = Object.values(_0xf847c0.elementData)
      .filter(
        (_0x4a057b) =>
          _0x4a057b.element["type"] === M.Container &&
          !_0x4be10c.has(_0x4a057b.elementId),
      )
      .filter((_0xef39b9) => !_c(_0xef39b9, _0xf847c0.elementData))
      .filter((_0x502622) => !_0x4ee0ee || _0x4ee0ee.has(_0x502622.elementId))
      .map((_0x3effaf) => ({
        item: _0x3effaf,
        preview: Dc({
          containerId: _0x3effaf.elementId,
          elementData: _0xf847c0.elementData,
          candidateElementIds: _0xf847c0.activeContainerIds,
          allowCaptureFromParentedCandidateIds: _0xf847c0.activeContainerIds,
        }),
      }))
      .filter(({ preview: _0x5c7c0b }) =>
        _0x5c7c0b.captureChildIds["some"]((_0x1c45e8) =>
          _0x4be10c.has(_0x1c45e8),
        ),
      )
      .sort(
        (_0x3557e2, _0x4f5540) =>
          V(_0xf847c0.elementData, _0x4f5540.item["elementId"]).length -
            V(_0xf847c0.elementData, _0x3557e2.item["elementId"]).length ||
          (_0x235b6b.get(_0x4f5540.item["elementId"]) ?? -1) -
            (_0x235b6b.get(_0x3557e2.item["elementId"]) ?? -1),
      )[0];
  return _0x1b81fa
    ? {
        containerId: _0x1b81fa.item["elementId"],
        expandedOuterBounds: _0x1b81fa.preview["expandedOuterBounds"],
      }
    : null;
}
function kc(_0x4ea471, _0x1ad62d) {
  return {
    ..._0x4ea471,
    transform: {
      ..._0x4ea471.transform,
      left: _0x1ad62d.left,
      top: _0x1ad62d.top,
      width: _0x1ad62d.width,
      height: _0x1ad62d.height,
      rotation: _0x1ad62d.angle,
      flipX: _0x1ad62d.flipX,
      flipY: _0x1ad62d.flipY,
    },
  };
}
function Ac(_0x4daed7, _0x5aa704) {
  return _0x5aa704.some((_0x51a20e) => {
    var _0x29a16c;
    let _0x513480 = _0x51a20e.params;
    return (
      !!_0x513480.elementId &&
      ((_0x29a16c = _0x4daed7[_0x513480.elementId]) == null
        ? undefined
        : _0x29a16c.element["locked"]) === true
    );
  });
}
function jc(_0x2d7548, _0x16e924, _0x181fef) {
  var _0x479557, _0x2d05f8;
  if (!_0x16e924) return;
  let _0x43f41c =
      (_0x479557 = _0x2d7548[_0x16e924]) == null
        ? undefined
        : _0x479557.element,
    _0x4248e9 = U(_0x2d7548, _0x16e924);
  if (!(
    !_0x43f41c ||
    _0x43f41c.type !== M.Container ||
    _0x43f41c.containerData["kind"] !== "swimlane" ||
    !_0x4248e9
  ))
    return (_0x2d05f8 = Ui(_0x43f41c, _0x4248e9, _0x181fef)) == null
      ? undefined
      : _0x2d05f8.lane["id"];
}
function Mc(_0x3635b8, _0x4f3a22) {
  let _0x3a3dac =
    _0x3635b8.containerData["titleVisible"] === false
      ? 0
      : (_0x3635b8.containerData["headerSize"] ?? $i.headerSize);
  if (
    _0x3635b8.containerData["kind"] === "swimlane" &&
    _0x3635b8.containerData["swimlane"]
  ) {
    let _0x397758 = Math.max(
        0,
        _0x3635b8.containerData["swimlane"].headerSize ?? 0,
      ),
      _0x4e1473 =
        _0x3635b8.containerData["swimlane"].orientation === "horizontal";
    return {
      left: _0x4f3a22.left - (_0x4e1473 ? _0x397758 : 0),
      top: _0x4f3a22.top - _0x3a3dac - (_0x4e1473 ? 0 : _0x397758),
      width: _0x4f3a22.width + (_0x4e1473 ? _0x397758 : 0),
      height: _0x4f3a22.height + _0x3a3dac + (_0x4e1473 ? 0 : _0x397758),
      angle: G(_0x3635b8.transform).angle,
      flipX: _0x3635b8.transform["flipX"],
      flipY: _0x3635b8.transform["flipY"],
    };
  }
  let _0x2d7455 = _0x3635b8.containerData["padding"] ?? $i.padding;
  return {
    left: _0x4f3a22.left - _0x2d7455.left,
    top: _0x4f3a22.top - _0x3a3dac - _0x2d7455.top,
    width: _0x4f3a22.width + _0x2d7455.left + _0x2d7455.right,
    height: _0x4f3a22.height + _0x3a3dac + _0x2d7455.top + _0x2d7455.bottom,
    angle: G(_0x3635b8.transform).angle,
    flipX: _0x3635b8.transform["flipX"],
    flipY: _0x3635b8.transform["flipY"],
  };
}
const Nc = {
  id: "board.operation.fit-container-to-content",
  type: _0x3c65b3.OPERATION,
  handler: (_0x96f603, _0x4a7a0c) => {
    if (!(_0x4a7a0c != null && _0x4a7a0c.containerId)) return false;
    let {
        unitId: _0x5371f6,
        subUnitId: _0x1a28d3,
        containerId: _0x239b67,
      } = _0x4a7a0c,
      _0x1b89f5 = _0x96f603.get(L),
      _0x5ac043 = _0x1b89f5.getElementData(_0x5371f6, _0x1a28d3),
      _0x132838 = Pc({
        unitId: _0x5371f6,
        subUnitId: _0x1a28d3,
        containerId: _0x239b67,
        elementData: _0x5ac043,
        elementOrder: _0x1b89f5.getElementOrder(_0x5371f6, _0x1a28d3),
      });
    if (
      !_0x132838 ||
      Ac(_0x5ac043, _0x132838.redoMutations) ||
      !Mo(_0x5ac043, _0x132838.redoMutations)
    )
      return false;
    let _0x32c9eb = _0x96f603.get(_0x3243d1);
    return _0x1c1693(_0x132838.redoMutations, _0x32c9eb).result
      ? (_0x96f603
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x5371f6,
            redoMutations: _0x132838.redoMutations,
            undoMutations: _0x132838.undoMutations,
          }),
        true)
      : false;
  },
};
function Pc(_0x464fc) {
  let {
      unitId: _0x4614e8,
      subUnitId: _0x535a51,
      containerId: _0x433b8c,
      elementData: _0xe1c086,
      elementOrder: _0x3389aa,
    } = _0x464fc,
    _0x325468 = _0xe1c086[_0x433b8c];
  if (
    !_0x325468 ||
    _0x325468.element["type"] !== M.Container ||
    _0x325468.element["locked"]
  )
    return null;
  let _0xd35dfe = X(_0x325468.element),
    _0x4a7351 = _0x3389aa.filter((_0x503837) => {
      var _0x97d92d;
      return (
        ((_0x97d92d = _0xe1c086[_0x503837]) == null
          ? undefined
          : _0x97d92d.element["parentId"]) === _0x433b8c
      );
    }),
    _0x5a4974 = _0x4a7351.filter((_0x8616d8) => {
      var _0x31b445;
      return (
        ((_0x31b445 = _0xe1c086[_0x8616d8]) == null
          ? undefined
          : _0x31b445.element["type"]) !== M.Connector
      );
    });
  if (_0x5a4974.length === 0) return null;
  let _0x3f8cc2 = _0x5a4974
    .map((_0x118023) => {
      var _0x20aa8b;
      return (_0x20aa8b = H(_0xe1c086, _0x118023)) == null
        ? undefined
        : _0x20aa8b.worldTransform;
    })
    .filter((_0x4222ff) => !!_0x4222ff);
  if (_0x3f8cc2.length !== _0x5a4974.length) return null;
  let _0x4cff51 = _0x3f8cc2.map((_0x3ddcf9) => ({
      left: _0x3ddcf9.left ?? 0,
      top: _0x3ddcf9.top ?? 0,
      width: _0x3ddcf9.width ?? 0,
      height: _0x3ddcf9.height ?? 0,
    })),
    _0x51d46a = Math.min(..._0x4cff51.map((_0x174394) => _0x174394.left)),
    _0xdd6e2a = Math.min(..._0x4cff51.map((_0x366561) => _0x366561.top)),
    _0x13134b = Math.max(..._0x4cff51.map(q)),
    _0x4f4bd4 = Math.max(..._0x4cff51.map(J)),
    _0x3ce82e = Mc(_0xd35dfe, {
      left: _0x51d46a,
      top: _0xdd6e2a,
      width: _0x13134b - _0x51d46a,
      height: _0x4f4bd4 - _0xdd6e2a,
    }),
    _0x3d0b4f = G(
      W(_0xe1c086, {
        parentId: _0x325468.element["parentId"],
        worldTransform: Xn(_0x3ce82e),
      }),
    ),
    _0x4ecc84 = kc(
      {
        ..._0xd35dfe,
        laneId: jc(_0xe1c086, _0x325468.element["parentId"], {
          left: _0x3ce82e.left,
          top: _0x3ce82e.top,
          width: _0x3ce82e.width,
          height: _0x3ce82e.height,
        }),
      },
      _0x3d0b4f,
    ),
    _0x537282 = {
      ..._0xe1c086,
      [_0x433b8c]: { ..._0x325468, element: _0x4ecc84, transform: _0x3d0b4f },
    },
    _0x173665 = [
      {
        id: $.id,
        params: {
          unitId: _0x4614e8,
          subUnitId: _0x535a51,
          elementId: _0x433b8c,
          element: _0x4ecc84,
          transform: _0x3d0b4f,
        },
      },
    ],
    _0x34574a = _0x4a7351.map((_0x4a8cf1) => {
      var _0x57545b;
      return (_0x57545b = H(_0xe1c086, _0x4a8cf1)) == null
        ? undefined
        : _0x57545b.worldTransform;
    });
  return _0x34574a.some((_0x2e273f) => !_0x2e273f)
    ? null
    : (_0x4a7351.forEach((_0x108a29, _0x4bd8e0) => {
        let _0x10e6fa = _0xe1c086[_0x108a29],
          _0x5b336b = G(
            W(_0x537282, {
              parentId: _0x433b8c,
              worldTransform: _0x34574a[_0x4bd8e0],
            }),
          );
        _0x173665.push({
          id: $.id,
          params: {
            unitId: _0x4614e8,
            subUnitId: _0x535a51,
            elementId: _0x108a29,
            element: kc(_0x10e6fa.element, _0x5b336b),
            transform: _0x5b336b,
          },
        });
      }),
      {
        redoMutations: _0x173665,
        undoMutations: [_0x433b8c, ..._0x4a7351].map((_0x44530f) => {
          let _0x152272 = _0xe1c086[_0x44530f];
          return {
            id: $.id,
            params: {
              unitId: _0x4614e8,
              subUnitId: _0x535a51,
              elementId: _0x44530f,
              element: X(_0x381a86.deepClone(_0x152272.element)),
              transform: _0x152272.transform
                ? { ..._0x152272.transform }
                : _0x152272.transform,
            },
          };
        }),
      });
}
function Fc(_0x1c5754, _0x412353) {
  let _0x5d9315 = new Set(Object.keys(_0x412353)),
    _0x906adf = new Set();
  for (let _0x2e9df2 of _0x1c5754) {
    if (_0x5d9315.has(_0x2e9df2.id) || _0x906adf.has(_0x2e9df2.id))
      return false;
    _0x906adf.add(_0x2e9df2.id);
  }
  let _0x4ec04b = new Map(
      _0x1c5754.map((_0x2d64f1) => [_0x2d64f1.id, _0x2d64f1]),
    ),
    _0x2f1d52 = (_0x2ab6ed) => {
      var _0x1bdb18, _0x1a492c;
      return (
        ((_0x1bdb18 = _0x4ec04b.get(_0x2ab6ed)) == null
          ? undefined
          : _0x1bdb18.parentId) ??
        ((_0x1a492c = _0x412353[_0x2ab6ed]) == null
          ? undefined
          : _0x1a492c.element["parentId"])
      );
    },
    _0x3b5829 = (_0x489e26) => {
      let _0x22af7a = new Set([_0x489e26.id]),
        _0x271ea2 = _0x489e26.parentId;
      for (; _0x271ea2;) {
        if (_0x22af7a.has(_0x271ea2)) return true;
        (_0x22af7a.add(_0x271ea2), (_0x271ea2 = _0x2f1d52(_0x271ea2)));
      }
      return false;
    };
  return _0x1c5754.every((_0x34a023) => {
    var _0x51958a;
    if (!_0x34a023.parentId) return true;
    if (_0x3b5829(_0x34a023)) return false;
    let _0x43861b =
      _0x4ec04b.get(_0x34a023.parentId) ??
      ((_0x51958a = _0x412353[_0x34a023.parentId]) == null
        ? undefined
        : _0x51958a.element);
    if (!_0x43861b || _0x43861b.type !== M.Container) return false;
    let _0x55a8b5 = _0x43861b.containerData["behavior"],
      _0x5c5ce1 = !_0x4ec04b.has(_0x34a023.parentId),
      _0x5d6c9c = _0x5c5ce1 ? _0x412353[_0x34a023.parentId] : undefined;
    return (_0x5c5ce1 &&
      ((_0x5d6c9c == null ? undefined : _0x5d6c9c.hidden) === true ||
        _0x43861b.visible === false ||
        _0x43861b.locked === true ||
        _0x43861b.selectable === false ||
        _0x55a8b5.membershipLocked)) ||
      !_0x55a8b5.acceptsChildren
      ? false
      : _0x34a023.type !== M.Container ||
          (_0x55a8b5.acceptsContainer && _0x55a8b5.allowNested);
  });
}
function Ic(_0x5d1f28, _0x597fd9, _0x13156a) {
  if (!_0x5d1f28) return true;
  let _0x2048d4 = _0x13156a[_0x5d1f28],
    _0x3d7e2c =
      _0x597fd9.find((_0x2a61ce) => _0x2a61ce.id === _0x5d1f28) ??
      (_0x2048d4 == null ? undefined : _0x2048d4.element);
  return (
    (_0x3d7e2c == null ? undefined : _0x3d7e2c.type) === M.Container &&
    (_0x2048d4 == null ? undefined : _0x2048d4.hidden) !== true &&
    _0x3d7e2c.visible !== false &&
    _0x3d7e2c.locked !== true &&
    _0x3d7e2c.selectable !== false
  );
}
function Lc(_0x3ae920) {
  return _0x3ae920.map((_0x41884d) => {
    let _0x15ae96 = X(_0x41884d);
    return _0x15ae96.type !== M.Container ||
      !_0x15ae96.containerData["behavior"].membershipLocked ||
      so(_0x15ae96) ||
      _0x15ae96.containerData["behavior"].autoResize
      ? _0x15ae96
      : {
          ..._0x15ae96,
          containerData: {
            ..._0x15ae96.containerData,
            behavior: {
              ..._0x15ae96.containerData["behavior"],
              autoResize: true,
            },
          },
        };
  });
}
function Rc(_0x5d2b24) {
  let _0x24597c = new Map(
      _0x5d2b24.map((_0x288f33) => [_0x288f33.id, _0x288f33]),
    ),
    _0x4dfda6 = [],
    _0x3b9719 = new Set(),
    _0x5c9396 = (_0x57c964) => {
      if (_0x3b9719.has(_0x57c964.id)) return;
      let _0x19a444 = _0x57c964.parentId
        ? _0x24597c.get(_0x57c964.parentId)
        : undefined;
      (_0x19a444 && _0x5c9396(_0x19a444),
        _0x3b9719.add(_0x57c964.id),
        _0x4dfda6.push(_0x57c964));
    };
  return (_0x5d2b24.forEach(_0x5c9396), _0x4dfda6);
}
function zc(_0x56a0cc, _0x21628c) {
  var _0x545cd5;
  if (_0x21628c.laneId !== undefined) return _0x21628c.laneId;
  if (!_0x21628c.parentId) return;
  let _0x55bd2d =
    (_0x545cd5 = _0x56a0cc[_0x21628c.parentId]) == null
      ? undefined
      : _0x545cd5.element;
  if (
    (_0x55bd2d == null ? undefined : _0x55bd2d.type) !== M.Container ||
    _0x55bd2d.containerData["kind"] !== "swimlane"
  )
    return _0x21628c.laneId;
  let _0x3619f9 = U(_0x56a0cc, _0x21628c.id),
    _0x3641a4 = _0x3619f9
      ? tl(_0x56a0cc, _0x21628c.parentId, _0x3619f9)
      : undefined;
  if (_0x3641a4) return _0x3641a4;
}
function Bc(_0x360fcf, _0x1b828b) {
  return _0x1b828b.map((_0x48e1fc) => {
    let _0x2d2496 = zc(_0x360fcf, _0x48e1fc);
    return _0x48e1fc.laneId === _0x2d2496
      ? _0x48e1fc
      : { ..._0x48e1fc, laneId: _0x2d2496 };
  });
}
function Vc(_0x5dca06, _0x521787, _0x490d54) {
  return {
    unitId: _0x5dca06,
    subUnitId: _0x521787,
    elementId: _0x490d54.id,
    element: _0x490d54,
    transform: {
      left: _0x490d54.transform["left"],
      top: _0x490d54.transform["top"],
      width: _0x490d54.transform["width"],
      height: _0x490d54.transform["height"],
      angle: _0x490d54.transform["rotation"] ?? 0,
      flipX: _0x490d54.transform["flipX"],
      flipY: _0x490d54.transform["flipY"],
    },
  };
}
function Hc(_0x26e9a8, _0x18132f, _0x35560e) {
  if (
    _0x35560e === undefined ||
    _0x35560e < 0 ||
    _0x35560e >= _0x26e9a8.length
  ) {
    _0x26e9a8.push(_0x18132f);
    return;
  }
  _0x26e9a8.splice(_0x35560e, 0, _0x18132f);
}
function Uc(_0x1d8f1b) {
  let _0x5c08d3 = { ..._0x1d8f1b.elementData },
    _0x3559fb = [..._0x1d8f1b.elementOrder];
  return (
    _0x1d8f1b.orderedElements["forEach"]((_0x154675, _0x52e3f5) => {
      ((_0x5c08d3[_0x154675.id] = Vc(
        _0x1d8f1b.unitId,
        _0x1d8f1b.subUnitId,
        _0x154675,
      )),
        Hc(
          _0x3559fb,
          _0x154675.id,
          _0x1d8f1b.insertIndex === undefined
            ? undefined
            : _0x1d8f1b.insertIndex + _0x52e3f5,
        ));
    }),
    { elementData: _0x5c08d3, elementOrder: _0x3559fb }
  );
}
function Wc(_0x452e8a, _0x4a4c12) {
  return {
    ..._0x452e8a,
    transform: {
      ..._0x452e8a.transform,
      left: _0x4a4c12.left,
      top: _0x4a4c12.top,
      width: _0x4a4c12.width,
      height: _0x4a4c12.height,
      rotation: _0x4a4c12.angle,
      flipX: _0x4a4c12.flipX,
      flipY: _0x4a4c12.flipY,
    },
  };
}
function Gc(_0x36f350) {
  return _0x36f350.left === undefined ||
    _0x36f350.top === undefined ||
    _0x36f350.width === undefined ||
    _0x36f350.height === undefined
    ? null
    : {
        left: _0x36f350.left,
        top: _0x36f350.top,
        width: _0x36f350.width,
        height: _0x36f350.height,
      };
}
function Kc(_0x15c8a3, _0x2b6921) {
  return (
    _0x15c8a3.left !== _0x2b6921.left ||
    _0x15c8a3.top !== _0x2b6921.top ||
    _0x15c8a3.width !== _0x2b6921.width ||
    _0x15c8a3.height !== _0x2b6921.height
  );
}
function qc(_0x54655e, _0xa4177a) {
  return (
    (_0x54655e == null ? undefined : _0x54655e.left) !== _0xa4177a.left ||
    (_0x54655e == null ? undefined : _0x54655e.top) !== _0xa4177a.top ||
    (_0x54655e == null ? undefined : _0x54655e.width) !== _0xa4177a.width ||
    (_0x54655e == null ? undefined : _0x54655e.height) !== _0xa4177a.height ||
    (_0x54655e == null ? undefined : _0x54655e.angle) !== _0xa4177a.angle ||
    (_0x54655e == null ? undefined : _0x54655e.flipX) !== _0xa4177a.flipX ||
    (_0x54655e == null ? undefined : _0x54655e.flipY) !== _0xa4177a.flipY
  );
}
function Jc(_0x45c377) {
  let _0x280333 = Math.max(1, _0x45c377.containerIds["length"]);
  for (let _0x5bd091 = 0; _0x5bd091 < _0x280333; _0x5bd091++) {
    let _0x79c915 = false;
    if (
      (_0x45c377.containerIds["forEach"]((_0x443958) => {
        let _0x44d1f5 = _0x45c377.elementData[_0x443958],
          _0x4e65cd = _0x44d1f5 == null ? undefined : _0x44d1f5.element;
        if (
          !_0x4e65cd ||
          _0x4e65cd.type !== M.Container ||
          !_0x4e65cd.containerData["behavior"].membershipLocked ||
          !_0x4e65cd.containerData["behavior"].autoResize
        )
          return;
        let _0x186177 = U(_0x45c377.elementData, _0x443958);
        if (!_0x186177) return;
        let _0x1c8b46 = _0x45c377.elementOrder["filter"]((_0x150480) => {
            var _0x3c907c;
            return (
              ((_0x3c907c = _0x45c377.elementData[_0x150480]) == null
                ? undefined
                : _0x3c907c.element["parentId"]) === _0x443958
            );
          }),
          _0x38d708 = yi([
            Sc(_0x4e65cd, _0x186177),
            ..._0x1c8b46
              .filter((_0x35191a) => {
                var _0x43651b;
                return (
                  ((_0x43651b = _0x45c377.elementData[_0x35191a]) == null
                    ? undefined
                    : _0x43651b.element["type"]) !== M.Connector
                );
              })
              .map((_0x369db1) => U(_0x45c377.elementData, _0x369db1))
              .filter((_0x544a36) => !!_0x544a36),
          ]);
        if (!_0x38d708) return;
        let _0x4085ad = Ec(_0x4e65cd, _0x186177, _0x38d708);
        if (
          _0x4085ad.left === _0x186177.left &&
          _0x4085ad.top === _0x186177.top &&
          _0x4085ad.width === _0x186177.width &&
          _0x4085ad.height === _0x186177.height
        )
          return;
        let _0x3f31e9 = new Map(
            _0x1c8b46.map((_0x3645db) => {
              var _0x3ddebb;
              return [
                _0x3645db,
                (_0x3ddebb = H(_0x45c377.elementData, _0x3645db)) == null
                  ? undefined
                  : _0x3ddebb.worldTransform,
              ];
            }),
          ),
          _0x32f5cf = G(
            W(_0x45c377.elementData, {
              parentId: _0x4e65cd.parentId,
              worldTransform: {
                ..._0x4e65cd.transform,
                ..._0x4085ad,
                rotation: 0,
              },
            }),
          ),
          _0x2a451b = Wc(_0x4e65cd, _0x32f5cf);
        ((_0x45c377.elementData[_0x443958] = {
          ..._0x44d1f5,
          element: _0x2a451b,
          transform: _0x32f5cf,
        }),
          _0x45c377.redoMutations["push"]({
            id: $.id,
            params: {
              unitId: _0x45c377.unitId,
              subUnitId: _0x45c377.subUnitId,
              elementId: _0x443958,
              element: _0x381a86.deepClone(_0x2a451b),
              transform: _0x32f5cf,
              ...(_0x4e65cd.locked === true ? { allowLockedTarget: true } : {}),
            },
          }),
          (_0x79c915 = true),
          _0x3f31e9.forEach((_0x17cfdc, _0x1ffad6) => {
            let _0x1fd110 = _0x45c377.elementData[_0x1ffad6];
            if (!_0x1fd110 || !_0x17cfdc) return;
            let _0x320721 = G(
                W(_0x45c377.elementData, {
                  parentId: _0x443958,
                  worldTransform: _0x17cfdc,
                }),
              ),
              _0x35eb0b = Gc(_0x17cfdc),
              _0x2cca76 = Wc(
                {
                  ..._0x1fd110.element,
                  laneId: _0x35eb0b
                    ? tl(_0x45c377.elementData, _0x443958, _0x35eb0b)
                    : _0x1fd110.element["laneId"],
                },
                _0x320721,
              );
            ((_0x45c377.elementData[_0x1ffad6] = {
              ..._0x1fd110,
              element: _0x2cca76,
              transform: _0x320721,
            }),
              _0x45c377.redoMutations["push"]({
                id: $.id,
                params: {
                  unitId: _0x45c377.unitId,
                  subUnitId: _0x45c377.subUnitId,
                  elementId: _0x1ffad6,
                  element: _0x381a86.deepClone(_0x2cca76),
                  transform: _0x320721,
                  ...(_0x1fd110.element["locked"] === true
                    ? { allowLockedTarget: true }
                    : {}),
                },
              }));
          }));
      }),
      !_0x79c915)
    )
      break;
  }
}
function Yc(_0xfee513) {
  let _0x15444b = new Set(
      _0xfee513.addedElements["map"]((_0x408268) => _0x408268.id),
    ),
    _0x25e283 = new Set();
  _0xfee513.addedElements["forEach"]((_0xfa467c) => {
    let _0x225972 = _0xfa467c.parentId;
    for (; _0x225972 && !_0x15444b.has(_0x225972);) {
      let _0x208009 = _0xfee513.elementData[_0x225972];
      if (!_0x208009 || _0x208009.element["type"] !== M.Container) break;
      (_0x25e283.add(_0x225972), (_0x225972 = _0x208009.element["parentId"]));
    }
  });
  let _0x245ce1 = Array.from(_0x25e283).sort(
      (_0x39ca32, _0x5aa514) =>
        V(_0xfee513.elementData, _0x5aa514).length -
        V(_0xfee513.elementData, _0x39ca32).length,
    ),
    _0x154a0b = Math.max(1, _0x245ce1.length);
  for (let _0x3acf9a = 0; _0x3acf9a < _0x154a0b; _0x3acf9a++) {
    let _0x3cb679 = false;
    if (
      (_0x245ce1.forEach((_0x506f5f) => {
        let _0x2e4b68 = _0xfee513.elementData[_0x506f5f],
          _0x1fd735 = _0xfee513.originalElementData[_0x506f5f],
          _0x323c14 = _0x2e4b68 == null ? undefined : _0x2e4b68.element;
        if (
          !_0x1fd735 ||
          !_0x323c14 ||
          _0x323c14.type !== M.Container ||
          !_0x323c14.containerData["behavior"].autoResize
        )
          return;
        let _0x43a9c1 = U(_0xfee513.elementData, _0x506f5f);
        if (!_0x43a9c1) return;
        let _0x54ca42 = _0xfee513.elementOrder["filter"]((_0x2e5d73) => {
            var _0x55644b;
            return (
              ((_0x55644b = _0xfee513.elementData[_0x2e5d73]) == null
                ? undefined
                : _0x55644b.element["parentId"]) === _0x506f5f
            );
          }),
          _0x2dbcdb = yi([
            Sc(_0x323c14, _0x43a9c1),
            ..._0x54ca42
              .filter((_0x5a728c) => {
                var _0x23d27b;
                return (
                  ((_0x23d27b = _0xfee513.elementData[_0x5a728c]) == null
                    ? undefined
                    : _0x23d27b.element["type"]) !== M.Connector
                );
              })
              .map((_0x5f24f8) => U(_0xfee513.elementData, _0x5f24f8))
              .filter((_0x4f325d) => !!_0x4f325d),
          ]);
        if (!_0x2dbcdb) return;
        let _0x2c396b = Ec(_0x323c14, _0x43a9c1, _0x2dbcdb);
        if (!Kc(_0x43a9c1, _0x2c396b)) return;
        let _0x3aa24a = new Map(
            _0x54ca42.map((_0x488a37) => {
              var _0x41cc1b;
              return [
                _0x488a37,
                (_0x41cc1b = H(_0xfee513.elementData, _0x488a37)) == null
                  ? undefined
                  : _0x41cc1b.worldTransform,
              ];
            }),
          ),
          _0x457242 = G(
            W(_0xfee513.elementData, {
              parentId: _0x323c14.parentId,
              worldTransform: {
                ..._0x323c14.transform,
                ..._0x2c396b,
                rotation: 0,
              },
            }),
          ),
          _0x152493 = Wc(_0x323c14, _0x457242);
        ((_0xfee513.elementData[_0x506f5f] = {
          ..._0x2e4b68,
          element: _0x152493,
          transform: _0x457242,
        }),
          _0xfee513.redoMutations["push"]({
            id: $.id,
            params: {
              unitId: _0xfee513.unitId,
              subUnitId: _0xfee513.subUnitId,
              elementId: _0x506f5f,
              element: _0x381a86.deepClone(_0x152493),
              transform: _0x457242,
            },
          }),
          _0xfee513.undoMutations["unshift"]({
            id: $.id,
            params: {
              unitId: _0xfee513.unitId,
              subUnitId: _0xfee513.subUnitId,
              elementId: _0x506f5f,
              element: _0x381a86.deepClone(_0x1fd735.element),
              transform: _0x381a86.deepClone(_0x1fd735.transform),
            },
          }),
          (_0x3cb679 = true),
          _0x3aa24a.forEach((_0x325a19, _0x388eae) => {
            let _0x3c181d = _0xfee513.elementData[_0x388eae];
            if (!_0x3c181d || !_0x325a19) return;
            let _0x18c5da = G(
              W(_0xfee513.elementData, {
                parentId: _0x506f5f,
                worldTransform: _0x325a19,
              }),
            );
            if (!qc(_0x3c181d.transform, _0x18c5da)) return;
            let _0x2e257d = Wc(_0x3c181d.element, _0x18c5da);
            ((_0xfee513.elementData[_0x388eae] = {
              ..._0x3c181d,
              element: _0x2e257d,
              transform: _0x18c5da,
            }),
              _0xfee513.redoMutations["push"]({
                id: $.id,
                params: {
                  unitId: _0xfee513.unitId,
                  subUnitId: _0xfee513.subUnitId,
                  elementId: _0x388eae,
                  element: _0x381a86.deepClone(_0x2e257d),
                  transform: _0x18c5da,
                },
              }),
              _0xfee513.undoMutations["unshift"]({
                id: $.id,
                params: {
                  unitId: _0xfee513.unitId,
                  subUnitId: _0xfee513.subUnitId,
                  elementId: _0x388eae,
                  element: _0x381a86.deepClone(_0x3c181d.element),
                  transform: _0x381a86.deepClone(_0x3c181d.transform),
                },
              }));
          }));
      }),
      !_0x3cb679)
    )
      break;
  }
}
function Xc(_0x1b0561) {
  let _0x3edd40 = new Set(
      _0x1b0561.orderedElements["map"]((_0x3c47cd) => _0x3c47cd.id),
    ),
    _0x26e3f2 = _0x1b0561.orderedElements["filter"](
      (_0x59e76d) => _0x59e76d.type === M.Container,
    ).map((_0x4a9610) => _0x4a9610.id),
    _0x1a585d = [];
  (_0x26e3f2.forEach((_0xae4a08) => {
    let _0x2c1a60 = _0x1b0561.elementData[_0xae4a08];
    if (
      !_0x2c1a60 ||
      _0x2c1a60.element["type"] !== M.Container ||
      _0x2c1a60.element["containerData"].behavior["membershipLocked"] ||
      !_0x2c1a60.element["containerData"].behavior["autoCapture"]
    )
      return;
    let _0x9bf6fd = Object.keys(_0x1b0561.elementData).filter(
        (_0x44208a) => !_0x3edd40.has(_0x44208a),
      ),
      _0x440d21 = U(_0x1b0561.elementData, _0xae4a08),
      _0x5e7c3c =
        _0x440d21 &&
        _0x2c1a60.element["containerData"].kind !== "swimlane" &&
        _0x2c1a60.element["containerData"].behavior["autoResize"]
          ? _0x9bf6fd.filter((_0x58cfba) => {
              var _0x4e6922;
              if (
                (_0x4e6922 = _0x1b0561.elementData[_0x58cfba]) != null &&
                _0x4e6922.element["parentId"]
              )
                return false;
              let _0x23a48e = U(_0x1b0561.elementData, _0x58cfba);
              return !!_0x23a48e && gi(_0x440d21, _0x23a48e);
            })
          : [],
      _0x291ee9 = Dc({
        containerId: _0xae4a08,
        elementData: _0x1b0561.elementData,
        candidateElementIds: _0x9bf6fd,
        autosizeCaptureCandidateIds: _0x5e7c3c,
      }),
      _0x206a02 = mc({
        containerId: _0xae4a08,
        elementData: _0x1b0561.elementData,
        preview: _0x291ee9,
      });
    if (_0x206a02.captured["length"] > 0 && _0x206a02.autosized["length"] > 0) {
      let _0x3cd9e3 = _0x2c1a60.element,
        _0x3c3388 = _0x206a02.autosized[0].nextBounds,
        _0x3d5fa0 = G(
          W(_0x1b0561.elementData, {
            parentId: _0x3cd9e3.parentId,
            worldTransform: {
              ..._0x3cd9e3.transform,
              ..._0x3c3388,
              rotation: 0,
            },
          }),
        ),
        _0x4e6e07 = Wc(_0x3cd9e3, _0x3d5fa0);
      (_0x1b0561.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: _0x1b0561.unitId,
          subUnitId: _0x1b0561.subUnitId,
          elementId: _0xae4a08,
          element: _0x381a86.deepClone(_0x4e6e07),
          transform: _0x3d5fa0,
        },
      }),
        (_0x2c1a60 = {
          ..._0x2c1a60,
          element: _0x4e6e07,
          transform: _0x3d5fa0,
        }),
        (_0x1b0561.elementData[_0xae4a08] = _0x2c1a60));
    }
    _0x206a02.captured["forEach"](({ elementId: _0x59dc3d }) => {
      var _0x5e640b;
      let _0x14ff93 = _0x1b0561.elementData[_0x59dc3d],
        _0x184d50 =
          (_0x5e640b = H(_0x1b0561.elementData, _0x59dc3d)) == null
            ? undefined
            : _0x5e640b.worldTransform,
        _0x1f4a60 = U(_0x1b0561.elementData, _0x59dc3d);
      if (!_0x14ff93 || !_0x184d50 || !_0x1f4a60) return;
      let _0x592eb3 = G(
          W(_0x1b0561.elementData, {
            parentId: _0xae4a08,
            worldTransform: _0x184d50,
          }),
        ),
        _0xc66a71 = Wc(
          {
            ..._0x14ff93.element,
            parentId: _0xae4a08,
            laneId: tl(_0x1b0561.elementData, _0xae4a08, _0x1f4a60),
          },
          _0x592eb3,
        );
      (_0x1b0561.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: _0x1b0561.unitId,
          subUnitId: _0x1b0561.subUnitId,
          elementId: _0x59dc3d,
          element: _0x381a86.deepClone(_0xc66a71),
          transform: _0x592eb3,
          ...(_0x14ff93.element["locked"] === true
            ? { allowLockedTarget: true }
            : {}),
        },
      }),
        _0x1a585d.push({
          id: $.id,
          params: {
            unitId: _0x1b0561.unitId,
            subUnitId: _0x1b0561.subUnitId,
            elementId: _0x59dc3d,
            element: _0x381a86.deepClone(_0x14ff93.element),
            transform: _0x14ff93.transform
              ? { ..._0x14ff93.transform }
              : _0x14ff93.transform,
            ...(_0x14ff93.element["locked"] === true
              ? { allowLockedTarget: true }
              : {}),
          },
        }),
        (_0x1b0561.elementData[_0x59dc3d] = {
          ..._0x14ff93,
          element: _0xc66a71,
          transform: _0x592eb3,
        }));
    });
  }),
    _0x1a585d.length > 0 && _0x1b0561.undoMutations["unshift"](..._0x1a585d),
    Object.values(_0x1b0561.elementData).forEach((_0x25c19b) => {
      var _0x3f471f;
      if (!Q(_0x25c19b)) return;
      let _0x162a9f = oo(_0x1b0561.elementData, _0x25c19b.element);
      if (
        _0x25c19b.element["parentId"] === _0x162a9f.parentId &&
        _0x25c19b.element["laneId"] === _0x162a9f.laneId
      )
        return;
      let _0x58bc4f =
        (_0x3f471f = H(_0x1b0561.elementData, _0x25c19b.elementId)) == null
          ? undefined
          : _0x3f471f.worldTransform;
      if (!_0x58bc4f) return;
      let _0x36379c = G(
          W(_0x1b0561.elementData, {
            parentId: _0x162a9f.parentId,
            worldTransform: _0x58bc4f,
          }),
        ),
        _0x17709c = Wc(
          {
            ..._0x25c19b.element,
            parentId: _0x162a9f.parentId,
            laneId: _0x162a9f.laneId,
          },
          _0x36379c,
        );
      (_0x1b0561.redoMutations["push"]({
        id: $.id,
        params: {
          unitId: _0x1b0561.unitId,
          subUnitId: _0x1b0561.subUnitId,
          elementId: _0x25c19b.elementId,
          element: _0x381a86.deepClone(_0x17709c),
          transform: _0x36379c,
        },
      }),
        _0x1b0561.undoMutations["unshift"]({
          id: $.id,
          params: {
            unitId: _0x1b0561.unitId,
            subUnitId: _0x1b0561.subUnitId,
            elementId: _0x25c19b.elementId,
            element: _0x381a86.deepClone(_0x25c19b.element),
            transform: _0x25c19b.transform
              ? { ..._0x25c19b.transform }
              : _0x25c19b.transform,
          },
        }),
        (_0x1b0561.elementData[_0x25c19b.elementId] = {
          ..._0x25c19b,
          element: _0x17709c,
          transform: _0x36379c,
        }));
    }));
}
function Zc(_0x395ef3, _0x2c3a9e) {
  var _0x205257;
  let _0x7aaa42 =
      (_0x205257 = _0x395ef3[_0x2c3a9e]) == null
        ? undefined
        : _0x205257.element["parentId"],
    _0x28e4ac = new Set([_0x2c3a9e]);
  for (; _0x7aaa42;) {
    if (_0x28e4ac.has(_0x7aaa42)) return false;
    let _0xc4da30 = _0x395ef3[_0x7aaa42];
    if (!_0xc4da30) return false;
    if (_0xc4da30.hidden === true || _0xc4da30.element["visible"] === false)
      return true;
    (_0x28e4ac.add(_0x7aaa42), (_0x7aaa42 = _0xc4da30.element["parentId"]));
  }
  return false;
}
function Qc(_0x1d1d28, _0x63aaf2) {
  var _0x398e01;
  let _0x3efb3b =
      (_0x398e01 = _0x1d1d28[_0x63aaf2]) == null
        ? undefined
        : _0x398e01.element["parentId"],
    _0x5333f0 = new Set([_0x63aaf2]);
  for (; _0x3efb3b;) {
    if (_0x5333f0.has(_0x3efb3b)) return false;
    let _0x11fe81 = _0x1d1d28[_0x3efb3b];
    if (!_0x11fe81) return false;
    if (
      _0x11fe81.element["type"] === M.Container &&
      _0x11fe81.element["containerData"].behavior["membershipLocked"]
    )
      return true;
    (_0x5333f0.add(_0x3efb3b), (_0x3efb3b = _0x11fe81.element["parentId"]));
  }
  return false;
}
function $c(_0xc6d24b, _0x3baff6, _0x4e6065) {
  var _0x45b99e, _0x30358e;
  let _0x1e0349 =
      (_0x45b99e = _0xc6d24b[_0x3baff6]) == null
        ? undefined
        : _0x45b99e.element,
    _0x217994 =
      (_0x30358e = _0xc6d24b[_0x4e6065]) == null
        ? undefined
        : _0x30358e.element["parentId"];
  return !_0x217994 ||
    _0x217994 === _0x3baff6 ||
    !Vn(_0xc6d24b[_0x217994]) ||
    (_0x1e0349 == null ? undefined : _0x1e0349.type) !== M.Container
    ? true
    : V(_0xc6d24b, _0x3baff6).includes(_0x217994)
      ? _0x1e0349.containerData["capturePolicy"]
          .allowCaptureFromAncestorContainer === true
      : _0x1e0349.containerData["capturePolicy"]
          .allowCaptureFromSiblingContainer;
}
function el(_0xf0d026, _0xbb184f, _0x56a2d6) {
  var _0x1beae3, _0xa19a91;
  let _0x147dbd =
      (_0x1beae3 = _0xf0d026[_0xbb184f]) == null
        ? undefined
        : _0x1beae3.element,
    _0x1f2fd0 =
      (_0xa19a91 = _0xf0d026[_0x56a2d6]) == null
        ? undefined
        : _0xa19a91.element;
  return (_0x147dbd == null ? undefined : _0x147dbd.type) === M.Container
    ? $c(_0xf0d026, _0xbb184f, _0x56a2d6)
      ? (_0x1f2fd0 == null ? undefined : _0x1f2fd0.type) !== M.Container ||
        (_0x147dbd.containerData["behavior"].acceptsContainer &&
          _0x147dbd.containerData["behavior"].allowNested &&
          _0x147dbd.containerData["capturePolicy"].allowCaptureContainer &&
          !Wn(_0xf0d026, _0x56a2d6, _0xbb184f))
      : false
    : true;
}
function tl(_0xed5a87, _0xd0553, _0x45bb71) {
  var _0x1f84a4, _0x3c7db7;
  let _0x4fbd24 =
      (_0x1f84a4 = _0xed5a87[_0xd0553]) == null ? undefined : _0x1f84a4.element,
    _0xef8c84 = U(_0xed5a87, _0xd0553);
  if (!(
    !_0x4fbd24 ||
    _0x4fbd24.type !== M.Container ||
    _0x4fbd24.containerData["kind"] !== "swimlane" ||
    !_0xef8c84
  ))
    return (_0x3c7db7 = Ui(_0x4fbd24, _0xef8c84, _0x45bb71)) == null
      ? undefined
      : _0x3c7db7.lane["id"];
}
function nl(_0x35c5fd, _0x6f2c72, _0x1593f5, _0x3686c) {
  return _0x35c5fd.containerData["kind"] === "swimlane" &&
    _0x35c5fd.containerData["swimlane"]
    ? Ui(_0x35c5fd, _0x6f2c72, _0x3686c)
      ? true
      : _0x35c5fd.containerData["behavior"].autoResize &&
        Ii(_0x35c5fd, _0x6f2c72).some(
          ({ contentBounds: _0x2ae10e }) =>
            vi(_0x2ae10e, _0x3686c) &&
            (_0x3686c.width > _0x2ae10e.width ||
              _0x3686c.height > _0x2ae10e.height),
        )
    : gi(_0x1593f5, _0x3686c)
      ? true
      : _0x35c5fd.containerData["behavior"].autoResize &&
        vi(_0x1593f5, _0x3686c) &&
        (_0x3686c.width > _0x1593f5.width ||
          _0x3686c.height > _0x1593f5.height);
}
function rl(_0x2536a9) {
  let _0x232b35 = new Set(
    _0x2536a9.orderedElements["map"]((_0x215f37) => _0x215f37.id),
  );
  return _0x2536a9.orderedElements["some"]((_0x296dc6) => {
    if (
      _0x296dc6.type !== M.Container ||
      _0x296dc6.containerData["behavior"].membershipLocked ||
      !_0x296dc6.containerData["behavior"].autoCapture ||
      !_0x296dc6.containerData["behavior"].acceptsChildren ||
      !_0x296dc6.containerData["capturePolicy"].enabled ||
      _0x296dc6.visible === false ||
      (_0x296dc6.locked !== true && _0x296dc6.selectable !== false)
    )
      return false;
    let _0x29e94b = U(_0x2536a9.elementData, _0x296dc6.id);
    if (!_0x29e94b) return false;
    let _0x31ed18 = Sc(_0x296dc6, _0x29e94b);
    return Object.keys(_0x2536a9.elementData)
      .filter((_0x33f530) => !_0x232b35.has(_0x33f530))
      .some((_0x1161b2) => {
        let _0x386e2f = _0x2536a9.elementData[_0x1161b2],
          _0x3e6e5b = U(_0x2536a9.elementData, _0x1161b2);
        return (
          !!_0x3e6e5b &&
          (_0x386e2f == null ? undefined : _0x386e2f.element["visible"]) !==
            false &&
          (_0x386e2f == null ? undefined : _0x386e2f.hidden) !== true &&
          (_0x386e2f == null ? undefined : _0x386e2f.element["locked"]) !==
            true &&
          (_0x386e2f == null ? undefined : _0x386e2f.element["selectable"]) !==
            false &&
          (_0x386e2f == null ? undefined : _0x386e2f.element["type"]) !==
            M.Connector &&
          ((_0x386e2f == null ? undefined : _0x386e2f.element["type"]) !==
            M.Container ||
            !_0x386e2f.element["containerData"].behavior["membershipLocked"]) &&
          !Zc(_0x2536a9.elementData, _0x1161b2) &&
          !Qc(_0x2536a9.elementData, _0x1161b2) &&
          el(_0x2536a9.elementData, _0x296dc6.id, _0x1161b2) &&
          nl(_0x296dc6, _0x29e94b, _0x31ed18, _0x3e6e5b)
        );
      });
  });
}
function il(_0x36266a, _0x1057a7) {
  return _0x1057a7.some((_0x4113d1) => {
    var _0x378a1e;
    if (_0x4113d1.id !== $.id) return false;
    let _0x471cef = _0x4113d1.params;
    return (
      !!_0x471cef.elementId &&
      _0x471cef.allowLockedTarget !== true &&
      ((_0x378a1e = _0x36266a[_0x471cef.elementId]) == null
        ? undefined
        : _0x378a1e.element["locked"]) === true
    );
  });
}
const al = {
  id: "board.operation.add-elements",
  type: _0x3c65b3.OPERATION,
  handler: (_0x576370, _0x1d2fee) => {
    if (!_0x1d2fee) return false;
    let { unitId: _0xb93af2, subUnitId: _0x3c4425 } = _0x1d2fee,
      _0x538f19 = _0x576370.get(L),
      _0x1b386c = _0x538f19.getElementData(_0xb93af2, _0x3c4425),
      _0x254c75 = _0x538f19.getElementOrder(_0xb93af2, _0x3c4425),
      _0x2b1684 = ol({
        ..._0x1d2fee,
        elementData: _0x1b386c,
        elementOrder: _0x254c75,
      });
    if (!_0x2b1684) return false;
    let _0x23da5c = _0x576370.get(_0x3243d1);
    return _0x1c1693(_0x2b1684.redoMutations, _0x23da5c).result
      ? (_0x576370
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0xb93af2,
            redoMutations: _0x2b1684.redoMutations,
            undoMutations: _0x2b1684.undoMutations,
          }),
        true)
      : false;
  },
};
function ol(_0x527751) {
  if (_0x527751.elements["length"] === 0) return null;
  let {
      unitId: _0xe2076b,
      subUnitId: _0x3a2ee9,
      insertIndex: _0x29eed5,
      fitContainerId: _0x3976f3,
      elementData: _0x5cf220,
      elementOrder: _0x5b6659,
    } = _0x527751,
    _0x2daf35 = Lc(_0x527751.elements);
  if (!Fc(_0x2daf35, _0x5cf220) || !Ic(_0x3976f3, _0x2daf35, _0x5cf220))
    return null;
  let _0x369c3e = Rc(
      bs(
        _0x2daf35,
        Object.values(_0x5cf220).map((_0xa65572) => _0xa65572.element),
      ),
    ),
    _0xe14bde = Bc(
      Uc({
        unitId: _0xe2076b,
        subUnitId: _0x3a2ee9,
        elementData: _0x5cf220,
        elementOrder: _0x5b6659,
        orderedElements: _0x369c3e,
        insertIndex: _0x29eed5,
      }).elementData,
      _0x369c3e,
    ),
    _0x95498 = new Set(_0xe14bde.map((_0x516f33) => _0x516f33.id)),
    _0x5cb432 = _0xe14bde.map((_0x368c6f, _0x470084) => ({
      id: Ss.id,
      params: {
        unitId: _0xe2076b,
        subUnitId: _0x3a2ee9,
        element: _0x381a86.deepClone(_0x368c6f),
        insertIndex:
          _0x29eed5 === undefined ? undefined : _0x29eed5 + _0x470084,
        ...(_0x368c6f.parentId && _0x95498.has(_0x368c6f.parentId)
          ? { allowLockedParent: true }
          : {}),
      },
    })),
    _0x3f0176 = [..._0xe14bde]
      .reverse()
      .map((_0x3fa4d3) => ({
        id: ws.id,
        params: {
          unitId: _0xe2076b,
          subUnitId: _0x3a2ee9,
          elementId: _0x3fa4d3.id,
          elementType: _0x3fa4d3.type,
          ...(_0x3fa4d3.type === M.Container
            ? { containerKind: _0x3fa4d3.containerData["kind"] }
            : {}),
          ...(_0x3fa4d3.parentId && _0x95498.has(_0x3fa4d3.parentId)
            ? { allowLockedParent: true }
            : {}),
          ...(_0x3fa4d3.locked === true ? { allowLockedTarget: true } : {}),
        },
      })),
    _0x3adb4e = Uc({
      unitId: _0xe2076b,
      subUnitId: _0x3a2ee9,
      elementData: _0x5cf220,
      elementOrder: _0x5b6659,
      orderedElements: _0xe14bde,
      insertIndex: _0x29eed5,
    });
  if (
    (Jc({
      unitId: _0xe2076b,
      subUnitId: _0x3a2ee9,
      elementData: _0x3adb4e.elementData,
      elementOrder: _0x3adb4e.elementOrder,
      containerIds: _0xe14bde
        .filter(
          (_0x4d0c94) =>
            _0x4d0c94.type === M.Container &&
            _0x4d0c94.containerData["behavior"].membershipLocked &&
            _0x4d0c94.containerData["behavior"].autoResize,
        )
        .map((_0x254764) => _0x254764.id),
      redoMutations: _0x5cb432,
    }),
    _0x3976f3 ||
      Yc({
        unitId: _0xe2076b,
        subUnitId: _0x3a2ee9,
        originalElementData: _0x5cf220,
        elementData: _0x3adb4e.elementData,
        elementOrder: _0x3adb4e.elementOrder,
        addedElements: _0xe14bde,
        redoMutations: _0x5cb432,
        undoMutations: _0x3f0176,
      }),
    rl({ elementData: _0x3adb4e.elementData, orderedElements: _0xe14bde }))
  )
    return null;
  if (
    (_0x527751.captureExistingElements !== false &&
      Xc({
        unitId: _0xe2076b,
        subUnitId: _0x3a2ee9,
        elementData: _0x3adb4e.elementData,
        orderedElements: _0xe14bde,
        redoMutations: _0x5cb432,
        undoMutations: _0x3f0176,
      }),
    _0x3976f3)
  ) {
    let _0x3f7b1d = Pc({
      unitId: _0xe2076b,
      subUnitId: _0x3a2ee9,
      containerId: _0x3976f3,
      elementData: _0x3adb4e.elementData,
      elementOrder: _0x3adb4e.elementOrder,
    });
    _0x3f7b1d &&
      (_0x5cb432.push(..._0x3f7b1d.redoMutations),
      _0x3f0176.unshift(..._0x3f7b1d.undoMutations));
  }
  return il(_0x5cf220, _0x5cb432) || !No(_0x5cf220, _0x5cb432)
    ? null
    : { redoMutations: _0x5cb432, undoMutations: _0x3f0176 };
}
const sl = {
    id: "board.operation.add-element",
    type: _0x3c65b3.OPERATION,
    handler: (_0x443ee5, _0x5cb9d9) =>
      _0x5cb9d9
        ? al.handler(_0x443ee5, {
            unitId: _0x5cb9d9.unitId,
            subUnitId: _0x5cb9d9.subUnitId,
            elements: [_0x5cb9d9.element],
            insertIndex: _0x5cb9d9.insertIndex,
            fitContainerId: _0x5cb9d9.fitContainerId,
          })
        : false,
  },
  cl = _0x127a62("board.container-adapter.service");
var ll = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x4e1956) {
    return (
      this._adapters["push"](_0x4e1956),
      _0x4c56f0(() => {
        let _0x137d66 = this._adapters["indexOf"](_0x4e1956);
        _0x137d66 >= 0 && this._adapters["splice"](_0x137d66, 1);
      })
    );
  }
  beginContainerMode(_0x4a5697) {
    for (let _0x23bb35 of this._adapters)
      if (_0x23bb35.beginContainerMode(_0x4a5697)) return true;
    return false;
  }
  beginSwimlaneMode(_0x3c62d1) {
    for (let _0x171e06 of this._adapters) {
      var _0x1e07a9;
      if (
        (_0x1e07a9 = _0x171e06.beginSwimlaneMode) != null &&
        _0x1e07a9.call(_0x171e06, _0x3c62d1)
      )
        return true;
    }
    return false;
  }
};
const ul = {
    id: "board.operation.begin-container",
    type: _0x3c65b3.OPERATION,
    handler: (_0x550680, _0x9d6548) =>
      _0x9d6548 ? _0x550680.get(cl).beginContainerMode(_0x9d6548) : false,
  },
  dl = _0x127a62("board.export-adapter.service");
var fl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x18d247) {
    return (
      this._adapters["push"](_0x18d247),
      _0x4c56f0(() => {
        let _0x1c7357 = this._adapters["indexOf"](_0x18d247);
        _0x1c7357 >= 0 && this._adapters["splice"](_0x1c7357, 1);
      })
    );
  }
  beginExport(_0x56a8eb) {
    for (let _0x52c555 of this._adapters)
      if (_0x52c555.beginExport(_0x56a8eb)) return true;
    return false;
  }
};
const pl = {
    id: "board.operation.begin-export",
    type: _0x3c65b3.OPERATION,
    handler: (_0x2905bd, _0x1ea6ca) =>
      _0x1ea6ca ? _0x2905bd.get(dl).beginExport(_0x1ea6ca) : false,
  },
  ml = _0x127a62("board.import-adapter.service");
var hl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x1055e7) {
    return (
      this._adapters["push"](_0x1055e7),
      _0x4c56f0(() => {
        let _0x9f8099 = this._adapters["indexOf"](_0x1055e7);
        _0x9f8099 >= 0 && this._adapters["splice"](_0x9f8099, 1);
      })
    );
  }
  beginImport(_0x3a276c) {
    for (let _0x7cf7f3 of this._adapters)
      if (_0x7cf7f3.beginImport(_0x3a276c)) return true;
    return false;
  }
};
const gl = {
    id: "board.operation.begin-import",
    type: _0x3c65b3.OPERATION,
    handler: (_0x581f3e, _0x2b93df) =>
      _0x2b93df ? _0x581f3e.get(ml).beginImport(_0x2b93df) : false,
  },
  _l = _0x127a62("board.mind-map-adapter.service");
var vl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x1a8a78) {
    return (
      this._adapters["push"](_0x1a8a78),
      _0x4c56f0(() => {
        let _0x4370c5 = this._adapters["indexOf"](_0x1a8a78);
        _0x4370c5 >= 0 && this._adapters["splice"](_0x4370c5, 1);
      })
    );
  }
  beginMindMapMode(_0x18f84d) {
    for (let _0x122163 of this._adapters)
      if (_0x122163.beginMindMapMode(_0x18f84d)) return true;
    return false;
  }
};
const yl = {
    id: "board.operation.begin-mind-map",
    type: _0x3c65b3.OPERATION,
    handler: (_0xaec58c, _0x11c7c2) =>
      _0x11c7c2 ? _0xaec58c.get(_l).beginMindMapMode(_0x11c7c2) : false,
  },
  bl = _0x127a62("board.pen-adapter.service");
var xl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x4de934) {
    return (
      this._adapters["push"](_0x4de934),
      _0x4c56f0(() => {
        let _0x3b87bb = this._adapters["indexOf"](_0x4de934);
        _0x3b87bb >= 0 && this._adapters["splice"](_0x3b87bb, 1);
      })
    );
  }
  beginPenMode(_0x3501c9) {
    for (let _0x35baed of this._adapters)
      if (_0x35baed.beginPenMode(_0x3501c9)) return true;
    return false;
  }
};
const Sl = {
    id: "board.operation.begin-pen",
    type: _0x3c65b3.OPERATION,
    handler: (_0x138314, _0x3fa9ce) =>
      _0x3fa9ce ? _0x138314.get(bl).beginPenMode(_0x3fa9ce) : false,
  },
  Cl = _0x127a62("board.resources-adapter.service");
var wl = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x2893e4) {
    return (
      this._adapters["push"](_0x2893e4),
      _0x4c56f0(() => {
        let _0x3e016b = this._adapters["indexOf"](_0x2893e4);
        _0x3e016b >= 0 && this._adapters["splice"](_0x3e016b, 1);
      })
    );
  }
  beginResourcesPanel(_0x3fbf4f) {
    for (let _0x58309b of this._adapters)
      if (_0x58309b.beginResourcesPanel(_0x3fbf4f)) return true;
    return false;
  }
};
const Tl = {
    id: "board.operation.begin-resources",
    type: _0x3c65b3.OPERATION,
    handler: (_0x30ee31, _0x498519) =>
      _0x498519 ? _0x30ee31.get(Cl).beginResourcesPanel(_0x498519) : false,
  },
  El = {
    id: "board.operation.begin-swimlane",
    type: _0x3c65b3.OPERATION,
    handler: (_0x337b16, _0x5a7396) =>
      _0x5a7396 ? _0x337b16.get(cl).beginSwimlaneMode(_0x5a7396) : false,
  },
  Dl = _0x127a62("board.translate-adapter.service");
var Ol = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x3628ef) {
    return (
      this._adapters["push"](_0x3628ef),
      _0x4c56f0(() => {
        let _0x18738c = this._adapters["indexOf"](_0x3628ef);
        _0x18738c >= 0 && this._adapters["splice"](_0x18738c, 1);
      })
    );
  }
  beginTranslate(_0xc5656f) {
    for (let _0x44b390 of this._adapters)
      if (_0x44b390.beginTranslate(_0xc5656f)) return true;
    return false;
  }
};
const kl = {
  id: "board.operation.begin-translate",
  type: _0x3c65b3.OPERATION,
  handler: (_0x58b1b6, _0x54e37d) =>
    _0x54e37d ? _0x58b1b6.get(Dl).beginTranslate(_0x54e37d) : false,
};
function Al(_0xba766b, _0x309857, _0x3771ad) {
  return W(_0xba766b, { parentId: _0x309857, worldTransform: _0x3771ad });
}
function jl(_0x138eda, _0x20a1be) {
  return {
    ..._0x138eda,
    transform: {
      ..._0x138eda.transform,
      left: _0x20a1be.left,
      top: _0x20a1be.top,
      width: _0x20a1be.width,
      height: _0x20a1be.height,
      rotation: _0x20a1be.rotation ?? 0,
      flipX: _0x20a1be.flipX,
      flipY: _0x20a1be.flipY,
    },
  };
}
function Ml(_0x3fa4b3, _0x4c10f8) {
  if (_0x3fa4b3.containerData["kind"] !== "swimlane") return _0x3fa4b3;
  let _0x545fb4 = Ni(_0x3fa4b3, {
    left: _0x4c10f8.left ?? 0,
    top: _0x4c10f8.top ?? 0,
    width: _0x4c10f8.width ?? 0,
    height: _0x4c10f8.height ?? 0,
  });
  return _0x545fb4
    ? {
        ..._0x3fa4b3,
        containerData: {
          ..._0x3fa4b3.containerData,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          swimlane: _0x545fb4,
        },
      }
    : _0x3fa4b3;
}
function Nl(_0x25e33e, _0x517ca6 = false) {
  return (
    !_0x25e33e ||
    _0x25e33e.hidden === true ||
    _0x25e33e.element["visible"] === false ||
    (!_0x517ca6 && _0x25e33e.element["locked"] === true) ||
    _0x25e33e.element["selectable"] === false ||
    _0x25e33e.element["type"] === M.Connector
  );
}
function Pl(_0x8a8f3a, _0x4a1d07, _0x1a6460) {
  var _0x492a50;
  let _0x5227c0 = _0x8a8f3a[_0x4a1d07],
    _0x356599 = _0x5227c0 == null ? undefined : _0x5227c0.element,
    _0x1d36ce =
      (_0x492a50 = _0x8a8f3a[_0x1a6460]) == null
        ? undefined
        : _0x492a50.element;
  if (!_0x5227c0 || !_0x356599 || !_0x1d36ce || _0x356599.type !== M.Container)
    return false;
  let _0x3bf43b = _0x356599.containerData["behavior"];
  return _0x5227c0.hidden === true ||
    _0x356599.visible === false ||
    _0x356599.locked === true ||
    _0x356599.selectable === false ||
    _0x3bf43b.membershipLocked ||
    !_0x3bf43b.acceptsChildren
    ? false
    : _0x1d36ce.type !== M.Container ||
        (_0x3bf43b.acceptsContainer && _0x3bf43b.allowNested);
}
function Fl(_0x51cc58, _0x535d64, _0x37370c) {
  var _0x45f839, _0x5e62cd;
  if (!_0x535d64) return;
  let _0x29800a =
      (_0x45f839 = _0x51cc58[_0x535d64]) == null
        ? undefined
        : _0x45f839.element,
    _0x59af0e = U(_0x51cc58, _0x535d64);
  if (!(
    !_0x29800a ||
    _0x29800a.type !== M.Container ||
    _0x29800a.containerData["kind"] !== "swimlane" ||
    !_0x59af0e
  ))
    return (_0x5e62cd = Ui(_0x29800a, _0x59af0e, _0x37370c)) == null
      ? undefined
      : _0x5e62cd.lane["id"];
}
function Il(_0x1ed823, _0x2b6b9d, _0xe692d2) {
  return _0x1ed823.containerData["kind"] === "swimlane" &&
    _0x1ed823.containerData["swimlane"]
    ? !!Ui(_0x1ed823, _0x2b6b9d, _0xe692d2)
    : gi(bi(_0x1ed823, _0x2b6b9d).contentBounds, _0xe692d2);
}
function Ll(_0x388e31, _0x26e6e7, _0x22936b, _0x1eb47e) {
  var _0x52fdb8;
  let _0x81c53b = _0x26e6e7
      ? (_0x52fdb8 = _0x388e31[_0x26e6e7]) == null
        ? undefined
        : _0x52fdb8.element["parentId"]
      : undefined,
    _0x865305 = new Set([_0x22936b, _0x26e6e7 ?? ""]);
  for (; _0x81c53b;) {
    if (_0x865305.has(_0x81c53b)) return;
    let _0x4adf8c = _0x388e31[_0x81c53b],
      _0x369581 = U(_0x388e31, _0x81c53b);
    if (
      (_0x4adf8c == null ? undefined : _0x4adf8c.element["type"]) ===
        M.Container &&
      _0x369581 &&
      Pl(_0x388e31, _0x81c53b, _0x22936b) &&
      Il(_0x4adf8c.element, _0x369581, _0x1eb47e)
    )
      return _0x81c53b;
    (_0x865305.add(_0x81c53b),
      (_0x81c53b =
        _0x4adf8c == null ? undefined : _0x4adf8c.element["parentId"]));
  }
}
function Rl(_0x448812, _0x255048, _0x3ad510) {
  let _0x204b6b = _0x448812[_0x3ad510],
    _0x2081b7 = _0x204b6b == null ? undefined : _0x204b6b.element["parentId"],
    _0x392032 = _0x2081b7 ? _0x448812[_0x2081b7] : undefined;
  if (
    (_0x392032 == null ? undefined : _0x392032.element["type"]) ===
      M.Container &&
    _0x392032.element["containerData"].behavior["membershipLocked"]
  )
    return null;
  let _0x472b42 = Oc({
    elementData: _0x448812,
    elementOrder: _0x255048,
    activeContainerIds: [_0x3ad510],
  });
  return _0x472b42
    ? {
        parentId: _0x472b42.containerId,
        expandedOuterBounds: _0x472b42.expandedOuterBounds,
      }
    : null;
}
function zl(
  _0x32e14d,
  _0x5926e0,
  _0x47eadf,
  _0xe61596,
  _0x35c172,
  _0x15fe40 = {},
) {
  return {
    id: $.id,
    params: {
      unitId: _0x32e14d,
      subUnitId: _0x5926e0,
      elementId: _0x47eadf.elementId,
      element: _0xe61596,
      transform: fi(_0x35c172),
      ...(_0x15fe40.allowLockedTarget ? { allowLockedTarget: true } : {}),
    },
  };
}
function Bl(
  _0x5ed699,
  _0x2e49b9,
  _0x319c3a,
  _0x1711f3,
  _0x46030b,
  _0x30d489,
  _0x304e93 = {},
) {
  _0x5ed699.set(
    _0x1711f3.elementId,
    zl(_0x2e49b9, _0x319c3a, _0x1711f3, _0x46030b, _0x30d489, _0x304e93),
  );
}
function Vl(_0x11051a, _0x449977) {
  let _0x22dc86 = _0x449977.params,
    _0x44322c = _0x11051a[_0x22dc86.elementId];
  _0x44322c &&
    (_0x11051a[_0x22dc86.elementId] = {
      ..._0x44322c,
      element: _0x22dc86.element,
      transform: _0x22dc86.transform,
    });
}
function Hl(_0x5c3594, _0x342108, _0x684cd0, _0x146d3d = {}) {
  return {
    id: $.id,
    params: {
      unitId: _0x5c3594,
      subUnitId: _0x342108,
      elementId: _0x684cd0.elementId,
      element: X(_0x381a86.deepClone(_0x684cd0.element)),
      transform: _0x684cd0.transform
        ? { ..._0x684cd0.transform }
        : _0x684cd0.transform,
      ...(_0x146d3d.allowLockedTarget ? { allowLockedTarget: true } : {}),
    },
  };
}
function Ul(_0x3f7260, _0x7205c2) {
  return _0x7205c2.some((_0x5010f9) => {
    var _0x4cb51d;
    let _0x1e6e55 = _0x5010f9.params;
    return (
      !!_0x1e6e55.elementId &&
      _0x1e6e55.allowLockedTarget !== true &&
      ((_0x4cb51d = _0x3f7260[_0x1e6e55.elementId]) == null
        ? undefined
        : _0x4cb51d.element["locked"]) === true
    );
  });
}
function Wl(_0x125ee1, _0x10d77d) {
  let _0x113340 = new Map();
  return (
    Object.values(_0x125ee1).forEach((_0x161e00) => {
      var _0x45d2f2;
      if (_0x161e00.element["parentId"] !== _0x10d77d) return;
      let _0xa0387f =
        (_0x45d2f2 = H(_0x125ee1, _0x161e00.elementId)) == null
          ? undefined
          : _0x45d2f2.worldTransform;
      _0xa0387f && _0x113340.set(_0x161e00.elementId, _0xa0387f);
    }),
    _0x113340
  );
}
function Gl(_0x290acc) {
  let {
    unitId: _0x1f5364,
    subUnitId: _0x1b85ae,
    containerId: _0x4d71f2,
    elementData: _0x2ceba1,
    originalElementData: _0x4bc1a1,
    childWorldTransforms: _0x8e6e34,
    updateById: _0x1a8d71,
    undoById: _0xa4baa0,
  } = _0x290acc;
  _0x8e6e34.forEach((_0x3ee6ad, _0x33b01b) => {
    let _0x48b66c = _0x2ceba1[_0x33b01b];
    if (!_0x48b66c || _0x48b66c.element["parentId"] !== _0x4d71f2) return;
    let _0x47f876 = Al(_0x2ceba1, _0x4d71f2, _0x3ee6ad),
      _0x3f7d84 = jl(_0x48b66c.element, _0x47f876);
    (_0xa4baa0.set(
      _0x33b01b,
      _0xa4baa0.get(_0x33b01b) ??
        Hl(_0x1f5364, _0x1b85ae, _0x4bc1a1[_0x33b01b]),
    ),
      Bl(_0x1a8d71, _0x1f5364, _0x1b85ae, _0x48b66c, _0x3f7d84, _0x47f876),
      Vl(_0x2ceba1, _0x1a8d71.get(_0x33b01b)));
  });
}
function Kl(_0x49238c) {
  var _0x23427f;
  let {
    unitId: _0x5783f5,
    subUnitId: _0x755423,
    parentId: _0x3e31a5,
    elementData: _0x563b1e,
    originalElementData: _0xbf5c22,
    updateById: _0x52e8b4,
    undoById: _0x5e3924,
  } = _0x49238c;
  if (!_0x3e31a5) return;
  let _0x19e897 = _0x563b1e[_0x3e31a5];
  if (
    (_0x19e897 == null ? undefined : _0x19e897.element["type"]) !==
      M.Container ||
    !_0x19e897.element["containerData"].behavior["membershipLocked"] ||
    so(_0x19e897.element)
  )
    return;
  let _0x2ab92a = U(_0x563b1e, _0x3e31a5);
  if (!_0x2ab92a) return;
  let _0x346205 =
    (_0x23427f = mc({
      containerId: _0x3e31a5,
      elementData: _0x563b1e,
      preview: Dc({
        containerId: _0x3e31a5,
        elementData: _0x563b1e,
        candidateElementIds: [],
      }),
    }).autosized[0]) == null
      ? undefined
      : _0x23427f.nextBounds;
  if (
    !_0x346205 ||
    (_0x346205.left === _0x2ab92a.left &&
      _0x346205.top === _0x2ab92a.top &&
      _0x346205.width === _0x2ab92a.width &&
      _0x346205.height === _0x2ab92a.height)
  )
    return;
  let _0x5763e4 = Wl(_0x563b1e, _0x3e31a5),
    _0x25d1e3 = Al(_0x563b1e, _0x19e897.element["parentId"], {
      ..._0x19e897.element["transform"],
      ..._0x346205,
      rotation: 0,
    }),
    _0x123031 = jl(_0x19e897.element, _0x25d1e3);
  (_0x5e3924.set(
    _0x3e31a5,
    _0x5e3924.get(_0x3e31a5) ?? Hl(_0x5783f5, _0x755423, _0xbf5c22[_0x3e31a5]),
  ),
    Bl(_0x52e8b4, _0x5783f5, _0x755423, _0x19e897, _0x123031, _0x25d1e3),
    Vl(_0x563b1e, _0x52e8b4.get(_0x3e31a5)),
    Gl({
      unitId: _0x5783f5,
      subUnitId: _0x755423,
      containerId: _0x3e31a5,
      elementData: _0x563b1e,
      originalElementData: _0xbf5c22,
      childWorldTransforms: _0x5763e4,
      updateById: _0x52e8b4,
      undoById: _0x5e3924,
    }));
}
const ql = {
  id: "board.operation.commit-container-transform",
  type: _0x3c65b3.OPERATION,
  handler: (_0x33ba83, _0x3a1405) => {
    if (!(_0x3a1405 != null && _0x3a1405.containerId)) return false;
    let {
        unitId: _0x2edc14,
        subUnitId: _0x4998ff,
        containerId: _0x5a9cc6,
        interaction: _0x41f639,
      } = _0x3a1405,
      _0x4d29bf = _0x33ba83.get(L),
      _0x3e2637 = _0x4d29bf.getElementData(_0x2edc14, _0x4998ff),
      _0x4ac58a = _0x4d29bf.getElementOrder(_0x2edc14, _0x4998ff),
      _0x358590 = _0x3e2637[_0x5a9cc6];
    if (
      !_0x358590 ||
      _0x358590.element["type"] !== M.Container ||
      _0x358590.element["locked"]
    )
      return false;
    let _0xe348c8 = _0x3e2637,
      _0x2a2fda = { ..._0x3e2637 },
      _0x23081f = _0x358590.element,
      _0x4a6817 = jl(_0x23081f, {
        ..._0x23081f.transform,
        ..._0x3a1405.transform,
        rotation: 0,
      });
    _0x41f639 === "resize" && (_0x4a6817 = Ml(_0x4a6817, _0x4a6817.transform));
    let _0x3efa24 = new Map(),
      _0x3f13f5 = new Map();
    (_0x3f13f5.set(_0x5a9cc6, Hl(_0x2edc14, _0x4998ff, _0x358590)),
      Bl(
        _0x3efa24,
        _0x2edc14,
        _0x4998ff,
        _0x358590,
        _0x4a6817,
        _0x4a6817.transform,
      ),
      Vl(_0x2a2fda, _0x3efa24.get(_0x5a9cc6)));
    let _0x3c1fcd = U(_0xe348c8, _0x5a9cc6),
      _0x142e06 = U(_0x2a2fda, _0x5a9cc6);
    if (!_0x142e06) return false;
    let _0x489461 = Object.values(_0xe348c8)
      .filter((_0xb00a) => _0xb00a.element["parentId"] === _0x5a9cc6)
      .map((_0x234dbb) => _0x234dbb.elementId);
    if (_0x41f639 === "move" && _0x23081f.parentId) {
      let _0x49beb1 = _0x2a2fda[_0x23081f.parentId];
      if (
        (_0x49beb1 == null ? undefined : _0x49beb1.element["type"]) ===
          M.Container &&
        !_0x49beb1.element["containerData"].behavior["membershipLocked"]
      ) {
        let _0x443a59 = Dc({
          containerId: _0x23081f.parentId,
          elementData: _0x2a2fda,
          candidateElementIds: [],
        });
        if (
          mc({
            containerId: _0x23081f.parentId,
            elementData: _0x2a2fda,
            preview: _0x443a59,
          }).expelled["some"](
            ({ elementId: _0xfd9327 }) => _0xfd9327 === _0x5a9cc6,
          )
        ) {
          var _0x50d300;
          let _0x2e57fe = _0x2a2fda[_0x5a9cc6],
            _0xca8fe4 =
              (_0x50d300 = H(_0x2a2fda, _0x5a9cc6)) == null
                ? undefined
                : _0x50d300.worldTransform;
          if (_0x2e57fe && _0xca8fe4) {
            let _0x3dd222 = Ll(
                _0x2a2fda,
                _0x23081f.parentId,
                _0x5a9cc6,
                _0x142e06,
              ),
              _0x430e4b = Al(_0x2a2fda, _0x3dd222, _0xca8fe4);
            (Bl(
              _0x3efa24,
              _0x2edc14,
              _0x4998ff,
              _0x2e57fe,
              jl(
                {
                  ..._0x2e57fe.element,
                  parentId: _0x3dd222,
                  laneId: Fl(_0x2a2fda, _0x3dd222, _0x142e06),
                },
                _0x430e4b,
              ),
              _0x430e4b,
            ),
              Vl(_0x2a2fda, _0x3efa24.get(_0x5a9cc6)));
          }
        }
      }
    }
    if (
      (Kl({
        unitId: _0x2edc14,
        subUnitId: _0x4998ff,
        parentId: _0x23081f.parentId,
        elementData: _0x2a2fda,
        originalElementData: _0xe348c8,
        updateById: _0x3efa24,
        undoById: _0x3f13f5,
      }),
      _0x41f639 === "move")
    ) {
      var _0x3cc8c2;
      let _0x533845 = _0x2a2fda[_0x5a9cc6],
        _0x27ec37 =
          (_0x3cc8c2 = H(_0x2a2fda, _0x5a9cc6)) == null
            ? undefined
            : _0x3cc8c2.worldTransform;
      if (_0x533845 && _0x27ec37) {
        let _0x51e508 = Rl(_0x2a2fda, _0x4ac58a, _0x5a9cc6);
        if (_0x51e508 && _0x533845.element["parentId"] !== _0x51e508.parentId) {
          let _0x1248f9 = _0x2a2fda[_0x51e508.parentId],
            _0x130884 = U(_0x2a2fda, _0x51e508.parentId);
          if (
            (_0x1248f9 == null ? undefined : _0x1248f9.element["type"]) ===
              M.Container &&
            _0x130884 &&
            _0x51e508.expandedOuterBounds &&
            (_0x51e508.expandedOuterBounds["left"] !== _0x130884.left ||
              _0x51e508.expandedOuterBounds["top"] !== _0x130884.top ||
              _0x51e508.expandedOuterBounds["width"] !== _0x130884.width ||
              _0x51e508.expandedOuterBounds["height"] !== _0x130884.height)
          ) {
            let _0x9d98fc = Wl(_0x2a2fda, _0x51e508.parentId),
              _0x53c3b0 = Al(_0x2a2fda, _0x1248f9.element["parentId"], {
                ..._0x1248f9.element["transform"],
                ..._0x51e508.expandedOuterBounds,
                rotation: 0,
              }),
              _0x158d46 = jl(_0x1248f9.element, _0x53c3b0);
            (_0x3f13f5.set(
              _0x51e508.parentId,
              _0x3f13f5.get(_0x51e508.parentId) ??
                Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x51e508.parentId]),
            ),
              Bl(
                _0x3efa24,
                _0x2edc14,
                _0x4998ff,
                _0x1248f9,
                _0x158d46,
                _0x53c3b0,
              ),
              Vl(_0x2a2fda, _0x3efa24.get(_0x51e508.parentId)),
              Gl({
                unitId: _0x2edc14,
                subUnitId: _0x4998ff,
                containerId: _0x51e508.parentId,
                elementData: _0x2a2fda,
                originalElementData: _0xe348c8,
                childWorldTransforms: _0x9d98fc,
                updateById: _0x3efa24,
                undoById: _0x3f13f5,
              }));
          }
          let _0x786a74 = Al(_0x2a2fda, _0x51e508.parentId, _0x27ec37);
          (Bl(
            _0x3efa24,
            _0x2edc14,
            _0x4998ff,
            _0x533845,
            jl(
              { ..._0x533845.element, parentId: _0x51e508.parentId },
              _0x786a74,
            ),
            _0x786a74,
          ),
            Vl(_0x2a2fda, _0x3efa24.get(_0x5a9cc6)));
        }
      }
    }
    if (_0x41f639 === "move" && _0x3c1fcd) {
      let _0x4a0047 = {
        x: _0x142e06.left - _0x3c1fcd.left,
        y: _0x142e06.top - _0x3c1fcd.top,
      };
      if (_0x4a0047.x !== 0 || _0x4a0047.y !== 0) {
        let _0x48a2c8 = Un(_0x2a2fda, _0x5a9cc6),
          _0xc17c7c = new Set(_0x48a2c8),
          _0x416d16 = new Set([
            _0x5a9cc6,
            ..._0x48a2c8.filter((_0x5a17df) => {
              var _0x49f5ae;
              return (
                ((_0x49f5ae = _0x2a2fda[_0x5a17df]) == null
                  ? undefined
                  : _0x49f5ae.element["type"]) !== M.Connector
              );
            }),
          ]);
        (_0x48a2c8.forEach((_0x4f0981) => {
          let _0x25c130 = _0x2a2fda[_0x4f0981];
          if (!Q(_0x25c130)) return;
          let _0x1b844d = ni(_0x25c130.element, _0x4a0047);
          (_0x3f13f5.set(
            _0x4f0981,
            Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x4f0981]),
          ),
            Bl(
              _0x3efa24,
              _0x2edc14,
              _0x4998ff,
              _0x25c130,
              _0x1b844d,
              _0x1b844d.transform,
            ),
            Vl(_0x2a2fda, _0x3efa24.get(_0x4f0981)));
        }),
          Object.values(_0x2a2fda).forEach((_0x57601b) => {
            if (!Q(_0x57601b) || _0xc17c7c.has(_0x57601b.elementId)) return;
            let _0xa5d34e = ui(_0x57601b.element, _0x416d16, _0x4a0047);
            _0xa5d34e !== _0x57601b.element &&
              (_0x3f13f5.set(
                _0x57601b.elementId,
                _0x3f13f5.get(_0x57601b.elementId) ??
                  Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x57601b.elementId]),
              ),
              Bl(
                _0x3efa24,
                _0x2edc14,
                _0x4998ff,
                _0x57601b,
                _0xa5d34e,
                _0xa5d34e.transform,
              ),
              Vl(_0x2a2fda, _0x3efa24.get(_0x57601b.elementId)));
          }));
      }
    }
    _0x41f639 === "resize" &&
      _0x3c1fcd &&
      _0x489461.forEach((_0x4b562c) => {
        var _0x8427b9;
        let _0x35407d = _0xe348c8[_0x4b562c],
          _0x2796d0 =
            (_0x8427b9 = H(_0xe348c8, _0x4b562c)) == null
              ? undefined
              : _0x8427b9.worldTransform;
        if (!_0x35407d || !_0x2796d0) return;
        let _0x26f5c2 = Al(_0x2a2fda, _0x5a9cc6, _0x2796d0),
          _0x11e595 = jl(_0x35407d.element, _0x26f5c2);
        (_0x3f13f5.set(_0x4b562c, Hl(_0x2edc14, _0x4998ff, _0x35407d)),
          Bl(_0x3efa24, _0x2edc14, _0x4998ff, _0x35407d, _0x11e595, _0x26f5c2),
          Vl(_0x2a2fda, _0x3efa24.get(_0x4b562c)));
      });
    let _0x1e3d21 = _0x2a2fda[_0x5a9cc6];
    if (!_0x1e3d21 || _0x1e3d21.element["type"] !== M.Container) return false;
    let _0x4c7bea = _0x1e3d21.element,
      _0x5c9288 = bi(_0x4c7bea, _0x142e06),
      _0x509683 = new Set([_0x5a9cc6, ...Un(_0x2a2fda, _0x5a9cc6)]),
      _0x464449 = mc({
        containerId: _0x5a9cc6,
        elementData: _0x2a2fda,
        preview: Dc({
          containerId: _0x5a9cc6,
          elementData: _0x2a2fda,
          candidateElementIds: Object.values(_0x2a2fda)
            .map((_0x2e3835) => _0x2e3835.elementId)
            .filter((_0x14daa7) => !_0x509683.has(_0x14daa7)),
        }),
      });
    if (
      _0x4c7bea.containerData["behavior"].membershipLocked &&
      !so(_0x4c7bea) &&
      _0x464449.autosized["length"] > 0
    ) {
      let _0x37dddd = _0x464449.autosized[0].nextBounds;
      if (
        _0x37dddd.left !== _0x142e06.left ||
        _0x37dddd.top !== _0x142e06.top ||
        _0x37dddd.width !== _0x142e06.width ||
        _0x37dddd.height !== _0x142e06.height
      ) {
        let _0x55e0cc = Wl(_0x2a2fda, _0x5a9cc6),
          _0x887374 = Al(_0x2a2fda, _0x4c7bea.parentId, {
            ..._0x4c7bea.transform,
            ..._0x37dddd,
            rotation: 0,
          });
        ((_0x4c7bea = jl(_0x4c7bea, _0x887374)),
          Bl(_0x3efa24, _0x2edc14, _0x4998ff, _0x1e3d21, _0x4c7bea, _0x887374),
          Vl(_0x2a2fda, _0x3efa24.get(_0x5a9cc6)),
          Gl({
            unitId: _0x2edc14,
            subUnitId: _0x4998ff,
            containerId: _0x5a9cc6,
            elementData: _0x2a2fda,
            originalElementData: _0xe348c8,
            childWorldTransforms: _0x55e0cc,
            updateById: _0x3efa24,
            undoById: _0x3f13f5,
          }),
          (_0x5c9288 = bi(_0x4c7bea, _0x37dddd)));
      }
    }
    if (!_0x4c7bea.containerData["behavior"].membershipLocked) {
      var _0x402098;
      let _0x56e89a = _0x4c7bea.parentId
          ? (_0x402098 = _0x2a2fda[_0x4c7bea.parentId]) == null
            ? undefined
            : _0x402098.element
          : undefined,
        _0x5bad79 =
          (_0x56e89a == null ? undefined : _0x56e89a.type) === M.Container &&
          _0x56e89a.containerData["behavior"].membershipLocked,
        _0x58bb20 = mc({
          containerId: _0x5a9cc6,
          elementData: _0x2a2fda,
          preview: Dc({
            containerId: _0x5a9cc6,
            elementData: _0x2a2fda,
            candidateElementIds: Object.values(_0x2a2fda)
              .map((_0x36d642) => _0x36d642.elementId)
              .filter((_0x16ef9a) => !_0x509683.has(_0x16ef9a)),
            previewOuterBounds: _0x5c9288.outerBounds,
          }),
        });
      if (_0x58bb20.autosized["length"] > 0) {
        let _0x1188c7 = _0x58bb20.autosized[0].nextBounds;
        if (
          _0x1188c7.left !== _0x5c9288.outerBounds["left"] ||
          _0x1188c7.top !== _0x5c9288.outerBounds["top"] ||
          _0x1188c7.width !== _0x5c9288.outerBounds["width"] ||
          _0x1188c7.height !== _0x5c9288.outerBounds["height"]
        ) {
          let _0x265729 = Wl(_0x2a2fda, _0x5a9cc6),
            _0x15ae8a = Al(_0x2a2fda, _0x4c7bea.parentId, {
              ..._0x4c7bea.transform,
              ..._0x1188c7,
              rotation: 0,
            });
          ((_0x4c7bea = jl(_0x4c7bea, _0x15ae8a)),
            Bl(
              _0x3efa24,
              _0x2edc14,
              _0x4998ff,
              _0x1e3d21,
              _0x4c7bea,
              _0x15ae8a,
            ),
            Vl(_0x2a2fda, _0x3efa24.get(_0x5a9cc6)),
            Gl({
              unitId: _0x2edc14,
              subUnitId: _0x4998ff,
              containerId: _0x5a9cc6,
              elementData: _0x2a2fda,
              originalElementData: _0xe348c8,
              childWorldTransforms: _0x265729,
              updateById: _0x3efa24,
              undoById: _0x3f13f5,
            }),
            (_0x5c9288 = bi(_0x4c7bea, _0x1188c7)));
        }
      }
      (_0x41f639 === "resize" &&
        !_0x5bad79 &&
        _0x58bb20.expelled["forEach"](({ elementId: _0x513dae }) => {
          var _0x118bb0;
          let _0x2239fc = _0x2a2fda[_0x513dae];
          if (!_0x2239fc || Nl(_0x2239fc)) return;
          let _0x17758e =
              (_0x118bb0 = H(_0x2a2fda, _0x513dae)) == null
                ? undefined
                : _0x118bb0.worldTransform,
            _0x5ab0ad = U(_0x2a2fda, _0x513dae);
          if (!_0x17758e || !_0x5ab0ad) return;
          let _0x36b233 =
              _0x4c7bea.parentId && Pl(_0x2a2fda, _0x4c7bea.parentId, _0x513dae)
                ? _0x4c7bea.parentId
                : undefined,
            _0x1ffce9 = Al(_0x2a2fda, _0x36b233, _0x17758e),
            _0x399a92 = jl(
              {
                ..._0x2239fc.element,
                parentId: _0x36b233,
                laneId: Fl(_0x2a2fda, _0x36b233, _0x5ab0ad),
              },
              _0x1ffce9,
            );
          (_0x3f13f5.set(
            _0x513dae,
            _0x3f13f5.get(_0x513dae) ??
              Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x513dae]),
          ),
            Bl(
              _0x3efa24,
              _0x2edc14,
              _0x4998ff,
              _0x2239fc,
              _0x399a92,
              _0x1ffce9,
            ),
            Vl(_0x2a2fda, _0x3efa24.get(_0x513dae)));
        }),
        _0x58bb20.captured["forEach"](({ elementId: _0x146ccd }) => {
          var _0x392f5a;
          let _0x430b14 = _0x2a2fda[_0x146ccd],
            _0xff86f1 =
              (_0x430b14 == null ? undefined : _0x430b14.element["locked"]) ===
                true &&
              _0x4c7bea.containerData["capturePolicy"]
                .allowCaptureLockedObjects === true;
          if (
            Nl(
              _0x430b14,
              _0x4c7bea.containerData["capturePolicy"]
                .allowCaptureLockedObjects === true,
            )
          )
            return;
          let _0x1a86cf =
              (_0x392f5a = H(_0x2a2fda, _0x146ccd)) == null
                ? undefined
                : _0x392f5a.worldTransform,
            _0x1a6968 = U(_0x2a2fda, _0x146ccd);
          if (!_0x1a86cf || !_0x1a6968) return;
          let _0x3e5462 = Al(_0x2a2fda, _0x5a9cc6, _0x1a86cf),
            _0x3b67e0 = jl(
              {
                ..._0x430b14.element,
                parentId: _0x5a9cc6,
                laneId: Fl(_0x2a2fda, _0x5a9cc6, _0x1a6968),
              },
              _0x3e5462,
            );
          (_0x3f13f5.set(
            _0x146ccd,
            Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x146ccd], {
              allowLockedTarget: _0xff86f1,
            }),
          ),
            Bl(
              _0x3efa24,
              _0x2edc14,
              _0x4998ff,
              _0x430b14,
              _0x3b67e0,
              _0x3e5462,
              { allowLockedTarget: _0xff86f1 },
            ),
            Vl(_0x2a2fda, _0x3efa24.get(_0x146ccd)));
        }));
    }
    Object.values(_0x2a2fda).forEach((_0xc21b01) => {
      var _0x4239cb;
      if (!Q(_0xc21b01)) return;
      let _0x59b53e = di(_0xc21b01.element, new Set([_0x5a9cc6]), _0x2a2fda);
      _0x59b53e !== _0xc21b01.element &&
        (_0x3f13f5.set(
          _0xc21b01.elementId,
          _0x3f13f5.get(_0xc21b01.elementId) ??
            Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0xc21b01.elementId]),
        ),
        Bl(
          _0x3efa24,
          _0x2edc14,
          _0x4998ff,
          _0xc21b01,
          _0x59b53e,
          _0x59b53e.transform,
        ),
        Vl(_0x2a2fda, _0x3efa24.get(_0xc21b01.elementId)));
      let _0x15da65 = _0x2a2fda[_0xc21b01.elementId];
      if (!Q(_0x15da65)) return;
      _0x59b53e = _0x15da65.element;
      let _0x592369 = oo(_0x2a2fda, _0x59b53e);
      if (
        _0x59b53e.parentId === _0x592369.parentId &&
        _0x59b53e.laneId === _0x592369.laneId
      )
        return;
      let _0x575dc1 =
        (_0x4239cb = H(_0x2a2fda, _0x15da65.elementId)) == null
          ? undefined
          : _0x4239cb.worldTransform;
      if (!_0x575dc1) return;
      let _0x1efd28 = Al(_0x2a2fda, _0x592369.parentId, _0x575dc1),
        _0x1a9fc7 = jl(
          {
            ..._0x59b53e,
            parentId: _0x592369.parentId,
            laneId: _0x592369.laneId,
          },
          _0x1efd28,
        );
      (_0x3f13f5.set(
        _0x15da65.elementId,
        _0x3f13f5.get(_0x15da65.elementId) ??
          Hl(_0x2edc14, _0x4998ff, _0xe348c8[_0x15da65.elementId]),
      ),
        Bl(_0x3efa24, _0x2edc14, _0x4998ff, _0x15da65, _0x1a9fc7, _0x1efd28),
        Vl(_0x2a2fda, _0x3efa24.get(_0x15da65.elementId)));
    });
    let _0x3b1153 = Array.from(_0x3efa24.values());
    return _0x3b1153.length === 0 ||
      Ul(_0xe348c8, _0x3b1153) ||
      !Mo(_0xe348c8, _0x3b1153) ||
      !_0x1c1693(_0x3b1153, _0x33ba83.get(_0x3243d1)).result
      ? false
      : (_0x33ba83
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x2edc14,
            redoMutations: _0x3b1153,
            undoMutations: Array.from(_0x3f13f5.values()).reverse(),
          }),
        true);
  },
};
function Jl(_0x142f0b, _0x36c77d) {
  return {
    ..._0x142f0b,
    transform: {
      ..._0x142f0b.transform,
      left: _0x36c77d.left,
      top: _0x36c77d.top,
      width: _0x36c77d.width,
      height: _0x36c77d.height,
      rotation: _0x36c77d.angle,
      flipX: _0x36c77d.flipX,
      flipY: _0x36c77d.flipY,
    },
  };
}
function Yl(_0x3845ea, _0x4dbfd2, _0x5329a6) {
  var _0x381398;
  if (!_0x4dbfd2) return true;
  let _0x14dcf6 =
    (_0x381398 = _0x3845ea[_0x4dbfd2]) == null ? undefined : _0x381398.element;
  if (!_0x14dcf6 || _0x14dcf6.type !== M.Container) return false;
  let _0x235e65 = _0x14dcf6.containerData["behavior"];
  return _0x235e65.membershipLocked || !_0x235e65.acceptsChildren
    ? false
    : _0x5329a6.every((_0x39d67d) => {
        var _0x1c29cc;
        let _0xc87ce3 =
          (_0x1c29cc = _0x3845ea[_0x39d67d]) == null
            ? undefined
            : _0x1c29cc.element;
        return (
          (_0xc87ce3 == null ? undefined : _0xc87ce3.type) !== M.Container ||
          (_0x235e65.acceptsContainer && _0x235e65.allowNested)
        );
      });
}
function Xl(_0x6256ef, _0x1c568b, _0x5eddf2) {
  var _0x292e36, _0x327122;
  if (!_0x1c568b || !_0x5eddf2) return;
  let _0x467271 =
      (_0x292e36 = _0x6256ef[_0x1c568b]) == null
        ? undefined
        : _0x292e36.element,
    _0x364d41 = U(_0x6256ef, _0x1c568b);
  if (!(
    !_0x467271 ||
    _0x467271.type !== M.Container ||
    _0x467271.containerData["kind"] !== "swimlane" ||
    !_0x364d41
  ))
    return (_0x327122 = Ui(_0x467271, _0x364d41, _0x5eddf2)) == null
      ? undefined
      : _0x327122.lane["id"];
}
const Zl = {
    id: "board.operation.disband-container",
    type: _0x3c65b3.OPERATION,
    handler: (_0x325155, _0x3f9f02) => {
      if (!(_0x3f9f02 != null && _0x3f9f02.containerId)) return false;
      let {
          unitId: _0x4ac241,
          subUnitId: _0x1fb07c,
          containerId: _0xabe683,
        } = _0x3f9f02,
        _0x4c2bed = _0x325155.get(L),
        _0x508560 = _0x4c2bed.getElementData(_0x4ac241, _0x1fb07c),
        _0x342599 = _0x4c2bed.getElementOrder(_0x4ac241, _0x1fb07c),
        _0xa6b517 = _0x508560[_0xabe683];
      if (
        !_0xa6b517 ||
        _0xa6b517.element["type"] !== M.Container ||
        _0xa6b517.element["locked"]
      )
        return false;
      let _0x2d4028 = _0xa6b517.element["parentId"],
        _0x20efa9 = _0x342599.filter((_0x5695aa) => {
          var _0x56aa11;
          return (
            ((_0x56aa11 = _0x508560[_0x5695aa]) == null
              ? undefined
              : _0x56aa11.element["parentId"]) === _0xabe683
          );
        });
      if (!Yl(_0x508560, _0x2d4028, _0x20efa9)) return false;
      let _0xf6eb61 = [],
        _0x34e4a5 = { ..._0x508560 },
        _0x2701a7 = (_0x3cf472, _0x241081, _0x355487) => {
          ((_0x34e4a5[_0x3cf472.elementId] = {
            ..._0x3cf472,
            element: _0x241081,
            transform: _0x355487,
          }),
            _0xf6eb61.push({
              id: $.id,
              params: {
                unitId: _0x4ac241,
                subUnitId: _0x1fb07c,
                elementId: _0x3cf472.elementId,
                element: _0x241081,
                transform: _0x355487,
              },
            }));
        };
      (_0x20efa9.forEach((_0x446d7a) => {
        var _0x6187ae;
        let _0x482b2c = _0x508560[_0x446d7a];
        if (
          (_0x482b2c == null ? undefined : _0x482b2c.element["type"]) ===
          M.Connector
        )
          return;
        let _0x268794 =
            (_0x6187ae = H(_0x508560, _0x446d7a)) == null
              ? undefined
              : _0x6187ae.worldTransform,
          _0x931275 = U(_0x508560, _0x446d7a);
        if (!_0x482b2c || !_0x268794) return;
        let _0x5a4d28 = G(
            W(_0x508560, {
              parentId: _0x2d4028,
              worldTransform: Xn(G(_0x268794)),
            }),
          ),
          _0x9c1cbf = Jl(
            {
              ..._0x482b2c.element,
              parentId: _0x2d4028,
              laneId: Xl(_0x508560, _0x2d4028, _0x931275),
            },
            _0x5a4d28,
          );
        _0x2701a7(_0x482b2c, _0x9c1cbf, _0x5a4d28);
      }),
        _0x20efa9.forEach((_0x53c378) => {
          var _0x2cab5a;
          let _0x3442a6 = _0x508560[_0x53c378];
          if (!_0x3442a6 || _0x3442a6.element["type"] !== M.Connector) return;
          let _0x5b70fa =
            (_0x2cab5a = H(_0x508560, _0x53c378)) == null
              ? undefined
              : _0x2cab5a.worldTransform;
          if (!_0x5b70fa) return;
          let _0x191400 = { ..._0x3442a6.element, parentId: _0x2d4028 },
            _0x2f8b70 = oo(_0x34e4a5, _0x191400),
            _0x258650 = G(
              W(_0x34e4a5, {
                parentId: _0x2f8b70.parentId,
                worldTransform: Xn(G(_0x5b70fa)),
              }),
            ),
            _0x2e8fd3 = Jl(
              {
                ..._0x3442a6.element,
                parentId: _0x2f8b70.parentId,
                laneId: _0x2f8b70.laneId,
              },
              _0x258650,
            );
          _0x2701a7(_0x3442a6, _0x2e8fd3, _0x258650);
        }));
      let _0x4282fb = [
          ..._0xf6eb61,
          {
            id: dc.id,
            params: {
              unitId: _0x4ac241,
              subUnitId: _0x1fb07c,
              elementId: _0xabe683,
            },
          },
        ],
        _0xdd839f = [
          {
            id: Ss.id,
            params: {
              unitId: _0x4ac241,
              subUnitId: _0x1fb07c,
              element: X(_0x381a86.deepClone(_0xa6b517.element)),
              insertIndex: _0x342599.indexOf(_0xabe683),
            },
          },
          ..._0x20efa9.map((_0x17d7d3) => {
            let _0x36949f = _0x508560[_0x17d7d3];
            return {
              id: $.id,
              params: {
                unitId: _0x4ac241,
                subUnitId: _0x1fb07c,
                elementId: _0x17d7d3,
                element: X(_0x381a86.deepClone(_0x36949f.element)),
                transform: _0x36949f.transform
                  ? { ..._0x36949f.transform }
                  : _0x36949f.transform,
              },
            };
          }),
        ];
      return !No(_0x508560, _0x4282fb) ||
        !_0x1c1693(_0x4282fb, _0x325155.get(_0x3243d1)).result
        ? false
        : (_0x325155
            .get(_0x3cfbb3)
            .pushUndoRedo({
              unitID: _0x4ac241,
              redoMutations: _0x4282fb,
              undoMutations: _0xdd839f,
            }),
          true);
    },
  },
  Ql = "mindmap",
  $l = "mindmap-container",
  eu = "mindmap-node",
  tu = "mindmap-tree-edge",
  nu = "mindmap-node-decoration";
function ru(_0x238c25) {
  return (_0x238c25 == null ? undefined : _0x238c25.custom) ?? null;
}
function iu(_0x4998ad) {
  var _0x24993d;
  return (
    ((_0x24993d = ru(_0x4998ad)) == null ||
    (_0x24993d = _0x24993d.structured) == null
      ? undefined
      : _0x24993d.modeId) === Ql
  );
}
function au(_0x5a4d68) {
  var _0x274a2a;
  let _0x583eb4 =
    (_0x274a2a = ru(_0x5a4d68)) == null ? undefined : _0x274a2a.structured;
  return (
    (_0x583eb4 == null ? undefined : _0x583eb4.modeId) === "mindmap" &&
    _0x583eb4.semanticRole === "mindmap-node"
  );
}
function ou(_0x4ba91b) {
  var _0x19a0db, _0x1f5664;
  let _0x37bff5 = ru(_0x4ba91b);
  return (
    (_0x37bff5 == null || (_0x19a0db = _0x37bff5.structured) == null
      ? undefined
      : _0x19a0db.modeId) === "mindmap" &&
    ((_0x1f5664 = _0x37bff5.mindmap) == null
      ? undefined
      : _0x1f5664.managed) === true
  );
}
function su(_0xa8bc19, _0x3719aa) {
  let _0x4b6398 = ru(_0xa8bc19),
    _0x25fce1 = _0x4b6398 == null ? undefined : _0x4b6398.structured,
    _0x2a9100 = _0x4b6398 == null ? undefined : _0x4b6398.mindmap;
  if (
    (_0x25fce1 == null ? undefined : _0x25fce1.modeId) !== "mindmap" ||
    !_0x2a9100
  )
    return _0xa8bc19;
  let _0x4b3b2a = (_0x4ef87f) =>
      typeof _0x4ef87f == "string"
        ? (_0x3719aa.get(_0x4ef87f) ?? _0x4ef87f)
        : _0x4ef87f,
    _0xeb79f = {
      ..._0x2a9100,
      ...(_0x25fce1.semanticRole === "mindmap-container"
        ? { rootNodeId: _0x4b3b2a(_0x2a9100.rootNodeId) }
        : null),
      ...(_0x25fce1.semanticRole === "mindmap-node"
        ? { parentNodeId: _0x4b3b2a(_0x2a9100.parentNodeId) }
        : null),
      ...(_0x25fce1.semanticRole === "mindmap-tree-edge"
        ? {
            parentNodeId: _0x4b3b2a(_0x2a9100.parentNodeId),
            childNodeId: _0x4b3b2a(_0x2a9100.childNodeId),
          }
        : null),
      ...(_0x25fce1.semanticRole === "mindmap-node-decoration"
        ? { ownerNodeId: _0x4b3b2a(_0x2a9100.ownerNodeId) }
        : null),
    };
  return {
    ..._0xa8bc19,
    custom: {
      ...(_0xa8bc19.custom ?? {}),
      structured: {
        ..._0x25fce1,
        structureScopeId: _0x4b3b2a(_0x25fce1.structureScopeId),
      },
      mindmap: _0xeb79f,
    },
  };
}
const cu = { left: 0, top: 0, width: 640, height: 420 };
function lu(_0x4fb009) {
  return _0x4fb009 + "-" + _0x2928b2(6);
}
function uu(_0x48bb05) {
  return {
    left: Number.isFinite(_0x48bb05 == null ? undefined : _0x48bb05.left)
      ? _0x48bb05.left
      : cu.left,
    top: Number.isFinite(_0x48bb05 == null ? undefined : _0x48bb05.top)
      ? _0x48bb05.top
      : cu.top,
    width:
      Number.isFinite(_0x48bb05 == null ? undefined : _0x48bb05.width) &&
      _0x48bb05.width > 0
        ? _0x48bb05.width
        : cu.width,
    height:
      Number.isFinite(_0x48bb05 == null ? undefined : _0x48bb05.height) &&
      _0x48bb05.height > 0
        ? _0x48bb05.height
        : cu.height,
  };
}
function du(_0x37c67e) {
  let _0x7e2174 = _0x37c67e.reduce(
    (_0x5766a2, _0xfb9504) => (
      (_0x5766a2[_0xfb9504.id] = {
        unitId: "",
        subUnitId: "",
        elementId: _0xfb9504.id,
        element: _0xfb9504,
      }),
      _0x5766a2
    ),
    {},
  );
  return _0x37c67e.flatMap((_0x55853f) => U(_0x7e2174, _0x55853f.id) ?? []);
}
function fu(_0x572ebe) {
  let _0x351481 = yi(du(_0x572ebe.elements)),
    _0x17ce3c = _0x572ebe.bounds ? uu(_0x572ebe.bounds) : null;
  return _0x17ce3c && _0x351481
    ? uu(yi([_0x17ce3c, _0x351481]))
    : _0x17ce3c || uu(_0x351481);
}
function pu(_0xd0720e) {
  if (!_0xd0720e.bounds) return false;
  let _0x26f4c2 = uu(_0xd0720e.bounds),
    _0x9de484 = fu(_0xd0720e);
  return (
    _0x9de484.left < _0x26f4c2.left ||
    _0x9de484.top < _0x26f4c2.top ||
    q(_0x9de484) > q(_0x26f4c2) ||
    J(_0x9de484) > J(_0x26f4c2)
  );
}
function mu(_0x235812) {
  return (_0x235812 == null ? undefined : _0x235812.type) === M.Container;
}
function hu(_0x3263c1, _0x2842cb) {
  return { x: _0x3263c1.x + _0x2842cb.x, y: _0x3263c1.y + _0x2842cb.y };
}
function gu(_0x5ea287, _0x470c42, _0x1cae4b) {
  return _0x5ea287.kind === "free"
    ? {
        ..._0x5ea287,
        x: _0x5ea287.x + _0x1cae4b.x,
        y: _0x5ea287.y + _0x1cae4b.y,
      }
    : {
        ..._0x5ea287,
        shapeId: _0x470c42.get(_0x5ea287.shapeId) ?? _0x5ea287.shapeId,
        ...(_0x5ea287.fallbackPoint
          ? { fallbackPoint: hu(_0x5ea287.fallbackPoint, _0x1cae4b) }
          : {}),
      };
}
function _u(_0x562696, _0x2037f9) {
  return {
    ..._0x562696,
    x: _0x562696.x + _0x2037f9.x,
    y: _0x562696.y + _0x2037f9.y,
  };
}
function vu(_0x58adf1, _0x2d90ce, _0x3b58e0) {
  return {
    ..._0x58adf1,
    x: _0x58adf1.x + _0x3b58e0.x,
    y: _0x58adf1.y + _0x3b58e0.y,
    ...(_0x58adf1.endpoint
      ? { endpoint: gu(_0x58adf1.endpoint, _0x2d90ce, _0x3b58e0) }
      : {}),
  };
}
function yu(_0x58c8d1, _0x55abd0) {
  return {
    ..._0x58c8d1,
    x: _0x58c8d1.x + _0x55abd0.x,
    y: _0x58c8d1.y + _0x55abd0.y,
  };
}
function bu(_0x42d1ae, _0x1f0225, _0x21b92d) {
  var _0x3bdb51, _0xeb00c2, _0x1abea1, _0x482f4c;
  return {
    ..._0x42d1ae,
    connectorData: {
      ..._0x42d1ae.connectorData,
      start: gu(_0x42d1ae.connectorData["start"], _0x1f0225, _0x21b92d),
      end: gu(_0x42d1ae.connectorData["end"], _0x1f0225, _0x21b92d),
      waypoints:
        (_0x3bdb51 = _0x42d1ae.connectorData["waypoints"]) == null
          ? undefined
          : _0x3bdb51.map((_0x550f82) => _u(_0x550f82, _0x21b92d)),
      orthogonalData: _0x42d1ae.connectorData["orthogonalData"]
        ? {
            ..._0x42d1ae.connectorData["orthogonalData"],
            routePoints:
              (_0xeb00c2 =
                _0x42d1ae.connectorData["orthogonalData"].routePoints) == null
                ? undefined
                : _0xeb00c2.map((_0x2753ec) => _u(_0x2753ec, _0x21b92d)),
          }
        : _0x42d1ae.connectorData["orthogonalData"],
      curveData: _0x42d1ae.connectorData["curveData"]
        ? {
            ..._0x42d1ae.connectorData["curveData"],
            anchors:
              (_0x1abea1 = _0x42d1ae.connectorData["curveData"].anchors) == null
                ? undefined
                : _0x1abea1.map((_0x292bb5) =>
                    vu(_0x292bb5, _0x1f0225, _0x21b92d),
                  ),
            controls:
              (_0x482f4c = _0x42d1ae.connectorData["curveData"].controls) ==
              null
                ? undefined
                : _0x482f4c.map((_0x1409d4) => yu(_0x1409d4, _0x21b92d)),
          }
        : _0x42d1ae.connectorData["curveData"],
    },
  };
}
function xu(_0x27ed18, _0x4ece5d) {
  return su(
    _0x27ed18.type === M.Group
      ? {
          ..._0x27ed18,
          children: _0x27ed18.children["map"](
            (_0x2c51fe) => _0x4ece5d.get(_0x2c51fe) ?? _0x2c51fe,
          ),
        }
      : _0x27ed18,
    _0x4ece5d,
  );
}
function Su(_0x2447e6) {
  let _0x32b34a = fu(_0x2447e6.draft),
    _0x52fcb7 = _0x2447e6.createId ?? lu,
    _0x1e853e = _0x52fcb7("container"),
    _0x51b031 = new Map(),
    _0x49edfd = new Map(
      _0x2447e6.draft["elements"].map((_0x4a1fcd) => [_0x4a1fcd.id, _0x4a1fcd]),
    );
  _0x2447e6.draft["elements"].forEach((_0x65575a) => {
    _0x51b031.set(_0x65575a.id, _0x52fcb7(_0x65575a.id));
  });
  let _0x481af6 = fa({
      id: _0x1e853e,
      title: _0x2447e6.containerName ?? _0x2447e6.draft["title"],
      left: _0x2447e6.position["left"],
      top: _0x2447e6.position["top"],
      width: _0x32b34a.width,
      height: _0x32b34a.height,
    }),
    _0x1dad1f = _0x481af6.containerData["padding"],
    _0x1d51d0 =
      _0x481af6.containerData["titleVisible"] === false
        ? 0
        : (_0x481af6.containerData["headerSize"] ?? 0);
  ((_0x481af6.transform["width"] =
    _0x32b34a.width + _0x1dad1f.left + _0x1dad1f.right),
    (_0x481af6.transform["height"] =
      _0x32b34a.height + _0x1d51d0 + _0x1dad1f.top + _0x1dad1f.bottom));
  let _0x35cae0 = {
      x: _0x2447e6.position["left"] + _0x1dad1f.left - _0x32b34a.left,
      y: _0x2447e6.position["top"] + _0x1d51d0 + _0x1dad1f.top - _0x32b34a.top,
    },
    _0x2c6b4c = _0x2447e6.draft["elements"].map((_0x4b99f4) => {
      let _0x1ae3db = _0x381a86.deepClone(_0x4b99f4),
        _0x41212f = _0x4b99f4.parentId
          ? _0x49edfd.get(_0x4b99f4.parentId)
          : undefined,
        _0x20ddcf =
          !!_0x4b99f4.parentId &&
          mu(_0x41212f) &&
          _0x51b031.has(_0x4b99f4.parentId);
      return (
        (_0x1ae3db.id = _0x51b031.get(_0x4b99f4.id)),
        (_0x1ae3db.parentId = _0x20ddcf
          ? _0x51b031.get(_0x4b99f4.parentId)
          : _0x1e853e),
        _0x20ddcf ||
          (_0x1ae3db.transform = {
            ..._0x1ae3db.transform,
            left:
              (_0x1ae3db.transform["left"] ?? 0) +
              _0x35cae0.x -
              _0x2447e6.position["left"],
            top:
              (_0x1ae3db.transform["top"] ?? 0) +
              _0x35cae0.y -
              _0x2447e6.position["top"],
          }),
        _0x1ae3db.type === M.Connector &&
          (_0x1ae3db = bu(_0x1ae3db, _0x51b031, _0x35cae0)),
        xu(_0x1ae3db, _0x51b031)
      );
    }),
    _0x14cb15 = {
      left: _0x2447e6.position["left"],
      top: _0x2447e6.position["top"],
      width:
        q({
          left: _0x2447e6.position["left"],
          top: _0x2447e6.position["top"],
          width: _0x481af6.transform["width"] ?? 0,
          height: _0x481af6.transform["height"] ?? 0,
        }) - _0x2447e6.position["left"],
      height:
        J({
          left: _0x2447e6.position["left"],
          top: _0x2447e6.position["top"],
          width: _0x481af6.transform["width"] ?? 0,
          height: _0x481af6.transform["height"] ?? 0,
        }) - _0x2447e6.position["top"],
    };
  return {
    containerId: _0x1e853e,
    elements: [_0x481af6, ..._0x2c6b4c],
    elementIdMap: Object.fromEntries(_0x51b031),
    bounds: _0x14cb15,
  };
}
const Cu = {
    id: "board.operation.insert-draft",
    type: _0x3c65b3.OPERATION,
    handler: (_0x42d6a0, _0x3c0b2e) => {
      if (!_0x3c0b2e || _0x3c0b2e.draft["elements"].length === 0) return false;
      let _0x579784 = Su({
        draft: _0x3c0b2e.draft,
        containerName: _0x3c0b2e.containerName,
        position: _0x3c0b2e.position,
      });
      return _0x42d6a0
        .get(_0x3243d1)
        .syncExecuteCommand(al.id, {
          unitId: _0x3c0b2e.unitId,
          subUnitId: _0x3c0b2e.subUnitId,
          elements: _0x579784.elements,
          insertIndex: _0x3c0b2e.insertIndex,
        })
        ? _0x579784
        : false;
    },
  },
  wu = {
    id: "board.operation.insert-table",
    type: _0x3c65b3.OPERATION,
    handler: (_0x13c59f, _0x106a1b) =>
      !_0x106a1b ||
      !_0x106a1b.unitId ||
      !_0x106a1b.subUnitId ||
      !Number.isFinite(_0x106a1b.left) ||
      !Number.isFinite(_0x106a1b.top)
        ? false
        : _0x13c59f.get(hs).insertTable(_0x106a1b),
  },
  Tu = {
    id: "board.operation.remove-element",
    type: _0x3c65b3.OPERATION,
    handler: (_0x1980c7, _0x531038) =>
      !_0x531038 || !_0x531038.elementId
        ? false
        : ks.handler(_0x1980c7, {
            unitId: _0x531038.unitId,
            subUnitId: _0x531038.subUnitId,
            elementIds: [_0x531038.elementId],
          }),
  };
function Eu(_0x1d3f06) {
  return [..._0x1d3f06]
    .sort((_0x75c91b, _0x3041ff) => _0x75c91b.order - _0x3041ff.order)
    .map((_0x3c1838, _0x26daa8) => ({ ..._0x3c1838, order: _0x26daa8 }));
}
function Du(_0x539837, _0x46e959) {
  let _0x5c7057 = new Map(
    _0x46e959.map((_0x11d229) => [_0x11d229.id, _0x11d229]),
  );
  return _0x539837.lanes["some"]((_0x1a284f) => {
    if (_0x1a284f.locked !== true) return false;
    let _0x2cced9 = _0x5c7057.get(_0x1a284f.id);
    return (
      !_0x2cced9 ||
      _0x2cced9.title !== _0x1a284f.title ||
      _0x2cced9.order !== _0x1a284f.order ||
      _0x2cced9.size !== _0x1a284f.size ||
      _0x2cced9.minSize !== _0x1a284f.minSize ||
      _0x2cced9.locked !== _0x1a284f.locked ||
      _0x2cced9.collapsed !== _0x1a284f.collapsed
    );
  });
}
function Ou(
  _0x1fb73c,
  _0x280d52,
  _0x409df8,
  _0x40120e,
  _0x367481 = _0x409df8.transform,
) {
  return {
    id: $.id,
    params: {
      unitId: _0x1fb73c,
      subUnitId: _0x280d52,
      elementId: _0x409df8.elementId,
      element: X(_0x381a86.deepClone(_0x40120e)),
      transform: _0x367481 && { ..._0x367481 },
    },
  };
}
function ku(_0xe3b2b6) {
  return {
    left: _0xe3b2b6.left ?? 0,
    top: _0xe3b2b6.top ?? 0,
    width: _0xe3b2b6.width ?? 0,
    height: _0xe3b2b6.height ?? 0,
    angle: _0xe3b2b6.rotation ?? 0,
    flipX: _0xe3b2b6.flipX,
    flipY: _0xe3b2b6.flipY,
  };
}
function Au(_0xcae75b, _0x3e5cc2, _0x3dabe0, _0x1e7e99, _0x4c27bb, _0x3c89e4) {
  var _0x4590a2, _0x122eca;
  if (!_0x3c89e4) return { x: 0, y: 0 };
  let _0x5d4248 = U(_0xcae75b, _0x3e5cc2);
  if (!_0x5d4248) return { x: 0, y: 0 };
  let _0x5656fe =
      (_0x4590a2 = Fi(_0x3dabe0, _0x5d4248).find(
        (_0x51921a) => _0x51921a.lane["id"] === _0x4c27bb,
      )) == null
        ? undefined
        : _0x4590a2.bounds,
    _0x2c2c62 =
      (_0x122eca = Fi(_0x1e7e99, _0x5d4248).find(
        (_0x2a11e8) => _0x2a11e8.lane["id"] === _0x3c89e4,
      )) == null
        ? undefined
        : _0x122eca.bounds;
  return !_0x5656fe || !_0x2c2c62
    ? { x: 0, y: 0 }
    : { x: _0x2c2c62.left - _0x5656fe.left, y: _0x2c2c62.top - _0x5656fe.top };
}
function ju(_0x4f4d68, _0x2375c3, _0x10f81e) {
  let _0x1fec7f = _0x10f81e.x !== 0 || _0x10f81e.y !== 0;
  if (_0x4f4d68.element["type"] === M.Connector) {
    let _0x2fc735 = _0x1fec7f
      ? ni(
          {
            ..._0x4f4d68.element,
            laneId: _0x2375c3,
            transform: {
              ..._0x4f4d68.element["transform"],
              left: (_0x4f4d68.element["transform"].left ?? 0) + _0x10f81e.x,
              top: (_0x4f4d68.element["transform"].top ?? 0) + _0x10f81e.y,
            },
          },
          _0x10f81e,
        )
      : { ..._0x4f4d68.element, laneId: _0x2375c3 };
    return { element: _0x2fc735, transform: fi(_0x2fc735.transform) };
  }
  let _0x55ed01 = {
    ..._0x4f4d68.element,
    laneId: _0x2375c3,
    transform: _0x1fec7f
      ? {
          ..._0x4f4d68.element["transform"],
          left: (_0x4f4d68.element["transform"].left ?? 0) + _0x10f81e.x,
          top: (_0x4f4d68.element["transform"].top ?? 0) + _0x10f81e.y,
        }
      : _0x4f4d68.element["transform"],
  };
  return {
    element: _0x55ed01,
    transform: _0x1fec7f ? ku(_0x55ed01.transform) : _0x4f4d68.transform,
  };
}
function Mu(_0x2cce9d, _0x25a333, _0x45bc2e) {
  let _0x41e696 = new Set(),
    _0x36904e = _0x45bc2e.map((_0x782920) => _0x782920.elementId);
  return (
    tn(_0x2cce9d, [..._0x25a333], _0x36904e).forEach((_0x4d842b) =>
      _0x41e696.add(_0x4d842b),
    ),
    Object.values(_0x2cce9d).forEach((_0x8e6ec2) => {
      !Q(_0x8e6ec2) ||
        _0x41e696.has(_0x8e6ec2.elementId) ||
        (Qa(_0x8e6ec2.element).some((_0x570765) => _0x41e696.has(_0x570765)) &&
          _0x41e696.add(_0x8e6ec2.elementId));
    }),
    _0x25a333.filter((_0x4b7f7e) => _0x41e696.has(_0x4b7f7e))
  );
}
const Nu = {
  id: "board.operation.remove-swimlane-lane",
  type: _0x3c65b3.OPERATION,
  handler: (_0x5ad529, _0x297122) => {
    if (!_0x297122 || !_0x297122.containerId || !_0x297122.laneId) return false;
    let {
        unitId: _0x19ccf2,
        subUnitId: _0x9da92d,
        containerId: _0xb219ae,
        laneId: _0x5c5c7d,
      } = _0x297122,
      _0x58c993 = _0x297122.contentPolicy ?? "reject",
      _0x23fced = _0x5ad529.get(L),
      _0x29da4f = _0x23fced.getElementData(_0x19ccf2, _0x9da92d),
      _0x13e0cf = _0x29da4f[_0xb219ae],
      _0x93dfef = _0x13e0cf == null ? undefined : _0x13e0cf.element;
    if (
      !_0x13e0cf ||
      (_0x93dfef == null ? undefined : _0x93dfef.type) !== M.Container ||
      _0x93dfef.locked === true ||
      _0x93dfef.containerData["behavior"].membershipLocked ||
      _0x93dfef.containerData["kind"] !== "swimlane" ||
      !_0x93dfef.containerData["swimlane"]
    )
      return false;
    let _0x14dfa8 = _0x93dfef.containerData["swimlane"],
      _0x2d653d = _0x14dfa8.lanes["find"](
        (_0x3c90f2) => _0x3c90f2.id === _0x5c5c7d,
      );
    if (
      !_0x2d653d ||
      _0x2d653d.locked === true ||
      (_0x58c993 === "move-to-lane" &&
        (!_0x297122.targetLaneId ||
          _0x297122.targetLaneId === _0x5c5c7d ||
          !_0x14dfa8.lanes["some"](
            (_0x1893f1) =>
              _0x1893f1.id === _0x297122.targetLaneId &&
              _0x1893f1.locked !== true,
          )))
    )
      return false;
    let _0x59da17 = Object.values(_0x29da4f).filter(
      (_0x457a56) =>
        _0x457a56.element["parentId"] === _0xb219ae &&
        _0x457a56.element["laneId"] === _0x5c5c7d,
    );
    if (
      _0x59da17.some((_0xe9aec1) => _0xe9aec1.element["locked"] === true) ||
      (_0x59da17.length > 0 &&
        _0x58c993 !== "promote-to-pool" &&
        _0x58c993 !== "move-to-lane" &&
        _0x58c993 !== "delete-content")
    )
      return false;
    let _0x2ce126 = _0x23fced.getElementOrder(_0x19ccf2, _0x9da92d),
      _0x5c0e1c = Eu(
        _0x14dfa8.lanes["filter"]((_0x53f019) => _0x53f019.id !== _0x5c5c7d),
      );
    if (Du(_0x14dfa8, _0x5c0e1c)) return false;
    let _0x566284 = X({
        ..._0x93dfef,
        containerData: {
          ..._0x93dfef.containerData,
          swimlane: { ..._0x14dfa8, lanes: _0x5c0e1c },
        },
      }),
      _0x18e481 =
        _0x58c993 === "move-to-lane"
          ? Au(
              _0x29da4f,
              _0xb219ae,
              _0x93dfef,
              _0x566284,
              _0x5c5c7d,
              _0x297122.targetLaneId,
            )
          : { x: 0, y: 0 },
      _0xe1b966 =
        _0x58c993 === "delete-content"
          ? _0x59da17.map((_0x2b953b) => ({
              id: ws.id,
              params: {
                unitId: _0x19ccf2,
                subUnitId: _0x9da92d,
                elementId: _0x2b953b.elementId,
                elementType: _0x2b953b.element["type"],
                ...(_0x2b953b.element["type"] === M.Container
                  ? { containerKind: _0x2b953b.element["containerData"].kind }
                  : {}),
              },
            }))
          : _0x59da17.map((_0x46ba7e) => {
              let _0x4e725c = ju(
                _0x46ba7e,
                _0x58c993 === "move-to-lane"
                  ? _0x297122.targetLaneId
                  : undefined,
                _0x18e481,
              );
              return Ou(
                _0x19ccf2,
                _0x9da92d,
                _0x46ba7e,
                _0x4e725c.element,
                _0x4e725c.transform,
              );
            }),
      _0x322a18 =
        _0x58c993 === "delete-content"
          ? Mu(_0x29da4f, _0x2ce126, _0x59da17)
              .map((_0xf179ca) => _0x29da4f[_0xf179ca])
              .filter((_0x162750) => !!_0x162750)
              .map((_0x50d4c9) => ({
                id: Ss.id,
                params: {
                  unitId: _0x19ccf2,
                  subUnitId: _0x9da92d,
                  element: _0x381a86.deepClone(_0x50d4c9.element),
                },
              }))
          : _0x59da17
              .map((_0x479d83) =>
                Ou(_0x19ccf2, _0x9da92d, _0x479d83, _0x479d83.element),
              )
              .reverse();
    return (
      _0xe1b966.push(Ou(_0x19ccf2, _0x9da92d, _0x13e0cf, _0x566284)),
      _0x322a18.unshift(Ou(_0x19ccf2, _0x9da92d, _0x13e0cf, _0x93dfef)),
      !No(_0x29da4f, _0xe1b966) ||
      !_0x1c1693(_0xe1b966, _0x5ad529.get(_0x3243d1)).result
        ? false
        : (_0x5ad529
            .get(_0x3cfbb3)
            .pushUndoRedo({
              unitID: _0x19ccf2,
              redoMutations: _0xe1b966,
              undoMutations: _0x322a18,
            }),
          true)
    );
  },
};
function Pu(_0x57ac32, _0x1da377, _0x49bcd4) {
  let _0x506c0a = new Set(_0x1da377),
    _0x3a4534 = _0x57ac32.filter((_0x3e9e9d) => _0x506c0a.has(_0x3e9e9d));
  if (_0x3a4534.length === 0) return _0x57ac32;
  if (_0x49bcd4 === "front" || _0x49bcd4 === "back") {
    let _0x356852 = _0x57ac32.filter((_0x358a88) => !_0x506c0a.has(_0x358a88));
    return _0x49bcd4 === "front"
      ? [..._0x356852, ..._0x3a4534]
      : [..._0x3a4534, ..._0x356852];
  }
  let _0x5c4d66 = [..._0x57ac32];
  if (_0x49bcd4 === "forward") {
    for (let _0x5c0ebd = _0x5c4d66.length - 2; _0x5c0ebd >= 0; _0x5c0ebd--)
      _0x506c0a.has(_0x5c4d66[_0x5c0ebd]) &&
        !_0x506c0a.has(_0x5c4d66[_0x5c0ebd + 1]) &&
        ([_0x5c4d66[_0x5c0ebd], _0x5c4d66[_0x5c0ebd + 1]] = [
          _0x5c4d66[_0x5c0ebd + 1],
          _0x5c4d66[_0x5c0ebd],
        ]);
    return _0x5c4d66;
  }
  for (let _0x53ebf7 = 1; _0x53ebf7 < _0x5c4d66.length; _0x53ebf7++)
    _0x506c0a.has(_0x5c4d66[_0x53ebf7]) &&
      !_0x506c0a.has(_0x5c4d66[_0x53ebf7 - 1]) &&
      ([_0x5c4d66[_0x53ebf7 - 1], _0x5c4d66[_0x53ebf7]] = [
        _0x5c4d66[_0x53ebf7],
        _0x5c4d66[_0x53ebf7 - 1],
      ]);
  return _0x5c4d66;
}
function Fu(_0x5d5f60, _0x216fe6, _0x340efc) {
  let _0x10c973 = new Set(_0x216fe6),
    _0x264e00 = _0x5d5f60.filter((_0x5bd2c8) => _0x10c973.has(_0x5bd2c8));
  if (_0x264e00.length === 0) return _0x5d5f60;
  let _0x46ec75 = _0x5d5f60.filter((_0x41330c) => !_0x10c973.has(_0x41330c));
  return (
    _0x46ec75.splice(_0x404d81(_0x340efc, _0x5d5f60.length), 0, ..._0x264e00),
    _0x46ec75
  );
}
const Iu = {
  id: "board.operation.reorder-elements",
  type: _0x3c65b3.OPERATION,
  handler: (_0xde6d06, _0x5bdc4a) => {
    if (!_0x5bdc4a || _0x5bdc4a.elementIds["length"] === 0) return false;
    let {
        unitId: _0x14a70a,
        subUnitId: _0xa54286,
        elementIds: _0x4abd58,
      } = _0x5bdc4a,
      _0x1a81bf = _0xde6d06.get(L).getElementOrder(_0x14a70a, _0xa54286),
      _0x29f949 =
        _0x5bdc4a.zOrder === undefined
          ? Pu(_0x1a81bf, _0x4abd58, _0x5bdc4a.placement)
          : Fu(_0x1a81bf, _0x4abd58, _0x5bdc4a.zOrder);
    if (
      _0x29f949.length !== _0x1a81bf.length ||
      _0x29f949.every(
        (_0x361069, _0x36b9af) => _0x361069 === _0x1a81bf[_0x36b9af],
      )
    )
      return false;
    let _0x167f41 = {
        unitId: _0x14a70a,
        subUnitId: _0xa54286,
        elementIds: _0x29f949,
      },
      _0xdfdd1 = {
        unitId: _0x14a70a,
        subUnitId: _0xa54286,
        elementIds: _0x1a81bf,
      };
    return _0xde6d06.get(_0x3243d1).syncExecuteCommand(fc.id, _0x167f41)
      ? (_0xde6d06
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x14a70a,
            redoMutations: [{ id: fc.id, params: _0x167f41 }],
            undoMutations: [{ id: fc.id, params: _0xdfdd1 }],
          }),
        true)
      : false;
  },
};
function Lu(_0x5ad854, _0x27d418, _0x2f1fd6) {
  let _0x146566 = _0x5ad854.indexOf(_0x27d418),
    _0x4ce163 = _0x5ad854.indexOf(_0x2f1fd6);
  if (_0x146566 < 0 || _0x4ce163 < 0 || _0x146566 === _0x4ce163)
    return _0x5ad854;
  let _0x51c5c8 = [..._0x5ad854],
    [_0x54597d] = _0x51c5c8.splice(_0x146566, 1),
    _0x1dd5b8 = _0x51c5c8.indexOf(_0x2f1fd6);
  return (
    _0x51c5c8.splice(_0x1dd5b8 + +(_0x146566 < _0x4ce163), 0, _0x54597d),
    _0x51c5c8
  );
}
function Ru(_0x5d53d4, _0x44845a) {
  return (
    _0x5d53d4.length === _0x44845a.length &&
    _0x5d53d4.every(
      (_0x2ae597, _0x2d2c7c) => _0x2ae597 === _0x44845a[_0x2d2c7c],
    )
  );
}
function zu(_0x253784, _0x4bc1e9) {
  return Object.values(_0x253784)
    .map((_0x5c1664) => _0x5c1664.element)
    .find(
      (_0x455eaf) =>
        _0x455eaf.type === M.Group && _0x455eaf.children["includes"](_0x4bc1e9),
    );
}
function Bu(_0x38b1ef, _0x1cb0e3, _0x4deec5) {
  var _0x16a164;
  let _0x4bb71e =
    (_0x16a164 = _0x38b1ef[_0x4deec5]) == null ? undefined : _0x16a164.element;
  if (!_0x4bb71e) return null;
  let _0x232962 = zu(_0x38b1ef, _0x4deec5);
  if (_0x232962)
    return {
      type: "group",
      parentId: _0x232962.id,
      order: _0x232962.children,
      parentElement: _0x232962,
    };
  let _0x4e8f29 = _0x4bb71e.parentId;
  return {
    type: "order",
    parentId: _0x4e8f29,
    order: _0x4e8f29
      ? _0x1cb0e3.filter((_0x5d8229) => {
          var _0x53cf44;
          return (
            ((_0x53cf44 = _0x38b1ef[_0x5d8229]) == null
              ? undefined
              : _0x53cf44.element["parentId"]) === _0x4e8f29
          );
        })
      : _0x1cb0e3.filter((_0x4cd93b) => {
          var _0x13c4f5;
          let _0x6c5285 =
            (_0x13c4f5 = _0x38b1ef[_0x4cd93b]) == null
              ? undefined
              : _0x13c4f5.element;
          return (
            !!_0x6c5285 && !_0x6c5285.parentId && !zu(_0x38b1ef, _0x4cd93b)
          );
        }),
  };
}
function Vu(_0x3ee1ea, _0x90ff3, _0x4f21ba, _0x21b5e2) {
  return {
    unitId: _0x3ee1ea,
    subUnitId: _0x90ff3,
    elementId: _0x4f21ba,
    element: _0x21b5e2,
    allowInactiveTarget: true,
    allowLockedTarget: true,
  };
}
function Hu(_0x30086b, _0x535940, _0xb375c9) {
  let _0x86ad89 = new Map(
      _0xb375c9.map((_0x5a7732, _0x3500fd) => [_0x5a7732, _0x3500fd]),
    ),
    _0x556a23 = new Set(_0x535940),
    _0x24487d = _0x535940
      .filter((_0x592acd) => _0x86ad89.has(_0x592acd))
      .sort(
        (_0xbc3ac7, _0x1b44de) =>
          _0x86ad89.get(_0xbc3ac7) - _0x86ad89.get(_0x1b44de),
      ),
    _0x84707b = 0;
  return _0x30086b.map((_0x2746ef) =>
    _0x556a23.has(_0x2746ef) ? _0x24487d[_0x84707b++] : _0x2746ef,
  );
}
const Uu = {
  id: "board.operation.reorder-object-list-element",
  type: _0x3c65b3.OPERATION,
  handler: (_0x335f8f, _0x5322e8) => {
    if (!_0x5322e8 || _0x5322e8.sourceElementId === _0x5322e8.targetElementId)
      return false;
    let {
        unitId: _0x3c3c17,
        subUnitId: _0x53f100,
        sourceElementId: _0x1dbac5,
        targetElementId: _0x309f26,
      } = _0x5322e8,
      _0x5afe19 = _0x335f8f.get(L),
      _0x24e2df = _0x5afe19.getElementData(_0x3c3c17, _0x53f100),
      _0x5d7b36 = _0x5afe19.getElementOrder(_0x3c3c17, _0x53f100),
      _0x174e04 = Bu(_0x24e2df, _0x5d7b36, _0x1dbac5),
      _0x4f9567 = Bu(_0x24e2df, _0x5d7b36, _0x309f26);
    if (
      !_0x174e04 ||
      !_0x4f9567 ||
      _0x174e04.type !== _0x4f9567.type ||
      _0x174e04.parentId !== _0x4f9567.parentId
    )
      return false;
    let _0x2e5f5a = Lu(_0x174e04.order, _0x1dbac5, _0x309f26);
    if (Ru(_0x174e04.order, _0x2e5f5a)) return false;
    let _0xc89fc1 = _0x335f8f.get(_0x3243d1),
      _0x2fcb31,
      _0x108313;
    if (_0x174e04.type === "group" && _0x174e04.parentElement) {
      let _0x59d0c1 = {
          ..._0x381a86.deepClone(_0x174e04.parentElement),
          children: _0x2e5f5a,
        },
        _0x215c6c = Vu(
          _0x3c3c17,
          _0x53f100,
          _0x174e04.parentElement["id"],
          _0x59d0c1,
        ),
        _0x48def0 = Vu(
          _0x3c3c17,
          _0x53f100,
          _0x174e04.parentElement["id"],
          _0x381a86.deepClone(_0x174e04.parentElement),
        ),
        _0x321a8c = Hu(_0x5d7b36, _0x174e04.order, _0x2e5f5a);
      ((_0x2fcb31 = [
        { id: $.id, params: _0x215c6c },
        {
          id: fc.id,
          params: {
            unitId: _0x3c3c17,
            subUnitId: _0x53f100,
            elementIds: _0x321a8c,
          },
        },
      ]),
        (_0x108313 = [
          {
            id: fc.id,
            params: {
              unitId: _0x3c3c17,
              subUnitId: _0x53f100,
              elementIds: _0x5d7b36,
            },
          },
          { id: $.id, params: _0x48def0 },
        ]));
    } else {
      let _0x4e1c35 = {
          unitId: _0x3c3c17,
          subUnitId: _0x53f100,
          elementIds: Hu(_0x5d7b36, _0x174e04.order, _0x2e5f5a),
        },
        _0x48850a = {
          unitId: _0x3c3c17,
          subUnitId: _0x53f100,
          elementIds: _0x5d7b36,
        };
      ((_0x2fcb31 = [{ id: fc.id, params: _0x4e1c35 }]),
        (_0x108313 = [{ id: fc.id, params: _0x48850a }]));
    }
    return _0x1c1693(_0x2fcb31, _0xc89fc1).result
      ? (_0x335f8f
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x3c3c17,
            redoMutations: _0x2fcb31,
            undoMutations: _0x108313,
          }),
        true)
      : false;
  },
};
function Wu(_0x491e98, _0x113eeb) {
  return {
    ..._0x491e98,
    transform: {
      ..._0x491e98.transform,
      left: _0x113eeb.left,
      top: _0x113eeb.top,
      width: _0x113eeb.width,
      height: _0x113eeb.height,
      rotation: _0x113eeb.angle,
      flipX: _0x113eeb.flipX,
      flipY: _0x113eeb.flipY,
    },
  };
}
function Gu(_0x592f0c, _0xb0ce51) {
  return (
    _0x592f0c.left !== _0xb0ce51.left ||
    _0x592f0c.top !== _0xb0ce51.top ||
    _0x592f0c.width !== _0xb0ce51.width ||
    _0x592f0c.height !== _0xb0ce51.height
  );
}
function Ku(_0x933f7b) {
  return _0x933f7b.left === undefined ||
    _0x933f7b.top === undefined ||
    _0x933f7b.width === undefined ||
    _0x933f7b.height === undefined
    ? null
    : {
        left: _0x933f7b.left,
        top: _0x933f7b.top,
        width: _0x933f7b.width,
        height: _0x933f7b.height,
      };
}
function qu(_0x19a29b) {
  return (
    !_0x19a29b ||
    _0x19a29b.element["type"] !== M.Container ||
    _0x19a29b.hidden === true ||
    _0x19a29b.element["visible"] === false ||
    _0x19a29b.element["locked"] === true ||
    _0x19a29b.element["selectable"] === false ||
    _0x19a29b.element["containerData"].behavior["membershipLocked"]
  );
}
function Ju(_0x36d07d, _0x4a4e05, _0x5d8684) {
  if (!_0x36d07d || _0x36d07d.element["type"] !== M.Container) return false;
  let _0x59966a = _0x36d07d.element["containerData"].behavior;
  return _0x59966a.acceptsChildren
    ? _0x4a4e05.every((_0x315225) => {
        var _0x3f2176;
        let _0x5fd18c =
          (_0x3f2176 = _0x5d8684[_0x315225]) == null
            ? undefined
            : _0x3f2176.element;
        return _0x5fd18c
          ? _0x5fd18c.type !== M.Container ||
              (_0x59966a.acceptsContainer && _0x59966a.allowNested)
          : false;
      })
    : false;
}
function Yu(_0x368afc) {
  return (
    (_0x368afc == null ? undefined : _0x368afc.element["type"]) ===
      M.Container &&
    _0x368afc.element["containerData"].behavior["membershipLocked"]
  );
}
function Xu(_0x50bc23, _0x2c824b) {
  var _0x44653d;
  let _0xe2ba5b =
      (_0x44653d = _0x50bc23[_0x2c824b]) == null
        ? undefined
        : _0x44653d.element["parentId"],
    _0x5a4001 = new Set([_0x2c824b]);
  for (; _0xe2ba5b;) {
    if (_0x5a4001.has(_0xe2ba5b)) return false;
    let _0x226114 = _0x50bc23[_0xe2ba5b];
    if (!_0x226114 || _0x226114.element["type"] !== M.Container) return false;
    if (
      _0x226114.hidden === true ||
      _0x226114.element["visible"] === false ||
      _0x226114.element["locked"] === true ||
      _0x226114.element["selectable"] === false
    )
      return true;
    (_0x5a4001.add(_0xe2ba5b), (_0xe2ba5b = _0x226114.element["parentId"]));
  }
  return false;
}
function Zu(_0x2ff625, _0x240e4a) {
  let _0x49b382 = [];
  return (
    _0x240e4a.forEach((_0x25c933) => {
      _0x2ff625[_0x25c933] &&
        !_0x49b382.includes(_0x25c933) &&
        _0x49b382.push(_0x25c933);
    }),
    _0x49b382
  );
}
function Qu(_0x4b8169, _0x50d89f, _0x3cf75f) {
  var _0x3eed1c;
  let _0x350584 =
      (_0x3eed1c = _0x4b8169[_0x50d89f]) == null
        ? undefined
        : _0x3eed1c.element["parentId"],
    _0x2ff1d2 = new Set([_0x50d89f]);
  for (; _0x350584;) {
    if (_0x2ff1d2.has(_0x350584)) return false;
    let _0x4c3a13 = _0x4b8169[_0x350584];
    if (!_0x4c3a13 || _0x4c3a13.element["type"] !== M.Container) return false;
    if (_0x3cf75f.has(_0x350584)) return true;
    (_0x2ff1d2.add(_0x350584), (_0x350584 = _0x4c3a13.element["parentId"]));
  }
  return false;
}
function $u(_0x4e82d9, _0x79ff6b) {
  let _0x7e14d9 = new Set(_0x79ff6b);
  return _0x79ff6b.filter((_0x38be4c) => !Qu(_0x4e82d9, _0x38be4c, _0x7e14d9));
}
function ed(_0x312c30, _0x36c8ff, _0x3d3a5e, _0xd1d741) {
  _0x312c30[_0x36c8ff.elementId] = {
    ..._0x36c8ff,
    element: _0x3d3a5e,
    transform: _0xd1d741,
  };
}
function td(_0x3f188b, _0x4a2b6c) {
  return _0x4a2b6c.some((_0x2a458b) => {
    var _0x45dc04;
    let _0x46b8b2 = _0x2a458b.params;
    return (
      !!_0x46b8b2.elementId &&
      ((_0x45dc04 = _0x3f188b[_0x46b8b2.elementId]) == null
        ? undefined
        : _0x45dc04.element["locked"]) === true
    );
  });
}
function nd(_0x3ea4c9, _0x2ca227, _0x3aa117, _0x5a714a) {
  var _0xc13394, _0xc701a2, _0x463f4f;
  if (!_0x3aa117) return;
  let _0x560abf =
    (_0xc13394 = _0x3ea4c9[_0x3aa117]) == null ? undefined : _0xc13394.element;
  if (
    _0x2ca227.laneId &&
    (_0x560abf == null ? undefined : _0x560abf.type) === M.Container &&
    _0x560abf.containerData["kind"] === "swimlane" &&
    ((_0xc701a2 = _0x560abf.containerData["swimlane"]) == null
      ? undefined
      : _0xc701a2.lanes["some"](
          (_0x4be819) => _0x4be819.id === _0x2ca227.laneId,
        )) === true
  )
    return _0x2ca227.laneId;
  let _0x1651f4 = U(_0x3ea4c9, _0x3aa117);
  if (!(
    (_0x560abf == null ? undefined : _0x560abf.type) !== M.Container ||
    _0x560abf.containerData["kind"] !== "swimlane" ||
    !_0x5a714a ||
    !_0x1651f4
  ))
    return (_0x463f4f = Ui(_0x560abf, _0x1651f4, _0x5a714a)) == null
      ? undefined
      : _0x463f4f.lane["id"];
}
function rd(_0x52c201, _0x12ebe1, _0x33ed41, _0x310e3b, _0x4d588c) {
  var _0x1987bb, _0x3fe523, _0x51d648;
  let _0x254dd8 =
      (_0x1987bb = _0x52c201[_0x33ed41]) == null
        ? undefined
        : _0x1987bb.element,
    _0x99ef7e = U(_0x52c201, _0x33ed41);
  if (
    (_0x254dd8 == null ? undefined : _0x254dd8.type) !== M.Container ||
    _0x254dd8.containerData["kind"] !== "swimlane" ||
    !_0x254dd8.containerData["swimlane"] ||
    !_0x99ef7e
  )
    return null;
  let _0x5042f1 =
    (_0x3fe523 = Fi(_0x254dd8, _0x99ef7e).find(
      (_0x253fe8) => _0x253fe8.lane["id"] === _0x310e3b,
    )) == null
      ? undefined
      : _0x3fe523.bounds;
  if (!_0x5042f1) return null;
  let _0x3345e2 = _0x12ebe1.parentId === _0x33ed41 ? _0x254dd8 : undefined,
    _0x163619 = _0x3345e2 ? _0x99ef7e : null,
    _0x4de435 =
      (_0x3345e2 == null ? undefined : _0x3345e2.type) === M.Container &&
      _0x3345e2.containerData["kind"] === "swimlane" &&
      _0x12ebe1.laneId &&
      _0x163619
        ? (_0x51d648 = Fi(_0x3345e2, _0x163619).find(
            (_0x537fa6) => _0x537fa6.lane["id"] === _0x12ebe1.laneId,
          )) == null
          ? undefined
          : _0x51d648.bounds
        : undefined;
  return _0x4de435
    ? { x: _0x5042f1.left - _0x4de435.left, y: _0x5042f1.top - _0x4de435.top }
    : _0x254dd8.containerData["swimlane"].orientation === "horizontal"
      ? {
          x: 0,
          y:
            _0x4d588c.top >= _0x5042f1.top &&
            _0x4d588c.top + _0x4d588c.height <= _0x5042f1.top + _0x5042f1.height
              ? 0
              : _0x5042f1.top +
                _0x5042f1.height / 2 -
                (_0x4d588c.top + _0x4d588c.height / 2),
        }
      : {
          x:
            _0x4d588c.left >= _0x5042f1.left &&
            _0x4d588c.left + _0x4d588c.width <= _0x5042f1.left + _0x5042f1.width
              ? 0
              : _0x5042f1.left +
                _0x5042f1.width / 2 -
                (_0x4d588c.left + _0x4d588c.width / 2),
          y: 0,
        };
}
function id(_0x3f6332, _0x26d9d7, _0x4b7142, _0x101877) {
  var _0x578929;
  let _0x2b6db2 = _0x4b7142
    ? (_0x578929 = _0x3f6332[_0x4b7142]) == null
      ? undefined
      : _0x578929.element
    : undefined;
  if (
    (_0x2b6db2 == null ? undefined : _0x2b6db2.type) !== M.Container ||
    _0x2b6db2.containerData["kind"] !== "swimlane"
  )
    return true;
  let _0x5e8868 = _0x2b6db2.containerData["swimlane"];
  return _0x5e8868 != null &&
    _0x5e8868.lanes["some"](
      (_0x2bc3c5) => _0x2bc3c5.id === _0x101877 && _0x2bc3c5.locked !== true,
    )
    ? _0x26d9d7.some((_0xe62662) => {
        var _0x15a167, _0x212003;
        let _0x11c643 =
          (_0x15a167 = _0x3f6332[_0xe62662]) == null
            ? undefined
            : _0x15a167.element;
        if (!_0x11c643 || _0x11c643.type === M.Connector) return true;
        let _0x5e786b = _0x11c643.parentId
            ? (_0x212003 = _0x3f6332[_0x11c643.parentId]) == null
              ? undefined
              : _0x212003.element
            : undefined,
          _0x46faef =
            (_0x5e786b == null ? undefined : _0x5e786b.type) === M.Container &&
            _0x5e786b.containerData["kind"] === "swimlane"
              ? _0x5e786b.containerData["swimlane"]
              : undefined,
          _0x1bd2cd = _0x11c643.laneId
            ? _0x46faef == null
              ? undefined
              : _0x46faef.lanes["find"](
                  (_0xefd6a9) => _0xefd6a9.id === _0x11c643.laneId,
                )
            : undefined;
        return (_0x1bd2cd == null ? undefined : _0x1bd2cd.locked) === true;
      })
    : true;
}
const ad = {
  id: "board.operation.reparent-elements",
  type: _0x3c65b3.OPERATION,
  handler: (_0xfbcaf6, _0x1e9709) => {
    if (!_0x1e9709 || _0x1e9709.elementIds["length"] === 0) return false;
    let {
        unitId: _0x1a65f5,
        subUnitId: _0x362e43,
        parentId: _0x459d0b,
        laneId: _0x3d2fc4,
      } = _0x1e9709,
      _0x4f79c3 = _0xfbcaf6.get(L).getElementData(_0x1a65f5, _0x362e43);
    if (
      new Set(_0x1e9709.elementIds).size !== _0x1e9709.elementIds["length"] ||
      _0x1e9709.elementIds["some"]((_0x4a44fe) => !_0x4f79c3[_0x4a44fe])
    )
      return false;
    let _0x448072 = Zu(_0x4f79c3, _0x1e9709.elementIds);
    if (_0x448072.length === 0) return false;
    let _0x47ecac = $u(_0x4f79c3, _0x448072);
    if (
      (_0x3d2fc4 !== undefined &&
        id(_0x4f79c3, _0x47ecac, _0x459d0b, _0x3d2fc4)) ||
      _0x47ecac.length === 0 ||
      _0x47ecac.some((_0xfc953d) => Xu(_0x4f79c3, _0xfc953d)) ||
      _0x47ecac.includes(_0x459d0b ?? "")
    )
      return false;
    if (_0x459d0b) {
      let _0x175a2b = _0x4f79c3[_0x459d0b];
      if (qu(_0x175a2b) || !Ju(_0x175a2b, _0x47ecac, _0x4f79c3)) return false;
    }
    if (
      _0x47ecac.some((_0x1fd66b) => Wn(_0x4f79c3, _0x1fd66b, _0x459d0b)) ||
      _0x47ecac.some((_0x1a949f) => {
        let _0x28df40 = _0x4f79c3[_0x1a949f],
          _0x8f1d36 =
            _0x28df40 == null ? undefined : _0x28df40.element["parentId"];
        return (
          _0x8f1d36 !== _0x459d0b &&
          Yu(_0x8f1d36 ? _0x4f79c3[_0x8f1d36] : undefined)
        );
      })
    )
      return false;
    let _0x31a41d = new Map(),
      _0x1b58a7 = new Map(),
      _0xfba28f = { ..._0x4f79c3 },
      _0x1b79d7 = (_0x58d66d, _0x10bcfe, _0x28d474) => {
        if (
          (_0x31a41d.set(_0x58d66d.elementId, {
            id: $.id,
            params: {
              unitId: _0x1a65f5,
              subUnitId: _0x362e43,
              elementId: _0x58d66d.elementId,
              element: _0x10bcfe,
              transform: _0x28d474,
            },
          }),
          !_0x1b58a7.has(_0x58d66d.elementId))
        ) {
          let _0x5f259e = _0x4f79c3[_0x58d66d.elementId] ?? _0x58d66d;
          _0x1b58a7.set(_0x58d66d.elementId, {
            id: $.id,
            params: {
              unitId: _0x1a65f5,
              subUnitId: _0x362e43,
              elementId: _0x58d66d.elementId,
              element: X(_0x381a86.deepClone(_0x5f259e.element)),
              transform: _0x5f259e.transform
                ? { ..._0x5f259e.transform }
                : undefined,
            },
          });
        }
        ed(_0xfba28f, _0x58d66d, _0x10bcfe, _0x28d474);
      };
    _0x47ecac.forEach((_0x54fc36) => {
      var _0x40be5a;
      let _0x224ea0 = _0x4f79c3[_0x54fc36];
      if (
        !_0x224ea0 ||
        (_0x224ea0.element["parentId"] === _0x459d0b &&
          (_0x3d2fc4 === undefined ||
            _0x224ea0.element["laneId"] === _0x3d2fc4))
      )
        return;
      let _0x5a9253 =
        (_0x40be5a = H(_0x4f79c3, _0x54fc36)) == null
          ? undefined
          : _0x40be5a.worldTransform;
      if (!_0x5a9253) return;
      let _0xa49726 = U(_0x4f79c3, _0x54fc36),
        _0x420b7c =
          _0x3d2fc4 !== undefined && _0x459d0b && _0xa49726
            ? rd(_0x4f79c3, _0x224ea0.element, _0x459d0b, _0x3d2fc4, _0xa49726)
            : { x: 0, y: 0 };
      if (!_0x420b7c) return;
      let _0xaf4341 = {
          ..._0x5a9253,
          left: (_0x5a9253.left ?? 0) + _0x420b7c.x,
          top: (_0x5a9253.top ?? 0) + _0x420b7c.y,
        },
        _0x1fd5e4 = G(
          W(_0x4f79c3, { parentId: _0x459d0b, worldTransform: _0xaf4341 }),
        ),
        _0x42f67d = Wu(
          {
            ..._0x224ea0.element,
            parentId: _0x459d0b,
            laneId:
              _0x3d2fc4 ??
              nd(_0x4f79c3, _0x224ea0.element, _0x459d0b, _0xa49726),
          },
          _0x1fd5e4,
        );
      _0x1b79d7(_0x224ea0, _0x42f67d, _0x1fd5e4);
    });
    let _0x2e89da = _0x459d0b ? _0xfba28f[_0x459d0b] : undefined;
    if (
      (_0x2e89da == null ? undefined : _0x2e89da.element["type"]) ===
        M.Container &&
      _0x2e89da.element["containerData"].behavior["autoResize"]
    ) {
      let _0x2aa7cc = U(_0xfba28f, _0x459d0b);
      if (_0x2aa7cc) {
        let _0x18a4b7 = yi([
            Sc(_0x2e89da.element, _0x2aa7cc),
            ...Object.values(_0xfba28f)
              .filter(
                (_0x37850c) =>
                  _0x37850c.element["parentId"] === _0x459d0b &&
                  _0x37850c.element["type"] !== M.Connector,
              )
              .map((_0x1de5ad) => U(_0xfba28f, _0x1de5ad.elementId))
              .filter((_0x3aa3fe) => !!_0x3aa3fe),
          ]),
          _0x3157ee = _0x18a4b7
            ? Ec(_0x2e89da.element, _0x2aa7cc, _0x18a4b7)
            : null;
        if (_0x3157ee && Gu(_0x2aa7cc, _0x3157ee)) {
          let _0x319bd6 = new Map();
          Object.values(_0xfba28f).forEach((_0x219437) => {
            var _0x41afa3;
            if (_0x219437.element["parentId"] !== _0x459d0b) return;
            let _0x2f4a30 =
              (_0x41afa3 = H(_0xfba28f, _0x219437.elementId)) == null
                ? undefined
                : _0x41afa3.worldTransform;
            _0x2f4a30 && _0x319bd6.set(_0x219437.elementId, _0x2f4a30);
          });
          let _0x6cafb2 = G(
            W(_0xfba28f, {
              parentId: _0x2e89da.element["parentId"],
              worldTransform: Xn({
                left: _0x3157ee.left,
                top: _0x3157ee.top,
                width: _0x3157ee.width,
                height: _0x3157ee.height,
                angle: G(_0x2e89da.element["transform"]).angle,
                flipX: _0x2e89da.element["transform"].flipX,
                flipY: _0x2e89da.element["transform"].flipY,
              }),
            }),
          );
          (_0x1b79d7(_0x2e89da, Wu(_0x2e89da.element, _0x6cafb2), _0x6cafb2),
            _0x319bd6.forEach((_0xe412a7, _0x1a9ffe) => {
              let _0x233997 = _0xfba28f[_0x1a9ffe];
              if (!_0x233997) return;
              let _0x575b7d = G(
                W(_0xfba28f, {
                  parentId: _0x459d0b,
                  worldTransform: _0xe412a7,
                }),
              );
              if (
                _0x233997.element["transform"].left === _0x575b7d.left &&
                _0x233997.element["transform"].top === _0x575b7d.top &&
                _0x233997.element["transform"].width === _0x575b7d.width &&
                _0x233997.element["transform"].height === _0x575b7d.height &&
                G(_0x233997.element["transform"]).angle === _0x575b7d.angle
              )
                return;
              let _0x1fa0e0 = Ku(_0xe412a7),
                _0x378b8c = Wu(
                  {
                    ..._0x233997.element,
                    laneId: nd(
                      _0xfba28f,
                      _0x233997.element,
                      _0x459d0b,
                      _0x1fa0e0,
                    ),
                  },
                  _0x575b7d,
                );
              _0x1b79d7(_0x233997, _0x378b8c, _0x575b7d);
            }));
        }
      }
    }
    Object.values(_0xfba28f).forEach((_0x9d3999) => {
      var _0xe3393;
      if (!Q(_0x9d3999)) return;
      let _0x10355e = oo(_0xfba28f, _0x9d3999.element);
      if (
        _0x9d3999.element["parentId"] === _0x10355e.parentId &&
        _0x9d3999.element["laneId"] === _0x10355e.laneId
      )
        return;
      let _0x47c64b =
        (_0xe3393 = H(_0xfba28f, _0x9d3999.elementId)) == null
          ? undefined
          : _0xe3393.worldTransform;
      if (!_0x47c64b) return;
      let _0x1ac1ff = G(
          W(_0xfba28f, {
            parentId: _0x10355e.parentId,
            worldTransform: _0x47c64b,
          }),
        ),
        _0x1c18e3 = Wu(
          {
            ..._0x9d3999.element,
            parentId: _0x10355e.parentId,
            laneId: _0x10355e.laneId,
          },
          _0x1ac1ff,
        );
      _0x1b79d7(_0x9d3999, _0x1c18e3, _0x1ac1ff);
    });
    let _0x827b97 = Array.from(_0x31a41d.values()),
      _0x3449f5 = Array.from(_0x1b58a7.values()).reverse();
    return _0x827b97.length === 0 ||
      td(_0x4f79c3, _0x827b97) ||
      !Mo(_0x4f79c3, _0x827b97) ||
      !_0x1c1693(_0x827b97, _0xfbcaf6.get(_0x3243d1)).result
      ? false
      : (_0xfbcaf6
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x1a65f5,
            redoMutations: _0x827b97,
            undoMutations: _0x3449f5,
          }),
        true);
  },
};
function od(_0xf3ae96, _0x11b9c5) {
  return {
    ..._0xf3ae96,
    containerData: {
      ..._0xf3ae96.containerData,
      behavior: {
        ..._0xf3ae96.containerData["behavior"],
        autoResize: _0x11b9c5,
      },
    },
  };
}
const sd = {
  id: "board.operation.set-container-auto-resize",
  type: _0x3c65b3.OPERATION,
  handler: (_0x3c5a02, _0x4dba3b) => {
    if (!(_0x4dba3b != null && _0x4dba3b.containerId)) return false;
    let {
        unitId: _0x3b5ea9,
        subUnitId: _0x450ed4,
        containerId: _0x19ebdd,
        autoResize: _0x27e3b5,
      } = _0x4dba3b,
      _0x34f230 = _0x3c5a02.get(L),
      _0x1ec7b8 = _0x34f230.getElementByParam({
        unitId: _0x3b5ea9,
        subUnitId: _0x450ed4,
        elementId: _0x19ebdd,
      });
    if (
      !_0x1ec7b8 ||
      _0x1ec7b8.element["type"] !== M.Container ||
      _0x1ec7b8.element["locked"] ||
      _0x1ec7b8.element["containerData"].behavior["autoResize"] === _0x27e3b5 ||
      (_0x1ec7b8.element["containerData"].behavior["membershipLocked"] &&
        !_0x27e3b5)
    )
      return false;
    let _0x1fec72 = od(_0x1ec7b8.element, _0x27e3b5),
      _0x82dec1 = [
        {
          id: $.id,
          params: {
            unitId: _0x3b5ea9,
            subUnitId: _0x450ed4,
            elementId: _0x19ebdd,
            element: _0x1fec72,
            transform: _0x1ec7b8.transform,
          },
        },
      ],
      _0x40cdbe = [
        {
          id: $.id,
          params: {
            unitId: _0x3b5ea9,
            subUnitId: _0x450ed4,
            elementId: _0x19ebdd,
            element: _0x381a86.deepClone(_0x1ec7b8.element),
            transform: _0x1ec7b8.transform
              ? { ..._0x1ec7b8.transform }
              : undefined,
          },
        },
      ];
    return !Mo(_0x34f230.getElementData(_0x3b5ea9, _0x450ed4), _0x82dec1) ||
      !_0x1c1693(_0x82dec1, _0x3c5a02.get(_0x3243d1)).result
      ? false
      : (_0x3c5a02
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x3b5ea9,
            redoMutations: _0x82dec1,
            undoMutations: _0x40cdbe,
          }),
        true);
  },
};
function cd(_0x1fc680, _0x5ec550) {
  return {
    ..._0x1fc680,
    containerData: {
      ..._0x1fc680.containerData,
      behavior: {
        ..._0x1fc680.containerData["behavior"],
        membershipLocked: _0x5ec550,
        autoResize: _0x5ec550
          ? true
          : _0x1fc680.containerData["behavior"].autoResize,
      },
    },
  };
}
function ld(_0x424a6b) {
  return (
    (_0x424a6b == null ? undefined : _0x424a6b.rotation) ??
    (_0x424a6b == null ? undefined : _0x424a6b.angle) ??
    0
  );
}
function ud(_0x366b0d) {
  return {
    left: _0x366b0d.left ?? 0,
    top: _0x366b0d.top ?? 0,
    width: _0x366b0d.width ?? 0,
    height: _0x366b0d.height ?? 0,
    angle: ld(_0x366b0d),
    flipX: _0x366b0d.flipX,
    flipY: _0x366b0d.flipY,
  };
}
function dd(_0x1c4a48, _0x455b89) {
  var _0x123f49;
  let _0x10489a =
    (_0x123f49 = H(_0x1c4a48, _0x455b89)) == null
      ? undefined
      : _0x123f49.worldTransform;
  return _0x10489a ? ud(_0x10489a) : null;
}
function fd(_0x1dbfc9, _0x49f140, _0x4e191) {
  return ud(
    W(_0x1dbfc9, {
      parentId: _0x49f140,
      worldTransform: {
        left: _0x4e191.left,
        top: _0x4e191.top,
        width: _0x4e191.width,
        height: _0x4e191.height,
        rotation: _0x4e191.angle,
        flipX: _0x4e191.flipX,
        flipY: _0x4e191.flipY,
      },
    }),
  );
}
function pd(_0x4c9c8e, _0x3d0ce4) {
  return {
    ..._0x4c9c8e,
    transform: {
      ..._0x4c9c8e.transform,
      left: _0x3d0ce4.left,
      top: _0x3d0ce4.top,
      width: _0x3d0ce4.width,
      height: _0x3d0ce4.height,
      rotation: _0x3d0ce4.angle,
      flipX: _0x3d0ce4.flipX,
      flipY: _0x3d0ce4.flipY,
    },
  };
}
function md(_0x5053d5, _0x2c480c) {
  return _0x2c480c.some((_0x88b65b) => {
    var _0x16ffac;
    let _0x45a3aa = _0x88b65b.params;
    return (
      !!_0x45a3aa.elementId &&
      ((_0x16ffac = _0x5053d5[_0x45a3aa.elementId]) == null
        ? undefined
        : _0x16ffac.element["locked"]) === true
    );
  });
}
function hd(_0x52daf7, _0x46beab) {
  return (
    _0x52daf7.left !== _0x46beab.left ||
    _0x52daf7.top !== _0x46beab.top ||
    _0x52daf7.width !== _0x46beab.width ||
    _0x52daf7.height !== _0x46beab.height
  );
}
function gd(_0x440376, _0x475fe4, _0x32162b) {
  var _0x553165, _0x3628c0;
  if (!_0x475fe4 || !_0x32162b) return;
  let _0x32f5d0 =
      (_0x553165 = _0x440376[_0x475fe4]) == null
        ? undefined
        : _0x553165.element,
    _0x3bb6e4 = U(_0x440376, _0x475fe4);
  if (!(
    !_0x32f5d0 ||
    _0x32f5d0.type !== M.Container ||
    _0x32f5d0.containerData["kind"] !== "swimlane" ||
    !_0x3bb6e4
  ))
    return (_0x3628c0 = Ui(_0x32f5d0, _0x3bb6e4, _0x32162b)) == null
      ? undefined
      : _0x3628c0.lane["id"];
}
const _d = {
    id: "board.operation.set-container-membership-lock",
    type: _0x3c65b3.OPERATION,
    handler: (_0xcee92f, _0x317b33) => {
      if (!(_0x317b33 != null && _0x317b33.containerId)) return false;
      let {
          unitId: _0x25e212,
          subUnitId: _0x514afd,
          containerId: _0x3fce29,
          membershipLocked: _0x1bbcdd,
        } = _0x317b33,
        _0x5077fb = _0xcee92f.get(L),
        _0x3d502c = _0x5077fb.getElementByParam({
          unitId: _0x25e212,
          subUnitId: _0x514afd,
          elementId: _0x3fce29,
        });
      if (
        !_0x3d502c ||
        _0x3d502c.element["type"] !== M.Container ||
        _0x3d502c.element["locked"] ||
        _0x3d502c.element["containerData"].behavior["membershipLocked"] ===
          _0x1bbcdd
      )
        return false;
      let _0x8f892b = _0x5077fb.getElementData(_0x25e212, _0x514afd),
        _0x577f73 = U(_0x8f892b, _0x3fce29),
        _0x23c689 = {
          ...cd(_0x3d502c.element, _0x1bbcdd),
          laneId: gd(_0x8f892b, _0x3d502c.element["parentId"], _0x577f73),
        },
        _0x1d44b9 = new Map(),
        _0x2733d3 = new Map(),
        _0x57a580 = { ..._0x8f892b },
        _0x2e2c9c = (_0x1f2656, _0x5100a4, _0x47e44a) => {
          (_0x1d44b9.set(_0x1f2656.elementId, {
            id: $.id,
            params: {
              unitId: _0x25e212,
              subUnitId: _0x514afd,
              elementId: _0x1f2656.elementId,
              element: _0x5100a4,
              transform: _0x47e44a,
            },
          }),
            _0x2733d3.has(_0x1f2656.elementId) ||
              _0x2733d3.set(_0x1f2656.elementId, {
                id: $.id,
                params: {
                  unitId: _0x25e212,
                  subUnitId: _0x514afd,
                  elementId: _0x1f2656.elementId,
                  element: X(_0x381a86.deepClone(_0x1f2656.element)),
                  transform: _0x1f2656.transform
                    ? { ..._0x1f2656.transform }
                    : undefined,
                },
              }),
            (_0x57a580[_0x1f2656.elementId] = {
              ..._0x1f2656,
              element: _0x5100a4,
              transform: _0x47e44a,
            }));
        };
      if (
        (_0x2e2c9c(_0x3d502c, _0x23c689, undefined),
        _0x1bbcdd && _0x23c689.containerData["behavior"].autoResize)
      ) {
        let _0x554f3b = U(_0x57a580, _0x3fce29);
        if (_0x554f3b) {
          let _0x2bc04d = Sc(_0x23c689, _0x554f3b),
            _0x287b06 = Object.values(_0x57a580).filter(
              (_0x18f918) => _0x18f918.element["parentId"] === _0x3fce29,
            ),
            _0x71c016 = yi([
              _0x2bc04d,
              ..._0x287b06
                .filter(
                  (_0x5786f8) => _0x5786f8.element["type"] !== M.Connector,
                )
                .map((_0x5c0bb9) => U(_0x57a580, _0x5c0bb9.elementId))
                .filter((_0x4f7b02) => !!_0x4f7b02),
            ]),
            _0x1dce16 = _0x71c016 ? Ec(_0x23c689, _0x554f3b, _0x71c016) : null;
          if (_0x1dce16 && hd(_0x554f3b, _0x1dce16)) {
            let _0x53c270 = new Map();
            _0x287b06.forEach((_0x52346a) => {
              let _0x5d60c7 = dd(_0x57a580, _0x52346a.elementId);
              _0x5d60c7 && _0x53c270.set(_0x52346a.elementId, _0x5d60c7);
            });
            let _0x6494d4 = fd(_0x57a580, _0x23c689.parentId, {
                left: _0x1dce16.left,
                top: _0x1dce16.top,
                width: _0x1dce16.width,
                height: _0x1dce16.height,
                angle: ld(_0x23c689.transform),
                flipX: _0x23c689.transform["flipX"],
                flipY: _0x23c689.transform["flipY"],
              }),
              _0x4458e9 = pd(
                {
                  ..._0x23c689,
                  laneId: gd(_0x57a580, _0x23c689.parentId, _0x1dce16),
                },
                _0x6494d4,
              );
            (_0x2e2c9c(_0x57a580[_0x3fce29], _0x4458e9, _0x6494d4),
              _0x53c270.forEach((_0x126412, _0x5742c5) => {
                let _0x4e8be2 = _0x57a580[_0x5742c5];
                if (!_0x4e8be2) return;
                let _0x9f0e41 = fd(_0x57a580, _0x3fce29, _0x126412),
                  _0x22bba1 = pd(_0x4e8be2.element, _0x9f0e41);
                _0x2e2c9c(_0x4e8be2, _0x22bba1, _0x9f0e41);
              }));
          }
        }
      }
      let _0x55d6da = Array.from(_0x1d44b9.values()),
        _0x31b1bd = Array.from(_0x2733d3.values()).reverse();
      return md(_0x8f892b, _0x55d6da) ||
        !Mo(_0x8f892b, _0x55d6da) ||
        !_0x1c1693(_0x55d6da, _0xcee92f.get(_0x3243d1)).result
        ? false
        : (_0xcee92f
            .get(_0x3cfbb3)
            .pushUndoRedo({
              unitID: _0x25e212,
              redoMutations: _0x55d6da,
              undoMutations: _0x31b1bd,
            }),
          true);
    },
  },
  vd = ["description", "locked", "name", "selectable", "visible"];
function yd(_0x3ee6e1, _0x4f6ac9) {
  return Object.prototype["hasOwnProperty"].call(_0x3ee6e1, _0x4f6ac9);
}
function bd(_0x44df94, _0x4f02a9) {
  let _0x217cf1 = _0x381a86.deepClone(_0x44df94);
  return (
    vd.forEach((_0x528d3b) => {
      if (!yd(_0x4f02a9, _0x528d3b)) return;
      let _0x11d4c1 = _0x4f02a9[_0x528d3b];
      if (_0x11d4c1 === undefined) {
        delete _0x217cf1[_0x528d3b];
        return;
      }
      _0x217cf1[_0x528d3b] = _0x11d4c1;
    }),
    _0x217cf1
  );
}
function xd(_0x25f9d6, _0x2f73ea) {
  return vd.some((_0x4a8bbd) => _0x25f9d6[_0x4a8bbd] !== _0x2f73ea[_0x4a8bbd]);
}
function Sd(_0x5d09c2, _0x2cca12, _0x3f87e3, _0x5bcbe8) {
  return {
    unitId: _0x5d09c2,
    subUnitId: _0x2cca12,
    elementId: _0x3f87e3,
    element: _0x5bcbe8,
    allowInactiveTarget: true,
    allowLockedTarget: true,
  };
}
const Cd = {
  id: "board.operation.set-elements-metadata",
  type: _0x3c65b3.OPERATION,
  handler: (_0x4a648f, _0x502b2d) => {
    if (!_0x502b2d || _0x502b2d.updates["length"] === 0) return false;
    let {
        unitId: _0x31d3be,
        subUnitId: _0x575708,
        updates: _0xb577ef,
      } = _0x502b2d,
      _0x2d2619 = _0x4a648f.get(L).getElementData(_0x31d3be, _0x575708),
      _0x34219a = [];
    if (
      (_0xb577ef.forEach((_0x114fd8) => {
        let _0x47cff4 = _0x2d2619[_0x114fd8.elementId];
        if (!_0x47cff4) return;
        let _0x50f3d6 = bd(_0x47cff4.element, _0x114fd8.metadata);
        xd(_0x47cff4.element, _0x50f3d6) &&
          _0x34219a.push({
            redoMutation: {
              id: $.id,
              params: Sd(_0x31d3be, _0x575708, _0x47cff4.elementId, _0x50f3d6),
            },
            undoMutation: {
              id: $.id,
              params: Sd(
                _0x31d3be,
                _0x575708,
                _0x47cff4.elementId,
                _0x381a86.deepClone(_0x47cff4.element),
              ),
            },
          });
      }),
      _0x34219a.length === 0)
    )
      return false;
    let _0x2274f3 = _0x34219a.map((_0x42f556) => _0x42f556.redoMutation);
    return !Mo(_0x2d2619, _0x2274f3) ||
      !_0x1c1693(_0x2274f3, _0x4a648f.get(_0x3243d1)).result
      ? false
      : (_0x4a648f
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x31d3be,
            redoMutations: _0x2274f3,
            undoMutations: _0x34219a.map((_0xc4c754) => _0xc4c754.undoMutation),
          }),
        true);
  },
};
function wd(_0x58e9ab, _0x2c7418, _0x3e29a9, _0x35a1c8, _0x31d646) {
  let _0x4cd990 = U(_0x3e29a9, _0x35a1c8.elementId);
  if (!_0x4cd990) return { redoMutations: [], undoMutations: [] };
  let _0x559263 =
      U(
        {
          ..._0x3e29a9,
          [_0x35a1c8.elementId]: {
            ..._0x35a1c8,
            element: _0x31d646,
            transform: _0x31d646.transform,
          },
        },
        _0x35a1c8.elementId,
      ) ?? _0x4cd990,
    _0x3f8e52 = new Map(
      Fi(_0x35a1c8.element, _0x4cd990).map((_0x15c2d7) => [
        _0x15c2d7.lane["id"],
        _0x15c2d7.bounds,
      ]),
    ),
    _0x4f220a = new Map(
      Fi(_0x31d646, _0x559263).map((_0x3b0e46) => [
        _0x3b0e46.lane["id"],
        _0x3b0e46.bounds,
      ]),
    ),
    _0x4bff32 = { ..._0x3e29a9 },
    _0x47cbb0 = new Set(),
    _0x4334e0 = [],
    _0x1a3e1 = [];
  return (
    Object.values(_0x3e29a9).forEach((_0x14691a) => {
      let _0x4bca44 = _0x14691a.element;
      if (_0x4bca44.parentId !== _0x35a1c8.elementId || !_0x4bca44.laneId)
        return;
      let _0x37ddd2 = _0x3f8e52.get(_0x4bca44.laneId),
        _0x2ab2fe = _0x4f220a.get(_0x4bca44.laneId);
      if (!_0x37ddd2 || !_0x2ab2fe) return;
      let _0x10a6b6 = _0x2ab2fe.left - _0x37ddd2.left,
        _0x427ff6 = _0x2ab2fe.top - _0x37ddd2.top;
      if (_0x10a6b6 === 0 && _0x427ff6 === 0) return;
      let _0x1e3ca4 = _0x14691a.transform ?? {
          left: _0x4bca44.transform["left"] ?? 0,
          top: _0x4bca44.transform["top"] ?? 0,
          width: _0x4bca44.transform["width"] ?? 0,
          height: _0x4bca44.transform["height"] ?? 0,
          angle: _0x4bca44.transform["rotation"] ?? 0,
          flipX: _0x4bca44.transform["flipX"],
          flipY: _0x4bca44.transform["flipY"],
        },
        _0x227f5f = {
          ..._0x1e3ca4,
          left:
            (_0x1e3ca4.left ?? _0x4bca44.transform["left"] ?? 0) + _0x10a6b6,
          top: (_0x1e3ca4.top ?? _0x4bca44.transform["top"] ?? 0) + _0x427ff6,
        },
        _0x15f5ee =
          _0x4bca44.type === M.Connector
            ? ni(
                {
                  ..._0x4bca44,
                  transform: {
                    ..._0x4bca44.transform,
                    left: (_0x4bca44.transform["left"] ?? 0) + _0x10a6b6,
                    top: (_0x4bca44.transform["top"] ?? 0) + _0x427ff6,
                  },
                },
                { x: _0x10a6b6, y: _0x427ff6 },
              )
            : {
                ..._0x4bca44,
                transform: {
                  ..._0x4bca44.transform,
                  left: (_0x4bca44.transform["left"] ?? 0) + _0x10a6b6,
                  top: (_0x4bca44.transform["top"] ?? 0) + _0x427ff6,
                },
              };
      (_0x4334e0.push({
        id: $.id,
        params: {
          unitId: _0x58e9ab,
          subUnitId: _0x2c7418,
          elementId: _0x14691a.elementId,
          element: _0x381a86.deepClone(_0x15f5ee),
          transform: _0x227f5f,
        },
      }),
        (_0x4bff32[_0x14691a.elementId] = {
          ..._0x14691a,
          element: _0x15f5ee,
          transform: _0x227f5f,
        }),
        _0x47cbb0.add(_0x14691a.elementId),
        _0x1a3e1.unshift({
          id: $.id,
          params: {
            unitId: _0x58e9ab,
            subUnitId: _0x2c7418,
            elementId: _0x14691a.elementId,
            element: _0x381a86.deepClone(_0x4bca44),
            transform: _0x14691a.transform
              ? { ..._0x14691a.transform }
              : _0x14691a.transform,
          },
        }));
    }),
    _0x47cbb0.size > 0 &&
      Object.values(_0x4bff32).forEach((_0x292048) => {
        if (!Q(_0x292048) || _0x47cbb0.has(_0x292048.elementId)) return;
        let _0x30bfad = di(_0x292048.element, _0x47cbb0, _0x4bff32);
        if (_0x30bfad === _0x292048.element) return;
        let _0x43fd55 = fi(_0x30bfad.transform);
        (_0x4334e0.push({
          id: $.id,
          params: {
            unitId: _0x58e9ab,
            subUnitId: _0x2c7418,
            elementId: _0x292048.elementId,
            element: _0x381a86.deepClone(_0x30bfad),
            transform: _0x43fd55,
          },
        }),
          _0x1a3e1.unshift({
            id: $.id,
            params: {
              unitId: _0x58e9ab,
              subUnitId: _0x2c7418,
              elementId: _0x292048.elementId,
              element: _0x381a86.deepClone(_0x292048.element),
              transform: _0x292048.transform
                ? { ..._0x292048.transform }
                : _0x292048.transform,
            },
          }),
          (_0x4bff32[_0x292048.elementId] = {
            ..._0x292048,
            element: _0x30bfad,
            transform: _0x43fd55,
          }));
      }),
    { redoMutations: _0x4334e0, undoMutations: _0x1a3e1 }
  );
}
const Td = {
  id: "board.operation.set-swimlane-lanes",
  type: _0x3c65b3.OPERATION,
  handler: (_0x1d9d7b, _0x139c53) => {
    if (!_0x139c53 || !_0x139c53.containerId || !wi(_0x139c53.swimlane))
      return false;
    let {
        unitId: _0x36419a,
        subUnitId: _0x12a7ae,
        containerId: _0x432f0a,
      } = _0x139c53,
      _0xef692c = Ti(_0x139c53.swimlane),
      _0x4edbb6 = _0x1d9d7b.get(L).getElementData(_0x36419a, _0x12a7ae),
      _0x1824aa = _0x4edbb6[_0x432f0a],
      _0x17ccf3 = _0x1824aa == null ? undefined : _0x1824aa.element;
    if (
      !_0x1824aa ||
      (_0x17ccf3 == null ? undefined : _0x17ccf3.type) !== M.Container ||
      _0x17ccf3.locked === true ||
      _0x17ccf3.containerData["kind"] !== "swimlane" ||
      !_0x17ccf3.containerData["swimlane"] ||
      ki(_0x17ccf3.containerData["swimlane"], _0xef692c)
    )
      return false;
    let _0x1b375c = _0x139c53.transform
        ? { ..._0x17ccf3.transform, ..._0x139c53.transform }
        : _0x17ccf3.transform,
      _0x30ca8d = X({
        ..._0x17ccf3,
        transform: _0x1b375c,
        containerData: {
          ..._0x17ccf3.containerData,
          swimlane: _0x381a86.deepClone(_0xef692c),
        },
      }),
      _0x4532a3 = {
        id: $.id,
        params: {
          unitId: _0x36419a,
          subUnitId: _0x12a7ae,
          elementId: _0x432f0a,
          element: _0x30ca8d,
          transform: _0x1b375c && { ..._0x1b375c },
        },
      },
      _0x45c839 = wd(_0x36419a, _0x12a7ae, _0x4edbb6, _0x1824aa, _0x30ca8d),
      _0x59b795 = [_0x4532a3, ..._0x45c839.redoMutations];
    if (!Mo(_0x4edbb6, _0x59b795)) return false;
    let _0x4143c5 = {
        id: $.id,
        params: {
          unitId: _0x36419a,
          subUnitId: _0x12a7ae,
          elementId: _0x432f0a,
          element: X(_0x381a86.deepClone(_0x17ccf3)),
          transform: _0x1824aa.transform
            ? { ..._0x1824aa.transform }
            : _0x1824aa.transform,
        },
      },
      _0x233f4a = [..._0x45c839.undoMutations, _0x4143c5];
    return _0x1c1693(_0x59b795, _0x1d9d7b.get(_0x3243d1)).result
      ? (_0x1d9d7b
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x36419a,
            redoMutations: _0x59b795,
            undoMutations: _0x233f4a,
          }),
        true)
      : false;
  },
};
function Ed(_0x1c8492) {
  return Number.isFinite(_0x1c8492) && _0x1c8492 >= 0;
}
function Dd(_0x333757) {
  var _0x2c2107;
  return [
    ...(((_0x2c2107 = _0x333757.containerData["swimlane"]) == null
      ? undefined
      : _0x2c2107.lanes) ?? []),
  ].sort((_0x321356, _0x38fb85) => _0x321356.order - _0x38fb85.order);
}
function Od(_0x23712e, _0x48361d, _0x3c9266) {
  var _0xaa8c3d;
  let _0x523361 = Dd(_0x23712e),
    _0x396ddc = _0x523361[_0x523361.length - 1];
  if (
    !_0x396ddc ||
    _0x396ddc.id !== _0x48361d.id ||
    _0x48361d.collapsed === true
  )
    return _0x23712e.transform;
  let _0x2b5ba0 = _0x3c9266 - _0x48361d.size;
  return _0x2b5ba0 === 0
    ? _0x23712e.transform
    : ((_0xaa8c3d = _0x23712e.containerData["swimlane"]) == null
          ? undefined
          : _0xaa8c3d.orientation) === "horizontal"
      ? {
          ..._0x23712e.transform,
          height: Math.max(0, (_0x23712e.transform["height"] ?? 0) + _0x2b5ba0),
        }
      : {
          ..._0x23712e.transform,
          width: Math.max(0, (_0x23712e.transform["width"] ?? 0) + _0x2b5ba0),
        };
}
function kd(_0x4d93fd, _0x11fa01, _0x51e30b) {
  let _0xa7ec4d = Dd(_0x4d93fd),
    _0x175645 = _0xa7ec4d.findIndex((_0x32fe61) => _0x32fe61.id === _0x11fa01),
    _0x4d862e = _0xa7ec4d[_0x175645];
  if (
    !_0x4d862e ||
    _0x4d862e.locked === true ||
    _0x51e30b < (_0x4d862e.minSize ?? 0)
  )
    return null;
  let _0x251711 = Od(_0x4d93fd, _0x4d862e, _0x51e30b),
    _0x5bfb60 = _0xa7ec4d[_0x175645 + 1],
    _0x35eee0 = _0x51e30b - _0x4d862e.size,
    _0x224c23 = _0x4d93fd.containerData["swimlane"].lanes["map"]((_0x54eff5) =>
      _0x54eff5.id === _0x11fa01
        ? { ..._0x54eff5, size: _0x51e30b }
        : _0x54eff5,
    );
  if (_0x5bfb60) {
    if (_0x5bfb60.locked === true || _0x5bfb60.collapsed === true) return null;
    let _0x15110e = _0x5bfb60.size - _0x35eee0;
    return _0x15110e < (_0x5bfb60.minSize ?? 0)
      ? null
      : {
          transform: _0x251711,
          lanes: _0x224c23.map((_0x4c5d8c) =>
            _0x4c5d8c.id === _0x5bfb60.id
              ? { ..._0x4c5d8c, size: _0x15110e }
              : _0x4c5d8c,
          ),
        };
  }
  return { transform: _0x251711, lanes: _0x224c23 };
}
const Ad = {
  id: "board.operation.set-swimlane-lane-size",
  type: _0x3c65b3.OPERATION,
  handler: (_0x4f008e, _0x4f3fea) => {
    if (
      !_0x4f3fea ||
      !_0x4f3fea.containerId ||
      !_0x4f3fea.laneId ||
      !Ed(_0x4f3fea.size)
    )
      return false;
    let {
        unitId: _0x416334,
        subUnitId: _0x2099d6,
        containerId: _0x39ebac,
        laneId: _0x19b45c,
        size: _0x35a0ed,
      } = _0x4f3fea,
      _0x4f5ab1 = _0x4f008e.get(L).getElementData(_0x416334, _0x2099d6),
      _0x2525a2 = _0x4f5ab1[_0x39ebac],
      _0x502267 = _0x2525a2 == null ? undefined : _0x2525a2.element;
    if (
      !_0x2525a2 ||
      (_0x502267 == null ? undefined : _0x502267.type) !== M.Container ||
      _0x502267.locked === true ||
      _0x502267.containerData["kind"] !== "swimlane" ||
      !_0x502267.containerData["swimlane"]
    )
      return false;
    let _0x56fa2d = kd(_0x502267, _0x19b45c, _0x35a0ed);
    if (!_0x56fa2d) return false;
    let _0x38e425 = Ti({
      ..._0x502267.containerData["swimlane"],
      lanes: _0x56fa2d.lanes,
    });
    if (ki(_0x502267.containerData["swimlane"], _0x38e425)) return false;
    let _0x1ac53e = X({
        ..._0x502267,
        transform: _0x56fa2d.transform,
        containerData: { ..._0x502267.containerData, swimlane: _0x38e425 },
      }),
      _0x4f0996 = {
        id: $.id,
        params: {
          unitId: _0x416334,
          subUnitId: _0x2099d6,
          elementId: _0x39ebac,
          element: _0x1ac53e,
          transform: _0x56fa2d.transform
            ? { ..._0x56fa2d.transform }
            : _0x56fa2d.transform,
        },
      },
      _0x292d71 = wd(_0x416334, _0x2099d6, _0x4f5ab1, _0x2525a2, _0x1ac53e),
      _0x52e2be = [_0x4f0996, ..._0x292d71.redoMutations];
    if (!Mo(_0x4f5ab1, _0x52e2be)) return false;
    let _0x4ad4ee = {
        id: $.id,
        params: {
          unitId: _0x416334,
          subUnitId: _0x2099d6,
          elementId: _0x39ebac,
          element: X(_0x381a86.deepClone(_0x502267)),
          transform: _0x2525a2.transform
            ? { ..._0x2525a2.transform }
            : _0x2525a2.transform,
        },
      },
      _0x479572 = [..._0x292d71.undoMutations, _0x4ad4ee];
    return _0x1c1693(_0x52e2be, _0x4f008e.get(_0x3243d1)).result
      ? (_0x4f008e
          .get(_0x3cfbb3)
          .pushUndoRedo({
            unitID: _0x416334,
            redoMutations: _0x52e2be,
            undoMutations: _0x479572,
          }),
        true)
      : false;
  },
};
function jd(_0x112e41) {
  return JSON.parse(JSON.stringify(_0x112e41));
}
function Md(_0x4f3065, _0xda865b, _0x59fdeb) {
  return _0x59fdeb.map((_0x1a7d85) => ({
    unitId: _0x4f3065,
    subUnitId: _0xda865b,
    elementId: _0x1a7d85,
  }));
}
function Nd(_0x28de58, _0x3d1d22, _0x3dbf85) {
  let _0x478513 = _0x3d1d22.getUnitId(),
    _0x462e98 = _0x3d1d22.getSnapshot();
  Lo(_0x462e98).forEach((_0x562305) => {
    let _0x352dae = Bo(_0x462e98, _0x562305);
    if (!_0x352dae) return;
    let _0x446d4f = _0x28de58.getElementOrder(_0x478513, _0x562305),
      _0x261859 = new Set(_0x446d4f),
      { data: _0x1843af, order: _0x24f7ca } = Jt(
        _0x478513,
        _0x562305,
        _0x352dae.elements,
        _0x352dae.elementOrder,
        _0x3dbf85,
      ),
      _0x5ae204 = new Set(_0x24f7ca),
      _0x131448 = {
        ..._0x28de58.getElementDataForUnit(_0x478513),
        [_0x562305]: { data: _0x1843af, order: _0x24f7ca },
      };
    _0x28de58.registerElementData(_0x478513, _0x131448);
    let _0x28b23c = _0x446d4f.filter((_0x34a188) => !_0x5ae204.has(_0x34a188)),
      _0x5d9314 = _0x24f7ca.filter((_0x243485) => !_0x261859.has(_0x243485)),
      _0x26b4e1 = _0x24f7ca.filter((_0x3f8362) => _0x261859.has(_0x3f8362));
    (_0x28b23c.length > 0 &&
      _0x28de58.removeElementNotification(Md(_0x478513, _0x562305, _0x28b23c)),
      _0x5d9314.length > 0 &&
        _0x28de58.addElementNotification(Md(_0x478513, _0x562305, _0x5d9314)),
      _0x26b4e1.length > 0 &&
        _0x28de58.updateElementNotification(
          Md(_0x478513, _0x562305, _0x26b4e1),
        ));
  });
}
const Pd = {
  id: "board.operation.set-theme",
  type: _0x3c65b3.OPERATION,
  handler: (_0x5678b2, _0x5dea69) => {
    if (
      !(_0x5dea69 != null && _0x5dea69.themeId) &&
      !(_0x5dea69 != null && _0x5dea69.themeData)
    )
      return false;
    let _0x187e1d =
      _0x5dea69.themeData ??
      (_0x5dea69.themeId ? _t(_0x5dea69.themeId) : undefined);
    if (!_0x187e1d) return false;
    let _0x4e279d = _0x5678b2
      .get(_0x5c9e00)
      .getUnit(_0x5dea69.unitId, _0x9aeb0c.UNIVER_BOARD);
    if (!_0x4e279d) return false;
    let _0x5a6933 = jd(_0x187e1d);
    return (
      _0x4e279d.setThemeData(_0x5a6933),
      Nd(_0x5678b2.get(L), _0x4e279d, _0x5a6933),
      true
    );
  },
};
function Fd(_0x357677, _0x3c5ef0) {
  return {
    ..._0x357677,
    transform: {
      ..._0x357677.transform,
      left: _0x3c5ef0.left,
      top: _0x3c5ef0.top,
      width: _0x3c5ef0.width,
      height: _0x3c5ef0.height,
      rotation: _0x3c5ef0.angle,
      flipX: _0x3c5ef0.flipX,
      flipY: _0x3c5ef0.flipY,
    },
  };
}
function Id(_0x54f76f, _0x39d082, _0x3e1b0c) {
  let _0x475652 = new Set(_0x39d082),
    _0x189d3d = _0x3e1b0c.filter(
      (_0x309303) => _0x475652.has(_0x309303) && _0x54f76f[_0x309303],
    );
  return (
    _0x39d082.forEach((_0x3a4f1c) => {
      _0x54f76f[_0x3a4f1c] &&
        !_0x189d3d.includes(_0x3a4f1c) &&
        _0x189d3d.push(_0x3a4f1c);
    }),
    _0x189d3d
  );
}
function Ld(_0x4b3d1a, _0xc51105, _0x2d5d4c) {
  let _0x1e1a2c = new Set(_0xc51105),
    _0x4b5f0b = new Set(_0xc51105),
    _0x128176 = _0x2d5d4c.filter((_0x3a0d54) => {
      let _0x583d01 = _0x4b3d1a[_0x3a0d54];
      if (!Q(_0x583d01) || _0x1e1a2c.has(_0x3a0d54)) return false;
      let _0xafb588 = Za(_0x583d01.element);
      return (
        _0xafb588.length > 0 &&
        _0xafb588.every((_0x2ecaf8) => _0x1e1a2c.has(_0x2ecaf8))
      );
    });
  return [
    ..._0xc51105,
    ..._0x128176.filter((_0x2adc27) =>
      _0x4b5f0b.has(_0x2adc27) ? false : (_0x4b5f0b.add(_0x2adc27), true),
    ),
  ].sort((_0x4bc713, _0x145972) => {
    let _0x5a5159 = _0x2d5d4c.indexOf(_0x4bc713),
      _0x237381 = _0x2d5d4c.indexOf(_0x145972);
    return (
      (_0x5a5159 >= 0 ? _0x5a5159 : 2 ** 53 - 1) -
      (_0x237381 >= 0 ? _0x237381 : 2 ** 53 - 1)
    );
  });
}
function Rd(_0x35e30b, _0x1c3e60) {
  let _0x368ee3 = new Set(_0x1c3e60);
  return _0x1c3e60.filter((_0x1e6f3e) => {
    let _0x558f01 = _0x35e30b[_0x1e6f3e];
    if (!Q(_0x558f01)) return true;
    let _0x12ce17 = Za(_0x558f01.element);
    return (
      _0x12ce17.length > 0 &&
      _0x12ce17.every((_0x33aae8) => _0x368ee3.has(_0x33aae8))
    );
  });
}
function zd(_0xf633e2, _0x1fc5e0, _0x50358d) {
  var _0xa65699;
  let _0x512694 =
      (_0xa65699 = _0xf633e2[_0x1fc5e0]) == null
        ? undefined
        : _0xa65699.element["parentId"],
    _0x22af2a = new Set([_0x1fc5e0]);
  for (; _0x512694;) {
    if (_0x22af2a.has(_0x512694)) return false;
    let _0x4d9715 = _0xf633e2[_0x512694];
    if (!_0x4d9715 || _0x4d9715.element["type"] !== M.Container) return false;
    if (_0x50358d.has(_0x512694)) return true;
    (_0x22af2a.add(_0x512694), (_0x512694 = _0x4d9715.element["parentId"]));
  }
  return false;
}
function Bd(_0x5b4b2d, _0x38de59) {
  let _0x3b44d3 = new Set(_0x38de59);
  return _0x38de59.filter((_0x1894be) => {
    let _0x4c52b1 = _0x5b4b2d[_0x1894be];
    return _0x4c52b1
      ? Q(_0x4c52b1)
        ? true
        : !zd(_0x5b4b2d, _0x1894be, _0x3b44d3)
      : false;
  });
}
function Vd(_0x1843dd, _0x2bd60e) {
  let _0x10a5d5 = Array.from(
    new Set(
      _0x2bd60e.map((_0x419294) => {
        var _0x8f54fd;
        return (_0x8f54fd = _0x1843dd[_0x419294]) == null
          ? undefined
          : _0x8f54fd.element["parentId"];
      }),
    ),
  );
  return _0x10a5d5.length === 1 ? _0x10a5d5[0] : Gn(_0x1843dd, _0x2bd60e);
}
function Hd(_0x6a0845, _0x365ea0) {
  var _0x45b62b;
  let _0x19b585 = _0x365ea0
    ? (_0x45b62b = _0x6a0845[_0x365ea0]) == null
      ? undefined
      : _0x45b62b.element
    : undefined;
  return (
    (_0x19b585 == null ? undefined : _0x19b585.type) === M.Container &&
    _0x19b585.containerData["behavior"].membershipLocked
  );
}
function Ud(_0x82d12b, _0xf1ecea) {
  var _0x17d83f;
  if (!_0xf1ecea) return true;
  let _0x1a1d3b =
    (_0x17d83f = _0x82d12b[_0xf1ecea]) == null ? undefined : _0x17d83f.element;
  if (!_0x1a1d3b || _0x1a1d3b.type !== M.Container) return false;
  let _0x1f7509 = _0x1a1d3b.containerData["behavior"];
  return (
    !_0x1f7509.membershipLocked &&
    _0x1f7509.acceptsChildren &&
    _0x1f7509.acceptsContainer &&
    _0x1f7509.allowNested
  );
}
function Wd(_0x3cbaa8, _0x30760e, _0x3e1f7f) {
  var _0x1518b5, _0x1c875a;
  if (!_0x30760e) return;
  let _0x43ddf6 =
      (_0x1518b5 = _0x3cbaa8[_0x30760e]) == null
        ? undefined
        : _0x1518b5.element,
    _0xc9ab4b = U(_0x3cbaa8, _0x30760e);
  if (!(
    !_0x43ddf6 ||
    _0x43ddf6.type !== M.Container ||
    _0x43ddf6.containerData["kind"] !== "swimlane" ||
    !_0xc9ab4b
  ))
    return (_0x1c875a = Ui(_0x43ddf6, _0xc9ab4b, _0x3e1f7f)) == null
      ? undefined
      : _0x1c875a.lane["id"];
}
const Gd = {
    id: "board.operation.wrap-elements-in-container",
    type: _0x3c65b3.OPERATION,
    handler: (_0x36a26d, _0x23e3ba) => {
      if (!_0x23e3ba || _0x23e3ba.elementIds["length"] === 0) return false;
      let { unitId: _0x55a07e, subUnitId: _0x253c54 } = _0x23e3ba,
        _0x1890a6 = _0x36a26d.get(L),
        _0x2accc7 = _0x1890a6.getElementData(_0x55a07e, _0x253c54),
        _0x5d975a = _0x1890a6.getElementOrder(_0x55a07e, _0x253c54);
      if (
        new Set(_0x23e3ba.elementIds).size !== _0x23e3ba.elementIds["length"] ||
        _0x23e3ba.elementIds["some"]((_0x1738f7) => !_0x2accc7[_0x1738f7])
      )
        return false;
      let _0x4a8080 = Ld(
        _0x2accc7,
        Rd(
          _0x2accc7,
          po(_0x2accc7, Id(_0x2accc7, _0x23e3ba.elementIds, _0x5d975a)),
        ),
        _0x5d975a,
      );
      if (_0x4a8080.length === 0) return false;
      let _0x2b2036 = Bd(_0x2accc7, _0x4a8080);
      if (_0x2b2036.length === 0) return false;
      let _0x33e387 = _0x2b2036.filter((_0x4facb0) => {
        var _0x13fb46;
        return (
          ((_0x13fb46 = _0x2accc7[_0x4facb0]) == null
            ? undefined
            : _0x13fb46.element["type"]) !== M.Connector
        );
      });
      if (_0x33e387.length === 0) return false;
      let _0x3933e4 = _0x33e387
        .map((_0x3a54f8) => {
          var _0x584210;
          return (_0x584210 = H(_0x2accc7, _0x3a54f8)) == null
            ? undefined
            : _0x584210.worldTransform;
        })
        .filter((_0x2bb6e6) => !!_0x2bb6e6);
      if (_0x3933e4.length !== _0x33e387.length) return false;
      let _0x4349f3 = _0x3933e4.map((_0x228e00) => ({
          left: _0x228e00.left ?? 0,
          top: _0x228e00.top ?? 0,
          width: _0x228e00.width ?? 0,
          height: _0x228e00.height ?? 0,
        })),
        _0x1f3589 = Math.min(..._0x4349f3.map((_0x3ed731) => _0x3ed731.left)),
        _0x43c1c3 = Math.min(..._0x4349f3.map((_0x4fc607) => _0x4fc607.top)),
        _0x26d42f = Math.max(..._0x4349f3.map(q)),
        _0x57cc97 = Math.max(..._0x4349f3.map(J)),
        _0x65843d = {
          left: _0x1f3589,
          top: _0x43c1c3,
          width: _0x26d42f - _0x1f3589,
          height: _0x57cc97 - _0x43c1c3,
        },
        _0x32e2d6 = Vd(_0x2accc7, _0x2b2036);
      if (
        !Ud(_0x2accc7, _0x32e2d6) ||
        _0x2b2036.some((_0x4e04c0) => {
          var _0x4a3e0b;
          return Hd(
            _0x2accc7,
            (_0x4a3e0b = _0x2accc7[_0x4e04c0]) == null
              ? undefined
              : _0x4a3e0b.element["parentId"],
          );
        })
      )
        return false;
      let _0x144f87 = $i.padding,
        _0x1f07f4 = $i.headerSize,
        _0xf83612 = {
          left: _0x1f3589 - _0x144f87.left,
          top: _0x43c1c3 - _0x1f07f4 - _0x144f87.top,
          width: _0x26d42f - _0x1f3589 + _0x144f87.left + _0x144f87.right,
          height:
            _0x57cc97 -
            _0x43c1c3 +
            _0x1f07f4 +
            _0x144f87.top +
            _0x144f87.bottom,
          angle: 0,
        },
        _0x271622 = Wd(_0x2accc7, _0x32e2d6, _0x65843d),
        _0x3b77cc = G(
          W(_0x2accc7, { parentId: _0x32e2d6, worldTransform: Xn(_0xf83612) }),
        ),
        _0x6cb2bb = fa({
          id: _0x23e3ba.containerId,
          title: _0x23e3ba.title,
          parentId: _0x32e2d6,
          laneId: _0x271622,
          left: _0x3b77cc.left,
          top: _0x3b77cc.top,
          width: _0x3b77cc.width,
          height: _0x3b77cc.height,
        }),
        _0x3c8ad4 = Math.min(
          ..._0x4a8080.map((_0x2790b9) => {
            let _0x3c23a7 = _0x5d975a.indexOf(_0x2790b9);
            return _0x3c23a7 >= 0 ? _0x3c23a7 : _0x5d975a.length;
          }),
        ),
        _0x4effe6 = {
          ..._0x2accc7,
          [_0x6cb2bb.id]: {
            unitId: _0x55a07e,
            subUnitId: _0x253c54,
            elementId: _0x6cb2bb.id,
            transform: {
              left: _0x6cb2bb.transform["left"],
              top: _0x6cb2bb.transform["top"],
              width: _0x6cb2bb.transform["width"],
              height: _0x6cb2bb.transform["height"],
              angle: _0x6cb2bb.transform["rotation"] ?? 0,
              flipX: _0x6cb2bb.transform["flipX"],
              flipY: _0x6cb2bb.transform["flipY"],
            },
            element: _0x6cb2bb,
          },
        },
        _0x9f5586 = [];
      if (
        (_0x2b2036.forEach((_0x18ba45) => {
          var _0x54c814;
          let _0x5a0548 = _0x2accc7[_0x18ba45],
            _0xeee309 =
              (_0x54c814 = H(_0x2accc7, _0x18ba45)) == null
                ? undefined
                : _0x54c814.worldTransform;
          if (!_0xeee309) return;
          let _0x11bceb = G(
              W(_0x4effe6, {
                parentId: _0x6cb2bb.id,
                worldTransform: _0xeee309,
              }),
            ),
            _0x4256cf = Fd(
              {
                ..._0x5a0548.element,
                parentId: _0x6cb2bb.id,
                laneId: undefined,
              },
              _0x11bceb,
            );
          _0x9f5586.push({
            id: $.id,
            params: {
              unitId: _0x55a07e,
              subUnitId: _0x253c54,
              elementId: _0x18ba45,
              element: _0x4256cf,
              transform: _0x11bceb,
            },
          });
        }),
        _0x9f5586.length !== _0x2b2036.length)
      )
        return false;
      let _0xb5dfab = [
          {
            id: Ss.id,
            params: {
              unitId: _0x55a07e,
              subUnitId: _0x253c54,
              element: _0x6cb2bb,
              insertIndex: _0x3c8ad4,
            },
          },
          ..._0x9f5586,
        ],
        _0xb0ab9 = [
          ..._0x2b2036.map((_0x1ad950) => {
            let _0x2c787e = _0x2accc7[_0x1ad950];
            return {
              id: $.id,
              params: {
                unitId: _0x55a07e,
                subUnitId: _0x253c54,
                elementId: _0x1ad950,
                element: _0x381a86.deepClone(_0x2c787e.element),
                transform: _0x2c787e.transform
                  ? { ..._0x2c787e.transform }
                  : _0x2c787e.transform,
              },
            };
          }),
          {
            id: dc.id,
            params: {
              unitId: _0x55a07e,
              subUnitId: _0x253c54,
              elementId: _0x6cb2bb.id,
            },
          },
        ];
      return !No(_0x2accc7, _0xb5dfab) ||
        !_0x1c1693(_0xb5dfab, _0x36a26d.get(_0x3243d1)).result
        ? false
        : (_0x36a26d
            .get(_0x3cfbb3)
            .pushUndoRedo({
              unitID: _0x55a07e,
              redoMutations: _0xb5dfab,
              undoMutations: _0xb0ab9,
            }),
          true);
    },
  },
  Kd = { width: 1920, height: 1080 };
function qd(_0x2b5a20 = _0x2928b2(6), _0x38bfb9 = "Untitled Board", _0x5e396) {
  let _0x5d9a7b = _0x2928b2(6),
    _0x2ec2ff = {
      id: _0x5d9a7b,
      pageType: "page",
      name: "Board",
      elementOrder: [],
      elements: {},
      background: { type: "none" },
    },
    _0x1e8fcf = [_0x5d9a7b],
    _0x19802f = { [_0x5d9a7b]: _0x2ec2ff },
    _0xb59a9f = {
      id: _0x2b5a20,
      name: _0x38bfb9,
      appVersion: "0.0.1",
      defaultPageSize: { ...Kd },
      pageOrder: _0x1e8fcf,
      pages: _0x19802f,
      activePageId: _0x5d9a7b,
      slideOrder: _0x1e8fcf,
      slides: _0x19802f,
      activeSlideId: _0x5d9a7b,
      theme: Ot,
    };
  return (_0x5e396 != null && (_0xb59a9f.locale = _0x5e396), _0xb59a9f);
}
function Jd(_0x462e17, _0x2839b0) {
  return Object.fromEntries(
    Object.values(_0x2839b0.elements).map((_0x5f4e9e) => [
      _0x5f4e9e.id,
      {
        unitId: _0x462e17,
        subUnitId: _0x2839b0.id,
        elementId: _0x5f4e9e.id,
        element: _0x5f4e9e,
        transform: {
          left: _0x5f4e9e.transform["left"] ?? 0,
          top: _0x5f4e9e.transform["top"] ?? 0,
          width: _0x5f4e9e.transform["width"] ?? 0,
          height: _0x5f4e9e.transform["height"] ?? 0,
          angle: _0x5f4e9e.transform["rotation"] ?? 0,
          flipX: _0x5f4e9e.transform["flipX"],
          flipY: _0x5f4e9e.transform["flipY"],
        },
      },
    ]),
  );
}
function Yd(_0x7dd4f9) {
  return _0x7dd4f9.left === undefined ||
    _0x7dd4f9.top === undefined ||
    _0x7dd4f9.width === undefined ||
    _0x7dd4f9.height === undefined
    ? null
    : {
        left: _0x7dd4f9.left,
        top: _0x7dd4f9.top,
        width: _0x7dd4f9.width,
        height: _0x7dd4f9.height,
      };
}
function Xd(_0x26c371, _0x28a037) {
  _0x26c371.elements[_0x28a037.id] = _0x28a037;
}
function Zd(_0x26ec26) {
  let { padding: _0x3a24ef } = _0x26ec26.containerData;
  return (
    !!_0x3a24ef &&
    _0x3a24ef.top === 0 &&
    _0x3a24ef.right === 0 &&
    _0x3a24ef.bottom === 0 &&
    _0x3a24ef.left === 0
  );
}
function Qd(_0xbab106) {
  let _0x3e6e88 = false;
  return (
    Object.values(_0xbab106.elements).forEach((_0x103bc2) => {
      var _0x4bffcc;
      let _0x146c62 =
        _0x103bc2.type === M.Container &&
        _0x103bc2.containerData["kind"] === "swimlane"
          ? _0x103bc2.containerData["swimlane"]
          : undefined;
      if (
        _0x103bc2.type !== M.Container ||
        _0x103bc2.containerData["kind"] !== "swimlane" ||
        !_0x146c62 ||
        (_0x146c62.laneGap === 0 &&
          _0x146c62.headerSize !== undefined &&
          _0x146c62.collapsedLaneSize !== undefined &&
          Zd(_0x103bc2))
      )
        return;
      let _0x3873f9 = X(_0x103bc2);
      if (_0x3873f9.type !== M.Container) {
        (Xd(_0xbab106, _0x3873f9), (_0x3e6e88 = true));
        return;
      }
      let _0x333c20 =
        (_0x4bffcc = _0x3873f9.containerData["swimlane"]) == null
          ? undefined
          : _0x4bffcc.orientation;
      (Xd(_0xbab106, {
        ..._0x3873f9,
        containerData: {
          ..._0x3873f9.containerData,
          swimlane: _0x3873f9.containerData["swimlane"]
            ? {
                ..._0x3873f9.containerData["swimlane"],
                headerSize:
                  _0x3873f9.containerData["swimlane"].headerSize ??
                  (_0x333c20 === "horizontal"
                    ? Y.horizontalHeaderSize
                    : Y.verticalHeaderSize),
                collapsedLaneSize:
                  _0x3873f9.containerData["swimlane"].collapsedLaneSize ??
                  Y.collapsedLaneSize,
              }
            : _0x3873f9.containerData["swimlane"],
        },
      }),
        (_0x3e6e88 = true));
    }),
    _0x3e6e88
  );
}
function $d(_0x32ba9b) {
  let _0x51f12b = false;
  return (
    Object.values(_0x32ba9b.elements).forEach((_0x342618) => {
      if (_0x342618.type !== M.Container) return;
      let _0x563ca2 = Ta(_0x342618);
      _0x563ca2 !== _0x342618 && (Xd(_0x32ba9b, _0x563ca2), (_0x51f12b = true));
    }),
    _0x51f12b
  );
}
function ef(_0xfe99f5) {
  let _0x4cef19 = false;
  return (
    Object.values(_0xfe99f5.elements).forEach((_0x40e58a) => {
      _0x40e58a.type === M.Container &&
        (_0x40e58a.transform["rotation"] ?? 0) !== 0 &&
        (Xd(_0xfe99f5, {
          ..._0x40e58a,
          transform: { ..._0x40e58a.transform, rotation: 0 },
        }),
        (_0x4cef19 = true));
    }),
    _0x4cef19
  );
}
function tf(_0x4c8c07, _0x33fcea) {
  let _0x277adc = _0x4c8c07.elements[_0x33fcea];
  return !_0x277adc ||
    _0x277adc.type !== M.Container ||
    !_0x277adc.containerData["behavior"].membershipLocked ||
    _0x277adc.containerData["behavior"].autoResize
    ? false
    : (Xd(_0x4c8c07, {
        ..._0x277adc,
        containerData: {
          ..._0x277adc.containerData,
          behavior: {
            ..._0x277adc.containerData["behavior"],
            autoResize: true,
          },
        },
      }),
      true);
}
function nf(_0x16657f, _0x3625ae, _0x2ba55b) {
  return { ..._0x16657f, parentId: _0x3625ae, laneId: _0x2ba55b };
}
function rf(_0x5dc722, _0x1ac494, _0x3cf284) {
  var _0x436ed8;
  if (!_0x1ac494) return false;
  let _0x4f9d76 = _0x5dc722.elements[_0x1ac494];
  return (
    (_0x4f9d76 == null ? undefined : _0x4f9d76.type) === M.Container &&
    _0x4f9d76.containerData["kind"] === "swimlane" &&
    ((_0x436ed8 = _0x4f9d76.containerData["swimlane"]) == null
      ? undefined
      : _0x436ed8.lanes["some"]((_0x27e976) => _0x27e976.id === _0x3cf284)) ===
      true
  );
}
function af(_0xff4270, _0x4cc5ed, _0x4f7ec, _0x428fd9) {
  var _0x28af68, _0x5acb14, _0x2b1811;
  if (!_0x4cc5ed) return;
  let _0x38a65d =
    (_0x28af68 = _0xff4270[_0x4cc5ed]) == null ? undefined : _0x28af68.element;
  if (
    _0x4f7ec &&
    (_0x38a65d == null ? undefined : _0x38a65d.type) === M.Container &&
    _0x38a65d.containerData["kind"] === "swimlane" &&
    ((_0x5acb14 = _0x38a65d.containerData["swimlane"]) == null
      ? undefined
      : _0x5acb14.lanes["some"]((_0x42267b) => _0x42267b.id === _0x4f7ec)) ===
      true
  )
    return _0x4f7ec;
  let _0x2ab387 = U(_0xff4270, _0x4cc5ed);
  if (!(
    (_0x38a65d == null ? undefined : _0x38a65d.type) !== M.Container ||
    _0x38a65d.containerData["kind"] !== "swimlane" ||
    !_0x2ab387 ||
    !_0x428fd9
  ))
    return (_0x2b1811 = Ui(_0x38a65d, _0x2ab387, _0x428fd9)) == null
      ? undefined
      : _0x2b1811.lane["id"];
}
function of(_0x41180d, _0x4540d1, _0x1ba4cd, _0x10ca25) {
  let _0x36a4e0 = _0x1ba4cd,
    _0x41bfbe = new Set([_0x10ca25]);
  for (; _0x36a4e0;) {
    var _0x19647d, _0x28913a;
    if (_0x41bfbe.has(_0x36a4e0)) return;
    let _0x5848b4 =
      (_0x19647d = _0x4540d1[_0x36a4e0]) == null
        ? undefined
        : _0x19647d.element;
    if (!_0x5848b4 || _0x5848b4.type !== M.Container) return;
    if (_0x5848b4.visible !== false) return _0x36a4e0;
    (_0x41bfbe.add(_0x36a4e0),
      (_0x36a4e0 =
        (_0x28913a = _0x41180d.elements[_0x36a4e0]) == null
          ? undefined
          : _0x28913a.parentId));
  }
}
function sf(_0x3e2532) {
  return [
    ..._0x3e2532.elementOrder,
    ...Object.keys(_0x3e2532.elements).filter(
      (_0x563dac) => !_0x3e2532.elementOrder["includes"](_0x563dac),
    ),
  ];
}
function cf(_0x17f26e, _0x202f7d) {
  let _0x19fa13 = false;
  return (
    sf(_0x202f7d).forEach((_0x1e20f9) => {
      var _0x33e747, _0x406ea6;
      let _0xdaa6ab = _0x202f7d.elements[_0x1e20f9];
      if (!_0xdaa6ab) return;
      let _0x1f919f = _0xdaa6ab.parentId,
        _0x4238a4 = _0xdaa6ab.laneId,
        _0x3b4967 = Jd(_0x17f26e, _0x202f7d),
        _0x8fe9bf = _0x1f919f
          ? (_0x33e747 = _0x3b4967[_0x1f919f]) == null
            ? undefined
            : _0x33e747.element
          : undefined,
        _0x37cd4f =
          (_0x406ea6 = H(_0x3b4967, _0x1e20f9)) == null
            ? undefined
            : _0x406ea6.worldTransform,
        _0x103065 = U(_0x3b4967, _0x1e20f9);
      _0x1f919f && (!_0x8fe9bf || _0x8fe9bf.type !== M.Container)
        ? (_0x1f919f = undefined)
        : _0x1f919f &&
            (_0x8fe9bf == null ? undefined : _0x8fe9bf.visible) === false
          ? (_0x1f919f = of(
              _0x202f7d,
              _0x3b4967,
              _0x8fe9bf.parentId,
              _0x1e20f9,
            ))
          : _0x1f919f &&
            Wn(_0x3b4967, _0x1e20f9, _0x1f919f) &&
            (_0x1f919f = undefined);
      let _0x5df766 = _0x1f919f !== _0xdaa6ab.parentId;
      if (
        (_0x4238a4 &&
          !rf(_0x202f7d, _0x1f919f, _0x4238a4) &&
          (_0x4238a4 = undefined),
        _0x5df766 &&
          (_0x4238a4 = af(_0x3b4967, _0x1f919f, _0x4238a4, _0x103065)),
        _0x5df766 || _0x4238a4 !== _0xdaa6ab.laneId)
      ) {
        let _0x5e8047 = _0x37cd4f
          ? W(_0x3b4967, { parentId: _0x1f919f, worldTransform: _0x37cd4f })
          : _0xdaa6ab.transform;
        (Xd(_0x202f7d, {
          ...nf(_0xdaa6ab, _0x1f919f, _0x4238a4),
          transform: { ..._0xdaa6ab.transform, ..._0x5e8047 },
        }),
          (_0x19fa13 = true));
      }
    }),
    _0x19fa13
  );
}
function lf(_0x498a51, _0x1bcefe) {
  let _0x41001c = false;
  return (
    sf(_0x1bcefe).forEach((_0x200412) => {
      var _0x27f01f;
      let _0x3839d7 = _0x1bcefe.elements[_0x200412];
      if (!_0x3839d7 || _0x3839d7.type !== M.Connector) return;
      let _0x223b93 = Jd(_0x498a51, _0x1bcefe),
        _0x4c3b0d = oo(_0x223b93, _0x3839d7);
      if (
        _0x4c3b0d.parentId === _0x3839d7.parentId &&
        _0x4c3b0d.laneId === _0x3839d7.laneId
      )
        return;
      let _0x171566 =
        (_0x27f01f = H(_0x223b93, _0x200412)) == null
          ? undefined
          : _0x27f01f.worldTransform;
      _0x171566 &&
        (Xd(_0x1bcefe, {
          ..._0x3839d7,
          parentId: _0x4c3b0d.parentId,
          laneId: _0x4c3b0d.laneId,
          transform: {
            ..._0x3839d7.transform,
            ...W(_0x223b93, {
              parentId: _0x4c3b0d.parentId,
              worldTransform: _0x171566,
            }),
          },
        }),
        (_0x41001c = true));
    }),
    _0x41001c
  );
}
function uf(_0xc05f2b, _0x4f44e5) {
  let _0x312f2c = false,
    _0x56c20a = sf(_0x4f44e5);
  return (
    _0x56c20a.forEach((_0x50cf2d) => {
      let _0x190f06 = _0x4f44e5.elements[_0x50cf2d];
      if (
        !_0x190f06 ||
        _0x190f06.type !== M.Container ||
        !_0x190f06.containerData["behavior"].membershipLocked
      )
        return;
      tf(_0x4f44e5, _0x50cf2d) && (_0x312f2c = true);
      let _0x318182 = Jd(_0xc05f2b, _0x4f44e5),
        _0x4b1c87 = U(_0x318182, _0x50cf2d);
      if (!_0x4b1c87) return;
      let _0x595703 = _0x56c20a.filter((_0x1ea2ac) => {
          var _0xd9bd9f;
          return (
            ((_0xd9bd9f = _0x4f44e5.elements[_0x1ea2ac]) == null
              ? undefined
              : _0xd9bd9f.parentId) === _0x50cf2d
          );
        }),
        _0x57f27e = new Map(
          _0x595703.map((_0x1d142c) => {
            var _0x2e661e;
            return [
              _0x1d142c,
              (_0x2e661e = H(_0x318182, _0x1d142c)) == null
                ? undefined
                : _0x2e661e.worldTransform,
            ];
          }),
        ),
        _0x110ac0 = yi([
          Sc(_0x190f06, _0x4b1c87),
          ..._0x595703
            .filter((_0x5e5dc5) => {
              var _0x210bb4;
              return (
                ((_0x210bb4 = _0x4f44e5.elements[_0x5e5dc5]) == null
                  ? undefined
                  : _0x210bb4.type) !== M.Connector
              );
            })
            .map((_0x26ca77) => U(_0x318182, _0x26ca77))
            .filter((_0x1b60af) => !!_0x1b60af),
        ]);
      if (!_0x110ac0) return;
      let _0x4a2136 = Ec(_0x190f06, _0x4b1c87, _0x110ac0);
      if (
        _0x4a2136.left === _0x4b1c87.left &&
        _0x4a2136.top === _0x4b1c87.top &&
        _0x4a2136.width === _0x4b1c87.width &&
        _0x4a2136.height === _0x4b1c87.height
      )
        return;
      let _0x4d514c = W(Jd(_0xc05f2b, _0x4f44e5), {
        parentId: _0x190f06.parentId,
        worldTransform: { ..._0x190f06.transform, ..._0x4a2136, rotation: 0 },
      });
      (Xd(_0x4f44e5, {
        ..._0x190f06,
        transform: { ..._0x190f06.transform, ..._0x4d514c },
      }),
        (_0x312f2c = true));
      let _0x4fd7a3 = Jd(_0xc05f2b, _0x4f44e5);
      _0x57f27e.forEach((_0x553876, _0x201ea5) => {
        let _0x56b11a = _0x4f44e5.elements[_0x201ea5];
        !_0x56b11a ||
          !_0x553876 ||
          Xd(_0x4f44e5, {
            ..._0x56b11a,
            laneId: af(_0x4fd7a3, _0x50cf2d, _0x56b11a.laneId, Yd(_0x553876)),
            transform: {
              ..._0x56b11a.transform,
              ...W(_0x4fd7a3, {
                parentId: _0x50cf2d,
                worldTransform: _0x553876,
              }),
            },
          });
      });
    }),
    _0x312f2c
  );
}
function df(_0x278489, _0x3a3c38) {
  return Object.fromEntries(
    Object.entries(_0x3a3c38).map(([_0x4f3722, _0x161551]) => {
      let _0x233369 = {
          ..._0x161551,
          elements: { ..._0x161551.elements },
          elementOrder: [..._0x161551.elementOrder],
        },
        _0x444ebd = $d(_0x233369),
        _0x4dc36a = false;
      Object.values(_0x233369.elements).forEach((_0xe1b8d6) => {
        let _0x3b207b = Cn(Pn(Wa(_0xe1b8d6)));
        _0x3b207b !== _0xe1b8d6 &&
          (Xd(_0x233369, _0x3b207b), (_0x4dc36a = true));
      });
      let _0x1e86c6 = Qd(_0x233369),
        _0x11ac01 = ef(_0x233369),
        _0x369491 = cf(_0x278489, _0x233369),
        _0x4b4946 = lf(_0x278489, _0x233369),
        _0xa99d2f = false,
        _0x42da96 = Math.max(1, Object.keys(_0x233369.elements).length);
      for (
        let _0xceb20c = 0;
        _0xceb20c < _0x42da96 && uf(_0x278489, _0x233369);
        _0xceb20c++
      )
        _0xa99d2f = true;
      let _0x221717 = lf(_0x278489, _0x233369);
      return [
        _0x4f3722,
        _0x444ebd ||
        _0x4dc36a ||
        _0x1e86c6 ||
        _0x11ac01 ||
        _0x369491 ||
        _0x4b4946 ||
        _0xa99d2f ||
        _0x221717
          ? _0x233369
          : _0x161551,
      ];
    }),
  );
}
var ff = class extends _0x298904 {
    constructor(_0x1295b8) {
      (super(),
        I(this, "type", _0x9aeb0c.UNIVER_BOARD),
        I(this, "_snapshot", undefined),
        I(this, "_name$", undefined),
        I(this, "_theme$", undefined),
        I(this, "_pageBackgroundChanged$", new _0x1dfed5()),
        I(this, "name$", undefined),
        I(this, "theme$", undefined),
        I(
          this,
          "pageBackgroundChanged$",
          this._pageBackgroundChanged$["asObservable"](),
        ),
        (this._snapshot = _0x381a86.isEmptyObject(_0x1295b8)
          ? qd()
          : this._normalizeSnapshot(_0x1295b8)),
        (this._name$ = new _0x1fdde9(this._snapshot["name"])),
        (this.name$ = this._name$["asObservable"]()),
        (this._theme$ = new _0x1fdde9(this.getThemeData())),
        (this.theme$ = this._theme$["asObservable"]()));
    }
    getUnitId() {
      return this._snapshot["id"];
    }
    setName(_0x2e74bd) {
      ((this._snapshot["name"] = _0x2e74bd), this._name$["next"](_0x2e74bd));
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
    setRev(_0x642f20) {
      this._snapshot["rev"] = _0x642f20;
    }
    dispose() {
      (super.dispose(), this._pageBackgroundChanged$["complete"]());
    }
    getActivePageId() {
      let _0x56ae4a = Vo(this._snapshot);
      if (!_0x56ae4a)
        throw Error("Board snapshot must contain at least one page.");
      return _0x56ae4a;
    }
    getActivePage() {
      let _0x866df = this.getActivePageId(),
        _0x306174 = this.getPage(_0x866df);
      if (!_0x306174)
        throw Error('Board page "' + _0x866df + '" is missing from snapshot.');
      return _0x306174;
    }
    getPage(_0x36af6a) {
      return Bo(this._snapshot, _0x36af6a);
    }
    setPageBackground(_0x1423ee, _0x5aa80f) {
      let _0x3354c4 = this.getPage(_0x1423ee);
      return _0x3354c4
        ? (_0x5aa80f
            ? (_0x3354c4.background = _0x381a86.deepClone(_0x5aa80f))
            : Reflect.deleteProperty(_0x3354c4, "background"),
          this._pageBackgroundChanged$["next"]({
            pageId: _0x1423ee,
            background: _0x3354c4.background
              ? _0x381a86.deepClone(_0x3354c4.background)
              : undefined,
          }),
          true)
        : false;
    }
    getThemeData() {
      return this._snapshot["theme"] ?? Ot;
    }
    setThemeData(_0x24492b) {
      ((this._snapshot["theme"] = _0x24492b), this._theme$["next"](_0x24492b));
    }
    _normalizeSnapshot(_0xe666a6) {
      let _0x234bcf = qd(),
        _0x38f159 = { ..._0xe666a6 };
      Reflect.deleteProperty(_0x38f159, "boardSettings");
      let _0x4f5613 = Lo(_0xe666a6, _0x234bcf.pageOrder),
        _0x4a8dcf = df(
          _0xe666a6.id ?? _0x234bcf.id,
          Ro(_0xe666a6, _0x234bcf.pages),
        ),
        _0x99246a = zo(_0xe666a6, _0x4f5613) ?? _0x234bcf.activePageId;
      return Uo({
        ..._0x234bcf,
        ..._0x38f159,
        id: _0xe666a6.id ?? _0x2928b2(6),
        name: _0xe666a6.name ?? "Untitled Board",
        appVersion: _0xe666a6.appVersion ?? "0.0.1",
        defaultPageSize: _0xe666a6.defaultPageSize ?? _0x234bcf.defaultPageSize,
        pageOrder: _0x4f5613,
        pages: _0x4a8dcf,
        activePageId: _0x99246a,
        theme: _0xe666a6.theme ?? Ot,
      });
    }
  },
  pf = "@univerjs-pro/boards",
  mf = "1.0.0-insiders.20260907-70fc579";
function hf(_0x3b3514, _0x519062) {
  return function (_0x1a1da0, _0x5ce37a) {
    _0x519062(_0x1a1da0, _0x5ce37a, _0x3b3514);
  };
}
function gf(_0x250187, _0x380900, _0x71395c, _0x59e599) {
  var _0x5acf57 = arguments.length,
    _0x4176f6 =
      _0x5acf57 < 3
        ? _0x380900
        : _0x59e599 === null
          ? (_0x59e599 = Object.getOwnPropertyDescriptor(_0x380900, _0x71395c))
          : _0x59e599,
    _0x56c8d0;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x4176f6 = Reflect.decorate(_0x250187, _0x380900, _0x71395c, _0x59e599);
  else {
    for (var _0x1b232b = _0x250187.length - 1; _0x1b232b >= 0; _0x1b232b--)
      (_0x56c8d0 = _0x250187[_0x1b232b]) &&
        (_0x4176f6 =
          (_0x5acf57 < 3
            ? _0x56c8d0(_0x4176f6)
            : _0x5acf57 > 3
              ? _0x56c8d0(_0x380900, _0x71395c, _0x4176f6)
              : _0x56c8d0(_0x380900, _0x71395c)) || _0x4176f6);
  }
  return (
    _0x5acf57 > 3 &&
      _0x4176f6 &&
      Object.defineProperty(_0x380900, _0x71395c, _0x4176f6),
    _0x4176f6
  );
}
let _f = class {
  constructor(_0x207416, _0x1ca331, _0x48765c) {
    ((this._commandService = _0x207416),
      (this._boardElementService = _0x1ca331),
      (this._instanceService = _0x48765c),
      I(this, "hostType", _0x9aeb0c.UNIVER_BOARD));
  }
  get shapeChanged$() {
    return _0x42ba1a(
      this._boardElementService["elementAdd$"],
      this._boardElementService["elementUpdate$"],
      this._boardElementService["elementRemove$"],
    ).pipe(
      _0x4e7db2((_0x184483) => [
        ...new Set(_0x184483.map(({ unitId: _0x2bff3d }) => _0x2bff3d)),
      ]),
      _0x2306c8((_0x49dba9) => ({ unitId: _0x49dba9 })),
    );
  }
  getShape(_0xd8545f) {
    let _0x85484 = this._getElement(_0xd8545f);
    return _0x85484 ? this._toSnapshot(_0xd8545f, _0x85484) : null;
  }
  listShapes(_0x504e02) {
    return this._boardElementService["getElementOrder"](
      _0x504e02.unitId,
      _0x504e02.subUnitId,
    )
      .map((_0x5e960d) => this.getShape({ ..._0x504e02, shapeId: _0x5e960d }))
      .filter((_0x19cba7) => !!_0x19cba7);
  }
  listShapesInUnit(_0x2f62a2) {
    let _0x27d5a9 = this._instanceService["getUnit"](
      _0x2f62a2,
      _0x9aeb0c.UNIVER_BOARD,
    );
    return (
      (_0x27d5a9 == null
        ? undefined
        : _0x27d5a9
            .getSnapshot()
            .pageOrder["flatMap"]((_0x237a51) =>
              this.listShapes({
                hostType: this.hostType,
                unitId: _0x2f62a2,
                subUnitId: _0x237a51,
              }),
            )) ?? []
    );
  }
  createShape(_0x259e71, _0x3f17a7) {
    let _0x1d66be = this._createShapeElement(_0x3f17a7);
    return this._commandService["syncExecuteCommand"](sl.id, {
      unitId: _0x259e71.unitId,
      subUnitId: _0x259e71.subUnitId,
      element: _0x1d66be,
    })
      ? this._toSnapshot({ ..._0x259e71, shapeId: _0x1d66be.id }, _0x1d66be)
      : null;
  }
  createShapes(_0x5d41df, _0x195528) {
    if (_0x195528.length === 0) return null;
    let _0x4a0c08 = _0x195528.map((_0x1681f1) =>
      this._createShapeElement(_0x1681f1),
    );
    return this._commandService["syncExecuteCommand"](al.id, {
      unitId: _0x5d41df.unitId,
      subUnitId: _0x5d41df.subUnitId,
      elements: _0x4a0c08,
    })
      ? _0x4a0c08.map((_0x41e133) =>
          this._toSnapshot({ ..._0x5d41df, shapeId: _0x41e133.id }, _0x41e133),
        )
      : null;
  }
  updateShape(_0x21e104, _0x28a090) {
    let _0x1ca60e = this._getElement(_0x21e104);
    if (!_0x1ca60e) return false;
    let _0x58a085 =
      _0x1ca60e.type === M.Connector
        ? this._updateConnector(_0x21e104, _0x1ca60e, _0x28a090)
        : this._updateBasicShape(_0x1ca60e, _0x28a090);
    return this._commandService["syncExecuteCommand"](uc.id, {
      unitId: _0x21e104.unitId,
      subUnitId: _0x21e104.subUnitId,
      elementId: _0x21e104.shapeId,
      allowInactiveTarget: true,
      element: _0x58a085,
    });
  }
  createFormulaLastValueMutation(_0x494f15, _0x3b453d, _0x48e76e) {
    let _0x1e3329 = this._getElement(_0x494f15);
    if (!_0x1e3329 || _0x1e3329.type !== M.Shape) return null;
    let _0xce84bf = _0x1e3329.shapeData["formulaBinding"];
    if (!_0xce84bf) return null;
    let _0x399ee5 = {
        ..._0x1e3329.shapeData,
        formulaBinding: {
          ..._0xce84bf,
          lastValue: _0x381a86.deepClone(_0x48e76e),
        },
      },
      _0x1ffde5 = { ..._0x1e3329, shapeData: _0x399ee5 };
    return {
      id: $.id,
      params: {
        unitId: _0x494f15.unitId,
        subUnitId: _0x494f15.subUnitId,
        elementId: _0x494f15.shapeId,
        allowInactiveTarget: true,
        element: _0x1ffde5,
        formulaLastValueGuard: _0x3b453d,
      },
    };
  }
  removeShape(_0x4bdf42) {
    return this._commandService["syncExecuteCommand"](Tu.id, {
      unitId: _0x4bdf42.unitId,
      subUnitId: _0x4bdf42.subUnitId,
      elementId: _0x4bdf42.shapeId,
    });
  }
  bringToFront(_0x74e5e8) {
    return this._arrange(_0x74e5e8, "front");
  }
  bringForward(_0x2db344) {
    return this._arrange(_0x2db344, "forward");
  }
  sendBackward(_0x91cc2c) {
    return this._arrange(_0x91cc2c, "backward");
  }
  sendToBack(_0x181f6f) {
    return this._arrange(_0x181f6f, "back");
  }
  setZOrder(_0x46c073, _0x15fcf2) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: _0x46c073.unitId,
      subUnitId: _0x46c073.subUnitId,
      elementIds: [_0x46c073.shapeId],
      zOrder: _0x15fcf2,
    });
  }
  _getElement(_0x2eb31a) {
    var _0x4471e8;
    let _0x3552f7 =
      (_0x4471e8 = this._boardElementService["getElementById"](
        _0x2eb31a.unitId,
        _0x2eb31a.subUnitId,
        _0x2eb31a.shapeId,
      )) == null
        ? undefined
        : _0x4471e8.element;
    return (_0x3552f7 == null ? undefined : _0x3552f7.type) === M.Shape ||
      (_0x3552f7 == null ? undefined : _0x3552f7.type) === M.Connector
      ? _0x3552f7
      : null;
  }
  _toSnapshot(_0x3a0f10, _0x1c37ac) {
    if (_0x1c37ac.type === M.Connector)
      return this._connectorToSnapshot(_0x3a0f10, _0x1c37ac);
    let _0xba3979 = _0x1c37ac.shapeData["shapeType"] ?? _0x3fc086.Rect;
    return {
      ..._0x3a0f10,
      shapeType: _0xba3979,
      shapeData: _0x381a86.deepClone(_0x1c37ac.shapeData),
      name: _0x1c37ac.name,
      description: _0x1c37ac.description,
      visible: _0x1c37ac.visible !== false,
      selectable: _0x1c37ac.selectable !== false,
      transform: vf(_0x1c37ac.transform),
    };
  }
  _connectorToSnapshot(_0x54fb18, _0x2456b8) {
    var _0x591a83, _0x3c0f0a;
    let _0x8408ad = _0x468c44(
        this._getConnectorRoute(_0x54fb18, _0x2456b8),
        yf(_0x2456b8.connectorData["routing"]),
      ),
      _0x58de16 = xf(
        _0x2456b8.connectorData["start"],
        _0x2456b8.connectorData["end"],
      ),
      _0x86791b = Sf(_0x2456b8.connectorData["style"]),
      _0x368b17 = {
        shapeType: _0x8408ad.lineType,
        adjustValues: _0x8408ad.adjustValues,
        stroke: _0x86791b,
        relation: _0x58de16.from || _0x58de16.to ? _0x58de16 : undefined,
        ln: {
          ..._0x86791b,
          startArrow: Cf(
            (_0x591a83 = _0x2456b8.connectorData["style"]) == null
              ? undefined
              : _0x591a83.startMarker,
          ),
          endArrow: Cf(
            (_0x3c0f0a = _0x2456b8.connectorData["style"]) == null
              ? undefined
              : _0x3c0f0a.endMarker,
          ),
        },
      };
    return {
      ..._0x54fb18,
      shapeType: _0x8408ad.lineType,
      shapeData: _0x368b17,
      name: _0x2456b8.name,
      description: _0x2456b8.description,
      visible: _0x2456b8.visible !== false,
      selectable: _0x2456b8.selectable !== false,
      transform: {
        left: _0x8408ad.worldRect["left"],
        top: _0x8408ad.worldRect["top"],
        width: _0x8408ad.worldRect["width"],
        height: _0x8408ad.worldRect["height"],
        rotation: _0x8408ad.rotation,
        flipX: _0x8408ad.worldRect["flipX"] ?? false,
        flipY: _0x8408ad.worldRect["flipY"] ?? false,
      },
    };
  }
  _getConnectorRoute(_0x13e305, _0x36c6d0) {
    var _0x1a1fed, _0x1bbd71;
    let _0x1dc607 = this._getEndpointPoint(
        _0x13e305,
        _0x36c6d0.connectorData["start"],
        true,
        _0x36c6d0.transform,
      ),
      _0x52f8bc = this._getEndpointPoint(
        _0x13e305,
        _0x36c6d0.connectorData["end"],
        false,
        _0x36c6d0.transform,
      ),
      _0x5cf0f2 =
        _0x36c6d0.connectorData["routing"] === "curve"
          ? (_0x1a1fed = _0x36c6d0.connectorData["curveData"]) == null
            ? undefined
            : _0x1a1fed.anchors
          : _0x36c6d0.connectorData["routing"] === "orthogonal"
            ? (((_0x1bbd71 = _0x36c6d0.connectorData["orthogonalData"]) == null
                ? undefined
                : _0x1bbd71.routePoints) ??
              _0x36c6d0.connectorData["waypoints"])
            : _0x36c6d0.connectorData["waypoints"],
      _0x29b134 =
        (_0x5cf0f2 == null
          ? undefined
          : _0x5cf0f2.map(({ x: _0x438250, y: _0x1869f0 }) => ({
              x: _0x438250,
              y: _0x1869f0,
            }))) ?? [];
    if (
      _0x29b134.length > 0 ||
      _0x36c6d0.connectorData["routing"] === "straight"
    )
      return [_0x1dc607, ..._0x29b134, _0x52f8bc];
    let _0x554836 = (_0x1dc607.x + _0x52f8bc.x) / 2;
    return [
      _0x1dc607,
      { x: _0x554836, y: _0x1dc607.y },
      { x: _0x554836, y: _0x52f8bc.y },
      _0x52f8bc,
    ];
  }
  _getEndpointPoint(_0x2a76ac, _0x146b0e, _0x56d961, _0x3c3022) {
    if (_0x146b0e.kind === "free") return { x: _0x146b0e.x, y: _0x146b0e.y };
    if (_0x146b0e.kind === "shapeSite") {
      var _0x59fcfc, _0x41c554;
      if (_0x146b0e.connectionPosition !== undefined && _0x146b0e.fallbackPoint)
        return { ..._0x146b0e.fallbackPoint };
      let _0x1e596c = this.getShape({
          ..._0x2a76ac,
          shapeId: _0x146b0e.shapeId,
        }),
        _0x566f5b =
          (_0x59fcfc = In(
            _0x1e596c == null ? undefined : _0x1e596c.shapeData,
          )) == null
            ? undefined
            : _0x59fcfc.participantEngineShapeType,
        _0x649a86 =
          _0x1e596c && _0x566f5b
            ? {
                ..._0x1e596c,
                shapeType: _0x566f5b,
                shapeData: {
                  ..._0x1e596c.shapeData,
                  shapeType: _0x566f5b,
                  isCustom: false,
                  customGeometry: undefined,
                },
              }
            : _0x1e596c,
        _0x312e46 =
          _0x649a86 &&
          ((_0x41c554 = _0x19c957(_0x649a86, _0x146b0e.connectionSiteId)) ==
          null
            ? undefined
            : _0x41c554.point);
      if (_0x312e46) return _0x312e46;
    }
    if (_0x146b0e.fallbackPoint) return { ..._0x146b0e.fallbackPoint };
    let _0x1b9820 = _0x3c3022.left ?? 0,
      _0x4991fb = _0x3c3022.top ?? 0,
      _0x1486e6 = _0x3c3022.width ?? 1,
      _0x12f30b = _0x3c3022.height ?? 1;
    return _0x56d961
      ? { x: _0x1b9820, y: _0x4991fb + _0x12f30b / 2 }
      : { x: _0x1b9820 + _0x1486e6, y: _0x4991fb + _0x12f30b / 2 };
  }
  _createShapeElement(_0xec37b3) {
    let _0x2be7db = _0xec37b3.shapeType;
    return _0x58ca56(_0x2be7db)
      ? this._createConnector({ ..._0xec37b3, shapeType: _0x2be7db })
      : this._createBasicShape(_0xec37b3);
  }
  _createBasicShape(_0x5c9e13) {
    var _0x3764ab, _0x5c64ff, _0x456846, _0x398cc1;
    let _0x362f9f = ua({
        shapeType: _0x5c9e13.shapeType,
        left:
          ((_0x3764ab = _0x5c9e13.transform) == null
            ? undefined
            : _0x3764ab.left) ?? 0,
        top:
          ((_0x5c64ff = _0x5c9e13.transform) == null
            ? undefined
            : _0x5c64ff.top) ?? 0,
        width:
          (_0x456846 = _0x5c9e13.transform) == null
            ? undefined
            : _0x456846.width,
        height:
          (_0x398cc1 = _0x5c9e13.transform) == null
            ? undefined
            : _0x398cc1.height,
      }),
      _0x52b8a = {
        ..._0x362f9f.shapeData,
        ..._0x381a86.deepClone(_0x5c9e13.shapeData ?? {}),
        shapeType: _0x362f9f.shapeData["shapeType"],
      },
      _0x38a43e = In(_0x362f9f.shapeData),
      _0x2b59ca = Ln(_0x362f9f.shapeData);
    if (_0x38a43e) {
      var _0x5595a4;
      Object.assign(_0x52b8a, {
        sequenceLifeline: {
          ..._0x38a43e,
          ...((_0x5595a4 = _0x5c9e13.shapeData) == null
            ? undefined
            : _0x5595a4.sequenceLifeline),
        },
      });
    }
    if (_0x2b59ca) {
      var _0x55db9d;
      Object.assign(_0x52b8a, {
        sequenceActivation: {
          ..._0x2b59ca,
          ...((_0x55db9d = _0x5c9e13.shapeData) == null
            ? undefined
            : _0x55db9d.sequenceActivation),
        },
      });
    }
    return {
      ..._0x362f9f,
      name: _0x5c9e13.name,
      description: _0x5c9e13.description,
      visible: _0x5c9e13.visible ?? true,
      selectable: _0x5c9e13.selectable ?? true,
      transform: { ..._0x362f9f.transform, ..._0x5c9e13.transform },
      shapeData: _0x52b8a,
    };
  }
  _createConnector(_0x488d4c) {
    var _0x4be7c9,
      _0x27b746,
      _0x4852d6,
      _0x536bf1,
      _0x2f12ea,
      _0xaf4a91,
      _0x3f09c7,
      _0x4bfa0b,
      _0x1e4750;
    let _0x5ede99 = {
        left:
          ((_0x4be7c9 = _0x488d4c.transform) == null
            ? undefined
            : _0x4be7c9.left) ?? 0,
        top:
          ((_0x27b746 = _0x488d4c.transform) == null
            ? undefined
            : _0x27b746.top) ?? 0,
        width:
          ((_0x4852d6 = _0x488d4c.transform) == null
            ? undefined
            : _0x4852d6.width) ?? Zi.shapeWidth,
        height:
          ((_0x536bf1 = _0x488d4c.transform) == null
            ? undefined
            : _0x536bf1.height) ?? Zi.shapeHeight,
        rotation:
          ((_0x2f12ea = _0x488d4c.transform) == null
            ? undefined
            : _0x2f12ea.rotation) ?? 0,
        flipX:
          ((_0xaf4a91 = _0x488d4c.transform) == null
            ? undefined
            : _0xaf4a91.flipX) ?? false,
        flipY:
          ((_0x3f09c7 = _0x488d4c.transform) == null
            ? undefined
            : _0x3f09c7.flipY) ?? false,
      },
      _0x1c03fc = {
        ..._0x381a86.deepClone(_0x488d4c.shapeData ?? {}),
        shapeType: _0x488d4c.shapeType,
      },
      _0x3f4814 = {
        hostType: this.hostType,
        unitId: "",
        subUnitId: "",
        shapeId: _0x2928b2(6),
        shapeType: _0x488d4c.shapeType,
        shapeData: _0x1c03fc,
        name: _0x488d4c.name,
        description: _0x488d4c.description,
        visible: _0x488d4c.visible ?? true,
        selectable: _0x488d4c.selectable ?? true,
        transform: _0x5ede99,
      },
      _0x175eb5 = _0x31d55f(_0x3f4814),
      _0x222c4b = _0x175eb5[0] ?? { x: _0x5ede99.left, y: _0x5ede99.top },
      _0x251d68 = _0x175eb5[_0x175eb5.length - 1] ?? {
        x: _0x5ede99.left + _0x5ede99.width,
        y: _0x5ede99.top + _0x5ede99.height,
      },
      _0x1f201c = Of(
        (_0x4bfa0b = _0x1c03fc.relation) == null ? undefined : _0x4bfa0b.from,
        _0x222c4b,
      ),
      _0x1465a6 = Of(
        (_0x1e4750 = _0x1c03fc.relation) == null ? undefined : _0x1e4750.to,
        _0x251d68,
      ),
      _0x46601f = _0x175eb5.slice(1, -1).map(Af),
      _0x494de2 = bf(_0x488d4c.shapeType);
    return {
      ...la({
        id: _0x3f4814.shapeId,
        start: _0x1f201c,
        end: _0x1465a6,
        routing: _0x494de2,
        routingMode: _0x46601f.length > 0 ? "manual" : "auto",
        waypoints: _0x46601f,
        orthogonalData:
          _0x494de2 === "orthogonal" ? { routePoints: _0x46601f } : undefined,
        style: Tf(_0x1c03fc, undefined),
      }),
      name: _0x488d4c.name,
      description: _0x488d4c.description,
      visible: _0x488d4c.visible ?? true,
      selectable: _0x488d4c.selectable ?? true,
    };
  }
  _updateBasicShape(_0xd9a053, _0x33b5da) {
    let _0x29b51b = _0x381a86.deepClone(
      _0x33b5da.shapeData ?? _0xd9a053.shapeData,
    );
    return {
      ..._0xd9a053,
      name: "name" in _0x33b5da ? _0x33b5da.name : _0xd9a053.name,
      description:
        "description" in _0x33b5da
          ? _0x33b5da.description
          : _0xd9a053.description,
      visible: _0x33b5da.visible ?? _0xd9a053.visible,
      selectable: _0x33b5da.selectable ?? _0xd9a053.selectable,
      transform: { ..._0xd9a053.transform, ..._0x33b5da.transform },
      shapeData: {
        ..._0x29b51b,
        shapeType:
          _0x33b5da.shapeType ??
          _0x29b51b.shapeType ??
          _0xd9a053.shapeData["shapeType"],
      },
    };
  }
  _updateConnector(_0x7c2387, _0x48b143, _0x2fd6b0) {
    var _0x2d7152, _0x2660b2;
    let _0x46fb52 = this._connectorToSnapshot(_0x7c2387, _0x48b143),
      _0x23e665 = _0x381a86.deepClone(
        _0x2fd6b0.shapeData ?? _0x46fb52.shapeData,
      ),
      _0x2f5d28 =
        _0x2fd6b0.shapeType ?? _0x23e665.shapeType ?? _0x46fb52.shapeType,
      _0x3ac919 = {
        ..._0x46fb52,
        shapeType: _0x2f5d28,
        shapeData: { ..._0x23e665, shapeType: _0x2f5d28 },
        transform: { ..._0x46fb52.transform, ..._0x2fd6b0.transform },
      },
      _0x30d0a0 = _0x31d55f(_0x3ac919),
      _0x4c281a =
        _0x30d0a0[0] ??
        this._getEndpointPoint(
          _0x7c2387,
          _0x48b143.connectorData["start"],
          true,
          _0x48b143.transform,
        ),
      _0x367fbd =
        _0x30d0a0[_0x30d0a0.length - 1] ??
        this._getEndpointPoint(
          _0x7c2387,
          _0x48b143.connectorData["end"],
          false,
          _0x48b143.transform,
        ),
      _0x39641b = _0x46fb52.shapeData["relation"],
      _0x895c11 = kf(
        _0x48b143.connectorData["start"],
        _0x39641b == null ? undefined : _0x39641b.from,
        (_0x2d7152 = _0x23e665.relation) == null ? undefined : _0x2d7152.from,
        _0x4c281a,
      ),
      _0x4e2419 = kf(
        _0x48b143.connectorData["end"],
        _0x39641b == null ? undefined : _0x39641b.to,
        (_0x2660b2 = _0x23e665.relation) == null ? undefined : _0x2660b2.to,
        _0x367fbd,
      ),
      _0x2fc73a = bf(_0x2f5d28),
      _0x5e3145 = _0x30d0a0.slice(1, -1).map(Af),
      _0x16fdd3 = {
        ..._0x48b143.connectorData,
        start: _0x895c11,
        end: _0x4e2419,
        routing: _0x2fc73a,
        routingMode: _0x5e3145.length > 0 ? "manual" : "auto",
        waypoints: _0x5e3145,
        style: Tf(_0x23e665, _0x48b143.connectorData["style"]),
      };
    return (
      _0x2fc73a === "orthogonal"
        ? (_0x16fdd3.orthogonalData = { routePoints: _0x5e3145 })
        : delete _0x16fdd3.orthogonalData,
      _0x2fc73a !== "curve" && delete _0x16fdd3.curveData,
      {
        ..._0x48b143,
        name: "name" in _0x2fd6b0 ? _0x2fd6b0.name : _0x48b143.name,
        description:
          "description" in _0x2fd6b0
            ? _0x2fd6b0.description
            : _0x48b143.description,
        visible: _0x2fd6b0.visible ?? _0x48b143.visible,
        selectable: _0x2fd6b0.selectable ?? _0x48b143.selectable,
        transform: { ..._0x48b143.transform, ..._0x3ac919.transform },
        connectorData: _0x16fdd3,
      }
    );
  }
  _arrange(_0x56fe60, _0xfc16fd) {
    return this._commandService["syncExecuteCommand"](Iu.id, {
      unitId: _0x56fe60.unitId,
      subUnitId: _0x56fe60.subUnitId,
      elementIds: [_0x56fe60.shapeId],
      placement: _0xfc16fd,
    });
  }
};
_f = gf([hf(0, _0x3243d1), hf(1, L), hf(2, _0x5c9e00)], _f);
function vf(_0x5ca30c) {
  return {
    left: _0x5ca30c.left ?? 0,
    top: _0x5ca30c.top ?? 0,
    width: _0x5ca30c.width ?? Zi.shapeWidth,
    height: _0x5ca30c.height ?? Zi.shapeHeight,
    rotation: _0x5ca30c.rotation ?? 0,
    flipX: _0x5ca30c.flipX ?? false,
    flipY: _0x5ca30c.flipY ?? false,
  };
}
function yf(_0xd28d33) {
  return _0xd28d33 === "straight"
    ? _0x3fc086.StraightConnector1
    : _0xd28d33 === "curve"
      ? _0x3fc086.CurvedConnector3
      : _0x3fc086.BentConnector3;
}
function bf(_0x57512d) {
  return _0x57512d === _0x3fc086.Line ||
    _0x57512d === _0x3fc086.StraightConnector1
    ? "straight"
    : _0x59b554(_0x57512d)
      ? "curve"
      : "orthogonal";
}
function xf(_0x136ed4, _0x8d585d) {
  return {
    from:
      _0x136ed4.kind === "shapeSite"
        ? { shapeId: _0x136ed4.shapeId, cxnIndex: _0x136ed4.connectionSiteId }
        : undefined,
    to:
      _0x8d585d.kind === "shapeSite"
        ? { shapeId: _0x8d585d.shapeId, cxnIndex: _0x8d585d.connectionSiteId }
        : undefined,
  };
}
function Sf(_0x267e1a) {
  return {
    color: _0x267e1a == null ? undefined : _0x267e1a.stroke,
    width: _0x267e1a == null ? undefined : _0x267e1a.strokeWidth,
    opacity: _0x267e1a == null ? undefined : _0x267e1a.opacity,
    dashType:
      !(_0x267e1a != null && _0x267e1a.dash) || _0x267e1a.dash["length"] === 0
        ? _0x428527.Solid
        : _0x428527.Dash,
  };
}
function Cf(_0x9c8a04) {
  if (!(!_0x9c8a04 || _0x9c8a04.type === "none"))
    return {
      type:
        _0x9c8a04.type === "openArrow"
          ? _0x542383.OpenArrow
          : _0x9c8a04.type === "openDiamond" ||
              _0x9c8a04.type === "filledDiamond"
            ? _0x542383.DiamondArrow
            : _0x9c8a04.type === "openCircle" ||
                _0x9c8a04.type === "filledCircle"
              ? _0x542383.OvalArrow
              : _0x542383.Arrow,
      size: wf(_0x9c8a04.size),
    };
}
function wf(_0x2cc681) {
  if (_0x2cc681 === "sm") return _0x33b335.Small;
  if (_0x2cc681 === "lg") return _0x33b335.Large;
  if (_0x2cc681 === "md") return _0x33b335.Medium;
}
function Tf(_0x2dce94, _0x6e5e8b) {
  var _0xef361f, _0x3b8f1a;
  let _0x5b60ec = _0x2dce94.stroke ?? _0x2dce94.ln ?? {};
  return {
    ..._0x6e5e8b,
    stroke: _0x5b60ec.color,
    strokeWidth: _0x5b60ec.width,
    opacity: _0x5b60ec.opacity,
    dash:
      _0x5b60ec.dashType === _0x428527.Solid
        ? []
        : _0x5b60ec.dashType === undefined
          ? _0x6e5e8b == null
            ? undefined
            : _0x6e5e8b.dash
          : [8, 4],
    startMarker: Ef(
      (_0xef361f = _0x2dce94.ln) == null ? undefined : _0xef361f.startArrow,
      _0x6e5e8b == null ? undefined : _0x6e5e8b.startMarker,
    ),
    endMarker: Ef(
      (_0x3b8f1a = _0x2dce94.ln) == null ? undefined : _0x3b8f1a.endArrow,
      _0x6e5e8b == null ? undefined : _0x6e5e8b.endMarker,
    ),
  };
}
function Ef(_0x100539, _0xdda716) {
  let _0x58ddac = Cf(_0xdda716);
  if (
    (_0x100539 == null ? undefined : _0x100539.type) ===
      (_0x58ddac == null ? undefined : _0x58ddac.type) &&
    (_0x100539 == null ? undefined : _0x100539.size) ===
      (_0x58ddac == null ? undefined : _0x58ddac.size)
  )
    return _0xdda716;
  if ((_0x100539 == null ? undefined : _0x100539.type) !== undefined)
    return {
      type:
        _0x100539.type === _0x542383.None
          ? "none"
          : _0x100539.type === _0x542383.OpenArrow
            ? "openArrow"
            : _0x100539.type === _0x542383.DiamondArrow
              ? "filledDiamond"
              : _0x100539.type === _0x542383.OvalArrow
                ? "filledCircle"
                : "filledArrow",
      size: Df(_0x100539.size),
    };
}
function Df(_0x28b2d5) {
  if (_0x28b2d5 === _0x33b335.Small) return "sm";
  if (_0x28b2d5 === _0x33b335.Large) return "lg";
  if (_0x28b2d5 === _0x33b335.Medium) return "md";
}
function Of(_0x7ecc6, _0x20da4f) {
  return _0x7ecc6
    ? {
        kind: "shapeSite",
        shapeId: _0x7ecc6.shapeId,
        connectionSiteId: _0x7ecc6.cxnIndex,
        fallbackPoint: { ..._0x20da4f },
      }
    : { kind: "free", ..._0x20da4f };
}
function kf(_0x481b43, _0x33af81, _0x110005, _0xe0c210) {
  let _0x2c669f =
      (_0x33af81 == null ? undefined : _0x33af81.shapeId) ===
        (_0x110005 == null ? undefined : _0x110005.shapeId) &&
      (_0x33af81 == null ? undefined : _0x33af81.cxnIndex) ===
        (_0x110005 == null ? undefined : _0x110005.cxnIndex),
    _0x32b24e = _0x481b43.kind === "free" ? _0x481b43 : _0x481b43.fallbackPoint;
  return _0x2c669f &&
    (_0x32b24e == null ? undefined : _0x32b24e.x) === _0xe0c210.x &&
    _0x32b24e.y === _0xe0c210.y
    ? _0x481b43
    : Of(_0x110005, _0xe0c210);
}
function Af(_0xe9cee2, _0x489626) {
  return {
    id: "shape-api-" + _0x489626,
    kind: "manual",
    x: _0xe9cee2.x,
    y: _0xe9cee2.y,
  };
}
const jf = _0x127a62("board.line-adapter.service");
var Mf = class {
  constructor() {
    I(this, "_adapters", []);
  }
  registerAdapter(_0x182e6e) {
    return (
      this._adapters["push"](_0x182e6e),
      _0x4c56f0(() => {
        let _0xef94ef = this._adapters["indexOf"](_0x182e6e);
        _0xef94ef >= 0 && this._adapters["splice"](_0xef94ef, 1);
      })
    );
  }
  beginLineMode(_0x1cea48) {
    for (let _0x990315 of this._adapters)
      if (_0x990315.beginLineMode(_0x1cea48)) return true;
    return false;
  }
};
const Nf = {
    id: "board.operation.begin-line",
    type: _0x3c65b3.OPERATION,
    handler: (_0x414aa4, _0xec0397) =>
      _0xec0397 ? _0x414aa4.get(jf).beginLineMode(_0xec0397) : false,
  },
  Pf = {};
let Ff = class extends _0x111741 {
  constructor(_0x21f404, _0x349109) {
    (super(),
      (this._instanceSrv = _0x21f404),
      (this._boardElementService = _0x349109),
      this._initUnitListener());
  }
  _initUnitListener() {
    (this._instanceSrv["getAllUnitsForType"](_0x9aeb0c.UNIVER_BOARD).forEach(
      (_0x14ce6e) => this._loadUnit(_0x14ce6e),
    ),
      this.disposeWithMe(
        this._instanceSrv["getTypeOfUnitAdded$"](
          _0x9aeb0c.UNIVER_BOARD,
        ).subscribe((_0x216f19) => this._loadUnit(_0x216f19.unit)),
      ),
      this.disposeWithMe(
        this._instanceSrv["getTypeOfUnitDisposed$"](
          _0x9aeb0c.UNIVER_BOARD,
        ).subscribe((_0x2ef315) => {
          this._boardElementService["removeElementDataForUnit"](
            _0x2ef315.getUnitId(),
          );
        }),
      ));
  }
  _loadUnit(_0x49f5a6) {
    let _0xc08519 = _0x49f5a6.getUnitId(),
      _0x15ee53 = _0x49f5a6.getActivePage(),
      _0x46584e = {},
      _0x295e31 = _0x15ee53.id;
    ((_0x46584e[_0x295e31] = Jt(
      _0xc08519,
      _0x295e31,
      _0x15ee53.elements,
      _0x15ee53.elementOrder,
      _0x49f5a6.getThemeData(),
    )),
      this._boardElementService["registerElementData"](_0xc08519, _0x46584e),
      this._boardElementService["initializeElementNotification"](_0xc08519));
  }
};
Ff = gf([hf(0, _0x5c9e00), hf(1, L)], Ff);
const If = new Set([lc.id, Wr.id, Ns.id]);
let Lf = class extends _0x111741 {
  constructor(_0x401610, _0x4e0a7a, _0x34d6cb) {
    (super(),
      (this._commandService = _0x401610),
      (this._permissionService = _0x4e0a7a),
      (this._univerInstanceService = _0x34d6cb),
      this._univerInstanceService["getAllUnitsForType"](
        _0x9aeb0c.UNIVER_BOARD,
      ).forEach((_0x40ab22) =>
        this._registerUnitPermissionPoints(_0x40ab22.getUnitId()),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getTypeOfUnitAdded$"](
          _0x9aeb0c.UNIVER_BOARD,
        ).subscribe(({ unit: _0x1993d3 }) =>
          this._registerUnitPermissionPoints(_0x1993d3.getUnitId()),
        ),
      ),
      this.disposeWithMe(
        this._commandService["beforeCommandExecuted"]((_0x1537d0, _0x273e0d) =>
          this._check(_0x1537d0, _0x273e0d),
        ),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getTypeOfUnitDisposed$"](
          _0x9aeb0c.UNIVER_BOARD,
        ).subscribe((_0x1679ee) =>
          sc(this._permissionService, _0x1679ee.getUnitId()),
        ),
      ));
  }
  _registerUnitPermissionPoints(_0x581133) {
    ec.forEach((_0xc58207) => {
      let _0x3cb0b2 = ic(_0x581133, _0x581133, _0xc58207);
      this._permissionService["getPermissionPoint"](_0x3cb0b2.id) ||
        this._permissionService["addPermissionPoint"](_0x3cb0b2);
    });
  }
  _check(_0x5480a9, _0x448cae) {
    var _0x1c7752, _0x448ee1;
    if (
      (_0x448cae != null && _0x448cae.fromCollab) ||
      (_0x448cae != null && _0x448cae.fromChangeset)
    )
      return;
    let _0x1062a3 = qf(_0x5480a9.params) ? _0x5480a9.params : undefined;
    if (
      _0x5480a9.id === "board.mutation.update-element" &&
      _0x1062a3 != null &&
      _0x1062a3.formulaLastValueGuard
    )
      return;
    let _0x4ac58e = zf(_0x5480a9.id, _0x1062a3),
      _0x42df35 =
        Rf(_0x1062a3 == null ? undefined : _0x1062a3.unitId, _0x448cae) ??
        (_0x4ac58e
          ? (_0x1c7752 = this._univerInstanceService["getCurrentUnitOfType"](
              _0x9aeb0c.UNIVER_BOARD,
            )) == null
            ? undefined
            : _0x1c7752.getUnitId()
          : undefined);
    if (
      !_0x42df35 ||
      this._univerInstanceService["getUnitType"](_0x42df35) !==
        _0x9aeb0c.UNIVER_BOARD
    )
      return;
    if (_0x4ac58e) {
      if (!ac(this._permissionService, _0x42df35, _0x42df35, _0x4ac58e))
        throw new _0x1e22e9(
          "Board " + _0xd04b56[_0x4ac58e] + " permission denied.",
        );
      if (
        Bf(_0x5480a9.id, _0x1062a3) &&
        !ac(this._permissionService, _0x42df35, _0x42df35, _0xd04b56.Edit)
      )
        throw new _0x1e22e9("Board Edit permission denied.");
      return;
    }
    if (!Vf(_0x5480a9.id)) return;
    let _0x424d92 = this._univerInstanceService["getUnit"](
      _0x42df35,
      _0x9aeb0c.UNIVER_BOARD,
    );
    if (!_0x424d92) return;
    let _0x225b43 =
        typeof (_0x1062a3 == null ? undefined : _0x1062a3.subUnitId) == "string"
          ? _0x1062a3.subUnitId
          : _0x424d92.getActivePageId(),
      _0x51ed56 =
        ((_0x448ee1 = _0x424d92.getSnapshot().pages[_0x225b43]) == null
          ? undefined
          : _0x448ee1.elements) ?? {},
      _0xe63198 = new Set(Hf(_0x1062a3)),
      _0x1f0574 = Uf(_0x1062a3);
    _0x1f0574.size &&
      Object.values(_0x51ed56).forEach((_0x211d58) => {
        if (!qf(_0x211d58) || typeof _0x211d58.id != "string") return;
        let _0x462228 = _0x211d58;
        (_0x1f0574.has(String(_0x462228.chartId ?? "")) ||
          _0x1f0574.has(String(_0x462228.tableId ?? ""))) &&
          _0xe63198.add(_0x462228.id);
      });
    let _0x5cf7b9 = [...Wf(_0x51ed56, _0xe63198)].map((_0x57f5af) =>
      rc(_0x225b43, _0x57f5af),
    );
    if (!cc(this._permissionService, _0x42df35, _0x5cf7b9))
      throw new _0x1e22e9("Board edit permission denied.");
  }
};
Lf = gf([hf(0, _0x3243d1), hf(1, _0x515515), hf(2, _0x5c9e00)], Lf);
function Rf(_0x382611, _0xa2006) {
  return typeof _0x382611 == "string"
    ? _0x382611
    : typeof (_0xa2006 == null ? undefined : _0xa2006.unitId) == "string"
      ? _0xa2006.unitId
      : undefined;
}
function zf(_0x475a6e, _0x352df8) {
  if (
    _0x475a6e === "board.operation.copy-selection" ||
    _0x475a6e === "board.operation.cut-selection" ||
    _0x475a6e === "board.operation.mind-map.copy-node" ||
    (_0x475a6e === "board.operation.clipboard-shortcut" &&
      typeof (_0x352df8 == null ? undefined : _0x352df8.action) == "string" &&
      ["copy", "copyAsImage", "copyStyle", "cut", "makeCopy"].includes(
        _0x352df8.action,
      ))
  )
    return _0xd04b56.Copy;
  if (_0x475a6e === "boards-print.operation.print") return _0xd04b56.Print;
  if (
    _0x475a6e === "boards-print.operation.export-image" ||
    _0x475a6e === "boards-exchange-client.operation.export-board" ||
    _0x475a6e === "board.operation.mind-map.export-opml"
  )
    return _0xd04b56.Export;
  if (
    _0x475a6e.startsWith("thread-comment.command.") ||
    _0x475a6e.startsWith("thread-comment.mutation.") ||
    _0x475a6e === "board.operation.start-comment-placement" ||
    _0x475a6e === "board.operation.add-element-comment"
  )
    return _0xd04b56.Comment;
}
function Bf(_0x518c49, _0x1c69c6) {
  return (
    _0x518c49 === "board.operation.cut-selection" ||
    (_0x518c49 === "board.operation.clipboard-shortcut" &&
      ((_0x1c69c6 == null ? undefined : _0x1c69c6.action) === "cut" ||
        (_0x1c69c6 == null ? undefined : _0x1c69c6.action) === "makeCopy"))
  );
}
function Vf(_0x4d6376) {
  return If.has(_0x4d6376) || _0x4d6376.startsWith("board.operation.begin-")
    ? false
    : _0x4d6376.startsWith("board.command.") ||
        _0x4d6376.startsWith("board.mutation.") ||
        _0x4d6376.startsWith("board.operation.");
}
function Hf(_0x391826, _0x2af7f0 = "") {
  let _0x4b693b = new Set();
  return (Kf(_0x391826, _0x2af7f0, _0x4b693b), [..._0x4b693b]);
}
function Uf(_0x52995c, _0x299e36 = "", _0x286fb7 = new Set()) {
  return qf(_0x52995c)
    ? Array.isArray(_0x52995c)
      ? (_0x52995c.forEach((_0xf4eafb) => Uf(_0xf4eafb, _0x299e36, _0x286fb7)),
        _0x286fb7)
      : (Object.entries(_0x52995c).forEach(([_0x3d51ae, _0x51ac91]) => {
          ((_0x3d51ae === "chartId" || _0x3d51ae === "tableId") &&
            typeof _0x51ac91 == "string" &&
            _0x286fb7.add(_0x51ac91),
            _0x3d51ae === "id" &&
              (_0x299e36 === "chart" || _0x299e36 === "table") &&
              typeof _0x51ac91 == "string" &&
              _0x286fb7.add(_0x51ac91),
            Uf(_0x51ac91, _0x3d51ae, _0x286fb7));
        }),
        _0x286fb7)
    : _0x286fb7;
}
function Wf(_0x18f440, _0x11efd9) {
  let _0x476646 = new Set(_0x11efd9),
    _0x249273 = Object.values(_0x18f440)
      .filter(qf)
      .filter((_0x52a05c) => typeof _0x52a05c.id == "string"),
    _0x14d0f7 = (_0xf975b7) => {
      let _0x40a449 = _0x18f440[_0xf975b7];
      !_0x40a449 ||
        typeof _0x40a449 != "object" ||
        Gf(
          _0x40a449,
          /^(parentId|groupId|parentNodeId|structureScopeId)$/i,
        ).forEach((_0x53814b) => {
          _0x476646.has(_0x53814b) ||
            !_0x18f440[_0x53814b] ||
            (_0x476646.add(_0x53814b), _0x14d0f7(_0x53814b));
        });
    };
  _0x11efd9.forEach(_0x14d0f7);
  let _0x43073b = new Set(_0x11efd9),
    _0x505f00 = true;
  for (; _0x505f00;)
    ((_0x505f00 = false),
      _0x249273.forEach((_0x446f88) => {
        _0x43073b.has(_0x446f88.id) ||
          (Gf(
            _0x446f88,
            /(?:parent|group|child|owner|root|start|end|from|to|bound|structureScope).*(?:Id|Ids)$/i,
          ).some((_0x17ae04) => _0x43073b.has(_0x17ae04)) &&
            (_0x43073b.add(_0x446f88.id),
            _0x476646.add(_0x446f88.id),
            (_0x505f00 = true)));
      }));
  return _0x476646;
}
function Gf(_0x509036, _0x386b57, _0x5992df = "", _0x54fb24 = new Set()) {
  return typeof _0x509036 == "string"
    ? (_0x386b57.test(_0x5992df) && _0x54fb24.add(_0x509036), [..._0x54fb24])
    : Array.isArray(_0x509036)
      ? (_0x386b57.test(_0x5992df)
          ? _0x509036.forEach((_0xd08f46) => {
              typeof _0xd08f46 == "string" && _0x54fb24.add(_0xd08f46);
            })
          : _0x509036.forEach((_0x5ecf9f) =>
              Gf(_0x5ecf9f, _0x386b57, _0x5992df, _0x54fb24),
            ),
        [..._0x54fb24])
      : (qf(_0x509036) &&
          Object.entries(_0x509036).forEach(([_0x54bff7, _0x5a432d]) =>
            Gf(_0x5a432d, _0x386b57, _0x54bff7, _0x54fb24),
          ),
        [..._0x54fb24]);
}
function Kf(_0x1191af, _0x4b7df2, _0x46b3da) {
  if (typeof _0x1191af == "string") {
    /^(elementId|drawingId|connectorId|containerId|swimlaneId|[a-z]*nodeId)$/i.test(
      _0x4b7df2,
    ) && _0x46b3da.add(_0x1191af);
    return;
  }
  if (Array.isArray(_0x1191af)) {
    /^(element|drawing|connector|container|swimlane|[a-z]*node)Ids$/i.test(
      _0x4b7df2,
    )
      ? _0x1191af.forEach((_0x3c7f6c) => {
          typeof _0x3c7f6c == "string" && _0x46b3da.add(_0x3c7f6c);
        })
      : _0x1191af.forEach((_0x82df32) => Kf(_0x82df32, _0x4b7df2, _0x46b3da));
    return;
  }
  qf(_0x1191af) &&
    Object.entries(_0x1191af).forEach(([_0x4e1c89, _0x4dfccf]) => {
      _0x4e1c89 === "id" &&
      (_0x4b7df2 === "element" || _0x4b7df2 === "elements")
        ? typeof _0x4dfccf == "string" && _0x46b3da.add(_0x4dfccf)
        : Kf(_0x4dfccf, _0x4e1c89, _0x46b3da);
    });
}
function qf(_0x1d6580) {
  return (
    typeof _0x1d6580 == "object" && !!_0x1d6580 && !Array.isArray(_0x1d6580)
  );
}
let Jf = class extends _0x111741 {
  constructor(_0xf22096, _0x44eb1c) {
    (super(), this.disposeWithMe(_0xf22096.register(_0x44eb1c)));
  }
};
Jf = gf([hf(0, _0x19d180(_0x2dfcd0)), hf(1, _0x19d180(_f))], Jf);
const Yf = _0x127a62("board.resource.service");
let Xf = class {
  constructor(_0x3506de) {
    this._univerInstanceService = _0x3506de;
  }
  getBoard(_0x50cce7) {
    return (
      this._univerInstanceService["getUnit"](
        _0x50cce7,
        _0x9aeb0c.UNIVER_BOARD,
      ) ?? null
    );
  }
  getAllBoards() {
    return this._univerInstanceService["getAllUnitsForType"](
      _0x9aeb0c.UNIVER_BOARD,
    );
  }
  createBoard(_0x4f696f) {
    return this._univerInstanceService["createUnit"](
      _0x9aeb0c.UNIVER_BOARD,
      _0x4f696f,
    );
  }
};
Xf = gf([hf(0, _0x5c9e00)], Xf);
let Zf = class extends _0xd8040 {
  constructor(_0x598d00 = Pf, _0x327dce, _0x554496, _0x5bc67f, _0x4f73d2) {
    (super(),
      (this._config = _0x598d00),
      (this._injector = _0x327dce),
      (this._commandService = _0x554496),
      (this._configService = _0x5bc67f),
      (this._univerInstanceService = _0x4f73d2));
    let { ..._0x1736f0 } = _0x2e90a9({}, Pf, this._config);
    this._configService["setConfig"]("boards.config", _0x1736f0);
  }
  onStarting() {
    (this._univerInstanceService["registerCtorForType"](
      _0x9aeb0c.UNIVER_BOARD,
      ff,
    ),
      [
        [Yf, { useClass: Xf }],
        [L, { useClass: sn }],
        [cl, { useClass: ll }],
        [hs, { useClass: gs }],
        [Gr, { useClass: Kr }],
        [jf, { useClass: Mf }],
        [_l, { useClass: vl }],
        [bl, { useClass: xl }],
        [Cl, { useClass: wl }],
        [ml, { useClass: hl }],
        [dl, { useClass: fl }],
        [Dl, { useClass: Ol }],
        [Ff],
        [_f],
        [Jf],
        [Lf],
      ].forEach((_0x27c98d) => this._injector["add"](_0x27c98d)),
      [
        Ss,
        $,
        ws,
        dc,
        fc,
        Us,
        Gs,
        sl,
        al,
        ul,
        pl,
        gl,
        Nf,
        yl,
        Sl,
        Tl,
        El,
        kl,
        ql,
        wu,
        Cu,
        Zl,
        Nc,
        Wr,
        qr,
        Qo,
        Ns,
        ms,
        Ms,
        Vs,
        Hs,
        Ws,
        lc,
        qs,
        uc,
        ps,
        Gd,
        sd,
        _d,
        Cd,
        Ad,
        Td,
        ad,
        Uu,
        Iu,
        Tu,
        ks,
        Nu,
        Pd,
      ].forEach((_0x75002d) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x75002d)),
      ),
      this._injector["get"](Ff),
      this._injector["get"](Jf),
      this._injector["get"](Lf));
  }
};
(I(Zf, "pluginName", "UNIVER_BOARDS_PLUGIN"),
  I(Zf, "packageName", pf),
  I(Zf, "version", mf),
  I(Zf, "type", _0x9aeb0c.UNIVER_BOARD),
  (Zf = gf(
    [
      _0x2ded08(_0x5892ae, _0x2ab03d),
      hf(1, _0x19d180(_0x249853)),
      hf(2, _0x3243d1),
      hf(3, _0x168962),
      hf(4, _0x5c9e00),
    ],
    Zf,
  )));
function Qf(_0x1162b9, _0x169a89) {
  var _0x475349, _0x14924f, _0x5e92ca, _0xf877de, _0x392b02, _0x5a96b0;
  let _0xbd97f7 = _0x381a86.deepClone(_0x169a89),
    _0x2e003e =
      _0x1162b9 != null &&
      (_0x475349 = _0x1162b9.documentStyle) != null &&
      _0x475349.textStyle
        ? _0x381a86.deepClone(_0x1162b9.documentStyle["textStyle"])
        : undefined,
    _0x184249 =
      (_0x14924f = _0xbd97f7.documentStyle) == null
        ? undefined
        : _0x14924f.textStyle;
  return (
    (_0xbd97f7.documentStyle = {
      ...(_0x1162b9 == null ? undefined : _0x1162b9.documentStyle),
      ..._0xbd97f7.documentStyle,
      ...(_0x2e003e || _0x184249
        ? { textStyle: { ..._0x2e003e, ..._0x184249 } }
        : null),
      pageSize: {
        ...(_0x1162b9 == null || (_0x5e92ca = _0x1162b9.documentStyle) == null
          ? undefined
          : _0x5e92ca.pageSize),
        ...((_0xf877de = _0xbd97f7.documentStyle) == null
          ? undefined
          : _0xf877de.pageSize),
      },
      renderConfig: {
        ...(_0x1162b9 == null || (_0x392b02 = _0x1162b9.documentStyle) == null
          ? undefined
          : _0x392b02.renderConfig),
        ...((_0x5a96b0 = _0xbd97f7.documentStyle) == null
          ? undefined
          : _0x5a96b0.renderConfig),
      },
    }),
    _0xbd97f7
  );
}
export {
  Ss as AddBoardElementMutation,
  sl as AddBoardElementOperation,
  al as AddBoardElementsOperation,
  Wr as AnalyzeBoardModelLayoutCommand,
  Ve as BOARD_CONNECTOR_ENDPOINT_SNAP_THRESHOLD,
  ea as BOARD_CONTAINER_CORNER_ADJUST,
  Zi as BOARD_INSERT_DEFAULT_SIZE,
  tu as BOARD_MIND_MAP_CONNECTOR_ROLE,
  $l as BOARD_MIND_MAP_CONTAINER_ROLE,
  nu as BOARD_MIND_MAP_DECORATION_ROLE,
  Ql as BOARD_MIND_MAP_MODE_ID,
  eu as BOARD_MIND_MAP_NODE_ROLE,
  ht as BOARD_THEME_PRESETS,
  ec as BOARD_UNIT_PERMISSION_ACTIONS,
  ul as BeginBoardContainerOperation,
  pl as BeginBoardExportOperation,
  gl as BeginBoardImportOperation,
  yl as BeginBoardMindMapOperation,
  Sl as BeginBoardPenOperation,
  Tl as BeginBoardResourcesOperation,
  El as BeginBoardSwimlaneOperation,
  kl as BeginBoardTranslateOperation,
  Fe as BoardBackgroundType,
  He as BoardConnectorLabelAnchor,
  Ke as BoardConnectorLabelOffsetSpace,
  We as BoardConnectorLabelOrientation,
  Ue as BoardConnectorLabelSide,
  Ge as BoardConnectorLabelSizing,
  ze as BoardConnectorSite,
  Be as BoardConnectorSiteBySide,
  R as BoardCustomShapeType,
  sn as BoardElementService,
  M as BoardElementType,
  Me as BoardMediaType,
  ff as BoardModel,
  Pe as BoardPageSizePreset,
  Ne as BoardPageType,
  je as BoardPlaceholderType,
  wl as BoardResourcesAdapterService,
  B as BoardSequenceShapeType,
  Ae as BoardToolType,
  Le as BoardTransitionDirection,
  Re as BoardTransitionSpeed,
  Ie as BoardTransitionType,
  ql as CommitBoardContainerTransformOperation,
  Kd as DEFAULT_BOARD_PAGE_SIZE,
  Ot as DEFAULT_BOARD_THEME,
  Zl as DisbandBoardContainerOperation,
  Da as EMBED_BOARDS_FLOATING_CUSTOM_KEY,
  Nc as FitBoardContainerToContentOperation,
  Gr as IBoardChartAdapterService,
  cl as IBoardContainerAdapterService,
  L as IBoardElementService,
  ml as IBoardImportAdapterService,
  jf as IBoardLineAdapterService,
  _l as IBoardMindMapAdapterService,
  bl as IBoardPenAdapterService,
  Cl as IBoardResourcesAdapterService,
  hs as IBoardTableAdapterService,
  qr as InsertBoardChartCommand,
  Cu as InsertBoardDraftOperation,
  wu as InsertBoardTableOperation,
  Qo as NormalizeBoardConnectorRoutingCommand,
  ms as RemoveBoardConnectorLabelCommand,
  Ms as RemoveBoardElementCommand,
  ws as RemoveBoardElementMutation,
  dc as RemoveBoardElementOnlyMutation,
  Tu as RemoveBoardElementOperation,
  ks as RemoveBoardElementsOperation,
  Nu as RemoveBoardSwimlaneLaneOperation,
  Iu as ReorderBoardElementsOperation,
  Uu as ReorderBoardObjectListElementOperation,
  ad as ReparentBoardElementsOperation,
  Ns as ResolveBoardCaptureBoundsCommand,
  Vs as SetBoardConnectorLabelStyleCommand,
  Hs as SetBoardConnectorLabelTextCommand,
  sd as SetBoardContainerAutoResizeOperation,
  _d as SetBoardContainerMembershipLockOperation,
  fc as SetBoardElementOrderMutation,
  Cd as SetBoardElementsMetadataOperation,
  Ws as SetBoardNameCommand,
  Us as SetBoardNameMutation,
  qs as SetBoardPageBackgroundCommand,
  Gs as SetBoardPageBackgroundMutation,
  lc as SetBoardPermissionCommand,
  Ad as SetBoardSwimlaneLaneSizeOperation,
  Td as SetBoardSwimlaneLanesOperation,
  Pd as SetBoardThemeOperation,
  Zf as UniverBoardsPlugin,
  uc as UpdateBoardElementCommand,
  $ as UpdateBoardElementMutation,
  ps as UpdateBoardElementsCommand,
  Gd as WrapBoardElementsInContainerOperation,
  Zn as analyzeBoardLayout,
  cc as canEditBoardTargets,
  Un as collectBoardContainerDescendantIds,
  Ts as collectBoardElementIdsForRemoveWithBoundConnectors,
  gi as containsBoardRect,
  ol as createAddBoardElementsMutationInfos,
  la as createBoardConnectorElement,
  fa as createBoardContainerElement,
  ya as createBoardImageElement,
  ua as createBoardShapeElement,
  mi as createBoardShapeTextDocument,
  va as createBoardStickyElement,
  ga as createBoardSwimlaneElement,
  da as createBoardTextBoxShapeElement,
  Xi as createBoardTextBoxShapeTextData,
  _a as createBoardTextElement,
  mt as createBoardThemePreset,
  Oa as createEmbedBoardsFloatingElement,
  Yi as documentTextStyleToBoardShapeTextStyle,
  Va as getBoardConnectorLabelDocumentData,
  Ha as getBoardConnectorLabelText,
  Ka as getBoardConnectorLabels,
  rc as getBoardElementPermissionObjectId,
  ac as getBoardPermissionValue,
  J as getBoardRectBottom,
  q as getBoardRectRight,
  Ln as getBoardShapeSequenceActivationData,
  In as getBoardShapeSequenceLifelineData,
  _t as getBoardThemePreset,
  qd as getBoardsEmptySnapshot,
  ka as getEmbedBoardsFloatingCustomData,
  Ci as hasBoardSwimlaneLaneChildren,
  Q as isBoardConnectorElementData,
  Vn as isBoardContainerElementData,
  pu as isBoardImportDraftBoundsExpanded,
  co as isBoardInteractiveContainer,
  ou as isBoardManagedMindMapConnectorElement,
  au as isBoardMindMapNodeElement,
  iu as isBoardMindMapStructuredElement,
  zn as isBoardSequenceActivationElement,
  Rn as isBoardSequenceLifelineElement,
  so as isBoardStructuralContainer,
  lo as isBoardStructuredDiagramElement,
  Aa as isEmbedBoardsFloatingElement,
  Ga as isValidBoardConnectorLabels,
  Su as materializeBoardImportDraft,
  Qf as mergeBoardRichTextDocument,
  Wa as normalizeBoardConnectorElementContent,
  Pn as normalizeBoardSequenceActivationElement,
  Ti as normalizeBoardSwimlaneData,
  ni as offsetBoardConnectorGeometry,
  oo as resolveBoardConnectorParentScope,
  bi as resolveBoardContainerBounds,
  Oc as resolveBoardContainerCaptureTarget,
  mc as resolveBoardContainerMembershipIntentFromPreview,
  Dc as resolveBoardContainerMembershipPreview,
  W as resolveBoardElementLocalTransformForParent,
  V as resolveBoardElementParentChain,
  U as resolveBoardElementWorldBounds,
  H as resolveBoardElementWorldTransform,
  fu as resolveBoardImportDraftBounds,
  Ct as resolveBoardSemanticThemeStyle,
  St as resolveBoardShapeThemeStyle,
  It as resolveBoardShapeThemeTextColor,
  po as resolveBoardStructuredSelectionRootIds,
  Vi as resolveBoardSwimlaneContentLaneAtPointInFilledBounds,
  Wi as resolveBoardSwimlaneDataToFitRect,
  zi as resolveBoardSwimlaneLaneAtPointInFilledBounds,
  Fi as resolveBoardSwimlaneLaneBoundsInFilledBounds,
  Ui as resolveBoardSwimlaneLaneForRectInFilledBounds,
  Ii as resolveBoardSwimlaneLaneRegionsInFilledBounds,
  Si as resolveBoardSwimlaneOrientation,
  ia as resolveBoardTextElementDefaultSize,
  Dt as resolveBoardThemePreviewColors,
  Gn as resolveNearestCommonBoardContainerParent,
  qa as setBoardConnectorLabels,
  oc as setBoardPermissionValue,
  Ji as shapeTextToBoardDocumentTextStyle,
  Ja as updateBoardConnectorLabel,
  Wn as wouldCreateBoardContainerCycle,
};
