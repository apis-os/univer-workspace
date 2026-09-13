# @univerjs-pro/collaboration-worktree-database-sqlite

[English](./README.md) | [简体中文](./README.zh-CN.md)

面向 `@univerjs-pro/collaboration-worktree-service` 的持久化 SQLite
`IWorktreeDatabaseAdapter`。它使用稳定的 `libsql` 同步接口，支持 Node.js 22 及以上。

## 安装与使用

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

调用方必须预先创建数据库父目录，并在 Worktree Service 停止后释放 Adapter。

## 存储契约

- 表使用 `collaboration_worktree_*` 前缀。
- schema 版本 `('worktree', 1)` 记录在共享的
  `collaboration_schema_versions`，不占用 `PRAGMA user_version`。
- draft changeset 标量列和 submission unique constraint 提供数据库级完整性；提交只做
  revision CAS，不按 submission key 点查。
- 可以与 trunk、Comment 和 History SQLite Adapter 共用一个数据库文件。
- 状态转换、draft CAS 和 merge result 使用 SQLite transaction 保证原子契约。
- 空 Worktree schema 自动初始化；不完整或不支持的 schema 会被拒绝。

Worktree Adapter 不拥有 trunk 协同数据，也不替应用管理 Worktree 名称、列表发现、ACL 或
产品资源扩展数据。
