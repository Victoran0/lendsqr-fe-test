import './styles/index.scss'
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
