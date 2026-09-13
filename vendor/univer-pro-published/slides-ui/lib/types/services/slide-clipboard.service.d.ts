import type { ISlideDrawing } from '@univerjs-pro/slides';
import { Disposable, IImageIoService } from '@univerjs/core';
import { IClipboardInterfaceService } from '@univerjs/ui';
export declare const SLIDE_CLIPBOARD_MIME_TYPE = "application/vnd.univer.slide+json";
export interface ISlideClipboardSnapshot {
    unitId: string;
    subUnitId: string;
    topLevelDrawingIds: string[];
    drawings: ISlideDrawing[];
    html?: string;
    plainText?: string;
    resources?: Record<string, unknown>;
    pasteCount: number;
}
export declare class SlideClipboardService extends Disposable {
    private readonly _imageIoService;
    private readonly _clipboardInterfaceService;
    private _snapshot;
    private _lastPlainText;
    private _pendingNativeImagePaste;
    private _pendingSystemClipboardWrites;
    constructor(_imageIoService: IImageIoService, _clipboardInterfaceService: IClipboardInterfaceService);
    set(snapshot: Omit<ISlideClipboardSnapshot, 'pasteCount'>): void;
    peek(): ISlideClipboardSnapshot | null;
    copyToClipboardData(clipboardData: DataTransfer | null): boolean;
    copyToSystemClipboard(): Promise<boolean>;
    get hasPendingSystemClipboardWrite(): boolean;
    private _serializeClipboard;
    readFromClipboardData(clipboardData: DataTransfer | null): boolean;
    copyImageToSystemClipboard(): Promise<boolean>;
    markPasted(): number;
    clear(): void;
}
