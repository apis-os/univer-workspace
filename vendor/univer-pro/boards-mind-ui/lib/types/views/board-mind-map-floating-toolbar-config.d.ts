import type { MindMapStructureKind } from '@univerjs-pro/boards-mind';
import type { LocaleKey } from '../locale/types';
export declare const BOARD_MIND_MAP_LINE_WIDTH_RANGE: {
    min: number;
    max: number;
    defaultValue: number;
};
export declare const BOARD_MIND_MAP_LINE_OPACITY_RANGE: {
    min: number;
    max: number;
    defaultValue: number;
};
export type BoardMindMapFloatingToolbarPanel = 'line' | 'more';
export type BoardMindMapFloatingToolbarPrimaryItem = {
    kind: 'dropdown';
    titleKey: LocaleKey;
    panel: BoardMindMapFloatingToolbarPanel;
    dividerBefore?: boolean;
} | {
    kind: 'fontColor';
    titleKey: LocaleKey;
    dividerBefore?: boolean;
} | {
    kind: 'typography';
    titleKey: LocaleKey;
    dividerBefore?: boolean;
};
export declare const BOARD_MIND_MAP_FLOATING_TOOLBAR_PRIMARY_ITEMS: BoardMindMapFloatingToolbarPrimaryItem[];
export declare const BOARD_MIND_MAP_FLOATING_TOOLBAR_PANELS: {
    line: {
        sections: readonly ["type", "width", "color", "opacity"];
    };
    more: {
        actionKeys: readonly ["addSibling", "addChild", "copy", "paste", "delete"];
    };
};
export declare const BOARD_MIND_MAP_MORE_ACTION_SHORTCUTS: {
    readonly addSibling: "add-sibling-or-child";
    readonly addChild: "add-child";
    readonly copy: "copy";
    readonly paste: "paste";
    readonly delete: "delete";
};
export type BoardMindMapFloatingToolbarLayoutIcon = MindMapStructureKind | 'branch-curve' | 'branch-rounded-orthogonal' | 'branch-orthogonal';
export declare const BOARD_MIND_MAP_FLOATING_TOOLBAR_LAYOUT_GROUPS: readonly [{
    readonly key: "mind-map";
    readonly title: "Mind map";
    readonly items: readonly [{
        readonly value: "mindmap-horizontal";
        readonly icon: "mindmap-horizontal";
        readonly labelKey: "boards-mind-ui.panel.structureKind.mindmapHorizontal";
    }, {
        readonly value: "mindmap-vertical";
        readonly icon: "mindmap-vertical";
        readonly labelKey: "boards-mind-ui.panel.structureKind.mindmapVertical";
    }];
}, {
    readonly key: "tree-diagram";
    readonly title: "Tree diagram";
    readonly items: readonly [{
        readonly value: "tree-right";
        readonly icon: "tree-right";
        readonly labelKey: "boards-mind-ui.panel.structureKind.treeRight";
    }, {
        readonly value: "tree-left";
        readonly icon: "tree-left";
        readonly labelKey: "boards-mind-ui.panel.structureKind.treeLeft";
    }, {
        readonly value: "tree-alternate";
        readonly icon: "tree-alternate";
        readonly labelKey: "boards-mind-ui.panel.structureKind.treeAlternate";
    }];
}, {
    readonly key: "timeline";
    readonly title: "Timeline";
    readonly items: readonly [{
        readonly value: "timeline-horizontal";
        readonly icon: "timeline-horizontal";
        readonly labelKey: "boards-mind-ui.panel.structureKind.timelineHorizontal";
    }, {
        readonly value: "timeline-vertical";
        readonly icon: "timeline-vertical";
        readonly labelKey: "boards-mind-ui.panel.structureKind.timelineVertical";
    }];
}];
export declare const BOARD_MIND_MAP_FLOATING_TOOLBAR_BRANCH_GROUP: {
    readonly key: "branch";
    readonly title: "Branch";
    readonly items: readonly [{
        readonly value: "curve";
        readonly icon: "branch-curve";
        readonly labelKey: "boards-mind-ui.panel.branchLineType.curve";
    }, {
        readonly value: "rounded-orthogonal";
        readonly icon: "branch-rounded-orthogonal";
        readonly labelKey: "boards-mind-ui.panel.branchLineType.roundedOrthogonal";
    }, {
        readonly value: "orthogonal";
        readonly icon: "branch-orthogonal";
        readonly labelKey: "boards-mind-ui.panel.branchLineType.orthogonal";
    }];
};
