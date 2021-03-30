import React, { useState } from 'react';
import Login from '../../components/login/login';
import styles from './home.module.css';
import Footer from '../../components/footer/footer';
import Welcome from '../../components/welcome/welcome';
import Slider from '../../components/slider/slider';
import Skill from '../../components/skill/skill';

const Home = ({authService, projectRepository}) => {

  const [loginOpen, setLoginOpen]= useState(false);
  const handleOpenLogin = () => {
    setLoginOpen(true);
  }
  const handleCloseLogin = () => {
    setLoginOpen(false);
  }

    return (
    <section className={styles.home}>
      <Welcome/>
      <Skill/>
      <Slider
        projectRepository={projectRepository}
        />

      <button 
        className={styles.loginBtn}
        onClick={handleOpenLogin}>Login</button>      
      <Login
          authService={authService}
          loginOpen={loginOpen}
          handleCloseLogin={handleCloseLogin}/>
      <Footer/>
    </section>
    );
}

export default Home;