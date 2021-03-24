import React, { useState } from 'react';
import styles from './editor.module.css';
import EditorForm from './editor_form';
import AddForm from './add_form';

const Editor = ({ FileInput, projects, addProject, updateProject, deleteProject }) => {

  const [addFormOpen, setAddFormOpen]= useState(false);
  const handleOpenAddForm = () => {
    setAddFormOpen(true);
  }
  const handleCloseAddform = (event) => {
    event.preventDefault();
    setAddFormOpen(false);
  }

  return (
      <section className={styles.editor}>
        <button
          className={styles.addBtn}
          onClick={handleOpenAddForm}>프로젝트 추가하기</button>
        <AddForm
          FileInput={FileInput}
          addProject={addProject}
          className={styles.add}
          addFormOpen={addFormOpen}
          handleCloseAddform={handleCloseAddform}/>
        <div className={styles.line}></div>
        <h1> <span>↓</span> Project Edit <span>↓</span></h1>  
        {
          Object.keys(projects).map(key => ( 
            <EditorForm
              FileInput={FileInput}
              project={projects[key]}
              updateProject={updateProject}
              deleteProject={deleteProject}
              key={key}/>
          ))
        }
      </section>
    );
}

export default Editor;