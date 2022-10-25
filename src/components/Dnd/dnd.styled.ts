import styled from "styled-components";

import { IBgColor } from "../../interfaces";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;
    gap: 1rem;
    background-color: #fff;
    box-shadow: 2px 2px 5px #d1d1d1;
    border-radius: 0.25rem;
`;

const DraggableWrapper = styled.div<IBgColor>`
    background-color: rgb(59 130 246/0.3);
    margin: 0.2rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    border-left: 3px solid #3b82f6;
`;

const DroppableWrapper = styled.div<IBgColor>`
    background-color: ${(props) => props.bgColor || "rgb(59 130 246/0.3)"};
    transition: background-color 2s ease-out;
    margin: 0.2rem 0;
    padding: 0.25rem 1rem;
    min-width: 2rem;
    border-bottom: 3px solid #3b82f6;
`;

const SolutionsContainer = styled.div`
    display: flex;
`;

const CheckButton = styled.button`
    background-color: #3b82f6;
    border-radius: 6px;
    display: inline-block;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    :disabled {
        background-color: #eee;
        color: #ccc;
    }
`;

export {
    Container,
    DraggableWrapper,
    DroppableWrapper,
    SolutionsContainer,
    CheckButton,
};
