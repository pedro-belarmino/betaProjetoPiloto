import Login from './views/Login';
import Home from './views/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import '../src/styles/index.sass'
import Register from './views/Register';
import Editing from './views/Editing';
import UsersList from './views/UsersList';

const App: React.FC = () => {

  return (
    <>
    <UserProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/editing' element={<Editing />}/>
    <Route path='/usersList' element={<UsersList />}/>
    <Route path='*' element={<h1>Página não encontrada</h1>}/>
    </Routes>
    </BrowserRouter>
    </UserProvider>

    </>
  )
}

export default App;