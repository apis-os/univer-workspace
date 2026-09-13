import type { ICommand } from '@univerjs/core';
export interface ISetSlideSpeakerNotesCommandParams {
    unitId: string;
    subUnitId: string;
    speakerNotes?: string;
}
export declare const SetSlideSpeakerNotesCommand: ICommand<ISetSlideSpeakerNotesCommandParams>;
