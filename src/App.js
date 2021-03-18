import './App.css';
import Login from './components/login/login';
import AuthService from './service/auth_service';

function App() {
  const authService = new AuthService();

  return (
    <Login authService={authService}/>
    );
}

export default App;
