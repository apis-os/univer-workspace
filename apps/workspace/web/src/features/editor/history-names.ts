export const HISTORY_DISPLAY_NAMES = {
  user_admin: "Avery Chen",
  user_jordan: "Jordan Lee",
  agent_workspace: "Workspace Agent",
} as const;

type HistoryUserId = keyof typeof HISTORY_DISPLAY_NAMES;

export interface HistoryUser {
  readonly userID: string;
  readonly name: string;
  readonly avatar: string;
}

export function historyDisplayName(userID: string, name?: string): string {
  if (userID in HISTORY_DISPLAY_NAMES) {
    return HISTORY_DISPLAY_NAMES[userID as HistoryUserId];
  }
  if (name === "Administrator") {
    return HISTORY_DISPLAY_NAMES.user_admin;
  }
  if (name && name.trim()) return name;
  return userID;
}

export function overlayHistoryAdministrator<T>(value: T): T {
  if (typeof value === "string") {
    return (value === "Administrator" ? HISTORY_DISPLAY_NAMES.user_admin : value) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => overlayHistoryAdministrator(item)) as T;
  }
  if (value && typeof value === "object") {
    const next: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      next[key] = overlayHistoryAdministrator(child);
    }
    return next as T;
  }
  return value;
}

export function historyUsers(): readonly HistoryUser[] {
  return Object.entries(HISTORY_DISPLAY_NAMES).map(([userID, name]) => ({
    userID,
    name,
    avatar: "",
  }));
}

export function applyHistoryNameUsers(userManager: {
  addUser: (user: HistoryUser) => void;
}): void {
  for (const user of historyUsers()) {
    userManager.addUser(user);
  }
}
