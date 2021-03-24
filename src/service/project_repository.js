import firebaseApp from "./firebase";
import 'firebase/database';

class ProjectRepository {
  
  syncProjects(userId, onUpdate){
    const projectRef = firebaseApp.database().ref(`${userId}/projects`);
    projectRef.on('value', (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => projectRef.off();
  }

  saveProject(userId, project){
    firebaseApp.database().ref(`${userId}/projects/${project.id}`).set(project);
  }
  
  deleteProject(userId, project){
    firebaseApp.database().ref(`${userId}/projects/${project.id}`).remove();
  }

  adminProjectList(adminProjectSet){
    const adminId = process.env.REACT_APP_ADMIN_UID;
    firebaseApp.database().ref(`${adminId}/projects`)
      .once('value').then((snapshot) => {
        // console.log("파이어베이스에서 데이터 가져옴");
        const data = snapshot.val();
        data && adminProjectSet(data);
    });
  }
  

  userProjectList(userId,userProjectSet){
    // userId
    firebaseApp.database().ref(`${userId}/projects`)
      .once('value').then((snapshot) => {
        // console.log("파이어베이스에서 데이터 가져옴");
        const data = snapshot.val();
        data && userProjectSet(data);
    });
  }
}

export default ProjectRepository;