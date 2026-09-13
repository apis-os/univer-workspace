import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { BoardShapeType, IBoardFillStyle, IBoardThemeData } from './board.type';
export declare const BOARD_FOLLOW_UNIVER_THEME_ID = "follow-univer";
export type BoardShapeThemeStyleSlot = 'primary' | 'decision' | 'data' | 'accent' | 'warning' | 'danger' | 'neutral' | 'purple';
export type BoardSemanticThemeStyleSlot = 'header' | 'strong';
export interface IBoardResolvedShapeThemeStyle {
    fill: IBoardFillStyle;
    stroke: IShapeLineStyle;
    textColor: string;
    slot: BoardShapeThemeStyleSlot | BoardSemanticThemeStyleSlot;
}
type BoardThemeColorResolver = (token: string) => string | undefined;
export declare function createBoardThemePreset(themeId: string | undefined, getColorFromTheme?: BoardThemeColorResolver | null): IBoardThemeData | undefined;
export declare function createBoardFollowUniverTheme(getColorFromTheme?: BoardThemeColorResolver | null): IBoardThemeData;
export declare const BOARD_THEME_PRESETS: IBoardThemeData[];
export interface IBoardThemePreviewColors {
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
export declare function getBoardThemePreset(themeId: string): IBoardThemeData | undefined;
export declare function isBoardFollowUniverTheme(themeId: string | undefined): boolean;
export declare function resolveBoardShapeThemeSlot(shapeType: BoardShapeType | string | undefined): BoardShapeThemeStyleSlot;
export declare function resolveBoardShapeThemeStyle(shapeType: BoardShapeType | string | undefined, themeData?: IBoardThemeData): IBoardResolvedShapeThemeStyle;
export declare function resolveBoardSemanticThemeStyle(themeData: IBoardThemeData | undefined, slot: BoardSemanticThemeStyleSlot): IBoardResolvedShapeThemeStyle;
export declare function resolveBoardThemePreviewColors(theme: IBoardThemeData): IBoardThemePreviewColors;
export {};
