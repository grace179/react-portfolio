import React, { useRef } from 'react';
import styles from './editor_form.module.css';
import Button from '../button/button';

const EditorForm = ({ FileInput, project, updateProject, deleteProject }) => {
  const {creator , title, desc, skills, fileName} = project;
  const creatorRef = useRef();
  const titleRef = useRef();
  const skillsRef = useRef();
  const descRef = useRef();

  const onFileChange = file => {
    updateProject({
      ...project,
      fileName: file.name,
      fileUrl: file.url
    })
  }
  
  const onChange = (event) => {
    if(event.currentTarget == null){
      return;
    }
    event.preventDefault();
    updateProject({
      ...project,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  const onSubmit = () => {
    deleteProject(project);
  };

    return (
      <form className={styles.form} action="">
        <input ref={creatorRef} className={styles.input} type="text" onChange={onChange} name="creator" value={creator}/>
        <input ref={titleRef} className={styles.input} type="text" onChange={onChange} name="title" value={title}/>
        <input ref={skillsRef} className={styles.input} type="text" onChange={onChange} name="skills" value={skills}/>
        <textarea ref={descRef} className={styles.desc} onChange={onChange} name="desc" value={desc}/>
        <FileInput filename={fileName} onFileChange={onFileChange}/>
        <Button name='Delete' onClick={onSubmit}/>
      </form>
    );
}

export default EditorForm;