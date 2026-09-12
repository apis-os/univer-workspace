import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IAccessor } from '@univerjs/core';
import type { IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../../locale/types';
export interface IShapeTypeOption {
    label: string;
    value: ShapeTypeEnum;
    icon: string;
}
export declare const ShapeMenuItemFactory: (accessor: IAccessor) => IMenuSelectorItem<LocaleKey>;
export declare const ShapeInsertBelowMenuItemFactory: (accessor: IAccessor) => IMenuSelectorItem<LocaleKey>;
export declare const EmptyParagraphShapeMenuItemFactory: (accessor: IAccessor) => IMenuSelectorItem<LocaleKey>;
