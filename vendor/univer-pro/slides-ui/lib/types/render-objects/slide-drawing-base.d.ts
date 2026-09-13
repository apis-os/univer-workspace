import type { ISlideDrawingTransform, ISlideElementBase, PageElementTypeEnum } from '@univerjs-pro/slides';
import type { Observable } from 'rxjs';
import { Disposable } from '@univerjs/core';
/**
 * Abstract base class for all slide drawing elements.
 *
 * Wraps an {@link ISlideElementBase} data snapshot and exposes:
 * - Observable `data$` for reactive consumers (renderer, selection service, etc.)
 * - Typed `elementType` discriminant so callers can narrow without `instanceof`
 * - Common transform / visibility / lock operations that keep the snapshot in sync
 *
 * Subclasses hold element-type-specific data (shapeData, connectorData, …) and
 * expose typed accessors on top of the generic `getData()`.
 */
export declare abstract class SlideDrawingBase<T extends ISlideElementBase = ISlideElementBase> extends Disposable {
    protected _data: T;
    private readonly _data$;
    private _parentElementId?;
    readonly data$: Observable<T>;
    constructor(data: T);
    /** Discriminant — mirrors the `type` field of the wrapped element. */
    abstract readonly elementType: PageElementTypeEnum;
    getId(): string;
    getData(): T;
    getTransform(): ISlideDrawingTransform;
    /** Merge partial transform fields; emits updated snapshot on `data$`. */
    updateTransform(transform: Partial<ISlideDrawingTransform>): void;
    isVisible(): boolean;
    setVisible(visible: boolean): void;
    /** Selectable when `selectable` is not explicitly false. */
    isSelectable(): boolean;
    /** Emit the current snapshot without any mutation (forces re-render). */
    protected _emit(): void;
}
