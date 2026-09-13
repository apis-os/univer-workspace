/** Creates a copied palette patch; an empty palette clears the chart-owned override. */
export declare const setPalette: (colors: readonly string[]) => import("./chart-config-operation").IChartConfigOperation;
/** Clears the chart-owned palette so the selected theme supplies series colors again. */
export declare const clearPalette: () => import("./chart-config-operation").IChartConfigOperation;
