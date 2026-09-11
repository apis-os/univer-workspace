import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "../shared/i18n";
import { Alert, LoadingScreen } from "../shared/ui";
import { silentDemoLogin } from "../features/demo/demo-login";
import { readPlaybook, writePlaybook } from "../features/demo/demo-playbook";
import {
  demoLandingHref,
  parseDemoSearch,
  persistDemoLanguage,
} from "../features/demo/demo-search";

export const Route = createFileRoute("/demo")({
  validateSearch: parseDemoSearch,
  component: DemoPage,
});

// /demo?as=jordan&lang=zh-CN&play=1&scene=fill|conflict|review|export
// silent POST login → /nodes/node_welcome_sheet?play=1

function DemoPage() {
  const search = Route.useSearch();
  const { setLanguage, t } = useI18n();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (search.lang) {
      persistDemoLanguage(search.lang);
      setLanguage(search.lang);
    }
    const stored = readPlaybook();
    writePlaybook({ ...stored, enabled: true });
    let cancelled = false;
    void silentDemoLogin(
      search.as === "jordan" ? { as: "jordan" } : {}
    ).then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setError(t("demoLoginFailed"));
        return;
      }
      window.location.assign(
        demoLandingHref(search.scene ? { scene: search.scene } : {})
      );
    });
    return () => {
      cancelled = true;
    };
  }, [search.as, search.lang, search.scene, setLanguage, t]);

  if (error) {
    return (
      <main className="grid min-h-dvh place-items-center px-5">
        <Alert variant="destructive">{error}</Alert>
      </main>
    );
  }
  return <LoadingScreen label={t("demoOpening")} />;
}
