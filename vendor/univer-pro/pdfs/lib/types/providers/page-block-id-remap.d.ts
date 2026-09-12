import type { PdfPageId } from '../types';
import type { IPdfPageBlock } from './page-block-provider';
export declare function remapPdfPageBlockIds(block: IPdfPageBlock, pageIdMap: Readonly<Record<PdfPageId, PdfPageId>>): IPdfPageBlock;
