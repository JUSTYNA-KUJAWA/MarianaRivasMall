import React from 'react';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Message = () => {

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <img alt="mariana" src="images/mariana/mariana.png"/>
      </div>
      <div className={styles.text}>
        <p>Photographe / Plasticienne</p>
        <p>Knowledge and understanding of two/three quite different cultures. Find common ground between them and bring them closer rather than apart.
            I can take the positives of each of these cultures to my advantage. American-style communication and sales, French conceptualization and depth and Latin joy.</p>
      </div>
      <div className={styles.socialMedia}>
        <h4>Follow me on social media</h4>
        <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
        <ul>
          <li><button className={styles.button}><FontAwesomeIcon icon={faTwitter} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faInstagram} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faFacebook} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faPinterest} /></button></li>
        </ul>
      </div>
    </div>
  );
};

export default Message;