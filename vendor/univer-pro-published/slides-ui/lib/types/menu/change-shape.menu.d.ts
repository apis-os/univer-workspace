import type { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import type { IAccessor } from '@univerjs/core';
import type { IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
export declare function SlideChangeShapeMenuFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey, ShapeTypeEnum | undefined, ShapeTypeEnum>;
