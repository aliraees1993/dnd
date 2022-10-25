import { DragEvent } from "react";

import { ITextWithGapsProps } from "../../interfaces";
import { Container, WordBox, WordWrapper } from "./text-with-gaps.styled";
import Droppable from "../Dnd/_droppable";

function TextWithGaps(props: ITextWithGapsProps) {
    const { marked, sentence, onDrop, setCurrentAnswer } = props;

    const handleDrop = (e: DragEvent<HTMLDivElement>, id: number) => {
        onDrop(e, id);
    };

    const renderSentence = () =>
        sentence.map((word, i) => {
            // Enum for word types
            if (word.type === "word") {
                return <WordBox key={i}>{word.text}</WordBox>;
            }
            let bgColor = "";

            if (marked) {
                bgColor = word.text === word.displayed ? "lightgreen" : "red"; // Color scheme file instead of hardcoding or passed as props
            }

            return (
                // This can be replaced with an input component for fill in the blanks
                <Droppable
                    bgColor={bgColor}
                    id={word.id}
                    key={i}
                    onDrop={handleDrop}
                    setCurrentAnswer={setCurrentAnswer}
                >
                    {word.displayed && word.placed ? word.displayed : ""}
                </Droppable>
            );
        });

    return (
        <Container>
            <WordWrapper>{renderSentence()}</WordWrapper>
        </Container>
    );
}

export default TextWithGaps;
