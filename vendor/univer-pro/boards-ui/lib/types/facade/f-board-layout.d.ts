import type { IBoardLayoutAnalysisResult } from '@univerjs-pro/boards';
import type { IBoardScreenshotOptions, IBoardScreenshotResult } from '@univerjs-pro/boards-ui';
type AnalyzeBoardRenderedLayoutResult = IBoardLayoutAnalysisResult | false;
type CaptureBoardScreenshotOptions = IBoardScreenshotOptions;
type CaptureBoardScreenshotResult = IBoardScreenshotResult | false;
declare module '@univerjs-pro/boards/facade' {
    interface FBoard {
        /**
         * Detects layout conflicts using connector paths resolved by the current Board renderer.
         * This browser-only API requires the Boards UI plugin and Facade extension to be registered.
         * Use `analyzeModelLayout()` when no renderer is available.
         * Label overflow and unresolved measurements include stable `labelIds`; unresolved does not mean visually clean.
         * Returned content bounds include the current measured, rotated connector labels; unresolved bounds are provisional.
         *
         * @param focusPadding Padding added to each issue's suggested screenshot bounds.
         * @returns Structured rendered layout issues, or `false` when no Board scene is available.
         * @example
         * ```ts
         * const board = univerAPI.getActiveBoard();
         * if (!board) throw new Error('No active board');
         * const analysis = board.analyzeRenderedLayout(48);
         * if (!analysis) throw new Error('The active Board is not rendered');
         * console.log(analysis.issues.map((issue) => ({
         *     rule: issue.rule,
         *     severity: issue.severity,
         *     focusBounds: issue.focusBounds,
         * })));
         * ```
         */
        analyzeRenderedLayout(focusPadding?: number): AnalyzeBoardRenderedLayoutResult;
        /**
         * Captures resolved Board world bounds using the current Board renderer.
         * This browser-only API requires the Boards UI plugin and Facade extension to be registered.
         * Resolve selectors with `resolveCaptureBounds()` before calling this method.
         *
         * @param options Resolved world bounds and an optional world-to-CSS-pixel scale.
         * @returns PNG evidence from the current renderer, or `false` when capture cannot run.
         * @example
         * ```ts
         * const board = univerAPI.getActiveBoard();
         * if (!board) throw new Error('No active board');
         * const target = board.resolveCaptureBounds({ padding: 48 });
         * if (!target) throw new Error('Cannot resolve Board capture bounds');
         * if (!target.ok) throw new Error(`Cannot capture Board: ${target.code}`);
         * const screenshot = await board.getScreenshot({ bounds: target.bounds, scale: 2 });
         * if (!screenshot) throw new Error('Cannot capture the active Board renderer');
         * console.log(screenshot.dataUrl, screenshot.width, screenshot.height);
         * ```
         */
        getScreenshot(options: CaptureBoardScreenshotOptions): Promise<CaptureBoardScreenshotResult>;
    }
}
export {};
