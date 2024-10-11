import React from "react"
import '../../../styles/tableUsersList.sass'

const TableUsersList: React.FC = () => {
    return(
        <div>
            <table>
                <thead>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">CPF</th>
                <th scope="col">Telefone</th>
                </thead>
                <tbody>
                <tr>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableUsersList;