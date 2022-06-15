import styled from "styled-components";

export const StyledMain = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledInputMain = styled.input `
    background: none;
    border: none;
    border-bottom: 1px solid #DFE1E6;
    width: 85%;
    margin: 20px 0 5px;

    &:focus {
        outline: none;
    }
`;