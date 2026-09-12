import { RichTextBuilder } from '@univerjs/core';
/**
 * Options for an inline LaTeX formula embedded in a rich-text value.
 *
 * @example
 * ```ts
 * const text = univerAPI.newRichText()
 *   .text('Formula: ')
 *   .latex('E = mc^2', { rangeId: 'agent.energy-formula' });
 * ```
 */
export interface IRichTextLatexOptions {
    /** Stable custom-range id. Agents may omit this unless they need to identify the formula later. */
    rangeId?: string;
}
/**
 * LaTeX methods mixed into `RichTextBuilder` by importing `@univerjs-pro/docs-latex/facade`.
 *
 * @example
 * ```ts
 * const text = univerAPI.newRichText()
 *   .text('Energy: ')
 *   .latex('E = mc^2');
 * ```
 */
export interface IRichTextLatexMixin {
    /**
     * Appends one self-contained inline LaTeX formula.
     *
     * The source remains in the document data stream so embedded editors such as Board shapes and table cells can render
     * it without a standalone document resource. For static Board rendering, also import
     * `@univerjs-pro/docs-latex-ui/boards` once in the application.
     *
     * @param latex LaTeX source without delimiters.
     * @param options Optional stable formula range id.
     * @returns The current builder for chaining.
     * @example
     * ```ts
     * const text = univerAPI.newRichText()
     *   .text('Energy: ')
     *   .latex('E = mc^2');
     * ```
     */
    latex(latex: string, options?: IRichTextLatexOptions): RichTextBuilder;
}
declare module '@univerjs/core' {
    interface RichTextBuilder extends IRichTextLatexMixin {
    }
}
