import RegisterInputs from "../components/pages/Register/RegisterInputs";
import Background from "../components/shared/Background";
import '../styles/register.sass'

const Register: React.FC = () => {
    return (
        <div className="registerContainer">
            <Background>
                <RegisterInputs/>
            </Background>
        </div>
    )
}

export default Register;