import { DragEvent, Dispatch, SetStateAction } from "react";

export interface ISentence {
    id: number;
    text: string;
    type: string;
    placed?: boolean;
    displayed?: string;
}

export interface ITextWithGapsProps {
    marked: boolean;
    sentence: ISentence[];
    setCurrentAnswer: Dispatch<SetStateAction<string>>;
    onDrop: (e: DragEvent<HTMLDivElement>, id: number) => void;
}
