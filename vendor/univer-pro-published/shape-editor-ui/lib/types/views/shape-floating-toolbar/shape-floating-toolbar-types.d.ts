import type { IShapeData } from '@univerjs-pro/engine-shape';
import type { ReactNode } from 'react';
import type { IShapeTextUpdateOptions } from './shape-floating-toolbar-utils';
export interface IToolbarDropdownOption<T extends string | number> {
    label: string;
    value: T;
    icon: ReactNode;
}
export type ShapeDataUpdateHandler = (oldShapeJSON: {
    oldShapeData?: IShapeData;
}, shapeData?: IShapeData, patch?: IShapeData) => void;
export type ShapeTextUpdateHandler = (params: IShapeTextUpdateOptions) => void;
