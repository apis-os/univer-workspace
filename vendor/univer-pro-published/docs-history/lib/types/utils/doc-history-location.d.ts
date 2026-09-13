import type { IDocumentBody } from '@univerjs/core';
import type { IDocHistoryLocation } from '../types';
export interface IResolvedDocHistoryLocation {
    startOffset: number;
    endOffset: number;
}
export declare function resolveDocHistoryLocation(location: IDocHistoryLocation, body: IDocumentBody): IResolvedDocHistoryLocation;
