export declare const BASE_SELECT_OPTION_DARK_TEXT_COLOR = "#17212b";
export declare const BASE_SELECT_OPTION_LIGHT_TEXT_COLOR = "#ffffff";
interface IBaseSelectOptionColors {
    backgroundColor: string | undefined;
    textColor: string;
    darkModeBackgroundSource: string | undefined;
    darkModeTextSource: string;
    darkModeBackgroundColor: string | undefined;
    darkModeTextColor: string;
}
export declare function resolveBaseSelectOptionColors(seedColor: string | undefined): IBaseSelectOptionColors;
export declare function resolveBaseSelectOptionDisplayColors(seedColor: string | undefined, darkMode: boolean): {
    backgroundColor: string | undefined;
    textColor: string;
};
export declare function createBaseSelectOptionCanvasColors(seedColor: string | undefined): {
    backgroundColor: string | undefined;
    textColor: string;
};
export declare function resolveBaseSelectOptionCanvasColor(color: string, darkMode: boolean): string | undefined;
export declare function resolveBaseSelectOptionTextColor(seedColor: string | undefined): string;
export declare function resolveBaseChipTextColor(backgroundColor: string | undefined, preferredTextColor?: string): string;
export {};
