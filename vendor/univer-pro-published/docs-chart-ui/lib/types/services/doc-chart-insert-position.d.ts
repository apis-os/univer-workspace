import type { DocumentDataModel, IDocumentBody, ITextRangeParam } from '@univerjs/core';
export interface IDocChartInsertPosition {
    unitId: string;
    index: number;
    segmentId: string;
    breakOffsets: number[];
}
export interface IDocChartStandaloneSplit {
    index: number;
    breakOffsets: number[];
}
type BodyRangeFields = Pick<IDocumentBody, 'blockRanges' | 'customBlocks' | 'dataStream' | 'tables'>;
export declare function resolveDocChartInsertPosition(document: DocumentDataModel, range: ITextRangeParam | null | undefined): IDocChartInsertPosition | null;
export declare function normalizeDocChartInsertOffset(body: Pick<IDocumentBody, 'dataStream'>, startOffset: number): number;
export declare function canInsertDocChartAtOffset(body: Pick<BodyRangeFields, 'blockRanges' | 'customBlocks' | 'tables'>, offset: number): boolean;
export declare function isDocChartStandaloneInsertOffset(body: Pick<IDocumentBody, 'dataStream'>, offset: number): boolean;
export declare function getDocChartStandaloneSplit(body: Pick<IDocumentBody, 'dataStream'>, offset: number): IDocChartStandaloneSplit | null;
export {};
