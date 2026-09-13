import type { IDocumentData } from '@univerjs/core';
interface IResolveBoardShapeThemeTextColorOptions {
    defineInheritedValue?: <T extends object>(target: T, key: PropertyKey, value: unknown) => void;
}
export declare function hasBoardShapeThemeTextExplicitColor(shapeText: unknown): boolean;
export declare function cloneBoardShapeThemeTextDocumentWithColor(doc: IDocumentData, textColor: string): IDocumentData;
export declare function resolveBoardShapeThemeTextColor<T>(shapeText: T, textColor: string, options?: IResolveBoardShapeThemeTextColorOptions): T;
export {};
