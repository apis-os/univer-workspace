import type { ReactElement, ReactNode } from 'react';
import type { BaseToolbarTooltipRenderer } from './base-toolbar-tooltip-context';
export interface IBaseToolbarState {
    filterCount?: number;
    groupCount?: number;
    viewType?: string;
    groupLabel?: string;
    sortCount?: number;
    rowHeightActive?: boolean;
    conditionalColoringActive?: boolean;
    conditionalColoringCount?: number;
    formulaCalculation?: {
        done: number;
        count: number;
        label?: string;
    } | null;
    canUndo?: boolean;
    canRedo?: boolean;
    searchOpen?: boolean;
    searchQuery?: string;
    searchResultCount?: number;
    searchActiveIndex?: number | null;
}
export interface IBaseToolbarProps {
    disabled?: boolean;
    state: IBaseToolbarState;
    dropdownMenus?: Record<string, IBaseToolbarDropdownMenu | undefined>;
    onAddRecord: (anchor?: HTMLElement) => void;
    onCustomizeField: (anchor: HTMLElement) => void;
    onCustomizeKanban?: (anchor: HTMLElement) => void;
    onCustomizeGallery?: (anchor: HTMLElement) => void;
    onCalendarEventSettings?: (anchor: HTMLElement) => void;
    onCalendarViewSettings?: (anchor: HTMLElement) => void;
    onViewSettings: (anchor: HTMLElement) => void;
    onFilter: (anchor: HTMLElement) => void;
    onGroup: (anchor: HTMLElement) => void;
    onSort: (anchor: HTMLElement) => void;
    onRowHeight: (anchor: HTMLElement) => void;
    onConditionalColoring: (anchor: HTMLElement) => void;
    onUndo: () => void;
    onRedo: () => void;
    onStopFormulaCalculation?: () => void;
    onClearFormulaCalculationProgress?: () => void;
    onOpenSearch?: () => void;
    onSearchQueryChange?: (query: string) => void;
    onSearchPrevious?: () => void;
    onSearchNext?: () => void;
    onCloseSearch?: () => void;
    collaborationStatus?: ReactElement | null;
    beforeExtraActions?: ReactNode;
    extraActions?: ReactNode;
    iconOnly?: boolean;
    className?: string;
    renderTooltip?: BaseToolbarTooltipRenderer;
}
export interface IBaseToolbarDropdownMenu {
    open: boolean;
    overlay: ReactNode;
    onOpenChange: (open: boolean) => void;
}
export declare function BaseToolbar(props: IBaseToolbarProps): import("react").JSX.Element;
