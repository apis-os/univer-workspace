type SeriesStyleKeyInput = string | number | null | undefined;
export interface ISeriesStyleSource {
    seriesId?: SeriesStyleKeyInput;
    seriesIndex?: SeriesStyleKeyInput;
    baseSeriesIndex?: SeriesStyleKeyInput;
}
export declare function getSeriesStyleKey(source: ISeriesStyleSource): string | undefined;
export declare function resolveSeriesStyle<T extends object>(seriesStyleMap: Partial<Record<string, T | undefined>> | undefined, source: ISeriesStyleSource, fallbackSources?: readonly ISeriesStyleSource[]): T | undefined;
export {};
