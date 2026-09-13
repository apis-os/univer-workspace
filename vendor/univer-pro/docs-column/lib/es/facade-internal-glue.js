import { AddDocColumnCommand, ColumnPosition, DeleteDocColumnCommand, DeleteDocColumnGroupCommand, InsertDocColumnGroupCommand, ResizeDocColumnGroupCommand, getColumnGroupRangeById } from '@univerjs-pro/docs-column';
import { FEnum } from '@univerjs/core/facade';
import { DataStreamTreeTokenType, ICommandService, containsStreamIndex, generateRandomId, getColumnGroupRangeInterval } from '@univerjs/core';
import { FDocument } from '@univerjs/docs/facade';
import { b } from "./facade-docs-column-fdocument-column-group.js";
var m = class extends FEnum {
  get DocsColumnPositionEnum() {
    return ColumnPosition;
  }
};
FEnum.extend(m);
;
FDocument.extend(b);
