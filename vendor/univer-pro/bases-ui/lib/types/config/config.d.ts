import type { DependencyOverride, IBaseAttachment } from '@univerjs/core';
import type { MenuConfig } from '@univerjs/ui';
export declare const BASES_UI_PLUGIN_CONFIG_KEY = "base-ui.config";
export declare const configSymbol: unique symbol;
export declare const BASE_LEFT_PANEL_DEFAULT_WIDTH = 250;
export declare const BASE_LEFT_PANEL_MIN_WIDTH = 200;
export declare const BASE_LEFT_PANEL_MAX_WIDTH = 500;
export declare const BASE_RIGHT_PANEL_MIN_WIDTH = 360;
export declare const BASE_RIGHT_PANEL_DEFAULT_WIDTH = 480;
export declare const BASE_RIGHT_PANEL_WIDE_WIDTH = 640;
export declare const BASE_RIGHT_PANEL_MAX_WIDTH = 800;
export declare const BASE_RIGHT_PANEL_MIN_CANVAS_WIDTH = 320;
export declare const BASE_RIGHT_PANEL_FULLSCREEN_BREAKPOINT = 768;
export declare const BASE_RIGHT_PANEL_RESIZE_HANDLE_WIDTH = 24;
export type BaseRightPanelMode = 'overlay' | 'dock';
export interface IUniverBaseUIConfig {
    disableEdit?: boolean;
    menu?: MenuConfig;
    override?: DependencyOverride;
    attachment?: {
        accept?: string[];
        maxSize?: number;
        upload?: (file: File) => Promise<IBaseAttachment>;
    };
    personOptions?: Array<{
        id: string;
        name: string;
        avatar?: string;
    }>;
    groupOptions?: Array<{
        id: string;
        name: string;
        avatar?: string;
    }>;
    initialState?: {
        subUnitId?: string | null;
        tableId?: string | null;
        viewId?: string | null;
    };
    workbench?: {
        header?: boolean;
        headerMenu?: boolean;
        content?: boolean;
        leftSidebar?: boolean;
        rightSidebar?: boolean;
        rightPanelMode?: BaseRightPanelMode;
        leftPanelWidth?: number;
        rightPanelWidth?: number;
        footer?: boolean;
        global?: boolean;
        mobile?: boolean;
        route?: boolean;
        fallbackToFirstUnit?: boolean;
        collaborationStatus?: boolean;
        presentation?: boolean;
    };
}
export declare const defaultPluginConfig: IUniverBaseUIConfig;
