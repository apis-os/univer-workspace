export type PivotButtonPlacement = 'filter' | 'collapse';
interface IPivotButtonBounds {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}
export declare function getPivotButtonPosition(direction: 'ltr' | 'rtl', placement: PivotButtonPlacement, bounds: IPivotButtonBounds): {
    left: number;
    top: number;
};
export {};
