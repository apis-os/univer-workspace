import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ReactElement } from "react";
import { useI18n } from "../../shared/i18n";
import { cn } from "../../shared/utils/cn";

export type PresenceLegendAction = "jordan" | "follow-agent" | "present" | "blame" | "draft";

export interface PresenceLegendItem {
  readonly id: string;
  readonly label: string;
  readonly hint?: string;
  readonly dashed?: boolean;
  readonly muted?: boolean;
  readonly thinking?: boolean;
  readonly ringClassName: string;
  readonly action?: PresenceLegendAction;
  readonly onAction?: () => void;
}

export function PresenceLegend({
  title,
  items,
  children,
  onItemAction,
  onToggleBlame,
  onDraftFill,
}: {
  readonly title: string;
  readonly items: readonly PresenceLegendItem[];
  readonly children: ReactElement;
  readonly onItemAction?: (action: PresenceLegendAction) => void;
  readonly onToggleBlame?: () => void;
  readonly onDraftFill?: () => void;
}) {
  const { t } = useI18n();
  return (
    <BasePopover.Root>
      <BasePopover.Trigger render={children} nativeButton={false} />
      <BasePopover.Portal>
        <BasePopover.Positioner
          side="bottom"
          align="end"
          sideOffset={8}
          className="z-50"
        >
          <BasePopover.Popup
            className={cn(
              "min-w-52 origin-[var(--transform-origin)] rounded-lg border border-border bg-background p-2 shadow-pop outline-none",
              "transition-[scale,opacity] duration-100 ease-out",
              "data-ending-style:scale-[0.97] data-ending-style:opacity-0",
              "data-starting-style:scale-[0.97] data-starting-style:opacity-0"
            )}
          >
            <BasePopover.Title className="px-2 pt-1 pb-1.5 text-xs font-medium text-subtle-foreground">
              {title}
            </BasePopover.Title>
            <ul className="grid gap-0.5" role="menu">
              {items.map((item) => {
                const clickable = Boolean(item.action || item.onAction);
                return (
                  <li
                    key={item.id}
                    role={clickable ? "menuitem" : undefined}
                    tabIndex={clickable ? 0 : undefined}
                    onClick={() => {
                      item.onAction?.();
                      if (item.action) {
                        onItemAction?.(item.action);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (clickable && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        item.onAction?.();
                        if (item.action) {
                          onItemAction?.(item.action);
                        }
                      }
                    }}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-secondary-foreground",
                      clickable &&
                        "cursor-pointer hover:bg-accent focus-visible:bg-accent focus-visible:outline-none",
                      item.muted && "opacity-50"
                    )}
                  >
                    <span
                      className={cn(
                        "size-2.5 shrink-0 rounded-full",
                        item.dashed
                          ? undefined
                          : "ring-2 ring-offset-1 ring-offset-background",
                        item.ringClassName
                      )}
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {item.hint ? (
                      <span className="text-xs text-subtle-foreground">
                        {item.hint}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
            <div className="mt-1 border-t border-border pt-1">
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onToggleBlame?.();
                  onItemAction?.("blame");
                }}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-secondary-foreground hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
              >
                <span className="size-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
                <span className="min-w-0 flex-1 truncate text-left">
                  {t("legendBlameHeat")}
                </span>
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onDraftFill?.();
                  onItemAction?.("draft");
                }}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-xs text-secondary-foreground hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
              >
                <span className="size-2 shrink-0 rounded-full bg-blue-500" aria-hidden />
                <span className="min-w-0 flex-1 truncate text-left">
                  {t("legendDraftFill")}
                </span>
              </button>
            </div>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
