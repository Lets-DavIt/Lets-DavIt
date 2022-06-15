import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/urls";
import { useRequestData } from "../../hooks/UseRequestData.js"
import { ButtonDelete, Button_enviar, DetailStyled, DivStyled } from "../../Styled";
import excluir from "../../img/excluir.png";

function AdminHomePage() {
    const [data, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

    const navigate = useNavigate();

    const deleteTrip = (id) => {
        axios.delete(`${BASE_URL}/trips/${id}`, headers)
        .then( res => {
            
        })
        .catch( error => {
            alert(error.response);
        });
    };

    const goToPage = (page, id) => {
        localStorage.setItem("id", id)
        navigate(page)
    };

    const logout = () => {
        localStorage.setItem("token", "");
        navigate("/");
    }

    return (
        <DivStyled>
            <h1>Painel Administrativo</h1>
            <div>
                <Button_enviar onClick={() => goToPage(-1)}>Voltar</Button_enviar>
                <Button_enviar onClick={() => goToPage("/createTrip")}>Criar Viagem</Button_enviar>
                <Button_enviar onClick={logout}>Logout</Button_enviar>
            </div>
            {isLoading && <h1>Carregando...</h1>}
            {!isLoading && error && <h1>Deu erro</h1>}
            {!isLoading &&
                data &&
                (data.length > 0 ? (
                <>{data.map(map => {
                    return (
                    <DetailStyled onClick={() => goToPage("/tripDetail", map.id)} key={map.id}>
                        <p>{map.planet}</p>
                        <ButtonDelete onClick={() => deleteTrip(map.id)} ><img src={excluir}/></ButtonDelete>
                    </DetailStyled>
                    )
                })}</>
                ) : (
                "Lista não encontrada"
                ))}
        </DivStyled>
    );
}

export default AdminHomePage;