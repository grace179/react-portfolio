import React from 'react';
import styles from './project.module.css';
import sampleImg from '../../common/images/default.jpg';

const Project = ({project}) => {
    
    const {creator , title, desc, skills, link1, link2, fileUrl} = project;
    const url = fileUrl || sampleImg;
    return (
      <li className={styles.project}>
        <img className={styles.image} src={url} alt="project"/>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.creator}>{creator}</p>
          <p className={styles.skills}>{skills}</p>
          <a className={styles.link} rel="noreferrer" target="_blank" href={link1}>GitHub</a>
          <a className={styles.link} rel="noreferrer" target="_blank" href={link2}>Demo Link</a>

          <p className={styles.desc}>{desc}</p>
        </div>
      </li>
    );
}

export default Project;