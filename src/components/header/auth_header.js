import React from 'react';
import styles from './auth_header.module.css';

const AuthHeader = ({onLogout}) => {

  return (
      <header className={styles.authHeader}>
        { onLogout && (
          <button className={styles.logoutBtn} onClick={onLogout}>Logout</button>
        )}
      </header>
    );
}

export default AuthHeader;