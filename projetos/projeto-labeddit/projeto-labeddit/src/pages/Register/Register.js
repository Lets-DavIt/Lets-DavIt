import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";
import { StyledButton, StyledDivButtons, StyledForm, StyledInput, StyledPage, StyledLoading } from "../../Styled";
import { StyledTerms, StyledTitle } from "./Styled";

const Register = ({ rightButtonText, setRightButtonText }) => {
    useUnprotectedPage();

    const [form, onChange, cleanFields] = useForm({username: "", email: "", password: "" });
  
    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();

        signUp( form, cleanFields, navigate, setRightButtonText, setIsLoading );
    }

    return (
        <StyledPage>
            <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
            <StyledTitle>
                <div>
                    <h1>Olá, boas vindas ao LabEddit ;)</h1>
                </div>
            </StyledTitle>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput 
                    name="username"
                    type="username" 
                    value={form.username} 
                    onChange={onChange} 
                    placeholder={"Nome"}
                    required
                />
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
                <StyledTerms>
                    <p>Ao continuar, você concorda com o nosso <a href="">Contrato de usuário</a> e nossa <a href="">Política de Privacidade</a></p>
                    <div>
                        <input type="checkbox" id="term" name="term"/>
                        <label for="term">Eu concordo em receber emails sobre coisas legais no Labbedit</label>
                    </div>
                </StyledTerms>
                <StyledDivButtons>
                    {isLoading ? <StyledLoading></StyledLoading> : <StyledButton>Cadastrar</StyledButton>}
                </StyledDivButtons>
            </StyledForm>
        </StyledPage>
    );
}

export default Register;