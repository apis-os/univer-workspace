export declare const MIND_MAP_MODE_ID = "mindmap";
export declare const MIND_MAP_CONTAINER_ROLE = "mindmap-container";
export declare const MIND_MAP_NODE_ROLE = "mindmap-node";
export declare const MIND_MAP_CONNECTOR_ROLE = "mindmap-tree-edge";
export declare const MIND_MAP_DECORATION_ROLE = "mindmap-node-decoration";
export declare const DEFAULT_MIND_MAP_THEME_ID = "default";
export declare const MIND_MAP_DEFAULT_NODE_TEXT = "Add text";
export declare const MIND_MAP_DEFAULT_CONTAINER_TITLE = "Mind Map";
export declare const MIND_MAP_DEFAULT_THEME: {
    readonly root: {
        readonly fillColor: "#4f7bcf";
        readonly strokeColor: "#4f7bcf";
        readonly textColor: "#ffffff";
        readonly fontSize: 24;
    };
    readonly child: {
        readonly fillColor: "#ffffff";
        readonly strokeColor: "#4f7bcf";
        readonly textColor: "#111827";
        readonly fontSize: 18;
    };
    readonly connector: {
        readonly strokeColor: "#4f7bcf";
    };
    readonly container: {
        readonly fillColor: "rgba(255, 255, 255, 0)";
        readonly strokeColor: "rgba(0, 0, 0, 0)";
    };
};
export declare const MIND_MAP_DEFAULT_TEXT_METRICS: {
    readonly root: {
        readonly paddingX: 56;
        readonly paddingY: 34;
    };
    readonly child: {
        readonly paddingX: 40;
        readonly paddingY: 22;
    };
    readonly lineHeightRatio: 1.35;
};
export declare const MIND_MAP_DEFAULT_TEXT_RECT_PADDING: {
    readonly left: 8;
    readonly top: 8;
    readonly right: 8;
    readonly bottom: 8;
};
export declare const MIND_MAP_DEFAULT_LAYOUT: {
    readonly direction: "both";
    readonly structureKind: "mindmap-horizontal";
    readonly branchLineType: "rounded-orthogonal";
    readonly horizontalGap: 96;
    readonly timelineAxisGap: 144;
    readonly siblingGap: 24;
    readonly branchGap: 40;
};
export declare const MIND_MAP_LAYOUT_SPACING_LIMITS: {
    readonly horizontalGap: {
        readonly min: 80;
        readonly max: 320;
    };
    readonly siblingGap: {
        readonly min: 16;
        readonly max: 120;
    };
    readonly branchGap: {
        readonly min: 24;
        readonly max: 180;
    };
};
export declare const MIND_MAP_DEFAULT_NODE_SIZE: {
    readonly rootWidth: 220;
    readonly rootHeight: 72;
    readonly nodeWidth: 160;
    readonly nodeHeight: 48;
    readonly containerPadding: 48;
};
