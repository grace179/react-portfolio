import React, { useEffect, useState } from 'react';
import styles from './create.module.css';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../../components/header/auth_header';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';

const Create = ({ FileInput, authService, projectRepository }) => {

  const history = useHistory();
  const historyState = useHistory().state;
  
  const [projects, setProjects] = useState({});
  const [userId, setUserID] = useState(historyState && historyState.id);
  
  const onLogout = () => {
    authService.logout();
  };

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
          <h1>Create Page</h1>
          
          <Editor
            FileInput={FileInput}
            projects={projects} 
            addProject={createOrUdateProject}
            updateProject={createOrUdateProject}
            deleteProject={deleteProject}/>
          <Preview projects={projects}/>
      </section>
    );
}

export default Create;