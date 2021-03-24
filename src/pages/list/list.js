import React, { useState, useEffect } from 'react';
import Project from '../../components/project/project';
import Loading from '../../components/loading/loading';

const List = ({projectRepository}) => {
  const [loading,setLoading] = useState(true);

  const [adminProject, setAdminProject] = useState([]);
  
  useEffect(() => {
    projectRepository.adminProjectList((projects)=>{
      setAdminProject(projects);
      setLoading(false);
    });
  });
  // console.log(adminProject);
  
    return (
      loading ? <Loading/>:(
      <div>
      { Object.keys(adminProject).map(key => {
          return (<Project project={adminProject[key]} key={key}/>)
      })}
      </div>
      )
    );
}

export default List;