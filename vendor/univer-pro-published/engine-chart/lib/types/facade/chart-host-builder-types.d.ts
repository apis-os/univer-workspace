/** Combines one concrete engine Chart Builder with host-owned creation methods. */
export type HostComposedChartBuilder<TBuilder extends object, THostMethods extends object> = TBuilder & THostMethods;
