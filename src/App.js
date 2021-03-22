import './App.css';
import AuthService from './service/auth_service';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Create from './pages/create/create';
import List from './pages/list/list';
import MainHeader from './components/header/mainheader';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import ProjectRepository from './service/project_repository';

const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
);
const projectRepository = new ProjectRepository();
  
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
            <Create 
            FileInput={FileInput}
            authService={authService}
            projectRepository={projectRepository}
            />
          </Route>
          <Route path="/list">
            <List/>
          </Route>
        </Switch>
    </div>
    );
}

export default App;
