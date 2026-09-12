import type { ISmartArtData, ISmartArtDataNode, SmartArtOperation } from '@univerjs-pro/engine-shape';
export interface ISmartArtTextPaneProps {
    data: ISmartArtData;
    onOperation: (operation: SmartArtOperation, focusedNodeId?: string) => void;
    selectedNodeId?: string;
    onSelectNode?: (nodeId: string | undefined) => void;
    showToolbar?: boolean;
}
export interface ISmartArtTextPaneRow {
    depth: number;
    node: ISmartArtDataNode;
}
export declare function flattenSmartArtTextPaneRows(data: ISmartArtData): ISmartArtTextPaneRow[];
export declare function isSmartArtTextPaneNodeSupported(data: ISmartArtData, nodeId: string): boolean;
export declare function resolvePreviousSmartArtTextPaneNodeId(rows: readonly ISmartArtTextPaneRow[], nodeId: string): string | undefined;
export declare function SmartArtTextPane(props: ISmartArtTextPaneProps): import("react").JSX.Element;
