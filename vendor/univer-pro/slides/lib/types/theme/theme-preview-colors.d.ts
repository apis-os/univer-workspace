import type { ISlideThemeData } from '../slide.type';
export interface ISlideThemePreviewColors {
    background: string;
    text: string;
    muted: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    accent5: string;
    accent6: string;
    accents: string[];
    defaultStyleColors: string[];
}
export declare function resolveSlideThemePreviewColors(theme?: ISlideThemeData): ISlideThemePreviewColors;
