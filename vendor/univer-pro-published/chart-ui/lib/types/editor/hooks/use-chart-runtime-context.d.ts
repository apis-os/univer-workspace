export declare function useChartRuntimeContext(): {
    direction: "ltr" | "rtl";
    adaptiveSize?: import("@univerjs-pro/engine-chart").IChartRuntimeAdaptiveSize;
    enableAdaptiveSize?: boolean;
    themeColors?: string[];
    axes: import("@univerjs-pro/engine-chart").IRuntimeAxis[];
    themeInfo: import("@univerjs-pro/engine-chart").IEchartTheme;
    wordCloudRenderConfig?: import("@univerjs-pro/engine-chart").IWordCloudRenderConfig;
    addWatermark?: boolean;
    layoutInset?: number;
    getRenderColor(color: string): string;
    isDarkMode: boolean;
    hasSecondaryAxis: boolean;
    localeTexts: import("@univerjs-pro/engine-chart").IChartLocaleTexts;
    updateAdaptiveSizeFromDomRender?(chartWidth: number): void;
};
