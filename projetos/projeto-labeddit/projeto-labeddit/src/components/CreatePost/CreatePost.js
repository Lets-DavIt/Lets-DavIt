import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { createData } from "../../services/createContent";
import { StyledButtonCreate, StyledForm, StyledHr, StyledInputCreate, StyledLoading } from "../../Styled";
import { StyledInputMain, StyledMain } from "./Styled";

const CreatePost = () => {
    const [form, onChange, cleanFields] = useForm({title: "", body: ""});
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = (event) => {

        event.preventDefault();

        createData( `${BASE_URL}/posts`, form, cleanFields, setIsLoading );
    }

    return (
        <StyledMain>
            <StyledForm onSubmit={onSubmit}>
                <StyledInputMain 
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={onChange}
                    placeholder={"Título"}
                    required
                />
                <StyledInputCreate 
                    name="body"
                    type="text" 
                    value={form.body} 
                    onChange={onChange} 
                    placeholder={"Escreva seu post..."} 
                    required 
                />
                {isLoading ? <StyledLoading></StyledLoading> : <StyledButtonCreate>Postar</StyledButtonCreate>}
                <StyledHr/>
            </StyledForm>
        </StyledMain>
    );
}

export default CreatePost;