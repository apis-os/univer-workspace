import type { SlideModel } from '@univerjs-pro/slides';
import type { ICommandService, IUniverInstanceService } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { EmbedFloatingActiveService } from '../../../../services/embed-floating-active.service';
export interface ISlideEmbedFloatingMenuProps {
    collisionBoundary?: HTMLElement;
    hostUnitId: string;
    embedId: string;
    childUnitId: string;
    slideModel: SlideModel | null;
    floatingActiveService: EmbedFloatingActiveService;
    commandService: ICommandService;
    instanceService: IUniverInstanceService;
    fullscreen: boolean;
    usesDomFloatingStage: boolean;
    renderScopeActive$: Observable<boolean>;
}
export declare function SlideEmbedFloatingMenu(props: ISlideEmbedFloatingMenuProps): import("react").JSX.Element;
