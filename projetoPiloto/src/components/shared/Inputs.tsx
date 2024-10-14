import { FC } from 'react';
// import InputMask from 'react-input-mask'
import '../../styles/inputs.sass'



interface InputsProps {
    type: string;
    name: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputMode?:  "search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal";  //  inputMode para o RegisterInput. Garantir que o tipo seja restrito.
    pattern?: string;    //  pattern para o RegisterInput
    placeholder?: string;
}

const Inputs: FC<InputsProps> = ({ type, name, value, onChange, inputMode, pattern, placeholder }) => {
    return (
        <div className='inputContainer'>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                className="input"
                placeholder={placeholder}
                onChange={onChange}
                inputMode={inputMode}
                pattern={pattern}
            />
        </div>
    )
}

export default Inputs;