import Inputs from '../../shared/Inputs';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import '../../../styles/loginForm.sass'

const LoginForm: React.FC = () => {

    const [userPassword, setUserPassword] = useState<string>('');
    const { userLogin, setUserLogin, setMessage } = useUserContext(); // Pegando setMessage do contexto
    const navigate = useNavigate();

    const handleUserLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin(e.target.value);
    };

    const handleUserPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://192.168.0.105:5480/api-boilerplate/v1/token', {
                username: userLogin,
                password: userPassword,
            });

            console.log('Código de status:', response.status);

            if (response.status === 200) {
                console.log('Login bem-sucedido!', response.data);

                setMessage(response.data.token || 'Token não encontrado');

                navigate('/home');
            }

        } catch (error: any) {
            if (error.response) {
                console.log('Erro no servidor, código de status:', error.response.status);
                console.error('Mensagem de erro:', error.response.data);
            } else {
                console.error('Erro na requisição, não enviado   ', error.message);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Inputs type="text" placeholder='Login' name="login" value={userLogin} onChange={handleUserLoginChange} />
                <Inputs type="password" placeholder='Senha' name="password" value={userPassword} onChange={handleUserPasswordChange} />
                <button type="submit" name="submit" className='submitButton'>Sing In</button>
            </form>
        </div>
    );
};

export default LoginForm;
