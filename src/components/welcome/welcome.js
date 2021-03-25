import React from 'react';
import styles from './welcome.module.css';
import sampleImg from '../../common/images/default.jpg';

const Welcome = (props) => {
    return (
      <section className={styles.welcome}>
        <img className={styles.image} src={sampleImg} alt="project"/>
        <article className={styles.welcomeText}>방문해주셔서 감사합니다.<br/><br/>
        Portfolio<br/>
        with React, Firebase
        </article>
      </section>
    );
}

export default Welcome;