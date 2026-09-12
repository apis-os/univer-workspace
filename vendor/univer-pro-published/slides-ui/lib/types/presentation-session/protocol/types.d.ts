export declare const SLIDE_PRESENTATION_PROTOCOL_VERSION: 1;
export declare enum SlidePresentationPlayMode {
    Normal = 0,
    Audience = 1,
    Presenter = 2,
    Controller = 4,
    Preview = 8
}
export type SlidePresentationClientRole = 'owner' | 'audience';
export interface ISlidePresentationClientRef {
    clientId: string;
    role: SlidePresentationClientRole;
}
export interface ISlidePresentationMessageTarget {
    clientId?: string;
    role?: SlidePresentationClientRole;
}
export interface ISlidePresentationPlaybackStatePayload {
    unitId: string;
    currentSlideId: string;
    previousSlideId: string | null;
    currentIndex: number;
    total: number;
}
export interface ISlidePresentationClientReadyPayload {
    playMode: number;
    unitId: string;
    startSlideId?: string;
    capabilities: {
        fullscreen: boolean;
        windowManagement: boolean;
    };
}
export interface ISlidePresentationInitPayload {
    unitId: string;
    startSlideId?: string;
    playbackState: ISlidePresentationPlaybackStatePayload;
}
export type SlidePresentationNavigationDirection = 'previous' | 'next';
export interface ISlidePresentationAudienceNavigatePayload {
    unitId: string;
    direction: SlidePresentationNavigationDirection;
}
export interface ISlidePresentationSessionEndPayload {
    reason: 'owner-stop' | 'owner-window-unload' | 'audience-window-closed' | 'audience-timeout' | 'error';
}
export interface ISlidePresentationMessageMap {
    'client.ready': ISlidePresentationClientReadyPayload;
    'audience.navigate': ISlidePresentationAudienceNavigatePayload;
    'presenter.init': ISlidePresentationInitPayload;
    'playback.sync': ISlidePresentationPlaybackStatePayload;
    'session.end': ISlidePresentationSessionEndPayload;
}
export type SlidePresentationMessageType = keyof ISlidePresentationMessageMap;
export interface ISlidePresentationMessage<TType extends SlidePresentationMessageType = SlidePresentationMessageType> {
    version: typeof SLIDE_PRESENTATION_PROTOCOL_VERSION;
    sessionId: string;
    messageId: string;
    source: ISlidePresentationClientRef;
    target?: ISlidePresentationMessageTarget;
    type: TType;
    revision?: number;
    sentAt: number;
    payload: ISlidePresentationMessageMap[TType];
}
export type SlidePresentationProtocolMessage = {
    [K in SlidePresentationMessageType]: ISlidePresentationMessage<K>;
}[SlidePresentationMessageType];
export interface ICreateSlidePresentationMessageParams<TType extends SlidePresentationMessageType> {
    sessionId: string;
    messageId?: string;
    source: ISlidePresentationClientRef;
    target?: ISlidePresentationMessageTarget;
    type: TType;
    revision?: number;
    sentAt?: number;
    payload: ISlidePresentationMessageMap[TType];
}
export declare function hasSlidePresentationPlayMode(playMode: number, mode: SlidePresentationPlayMode): boolean;
export declare function getSlidePresentationChannelName(sessionId: string): string;
export declare function createSlidePresentationMessage<TType extends SlidePresentationMessageType>(params: ICreateSlidePresentationMessageParams<TType>): ISlidePresentationMessage<TType>;
export declare function isSlidePresentationMessageForClient(message: SlidePresentationProtocolMessage, client: ISlidePresentationClientRef): boolean;
export declare function shouldApplyPlaybackSync(lastAppliedRevision: number, nextRevision: number | undefined): boolean;
