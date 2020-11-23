import React from 'react';
import {Link} from 'react-router-dom'
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeTitleContainer}>
        <h2 className={styles.homeTitle}>Phonebook</h2>
        <p className={styles.homeSubtitle}>your reliable friend</p>
      </div>
      <div className={styles.homeButtonsContainer}>
        <Link to='/login' className={`${styles.homeButton} ${styles.homeButtonLogIn}`}>Sign In</Link>
        <Link to='/register' className={`${styles.homeButton} ${styles.homeButtonRegister}`}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;