export type BoardImageExportFormat = 'jpeg' | 'png';
export type BoardOutputPreparingKind = 'image' | 'print';
export interface IExportBoardImageOperationParams {
    format: BoardImageExportFormat;
}
