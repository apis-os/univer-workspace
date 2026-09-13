//#region src/doc-typst-pages.d.ts
type DaCTypstMappingGrade = "native editable" | "approximate editable" | "preserved metadata" | "diagnostic";
interface DaCTypstPreviewArtifactMetadata {
  readonly pageId: string;
  readonly path: string;
  readonly sourcePath: string;
}
interface DaCTypstTranslationDiagnostic {
  readonly fidelityLimit?: string;
  readonly feature?: string;
  readonly mappingGrade?: DaCTypstMappingGrade;
  readonly pageId?: string;
  readonly recommendedNextAction?: string;
  readonly reason: string;
  readonly severity?: "info" | "warning" | "error";
  readonly sourceNodeId?: string;
  readonly sourcePath: string;
  readonly span?: DaCTypstSourceSpan;
  readonly suggestedRewrite?: string;
}
interface DaCTypstSourceSpan {
  readonly column?: number;
  readonly endColumn?: number;
  readonly endLine?: number;
  readonly line?: number;
  readonly offset?: number;
}
declare function createDaCTranslationDiagnostic(diagnostic: DaCTypstTranslationDiagnostic): DaCTypstTranslationDiagnostic;
//#endregion
//#region src/compiler.d.ts
interface DocTypstBundleManifest {
  readonly schemaVersion: 1;
  readonly targetUnitId: string;
  readonly title?: string;
  readonly pages: readonly (string | {
    readonly id?: string;
    readonly source: string;
  })[];
  readonly prelude?: readonly string[];
}
type DocTypstDiagnostic = DaCTypstTranslationDiagnostic;
type DocTypstPreview = DaCTypstPreviewArtifactMetadata;
interface CompileDocTypstBundleOptions {
  readonly previewDir?: string;
}
interface CompileDocTypstBundleResult {
  readonly diagnostics: readonly DocTypstDiagnostic[];
  readonly javascript: string;
  readonly targetUnitId: string;
  readonly title: string;
  readonly previews: readonly DocTypstPreview[];
}
/** Parse and compile the lifecycle-neutral paper/typst.json bundle exactly once. */
declare function compileDocTypstBundle(bundleOrManifestPath: string, options?: CompileDocTypstBundleOptions): Promise<CompileDocTypstBundleResult>;
//#endregion
//#region src/error.d.ts
declare class DocTypstFacadeError extends Error {
  readonly code: string;
  constructor(code: string, message: string);
}
declare function isDocTypstFacadeError(error: unknown): error is DocTypstFacadeError;
//#endregion
//#region src/doc-typst-pages-translator.d.ts
declare class DaCTypstTranslationError extends DocTypstFacadeError {
  readonly diagnostics: readonly ReturnType<typeof createDaCTranslationDiagnostic>[];
  readonly previews: readonly DaCTypstPreviewArtifactMetadata[];
  constructor(message: string, diagnostics: readonly ReturnType<typeof createDaCTranslationDiagnostic>[], previews?: readonly DaCTypstPreviewArtifactMetadata[]);
}
//#endregion
export { type CompileDocTypstBundleOptions, type CompileDocTypstBundleResult, DaCTypstTranslationError, type DocTypstBundleManifest, type DocTypstDiagnostic, DocTypstFacadeError, type DocTypstPreview, compileDocTypstBundle, isDocTypstFacadeError };