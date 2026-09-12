import type { IContextService } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare class EmbedSheetEditorShortcutController extends Disposable {
    constructor(shortcutService: IShortcutService);
}
export declare function isEmbedSheetEditorShortcutTarget(event: KeyboardEvent): boolean;
export declare function isEmbedSheetEditorInteractionActive(contextService: IContextService): boolean;
