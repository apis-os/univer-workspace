import type { ReactNode } from 'react';
export declare function GridContextDropdownMenu(props: {
    anchor?: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    mode?: 'cell' | 'range';
    recordId?: string;
    recordIds?: string[];
    onInsertAbove?: (count: number) => void;
    onInsertBelow?: (count: number) => void;
    onOpenRecord?: (recordId: string) => void;
    recordActions?: Array<{
        id: string;
        label: string;
    }>;
    onRecordAction?: (actionId: string, recordId: string) => void;
    onAddSubRecord?: (recordId: string) => void;
    canAddSubRecord?: boolean;
    disabled?: boolean;
    onClearContent?: () => void;
    onDeleteRecords?: (recordIds: string[]) => void;
    onClose?: () => void;
}): import("react").JSX.Element;
export declare function GridContextInsertDropdownItem(props: {
    disabled?: boolean;
    icon: ReactNode;
    positionLabel: string;
    onAction?: (count: number) => void;
}): import("react").JSX.Element;
