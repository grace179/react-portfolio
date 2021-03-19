import React, { useEffect } from 'react';
import styles from './create.module.css';
import { useHistory } from 'react-router-dom';
import AuthHeader from '../../components/header/auth_header';

const Create = ({authService}) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    })
  })

    return (
      <section className={styles.create}>
        <AuthHeader onLogout={onLogout}/>
          <h1>Create</h1>
      </section>
    );
}

export default Create;