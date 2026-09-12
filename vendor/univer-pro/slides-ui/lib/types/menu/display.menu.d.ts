import type { IAccessor } from '@univerjs/core';
import type { IMenuButtonItem, IMenuSelectorItem } from '@univerjs/ui';
import type { LocaleKey } from '../locale/types';
import { SlidePageSizePresetEnum } from '@univerjs-pro/slides';
export declare const SLIDE_ZOOM_RATIO_MENU_ID = "slide.menu.zoom-ratio";
export declare function SlidePageSizeMenuItemFactory(accessor: IAccessor): IMenuSelectorItem<LocaleKey, SlidePageSizePresetEnum | undefined, SlidePageSizePresetEnum>;
export declare function SlideFullscreenMenuItemFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey>;
export declare function SlideZoomRatioMenuItemFactory(accessor: IAccessor): IMenuButtonItem<LocaleKey, number>;
