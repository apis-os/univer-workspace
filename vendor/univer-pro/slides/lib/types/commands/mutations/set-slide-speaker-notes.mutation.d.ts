import type { IMutation } from '@univerjs/core';
export interface ISetSlideSpeakerNotesMutationParams {
    unitId: string;
    subUnitId: string;
    speakerNotes?: string;
}
export declare const SetSlideSpeakerNotesMutation: IMutation<ISetSlideSpeakerNotesMutationParams>;
