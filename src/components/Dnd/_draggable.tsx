import { DragEvent } from "react";

import { IDraggableProps } from "../../interfaces";
import { DraggableWrapper } from "./dnd.styled";

function Draggable(props: IDraggableProps) {
    const { name, bgColor, onDragStart } = props;

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        onDragStart(e, name);
    };

    return (
        <DraggableWrapper
            bgColor={bgColor}
            draggable="true"
            onDragStart={handleDragStart}
        >
            {name}
        </DraggableWrapper>
    );
}

export default Draggable;
