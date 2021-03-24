import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = ({authService, loginOpen, handleCloseLogin}) => {
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
          <div className={loginOpen ? `${styles.openModal} ${styles.modal}`: `${styles.modal}`}>
            {
              loginOpen ? (
                <section>
                  <header>Login
                  <button onClick={handleCloseLogin}>X</button>
                  </header>
                  <main>
                  <ul>
                    <li><button className={styles.loginBtn} onClick={onLogin}>Google</button></li>
                    <li><button className={styles.loginBtn} onClick={onLogin}>Github</button></li>
                  </ul>
                  </main>
                </section>
              ):null
            }
          </div>
      </section>
    );
}

export default Login;