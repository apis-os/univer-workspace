import type { ReactNode } from 'react';
export interface IChartEditPanelTabItem<T extends string | number> {
    label: ReactNode;
    panelId: string;
    value: T;
}
export interface IChartEditPanelTabsProps<T extends string | number> {
    ariaLabel: string;
    className?: string;
    items: ReadonlyArray<IChartEditPanelTabItem<T>>;
    onChange: (value: T) => void;
    value: T;
    variant?: 'segmented' | 'underline';
}
export declare function ChartEditPanelTabs<T extends string | number>(props: IChartEditPanelTabsProps<T>): import("react").JSX.Element;
export interface IChartEditPanelProps {
    children: ReactNode;
    className?: string;
    id: string;
    label: ReactNode;
}
export declare function ChartEditPanel(props: IChartEditPanelProps): import("react").JSX.Element;
export interface IChartEditBlockTitleProps {
    title: string;
}
export declare function ChartEditBlockTitle(props: IChartEditBlockTitleProps): import("react").JSX.Element;
export interface IChartSectionAccordionProps {
    children: ReactNode;
    className?: string;
    onChange: (value: string | null) => void;
    value: string | null;
}
export declare function ChartSectionAccordion(props: IChartSectionAccordionProps): import("react").JSX.Element;
export interface IChartSectionAccordionItemProps {
    children: ReactNode;
    className?: string;
    id: string;
}
export declare function ChartSectionAccordionItem(props: IChartSectionAccordionItemProps): import("react").JSX.Element;
export interface IChartSectionAccordionTriggerProps {
    children: ReactNode;
    className?: string;
}
export declare function ChartSectionAccordionTrigger(props: IChartSectionAccordionTriggerProps): import("react").JSX.Element;
export interface IChartSectionAccordionContentProps {
    children: ReactNode;
    className?: string;
}
export declare function ChartSectionAccordionContent(props: IChartSectionAccordionContentProps): import("react").JSX.Element;
