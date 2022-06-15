import { useState } from "react";

const useForm = (data) => {
    const [form, setForm] = useState(data);

    const onChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    const cleanFields = () => {
        setForm(data);
    }

    return [form, onChange, cleanFields];
}

export default useForm;