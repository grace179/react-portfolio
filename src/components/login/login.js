import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../header/auth_header';
import styles from './login.module.css';

const Login = ({authService}) => {
  const history = useHistory();
  const goCreate = (userId) => {
    history.push({
      pathname: '/create',
      state: {
        id: userId
      }
    });
  }

  const onLogin = (event) => {
    authService
      .socialLogin(event.currentTarget.textContent)
      .then(data => goCreate(data.user.uid));
  }

  useEffect(() => {
    authService
      .onAuthChange(user =>{
        user && goCreate(user.uid);
      })
  });
  
    return (
      <section>
        <AuthHeader/>
          <section className={styles.loginContainer}>
            <h1>Login</h1>
            <ul>
              <li><button className={styles.loginBtn} onClick={onLogin}>Google</button></li>
              <li><button className={styles.loginBtn} onClick={onLogin}>Github</button></li>
            </ul>
          </section>
        <Footer/>
      </section>
    );
}

export default Login;