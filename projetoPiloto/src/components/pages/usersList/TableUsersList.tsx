import { FC, useState, useEffect } from "react"
import '../../../styles/tableUsersList.sass'
import axios from "axios";
import Inputs from "../../shared/Inputs";

interface ShowUser {
    id: number;
    userName: string;
    email: string;
    cpf: string;
    phone: string;
}

const formatCPF = (value: string) => {
    const numericCPFValue = value.replace(/\D/g, '').slice(0, 11);
    return numericCPFValue
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const formatPhoneNumber = (value: string) => {
    const numericPhoneValue = value.replace(/\D/g, '').slice(0, 11);
    return numericPhoneValue
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{1})(\d{4})(\d{4})/, '$1 $2-$3');
};


const TableUsersList: FC = () => {

    const [users, setUsers] = useState<ShowUser[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://192.168.0.105:8080/api-test/getall');
            setUsers(response.data);
            setLoading(false);
        } catch (error) {
            setError('Erro ao buscar usuários.');
            setLoading(false);
        }
    };

    //carregar os usuários
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div className="loadingMessage">Carregando usuários...</div>;
    }

    if (error) {
        return <div className="errorMessage">{error}</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Edição</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.cpf}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button type="button" name="editing" className="editingUserButton" />
                                <button type="button" name="able" className="ableUserButton" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableUsersList;