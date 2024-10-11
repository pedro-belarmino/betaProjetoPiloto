import Background from "../components/shared/Background";
import LoginForm from "../components/pages/Login/LoginForm";
import '../styles/login.sass'

 const  Home: React.FC = () => {
    return(
        <div className="loginContainer">
            <Background>
                <LoginForm/>
            </Background>
        </div>
    )
}


export default Home;