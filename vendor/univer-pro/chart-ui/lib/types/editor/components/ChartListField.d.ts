import type { Key, ReactNode } from 'react';
export interface IChartListFieldProps<T> {
    addLabel?: ReactNode;
    disabled?: boolean;
    error?: ReactNode;
    getItemKey: (item: T, index: number) => Key;
    items: readonly T[];
    label: ReactNode;
    help?: ReactNode;
    moveDownLabel?: (index: number, item: T) => string;
    moveUpLabel?: (index: number, item: T) => string;
    onAdd?: () => void;
    onMove?: (fromIndex: number, toIndex: number) => void;
    onRemove: (index: number) => void;
    removeLabel: (index: number, item: T) => string;
    renderItem: (item: T, index: number) => ReactNode;
}
export declare function ChartListField<T>(props: IChartListFieldProps<T>): import("react").JSX.Element;
