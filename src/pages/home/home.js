import React, { useState } from 'react';
import Login from '../../components/login/login';
import styles from './home.module.css';

const Home = ({authService}) => {

  const [loginOpen, setLoginOpen]= useState(false);
  const handleOpenLogin = () => {
    setLoginOpen(true);
  }
  const handleCloseLogin = () => {
    setLoginOpen(false);
  }

    return (
    <section>
      <button 
        className={styles.loginBtn}
        onClick={handleOpenLogin}>Go Login</button>      
        <Login
          authService={authService}
          loginOpen={loginOpen}
          handleCloseLogin={handleCloseLogin}/>
    </section>
    );
}

export default Home;