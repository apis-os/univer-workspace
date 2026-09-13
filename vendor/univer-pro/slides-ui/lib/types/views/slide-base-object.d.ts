import type { ISlideAdjustHandle, ISlideConnectionSite } from '@univerjs-pro/slides';
import type { IShapeProps, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { Shape } from '@univerjs/engine-render';
/**
 * Props for {@link SlideBaseObject}.
 *
 * Extends the engine-render {@link IShapeProps} with slide-specific
 * identifiers so that controllers can map canvas objects back to the
 * data model without storing extra lookup tables.
 */
export interface ISlideBaseObjectProps extends IShapeProps {
    /** Element ID in the slide data model ({@link ISlideElementBase.id}). */
    elementId: string;
    /** Slide page ID this object belongs to ({@link ISlidePage.id}). */
    pageId: string;
}
/**
 * Abstract base class for all slide drawing objects on the canvas.
 *
 * Hierarchy: `SlideBaseObject` → `Shape` → `BaseObject` → `Disposable`
 *
 * Adds three slide-specific capabilities on top of {@link Shape}:
 *
 * 1. **Rotate handle** – exposes `getRotateHandlePosition()` which returns
 *    the local-space coordinate of the rotate control point (rendered by the
 *    controller, not here).  Skipping resize handles (八爪) for now.
 *
 * 2. **Connection sites** – `getConnectionSites()` returns the connection
 *    anchor points in normalised [0, 1] space.  The default implementation
 *    returns four rectangle sites (top / right / bottom / left).  Shape
 *    subclasses that use `engine-shape` can override this to read the exact
 *    sites from their `ShapeModel`.
 *
 * 3. **Adjust handles** – `getAdjustHandles()` returns shape-specific
 *    geometry handles in normalised space.  Returns an empty array by default;
 *    shape subclasses delegate to `ShapeModel` to populate these.
 *
 * @template T Props type (must extend {@link ISlideBaseObjectProps}).
 */
export declare abstract class SlideBaseObject<T extends ISlideBaseObjectProps = ISlideBaseObjectProps> extends Shape<T> {
    /**
     * Pixel distance from the top-centre of the bounding box to the
     * visual rotate handle.  The actual handle is rendered by the controller.
     */
    static readonly ROTATE_HANDLE_OFFSET_PX = 30;
    /** Element ID corresponding to {@link ISlideElementBase.id}. */
    readonly elementId: string;
    /** Slide page ID corresponding to {@link ISlidePage.id}. */
    readonly pageId: string;
    constructor(key: string, props: T);
    /**
     * Returns the **local-space pixel** position of the rotate handle.
     *
     * By default the handle sits above the top-centre of the bounding box.
     * Override if the shape needs a non-standard rotate handle placement.
     *
     * The controller is responsible for transforming this into scene/screen
     * space and rendering the handle UI.
     */
    getRotateHandlePosition(): {
        x: number;
        y: number;
    };
    /**
     * Returns the connection sites for this object in **normalised [0, 1]**
     * coordinates relative to the bounding box.
     *
     * Default: five standard OOXML sites – top-centre, right-centre,
     * bottom-centre, left-centre, and centre.
     *
     * Subclasses that wrap a `ShapeModel` (engine-shape) should override this
     * to return the exact preset-shape connection sites so that connectors
     * snap to the correct geometry points.
     */
    getConnectionSites(): ISlideConnectionSite[];
    /**
     * Converts a normalised connection site to pixel coordinates in
     * **local (object) space** given the object's current width and height.
     */
    connectionSiteToLocalPixel(site: ISlideConnectionSite): {
        x: number;
        y: number;
    };
    /**
     * Returns the adjust handles for this object in **normalised [0, 1]**
     * coordinates relative to the bounding box.
     *
     * Default: empty array (no adjust handles).
     *
     * Shape subclasses should override this to expose the handles produced by
     * their underlying `ShapeModel.getAdjustHandles()` call, mapped from
     * the 100 000-unit OOXML coordinate space to [0, 1].
     */
    getAdjustHandles(): ISlideAdjustHandle[];
    /**
     * Subclasses must implement the actual canvas rendering logic.
     *
     * Called by `render()` (inherited from `Shape` / `BaseObject`) after the
     * context transform has been applied.  The canvas origin is at the
     * top-left of the element's bounding box.
     */
    abstract _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo): void;
}
