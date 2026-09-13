import type { IBoardConnectorPoint } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
import type { IBoardRect } from './board-container-transform.util';
export type BoardLayoutEvidenceSource = 'model' | 'rendered';
export type BoardLayoutIssueRule = 'element-overlap' | 'connector-through-element' | 'connector-collinear-overlap' | 'connector-crossing' | 'connector-free-endpoint-near-element' | 'connector-free-endpoint-near-dashed-connector' | 'connector-marker-target-overlap' | 'connector-marker-corner-overlap' | 'connector-marker-collision' | 'connector-label-overflow' | 'connector-label-layout-unresolved' | 'connector-label-collision' | 'connector-label-endpoint-constrained' | 'connector-terminal-direction-reversed' | 'connector-excessive-detour' | 'connector-terminal-stem-too-short' | 'connector-terminal-dash-discontinuity';
export type BoardLayoutIssueSeverity = 'error' | 'warning';
export type BoardLayoutSuggestedAction = 'bind-connector-endpoint' | 'replace-dashed-connector-with-sequence-lifeline';
export interface IBoardLayoutResolvedRoute {
    connectorId: string;
    points: IBoardConnectorPoint[];
    resolved: boolean;
}
export interface IBoardLayoutIssue {
    id: string;
    rule: BoardLayoutIssueRule;
    severity: BoardLayoutIssueSeverity;
    elementIds: string[];
    connectorIds: string[];
    /** Stable connector-local label IDs for label-specific issues. */
    labelIds?: string[];
    bounds: IBoardRect;
    focusBounds: IBoardRect;
    routePoints?: IBoardConnectorPoint[];
    endpoint?: 'start' | 'end';
    suggestedAction?: BoardLayoutSuggestedAction;
}
export interface IBoardLayoutAnalysisSummary {
    errorCount: number;
    warningCount: number;
    unresolvedConnectorCount: number;
}
export interface IBoardLayoutAnalysisResult {
    source: BoardLayoutEvidenceSource;
    contentBounds: IBoardRect | null;
    routes: IBoardLayoutResolvedRoute[];
    issues: IBoardLayoutIssue[];
    summary: IBoardLayoutAnalysisSummary;
}
export interface IAnalyzeBoardLayoutOptions {
    source?: BoardLayoutEvidenceSource;
    focusPadding?: number;
    endpointSnapThreshold?: number;
    resolvedRoutes?: Readonly<Record<string, readonly IBoardConnectorPoint[]>>;
}
export declare function analyzeBoardLayout(elementData: Readonly<Record<string, IBoardElementData>>, elementOrder: readonly string[], options?: IAnalyzeBoardLayoutOptions): IBoardLayoutAnalysisResult;
