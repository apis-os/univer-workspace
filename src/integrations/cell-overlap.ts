export interface CellOverlapWrite {
  readonly userID: string;
  readonly a1s: readonly string[];
  readonly at: number;
}

export interface CellOverlapStore {
  writes: Map<string, CellOverlapWrite>;
}

export function normalizeOverlapA1(a1: string): string {
  return a1.replace(/\s/g, "").toUpperCase();
}

export function recordCellOverlap(
  store: CellOverlapStore,
  input: {
    readonly unitId: string;
    readonly userID: string;
    readonly a1s: readonly string[];
    readonly now?: number;
    readonly ttlMs?: number;
  }
): { readonly conflict: boolean; readonly peers: readonly string[] } {
  const now = input.now ?? Date.now();
  const ttl = input.ttlMs ?? 30_000;
  const a1s = input.a1s.map(normalizeOverlapA1).filter(Boolean);
  const key = `${input.unitId}:${input.userID}`;
  if (a1s.length) {
    store.writes.set(key, { userID: input.userID, a1s, at: now });
  }
  const local = new Set(a1s);
  const peers = new Set<string>();
  for (const [writeKey, write] of store.writes) {
    if (!writeKey.startsWith(`${input.unitId}:`)) continue;
    if (write.userID === input.userID) continue;
    if (now - write.at > ttl) {
      store.writes.delete(writeKey);
      continue;
    }
    if (write.a1s.some((a1) => local.has(normalizeOverlapA1(a1)))) {
      peers.add(write.userID);
    }
  }
  return { conflict: peers.size > 0, peers: [...peers] };
}
