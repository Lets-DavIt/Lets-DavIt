import styled, { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: slategray;
  }
`;

export const MainDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  width: 100vw;
`

export const DivStyled = styled.div `
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 500px;

  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .page-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0px;
    width: 100%;
  }
`

export const SelectStyled = styled.select `
  width: 104%;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
`

export const FormStyled = styled.form `
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`

export const InputStyled = styled.input `
  background-color: white;
  height: 30px;
  width: 100%;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  border-color: gray;
  margin: 0px 0px 15px;
`

export const Button_enviar = styled.button`
    min-width: 100px;
    height: 40px;
    color: white;
    background-color: slategray;
    border: 0;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    margin: 15px 10px;
    padding: 0 20px;
    text-align: center;
    transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
    &:hover {
      cursor: pointer;
      background: #b6d4e3;
      -webkit-transition: 0.2s;
      transition: 0.2s;       
    }
`

export const DetailStyled = styled.button `
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin: 10px 0px;
  max-width: 500px;
  width: 100%;
  transition: border-color .2s ease-in,box-shadow .2s ease-in,background-color .2s ease-in,color .3s ease;
  
  &:hover {
    cursor: pointer;
    background: #b6d4e3;
    -webkit-transition: 0.2s;
    transition: 0.2s;       
  }
`

export const ButtonDelete = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 25px;
  width: 50px;
  height: 50px;


  &:hover {
    cursor: pointer;
    background: #c8e6f5;
    transition: 0.2s; 

  }

  img {
    width: 20px;
    height: 20px;

  }
`

export const CardStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0px;
  max-width: 500px;
  width: 100%;
  text-align: start;

  span{
    color: black;
  }
`