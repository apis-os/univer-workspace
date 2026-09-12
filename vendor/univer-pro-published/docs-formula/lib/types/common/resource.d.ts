import type { IFormulaLastValue } from '@univerjs-pro/engine-formula';
import type { IDocFormulaConfig, IDocFormulaResource } from './type';
export declare function createEmptyDocFormulaResource(): IDocFormulaResource;
export declare function isDocFormulaResource(value: unknown): value is IDocFormulaResource;
export declare function isDocFormulaConfig(value: unknown): value is IDocFormulaConfig;
export declare function isFormulaLastValue(value: unknown): value is IFormulaLastValue;
