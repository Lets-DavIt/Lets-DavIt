import axios from "axios";

export const createData = (url, body, clean, setIsLoading) => {
    setIsLoading(true);

    axios.post(url, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then( response => {
        console.log(response.data);
        clean();
        setIsLoading(false);
    })
    .catch( error => {
        console.log(error);
        setIsLoading(false);
        alert("Ocorreu um erro tente novamente");
    });
};