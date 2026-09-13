import type { IMember } from "@univerjs/protocol";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "../../shared/i18n";
import { useMediaQuery } from "../../shared/resizable-sidebar";
import { Avatar, Tooltip, toast } from "../../shared/ui";
import { cn } from "../../shared/utils/cn";
import {
  dispatchDemoScene,
  focusAgentFillChip,
  jordanDemoUrl,
  openAgentPanelFromHeader,
} from "../demo/demo-scenes";
import { followAgentCommand } from "./follow-agent";
import { BLAME_HEAT_EVENT } from "./ot-blame-heat";
import { PresenceLegend, type PresenceLegendAction } from "./presence-legend";
import {
  composePresenceRoster,
  isBotCollaborator,
  presenceRingClassName,
  readAgentPresenceStatus,
  shouldPulseBot,
  type PresenceSeat,
} from "./presence-roster";

const VISIBLE_MEMBERS = 4;

export type CollaboratorMember = IMember & { readonly color?: string };

export function CollaboratorAvatars({
  members,
  currentUserId,
  currentUserName,
  currentUserAvatar,
}: {
  readonly members: readonly CollaboratorMember[];
  readonly currentUserId: string;
  readonly currentUserName?: string;
  readonly currentUserAvatar?: string | null;
}) {
  const { t } = useI18n();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [agentStatus, setAgentStatus] = useState<"thinking" | "idle">("idle");
  useEffect(() => {
    const onPresence = (event: Event) => {
      const status = readAgentPresenceStatus({
        type: event.type,
        detail: (event as CustomEvent<{ status?: unknown }>).detail,
      });
      if (status) setAgentStatus(status);
    };
    window.addEventListener("workspace-agent-presence", onPresence);
    return () =>
      window.removeEventListener("workspace-agent-presence", onPresence);
  }, []);

  const seats = composePresenceRoster({
    members,
    currentUserId,
    currentUserName,
    ...(currentUserAvatar ? { currentUserAvatar } : {}),
  });
  const seatLabel = (seat: PresenceSeat) => {
    if (seat.kind === "ghost") return t("waitingForJordan");
    if (seat.userID === currentUserId) {
      return t("collaboratorYou", { name: seat.name });
    }
    return seat.name;
  };
  const overflow = seats.slice(VISIBLE_MEMBERS);
  const onlineLabel = t("collaboratorsOnline", { count: seats.length });

  const handleLegendAction = (action: PresenceLegendAction) => {
    if (action === "jordan") {
      void navigator.clipboard?.writeText(jordanDemoUrl(window.location.origin));
      toast.info(t("collabSameCell"));
      dispatchDemoScene("conflict");
    } else if (action === "follow-agent") {
      followAgentCommand();
      openAgentPanelFromHeader();
      window.setTimeout(() => focusAgentFillChip(), 80);
    } else if (action === "present") {
      const presentLabel = t("liveSharePresent");
      const button = Array.from(document.querySelectorAll("button")).find(
        (item) => {
          const text = item.textContent?.trim();
          return text === presentLabel || text === "Present";
        }
      );
      button?.click();
    } else if (action === "blame") {
      window.dispatchEvent(new CustomEvent(BLAME_HEAT_EVENT, { detail: {} }));
    } else if (action === "draft") {
      dispatchDemoScene("draft");
    }
  };

  return (
    <PresenceLegend
      title={t("presenceLegendTitle")}
      onItemAction={handleLegendAction}
      onToggleBlame={() => handleLegendAction("blame")}
      onDraftFill={() => handleLegendAction("draft")}
      items={seats.map((seat) => ({
        id: seat.userID,
        label: seatLabel(seat),
        action:
          seat.kind === "ghost"
            ? "jordan"
            : seat.bot
              ? "follow-agent"
              : seat.userID === currentUserId
                ? "present"
                : undefined,
        hint:
          seat.bot && agentStatus === "thinking"
            ? t("presenceThinking")
            : undefined,
        dashed: seat.kind === "ghost",
        muted: seat.kind === "muted-bot",
        thinking: shouldPulseBot({ bot: seat.bot, status: agentStatus, reducedMotion }),
        ringClassName: presenceRingClassName(seat.ringToken, {
          dashed: seat.kind === "ghost",
        }),
      }))}
    >
      <div
        role="group"
        aria-label={onlineLabel}
        className="flex shrink-0 cursor-pointer items-center px-1"
      >
        <Tooltip content={onlineLabel}>
          <div className="flex -space-x-1.5 items-center">
            {seats.slice(0, VISIBLE_MEMBERS).map((seat) => (
              <span
                key={seat.userID}
                tabIndex={0}
                aria-label={seatLabel(seat)}
                className={cn(
                  "relative inline-flex rounded-full outline-offset-4 hover:z-10 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-ring",
                  seat.kind === "ghost"
                    ? cn(
                        "size-7 sm:size-9",
                        presenceRingClassName(seat.ringToken, { dashed: true })
                      )
                    : cn(
                        "ring-2 ring-offset-2 ring-offset-background",
                        presenceRingClassName(seat.ringToken)
                      ),
                  seat.kind === "muted-bot" && "opacity-50",
                  shouldPulseBot({ bot: seat.bot, status: agentStatus, reducedMotion }) &&
                    "animate-pulse"
                )}
              >
                {seat.kind === "ghost" ? null : isBotCollaborator(seat.userID) ? (
                  <span className="grid size-7 place-items-center rounded-full bg-muted text-muted-foreground sm:size-9">
                    <Bot className="size-3.5 sm:size-4" />
                  </span>
                ) : (
                  <Avatar
                    src={seat.avatar}
                    name={seat.name}
                    className="size-7 sm:size-9"
                  />
                )}
              </span>
            ))}
            {overflow.length > 0 ? (
              <span
                tabIndex={0}
                aria-label={overflow.map(seatLabel).join(", ")}
                className="relative grid size-7 place-items-center rounded-full bg-muted text-xs font-medium text-muted-foreground ring-2 ring-background outline-offset-4 hover:z-10 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-ring sm:size-9 sm:text-sm"
              >
                +{overflow.length}
              </span>
            ) : null}
          </div>
        </Tooltip>
      </div>
    </PresenceLegend>
  );
}
