import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/UseRequestData";
import { Button_enviar, DivStyled, FormStyled, InputStyled, SelectStyled } from "../../Styled";

function ApplicationFormPage() {
  const navigate = useNavigate();
  const [data, isLoading] = useRequestData(`${BASE_URL}/trips`);

  const [form, onChange, cleanFields] = useForm({
    selectTripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const goToPage = (page) => {
    navigate(page)
  }

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    }

    axios.post(`${BASE_URL}/trips/${form.selectTripId}/apply`, body)
    .then( response => {
      cleanFields();
    })
    .catch(error => {
      alert(error.response);
    });
  }

  const list = data.map( trip => {
    return (
      <option key={trip.id} value={trip.id} >{trip.name}</option>
    )
  });

  return (
    <DivStyled>
      <FormStyled onSubmit={applyToTrip}>
        <h1>Inscreva-se para uma viagem</h1>
        <SelectStyled name="selectTripId" value={form.selectTripId} onChange={onChange}>
          <option value="" selected disabled hidden>Escolha uma viagem</option>
          {!isLoading && data && (data.length > 0 ? (list) : ("lista não encontrada"))}
        </SelectStyled>
        <InputStyled 
          name="name"
          value={form.name} 
          onChange={onChange} 
          placeholder={"Nome"}
          required
        />
        <InputStyled
          name="age"
          type="number"
          value={form.age}
          onChange={onChange}
          placeholder="Idade"
          pattern={"^(1[89]|[2-9]\d)$"}
          title={"Você deve ter 18 anos ou mais."}
          required
        />
        <InputStyled
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          placeholder="Texto de candidatura" 
          required
        />
        <InputStyled
          name="profession"
          value={form.profession}
          onChange={onChange}
          placeholder="Profissão" 
          required
        />
        <SelectStyled name="country" value={form.country} onChange={onChange}>
          <option value="" selected disabled hidden>Escolha um País</option>
          <option value="Brasil">Brasil</option>
          <option value="Argentina">Argentina</option>
          <option value="Angola">Angola</option>
        </SelectStyled>
        <div>
          <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
          <Button_enviar>Enviar</Button_enviar>
        </div>
      </FormStyled>
    </DivStyled>
  );
}

export default ApplicationFormPage;