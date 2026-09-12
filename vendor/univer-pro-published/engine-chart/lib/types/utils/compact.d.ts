/** Copies only the top-level container while preserving nested references. */
export declare function shallowClone<T>(value: T): T;
/** Deep-clones a value while removing own properties whose value is undefined. */
export declare function cloneWithoutUndefined<T>(value: T): T;
/** Returns an undefined-free record, or undefined when no fields remain. */
export declare function compactRecord<T extends object>(value: T): T | undefined;
/** Returns a shallow copy without own string fields whose value is undefined. */
export declare function omitUndefinedFields<T extends object>(value: T): T;
/** Deletes own string fields whose value is undefined and preserves object identity. */
export declare function deleteUndefinedFields<T extends object>(target: T): T;
