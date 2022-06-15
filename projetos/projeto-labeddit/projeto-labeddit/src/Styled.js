import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const StyledBodyPage = styled.body `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: #212121;
`;

export const StyledPage = styled.div `
  display: flex;
  flex-direction: column;
  width: 428px;
  min-height: 926px;
  background-color: #ffffff;
`;

export const StyledInput = styled.input `
  width: 80%;
  height: 30px;
  border: 1px solid #DFE1E6;
  border-radius: 4px;
  padding: 10px;
  margin: 3px;

  &:focus{
    outline: none;
  }
`;

export const StyledDivButtons = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  hr {
    
  }
`;

export const StyledHr = styled.hr `
  border: none;
  background: linear-gradient(90deg, rgba(255,101,136,1) 0%, rgba(249,176,80,1) 100%);
  width: 85%;
  height: 1px;
  margin: 15px 0;
`;

export const StyledForm = styled.form `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledTitleLogin = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  margin: 15% 0;

  .title {
    text-align: center;
  }
`;

export const StyledButton = styled.button `
  border: none;
  border-radius: 20px;
  width: 85%;
  height: 40px;
  background: linear-gradient(90deg, rgba(255,101,136,1) 0%, rgba(249,176,80,1) 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  transition: border-color .1s ease-in,box-shadow .1s ease-in,background-color .1s ease-in,color .2s ease;

  &:hover {
    color: #ebebeb;
    -webkit-transition: 0.1s;
    transition: 0.1s; 
  }

  &:active {
    color: #ebebeb;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95); 
  }

`;

export const StyledButton2 = styled.button `
  background: none;
  border: none;
  border-radius: 20px;
  width: 85%;
  height: 40px;
  border: 1px solid #FE7E02;
  color: #FE7E02;
  font-weight: bold;
  font-size: 1rem;
  transition: border-color .1s ease-in,box-shadow .1s ease-in,background-color .1s ease-in,color .2s ease;

  &:hover {
    background: #FE7E0208;
    -webkit-transition: 0.1s;
    transition: 0.1s; 
  }

  &:active {
    background: #FE7E0208;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95); 
  }

`;

export const StyledButtonCreate = styled.button `
  border: none;
  border-radius: 10px;
  width: 85%;
  height: 40px;
  background: linear-gradient(90deg, rgba(255,101,136,1) 0%, rgba(249,176,80,1) 100%);
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  transition: border-color .1s ease-in,box-shadow .1s ease-in,background-color .1s ease-in,color .2s ease;

  &:hover {
    color: #ebebeb;
    -webkit-transition: 0.1s;
    transition: 0.1s; 
  }

  &:active {
    -webkit-transition: 0.1s;
    transition: 0.1s; 
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95);
    transform: scale(0.95);
  }

`;

export const StyledVector = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;

  div {
    display: flex;
    width: 100%;
    height: 50%;
  }

  .div-up-left {
    width: 50px;
    height: 50px;
    border-radius: 100% 0px 0px 0px;

    background: #FE7E02;
  }
  
  .div-up-right {
    width: 50px;
    height: 50px;
    border-radius: 100% 0px 0px 0px;

    background: #45525B;
  }

  .div-down-left {
    width: 50px;
    height: 50px;
    border-radius: 0px 0px 100% 0px;

    background: #A8BBC6;
  }

  .div-down-right {
    width: 50px;
    height: 50px;
    border-radius: 0px 0px 100% 0px;

    background: #F9B24E;
  }
`;



export const StyledInputCreate = styled.input `
  display: flex;
  border: none;
  width: 83%;
  height: 45px ;
  color: #6F6F6F;
  background-color: #EDEDED;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 0 0 80px 10px;

  &:focus {
    outline: none;
  }
`;

export const StyledCardDiv = styled.div `
  display: flex;
  flex-direction: column;
  background-color: #FBFBFB;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  width: 84%;
  min-height: 50px;
  padding: 0 0 8px 8px ;
  margin-bottom: 10px;

  .styled-card-name {
    color: #6F6F6F;
    font-size: 0.6rem;
  }

  .styled-card-buttons {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  .styled-card-comments {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 26px;
    width: 50px;
    background-color: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    font-size: 0.6rem;
    color: #6F6F6F;

    p {
      margin-right: 5px;
    }
  }
`;

export const StyledLoading = styled.div `
  animation: is-rotating 1s infinite;
  border: 3px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #F9B24E;
  height: 25px;
  width: 25px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;