import type { IBasicShapeData, IShapeCreateInput, IShapeData, IShapeLineStyle, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { HorizontalAlign, IDocumentData, IGlowEffect, ImageSourceType, IResources, IShadowEffect, VerticalAlign } from '@univerjs/core';
import type { BoardCustomShapeType } from './custom-shapes';
import type { BoardSequenceShapeType, IBoardSequenceActivationData, IBoardSequenceLifelineData } from './sequence-diagram';
/** Board creation accepts native presets as well as the common engine presets. */
export interface IBoardShapeCreateInput extends Omit<IShapeCreateInput, 'shapeType' | 'shapeData'> {
    shapeType: BoardShapeType;
    /** Native sequence overrides are merged with the selected preset's defaults. */
    shapeData?: IShapeData & {
        sequenceLifeline?: Partial<IBoardSequenceLifelineData>;
        sequenceActivation?: Partial<IBoardSequenceActivationData>;
    };
}
export type BoardCustomData = Record<string, unknown> | null;
export type BoardElementRole = 'backgroundGraphic';
export type BoardElementManagedBy = 'presentationBackground';
export declare const BoardElementType: {
    /** Template-owned placeholder resolved during import or layout application. */
    readonly Placeholder: "placeholder";
    /** Standalone editable rich-text element. */
    readonly Text: "text";
    /** Basic or custom vector shape, including persistent Ink paths. */
    readonly Shape: "shape";
    /** Raster or externally sourced image element. */
    readonly Image: "image";
    /** Data chart element handled by a registered chart adapter. */
    readonly Chart: "chart";
    /** Editable Board table backed by a table resource. */
    readonly Table: "table";
    /** Imported or adapter-owned compound diagram element. */
    readonly Diagram: "diagram";
    /** Audio or video media element. */
    readonly Media: "media";
    /** Legacy physical group element retained for snapshot compatibility. */
    readonly Group: "group";
    /** Routed line that may attach to Board elements. */
    readonly Connector: "connector";
    /** Generic, swimlane, or structured semantic container. */
    readonly Container: "container";
};
export type BoardElementType = typeof BoardElementType[keyof typeof BoardElementType];
export declare const BoardPlaceholderType: {
    readonly Title: "title";
    readonly CenterTitle: "centerTitle";
    readonly Subtitle: "subtitle";
    readonly Body: "body";
    readonly Text: "text";
    readonly Object: "object";
    readonly Picture: "picture";
    readonly Chart: "chart";
    readonly Table: "table";
    readonly Diagram: "diagram";
    readonly Media: "media";
    readonly SlideNumber: "slideNumber";
    readonly Date: "date";
    readonly Footer: "footer";
    readonly Header: "header";
};
export type BoardPlaceholderType = typeof BoardPlaceholderType[keyof typeof BoardPlaceholderType];
export declare const BoardMediaType: {
    readonly Audio: "audio";
    readonly Video: "video";
};
export type BoardMediaType = typeof BoardMediaType[keyof typeof BoardMediaType];
export declare enum BoardPageType {
    Page = "page",
    Master = "master",
    Layout = "layout",
    HandoutMaster = "handoutMaster",
    NotesMaster = "notesMaster"
}
export declare enum BoardPageSizePreset {
    Standard4By3 = "standard4By3",
    WideScreen16By9 = "wideScreen16By9",
    WideScreen16By10 = "wideScreen16By10",
    Custom = "custom"
}
export declare enum BoardBackgroundType {
    None = "none",
    Solid = "solid",
    Gradient = "gradient",
    Image = "image",
    Pattern = "pattern"
}
export declare enum BoardTransitionType {
    None = "none",
    Fade = "fade",
    Push = "push",
    Wipe = "wipe",
    Cut = "cut",
    Cover = "cover",
    Uncover = "uncover",
    Reveal = "reveal",
    Split = "split",
    Zoom = "zoom"
}
export declare enum BoardTransitionDirection {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}
export declare enum BoardTransitionSpeed {
    Slow = "slow",
    Medium = "medium",
    Fast = "fast"
}
export interface IBoardElementTransform {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    skewX?: number;
    skewY?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface IBoardPageSize {
    width: number;
    height: number;
    preset?: BoardPageSizePreset;
}
export interface IBoardElementBase {
    id: string;
    type: BoardElementType;
    transform: IBoardElementTransform;
    parentId?: string;
    laneId?: string;
    role?: BoardElementRole;
    managedBy?: BoardElementManagedBy;
    name?: string;
    description?: string;
    visible?: boolean;
    selectable?: boolean;
    locked?: boolean;
    custom?: BoardCustomData;
}
export interface IBoardPlaceholderData {
    id: string;
    type: BoardPlaceholderType;
    index?: number;
    transform?: IBoardElementTransform;
    defaultText?: string;
    custom?: BoardCustomData;
}
export interface IBoardPlaceholderStyle {
    fill?: IBasicShapeData['fill'];
    stroke?: IShapeLineStyle;
}
export interface IBoardTextStyle {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    horizontalAlign?: HorizontalAlign;
    verticalAlign?: VerticalAlign;
}
export interface IBoardPlaceholderElement extends IBoardElementBase {
    type: typeof BoardElementType.Placeholder;
    placeholder: IBoardPlaceholderData;
    text?: string;
    style?: IBoardPlaceholderStyle;
}
export interface IBoardTextElement extends IBoardElementBase {
    type: typeof BoardElementType.Text;
    text?: string;
    textStyle?: IBoardTextStyle;
    textData?: IDocumentData;
}
export interface IBoardShapeElement extends IBoardElementBase {
    type: typeof BoardElementType.Shape;
    shapeData: IBasicShapeData;
}
export type BoardContainerKind = 'generic' | 'swimlane' | 'uml-package' | 'system-boundary';
export type BoardContainerTitlePosition = 'top' | 'inside';
export type BoardContainerMembershipAwareness = 'interactive' | 'structural';
export interface IBoardContainerPadding {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface IBoardContainerBehavior {
    acceptsChildren: boolean;
    acceptsContainer: boolean;
    allowNested: boolean;
    autoCapture: boolean;
    autoResize: boolean;
    membershipLocked: boolean;
    membershipAwareness?: BoardContainerMembershipAwareness;
    clipChildren: boolean;
}
export interface IBoardContainerCapturePolicy {
    enabled: boolean;
    captureMode: 'strict';
    expelMode: 'hysteresis';
    expelHysteresis: number;
    allowCaptureFromSiblingContainer: boolean;
    allowCaptureFromAncestorContainer: boolean;
    allowCaptureContainer: boolean;
    allowCaptureLockedObjects?: boolean;
    modifierToDisable?: 'Alt';
    modifierToForce?: 'Shift';
}
export interface IBoardSwimlaneLane {
    id: string;
    title: string;
    order: number;
    size: number;
    minSize?: number;
    locked?: boolean;
    collapsed?: boolean;
    titleStyle?: IBoardTextStyle;
}
export interface IBoardSwimlaneData {
    orientation: 'horizontal' | 'vertical';
    lanes: IBoardSwimlaneLane[];
    headerSize?: number;
    laneGap?: number;
    collapsedLaneSize?: number;
}
export interface IBoardContainerData {
    kind: BoardContainerKind;
    title?: string;
    titleVisible?: boolean;
    titlePosition?: BoardContainerTitlePosition;
    headerSize?: number;
    padding: IBoardContainerPadding;
    shapeData: IBasicShapeData;
    behavior: IBoardContainerBehavior;
    capturePolicy: IBoardContainerCapturePolicy;
    style?: {
        titleStyle?: IBoardTextStyle;
    };
    swimlane?: IBoardSwimlaneData;
    custom?: BoardCustomData;
}
export interface IBoardContainerElement extends IBoardElementBase {
    type: typeof BoardElementType.Container;
    containerData: IBoardContainerData;
}
export type BoardConnectorRouting = 'straight' | 'orthogonal' | 'curve' | 'freePolyline';
export type BoardConnectorRoutingMode = 'auto' | 'manual' | 'mixed';
/**
 * Stable shape-side ids used by connector endpoints.
 */
export declare const BoardConnectorSite: {
    readonly Top: 0;
    readonly Right: 1;
    readonly Bottom: 2;
    readonly Left: 3;
};
/**
 * Agent-friendly shape-side names mapped to the model's stable site ids.
 */
export declare const BoardConnectorSiteBySide: {
    readonly top: 0;
    readonly right: 1;
    readonly bottom: 2;
    readonly left: 3;
};
export type BoardConnectorSide = keyof typeof BoardConnectorSiteBySide;
export type BoardConnectorEndpointKind = 'free' | 'lifeline' | 'shapeBoundary' | 'shapeSite';
export declare const BOARD_CONNECTOR_ENDPOINT_SNAP_THRESHOLD = 12;
export interface IBoardConnectorPoint {
    x: number;
    y: number;
}
export interface IBoardConnectorFreeEndpoint extends IBoardConnectorPoint {
    kind: 'free';
}
export interface IBoardConnectorShapeBoundaryEndpoint {
    kind: 'shapeBoundary';
    shapeId: string;
    outlineIndex: number;
    segmentIndex: number;
    segmentT: number;
    boundaryRatio?: number;
    localUV?: {
        u: number;
        v: number;
    };
    fallbackPoint?: IBoardConnectorPoint;
}
export interface IBoardConnectorShapeSiteEndpoint {
    kind: 'shapeSite';
    shapeId: string;
    connectionSiteId: number;
    /**
     * Optional normalized position on the selected side.
     *
     * Top and bottom grow from left to right; left and right grow from top to bottom.
     * Omit this field to retain the legacy side-center connection point.
     */
    connectionPosition?: number;
    fallbackPoint?: IBoardConnectorPoint;
}
export interface IBoardConnectorLifelineEndpoint {
    kind: 'lifeline';
    shapeId: string;
    offsetY: number;
    fallbackPoint?: IBoardConnectorPoint;
}
export type IBoardConnectorEndpoint = IBoardConnectorFreeEndpoint | IBoardConnectorLifelineEndpoint | IBoardConnectorShapeBoundaryEndpoint | IBoardConnectorShapeSiteEndpoint;
export interface IBoardConnectorWaypoint extends IBoardConnectorPoint {
    id: string;
    kind: 'manual' | 'auto';
    locked?: boolean;
}
export interface IBoardConnectorCurveAnchor extends IBoardConnectorPoint {
    id: string;
    kind: 'manual' | 'auto';
    endpoint?: IBoardConnectorEndpoint;
    locked?: boolean;
}
export interface IBoardConnectorCurveControl extends IBoardConnectorPoint {
    id: string;
    segmentIndex: number;
    kind: 'manual' | 'auto';
    locked?: boolean;
}
export interface IBoardConnectorCurveData {
    anchors?: IBoardConnectorCurveAnchor[];
    controls?: IBoardConnectorCurveControl[];
    tension?: number;
}
export interface IBoardConnectorOrthogonalData {
    routePoints?: IBoardConnectorWaypoint[];
}
export type BoardConnectorMarkerType = 'none' | 'composite' | 'openArrow' | 'filledArrow' | 'openTriangle' | 'filledTriangle' | 'openDiamond' | 'filledDiamond' | 'openCircle' | 'filledCircle' | 'bar' | 'doubleBar' | 'crowFoot' | 'cross' | 'plus';
export type BoardConnectorMarkerSize = 'sm' | 'md' | 'lg' | number;
export interface IBoardConnectorMarker {
    type: BoardConnectorMarkerType;
    size?: BoardConnectorMarkerSize;
    offset?: number;
    inheritStroke?: boolean;
    inheritFill?: boolean;
    parts?: Exclude<BoardConnectorMarkerType, 'none' | 'composite'>[];
}
/** Visual effect used while a connector animation is enabled. */
export type BoardConnectorAnimationMode = 'dash' | 'particle' | 'pulse' | 'gradient' | 'particles' | 'arrows';
export interface IBoardConnectorAnimation {
    /**
     * Animated visual. `dash` moves a dash pattern, `particle` moves one dot, `pulse` highlights the full path,
     * `gradient` moves a fading highlight, and `particles` / `arrows` render a repeated sequence.
     */
    mode: BoardConnectorAnimationMode;
    /** Travel direction along the logical connector path. Ignored by `pulse`. Defaults to `forward`. */
    direction?: 'forward' | 'reverse';
    /** Relative playback multiplier. `1` is normal speed, `0.5` is slow, and `2` is fast. Defaults to `1`. */
    speed?: number;
}
export interface IBoardConnectorStyle {
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
    dash?: number[];
    startMarker?: IBoardConnectorMarker;
    endMarker?: IBoardConnectorMarker;
    cornerStyle?: 'miter' | 'rounded';
    lineJump?: 'none' | 'arc';
    /** Omit to keep the connector static. Connector animation is disabled by default. */
    animation?: IBoardConnectorAnimation;
}
/** Patch semantics for connector styles. `null` removes animation while `undefined` preserves it. */
export type BoardConnectorStylePatch = Omit<Partial<IBoardConnectorStyle>, 'animation'> & {
    animation?: IBoardConnectorAnimation | null;
};
export interface IBoardConnectorLabelStyle {
    /** Label box fill. Omit it for a transparent background. */
    fill?: Pick<NonNullable<IBasicShapeData['fill']>, 'color' | 'opacity'>;
    /** Label box border. Omit it for no border. */
    stroke?: Pick<IShapeLineStyle, 'color' | 'dashType' | 'lineStrokeType' | 'opacity' | 'width'>;
    /** Whether to interrupt the route where it intersects the label box. Defaults to `true`; unrelated to text wrapping. */
    interruptLine?: boolean;
    /** Extra route interruption spacing around the label box, in Board units. */
    lineGap?: number;
}
export interface IBoardConnectorLabelStylePatch {
    /** Replaces the fill; `null` restores the transparent default. */
    fill?: IBoardConnectorLabelStyle['fill'] | null;
    /** Replaces the border; `null` restores the no-border default. */
    stroke?: IBoardConnectorLabelStyle['stroke'] | null;
    interruptLine?: boolean;
    lineGap?: number;
}
/** Stable path-relative anchor used by connector labels. */
export declare const BoardConnectorLabelAnchor: {
    readonly Start: "start";
    readonly Center: "center";
    readonly End: "end";
    readonly Path: "path";
    /** Prefer the longest orthogonal segment; use the arc-length midpoint on other paths. */
    readonly Auto: "auto";
};
export type BoardConnectorLabelAnchor = typeof BoardConnectorLabelAnchor[keyof typeof BoardConnectorLabelAnchor];
/** Side of a directed connector path, evaluated from start toward end. */
export declare const BoardConnectorLabelSide: {
    readonly Left: "left";
    readonly OnPath: "onPath";
    readonly Right: "right";
};
export type BoardConnectorLabelSide = typeof BoardConnectorLabelSide[keyof typeof BoardConnectorLabelSide];
/** Text orientation used when a connector label is rendered. */
export declare const BoardConnectorLabelOrientation: {
    /** Keep text horizontal regardless of the connector direction. */
    readonly Horizontal: "horizontal";
    /** Follow the directed tangent exactly; reversed routes can produce upside-down text. */
    readonly FollowPath: "followPath";
    /** Follow the tangent, flipping text by 180 degrees when needed to keep it upright. */
    readonly Auto: "auto";
};
export type BoardConnectorLabelOrientation = typeof BoardConnectorLabelOrientation[keyof typeof BoardConnectorLabelOrientation];
/** Declarative label sizing; measurement belongs to the rendering runtime, never to Facade callers. */
export declare const BoardConnectorLabelSizing: {
    readonly AutoSize: "autoSize";
    readonly FixedWidth: "fixedWidth";
    readonly FixedSize: "fixedSize";
};
export type BoardConnectorLabelSizing = typeof BoardConnectorLabelSizing[keyof typeof BoardConnectorLabelSizing];
/** Width and height describe the outer label box, including text padding. */
export type IBoardConnectorLabelLayout = {
    mode: typeof BoardConnectorLabelSizing.AutoSize;
    width?: never;
    height?: never;
} | {
    mode: typeof BoardConnectorLabelSizing.FixedWidth;
    width: number;
    height?: never;
} | {
    mode: typeof BoardConnectorLabelSizing.FixedSize;
    width: number;
    height: number;
};
/** Coordinate frame for a label's free displacement. Canvas preserves imported positions. */
export declare const BoardConnectorLabelOffsetSpace: {
    readonly Path: "path";
    readonly Canvas: "canvas";
};
export type BoardConnectorLabelOffsetSpace = typeof BoardConnectorLabelOffsetSpace[keyof typeof BoardConnectorLabelOffsetSpace];
export type IBoardConnectorLabelOffset = {
    space: typeof BoardConnectorLabelOffsetSpace.Path;
    along: number;
    normal: number;
    x?: never;
    y?: never;
} | {
    space: typeof BoardConnectorLabelOffsetSpace.Canvas;
    x: number;
    y: number;
    along?: never;
    normal?: never;
};
export interface IBoardConnectorLabelPlacement {
    /** Semantic position along the connector path. Defaults to `center`, the whole-path arc-length midpoint. */
    anchor?: BoardConnectorLabelAnchor;
    /** Whole-path position used when `anchor` is `path`, clamped to the inclusive range `0..1`. */
    pathRatio?: number;
    /** Lateral side relative to the directed path. Defaults to `onPath`. */
    side?: BoardConnectorLabelSide;
    /** Perpendicular gap from the path to the label box edge, in Board units. Ignored for onPath. */
    distance?: number;
    /** Inset from the endpoint marker clearance to the near label-box edge, in Board units. */
    alongOffset?: number;
    /** Label text orientation. Defaults to `horizontal`. */
    orientation?: BoardConnectorLabelOrientation;
    /** Free displacement after semantic placement. Positive path normal points to the directed path's left. */
    offset?: IBoardConnectorLabelOffset;
}
export interface IBoardConnectorLabel {
    id: string;
    /** Defaults to AutoSize. Resolved text dimensions are derived runtime state, not persisted measurements. */
    layout?: IBoardConnectorLabelLayout;
    /** Single authoritative content value. Plain text is centered; rich documents retain explicit paragraph alignment. */
    content?: string | IDocumentData;
    /**
     * Semantic path-relative placement. Explicit ratios use `anchor: Path` and `placement.pathRatio`.
     * Omitting placement is equivalent to Center. Auto explicitly selects the longest orthogonal segment midpoint.
     */
    placement?: IBoardConnectorLabelPlacement;
    style?: IBoardConnectorLabelStyle;
}
export interface IBoardConnectorData {
    start: IBoardConnectorEndpoint;
    end: IBoardConnectorEndpoint;
    routing: BoardConnectorRouting;
    routingMode: BoardConnectorRoutingMode;
    waypoints?: IBoardConnectorWaypoint[];
    orthogonalData?: IBoardConnectorOrthogonalData;
    curveData?: IBoardConnectorCurveData;
    style?: IBoardConnectorStyle;
    /** Authoritative ordered editable labels. An empty array explicitly removes every label. */
    labels?: IBoardConnectorLabel[];
    meta?: {
        pptCompat?: unknown;
    };
}
export interface IBoardConnectorElement extends IBoardElementBase {
    type: typeof BoardElementType.Connector;
    connectorData: IBoardConnectorData;
}
export interface IBoardImageElement extends IBoardElementBase {
    type: typeof BoardElementType.Image;
    source: string;
    imageSourceType?: ImageSourceType;
    crop?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    };
    prstGeom?: ShapeTypeEnum;
    adjustValues?: Record<string, number>;
}
export interface IBoardChartElement extends IBoardElementBase {
    type: typeof BoardElementType.Chart;
    chartId: string;
    placeholder?: IBoardPlaceholderData;
    stroke?: IShapeLineStyle;
}
export interface IBoardTableElement extends IBoardElementBase {
    type: typeof BoardElementType.Table;
    tableId: string;
    placeholder?: IBoardPlaceholderData;
}
export interface IBoardMediaElement extends IBoardElementBase {
    type: typeof BoardElementType.Media;
    mediaType: BoardMediaType;
    source: string;
    poster?: string;
}
export interface IBoardGroupElement extends IBoardElementBase {
    type: typeof BoardElementType.Group;
    children: string[];
}
export type IBoardPageElement = IBoardPlaceholderElement | IBoardTextElement | IBoardShapeElement | IBoardContainerElement | IBoardConnectorElement | IBoardImageElement | IBoardChartElement | IBoardTableElement | IBoardMediaElement | IBoardGroupElement;
export type IBoardFillStyle = NonNullable<IBasicShapeData['fill']>;
export interface IBoardReflectionEffect {
    blurRadius?: number;
    startAlpha?: number;
    endAlpha?: number;
    distance?: number;
    direction?: number;
}
export interface IBoardEffectStyle {
    outerShadow?: IShadowEffect;
    innerShadow?: IShadowEffect;
    reflection?: IBoardReflectionEffect;
    glow?: IGlowEffect;
}
export interface IBoardFmtScheme {
    name?: string;
    fillStyleLst: IBoardFillStyle[];
    lnStyleLst: IShapeLineStyle[];
    effectStyleLst: IBoardEffectStyle[];
    bgFillStyleLst: IBoardFillStyle[];
}
export interface IBoardThemeData {
    id?: string;
    name?: string;
    colorScheme?: Record<string, string>;
    fontScheme?: {
        heading?: string;
        body?: string;
    };
    fmtScheme?: IBoardFmtScheme;
    custom?: BoardCustomData;
}
export type BoardShapeType = ShapeTypeEnum | BoardCustomShapeType | BoardSequenceShapeType;
export interface IBoardSolidBackground {
    type: BoardBackgroundType.Solid;
    color: string;
    alpha?: number;
}
export interface IBoardGradientStop {
    color: string;
    position: number;
    alpha?: number;
}
export interface IBoardGradientBackground {
    type: BoardBackgroundType.Gradient;
    angle?: number;
    stops: IBoardGradientStop[];
}
export type BoardBackgroundImageFit = 'cover' | 'contain' | 'stretch';
export interface IBoardImageBackground {
    type: BoardBackgroundType.Image;
    source: string;
    imageSourceType?: ImageSourceType;
    fit?: BoardBackgroundImageFit;
}
export interface IBoardPatternBackground {
    type: BoardBackgroundType.Pattern;
    pattern: string;
    foregroundColor?: string;
    backgroundColor?: string;
}
export interface IBoardEmptyBackground {
    type: BoardBackgroundType.None;
}
export type IBoardBackgroundData = IBoardEmptyBackground | IBoardSolidBackground | IBoardGradientBackground | IBoardImageBackground | IBoardPatternBackground;
export type BoardHeaderFooterDateTimeMode = 'auto' | 'fixed';
export interface IBoardHeaderFooterSlot {
    enabled?: boolean;
    text?: string;
}
export interface IBoardHeaderFooterDateTimeSlot extends IBoardHeaderFooterSlot {
    mode?: BoardHeaderFooterDateTimeMode;
    format?: string;
}
export interface IBoardHeaderFooterData {
    header?: IBoardHeaderFooterSlot;
    footer?: IBoardHeaderFooterSlot;
    dateTime?: IBoardHeaderFooterDateTimeSlot;
    slideNumber?: IBoardHeaderFooterSlot;
}
export interface IBoardTransitionSound {
    name?: string;
    source?: string;
    loopUntilNext?: boolean;
}
export interface IBoardTransitionData {
    type: BoardTransitionType;
    duration?: number;
    direction?: BoardTransitionDirection;
    advanceOnClick?: boolean;
    advanceAfterTime?: number;
    speed?: BoardTransitionSpeed;
    sound?: IBoardTransitionSound;
    loopSoundUntilNext?: boolean;
    effectOptions?: Record<string, unknown>;
    extension?: Record<string, unknown>;
}
export interface IBoardPage {
    id: string;
    pageType: BoardPageType;
    name: string;
    themeId?: string;
    pageSize?: IBoardPageSize;
    background?: IBoardBackgroundData;
    headerFooter?: IBoardHeaderFooterData;
    showMasterSp?: boolean;
    elementOrder: string[];
    elements: Record<string, IBoardPageElement>;
    visible?: boolean;
    custom?: BoardCustomData;
}
export interface IBoardData {
    id: string;
    rev?: number;
    name: string;
    appVersion: string;
    locale?: string;
    defaultPageSize: IBoardPageSize;
    pageOrder: string[];
    pages: Record<string, IBoardPage>;
    activePageId?: string;
    slideOrder?: string[];
    slides?: Record<string, IBoardPage>;
    masterPageOrder?: string[];
    masterPages?: Record<string, IBoardPage>;
    layoutPageOrder?: string[];
    layoutPages?: Record<string, IBoardPage>;
    handoutMasterPageOrder?: string[];
    handoutMasterPages?: Record<string, IBoardPage>;
    notesMasterPageOrder?: string[];
    notesMasterPages?: Record<string, IBoardPage>;
    activeSlideId?: string;
    transitionRecords?: Record<string, IBoardTransitionData>;
    slideTransitionRefs?: Record<string, string>;
    theme?: IBoardThemeData;
    themes?: Record<string, IBoardThemeData>;
    zoomRatio?: number;
    resources?: IResources;
    custom?: BoardCustomData;
}
export interface IBoardInsertShapeOptions {
    shapeType: BoardShapeType;
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    startArrow?: boolean;
    endArrow?: boolean;
    horizontal?: boolean;
    vertical?: boolean;
}
export interface IBoardInsertTextBoxOptions {
    width?: number;
    height?: number;
    horizontal?: boolean;
    vertical?: boolean;
}
