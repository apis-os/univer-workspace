import type { FBase } from '@univerjs-pro/bases/facade';
import type { FBoard } from '@univerjs-pro/boards/facade';
import type { FPresentation } from '@univerjs-pro/slides/facade';
import type { UniverInstanceType } from '@univerjs/core';
import type { FDocument } from '@univerjs/docs/facade';
import type { FWorkbook } from '@univerjs/sheets/facade';
import type { FUnitFacade } from './f-univer';
declare module './f-univer' {
    interface IUnitFacadeMap {
        [UniverInstanceType.UNIVER_DOC]: FDocument;
        [UniverInstanceType.UNIVER_SHEET]: FWorkbook;
        [UniverInstanceType.UNIVER_SLIDE]: FPresentation;
        [UniverInstanceType.UNIVER_BASE]: FBase;
        [UniverInstanceType.UNIVER_BOARD]: FBoard;
    }
}
export declare namespace UniverFacadeTypes {
    type FDocument = FUnitFacade<UniverInstanceType.UNIVER_DOC>;
    type FWorkbook = FUnitFacade<UniverInstanceType.UNIVER_SHEET>;
    type FPresentation = FUnitFacade<UniverInstanceType.UNIVER_SLIDE>;
    type FBase = FUnitFacade<UniverInstanceType.UNIVER_BASE>;
    type FBoard = FUnitFacade<UniverInstanceType.UNIVER_BOARD>;
    type ByUnitType<TUnitType extends UniverInstanceType> = FUnitFacade<TUnitType>;
}
