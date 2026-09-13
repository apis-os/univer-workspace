import type { IWordCloudEncodedWord, IWordCloudLayoutOptions, IWordCloudLayoutResult } from '../../types';
import type { IWordCloudLayoutRuntime } from '../types/layout';
export declare function layoutWordCloudGridWords(words: readonly IWordCloudEncodedWord[], options: IWordCloudLayoutOptions, runtime: IWordCloudLayoutRuntime): IWordCloudLayoutResult;
