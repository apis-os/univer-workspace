# @univer-cli/resource-library

[English](./README.md) | 简体中文

为 CLI、Agent 和内容生成工具提供可搜索的视觉资源目录，并统一处理 SVG 读取、下载缓存和批量导出。

每个资源使用稳定的 `<registryId>/<resourceId>` handle。调用方只依赖 handle 与结构化 metadata，不需要了解
manifest、搜索索引或 cache 的内部格式。

## 安装

```bash
pnpm add @univer-cli/resource-library
```

要求 Node.js 22.12 或更高版本。

## 快速开始

```ts
import {
  createResourceLibrary,
  type ResourceCache,
  type ResourceDownloader,
  type ResourceOutput,
} from "@univer-cli/resource-library";

const library = createResourceLibrary({ manifest, cache, downloader, output });
const found = library.find({
  queries: ["rocket", "startup"],
  registries: ["icons"],
  limit: 20,
});

const first = found.resources.at(0);
if (first !== undefined) {
  const resource = await library.read({ handle: first.handle });
  console.log(resource.svg);
}
```

## 核心操作

- `listRegistries()`：查看可用 registry。
- `find()`：按关键词和 registry 搜索，返回稳定 handle 与摘要。
- `read()`：读取一个资源；远端内容按 adapter 策略下载并缓存。
- `export()`：把一组资源写入调用方提供的 output，并返回结构化清单。

Manifest 在构造 library 时校验。重复 handle、非法 ID、不支持的 media type 和不安全路径会在进入下载或输出前失败。

## Node.js 适配器

Package 提供 filesystem cache、HTTPS downloader、filesystem output 和 manifest loader。Application 也可以实现
`ResourceCache`、`ResourceDownloader` 与 `ResourceOutput`，接入对象存储、数据库或测试内存 adapter。

## 安全与边界

Registry ID、resource ID、cache root 和输出路径都会做安全校验。Downloader 只负责读取 manifest 声明的内容；
认证 header、网络访问策略与可信 registry 列表由 application 决定。

这里的 resource 是视觉素材，不是 Workspace Resource 产品对象，也不是 Unit snapshot 中的 plugin resource。

预设 command 见
[`@univer-cli/resource-library-command`](../resource-library-command/README.zh-CN.md)。
