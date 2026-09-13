import type { IPdfTableCell, IPdfTableObject, PdfEmu, PdfId, PdfPoint, PdfRect } from '../types';
/** Input for creating a complete unmerged table grid in row-major order. */
export interface IPdfTableGridCreateInput {
    width: PdfEmu;
    height: PdfEmu;
    rowIds: PdfId[];
    columnIds: PdfId[];
    cells: Array<Pick<IPdfTableCell, 'id' | 'contentStoryId'>>;
}
/** Structural table collections derived from a validated grid seed. */
export type IPdfTableGrid = Pick<IPdfTableObject, 'rows' | 'columns' | 'cells'>;
/**
 * Create a complete unmerged table grid with exact EMU extents.
 *
 * The final row and column receive any integer remainder so repeated JSON
 * round-trips never accumulate geometry drift.
 */
export declare function createPdfTableGrid(input: IPdfTableGridCreateInput): IPdfTableGrid;
/** Resolve one table cell's untransformed page-space rectangle in EMU. */
export declare function getPdfTableCellRect(table: IPdfTableObject, cell: IPdfTableCell): PdfRect;
/** Find the visible anchor cell owning a point, using right/bottom half-open boundaries. */
export declare function getPdfTableCellAtPoint(table: IPdfTableObject, point: PdfPoint): IPdfTableCell | undefined;
