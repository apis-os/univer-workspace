import type { IChartHostLease, IChartHostRect } from '../../types';
import { Disposable } from '@univerjs/core';
export declare class OffscreenChartHost extends Disposable {
    private readonly _leases;
    acquire(rect: IChartHostRect): IChartHostLease;
    dispose(): void;
}
