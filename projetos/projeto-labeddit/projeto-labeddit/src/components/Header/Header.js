import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToPost } from "../../routes/coodinator";
import { StyledButton, StyledChangePage, StyledDivHeader, StyledEmpty, StyledVector } from "./Styled";

const Header = ({ button, setButton, rightButtonText, setRightButtonText }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token");
    }

    const rightButtonAction = () => {
        if(token){
            logout();
            setRightButtonText("Entrar");
            goToLogin(navigate);
        } 
        else {
            goToLogin(navigate);
        }
    }

    const buttonAction = () => {
        goToPost(navigate);
        setButton(false);
    }

    return (
    <StyledDivHeader>
        <StyledEmpty>
            {button ? <StyledChangePage onClick={buttonAction}><div></div></StyledChangePage> : <></>}
        </StyledEmpty>
        <StyledVector>
            <div>
                <div className="div-up-left"></div>
                <div className="div-up-right"></div>  
            </div>
            <div>
                <div className="div-down-right"></div>
                <div className="div-down-left"></div>  
            </div>
        </StyledVector>
        <div>
            <StyledButton onClick={rightButtonAction}>{ rightButtonText }</StyledButton>
        </div>
    </StyledDivHeader>
    );
}

export default Header;