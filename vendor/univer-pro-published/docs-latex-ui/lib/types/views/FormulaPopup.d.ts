import type { ITextRangeParam } from '@univerjs/core';
import type { IPopup } from '@univerjs/ui';
import type { ReactElement } from 'react';
export interface IFormulaPopupProps {
    initialLatex?: string;
    onClose?: () => void;
    rangeId?: string;
    segmentId?: string;
    selection?: ITextRangeParam;
    unitId: string;
}
export declare function FormulaPopup(props: {
    popup?: IPopup<IFormulaPopupProps>;
}): ReactElement;
