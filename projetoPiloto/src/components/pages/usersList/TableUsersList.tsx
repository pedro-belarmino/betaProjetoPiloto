import { FC, useState, useEffect } from "react"
import '../../../styles/tableUsersList.sass'
import axios from "axios";

interface ShowUser {
    id: number;
    userName: string;
    email: string;
    cpf: string;
    phone: string;
}



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

    const formatCpf = (cpf: string): string => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    };

    const formatPhoneNumber = (phone: string): string => {
        return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{5})/, '($1) $2 $3-$4');
    };

    //carregar os usuários
    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div className="loadingMessage">
                    <h1>Carregando usuários...</h1>
                    <img src="" alt="loading" className="loadingImage" /> 
                </div>;
    }

    if (error) {
        return <div className="errorMessage">
            <img src="" alt="" />
            <p>{error}</p>
            </div>;
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
                            <td>{formatCpf(user.cpf)}</td>
                            <td>{formatPhoneNumber(user.phone)}</td>   
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