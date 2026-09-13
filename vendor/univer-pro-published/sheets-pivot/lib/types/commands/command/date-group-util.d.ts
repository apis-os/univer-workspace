import type { IFieldsCollectionJSON, IPivotTableSnapshot } from '@univerjs-pro/engine-pivot';
import { PivotDateGroupFieldDateTypeEnum, PivotTableFiledAreaEnum } from '@univerjs-pro/engine-pivot';
export declare const PIVOT_DATE_GROUP_TYPES: PivotDateGroupFieldDateTypeEnum[];
export interface IPivotDateGroupContext {
    kind: 'source-date' | 'date-group';
    area: PivotTableFiledAreaEnum.Row | PivotTableFiledAreaEnum.Column;
    tableFieldId: string;
    dataFieldId: string;
    originalDataFieldId: string;
    currentDateType?: PivotDateGroupFieldDateTypeEnum;
    siblingDateTypes: PivotDateGroupFieldDateTypeEnum[];
    insertIndex: number;
}
export declare function getPivotDateGroupContext(fieldsConfig: IPivotTableSnapshot | undefined, collection: IFieldsCollectionJSON | undefined, tableFieldId: string): IPivotDateGroupContext | undefined;
export declare function isPivotDateGroupTypeDisabled(context: IPivotDateGroupContext, dateType: PivotDateGroupFieldDateTypeEnum): boolean;
