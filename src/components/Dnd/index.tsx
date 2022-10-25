import { useState, useEffect, DragEvent } from "react";

import Solutions from "./_solutions";
import TextWithGaps from "../TextWithGaps";
import { IDndProps, IDndState } from "../../interfaces";
import { getSentence, getAnswers } from "../../core/core";
import { Container, CheckButton } from "./dnd.styled";

function Dnd(props: IDndProps) {
    const { text, heading } = props;

    const [state, setState] = useState<IDndState>({
        showResults: false,
        question: "",
        answers: getAnswers(text),
        sentence: getSentence(text),
    });

    const [currentAnswer, setCurrentAnswer] = useState<string>("");

    useEffect(() => {
        const sentence = state.sentence.map((word) => {
            if (word.displayed) {
                if (word.displayed === word.text) {
                    return {
                        ...word,
                        type: "word",
                    };
                } else {
                    state.answers.push(word.displayed);

                    return {
                        ...word,
                        placed: false,
                        displayed: "",
                    };
                }
            }

            return word;
        });

        setState({ ...state, sentence });
    }, [state.showResults]);

    const onDrop = (e: DragEvent<HTMLElement>, dropId: number) => {
        const text = e.dataTransfer.getData("text/plain");
        const sentence = state.sentence.map((word) => {
            if (word.id === dropId) {
                state.answers = state.answers.filter((a) => a !== text);
                if (currentAnswer !== "") state.answers.push(currentAnswer);
                return { ...word, placed: true, displayed: text };
            }

            return word;
        });

        setState({ ...state, sentence });
    };

    const test = () => {
        setState({ ...state, showResults: !showResults });
    };

    const { showResults } = state;

    return (
        <Container>
            <h3 className="header">{heading}</h3>

            <TextWithGaps
                marked={showResults}
                onDrop={onDrop}
                sentence={state.sentence}
                setCurrentAnswer={setCurrentAnswer}
            />
            <Solutions answers={state.answers} />
            <div>
                <CheckButton onClick={test}>Check result</CheckButton>
            </div>
        </Container>
    );
}

export default Dnd;
