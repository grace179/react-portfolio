import React from 'react';
import styles from './preview.module.css';
import Project from '../project/project';

const Preview = ({projects}) => {
    return (
      <section className={styles.preview}>
        <h1>Preview</h1>
        <h2>My Projects</h2>
        <ul>
          {
            Object.keys(projects).map(key => ( 
              <Project project={projects[key]} key={key}/>
            ))
          }
        </ul>
      </section>
    );
}

export default Preview;