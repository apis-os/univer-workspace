import type { PdfFormFieldType } from '../enums';
import type { PdfMatrix, PdfObjectId, PdfPageId, PdfRect } from '../types';
import type { IPdfEditorSession } from './types';
import { PdfObjectType } from '../enums';
export type PdfEditorActiveEditorKind = 'none' | 'page' | 'text' | 'image' | 'formXObject' | 'formField' | 'object' | 'source';
export type PdfEditorActiveEditor = {
    kind: 'none';
} | IPdfEditorPageActiveEditor | IPdfEditorObjectActiveEditor | IPdfEditorTextActiveEditor | IPdfEditorImageActiveEditor | IPdfEditorFormXObjectActiveEditor | IPdfEditorFormFieldActiveEditor | IPdfEditorSourceActiveEditor;
export interface IPdfEditorPageActiveEditor {
    kind: 'page';
    pageId: PdfPageId;
}
export interface IPdfEditorObjectActiveEditor {
    kind: 'object';
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    objectType: PdfObjectType;
    bbox: PdfRect;
    transform?: PdfMatrix;
}
export interface IPdfEditorTextActiveEditor extends Omit<IPdfEditorObjectActiveEditor, 'kind'> {
    kind: 'text';
}
export interface IPdfEditorImageActiveEditor extends Omit<IPdfEditorObjectActiveEditor, 'kind'> {
    kind: 'image';
    assetId: string;
}
export interface IPdfEditorFormXObjectActiveEditor extends Omit<IPdfEditorObjectActiveEditor, 'kind'> {
    kind: 'formXObject';
    objectRef?: string;
    displayListIds?: string[];
}
export interface IPdfEditorFormFieldActiveEditor {
    kind: 'formField';
    pageId?: PdfPageId;
    widgetObjectId: PdfObjectId;
    fieldObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
}
export interface IPdfEditorSourceActiveEditor {
    kind: 'source';
    pageId?: PdfPageId;
    displayOperationIds?: string[];
}
export declare function resolvePdfEditorActiveEditor(session: IPdfEditorSession): PdfEditorActiveEditor;
