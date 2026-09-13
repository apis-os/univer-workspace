import type { FormulaSequenceNode } from '@univerjs/engine-formula';
import type { HostExternalReferenceBindingResult, IHostExternalReference } from '../models/host-external-reference.model';
export type HostFormulaExternalReferenceResolution = {
    status: 'resolved';
    references: readonly IHostExternalReference[];
} | {
    status: 'missing' | 'ambiguous';
    qualifier: string;
};
export declare function collectFormulaExternalReferenceQualifiers(sequenceNodes: FormulaSequenceNode[]): string[];
export declare function resolveHostFormulaExternalReferences(options: {
    qualifiers: readonly string[];
    explicitReferences: readonly IHostExternalReference[];
    resolveBinding: (qualifier: string) => HostExternalReferenceBindingResult;
}): HostFormulaExternalReferenceResolution;
