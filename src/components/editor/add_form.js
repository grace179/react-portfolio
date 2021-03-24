import React, { useRef, useState } from 'react';
import styles from './add_form.module.css';
import Button from '../button/button';

const AddForm = ({ FileInput, addProject,addFormOpen,handleCloseAddform }) => {

  const formRef = useRef();
  const creatorRef = useRef();
  const titleRef = useRef();
  const skillsRef = useRef();
  const linkRef1 = useRef();
  const linkRef2 = useRef();

  const descRef = useRef();
  const [file, setFile] = useState({fileName: null, fileUrl: null});

  const onFileChange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileUrl: file.url
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const project = {
      id: Date.now(), //uuid
      creator: creatorRef.current.value || '',
      title: titleRef.current.value || '',
      skills: skillsRef.current.value || '',
      link1: linkRef1.current.value || '',
      link2: linkRef2.current.value || '',
      desc: descRef.current.value || '',
      fileName: file.fileName || '',
      fileUrl:file.fileUrl || '',
    };
    formRef.current.reset();
    setFile({
      fileName: null, fileUrl: null
    });
    addProject(project);
    handleCloseAddform();
  };
  
    return (
      
      <div className={ addFormOpen ? `${styles.openModal} ${styles.modal}`: `${styles.modal}`}>
      {addFormOpen ? (
        <form ref={formRef} className={styles.form} action="">
          <header>Add MyProject
            <button 
              onclick={handleCloseAddform}
              className={styles.closeBtn}>X</button>
          </header>
          
          <input 
            ref={titleRef}
            className={styles.input} 
            type="text" name="title" 
            placeholder="title"
            />
          <input ref={creatorRef} className={styles.input} type="text" name="creator" placeholder="creator"/>
          <input ref={skillsRef} className={styles.input} type="text" name="skills" placeholder="skills"/>
          <input ref={linkRef1} className={styles.input} type="url" name="link1" placeholder="link1"/>
          <input ref={linkRef2} className={styles.input} type="url" name="link2" placeholder="link2"/>
          <textarea ref={descRef} className={styles.desc} name="desc" placeholder="description"/>
          <FileInput filename={file.fileName} onFileChange={onFileChange}/>
          <Button name='Add' onClick={onSubmit}/>
        </form>
      ):null
    
    }
      
      </div>

    );
}

export default AddForm;