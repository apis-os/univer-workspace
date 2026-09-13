import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../../shared/i18n";
import { DialogRoot, DialogContent, DialogHeader, DialogTitle, Input } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  bindDemoPaletteOpener,
  demoPaletteItems,
  executePaletteItem,
  isPaletteToggleKey,
  type DemoPaletteActions,
  type DemoPaletteItemId,
} from "./demo-palette";

export function DemoCommandPalette({
  actions,
}: {
  readonly actions: DemoPaletteActions;
}) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState<DemoPaletteItemId | undefined>();
  const items = demoPaletteItems();
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((item) => t(item.labelKey).toLowerCase().includes(needle));
  }, [items, query, t]);

  useEffect(() => {
    const opener = (itemId?: DemoPaletteItemId) => {
      setHighlight(itemId);
      setQuery("");
      setOpen(true);
    };
    bindDemoPaletteOpener(opener);
    return () => bindDemoPaletteOpener(undefined);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isPaletteToggleKey(event)) return;
      event.preventDefault();
      setHighlight(undefined);
      setQuery("");
      setOpen((current) => !current);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const run = (id: DemoPaletteItemId) => {
    setOpen(false);
    executePaletteItem(id, actions);
  };

  return (
    <DialogRoot
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setQuery("");
          setHighlight(undefined);
        }
      }}
    >
      <DialogContent width="md" className="p-4">
        <DialogHeader className="mb-3 pr-8">
          <DialogTitle>{t("demoPaletteTitle")}</DialogTitle>
        </DialogHeader>
        <Input
          autoFocus
          aria-label={t("demoPalettePlaceholder")}
          placeholder={t("demoPalettePlaceholder")}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <ul className="mt-3 grid max-h-80 gap-0.5 overflow-y-auto">
          {filtered.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                autoFocus={highlight === item.id}
                className={cn(
                  "flex w-full cursor-pointer items-center rounded-md px-2.5 py-2 text-left text-sm",
                  "hover:bg-accent hover:text-accent-foreground",
                  highlight === item.id && "bg-accent text-accent-foreground"
                )}
                onClick={() => run(item.id)}
              >
                {t(item.labelKey)}
              </button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </DialogRoot>
  );
}
