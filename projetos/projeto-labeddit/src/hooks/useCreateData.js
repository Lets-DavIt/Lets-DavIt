import { useEffect } from "react";
import axios from "axios";

const useCreateData = (body, url) => {

    useEffect(() => {
        axios.post(url, body, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then( response => {
            console.log(response.data)
        })
        .catch( error => {
            console.log(error);
            alert("Ocorreu um erro tente novamente");
        });
    },[url]);

}

export default useCreateData;