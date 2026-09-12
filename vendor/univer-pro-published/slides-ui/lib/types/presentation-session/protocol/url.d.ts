export interface ISlidePresentationUrlParams {
    unitId?: string;
    sessionId?: string;
    playMode: number;
    startSlideId?: string;
}
export declare function parseSlidePresentationUrlParams(search: string): ISlidePresentationUrlParams;
export declare function serializeSlidePresentationUrlParams(params: ISlidePresentationUrlParams): string;
