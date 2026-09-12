import type { IPivotTableShowDataAsInfo, PivotShowAsTypeEnum } from '@univerjs-pro/engine-pivot';
import type { PivotShowDataAsBaseItemsRecord } from '../../commands/operations/set-pivot-show-data-as.operation';
export interface IPivotShowDataAsDialogProps {
    unitId: string;
    subUnitId: string;
    pivotTableId: string;
    tableFieldId: string;
    type: PivotShowAsTypeEnum;
    baseItems: PivotShowDataAsBaseItemsRecord;
    onConfirm: (showDataAs: IPivotTableShowDataAsInfo) => Promise<void>;
    onCancel: () => void;
}
export declare function PivotShowDataAsDialog(props: IPivotShowDataAsDialogProps): import("react").JSX.Element;
