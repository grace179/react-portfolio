import React, { useEffect } from 'react';
import styles from './mainheader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  const handleScroll = () => {
    const scrollTopPoint = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const contentHeight = scrollHeight - clientHeight;
    const percent = (scrollTopPoint / contentHeight) * 100;
    console.log(scrollTopPoint);
    console.log(scrollHeight);
    console.log(clientHeight)

    const scrollBar = document.getElementById('scroll-bar');
    scrollBar.style.width = percent + '%';
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

    return (
      <header className={styles.mainheader}>
        <div id="scroll-bar" className={styles.scrollBar}></div>
        <NavLink to="/">
          Portfoilo
        </NavLink>
        <NavLink to="/list">
          Project
        </NavLink>
      </header>
    );
}

export default MainHeader;