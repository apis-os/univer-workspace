/**
 * Shared modern selection affordances for shape surfaces that use the engine transformer.
 * Per-object transformer settings still take precedence for special cases such as connectors.
 */
export declare const SHAPE_EDITOR_TRANSFORMER_CONFIG: {
    readonly keepRatio: false;
    readonly moveBoundaryEnabled: false;
    readonly moveEnabled: true;
    readonly resizeEnabled: true;
    readonly rotateEnabled: true;
    readonly rotateAnchorOffset: number;
    readonly rotateAnchorPosition: "bottom";
    readonly rotateLineEnabled: false;
    readonly rotateSize: number;
    readonly rotateCornerRadius: number;
    readonly rotateFill: string;
    readonly rotateStroke: string;
    readonly rotateStrokeWidth: number;
    readonly rotateIconEnabled: true;
    readonly rotateIconStroke: string;
    readonly rotateIconStrokeWidth: number;
    readonly borderEnabled: true;
    readonly borderStroke: string;
    readonly borderStrokeWidth: number;
    readonly borderSpacing: number;
    readonly anchorFill: string;
    readonly anchorStroke: string;
    readonly anchorStrokeWidth: number;
    readonly anchorSize: number;
    readonly anchorCornerRadius: number;
    readonly anchorStyle: "canva";
};
