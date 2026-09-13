import type { IDisposable, UniverInstanceType } from '@univerjs/core';
export interface IPrintPageBreakRange {
    bottom: number;
    sourceId?: string;
    top: number;
}
export interface IPrintPreparationContext {
    unitId: string;
    unitType: UniverInstanceType;
    dpr: number;
    contentHeight?: number;
    contentHeightAdjustment?: number;
    pageBreakRanges?: IPrintPageBreakRange[];
}
export interface IPrintPreparationContribution {
    prepare(context: IPrintPreparationContext): Promise<void>;
}
export interface IPrintPreparationService {
    registerContribution(contribution: IPrintPreparationContribution): IDisposable;
    prepare(context: IPrintPreparationContext): Promise<void>;
}
export declare const IPrintPreparationService: import("@wendellhu/redi").IdentifierDecorator<IPrintPreparationService>;
export declare class PrintPreparationService implements IPrintPreparationService {
    private readonly _contributions;
    registerContribution(contribution: IPrintPreparationContribution): IDisposable;
    prepare(context: IPrintPreparationContext): Promise<void>;
}
