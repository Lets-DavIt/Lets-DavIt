import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/UseRequestData.js"
import { BASE_URL } from "../../constants/urls.js"
import { Button_enviar, CardStyled, DivStyled } from "../../Styled.js";

function ListTripsPage() {
  const navigate = useNavigate();
  const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const goToPage = (page) => {
    navigate(page)
  }

  return (
    <DivStyled>
      <div>
        <Button_enviar onClick={() => goToPage(-1)} >Voltar</Button_enviar>
        <Button_enviar onClick={() => goToPage("/application")} >Inscrever-se</Button_enviar>
      </div>
      <h1>Lista de Vigens</h1>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Deu erro</h1>}
      {!isLoading &&
        data &&
        (data.length > 0 ? (
          <ul>{data.map(map => {
            return (
              <CardStyled key={map.id}>
                <p>Nome: <span>{map.name}</span></p>
                <p>Descrição: <span>{map.description}</span></p>
                <p>Planeta: <span>{map.planet}</span></p>
                <p>Duração: <span>{map.durationInDays}</span></p>
                <p>Data: <span>{map.date}</span></p>
              </CardStyled>
            )
          })}</ul>
        ) : (
          "Lista não encontrada"
        ))}
    </DivStyled>
  );
};

export default ListTripsPage;