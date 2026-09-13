import type { IDocsCalloutConfig } from '@univerjs-pro/docs-callout';
import type { IScale } from '@univerjs/core';
import type { IDocumentSkeletonGlyph, UniverRenderingContext } from '@univerjs/engine-render';
import type { ICalloutRect } from '../views/callout-rect';
import { ComponentExtension, DOCS_EXTENSION_TYPE } from '@univerjs/engine-render';
export interface ICalloutBackgroundRenderFragment {
    config: IDocsCalloutConfig;
    rect: ICalloutRect;
}
interface IDocsCalloutBackgroundExtensionState {
    getFragments: () => ICalloutBackgroundRenderFragment[];
}
export declare class DocsCalloutBackgroundExtension extends ComponentExtension<IDocumentSkeletonGlyph, DOCS_EXTENSION_TYPE, unknown> {
    private readonly _state;
    uKey: string;
    type: DOCS_EXTENSION_TYPE;
    private _fragments;
    private readonly _fragmentsByLine;
    private readonly _paintedRects;
    constructor(_state: IDocsCalloutBackgroundExtensionState);
    getFragments(): readonly ICalloutBackgroundRenderFragment[];
    clearCache(): void;
    draw(ctx: UniverRenderingContext, _parentScale: IScale, glyph: IDocumentSkeletonGlyph): void;
}
export {};
