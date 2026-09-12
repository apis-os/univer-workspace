# @univerjs-pro/boards-thread-comment

`@univerjs-pro/boards-thread-comment` adds element- and position-anchored thread comments and facade methods to Univer Boards.

## Installation

```sh
pnpm add @univerjs-pro/boards-thread-comment
```

Register `UniverBoardsThreadCommentPlugin` after the Univer Boards and thread comment plugins.

```ts
import '@univerjs-pro/boards-thread-comment/facade';

const board = univerAPI.getActiveBoard();
const shape = board?.getShapes()[0];
if (shape) await board?.createElementCommentAsync(shape.getId(), 'Review this Shape.');
await board?.createPositionCommentAsync({ x: 320, y: 180 }, 'Review this area.');
```
