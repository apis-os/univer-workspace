export declare function createMeasureContext(): CanvasRenderingContext2D;
export declare function createCanvasTextMeasurer(context: CanvasRenderingContext2D): {
    measureText(word: any): {
        width: number;
        height: number;
        actualBoundingBoxAscent: number;
        actualBoundingBoxDescent: number;
        actualBoundingBoxLeft: number;
        actualBoundingBoxRight: number;
    };
    rasterizeText(word: any): import("../../types").IWordCloudTextSprite;
};
