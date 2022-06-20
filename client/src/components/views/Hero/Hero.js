import React from 'react';

import styles from './Hero.module.scss';

const Hero = () => {

  return (
    <div className={styles.root}>
      <img alt="table" src="images/mainPage/home_logo.png" />
      <div className={styles.banner}>
        <p>
          ....Color this clumsiness
        </p>
      </div>
    </div>
  );
};

export default Hero;