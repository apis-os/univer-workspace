import type { Observable } from 'rxjs';
import type { ISlidePresentationSessionEndPayload, SlidePresentationNavigationDirection } from '../protocol';
import type { ISlidePresentationTransport } from './broadcast-channel-transport';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { ISlidePlaybackService } from '../../services/slide-playback.service';
export interface ISlidePresentationSessionState {
    active: boolean;
    role: 'owner' | 'audience' | null;
    sessionId: string | null;
    unitId: string | null;
    clientId: string | null;
    suppressLocalOverlayUnitId: string | null;
    audienceFullscreenPromptVisible: boolean;
    audienceEnded: boolean;
}
export interface IStartOwnerSlidePresentationSessionParams {
    unitId: string;
    sessionId: string;
    startSlideId?: string;
    audienceWindow: Window;
    readyTimeoutMs?: number;
    createTransport?: (channelName: string) => ISlidePresentationTransport;
}
export interface IStartAudienceSlidePresentationSessionParams {
    unitId: string;
    sessionId: string;
    playMode: number;
    startSlideId?: string;
    createTransport?: (channelName: string) => ISlidePresentationTransport;
    requestFullscreen?: () => Promise<boolean>;
    closeWindow?: () => void;
}
export type SlidePresentationSessionEndReason = ISlidePresentationSessionEndPayload['reason'];
export interface ISlidePresentationSessionService {
    readonly state$: Observable<ISlidePresentationSessionState>;
    getSnapshot(): ISlidePresentationSessionState;
    isOwnerSessionActive(): boolean;
    isAudienceMode(): boolean;
    isSuppressingLocalOverlay(unitId: string | null): boolean;
    startOwnerSession(params: IStartOwnerSlidePresentationSessionParams): boolean;
    startAudienceSession(params: IStartAudienceSlidePresentationSessionParams): boolean;
    requestAudienceNavigation(direction: SlidePresentationNavigationDirection): boolean;
    retryAudienceFullscreen(): Promise<boolean>;
    dismissAudienceFullscreenPrompt(): void;
    endSession(reason: SlidePresentationSessionEndReason): void;
}
export declare const ISlidePresentationSessionService: import("@wendellhu/redi").IdentifierDecorator<ISlidePresentationSessionService>;
export declare class SlidePresentationSessionService extends Disposable implements ISlidePresentationSessionService {
    private readonly _playbackService;
    private readonly _instanceService;
    private readonly _state$;
    private _transport;
    private _messageSubscription;
    private _playbackSubscription;
    private _ownerActiveSlideSubscription;
    private _readyTimer;
    private _audienceReadyTimer;
    private _ownerActiveSlideSyncTimer;
    private _windowMessageHandler;
    private _audienceClosedTimer;
    private _ownerUnloadHandler;
    private _audienceWindow;
    private _channelName;
    private _revision;
    private _lastAppliedRevision;
    private _startSlideId;
    private _requestFullscreen;
    private _closeWindow;
    private readonly _processedAudienceNavigationMessageIds;
    private _ending;
    readonly state$: Observable<ISlidePresentationSessionState>;
    constructor(_playbackService: ISlidePlaybackService, _instanceService: IUniverInstanceService);
    dispose(): void;
    getSnapshot(): ISlidePresentationSessionState;
    isOwnerSessionActive(): boolean;
    isAudienceMode(): boolean;
    isSuppressingLocalOverlay(unitId: string | null): boolean;
    startOwnerSession(params: IStartOwnerSlidePresentationSessionParams): boolean;
    startAudienceSession(params: IStartAudienceSlidePresentationSessionParams): boolean;
    requestAudienceNavigation(direction: SlidePresentationNavigationDirection): boolean;
    retryAudienceFullscreen(): Promise<boolean>;
    dismissAudienceFullscreenPrompt(): void;
    endSession(reason: SlidePresentationSessionEndReason): void;
    private _handleOwnerMessage;
    private _broadcastOwnerPlaybackState;
    private _handleAudienceMessage;
    private _consumeAudienceNavigationMessage;
    private _isMessageForCurrentClient;
    private _postOwnerMessage;
    private _registerOwnerActiveSlideSync;
    private _queueOwnerActiveSlideSync;
    private _registerWindowMessageFallback;
    private _postOwnerMessageToAudience;
    private _postAudienceMessageToOwner;
    private _clearReadyTimer;
    private _clearAudienceReadyTimer;
    private _clearOwnerActiveSlideSync;
    private _clearOwnerActiveSlideSyncTimer;
    private _clearWindowMessageFallback;
    private _clearAudienceClosedTimer;
    private _clearOwnerUnloadHandler;
}
