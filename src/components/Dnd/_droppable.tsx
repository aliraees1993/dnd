import { DragEvent, useState } from "react";

import { IDroppableProps } from "../../interfaces";
import { DroppableWrapper } from "./dnd.styled";

function Droppable(props: IDroppableProps) {
    const { id, bgColor, onDrop, children, setCurrentAnswer } = props;

    const [state, setState] = useState<{ bgColor: string }>({
        bgColor: "rgb(59 130 246/0.3)", // Color scheme file instead of hardcoding or passed as props
    });

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        onDrop(e, id);
        setState({ bgColor: "white" }); // Color scheme file instead of hardcoding or passed as props
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        setCurrentAnswer(e.currentTarget.innerHTML); // kind of a hack to transfer the answer back to list when its replaced
        e.preventDefault();
        setState({ bgColor: "teal" }); // Color scheme file instead of hardcoding or passed as props
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        setCurrentAnswer(""); // kind of a hack to transfer the answer back to list when its replaced
        e.preventDefault();
        setState({ bgColor: "rgb(59 130 246/0.3)" }); // Color scheme file instead of hardcoding or passed as props
    };

    return (
        <DroppableWrapper
            bgColor={bgColor ? bgColor : state.bgColor}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {children}
        </DroppableWrapper>
    );
}

export default Droppable;
