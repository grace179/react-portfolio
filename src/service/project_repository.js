import firebaseApp from "./firebase";
import 'firebase/database';

class ProjectRepository {
  saveProject(userId, project){
    firebaseApp.database().ref(`${userId}/projects/${project.id}`).set(project);
  }
  deleteProject(userId, project){
    firebaseApp.database().ref(`${userId}/projects/${project.id}`).remove();
  }
}

export default ProjectRepository;