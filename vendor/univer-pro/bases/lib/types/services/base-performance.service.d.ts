export type BasePerformanceDetails = Record<string, unknown>;
export declare function isBasePerformanceTracingEnabled(): boolean;
export declare function traceBasePerformance<T>(label: string, fn: () => T, details?: BasePerformanceDetails): T;
export declare function traceBasePerformanceAsync<T>(label: string, fn: () => Promise<T>, details?: BasePerformanceDetails): Promise<T>;
export declare function logBasePerformance(label: string, duration: number, details?: BasePerformanceDetails): void;
