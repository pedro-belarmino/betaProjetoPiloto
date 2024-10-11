import { useUserContext } from '../contexts/UserContext';
import '../styles/home.sass'

const Home: React.FC = () => {
    const { userLogin, message } = useUserContext(); // Acessar o userLogin e o token (message)

    return(
        <div>
            <h1 className='presentationContainer'>Olá {userLogin}!</h1>
            <h1 className='presentationContainer'>Seu token: {message}</h1> {/* Exibe o token */}
        </div>
    );
}

export default Home;
