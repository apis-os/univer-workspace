import type { CellValueType } from '@univerjs/core';
/**
 * Minimal snapshot projection of the last successful scalar Formula result.
 *
 * This value is Host content. It intentionally excludes formula text, source bindings,
 * display text, color, timestamps, calculation hashes, and all Source ACL metadata.
 * It inherits only the Host object's persistence and read-permission boundary.
 */
export interface IFormulaLastValue {
    v: string | number | boolean | null;
    t?: CellValueType;
    /** Number format inherited from the successful result cell. */
    pattern?: string;
}
