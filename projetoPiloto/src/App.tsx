import { useState } from 'react';
import Login from './views/Login';
import Home from './views/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import '../src/styles/index.sass'
import Register from './views/Register';
import Editing from './views/Editing';
import UsersList from './views/UsersList';
import Navbar from './components/shared/Navbar';
import Sidebar from './components/shared/Sidebar';

const App: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeSubMenuOpen, setIsHomeSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHomeSubMenu = () => {
    setIsHomeSubMenuOpen(!isHomeSubMenuOpen);
  };

  return (
    <>
    <UserProvider>
    <BrowserRouter>
    <div className="app-container">
        {/* Passa a função toggleMenu para o Navbar */}
        <Navbar toggleMenu={toggleMenu} />

        {/* Passa os estados e funções corretas para o Sidebar */}
        <Sidebar
          isMenuOpen={isMenuOpen}
          isHomeSubMenuOpen={isHomeSubMenuOpen}
          toggleHomeSubMenu={toggleHomeSubMenu}
        />

    <Routes>
    <Route path='/login' element={<Login />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/editing' element={<Editing />}/>
    <Route path='/UsersList' element={<UsersList />}/>
    <Route path='*' element={<h1>Página não encontrada</h1>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </UserProvider>

    </>
  )
}

export default App;