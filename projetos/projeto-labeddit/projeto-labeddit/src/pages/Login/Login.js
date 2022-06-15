import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { goToRegister } from "../../routes/coodinator";
import { login } from "../../services/user";
import { StyledButton, StyledForm, StyledInput, StyledPage, StyledButton2, StyledDivButtons, StyledTitleLogin, StyledVector, StyledHr, StyledLoading } from "../../Styled";

const Login = ({ setRightButtonText }) => {
    useUnprotectedPage();

    const [ form, onChange, cleanFields ] = useForm({email: "", password: ""});

    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();

        login(form, cleanFields, navigate, setRightButtonText, setIsLoading);
    }

    return (
        <StyledPage>
            <StyledTitleLogin>
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
                <div className="title">
                    <h1>LabEddit</h1>
                    <p>O projeto de rede social da Labenu</p>  
                </div>
            </StyledTitleLogin>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput 
                    name="email"
                    type="email" 
                    value={form.email} 
                    onChange={onChange} 
                    placeholder={"E-mail"}
                    required
                />
                <StyledInput 
                    name="password"
                    type="password" 
                    value={form.password} 
                    onChange={onChange} 
                    placeholder={"Senha"} 
                    required 
                    pattern={"^.{8,}"}
                    title={"Sua senha deve ter no mínimo 8 caracteres."}
                />
                
                <StyledDivButtons>
                    {isLoading ? <StyledLoading></StyledLoading> : <StyledButton>Continuar</StyledButton>}
                    <StyledHr/>
                    <StyledButton2 onClick={ () => goToRegister( navigate )}>Crie uma conta!</StyledButton2> 
                </StyledDivButtons>
            </StyledForm>
        </StyledPage>
    );
};

export default Login;