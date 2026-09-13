import type { ICommandInfo } from '@univerjs/core';
import type { IDialogPartMethodOptions } from '@univerjs/ui';
export declare const SLIDE_SPEAKER_NOTES_DIALOG_COMPONENT = "slide.speaker-notes.dialog";
export declare const SLIDE_SPEAKER_NOTES_DIALOG_ID = "slide.speaker-notes.dialog";
export declare function normalizeSpeakerNotesForCommand(value: string): string | undefined;
export declare function shouldCommitSpeakerNotes(previous: string | undefined, nextDraft: string): boolean;
export declare function getSpeakerNotesCommitPayload(previous: string | undefined, nextValue: string): {
    speakerNotes: string | undefined;
} | null;
export declare function hasSpeakerNotesContent(value: string | undefined): boolean;
export declare function isSpeakerNotesCommandForSlide(command: Pick<ICommandInfo, 'id' | 'params'> | null | undefined, unitId: string | undefined, slideId: string | undefined): boolean;
export declare function createSlideSpeakerNotesDialogOptions(title: string, unitId: string, slideId: string, initialNotes: string | undefined, onClose: () => void): IDialogPartMethodOptions;
export interface ISlideSpeakerNotesDialogProps {
    unitId: string;
    slideId: string;
    initialNotes?: string;
    onClose?: () => void;
}
export declare function SlideSpeakerNotesDialog(props: ISlideSpeakerNotesDialogProps): import("react").JSX.Element;
export declare function SlideSpeakerNotesEditor(): import("react").JSX.Element | null;
