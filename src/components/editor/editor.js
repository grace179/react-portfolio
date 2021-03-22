import React from 'react';
import styles from './editor.module.css';
import EditorForm from './editor_form';
import AddForm from './add_form';

const Editor = ({ FileInput, projects, addProject, updateProject, deleteProject }) => {
    return (
      <section className={styles.editor}>
        <h1>Editor</h1>
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
        <AddForm 
          FileInput={FileInput}
          addProject={addProject}/>
      </section>
    );
}

export default Editor;