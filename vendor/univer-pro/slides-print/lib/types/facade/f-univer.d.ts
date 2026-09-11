import type { ISlidePrintOptions } from '@univerjs-pro/slides-print';
import { FUniver } from '@univerjs/core/facade';
export interface IFUniverSlidesPrintMixin {
    /**
     * Open the browser print dialog for the active presentation.
     *
     * @param options Optional print options. `range` accepts 1-based page ranges.
     * Overlapping ranges are de-duped and printed in the original slide order.
     * @returns Whether the print operation was started.
     */
    printSlidesAsync(options?: ISlidePrintOptions): Promise<boolean>;
    /** Open the Univer Slides print settings and preview. */
    openSlidesPrintDialog(options?: ISlidePrintOptions): boolean;
}
export declare class FUniverSlidesPrintMixin extends FUniver implements IFUniverSlidesPrintMixin {
    printSlidesAsync(options?: ISlidePrintOptions): Promise<boolean>;
    openSlidesPrintDialog(options?: ISlidePrintOptions): boolean;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSlidesPrintMixin {
    }
}
