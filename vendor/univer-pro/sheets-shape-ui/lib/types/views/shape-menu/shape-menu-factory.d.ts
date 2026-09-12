import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IAccessor } from '@univerjs/core';
import type { IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../../locale/types';
export interface IShapeTypeOption {
    label: string;
    value: ShapeTypeEnum;
    icon: string;
}
export declare function ShapeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey>;
