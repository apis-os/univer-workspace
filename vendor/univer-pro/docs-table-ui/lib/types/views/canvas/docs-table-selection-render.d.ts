import type { IDocsTableSelection } from '@univerjs-pro/docs-table';
export interface IDocsTableSelectionRenderOptions {
    suppressOverlay?: boolean;
}
export declare function shouldDrawDocsTableSelection(selection: IDocsTableSelection, options?: IDocsTableSelectionRenderOptions): boolean;
