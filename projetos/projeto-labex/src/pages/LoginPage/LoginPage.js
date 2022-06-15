import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import useForm from "../../hooks/useForm.js";
import { Button_enviar, DivStyled, FormStyled, InputStyled } from "../../Styled";


function LoginPage() {
  const [form, onChange, cleanFields] = useForm({email: "", password: ""});
  
  const navigate = useNavigate();

  const goToPage = (page) => navigate(page);

  const onSubmit = (event) => {
    event.preventDefault();

    axios.post(`${BASE_URL}/login`, form)
    .then( res => {
      localStorage.setItem("token", res.data.token);
      goToPage("/adminHome");
    })
    .catch( error => {
      alert("erro:", error.response);
      cleanFields();
    });
  }

  return (
    <DivStyled>
      <h1>Login</h1>
      <FormStyled onSubmit={onSubmit}>
        <InputStyled 
          name="email"
          type="email" 
          value={form.email} 
          onChange={onChange} 
          placeholder={"E-mail"}
          required
        />
        <InputStyled 
          name="password"
          type="password" 
          value={form.password} 
          onChange={onChange} 
          placeholder={"Senha"} 
          required 
          pattern={"^.{6,}"}
          title={"Sua senha deve ter no mínimo 6 caracteres."}
        />
        <div>
          <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
          <Button_enviar>Entrar</Button_enviar>
        </div>
      </FormStyled>
    </DivStyled>
  );
};

export default LoginPage;