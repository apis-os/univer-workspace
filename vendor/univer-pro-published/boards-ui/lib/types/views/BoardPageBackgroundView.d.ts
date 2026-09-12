import type { BoardModel, IBoardImageBackground } from '@univerjs-pro/boards';
import type { CSSProperties } from 'react';
export interface IBoardPageBackgroundViewProps {
    boardModel?: BoardModel;
    pageId?: string;
}
export declare function createBoardPageBackgroundImageStyle(background: IBoardImageBackground): CSSProperties;
export declare const BoardPageBackgroundView: import("react").MemoExoticComponent<({ boardModel, pageId, }: IBoardPageBackgroundViewProps) => import("react").JSX.Element>;
