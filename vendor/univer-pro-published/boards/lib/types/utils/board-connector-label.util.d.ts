import type { IDocumentData } from '@univerjs/core';
import type { IBoardConnectorData, IBoardConnectorLabel, IBoardConnectorLabelLayout, IBoardPageElement } from '../board.type';
export declare function isValidBoardConnectorLabelLayout(value: unknown): value is IBoardConnectorLabelLayout;
/** Shared label constraints for Facade, commands, and imported resources. Accepts untrusted JSON without throwing. */
export declare function isValidBoardConnectorLabel(value: unknown): value is IBoardConnectorLabel;
export declare function getBoardConnectorLabelDocumentData(label: IBoardConnectorLabel | undefined): IDocumentData | undefined;
export declare function getBoardConnectorLabelText(label: IBoardConnectorLabel | undefined): string;
/** Converts legacy label fields at snapshot/import boundaries without changing the source. */
export declare function normalizeBoardConnectorLabelContent(label: IBoardConnectorLabel, legacyDefault?: boolean): IBoardConnectorLabel;
export declare function normalizeBoardConnectorElementContent(element: IBoardPageElement): IBoardPageElement;
/** Label ids are unique within a connector, including empty editable labels. */
export declare function isValidBoardConnectorLabels(value: unknown): value is IBoardConnectorLabel[];
/** Reads the authoritative labels after snapshot or resource normalization. */
export declare function getBoardConnectorLabels(connectorData: Pick<IBoardConnectorData, 'labels'>): readonly IBoardConnectorLabel[];
/** Returns one authoritative label array, removing any legacy primary-label mirror. */
export declare function setBoardConnectorLabels(connectorData: IBoardConnectorData, labels: readonly IBoardConnectorLabel[]): IBoardConnectorData;
/** Replaces one connector label by id without changing the order of sibling labels. */
export declare function updateBoardConnectorLabel(connectorData: IBoardConnectorData, labelId: string, update: (label: IBoardConnectorLabel) => IBoardConnectorLabel): IBoardConnectorData | null;
