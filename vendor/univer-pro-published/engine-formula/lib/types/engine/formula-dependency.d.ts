import type { IUnitRange, Nullable } from '@univerjs/core';
import type { BaseAstNode, IFormulaDataItem, IFormulaDependencyTree, IFormulaDependencyTreeJson, IUnitData } from '@univerjs/engine-formula';
import type { IDynamicResolver } from './dependency-engine/types';
import type { ISharedFormulaCompressionMetrics } from './shared-formula-group-analyzer';
import { FormulaDependencyGenerator, FormulaDependencyTree, FormulaDependencyTreeType } from '@univerjs/engine-formula';
export interface IFormulaCalculationTree {
    unitId: string;
    subUnitId: string;
    formula: string;
    row: number;
    column: number;
    rowCount: number;
    columnCount: number;
    refOffsetX: number;
    refOffsetY: number;
    formulaId: Nullable<string>;
    featureId: Nullable<string>;
    getDirtyData: IFormulaDependencyTree['getDirtyData'];
    hasDynamicDeps: boolean;
    rangeList?: IUnitRange[];
    type?: FormulaDependencyTreeType;
}
export interface IFormulaCalculationNodeData {
    node: BaseAstNode;
    refOffsetX: number;
    refOffsetY: number;
}
export declare class FormulaDependencyProGenerator extends FormulaDependencyGenerator {
    private readonly _featureFormulaDirtyDependencies;
    private readonly _calculationTreeCache;
    private _calculationNodeDataCache;
    private readonly _forcedRecalculationNodeIndices;
    private _sharedFormulaCompressionMetrics;
    private _cacheDependencyTreeModelRangeList;
    dispose(): void;
    clearCalculatedDirty(nodeIndices: number[]): void;
    clearCachedCalculationNodeData(): void;
    clearCachedCalculationTree(): void;
    getCachedCalculationNodeData(nodeIndex: number): IFormulaCalculationNodeData | undefined;
    getCalculationOrder(): import("./dependency-engine/types").ICalculationOrderResult;
    getSharedFormulaCompressionMetrics(): ISharedFormulaCompressionMetrics;
    hasDynamicDepsByIndex(nodeIndex: number): boolean;
    refreshDynamicDepsByIndex(nodeIndex: number, resolver: IDynamicResolver): boolean;
    hasUncalculatedDirtyPrecedentByIndex(nodeIndex: number, calculatedNodeIndices: ReadonlySet<number>): boolean;
    getAllDependencyJson(): Promise<IFormulaDependencyTreeJson[]>;
    generatePro(isCalculateTreeModel?: boolean): Promise<{
        calculationOrderResult: import("./dependency-engine/types").ICalculationOrderResult;
        dependencyTree: Map<number, IFormulaCalculationTree>;
    }>;
    /**
     * Generate nodes for the dependency tree, where each node contains all the reference data ranges included in each formula.
     * @param formulaData
     */
    private _generateTreeListPro;
    private _registerFeatureFormulasPro;
    private _getFeatureFormulaTreePro;
    private _registerOtherFormulasPro;
    private _registerFormulasPro;
    private _createSharedFormulaGroupMap;
    private _createSharedFormulaGroupId;
    private _analyzeSharedFormulaCompression;
    private _getSharedFormulaUnsupportedReason;
    private _convertSharedFormulaPatterns;
    private _hasSharedFormulaSelfOverlap;
    private _computeSharedFormulaSourceCoverage;
    private _normalizeSharedFormulaRange;
    private _recordCompressedSharedFormulaGroupMetrics;
    private _recordExpandedSharedFormulaGroupMetrics;
    private _shouldEagerCacheCalculationTrees;
    private _hasAnyDirtyMapValue;
    private _markDirtyDependenciesPro;
    private _markForcedRecalculationNodesPro;
    private _markDirtyDefinedNameDependenciesPro;
    private _markDirtySuperTableDependenciesPro;
    private _cacheCalculationTree;
    private _cacheCompressedVirtualCalculationTree;
    private _getOffsetRangeList;
    private _getAllDependencyJsonPro;
    private _inferDependencyTreeTypePro;
    private _clearCalculationTreeCache;
    private _releaseDependencyTree;
    private _hasDirtyDefinedNames;
    private _syncForcedRecalculationNodeIndex;
    private _hasForcedRecalculationFunction;
    private _detectForcedRecalculationNodePro;
    private _includeDirtyDefinedNamePro;
    private _includeDirtySuperTablePro;
    private _ensureTreeInitializedForDependencies;
    private _getFeatureFormulaDependencyNodes;
    private _rangesIntersectAny;
    private _initialAstNodeAndRanges;
    private _initializeAstNode;
    private _initialDependencyRanges;
    private _tryInitialStaticReferenceRanges;
    private _replaceDoubleQuotedStrings;
    private _replaceQuotedSheetNames;
    private _hasOnlyStaticReferenceSafeIdentifiers;
    private _looksLikeA1ReferenceAt;
    private _looksLikeColumnReferencePart;
    private _isStaticReferenceTokenBoundarySafe;
    private _tryCreateStaticReferenceRange;
    private _tryCreateStaticColumnReferenceRange;
    private _tryExtractStaticOffsetRanges;
    private _hasOnlyStaticOffsetBases;
    private _replaceFunctionFirstArguments;
    private _tryCreateStaticOffsetRange;
    private _tryInferOffsetRowSpan;
    private _tryInferPositiveInteger;
    private _tryParseInteger;
    private _tryParseSingleStaticReference;
    private _extractFunctionCalls;
    private _findMatchingParen;
    private _splitTopLevelArguments;
    private _getStaticReferenceSheetSize;
    private _dedupeStaticReferenceRanges;
    private _columnNameToIndex;
    private _nextNonSpaceChar;
    protected _createFDtree(unitId: string, sheetId: string, row: number, column: number, unitData: IUnitData, formulaDataItem: IFormulaDataItem): FormulaDependencyTree;
}
