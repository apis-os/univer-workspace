import type { IBoardPageElement } from '../board.type';
export declare function getBoardElementDisplayName(element: IBoardPageElement): string;
export declare function ensureBoardElementName(element: IBoardPageElement, existingElements: Iterable<IBoardPageElement>): IBoardPageElement;
export declare function ensureBoardElementsName(elements: readonly IBoardPageElement[], existingElements: Iterable<IBoardPageElement>): IBoardPageElement[];
