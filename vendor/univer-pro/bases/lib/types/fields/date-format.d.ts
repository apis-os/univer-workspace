import type { BaseDateHourCycle, FieldConfig, IBaseDateFieldConfig } from '@univerjs/core';
import { DateSystem } from '@univerjs/core';
/**
 * Canonical date field display config. Date and time options are intentionally
 * independent so consumers can switch between 12-hour and 24-hour time.
 */
export interface IResolvedBaseDateFieldConfig extends IBaseDateFieldConfig {
    pattern: string;
    includeTime: boolean;
    hourCycle: BaseDateHourCycle;
}
export declare function dateToExcelSerial(value: number | Date, dateSystem?: DateSystem): number;
export declare function excelSerialToDateMs(value: number, dateSystem?: DateSystem): number;
export declare function normalizeBaseDateSerial(value: unknown, dateSystem?: DateSystem): number | null;
export declare function baseDateSerialToDateMs(value: unknown, dateSystem?: DateSystem): number | null;
/**
 * Reads a date field config without mutating it. Legacy `format`, `dateFormat`,
 * and date patterns ending in `hh:mm` remain supported.
 */
export declare function resolveBaseDateFieldConfig(config?: FieldConfig | Record<string, unknown>): IResolvedBaseDateFieldConfig;
/**
 * Converts legacy date field config aliases to `pattern`, `includeTime`, and
 * `hourCycle`, while preserving unrelated field settings.
 */
export declare function normalizeBaseDateFieldConfig(config?: FieldConfig | Record<string, unknown>): Record<string, unknown>;
export declare function formatBaseDateValue(value: unknown, config?: FieldConfig | Record<string, unknown>): string;
