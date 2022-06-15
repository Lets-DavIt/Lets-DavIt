import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/urls";
import { Button_enviar, DivStyled, CardStyled } from "../../Styled";

function TripDetailPage() {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const navigate = useNavigate();

  const goToPage = (page) => navigate(page);

  useEffect( () => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    setIsLoading(true);
    setError(undefined);

    axios.get(`${BASE_URL}/trip/${id}`, headers)
    .then( response => {
      setIsLoading(false);
      setData(response.data.trip);
    })
    .catch( error => {
      setError(error);
      setIsLoading(false);
    });
  }

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve
    }

    axios.put(`${BASE_URL}/trips/${id}/candidates/${candidateId}/decide`, body, headers)
    .then( response => {
      alert(response.data.message)
    })
    .catch( error => {
      alert(error);
    });
  }

  const renderCandidates = () => {
    return data.candidates.map( candidate => {
        return <CardStyled key={candidate.id}>
            <p>Nome: <span>{candidate.name}</span></p>
            <p>Profissão: <span>{candidate.profession}</span></p>
            <p>Idade: <span>{candidate.age}</span></p>
            <p>País: <span>{candidate.country}</span></p>
            <p>Texto de Candidatura: <span>{candidate.applicationText}</span></p>
            <div>
              <Button_enviar onClick={() => decideCandidate(true, candidate.id)}>Aprovar</Button_enviar>
              <Button_enviar onClick={() => decideCandidate(false, candidate.id)}>Reprovar</Button_enviar>
            </div>
          </CardStyled>
      });
  };

  const renderApproved = () => {
    return data.approved.map( approved => {
      return (
        <li key={approved.id}>{approved.name}</li>
      )
    });
  }
  
  return (
    <DivStyled>
      {console.log("ID:", id)}
      {console.log(data)}
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Deu erro</h1>}
      {!isLoading && data 
      && (data ? (
        <>
          <h1>{data.name}</h1>
          <div className="page-details">
            <p>Nome: {data.name}</p>
            <p>Descrição: {data.description}</p>
            <p>Planeta: {data.planet}</p>
            <p>Duração: {data.durationInDays}</p>
            <p>Data: {data.date}</p>
          </div>
      </>
      ) : ("Lista não encontrada"))}
      <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
      <h2>Candidatos Pendentes</h2>
      {data.candidates !== undefined ? (<ul>{renderCandidates()}</ul>) : (<p>Não há candidatos pendentes</p>)}
      <h2>Candidatos Aprovados</h2>
      {data.approved !== undefined ? (<ul>{renderApproved()}</ul>) : (<p>Não há candidatos Aprovados</p>)}
    </DivStyled>
  );
};

export default TripDetailPage;