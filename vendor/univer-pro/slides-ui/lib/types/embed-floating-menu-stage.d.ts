interface IEmbedFloatingActivation {
    hostUnitId?: string;
    childUnitId?: string;
    embedId: string;
    stage: 'inactive' | 'stage1' | 'stage2';
}
export declare function resolveSlidesFloatingMenuStage(params: {
    embedId: string;
    active: IEmbedFloatingActivation | null;
    fullscreen?: boolean;
    usesDomFloatingStage?: boolean;
    renderScopeActive?: boolean;
}): 'inactive' | 'stage2';
export {};
