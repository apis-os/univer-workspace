import type { EmbedDisplayTarget } from '@univerjs-pro/embed';
import type { ICommandService, Workbook } from '@univerjs/core';
import type { IEmbedBlockContribution, IEmbedChildContainerContext, IEmbedChildViewContribution } from '../../types/embed-ui';
export declare function createSheetsEmbedBlockContribution(): IEmbedBlockContribution;
export declare function createSheetsEmbedChildViewContribution(commandService: ICommandService): IEmbedChildViewContribution;
export declare function applySheetDisplayTarget(workbook: Workbook, target: EmbedDisplayTarget | undefined): void;
export declare function shouldShowEmbeddedSheetChrome(context: Pick<IEmbedChildContainerContext, 'renderScope'>): boolean;
export declare function applyEmbeddedSheetChromeInset(canvasRoot: HTMLElement, chrome: {
    formulaBar: boolean;
    sheetBar: boolean;
}): import("@wendellhu/redi").IDisposable;
