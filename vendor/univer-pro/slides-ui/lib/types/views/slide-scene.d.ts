import type { Nullable } from '@univerjs/core';
import type { Engine, ISceneTransformState, SceneViewer } from '@univerjs/engine-render';
import type { SlidePageSkeleton } from './slide-page-skeleton';
import { Scene } from '@univerjs/engine-render';
/**
 * Slide-specific scene that hosts the **main editing canvas**.
 *
 * Extends the engine-render {@link Scene} with a reference to the current
 * {@link SlidePageSkeleton} so that render controllers can obtain layout
 * information without needing to pass the skeleton around separately.
 *
 * ## Responsibilities
 *
 * - Resize the scene canvas to match the slide page dimensions whenever a new
 *   skeleton is loaded via `loadPageSkeleton()`.
 * - Expose the skeleton to render controllers via `getSkeleton()`.
 * - Leave all object creation / destruction to dedicated render controllers
 *   (not done here — this class is intentionally thin).
 *
 * ## Lifecycle
 *
 * ```
 * const engine   = new Engine();
 * const scene    = new SlideScene('slide-main', engine);
 * const skeleton = new SlidePageSkeleton(page, 960, 540);
 *
 * scene.loadPageSkeleton(skeleton);
 * // Render controller subscribes to skeleton.dirty$ and populates the scene.
 * ```
 *
 * ## Coordinate system
 *
 * The scene's internal coordinate system is 1:1 pixel — one scene unit equals
 * one CSS pixel.  The viewport zoom (CSS `transform: scale(…)`) is handled
 * outside the scene by the container element, so objects can be placed using
 * the absolute pixel values that come directly from `ISlideDrawingTransform`.
 */
export declare class SlideScene extends Scene {
    private _skeleton;
    constructor(sceneKey: string, parent: Engine | SceneViewer, state?: ISceneTransformState);
    /**
     * Attaches a {@link SlidePageSkeleton} to this scene and resizes the
     * canvas to match the slide page dimensions.
     *
     * Call this whenever the active slide page changes.  The scene itself does
     * **not** rebuild its canvas objects — that responsibility belongs to the
     * render controller which subscribes to `skeleton.dirty$`.
     *
     * @param skeleton — The skeleton for the new active page.
     */
    loadPageSkeleton(skeleton: SlidePageSkeleton): void;
    /**
     * Returns the currently active {@link SlidePageSkeleton}, or `null` if
     * no page has been loaded yet.
     */
    getSkeleton(): Nullable<SlidePageSkeleton>;
    /**
     * Returns `true` if a skeleton is currently attached and the scene is
     * ready to render objects.
     */
    isReady(): boolean;
    dispose(): void;
}
