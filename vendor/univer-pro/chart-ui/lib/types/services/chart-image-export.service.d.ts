import type { ChartImageExportFormat } from '@univerjs-pro/engine-chart';
import type { IDisposable } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface IChartImageExportOptions {
    format?: ChartImageExportFormat;
}
export interface IChartImageExportTarget {
    /** Stable host unit identifier when the renderer requires host context. */
    readonly unitId?: string;
    /** Stable host sub-unit identifier when the renderer requires host context. */
    readonly subUnitId?: string;
    /** Returns the stable Chart identifier. */
    getId(): string;
}
/** UI-owned image-export implementation for one Chart host. */
export interface IChartImageExportProvider {
    /** Returns whether this provider owns the supplied Chart facade. */
    supports(chart: IChartImageExportTarget): boolean;
    /** Exports the supplied Chart through the host's existing UI renderer. */
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
}
/** Routes Chart image export to the UI renderer owned by the Chart host. */
export declare class ChartImageExportService extends Disposable {
    private readonly _providers;
    /** Registers one host UI image-export provider. */
    register(provider: IChartImageExportProvider): IDisposable;
    /** Exports a Chart through the first matching host UI provider. */
    exportImage(chart: IChartImageExportTarget, options?: IChartImageExportOptions): Promise<string | undefined>;
    dispose(): void;
}
