import type { IFormulaResultPresentation } from '@univerjs-pro/engine-formula';
import type { IShapeFormulaBinding } from '@univerjs-pro/engine-shape';
import type { IOtherFormulaResult } from '@univerjs/engine-formula';
export type IShapeFormulaPresentation = IFormulaResultPresentation;
export declare function resolveShapeFormulaPresentation(binding: IShapeFormulaBinding, result: IOtherFormulaResult | undefined): IShapeFormulaPresentation;
