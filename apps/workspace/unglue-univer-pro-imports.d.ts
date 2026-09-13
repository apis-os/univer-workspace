import type { Plugin } from "vite";

export function unglueUniverProReservedImports(code: string): string;
export function isUniverProModule(id: string): boolean;
export function proPackageName(id: string): string;
export function shouldStubBrokenProIndex(id: string): boolean;
export function stubProModuleFromExportList(code: string): string;
export function unglueUniverProImportsPlugin(): Plugin;
