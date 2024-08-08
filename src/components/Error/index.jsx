import React from 'react';
import { Link } from 'react-router-dom';
import styles from './error.module.scss';

function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.errorTitle}>404</h1>
      <h2 className={styles.errorSubtitle}>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className={styles.homeLink}>Retour sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
