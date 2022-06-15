import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { createData } from "../../services/createContent";
import { StyledButtonCreate, StyledForm, StyledHr, StyledInputCreate, StyledLoading } from "../../Styled";
import { StyledMain } from "../CreatePost/Styled";

const CreateComment = ({id}) => {

    const [form, onChange, cleanFields] = useForm({ body: "" });
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = (event) => {

        event.preventDefault();

        createData( `${BASE_URL}/posts/${id}/comments`, form, cleanFields, setIsLoading);
    }

    return (
        <StyledMain>
            <StyledForm onSubmit={onSubmit}>
                <StyledInputCreate 
                    name="body"
                    type="text" 
                    value={form.body} 
                    onChange={onChange} 
                    placeholder={"Adicionar comentário"} 
                    required 
                />
                {isLoading ? <StyledLoading></StyledLoading> : <StyledButtonCreate>Responder</StyledButtonCreate>}
                <StyledHr/>
            </StyledForm>
            
        </StyledMain>
    );
}

export default CreateComment;