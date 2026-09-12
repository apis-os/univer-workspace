type Defined<T> = Exclude<T, null | undefined>;
export interface IPatchFieldSchema<TState, TPatchValue> {
    clear(current: TState): TState;
    applyValue(current: TState, value: Defined<TPatchValue>): TState;
    composeValue(current: Defined<TPatchValue>, next: Defined<TPatchValue>): Defined<TPatchValue>;
}
export type PatchSchema<TState, TPatch extends object> = {
    [K in keyof TPatch]-?: IPatchFieldSchema<TState, TPatch[K]>;
};
export interface IPatchInterpreter<TState, TPatch extends object> {
    apply(current: TState, patch: TPatch): TState;
    compose(current: TPatch, next: TPatch): TPatch;
}
export declare function replaceField<TState extends object, TKey extends keyof TState>(key: TKey): IPatchFieldSchema<TState, TState[TKey]>;
export declare function nestedField<TState extends object, TKey extends keyof TState, TNestedState extends object, TNestedPatch extends object>(key: TKey, schema: PatchSchema<TNestedState, TNestedPatch>): IPatchFieldSchema<TState, TNestedPatch>;
export declare function createPatchInterpreter<TState, TPatch extends object>(schema: PatchSchema<TState, TPatch>): IPatchInterpreter<TState, TPatch>;
export {};
