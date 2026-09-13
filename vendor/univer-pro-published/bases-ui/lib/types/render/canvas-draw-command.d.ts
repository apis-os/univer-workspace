import type { BaseHitTestResult, FieldId, IBaseRect, RecordId, TableId, ViewId } from '@univerjs/core';
import type { ICanvasColorService } from '@univerjs/engine-render';
import { ImageSourceType } from '@univerjs/core';
export type CanvasDrawCommand = {
    kind: 'save';
} | {
    kind: 'restore';
} | {
    kind: 'clipRect';
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    kind: 'clear';
    color: string;
} | {
    kind: 'rect';
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'roundRect';
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    fill?: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'roundRectLeftEdge';
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    edgeWidth: number;
    fill: string;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'line';
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    stroke: string;
    lineWidth?: number;
    dash?: number[];
    meta?: ICanvasCommandMeta;
} | {
    kind: 'svgPath';
    d: string;
    x: number;
    y: number;
    scale: number;
    stroke: string;
    fill?: string;
    fillRule?: CanvasFillRule;
    lineWidth?: number;
    lineCap?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'triangle';
    x: number;
    y: number;
    size: number;
    direction: 'right' | 'left' | 'down';
    fill: string;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'circle';
    x: number;
    y: number;
    radius: number;
    fill?: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'ratingIcon';
    icon: BaseRatingIcon;
    x: number;
    y: number;
    size: number;
    fill: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'checkboxIcon';
    icon: BaseCheckboxIcon;
    x: number;
    y: number;
    size: number;
    fill: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'image';
    source: string;
    sourceType?: ImageSourceType;
    x: number;
    y: number;
    width: number;
    height: number;
    radius?: number;
    fill?: string;
    stroke?: string;
    lineWidth?: number;
    meta?: ICanvasCommandMeta;
} | {
    kind: 'text';
    text: string;
    x: number;
    y: number;
    color?: string;
    font?: string;
    maxWidth?: number;
    align?: CanvasTextAlign;
    baseline?: CanvasTextBaseline;
    meta?: ICanvasCommandMeta;
};
export type BaseRatingIcon = 'star' | 'heart' | 'thumb' | 'fire' | 'smile' | 'bolt' | 'medal' | 'dot' | 'diamond';
export type BaseCheckboxIcon = 'check' | 'x' | 'star' | 'heart' | 'thumb' | 'flag' | 'dot';
export interface ICanvasCommandMeta {
    role?: string;
    recordId?: string;
    fieldId?: string;
    fieldType?: string;
    viewId?: string;
    groupKey?: string;
    level?: number;
    edge?: 'top' | 'bottom';
    attachmentId?: string;
    attachmentName?: string;
    attachmentIndex?: number;
    optionValue?: string;
    recordLinkLabel?: string;
    recordLinkTruncated?: boolean;
    recordLinkTargetRecordId?: string;
    recordLinkMissing?: boolean;
}
export type BaseCanvasHitTestResult = BaseHitTestResult | {
    type: 'grid-attachment-add' | 'grid-attachment-expand';
    tableId: TableId;
    viewId: ViewId;
    recordId: RecordId;
    fieldId: FieldId;
    cellRect: IBaseRect;
    virtual?: boolean;
} | {
    type: 'grid-attachment-item';
    tableId: TableId;
    viewId: ViewId;
    recordId: RecordId;
    fieldId: FieldId;
    cellRect: IBaseRect;
    attachmentIndex: number;
    attachmentId?: string;
    attachmentPreviewable: boolean;
    virtual?: boolean;
};
export interface IBaseCanvasHitRegion {
    rect: IBaseRect;
    result: BaseCanvasHitTestResult;
}
export interface IBaseCanvasRenderState {
    commands: CanvasDrawCommand[];
    hitRegions: IBaseCanvasHitRegion[];
}
export interface IPaintCanvasCommandOptions {
    canvasColorService?: ICanvasColorService;
    colorResolver?: (color: string) => IPaintCanvasColorResult | string;
    onImageLoad?: () => void;
    imageSourceResolver?: (source: string, sourceType: ImageSourceType) => Promise<string>;
}
interface IPaintCanvasColorResult {
    color: string;
    skipCanvasColorService?: boolean;
}
export interface IBaseCanvas2DContext {
    canvas?: {
        width: number;
        height: number;
    };
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    beginPath(): void;
    closePath(): void;
    rect(x: number, y: number, w: number, h: number): void;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    clip(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    setLineDash?(segments: number[]): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    fill(): void;
    stroke(): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText?(text: string): TextMetrics;
    drawImage?(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    save(): void;
    restore(): void;
}
export declare function removeBaseCanvasImageLoadListener(listener: () => void): void;
export declare function waitForBaseCanvasImages(timeout?: number): Promise<void>;
export declare function paintCanvasCommands(ctx: IBaseCanvas2DContext, commands: CanvasDrawCommand[], options?: IPaintCanvasCommandOptions): void;
export {};
