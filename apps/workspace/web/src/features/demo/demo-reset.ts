export const DEMO_PRESENCE_EVENT = "workspace-demo-presence";

export type DemoPresenceMember = {
  readonly userID: string;
};

export type DemoResetPlan =
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
