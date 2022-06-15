import styled from "styled-components";

export const StyledDivHeader = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background-color: #EDEDED;
`

export const StyledEmpty = styled.div `
  width: 100px;
`;

export const StyledVector = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  div {
    display: flex;
    width: 100%;
    height: 50%;
  }

  .div-up-left {
    width: 15px;
    height: 15px;
    border-radius: 100% 0px 0px 0px;

    background: #FE7E02;
  }
  
  .div-up-right {
    width: 15px;
    height: 15px;
    border-radius: 100% 0px 0px 0px;

    background: #45525B;
  }

  .div-down-left {
    width: 15px;
    height: 15px;
    border-radius: 0px 0px 100% 0px;

    background: #A8BBC6;
  }

  .div-down-right {
    width: 15px;
    height: 15px;
    border-radius: 0px 0px 100% 0px;

    background: #F9B24E;
  }
`;

export const StyledButton = styled.button `
  background: none;
  border: none;
  color: #4088CB;
  font-weight: bold;
  font-size: 1rem;
  width: 100px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledChangePage = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #4088CB;
  font-weight: bold;
  font-size: 1rem;
  width: 100px;
  height: 100%;

  &:hover {
    cursor: pointer;
  }

  div{
    width:30px;
    height:30px;
    background:none;
    position:relative;
}

  div:before,div:after{
    content:'';
    position:absolute;
    width: 26px;
    height: 2px;
    background-color: #A3A3A3;
    border-radius:2px;
    top:16px;
}

  div:before{
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
    left:2px;
  }
  div:after{
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
    right:2px;
  }
`;