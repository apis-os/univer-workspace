import type { IShapeCreateInput, IShapeTransform } from '@univerjs-pro/engine-shape';
import type { IDocDrawingBase, ISrcRect, Nullable } from '@univerjs/core';
import type { TextWrappingStyle } from '@univerjs/docs-drawing';
/** Position of a Shape placeholder within its anchor paragraph. */
export declare enum DocShapeAnchorPosition {
    /** Insert before the first character in the paragraph. */
    PARAGRAPH_START = "paragraph-start",
    /** Insert after the last character and before the paragraph terminator. */
    PARAGRAPH_END = "paragraph-end",
    /** Insert at a character offset relative to the start of the paragraph. */
    OFFSET = "offset"
}
interface IDocShapeParagraphAnchorBase {
    /** Persisted paragraph identifier. */
    paragraphId: string;
    /** Header/footer segment identifier. Omit or pass an empty string for the main body. */
    segmentId?: string;
}
/** A stable paragraph-relative anchor used to insert the Shape placeholder. */
export type IDocShapeAnchor = IDocShapeParagraphAnchorBase & ({
    /** Defaults to `PARAGRAPH_END` so existing paragraph text is not split accidentally. */
    position?: DocShapeAnchorPosition.PARAGRAPH_START | DocShapeAnchorPosition.PARAGRAPH_END;
    offset?: never;
} | {
    position: DocShapeAnchorPosition.OFFSET;
    /** Zero-based character offset from the paragraph content start. */
    offset: number;
});
/** Position of a floating Shape relative to its document anchor. */
export interface IDocShapePosition {
    /** Horizontal offset from the page origin. Defaults to `0`. */
    horizontalOffset?: number;
    /** Vertical offset from the top of the anchor paragraph. Defaults to `0`. */
    verticalOffset?: number;
}
/**
 * Wrapping modes for Shapes positioned independently from the inline text flow.
 *
 * `WRAP_SQUARE` flows text beside the Shape's rectangular bounds. `WRAP_TOP_AND_BOTTOM` keeps text above and below
 * the Shape. `IN_FRONT_OF_TEXT` and `BEHIND_TEXT` do not reflow text and should be used only for intentional overlays,
 * backgrounds, or watermarks.
 */
export type DocShapeFloatingWrappingStyle = TextWrappingStyle.WRAP_SQUARE | TextWrappingStyle.WRAP_TOP_AND_BOTTOM | TextWrappingStyle.IN_FRONT_OF_TEXT | TextWrappingStyle.BEHIND_TEXT;
/**
 * Document placement for a Shape.
 *
 * Inline Shapes occupy text-layout space. Floating Shapes may specify an offset; square and top-and-bottom wrapping
 * reflow text, while front-of-text and behind-text placement can overlap text.
 */
export type IDocShapePlacement = {
    /**
     * Places the Shape placeholder in the text flow so that it cannot cover surrounding text.
     * Floating position is intentionally unavailable.
     */
    wrappingStyle: TextWrappingStyle.INLINE;
    anchor: IDocShapeAnchor;
    position?: never;
} | {
    /**
     * Selects how text reflows around or overlaps the floating Shape.
     * Prefer `WRAP_SQUARE` or `WRAP_TOP_AND_BOTTOM` for ordinary document content.
     */
    wrappingStyle: DocShapeFloatingWrappingStyle;
    anchor: IDocShapeAnchor;
    position?: IDocShapePosition;
};
/** Size and rotation accepted when creating a document Shape. Position belongs to `placement`. */
export type IDocShapeTransform = Partial<Pick<IShapeTransform, 'width' | 'height' | 'rotation'>>;
/** Common Shape creation input with document-specific paragraph placement. */
export type IDocShapeCreateInput = Omit<IShapeCreateInput, 'transform'> & {
    /** Paragraph anchor and one of the five supported document wrapping modes. */
    placement: IDocShapePlacement;
    /** Shape size and rotation. Document Shapes do not support flip at creation time. */
    transform?: IDocShapeTransform;
};
export interface IDocShapeDrawingParam extends IDocDrawingBase {
    data: {
        disablePopup?: boolean;
        fill?: boolean;
        rotateEnabled?: boolean;
        resizeEnabled?: boolean;
        borderEnabled?: boolean;
    };
    srcRect?: Nullable<ISrcRect>;
    prstGeom?: Nullable<string>;
}
export {};
