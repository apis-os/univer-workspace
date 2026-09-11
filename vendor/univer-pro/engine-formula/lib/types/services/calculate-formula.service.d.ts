import type { IFormulaDatasetConfig } from '@univerjs/engine-formula';
import type { CalcNodeIndex, ICalculationOrderResult, IDynamicResolver } from '../engine/dependency-engine/types';
import type { IFormulaCalculationTree } from '../engine/formula-dependency';
import { IConfigService } from '@univerjs/core';
import { AstTreeBuilder, CalculateFormulaService, IFormulaCurrentConfigService, IFormulaDependencyGenerator, IFormulaExternalReferenceDataLoader, IFormulaRuntimeService, Interpreter, Lexer } from '@univerjs/engine-formula';
export declare class CalculateFormulaProService extends CalculateFormulaService {
    private readonly _externalReferenceDataLoader;
    private _dynamicRuntimeRanges;
    private _runtimeExternalDataLoaded;
    constructor(configService: IConfigService, lexer: Lexer, currentConfigService: IFormulaCurrentConfigService, runtimeService: IFormulaRuntimeService, formulaDependencyGenerator: IFormulaDependencyGenerator, interpreter: Interpreter, astTreeBuilder: AstTreeBuilder, _externalReferenceDataLoader: IFormulaExternalReferenceDataLoader);
    execute(formulaDatasetConfig: IFormulaDatasetConfig): Promise<void>;
    protected _executeStep(cycleReferenceCount?: number): Promise<true | undefined>;
    protected _apply(isArrayFormulaState?: boolean, cycleReferenceCount?: number): Promise<import("@univerjs/engine-formula").IAllRuntimeData | undefined>;
    private _setFormulaExecuteStage;
    private _setTotalFormulasToCalculate;
    private _shouldRescheduleAfterDynamicChange;
    protected _forEachCalculationPlanTree(calculationOrderResult: Pick<ICalculationOrderResult, 'calculationForest'>, dependencyTree: Map<CalcNodeIndex, IFormulaCalculationTree>, cycleReferenceCount: number, visitor: (tree: IFormulaCalculationTree, nodeIndex: CalcNodeIndex, cycleIndex?: number, shouldPreserveCycleTree?: boolean) => Promise<boolean | void>): Promise<void>;
    private _calculationPlanHasSelfReference;
    protected _getCalculationPlanTreeCount(calculationOrderResult: Pick<ICalculationOrderResult, 'calculationForest'>, dependencyTree: Map<CalcNodeIndex, IFormulaCalculationTree>, cycleReferenceCount: number): number;
    protected _getDynamicResolver(): IDynamicResolver | undefined;
    private _refreshDynamicDepsAfterCalculate;
    private _collectAddressFunctionRuntimeReferences;
    private _collectAddressFunctionRuntimeReferencesInternal;
    private _getRangeSignature;
    private _waitForExecutionSlot;
    private _calculateDependencyTree;
    private _setFunctionRefInfoForTree;
    private _getCalculationNodeData;
}
