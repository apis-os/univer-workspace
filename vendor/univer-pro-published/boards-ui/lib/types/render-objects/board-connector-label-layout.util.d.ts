import type { IBoardConnectorLabel } from '@univerjs-pro/boards';
import type { LocaleService } from '@univerjs/core';
import { WrapStrategy } from '@univerjs/core';
export interface IBoardConnectorLabelMeasuredLayout {
    width: number;
    height: number;
    requiredWidth: number;
    requiredHeight: number;
    empty: boolean;
    overflow: boolean;
    wrapStrategy: WrapStrategy;
}
/** Uses the same document engine and padding as rendering; never changes the label or its rich document. */
export declare function measureBoardConnectorLabelLayout(label: IBoardConnectorLabel, localeService: LocaleService): IBoardConnectorLabelMeasuredLayout | null;
