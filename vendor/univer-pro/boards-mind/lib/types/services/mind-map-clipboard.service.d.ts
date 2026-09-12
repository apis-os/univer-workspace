import type { IBoardPageElement } from '@univerjs-pro/boards';
import { Disposable } from '@univerjs/core';
export interface IMindMapClipboardPayload {
    rootNodeId: string;
    elements: IBoardPageElement[];
}
export interface IMindMapClipboardService {
    setPayload(payload: IMindMapClipboardPayload | null): void;
    getPayload(): IMindMapClipboardPayload | null;
}
export declare const IMindMapClipboardService: import("@wendellhu/redi").IdentifierDecorator<IMindMapClipboardService>;
export declare class MindMapClipboardService extends Disposable implements IMindMapClipboardService {
    private _payload;
    setPayload(payload: IMindMapClipboardPayload | null): void;
    getPayload(): IMindMapClipboardPayload | null;
    dispose(): void;
}
