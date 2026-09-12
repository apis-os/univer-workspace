export declare const BOARD_CHART_FLOATING_TOOLBAR_KEY = "board.chart.floating-toolbar";
interface IBoardChartFloatingToolbarExtraProps {
    unitId: string;
    subUnitId: string;
    elementId: string;
    chartId: string;
}
interface IBoardChartFloatingToolbarProps {
    popup: {
        extraProps?: IBoardChartFloatingToolbarExtraProps;
    };
}
export declare function BoardChartFloatingToolbar(props: IBoardChartFloatingToolbarProps): import("react").JSX.Element | null;
export {};
