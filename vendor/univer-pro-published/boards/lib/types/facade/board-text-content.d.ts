import { RichTextValue } from '@univerjs/core';
/**
 * Text accepted by Board facade APIs.
 *
 * Use a string for plain text or the value returned by `univerAPI.newRichText()` for styled document content.
 *
 * @example
 * ```ts
 * const board = univerAPI.getActiveBoard();
 * if (!board) throw new Error('No active board');
 *
 * const content: BoardFacadeTextContent = univerAPI.newRichText()
 *   .text('Owner: ')
 *   .span('Platform', { bold: true });
 * const text = board.insertText({ left: 120, top: 120, text: content });
 * if (!text) throw new Error('Cannot insert owner text');
 * ```
 */
export type BoardFacadeTextContent = string | RichTextValue;
