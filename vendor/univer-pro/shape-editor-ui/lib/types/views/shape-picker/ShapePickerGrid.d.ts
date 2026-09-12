import type { ShapeGroupEnum, ShapeTypeOption } from './shapes';
export interface IShapePickerGridProps {
    onShapeClick: (shape: ShapeTypeOption) => void;
    excludeGroups?: ShapeGroupEnum[];
    options?: readonly ShapeTypeOption[];
    scrollContainer?: 'self' | 'parent';
    variant?: 'plain' | 'card';
}
export declare function ShapePickerGrid(props: IShapePickerGridProps): import("react").JSX.Element;
export interface IShapePickerPanelProps {
    onShapeClick: (shape: ShapeTypeOption) => void;
    excludeGroups?: ShapeGroupEnum[];
    options?: readonly ShapeTypeOption[];
    scrollContainer?: 'self' | 'parent';
    variant?: 'plain' | 'card';
}
export declare function ShapePickerPanel(props: IShapePickerPanelProps): import("react").JSX.Element;
export interface IShapePickerDropdownProps extends IShapePickerPanelProps {
    buttonLabel: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
}
export declare function ShapePickerDropdown(props: IShapePickerDropdownProps): import("react").JSX.Element;
