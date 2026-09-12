import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { Observable } from 'rxjs';
import type { ISlideEffectStyle, ISlideFillStyle, ISlideThemeData } from '../slide.type';
import { Disposable } from '@univerjs/core';
/**
 * Runtime representation of a presentation theme.
 *
 * Wraps {@link ISlideThemeData} and provides:
 * - Reactive `data$` observable for change-detection
 * - Typed helpers for resolving color tokens, fonts, and fmtScheme style entries
 *
 * ### fmtScheme index convention
 * All `get*Style(index)` methods use **1-based** indices that mirror OOXML
 * (`idx="1"` → subtle, `idx="2"` → moderate, `idx="3"` → intense).
 */
export declare class SlideTheme extends Disposable {
    private readonly _data$;
    readonly data$: Observable<ISlideThemeData>;
    constructor(data?: ISlideThemeData);
    getData(): ISlideThemeData;
    update(patch: Partial<ISlideThemeData>): void;
    /**
     * Resolve a semantic color token (e.g. `'dk1'`, `'acc1'`) to a CSS color string.
     * Falls back to `token` itself if the token is not found in the scheme,
     * so callers can safely pass raw hex values through.
     */
    resolveColor(token: string): string;
    getHeadingFont(): string | undefined;
    getBodyFont(): string | undefined;
    getFillStyle(oneBasedIndex: number): ISlideFillStyle | undefined;
    getLineStyle(oneBasedIndex: number): IShapeLineStyle | undefined;
    getEffectStyle(oneBasedIndex: number): ISlideEffectStyle | undefined;
    getBgFillStyle(oneBasedIndex: number): ISlideFillStyle | undefined;
}
