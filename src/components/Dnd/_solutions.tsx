import { DragEvent } from "react";

import { ISolutionsProps } from "../../interfaces";
import Draggable from "./_draggable";
import { SolutionsContainer } from "./dnd.styled";

function Solutions(props: ISolutionsProps) {
    const { answers } = props;

    const onDragStart = (e: DragEvent<HTMLDivElement>, name: string) => {
        e.dataTransfer.setData("text/plain", name);
    };

    return (
        <SolutionsContainer>
            {answers.map((a) => (
                <Draggable
                    bgColor="rgba(255,255,255,0)"
                    key={a}
                    name={a}
                    onDragStart={onDragStart}
                />
            ))}
        </SolutionsContainer>
    );
}

export default Solutions;
