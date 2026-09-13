import type { BaseFieldStatType } from '@univerjs-pro/bases';
import type { BaseDataModel, IBaseConditionalColorRule, IBaseRect, IFieldSnapshot, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
import type { IBaseFieldConfigSubmitInput, IBaseFieldTypeCatalogItem, IBaseFormulaTableItem, IBaseMenuFieldItem } from '../../components/panels/field-config/field-config-model';
import type { LocaleKey } from '../../locale/types';
import type { IBaseContextMenuState, IBaseToolbarPanelState } from '../../services/base-ui-state.types';
import type { IBaseFloatingPanelStyle } from './floating-panel-types';
export declare const FIELD_TYPE_CATALOG_DEFINITIONS: Array<Omit<IBaseFieldTypeCatalogItem, 'name'> & {
    localeKey: LocaleKey;
}>;
export declare function toMenuFields(table: ITableSnapshot, view: IViewSnapshot): IBaseMenuFieldItem[];
export declare function toFormulaMenuTables(snapshot: ReturnType<BaseDataModel['getSnapshot']>, currentTable: ITableSnapshot, currentView: IViewSnapshot): IBaseFormulaTableItem[];
export declare function isUserVisibleBaseField(field: IFieldSnapshot): boolean;
export declare function isBaseMenuGroupableField(field: IBaseMenuFieldItem): boolean;
export declare function normalizeConditionalColoringConfig(value: unknown): IBaseConditionalColorRule[];
export declare function normalizeFieldStatsConfig(value: unknown): Record<string, BaseFieldStatType>;
export declare function fieldStatOptions(field: IFieldSnapshot): Array<{
    type: string;
    label: LocaleKey;
}>;
export declare function nextFieldStatsConfig(current: unknown, fieldId: string, statType: string): Record<string, BaseFieldStatType>;
export declare function isToolbarPanelAnchoredToToolbar(panel: IBaseToolbarPanelState): boolean;
export declare function toFloatingAnchor(anchor?: IBaseRect): {
    left: number;
    top: number;
    width: number;
    height: number;
} | undefined;
export declare function menuStyle(anchor?: IBaseRect, menuId?: IBaseToolbarPanelState['type'] | IBaseContextMenuState['type'], payload?: Record<string, unknown>, table?: ITableSnapshot): IBaseFloatingPanelStyle;
export declare function fieldConfigMenuStyle(anchor: IBaseRect): IBaseFloatingPanelStyle;
export declare function createField(input: IBaseFieldConfigSubmitInput): IFieldSnapshot;
export declare function createCurrentViewIndexPayload(viewId: string, viewIndex: number | undefined): Record<string, number> | undefined;
export declare function systemFieldState(type: IFieldSnapshot['type']): Pick<IFieldSnapshot, 'readonly' | 'system'>;
export declare function duplicateView(view: IViewSnapshot, tableId: string, copySuffix: string): IViewSnapshot;
