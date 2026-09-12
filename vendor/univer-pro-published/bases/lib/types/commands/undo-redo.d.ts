import type { BaseDataModel, IAccessor, JSONXActions } from '@univerjs/core';
export declare function executeBaseUndoableMutation(accessor: IAccessor, unitId: string, createRedoOp: (base: BaseDataModel) => JSONXActions): boolean;
