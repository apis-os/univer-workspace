import type { ICommand, IFieldSnapshot } from '@univerjs/core';
export interface IDuplicateBaseFieldCommandParams {
    unitId: string;
    tableId: string;
    sourceFieldId: string;
    field: IFieldSnapshot;
    index?: number;
    viewIndexes?: Record<string, number>;
}
export declare const DuplicateBaseFieldCommand: ICommand<IDuplicateBaseFieldCommandParams>;
