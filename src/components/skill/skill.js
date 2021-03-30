import React, { useState, useEffect } from 'react';
import styles from './skill.module.css';

const Skill = (props) => {
  const [active, setActive] = useState(false);
  
  const skillScrollEvent = () => {
    const scrollTopPoint = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    if(scrollTopPoint > clientHeight*0.6){
      setActive(true);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',skillScrollEvent);
  });

    return (
      <section className={styles.skill}>
        <div className={active? `${styles.cover} ${styles.active}`:`${styles.cover}`}>
          <h1 className={styles.skillTitle}>skill</h1>
        </div>
        <div className={styles.skills}>
          <ul className={styles.skillList}>
            <li className={styles.skillItem}>
              <span className={styles.html}>
                <i className="fab fa-html5"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>HTML</span>
              </span>
            </li>
            <li className={styles.skillItem}>
              <span className={styles.css}>
                <i className="fab fa-css3-alt"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>CSS</span>
                {/* <span className={styles.mask}></span> */}
              </span>
            </li>
            <li className={styles.skillItem}>
              <span className={styles.sass}>
                <i className="fab fa-sass"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>Sass</span>
                {/* <span className={styles.mask}></span> */}
              </span>
            </li>
            <li className={styles.skillItem}>
              <span className={styles.js}>
                <i className="fab fa-js-square"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>JavaScript</span>
                {/* <span className={styles.mask}></span> */}
              </span>
            </li>
            <li className={styles.skillItem}>
              <span className={styles.react}>
                <i className="fab fa-react"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>React</span>
                {/* <span className={styles.mask}></span> */}
              </span>
            </li>
            <li className={styles.skillItem}>
              <span className={styles.nodejs}>
                <i class="fab fa-node"></i>
                <span className={active ? `${styles.skillText} ${styles.active}`:`${styles.skillText}`}>NodeJs</span>
                {/* <span className={styles.mask}></span> */}
              </span>
            </li>
          </ul>
        </div>
      </section>
    );
}

export default Skill;