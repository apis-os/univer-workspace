import type { IChartElementFloatMenuAdapter, IChartElementFloatMenuAdapterRegistry } from './types';
import { Disposable } from '@univerjs/core';
export declare class ChartElementFloatMenuAdapterRegistry extends Disposable implements IChartElementFloatMenuAdapterRegistry {
    private readonly _adapters;
    register(adapterKey: string, adapter: IChartElementFloatMenuAdapter): {
        dispose: () => void;
    };
    get(adapterKey: string): IChartElementFloatMenuAdapter | undefined;
    dispose(): void;
}
