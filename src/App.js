import './App.css';
import AuthService from './service/auth_service';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Create from './pages/create/create';
import List from './pages/list/list';
import MainHeader from './components/header/mainheader';

function App() {
  const authService = new AuthService();

  return (
    <div>
      <MainHeader/>
        <Switch>
          <Route exact path="/">
            <Home authService={authService}/>
          </Route>
          <Route path="/create">
            <Create authService={authService}/>
          </Route>
          <Route path="/list">
            <List/>
          </Route>
        </Switch>
    </div>
    );
}

export default App;
