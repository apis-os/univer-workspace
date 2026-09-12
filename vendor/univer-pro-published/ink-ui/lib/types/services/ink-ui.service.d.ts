import type { IBeginInkModeParams } from '@univerjs-pro/ink';
import { IInkUIStateService } from './ink-ui-state.service';
export declare class InkUIService {
    private readonly _stateService;
    constructor(_stateService: IInkUIStateService);
    beginInkMode(params: IBeginInkModeParams): boolean;
    cancelInkMode(): void;
}
