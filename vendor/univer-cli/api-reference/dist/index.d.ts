//#region src/index.d.ts
declare const API_REFERENCE_UNITS: readonly ["sheet", "slide", "doc", "base", "board"];
type ApiReferenceUnit = (typeof API_REFERENCE_UNITS)[number];
type ApiReferenceMemberKind = "method" | "getter" | "property" | "function-property";
type ApiReferenceMemberRelation = "own" | "inherited" | "composed";
type ApiReferenceTypeKind = "interface" | "enum" | "alias";
interface ApiReferenceDocumentationTag {
  readonly name: string;
  readonly subject?: string;
  readonly type?: string;
  readonly text: string;
}
interface ApiReferenceDocumentation {
  readonly description: string;
  readonly tags: readonly ApiReferenceDocumentationTag[];
}
interface ApiReferenceMember {
  readonly packageName: string;
  readonly owner: string;
  readonly kind: ApiReferenceMemberKind;
  readonly readonly?: boolean;
  readonly name: string;
  readonly signature: string;
  readonly summary: string;
  readonly example: string;
  readonly documentation?: ApiReferenceDocumentation;
}
interface ApiReferenceTypeMember {
  readonly name: string;
  readonly optional?: boolean;
  readonly type: string;
  readonly declaration?: string;
  readonly summary?: string;
  readonly documentation?: ApiReferenceDocumentation;
}
interface ApiReferenceType {
  readonly kind: ApiReferenceTypeKind;
  readonly packageName: string;
  readonly name: string;
  readonly declaration?: string;
  readonly summary: string;
  readonly documentation?: ApiReferenceDocumentation;
  readonly members?: readonly ApiReferenceTypeMember[];
  readonly values?: readonly {
    readonly name: string;
    readonly value: string | number;
  }[];
  readonly definition?: string;
  readonly extends?: string;
  readonly aliases?: readonly string[];
  readonly signatures?: readonly string[];
}
interface FindApiReferencesInput {
  readonly terms: readonly string[];
  readonly unit?: ApiReferenceUnit;
  readonly limit?: number;
}
interface ApiReferenceFindMatch {
  readonly kind: ApiReferenceMemberKind | ApiReferenceTypeKind | "field";
  readonly label: string;
  readonly signature: string;
  readonly summary: string;
  readonly packageName: string;
  readonly score: number;
}
interface ApiReferenceFindTermResult {
  readonly term: string;
  readonly matches: readonly ApiReferenceFindMatch[];
  readonly totalMatches: number;
}
interface ApiReferenceMemberGroup {
  readonly owner: string;
  readonly relation: ApiReferenceMemberRelation;
  readonly members: readonly ApiReferenceMember[];
}
interface ApiReferenceClassResult {
  readonly status: "found";
  readonly kind: "class";
  readonly query: string;
  readonly name: string;
  readonly packageName: string;
  readonly declarationKind: "class" | "alias";
  readonly declaration: string;
  readonly documentation?: ApiReferenceDocumentation;
  readonly lineage: readonly string[];
  readonly composes: readonly string[];
  readonly groups: readonly ApiReferenceMemberGroup[];
}
interface ApiReferenceMemberResultEntry {
  readonly member: ApiReferenceMember;
  readonly relation: ApiReferenceMemberRelation;
  readonly relationOwner: string;
  readonly appendix: readonly ApiReferenceType[];
}
interface ApiReferenceMemberResult {
  readonly status: "found";
  readonly kind: "member";
  readonly query: string;
  readonly target: string;
  readonly entries: readonly ApiReferenceMemberResultEntry[];
}
interface ApiReferenceTypeResult {
  readonly status: "found";
  readonly kind: "type";
  readonly query: string;
  readonly type: ApiReferenceType;
  readonly inherited: readonly ApiReferenceType[];
  readonly appendix: readonly ApiReferenceType[];
}
interface ApiReferenceTypeMemberResult {
  readonly status: "found";
  readonly kind: "type-member";
  readonly query: string;
  readonly declaredBy: ApiReferenceType;
  readonly requestedType: ApiReferenceType;
  readonly member: ApiReferenceTypeMember | {
    readonly name: string;
    readonly value: string | number;
  };
  readonly appendix: readonly ApiReferenceType[];
}
interface ApiReferenceNotFoundResult {
  readonly status: "not-found";
  readonly kind: "symbol" | "member";
  readonly query: string;
  readonly owner?: string;
  readonly member?: string;
  readonly suggestions: readonly string[];
}
type ApiReferenceShowResult = ApiReferenceClassResult | ApiReferenceMemberResult | ApiReferenceTypeResult | ApiReferenceTypeMemberResult | ApiReferenceNotFoundResult;
interface ApiReference {
  find(input: FindApiReferencesInput): readonly ApiReferenceFindTermResult[];
  show(symbols: readonly string[]): readonly ApiReferenceShowResult[];
}
declare class ApiReferenceArtifactError extends Error {
  constructor(message: string, options?: ErrorOptions);
}
declare function loadApiReferenceArtifact(serialized: string): ApiReference;
declare function createStandardApiReference(): ApiReference;
//#endregion
export { API_REFERENCE_UNITS, ApiReference, ApiReferenceArtifactError, ApiReferenceClassResult, ApiReferenceDocumentation, ApiReferenceDocumentationTag, ApiReferenceFindMatch, ApiReferenceFindTermResult, ApiReferenceMember, ApiReferenceMemberGroup, ApiReferenceMemberKind, ApiReferenceMemberRelation, ApiReferenceMemberResult, ApiReferenceMemberResultEntry, ApiReferenceNotFoundResult, ApiReferenceShowResult, ApiReferenceType, ApiReferenceTypeKind, ApiReferenceTypeMember, ApiReferenceTypeMemberResult, ApiReferenceTypeResult, ApiReferenceUnit, FindApiReferencesInput, createStandardApiReference, loadApiReferenceArtifact };