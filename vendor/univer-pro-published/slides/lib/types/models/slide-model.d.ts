import type { Observable } from 'rxjs';
import type { ISlideData, ISlideThemeData } from '../slide.type';
import { UnitModel, UniverInstanceType } from '@univerjs/core';
import { SlideTheme } from '../theme/slide-theme';
import { SlideTimingSystem } from '../timing/slide-timing-system';
import { SlidePageManager } from './slide-page-manager';
/**
 * Runtime model for a presentation document (the "unit" — analogous to Workbook).
 *
 * Owns three sub-systems:
 * - {@link SlidePageManager} — ordered slide pages, CRUD, active-slide tracking
 * - {@link SlideTheme} — color/font/fmtScheme resolution
 * - {@link SlideTimingSystem} — animation sequence and transition management
 *
 * All three sub-systems are disposed together with this model.
 */
export declare class SlideModel extends UnitModel<ISlideData, UniverInstanceType.UNIVER_SLIDE> {
    readonly type = UniverInstanceType.UNIVER_SLIDE;
    private _snapshot;
    private readonly _name$;
    readonly name$: Observable<string>;
    private readonly _zoomRatio$;
    readonly zoomRatio$: Observable<number>;
    /** Manages all slide pages: creation, deletion, ordering, active slide. */
    readonly pageManager: SlidePageManager;
    /** Resolves theme tokens (colors, fonts, fmtScheme style entries). */
    readonly theme: SlideTheme;
    /** Manages transition and animation data per slide. */
    readonly timingSystem: SlideTimingSystem;
    constructor(snapshot: Partial<ISlideData>);
    getUnitId(): string;
    setName(name: string): void;
    getZoomRatio(): number;
    setZoomRatio(zoomRatio: number): void;
    getSnapshot(): ISlideData;
    getThemeData(themeId?: string): ISlideThemeData;
    getThemeDataForPage(pageId?: string): ISlideThemeData;
    getRev(): number;
    incrementRev(): void;
    setRev(rev: number): void;
    private _resolveThemeIdForPage;
    private _resolveThemeIdFromPage;
}
