import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
import type { Observable } from 'rxjs';
import { Disposable, ThemeService } from '@univerjs/core';
export interface ISheetsHistoryDiffStyle {
    readonly fill: string;
    readonly stroke: string;
}
export type SheetsHistoryDiffPalette = Readonly<Record<HistoryChangeKind, ISheetsHistoryDiffStyle>>;
export declare class SheetsHistoryDiffColorService extends Disposable {
    private readonly _themeService;
    private readonly _palette$;
    readonly palette$: Observable<SheetsHistoryDiffPalette>;
    constructor(_themeService: ThemeService);
    private _createPalette;
    private _createStyle;
}
