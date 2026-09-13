import type { IDocumentData } from '@univerjs/core';
import { Disposable, IUniverInstanceService } from '@univerjs/core';
import { DocTextResolverService } from '@univerjs/docs';
import { DocFormulaService } from './doc-formula.service';
/**
 * Single display-text authority for non-native Doc Formula consumers.
 *
 * Render, clipboard, search, and screen-reader integrations use the current
 * presentation. External-format projections only consume the persisted
 * lastValue stored in the provided snapshot.
 */
export declare class DocFormulaDisplayTextService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _formulaService;
    constructor(_univerInstanceService: IUniverInstanceService, _formulaService: DocFormulaService, textResolverService: DocTextResolverService);
    resolveFormula(unitId: string, rangeId: string): string;
    /**
     * Resolves a half-open main-body interval to plain text.
     *
     * Structural tokens are preserved for the caller's existing text cleanup;
     * only complete Formula object tokens inside the interval are replaced.
     */
    resolveText(unitId: string, startOffset: number, endOffset: number): string;
    /**
     * Returns a detached snapshot whose Formula objects are formatted text.
     *
     * This external-format projection reads only the persisted lastValue in the
     * provided snapshot. It never triggers calculation or reads a live result.
     * The source snapshot, its native Formula Resource, and Host External
     * Reference Resource remain unchanged.
     */
    degradeDocumentData(documentData: IDocumentData): IDocumentData;
    /**
     * Projects a detached body to display text, optionally using clipboard
     * fallbacks captured while the Source document was available.
     */
    degradeBody(unitId: string, body: NonNullable<IDocumentData['body']>, fallbackText?: Readonly<Record<string, string>>): NonNullable<IDocumentData['body']>;
}
export declare function degradeDocFormulaDocumentData(documentData: IDocumentData): IDocumentData;
