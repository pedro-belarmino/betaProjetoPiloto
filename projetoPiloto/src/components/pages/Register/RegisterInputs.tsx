import { FC, useState } from "react";
import Inputs from "../../shared/Inputs";
import '../../../styles/registerInputs.sass'
import axios from "axios";


const RegisterInputs: FC = () => {

    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userPhoneNumber, setUserPhoneNumber] = useState<string>('');
    const [userCPF, setUserCPF] = useState<string>('');

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };
    const handleUserEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value);
    };
    const handleUserPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserPhoneNumber(e.target.value);
    };
    const handleUserCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCPF(e.target.value);
    };


    const handleRegisterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://192.168.0.105:8080/api-test/castrar', {
                userName: userName,
                email: userEmail,
                phone: userPhoneNumber,
                cpf: userCPF,
            });
            console.log('Código de status:', response.status);

            if (response.status === 200) {
                console.log('cadastro enviado!', response.data);
            
            }

        } catch (error: any) {
            if (error.response) {
                console.log('Erro no envio das informações do usuario sla tbm', error.response.status);
                console.error('Mensagem de erro:', error.response.data);
            } else {
                console.error('Erro na requisição:', error.message);

            }
        }
    }

    return (
        <div className="registerInputsContainer">

            <form onSubmit={handleRegisterSubmit}>
                {/* <label htmlFor="name" className="labelRegisterInput">NOME</label> */}
                <Inputs
                    type="text"
                    name="name"
                    value={userName}
                    placeholder="Nome"
                    onChange={handleUserNameChange}
                />
                {/* <label htmlFor="email" className="labelRegisterInput">EMAIL</label> */}
                <Inputs
                    type="text"
                    name="email"
                    value={userEmail}
                    placeholder="E-mail"
                    onChange={handleUserEmailChange}
                />
                {/* <label htmlFor="phoneNumber" className="labelRegisterInput">TELEFONE</label> */}
                <Inputs
                    type="text"
                    name="phoneNumber"
                    value={userPhoneNumber}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Telefone"
                    onChange={handleUserPhoneNumberChange}
                />
                {/* <label htmlFor="CPF" className="labelRegisterInput">CPF</label> */}
                <Inputs
                    type="text"
                    name="CPF"
                    value={userCPF}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="CPF"
                    onChange={handleUserCPFChange}
                />
                <button type="submit" name="submit" className='submitRegisterButton'>Criar</button>
            </form>

        </div>
    )
}

export default RegisterInputs;