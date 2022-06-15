import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url, header) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    
    const getData = () => {
        setIsLoading(true);
        setError(undefined);
        
        axios.get(url, header)
            .then((res) => {
                setIsLoading(false);
                setData(res.data.trips);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
        };

        useEffect(() => {
            getData();
        }, [url]);

  return [data, isLoading, error];

}