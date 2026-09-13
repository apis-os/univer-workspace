import type { IBoardTableElement } from '@univerjs-pro/boards';
import type { ISlideTableObjectProps } from '@univerjs-pro/slides-table-ui';
import { SlideTableObject } from '@univerjs-pro/slides-table-ui';
export interface IBoardTableObjectProps extends ISlideTableObjectProps {
    element: IBoardTableElement;
}
export declare class BoardTableObject extends SlideTableObject {
    private _element;
    constructor(key: string, props: IBoardTableObjectProps);
    updateElement(element: IBoardTableElement): void;
    getElement(): IBoardTableElement;
}
