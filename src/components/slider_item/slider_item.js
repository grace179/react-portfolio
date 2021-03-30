import React from 'react';
import styles from './slider_item.module.css';
import sampleImg from '../../common/images/default.jpg';

const SliderItem = ({project, pageNum, index}) => {
    
    const {title, desc, skills, link1, link2, fileUrl} = project;
    const url = fileUrl || sampleImg;
    // console.log(pageNum, index);
    return (
    
      <li className={pageNum === index ? `${styles.slideItem} ${styles.active}`:`${styles.slideItem}`}>
        <section className={styles.itemContainer}>
        <img className={styles.image} src={url} alt="project"/>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.skills}>{skills}</p>
          <a className={styles.link} rel="noreferrer" target="_blank" href={link1}>GitHub</a>
          <a className={styles.link} rel="noreferrer" target="_blank" href={link2}>Demo Link</a>
          <p className={styles.desc}>{desc}</p>
        </div>
        </section>
      </li>
      
    );
}

export default SliderItem;