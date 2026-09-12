import type { Injector, Workbook } from '@univerjs/core';
import type { IChartCreateSpec, IChartDiagnostic, IChartLayoutDescription, IChartLayoutPatch } from './types';
import { ISheetDrawingService } from '@univerjs/sheets-drawing';
/** Identifies a Sheet chart drawing and the services used to resolve its layout. */
export interface ISheetChartLayoutContext {
    unitId: string;
    subUnitId: string;
    chartId: string;
    injector: Injector;
}
/** Resolves the workbook that owns a Sheet chart. */
export declare function getWorkbook(injector: Injector, unitId: string): Workbook | null;
/** Builds the drawing update produced by a chart layout patch. */
export declare function buildLayoutDrawingPatch(context: ISheetChartLayoutContext, layout: IChartLayoutPatch, diagnostics: IChartDiagnostic[]): NonNullable<ReturnType<ISheetDrawingService['getDrawingByParam']>> | null;
/** Resolves the initial drawing position from an absolute position or cell anchor. */
export declare function resolveInitialChartPosition(context: Pick<ISheetChartLayoutContext, 'unitId' | 'subUnitId' | 'injector'>, layout: Pick<IChartCreateSpec, 'anchor' | 'position'>, diagnostics: IChartDiagnostic[]): {
    x: number;
    y: number;
} | undefined;
/** Describes the current position, size, and cell anchor of a Sheet chart. */
export declare function describeLayout(context: ISheetChartLayoutContext): IChartLayoutDescription | undefined;
