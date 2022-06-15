import styled from "styled-components";

export const StyledTerms = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    font-size: 0.7rem;
    margin-top: 10%;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin: 10px;
    }

    a {
        color: #4e96d8;
        text-decoration: none;
    }
`;

export const StyledTitle = styled.div`
    display: flex;
    padding: 8%;
    width: 85%;
    margin-bottom: 15%;
`;