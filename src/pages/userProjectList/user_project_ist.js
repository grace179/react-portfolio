import React, { useState, useEffect } from 'react';
import Project from '../../components/project/project';
import Loading from '../../components/loading/loading';

const UserProjectList = ({projectRepository, user}) => {
  const [loading,setLoading] = useState(true);

  const [userProject, setUserProject] = useState([]);
  // const [userId, setUserID] = useState(historyState && historyState.id);
  
  useEffect(()=>{
    authService.onAuthChange(user => {
      if(user){
        setUserID(user.uid);
      }else{
        history.push('/');
      }
    })
  });

  useEffect(() => {
    projectRepository.userProjectList((projects)=>{
      setUserProject(projects);
      setLoading(false);
    });
  });
  // console.log(userProject);
  
    return (
      loading ? <Loading/>:(
      <div>
      { Object.keys(userProject).map(key => {
          return (<Project project={userProject[key]} key={key}/>)
      })}
      </div>
      )
    );
}

export default UserProjectList;