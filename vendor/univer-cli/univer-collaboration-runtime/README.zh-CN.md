# @univer-cli/univer-collaboration-runtime

[English](./README.md) | 简体中文

在一个 Node.js 进程中创建绑定单个 Univer Unit 的 headless collaboration runtime，并显式控制读取、编辑、
拉取和提交。

Runtime 负责 UnitData/Snapshot 加载、mutation capture、OT、revision、pending/awaiting 状态与 changeset
identity。Application 通过 backend port 决定内容来自本地文件、数据库还是 Collaboration Server。

## 安装

```bash
pnpm add @univer-cli/univer-collaboration-runtime
```

要求 Node.js 22.12 或更高版本，并满足 package manifest 中 Univer 与 Collaboration SDK 的版本要求。

## 快速开始

先创建 backend，再把 Univer factory 注入 runtime factory：

```ts
import { createStandardHeadlessUniverFactory } from "@univer-cli/headless-univer";
import {
  createUniverCollaborationRuntimeFactory,
  type CollaborationRuntimeBackend,
} from "@univer-cli/univer-collaboration-runtime";

const backend: CollaborationRuntimeBackend = {
  async open({ unitId, unitType }) {
    return {
      format: "unit-data",
      getConnectionState: () => "online",
      getUnitData: async () => loadCheckpoint(unitId, unitType),
      fetchChangesets: (from, to) => loadChangesets(unitId, from, to),
      submitChangeset: (draft) => storeChangeset(unitId, unitType, draft),
      close: async () => undefined,
    };
  },
};

const factory = createUniverCollaborationRuntimeFactory({
  backend,
  createUniver: createStandardHeadlessUniverFactory({ license: "" }),
});
```

Factory 按 target 创建 runtime；一个 runtime 的整个生命周期只绑定一个 Unit。

## 推荐的单回合流程

```ts
const runtime = await factory.load(unitId, unitType);

try {
  const initialPull = await runtime.pull();
  if (initialPull.status === "conflict") throw new Error(initialPull.conflict.message);

  const result = await runtime.execute({
    mode: "write",
    code: 'workbook.getActiveSheet().getRange("A1").setValue("ready");',
  });

  let commit = await runtime.commit();
  if (commit.status === "pull-required") {
    const pulled = await runtime.pull();
    if (pulled.status === "conflict") throw new Error(pulled.conflict.message);
    commit = await runtime.commit();
  }
  console.log(result.value, commit);
} finally {
  await runtime.close();
}
```

- `execute({ mode: "read" })` 不允许产生 mutation。
- `execute({ mode: "write" })` 捕获 mutation 并加入本地 pending state。
- `fetch()` 只获取并校验远端 changesets，不修改 Unit 内容；普通流程通常不必单独调用。
- `pull()` 会先 fetch，再通过 OT 协调本地状态并应用远端 changesets。
- `commit()` 提交本地 changeset，并处理 awaiting/pending identity。
- `close()` 释放 backend handle 与 Univer。

调用方必须检查最终 commit status：`confirmed` 与 `nothing-to-commit` 已完成；`retry` 或 `unknown` 可在同一
runtime 重试；`pull-required` 需要再次 pull/commit；`conflict` 需要停止写入并由 application 决定恢复方式。

## Backend port

`CollaborationRuntimeBackend.open()` 返回绑定 target 的 handle。Handle 可以使用 `unit-data` checkpoint 或
Snapshot，并负责连续 changeset 读取、幂等提交、连接状态与关闭。Runtime 不解释 Workspace、Worktree、
ResourceRef、认证或 URL；这些属于 application adapter。

连接官方 Collaboration Server 时，可使用 Collaboration SDK 提供的 service、endpoint 与 transport 实现
backend，而不是让 Snapshot 和 changeset 经过 daemon 中转。

## 状态与错误

Runtime 暴露当前 revision、connection state、本地 dirty state 与冲突结果。Backend 中断不会伪装成成功；
fetch/pull/commit 的结果允许 adapter 区分无变化、已推进、冲突或失败。无法继续安全复用的 runtime 应由 owner
销毁，而不是继续执行。

## 与其他 package 的关系

标准 Univer composition 由 `@univer-cli/headless-univer` 提供。需要在 worker 中按 key 复用 runtime 时，使用
[`@univer-cli/univer-collaboration-runtime-pool`](../univer-collaboration-runtime-pool/README.zh-CN.md)。
本 package 不提供 Commander、pool、worker、daemon、target-to-key 算法或认证策略。
