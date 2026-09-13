import type { BaseViewProjection } from '@univerjs/core';
import type { ComponentType } from 'react';
import type { BaseViewRenderController } from '../render/base-view-render-controller';
import { BaseViewType } from '@univerjs/core';
export interface IViewRenderContext {
    unitId: string;
    tableId: string;
    viewId: string;
}
export interface IBaseDomViewProps extends IViewRenderContext {
}
export interface IViewToolbarContext {
    viewId: string;
}
export interface IViewSettingsPanelContext {
    viewId: string;
}
export interface IToolbarItem {
    id: string;
    label: string;
}
interface IViewUIPluginBase {
    type: BaseViewType;
    icon: ComponentType;
    menu?: {
        label: string;
        description: string;
        defaultName: string;
    };
    createToolbarItems?(ctx: IViewToolbarContext): IToolbarItem[];
}
export interface ICanvasViewUIPlugin<TProjection extends BaseViewProjection = BaseViewProjection> extends IViewUIPluginBase {
    renderMode: 'canvas';
    createRenderController(): BaseViewRenderController<TProjection>;
}
export interface IDomViewUIPlugin extends IViewUIPluginBase {
    renderMode: 'dom';
    component: ComponentType<IBaseDomViewProps>;
    showBaseToolbar?: boolean;
}
export type IViewUIPlugin<TProjection extends BaseViewProjection = BaseViewProjection> = ICanvasViewUIPlugin<TProjection> | IDomViewUIPlugin;
export declare function createCoreViewUIPlugins(): IViewUIPlugin[];
export {};
