import type { ICommand } from '@univerjs/core';
interface IFloatingTextStyleCommandParams {
    value: string | number;
}
export declare const DocsTableFloatingTextStyleCommand: ICommand<IFloatingTextStyleCommandParams>;
export declare const DocsTableFloatingBoldCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingItalicCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingUnderlineCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingStrikeThroughCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingFontFamilyCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingFontSizeCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingAlignCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingTextColorCommand: ICommand<any, boolean>;
export declare const DocsTableFloatingTextBackgroundColorCommand: ICommand<any, boolean>;
export {};
