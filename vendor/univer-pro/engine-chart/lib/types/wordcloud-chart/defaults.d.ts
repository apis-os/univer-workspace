import type { IResolvedWordCloudSpec, IWordCloudProtocolSpec } from './types';
export declare const DEFAULT_WORD_CLOUD_CHART_SPEC: {
    type: "wordcloud";
    data: {
        id: string;
        values: never[];
    };
    fields: {
        id: string;
        text: string;
        value: string;
        group: string;
        color: string;
    };
    transforms: never[];
    encoding: {
        fontSize: {
            scale: "sqrt";
            range: [number, number];
        };
        rotate: {
            angles: number[];
            seed: string;
        };
    };
    layout: {
        width: number;
        height: number;
        mode: "default";
        maskShape: {
            type: "builtin";
            shape: "rect";
        };
        seed: string;
        drawOutOfBound: false;
        shrinkToFit: false;
        minFontSize: number;
        maxAttempts: number;
        spiralStep: number;
        gridSize: number;
        shapeSampleSize: null;
        shapeInsideRatio: null;
        shapePaddingRatio: number;
        textLayoutTimes: number;
        importantWordCount: number;
        fontSizeShrinkFactor: number;
        stepFactor: number;
        globalShrinkLimit: number;
        fontSizeEnlargeFactor: number;
        fillingTimes: number;
        fillingStep: number;
        fillingInitialOpacity: number;
        fillingDeltaOpacity: number;
        fillingDeltaFontSizeFactor: number;
        fillingRatio: number;
        minFillFontSize: number;
        minInitFontSize: number;
    };
    mark: {
        fontFamily: string;
        fontStyle: "normal";
        fontWeight: string;
        padding: number;
        opacity: number;
    };
    tooltip: {
        fields: never[];
    };
};
export declare function resolveWordCloudSpec(spec: IWordCloudProtocolSpec): IResolvedWordCloudSpec;
