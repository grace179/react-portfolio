import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    return (
      <section className={styles.footer}>
        {new Date().getFullYear()} &copy; Portfolio
      </section>
    );
}

export default Footer;