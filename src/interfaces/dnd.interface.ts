import { DragEvent, Dispatch, SetStateAction } from "react";

import { IBgColor } from "./bg-color.interface";
import { ISentence } from "./text-with-gaps.interface";

export interface IDndState {
    showResults: boolean;
    question: string;
    answers: string[];
    sentence: ISentence[];
}

export interface IDndProps {
    text: string;
    heading: string;
}

export interface IDraggableProps extends IBgColor {
    name: string;
    onDragStart: (e: DragEvent<HTMLDivElement>, name: string) => void;
}

export interface IDroppableProps extends IBgColor {
    children: string;
    id: number;
    setCurrentAnswer: Dispatch<SetStateAction<string>>;
    onDrop: (e: DragEvent<HTMLDivElement>, id: number) => void;
}

export interface ISolutionsProps {
    answers: string[];
}
