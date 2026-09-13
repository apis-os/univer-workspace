import { ImageSourceType } from '@univerjs/core';
export declare const ImageSourceTypeEnum: typeof ImageSourceType;
export type ImageSourceTypeEnum = ImageSourceType;
/**
 * Basic shape types
 */
export declare enum BasicShapeEnum {
    /**
     * Basic Shape
     */
    BasicShape = 1,
    /**
     * Connect Shape, such as straight connector, bent connector, curved connector
     */
    ConnectShape = 2,
    /**
     * Group Shape
     */
    GroupShape = 3
}
/**
 * Shape render mode enum
 * For example, Path, Connection Point, Adjustment Point
 */
export declare enum ShapeRenderModeEnum {
    Path = 2,
    Cxn = 4,
    Adj = 8
}
export declare enum ShapeDirectionEnum {
    Right = 0,
    Down = 90,
    Left = 180,
    Up = 270
}
/**
 * OOXML ST_PresetShadowVal values used by `<a:prstShdw prst="...">`.
 *
 * The enum member names intentionally keep the OOXML `shdw*` numbering so JSON
 * can map back to OOXML losslessly. Use each member's JSDoc for the human-readable
 * Office preset name.
 */
export declare enum ShapePresetShadowValEnum {
    /** OOXML shdw1: Top Left Drop Shadow, a regular outer shadow toward the top-left. */
    Shdw1 = "shdw1",
    /** OOXML shdw2: Top Right Drop Shadow, a regular outer shadow toward the top-right. */
    Shdw2 = "shdw2",
    /** OOXML shdw3: Back Left Perspective Shadow, a perspective shadow behind the shape on the left. */
    Shdw3 = "shdw3",
    /** OOXML shdw4: Back Right Perspective Shadow, a perspective shadow behind the shape on the right. */
    Shdw4 = "shdw4",
    /** OOXML shdw5: Bottom Left Drop Shadow, a regular outer shadow toward the bottom-left. */
    Shdw5 = "shdw5",
    /** OOXML shdw6: Bottom Right Drop Shadow, a regular outer shadow toward the bottom-right. */
    Shdw6 = "shdw6",
    /** OOXML shdw7: Front Left Perspective Shadow, a perspective shadow in front of the shape on the left. */
    Shdw7 = "shdw7",
    /** OOXML shdw8: Front Right Perspective Shadow, a perspective shadow in front of the shape on the right. */
    Shdw8 = "shdw8",
    /** OOXML shdw9: Top Left Small Drop Shadow, a smaller top-left outer shadow. */
    Shdw9 = "shdw9",
    /** OOXML shdw10: Top Left Large Drop Shadow, a larger top-left outer shadow. */
    Shdw10 = "shdw10",
    /** OOXML shdw11: Back Left Long Perspective Shadow, a longer back-left perspective shadow. */
    Shdw11 = "shdw11",
    /** OOXML shdw12: Back Right Long Perspective Shadow, a longer back-right perspective shadow. */
    Shdw12 = "shdw12",
    /** OOXML shdw13: Top Left Double Drop Shadow, a double-layer top-left outer shadow. */
    Shdw13 = "shdw13",
    /** OOXML shdw14: Bottom Right Small Drop Shadow, a smaller bottom-right outer shadow. */
    Shdw14 = "shdw14",
    /** OOXML shdw15: Front Left Long Perspective Shadow, a longer front-left perspective shadow. */
    Shdw15 = "shdw15",
    /** OOXML shdw16: Front Right Long Perspective Shadow, a longer front-right perspective shadow. */
    Shdw16 = "shdw16",
    /** OOXML shdw17: 3D Outer Box Shadow, a 3D-style shadow outside the shape box. */
    Shdw17 = "shdw17",
    /** OOXML shdw18: 3D Inner Box Shadow, a 3D-style shadow inside the shape box. */
    Shdw18 = "shdw18",
    /** OOXML shdw19: Back Center Perspective Shadow, a centered perspective shadow behind the shape. */
    Shdw19 = "shdw19",
    /** OOXML shdw20: Front Bottom Shadow, a front-facing shadow below the shape. */
    Shdw20 = "shdw20"
}
/** OOXML ST_PresetCameraType values used by `<a:camera prst="...">`. */
export declare enum ShapeCameraPresetEnum {
    LegacyObliqueTopLeft = "legacyObliqueTopLeft",
    LegacyObliqueTop = "legacyObliqueTop",
    LegacyObliqueTopRight = "legacyObliqueTopRight",
    LegacyObliqueLeft = "legacyObliqueLeft",
    LegacyObliqueFront = "legacyObliqueFront",
    LegacyObliqueRight = "legacyObliqueRight",
    LegacyObliqueBottomLeft = "legacyObliqueBottomLeft",
    LegacyObliqueBottom = "legacyObliqueBottom",
    LegacyObliqueBottomRight = "legacyObliqueBottomRight",
    LegacyPerspectiveTopLeft = "legacyPerspectiveTopLeft",
    LegacyPerspectiveTop = "legacyPerspectiveTop",
    LegacyPerspectiveTopRight = "legacyPerspectiveTopRight",
    LegacyPerspectiveLeft = "legacyPerspectiveLeft",
    LegacyPerspectiveFront = "legacyPerspectiveFront",
    LegacyPerspectiveRight = "legacyPerspectiveRight",
    LegacyPerspectiveBottomLeft = "legacyPerspectiveBottomLeft",
    LegacyPerspectiveBottom = "legacyPerspectiveBottom",
    LegacyPerspectiveBottomRight = "legacyPerspectiveBottomRight",
    OrthographicFront = "orthographicFront",
    IsometricTopUp = "isometricTopUp",
    IsometricTopDown = "isometricTopDown",
    IsometricBottomUp = "isometricBottomUp",
    IsometricBottomDown = "isometricBottomDown",
    IsometricLeftUp = "isometricLeftUp",
    IsometricLeftDown = "isometricLeftDown",
    IsometricRightUp = "isometricRightUp",
    IsometricRightDown = "isometricRightDown",
    IsometricOffAxis1Left = "isometricOffAxis1Left",
    IsometricOffAxis1Right = "isometricOffAxis1Right",
    IsometricOffAxis1Top = "isometricOffAxis1Top",
    IsometricOffAxis2Left = "isometricOffAxis2Left",
    IsometricOffAxis2Right = "isometricOffAxis2Right",
    IsometricOffAxis2Top = "isometricOffAxis2Top",
    IsometricOffAxis3Left = "isometricOffAxis3Left",
    IsometricOffAxis3Right = "isometricOffAxis3Right",
    IsometricOffAxis3Bottom = "isometricOffAxis3Bottom",
    IsometricOffAxis4Left = "isometricOffAxis4Left",
    IsometricOffAxis4Right = "isometricOffAxis4Right",
    IsometricOffAxis4Bottom = "isometricOffAxis4Bottom",
    ObliqueTopLeft = "obliqueTopLeft",
    ObliqueTop = "obliqueTop",
    ObliqueTopRight = "obliqueTopRight",
    ObliqueLeft = "obliqueLeft",
    ObliqueRight = "obliqueRight",
    ObliqueBottomLeft = "obliqueBottomLeft",
    ObliqueBottom = "obliqueBottom",
    ObliqueBottomRight = "obliqueBottomRight",
    PerspectiveFront = "perspectiveFront",
    PerspectiveLeft = "perspectiveLeft",
    PerspectiveRight = "perspectiveRight",
    PerspectiveAbove = "perspectiveAbove",
    PerspectiveBelow = "perspectiveBelow",
    PerspectiveAboveLeftFacing = "perspectiveAboveLeftFacing",
    PerspectiveAboveRightFacing = "perspectiveAboveRightFacing",
    PerspectiveContrastingLeftFacing = "perspectiveContrastingLeftFacing",
    PerspectiveContrastingRightFacing = "perspectiveContrastingRightFacing",
    PerspectiveHeroicLeftFacing = "perspectiveHeroicLeftFacing",
    PerspectiveHeroicRightFacing = "perspectiveHeroicRightFacing",
    PerspectiveHeroicExtremeLeftFacing = "perspectiveHeroicExtremeLeftFacing",
    PerspectiveHeroicExtremeRightFacing = "perspectiveHeroicExtremeRightFacing",
    PerspectiveRelaxed = "perspectiveRelaxed",
    PerspectiveRelaxedModerately = "perspectiveRelaxedModerately"
}
/** OOXML ST_LightRigType values used by `<a:lightRig rig="...">`. */
export declare enum ShapeLightRigPresetEnum {
    LegacyFlat1 = "legacyFlat1",
    LegacyFlat2 = "legacyFlat2",
    LegacyFlat3 = "legacyFlat3",
    LegacyFlat4 = "legacyFlat4",
    LegacyNormal1 = "legacyNormal1",
    LegacyNormal2 = "legacyNormal2",
    LegacyNormal3 = "legacyNormal3",
    LegacyNormal4 = "legacyNormal4",
    LegacyHarsh1 = "legacyHarsh1",
    LegacyHarsh2 = "legacyHarsh2",
    LegacyHarsh3 = "legacyHarsh3",
    LegacyHarsh4 = "legacyHarsh4",
    ThreePoint = "threePt",
    Balanced = "balanced",
    Soft = "soft",
    Harsh = "harsh",
    Flood = "flood",
    Contrasting = "contrasting",
    Morning = "morning",
    Sunrise = "sunrise",
    Sunset = "sunset",
    Chilly = "chilly",
    Freezing = "freezing",
    Flat = "flat",
    TwoPoint = "twoPt",
    Glow = "glow",
    BrightRoom = "brightRoom"
}
/** OOXML ST_LightRigDirection values. */
export declare enum ShapeLightRigDirectionEnum {
    TopLeft = "tl",
    Top = "t",
    TopRight = "tr",
    Left = "l",
    Right = "r",
    BottomLeft = "bl",
    Bottom = "b",
    BottomRight = "br"
}
/** OOXML ST_PresetMaterialType values used by `<a:sp3d prstMaterial="...">`. */
export declare enum ShapeMaterialPresetEnum {
    LegacyMatte = "legacyMatte",
    LegacyPlastic = "legacyPlastic",
    LegacyMetal = "legacyMetal",
    LegacyWireframe = "legacyWireframe",
    Matte = "matte",
    Plastic = "plastic",
    Metal = "metal",
    WarmMatte = "warmMatte",
    TranslucentPowder = "translucentPowder",
    Powder = "powder",
    DarkEdge = "dkEdge",
    SoftEdge = "softEdge",
    Clear = "clear",
    Flat = "flat",
    SoftMetal = "softmetal"
}
/** OOXML ST_BevelPresetType values used by `<a:bevelT>` and `<a:bevelB>`. */
export declare enum ShapeBevelPresetEnum {
    RelaxedInset = "relaxedInset",
    Circle = "circle",
    Slope = "slope",
    Cross = "cross",
    Angle = "angle",
    SoftRound = "softRound",
    Convex = "convex",
    CoolSlant = "coolSlant",
    Divot = "divot",
    Riblet = "riblet",
    HardEdge = "hardEdge",
    ArtDeco = "artDeco"
}
/**
 * Shape fill type enum
 * Shape fill types supported by the renderer.
 */
export declare enum ShapeFillEnum {
    NoFill = 1,
    SolidFill = 2,
    GradientFill = 3,
    PatternFill = 4,
    PictureFill = 5
}
export declare enum ShapeGradientTypeEnum {
    Linear = 1,
    Radial = 2,
    Angular = 3,
    Diamond = 4
}
/**
 * Shape line type enum
 * This enum is used to define the line fill type (no line, solid, gradient)
 */
export declare enum ShapeLineTypeEnum {
    NoLine = 1,
    SolidLine = 2,
    GradientLine = 3
}
/**
 * Shape operator enum, it used to define the shape geometry
 */
export declare enum ShapeOperatorEnum {
    Val = "val",
    Pin = "pin",
    AddSub = "addSub",
    MulDiv = "mulDiv",
    AddDiv = "addDiv",
    Abs = "abs",
    Max = "max",
    Min = "min",
    IfElse = "ifelse",
    Sin = "sin",
    Cos = "cos",
    Tan = "tan",
    Atan2 = "at2",
    Mod = "mod",
    Sqrt = "sqrt",
    Cat2 = "cat2",
    Sat2 = "sat2"
}
/**
 * Built-in vector shape types supported by the Univer shape engine.
 *
 * Board facade callers should access these values through `univerAPI.Enum.ShapeTypeEnum` so generated scripts remain
 * copy-pasteable and do not need package-level imports.
 */
export declare enum ShapeTypeEnum {
    /** No rendered geometry; reserve this value for an explicitly empty shape. */
    None = "none",
    /** SmartArt composite host. Its editable presentation shapes remain nested in `shapeData.smartArt`. */
    SmartArt = "smartArt",
    /** Rectangle for generic process steps, cards, and diagram nodes. */
    Rect = "rect",
    /** Rounded rectangle for friendly process steps, states, and cards. */
    RoundRect = "roundRect",
    /** Ellipse for events, states, and circular diagram nodes. */
    Ellipse = "ellipse",
    /** Diamond for decisions, conditions, and branching points. */
    Diamond = "diamond",
    /** Upward-pointing triangle. */
    Triangle = "triangle",
    /** Right triangle with one vertical and one horizontal edge. */
    RightTriangle = "rtTriangle",
    /** Parallelogram commonly used for input and output steps. */
    Parallelogram = "parallelogram",
    /** Symmetric trapezoid. */
    Trapezoid = "trapezoid",
    /** Adjustable hexagon commonly used for preparation steps. */
    Hexagon = "hexagon",// 这个跟Heptagon 不一样的点在于调节点
    /** Eight-sided polygon commonly used for stop or warning nodes. */
    Octagon = "octagon",
    /** Plus-sign shape. */
    Plus = "plus",
    /** 5-point star shape. */
    Star5 = "star5",
    /** 6-point star shape. */
    Star6 = "star6",
    /** 7-point star shape. */
    Star7 = "star7",
    /** 8-point star shape. */
    Star8 = "star8",
    /** 10-point star shape. */
    Star10 = "star10",
    /** 12-point star shape. */
    Star12 = "star12",
    /** 16-point star shape. */
    Star16 = "star16",
    /** 24-point star shape. */
    Star24 = "star24",
    /** 32-point star shape. */
    Star32 = "star32",
    /** Round 1 rect shape. */
    Round1Rect = "round1Rect",
    /** Round 2 same rect shape. */
    Round2SameRect = "round2SameRect",
    /** Round 2 diag rect shape. */
    Round2DiagRect = "round2DiagRect",
    /** Snip 1 rect shape. */
    Snip1Rect = "snip1Rect",
    /** Snip round rect shape. */
    SnipRoundRect = "snipRoundRect",
    /** Snip 2 same rect shape. */
    Snip2SameRect = "snip2SameRect",
    /** Snip 2 diag rect shape. */
    Snip2DiagRect = "snip2DiagRect",
    /** Plaque shape. */
    Plaque = "plaque",
    /** Rectangular frame with an open center. */
    Frame = "frame",
    /** Two-sided partial frame. */
    HalfFrame = "halfFrame",
    /** Right-angle corner shape. */
    Corner = "corner",
    /** Diag stripe shape. */
    DiagStripe = "diagStripe",
    /** Circular segment bounded by a chord. */
    Chord = "chord",
    /** Open circular arc. */
    Arc = "arc",
    /** Left circular arrow shape for directional diagrams. */
    LeftCircularArrow = "leftCircularArrow",
    /** Left right circular arrow shape for directional diagrams. */
    LeftRightCircularArrow = "leftRightCircularArrow",
    /** Swoosh arrow shape for directional diagrams. */
    SwooshArrow = "swooshArrow",
    /** Left right ribbon shape. */
    LeftRightRibbon = "leftRightRibbon",
    /** Seven-sided polygon. */
    Heptagon = "heptagon",
    /** Home-plate pentagon for directional process nodes. */
    HomePlate = "homePlate",
    /** Right arrow shape for directional diagrams. */
    RightArrow = "rightArrow",
    /** Left arrow shape for directional diagrams. */
    LeftArrow = "leftArrow",
    /** Up arrow shape for directional diagrams. */
    UpArrow = "upArrow",
    /** Down arrow shape for directional diagrams. */
    DownArrow = "downArrow",
    /** Left right arrow shape for directional diagrams. */
    LeftRightArrow = "leftRightArrow",
    /** Up down arrow shape for directional diagrams. */
    UpDownArrow = "upDownArrow",
    /** Quad arrow shape for directional diagrams. */
    QuadArrow = "quadArrow",
    /** Left right up arrow shape for directional diagrams. */
    LeftRightUpArrow = "leftRightUpArrow",
    /** Bent arrow shape for directional diagrams. */
    BentArrow = "bentArrow",
    /** Uturn arrow shape for directional diagrams. */
    UturnArrow = "uturnArrow",
    /** Left up arrow shape for directional diagrams. */
    LeftUpArrow = "leftUpArrow",
    /** Bent up arrow shape for directional diagrams. */
    BentUpArrow = "bentUpArrow",
    /** Curved right arrow shape for directional diagrams. */
    CurvedRightArrow = "curvedRightArrow",
    /** Curved left arrow shape for directional diagrams. */
    CurvedLeftArrow = "curvedLeftArrow",
    /** Curved up arrow shape for directional diagrams. */
    CurvedUpArrow = "curvedUpArrow",
    /** Curved down arrow shape for directional diagrams. */
    CurvedDownArrow = "curvedDownArrow",
    /** Striped right arrow shape for directional diagrams. */
    StripedRightArrow = "stripedRightArrow",
    /** Notched right arrow shape for directional diagrams. */
    NotchedRightArrow = "notchedRightArrow",
    /** Five-sided polygon or home-style process node. */
    Pentagon = "pentagon",
    /** Chevron for sequences, progress, and directional stages. */
    Chevron = "chevron",
    /** Right arrow callout shape for directional diagrams. */
    RightArrowCallout = "rightArrowCallout",
    /** Down arrow callout shape for directional diagrams. */
    DownArrowCallout = "downArrowCallout",
    /** Left arrow callout shape for directional diagrams. */
    LeftArrowCallout = "leftArrowCallout",
    /** Up arrow callout shape for directional diagrams. */
    UpArrowCallout = "upArrowCallout",
    /** Left right arrow callout shape for directional diagrams. */
    LeftRightArrowCallout = "leftRightArrowCallout",
    /** Quad arrow callout shape for directional diagrams. */
    QuadArrowCallout = "quadArrowCallout",
    /** Circular arrow for cycles and repeated processes. */
    CircularArrow = "circularArrow",
    /** Equation symbol for plus. */
    MathPlus = "mathPlus",
    /** Equation symbol for minus. */
    MathMinus = "mathMinus",
    /** Equation symbol for multiply. */
    MathMultiply = "mathMultiply",
    /** Equation symbol for divide. */
    MathDivide = "mathDivide",
    /** Equation symbol for equal. */
    MathEqual = "mathEqual",
    /** Equation symbol for not equal. */
    MathNotEqual = "mathNotEqual",
    /** Flowchart process symbol for a standard operation. */
    FlowchartProcess = "flowChartProcess",
    /** Flowchart alternate-process symbol. */
    FlowchartAlternateProcess = "flowChartAlternateProcess",
    /** Flowchart decision symbol for branching conditions. */
    FlowchartDecision = "flowChartDecision",
    /** Flowchart input/output symbol for data entering or leaving a process. */
    FlowChartInputOutput = "flowChartInputOutput",
    /** Flowchart predefined-process symbol for a named subprocess. */
    FlowchartPredefinedProcess = "flowChartPredefinedProcess",
    /** Flowchart internal-storage symbol. */
    FlowchartInternalStorage = "flowChartInternalStorage",
    /** Flowchart document symbol for one document artifact. */
    FlowchartDocument = "flowChartDocument",
    /** Flowchart multiple-documents symbol. */
    FlowchartMultiDocument = "flowChartMultidocument",
    /** Flowchart terminator symbol for a start or end state. */
    FlowchartTerminator = "flowChartTerminator",
    /** Flowchart preparation symbol for initialization or setup. */
    FlowchartPreparation = "flowChartPreparation",
    /** Flowchart manual-input symbol. */
    FlowchartManualInput = "flowChartManualInput",
    /** Flowchart manual-operation symbol. */
    FlowchartManualOperation = "flowChartManualOperation",
    /** Flowchart on-page connector symbol. */
    FlowchartConnector = "flowChartConnector",
    /** Flowchart off-page connector symbol. */
    FlowchartOffPageConnector = "flowChartOffpageConnector",
    /** Flowchart punched-card data symbol. */
    FlowchartPunchedCard = "flowChartPunchedCard",
    /** Flowchart punched-tape data symbol. */
    FlowchartPunchedTape = "flowChartPunchedTape",
    /** Flowchart summing-junction symbol. */
    FlowchartSummingJunction = "flowChartSummingJunction",
    /** Flowchart logical OR junction symbol. */
    FlowchartOr = "flowChartOr",
    /** Flowchart collate symbol. */
    FlowchartCollate = "flowChartCollate",
    /** Flowchart sort symbol. */
    FlowchartSort = "flowChartSort",
    /** Flowchart extract symbol. */
    FlowchartExtract = "flowChartExtract",
    /** Flowchart merge symbol. */
    FlowchartMerge = "flowChartMerge",
    /** Flowchart online-storage symbol. */
    FlowchartOnlineStorage = "flowChartOnlineStorage",
    /** Flowchart delay or wait symbol. */
    FlowchartDelay = "flowChartDelay",
    /** Flowchart sequential-access magnetic-tape storage symbol. */
    FlowchartMagneticTape = "flowChartMagneticTape",
    /** Flowchart magnetic-disk storage symbol. */
    FlowchartMagneticDisk = "flowChartMagneticDisk",
    /** Flowchart direct-access magnetic-drum storage symbol. */
    FlowchartMagneticDrum = "flowChartMagneticDrum",
    /** Flowchart display or screen output symbol. */
    FlowchartDisplay = "flowChartDisplay",
    /** Wedge rect callout shape for annotated content. */
    WedgeRectCallout = "wedgeRectCallout",
    /** Wedge round rect callout shape for annotated content. */
    WedgeRoundRectCallout = "wedgeRoundRectCallout",
    /** Wedge ellipse callout shape for annotated content. */
    WedgeEllipseCallout = "wedgeEllipseCallout",
    /** Cloud callout shape for annotated content. */
    CloudCallout = "cloudCallout",
    /** Border callout 1 shape for annotated content. */
    BorderCallout1 = "borderCallout1",
    /** Border callout 2 shape for annotated content. */
    BorderCallout2 = "borderCallout2",
    /** Border callout 3 shape for annotated content. */
    BorderCallout3 = "borderCallout3",
    /** Accent callout 1 shape for annotated content. */
    AccentCallout1 = "accentCallout1",
    /** Accent callout 2 shape for annotated content. */
    AccentCallout2 = "accentCallout2",
    /** Accent callout 3 shape for annotated content. */
    AccentCallout3 = "accentCallout3",
    /** Callout 1 shape for annotated content. */
    Callout1 = "callout1",
    /** Callout 2 shape for annotated content. */
    Callout2 = "callout2",
    /** Callout 3 shape for annotated content. */
    Callout3 = "callout3",
    /** Accent border callout 1 shape for annotated content. */
    AccentBorderCallout1 = "accentBorderCallout1",
    /** Accent border callout 2 shape for annotated content. */
    AccentBorderCallout2 = "accentBorderCallout2",
    /** Accent border callout 3 shape for annotated content. */
    AccentBorderCallout3 = "accentBorderCallout3",
    /** Ribbon shape. */
    Ribbon = "ribbon",
    /** Ribbon 2 shape. */
    Ribbon2 = "ribbon2",
    /** Ellipse ribbon shape. */
    EllipseRibbon = "ellipseRibbon",
    /** Ellipse ribbon 2 shape. */
    EllipseRibbon2 = "ellipseRibbon2",
    /** Vertical scroll shape. */
    VerticalScroll = "verticalScroll",
    /** Horizontal scroll shape. */
    HorizontalScroll = "horizontalScroll",
    /** Wave shape. */
    Wave = "wave",
    /** Double wave shape. */
    DoubleWave = "doubleWave",
    /** Cube shape. */
    Cube = "cube",
    /** Can shape. */
    Can = "can",
    /** Lightning bolt shape. */
    LightningBolt = "lightningBolt",
    /** Heart shape. */
    Heart = "heart",
    /** Sun shape. */
    Sun = "sun",
    /** Moon shape. */
    Moon = "moon",
    /** Smiley face shape. */
    SmileyFace = "smileyFace",
    /** Irregular seal 1 shape. */
    IrregularSeal1 = "irregularSeal1",
    /** Irregular seal 2 shape. */
    IrregularSeal2 = "irregularSeal2",
    /** Folded corner shape. */
    FoldedCorner = "foldedCorner",
    /** Bevel shape. */
    Bevel = "bevel",
    /** Donut shape. */
    Donut = "donut",
    /** No smoking shape. */
    NoSmoking = "noSmoking",
    /** Block arc shape. */
    BlockArc = "blockArc",
    /** Teardrop shape. */
    Teardrop = "teardrop",
    /** Pie wedge shape. */
    PieWedge = "pieWedge",
    /** Pie shape. */
    Pie = "pie",
    /** Funnel shape. */
    Funnel = "funnel",
    /** Gear 6 shape. */
    Gear6 = "gear6",
    /** Gear 9 shape. */
    Gear9 = "gear9",
    /** Decagon shape. */
    Decagon = "decagon",
    /** Dodecagon shape. */
    Dodecagon = "dodecagon",
    /** Corner tabs shape. */
    CornerTabs = "cornerTabs",
    /** Left brace shape. */
    LeftBrace = "leftBrace",
    /** Right brace shape. */
    RightBrace = "rightBrace",
    /** Left bracket shape. */
    LeftBracket = "leftBracket",
    /** Right bracket shape. */
    RightBracket = "rightBracket",
    /** Action button for back previous. */
    ActionButtonBackPrevious = "actionButtonBackPrevious",
    /** Action button for forward next. */
    ActionButtonForwardNext = "actionButtonForwardNext",
    /** Action button for beginning. */
    ActionButtonBeginning = "actionButtonBeginning",
    /** Action button for end. */
    ActionButtonEnd = "actionButtonEnd",
    /** Action button for home. */
    ActionButtonHome = "actionButtonHome",
    /** Action button for information. */
    ActionButtonInformation = "actionButtonInformation",
    /** Action button for return. */
    ActionButtonReturn = "actionButtonReturn",
    /** Action button for movie. */
    ActionButtonMovie = "actionButtonMovie",
    /** Action button for document. */
    ActionButtonDocument = "actionButtonDocument",
    /** Action button for sound. */
    ActionButtonSound = "actionButtonSound",
    /** Action button for help. */
    ActionButtonHelp = "actionButtonHelp",
    /** Action button for blank. */
    ActionButtonBlank = "actionButtonBlank",
    /** Brace pair shape. */
    BracePair = "bracePair",
    /** Bracket pair shape. */
    BracketPair = "bracketPair",
    /** Chart plus shape. */
    ChartPlus = "chartPlus",
    /** Chart star shape. */
    ChartStar = "chartStar",
    /** Chart x shape. */
    ChartX = "chartX",
    /** Cloud shape. */
    Cloud = "cloud",
    /** Flowchart offline-storage symbol. */
    FlowChartOfflineStorage = "flowChartOfflineStorage",
    /** Line inv shape. */
    LineInv = "lineInv",
    /** Non isosceles trapezoid shape. */
    NonIsoscelesTrapezoid = "nonIsoscelesTrapezoid",
    /** Plaque tabs shape. */
    PlaqueTabs = "plaqueTabs",
    /** Square tabs shape. */
    SquareTabs = "squareTabs",
    /** 4-point star shape. */
    Star4 = "star4",
    /** Up down arrow callout shape for directional diagrams. */
    UpDownArrowCallout = "upDownArrowCallout",
    /** Simple line shape. */
    Line = "line",
    /** Straight connector shape with one segment. */
    StraightConnector1 = "straightConnector1",
    /** Orthogonal connector shape with two segments. */
    BentConnector2 = "bentConnector2",
    /** Orthogonal connector shape with three segments. */
    BentConnector3 = "bentConnector3",
    /** Orthogonal connector shape with four segments. */
    BentConnector4 = "bentConnector4",
    /** Orthogonal connector shape with five segments. */
    BentConnector5 = "bentConnector5",
    /** Curved connector shape with two control sections. */
    CurvedConnector2 = "curvedConnector2",
    /** Curved connector shape with three control sections. */
    CurvedConnector3 = "curvedConnector3",
    /** Curved connector shape with four control sections. */
    CurvedConnector4 = "curvedConnector4",
    /** Curved connector shape with five control sections. */
    CurvedConnector5 = "curvedConnector5"
}
/**
 * Shape line style enums
 * This enum is used define basic shape stroke style or line shape stroke style
 */
export declare enum ShapeLineDashEnum {
    Solid = 1,
    RoundDot = 2,
    SquareDot = 3,
    Dash = 4,
    DashDot = 5,
    LongDash = 6,
    LongDashDot = 7,
    LongDashDotDot = 8
}
/**
 * The line cap type of shape line style or basic shape line stroke style
 */
export declare enum ShapeLineCapEnum {
    Flat = 1,
    Round = 2,
    Square = 3
}
/**
 * The line join type of shape line style or basic shape line stroke style
 */
export declare enum ShapeLineJoinEnum {
    Miter = 1,
    Round = 2,
    Bevel = 3
}
/**
 * The arrow type of connector line shape
 */
export declare enum ShapeArrowTypeEnum {
    None = 0,
    Arrow = 1,
    OpenArrow = 2,
    DiamondArrow = 3,
    StealthArrow = 4,
    OvalArrow = 5
}
export declare enum ShapeArrowSizeEnum {
    Small = 1,
    Medium = 2,
    Large = 3
}
/**
 * Shape sketch (hand-drawn) style enum.
 * Controls how strongly the stroke is perturbed to look like a hand-drawn line.
 *
 * - None      – regular vector stroke, no perturbation
 * - Curved    – very slight smooth waviness
 * - Freehand  – moderate irregular deformation
 * - HandDrawn – heavy rough deformation rendered in two overlapping passes
 */
export declare enum ShapeSketchTypeEnum {
    None = 1,
    Curved = 2,
    Freehand = 3,
    HandDrawn = 4
}
/**
 * The image fill mode when ShapeFillEnum is PictureFill
 */
export declare enum ImageFillModeEnum {
    Stretch = 1,
    /**
     * Tile: The image is repeated (tiled) to fill the shape's area.
     */
    Tile = 2
}
