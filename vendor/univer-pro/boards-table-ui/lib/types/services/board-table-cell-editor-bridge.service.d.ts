import type { ISlideTableCellEditorSession } from '@univerjs-pro/slides-table-ui';
import type { IDisposable } from '@univerjs/core';
import { SlideTableCellEditorService } from '@univerjs-pro/slides-table-ui';
export declare class BoardTableCellEditorBridgeService extends SlideTableCellEditorService {
    getEditing(): ISlideTableCellEditorSession | null;
    subscribe(listener: (state: ISlideTableCellEditorSession | null) => void): IDisposable;
}
