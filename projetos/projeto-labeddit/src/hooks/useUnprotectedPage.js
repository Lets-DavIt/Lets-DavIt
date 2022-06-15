import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToPost } from "../routes/coodinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate();

    useLayoutEffect( () => {
        const token = localStorage.getItem("token");
        if(token){
            goToPost(navigate)
        }
    },[navigate]);
    
}

export default useUnprotectedPage;