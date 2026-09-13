import type { IOtherFormulaResult } from '@univerjs/engine-formula';
import { LexerTreeBuilder } from '@univerjs/engine-formula';
export type FormulaCacheIneligibleReason = 'not-successful' | 'volatile';
export interface IFormulaCacheEligibility {
    eligible: boolean;
    reason?: FormulaCacheIneligibleReason;
}
/**
 * Central Formula-engine authority for last-value cache eligibility.
 *
 * Volatility is derived from parsed Formula nodes, never function-name substrings
 * or rendered error text. Availability is represented by the structured result status.
 */
export declare class FormulaCacheEligibilityService {
    private readonly _lexerTreeBuilder;
    constructor(_lexerTreeBuilder: LexerTreeBuilder);
    assess(formula: string, result: IOtherFormulaResult | undefined): IFormulaCacheEligibility;
}
