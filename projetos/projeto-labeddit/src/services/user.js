import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToPost } from "../routes/coodinator";

export const login = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}/users/login`, body)
        .then( res => {
            localStorage.setItem("token", res.data.token);
            goToPost(navigate);
            clear();
            setIsLoading(false);
            setRightButtonText("Logout")
        })
        .catch( error => {
            alert("erro:", error.response.data);
            clear();
            setIsLoading(false);
        });
}

export const signUp = (body, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}/users/signup`, body)
        .then( res => {
            localStorage.setItem("token", res.data.token);
            goToPost(navigate);
            clear();
            setIsLoading(false);
            setRightButtonText("Logout")
        })
        .catch( error => {
            alert("erro:", error.response.data);
            clear();
            setIsLoading(false);
        });
}

export const votePost = (vote, userVote, id) => {
    const body = {
        direction: vote
    }

    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    if(userVote !== null) {
        console.log(userVote)
        console.log(vote)
        userVote !== vote ? 
            axios.put(`${BASE_URL}/posts/${id}/votes`, body, headers)
            .then( response => {
                console.log("PUT VOTE", response.data);
            })
            .catch( error => {
                console.log(error.response);
                alert(error.response);
            })
        :
            axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
            .then( response => {
                console.log("DELETE VOTE", response.data);
            })
            .catch( error => {
                console.log(error.response);
                alert(error.response);
            })
    }
    else {
        axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then( response => {
            console.log("POST VOTE", response.data);
        })
        .catch( error => {
            console.log(error.response);
            alert(error.response);
        })
    }
}

export const voteComment = (vote, userVote, id) => {
    const body = {
        direction: vote
    }

    const headers = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    if(userVote !== null) {

        userVote === vote ? 
            axios.put(`${BASE_URL}/comments/${id}/votes`, body, headers)
            .then( response => {
                console.log("PUT VOTE", response.data);
            })
            .catch( error => {
                console.log(error.response);
                alert(error.response);
            }) 
        :
            axios.delete(`${BASE_URL}/comments/${id}/votes`, headers)
            .then( response => {
                console.log("DELETE VOTE", response.data);
            })
            .catch( error => {
                console.log(error.response);
                alert(error.response);
            })
    }
    else {
        axios.post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then( response => {
            console.log("POST VOTE", response.data);
        })
        .catch( error => {
            console.log(error.response);
            alert(error.response);
        })
    }
}