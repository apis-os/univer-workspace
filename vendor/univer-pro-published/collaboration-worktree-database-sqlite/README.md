# @univerjs-pro/collaboration-worktree-database-sqlite

English | [简体中文](./README.zh-CN.md)

A persistent SQLite `IWorktreeDatabaseAdapter` for `@univerjs-pro/collaboration-worktree-service`. It uses the stable synchronous `libsql` API and supports Node.js 22 and later.

## Installation and usage

```bash
pnpm add \
  @univerjs-pro/collaboration-worktree-service \
  @univerjs-pro/collaboration-worktree-database-sqlite
```

```ts
const worktreeDatabase = new SQLiteWorktreeDatabaseAdapter({
  filename: './data/collaboration.sqlite',
  busyTimeoutMs: 5_000,
});
const worktreeService = new UniverCollabWorktreeService({
  trunk: {
    service: collabService,
    dbAdapter: trunkDatabase,
  },
  dbAdapter: worktreeDatabase,
});

await worktreeService.dispose();
await worktreeDatabase.dispose();
```

The caller must create the database parent directory in advance and dispose the Adapter after stopping Worktree Service.

## Storage contract

- Tables use the `collaboration_worktree_*` prefix.
- Schema version `('worktree', 2)` is stored in shared `collaboration_schema_versions`; `PRAGMA user_version` is not used.
- Draft-changeset scalar columns and the submission unique constraint provide database-level integrity, while commits use revision CAS and do not query the submission key.
- It can share a database file with trunk, Comment, and History SQLite Adapters.
- State transitions, draft CAS, and merge results use SQLite transactions for atomicity.
- An empty Worktree schema is initialized automatically. Incomplete or unsupported schemas are rejected.

Worktree Adapter does not own trunk collaboration data and does not manage Worktree names, list discovery, ACLs, or product-resource extension data for the application.

Schema v1 upgrades transactionally to v2 by adding a removal flag, defaulting
to false for all existing Units. Draft changesets, merge artifacts, and pending
merge results are preserved. Stop old writers and back up the database before
upgrading; older Adapters reject v2. Restarting v2 does not rerun the migration.
Removal updates and draft commits share the Adapter transaction boundary, so a
commit cannot succeed after removal has been persisted.
