import type { LocaleKey } from '../locale/types';
import type { BoardMindMapTemplateThumbnailVariant } from './BoardMindMapTemplateThumbnailIcon';
import { BoardToolType } from '@univerjs-pro/boards';
type BoardMindMapPresetStructureKind = 'mindmap-horizontal' | 'mindmap-vertical' | 'tree-right' | 'tree-left' | 'tree-alternate' | 'timeline-horizontal' | 'timeline-vertical';
interface IBoardMindMapPresetChild {
    text?: string;
    orderKey?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
}
interface IBoardMindMapPresetBlueprintNode {
    text?: string;
    orderKey?: string;
    side?: 'left' | 'right' | 'top' | 'bottom';
    collapsed?: boolean;
    branchColorKey?: string;
    foreignAttributes?: Record<string, string>;
    children: IBoardMindMapPresetBlueprintNode[];
}
interface IResolvedBoardMindMapPresetBlueprintNode extends Omit<IBoardMindMapPresetBlueprintNode, 'children' | 'text'> {
    text: string;
    children: IResolvedBoardMindMapPresetBlueprintNode[];
}
interface IBoardMindMapInsertPreset {
    key: string;
    thumbnail: BoardMindMapTemplateThumbnailVariant;
    labelKey: LocaleKey;
    structureKind: BoardMindMapPresetStructureKind;
    children: IBoardMindMapPresetChild[];
    blueprint?: {
        title?: string;
        root: IBoardMindMapPresetBlueprintNode;
    };
}
interface IBoardMindMapTemplateGroup {
    key: string;
    labelKey: LocaleKey;
    presets: IBoardMindMapInsertPreset[];
}
export declare const BOARD_MIND_MAP_TEMPLATE_GROUPS: IBoardMindMapTemplateGroup[];
export declare function resolveMindMapPresetInsertTemplate(preset: IBoardMindMapInsertPreset, nodeText: string): {
    rootText: string;
    structureKind: BoardMindMapPresetStructureKind;
    children: {
        text: string;
        orderKey?: string;
        side?: "left" | "right" | "top" | "bottom";
        collapsed?: boolean;
        branchColorKey?: string;
        foreignAttributes?: Record<string, string>;
    }[];
    blueprint: {
        title: string | undefined;
        root: IResolvedBoardMindMapPresetBlueprintNode;
    } | undefined;
};
declare const BOARD_CONTAINER_PRESETS: readonly [{
    readonly key: "custom";
    readonly labelKey: "boards-ui.panel.customContainer";
    readonly width: 720;
    readonly height: 405;
    readonly variant: "custom";
}, {
    readonly key: "16-9";
    readonly labelKey: "boards-ui.panel.containerRatio16By9";
    readonly width: 720;
    readonly height: 405;
    readonly variant: "wide";
}, {
    readonly key: "4-3";
    readonly labelKey: "boards-ui.panel.containerRatio4By3";
    readonly width: 630;
    readonly height: 472.5;
    readonly variant: "standard";
}, {
    readonly key: "1-1";
    readonly labelKey: "boards-ui.panel.containerRatio1By1";
    readonly width: 495;
    readonly height: 495;
    readonly variant: "square";
}, {
    readonly key: "a4";
    readonly labelKey: "boards-ui.panel.containerA4";
    readonly width: 472.5;
    readonly height: 668.25;
    readonly variant: "a4";
}];
export declare function ContainerPresetThumbnail({ variant }: {
    variant: typeof BOARD_CONTAINER_PRESETS[number]['variant'];
}): import("react").JSX.Element;
export declare function SwimlanePresetIcon({ orientation }: {
    orientation: 'vertical' | 'horizontal';
}): import("react").JSX.Element;
export declare function BoardFloatingToolPanelContent(props: {
    activePanelTool: BoardToolType;
}): import("react").JSX.Element;
export {};
