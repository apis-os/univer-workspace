import { EmbedModelService } from '@univerjs-pro/embed';
import { Disposable, ICommandService } from '@univerjs/core';
import { IDialogService } from '@univerjs/ui';
export declare class EmbedOwnedDialogCleanupController extends Disposable {
    private readonly _commandService;
    private readonly _embedModelService;
    private readonly _dialogService;
    private _dialogs;
    constructor(_commandService: ICommandService, _embedModelService: EmbedModelService, _dialogService: IDialogService);
    dispose(): void;
}
