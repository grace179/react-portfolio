import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <section className={styles.loadingContainer}>
      <div className={styles.loading}>
      </div>
      <p>데이터를 불러오고 있습니다</p>
    </section>
  );
};

export default Loading;