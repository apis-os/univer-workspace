import type { IBoardPageElement } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
export declare function isBoardStructuralContainer(element: IBoardPageElement | null | undefined): boolean;
export declare function isBoardInteractiveContainer(element: IBoardPageElement | null | undefined): boolean;
export declare function isBoardStructuredDiagramElement(element: IBoardPageElement | null | undefined): boolean;
/**
 * Promotes a complete structured-diagram selection to its structural container.
 * Generated connectors do not gate completeness because marquee selection can omit them.
 */
export declare function resolveBoardStructuredSelectionRootIds(elementData: Readonly<Record<string, IBoardPageElement | IBoardElementData>>, elementIds: readonly string[]): string[];
