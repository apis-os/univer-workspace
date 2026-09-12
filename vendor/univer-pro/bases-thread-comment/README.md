# @univerjs-pro/bases-thread-comment

`@univerjs-pro/bases-thread-comment` adds row-anchored thread comments and facade methods to Univer Bases.

## Installation

```sh
pnpm add @univerjs-pro/bases-thread-comment
```

Register `UniverBasesThreadCommentPlugin` after the Univer Bases and thread comment plugins.

```ts
import '@univerjs-pro/bases-thread-comment/facade';

const record = univerAPI.getActiveBase()?.getTables()[0]?.getRecords()[0];
await record?.createCommentAsync('Confirm this record.', { id: 'review-record-1' });
```
