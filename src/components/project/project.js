import React from 'react';
import styles from './project.module.css';

const DEAFAULT_IMAGE = '../../common/images/default.jpg';

const Project = ({project}) => {
    
    const {creator , title, desc, fileUrl} = project;
    const url = fileUrl || DEAFAULT_IMAGE;
    return (
      <li className={styles.project}>
        <img className={styles.image} src={url} alt="project"/>
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.creator}>{creator}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </li>
    );
}

export default Project;