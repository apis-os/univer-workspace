import type { IEditorUIDocumentLayout, IEditorUIInsets, IEditorUILayoutMeasurement, IEditorUIRect, IEditorUIScale } from '../types';
export type EditorUIInsetInput = number | Partial<IEditorUIInsets>;
export interface ICreateEditorUIHostLayoutOptions extends Omit<IEditorUIDocumentLayout, 'rect'> {
    rect: IEditorUIRect;
    padding?: EditorUIInsetInput;
    minHeight?: number;
    minWidth?: number;
}
export interface IGetEditorUIHostHeightFromMeasurementOptions {
    hostRect: IEditorUIRect;
    layout: IEditorUIDocumentLayout;
    measurement: IEditorUILayoutMeasurement;
    allowShrink?: boolean;
}
export declare function normalizeEditorUIInsets(padding?: EditorUIInsetInput): IEditorUIInsets;
export declare function createEditorUIHostLayout(options: ICreateEditorUIHostLayoutOptions): IEditorUIDocumentLayout;
export declare function getEditorUIHostHeightFromMeasurement(options: IGetEditorUIHostHeightFromMeasurementOptions): number;
export declare function resolveEditorUILayoutScale(scale?: Partial<IEditorUIScale>): IEditorUIScale;
export declare function resolveEditorUIVisualRect(layout: Pick<IEditorUIDocumentLayout, 'rect' | 'scale'>, _contentHeight?: number): IEditorUIRect;
