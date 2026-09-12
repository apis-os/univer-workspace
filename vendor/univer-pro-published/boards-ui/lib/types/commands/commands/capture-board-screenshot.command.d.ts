import type { ICommand } from '@univerjs/core';
import type { IBoardScreenshotOptions, IBoardScreenshotResult } from '../../services/board-screenshot.service';
export interface ICaptureBoardScreenshotCommandParams extends IBoardScreenshotOptions {
    subUnitId: string;
    unitId: string;
}
export declare const CaptureBoardScreenshotCommand: ICommand<ICaptureBoardScreenshotCommandParams, IBoardScreenshotResult | false>;
