import type { Observable } from 'rxjs';
import type { IBoardBackgroundData, IBoardData, IBoardPage, IBoardThemeData } from '../board.type';
import { UnitModel, UniverInstanceType } from '@univerjs/core';
export declare class BoardModel extends UnitModel<IBoardData, UniverInstanceType.UNIVER_BOARD> {
    readonly type = UniverInstanceType.UNIVER_BOARD;
    private readonly _snapshot;
    private readonly _name$;
    private readonly _theme$;
    private readonly _pageBackgroundChanged$;
    readonly name$: Observable<string>;
    readonly theme$: Observable<IBoardThemeData>;
    readonly pageBackgroundChanged$: Observable<{
        pageId: string;
        background?: IBoardBackgroundData;
    }>;
    constructor(snapshot: Partial<IBoardData>);
    getUnitId(): string;
    setName(name: string): void;
    getSnapshot(): IBoardData;
    getRev(): number;
    incrementRev(): void;
    setRev(rev: number): void;
    dispose(): void;
    getActivePageId(): string;
    getActivePage(): IBoardPage;
    getPage(pageId: string): IBoardPage | undefined;
    setPageBackground(pageId: string, background?: IBoardBackgroundData): boolean;
    getThemeData(): IBoardThemeData;
    setThemeData(theme: IBoardThemeData): void;
    private _normalizeSnapshot;
}
