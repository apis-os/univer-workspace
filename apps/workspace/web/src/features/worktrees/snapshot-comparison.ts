import type {
  IUnitComparisonUniverFactoryOptions,
  UnitComparisonUniverFactory,
  UnitComparisonViewerValue,
} from "@univer/unit-comparison-viewer";

export interface SnapshotComparisonChange {
  readonly before?: unknown;
  readonly after?: unknown;
}

export interface SnapshotComparisonItem {
  readonly id: string;
  readonly kind: "insert" | "delete" | "update";
  readonly entityType?: string;
  readonly title: string;
  readonly changes?: readonly SnapshotComparisonChange[];
}

export interface SnapshotComparisonRow {
  readonly id: string;
  readonly kind: SnapshotComparisonItem["kind"];
  readonly entityType: string;
  readonly title: string;
  readonly before: string;
  readonly after: string;
}

export function snapshotComparisonRows(result: {
  readonly items?: readonly SnapshotComparisonItem[];
}): SnapshotComparisonRow[] {
  return (result.items ?? []).map((item) => ({
    id: item.id,
    kind: item.kind,
    entityType: item.entityType || "cell",
    title: item.title,
    before: displayComparisonValue(item.changes?.[0]?.before),
    after: displayComparisonValue(item.changes?.[0]?.after),
  }));
}

export function displayComparisonValue(value: unknown): string {
  if (value == null) return "";
  return typeof value === "string" ? value : JSON.stringify(value);
}

export interface WorktreeComparisonPayload {
  readonly result: UnitComparisonViewerValue["result"];
  readonly left: {
    readonly revision?: number;
    readonly unitData: unknown | null;
  };
  readonly right: {
    readonly revision?: number;
    readonly unitData: unknown | null;
  };
}

export const WHAT_IF_WORKTREE_NAME = "What-if +10% Sep";

import { isAgentDraftWorktreeName } from "../demo/demo-agent-draft";

export function isWhatIfWorktreeName(name: string | undefined): boolean {
  return name === WHAT_IF_WORKTREE_NAME;
}

export function snapshotComparisonSideLabels(
  worktreeName: string | undefined,
  t: (
    key:
      | "officialVersion"
      | "agentVersion"
      | "comparisonOfficial"
      | "comparisonWhatIf"
      | "comparisonAgentDraft"
  ) => string
): {
  readonly officialVersion: string;
  readonly agentVersion: string;
} {
  if (isWhatIfWorktreeName(worktreeName)) {
    return {
      officialVersion: t("comparisonOfficial"),
      agentVersion: t("comparisonWhatIf"),
    };
  }
  if (isAgentDraftWorktreeName(worktreeName)) {
    return {
      officialVersion: t("comparisonOfficial"),
      agentVersion: t("comparisonAgentDraft"),
    };
  }
  return {
    officialVersion: t("officialVersion"),
    agentVersion: t("agentVersion"),
  };
}

export function worktreeComparisonValue(
  payload: WorktreeComparisonPayload,
  labels: {
    readonly officialVersion: string;
    readonly agentVersion: string;
  }
): UnitComparisonViewerValue {
  return {
    result: payload.result,
    left: {
      ...payload.left,
      label: labels.officialVersion,
    },
    right: {
      ...payload.right,
      label: labels.agentVersion,
    },
  } as UnitComparisonViewerValue;
}

export type SnapshotComparisonPresentation<TInstance> =
  | { readonly kind: "native"; readonly instance: TInstance }
  | { readonly kind: "table" };

export async function presentComparisonUniver<TInstance>(
  createUniver: (
    options: IUnitComparisonUniverFactoryOptions
  ) => Promise<TInstance>,
  options: IUnitComparisonUniverFactoryOptions
): Promise<SnapshotComparisonPresentation<TInstance>> {
  try {
    return { kind: "native", instance: await createUniver(options) };
  } catch {
    return { kind: "table" };
  }
}

export function wrapComparisonUniverFactory(
  createUniver: UnitComparisonUniverFactory,
  onTableFallback: () => void
): UnitComparisonUniverFactory {
  return async (options) => {
    const presented = await presentComparisonUniver(createUniver, options);
    if (presented.kind === "table") {
      onTableFallback();
      throw new Error("Comparison Univer factory failed");
    }
    return presented.instance;
  };
}
