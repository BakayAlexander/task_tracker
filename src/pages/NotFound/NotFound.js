import React from 'react';

import styles from './notFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.notFoundErrorNumber}>404</h1>
      <p className={styles.notFoundErrorText}>This page does not exist</p>
      <a
        className={styles.notFoundLink}
        href='/'
      >
        Back
      </a>
    </section>
  );
};

export default NotFound;
