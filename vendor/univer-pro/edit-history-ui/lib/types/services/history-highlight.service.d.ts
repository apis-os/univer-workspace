import type { HistoryChangeKind } from '@univerjs-pro/edit-history';
import { Disposable, ThemeService } from '@univerjs/core';
export interface IHistoryHighlightStyle {
    readonly fill: string;
    readonly stroke: string;
}
export declare class HistoryHighlightService extends Disposable {
    private readonly _themeService;
    private _styles;
    constructor(_themeService: ThemeService);
    getStyle(kind: HistoryChangeKind): IHistoryHighlightStyle;
    private _refreshStyles;
    private _createStyle;
}
