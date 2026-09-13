import type { SlideModel } from '@univerjs-pro/slides';
import type { ICommandService, IUniverInstanceService } from '@univerjs/core';
import type { Observable } from 'rxjs';
interface ISlideEmbedFloatingActiveService {
    active$: Observable<{
        embedId: string;
        stage: 'inactive' | 'stage1' | 'stage2';
    } | null>;
    getActive: () => {
        embedId: string;
        stage: 'inactive' | 'stage1' | 'stage2';
    } | null;
    activate: (target: {
        hostUnitId: string;
        embedId: string;
        childUnitId: string;
    }, stage: 'stage1' | 'stage2') => void;
}
export interface ISlideEmbedFloatingMenuProps {
    hostUnitId: string;
    entry: string;
    embedId: string;
    childUnitId: string;
    slideModel: SlideModel | null;
    floatingActiveService: ISlideEmbedFloatingActiveService;
    commandService: ICommandService;
    instanceService: IUniverInstanceService;
    fullscreen: boolean;
    usesDomFloatingStage: boolean;
    renderScopeActive$: Observable<boolean>;
}
export declare function SlideEmbedFloatingMenu(props: ISlideEmbedFloatingMenuProps): import("react").JSX.Element;
export {};
