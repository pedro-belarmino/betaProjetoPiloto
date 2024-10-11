import { FC, useState } from "react";
import Inputs from "../../shared/Inputs";
import '../../../styles/registerInputs.sass'


interface RegisterInputsProps {
}

const RegisterInputs: FC<RegisterInputsProps> = () => {

    // Criar o estado local para armazenar os valores dos inputs
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        CPF: "",
        phoneNumber: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value // atualizar o valor do campo
        });
    };

    const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Permite apenas números
        if (/^\d*$/.test(value)) {
            setFormValues({
                ...formValues,
                [name]: value // Atualiza o valor do campo correspondente
            });
        }
    };


    return (
        <div className="registerInputsContainer">
            <label htmlFor="name" className="labelRegisterInput">NOME</label>
            <Inputs
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
            />
            <label htmlFor="email" className="labelRegisterInput">EMAIL</label>
            <Inputs
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
            />
            <label htmlFor="phoneNumber" className="labelRegisterInput">TELEFONE</label>
            <Inputs
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleNumberInput}
            />
            <label htmlFor="CPF" className="labelRegisterInput">CPF</label>
            <Inputs
                type="text"
                name="CPF"
                value={formValues.CPF}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={handleNumberInput}
            />
            <button type="submit" name="submit" className='submitRegisterButton'>Criar</button>


        </div>
    )
}

export default RegisterInputs;