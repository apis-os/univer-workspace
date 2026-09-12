/** Ink tools that create persistent Board ink elements. */
export declare const BoardInkTool: {
    /** Editable Bezier pen path. */
    readonly Pen: "pen";
    /** Freehand brush stroke. */
    readonly Brush: "brush";
    /** Translucent highlighter stroke. */
    readonly Highlighter: "highlighter";
};
/** Pen anchor behaviors accepted by Board Ink editing APIs. */
export declare const BoardInkPointType: {
    /** Corner anchor with independently controlled incoming and outgoing segments. */
    readonly Corner: "corner";
    /** Smooth anchor that keeps both handles collinear while preserving their lengths. */
    readonly Smooth: "smooth";
    /** Symmetric anchor that keeps both handles collinear and equally long. */
    readonly Symmetric: "symmetric";
    /** Free anchor whose handles can be moved independently. */
    readonly Free: "free";
};
/** Editable pen points accepted by `moveInkAnchorPoint()`. */
export declare const BoardInkHandleKind: {
    /** Move the anchor itself and translate both handles with it. */
    readonly Anchor: "anchor";
    /** Move the incoming Bezier handle. */
    readonly In: "in";
    /** Move the outgoing Bezier handle. */
    readonly Out: "out";
};
/**
 * Ink enum constants exposed through `univerAPI.Enum`.
 *
 * Import `@univerjs-pro/ink/facade` before using this surface.
 *
 * @example
 * ```ts
 * const tool = univerAPI.Enum.BoardInkTool.Pen;
 * console.log(tool);
 * ```
 */
export interface IFBoardInkEnumMixin {
    /**
     * Persistent ink tools accepted by `insertInk()`.
     *
     * Eraser is intentionally absent because it is an interaction mode rather than a stored ink element.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardInkTool.Brush);
     * ```
     */
    BoardInkTool: typeof BoardInkTool;
    /**
     * Pen anchor behaviors accepted by `setInkAnchorPointType()` and pen source models.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardInkPointType.Corner);
     * ```
     */
    BoardInkPointType: typeof BoardInkPointType;
    /**
     * Pen anchor and handle targets accepted by `moveInkAnchorPoint()`.
     *
     * @example
     * ```ts
     * console.log(univerAPI.Enum.BoardInkHandleKind.Anchor);
     * ```
     */
    BoardInkHandleKind: typeof BoardInkHandleKind;
}
declare module '@univerjs/core/facade' {
    interface FEnum extends IFBoardInkEnumMixin {
    }
}
