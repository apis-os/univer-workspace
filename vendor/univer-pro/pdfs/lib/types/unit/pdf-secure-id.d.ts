export type PdfSecureIdPrefix = 'pdf_page_' | 'pdf_block_' | 'pdf_object_' | 'pdf_display_list_' | 'pdf_text_story_';
export declare function createSecurePdfId(prefix: PdfSecureIdPrefix): string;
