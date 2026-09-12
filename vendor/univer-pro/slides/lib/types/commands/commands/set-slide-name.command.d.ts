import type { ICommand } from '@univerjs/core';
export interface ISetSlideNameCommandParams {
    unitId: string;
    name: string;
}
export declare const SetSlideNameCommand: ICommand<ISetSlideNameCommandParams>;
