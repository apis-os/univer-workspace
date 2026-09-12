import { Bot, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../../shared/i18n";
import { useMediaQuery } from "../../shared/resizable-sidebar";
import { Button, Spinner, toast } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  activateAgentEditSpotlight,
  activateSpotlightCell,
  replayAgentEditSpotlight,
  spotlightCellsFromDetail,
} from "./agent-edit-spotlight";
import {
  AGENT_PANEL_ID,
  agentErrorMessage,
  agentExamplePrompt,
  agentMuxUrl,
  agentScreenshotCard,
  consumeAgentTurnResponse,
  explainSelectionFromRange,
  gatewayCacheStatus,
  readActiveRangeA1,
  readAgentMuxFrame,
  readJsonBody,
  shouldPostAgentTurn,
  shouldShowLiveAgentTurn,
  suggestionChipsForUnitType,
  truncateGatewayLogId,
  type AgentStreamEvent,
} from "./agent-panel";

interface AgentEvent {
  type: string;
  data: Record<string, unknown>;
}

interface AgentTurn {
  turnId: string;
  prompt: string;
  text: string;
  events: AgentEvent[];
  rev: number | null;
  toolCalls: Array<{ tool: string; args: Record<string, unknown> }>;
  screenshot?: unknown;
}

function dispatchPresence(status: "thinking" | "idle"): void {
  window.dispatchEvent(
    new CustomEvent("workspace-agent-presence", { detail: { status } })
  );
}

function asToolCalls(
  value: unknown
): Array<{ tool: string; args: Record<string, unknown> }> {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const tool = "tool" in item ? String(item.tool ?? "") : "";
    if (!tool) return [];
    const args =
      "args" in item && item.args && typeof item.args === "object"
        ? (item.args as Record<string, unknown>)
        : {};
    return [{ tool, args }];
  });
}

export function AgentCollaborator({
  unitId,
  unitType,
  open,
  onClose,
  onEdited,
  spectator,
}: {
  readonly unitId: string;
  readonly unitType: string;
  readonly open: boolean;
  readonly onClose: () => void;
  readonly spectator?: boolean;
  readonly onEdited?: (detail: {
    readonly unitId: string;
    readonly rev: number | null;
  }) => void;
}) {
  const { t } = useI18n();
  const compactViewport = useMediaQuery("(max-width: 720px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [prompt, setPrompt] = useState("");
  const [pending, setPending] = useState(false);
  const [remoteBusy, setRemoteBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turns, setTurns] = useState<AgentTurn[]>([]);
  const [streamText, setStreamText] = useState("");
  const [streamEvents, setStreamEvents] = useState<AgentEvent[]>([]);
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [skills, setSkills] = useState<Array<{ id: string; name: string }>>([]);
  const [cacheStatus, setCacheStatus] = useState<"HIT" | "MISS">("MISS");
  const [gatewayLogId, setGatewayLogId] = useState("");
  const [spotlightCells, setSpotlightCells] = useState<string[]>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef(false);
  const lastPromptRef = useRef("");
  const lastTurnIdRef = useRef("");
  const streamTextRef = useRef("");
  const streamEventsRef = useRef<AgentEvent[]>([]);
  const suggestions = suggestionChipsForUnitType(unitType);
  const busy = pending || remoteBusy;

  streamTextRef.current = streamText;
  streamEventsRef.current = streamEvents;

  const applyGatewayMeta = (
    meta: Record<string, unknown>,
    usedPrompt: string
  ) => {
    setCacheStatus(gatewayCacheStatus(meta, usedPrompt));
    setGatewayLogId(
      truncateGatewayLogId(
        typeof meta.aiGatewayLogId === "string" ? meta.aiGatewayLogId : null
      )
    );
  };

  useEffect(() => {
    if (!open) return;
    void fetch("/agents/skills", { credentials: "include" })
      .then(async (res) => {
        const body = await readJsonBody(res);
        return Array.isArray(body.skills) ? body.skills : [];
      })
      .then((nextSkills) => {
        setSkills(
          nextSkills.flatMap((skill) => {
            if (!skill || typeof skill !== "object") return [];
            const id = "id" in skill ? String(skill.id ?? "") : "";
            if (!id) return [];
            const name =
              "name" in skill && typeof skill.name === "string" && skill.name
                ? skill.name
                : id;
            return [{ id, name }];
          })
        );
      })
      .catch(() => undefined);
  }, [open]);

  useEffect(() => {
    setTurns([]);
    setError(null);
    setPrompt("");
    setStreamText("");
    setStreamEvents([]);
    setPendingPrompt("");
  }, [unitId]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [turns, pending, streamText, streamEvents]);

  useEffect(() => {
    dispatchPresence(pending || remoteBusy ? "thinking" : "idle");
  }, [pending, remoteBusy]);

  useEffect(() => {
    return () => dispatchPresence("idle");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEdited = (event: Event) => {
      const detail = (event as CustomEvent).detail ?? {};
      const changed = spotlightCellsFromDetail(detail);
      void activateAgentEditSpotlight({
        compact: compactViewport,
        reducedMotion,
        activate: activateSpotlightCell,
      }).then((result) =>
        setSpotlightCells(changed.length ? changed : [...result.cells])
      );
    };
    window.addEventListener("workspace-agent-edited", onEdited);
    return () => window.removeEventListener("workspace-agent-edited", onEdited);
  }, [compactViewport, reducedMotion]);

  useEffect(() => {
    if (!open) return;
    const ws = new WebSocket(agentMuxUrl(unitId));
    ws.addEventListener("message", (event) => {
      if (typeof event.data !== "string") return;
      const frame = readAgentMuxFrame(event.data);
      if (!frame || pendingRef.current) return;
      if (frame.type === "agent.thinking") {
        setRemoteBusy(true);
        return;
      }
      if (frame.type === "agent.token") {
        const next = `${streamTextRef.current}${String(frame.data.delta ?? frame.data.text ?? "")}`;
        streamTextRef.current = next;
        setStreamText(next);
        return;
      }
      if (frame.type === "agent.tool_call_start") {
        const next = [...streamEventsRef.current, frame];
        streamEventsRef.current = next;
        setStreamEvents(next);
        return;
      }
      if (frame.type === "agent.error") {
        setRemoteBusy(false);
        setError(String(frame.data.message ?? t("agentTurnFailed")));
        streamTextRef.current = "";
        streamEventsRef.current = [];
        setStreamText("");
        setStreamEvents([]);
        return;
      }
      if (frame.type === "agent.done") {
        const turnId = String(frame.data.turnId ?? "");
        setRemoteBusy(false);
        if (turnId && turnId === lastTurnIdRef.current) {
          if ("screenshot" in frame.data) {
            setTurns((current) =>
              current.map((turn) =>
                turn.turnId === turnId
                  ? { ...turn, screenshot: frame.data.screenshot }
                  : turn
              )
            );
          }
          applyGatewayMeta(frame.data, lastPromptRef.current);
          return;
        }
        lastTurnIdRef.current = turnId;
        applyGatewayMeta(frame.data, lastPromptRef.current);
        const rev = typeof frame.data.rev === "number" ? frame.data.rev : null;
        const turn: AgentTurn = {
          turnId: turnId || `turn_${crypto.randomUUID()}`,
          prompt: lastPromptRef.current,
          text: streamTextRef.current || String(frame.data.text ?? ""),
          events: streamEventsRef.current,
          rev,
          toolCalls: asToolCalls(frame.data.toolCalls),
          screenshot: frame.data.screenshot,
        };
        setTurns((current) => [...current, turn]);
        streamTextRef.current = "";
        streamEventsRef.current = [];
        setStreamText("");
        setStreamEvents([]);
        window.dispatchEvent(
          new CustomEvent("workspace-agent-edited", {
            detail: { unitId, rev, toolCalls: turn.toolCalls },
          })
        );
      }
    });
    return () => ws.close();
  }, [open, unitId, t]);

  if (!open) return null;

  const submit = async (nextPrompt?: string) => {
    const text = (nextPrompt ?? prompt).trim();
    if (!text || pendingRef.current || !shouldPostAgentTurn(spectator)) return;
    pendingRef.current = true;
    setPending(true);
    setError(null);
    setPrompt("");
    setStreamText("");
    setStreamEvents([]);
    setPendingPrompt(text);
    lastPromptRef.current = text;
    try {
      const res = await fetch(`/agents/${encodeURIComponent(unitId)}/turns`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({ prompt: text }),
      });
      const liveEvents: AgentEvent[] = [];
      const body = await consumeAgentTurnResponse(res, (event: AgentStreamEvent) => {
        liveEvents.push(event);
        setStreamEvents([...liveEvents]);
        if (event.type === "agent.token") {
          setStreamText(
            (current) => `${current}${String(event.data.delta ?? event.data.text ?? "")}`
          );
        }
      });
      if (!res.ok || body.error) {
        throw new Error(agentErrorMessage(body, t("agentTurnFailed")));
      }
      applyGatewayMeta(body, text);
      const turn: AgentTurn = {
        turnId: String(body.turnId ?? `turn_${crypto.randomUUID()}`),
        prompt: String(body.prompt ?? text),
        text: String(body.text ?? ""),
        events: Array.isArray(body.events)
          ? (body.events as AgentEvent[])
          : liveEvents,
        rev: typeof body.rev === "number" ? body.rev : null,
        toolCalls: asToolCalls(body.toolCalls),
        screenshot: body.screenshot,
      } satisfies AgentTurn;
      lastTurnIdRef.current = turn.turnId;
      setTurns((current) => [...current, turn]);
      setStreamText("");
      setStreamEvents([]);
      setPendingPrompt("");
      const detail = {
        unitId,
        rev: turn.rev,
        toolCalls: turn.toolCalls ?? [],
      };
      window.dispatchEvent(
        new CustomEvent("workspace-agent-edited", { detail })
      );
      onEdited?.(detail);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("agentTurnFailed"));
      streamTextRef.current = "";
      streamEventsRef.current = [];
      setPendingPrompt("");
      setStreamText("");
      setStreamEvents([]);
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  };

  const replaySpotlight = () => {
    void replayAgentEditSpotlight({
      compact: compactViewport,
      reducedMotion,
      activate: activateSpotlightCell,
    });
  };

  return (
    <>
      {compactViewport ? (
        <button
          type="button"
          className="absolute inset-0 z-20 cursor-pointer border-0 bg-foreground/25"
          aria-label={t("closeAgent")}
          onClick={onClose}
        />
      ) : null}
      <aside
        id={AGENT_PANEL_ID}
        role="complementary"
        aria-label={t("agentTitle")}
        className={cn(
          "flex h-full w-[min(380px,100%)] shrink-0 flex-col border-l border-border bg-background",
          compactViewport && "absolute inset-y-0 right-0 z-30 shadow-xl"
        )}
      >
        <header className="flex h-12 items-center justify-between gap-2 border-b border-border px-3">
          <div className="flex min-w-0 items-center gap-2">
            <Sparkles className="size-4 text-brand-600" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Q3 Forecast</p>
            </div>
          </div>
          <Button variant="ghost" size="icon-sm" aria-label={t("close")} onClick={onClose}>
            <X />
          </Button>
        </header>
        <div
          ref={listRef}
          aria-live="polite"
          aria-busy={busy}
          className="min-h-0 flex-1 overflow-y-auto px-3 py-3"
        >
          {turns.length === 0 && !pending && !streamText ? (
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>{t("agentIntro")}</p>
              <p className="text-xs">
                {t("agentExamplePrefix")} {agentExamplePrompt(unitType)}
              </p>
              {skills.length > 0 ? (
                <p className="text-[11px]">
                  {t("agentSkillsLabel")}:{" "}
                  {skills.map((skill) => skill.name).join(" · ")}
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="grid gap-3">
            {turns.map((turn) => (
              <article key={turn.turnId} className="grid gap-2">
                {turn.prompt ? (
                  <div className="rounded-lg bg-muted px-3 py-2 text-sm">{turn.prompt}</div>
                ) : null}
                <div className="rounded-lg border border-border px-3 py-2 text-sm">
                  <div className="mb-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Bot className="size-3.5" />
                    {t("agentTitle")}
                    {turn.rev ? ` · rev ${turn.rev}` : ""}
                  </div>
                  {turn.events
                    .filter((event) => event.type === "agent.tool_call_start")
                    .map((event, index) => (
                      <p
                        key={`${turn.turnId}-tool-${index}`}
                        className="mb-1 inline-flex rounded-full bg-muted px-2 py-0.5 text-[11px] text-subtle-foreground"
                      >
                        {String(event.data.tool)}
                      </p>
                    ))}
                  <p className="whitespace-pre-wrap">{turn.text}</p>
                  {(() => {
                    const card = agentScreenshotCard(turn.screenshot);
                    if (card.kind === "image") {
                      return (
                        <img
                          alt="Q3 Forecast after agent fill"
                          src={`data:${card.mediaType};base64,${card.data}`}
                          className="mt-2 max-w-full rounded-md border border-border"
                        />
                      );
                    }
                    if (card.kind === "unavailable") {
                      return (
                        <p className="mt-2 text-[11px] text-muted-foreground">
                          {t("screenshotUnavailable")}
                        </p>
                      );
                    }
                    return null;
                  })()}
                </div>
              </article>
            ))}
            {shouldShowLiveAgentTurn({ pending, streamText, streamEvents }) ? (
              <article className="grid gap-2">
                {pendingPrompt ? (
                  <div className="rounded-lg bg-muted px-3 py-2 text-sm">{pendingPrompt}</div>
                ) : null}
                <div className="rounded-lg border border-border px-3 py-2 text-sm">
                  <div className="mb-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Bot className="size-3.5" />
                    {t("agentTitle")}
                    {pending ? (
                      <>
                        <Spinner className="size-3.5" />
                        {t("agentThinking")}
                      </>
                    ) : null}
                  </div>
                  <div className="mb-1 flex flex-wrap gap-1">
                    {streamEvents
                      .filter((event) => event.type === "agent.tool_call_start")
                      .map((event, index) => (
                        <span
                          key={`live-tool-${index}`}
                          className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-subtle-foreground"
                        >
                          {String(event.data.tool)}
                        </span>
                      ))}
                  </div>
                  <p className="whitespace-pre-wrap">{streamText}</p>
                </div>
              </article>
            ) : null}
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
          </div>
        </div>
        <form
          className="grid gap-2 border-t border-border p-3"
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
        >
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((chip) => (
              <button
                key={chip.id}
                type="button"
                disabled={spectator}
                className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[11px] text-foreground transition-colors hover:border-brand-200 hover:bg-brand-50 disabled:opacity-60"
                onClick={() => {
                  if (chip.id === "explain-selection") {
                    const next = explainSelectionFromRange(readActiveRangeA1());
                    if (next.action === "toast") {
                      toast.info(t("selectARange"));
                      return;
                    }
                    void submit(next.prompt);
                    return;
                  }
                  setPrompt(chip.prompt);
                }}
              >
                {t(chip.labelKey)}
              </button>
            ))}
          </div>
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                void submit();
              }
            }}
            placeholder={t("agentPlaceholder")}
            rows={3}
            disabled={spectator}
            className={cn(
              "w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none",
              "placeholder:text-subtle-foreground focus:border-ring focus:ring-2 focus:ring-ring/25"
            )}
          />
          <div className="flex items-center justify-between gap-2">
            <p className="text-[11px] text-subtle-foreground">{t("agentSendShortcut")}</p>
            <Button type="submit" disabled={spectator || pending || !prompt.trim()}>
              <Send />
              {t("agentSend")}
            </Button>
          </div>
        </form>
        <footer className="grid gap-1.5 border-t border-border px-3 py-2 text-[11px] text-muted-foreground">
          <p>
            {t("agentGateway")}
            {" · "}
            {t(cacheStatus === "HIT" ? "agentCacheHit" : "agentCacheMiss")}
            {gatewayLogId ? ` · ${gatewayLogId}` : ""}
          </p>
          {spotlightCells.length > 0 ? (
            <div className="flex flex-wrap items-center gap-1.5">
              <span>{t("agentChangedCells")}</span>
              {spotlightCells.map((a1) => (
                <button
                  key={a1}
                  type="button"
                  className="rounded-full border border-border px-2 py-0.5 text-[11px] text-foreground"
                  onClick={() => activateSpotlightCell(a1)}
                >
                  {a1}
                </button>
              ))}
              <button
                type="button"
                className="rounded-full border border-brand-200 px-2 py-0.5 text-[11px] text-brand-700"
                onClick={replaySpotlight}
              >
                {t("agentReplay")}
              </button>
            </div>
          ) : null}
        </footer>
      </aside>
    </>
  );
}
