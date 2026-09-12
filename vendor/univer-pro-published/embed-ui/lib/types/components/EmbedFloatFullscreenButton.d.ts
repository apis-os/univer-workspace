import { EmbedModelService } from '@univerjs-pro/embed';
import { EmbedActivationService } from '../services/embed-activation.service';
import { EmbedFullscreenService } from '../services/embed-fullscreen.service';
export interface IEmbedFloatFullscreenButtonProps {
    hostUnitId?: string;
    embedId?: string;
    className?: string;
    variant?: 'float' | 'menu';
}
export declare function EmbedFloatFullscreenButton(props: IEmbedFloatFullscreenButtonProps): import("react").JSX.Element;
export declare function enterEmbedFullscreen(params: {
    hostUnitId: string;
    embedId: string;
    activationService?: Pick<EmbedActivationService, 'clearFloating'>;
    embedModelService: Pick<EmbedModelService, 'getDescriptor'>;
    fullscreenService: Pick<EmbedFullscreenService, 'enter'>;
}): boolean;
