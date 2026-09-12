import {
  Component,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LocaleType } from "@univerjs/core";
import { UnitComparisonViewer } from "@univer/unit-comparison-viewer";
import "@univer/unit-comparison-viewer/styles.css";
import { createComparisonUniver } from "../editor/comparison-univer";
import { useI18n } from "../../shared/i18n";
import { useTheme } from "../../shared/theme";
import { Badge, Empty } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  snapshotComparisonRows,
  snapshotComparisonSideLabels,
  worktreeComparisonValue,
  wrapComparisonUniverFactory,
  type WorktreeComparisonPayload,
} from "./snapshot-comparison";

interface SnapshotComparisonViewProps {
  readonly comparison: WorktreeComparisonPayload;
  readonly worktreeName?: string;
  readonly labels?: {
    readonly officialVersion: string;
    readonly agentVersion: string;
  };
}

export function SnapshotComparisonView({
  comparison,
  worktreeName,
  labels,
}: SnapshotComparisonViewProps) {
  const { language, t } = useI18n();
  const { resolvedTheme } = useTheme();
  const [useTable, setUseTable] = useState(false);
  const resolvedLabels = labels ?? snapshotComparisonSideLabels(worktreeName, t);
  const value = worktreeComparisonValue(comparison, resolvedLabels);
  const createUniver = useMemo(
    () =>
      wrapComparisonUniverFactory(createComparisonUniver, () => {
        setUseTable(true);
      }),
    []
  );
  const table = (
    <SnapshotComparisonTable
      result={comparison.result}
      labels={resolvedLabels}
      {...(typeof comparison.left.revision === "number"
        ? { leftRevision: comparison.left.revision }
        : {})}
      {...(typeof comparison.right.revision === "number"
        ? { rightRevision: comparison.right.revision }
        : {})}
    />
  );

  if (useTable) return table;

  return (
    <SnapshotComparisonErrorBoundary fallback={table}>
      <UnitComparisonViewer
        comparison={value}
        createUniver={createUniver}
        locale={language === "zh-CN" ? LocaleType.ZH_CN : LocaleType.EN_US}
        darkMode={resolvedTheme === "dark"}
      />
    </SnapshotComparisonErrorBoundary>
  );
}

function SnapshotComparisonTable({
  result,
  leftRevision,
  rightRevision,
  labels,
}: {
  readonly result: WorktreeComparisonPayload["result"];
  readonly leftRevision?: number;
  readonly rightRevision?: number;
  readonly labels: {
    readonly officialVersion: string;
    readonly agentVersion: string;
  };
}) {
  const { t } = useI18n();
  const rows = snapshotComparisonRows(result);
  const summary = result.summary;

  return (
    <section
      className="flex min-h-0 flex-1 flex-col overflow-hidden p-4"
      data-snapshot-comparison="true"
    >
      <header className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <strong className="font-medium text-foreground">{t("reviewCompare")}</strong>
        {typeof leftRevision === "number" ? (
          <span>
            {labels.officialVersion} r{leftRevision}
          </span>
        ) : null}
        {typeof rightRevision === "number" ? (
          <span>
            {labels.agentVersion} r{rightRevision}
          </span>
        ) : null}
        {summary ? (
          <span>
            {summary.update} {t("documentModified")} · {summary.insert}{" "}
            {t("documentAdded")} · {summary.delete} {t("documentDeleted")}
          </span>
        ) : null}
      </header>
      {rows.length === 0 ? (
        <Empty className="my-auto" title={t("reviewCompare")} />
      ) : (
        <div className="min-h-0 flex-1 overflow-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead className="sticky top-0 bg-surface text-left text-xs tracking-wide text-muted-foreground">
              <tr>
                <th className="px-3 py-2 font-medium">{t("reviewCompare")}</th>
                <th className="px-3 py-2 font-medium">{labels.officialVersion}</th>
                <th className="px-3 py-2 font-medium">{labels.agentVersion}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-border">
                  <td className="px-3 py-2 align-top">
                    <div className="flex flex-wrap items-center gap-2">
                      <code className="text-[13px] font-medium text-foreground">
                        {row.title}
                      </code>
                      <Badge
                        variant={
                          row.kind === "insert"
                            ? "success"
                            : row.kind === "delete"
                              ? "danger"
                              : "brand"
                        }
                      >
                        {row.kind === "insert"
                          ? t("documentAdded")
                          : row.kind === "delete"
                            ? t("documentDeleted")
                            : t("documentModified")}
                      </Badge>
                    </div>
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 align-top whitespace-pre-wrap",
                      row.kind === "insert" && "text-muted-foreground"
                    )}
                  >
                    {row.before || "—"}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 align-top whitespace-pre-wrap",
                      row.kind === "delete" && "text-muted-foreground"
                    )}
                  >
                    {row.after || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

class SnapshotComparisonErrorBoundary extends Component<
  { readonly fallback: ReactNode; readonly children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
