import type { IBaseGroupFieldInfo, IBaseGroupFieldJSON, IPivotTableDateGroupInfo, PivotDataFieldTypeEnum } from '../types';
import { DataField } from './data-field';
export declare abstract class BaseGroupField extends DataField {
    protected originalFieldId: string;
    /**
     * Get the current group type
     * @returns {PivotDataFieldTypeEnum} - The group type
     */
    abstract getDataFieldType(): PivotDataFieldTypeEnum;
    abstract getGroupInfo(): IPivotTableDateGroupInfo;
    abstract getOriginFieldId(): string;
    abstract refreshGroupField(originalField: DataField): void;
    getFieldInfo(): IBaseGroupFieldInfo;
    toJSON(): IBaseGroupFieldJSON;
}
