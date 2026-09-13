import type { IRatexDisplayList } from '../render/ratex-display-list';
import { Disposable } from '@univerjs/core';
export interface IRatexDisplayListResult {
    displayList?: IRatexDisplayList;
    message?: string;
    ok: boolean;
}
export declare class DocsLatexRenderService extends Disposable {
    private _initPromise;
    private readonly _displayListCache;
    private readonly _pendingDisplayLists;
    renderToDisplayList(latex: string, color?: string): Promise<IRatexDisplayListResult>;
    private _renderToDisplayList;
    getCachedDisplayList(latex: string, color?: string): IRatexDisplayList | undefined;
    getCacheKey(latex: string, color?: string): string;
    dispose(): void;
    private _initRatex;
    private _getCacheKey;
}
export declare function injectRatexFonts(doc?: Document | undefined): void;
