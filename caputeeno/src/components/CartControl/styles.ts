import styled from "styled-components";

export const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`;

export const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`