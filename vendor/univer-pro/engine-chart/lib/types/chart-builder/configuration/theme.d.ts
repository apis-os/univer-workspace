/** Selects a theme without changing the independently persisted palette override. */
export declare const setTheme: (value: string) => import("./chart-config-operation").IChartConfigOperation;
/** Clears only the selected theme while preserving any chart-owned palette. */
export declare const clearTheme: () => import("./chart-config-operation").IChartConfigOperation;
