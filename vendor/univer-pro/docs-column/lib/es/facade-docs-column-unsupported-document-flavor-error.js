import { AddDocColumnCommand, ColumnPosition, DeleteDocColumnCommand, DeleteDocColumnGroupCommand, InsertDocColumnGroupCommand, ResizeDocColumnGroupCommand, getColumnGroupRangeById } from '@univerjs-pro/docs-column';
import { FEnum } from '@univerjs/core/facade';
import { DataStreamTreeTokenType, ICommandService, containsStreamIndex, generateRandomId, getColumnGroupRangeInterval } from '@univerjs/core';
import { FDocument } from '@univerjs/docs/facade';
var h = class extends Error {
    constructor() {
      super('ColumnGroup\x20APIs\x20are\x20supported\x20only\x20in\x20modern\x20documents.\x20Use\x20section\x20column\x20APIs\x20for\x20traditional\x20documents.'), this.name = "DocsColumnUnsupportedDocumentFlavorError";
    }
  },
  g = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629) {
      this._document = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, this._columnGroupId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628, this._columnId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629;
    }
    getId() {
      return this._columnId;
    }
    getColumnGroupId() {
      return this._columnGroupId;
    }
    getIndex() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = this.getRange()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.column) ?? -1;
    }
    getRange() {
      if (!this._document['isModern']()) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = getColumnGroupRangeById(this._document["getDocumentDataModel"]().getSnapshot(), this._columnGroupId);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.columns["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.columnId === this._columnId)) ?? null;
    }
    getContentRange() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = this.getRange(),
        {
          dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638
        } = this._document["getBody"]();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) return null;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637.startOffset + 1,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637);
      return {
        'startOffset': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB,
        'endOffset': Math.max(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639),
        'segmentId': ''
      };
    }
    getInsertOffset() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = this.getContentRange()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643.endOffset) ?? null;
    }
    getText() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = this.getContentRange(),
        {
          dataStream: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646
        } = this._document["getBody"]();
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 ? '' : v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645.endOffset));
    }
    getParagraphs() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = this.getRange();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 ? this._document['getParagraphs']().filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => {
        let {
          endOffset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getInfo();
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.startOffset && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649.endOffset;
      }) : [];
    }
    insertParagraph(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = '') {
      this._assertModernDocument();
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = this.getParagraphs();
      if (!Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.length) throw RangeError("Column paragraph index " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 + " is out of range.");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = this.getRange();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) throw Error("Cannot insert a paragraph because the column no longer exists.");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651].getInfo().startOffset : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.endOffset;
      if (!this._document['insertText'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 + '\x0d')) throw Error("Failed to insert paragraph into the column.");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = this.getParagraphs()[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656) throw Error('Failed\x20to\x20resolve\x20the\x20inserted\x20column\x20paragraph.');
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656;
    }
    appendParagraph(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = '') {
      return this.insertParagraph(this.getParagraphs().length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663);
    }
    getTextRange() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = this.getContentRange();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 ? this._document["getTextRange"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.startOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.endOffset, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.segmentId) : null;
    }
    setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668;
      return this._assertModernDocument(), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = this.getTextRange()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667)) ?? false;
    }
    setTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
      return this._assertModernDocument(), ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this.getTextRange()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.setTextStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671)) ?? false;
    }
    _assertModernDocument() {
      if (!this._document['isModern']()) throw new h();
    }
  };
function fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.endOffset;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.startOffset + 1 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 - 1] === DataStreamTreeTokenType.PARAGRAPH || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 - 1] === DataStreamTreeTokenType.SECTION_BREAK);) --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147;
}
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151.replaceAll(DataStreamTreeTokenType.SECTION_BREAK, '').replaceAll(DataStreamTreeTokenType.PARAGRAPH, '\x0a').replace(/\n+$/u, '');
}
export { h as DocsColumnUnsupportedDocumentFlavorError, g as FDocumentColumn };
