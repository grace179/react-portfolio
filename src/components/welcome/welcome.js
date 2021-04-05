import React from 'react';
import styles from './welcome.module.css';

const Welcome = () => {
    return (
      <section className={styles.welcome}>
        <div className={styles.welcomeImg}>
          <div className={styles.chracter}>
            <div className={styles.eyes}>
              <div>
              <div className={styles.brow}></div>
              <div className={styles.eye}></div>
              </div>
              <div>
              <div className={styles.brow}></div>
              <div className={styles.eye}></div>
              </div>
            </div>
            <div className={styles.ears}>
              <div className={styles.ear}></div>
              <div className={styles.ear}></div>
            </div>
            <div className={styles.mouth}>
              <div className={styles.nose}></div>
              <div className={styles.elem}></div>
              <div className={styles.elem}></div>
            </div>
          </div>
        </div>
        <article className={styles.welcomeText}>방문해주셔서 감사합니다.<br/><br/>
        Portfolio<br/>
        with React, Firebase<br/>
        <h6>발전하기위해 노력하겠습니다.</h6>
        </article>
        <i className="fas fa-chevron-down"></i>
      </section>
    );
}

export default Welcome;