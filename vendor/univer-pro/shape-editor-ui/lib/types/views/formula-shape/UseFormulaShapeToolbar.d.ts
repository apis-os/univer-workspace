import type { IShapeData, IShapeFormulaBinding } from '@univerjs-pro/engine-shape';
import type { IShapeFormulaIdentity } from '@univerjs-pro/shape-editor';
import type { ReactNode } from 'react';
import type { IShapeFloatingToolbarExtensionGroup } from '../shape-floating-toolbar/ShapeFloatingToolbar';
interface IUseFormulaShapeToolbarOptions extends IShapeFormulaIdentity {
    shapeData?: IShapeData;
    registerBinding?: boolean;
    showLabels?: boolean;
    dropdownSide?: 'top' | 'bottom';
    onUpdateBinding: (binding: IShapeFormulaBinding) => void;
}
export declare function useFormulaShapeToolbar(options: IUseFormulaShapeToolbarOptions): {
    extensionGroups?: IShapeFloatingToolbarExtensionGroup[];
    panel: ReactNode;
};
export {};
