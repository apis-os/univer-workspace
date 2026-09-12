Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
  t = require("rxjs"),
  n = require("@univerjs/drawing"),
  r = require("@univerjs-pro/engine-shape"),
  i = require("@univerjs/protocol"),
  a = require("@univerjs-pro/license"),
  o = (function (_0x16973a) {
    return (
      (_0x16973a.Select = "select"),
      (_0x16973a.Drag = "drag"),
      (_0x16973a.Shape = "shape"),
      (_0x16973a.Text = "text"),
      (_0x16973a.Sticky = "sticky"),
      (_0x16973a.Line = "line"),
      (_0x16973a.Container = "container"),
      (_0x16973a.Swimlane = "swimlane"),
      (_0x16973a.Table = "table"),
      (_0x16973a.Chart = "chart"),
      (_0x16973a.Pen = "pen"),
      (_0x16973a.MindMap = "mind-map"),
      (_0x16973a.Resources = "resources"),
      (_0x16973a.Image = "image"),
      (_0x16973a.Import = "import"),
      _0x16973a
    );
  })({});
const s = {
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
  c = {
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
  l = { Audio: "audio", Video: "video" };
let u = (function (_0x548dc5) {
    return (
      (_0x548dc5.Page = "page"),
      (_0x548dc5.Master = "master"),
      (_0x548dc5.Layout = "layout"),
      (_0x548dc5.HandoutMaster = "handoutMaster"),
      (_0x548dc5.NotesMaster = "notesMaster"),
      _0x548dc5
    );
  })({}),
  d = (function (_0x3a4e7b) {
    return (
      (_0x3a4e7b.Standard4By3 = "standard4By3"),
      (_0x3a4e7b.WideScreen16By9 = "wideScreen16By9"),
      (_0x3a4e7b.WideScreen16By10 = "wideScreen16By10"),
      (_0x3a4e7b.Custom = "custom"),
      _0x3a4e7b
    );
  })({}),
  f = (function (_0x408b76) {
    return (
      (_0x408b76.None = "none"),
      (_0x408b76.Solid = "solid"),
      (_0x408b76.Gradient = "gradient"),
      (_0x408b76.Image = "image"),
      (_0x408b76.Pattern = "pattern"),
      _0x408b76
    );
  })({}),
  p = (function (_0x3609f8) {
    return (
      (_0x3609f8.None = "none"),
      (_0x3609f8.Fade = "fade"),
      (_0x3609f8.Push = "push"),
      (_0x3609f8.Wipe = "wipe"),
      (_0x3609f8.Cut = "cut"),
      (_0x3609f8.Cover = "cover"),
      (_0x3609f8.Uncover = "uncover"),
      (_0x3609f8.Reveal = "reveal"),
      (_0x3609f8.Split = "split"),
      (_0x3609f8.Zoom = "zoom"),
      _0x3609f8
    );
  })({}),
  m = (function (_0x4d456d) {
    return (
      (_0x4d456d.Left = "left"),
      (_0x4d456d.Right = "right"),
      (_0x4d456d.Up = "up"),
      (_0x4d456d.Down = "down"),
      _0x4d456d
    );
  })({}),
  h = (function (_0x5f8bb9) {
    return (
      (_0x5f8bb9.Slow = "slow"),
      (_0x5f8bb9.Medium = "medium"),
      (_0x5f8bb9.Fast = "fast"),
      _0x5f8bb9
    );
  })({});
const g = { Top: 0, Right: 1, Bottom: 2, Left: 3 },
  _ = { top: g.Top, right: g.Right, bottom: g.Bottom, left: g.Left },
  v = {
    Start: "start",
    Center: "center",
    End: "end",
    Path: "path",
    Auto: "auto",
  },
  y = { Left: "left", OnPath: "onPath", Right: "right" },
  b = { Horizontal: "horizontal", FollowPath: "followPath", Auto: "auto" },
  x = {
    AutoSize: "autoSize",
    FixedWidth: "fixedWidth",
    FixedSize: "fixedSize",
  },
  S = { Path: "path", Canvas: "canvas" },
  C = "default",
  w = {
    default: "Default",
    classic: "Classic",
    vintage: "Vintage",
    gray: "Gray",
    vibrant: "Vibrant",
    blue: "Blue",
  },
  T = "#ffffff",
  ee = "#1f2329",
  E = "#1f2329",
  D = {
    primary: "boardFillPrimary",
    decision: "boardFillDecision",
    data: "boardFillData",
    accent: "boardFillAccent",
    warning: "boardFillWarning",
    danger: "boardFillDanger",
    neutral: "boardFillNeutral",
    purple: "boardFillPurple",
  },
  te = {
    primary: "boardStrokePrimary",
    decision: "boardStrokeDecision",
    data: "boardStrokeData",
    accent: "boardStrokeAccent",
    warning: "boardStrokeWarning",
    danger: "boardStrokeDanger",
    neutral: "boardStrokeNeutral",
    purple: "boardStrokePurple",
  },
  ne = {
    primary: "boardTextPrimary",
    decision: "boardTextDecision",
    data: "boardTextData",
    accent: "boardTextAccent",
    warning: "boardTextWarning",
    danger: "boardTextDanger",
    neutral: "boardTextNeutral",
    purple: "boardTextPurple",
  },
  O = {
    boardStroke: ee,
    boardText: E,
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
    boardTextPrimary: E,
    boardTextDecision: E,
    boardTextData: E,
    boardTextAccent: E,
    boardTextWarning: E,
    boardTextDanger: E,
    boardTextNeutral: E,
    boardTextPurple: E,
    boardFillHeader: "#1f2329",
    boardTextOnHeader: T,
    boardStrokeHeader: "#1f2329",
    boardFillStrong: "#1f2329",
    boardTextOnStrong: T,
    boardStrokeStrong: "#1f2329",
  },
  re = {
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
  k = {
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
  ie = {
    black: "#000000",
    white: "#ffffff",
    ink: "#2f333a",
    dark: "#252a32",
    line: "#343941",
    muted: "#f5f6f7",
    lightText: "#f3f4f6",
    darkText: "#40444c",
  },
  ae = {
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
  oe = {
    blue: "#4b55e7",
    blueStroke: "#6874ff",
    blueDark: "#3f49d7",
    lightFill: "#f1f3ff",
    lightText: "#f7f8fb",
    darkText: "#40444c",
  };
function se(_0x1c8bad, _0x33fd62) {
  if (!_0x1c8bad) return _0x33fd62;
  let _0x51d37e = new e["ColorKit"](_0x1c8bad);
  return _0x51d37e.isValid ? _0x51d37e.toHexString() : _0x33fd62;
}
function A(_0x44053b, _0x9b75d8, _0x2dd572, _0x31b03c) {
  let _0xd34e2f = se(_0x44053b, _0x31b03c),
    _0x48e66c = e.ColorKit["mix"](_0xd34e2f, _0x9b75d8, _0x2dd572);
  return _0x48e66c.isValid ? _0x48e66c.toHexString() : _0x31b03c;
}
function j(_0x23b3f5, _0x22e411, _0x3cd203) {
  for (let _0x4d05dd of _0x22e411) {
    let _0x33e1d2 = se(
      _0x23b3f5 == null ? undefined : _0x23b3f5(_0x4d05dd),
      "",
    );
    if (_0x33e1d2) return _0x33e1d2;
  }
  return _0x3cd203;
}
function ce(_0x541b6c) {
  return {
    ..._0x541b6c,
    primary: _0x541b6c.primary ?? _0x541b6c.acc1,
    boardStroke: _0x541b6c.boardStroke ?? _0x541b6c.dk1 ?? ee,
    boardText: _0x541b6c.boardText ?? _0x541b6c.dk1 ?? E,
    boardFillPrimary:
      _0x541b6c.boardFillPrimary ??
      A(_0x541b6c.acc1, _0x541b6c.lt1, 0.88, O.boardFillPrimary),
    boardFillDecision:
      _0x541b6c.boardFillDecision ??
      A(_0x541b6c.acc4, _0x541b6c.lt1, 0.76, O.boardFillDecision),
    boardFillData:
      _0x541b6c.boardFillData ??
      A(_0x541b6c.acc6, _0x541b6c.lt1, 0.84, O.boardFillData),
    boardFillAccent:
      _0x541b6c.boardFillAccent ??
      A(_0x541b6c.acc5, _0x541b6c.lt1, 0.86, O.boardFillAccent),
    boardFillWarning:
      _0x541b6c.boardFillWarning ??
      A(_0x541b6c.acc2, _0x541b6c.lt1, 0.8, O.boardFillWarning),
    boardFillDanger:
      _0x541b6c.boardFillDanger ??
      A(_0x541b6c.acc2, _0x541b6c.lt1, 0.86, O.boardFillDanger),
    boardFillNeutral:
      _0x541b6c.boardFillNeutral ??
      A(_0x541b6c.dk2, _0x541b6c.lt1, 0.92, O.boardFillNeutral),
    boardFillPurple:
      _0x541b6c.boardFillPurple ??
      A(_0x541b6c.acc3, _0x541b6c.lt1, 0.86, O.boardFillPurple),
    boardStrokePrimary:
      _0x541b6c.boardStrokePrimary ?? _0x541b6c.acc1 ?? O.boardStrokePrimary,
    boardStrokeDecision:
      _0x541b6c.boardStrokeDecision ?? _0x541b6c.acc4 ?? O.boardStrokeDecision,
    boardStrokeData:
      _0x541b6c.boardStrokeData ?? _0x541b6c.acc6 ?? O.boardStrokeData,
    boardStrokeAccent:
      _0x541b6c.boardStrokeAccent ??
      _0x541b6c.acc5 ??
      _0x541b6c.acc1 ??
      O.boardStrokeAccent,
    boardStrokeWarning:
      _0x541b6c.boardStrokeWarning ?? _0x541b6c.acc2 ?? O.boardStrokeWarning,
    boardStrokeDanger:
      _0x541b6c.boardStrokeDanger ?? _0x541b6c.acc2 ?? O.boardStrokeDanger,
    boardStrokeNeutral:
      _0x541b6c.boardStrokeNeutral ?? _0x541b6c.dk2 ?? O.boardStrokeNeutral,
    boardStrokePurple:
      _0x541b6c.boardStrokePurple ?? _0x541b6c.acc3 ?? O.boardStrokePurple,
    boardTextPrimary:
      _0x541b6c.boardTextPrimary ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextPrimary,
    boardTextDecision:
      _0x541b6c.boardTextDecision ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextDecision,
    boardTextData:
      _0x541b6c.boardTextData ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextData,
    boardTextAccent:
      _0x541b6c.boardTextAccent ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextAccent,
    boardTextWarning:
      _0x541b6c.boardTextWarning ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextWarning,
    boardTextDanger:
      _0x541b6c.boardTextDanger ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextDanger,
    boardTextNeutral:
      _0x541b6c.boardTextNeutral ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextNeutral,
    boardTextPurple:
      _0x541b6c.boardTextPurple ??
      _0x541b6c.boardText ??
      _0x541b6c.dk1 ??
      O.boardTextPurple,
    boardFillHeader:
      _0x541b6c.boardFillHeader ??
      A(_0x541b6c.acc1, _0x541b6c.lt1, 0.28, O.boardFillHeader),
    boardTextOnHeader: _0x541b6c.boardTextOnHeader ?? T,
    boardStrokeHeader:
      _0x541b6c.boardStrokeHeader ??
      A(_0x541b6c.acc1, _0x541b6c.dk1, 0.35, O.boardStrokeHeader),
    boardFillStrong:
      _0x541b6c.boardFillStrong ??
      A(_0x541b6c.dk1, _0x541b6c.acc1, 0.25, O.boardFillStrong),
    boardTextOnStrong: _0x541b6c.boardTextOnStrong ?? T,
    boardStrokeStrong:
      _0x541b6c.boardStrokeStrong ?? _0x541b6c.dk1 ?? O.boardStrokeStrong,
  };
}
function le(_0x28604c, _0x2c596f = {}) {
  let _0x118cc7 = _0x28604c[_0x2c596f.subtleFill ?? "acc1"],
    _0x1a2800 = _0x28604c[_0x2c596f.moderateFill ?? "acc1"],
    _0x18e3df = _0x28604c[_0x2c596f.gradientFrom ?? "acc5"],
    _0x344f61 = _0x28604c[_0x2c596f.gradientTo ?? "acc1"];
  return [
    { fillType: r.ShapeFillEnum["SolidFill"], color: _0x118cc7, opacity: 1 },
    { fillType: r.ShapeFillEnum["SolidFill"], color: _0x1a2800, opacity: 1 },
    {
      fillType: r.ShapeFillEnum["GradientFill"],
      gradientAngle: 90,
      gradientStops: [
        { position: 0, color: _0x18e3df },
        { position: 1, color: _0x344f61 },
      ],
    },
  ];
}
function ue(_0x379972, _0x2a8063 = {}) {
  let _0x23890f = _0x379972[_0x2a8063.subtleLine ?? "acc1"],
    _0x462ac6 = _0x379972[_0x2a8063.moderateLine ?? "dk2"],
    _0xa4e7e = _0x379972[_0x2a8063.intenseLine ?? "dk1"];
  return [
    {
      lineStrokeType: r.ShapeLineTypeEnum["SolidLine"],
      color: _0x23890f,
      width: 1,
      opacity: 1,
    },
    {
      lineStrokeType: r.ShapeLineTypeEnum["SolidLine"],
      color: _0x462ac6,
      width: 1.5,
      opacity: 1,
    },
    {
      lineStrokeType: r.ShapeLineTypeEnum["SolidLine"],
      color: _0xa4e7e,
      width: 2.25,
      opacity: 1,
    },
  ];
}
function de() {
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
function fe(_0x5889c1) {
  return [
    {
      fillType: r.ShapeFillEnum["SolidFill"],
      color: _0x5889c1.lt1,
      opacity: 1,
    },
    {
      fillType: r.ShapeFillEnum["SolidFill"],
      color: _0x5889c1.lt2,
      opacity: 1,
    },
    {
      fillType: r.ShapeFillEnum["GradientFill"],
      gradientAngle: 90,
      gradientStops: [
        { position: 0, color: _0x5889c1.lt1 },
        { position: 1, color: _0x5889c1.lt2 },
      ],
    },
  ];
}
function pe(_0x1bf486, _0x3a6b45, _0x55eddc, _0x316fc1 = {}) {
  let _0x4ad650 = ce(_0x55eddc);
  return {
    id: _0x1bf486,
    name: _0x3a6b45,
    colorScheme: _0x4ad650,
    fontScheme: { heading: "Calibri Light", body: "Calibri" },
    fmtScheme: {
      name: _0x3a6b45,
      fillStyleLst: le(_0x4ad650, {
        subtleFill: "boardFillNeutral",
        moderateFill: "boardFillPrimary",
        gradientFrom: "boardFillAccent",
        gradientTo: "boardFillPrimary",
        ..._0x316fc1,
      }),
      lnStyleLst: ue(_0x4ad650, {
        subtleLine: "boardStroke",
        moderateLine: "boardStroke",
        intenseLine: "boardStroke",
        ..._0x316fc1,
      }),
      effectStyleLst: de(),
      bgFillStyleLst: fe(_0x4ad650),
    },
  };
}
function me(_0x1ba5f5) {
  return !_0x1ba5f5 ||
    _0x1ba5f5 === "follow-univer" ||
    _0x1ba5f5 === "board-default-theme"
    ? C
    : _0x1ba5f5 in w
      ? _0x1ba5f5
      : undefined;
}
function he(_0x4d9120, _0x17d9f7) {
  let _0x51bbee = me(_0x4d9120);
  if (!_0x51bbee) return;
  let _0x59061e = j(_0x17d9f7, ["gray.900", "gray.1000"], E),
    _0x5c431a = j(_0x17d9f7, ["gray.100"], "#f3f5f9"),
    _0x53139f = j(_0x17d9f7, ["gray.300"], "#c6ccd6"),
    _0x3814c2 = j(_0x17d9f7, ["primary.600", "blue.600"], "#2c53f1"),
    _0x564dd0 = j(_0x17d9f7, ["blue.600", "primary.600"], "#1c64f2"),
    _0x3ba2ae = j(_0x17d9f7, ["purple.600", "primary.600"], "#7e3af2"),
    _0x134df6 = j(_0x17d9f7, ["green.600"], "#057a55"),
    _0x456c7c = j(_0x17d9f7, ["orange.500", "orange.600"], "#ff5a1f"),
    _0x4697e5 = j(_0x17d9f7, ["yellow.400", "yellow.500"], "#f1b312"),
    _0x56df4f = j(_0x17d9f7, ["red.500", "red.600"], "#f05252"),
    _0x3a2c93 = j(_0x17d9f7, ["gray.1000", "gray.950", "gray.900"], "#111111"),
    _0x36dad2 = j(_0x17d9f7, ["gray.0", "bg.white"], T),
    _0x265962 = {
      blueStroke: j(_0x17d9f7, ["blue.600", "primary.600"], re.blueStroke),
      blueFill: A(_0x564dd0, _0x36dad2, 0.86, re.blueFill),
      grayStroke: j(_0x17d9f7, ["gray.300"], re.grayStroke),
      grayFill: A(_0x53139f, _0x36dad2, 0.72, re.grayFill),
      orangeStroke: j(_0x17d9f7, ["orange.500", "orange.600"], re.orangeStroke),
      orangeFill: A(_0x456c7c, _0x36dad2, 0.84, re.orangeFill),
      greenStroke: j(_0x17d9f7, ["green.600"], re.greenStroke),
      greenFill: A(_0x134df6, _0x36dad2, 0.86, re.greenFill),
      redStroke: j(_0x17d9f7, ["red.500", "red.600"], re.redStroke),
      redFill: A(_0x56df4f, _0x36dad2, 0.86, re.redFill),
      purpleStroke: j(
        _0x17d9f7,
        ["purple.600", "primary.600"],
        re.purpleStroke,
      ),
      purpleFill: A(_0x3ba2ae, _0x36dad2, 0.88, re.purpleFill),
    },
    _0x2aa784 = {
      darkPurple: A(_0x3ba2ae, _0x59061e, 0.36, k.darkPurple),
      darkPurpleStroke: A(_0x3ba2ae, _0x59061e, 0.24, k.darkPurpleStroke),
      teal: A(_0x134df6, _0x36dad2, 0.22, k.teal),
      tealStroke: A(_0x134df6, _0x59061e, 0.28, k.tealStroke),
      mustard: A(_0x4697e5, _0x36dad2, 0.16, k.mustard),
      mustardStroke: A(_0x4697e5, _0x59061e, 0.18, k.mustardStroke),
      rust: A(_0x456c7c, _0x59061e, 0.26, k.rust),
      rustStroke: A(_0x456c7c, _0x59061e, 0.16, k.rustStroke),
      periwinkle: A(_0x564dd0, _0x36dad2, 0.3, k.periwinkle),
      periwinkleStroke: A(_0x564dd0, _0x59061e, 0.26, k.periwinkleStroke),
      cream: A(_0x4697e5, _0x36dad2, 0.86, k.cream),
      creamStroke: A(_0x4697e5, _0x53139f, 0.66, k.creamStroke),
      lightText: A(_0x36dad2, _0x4697e5, 0.05, k.lightText),
      darkText: A(_0x59061e, _0x456c7c, 0.08, k.darkText),
    },
    _0x16e94c = {
      black: _0x3a2c93,
      white: _0x36dad2,
      ink: _0x59061e,
      dark: A(_0x59061e, _0x3a2c93, 0.22, ie.dark),
      line: A(_0x59061e, _0x53139f, 0.18, ie.line),
      muted: _0x5c431a,
      lightText: A(_0x36dad2, _0x5c431a, 0.16, ie.lightText),
      darkText: A(_0x59061e, _0x53139f, 0.08, ie.darkText),
    },
    _0x5f10ce = {
      blue: _0x564dd0,
      blueStroke: A(_0x564dd0, _0x59061e, 0.14, ae.blueStroke),
      orange: _0x456c7c,
      orangeStroke: A(_0x456c7c, _0x59061e, 0.13, ae.orangeStroke),
      paleOrange: A(_0x456c7c, _0x36dad2, 0.86, ae.paleOrange),
      yellow: _0x4697e5,
      yellowStroke: A(_0x4697e5, _0x59061e, 0.13, ae.yellowStroke),
      green: A(_0x134df6, _0x36dad2, 0.08, ae.green),
      greenStroke: A(_0x134df6, _0x59061e, 0.14, ae.greenStroke),
      black: A(_0x3a2c93, _0x59061e, 0.08, ae.black),
      blackStroke: _0x3a2c93,
      lightText: A(_0x36dad2, _0x564dd0, 0.03, ae.lightText),
      darkText: _0x59061e,
    },
    _0x4848f3 = {
      blue: _0x3814c2,
      blueStroke: A(_0x3814c2, _0x36dad2, 0.18, oe.blueStroke),
      blueDark: A(_0x3814c2, _0x59061e, 0.22, oe.blueDark),
      lightFill: A(_0x3814c2, _0x36dad2, 0.9, oe.lightFill),
      lightText: A(_0x36dad2, _0x3814c2, 0.03, oe.lightText),
      darkText: _0x59061e,
    },
    _0xc61101 = {
      dk1: _0x59061e,
      lt1: _0x36dad2,
      dk2: _0x53139f,
      lt2: _0x5c431a,
      acc1: _0x3814c2,
      acc2: _0x456c7c,
      acc3: _0x3ba2ae,
      acc4: _0x4697e5,
      acc5: _0x564dd0,
      acc6: _0x134df6,
      hlink: _0x3814c2,
      folHlink: _0x3ba2ae,
      boardStroke: _0x59061e,
      boardText: _0x59061e,
      boardFillPrimary: A(_0x3814c2, _0x36dad2, 0.88, O.boardFillPrimary),
      boardFillDecision: A(_0x4697e5, _0x36dad2, 0.76, O.boardFillDecision),
      boardFillData: A(_0x134df6, _0x36dad2, 0.84, O.boardFillData),
      boardFillAccent: A(_0x564dd0, _0x36dad2, 0.86, O.boardFillAccent),
      boardFillWarning: A(_0x456c7c, _0x36dad2, 0.82, O.boardFillWarning),
      boardFillDanger: A(_0x56df4f, _0x36dad2, 0.84, O.boardFillDanger),
      boardFillNeutral: A(_0x53139f, _0x36dad2, 0.7, O.boardFillNeutral),
      boardFillPurple: A(_0x3ba2ae, _0x36dad2, 0.88, O.boardFillPurple),
      boardStrokePrimary: _0x59061e,
      boardStrokeDecision: _0x59061e,
      boardStrokeData: _0x59061e,
      boardStrokeAccent: _0x59061e,
      boardStrokeWarning: _0x59061e,
      boardStrokeDanger: _0x59061e,
      boardStrokeNeutral: _0x59061e,
      boardStrokePurple: _0x59061e,
      boardTextPrimary: _0x59061e,
      boardTextDecision: _0x59061e,
      boardTextData: _0x59061e,
      boardTextAccent: _0x59061e,
      boardTextWarning: _0x59061e,
      boardTextDanger: _0x59061e,
      boardTextNeutral: _0x59061e,
      boardTextPurple: _0x59061e,
      boardFillHeader: _0x3814c2,
      boardTextOnHeader: _0x36dad2,
      boardStrokeHeader: A(_0x3814c2, _0x59061e, 0.28, _0x3814c2),
      boardFillStrong: _0x59061e,
      boardTextOnStrong: _0x36dad2,
      boardStrokeStrong: _0x59061e,
    },
    _0x4be681 = {
      default: _0xc61101,
      classic: {
        ..._0xc61101,
        dk2: _0x265962.grayStroke,
        lt2: "#f7f8fa",
        acc1: _0x265962.blueStroke,
        acc2: _0x265962.orangeStroke,
        acc3: _0x265962.purpleStroke,
        acc4: _0x265962.orangeStroke,
        acc5: _0x265962.blueStroke,
        acc6: _0x265962.greenStroke,
        boardStroke: _0x59061e,
        boardFillPrimary: _0x265962.blueFill,
        boardFillDecision: _0x265962.orangeFill,
        boardFillData: _0x265962.greenFill,
        boardFillAccent: _0x265962.blueFill,
        boardFillWarning: _0x265962.orangeFill,
        boardFillDanger: _0x265962.redFill,
        boardFillNeutral: _0x265962.grayFill,
        boardFillPurple: _0x265962.purpleFill,
        boardStrokePrimary: _0x265962.blueStroke,
        boardStrokeDecision: _0x265962.orangeStroke,
        boardStrokeData: _0x265962.greenStroke,
        boardStrokeAccent: _0x265962.blueStroke,
        boardStrokeWarning: _0x265962.orangeStroke,
        boardStrokeDanger: _0x265962.redStroke,
        boardStrokeNeutral: _0x265962.grayStroke,
        boardStrokePurple: _0x265962.purpleStroke,
        boardTextPrimary: _0x59061e,
        boardTextDecision: _0x59061e,
        boardTextData: _0x59061e,
        boardTextAccent: _0x59061e,
        boardTextWarning: _0x59061e,
        boardTextDanger: _0x59061e,
        boardTextNeutral: _0x59061e,
        boardTextPurple: _0x59061e,
        boardFillHeader: A(_0x59061e, _0x53139f, 0.18, _0x59061e),
        boardTextOnHeader: _0x36dad2,
        boardStrokeHeader: A(_0x59061e, _0x53139f, 0.1, _0x59061e),
        boardFillStrong: A(_0x59061e, _0x53139f, 0.12, _0x59061e),
        boardTextOnStrong: _0x36dad2,
        boardStrokeStrong: _0x59061e,
      },
      vintage: {
        ..._0xc61101,
        dk1: _0x2aa784.darkText,
        dk2: _0x2aa784.darkPurple,
        lt2: "#f8f5ef",
        acc1: _0x2aa784.darkPurple,
        acc2: _0x2aa784.rust,
        acc3: _0x2aa784.cream,
        acc4: _0x2aa784.mustard,
        acc5: _0x2aa784.periwinkle,
        acc6: _0x2aa784.teal,
        hlink: _0x2aa784.teal,
        folHlink: _0x2aa784.darkPurple,
        boardStroke: _0x59061e,
        boardText: _0x2aa784.darkText,
        boardFillPrimary: _0x2aa784.darkPurple,
        boardFillDecision: _0x2aa784.mustard,
        boardFillData: _0x2aa784.rust,
        boardFillAccent: _0x2aa784.darkPurple,
        boardFillWarning: _0x2aa784.cream,
        boardFillDanger: _0x2aa784.periwinkle,
        boardFillNeutral: _0x2aa784.teal,
        boardFillPurple: _0x2aa784.cream,
        boardStrokePrimary: _0x2aa784.darkPurpleStroke,
        boardStrokeDecision: _0x2aa784.mustardStroke,
        boardStrokeData: _0x2aa784.rustStroke,
        boardStrokeAccent: _0x2aa784.darkPurpleStroke,
        boardStrokeWarning: _0x2aa784.creamStroke,
        boardStrokeDanger: _0x2aa784.periwinkleStroke,
        boardStrokeNeutral: _0x2aa784.tealStroke,
        boardStrokePurple: _0x2aa784.creamStroke,
        boardTextPrimary: _0x2aa784.lightText,
        boardTextDecision: _0x2aa784.darkText,
        boardTextData: _0x2aa784.lightText,
        boardTextAccent: _0x2aa784.lightText,
        boardTextWarning: _0x2aa784.darkText,
        boardTextDanger: _0x2aa784.lightText,
        boardTextNeutral: _0x2aa784.darkText,
        boardTextPurple: _0x2aa784.darkText,
        boardFillHeader: _0x2aa784.darkPurple,
        boardTextOnHeader: _0x2aa784.lightText,
        boardStrokeHeader: _0x2aa784.darkPurpleStroke,
        boardFillStrong: _0x2aa784.darkPurple,
        boardTextOnStrong: _0x2aa784.lightText,
        boardStrokeStrong: _0x2aa784.darkPurpleStroke,
      },
      gray: {
        ..._0xc61101,
        dk1: _0x16e94c.ink,
        dk2: _0x16e94c.line,
        lt1: _0x16e94c.white,
        lt2: _0x16e94c.muted,
        acc1: _0x16e94c.line,
        acc2: _0x16e94c.black,
        acc3: _0x16e94c.white,
        acc4: _0x16e94c.dark,
        acc5: _0x16e94c.black,
        acc6: _0x16e94c.ink,
        hlink: _0x16e94c.ink,
        folHlink: _0x16e94c.black,
        boardStroke: _0x59061e,
        boardText: _0x16e94c.darkText,
        boardFillPrimary: _0x16e94c.white,
        boardFillDecision: _0x16e94c.dark,
        boardFillData: _0x16e94c.white,
        boardFillAccent: _0x16e94c.black,
        boardFillWarning: _0x16e94c.white,
        boardFillDanger: _0x16e94c.white,
        boardFillNeutral: _0x16e94c.black,
        boardFillPurple: _0x16e94c.white,
        boardStrokePrimary: _0x16e94c.line,
        boardStrokeDecision: _0x16e94c.dark,
        boardStrokeData: _0x16e94c.line,
        boardStrokeAccent: _0x16e94c.black,
        boardStrokeWarning: _0x16e94c.line,
        boardStrokeDanger: _0x16e94c.line,
        boardStrokeNeutral: _0x16e94c.black,
        boardStrokePurple: _0x16e94c.line,
        boardTextPrimary: _0x16e94c.darkText,
        boardTextDecision: _0x16e94c.lightText,
        boardTextData: _0x16e94c.darkText,
        boardTextAccent: _0x16e94c.lightText,
        boardTextWarning: _0x16e94c.darkText,
        boardTextDanger: _0x16e94c.darkText,
        boardTextNeutral: _0x16e94c.lightText,
        boardTextPurple: _0x16e94c.darkText,
        boardFillHeader: _0x16e94c.black,
        boardTextOnHeader: _0x16e94c.lightText,
        boardStrokeHeader: _0x16e94c.black,
        boardFillStrong: _0x16e94c.black,
        boardTextOnStrong: _0x16e94c.lightText,
        boardStrokeStrong: _0x16e94c.black,
      },
      vibrant: {
        ..._0xc61101,
        dk1: _0x5f10ce.darkText,
        dk2: _0x5f10ce.black,
        lt2: "#f7f9fc",
        acc1: _0x5f10ce.blue,
        acc2: _0x5f10ce.orange,
        acc3: _0x5f10ce.black,
        acc4: _0x5f10ce.yellow,
        acc5: _0x5f10ce.blue,
        acc6: _0x5f10ce.green,
        hlink: _0x5f10ce.blue,
        folHlink: _0x5f10ce.orange,
        boardStroke: _0x59061e,
        boardText: _0x5f10ce.darkText,
        boardFillPrimary: _0x5f10ce.blue,
        boardFillDecision: _0x5f10ce.yellow,
        boardFillData: _0x5f10ce.paleOrange,
        boardFillAccent: _0x5f10ce.blue,
        boardFillWarning: _0x5f10ce.orange,
        boardFillDanger: _0x5f10ce.green,
        boardFillNeutral: _0x5f10ce.orange,
        boardFillPurple: _0x5f10ce.black,
        boardStrokePrimary: _0x5f10ce.blueStroke,
        boardStrokeDecision: _0x5f10ce.yellowStroke,
        boardStrokeData: _0x5f10ce.orangeStroke,
        boardStrokeAccent: _0x5f10ce.blueStroke,
        boardStrokeWarning: _0x5f10ce.orangeStroke,
        boardStrokeDanger: _0x5f10ce.greenStroke,
        boardStrokeNeutral: _0x5f10ce.orangeStroke,
        boardStrokePurple: _0x5f10ce.blackStroke,
        boardTextPrimary: _0x5f10ce.lightText,
        boardTextDecision: _0x5f10ce.darkText,
        boardTextData: _0x5f10ce.darkText,
        boardTextAccent: _0x5f10ce.lightText,
        boardTextWarning: _0x5f10ce.lightText,
        boardTextDanger: _0x5f10ce.lightText,
        boardTextNeutral: _0x5f10ce.lightText,
        boardTextPurple: _0x5f10ce.lightText,
        boardFillHeader: _0x5f10ce.orange,
        boardTextOnHeader: _0x5f10ce.lightText,
        boardStrokeHeader: _0x5f10ce.orangeStroke,
        boardFillStrong: _0x5f10ce.black,
        boardTextOnStrong: _0x5f10ce.lightText,
        boardStrokeStrong: _0x5f10ce.blackStroke,
      },
      blue: {
        ..._0xc61101,
        dk1: _0x4848f3.darkText,
        dk2: _0x4848f3.blueStroke,
        lt2: "#f7f8ff",
        acc1: _0x4848f3.blue,
        acc2: _0x4848f3.blue,
        acc3: _0x4848f3.blue,
        acc4: _0x4848f3.blueStroke,
        acc5: _0x4848f3.blue,
        acc6: _0x4848f3.blue,
        hlink: _0x4848f3.blue,
        folHlink: _0x4848f3.blueDark,
        boardStroke: _0x59061e,
        boardText: _0x4848f3.darkText,
        boardFillPrimary: _0x4848f3.lightFill,
        boardFillDecision: _0x4848f3.lightFill,
        boardFillData: _0x4848f3.lightFill,
        boardFillAccent: _0x4848f3.lightFill,
        boardFillWarning: _0x4848f3.blue,
        boardFillDanger: _0x4848f3.lightFill,
        boardFillNeutral: _0x4848f3.blue,
        boardFillPurple: _0x4848f3.lightFill,
        boardStrokePrimary: _0x4848f3.blueStroke,
        boardStrokeDecision: _0x4848f3.blueStroke,
        boardStrokeData: _0x4848f3.blueStroke,
        boardStrokeAccent: _0x4848f3.blueStroke,
        boardStrokeWarning: _0x4848f3.blueDark,
        boardStrokeDanger: _0x4848f3.blueStroke,
        boardStrokeNeutral: _0x4848f3.blueDark,
        boardStrokePurple: _0x4848f3.blueStroke,
        boardTextPrimary: _0x4848f3.darkText,
        boardTextDecision: _0x4848f3.darkText,
        boardTextData: _0x4848f3.darkText,
        boardTextAccent: _0x4848f3.darkText,
        boardTextWarning: _0x4848f3.lightText,
        boardTextDanger: _0x4848f3.darkText,
        boardTextNeutral: _0x4848f3.lightText,
        boardTextPurple: _0x4848f3.darkText,
        boardFillHeader: _0x4848f3.blue,
        boardTextOnHeader: _0x4848f3.lightText,
        boardStrokeHeader: _0x4848f3.blueDark,
        boardFillStrong: _0x4848f3.blue,
        boardTextOnStrong: _0x4848f3.lightText,
        boardStrokeStrong: _0x4848f3.blueDark,
      },
    };
  return pe(_0x51bbee, w[_0x51bbee], _0x4be681[_0x51bbee]);
}
const ge = Object.keys(w).map((_0x46330e) => he(_0x46330e)),
  _e = {
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
function ve(_0x2d0090) {
  let _0xd7df06 = me(_0x2d0090);
  return ge.find((_0x44a17c) => _0x44a17c.id === _0xd7df06);
}
function ye(_0x402355) {
  switch (_0x402355) {
    case r.ShapeTypeEnum["Diamond"]:
    case r.ShapeTypeEnum["FlowchartDecision"]:
      return "decision";
    case r.ShapeTypeEnum["Can"]:
    case r.ShapeTypeEnum["FlowchartMagneticDisk"]:
    case r.ShapeTypeEnum["FlowchartMagneticDrum"]:
    case r.ShapeTypeEnum["FlowchartMagneticTape"]:
    case r.ShapeTypeEnum["FlowchartOnlineStorage"]:
    case r.ShapeTypeEnum["FlowChartOfflineStorage"]:
    case r.ShapeTypeEnum["FlowChartInputOutput"]:
    case r.ShapeTypeEnum["Parallelogram"]:
      return "data";
    case r.ShapeTypeEnum["RightArrow"]:
    case r.ShapeTypeEnum["LeftArrow"]:
    case r.ShapeTypeEnum["UpArrow"]:
    case r.ShapeTypeEnum["DownArrow"]:
    case r.ShapeTypeEnum["LeftRightArrow"]:
    case r.ShapeTypeEnum["UpDownArrow"]:
    case r.ShapeTypeEnum["QuadArrow"]:
    case r.ShapeTypeEnum["Chevron"]:
    case r.ShapeTypeEnum["Pentagon"]:
    case r.ShapeTypeEnum["RightArrowCallout"]:
    case r.ShapeTypeEnum["LeftArrowCallout"]:
    case r.ShapeTypeEnum["UpArrowCallout"]:
    case r.ShapeTypeEnum["DownArrowCallout"]:
    case r.ShapeTypeEnum["LeftRightArrowCallout"]:
    case r.ShapeTypeEnum["QuadArrowCallout"]:
    case r.ShapeTypeEnum["UpDownArrowCallout"]:
      return "accent";
    case r.ShapeTypeEnum["Triangle"]:
    case r.ShapeTypeEnum["RightTriangle"]:
    case r.ShapeTypeEnum["Trapezoid"]:
    case r.ShapeTypeEnum["FlowchartManualOperation"]:
      return "danger";
    case r.ShapeTypeEnum["Star5"]:
    case r.ShapeTypeEnum["Star6"]:
    case r.ShapeTypeEnum["Star7"]:
    case r.ShapeTypeEnum["Star8"]:
    case r.ShapeTypeEnum["Star10"]:
    case r.ShapeTypeEnum["Star12"]:
    case r.ShapeTypeEnum["Star16"]:
    case r.ShapeTypeEnum["Star24"]:
    case r.ShapeTypeEnum["Star32"]:
    case r.ShapeTypeEnum["WedgeRectCallout"]:
    case r.ShapeTypeEnum["WedgeRoundRectCallout"]:
    case r.ShapeTypeEnum["WedgeEllipseCallout"]:
    case r.ShapeTypeEnum["CloudCallout"]:
    case r.ShapeTypeEnum["Cloud"]:
    case r.ShapeTypeEnum["LeftBrace"]:
    case r.ShapeTypeEnum["RightBrace"]:
    case r.ShapeTypeEnum["BracePair"]:
    case r.ShapeTypeEnum["LeftBracket"]:
    case r.ShapeTypeEnum["RightBracket"]:
    case r.ShapeTypeEnum["BracketPair"]:
      return "purple";
    case r.ShapeTypeEnum["FoldedCorner"]:
    case r.ShapeTypeEnum["FlowchartDocument"]:
    case r.ShapeTypeEnum["FlowchartMultiDocument"]:
      return "warning";
    case r.ShapeTypeEnum["MathPlus"]:
    case r.ShapeTypeEnum["MathMinus"]:
    case r.ShapeTypeEnum["MathMultiply"]:
    case r.ShapeTypeEnum["MathDivide"]:
    case r.ShapeTypeEnum["MathEqual"]:
    case r.ShapeTypeEnum["MathNotEqual"]:
      return "neutral";
    default:
      break;
  }
  if (typeof _0x402355 == "string") {
    if (
      _0x402355.includes("data_storage") ||
      _0x402355.includes("database") ||
      _0x402355.includes("data-flow")
    )
      return "data";
    if (
      _0x402355.includes("actor") ||
      _0x402355.includes("boundary") ||
      _0x402355.includes("control")
    )
      return "purple";
    if (_0x402355.includes("activation")) return "neutral";
  }
  return "primary";
}
function be(_0x73bc7d) {
  switch (_0x73bc7d) {
    case r.ShapeTypeEnum["Ellipse"]:
    case r.ShapeTypeEnum["Cloud"]:
    case r.ShapeTypeEnum["CloudCallout"]:
    case r.ShapeTypeEnum["Hexagon"]:
      return "neutral";
    case r.ShapeTypeEnum["Diamond"]:
    case r.ShapeTypeEnum["FlowchartDecision"]:
      return "decision";
    case r.ShapeTypeEnum["Can"]:
    case r.ShapeTypeEnum["FlowchartMagneticDisk"]:
    case r.ShapeTypeEnum["FlowchartMagneticDrum"]:
    case r.ShapeTypeEnum["FlowchartMagneticTape"]:
    case r.ShapeTypeEnum["FlowchartOnlineStorage"]:
    case r.ShapeTypeEnum["FlowChartOfflineStorage"]:
    case r.ShapeTypeEnum["FlowChartInputOutput"]:
    case r.ShapeTypeEnum["Parallelogram"]:
      return "data";
    case r.ShapeTypeEnum["LeftArrow"]:
    case r.ShapeTypeEnum["UpArrow"]:
    case r.ShapeTypeEnum["DownArrow"]:
    case r.ShapeTypeEnum["LeftRightArrow"]:
    case r.ShapeTypeEnum["UpDownArrow"]:
    case r.ShapeTypeEnum["QuadArrow"]:
    case r.ShapeTypeEnum["RightArrowCallout"]:
    case r.ShapeTypeEnum["LeftArrowCallout"]:
    case r.ShapeTypeEnum["UpArrowCallout"]:
    case r.ShapeTypeEnum["DownArrowCallout"]:
    case r.ShapeTypeEnum["LeftRightArrowCallout"]:
    case r.ShapeTypeEnum["QuadArrowCallout"]:
    case r.ShapeTypeEnum["UpDownArrowCallout"]:
      return "warning";
    case r.ShapeTypeEnum["RightArrow"]:
    case r.ShapeTypeEnum["Chevron"]:
    case r.ShapeTypeEnum["Pentagon"]:
      return "accent";
    case r.ShapeTypeEnum["Triangle"]:
    case r.ShapeTypeEnum["RightTriangle"]:
    case r.ShapeTypeEnum["Trapezoid"]:
    case r.ShapeTypeEnum["FlowchartManualOperation"]:
      return "danger";
    case r.ShapeTypeEnum["Octagon"]:
    case r.ShapeTypeEnum["Star5"]:
    case r.ShapeTypeEnum["Star6"]:
    case r.ShapeTypeEnum["Star7"]:
    case r.ShapeTypeEnum["Star8"]:
    case r.ShapeTypeEnum["Star10"]:
    case r.ShapeTypeEnum["Star12"]:
    case r.ShapeTypeEnum["Star16"]:
    case r.ShapeTypeEnum["Star24"]:
    case r.ShapeTypeEnum["Star32"]:
    case r.ShapeTypeEnum["WedgeRectCallout"]:
    case r.ShapeTypeEnum["WedgeRoundRectCallout"]:
    case r.ShapeTypeEnum["WedgeEllipseCallout"]:
    case r.ShapeTypeEnum["LeftBrace"]:
    case r.ShapeTypeEnum["RightBrace"]:
    case r.ShapeTypeEnum["BracePair"]:
    case r.ShapeTypeEnum["LeftBracket"]:
    case r.ShapeTypeEnum["RightBracket"]:
    case r.ShapeTypeEnum["BracketPair"]:
      return "purple";
    case r.ShapeTypeEnum["FoldedCorner"]:
    case r.ShapeTypeEnum["FlowchartDocument"]:
    case r.ShapeTypeEnum["FlowchartMultiDocument"]:
      return "warning";
    case r.ShapeTypeEnum["MathPlus"]:
    case r.ShapeTypeEnum["MathMinus"]:
    case r.ShapeTypeEnum["MathMultiply"]:
    case r.ShapeTypeEnum["MathDivide"]:
    case r.ShapeTypeEnum["MathEqual"]:
    case r.ShapeTypeEnum["MathNotEqual"]:
      return "neutral";
    default:
      break;
  }
  if (typeof _0x73bc7d == "string") {
    if (
      _0x73bc7d.includes("data_storage") ||
      _0x73bc7d.includes("database") ||
      _0x73bc7d.includes("data-flow")
    )
      return "data";
    if (
      _0x73bc7d.includes("actor") ||
      _0x73bc7d.includes("boundary") ||
      _0x73bc7d.includes("control")
    )
      return "purple";
    if (_0x73bc7d.includes("activation")) return "neutral";
  }
  return "primary";
}
function xe(_0xcba639, _0x5012f2) {
  return me(_0x5012f2 == null ? undefined : _0x5012f2.id) === C
    ? ye(_0xcba639)
    : be(_0xcba639);
}
function Se(_0xef11de, _0x5a977a, _0x2a4ff0) {
  var _0x556a2b, _0x37b9c1;
  return (
    ((_0x556a2b = _0xef11de.colorScheme) == null
      ? undefined
      : _0x556a2b[_0x5a977a]) ??
    (_0x2a4ff0
      ? (_0x37b9c1 = _0xef11de.colorScheme) == null
        ? undefined
        : _0x37b9c1[_0x2a4ff0]
      : undefined) ??
    O[_0x5a977a] ??
    (_0x2a4ff0 ? O[_0x2a4ff0] : undefined) ??
    _0x5a977a
  );
}
function Ce(_0x38b11f, _0x5b83cc) {
  var _0x4a5c08;
  let _0x552487 = _0x5b83cc ?? ge[0],
    _0x2c14ba = xe(_0x38b11f, _0x552487),
    _0x2c03e0 = D[_0x2c14ba],
    _0x439334 = te[_0x2c14ba],
    _0x11363b = ne[_0x2c14ba],
    _0x4ed06b = Se(_0x552487, _0x2c03e0),
    _0x304d19 = Se(_0x552487, _0x439334, "boardStroke");
  return {
    slot: _0x2c14ba,
    textColor: Se(_0x552487, _0x11363b, "boardText"),
    fill: {
      fillType: r.ShapeFillEnum["SolidFill"],
      color: _0x4ed06b,
      opacity: 1,
    },
    stroke: {
      lineStrokeType: r.ShapeLineTypeEnum["SolidLine"],
      color: _0x304d19,
      width:
        ((_0x4a5c08 = _0x552487.fmtScheme) == null ||
        (_0x4a5c08 = _0x4a5c08.lnStyleLst[1]) == null
          ? undefined
          : _0x4a5c08.width) ?? 2,
      opacity: 1,
    },
  };
}
function we(_0x3c9618, _0x1fc535) {
  var _0x174c81;
  let _0x5f5220 = _0x3c9618 ?? ge[0],
    _0x236014 = _0x1fc535 === "header" ? "Header" : "Strong",
    _0xc405d1 = Se(_0x5f5220, "boardFill" + _0x236014),
    _0x4b971c = Se(_0x5f5220, "boardStroke" + _0x236014);
  return {
    slot: _0x1fc535,
    textColor: Se(_0x5f5220, "boardTextOn" + _0x236014),
    fill: {
      fillType: r.ShapeFillEnum["SolidFill"],
      color: _0xc405d1,
      opacity: 1,
    },
    stroke: {
      lineStrokeType: r.ShapeLineTypeEnum["SolidLine"],
      color: _0x4b971c,
      width:
        ((_0x174c81 = _0x5f5220.fmtScheme) == null ||
        (_0x174c81 = _0x174c81.lnStyleLst[1]) == null
          ? undefined
          : _0x174c81.width) ?? 2,
      opacity: 1,
    },
  };
}
function Te(_0x298e8a, _0x46870d) {
  var _0x1e6ba3;
  return (
    (_0x298e8a == null || (_0x1e6ba3 = _0x298e8a.colorScheme) == null
      ? undefined
      : _0x1e6ba3[_0x46870d]) ?? _e[_0x46870d]
  );
}
function Ee(_0x4c6422) {
  if (!(!_0x4c6422 || typeof _0x4c6422 != "object")) {
    if ("color" in _0x4c6422 && typeof _0x4c6422.color == "string")
      return _0x4c6422.color;
    if (
      "gradientStops" in _0x4c6422 &&
      Array.isArray(_0x4c6422.gradientStops)
    ) {
      let _0x787dc8 = _0x4c6422.gradientStops["find"](
        (_0x17bb95) =>
          !!(
            _0x17bb95 &&
            typeof _0x17bb95 == "object" &&
            "color" in _0x17bb95 &&
            typeof _0x17bb95.color == "string"
          ),
      );
      return _0x787dc8 == null ? undefined : _0x787dc8.color;
    }
  }
}
function De(_0x11107e) {
  if (!(!_0x11107e || typeof _0x11107e != "object"))
    return "color" in _0x11107e && typeof _0x11107e.color == "string"
      ? _0x11107e.color
      : undefined;
}
function Oe(_0x13f5c5) {
  var _0x4fb322, _0x22c2d9;
  let _0x202588 = Te(_0x13f5c5, "acc1"),
    _0x332f54 = Te(_0x13f5c5, "acc2"),
    _0x1f121a = Te(_0x13f5c5, "acc3"),
    _0x5133d4 = Te(_0x13f5c5, "acc4"),
    _0x46edbb = Te(_0x13f5c5, "acc5"),
    _0x555774 = Te(_0x13f5c5, "acc6"),
    _0xb6d4c = Te(_0x13f5c5, "dk1"),
    _0x5bb530 =
      Ee(
        (_0x4fb322 = _0x13f5c5.fmtScheme) == null
          ? undefined
          : _0x4fb322.fillStyleLst[1],
      ) ?? _0x202588,
    _0x2cfe58 =
      De(
        (_0x22c2d9 = _0x13f5c5.fmtScheme) == null
          ? undefined
          : _0x22c2d9.lnStyleLst[1],
      ) ?? Te(_0x13f5c5, "dk2");
  return {
    background: Te(_0x13f5c5, "lt1"),
    text: _0xb6d4c,
    muted: Te(_0x13f5c5, "lt2"),
    accent1: _0x202588,
    accent2: _0x332f54,
    accent3: _0x1f121a,
    accent4: _0x5133d4,
    accent5: _0x46edbb,
    accent6: _0x555774,
    accents: [_0x202588, _0x332f54, _0x1f121a, _0x5133d4, _0x46edbb, _0x555774],
    defaultStyleColors: [_0x5bb530, _0x2cfe58, _0xb6d4c],
  };
}
const ke = { ...ge[0] };
function Ae(_0x5dd7b7) {
  return typeof _0x5dd7b7 == "object" && !!_0x5dd7b7;
}
function je(_0x4002a9) {
  var _0x41039e;
  return (
    typeof (_0x4002a9 == null || (_0x41039e = _0x4002a9.cl) == null
      ? undefined
      : _0x41039e.rgb) == "string" ||
    (_0x4002a9 == null ? undefined : _0x4002a9.textFill) !== undefined
  );
}
function Me(_0x1ad48b) {
  let _0xfdfb = _0x1ad48b == null ? undefined : _0x1ad48b.dataModel;
  return Ae(_0xfdfb) && "doc" in _0xfdfb ? _0xfdfb.doc : undefined;
}
function Ne(_0x257c85) {
  return JSON.parse(JSON.stringify(_0x257c85));
}
function Pe(_0x25ecd3, _0x4b4abb) {
  return je(_0x25ecd3)
    ? _0x25ecd3
    : {
        ..._0x25ecd3,
        cl: {
          ...(_0x25ecd3 == null ? undefined : _0x25ecd3.cl),
          rgb: _0x4b4abb,
        },
      };
}
function Fe(_0xc1b519) {
  var _0x5a337c, _0x4ea39c;
  if (!Ae(_0xc1b519)) return false;
  let _0x59894d = _0xc1b519;
  if (typeof _0x59894d.color == "string" || _0x59894d.textFill !== undefined)
    return true;
  let _0x1deb14 = Me(_0x59894d);
  return je(
    _0x1deb14 == null || (_0x5a337c = _0x1deb14.documentStyle) == null
      ? undefined
      : _0x5a337c.textStyle,
  )
    ? true
    : ((_0x1deb14 == null ||
      (_0x4ea39c = _0x1deb14.body) == null ||
      (_0x4ea39c = _0x4ea39c.textRuns) == null
        ? undefined
        : _0x4ea39c.some((_0x2bedb3) => je(_0x2bedb3.ts))) ?? false);
}
function Ie(_0x16b51d, _0x5979b9) {
  var _0x2605d0, _0xd6e82;
  let _0x3f154f = Ne(_0x16b51d);
  return (
    (_0x3f154f.documentStyle = {
      ..._0x3f154f.documentStyle,
      textStyle: Pe(
        (_0x2605d0 = _0x3f154f.documentStyle) == null
          ? undefined
          : _0x2605d0.textStyle,
        _0x5979b9,
      ),
    }),
    (_0xd6e82 = _0x3f154f.body) != null &&
      (_0xd6e82 = _0xd6e82.textRuns) != null &&
      _0xd6e82.length &&
      (_0x3f154f.body = {
        ..._0x3f154f.body,
        textRuns: _0x3f154f.body["textRuns"].map((_0x3c0121) => ({
          ..._0x3c0121,
          ts: Pe(_0x3c0121.ts, _0x5979b9),
        })),
      }),
    _0x3f154f
  );
}
function Le(_0x53e8b7, _0x3750ce, _0x39c281 = {}) {
  if (!Ae(_0x53e8b7) || Fe(_0x53e8b7)) return _0x53e8b7;
  let _0x20c10a = { ..._0x53e8b7 };
  _0x20c10a.color === undefined &&
    (_0x39c281.defineInheritedValue
      ? _0x39c281.defineInheritedValue(_0x20c10a, "color", _0x3750ce)
      : (_0x20c10a.color = _0x3750ce));
  let _0x531668 = Me(_0x20c10a),
    _0x1531de = _0x20c10a.dataModel;
  return (
    _0x531668 &&
      Ae(_0x1531de) &&
      (_0x20c10a.dataModel = { ..._0x1531de, doc: Ie(_0x531668, _0x3750ce) }),
    _0x20c10a
  );
}
function Re(_0x1cdfb8) {
  return {
    unitId: _0x1cdfb8.unitId,
    subUnitId: _0x1cdfb8.subUnitId,
    drawingId: _0x1cdfb8.elementId,
  };
}
function ze(_0x446c59) {
  return {
    unitId: _0x446c59.unitId,
    subUnitId: _0x446c59.subUnitId,
    elementId: _0x446c59.drawingId,
  };
}
function Be(_0x4ef9d3) {
  return {
    unitId: _0x4ef9d3.unitId,
    subUnitId: _0x4ef9d3.subUnitId,
    drawingIds: _0x4ef9d3.elementIds,
  };
}
function Ve(_0x37bcf9) {
  switch (_0x37bcf9) {
    case s.Image:
      return e.DrawingTypeEnum["DRAWING_IMAGE"];
    case s.Shape:
      return e.DrawingTypeEnum["DRAWING_SHAPE"];
    case s.Chart:
      return e.DrawingTypeEnum["DRAWING_CHART"];
    case s.Table:
      return e.DrawingTypeEnum["DRAWING_TABLE"];
    case s.Group:
      return e.DrawingTypeEnum["DRAWING_GROUP"];
    case s.Media:
      return e.DrawingTypeEnum["DRAWING_VIDEO"];
    default:
      return e.DrawingTypeEnum["DRAWING_SHAPE"];
  }
}
function He(_0x12c25a) {
  return typeof _0x12c25a != "object" || !_0x12c25a
    ? _0x12c25a
    : JSON.parse(JSON.stringify(_0x12c25a));
}
function Ue(_0x23b225, _0x27a5ea, _0xf100bd) {
  return (
    Object.defineProperty(_0x23b225, _0x27a5ea, {
      configurable: true,
      enumerable: false,
      writable: true,
      value: _0xf100bd,
    }),
    _0x23b225
  );
}
function We(_0x38b88d) {
  return {
    ...ke,
    ..._0x38b88d,
    colorScheme: {
      ...ke.colorScheme,
      ...(_0x38b88d == null ? undefined : _0x38b88d.colorScheme),
    },
    fontScheme: {
      ...ke.fontScheme,
      ...(_0x38b88d == null ? undefined : _0x38b88d.fontScheme),
    },
    fmtScheme: {
      ...ke.fmtScheme,
      ...(_0x38b88d == null ? undefined : _0x38b88d.fmtScheme),
    },
  };
}
function Ge(_0x45a5a2, _0x1f6074) {
  var _0x3d36ef;
  return {
    isHorizontal: true,
    isRichText: false,
    text: "",
    fontFamily:
      (_0x3d36ef = _0x45a5a2.fontScheme) == null ? undefined : _0x3d36ef.body,
    fontSize: 18,
    color: _0x1f6074,
    horizontalAlign: "center",
    verticalAlign: "middle",
  };
}
function Ke(_0x64252e) {
  return (
    typeof _0x64252e == "object" && !!_0x64252e && _0x64252e.isRichText !== true
  );
}
function qe(_0x263b5, _0x360ef4) {
  if (_0x263b5.type !== s.Shape) return _0x263b5;
  let _0x252cfd = We(_0x360ef4),
    _0x14b637 = { ..._0x263b5.shapeData },
    _0x1e2317 = Ce(_0x14b637.shapeType, _0x252cfd);
  if (
    (_0x14b637.fill || Ue(_0x14b637, "fill", He(_0x1e2317.fill)),
    _0x14b637.stroke || Ue(_0x14b637, "stroke", He(_0x1e2317.stroke)),
    Ke(_0x14b637.shapeText))
  ) {
    let _0x4bbcb8 = Ge(_0x252cfd, _0x1e2317.textColor),
      _0x5a84b8 = Le(_0x14b637.shapeText, _0x1e2317.textColor, {
        defineInheritedValue: Ue,
      });
    (Object.keys(_0x4bbcb8).forEach((_0x43369f) => {
      _0x5a84b8[_0x43369f] === undefined &&
        Ue(_0x5a84b8, _0x43369f, _0x4bbcb8[_0x43369f]);
    }),
      (_0x14b637.shapeText = _0x5a84b8));
  }
  return { ..._0x263b5, shapeData: _0x14b637 };
}
function Je(_0x511353, _0x40b044, _0x394e1a, _0x3dcd06) {
  let _0x263965 = qe(_0x394e1a, _0x3dcd06),
    _0x45898a = _0x263965.transform;
  return {
    unitId: _0x511353,
    subUnitId: _0x40b044,
    elementId: _0x263965.id,
    drawingId: _0x263965.id,
    drawingType: Ve(_0x263965.type),
    transform: {
      left: _0x45898a.left ?? 0,
      top: _0x45898a.top ?? 0,
      width: _0x45898a.width ?? 0,
      height: _0x45898a.height ?? 0,
      angle: _0x45898a.rotation ?? 0,
      flipX: _0x45898a.flipX,
      flipY: _0x45898a.flipY,
    },
    hidden: _0x263965.visible === false,
    element: _0x263965,
  };
}
function Ye(_0x3049ba, _0xd4914, _0x1196d2, _0x2b2904, _0x42ec56) {
  let _0x93a267 = {},
    _0x28017e = [];
  return (
    _0x2b2904.forEach((_0x599955) => {
      let _0x356445 = _0x1196d2[_0x599955];
      _0x356445 &&
        ((_0x93a267[_0x599955] = Je(_0x3049ba, _0xd4914, _0x356445, _0x42ec56)),
        _0x28017e.push(_0x599955));
    }),
    { data: _0x93a267, order: _0x28017e }
  );
}
function Xe(_0x51f161) {
  return (
    (_0x51f161 == null ? undefined : _0x51f161.element["type"]) === s.Group
  );
}
function Ze(_0x730d26) {
  return (
    (_0x730d26 == null ? undefined : _0x730d26.element["type"]) === s.Group ||
    (_0x730d26 == null ? undefined : _0x730d26.element["type"]) === s.Container
  );
}
function Qe(_0x5dac4a) {
  return (
    (_0x5dac4a == null ? undefined : _0x5dac4a.drawingId) ??
    (_0x5dac4a == null ? undefined : _0x5dac4a.elementId)
  );
}
function $e(_0x4a95a0, _0x15391a) {
  let _0xbc189f = [],
    _0x1e76d0 = new Set();
  return (
    _0x15391a == null ||
      _0x15391a.forEach((_0x5ed392) => {
        let _0x1a15f1 = _0x4a95a0[_0x5ed392];
        !_0x1a15f1 ||
          _0x1e76d0.has(_0x5ed392) ||
          (_0x1e76d0.add(_0x5ed392), _0xbc189f.push(_0x1a15f1));
      }),
    Object.values(_0x4a95a0).forEach((_0x1447f2) => {
      let _0x4275e8 = Qe(_0x1447f2);
      !_0x4275e8 ||
        _0x1e76d0.has(_0x4275e8) ||
        (_0x1e76d0.add(_0x4275e8), _0xbc189f.push(_0x1447f2));
    }),
    _0xbc189f
  );
}
function et(_0x1ee10e, _0x250fad, _0x5c3ec3) {
  let _0xc52d6 = _0x1ee10e[_0x250fad];
  if (!Ze(_0xc52d6)) return [];
  let _0x23af3a = [],
    _0x37fcf7 = new Set(),
    _0x10d7ca = (_0x3c8797) => {
      !_0x3c8797 ||
        _0x3c8797 === _0x250fad ||
        _0x37fcf7.has(_0x3c8797) ||
        (_0x37fcf7.add(_0x3c8797), _0x23af3a.push(_0x3c8797));
    };
  return (
    Xe(_0xc52d6) && (_0xc52d6.element["children"] ?? []).forEach(_0x10d7ca),
    $e(_0x1ee10e, _0x5c3ec3).forEach((_0x2dfad0) => {
      (_0x2dfad0.groupId === _0x250fad ||
        _0x2dfad0.element["parentId"] === _0x250fad) &&
        _0x10d7ca(Qe(_0x2dfad0));
    }),
    _0x23af3a
  );
}
function tt(_0x3dd543, _0x627285, _0xc7f972) {
  let _0x55761c = [],
    _0x5bf0bd = new Set(),
    _0x10bb2c = (_0x2445e2) => {
      et(_0x3dd543, _0x2445e2, _0xc7f972).forEach((_0x557496) => {
        _0x5bf0bd.has(_0x557496) ||
          (_0x5bf0bd.add(_0x557496),
          _0x55761c.push(_0x557496),
          Ze(_0x3dd543[_0x557496]) && _0x10bb2c(_0x557496));
      });
    };
  return (_0x10bb2c(_0x627285), _0x55761c);
}
function nt(_0x299ee0, _0x5b6336, _0x546306) {
  let _0x4edd26 = new Set();
  _0x546306.forEach((_0x395ccf) => {
    let _0x49bb04 = _0x299ee0[_0x395ccf];
    _0x49bb04 &&
      (_0x4edd26.add(_0x395ccf),
      Ze(_0x49bb04) &&
        tt(_0x299ee0, _0x395ccf, _0x5b6336).forEach((_0x4ec805) => {
          _0x299ee0[_0x4ec805] && _0x4edd26.add(_0x4ec805);
        }));
  });
  let _0x294d43 = new Map();
  return (
    _0x5b6336.forEach((_0x237c0b, _0x425426) =>
      _0x294d43.set(_0x237c0b, _0x425426),
    ),
    Array.from(_0x4edd26).sort(
      (_0x167cfb, _0xa930d1) =>
        (_0x294d43.get(_0x167cfb) ?? 2 ** 53 - 1) -
        (_0x294d43.get(_0xa930d1) ?? 2 ** 53 - 1),
    )
  );
}
var rt = class extends n.UnitDrawingService {
  get elementAdd$() {
    return this.add$["pipe"]((0, t.map)((_0x4bff02) => _0x4bff02.map(ze)));
  }
  get elementUpdate$() {
    return this.update$["pipe"]((0, t.map)((_0x5e0812) => _0x5e0812.map(ze)));
  }
  get elementRemove$() {
    return this.remove$["pipe"]((0, t.map)((_0x51fa24) => _0x51fa24.map(ze)));
  }
  getElementDataForUnit(_0xe626bc) {
    return this.getDrawingDataForUnit(_0xe626bc);
  }
  removeElementDataForUnit(_0x4f9816) {
    this.removeDrawingDataForUnit(_0x4f9816);
  }
  registerElementData(_0x209e7c, _0x3a292c) {
    this.registerDrawingData(_0x209e7c, _0x3a292c);
  }
  getElementData(_0x313329, _0x407fc8) {
    return this.getDrawingData(_0x313329, _0x407fc8);
  }
  getElementOrder(_0x2df34a, _0x3af59b) {
    return this.getDrawingOrder(_0x2df34a, _0x3af59b);
  }
  setElementOrder(_0x29b371, _0x304028, _0x2d6146) {
    this.setDrawingOrder(_0x29b371, _0x304028, _0x2d6146);
  }
  getElementById(_0x250a90, _0x2b5554, _0x2f494b) {
    return this.getElementData(_0x250a90, _0x2b5554)[_0x2f494b];
  }
  getElementByParam(_0x447af4) {
    return this.getElementById(
      _0x447af4.unitId,
      _0x447af4.subUnitId,
      _0x447af4.elementId,
    );
  }
  focusElements(_0x5580c0) {
    this.focusDrawing(
      (_0x5580c0 == null ? undefined : _0x5580c0.map(Re)) ?? null,
    );
  }
  getFocusElements() {
    return this.getFocusDrawings();
  }
  initializeElementNotification(_0x3082cf) {
    this.initializeNotification(_0x3082cf);
  }
  addElementNotification(_0x5355ab) {
    this.addNotification(_0x5355ab.map(Re));
  }
  updateElementNotification(_0x57fe6f) {
    this.updateNotification(_0x57fe6f.map(Re));
  }
  removeElementNotification(_0x32c93b) {
    this.removeNotification(_0x32c93b.map(Re));
  }
  getBatchAddElementOp(_0x565b98) {
    return this.getBatchAddOp(_0x565b98);
  }
  getBatchUpdateElementOp(_0x32a572) {
    return this.getBatchUpdateOp(_0x32a572);
  }
  getBatchRemoveElementOp(_0x3d6250) {
    return this.getBatchRemoveOp(_0x3d6250.map(Re));
  }
  getFrontElementsOp(_0x44d2b8) {
    return this.getFrontDrawingsOp(Be(_0x44d2b8));
  }
  getBackElementsOp(_0x10058d) {
    return this.getBackDrawingsOp(Be(_0x10058d));
  }
  orderElementUpdateNotification(_0x31f22d) {
    super.orderUpdateNotification(Be(_0x31f22d));
  }
  applyElementJson1(_0x182a3a, _0x543ff9, _0x3acd27) {
    this.applyJson1(_0x182a3a, _0x543ff9, _0x3acd27);
  }
  removeDrawingsWithoutGroupExpansion(_0x365158) {
    var _0x2c04ef;
    if (_0x365158.length === 0) return [];
    let { unitId: _0x40d755, subUnitId: _0x45e8dd } = _0x365158[0],
      _0x33ca40 = new Set(),
      _0x35e32c = this.getDrawingOrder(_0x40d755, _0x45e8dd),
      _0x36fda2 = new Map();
    _0x35e32c.forEach((_0x1c80dc, _0x1f57a9) =>
      _0x36fda2.set(_0x1c80dc, _0x1f57a9),
    );
    let _0x204631 =
      (_0x2c04ef = this.drawingManagerData[_0x40d755]) == null
        ? undefined
        : _0x2c04ef[_0x45e8dd];
    if (!_0x204631) return [];
    let _0x962e63 = _0x365158
      .filter((_0x19b738) =>
        _0x33ca40.has(_0x19b738.drawingId) || !this.getDrawingByParam(_0x19b738)
          ? false
          : (_0x33ca40.add(_0x19b738.drawingId), true),
      )
      .sort(
        (_0x510bbd, _0x27e374) =>
          (_0x36fda2.get(_0x510bbd.drawingId) ?? -1 / 0) -
          (_0x36fda2.get(_0x27e374.drawingId) ?? -1 / 0),
      );
    return (
      [..._0x962e63]
        .sort((_0x1d7392, _0x2377bc) => {
          let _0x159485 = _0x36fda2.get(_0x1d7392.drawingId) ?? -1 / 0;
          return (_0x36fda2.get(_0x2377bc.drawingId) ?? -1 / 0) - _0x159485;
        })
        .forEach((_0x466c49) => {
          delete _0x204631.data[_0x466c49.drawingId];
          let _0x4d1162 = _0x204631.order["indexOf"](_0x466c49.drawingId);
          _0x4d1162 >= 0 && _0x204631.order["splice"](_0x4d1162, 1);
        }),
      _0x962e63
    );
  }
  getDrawingsByGroup(_0x48935f) {
    let {
        unitId: _0x396942,
        subUnitId: _0xe6614b,
        drawingId: _0x4bc2b0,
      } = _0x48935f,
      _0x304ee1 = this.getDrawingData(_0x396942, _0xe6614b);
    return et(_0x304ee1, _0x4bc2b0, this.getDrawingOrder(_0x396942, _0xe6614b))
      .map((_0x5ab713) => _0x304ee1[_0x5ab713])
      .filter((_0x2cfa73) => !!_0x2cfa73);
  }
  getDrawingsByGroupNested(_0x4b65c7) {
    let { unitId: _0x77fd20, subUnitId: _0x2388f9 } = _0x4b65c7,
      _0x1a459a = this.getDrawingByParam(_0x4b65c7);
    if (!Ze(_0x1a459a)) return null;
    let _0x215d48 = this.getDrawingData(_0x77fd20, _0x2388f9),
      _0x23f54a = [],
      _0x180275 = [],
      _0x2309c8 = {},
      _0x9b8e8a = new Set(),
      _0x4f28cb = (_0x2de6e3) => {
        let _0x44ef09 = _0x2de6e3.drawingId;
        if (_0x9b8e8a.has(_0x44ef09)) return;
        _0x9b8e8a.add(_0x44ef09);
        let _0x8a1ebe = et(_0x215d48, _0x44ef09);
        ((_0x2309c8[_0x44ef09] = { drawingId: _0x44ef09, children: _0x8a1ebe }),
          _0x8a1ebe.forEach((_0x2966bf) => {
            let _0x58709d = _0x215d48[_0x2966bf];
            if (_0x58709d) {
              if (Ze(_0x58709d)) {
                (_0x4f28cb(_0x58709d), _0x180275.push(_0x58709d));
                return;
              }
              _0x23f54a.push(_0x58709d);
            }
          }));
      };
    return (
      _0x4f28cb(_0x1a459a),
      _0x180275.push(_0x1a459a),
      { nestedIdRecord: _0x2309c8, flatChildren: _0x23f54a, groups: _0x180275 }
    );
  }
};
function it(_0x516abe) {
  "@babel/helpers - typeof";
  return (
    (it =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0xc8c0aa) {
            return typeof _0xc8c0aa;
          }
        : function (_0x107c87) {
            return _0x107c87 &&
              typeof Symbol == "function" &&
              _0x107c87.constructor === Symbol &&
              _0x107c87 !== Symbol.prototype
              ? "symbol"
              : typeof _0x107c87;
          }),
    it(_0x516abe)
  );
}
function at(_0x194b7c, _0x4727ae) {
  if (it(_0x194b7c) != "object" || !_0x194b7c) return _0x194b7c;
  var _0x4d6cd7 = _0x194b7c[Symbol.toPrimitive];
  if (_0x4d6cd7 !== undefined) {
    var _0x5f0989 = _0x4d6cd7.call(_0x194b7c, _0x4727ae || "default");
    if (it(_0x5f0989) != "object") return _0x5f0989;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x4727ae === "string" ? String : Number)(_0x194b7c);
}
function ot(_0x3840fe) {
  var _0x108e54 = at(_0x3840fe, "string");
  return it(_0x108e54) == "symbol" ? _0x108e54 : _0x108e54 + "";
}
function M(_0x3e1cc4, _0x13a4ed, _0x1e863f) {
  return (
    (_0x13a4ed = ot(_0x13a4ed)) in _0x3e1cc4
      ? Object.defineProperty(_0x3e1cc4, _0x13a4ed, {
          value: _0x1e863f,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x3e1cc4[_0x13a4ed] = _0x1e863f),
    _0x3e1cc4
  );
}
const N = (0, e.createIdentifier)("board.element.service");
var st = class {
  constructor() {
    M(this, "_bridgeService", new rt());
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
      (0, t.map)((_0x1a64c7) => ({
        unitId: _0x1a64c7.unitId,
        subUnitId: _0x1a64c7.subUnitId,
        elementIds: _0x1a64c7.drawingIds,
      })),
    );
  }
  getElementDataForUnit(_0x534ae6) {
    return this._bridgeService["getElementDataForUnit"](_0x534ae6);
  }
  removeElementDataForUnit(_0x5f1670) {
    this._bridgeService["removeElementDataForUnit"](_0x5f1670);
  }
  registerElementData(_0x38482f, _0x5ecc3f) {
    this._bridgeService["registerElementData"](_0x38482f, _0x5ecc3f);
  }
  getElementData(_0x1657f2, _0x23fddf) {
    return this._bridgeService["getElementData"](_0x1657f2, _0x23fddf);
  }
  getElementOrder(_0x454cc5, _0x5b87f9) {
    return this._bridgeService["getElementOrder"](_0x454cc5, _0x5b87f9);
  }
  setElementOrder(_0x1f0faf, _0x2170db, _0x2c7814) {
    this._bridgeService["setElementOrder"](_0x1f0faf, _0x2170db, _0x2c7814);
  }
  getElementById(_0x3cc7da, _0x25f0bd, _0x3389df) {
    return this._bridgeService["getElementById"](
      _0x3cc7da,
      _0x25f0bd,
      _0x3389df,
    );
  }
  getElementByParam(_0x1ae76a) {
    return this._bridgeService["getElementByParam"](_0x1ae76a);
  }
  focusElements(_0x17cdc5) {
    this._bridgeService["focusElements"](_0x17cdc5);
  }
  getFocusElements() {
    return this._bridgeService["getFocusElements"]();
  }
  initializeElementNotification(_0x2571a9) {
    this._bridgeService["initializeElementNotification"](_0x2571a9);
  }
  addElementNotification(_0x13bc1b) {
    this._bridgeService["addElementNotification"](_0x13bc1b);
  }
  updateElementNotification(_0x2a8541) {
    this._bridgeService["updateElementNotification"](_0x2a8541);
  }
  removeElementNotification(_0x3db643) {
    this._bridgeService["removeElementNotification"](_0x3db643);
  }
  getBatchAddElementOp(_0x3322df) {
    return this._bridgeService["getBatchAddElementOp"](_0x3322df);
  }
  getBatchUpdateElementOp(_0x3ab302) {
    return this._bridgeService["getBatchUpdateElementOp"](_0x3ab302);
  }
  getBatchRemoveElementOp(_0x18908b) {
    return this._bridgeService["getBatchRemoveElementOp"](_0x18908b);
  }
  getFrontElementsOp(_0x1149ac) {
    return this._bridgeService["getFrontElementsOp"](_0x1149ac);
  }
  getBackElementsOp(_0x3ab2d2) {
    return this._bridgeService["getBackElementsOp"](_0x3ab2d2);
  }
  orderUpdateNotification(_0x71c76d) {
    this._bridgeService["orderElementUpdateNotification"](_0x71c76d);
  }
  applyElementJson1(_0x15a128, _0x3b2cb9, _0x1ebcc4) {
    this._bridgeService["applyElementJson1"](_0x15a128, _0x3b2cb9, _0x1ebcc4);
  }
};
const P = {
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
  ct = "#f3f6fc",
  lt = "#eee7ff",
  ut = "#000000",
  dt = "#ffffff",
  F = {
    color: ut,
    width: 4,
    capType: r.ShapeLineCapEnum["Round"],
    lineJoinType: r.ShapeLineJoinEnum["Round"],
  };
function ft(_0x4d9ae0, _0xcce0cc, _0x3b20d4) {
  return _0x3b20d4.map((_0x55fafb) => ({
    w: _0x4d9ae0,
    h: _0xcce0cc,
    ..._0x55fafb,
  }));
}
function pt(
  _0x37bcb3,
  _0x50f865,
  _0x5990a8,
  _0x31e146,
  _0xeb1cee,
  _0x551be1 = _0xeb1cee,
) {
  return {
    w: _0x37bcb3,
    h: _0x50f865,
    stroke: true,
    dataArray: [
      { command: "M", points: [_0x5990a8 + _0xeb1cee, _0x31e146] },
      { command: "A", points: [_0xeb1cee, _0x551be1, 0, 21600000] },
      { command: "z", points: [] },
    ],
  };
}
function mt(
  _0x589c29,
  _0x459279,
  _0x2adbf0,
  _0x2fed62,
  _0x1bf214,
  _0x4dca42,
  _0x54c3c9,
) {
  return {
    w: _0x589c29,
    h: _0x459279,
    stroke: true,
    dataArray: [
      { command: "M", points: [_0x2adbf0 + _0x54c3c9, _0x2fed62] },
      { command: "L", points: [_0x1bf214 - _0x54c3c9, _0x2fed62] },
      {
        command: "Q",
        points: [_0x1bf214, _0x2fed62, _0x1bf214, _0x2fed62 + _0x54c3c9],
      },
      { command: "L", points: [_0x1bf214, _0x4dca42 - _0x54c3c9] },
      {
        command: "Q",
        points: [_0x1bf214, _0x4dca42, _0x1bf214 - _0x54c3c9, _0x4dca42],
      },
      { command: "L", points: [_0x2adbf0 + _0x54c3c9, _0x4dca42] },
      {
        command: "Q",
        points: [_0x2adbf0, _0x4dca42, _0x2adbf0, _0x4dca42 - _0x54c3c9],
      },
      { command: "L", points: [_0x2adbf0, _0x2fed62 + _0x54c3c9] },
      {
        command: "Q",
        points: [_0x2adbf0, _0x2fed62, _0x2adbf0 + _0x54c3c9, _0x2fed62],
      },
      { command: "z", points: [] },
    ],
  };
}
function ht(_0x4e204f, _0x2f0436, _0x38021a) {
  return {
    w: _0x4e204f,
    h: _0x2f0436,
    fill: "none",
    dataArray: [
      { command: "M", points: [_0x38021a[0], _0x38021a[1]] },
      { command: "L", points: [_0x38021a[2], _0x38021a[3]] },
    ],
  };
}
function gt(
  _0x2c3b08,
  _0x557268,
  _0x2bbdae,
  _0x59071d,
  _0x373674,
  _0x5772b4 = {},
) {
  return {
    w: _0x2c3b08,
    h: _0x557268,
    stroke: _0x5772b4.stroke,
    fill: _0x5772b4.fill,
    dataArray: [
      { command: "M", points: [_0x2bbdae + _0x373674, _0x59071d] },
      { command: "A", points: [_0x373674, _0x373674, 0, 21600000] },
      { command: "z", points: [] },
    ],
  };
}
function _t(
  _0x4f2345,
  _0x239f70,
  _0x41eb69,
  _0x34a523,
  _0x10a406,
  _0x24c14d,
  _0x5e2796,
) {
  return {
    ...mt(
      _0x4f2345,
      _0x239f70,
      _0x41eb69,
      _0x34a523,
      _0x10a406,
      _0x24c14d,
      _0x5e2796,
    ),
    stroke: false,
  };
}
function vt(_0x52b57a, _0x5ac628, _0x2ef630) {
  return { w: _0x52b57a, h: _0x5ac628, fill: "none", dataArray: _0x2ef630 };
}
function yt(
  _0x231a0b,
  _0x36fc6c,
  _0x55fb30,
  _0x578624,
  _0x4a12b2,
  _0x6477b3,
  _0x471e3d,
) {
  return ft(_0x231a0b, _0x36fc6c, [
    {
      stroke: false,
      dataArray: [
        { command: "M", points: [_0x4a12b2, _0x578624] },
        { command: "L", points: [_0x55fb30 + _0x471e3d, _0x578624] },
        {
          command: "Q",
          points: [_0x55fb30, _0x578624, _0x55fb30, _0x578624 + _0x471e3d],
        },
        { command: "L", points: [_0x55fb30, _0x6477b3 - _0x471e3d] },
        {
          command: "Q",
          points: [_0x55fb30, _0x6477b3, _0x55fb30 + _0x471e3d, _0x6477b3],
        },
        { command: "L", points: [_0x4a12b2, _0x6477b3] },
        { command: "L", points: [_0x4a12b2, _0x578624] },
        { command: "z", points: [] },
      ],
    },
    {
      fill: "none",
      dataArray: [
        { command: "M", points: [_0x4a12b2, _0x578624] },
        { command: "L", points: [_0x55fb30 + _0x471e3d, _0x578624] },
        {
          command: "Q",
          points: [_0x55fb30, _0x578624, _0x55fb30, _0x578624 + _0x471e3d],
        },
        { command: "L", points: [_0x55fb30, _0x6477b3 - _0x471e3d] },
        {
          command: "Q",
          points: [_0x55fb30, _0x6477b3, _0x55fb30 + _0x471e3d, _0x6477b3],
        },
        { command: "L", points: [_0x4a12b2, _0x6477b3] },
      ],
    },
  ]);
}
const bt = {
  [P.Actor]: {
    shapeType: P.Actor,
    defaultShapeData: { fill: { color: ct }, stroke: F },
    geometry: {
      pathLst: [
        pt(172, 244, 86, 55, 36),
        ...ft(172, 244, [
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
  [P.Boundary]: {
    shapeType: P.Boundary,
    defaultShapeData: { fill: { color: ct }, stroke: F },
    geometry: {
      pathLst: [
        pt(172, 124, 94, 65, 43),
        ...ft(172, 124, [
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
  [P.Control]: {
    shapeType: P.Control,
    defaultShapeData: { fill: { color: ct }, stroke: F },
    geometry: {
      pathLst: [
        pt(152, 140, 72, 77, 43),
        ...ft(152, 140, [
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
  [P.Entity]: {
    shapeType: P.Entity,
    defaultShapeData: { fill: { color: ct }, stroke: F },
    geometry: {
      pathLst: [
        pt(154, 158, 72, 76, 43),
        ...ft(154, 158, [
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
  [P.Collection]: {
    shapeType: P.Collection,
    defaultShapeData: { fill: { color: ct }, stroke: F },
    geometry: {
      pathLst: [
        mt(332, 194, 54, 26, 296, 156, 10),
        mt(332, 194, 35, 44, 277, 175, 10),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.DataStorage1]: {
    shapeType: P.DataStorage1,
    defaultShapeData: { fill: { color: lt }, stroke: F },
    geometry: {
      pathLst: yt(402, 162, 26, 33, 402, 140, 13),
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.DataStorage2]: {
    shapeType: P.DataStorage2,
    defaultShapeData: { fill: { color: lt }, stroke: F },
    geometry: {
      pathLst: [
        ...yt(412, 152, 36, 27, 412, 134, 13),
        ...ft(412, 152, [
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
  [P.DataStorage3]: {
    shapeType: P.DataStorage3,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["NoFill"] },
      stroke: F,
    },
    geometry: {
      pathLst: ft(318, 234, [
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
  [P.Component]: {
    shapeType: P.Component,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: dt },
      stroke: F,
    },
    geometry: {
      pathLst: [
        mt(432, 304, 44, 42, 412, 284, 12),
        mt(432, 304, 20, 110, 64, 148, 8),
        mt(432, 304, 20, 180, 64, 218, 8),
        ...ft(432, 304, [
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
  [P.ComponentBox]: {
    shapeType: P.ComponentBox,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: dt },
      stroke: F,
    },
    geometry: {
      pathLst: [
        mt(416, 284, 23, 21, 414, 263, 13),
        mt(416, 284, 350, 38, 397, 84, 4),
        mt(416, 284, 341, 47, 364, 56, 3),
        mt(416, 284, 341, 60, 364, 69, 3),
        mt(416, 284, 341, 73, 364, 82, 3),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.ProvidedInterface]: {
    shapeType: P.ProvidedInterface,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: dt },
      stroke: F,
    },
    geometry: {
      pathLst: [
        ht(160, 110, [35, 57, 58, 57]),
        gt(160, 110, 94, 57, 36, { fill: "none" }),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.AssemblyConnector]: {
    shapeType: P.AssemblyConnector,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: dt },
      stroke: F,
    },
    geometry: {
      pathLst: [
        gt(176, 144, 78, 72, 43, { fill: "none" }),
        vt(176, 144, [
          { command: "M", points: [87, 21] },
          { command: "C", points: [142, 27, 153, 115, 87, 123] },
        ]),
        ht(176, 144, [18, 70, 35, 70]),
        ht(176, 144, [122, 70, 158, 70]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.RequiredInterface]: {
    shapeType: P.RequiredInterface,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["NoFill"] },
      stroke: F,
    },
    geometry: {
      pathLst: [
        vt(112, 144, [
          { command: "M", points: [42, 16] },
          { command: "C", points: [93, 21, 97, 119, 42, 128] },
        ]),
        ht(112, 144, [86, 72, 111, 72]),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.InitialState]: {
    shapeType: P.InitialState,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: ut },
      stroke: F,
    },
    geometry: {
      pathLst: [gt(96, 96, 48, 48, 38, { stroke: false })],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.FinalState]: {
    shapeType: P.FinalState,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: ut },
      stroke: F,
    },
    geometry: {
      pathLst: [
        gt(120, 120, 60, 60, 46, { fill: "none" }),
        gt(120, 120, 60, 60, 30, { stroke: false }),
      ],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
  [P.StateBar]: {
    shapeType: P.StateBar,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: ut },
      stroke: F,
    },
    geometry: {
      pathLst: [_t(112, 28, 5, 5, 107, 23, 7)],
      rect: { l: "l", t: "t", r: "r", b: "b" },
    },
  },
};
function xt(_0x101396) {
  let _0x16bf2f = {},
    _0x56715a = _0x101396.pathLst["map"]((_0x44da06, _0x41df36) => {
      var _0x425469;
      let _0x444429 = _0x44da06.dataArray;
      if (
        ((_0x425469 = _0x444429[2]) == null ? undefined : _0x425469.command) !==
        "Q"
      )
        return _0x44da06;
      let [_0x50b8fc, _0x219c3c, , _0x3a0086] = _0x444429[2].points,
        [_0x20a524, _0x94add2] = _0x444429[6].points,
        _0x2245e2 = _0x3a0086 - _0x219c3c,
        _0x4a4b59 = "corner" + _0x41df36,
        _0x23c188 = (_0x404ccd) => "" + _0x4a4b59 + _0x404ccd;
      return (
        (_0x16bf2f[_0x23c188("l")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "w",
          _0x20a524,
          Number(_0x44da06.w),
        ]),
        (_0x16bf2f[_0x23c188("r")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "w",
          _0x50b8fc,
          Number(_0x44da06.w),
        ]),
        (_0x16bf2f[_0x23c188("t")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "h",
          _0x219c3c,
          Number(_0x44da06.h),
        ]),
        (_0x16bf2f[_0x23c188("b")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "h",
          _0x94add2,
          Number(_0x44da06.h),
        ]),
        (_0x16bf2f[_0x23c188("hw")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "w",
          (_0x50b8fc - _0x20a524) / 2,
          Number(_0x44da06.w),
        ]),
        (_0x16bf2f[_0x23c188("hh")] = [
          r.ShapeOperatorEnum["MulDiv"],
          "h",
          (_0x94add2 - _0x219c3c) / 2,
          Number(_0x44da06.h),
        ]),
        (_0x16bf2f[_0x23c188("half")] = [
          r.ShapeOperatorEnum["Min"],
          _0x23c188("hw"),
          _0x23c188("hh"),
        ]),
        (_0x16bf2f[_0x23c188("radius")] = [
          r.ShapeOperatorEnum["Min"],
          _0x2245e2,
          _0x23c188("half"),
        ]),
        (_0x16bf2f[_0x23c188("x1")] = [
          r.ShapeOperatorEnum["AddSub"],
          _0x23c188("l"),
          _0x23c188("radius"),
          0,
        ]),
        (_0x16bf2f[_0x23c188("x2")] = [
          r.ShapeOperatorEnum["AddSub"],
          _0x23c188("r"),
          0,
          _0x23c188("radius"),
        ]),
        (_0x16bf2f[_0x23c188("y1")] = [
          r.ShapeOperatorEnum["AddSub"],
          _0x23c188("t"),
          _0x23c188("radius"),
          0,
        ]),
        (_0x16bf2f[_0x23c188("y2")] = [
          r.ShapeOperatorEnum["AddSub"],
          _0x23c188("b"),
          0,
          _0x23c188("radius"),
        ]),
        {
          stroke: _0x44da06.stroke,
          dataArray: [
            { command: "M", points: [_0x23c188("x1"), _0x23c188("t")] },
            { command: "L", points: [_0x23c188("x2"), _0x23c188("t")] },
            {
              command: "Q",
              points: [
                _0x23c188("r"),
                _0x23c188("t"),
                _0x23c188("r"),
                _0x23c188("y1"),
              ],
            },
            { command: "L", points: [_0x23c188("r"), _0x23c188("y2")] },
            {
              command: "Q",
              points: [
                _0x23c188("r"),
                _0x23c188("b"),
                _0x23c188("x2"),
                _0x23c188("b"),
              ],
            },
            { command: "L", points: [_0x23c188("x1"), _0x23c188("b")] },
            {
              command: "Q",
              points: [
                _0x23c188("l"),
                _0x23c188("b"),
                _0x23c188("l"),
                _0x23c188("y2"),
              ],
            },
            { command: "L", points: [_0x23c188("l"), _0x23c188("y1")] },
            {
              command: "Q",
              points: [
                _0x23c188("l"),
                _0x23c188("t"),
                _0x23c188("x1"),
                _0x23c188("t"),
              ],
            },
            { command: "z", points: [] },
          ],
        }
      );
    });
  return { ..._0x101396, gd: _0x16bf2f, pathLst: _0x56715a };
}
const St = { ...bt };
for (let e of [P.Collection, P.Component, P.ComponentBox]) {
  let t = bt[e];
  St[e] = { ...t, geometry: xt(t.geometry) };
}
St[P.StateBar] = {
  ...bt[P.StateBar],
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
function Ct(_0x4cc5f8) {
  if (_0x4cc5f8.type !== s.Shape || _0x4cc5f8.shapeData["isCustom"] !== true)
    return _0x4cc5f8;
  let _0x46c1a4 = String(_0x4cc5f8.shapeData["shapeType"] ?? "");
  if (!wt(_0x46c1a4)) return _0x4cc5f8;
  let _0x3deeae = bt[_0x46c1a4],
    _0x482ea1 = St[_0x46c1a4];
  return !_0x3deeae ||
    _0x3deeae === _0x482ea1 ||
    !e.Tools["diffValue"](
      _0x4cc5f8.shapeData["customGeometry"],
      _0x3deeae.geometry,
    )
    ? _0x4cc5f8
    : {
        ..._0x4cc5f8,
        shapeData: {
          ..._0x4cc5f8.shapeData,
          customGeometry: e.Tools["deepClone"](_0x482ea1.geometry),
        },
      };
}
Object.values(P);
function wt(_0x39524a) {
  return _0x39524a in St;
}
function Tt(_0x5a5078) {
  return wt(_0x5a5078) ? St[_0x5a5078] : undefined;
}
const I = {
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
  Et = {
    Object: "object",
    MagneticDisk: "magnetic_disk",
    DirectAccessStorage: "direct_access_storage",
  },
  Dt = {
    color: "#000000",
    width: 4,
    capType: r.ShapeLineCapEnum["Round"],
    lineJoinType: r.ShapeLineJoinEnum["Round"],
  };
(I.ActorLifeline,
  I.BoundaryLifeline,
  I.ControlLifeline,
  I.EntityLifeline,
  I.CollectionLifeline,
  I.ObjectLifeline,
  I.MagneticDiskLifeline,
  I.DirectAccessStorageLifeline);
function Ot(_0xbe6aab) {
  return _0xbe6aab in Mt;
}
function kt(_0x59e9e2) {
  let _0x1e6fc2 = (_0x59e9e2 == null ? undefined : _0x59e9e2.pathLst) ?? [],
    _0x1b9659 = Math.max(..._0x1e6fc2.map((_0x435e46) => _0x435e46.w ?? 0)),
    _0x54a7a4 = Math.max(..._0x1e6fc2.map((_0x3a57cf) => _0x3a57cf.h ?? 0));
  if (_0x1b9659 <= 0 || _0x54a7a4 <= 0) return { width: 96, height: 96 };
  let _0x408f0b = 96 / Math.max(_0x1b9659, _0x54a7a4);
  return {
    width: Math.round(_0x1b9659 * _0x408f0b),
    height: Math.round(_0x54a7a4 * _0x408f0b),
  };
}
function At(_0x59a6d4, _0x15eb4a, _0x4195d1) {
  var _0xa4b8bc, _0x319392;
  let _0x2ba7de = Tt(_0x15eb4a);
  return {
    shapeType: _0x59a6d4,
    participantShapeType: _0x15eb4a,
    geometry: (_0x2ba7de == null ? undefined : _0x2ba7de.geometry) ?? {
      pathLst: [],
    },
    defaultSize:
      _0x4195d1 ?? kt(_0x2ba7de == null ? undefined : _0x2ba7de.geometry),
    defaultShapeData: {
      fill:
        _0x2ba7de == null || (_0xa4b8bc = _0x2ba7de.defaultShapeData) == null
          ? undefined
          : _0xa4b8bc.fill,
      stroke:
        (_0x2ba7de == null || (_0x319392 = _0x2ba7de.defaultShapeData) == null
          ? undefined
          : _0x319392.stroke) ?? Dt,
      sequenceLifeline: {
        participantShapeType: _0x15eb4a,
        lifelineHeight: 320,
        minLifelineHeight: 80,
      },
    },
  };
}
function jt(_0x3ebac7, _0x52f8f7, _0x3ca6b9, _0x554031) {
  return {
    shapeType: _0x3ebac7,
    participantShapeType: _0x52f8f7,
    defaultSize: _0x554031,
    defaultShapeData: {
      fill: { fillType: r.ShapeFillEnum["SolidFill"], color: "#f3f6fc" },
      stroke: Dt,
      sequenceLifeline: {
        participantShapeType: _0x52f8f7,
        participantEngineShapeType: _0x3ca6b9,
        lifelineHeight: 320,
        minLifelineHeight: 80,
      },
    },
  };
}
const Mt = {
  [I.ActorLifeline]: At(I.ActorLifeline, P.Actor),
  [I.BoundaryLifeline]: At(I.BoundaryLifeline, P.Boundary),
  [I.ControlLifeline]: At(I.ControlLifeline, P.Control),
  [I.EntityLifeline]: At(I.EntityLifeline, P.Entity),
  [I.CollectionLifeline]: At(I.CollectionLifeline, P.Collection, {
    width: 96,
    height: 56,
  }),
  [I.ObjectLifeline]: jt(
    I.ObjectLifeline,
    Et.Object,
    r.ShapeTypeEnum["RoundRect"],
    { width: 96, height: 46 },
  ),
  [I.MagneticDiskLifeline]: jt(
    I.MagneticDiskLifeline,
    Et.MagneticDisk,
    r.ShapeTypeEnum["FlowchartMagneticDisk"],
    { width: 85, height: 96 },
  ),
  [I.DirectAccessStorageLifeline]: jt(
    I.DirectAccessStorageLifeline,
    Et.DirectAccessStorage,
    r.ShapeTypeEnum["FlowchartMagneticDrum"],
    { width: 96, height: 59 },
  ),
  [I.ActivationBar]: {
    shapeType: I.ActivationBar,
    geometry: {
      gd: {
        halfMin: [r.ShapeOperatorEnum["MulDiv"], "ss", 1, 2],
        radius: [r.ShapeOperatorEnum["Min"], "halfMin", 4],
        x2: [r.ShapeOperatorEnum["AddSub"], "w", 0, "radius"],
        y2: [r.ShapeOperatorEnum["AddSub"], "h", 0, "radius"],
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
      fill: { color: "#ffffff", fillType: r.ShapeFillEnum["SolidFill"] },
      stroke: Dt,
      sequenceActivation: { attachableToLifeline: true },
    },
  },
};
Object.values(I);
const Nt = {
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
function Pt(_0x2709ed) {
  var _0x5ec98e;
  return _0x2709ed.type !== s.Shape ||
    ((_0x5ec98e = _0x2709ed.shapeData) == null
      ? undefined
      : _0x5ec98e.shapeType) !== I.ActivationBar ||
    _0x2709ed.shapeData["isCustom"] !== true ||
    !e.Tools["diffValue"](_0x2709ed.shapeData["customGeometry"], Nt)
    ? _0x2709ed
    : {
        ..._0x2709ed,
        shapeData: {
          ..._0x2709ed.shapeData,
          customGeometry: e.Tools["deepClone"](Mt[I.ActivationBar].geometry),
        },
      };
}
function Ft(_0x50f431) {
  return Ot(_0x50f431) ? Mt[_0x50f431] : undefined;
}
function It(_0x5850f9) {
  return _0x5850f9 == null ? undefined : _0x5850f9.sequenceLifeline;
}
function Lt(_0x2e1bf5) {
  return _0x2e1bf5 == null ? undefined : _0x2e1bf5.sequenceActivation;
}
function Rt(_0x5381e8) {
  let _0x2a5f18 = _0x5381e8 == null ? undefined : _0x5381e8.shapeData;
  return !!_0x2a5f18 && !!It(_0x2a5f18);
}
function zt(_0xa23989) {
  var _0x2e0371;
  let _0x20b9d0 = _0xa23989 == null ? undefined : _0xa23989.shapeData;
  return (
    !!_0x20b9d0 &&
    ((_0x2e0371 = Lt(_0x20b9d0)) == null
      ? undefined
      : _0x2e0371.attachableToLifeline) === true
  );
}
function Bt(_0x1f59ed) {
  return _0x1f59ed == null ? undefined : _0x1f59ed.element["parentId"];
}
function Vt(_0x4cd30d) {
  return (
    (_0x4cd30d == null ? undefined : _0x4cd30d.element["type"]) === s.Container
  );
}
function L(_0x168606, _0x493208) {
  let _0x19f945 = [],
    _0x36df8c = new Set([_0x493208]),
    _0x49a115 = Bt(_0x168606[_0x493208]);
  for (; _0x49a115 && !_0x36df8c.has(_0x49a115);) {
    let _0x319d28 = _0x168606[_0x49a115];
    if (!Vt(_0x319d28)) break;
    (_0x19f945.push(_0x49a115),
      _0x36df8c.add(_0x49a115),
      (_0x49a115 = Bt(_0x319d28)));
  }
  return _0x19f945;
}
function Ht(_0x41301c, _0xf9f0af) {
  return Vt(_0x41301c[_0xf9f0af])
    ? Object.values(_0x41301c)
        .filter((_0x574c93) => _0x574c93.element["parentId"] === _0xf9f0af)
        .map((_0x33eacf) => _0x33eacf.elementId)
    : [];
}
function Ut(_0x5e9107, _0x26c067) {
  let _0x1fef35 = [],
    _0x9d3b79 = new Set(),
    _0x21884b = (_0x54fe65) => {
      Ht(_0x5e9107, _0x54fe65).forEach((_0x36f5a4) => {
        _0x9d3b79.has(_0x36f5a4) ||
          (_0x9d3b79.add(_0x36f5a4),
          _0x1fef35.push(_0x36f5a4),
          Vt(_0x5e9107[_0x36f5a4]) && _0x21884b(_0x36f5a4));
      });
    };
  return (_0x21884b(_0x26c067), _0x1fef35);
}
function Wt(_0xe0fa4c, _0x2b5c2e, _0x1a6da5) {
  return !_0x1a6da5 || !Vt(_0xe0fa4c[_0x2b5c2e])
    ? false
    : _0x2b5c2e === _0x1a6da5 || L(_0xe0fa4c, _0x1a6da5).includes(_0x2b5c2e);
}
function Gt(_0x46a4cf, _0x5012f7) {
  if (_0x5012f7.length === 0) return;
  let _0xc5bc81 = _0x5012f7.map((_0x5cb997) => L(_0x46a4cf, _0x5cb997)),
    _0x45fdfe = _0xc5bc81[0];
  if (!(!_0x45fdfe || _0x45fdfe.length === 0))
    return _0x45fdfe.find((_0x187d5e) =>
      _0xc5bc81.every((_0x4cbe93) => _0x4cbe93.includes(_0x187d5e)),
    );
}
function Kt(_0x57475c) {
  return {
    left:
      _0x57475c.width >= 0 ? _0x57475c.left : _0x57475c.left + _0x57475c.width,
    top:
      _0x57475c.height >= 0 ? _0x57475c.top : _0x57475c.top + _0x57475c.height,
    width: Math.abs(_0x57475c.width),
    height: Math.abs(_0x57475c.height),
  };
}
function qt(_0x53fd3e) {
  return {
    left: (_0x53fd3e == null ? undefined : _0x53fd3e.left) ?? 0,
    top: (_0x53fd3e == null ? undefined : _0x53fd3e.top) ?? 0,
    width: (_0x53fd3e == null ? undefined : _0x53fd3e.width) ?? 0,
    height: (_0x53fd3e == null ? undefined : _0x53fd3e.height) ?? 0,
    rotation: (_0x53fd3e == null ? undefined : _0x53fd3e.rotation) ?? 0,
    scaleX: _0x53fd3e == null ? undefined : _0x53fd3e.scaleX,
    scaleY: _0x53fd3e == null ? undefined : _0x53fd3e.scaleY,
    skewX: _0x53fd3e == null ? undefined : _0x53fd3e.skewX,
    skewY: _0x53fd3e == null ? undefined : _0x53fd3e.skewY,
    flipX: _0x53fd3e == null ? undefined : _0x53fd3e.flipX,
    flipY: _0x53fd3e == null ? undefined : _0x53fd3e.flipY,
  };
}
function Jt(_0x231c7d) {
  return qt({
    ..._0x231c7d.element["transform"],
    ...(_0x231c7d.transform ?? {}),
  });
}
function Yt(_0x479f04, _0x5bebb1) {
  return _0x479f04.element["type"] === s.Container
    ? { ..._0x5bebb1, rotation: 0 }
    : _0x5bebb1;
}
function R(_0xa3aea6, _0x4d2866) {
  let _0x2b9e8d = _0xa3aea6[_0x4d2866];
  if (!_0x2b9e8d) return null;
  let _0x28b914 = L(_0xa3aea6, _0x4d2866),
    _0x42980f = Jt(_0x2b9e8d),
    _0x51f404 = _0x28b914.reduce(
      (_0x1b7cfd, _0x2cde08) => {
        let _0xb192bd = _0xa3aea6[_0x2cde08];
        if (!_0xb192bd) return _0x1b7cfd;
        let _0x2c6723 = Jt(_0xb192bd);
        return {
          left: _0x1b7cfd.left + (_0x2c6723.left ?? 0),
          top: _0x1b7cfd.top + (_0x2c6723.top ?? 0),
        };
      },
      { left: 0, top: 0 },
    );
  return {
    elementId: _0x4d2866,
    parentChain: _0x28b914,
    localTransform: _0x42980f,
    worldTransform: Yt(_0x2b9e8d, {
      ..._0x42980f,
      left: (_0x42980f.left ?? 0) + _0x51f404.left,
      top: (_0x42980f.top ?? 0) + _0x51f404.top,
    }),
  };
}
function z(_0xac4554, _0x13a2a3) {
  let _0x4be3bf = R(_0xac4554, _0x13a2a3);
  return _0x4be3bf
    ? Kt({
        left: _0x4be3bf.worldTransform["left"] ?? 0,
        top: _0x4be3bf.worldTransform["top"] ?? 0,
        width: _0x4be3bf.worldTransform["width"] ?? 0,
        height: _0x4be3bf.worldTransform["height"] ?? 0,
      })
    : null;
}
function B(_0x10f823, _0x2f3085) {
  var _0x511672;
  let _0x44d005 = _0x2f3085.parentId
      ? _0x10f823[_0x2f3085.parentId]
      : undefined,
    _0x288a7c =
      _0x2f3085.parentId &&
      (_0x44d005 == null ? undefined : _0x44d005.element["type"]) ===
        s.Container
        ? (_0x511672 = R(_0x10f823, _0x2f3085.parentId)) == null
          ? undefined
          : _0x511672.worldTransform
        : null;
  return qt({
    ..._0x2f3085.worldTransform,
    left:
      (_0x2f3085.worldTransform["left"] ?? 0) -
      ((_0x288a7c == null ? undefined : _0x288a7c.left) ?? 0),
    top:
      (_0x2f3085.worldTransform["top"] ?? 0) -
      ((_0x288a7c == null ? undefined : _0x288a7c.top) ?? 0),
  });
}
function V(_0x3ee73b) {
  return {
    left: _0x3ee73b.left ?? 0,
    top: _0x3ee73b.top ?? 0,
    width: _0x3ee73b.width ?? 0,
    height: _0x3ee73b.height ?? 0,
    angle: _0x3ee73b.rotation ?? _0x3ee73b.angle ?? 0,
    flipX: _0x3ee73b.flipX,
    flipY: _0x3ee73b.flipY,
  };
}
function Xt(_0x3ff5ac) {
  return {
    left: _0x3ff5ac.left,
    top: _0x3ff5ac.top,
    width: _0x3ff5ac.width,
    height: _0x3ff5ac.height,
    rotation: _0x3ff5ac.angle,
    flipX: _0x3ff5ac.flipX,
    flipY: _0x3ff5ac.flipY,
  };
}
const H = 0.001;
function Zt(_0x4fafc7, _0x1a676d, _0xd3773c = {}) {
  let _0xa5906 = _0xd3773c.source ?? "model",
    _0x198f76 = Qt(_0xd3773c.focusPadding),
    _0x552d94 = $t(_0xd3773c.endpointSnapThreshold),
    _0x4c0630 = _0x1a676d
      .map((_0x270114) => _0x4fafc7[_0x270114])
      .filter(
        (_0x11d59f) =>
          _0x11d59f !== undefined && _0x11d59f.element["visible"] !== false,
      ),
    _0x18606d = new Map();
  for (let _0x3d76bc of _0x4c0630) {
    let _0x33cfee = z(_0x4fafc7, _0x3d76bc.elementId);
    _0x33cfee && _0x18606d.set(_0x3d76bc.elementId, _0x33cfee);
  }
  let _0x3f8321 = _0x4c0630
      .filter((_0x4917cb) => _0x4917cb.element["type"] === s.Connector)
      .map((_0x3042b8) => {
        var _0x441ace;
        return en(
          _0x3042b8.element,
          (_0x441ace = _0xd3773c.resolvedRoutes) == null
            ? undefined
            : _0x441ace[_0x3042b8.elementId],
        );
      }),
    _0x2d53a3 = Un([
      ...rn(_0x4c0630, _0x18606d, _0x4fafc7, _0x198f76),
      ...sn(_0x3f8321, _0x4c0630, _0x18606d, _0x198f76),
      ...vn(_0x3f8321, _0x198f76),
      ...un(_0x3f8321, _0x4c0630, _0x18606d, _0x4fafc7, _0x198f76, _0x552d94),
      ...dn(_0x3f8321, _0x198f76, _0x552d94),
    ]).sort(Vn),
    _0x582b6a = _0x3f8321.map(
      ({ connector: _0x1995f5, points: _0x401d3f, resolved: _0x3c49c6 }) => ({
        connectorId: _0x1995f5.id,
        points: _0x401d3f.map((_0x469bfd) => ({ ..._0x469bfd })),
        resolved: _0x3c49c6,
      }),
    );
  return {
    source: _0xa5906,
    contentBounds: kn(Array.from(_0x18606d.values())),
    routes: _0x582b6a,
    issues: _0x2d53a3,
    summary: {
      errorCount: _0x2d53a3.filter(
        (_0x5c7f28) => _0x5c7f28.severity === "error",
      ).length,
      warningCount: _0x2d53a3.filter(
        (_0x4616de) => _0x4616de.severity === "warning",
      ).length,
      unresolvedConnectorCount: _0x582b6a.filter(
        (_0x55fbbf) => !_0x55fbbf.resolved,
      ).length,
    },
  };
}
function Qt(_0x4c32cd) {
  return _0x4c32cd === undefined || !Number.isFinite(_0x4c32cd) || _0x4c32cd < 0
    ? 24
    : _0x4c32cd;
}
function $t(_0x3d0ca7) {
  return _0x3d0ca7 === undefined || !Number.isFinite(_0x3d0ca7) || _0x3d0ca7 < 0
    ? 12
    : _0x3d0ca7;
}
function en(_0x10077c, _0xa71743) {
  var _0x238608;
  if (_0xa71743 && _0xa71743.length >= 2)
    return {
      connector: _0x10077c,
      points: _0xa71743.map((_0x410839) => ({ ..._0x410839 })),
      resolved: true,
    };
  let _0x18ffdd = tn(_0x10077c.connectorData["start"]),
    _0x4a55d1 = tn(_0x10077c.connectorData["end"]),
    _0x5f734b =
      ((_0x238608 = _0x10077c.connectorData["orthogonalData"]) == null
        ? undefined
        : _0x238608.routePoints) ??
      _0x10077c.connectorData["waypoints"] ??
      [],
    _0xe704e1 = [
      _0x18ffdd,
      ..._0x5f734b.map((_0x473648) => ({ x: _0x473648.x, y: _0x473648.y })),
      _0x4a55d1,
    ].filter((_0x5bd336) => _0x5bd336 !== null),
    _0x312d7c =
      _0x10077c.connectorData["routing"] === "straight" ||
      _0x10077c.connectorData["routing"] === "freePolyline" ||
      (_0x10077c.connectorData["routing"] === "orthogonal" &&
        (_0x10077c.connectorData["routingMode"] !== "auto" ||
          _0x5f734b.length > 0));
  return {
    connector: _0x10077c,
    points: nn(_0xe704e1),
    resolved: _0x312d7c && _0xe704e1.length >= 2,
  };
}
function tn(_0x1eea32) {
  return _0x1eea32.kind === "free"
    ? { x: _0x1eea32.x, y: _0x1eea32.y }
    : _0x1eea32.fallbackPoint
      ? { ..._0x1eea32.fallbackPoint }
      : null;
}
function nn(_0xe889c5) {
  let _0xe3ad62 = [];
  for (let _0x1df345 of _0xe889c5) {
    let _0x3a3f88 = _0xe3ad62[_0xe3ad62.length - 1];
    (!_0x3a3f88 || !Dn(_0x3a3f88, _0x1df345)) &&
      _0xe3ad62.push({ ..._0x1df345 });
  }
  return _0xe3ad62;
}
function rn(_0x3209ca, _0x1e6a79, _0x2158bf, _0x25ee6e) {
  let _0x4cf76c = _0x3209ca
      .filter((_0x826f1) => _0x826f1.element["type"] !== s.Connector)
      .flatMap((_0x4d50a5) => {
        let _0x436c00 = _0x1e6a79.get(_0x4d50a5.elementId);
        return _0x436c00 ? [{ bounds: _0x436c00, value: _0x4d50a5 }] : [];
      }),
    _0x30d910 = [];
  return (
    Pn(_0x4cf76c, (_0x1be2b5, _0x25f008) => {
      let _0x553c96 = _0x1be2b5.value,
        _0x574a3e = _0x25f008.value;
      if (an(_0x553c96.elementId, _0x574a3e.elementId, _0x2158bf)) return;
      let _0x36e09a = On(_0x1be2b5.bounds, _0x25f008.bounds);
      if (!_0x36e09a) return;
      let _0x3d6cfc = [_0x553c96.elementId, _0x574a3e.elementId].sort();
      _0x30d910.push(
        Rn({
          rule: "element-overlap",
          severity: "error",
          elementIds: _0x3d6cfc,
          connectorIds: [],
          bounds: _0x36e09a,
          focusPadding: _0x25ee6e,
        }),
      );
    }),
    _0x30d910
  );
}
function an(_0x4cf932, _0x90bd9a, _0x5685ff) {
  return (
    on(_0x4cf932, _0x90bd9a, _0x5685ff) || on(_0x90bd9a, _0x4cf932, _0x5685ff)
  );
}
function on(_0x2d5ffe, _0x4fbdfe, _0x1b456e) {
  var _0x121908;
  let _0x173b34 =
      (_0x121908 = _0x1b456e[_0x4fbdfe]) == null
        ? undefined
        : _0x121908.element["parentId"],
    _0x2fb8c9 = new Set();
  for (; _0x173b34 && !_0x2fb8c9.has(_0x173b34);) {
    var _0x575127;
    if (_0x173b34 === _0x2d5ffe) return true;
    (_0x2fb8c9.add(_0x173b34),
      (_0x173b34 =
        (_0x575127 = _0x1b456e[_0x173b34]) == null
          ? undefined
          : _0x575127.element["parentId"]));
  }
  return false;
}
function sn(_0x1dfb9e, _0x3f5486, _0x4c4da0, _0x5bb161) {
  let _0x253cc9 = _0x3f5486
      .filter(
        (_0x376466) =>
          _0x376466.element["type"] !== s.Connector &&
          _0x376466.element["type"] !== s.Container,
      )
      .flatMap((_0x27187f) => {
        let _0x4fc10c = _0x4c4da0.get(_0x27187f.elementId);
        return _0x4fc10c ? [{ bounds: _0x4fc10c, value: _0x27187f }] : [];
      }),
    _0x593f8d = _0x1dfb9e
      .filter((_0x4682ce) => _0x4682ce.resolved)
      .flatMap((_0x5329c9) =>
        yn(_0x5329c9.points).map((_0x37e6ae) => ({
          bounds: An(_0x37e6ae.start, _0x37e6ae.end),
          value: { route: _0x5329c9, segment: _0x37e6ae },
        })),
      ),
    _0x311e5a = new Map();
  return (
    Nn(_0x593f8d, _0x253cc9, (_0x14316d, _0xa41af2) => {
      let { route: _0x283076, segment: _0x3d5eb2 } = _0x14316d.value,
        _0x4d5f97 = _0xa41af2.value;
      if (cn(_0x283076.connector).has(_0x4d5f97.elementId)) return;
      let _0x268dfa = bn(_0x3d5eb2, _0xa41af2.bounds);
      if (!_0x268dfa) return;
      let _0x265990 = _0x283076.connector["id"] + ":" + _0x4d5f97.elementId,
        _0x1a9bae = _0x311e5a.get(_0x265990) ?? {
          route: _0x283076,
          obstacle: _0x4d5f97,
          intersections: [],
        };
      (_0x1a9bae.intersections["push"](_0x268dfa),
        _0x311e5a.set(_0x265990, _0x1a9bae));
    }),
    Array.from(_0x311e5a.values()).flatMap(
      ({ route: _0x2b3e26, obstacle: _0x42c74f, intersections: _0x3fdbc7 }) => {
        let _0x509ae5 = kn(_0x3fdbc7);
        return _0x509ae5
          ? [
              Rn({
                rule: "connector-through-element",
                severity: "error",
                elementIds: [_0x42c74f.elementId],
                connectorIds: [_0x2b3e26.connector["id"]],
                bounds: _0x509ae5,
                focusPadding: _0x5bb161,
                routePoints: _0x2b3e26.points,
              }),
            ]
          : [];
      },
    )
  );
}
function cn(_0x48b3cd) {
  let _0x142f6a = new Set(),
    _0x43c305 = ln(_0x48b3cd.connectorData["start"]),
    _0x492611 = ln(_0x48b3cd.connectorData["end"]);
  return (
    _0x43c305 && _0x142f6a.add(_0x43c305),
    _0x492611 && _0x142f6a.add(_0x492611),
    _0x142f6a
  );
}
function ln(_0xf4aade) {
  return _0xf4aade.kind === "free" ? null : _0xf4aade.shapeId;
}
function un(_0x27033d, _0x396057, _0x4dd90a, _0x4bca8b, _0x2b242d, _0x11a1ec) {
  let _0x4d4f2e = _0x27033d
      .flatMap((_0x5bbff8) => fn(_0x5bbff8))
      .map((_0x23111e) => ({
        bounds: Mn(jn(_0x23111e.point), _0x11a1ec),
        value: _0x23111e,
      })),
    _0x4b6ce4 = _0x396057
      .filter((_0x261d7a) => pn(_0x261d7a))
      .flatMap((_0xcdce62) => {
        let _0x3496c6 = _0x4dd90a.get(_0xcdce62.elementId);
        if (!_0x3496c6) return [];
        let _0x25cfe9 = mn(_0xcdce62, _0x4bca8b);
        return [
          {
            bounds: _0x25cfe9
              ? (kn([_0x3496c6, An(_0x25cfe9.start, _0x25cfe9.end)]) ??
                _0x3496c6)
              : _0x3496c6,
            value: {
              item: _0xcdce62,
              bounds: _0x3496c6,
              lifelineSegment: _0x25cfe9,
            },
          },
        ];
      }),
    _0x26b1f2 = new Map();
  return (
    Nn(_0x4d4f2e, _0x4b6ce4, (_0x487e8d, _0x48cb8c) => {
      let _0x518165 = _0x487e8d.value,
        {
          item: _0x57d12f,
          bounds: _0xcee5f,
          lifelineSegment: _0x5cce1a,
        } = _0x48cb8c.value,
        _0x4c1f60 = Tn(_0x518165.point, _0xcee5f),
        _0x57329b = _0x5cce1a ? wn(_0x518165.point, _0x5cce1a) : 1 / 0,
        _0x279734 = Math.min(_0x4c1f60, _0x57329b);
      if (_0x279734 > _0x11a1ec) return;
      let _0x2b40a0 =
          _0x518165.route["connector"].id + ":" + _0x518165.endpoint,
        _0x523f12 = _0x26b1f2.get(_0x2b40a0);
      (!_0x523f12 ||
        _0x279734 < _0x523f12.distance ||
        (_0x279734 === _0x523f12.distance &&
          _0x57d12f.elementId < _0x523f12.target["item"].elementId)) &&
        _0x26b1f2.set(_0x2b40a0, {
          distance: _0x279734,
          endpoint: _0x518165,
          target: _0x48cb8c.value,
        });
    }),
    Array.from(_0x26b1f2.values()).map(
      ({ endpoint: _0xebdc52, target: _0x13c617 }) =>
        Rn({
          rule: "connector-free-endpoint-near-element",
          severity: "warning",
          elementIds: [_0x13c617.item["elementId"]],
          connectorIds: [_0xebdc52.route["connector"].id],
          bounds: jn(_0xebdc52.point),
          focusPadding: _0x2b242d,
          routePoints: _0xebdc52.route["points"],
          endpoint: _0xebdc52.endpoint,
          suggestedAction: "bind-connector-endpoint",
        }),
    )
  );
}
function dn(_0x269db7, _0x2e155a, _0x212682) {
  let _0x1a1a50 = _0x269db7
      .flatMap((_0x2b128a) => fn(_0x2b128a))
      .filter(({ route: _0x1f983e, endpoint: _0x593615 }) =>
        hn(_0x1f983e.points, _0x593615),
      )
      .map((_0x35146b) => ({
        bounds: Mn(jn(_0x35146b.point), _0x212682),
        value: _0x35146b,
      })),
    _0x31ff2d = _0x269db7
      .filter((_0x215d69) => gn(_0x215d69))
      .flatMap((_0x6dc62a) =>
        yn(_0x6dc62a.points).map((_0x464137) => ({
          bounds: Mn(An(_0x464137.start, _0x464137.end), _0x212682),
          value: { route: _0x6dc62a, segment: _0x464137 },
        })),
      ),
    _0x387ed4 = new Map();
  return (
    Nn(_0x1a1a50, _0x31ff2d, (_0x36b331, _0x1400aa) => {
      let _0x1e087d = _0x36b331.value,
        { route: _0x53a8ce, segment: _0x3f9859 } = _0x1400aa.value;
      if (_0x1e087d.route["connector"].id === _0x53a8ce.connector["id"]) return;
      let _0x3581ff = wn(_0x1e087d.point, _0x3f9859);
      if (_0x3581ff > _0x212682) return;
      let _0x551c50 =
          _0x1e087d.route["connector"].id + ":" + _0x1e087d.endpoint,
        _0x2727b5 = _0x387ed4.get(_0x551c50);
      (!_0x2727b5 ||
        _0x3581ff < _0x2727b5.distance ||
        (_0x3581ff === _0x2727b5.distance &&
          _0x53a8ce.connector["id"] < _0x2727b5.dashedRoute["connector"].id)) &&
        _0x387ed4.set(_0x551c50, {
          distance: _0x3581ff,
          endpoint: _0x1e087d,
          dashedRoute: _0x53a8ce,
        });
    }),
    Array.from(_0x387ed4.values()).map(
      ({ endpoint: _0x3ea7aa, dashedRoute: _0x157568 }) =>
        Rn({
          rule: "connector-free-endpoint-near-dashed-connector",
          severity: "warning",
          elementIds: [],
          connectorIds: [
            _0x3ea7aa.route["connector"].id,
            _0x157568.connector["id"],
          ],
          bounds: jn(_0x3ea7aa.point),
          focusPadding: _0x2e155a,
          routePoints: _0x3ea7aa.route["points"],
          endpoint: _0x3ea7aa.endpoint,
          suggestedAction: "replace-dashed-connector-with-sequence-lifeline",
        }),
    )
  );
}
function fn(_0x14cd7b) {
  let _0x3839bf = [];
  return (
    _0x14cd7b.connector["connectorData"].start["kind"] === "free" &&
      _0x3839bf.push({
        route: _0x14cd7b,
        endpoint: "start",
        point: { ..._0x14cd7b.connector["connectorData"].start },
      }),
    _0x14cd7b.connector["connectorData"].end["kind"] === "free" &&
      _0x3839bf.push({
        route: _0x14cd7b,
        endpoint: "end",
        point: { ..._0x14cd7b.connector["connectorData"].end },
      }),
    _0x3839bf
  );
}
function pn(_0x48f466) {
  return (
    _0x48f466.element["locked"] !== true &&
    _0x48f466.element["type"] !== s.Connector &&
    _0x48f466.element["type"] !== s.Group
  );
}
function mn(_0x439264, _0x101e1d) {
  if (_0x439264.element["type"] !== s.Shape) return null;
  let _0x46af3b = It(_0x439264.element["shapeData"]),
    _0x23fe7a = R(_0x101e1d, _0x439264.elementId);
  if (
    !_0x46af3b ||
    !_0x23fe7a ||
    Math.abs(_0x23fe7a.worldTransform["rotation"] ?? 0) > H
  )
    return null;
  let _0x494d53 = _0x23fe7a.worldTransform["left"] ?? 0,
    _0x1e0109 = _0x23fe7a.worldTransform["top"] ?? 0,
    _0x5f2b60 = _0x23fe7a.worldTransform["width"] ?? 0,
    _0x2ddfd3 = _0x23fe7a.worldTransform["height"] ?? 0,
    _0x1d7abb = _0x494d53 + _0x5f2b60 / 2,
    _0x253f8c = _0x1e0109 + _0x2ddfd3;
  return {
    start: { x: _0x1d7abb, y: _0x253f8c },
    end: {
      x: _0x1d7abb,
      y:
        _0x253f8c +
        Math.max(_0x46af3b.minLifelineHeight, _0x46af3b.lifelineHeight),
    },
  };
}
function hn(_0x4ff9dd, _0x2710be) {
  let _0xbeebc9 = _0x2710be === "start",
    _0x4a6f0a = _0xbeebc9 ? 0 : _0x4ff9dd.length - 1,
    _0x8470ae = _0x4ff9dd[_0x4a6f0a];
  if (!_0x8470ae) return false;
  for (
    let _0x390752 = _0x4a6f0a + (_0xbeebc9 ? 1 : -1);
    _0x390752 >= 0 && _0x390752 < _0x4ff9dd.length;
    _0x390752 += _0xbeebc9 ? 1 : -1
  ) {
    let _0x322492 = _0x4ff9dd[_0x390752],
      _0x42f3e6 = Math.abs(_0x322492.x - _0x8470ae.x),
      _0x5f21e5 = Math.abs(_0x322492.y - _0x8470ae.y);
    if (!(_0x42f3e6 <= H && _0x5f21e5 <= H)) return _0x42f3e6 >= _0x5f21e5 * 2;
  }
  return false;
}
function gn(_0x3e42cd) {
  var _0x438d3d;
  let { connectorData: _0xb47ff0 } = _0x3e42cd.connector;
  if (
    !(
      (_0x438d3d = _0xb47ff0.style) != null &&
      (_0x438d3d = _0x438d3d.dash) != null &&
      _0x438d3d.some((_0x4885d4) => _0x4885d4 > 0)
    ) ||
    _n(_0xb47ff0.style["startMarker"]) ||
    _n(_0xb47ff0.style["endMarker"]) ||
    _0xb47ff0.start["kind"] !== "free" ||
    _0xb47ff0.end["kind"] !== "free"
  )
    return false;
  let _0x153293 = _0x3e42cd.points[0],
    _0x2bb107 = _0x3e42cd.points[_0x3e42cd.points["length"] - 1],
    _0x3a5b09 = yn(_0x3e42cd.points);
  return !_0x153293 ||
    !_0x2bb107 ||
    _0x3a5b09.length === 0 ||
    Math.abs(_0x2bb107.y - _0x153293.y) < 48
    ? false
    : _0x3a5b09.every((_0x2d45be) => {
        let _0x305620 = Math.abs(_0x2d45be.end["x"] - _0x2d45be.start["x"]);
        return (
          Math.abs(_0x2d45be.end["y"] - _0x2d45be.start["y"]) >= _0x305620 * 2
        );
      });
}
function _n(_0x30d561) {
  return _0x30d561 !== undefined && _0x30d561.type !== "none";
}
function vn(_0x43bae9, _0x255c31) {
  let _0x340991 = _0x43bae9
      .filter((_0x19223c) => _0x19223c.resolved)
      .flatMap((_0x4d32cd) =>
        yn(_0x4d32cd.points).map((_0x17e4f5) => ({
          bounds: An(_0x17e4f5.start, _0x17e4f5.end),
          value: { route: _0x4d32cd, segment: _0x17e4f5 },
        })),
      ),
    _0x35defe = [];
  return (
    Pn(_0x340991, (_0x581eb4, _0x31ca3d) => {
      let _0x32eb97 = _0x581eb4.value["route"],
        _0x3240ad = _0x31ca3d.value["route"];
      if (_0x32eb97.connector["id"] === _0x3240ad.connector["id"]) return;
      let _0x1d88a9 = [
          _0x32eb97.connector["id"],
          _0x3240ad.connector["id"],
        ].sort(),
        _0x263478 = xn(_0x581eb4.value["segment"], _0x31ca3d.value["segment"]);
      if (_0x263478) {
        _0x35defe.push(
          Rn({
            rule: "connector-collinear-overlap",
            severity: "error",
            elementIds: [],
            connectorIds: _0x1d88a9,
            bounds: _0x263478,
            focusPadding: _0x255c31,
            routePoints: _0x32eb97.points,
          }),
        );
        return;
      }
      let _0x23ea7f = Sn(
        _0x581eb4.value["segment"],
        _0x31ca3d.value["segment"],
      );
      !_0x23ea7f ||
        En(_0x23ea7f, _0x32eb97.points, _0x3240ad.points) ||
        _0x35defe.push(
          Rn({
            rule: "connector-crossing",
            severity: "warning",
            elementIds: [],
            connectorIds: _0x1d88a9,
            bounds: jn(_0x23ea7f),
            focusPadding: _0x255c31,
            routePoints: _0x32eb97.points,
          }),
        );
    }),
    Hn(_0x35defe)
  );
}
function yn(_0x3b043c) {
  let _0x12f5bb = [];
  for (let _0x5eb2b4 = 0; _0x5eb2b4 < _0x3b043c.length - 1; _0x5eb2b4 += 1)
    Dn(_0x3b043c[_0x5eb2b4], _0x3b043c[_0x5eb2b4 + 1]) ||
      _0x12f5bb.push({
        start: _0x3b043c[_0x5eb2b4],
        end: _0x3b043c[_0x5eb2b4 + 1],
      });
  return _0x12f5bb;
}
function bn(_0x2196fe, _0x2a4228) {
  let _0x43088c = _0x2196fe.end["x"] - _0x2196fe.start["x"],
    _0x22cabc = _0x2196fe.end["y"] - _0x2196fe.start["y"],
    _0x31a218 = 0,
    _0x1797b7 = 1,
    _0x527fe7 = [
      [-_0x43088c, _0x2196fe.start["x"] - _0x2a4228.left],
      [_0x43088c, _0x2a4228.left + _0x2a4228.width - _0x2196fe.start["x"]],
      [-_0x22cabc, _0x2196fe.start["y"] - _0x2a4228.top],
      [_0x22cabc, _0x2a4228.top + _0x2a4228.height - _0x2196fe.start["y"]],
    ];
  for (let [_0x122095, _0x1214bc] of _0x527fe7) {
    if (Math.abs(_0x122095) <= H) {
      if (_0x1214bc < 0) return null;
      continue;
    }
    let _0x24d791 = _0x1214bc / _0x122095;
    if (
      (_0x122095 < 0
        ? (_0x31a218 = Math.max(_0x31a218, _0x24d791))
        : (_0x1797b7 = Math.min(_0x1797b7, _0x24d791)),
      _0x31a218 > _0x1797b7)
    )
      return null;
  }
  let _0x4be381 = {
      x: _0x2196fe.start["x"] + _0x31a218 * _0x43088c,
      y: _0x2196fe.start["y"] + _0x31a218 * _0x22cabc,
    },
    _0x5eac71 = {
      x: _0x2196fe.start["x"] + _0x1797b7 * _0x43088c,
      y: _0x2196fe.start["y"] + _0x1797b7 * _0x22cabc,
    };
  return Dn(_0x4be381, _0x5eac71) ? null : An(_0x4be381, _0x5eac71);
}
function xn(_0xabb504, _0x48742c) {
  let _0x496de6 = _0xabb504.end["x"] - _0xabb504.start["x"],
    _0x325679 = _0xabb504.end["y"] - _0xabb504.start["y"],
    _0x1bce52 = _0x48742c.end["x"] - _0x48742c.start["x"],
    _0x3deac1 = _0x48742c.end["y"] - _0x48742c.start["y"];
  if (
    Math.abs(Cn(_0x496de6, _0x325679, _0x1bce52, _0x3deac1)) > H ||
    Math.abs(
      Cn(
        _0x496de6,
        _0x325679,
        _0x48742c.start["x"] - _0xabb504.start["x"],
        _0x48742c.start["y"] - _0xabb504.start["y"],
      ),
    ) > H
  )
    return null;
  let _0x57f951 = Math.abs(_0x496de6) >= Math.abs(_0x325679),
    _0x530680 = _0x57f951
      ? [_0xabb504.start["x"], _0xabb504.end["x"]]
      : [_0xabb504.start["y"], _0xabb504.end["y"]],
    _0x8a8a86 = _0x57f951
      ? [_0x48742c.start["x"], _0x48742c.end["x"]]
      : [_0x48742c.start["y"], _0x48742c.end["y"]],
    _0x2257cd = Math.max(Math.min(..._0x530680), Math.min(..._0x8a8a86)),
    _0x102bb8 = Math.min(Math.max(..._0x530680), Math.max(..._0x8a8a86));
  if (_0x102bb8 - _0x2257cd <= H) return null;
  let _0x2de26f = (_0x28245b) => {
    let _0x585e9d = _0x57f951 ? _0x496de6 : _0x325679,
      _0x44cf5c =
        (_0x28245b -
          (_0x57f951 ? _0xabb504.start["x"] : _0xabb504.start["y"])) /
        _0x585e9d;
    return {
      x: _0xabb504.start["x"] + _0x44cf5c * _0x496de6,
      y: _0xabb504.start["y"] + _0x44cf5c * _0x325679,
    };
  };
  return An(_0x2de26f(_0x2257cd), _0x2de26f(_0x102bb8));
}
function Sn(_0x50bb01, _0x2a38e1) {
  let _0x43543e = _0x50bb01.end["x"] - _0x50bb01.start["x"],
    _0x5b8f35 = _0x50bb01.end["y"] - _0x50bb01.start["y"],
    _0x23d5a7 = _0x2a38e1.end["x"] - _0x2a38e1.start["x"],
    _0xb3856c = _0x2a38e1.end["y"] - _0x2a38e1.start["y"],
    _0x6849d5 = Cn(_0x43543e, _0x5b8f35, _0x23d5a7, _0xb3856c);
  if (Math.abs(_0x6849d5) <= H) return null;
  let _0x582c7b = _0x2a38e1.start["x"] - _0x50bb01.start["x"],
    _0x2cc0a0 = _0x2a38e1.start["y"] - _0x50bb01.start["y"],
    _0x123f6e = Cn(_0x582c7b, _0x2cc0a0, _0x23d5a7, _0xb3856c) / _0x6849d5,
    _0x11def7 = Cn(_0x582c7b, _0x2cc0a0, _0x43543e, _0x5b8f35) / _0x6849d5;
  return _0x123f6e < 0 || _0x123f6e > 1 || _0x11def7 < 0 || _0x11def7 > 1
    ? null
    : {
        x: _0x50bb01.start["x"] + _0x123f6e * _0x43543e,
        y: _0x50bb01.start["y"] + _0x123f6e * _0x5b8f35,
      };
}
function Cn(_0x34a6b5, _0x380368, _0x49cb79, _0x3145c1) {
  return _0x34a6b5 * _0x3145c1 - _0x380368 * _0x49cb79;
}
function wn(_0x3524c1, _0x303b8f) {
  let _0x409f51 = _0x303b8f.end["x"] - _0x303b8f.start["x"],
    _0x243d5a = _0x303b8f.end["y"] - _0x303b8f.start["y"],
    _0x14f1fb = _0x409f51 * _0x409f51 + _0x243d5a * _0x243d5a;
  if (_0x14f1fb <= H)
    return Math.hypot(
      _0x3524c1.x - _0x303b8f.start["x"],
      _0x3524c1.y - _0x303b8f.start["y"],
    );
  let _0x5e5535 = Math.max(
      0,
      Math.min(
        1,
        ((_0x3524c1.x - _0x303b8f.start["x"]) * _0x409f51 +
          (_0x3524c1.y - _0x303b8f.start["y"]) * _0x243d5a) /
          _0x14f1fb,
      ),
    ),
    _0x4348b6 = {
      x: _0x303b8f.start["x"] + _0x5e5535 * _0x409f51,
      y: _0x303b8f.start["y"] + _0x5e5535 * _0x243d5a,
    };
  return Math.hypot(_0x3524c1.x - _0x4348b6.x, _0x3524c1.y - _0x4348b6.y);
}
function Tn(_0x19f198, _0x396d8f) {
  let _0x32b69d = _0x396d8f.left + _0x396d8f.width,
    _0x159db6 = _0x396d8f.top + _0x396d8f.height,
    _0x59893b =
      _0x19f198.x < _0x396d8f.left
        ? _0x396d8f.left - _0x19f198.x
        : _0x19f198.x > _0x32b69d
          ? _0x19f198.x - _0x32b69d
          : 0,
    _0x1f7cb4 =
      _0x19f198.y < _0x396d8f.top
        ? _0x396d8f.top - _0x19f198.y
        : _0x19f198.y > _0x159db6
          ? _0x19f198.y - _0x159db6
          : 0;
  return _0x59893b > 0 || _0x1f7cb4 > 0
    ? Math.hypot(_0x59893b, _0x1f7cb4)
    : Math.min(
        Math.abs(_0x19f198.x - _0x396d8f.left),
        Math.abs(_0x19f198.x - _0x32b69d),
        Math.abs(_0x19f198.y - _0x396d8f.top),
        Math.abs(_0x19f198.y - _0x159db6),
      );
}
function En(_0x163642, _0xbfd3ba, _0x4902ca) {
  let _0x5dbd48 = [_0xbfd3ba[0], _0xbfd3ba[_0xbfd3ba.length - 1]],
    _0x1041dc = [_0x4902ca[0], _0x4902ca[_0x4902ca.length - 1]];
  return (
    _0x5dbd48.some((_0x7d72d9) => Dn(_0x7d72d9, _0x163642)) &&
    _0x1041dc.some((_0xb048ed) => Dn(_0xb048ed, _0x163642))
  );
}
function Dn(_0x185f32, _0x4ce2fe) {
  return (
    Math.abs(_0x185f32.x - _0x4ce2fe.x) <= H &&
    Math.abs(_0x185f32.y - _0x4ce2fe.y) <= H
  );
}
function On(_0x34f381, _0x1217e8) {
  let _0x1df717 = Math.max(_0x34f381.left, _0x1217e8.left),
    _0x29d760 = Math.max(_0x34f381.top, _0x1217e8.top),
    _0x4ed8d4 = Math.min(
      _0x34f381.left + _0x34f381.width,
      _0x1217e8.left + _0x1217e8.width,
    ),
    _0xc6811d = Math.min(
      _0x34f381.top + _0x34f381.height,
      _0x1217e8.top + _0x1217e8.height,
    );
  return _0x4ed8d4 - _0x1df717 <= H || _0xc6811d - _0x29d760 <= H
    ? null
    : {
        left: _0x1df717,
        top: _0x29d760,
        width: _0x4ed8d4 - _0x1df717,
        height: _0xc6811d - _0x29d760,
      };
}
function kn(_0x3c6154) {
  if (_0x3c6154.length === 0) return null;
  let _0x353469 = Math.min(..._0x3c6154.map((_0x5cef9a) => _0x5cef9a.left)),
    _0x3fa019 = Math.min(..._0x3c6154.map((_0x41dc67) => _0x41dc67.top)),
    _0x2890f2 = Math.max(
      ..._0x3c6154.map((_0x4ce260) => _0x4ce260.left + _0x4ce260.width),
    ),
    _0x31bf81 = Math.max(
      ..._0x3c6154.map((_0x332d2d) => _0x332d2d.top + _0x332d2d.height),
    );
  return {
    left: _0x353469,
    top: _0x3fa019,
    width: _0x2890f2 - _0x353469,
    height: _0x31bf81 - _0x3fa019,
  };
}
function An(_0x68f9fd, _0x5865e4) {
  return {
    left: Math.min(_0x68f9fd.x, _0x5865e4.x),
    top: Math.min(_0x68f9fd.y, _0x5865e4.y),
    width: Math.abs(_0x5865e4.x - _0x68f9fd.x),
    height: Math.abs(_0x5865e4.y - _0x68f9fd.y),
  };
}
function jn(_0x48ba0c) {
  return { left: _0x48ba0c.x, top: _0x48ba0c.y, width: 0, height: 0 };
}
function Mn(_0x9400b, _0x3725a0) {
  return {
    left: _0x9400b.left - _0x3725a0,
    top: _0x9400b.top - _0x3725a0,
    width: _0x9400b.width + _0x3725a0 * 2,
    height: _0x9400b.height + _0x3725a0 * 2,
  };
}
function Nn(_0x51b289, _0x49d3cc, _0x214e68) {
  let _0x573f7f = [
      ..._0x51b289.flatMap((_0x49aeb7, _0x49a7c0) =>
        Fn(_0x49aeb7.bounds, "left", _0x49a7c0),
      ),
      ..._0x49d3cc.flatMap((_0x7a0061, _0x300abb) =>
        Fn(_0x7a0061.bounds, "right", _0x300abb),
      ),
    ].sort(In),
    _0x387e79 = new Map(),
    _0x23ef3f = new Map();
  for (let _0x953c6a of _0x573f7f) {
    if (_0x953c6a.kind === "end") {
      _0x953c6a.side === "left"
        ? _0x387e79.delete(_0x953c6a.index)
        : _0x23ef3f.delete(_0x953c6a.index);
      continue;
    }
    if (_0x953c6a.side === "left") {
      let _0xa8dca1 = _0x51b289[_0x953c6a.index];
      for (let _0xa629d0 of _0x23ef3f.values())
        Ln(_0xa8dca1.bounds, _0xa629d0.bounds) &&
          _0x214e68(_0xa8dca1, _0xa629d0);
      _0x387e79.set(_0x953c6a.index, _0xa8dca1);
    } else {
      let _0x56e40c = _0x49d3cc[_0x953c6a.index];
      for (let _0x554377 of _0x387e79.values())
        Ln(_0x554377.bounds, _0x56e40c.bounds) &&
          _0x214e68(_0x554377, _0x56e40c);
      _0x23ef3f.set(_0x953c6a.index, _0x56e40c);
    }
  }
}
function Pn(_0x189be9, _0x4f4a46) {
  let _0x42ec39 = _0x189be9
      .flatMap((_0x367ae8, _0x1cb839) =>
        Fn(_0x367ae8.bounds, "left", _0x1cb839),
      )
      .sort(In),
    _0x46b72a = new Map();
  for (let _0x33ff04 of _0x42ec39) {
    if (_0x33ff04.kind === "end") {
      _0x46b72a.delete(_0x33ff04.index);
      continue;
    }
    let _0x1fc2f4 = _0x189be9[_0x33ff04.index];
    for (let _0x40c5d4 of _0x46b72a.values())
      Ln(_0x1fc2f4.bounds, _0x40c5d4.bounds) && _0x4f4a46(_0x40c5d4, _0x1fc2f4);
    _0x46b72a.set(_0x33ff04.index, _0x1fc2f4);
  }
}
function Fn(_0x906e47, _0x5c89a4, _0x3b5ba2) {
  return [
    { x: _0x906e47.left, kind: "start", side: _0x5c89a4, index: _0x3b5ba2 },
    {
      x: _0x906e47.left + _0x906e47.width,
      kind: "end",
      side: _0x5c89a4,
      index: _0x3b5ba2,
    },
  ];
}
function In(_0xc3709e, _0x2fa10e) {
  return _0xc3709e.x === _0x2fa10e.x
    ? _0xc3709e.kind === _0x2fa10e.kind
      ? _0xc3709e.side === _0x2fa10e.side
        ? _0xc3709e.index - _0x2fa10e.index
        : _0xc3709e.side === "left"
          ? -1
          : 1
      : _0xc3709e.kind === "start"
        ? -1
        : 1
    : _0xc3709e.x - _0x2fa10e.x;
}
function Ln(_0x5687b2, _0x4893b1) {
  return (
    _0x5687b2.top <= _0x4893b1.top + _0x4893b1.height + H &&
    _0x4893b1.top <= _0x5687b2.top + _0x5687b2.height + H
  );
}
function Rn(_0x4928f7) {
  let _0x6cca8a = [..._0x4928f7.connectorIds, ..._0x4928f7.elementIds].join(
      ":",
    ),
    _0x45e5b4 = _0x4928f7.endpoint ? ":" + _0x4928f7.endpoint : "";
  return {
    id:
      _0x4928f7.rule +
      ":" +
      _0x6cca8a +
      _0x45e5b4 +
      ":" +
      Bn(_0x4928f7.bounds["left"]) +
      ":" +
      Bn(_0x4928f7.bounds["top"]),
    rule: _0x4928f7.rule,
    severity: _0x4928f7.severity,
    elementIds: [..._0x4928f7.elementIds],
    connectorIds: [..._0x4928f7.connectorIds],
    bounds: { ..._0x4928f7.bounds },
    focusBounds: zn(_0x4928f7.bounds, _0x4928f7.focusPadding),
    ...(_0x4928f7.routePoints
      ? {
          routePoints: _0x4928f7.routePoints["map"]((_0x412426) => ({
            ..._0x412426,
          })),
        }
      : {}),
    ...(_0x4928f7.endpoint ? { endpoint: _0x4928f7.endpoint } : {}),
    ...(_0x4928f7.suggestedAction
      ? { suggestedAction: _0x4928f7.suggestedAction }
      : {}),
  };
}
function zn(_0x253fec, _0x118840) {
  let _0x51e7b0 = Math.max(_0x253fec.width + _0x118840 * 2, 96),
    _0x1f9d83 = Math.max(_0x253fec.height + _0x118840 * 2, 96),
    _0xf9b694 = _0x253fec.left + _0x253fec.width / 2,
    _0x557249 = _0x253fec.top + _0x253fec.height / 2;
  return {
    left: _0xf9b694 - _0x51e7b0 / 2,
    top: _0x557249 - _0x1f9d83 / 2,
    width: _0x51e7b0,
    height: _0x1f9d83,
  };
}
function Bn(_0x2d48de) {
  return Number(_0x2d48de.toFixed(3)).toString();
}
function Vn(_0x4563c9, _0xbd085d) {
  let _0x168e9f = _0x4563c9.severity["localeCompare"](_0xbd085d.severity);
  if (_0x168e9f !== 0) return _0x168e9f;
  let _0x2fa115 = _0x4563c9.rule["localeCompare"](_0xbd085d.rule);
  return _0x2fa115 === 0
    ? _0x4563c9.id["localeCompare"](_0xbd085d.id)
    : _0x2fa115;
}
function Hn(_0x1fb869) {
  let _0x54ad9b = new Map();
  for (let _0x3077a0 of _0x1fb869)
    _0x54ad9b.has(_0x3077a0.id) || _0x54ad9b.set(_0x3077a0.id, _0x3077a0);
  return Array.from(_0x54ad9b.values());
}
function Un(_0x3f9d6d) {
  let _0x147a76 = new Set(
    _0x3f9d6d
      .filter(
        (_0x42d485) =>
          _0x42d485.rule === "connector-free-endpoint-near-dashed-connector",
      )
      .map((_0x598936) => Wn(_0x598936)),
  );
  return _0x3f9d6d.filter(
    (_0x166dd6) =>
      _0x166dd6.rule !== "connector-crossing" || !_0x147a76.has(Wn(_0x166dd6)),
  );
}
function Wn(_0x5e2e46) {
  return (
    [..._0x5e2e46.connectorIds].sort().join(":") +
    ":" +
    Bn(_0x5e2e46.bounds["left"]) +
    ":" +
    Bn(_0x5e2e46.bounds["top"])
  );
}
const Gn = {
    id: "board.command.analyze-model-layout",
    type: e.CommandType["COMMAND"],
    handler: (_0x2ead07, _0x1770a2) => {
      if (!(_0x1770a2 != null && _0x1770a2.unitId) || !_0x1770a2.subUnitId)
        return false;
      let _0x5e55bd = _0x2ead07.get(N);
      return Zt(
        _0x5e55bd.getElementData(_0x1770a2.unitId, _0x1770a2.subUnitId),
        _0x5e55bd.getElementOrder(_0x1770a2.unitId, _0x1770a2.subUnitId),
        { source: "model", focusPadding: _0x1770a2.focusPadding },
      );
    },
  },
  Kn = (0, e.createIdentifier)("board.chart-adapter.service");
var qn = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x40696c) {
    return (
      this._adapters["push"](_0x40696c),
      (0, e.toDisposable)(() => {
        let _0x58dbf7 = this._adapters["indexOf"](_0x40696c);
        _0x58dbf7 >= 0 && this._adapters["splice"](_0x58dbf7, 1);
      })
    );
  }
  getInsertChartMutationInfos(_0x325d4b) {
    for (let _0x14df27 of this._adapters) {
      let _0x2bcd89 = _0x14df27.getInsertChartMutationInfos(_0x325d4b);
      if (_0x2bcd89) return _0x2bcd89;
    }
    return null;
  }
  getRemoveChartMutationInfos(_0x3d29d0) {
    let _0x114ad2 = { redoMutations: [], undoMutations: [] };
    for (let _0x5314e5 of this._adapters) {
      var _0x18528d;
      let _0x24f3c8 =
        (_0x18528d = _0x5314e5.getRemoveChartMutationInfos) == null
          ? undefined
          : _0x18528d.call(_0x5314e5, _0x3d29d0);
      _0x24f3c8 &&
        (_0x114ad2.redoMutations["push"](..._0x24f3c8.redoMutations),
        _0x114ad2.undoMutations["push"](..._0x24f3c8.undoMutations));
    }
    return _0x114ad2;
  }
};
const Jn = {
  id: "board.command.insert-chart",
  type: e.CommandType["COMMAND"],
  handler: (_0x1fd913, _0x55d92f) => {
    if (!_0x55d92f) return false;
    let _0x37208b = _0x1fd913.get(Kn).getInsertChartMutationInfos(_0x55d92f);
    if (!_0x37208b || _0x37208b.redoMutations["length"] === 0) return false;
    let _0x9589ea = (0, e.sequenceExecute)(
      _0x37208b.redoMutations,
      _0x1fd913.get(e.ICommandService),
    );
    return _0x9589ea.result
      ? (_0x1fd913
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x55d92f.unitId,
            redoMutations: _0x37208b.redoMutations,
            undoMutations: _0x37208b.undoMutations,
          }),
        true)
      : (Yn(
          _0x37208b.rollbackMutationGroups["slice"](
            0,
            _0x9589ea.index,
          ).reverse(),
          _0x1fd913.get(e.ICommandService),
        ),
        false);
  },
};
function Yn(_0x2af3e8, _0x47deeb) {
  _0x2af3e8.forEach((_0x5aa021) => {
    (0, e.sequenceExecute)(_0x5aa021, _0x47deeb);
  });
}
function Xn(_0x144240, _0x5a57df) {
  return _0x144240.kind === "free"
    ? {
        ..._0x144240,
        x: _0x144240.x + _0x5a57df.x,
        y: _0x144240.y + _0x5a57df.y,
      }
    : _0x144240.fallbackPoint
      ? {
          ..._0x144240,
          fallbackPoint: {
            x: _0x144240.fallbackPoint["x"] + _0x5a57df.x,
            y: _0x144240.fallbackPoint["y"] + _0x5a57df.y,
          },
        }
      : _0x144240;
}
function Zn(_0x24d03e, _0x45f3ca) {
  return _0x24d03e.kind === "free"
    ? {
        ..._0x24d03e,
        x: _0x24d03e.x + _0x45f3ca.x,
        y: _0x24d03e.y + _0x45f3ca.y,
      }
    : _0x24d03e;
}
function Qn(_0x149fee, _0x304a0b) {
  return _0x149fee.kind === "manual"
    ? {
        ..._0x149fee,
        x: _0x149fee.x + _0x304a0b.x,
        y: _0x149fee.y + _0x304a0b.y,
      }
    : _0x149fee;
}
function $n(_0xb2c345, _0x63dd2e, _0x2e9b0e) {
  return _0xb2c345.kind === "manual"
    ? {
        ..._0xb2c345,
        x: _0xb2c345.x + _0x63dd2e.x,
        y: _0xb2c345.y + _0x63dd2e.y,
        ...(_0xb2c345.endpoint
          ? { endpoint: _0x2e9b0e(_0xb2c345.endpoint, _0x63dd2e) }
          : null),
      }
    : _0xb2c345;
}
function er(_0x186463, _0x469f77) {
  return _0x186463.kind === "manual"
    ? {
        ..._0x186463,
        x: _0x186463.x + _0x469f77.x,
        y: _0x186463.y + _0x469f77.y,
      }
    : _0x186463;
}
function tr(_0x2a2f2a, _0xae5271, _0x10f7ff) {
  var _0x154f6c, _0xa09e98;
  let _0x154038 = _0x2a2f2a.connectorData["curveData"];
  return (
    _0x154038 && {
      ..._0x154038,
      anchors:
        (_0x154f6c = _0x154038.anchors) == null
          ? undefined
          : _0x154f6c.map((_0x2642f3) => $n(_0x2642f3, _0xae5271, _0x10f7ff)),
      controls:
        (_0xa09e98 = _0x154038.controls) == null
          ? undefined
          : _0xa09e98.map((_0x20395f) => er(_0x20395f, _0xae5271)),
    }
  );
}
function nr(_0x297c0c, _0x4a84d0) {
  let _0x5c2a62 = _0x297c0c.connectorData["orthogonalData"];
  return _0x5c2a62 != null && _0x5c2a62.routePoints
    ? {
        ..._0x5c2a62,
        routePoints: _0x5c2a62.routePoints["map"]((_0x5bc40f) =>
          Qn(_0x5bc40f, _0x4a84d0),
        ),
      }
    : _0x5c2a62;
}
function rr(_0xbc9afe, _0x3cdaff) {
  var _0x160bbb;
  let _0x4e390c = nr(_0xbc9afe, _0x3cdaff),
    _0x3cbe49 = tr(_0xbc9afe, _0x3cdaff, Xn),
    _0xba984f = {
      ..._0xbc9afe.connectorData,
      start: Xn(_0xbc9afe.connectorData["start"], _0x3cdaff),
      end: Xn(_0xbc9afe.connectorData["end"], _0x3cdaff),
      waypoints:
        (_0x160bbb = _0xbc9afe.connectorData["waypoints"]) == null
          ? undefined
          : _0x160bbb.map((_0x3bbb74) => Qn(_0x3bbb74, _0x3cdaff)),
    };
  return (
    _0x4e390c
      ? (_0xba984f.orthogonalData = _0x4e390c)
      : delete _0xba984f.orthogonalData,
    _0x3cbe49 ? (_0xba984f.curveData = _0x3cbe49) : delete _0xba984f.curveData,
    { ..._0xbc9afe, connectorData: _0xba984f }
  );
}
function ir(_0x5bc743, _0xf9f1a5) {
  var _0x14fb07;
  let _0x3a3712 = nr(_0x5bc743, _0xf9f1a5),
    _0x4f9cb5 = tr(_0x5bc743, _0xf9f1a5, Zn),
    _0x364b00 = {
      ..._0x5bc743.connectorData,
      start: Zn(_0x5bc743.connectorData["start"], _0xf9f1a5),
      end: Zn(_0x5bc743.connectorData["end"], _0xf9f1a5),
      waypoints:
        (_0x14fb07 = _0x5bc743.connectorData["waypoints"]) == null
          ? undefined
          : _0x14fb07.map((_0x49f22a) => Qn(_0x49f22a, _0xf9f1a5)),
    };
  return (
    _0x3a3712
      ? (_0x364b00.orthogonalData = _0x3a3712)
      : delete _0x364b00.orthogonalData,
    _0x4f9cb5 ? (_0x364b00.curveData = _0x4f9cb5) : delete _0x364b00.curveData,
    { ..._0x5bc743, connectorData: _0x364b00 }
  );
}
function ar(_0x5eb40e, _0x111469, _0x5d72e3) {
  return _0x5eb40e.kind === "free" ||
    !_0x111469.has(_0x5eb40e.shapeId) ||
    !_0x5eb40e.fallbackPoint
    ? _0x5eb40e
    : {
        ..._0x5eb40e,
        fallbackPoint: {
          x: _0x5eb40e.fallbackPoint["x"] + _0x5d72e3.x,
          y: _0x5eb40e.fallbackPoint["y"] + _0x5d72e3.y,
        },
      };
}
function or(_0x3f3157, _0x24951a) {
  var _0x46db13;
  let _0x5a4a79 =
    (_0x46db13 = R(_0x24951a, _0x3f3157.shapeId)) == null
      ? undefined
      : _0x46db13.worldTransform;
  if (!_0x5a4a79)
    return _0x3f3157.fallbackPoint ? { ..._0x3f3157.fallbackPoint } : null;
  let _0x5ac28f = _0x5a4a79.left ?? 0,
    _0x4c5ba2 = _0x5a4a79.top ?? 0,
    _0x4af70b = _0x5a4a79.width ?? 0,
    _0x668b83 = _0x5a4a79.height ?? 0,
    _0x7480ca = Math.max(0, Math.min(1, _0x3f3157.segmentT));
  switch (((_0x3f3157.segmentIndex % 4) + 4) % 4) {
    case 0:
      return { x: _0x5ac28f + _0x4af70b * _0x7480ca, y: _0x4c5ba2 };
    case 1:
      return { x: _0x5ac28f + _0x4af70b, y: _0x4c5ba2 + _0x668b83 * _0x7480ca };
    case 2:
      return {
        x: _0x5ac28f + _0x4af70b * (1 - _0x7480ca),
        y: _0x4c5ba2 + _0x668b83,
      };
    default:
      return { x: _0x5ac28f, y: _0x4c5ba2 + _0x668b83 * (1 - _0x7480ca) };
  }
}
function sr(_0x3562f4, _0x466fc3) {
  var _0x592d86;
  let _0x4b31b0 =
    (_0x592d86 = R(_0x466fc3, _0x3562f4.shapeId)) == null
      ? undefined
      : _0x592d86.worldTransform;
  if (!_0x4b31b0)
    return _0x3562f4.fallbackPoint ? { ..._0x3562f4.fallbackPoint } : null;
  let _0x13a07e = _0x4b31b0.left ?? 0,
    _0x4172e4 = _0x4b31b0.top ?? 0,
    _0x3f087d = _0x4b31b0.width ?? 0,
    _0x22cf34 = _0x4b31b0.height ?? 0,
    _0x5ca5f0 = _0x3562f4.connectionPosition ?? 0.5;
  switch (((_0x3562f4.connectionSiteId % 4) + 4) % 4) {
    case 0:
      return { x: _0x13a07e + _0x3f087d * _0x5ca5f0, y: _0x4172e4 };
    case 1:
      return { x: _0x13a07e + _0x3f087d, y: _0x4172e4 + _0x22cf34 * _0x5ca5f0 };
    case 2:
      return { x: _0x13a07e + _0x3f087d * _0x5ca5f0, y: _0x4172e4 + _0x22cf34 };
    default:
      return { x: _0x13a07e, y: _0x4172e4 + _0x22cf34 * _0x5ca5f0 };
  }
}
function cr(_0x1a6ed0, _0x5baffb, _0x3ab88a) {
  var _0x5b3aec;
  if (
    (_0x1a6ed0.kind !== "shapeBoundary" && _0x1a6ed0.kind !== "shapeSite") ||
    !_0x5baffb.has(_0x1a6ed0.shapeId)
  )
    return _0x1a6ed0;
  let _0x49a640 =
    _0x1a6ed0.kind === "shapeBoundary"
      ? or(_0x1a6ed0, _0x3ab88a)
      : sr(_0x1a6ed0, _0x3ab88a);
  return !_0x49a640 ||
    (((_0x5b3aec = _0x1a6ed0.fallbackPoint) == null
      ? undefined
      : _0x5b3aec.x) === _0x49a640.x &&
      _0x1a6ed0.fallbackPoint["y"] === _0x49a640.y)
    ? _0x1a6ed0
    : { ..._0x1a6ed0, fallbackPoint: _0x49a640 };
}
function lr(_0x186544) {
  return _0x186544.kind === "free"
    ? { x: _0x186544.x, y: _0x186544.y }
    : _0x186544.fallbackPoint
      ? { ..._0x186544.fallbackPoint }
      : null;
}
function ur(_0x188f24) {
  var _0x2398da, _0x37039b, _0x4c1d5e;
  let _0x22d95a = [
    lr(_0x188f24.connectorData["start"]),
    ...(_0x188f24.connectorData["waypoints"] ?? [])
      .filter((_0x52bad7) => _0x52bad7.kind === "manual")
      .map((_0x4210dd) => ({ x: _0x4210dd.x, y: _0x4210dd.y })),
    ...(
      ((_0x2398da = _0x188f24.connectorData["orthogonalData"]) == null
        ? undefined
        : _0x2398da.routePoints) ?? []
    )
      .filter((_0x263421) => _0x263421.kind === "manual")
      .map((_0x6b9a1b) => ({ x: _0x6b9a1b.x, y: _0x6b9a1b.y })),
    ...(
      ((_0x37039b = _0x188f24.connectorData["curveData"]) == null
        ? undefined
        : _0x37039b.anchors) ?? []
    )
      .filter((_0x449e57) => _0x449e57.kind === "manual")
      .map((_0x34941c) => ({ x: _0x34941c.x, y: _0x34941c.y })),
    ...(
      ((_0x4c1d5e = _0x188f24.connectorData["curveData"]) == null
        ? undefined
        : _0x4c1d5e.controls) ?? []
    )
      .filter((_0x3e3bd9) => _0x3e3bd9.kind === "manual")
      .map((_0x6e2faf) => ({ x: _0x6e2faf.x, y: _0x6e2faf.y })),
    lr(_0x188f24.connectorData["end"]),
  ].filter((_0x58a699) => !!_0x58a699);
  if (_0x22d95a.length === 0) return _0x188f24.transform;
  let _0x5d51a9 = Math.min(..._0x22d95a.map((_0x440eb1) => _0x440eb1.x)),
    _0x23cdf0 = Math.min(..._0x22d95a.map((_0x3aa72a) => _0x3aa72a.y)),
    _0x183ac5 = Math.max(..._0x22d95a.map((_0x2c71c7) => _0x2c71c7.x)),
    _0x6fa3d7 = Math.max(..._0x22d95a.map((_0x464cdc) => _0x464cdc.y));
  return {
    ..._0x188f24.transform,
    left: _0x5d51a9,
    top: _0x23cdf0,
    width: Math.max(1, _0x183ac5 - _0x5d51a9),
    height: Math.max(1, _0x6fa3d7 - _0x23cdf0),
    rotation: 0,
  };
}
function dr(_0x5866fb, _0x1a2039, _0x387382) {
  let _0x2f289e = {
    ..._0x5866fb,
    connectorData: {
      ..._0x5866fb.connectorData,
      start: ar(_0x5866fb.connectorData["start"], _0x1a2039, _0x387382),
      end: ar(_0x5866fb.connectorData["end"], _0x1a2039, _0x387382),
    },
  };
  return _0x2f289e.connectorData["start"] ===
    _0x5866fb.connectorData["start"] &&
    _0x2f289e.connectorData["end"] === _0x5866fb.connectorData["end"]
    ? _0x5866fb
    : { ..._0x2f289e, transform: ur(_0x2f289e) };
}
function fr(_0xf81182, _0x4c52bc, _0x175f89) {
  let _0x15f9f8 = {
    ..._0xf81182,
    connectorData: {
      ..._0xf81182.connectorData,
      start: cr(_0xf81182.connectorData["start"], _0x4c52bc, _0x175f89),
      end: cr(_0xf81182.connectorData["end"], _0x4c52bc, _0x175f89),
    },
  };
  return _0x15f9f8.connectorData["start"] ===
    _0xf81182.connectorData["start"] &&
    _0x15f9f8.connectorData["end"] === _0xf81182.connectorData["end"]
    ? _0xf81182
    : { ..._0x15f9f8, transform: ur(_0x15f9f8) };
}
function pr(_0x467710) {
  return {
    left: _0x467710.left ?? 0,
    top: _0x467710.top ?? 0,
    width: _0x467710.width ?? 0,
    height: _0x467710.height ?? 0,
    angle: _0x467710.rotation ?? 0,
    flipX: _0x467710.flipX,
    flipY: _0x467710.flipY,
  };
}
function mr(_0x1e61f2) {
  return _0x1e61f2.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
}
function hr(_0x54a429) {
  let _0x30dfa0 = mr(_0x54a429.text).split("\x0a"),
    _0x59e9de = _0x30dfa0.join("\x0d") + "\x0d\x0a",
    _0x386580 = Math.max(0, _0x59e9de.length - 2),
    _0x1018b8 = new Set(),
    _0x16e980 = 0,
    _0x1bc8c2 = _0x30dfa0.map((_0x17c305) => {
      let _0x1009da = _0x16e980 + _0x17c305.length;
      return (
        (_0x16e980 += _0x17c305.length + 1),
        {
          startIndex: _0x1009da,
          paragraphId: (0, e.createParagraphId)(_0x1018b8),
          paragraphStyle: {
            horizontalAlign: _0x54a429.horizontalAlign,
            lineSpacing: 1,
            snapToGrid: e.BooleanNumber["FALSE"],
            spaceAbove: { v: 0 },
            spaceBelow: { v: 0 },
          },
        }
      );
    });
  return {
    id: _0x54a429.id ?? "board-shape-text",
    body: {
      dataStream: _0x59e9de,
      paragraphs: _0x1bc8c2,
      sectionBreaks: [
        {
          sectionId: (0, e.createSectionId)(new Set()),
          startIndex: Math.max(0, _0x59e9de.length - 1),
          gridType: e.GridType["DEFAULT"],
          renderConfig: {
            shapeTextOpticalVerticalAlign: e.BooleanNumber["FALSE"],
            verticalAlign: _0x54a429.verticalAlign,
            wrapStrategy: _0x54a429.wrapStrategy,
            zeroWidthParagraphBreak: e.BooleanNumber["TRUE"],
          },
        },
      ],
      textRuns: _0x54a429.textStyle
        ? [
            {
              st: 0,
              ed: Math.max(1, _0x386580),
              ts: { ..._0x54a429.textStyle },
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
        horizontalAlign: _0x54a429.horizontalAlign,
        verticalAlign: _0x54a429.verticalAlign,
        wrapStrategy: _0x54a429.wrapStrategy,
        zeroWidthParagraphBreak: e.BooleanNumber["TRUE"],
      },
      ...(_0x54a429.textStyle
        ? { textStyle: { ..._0x54a429.textStyle } }
        : null),
    },
  };
}
function U(_0x25b977) {
  return _0x25b977.left + _0x25b977.width;
}
function W(_0x51401b) {
  return _0x51401b.top + _0x51401b.height;
}
function gr(_0x2eb4d5, _0x120ce4) {
  return {
    left: _0x2eb4d5.left - _0x120ce4,
    top: _0x2eb4d5.top - _0x120ce4,
    width: _0x2eb4d5.width + _0x120ce4 * 2,
    height: _0x2eb4d5.height + _0x120ce4 * 2,
  };
}
function _r(_0xc6e1, _0x221207) {
  return (
    _0x221207.left >= _0xc6e1.left &&
    _0x221207.top >= _0xc6e1.top &&
    U(_0x221207) <= U(_0xc6e1) &&
    W(_0x221207) <= W(_0xc6e1)
  );
}
function vr(_0x4b25d4) {
  return (
    _0x4b25d4.containerData["kind"] === "swimlane" &&
    !!_0x4b25d4.containerData["swimlane"]
  );
}
function yr(_0x3820e2, _0xa0d3e0) {
  return (
    _0x3820e2.left < U(_0xa0d3e0) &&
    U(_0x3820e2) > _0xa0d3e0.left &&
    _0x3820e2.top < W(_0xa0d3e0) &&
    W(_0x3820e2) > _0xa0d3e0.top
  );
}
function br(_0x1f408f) {
  if (_0x1f408f.length === 0) return null;
  let _0x2e094a = Math.min(..._0x1f408f.map((_0x12bb77) => _0x12bb77.left)),
    _0x13dfe4 = Math.min(..._0x1f408f.map((_0x2e60dc) => _0x2e60dc.top)),
    _0x9dc7d4 = Math.max(..._0x1f408f.map(U)),
    _0x566702 = Math.max(..._0x1f408f.map(W));
  return {
    left: _0x2e094a,
    top: _0x13dfe4,
    width: _0x9dc7d4 - _0x2e094a,
    height: _0x566702 - _0x13dfe4,
  };
}
function xr(_0x61e056, _0x27d65d) {
  let { containerData: _0x34d7c3 } = _0x61e056,
    _0x52b692 =
      _0x34d7c3.titleVisible === false ? 0 : (_0x34d7c3.headerSize ?? 0),
    _0x3f5492 = vr(_0x61e056)
      ? { top: 0, right: 0, bottom: 0, left: 0 }
      : _0x34d7c3.padding,
    _0x1619dc = {
      left: _0x27d65d.left + _0x3f5492.left,
      top: _0x27d65d.top + _0x52b692 + _0x3f5492.top,
      width: Math.max(0, _0x27d65d.width - _0x3f5492.left - _0x3f5492.right),
      height: Math.max(
        0,
        _0x27d65d.height - _0x52b692 - _0x3f5492.top - _0x3f5492.bottom,
      ),
    },
    _0x2e40c1 = _0x34d7c3.capturePolicy["expelHysteresis"] ?? 0;
  return {
    outerBounds: _0x27d65d,
    headerBounds:
      _0x52b692 > 0
        ? {
            left: _0x27d65d.left,
            top: _0x27d65d.top,
            width: _0x27d65d.width,
            height: _0x52b692,
          }
        : null,
    contentBounds: _0x1619dc,
    expandedContentBounds: gr(_0x1619dc, _0x2e40c1),
  };
}
function Sr(_0x3a3daa, _0xe4edf5, _0x22e76e) {
  let _0xe73e9 = vr(_0x3a3daa)
      ? { top: 0, right: 0, bottom: 0, left: 0 }
      : _0x3a3daa.containerData["padding"],
    _0x57dedf =
      _0x3a3daa.containerData["titleVisible"] === false
        ? 0
        : (_0x3a3daa.containerData["headerSize"] ?? 0),
    _0xf42347 = Math.min(_0xe4edf5.left, _0x22e76e.left - _0xe73e9.left),
    _0x5b761f = Math.min(
      _0xe4edf5.top,
      _0x22e76e.top - _0x57dedf - _0xe73e9.top,
    ),
    _0x464e28 = Math.max(U(_0xe4edf5), U(_0x22e76e) + _0xe73e9.right),
    _0x15703d = Math.max(W(_0xe4edf5), W(_0x22e76e) + _0xe73e9.bottom);
  return {
    left: _0xf42347,
    top: _0x5b761f,
    width: _0x464e28 - _0xf42347,
    height: _0x15703d - _0x5b761f,
  };
}
function Cr(_0x3e188a) {
  return _0x3e188a === "horizontal" ? "horizontal" : "vertical";
}
function wr(_0x2777a8, _0x28ba2e, _0x302c3d) {
  return Object.values(_0x2777a8).some(
    (_0x448e51) =>
      _0x448e51.element["parentId"] === _0x28ba2e &&
      _0x448e51.element["laneId"] === _0x302c3d,
  );
}
function Tr(_0x3bb048) {
  if (
    !_0x3bb048 ||
    (_0x3bb048.orientation !== "horizontal" &&
      _0x3bb048.orientation !== "vertical") ||
    (_0x3bb048.collapsedLaneSize !== undefined &&
      _0x3bb048.collapsedLaneSize < 0)
  )
    return false;
  let _0x54841d = new Set();
  return _0x3bb048.lanes["every"]((_0x578eeb) =>
    !_0x578eeb.id ||
    _0x54841d.has(_0x578eeb.id) ||
    _0x578eeb.size < 0 ||
    (_0x578eeb.minSize !== undefined && _0x578eeb.minSize < 0)
      ? false
      : (_0x54841d.add(_0x578eeb.id), true),
  );
}
function Er(_0x49342b) {
  return {
    ..._0x49342b,
    orientation: Cr(_0x49342b.orientation),
    laneGap: 0,
    lanes: _0x49342b.lanes["map"]((_0x2c776e) => ({ ..._0x2c776e })),
  };
}
function Dr(_0x584faa) {
  return [..._0x584faa.lanes].sort(
    (_0x29282e, _0x4dc186) => _0x29282e.order - _0x4dc186.order,
  );
}
function Or(_0x2de1ce, _0x2c40ca) {
  let _0x25accd = 0;
  for (let _0x3cb0f4 of Dr(_0x2de1ce)) {
    if (_0x3cb0f4.id === _0x2c40ca) return _0x25accd;
    _0x25accd += _0x3cb0f4.size;
  }
}
function kr(_0x125694, _0x560649) {
  return Math.max(
    0,
    _0x560649.collapsed === true
      ? (_0x125694.collapsedLaneSize ?? 32)
      : _0x560649.size,
  );
}
function Ar(_0xf6bd07, _0x4001ec) {
  let _0x26965a = new Map(
    _0x4001ec.lanes["map"]((_0x3fd099) => [_0x3fd099.id, _0x3fd099]),
  );
  return _0xf6bd07.lanes["some"]((_0x3f3c3) => {
    if (_0x3f3c3.locked !== true) return false;
    if (
      _0x4001ec.orientation !== _0xf6bd07.orientation ||
      _0x4001ec.headerSize !== _0xf6bd07.headerSize ||
      _0x4001ec.collapsedLaneSize !== _0xf6bd07.collapsedLaneSize
    )
      return true;
    let _0x487280 = _0x26965a.get(_0x3f3c3.id),
      _0x729790 = Or(_0xf6bd07, _0x3f3c3.id),
      _0x5a8c9f = Or(_0x4001ec, _0x3f3c3.id);
    return (
      !_0x487280 ||
      _0x5a8c9f !== _0x729790 ||
      _0x487280.title !== _0x3f3c3.title ||
      _0x487280.order !== _0x3f3c3.order ||
      _0x487280.size !== _0x3f3c3.size ||
      _0x487280.minSize !== _0x3f3c3.minSize ||
      _0x487280.locked !== _0x3f3c3.locked ||
      _0x487280.collapsed !== _0x3f3c3.collapsed
    );
  });
}
function jr(_0x288932, _0x1f67cc) {
  return (
    _0x1f67cc.x >= _0x288932.left &&
    _0x1f67cc.x <= U(_0x288932) &&
    _0x1f67cc.y >= _0x288932.top &&
    _0x1f67cc.y <= W(_0x288932)
  );
}
function Mr(_0x20910d, _0x5cc354) {
  return (
    Math.max(
      0,
      Math.min(U(_0x20910d), U(_0x5cc354)) -
        Math.max(_0x20910d.left, _0x5cc354.left),
    ) *
    Math.max(
      0,
      Math.min(W(_0x20910d), W(_0x5cc354)) -
        Math.max(_0x20910d.top, _0x5cc354.top),
    )
  );
}
function Nr(_0x52b76d, _0x21167c) {
  let _0xd79236 =
    _0x52b76d.containerData["titleVisible"] === false
      ? 0
      : (_0x52b76d.containerData["headerSize"] ?? 0);
  return {
    left: _0x21167c.left,
    top: _0x21167c.top + _0xd79236,
    width: _0x21167c.width,
    height: Math.max(0, _0x21167c.height - _0xd79236),
  };
}
function Pr(_0x30a127, _0x26e6f2) {
  let _0x3569d1 =
    _0x30a127.containerData["kind"] === "swimlane"
      ? _0x30a127.containerData["swimlane"]
      : undefined;
  if (!_0x3569d1) return null;
  let _0x5f5993 = Er(_0x3569d1),
    _0x3994ed = Dr(_0x5f5993);
  if (_0x3994ed.length === 0) return _0x5f5993;
  let _0x5027e8 = Nr(_0x30a127, _0x26e6f2),
    _0x509b00 =
      (_0x5f5993.orientation === "horizontal"
        ? _0x5027e8.height
        : _0x5027e8.width) -
      _0x3994ed.reduce(
        (_0x14b975, _0xb559fb) => _0x14b975 + kr(_0x5f5993, _0xb559fb),
        0,
      );
  if (Math.abs(_0x509b00) < 0.01) return _0x5f5993;
  let _0x393f5a = [..._0x3994ed].reverse().find((_0x31c4a6) => {
    if (_0x31c4a6.locked === true || _0x31c4a6.collapsed === true) return false;
    let _0x5d831d = _0x3994ed.findIndex(
      (_0x3eecbc) => _0x3eecbc.id === _0x31c4a6.id,
    );
    return !_0x3994ed
      .slice(_0x5d831d + 1)
      .some(
        (_0x50f7ee) =>
          _0x50f7ee.locked === true || _0x50f7ee.collapsed === true,
      );
  });
  if (!_0x393f5a) return _0x5f5993;
  let _0x3251a0 = Math.max(_0x393f5a.minSize ?? 0, _0x393f5a.size + _0x509b00);
  return _0x3251a0 === _0x393f5a.size
    ? _0x5f5993
    : {
        ..._0x5f5993,
        lanes: _0x5f5993.lanes["map"]((_0x58c8da) =>
          _0x58c8da.id === _0x393f5a.id
            ? { ..._0x58c8da, size: _0x3251a0 }
            : { ..._0x58c8da },
        ),
      };
}
function Fr(_0xcb395f, _0x32f688) {
  return Rr(_0xcb395f, _0x32f688).map(
    ({ lane: _0x4a7675, bounds: _0x4d8895 }) => ({
      lane: _0x4a7675,
      bounds: _0x4d8895,
    }),
  );
}
function Ir(_0xd9fdef, _0x24417c) {
  let _0x379028 = Pr(_0xd9fdef, _0x24417c);
  return Fr(
    _0x379028
      ? {
          ..._0xd9fdef,
          containerData: { ..._0xd9fdef.containerData, swimlane: _0x379028 },
        }
      : _0xd9fdef,
    _0x24417c,
  );
}
function Lr(_0x22c7c9, _0x18b0c5) {
  let _0x4f4b27 = Pr(_0x22c7c9, _0x18b0c5);
  return Rr(
    _0x4f4b27
      ? {
          ..._0x22c7c9,
          containerData: { ..._0x22c7c9.containerData, swimlane: _0x4f4b27 },
        }
      : _0x22c7c9,
    _0x18b0c5,
  );
}
function Rr(_0x32c18f, _0x1dd0fa) {
  let _0x34b6a8 =
    _0x32c18f.containerData["kind"] === "swimlane"
      ? _0x32c18f.containerData["swimlane"]
      : undefined;
  if (!_0x34b6a8) return [];
  let _0x4cec88 = Nr(_0x32c18f, _0x1dd0fa),
    _0x473316 =
      _0x34b6a8.orientation === "horizontal" ? _0x4cec88.top : _0x4cec88.left;
  return Dr(_0x34b6a8).flatMap((_0x367631) => {
    let _0x1325a3 =
        _0x367631.collapsed === true
          ? (_0x34b6a8.collapsedLaneSize ?? 32)
          : _0x367631.size,
      _0x55a724 = Math.max(0, _0x1325a3),
      _0x1149f7 =
        _0x34b6a8.orientation === "horizontal"
          ? Math.max(0, W(_0x4cec88) - _0x473316)
          : Math.max(0, U(_0x4cec88) - _0x473316),
      _0x1ec612 = Math.min(_0x55a724, _0x1149f7),
      _0x3697cd =
        _0x34b6a8.orientation === "horizontal"
          ? {
              left: _0x4cec88.left,
              top: _0x473316,
              width: _0x4cec88.width,
              height: _0x1ec612,
            }
          : {
              left: _0x473316,
              top: _0x4cec88.top,
              width: _0x1ec612,
              height: _0x4cec88.height,
            };
    if (((_0x473316 += _0x1ec612 + 0), _0x1ec612 <= 0)) return [];
    let _0x39b516 = Math.max(0, _0x34b6a8.headerSize ?? 0),
      _0x34ec37 =
        _0x39b516 > 0
          ? _0x34b6a8.orientation === "horizontal"
            ? {
                left: _0x3697cd.left,
                top: _0x3697cd.top,
                width: Math.min(_0x39b516, _0x3697cd.width),
                height: _0x3697cd.height,
              }
            : {
                left: _0x3697cd.left,
                top: _0x3697cd.top,
                width: _0x3697cd.width,
                height: Math.min(_0x39b516, _0x3697cd.height),
              }
          : null;
    return [
      {
        lane: _0x367631,
        bounds: _0x3697cd,
        headerBounds: _0x34ec37,
        contentBounds: _0x34ec37
          ? _0x34b6a8.orientation === "horizontal"
            ? {
                left: _0x34ec37.left + _0x34ec37.width,
                top: _0x3697cd.top,
                width: Math.max(0, _0x3697cd.width - _0x34ec37.width),
                height: _0x3697cd.height,
              }
            : {
                left: _0x3697cd.left,
                top: _0x34ec37.top + _0x34ec37.height,
                width: _0x3697cd.width,
                height: Math.max(0, _0x3697cd.height - _0x34ec37.height),
              }
          : _0x3697cd,
      },
    ];
  });
}
function zr(_0x81073b, _0x56f45f, _0x271f4b) {
  return (
    Fr(_0x81073b, _0x56f45f).find(({ bounds: _0x55c143 }) =>
      jr(_0x55c143, _0x271f4b),
    ) ?? null
  );
}
function Br(_0x9bd34f, _0x3fd35e, _0x1f2082) {
  let _0xa51d20 = Pr(_0x9bd34f, _0x3fd35e);
  return zr(
    _0xa51d20
      ? {
          ..._0x9bd34f,
          containerData: { ..._0x9bd34f.containerData, swimlane: _0xa51d20 },
        }
      : _0x9bd34f,
    _0x3fd35e,
    _0x1f2082,
  );
}
function Vr(_0xae3d5c, _0x8b9242, _0x1441a9) {
  let _0x41cbe9 = Rr(_0xae3d5c, _0x8b9242).find(
    ({ contentBounds: _0x369a5a }) => jr(_0x369a5a, _0x1441a9),
  );
  return _0x41cbe9 ? { lane: _0x41cbe9.lane, bounds: _0x41cbe9.bounds } : null;
}
function Hr(_0x15910a, _0x92ac54, _0x2536b6) {
  let _0x23b60b = Pr(_0x15910a, _0x92ac54);
  return Vr(
    _0x23b60b
      ? {
          ..._0x15910a,
          containerData: { ..._0x15910a.containerData, swimlane: _0x23b60b },
        }
      : _0x15910a,
    _0x92ac54,
    _0x2536b6,
  );
}
function Ur(_0xa3a671, _0x16f559, _0x54f88e) {
  let _0x5697d9 = Rr(_0xa3a671, _0x16f559).find(({ contentBounds: _0x15eec }) =>
    _r(_0x15eec, _0x54f88e),
  );
  return _0x5697d9 ? { lane: _0x5697d9.lane, bounds: _0x5697d9.bounds } : null;
}
function Wr(_0x7e9e90, _0x55cc19, _0x1d13bc) {
  let _0x5061b8 = Pr(_0x7e9e90, _0x55cc19);
  return Ur(
    _0x5061b8
      ? {
          ..._0x7e9e90,
          containerData: { ..._0x7e9e90.containerData, swimlane: _0x5061b8 },
        }
      : _0x7e9e90,
    _0x55cc19,
    _0x1d13bc,
  );
}
function Gr(_0x26c93d, _0xcbd84e, _0x5f26fc) {
  var _0x36b70b;
  let _0xff52d8 =
    _0x26c93d.containerData["kind"] === "swimlane"
      ? _0x26c93d.containerData["swimlane"]
      : undefined;
  if (!_0xff52d8) return null;
  let _0xcc2f9e = Er(_0xff52d8),
    _0xa17000 = Lr(
      {
        ..._0x26c93d,
        containerData: { ..._0x26c93d.containerData, swimlane: _0xcc2f9e },
      },
      _0xcbd84e,
    ),
    _0x4efeed = _0xa17000.find(({ contentBounds: _0x16d54e }) =>
      _r(_0x16d54e, _0x5f26fc),
    );
  if (_0x4efeed) return { laneId: _0x4efeed.lane["id"], swimlane: _0xcc2f9e };
  let _0x273e97 =
    (_0x36b70b = _0xa17000
      .map((_0x119304) => ({
        region: _0x119304,
        area: Mr(_0x119304.contentBounds, _0x5f26fc),
      }))
      .filter(({ area: _0x5b1ed0 }) => _0x5b1ed0 > 0)
      .sort((_0x2d7f40, _0x57d848) => _0x57d848.area - _0x2d7f40.area)[0]) ==
    null
      ? undefined
      : _0x36b70b.region;
  if (
    !_0x273e97 ||
    _0x273e97.lane["locked"] === true ||
    _0x273e97.lane["collapsed"] === true
  )
    return null;
  let _0x277f69 =
    _0xcc2f9e.orientation === "vertical"
      ? Math.max(
          _0x273e97.lane["size"],
          U(_0x5f26fc) - _0x273e97.bounds["left"],
        )
      : Math.max(
          _0x273e97.lane["size"],
          W(_0x5f26fc) - _0x273e97.bounds["top"],
        );
  return _0x277f69 === _0x273e97.lane["size"]
    ? null
    : {
        laneId: _0x273e97.lane["id"],
        swimlane: Er({
          ..._0xcc2f9e,
          lanes: _0xcc2f9e.lanes["map"]((_0x4c4cbb) =>
            _0x4c4cbb.id === _0x273e97.lane["id"]
              ? { ..._0x4c4cbb, size: _0x277f69 }
              : { ..._0x4c4cbb },
          ),
        }),
      };
}
const Kr = r.ShapeTextWrapType["None"],
  qr = r.ShapeTextAutoFitType["SpAutoFit"];
function Jr(_0x3274fa = Kr) {
  return { autoFitType: qr, textWrap: _0x3274fa };
}
function Yr(_0x86b096) {
  let _0x251a1f = _0x86b096,
    _0x3ecbb3 = {},
    _0x2cc716 = _0x251a1f == null ? undefined : _0x251a1f.fontSize;
  return (
    _0x251a1f != null &&
      _0x251a1f.fontFamily &&
      (_0x3ecbb3.ff = _0x251a1f.fontFamily),
    typeof _0x2cc716 == "number" && (_0x3ecbb3.fs = _0x2cc716),
    _0x251a1f != null &&
      _0x251a1f.color &&
      (_0x3ecbb3.cl = { rgb: _0x251a1f.color }),
    (_0x251a1f == null ? undefined : _0x251a1f.bold) !== undefined &&
      (_0x3ecbb3.bl = _0x251a1f.bold
        ? e.BooleanNumber["TRUE"]
        : e.BooleanNumber["FALSE"]),
    (_0x251a1f == null ? undefined : _0x251a1f.italic) !== undefined &&
      (_0x3ecbb3.it = _0x251a1f.italic
        ? e.BooleanNumber["TRUE"]
        : e.BooleanNumber["FALSE"]),
    (_0x251a1f == null ? undefined : _0x251a1f.underline) !== undefined &&
      (_0x3ecbb3.ul = {
        s: _0x251a1f.underline
          ? e.BooleanNumber["TRUE"]
          : e.BooleanNumber["FALSE"],
      }),
    (_0x251a1f == null ? undefined : _0x251a1f.strikethrough) !== undefined &&
      (_0x3ecbb3.st = {
        s: _0x251a1f.strikethrough
          ? e.BooleanNumber["TRUE"]
          : e.BooleanNumber["FALSE"],
      }),
    (_0x251a1f == null ? undefined : _0x251a1f.textFill) !== undefined &&
      (_0x3ecbb3.textFill = _0x251a1f.textFill),
    _0x3ecbb3
  );
}
function Xr(_0x4b017e) {
  var _0x401312, _0x31a9bf, _0x3693c2;
  return _0x4b017e
    ? {
        ...(typeof _0x4b017e.ff == "string"
          ? { fontFamily: _0x4b017e.ff }
          : null),
        ...(_0x4b017e.fs === undefined ? null : { fontSize: _0x4b017e.fs }),
        ...(typeof ((_0x401312 = _0x4b017e.cl) == null
          ? undefined
          : _0x401312.rgb) == "string"
          ? { color: _0x4b017e.cl["rgb"] }
          : null),
        ...(_0x4b017e.bl === undefined
          ? null
          : { bold: _0x4b017e.bl === e.BooleanNumber["TRUE"] }),
        ...(_0x4b017e.it === undefined
          ? null
          : { italic: _0x4b017e.it === e.BooleanNumber["TRUE"] }),
        ...(((_0x31a9bf = _0x4b017e.ul) == null ? undefined : _0x31a9bf.s) ===
        undefined
          ? null
          : { underline: _0x4b017e.ul["s"] === e.BooleanNumber["TRUE"] }),
        ...(((_0x3693c2 = _0x4b017e.st) == null ? undefined : _0x3693c2.s) ===
        undefined
          ? null
          : { strikethrough: _0x4b017e.st["s"] === e.BooleanNumber["TRUE"] }),
        ...(_0x4b017e.textFill === undefined
          ? null
          : { textFill: _0x4b017e.textFill }),
      }
    : {};
}
function Zr(_0x45b610) {
  let _0x241b14 = _0x45b610.horizontal !== false,
    _0x1c3a4e = _0x45b610.horizontalAlign ?? e.HorizontalAlign["LEFT"],
    _0x5433e6 = _0x45b610.verticalAlign ?? e.VerticalAlign["TOP"],
    _0x24adc5 = _0x45b610.wrapStrategy ?? e.WrapStrategy["CLIP"];
  return {
    ...Jr(_0x45b610.textWrap),
    ...(_0x45b610.bold === undefined ? null : { bold: _0x45b610.bold }),
    ...(_0x45b610.color === undefined ? null : { color: _0x45b610.color }),
    ...(_0x45b610.fontFamily === undefined
      ? null
      : { fontFamily: _0x45b610.fontFamily }),
    ...(_0x45b610.fontSize === undefined
      ? null
      : { fontSize: _0x45b610.fontSize }),
    ...(_0x45b610.italic === undefined ? null : { italic: _0x45b610.italic }),
    ...(_0x45b610.strikethrough === undefined
      ? null
      : { strikethrough: _0x45b610.strikethrough }),
    ...(_0x45b610.textFill === undefined
      ? null
      : { textFill: _0x45b610.textFill }),
    ...(_0x45b610.underline === undefined
      ? null
      : { underline: _0x45b610.underline }),
    horizontalAlign: _0x1c3a4e,
    isHorizontal: _0x241b14,
    text: _0x45b610.text,
    textDirection: _0x241b14
      ? r.ShapeTextDirection["Horz"]
      : r.ShapeTextDirection["Vert"],
    verticalAlign: _0x5433e6,
    dataModel: {
      ha: _0x1c3a4e,
      va: _0x5433e6,
      doc: hr({
        horizontalAlign: _0x1c3a4e,
        id: _0x45b610.id,
        text: _0x45b610.text,
        textStyle: _0x45b610.textStyle,
        verticalAlign: _0x5433e6,
        wrapStrategy: _0x24adc5,
      }),
    },
  };
}
const G = {
  shapeWidth: 180,
  shapeHeight: 100,
  stickyWidth: 180,
  stickyHeight: 132,
  textBoxWidth: 200,
  textBoxHeight: 64,
  containerWidth: 810,
  containerHeight: 495,
};
function Qr(_0x493d95) {
  return {
    ..._0x493d95,
    fs: (_0x493d95 == null ? undefined : _0x493d95.fs) ?? 14,
  };
}
const $r = {
    headerSize: 32,
    padding: { top: 12, right: 12, bottom: 12, left: 12 },
    expelHysteresis: 12,
  },
  ei = 2500,
  ti = {
    shapeType: r.ShapeTypeEnum["RoundRect"],
    adjustValues: { adj: ei },
    fill: { color: "rgba(255, 255, 255, 0.72)" },
    stroke: { color: "#94a3b8", width: 1 },
  },
  ni = {
    acceptsChildren: true,
    acceptsContainer: true,
    allowNested: true,
    autoCapture: true,
    autoResize: true,
    membershipLocked: false,
    membershipAwareness: "interactive",
    clipChildren: false,
  },
  ri = {
    enabled: true,
    captureMode: "strict",
    expelMode: "hysteresis",
    expelHysteresis: $r.expelHysteresis,
    allowCaptureFromSiblingContainer: false,
    allowCaptureFromAncestorContainer: true,
    allowCaptureContainer: true,
    allowCaptureLockedObjects: false,
    modifierToDisable: "Alt",
    modifierToForce: "Shift",
  },
  K = {
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
function ii(_0x56ed48 = true) {
  return _0x56ed48
    ? { width: G.textBoxWidth, height: G.textBoxHeight }
    : { width: G.textBoxHeight, height: G.textBoxWidth };
}
function ai(_0x549637) {
  return _0x549637.kind === "free";
}
function oi(_0x3c2c29) {
  return ai(_0x3c2c29)
    ? { x: _0x3c2c29.x, y: _0x3c2c29.y }
    : _0x3c2c29.fallbackPoint
      ? { ..._0x3c2c29.fallbackPoint }
      : null;
}
function si(_0x4447ea, _0x3c7789, _0x33834 = [], _0x2800e4, _0x7c64cf) {
  var _0x516597, _0x31de06;
  let _0x324eec = [],
    _0x5a1cdb = oi(_0x4447ea);
  (_0x5a1cdb && _0x324eec.push(_0x5a1cdb),
    _0x33834.forEach((_0x815a14) =>
      _0x324eec.push({ x: _0x815a14.x, y: _0x815a14.y }),
    ));
  let _0x49cdcb = _0x2800e4 == null ? undefined : _0x2800e4.routePoints;
  (_0x49cdcb == null ||
    _0x49cdcb.forEach((_0xfe1e6c) =>
      _0x324eec.push({ x: _0xfe1e6c.x, y: _0xfe1e6c.y }),
    ),
    _0x7c64cf == null ||
      (_0x516597 = _0x7c64cf.anchors) == null ||
      _0x516597
        .filter((_0x2cbd95) => _0x2cbd95.kind === "manual")
        .forEach((_0xd7691a) =>
          _0x324eec.push({ x: _0xd7691a.x, y: _0xd7691a.y }),
        ),
    _0x7c64cf == null ||
      (_0x31de06 = _0x7c64cf.controls) == null ||
      _0x31de06
        .filter((_0x3c4673) => _0x3c4673.kind === "manual")
        .forEach((_0x2ce0b8) =>
          _0x324eec.push({ x: _0x2ce0b8.x, y: _0x2ce0b8.y }),
        ));
  let _0x15af77 = oi(_0x3c7789);
  if ((_0x15af77 && _0x324eec.push(_0x15af77), _0x324eec.length === 0))
    return null;
  let _0x371330 = Math.min(..._0x324eec.map((_0x4ad677) => _0x4ad677.x)),
    _0x43a3f5 = Math.min(..._0x324eec.map((_0x40af80) => _0x40af80.y)),
    _0x5d209b = Math.max(..._0x324eec.map((_0x234d2e) => _0x234d2e.x)),
    _0xf4b346 = Math.max(..._0x324eec.map((_0x2f767a) => _0x2f767a.y));
  return {
    left: _0x371330,
    top: _0x43a3f5,
    width: Math.max(1, _0x5d209b - _0x371330),
    height: Math.max(1, _0xf4b346 - _0x43a3f5),
    rotation: 0,
  };
}
function ci() {
  let {
    autoFitType: _0x531cc7,
    textWrap: _0x2b9e9b,
    ..._0x4f8e33
  } = Zr({
    fontSize: 16,
    horizontalAlign: e.HorizontalAlign["CENTER"],
    text: "",
    textStyle: { fs: 16 },
    verticalAlign: e.VerticalAlign["MIDDLE"],
    wrapStrategy: e.WrapStrategy["WRAP"],
  });
  return _0x4f8e33;
}
function li(_0x7c1a86) {
  var _0x12c45e,
    _0x2763db,
    _0x41b9c9,
    _0x242fef,
    _0x4caad4,
    _0x4850c9,
    _0x54862e,
    _0x3841b6,
    _0x5f0b4d,
    _0x581c34,
    _0x55cf6c;
  let _0x11ed20 =
      (_0x12c45e = _0x7c1a86.orthogonalData) == null
        ? undefined
        : _0x12c45e.routePoints,
    _0x36fdf4 =
      _0x11ed20 == null
        ? undefined
        : _0x11ed20.filter((_0x27b3df) => _0x27b3df.kind === "manual"),
    _0x3ead7b =
      ((_0x2763db = _0x7c1a86.waypoints) == null
        ? undefined
        : _0x2763db.filter((_0x46a085) => _0x46a085.kind === "manual")) ??
      _0x36fdf4,
    _0x23a4e7 =
      _0x7c1a86.labels ?? (_0x7c1a86.label ? [_0x7c1a86.label] : undefined),
    _0x4df424 = {
      start: _0x7c1a86.start,
      end: _0x7c1a86.end,
      routing: _0x7c1a86.routing ?? "orthogonal",
      routingMode:
        _0x7c1a86.routingMode ??
        (_0x3ead7b != null && _0x3ead7b.length ? "manual" : "auto"),
      waypoints: _0x3ead7b,
      style: {
        stroke:
          ((_0x41b9c9 = _0x7c1a86.style) == null
            ? undefined
            : _0x41b9c9.stroke) ?? "#1f2937",
        strokeWidth:
          ((_0x242fef = _0x7c1a86.style) == null
            ? undefined
            : _0x242fef.strokeWidth) ?? 2,
        opacity:
          (_0x4caad4 = _0x7c1a86.style) == null ? undefined : _0x4caad4.opacity,
        dash:
          (_0x4850c9 = _0x7c1a86.style) == null ? undefined : _0x4850c9.dash,
        startMarker:
          (_0x54862e = _0x7c1a86.style) == null
            ? undefined
            : _0x54862e.startMarker,
        endMarker:
          (_0x3841b6 = _0x7c1a86.style) == null
            ? undefined
            : _0x3841b6.endMarker,
        cornerStyle:
          ((_0x5f0b4d = _0x7c1a86.style) == null
            ? undefined
            : _0x5f0b4d.cornerStyle) ?? "rounded",
        lineJump:
          (_0x581c34 = _0x7c1a86.style) == null
            ? undefined
            : _0x581c34.lineJump,
        animation:
          (_0x55cf6c = _0x7c1a86.style) == null
            ? undefined
            : _0x55cf6c.animation,
      },
      labels: _0x23a4e7,
    };
  (_0x7c1a86.orthogonalData &&
    (_0x4df424.orthogonalData = {
      ..._0x7c1a86.orthogonalData,
      routePoints: _0x11ed20,
    }),
    _0x7c1a86.curveData && (_0x4df424.curveData = _0x7c1a86.curveData));
  let _0x2168de = _0x7c1a86.transform ??
    si(
      _0x7c1a86.start,
      _0x7c1a86.end,
      _0x3ead7b,
      _0x4df424.orthogonalData,
      _0x7c1a86.curveData,
    ) ?? { left: 0, top: 0, width: 1, height: 1, rotation: 0 };
  return {
    id: _0x7c1a86.id ?? (0, e.generateRandomId)(6),
    type: s.Connector,
    transform: _0x2168de,
    connectorData: _0x4df424,
  };
}
function ui(_0x451d94) {
  var _0x1605fd, _0x4ad260;
  let _0x460ce6 = Tt(_0x451d94.shapeType),
    _0x3ba4be = Ft(_0x451d94.shapeType),
    _0x4cc7bf = (0, r.resolveShapeDefaultInsertSize)(_0x451d94.shapeType),
    _0x14219d = { shapeType: _0x451d94.shapeType };
  if (_0x3ba4be) {
    var _0x364394, _0x155c89, _0x258782, _0x131e90;
    (_0x3ba4be.geometry
      ? ((_0x14219d.isCustom = true),
        (_0x14219d.customGeometry = _0x3ba4be.geometry))
      : (_0x14219d.isCustom = false),
      (_0x14219d.fill =
        (_0x364394 = _0x3ba4be.defaultShapeData) == null
          ? undefined
          : _0x364394.fill),
      (_0x14219d.stroke =
        (_0x155c89 = _0x3ba4be.defaultShapeData) == null
          ? undefined
          : _0x155c89.stroke),
      (_0x258782 = _0x3ba4be.defaultShapeData) != null &&
        _0x258782.sequenceLifeline &&
        (_0x14219d.sequenceLifeline = {
          ..._0x3ba4be.defaultShapeData["sequenceLifeline"],
        }),
      (_0x131e90 = _0x3ba4be.defaultShapeData) != null &&
        _0x131e90.sequenceActivation &&
        (_0x14219d.sequenceActivation = {
          ..._0x3ba4be.defaultShapeData["sequenceActivation"],
        }));
  }
  if (_0x460ce6) {
    var _0x32fadc, _0x1304e7;
    ((_0x14219d.isCustom = true),
      (_0x14219d.customGeometry = _0x460ce6.geometry),
      (_0x14219d.fill =
        (_0x32fadc = _0x460ce6.defaultShapeData) == null
          ? undefined
          : _0x32fadc.fill),
      (_0x14219d.stroke =
        (_0x1304e7 = _0x460ce6.defaultShapeData) == null
          ? undefined
          : _0x1304e7.stroke));
  }
  if (
    (_0x451d94.fillColor && (_0x14219d.fill = { color: _0x451d94.fillColor }),
    _0x451d94.strokeColor || _0x451d94.strokeWidth !== undefined)
  ) {
    var _0x1b0347, _0x284e8e;
    _0x14219d.stroke = {
      ..._0x14219d.stroke,
      color:
        _0x451d94.strokeColor ??
        ((_0x1b0347 = _0x14219d.stroke) == null ? undefined : _0x1b0347.color),
      width:
        _0x451d94.strokeWidth ??
        ((_0x284e8e = _0x14219d.stroke) == null ? undefined : _0x284e8e.width),
    };
  }
  return (
    !(
      _0x3ba4be != null &&
      (_0x1605fd = _0x3ba4be.defaultShapeData) != null &&
      _0x1605fd.sequenceLifeline
    ) &&
      !(
        _0x3ba4be != null &&
        (_0x4ad260 = _0x3ba4be.defaultShapeData) != null &&
        _0x4ad260.sequenceActivation
      ) &&
      (_0x14219d.shapeText = ci()),
    {
      id: _0x451d94.id ?? (0, e.generateRandomId)(6),
      type: s.Shape,
      parentId: _0x451d94.parentId,
      laneId: _0x451d94.laneId,
      transform: {
        left: _0x451d94.left,
        top: _0x451d94.top,
        width:
          _0x451d94.width ??
          (_0x3ba4be == null ? undefined : _0x3ba4be.defaultSize["width"]) ??
          (_0x4cc7bf == null ? undefined : _0x4cc7bf.width) ??
          G.shapeWidth,
        height:
          _0x451d94.height ??
          (_0x3ba4be == null ? undefined : _0x3ba4be.defaultSize["height"]) ??
          (_0x4cc7bf == null ? undefined : _0x4cc7bf.height) ??
          G.shapeHeight,
        rotation: 0,
      },
      shapeData: _0x14219d,
    }
  );
}
function di(_0x857877) {
  let _0x5d65eb = _0x857877.horizontal ?? true,
    _0x35505f = ii(_0x5d65eb),
    _0x23de90 = _0x857877.text ?? "",
    _0x69435c = Qr(_0x857877.textStyle);
  return {
    id: _0x857877.id ?? (0, e.generateRandomId)(6),
    type: s.Shape,
    parentId: _0x857877.parentId,
    laneId: _0x857877.laneId,
    transform: {
      left: _0x857877.left,
      top: _0x857877.top,
      width: _0x857877.width ?? _0x35505f.width,
      height: _0x857877.height ?? _0x35505f.height,
      rotation: 0,
    },
    shapeData: {
      shapeType: r.ShapeTypeEnum["Rect"],
      isTextBox: true,
      fill: { fillType: r.ShapeFillEnum["NoFill"] },
      stroke: { lineStrokeType: r.ShapeLineTypeEnum["NoLine"] },
      shapeText: Zr({
        fontSize: _0x69435c.fs,
        horizontal: _0x5d65eb,
        horizontalAlign: _0x857877.horizontalAlign ?? e.HorizontalAlign["LEFT"],
        text: _0x23de90,
        textStyle: _0x69435c,
        textWrap: _0x857877.textWrap,
        verticalAlign: _0x857877.verticalAlign ?? e.VerticalAlign["TOP"],
        wrapStrategy: e.WrapStrategy["CLIP"],
      }),
    },
  };
}
function fi(_0x22a221) {
  var _0x16a140, _0x3f8bdb, _0x30c5ea;
  let _0x4c10d7 = {
    ...ti,
    adjustValues: ti.adjustValues ? { ...ti.adjustValues } : undefined,
    fill: {
      color:
        _0x22a221.fillColor ??
        ((_0x16a140 = ti.fill) == null ? undefined : _0x16a140.color),
    },
    stroke: {
      ...ti.stroke,
      color:
        _0x22a221.strokeColor ??
        ((_0x3f8bdb = ti.stroke) == null ? undefined : _0x3f8bdb.color),
      width:
        _0x22a221.strokeWidth ??
        ((_0x30c5ea = ti.stroke) == null ? undefined : _0x30c5ea.width),
    },
  };
  return {
    id: _0x22a221.id ?? (0, e.generateRandomId)(6),
    type: s.Container,
    parentId: _0x22a221.parentId,
    laneId: _0x22a221.laneId,
    transform: {
      left: _0x22a221.left,
      top: _0x22a221.top,
      width: _0x22a221.width ?? G.containerWidth,
      height: _0x22a221.height ?? G.containerHeight,
      rotation: 0,
    },
    containerData: {
      kind:
        _0x22a221.kind === "uml-package" || _0x22a221.kind === "system-boundary"
          ? _0x22a221.kind
          : "generic",
      title: _0x22a221.title,
      titleVisible: true,
      titlePosition: "top",
      headerSize: $r.headerSize,
      padding: { ...$r.padding },
      shapeData: _0x4c10d7,
      behavior: {
        ...ni,
        membershipLocked: _0x22a221.membershipLocked ?? false,
      },
      capturePolicy: { ...ri },
    },
  };
}
function pi(_0x6f1bb5, _0x5671e0, _0x2dc339) {
  return (
    _0x5671e0 != null && _0x5671e0.length
      ? _0x5671e0
      : Array.from({ length: K.laneCount }, (_0x39bc27, _0x5988a4) => ({
          id: "lane-" + (_0x5988a4 + 1),
          title: "Lane " + (_0x5988a4 + 1),
          size: _0x2dc339,
        }))
  ).map((_0x5f523e, _0x3ac476) => ({
    id: _0x5f523e.id ?? (0, e.generateRandomId)(6),
    title: _0x5f523e.title ?? "Lane " + (_0x3ac476 + 1),
    order: _0x3ac476,
    size: _0x5f523e.size ?? _0x2dc339,
    ...(_0x5f523e.minSize === undefined ? {} : { minSize: _0x5f523e.minSize }),
    ...(_0x5f523e.locked === undefined ? {} : { locked: _0x5f523e.locked }),
    ...(_0x5f523e.collapsed === undefined
      ? {}
      : { collapsed: _0x5f523e.collapsed }),
  }));
}
function mi(_0x4e6ed6, _0x562595) {
  var _0x3fbad4;
  let _0x283879 =
    _0x4e6ed6 === "horizontal" ? K.horizontalLaneSize : K.verticalLaneSize;
  if ((_0x3fbad4 = _0x562595.lanes) != null && _0x3fbad4.length)
    return _0x283879;
  let _0x353a15 =
    _0x4e6ed6 === "horizontal"
      ? _0x562595.height === undefined
        ? undefined
        : Math.max(0, _0x562595.height - $r.headerSize)
      : _0x562595.width === undefined
        ? undefined
        : Math.max(0, _0x562595.width);
  return _0x353a15 === undefined ? _0x283879 : _0x353a15 / K.laneCount;
}
function hi(_0x327f13, _0x49027b) {
  var _0x2f6f9d;
  let _0x20afec =
    _0x327f13 === "horizontal" ? K.horizontalHeaderSize : K.verticalHeaderSize;
  if ((_0x2f6f9d = _0x49027b.lanes) != null && _0x2f6f9d.length)
    return _0x20afec;
  let _0x4af562 =
    _0x327f13 === "horizontal"
      ? _0x49027b.width
      : _0x49027b.height === undefined
        ? undefined
        : Math.max(0, _0x49027b.height - $r.headerSize);
  if (_0x4af562 === undefined) return _0x20afec;
  let _0x36d736 =
    _0x327f13 === "horizontal" ? K.horizontalWidth : K.verticalHeight;
  return Math.min(_0x20afec, (Math.max(0, _0x4af562) * _0x20afec) / _0x36d736);
}
function gi(_0xe2734a) {
  let _0x15f763 = Cr(_0xe2734a.orientation),
    _0x1ae554 = pi(_0x15f763, _0xe2734a.lanes, mi(_0x15f763, _0xe2734a)),
    _0x495aac = $r.headerSize,
    _0x18d124 =
      _0x15f763 === "vertical"
        ? _0x1ae554.reduce(
            (_0x430a7a, _0xfa6729) => _0x430a7a + _0xfa6729.size,
            0,
          )
        : K.horizontalWidth,
    _0x47a434 =
      _0x15f763 === "horizontal"
        ? _0x495aac +
          _0x1ae554.reduce(
            (_0x3db633, _0x33c362) => _0x3db633 + _0x33c362.size,
            0,
          )
        : _0x495aac + K.verticalHeight,
    _0x51339b = fi({
      ..._0xe2734a,
      title: _0xe2734a.title ?? K.title,
      width: _0xe2734a.width ?? _0x18d124,
      height: _0xe2734a.height ?? _0x47a434,
    }),
    { adjustValues: _0x1a53f4, ..._0x41d499 } =
      _0x51339b.containerData["shapeData"];
  return (
    (_0x51339b.containerData = {
      ..._0x51339b.containerData,
      kind: "swimlane",
      padding: { ...K.padding },
      shapeData: { ..._0x41d499, shapeType: r.ShapeTypeEnum["Rect"] },
      swimlane: Er({
        orientation: _0x15f763,
        headerSize: _0xe2734a.headerSize ?? hi(_0x15f763, _0xe2734a),
        laneGap: _0xe2734a.laneGap ?? K.laneGap,
        collapsedLaneSize: _0xe2734a.collapsedLaneSize ?? K.collapsedLaneSize,
        lanes: _0x1ae554,
      }),
    }),
    _0x51339b
  );
}
function _i(_0x3f4167) {
  let _0x9b35a9 = _0x3f4167.horizontal ?? true,
    _0x59a565 = ii(_0x9b35a9),
    _0x477717 = _0x3f4167.text ?? "",
    _0x1427d3 = Qr(_0x3f4167.textStyle),
    _0x10ca91 = {
      id: _0x3f4167.id ?? (0, e.generateRandomId)(6),
      type: s.Text,
      parentId: _0x3f4167.parentId,
      laneId: _0x3f4167.laneId,
      text: _0x477717,
      textData: hr({
        text: _0x477717,
        horizontalAlign: _0x3f4167.horizontalAlign ?? e.HorizontalAlign["LEFT"],
        textStyle: _0x1427d3,
        verticalAlign: _0x3f4167.verticalAlign ?? e.VerticalAlign["TOP"],
        wrapStrategy: e.WrapStrategy["CLIP"],
      }),
      transform: {
        left: _0x3f4167.left,
        top: _0x3f4167.top,
        width: _0x3f4167.width ?? _0x59a565.width,
        height: _0x3f4167.height ?? _0x59a565.height,
        rotation: 0,
      },
    };
  return (
    _0x9b35a9 || (_0x10ca91.custom = { horizontal: _0x9b35a9 }),
    _0x10ca91
  );
}
function vi(_0xd4c823) {
  return ui({
    id: _0xd4c823.id,
    shapeType: r.ShapeTypeEnum["FoldedCorner"],
    left: _0xd4c823.left,
    top: _0xd4c823.top,
    width: _0xd4c823.width ?? G.stickyWidth,
    height: _0xd4c823.height ?? G.stickyHeight,
    fillColor: _0xd4c823.fillColor,
    parentId: _0xd4c823.parentId,
    laneId: _0xd4c823.laneId,
  });
}
function yi(_0x1b2ddc) {
  return {
    id: _0x1b2ddc.id ?? (0, e.generateRandomId)(6),
    type: s.Image,
    parentId: _0x1b2ddc.parentId,
    laneId: _0x1b2ddc.laneId,
    source: _0x1b2ddc.source,
    imageSourceType: _0x1b2ddc.imageSourceType,
    transform: {
      left: _0x1b2ddc.left,
      top: _0x1b2ddc.top,
      width: _0x1b2ddc.width,
      height: _0x1b2ddc.height,
      rotation: 0,
    },
  };
}
const bi = { top: 0, right: 0, bottom: 0, left: 0 },
  xi = Object.keys(ni),
  Si = Object.keys(ri),
  Ci = Object.keys($r.padding);
function wi(_0x1923d5, _0x104aab) {
  let {
    radius: _0x1d4066,
    rx: _0x296181,
    ry: _0xe5cd65,
    adjustValues: _0x4bc3e3,
    ..._0x176a86
  } = _0x1923d5 ?? {};
  if (_0x104aab === "swimlane") {
    let { adjustValues: _0x1ea89a, ..._0x42dcb2 } = ti;
    return { ..._0x42dcb2, ..._0x176a86, shapeType: r.ShapeTypeEnum["Rect"] };
  }
  return {
    ...ti,
    ..._0x176a86,
    shapeType: r.ShapeTypeEnum["RoundRect"],
    adjustValues:
      typeof _0x4bc3e3 == "object" && _0x4bc3e3
        ? { ..._0x4bc3e3, adj: ei }
        : { adj: ei },
  };
}
function Ti(_0x79dea8) {
  var _0x28e9a5;
  if (_0x79dea8.type !== s.Container) return _0x79dea8;
  let _0x450358 = _0x79dea8.containerData["behavior"],
    _0x4b3993 = _0x79dea8.containerData["capturePolicy"],
    _0x1b69e5 = _0x79dea8.containerData["padding"],
    _0x2161f6 = _0x79dea8.containerData["shapeData"],
    _0x3f8ed2 =
      !!_0x450358 &&
      xi.every((_0xdf7f47) => _0x450358[_0xdf7f47] !== undefined),
    _0x1fb097 =
      !!_0x4b3993 &&
      Si.every((_0x506590) => _0x4b3993[_0x506590] !== undefined),
    _0x11150 =
      !!_0x1b69e5 &&
      Ci.every((_0x5cc677) => _0x1b69e5[_0x5cc677] !== undefined),
    _0x51c739 = !!(_0x2161f6 != null && _0x2161f6.shapeType),
    _0x5c0e6d =
      _0x79dea8.containerData["kind"] === "swimlane"
        ? (_0x2161f6 == null ? undefined : _0x2161f6.shapeType) ===
          r.ShapeTypeEnum["Rect"]
        : (_0x2161f6 == null ? undefined : _0x2161f6.shapeType) ===
            r.ShapeTypeEnum["RoundRect"] &&
          ((_0x28e9a5 = _0x2161f6.adjustValues) == null
            ? undefined
            : _0x28e9a5.adj) === 2500,
    _0x220cfe =
      _0x79dea8.containerData["headerSize"] !== undefined &&
      _0x79dea8.containerData["titleVisible"] !== undefined &&
      _0x79dea8.containerData["titlePosition"] !== undefined;
  return _0x3f8ed2 &&
    _0x1fb097 &&
    _0x11150 &&
    _0x51c739 &&
    _0x5c0e6d &&
    _0x220cfe
    ? _0x79dea8
    : {
        ..._0x79dea8,
        containerData: {
          ..._0x79dea8.containerData,
          titleVisible: _0x79dea8.containerData["titleVisible"] ?? true,
          titlePosition: _0x79dea8.containerData["titlePosition"] ?? "top",
          headerSize: _0x79dea8.containerData["headerSize"] ?? $r.headerSize,
          shapeData: wi(
            _0x79dea8.containerData["shapeData"],
            _0x79dea8.containerData["kind"],
          ),
          padding: { ...$r.padding, ..._0x79dea8.containerData["padding"] },
          behavior: { ...ni, ..._0x79dea8.containerData["behavior"] },
          capturePolicy: { ...ri, ..._0x79dea8.containerData["capturePolicy"] },
        },
      };
}
function q(_0x19c57a) {
  if (
    _0x19c57a.type !== s.Container ||
    _0x19c57a.containerData["kind"] !== "swimlane" ||
    !_0x19c57a.containerData["swimlane"]
  )
    return _0x19c57a;
  let _0x101d7f = Ti(_0x19c57a);
  return _0x101d7f.type === s.Container
    ? {
        ..._0x101d7f,
        containerData: {
          ..._0x101d7f.containerData,
          padding: { ...bi },
          swimlane: Er(_0x19c57a.containerData["swimlane"]),
        },
      }
    : _0x101d7f;
}
function Ei(_0xa643ee) {
  let _0xe8e117 = _0xa643ee;
  return {
    redo: _0xe8e117.redo,
    undo: _0xe8e117.undo,
    objects: (_0xe8e117.objects ?? []).map((_0x2e6516) => ({
      unitId: _0x2e6516.unitId,
      subUnitId: _0x2e6516.subUnitId,
      elementId: _0x2e6516.drawingId,
    })),
  };
}
const Di = "UNIVER_EMBED_BOARDS_FLOATING";
function Oi(_0x4658ad) {
  return {
    id: _0x4658ad.hostAnchorId,
    type: s.Shape,
    name: _0x4658ad.embedId,
    transform: {
      left: _0x4658ad.left ?? 80,
      top: _0x4658ad.top ?? 80,
      width: _0x4658ad.width ?? 560,
      height: _0x4658ad.height ?? 360,
      rotation: 0,
    },
    shapeData: {
      shapeType: r.ShapeTypeEnum["Rect"],
      fill: { fillType: r.ShapeFillEnum["NoFill"] },
      stroke: { lineStrokeType: r.ShapeLineTypeEnum["NoLine"] },
    },
    custom: {
      [Di]: {
        version: 1,
        embedId: _0x4658ad.embedId,
        hostAnchorId: _0x4658ad.hostAnchorId,
        childUnitId: _0x4658ad.childUnitId,
        childType: _0x4658ad.childType,
      },
    },
  };
}
function ki(_0x546029) {
  var _0x125d82;
  let _0x599e61 =
    (_0x125d82 = _0x546029.custom) == null ? undefined : _0x125d82[Di];
  if (!_0x599e61 || typeof _0x599e61 != "object") return;
  let _0x5c1f3b = _0x599e61;
  return _0x5c1f3b.version === 1 &&
    typeof _0x5c1f3b.embedId == "string" &&
    typeof _0x5c1f3b.hostAnchorId == "string"
    ? _0x5c1f3b
    : undefined;
}
function J(_0xb728f9) {
  return (
    (_0xb728f9 == null ? undefined : _0xb728f9.type) === s.Shape &&
    ki(_0xb728f9) != null
  );
}
function Ai(_0x46c349, _0x64df1d) {
  if (!J(_0x46c349) || !J(_0x64df1d)) return false;
  let _0x28b733 = ki(_0x46c349),
    _0x147a7b = ki(_0x64df1d);
  return (
    (_0x28b733 == null ? undefined : _0x28b733.childUnitId) != null &&
    _0x28b733.childUnitId ===
      (_0x147a7b == null ? undefined : _0x147a7b.childUnitId) &&
    _0x28b733.childType === _0x147a7b.childType
  );
}
const ji = Object.values(v),
  Mi = Object.values(y),
  Ni = Object.values(b);
function Pi(_0xd4161d) {
  if (!Y(_0xd4161d)) return false;
  let _0x24e7e5 = _0xd4161d,
    _0x370a69 =
      typeof _0x24e7e5.width == "number" &&
      Number.isFinite(_0x24e7e5.width) &&
      _0x24e7e5.width > 0,
    _0x5ed0f4 =
      typeof _0x24e7e5.height == "number" &&
      Number.isFinite(_0x24e7e5.height) &&
      _0x24e7e5.height > 0;
  switch (_0x24e7e5.mode) {
    case x.AutoSize:
      return _0x24e7e5.width === undefined && _0x24e7e5.height === undefined;
    case x.FixedWidth:
      return _0x370a69 && _0x24e7e5.height === undefined;
    case x.FixedSize:
      return _0x370a69 && _0x5ed0f4;
    default:
      return false;
  }
}
function Y(_0x5461f0) {
  return (
    typeof _0x5461f0 == "object" && !!_0x5461f0 && !Array.isArray(_0x5461f0)
  );
}
function Fi(_0x2fe684, _0x335225 = -1 / 0, _0x4fb3db = 1 / 0) {
  return (
    _0x2fe684 === undefined ||
    (typeof _0x2fe684 == "number" &&
      Number.isFinite(_0x2fe684) &&
      _0x2fe684 >= _0x335225 &&
      _0x2fe684 <= _0x4fb3db)
  );
}
function Ii(_0x49cb9b, _0x206132) {
  return (
    _0x49cb9b === undefined ||
    (typeof _0x49cb9b == "string" && _0x206132.includes(_0x49cb9b))
  );
}
function Li(_0x10507e) {
  return (
    _0x10507e === undefined ||
    (Y(_0x10507e) &&
      (_0x10507e.color === undefined || typeof _0x10507e.color == "string") &&
      Fi(_0x10507e.opacity, 0, 1))
  );
}
function Ri(_0x524cc9) {
  return _0x524cc9 === undefined
    ? true
    : Y(_0x524cc9)
      ? _0x524cc9.space === S.Path
        ? typeof _0x524cc9.along == "number" &&
          Number.isFinite(_0x524cc9.along) &&
          typeof _0x524cc9.normal == "number" &&
          Number.isFinite(_0x524cc9.normal) &&
          _0x524cc9.x === undefined &&
          _0x524cc9.y === undefined
        : _0x524cc9.space === S.Canvas &&
          typeof _0x524cc9.x == "number" &&
          Number.isFinite(_0x524cc9.x) &&
          typeof _0x524cc9.y == "number" &&
          Number.isFinite(_0x524cc9.y) &&
          _0x524cc9.along === undefined &&
          _0x524cc9.normal === undefined
      : false;
}
function zi(_0x13d20d) {
  if (
    !Y(_0x13d20d) ||
    typeof _0x13d20d.id != "string" ||
    _0x13d20d.id["trim"]().length === 0 ||
    (_0x13d20d.layout !== undefined && !Pi(_0x13d20d.layout)) ||
    "text" in _0x13d20d ||
    "documentData" in _0x13d20d ||
    "width" in _0x13d20d ||
    "height" in _0x13d20d ||
    "pathRatio" in _0x13d20d ||
    "offset" in _0x13d20d ||
    (_0x13d20d.content !== undefined &&
      typeof _0x13d20d.content != "string" &&
      (!Y(_0x13d20d.content) ||
        typeof _0x13d20d.content["id"] != "string" ||
        _0x13d20d.content["id"].trim().length === 0 ||
        (_0x13d20d.content["body"] !== undefined &&
          (!Y(_0x13d20d.content["body"]) ||
            typeof _0x13d20d.content["body"].dataStream != "string"))))
  )
    return false;
  let _0x344cd4 = _0x13d20d.placement;
  if (
    _0x344cd4 !== undefined &&
    (!Y(_0x344cd4) ||
      !Ii(_0x344cd4.anchor, ji) ||
      !Ii(_0x344cd4.side, Mi) ||
      !Ii(_0x344cd4.orientation, Ni) ||
      !Fi(_0x344cd4.pathRatio, 0, 1) ||
      !Fi(_0x344cd4.distance, 0) ||
      !Fi(_0x344cd4.alongOffset, 0) ||
      !Ri(_0x344cd4.offset))
  )
    return false;
  let _0x40ae39 = _0x13d20d.style;
  return (
    _0x40ae39 === undefined ||
    (Y(_0x40ae39) &&
      !("lineBreak" in _0x40ae39) &&
      (_0x40ae39.interruptLine === undefined ||
        typeof _0x40ae39.interruptLine == "boolean") &&
      Fi(_0x40ae39.lineGap, 0) &&
      Li(_0x40ae39.fill) &&
      Li(_0x40ae39.stroke) &&
      (_0x40ae39.stroke === undefined ||
        (Y(_0x40ae39.stroke) && Fi(_0x40ae39.stroke["width"], 0))))
  );
}
function Bi(_0x1740cf) {
  return typeof (_0x1740cf == null ? undefined : _0x1740cf.content) == "object"
    ? _0x1740cf.content
    : undefined;
}
function Vi(_0x2fadd1) {
  var _0x2050fc;
  if (typeof (_0x2fadd1 == null ? undefined : _0x2fadd1.content) == "string")
    return _0x2fadd1.content;
  let _0x101c5a =
    ((_0x2050fc = Bi(_0x2fadd1)) == null || (_0x2050fc = _0x2050fc.body) == null
      ? undefined
      : _0x2050fc.dataStream) ?? "";
  return (
    _0x101c5a.endsWith("\x0d\x0a") ? _0x101c5a.slice(0, -2) : _0x101c5a
  ).replace(/\r/g, "\x0a");
}
function Hi(_0x53f222, _0x5d25fb = false) {
  if (!Y(_0x53f222)) return _0x53f222;
  let _0x70b4a1 = _0x53f222,
    _0x3712a0 = _0x53f222,
    _0xd1a6d8 = "text" in _0x70b4a1 || "documentData" in _0x70b4a1,
    _0x3651b6 =
      _0x5d25fb ||
      _0xd1a6d8 ||
      "width" in _0x70b4a1 ||
      "height" in _0x70b4a1 ||
      "pathRatio" in _0x70b4a1 ||
      "offset" in _0x70b4a1 ||
      (Y(_0x53f222.style) && "lineBreak" in _0x53f222.style);
  if (_0xd1a6d8) {
    let { text: _0x4ecb1e, documentData: _0x5459c8, ..._0x5285f8 } = _0x70b4a1;
    _0x3712a0 = {
      ..._0x5285f8,
      content: e.Tools["deepClone"](
        _0x5285f8.content === undefined
          ? (_0x5459c8 ?? _0x4ecb1e ?? "")
          : _0x5285f8.content,
      ),
    };
  }
  if (
    "width" in _0x70b4a1 ||
    "height" in _0x70b4a1 ||
    (_0xd1a6d8 && _0x70b4a1.content === undefined)
  ) {
    let { width: _0x31c938, height: _0x59f65e, ..._0x426058 } = _0x3712a0;
    _0x3712a0 = {
      ..._0x426058,
      layout:
        _0x426058.layout === undefined
          ? {
              mode: x.FixedSize,
              width: _0x31c938 === undefined ? 96 : _0x31c938,
              height: _0x59f65e === undefined ? 28 : _0x59f65e,
            }
          : _0x426058.layout,
    };
  }
  if ("pathRatio" in _0x3712a0) {
    let { pathRatio: _0xcd649a, ..._0x3c2d16 } = _0x3712a0;
    ((_0x3712a0 = _0x3c2d16),
      _0xcd649a !== undefined &&
        (_0x3c2d16.placement === undefined
          ? (_0x3712a0 = {
              ..._0x3c2d16,
              placement: { anchor: v.Path, pathRatio: _0xcd649a },
            })
          : Y(_0x3c2d16.placement) &&
            _0x3c2d16.placement["anchor"] === v.Path &&
            _0x3c2d16.placement["pathRatio"] === undefined &&
            (_0x3712a0 = {
              ..._0x3c2d16,
              placement: { ..._0x3c2d16.placement, pathRatio: _0xcd649a },
            })));
  }
  if (Y(_0x53f222.style) && "lineBreak" in _0x53f222.style) {
    let { lineBreak: _0xd8a2b1, ..._0x4ecf2a } = _0x53f222.style;
    _0x3712a0 = {
      ..._0x3712a0,
      style: {
        ..._0x4ecf2a,
        interruptLine:
          _0x4ecf2a.interruptLine === undefined
            ? _0xd8a2b1
            : _0x4ecf2a.interruptLine,
      },
    };
  }
  if (
    (_0x3651b6 &&
      _0x3712a0.placement === undefined &&
      (_0x3712a0 = { ..._0x3712a0, placement: { anchor: v.Auto } }),
    "offset" in _0x3712a0)
  ) {
    let { offset: _0x49214c, ..._0x45a041 } = _0x3712a0;
    if (
      ((_0x3712a0 = _0x45a041),
      _0x49214c !== undefined &&
        Y(_0x45a041.placement) &&
        _0x45a041.placement["offset"] === undefined)
    ) {
      let _0x361e0b = Y(_0x49214c)
        ? { x: _0x49214c.x, y: _0x49214c.y, space: S.Canvas }
        : _0x49214c;
      _0x3712a0 = {
        ..._0x45a041,
        placement: { ..._0x45a041.placement, offset: _0x361e0b },
      };
    }
  }
  return _0x3712a0;
}
function Ui(_0x5f42a6) {
  if (
    _0x5f42a6.type !== s.Connector ||
    !Y(_0x5f42a6.connectorData) ||
    (_0x5f42a6.connectorData["labels"] !== undefined &&
      !Array.isArray(_0x5f42a6.connectorData["labels"]))
  )
    return _0x5f42a6;
  let _0xb39019 = _0x5f42a6.connectorData["label"];
  if (
    _0x5f42a6.connectorData["labels"] === undefined &&
    _0xb39019 !== undefined &&
    !Y(_0xb39019)
  )
    return _0x5f42a6;
  let _0x36a233 =
      _0x5f42a6.connectorData["labels"] ?? (Y(_0xb39019) ? [_0xb39019] : []),
    _0xcf2434 = _0x36a233.map((_0x808822) =>
      Hi(
        _0x808822,
        _0x5f42a6.connectorData["labels"] === undefined && Y(_0xb39019),
      ),
    );
  return !("label" in _0x5f42a6.connectorData) &&
    _0xcf2434.every(
      (_0x4437b8, _0x3b76e5) => _0x4437b8 === _0x36a233[_0x3b76e5],
    )
    ? _0x5f42a6
    : { ..._0x5f42a6, connectorData: Ki(_0x5f42a6.connectorData, _0xcf2434) };
}
function Wi(_0x1427be) {
  return (
    Array.isArray(_0x1427be) &&
    _0x1427be.every(zi) &&
    new Set(_0x1427be.map((_0x1b1be6) => _0x1b1be6.id)).size ===
      _0x1427be.length
  );
}
function Gi(_0x108fe7) {
  return _0x108fe7.labels ?? [];
}
function Ki(_0x2b6bb0, _0x13b97b) {
  let { label: _0x5369ec, ..._0x38d7c0 } = _0x2b6bb0;
  return { ..._0x38d7c0, labels: [..._0x13b97b] };
}
function qi(_0x3f5f99, _0x589a79, _0x7a951d) {
  let _0x5c7208 = Gi(_0x3f5f99),
    _0x3561a8 = _0x5c7208.findIndex((_0x9dfb2f) => _0x9dfb2f.id === _0x589a79);
  if (_0x3561a8 < 0) return null;
  let _0x277b7b = [..._0x5c7208];
  return (
    (_0x277b7b[_0x3561a8] = _0x7a951d(_0x5c7208[_0x3561a8])),
    Ki(_0x3f5f99, _0x277b7b)
  );
}
function Ji(_0x14a5f7) {
  if (_0x14a5f7.kind === "shapeBoundary" || _0x14a5f7.kind === "shapeSite")
    return _0x14a5f7.shapeId;
}
function Yi(_0x486f03) {
  return Array.from(new Set(_0x486f03.filter((_0x13f07d) => !!_0x13f07d)));
}
function Xi(_0xb56047) {
  let _0x27dba6 = [
    _0xb56047.connectorData["start"],
    _0xb56047.connectorData["end"],
  ].map(Ji);
  return _0x27dba6.some((_0x5c8e25) => !_0x5c8e25) ? [] : Yi(_0x27dba6);
}
function Zi(_0x119bb0) {
  return Yi([
    Ji(_0x119bb0.connectorData["start"]),
    Ji(_0x119bb0.connectorData["end"]),
  ]);
}
function Qi(_0x51261f) {
  return [_0x51261f.connectorData["start"], _0x51261f.connectorData["end"]]
    .filter((_0x27e203) => _0x27e203.kind === "free")
    .map((_0x4ac036) => ({ x: _0x4ac036.x, y: _0x4ac036.y }));
}
function $i(_0x2271cb, _0x4bf1b0, _0x336a8b, _0x3c9191 = "content") {
  let _0x17ce0e = _0x2271cb[_0x4bf1b0];
  if (!_0x17ce0e || _0x17ce0e.element["type"] !== s.Container) return false;
  let _0x41fb97 = z(_0x2271cb, _0x4bf1b0);
  if (!_0x41fb97) return false;
  let _0xa39d4d = _0x17ce0e.element;
  if (
    _0x3c9191 === "content" &&
    _0xa39d4d.containerData["kind"] === "swimlane" &&
    _0xa39d4d.containerData["swimlane"]
  )
    return _0x336a8b.every(
      (_0x5e9913) => !!Hr(_0xa39d4d, _0x41fb97, _0x5e9913),
    );
  let _0x3d1743 = xr(_0xa39d4d, _0x41fb97),
    _0x4a839a =
      _0x3c9191 === "outer" ? _0x3d1743.outerBounds : _0x3d1743.contentBounds;
  return _0x336a8b.every((_0x29ed21) =>
    _r(_0x4a839a, { left: _0x29ed21.x, top: _0x29ed21.y, width: 0, height: 0 }),
  );
}
function ea(_0x5bda49, _0x2df115, _0x297602) {
  let _0x4cfdbe = Qi(_0x2df115);
  if (_0x4cfdbe.length === 0) return _0x2df115.parentId;
  let _0x595de6 = [
    ...(Vt(_0x5bda49[_0x297602]) ? [_0x297602] : []),
    ...L(_0x5bda49, _0x297602),
  ];
  return _0x2df115.parentId &&
    _0x595de6.includes(_0x2df115.parentId) &&
    $i(_0x5bda49, _0x2df115.parentId, _0x4cfdbe)
    ? _0x2df115.parentId
    : _0x595de6.find((_0x28fd3d) => $i(_0x5bda49, _0x28fd3d, _0x4cfdbe));
}
function ta(_0x18ac32, _0x2189c0) {
  let _0x1c5124 = Qi(_0x2189c0);
  if (!(!_0x2189c0.parentId || _0x1c5124.length !== 2))
    return $i(_0x18ac32, _0x2189c0.parentId, _0x1c5124, "outer")
      ? _0x2189c0.parentId
      : undefined;
}
function na(_0x4491d2, _0x24165a) {
  let _0x560c3e = _0x24165a.map((_0x1060a2) => [
      ...(Vt(_0x4491d2[_0x1060a2]) ? [_0x1060a2] : []),
      ...L(_0x4491d2, _0x1060a2),
    ]),
    _0x2214f3 = _0x560c3e[0];
  return _0x2214f3 == null
    ? undefined
    : _0x2214f3.find((_0x5d75e0) =>
        _0x560c3e.every((_0x592d9c) => _0x592d9c.includes(_0x5d75e0)),
      );
}
function ra(_0x576b02, _0x4a98b2, _0x23a6f8) {
  let _0x1510c8 = _0x576b02[_0x23a6f8];
  if (
    !_0x1510c8 ||
    _0x1510c8.element["type"] !== s.Container ||
    _0x1510c8.element["containerData"].kind !== "swimlane"
  )
    return;
  if (_0x4a98b2.kind === "free") {
    var _0x1f3e48;
    let _0x529690 = z(_0x576b02, _0x23a6f8);
    return _0x529690
      ? (_0x1f3e48 = Hr(_0x1510c8.element, _0x529690, _0x4a98b2)) == null
        ? undefined
        : _0x1f3e48.lane["id"]
      : undefined;
  }
  if (_0x4a98b2.kind !== "shapeBoundary" && _0x4a98b2.kind !== "shapeSite")
    return;
  let _0x4082f2 = _0x4a98b2.shapeId,
    _0x4313e8 = new Set();
  for (; _0x4082f2 && !_0x4313e8.has(_0x4082f2);) {
    _0x4313e8.add(_0x4082f2);
    let _0xabc96f = _0x576b02[_0x4082f2];
    if (!_0xabc96f) return;
    if (_0xabc96f.element["parentId"] === _0x23a6f8)
      return _0xabc96f.element["laneId"];
    _0x4082f2 = _0xabc96f.element["parentId"];
  }
}
function ia(_0x5377b4, _0x516ac, _0x241513) {
  if (!_0x241513) return;
  let _0x3b9d6a = _0x5377b4[_0x241513];
  if (
    !_0x3b9d6a ||
    _0x3b9d6a.element["type"] !== s.Container ||
    _0x3b9d6a.element["containerData"].kind !== "swimlane"
  )
    return;
  let _0xe9ffb9 = [
      _0x516ac.connectorData["start"],
      _0x516ac.connectorData["end"],
    ].map((_0x58df0e) => ra(_0x5377b4, _0x58df0e, _0x241513)),
    _0x49dbc6 = _0xe9ffb9[0];
  return _0x49dbc6 && _0xe9ffb9.every((_0x520551) => _0x520551 === _0x49dbc6)
    ? _0x49dbc6
    : undefined;
}
function aa(_0x55e37a, _0x316a1b) {
  let _0x2d473b = Xi(_0x316a1b),
    _0xe497e4;
  if (
    _0x2d473b.length === 0 ||
    _0x2d473b.some((_0x1f9214) => !_0x55e37a[_0x1f9214])
  ) {
    let _0x579860 = Zi(_0x316a1b);
    return _0x579860.length === 1 && _0x55e37a[_0x579860[0]]
      ? ((_0xe497e4 = ea(_0x55e37a, _0x316a1b, _0x579860[0])),
        { parentId: _0xe497e4, laneId: ia(_0x55e37a, _0x316a1b, _0xe497e4) })
      : _0x579860.length === 0
        ? ((_0xe497e4 = ta(_0x55e37a, _0x316a1b)),
          { parentId: _0xe497e4, laneId: ia(_0x55e37a, _0x316a1b, _0xe497e4) })
        : {};
  }
  return (
    (_0xe497e4 = na(_0x55e37a, _0x2d473b)),
    { parentId: _0xe497e4, laneId: ia(_0x55e37a, _0x316a1b, _0xe497e4) }
  );
}
function X(_0x2cd56d) {
  return (
    (_0x2cd56d == null ? undefined : _0x2cd56d.element["type"]) === s.Connector
  );
}
function oa(_0x54d900) {
  return (
    (_0x54d900 == null ? undefined : _0x54d900.type) === s.Container &&
    _0x54d900.containerData["behavior"].membershipAwareness === "structural"
  );
}
function sa(_0x63aa) {
  return (
    (_0x63aa == null ? undefined : _0x63aa.type) === s.Container &&
    _0x63aa.containerData["behavior"].membershipAwareness !== "structural"
  );
}
function ca(_0x1a7f4e) {
  var _0x57a3fd;
  let _0x4359c7 = _0x1a7f4e == null ? undefined : _0x1a7f4e.custom;
  return (
    typeof (_0x4359c7 == null || (_0x57a3fd = _0x4359c7.structured) == null
      ? undefined
      : _0x57a3fd.modeId) == "string" &&
    typeof _0x4359c7.structured["structureScopeId"] == "string" &&
    typeof _0x4359c7.structured["semanticRole"] == "string"
  );
}
function la(_0x1a9dfe) {
  var _0x1e6bb0;
  let _0x56a0fb = _0x1a9dfe == null ? undefined : _0x1a9dfe.custom;
  return ca(_0x1a9dfe) &&
    typeof (_0x56a0fb == null || (_0x1e6bb0 = _0x56a0fb.structured) == null
      ? undefined
      : _0x1e6bb0.structureScopeId) == "string"
    ? _0x56a0fb.structured["structureScopeId"]
    : null;
}
function ua(_0x2bebb8) {
  return _0x2bebb8 && "element" in _0x2bebb8 ? _0x2bebb8.element : _0x2bebb8;
}
function da(_0x1c8caf, _0x230dc1) {
  let _0x251a7e = new Set(_0x230dc1),
    _0x58ef0a = new Map(),
    _0x2ebd58 = new Map();
  Object.entries(_0x1c8caf).forEach(([_0x1e63bd, _0x42912c]) => {
    let _0x3035c = ua(_0x42912c),
      _0x12df0c = la(_0x3035c);
    if (!(!_0x3035c || !_0x12df0c)) {
      if (oa(_0x3035c)) {
        _0x58ef0a.set(_0x12df0c, _0x1e63bd);
        return;
      }
      if (_0x3035c.type !== s.Connector) {
        let _0x572589 = _0x2ebd58.get(_0x12df0c) ?? [];
        (_0x572589.push(_0x1e63bd), _0x2ebd58.set(_0x12df0c, _0x572589));
      }
    }
  });
  let _0xf7c544 = new Set();
  if (
    (_0x2ebd58.forEach((_0x4f4c4f, _0x82bdf3) => {
      _0x58ef0a.has(_0x82bdf3) &&
        _0x4f4c4f.length > 0 &&
        _0x4f4c4f.every((_0x2d07d7) => _0x251a7e.has(_0x2d07d7)) &&
        _0xf7c544.add(_0x82bdf3);
    }),
    _0xf7c544.size === 0)
  )
    return [..._0x230dc1];
  let _0x141839 = [],
    _0x3ab386 = new Set();
  return (
    _0x230dc1.forEach((_0x1b0fdb) => {
      let _0xb84b21 = la(ua(_0x1c8caf[_0x1b0fdb])),
        _0x2499a1 =
          _0xb84b21 && _0xf7c544.has(_0xb84b21)
            ? (_0x58ef0a.get(_0xb84b21) ?? _0x1b0fdb)
            : _0x1b0fdb;
      _0x3ab386.has(_0x2499a1) ||
        (_0x3ab386.add(_0x2499a1), _0x141839.push(_0x2499a1));
    }),
    _0x141839
  );
}
const fa = "board.mutation.update-element";
function pa(_0x208594) {
  return (
    _0x208594.type !== s.Connector ||
    (!("label" in _0x208594.connectorData) &&
      (_0x208594.connectorData["labels"] === undefined ||
        Wi(_0x208594.connectorData["labels"])))
  );
}
function ma(_0x2c4cf2, _0x491657) {
  let _0x391e02 = nt(_0x2c4cf2, Object.keys(_0x2c4cf2), _0x491657);
  return (
    Object.values(_0x2c4cf2).forEach((_0x1810e3) => {
      !X(_0x1810e3) ||
        _0x391e02.includes(_0x1810e3.elementId) ||
        (Zi(_0x1810e3.element).some((_0x255caf) =>
          _0x391e02.includes(_0x255caf),
        ) &&
          _0x391e02.push(_0x1810e3.elementId));
    }),
    _0x391e02
  );
}
function ha(_0x399c50, _0x98c108, _0x265117 = {}) {
  if (
    !pa(_0x98c108) ||
    (J(_0x98c108) && !_0x265117.allowEmbedAnchor) ||
    (J(_0x98c108) && (_0x98c108.parentId || _0x98c108.laneId)) ||
    (J(_0x98c108) &&
      ((_0x98c108.transform["rotation"] ?? 0) !== 0 ||
        _0x98c108.transform["flipX"] === true ||
        _0x98c108.transform["flipY"] === true)) ||
    (J(_0x98c108) &&
      Object.values(_0x399c50).some((_0x14bcd1) =>
        Ai(_0x14bcd1.element, _0x98c108),
      )) ||
    !Oa(_0x98c108) ||
    !ya(_0x399c50, _0x98c108) ||
    _0x399c50[_0x98c108.id]
  )
    return false;
  if (!_0x98c108.parentId) return true;
  let _0x5914fc = _0x399c50[_0x98c108.parentId],
    _0xb38658 = _0x5914fc == null ? undefined : _0x5914fc.element;
  if ((_0xb38658 == null ? undefined : _0xb38658.type) !== s.Container)
    return false;
  let _0x5dcf2e = _0xb38658.containerData["behavior"];
  return (!_0x265117.allowLockedParent &&
    (_0x5914fc.hidden === true ||
      _0xb38658.visible === false ||
      _0xb38658.locked === true ||
      _0xb38658.selectable === false ||
      _0x5dcf2e.membershipLocked)) ||
    (!_0x265117.allowLockedParent && Da(_0x399c50, _0x98c108)) ||
    !_0x5dcf2e.acceptsChildren
    ? false
    : _0x98c108.type !== s.Container ||
        (_0x5dcf2e.acceptsContainer && _0x5dcf2e.allowNested);
}
function ga(_0x29f290, _0xdbf28b, _0x12f63 = {}) {
  var _0xad224a;
  let _0x8b8b52 = _0x29f290[_0xdbf28b];
  if (
    !_0x8b8b52 ||
    _0x8b8b52.element["locked"] === true ||
    (_0x8b8b52.element["type"] === s.Container &&
      Object.values(_0x29f290).some(
        (_0x147359) => _0x147359.element["parentId"] === _0xdbf28b,
      )) ||
    Object.values(_0x29f290).some(
      (_0x338231) => X(_0x338231) && Zi(_0x338231.element).includes(_0xdbf28b),
    )
  )
    return false;
  let _0x1fd33b = _0x8b8b52.element["parentId"]
    ? (_0xad224a = _0x29f290[_0x8b8b52.element["parentId"]]) == null
      ? undefined
      : _0xad224a.element
    : undefined;
  return !_0x12f63.allowLockedParent && Da(_0x29f290, _0x8b8b52.element)
    ? false
    : !!_0x12f63.allowLockedParent ||
        (_0x1fd33b == null ? undefined : _0x1fd33b.type) !== s.Container ||
        !_0x1fd33b.containerData["behavior"].membershipLocked;
}
function _a(_0x45ad2b, _0x304852, _0x570b36 = {}) {
  var _0x3b4dea;
  let _0x4744b1 = _0x45ad2b[_0x304852];
  if (!_0x4744b1) return false;
  let _0x73622 = _0x4744b1.element["parentId"]
      ? (_0x3b4dea = _0x45ad2b[_0x4744b1.element["parentId"]]) == null
        ? undefined
        : _0x3b4dea.element
      : undefined,
    _0x5e2a82 = ma(_0x45ad2b, [_0x304852]);
  return (!_0x570b36.allowLockedParent && Da(_0x45ad2b, _0x4744b1.element)) ||
    _0x5e2a82.some((_0x25ee48) => {
      var _0x1c3f83;
      return _0x570b36.allowLockedTarget && _0x25ee48 === _0x304852
        ? false
        : ((_0x1c3f83 = _0x45ad2b[_0x25ee48]) == null
            ? undefined
            : _0x1c3f83.element["locked"]) === true;
    })
    ? false
    : !!_0x570b36.allowLockedParent ||
        (_0x73622 == null ? undefined : _0x73622.type) !== s.Container ||
        !_0x73622.containerData["behavior"].membershipLocked;
}
function va(_0x988827) {
  return (
    (_0x988827 == null ? undefined : _0x988827.angle) ??
    (_0x988827 == null ? undefined : _0x988827.rotation) ??
    0
  );
}
function ya(_0x27f75d, _0x1956b7) {
  var _0x49240b, _0xa06183;
  if (!_0x1956b7.laneId) return true;
  if (!_0x1956b7.parentId) return false;
  let _0x21bf95 =
    (_0x49240b = _0x27f75d[_0x1956b7.parentId]) == null
      ? undefined
      : _0x49240b.element;
  return (
    (_0x21bf95 == null ? undefined : _0x21bf95.type) === s.Container &&
    _0x21bf95.containerData["kind"] === "swimlane" &&
    ((_0xa06183 = _0x21bf95.containerData["swimlane"]) == null
      ? undefined
      : _0xa06183.lanes["some"](
          (_0x2369d1) => _0x2369d1.id === _0x1956b7.laneId,
        )) === true
  );
}
function ba(_0x540ed0, _0x2350be) {
  var _0x39ce76;
  if (_0x2350be.type !== s.Container) return true;
  let _0x227105 = new Set(
    _0x2350be.containerData["kind"] === "swimlane"
      ? (((_0x39ce76 = _0x2350be.containerData["swimlane"]) == null
          ? undefined
          : _0x39ce76.lanes["map"]((_0x57b283) => _0x57b283.id)) ?? [])
      : [],
  );
  return Object.values(_0x540ed0).every((_0x547628) => {
    let _0x46d3f7 = _0x547628.element;
    return (
      _0x46d3f7.id === _0x2350be.id ||
      _0x46d3f7.parentId !== _0x2350be.id ||
      !_0x46d3f7.laneId ||
      (_0x2350be.containerData["kind"] === "swimlane" &&
        _0x227105.has(_0x46d3f7.laneId))
    );
  });
}
function xa(_0x2c5a54, _0x2d91ba) {
  return (
    (_0x2c5a54 == null ? undefined : _0x2c5a54.type) !== s.Container ||
    _0x2d91ba.type !== s.Container ||
    _0x2c5a54.containerData["kind"] !== "swimlane" ||
    _0x2d91ba.containerData["kind"] !== "swimlane" ||
    !_0x2c5a54.containerData["swimlane"] ||
    !_0x2d91ba.containerData["swimlane"] ||
    !Ar(
      _0x2c5a54.containerData["swimlane"],
      _0x2d91ba.containerData["swimlane"],
    )
  );
}
function Sa(_0x31c038) {
  return (
    _0x31c038.type !== s.Container ||
    _0x31c038.containerData["kind"] !== "swimlane" ||
    (!!_0x31c038.containerData["swimlane"] &&
      Tr(_0x31c038.containerData["swimlane"]))
  );
}
function Ca(_0x1f22a3) {
  let _0x1c7c54 = _0x1f22a3 == null ? undefined : _0x1f22a3.element;
  return (
    (_0x1c7c54 == null ? undefined : _0x1c7c54.type) === s.Container &&
    (_0x1f22a3 == null ? undefined : _0x1f22a3.hidden) !== true &&
    _0x1c7c54.visible !== false &&
    _0x1c7c54.locked !== true &&
    _0x1c7c54.selectable !== false
  );
}
function wa(_0x2a5571) {
  return Object.values(_0x2a5571).every((_0x4ef731) => {
    let _0x2b8cfe = _0x4ef731.element;
    if (
      _0x2b8cfe.type !== s.Container ||
      !_0x2b8cfe.containerData["behavior"].membershipLocked ||
      oa(_0x2b8cfe)
    )
      return true;
    let _0x31d24b = z(_0x2a5571, _0x4ef731.elementId);
    return _0x31d24b
      ? Object.values(_0x2a5571).every((_0x45ae9a) => {
          let _0x2b1147 = _0x45ae9a.element;
          if (
            _0x2b1147.parentId !== _0x4ef731.elementId ||
            _0x2b1147.type === s.Connector
          )
            return true;
          let _0x46263e = z(_0x2a5571, _0x45ae9a.elementId);
          return !!_0x46263e && _r(_0x31d24b, _0x46263e);
        })
      : false;
  });
}
function Ta(_0x4dde8c, _0x46a96a, _0x376c71, _0x245237) {
  return wa({
    ..._0x4dde8c,
    [_0x46a96a.elementId]: {
      ..._0x46a96a,
      element: _0x376c71,
      transform: _0x245237 ?? _0x46a96a.transform,
    },
  });
}
function Ea(_0x411f74) {
  _0x411f74.forEach((_0x111d75) => {
    if (_0x111d75.id !== fa) return;
    let _0x4f1405 = _0x111d75.params;
    _0x4f1405 &&
      Object.defineProperty(_0x4f1405, "allowPendingMembershipLockedCoverage", {
        value: true,
        enumerable: false,
        configurable: true,
      });
  });
}
function Da(_0x185002, _0x4b82de) {
  let _0x2cb514 = _0x4b82de.parentId,
    _0x334f08 = new Set([_0x4b82de.id]);
  for (; _0x2cb514;) {
    if (_0x334f08.has(_0x2cb514)) return true;
    let _0x2bc800 = _0x185002[_0x2cb514];
    if (
      !_0x2bc800 ||
      _0x2bc800.element["type"] !== s.Container ||
      !Ca(_0x2bc800)
    )
      return true;
    (_0x334f08.add(_0x2cb514), (_0x2cb514 = _0x2bc800.element["parentId"]));
  }
  return false;
}
function Oa(_0x2db506, _0xb38f5d) {
  let _0x34b66e = _0x2db506.transform["rotation"] ?? 0,
    _0xfe3f77 = _0xb38f5d ? va(_0xb38f5d) : 0;
  return (
    _0x2db506.type !== s.Container ||
    (_0x34b66e === 0 &&
      _0xfe3f77 === 0 &&
      (!_0x2db506.containerData["behavior"].membershipLocked ||
        oa(_0x2db506) ||
        _0x2db506.containerData["behavior"].autoResize))
  );
}
function ka(_0x553cd3, _0x20f3ba, _0x1442df, _0x446d57, _0x254bbe = {}) {
  var _0x5b9003;
  if (!_0x20f3ba || _0x1442df.type !== _0x20f3ba.type || !pa(_0x1442df))
    return false;
  let _0x13c195 = J(_0x20f3ba),
    _0x1ec3b5 = J(_0x1442df);
  if (_0x13c195 !== _0x1ec3b5) return false;
  if (_0x13c195 && _0x1ec3b5) {
    let _0x1e6423 = ki(_0x20f3ba),
      _0xa4c5a0 = ki(_0x1442df);
    if (
      (_0x1e6423 == null ? undefined : _0x1e6423.embedId) !==
        (_0xa4c5a0 == null ? undefined : _0xa4c5a0.embedId) ||
      (_0x1e6423 == null ? undefined : _0x1e6423.hostAnchorId) !==
        (_0xa4c5a0 == null ? undefined : _0xa4c5a0.hostAnchorId) ||
      (_0x1e6423 == null ? undefined : _0x1e6423.childUnitId) !==
        (_0xa4c5a0 == null ? undefined : _0xa4c5a0.childUnitId) ||
      (_0x1e6423 == null ? undefined : _0x1e6423.childType) !==
        (_0xa4c5a0 == null ? undefined : _0xa4c5a0.childType)
    )
      return false;
  }
  if (
    (_0x1ec3b5 &&
      (_0x1442df.parentId ||
        _0x1442df.laneId ||
        (_0x1442df.transform["rotation"] ?? 0) !== 0 ||
        _0x1442df.transform["flipX"] === true ||
        _0x1442df.transform["flipY"] === true ||
        (_0x446d57 != null && va(_0x446d57) !== 0) ||
        (_0x446d57 == null ? undefined : _0x446d57.flipX) === true ||
        (_0x446d57 == null ? undefined : _0x446d57.flipY) === true)) ||
    !Oa(_0x1442df, _0x446d57) ||
    !Sa(_0x1442df) ||
    !ya(_0x553cd3, _0x1442df) ||
    !ba(_0x553cd3, _0x1442df) ||
    !xa(_0x20f3ba, _0x1442df) ||
    Wt(_0x553cd3, _0x1442df.id, _0x1442df.parentId)
  )
    return false;
  let _0x202456 = _0x553cd3[_0x20f3ba.id];
  if (
    !_0x202456 ||
    (!_0x254bbe.allowInactiveTarget && _0x202456.hidden === true) ||
    (!_0x254bbe.allowInactiveTarget && _0x20f3ba.visible === false) ||
    (!_0x254bbe.allowLockedTarget && _0x20f3ba.locked === true) ||
    (!_0x254bbe.allowInactiveTarget && _0x20f3ba.selectable === false) ||
    (!_0x254bbe.allowPendingMembershipLockedCoverage &&
      !Ta(_0x553cd3, _0x202456, _0x1442df, _0x446d57))
  )
    return false;
  if (_0x1442df.parentId === _0x20f3ba.parentId)
    return (
      !_0x1442df.parentId ||
      (Ca(_0x553cd3[_0x1442df.parentId]) && !Da(_0x553cd3, _0x20f3ba))
    );
  let _0x5dc62f = _0x20f3ba.parentId
    ? (_0x5b9003 = _0x553cd3[_0x20f3ba.parentId]) == null
      ? undefined
      : _0x5b9003.element
    : undefined;
  if (
    (_0x5dc62f == null ? undefined : _0x5dc62f.type) === s.Container &&
    _0x5dc62f.containerData["behavior"].membershipLocked
  )
    return false;
  if (!_0x1442df.parentId) return true;
  let _0x35b3ec = _0x553cd3[_0x1442df.parentId],
    _0xdb1626 = _0x35b3ec == null ? undefined : _0x35b3ec.element;
  if ((_0xdb1626 == null ? undefined : _0xdb1626.type) !== s.Container)
    return false;
  let _0x3c2978 = _0xdb1626.containerData["behavior"];
  return _0x35b3ec.hidden === true ||
    _0xdb1626.visible === false ||
    _0xdb1626.locked === true ||
    _0xdb1626.selectable === false ||
    _0x3c2978.membershipLocked ||
    !_0x3c2978.acceptsChildren
    ? false
    : _0x1442df.type !== s.Container ||
        (_0x3c2978.acceptsContainer && _0x3c2978.allowNested);
}
function Aa(_0x55a896, _0x310423) {
  let _0x4af72e = { ..._0x55a896 };
  _0x310423.forEach((_0x1c87d9) => {
    let _0x1f474a = _0x1c87d9.params;
    !_0x1f474a.elementId ||
      !_0x1f474a.element ||
      !_0x4af72e[_0x1f474a.elementId] ||
      (_0x4af72e[_0x1f474a.elementId] = {
        ..._0x4af72e[_0x1f474a.elementId],
        element: _0x1f474a.element,
        transform:
          _0x1f474a.transform ?? _0x4af72e[_0x1f474a.elementId].transform,
      });
  });
  let _0xff30f9 = _0x310423.every((_0x1283b7) => {
    var _0x479310;
    let _0x1b450f = _0x1283b7.params;
    return !_0x1b450f.elementId || !_0x1b450f.element
      ? false
      : ka(
          _0x4af72e,
          (_0x479310 = _0x55a896[_0x1b450f.elementId]) == null
            ? undefined
            : _0x479310.element,
          _0x1b450f.element,
          _0x1b450f.transform,
          _0x1b450f,
        );
  });
  return (_0xff30f9 && Ea(_0x310423), _0xff30f9);
}
function ja(_0x33b4a2, _0x2a72fb) {
  let _0x37dda6 = { ..._0x33b4a2 };
  for (let _0x1868b7 of _0x2a72fb) {
    if (_0x1868b7.id === "board.mutation.add-element") {
      let _0x5d9396 = _0x1868b7.params;
      if (!_0x5d9396.element || !ha(_0x37dda6, _0x5d9396.element, _0x5d9396))
        return false;
      _0x37dda6[_0x5d9396.element["id"]] = {
        unitId: "",
        subUnitId: "",
        elementId: _0x5d9396.element["id"],
        element: _0x5d9396.element,
        transform: {
          left: _0x5d9396.element["transform"].left,
          top: _0x5d9396.element["transform"].top,
          width: _0x5d9396.element["transform"].width,
          height: _0x5d9396.element["transform"].height,
          angle: _0x5d9396.element["transform"].rotation ?? 0,
          flipX: _0x5d9396.element["transform"].flipX,
          flipY: _0x5d9396.element["transform"].flipY,
        },
      };
      continue;
    }
    if (_0x1868b7.id === fa) {
      var _0x3bcf1e;
      let _0x586ef6 = _0x1868b7.params;
      if (
        !_0x586ef6.elementId ||
        !_0x586ef6.element ||
        _0x586ef6.element["id"] !== _0x586ef6.elementId ||
        !ka(
          _0x37dda6,
          (_0x3bcf1e = _0x37dda6[_0x586ef6.elementId]) == null
            ? undefined
            : _0x3bcf1e.element,
          _0x586ef6.element,
          _0x586ef6.transform,
          { ..._0x586ef6, allowPendingMembershipLockedCoverage: true },
        )
      )
        return false;
      _0x37dda6[_0x586ef6.elementId] = {
        ..._0x37dda6[_0x586ef6.elementId],
        element: _0x586ef6.element,
        transform:
          _0x586ef6.transform ?? _0x37dda6[_0x586ef6.elementId].transform,
      };
      continue;
    }
    if (_0x1868b7.id === "board.mutation.remove-element-only") {
      let _0x5b2c1e = _0x1868b7.params;
      if (
        !_0x5b2c1e.elementId ||
        !ga(_0x37dda6, _0x5b2c1e.elementId, _0x5b2c1e)
      )
        return false;
      delete _0x37dda6[_0x5b2c1e.elementId];
      continue;
    }
    if (_0x1868b7.id === "board.mutation.remove-element") {
      let _0xba159 = _0x1868b7.params;
      if (!_0xba159.elementId || !_a(_0x37dda6, _0xba159.elementId, _0xba159))
        return false;
      ma(_0x37dda6, [_0xba159.elementId]).forEach((_0x21d157) => {
        delete _0x37dda6[_0x21d157];
      });
      continue;
    }
    return false;
  }
  return wa(_0x37dda6) ? (Ea(_0x2a72fb), true) : false;
}
function Ma(_0x264bec) {
  return !!_0x264bec && Object.keys(_0x264bec).length > 0;
}
function Na(_0x4569d6) {
  return !!(_0x4569d6 != null && _0x4569d6.length);
}
function Pa(_0x2d7a8e) {
  return Na(_0x2d7a8e.slideOrder) || Ma(_0x2d7a8e.slides);
}
function Fa(_0x4579f3, _0x4c7242 = []) {
  return Pa(_0x4579f3)
    ? Na(_0x4579f3.slideOrder)
      ? _0x4579f3.slideOrder
      : _0x4c7242
    : Na(_0x4579f3.pageOrder)
      ? _0x4579f3.pageOrder
      : _0x4c7242;
}
function Ia(_0x886b1a, _0x69bbef = {}) {
  return Pa(_0x886b1a)
    ? Ma(_0x886b1a.slides)
      ? _0x886b1a.slides
      : _0x69bbef
    : Ma(_0x886b1a.pages)
      ? _0x886b1a.pages
      : _0x69bbef;
}
function La(_0x289b3e, _0x5bd65d) {
  return Pa(_0x289b3e)
    ? (_0x289b3e.activeSlideId ?? _0x289b3e.activePageId ?? _0x5bd65d[0])
    : (_0x289b3e.activePageId ?? _0x5bd65d[0]);
}
function Ra(_0x447fbb, _0x41d4d8) {
  var _0x41bf03;
  return (
    _0x447fbb.pages[_0x41d4d8] ??
    ((_0x41bf03 = _0x447fbb.slides) == null ? undefined : _0x41bf03[_0x41d4d8])
  );
}
function za(_0x2f6506) {
  var _0x9a7cac;
  return (
    _0x2f6506.activePageId ??
    _0x2f6506.activeSlideId ??
    _0x2f6506.pageOrder[0] ??
    ((_0x9a7cac = _0x2f6506.slideOrder) == null ? undefined : _0x9a7cac[0])
  );
}
function Ba(_0x5b3291, _0x2d09b9, _0x5ea4a4) {
  var _0x309e31, _0x47f9eb;
  (_0x5b3291.pages[_0x2d09b9] ||
    (_0x5b3291.pages = { ..._0x5b3291.pages, [_0x2d09b9]: _0x5ea4a4 }),
    ((_0x309e31 = _0x5b3291.slides) == null
      ? undefined
      : _0x309e31[_0x2d09b9]) !== _0x5b3291.pages[_0x2d09b9] &&
      (_0x5b3291.slides = {
        ..._0x5b3291.slides,
        [_0x2d09b9]: _0x5b3291.pages[_0x2d09b9],
      }),
    _0x5b3291.pageOrder["length"] > 0 &&
    _0x5b3291.slideOrder !== _0x5b3291.pageOrder
      ? (_0x5b3291.slideOrder = _0x5b3291.pageOrder)
      : (((_0x47f9eb = _0x5b3291.slideOrder) == null
          ? undefined
          : _0x47f9eb.length) ?? 0) > 0 &&
        _0x5b3291.pageOrder["length"] === 0 &&
        (_0x5b3291.pageOrder = _0x5b3291.slideOrder ?? []),
    (_0x5b3291.activePageId ??= _0x5b3291.activeSlideId ?? _0x2d09b9),
    (_0x5b3291.activeSlideId = _0x5b3291.activePageId));
}
function Va(_0x511e01) {
  return (
    (_0x511e01.slideOrder = _0x511e01.pageOrder),
    (_0x511e01.slides = _0x511e01.pages),
    (_0x511e01.activeSlideId = _0x511e01.activePageId),
    _0x511e01
  );
}
function Ha(_0x1fc460, _0x118f03) {
  return _0x118f03
    ? {
        ..._0x1fc460,
        transform: {
          ..._0x1fc460.transform,
          left: _0x118f03.left,
          top: _0x118f03.top,
          width: _0x118f03.width,
          height: _0x118f03.height,
          rotation: _0x118f03.angle,
          flipX: _0x118f03.flipX,
          flipY: _0x118f03.flipY,
        },
      }
    : _0x1fc460;
}
function Ua(_0x537991, _0x44e08e) {
  let _0x17f488 = _0x537991.getSnapshot(),
    _0x1684b6 = Ra(_0x17f488, _0x44e08e);
  return _0x1684b6 ? (Ba(_0x17f488, _0x44e08e, _0x1684b6), _0x1684b6) : null;
}
function Wa(_0x2880ca, _0x506dcb, _0x524b65) {
  let _0x184687 = Ua(_0x2880ca, _0x506dcb.subUnitId);
  if (!_0x184687) return false;
  let _0x30b3b2 = Ha(_0x506dcb.element, _0x506dcb.transform);
  if (_0x184687.elements[_0x30b3b2.id]) return false;
  if (
    ((_0x184687.elements = {
      ..._0x184687.elements,
      [_0x30b3b2.id]: _0x30b3b2,
    }),
    !_0x184687.elementOrder["includes"](_0x30b3b2.id))
  ) {
    let _0x20c936 = [..._0x184687.elementOrder],
      _0x408b3f =
        _0x524b65 === undefined
          ? _0x20c936.length
          : Math.max(0, Math.min(_0x524b65, _0x20c936.length));
    (_0x20c936.splice(_0x408b3f, 0, _0x30b3b2.id),
      (_0x184687.elementOrder = _0x20c936));
  }
  return true;
}
function Ga(_0x411a0c, _0x5eee7e, _0x30e832, _0x2ed802) {
  let _0x4ecb9d = Ua(_0x411a0c, _0x5eee7e.subUnitId);
  return !_0x4ecb9d ||
    !_0x4ecb9d.elements[_0x5eee7e.element["id"]] ||
    _0x30e832.id !== _0x5eee7e.element["id"]
    ? false
    : ((_0x4ecb9d.elements = {
        ..._0x4ecb9d.elements,
        [_0x5eee7e.element["id"]]: Ha(_0x30e832, _0x2ed802),
      }),
      true);
}
function Ka(_0x3a7971, _0x3b8451) {
  let _0x1feaca = Ua(_0x3a7971, _0x3b8451.subUnitId);
  if (!_0x1feaca || !_0x1feaca.elements[_0x3b8451.element["id"]]) return false;
  let _0x39c126 = { ..._0x1feaca.elements };
  return (
    delete _0x39c126[_0x3b8451.element["id"]],
    (_0x1feaca.elements = _0x39c126),
    (_0x1feaca.elementOrder = _0x1feaca.elementOrder["filter"](
      (_0x5c7d43) => _0x5c7d43 !== _0x3b8451.element["id"],
    )),
    true
  );
}
function qa(_0x4f0f26, _0x24ef43) {
  if (_0x24ef43.length === 0) return false;
  let _0x284649 = Ua(_0x4f0f26, _0x24ef43[0].subUnitId);
  if (!_0x284649) return false;
  let _0x55cb6c = new Set();
  if (
    (_0x24ef43.forEach((_0x3f4d1f) => {
      _0x284649.elements[_0x3f4d1f.element["id"]] &&
        _0x55cb6c.add(_0x3f4d1f.element["id"]);
    }),
    _0x55cb6c.size === 0)
  )
    return false;
  let _0x4b586e = { ..._0x284649.elements };
  return (
    _0x55cb6c.forEach((_0x18b79b) => delete _0x4b586e[_0x18b79b]),
    (_0x284649.elements = _0x4b586e),
    (_0x284649.elementOrder = _0x284649.elementOrder["filter"](
      (_0x4df0cf) => !_0x55cb6c.has(_0x4df0cf),
    )),
    true
  );
}
function Ja(_0x53a5d8, _0x130f05, _0x1ff7cc) {
  let _0xc0097a = Ua(_0x53a5d8, _0x130f05);
  if (!_0xc0097a) return false;
  let _0x4bc0ee = new Set(_0xc0097a.elementOrder);
  return _0x4bc0ee.size !== _0x1ff7cc.length ||
    _0x1ff7cc.some((_0x2b28bf) => !_0x4bc0ee.has(_0x2b28bf))
    ? false
    : ((_0xc0097a.elementOrder = [..._0x1ff7cc]), true);
}
function Ya(_0x550635, _0x5e7c43) {
  return _0x5e7c43
    ? {
        ..._0x550635,
        transform: {
          ..._0x550635.transform,
          left: _0x5e7c43.left ?? _0x550635.transform["left"],
          top: _0x5e7c43.top ?? _0x550635.transform["top"],
          width: _0x5e7c43.width ?? _0x550635.transform["width"],
          height: _0x5e7c43.height ?? _0x550635.transform["height"],
          ...(_0x5e7c43.angle === undefined
            ? null
            : { rotation: _0x5e7c43.angle }),
          ...(_0x5e7c43.flipX === undefined
            ? null
            : { flipX: _0x5e7c43.flipX }),
          ...(_0x5e7c43.flipY === undefined
            ? null
            : { flipY: _0x5e7c43.flipY }),
        },
      }
    : _0x550635;
}
const Z = {
    id: "board.mutation.update-element",
    type: e.CommandType["MUTATION"],
    handler: (_0x44e815, _0x3017bb) => {
      var _0x2f927d;
      let {
          unitId: _0xa6db8b,
          subUnitId: _0x305d4f,
          elementId: _0x4d57c0,
          element: _0x38078e,
          transform: _0x5c3695,
          isRealtimePreview: _0x4eeb78,
          allowInactiveTarget: _0x5ec393,
          allowLockedTarget: _0x21cf14,
          formulaLastValueGuard: _0x1fe134,
        } = _0x3017bb,
        _0x1d4e27 = _0x3017bb.allowPendingMembershipLockedCoverage;
      if (!_0x3017bb.elementId || _0x38078e.id !== _0x4d57c0) return false;
      let _0x1eaaae = q(_0x38078e),
        _0x24efa1 = _0x44e815
          .get(e.IUniverInstanceService)
          .getUnit(_0xa6db8b, e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0x24efa1) return false;
      let _0x27319f = _0x44e815.get(N),
        _0x1facfc = _0x27319f.getElementByParam({
          unitId: _0xa6db8b,
          subUnitId: _0x305d4f,
          elementId: _0x4d57c0,
        });
      if (!_0x1facfc) return false;
      let _0x2cfece = _0x1facfc,
        _0x512354 = _0x2cfece.element,
        _0x3f18c7 =
          _0x512354.type === s.Shape
            ? (_0x2f927d = _0x512354.shapeData["formulaBinding"]) == null
              ? undefined
              : _0x2f927d.formula
            : undefined;
      if (
        !(0, r.canApplyShapeFormulaLastValue)(
          _0x44e815,
          {
            hostType: e.UniverInstanceType["UNIVER_BOARD"],
            unitId: _0xa6db8b,
            subUnitId: _0x305d4f,
            shapeId: _0x4d57c0,
          },
          _0x3f18c7,
          _0x1fe134,
        )
      )
        return true;
      let _0x57191e = Ya(_0x1eaaae, _0x5c3695);
      if (
        !ka(
          _0x27319f.getElementData(_0xa6db8b, _0x305d4f),
          _0x2cfece.element,
          _0x57191e,
          _0x5c3695,
          {
            allowInactiveTarget: _0x5ec393,
            allowLockedTarget: _0x21cf14,
            allowPendingMembershipLockedCoverage: _0x1d4e27,
          },
        )
      )
        return false;
      let _0x5c7536 = {
        ..._0x2cfece,
        element: _0x57191e,
        transform: _0x5c3695 ?? _0x2cfece.transform,
      };
      if (_0x4eeb78) return true;
      if (!Ga(_0x24efa1, _0x2cfece, _0x57191e, _0x5c3695)) return false;
      let _0x3705c8 = Ei(_0x27319f.getBatchUpdateElementOp([_0x5c7536]));
      return (
        _0x27319f.applyElementJson1(_0xa6db8b, _0x305d4f, _0x3705c8.redo),
        _0x27319f.updateElementNotification(_0x3705c8.objects),
        true
      );
    },
  },
  Xa = {
    id: "board.command.normalize-connector-routing",
    type: e.CommandType["COMMAND"],
    handler: (_0x4895ea, _0x2b2f11) => {
      if (
        !(_0x2b2f11 != null && _0x2b2f11.unitId) ||
        !_0x2b2f11.subUnitId ||
        _0x2b2f11.connectorIds["length"] === 0
      )
        return false;
      let _0x1bb4c1 = _0x4895ea
          .get(N)
          .getElementData(_0x2b2f11.unitId, _0x2b2f11.subUnitId),
        _0x37f732 = [],
        _0x468277 = [],
        _0x472dea = [],
        _0x2e39dc = [],
        _0x22b8fa = [];
      for (let _0x4b2d51 of Array.from(
        new Set(_0x2b2f11.connectorIds),
      ).sort()) {
        var _0x3644f7, _0x5eedfa;
        let _0x34af11 = _0x1bb4c1[_0x4b2d51];
        if (
          !_0x34af11 ||
          _0x34af11.element["type"] !== s.Connector ||
          _0x34af11.element["locked"] === true
        ) {
          _0x2e39dc.push(_0x4b2d51);
          continue;
        }
        let _0x253161 = _0x34af11.element;
        if (
          _0x253161.connectorData["routing"] === "orthogonal" &&
          _0x253161.connectorData["routingMode"] === "auto" &&
          !(
            (_0x3644f7 = _0x253161.connectorData["waypoints"]) != null &&
            _0x3644f7.length
          ) &&
          !(
            (_0x5eedfa = _0x253161.connectorData["orthogonalData"]) != null &&
            (_0x5eedfa = _0x5eedfa.routePoints) != null &&
            _0x5eedfa.length
          ) &&
          _0x253161.connectorData["curveData"] === undefined
        )
          continue;
        let _0x37ee6b = e.Tools["deepClone"](_0x253161);
        ((_0x37ee6b.connectorData["routing"] = "orthogonal"),
          (_0x37ee6b.connectorData["routingMode"] = "auto"),
          delete _0x37ee6b.connectorData["waypoints"],
          delete _0x37ee6b.connectorData["orthogonalData"],
          delete _0x37ee6b.connectorData["curveData"],
          _0x37f732.push({
            id: Z.id,
            params: {
              unitId: _0x2b2f11.unitId,
              subUnitId: _0x2b2f11.subUnitId,
              elementId: _0x4b2d51,
              element: _0x37ee6b,
              transform: pr(_0x37ee6b.transform),
            },
          }),
          _0x468277.unshift({
            id: Z.id,
            params: {
              unitId: _0x2b2f11.unitId,
              subUnitId: _0x2b2f11.subUnitId,
              elementId: _0x4b2d51,
              element: e.Tools["deepClone"](_0x253161),
              transform: _0x34af11.transform
                ? { ..._0x34af11.transform }
                : _0x34af11.transform,
            },
          }),
          _0x472dea.push(_0x4b2d51),
          _0x22b8fa.push(...Za(_0x1bb4c1, _0x253161)));
      }
      return _0x37f732.length === 0
        ? {
            changedConnectorIds: _0x472dea,
            skippedElementIds: _0x2e39dc,
            affectedBounds: $a(_0x22b8fa),
          }
        : (0, e.sequenceExecute)(_0x37f732, _0x4895ea.get(e.ICommandService))
              .result
          ? (_0x4895ea
              .get(e.IUndoRedoService)
              .pushUndoRedo({
                unitID: _0x2b2f11.unitId,
                redoMutations: _0x37f732,
                undoMutations: _0x468277,
              }),
            {
              changedConnectorIds: _0x472dea,
              skippedElementIds: _0x2e39dc,
              affectedBounds: $a(_0x22b8fa),
            })
          : false;
    },
  };
function Za(_0x2dc51b, _0x5e363a) {
  let _0x38fa71 = [],
    _0xb6b11c = z(_0x2dc51b, _0x5e363a.id);
  _0xb6b11c &&
    (_0xb6b11c.width > 1 || _0xb6b11c.height > 1) &&
    _0x38fa71.push(_0xb6b11c);
  for (let _0x3e2e45 of [
    _0x5e363a.connectorData["start"],
    _0x5e363a.connectorData["end"],
  ]) {
    let _0xa8e6ea = Qa(_0x2dc51b, _0x3e2e45);
    _0xa8e6ea && _0x38fa71.push(_0xa8e6ea);
  }
  return _0x38fa71;
}
function Qa(_0x3560a9, _0x31d82d) {
  return _0x31d82d.kind === "free"
    ? { left: _0x31d82d.x, top: _0x31d82d.y, width: 1, height: 1 }
    : z(_0x3560a9, _0x31d82d.shapeId);
}
function $a(_0x203454) {
  if (_0x203454.length === 0) return null;
  let _0x1bb147 = Math.min(..._0x203454.map((_0x5ae55b) => _0x5ae55b.left)),
    _0x1b317b = Math.min(..._0x203454.map((_0x35e8a2) => _0x35e8a2.top)),
    _0x2d4244 = Math.max(
      ..._0x203454.map((_0x140ae8) => _0x140ae8.left + _0x140ae8.width),
    ),
    _0xf45560 = Math.max(
      ..._0x203454.map((_0x3a3f4b) => _0x3a3f4b.top + _0x3a3f4b.height),
    );
  return {
    left: _0x1bb147,
    top: _0x1b317b,
    width: _0x2d4244 - _0x1bb147,
    height: _0xf45560 - _0x1b317b,
  };
}
function eo(_0x443df3, _0xe9cb6, _0x3a8163) {
  var _0x59f87a, _0xbfb6a0;
  let _0x3cecc8 =
      (_0x59f87a = R(_0x443df3, _0x3a8163)) == null
        ? undefined
        : _0x59f87a.worldTransform,
    _0x1cc4b6 =
      (_0xbfb6a0 = R(_0xe9cb6, _0x3a8163)) == null
        ? undefined
        : _0xbfb6a0.worldTransform;
  return !_0x3cecc8 || !_0x1cc4b6
    ? false
    : _0x3cecc8.left !== _0x1cc4b6.left ||
        _0x3cecc8.top !== _0x1cc4b6.top ||
        _0x3cecc8.width !== _0x1cc4b6.width ||
        _0x3cecc8.height !== _0x1cc4b6.height ||
        (_0x3cecc8.rotation ?? 0) !== (_0x1cc4b6.rotation ?? 0);
}
function to(_0x938727, _0x285b57, _0x4ad5f6) {
  let _0x88f9fd = new Set();
  return (
    _0x4ad5f6.forEach((_0x34faac) => {
      eo(_0x938727, _0x285b57, _0x34faac) && _0x88f9fd.add(_0x34faac);
    }),
    _0x88f9fd.size === 0 ||
      Object.values(_0x285b57).forEach((_0x5d861e) => {
        _0x88f9fd.has(_0x5d861e.elementId) ||
          (L(_0x285b57, _0x5d861e.elementId).some((_0xfe6c6e) =>
            _0x88f9fd.has(_0xfe6c6e),
          ) &&
            eo(_0x938727, _0x285b57, _0x5d861e.elementId) &&
            _0x88f9fd.add(_0x5d861e.elementId));
      }),
    _0x88f9fd
  );
}
function no(_0x1cff25, _0x4ebadf, _0x4a8bae) {
  let _0x44ec69 = new Set();
  return (
    _0x4a8bae.forEach((_0x2b932e) => {
      var _0x563e5b, _0x11fc6f;
      let _0x2e4aa0 =
          (_0x563e5b = _0x1cff25[_0x2b932e]) == null
            ? undefined
            : _0x563e5b.element,
        _0x50b628 =
          (_0x11fc6f = _0x4ebadf[_0x2b932e]) == null
            ? undefined
            : _0x11fc6f.element;
      _0x2e4aa0 &&
        _0x50b628 &&
        (_0x2e4aa0.parentId !== _0x50b628.parentId ||
          _0x2e4aa0.laneId !== _0x50b628.laneId) &&
        _0x44ec69.add(_0x2b932e);
    }),
    _0x44ec69.size === 0 ||
      Object.values(_0x4ebadf).forEach((_0x38dc95) => {
        _0x44ec69.has(_0x38dc95.elementId) ||
          (L(_0x4ebadf, _0x38dc95.elementId).some((_0x4d6330) =>
            _0x44ec69.has(_0x4d6330),
          ) &&
            _0x44ec69.add(_0x38dc95.elementId));
      }),
    _0x44ec69
  );
}
function ro(_0x44f993, _0x2ae20a, _0x59427c) {
  return (
    _0x59427c.has(_0x2ae20a) ||
    Zi(_0x44f993).some((_0xf04510) => _0x59427c.has(_0xf04510))
  );
}
function io(_0x48460c, _0x51b3c9, _0x549a11) {
  let _0x33b5b0 = new Set();
  return (
    _0x549a11.forEach((_0x4dc13e) => {
      let _0x520a55 = _0x48460c[_0x4dc13e],
        _0x26ab91 = _0x51b3c9[_0x4dc13e];
      !X(_0x520a55) ||
        !X(_0x26ab91) ||
        ((JSON.stringify(_0x520a55.element["connectorData"].start) !==
          JSON.stringify(_0x26ab91.element["connectorData"].start) ||
          JSON.stringify(_0x520a55.element["connectorData"].end) !==
            JSON.stringify(_0x26ab91.element["connectorData"].end) ||
          JSON.stringify(_0x520a55.element["connectorData"].waypoints) !==
            JSON.stringify(_0x26ab91.element["connectorData"].waypoints) ||
          JSON.stringify(_0x520a55.element["connectorData"].orthogonalData) !==
            JSON.stringify(_0x26ab91.element["connectorData"].orthogonalData) ||
          JSON.stringify(_0x520a55.element["connectorData"].curveData) !==
            JSON.stringify(_0x26ab91.element["connectorData"].curveData)) &&
          _0x33b5b0.add(_0x4dc13e));
    }),
    _0x33b5b0
  );
}
function ao(_0x57056b) {
  var _0x1a5aac, _0x4c26ff, _0xdaeb7, _0x2fd664;
  return (
    _0x57056b.connectorData["start"].kind === "free" ||
    _0x57056b.connectorData["end"].kind === "free" ||
    ((_0x1a5aac = _0x57056b.connectorData["waypoints"]) == null
      ? undefined
      : _0x1a5aac.some((_0x384f00) => _0x384f00.kind === "manual")) === true ||
    ((_0x4c26ff = _0x57056b.connectorData["orthogonalData"]) == null ||
    (_0x4c26ff = _0x4c26ff.routePoints) == null
      ? undefined
      : _0x4c26ff.some((_0x16d7f7) => _0x16d7f7.kind === "manual")) === true ||
    ((_0xdaeb7 = _0x57056b.connectorData["curveData"]) == null ||
    (_0xdaeb7 = _0xdaeb7.anchors) == null
      ? undefined
      : _0xdaeb7.some((_0x46221a) => _0x46221a.kind === "manual")) === true ||
    ((_0x2fd664 = _0x57056b.connectorData["curveData"]) == null ||
    (_0x2fd664 = _0x2fd664.controls) == null
      ? undefined
      : _0x2fd664.some((_0x2ec28a) => _0x2ec28a.kind === "manual")) === true
  );
}
function oo(_0x9ad33d, _0x95d69e) {
  let _0x58c7d0 =
      typeof _0x95d69e.rotation == "number"
        ? _0x95d69e.rotation
        : _0x95d69e.angle,
    _0x1ffa0a = {
      ..._0x9ad33d.transform,
      left: _0x95d69e.left,
      top: _0x95d69e.top,
      width: _0x95d69e.width,
      height: _0x95d69e.height,
      ...(_0x58c7d0 === undefined ? null : { rotation: _0x58c7d0 }),
      ...(_0x95d69e.flipX === undefined ? null : { flipX: _0x95d69e.flipX }),
      ...(_0x95d69e.flipY === undefined ? null : { flipY: _0x95d69e.flipY }),
    };
  return { ..._0x9ad33d, transform: _0x1ffa0a };
}
function so(_0x26bf3b) {
  let _0x1c6897 = new Map(
      _0x26bf3b.map((_0x44860f) => [
        _0x44860f.redoMutation["params"].elementId,
        _0x44860f,
      ]),
    ),
    _0x2c2740 = (_0x2e8a2a, _0x29d39f) => {
      let _0x75f6b6 = new Set(),
        _0x195bc2 = [_0x29d39f];
      for (; _0x195bc2.length > 0;) {
        var _0x28fe75, _0x371d7b;
        let _0x4c53fa = _0x195bc2.shift();
        if (!_0x4c53fa || _0x75f6b6.has(_0x4c53fa)) continue;
        _0x75f6b6.add(_0x4c53fa);
        let _0x392529 = _0x1c6897.get(_0x4c53fa),
          _0x14bee4 =
            _0x392529 == null ||
            (_0x28fe75 = _0x392529.redoMutation["params"]) == null
              ? undefined
              : _0x28fe75.element,
          _0x34f12a =
            _0x392529 == null ||
            (_0x371d7b = _0x392529.undoMutation["params"]) == null
              ? undefined
              : _0x371d7b.element,
          _0x5daffc = [
            _0x14bee4 == null ? undefined : _0x14bee4.parentId,
            _0x34f12a == null ? undefined : _0x34f12a.parentId,
          ].filter((_0x300b33) => !!_0x300b33);
        if (_0x5daffc.includes(_0x2e8a2a)) return true;
        _0x195bc2.push(..._0x5daffc);
      }
      return false;
    };
  return (_0x19b852, _0x12fa01, _0x113b58) => {
    let _0x55213 = _0x19b852.redoMutation["params"].elementId,
      _0x1ec283 = _0x12fa01.redoMutation["params"].elementId;
    return _0x2c2740(_0x55213, _0x1ec283)
      ? _0x113b58
        ? 1
        : -1
      : _0x2c2740(_0x1ec283, _0x55213)
        ? _0x113b58
          ? -1
          : 1
        : 0;
  };
}
function co(_0x5ed523) {
  let _0x5a437c = so(_0x5ed523);
  return [..._0x5ed523].sort((_0x34ea22, _0x5df9af) =>
    _0x5a437c(_0x34ea22, _0x5df9af, true),
  );
}
function lo(_0x19baae) {
  let _0xbe1d38 = so(_0x19baae);
  return [..._0x19baae].sort((_0x35a01c, _0x235ec0) =>
    _0xbe1d38(_0x35a01c, _0x235ec0, false),
  );
}
function uo(_0x4a8651, _0x3edbc6) {
  if (!_0x3edbc6 || _0x3edbc6.updates["length"] === 0) return false;
  let {
      historyId: _0x24cde4,
      unitId: _0x249f88,
      subUnitId: _0x5a4405,
      updates: _0x13d5dd,
    } = _0x3edbc6,
    _0x27482c = _0x4a8651.get(N),
    _0x5575ba = [],
    _0x339e91 = new Map(),
    _0x35c190 = new Set(),
    _0x1765ae = _0x27482c.getElementData(_0x249f88, _0x5a4405),
    _0x49e47e = { ..._0x1765ae };
  for (let _0x509561 of _0x13d5dd) {
    if (
      !_0x509561.elementId ||
      _0x35c190.has(_0x509561.elementId) ||
      (_0x35c190.add(_0x509561.elementId),
      _0x509561.element["id"] !== _0x509561.elementId)
    )
      return false;
    let _0x28d735 = _0x27482c.getElementByParam({
      unitId: _0x249f88,
      subUnitId: _0x5a4405,
      elementId: _0x509561.elementId,
    });
    if (
      !_0x28d735 ||
      _0x509561.element["type"] !== _0x28d735.element["type"] ||
      _0x28d735.element["locked"] === true
    )
      return false;
    let _0x2e5659 = q(e.Tools["deepClone"](_0x509561.element)),
      _0x33b559 = _0x509561.transform
        ? oo(_0x2e5659, _0x509561.transform)
        : _0x2e5659,
      _0x3630e7 = {
        unitId: _0x249f88,
        subUnitId: _0x5a4405,
        ..._0x509561,
        element: _0x33b559,
      };
    _0x509561.transform && (_0x3630e7.transform = { ..._0x509561.transform });
    let _0x3fbcb0 = { id: Z.id, params: _0x3630e7 },
      _0x30c61e = {
        id: Z.id,
        params: {
          unitId: _0x249f88,
          subUnitId: _0x5a4405,
          elementId: _0x509561.elementId,
          element: q(e.Tools["deepClone"](_0x28d735.element)),
          transform: _0x28d735.transform
            ? { ..._0x28d735.transform }
            : _0x28d735.transform,
          ...(_0x33b559.locked === true ? { allowLockedTarget: true } : null),
          ...(_0x33b559.visible === false || _0x33b559.selectable === false
            ? { allowInactiveTarget: true }
            : null),
        },
      };
    (_0x5575ba.push({ redoMutation: _0x3fbcb0, undoMutation: _0x30c61e }),
      _0x339e91.set(_0x509561.elementId, {
        redoMutation: _0x3fbcb0,
        undoMutation: _0x30c61e,
      }),
      (_0x49e47e[_0x509561.elementId] = {
        ..._0x28d735,
        element: _0x3630e7.element,
        transform: _0x3630e7.transform ?? _0x28d735.transform,
      }));
  }
  let _0x2faf4c = to(_0x1765ae, _0x49e47e, _0x35c190),
    _0x2d1df1 = no(_0x1765ae, _0x49e47e, _0x35c190),
    _0x420e91 = io(_0x1765ae, _0x49e47e, _0x35c190),
    _0x1d1ffa = false;
  if (
    (Object.values(_0x49e47e).forEach((_0x3c0a2d) => {
      var _0x2bdcc6;
      if (
        (_0x2faf4c.size === 0 &&
          _0x2d1df1.size === 0 &&
          _0x420e91.size === 0) ||
        !X(_0x3c0a2d) ||
        (_0x35c190.has(_0x3c0a2d.elementId) &&
          !_0x420e91.has(_0x3c0a2d.elementId))
      )
        return;
      let _0x48dca2 = ro(_0x3c0a2d.element, _0x3c0a2d.elementId, _0x2faf4c),
        _0x8eb105 = ro(_0x3c0a2d.element, _0x3c0a2d.elementId, _0x2d1df1),
        _0x57faf2 = _0x420e91.has(_0x3c0a2d.elementId);
      if (!_0x48dca2 && !_0x8eb105 && !_0x57faf2) return;
      let _0x5d5f4d = _0x3c0a2d.element,
        _0x3f6f13 = _0x339e91.get(_0x3c0a2d.elementId),
        _0x4f623f =
          _0x3f6f13 == null ? undefined : _0x3f6f13.redoMutation["params"],
        _0x972b7c = Zi(_0x5d5f4d).some((_0x2eaedc) => _0x2faf4c.has(_0x2eaedc)),
        _0x376e25 =
          (_0x2bdcc6 = R(_0x49e47e, _0x3c0a2d.elementId)) == null
            ? undefined
            : _0x2bdcc6.worldTransform;
      if (
        (_0x57faf2 &&
          ((_0x5d5f4d = fr(_0x5d5f4d, new Set(Zi(_0x5d5f4d)), _0x49e47e)),
          _0x4f623f != null && _0x4f623f.transform && _0x972b7c
            ? ((_0x5d5f4d = oo(_0x5d5f4d, _0x4f623f.transform)),
              (_0x376e25 = _0x5d5f4d.transform))
            : ((_0x376e25 = ur(_0x5d5f4d)),
              (_0x5d5f4d = { ..._0x5d5f4d, transform: _0x376e25 }))),
        _0x48dca2 &&
          _0x2faf4c.has(_0x3c0a2d.elementId) &&
          ao(_0x5d5f4d) &&
          !_0x57faf2 &&
          !(_0x3f6f13 && _0x972b7c))
      ) {
        var _0x1a653c;
        let _0x440584 =
          (_0x1a653c = R(_0x1765ae, _0x3c0a2d.elementId)) == null
            ? undefined
            : _0x1a653c.worldTransform;
        if (_0x440584 && _0x376e25) {
          let _0x58c965 = {
            x: (_0x376e25.left ?? 0) - (_0x440584.left ?? 0),
            y: (_0x376e25.top ?? 0) - (_0x440584.top ?? 0),
          };
          (_0x58c965.x !== 0 || _0x58c965.y !== 0) &&
            (_0x5d5f4d = ir(_0x5d5f4d, _0x58c965));
        }
      }
      let _0x1198fa = _0x5d5f4d;
      _0x48dca2 &&
        ((_0x5d5f4d = fr(_0x5d5f4d, _0x2faf4c, _0x49e47e)),
        _0x5d5f4d !== _0x1198fa && (_0x376e25 = _0x5d5f4d.transform));
      let _0x338673 = aa(_0x49e47e, _0x5d5f4d);
      if (
        _0x57faf2 ||
        _0x5d5f4d.parentId !== _0x338673.parentId ||
        _0x5d5f4d.laneId !== _0x338673.laneId
      ) {
        if (!_0x376e25) return;
        let _0xf32db6 = B(_0x49e47e, {
          parentId: _0x338673.parentId,
          worldTransform: _0x376e25,
        });
        _0x5d5f4d = oo(
          {
            ..._0x5d5f4d,
            parentId: _0x338673.parentId,
            laneId: _0x338673.laneId,
          },
          _0xf32db6,
        );
      }
      if (_0x5d5f4d === _0x3c0a2d.element) return;
      if (_0x3c0a2d.element["locked"] === true) {
        _0x1d1ffa = true;
        return;
      }
      if (_0x3f6f13) {
        let _0x31b02d = _0x3f6f13.redoMutation["params"];
        ((_0x31b02d.element = e.Tools["deepClone"](_0x5d5f4d)),
          (_0x31b02d.transform = pr(_0x5d5f4d.transform)),
          (_0x49e47e[_0x3c0a2d.elementId] = {
            ..._0x3c0a2d,
            element: _0x5d5f4d,
            transform: _0x31b02d.transform,
          }));
        return;
      }
      let _0x43e88b = {
          id: Z.id,
          params: {
            unitId: _0x249f88,
            subUnitId: _0x5a4405,
            elementId: _0x3c0a2d.elementId,
            element: e.Tools["deepClone"](_0x5d5f4d),
            transform: pr(_0x5d5f4d.transform),
          },
        },
        _0x3fa5c0 = {
          id: Z.id,
          params: {
            unitId: _0x249f88,
            subUnitId: _0x5a4405,
            elementId: _0x3c0a2d.elementId,
            element: e.Tools["deepClone"](_0x3c0a2d.element),
            transform: _0x3c0a2d.transform
              ? { ..._0x3c0a2d.transform }
              : _0x3c0a2d.transform,
          },
        };
      (_0x5575ba.push({ redoMutation: _0x43e88b, undoMutation: _0x3fa5c0 }),
        (_0x49e47e[_0x3c0a2d.elementId] = {
          ..._0x3c0a2d,
          element: _0x5d5f4d,
          transform: pr(_0x5d5f4d.transform),
        }));
    }),
    _0x1d1ffa)
  )
    return false;
  let _0xa0652b = co(_0x5575ba).map((_0x5af233) => _0x5af233.redoMutation),
    _0x59d94e = lo(_0x5575ba).map((_0x2a2cb7) => _0x2a2cb7.undoMutation);
  if (
    !Aa(_0x1765ae, _0xa0652b) ||
    !(0, e.sequenceExecute)(_0xa0652b, _0x4a8651.get(e.ICommandService)).result
  )
    return false;
  let _0x5825a1 = _0x4a8651.get(e.IUndoRedoService),
    _0x58899 = _0x24cde4 ? _0x5825a1.pitchTopUndoElement() : null,
    _0xf9b6ef =
      _0x58899 && _0x58899.id === _0x24cde4 && _0x58899.unitID === _0x249f88
        ? _0x58899
        : null;
  return (
    _0xf9b6ef && _0x5825a1.popUndoToRedo(),
    _0x5825a1.pushUndoRedo({
      ...(_0x24cde4 ? { id: _0x24cde4 } : null),
      unitID: _0x249f88,
      redoMutations: _0xf9b6ef
        ? [..._0xf9b6ef.redoMutations, ..._0xa0652b]
        : _0xa0652b,
      undoMutations: _0xf9b6ef
        ? [..._0x59d94e, ..._0xf9b6ef.undoMutations]
        : _0x59d94e,
    }),
    true
  );
}
const fo = {
    id: "board.command.update-elements",
    type: e.CommandType["COMMAND"],
    handler: uo,
  },
  po = {
    id: "board.command.remove-connector-label",
    type: e.CommandType["COMMAND"],
    handler: (_0x184b74, _0x48b36f) => {
      var _0x194698;
      if (!_0x48b36f) return false;
      let _0x813279 = _0x184b74.get(N).getElementByParam(_0x48b36f),
        _0x8cf42c = _0x813279 == null ? undefined : _0x813279.element;
      if (!_0x8cf42c || _0x8cf42c.type !== s.Connector) return false;
      let _0xa8c64a = Gi(_0x8cf42c.connectorData),
        _0x48e15f =
          _0x48b36f.labelId ??
          ((_0x194698 = _0xa8c64a[0]) == null ? undefined : _0x194698.id);
      return !_0x48e15f ||
        !_0xa8c64a.some((_0x479e0c) => _0x479e0c.id === _0x48e15f)
        ? false
        : uo(_0x184b74, {
            unitId: _0x48b36f.unitId,
            subUnitId: _0x48b36f.subUnitId,
            updates: [
              {
                elementId: _0x48b36f.elementId,
                element: {
                  ..._0x8cf42c,
                  connectorData: Ki(
                    _0x8cf42c.connectorData,
                    _0xa8c64a.filter((_0x138b70) => _0x138b70.id !== _0x48e15f),
                  ),
                },
              },
            ],
          });
    },
  },
  mo = (0, e.createIdentifier)("board.table-adapter.service");
var ho = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x19073c) {
    return (
      this._adapters["push"](_0x19073c),
      (0, e.toDisposable)(() => {
        let _0x3caa7a = this._adapters["indexOf"](_0x19073c);
        _0x3caa7a >= 0 && this._adapters["splice"](_0x3caa7a, 1);
      })
    );
  }
  insertTable(_0x3bc419) {
    for (let _0x3ff5b2 of this._adapters)
      if (_0x3ff5b2.insertTable(_0x3bc419)) return true;
    return false;
  }
  getRemoveTableMutationInfos(_0x384cb8) {
    let _0x5ea76a = { redoMutations: [], undoMutations: [] };
    for (let _0x39461f of this._adapters) {
      var _0x2677d9;
      let _0x30dd01 =
        (_0x2677d9 = _0x39461f.getRemoveTableMutationInfos) == null
          ? undefined
          : _0x2677d9.call(_0x39461f, _0x384cb8);
      _0x30dd01 &&
        (_0x5ea76a.redoMutations["push"](..._0x30dd01.redoMutations),
        _0x5ea76a.undoMutations["push"](..._0x30dd01.undoMutations));
    }
    return _0x5ea76a;
  }
  getSearchEntries(_0x4c50cf) {
    let _0x2ffdd1 = [];
    for (let _0x337773 of this._adapters) {
      var _0x41ae50;
      let _0x469ee5 =
        (_0x41ae50 = _0x337773.getSearchEntries) == null
          ? undefined
          : _0x41ae50.call(_0x337773, _0x4c50cf);
      _0x469ee5 && _0x2ffdd1.push(..._0x469ee5);
    }
    return _0x2ffdd1;
  }
};
function go(_0x3da939) {
  switch (_0x3da939.type) {
    case s.Shape:
      return String(_0x3da939.shapeData["shapeType"] ?? _0x3da939.type);
    default:
      return _0x3da939.type;
  }
}
function _o(_0x3662f5) {
  return _0x3662f5.name || _0x3662f5.id;
}
function vo(_0x446dee, _0x4f2c34) {
  var _0x5ac573;
  return (
    ((_0x5ac573 = _0x446dee.name) != null && _0x5ac573.trim()) ||
      (_0x446dee.name = (0, r.createUniqueShapeName)(
        go(_0x446dee),
        Array.from(_0x4f2c34).map(_o),
      )),
    _0x446dee
  );
}
function yo(_0x11025c, _0x5df444) {
  let _0x620fc5 = Array.from(_0x5df444).map(_o);
  return _0x11025c.map((_0x4916aa) => {
    var _0x5949bf;
    let _0x1ecd4d =
      (_0x5949bf = _0x4916aa.name) == null ? undefined : _0x5949bf.trim();
    return _0x1ecd4d
      ? (_0x620fc5.push(_0x1ecd4d), _0x4916aa)
      : ((_0x4916aa.name = (0, r.createUniqueShapeName)(
          go(_0x4916aa),
          _0x620fc5,
        )),
        _0x620fc5.push(_0x4916aa.name ?? _0x4916aa.id),
        _0x4916aa);
  });
}
function bo(_0x5b3d8f, _0x3353aa, _0x428bd9 = {}) {
  if (
    !pa(_0x5b3d8f) ||
    (J(_0x5b3d8f) && !_0x428bd9.allowEmbedAnchor) ||
    (J(_0x5b3d8f) && (_0x5b3d8f.parentId || _0x5b3d8f.laneId)) ||
    (J(_0x5b3d8f) &&
      ((_0x5b3d8f.transform["rotation"] ?? 0) !== 0 ||
        _0x5b3d8f.transform["flipX"] === true ||
        _0x5b3d8f.transform["flipY"] === true)) ||
    (J(_0x5b3d8f) &&
      Object.values(_0x3353aa).some((_0x9bc63f) =>
        Ai(_0x9bc63f.element, _0x5b3d8f),
      )) ||
    !Oa(_0x5b3d8f) ||
    !ya(_0x3353aa, _0x5b3d8f)
  )
    return false;
  if (!_0x5b3d8f.parentId) return true;
  let _0x1a0f34 = _0x3353aa[_0x5b3d8f.parentId],
    _0x40d32d = _0x1a0f34 == null ? undefined : _0x1a0f34.element;
  if ((_0x40d32d == null ? undefined : _0x40d32d.type) !== s.Container)
    return false;
  let _0x42296c = _0x40d32d.containerData["behavior"];
  return (!_0x428bd9.allowLockedParent &&
    (_0x1a0f34.hidden === true ||
      _0x40d32d.visible === false ||
      _0x40d32d.locked === true ||
      _0x40d32d.selectable === false ||
      _0x42296c.membershipLocked)) ||
    (!_0x428bd9.allowLockedParent && Da(_0x3353aa, _0x5b3d8f)) ||
    !_0x42296c.acceptsChildren
    ? false
    : _0x5b3d8f.type !== s.Container ||
        (_0x42296c.acceptsContainer && _0x42296c.allowNested);
}
const xo = {
  id: "board.mutation.add-element",
  type: e.CommandType["MUTATION"],
  handler: (_0x3cf403, _0x175112) => {
    let {
        unitId: _0x1ced9c,
        subUnitId: _0x617f7b,
        insertIndex: _0x731433,
        allowLockedParent: _0x4013de,
        allowEmbedAnchor: _0x489c86,
      } = _0x175112,
      _0x13d2a5 = q(_0x175112.element),
      _0x255468 = _0x3cf403
        .get(e.IUniverInstanceService)
        .getUnit(_0x1ced9c, e.UniverInstanceType["UNIVER_BOARD"]);
    if (!_0x255468) return false;
    let _0x1931ca = _0x3cf403.get(N),
      _0x226d29 = _0x1931ca.getElementData(_0x1ced9c, _0x617f7b);
    if (
      (J(_0x13d2a5) &&
        Object.values(_0x1931ca.getElementDataForUnit(_0x1ced9c)).some(
          (_0x513e20) =>
            Object.values(_0x513e20.data).some((_0xd4f347) =>
              Ai(_0xd4f347.element, _0x13d2a5),
            ),
        )) ||
      !bo(_0x13d2a5, _0x226d29, {
        allowLockedParent: _0x4013de,
        allowEmbedAnchor: _0x489c86,
      })
    )
      return false;
    let _0x5ab6fc = Je(
      _0x1ced9c,
      _0x617f7b,
      vo(
        _0x13d2a5,
        Object.values(_0x226d29).map((_0x3d9766) => _0x3d9766.element),
      ),
      _0x255468.getThemeData(),
    );
    if (!Wa(_0x255468, _0x5ab6fc, _0x731433)) return false;
    let _0x5a32dd = Ei(_0x1931ca.getBatchAddElementOp([_0x5ab6fc]));
    return (
      _0x1931ca.applyElementJson1(_0x1ced9c, _0x617f7b, _0x5a32dd.redo),
      _0x5a32dd.objects["length"] > 0 &&
        _0x1931ca.addElementNotification(_0x5a32dd.objects),
      true
    );
  },
};
function So(_0x347749, _0x4770b6, _0x24c47e, _0x585fa8) {
  return _0x4770b6.some((_0x2a7f2a) => {
    var _0x4834ca;
    return _0x585fa8 && _0x2a7f2a === _0x24c47e
      ? false
      : ((_0x4834ca = _0x347749[_0x2a7f2a]) == null
          ? undefined
          : _0x4834ca.element["locked"]) === true;
  });
}
const Co = {
  id: "board.mutation.remove-element",
  type: e.CommandType["MUTATION"],
  handler: (_0x40a758, _0x1457c4) => {
    var _0x530871;
    let {
      unitId: _0x1c62b8,
      subUnitId: _0x918745,
      elementId: _0x57700d,
      allowLockedParent: _0x54c2d1,
      allowLockedTarget: _0x29023b,
    } = _0x1457c4;
    if (!_0x1457c4.elementId) return false;
    let _0x13a191 = _0x40a758
      .get(e.IUniverInstanceService)
      .getUnit(_0x1c62b8, e.UniverInstanceType["UNIVER_BOARD"]);
    if (!_0x13a191) return false;
    let _0x4c74a2 = _0x40a758.get(N),
      _0x2c349c = _0x4c74a2.getElementByParam({
        unitId: _0x1c62b8,
        subUnitId: _0x918745,
        elementId: _0x57700d,
      });
    if (!_0x2c349c) return false;
    let _0x454d32 = _0x2c349c,
      _0x32cb3a = _0x4c74a2.getElementData(_0x1c62b8, _0x918745),
      _0x32e22e = _0x454d32.element["parentId"]
        ? (_0x530871 = _0x32cb3a[_0x454d32.element["parentId"]]) == null
          ? undefined
          : _0x530871.element
        : undefined;
    if (
      (!_0x54c2d1 && Da(_0x32cb3a, _0x454d32.element)) ||
      (!_0x54c2d1 &&
        (_0x32e22e == null ? undefined : _0x32e22e.type) === s.Container &&
        _0x32e22e.containerData["behavior"].membershipLocked)
    )
      return false;
    let _0x3bbe67 = nt(
      _0x32cb3a,
      _0x4c74a2.getElementOrder(_0x1c62b8, _0x918745),
      [_0x57700d],
    );
    if (
      (Object.values(_0x32cb3a).forEach((_0x3bcf08) => {
        !X(_0x3bcf08) ||
          _0x3bbe67.includes(_0x3bcf08.elementId) ||
          (Zi(_0x3bcf08.element).some((_0x564331) =>
            _0x3bbe67.includes(_0x564331),
          ) &&
            _0x3bbe67.push(_0x3bcf08.elementId));
      }),
      So(_0x32cb3a, _0x3bbe67, _0x57700d, _0x29023b))
    )
      return false;
    let _0xf72627 = (_0x3bbe67.length > 0 ? _0x3bbe67 : [_0x57700d]).map(
        (_0x3c08a5) => ({
          unitId: _0x1c62b8,
          subUnitId: _0x918745,
          elementId: _0x3c08a5,
        }),
      ),
      _0x52862a = Ei(_0x4c74a2.getBatchRemoveElementOp(_0xf72627)),
      _0xf2c83f = _0xf72627
        .map((_0x257266) => _0x4c74a2.getElementByParam(_0x257266))
        .filter((_0x21aa5f) => !!_0x21aa5f)
        .map((_0x305d32) => _0x305d32);
    return qa(_0x13a191, _0xf2c83f.length > 0 ? _0xf2c83f : [_0x454d32])
      ? (_0x4c74a2.applyElementJson1(_0x1c62b8, _0x918745, _0x52862a.redo),
        _0x4c74a2.removeElementNotification(_0xf72627),
        true)
      : false;
  },
};
function wo(_0x500438, _0x2d7fdd, _0x31409c) {
  let _0x54e0fb = nt(_0x500438, [..._0x2d7fdd], [..._0x31409c]),
    _0x43edb2 = new Set(_0x54e0fb);
  return (
    Object.values(_0x500438).forEach((_0x3a2451) => {
      !X(_0x3a2451) ||
        _0x43edb2.has(_0x3a2451.elementId) ||
        (Zi(_0x3a2451.element).some((_0x5a143f) => _0x43edb2.has(_0x5a143f)) &&
          (_0x54e0fb.push(_0x3a2451.elementId),
          _0x43edb2.add(_0x3a2451.elementId)));
    }),
    _0x54e0fb
  );
}
function To(_0x50d99e, _0x433ac7, _0x47793f) {
  var _0x11549a, _0x254ed3;
  let _0x4a110a =
      (_0x11549a = _0x50d99e[_0x47793f]) == null
        ? undefined
        : _0x11549a.element,
    _0x570279 =
      _0x4a110a != null && _0x4a110a.parentId
        ? (_0x254ed3 = _0x50d99e[_0x4a110a.parentId]) == null
          ? undefined
          : _0x254ed3.element
        : undefined;
  return (
    !_0x570279 ||
    _0x570279.type !== s.Container ||
    !_0x570279.containerData["behavior"].membershipLocked ||
    _0x433ac7.has(_0x570279.id)
  );
}
function Eo(_0x7a2d40, _0xd54f35) {
  let _0x1216ae = new Set(_0xd54f35),
    _0x86ab4b = new Map(
      _0xd54f35.map((_0x184377, _0x206235) => [_0x184377, _0x206235]),
    ),
    _0x334128 = new Map(),
    _0x1cbe54 = (_0x580a37, _0x3422f4 = new Set()) => {
      var _0x22e85b;
      let _0x3ea178 = _0x334128.get(_0x580a37);
      if (_0x3ea178 !== undefined) return _0x3ea178;
      if (_0x3422f4.has(_0x580a37)) return (_0x334128.set(_0x580a37, 0), 0);
      _0x3422f4.add(_0x580a37);
      let _0x51282c =
          (_0x22e85b = _0x7a2d40[_0x580a37]) == null
            ? undefined
            : _0x22e85b.element["parentId"],
        _0x8f979a =
          _0x51282c && _0x1216ae.has(_0x51282c)
            ? _0x1cbe54(_0x51282c, _0x3422f4) + 1
            : 0;
      return (
        _0x3422f4.delete(_0x580a37),
        _0x334128.set(_0x580a37, _0x8f979a),
        _0x8f979a
      );
    };
  return [..._0xd54f35].sort((_0x292552, _0x2c7ad5) => {
    let _0x21a710 = _0x1cbe54(_0x292552) - _0x1cbe54(_0x2c7ad5);
    return _0x21a710 === 0
      ? (_0x86ab4b.get(_0x292552) ?? 0) - (_0x86ab4b.get(_0x2c7ad5) ?? 0)
      : _0x21a710;
  });
}
function Do(_0x1d9598, _0xcc55b, _0x4856b3) {
  let _0xd06091 = new Set(_0x4856b3),
    _0x305685 = new Map(),
    _0x3c62d6 = (_0xdb8bac, _0x27a2e1 = new Set()) => {
      var _0x3d1560;
      let _0x30a34a = _0x305685.get(_0xdb8bac);
      if (_0x30a34a !== undefined) return _0x30a34a;
      if (_0x27a2e1.has(_0xdb8bac)) return (_0x305685.set(_0xdb8bac, 0), 0);
      _0x27a2e1.add(_0xdb8bac);
      let _0x10df77 =
          (_0x3d1560 = _0x1d9598[_0xdb8bac]) == null
            ? undefined
            : _0x3d1560.element["parentId"],
        _0x3fd178 =
          _0x10df77 && _0xd06091.has(_0x10df77)
            ? _0x3c62d6(_0x10df77, _0x27a2e1) + 1
            : 0;
      return (
        _0x27a2e1.delete(_0xdb8bac),
        _0x305685.set(_0xdb8bac, _0x3fd178),
        _0x3fd178
      );
    };
  return [..._0x4856b3].sort((_0x551d75, _0xe2fe0c) => {
    let _0x3bf47d = _0x3c62d6(_0x551d75) - _0x3c62d6(_0xe2fe0c);
    return _0x3bf47d === 0
      ? (_0xcc55b.get(_0x551d75) ?? 2 ** 53 - 1) -
          (_0xcc55b.get(_0xe2fe0c) ?? 2 ** 53 - 1)
      : _0x3bf47d;
  });
}
const Oo = {
  id: "board.operation.remove-elements",
  type: e.CommandType["OPERATION"],
  handler: (_0x2caef9, _0x5821ec) => {
    if (!_0x5821ec || _0x5821ec.elementIds["length"] === 0) return false;
    let {
        unitId: _0x1f727f,
        subUnitId: _0x22716d,
        elementIds: _0x3bdeec,
      } = _0x5821ec,
      _0x43d123 = _0x2caef9.get(N),
      _0x4cdaeb = _0x43d123.getElementData(_0x1f727f, _0x22716d),
      _0x1d6d62 = _0x43d123.getElementOrder(_0x1f727f, _0x22716d),
      _0x2bf0ac = new Map();
    _0x1d6d62.forEach((_0x3c9866, _0x85115c) =>
      _0x2bf0ac.set(_0x3c9866, _0x85115c),
    );
    let _0x2f0148 = new Set(_0x3bdeec);
    if (
      _0x2f0148.size !== _0x3bdeec.length ||
      _0x3bdeec.some((_0x371855) => !_0x4cdaeb[_0x371855])
    )
      return false;
    let _0x103f9c = Do(_0x4cdaeb, _0x2bf0ac, Array.from(_0x2f0148));
    if (
      _0x103f9c.some((_0x3831e6) => {
        var _0x259ff5;
        let _0xb827a8 =
          (_0x259ff5 = _0x4cdaeb[_0x3831e6]) == null
            ? undefined
            : _0x259ff5.element;
        return (
          (_0xb827a8 == null ? undefined : _0xb827a8.locked) || J(_0xb827a8)
        );
      })
    )
      return false;
    let _0xf3e690 = new Set(),
      _0x13db7e = [];
    if (
      (_0x103f9c.forEach((_0x4e878c) => {
        if (_0xf3e690.has(_0x4e878c)) return;
        let _0x3a4c7b = wo(_0x4cdaeb, _0x1d6d62, [_0x4e878c]);
        _0x3a4c7b.length !== 0 &&
          (_0x13db7e.push(_0x4e878c),
          _0x3a4c7b.forEach((_0x1232c1) => _0xf3e690.add(_0x1232c1)));
      }),
      _0x13db7e.length === 0 ||
        Array.from(_0xf3e690).some((_0x3fa5a2) => {
          var _0x578323;
          return (_0x578323 = _0x4cdaeb[_0x3fa5a2]) == null
            ? undefined
            : _0x578323.element["locked"];
        }) ||
        !_0x13db7e.every((_0x50ca2b) => To(_0x4cdaeb, _0xf3e690, _0x50ca2b)))
    )
      return false;
    let _0x5227a8 = _0x1d6d62.filter((_0x138a25) => _0xf3e690.has(_0x138a25)),
      _0x588d42 = Eo(_0x4cdaeb, _0x5227a8),
      _0x4a2873 = _0x13db7e.map((_0x164909) => ({
        id: Co.id,
        params: {
          unitId: _0x1f727f,
          subUnitId: _0x22716d,
          elementId: _0x164909,
          elementType: _0x4cdaeb[_0x164909].element["type"],
          ...(_0x4cdaeb[_0x164909].element["type"] === s.Container
            ? {
                containerKind:
                  _0x4cdaeb[_0x164909].element["containerData"].kind,
              }
            : {}),
        },
      })),
      _0xf4df8a = _0x588d42.map((_0x45e757) => ({
        id: xo.id,
        params: {
          unitId: _0x1f727f,
          subUnitId: _0x22716d,
          element: q(e.Tools["deepClone"](_0x4cdaeb[_0x45e757].element)),
          insertIndex: _0x1d6d62.indexOf(_0x45e757),
          ...(_0x4cdaeb[_0x45e757].element["parentId"] &&
          _0xf3e690.has(_0x4cdaeb[_0x45e757].element["parentId"])
            ? { allowLockedParent: true }
            : {}),
        },
      })),
      _0x1ac934 = _0x13db7e.map((_0x389e79, _0x52d358) => {
        let _0x48cf5a = wo(_0x4cdaeb, _0x1d6d62, [_0x389e79]),
          _0x27467e = Eo(_0x4cdaeb, _0x48cf5a);
        return {
          redoMutation: _0x4a2873[_0x52d358],
          undoMutations: _0x27467e.map((_0x571fbe) => ({
            id: xo.id,
            params: {
              unitId: _0x1f727f,
              subUnitId: _0x22716d,
              element: q(e.Tools["deepClone"](_0x4cdaeb[_0x571fbe].element)),
              insertIndex: _0x1d6d62.indexOf(_0x571fbe),
              ...(_0x4cdaeb[_0x571fbe].element["parentId"] &&
              _0x48cf5a.includes(_0x4cdaeb[_0x571fbe].element["parentId"])
                ? { allowLockedParent: true }
                : {}),
            },
          })),
        };
      });
    if (!ja(_0x4cdaeb, _0x4a2873)) return false;
    let _0x4f9030 = _0x2caef9.get(mo),
      _0x5f3302 = [],
      _0x49f825 = [],
      _0x3d5aeb = [];
    _0x5227a8.forEach((_0x12a582) => {
      let _0x3a7ec6 = _0x4cdaeb[_0x12a582].element;
      if (_0x3a7ec6.type !== s.Table) return;
      let _0x246eff = _0x4f9030.getRemoveTableMutationInfos({
        unitId: _0x1f727f,
        subUnitId: _0x22716d,
        element: _0x3a7ec6,
      });
      (_0x5f3302.push(..._0x246eff.redoMutations),
        _0x49f825.unshift(..._0x246eff.undoMutations),
        _0x246eff.redoMutations["forEach"]((_0x3f570b, _0x4c6cfa) => {
          _0x3d5aeb.push({
            redoMutation: _0x3f570b,
            undoMutation: _0x246eff.undoMutations[_0x4c6cfa],
          });
        }));
    });
    let _0x287e54 = _0x2caef9.get(Kn),
      _0x219853 = [],
      _0x5c87e4 = [],
      _0x2aac77 = [];
    _0x5227a8.forEach((_0x97858b) => {
      let _0xb5f347 = _0x4cdaeb[_0x97858b].element;
      if (_0xb5f347.type !== s.Chart) return;
      let _0x2645a9 = _0x287e54.getRemoveChartMutationInfos({
        unitId: _0x1f727f,
        subUnitId: _0x22716d,
        element: _0xb5f347,
      });
      (_0x219853.push(..._0x2645a9.redoMutations),
        _0x5c87e4.unshift(..._0x2645a9.undoMutations),
        _0x2645a9.redoMutations["forEach"]((_0x2b13d4, _0x1a4d1c) => {
          _0x2aac77.push({
            redoMutation: _0x2b13d4,
            undoMutation: _0x2645a9.undoMutations[_0x1a4d1c],
          });
        }));
    });
    let _0x398676 = _0x2caef9.get(e.ICommandService),
      _0x48bcfb = [];
    for (let {
      redoMutation: _0x371bf9,
      undoMutations: _0x1c6090,
    } of _0x1ac934) {
      if (!_0x398676.syncExecuteCommand(_0x371bf9.id, _0x371bf9.params))
        return (Ao([..._0x48bcfb].reverse(), _0x398676), false);
      _0x48bcfb.push(_0x1c6090);
    }
    let _0x52ec6d = [];
    for (let {
      redoMutation: _0x2b8c9a,
      undoMutation: _0x480ac5,
    } of _0x3d5aeb) {
      if (!_0x398676.syncExecuteCommand(_0x2b8c9a.id, _0x2b8c9a.params))
        return (
          ko([..._0x52ec6d].reverse(), _0x398676),
          Ao([..._0x48bcfb].reverse(), _0x398676),
          false
        );
      _0x480ac5 && _0x52ec6d.push(_0x480ac5);
    }
    let _0x347383 = [];
    for (let {
      redoMutation: _0x5d8c6e,
      undoMutation: _0x318992,
    } of _0x2aac77) {
      if (!_0x398676.syncExecuteCommand(_0x5d8c6e.id, _0x5d8c6e.params))
        return (
          ko([..._0x347383].reverse(), _0x398676),
          ko([..._0x52ec6d].reverse(), _0x398676),
          Ao([..._0x48bcfb].reverse(), _0x398676),
          false
        );
      _0x318992 && _0x347383.push(_0x318992);
    }
    let _0x412a19 = [..._0x4a2873, ..._0x5f3302, ..._0x219853],
      _0x444d55 = [..._0x5c87e4, ..._0x49f825, ..._0xf4df8a];
    return _0x412a19.length === 0
      ? false
      : (_0x2caef9
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x1f727f,
            redoMutations: _0x412a19,
            undoMutations: _0x444d55,
          }),
        true);
  },
};
function ko(_0x5e338c, _0x241b4b) {
  for (let [_0x542f9b, _0x15a8e3] of _0x5e338c.entries())
    if (!_0x241b4b.syncExecuteCommand(_0x15a8e3.id, _0x15a8e3.params))
      return { result: false, index: _0x542f9b };
  return { result: true, index: -1 };
}
function Ao(_0x1d921a, _0x3ba6ec) {
  _0x1d921a.forEach((_0x196680) => {
    ko(_0x196680, _0x3ba6ec);
  });
}
const jo = {
    id: "board.command.remove-element",
    type: e.CommandType["COMMAND"],
    handler: (_0x321fc3, _0x10ae1b) =>
      _0x10ae1b != null && _0x10ae1b.elementId
        ? Oo.handler(_0x321fc3, {
            unitId: _0x10ae1b.unitId,
            subUnitId: _0x10ae1b.subUnitId,
            elementIds: [_0x10ae1b.elementId],
          })
        : false,
  },
  Mo = {
    id: "board.command.resolve-capture-bounds",
    type: e.CommandType["COMMAND"],
    handler: (_0x569705, _0x1a6b59) => {
      if (!(_0x1a6b59 != null && _0x1a6b59.unitId) || !_0x1a6b59.subUnitId)
        return false;
      let _0x16902a = _0x569705.get(N),
        _0x5ee2d8 = No(
          _0x16902a.getElementData(_0x1a6b59.unitId, _0x1a6b59.subUnitId),
          _0x16902a.getElementOrder(_0x1a6b59.unitId, _0x1a6b59.subUnitId),
          _0x1a6b59,
        );
      return _0x5ee2d8.ok
        ? {
            ..._0x5ee2d8,
            unitId: _0x1a6b59.unitId,
            subUnitId: _0x1a6b59.subUnitId,
          }
        : _0x5ee2d8;
    },
  };
function No(_0x188470, _0x5e29ff, _0x34895f) {
  let _0x329328 = _0x34895f.padding ?? 0;
  if (!Number.isFinite(_0x329328) || _0x329328 < 0)
    return { code: "padding-invalid", ok: false };
  if (_0x34895f.region && _0x34895f.elementIds)
    return { code: "selector-conflict", ok: false };
  if (_0x34895f.region)
    return Io(_0x34895f.region)
      ? {
          bounds: Lo(_0x34895f.region, _0x329328),
          ok: true,
          padding: _0x329328,
          region: { ..._0x34895f.region },
          selector: "region",
        }
      : { code: "region-invalid", ok: false };
  if (_0x34895f.elementIds) {
    if (_0x34895f.elementIds["length"] === 0)
      return { code: "elements-empty", ok: false };
    let _0x29d6e5 = [];
    for (let _0x11f492 of _0x34895f.elementIds) {
      if (!_0x188470[_0x11f492])
        return { code: "element-missing", elementId: _0x11f492, ok: false };
      if (!Fo(_0x188470, _0x11f492))
        return { code: "element-hidden", elementId: _0x11f492, ok: false };
      let _0x39359e = Po(_0x188470, _0x11f492);
      if (!_0x39359e || !Io(_0x39359e))
        return { code: "element-unbounded", elementId: _0x11f492, ok: false };
      _0x29d6e5.push(_0x39359e);
    }
    let _0x4e19d1 = Ro(_0x29d6e5);
    return _0x4e19d1
      ? {
          bounds: Lo(_0x4e19d1, _0x329328),
          elementIds: [..._0x34895f.elementIds],
          ok: true,
          padding: _0x329328,
          selector: "elements",
        }
      : { code: "elements-empty", ok: false };
  }
  let _0x2d3645 = Ro(
    _0x5e29ff.flatMap((_0x224dd3) => {
      if (!Fo(_0x188470, _0x224dd3)) return [];
      let _0x291b80 = Po(_0x188470, _0x224dd3);
      return _0x291b80 && Io(_0x291b80) ? [_0x291b80] : [];
    }),
  );
  return _0x2d3645
    ? {
        bounds: Lo(_0x2d3645, _0x329328),
        ok: true,
        padding: _0x329328,
        selector: "content",
      }
    : { code: "content-empty", ok: false };
}
function Po(_0x19118f, _0x44be0f) {
  var _0x3c3273;
  let _0x2e5a17 = z(_0x19118f, _0x44be0f),
    _0x1d6767 =
      (_0x3c3273 = _0x19118f[_0x44be0f]) == null
        ? undefined
        : _0x3c3273.element;
  if (
    !_0x2e5a17 ||
    (_0x1d6767 == null ? undefined : _0x1d6767.type) !== s.Shape
  )
    return _0x2e5a17;
  let _0x180df0 = It(_0x1d6767.shapeData);
  return _0x180df0
    ? {
        ..._0x2e5a17,
        height:
          _0x2e5a17.height +
          Math.max(_0x180df0.minLifelineHeight, _0x180df0.lifelineHeight),
      }
    : _0x2e5a17;
}
function Fo(_0x53f28c, _0x22d17f) {
  let _0x62942e = _0x53f28c[_0x22d17f];
  return (
    (_0x62942e == null ? undefined : _0x62942e.element["visible"]) !== false &&
    L(_0x53f28c, _0x22d17f).every((_0x1a766a) => {
      var _0x48f7f3;
      return (
        ((_0x48f7f3 = _0x53f28c[_0x1a766a]) == null
          ? undefined
          : _0x48f7f3.element["visible"]) !== false
      );
    })
  );
}
function Io(_0x499504) {
  return (
    Number.isFinite(_0x499504.left) &&
    Number.isFinite(_0x499504.top) &&
    Number.isFinite(_0x499504.width) &&
    Number.isFinite(_0x499504.height) &&
    _0x499504.width > 0 &&
    _0x499504.height > 0
  );
}
function Lo(_0x215592, _0x1bf014) {
  return {
    left: _0x215592.left - _0x1bf014,
    top: _0x215592.top - _0x1bf014,
    width: _0x215592.width + _0x1bf014 * 2,
    height: _0x215592.height + _0x1bf014 * 2,
  };
}
function Ro(_0x10a072) {
  if (_0x10a072.length === 0) return null;
  let _0x2bb6fc = Math.min(..._0x10a072.map((_0x4e9b82) => _0x4e9b82.left)),
    _0x3ad758 = Math.min(..._0x10a072.map((_0x1f9c24) => _0x1f9c24.top)),
    _0x43b9 = Math.max(
      ..._0x10a072.map((_0x5d5eb7) => _0x5d5eb7.left + _0x5d5eb7.width),
    ),
    _0x4d8842 = Math.max(
      ..._0x10a072.map((_0x33915f) => _0x33915f.top + _0x33915f.height),
    );
  return {
    left: _0x2bb6fc,
    top: _0x3ad758,
    width: _0x43b9 - _0x2bb6fc,
    height: _0x4d8842 - _0x3ad758,
  };
}
function zo(_0x25978f, _0x35be95) {
  let _0x48a5e7 = e.Tools["deepClone"](_0x25978f ?? {});
  return (
    _0x35be95.fill === null
      ? delete _0x48a5e7.fill
      : _0x35be95.fill !== undefined &&
        (_0x48a5e7.fill = e.Tools["deepClone"](_0x35be95.fill)),
    _0x35be95.stroke === null
      ? delete _0x48a5e7.stroke
      : _0x35be95.stroke !== undefined &&
        (_0x48a5e7.stroke = e.Tools["deepClone"](_0x35be95.stroke)),
    _0x35be95.interruptLine !== undefined &&
      (_0x48a5e7.interruptLine = _0x35be95.interruptLine),
    _0x35be95.lineGap !== undefined && (_0x48a5e7.lineGap = _0x35be95.lineGap),
    _0x48a5e7
  );
}
const Bo = {
    id: "board.command.set-connector-label-style",
    type: e.CommandType["COMMAND"],
    handler: (_0x4b9791, _0x187b6e) => {
      if (
        !_0x187b6e ||
        !_0x187b6e.style ||
        typeof _0x187b6e.style != "object" ||
        Array.isArray(_0x187b6e.style) ||
        "lineBreak" in _0x187b6e.style
      )
        return false;
      let _0x175d9a = _0x4b9791.get(N).getElementByParam(_0x187b6e),
        _0x2921f9 = _0x175d9a == null ? undefined : _0x175d9a.element;
      if (!_0x2921f9 || _0x2921f9.type !== s.Connector) return false;
      let _0x408133 =
        _0x187b6e.labelId === undefined
          ? Gi(_0x2921f9.connectorData)[0]
          : Gi(_0x2921f9.connectorData).find(
              (_0x12aecc) => _0x12aecc.id === _0x187b6e.labelId,
            );
      if (!_0x408133) return false;
      let _0x4e7407 = qi(
        _0x2921f9.connectorData,
        _0x408133.id,
        (_0x4618fd) => ({
          ..._0x4618fd,
          style: zo(_0x4618fd.style, _0x187b6e.style),
        }),
      );
      return _0x4e7407
        ? uo(_0x4b9791, {
            unitId: _0x187b6e.unitId,
            subUnitId: _0x187b6e.subUnitId,
            updates: [
              {
                elementId: _0x187b6e.elementId,
                element: { ..._0x2921f9, connectorData: _0x4e7407 },
              },
            ],
          })
        : false;
    },
  },
  Vo = {
    id: "board.command.set-connector-label-text",
    type: e.CommandType["COMMAND"],
    handler: (_0x129c40, _0x2315d7) => {
      if (!_0x2315d7 || _0x2315d7.content === undefined) return false;
      let _0x45b8c4 = _0x129c40.get(N).getElementByParam(_0x2315d7),
        _0x5e7f23 = _0x45b8c4 == null ? undefined : _0x45b8c4.element;
      if (!_0x5e7f23 || _0x5e7f23.type !== s.Connector) return false;
      let _0x383311 = [...Gi(_0x5e7f23.connectorData)],
        _0x2dab16 =
          _0x2315d7.labelId === undefined
            ? 0
            : _0x383311.findIndex(
                (_0x19fa68) => _0x19fa68.id === _0x2315d7.labelId,
              );
      if (_0x2315d7.labelId !== undefined && _0x2dab16 < 0) return false;
      let _0x118a91 = _0x383311[_0x2dab16],
        _0x341976 = {
          ..._0x118a91,
          id:
            (_0x118a91 == null ? undefined : _0x118a91.id) ??
            _0x2315d7.labelId ??
            (0, e.generateRandomId)(6),
          content: e.Tools["deepClone"](_0x2315d7.content),
        };
      return (
        _0x2dab16 < _0x383311.length
          ? (_0x383311[_0x2dab16] = _0x341976)
          : _0x383311.push(_0x341976),
        uo(_0x129c40, {
          unitId: _0x2315d7.unitId,
          subUnitId: _0x2315d7.subUnitId,
          updates: [
            {
              elementId: _0x2315d7.elementId,
              element: {
                ..._0x5e7f23,
                connectorData: Ki(_0x5e7f23.connectorData, _0x383311),
              },
            },
          ],
        })
      );
    },
  },
  Ho = {
    id: "board.mutation.set-name",
    type: e.CommandType["MUTATION"],
    handler: (_0x2673b5, _0x5fa411) => {
      let _0x59f3ad = _0x2673b5
        .get(e.IUniverInstanceService)
        .getUnit(_0x5fa411.unitId, e.UniverInstanceType["UNIVER_BOARD"]);
      return _0x59f3ad ? (_0x59f3ad.setName(_0x5fa411.name), true) : false;
    },
  },
  Uo = {
    id: "board.command.set-name",
    type: e.CommandType["COMMAND"],
    handler: (_0x229b7a, _0x22a977) => {
      if (!_0x22a977) return false;
      let _0xc4261d = _0x229b7a
        .get(e.IUniverInstanceService)
        .getUnit(_0x22a977.unitId, e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0xc4261d) return false;
      let _0x430411 = _0x229b7a.get(e.ICommandService),
        _0x513dd8 = { unitId: _0x22a977.unitId, name: _0x22a977.name },
        _0x40e32e = {
          unitId: _0x22a977.unitId,
          name: _0xc4261d.getSnapshot().name,
        };
      return _0x430411.syncExecuteCommand(Ho.id, _0x513dd8)
        ? (_0x229b7a
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x22a977.unitId,
              redoMutations: [{ id: Ho.id, params: _0x513dd8 }],
              undoMutations: [{ id: Ho.id, params: _0x40e32e }],
            }),
          true)
        : false;
    },
  },
  Wo = {
    id: "board.mutation.set-page-background",
    type: e.CommandType["MUTATION"],
    handler: (_0x981b41, _0x3ab09e) => {
      let _0x26f8f1 = _0x981b41
        .get(e.IUniverInstanceService)
        .getUnit(_0x3ab09e.unitId, e.UniverInstanceType["UNIVER_BOARD"]);
      return _0x26f8f1
        ? _0x26f8f1.setPageBackground(_0x3ab09e.subUnitId, _0x3ab09e.background)
        : false;
    },
  };
function Go(_0x22fa5e) {
  return _0x22fa5e ? e.Tools["deepClone"](_0x22fa5e) : undefined;
}
const Ko = {
  id: "board.command.set-page-background",
  type: e.CommandType["COMMAND"],
  handler: (_0x831845, _0x5012c2) => {
    if (
      !_0x5012c2 ||
      (_0x5012c2.background &&
        _0x5012c2.background["source"].trim().length === 0)
    )
      return false;
    let _0x1624ac = _0x831845
        .get(e.IUniverInstanceService)
        .getUnit(_0x5012c2.unitId, e.UniverInstanceType["UNIVER_BOARD"]),
      _0x555b99 =
        _0x1624ac == null ? undefined : _0x1624ac.getPage(_0x5012c2.subUnitId);
    if (!_0x1624ac || !_0x555b99) return false;
    let _0x5e75bd = {
        unitId: _0x5012c2.unitId,
        subUnitId: _0x5012c2.subUnitId,
        background: Go(_0x5012c2.background),
      },
      _0x5f44d3 = {
        unitId: _0x5012c2.unitId,
        subUnitId: _0x5012c2.subUnitId,
        background: Go(_0x555b99.background),
      };
    return _0x831845.get(e.ICommandService).syncExecuteCommand(Wo.id, _0x5e75bd)
      ? (_0x831845
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x5012c2.unitId,
            redoMutations: [{ id: Wo.id, params: _0x5e75bd }],
            undoMutations: [{ id: Wo.id, params: _0x5f44d3 }],
          }),
        true)
      : false;
  },
};
var qo = class {
    constructor(_0x381fe1) {
      ((this.unitId = _0x381fe1),
        M(this, "type", i.UnitObject["Board"]),
        M(this, "subType", i.UnitAction["Comment"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x381fe1));
    }
  },
  Jo = class {
    constructor(_0x4d94b8) {
      ((this.unitId = _0x4d94b8),
        M(this, "type", i.UnitObject["Board"]),
        M(this, "subType", i.UnitAction["Copy"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x4d94b8));
    }
  },
  Yo = class {
    constructor(_0xb05d10) {
      ((this.unitId = _0xb05d10),
        M(this, "type", i.UnitObject["Board"]),
        M(this, "subType", i.UnitAction["Edit"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0xb05d10));
    }
  },
  Xo = class {
    constructor(_0x2fccdd) {
      ((this.unitId = _0x2fccdd),
        M(this, "type", i.UnitObject["Board"]),
        M(this, "subType", i.UnitAction["Export"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0x2fccdd));
    }
  },
  Zo = class {
    constructor(_0xaae4d4) {
      ((this.unitId = _0xaae4d4),
        M(this, "type", i.UnitObject["Board"]),
        M(this, "subType", i.UnitAction["Print"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id = this.type + "." + this.subType + "_" + _0xaae4d4));
    }
  },
  Qo = class {
    constructor(_0x2b3483, _0x3df24e) {
      ((this.unitId = _0x2b3483),
        (this.objectId = _0x3df24e),
        M(this, "type", i.UnitObject["BoardElement"]),
        M(this, "subType", i.UnitAction["Edit"]),
        M(this, "status", e.PermissionStatus["INIT"]),
        M(this, "id", undefined),
        M(this, "value", true),
        (this.id =
          this.type + "." + this.subType + "_" + _0x2b3483 + "_" + _0x3df24e));
    }
  };
const $o = [
    i.UnitAction["Edit"],
    i.UnitAction["Copy"],
    i.UnitAction["Print"],
    i.UnitAction["Export"],
    i.UnitAction["Comment"],
  ],
  es = new Set([i.UnitObject["Board"], i.UnitObject["BoardElement"]]),
  ts = "element/";
function ns(_0x368acf, _0x1750b9) {
  return (
    "" +
    ts +
    encodeURIComponent(_0x368acf) +
    "/" +
    encodeURIComponent(_0x1750b9)
  );
}
function rs(_0x226d49, _0x29e235, _0xc2fb87) {
  if (_0x29e235 === _0x226d49)
    switch (_0xc2fb87) {
      case i.UnitAction["Edit"]:
        return new Yo(_0x226d49);
      case i.UnitAction["Copy"]:
        return new Jo(_0x226d49);
      case i.UnitAction["Print"]:
        return new Zo(_0x226d49);
      case i.UnitAction["Export"]:
        return new Xo(_0x226d49);
      case i.UnitAction["Comment"]:
        return new qo(_0x226d49);
      default:
        throw Error(
          "Unsupported\x20Board\x20permission\x20action:\x20" + _0xc2fb87,
        );
    }
  if (_0xc2fb87 !== i.UnitAction["Edit"])
    throw Error(
      "Board\x20object\x20permissions\x20only\x20support\x20Edit:\x20" +
        _0x29e235,
    );
  if (_0x29e235.startsWith(ts)) return new Qo(_0x226d49, _0x29e235);
  throw Error("Unsupported Board permission object: " + _0x29e235);
}
function is(_0x2d96ca, _0x3e14bb, _0x2b6123, _0x58410e) {
  var _0x4f8cb9;
  return (
    ((_0x4f8cb9 = _0x2d96ca.getPermissionPoint(
      rs(_0x3e14bb, _0x2b6123, _0x58410e).id,
    )) == null
      ? undefined
      : _0x4f8cb9.value) ?? true
  );
}
function as(_0x53f2d5, _0x187f3c, _0x22d6d5, _0x8e7829, _0x5452b3) {
  let _0x5a012d = rs(_0x187f3c, _0x22d6d5, _0x8e7829);
  (_0x53f2d5.getPermissionPoint(_0x5a012d.id) ||
    _0x53f2d5.addPermissionPoint(_0x5a012d),
    _0x53f2d5.updatePermissionPoint(_0x5a012d.id, _0x5452b3));
}
function os(_0x286843, _0x359857) {
  _0x286843.getAllPermissionPoint().forEach((_0x26b524, _0x2d57d) => {
    _0x26b524
      .subscribe((_0x5aeecf) => {
        es.has(_0x5aeecf.type) &&
          "unitId" in _0x5aeecf &&
          _0x5aeecf.unitId === _0x359857 &&
          _0x286843.deletePermissionPoint(_0x2d57d);
      })
      .unsubscribe();
  });
}
function ss(_0x48119f, _0x3b2215, _0x29f338) {
  return (
    is(_0x48119f, _0x3b2215, _0x3b2215, i.UnitAction["Edit"]) &&
    Array.from(_0x29f338).every((_0xf2bfe0) =>
      is(_0x48119f, _0x3b2215, _0xf2bfe0, i.UnitAction["Edit"]),
    )
  );
}
const cs = {
    type: e.CommandType["COMMAND"],
    id: "board.command.set-permission",
    handler(_0x4e9527, _0x2f187d) {
      return !_0x2f187d ||
        !$o.includes(_0x2f187d.action) ||
        (_0x2f187d.objectId !== _0x2f187d.unitId &&
          _0x2f187d.action !== i.UnitAction["Edit"])
        ? false
        : (as(
            _0x4e9527.get(e.IPermissionService),
            _0x2f187d.unitId,
            _0x2f187d.objectId,
            _0x2f187d.action,
            _0x2f187d.value,
          ),
          true);
    },
  },
  ls = {
    id: "board.command.update-element",
    type: e.CommandType["COMMAND"],
    handler: (_0x4a1aed, _0x3d9463) => {
      if (!_0x3d9463) return false;
      let {
        historyId: _0x1ae0cd,
        unitId: _0x204d20,
        subUnitId: _0x19cfd8,
        ..._0xea554a
      } = _0x3d9463;
      return uo(_0x4a1aed, {
        historyId: _0x1ae0cd,
        unitId: _0x204d20,
        subUnitId: _0x19cfd8,
        updates: [_0xea554a],
      });
    },
  },
  us = {
    id: "board.mutation.remove-element-only",
    type: e.CommandType["MUTATION"],
    handler: (_0x43fb62, _0x33d531) => {
      var _0x1f4a47;
      let {
        unitId: _0x5c9569,
        subUnitId: _0x396fea,
        elementId: _0x56fd28,
        allowLockedParent: _0x3670b4,
      } = _0x33d531;
      if (!_0x56fd28) return false;
      let _0x3caf5e = _0x43fb62
        .get(e.IUniverInstanceService)
        .getUnit(_0x5c9569, e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0x3caf5e) return false;
      let _0x12425b = _0x43fb62.get(N),
        _0x18941b = _0x12425b.getElementByParam({
          unitId: _0x5c9569,
          subUnitId: _0x396fea,
          elementId: _0x56fd28,
        });
      if (!_0x18941b || _0x18941b.element["locked"] === true) return false;
      let _0xe831df = _0x12425b.getElementData(_0x5c9569, _0x396fea),
        _0x4f75a = _0x18941b.element["parentId"]
          ? (_0x1f4a47 = _0xe831df[_0x18941b.element["parentId"]]) == null
            ? undefined
            : _0x1f4a47.element
          : undefined;
      if (
        (!_0x3670b4 && Da(_0xe831df, _0x18941b.element)) ||
        (!_0x3670b4 &&
          (_0x4f75a == null ? undefined : _0x4f75a.type) === s.Container &&
          _0x4f75a.containerData["behavior"].membershipLocked) ||
        (_0x18941b.element["type"] === s.Container &&
          Object.values(_0xe831df).some(
            (_0x195e4) => _0x195e4.element["parentId"] === _0x56fd28,
          )) ||
        Object.values(_0xe831df).some(
          (_0x5e2ea2) =>
            X(_0x5e2ea2) && Zi(_0x5e2ea2.element).includes(_0x56fd28),
        )
      )
        return false;
      let _0x39dc59 = Ei(
        _0x12425b.getBatchRemoveElementOp([
          { unitId: _0x5c9569, subUnitId: _0x396fea, elementId: _0x56fd28 },
        ]),
      );
      return Ka(_0x3caf5e, _0x18941b)
        ? (_0x12425b.applyElementJson1(_0x5c9569, _0x396fea, _0x39dc59.redo),
          _0x12425b.removeElementNotification([
            { unitId: _0x5c9569, subUnitId: _0x396fea, elementId: _0x56fd28 },
          ]),
          true)
        : false;
    },
  },
  ds = {
    id: "board.mutation.set-element-order",
    type: e.CommandType["MUTATION"],
    handler: (_0x37c004, _0x4fb23f) => {
      if (!_0x4fb23f || _0x4fb23f.elementIds["length"] === 0) return false;
      let {
          unitId: _0x1cb8fc,
          subUnitId: _0x45ef45,
          elementIds: _0x462827,
        } = _0x4fb23f,
        _0x492470 = _0x37c004
          .get(e.IUniverInstanceService)
          .getUnit(_0x1cb8fc, e.UniverInstanceType["UNIVER_BOARD"]);
      if (!_0x492470) return false;
      let _0x504408 = _0x37c004.get(N);
      return Ja(_0x492470, _0x45ef45, _0x462827)
        ? (_0x504408.setElementOrder(_0x1cb8fc, _0x45ef45, _0x462827),
          _0x504408.orderUpdateNotification({
            unitId: _0x1cb8fc,
            subUnitId: _0x45ef45,
            elementIds: _0x462827,
          }),
          true)
        : false;
    },
  };
function fs() {
  return {
    retained: [],
    captured: [],
    expelled: [],
    autosized: [],
    blocked: [],
  };
}
function ps(_0x461f49) {
  let _0x2b09fa = fs(),
    _0x4bce46 = new Set(_0x461f49.preview["forcedCaptureChildIds"]);
  return (
    _0x461f49.preview["retainedChildIds"].forEach((_0x5034b3) => {
      _0x2b09fa.retained["push"]({
        elementId: _0x5034b3,
        containerId: _0x461f49.containerId,
      });
    }),
    _0x461f49.preview["captureChildIds"].forEach((_0x14451c) => {
      var _0x1db437;
      _0x2b09fa.captured["push"]({
        elementId: _0x14451c,
        fromParentId:
          (_0x1db437 = _0x461f49.elementData[_0x14451c]) == null
            ? undefined
            : _0x1db437.element["parentId"],
        toParentId: _0x461f49.containerId,
        forced: _0x4bce46.has(_0x14451c),
      });
    }),
    _0x461f49.preview["forcedCaptureChildIds"].forEach((_0x11fa99) => {
      var _0x33121a;
      _0x461f49.preview["captureChildIds"].includes(_0x11fa99) ||
        _0x2b09fa.captured["push"]({
          elementId: _0x11fa99,
          fromParentId:
            (_0x33121a = _0x461f49.elementData[_0x11fa99]) == null
              ? undefined
              : _0x33121a.element["parentId"],
          toParentId: _0x461f49.containerId,
          forced: true,
        });
    }),
    _0x461f49.preview["expelChildIds"].forEach((_0x4bb2b0) => {
      var _0x3f61a1;
      _0x2b09fa.expelled["push"]({
        elementId: _0x4bb2b0,
        fromParentId:
          ((_0x3f61a1 = _0x461f49.elementData[_0x4bb2b0]) == null
            ? undefined
            : _0x3f61a1.element["parentId"]) ?? _0x461f49.containerId,
        toParentId: undefined,
      });
    }),
    _0x461f49.preview["blockedChildIds"].forEach((_0x5a8891) => {
      _0x4bce46.has(_0x5a8891) ||
        _0x2b09fa.blocked["push"]({
          elementId: _0x5a8891,
          targetContainerId: _0x461f49.containerId,
          reason: "previewBlocked",
        });
    }),
    _0x461f49.preview["expandedOuterBounds"] &&
      _0x2b09fa.autosized["push"]({
        containerId: _0x461f49.containerId,
        nextBounds: _0x461f49.preview["expandedOuterBounds"],
        reason: "autoResize",
      }),
    _0x2b09fa
  );
}
function ms(_0x123607, _0x29009c) {
  return Object.values(_0x123607)
    .filter((_0x424297) => _0x424297.element["parentId"] === _0x29009c)
    .map((_0x185689) => _0x185689.elementId);
}
function hs(_0x1b9361, _0x212768, _0x3c5bbf) {
  let _0x177dbb = _0x212768.element["parentId"],
    _0x568eea = new Set([_0x212768.elementId]);
  for (; _0x177dbb;) {
    if (_0x177dbb === _0x3c5bbf || _0x568eea.has(_0x177dbb)) return false;
    let _0x4eab20 = _0x1b9361[_0x177dbb];
    if (!_0x4eab20) return false;
    if (_0x4eab20.hidden === true || _0x4eab20.element["visible"] === false)
      return true;
    (_0x568eea.add(_0x177dbb), (_0x177dbb = _0x4eab20.element["parentId"]));
  }
  return false;
}
function gs(_0x2319af, _0x45dfff, _0x1b1ce3, _0x3becf0 = false) {
  return (
    !_0x2319af ||
    _0x2319af.hidden === true ||
    _0x2319af.element["visible"] === false ||
    hs(_0x45dfff, _0x2319af, _0x1b1ce3) ||
    (!_0x3becf0 && _0x2319af.element["locked"] === true) ||
    _0x2319af.element["selectable"] === false ||
    _0x2319af.element["type"] === s.Connector
  );
}
function _s(_0x58cbb7, _0x3eaeec, _0x5aa49e, _0x3b5282, _0x7840e3, _0x3ee06e) {
  if (
    !_0x58cbb7.containerData["capturePolicy"].enabled ||
    !_0x58cbb7.containerData["behavior"].autoCapture ||
    !_0x58cbb7.containerData["behavior"].acceptsChildren
  )
    return true;
  let _0x14efa9 = _0x3eaeec == null ? undefined : _0x3eaeec.element["parentId"],
    _0x420fa2 = Vt(_0x14efa9 ? _0x5aa49e[_0x14efa9] : undefined);
  return _0x14efa9 &&
    _0x420fa2 &&
    _0x14efa9 !== _0x7840e3 &&
    !_0x3ee06e.has(_0x3b5282) &&
    !(L(_0x5aa49e, _0x7840e3).includes(_0x14efa9)
      ? _0x58cbb7.containerData["capturePolicy"]
          .allowCaptureFromAncestorContainer === true
      : _0x58cbb7.containerData["capturePolicy"]
          .allowCaptureFromSiblingContainer)
    ? true
    : (_0x3eaeec == null ? undefined : _0x3eaeec.element["type"]) ===
        s.Container
      ? !_0x58cbb7.containerData["behavior"].acceptsContainer ||
        !_0x58cbb7.containerData["behavior"].allowNested ||
        !_0x58cbb7.containerData["capturePolicy"].allowCaptureContainer ||
        Wt(_0x5aa49e, _0x3b5282, _0x7840e3)
      : false;
}
function vs(_0x3cbbc9, _0x3ddd92) {
  return _0x3cbbc9 || _0x3ddd92 === true;
}
function ys(_0x3d1c3b, _0x3ae6a2, _0x512c0c, _0x3bcdd3) {
  return (
    !!_0x3d1c3b &&
    (_0x512c0c !== true || _0x3bcdd3) &&
    (_0x3d1c3b.width > _0x3ae6a2.width || _0x3d1c3b.height > _0x3ae6a2.height)
  );
}
function bs(_0x498038) {
  return (
    _0x498038.type === s.Container &&
    _0x498038.containerData["kind"] === "swimlane" &&
    !!_0x498038.containerData["swimlane"]
  );
}
function xs(_0x3b647e, _0x29ff74) {
  return bs(_0x3b647e)
    ? (br(
        Lr(_0x3b647e, _0x29ff74).map((_0x483178) => _0x483178.contentBounds),
      ) ?? {
        left: _0x29ff74.left,
        top:
          _0x29ff74.top +
          (_0x3b647e.containerData["titleVisible"] === false
            ? 0
            : (_0x3b647e.containerData["headerSize"] ?? 0)),
        width: _0x29ff74.width,
        height: Math.max(
          0,
          _0x29ff74.height -
            (_0x3b647e.containerData["titleVisible"] === false
              ? 0
              : (_0x3b647e.containerData["headerSize"] ?? 0)),
        ),
      })
    : xr(_0x3b647e, _0x29ff74).contentBounds;
}
function Ss(_0x1423b9, _0x1a0ed0, _0x486817, _0x19722b) {
  return bs(_0x1423b9)
    ? !!Wr(_0x1423b9, _0x1a0ed0, _0x19722b)
    : _r(_0x486817, _0x19722b);
}
function Cs(_0x302c23, _0x1056ff, _0x5150ef, _0x23119e) {
  if (!bs(_0x302c23)) return _r(_0x5150ef, _0x23119e);
  let _0x79384c = _0x302c23.containerData["capturePolicy"].expelHysteresis ?? 0;
  return Lr(_0x302c23, _0x1056ff).some((_0x537730) =>
    _r(gr(_0x537730.contentBounds, _0x79384c), _0x23119e),
  );
}
function ws(_0x22a26f, _0x548405, _0x5aae30, _0xdb097d) {
  return bs(_0x22a26f)
    ? Lr(_0x22a26f, _0x548405).some((_0x2e767c) =>
        yr(_0x2e767c.contentBounds, _0xdb097d),
      )
    : yr(_0x5aae30, _0xdb097d);
}
function Ts(_0x96b4f6, _0x4f5b22, _0x2fbdd6) {
  var _0x69d581, _0x5ad903;
  if (!bs(_0x96b4f6)) return Sr(_0x96b4f6, _0x4f5b22, _0x2fbdd6);
  let _0xfaf3d0 =
      _0x96b4f6.containerData["titleVisible"] === false
        ? 0
        : (_0x96b4f6.containerData["headerSize"] ?? 0),
    _0x3b990e = Math.max(
      0,
      ((_0x69d581 = _0x96b4f6.containerData["swimlane"]) == null
        ? undefined
        : _0x69d581.headerSize) ?? 0,
    ),
    _0x18d2eb =
      ((_0x5ad903 = _0x96b4f6.containerData["swimlane"]) == null
        ? undefined
        : _0x5ad903.orientation) === "horizontal",
    _0x558112 = Math.min(
      _0x4f5b22.left,
      _0x2fbdd6.left - (_0x18d2eb ? _0x3b990e : 0),
    ),
    _0x15f2ed = Math.min(
      _0x4f5b22.top,
      _0x2fbdd6.top - _0xfaf3d0 - (_0x18d2eb ? 0 : _0x3b990e),
    ),
    _0x61e1a5 = Math.max(U(_0x4f5b22), U(_0x2fbdd6)),
    _0xb5c191 = Math.max(W(_0x4f5b22), W(_0x2fbdd6));
  return {
    left: _0x558112,
    top: _0x15f2ed,
    width: _0x61e1a5 - _0x558112,
    height: _0xb5c191 - _0x15f2ed,
  };
}
function Es(_0x28cbb5) {
  let _0x59d50d = _0x28cbb5.elementData[_0x28cbb5.containerId];
  if (!_0x59d50d || _0x59d50d.element["type"] !== s.Container)
    return {
      activeContainerId: _0x28cbb5.containerId,
      previewOuterBounds: _0x28cbb5.previewOuterBounds ?? {
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
  let _0x4035c1 = _0x59d50d.element,
    _0xb7c276 =
      _0x59d50d.hidden !== true &&
      _0x4035c1.visible !== false &&
      !hs(_0x28cbb5.elementData, _0x59d50d) &&
      _0x4035c1.locked !== true &&
      _0x4035c1.selectable !== false &&
      !_0x4035c1.containerData["behavior"].membershipLocked,
    _0x237425 = _0x28cbb5.previewOuterBounds ??
      z(_0x28cbb5.elementData, _0x28cbb5.containerId) ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
    _0x3efa15 = xr(_0x4035c1, _0x237425),
    _0x41c928 = xs(_0x4035c1, _0x237425),
    _0x414d18 = bs(_0x4035c1)
      ? gr(
          _0x41c928,
          _0x4035c1.containerData["capturePolicy"].expelHysteresis ?? 0,
        )
      : _0x3efa15.expandedContentBounds,
    _0x3ea180 = [],
    _0x10e9bc = [],
    _0x174c9f = [],
    _0x57082f = [],
    _0x4ae351 = [],
    _0x380a3b = [_0x41c928],
    _0x10e74f = ms(_0x28cbb5.elementData, _0x28cbb5.containerId),
    _0x578481 = _0x4035c1.containerData["behavior"].membershipLocked,
    _0xc1b31b = new Set(_0x28cbb5.allowCaptureFromParentedCandidateIds ?? []),
    _0x229b79 = new Set(_0x28cbb5.forceCaptureCandidateIds ?? []),
    _0x31b305 = new Set(_0x28cbb5.autosizeCaptureCandidateIds ?? []),
    _0x1c6459 = (_0x3316e9) => {
      (_0x174c9f.push(_0x3316e9),
        _0x229b79.has(_0x3316e9) && _0x4ae351.push(_0x3316e9));
    };
  (_0x10e74f.forEach((_0x5676e8) => {
    let _0x5bdeac = _0x28cbb5.elementData[_0x5676e8];
    if (gs(_0x5bdeac, _0x28cbb5.elementData, _0x28cbb5.containerId)) {
      _0x3ea180.push(_0x5676e8);
      return;
    }
    let _0x149f7d = z(_0x28cbb5.elementData, _0x5676e8);
    if (_0x149f7d) {
      if (vs(_0x578481, _0x28cbb5.preserveDirectChildren)) {
        (_0x3ea180.push(_0x5676e8), _0x380a3b.push(_0x149f7d));
        return;
      }
      (
        bs(_0x4035c1) && !_0x5bdeac.element["laneId"]
          ? _r(_0x414d18, _0x149f7d)
          : Cs(_0x4035c1, _0x237425, _0x414d18, _0x149f7d)
      )
        ? _0x3ea180.push(_0x5676e8)
        : _0x10e9bc.push(_0x5676e8);
    }
  }),
    (_0x28cbb5.candidateElementIds ?? []).forEach((_0x435452) => {
      if (_0x435452 === _0x28cbb5.containerId || _0x10e74f.includes(_0x435452))
        return;
      if (!_0xb7c276) {
        _0x57082f.push(_0x435452);
        return;
      }
      let _0x1d2e20 = _0x28cbb5.elementData[_0x435452];
      if (
        gs(
          _0x1d2e20,
          _0x28cbb5.elementData,
          undefined,
          _0x4035c1.containerData["capturePolicy"].allowCaptureLockedObjects ===
            true,
        )
      ) {
        _0x57082f.push(_0x435452);
        return;
      }
      if (
        _s(
          _0x4035c1,
          _0x1d2e20,
          _0x28cbb5.elementData,
          _0x435452,
          _0x28cbb5.containerId,
          _0xc1b31b,
        )
      ) {
        _0x57082f.push(_0x435452);
        return;
      }
      let _0x4906d3 = z(_0x28cbb5.elementData, _0x435452);
      if (!_0x4906d3) {
        _0x57082f.push(_0x435452);
        return;
      }
      if (Ss(_0x4035c1, _0x237425, _0x41c928, _0x4906d3)) {
        _0x1c6459(_0x435452);
        return;
      }
      let _0x29c1c8 =
        _0x4035c1.containerData["kind"] !== "swimlane" ||
        !_0x4035c1.containerData["swimlane"];
      if (
        _0x31b305.has(_0x435452) &&
        _0x29c1c8 &&
        _0x4035c1.containerData["behavior"].autoResize &&
        _r(_0x3efa15.outerBounds, _0x4906d3)
      ) {
        let _0x342e05 = br([_0x41c928, _0x4906d3]);
        if (_0x342e05) {
          (_0x1c6459(_0x435452), _0x380a3b.push(_0x342e05));
          return;
        }
      }
      let _0x3ecc60 =
        _0x31b305.has(_0x435452) ||
        _0x4906d3.width > _0x41c928.width ||
        _0x4906d3.height > _0x41c928.height;
      if (
        _0x4035c1.containerData["behavior"].autoResize &&
        ws(_0x4035c1, _0x237425, _0x41c928, _0x4906d3) &&
        _0x3ecc60
      ) {
        let _0x58a357 = br([_0x41c928, _0x4906d3]);
        if (_0x58a357) {
          (_0x1c6459(_0x435452), _0x380a3b.push(_0x58a357));
          return;
        }
      }
      _0x57082f.push(_0x435452);
    }));
  let _0xfda3e4 = br(_0x380a3b),
    _0x4f0ce4 = _0xfda3e4 ? Ts(_0x4035c1, _0x237425, _0xfda3e4) : undefined,
    _0x44c341 = ys(
      _0x4f0ce4,
      _0x237425,
      _0x28cbb5.preserveDirectChildren,
      _0x4035c1.containerData["behavior"].autoResize,
    );
  return {
    activeContainerId: _0x28cbb5.containerId,
    previewOuterBounds: _0x237425,
    previewContentBounds: _0x41c928,
    retainedChildIds: _0x3ea180,
    expelChildIds: _0x10e9bc,
    captureChildIds: _0x174c9f,
    forcedCaptureChildIds: _0x4ae351,
    blockedChildIds: _0x57082f,
    ...(_0x44c341 ? { expandedOuterBounds: _0x4f0ce4 } : {}),
  };
}
function Ds(_0x2dc0d9) {
  if (_0x2dc0d9.activeContainerIds["length"] === 0) return null;
  let _0x32ab77 = new Set(_0x2dc0d9.activeContainerIds),
    _0x87bbdf = new Set(_0x2dc0d9.lockedCurrentParentIds ?? []);
  if (
    _0x2dc0d9.activeContainerIds["some"]((_0x54d884) => {
      var _0x129039, _0x56669c;
      let _0x284ef7 =
          (_0x129039 = _0x2dc0d9.elementData[_0x54d884]) == null
            ? undefined
            : _0x129039.element["parentId"],
        _0x4d566c = _0x284ef7
          ? (_0x56669c = _0x2dc0d9.elementData[_0x284ef7]) == null
            ? undefined
            : _0x56669c.element
          : undefined;
      return (
        !!_0x284ef7 &&
        (_0x87bbdf.has(_0x284ef7) ||
          ((_0x4d566c == null ? undefined : _0x4d566c.type) === s.Container &&
            _0x4d566c.containerData["behavior"].membershipLocked))
      );
    })
  )
    return null;
  let _0x22d4a0 = _0x2dc0d9.elementOrder ?? Object.keys(_0x2dc0d9.elementData),
    _0x1c242d = new Map(
      _0x22d4a0.map((_0x451fa4, _0x537c8d) => [_0x451fa4, _0x537c8d]),
    ),
    _0x4142ab = _0x2dc0d9.candidateContainerIds
      ? new Set(_0x2dc0d9.candidateContainerIds)
      : null,
    _0x5626c6 = Object.values(_0x2dc0d9.elementData)
      .filter(
        (_0x134f20) =>
          _0x134f20.element["type"] === s.Container &&
          !_0x32ab77.has(_0x134f20.elementId),
      )
      .filter((_0x2675c6) => !gs(_0x2675c6, _0x2dc0d9.elementData))
      .filter((_0x5e6376) => !_0x4142ab || _0x4142ab.has(_0x5e6376.elementId))
      .map((_0x23a91d) => ({
        item: _0x23a91d,
        preview: Es({
          containerId: _0x23a91d.elementId,
          elementData: _0x2dc0d9.elementData,
          candidateElementIds: _0x2dc0d9.activeContainerIds,
          allowCaptureFromParentedCandidateIds: _0x2dc0d9.activeContainerIds,
        }),
      }))
      .filter(({ preview: _0x239ea5 }) =>
        _0x239ea5.captureChildIds["some"]((_0x5bd09d) =>
          _0x32ab77.has(_0x5bd09d),
        ),
      )
      .sort(
        (_0x36c8c2, _0x2a6114) =>
          L(_0x2dc0d9.elementData, _0x2a6114.item["elementId"]).length -
            L(_0x2dc0d9.elementData, _0x36c8c2.item["elementId"]).length ||
          (_0x1c242d.get(_0x2a6114.item["elementId"]) ?? -1) -
            (_0x1c242d.get(_0x36c8c2.item["elementId"]) ?? -1),
      )[0];
  return _0x5626c6
    ? {
        containerId: _0x5626c6.item["elementId"],
        expandedOuterBounds: _0x5626c6.preview["expandedOuterBounds"],
      }
    : null;
}
function Os(_0x11ee3f, _0x23e73c) {
  return {
    ..._0x11ee3f,
    transform: {
      ..._0x11ee3f.transform,
      left: _0x23e73c.left,
      top: _0x23e73c.top,
      width: _0x23e73c.width,
      height: _0x23e73c.height,
      rotation: _0x23e73c.angle,
      flipX: _0x23e73c.flipX,
      flipY: _0x23e73c.flipY,
    },
  };
}
function ks(_0xdaf51d, _0xa9c1f4) {
  return _0xa9c1f4.some((_0x12bb68) => {
    var _0xbb3bd6;
    let _0xe9cd4e = _0x12bb68.params;
    return (
      !!_0xe9cd4e.elementId &&
      ((_0xbb3bd6 = _0xdaf51d[_0xe9cd4e.elementId]) == null
        ? undefined
        : _0xbb3bd6.element["locked"]) === true
    );
  });
}
function As(_0x1c1451, _0x8d9168, _0xcda247) {
  var _0x51c578, _0x440e26;
  if (!_0x8d9168) return;
  let _0x470bfc =
      (_0x51c578 = _0x1c1451[_0x8d9168]) == null
        ? undefined
        : _0x51c578.element,
    _0xe269ee = z(_0x1c1451, _0x8d9168);
  if (!(
    !_0x470bfc ||
    _0x470bfc.type !== s.Container ||
    _0x470bfc.containerData["kind"] !== "swimlane" ||
    !_0xe269ee
  ))
    return (_0x440e26 = Wr(_0x470bfc, _0xe269ee, _0xcda247)) == null
      ? undefined
      : _0x440e26.lane["id"];
}
function js(_0x3b4e4a, _0x42a565) {
  let _0x1b25c2 =
    _0x3b4e4a.containerData["titleVisible"] === false
      ? 0
      : (_0x3b4e4a.containerData["headerSize"] ?? $r.headerSize);
  if (
    _0x3b4e4a.containerData["kind"] === "swimlane" &&
    _0x3b4e4a.containerData["swimlane"]
  ) {
    let _0xb8e358 = Math.max(
        0,
        _0x3b4e4a.containerData["swimlane"].headerSize ?? 0,
      ),
      _0x4c319f =
        _0x3b4e4a.containerData["swimlane"].orientation === "horizontal";
    return {
      left: _0x42a565.left - (_0x4c319f ? _0xb8e358 : 0),
      top: _0x42a565.top - _0x1b25c2 - (_0x4c319f ? 0 : _0xb8e358),
      width: _0x42a565.width + (_0x4c319f ? _0xb8e358 : 0),
      height: _0x42a565.height + _0x1b25c2 + (_0x4c319f ? 0 : _0xb8e358),
      angle: V(_0x3b4e4a.transform).angle,
      flipX: _0x3b4e4a.transform["flipX"],
      flipY: _0x3b4e4a.transform["flipY"],
    };
  }
  let _0x562241 = _0x3b4e4a.containerData["padding"] ?? $r.padding;
  return {
    left: _0x42a565.left - _0x562241.left,
    top: _0x42a565.top - _0x1b25c2 - _0x562241.top,
    width: _0x42a565.width + _0x562241.left + _0x562241.right,
    height: _0x42a565.height + _0x1b25c2 + _0x562241.top + _0x562241.bottom,
    angle: V(_0x3b4e4a.transform).angle,
    flipX: _0x3b4e4a.transform["flipX"],
    flipY: _0x3b4e4a.transform["flipY"],
  };
}
const Ms = {
  id: "board.operation.fit-container-to-content",
  type: e.CommandType["OPERATION"],
  handler: (_0xf041b6, _0x476c42) => {
    if (!(_0x476c42 != null && _0x476c42.containerId)) return false;
    let {
        unitId: _0x30bc5b,
        subUnitId: _0x4cfc5c,
        containerId: _0x255190,
      } = _0x476c42,
      _0x3bf888 = _0xf041b6.get(N),
      _0x3373a3 = _0x3bf888.getElementData(_0x30bc5b, _0x4cfc5c),
      _0x3d63d3 = Ns({
        unitId: _0x30bc5b,
        subUnitId: _0x4cfc5c,
        containerId: _0x255190,
        elementData: _0x3373a3,
        elementOrder: _0x3bf888.getElementOrder(_0x30bc5b, _0x4cfc5c),
      });
    if (
      !_0x3d63d3 ||
      ks(_0x3373a3, _0x3d63d3.redoMutations) ||
      !Aa(_0x3373a3, _0x3d63d3.redoMutations)
    )
      return false;
    let _0x4a7f1f = _0xf041b6.get(e.ICommandService);
    return (0, e.sequenceExecute)(_0x3d63d3.redoMutations, _0x4a7f1f).result
      ? (_0xf041b6
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x30bc5b,
            redoMutations: _0x3d63d3.redoMutations,
            undoMutations: _0x3d63d3.undoMutations,
          }),
        true)
      : false;
  },
};
function Ns(_0x589d0b) {
  let {
      unitId: _0x4d734e,
      subUnitId: _0x32fd4a,
      containerId: _0x1df17c,
      elementData: _0x249d51,
      elementOrder: _0x4afa75,
    } = _0x589d0b,
    _0x489c04 = _0x249d51[_0x1df17c];
  if (
    !_0x489c04 ||
    _0x489c04.element["type"] !== s.Container ||
    _0x489c04.element["locked"]
  )
    return null;
  let _0x47d246 = q(_0x489c04.element),
    _0x11eaa6 = _0x4afa75.filter((_0x49f8c2) => {
      var _0x54c351;
      return (
        ((_0x54c351 = _0x249d51[_0x49f8c2]) == null
          ? undefined
          : _0x54c351.element["parentId"]) === _0x1df17c
      );
    }),
    _0x5c300d = _0x11eaa6.filter((_0x4e5363) => {
      var _0x1e1ac4;
      return (
        ((_0x1e1ac4 = _0x249d51[_0x4e5363]) == null
          ? undefined
          : _0x1e1ac4.element["type"]) !== s.Connector
      );
    });
  if (_0x5c300d.length === 0) return null;
  let _0x13c7c9 = _0x5c300d
    .map((_0x585d7d) => {
      var _0x3ed183;
      return (_0x3ed183 = R(_0x249d51, _0x585d7d)) == null
        ? undefined
        : _0x3ed183.worldTransform;
    })
    .filter((_0x10f246) => !!_0x10f246);
  if (_0x13c7c9.length !== _0x5c300d.length) return null;
  let _0x1b6c84 = _0x13c7c9.map((_0x45b297) => ({
      left: _0x45b297.left ?? 0,
      top: _0x45b297.top ?? 0,
      width: _0x45b297.width ?? 0,
      height: _0x45b297.height ?? 0,
    })),
    _0x2ceea4 = Math.min(..._0x1b6c84.map((_0x3f8a23) => _0x3f8a23.left)),
    _0x553029 = Math.min(..._0x1b6c84.map((_0x3c4f6e) => _0x3c4f6e.top)),
    _0x46d98f = Math.max(..._0x1b6c84.map(U)),
    _0x177256 = Math.max(..._0x1b6c84.map(W)),
    _0x78086f = js(_0x47d246, {
      left: _0x2ceea4,
      top: _0x553029,
      width: _0x46d98f - _0x2ceea4,
      height: _0x177256 - _0x553029,
    }),
    _0x5215f6 = V(
      B(_0x249d51, {
        parentId: _0x489c04.element["parentId"],
        worldTransform: Xt(_0x78086f),
      }),
    ),
    _0x5c5292 = Os(
      {
        ..._0x47d246,
        laneId: As(_0x249d51, _0x489c04.element["parentId"], {
          left: _0x78086f.left,
          top: _0x78086f.top,
          width: _0x78086f.width,
          height: _0x78086f.height,
        }),
      },
      _0x5215f6,
    ),
    _0x35c138 = {
      ..._0x249d51,
      [_0x1df17c]: { ..._0x489c04, element: _0x5c5292, transform: _0x5215f6 },
    },
    _0x13047f = [
      {
        id: Z.id,
        params: {
          unitId: _0x4d734e,
          subUnitId: _0x32fd4a,
          elementId: _0x1df17c,
          element: _0x5c5292,
          transform: _0x5215f6,
        },
      },
    ],
    _0x34edd1 = _0x11eaa6.map((_0xba4f1) => {
      var _0x1abf5c;
      return (_0x1abf5c = R(_0x249d51, _0xba4f1)) == null
        ? undefined
        : _0x1abf5c.worldTransform;
    });
  return _0x34edd1.some((_0x4f37ba) => !_0x4f37ba)
    ? null
    : (_0x11eaa6.forEach((_0x1a2dbc, _0xc64337) => {
        let _0x403a68 = _0x249d51[_0x1a2dbc],
          _0x1f5956 = V(
            B(_0x35c138, {
              parentId: _0x1df17c,
              worldTransform: _0x34edd1[_0xc64337],
            }),
          );
        _0x13047f.push({
          id: Z.id,
          params: {
            unitId: _0x4d734e,
            subUnitId: _0x32fd4a,
            elementId: _0x1a2dbc,
            element: Os(_0x403a68.element, _0x1f5956),
            transform: _0x1f5956,
          },
        });
      }),
      {
        redoMutations: _0x13047f,
        undoMutations: [_0x1df17c, ..._0x11eaa6].map((_0x1e1000) => {
          let _0x49b673 = _0x249d51[_0x1e1000];
          return {
            id: Z.id,
            params: {
              unitId: _0x4d734e,
              subUnitId: _0x32fd4a,
              elementId: _0x1e1000,
              element: q(e.Tools["deepClone"](_0x49b673.element)),
              transform: _0x49b673.transform
                ? { ..._0x49b673.transform }
                : _0x49b673.transform,
            },
          };
        }),
      });
}
function Ps(_0x365b14, _0x1386d5) {
  let _0x5ab7d4 = new Set(Object.keys(_0x1386d5)),
    _0x505d95 = new Set();
  for (let _0x41b837 of _0x365b14) {
    if (_0x5ab7d4.has(_0x41b837.id) || _0x505d95.has(_0x41b837.id))
      return false;
    _0x505d95.add(_0x41b837.id);
  }
  let _0x1aaf1d = new Map(_0x365b14.map((_0x4fbc7) => [_0x4fbc7.id, _0x4fbc7])),
    _0x2e96bd = (_0x29c80d) => {
      var _0x4b1ecc, _0xa4705b;
      return (
        ((_0x4b1ecc = _0x1aaf1d.get(_0x29c80d)) == null
          ? undefined
          : _0x4b1ecc.parentId) ??
        ((_0xa4705b = _0x1386d5[_0x29c80d]) == null
          ? undefined
          : _0xa4705b.element["parentId"])
      );
    },
    _0x4678a3 = (_0x1e53a9) => {
      let _0x3969d7 = new Set([_0x1e53a9.id]),
        _0x4470a1 = _0x1e53a9.parentId;
      for (; _0x4470a1;) {
        if (_0x3969d7.has(_0x4470a1)) return true;
        (_0x3969d7.add(_0x4470a1), (_0x4470a1 = _0x2e96bd(_0x4470a1)));
      }
      return false;
    };
  return _0x365b14.every((_0x6732c7) => {
    var _0x3bc901;
    if (!_0x6732c7.parentId) return true;
    if (_0x4678a3(_0x6732c7)) return false;
    let _0x3064fd =
      _0x1aaf1d.get(_0x6732c7.parentId) ??
      ((_0x3bc901 = _0x1386d5[_0x6732c7.parentId]) == null
        ? undefined
        : _0x3bc901.element);
    if (!_0x3064fd || _0x3064fd.type !== s.Container) return false;
    let _0x227a3f = _0x3064fd.containerData["behavior"],
      _0x28192c = !_0x1aaf1d.has(_0x6732c7.parentId),
      _0xdfc8a0 = _0x28192c ? _0x1386d5[_0x6732c7.parentId] : undefined;
    return (_0x28192c &&
      ((_0xdfc8a0 == null ? undefined : _0xdfc8a0.hidden) === true ||
        _0x3064fd.visible === false ||
        _0x3064fd.locked === true ||
        _0x3064fd.selectable === false ||
        _0x227a3f.membershipLocked)) ||
      !_0x227a3f.acceptsChildren
      ? false
      : _0x6732c7.type !== s.Container ||
          (_0x227a3f.acceptsContainer && _0x227a3f.allowNested);
  });
}
function Fs(_0x3d8e2a, _0x371e58, _0x2e28ca) {
  if (!_0x3d8e2a) return true;
  let _0x4e6205 = _0x2e28ca[_0x3d8e2a],
    _0x544694 =
      _0x371e58.find((_0x47211c) => _0x47211c.id === _0x3d8e2a) ??
      (_0x4e6205 == null ? undefined : _0x4e6205.element);
  return (
    (_0x544694 == null ? undefined : _0x544694.type) === s.Container &&
    (_0x4e6205 == null ? undefined : _0x4e6205.hidden) !== true &&
    _0x544694.visible !== false &&
    _0x544694.locked !== true &&
    _0x544694.selectable !== false
  );
}
function Is(_0x1b35c1) {
  return _0x1b35c1.map((_0x3fd90c) => {
    let _0xce63ea = q(_0x3fd90c);
    return _0xce63ea.type !== s.Container ||
      !_0xce63ea.containerData["behavior"].membershipLocked ||
      oa(_0xce63ea) ||
      _0xce63ea.containerData["behavior"].autoResize
      ? _0xce63ea
      : {
          ..._0xce63ea,
          containerData: {
            ..._0xce63ea.containerData,
            behavior: {
              ..._0xce63ea.containerData["behavior"],
              autoResize: true,
            },
          },
        };
  });
}
function Ls(_0xda0964) {
  let _0x47c459 = new Map(
      _0xda0964.map((_0x19da5f) => [_0x19da5f.id, _0x19da5f]),
    ),
    _0x4bb312 = [],
    _0x57cc80 = new Set(),
    _0x8f05ed = (_0xa1808e) => {
      if (_0x57cc80.has(_0xa1808e.id)) return;
      let _0x21ed5f = _0xa1808e.parentId
        ? _0x47c459.get(_0xa1808e.parentId)
        : undefined;
      (_0x21ed5f && _0x8f05ed(_0x21ed5f),
        _0x57cc80.add(_0xa1808e.id),
        _0x4bb312.push(_0xa1808e));
    };
  return (_0xda0964.forEach(_0x8f05ed), _0x4bb312);
}
function Rs(_0x5b357f, _0x38ac18) {
  var _0x578fcd;
  if (_0x38ac18.laneId !== undefined) return _0x38ac18.laneId;
  if (!_0x38ac18.parentId) return;
  let _0x3b036e =
    (_0x578fcd = _0x5b357f[_0x38ac18.parentId]) == null
      ? undefined
      : _0x578fcd.element;
  if (
    (_0x3b036e == null ? undefined : _0x3b036e.type) !== s.Container ||
    _0x3b036e.containerData["kind"] !== "swimlane"
  )
    return _0x38ac18.laneId;
  let _0x4831a9 = z(_0x5b357f, _0x38ac18.id),
    _0x5f33e4 = _0x4831a9
      ? ec(_0x5b357f, _0x38ac18.parentId, _0x4831a9)
      : undefined;
  if (_0x5f33e4) return _0x5f33e4;
}
function zs(_0x442cf2, _0x25f5d6) {
  return _0x25f5d6.map((_0xcea30c) => {
    let _0x60a28d = Rs(_0x442cf2, _0xcea30c);
    return _0xcea30c.laneId === _0x60a28d
      ? _0xcea30c
      : { ..._0xcea30c, laneId: _0x60a28d };
  });
}
function Bs(_0x1f1a3b, _0x358f9d, _0x34f968) {
  return {
    unitId: _0x1f1a3b,
    subUnitId: _0x358f9d,
    elementId: _0x34f968.id,
    element: _0x34f968,
    transform: {
      left: _0x34f968.transform["left"],
      top: _0x34f968.transform["top"],
      width: _0x34f968.transform["width"],
      height: _0x34f968.transform["height"],
      angle: _0x34f968.transform["rotation"] ?? 0,
      flipX: _0x34f968.transform["flipX"],
      flipY: _0x34f968.transform["flipY"],
    },
  };
}
function Vs(_0x2a24d3, _0x4ff316, _0x21328b) {
  if (
    _0x21328b === undefined ||
    _0x21328b < 0 ||
    _0x21328b >= _0x2a24d3.length
  ) {
    _0x2a24d3.push(_0x4ff316);
    return;
  }
  _0x2a24d3.splice(_0x21328b, 0, _0x4ff316);
}
function Hs(_0x2c00d8) {
  let _0x4e30a2 = { ..._0x2c00d8.elementData },
    _0x4d9fec = [..._0x2c00d8.elementOrder];
  return (
    _0x2c00d8.orderedElements["forEach"]((_0x1f213e, _0x1a534e) => {
      ((_0x4e30a2[_0x1f213e.id] = Bs(
        _0x2c00d8.unitId,
        _0x2c00d8.subUnitId,
        _0x1f213e,
      )),
        Vs(
          _0x4d9fec,
          _0x1f213e.id,
          _0x2c00d8.insertIndex === undefined
            ? undefined
            : _0x2c00d8.insertIndex + _0x1a534e,
        ));
    }),
    { elementData: _0x4e30a2, elementOrder: _0x4d9fec }
  );
}
function Us(_0x388272, _0x5c8866) {
  return {
    ..._0x388272,
    transform: {
      ..._0x388272.transform,
      left: _0x5c8866.left,
      top: _0x5c8866.top,
      width: _0x5c8866.width,
      height: _0x5c8866.height,
      rotation: _0x5c8866.angle,
      flipX: _0x5c8866.flipX,
      flipY: _0x5c8866.flipY,
    },
  };
}
function Ws(_0x4533b5) {
  return _0x4533b5.left === undefined ||
    _0x4533b5.top === undefined ||
    _0x4533b5.width === undefined ||
    _0x4533b5.height === undefined
    ? null
    : {
        left: _0x4533b5.left,
        top: _0x4533b5.top,
        width: _0x4533b5.width,
        height: _0x4533b5.height,
      };
}
function Gs(_0x2d110a, _0x5d2d3e) {
  return (
    _0x2d110a.left !== _0x5d2d3e.left ||
    _0x2d110a.top !== _0x5d2d3e.top ||
    _0x2d110a.width !== _0x5d2d3e.width ||
    _0x2d110a.height !== _0x5d2d3e.height
  );
}
function Ks(_0x2a4883, _0x36a35b) {
  return (
    (_0x2a4883 == null ? undefined : _0x2a4883.left) !== _0x36a35b.left ||
    (_0x2a4883 == null ? undefined : _0x2a4883.top) !== _0x36a35b.top ||
    (_0x2a4883 == null ? undefined : _0x2a4883.width) !== _0x36a35b.width ||
    (_0x2a4883 == null ? undefined : _0x2a4883.height) !== _0x36a35b.height ||
    (_0x2a4883 == null ? undefined : _0x2a4883.angle) !== _0x36a35b.angle ||
    (_0x2a4883 == null ? undefined : _0x2a4883.flipX) !== _0x36a35b.flipX ||
    (_0x2a4883 == null ? undefined : _0x2a4883.flipY) !== _0x36a35b.flipY
  );
}
function qs(_0xdf922a) {
  let _0x581ae1 = Math.max(1, _0xdf922a.containerIds["length"]);
  for (let _0xddba2d = 0; _0xddba2d < _0x581ae1; _0xddba2d++) {
    let _0x5e471b = false;
    if (
      (_0xdf922a.containerIds["forEach"]((_0x25b22a) => {
        let _0x41fe87 = _0xdf922a.elementData[_0x25b22a],
          _0x1b0a30 = _0x41fe87 == null ? undefined : _0x41fe87.element;
        if (
          !_0x1b0a30 ||
          _0x1b0a30.type !== s.Container ||
          !_0x1b0a30.containerData["behavior"].membershipLocked ||
          !_0x1b0a30.containerData["behavior"].autoResize
        )
          return;
        let _0x192b24 = z(_0xdf922a.elementData, _0x25b22a);
        if (!_0x192b24) return;
        let _0x28e4a6 = _0xdf922a.elementOrder["filter"]((_0x212b67) => {
            var _0x534ee7;
            return (
              ((_0x534ee7 = _0xdf922a.elementData[_0x212b67]) == null
                ? undefined
                : _0x534ee7.element["parentId"]) === _0x25b22a
            );
          }),
          _0x22c16b = br([
            xs(_0x1b0a30, _0x192b24),
            ..._0x28e4a6
              .filter((_0x4e991e) => {
                var _0x2eedcf;
                return (
                  ((_0x2eedcf = _0xdf922a.elementData[_0x4e991e]) == null
                    ? undefined
                    : _0x2eedcf.element["type"]) !== s.Connector
                );
              })
              .map((_0x4c9599) => z(_0xdf922a.elementData, _0x4c9599))
              .filter((_0xfbe1bb) => !!_0xfbe1bb),
          ]);
        if (!_0x22c16b) return;
        let _0x500483 = Ts(_0x1b0a30, _0x192b24, _0x22c16b);
        if (
          _0x500483.left === _0x192b24.left &&
          _0x500483.top === _0x192b24.top &&
          _0x500483.width === _0x192b24.width &&
          _0x500483.height === _0x192b24.height
        )
          return;
        let _0x522221 = new Map(
            _0x28e4a6.map((_0x54decb) => {
              var _0x2851ab;
              return [
                _0x54decb,
                (_0x2851ab = R(_0xdf922a.elementData, _0x54decb)) == null
                  ? undefined
                  : _0x2851ab.worldTransform,
              ];
            }),
          ),
          _0x11cc96 = V(
            B(_0xdf922a.elementData, {
              parentId: _0x1b0a30.parentId,
              worldTransform: {
                ..._0x1b0a30.transform,
                ..._0x500483,
                rotation: 0,
              },
            }),
          ),
          _0x3a2128 = Us(_0x1b0a30, _0x11cc96);
        ((_0xdf922a.elementData[_0x25b22a] = {
          ..._0x41fe87,
          element: _0x3a2128,
          transform: _0x11cc96,
        }),
          _0xdf922a.redoMutations["push"]({
            id: Z.id,
            params: {
              unitId: _0xdf922a.unitId,
              subUnitId: _0xdf922a.subUnitId,
              elementId: _0x25b22a,
              element: e.Tools["deepClone"](_0x3a2128),
              transform: _0x11cc96,
              ...(_0x1b0a30.locked === true ? { allowLockedTarget: true } : {}),
            },
          }),
          (_0x5e471b = true),
          _0x522221.forEach((_0x323e65, _0x34f79f) => {
            let _0x337a09 = _0xdf922a.elementData[_0x34f79f];
            if (!_0x337a09 || !_0x323e65) return;
            let _0x501803 = V(
                B(_0xdf922a.elementData, {
                  parentId: _0x25b22a,
                  worldTransform: _0x323e65,
                }),
              ),
              _0x16647c = Ws(_0x323e65),
              _0x1a4347 = Us(
                {
                  ..._0x337a09.element,
                  laneId: _0x16647c
                    ? ec(_0xdf922a.elementData, _0x25b22a, _0x16647c)
                    : _0x337a09.element["laneId"],
                },
                _0x501803,
              );
            ((_0xdf922a.elementData[_0x34f79f] = {
              ..._0x337a09,
              element: _0x1a4347,
              transform: _0x501803,
            }),
              _0xdf922a.redoMutations["push"]({
                id: Z.id,
                params: {
                  unitId: _0xdf922a.unitId,
                  subUnitId: _0xdf922a.subUnitId,
                  elementId: _0x34f79f,
                  element: e.Tools["deepClone"](_0x1a4347),
                  transform: _0x501803,
                  ...(_0x337a09.element["locked"] === true
                    ? { allowLockedTarget: true }
                    : {}),
                },
              }));
          }));
      }),
      !_0x5e471b)
    )
      break;
  }
}
function Js(_0x11d13f) {
  let _0x53c973 = new Set(
      _0x11d13f.addedElements["map"]((_0x30607c) => _0x30607c.id),
    ),
    _0x57ff0c = new Set();
  _0x11d13f.addedElements["forEach"]((_0x5646b2) => {
    let _0x45bfd5 = _0x5646b2.parentId;
    for (; _0x45bfd5 && !_0x53c973.has(_0x45bfd5);) {
      let _0x4609e2 = _0x11d13f.elementData[_0x45bfd5];
      if (!_0x4609e2 || _0x4609e2.element["type"] !== s.Container) break;
      (_0x57ff0c.add(_0x45bfd5), (_0x45bfd5 = _0x4609e2.element["parentId"]));
    }
  });
  let _0x33b400 = Array.from(_0x57ff0c).sort(
      (_0x221e7f, _0x99f31f) =>
        L(_0x11d13f.elementData, _0x99f31f).length -
        L(_0x11d13f.elementData, _0x221e7f).length,
    ),
    _0x7960d8 = Math.max(1, _0x33b400.length);
  for (let _0x565295 = 0; _0x565295 < _0x7960d8; _0x565295++) {
    let _0x5c9e18 = false;
    if (
      (_0x33b400.forEach((_0x18b33b) => {
        let _0x1ece81 = _0x11d13f.elementData[_0x18b33b],
          _0x34d5f8 = _0x11d13f.originalElementData[_0x18b33b],
          _0x1be3bb = _0x1ece81 == null ? undefined : _0x1ece81.element;
        if (
          !_0x34d5f8 ||
          !_0x1be3bb ||
          _0x1be3bb.type !== s.Container ||
          !_0x1be3bb.containerData["behavior"].autoResize
        )
          return;
        let _0x2c250c = z(_0x11d13f.elementData, _0x18b33b);
        if (!_0x2c250c) return;
        let _0x3e38fe = _0x11d13f.elementOrder["filter"]((_0x238ca1) => {
            var _0x16dd1b;
            return (
              ((_0x16dd1b = _0x11d13f.elementData[_0x238ca1]) == null
                ? undefined
                : _0x16dd1b.element["parentId"]) === _0x18b33b
            );
          }),
          _0x273e40 = br([
            xs(_0x1be3bb, _0x2c250c),
            ..._0x3e38fe
              .filter((_0x2fc196) => {
                var _0x13869b;
                return (
                  ((_0x13869b = _0x11d13f.elementData[_0x2fc196]) == null
                    ? undefined
                    : _0x13869b.element["type"]) !== s.Connector
                );
              })
              .map((_0x25f781) => z(_0x11d13f.elementData, _0x25f781))
              .filter((_0x57acfb) => !!_0x57acfb),
          ]);
        if (!_0x273e40) return;
        let _0x1214ea = Ts(_0x1be3bb, _0x2c250c, _0x273e40);
        if (!Gs(_0x2c250c, _0x1214ea)) return;
        let _0x548813 = new Map(
            _0x3e38fe.map((_0x2e53eb) => {
              var _0x3f2e18;
              return [
                _0x2e53eb,
                (_0x3f2e18 = R(_0x11d13f.elementData, _0x2e53eb)) == null
                  ? undefined
                  : _0x3f2e18.worldTransform,
              ];
            }),
          ),
          _0x5642d3 = V(
            B(_0x11d13f.elementData, {
              parentId: _0x1be3bb.parentId,
              worldTransform: {
                ..._0x1be3bb.transform,
                ..._0x1214ea,
                rotation: 0,
              },
            }),
          ),
          _0x79745e = Us(_0x1be3bb, _0x5642d3);
        ((_0x11d13f.elementData[_0x18b33b] = {
          ..._0x1ece81,
          element: _0x79745e,
          transform: _0x5642d3,
        }),
          _0x11d13f.redoMutations["push"]({
            id: Z.id,
            params: {
              unitId: _0x11d13f.unitId,
              subUnitId: _0x11d13f.subUnitId,
              elementId: _0x18b33b,
              element: e.Tools["deepClone"](_0x79745e),
              transform: _0x5642d3,
            },
          }),
          _0x11d13f.undoMutations["unshift"]({
            id: Z.id,
            params: {
              unitId: _0x11d13f.unitId,
              subUnitId: _0x11d13f.subUnitId,
              elementId: _0x18b33b,
              element: e.Tools["deepClone"](_0x34d5f8.element),
              transform: e.Tools["deepClone"](_0x34d5f8.transform),
            },
          }),
          (_0x5c9e18 = true),
          _0x548813.forEach((_0x4017df, _0x4778c0) => {
            let _0x5da299 = _0x11d13f.elementData[_0x4778c0];
            if (!_0x5da299 || !_0x4017df) return;
            let _0x442814 = V(
              B(_0x11d13f.elementData, {
                parentId: _0x18b33b,
                worldTransform: _0x4017df,
              }),
            );
            if (!Ks(_0x5da299.transform, _0x442814)) return;
            let _0x12b559 = Us(_0x5da299.element, _0x442814);
            ((_0x11d13f.elementData[_0x4778c0] = {
              ..._0x5da299,
              element: _0x12b559,
              transform: _0x442814,
            }),
              _0x11d13f.redoMutations["push"]({
                id: Z.id,
                params: {
                  unitId: _0x11d13f.unitId,
                  subUnitId: _0x11d13f.subUnitId,
                  elementId: _0x4778c0,
                  element: e.Tools["deepClone"](_0x12b559),
                  transform: _0x442814,
                },
              }),
              _0x11d13f.undoMutations["unshift"]({
                id: Z.id,
                params: {
                  unitId: _0x11d13f.unitId,
                  subUnitId: _0x11d13f.subUnitId,
                  elementId: _0x4778c0,
                  element: e.Tools["deepClone"](_0x5da299.element),
                  transform: e.Tools["deepClone"](_0x5da299.transform),
                },
              }));
          }));
      }),
      !_0x5c9e18)
    )
      break;
  }
}
function Ys(_0x355ed9) {
  let _0x2682e7 = new Set(
      _0x355ed9.orderedElements["map"]((_0x2e42a8) => _0x2e42a8.id),
    ),
    _0x356c6d = _0x355ed9.orderedElements["filter"](
      (_0x413208) => _0x413208.type === s.Container,
    ).map((_0x2ae592) => _0x2ae592.id),
    _0x5a3f94 = [];
  (_0x356c6d.forEach((_0x11e4c7) => {
    let _0x2b9a60 = _0x355ed9.elementData[_0x11e4c7];
    if (
      !_0x2b9a60 ||
      _0x2b9a60.element["type"] !== s.Container ||
      _0x2b9a60.element["containerData"].behavior["membershipLocked"] ||
      !_0x2b9a60.element["containerData"].behavior["autoCapture"]
    )
      return;
    let _0x442b33 = Object.keys(_0x355ed9.elementData).filter(
        (_0x271bc7) => !_0x2682e7.has(_0x271bc7),
      ),
      _0x2fa113 = z(_0x355ed9.elementData, _0x11e4c7),
      _0x275cf9 =
        _0x2fa113 &&
        _0x2b9a60.element["containerData"].kind !== "swimlane" &&
        _0x2b9a60.element["containerData"].behavior["autoResize"]
          ? _0x442b33.filter((_0x1fefbc) => {
              var _0x3fd1c5;
              if (
                (_0x3fd1c5 = _0x355ed9.elementData[_0x1fefbc]) != null &&
                _0x3fd1c5.element["parentId"]
              )
                return false;
              let _0x218867 = z(_0x355ed9.elementData, _0x1fefbc);
              return !!_0x218867 && _r(_0x2fa113, _0x218867);
            })
          : [],
      _0x500f48 = Es({
        containerId: _0x11e4c7,
        elementData: _0x355ed9.elementData,
        candidateElementIds: _0x442b33,
        autosizeCaptureCandidateIds: _0x275cf9,
      }),
      _0x9c926e = ps({
        containerId: _0x11e4c7,
        elementData: _0x355ed9.elementData,
        preview: _0x500f48,
      });
    if (_0x9c926e.captured["length"] > 0 && _0x9c926e.autosized["length"] > 0) {
      let _0x299032 = _0x2b9a60.element,
        _0x42d3db = _0x9c926e.autosized[0].nextBounds,
        _0x3b9c01 = V(
          B(_0x355ed9.elementData, {
            parentId: _0x299032.parentId,
            worldTransform: {
              ..._0x299032.transform,
              ..._0x42d3db,
              rotation: 0,
            },
          }),
        ),
        _0x59aa35 = Us(_0x299032, _0x3b9c01);
      (_0x355ed9.redoMutations["push"]({
        id: Z.id,
        params: {
          unitId: _0x355ed9.unitId,
          subUnitId: _0x355ed9.subUnitId,
          elementId: _0x11e4c7,
          element: e.Tools["deepClone"](_0x59aa35),
          transform: _0x3b9c01,
        },
      }),
        (_0x2b9a60 = {
          ..._0x2b9a60,
          element: _0x59aa35,
          transform: _0x3b9c01,
        }),
        (_0x355ed9.elementData[_0x11e4c7] = _0x2b9a60));
    }
    _0x9c926e.captured["forEach"](({ elementId: _0x191daa }) => {
      var _0x18a599;
      let _0x25bc89 = _0x355ed9.elementData[_0x191daa],
        _0x35ef29 =
          (_0x18a599 = R(_0x355ed9.elementData, _0x191daa)) == null
            ? undefined
            : _0x18a599.worldTransform,
        _0x1be96a = z(_0x355ed9.elementData, _0x191daa);
      if (!_0x25bc89 || !_0x35ef29 || !_0x1be96a) return;
      let _0x5ac4a4 = V(
          B(_0x355ed9.elementData, {
            parentId: _0x11e4c7,
            worldTransform: _0x35ef29,
          }),
        ),
        _0x3ed29d = Us(
          {
            ..._0x25bc89.element,
            parentId: _0x11e4c7,
            laneId: ec(_0x355ed9.elementData, _0x11e4c7, _0x1be96a),
          },
          _0x5ac4a4,
        );
      (_0x355ed9.redoMutations["push"]({
        id: Z.id,
        params: {
          unitId: _0x355ed9.unitId,
          subUnitId: _0x355ed9.subUnitId,
          elementId: _0x191daa,
          element: e.Tools["deepClone"](_0x3ed29d),
          transform: _0x5ac4a4,
          ...(_0x25bc89.element["locked"] === true
            ? { allowLockedTarget: true }
            : {}),
        },
      }),
        _0x5a3f94.push({
          id: Z.id,
          params: {
            unitId: _0x355ed9.unitId,
            subUnitId: _0x355ed9.subUnitId,
            elementId: _0x191daa,
            element: e.Tools["deepClone"](_0x25bc89.element),
            transform: _0x25bc89.transform
              ? { ..._0x25bc89.transform }
              : _0x25bc89.transform,
            ...(_0x25bc89.element["locked"] === true
              ? { allowLockedTarget: true }
              : {}),
          },
        }),
        (_0x355ed9.elementData[_0x191daa] = {
          ..._0x25bc89,
          element: _0x3ed29d,
          transform: _0x5ac4a4,
        }));
    });
  }),
    _0x5a3f94.length > 0 && _0x355ed9.undoMutations["unshift"](..._0x5a3f94),
    Object.values(_0x355ed9.elementData).forEach((_0x4bf6cf) => {
      var _0x31aa56;
      if (!X(_0x4bf6cf)) return;
      let _0x5320af = aa(_0x355ed9.elementData, _0x4bf6cf.element);
      if (
        _0x4bf6cf.element["parentId"] === _0x5320af.parentId &&
        _0x4bf6cf.element["laneId"] === _0x5320af.laneId
      )
        return;
      let _0x305bc8 =
        (_0x31aa56 = R(_0x355ed9.elementData, _0x4bf6cf.elementId)) == null
          ? undefined
          : _0x31aa56.worldTransform;
      if (!_0x305bc8) return;
      let _0x126ab1 = V(
          B(_0x355ed9.elementData, {
            parentId: _0x5320af.parentId,
            worldTransform: _0x305bc8,
          }),
        ),
        _0x124419 = Us(
          {
            ..._0x4bf6cf.element,
            parentId: _0x5320af.parentId,
            laneId: _0x5320af.laneId,
          },
          _0x126ab1,
        );
      (_0x355ed9.redoMutations["push"]({
        id: Z.id,
        params: {
          unitId: _0x355ed9.unitId,
          subUnitId: _0x355ed9.subUnitId,
          elementId: _0x4bf6cf.elementId,
          element: e.Tools["deepClone"](_0x124419),
          transform: _0x126ab1,
        },
      }),
        _0x355ed9.undoMutations["unshift"]({
          id: Z.id,
          params: {
            unitId: _0x355ed9.unitId,
            subUnitId: _0x355ed9.subUnitId,
            elementId: _0x4bf6cf.elementId,
            element: e.Tools["deepClone"](_0x4bf6cf.element),
            transform: _0x4bf6cf.transform
              ? { ..._0x4bf6cf.transform }
              : _0x4bf6cf.transform,
          },
        }),
        (_0x355ed9.elementData[_0x4bf6cf.elementId] = {
          ..._0x4bf6cf,
          element: _0x124419,
          transform: _0x126ab1,
        }));
    }));
}
function Xs(_0x599de1, _0x4859b0) {
  var _0x223f11;
  let _0x57bbe8 =
      (_0x223f11 = _0x599de1[_0x4859b0]) == null
        ? undefined
        : _0x223f11.element["parentId"],
    _0x2219cc = new Set([_0x4859b0]);
  for (; _0x57bbe8;) {
    if (_0x2219cc.has(_0x57bbe8)) return false;
    let _0x462d3c = _0x599de1[_0x57bbe8];
    if (!_0x462d3c) return false;
    if (_0x462d3c.hidden === true || _0x462d3c.element["visible"] === false)
      return true;
    (_0x2219cc.add(_0x57bbe8), (_0x57bbe8 = _0x462d3c.element["parentId"]));
  }
  return false;
}
function Zs(_0x1ea258, _0x3d1475) {
  var _0x141497;
  let _0x41a695 =
      (_0x141497 = _0x1ea258[_0x3d1475]) == null
        ? undefined
        : _0x141497.element["parentId"],
    _0x55f1f7 = new Set([_0x3d1475]);
  for (; _0x41a695;) {
    if (_0x55f1f7.has(_0x41a695)) return false;
    let _0x4cd1fe = _0x1ea258[_0x41a695];
    if (!_0x4cd1fe) return false;
    if (
      _0x4cd1fe.element["type"] === s.Container &&
      _0x4cd1fe.element["containerData"].behavior["membershipLocked"]
    )
      return true;
    (_0x55f1f7.add(_0x41a695), (_0x41a695 = _0x4cd1fe.element["parentId"]));
  }
  return false;
}
function Qs(_0x345af0, _0x10bb21, _0x2d8cae) {
  var _0x184310, _0x4a4e0a;
  let _0x92e196 =
      (_0x184310 = _0x345af0[_0x10bb21]) == null
        ? undefined
        : _0x184310.element,
    _0x39be4a =
      (_0x4a4e0a = _0x345af0[_0x2d8cae]) == null
        ? undefined
        : _0x4a4e0a.element["parentId"];
  return !_0x39be4a ||
    _0x39be4a === _0x10bb21 ||
    !Vt(_0x345af0[_0x39be4a]) ||
    (_0x92e196 == null ? undefined : _0x92e196.type) !== s.Container
    ? true
    : L(_0x345af0, _0x10bb21).includes(_0x39be4a)
      ? _0x92e196.containerData["capturePolicy"]
          .allowCaptureFromAncestorContainer === true
      : _0x92e196.containerData["capturePolicy"]
          .allowCaptureFromSiblingContainer;
}
function $s(_0xf11e51, _0x324c9b, _0x10d3a3) {
  var _0x18971f, _0x2f1831;
  let _0xdcafde =
      (_0x18971f = _0xf11e51[_0x324c9b]) == null
        ? undefined
        : _0x18971f.element,
    _0xe6e698 =
      (_0x2f1831 = _0xf11e51[_0x10d3a3]) == null
        ? undefined
        : _0x2f1831.element;
  return (_0xdcafde == null ? undefined : _0xdcafde.type) === s.Container
    ? Qs(_0xf11e51, _0x324c9b, _0x10d3a3)
      ? (_0xe6e698 == null ? undefined : _0xe6e698.type) !== s.Container ||
        (_0xdcafde.containerData["behavior"].acceptsContainer &&
          _0xdcafde.containerData["behavior"].allowNested &&
          _0xdcafde.containerData["capturePolicy"].allowCaptureContainer &&
          !Wt(_0xf11e51, _0x10d3a3, _0x324c9b))
      : false
    : true;
}
function ec(_0x301fc6, _0x4a9940, _0x2978e1) {
  var _0x3b56e7, _0x3c6dc1;
  let _0xba65ce =
      (_0x3b56e7 = _0x301fc6[_0x4a9940]) == null
        ? undefined
        : _0x3b56e7.element,
    _0x53f3c8 = z(_0x301fc6, _0x4a9940);
  if (!(
    !_0xba65ce ||
    _0xba65ce.type !== s.Container ||
    _0xba65ce.containerData["kind"] !== "swimlane" ||
    !_0x53f3c8
  ))
    return (_0x3c6dc1 = Wr(_0xba65ce, _0x53f3c8, _0x2978e1)) == null
      ? undefined
      : _0x3c6dc1.lane["id"];
}
function tc(_0x378c64, _0x2507be, _0x527bc0, _0x4a3669) {
  return _0x378c64.containerData["kind"] === "swimlane" &&
    _0x378c64.containerData["swimlane"]
    ? Wr(_0x378c64, _0x2507be, _0x4a3669)
      ? true
      : _0x378c64.containerData["behavior"].autoResize &&
        Lr(_0x378c64, _0x2507be).some(
          ({ contentBounds: _0xd855be }) =>
            yr(_0xd855be, _0x4a3669) &&
            (_0x4a3669.width > _0xd855be.width ||
              _0x4a3669.height > _0xd855be.height),
        )
    : _r(_0x527bc0, _0x4a3669)
      ? true
      : _0x378c64.containerData["behavior"].autoResize &&
        yr(_0x527bc0, _0x4a3669) &&
        (_0x4a3669.width > _0x527bc0.width ||
          _0x4a3669.height > _0x527bc0.height);
}
function nc(_0x2fbaa7) {
  let _0x2b6d93 = new Set(
    _0x2fbaa7.orderedElements["map"]((_0x281a2d) => _0x281a2d.id),
  );
  return _0x2fbaa7.orderedElements["some"]((_0x42530c) => {
    if (
      _0x42530c.type !== s.Container ||
      _0x42530c.containerData["behavior"].membershipLocked ||
      !_0x42530c.containerData["behavior"].autoCapture ||
      !_0x42530c.containerData["behavior"].acceptsChildren ||
      !_0x42530c.containerData["capturePolicy"].enabled ||
      _0x42530c.visible === false ||
      (_0x42530c.locked !== true && _0x42530c.selectable !== false)
    )
      return false;
    let _0x334fc4 = z(_0x2fbaa7.elementData, _0x42530c.id);
    if (!_0x334fc4) return false;
    let _0x597ea0 = xs(_0x42530c, _0x334fc4);
    return Object.keys(_0x2fbaa7.elementData)
      .filter((_0x3ec6d2) => !_0x2b6d93.has(_0x3ec6d2))
      .some((_0x4afa3a) => {
        let _0x443d2e = _0x2fbaa7.elementData[_0x4afa3a],
          _0x65308e = z(_0x2fbaa7.elementData, _0x4afa3a);
        return (
          !!_0x65308e &&
          (_0x443d2e == null ? undefined : _0x443d2e.element["visible"]) !==
            false &&
          (_0x443d2e == null ? undefined : _0x443d2e.hidden) !== true &&
          (_0x443d2e == null ? undefined : _0x443d2e.element["locked"]) !==
            true &&
          (_0x443d2e == null ? undefined : _0x443d2e.element["selectable"]) !==
            false &&
          (_0x443d2e == null ? undefined : _0x443d2e.element["type"]) !==
            s.Connector &&
          ((_0x443d2e == null ? undefined : _0x443d2e.element["type"]) !==
            s.Container ||
            !_0x443d2e.element["containerData"].behavior["membershipLocked"]) &&
          !Xs(_0x2fbaa7.elementData, _0x4afa3a) &&
          !Zs(_0x2fbaa7.elementData, _0x4afa3a) &&
          $s(_0x2fbaa7.elementData, _0x42530c.id, _0x4afa3a) &&
          tc(_0x42530c, _0x334fc4, _0x597ea0, _0x65308e)
        );
      });
  });
}
function rc(_0x3e2a13, _0x476705) {
  return _0x476705.some((_0x15c3b6) => {
    var _0x43e3d6;
    if (_0x15c3b6.id !== Z.id) return false;
    let _0x1aeb90 = _0x15c3b6.params;
    return (
      !!_0x1aeb90.elementId &&
      _0x1aeb90.allowLockedTarget !== true &&
      ((_0x43e3d6 = _0x3e2a13[_0x1aeb90.elementId]) == null
        ? undefined
        : _0x43e3d6.element["locked"]) === true
    );
  });
}
const ic = {
  id: "board.operation.add-elements",
  type: e.CommandType["OPERATION"],
  handler: (_0x219d51, _0xe27303) => {
    if (!_0xe27303) return false;
    let { unitId: _0x3a5e0e, subUnitId: _0x5e51fd } = _0xe27303,
      _0x394b14 = _0x219d51.get(N),
      _0x21b310 = _0x394b14.getElementData(_0x3a5e0e, _0x5e51fd),
      _0x482328 = _0x394b14.getElementOrder(_0x3a5e0e, _0x5e51fd),
      _0x480242 = ac({
        ..._0xe27303,
        elementData: _0x21b310,
        elementOrder: _0x482328,
      });
    if (!_0x480242) return false;
    let _0x249512 = _0x219d51.get(e.ICommandService);
    return (0, e.sequenceExecute)(_0x480242.redoMutations, _0x249512).result
      ? (_0x219d51
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x3a5e0e,
            redoMutations: _0x480242.redoMutations,
            undoMutations: _0x480242.undoMutations,
          }),
        true)
      : false;
  },
};
function ac(_0x491817) {
  if (_0x491817.elements["length"] === 0) return null;
  let {
      unitId: _0x2947b8,
      subUnitId: _0x609829,
      insertIndex: _0xb3779a,
      fitContainerId: _0x42b537,
      elementData: _0x5dcc37,
      elementOrder: _0x2faf4b,
    } = _0x491817,
    _0x285747 = Is(_0x491817.elements);
  if (!Ps(_0x285747, _0x5dcc37) || !Fs(_0x42b537, _0x285747, _0x5dcc37))
    return null;
  let _0x28a6ff = Ls(
      yo(
        _0x285747,
        Object.values(_0x5dcc37).map((_0x1742f2) => _0x1742f2.element),
      ),
    ),
    _0x644372 = zs(
      Hs({
        unitId: _0x2947b8,
        subUnitId: _0x609829,
        elementData: _0x5dcc37,
        elementOrder: _0x2faf4b,
        orderedElements: _0x28a6ff,
        insertIndex: _0xb3779a,
      }).elementData,
      _0x28a6ff,
    ),
    _0x400368 = new Set(_0x644372.map((_0x194b32) => _0x194b32.id)),
    _0x1d60ef = _0x644372.map((_0x2be0ff, _0x55c1e4) => ({
      id: xo.id,
      params: {
        unitId: _0x2947b8,
        subUnitId: _0x609829,
        element: e.Tools["deepClone"](_0x2be0ff),
        insertIndex:
          _0xb3779a === undefined ? undefined : _0xb3779a + _0x55c1e4,
        ...(_0x2be0ff.parentId && _0x400368.has(_0x2be0ff.parentId)
          ? { allowLockedParent: true }
          : {}),
      },
    })),
    _0x3834b3 = [..._0x644372]
      .reverse()
      .map((_0x1b1ac5) => ({
        id: Co.id,
        params: {
          unitId: _0x2947b8,
          subUnitId: _0x609829,
          elementId: _0x1b1ac5.id,
          elementType: _0x1b1ac5.type,
          ...(_0x1b1ac5.type === s.Container
            ? { containerKind: _0x1b1ac5.containerData["kind"] }
            : {}),
          ...(_0x1b1ac5.parentId && _0x400368.has(_0x1b1ac5.parentId)
            ? { allowLockedParent: true }
            : {}),
          ...(_0x1b1ac5.locked === true ? { allowLockedTarget: true } : {}),
        },
      })),
    _0x3c9e61 = Hs({
      unitId: _0x2947b8,
      subUnitId: _0x609829,
      elementData: _0x5dcc37,
      elementOrder: _0x2faf4b,
      orderedElements: _0x644372,
      insertIndex: _0xb3779a,
    });
  if (
    (qs({
      unitId: _0x2947b8,
      subUnitId: _0x609829,
      elementData: _0x3c9e61.elementData,
      elementOrder: _0x3c9e61.elementOrder,
      containerIds: _0x644372
        .filter(
          (_0x23716f) =>
            _0x23716f.type === s.Container &&
            _0x23716f.containerData["behavior"].membershipLocked &&
            _0x23716f.containerData["behavior"].autoResize,
        )
        .map((_0x4179e2) => _0x4179e2.id),
      redoMutations: _0x1d60ef,
    }),
    _0x42b537 ||
      Js({
        unitId: _0x2947b8,
        subUnitId: _0x609829,
        originalElementData: _0x5dcc37,
        elementData: _0x3c9e61.elementData,
        elementOrder: _0x3c9e61.elementOrder,
        addedElements: _0x644372,
        redoMutations: _0x1d60ef,
        undoMutations: _0x3834b3,
      }),
    nc({ elementData: _0x3c9e61.elementData, orderedElements: _0x644372 }))
  )
    return null;
  if (
    (_0x491817.captureExistingElements !== false &&
      Ys({
        unitId: _0x2947b8,
        subUnitId: _0x609829,
        elementData: _0x3c9e61.elementData,
        orderedElements: _0x644372,
        redoMutations: _0x1d60ef,
        undoMutations: _0x3834b3,
      }),
    _0x42b537)
  ) {
    let _0x40cd22 = Ns({
      unitId: _0x2947b8,
      subUnitId: _0x609829,
      containerId: _0x42b537,
      elementData: _0x3c9e61.elementData,
      elementOrder: _0x3c9e61.elementOrder,
    });
    _0x40cd22 &&
      (_0x1d60ef.push(..._0x40cd22.redoMutations),
      _0x3834b3.unshift(..._0x40cd22.undoMutations));
  }
  return rc(_0x5dcc37, _0x1d60ef) || !ja(_0x5dcc37, _0x1d60ef)
    ? null
    : { redoMutations: _0x1d60ef, undoMutations: _0x3834b3 };
}
const oc = {
    id: "board.operation.add-element",
    type: e.CommandType["OPERATION"],
    handler: (_0x536cd0, _0x317275) =>
      _0x317275
        ? ic.handler(_0x536cd0, {
            unitId: _0x317275.unitId,
            subUnitId: _0x317275.subUnitId,
            elements: [_0x317275.element],
            insertIndex: _0x317275.insertIndex,
            fitContainerId: _0x317275.fitContainerId,
          })
        : false,
  },
  sc = (0, e.createIdentifier)("board.container-adapter.service");
var cc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x4d7904) {
    return (
      this._adapters["push"](_0x4d7904),
      (0, e.toDisposable)(() => {
        let _0x57cb55 = this._adapters["indexOf"](_0x4d7904);
        _0x57cb55 >= 0 && this._adapters["splice"](_0x57cb55, 1);
      })
    );
  }
  beginContainerMode(_0x2c7bec) {
    for (let _0x95f85d of this._adapters)
      if (_0x95f85d.beginContainerMode(_0x2c7bec)) return true;
    return false;
  }
  beginSwimlaneMode(_0x407787) {
    for (let _0x11c0c7 of this._adapters) {
      var _0x471f50;
      if (
        (_0x471f50 = _0x11c0c7.beginSwimlaneMode) != null &&
        _0x471f50.call(_0x11c0c7, _0x407787)
      )
        return true;
    }
    return false;
  }
};
const lc = {
    id: "board.operation.begin-container",
    type: e.CommandType["OPERATION"],
    handler: (_0x17dfe4, _0x4a4a75) =>
      _0x4a4a75 ? _0x17dfe4.get(sc).beginContainerMode(_0x4a4a75) : false,
  },
  uc = (0, e.createIdentifier)("board.export-adapter.service");
var dc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x18e3a6) {
    return (
      this._adapters["push"](_0x18e3a6),
      (0, e.toDisposable)(() => {
        let _0x39a5ef = this._adapters["indexOf"](_0x18e3a6);
        _0x39a5ef >= 0 && this._adapters["splice"](_0x39a5ef, 1);
      })
    );
  }
  beginExport(_0x525954) {
    for (let _0x1615c3 of this._adapters)
      if (_0x1615c3.beginExport(_0x525954)) return true;
    return false;
  }
};
const fc = {
    id: "board.operation.begin-export",
    type: e.CommandType["OPERATION"],
    handler: (_0x422890, _0x593322) =>
      _0x593322 ? _0x422890.get(uc).beginExport(_0x593322) : false,
  },
  pc = (0, e.createIdentifier)("board.import-adapter.service");
var mc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x25a573) {
    return (
      this._adapters["push"](_0x25a573),
      (0, e.toDisposable)(() => {
        let _0x1afed7 = this._adapters["indexOf"](_0x25a573);
        _0x1afed7 >= 0 && this._adapters["splice"](_0x1afed7, 1);
      })
    );
  }
  beginImport(_0x307b05) {
    for (let _0x144395 of this._adapters)
      if (_0x144395.beginImport(_0x307b05)) return true;
    return false;
  }
};
const hc = {
    id: "board.operation.begin-import",
    type: e.CommandType["OPERATION"],
    handler: (_0xa84687, _0x42f16c) =>
      _0x42f16c ? _0xa84687.get(pc).beginImport(_0x42f16c) : false,
  },
  gc = (0, e.createIdentifier)("board.mind-map-adapter.service");
var _c = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x16ffcf) {
    return (
      this._adapters["push"](_0x16ffcf),
      (0, e.toDisposable)(() => {
        let _0x1cf4a0 = this._adapters["indexOf"](_0x16ffcf);
        _0x1cf4a0 >= 0 && this._adapters["splice"](_0x1cf4a0, 1);
      })
    );
  }
  beginMindMapMode(_0x2848a7) {
    for (let _0x3ce8da of this._adapters)
      if (_0x3ce8da.beginMindMapMode(_0x2848a7)) return true;
    return false;
  }
};
const vc = {
    id: "board.operation.begin-mind-map",
    type: e.CommandType["OPERATION"],
    handler: (_0x16b863, _0x17cd76) =>
      _0x17cd76 ? _0x16b863.get(gc).beginMindMapMode(_0x17cd76) : false,
  },
  yc = (0, e.createIdentifier)("board.pen-adapter.service");
var bc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x38ba80) {
    return (
      this._adapters["push"](_0x38ba80),
      (0, e.toDisposable)(() => {
        let _0x497e45 = this._adapters["indexOf"](_0x38ba80);
        _0x497e45 >= 0 && this._adapters["splice"](_0x497e45, 1);
      })
    );
  }
  beginPenMode(_0x6930e8) {
    for (let _0x62ce05 of this._adapters)
      if (_0x62ce05.beginPenMode(_0x6930e8)) return true;
    return false;
  }
};
const xc = {
    id: "board.operation.begin-pen",
    type: e.CommandType["OPERATION"],
    handler: (_0x52b2e4, _0x13cc88) =>
      _0x13cc88 ? _0x52b2e4.get(yc).beginPenMode(_0x13cc88) : false,
  },
  Sc = (0, e.createIdentifier)("board.resources-adapter.service");
var Cc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x3ac360) {
    return (
      this._adapters["push"](_0x3ac360),
      (0, e.toDisposable)(() => {
        let _0x5a8184 = this._adapters["indexOf"](_0x3ac360);
        _0x5a8184 >= 0 && this._adapters["splice"](_0x5a8184, 1);
      })
    );
  }
  beginResourcesPanel(_0x165298) {
    for (let _0x3e0000 of this._adapters)
      if (_0x3e0000.beginResourcesPanel(_0x165298)) return true;
    return false;
  }
};
const wc = {
    id: "board.operation.begin-resources",
    type: e.CommandType["OPERATION"],
    handler: (_0x79432b, _0x347b9b) =>
      _0x347b9b ? _0x79432b.get(Sc).beginResourcesPanel(_0x347b9b) : false,
  },
  Tc = {
    id: "board.operation.begin-swimlane",
    type: e.CommandType["OPERATION"],
    handler: (_0x2ad689, _0x3e13b5) =>
      _0x3e13b5 ? _0x2ad689.get(sc).beginSwimlaneMode(_0x3e13b5) : false,
  },
  Ec = (0, e.createIdentifier)("board.translate-adapter.service");
var Dc = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x312e66) {
    return (
      this._adapters["push"](_0x312e66),
      (0, e.toDisposable)(() => {
        let _0x511d46 = this._adapters["indexOf"](_0x312e66);
        _0x511d46 >= 0 && this._adapters["splice"](_0x511d46, 1);
      })
    );
  }
  beginTranslate(_0x225b7b) {
    for (let _0x3a10fa of this._adapters)
      if (_0x3a10fa.beginTranslate(_0x225b7b)) return true;
    return false;
  }
};
const Oc = {
  id: "board.operation.begin-translate",
  type: e.CommandType["OPERATION"],
  handler: (_0x3c7dbc, _0x240839) =>
    _0x240839 ? _0x3c7dbc.get(Ec).beginTranslate(_0x240839) : false,
};
function kc(_0x2f339a, _0x535d2b, _0x18a3eb) {
  return B(_0x2f339a, { parentId: _0x535d2b, worldTransform: _0x18a3eb });
}
function Ac(_0x106bdc, _0x2e63d3) {
  return {
    ..._0x106bdc,
    transform: {
      ..._0x106bdc.transform,
      left: _0x2e63d3.left,
      top: _0x2e63d3.top,
      width: _0x2e63d3.width,
      height: _0x2e63d3.height,
      rotation: _0x2e63d3.rotation ?? 0,
      flipX: _0x2e63d3.flipX,
      flipY: _0x2e63d3.flipY,
    },
  };
}
function jc(_0x4b3b76, _0x24dd42) {
  if (_0x4b3b76.containerData["kind"] !== "swimlane") return _0x4b3b76;
  let _0x45cad2 = Pr(_0x4b3b76, {
    left: _0x24dd42.left ?? 0,
    top: _0x24dd42.top ?? 0,
    width: _0x24dd42.width ?? 0,
    height: _0x24dd42.height ?? 0,
  });
  return _0x45cad2
    ? {
        ..._0x4b3b76,
        containerData: {
          ..._0x4b3b76.containerData,
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          swimlane: _0x45cad2,
        },
      }
    : _0x4b3b76;
}
function Mc(_0x46d8ed, _0x50cf3f = false) {
  return (
    !_0x46d8ed ||
    _0x46d8ed.hidden === true ||
    _0x46d8ed.element["visible"] === false ||
    (!_0x50cf3f && _0x46d8ed.element["locked"] === true) ||
    _0x46d8ed.element["selectable"] === false ||
    _0x46d8ed.element["type"] === s.Connector
  );
}
function Nc(_0x1c27d9, _0x3bac52, _0x55ab7b) {
  var _0x4fcf7a;
  let _0x13bbdb = _0x1c27d9[_0x3bac52],
    _0x5a4b6a = _0x13bbdb == null ? undefined : _0x13bbdb.element,
    _0x270810 =
      (_0x4fcf7a = _0x1c27d9[_0x55ab7b]) == null
        ? undefined
        : _0x4fcf7a.element;
  if (!_0x13bbdb || !_0x5a4b6a || !_0x270810 || _0x5a4b6a.type !== s.Container)
    return false;
  let _0x533777 = _0x5a4b6a.containerData["behavior"];
  return _0x13bbdb.hidden === true ||
    _0x5a4b6a.visible === false ||
    _0x5a4b6a.locked === true ||
    _0x5a4b6a.selectable === false ||
    _0x533777.membershipLocked ||
    !_0x533777.acceptsChildren
    ? false
    : _0x270810.type !== s.Container ||
        (_0x533777.acceptsContainer && _0x533777.allowNested);
}
function Pc(_0x3c68e5, _0x5c8366, _0x91db76) {
  var _0x419b6e, _0x4236d1;
  if (!_0x5c8366) return;
  let _0x5279a8 =
      (_0x419b6e = _0x3c68e5[_0x5c8366]) == null
        ? undefined
        : _0x419b6e.element,
    _0x208dc4 = z(_0x3c68e5, _0x5c8366);
  if (!(
    !_0x5279a8 ||
    _0x5279a8.type !== s.Container ||
    _0x5279a8.containerData["kind"] !== "swimlane" ||
    !_0x208dc4
  ))
    return (_0x4236d1 = Wr(_0x5279a8, _0x208dc4, _0x91db76)) == null
      ? undefined
      : _0x4236d1.lane["id"];
}
function Fc(_0x1ef42f, _0x2f637c, _0x1083a0) {
  return _0x1ef42f.containerData["kind"] === "swimlane" &&
    _0x1ef42f.containerData["swimlane"]
    ? !!Wr(_0x1ef42f, _0x2f637c, _0x1083a0)
    : _r(xr(_0x1ef42f, _0x2f637c).contentBounds, _0x1083a0);
}
function Ic(_0x4d3bf2, _0x4786d8, _0x8a653f, _0x188d1b) {
  var _0x5285d6;
  let _0x4dc1eb = _0x4786d8
      ? (_0x5285d6 = _0x4d3bf2[_0x4786d8]) == null
        ? undefined
        : _0x5285d6.element["parentId"]
      : undefined,
    _0x8c7950 = new Set([_0x8a653f, _0x4786d8 ?? ""]);
  for (; _0x4dc1eb;) {
    if (_0x8c7950.has(_0x4dc1eb)) return;
    let _0x5e5680 = _0x4d3bf2[_0x4dc1eb],
      _0x4871b4 = z(_0x4d3bf2, _0x4dc1eb);
    if (
      (_0x5e5680 == null ? undefined : _0x5e5680.element["type"]) ===
        s.Container &&
      _0x4871b4 &&
      Nc(_0x4d3bf2, _0x4dc1eb, _0x8a653f) &&
      Fc(_0x5e5680.element, _0x4871b4, _0x188d1b)
    )
      return _0x4dc1eb;
    (_0x8c7950.add(_0x4dc1eb),
      (_0x4dc1eb =
        _0x5e5680 == null ? undefined : _0x5e5680.element["parentId"]));
  }
}
function Lc(_0xbc4d45, _0x50dd43, _0x209d07) {
  let _0x42e9b4 = _0xbc4d45[_0x209d07],
    _0x31c0de = _0x42e9b4 == null ? undefined : _0x42e9b4.element["parentId"],
    _0x4cab07 = _0x31c0de ? _0xbc4d45[_0x31c0de] : undefined;
  if (
    (_0x4cab07 == null ? undefined : _0x4cab07.element["type"]) ===
      s.Container &&
    _0x4cab07.element["containerData"].behavior["membershipLocked"]
  )
    return null;
  let _0x7181ce = Ds({
    elementData: _0xbc4d45,
    elementOrder: _0x50dd43,
    activeContainerIds: [_0x209d07],
  });
  return _0x7181ce
    ? {
        parentId: _0x7181ce.containerId,
        expandedOuterBounds: _0x7181ce.expandedOuterBounds,
      }
    : null;
}
function Rc(
  _0x31dbab,
  _0x2401b1,
  _0x2b1c8d,
  _0x551a38,
  _0x440848,
  _0x2b0204 = {},
) {
  return {
    id: Z.id,
    params: {
      unitId: _0x31dbab,
      subUnitId: _0x2401b1,
      elementId: _0x2b1c8d.elementId,
      element: _0x551a38,
      transform: pr(_0x440848),
      ...(_0x2b0204.allowLockedTarget ? { allowLockedTarget: true } : {}),
    },
  };
}
function Q(
  _0x2b5fb3,
  _0x256ddf,
  _0x3bca57,
  _0x386818,
  _0x4bcb5d,
  _0x18af6e,
  _0x3a9fbe = {},
) {
  _0x2b5fb3.set(
    _0x386818.elementId,
    Rc(_0x256ddf, _0x3bca57, _0x386818, _0x4bcb5d, _0x18af6e, _0x3a9fbe),
  );
}
function zc(_0x17ab31, _0x4b7798) {
  let _0x6a8cc7 = _0x4b7798.params,
    _0x6f0733 = _0x17ab31[_0x6a8cc7.elementId];
  _0x6f0733 &&
    (_0x17ab31[_0x6a8cc7.elementId] = {
      ..._0x6f0733,
      element: _0x6a8cc7.element,
      transform: _0x6a8cc7.transform,
    });
}
function Bc(_0x47f889, _0x6d71a6, _0xb0a3fc, _0x1f2bdd = {}) {
  return {
    id: Z.id,
    params: {
      unitId: _0x47f889,
      subUnitId: _0x6d71a6,
      elementId: _0xb0a3fc.elementId,
      element: q(e.Tools["deepClone"](_0xb0a3fc.element)),
      transform: _0xb0a3fc.transform
        ? { ..._0xb0a3fc.transform }
        : _0xb0a3fc.transform,
      ...(_0x1f2bdd.allowLockedTarget ? { allowLockedTarget: true } : {}),
    },
  };
}
function Vc(_0x432183, _0x1e1412) {
  return _0x1e1412.some((_0x92214c) => {
    var _0x482449;
    let _0x2ddf97 = _0x92214c.params;
    return (
      !!_0x2ddf97.elementId &&
      _0x2ddf97.allowLockedTarget !== true &&
      ((_0x482449 = _0x432183[_0x2ddf97.elementId]) == null
        ? undefined
        : _0x482449.element["locked"]) === true
    );
  });
}
function Hc(_0x177523, _0x547c7b) {
  let _0x15b256 = new Map();
  return (
    Object.values(_0x177523).forEach((_0x9d5e18) => {
      var _0x2dfb7d;
      if (_0x9d5e18.element["parentId"] !== _0x547c7b) return;
      let _0x10e1bb =
        (_0x2dfb7d = R(_0x177523, _0x9d5e18.elementId)) == null
          ? undefined
          : _0x2dfb7d.worldTransform;
      _0x10e1bb && _0x15b256.set(_0x9d5e18.elementId, _0x10e1bb);
    }),
    _0x15b256
  );
}
function Uc(_0x2bf28a) {
  let {
    unitId: _0x357578,
    subUnitId: _0x176162,
    containerId: _0xdcd32f,
    elementData: _0x11b7e0,
    originalElementData: _0x32b581,
    childWorldTransforms: _0x156c23,
    updateById: _0x10dfcd,
    undoById: _0x2fa078,
  } = _0x2bf28a;
  _0x156c23.forEach((_0x5e2afe, _0x3fad95) => {
    let _0x49a74f = _0x11b7e0[_0x3fad95];
    if (!_0x49a74f || _0x49a74f.element["parentId"] !== _0xdcd32f) return;
    let _0x5065af = kc(_0x11b7e0, _0xdcd32f, _0x5e2afe),
      _0x13cd5d = Ac(_0x49a74f.element, _0x5065af);
    (_0x2fa078.set(
      _0x3fad95,
      _0x2fa078.get(_0x3fad95) ??
        Bc(_0x357578, _0x176162, _0x32b581[_0x3fad95]),
    ),
      Q(_0x10dfcd, _0x357578, _0x176162, _0x49a74f, _0x13cd5d, _0x5065af),
      zc(_0x11b7e0, _0x10dfcd.get(_0x3fad95)));
  });
}
function Wc(_0x1c1949) {
  var _0x1d72d1;
  let {
    unitId: _0x43cc2a,
    subUnitId: _0x237db0,
    parentId: _0x4dc1fa,
    elementData: _0x23d55c,
    originalElementData: _0x599efe,
    updateById: _0x163859,
    undoById: _0x3ce208,
  } = _0x1c1949;
  if (!_0x4dc1fa) return;
  let _0x4ab401 = _0x23d55c[_0x4dc1fa];
  if (
    (_0x4ab401 == null ? undefined : _0x4ab401.element["type"]) !==
      s.Container ||
    !_0x4ab401.element["containerData"].behavior["membershipLocked"] ||
    oa(_0x4ab401.element)
  )
    return;
  let _0x57f91f = z(_0x23d55c, _0x4dc1fa);
  if (!_0x57f91f) return;
  let _0xc99548 =
    (_0x1d72d1 = ps({
      containerId: _0x4dc1fa,
      elementData: _0x23d55c,
      preview: Es({
        containerId: _0x4dc1fa,
        elementData: _0x23d55c,
        candidateElementIds: [],
      }),
    }).autosized[0]) == null
      ? undefined
      : _0x1d72d1.nextBounds;
  if (
    !_0xc99548 ||
    (_0xc99548.left === _0x57f91f.left &&
      _0xc99548.top === _0x57f91f.top &&
      _0xc99548.width === _0x57f91f.width &&
      _0xc99548.height === _0x57f91f.height)
  )
    return;
  let _0x49da42 = Hc(_0x23d55c, _0x4dc1fa),
    _0x4397e2 = kc(_0x23d55c, _0x4ab401.element["parentId"], {
      ..._0x4ab401.element["transform"],
      ..._0xc99548,
      rotation: 0,
    }),
    _0x36826f = Ac(_0x4ab401.element, _0x4397e2);
  (_0x3ce208.set(
    _0x4dc1fa,
    _0x3ce208.get(_0x4dc1fa) ?? Bc(_0x43cc2a, _0x237db0, _0x599efe[_0x4dc1fa]),
  ),
    Q(_0x163859, _0x43cc2a, _0x237db0, _0x4ab401, _0x36826f, _0x4397e2),
    zc(_0x23d55c, _0x163859.get(_0x4dc1fa)),
    Uc({
      unitId: _0x43cc2a,
      subUnitId: _0x237db0,
      containerId: _0x4dc1fa,
      elementData: _0x23d55c,
      originalElementData: _0x599efe,
      childWorldTransforms: _0x49da42,
      updateById: _0x163859,
      undoById: _0x3ce208,
    }));
}
const Gc = {
  id: "board.operation.commit-container-transform",
  type: e.CommandType["OPERATION"],
  handler: (_0xcb419e, _0x1deefb) => {
    if (!(_0x1deefb != null && _0x1deefb.containerId)) return false;
    let {
        unitId: _0x547d8e,
        subUnitId: _0x2ad203,
        containerId: _0x116599,
        interaction: _0x29c874,
      } = _0x1deefb,
      _0x44ce29 = _0xcb419e.get(N),
      _0x2ad425 = _0x44ce29.getElementData(_0x547d8e, _0x2ad203),
      _0x15c114 = _0x44ce29.getElementOrder(_0x547d8e, _0x2ad203),
      _0x592fee = _0x2ad425[_0x116599];
    if (
      !_0x592fee ||
      _0x592fee.element["type"] !== s.Container ||
      _0x592fee.element["locked"]
    )
      return false;
    let _0x3f0806 = _0x2ad425,
      _0x408d48 = { ..._0x2ad425 },
      _0x167670 = _0x592fee.element,
      _0x4aeb14 = Ac(_0x167670, {
        ..._0x167670.transform,
        ..._0x1deefb.transform,
        rotation: 0,
      });
    _0x29c874 === "resize" && (_0x4aeb14 = jc(_0x4aeb14, _0x4aeb14.transform));
    let _0x309dc5 = new Map(),
      _0xaadfa7 = new Map();
    (_0xaadfa7.set(_0x116599, Bc(_0x547d8e, _0x2ad203, _0x592fee)),
      Q(
        _0x309dc5,
        _0x547d8e,
        _0x2ad203,
        _0x592fee,
        _0x4aeb14,
        _0x4aeb14.transform,
      ),
      zc(_0x408d48, _0x309dc5.get(_0x116599)));
    let _0x2f3791 = z(_0x3f0806, _0x116599),
      _0x28fb4d = z(_0x408d48, _0x116599);
    if (!_0x28fb4d) return false;
    let _0x51341f = Object.values(_0x3f0806)
      .filter((_0x11dcaa) => _0x11dcaa.element["parentId"] === _0x116599)
      .map((_0x13f2f5) => _0x13f2f5.elementId);
    if (_0x29c874 === "move" && _0x167670.parentId) {
      let _0x6ad730 = _0x408d48[_0x167670.parentId];
      if (
        (_0x6ad730 == null ? undefined : _0x6ad730.element["type"]) ===
          s.Container &&
        !_0x6ad730.element["containerData"].behavior["membershipLocked"]
      ) {
        let _0x45c57b = Es({
          containerId: _0x167670.parentId,
          elementData: _0x408d48,
          candidateElementIds: [],
        });
        if (
          ps({
            containerId: _0x167670.parentId,
            elementData: _0x408d48,
            preview: _0x45c57b,
          }).expelled["some"](
            ({ elementId: _0x15447c }) => _0x15447c === _0x116599,
          )
        ) {
          var _0x315c09;
          let _0x58f752 = _0x408d48[_0x116599],
            _0xdedcd9 =
              (_0x315c09 = R(_0x408d48, _0x116599)) == null
                ? undefined
                : _0x315c09.worldTransform;
          if (_0x58f752 && _0xdedcd9) {
            let _0x313f24 = Ic(
                _0x408d48,
                _0x167670.parentId,
                _0x116599,
                _0x28fb4d,
              ),
              _0x436808 = kc(_0x408d48, _0x313f24, _0xdedcd9);
            (Q(
              _0x309dc5,
              _0x547d8e,
              _0x2ad203,
              _0x58f752,
              Ac(
                {
                  ..._0x58f752.element,
                  parentId: _0x313f24,
                  laneId: Pc(_0x408d48, _0x313f24, _0x28fb4d),
                },
                _0x436808,
              ),
              _0x436808,
            ),
              zc(_0x408d48, _0x309dc5.get(_0x116599)));
          }
        }
      }
    }
    if (
      (Wc({
        unitId: _0x547d8e,
        subUnitId: _0x2ad203,
        parentId: _0x167670.parentId,
        elementData: _0x408d48,
        originalElementData: _0x3f0806,
        updateById: _0x309dc5,
        undoById: _0xaadfa7,
      }),
      _0x29c874 === "move")
    ) {
      var _0x293fe9;
      let _0x510c73 = _0x408d48[_0x116599],
        _0x410ab6 =
          (_0x293fe9 = R(_0x408d48, _0x116599)) == null
            ? undefined
            : _0x293fe9.worldTransform;
      if (_0x510c73 && _0x410ab6) {
        let _0x5bf71e = Lc(_0x408d48, _0x15c114, _0x116599);
        if (_0x5bf71e && _0x510c73.element["parentId"] !== _0x5bf71e.parentId) {
          let _0x171394 = _0x408d48[_0x5bf71e.parentId],
            _0x219d00 = z(_0x408d48, _0x5bf71e.parentId);
          if (
            (_0x171394 == null ? undefined : _0x171394.element["type"]) ===
              s.Container &&
            _0x219d00 &&
            _0x5bf71e.expandedOuterBounds &&
            (_0x5bf71e.expandedOuterBounds["left"] !== _0x219d00.left ||
              _0x5bf71e.expandedOuterBounds["top"] !== _0x219d00.top ||
              _0x5bf71e.expandedOuterBounds["width"] !== _0x219d00.width ||
              _0x5bf71e.expandedOuterBounds["height"] !== _0x219d00.height)
          ) {
            let _0x4d51a3 = Hc(_0x408d48, _0x5bf71e.parentId),
              _0x5ecef9 = kc(_0x408d48, _0x171394.element["parentId"], {
                ..._0x171394.element["transform"],
                ..._0x5bf71e.expandedOuterBounds,
                rotation: 0,
              }),
              _0x1b1c40 = Ac(_0x171394.element, _0x5ecef9);
            (_0xaadfa7.set(
              _0x5bf71e.parentId,
              _0xaadfa7.get(_0x5bf71e.parentId) ??
                Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x5bf71e.parentId]),
            ),
              Q(
                _0x309dc5,
                _0x547d8e,
                _0x2ad203,
                _0x171394,
                _0x1b1c40,
                _0x5ecef9,
              ),
              zc(_0x408d48, _0x309dc5.get(_0x5bf71e.parentId)),
              Uc({
                unitId: _0x547d8e,
                subUnitId: _0x2ad203,
                containerId: _0x5bf71e.parentId,
                elementData: _0x408d48,
                originalElementData: _0x3f0806,
                childWorldTransforms: _0x4d51a3,
                updateById: _0x309dc5,
                undoById: _0xaadfa7,
              }));
          }
          let _0xa6f761 = kc(_0x408d48, _0x5bf71e.parentId, _0x410ab6);
          (Q(
            _0x309dc5,
            _0x547d8e,
            _0x2ad203,
            _0x510c73,
            Ac(
              { ..._0x510c73.element, parentId: _0x5bf71e.parentId },
              _0xa6f761,
            ),
            _0xa6f761,
          ),
            zc(_0x408d48, _0x309dc5.get(_0x116599)));
        }
      }
    }
    if (_0x29c874 === "move" && _0x2f3791) {
      let _0x16f742 = {
        x: _0x28fb4d.left - _0x2f3791.left,
        y: _0x28fb4d.top - _0x2f3791.top,
      };
      if (_0x16f742.x !== 0 || _0x16f742.y !== 0) {
        let _0x5084bb = Ut(_0x408d48, _0x116599),
          _0x395a42 = new Set(_0x5084bb),
          _0xb1e8bc = new Set([
            _0x116599,
            ..._0x5084bb.filter((_0x26d689) => {
              var _0x462f45;
              return (
                ((_0x462f45 = _0x408d48[_0x26d689]) == null
                  ? undefined
                  : _0x462f45.element["type"]) !== s.Connector
              );
            }),
          ]);
        (_0x5084bb.forEach((_0x17eeb2) => {
          let _0x697cd8 = _0x408d48[_0x17eeb2];
          if (!X(_0x697cd8)) return;
          let _0x1131d4 = rr(_0x697cd8.element, _0x16f742);
          (_0xaadfa7.set(
            _0x17eeb2,
            Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x17eeb2]),
          ),
            Q(
              _0x309dc5,
              _0x547d8e,
              _0x2ad203,
              _0x697cd8,
              _0x1131d4,
              _0x1131d4.transform,
            ),
            zc(_0x408d48, _0x309dc5.get(_0x17eeb2)));
        }),
          Object.values(_0x408d48).forEach((_0x58adbc) => {
            if (!X(_0x58adbc) || _0x395a42.has(_0x58adbc.elementId)) return;
            let _0x3e6989 = dr(_0x58adbc.element, _0xb1e8bc, _0x16f742);
            _0x3e6989 !== _0x58adbc.element &&
              (_0xaadfa7.set(
                _0x58adbc.elementId,
                _0xaadfa7.get(_0x58adbc.elementId) ??
                  Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x58adbc.elementId]),
              ),
              Q(
                _0x309dc5,
                _0x547d8e,
                _0x2ad203,
                _0x58adbc,
                _0x3e6989,
                _0x3e6989.transform,
              ),
              zc(_0x408d48, _0x309dc5.get(_0x58adbc.elementId)));
          }));
      }
    }
    _0x29c874 === "resize" &&
      _0x2f3791 &&
      _0x51341f.forEach((_0x30cb4e) => {
        var _0x17f814;
        let _0x6870fe = _0x3f0806[_0x30cb4e],
          _0x4a9734 =
            (_0x17f814 = R(_0x3f0806, _0x30cb4e)) == null
              ? undefined
              : _0x17f814.worldTransform;
        if (!_0x6870fe || !_0x4a9734) return;
        let _0xbe90a7 = kc(_0x408d48, _0x116599, _0x4a9734),
          _0x4a94c5 = Ac(_0x6870fe.element, _0xbe90a7);
        (_0xaadfa7.set(_0x30cb4e, Bc(_0x547d8e, _0x2ad203, _0x6870fe)),
          Q(_0x309dc5, _0x547d8e, _0x2ad203, _0x6870fe, _0x4a94c5, _0xbe90a7),
          zc(_0x408d48, _0x309dc5.get(_0x30cb4e)));
      });
    let _0x9f1b01 = _0x408d48[_0x116599];
    if (!_0x9f1b01 || _0x9f1b01.element["type"] !== s.Container) return false;
    let _0x56e61f = _0x9f1b01.element,
      _0x306b9c = xr(_0x56e61f, _0x28fb4d),
      _0x11511a = new Set([_0x116599, ...Ut(_0x408d48, _0x116599)]),
      _0x3aa90b = ps({
        containerId: _0x116599,
        elementData: _0x408d48,
        preview: Es({
          containerId: _0x116599,
          elementData: _0x408d48,
          candidateElementIds: Object.values(_0x408d48)
            .map((_0x38d3a5) => _0x38d3a5.elementId)
            .filter((_0x37fd0c) => !_0x11511a.has(_0x37fd0c)),
        }),
      });
    if (
      _0x56e61f.containerData["behavior"].membershipLocked &&
      !oa(_0x56e61f) &&
      _0x3aa90b.autosized["length"] > 0
    ) {
      let _0x1bde6b = _0x3aa90b.autosized[0].nextBounds;
      if (
        _0x1bde6b.left !== _0x28fb4d.left ||
        _0x1bde6b.top !== _0x28fb4d.top ||
        _0x1bde6b.width !== _0x28fb4d.width ||
        _0x1bde6b.height !== _0x28fb4d.height
      ) {
        let _0xe16660 = Hc(_0x408d48, _0x116599),
          _0x225540 = kc(_0x408d48, _0x56e61f.parentId, {
            ..._0x56e61f.transform,
            ..._0x1bde6b,
            rotation: 0,
          });
        ((_0x56e61f = Ac(_0x56e61f, _0x225540)),
          Q(_0x309dc5, _0x547d8e, _0x2ad203, _0x9f1b01, _0x56e61f, _0x225540),
          zc(_0x408d48, _0x309dc5.get(_0x116599)),
          Uc({
            unitId: _0x547d8e,
            subUnitId: _0x2ad203,
            containerId: _0x116599,
            elementData: _0x408d48,
            originalElementData: _0x3f0806,
            childWorldTransforms: _0xe16660,
            updateById: _0x309dc5,
            undoById: _0xaadfa7,
          }),
          (_0x306b9c = xr(_0x56e61f, _0x1bde6b)));
      }
    }
    if (!_0x56e61f.containerData["behavior"].membershipLocked) {
      var _0x8d9a3e;
      let _0x52e42e = _0x56e61f.parentId
          ? (_0x8d9a3e = _0x408d48[_0x56e61f.parentId]) == null
            ? undefined
            : _0x8d9a3e.element
          : undefined,
        _0x166247 =
          (_0x52e42e == null ? undefined : _0x52e42e.type) === s.Container &&
          _0x52e42e.containerData["behavior"].membershipLocked,
        _0x53cccd = ps({
          containerId: _0x116599,
          elementData: _0x408d48,
          preview: Es({
            containerId: _0x116599,
            elementData: _0x408d48,
            candidateElementIds: Object.values(_0x408d48)
              .map((_0xbc4edc) => _0xbc4edc.elementId)
              .filter((_0x27b132) => !_0x11511a.has(_0x27b132)),
            previewOuterBounds: _0x306b9c.outerBounds,
          }),
        });
      if (_0x53cccd.autosized["length"] > 0) {
        let _0x44b12c = _0x53cccd.autosized[0].nextBounds;
        if (
          _0x44b12c.left !== _0x306b9c.outerBounds["left"] ||
          _0x44b12c.top !== _0x306b9c.outerBounds["top"] ||
          _0x44b12c.width !== _0x306b9c.outerBounds["width"] ||
          _0x44b12c.height !== _0x306b9c.outerBounds["height"]
        ) {
          let _0x2f943f = Hc(_0x408d48, _0x116599),
            _0x22b4ad = kc(_0x408d48, _0x56e61f.parentId, {
              ..._0x56e61f.transform,
              ..._0x44b12c,
              rotation: 0,
            });
          ((_0x56e61f = Ac(_0x56e61f, _0x22b4ad)),
            Q(_0x309dc5, _0x547d8e, _0x2ad203, _0x9f1b01, _0x56e61f, _0x22b4ad),
            zc(_0x408d48, _0x309dc5.get(_0x116599)),
            Uc({
              unitId: _0x547d8e,
              subUnitId: _0x2ad203,
              containerId: _0x116599,
              elementData: _0x408d48,
              originalElementData: _0x3f0806,
              childWorldTransforms: _0x2f943f,
              updateById: _0x309dc5,
              undoById: _0xaadfa7,
            }),
            (_0x306b9c = xr(_0x56e61f, _0x44b12c)));
        }
      }
      (_0x29c874 === "resize" &&
        !_0x166247 &&
        _0x53cccd.expelled["forEach"](({ elementId: _0x30af1d }) => {
          var _0x5e860e;
          let _0xc00e81 = _0x408d48[_0x30af1d];
          if (!_0xc00e81 || Mc(_0xc00e81)) return;
          let _0x222ac0 =
              (_0x5e860e = R(_0x408d48, _0x30af1d)) == null
                ? undefined
                : _0x5e860e.worldTransform,
            _0xcb94d6 = z(_0x408d48, _0x30af1d);
          if (!_0x222ac0 || !_0xcb94d6) return;
          let _0x40ee26 =
              _0x56e61f.parentId && Nc(_0x408d48, _0x56e61f.parentId, _0x30af1d)
                ? _0x56e61f.parentId
                : undefined,
            _0x43bc01 = kc(_0x408d48, _0x40ee26, _0x222ac0),
            _0x5b7ad7 = Ac(
              {
                ..._0xc00e81.element,
                parentId: _0x40ee26,
                laneId: Pc(_0x408d48, _0x40ee26, _0xcb94d6),
              },
              _0x43bc01,
            );
          (_0xaadfa7.set(
            _0x30af1d,
            _0xaadfa7.get(_0x30af1d) ??
              Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x30af1d]),
          ),
            Q(_0x309dc5, _0x547d8e, _0x2ad203, _0xc00e81, _0x5b7ad7, _0x43bc01),
            zc(_0x408d48, _0x309dc5.get(_0x30af1d)));
        }),
        _0x53cccd.captured["forEach"](({ elementId: _0x1f7bc1 }) => {
          var _0x43c720;
          let _0x11c777 = _0x408d48[_0x1f7bc1],
            _0x37bad7 =
              (_0x11c777 == null ? undefined : _0x11c777.element["locked"]) ===
                true &&
              _0x56e61f.containerData["capturePolicy"]
                .allowCaptureLockedObjects === true;
          if (
            Mc(
              _0x11c777,
              _0x56e61f.containerData["capturePolicy"]
                .allowCaptureLockedObjects === true,
            )
          )
            return;
          let _0x16e8e0 =
              (_0x43c720 = R(_0x408d48, _0x1f7bc1)) == null
                ? undefined
                : _0x43c720.worldTransform,
            _0x22915f = z(_0x408d48, _0x1f7bc1);
          if (!_0x16e8e0 || !_0x22915f) return;
          let _0x4d0504 = kc(_0x408d48, _0x116599, _0x16e8e0),
            _0x569eaf = Ac(
              {
                ..._0x11c777.element,
                parentId: _0x116599,
                laneId: Pc(_0x408d48, _0x116599, _0x22915f),
              },
              _0x4d0504,
            );
          (_0xaadfa7.set(
            _0x1f7bc1,
            Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x1f7bc1], {
              allowLockedTarget: _0x37bad7,
            }),
          ),
            Q(
              _0x309dc5,
              _0x547d8e,
              _0x2ad203,
              _0x11c777,
              _0x569eaf,
              _0x4d0504,
              { allowLockedTarget: _0x37bad7 },
            ),
            zc(_0x408d48, _0x309dc5.get(_0x1f7bc1)));
        }));
    }
    Object.values(_0x408d48).forEach((_0x51a6a5) => {
      var _0x28cbc6;
      if (!X(_0x51a6a5)) return;
      let _0x3ac1b2 = fr(_0x51a6a5.element, new Set([_0x116599]), _0x408d48);
      _0x3ac1b2 !== _0x51a6a5.element &&
        (_0xaadfa7.set(
          _0x51a6a5.elementId,
          _0xaadfa7.get(_0x51a6a5.elementId) ??
            Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x51a6a5.elementId]),
        ),
        Q(
          _0x309dc5,
          _0x547d8e,
          _0x2ad203,
          _0x51a6a5,
          _0x3ac1b2,
          _0x3ac1b2.transform,
        ),
        zc(_0x408d48, _0x309dc5.get(_0x51a6a5.elementId)));
      let _0x453c20 = _0x408d48[_0x51a6a5.elementId];
      if (!X(_0x453c20)) return;
      _0x3ac1b2 = _0x453c20.element;
      let _0x42a7b6 = aa(_0x408d48, _0x3ac1b2);
      if (
        _0x3ac1b2.parentId === _0x42a7b6.parentId &&
        _0x3ac1b2.laneId === _0x42a7b6.laneId
      )
        return;
      let _0x1600e7 =
        (_0x28cbc6 = R(_0x408d48, _0x453c20.elementId)) == null
          ? undefined
          : _0x28cbc6.worldTransform;
      if (!_0x1600e7) return;
      let _0x9add06 = kc(_0x408d48, _0x42a7b6.parentId, _0x1600e7),
        _0x371eaf = Ac(
          {
            ..._0x3ac1b2,
            parentId: _0x42a7b6.parentId,
            laneId: _0x42a7b6.laneId,
          },
          _0x9add06,
        );
      (_0xaadfa7.set(
        _0x453c20.elementId,
        _0xaadfa7.get(_0x453c20.elementId) ??
          Bc(_0x547d8e, _0x2ad203, _0x3f0806[_0x453c20.elementId]),
      ),
        Q(_0x309dc5, _0x547d8e, _0x2ad203, _0x453c20, _0x371eaf, _0x9add06),
        zc(_0x408d48, _0x309dc5.get(_0x453c20.elementId)));
    });
    let _0x3570a3 = Array.from(_0x309dc5.values());
    return _0x3570a3.length === 0 ||
      Vc(_0x3f0806, _0x3570a3) ||
      !Aa(_0x3f0806, _0x3570a3) ||
      !(0, e.sequenceExecute)(_0x3570a3, _0xcb419e.get(e.ICommandService))
        .result
      ? false
      : (_0xcb419e
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x547d8e,
            redoMutations: _0x3570a3,
            undoMutations: Array.from(_0xaadfa7.values()).reverse(),
          }),
        true);
  },
};
function Kc(_0x39e264, _0x1b8220) {
  return {
    ..._0x39e264,
    transform: {
      ..._0x39e264.transform,
      left: _0x1b8220.left,
      top: _0x1b8220.top,
      width: _0x1b8220.width,
      height: _0x1b8220.height,
      rotation: _0x1b8220.angle,
      flipX: _0x1b8220.flipX,
      flipY: _0x1b8220.flipY,
    },
  };
}
function qc(_0xdefcae, _0x157910, _0x1fbc13) {
  var _0x303620;
  if (!_0x157910) return true;
  let _0x3b557d =
    (_0x303620 = _0xdefcae[_0x157910]) == null ? undefined : _0x303620.element;
  if (!_0x3b557d || _0x3b557d.type !== s.Container) return false;
  let _0xf88bcb = _0x3b557d.containerData["behavior"];
  return _0xf88bcb.membershipLocked || !_0xf88bcb.acceptsChildren
    ? false
    : _0x1fbc13.every((_0x72dd23) => {
        var _0xf7218e;
        let _0x258a38 =
          (_0xf7218e = _0xdefcae[_0x72dd23]) == null
            ? undefined
            : _0xf7218e.element;
        return (
          (_0x258a38 == null ? undefined : _0x258a38.type) !== s.Container ||
          (_0xf88bcb.acceptsContainer && _0xf88bcb.allowNested)
        );
      });
}
function Jc(_0x1c3d89, _0x14b7c2, _0x4c3324) {
  var _0x265912, _0x34f4c0;
  if (!_0x14b7c2 || !_0x4c3324) return;
  let _0x20f038 =
      (_0x265912 = _0x1c3d89[_0x14b7c2]) == null
        ? undefined
        : _0x265912.element,
    _0x416063 = z(_0x1c3d89, _0x14b7c2);
  if (!(
    !_0x20f038 ||
    _0x20f038.type !== s.Container ||
    _0x20f038.containerData["kind"] !== "swimlane" ||
    !_0x416063
  ))
    return (_0x34f4c0 = Wr(_0x20f038, _0x416063, _0x4c3324)) == null
      ? undefined
      : _0x34f4c0.lane["id"];
}
const Yc = {
    id: "board.operation.disband-container",
    type: e.CommandType["OPERATION"],
    handler: (_0x5ee537, _0x32134f) => {
      if (!(_0x32134f != null && _0x32134f.containerId)) return false;
      let {
          unitId: _0x466614,
          subUnitId: _0x4e7b10,
          containerId: _0x28559a,
        } = _0x32134f,
        _0x5f58a0 = _0x5ee537.get(N),
        _0x20e095 = _0x5f58a0.getElementData(_0x466614, _0x4e7b10),
        _0x52265c = _0x5f58a0.getElementOrder(_0x466614, _0x4e7b10),
        _0x58c853 = _0x20e095[_0x28559a];
      if (
        !_0x58c853 ||
        _0x58c853.element["type"] !== s.Container ||
        _0x58c853.element["locked"]
      )
        return false;
      let _0x504b71 = _0x58c853.element["parentId"],
        _0x1d04c3 = _0x52265c.filter((_0x3c65a9) => {
          var _0x156e5b;
          return (
            ((_0x156e5b = _0x20e095[_0x3c65a9]) == null
              ? undefined
              : _0x156e5b.element["parentId"]) === _0x28559a
          );
        });
      if (!qc(_0x20e095, _0x504b71, _0x1d04c3)) return false;
      let _0x439f7d = [],
        _0x5b9785 = { ..._0x20e095 },
        _0x1dbca7 = (_0x5949b7, _0x54e83b, _0x202b1a) => {
          ((_0x5b9785[_0x5949b7.elementId] = {
            ..._0x5949b7,
            element: _0x54e83b,
            transform: _0x202b1a,
          }),
            _0x439f7d.push({
              id: Z.id,
              params: {
                unitId: _0x466614,
                subUnitId: _0x4e7b10,
                elementId: _0x5949b7.elementId,
                element: _0x54e83b,
                transform: _0x202b1a,
              },
            }));
        };
      (_0x1d04c3.forEach((_0x53490b) => {
        var _0xb5548e;
        let _0x38ca22 = _0x20e095[_0x53490b];
        if (
          (_0x38ca22 == null ? undefined : _0x38ca22.element["type"]) ===
          s.Connector
        )
          return;
        let _0x2b421e =
            (_0xb5548e = R(_0x20e095, _0x53490b)) == null
              ? undefined
              : _0xb5548e.worldTransform,
          _0x2be451 = z(_0x20e095, _0x53490b);
        if (!_0x38ca22 || !_0x2b421e) return;
        let _0x1c63d8 = V(
            B(_0x20e095, {
              parentId: _0x504b71,
              worldTransform: Xt(V(_0x2b421e)),
            }),
          ),
          _0x49a238 = Kc(
            {
              ..._0x38ca22.element,
              parentId: _0x504b71,
              laneId: Jc(_0x20e095, _0x504b71, _0x2be451),
            },
            _0x1c63d8,
          );
        _0x1dbca7(_0x38ca22, _0x49a238, _0x1c63d8);
      }),
        _0x1d04c3.forEach((_0x110c3b) => {
          var _0x410c08;
          let _0x42568f = _0x20e095[_0x110c3b];
          if (!_0x42568f || _0x42568f.element["type"] !== s.Connector) return;
          let _0x72c48e =
            (_0x410c08 = R(_0x20e095, _0x110c3b)) == null
              ? undefined
              : _0x410c08.worldTransform;
          if (!_0x72c48e) return;
          let _0x2cbf1f = { ..._0x42568f.element, parentId: _0x504b71 },
            _0x14a778 = aa(_0x5b9785, _0x2cbf1f),
            _0x5908c4 = V(
              B(_0x5b9785, {
                parentId: _0x14a778.parentId,
                worldTransform: Xt(V(_0x72c48e)),
              }),
            ),
            _0x27aec9 = Kc(
              {
                ..._0x42568f.element,
                parentId: _0x14a778.parentId,
                laneId: _0x14a778.laneId,
              },
              _0x5908c4,
            );
          _0x1dbca7(_0x42568f, _0x27aec9, _0x5908c4);
        }));
      let _0x517153 = [
          ..._0x439f7d,
          {
            id: us.id,
            params: {
              unitId: _0x466614,
              subUnitId: _0x4e7b10,
              elementId: _0x28559a,
            },
          },
        ],
        _0x180e1c = [
          {
            id: xo.id,
            params: {
              unitId: _0x466614,
              subUnitId: _0x4e7b10,
              element: q(e.Tools["deepClone"](_0x58c853.element)),
              insertIndex: _0x52265c.indexOf(_0x28559a),
            },
          },
          ..._0x1d04c3.map((_0x18a0ad) => {
            let _0x26f2e2 = _0x20e095[_0x18a0ad];
            return {
              id: Z.id,
              params: {
                unitId: _0x466614,
                subUnitId: _0x4e7b10,
                elementId: _0x18a0ad,
                element: q(e.Tools["deepClone"](_0x26f2e2.element)),
                transform: _0x26f2e2.transform
                  ? { ..._0x26f2e2.transform }
                  : _0x26f2e2.transform,
              },
            };
          }),
        ];
      return !ja(_0x20e095, _0x517153) ||
        !(0, e.sequenceExecute)(_0x517153, _0x5ee537.get(e.ICommandService))
          .result
        ? false
        : (_0x5ee537
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x466614,
              redoMutations: _0x517153,
              undoMutations: _0x180e1c,
            }),
          true);
    },
  },
  Xc = "mindmap";
function Zc(_0x3cefb9) {
  return (_0x3cefb9 == null ? undefined : _0x3cefb9.custom) ?? null;
}
function Qc(_0x2889cd) {
  var _0x44f75b;
  return (
    ((_0x44f75b = Zc(_0x2889cd)) == null ||
    (_0x44f75b = _0x44f75b.structured) == null
      ? undefined
      : _0x44f75b.modeId) === Xc
  );
}
function $c(_0x5ece86) {
  var _0x15fa48;
  let _0x36d677 =
    (_0x15fa48 = Zc(_0x5ece86)) == null ? undefined : _0x15fa48.structured;
  return (
    (_0x36d677 == null ? undefined : _0x36d677.modeId) === "mindmap" &&
    _0x36d677.semanticRole === "mindmap-node"
  );
}
function el(_0x287640) {
  var _0x5eecd0, _0x823845;
  let _0x4e2f59 = Zc(_0x287640);
  return (
    (_0x4e2f59 == null || (_0x5eecd0 = _0x4e2f59.structured) == null
      ? undefined
      : _0x5eecd0.modeId) === "mindmap" &&
    ((_0x823845 = _0x4e2f59.mindmap) == null
      ? undefined
      : _0x823845.managed) === true
  );
}
function tl(_0x116798, _0x3f6a0e) {
  let _0x20ae93 = Zc(_0x116798),
    _0x7d33ed = _0x20ae93 == null ? undefined : _0x20ae93.structured,
    _0x4c75b9 = _0x20ae93 == null ? undefined : _0x20ae93.mindmap;
  if (
    (_0x7d33ed == null ? undefined : _0x7d33ed.modeId) !== "mindmap" ||
    !_0x4c75b9
  )
    return _0x116798;
  let _0x418f5c = (_0x515a72) =>
      typeof _0x515a72 == "string"
        ? (_0x3f6a0e.get(_0x515a72) ?? _0x515a72)
        : _0x515a72,
    _0x4932f6 = {
      ..._0x4c75b9,
      ...(_0x7d33ed.semanticRole === "mindmap-container"
        ? { rootNodeId: _0x418f5c(_0x4c75b9.rootNodeId) }
        : null),
      ...(_0x7d33ed.semanticRole === "mindmap-node"
        ? { parentNodeId: _0x418f5c(_0x4c75b9.parentNodeId) }
        : null),
      ...(_0x7d33ed.semanticRole === "mindmap-tree-edge"
        ? {
            parentNodeId: _0x418f5c(_0x4c75b9.parentNodeId),
            childNodeId: _0x418f5c(_0x4c75b9.childNodeId),
          }
        : null),
      ...(_0x7d33ed.semanticRole === "mindmap-node-decoration"
        ? { ownerNodeId: _0x418f5c(_0x4c75b9.ownerNodeId) }
        : null),
    };
  return {
    ..._0x116798,
    custom: {
      ...(_0x116798.custom ?? {}),
      structured: {
        ..._0x7d33ed,
        structureScopeId: _0x418f5c(_0x7d33ed.structureScopeId),
      },
      mindmap: _0x4932f6,
    },
  };
}
const nl = { left: 0, top: 0, width: 640, height: 420 };
function rl(_0x34dfeb) {
  return _0x34dfeb + "-" + (0, e.generateRandomId)(6);
}
function il(_0x3e9d11) {
  return {
    left: Number.isFinite(_0x3e9d11 == null ? undefined : _0x3e9d11.left)
      ? _0x3e9d11.left
      : nl.left,
    top: Number.isFinite(_0x3e9d11 == null ? undefined : _0x3e9d11.top)
      ? _0x3e9d11.top
      : nl.top,
    width:
      Number.isFinite(_0x3e9d11 == null ? undefined : _0x3e9d11.width) &&
      _0x3e9d11.width > 0
        ? _0x3e9d11.width
        : nl.width,
    height:
      Number.isFinite(_0x3e9d11 == null ? undefined : _0x3e9d11.height) &&
      _0x3e9d11.height > 0
        ? _0x3e9d11.height
        : nl.height,
  };
}
function al(_0x444be6) {
  let _0x1b7e1 = _0x444be6.reduce(
    (_0x3d78bb, _0x1af947) => (
      (_0x3d78bb[_0x1af947.id] = {
        unitId: "",
        subUnitId: "",
        elementId: _0x1af947.id,
        element: _0x1af947,
      }),
      _0x3d78bb
    ),
    {},
  );
  return _0x444be6.flatMap((_0x49e5d8) => z(_0x1b7e1, _0x49e5d8.id) ?? []);
}
function ol(_0x511bd7) {
  let _0x2076d1 = br(al(_0x511bd7.elements)),
    _0x5b38ee = _0x511bd7.bounds ? il(_0x511bd7.bounds) : null;
  return _0x5b38ee && _0x2076d1
    ? il(br([_0x5b38ee, _0x2076d1]))
    : _0x5b38ee || il(_0x2076d1);
}
function sl(_0x12d359) {
  if (!_0x12d359.bounds) return false;
  let _0x5aa948 = il(_0x12d359.bounds),
    _0x59acd5 = ol(_0x12d359);
  return (
    _0x59acd5.left < _0x5aa948.left ||
    _0x59acd5.top < _0x5aa948.top ||
    U(_0x59acd5) > U(_0x5aa948) ||
    W(_0x59acd5) > W(_0x5aa948)
  );
}
function cl(_0x5d2e96) {
  return (_0x5d2e96 == null ? undefined : _0x5d2e96.type) === s.Container;
}
function ll(_0x53735e, _0x37da6d) {
  return { x: _0x53735e.x + _0x37da6d.x, y: _0x53735e.y + _0x37da6d.y };
}
function ul(_0x38d763, _0x2c6fb8, _0x17a2cc) {
  return _0x38d763.kind === "free"
    ? {
        ..._0x38d763,
        x: _0x38d763.x + _0x17a2cc.x,
        y: _0x38d763.y + _0x17a2cc.y,
      }
    : {
        ..._0x38d763,
        shapeId: _0x2c6fb8.get(_0x38d763.shapeId) ?? _0x38d763.shapeId,
        ...(_0x38d763.fallbackPoint
          ? { fallbackPoint: ll(_0x38d763.fallbackPoint, _0x17a2cc) }
          : {}),
      };
}
function dl(_0x3e153a, _0x5610ce) {
  return {
    ..._0x3e153a,
    x: _0x3e153a.x + _0x5610ce.x,
    y: _0x3e153a.y + _0x5610ce.y,
  };
}
function fl(_0x258938, _0x5c2bee, _0x1c50da) {
  return {
    ..._0x258938,
    x: _0x258938.x + _0x1c50da.x,
    y: _0x258938.y + _0x1c50da.y,
    ...(_0x258938.endpoint
      ? { endpoint: ul(_0x258938.endpoint, _0x5c2bee, _0x1c50da) }
      : {}),
  };
}
function pl(_0x204bc7, _0x584fa7) {
  return {
    ..._0x204bc7,
    x: _0x204bc7.x + _0x584fa7.x,
    y: _0x204bc7.y + _0x584fa7.y,
  };
}
function ml(_0x5bad2f, _0x45827e, _0x8257f) {
  var _0x257451, _0x1af11f, _0x3b8566, _0x554fde;
  return {
    ..._0x5bad2f,
    connectorData: {
      ..._0x5bad2f.connectorData,
      start: ul(_0x5bad2f.connectorData["start"], _0x45827e, _0x8257f),
      end: ul(_0x5bad2f.connectorData["end"], _0x45827e, _0x8257f),
      waypoints:
        (_0x257451 = _0x5bad2f.connectorData["waypoints"]) == null
          ? undefined
          : _0x257451.map((_0x3d00f5) => dl(_0x3d00f5, _0x8257f)),
      orthogonalData: _0x5bad2f.connectorData["orthogonalData"]
        ? {
            ..._0x5bad2f.connectorData["orthogonalData"],
            routePoints:
              (_0x1af11f =
                _0x5bad2f.connectorData["orthogonalData"].routePoints) == null
                ? undefined
                : _0x1af11f.map((_0x634077) => dl(_0x634077, _0x8257f)),
          }
        : _0x5bad2f.connectorData["orthogonalData"],
      curveData: _0x5bad2f.connectorData["curveData"]
        ? {
            ..._0x5bad2f.connectorData["curveData"],
            anchors:
              (_0x3b8566 = _0x5bad2f.connectorData["curveData"].anchors) == null
                ? undefined
                : _0x3b8566.map((_0x17435b) =>
                    fl(_0x17435b, _0x45827e, _0x8257f),
                  ),
            controls:
              (_0x554fde = _0x5bad2f.connectorData["curveData"].controls) ==
              null
                ? undefined
                : _0x554fde.map((_0x3cd859) => pl(_0x3cd859, _0x8257f)),
          }
        : _0x5bad2f.connectorData["curveData"],
    },
  };
}
function hl(_0x571616, _0x391e96) {
  return tl(
    _0x571616.type === s.Group
      ? {
          ..._0x571616,
          children: _0x571616.children["map"](
            (_0x17e405) => _0x391e96.get(_0x17e405) ?? _0x17e405,
          ),
        }
      : _0x571616,
    _0x391e96,
  );
}
function gl(_0x1ebf01) {
  let _0x1fe9ef = ol(_0x1ebf01.draft),
    _0xed7edf = _0x1ebf01.createId ?? rl,
    _0x26977f = _0xed7edf("container"),
    _0x703138 = new Map(),
    _0x42c44b = new Map(
      _0x1ebf01.draft["elements"].map((_0x538ecf) => [_0x538ecf.id, _0x538ecf]),
    );
  _0x1ebf01.draft["elements"].forEach((_0x148cab) => {
    _0x703138.set(_0x148cab.id, _0xed7edf(_0x148cab.id));
  });
  let _0x28c78b = fi({
      id: _0x26977f,
      title: _0x1ebf01.containerName ?? _0x1ebf01.draft["title"],
      left: _0x1ebf01.position["left"],
      top: _0x1ebf01.position["top"],
      width: _0x1fe9ef.width,
      height: _0x1fe9ef.height,
    }),
    _0x46769b = _0x28c78b.containerData["padding"],
    _0xe6b20b =
      _0x28c78b.containerData["titleVisible"] === false
        ? 0
        : (_0x28c78b.containerData["headerSize"] ?? 0);
  ((_0x28c78b.transform["width"] =
    _0x1fe9ef.width + _0x46769b.left + _0x46769b.right),
    (_0x28c78b.transform["height"] =
      _0x1fe9ef.height + _0xe6b20b + _0x46769b.top + _0x46769b.bottom));
  let _0x2ffbc0 = {
      x: _0x1ebf01.position["left"] + _0x46769b.left - _0x1fe9ef.left,
      y: _0x1ebf01.position["top"] + _0xe6b20b + _0x46769b.top - _0x1fe9ef.top,
    },
    _0x1c7d00 = _0x1ebf01.draft["elements"].map((_0x1a451c) => {
      let _0x501f3f = e.Tools["deepClone"](_0x1a451c),
        _0x410adf = _0x1a451c.parentId
          ? _0x42c44b.get(_0x1a451c.parentId)
          : undefined,
        _0x1de454 =
          !!_0x1a451c.parentId &&
          cl(_0x410adf) &&
          _0x703138.has(_0x1a451c.parentId);
      return (
        (_0x501f3f.id = _0x703138.get(_0x1a451c.id)),
        (_0x501f3f.parentId = _0x1de454
          ? _0x703138.get(_0x1a451c.parentId)
          : _0x26977f),
        _0x1de454 ||
          (_0x501f3f.transform = {
            ..._0x501f3f.transform,
            left:
              (_0x501f3f.transform["left"] ?? 0) +
              _0x2ffbc0.x -
              _0x1ebf01.position["left"],
            top:
              (_0x501f3f.transform["top"] ?? 0) +
              _0x2ffbc0.y -
              _0x1ebf01.position["top"],
          }),
        _0x501f3f.type === s.Connector &&
          (_0x501f3f = ml(_0x501f3f, _0x703138, _0x2ffbc0)),
        hl(_0x501f3f, _0x703138)
      );
    }),
    _0x41deed = {
      left: _0x1ebf01.position["left"],
      top: _0x1ebf01.position["top"],
      width:
        U({
          left: _0x1ebf01.position["left"],
          top: _0x1ebf01.position["top"],
          width: _0x28c78b.transform["width"] ?? 0,
          height: _0x28c78b.transform["height"] ?? 0,
        }) - _0x1ebf01.position["left"],
      height:
        W({
          left: _0x1ebf01.position["left"],
          top: _0x1ebf01.position["top"],
          width: _0x28c78b.transform["width"] ?? 0,
          height: _0x28c78b.transform["height"] ?? 0,
        }) - _0x1ebf01.position["top"],
    };
  return {
    containerId: _0x26977f,
    elements: [_0x28c78b, ..._0x1c7d00],
    elementIdMap: Object.fromEntries(_0x703138),
    bounds: _0x41deed,
  };
}
const _l = {
    id: "board.operation.insert-draft",
    type: e.CommandType["OPERATION"],
    handler: (_0x34700f, _0x4a6310) => {
      if (!_0x4a6310 || _0x4a6310.draft["elements"].length === 0) return false;
      let _0x3a0460 = gl({
        draft: _0x4a6310.draft,
        containerName: _0x4a6310.containerName,
        position: _0x4a6310.position,
      });
      return _0x34700f
        .get(e.ICommandService)
        .syncExecuteCommand(ic.id, {
          unitId: _0x4a6310.unitId,
          subUnitId: _0x4a6310.subUnitId,
          elements: _0x3a0460.elements,
          insertIndex: _0x4a6310.insertIndex,
        })
        ? _0x3a0460
        : false;
    },
  },
  vl = {
    id: "board.operation.insert-table",
    type: e.CommandType["OPERATION"],
    handler: (_0x11f49e, _0x2dfbf5) =>
      !_0x2dfbf5 ||
      !_0x2dfbf5.unitId ||
      !_0x2dfbf5.subUnitId ||
      !Number.isFinite(_0x2dfbf5.left) ||
      !Number.isFinite(_0x2dfbf5.top)
        ? false
        : _0x11f49e.get(mo).insertTable(_0x2dfbf5),
  },
  yl = {
    id: "board.operation.remove-element",
    type: e.CommandType["OPERATION"],
    handler: (_0x1c45e3, _0x197811) =>
      !_0x197811 || !_0x197811.elementId
        ? false
        : Oo.handler(_0x1c45e3, {
            unitId: _0x197811.unitId,
            subUnitId: _0x197811.subUnitId,
            elementIds: [_0x197811.elementId],
          }),
  };
function bl(_0x36c47a) {
  return [..._0x36c47a]
    .sort((_0x4649b1, _0x229014) => _0x4649b1.order - _0x229014.order)
    .map((_0x13475e, _0x1add0a) => ({ ..._0x13475e, order: _0x1add0a }));
}
function xl(_0x3a167e, _0x4fdca6) {
  let _0x37153e = new Map(
    _0x4fdca6.map((_0x44d2f1) => [_0x44d2f1.id, _0x44d2f1]),
  );
  return _0x3a167e.lanes["some"]((_0x541276) => {
    if (_0x541276.locked !== true) return false;
    let _0x10e5fb = _0x37153e.get(_0x541276.id);
    return (
      !_0x10e5fb ||
      _0x10e5fb.title !== _0x541276.title ||
      _0x10e5fb.order !== _0x541276.order ||
      _0x10e5fb.size !== _0x541276.size ||
      _0x10e5fb.minSize !== _0x541276.minSize ||
      _0x10e5fb.locked !== _0x541276.locked ||
      _0x10e5fb.collapsed !== _0x541276.collapsed
    );
  });
}
function Sl(
  _0x245b9f,
  _0x45cda2,
  _0x4911f4,
  _0x3679c2,
  _0x2193b9 = _0x4911f4.transform,
) {
  return {
    id: Z.id,
    params: {
      unitId: _0x245b9f,
      subUnitId: _0x45cda2,
      elementId: _0x4911f4.elementId,
      element: q(e.Tools["deepClone"](_0x3679c2)),
      transform: _0x2193b9 && { ..._0x2193b9 },
    },
  };
}
function Cl(_0x521652) {
  return {
    left: _0x521652.left ?? 0,
    top: _0x521652.top ?? 0,
    width: _0x521652.width ?? 0,
    height: _0x521652.height ?? 0,
    angle: _0x521652.rotation ?? 0,
    flipX: _0x521652.flipX,
    flipY: _0x521652.flipY,
  };
}
function wl(_0x1a662e, _0x12e814, _0x30c356, _0x351989, _0x37e4e3, _0x285da7) {
  var _0x3913ed, _0x3080e1;
  if (!_0x285da7) return { x: 0, y: 0 };
  let _0xe95ea0 = z(_0x1a662e, _0x12e814);
  if (!_0xe95ea0) return { x: 0, y: 0 };
  let _0x2ab76f =
      (_0x3913ed = Ir(_0x30c356, _0xe95ea0).find(
        (_0x33ec71) => _0x33ec71.lane["id"] === _0x37e4e3,
      )) == null
        ? undefined
        : _0x3913ed.bounds,
    _0x433a64 =
      (_0x3080e1 = Ir(_0x351989, _0xe95ea0).find(
        (_0x5e910f) => _0x5e910f.lane["id"] === _0x285da7,
      )) == null
        ? undefined
        : _0x3080e1.bounds;
  return !_0x2ab76f || !_0x433a64
    ? { x: 0, y: 0 }
    : { x: _0x433a64.left - _0x2ab76f.left, y: _0x433a64.top - _0x2ab76f.top };
}
function Tl(_0x26fd3d, _0x176aa0, _0x19a4b8) {
  let _0x28466f = _0x19a4b8.x !== 0 || _0x19a4b8.y !== 0;
  if (_0x26fd3d.element["type"] === s.Connector) {
    let _0x27b99b = _0x28466f
      ? rr(
          {
            ..._0x26fd3d.element,
            laneId: _0x176aa0,
            transform: {
              ..._0x26fd3d.element["transform"],
              left: (_0x26fd3d.element["transform"].left ?? 0) + _0x19a4b8.x,
              top: (_0x26fd3d.element["transform"].top ?? 0) + _0x19a4b8.y,
            },
          },
          _0x19a4b8,
        )
      : { ..._0x26fd3d.element, laneId: _0x176aa0 };
    return { element: _0x27b99b, transform: pr(_0x27b99b.transform) };
  }
  let _0x1e1ccd = {
    ..._0x26fd3d.element,
    laneId: _0x176aa0,
    transform: _0x28466f
      ? {
          ..._0x26fd3d.element["transform"],
          left: (_0x26fd3d.element["transform"].left ?? 0) + _0x19a4b8.x,
          top: (_0x26fd3d.element["transform"].top ?? 0) + _0x19a4b8.y,
        }
      : _0x26fd3d.element["transform"],
  };
  return {
    element: _0x1e1ccd,
    transform: _0x28466f ? Cl(_0x1e1ccd.transform) : _0x26fd3d.transform,
  };
}
function El(_0x4ba411, _0x187de9, _0x9f7da8) {
  let _0x956539 = new Set(),
    _0x45c21a = _0x9f7da8.map((_0x387071) => _0x387071.elementId);
  return (
    nt(_0x4ba411, [..._0x187de9], _0x45c21a).forEach((_0x5d5e3e) =>
      _0x956539.add(_0x5d5e3e),
    ),
    Object.values(_0x4ba411).forEach((_0x1bd4ea) => {
      !X(_0x1bd4ea) ||
        _0x956539.has(_0x1bd4ea.elementId) ||
        (Zi(_0x1bd4ea.element).some((_0x3fe590) => _0x956539.has(_0x3fe590)) &&
          _0x956539.add(_0x1bd4ea.elementId));
    }),
    _0x187de9.filter((_0x1c13ef) => _0x956539.has(_0x1c13ef))
  );
}
const Dl = {
  id: "board.operation.remove-swimlane-lane",
  type: e.CommandType["OPERATION"],
  handler: (_0x1ae22a, _0x5e5bdb) => {
    if (!_0x5e5bdb || !_0x5e5bdb.containerId || !_0x5e5bdb.laneId) return false;
    let {
        unitId: _0x594f5b,
        subUnitId: _0x133032,
        containerId: _0x35dc8a,
        laneId: _0x2155ff,
      } = _0x5e5bdb,
      _0x4248f3 = _0x5e5bdb.contentPolicy ?? "reject",
      _0x8cfe4d = _0x1ae22a.get(N),
      _0xe018b7 = _0x8cfe4d.getElementData(_0x594f5b, _0x133032),
      _0x4f73b7 = _0xe018b7[_0x35dc8a],
      _0x533d33 = _0x4f73b7 == null ? undefined : _0x4f73b7.element;
    if (
      !_0x4f73b7 ||
      (_0x533d33 == null ? undefined : _0x533d33.type) !== s.Container ||
      _0x533d33.locked === true ||
      _0x533d33.containerData["behavior"].membershipLocked ||
      _0x533d33.containerData["kind"] !== "swimlane" ||
      !_0x533d33.containerData["swimlane"]
    )
      return false;
    let _0x342deb = _0x533d33.containerData["swimlane"],
      _0x524e55 = _0x342deb.lanes["find"](
        (_0xf0c37b) => _0xf0c37b.id === _0x2155ff,
      );
    if (
      !_0x524e55 ||
      _0x524e55.locked === true ||
      (_0x4248f3 === "move-to-lane" &&
        (!_0x5e5bdb.targetLaneId ||
          _0x5e5bdb.targetLaneId === _0x2155ff ||
          !_0x342deb.lanes["some"](
            (_0x5e9794) =>
              _0x5e9794.id === _0x5e5bdb.targetLaneId &&
              _0x5e9794.locked !== true,
          )))
    )
      return false;
    let _0x4ba182 = Object.values(_0xe018b7).filter(
      (_0x4cd1aa) =>
        _0x4cd1aa.element["parentId"] === _0x35dc8a &&
        _0x4cd1aa.element["laneId"] === _0x2155ff,
    );
    if (
      _0x4ba182.some((_0xfd361c) => _0xfd361c.element["locked"] === true) ||
      (_0x4ba182.length > 0 &&
        _0x4248f3 !== "promote-to-pool" &&
        _0x4248f3 !== "move-to-lane" &&
        _0x4248f3 !== "delete-content")
    )
      return false;
    let _0xe9371 = _0x8cfe4d.getElementOrder(_0x594f5b, _0x133032),
      _0x4d56e9 = bl(
        _0x342deb.lanes["filter"]((_0x13e8b9) => _0x13e8b9.id !== _0x2155ff),
      );
    if (xl(_0x342deb, _0x4d56e9)) return false;
    let _0x12b446 = q({
        ..._0x533d33,
        containerData: {
          ..._0x533d33.containerData,
          swimlane: { ..._0x342deb, lanes: _0x4d56e9 },
        },
      }),
      _0x159b4a =
        _0x4248f3 === "move-to-lane"
          ? wl(
              _0xe018b7,
              _0x35dc8a,
              _0x533d33,
              _0x12b446,
              _0x2155ff,
              _0x5e5bdb.targetLaneId,
            )
          : { x: 0, y: 0 },
      _0x2247da =
        _0x4248f3 === "delete-content"
          ? _0x4ba182.map((_0x355bf6) => ({
              id: Co.id,
              params: {
                unitId: _0x594f5b,
                subUnitId: _0x133032,
                elementId: _0x355bf6.elementId,
                elementType: _0x355bf6.element["type"],
                ...(_0x355bf6.element["type"] === s.Container
                  ? { containerKind: _0x355bf6.element["containerData"].kind }
                  : {}),
              },
            }))
          : _0x4ba182.map((_0x15c188) => {
              let _0x3935a5 = Tl(
                _0x15c188,
                _0x4248f3 === "move-to-lane"
                  ? _0x5e5bdb.targetLaneId
                  : undefined,
                _0x159b4a,
              );
              return Sl(
                _0x594f5b,
                _0x133032,
                _0x15c188,
                _0x3935a5.element,
                _0x3935a5.transform,
              );
            }),
      _0x38adc0 =
        _0x4248f3 === "delete-content"
          ? El(_0xe018b7, _0xe9371, _0x4ba182)
              .map((_0x51823f) => _0xe018b7[_0x51823f])
              .filter((_0x5e25ca) => !!_0x5e25ca)
              .map((_0x47e176) => ({
                id: xo.id,
                params: {
                  unitId: _0x594f5b,
                  subUnitId: _0x133032,
                  element: e.Tools["deepClone"](_0x47e176.element),
                },
              }))
          : _0x4ba182
              .map((_0x5070ed) =>
                Sl(_0x594f5b, _0x133032, _0x5070ed, _0x5070ed.element),
              )
              .reverse();
    return (
      _0x2247da.push(Sl(_0x594f5b, _0x133032, _0x4f73b7, _0x12b446)),
      _0x38adc0.unshift(Sl(_0x594f5b, _0x133032, _0x4f73b7, _0x533d33)),
      !ja(_0xe018b7, _0x2247da) ||
      !(0, e.sequenceExecute)(_0x2247da, _0x1ae22a.get(e.ICommandService))
        .result
        ? false
        : (_0x1ae22a
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x594f5b,
              redoMutations: _0x2247da,
              undoMutations: _0x38adc0,
            }),
          true)
    );
  },
};
function Ol(_0x4626ba, _0x4f7db0, _0xd7638) {
  let _0x5a74dd = new Set(_0x4f7db0),
    _0x561d2a = _0x4626ba.filter((_0xfe1fde) => _0x5a74dd.has(_0xfe1fde));
  if (_0x561d2a.length === 0) return _0x4626ba;
  if (_0xd7638 === "front" || _0xd7638 === "back") {
    let _0x183783 = _0x4626ba.filter((_0xe61d93) => !_0x5a74dd.has(_0xe61d93));
    return _0xd7638 === "front"
      ? [..._0x183783, ..._0x561d2a]
      : [..._0x561d2a, ..._0x183783];
  }
  let _0x11b1a3 = [..._0x4626ba];
  if (_0xd7638 === "forward") {
    for (let _0x2852ca = _0x11b1a3.length - 2; _0x2852ca >= 0; _0x2852ca--)
      _0x5a74dd.has(_0x11b1a3[_0x2852ca]) &&
        !_0x5a74dd.has(_0x11b1a3[_0x2852ca + 1]) &&
        ([_0x11b1a3[_0x2852ca], _0x11b1a3[_0x2852ca + 1]] = [
          _0x11b1a3[_0x2852ca + 1],
          _0x11b1a3[_0x2852ca],
        ]);
    return _0x11b1a3;
  }
  for (let _0x4e7ce6 = 1; _0x4e7ce6 < _0x11b1a3.length; _0x4e7ce6++)
    _0x5a74dd.has(_0x11b1a3[_0x4e7ce6]) &&
      !_0x5a74dd.has(_0x11b1a3[_0x4e7ce6 - 1]) &&
      ([_0x11b1a3[_0x4e7ce6 - 1], _0x11b1a3[_0x4e7ce6]] = [
        _0x11b1a3[_0x4e7ce6],
        _0x11b1a3[_0x4e7ce6 - 1],
      ]);
  return _0x11b1a3;
}
function kl(_0x3a1472, _0xe73246, _0x4f2ec1) {
  let _0x476985 = new Set(_0xe73246),
    _0x2ee3c2 = _0x3a1472.filter((_0x2e817b) => _0x476985.has(_0x2e817b));
  if (_0x2ee3c2.length === 0) return _0x3a1472;
  let _0x567dc5 = _0x3a1472.filter((_0x5d2256) => !_0x476985.has(_0x5d2256));
  return (
    _0x567dc5.splice(
      (0, e.normalizeDrawingOrderIndex)(_0x4f2ec1, _0x3a1472.length),
      0,
      ..._0x2ee3c2,
    ),
    _0x567dc5
  );
}
const Al = {
  id: "board.operation.reorder-elements",
  type: e.CommandType["OPERATION"],
  handler: (_0x23c0ae, _0x4d3875) => {
    if (!_0x4d3875 || _0x4d3875.elementIds["length"] === 0) return false;
    let {
        unitId: _0x3cfd3c,
        subUnitId: _0x20f82e,
        elementIds: _0xbf10a4,
      } = _0x4d3875,
      _0x120e83 = _0x23c0ae.get(N).getElementOrder(_0x3cfd3c, _0x20f82e),
      _0x2fae5a =
        _0x4d3875.zOrder === undefined
          ? Ol(_0x120e83, _0xbf10a4, _0x4d3875.placement)
          : kl(_0x120e83, _0xbf10a4, _0x4d3875.zOrder);
    if (
      _0x2fae5a.length !== _0x120e83.length ||
      _0x2fae5a.every(
        (_0x1f76f0, _0x43bfff) => _0x1f76f0 === _0x120e83[_0x43bfff],
      )
    )
      return false;
    let _0x5e8075 = {
        unitId: _0x3cfd3c,
        subUnitId: _0x20f82e,
        elementIds: _0x2fae5a,
      },
      _0xb5f29 = {
        unitId: _0x3cfd3c,
        subUnitId: _0x20f82e,
        elementIds: _0x120e83,
      };
    return _0x23c0ae.get(e.ICommandService).syncExecuteCommand(ds.id, _0x5e8075)
      ? (_0x23c0ae
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x3cfd3c,
            redoMutations: [{ id: ds.id, params: _0x5e8075 }],
            undoMutations: [{ id: ds.id, params: _0xb5f29 }],
          }),
        true)
      : false;
  },
};
function jl(_0x2f9b37, _0xff305f, _0x534879) {
  let _0x56c758 = _0x2f9b37.indexOf(_0xff305f),
    _0x358287 = _0x2f9b37.indexOf(_0x534879);
  if (_0x56c758 < 0 || _0x358287 < 0 || _0x56c758 === _0x358287)
    return _0x2f9b37;
  let _0x367555 = [..._0x2f9b37],
    [_0x580bcc] = _0x367555.splice(_0x56c758, 1),
    _0x43c6cf = _0x367555.indexOf(_0x534879);
  return (
    _0x367555.splice(_0x43c6cf + +(_0x56c758 < _0x358287), 0, _0x580bcc),
    _0x367555
  );
}
function Ml(_0x4e847c, _0x58565c) {
  return (
    _0x4e847c.length === _0x58565c.length &&
    _0x4e847c.every(
      (_0x47182b, _0x2e6904) => _0x47182b === _0x58565c[_0x2e6904],
    )
  );
}
function Nl(_0x2bffe8, _0x42c291) {
  return Object.values(_0x2bffe8)
    .map((_0xea6ee6) => _0xea6ee6.element)
    .find(
      (_0x13f96d) =>
        _0x13f96d.type === s.Group && _0x13f96d.children["includes"](_0x42c291),
    );
}
function Pl(_0xfd9132, _0x51928d, _0x1f361a) {
  var _0x4cec48;
  let _0x7baf3b =
    (_0x4cec48 = _0xfd9132[_0x1f361a]) == null ? undefined : _0x4cec48.element;
  if (!_0x7baf3b) return null;
  let _0x2fbaea = Nl(_0xfd9132, _0x1f361a);
  if (_0x2fbaea)
    return {
      type: "group",
      parentId: _0x2fbaea.id,
      order: _0x2fbaea.children,
      parentElement: _0x2fbaea,
    };
  let _0x2daf6c = _0x7baf3b.parentId;
  return {
    type: "order",
    parentId: _0x2daf6c,
    order: _0x2daf6c
      ? _0x51928d.filter((_0x2e5124) => {
          var _0x47759c;
          return (
            ((_0x47759c = _0xfd9132[_0x2e5124]) == null
              ? undefined
              : _0x47759c.element["parentId"]) === _0x2daf6c
          );
        })
      : _0x51928d.filter((_0x1e163c) => {
          var _0x335bf6;
          let _0x4e362e =
            (_0x335bf6 = _0xfd9132[_0x1e163c]) == null
              ? undefined
              : _0x335bf6.element;
          return (
            !!_0x4e362e && !_0x4e362e.parentId && !Nl(_0xfd9132, _0x1e163c)
          );
        }),
  };
}
function Fl(_0x160beb, _0x55b5e9, _0x23d2df, _0x3820c7) {
  return {
    unitId: _0x160beb,
    subUnitId: _0x55b5e9,
    elementId: _0x23d2df,
    element: _0x3820c7,
    allowInactiveTarget: true,
    allowLockedTarget: true,
  };
}
function Il(_0x9f7a29, _0x36b524, _0x480fc9) {
  let _0x2bde1f = new Map(
      _0x480fc9.map((_0x12193c, _0x3fa1a4) => [_0x12193c, _0x3fa1a4]),
    ),
    _0x4b1bd5 = new Set(_0x36b524),
    _0x215348 = _0x36b524
      .filter((_0x242a34) => _0x2bde1f.has(_0x242a34))
      .sort(
        (_0x3f7969, _0x130d07) =>
          _0x2bde1f.get(_0x3f7969) - _0x2bde1f.get(_0x130d07),
      ),
    _0x219fce = 0;
  return _0x9f7a29.map((_0x3a51df) =>
    _0x4b1bd5.has(_0x3a51df) ? _0x215348[_0x219fce++] : _0x3a51df,
  );
}
const Ll = {
  id: "board.operation.reorder-object-list-element",
  type: e.CommandType["OPERATION"],
  handler: (_0x1a35fa, _0x1df5a9) => {
    if (!_0x1df5a9 || _0x1df5a9.sourceElementId === _0x1df5a9.targetElementId)
      return false;
    let {
        unitId: _0x300cbe,
        subUnitId: _0x1722d8,
        sourceElementId: _0x202918,
        targetElementId: _0x22a3cb,
      } = _0x1df5a9,
      _0x1a9fe6 = _0x1a35fa.get(N),
      _0x2681a5 = _0x1a9fe6.getElementData(_0x300cbe, _0x1722d8),
      _0x223b56 = _0x1a9fe6.getElementOrder(_0x300cbe, _0x1722d8),
      _0x4a09f3 = Pl(_0x2681a5, _0x223b56, _0x202918),
      _0x3f5cee = Pl(_0x2681a5, _0x223b56, _0x22a3cb);
    if (
      !_0x4a09f3 ||
      !_0x3f5cee ||
      _0x4a09f3.type !== _0x3f5cee.type ||
      _0x4a09f3.parentId !== _0x3f5cee.parentId
    )
      return false;
    let _0x5a87b9 = jl(_0x4a09f3.order, _0x202918, _0x22a3cb);
    if (Ml(_0x4a09f3.order, _0x5a87b9)) return false;
    let _0x286468 = _0x1a35fa.get(e.ICommandService),
      _0x41ac1f,
      _0x2710df;
    if (_0x4a09f3.type === "group" && _0x4a09f3.parentElement) {
      let _0x5eb3b3 = {
          ...e.Tools["deepClone"](_0x4a09f3.parentElement),
          children: _0x5a87b9,
        },
        _0x4a4722 = Fl(
          _0x300cbe,
          _0x1722d8,
          _0x4a09f3.parentElement["id"],
          _0x5eb3b3,
        ),
        _0x19aca9 = Fl(
          _0x300cbe,
          _0x1722d8,
          _0x4a09f3.parentElement["id"],
          e.Tools["deepClone"](_0x4a09f3.parentElement),
        ),
        _0x43f776 = Il(_0x223b56, _0x4a09f3.order, _0x5a87b9);
      ((_0x41ac1f = [
        { id: Z.id, params: _0x4a4722 },
        {
          id: ds.id,
          params: {
            unitId: _0x300cbe,
            subUnitId: _0x1722d8,
            elementIds: _0x43f776,
          },
        },
      ]),
        (_0x2710df = [
          {
            id: ds.id,
            params: {
              unitId: _0x300cbe,
              subUnitId: _0x1722d8,
              elementIds: _0x223b56,
            },
          },
          { id: Z.id, params: _0x19aca9 },
        ]));
    } else {
      let _0x2d3b79 = {
          unitId: _0x300cbe,
          subUnitId: _0x1722d8,
          elementIds: Il(_0x223b56, _0x4a09f3.order, _0x5a87b9),
        },
        _0x2caead = {
          unitId: _0x300cbe,
          subUnitId: _0x1722d8,
          elementIds: _0x223b56,
        };
      ((_0x41ac1f = [{ id: ds.id, params: _0x2d3b79 }]),
        (_0x2710df = [{ id: ds.id, params: _0x2caead }]));
    }
    return (0, e.sequenceExecute)(_0x41ac1f, _0x286468).result
      ? (_0x1a35fa
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x300cbe,
            redoMutations: _0x41ac1f,
            undoMutations: _0x2710df,
          }),
        true)
      : false;
  },
};
function Rl(_0x3ab16d, _0x2b5891) {
  return {
    ..._0x3ab16d,
    transform: {
      ..._0x3ab16d.transform,
      left: _0x2b5891.left,
      top: _0x2b5891.top,
      width: _0x2b5891.width,
      height: _0x2b5891.height,
      rotation: _0x2b5891.angle,
      flipX: _0x2b5891.flipX,
      flipY: _0x2b5891.flipY,
    },
  };
}
function zl(_0x3f4c4e, _0x871fb2) {
  return (
    _0x3f4c4e.left !== _0x871fb2.left ||
    _0x3f4c4e.top !== _0x871fb2.top ||
    _0x3f4c4e.width !== _0x871fb2.width ||
    _0x3f4c4e.height !== _0x871fb2.height
  );
}
function Bl(_0x123a1e) {
  return _0x123a1e.left === undefined ||
    _0x123a1e.top === undefined ||
    _0x123a1e.width === undefined ||
    _0x123a1e.height === undefined
    ? null
    : {
        left: _0x123a1e.left,
        top: _0x123a1e.top,
        width: _0x123a1e.width,
        height: _0x123a1e.height,
      };
}
function Vl(_0x4c5967) {
  return (
    !_0x4c5967 ||
    _0x4c5967.element["type"] !== s.Container ||
    _0x4c5967.hidden === true ||
    _0x4c5967.element["visible"] === false ||
    _0x4c5967.element["locked"] === true ||
    _0x4c5967.element["selectable"] === false ||
    _0x4c5967.element["containerData"].behavior["membershipLocked"]
  );
}
function Hl(_0x32f9d0, _0x259fef, _0xcf2f21) {
  if (!_0x32f9d0 || _0x32f9d0.element["type"] !== s.Container) return false;
  let _0x564085 = _0x32f9d0.element["containerData"].behavior;
  return _0x564085.acceptsChildren
    ? _0x259fef.every((_0x3843f6) => {
        var _0x250531;
        let _0x1c4381 =
          (_0x250531 = _0xcf2f21[_0x3843f6]) == null
            ? undefined
            : _0x250531.element;
        return _0x1c4381
          ? _0x1c4381.type !== s.Container ||
              (_0x564085.acceptsContainer && _0x564085.allowNested)
          : false;
      })
    : false;
}
function Ul(_0x2247cb) {
  return (
    (_0x2247cb == null ? undefined : _0x2247cb.element["type"]) ===
      s.Container &&
    _0x2247cb.element["containerData"].behavior["membershipLocked"]
  );
}
function Wl(_0xc7b891, _0x114b2d) {
  var _0x499ff8;
  let _0x4c604d =
      (_0x499ff8 = _0xc7b891[_0x114b2d]) == null
        ? undefined
        : _0x499ff8.element["parentId"],
    _0x205e47 = new Set([_0x114b2d]);
  for (; _0x4c604d;) {
    if (_0x205e47.has(_0x4c604d)) return false;
    let _0x505cb7 = _0xc7b891[_0x4c604d];
    if (!_0x505cb7 || _0x505cb7.element["type"] !== s.Container) return false;
    if (
      _0x505cb7.hidden === true ||
      _0x505cb7.element["visible"] === false ||
      _0x505cb7.element["locked"] === true ||
      _0x505cb7.element["selectable"] === false
    )
      return true;
    (_0x205e47.add(_0x4c604d), (_0x4c604d = _0x505cb7.element["parentId"]));
  }
  return false;
}
function Gl(_0x326f4e, _0x204859) {
  let _0x40b006 = [];
  return (
    _0x204859.forEach((_0x1f1a5f) => {
      _0x326f4e[_0x1f1a5f] &&
        !_0x40b006.includes(_0x1f1a5f) &&
        _0x40b006.push(_0x1f1a5f);
    }),
    _0x40b006
  );
}
function Kl(_0x2c8a9e, _0x2e7a53, _0x457657) {
  var _0xb8b39d;
  let _0x48f63b =
      (_0xb8b39d = _0x2c8a9e[_0x2e7a53]) == null
        ? undefined
        : _0xb8b39d.element["parentId"],
    _0x32eec1 = new Set([_0x2e7a53]);
  for (; _0x48f63b;) {
    if (_0x32eec1.has(_0x48f63b)) return false;
    let _0x2e06f3 = _0x2c8a9e[_0x48f63b];
    if (!_0x2e06f3 || _0x2e06f3.element["type"] !== s.Container) return false;
    if (_0x457657.has(_0x48f63b)) return true;
    (_0x32eec1.add(_0x48f63b), (_0x48f63b = _0x2e06f3.element["parentId"]));
  }
  return false;
}
function ql(_0x397938, _0x48dc4c) {
  let _0x4ff836 = new Set(_0x48dc4c);
  return _0x48dc4c.filter((_0xdd541) => !Kl(_0x397938, _0xdd541, _0x4ff836));
}
function Jl(_0x52e5a6, _0x131026, _0x3adcb0, _0xed1b7) {
  _0x52e5a6[_0x131026.elementId] = {
    ..._0x131026,
    element: _0x3adcb0,
    transform: _0xed1b7,
  };
}
function Yl(_0xd2b3ce, _0x337ca8) {
  return _0x337ca8.some((_0x14765d) => {
    var _0x3e0417;
    let _0x238713 = _0x14765d.params;
    return (
      !!_0x238713.elementId &&
      ((_0x3e0417 = _0xd2b3ce[_0x238713.elementId]) == null
        ? undefined
        : _0x3e0417.element["locked"]) === true
    );
  });
}
function Xl(_0x2a25f1, _0x1264c8, _0x36f2ba, _0x2b5770) {
  var _0x1518a6, _0x1ecd6e, _0x2098be;
  if (!_0x36f2ba) return;
  let _0x1e6dcf =
    (_0x1518a6 = _0x2a25f1[_0x36f2ba]) == null ? undefined : _0x1518a6.element;
  if (
    _0x1264c8.laneId &&
    (_0x1e6dcf == null ? undefined : _0x1e6dcf.type) === s.Container &&
    _0x1e6dcf.containerData["kind"] === "swimlane" &&
    ((_0x1ecd6e = _0x1e6dcf.containerData["swimlane"]) == null
      ? undefined
      : _0x1ecd6e.lanes["some"](
          (_0x22ddfb) => _0x22ddfb.id === _0x1264c8.laneId,
        )) === true
  )
    return _0x1264c8.laneId;
  let _0x3ee24e = z(_0x2a25f1, _0x36f2ba);
  if (!(
    (_0x1e6dcf == null ? undefined : _0x1e6dcf.type) !== s.Container ||
    _0x1e6dcf.containerData["kind"] !== "swimlane" ||
    !_0x2b5770 ||
    !_0x3ee24e
  ))
    return (_0x2098be = Wr(_0x1e6dcf, _0x3ee24e, _0x2b5770)) == null
      ? undefined
      : _0x2098be.lane["id"];
}
function Zl(_0x44302b, _0x125830, _0x20886f, _0x57d620, _0x4a12ba) {
  var _0x1dff12, _0x24b073, _0x18a26d;
  let _0x23a999 =
      (_0x1dff12 = _0x44302b[_0x20886f]) == null
        ? undefined
        : _0x1dff12.element,
    _0x2cd78b = z(_0x44302b, _0x20886f);
  if (
    (_0x23a999 == null ? undefined : _0x23a999.type) !== s.Container ||
    _0x23a999.containerData["kind"] !== "swimlane" ||
    !_0x23a999.containerData["swimlane"] ||
    !_0x2cd78b
  )
    return null;
  let _0x4106cb =
    (_0x24b073 = Ir(_0x23a999, _0x2cd78b).find(
      (_0xbe7519) => _0xbe7519.lane["id"] === _0x57d620,
    )) == null
      ? undefined
      : _0x24b073.bounds;
  if (!_0x4106cb) return null;
  let _0x2162a2 = _0x125830.parentId === _0x20886f ? _0x23a999 : undefined,
    _0xb755d3 = _0x2162a2 ? _0x2cd78b : null,
    _0x262661 =
      (_0x2162a2 == null ? undefined : _0x2162a2.type) === s.Container &&
      _0x2162a2.containerData["kind"] === "swimlane" &&
      _0x125830.laneId &&
      _0xb755d3
        ? (_0x18a26d = Ir(_0x2162a2, _0xb755d3).find(
            (_0x533dd2) => _0x533dd2.lane["id"] === _0x125830.laneId,
          )) == null
          ? undefined
          : _0x18a26d.bounds
        : undefined;
  return _0x262661
    ? { x: _0x4106cb.left - _0x262661.left, y: _0x4106cb.top - _0x262661.top }
    : _0x23a999.containerData["swimlane"].orientation === "horizontal"
      ? {
          x: 0,
          y:
            _0x4a12ba.top >= _0x4106cb.top &&
            _0x4a12ba.top + _0x4a12ba.height <= _0x4106cb.top + _0x4106cb.height
              ? 0
              : _0x4106cb.top +
                _0x4106cb.height / 2 -
                (_0x4a12ba.top + _0x4a12ba.height / 2),
        }
      : {
          x:
            _0x4a12ba.left >= _0x4106cb.left &&
            _0x4a12ba.left + _0x4a12ba.width <= _0x4106cb.left + _0x4106cb.width
              ? 0
              : _0x4106cb.left +
                _0x4106cb.width / 2 -
                (_0x4a12ba.left + _0x4a12ba.width / 2),
          y: 0,
        };
}
function Ql(_0x4a544c, _0x495ed3, _0x431b98, _0x4d4929) {
  var _0xe2253a;
  let _0x1c5f1a = _0x431b98
    ? (_0xe2253a = _0x4a544c[_0x431b98]) == null
      ? undefined
      : _0xe2253a.element
    : undefined;
  if (
    (_0x1c5f1a == null ? undefined : _0x1c5f1a.type) !== s.Container ||
    _0x1c5f1a.containerData["kind"] !== "swimlane"
  )
    return true;
  let _0x2675c7 = _0x1c5f1a.containerData["swimlane"];
  return _0x2675c7 != null &&
    _0x2675c7.lanes["some"](
      (_0x380c90) => _0x380c90.id === _0x4d4929 && _0x380c90.locked !== true,
    )
    ? _0x495ed3.some((_0x573d78) => {
        var _0x2a4319, _0x26097a;
        let _0x277bcc =
          (_0x2a4319 = _0x4a544c[_0x573d78]) == null
            ? undefined
            : _0x2a4319.element;
        if (!_0x277bcc || _0x277bcc.type === s.Connector) return true;
        let _0x16f18c = _0x277bcc.parentId
            ? (_0x26097a = _0x4a544c[_0x277bcc.parentId]) == null
              ? undefined
              : _0x26097a.element
            : undefined,
          _0xb642a2 =
            (_0x16f18c == null ? undefined : _0x16f18c.type) === s.Container &&
            _0x16f18c.containerData["kind"] === "swimlane"
              ? _0x16f18c.containerData["swimlane"]
              : undefined,
          _0x52eba9 = _0x277bcc.laneId
            ? _0xb642a2 == null
              ? undefined
              : _0xb642a2.lanes["find"](
                  (_0x53e711) => _0x53e711.id === _0x277bcc.laneId,
                )
            : undefined;
        return (_0x52eba9 == null ? undefined : _0x52eba9.locked) === true;
      })
    : true;
}
const $l = {
  id: "board.operation.reparent-elements",
  type: e.CommandType["OPERATION"],
  handler: (_0xffa6bd, _0x4479ba) => {
    if (!_0x4479ba || _0x4479ba.elementIds["length"] === 0) return false;
    let {
        unitId: _0x4c2163,
        subUnitId: _0x8223c4,
        parentId: _0x278c74,
        laneId: _0x525c63,
      } = _0x4479ba,
      _0x542384 = _0xffa6bd.get(N).getElementData(_0x4c2163, _0x8223c4);
    if (
      new Set(_0x4479ba.elementIds).size !== _0x4479ba.elementIds["length"] ||
      _0x4479ba.elementIds["some"]((_0x49776a) => !_0x542384[_0x49776a])
    )
      return false;
    let _0x14be9e = Gl(_0x542384, _0x4479ba.elementIds);
    if (_0x14be9e.length === 0) return false;
    let _0x4b80be = ql(_0x542384, _0x14be9e);
    if (
      (_0x525c63 !== undefined &&
        Ql(_0x542384, _0x4b80be, _0x278c74, _0x525c63)) ||
      _0x4b80be.length === 0 ||
      _0x4b80be.some((_0x4ed602) => Wl(_0x542384, _0x4ed602)) ||
      _0x4b80be.includes(_0x278c74 ?? "")
    )
      return false;
    if (_0x278c74) {
      let _0x876bb0 = _0x542384[_0x278c74];
      if (Vl(_0x876bb0) || !Hl(_0x876bb0, _0x4b80be, _0x542384)) return false;
    }
    if (
      _0x4b80be.some((_0x21ea75) => Wt(_0x542384, _0x21ea75, _0x278c74)) ||
      _0x4b80be.some((_0x5228e6) => {
        let _0xca4e6d = _0x542384[_0x5228e6],
          _0x30450a =
            _0xca4e6d == null ? undefined : _0xca4e6d.element["parentId"];
        return (
          _0x30450a !== _0x278c74 &&
          Ul(_0x30450a ? _0x542384[_0x30450a] : undefined)
        );
      })
    )
      return false;
    let _0x3c6406 = new Map(),
      _0x129be0 = new Map(),
      _0x57e2ee = { ..._0x542384 },
      _0x26a642 = (_0x3edf93, _0x1d589e, _0xb6a2cc) => {
        if (
          (_0x3c6406.set(_0x3edf93.elementId, {
            id: Z.id,
            params: {
              unitId: _0x4c2163,
              subUnitId: _0x8223c4,
              elementId: _0x3edf93.elementId,
              element: _0x1d589e,
              transform: _0xb6a2cc,
            },
          }),
          !_0x129be0.has(_0x3edf93.elementId))
        ) {
          let _0xbca6ed = _0x542384[_0x3edf93.elementId] ?? _0x3edf93;
          _0x129be0.set(_0x3edf93.elementId, {
            id: Z.id,
            params: {
              unitId: _0x4c2163,
              subUnitId: _0x8223c4,
              elementId: _0x3edf93.elementId,
              element: q(e.Tools["deepClone"](_0xbca6ed.element)),
              transform: _0xbca6ed.transform
                ? { ..._0xbca6ed.transform }
                : undefined,
            },
          });
        }
        Jl(_0x57e2ee, _0x3edf93, _0x1d589e, _0xb6a2cc);
      };
    _0x4b80be.forEach((_0x42b694) => {
      var _0x3894c4;
      let _0x11ce5e = _0x542384[_0x42b694];
      if (
        !_0x11ce5e ||
        (_0x11ce5e.element["parentId"] === _0x278c74 &&
          (_0x525c63 === undefined ||
            _0x11ce5e.element["laneId"] === _0x525c63))
      )
        return;
      let _0x411d79 =
        (_0x3894c4 = R(_0x542384, _0x42b694)) == null
          ? undefined
          : _0x3894c4.worldTransform;
      if (!_0x411d79) return;
      let _0x8ce94a = z(_0x542384, _0x42b694),
        _0x18be0a =
          _0x525c63 !== undefined && _0x278c74 && _0x8ce94a
            ? Zl(_0x542384, _0x11ce5e.element, _0x278c74, _0x525c63, _0x8ce94a)
            : { x: 0, y: 0 };
      if (!_0x18be0a) return;
      let _0x184153 = {
          ..._0x411d79,
          left: (_0x411d79.left ?? 0) + _0x18be0a.x,
          top: (_0x411d79.top ?? 0) + _0x18be0a.y,
        },
        _0x1b8458 = V(
          B(_0x542384, { parentId: _0x278c74, worldTransform: _0x184153 }),
        ),
        _0x477d07 = Rl(
          {
            ..._0x11ce5e.element,
            parentId: _0x278c74,
            laneId:
              _0x525c63 ??
              Xl(_0x542384, _0x11ce5e.element, _0x278c74, _0x8ce94a),
          },
          _0x1b8458,
        );
      _0x26a642(_0x11ce5e, _0x477d07, _0x1b8458);
    });
    let _0x23d1cf = _0x278c74 ? _0x57e2ee[_0x278c74] : undefined;
    if (
      (_0x23d1cf == null ? undefined : _0x23d1cf.element["type"]) ===
        s.Container &&
      _0x23d1cf.element["containerData"].behavior["autoResize"]
    ) {
      let _0x35604f = z(_0x57e2ee, _0x278c74);
      if (_0x35604f) {
        let _0x5434f8 = br([
            xs(_0x23d1cf.element, _0x35604f),
            ...Object.values(_0x57e2ee)
              .filter(
                (_0x374d85) =>
                  _0x374d85.element["parentId"] === _0x278c74 &&
                  _0x374d85.element["type"] !== s.Connector,
              )
              .map((_0x5b945f) => z(_0x57e2ee, _0x5b945f.elementId))
              .filter((_0x4e6ba2) => !!_0x4e6ba2),
          ]),
          _0x489967 = _0x5434f8
            ? Ts(_0x23d1cf.element, _0x35604f, _0x5434f8)
            : null;
        if (_0x489967 && zl(_0x35604f, _0x489967)) {
          let _0x25fef3 = new Map();
          Object.values(_0x57e2ee).forEach((_0x2ed8ee) => {
            var _0x493632;
            if (_0x2ed8ee.element["parentId"] !== _0x278c74) return;
            let _0x1ebd7e =
              (_0x493632 = R(_0x57e2ee, _0x2ed8ee.elementId)) == null
                ? undefined
                : _0x493632.worldTransform;
            _0x1ebd7e && _0x25fef3.set(_0x2ed8ee.elementId, _0x1ebd7e);
          });
          let _0x24c441 = V(
            B(_0x57e2ee, {
              parentId: _0x23d1cf.element["parentId"],
              worldTransform: Xt({
                left: _0x489967.left,
                top: _0x489967.top,
                width: _0x489967.width,
                height: _0x489967.height,
                angle: V(_0x23d1cf.element["transform"]).angle,
                flipX: _0x23d1cf.element["transform"].flipX,
                flipY: _0x23d1cf.element["transform"].flipY,
              }),
            }),
          );
          (_0x26a642(_0x23d1cf, Rl(_0x23d1cf.element, _0x24c441), _0x24c441),
            _0x25fef3.forEach((_0x1dd77b, _0x19ee75) => {
              let _0x1cc5dd = _0x57e2ee[_0x19ee75];
              if (!_0x1cc5dd) return;
              let _0x50eb0c = V(
                B(_0x57e2ee, {
                  parentId: _0x278c74,
                  worldTransform: _0x1dd77b,
                }),
              );
              if (
                _0x1cc5dd.element["transform"].left === _0x50eb0c.left &&
                _0x1cc5dd.element["transform"].top === _0x50eb0c.top &&
                _0x1cc5dd.element["transform"].width === _0x50eb0c.width &&
                _0x1cc5dd.element["transform"].height === _0x50eb0c.height &&
                V(_0x1cc5dd.element["transform"]).angle === _0x50eb0c.angle
              )
                return;
              let _0x3275eb = Bl(_0x1dd77b),
                _0x416caf = Rl(
                  {
                    ..._0x1cc5dd.element,
                    laneId: Xl(
                      _0x57e2ee,
                      _0x1cc5dd.element,
                      _0x278c74,
                      _0x3275eb,
                    ),
                  },
                  _0x50eb0c,
                );
              _0x26a642(_0x1cc5dd, _0x416caf, _0x50eb0c);
            }));
        }
      }
    }
    Object.values(_0x57e2ee).forEach((_0x8be026) => {
      var _0x572417;
      if (!X(_0x8be026)) return;
      let _0x100fcd = aa(_0x57e2ee, _0x8be026.element);
      if (
        _0x8be026.element["parentId"] === _0x100fcd.parentId &&
        _0x8be026.element["laneId"] === _0x100fcd.laneId
      )
        return;
      let _0x498244 =
        (_0x572417 = R(_0x57e2ee, _0x8be026.elementId)) == null
          ? undefined
          : _0x572417.worldTransform;
      if (!_0x498244) return;
      let _0x13a635 = V(
          B(_0x57e2ee, {
            parentId: _0x100fcd.parentId,
            worldTransform: _0x498244,
          }),
        ),
        _0xd56a01 = Rl(
          {
            ..._0x8be026.element,
            parentId: _0x100fcd.parentId,
            laneId: _0x100fcd.laneId,
          },
          _0x13a635,
        );
      _0x26a642(_0x8be026, _0xd56a01, _0x13a635);
    });
    let _0x585a48 = Array.from(_0x3c6406.values()),
      _0x5bbdb2 = Array.from(_0x129be0.values()).reverse();
    return _0x585a48.length === 0 ||
      Yl(_0x542384, _0x585a48) ||
      !Aa(_0x542384, _0x585a48) ||
      !(0, e.sequenceExecute)(_0x585a48, _0xffa6bd.get(e.ICommandService))
        .result
      ? false
      : (_0xffa6bd
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x4c2163,
            redoMutations: _0x585a48,
            undoMutations: _0x5bbdb2,
          }),
        true);
  },
};
function eu(_0x1f19d2, _0x207d03) {
  return {
    ..._0x1f19d2,
    containerData: {
      ..._0x1f19d2.containerData,
      behavior: {
        ..._0x1f19d2.containerData["behavior"],
        autoResize: _0x207d03,
      },
    },
  };
}
const tu = {
  id: "board.operation.set-container-auto-resize",
  type: e.CommandType["OPERATION"],
  handler: (_0x333f99, _0x4f2326) => {
    if (!(_0x4f2326 != null && _0x4f2326.containerId)) return false;
    let {
        unitId: _0x5ce385,
        subUnitId: _0xf6a7bf,
        containerId: _0x5436e2,
        autoResize: _0x2e8fe0,
      } = _0x4f2326,
      _0x3e5656 = _0x333f99.get(N),
      _0x1d03de = _0x3e5656.getElementByParam({
        unitId: _0x5ce385,
        subUnitId: _0xf6a7bf,
        elementId: _0x5436e2,
      });
    if (
      !_0x1d03de ||
      _0x1d03de.element["type"] !== s.Container ||
      _0x1d03de.element["locked"] ||
      _0x1d03de.element["containerData"].behavior["autoResize"] === _0x2e8fe0 ||
      (_0x1d03de.element["containerData"].behavior["membershipLocked"] &&
        !_0x2e8fe0)
    )
      return false;
    let _0x3e1fc9 = eu(_0x1d03de.element, _0x2e8fe0),
      _0x554e5f = [
        {
          id: Z.id,
          params: {
            unitId: _0x5ce385,
            subUnitId: _0xf6a7bf,
            elementId: _0x5436e2,
            element: _0x3e1fc9,
            transform: _0x1d03de.transform,
          },
        },
      ],
      _0x239e6e = [
        {
          id: Z.id,
          params: {
            unitId: _0x5ce385,
            subUnitId: _0xf6a7bf,
            elementId: _0x5436e2,
            element: e.Tools["deepClone"](_0x1d03de.element),
            transform: _0x1d03de.transform
              ? { ..._0x1d03de.transform }
              : undefined,
          },
        },
      ];
    return !Aa(_0x3e5656.getElementData(_0x5ce385, _0xf6a7bf), _0x554e5f) ||
      !(0, e.sequenceExecute)(_0x554e5f, _0x333f99.get(e.ICommandService))
        .result
      ? false
      : (_0x333f99
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x5ce385,
            redoMutations: _0x554e5f,
            undoMutations: _0x239e6e,
          }),
        true);
  },
};
function nu(_0x1a0884, _0x5b4664) {
  return {
    ..._0x1a0884,
    containerData: {
      ..._0x1a0884.containerData,
      behavior: {
        ..._0x1a0884.containerData["behavior"],
        membershipLocked: _0x5b4664,
        autoResize: _0x5b4664
          ? true
          : _0x1a0884.containerData["behavior"].autoResize,
      },
    },
  };
}
function ru(_0x3c06d8) {
  return (
    (_0x3c06d8 == null ? undefined : _0x3c06d8.rotation) ??
    (_0x3c06d8 == null ? undefined : _0x3c06d8.angle) ??
    0
  );
}
function iu(_0x4c7151) {
  return {
    left: _0x4c7151.left ?? 0,
    top: _0x4c7151.top ?? 0,
    width: _0x4c7151.width ?? 0,
    height: _0x4c7151.height ?? 0,
    angle: ru(_0x4c7151),
    flipX: _0x4c7151.flipX,
    flipY: _0x4c7151.flipY,
  };
}
function au(_0x162047, _0x57cd6e) {
  var _0x417b65;
  let _0x2dfe9d =
    (_0x417b65 = R(_0x162047, _0x57cd6e)) == null
      ? undefined
      : _0x417b65.worldTransform;
  return _0x2dfe9d ? iu(_0x2dfe9d) : null;
}
function ou(_0x580686, _0x285786, _0x2e1d3a) {
  return iu(
    B(_0x580686, {
      parentId: _0x285786,
      worldTransform: {
        left: _0x2e1d3a.left,
        top: _0x2e1d3a.top,
        width: _0x2e1d3a.width,
        height: _0x2e1d3a.height,
        rotation: _0x2e1d3a.angle,
        flipX: _0x2e1d3a.flipX,
        flipY: _0x2e1d3a.flipY,
      },
    }),
  );
}
function su(_0x27fc19, _0xad186b) {
  return {
    ..._0x27fc19,
    transform: {
      ..._0x27fc19.transform,
      left: _0xad186b.left,
      top: _0xad186b.top,
      width: _0xad186b.width,
      height: _0xad186b.height,
      rotation: _0xad186b.angle,
      flipX: _0xad186b.flipX,
      flipY: _0xad186b.flipY,
    },
  };
}
function cu(_0x627889, _0x5bf304) {
  return _0x5bf304.some((_0x26dfa3) => {
    var _0x1cd1ab;
    let _0x47cc9a = _0x26dfa3.params;
    return (
      !!_0x47cc9a.elementId &&
      ((_0x1cd1ab = _0x627889[_0x47cc9a.elementId]) == null
        ? undefined
        : _0x1cd1ab.element["locked"]) === true
    );
  });
}
function lu(_0x3edf66, _0x2d5676) {
  return (
    _0x3edf66.left !== _0x2d5676.left ||
    _0x3edf66.top !== _0x2d5676.top ||
    _0x3edf66.width !== _0x2d5676.width ||
    _0x3edf66.height !== _0x2d5676.height
  );
}
function uu(_0x56bf54, _0x160a8f, _0x19fdec) {
  var _0x1ac40e, _0x6f6b10;
  if (!_0x160a8f || !_0x19fdec) return;
  let _0xc5b247 =
      (_0x1ac40e = _0x56bf54[_0x160a8f]) == null
        ? undefined
        : _0x1ac40e.element,
    _0x1c72f1 = z(_0x56bf54, _0x160a8f);
  if (!(
    !_0xc5b247 ||
    _0xc5b247.type !== s.Container ||
    _0xc5b247.containerData["kind"] !== "swimlane" ||
    !_0x1c72f1
  ))
    return (_0x6f6b10 = Wr(_0xc5b247, _0x1c72f1, _0x19fdec)) == null
      ? undefined
      : _0x6f6b10.lane["id"];
}
const du = {
    id: "board.operation.set-container-membership-lock",
    type: e.CommandType["OPERATION"],
    handler: (_0x1b7341, _0x2ede30) => {
      if (!(_0x2ede30 != null && _0x2ede30.containerId)) return false;
      let {
          unitId: _0x2f23c3,
          subUnitId: _0x2d27fb,
          containerId: _0x16ca03,
          membershipLocked: _0x170921,
        } = _0x2ede30,
        _0x450e68 = _0x1b7341.get(N),
        _0x578e49 = _0x450e68.getElementByParam({
          unitId: _0x2f23c3,
          subUnitId: _0x2d27fb,
          elementId: _0x16ca03,
        });
      if (
        !_0x578e49 ||
        _0x578e49.element["type"] !== s.Container ||
        _0x578e49.element["locked"] ||
        _0x578e49.element["containerData"].behavior["membershipLocked"] ===
          _0x170921
      )
        return false;
      let _0xa98845 = _0x450e68.getElementData(_0x2f23c3, _0x2d27fb),
        _0x314117 = z(_0xa98845, _0x16ca03),
        _0x1b80fd = {
          ...nu(_0x578e49.element, _0x170921),
          laneId: uu(_0xa98845, _0x578e49.element["parentId"], _0x314117),
        },
        _0x264a29 = new Map(),
        _0x17576a = new Map(),
        _0xf3b87c = { ..._0xa98845 },
        _0x197c5d = (_0x2df4f8, _0x286934, _0x52fe72) => {
          (_0x264a29.set(_0x2df4f8.elementId, {
            id: Z.id,
            params: {
              unitId: _0x2f23c3,
              subUnitId: _0x2d27fb,
              elementId: _0x2df4f8.elementId,
              element: _0x286934,
              transform: _0x52fe72,
            },
          }),
            _0x17576a.has(_0x2df4f8.elementId) ||
              _0x17576a.set(_0x2df4f8.elementId, {
                id: Z.id,
                params: {
                  unitId: _0x2f23c3,
                  subUnitId: _0x2d27fb,
                  elementId: _0x2df4f8.elementId,
                  element: q(e.Tools["deepClone"](_0x2df4f8.element)),
                  transform: _0x2df4f8.transform
                    ? { ..._0x2df4f8.transform }
                    : undefined,
                },
              }),
            (_0xf3b87c[_0x2df4f8.elementId] = {
              ..._0x2df4f8,
              element: _0x286934,
              transform: _0x52fe72,
            }));
        };
      if (
        (_0x197c5d(_0x578e49, _0x1b80fd, undefined),
        _0x170921 && _0x1b80fd.containerData["behavior"].autoResize)
      ) {
        let _0x499d6b = z(_0xf3b87c, _0x16ca03);
        if (_0x499d6b) {
          let _0x12e9f3 = xs(_0x1b80fd, _0x499d6b),
            _0x2818eb = Object.values(_0xf3b87c).filter(
              (_0x2d0621) => _0x2d0621.element["parentId"] === _0x16ca03,
            ),
            _0x3d3d72 = br([
              _0x12e9f3,
              ..._0x2818eb
                .filter(
                  (_0x37b955) => _0x37b955.element["type"] !== s.Connector,
                )
                .map((_0x27f107) => z(_0xf3b87c, _0x27f107.elementId))
                .filter((_0x4212d9) => !!_0x4212d9),
            ]),
            _0x5397ee = _0x3d3d72 ? Ts(_0x1b80fd, _0x499d6b, _0x3d3d72) : null;
          if (_0x5397ee && lu(_0x499d6b, _0x5397ee)) {
            let _0x243ece = new Map();
            _0x2818eb.forEach((_0x9783bd) => {
              let _0x46c10b = au(_0xf3b87c, _0x9783bd.elementId);
              _0x46c10b && _0x243ece.set(_0x9783bd.elementId, _0x46c10b);
            });
            let _0x10a352 = ou(_0xf3b87c, _0x1b80fd.parentId, {
                left: _0x5397ee.left,
                top: _0x5397ee.top,
                width: _0x5397ee.width,
                height: _0x5397ee.height,
                angle: ru(_0x1b80fd.transform),
                flipX: _0x1b80fd.transform["flipX"],
                flipY: _0x1b80fd.transform["flipY"],
              }),
              _0x155ba3 = su(
                {
                  ..._0x1b80fd,
                  laneId: uu(_0xf3b87c, _0x1b80fd.parentId, _0x5397ee),
                },
                _0x10a352,
              );
            (_0x197c5d(_0xf3b87c[_0x16ca03], _0x155ba3, _0x10a352),
              _0x243ece.forEach((_0x6f028b, _0x27f66e) => {
                let _0xe53af2 = _0xf3b87c[_0x27f66e];
                if (!_0xe53af2) return;
                let _0x18a624 = ou(_0xf3b87c, _0x16ca03, _0x6f028b),
                  _0x52e17a = su(_0xe53af2.element, _0x18a624);
                _0x197c5d(_0xe53af2, _0x52e17a, _0x18a624);
              }));
          }
        }
      }
      let _0x32c979 = Array.from(_0x264a29.values()),
        _0xb004c5 = Array.from(_0x17576a.values()).reverse();
      return cu(_0xa98845, _0x32c979) ||
        !Aa(_0xa98845, _0x32c979) ||
        !(0, e.sequenceExecute)(_0x32c979, _0x1b7341.get(e.ICommandService))
          .result
        ? false
        : (_0x1b7341
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x2f23c3,
              redoMutations: _0x32c979,
              undoMutations: _0xb004c5,
            }),
          true);
    },
  },
  fu = ["description", "locked", "name", "selectable", "visible"];
function pu(_0x2973e3, _0x81062a) {
  return Object.prototype["hasOwnProperty"].call(_0x2973e3, _0x81062a);
}
function mu(_0x4c04c9, _0x317062) {
  let _0x5bfeab = e.Tools["deepClone"](_0x4c04c9);
  return (
    fu.forEach((_0xda4416) => {
      if (!pu(_0x317062, _0xda4416)) return;
      let _0xd7f5b5 = _0x317062[_0xda4416];
      if (_0xd7f5b5 === undefined) {
        delete _0x5bfeab[_0xda4416];
        return;
      }
      _0x5bfeab[_0xda4416] = _0xd7f5b5;
    }),
    _0x5bfeab
  );
}
function hu(_0x4fb081, _0x434b6c) {
  return fu.some((_0x58d69f) => _0x4fb081[_0x58d69f] !== _0x434b6c[_0x58d69f]);
}
function gu(_0x3e7121, _0x1ba1e7, _0x454016, _0x4abf66) {
  return {
    unitId: _0x3e7121,
    subUnitId: _0x1ba1e7,
    elementId: _0x454016,
    element: _0x4abf66,
    allowInactiveTarget: true,
    allowLockedTarget: true,
  };
}
const _u = {
  id: "board.operation.set-elements-metadata",
  type: e.CommandType["OPERATION"],
  handler: (_0x4cf48c, _0x4c3b70) => {
    if (!_0x4c3b70 || _0x4c3b70.updates["length"] === 0) return false;
    let {
        unitId: _0x579b5e,
        subUnitId: _0x20692f,
        updates: _0x44f017,
      } = _0x4c3b70,
      _0x4bfe00 = _0x4cf48c.get(N).getElementData(_0x579b5e, _0x20692f),
      _0x45ba23 = [];
    if (
      (_0x44f017.forEach((_0x34c9a2) => {
        let _0xe8c592 = _0x4bfe00[_0x34c9a2.elementId];
        if (!_0xe8c592) return;
        let _0x3eeceb = mu(_0xe8c592.element, _0x34c9a2.metadata);
        hu(_0xe8c592.element, _0x3eeceb) &&
          _0x45ba23.push({
            redoMutation: {
              id: Z.id,
              params: gu(_0x579b5e, _0x20692f, _0xe8c592.elementId, _0x3eeceb),
            },
            undoMutation: {
              id: Z.id,
              params: gu(
                _0x579b5e,
                _0x20692f,
                _0xe8c592.elementId,
                e.Tools["deepClone"](_0xe8c592.element),
              ),
            },
          });
      }),
      _0x45ba23.length === 0)
    )
      return false;
    let _0x3783b4 = _0x45ba23.map((_0x15487e) => _0x15487e.redoMutation);
    return !Aa(_0x4bfe00, _0x3783b4) ||
      !(0, e.sequenceExecute)(_0x3783b4, _0x4cf48c.get(e.ICommandService))
        .result
      ? false
      : (_0x4cf48c
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x579b5e,
            redoMutations: _0x3783b4,
            undoMutations: _0x45ba23.map((_0x128c3d) => _0x128c3d.undoMutation),
          }),
        true);
  },
};
function vu(_0x4e2d61, _0x288c68, _0x3bf000, _0x20cba6, _0x2d244e) {
  let _0x5b559d = z(_0x3bf000, _0x20cba6.elementId);
  if (!_0x5b559d) return { redoMutations: [], undoMutations: [] };
  let _0x5e3fdc =
      z(
        {
          ..._0x3bf000,
          [_0x20cba6.elementId]: {
            ..._0x20cba6,
            element: _0x2d244e,
            transform: _0x2d244e.transform,
          },
        },
        _0x20cba6.elementId,
      ) ?? _0x5b559d,
    _0x22f493 = new Map(
      Ir(_0x20cba6.element, _0x5b559d).map((_0xe84c01) => [
        _0xe84c01.lane["id"],
        _0xe84c01.bounds,
      ]),
    ),
    _0x4b6cd1 = new Map(
      Ir(_0x2d244e, _0x5e3fdc).map((_0x497b4a) => [
        _0x497b4a.lane["id"],
        _0x497b4a.bounds,
      ]),
    ),
    _0x4fae64 = { ..._0x3bf000 },
    _0x5f4175 = new Set(),
    _0x2c8f4d = [],
    _0x5227c9 = [];
  return (
    Object.values(_0x3bf000).forEach((_0x331c5e) => {
      let _0x25383d = _0x331c5e.element;
      if (_0x25383d.parentId !== _0x20cba6.elementId || !_0x25383d.laneId)
        return;
      let _0x49d898 = _0x22f493.get(_0x25383d.laneId),
        _0x575b4f = _0x4b6cd1.get(_0x25383d.laneId);
      if (!_0x49d898 || !_0x575b4f) return;
      let _0x3877a2 = _0x575b4f.left - _0x49d898.left,
        _0x220ca0 = _0x575b4f.top - _0x49d898.top;
      if (_0x3877a2 === 0 && _0x220ca0 === 0) return;
      let _0x479ab1 = _0x331c5e.transform ?? {
          left: _0x25383d.transform["left"] ?? 0,
          top: _0x25383d.transform["top"] ?? 0,
          width: _0x25383d.transform["width"] ?? 0,
          height: _0x25383d.transform["height"] ?? 0,
          angle: _0x25383d.transform["rotation"] ?? 0,
          flipX: _0x25383d.transform["flipX"],
          flipY: _0x25383d.transform["flipY"],
        },
        _0x36f776 = {
          ..._0x479ab1,
          left:
            (_0x479ab1.left ?? _0x25383d.transform["left"] ?? 0) + _0x3877a2,
          top: (_0x479ab1.top ?? _0x25383d.transform["top"] ?? 0) + _0x220ca0,
        },
        _0x1e4101 =
          _0x25383d.type === s.Connector
            ? rr(
                {
                  ..._0x25383d,
                  transform: {
                    ..._0x25383d.transform,
                    left: (_0x25383d.transform["left"] ?? 0) + _0x3877a2,
                    top: (_0x25383d.transform["top"] ?? 0) + _0x220ca0,
                  },
                },
                { x: _0x3877a2, y: _0x220ca0 },
              )
            : {
                ..._0x25383d,
                transform: {
                  ..._0x25383d.transform,
                  left: (_0x25383d.transform["left"] ?? 0) + _0x3877a2,
                  top: (_0x25383d.transform["top"] ?? 0) + _0x220ca0,
                },
              };
      (_0x2c8f4d.push({
        id: Z.id,
        params: {
          unitId: _0x4e2d61,
          subUnitId: _0x288c68,
          elementId: _0x331c5e.elementId,
          element: e.Tools["deepClone"](_0x1e4101),
          transform: _0x36f776,
        },
      }),
        (_0x4fae64[_0x331c5e.elementId] = {
          ..._0x331c5e,
          element: _0x1e4101,
          transform: _0x36f776,
        }),
        _0x5f4175.add(_0x331c5e.elementId),
        _0x5227c9.unshift({
          id: Z.id,
          params: {
            unitId: _0x4e2d61,
            subUnitId: _0x288c68,
            elementId: _0x331c5e.elementId,
            element: e.Tools["deepClone"](_0x25383d),
            transform: _0x331c5e.transform
              ? { ..._0x331c5e.transform }
              : _0x331c5e.transform,
          },
        }));
    }),
    _0x5f4175.size > 0 &&
      Object.values(_0x4fae64).forEach((_0x3f4fef) => {
        if (!X(_0x3f4fef) || _0x5f4175.has(_0x3f4fef.elementId)) return;
        let _0x36868b = fr(_0x3f4fef.element, _0x5f4175, _0x4fae64);
        if (_0x36868b === _0x3f4fef.element) return;
        let _0x3e70e2 = pr(_0x36868b.transform);
        (_0x2c8f4d.push({
          id: Z.id,
          params: {
            unitId: _0x4e2d61,
            subUnitId: _0x288c68,
            elementId: _0x3f4fef.elementId,
            element: e.Tools["deepClone"](_0x36868b),
            transform: _0x3e70e2,
          },
        }),
          _0x5227c9.unshift({
            id: Z.id,
            params: {
              unitId: _0x4e2d61,
              subUnitId: _0x288c68,
              elementId: _0x3f4fef.elementId,
              element: e.Tools["deepClone"](_0x3f4fef.element),
              transform: _0x3f4fef.transform
                ? { ..._0x3f4fef.transform }
                : _0x3f4fef.transform,
            },
          }),
          (_0x4fae64[_0x3f4fef.elementId] = {
            ..._0x3f4fef,
            element: _0x36868b,
            transform: _0x3e70e2,
          }));
      }),
    { redoMutations: _0x2c8f4d, undoMutations: _0x5227c9 }
  );
}
const yu = {
  id: "board.operation.set-swimlane-lanes",
  type: e.CommandType["OPERATION"],
  handler: (_0x32c664, _0x2bc4eb) => {
    if (!_0x2bc4eb || !_0x2bc4eb.containerId || !Tr(_0x2bc4eb.swimlane))
      return false;
    let {
        unitId: _0x318630,
        subUnitId: _0x325869,
        containerId: _0x5c9585,
      } = _0x2bc4eb,
      _0xbe35da = Er(_0x2bc4eb.swimlane),
      _0x52f67c = _0x32c664.get(N).getElementData(_0x318630, _0x325869),
      _0x5c86cd = _0x52f67c[_0x5c9585],
      _0x3a5d13 = _0x5c86cd == null ? undefined : _0x5c86cd.element;
    if (
      !_0x5c86cd ||
      (_0x3a5d13 == null ? undefined : _0x3a5d13.type) !== s.Container ||
      _0x3a5d13.locked === true ||
      _0x3a5d13.containerData["kind"] !== "swimlane" ||
      !_0x3a5d13.containerData["swimlane"] ||
      Ar(_0x3a5d13.containerData["swimlane"], _0xbe35da)
    )
      return false;
    let _0x327170 = _0x2bc4eb.transform
        ? { ..._0x3a5d13.transform, ..._0x2bc4eb.transform }
        : _0x3a5d13.transform,
      _0x15623c = q({
        ..._0x3a5d13,
        transform: _0x327170,
        containerData: {
          ..._0x3a5d13.containerData,
          swimlane: e.Tools["deepClone"](_0xbe35da),
        },
      }),
      _0x124a63 = {
        id: Z.id,
        params: {
          unitId: _0x318630,
          subUnitId: _0x325869,
          elementId: _0x5c9585,
          element: _0x15623c,
          transform: _0x327170 && { ..._0x327170 },
        },
      },
      _0x55c340 = vu(_0x318630, _0x325869, _0x52f67c, _0x5c86cd, _0x15623c),
      _0x390621 = [_0x124a63, ..._0x55c340.redoMutations];
    if (!Aa(_0x52f67c, _0x390621)) return false;
    let _0x116263 = {
        id: Z.id,
        params: {
          unitId: _0x318630,
          subUnitId: _0x325869,
          elementId: _0x5c9585,
          element: q(e.Tools["deepClone"](_0x3a5d13)),
          transform: _0x5c86cd.transform
            ? { ..._0x5c86cd.transform }
            : _0x5c86cd.transform,
        },
      },
      _0x5ba5c6 = [..._0x55c340.undoMutations, _0x116263];
    return (0, e.sequenceExecute)(_0x390621, _0x32c664.get(e.ICommandService))
      .result
      ? (_0x32c664
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x318630,
            redoMutations: _0x390621,
            undoMutations: _0x5ba5c6,
          }),
        true)
      : false;
  },
};
function bu(_0x226f80) {
  return Number.isFinite(_0x226f80) && _0x226f80 >= 0;
}
function xu(_0xaea19e) {
  var _0x2eb96;
  return [
    ...(((_0x2eb96 = _0xaea19e.containerData["swimlane"]) == null
      ? undefined
      : _0x2eb96.lanes) ?? []),
  ].sort((_0x303155, _0x44d630) => _0x303155.order - _0x44d630.order);
}
function Su(_0x38c4e4, _0x5aba45, _0x504468) {
  var _0x2bc90f;
  let _0xbcedab = xu(_0x38c4e4),
    _0x2cf9b0 = _0xbcedab[_0xbcedab.length - 1];
  if (
    !_0x2cf9b0 ||
    _0x2cf9b0.id !== _0x5aba45.id ||
    _0x5aba45.collapsed === true
  )
    return _0x38c4e4.transform;
  let _0x37c875 = _0x504468 - _0x5aba45.size;
  return _0x37c875 === 0
    ? _0x38c4e4.transform
    : ((_0x2bc90f = _0x38c4e4.containerData["swimlane"]) == null
          ? undefined
          : _0x2bc90f.orientation) === "horizontal"
      ? {
          ..._0x38c4e4.transform,
          height: Math.max(0, (_0x38c4e4.transform["height"] ?? 0) + _0x37c875),
        }
      : {
          ..._0x38c4e4.transform,
          width: Math.max(0, (_0x38c4e4.transform["width"] ?? 0) + _0x37c875),
        };
}
function Cu(_0x4e5f52, _0x3134db, _0x1c52b0) {
  let _0x5d5f07 = xu(_0x4e5f52),
    _0x51d0f8 = _0x5d5f07.findIndex((_0x2fc3a2) => _0x2fc3a2.id === _0x3134db),
    _0x1d8c35 = _0x5d5f07[_0x51d0f8];
  if (
    !_0x1d8c35 ||
    _0x1d8c35.locked === true ||
    _0x1c52b0 < (_0x1d8c35.minSize ?? 0)
  )
    return null;
  let _0x2e5543 = Su(_0x4e5f52, _0x1d8c35, _0x1c52b0),
    _0x5e7061 = _0x5d5f07[_0x51d0f8 + 1],
    _0x5b236c = _0x1c52b0 - _0x1d8c35.size,
    _0x317608 = _0x4e5f52.containerData["swimlane"].lanes["map"]((_0xdac4a4) =>
      _0xdac4a4.id === _0x3134db
        ? { ..._0xdac4a4, size: _0x1c52b0 }
        : _0xdac4a4,
    );
  if (_0x5e7061) {
    if (_0x5e7061.locked === true || _0x5e7061.collapsed === true) return null;
    let _0x1128a0 = _0x5e7061.size - _0x5b236c;
    return _0x1128a0 < (_0x5e7061.minSize ?? 0)
      ? null
      : {
          transform: _0x2e5543,
          lanes: _0x317608.map((_0x2ff193) =>
            _0x2ff193.id === _0x5e7061.id
              ? { ..._0x2ff193, size: _0x1128a0 }
              : _0x2ff193,
          ),
        };
  }
  return { transform: _0x2e5543, lanes: _0x317608 };
}
const wu = {
  id: "board.operation.set-swimlane-lane-size",
  type: e.CommandType["OPERATION"],
  handler: (_0x450eaf, _0x3d836f) => {
    if (
      !_0x3d836f ||
      !_0x3d836f.containerId ||
      !_0x3d836f.laneId ||
      !bu(_0x3d836f.size)
    )
      return false;
    let {
        unitId: _0x4f6cb8,
        subUnitId: _0x4db426,
        containerId: _0x320ed9,
        laneId: _0x3b02fe,
        size: _0x74f1c1,
      } = _0x3d836f,
      _0x374953 = _0x450eaf.get(N).getElementData(_0x4f6cb8, _0x4db426),
      _0x3f6e7e = _0x374953[_0x320ed9],
      _0x7fac3c = _0x3f6e7e == null ? undefined : _0x3f6e7e.element;
    if (
      !_0x3f6e7e ||
      (_0x7fac3c == null ? undefined : _0x7fac3c.type) !== s.Container ||
      _0x7fac3c.locked === true ||
      _0x7fac3c.containerData["kind"] !== "swimlane" ||
      !_0x7fac3c.containerData["swimlane"]
    )
      return false;
    let _0x30c37d = Cu(_0x7fac3c, _0x3b02fe, _0x74f1c1);
    if (!_0x30c37d) return false;
    let _0x5081d4 = Er({
      ..._0x7fac3c.containerData["swimlane"],
      lanes: _0x30c37d.lanes,
    });
    if (Ar(_0x7fac3c.containerData["swimlane"], _0x5081d4)) return false;
    let _0x5a1dfc = q({
        ..._0x7fac3c,
        transform: _0x30c37d.transform,
        containerData: { ..._0x7fac3c.containerData, swimlane: _0x5081d4 },
      }),
      _0x4d09fc = {
        id: Z.id,
        params: {
          unitId: _0x4f6cb8,
          subUnitId: _0x4db426,
          elementId: _0x320ed9,
          element: _0x5a1dfc,
          transform: _0x30c37d.transform
            ? { ..._0x30c37d.transform }
            : _0x30c37d.transform,
        },
      },
      _0x4d7c35 = vu(_0x4f6cb8, _0x4db426, _0x374953, _0x3f6e7e, _0x5a1dfc),
      _0x17bcd6 = [_0x4d09fc, ..._0x4d7c35.redoMutations];
    if (!Aa(_0x374953, _0x17bcd6)) return false;
    let _0x4f10e3 = {
        id: Z.id,
        params: {
          unitId: _0x4f6cb8,
          subUnitId: _0x4db426,
          elementId: _0x320ed9,
          element: q(e.Tools["deepClone"](_0x7fac3c)),
          transform: _0x3f6e7e.transform
            ? { ..._0x3f6e7e.transform }
            : _0x3f6e7e.transform,
        },
      },
      _0x2bcce5 = [..._0x4d7c35.undoMutations, _0x4f10e3];
    return (0, e.sequenceExecute)(_0x17bcd6, _0x450eaf.get(e.ICommandService))
      .result
      ? (_0x450eaf
          .get(e.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x4f6cb8,
            redoMutations: _0x17bcd6,
            undoMutations: _0x2bcce5,
          }),
        true)
      : false;
  },
};
function Tu(_0x426f84) {
  return JSON.parse(JSON.stringify(_0x426f84));
}
function Eu(_0x2dccfd, _0x3b3aaa, _0x13b543) {
  return _0x13b543.map((_0x58bbac) => ({
    unitId: _0x2dccfd,
    subUnitId: _0x3b3aaa,
    elementId: _0x58bbac,
  }));
}
function Du(_0x585862, _0x29036b, _0x2c3f51) {
  let _0x2e3168 = _0x29036b.getUnitId(),
    _0x35a2ff = _0x29036b.getSnapshot();
  Fa(_0x35a2ff).forEach((_0x42e1c8) => {
    let _0x5ef0e3 = Ra(_0x35a2ff, _0x42e1c8);
    if (!_0x5ef0e3) return;
    let _0x14b3f1 = _0x585862.getElementOrder(_0x2e3168, _0x42e1c8),
      _0x56b95d = new Set(_0x14b3f1),
      { data: _0x2e8f44, order: _0x47a0ef } = Ye(
        _0x2e3168,
        _0x42e1c8,
        _0x5ef0e3.elements,
        _0x5ef0e3.elementOrder,
        _0x2c3f51,
      ),
      _0x31f5d3 = new Set(_0x47a0ef),
      _0x30b2d7 = {
        ..._0x585862.getElementDataForUnit(_0x2e3168),
        [_0x42e1c8]: { data: _0x2e8f44, order: _0x47a0ef },
      };
    _0x585862.registerElementData(_0x2e3168, _0x30b2d7);
    let _0x2f7f7b = _0x14b3f1.filter((_0x2e1c76) => !_0x31f5d3.has(_0x2e1c76)),
      _0x4921ed = _0x47a0ef.filter((_0x5de2f3) => !_0x56b95d.has(_0x5de2f3)),
      _0x4deace = _0x47a0ef.filter((_0x1db4e7) => _0x56b95d.has(_0x1db4e7));
    (_0x2f7f7b.length > 0 &&
      _0x585862.removeElementNotification(Eu(_0x2e3168, _0x42e1c8, _0x2f7f7b)),
      _0x4921ed.length > 0 &&
        _0x585862.addElementNotification(Eu(_0x2e3168, _0x42e1c8, _0x4921ed)),
      _0x4deace.length > 0 &&
        _0x585862.updateElementNotification(
          Eu(_0x2e3168, _0x42e1c8, _0x4deace),
        ));
  });
}
const Ou = {
  id: "board.operation.set-theme",
  type: e.CommandType["OPERATION"],
  handler: (_0x2f26b2, _0x5a09fd) => {
    if (
      !(_0x5a09fd != null && _0x5a09fd.themeId) &&
      !(_0x5a09fd != null && _0x5a09fd.themeData)
    )
      return false;
    let _0x21fa73 =
      _0x5a09fd.themeData ??
      (_0x5a09fd.themeId ? ve(_0x5a09fd.themeId) : undefined);
    if (!_0x21fa73) return false;
    let _0xd3fa8c = _0x2f26b2
      .get(e.IUniverInstanceService)
      .getUnit(_0x5a09fd.unitId, e.UniverInstanceType["UNIVER_BOARD"]);
    if (!_0xd3fa8c) return false;
    let _0x42c46b = Tu(_0x21fa73);
    return (
      _0xd3fa8c.setThemeData(_0x42c46b),
      Du(_0x2f26b2.get(N), _0xd3fa8c, _0x42c46b),
      true
    );
  },
};
function ku(_0x309f38, _0x590ecb) {
  return {
    ..._0x309f38,
    transform: {
      ..._0x309f38.transform,
      left: _0x590ecb.left,
      top: _0x590ecb.top,
      width: _0x590ecb.width,
      height: _0x590ecb.height,
      rotation: _0x590ecb.angle,
      flipX: _0x590ecb.flipX,
      flipY: _0x590ecb.flipY,
    },
  };
}
function Au(_0x3ffc3f, _0x3678a7, _0x419b6c) {
  let _0x4ee971 = new Set(_0x3678a7),
    _0x3e7373 = _0x419b6c.filter(
      (_0x2adbf8) => _0x4ee971.has(_0x2adbf8) && _0x3ffc3f[_0x2adbf8],
    );
  return (
    _0x3678a7.forEach((_0x2b81fa) => {
      _0x3ffc3f[_0x2b81fa] &&
        !_0x3e7373.includes(_0x2b81fa) &&
        _0x3e7373.push(_0x2b81fa);
    }),
    _0x3e7373
  );
}
function ju(_0x131ef5, _0x13889e, _0x2d3226) {
  let _0x875bd3 = new Set(_0x13889e),
    _0x4ba42d = new Set(_0x13889e),
    _0x2d5836 = _0x2d3226.filter((_0x15e82b) => {
      let _0x14e394 = _0x131ef5[_0x15e82b];
      if (!X(_0x14e394) || _0x875bd3.has(_0x15e82b)) return false;
      let _0x2119d0 = Xi(_0x14e394.element);
      return (
        _0x2119d0.length > 0 &&
        _0x2119d0.every((_0x1b868a) => _0x875bd3.has(_0x1b868a))
      );
    });
  return [
    ..._0x13889e,
    ..._0x2d5836.filter((_0x131261) =>
      _0x4ba42d.has(_0x131261) ? false : (_0x4ba42d.add(_0x131261), true),
    ),
  ].sort((_0x2211d, _0x4ec3b8) => {
    let _0x2b9291 = _0x2d3226.indexOf(_0x2211d),
      _0x4a4d86 = _0x2d3226.indexOf(_0x4ec3b8);
    return (
      (_0x2b9291 >= 0 ? _0x2b9291 : 2 ** 53 - 1) -
      (_0x4a4d86 >= 0 ? _0x4a4d86 : 2 ** 53 - 1)
    );
  });
}
function Mu(_0x121733, _0x1846f3) {
  let _0x154564 = new Set(_0x1846f3);
  return _0x1846f3.filter((_0x2e02c2) => {
    let _0x38e4c7 = _0x121733[_0x2e02c2];
    if (!X(_0x38e4c7)) return true;
    let _0xba0002 = Xi(_0x38e4c7.element);
    return (
      _0xba0002.length > 0 &&
      _0xba0002.every((_0x47d133) => _0x154564.has(_0x47d133))
    );
  });
}
function Nu(_0x244409, _0x4efd8a, _0x17495b) {
  var _0xd2054;
  let _0x23d887 =
      (_0xd2054 = _0x244409[_0x4efd8a]) == null
        ? undefined
        : _0xd2054.element["parentId"],
    _0x285f7c = new Set([_0x4efd8a]);
  for (; _0x23d887;) {
    if (_0x285f7c.has(_0x23d887)) return false;
    let _0xe62ffc = _0x244409[_0x23d887];
    if (!_0xe62ffc || _0xe62ffc.element["type"] !== s.Container) return false;
    if (_0x17495b.has(_0x23d887)) return true;
    (_0x285f7c.add(_0x23d887), (_0x23d887 = _0xe62ffc.element["parentId"]));
  }
  return false;
}
function Pu(_0x39d1d1, _0x40546f) {
  let _0xa9fd97 = new Set(_0x40546f);
  return _0x40546f.filter((_0x4b8510) => {
    let _0x25f297 = _0x39d1d1[_0x4b8510];
    return _0x25f297
      ? X(_0x25f297)
        ? true
        : !Nu(_0x39d1d1, _0x4b8510, _0xa9fd97)
      : false;
  });
}
function Fu(_0x2f066b, _0x2eb4fb) {
  let _0x3fc9b5 = Array.from(
    new Set(
      _0x2eb4fb.map((_0x4ce4fc) => {
        var _0x39b41b;
        return (_0x39b41b = _0x2f066b[_0x4ce4fc]) == null
          ? undefined
          : _0x39b41b.element["parentId"];
      }),
    ),
  );
  return _0x3fc9b5.length === 1 ? _0x3fc9b5[0] : Gt(_0x2f066b, _0x2eb4fb);
}
function Iu(_0xda4f76, _0x4f149b) {
  var _0x43da7f;
  let _0x504c84 = _0x4f149b
    ? (_0x43da7f = _0xda4f76[_0x4f149b]) == null
      ? undefined
      : _0x43da7f.element
    : undefined;
  return (
    (_0x504c84 == null ? undefined : _0x504c84.type) === s.Container &&
    _0x504c84.containerData["behavior"].membershipLocked
  );
}
function Lu(_0x4b8455, _0x3221b6) {
  var _0x3fb4fe;
  if (!_0x3221b6) return true;
  let _0x2349b2 =
    (_0x3fb4fe = _0x4b8455[_0x3221b6]) == null ? undefined : _0x3fb4fe.element;
  if (!_0x2349b2 || _0x2349b2.type !== s.Container) return false;
  let _0x2bad0d = _0x2349b2.containerData["behavior"];
  return (
    !_0x2bad0d.membershipLocked &&
    _0x2bad0d.acceptsChildren &&
    _0x2bad0d.acceptsContainer &&
    _0x2bad0d.allowNested
  );
}
function Ru(_0x4c4320, _0x2e033b, _0x1d0c57) {
  var _0x27284d, _0x1542e5;
  if (!_0x2e033b) return;
  let _0x29c2af =
      (_0x27284d = _0x4c4320[_0x2e033b]) == null
        ? undefined
        : _0x27284d.element,
    _0x20d2b5 = z(_0x4c4320, _0x2e033b);
  if (!(
    !_0x29c2af ||
    _0x29c2af.type !== s.Container ||
    _0x29c2af.containerData["kind"] !== "swimlane" ||
    !_0x20d2b5
  ))
    return (_0x1542e5 = Wr(_0x29c2af, _0x20d2b5, _0x1d0c57)) == null
      ? undefined
      : _0x1542e5.lane["id"];
}
const zu = {
    id: "board.operation.wrap-elements-in-container",
    type: e.CommandType["OPERATION"],
    handler: (_0x1e260f, _0x22b734) => {
      if (!_0x22b734 || _0x22b734.elementIds["length"] === 0) return false;
      let { unitId: _0x2a2bda, subUnitId: _0x58c53c } = _0x22b734,
        _0x3b8fab = _0x1e260f.get(N),
        _0x210b53 = _0x3b8fab.getElementData(_0x2a2bda, _0x58c53c),
        _0x565bbd = _0x3b8fab.getElementOrder(_0x2a2bda, _0x58c53c);
      if (
        new Set(_0x22b734.elementIds).size !== _0x22b734.elementIds["length"] ||
        _0x22b734.elementIds["some"]((_0x17745c) => !_0x210b53[_0x17745c])
      )
        return false;
      let _0x4626e4 = ju(
        _0x210b53,
        Mu(
          _0x210b53,
          da(_0x210b53, Au(_0x210b53, _0x22b734.elementIds, _0x565bbd)),
        ),
        _0x565bbd,
      );
      if (_0x4626e4.length === 0) return false;
      let _0x2b0463 = Pu(_0x210b53, _0x4626e4);
      if (_0x2b0463.length === 0) return false;
      let _0x12aa6d = _0x2b0463.filter((_0x3f84ff) => {
        var _0x3063b0;
        return (
          ((_0x3063b0 = _0x210b53[_0x3f84ff]) == null
            ? undefined
            : _0x3063b0.element["type"]) !== s.Connector
        );
      });
      if (_0x12aa6d.length === 0) return false;
      let _0x5ac29f = _0x12aa6d
        .map((_0x722ecd) => {
          var _0x4d57cd;
          return (_0x4d57cd = R(_0x210b53, _0x722ecd)) == null
            ? undefined
            : _0x4d57cd.worldTransform;
        })
        .filter((_0x403955) => !!_0x403955);
      if (_0x5ac29f.length !== _0x12aa6d.length) return false;
      let _0x364aff = _0x5ac29f.map((_0xd2675c) => ({
          left: _0xd2675c.left ?? 0,
          top: _0xd2675c.top ?? 0,
          width: _0xd2675c.width ?? 0,
          height: _0xd2675c.height ?? 0,
        })),
        _0x10bd4b = Math.min(..._0x364aff.map((_0x2f73ae) => _0x2f73ae.left)),
        _0x218620 = Math.min(..._0x364aff.map((_0x323ae5) => _0x323ae5.top)),
        _0x198837 = Math.max(..._0x364aff.map(U)),
        _0x1da8d3 = Math.max(..._0x364aff.map(W)),
        _0x5220ac = {
          left: _0x10bd4b,
          top: _0x218620,
          width: _0x198837 - _0x10bd4b,
          height: _0x1da8d3 - _0x218620,
        },
        _0x4f2784 = Fu(_0x210b53, _0x2b0463);
      if (
        !Lu(_0x210b53, _0x4f2784) ||
        _0x2b0463.some((_0x196f24) => {
          var _0x4a9664;
          return Iu(
            _0x210b53,
            (_0x4a9664 = _0x210b53[_0x196f24]) == null
              ? undefined
              : _0x4a9664.element["parentId"],
          );
        })
      )
        return false;
      let _0x1ec093 = $r.padding,
        _0x160b66 = $r.headerSize,
        _0x23fcef = {
          left: _0x10bd4b - _0x1ec093.left,
          top: _0x218620 - _0x160b66 - _0x1ec093.top,
          width: _0x198837 - _0x10bd4b + _0x1ec093.left + _0x1ec093.right,
          height:
            _0x1da8d3 -
            _0x218620 +
            _0x160b66 +
            _0x1ec093.top +
            _0x1ec093.bottom,
          angle: 0,
        },
        _0xcb8e3d = Ru(_0x210b53, _0x4f2784, _0x5220ac),
        _0x422589 = V(
          B(_0x210b53, { parentId: _0x4f2784, worldTransform: Xt(_0x23fcef) }),
        ),
        _0x54e5ef = fi({
          id: _0x22b734.containerId,
          title: _0x22b734.title,
          parentId: _0x4f2784,
          laneId: _0xcb8e3d,
          left: _0x422589.left,
          top: _0x422589.top,
          width: _0x422589.width,
          height: _0x422589.height,
        }),
        _0x159bb6 = Math.min(
          ..._0x4626e4.map((_0x1ba191) => {
            let _0x41c162 = _0x565bbd.indexOf(_0x1ba191);
            return _0x41c162 >= 0 ? _0x41c162 : _0x565bbd.length;
          }),
        ),
        _0xdc6135 = {
          ..._0x210b53,
          [_0x54e5ef.id]: {
            unitId: _0x2a2bda,
            subUnitId: _0x58c53c,
            elementId: _0x54e5ef.id,
            transform: {
              left: _0x54e5ef.transform["left"],
              top: _0x54e5ef.transform["top"],
              width: _0x54e5ef.transform["width"],
              height: _0x54e5ef.transform["height"],
              angle: _0x54e5ef.transform["rotation"] ?? 0,
              flipX: _0x54e5ef.transform["flipX"],
              flipY: _0x54e5ef.transform["flipY"],
            },
            element: _0x54e5ef,
          },
        },
        _0x3f07fc = [];
      if (
        (_0x2b0463.forEach((_0x2a49f9) => {
          var _0x585e3f;
          let _0x1031fe = _0x210b53[_0x2a49f9],
            _0x223470 =
              (_0x585e3f = R(_0x210b53, _0x2a49f9)) == null
                ? undefined
                : _0x585e3f.worldTransform;
          if (!_0x223470) return;
          let _0x5a46d4 = V(
              B(_0xdc6135, {
                parentId: _0x54e5ef.id,
                worldTransform: _0x223470,
              }),
            ),
            _0x1c09e0 = ku(
              {
                ..._0x1031fe.element,
                parentId: _0x54e5ef.id,
                laneId: undefined,
              },
              _0x5a46d4,
            );
          _0x3f07fc.push({
            id: Z.id,
            params: {
              unitId: _0x2a2bda,
              subUnitId: _0x58c53c,
              elementId: _0x2a49f9,
              element: _0x1c09e0,
              transform: _0x5a46d4,
            },
          });
        }),
        _0x3f07fc.length !== _0x2b0463.length)
      )
        return false;
      let _0x403804 = [
          {
            id: xo.id,
            params: {
              unitId: _0x2a2bda,
              subUnitId: _0x58c53c,
              element: _0x54e5ef,
              insertIndex: _0x159bb6,
            },
          },
          ..._0x3f07fc,
        ],
        _0xb1cb70 = [
          ..._0x2b0463.map((_0x360b42) => {
            let _0x4f4990 = _0x210b53[_0x360b42];
            return {
              id: Z.id,
              params: {
                unitId: _0x2a2bda,
                subUnitId: _0x58c53c,
                elementId: _0x360b42,
                element: e.Tools["deepClone"](_0x4f4990.element),
                transform: _0x4f4990.transform
                  ? { ..._0x4f4990.transform }
                  : _0x4f4990.transform,
              },
            };
          }),
          {
            id: us.id,
            params: {
              unitId: _0x2a2bda,
              subUnitId: _0x58c53c,
              elementId: _0x54e5ef.id,
            },
          },
        ];
      return !ja(_0x210b53, _0x403804) ||
        !(0, e.sequenceExecute)(_0x403804, _0x1e260f.get(e.ICommandService))
          .result
        ? false
        : (_0x1e260f
            .get(e.IUndoRedoService)
            .pushUndoRedo({
              unitID: _0x2a2bda,
              redoMutations: _0x403804,
              undoMutations: _0xb1cb70,
            }),
          true);
    },
  },
  Bu = { width: 1920, height: 1080 };
function Vu(
  _0x8ead02 = (0, e.generateRandomId)(6),
  _0x23c09c = "Untitled\x20Board",
  _0x375f3f,
) {
  let _0x9edef0 = (0, e.generateRandomId)(6),
    _0x1c01c3 = {
      id: _0x9edef0,
      pageType: "page",
      name: "Board",
      elementOrder: [],
      elements: {},
      background: { type: "none" },
    },
    _0x262d1b = [_0x9edef0],
    _0x165656 = { [_0x9edef0]: _0x1c01c3 },
    _0x1bfd52 = {
      id: _0x8ead02,
      name: _0x23c09c,
      appVersion: "0.0.1",
      defaultPageSize: { ...Bu },
      pageOrder: _0x262d1b,
      pages: _0x165656,
      activePageId: _0x9edef0,
      slideOrder: _0x262d1b,
      slides: _0x165656,
      activeSlideId: _0x9edef0,
      theme: ke,
    };
  return (_0x375f3f != null && (_0x1bfd52.locale = _0x375f3f), _0x1bfd52);
}
function Hu(_0x3e18bb, _0x111ab4) {
  return Object.fromEntries(
    Object.values(_0x111ab4.elements).map((_0x17b718) => [
      _0x17b718.id,
      {
        unitId: _0x3e18bb,
        subUnitId: _0x111ab4.id,
        elementId: _0x17b718.id,
        element: _0x17b718,
        transform: {
          left: _0x17b718.transform["left"] ?? 0,
          top: _0x17b718.transform["top"] ?? 0,
          width: _0x17b718.transform["width"] ?? 0,
          height: _0x17b718.transform["height"] ?? 0,
          angle: _0x17b718.transform["rotation"] ?? 0,
          flipX: _0x17b718.transform["flipX"],
          flipY: _0x17b718.transform["flipY"],
        },
      },
    ]),
  );
}
function Uu(_0x30a792) {
  return _0x30a792.left === undefined ||
    _0x30a792.top === undefined ||
    _0x30a792.width === undefined ||
    _0x30a792.height === undefined
    ? null
    : {
        left: _0x30a792.left,
        top: _0x30a792.top,
        width: _0x30a792.width,
        height: _0x30a792.height,
      };
}
function Wu(_0x525b76, _0x2e50fc) {
  _0x525b76.elements[_0x2e50fc.id] = _0x2e50fc;
}
function Gu(_0x54ed20) {
  let { padding: _0x1664e6 } = _0x54ed20.containerData;
  return (
    !!_0x1664e6 &&
    _0x1664e6.top === 0 &&
    _0x1664e6.right === 0 &&
    _0x1664e6.bottom === 0 &&
    _0x1664e6.left === 0
  );
}
function Ku(_0x17c2e2) {
  let _0x2d5f09 = false;
  return (
    Object.values(_0x17c2e2.elements).forEach((_0x1cc639) => {
      var _0x57b4f6;
      let _0x5a221e =
        _0x1cc639.type === s.Container &&
        _0x1cc639.containerData["kind"] === "swimlane"
          ? _0x1cc639.containerData["swimlane"]
          : undefined;
      if (
        _0x1cc639.type !== s.Container ||
        _0x1cc639.containerData["kind"] !== "swimlane" ||
        !_0x5a221e ||
        (_0x5a221e.laneGap === 0 &&
          _0x5a221e.headerSize !== undefined &&
          _0x5a221e.collapsedLaneSize !== undefined &&
          Gu(_0x1cc639))
      )
        return;
      let _0xb05ab7 = q(_0x1cc639);
      if (_0xb05ab7.type !== s.Container) {
        (Wu(_0x17c2e2, _0xb05ab7), (_0x2d5f09 = true));
        return;
      }
      let _0x4744e6 =
        (_0x57b4f6 = _0xb05ab7.containerData["swimlane"]) == null
          ? undefined
          : _0x57b4f6.orientation;
      (Wu(_0x17c2e2, {
        ..._0xb05ab7,
        containerData: {
          ..._0xb05ab7.containerData,
          swimlane: _0xb05ab7.containerData["swimlane"]
            ? {
                ..._0xb05ab7.containerData["swimlane"],
                headerSize:
                  _0xb05ab7.containerData["swimlane"].headerSize ??
                  (_0x4744e6 === "horizontal"
                    ? K.horizontalHeaderSize
                    : K.verticalHeaderSize),
                collapsedLaneSize:
                  _0xb05ab7.containerData["swimlane"].collapsedLaneSize ??
                  K.collapsedLaneSize,
              }
            : _0xb05ab7.containerData["swimlane"],
        },
      }),
        (_0x2d5f09 = true));
    }),
    _0x2d5f09
  );
}
function qu(_0x52c27b) {
  let _0x283cda = false;
  return (
    Object.values(_0x52c27b.elements).forEach((_0x19bcab) => {
      if (_0x19bcab.type !== s.Container) return;
      let _0x584bd0 = Ti(_0x19bcab);
      _0x584bd0 !== _0x19bcab && (Wu(_0x52c27b, _0x584bd0), (_0x283cda = true));
    }),
    _0x283cda
  );
}
function Ju(_0x383ab7) {
  let _0x42c629 = false;
  return (
    Object.values(_0x383ab7.elements).forEach((_0xeda46) => {
      _0xeda46.type === s.Container &&
        (_0xeda46.transform["rotation"] ?? 0) !== 0 &&
        (Wu(_0x383ab7, {
          ..._0xeda46,
          transform: { ..._0xeda46.transform, rotation: 0 },
        }),
        (_0x42c629 = true));
    }),
    _0x42c629
  );
}
function Yu(_0x5ce7e4, _0x554701) {
  let _0x845628 = _0x5ce7e4.elements[_0x554701];
  return !_0x845628 ||
    _0x845628.type !== s.Container ||
    !_0x845628.containerData["behavior"].membershipLocked ||
    _0x845628.containerData["behavior"].autoResize
    ? false
    : (Wu(_0x5ce7e4, {
        ..._0x845628,
        containerData: {
          ..._0x845628.containerData,
          behavior: {
            ..._0x845628.containerData["behavior"],
            autoResize: true,
          },
        },
      }),
      true);
}
function Xu(_0x2a91a9, _0x54e5a5, _0x566efd) {
  return { ..._0x2a91a9, parentId: _0x54e5a5, laneId: _0x566efd };
}
function Zu(_0x185336, _0x517c30, _0x2ba8ed) {
  var _0x1b2242;
  if (!_0x517c30) return false;
  let _0x3f9d9a = _0x185336.elements[_0x517c30];
  return (
    (_0x3f9d9a == null ? undefined : _0x3f9d9a.type) === s.Container &&
    _0x3f9d9a.containerData["kind"] === "swimlane" &&
    ((_0x1b2242 = _0x3f9d9a.containerData["swimlane"]) == null
      ? undefined
      : _0x1b2242.lanes["some"]((_0x1105f7) => _0x1105f7.id === _0x2ba8ed)) ===
      true
  );
}
function Qu(_0x493304, _0x47e38f, _0x2f6e74, _0x318202) {
  var _0x29fb3f, _0x15e1d6, _0x122d51;
  if (!_0x47e38f) return;
  let _0x582f0a =
    (_0x29fb3f = _0x493304[_0x47e38f]) == null ? undefined : _0x29fb3f.element;
  if (
    _0x2f6e74 &&
    (_0x582f0a == null ? undefined : _0x582f0a.type) === s.Container &&
    _0x582f0a.containerData["kind"] === "swimlane" &&
    ((_0x15e1d6 = _0x582f0a.containerData["swimlane"]) == null
      ? undefined
      : _0x15e1d6.lanes["some"]((_0x485992) => _0x485992.id === _0x2f6e74)) ===
      true
  )
    return _0x2f6e74;
  let _0x229822 = z(_0x493304, _0x47e38f);
  if (!(
    (_0x582f0a == null ? undefined : _0x582f0a.type) !== s.Container ||
    _0x582f0a.containerData["kind"] !== "swimlane" ||
    !_0x229822 ||
    !_0x318202
  ))
    return (_0x122d51 = Wr(_0x582f0a, _0x229822, _0x318202)) == null
      ? undefined
      : _0x122d51.lane["id"];
}
function $u(_0x5d10a9, _0x3077bc, _0x16767b, _0x11b29a) {
  let _0x443eff = _0x16767b,
    _0xee4b47 = new Set([_0x11b29a]);
  for (; _0x443eff;) {
    var _0x5edfba, _0x3d9820;
    if (_0xee4b47.has(_0x443eff)) return;
    let _0x250699 =
      (_0x5edfba = _0x3077bc[_0x443eff]) == null
        ? undefined
        : _0x5edfba.element;
    if (!_0x250699 || _0x250699.type !== s.Container) return;
    if (_0x250699.visible !== false) return _0x443eff;
    (_0xee4b47.add(_0x443eff),
      (_0x443eff =
        (_0x3d9820 = _0x5d10a9.elements[_0x443eff]) == null
          ? undefined
          : _0x3d9820.parentId));
  }
}
function ed(_0x3ff55c) {
  return [
    ..._0x3ff55c.elementOrder,
    ...Object.keys(_0x3ff55c.elements).filter(
      (_0x465c3c) => !_0x3ff55c.elementOrder["includes"](_0x465c3c),
    ),
  ];
}
function td(_0x2b0c5d, _0x4d9d0f) {
  let _0x8903d4 = false;
  return (
    ed(_0x4d9d0f).forEach((_0x224f30) => {
      var _0x18f7cc, _0x2812fd;
      let _0xd8b2de = _0x4d9d0f.elements[_0x224f30];
      if (!_0xd8b2de) return;
      let _0x5db0a2 = _0xd8b2de.parentId,
        _0x329615 = _0xd8b2de.laneId,
        _0x4338a7 = Hu(_0x2b0c5d, _0x4d9d0f),
        _0x36a178 = _0x5db0a2
          ? (_0x18f7cc = _0x4338a7[_0x5db0a2]) == null
            ? undefined
            : _0x18f7cc.element
          : undefined,
        _0x356a78 =
          (_0x2812fd = R(_0x4338a7, _0x224f30)) == null
            ? undefined
            : _0x2812fd.worldTransform,
        _0x5db99d = z(_0x4338a7, _0x224f30);
      _0x5db0a2 && (!_0x36a178 || _0x36a178.type !== s.Container)
        ? (_0x5db0a2 = undefined)
        : _0x5db0a2 &&
            (_0x36a178 == null ? undefined : _0x36a178.visible) === false
          ? (_0x5db0a2 = $u(
              _0x4d9d0f,
              _0x4338a7,
              _0x36a178.parentId,
              _0x224f30,
            ))
          : _0x5db0a2 &&
            Wt(_0x4338a7, _0x224f30, _0x5db0a2) &&
            (_0x5db0a2 = undefined);
      let _0x55ca27 = _0x5db0a2 !== _0xd8b2de.parentId;
      if (
        (_0x329615 &&
          !Zu(_0x4d9d0f, _0x5db0a2, _0x329615) &&
          (_0x329615 = undefined),
        _0x55ca27 &&
          (_0x329615 = Qu(_0x4338a7, _0x5db0a2, _0x329615, _0x5db99d)),
        _0x55ca27 || _0x329615 !== _0xd8b2de.laneId)
      ) {
        let _0x12f652 = _0x356a78
          ? B(_0x4338a7, { parentId: _0x5db0a2, worldTransform: _0x356a78 })
          : _0xd8b2de.transform;
        (Wu(_0x4d9d0f, {
          ...Xu(_0xd8b2de, _0x5db0a2, _0x329615),
          transform: { ..._0xd8b2de.transform, ..._0x12f652 },
        }),
          (_0x8903d4 = true));
      }
    }),
    _0x8903d4
  );
}
function nd(_0x4b0ddb, _0x11a967) {
  let _0x2a81dc = false;
  return (
    ed(_0x11a967).forEach((_0x100320) => {
      var _0x221390;
      let _0x43b603 = _0x11a967.elements[_0x100320];
      if (!_0x43b603 || _0x43b603.type !== s.Connector) return;
      let _0xcffde2 = Hu(_0x4b0ddb, _0x11a967),
        _0x503ef5 = aa(_0xcffde2, _0x43b603);
      if (
        _0x503ef5.parentId === _0x43b603.parentId &&
        _0x503ef5.laneId === _0x43b603.laneId
      )
        return;
      let _0x365a42 =
        (_0x221390 = R(_0xcffde2, _0x100320)) == null
          ? undefined
          : _0x221390.worldTransform;
      _0x365a42 &&
        (Wu(_0x11a967, {
          ..._0x43b603,
          parentId: _0x503ef5.parentId,
          laneId: _0x503ef5.laneId,
          transform: {
            ..._0x43b603.transform,
            ...B(_0xcffde2, {
              parentId: _0x503ef5.parentId,
              worldTransform: _0x365a42,
            }),
          },
        }),
        (_0x2a81dc = true));
    }),
    _0x2a81dc
  );
}
function rd(_0x5839cc, _0x42f99a) {
  let _0x4bc272 = false,
    _0x1cb9cd = ed(_0x42f99a);
  return (
    _0x1cb9cd.forEach((_0x39f8d3) => {
      let _0xc25e3b = _0x42f99a.elements[_0x39f8d3];
      if (
        !_0xc25e3b ||
        _0xc25e3b.type !== s.Container ||
        !_0xc25e3b.containerData["behavior"].membershipLocked
      )
        return;
      Yu(_0x42f99a, _0x39f8d3) && (_0x4bc272 = true);
      let _0x1bdea5 = Hu(_0x5839cc, _0x42f99a),
        _0x588f49 = z(_0x1bdea5, _0x39f8d3);
      if (!_0x588f49) return;
      let _0x55fa55 = _0x1cb9cd.filter((_0x2d58d3) => {
          var _0x162662;
          return (
            ((_0x162662 = _0x42f99a.elements[_0x2d58d3]) == null
              ? undefined
              : _0x162662.parentId) === _0x39f8d3
          );
        }),
        _0x3c83b2 = new Map(
          _0x55fa55.map((_0x31a36f) => {
            var _0x508b35;
            return [
              _0x31a36f,
              (_0x508b35 = R(_0x1bdea5, _0x31a36f)) == null
                ? undefined
                : _0x508b35.worldTransform,
            ];
          }),
        ),
        _0x27bd43 = br([
          xs(_0xc25e3b, _0x588f49),
          ..._0x55fa55
            .filter((_0x526b10) => {
              var _0x4802c9;
              return (
                ((_0x4802c9 = _0x42f99a.elements[_0x526b10]) == null
                  ? undefined
                  : _0x4802c9.type) !== s.Connector
              );
            })
            .map((_0x494069) => z(_0x1bdea5, _0x494069))
            .filter((_0x3e522a) => !!_0x3e522a),
        ]);
      if (!_0x27bd43) return;
      let _0x17004b = Ts(_0xc25e3b, _0x588f49, _0x27bd43);
      if (
        _0x17004b.left === _0x588f49.left &&
        _0x17004b.top === _0x588f49.top &&
        _0x17004b.width === _0x588f49.width &&
        _0x17004b.height === _0x588f49.height
      )
        return;
      let _0x7ab5da = B(Hu(_0x5839cc, _0x42f99a), {
        parentId: _0xc25e3b.parentId,
        worldTransform: { ..._0xc25e3b.transform, ..._0x17004b, rotation: 0 },
      });
      (Wu(_0x42f99a, {
        ..._0xc25e3b,
        transform: { ..._0xc25e3b.transform, ..._0x7ab5da },
      }),
        (_0x4bc272 = true));
      let _0x362c4e = Hu(_0x5839cc, _0x42f99a);
      _0x3c83b2.forEach((_0x435c3a, _0x524186) => {
        let _0x52674b = _0x42f99a.elements[_0x524186];
        !_0x52674b ||
          !_0x435c3a ||
          Wu(_0x42f99a, {
            ..._0x52674b,
            laneId: Qu(_0x362c4e, _0x39f8d3, _0x52674b.laneId, Uu(_0x435c3a)),
            transform: {
              ..._0x52674b.transform,
              ...B(_0x362c4e, {
                parentId: _0x39f8d3,
                worldTransform: _0x435c3a,
              }),
            },
          });
      });
    }),
    _0x4bc272
  );
}
function id(_0x393eda, _0x34562e) {
  return Object.fromEntries(
    Object.entries(_0x34562e).map(([_0x520d66, _0x3dae4d]) => {
      let _0x3c94fd = {
          ..._0x3dae4d,
          elements: { ..._0x3dae4d.elements },
          elementOrder: [..._0x3dae4d.elementOrder],
        },
        _0x5c2214 = qu(_0x3c94fd),
        _0x468ce4 = false;
      Object.values(_0x3c94fd.elements).forEach((_0x57916f) => {
        let _0x44054f = Ct(Pt(Ui(_0x57916f)));
        _0x44054f !== _0x57916f &&
          (Wu(_0x3c94fd, _0x44054f), (_0x468ce4 = true));
      });
      let _0x3b8ae0 = Ku(_0x3c94fd),
        _0x19bc87 = Ju(_0x3c94fd),
        _0x491b66 = td(_0x393eda, _0x3c94fd),
        _0x1f3463 = nd(_0x393eda, _0x3c94fd),
        _0x2e106f = false,
        _0x4bafd4 = Math.max(1, Object.keys(_0x3c94fd.elements).length);
      for (
        let _0x331abf = 0;
        _0x331abf < _0x4bafd4 && rd(_0x393eda, _0x3c94fd);
        _0x331abf++
      )
        _0x2e106f = true;
      let _0x476d56 = nd(_0x393eda, _0x3c94fd);
      return [
        _0x520d66,
        _0x5c2214 ||
        _0x468ce4 ||
        _0x3b8ae0 ||
        _0x19bc87 ||
        _0x491b66 ||
        _0x1f3463 ||
        _0x2e106f ||
        _0x476d56
          ? _0x3c94fd
          : _0x3dae4d,
      ];
    }),
  );
}
var ad = class extends e.UnitModel {
    constructor(_0x3e3648) {
      (super(),
        M(this, "type", e.UniverInstanceType["UNIVER_BOARD"]),
        M(this, "_snapshot", undefined),
        M(this, "_name$", undefined),
        M(this, "_theme$", undefined),
        M(this, "_pageBackgroundChanged$", new t["Subject"]()),
        M(this, "name$", undefined),
        M(this, "theme$", undefined),
        M(
          this,
          "pageBackgroundChanged$",
          this._pageBackgroundChanged$["asObservable"](),
        ),
        (this._snapshot = e.Tools["isEmptyObject"](_0x3e3648)
          ? Vu()
          : this._normalizeSnapshot(_0x3e3648)),
        (this._name$ = new t["BehaviorSubject"](this._snapshot["name"])),
        (this.name$ = this._name$["asObservable"]()),
        (this._theme$ = new t["BehaviorSubject"](this.getThemeData())),
        (this.theme$ = this._theme$["asObservable"]()));
    }
    getUnitId() {
      return this._snapshot["id"];
    }
    setName(_0x26d4fb) {
      ((this._snapshot["name"] = _0x26d4fb), this._name$["next"](_0x26d4fb));
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
    setRev(_0x22e35f) {
      this._snapshot["rev"] = _0x22e35f;
    }
    dispose() {
      (super.dispose(), this._pageBackgroundChanged$["complete"]());
    }
    getActivePageId() {
      let _0x4cffff = za(this._snapshot);
      if (!_0x4cffff)
        throw Error(
          "Board\x20snapshot\x20must\x20contain\x20at\x20least\x20one\x20page.",
        );
      return _0x4cffff;
    }
    getActivePage() {
      let _0x461f09 = this.getActivePageId(),
        _0x13420b = this.getPage(_0x461f09);
      if (!_0x13420b)
        throw Error('Board page "' + _0x461f09 + '" is missing from snapshot.');
      return _0x13420b;
    }
    getPage(_0x59868f) {
      return Ra(this._snapshot, _0x59868f);
    }
    setPageBackground(_0x33c705, _0x4158ac) {
      let _0x1bff2f = this.getPage(_0x33c705);
      return _0x1bff2f
        ? (_0x4158ac
            ? (_0x1bff2f.background = e.Tools["deepClone"](_0x4158ac))
            : Reflect.deleteProperty(_0x1bff2f, "background"),
          this._pageBackgroundChanged$["next"]({
            pageId: _0x33c705,
            background: _0x1bff2f.background
              ? e.Tools["deepClone"](_0x1bff2f.background)
              : undefined,
          }),
          true)
        : false;
    }
    getThemeData() {
      return this._snapshot["theme"] ?? ke;
    }
    setThemeData(_0x37ef1b) {
      ((this._snapshot["theme"] = _0x37ef1b), this._theme$["next"](_0x37ef1b));
    }
    _normalizeSnapshot(_0x3a3a9f) {
      let _0x32d296 = Vu(),
        _0x47ca26 = { ..._0x3a3a9f };
      Reflect.deleteProperty(_0x47ca26, "boardSettings");
      let _0x207cf7 = Fa(_0x3a3a9f, _0x32d296.pageOrder),
        _0x57c2a2 = id(
          _0x3a3a9f.id ?? _0x32d296.id,
          Ia(_0x3a3a9f, _0x32d296.pages),
        ),
        _0x1db0d1 = La(_0x3a3a9f, _0x207cf7) ?? _0x32d296.activePageId;
      return Va({
        ..._0x32d296,
        ..._0x47ca26,
        id: _0x3a3a9f.id ?? (0, e.generateRandomId)(6),
        name: _0x3a3a9f.name ?? "Untitled Board",
        appVersion: _0x3a3a9f.appVersion ?? "0.0.1",
        defaultPageSize: _0x3a3a9f.defaultPageSize ?? _0x32d296.defaultPageSize,
        pageOrder: _0x207cf7,
        pages: _0x57c2a2,
        activePageId: _0x1db0d1,
        theme: _0x3a3a9f.theme ?? ke,
      });
    }
  },
  od = "@univerjs-pro/boards",
  sd = "1.0.0-insiders.20260907-70fc579";
function $(_0x3900f6, _0x1a922d) {
  return function (_0x23020c, _0x1886ce) {
    _0x1a922d(_0x23020c, _0x1886ce, _0x3900f6);
  };
}
function cd(_0x4fa183, _0x13d786, _0x415f90, _0x3e40c5) {
  var _0x574e60 = arguments.length,
    _0x2dfcb0 =
      _0x574e60 < 3
        ? _0x13d786
        : _0x3e40c5 === null
          ? (_0x3e40c5 = Object.getOwnPropertyDescriptor(_0x13d786, _0x415f90))
          : _0x3e40c5,
    _0x2e3e36;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x2dfcb0 = Reflect.decorate(_0x4fa183, _0x13d786, _0x415f90, _0x3e40c5);
  else {
    for (var _0x2e8173 = _0x4fa183.length - 1; _0x2e8173 >= 0; _0x2e8173--)
      (_0x2e3e36 = _0x4fa183[_0x2e8173]) &&
        (_0x2dfcb0 =
          (_0x574e60 < 3
            ? _0x2e3e36(_0x2dfcb0)
            : _0x574e60 > 3
              ? _0x2e3e36(_0x13d786, _0x415f90, _0x2dfcb0)
              : _0x2e3e36(_0x13d786, _0x415f90)) || _0x2dfcb0);
  }
  return (
    _0x574e60 > 3 &&
      _0x2dfcb0 &&
      Object.defineProperty(_0x13d786, _0x415f90, _0x2dfcb0),
    _0x2dfcb0
  );
}
let ld = class {
  constructor(_0x455800, _0xa59d95, _0x1a9837) {
    ((this._commandService = _0x455800),
      (this._boardElementService = _0xa59d95),
      (this._instanceService = _0x1a9837),
      M(this, "hostType", e.UniverInstanceType["UNIVER_BOARD"]));
  }
  get shapeChanged$() {
    return (0, t.merge)(
      this._boardElementService["elementAdd$"],
      this._boardElementService["elementUpdate$"],
      this._boardElementService["elementRemove$"],
    ).pipe(
      (0, t.mergeMap)((_0x126766) => [
        ...new Set(_0x126766.map(({ unitId: _0x431fb8 }) => _0x431fb8)),
      ]),
      (0, t.map)((_0x25f87e) => ({ unitId: _0x25f87e })),
    );
  }
  getShape(_0x3a88ac) {
    let _0x189978 = this._getElement(_0x3a88ac);
    return _0x189978 ? this._toSnapshot(_0x3a88ac, _0x189978) : null;
  }
  listShapes(_0x5d2697) {
    return this._boardElementService["getElementOrder"](
      _0x5d2697.unitId,
      _0x5d2697.subUnitId,
    )
      .map((_0x1df308) => this.getShape({ ..._0x5d2697, shapeId: _0x1df308 }))
      .filter((_0x23297f) => !!_0x23297f);
  }
  listShapesInUnit(_0x18a468) {
    let _0x3043c7 = this._instanceService["getUnit"](
      _0x18a468,
      e.UniverInstanceType["UNIVER_BOARD"],
    );
    return (
      (_0x3043c7 == null
        ? undefined
        : _0x3043c7
            .getSnapshot()
            .pageOrder["flatMap"]((_0x4bf304) =>
              this.listShapes({
                hostType: this.hostType,
                unitId: _0x18a468,
                subUnitId: _0x4bf304,
              }),
            )) ?? []
    );
  }
  createShape(_0x16c294, _0x46db40) {
    let _0x562481 = this._createShapeElement(_0x46db40);
    return this._commandService["syncExecuteCommand"](oc.id, {
      unitId: _0x16c294.unitId,
      subUnitId: _0x16c294.subUnitId,
      element: _0x562481,
    })
      ? this._toSnapshot({ ..._0x16c294, shapeId: _0x562481.id }, _0x562481)
      : null;
  }
  createShapes(_0x5c5202, _0x5addfa) {
    if (_0x5addfa.length === 0) return null;
    let _0x3d1de7 = _0x5addfa.map((_0x20cca7) =>
      this._createShapeElement(_0x20cca7),
    );
    return this._commandService["syncExecuteCommand"](ic.id, {
      unitId: _0x5c5202.unitId,
      subUnitId: _0x5c5202.subUnitId,
      elements: _0x3d1de7,
    })
      ? _0x3d1de7.map((_0x29031e) =>
          this._toSnapshot({ ..._0x5c5202, shapeId: _0x29031e.id }, _0x29031e),
        )
      : null;
  }
  updateShape(_0x38adb9, _0x2dee1d) {
    let _0x3bd106 = this._getElement(_0x38adb9);
    if (!_0x3bd106) return false;
    let _0x20042b =
      _0x3bd106.type === s.Connector
        ? this._updateConnector(_0x38adb9, _0x3bd106, _0x2dee1d)
        : this._updateBasicShape(_0x3bd106, _0x2dee1d);
    return this._commandService["syncExecuteCommand"](ls.id, {
      unitId: _0x38adb9.unitId,
      subUnitId: _0x38adb9.subUnitId,
      elementId: _0x38adb9.shapeId,
      allowInactiveTarget: true,
      element: _0x20042b,
    });
  }
  createFormulaLastValueMutation(_0x1846d5, _0x47b9e7, _0x3eb06f) {
    let _0x38b44b = this._getElement(_0x1846d5);
    if (!_0x38b44b || _0x38b44b.type !== s.Shape) return null;
    let _0x20b06a = _0x38b44b.shapeData["formulaBinding"];
    if (!_0x20b06a) return null;
    let _0x302cb1 = {
        ..._0x38b44b.shapeData,
        formulaBinding: {
          ..._0x20b06a,
          lastValue: e.Tools["deepClone"](_0x3eb06f),
        },
      },
      _0x3f7849 = { ..._0x38b44b, shapeData: _0x302cb1 };
    return {
      id: Z.id,
      params: {
        unitId: _0x1846d5.unitId,
        subUnitId: _0x1846d5.subUnitId,
        elementId: _0x1846d5.shapeId,
        allowInactiveTarget: true,
        element: _0x3f7849,
        formulaLastValueGuard: _0x47b9e7,
      },
    };
  }
  removeShape(_0x5391d4) {
    return this._commandService["syncExecuteCommand"](yl.id, {
      unitId: _0x5391d4.unitId,
      subUnitId: _0x5391d4.subUnitId,
      elementId: _0x5391d4.shapeId,
    });
  }
  bringToFront(_0x5ba83c) {
    return this._arrange(_0x5ba83c, "front");
  }
  bringForward(_0x35efce) {
    return this._arrange(_0x35efce, "forward");
  }
  sendBackward(_0x5c5b46) {
    return this._arrange(_0x5c5b46, "backward");
  }
  sendToBack(_0x4904a4) {
    return this._arrange(_0x4904a4, "back");
  }
  setZOrder(_0x4a92eb, _0x5b3e91) {
    return this._commandService["syncExecuteCommand"](Al.id, {
      unitId: _0x4a92eb.unitId,
      subUnitId: _0x4a92eb.subUnitId,
      elementIds: [_0x4a92eb.shapeId],
      zOrder: _0x5b3e91,
    });
  }
  _getElement(_0x20d5f8) {
    var _0x511f13;
    let _0x338325 =
      (_0x511f13 = this._boardElementService["getElementById"](
        _0x20d5f8.unitId,
        _0x20d5f8.subUnitId,
        _0x20d5f8.shapeId,
      )) == null
        ? undefined
        : _0x511f13.element;
    return (_0x338325 == null ? undefined : _0x338325.type) === s.Shape ||
      (_0x338325 == null ? undefined : _0x338325.type) === s.Connector
      ? _0x338325
      : null;
  }
  _toSnapshot(_0x2cd4eb, _0xb9e4e9) {
    if (_0xb9e4e9.type === s.Connector)
      return this._connectorToSnapshot(_0x2cd4eb, _0xb9e4e9);
    let _0x1fd908 = _0xb9e4e9.shapeData["shapeType"] ?? r.ShapeTypeEnum["Rect"];
    return {
      ..._0x2cd4eb,
      shapeType: _0x1fd908,
      shapeData: e.Tools["deepClone"](_0xb9e4e9.shapeData),
      name: _0xb9e4e9.name,
      description: _0xb9e4e9.description,
      visible: _0xb9e4e9.visible !== false,
      selectable: _0xb9e4e9.selectable !== false,
      transform: ud(_0xb9e4e9.transform),
    };
  }
  _connectorToSnapshot(_0x43c9e2, _0x3fc3c1) {
    var _0x4d071b, _0x3cb96e;
    let _0x54c9ac = (0, r.computeConnectorRouteLayout)(
        this._getConnectorRoute(_0x43c9e2, _0x3fc3c1),
        dd(_0x3fc3c1.connectorData["routing"]),
      ),
      _0x1e817a = pd(
        _0x3fc3c1.connectorData["start"],
        _0x3fc3c1.connectorData["end"],
      ),
      _0x3e5602 = md(_0x3fc3c1.connectorData["style"]),
      _0x5bcc11 = {
        shapeType: _0x54c9ac.lineType,
        adjustValues: _0x54c9ac.adjustValues,
        stroke: _0x3e5602,
        relation: _0x1e817a.from || _0x1e817a.to ? _0x1e817a : undefined,
        ln: {
          ..._0x3e5602,
          startArrow: hd(
            (_0x4d071b = _0x3fc3c1.connectorData["style"]) == null
              ? undefined
              : _0x4d071b.startMarker,
          ),
          endArrow: hd(
            (_0x3cb96e = _0x3fc3c1.connectorData["style"]) == null
              ? undefined
              : _0x3cb96e.endMarker,
          ),
        },
      };
    return {
      ..._0x43c9e2,
      shapeType: _0x54c9ac.lineType,
      shapeData: _0x5bcc11,
      name: _0x3fc3c1.name,
      description: _0x3fc3c1.description,
      visible: _0x3fc3c1.visible !== false,
      selectable: _0x3fc3c1.selectable !== false,
      transform: {
        left: _0x54c9ac.worldRect["left"],
        top: _0x54c9ac.worldRect["top"],
        width: _0x54c9ac.worldRect["width"],
        height: _0x54c9ac.worldRect["height"],
        rotation: _0x54c9ac.rotation,
        flipX: _0x54c9ac.worldRect["flipX"] ?? false,
        flipY: _0x54c9ac.worldRect["flipY"] ?? false,
      },
    };
  }
  _getConnectorRoute(_0x39ecc9, _0x1f20bb) {
    var _0x4f5f26, _0x388116;
    let _0x5ac6c6 = this._getEndpointPoint(
        _0x39ecc9,
        _0x1f20bb.connectorData["start"],
        true,
        _0x1f20bb.transform,
      ),
      _0x565e86 = this._getEndpointPoint(
        _0x39ecc9,
        _0x1f20bb.connectorData["end"],
        false,
        _0x1f20bb.transform,
      ),
      _0x1cd90a =
        _0x1f20bb.connectorData["routing"] === "curve"
          ? (_0x4f5f26 = _0x1f20bb.connectorData["curveData"]) == null
            ? undefined
            : _0x4f5f26.anchors
          : _0x1f20bb.connectorData["routing"] === "orthogonal"
            ? (((_0x388116 = _0x1f20bb.connectorData["orthogonalData"]) == null
                ? undefined
                : _0x388116.routePoints) ??
              _0x1f20bb.connectorData["waypoints"])
            : _0x1f20bb.connectorData["waypoints"],
      _0x2a0799 =
        (_0x1cd90a == null
          ? undefined
          : _0x1cd90a.map(({ x: _0x3cf584, y: _0x5847f5 }) => ({
              x: _0x3cf584,
              y: _0x5847f5,
            }))) ?? [];
    if (
      _0x2a0799.length > 0 ||
      _0x1f20bb.connectorData["routing"] === "straight"
    )
      return [_0x5ac6c6, ..._0x2a0799, _0x565e86];
    let _0x3527f9 = (_0x5ac6c6.x + _0x565e86.x) / 2;
    return [
      _0x5ac6c6,
      { x: _0x3527f9, y: _0x5ac6c6.y },
      { x: _0x3527f9, y: _0x565e86.y },
      _0x565e86,
    ];
  }
  _getEndpointPoint(_0x21c8ae, _0x21168b, _0x2046c8, _0x4fe725) {
    if (_0x21168b.kind === "free") return { x: _0x21168b.x, y: _0x21168b.y };
    if (_0x21168b.kind === "shapeSite") {
      var _0x1be983, _0x3fb791;
      if (_0x21168b.connectionPosition !== undefined && _0x21168b.fallbackPoint)
        return { ..._0x21168b.fallbackPoint };
      let _0x156bf8 = this.getShape({
          ..._0x21c8ae,
          shapeId: _0x21168b.shapeId,
        }),
        _0x50206c =
          (_0x1be983 = It(
            _0x156bf8 == null ? undefined : _0x156bf8.shapeData,
          )) == null
            ? undefined
            : _0x1be983.participantEngineShapeType,
        _0x2d887a =
          _0x156bf8 && _0x50206c
            ? {
                ..._0x156bf8,
                shapeType: _0x50206c,
                shapeData: {
                  ..._0x156bf8.shapeData,
                  shapeType: _0x50206c,
                  isCustom: false,
                  customGeometry: undefined,
                },
              }
            : _0x156bf8,
        _0x76ab58 =
          _0x2d887a &&
          ((_0x3fb791 = (0, r.resolveShapeConnectionPoint)(
            _0x2d887a,
            _0x21168b.connectionSiteId,
          )) == null
            ? undefined
            : _0x3fb791.point);
      if (_0x76ab58) return _0x76ab58;
    }
    if (_0x21168b.fallbackPoint) return { ..._0x21168b.fallbackPoint };
    let _0x1e7626 = _0x4fe725.left ?? 0,
      _0x59b489 = _0x4fe725.top ?? 0,
      _0x43f3bc = _0x4fe725.width ?? 1,
      _0x32cbfd = _0x4fe725.height ?? 1;
    return _0x2046c8
      ? { x: _0x1e7626, y: _0x59b489 + _0x32cbfd / 2 }
      : { x: _0x1e7626 + _0x43f3bc, y: _0x59b489 + _0x32cbfd / 2 };
  }
  _createShapeElement(_0x4ec6f7) {
    let _0x2ad7d9 = _0x4ec6f7.shapeType;
    return (0, r.isConnectorShape)(_0x2ad7d9)
      ? this._createConnector({ ..._0x4ec6f7, shapeType: _0x2ad7d9 })
      : this._createBasicShape(_0x4ec6f7);
  }
  _createBasicShape(_0x350cb6) {
    var _0x11f59e, _0x7a0fb4, _0x252907, _0x477c3b;
    let _0x469d0e = ui({
        shapeType: _0x350cb6.shapeType,
        left:
          ((_0x11f59e = _0x350cb6.transform) == null
            ? undefined
            : _0x11f59e.left) ?? 0,
        top:
          ((_0x7a0fb4 = _0x350cb6.transform) == null
            ? undefined
            : _0x7a0fb4.top) ?? 0,
        width:
          (_0x252907 = _0x350cb6.transform) == null
            ? undefined
            : _0x252907.width,
        height:
          (_0x477c3b = _0x350cb6.transform) == null
            ? undefined
            : _0x477c3b.height,
      }),
      _0x55eb83 = {
        ..._0x469d0e.shapeData,
        ...e.Tools["deepClone"](_0x350cb6.shapeData ?? {}),
        shapeType: _0x469d0e.shapeData["shapeType"],
      },
      _0xd222eb = It(_0x469d0e.shapeData),
      _0x2f0444 = Lt(_0x469d0e.shapeData);
    if (_0xd222eb) {
      var _0x4c2d2c;
      Object.assign(_0x55eb83, {
        sequenceLifeline: {
          ..._0xd222eb,
          ...((_0x4c2d2c = _0x350cb6.shapeData) == null
            ? undefined
            : _0x4c2d2c.sequenceLifeline),
        },
      });
    }
    if (_0x2f0444) {
      var _0x12663a;
      Object.assign(_0x55eb83, {
        sequenceActivation: {
          ..._0x2f0444,
          ...((_0x12663a = _0x350cb6.shapeData) == null
            ? undefined
            : _0x12663a.sequenceActivation),
        },
      });
    }
    return {
      ..._0x469d0e,
      name: _0x350cb6.name,
      description: _0x350cb6.description,
      visible: _0x350cb6.visible ?? true,
      selectable: _0x350cb6.selectable ?? true,
      transform: { ..._0x469d0e.transform, ..._0x350cb6.transform },
      shapeData: _0x55eb83,
    };
  }
  _createConnector(_0x1cc49a) {
    var _0xe51b09,
      _0x38ea19,
      _0x137388,
      _0x1f2330,
      _0x1237dc,
      _0x4738e8,
      _0x61ff77,
      _0x535f03,
      _0x2c2670;
    let _0x230d49 = {
        left:
          ((_0xe51b09 = _0x1cc49a.transform) == null
            ? undefined
            : _0xe51b09.left) ?? 0,
        top:
          ((_0x38ea19 = _0x1cc49a.transform) == null
            ? undefined
            : _0x38ea19.top) ?? 0,
        width:
          ((_0x137388 = _0x1cc49a.transform) == null
            ? undefined
            : _0x137388.width) ?? G.shapeWidth,
        height:
          ((_0x1f2330 = _0x1cc49a.transform) == null
            ? undefined
            : _0x1f2330.height) ?? G.shapeHeight,
        rotation:
          ((_0x1237dc = _0x1cc49a.transform) == null
            ? undefined
            : _0x1237dc.rotation) ?? 0,
        flipX:
          ((_0x4738e8 = _0x1cc49a.transform) == null
            ? undefined
            : _0x4738e8.flipX) ?? false,
        flipY:
          ((_0x61ff77 = _0x1cc49a.transform) == null
            ? undefined
            : _0x61ff77.flipY) ?? false,
      },
      _0x23e13e = {
        ...e.Tools["deepClone"](_0x1cc49a.shapeData ?? {}),
        shapeType: _0x1cc49a.shapeType,
      },
      _0x9ae22e = {
        hostType: this.hostType,
        unitId: "",
        subUnitId: "",
        shapeId: (0, e.generateRandomId)(6),
        shapeType: _0x1cc49a.shapeType,
        shapeData: _0x23e13e,
        name: _0x1cc49a.name,
        description: _0x1cc49a.description,
        visible: _0x1cc49a.visible ?? true,
        selectable: _0x1cc49a.selectable ?? true,
        transform: _0x230d49,
      },
      _0x12d146 = (0, r.resolveConnectorRoutePoints)(_0x9ae22e),
      _0xef77dd = _0x12d146[0] ?? { x: _0x230d49.left, y: _0x230d49.top },
      _0x1feeec = _0x12d146[_0x12d146.length - 1] ?? {
        x: _0x230d49.left + _0x230d49.width,
        y: _0x230d49.top + _0x230d49.height,
      },
      _0x5ef83e = bd(
        (_0x535f03 = _0x23e13e.relation) == null ? undefined : _0x535f03.from,
        _0xef77dd,
      ),
      _0x47a54b = bd(
        (_0x2c2670 = _0x23e13e.relation) == null ? undefined : _0x2c2670.to,
        _0x1feeec,
      ),
      _0x279f81 = _0x12d146.slice(1, -1).map(Sd),
      _0x7f17ff = fd(_0x1cc49a.shapeType);
    return {
      ...li({
        id: _0x9ae22e.shapeId,
        start: _0x5ef83e,
        end: _0x47a54b,
        routing: _0x7f17ff,
        routingMode: _0x279f81.length > 0 ? "manual" : "auto",
        waypoints: _0x279f81,
        orthogonalData:
          _0x7f17ff === "orthogonal" ? { routePoints: _0x279f81 } : undefined,
        style: _d(_0x23e13e, undefined),
      }),
      name: _0x1cc49a.name,
      description: _0x1cc49a.description,
      visible: _0x1cc49a.visible ?? true,
      selectable: _0x1cc49a.selectable ?? true,
    };
  }
  _updateBasicShape(_0x5e676e, _0x417cf1) {
    let _0x36780d = e.Tools["deepClone"](
      _0x417cf1.shapeData ?? _0x5e676e.shapeData,
    );
    return {
      ..._0x5e676e,
      name: "name" in _0x417cf1 ? _0x417cf1.name : _0x5e676e.name,
      description:
        "description" in _0x417cf1
          ? _0x417cf1.description
          : _0x5e676e.description,
      visible: _0x417cf1.visible ?? _0x5e676e.visible,
      selectable: _0x417cf1.selectable ?? _0x5e676e.selectable,
      transform: { ..._0x5e676e.transform, ..._0x417cf1.transform },
      shapeData: {
        ..._0x36780d,
        shapeType:
          _0x417cf1.shapeType ??
          _0x36780d.shapeType ??
          _0x5e676e.shapeData["shapeType"],
      },
    };
  }
  _updateConnector(_0x2ad42f, _0x4dfcf9, _0x439e5f) {
    var _0x26cb72, _0x420dd7;
    let _0x1eaca8 = this._connectorToSnapshot(_0x2ad42f, _0x4dfcf9),
      _0x2d4410 = e.Tools["deepClone"](
        _0x439e5f.shapeData ?? _0x1eaca8.shapeData,
      ),
      _0x29a764 =
        _0x439e5f.shapeType ?? _0x2d4410.shapeType ?? _0x1eaca8.shapeType,
      _0x1e89fa = {
        ..._0x1eaca8,
        shapeType: _0x29a764,
        shapeData: { ..._0x2d4410, shapeType: _0x29a764 },
        transform: { ..._0x1eaca8.transform, ..._0x439e5f.transform },
      },
      _0x583a16 = (0, r.resolveConnectorRoutePoints)(_0x1e89fa),
      _0x5bc897 =
        _0x583a16[0] ??
        this._getEndpointPoint(
          _0x2ad42f,
          _0x4dfcf9.connectorData["start"],
          true,
          _0x4dfcf9.transform,
        ),
      _0x2a51e8 =
        _0x583a16[_0x583a16.length - 1] ??
        this._getEndpointPoint(
          _0x2ad42f,
          _0x4dfcf9.connectorData["end"],
          false,
          _0x4dfcf9.transform,
        ),
      _0xaff726 = _0x1eaca8.shapeData["relation"],
      _0x96dca0 = xd(
        _0x4dfcf9.connectorData["start"],
        _0xaff726 == null ? undefined : _0xaff726.from,
        (_0x26cb72 = _0x2d4410.relation) == null ? undefined : _0x26cb72.from,
        _0x5bc897,
      ),
      _0x33c93a = xd(
        _0x4dfcf9.connectorData["end"],
        _0xaff726 == null ? undefined : _0xaff726.to,
        (_0x420dd7 = _0x2d4410.relation) == null ? undefined : _0x420dd7.to,
        _0x2a51e8,
      ),
      _0xa84f60 = fd(_0x29a764),
      _0x42eafc = _0x583a16.slice(1, -1).map(Sd),
      _0x202769 = {
        ..._0x4dfcf9.connectorData,
        start: _0x96dca0,
        end: _0x33c93a,
        routing: _0xa84f60,
        routingMode: _0x42eafc.length > 0 ? "manual" : "auto",
        waypoints: _0x42eafc,
        style: _d(_0x2d4410, _0x4dfcf9.connectorData["style"]),
      };
    return (
      _0xa84f60 === "orthogonal"
        ? (_0x202769.orthogonalData = { routePoints: _0x42eafc })
        : delete _0x202769.orthogonalData,
      _0xa84f60 !== "curve" && delete _0x202769.curveData,
      {
        ..._0x4dfcf9,
        name: "name" in _0x439e5f ? _0x439e5f.name : _0x4dfcf9.name,
        description:
          "description" in _0x439e5f
            ? _0x439e5f.description
            : _0x4dfcf9.description,
        visible: _0x439e5f.visible ?? _0x4dfcf9.visible,
        selectable: _0x439e5f.selectable ?? _0x4dfcf9.selectable,
        transform: { ..._0x4dfcf9.transform, ..._0x1e89fa.transform },
        connectorData: _0x202769,
      }
    );
  }
  _arrange(_0x32579a, _0x514369) {
    return this._commandService["syncExecuteCommand"](Al.id, {
      unitId: _0x32579a.unitId,
      subUnitId: _0x32579a.subUnitId,
      elementIds: [_0x32579a.shapeId],
      placement: _0x514369,
    });
  }
};
ld = cd([$(0, e.ICommandService), $(1, N), $(2, e.IUniverInstanceService)], ld);
function ud(_0x10144e) {
  return {
    left: _0x10144e.left ?? 0,
    top: _0x10144e.top ?? 0,
    width: _0x10144e.width ?? G.shapeWidth,
    height: _0x10144e.height ?? G.shapeHeight,
    rotation: _0x10144e.rotation ?? 0,
    flipX: _0x10144e.flipX ?? false,
    flipY: _0x10144e.flipY ?? false,
  };
}
function dd(_0x43729d) {
  return _0x43729d === "straight"
    ? r.ShapeTypeEnum["StraightConnector1"]
    : _0x43729d === "curve"
      ? r.ShapeTypeEnum["CurvedConnector3"]
      : r.ShapeTypeEnum["BentConnector3"];
}
function fd(_0x55a20e) {
  return _0x55a20e === r.ShapeTypeEnum["Line"] ||
    _0x55a20e === r.ShapeTypeEnum["StraightConnector1"]
    ? "straight"
    : (0, r.isCurvedConnectorShape)(_0x55a20e)
      ? "curve"
      : "orthogonal";
}
function pd(_0x518f2e, _0x5397b7) {
  return {
    from:
      _0x518f2e.kind === "shapeSite"
        ? { shapeId: _0x518f2e.shapeId, cxnIndex: _0x518f2e.connectionSiteId }
        : undefined,
    to:
      _0x5397b7.kind === "shapeSite"
        ? { shapeId: _0x5397b7.shapeId, cxnIndex: _0x5397b7.connectionSiteId }
        : undefined,
  };
}
function md(_0x1de0f1) {
  return {
    color: _0x1de0f1 == null ? undefined : _0x1de0f1.stroke,
    width: _0x1de0f1 == null ? undefined : _0x1de0f1.strokeWidth,
    opacity: _0x1de0f1 == null ? undefined : _0x1de0f1.opacity,
    dashType:
      !(_0x1de0f1 != null && _0x1de0f1.dash) || _0x1de0f1.dash["length"] === 0
        ? r.ShapeLineDashEnum["Solid"]
        : r.ShapeLineDashEnum["Dash"],
  };
}
function hd(_0x47462f) {
  if (!(!_0x47462f || _0x47462f.type === "none"))
    return {
      type:
        _0x47462f.type === "openArrow"
          ? r.ShapeArrowTypeEnum["OpenArrow"]
          : _0x47462f.type === "openDiamond" ||
              _0x47462f.type === "filledDiamond"
            ? r.ShapeArrowTypeEnum["DiamondArrow"]
            : _0x47462f.type === "openCircle" ||
                _0x47462f.type === "filledCircle"
              ? r.ShapeArrowTypeEnum["OvalArrow"]
              : r.ShapeArrowTypeEnum["Arrow"],
      size: gd(_0x47462f.size),
    };
}
function gd(_0x6777) {
  if (_0x6777 === "sm") return r.ShapeArrowSizeEnum["Small"];
  if (_0x6777 === "lg") return r.ShapeArrowSizeEnum["Large"];
  if (_0x6777 === "md") return r.ShapeArrowSizeEnum["Medium"];
}
function _d(_0x2e65f9, _0x364fca) {
  var _0x1cf43a, _0x547511;
  let _0x42a523 = _0x2e65f9.stroke ?? _0x2e65f9.ln ?? {};
  return {
    ..._0x364fca,
    stroke: _0x42a523.color,
    strokeWidth: _0x42a523.width,
    opacity: _0x42a523.opacity,
    dash:
      _0x42a523.dashType === r.ShapeLineDashEnum["Solid"]
        ? []
        : _0x42a523.dashType === undefined
          ? _0x364fca == null
            ? undefined
            : _0x364fca.dash
          : [8, 4],
    startMarker: vd(
      (_0x1cf43a = _0x2e65f9.ln) == null ? undefined : _0x1cf43a.startArrow,
      _0x364fca == null ? undefined : _0x364fca.startMarker,
    ),
    endMarker: vd(
      (_0x547511 = _0x2e65f9.ln) == null ? undefined : _0x547511.endArrow,
      _0x364fca == null ? undefined : _0x364fca.endMarker,
    ),
  };
}
function vd(_0x146fba, _0x60a02e) {
  let _0x27dc3c = hd(_0x60a02e);
  if (
    (_0x146fba == null ? undefined : _0x146fba.type) ===
      (_0x27dc3c == null ? undefined : _0x27dc3c.type) &&
    (_0x146fba == null ? undefined : _0x146fba.size) ===
      (_0x27dc3c == null ? undefined : _0x27dc3c.size)
  )
    return _0x60a02e;
  if ((_0x146fba == null ? undefined : _0x146fba.type) !== undefined)
    return {
      type:
        _0x146fba.type === r.ShapeArrowTypeEnum["None"]
          ? "none"
          : _0x146fba.type === r.ShapeArrowTypeEnum["OpenArrow"]
            ? "openArrow"
            : _0x146fba.type === r.ShapeArrowTypeEnum["DiamondArrow"]
              ? "filledDiamond"
              : _0x146fba.type === r.ShapeArrowTypeEnum["OvalArrow"]
                ? "filledCircle"
                : "filledArrow",
      size: yd(_0x146fba.size),
    };
}
function yd(_0x2ea0c1) {
  if (_0x2ea0c1 === r.ShapeArrowSizeEnum["Small"]) return "sm";
  if (_0x2ea0c1 === r.ShapeArrowSizeEnum["Large"]) return "lg";
  if (_0x2ea0c1 === r.ShapeArrowSizeEnum["Medium"]) return "md";
}
function bd(_0x19c45f, _0x4eae82) {
  return _0x19c45f
    ? {
        kind: "shapeSite",
        shapeId: _0x19c45f.shapeId,
        connectionSiteId: _0x19c45f.cxnIndex,
        fallbackPoint: { ..._0x4eae82 },
      }
    : { kind: "free", ..._0x4eae82 };
}
function xd(_0x258c1a, _0x237d03, _0xdd8ca7, _0x2c5901) {
  let _0x20f3bb =
      (_0x237d03 == null ? undefined : _0x237d03.shapeId) ===
        (_0xdd8ca7 == null ? undefined : _0xdd8ca7.shapeId) &&
      (_0x237d03 == null ? undefined : _0x237d03.cxnIndex) ===
        (_0xdd8ca7 == null ? undefined : _0xdd8ca7.cxnIndex),
    _0x568977 = _0x258c1a.kind === "free" ? _0x258c1a : _0x258c1a.fallbackPoint;
  return _0x20f3bb &&
    (_0x568977 == null ? undefined : _0x568977.x) === _0x2c5901.x &&
    _0x568977.y === _0x2c5901.y
    ? _0x258c1a
    : bd(_0xdd8ca7, _0x2c5901);
}
function Sd(_0x1f47bc, _0x533fad) {
  return {
    id: "shape-api-" + _0x533fad,
    kind: "manual",
    x: _0x1f47bc.x,
    y: _0x1f47bc.y,
  };
}
const Cd = (0, e.createIdentifier)("board.line-adapter.service");
var wd = class {
  constructor() {
    M(this, "_adapters", []);
  }
  registerAdapter(_0x4ce82d) {
    return (
      this._adapters["push"](_0x4ce82d),
      (0, e.toDisposable)(() => {
        let _0x5cbb16 = this._adapters["indexOf"](_0x4ce82d);
        _0x5cbb16 >= 0 && this._adapters["splice"](_0x5cbb16, 1);
      })
    );
  }
  beginLineMode(_0x188166) {
    for (let _0x8b6c36 of this._adapters)
      if (_0x8b6c36.beginLineMode(_0x188166)) return true;
    return false;
  }
};
const Td = {
    id: "board.operation.begin-line",
    type: e.CommandType["OPERATION"],
    handler: (_0x2faf17, _0x19b08e) =>
      _0x19b08e ? _0x2faf17.get(Cd).beginLineMode(_0x19b08e) : false,
  },
  Ed = {};
let Dd = class extends e.Disposable {
  constructor(_0xde2536, _0x465a55) {
    (super(),
      (this._instanceSrv = _0xde2536),
      (this._boardElementService = _0x465a55),
      this._initUnitListener());
  }
  _initUnitListener() {
    (this._instanceSrv["getAllUnitsForType"](
      e.UniverInstanceType["UNIVER_BOARD"],
    ).forEach((_0x2b348f) => this._loadUnit(_0x2b348f)),
      this.disposeWithMe(
        this._instanceSrv["getTypeOfUnitAdded$"](
          e.UniverInstanceType["UNIVER_BOARD"],
        ).subscribe((_0x29ffbc) => this._loadUnit(_0x29ffbc.unit)),
      ),
      this.disposeWithMe(
        this._instanceSrv["getTypeOfUnitDisposed$"](
          e.UniverInstanceType["UNIVER_BOARD"],
        ).subscribe((_0x5071d3) => {
          this._boardElementService["removeElementDataForUnit"](
            _0x5071d3.getUnitId(),
          );
        }),
      ));
  }
  _loadUnit(_0x392f10) {
    let _0xf6196d = _0x392f10.getUnitId(),
      _0x36594c = _0x392f10.getActivePage(),
      _0x2ecd0b = {},
      _0xbc6c4f = _0x36594c.id;
    ((_0x2ecd0b[_0xbc6c4f] = Ye(
      _0xf6196d,
      _0xbc6c4f,
      _0x36594c.elements,
      _0x36594c.elementOrder,
      _0x392f10.getThemeData(),
    )),
      this._boardElementService["registerElementData"](_0xf6196d, _0x2ecd0b),
      this._boardElementService["initializeElementNotification"](_0xf6196d));
  }
};
Dd = cd([$(0, e.IUniverInstanceService), $(1, N)], Dd);
const Od = new Set([cs.id, Gn.id, Mo.id]);
let kd = class extends e.Disposable {
  constructor(_0x26558d, _0x56776c, _0x4d6e87) {
    (super(),
      (this._commandService = _0x26558d),
      (this._permissionService = _0x56776c),
      (this._univerInstanceService = _0x4d6e87),
      this._univerInstanceService["getAllUnitsForType"](
        e.UniverInstanceType["UNIVER_BOARD"],
      ).forEach((_0x54fdb3) =>
        this._registerUnitPermissionPoints(_0x54fdb3.getUnitId()),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getTypeOfUnitAdded$"](
          e.UniverInstanceType["UNIVER_BOARD"],
        ).subscribe(({ unit: _0x50d6f6 }) =>
          this._registerUnitPermissionPoints(_0x50d6f6.getUnitId()),
        ),
      ),
      this.disposeWithMe(
        this._commandService["beforeCommandExecuted"]((_0x3dea96, _0x3e5295) =>
          this._check(_0x3dea96, _0x3e5295),
        ),
      ),
      this.disposeWithMe(
        this._univerInstanceService["getTypeOfUnitDisposed$"](
          e.UniverInstanceType["UNIVER_BOARD"],
        ).subscribe((_0x11be66) =>
          os(this._permissionService, _0x11be66.getUnitId()),
        ),
      ));
  }
  _registerUnitPermissionPoints(_0x3c6961) {
    $o.forEach((_0x3fbc75) => {
      let _0x25e2b0 = rs(_0x3c6961, _0x3c6961, _0x3fbc75);
      this._permissionService["getPermissionPoint"](_0x25e2b0.id) ||
        this._permissionService["addPermissionPoint"](_0x25e2b0);
    });
  }
  _check(_0x1461ea, _0x2e500b) {
    var _0x178c1c, _0x314f2;
    if (
      (_0x2e500b != null && _0x2e500b.fromCollab) ||
      (_0x2e500b != null && _0x2e500b.fromChangeset)
    )
      return;
    let _0x31dd05 = zd(_0x1461ea.params) ? _0x1461ea.params : undefined;
    if (
      _0x1461ea.id === "board.mutation.update-element" &&
      _0x31dd05 != null &&
      _0x31dd05.formulaLastValueGuard
    )
      return;
    let _0x50a819 = jd(_0x1461ea.id, _0x31dd05),
      _0x371395 =
        Ad(_0x31dd05 == null ? undefined : _0x31dd05.unitId, _0x2e500b) ??
        (_0x50a819
          ? (_0x178c1c = this._univerInstanceService["getCurrentUnitOfType"](
              e.UniverInstanceType["UNIVER_BOARD"],
            )) == null
            ? undefined
            : _0x178c1c.getUnitId()
          : undefined);
    if (
      !_0x371395 ||
      this._univerInstanceService["getUnitType"](_0x371395) !==
        e.UniverInstanceType["UNIVER_BOARD"]
    )
      return;
    if (_0x50a819) {
      if (!is(this._permissionService, _0x371395, _0x371395, _0x50a819))
        throw new e["CustomCommandExecutionError"](
          "Board\x20" + i.UnitAction[_0x50a819] + " permission denied.",
        );
      if (
        Md(_0x1461ea.id, _0x31dd05) &&
        !is(this._permissionService, _0x371395, _0x371395, i.UnitAction["Edit"])
      )
        throw new e.CustomCommandExecutionError(
          "Board Edit permission denied.",
        );
      return;
    }
    if (!Nd(_0x1461ea.id)) return;
    let _0x2a850a = this._univerInstanceService["getUnit"](
      _0x371395,
      e.UniverInstanceType["UNIVER_BOARD"],
    );
    if (!_0x2a850a) return;
    let _0x6bd440 =
        typeof (_0x31dd05 == null ? undefined : _0x31dd05.subUnitId) == "string"
          ? _0x31dd05.subUnitId
          : _0x2a850a.getActivePageId(),
      _0x316ea5 =
        ((_0x314f2 = _0x2a850a.getSnapshot().pages[_0x6bd440]) == null
          ? undefined
          : _0x314f2.elements) ?? {},
      _0x45598a = new Set(Pd(_0x31dd05)),
      _0x334684 = Fd(_0x31dd05);
    _0x334684.size &&
      Object.values(_0x316ea5).forEach((_0xc513ed) => {
        if (!zd(_0xc513ed) || typeof _0xc513ed.id != "string") return;
        let _0x63e5dd = _0xc513ed;
        (_0x334684.has(String(_0x63e5dd.chartId ?? "")) ||
          _0x334684.has(String(_0x63e5dd.tableId ?? ""))) &&
          _0x45598a.add(_0x63e5dd.id);
      });
    let _0x277fe1 = [...Id(_0x316ea5, _0x45598a)].map((_0x470e64) =>
      ns(_0x6bd440, _0x470e64),
    );
    if (!ss(this._permissionService, _0x371395, _0x277fe1))
      throw new e["CustomCommandExecutionError"](
        "Board edit permission denied.",
      );
  }
};
kd = cd(
  [
    $(0, e.ICommandService),
    $(1, e.IPermissionService),
    $(2, e.IUniverInstanceService),
  ],
  kd,
);
function Ad(_0x1c159, _0x12864b) {
  return typeof _0x1c159 == "string"
    ? _0x1c159
    : typeof (_0x12864b == null ? undefined : _0x12864b.unitId) == "string"
      ? _0x12864b.unitId
      : undefined;
}
function jd(_0x29aca2, _0x2fb139) {
  if (
    _0x29aca2 === "board.operation.copy-selection" ||
    _0x29aca2 === "board.operation.cut-selection" ||
    _0x29aca2 === "board.operation.mind-map.copy-node" ||
    (_0x29aca2 === "board.operation.clipboard-shortcut" &&
      typeof (_0x2fb139 == null ? undefined : _0x2fb139.action) == "string" &&
      ["copy", "copyAsImage", "copyStyle", "cut", "makeCopy"].includes(
        _0x2fb139.action,
      ))
  )
    return i.UnitAction["Copy"];
  if (_0x29aca2 === "boards-print.operation.print")
    return i.UnitAction["Print"];
  if (
    _0x29aca2 === "boards-print.operation.export-image" ||
    _0x29aca2 === "boards-exchange-client.operation.export-board" ||
    _0x29aca2 === "board.operation.mind-map.export-opml"
  )
    return i.UnitAction["Export"];
  if (
    _0x29aca2.startsWith("thread-comment.command.") ||
    _0x29aca2.startsWith("thread-comment.mutation.") ||
    _0x29aca2 === "board.operation.start-comment-placement" ||
    _0x29aca2 === "board.operation.add-element-comment"
  )
    return i.UnitAction["Comment"];
}
function Md(_0xb7d8ca, _0x202a8b) {
  return (
    _0xb7d8ca === "board.operation.cut-selection" ||
    (_0xb7d8ca === "board.operation.clipboard-shortcut" &&
      ((_0x202a8b == null ? undefined : _0x202a8b.action) === "cut" ||
        (_0x202a8b == null ? undefined : _0x202a8b.action) === "makeCopy"))
  );
}
function Nd(_0x5c5ae5) {
  return Od.has(_0x5c5ae5) || _0x5c5ae5.startsWith("board.operation.begin-")
    ? false
    : _0x5c5ae5.startsWith("board.command.") ||
        _0x5c5ae5.startsWith("board.mutation.") ||
        _0x5c5ae5.startsWith("board.operation.");
}
function Pd(_0x51648a, _0x2b7128 = "") {
  let _0x19c8aa = new Set();
  return (Rd(_0x51648a, _0x2b7128, _0x19c8aa), [..._0x19c8aa]);
}
function Fd(_0x42295c, _0x218b0d = "", _0x30b4ab = new Set()) {
  return zd(_0x42295c)
    ? Array.isArray(_0x42295c)
      ? (_0x42295c.forEach((_0x5d9d25) => Fd(_0x5d9d25, _0x218b0d, _0x30b4ab)),
        _0x30b4ab)
      : (Object.entries(_0x42295c).forEach(([_0x4a7dc6, _0x5df6ba]) => {
          ((_0x4a7dc6 === "chartId" || _0x4a7dc6 === "tableId") &&
            typeof _0x5df6ba == "string" &&
            _0x30b4ab.add(_0x5df6ba),
            _0x4a7dc6 === "id" &&
              (_0x218b0d === "chart" || _0x218b0d === "table") &&
              typeof _0x5df6ba == "string" &&
              _0x30b4ab.add(_0x5df6ba),
            Fd(_0x5df6ba, _0x4a7dc6, _0x30b4ab));
        }),
        _0x30b4ab)
    : _0x30b4ab;
}
function Id(_0x4540c5, _0x506809) {
  let _0x429e25 = new Set(_0x506809),
    _0x34a241 = Object.values(_0x4540c5)
      .filter(zd)
      .filter((_0x22df71) => typeof _0x22df71.id == "string"),
    _0x99c376 = (_0x2cd7e3) => {
      let _0x8db716 = _0x4540c5[_0x2cd7e3];
      !_0x8db716 ||
        typeof _0x8db716 != "object" ||
        Ld(
          _0x8db716,
          /^(parentId|groupId|parentNodeId|structureScopeId)$/i,
        ).forEach((_0x275991) => {
          _0x429e25.has(_0x275991) ||
            !_0x4540c5[_0x275991] ||
            (_0x429e25.add(_0x275991), _0x99c376(_0x275991));
        });
    };
  _0x506809.forEach(_0x99c376);
  let _0x2922a9 = new Set(_0x506809),
    _0x4fb5a6 = true;
  for (; _0x4fb5a6;)
    ((_0x4fb5a6 = false),
      _0x34a241.forEach((_0x57e14f) => {
        _0x2922a9.has(_0x57e14f.id) ||
          (Ld(
            _0x57e14f,
            /(?:parent|group|child|owner|root|start|end|from|to|bound|structureScope).*(?:Id|Ids)$/i,
          ).some((_0x37aa30) => _0x2922a9.has(_0x37aa30)) &&
            (_0x2922a9.add(_0x57e14f.id),
            _0x429e25.add(_0x57e14f.id),
            (_0x4fb5a6 = true)));
      }));
  return _0x429e25;
}
function Ld(_0x5cf15a, _0x29ed09, _0x14e2df = "", _0x3c180e = new Set()) {
  return typeof _0x5cf15a == "string"
    ? (_0x29ed09.test(_0x14e2df) && _0x3c180e.add(_0x5cf15a), [..._0x3c180e])
    : Array.isArray(_0x5cf15a)
      ? (_0x29ed09.test(_0x14e2df)
          ? _0x5cf15a.forEach((_0x572a9d) => {
              typeof _0x572a9d == "string" && _0x3c180e.add(_0x572a9d);
            })
          : _0x5cf15a.forEach((_0x2bb80d) =>
              Ld(_0x2bb80d, _0x29ed09, _0x14e2df, _0x3c180e),
            ),
        [..._0x3c180e])
      : (zd(_0x5cf15a) &&
          Object.entries(_0x5cf15a).forEach(([_0x431f15, _0x40de7e]) =>
            Ld(_0x40de7e, _0x29ed09, _0x431f15, _0x3c180e),
          ),
        [..._0x3c180e]);
}
function Rd(_0x5523fc, _0x314ecd, _0xd4092a) {
  if (typeof _0x5523fc == "string") {
    /^(elementId|drawingId|connectorId|containerId|swimlaneId|[a-z]*nodeId)$/i.test(
      _0x314ecd,
    ) && _0xd4092a.add(_0x5523fc);
    return;
  }
  if (Array.isArray(_0x5523fc)) {
    /^(element|drawing|connector|container|swimlane|[a-z]*node)Ids$/i.test(
      _0x314ecd,
    )
      ? _0x5523fc.forEach((_0x3a8d4a) => {
          typeof _0x3a8d4a == "string" && _0xd4092a.add(_0x3a8d4a);
        })
      : _0x5523fc.forEach((_0x3073b4) => Rd(_0x3073b4, _0x314ecd, _0xd4092a));
    return;
  }
  zd(_0x5523fc) &&
    Object.entries(_0x5523fc).forEach(([_0x287d00, _0x1aa961]) => {
      _0x287d00 === "id" &&
      (_0x314ecd === "element" || _0x314ecd === "elements")
        ? typeof _0x1aa961 == "string" && _0xd4092a.add(_0x1aa961)
        : Rd(_0x1aa961, _0x287d00, _0xd4092a);
    });
}
function zd(_0x2b3962) {
  return (
    typeof _0x2b3962 == "object" && !!_0x2b3962 && !Array.isArray(_0x2b3962)
  );
}
let Bd = class extends e.Disposable {
  constructor(_0x3b01ac, _0x22c04d) {
    (super(), this.disposeWithMe(_0x3b01ac.register(_0x22c04d)));
  }
};
Bd = cd(
  [$(0, (0, e.Inject)(r.IShapeHostAdapterRegistry)), $(1, (0, e.Inject)(ld))],
  Bd,
);
const Vd = (0, e.createIdentifier)("board.resource.service");
let Hd = class {
  constructor(_0x1ef466) {
    this._univerInstanceService = _0x1ef466;
  }
  getBoard(_0x1673db) {
    return (
      this._univerInstanceService["getUnit"](
        _0x1673db,
        e.UniverInstanceType["UNIVER_BOARD"],
      ) ?? null
    );
  }
  getAllBoards() {
    return this._univerInstanceService["getAllUnitsForType"](
      e.UniverInstanceType["UNIVER_BOARD"],
    );
  }
  createBoard(_0x48dd27) {
    return this._univerInstanceService["createUnit"](
      e.UniverInstanceType["UNIVER_BOARD"],
      _0x48dd27,
    );
  }
};
Hd = cd([$(0, e.IUniverInstanceService)], Hd);
let Ud = class extends e.Plugin {
  constructor(_0x5950c1 = Ed, _0x234b4b, _0x554023, _0x124a28, _0x4e1c1c) {
    (super(),
      (this._config = _0x5950c1),
      (this._injector = _0x234b4b),
      (this._commandService = _0x554023),
      (this._configService = _0x124a28),
      (this._univerInstanceService = _0x4e1c1c));
    let { ..._0x30021b } = (0, e.merge)({}, Ed, this._config);
    this._configService["setConfig"]("boards.config", _0x30021b);
  }
  onStarting() {
    (this._univerInstanceService["registerCtorForType"](
      e.UniverInstanceType["UNIVER_BOARD"],
      ad,
    ),
      [
        [Vd, { useClass: Hd }],
        [N, { useClass: st }],
        [sc, { useClass: cc }],
        [mo, { useClass: ho }],
        [Kn, { useClass: qn }],
        [Cd, { useClass: wd }],
        [gc, { useClass: _c }],
        [yc, { useClass: bc }],
        [Sc, { useClass: Cc }],
        [pc, { useClass: mc }],
        [uc, { useClass: dc }],
        [Ec, { useClass: Dc }],
        [Dd],
        [ld],
        [Bd],
        [kd],
      ].forEach((_0x495c06) => this._injector["add"](_0x495c06)),
      [
        xo,
        Z,
        Co,
        us,
        ds,
        Ho,
        Wo,
        oc,
        ic,
        lc,
        fc,
        hc,
        Td,
        vc,
        xc,
        wc,
        Tc,
        Oc,
        Gc,
        vl,
        _l,
        Yc,
        Ms,
        Gn,
        Jn,
        Xa,
        Mo,
        po,
        jo,
        Bo,
        Vo,
        Uo,
        cs,
        Ko,
        ls,
        fo,
        zu,
        tu,
        du,
        _u,
        wu,
        yu,
        $l,
        Ll,
        Al,
        yl,
        Oo,
        Dl,
        Ou,
      ].forEach((_0x363845) =>
        this.disposeWithMe(this._commandService["registerCommand"](_0x363845)),
      ),
      this._injector["get"](Dd),
      this._injector["get"](Bd),
      this._injector["get"](kd));
  }
};
(M(Ud, "pluginName", "UNIVER_BOARDS_PLUGIN"),
  M(Ud, "packageName", od),
  M(Ud, "version", sd),
  M(Ud, "type", e.UniverInstanceType["UNIVER_BOARD"]),
  (Ud = cd(
    [
      (0, e.DependentOn)(a.UniverLicensePlugin, r.UniverShapePlugin),
      $(1, (0, e.Inject)(e.Injector)),
      $(2, e.ICommandService),
      $(3, e.IConfigService),
      $(4, e.IUniverInstanceService),
    ],
    Ud,
  )));
function Wd(_0x39c65d, _0x4f1b6e) {
  var _0x4266aa, _0x3e207f, _0x317b30, _0x3a7438, _0x775f64, _0x342417;
  let _0x22c987 = e.Tools["deepClone"](_0x4f1b6e),
    _0x6ba4b8 =
      _0x39c65d != null &&
      (_0x4266aa = _0x39c65d.documentStyle) != null &&
      _0x4266aa.textStyle
        ? e.Tools["deepClone"](_0x39c65d.documentStyle["textStyle"])
        : undefined,
    _0x126f07 =
      (_0x3e207f = _0x22c987.documentStyle) == null
        ? undefined
        : _0x3e207f.textStyle;
  return (
    (_0x22c987.documentStyle = {
      ...(_0x39c65d == null ? undefined : _0x39c65d.documentStyle),
      ..._0x22c987.documentStyle,
      ...(_0x6ba4b8 || _0x126f07
        ? { textStyle: { ..._0x6ba4b8, ..._0x126f07 } }
        : null),
      pageSize: {
        ...(_0x39c65d == null || (_0x317b30 = _0x39c65d.documentStyle) == null
          ? undefined
          : _0x317b30.pageSize),
        ...((_0x3a7438 = _0x22c987.documentStyle) == null
          ? undefined
          : _0x3a7438.pageSize),
      },
      renderConfig: {
        ...(_0x39c65d == null || (_0x775f64 = _0x39c65d.documentStyle) == null
          ? undefined
          : _0x775f64.renderConfig),
        ...((_0x342417 = _0x22c987.documentStyle) == null
          ? undefined
          : _0x342417.renderConfig),
      },
    }),
    _0x22c987
  );
}
((exports.AddBoardElementMutation = xo),
  (exports.AddBoardElementOperation = oc),
  (exports.AddBoardElementsOperation = ic),
  (exports.AnalyzeBoardModelLayoutCommand = Gn),
  (exports.BOARD_CONNECTOR_ENDPOINT_SNAP_THRESHOLD = 12),
  (exports.BOARD_CONTAINER_CORNER_ADJUST = ei),
  (exports.BOARD_INSERT_DEFAULT_SIZE = G),
  (exports.BOARD_MIND_MAP_CONNECTOR_ROLE = "mindmap-tree-edge"),
  (exports.BOARD_MIND_MAP_CONTAINER_ROLE = "mindmap-container"),
  (exports.BOARD_MIND_MAP_DECORATION_ROLE = "mindmap-node-decoration"),
  (exports.BOARD_MIND_MAP_MODE_ID = Xc),
  (exports.BOARD_MIND_MAP_NODE_ROLE = "mindmap-node"),
  (exports.BOARD_THEME_PRESETS = ge),
  (exports.BOARD_UNIT_PERMISSION_ACTIONS = $o),
  (exports.BeginBoardContainerOperation = lc),
  (exports.BeginBoardExportOperation = fc),
  (exports.BeginBoardImportOperation = hc),
  (exports.BeginBoardMindMapOperation = vc),
  (exports.BeginBoardPenOperation = xc),
  (exports.BeginBoardResourcesOperation = wc),
  (exports.BeginBoardSwimlaneOperation = Tc),
  (exports.BeginBoardTranslateOperation = Oc),
  (exports.BoardBackgroundType = f),
  (exports.BoardConnectorLabelAnchor = v),
  (exports.BoardConnectorLabelOffsetSpace = S),
  (exports.BoardConnectorLabelOrientation = b),
  (exports.BoardConnectorLabelSide = y),
  (exports.BoardConnectorLabelSizing = x),
  (exports.BoardConnectorSite = g),
  (exports.BoardConnectorSiteBySide = _),
  (exports.BoardCustomShapeType = P),
  (exports.BoardElementService = st),
  (exports.BoardElementType = s),
  (exports.BoardMediaType = l),
  (exports.BoardModel = ad),
  (exports.BoardPageSizePreset = d),
  (exports.BoardPageType = u),
  (exports.BoardPlaceholderType = c),
  (exports.BoardResourcesAdapterService = Cc),
  (exports.BoardSequenceShapeType = I),
  (exports.BoardToolType = o),
  (exports.BoardTransitionDirection = m),
  (exports.BoardTransitionSpeed = h),
  (exports.BoardTransitionType = p),
  (exports.CommitBoardContainerTransformOperation = Gc),
  (exports.DEFAULT_BOARD_PAGE_SIZE = Bu),
  (exports.DEFAULT_BOARD_THEME = ke),
  (exports.DisbandBoardContainerOperation = Yc),
  (exports.EMBED_BOARDS_FLOATING_CUSTOM_KEY = Di),
  (exports.FitBoardContainerToContentOperation = Ms),
  (exports.IBoardChartAdapterService = Kn),
  (exports.IBoardContainerAdapterService = sc),
  (exports.IBoardElementService = N),
  (exports.IBoardImportAdapterService = pc),
  (exports.IBoardLineAdapterService = Cd),
  (exports.IBoardMindMapAdapterService = gc),
  (exports.IBoardPenAdapterService = yc),
  (exports.IBoardResourcesAdapterService = Sc),
  (exports.IBoardTableAdapterService = mo),
  (exports.InsertBoardChartCommand = Jn),
  (exports.InsertBoardDraftOperation = _l),
  (exports.InsertBoardTableOperation = vl),
  (exports.NormalizeBoardConnectorRoutingCommand = Xa),
  (exports.RemoveBoardConnectorLabelCommand = po),
  (exports.RemoveBoardElementCommand = jo),
  (exports.RemoveBoardElementMutation = Co),
  (exports.RemoveBoardElementOnlyMutation = us),
  (exports.RemoveBoardElementOperation = yl),
  (exports.RemoveBoardElementsOperation = Oo),
  (exports.RemoveBoardSwimlaneLaneOperation = Dl),
  (exports.ReorderBoardElementsOperation = Al),
  (exports.ReorderBoardObjectListElementOperation = Ll),
  (exports.ReparentBoardElementsOperation = $l),
  (exports.ResolveBoardCaptureBoundsCommand = Mo),
  (exports.SetBoardConnectorLabelStyleCommand = Bo),
  (exports.SetBoardConnectorLabelTextCommand = Vo),
  (exports.SetBoardContainerAutoResizeOperation = tu),
  (exports.SetBoardContainerMembershipLockOperation = du),
  (exports.SetBoardElementOrderMutation = ds),
  (exports.SetBoardElementsMetadataOperation = _u),
  (exports.SetBoardNameCommand = Uo),
  (exports.SetBoardNameMutation = Ho),
  (exports.SetBoardPageBackgroundCommand = Ko),
  (exports.SetBoardPageBackgroundMutation = Wo),
  (exports.SetBoardPermissionCommand = cs),
  (exports.SetBoardSwimlaneLaneSizeOperation = wu),
  (exports.SetBoardSwimlaneLanesOperation = yu),
  (exports.SetBoardThemeOperation = Ou),
  Object.defineProperty(exports, "UniverBoardsPlugin", {
    enumerable: true,
    get: function () {
      return Ud;
    },
  }),
  (exports.UpdateBoardElementCommand = ls),
  (exports.UpdateBoardElementMutation = Z),
  (exports.UpdateBoardElementsCommand = fo),
  (exports.WrapBoardElementsInContainerOperation = zu),
  (exports.analyzeBoardLayout = Zt),
  (exports.canEditBoardTargets = ss),
  (exports.collectBoardContainerDescendantIds = Ut),
  (exports.collectBoardElementIdsForRemoveWithBoundConnectors = wo),
  (exports.containsBoardRect = _r),
  (exports.createAddBoardElementsMutationInfos = ac),
  (exports.createBoardConnectorElement = li),
  (exports.createBoardContainerElement = fi),
  (exports.createBoardImageElement = yi),
  (exports.createBoardShapeElement = ui),
  (exports.createBoardShapeTextDocument = hr),
  (exports.createBoardStickyElement = vi),
  (exports.createBoardSwimlaneElement = gi),
  (exports.createBoardTextBoxShapeElement = di),
  (exports.createBoardTextBoxShapeTextData = Zr),
  (exports.createBoardTextElement = _i),
  (exports.createBoardThemePreset = he),
  (exports.createEmbedBoardsFloatingElement = Oi),
  (exports.documentTextStyleToBoardShapeTextStyle = Xr),
  (exports.getBoardConnectorLabelDocumentData = Bi),
  (exports.getBoardConnectorLabelText = Vi),
  (exports.getBoardConnectorLabels = Gi),
  (exports.getBoardElementPermissionObjectId = ns),
  (exports.getBoardPermissionValue = is),
  (exports.getBoardRectBottom = W),
  (exports.getBoardRectRight = U),
  (exports.getBoardShapeSequenceActivationData = Lt),
  (exports.getBoardShapeSequenceLifelineData = It),
  (exports.getBoardThemePreset = ve),
  (exports.getBoardsEmptySnapshot = Vu),
  (exports.getEmbedBoardsFloatingCustomData = ki),
  (exports.hasBoardSwimlaneLaneChildren = wr),
  (exports.isBoardConnectorElementData = X),
  (exports.isBoardContainerElementData = Vt),
  (exports.isBoardImportDraftBoundsExpanded = sl),
  (exports.isBoardInteractiveContainer = sa),
  (exports.isBoardManagedMindMapConnectorElement = el),
  (exports.isBoardMindMapNodeElement = $c),
  (exports.isBoardMindMapStructuredElement = Qc),
  (exports.isBoardSequenceActivationElement = zt),
  (exports.isBoardSequenceLifelineElement = Rt),
  (exports.isBoardStructuralContainer = oa),
  (exports.isBoardStructuredDiagramElement = ca),
  (exports.isEmbedBoardsFloatingElement = J),
  (exports.isValidBoardConnectorLabels = Wi),
  (exports.materializeBoardImportDraft = gl),
  (exports.mergeBoardRichTextDocument = Wd),
  (exports.normalizeBoardConnectorElementContent = Ui),
  (exports.normalizeBoardSequenceActivationElement = Pt),
  (exports.normalizeBoardSwimlaneData = Er),
  (exports.offsetBoardConnectorGeometry = rr),
  (exports.resolveBoardConnectorParentScope = aa),
  (exports.resolveBoardContainerBounds = xr),
  (exports.resolveBoardContainerCaptureTarget = Ds),
  (exports.resolveBoardContainerMembershipIntentFromPreview = ps),
  (exports.resolveBoardContainerMembershipPreview = Es),
  (exports.resolveBoardElementLocalTransformForParent = B),
  (exports.resolveBoardElementParentChain = L),
  (exports.resolveBoardElementWorldBounds = z),
  (exports.resolveBoardElementWorldTransform = R),
  (exports.resolveBoardImportDraftBounds = ol),
  (exports.resolveBoardSemanticThemeStyle = we),
  (exports.resolveBoardShapeThemeStyle = Ce),
  (exports.resolveBoardShapeThemeTextColor = Le),
  (exports.resolveBoardStructuredSelectionRootIds = da),
  (exports.resolveBoardSwimlaneContentLaneAtPointInFilledBounds = Hr),
  (exports.resolveBoardSwimlaneDataToFitRect = Gr),
  (exports.resolveBoardSwimlaneLaneAtPointInFilledBounds = Br),
  (exports.resolveBoardSwimlaneLaneBoundsInFilledBounds = Ir),
  (exports.resolveBoardSwimlaneLaneForRectInFilledBounds = Wr),
  (exports.resolveBoardSwimlaneLaneRegionsInFilledBounds = Lr),
  (exports.resolveBoardSwimlaneOrientation = Cr),
  (exports.resolveBoardTextElementDefaultSize = ii),
  (exports.resolveBoardThemePreviewColors = Oe),
  (exports.resolveNearestCommonBoardContainerParent = Gt),
  (exports.setBoardConnectorLabels = Ki),
  (exports.setBoardPermissionValue = as),
  (exports.shapeTextToBoardDocumentTextStyle = Yr),
  (exports.updateBoardConnectorLabel = qi),
  (exports.wouldCreateBoardContainerCycle = Wt));
