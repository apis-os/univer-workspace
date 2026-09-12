export declare const BIDI_ISOLATE_START = "\u2068";
export declare const BIDI_ISOLATE_END = "\u2069";
export declare function hasRTLText(value: unknown): boolean;
export declare function bidiIsolateText(value: unknown): string;
export declare function isolateTextForBidiContext(value: unknown, ...context: unknown[]): string;
