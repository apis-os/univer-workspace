import type { PdfDisplayListId, PdfObjectId, PdfPageId, PdfTextStoryId } from '../types';
import type { IPdfUnitData } from './types';
export type PdfAppendIdKind = 'page' | 'block' | 'object' | 'displayList' | 'textStory';
export interface IPdfAppendInstancePlan {
    pageIdMap: Record<PdfPageId, PdfPageId>;
    blockIdMap: Record<string, string>;
    objectIdMap: Record<PdfObjectId, PdfObjectId>;
    displayListIdMap: Record<PdfDisplayListId, PdfDisplayListId>;
    textStoryIdMap: Record<PdfTextStoryId, PdfTextStoryId>;
}
export type PdfAppendIdFactory = (kind: PdfAppendIdKind, sourceId: string) => string;
export declare function createPdfAppendInstancePlan(target: IPdfUnitData, source: IPdfUnitData, createId: PdfAppendIdFactory): IPdfAppendInstancePlan;
export declare function validatePdfAppendInstancePlan(target: IPdfUnitData, source: IPdfUnitData, plan: IPdfAppendInstancePlan): void;
