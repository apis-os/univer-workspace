import type { LocaleService } from '@univerjs/core';
import type { LocaleKey } from '../../locale/types';
import type { IBaseViewUIRegistryService } from '../../services/base-view-ui-registry.service';
import { BaseViewType } from '@univerjs/core';
export declare function createDefaultViewName(localeService: LocaleService, type: BaseViewType, viewUIRegistry?: IBaseViewUIRegistryService): string;
export declare const BASE_VIEW_MENU_ITEMS: Array<{
    type: BaseViewType;
    label: LocaleKey;
    description: LocaleKey;
}>;
