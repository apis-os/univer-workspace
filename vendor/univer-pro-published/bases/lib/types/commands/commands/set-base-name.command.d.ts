import type { ICommand } from '@univerjs/core';
export interface ISetBaseNameCommandParams {
    unitId: string;
    name: string;
}
export declare const SetBaseNameCommand: ICommand<ISetBaseNameCommandParams>;
