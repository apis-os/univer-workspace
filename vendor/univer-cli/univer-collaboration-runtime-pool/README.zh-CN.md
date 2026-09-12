# @univer-cli/univer-collaboration-runtime-pool

[English](./README.md) | 简体中文

在独立 worker process 中按 application-owned opaque key 创建、独占租用、缓存和回收
`UniverCollaborationRuntime`。

它适合多个短任务复用昂贵 runtime，同时把 Univer 与 native/runtime 状态隔离在 worker 中。若只需要当前进程内的
单个 runtime，直接使用 `@univer-cli/univer-collaboration-runtime`。

## 安装

```bash
pnpm add @univer-cli/univer-collaboration-runtime-pool
```

要求 Node.js 22.12 或更高版本。Worker entry 必须是构建后的 JavaScript ESM 文件，不能指向 TypeScript source。

## Worker entry

Worker 在 runtime 所在进程创建 backend、读取凭证并构造 Univer：

```ts
import { defineUniverCollaborationRuntimeWorker } from "@univer-cli/univer-collaboration-runtime-pool";

export default defineUniverCollaborationRuntimeWorker({
  async createRuntime(init) {
    return createRuntimeFromApplicationInit(init);
  },
});
```

Init 必须是 structured-clone compatible value。凭证也可以由 worker 自己从环境或安全存储读取，避免经过 daemon
或 parent process 转发远端 Snapshot、changeset 与 block。

## 使用 pool

```ts
import { createUniverCollaborationRuntimePool } from "@univer-cli/univer-collaboration-runtime-pool";

const pool = createUniverCollaborationRuntimePool({
  entry: new URL("./worker.js", import.meta.url),
});

const lease = await pool.acquire({
  key: "server-a:book-1:sheet",
  init: { unitId: "book-1", unitType: "sheet" },
});

try {
  await lease.pull();
  const result = await lease.execute({ mode: "read", code: "return workbook.getId();" });
  console.log(result.value);
} catch (error) {
  await lease.invalidate();
  throw error;
} finally {
  await lease.release();
}

await pool.close();
```

Lease 代理 collaboration runtime 的完整 public interface；调用方不需要设计 RPC method。

## Pool 行为

同一个 key 使用 single-flight 创建和 FIFO lease；idle runtime 可按 TTL 与 LRU 回收。Active lease 不会被 idle
eviction 中断。Invalidate 表示 worker/runtime 已不可信，会在 release 时销毁。Invalidate、TTL 与 LRU eviction 会在
worker 销毁开始前同步发出 `destroy-start`；与该 generation 绑定的状态应在此清理，不要等待随后发出的 `evicted`。
Pool event 可用于日志和 metrics。

Key 与 init 完全由 application 定义。Pool 不知道 Workspace、Worktree、URL、认证或 target-to-key 算法，也不会
验证相同 key 的两次 init 是否语义兼容。

## Mutation replacement

跨 worker 传输的 mutation replacement 保留 collaboration runtime 的结构化合同；不支持 structured clone 的值
会在边界失败。业务层不应依赖 worker protocol 或序列化内部格式。

## 职责边界

Package 拥有 worker lifecycle、runtime proxy、lease 与 cache；不定义 daemon method、Commander command、
backend 或远程数据加载流程。
