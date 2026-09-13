import type { IDocsTableResizeDragPreview } from './docs-table-resize-drag';
import type { IDocsTableTrigger, IDocsTableTriggerModelInput, IDocsTableTriggerRect } from './docs-table-trigger-model';
export declare function getDocsTableResizeGuideRect(input: Pick<IDocsTableTriggerModelInput, 'columnIndices' | 'columnWidths' | 'rowHeights' | 'rowIndices' | 'tableRect' | 'viewport'>, trigger: IDocsTableTrigger, preview: IDocsTableResizeDragPreview | null): IDocsTableTriggerRect | null;
