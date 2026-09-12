import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "../../shared/i18n";
import { Button, ConfirmDialog, Empty, toast } from "../../shared/ui";
import { SnapshotComparisonView } from "../worktrees/snapshot-comparison-view";
import {
  DEMO_UNIVER_FILE,
  mergeWhatIfOnTrunk,
  WHAT_IF_WORKTREE_NAME,
} from "./demo-what-if";
import {
  clearDemoComparison,
  readDemoComparison,
  type DemoComparisonKind,
} from "./demo-comparison-session";

export function DemoComparisonPage({
  demo,
}: {
  readonly demo: DemoComparisonKind;
}) {
  const { t } = useI18n();
  const navigate = useNavigate();
  const session = readDemoComparison();
  const [merging, setMerging] = useState(false);
  const comparison = session?.comparison;
  const kind = session?.kind ?? demo;

  if (!comparison) {
    return (
      <Empty
        className="my-auto"
        title={t("reviewCompare")}
        description={t("reviewDocumentNotFound")}
      />
    );
  }

  const worktreeName =
    session.worktreeName ??
    (kind === "what-if" ? WHAT_IF_WORKTREE_NAME : undefined);

  const onMerge = async () => {
    setMerging(true);
    try {
      await mergeWhatIfOnTrunk(globalThis.fetch.bind(globalThis));
      clearDemoComparison();
      toast.success(t("confirmMerge"));
      void navigate({ to: "/demo" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : t("demoWhatIfError")
      );
    } finally {
      setMerging(false);
    }
  };

  return (
    <article
      className="flex h-full min-h-0 flex-col"
      data-demo="comparison"
      data-demo-comparison={kind}
    >
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-medium text-foreground">
            {kind === "what-if"
              ? WHAT_IF_WORKTREE_NAME
              : t("comparisonHistory")}
          </h1>
          <p className="truncate text-xs text-muted-foreground">
            {kind === "history"
              ? (comparison.left as { label?: string }).label
              : DEMO_UNIVER_FILE}
          </p>
        </div>
        {kind === "what-if" ? (
          <ConfirmDialog
            title={t("mergeConfirm")}
            description="Demo apply of +10% Sep to the live sheet (not a worktree /merge)."
            confirmText={t("confirmMerge")}
            cancelText={t("cancel")}
            disabled={merging}
            onConfirm={() => {
              void onMerge();
            }}
            trigger={
              <Button
                size="sm"
                data-demo="confirm-merge"
                data-demo-merge="trunk-execute"
                disabled={merging}
              >
                <CheckCircle2 />
                {t("confirmMerge")}
              </Button>
            }
          />
        ) : null}
      </header>
      <SnapshotComparisonView
        comparison={comparison}
        {...(worktreeName === undefined ? {} : { worktreeName })}
      />
    </article>
  );
}
