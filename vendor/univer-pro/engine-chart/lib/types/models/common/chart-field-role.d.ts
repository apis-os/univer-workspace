export declare const ChartFieldRoleIndex: {
    readonly CategoryValue: {
        readonly Category: 0;
        readonly Value: 0;
    };
    readonly Point: {
        readonly Label: 0;
        readonly X: 0;
        readonly Y: 1;
    };
    readonly Bubble: {
        readonly Label: 0;
        readonly Group: 1;
        readonly X: 0;
        readonly Y: 1;
        readonly Size: 2;
    };
    readonly Hierarchy: {
        readonly Value: 0;
    };
    readonly Candlestick: {
        readonly Category: 0;
        readonly Open: 0;
        readonly High: 1;
        readonly Low: 2;
        readonly Close: 3;
    };
    readonly Edge: {
        readonly Source: 0;
        readonly Target: 1;
        readonly Value: 0;
    };
};
export declare const ChartFieldRoleCount: {
    readonly None: 0;
    readonly CategoryValue: {
        readonly Category: 1;
        readonly Value: 1;
    };
    readonly Point: {
        readonly XY: 2;
    };
    readonly Bubble: {
        readonly Labels: 2;
        readonly Values: 3;
    };
    readonly Edge: {
        readonly Endpoints: 2;
    };
    readonly Candlestick: {
        readonly OHLC: 4;
    };
};
