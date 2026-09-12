# @univer-cli/generic-keyed-instance-pool

[English](./README.md) | 简体中文

按 application 提供的 opaque key 创建、独占租用、缓存和回收有状态 instance。

它适合创建成本高、需要按 key 复用、同一时间只能被一个调用方使用且必须显式销毁的对象，例如 browser、
database session 或 headless runtime。若对象无状态或可安全并发共享，不需要使用这个 pool。

## 安装

```bash
pnpm add @univer-cli/generic-keyed-instance-pool
```

要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import {
  createGenericKeyedInstancePool,
  type ManagedInstanceFactory,
} from "@univer-cli/generic-keyed-instance-pool";

interface Client {
  close(): Promise<void>;
  query(): Promise<string>;
}

const factory: ManagedInstanceFactory<Client, { url: string }> = {
  async create({ init }) {
    return createClient(init.url);
  },
  async destroy({ instance }) {
    await instance.close();
  },
};

const pool = createGenericKeyedInstancePool({
  factory,
  cache: {
    idleTtlMs: 60_000,
    maxEntries: 20,
  },
});

const lease = await pool.acquire({
  key: "server-a",
  init: { url: "https://example.com" },
});

try {
  console.log(await lease.instance.query());
} catch (error) {
  await lease.invalidate();
  throw error;
} finally {
  await lease.release();
}

await pool.close();
```

## 生命周期保证

- 同一个 key 的首次创建使用 single-flight，不会并行创建重复 instance。
- 一个 instance 同一时刻只交给一个 lease。
- 等待同一 key 的 acquire 按 FIFO 顺序获得 lease。
- 正常 release 后 instance 可以进入 idle cache。
- invalidate 表示 instance 已不可安全复用，会在 release 时销毁。
- TTL 和 LRU 只回收 idle instance，不中断 active lease。
- invalidate、TTL 与 LRU eviction 会在 instance 离开 cache 后、销毁开始前同步发出 `destroy-start`。调用方应在此清理与该 generation 绑定的状态；`evicted` 是随后发出的完成事件。
- `close()` 拒绝新的 acquire，等待或终止剩余 lifecycle，并销毁缓存内容。

Key 只用于相等性与事件，不会被 package 解释。调用方必须保证同一 key 对应兼容的 init；pool 不替 application
定义 target-to-key 算法。

## 失败与可观测性

Create、destroy、等待取消和 pool close 失败会以 `InstancePoolError` 暴露。可通过 event callback 观察创建、
acquire、release、eviction 和 destroy，而无需读取内部 cache。

## 职责边界

这是纯进程内 raw instance lifecycle。Package 不提供 worker、IPC、RPC、方法代理、业务 operation 或跨进程
共享。需要 worker 中的 collaboration runtime 时，使用
`@univer-cli/univer-collaboration-runtime-pool`。
