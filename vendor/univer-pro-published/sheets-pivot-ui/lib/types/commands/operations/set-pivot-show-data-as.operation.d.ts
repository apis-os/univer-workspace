import type { IFieldsCollectionJSON, IPivotTableShowDataAsInfo, PivotDataFieldDataTypeEnum } from '@univerjs-pro/engine-pivot';
import type { IPivotPanelSourceList, IPivotPanelTableListItemBase, IPivotTableConfig } from '@univerjs-pro/sheets-pivot';
import type { IAccessor, ICommand } from '@univerjs/core';
import { PivotShowAsTypeEnum } from '@univerjs-pro/engine-pivot';
import type { LocaleKey } from '../../locale/types';
export type PivotShowDataAsBaseItemMode = 'none' | 'item' | 'item-or-relative';
export interface IPivotShowDataAsRule {
    type: PivotShowAsTypeEnum;
    localeKey: Extract<LocaleKey, `sheets-pivot-ui.showValuesAs.${string}`>;
    requiresParameters: boolean;
    baseItemMode?: PivotShowDataAsBaseItemMode;
    parentFieldOnly?: boolean;
}
export interface IPivotShowDataAsBaseItems {
    items: string[];
    itemTypes: PivotDataFieldDataTypeEnum[];
    format?: string;
}
export type PivotShowDataAsBaseItemsRecord = Record<string, IPivotShowDataAsBaseItems>;
export declare const PIVOT_SHOW_DATA_AS_RULES: IPivotShowDataAsRule[];
export interface ISetPivotShowDataAsOperationParams {
    type: PivotShowAsTypeEnum;
}
export interface IPivotShowDataAsMenuContext {
    unitId: string;
    subUnitId: string;
    pivotTableId: string;
    tableFieldId: string;
    currentShowDataAs: IPivotTableShowDataAsInfo;
    tableFieldInfo: IPivotPanelTableListItemBase;
    dataFieldInfo: IPivotPanelSourceList;
}
export declare const SetPivotShowDataAsOperation: ICommand<ISetPivotShowDataAsOperationParams>;
export declare function getPivotShowDataAsBaseFieldIds(config: IPivotTableConfig, collection: IFieldsCollectionJSON, rule: IPivotShowDataAsRule): string[];
export declare function getPivotShowDataAsMenuContext(accessor: IAccessor): IPivotShowDataAsMenuContext | undefined;
