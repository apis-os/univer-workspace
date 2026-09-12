import type { IDocumentData, LocaleService } from '@univerjs/core';
import type { IObjectFullState, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
export interface ISlidePlaceholderRenderText {
    value: string;
    textKey?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    documentData?: IDocumentData;
}
export interface ISlidePlaceholderRenderIcon {
    key: string;
    label?: string;
    labelKey?: string;
    iconUrl?: string;
    enabled?: boolean;
}
export interface ISlidePlaceholderRenderProps extends IObjectFullState {
    text?: ISlidePlaceholderRenderText;
    icons?: ISlidePlaceholderRenderIcon[];
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    textColor?: string;
    iconBoxBackgroundColor?: string;
    iconBoxStrokeColor?: string;
    iconColor?: string;
    localeService?: LocaleService;
    /** True when the user has explicitly written text to this placeholder (not just inherited). */
    hasUserContent?: boolean;
    hasExplicitStyle?: boolean;
    hasExplicitFill?: boolean;
    hasExplicitStroke?: boolean;
}
/**
 * Base placeholder render object.
 *
 * - Draws dashed outline by default.
 * - Exposes text and icon payload for subclasses.
 */
export declare class SlidePlaceholderBaseObject extends Rect {
    protected readonly _placeholderProps: ISlidePlaceholderRenderProps;
    protected _isEditing: boolean;
    constructor(key: string, props: ISlidePlaceholderRenderProps);
    setEditing(isEditing: boolean): void;
    protected _drawOutline(ctx: UniverRenderingContext, w: number, h: number): void;
    protected _drawCenteredText(ctx: UniverRenderingContext, text: ISlidePlaceholderRenderText, options?: {
        topOffset?: number;
        color?: string;
        maxWidthPadding?: number;
        fontSize?: number;
        useDocumentModel?: boolean;
    }): void;
    private _applyReadableTextFlip;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    getInverseCoord(coord: Vector2): Vector2;
    isHit(coord: Vector2): boolean;
    _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
}
