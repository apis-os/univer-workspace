import type { IPivotTableCustomFilter, IPivotTableValueFilter } from './types';
import { ST_PivotFilterOperatorEnum } from './types';
export declare function isValueFilterOperator(operator: ST_PivotFilterOperatorEnum): boolean;
export declare function selectValueFilterRankCutoff(values: number[], keepCount: number, isBottom: boolean): number | undefined;
export declare function getFilterExecuteFunc(filterInfo: IPivotTableValueFilter | IPivotTableCustomFilter): (value: number) => boolean;
