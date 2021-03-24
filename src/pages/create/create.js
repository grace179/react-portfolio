import React, { useEffect, useState } from 'react';
import styles from './create.module.css';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../../components/header/auth_header';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import Loading from '../../components/loading/loading';

const Create = ({ FileInput, authService, projectRepository }) => {

  const history = useHistory();
  const historyState = useHistory().state;
  
  const [projects, setProjects] = useState({});
  const [userId, setUserID] = useState(historyState && historyState.id);
  const [lodaing, setLoading] = useState(true);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = projectRepository.syncProjects(userId, projects => {
      setProjects(projects);
      setLoading(false);
    });
    return () => stopSync();
  }, [userId,projectRepository]);

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(user){
        setUserID(user.uid);
      }else{
        history.push('/');
      }
    })
  });


  const createOrUdateProject = (project) => {
    setProjects(projects => {
      const updated = {...projects};
      updated[project.id] = project;
      return updated;
    });
    projectRepository.saveProject(userId, project);
  };

  const deleteProject = (project) => {
    setProjects(projects => {
      const updated = {...projects};
      delete updated[project.id];
      return updated;
    });
    projectRepository.deleteProject(userId, project);
  };

    return (
      <section className={styles.create}>
        <AuthHeader onLogout={onLogout}/>
          <h1 className={styles.desc}>프로젝트를 추가하고 수정할 수 있습니다.</h1>
          <div className={styles.container}>
            <Editor
              FileInput={FileInput}
              projects={projects} 
              addProject={createOrUdateProject}
              updateProject={createOrUdateProject}
              deleteProject={deleteProject}/>
              {
                lodaing ?
                <Loading/>:
                <Preview projects={projects}/>

              }
          </div>
      </section>
    );
}

export default Create;