import type { ICommandService, IDisposable } from '@univerjs/core';
import type { BaseClipboardService } from './base-clipboard.service';
import type { BaseEditorService } from './base-editor.service';
import type { IBaseUIStateService } from './base-ui-state.service';
import { Disposable } from '@univerjs/core';
export interface IBaseEmbedRuntimeRegistration {
    unitId: string;
    roots: readonly HTMLElement[];
    clipboardService: Pick<BaseClipboardService, 'copy' | 'copyToClipboardData' | 'paste' | 'pasteFromClipboardData'>;
    commandService: ICommandService;
    editorService: BaseEditorService;
    stateService: IBaseUIStateService;
}
export declare class BaseEmbedRuntimeRegistryService extends Disposable {
    private readonly _registrations;
    register(registration: IBaseEmbedRuntimeRegistration): IDisposable;
    resolve(target: EventTarget | null): IBaseEmbedRuntimeRegistration | undefined;
    dispose(): void;
}
