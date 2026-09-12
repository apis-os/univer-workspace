export declare const WORD_CLOUD_ECHARTS_RENDER_CONFIG: {
    readonly fontSizeRange: readonly [16, 56];
    readonly seriesStyle: {
        readonly rotations: readonly [0, -45, 45, 90, -90];
        readonly randomSeed: 1;
        readonly gridSize: 4;
        readonly padding: 1;
        readonly width: "96%";
        readonly height: "96%";
    };
    readonly search: {
        readonly ringCount: 7;
        readonly defaultBudget: 4500;
    };
    readonly placement: {
        readonly renderRotationSign: -1;
        readonly failureCacheLimit: 180;
    };
    readonly shapeMask: {
        readonly sampleSize: null;
        readonly insideRatio: null;
        readonly paddingRatio: 0.02;
        readonly fit: "contain";
        readonly mode: "auto";
        readonly alphaThreshold: 8;
        readonly luminanceThreshold: 245;
        readonly invert: false;
    };
    readonly globalFontScale: {
        readonly minimumEffectiveScale: 1.03;
        readonly binarySearchIterations: 12;
    };
    readonly fastAreaDensity: {
        readonly areaRatio: 1;
        readonly targetOccupancy: 0.62;
        readonly safety: 1.03;
        readonly cjkCharWidth: 1;
        readonly whitespaceCharWidth: 0.28;
        readonly narrowCharWidth: 0.32;
        readonly wideCharWidth: 0.82;
        readonly uppercaseCharWidth: 0.66;
        readonly defaultCharWidth: 0.56;
        readonly boldFactor: 1.06;
        readonly fontHeightRatio: 1.16;
        readonly rotationDiagonalInflate: 0.12;
        readonly gridPerimeterOverhead: 0.9;
        readonly gridAreaOverheadCells: 4;
        readonly minimumSafety: 0.5;
        readonly maximumSafety: 2;
    };
    readonly zoomToFit: {
        readonly shrink: true;
        readonly enlarge: false;
        readonly fontSizeLimitMin: 16;
        readonly minShrinkRatio: 0.8;
    };
};
