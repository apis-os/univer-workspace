export const DEMO_PRESENCE_EVENT = "workspace-demo-presence";
export const DEMO_RESET_EVENT = "workspace-demo-reset";

export type DemoPresenceMember = {
  readonly userID: string;
};

export type DemoResetPlan =
  | { readonly action: "noop" }
  | { readonly action: "isolate"; readonly toastKey: "demoResetBlocked" }
  | { readonly action: "skip-wipe" };

export function isAgentCollaborator(userId: string): boolean {
  return userId === "agent_workspace" || userId.startsWith("agent:");
}

export function hasOtherHumanCollaborators(
  members: readonly DemoPresenceMember[],
  currentUserId: string
): boolean {
  return members.some(
    (member) =>
      member.userID !== currentUserId && !isAgentCollaborator(member.userID)
  );
}

export function planDemoReset(input: {
  readonly members: readonly DemoPresenceMember[];
  readonly currentUserId: string;
}): DemoResetPlan {
  if (hasOtherHumanCollaborators(input.members, input.currentUserId)) {
    return { action: "isolate", toastKey: "demoResetBlocked" };
  }
  return { action: "skip-wipe" };
}

export function resolveDemoReset(input: {
  readonly attempted: boolean;
  readonly members: readonly DemoPresenceMember[];
  readonly currentUserId: string;
  readonly isolated?: boolean;
}): DemoResetPlan {
  if (!input.attempted || input.isolated === true) {
    return { action: "noop" };
  }
  return planDemoReset({
    members: input.members,
    currentUserId: input.currentUserId,
  });
}

export function resetDemo(input: {
  readonly members: readonly DemoPresenceMember[];
  readonly currentUserId: string;
  readonly isolated?: boolean;
}): DemoResetPlan {
  return resolveDemoReset({ attempted: true, ...input });
}

export function requestDemoReset(): void {
  window.dispatchEvent(new Event(DEMO_RESET_EVENT));
}
