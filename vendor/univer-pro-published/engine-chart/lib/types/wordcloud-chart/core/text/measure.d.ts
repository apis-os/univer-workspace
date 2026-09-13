import type { IWordCloudEncodedWord, IWordCloudTextMeasurer } from '../../types';
export interface IMeasuredBoxWord {
    readonly word: IWordCloudEncodedWord;
    readonly width: number;
    readonly height: number;
}
export declare function createPlacementLayoutWord(source: IWordCloudEncodedWord, fontSize: number, rotate: number, padding: number): IWordCloudEncodedWord;
export declare function measureBoxWord(source: IWordCloudEncodedWord, measurer: IWordCloudTextMeasurer, fontSize: number, rotate: number, padding: number): IMeasuredBoxWord;
