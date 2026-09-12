import type { IMindMapTreeBlueprint } from '../types';
export type MindMapRepresentationDiagnosticSeverity = 'error' | 'warning';
export interface IMindMapRepresentationDiagnostic {
    severity: MindMapRepresentationDiagnosticSeverity;
    code: string;
    message: string;
}
export interface IParseOpmlToMindMapBlueprintResult {
    blueprint?: IMindMapTreeBlueprint;
    diagnostics: IMindMapRepresentationDiagnostic[];
}
export declare function parseOpmlToMindMapBlueprint(input: string, options?: {
    fileName?: string;
}): IParseOpmlToMindMapBlueprintResult;
export declare function serializeMindMapBlueprintToOpml(blueprint: IMindMapTreeBlueprint): string;
