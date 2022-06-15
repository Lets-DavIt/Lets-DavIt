import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { Button_enviar, DivStyled, FormStyled, InputStyled, SelectStyled } from "../../Styled";

function CreateTripPage() {
  const navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const goToPage = (page) => {
    navigate(page)
  }

  const createTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    }

    axios.post(`${BASE_URL}/trips`, body, headers)
    .then( response =>{
      console.log(response.data);
      cleanFields();
    }).catch( error => {
      console.log(error.response.data)
      alert(error.reponse);
    });
  }

  return (
    <DivStyled>
      <h1>Criar Viagem</h1>
      <FormStyled onSubmit={createTrip}>
        <InputStyled
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
          required
        />
        <SelectStyled 
          name="planet"
          value={form.planet}
          onChange={onChange} 
          placeholder="Escolha um planeta" 
          required
        >
          <option value="" selected disabled hidden>Escolha um Planeta</option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
          <option value="Plutão não é planeta">Plutão não é planeta</option>

        </SelectStyled>
        <InputStyled
          name="date"
          value={form.date}
          onChange={onChange}
          type={"date"}
          placeholder="dd/mm/aa"
          required
        />
        <InputStyled
          name="description"
          value={form.description}
          onChange={onChange}
          placeholder="Descrição"
          required
        />
        <InputStyled
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          type="number"
          placeholder="Duração em dias"
          required
        />
        <div>
          <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
          <Button_enviar>Criar</Button_enviar>
        </div>
      </FormStyled>
    </DivStyled>
  );
}

export default CreateTripPage;