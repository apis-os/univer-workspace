import { Popover as BasePopover } from "@base-ui/react/popover";
import type { ReactElement } from "react";
import { cn } from "../../shared/utils/cn";

export interface PresenceLegendItem {
  readonly id: string;
  readonly label: string;
  readonly hint?: string;
  readonly dashed?: boolean;
  readonly muted?: boolean;
  readonly thinking?: boolean;
  readonly ringClassName: string;
}

export function PresenceLegend({
  title,
  items,
  children,
}: {
  readonly title: string;
  readonly items: readonly PresenceLegendItem[];
  readonly children: ReactElement;
}) {
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
            <ul className="grid gap-0.5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-secondary-foreground",
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
              ))}
            </ul>
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
