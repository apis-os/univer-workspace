export type MindMapNodeControlKind = 'add-child-left' | 'add-child-right' | 'add-child-top' | 'add-child-bottom' | 'add-sibling-before' | 'add-sibling-after' | 'toggle-collapse';
export interface IMindMapNodeControlBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IResolveMindMapNodeControlLayoutOptions {
    bounds: IMindMapNodeControlBounds;
    isRoot: boolean;
    side: 'left' | 'right' | 'top' | 'bottom';
    rootChildSides?: Array<'left' | 'right' | 'top' | 'bottom'>;
    hasChildren: boolean;
    collapsedDescendantCount: number;
}
export interface IMindMapNodeControl {
    kind: MindMapNodeControlKind;
    x: number;
    y: number;
    radius: number;
    visualRadius?: number;
    placement?: 'before' | 'after';
    badgeCount?: number;
}
export declare const BOARD_MIND_MAP_NODE_CONTROL_TOKENS: {
    readonly radius: 18;
    readonly addChildRadius: 14;
    readonly siblingHoverRadius: 10;
    readonly siblingDotRadius: 5;
    readonly siblingDotGap: 3;
    readonly gap: 10;
    readonly collapsePlusMinDistance: 44;
    readonly primaryColor: "#2563EB";
    readonly surfaceColor: "#ffffff";
    readonly borderWidth: 2;
    readonly glyphSize: 8;
    readonly addChildGlyphSize: 6;
    readonly siblingGlyphSize: 5.5;
    readonly glyphWidth: 2.4;
    readonly glyphHoverWidth: 3;
    readonly badgeFontWeight: 600;
    readonly badgeFontSize: 18;
    readonly fontFamily: string;
};
export declare function resolveMindMapNodeControlLayout(options: IResolveMindMapNodeControlLayoutOptions): IMindMapNodeControl[];
